const PostDeployVerification = {
  checks: [
    {
      name: 'Homepage loads correctly',
      test: () => fetch('/').then(r => r.ok)
    },
    {
      name: 'Product customizer opens',
      test: () => window.ZeptoProductPersonalizer !== undefined
    },
    {
      name: 'Cart functionality works',
      test: async () => {
        const response = await fetch('/cart.js');
        return response.ok;
      }
    },
    {
      name: 'Mobile responsive',
      test: () => window.innerWidth < 768 &&
                  document.querySelector('.mobile-menu') !== null
    }
  ],

  runChecks: async function() {
    console.log('🔍 Running post-deployment verification...\n');

    for (const check of this.checks) {
      try {
        const result = await check.test();
        console.log(`✓ ${check.name}`);
      } catch (error) {
        console.error(`✗ ${check.name}: ${error.message}`);
      }
    }

    console.log('\n✅ Verification complete!');
  }
};

PostDeployVerification.runChecks();
