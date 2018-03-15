import { $, ElementFinder } from 'protractor';

export class ShippingStepPage {
  private get acceptTermsAndConditions(): ElementFinder {
    return $('#cgv');
  }

  private get proceedToCheckout(): ElementFinder {
    return $('[name="processCarrier"]');
  }

  public async goToProceedToCheckout(): Promise<void> {
    await this.acceptTermsAndConditions.click();
    await this.proceedToCheckout.click();
  }
}
