const axios = require('axios');

const setupWebhooks = async () => {
  const webhooks = [
    {
      topic: 'orders/create',
      address: 'https://hooks.zapier.com/hooks/catch/YOUR_ACCOUNT/ayat_order_created/',
      format: 'json'
    },
    {
      topic: 'orders/updated',
      address: 'https://hooks.zapier.com/hooks/catch/YOUR_ACCOUNT/ayat_order_updated/',
      format: 'json'
    }
  ];

  for (const webhook of webhooks) {
    try {
      await axios.post(
        `https://${process.env.SHOP_DOMAIN}/admin/api/2024-01/webhooks.json`,
        { webhook },
        {
          headers: {
            'X-Shopify-Access-Token': process.env.SHOPIFY_ACCESS_TOKEN
          }
        }
      );
      console.log(`✓ Webhook created: ${webhook.topic}`);
    } catch (error) {
      console.error(`✗ Failed to create webhook: ${webhook.topic}`, error.message);
    }
  }
};

setupWebhooks();
