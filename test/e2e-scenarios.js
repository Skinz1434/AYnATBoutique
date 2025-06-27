const E2EScenarios = {
  // Scenario 1: Complete Custom Embroidery Order
  testCustomEmbroideryOrder: async function() {
    console.log('🎯 E2E Test: Custom Embroidery Order\n');

    const steps = [
      // Step 1: Navigate to product
      async () => {
        console.log('1. Navigate to embroidered onesie product page');
        window.location.href = '/products/custom-embroidered-onesie';
        await this.waitForElement('.ayat-custom-product');
      },

      // Step 2: Select customization
      async () => {
        console.log('2. Select embroidery customization');
        document.getElementById('customization-type').value = 'embroidery';
        document.getElementById('customization-type').dispatchEvent(new Event('change'));
        await this.waitForElement('#quick-custom-form');
      },

      // Step 3: Enter custom text
      async () => {
        console.log('3. Enter personalization text');
        document.getElementById('custom-text').value = 'Aydan & Atley';
        document.getElementById('custom-text').dispatchEvent(new Event('input'));
      },

      // Step 4: Add to cart
      async () => {
        console.log('4. Add to cart');
        document.querySelector('.product-form__submit').click();
        await this.waitForElement('.cart-drawer.active');
      },

      // Step 5: Proceed to checkout
      async () => {
        console.log('5. Proceed to checkout');
        document.querySelector('[data-checkout-button]').click();
        console.log('✅ Custom embroidery order flow completed!');
      }
    ];

    // Execute steps
    for (const step of steps) {
      await step();
      await this.wait(1000); // Wait between steps
    }
  },

  // Helper functions
  waitForElement: function(selector, timeout = 5000) {
    return new Promise((resolve, reject) => {
      const interval = setInterval(() => {
        const element = document.querySelector(selector);
        if (element) {
          clearInterval(interval);
          resolve(element);
        }
      }, 100);

      setTimeout(() => {
        clearInterval(interval);
        reject(new Error(`Element ${selector} not found`));
      }, timeout);
    });
  },

  wait: function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
};
