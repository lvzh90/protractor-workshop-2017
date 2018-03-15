import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage   {
  private get proceedToCheckout(): ElementFinder {
    return $('[name="processAddress"]');
  }

  public goToProceedToCheckout(): promise.Promise<void> {
    return this.proceedToCheckout.click();
  }
}
