const QUOTES = [ 'Dallaire', 'Fuller', 'Hidalgo', 'Kauffman', 'Penfield',
                 'Wiener' ];
const CYCLE_MILLISECONDS = 30000;

angular.module('jeffyactive', [])

  .controller('QuoteCtrl', function($scope, $interval) {
    $scope.quote = randomQuote();

    function randomQuote() {
      var randomIndex = Math.floor(Math.random() * QUOTES.length);
      return QUOTES[randomIndex];
    }

    var cycle = $interval(function() {
      $scope.quote = randomQuote();
    }, CYCLE_MILLISECONDS);
  });
