window.AYATErrorMonitor = {
  init: function() {
    window.addEventListener('error', this.logError.bind(this));
    window.addEventListener('unhandledrejection', this.logPromiseRejection.bind(this));
  },

  logError: function(event) {
    const errorData = {
      message: event.message,
      source: event.filename,
      line: event.lineno,
      column: event.colno,
      stack: event.error?.stack,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString(),
      page: window.location.href
    };

    // Send to monitoring service
    this.sendToMonitoring('error', errorData);
  },

  logPromiseRejection: function(event) {
    const errorData = {
      reason: event.reason,
      promise: event.promise,
      timestamp: new Date().toISOString(),
      page: window.location.href
    };

    this.sendToMonitoring('promise_rejection', errorData);
  },

  sendToMonitoring: function(type, data) {
    // Send to your monitoring service (e.g., Sentry, LogRocket)
    console.error(`[AYAT ${type}]:`, data);
  }
};

AYATErrorMonitor.init();
