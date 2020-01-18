/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ "./src/js/main.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_1__);
//import "@babel/polyfill"


Object(_main__WEBPACK_IMPORTED_MODULE_0__["main"])();

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var pokemon = [];
function main() {
  var datos = [];
  var promises = [];

  for (var i = 1; i < 492; i++) {
    var url = 'https://pokeapi.co/api/v2/pokemon/' + i;
    promises[i] = fetch(url).then(function (resp) {
      return resp.json();
    });
  }

  Promise.all(promises).then(function (responses) {
    datos = responses.filter(function (data) {
      return data != undefined;
    });
    pokemon = datos.map(function (pokmon) {
      return {
        name: pokmon.name,
        id: pokmon.id,
        imagef: pokmon.sprites["front_default"],
        imageb: pokmon.sprites["back_default"],
        imagefs: pokmon.sprites["front_shiny"],
        imagebs: pokmon.sprites["back_shiny"],
        type: pokmon.types.map(function (type) {
          return type.type.name;
        }).join(", "),
        abilities: pokmon.abilities.map(function (ab) {
          return ab.ability.name;
        }).join(",")
      };
    });
    listload(0, 152);
  });
  document.getElementsByClassName("gen__select")[0].addEventListener("change", selectgen);
  document.getElementsByClassName("pokedex__select")[0].addEventListener("change", selectpokemon);
  document.querySelector('.linkcontainer').onhover = playpikachu;
}

function selectpokemon() {
  var value = document.getElementsByClassName("pokedex__select")[0].value;
  var imgs = document.querySelectorAll(".card__image");
  imgs = _toConsumableArray(imgs);
  var p = pokemon.filter(function (x) {
    return x.name === value;
  });
  imgs[0].src = p[0].imagef;
  imgs[1].src = p[0].imageb;
  imgs[2].src = p[0].imagefs;
  imgs[3].src = p[0].imagebs;
  document.querySelector(".card__name").innerHTML = p[0].name;
  document.querySelector("#abilities").innerHTML = p[0].abilities;
  document.querySelector("#type").innerHTML = p[0].type;
}

function selectgen() {
  var i, n;
  var value = document.getElementsByClassName("gen__select")[0].value;
  var list = document.getElementsByClassName("pokedex__select")[0];

  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  if (value === "1st gen") {
    i = 0;
    n = 152;
  } else if (value === "2nd gen") {
    i = 151;
    n = 252;
  } else if (value === "3rd gen") {
    i = 251;
    n = 387;
  } else {
    i = 386;
    n = pokemon.length;
  }

  listload(i, n);
}

function listload(i, n) {
  var option = document.getElementsByClassName("pokedex__select")[0];

  for (var k = i; k < n - 1; k++) {
    var ul = document.createElement("option");
    ul.value = pokemon[k].name;
    ul.innerHTML = pokemon[k].name;
    option.appendChild(ul);
  }
}

function playpikachu() {
  document.getElementById('pikachusound').play();
}

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=build.js.map