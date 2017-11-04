SanTechApp.service('bookingServices', function($rootScope, $state, $http) {
  this.submitPassengerData = function(passengerName, passengerAge) {
    $rootScope.p_name = passengerName;
    $rootScope.p_age = passengerAge;
    $state.go('paymentportal');
  }
  this.payandBook = function(u_name, u_mail, p_name, p_age, t_date, f_name, f_from, f_to, f_depature_time, f_arrival_time, f_price) {
    $.post("http://localhost:8080/FinalMongoAttempt/SanService/control/booking", {
        u_name: u_name,
        u_mail: u_mail,
        p_name: p_name,
        p_age: p_age,
        t_date: t_date,
        f_name: f_name,
        f_from: f_from,
        f_to: f_to,
        f_departure_time: f_depature_time,
        f_arrival_time: f_arrival_time,
        f_price: f_price
      },
      function(data, status) {
        if (status == "success") {
          if (data.status == "success") {
            $state.go('santech.home');
            alert("Ticket Booked Successfully..! Check your mail or user account to view ticket.");
          }
        } else {
          alert("something went wrong - server error");
        }
      }
    );
  }
})
