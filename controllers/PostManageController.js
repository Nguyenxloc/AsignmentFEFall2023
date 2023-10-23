window.PostManageController = function($scope,$http,$location,$rootScope){
    $scope.title="This is management page";
    $scope.postList=[]
    const apiStudents = "http://localhost:3000/reviewPosts";
    $http.get(apiStudents).then(function (response) {
        for(let i=0;i<response.data.length;i++){
            if(response.data[i].author === $rootScope.author){
                $scope.postList.push(response.data[i]);
            }
        }
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
    $scope.addPost = function(){
        // $http.then(function(respone){$location.path('/addPost')})
        $location.path('addPost')
   }
}