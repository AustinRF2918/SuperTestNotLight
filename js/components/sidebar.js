import $ from 'jquery';
import DefineMap from 'can-define/map/';
import CanList from 'can-define/list/list';
import CanComponent from 'can-component';
import CanCompute from 'can-compute';

import SidebarView from 'js/views/sidebar.stache';

const SidebarViewModel = DefineMap.extend({
    currentSearch: CanCompute,
    currentPage: "string",
    updateCurrentSearch: function(newSearch) {
	this.currentSearch = newSearch.value;
    },
    fuzzyMatch: function(name, searchTerm) {
	return name.toLowerCase().includes(searchTerm.toLowerCase());
    }
});

CanComponent.extend({
    tag: "side-bar",
    view: SidebarView,
    ViewModel: SidebarViewModel,
    leakScope: true
});
