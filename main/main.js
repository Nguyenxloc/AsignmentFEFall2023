
let myRoutteApp  = angular.module('myApp', ['ngRoute']);
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
            '/resultBooking',
            {
                templateUrl:'views/resultBooking.html',
                controller: ResultBookingController
            }
        )
        .otherwise(
            {
                redirectTo: '/home',
            }
        )
});