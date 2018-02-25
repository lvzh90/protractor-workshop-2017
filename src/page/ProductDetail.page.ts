import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage  {
  private get addToCart(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public goToAddToCart(): promise.Promise<void> {
    return this.addToCart.click();
  }
}
