import React, { Component } from 'react';

class FooterCodeExample extends Component {
	shouldComponentUpdate () {
		return true;
	}

	render () {
		return (
			<React.Fragment>
				<pre className='code-preview'>
					{
					`/**
 						* This entire site is coded in AngularJS and React. Inspect the code on GitHub: https://github.com/TCotton/portfolio
 						*/
 						 angular.module('portfolioApp', ['portfolioApp.blogAdminService','portfolioApp.blogAdminController','portfolioApp.blogCommentsDirective','portfolioApp.blogCommentsService','portfolioApp.blogPagesController','portfolioApp.blogPagesDirective','portfolioApp.blogPagesService','portfolioApp.blogPagesFilter','portfolioApp.blogSidebarController','portfolioApp.contractController','portfolioApp.contractService','portfolioApp.footerController','portfolioApp.footerService','portfolioApp.homepageDirective','portfolioApp.miscDirective','portfolioApp.sideProjectsController','portfolioApp.angularReact','portfolioApp.sitemapController','portfolioApp.wordProjectsController','AppConstants','ngResource','ngSanitize','ngRoute','ngAria','HashBangURLs','portfolioAppConfig','jmdobry.angular-cache','underscore','momentLibrary','helperFunctions','requestTimeout','react','detectLocalStorage','appTemplates'
]).config(function($routeProvider, $httpProvider) {

  $httpProvider.defaults.useXDomain = true;
  delete $httpProvider.defaults.headers.common['X-Requested-With'];

  $routeProvider
    .when('/', {
      templateUrl: 'homepage/main.html',
      title: 'The portfolio and blog of web developer Andy Walpole'
    })
    .when('/work-projects', {
      templateUrl: 'work-projects/my_work.html',
      title: 'Noteworthy work projects from the past 18 months',
      controller: 'WorkPageCtrl as WorkProjPageCtrl'
    })
    .when('/work-projects/:workPage', {
      templateUrl: 'work-projects/work_page.html',
      controller: 'WorkPageCtrl as WorkProjPageCtrl'
    })
 						`
					}
				</pre>
			</React.Fragment>
		)
	}

}

export default FooterCodeExample;
