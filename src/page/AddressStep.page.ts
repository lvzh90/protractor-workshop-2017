import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage   {
  private get proceedToCheckout(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public goToProceedToCheckout(): promise.Promise<void> {
    return this.proceedToCheckout.click();
  }
}
