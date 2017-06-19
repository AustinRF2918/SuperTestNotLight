import $ from 'jquery';
import DefineMap from 'can-define/map/';
import CanComponent from 'can-component';
import CanCompute from 'can-compute';

import SidebarDropdownView from 'js/views/sidebar-dropdown.stache';

const SidebarDropdownViewModel = DefineMap.extend({
    showing: "boolean",
    name: "string",
    icon: "string",
    getClassName: function() {
	return `fa fa-${this.icon} fa-fw`;
    },
    expand: function() {
    },
    contract: function() {
    }
});

CanComponent.extend({
    tag: "side-bar-dropdown",
    view: SidebarDropdownView,
    ViewModel: SidebarDropdownViewModel
});
