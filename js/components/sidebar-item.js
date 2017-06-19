import $ from 'jquery';
import DefineMap from 'can-define/map/';
import CanList from 'can-define/list/list';
import CanComponent from 'can-component';
import CanCompute from 'can-compute';

import SidebarItemView from 'js/views/sidebar-item.stache';

const SidebarItemViewModel = DefineMap.extend({
    showing: "boolean",
    name: "string",
    icon: "string",
    getClassName: function() {
	return `fa fa-${this.icon} fa-fw`;
   }
});

CanComponent.extend({
    tag: "side-bar-item",
    view: SidebarItemView,
    ViewModel: SidebarItemViewModel,
    leakScope: true
});
