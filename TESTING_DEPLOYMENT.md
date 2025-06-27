# Ay & At Boutique - Complete Testing & Deployment Guide

This guide outlines how to test and deploy the Ay & At Boutique platform.
It includes integration tests, end-to-end scenarios, deployment scripts, and
maintenance utilities.

## Integration Tests

- **test/ayat-integration-tests.js** – runs a suite of checks for app
  integrations, order tagging, email flows, and more.
- **test/e2e-scenarios.js** – contains end‑to‑end flows such as placing a
  custom embroidery order.

Execute these tests in a browser console or automation environment.

## Deployment

1. Run `deployment/pre-deploy-check.sh` to verify environment variables,
   required theme files, and that Shopify apps are installed.
2. Deploy the theme using Shopify CLI or Theme Kit.
3. Configure webhooks with `node scripts/setup-webhooks.js`.
4. Initialize automations with `node scripts/init-automations.js`.
5. Run `node scripts/post-deploy-verify.js` to ensure everything works
   after deployment.

## Performance Monitoring & Error Tracking

- **scripts/analytics-config.js** provides analytics and KPI configuration.
- **scripts/error-monitoring.js** initializes error listeners that can be
  wired to services like Sentry or LogRocket.

## Daily Maintenance

- **scripts/daily-health-check.sh** runs a quick status report covering site
  availability, recent orders, integrations, and performance metrics.

These resources offer a foundation for maintaining and testing the boutique's
website and Shopify store.
