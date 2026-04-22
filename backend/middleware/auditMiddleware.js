import AuditLog from '../models/AuditLog.js';

export const logAction = (action, resourceName) => {
  return async (req, res, next) => {
    // Intercept the response to log AFTER it successfully completes
    const originalSend = res.send;
    
    res.send = function (data) {
      res.send = originalSend; // restore original to avoid infinite loop
      
      // If the request was successful, log it
      if (res.statusCode >= 200 && res.statusCode < 300) {
        if (req.user) {
          try {
            AuditLog.create({
              action: action,
              user: req.user._id,
              targetResource: resourceName,
              details: {
                method: req.method,
                originalUrl: req.originalUrl,
                params: req.params,
                query: req.query
                // omitting body to avoid logging sensitive data
              },
              ipAddress: req.ip
            });
          } catch (err) {
            console.error('Audit Log Failed to Save:', err);
          }
        }
      }
      
      return res.send(data);
    };
    
    next();
  };
};
