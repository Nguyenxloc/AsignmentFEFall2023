
let myRoutteApp  = angular.module('myApp', ['ngRoute']);
myRoutteApp.run(function ($rootScope) { 
    $rootScope.value = 0; 
    $rootScope.author = "phuclocub";
});
myRoutteApp.config(function($routeProvider){
    $routeProvider
        .when(
            '/home',
            {
                templateUrl:'views/home.html',
                controller: HomeController
            }
        )
        .when(
            '/booking',
            {
                templateUrl:'views/booking.html',
                controller: BookingController
            }
        )
        .when(
            '/contact',
            {
                templateUrl:'views/contact.html',
                controller: ContactController
            }
        )
        .when(
            '/sercurity',
            {
                templateUrl:'views/sercurityPort.html',
                controller: SercurityController
            }
        )
        .when(
            '/manage',
            {
                templateUrl:'views/manageBooking.html',
                controller: ManageController
            }
        )
        .when(
            '/user',
            {
                templateUrl:'views/userFrame.html',
                controller: UserController
            }
        )
        .when(
            '/resultBooking',
            {
                templateUrl:'views/resultBooking.html',
                controller: ResultBookingController
            }
        )
        .when(
            '/updateForm',
            {
                templateUrl:'views/updateForm.html',
                controller: UpdateController
            }
        )
        .when(
            '/review',
            {
                templateUrl: 'views/review.html',
                controller: ReviewController
            }
        )
        .when(
            '/addPost',
            {
                templateUrl: 'views/addPost.html',
                controller: AddPostController
            }   
        )
        .when(
            '/postManage',
            {
                templateUrl: 'views/postManagement.html',
                controller: PostManageController
            }   
        )
        .when(
            '/signUp',
            {
                templateUrl : 'views/signUp.html',
                controller: SignUpController
            }
        )
        .when(
            '/messageResult',
            {
                templateUrl: 'views/message.html',
                controller:  MessageController
            }
        )
        .otherwise(
            {
                redirectTo: '/home',
            }
        )
});