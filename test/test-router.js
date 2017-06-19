import {ApplicationRouter} from 'js/router/router';

describe('Router', function() {
    it('Should properly go to a route', function() {
	ApplicationRouter.setCurrentPage("test");
	expect(ApplicationRouter.getCurrentPage()).toBe("test");

	ApplicationRouter.setCurrentPage("test.whatever");
	expect(ApplicationRouter.getCurrentPage()).toBe("test.whatever");
    });

    it('Should properly add query parameters', function() {
	ApplicationRouter.setCurrentBranch("DCENTRAL-1100");
	const currentBranch = ApplicationRouter.getCurrentBranch("DCENTRAL-1100");

	expect(currentBranch).toBe("DCENTRAL-1100");
    });
})
