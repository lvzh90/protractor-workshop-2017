import { $, ElementFinder, ExpectedConditions, browser } from 'protractor';

export class ProductAddedModalPage  {
  private get proceedToCheckout(): ElementFinder {
    return $('#layer_cart .button-container a');
  }

  public async goToProceedToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.proceedToCheckout), 3000);
    await this.proceedToCheckout.click();
  }
}
