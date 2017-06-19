import $ from 'jquery';
import DefineMap from 'can-define/map/';
import CanCompute from 'can-compute';
import CanComponent from 'can-component';

import TestResultView from 'js/views/test-result.stache';

const TestResultViewModel = DefineMap.extend({
    title: "string",
    feature: "string",
    when: "string",
    status: "string",
    associatedClass: "string",
    init: function() {
	if (this.status === "success") {
	    this.associatedClass = "test-result bg-success";
	} else {
	    this.associatedClass = "test-result bg-danger";
	}
    },
    branch: "string"
});

CanComponent.extend({
    tag: "test-result",
    view: TestResultView,
    ViewModel: TestResultViewModel
});
