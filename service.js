(function () {
    'use strict';

    angular.module('NarrowItDownApp')
        .service('MenuSearchService', MenuSearchService);

    MenuSearchService.$inject = ['$http'];
    
    function MenuSearchService($http) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: 'GET',
                url: 'https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json'
            }).then(function (result) {
                var foundItems = [];
                var menuItems = result.data;
                
                if (!Array.isArray(menuItems)) {
                    
                    return foundItems;
                }
                
                if (!searchTerm) {
                    return foundItems;
                }
                
                searchTerm = searchTerm.toLowerCase();
                menuItems.forEach(function (item) {
                    if (item.description.toLowerCase().includes(searchTerm)) {
                        foundItems.push(item);
                    }
                });
                
                return foundItems;
            });
        };
    }
    
})();
