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

  it('then should be bought a t-shirt', async () => {
    
    await browser.get('http://automationpractice.com/');

    await menuContentPage.goToTShirtMenu();

    await productListPage.goToFadedShortSleeve_TShirts();

    await productDetailPage.goToAddToCart();

    await productAddedModalPage.goToProceedToCheckout();

    await summaryStepPage.goToProceedToCheckout();

    await signInStepPage.goToSingIn('aperdomobo@gmail.com', 'WorkshopProtractor');

    await addressStepPage.goToProceedToCheckout();

    await shippingStepPage.goToProceedToCheckout();

    await paymentStepPage.goToPayByBankWire();

    await bankPaymentPage.goToConfirmOrder();

    await expect(orderResumePage.getOrderTitle()).toBe('Your order on My Store is complete.');
  });
});
