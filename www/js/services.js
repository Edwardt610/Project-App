angular.module('app.services', [])
.service('Management',function() {

  this.getDepartmentEvents = function (sDepartment) {
      return department_events.filter(function (event) {
          return event.department === sDepartment;
      });
  };

  this.getVenueEvents = function (sVenue) {
      return venue_events.filter(function (event) {
          return event.department === sVenue;
      });
  };

  this.getSelected = function() {

      return fashion_items.filter(function(item) {
          return item.quantity > 0;
      });

  };

  this.getItem = function (id) {

      return fashion_items.filter(function (item) {
          return item.id === id;
      })[0] || null;

  };
})

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}]);
