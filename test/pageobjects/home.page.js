import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLogin () {
        return $('button=Log in');
    }
    
    open () {
        return super.open('');
    }
}

export default new HomePage();
