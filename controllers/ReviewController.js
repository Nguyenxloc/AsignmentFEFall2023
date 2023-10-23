window.ReviewController = function($scope,$http,$location,$rootScope){
    $scope.title="This is management page";
    $scope.reviewPost=[]
    const apiStudents = "http://localhost:3000/reviewPosts";
    $http.get(apiStudents).then(function (response) {
        $scope.reviewPost = response.data;
    })
}