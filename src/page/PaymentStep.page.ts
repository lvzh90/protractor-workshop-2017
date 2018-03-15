import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get payByBankWire(): ElementFinder {
    return $('#HOOK_PAYMENT a.bankwire');
  }

  public goToPayByBankWire(): promise.Promise<void> {
    return this.payByBankWire.click();
  }
}
