import $ from 'jquery';
import DefineMap from 'can-define/map/';
import CanList from 'can-define/list/list';
import CanComponent from 'can-component';

import NavbarView from 'js/views/navigation.stache';

const NavbarViewModel = DefineMap.extend({
    name: "string",
    version: "string",
    currentPage: "string",
    navs: CanList,
    setPage: function(pageName) {
	this.currentPage = pageName;
	this.dispatch("page-change");
    }
});

CanComponent.extend({
    tag: "navigation-bar",
    view: NavbarView,
    ViewModel: NavbarViewModel,
});
