(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("material-ui"), require("material-ui/svg-icons/navigation/chevron-left"), require("material-ui/svg-icons/navigation/chevron-right"));
	else if(typeof define === 'function' && define.amd)
		define([, , , ], factory);
	else if(typeof exports === 'object')
		exports["material-ui-pagination"] = factory(require("react"), require("material-ui"), require("material-ui/svg-icons/navigation/chevron-left"), require("material-ui/svg-icons/navigation/chevron-right"));
	else
		root["material-ui-pagination"] = factory(root[undefined], root[undefined], root[undefined], root[undefined]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _materialUi = __webpack_require__(2);

	var _chevronLeft = __webpack_require__(3);

	var _chevronLeft2 = _interopRequireDefault(_chevronLeft);

	var _chevronRight = __webpack_require__(4);

	var _chevronRight2 = _interopRequireDefault(_chevronRight);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var styles = {
	  pagination: {
	    borderTop: "1px solid rgb(224, 224, 224)",
	    display: "flex",
	    alignItems: "center",
	    justifyContent: "flex-end"
	  },
	  elements: {
	    display: "flex",
	    alignItems: "center",
	    height: 56,
	    marginLeft: 16
	  },
	  pageSelect: {
	    marginLeft: 0
	  },
	  label: {
	    color: "#999",
	    fontWeight: 300,
	    fontSize: 12
	  },
	  select: {
	    width: 100,
	    textAlign: "right"
	  },
	  underline: {
	    display: "none"
	  }
	};

	var Pagination = function (_Component) {
	  _inherits(Pagination, _Component);

	  function Pagination(props, context) {
	    _classCallCheck(this, Pagination);

	    var _this = _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props, context));

	    _this.state = {
	      selectedPerPageOptionIndex: _this.props.initialPerPageOptionIndex,
	      currentPageIndex: 1
	    };
	    _this.handleChangePerPage = _this.handleChangePerPage.bind(_this);
	    _this.handleChangePage = _this.handleChangePage.bind(_this);
	    console.log("%c Pagination Component -> Init ", "background: red; color: white");
	    return _this;
	  }

	  _createClass(Pagination, [{
	    key: "handleChangePage",
	    value: function handleChangePage(page) {
	      this.setState({
	        currentPageIndex: page
	      });
	      this.onChange(page, this.props.perPageOptions[this.state.selectedPerPageOptionIndex]);
	    }
	  }, {
	    key: "handleChangePerPage",
	    value: function handleChangePerPage(perPage) {
	      var maxPage = Math.ceil(this.props.total / this.props.perPageOptions[perPage]);
	      var newPageIndex = this.state.currentPageIndex;
	      if (newPageIndex > maxPage) {
	        newPageIndex = maxPage;
	      }
	      this.setState({
	        selectedPerPageOptionIndex: perPage,
	        currentPageIndex: newPageIndex
	      });
	      this.onChange(newPageIndex, this.props.perPageOptions[perPage]);
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(currPage, perPage) {
	      if (typeof this.props.onChange === "function") {
	        this.props.onChange(currPage, perPage);
	      }
	    }
	  }, {
	    key: "getToFromText",
	    value: function getToFromText() {
	      if (typeof this.props.toFrom === "function") {
	        return this.props.toFrom(this.state.currentPageIndex, this.props.perPageOptions[this.state.selectedPerPageOptionIndex]);
	      } else {
	        var to = this.state.currentPageIndex * this.props.perPageOptions[this.state.selectedPerPageOptionIndex];
	        if (to > this.props.total) {
	          to = this.props.total;
	        }
	        var from = (this.state.currentPageIndex - 1) * this.props.perPageOptions[this.state.selectedPerPageOptionIndex] + 1;
	        if (from > to) {
	          from = to;
	        }
	        return { to: to, from: from };
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      var _this2 = this;

	      console.log("%c Pagination Component -> Render ", "background: black; color: pink");
	      var _props = this.props,
	          total = _props.total,
	          texts = _props.texts,
	          perPageOptions = _props.perPageOptions,
	          _state = this.state,
	          selectedPerPageOptionIndex = _state.selectedPerPageOptionIndex,
	          currentPageIndex = _state.currentPageIndex;


	      var pages = [],
	          count = Math.ceil(total / perPageOptions[selectedPerPageOptionIndex]);

	      for (var j = 1; j <= count; j++) {
	        pages.push(j);
	      }

	      var _getToFromText = this.getToFromText(),
	          to = _getToFromText.to,
	          from = _getToFromText.from;

	      var showing = texts.showing.replace("{total}", total).replace("{from}", from).replace("{to}", to);

	      return _react2.default.createElement(
	        "div",
	        { style: styles.pagination },
	        _react2.default.createElement(
	          "div",
	          { style: Object.assign({}, styles.elements, styles.pageSelect) },
	          _react2.default.createElement(
	            "div",
	            { style: styles.label },
	            texts.page + " "
	          ),
	          _react2.default.createElement(
	            _materialUi.SelectField,
	            {
	              onChange: function onChange(e, idx, page) {
	                return _this2.handleChangePage(page);
	              },
	              value: currentPageIndex,
	              style: styles.select,
	              underlineStyle: styles.underline },
	            pages.map(function (page) {
	              return _react2.default.createElement(_materialUi.MenuItem, {
	                primaryText: page,
	                value: page,
	                key: "page-" + page });
	            })
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { style: styles.elements },
	          _react2.default.createElement(
	            "div",
	            { style: styles.label },
	            texts.perPageOptions + " "
	          ),
	          _react2.default.createElement(
	            _materialUi.SelectField,
	            {
	              onChange: function onChange(e, idx, selectedOption) {
	                return _this2.handleChangePerPage(selectedOption);
	              },
	              value: selectedPerPageOptionIndex,
	              style: styles.select,
	              underlineStyle: styles.underline },
	            perPageOptions.map(function (v, i) {
	              return _react2.default.createElement(_materialUi.MenuItem, { key: i, value: i, primaryText: v });
	            })
	          )
	        ),
	        _react2.default.createElement(
	          "div",
	          { style: styles.elements },
	          _react2.default.createElement(
	            "div",
	            { style: styles.label },
	            "" + showing
	          ),
	          _react2.default.createElement(
	            _materialUi.IconButton,
	            {
	              disabled: currentPageIndex === 1,
	              onTouchTap: function onTouchTap(e) {
	                return _this2.handleChangePage(currentPageIndex - 1, e);
	              } },
	            _react2.default.createElement(_chevronLeft2.default, null)
	          ),
	          _react2.default.createElement(
	            _materialUi.IconButton,
	            {
	              disabled: currentPageIndex === count,
	              onTouchTap: function onTouchTap(e) {
	                return _this2.handleChangePage(currentPageIndex + 1, e);
	              } },
	            _react2.default.createElement(_chevronRight2.default, null)
	          )
	        )
	      );
	    }
	  }]);

	  return Pagination;
	}(_react.Component);

	Pagination.defaultProps = {
	  total: 0,
	  perPageOptions: [10],
	  texts: {
	    page: "Page: ",
	    perPageOptions: "Per Page: ",
	    showing: "Showing {from} to {to} of {total}"
	  },
	  initialPerPageOptionIndex: 0
	};
	Pagination.propTypes = {
	  onChange: _react2.default.PropTypes.func,
	  total: _react2.default.PropTypes.number.isRequired,
	  perPageOptions: _react2.default.PropTypes.number,
	  texts: _react2.default.PropTypes.shape({
	    page: _react2.default.PropTypes.string.isRequired,
	    perPageOptions: _react2.default.PropTypes.string.isRequired,
	    showing: _react2.default.PropTypes.string.isRequired
	  }),
	  toFrom: _react2.default.PropTypes.any,
	  initialPerPageOptionIndex: _react2.default.PropTypes.number
	};

	exports.default = Pagination;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }
/******/ ])
});
;