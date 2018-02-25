import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductDetailPage, 
  ProductAddedModalPage, SummaryStepPage, SignInStepPage, 
  AddressStepPage, ShippingStepPage, PaymentStepPage, 
  BankPaymentPage, OrderResumePage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage = new MenuContentPage();
  const productListPage = new ProductListPage();
  const productDetailPage = new ProductDetailPage();
  const productAddedModalPage = new ProductAddedModalPage();
  const summaryStepPage = new SummaryStepPage();
  const signInStepPage = new SignInStepPage();
  const addressStepPage = new AddressStepPage();
  const shippingStepPage = new ShippingStepPage();
  const paymentStepPage = new PaymentStepPage();
  const bankPaymentPage = new BankPaymentPage();
  const orderResumePage = new OrderResumePage();


  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));

    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));

    await productListPage.goToFadedShortSleeve_TShirts();
    await(browser.sleep(3000));

    await productDetailPage.goToAddToCart();
    await(browser.sleep(3000));

    await productAddedModalPage.goToProceedToCheckout();
    await(browser.sleep(3000));

    await summaryStepPage.goToProceedToCheckout();
    await(browser.sleep(3000));

    await signInStepPage.goToSingIn('aperdomobo@gmail.com', 'WorkshopProtractor');
    await(browser.sleep(3000));

    await addressStepPage.goToProceedToCheckout();
    await(browser.sleep(3000));

    await shippingStepPage.goToProceedToCheckout();
    await(browser.sleep(3000));

    await paymentStepPage.goToPayByBankWire();
    await(browser.sleep(3000));

    await bankPaymentPage.goToConfirmOrder();
    await(browser.sleep(3000));

    await expect(orderResumePage.getOrderTitle()).toBe('Your order on My Store is complete.');
  });
});
