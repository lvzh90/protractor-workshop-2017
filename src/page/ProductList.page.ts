import { $$, ElementFinder, ElementArrayFinder, promise } from 'protractor';

export class ProductListPage {
  private get productCountainerList(): ElementArrayFinder {
    return $$('.product-container');
  }

  private findByProduct(productName: string): ElementFinder {
    return this.productCountainerList
      .filter((element: ElementFinder) =>
      element
          .$('.product-name')
          .getText()
          .then((text: string) => text.includes(productName)))
      .first();
  }

  public goToProduct(productName: string): promise.Promise<void> {
    return this.findByProduct(productName).$('img').click();
  }
}
