import * as Pages from "../pages/index";
import { test as base} from "playwright-bdd";



type MyPomFixtures = {
     registerPage: Pages.RegisterPage;
     /*homePage : HomePage;
     cartPage : CartPage;*/

}

export const test = base.extend<MyPomFixtures>({
    registerPage : async({page}, use)=>{
        const registerPage = new Pages.RegisterPage(page);
        
        await use(registerPage);   
    },

   /* homePage : async({context}, use)=>{
        const homePage = new HomePage(await context.newPage());
        await use(homePage);   
    },

    
    cartPage : async({page}, use)=>{
        await use(new CartPage(page));   
    },*/

   

})