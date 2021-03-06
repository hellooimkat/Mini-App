'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      currentPage: 0,
      firstPageState: {},
      secondPageState: {},
      thirdPageState: {}
    };
    return _this;
  }

  _createClass(App, [{
    key: 'postData',
    value: function postData(url, data) {
      return fetch(url, {
        body: JSON.stringify(data),
        cache: 'no-cache',
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST'
      });
    }
  }, {
    key: 'onNaviClick',
    value: function onNaviClick(btn, state, page) {
      if (btn == "previousBtn") {
        this.setState(function (prevState, props) {
          return {
            currentPage: --prevState.currentPage
          };
        });
      } else if (btn == "nextBtn") {
        this.setState(function (prevState, props) {
          return {
            currentPage: ++prevState.currentPage
          };
        });
        if (page == 1) {
          this.postData('http://127.0.0.1:3000/page1', state);
          this.setState({
            firstPageState: state
          });
        } else if (page == 2) {
          this.postData('http://127.0.0.1:3000/page2', state);
          this.setState({
            secondPageState: state
          });
        } else if (page == 3) {
          this.postData('http://127.0.0.1:3000/page3', state);
          this.setState({
            thirdPageState: state
          });
        }
      } else if (btn == "checkout") {
        this.setState(function (prevState, props) {
          return {
            currentPage: ++prevState.currentPage
          };
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(CheckoutPage, {
          click: this.onNaviClick.bind(this),
          currentPage: this.state.currentPage
        }),
        React.createElement(FirstPage, {
          click: this.onNaviClick.bind(this),
          currentPage: this.state.currentPage
        }),
        React.createElement(SecondPage, {
          click: this.onNaviClick.bind(this),
          currentPage: this.state.currentPage
        }),
        React.createElement(ThirdPage, {
          click: this.onNaviClick.bind(this),
          currentPage: this.state.currentPage
        }),
        React.createElement(ConfirmationPage, {
          firstPageState: this.state.firstPageState,
          secondPageState: this.state.secondPageState,
          thirdPageState: this.state.thirdPageState,
          currentPage: this.state.currentPage
        })
      );
    }
  }]);

  return App;
}(React.Component);

// ------------------------------------------------------------


function CheckoutPage(props) {
  function handleClick() {
    return props.click('checkout');
  }

  if (props.currentPage === 0) {
    return React.createElement(
      'div',
      { className: 'checkout', onClick: handleClick.bind(this) },
      'Checkout'
    );
  } else {
    return null;
  }
}

// -------------------------------------------------------------

var FirstPage = function (_React$Component2) {
  _inherits(FirstPage, _React$Component2);

  function FirstPage(props) {
    _classCallCheck(this, FirstPage);

    var _this2 = _possibleConstructorReturn(this, (FirstPage.__proto__ || Object.getPrototypeOf(FirstPage)).call(this, props));

    _this2.state = {
      name: "",
      email: "",
      password: ""
    };
    return _this2;
  }

  _createClass(FirstPage, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }
  }, {
    key: 'handleNavClick',
    value: function handleNavClick(event) {
      var state = this.state;
      return this.props.click(event.target.className, state, 1);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.currentPage === 1) {
        return React.createElement(
          'div',
          { className: 'holderFirstPage' },
          React.createElement(
            'div',
            { className: 'css' },
            ' Name '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'name',
              value: this.state.name,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' Email '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'email',
              value: this.state.email,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' Password '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'password',
              className: 'password',
              value: this.state.password,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'navigator' },
            React.createElement(
              'span',
              {
                className: 'previousBtn',
                onClick: this.handleNavClick.bind(this)
              },
              'Previous'
            ),
            React.createElement(
              'span',
              { className: 'nextBtn', onClick: this.handleNavClick.bind(this) },
              'Next'
            )
          ),
          React.createElement('img', { src: 'http://logo.pizza/img/cat-walk/cat-walk.png', className: 'logo' })
        );
      } else {
        return null;
      }
    }
  }]);

  return FirstPage;
}(React.Component);

// ------------------------------------------------------------


var SecondPage = function (_React$Component3) {
  _inherits(SecondPage, _React$Component3);

  function SecondPage(props) {
    _classCallCheck(this, SecondPage);

    var _this3 = _possibleConstructorReturn(this, (SecondPage.__proto__ || Object.getPrototypeOf(SecondPage)).call(this, props));

    _this3.state = {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      zipCode: "",
      phoneNumber: ""
    };
    return _this3;
  }

  _createClass(SecondPage, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }
  }, {
    key: 'handleNavClick',
    value: function handleNavClick(event) {
      var state = this.state;
      return this.props.click(event.target.className, state, 2);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.currentPage === 2) {
        return React.createElement(
          'div',
          { className: 'holderSecondPage' },
          React.createElement(
            'div',
            { className: 'css' },
            ' Address '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'addressLine1',
              value: this.state.addressLine1,
              placeholder: 'Line 1',
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'addressLine2',
              value: this.state.addressLine2,
              placeholder: 'Line 2',
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' City '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'city',
              value: this.state.city,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' State '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'state',
              value: this.state.state,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' Zip Code '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'zipCode',
              value: this.state.zipCode,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' Phone Number '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'phoneNumber',
              value: this.state.phoneNumber,
              placeholder: 'XXX XXX  XXXX',
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'navigator' },
            React.createElement(
              'span',
              {
                className: 'previousBtn',
                onClick: this.handleNavClick.bind(this)
              },
              'Previous'
            ),
            React.createElement(
              'span',
              { className: 'nextBtn', onClick: this.handleNavClick.bind(this) },
              'Next'
            )
          ),
          React.createElement('img', { src: 'http://logo.pizza/img/cat-walk/cat-walk.png', className: 'logo' })
        );
      } else {
        return null;
      }
    }
  }]);

  return SecondPage;
}(React.Component);

// -------------------------------------------------------------


var ThirdPage = function (_React$Component4) {
  _inherits(ThirdPage, _React$Component4);

  function ThirdPage(props) {
    _classCallCheck(this, ThirdPage);

    var _this4 = _possibleConstructorReturn(this, (ThirdPage.__proto__ || Object.getPrototypeOf(ThirdPage)).call(this, props));

    _this4.state = {
      creditCard: "",
      expiryDate: "",
      cvv: "",
      billingZC: ""
    };
    return _this4;
  }

  _createClass(ThirdPage, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState(_defineProperty({}, event.target.className, event.target.value));
    }
  }, {
    key: 'handleNavClick',
    value: function handleNavClick(event) {
      var state = this.state;
      return this.props.click(event.target.className, state, 3);
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.currentPage === 3) {
        return React.createElement(
          'div',
          { className: 'holderThirdPage' },
          React.createElement(
            'div',
            { className: 'css' },
            ' Credit Card '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'creditCard',
              value: this.state.creditCard,
              placeholder: 'XXXX XXXX XXXX XXXX',
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' Expiry Date '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'expiryDate',
              value: this.state.expiryDate,
              placeholder: 'XX/XX',
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' CVV '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'password',
              className: 'cvv',
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'css' },
            ' Billing Zip '
          ),
          React.createElement(
            'div',
            { className: 'form' },
            React.createElement('input', {
              type: 'input',
              className: 'billingZC',
              value: this.state.billingZC,
              onChange: this.handleChange.bind(this)
            })
          ),
          React.createElement(
            'div',
            { className: 'navigator' },
            React.createElement(
              'span',
              {
                className: 'previousBtn',
                onClick: this.handleNavClick.bind(this)
              },
              'Previous'
            ),
            React.createElement(
              'span',
              { className: 'nextBtn', onClick: this.handleNavClick.bind(this) },
              'Next'
            )
          ),
          React.createElement('img', { src: 'http://logo.pizza/img/cat-walk/cat-walk.png', className: 'logo' })
        );
      } else {
        return null;
      }
    }
  }]);

  return ThirdPage;
}(React.Component);

// -------------------------------------------------------------


function ConfirmationPage(props) {
  if (props.currentPage === 4) {
    return React.createElement(
      'div',
      { className: 'holderConfirmationPage' },
      React.createElement(
        'div',
        { className: 'cssConfMsg' },
        ' We\'ve received your order! You will receive a confirmation email shortly. '
      ),
      React.createElement(
        'div',
        { className: 'cssConf' },
        ' ',
        props.firstPageState.name,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'cssLast' },
        ' Name '
      ),
      React.createElement(
        'div',
        { className: 'cssConf' },
        ' ',
        props.firstPageState.email,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'cssLast' },
        ' Email '
      ),
      React.createElement(
        'div',
        { className: 'cssConf' },
        ' ',
        props.secondPageState.addressLine1,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'cssConf' },
        ' ',
        props.secondPageState.addressLine2,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'cssLast' },
        ' Address '
      ),
      React.createElement(
        'div',
        { className: 'cssConf' },
        ' ',
        props.secondPageState.city,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'cssLast' },
        ' City '
      ),
      React.createElement(
        'div',
        { className: 'addressInfoHolder' },
        React.createElement(
          'div',
          { className: 'addressInfo' },
          React.createElement(
            'div',
            { className: 'cssConf' },
            ' ',
            props.secondPageState.state,
            ' '
          ),
          React.createElement(
            'div',
            { className: 'cssLast' },
            ' State '
          )
        ),
        React.createElement(
          'div',
          { className: 'addressInfo' },
          React.createElement(
            'div',
            { className: 'cssConf' },
            ' ',
            props.secondPageState.zipCode,
            ' '
          ),
          React.createElement(
            'div',
            { className: 'cssLast' },
            ' Zip Code'
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'cssConf' },
        ' ',
        props.secondPageState.phoneNumber,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'cssLast' },
        ' Phone Number '
      ),
      React.createElement(
        'div',
        { className: 'cssConf' },
        ' ',
        props.thirdPageState.creditCard,
        ' '
      ),
      React.createElement(
        'div',
        { className: 'cssLast' },
        ' Credit Card Number '
      ),
      React.createElement(
        'div',
        { className: 'ccInfoHolder' },
        React.createElement(
          'div',
          { className: 'ccInfo' },
          React.createElement(
            'div',
            { className: 'cssConf' },
            ' ',
            props.thirdPageState.expiryDate,
            ' '
          ),
          React.createElement(
            'div',
            { className: 'cssLast' },
            ' Expiry Date '
          )
        ),
        React.createElement(
          'div',
          { className: 'ccInfo' },
          React.createElement(
            'div',
            { className: 'cssConf' },
            ' ',
            props.thirdPageState.cvv,
            ' '
          ),
          React.createElement(
            'div',
            { className: 'cssLast' },
            ' CVV '
          )
        ),
        React.createElement(
          'div',
          { className: 'ccInfo' },
          React.createElement(
            'div',
            { className: 'cssConf' },
            ' ',
            props.thirdPageState.billingZC,
            ' '
          ),
          React.createElement(
            'div',
            { className: 'cssLast' },
            ' Billing Zip '
          )
        )
      ),
      React.createElement('img', { src: 'http://logo.pizza/img/cat-walk/cat-walk.png', className: 'logo' })
    );
  } else {
    return null;
  }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
