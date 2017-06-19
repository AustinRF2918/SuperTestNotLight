import $ from 'jquery';
import DefineMap from 'can-define/map/';
import CanComponent from 'can-component';

import ContentView from 'js/views/content-view.stache';

const ContentViewModel = DefineMap.extend({
    currentPage: "string",

    formatCurrentPage: function() {
	const pageRoute = this.currentPage.split(".");
	const capitalize = (page) => page.charAt(0).toUpperCase() + page.slice(1);

	console.log(pageRoute.map(capitalize));

	return pageRoute.map(capitalize).join(": ");
    },

    currentPageIs: function(page) {
	return this.currentPage === page;
    }
});

CanComponent.extend({
    tag: "content-view",
    view: ContentView,
    ViewModel: ContentViewModel
});
