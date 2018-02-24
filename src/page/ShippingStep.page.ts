import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get acceptTermsAndConditions(): ElementFinder {
    return $('#cgv');
  }

  private get proceedToCheckout(): ElementFinder {
    return $('#form > p > button > span');
  }

  public async goToProceedToCheckout(): Promise<void> {
    await this.acceptTermsAndConditions.click();
    await this.proceedToCheckout.click();
  }
}
