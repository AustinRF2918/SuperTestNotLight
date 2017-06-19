import $ from 'jquery';
import DefineMap from 'can-define/map/';
import CanCompute from 'can-compute';
import CanComponent from 'can-component';

import NavigationItemView from 'js/views/navigation-item.stache';

const NavigationItemViewModel = DefineMap.extend({
    icon: "string",
    name: "string",
    nested: "boolean",
});

CanComponent.extend({
    tag: "navigation-item",
    view: NavigationItemView,
    ViewModel: NavigationItemViewModel
});
