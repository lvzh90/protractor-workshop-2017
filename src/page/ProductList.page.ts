import { $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class ProductListPage {
  private get productCountainerList(): ElementArrayFinder {
    return $$('.product-container');
  }

  private findByProduct(productName: string): ElementFinder {
    return this.productCountainerList
    .filter(function (elem) {
      return elem.$('.product_img_link').getAttribute('Title').then(function (text) {
        return text === productName;
      });
    }).first();
  }

  public goToProduct(productName: string): promise.Promise<void> {
    return this.findByProduct(productName).click();
  }
}
