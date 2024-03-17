function jsonResponseMiddleware(req, res, next) {
  const originalSend = res.send;

  res.send = function (data) {
      if (res.statusCode >= 400 && res.statusCode <= 599) {
          const errorMessage = (data && data.message) || 'Error en el servidor';
          return originalSend.call(this, { success: false, error: errorMessage });
      }

      return originalSend.call(this, { success: true, data: data });
  };

  next();
}

module.exports = jsonResponseMiddleware;