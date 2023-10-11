window.BookingController = function ($scope, $http,$location) {
    $scope.title = "This is booing page";
    const apiStudents = "http://localhost:3000/bookingRequest";
    var countNullError = 0;
    var submitCount =0;
    $scope.fullNameCheck="*";
    $scope.idCheck="*";
    $scope.emailCheck="*";
    $scope.phoneCheck="*";
    $scope.flightCheck="*";
    $scope.dobCheck="*";
    $scope.luggageCheck="*";
    $scope.paymentCheck="*"; 
    function checkNull(x){
        countNullError=0
        try{
            if(x.fullName){
                $scope.fullNameCheck="*";
            }
            if(x.fullName.trim() === ""){
                countNullError++
                $scope.fullNameCheck="*Dont empty full name field";
            }
        }
        catch(err){
            countNullError++
            $scope.fullNameCheck="*Dont empty full name field";
        }
        try{
            if(x.id){
                $scope.idCheck="*";
            }
            if(x.id.trim() === ""){
                countNullError++
                $scope.idCheck="*Dont empty idCard field";
            }
        }
        catch(err){
            countNullError++
            $scope.idCheck="*Dont empty idCard field";
        }
        try{
            if(x.email){
                $scope.emailCheck="*";
            }
            if(x.email.trim() === ""){
                countNullError++
                $scope.emailCheck="*Dont empty email field";
            }
        }
        catch(err){
            countNullError++
            $scope.emailCheck="*Dont empty email field";
        }
        try{
            if(x.phonenumber){
                $scope.phoneCheck="*";
            }
            if(x.phonenumber.trim() === ""){
                countNullError++
                $scope.phoneCheck="*Dont empty phone number";
            }
        }
        catch(err){
            countNullError++
            $scope.phoneCheck="*Dont empty phone number";
        }
        try{
            if(x.flight){
                $scope.flightCheck="*";
            }
            if(x.flight.trim() === ""){
                countNullError++
                $scope.flightCheck="*Dont empty flight field";
            }
        }
        catch(err){
            countNullError++
            $scope.flightCheck="*Dont empty flight field";
        }
        try{
            if(x.dob){
                $scope.dobCheck="*";
            }
            if(isNaN(x.dob)){
                countNullError++
                $scope.dobCheck="*Dont empty dob field";
            }
        }
        catch(err){
            countNullError++
            $scope.dobCheck="*Dont empty dob field";
        }
        try{
            if(x.luggage){
                $scope.luggageCheck="*"
            }
            if(x.luggage.trim() === ""){
                countNullError++
                $scope.luggageCheck="*Dont empty luggage field"
            }
        }
        catch(err){
            countNullError++
            $scope.luggageCheck="*Dont empty luggage field"
        }
        try{
            if(x.payment){
                $scope.paymentCheck="*"; 
            }
            if(x.payment.trim() === ""){
                countNullError++
                $scope.paymentCheck="*Dont empty payment field"; 
            }
        }
        catch(err){
            countNullError++
            $scope.paymentCheck="*Dont empty payment field"; 
        }
        console.log("count error:"+countNullError)
        if(countNullError > 0){
            return 1;
        } 
        else{
            return 0;
        }
    }

    function showMessage(){
    }
    $scope.submit = function () {
        if(checkNull($scope.customer)===0){
            console.log("do post");
             $http.post((apiStudents),$scope.customer).then(function(respone){$location.path('/resultBooking')})
        }
        else{
            console.log("do nothing");
            //do fill out validate
            
        }
    }
}