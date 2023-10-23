window.AddPostController = function ($scope, $http, $location, $rootScope, $compile) {
    $scope.title = "This is management page";
    $scope.postList = []
    const apiStudents = "http://localhost:3000/reviewPosts";
    var sourceObj = angular.element(document.querySelector("#content"));
    let idtextPara = 0;
    let index = 0;
    let nowObj;
    $http.get(apiStudents).then(function (response) {
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].author === $rootScope.author) {
                $scope.postList.push(response.data[i]);
            }
        }
    })

    $scope.update = function (x) {
        $rootScope.value = x
        $http.get(apiStudents).then(function (respone) { $location.path('/updateForm') })
    }
    
    $scope.del = function (x) {
        console.log($scope.customer)
        $http.delete(apiStudents + "/" + x).then(function (respone) { // this is the success
            console.log("del sucess")
        });
    }
    $scope.addPara = function () {
        index++
        var div = "<div class='col-lg - 8 md - 12 mt - 3' id='content' style='padding-top:30px'>" +
            "<textarea id='tittle' type='text' class='form-control' placeholder='Contents' aria-label='Username'" +
            "aria-describedby='addon-wrapping' style='font-size:16px;height:80px;'" +
            "ng-model='news.fullName' ng-click ='event=$event' ng-change='scaleRow(event)'></textarea>" +
            "</div >"
        var newElement = angular.element(div);
        console.log(newElement);
        var compile = $compile(newElement);
        var element = compile($scope)
        sourceObj.append(element);
    }
    $scope.scaleRow = function (e) {
        e.target.style.height = "";
        e.target.style.height = e.target.scrollHeight + "px";
    }

    $scope.addImg = function () {

    }

    $scope.test = function (e) {
        console.log(e.target.style);
    }
}