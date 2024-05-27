import { Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage{
        readonly page: Page;
        
        constructor(page:Page){
            super(page);

        }


}