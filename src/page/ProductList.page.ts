import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private findByProduct(productName: string): ElementFinder {
    return $(`.product-container .left-block .product_img_link [title="${productName}"]`);
  }

  public goToProduct(productName: string): promise.Promise<void> {
    return this.findByProduct(productName).click();
  }
}
