SanTechApp.service('bookingServices', function($rootScope, $state, $http) {
  this.submitPassengerData = function(passengerName,passengerAge) {
    $rootScope.p_name=passengerName;
    $rootScope.p_age=passengerAge;
    $state.go('paymentportal');
  }
  this.payandBook = function(u_name,u_mail,p_name,p_age,t_date,f_name,f_from,f_to,f_depature_time,f_arrival_time,f_price){
    alert(t_date);
    // alert(b);
    // alert(c);
    // alert(d);
    // alert(e);
    // alert(f);
    // alert(g);
    // alert(h);
    // alert(i);
    // alert(j);
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
      // function(data, status) {
      //   if (status == "success") {
      //     if (data.status == "success") {
      //       alert("details submitted!");
      //       $rootScope.sessionHolder = data.user.id;
      //       $rootScope.user = data.user;
      //       if ($rootScope.user.role == "user") {
      //         $rootScope.pre_signin_tab = false;
      //         $rootScope.post_signin_tab = true;
      //         // $state.go('flights');
      //       }
      //     } else {
      //       alert("Already Registered.! or Invalid Data.! ")
      //     }
      //   } else {
      //     alert("something went wrong - server error");
      //   }
      // }
    );
  }
})
