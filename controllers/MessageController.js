window.MessageController = function($scope,$http,$location){
    $scope.title = "Message page";
    const api = "http://localhost:3000/messenger";
    $scope.view=[]
    $http.get(api).then(function(reponse){
        $scope.view.fullName = reponse.data[reponse.data.length-1].fullName
        $scope.view.email = reponse.data[reponse.data.length-1].email
        $scope.view.subject = reponse.data[reponse.data.length-1].subject
        $scope.view.mesPhase = reponse.data[reponse.data.length-1].mesPhase
    }) 
}