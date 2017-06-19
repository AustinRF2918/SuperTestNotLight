import $ from 'jquery';
import canMap from 'can-define/map/';
import canCompute from 'can-compute';
import canList from 'can-define/list/list';

import Navigation from 'js/components/navigation';
import Sidebar from 'js/components/sidebar';
import SidebarDropdown from 'js/components/sidebar-dropdown';
import Dropdown from 'js/components/dropdown';
import SidebarItem from 'js/components/sidebar-item';
import NavigationItem from 'js/components/navigation-item';
import TestResult from 'js/components/test-result';
import ContentView from 'js/components/content-view';
import AppView from 'js/views/app.stache';

import {ApplicationRouter} from 'js/router/router';

import Bootstrap from 'js/bootstrap';
import MetisMenu from 'js/metisMenu';
import sbAdmin from 'js/sb-admin-2';

import "./css/common.css";
import "./css/app.css";
import "./css/bootstrap.css";
import "./css/metisMenu.css";
import "./css/bootstrap-social.css";
import "./css/font-awesome.css";

import reload from "live-reload";

const AppViewModel = canMap.extend("AppViewModel", {
    name: "string",
    version: "string"
});

function renderApplication(viewModel) {
    document.body = document.createElement("body");

    const frag = AppView(viewModel);
    document.body.appendChild(frag);

    $(function() {
	$('#side-menu').metisMenu();
    });
}

const appViewModel = window.appVM = new AppViewModel({
    name: "SuperTest",
    version: "0.0.3",
    router: ApplicationRouter,
    currentPage: ApplicationRouter.getCurrentPage()
});

renderApplication(appViewModel);

reload(function() {
    renderApplication(appViewModel);
});
