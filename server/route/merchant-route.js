var merchantController = require('../controller/merchant-controller');

module.exports = function(app){

  app.get('/api/merchant', merchantController.getMerchant);

}
