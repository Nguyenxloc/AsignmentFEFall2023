window.BookingController = function ($scope, $http,$location) {
    $scope.title = "This is booing page";
    const apiStudents = "http://localhost:3000/bookingRequest";
    var countNullError = 0;
    var submitCount =0;
    function checkNull(x){
        countNullError=0
        try{
            if(x.fullName){
                
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
;
            }
            if(x.email.trim() === ""){
                countNullError++
                $scope.emailCheck="*Dont empty email field";
            }
        }
        catch(err){
            countNullError++
        }
        try{
            if(x.phonenumber){

            }
            if(x.phonenumber.trim() === ""){
                countNullError++
                $scope.phoneCheck="*Dont empty phone number";
            }
        }
        catch(err){
            countNullError++
        }
        try{
            if(x.flight){
                
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

            }
            if(x.dob.trim() === ""){
                countNullError++
                $scope.flightCheck="*Dont empty flight field";
            }
        }
        catch(err){
            countNullError++
            $scope.flightCheck="*Dont empty flight field";
        }
        try{
            if(x.luggage){
                
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
        submitCount++;
        if(submitCount === 1){
            checkNull($scope.customer)
        }
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