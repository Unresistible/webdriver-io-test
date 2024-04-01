import { $ } from '@wdio/globals'
import Page from './page.js';
import HomePage from './home.page.js';

class AuthorizationPage extends Page {
    get inputEmail () {
        return $('[name="email"]');
    }

    get inputPassword () {
        return $('[name="password"]');
    }

    get btnShowPassword () {
        return $('span.icon-eye');
    }

    get btnHidePassword () {
        return $('span.icon-eye-off');
    }

    get btnSubmit () {
        return $('button=Login');
    }
    
    get tooltipError () {
        return $('span.tooltip-text')
    }

    async login (email, password) {
        await HomePage.open();
        await HomePage.btnLogin.click()
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    open () {
        return super.open('authorize');
    }
}

export default new AuthorizationPage();
