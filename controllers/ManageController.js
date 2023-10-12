window.ManageController = function($scope,$http){
    $scope.title="This is management page";
    $scope.bookingList=[]
    const apiStudents = "http://localhost:3000/bookingRequest";
    $http.get(apiStudents).then(function (response) {
        $scope.bookingList = response.data;
        console.log(response.data)
    })
    $scope.test=function(){
        console.log($scope.bookingList)
    }
}