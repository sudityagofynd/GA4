// analytics.js
(function() {
  // Load the Google Analytics library asynchronously
  var script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-0NL9CMH9VN';
  document.head.appendChild(script);

  // Initialize the dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  // Configure Google Analytics with your tracking ID
  gtag('config', 'G-0NL9CMH9VN');
})();
