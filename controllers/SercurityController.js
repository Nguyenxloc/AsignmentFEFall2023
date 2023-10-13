window.SercurityController = function($scope,$http,$location){
    $scope.title="This is security page";
    const apiAccounts = "http://localhost:3000/account";
    apiStudents="http://localhost:3000/bookingRequest";
    var accArr =[];
    $http.get(apiAccounts).then(function (response) {
        accArr = response.data;
        // var date = new Date(obj0.dob);
    })
    $scope.login=function(){
        
        try {
            for (let index = 0; index < accArr.length; index++) {
                if($scope.acc.user===accArr[index].account&&$scope.acc.pass===accArr[index].password){
                    if(accArr[index].role==="admin"){
                        $scope.message = ""
                        $http.get(apiStudents).then(function (respone) { $location.path('/manage') })
                    }
                    else{
                        $scope.message = "*you not have priority to access"
                        console.log($scope.message)
                    }
                }
                else{
                    $scope.message = "*UserName or Password is not correct"
                    console.log($scope.message)
                }
            }
        }
        catch (err) {
            $scope.message = "*UserName or Password is not correct"
            console.log($scope.message)
        }
       
    }
    
}