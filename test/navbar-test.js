import $ from 'jquery';
import index from 'index';

function testNavigationItem(itemName, done) {
    const sidebarItems = $(".sidebar-item a");

    for (const item of sidebarItems) {
	if (item.text === " " + itemName) {
	    console.log("Clicked " + itemName);
	    item.click();
	}
    }

    setTimeout(function() {
	const pageHeader = $(".current-page-header h1");
	let flag = false;

	for (const item of pageHeader) {
	    if (item !== undefined) {
		expect(item.textContent).toBe(itemName);
		flag = true;
	    }
	}

	expect(flag).toBe(true);
	done();

    }, 1000);

}

describe('Navigation bar', function() {
    it('should navigate to the home page', function(done) {
	testNavigationItem("Home", done);
    });

    it('should navigate to the scenarios page', function(done) {
	testNavigationItem("Scenarios", done);
    });

    it('should navigate to the steps page', function(done) {
	testNavigationItem("Steps", done);
    });

});
