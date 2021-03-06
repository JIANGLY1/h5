/**
 * main.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2016, Codrops
 * http://www.codrops.com
 */
;(function(window) {

	'use strict';

	var mainContainer = document.querySelector('.main-wrap'),
		openCtrl = document.getElementById('btn-search'),
		closeCtrl = document.getElementById('btn-search-close'),
		searchContainer = document.querySelector('.search'),
		inputSearch = searchContainer.querySelector('.search__input');

	function init() {
		initEvents();	
	}

	function initEvents() {
		openCtrl.addEventListener('click', openSearch);
		closeCtrl.addEventListener('click', closeSearch);
		document.addEventListener('keyup', function(ev) {
			// escape key.
			if( ev.keyCode == 27 ) {
				closeSearch();
			}
		});
	}

	function openSearch() {
		mainContainer.classList.add('main-wrap--overlay');
		openCtrl.classList.add('btn--hidden');
		closeCtrl.classList.remove('btn--hidden');
		searchContainer.classList.add('search--open');
		inputSearch.focus();
	}

	function closeSearch() {
		mainContainer.classList.remove('main-wrap--overlay');
		openCtrl.classList.remove('btn--hidden');
		closeCtrl.classList.add('btn--hidden');
		searchContainer.classList.remove('search--open');
		inputSearch.blur();
		inputSearch.value = '';
	}

	init();

})(window);