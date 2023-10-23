window.SignUpController = function ($scope,$http,$location){
     $scope.title = "Register account"
     const api = "http://localhost:3000/account";
     const validateEmail = (email) => {
          return email.match(
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };
      function isVietnamesePhoneNumber(number) {
          return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
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
              if (x.gender) {
                      $scope.genderCheck = "";
              }
              if (x.gender.trim() === "") {
                  countNullError++
                  $scope.genderCheck = "*please fill out gender";
              }
          }
          catch (err) {
              countNullError++
              $scope.genderCheck = "*please fill out gender";
          }

          try {
              if (x.pass) {
               $scope.passCheck = "";
              }
              if (x.pass.trim() === "") {
                  countNullError++
                  $scope.passCheck = "*Dont empty pass field";
              }
          }
          catch (err) {
              countNullError++
              $scope.passCheck = "*Dont empty pass field";
          }
          
          try {
               if (x.correctPass) {
                if(x.correctPass ===x.pass){
                    $scope.correctPassCheck = "";
                }
                else{
                    $scope.correctPassCheck = "Not match to above pass word";
                }
               }
               if (x.correctPass.trim() === "") {
                   countNullError++
                   $scope.correctPassCheck = "*Dont empty correct pass field";
               }
           }
           catch (err) {
               countNullError++
               $scope.correctPassCheck = "*Dont empty correct pass field";
           }

          try {
              if (x.phonenumber) {
                  if(!isVietnamesePhoneNumber(x.phonenumber)){
                      countNullError++;
                      $scope.phoneCheck = "*phone number is not correct";
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
               if (x.wfield) {
                   $scope.wfieldCheck = "";
               }
               if (x.wfield.trim() === "") {
                   countNullError++
                   $scope.wfieldCheck = "*Dont empty working field";
               }
           }
           catch (err) {
               countNullError++
               $scope.wfieldCheck = "*Dont empty working field";
           }
          console.log("count error:" + countNullError)
          if (countNullError > 0) {
              return 1;
          }
          else {
              return 0;
          }
      }

     $scope.register = function(){
          if(validate($scope.user)===0){
               $scope.user.role = "user"
               $http.post(api,$scope.user)
          }
          else{
               console.log("validate failed")
          }
     }
}