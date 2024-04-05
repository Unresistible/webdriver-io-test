import { expect } from '@wdio/globals'
import AuthorizationPage from '../pageobjects/authorization.page.js'
import MainMenu from '../pageobjects/main-menu.page.js'
import HomePage from '../pageobjects/home.page.js'

const URL = 'https://www.sbzend.ssls.com/'
const EMAIL = 'ssls.automation+666@gmail.com'
const PASS = '123456'

describe('Authorization page', () => {
    it('Welcome back! - login with valid credentials', async () => {
        await HomePage.open()
        await expect(browser).toHaveUrl(URL)
        await HomePage.btnLogin.click()
        await expect(browser).toHaveUrl(URL + 'authorize')

        await AuthorizationPage.inputEmail.setValue(EMAIL)
        await AuthorizationPage.inputPassword.setValue(PASS)
        await AuthorizationPage.btnShowPassword.click()
        await expect(AuthorizationPage.inputPassword).toHaveAttr('type', 'text')

        await AuthorizationPage.btnSubmit.click()
        await expect(MainMenu.userDropdown).toHaveText(EMAIL.toUpperCase())

        await MainMenu.logout()
    })

    it('Invalid email - not login with invalid credentials', async () => {
        await HomePage.open()
        await expect(browser).toHaveUrl(URL)
        await HomePage.btnLogin.click()
        await expect(browser).toHaveUrl(URL + 'authorize')

        await AuthorizationPage.inputPassword.setValue('some wrong pasw')
        await AuthorizationPage.btnShowPassword.click()
        await expect(AuthorizationPage.inputPassword).toHaveAttr('type', 'text')

        await AuthorizationPage.inputEmail.setValue('wrong@@email.com')
        await expect(AuthorizationPage.tooltipError).toHaveText(expect.stringContaining('Uh oh! This', 'isn’t an email'))
    })
})