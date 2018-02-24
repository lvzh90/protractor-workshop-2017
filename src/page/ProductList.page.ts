import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get fadedShortSleeve_TShirts(): ElementFinder {
    return $('#center_column > ul > li > div > div.left-block > div > a.product_img_link > img');
  }

  public goToFadedShortSleeve_TShirts(): promise.Promise<void> {
    return this.fadedShortSleeve_TShirts.click();
  }
}
