mathitup.factory('scores', ['$firebase', function($firebase){
   return function scores(){
      var ref = new Firebase('https://mathitup.firebaseio.com');
      var sync = $firebase(ref);
      var scores = sync.$asArray();
      return scores;
   };
}])