angular.module('app', ['ngRoute'])
    .factory('sessionFactory', sessionFactory)
    .service('userService', userService)
    .service('campusService', campusService)
    .service('offreService', offreService)
    .service('partnerService', partnerService)
    .service('newsService', newsService)
    .controller('loginController', loginController)
    .controller('campusController', campusController)
    .controller('offreController', offreController)
    .controller('homeController', homeController)
    .controller('partnerController', partnerController)
    .controller('newsController', newsController)
    .directive('file', findImage)
    .config(routes)
    .run(loginStatus);
