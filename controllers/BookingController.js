window.BookingController = function ($scope, $http, $location) {
    $scope.title = "This is booing page";
    const apiStudents = "http://localhost:3000/bookingRequest";
    var countNullError = 0;
    var submitCount = 0;
    // $scope.fullNameCheck="*";
    // $scope.idCheck="*";
    // $scope.emailCheck="*";
    // $scope.phoneCheck="*";
    // $scope.flightCheck="*";
    // $scope.dobCheck="*";
    // $scope.luggageCheck="*";
    // $scope.paymentCheck="*"; 

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    function isVietnamesePhoneNumber(number) {
        return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
    }
    function validateIDCardNo(idCardNo) {
        return /([0-9]{12})\b/.test(idCardNo);
    }
    function validate(x) {
        countNullError = 0
        try {
            if (x.fullName) {
                $scope.fullNameCheck = "";
            }
            if (x.fullName.trim() === "") {
                countNullError++
                $scope.fullNameCheck = "*Dont empty full name field";
            }
        }
        catch (err) {
            countNullError++
            $scope.fullNameCheck = "*Dont empty full name field";
        }
        try {
            if (x.idNo) {
                if(!validateIDCardNo(x.idNo)){
                    countNullError++;
                    $scope.idCheck = "*Identification number is not correct";
                }
                else{
                    $scope.idCheck = "";
                }
            }
            if (x.idNo.trim() === "") {
                countNullError++
                $scope.idCheck = "*Dont empty idCard field";
            }
        }
        catch (err) {
            countNullError++
            $scope.idCheck = "*Dont empty idCard field";
        }
        try {
            if (x.email) {
                if (validateEmail(x.email) === null) {
                    countNullError++;
                    $scope.emailCheck = "Email is not correct";
                }
                else {
                    $scope.emailCheck = "";
                }

            }
            if (x.email.trim() === "") {
                countNullError++
                $scope.emailCheck = "*Dont empty email field";
            }
        }
        catch (err) {
            countNullError++
            $scope.emailCheck = "*Dont empty email field";
        }
        try {
            if (x.phonenumber) {
                if(!isVietnamesePhoneNumber(x.phonenumber)){
                    countNullError++;
                    $scope.phoneCheck = "phone number is not correct";
                }
                else{
                    $scope.phoneCheck = "";
                }
            }
            if (x.phonenumber.trim() === "") {
                countNullError++
                $scope.phoneCheck = "*Dont empty phone number";
            }
        }
        catch (err) {
            countNullError++
            $scope.phoneCheck = "*Dont empty phone number";
        }
        try {
            if (x.flight) {
                $scope.flightCheck = "";
            }
            if (x.flight.trim() === "") {
                countNullError++
                $scope.flightCheck = "*Dont empty flight field";
            }
        }
        catch (err) {
            countNullError++
            $scope.flightCheck = "*Dont empty flight field";
        }
        try {
            if (x.dob) {
                $scope.dobCheck = "";
            }
            if (isNaN(x.dob)) {
                countNullError++
                $scope.dobCheck = "*Dont empty dob field";
            }
        }
        catch (err) {
            countNullError++
            $scope.dobCheck = "*Dont empty dob field";
        }
        try {
            if (x.luggage) {
                $scope.luggageCheck = ""
            }
            if (x.luggage.trim() === "") {
                countNullError++
                $scope.luggageCheck = "*Dont empty luggage field"
            }
        }
        catch (err) {
            countNullError++
            $scope.luggageCheck = "*Dont empty luggage field"
        }
        try {
            if (x.payment) {
                $scope.paymentCheck = "";
            }
            if (x.payment.trim() === "") {
                countNullError++
                $scope.paymentCheck = "*Dont empty payment field";
            }
        }
        catch (err) {
            countNullError++
            $scope.paymentCheck = "*Dont empty payment field";
        }
        console.log("count error:" + countNullError)
        if (countNullError > 0) {
            return 1;
        }
        else {
            return 0;
        }
    }

    function showMessage() {
    }
    $scope.submit = function () {
        
        if (validate($scope.customer) === 0) {
            console.log("do post");
            $http.post((apiStudents), $scope.customer).then(function (respone) { $location.path('/resultBooking') })
        }
        else {
            console.log("do nothing");
        }
    }
}