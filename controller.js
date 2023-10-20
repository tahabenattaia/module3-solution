(function () {
    'use strict';

    angular.module('NarrowItDownApp')
        .controller('NarrowItDownController', NarrowItDownController);

    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var narrowCtrl = this;
        narrowCtrl.found = [];
        narrowCtrl.searchTerm = "";

        narrowCtrl.narrowItDown = function () {
            if (narrowCtrl.searchTerm.trim() === "") {
                narrowCtrl.found = [];
            } else {
                MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
                    .then(function (foundItems) {
                        narrowCtrl.found = foundItems;
                    });
            }
        };

        narrowCtrl.removeItem = function (index) {
            narrowCtrl.found.splice(index, 1);
        };
    }

})();
