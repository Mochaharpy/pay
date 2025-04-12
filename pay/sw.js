self.addEventListener('paymentrequest', function (event) {
  event.respondWith({
    methodName: event.methodData[0].supportedMethods,
    details: {
      paymentToken: 'fake-bobbucks-token-12345'
    }
  });
});
