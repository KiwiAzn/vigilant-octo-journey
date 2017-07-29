(function (app) {
    app.config(function ($stateProvider) {
        $stateProvider.state('map', {
            url: '/',
            views: {
                '@': {
                    templateUrl: '/html/map.html',
                    controller: 'MapCtrl',
                    controllerAs: 'vm',
                    bindToController: true
                }
            },
            ncyBreadcrumb: {
                label: 'Assets'
            }
        });
    });
}(angular.module('app.map', [
    require('angular-material'),
])));
