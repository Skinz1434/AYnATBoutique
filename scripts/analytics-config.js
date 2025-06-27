const AnalyticsConfig = {
  // Google Analytics 4
  GA4: {
    measurementId: 'G-XXXXXXXXXX',
    customEvents: [
      'customize_product_start',
      'customize_product_complete',
      'design_proof_approved',
      'custom_order_placed'
    ]
  },

  // Shopify Analytics Enhanced Ecommerce
  enhancedEcommerce: {
    enabled: true,
    customDimensions: {
      dimension1: 'customization_type',
      dimension2: 'production_time',
      dimension3: 'customer_segment'
    }
  },

  // Custom KPIs
  customKPIs: {
    'customization_conversion_rate': {
      formula: 'customize_complete / customize_start * 100',
      target: 65
    },
    'average_production_time': {
      formula: 'avg(order.fulfilled_at - order.created_at)',
      target: '5 days'
    },
    'custom_order_aov': {
      formula: 'sum(custom_order_value) / count(custom_orders)',
      target: 45
    }
  }
};
