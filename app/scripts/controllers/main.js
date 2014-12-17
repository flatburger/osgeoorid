'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'OSGeo Indonesia',
    			'description': 'Open Source Geospatial Foundation (OSGeo) Indonesia dibentuk untuk mendukung dan memberikan Software geospatial yang bersifat Opensource.',
    			'faClass': 'icon-dice',
                'link': '#osgeo'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'OSGeo Project',
    			'description': 'geospatial software yang mengimplemenetasikan standar dari OGC (Open Geospatial Consortium) Web Service seperti WMS dan WFS.',
    			'faClass': 'icon-cogs',
                'link': '#projects'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Komunitas',
    			'description': 'Untuk saling berkomunikasi dan berkolaborasi antar user atau developer OSGeo di regional tertentu, khususnya Indonesia.',
    			'faClass': 'icon-copy2',
                'link': '#forum'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
