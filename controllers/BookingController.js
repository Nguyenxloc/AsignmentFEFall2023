window.BookingController = function ($scope, $http) {
    $scope.title = "This is booing page";
    const apiStudents = "http://localhost:3000/bookingRequest";
    function validateBooking(target) {
        let countError = 0;
        if(target.fullName.trim() === ""){
            countError++;
            $scope.fullNameCheck="*Dont empty full name field";
        };
        if(target.id.trim() === ""){
            countError++;
            $scope.idCheck="*Dont empty idCard field";
        };
        if(target.email.trim() === ""){
            countError++;
            $scope.emailCheck="*Dont empty email field";
        };
        if(target.phonenumber.trim() === ""){
            countError++;
            $scope.phoneCheck="*Dont empty phone number";
        };
        if(target.flight.trim() === ""){
            countError++;
            $scope.flightCheck="*Dont empty flight field";
        };
        if(target.dob.trim() === ""){
            countError++;
            $scope.dobCheck="*Dont empty dob field"
        };
        if(target.luggage.trim() === ""){
            countError++;
            $scope.luggageCheck="*Dont empty luggage field"
        };
        if(target.payment.trim() === ""){
            countError++;
            $scope.paymentCheck="*Dont empty payment field"; 
        }
        if(countError > 0){
            return 0;
        } 
        else{
            return 1;
        }
    }
    function showMessage(){
        
    }
    $scope.submit = function (x) {
        if(validateBooking(x)===1){
             // $http.post((apiStudents),x);
        }
        else{
            //do post ng-model

        }
    }
}