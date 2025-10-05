// Track Stripe checkout links with Umami
// Add this as a plugin in your Nuxt app

export default ({ app }) => {
  if (process.client) {
    window.addEventListener('load', () => {
      const trackStripeLinks = () => {
        const stripeLinks = document.querySelectorAll('a[href*="book.stripe.com"]');
        
        stripeLinks.forEach(link => {
          if (link.dataset.umamiTracked) return;
          
          link.addEventListener('click', () => {
            if (window.umami) {
              window.umami.track('Stripe Checkout Click');
            }
          });
          
          link.dataset.umamiTracked = 'true';
        });
      };

      trackStripeLinks();

      // Watch for dynamically added content
      const observer = new MutationObserver(() => {
        trackStripeLinks();
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }
};
