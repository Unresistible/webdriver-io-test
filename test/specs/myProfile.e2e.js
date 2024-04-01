import { expect } from '@wdio/globals'
import AuthorizationPage from '../pageobjects/authorization.page.js'
import MainMenu from '../pageobjects/main-menu.page.js'
import MyProfilePage from '../pageobjects/myprofile.page.js'

const EMAIL = 'ssls.automation+666@gmail.com'
const PASS = '123456'

describe('My profile page', () => {
    it('Client area - get and check profile data', async () => {
        await MyProfilePage.getProfileData();

        await AuthorizationPage.login(EMAIL, PASS)

        await MainMenu.userDropdown.click()
        await MainMenu.btnProfile.click()

        await expect(MyProfilePage.fieldName).toHaveText(MyProfilePage.userData.name)
        await expect(MyProfilePage.fieldEmail).toHaveText(MyProfilePage.userData.email)
        await expect(MyProfilePage.fieldPassword).not.toHaveValue('');
        await expect(MyProfilePage.fieldAddress).toHaveText(MyProfilePage.userData.address)
        await expect(MyProfilePage.fieldPhone).toHaveText(MyProfilePage.userData.phone)

        await expect(MyProfilePage.fieldSupportPin).toHaveText(MyProfilePage.userData.supportpin)   
        if (MyProfilePage.userData.newsletter) {
            await expect(MyProfilePage.checkboxNewsletter).toBeChecked();
        } else {
            await expect(MyProfilePage.checkboxNewsletter).not.toBeChecked();
        }
    })
})

