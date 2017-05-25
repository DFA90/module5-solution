(function (){

  "use strict";

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService) {
    var $ctrl = this;
    $ctrl.searchPerformed = false;
    // $ctrl.menuCategories = menuCategories;

    $ctrl.signUp = function(){

      SignUpService.getFavDish($ctrl.favDish).then(
        function(response){
          $ctrl.searchSuccess = true;
          $ctrl.searchPerformed = true;
          SignUpService.setUser({
            'first_name' : $ctrl.first_name,
            'last_name' : $ctrl.last_name,
            'email' : $ctrl.email,
            'phone' : $ctrl.phone,
            'favDish' : response
          })
        }, function(error){
          $ctrl.searchSuccess = false;
          $ctrl.searchPerformed = true;
        }
      )
    }
  }

})();
