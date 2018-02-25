import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentPage {
  private get confirmOrder(): ElementFinder {
    return $('#cart_navigation > button > span');
  }

  public goToConfirmOrder(): promise.Promise<void> {
    return this.confirmOrder.click();
  }
}
