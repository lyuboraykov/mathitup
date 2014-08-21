mathitup.controller('playController', ['scores', '$rootScope', '$scope', function(scores, $rootScope, $scope) {
   var playerName = $rootScope.name;
   $scope.expression = new Expression();
   $scope.result = 0;
   scores()[$rootScope.name] = 0;
   console.log(scores()['lyubo']);

   $scope.selectAnswer = function(answer) {
      if ($scope.expression.answers[$scope.expression.answerIndex] === answer) {
         $scope.logResult($scope.expression.obstacleWidth * $scope.expression.obstacleHeight);
      }
      $scope.expression = new Expression();
      $scope.$apply;
   }

   $scope.logResult = function(result) {
      $scope.result += result;
      scores[$rootScope.name] = result;
   }
}])
.controller('enterNameController', ['$scope', '$rootScope', function($scope, $rootScope){
   $scope.enterName = function() {
      $rootScope.name = $scope.name;
   }
}]);