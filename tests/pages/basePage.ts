import { Page } from '@playwright/test';


export class BasePage{
    page:Page;

    constructor(page:Page){
        this.page = page;
    }

    async goto(){
        try{
            await this.page.goto('https://www.polestar.com/global/developer/get-started/');
        }
        catch(error)
        {
            console.error(`Error navigating to URL: ${error}`);
        }
        
    }

}