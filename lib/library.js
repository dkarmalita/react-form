(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("@kard/react-form", ["react"], factory);
	else if(typeof exports === 'object')
		exports["@kard/react-form"] = factory(require("react"));
	else
		root["@kard/react-form"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/FieldComponent.jsx":
/*!********************************!*\
  !*** ./src/FieldComponent.jsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FieldComponent = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line camelcase
var helpLink_formBoundaries = 'http://example.com';

/**
 * Properties:
 *
 * formLink={...}
 * type='password'
 * fieldName={'password'}
 * disabled
 * onReady={ (inputRef)=>{ this.inputRef = inputRef } }
 * onValidate={ (value, errors, formState, invalidator)=>['error1', 'eerror2'] }
 * onShouldUpdate={(nextState,formState)=>true}
 * onFocusChange={(fieldState, fieldName)=>console.log('onFocusChange', fieldName, {fieldState})}
 * onValidChange={(fieldState, fieldName)=>console.log('onValidChange', fieldName, {fieldState})}
 * onStateChange={(fieldState, fieldName)=>console.log('onStateChange', fieldName, {fieldState})}
 */

var FieldComponent = exports.FieldComponent = function (_React$Component) {
  _inherits(FieldComponent, _React$Component);

  function FieldComponent(props) {
    _classCallCheck(this, FieldComponent);

    // log = logger.bind( this )
    // log( 'constructor', { props })

    // ## Internally used, protected, methods.

    var _this = _possibleConstructorReturn(this, (FieldComponent.__proto__ || Object.getPrototypeOf(FieldComponent)).call(this, props));

    _this._getDomProps = _this._getDomProps.bind(_this);
    // Returns a set of properties cleaned from unacceptable/specific items.

    _this._formLink = _this._formLink.bind(_this);
    // Used to get access to `formLink`.

    _this._getFormState = _this._getFormState.bind(_this);
    // Used to get `formState`.

    _this._getFieldState = _this._getFieldState.bind(_this);
    _this._setFieldState = _this._setFieldState.bind(_this);
    // Used to get and set the field state.

    _this._initializeFieldState = _this._initializeFieldState.bind(_this);
    // Used to set up all of the field properties while construction or reinitialization (cancel).

    _this._getValueErrors = _this._getValueErrors.bind(_this);
    // Validate a value with external validators, returns an array of errors.

    _this._validate = _this._validate.bind(_this);
    // Calls `_getValueErrors` with the current context (field state and etc.).

    _this._invalidateValue = _this._invalidateValue.bind(_this);
    // Takes a value and an error array of it. If the value is actual, errors are applied to it. Used in async validation.

    _this._shouldFieldUpdate = _this._shouldFieldUpdate.bind(_this);
    // Uses `onShouldUpdate` handler to check if the nextState can be applied or not.

    _this._fireOnReady = _this._fireOnReady.bind(_this);

    _this._fireOnFocusChange = _this._fireOnFocusChange.bind(_this);
    // Fires `onFocusChange` if the handler is given, when necessary.

    _this._fireOnValidChange = _this._fireOnValidChange.bind(_this);
    // Fires `onValidChange` if the handler is given, when necessary.

    _this._getInitialValue = _this._getInitialValue.bind(_this);
    // Calculates initial value based on the initialization value and control's default value.

    // ## Controls API

    _this.getDefaultValue = _this.getDefaultValue.bind(_this);
    // Return default value of the control. Override it to change the value for all of the cases.

    _this.getDomProps = _this._getDomProps;
    // Returns a set of properties cleaned from unacceptable/specific items. Override it when you need to filter out some additionsl properties.

    _this.handleChangeEvent = _this.handleChangeEvent.bind(_this);
    // Used to handle standard onChange event

    _this.handleFocusEvent = _this.handleFocusEvent.bind(_this);
    // Used to handle standard onFocus event

    _this.handleBlurEvent = _this.handleBlurEvent.bind(_this);
    // Used to handle standard onBlur event

    _this.getFieldState = _this._getFieldState;
    // Used to get full field state

    _this.getFieldValue = _this.getFieldValue.bind(_this);
    _this.setFieldValue = _this._setFieldValue.bind(_this);
    // Used to get and set field values

    _this._initializeFieldState(_this._fireOnReady);
    return _this;
  }

  _createClass(FieldComponent, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps() {
      // If the field was 'canceled' - reinitialize it
      var _getFieldState2 = this._getFieldState(),
          touched = _getFieldState2.touched;

      if (typeof touched === 'undefined') {
        this._initializeFieldState();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      var _this2 = this;

      return true;
      // KARD: experimental, Eliminate superfluous renders with shouldComponentUpdate.
      // Ensure that the input is re-rendered only when its value changed.
      var propsToCompare = function propsToCompare(props) {
        var _getDomProps2 = _this2._getDomProps(props),
            children = _getDomProps2.children,
            propsToCompare = _objectWithoutProperties(_getDomProps2, ['children']);

        return propsToCompare;
      };
      var stateChanged = !(0, _utils.isObjectsEqual)(this.__currentState, this._getFieldState());
      var propsChanged = !(0, _utils.isObjectsEqual)(propsToCompare(this.props), propsToCompare(nextProps));
      var childrenChanged = this.props.children != nextProps.children;
      return stateChanged || propsChanged || childrenChanged;
    }

    // ## [1] Internally used, protected, methods
    // ------------------------------------------

    /**
     * The only method to get formLink of the FormProvider
     * @return {Object} - formLink or its emulator
     */

  }, {
    key: '_formLink',
    value: function _formLink() {
      if (this.props.fieldName && this.props.formLink && !(0, _utils.isObjectsEqual)(this.props.formLink, {})) {
        return this.props.formLink;
      }

      if (!this.errorShown) {
        console.error(this.constructor.name + ' must be used in bounds of FormProvider. '
        // eslint-disable-next-line camelcase
        + ('Visit ' + helpLink_formBoundaries + ' to learn more about the form boundaries.'));
        this.errorShown = true;
      }

      var formLink = {
        formProps: {},
        getFormState: function getFormState() {
          return {};
        },
        onBlur: function onBlur() {},
        onChange: function onChange() {},
        onFocus: function onFocus() {}
      };
      return formLink;
    }
  }, {
    key: '_getFormState',
    value: function _getFormState() {
      return this._formLink().getFormState();
    }

    /**
     * The only way to get field state from the form
     * @return {Object} - filed buffer
     */

  }, {
    key: '_getFieldState',
    value: function _getFieldState() {
      // * get the state from form buffer or generate the empty state
      return this._getFormState()[this.props.fieldName] || {};
    }

    /**
     * The only way to set field state
     * @param {Object} nextState - the state to set
     */

  }, {
    key: '_setFieldState',
    value: function _setFieldState(nextState, cb) {
      var _this3 = this;

      this._formLink().onChange(this.props.fieldName, nextState, function () {
        // Store the new field state for further usage in shouldComponentUpdate
        _this3.__currentState = Object.assign({}, nextState);

        // Fire onChange event if a handler given
        if (_this3.props.onStateChange) {
          _this3.props.onStateChange(nextState, _this3.props.fieldName);
        }

        if (cb) {
          cb();
        }
      });
    }

    /**
     * Is used by constructor to fill all of the field's attributes to defaults
     */

  }, {
    key: '_initializeFieldState',
    value: function _initializeFieldState(cb) {
      var _this4 = this;

      var value = this._getInitialValue();

      // Get errors if any for the value we have
      var errors = this._getValueErrors(value, [], this._getFormState(), this._invalidateValue);

      // Combine next state of field
      var nextState = {
        value: value,
        errors: errors, // Errors codes/massages of the field validation.
        focused: false,
        dirty: false, // The control's value has changed.
        touched: false, // The control has been visited
        valid: errors.length === 0 // The control's value is valid.


        // Store preserved value for further check. It is 'undefined' if the componant
        // is just created or contains some value in onCancel flow.
      };var oldState = this.__currentState;

      this._setFieldState(nextState, function () {
        if (cb) {
          cb(nextState);
        }
        // If we are in 'cancel' flow and valid value is changed, fire the event.
        if (typeof oldState === 'undefined') {
          return;
        }
        if (oldState.valid !== nextState.valid) {
          _this4._fireOnValidChange(nextState);
        }
      });
    }

    /**
     * _getValueErrors returns array of errors for the given value
     * @param  {Any} value - value to test
     * @param  {Array} errors - the current list of errors
     * @param  {Object} formState - the current form state
     * @param  {Function} invalidator - async invalidator (see _invalidateValue)
     * @return {Array} - updated array of errors
     */

  }, {
    key: '_getValueErrors',
    value: function _getValueErrors(value, errors, formState, invalidator) {
      var result = this.props.onValidate ? this.props.onValidate(value, errors, formState, invalidator) : [];
      return result;
    }

    /**
     * _invalidate is used to set invalid field state and add some errors to to
     * the state for a specific value. If field's value is different from the one
     * gitven in the parameters, nothing happans. Usually used to invalidate the
     * field after an asynchronic check.
     * @param  {[type]} value - the original value to be invalidated
     * @param  {Array}  errors - errors (id/massages) to add
     * @return {Void}
     */

  }, {
    key: '_invalidateValue',
    value: function _invalidateValue(value) {
      var _this5 = this;

      var errors = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

      var fieldState = this._getFieldState();

      // If the field value is not relevant or there are no errors in array, just return
      if (fieldState.value !== value || errors.length === 0) {
        return;
      }

      // Add only errors are not in the list yet
      var nextErrors = (0, _utils.combineArrays)(fieldState.errors || [], errors);

      // Update field's state with new errors
      var nextState = _extends({}, fieldState, {
        valid: nextErrors.length === 0,
        errors: nextErrors
      });

      this._setFieldState(nextState, function () {
        if (fieldState.valid !== nextState.valid) {
          _this5._fireOnValidChange(nextState);
        }
      });
    }

    /**
     * _validate executes a call of this._getFieldState(...) within the current context.
     * @param  {Any} value - a value to test
     * @return {Array} - array if errors for the given value
     */

  }, {
    key: '_validate',
    value: function _validate(value) {
      var errors = this._getValueErrors(value, this._getFieldState().errors, this._getFormState(), this._invalidateValue);
      return errors;
    }

    /**
     * _getInitialValue returns initial value of the field extracted from formLink
     * @return {Any} - initial value of the field
     */

  }, {
    key: '_getInitialValue',
    value: function _getInitialValue() {
      var _formLink2 = this._formLink(),
          formProps = _formLink2.formProps;

      return formProps && formProps.initialValues && typeof formProps.initialValues[this.props.fieldName] !== 'undefined' ? formProps.initialValues[this.props.fieldName] : this.getDefaultValue();
    }

    /**
     * _setFieldValue is used to set the field value and set all of the value related
     * flags: errors, dirty, valid
     * @param {Amy}   newValue - a value to set
     * @param {Function} cb - callback to call after the value is set
     */

  }, {
    key: '_setFieldValue',
    value: function _setFieldValue(nextValue, cb) {
      var _this6 = this;

      // if the control is disabled, do nothing
      if (this.props.disabled) {
        return;
      }

      // extract next value from event
      // const nextValue = event.target.value;

      // validate the next value
      var nextErrors = this._validate(nextValue);

      var fieldState = this._getFieldState();

      // validate it and put into nextState
      var nextState = _extends({}, fieldState, {
        value: nextValue,
        errors: nextErrors,
        dirty: nextValue !== this._getInitialValue(), // The control's value has changed.
        valid: nextErrors.length === 0 // The control's value is valid.


        // test if the nextState should be set, return if no
      });if (!this._shouldFieldUpdate(nextState)) {
        return;
      }

      // set the new field state
      this._setFieldState(nextState, function () {
        // Handle valid changed event is valid property of the states are different
        if (fieldState.valid !== nextState.valid) {
          _this6._fireOnValidChange(nextState);
        }

        // Fire onChange event if a handler given
        if (_this6.props.onChange) {
          _this6.props.onChange(event);
        }

        if (cb) {
          cb();
        }
      });
    }

    /**
     * Fired onShouldUpdate and return its value or true
     * @param  {Object} nextState - field state to check
     * @return {[type]} - true when the nextState should be set, false in other case
     */

  }, {
    key: '_shouldFieldUpdate',
    value: function _shouldFieldUpdate(nextState) {
      if (this.props.onShouldUpdate) {
        return this.props.onShouldUpdate(nextState, this._getFormState());
      }
      return true;
    }
  }, {
    key: '_fireOnReady',
    value: function _fireOnReady() {
      var onReady = this.props.onReady;

      if (onReady) onReady(this);
    }
  }, {
    key: '_fireOnFocusChange',
    value: function _fireOnFocusChange(fieldState) {
      if (this.props.onFocusChange) {
        this.props.onFocusChange(fieldState, this.props.fieldName);
      }
    }
  }, {
    key: '_fireOnValidChange',
    value: function _fireOnValidChange(fieldState) {
      if (this.props.onValidChange) {
        this.props.onValidChange(fieldState, this.props.fieldName);
      }
    }
  }, {
    key: '_getDomProps',
    value: function _getDomProps() {
      var _props = this.props,
          fieldName = _props.fieldName,
          formLink = _props.formLink,
          onReady = _props.onReady,
          onFocusChange = _props.onFocusChange,
          onShouldUpdate = _props.onShouldUpdate,
          onValidate = _props.onValidate,
          onValidChange = _props.onValidChange,
          onStateChange = _props.onStateChange,
          cleanProps = _objectWithoutProperties(_props, ['fieldName', 'formLink', 'onReady', 'onFocusChange', 'onShouldUpdate', 'onValidate', 'onValidChange', 'onStateChange']);

      return cleanProps;
    }

    // ## [2] Controls API
    // -------------------------------------

  }, {
    key: 'getDefaultValue',
    value: function getDefaultValue() {
      return ''; // text, password
    }
  }, {
    key: 'getFieldValue',
    value: function getFieldValue() {
      return this._getFieldState().value;
    }
  }, {
    key: 'handleChangeEvent',
    value: function handleChangeEvent(event) {
      this._setFieldValue(event.target.value);
    }
  }, {
    key: 'handleFocusEvent',
    value: function handleFocusEvent(event) {
      var _this7 = this;

      var fieldState = this._getFieldState();
      var nextState = _extends({}, fieldState, {
        focused: true,
        touched: true
      });

      this._setFieldState(nextState, function () {
        // Fire onFocus event if a handler given
        if (_this7.props.onFocus) {
          _this7.props.onFocus(event);
        }

        // Fire onFocusChanged. It's posible to get here without
        // field focus state changed for radio buttons.
        if (fieldState.focused !== nextState.focused) {
          _this7._fireOnFocusChange(nextState);
        }

        // Fire form's onFocus event
        _this7._formLink().onFocus(_this7.props.fieldName, nextState);
      });
    }
  }, {
    key: 'handleBlurEvent',
    value: function handleBlurEvent(event) {
      var _this8 = this;

      var fieldState = this._getFieldState();
      var nextState = _extends({}, fieldState, {
        focused: false
      });

      this._setFieldState(nextState, function () {
        // Fire onBlur event if a handler given
        if (_this8.props.onBlur) {
          _this8.props.onBlur(event);
        }

        // Fire onFocusChanged. It's posible to get here without
        // field focus state changed for radio buttons.
        if (fieldState.focused !== nextState.focused) {
          _this8._fireOnFocusChange(nextState);
        }

        // Fire form's onFocus event
        _this8._formLink().onBlur(_this8.props.fieldName, nextState);
      });
    }
  }]);

  return FieldComponent;
}(_react2.default.Component);

// --------------------------------------------------------------------------

FieldComponent.defaultProps = {
  formLink: null
};

/***/ }),

/***/ "./src/FormProvider.jsx":
/*!******************************!*\
  !*** ./src/FormProvider.jsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connect = exports.FormProvider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _utils = __webpack_require__(/*! ./utils */ "./src/utils/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: (kard) list:
// [x] form invalidator (to use with submit errors)
// [x] check whole form state (touched, valid, dirty)
// [-] filter out unneccesary attributes on submit (remine only values?)
// [x] should submitting form block its changes?
// [ ] onFocus & onBlur of the form

var FormContext = _react2.default.createContext({});
// https://reactjs.org/docs/context.html#api

/**
 * Properties:
 * onFormReady=(formLink)=>{...}
 * onChange=(newState)=>{...}
 * onFocus
 * onBlur
 */

var FormProvider = exports.FormProvider = function (_React$Component) {
  _inherits(FormProvider, _React$Component);

  function FormProvider(props) {
    _classCallCheck(this, FormProvider);

    // Bindings
    // log = logger.bind( this )

    var _this = _possibleConstructorReturn(this, (FormProvider.__proto__ || Object.getPrototypeOf(FormProvider)).call(this, props));

    _this.state = { formBuffer: {}, blocked: false };
    _this._getFieldState = _this._getFieldState.bind(_this);
    // Returns a field state by its name.

    _this._setFieldState = _this._setFieldState.bind(_this);
    // Set a field's state by its name

    _this._getFormStateOf = _this._getFormStateOf.bind(_this);
    // Used to get summarized attribute of the form (dirty, value, touched, focused, etc.).  Tests all fields for attributName === defaultValue. Returns defaultValue if all of the tests are true, other case returns the first difference value met.

    _this._getFormState = _this._getFormState.bind(_this);
    _this._setFormState = _this._setFormState.bind(_this);

    _this._handleChange = _this._handleChange.bind(_this);
    // Process any field changes

    _this._setFieldsAttribute = _this._setFieldsAttribute.bind(_this);
    // Set a named attribute of each field from a values object

    _this._blocked = _this._blocked.bind(_this);
    // Used in formProvider to set/release block outside the form

    _this._getFormStateNormilized = _this._getFormStateNormilized.bind(_this);
    // Used to generate the form's extended state supplied to formProvider.getFormState

    _this._valuesToBuffer = _this._valuesToBuffer.bind(_this);
    // Set value of each field from a value object.

    _this._reset = _this._reset.bind(_this);
    // Reset form buffer to it's initial state.

    _this._invalidateForm = _this._invalidateForm.bind(_this);
    // Apply errors from error object to fields.

    _this._fireOnFormReady = _this._fireOnFormReady.bind(_this);
    // Wrapper for onFormReady event hander call.

    // Loading initial values from initialValues property to formBuffer
    _this.state.formBuffer = _this._valuesToBuffer(_this.props.initialValues || {});

    // log( 'constructor', { formBuffer: this.state.formBuffer })

    // Provides all 'out of the form' API
    _this._formProvider = {
      reset: _this._reset,
      getFormState: _this._getFormStateNormilized,
      getFieldState: _this._getFieldState,
      setFieldState: _this._setFieldState,
      invalidateForm: _this._invalidateForm,
      setBlocked: _this._blocked

      // Firing onFormReady event
    };_this._fireOnFormReady();
    return _this;
  }

  // formLink methods
  // ================

  _createClass(FormProvider, [{
    key: '_invalidateForm',
    value: function _invalidateForm(errorsObject) {
      var formBuffer = _extends({}, this._getFormState());

      Object.keys(errorsObject).forEach(function (el) {
        formBuffer[el] = _extends({}, formBuffer[el], {
          valid: false,
          errors: (0, _utils.combineArrays)(formBuffer[el].errors || [], errorsObject[el])
        });
      });

      this._setFormState(formBuffer);
    }

    /**
     * Reset form values to their initials (from initState property)
     */

  }, {
    key: '_reset',
    value: function _reset(cb) {
      this._setFormState(this._valuesToBuffer(this.props.initialValues || {}), cb);
    }
  }, {
    key: '_getFormState',
    value: function _getFormState() {
      return this.state.formBuffer;
    }
  }, {
    key: '_blocked',
    value: function _blocked() {
      var newValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      // If no value given, return the current state.
      if (newValue === null) {
        return this.state.blocked;
      }

      // Set the given state for block and return this value.
      this.setState(_extends({}, this.state, { blocked: newValue }));
      return newValue;
    }
  }, {
    key: '_getFormStateNormilized',
    value: function _getFormStateNormilized() {
      return {
        fields: this._getFormState(),
        touched: this._getFormStateOf('touched', false),
        valid: this._getFormStateOf('valid', true),
        dirty: this._getFormStateOf('dirty', false),
        focused: this._getFormStateOf('focused', false),
        blocked: this._blocked()
      };
    }

    /**
     * Tests all fields for attributName === defaultValue. Returns defaultValue if all of the tests are true, other case returns the first difference value met.
     * @param  {string}  attributName - name of the attribute to test
     * @param  {Boolean} defaultValue - default value of the attribute
     * @return {Boolean} - default or opposite value (summarized value of the field)
     */

  }, {
    key: '_getFormStateOf',
    value: function _getFormStateOf(attributName) {
      var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var result = defaultValue;
      var formState = this._getFormState();
      var propsList = Object.keys(formState);

      for (var i = propsList.length - 1; i >= 0; i--) {
        if (formState[propsList[i]][attributName] !== defaultValue) {
          result = formState[propsList[i]][attributName];
          break;
        }
      }

      return result;
    }
  }, {
    key: '_setFormState',
    value: function _setFormState(nextFormState, cb) {
      var _this2 = this;

      this.setState({ formBuffer: nextFormState }, function () {
        if (cb) {
          cb();
        }
        if (_this2.props.onChange) {
          _this2.props.onChange(_this2.state.formBuffer);
        }
      });
    }

    // == end of formLink methods

  }, {
    key: '_fireOnFormReady',
    value: function _fireOnFormReady() {
      var onFormReady = this.props.onFormReady;

      if (onFormReady) onFormReady(this._formProvider);
    }

    // Takes an object within { fieldName: attrValue } pairs and the attribute name.
    // Assigns each attribute to the named field inside the form buffer. Makes it in the only setState.

  }, {
    key: '_setFieldsAttribute',
    value: function _setFieldsAttribute(attrName, values) {
      var formBuffer = _extends({}, this._getFormState());

      Object.keys(values).forEach(function (el) {
        formBuffer[el] = _extends({}, formBuffer[el], _defineProperty({}, attrName, values[el]));
      });

      this._setFormState(formBuffer);
    }
  }, {
    key: '_valuesToBuffer',
    value: function _valuesToBuffer(values) {
      var formBuffer = {};

      Object.keys(values).forEach(function (el) {
        formBuffer[el] = { value: values[el] };
      });

      return formBuffer;
    }
  }, {
    key: '_getFieldState',
    value: function _getFieldState(fieldName) {
      return this.state.formBuffer[fieldName];
    }
  }, {
    key: '_setFieldState',
    value: function _setFieldState(fieldName, nextFieldState, cb) {
      this._setFormState(_extends({}, this.state.formBuffer, _defineProperty({}, fieldName, nextFieldState)), cb);
    }

    /**
     * _handleChange is calling each time when some field of the form is changed.
     * It uses `formBuffer` and field's name and status to combine next form value
     * and pass it to the form's `onChange` handler if it exists.
     * @param  {string} fieldName
     * @param  {object} fieldStatus
     * @return {void}
     */

  }, {
    key: '_handleChange',
    value: function _handleChange(fieldName, nextFieldState, cb) {
      // If the form is not blocked and not in the initialization
      if (this.state.blocked && nextFieldState.touched !== false // it is true while initializing only
      ) {
          return;
        }

      if (JSON.stringify(nextFieldState) === JSON.stringify(this._getFieldState(fieldName))) return;

      this._setFieldState(fieldName, nextFieldState, cb);
    }

    /**
     * _otherProps is used to get a properties set cleaned from the form-specific
     * properties which are used as separate `formLink` fields., suitable to place
     * them to the `formProps` field of the `formLink`.
     * @param  {object} props - a set of properties are passed to the form provider.
     * @return {object} - a set of the properties cleaned.
     */

  }, {
    key: '_otherProps',
    value: function _otherProps(props) {
      var onChange = props.onChange,
          children = props.children,
          formBuffer = props.formBuffer,
          other = _objectWithoutProperties(props, ['onChange', 'children', 'formBuffer']);

      return other;
    }

    /**
     * `render` is only used to render the component's children in the context of the
     * `formLink` structure which contains all of the necessary form-wide fields.
     * @return {Component}
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var formLink = {
        // This formLink will be passed to each field and used for all under the hood communications.

        getFormState: function getFormState() {
          return _this3.state.formBuffer;
        },

        // * `onChange( nextValues )` is calling on each form field change. `nextValue`
        // is the next state of the form.
        onChange: this._handleChange,
        onFocus: function onFocus(fieldName, newState) {
          if (_this3.props.onFocus) {
            _this3.props.onFocus(fieldName, newState);
          }
        },
        onBlur: function onBlur(fieldName, newState) {
          if (_this3.props.onBlur) {
            _this3.props.onBlur(fieldName, newState);
          }
        },

        // * `formProps` contains all of the form's properties except `children` and
        // those used by FormProvider itself. See also `_otherProps`.
        formProps: _extends({}, this._otherProps(this.props))

      };

      return _react2.default.createElement(
        FormContext.Provider,
        { value: formLink },
        this.props.children
      );
    }
  }]);

  return FormProvider;
}(_react2.default.Component);

/**
 * HOC which is used to convert Basic Input Components to those connected to the form's context.
 * @param  {Component} FormComponent - one of the Basic Input Components.
 * @return {Component} - Connected to the form's context Component.
 */


var Connect = exports.Connect = function Connect(FormComponent) {
  return function (_React$Component2) {
    _inherits(_class2, _React$Component2);

    function _class2() {
      var _ref;

      var _temp, _this4, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this4 = _possibleConstructorReturn(this, (_ref = _class2.__proto__ || Object.getPrototypeOf(_class2)).call.apply(_ref, [this].concat(args))), _this4), _this4.render = function () {
        return _react2.default.createElement(
          FormContext.Consumer,
          null,
          function (formLink) {
            return _react2.default.createElement(FormComponent, _extends({}, _this4.props, { formLink: formLink }));
          }
        );
      }, _temp), _possibleConstructorReturn(_this4, _ret);
    }

    return _class2;
  }(_react2.default.Component);
};

/***/ }),

/***/ "./src/basic-inputs/BasicCheckBox.jsx":
/*!********************************************!*\
  !*** ./src/basic-inputs/BasicCheckBox.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicCheckBox = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _FieldComponent2 = __webpack_require__(/*! FieldComponent */ "./src/FieldComponent.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicCheckBox = exports.BasicCheckBox = function (_FieldComponent) {
  _inherits(BasicCheckBox, _FieldComponent);

  function BasicCheckBox() {
    _classCallCheck(this, BasicCheckBox);

    return _possibleConstructorReturn(this, (BasicCheckBox.__proto__ || Object.getPrototypeOf(BasicCheckBox)).apply(this, arguments));
  }

  _createClass(BasicCheckBox, [{
    key: 'getDefaultValue',
    value: function getDefaultValue() {
      return false;
    }
  }, {
    key: 'handleChangeEvent',
    value: function handleChangeEvent(event) {
      if (this.props.disabled) {
        return;
      }
      this.setFieldValue(!this.getFieldValue());
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({}, this.getDomProps(), {
        type: 'checkbox',
        name: this.props.fieldName,
        checked: this.getFieldValue() || false,
        onChange: this.handleChangeEvent,
        onBlur: this.handleBlurEvent,
        onFocus: this.handleFocusEvent
      }));
    }
  }]);

  return BasicCheckBox;
}(_FieldComponent2.FieldComponent);

/***/ }),

/***/ "./src/basic-inputs/BasicInput.jsx":
/*!*****************************************!*\
  !*** ./src/basic-inputs/BasicInput.jsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _FieldComponent2 = __webpack_require__(/*! FieldComponent */ "./src/FieldComponent.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicInput = exports.BasicInput = function (_FieldComponent) {
  _inherits(BasicInput, _FieldComponent);

  function BasicInput() {
    _classCallCheck(this, BasicInput);

    return _possibleConstructorReturn(this, (BasicInput.__proto__ || Object.getPrototypeOf(BasicInput)).apply(this, arguments));
  }

  _createClass(BasicInput, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({}, this.getDomProps(), {
        type: this.props.type || 'text',
        value: this.getFieldValue() || '',
        onChange: this.handleChangeEvent,
        onBlur: this.handleBlurEvent,
        onFocus: this.handleFocusEvent
      }));
    }
  }]);

  return BasicInput;
}(_FieldComponent2.FieldComponent);

/***/ }),

/***/ "./src/basic-inputs/BasicRadioButton.jsx":
/*!***********************************************!*\
  !*** ./src/basic-inputs/BasicRadioButton.jsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicRadioButton = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _FieldComponent2 = __webpack_require__(/*! FieldComponent */ "./src/FieldComponent.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicRadioButton = exports.BasicRadioButton = function (_FieldComponent) {
  _inherits(BasicRadioButton, _FieldComponent);

  function BasicRadioButton() {
    _classCallCheck(this, BasicRadioButton);

    return _possibleConstructorReturn(this, (BasicRadioButton.__proto__ || Object.getPrototypeOf(BasicRadioButton)).apply(this, arguments));
  }

  _createClass(BasicRadioButton, [{
    key: 'getDefaultValue',
    value: function getDefaultValue() {
      return '';
    }
  }, {
    key: 'handleChangeEvent',
    value: function handleChangeEvent() {
      if (this.props.disabled) {
        return;
      }
      this.setFieldValue(this.props.value);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('input', _extends({}, this.getDomProps(), {
        type: 'radio',
        name: this.props.fieldName,
        checked: this.getFieldValue() === this.props.value,
        onChange: this.handleChangeEvent,
        onBlur: this.handleBlurEvent,
        onFocus: this.handleFocusEvent
      }));
    }
  }]);

  return BasicRadioButton;
}(_FieldComponent2.FieldComponent);

/***/ }),

/***/ "./src/basic-inputs/BasicSelect.jsx":
/*!******************************************!*\
  !*** ./src/basic-inputs/BasicSelect.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicSelect = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _FieldComponent2 = __webpack_require__(/*! FieldComponent */ "./src/FieldComponent.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicSelect = exports.BasicSelect = function (_FieldComponent) {
  _inherits(BasicSelect, _FieldComponent);

  function BasicSelect() {
    _classCallCheck(this, BasicSelect);

    return _possibleConstructorReturn(this, (BasicSelect.__proto__ || Object.getPrototypeOf(BasicSelect)).apply(this, arguments));
  }

  _createClass(BasicSelect, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'select',
        _extends({}, this.getDomProps(), {
          value: this.getFieldValue(),
          onChange: this.handleChangeEvent,
          onBlur: this.handleBlurEvent,
          onFocus: this.handleFocusEvent
        }),
        this.props.children
      );
    }
  }]);

  return BasicSelect;
}(_FieldComponent2.FieldComponent);

/***/ }),

/***/ "./src/basic-inputs/BasicTextarea.jsx":
/*!********************************************!*\
  !*** ./src/basic-inputs/BasicTextarea.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicTextarea = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _FieldComponent2 = __webpack_require__(/*! FieldComponent */ "./src/FieldComponent.jsx");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BasicTextarea = exports.BasicTextarea = function (_FieldComponent) {
  _inherits(BasicTextarea, _FieldComponent);

  function BasicTextarea() {
    _classCallCheck(this, BasicTextarea);

    return _possibleConstructorReturn(this, (BasicTextarea.__proto__ || Object.getPrototypeOf(BasicTextarea)).apply(this, arguments));
  }

  _createClass(BasicTextarea, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('textarea', _extends({}, this.getDomProps(), {
        value: this.getFieldValue() || '',
        onChange: this.handleChangeEvent,
        onBlur: this.handleBlurEvent,
        onFocus: this.handleFocusEvent
      }));
    }
  }]);

  return BasicTextarea;
}(_FieldComponent2.FieldComponent);

/***/ }),

/***/ "./src/basic-inputs/index.js":
/*!***********************************!*\
  !*** ./src/basic-inputs/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _BasicInput = __webpack_require__(/*! ./BasicInput */ "./src/basic-inputs/BasicInput.jsx");

Object.defineProperty(exports, 'BasicInput', {
  enumerable: true,
  get: function get() {
    return _BasicInput.BasicInput;
  }
});

var _BasicCheckBox = __webpack_require__(/*! ./BasicCheckBox */ "./src/basic-inputs/BasicCheckBox.jsx");

Object.defineProperty(exports, 'BasicCheckBox', {
  enumerable: true,
  get: function get() {
    return _BasicCheckBox.BasicCheckBox;
  }
});

var _BasicRadioButton = __webpack_require__(/*! ./BasicRadioButton */ "./src/basic-inputs/BasicRadioButton.jsx");

Object.defineProperty(exports, 'BasicRadioButton', {
  enumerable: true,
  get: function get() {
    return _BasicRadioButton.BasicRadioButton;
  }
});

var _BasicSelect = __webpack_require__(/*! ./BasicSelect */ "./src/basic-inputs/BasicSelect.jsx");

Object.defineProperty(exports, 'BasicSelect', {
  enumerable: true,
  get: function get() {
    return _BasicSelect.BasicSelect;
  }
});

var _BasicTextarea = __webpack_require__(/*! ./BasicTextarea */ "./src/basic-inputs/BasicTextarea.jsx");

Object.defineProperty(exports, 'BasicTextarea', {
  enumerable: true,
  get: function get() {
    return _BasicTextarea.BasicTextarea;
  }
});

/***/ }),

/***/ "./src/customComponents.jsx":
/*!**********************************!*\
  !*** ./src/customComponents.jsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicRadioSwitch = exports.BasicSwitch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _FieldComponent = __webpack_require__(/*! ./FieldComponent */ "./src/FieldComponent.jsx");

var _basicInputs = __webpack_require__(/*! basic-inputs */ "./src/basic-inputs/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * We need custom components in different special cases. The most famous of them is stylization of radio-buttons and check-boxes.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * [x] Input Type Radio
 * [x] Input Type Checkbox
 * [x] Input Type Text ( Password/Color )
 * [x] HTML5 Input Types
 *    [x] color
 *    [x] date
 *    [x] datetime-local
 *    [x] email
 *    [x] month
 *    [x] number
 *    [x] range
 *    [x] search
 *    [x] tel
 *    [x] time
 *    [x] url
 *    [x] week
 * [x] name -> fieldName
 * [x] FormComponent & move to context
 * [e] Eliminate superfluous renders with shouldComponentUpdate.
 * [x] onBlur, onFocus form-wide events
 * [x] validation
 * [x] onBlur validation
 * [x] async validation
 * [ ] setFocus
 */

// ==========================================================================

var BasicSwitch = exports.BasicSwitch = function (_BasicCheckBox) {
  _inherits(BasicSwitch, _BasicCheckBox);

  function BasicSwitch() {
    _classCallCheck(this, BasicSwitch);

    return _possibleConstructorReturn(this, (BasicSwitch.__proto__ || Object.getPrototypeOf(BasicSwitch)).apply(this, arguments));
  }

  _createClass(BasicSwitch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({}, this.getDomProps(), {
          tabIndex: '-1',
          onClick: this.handleChangeEvent,
          onBlur: this.handleBlurEvent,
          onFocus: this.handleFocusEvent
        }),
        this.props.children
      );
    }
  }]);

  return BasicSwitch;
}(_basicInputs.BasicCheckBox);

var BasicRadioSwitch = exports.BasicRadioSwitch = function (_BasicRadioButton) {
  _inherits(BasicRadioSwitch, _BasicRadioButton);

  function BasicRadioSwitch() {
    _classCallCheck(this, BasicRadioSwitch);

    return _possibleConstructorReturn(this, (BasicRadioSwitch.__proto__ || Object.getPrototypeOf(BasicRadioSwitch)).apply(this, arguments));
  }

  _createClass(BasicRadioSwitch, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        _extends({}, this.getDomProps(), {
          tabIndex: '-1',
          onClick: this.handleChangeEvent,
          onBlur: this.handleBlurEvent,
          onFocus: this.handleFocusEvent
        }),
        this.props.children
      );
    }
  }]);

  return BasicRadioSwitch;
}(_basicInputs.BasicRadioButton);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Connect = exports.BasicRadioButton = exports.RadioSwitch = exports.Switch = exports.Textarea = exports.RadioButton = exports.CheckBox = exports.Select = exports.Input = exports.FieldComponent = exports.FormProvider = undefined;

var _FormProvider = __webpack_require__(/*! ./FormProvider */ "./src/FormProvider.jsx");

Object.defineProperty(exports, 'FormProvider', {
  enumerable: true,
  get: function get() {
    return _FormProvider.FormProvider;
  }
});

var _FieldComponent = __webpack_require__(/*! ./FieldComponent */ "./src/FieldComponent.jsx");

Object.defineProperty(exports, 'FieldComponent', {
  enumerable: true,
  get: function get() {
    return _FieldComponent.FieldComponent;
  }
});

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _customComponents = __webpack_require__(/*! ./customComponents */ "./src/customComponents.jsx");

var _basicInputs = __webpack_require__(/*! basic-inputs */ "./src/basic-inputs/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Export of the Basic Input Components connected.
 */
var Input = exports.Input = (0, _FormProvider.Connect)(_basicInputs.BasicInput);
var Select = exports.Select = (0, _FormProvider.Connect)(_basicInputs.BasicSelect);
var CheckBox = exports.CheckBox = (0, _FormProvider.Connect)(_basicInputs.BasicCheckBox);
var RadioButton = exports.RadioButton = (0, _FormProvider.Connect)(_basicInputs.BasicRadioButton);
var Textarea = exports.Textarea = (0, _FormProvider.Connect)(_basicInputs.BasicTextarea);

var Switch = exports.Switch = (0, _FormProvider.Connect)(_customComponents.BasicSwitch);
var RadioSwitch = exports.RadioSwitch = (0, _FormProvider.Connect)(_customComponents.BasicRadioSwitch);

exports.BasicRadioButton = _basicInputs.BasicRadioButton; // from 'components/BasicRadioButton'

exports.Connect = _FormProvider.Connect; // from 'components/FormProvider'

/***/ }),

/***/ "./src/utils/combineArrays.js":
/*!************************************!*\
  !*** ./src/utils/combineArrays.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Add elements from newErrors to errorsBuffer. Each element is addad only if
 * is absent in the errorsBuffer.
 * @param  {Array} errorsBuffer - array of unique errors ids
 * @param  {Array} newErrors - array of unique errors ids to add to errorsBuffer
 * @return {Array]} - combined array of errors
 */
var combineArrays = exports.combineArrays = function combineArrays(errorsBuffer, newErrors) {
  var nextErrors = [].concat(errorsBuffer);

  // Add only errors are not in the list yet
  newErrors.forEach(function (errId) {
    if (!~errorsBuffer.indexOf(errId)) {
      // ref: https://www.joezimjs.com/javascript/great-mystery-of-the-tilde/
      nextErrors.push(errId);
    }
  });

  return nextErrors;
};

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _combineArrays = __webpack_require__(/*! ./combineArrays */ "./src/utils/combineArrays.js");

Object.defineProperty(exports, 'combineArrays', {
  enumerable: true,
  get: function get() {
    return _combineArrays.combineArrays;
  }
});

var _isObjectsEqual = __webpack_require__(/*! ./isObjectsEqual */ "./src/utils/isObjectsEqual.js");

Object.defineProperty(exports, 'isObjectsEqual', {
  enumerable: true,
  get: function get() {
    return _isObjectsEqual.isObjectsEqual;
  }
});

var _logger = __webpack_require__(/*! ./logger */ "./src/utils/logger.js");

Object.defineProperty(exports, 'logger', {
  enumerable: true,
  get: function get() {
    return _logger.logger;
  }
});

/***/ }),

/***/ "./src/utils/isObjectsEqual.js":
/*!*************************************!*\
  !*** ./src/utils/isObjectsEqual.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObjectsEqual = isObjectsEqual;
/**
 * isObjectsEqual Deeply chack two objects for equality
 * idea: https://stackoverflow.com/a/16788517
 * @param  {Object}  x - the first object to compare
 * @param  {Object}  y - the second object to compare
 * @return {Boolean} - true when objects equal, false in another case
 */
function isObjectsEqual(x, y) {
  if (x === null || x === undefined || y === null || y === undefined) {
    return x === y;
  }

  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) {
    return false;
  }

  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) {
    return x === y;
  }

  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (x instanceof RegExp) {
    return x === y;
  }
  if (x === y || x.valueOf() === y.valueOf()) {
    return true;
  }
  if (Array.isArray(x) && x.length !== y.length) {
    return false;
  }

  // if they are dates, they must had equal valueOf
  if (x instanceof Date) {
    return false;
  }

  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) {
    return false;
  }
  if (!(y instanceof Object)) {
    return false;
  }

  // recursive object equality check
  var p = Object.keys(x);
  return Object.keys(y).every(function (i) {
    return p.indexOf(i) !== -1;
  }) && p.every(function (i) {
    return isObjectsEqual(x[i], y[i]);
  });
}

/***/ }),

/***/ "./src/utils/logger.js":
/*!*****************************!*\
  !*** ./src/utils/logger.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logger = logger;
var logStyle = 'background: #222; color: #bada55';

function logger() {
  var _console;

  for (var _len = arguments.length, params = Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  // eslint-disable-next-line
  (_console = console).log.apply(_console, ['%c' + this.constructor.name, logStyle].concat(params));
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=library.js.map