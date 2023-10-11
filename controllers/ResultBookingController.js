window.ResultBookingController = function($scope,$http){
    $scope.title="Booking succesfully";
    const apiStudents = "http://localhost:3000/bookingRequest";
    $http.get(apiStudents).then(function (response) {
        var obj0 = response.data[response.data.length-1];
        // var date = new Date(obj0.dob);
        $scope.fullname = obj0.fullName;
        $scope.id = obj0.idNo;
        $scope.email = obj0.email;
        $scope.gender = obj0.gender;
        $scope.phone = obj0.phonenumber;
        $scope.flight = obj0.flight;
        $scope.dob = obj0.dob;
        $scope.luggage = obj0.luggage;
        $scope.payment = obj0.payment;
        $scope.status = obj0.status;
    })
}