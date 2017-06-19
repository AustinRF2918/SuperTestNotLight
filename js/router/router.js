import canRoute from 'can-route-pushstate';
import DefineMap from 'can-define/map/';

const ApplicationRouter = new DefineMap({
    init: function() {
	canRoute("{page}", {page: "home"});
	canRoute("{page}/{subpage}", {page: "home", subpage: ""});
	canRoute.ready();
    },

    getCurrentPage: function() {
	const page = canRoute.attr("page"),
	    subpage = canRoute.attr("subpage");

	if (subpage) {
	    return page + "." + subpage;
	} else {
	    return page;
	}
    },

    setCurrentPage: function(page) {
	const routeData = page.split(".");

	if (routeData.length === 1) {
	    canRoute.attr({page: routeData[0],
			   branch: canRoute.data.branch}, true);
	} else  if (routeData.length === 2) {
	    canRoute.attr({
		page: routeData[0],
		subpage: routeData[1]
	    });
	}
    },

    setCurrentBranch: function(newBranch) {
	canRoute.data.set({branch: newBranch});
    },

    getCurrentBranch: function() {
	if (canRoute.data.branch) {
	    return canRoute.data.branch;
	} else {
	    this.setCurrentBranch("master");
	    return canRoute.data.branch;
	}
    }
})


export {ApplicationRouter};


