angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('tabsController.highlightEvents', {
    url: '/highlightEvents',
    views: {
      'tab1': {
        templateUrl: 'templates/highlightEvents.html',
        controller: 'highlightEventsCtrl'
      }
    }
  })

  .state('tabsController.searchByDepartment', {
    url: '/searchByDepartment',
    views: {
      'tab2': {
        templateUrl: 'templates/searchByDepartment.html',
        controller: 'searchByDepartmentCtrl'
      }
    }
  })

  .state('tabsController.searchByVenue', {
    url: '/searchByVenue',
    views: {
      'tab3': {
        templateUrl: 'templates/searchByVenue.html',
        controller: 'searchByVenueCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.login', {
    url: '/login',
    views: {
      'tab4': {
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      }
    }
  })

  .state('tabsController.accountInfo', {
    url: '/accountInfo',
    views: {
      'tab4': {
        templateUrl: 'templates/accountInfo.html',
        controller: 'accountInfoCtrl'
      }
    }
  })

  .state('tabsController.departmentEvents', {
    url: '/departmentEvents',
    views: {
      'tab2': {
        templateUrl: 'templates/departmentEvents.html',
        controller: 'departmentEventsCtrl'
      }
    }
  })

  .state('tabsController.venueEvents', {
    url: '/venueEvents',
    views: {
      'tab3': {
        templateUrl: 'templates/venueEvents.html',
        controller: 'venueEventsCtrl'
      }
    }
  })

  .state('tabsController.eventDetails', {
    url: '/eventDetails',
    views: {
      'tab1': {
        templateUrl: 'templates/eventDetails.html',
        controller: 'eventDetailsCtrl'
      }
    }
  })

  .state('tabsController.registeredEvent', {
    url: '/registeredEvent',
    views: {
      'tab4': {
        templateUrl: 'templates/registeredEvent.html',
        controller: 'registeredEventCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/page1/highlightEvents')


});