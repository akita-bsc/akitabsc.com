(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[888, 179], {
    86430: function (n, e, t) {
      "use strict";
      t.r(e), t.d(e, {
        default: function () {
          return l
        }
      });
      var r = t(85893);
  
      function o(n, e, t) {
        return e in n ? Object.defineProperty(n, e, {
          value: t,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : n[e] = t, n
      }
  
      t(94299), t(98949);
      var c = t(51355), u = t(94660), i = (0, c.xC)({reducer: {common: u.ZP}}), s = t(17714), f = (t(32577), t(1818)),
        a = t.n(f);
  
      function p(n, e) {
        var t = Object.keys(n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(n);
          e && (r = r.filter((function (e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), t.push.apply(t, r)
        }
        return t
      }
  
      function b(n) {
        for (var e = 1; e < arguments.length; e++) {
          var t = null != arguments[e] ? arguments[e] : {};
          e % 2 ? p(Object(t), !0).forEach((function (e) {
            o(n, e, t[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : p(Object(t)).forEach((function (e) {
            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e))
          }))
        }
        return n
      }
  
      var l = function (n) {
        var e = n.Component, t = n.pageProps;
        return (0, r.jsxs)(s.zt, {store: i, children: [(0, r.jsx)(a(), {}), (0, r.jsx)(e, b({}, t))]})
      }
    }, 94660: function (n, e, t) {
      "use strict";
      t.d(e, {
        hv: function () {
          return o
        }, y_: function () {
          return c
        }
      });
      var r = (0, t(51355).oM)({
        name: "common", initialState: {address: null}, reducers: {
          setAccount: function (n, e) {
            n.address = e.payload
          }
        }
      }), o = r.actions.setAccount, c = function (n) {
        return n.common.address
      };
      e.ZP = r.reducer
    }, 81780: function (n, e, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function () {
        return t(86430)
      }])
    }, 32577: function () {
    }, 94299: function () {
    }, 98949: function () {
    }, 14453: function () {
    }
  }, function (n) {
    var e = function (e) {
      return n(n.s = e)
    };
    n.O(0, [774, 211, 351, 219, 433], (function () {
      return e(81780), e(72441)
    }));
    var t = n.O();
    _N_E = t
  }]);
  