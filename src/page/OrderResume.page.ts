import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  private get orderTitle(): ElementFinder {
    return $('#center_column > div > p > strong');
  }

  public getOrderTitle(): promise.Promise<string> {
    return this.orderTitle.getText();
  }
}