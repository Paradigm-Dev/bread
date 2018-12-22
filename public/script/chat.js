var app = angular.module('chatApp', ['firebase']);

app.controller('ChatController', function($scope, $firebaseArray) {
    var ref = firebase.database().ref().child('messages');
    $scope.messages = $firebaseArray(ref);
    var ref = firebase.database().ref().child('usernames');
    $scope.usernames = $firebaseArray(ref);

    $scope.send = function() {
        document.getElementById("username").value="";
        document.getElementById("message").value="";
        $scope.messages.$add({
            message: $scope.messageText,
            date: Date.now(),
            username: $scope.usernameText
        })
    }

})
