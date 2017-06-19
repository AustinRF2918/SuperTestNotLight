import $ from 'jquery';
import DefineMap from 'can-define/map/';
import CanComponent from 'can-component';

import DropdownView from 'js/views/dropdown.stache';

const DropdownViewModel = DefineMap.extend({
    showing: "boolean",
    name: "string",
    direction: "string",

    isLeft: function() {
	return this.direction === "left";
    },

    isRight: function() {
	return this.direction === "right";
    },

    isCenter: function() {
	return this.direction === "middle";
    }
});

CanComponent.extend({
    tag: "drop-down",
    view: DropdownView,
    ViewModel: DropdownViewModel
});
