/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/helpers/check-webp-support.js":
/*!**********************************************!*\
  !*** ./src/js/helpers/check-webp-support.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function checkWebpSupport() {
  var img = new Image();
  img.onload = function () {
    if (img.width > 0 && img.height > 0) {
      document.body.classList.add("webp-support");
    } else {
      document.body.classList.add("no-webp-support");
    }
  };
  img.onerror = function () {
    document.body.classList.add("no-webp-support");
  };
  img.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
})();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_check_webp_support__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/check-webp-support */ "./src/js/helpers/check-webp-support.js");
/* harmony import */ var _helpers_check_webp_support__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_check_webp_support__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/loader */ "./src/js/sections/loader.js");
/* harmony import */ var _sections_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/header */ "./src/js/sections/header.js");
/* harmony import */ var _sections_animated_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/animated-image */ "./src/js/sections/animated-image.js");
/* harmony import */ var _sections_show_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/show-up */ "./src/js/sections/show-up.js");
/* harmony import */ var _sections_section_image_back__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/section-image-back */ "./src/js/sections/section-image-back.js");
/* harmony import */ var _sections_section_video_back__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/section-video-back */ "./src/js/sections/section-video-back.js");
/* harmony import */ var _sections_section_hero_main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/section-hero-main */ "./src/js/sections/section-hero-main.js");
/* harmony import */ var _sections_section_history__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/section-history */ "./src/js/sections/section-history.js");
/* harmony import */ var _sections_section_collection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/section-collection */ "./src/js/sections/section-collection.js");
/* harmony import */ var _sections_section_image_back_anim__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/section-image-back-anim */ "./src/js/sections/section-image-back-anim.js");
/* harmony import */ var _sections_section_we_produce__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/section-we-produce */ "./src/js/sections/section-we-produce.js");
/* harmony import */ var _sections_section_recipes_preview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/section-recipes-preview */ "./src/js/sections/section-recipes-preview.js");
/* harmony import */ var _sections_section_news_preview__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sections/section-news-preview */ "./src/js/sections/section-news-preview.js");
/* harmony import */ var _sections_section_market_preview__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./sections/section-market-preview */ "./src/js/sections/section-market-preview.js");
/* harmony import */ var _sections_history_intro__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./sections/history-intro */ "./src/js/sections/history-intro.js");
/* harmony import */ var _sections_history_timeline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./sections/history-timeline */ "./src/js/sections/history-timeline.js");
/* harmony import */ var _sections_text_with_image__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./sections/text-with-image */ "./src/js/sections/text-with-image.js");
/* harmony import */ var _sections_product_grid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./sections/product-grid */ "./src/js/sections/product-grid.js");
/* harmony import */ var _sections_news_nav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./sections/news-nav */ "./src/js/sections/news-nav.js");
/* harmony import */ var _sections_news_sample__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sections/news-sample */ "./src/js/sections/news-sample.js");
/* harmony import */ var _sections_news_content__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./sections/news-content */ "./src/js/sections/news-content.js");
/* harmony import */ var _sections_where_buy_intro__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./sections/where-buy-intro */ "./src/js/sections/where-buy-intro.js");
/* harmony import */ var _sections_where_buy_shops__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./sections/where-buy-shops */ "./src/js/sections/where-buy-shops.js");
/* harmony import */ var _sections_contacts_intro__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./sections/contacts-intro */ "./src/js/sections/contacts-intro.js");
/* harmony import */ var _sections_contacts_content__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./sections/contacts-content */ "./src/js/sections/contacts-content.js");
/* harmony import */ var _sections_recipes_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./sections/recipes-list */ "./src/js/sections/recipes-list.js");
/* harmony import */ var _sections_recipes_grid__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./sections/recipes-grid */ "./src/js/sections/recipes-grid.js");
/* harmony import */ var _sections_product_features__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sections/product-features */ "./src/js/sections/product-features.js");
/* harmony import */ var _sections_recipe_intro__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./sections/recipe-intro */ "./src/js/sections/recipe-intro.js");
/* harmony import */ var _sections_recipe_ingredients__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./sections/recipe-ingredients */ "./src/js/sections/recipe-ingredients.js");
/* harmony import */ var _sections_recipe_product__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sections/recipe-product */ "./src/js/sections/recipe-product.js");
/* harmony import */ var _sections_recipe_other__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./sections/recipe-other */ "./src/js/sections/recipe-other.js");
/* harmony import */ var _sections_technology_block__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./sections/technology-block */ "./src/js/sections/technology-block.js");




































/***/ }),

/***/ "./src/js/sections/animated-image.js":
/*!*******************************************!*\
  !*** ./src/js/sections/animated-image.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

var boxList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.animated-image');
var counter = 1;
boxList.forEach(function (box, index) {
  var img = box.querySelector('.animated-image__img');
  var scrub = 1.3 * counter;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(img, {
    yPercent: -10,
    scale: 1.2
  }, {
    scrollTrigger: {
      trigger: box,
      scrub: scrub,
      invalidateOnRefresh: true
    },
    yPercent: 10,
    scale: 1.2,
    ease: "none"
  });
  if (counter > 3) {
    counter = 0;
  } else {
    counter++;
  }
});

/***/ }),

/***/ "./src/js/sections/contacts-content.js":
/*!*********************************************!*\
  !*** ./src/js/sections/contacts-content.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.contacts-content');
  if (!target) return;
  var textColsList = document.querySelectorAll('.contacts-content__col');
  textColsList.forEach(function (textCol) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(textCol, {
      opacity: 0,
      x: 100
    }, {
      opacity: 1,
      x: 0,
      duration: 1,
      scrollTrigger: {
        trigger: textCol,
        start: "center 90%"
      }
    });
  });
  var leftColElems = document.querySelectorAll(['.contacts-content__title', '.contacts-content__form']);
  leftColElems.forEach(function (elem) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(elem, {
      opacity: 0,
      x: -200
    }, {
      opacity: 1,
      x: 0,
      duration: .7,
      scrollTrigger: {
        trigger: elem,
        start: "center 90%"
      }
    });
  });
});

/***/ }),

/***/ "./src/js/sections/contacts-intro.js":
/*!*******************************************!*\
  !*** ./src/js/sections/contacts-intro.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.contacts-intro');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.contacts-intro__title-block', {
    y: 200,
    opacity: 0,
    'webkitFilter': 'blur(10px)',
    'filter': 'blur(10px)'
  }, {
    y: 0,
    opacity: 1,
    stagger: 0.2,
    'webkitFilter': 'blur(0px)',
    'filter': 'blur(0px)',
    duration: 1.5
  });
});

/***/ }),

/***/ "./src/js/sections/header.js":
/*!***********************************!*\
  !*** ./src/js/sections/header.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

function headerWatcher() {
  var header = document.querySelector('.header');
  var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  if (window.scrollY < 0.1) {
    header.classList.add('header--top');
    header.classList.remove('header--middle');
  } else if (window.scrollY > document.body.scrollHeight - windowHeight - 2) {
    header.classList.add('header--bottom');
    header.classList.remove('header--middle');
  } else {
    header.classList.remove('header--top', 'header--bottom');
    header.classList.add('header--middle');
  }
  requestAnimationFrame(headerWatcher);
}
headerWatcher();
document.addEventListener('loader-animation-complete', function () {
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
    onComplete: function onComplete() {
      var evt = new Event('header-complete', {
        bubbles: true
      });
      document.dispatchEvent(evt);
    }
  }).to('.header__logo-link', {
    y: 0,
    opacity: 1,
    duration: 1
  }).to(['.header__nav', '.header__lang-list', '.header__button'], {
    y: 0,
    opacity: 1,
    duration: 1
  });
});

/***/ }),

/***/ "./src/js/sections/history-intro.js":
/*!******************************************!*\
  !*** ./src/js/sections/history-intro.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.history-intro');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({}).to('.history-intro__title-block', {
    y: 0,
    opacity: 1,
    stagger: 0.5,
    'webkitFilter': 'blur(0px)',
    'filter': 'blur(0px)',
    duration: 2
  }).to('.history-intro__col-img-back', {
    opacity: 1,
    duration: 1
  }, "-=1.5").to('.history-intro__img--n1', {
    opacity: 1,
    y: 0,
    duration: 1
  }, "-=.7").to('.history-intro__img--n2', {
    opacity: 1,
    y: 130,
    duration: 1
  }, "-=.5");
});

/***/ }),

/***/ "./src/js/sections/history-timeline.js":
/*!*********************************************!*\
  !*** ./src/js/sections/history-timeline.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.history-timeline');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.history-timeline__marker', {
    boxShadow: "0 0 0 19px rgba(251, 251, 251, 0.5)",
    duration: .7,
    delay: 2,
    repeat: -1,
    yoyo: true
  });
  var elemList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.history-timeline__elem-col');
  elemList.forEach(function (el) {
    var marker = el.querySelector('.history-timeline__marker');
    var title = el.querySelector('.history-timeline__title');
    var text = el.querySelector('.history-timeline__text');
    var img = el.querySelector('.history-timeline__img');
    var config = {
      scrollTrigger: {
        trigger: el,
        start: "top 70%"
      },
      x: 0,
      opacity: 1
    };
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(title, config);
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(text, config);
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(img, config);
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(marker, {
      scrollTrigger: {
        trigger: el,
        start: "top 90%"
      },
      scale: 1
    });
  });
});

/***/ }),

/***/ "./src/js/sections/loader.js":
/*!***********************************!*\
  !*** ./src/js/sections/loader.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
var loader = document.querySelector('.loader');
var evt = new Event('loader-animation-complete', {
  bubbles: true
});
if (loader) {
  document.body.classList.add('overflow-hidden');
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
    onComplete: function onComplete() {
      document.dispatchEvent(evt);
    }
  }).to('.loader__logo', {
    scale: 1.5,
    duration: 2
  }).to('.loader__white-block', {
    xPercent: 100,
    duration: 2
  }, '-=2').to('.loader', {
    backgroundColor: '#000',
    duration: 3
  }).to('.loader__logo', {
    opacity: 0,
    duration: 1.5
  }, '-=3.2').to('.loader', {
    opacity: 0,
    duration: 1
  }).to('.loader', {
    display: 'none',
    onComplete: function onComplete() {
      document.body.classList.remove('overflow-hidden');
    }
  }, '-=.5');
} else {
  setTimeout(function () {
    document.dispatchEvent(evt);
  }, 100);
}

/***/ }),

/***/ "./src/js/sections/news-content.js":
/*!*****************************************!*\
  !*** ./src/js/sections/news-content.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.news-content');
  if (!target) return;
  var productList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray(['.news-content__time', '.news-content__title', '.news-content__text', '.news-content__bottom-box']);
  productList.forEach(function (product, index) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(product, {
      y: 100,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: product
      },
      y: 0,
      delay: .2,
      opacity: 1
    });
  });
});

/***/ }),

/***/ "./src/js/sections/news-nav.js":
/*!*************************************!*\
  !*** ./src/js/sections/news-nav.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.news-nav');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.news-nav__elem', {
    scrollTrigger: {
      trigger: target
    },
    opacity: 1,
    y: 0,
    stagger: .15,
    duration: 1,
    ease: 'ease-in-out'
  });
});

/***/ }),

/***/ "./src/js/sections/news-sample.js":
/*!****************************************!*\
  !*** ./src/js/sections/news-sample.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.news-sample');
  if (!target) return;
  var newsList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.news-sample__card');
  newsList.forEach(function (news) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(news, {
      y: 100,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: news,
        start: "center bottom"
      },
      y: 0,
      stagger: .2,
      opacity: 1
    });
  });
});

/***/ }),

/***/ "./src/js/sections/product-features.js":
/*!*********************************************!*\
  !*** ./src/js/sections/product-features.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.product-features');
  if (!target) return;
  var colList = document.querySelectorAll('.product-features__col');
  colList.forEach(function (col, index) {
    if (index % 2 === 0) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(col, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: col,
          start: "20% bottom"
        }
      });
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(col, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        scrollTrigger: {
          trigger: col,
          start: "20% bottom"
        }
      });
    }
  });
});

/***/ }),

/***/ "./src/js/sections/product-grid.js":
/*!*****************************************!*\
  !*** ./src/js/sections/product-grid.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.product-grid');
  if (!target) return;
  var productList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.product-grid .product-card');
  var haveFourCols = target.classList.contains('product-grid--page-product');
  var counter = haveFourCols ? 4 : 3;
  var productRowArr = [];
  productList.forEach(function (product, index) {
    productRowArr.push(product);
    if (productRowArr.length >= counter || productList.length === index + 1) {
      console.log(productRowArr);
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo([productRowArr], {
        y: 100,
        opacity: 0
      }, {
        scrollTrigger: {
          trigger: productRowArr[0]
        },
        y: 0,
        stagger: .3,
        opacity: 1
      });
      productRowArr = [];
    }
  });
});

/***/ }),

/***/ "./src/js/sections/recipe-ingredients.js":
/*!***********************************************!*\
  !*** ./src/js/sections/recipe-ingredients.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.recipe-ingredients');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.recipe-ingredients__col', {
    opacity: 1,
    y: 0,
    stagger: .5,
    delay: 1,
    scrollTrigger: {
      trigger: '.recipe-ingredients__col'
    }
  });
});

/***/ }),

/***/ "./src/js/sections/recipe-intro.js":
/*!*****************************************!*\
  !*** ./src/js/sections/recipe-intro.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.recipe-intro');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().to('.recipe-intro', {
    opacity: 1,
    scrollTrigger: {
      trigger: '.recipe-intro'
    }
  }).to(['.recipe-intro__back', '.recipe-intro__title', '.recipe-intro__features', '.recipe-intro__text', '.recipe-intro__bottom'], {
    opacity: 1,
    x: 0,
    delay: .5,
    duration: .7,
    stagger: .3
  });
});

/***/ }),

/***/ "./src/js/sections/recipe-other.js":
/*!*****************************************!*\
  !*** ./src/js/sections/recipe-other.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.recipe-other');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to('.recipe-other__text', {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: '.recipe-other__text'
    }
  });
});

/***/ }),

/***/ "./src/js/sections/recipe-product.js":
/*!*******************************************!*\
  !*** ./src/js/sections/recipe-product.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.recipe-product');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(['.recipe-product__title', '.recipe-product__button', '.recipe-product__img'], {
    opacity: 1,
    y: 0,
    stagger: .2,
    scrollTrigger: {
      trigger: '.recipe-product__title'
    }
  });
});

/***/ }),

/***/ "./src/js/sections/recipes-grid.js":
/*!*****************************************!*\
  !*** ./src/js/sections/recipes-grid.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.recipes-grid');
  if (!target) return;

  // col 4
  if (target.classList.contains('recipes-grid--cols-4')) {
    var colList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.recipes-grid__col');
    colList.forEach(function (col, index) {
      if (index % 2 === 0) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(col, {
          y: -60
        }, {
          y: 60,
          scrollTrigger: {
            trigger: col,
            scrub: 1.2
          }
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(col, {
          y: 60
        }, {
          y: -60,
          scrollTrigger: {
            trigger: col,
            scrub: 1.2
          }
        });
      }
    });
  }

  // col 3
  if (target.classList.contains('recipes-grid--cols-3')) {
    var _colList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.recipes-grid__col');
    _colList.forEach(function (col, index) {
      if (index % 2 === 0) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(col, {
          y: -60
        }, {
          y: 60,
          scrollTrigger: {
            trigger: col,
            scrub: 1.2
          }
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(col, {
          y: 60
        }, {
          y: -60,
          scrollTrigger: {
            trigger: col,
            scrub: 1.2
          }
        });
      }
    });
  }

  // col 2
  if (target.classList.contains('recipes-grid--cols-2')) {
    var _colList2 = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.recipes-grid__col');
    _colList2.forEach(function (col, index) {
      if (index % 2 === 0) {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(col, {
          y: -60
        }, {
          y: 60,
          scrollTrigger: {
            trigger: col,
            scrub: 1.2
          }
        });
      } else {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(col, {
          y: 60
        }, {
          y: -60,
          scrollTrigger: {
            trigger: col,
            scrub: 1.2
          }
        });
      }
    });
  }
  var cardList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.recipes-grid__elem');
  cardList.forEach(function (card) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(card, {
      opacity: 0
    }, {
      opacity: 1,
      scrollTrigger: {
        trigger: card,
        start: "top bottom",
        end: "top 70%",
        scrub: true
      }
    });
  });
});

/***/ }),

/***/ "./src/js/sections/recipes-list.js":
/*!*****************************************!*\
  !*** ./src/js/sections/recipes-list.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.recipes-list');
  if (!target) return;
  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"].create({
    trigger: ".recipes-list__col-text",
    start: "top 121px",
    end: "bottom bottom",
    pin: '.recipes-list__img'
    //markers: true
  });

  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.recipes-list__img', {
    opacity: 0,
    x: 200
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
    delay: .5,
    scrollTrigger: {
      trigger: '.recipes-list__img'
    }
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.recipes-list__title1', {
    opacity: 0,
    x: -200
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.recipes-list__title1'
    }
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.recipes-list__title2', {
    opacity: 0,
    x: 200
  }, {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: '.recipes-list__title2'
    }
  });
  var textElems = document.querySelectorAll(['.recipes-list__text', '.recipes-list__list-elem']);
  textElems.forEach(function (elem) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(elem, {
      opacity: 0,
      y: 200
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: elem,
        start: 'top bottom'
      }
    });
  });
});

/***/ }),

/***/ "./src/js/sections/section-collection.js":
/*!***********************************************!*\
  !*** ./src/js/sections/section-collection.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-collection');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-collection__title', {
    y: 50,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-collection__title',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-collection__text', {
    y: 75,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-collection__text',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-collection__link', {
    y: 100,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-collection__link',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-collection__gallery-grid', {
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-collection__gallery-grid',
      scrub: 1.5,
      // markers: true,
      end: '400px center',
      toggleActions: "restart none none none"
    },
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-collection__gallery-grid', {
    y: 200
  }, {
    scrollTrigger: {
      trigger: '.section-collection__gallery-grid',
      scrub: 1.5,
      // markers: true,
      toggleActions: "restart none none none"
    },
    y: 0
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(['.section-collection__gallery-col--n2'], {
    y: 200
  }, {
    scrollTrigger: {
      trigger: '.section-collection__gallery-col--n2',
      // markers: true,
      start: 'top bottom',
      end: '70% top',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: -600
  });
});

/***/ }),

/***/ "./src/js/sections/section-hero-main.js":
/*!**********************************************!*\
  !*** ./src/js/sections/section-hero-main.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-hero-main');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-hero-main__next-btn', {
    y: -7
  }, {
    y: 7,
    yoyo: true,
    repeat: -1,
    duration: .7
  });
  document.addEventListener('loader-animation-complete', function () {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({}).to('.section-hero-main__link-btn', {
      opacity: 1,
      duration: .7,
      delay: 2
    }).to('.section-hero-main__title-block', {
      y: 0,
      opacity: 1,
      stagger: 0.5,
      'webkitFilter': 'blur(0px)',
      'filter': 'blur(0px)',
      duration: 2
    }).to('.section-hero-main__next-btn', {
      opacity: 1,
      duration: .7
    });
  });
});

/***/ }),

/***/ "./src/js/sections/section-history.js":
/*!********************************************!*\
  !*** ./src/js/sections/section-history.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-history');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-history__title', {
    y: 50,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-history__title',
      // markers: true,
      end: 'center center',
      scrub: 1.2,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-history__text', {
    y: 75,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-history__text',
      // markers: true,
      end: 'center center',
      scrub: 1.1,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-history__link', {
    y: 100,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-history__link',
      // markers: true,
      end: 'center center',
      scrub: 1.3,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-history__img-box--n2', {
    y: 300,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-history__gallery',
      scrub: 1.4,
      // markers: true,
      end: 'center center'
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-history__img-box--n3', {
    y: -200,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-history__gallery',
      scrub: 1.3,
      // markers: true,
      end: 'center center'
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-history__gallery-back', {
    y: 100
  }, {
    scrollTrigger: {
      trigger: '.section-history__gallery',
      scrub: 1.2,
      // markers: true,
      end: 'center center'
    },
    y: 0
  });
});

/***/ }),

/***/ "./src/js/sections/section-image-back-anim.js":
/*!****************************************************!*\
  !*** ./src/js/sections/section-image-back-anim.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-image-back-anim');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-image-back-anim .section-image-back-anim__box', {
    width: 0,
    height: 0
  }, {
    scrollTrigger: {
      trigger: '.section-image-back-anim .section-image-back-anim__box',
      //markers: true,
      scrub: true,
      start: 'top 40%',
      end: "bottom 300px"
    },
    width: '100%',
    height: '100%'
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-image-back-anim .section-image-back-anim__box', {
    y: -650
  }, {
    scrollTrigger: {
      trigger: '.section-image-back-anim .section-image-back-anim__box',
      //markers: true,
      scrub: true,
      start: '200px 40%',
      end: "+=800px top"
    },
    y: 200
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-image-back-anim .section-image-back-anim__img', {
    xPercent: -.6,
    scale: .4,
    height: "540%"
  }, {
    scrollTrigger: {
      trigger: '.section-image-back-anim .section-image-back-anim__img',
      // markers: true,
      scrub: true,
      start: 'top 40%',
      end: "bottom -=300px"
    },
    xPercent: 0,
    scale: 1,
    height: "100%"
  });
});

/***/ }),

/***/ "./src/js/sections/section-image-back.js":
/*!***********************************************!*\
  !*** ./src/js/sections/section-image-back.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-image-back');
  if (!target) return;
  var boxList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.section-image-back');
  boxList.forEach(function (box) {
    var img = box.querySelector('.section-image-back__bg');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(img, {
      scrollTrigger: {
        trigger: box,
        scrub: 1.3,
        invalidateOnRefresh: true
      },
      backgroundPosition: "center top -" + img.offsetHeight / 10 + 100 + 'px',
      ease: "none"
    });
  });
});

/***/ }),

/***/ "./src/js/sections/section-market-preview.js":
/*!***************************************************!*\
  !*** ./src/js/sections/section-market-preview.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-market-preview');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-market-preview__title', {
    y: 50,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-market-preview__title',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-market-preview__text', {
    y: 75,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-market-preview__text',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-market-preview__link', {
    y: 100,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-market-preview__link',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  var recipes = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.section-market-preview__market-link');
  recipes.forEach(function (recipe) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(recipe, {
      opacity: 0,
      y: 50
    }, {
      scrollTrigger: {
        trigger: recipe,
        scrub: 2,
        // markers: true,
        start: "top bottom",
        end: "top 70%",
        toggleActions: "restart none none none"
      },
      opacity: 1,
      y: 0
    });
  });
});

/***/ }),

/***/ "./src/js/sections/section-news-preview.js":
/*!*************************************************!*\
  !*** ./src/js/sections/section-news-preview.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-news-preview');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-news-preview__title', {
    y: 50,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-news-preview__title',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-news-preview__link', {
    y: 100,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-news-preview__link',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  var newsList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.section-news-preview__news');
  newsList.forEach(function (news) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(news, {
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: news,
        scrub: 2,
        // markers: true,
        start: "top bottom",
        end: "top 70%",
        toggleActions: "restart none none none"
      },
      opacity: 1
    });
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(['.section-news-preview__news-col--n2'], {
    y: 200
  }, {
    scrollTrigger: {
      trigger: '.section-news-preview__news-col--n2',
      // markers: true,
      start: 'top bottom',
      end: '70% top',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: -200
  });
});

/***/ }),

/***/ "./src/js/sections/section-recipes-preview.js":
/*!****************************************************!*\
  !*** ./src/js/sections/section-recipes-preview.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-recipes-preview');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-recipes-preview__title', {
    y: 50,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-recipes-preview__title',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-recipes-preview__text', {
    y: 75,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-recipes-preview__text',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-recipes-preview__link', {
    y: 100,
    opacity: 0
  }, {
    scrollTrigger: {
      trigger: '.section-recipes-preview__link',
      // markers: true,
      end: 'center center',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: 0,
    opacity: 1
  });
  var recipes = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.section-recipes-preview__recipe');
  recipes.forEach(function (recipe) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(recipe, {
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: recipe,
        scrub: 2,
        // markers: true,
        start: "200px bottom",
        end: "top 70%",
        toggleActions: "restart none none none"
      },
      opacity: 1
    });
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(['.section-recipes-preview__recipe-col--n2'], {
    y: 200
  }, {
    scrollTrigger: {
      trigger: '.section-recipes-preview__recipe-col--n2',
      // markers: true,
      start: 'top bottom',
      end: '70% top',
      scrub: 1.5,
      toggleActions: "restart none none none"
    },
    y: -200
  });
});

/***/ }),

/***/ "./src/js/sections/section-video-back.js":
/*!***********************************************!*\
  !*** ./src/js/sections/section-video-back.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-video-back');
  if (!target) return;
  var boxList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.section-video-back');
  boxList.forEach(function (box) {
    var video = box.querySelector('.section-video-back__bg');
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(video, {
      yPercent: -10
    }, {
      scrollTrigger: {
        trigger: box,
        scrub: .7,
        invalidateOnRefresh: true
      },
      yPercent: 10,
      ease: "none"
    });
  });
});

/***/ }),

/***/ "./src/js/sections/section-we-produce.js":
/*!***********************************************!*\
  !*** ./src/js/sections/section-we-produce.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.section-we-produce');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-we-produce__title-part--n1', {
    y: 30,
    opacity: 0,
    'webkitFilter': 'blur(5px)',
    'filter': 'blur(5px)'
  }, {
    y: 0,
    opacity: 1,
    'webkitFilter': 'blur(0px)',
    'filter': 'blur(0px)',
    scrollTrigger: {
      trigger: '.section-we-produce__title',
      // markers: true,
      end: 'bottom 70%',
      scrub: 1.5
    }
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-we-produce__title-part--n2', {
    y: 70,
    opacity: 0,
    'webkitFilter': 'blur(5px)',
    'filter': 'blur(5px)'
  }, {
    y: 0,
    opacity: 1,
    'webkitFilter': 'blur(0px)',
    'filter': 'blur(0px)',
    scrollTrigger: {
      trigger: '.section-we-produce__title',
      // markers: true,
      end: 'bottom 70%',
      scrub: 1.5
    }
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-we-produce__text', {
    y: 70,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-we-produce__text',
      // markers: true,
      end: 'bottom 70%',
      scrub: 1.5
    }
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-we-produce__link', {
    y: 100,
    opacity: 0
  }, {
    y: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-we-produce__link',
      // markers: true,
      end: 'bottom 70%',
      scrub: 1.5
    }
  });
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-we-produce__img-box', {
    opacity: 0
  }, {
    opacity: 1,
    scrollTrigger: {
      trigger: '.section-we-produce__img-box',
      // markers: true,
      end: 'bottom 60%',
      scrub: 1.5
    }
  });
});

/***/ }),

/***/ "./src/js/sections/show-up.js":
/*!************************************!*\
  !*** ./src/js/sections/show-up.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
document.addEventListener('DOMContentLoaded', function () {
  var targets = document.querySelectorAll('.show-up');
  if (!targets.length) return;
  targets.forEach(function (target) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(target, {
      y: 30,
      opacity: 0
    }, {
      y: 0,
      opacity: 1,
      duration: .7,
      delay: .5,
      scrollTrigger: {
        trigger: target
      }
    });
  });
});

/***/ }),

/***/ "./src/js/sections/technology-block.js":
/*!*********************************************!*\
  !*** ./src/js/sections/technology-block.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


document.addEventListener('DOMContentLoaded', function () {
  var targetsList = document.querySelectorAll('.technology-block');
  if (!targetsList.length) return;
  targetsList.forEach(function (target) {
    if (target.classList.contains('technology-block--type1')) {
      gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline().to('.technology-block--type1 .technology-block__title-block', {
        y: 0,
        opacity: 1,
        stagger: 0.5,
        'webkitFilter': 'blur(0px)',
        'filter': 'blur(0px)',
        duration: 2
      }).to('.technology-block--type1 .technology-block__img-box--n1', {
        y: 77,
        opacity: 1,
        duration: 1
      }, "-=1.5").to('.technology-block--type1 .technology-block__img-box--n2', {
        y: -57,
        opacity: 1,
        duration: .7
      }, "-=.8").to('.technology-block--type1 .technology-block__img-box--n3', {
        x: 0,
        opacity: 1,
        duration: .7
      }, "-=.8");
    }
  });
});

/***/ }),

/***/ "./src/js/sections/text-with-image.js":
/*!********************************************!*\
  !*** ./src/js/sections/text-with-image.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.text-with-image');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(['.text-with-image__img', '.text-with-image__title', '.text-with-image__text'], {
    scrollTrigger: {
      trigger: target
    },
    opacity: 1,
    x: 0,
    stagger: .5,
    duration: 1
  });
});

/***/ }),

/***/ "./src/js/sections/where-buy-intro.js":
/*!********************************************!*\
  !*** ./src/js/sections/where-buy-intro.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.where-buy-intro');
  if (!target) return;
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(['.where-buy-intro__title', '.where-buy-intro__text-block'], {
    y: 0,
    opacity: 1,
    stagger: 0.5,
    'webkitFilter': 'blur(0px)',
    'filter': 'blur(0px)',
    duration: 2
  });
});

/***/ }),

/***/ "./src/js/sections/where-buy-shops.js":
/*!********************************************!*\
  !*** ./src/js/sections/where-buy-shops.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");

document.addEventListener('DOMContentLoaded', function () {
  var target = document.querySelector('.where-buy-shops');
  if (!target) return;
  var titlesList = document.querySelectorAll('.where-buy-shops__title');
  titlesList.forEach(function (title) {
    gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo(title, {
      y: -30,
      opacity: 0
    }, {
      scrollTrigger: {
        trigger: title,
        start: "center bottom"
      },
      y: 0,
      delay: .2,
      opacity: 1
    });
  });
  var gridsList = document.querySelectorAll('.where-buy-shops__grid');
  gridsList.forEach(function (grid) {
    var shopsList = grid.querySelectorAll('.where-buy-shops__item');
    var shopsRowArr = [];
    var trigger = null;
    shopsList.forEach(function (product, index) {
      shopsRowArr.push(product);
      if (shopsRowArr.length < 5 && shopsList.length !== index + 1) {} else {
        gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo([shopsRowArr], {
          x: 50,
          y: 100,
          opacity: 0
        }, {
          scrollTrigger: {
            trigger: product
          },
          x: 0,
          y: 0,
          stagger: .2,
          opacity: 1
        });
        shopsRowArr = [];
        trigger = null;
      }
    });
  });
});

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ })

/******/ });
//# sourceMappingURL=main.js.map