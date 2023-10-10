window.BookingController = function ($scope, $http,$location) {
    $scope.title = "This is booing page";
    const apiStudents = "http://localhost:3000/bookingRequest";
    var countNullError = 0;
    function checkNull(x){
        countNullError=0
        try{
            if(x.fullName){
                countNullError=0
            }
            if(x.fullName.trim() === ""){
                countNullError++
            }
        }
        catch(err){
            countNullError++
        }
        console.log("count error:"+countNullError)
        
    }
    function checkNull2(x){
        if(x){
            countNullError=0
            return 0;
        }
        if(x.trim() === ""){
            countNullError++
            return 1;  
        }
    }


    function validateBooking() {
        if(checkNull($scope.customer.fullName)===1){
            $scope.fullNameCheck="*Dont empty full name field";
        };
        if(checkNull($scope.customer.id)===1){
            $scope.idCheck="*Dont empty idCard field";
        };
        if(checkNull($scope.customer.email)===1){
            $scope.emailCheck="*Dont empty email field";
        };
        if(checkNull($scope.customer.phonenumber)===1){
            $scope.phoneCheck="*Dont empty phone number";
        };
        if(checkNull($scope.customer.flight)===1){
            $scope.flightCheck="*Dont empty flight field";
        };
        if(checkNull($scope.customer.dob)===1){
            $scope.dobCheck="*Dont empty dob field"
        };
        if(checkNull($scope.customer.luggage)===1){
            $scope.luggageCheck="*Dont empty luggage field"
        };
        if(checkNull($scope.customer.payment)===1){
            $scope.paymentCheck="*Dont empty payment field"; 
        }
        if(countError > 0){
            return 1;
        } 
        else{
            return 0;
        }
    }
    function showMessage(){
    }
    $scope.submit = function () {
        checkNull($scope.customer)
        // if(validateBooking()===0){
        //     console.log("do post");
        //      $http.post((apiStudents),x).success(function(respone){$location.path('/resultBooking')})
        // }
        // else{
        //     console.log("do nothing");
        //     //do nothing
        // }
    }
}