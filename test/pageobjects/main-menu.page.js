import { $ } from '@wdio/globals'
import Page from './page.js';
import HomePage from './home.page.js';

/**
 * sub page containing specific selectors and methods for a menu navigation and actions
 */
class MainMenu extends Page {
    get userDropdown () {
        return $('div.ssls-header-user > button > span');
    }

    get btnProfile () {
        return $('*=Profile');
    }

    get btnLogout () {
        return $('button*=Log out');
    }    

    async logout() {
        await this.userDropdown.click()
        await this.btnLogout.click()
        await browser.pause(500); //delay for the site log out
        await HomePage.open()
    }
}

export default new MainMenu();
