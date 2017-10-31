SanTechApp.service('flightServices', function($rootScope, $state, $http) {
  this.checkFlight = function(flight_from, flight_to) {
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/flightSearch", {
        flight_from: flight_from,
        flight_to: flight_to
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {
            $rootScope.sessionHolder = data.flights.flight_id;
            $rootScope.availableFlights = data.flights; {
              // alert(data.flights[0].flight_from);
              $state.go('flights.list');
            }

          } else {
            alert("provided credentials are wrong!")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }
})
