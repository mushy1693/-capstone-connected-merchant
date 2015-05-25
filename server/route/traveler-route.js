var travelerController = require('../controller/traveler-controller');

module.exports = function(app){

  app.get('/api/traveler', travelerController.getTraveler);

}
