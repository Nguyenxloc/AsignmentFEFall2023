window.ManageController = function($scope,$http,$location,$rootScope){
    $scope.title="This is management page";
    $scope.bookingList=[]
    const apiStudents = "http://localhost:3000/bookingRequest";
    $http.get(apiStudents).then(function (response) {
        $scope.bookingList = response.data;
    })
    $scope.update=function(x){
        $rootScope.value = x
        $http.get(apiStudents).then(function (respone) { $location.path('/updateForm') })
    }
    $scope.del = function (x) {
        console.log($scope.customer)
            $http.delete(apiStudents + "/" + x).then(function (respone) { // this is the success
                console.log("del sucess")
            });
    }
}