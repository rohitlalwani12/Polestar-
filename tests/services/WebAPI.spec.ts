import { test, expect } from '@playwright/test';

test('GET request - positive test @api', async ({ request }) => {
  const response = await request.get('/api/users?page=2');
  expect(response.status()).toBe(200);
  expect(response.json()).toEqual({
    page: 2,
    per_page: 6,
    total: 12,
    total_pages: 2,
    data: [
      {
        id: 7,
        email: 'michael.lawson@reqres.in',
        first_name: 'Michael',
        last_name: 'Lawson',
        avatar: 'https://reqres.in/img/faces/7-image.jpg',
      },
    ],
  });
});

test('GET request - negative test (non-existent endpoint) @api', async ({ request }) => {
  const response = await request.get('/api/non-existent-endpoint');
  expect(response.status()).toBe(404);
});

test('POST request - positive test @api', async ({ request }) => {
  const response = await request.post('/api/register', {
    data: {
      email: 'testuser@example.com',
      password: 'testpassword',
    },
  });
  expect(response.status()).toBe(200);
  expect(response.json()).toEqual({
    id: 4,
    email: 'testuser@example.com',
    token: 'QpwL5tke4Pnpja7X4JMLYhS1',
  });
});

test('POST request - negative test (invalid email) @api', async ({ request }) => {
  const response = await request.post('/api/register', {
    data: {
      email: 'testuser',
      password: 'testpassword',
    },
  });
  expect(response.status()).toBe(400);
  expect(response.json()).toEqual({
    error: 'Missing password',
  });
});

test('PUT request - positive test @api', async ({ request }) => {
  const response = await request.put('/api/users/2', {
    data: {
      name: 'Updated User',
      job: 'Software Engineer',
    },
  });
  expect(response.status()).toBe(200);
  expect(response.json()).toEqual({
    name: 'Updated User',
    job: 'Software Engineer',
    id: '2',
    updatedAt: expect.any(String),
  });
});

test('PUT request - negative test (non-existent user ID) @api', async ({ request }) => {
  const response = await request.put('/api/users/9999', {
    data: {
      name: 'Non-existent User',
      job: 'Software Engineer',
    },
  });
  expect(response.status()).toBe(404);
});

test('DELETE request - positive test @api', async ({ request }) => {
  const response = await request.delete('/api/users/2');
  expect(response.status()).toBe(204);
});

test('DELETE request - negative test (non-existent user ID) @api', async ({ request }) => {
  const response = await request.delete('/api/users/9999');
  expect(response.status()).toBe(404);
});