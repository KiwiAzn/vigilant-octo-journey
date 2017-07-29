const platform = new H.service.Platform({
    'app_id': 'J8OBZzqaeTnw6uDVXQ4z',
    'app_code': '912OsL1so_K6IYE49DHwyw'
});

class MapCtrl {

    constructor() {
        console.log(platform);
    }
}

(function (app) {
    app.controller('MapCtrl', MapCtrl);
}(angular.module('app.map')));
