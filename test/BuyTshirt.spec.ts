import { browser } from 'protractor';
import { MenuContentPage, ProductListPage, ProductDetailPage, 
  ProductAddedModalPage, SummaryStepPage, SignInStepPage, 
  AddressStepPage, ShippingStepPage, PaymentStepPage, 
  BankPaymentPage, OrderResumePage } from '../src/page';

describe('Buy a t-shirt', () => {

  describe('Load the page http://automationpractice.com/', () => {
    beforeAll(async () => {
      await browser.get('http://automationpractice.com/');
    });

    describe('T-shirt purchase process', () => {
      const menuContentPage = new MenuContentPage();
      const productListPage = new ProductListPage();
      const productDetailPage = new ProductDetailPage();
      const productAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage = new SummaryStepPage();
  
      beforeAll(async () => {
        await menuContentPage.goToTShirtMenu();
        
        await productListPage.goToProduct('Faded Short Sleeve T-shirts');
        await productDetailPage.goToAddToCart();
        await productAddedModalPage.goToProceedToCheckout();
        await summaryStepPage.goToProceedToCheckout();
      });

      describe('Logeo in the application', () => {
        const signInStepPage = new SignInStepPage();
    
        beforeAll(async () => {
          await signInStepPage.goToSingIn('aperdomobo@gmail.com', 'WorkshopProtractor');
        });

        describe('Select the default address', () => {
          const addressStepPage = new AddressStepPage();
      
          beforeAll(async () => {
            await addressStepPage.goToProceedToCheckout();
          });

          describe('Payment in the bank', () => {
            const shippingStepPage = new ShippingStepPage();
            const paymentStepPage = new PaymentStepPage();
            const bankPaymentPage = new BankPaymentPage();
            const orderResumePage = new OrderResumePage();
        
            beforeAll(async () => {
              await shippingStepPage.goToProceedToCheckout();
              await paymentStepPage.goToPayByBankWire();
              await bankPaymentPage.goToConfirmOrder();
            });
        
            it('The order is completed', async () => {
              await expect(orderResumePage.getOrderTitle())
              .toBe('Your order on My Store is complete.');
            });
          }); 
        });
      });
    });
  });
});
