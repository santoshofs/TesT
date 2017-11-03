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
              $state.go('santech.flights.list');
            }

          } else {
            alert("provided credentials are wrong!")
          }
        } else {
          alert("something went wrong - server error");
        }
      });
  }
  this.bookTicket = function(flight) {
    if ($rootScope.pre_signin_tab == true){
      alert("Please Login.!");
      $('.modal').modal('show');
    }
    else {
      alert($rootScope.travelDate);
      // $rootScope.u_name=user.name;
      // $rootScope.u_mail=user.email;
      $rootScope.f_name=flight.flight_name;
      $rootScope.f_from=flight.flight_from;
      $rootScope.f_depature_time=flight.flight_depature_time;
      $rootScope.f_arrival_time=flight.flight_arrival_time;
      $rootScope.f_to=flight.flight_to;
      $rootScope.f_price=flight.flight_price;
      $state.go('booking');
    }


  }
})
