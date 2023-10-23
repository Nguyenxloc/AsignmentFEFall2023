window.ContactController = function($scope,$http,$location){
    $scope.title="This is contact page";
    const api = "http://localhost:3000/messenger";
    let stt = 0;
    $scope.sendMes=function(){
        if(validate()===1){
            $http.post(api,$scope.mes).then(function(){
                $location.path("/messageResult")
            })
        }
        else{
            console.log("Failed to validate");
        }
    }
    function validate(){
        console.log($scope.mes.fullName===undefined)
        if($scope.mes.fullName === undefined||$scope.mes.email === undefined||$scope.mes.subject === undefined||
            $scope.mes.mesPhase === undefined){
                console.log("case 1");
                return 0;
            }
        else{
                console.log("case 2")
            return 1;
        }
    }
}