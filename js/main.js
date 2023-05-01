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
/* harmony import */ var _sections_section_image_back__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/section-image-back */ "./src/js/sections/section-image-back.js");
/* harmony import */ var _sections_section_hero_main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sections/section-hero-main */ "./src/js/sections/section-hero-main.js");
/* harmony import */ var _sections_section_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections/section-history */ "./src/js/sections/section-history.js");
/* harmony import */ var _sections_section_collection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/section-collection */ "./src/js/sections/section-collection.js");
/* harmony import */ var _sections_section_image_back_anim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/section-image-back-anim */ "./src/js/sections/section-image-back-anim.js");
/* harmony import */ var _sections_section_we_produce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/section-we-produce */ "./src/js/sections/section-we-produce.js");
/* harmony import */ var _sections_section_recipes_preview__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/section-recipes-preview */ "./src/js/sections/section-recipes-preview.js");
/* harmony import */ var _sections_section_news_preview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/section-news-preview */ "./src/js/sections/section-news-preview.js");
/* harmony import */ var _sections_section_market_preview__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sections/section-market-preview */ "./src/js/sections/section-market-preview.js");















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
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__["ScrollTrigger"]);
var boxList = gsap__WEBPACK_IMPORTED_MODULE_0__["default"].utils.toArray('.animated-image');
boxList.forEach(function (box) {
  var img = box.querySelector('.animated-image__img');
  gsap__WEBPACK_IMPORTED_MODULE_0__["default"].to(img, {
    scrollTrigger: {
      trigger: box,
      scrub: 4,
      invalidateOnRefresh: true
    },
    y: box.offsetHeight - img.offsetHeight,
    ease: "none"
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
  if (window.scrollY > 0.1 && window.scrollY < document.body.scrollHeight - windowHeight - 2) {
    header.classList.add('header--white');
  } else {
    header.classList.remove('header--white');
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
document.body.classList.add('overflow-hidden');
gsap__WEBPACK_IMPORTED_MODULE_0__["default"].timeline({
  onComplete: function onComplete() {
    var evt = new Event('loader-animation-complete', {
      bubbles: true
    });
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
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");


gsap__WEBPACK_IMPORTED_MODULE_0__["default"].fromTo('.section-image-back-anim .section-image-back-anim__box', {
  width: 0,
  height: 0
}, {
  scrollTrigger: {
    trigger: '.section-image-back-anim .section-image-back-anim__box',
    //markers: true,
    scrub: .5,
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
    scrub: .5,
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
    scrub: .5,
    start: 'top 40%',
    end: "bottom -=300px"
  },
  xPercent: 0,
  scale: 1,
  height: "100%"
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