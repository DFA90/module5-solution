(function () {
"use strict";

angular.module('public')
.service('SignUpService', SignUpService);


SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;
  var user;

  service.getFavDish = function (favDish) {
    return $http.get(ApiPath + '/menu_items/' + favDish + '.json').
    then(function (response) {
      return response.data;
    });
  };

  service.setUser = function(newUser){
    user = newUser;
  }

  service.getUser = function(){
    return user;
  }

}



})();
