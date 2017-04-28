var app = angular.module("controllerApp", []);

app.controller("myCtrl", function($scope) {
    $scope.value = 0;
    $scope.coeff = 0;
    $scope.result = 0;
    $scope.invertedResult = 0;

    $scope.convert = function() {
        $scope.result = converterObj.convert($scope.value, $scope.coeff);
        $scope.invertedResult = converterObj.convertInverse($scope.value, $scope.coeff);
    }
});


var converterObj = {
    convert : function(value, coeff) {
        return value * coeff;
    },

    convertInverse : function(value, coeff) {
        return value / coeff;
    }
}