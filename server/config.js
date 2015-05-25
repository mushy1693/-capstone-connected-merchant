//set app configuration
exports.set = {

  port: process.env.PORT || 3000,
  home: '/client/js/angular/index.html',
  merchantChat: '/client/js/merchant-chat/index.html',
  travelerChat: '/client/js/traveler-chat/index.html',
  connection: "mongodb://localhost:27017/connected-merchant"

}
