var app = angular.module('chatApp', ['firebase']);

app.controller('ChatController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);
        var ref = firebase.database().ref().child('usernames');
    $scope.usernames = $firebaseArray(ref);

    $scope.send = function() {
        document.getElementById("hi").value="";
        document.getElementById("bye").value="";
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now(),
            username: $scope.usernameText
        })
    }

})

var email = email
var password = password

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   console.log(error.code);
   console.log(error.message);
});
