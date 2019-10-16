import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getLoginText() {
    return element(by.css('app-login-page h1')).getText() as Promise<string>;
  }

  getLoginButton() {
    return element(by.id('validUserButton'));
  }

  getMainText() {
    return element(by.css('app-main-page h1')).getText() as Promise<string>;
  }
}
