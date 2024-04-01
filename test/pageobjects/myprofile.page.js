import { $ } from '@wdio/globals'
import Page from './page.js';
import AuthorizationPage from './authorization.page.js';
import MainMenu from './main-menu.page.js';

const EMAIL = 'ssls.automation+666@gmail.com'
const PASS = '123456'

class MyProfilePage extends Page {     
    constructor() {
        super();
        this.userData = {};
    }

    get fieldName () {
        return $('[ng-hide="activeRow === \'name\'"]');
    }

    get fieldEmail () {
        return $('[ng-hide="activeRow === \'email\'"]');
    }

    get fieldPassword () {
        return $('[ng-hide="activeRow === \'password\'"]');
    }

    get fieldPhone () {
        return $('[ng-hide="activeRow === \'phone\'"]');
    }

    get fieldAddress () {
        return $('[ng-hide="activeRow === \'address\'"]');
    }

    get fieldSupportPin () {
        return $('.item[ng-class*="activeRow !== \'pin\'"]');
    }

    get checkboxNewsletter () {
        return $("input[name='newsletterOn']");
    }

    async getProfileData() {        
        await AuthorizationPage.login(EMAIL, PASS)

        await MainMenu.userDropdown.click()
        await MainMenu.btnProfile.click()
        
        this.userData.name = await this.fieldName.getText();
        this.userData.email = await this.fieldEmail.getText();
        this.userData.password = await this.fieldPassword.getText();
        this.userData.address = await this.fieldAddress.getText();
        this.userData.phone = await this.fieldPhone.getText();
        this.userData.supportpin = await this.fieldSupportPin.getText();
        this.userData.newsletter = await this.checkboxNewsletter.isSelected();

        await MainMenu.logout()
    }
    
    open () {
        return super.open('user/profile');
    }
}

export default new MyProfilePage();
