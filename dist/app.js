/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

function initVue() {
  new Vue({
    el: '#app',
    data: {
      logo: {
        name: 'Avada Construction',
        img: 'images/construction_mobile_logo.png'
      },
      navBar: [{
        nav: 'HOME',
        menu: true
      }, {
        nav: 'ABOUT',
        menu: true
      }, {
        nav: 'SERVICES',
        menu: true
      }, {
        nav: 'WORK',
        menu: true
      }, {
        nav: 'ARTICLES',
        menu: true
      }],
      jumbotron: 'images/construction_thumbnail.jpg',
      cardSpecialist: [{
        title: 'Buildings',
        icon: 'far fa-building',
        front: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        back_p: 'ARTFULLY CRAFTED',
        back: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
      }, {
        title: 'Renovate',
        icon: 'fas fa-sync-alt',
        front: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        back_p: 'FRESHLY NEW',
        back: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
      }, {
        title: 'Construct',
        icon: 'fas fa-home',
        front: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        back_p: 'PERFECT LINES',
        back: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
      }, {
        title: 'Exclusive',
        icon: 'fas fa-truck',
        front: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur.',
        back_p: 'PLANNING',
        back: 'Quis autem vel eum iure reprederit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum.'
      }],
      imgCounter: 'images/home-244125289.jpg',
      counter: [{
        icon: 'fas fa-suitcase',
        initCount: 0,
        num: '3534',
        text: 'PLANNING APPLICATIONS'
      }, {
        icon: 'far fa-building',
        initCount: 0,
        num: '896',
        text: 'COMPLETED PROJECTS'
      }, {
        icon: 'fas fa-users',
        initCount: 0,
        num: '172',
        text: 'TRAINED PROFESSIONALS'
      }, {
        icon: 'fas fa-globe',
        initCount: 0,
        num: '19',
        text: 'INTERNATIONAL OFFICES'
      }],
      timing: null,
      cardWork: [{
        img: 'images/project2-featured-15013609.jpg',
        title: 'Florida Heath Facility',
        type: 'Commercial',
        hover: true
      }, {
        img: 'images/project1-featured-294276386.jpg',
        title: 'Main Modernity',
        type: 'Residential',
        hover: true
      }, {
        img: 'images/project3-featured-189023420.jpg',
        title: 'Exclusive Urban Living',
        type: 'Commercial',
        hover: true
      }],
      cardValues: [{
        icon: 'fas fa-home',
        color: '#4ea4a5',
        title: 'Great Services',
        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
      }, {
        icon: 'far fa-sun',
        color: '#4e6da5',
        title: 'Highest Standards',
        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
      }, {
        icon: 'fas fa-users',
        color: '#f6722a',
        title: 'Professional Team',
        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
      }, {
        icon: 'far fa-lightbulb',
        color: '#a7cf47',
        title: 'Creative Solutions',
        text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia'
      }],
      slider: [{
        img: 'images/home-testimonial-113165296.jpg',
        overview: 'No man but feels more of a man in the world if he have but a bit of ground that he can call his own. However small it is on the surface, it is four thousand miles deep; and that is a very handsome property.',
        name: 'HARRY SMITH',
        type: 'NEW HOME OWNER'
      }, {
        img: 'images/home-testimonial-84268399.jpg',
        overview: 'Many novice real estate investors soon quit the profession and invest. When you invest in real estate, you often see a side of humanity that stocks, bonds, mutual funds, and saving money shelter you from.',
        name: 'JOHN DOE',
        type: 'PROPERTY INVESTOR'
      }],
      indSlider: 0,
      backgroundSlider: 'images/home-parallax-144609983.jpg',
      cardNews: [{
        img: 'images/blog-post-134132600.jpg',
        title: 'Redeveloping Florida’s Remote Southern Coast',
        date: 'December 7th, 2015',
        type: 'Architecture, Buildings, Construction, News',
        overview: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
      }, {
        img: 'images/blog-post-92486644.jpg',
        title: 'How We Manage Large Construction Projects',
        date: 'December 7th, 2015',
        type: 'Architecture, Construction, Engineering',
        overview: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
      }, {
        img: 'images/blog-post-332773904.jpg',
        title: 'Future proofing a modern home',
        date: 'December 6th, 2015',
        type: 'Architecture, Construction, Marketing',
        overview: 'Technology is Here to Stay Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus purus nisl, elementum vitae consequat at, tristique ut enim. Sed ut dignissim leo. Nullam sed metus id sapien faucibus rhoncus sed'
      }],
      sliderLoghi: ['images/home-logo1-219096700-320x202.png', 'images/home-logo2-219096700-320x202.png', 'images/home-logo9-219096700-320x202.png', 'images/home-logo10-219096700-320x202.png', 'images/home-logo11-219096700-320x202.png'],
      footerCard_1: {
        logo: 'images/footer-logo.png',
        overview: 'We are specialists in the construction of unique and exclusive properties. Our work inspires. We pride ourselves on delivering outstanding quality and design for leading clients across the world.'
      },
      footerCard_2: {
        title: 'LATEST TWEETS',
        logo: 'images/3a74ce3d0532b7773b174c45ca3bd05a_normal.png',
        theme: 'Fusion',
        overview_1: 'Nested Columns provide you with a significant amount of additional flexibility when designing layouts with the',
        hashtag: '#avada #WebsiteBuilder.',
        overview_2: "You can add columns inside of columns to create uniquely styled CTA's & design cues to promote your content & products",
        link: 'bit.ly/3vuElD4 ',
        screen: 'images/screen.jfif',
        iconTw: 'images/image (1).svg',
        iconLove: 'images/image (2).svg',
        iconShare: 'images/image (3).svg',
        timePosted: '15h'
      },
      footerCard_3: {
        title: 'CONTACT US TODAY',
        iconCorporate: 'fas fa-globe',
        corporateLocation: 'Corporate Location 1600 Amphitheatre Parkway London WC1 1BA',
        iconResidential: 'fas fa-home',
        residentialLocation: ' Residential Location 9521 Broadsberry Avenue Paddington RC7 9ZA ',
        numberIcon: 'fas fa-phone',
        number: ['1.800.458.556', '1.800.532.2112'],
        dayIcon: 'fas fa-clock',
        day: ['Monday – Friday: 9:00 AM – 6:00 PM', 'Saturday – Sunday: 9:00 AM – 12:00 PM']
      },
      footerCard_4: {
        title: 'FIND US',
        img: 'images/staticmap.png'
      },
      copyrightIcon: ['fab fa-facebook-f', 'fab fa-twitter', 'fab fa-youtube', 'fab fa-instagram']
    },
    mounted: function mounted() {
      this.timing = setInterval(this.animationNumber, 1);
      setInterval(this.mySlider, 4000);
    },
    methods: {
      hoverLinkNav: function hoverLinkNav(item) {
        //cambia color all'hover
        item.menu = !item.menu;
      },
      animationNumber: function animationNumber() {
        //animazione numeri section counter
        for (var i = 0; i < this.counter.length; i++) {
          var elem = this.counter[i];

          if (this.counter[0].initCount == this.counter[0].num) {
            clearInterval(this.timing);
          }

          if (elem.initCount < elem.num) {
            elem.initCount++;
          }
        }
      },
      mySlider: function mySlider() {
        //animazione slider
        this.indSlider++;

        if (this.indSlider == 2) {
          this.indSlider = 0;
        }
      }
    }
  });
}

function init() {
  initVue();
}

document.addEventListener('DOMContentLoaded', init);

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					result = fn();
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) var result = runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkproj_html_vuejs"] = self["webpackChunkproj_html_vuejs"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style"], () => (__webpack_require__("./src/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;