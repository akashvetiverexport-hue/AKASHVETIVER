function kx(i, l) {
  for (var o = 0; o < l.length; o++) {
    const r = l[o];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const c in r)
        if (c !== "default" && !(c in i)) {
          const h = Object.getOwnPropertyDescriptor(r, c);
          h && Object.defineProperty(i, c, h.get ? h : {
            enumerable: !0,
            get: () => r[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
function Xx(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Sf = { exports: {} }, rs = {};
var Ny;
function Zx() {
  if (Ny) return rs;
  Ny = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(r, c, h) {
    var d = null;
    if (h !== void 0 && (d = "" + h), c.key !== void 0 && (d = "" + c.key), "key" in c) {
      h = {};
      for (var m in c)
        m !== "key" && (h[m] = c[m]);
    } else h = c;
    return c = h.ref, {
      $$typeof: i,
      type: r,
      key: d,
      ref: c !== void 0 ? c : null,
      props: h
    };
  }
  return rs.Fragment = l, rs.jsx = o, rs.jsxs = o, rs;
}
var _y;
function Qx() {
  return _y || (_y = 1, Sf.exports = Zx()), Sf.exports;
}
var B = Qx(), Tf = { exports: {} }, us = {}, xf = { exports: {} }, Ef = {};
var Vy;
function Kx() {
  return Vy || (Vy = 1, (function(i) {
    function l(G, X) {
      var $ = G.length;
      G.push(X);
      t: for (; 0 < $; ) {
        var tt = $ - 1 >>> 1, H = G[tt];
        if (0 < c(H, X))
          G[tt] = X, G[$] = H, $ = tt;
        else break t;
      }
    }
    function o(G) {
      return G.length === 0 ? null : G[0];
    }
    function r(G) {
      if (G.length === 0) return null;
      var X = G[0], $ = G.pop();
      if ($ !== X) {
        G[0] = $;
        t: for (var tt = 0, H = G.length, bt = H >>> 1; tt < bt; ) {
          var yt = 2 * (tt + 1) - 1, Rt = G[yt], x = yt + 1, M = G[x];
          if (0 > c(Rt, $))
            x < H && 0 > c(M, Rt) ? (G[tt] = M, G[x] = $, tt = x) : (G[tt] = Rt, G[yt] = $, tt = yt);
          else if (x < H && 0 > c(M, $))
            G[tt] = M, G[x] = $, tt = x;
          else break t;
        }
      }
      return X;
    }
    function c(G, X) {
      var $ = G.sortIndex - X.sortIndex;
      return $ !== 0 ? $ : G.id - X.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var d = Date, m = d.now();
      i.unstable_now = function() {
        return d.now() - m;
      };
    }
    var g = [], v = [], b = 1, y = null, S = 3, z = !1, D = !1, L = !1, R = !1, K = typeof setTimeout == "function" ? setTimeout : null, P = typeof clearTimeout == "function" ? clearTimeout : null, F = typeof setImmediate < "u" ? setImmediate : null;
    function U(G) {
      for (var X = o(v); X !== null; ) {
        if (X.callback === null) r(v);
        else if (X.startTime <= G)
          r(v), X.sortIndex = X.expirationTime, l(g, X);
        else break;
        X = o(v);
      }
    }
    function st(G) {
      if (L = !1, U(G), !D)
        if (o(g) !== null)
          D = !0, at || (at = !0, J());
        else {
          var X = o(v);
          X !== null && W(st, X.startTime - G);
        }
    }
    var at = !1, j = -1, _ = 5, St = -1;
    function gt() {
      return R ? !0 : !(i.unstable_now() - St < _);
    }
    function I() {
      if (R = !1, at) {
        var G = i.unstable_now();
        St = G;
        var X = !0;
        try {
          t: {
            D = !1, L && (L = !1, P(j), j = -1), z = !0;
            var $ = S;
            try {
              e: {
                for (U(G), y = o(g); y !== null && !(y.expirationTime > G && gt()); ) {
                  var tt = y.callback;
                  if (typeof tt == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var H = tt(
                      y.expirationTime <= G
                    );
                    if (G = i.unstable_now(), typeof H == "function") {
                      y.callback = H, U(G), X = !0;
                      break e;
                    }
                    y === o(g) && r(g), U(G);
                  } else r(g);
                  y = o(g);
                }
                if (y !== null) X = !0;
                else {
                  var bt = o(v);
                  bt !== null && W(
                    st,
                    bt.startTime - G
                  ), X = !1;
                }
              }
              break t;
            } finally {
              y = null, S = $, z = !1;
            }
            X = void 0;
          }
        } finally {
          X ? J() : at = !1;
        }
      }
    }
    var J;
    if (typeof F == "function")
      J = function() {
        F(I);
      };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), nt = et.port2;
      et.port1.onmessage = I, J = function() {
        nt.postMessage(null);
      };
    } else
      J = function() {
        K(I, 0);
      };
    function W(G, X) {
      j = K(function() {
        G(i.unstable_now());
      }, X);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, i.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : _ = 0 < G ? Math.floor(1e3 / G) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, i.unstable_next = function(G) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var X = 3;
          break;
        default:
          X = S;
      }
      var $ = S;
      S = X;
      try {
        return G();
      } finally {
        S = $;
      }
    }, i.unstable_requestPaint = function() {
      R = !0;
    }, i.unstable_runWithPriority = function(G, X) {
      switch (G) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          G = 3;
      }
      var $ = S;
      S = G;
      try {
        return X();
      } finally {
        S = $;
      }
    }, i.unstable_scheduleCallback = function(G, X, $) {
      var tt = i.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? tt + $ : tt) : $ = tt, G) {
        case 1:
          var H = -1;
          break;
        case 2:
          H = 250;
          break;
        case 5:
          H = 1073741823;
          break;
        case 4:
          H = 1e4;
          break;
        default:
          H = 5e3;
      }
      return H = $ + H, G = {
        id: b++,
        callback: X,
        priorityLevel: G,
        startTime: $,
        expirationTime: H,
        sortIndex: -1
      }, $ > tt ? (G.sortIndex = $, l(v, G), o(g) === null && G === o(v) && (L ? (P(j), j = -1) : L = !0, W(st, $ - tt))) : (G.sortIndex = H, l(g, G), D || z || (D = !0, at || (at = !0, J()))), G;
    }, i.unstable_shouldYield = gt, i.unstable_wrapCallback = function(G) {
      var X = S;
      return function() {
        var $ = S;
        S = X;
        try {
          return G.apply(this, arguments);
        } finally {
          S = $;
        }
      };
    };
  })(Ef)), Ef;
}
var jy;
function Px() {
  return jy || (jy = 1, xf.exports = Kx()), xf.exports;
}
var Af = { exports: {} }, Tt = {};
var Uy;
function Jx() {
  if (Uy) return Tt;
  Uy = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = /* @__PURE__ */ Symbol.for("react.view_transition"), z = Symbol.iterator;
  function D(x) {
    return x === null || typeof x != "object" ? null : (x = z && x[z] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var L = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, R = Object.assign, K = {};
  function P(x, M, k) {
    this.props = x, this.context = M, this.refs = K, this.updater = k || L;
  }
  P.prototype.isReactComponent = {}, P.prototype.setState = function(x, M) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, M, "setState");
  }, P.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function F() {
  }
  F.prototype = P.prototype;
  function U(x, M, k) {
    this.props = x, this.context = M, this.refs = K, this.updater = k || L;
  }
  var st = U.prototype = new F();
  st.constructor = U, R(st, P.prototype), st.isPureReactComponent = !0;
  var at = Array.isArray;
  function j() {
  }
  var _ = { H: null, A: null, T: null, S: null }, St = Object.prototype.hasOwnProperty;
  function gt(x, M, k) {
    var Q = k.ref;
    return {
      $$typeof: i,
      type: x,
      key: M,
      ref: Q !== void 0 ? Q : null,
      props: k
    };
  }
  function I(x, M) {
    return gt(x.type, M, x.props);
  }
  function J(x) {
    return typeof x == "object" && x !== null && x.$$typeof === i;
  }
  function et(x) {
    var M = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(k) {
      return M[k];
    });
  }
  var nt = /\/+/g;
  function W(x, M) {
    return typeof x == "object" && x !== null && x.key != null ? et("" + x.key) : M.toString(36);
  }
  function G(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(j, j) : (x.status = "pending", x.then(
          function(M) {
            x.status === "pending" && (x.status = "fulfilled", x.value = M);
          },
          function(M) {
            x.status === "pending" && (x.status = "rejected", x.reason = M);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function X(x, M, k, Q, pt) {
    var dt = typeof x;
    (dt === "undefined" || dt === "boolean") && (x = null);
    var At = !1;
    if (x === null) At = !0;
    else
      switch (dt) {
        case "bigint":
        case "string":
        case "number":
          At = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case i:
            case l:
              At = !0;
              break;
            case b:
              return At = x._init, X(
                At(x._payload),
                M,
                k,
                Q,
                pt
              );
          }
      }
    if (At)
      return pt = pt(x), At = Q === "" ? "." + W(x, 0) : Q, at(pt) ? (k = "", At != null && (k = At.replace(nt, "$&/") + "/"), X(pt, M, k, "", function(le) {
        return le;
      })) : pt != null && (J(pt) && (pt = I(
        pt,
        k + (pt.key == null || x && x.key === pt.key ? "" : ("" + pt.key).replace(
          nt,
          "$&/"
        ) + "/") + At
      )), M.push(pt)), 1;
    At = 0;
    var lt = Q === "" ? "." : Q + ":";
    if (at(x))
      for (var ht = 0; ht < x.length; ht++)
        Q = x[ht], dt = lt + W(Q, ht), At += X(
          Q,
          M,
          k,
          dt,
          pt
        );
    else if (ht = D(x), typeof ht == "function")
      for (x = ht.call(x), ht = 0; !(Q = x.next()).done; )
        Q = Q.value, dt = lt + W(Q, ht++), At += X(
          Q,
          M,
          k,
          dt,
          pt
        );
    else if (dt === "object") {
      if (typeof x.then == "function")
        return X(
          G(x),
          M,
          k,
          Q,
          pt
        );
      throw M = String(x), Error(
        "Objects are not valid as a React child (found: " + (M === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : M) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return At;
  }
  function $(x, M, k) {
    if (x == null) return x;
    var Q = [], pt = 0;
    return X(x, Q, "", "", function(dt) {
      return M.call(k, dt, pt++);
    }), Q;
  }
  function tt(x) {
    if (x._status === -1) {
      var M = x._result, k = M();
      k.then(
        function(Q) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = Q, k.status === void 0 && (k.status = "fulfilled", k.value = Q));
        },
        function(Q) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = Q, k.status === void 0 && (k.status = "rejected", k.reason = Q));
        }
      ), x._status === -1 && (x._status = 0, x._result = k);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var H = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var M = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(M)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  };
  function bt(x) {
    var M = _.T, k = {};
    k.types = M !== null ? M.types : null, _.T = k;
    try {
      var Q = x(), pt = _.S;
      pt !== null && pt(k, Q), typeof Q == "object" && Q !== null && typeof Q.then == "function" && Q.then(j, H);
    } catch (dt) {
      H(dt);
    } finally {
      M !== null && k.types !== null && (M.types = k.types), _.T = M;
    }
  }
  function yt(x) {
    var M = _.T;
    if (M !== null) {
      var k = M.types;
      k === null ? M.types = [x] : k.indexOf(x) === -1 && k.push(x);
    } else bt(yt.bind(null, x));
  }
  var Rt = {
    map: $,
    forEach: function(x, M, k) {
      $(
        x,
        function() {
          M.apply(this, arguments);
        },
        k
      );
    },
    count: function(x) {
      var M = 0;
      return $(x, function() {
        M++;
      }), M;
    },
    toArray: function(x) {
      return $(x, function(M) {
        return M;
      }) || [];
    },
    only: function(x) {
      if (!J(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return Tt.Activity = y, Tt.Children = Rt, Tt.Component = P, Tt.Fragment = o, Tt.Profiler = c, Tt.PureComponent = U, Tt.StrictMode = r, Tt.Suspense = g, Tt.ViewTransition = S, Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, Tt.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return _.H.useMemoCache(x);
    }
  }, Tt.addTransitionType = yt, Tt.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, Tt.cacheSignal = function() {
    return null;
  }, Tt.cloneElement = function(x, M, k) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var Q = R({}, x.props), pt = x.key;
    if (M != null)
      for (dt in M.key !== void 0 && (pt = "" + M.key), M)
        !St.call(M, dt) || dt === "key" || dt === "__self" || dt === "__source" || dt === "ref" && M.ref === void 0 || (Q[dt] = M[dt]);
    var dt = arguments.length - 2;
    if (dt === 1) Q.children = k;
    else if (1 < dt) {
      for (var At = Array(dt), lt = 0; lt < dt; lt++)
        At[lt] = arguments[lt + 2];
      Q.children = At;
    }
    return gt(x.type, pt, Q);
  }, Tt.createContext = function(x) {
    return x = {
      $$typeof: d,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: h,
      _context: x
    }, x;
  }, Tt.createElement = function(x, M, k) {
    var Q, pt = {}, dt = null;
    if (M != null)
      for (Q in M.key !== void 0 && (dt = "" + M.key), M)
        St.call(M, Q) && Q !== "key" && Q !== "__self" && Q !== "__source" && (pt[Q] = M[Q]);
    var At = arguments.length - 2;
    if (At === 1) pt.children = k;
    else if (1 < At) {
      for (var lt = Array(At), ht = 0; ht < At; ht++)
        lt[ht] = arguments[ht + 2];
      pt.children = lt;
    }
    if (x && x.defaultProps)
      for (Q in At = x.defaultProps, At)
        pt[Q] === void 0 && (pt[Q] = At[Q]);
    return gt(x, dt, pt);
  }, Tt.createRef = function() {
    return { current: null };
  }, Tt.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, Tt.isValidElement = J, Tt.lazy = function(x) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: x },
      _init: tt
    };
  }, Tt.memo = function(x, M) {
    return {
      $$typeof: v,
      type: x,
      compare: M === void 0 ? null : M
    };
  }, Tt.startTransition = bt, Tt.unstable_useCacheRefresh = function() {
    return _.H.useCacheRefresh();
  }, Tt.use = function(x) {
    return _.H.use(x);
  }, Tt.useActionState = function(x, M, k) {
    return _.H.useActionState(x, M, k);
  }, Tt.useCallback = function(x, M) {
    return _.H.useCallback(x, M);
  }, Tt.useContext = function(x) {
    return _.H.useContext(x);
  }, Tt.useDebugValue = function() {
  }, Tt.useDeferredValue = function(x, M) {
    return _.H.useDeferredValue(x, M);
  }, Tt.useEffect = function(x, M) {
    return _.H.useEffect(x, M);
  }, Tt.useEffectEvent = function(x) {
    return _.H.useEffectEvent(x);
  }, Tt.useId = function() {
    return _.H.useId();
  }, Tt.useImperativeHandle = function(x, M, k) {
    return _.H.useImperativeHandle(x, M, k);
  }, Tt.useInsertionEffect = function(x, M) {
    return _.H.useInsertionEffect(x, M);
  }, Tt.useLayoutEffect = function(x, M) {
    return _.H.useLayoutEffect(x, M);
  }, Tt.useMemo = function(x, M) {
    return _.H.useMemo(x, M);
  }, Tt.useOptimistic = function(x, M) {
    return _.H.useOptimistic(x, M);
  }, Tt.useReducer = function(x, M, k) {
    return _.H.useReducer(x, M, k);
  }, Tt.useRef = function(x) {
    return _.H.useRef(x);
  }, Tt.useState = function(x) {
    return _.H.useState(x);
  }, Tt.useSyncExternalStore = function(x, M, k) {
    return _.H.useSyncExternalStore(
      x,
      M,
      k
    );
  }, Tt.useTransition = function() {
    return _.H.useTransition();
  }, Tt.version = "19.3.0", Tt;
}
var By;
function Ed() {
  return By || (By = 1, Af.exports = Jx()), Af.exports;
}
var Cf = { exports: {} }, Se = {};
var Ly;
function Fx() {
  if (Ly) return Se;
  Ly = 1;
  var i = Ed();
  function l(b) {
    var y = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        y += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + b + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var r = {
    d: {
      f: o,
      r: function() {
        throw Error(l(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.recoverable"), d = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function m(b, y, S) {
    var z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: z == null ? null : z === d ? d : "" + z,
      children: b,
      containerInfo: y,
      implementation: S
    };
  }
  var g = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function v(b, y) {
    if (b === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return Se.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, Se.browser = function(b) {
    return { $$typeof: h, _reason: b };
  }, Se.createPortal = function(b, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(l(299));
    return m(b, y, null, S);
  }, Se.flushSync = function(b) {
    var y = g.T, S = r.p;
    try {
      if (g.T = null, r.p = 2, b) return b();
    } finally {
      g.T = y, r.p = S, r.d.f();
    }
  }, Se.preconnect = function(b, y) {
    typeof b == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(b, y));
  }, Se.prefetchDNS = function(b) {
    typeof b == "string" && r.d.D(b);
  }, Se.preinit = function(b, y) {
    if (typeof b == "string" && y && typeof y.as == "string") {
      var S = y.as, z = v(S, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, L = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? r.d.S(
        b,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: z,
          integrity: D,
          fetchPriority: L
        }
      ) : S === "script" && r.d.X(b, {
        crossOrigin: z,
        integrity: D,
        fetchPriority: L,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, Se.preinitModule = function(b, y) {
    if (typeof b == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var S = v(
            y.as,
            y.crossOrigin
          );
          r.d.M(b, {
            crossOrigin: S,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
          });
        }
      } else y == null && r.d.M(b);
  }, Se.preload = function(b, y) {
    if (typeof b == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var S = y.as, z = v(S, y.crossOrigin);
      r.d.L(b, S, {
        crossOrigin: z,
        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0,
        type: typeof y.type == "string" ? y.type : void 0,
        fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
        referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
        imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
        imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
        media: typeof y.media == "string" ? y.media : void 0
      });
    }
  }, Se.preloadModule = function(b, y) {
    if (typeof b == "string")
      if (y) {
        var S = v(y.as, y.crossOrigin);
        r.d.m(b, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
        });
      } else r.d.m(b);
  }, Se.requestFormReset = function(b) {
    r.d.r(b);
  }, Se.unstable_batchedUpdates = function(b, y) {
    return b(y);
  }, Se.useFormState = function(b, y, S) {
    return g.H.useFormState(b, y, S);
  }, Se.useFormStatus = function() {
    return g.H.useHostTransitionStatus();
  }, Se.version = "19.3.0", Se;
}
var Hy;
function v0() {
  if (Hy) return Cf.exports;
  Hy = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Cf.exports = Fx(), Cf.exports;
}
var Gy;
function Ix() {
  if (Gy) return us;
  Gy = 1;
  var i = Px(), l = Ed(), o = v0();
  function r(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11);
  }
  function h(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function m(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (e === null && (t = t.alternate, t !== null && (e = t.memoizedState)), e !== null) return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (h(t) !== t)
      throw Error(r(188));
  }
  function v(t) {
    var e = t.alternate;
    if (!e) {
      if (e = h(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var s = n.return;
      if (s === null) break;
      var u = s.alternate;
      if (u === null) {
        if (a = s.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (s.child === u.child) {
        for (u = s.child; u; ) {
          if (u === n) return g(s), t;
          if (u === a) return g(s), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = s, a = u;
      else {
        for (var f = !1, p = s.child; p; ) {
          if (p === n) {
            f = !0, n = s, a = u;
            break;
          }
          if (p === a) {
            f = !0, a = s, n = u;
            break;
          }
          p = p.sibling;
        }
        if (!f) {
          for (p = u.child; p; ) {
            if (p === n) {
              f = !0, n = u, a = s;
              break;
            }
            if (p === a) {
              f = !0, a = u, n = s;
              break;
            }
            p = p.sibling;
          }
          if (!f) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
    return n.stateNode.current === n ? t : e;
  }
  function b(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = b(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function y(t, e, n, a, s, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, s, u) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && y(
        t.child,
        e,
        n,
        a,
        s,
        u
      ))
        return !0;
      t = t.sibling;
    }
    return !1;
  }
  function S(t) {
    for (t = t.return; t !== null; ) {
      if (t.tag === 3 || t.tag === 5 || t.tag === 27) return t;
      t = t.return;
    }
    return null;
  }
  function z(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function D(t) {
    var e = [null, null], n = S(t);
    return n === null || L(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function L(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && L(
        t,
        e,
        n.child,
        a
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function R(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(r(559));
    }
  }
  var K = null, P = null;
  function F(t, e, n) {
    return t === n ? !0 : t === e ? (K = t, !0) : !1;
  }
  function U(t, e, n) {
    return t === n ? (P = t, !1) : t === e ? (P !== null && (K = t), !0) : !1;
  }
  function st(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function at(t, e, n) {
    for (var a = 0, s = t; s; s = n(s)) a++;
    s = 0;
    for (var u = e; u; u = n(u)) s++;
    for (; 0 < a - s; ) t = n(t), a--;
    for (; 0 < s - a; ) e = n(e), s--;
    for (; a--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var j = Object.assign, _ = /* @__PURE__ */ Symbol.for("react.element"), St = /* @__PURE__ */ Symbol.for("react.transitional.element"), gt = /* @__PURE__ */ Symbol.for("react.portal"), I = /* @__PURE__ */ Symbol.for("react.fragment"), J = /* @__PURE__ */ Symbol.for("react.strict_mode"), et = /* @__PURE__ */ Symbol.for("react.profiler"), nt = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), X = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.suspense_list"), tt = /* @__PURE__ */ Symbol.for("react.memo"), H = /* @__PURE__ */ Symbol.for("react.lazy"), bt = /* @__PURE__ */ Symbol.for("react.activity"), yt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Rt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), x = /* @__PURE__ */ Symbol.for("react.view_transition"), M = /* @__PURE__ */ Symbol.for("react.recoverable"), k = Symbol.iterator;
  function Q(t) {
    return t === null || typeof t != "object" ? null : (t = k && t[k] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var pt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function dt(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === pt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case I:
        return "Fragment";
      case et:
        return "Profiler";
      case J:
        return "StrictMode";
      case X:
        return "Suspense";
      case $:
        return "SuspenseList";
      case bt:
        return "Activity";
      case x:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case gt:
          return "Portal";
        case W:
          return t.displayName || "Context";
        case nt:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case tt:
          return e = t.displayName || null, e !== null ? e : dt(t.type) || "Memo";
        case H:
          e = t._payload, t = t._init;
          try {
            return dt(t(e));
          } catch {
          }
      }
    return null;
  }
  var At = Array.isArray, lt = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ht = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Re = [], Ae = -1;
  function Wt(t) {
    return { current: t };
  }
  function $t(t) {
    0 > Ae || (t.current = Re[Ae], Re[Ae] = null, Ae--);
  }
  function _t(t, e) {
    Ae++, Re[Ae] = t.current, t.current = e;
  }
  var Le = Wt(null), ei = Wt(null), Ce = Wt(null), Ms = Wt(null);
  function Ds(t, e) {
    switch (_t(Ce, e), _t(ei, t), _t(Le, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Yg(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Yg(e), t = qg(e, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    $t(Le), _t(Le, t);
  }
  function pa() {
    $t(Le), $t(ei), $t(Ce);
  }
  function Hr(t) {
    var e = t.memoizedState;
    e !== null && (nl._currentValue = e.memoizedState, _t(Ms, t)), e = Le.current;
    var n = qg(e, t.type);
    e !== n && (_t(ei, t), _t(Le, n));
  }
  function zs(t) {
    ei.current === t && ($t(Le), $t(ei)), Ms.current === t && ($t(Ms), nl._currentValue = le);
  }
  var Gr, rh;
  function ni(t) {
    if (Gr === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Gr = e && e[1] || "", rh = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Gr + t + rh;
  }
  var Yr = !1;
  function qr(t, e) {
    if (!t || Yr) return "";
    Yr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var q = function() {
                throw Error();
              };
              if (Object.defineProperty(q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(q, []);
                } catch (it) {
                  var A = it;
                }
                Reflect.construct(t, [], q);
              } else {
                try {
                  q.call();
                } catch (it) {
                  A = it;
                }
                q = !1;
                try {
                  var N = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), q = !0, new t();
                } finally {
                  q && (N !== void 0 ? Object.defineProperty(t.prototype, "props", N) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (it) {
                A = it;
              }
              (q = t()) && typeof q.catch == "function" && q.catch(function() {
              });
            }
          } catch (it) {
            if (it && A && typeof it.stack == "string")
              return [it.stack, A.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var s = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      s && s.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), f = u[0], p = u[1];
      if (f && p) {
        var T = f.split(`
`), w = p.split(`
`);
        for (s = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < w.length && !w[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === T.length || s === w.length)
          for (a = T.length - 1, s = w.length - 1; 1 <= a && 0 <= s && T[a] !== w[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (T[a] !== w[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || T[a] !== w[s]) {
                  var V = `
` + T[a].replace(" at new ", " at ");
                  return t.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", t.displayName)), V;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      Yr = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? ni(n) : "";
  }
  function K1(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ni(t.type);
      case 16:
        return ni("Lazy");
      case 13:
        return t.child !== e && e !== null ? ni("Suspense Fallback") : ni("Suspense");
      case 19:
        return ni("SuspenseList");
      case 0:
      case 15:
        return qr(t.type, !1);
      case 11:
        return qr(t.type.render, !1);
      case 1:
        return qr(t.type, !0);
      case 31:
        return ni("Activity");
      case 30:
        return ni("ViewTransition");
      default:
        return "";
    }
  }
  function uh(t) {
    try {
      var e = "", n = null;
      do
        e += K1(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var kr = Object.prototype.hasOwnProperty, Xr = i.unstable_scheduleCallback, Zr = i.unstable_cancelCallback, P1 = i.unstable_shouldYield, J1 = i.unstable_requestPaint, He = i.unstable_now, F1 = i.unstable_getCurrentPriorityLevel, ch = i.unstable_ImmediatePriority, fh = i.unstable_UserBlockingPriority, Os = i.unstable_NormalPriority, I1 = i.unstable_LowPriority, dh = i.unstable_IdlePriority, W1 = i.log, $1 = i.unstable_setDisableYieldValue, pl = null, Ge = null;
  function ii(t) {
    if (typeof W1 == "function" && $1(t), Ge && typeof Ge.setStrictMode == "function")
      try {
        Ge.setStrictMode(pl, t);
      } catch {
      }
  }
  var Ye = Math.clz32 ? Math.clz32 : nS, tS = Math.log, eS = Math.LN2;
  function nS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (tS(t) / eS | 0) | 0;
  }
  var Rs = 256, Ns = 262144, _s = 4194304;
  function Ui(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return t & -t;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t;
    }
  }
  function Vs(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var s = 0, u = t.suspendedLanes, f = t.pingedLanes;
    t = t.warmLanes;
    var p = a & 134217727;
    return p !== 0 ? (a = p & ~u, a !== 0 ? s = Ui(a) : (f &= p, f !== 0 ? s = Ui(f) : n || (n = p & ~t, n !== 0 && (s = Ui(n))))) : (p = a & ~u, p !== 0 ? s = Ui(p) : f !== 0 ? s = Ui(f) : n || (n = a & ~t, n !== 0 && (s = Ui(n)))), s === 0 ? 0 : e !== 0 && e !== s && (e & u) === 0 && (u = s & -s, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : s;
  }
  function gl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function hh(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - Ye(n), s = 1 << a;
        e |= t[a], n &= ~s;
      }
    return e;
  }
  function iS(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function mh() {
    var t = _s;
    return _s <<= 1, (_s & 62914560) === 0 && (_s = 4194304), t;
  }
  function Qr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function yl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function aS(t, e, n, a, s, u) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var p = t.entanglements, T = t.expirationTimes, w = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var V = 31 - Ye(n), q = 1 << V;
      p[V] = 0, T[V] = -1;
      var A = w[V];
      if (A !== null)
        for (w[V] = null, V = 0; V < A.length; V++) {
          var N = A[V];
          N !== null && (N.lane &= -536870913);
        }
      n &= ~q;
    }
    a !== 0 && ph(t, a, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e));
  }
  function ph(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Ye(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function gh(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Ye(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function yh(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Kr(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Kr(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Pr(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function vh() {
    var t = ht.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Cy(t.type));
  }
  function bh(t, e) {
    var n = ht.p;
    try {
      return ht.p = t, e();
    } finally {
      ht.p = n;
    }
  }
  var Un = Math.random().toString(36).slice(2), me = "__reactFiber$" + Un, Ne = "__reactProps$" + Un, ga = "__reactContainer$" + Un, Sh = "__reactEvents$" + Un, lS = "__reactListeners$" + Un, sS = "__reactHandles$" + Un, Th = "__reactResources$" + Un, vl = "__reactMarker$" + Un, js = "__reactLoad$" + Un;
  function Us(t) {
    delete t[me], delete t[Ne], delete t[lS], delete t[sS];
  }
  function Bi(t) {
    var e;
    if (e = t[me]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[ga] || n[me]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = ly(t); t !== null; ) {
            if (n = t[me]) return n;
            t = ly(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function ya(t) {
    if (t = t[me] || t[ga]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function bl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function va(t) {
    var e = t[Th];
    return e || (e = t[Th] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ce(t) {
    t[vl] = !0;
  }
  function xh(t) {
    t[js] = void 0;
  }
  var Eh = /* @__PURE__ */ new Set(), Ah = {};
  function Li(t, e) {
    ba(t, e), ba(t + "Capture", e);
  }
  function ba(t, e) {
    for (Ah[t] = e, t = 0; t < e.length; t++)
      Eh.add(e[t]);
  }
  var oS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Ch = {}, wh = {};
  function rS(t) {
    return kr.call(wh, t) ? !0 : kr.call(Ch, t) ? !1 : oS.test(t) ? wh[t] = !0 : (Ch[t] = !0, !1);
  }
  var Vt = !1;
  function Mh() {
    var t = Vt;
    return Vt = !1, t;
  }
  function Bs(t, e, n) {
    if (rS(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var a = e.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, n);
      }
  }
  function Ls(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, n);
    }
  }
  function Bn(t, e, n, a) {
    if (a === null) t.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, a);
    }
  }
  function qe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Dh(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function uS(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var s = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return s.call(this);
        },
        set: function(f) {
          n = "" + f, u.call(this, f);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(f) {
          n = "" + f;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function Jr(t) {
    if (!t._valueTracker) {
      var e = Dh(t) ? "checked" : "value";
      t._valueTracker = uS(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function zh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = Dh(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var cS = /[\n"\\]/g;
  function $e(t) {
    return t.replace(
      cS,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fr(t, e, n, a, s, u, f, p) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + qe(e)) : t.value !== "" + qe(e) && (t.value = "" + qe(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? Ir(t, qe(t.value)) : Ir(t, qe(e)) : n != null ? Ir(t, qe(n)) : a != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + qe(p) : t.removeAttribute("name");
  }
  function Oh(t, e, n, a, s, u, f, p) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Jr(t);
        return;
      }
      n = n != null ? "" + qe(n) : "", e = e != null ? "" + qe(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = p ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Jr(t);
  }
  function Ir(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Sa(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var s = 0; s < n.length; s++)
        e["$" + n[s]] = !0;
      for (n = 0; n < t.length; n++)
        s = e.hasOwnProperty("$" + t[n].value), t[n].selected !== s && (t[n].selected = s), s && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + qe(n), e = null, s = 0; s < t.length; s++) {
        if (t[s].value === n) {
          t[s].selected = !0, a && (t[s].defaultSelected = !0);
          return;
        }
        e !== null || t[s].disabled || (e = t[s]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Rh(t, e, n) {
    if (e != null && (e = "" + qe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + qe(n) : "";
  }
  function Nh(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (At(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = qe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Jr(t);
  }
  function Ta(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var fS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function _h(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || fS.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Vh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Vt = !0);
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && (_h(t, s, a), Vt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && _h(t, u, e[u]);
  }
  function Wr(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var dS = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), hS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hs(t) {
    return hS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Tn() {
  }
  var $r = null;
  function tu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var xa = null, Ea = null;
  function jh(t) {
    var e = ya(t);
    if (e && (t = e.stateNode)) {
      var n = t[Ne] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Fr(
            t,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), e = n.name, n.type === "radio" && e != null) {
            for (n = t; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + $e(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var s = a[Ne] || null;
                if (!s) throw Error(r(90));
                Fr(
                  a,
                  s.value,
                  s.defaultValue,
                  s.defaultValue,
                  s.checked,
                  s.defaultChecked,
                  s.type,
                  s.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && zh(a);
          }
          break t;
        case "textarea":
          Rh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Sa(t, !!n.multiple, e, !1);
      }
    }
  }
  var eu = !1;
  function Uh(t, e, n) {
    if (eu) return t(e, n);
    eu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (eu = !1, (xa !== null || Ea !== null) && (Go(), xa && (e = xa, t = Ea, Ea = xa = null, jh(e), t)))
        for (e = 0; e < t.length; e++) jh(t[e]);
    }
  }
  function Sl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Ne] || null;
    if (a === null) return null;
    n = a[e];
    t: switch (e) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (t = t.type, a = !(t === "button" || t === "input" || t === "select" || t === "textarea")), t = !a;
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function")
      throw Error(
        r(231, e, typeof n)
      );
    return n;
  }
  var Ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nu = !1;
  if (Ln)
    try {
      var Tl = {};
      Object.defineProperty(Tl, "passive", {
        get: function() {
          nu = !0;
        }
      }), window.addEventListener("test", Tl, Tl), window.removeEventListener("test", Tl, Tl);
    } catch {
      nu = !1;
    }
  var ai = null, iu = null, Gs = null;
  function Bh() {
    if (Gs) return Gs;
    var t, e = iu, n = e.length, a, s = "value" in ai ? ai.value : ai.textContent, u = s.length;
    for (t = 0; t < n && e[t] === s[t]; t++) ;
    var f = n - t;
    for (a = 1; a <= f && e[n - a] === s[u - a]; a++) ;
    return Gs = s.slice(t, 1 < a ? 1 - a : void 0);
  }
  function Ys(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function qs() {
    return !0;
  }
  function Lh() {
    return !1;
  }
  function we(t) {
    function e(n, a, s, u, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var p in t)
        t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(u) : u[p]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? qs : Lh, this.isPropagationStopped = Lh, this;
    }
    return j(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = qs);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = qs);
      },
      persist: function() {
      },
      isPersistent: qs
    }), e;
  }
  var li = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, ks = we(li), xl = j({}, li, { view: 0, detail: 0 }), mS = we(xl), au, lu, El, Xs = j({}, xl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ou,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== El && (El && t.type === "mousemove" ? (au = t.screenX - El.screenX, lu = t.screenY - El.screenY) : lu = au = 0, El = t), au);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : lu;
    }
  }), Hh = we(Xs), pS = j({}, Xs, { dataTransfer: 0 }), gS = we(pS), yS = j({}, xl, { relatedTarget: 0 }), su = we(yS), vS = j({}, li, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), bS = we(vS), SS = j({}, li, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), TS = we(SS), xS = j({}, li, { data: 0 }), Gh = we(xS), ES = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, AS = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, CS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function wS(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = CS[t]) ? !!e[t] : !1;
  }
  function ou() {
    return wS;
  }
  var MS = j({}, xl, {
    key: function(t) {
      if (t.key) {
        var e = ES[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ys(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? AS[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ou,
    charCode: function(t) {
      return t.type === "keypress" ? Ys(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ys(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), DS = we(MS), zS = j({}, Xs, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Yh = we(zS), OS = j({}, li, { submitter: 0 }), RS = we(OS), NS = j({}, xl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ou
  }), _S = we(NS), VS = j({}, li, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jS = we(VS), US = j({}, Xs, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), BS = we(US), LS = j({}, li, {
    newState: 0,
    oldState: 0,
    source: 0
  }), HS = we(LS), GS = [9, 13, 27, 32], ru = Ln && "CompositionEvent" in window, Al = null;
  Ln && "documentMode" in document && (Al = document.documentMode);
  var YS = Ln && "TextEvent" in window && !Al, qh = Ln && (!ru || Al && 8 < Al && 11 >= Al), kh = " ", Xh = !1;
  function Zh(t, e) {
    switch (t) {
      case "keyup":
        return GS.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Qh(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Aa = !1;
  function qS(t, e) {
    switch (t) {
      case "compositionend":
        return Qh(e);
      case "keypress":
        return e.which !== 32 ? null : (Xh = !0, kh);
      case "textInput":
        return t = e.data, t === kh && Xh ? null : t;
      default:
        return null;
    }
  }
  function kS(t, e) {
    if (Aa)
      return t === "compositionend" || !ru && Zh(t, e) ? (t = Bh(), Gs = iu = ai = null, Aa = !1, t) : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || e.ctrlKey && e.altKey) {
          if (e.char && 1 < e.char.length)
            return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return qh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var XS = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Kh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!XS[t.type] : e === "textarea";
  }
  function Ph(t, e, n, a) {
    xa ? Ea ? Ea.push(a) : Ea = [a] : xa = a, e = Qo(e, "onChange"), 0 < e.length && (n = new ks(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Cl = null, wl = null;
  function ZS(t) {
    jg(t, 0);
  }
  function Zs(t) {
    var e = bl(t);
    if (zh(e)) return t;
  }
  function Jh(t, e) {
    if (t === "change") return e;
  }
  var Fh = !1;
  if (Ln) {
    var uu;
    if (Ln) {
      var cu = "oninput" in document;
      if (!cu) {
        var Ih = document.createElement("div");
        Ih.setAttribute("oninput", "return;"), cu = typeof Ih.oninput == "function";
      }
      uu = cu;
    } else uu = !1;
    Fh = uu && (!document.documentMode || 9 < document.documentMode);
  }
  function Wh() {
    Cl && (Cl.detachEvent("onpropertychange", $h), wl = Cl = null);
  }
  function $h(t) {
    if (t.propertyName === "value" && Zs(wl)) {
      var e = [];
      Ph(
        e,
        wl,
        t,
        tu(t)
      ), Uh(ZS, e);
    }
  }
  function QS(t, e, n) {
    t === "focusin" ? (Wh(), Cl = e, wl = n, Cl.attachEvent("onpropertychange", $h)) : t === "focusout" && Wh();
  }
  function KS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Zs(wl);
  }
  function PS(t, e) {
    if (t === "click") return Zs(e);
  }
  function JS(t, e) {
    if (t === "input" || t === "change")
      return Zs(e);
  }
  function FS(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var ke = typeof Object.is == "function" ? Object.is : FS;
  function Ml(t, e) {
    if (ke(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!kr.call(e, s) || !ke(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function fu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function tm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function em(t, e) {
    var n = tm(t);
    t = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = t + n.textContent.length, t <= e && a >= e)
          return { node: n, offset: e - t };
        t = a;
      }
      t: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = tm(n);
    }
  }
  function nm(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? nm(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function im(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = fu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = fu(t.document);
    }
    return e;
  }
  function du(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var IS = Ln && "documentMode" in document && 11 >= document.documentMode, Ca = null, hu = null, Dl = null, mu = !1;
  function am(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    mu || Ca == null || Ca !== fu(a) || (a = Ca, "selectionStart" in a && du(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Dl && Ml(Dl, a) || (Dl = a, a = Qo(hu, "onSelect"), 0 < a.length && (e = new ks(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Ca)));
  }
  function Hi(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var wa = {
    animationend: Hi("Animation", "AnimationEnd"),
    animationiteration: Hi("Animation", "AnimationIteration"),
    animationstart: Hi("Animation", "AnimationStart"),
    transitionrun: Hi("Transition", "TransitionRun"),
    transitionstart: Hi("Transition", "TransitionStart"),
    transitioncancel: Hi("Transition", "TransitionCancel"),
    transitionend: Hi("Transition", "TransitionEnd")
  }, pu = {}, lm = {};
  Ln && (lm = document.createElement("div").style, "AnimationEvent" in window || (delete wa.animationend.animation, delete wa.animationiteration.animation, delete wa.animationstart.animation), "TransitionEvent" in window || delete wa.transitionend.transition);
  function Gi(t) {
    if (pu[t]) return pu[t];
    if (!wa[t]) return t;
    var e = wa[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in lm)
        return pu[t] = e[n];
    return t;
  }
  var sm = Gi("animationend"), om = Gi("animationiteration"), rm = Gi("animationstart"), WS = Gi("transitionrun"), $S = Gi("transitionstart"), tT = Gi("transitioncancel"), um = Gi("transitionend"), cm = /* @__PURE__ */ new Map(), gu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gu.push("scrollEnd");
  function cn(t, e) {
    cm.set(t, e), Li(e, [t]);
  }
  var eT = 0;
  function Hn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = mn.identifierPrefix;
    var n = eT++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function fm(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = Qa;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = t[n[a]];
        if (s != null) {
          if (s === "none") return "none";
          e = e == null ? s : e + (" " + s);
        }
      }
    return e ?? t.default;
  }
  function Gn(t, e) {
    return t = fm(t), e = fm(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var Qs = typeof reportError == "function" ? reportError : function(t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var e = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(e)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return;
    }
    console.error(t);
  }, tn = [], Ma = 0, yu = 0;
  function Ks() {
    for (var t = Ma, e = yu = Ma = 0; e < t; ) {
      var n = tn[e];
      tn[e++] = null;
      var a = tn[e];
      tn[e++] = null;
      var s = tn[e];
      tn[e++] = null;
      var u = tn[e];
      if (tn[e++] = null, a !== null && s !== null) {
        var f = a.pending;
        f === null ? s.next = s : (s.next = f.next, f.next = s), a.pending = s;
      }
      u !== 0 && dm(n, s, u);
    }
  }
  function Ps(t, e, n, a) {
    tn[Ma++] = t, tn[Ma++] = e, tn[Ma++] = n, tn[Ma++] = a, yu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function vu(t, e, n, a) {
    return Ps(t, e, n, a), Js(t);
  }
  function Yi(t, e) {
    return Ps(t, null, null, e), Js(t);
  }
  function dm(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var s = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (s = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, s && e !== null && (s = 31 - Ye(n), t = u.hiddenUpdates, a = t[s], a === null ? t[s] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function Js(t) {
    if (50 < Fl)
      throw Fl = 0, Ho = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Da = {};
  function nT(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _e(t, e, n, a) {
    return new nT(t, e, n, a);
  }
  function bu(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Yn(t, e) {
    var n = t.alternate;
    return n === null ? (n = _e(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function hm(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Fs(t, e, n, a, s, u) {
    var f = 0;
    if (a = t, typeof a == "function") bu(a) && (f = 1);
    else if (typeof a == "string")
      f = Ox(
        t,
        n,
        Le.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case bt:
          return t = _e(31, n, e, s), t.elementType = bt, t.lanes = u, t;
        case I:
          return qi(n.children, s, u, e);
        case J:
          f = 8, s |= 24;
          break;
        case et:
          return t = _e(12, n, e, s | 2), t.elementType = et, t.lanes = u, t;
        case X:
          return t = _e(13, n, e, s), t.elementType = X, t.lanes = u, t;
        case $:
          return t = _e(19, n, e, s), t.elementType = $, t.lanes = u, t;
        case yt:
        case x:
          return t = s | 32, t = _e(30, n, e, t), t.elementType = x, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case W:
                f = 10;
                break t;
              case nt:
                f = 9;
                break t;
              case G:
                f = 11;
                break t;
              case tt:
                f = 14;
                break t;
              case H:
                f = 16, a = null;
                break t;
            }
          f = 29, n = Error(
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = _e(f, n, e, s), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function qi(t, e, n, a) {
    return t = _e(7, t, a, e), t.lanes = n, t;
  }
  function Su(t, e, n) {
    return t = _e(6, t, null, e), t.lanes = n, t;
  }
  function mm(t) {
    var e = _e(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Tu(t, e, n) {
    return e = _e(
      4,
      t.children !== null ? t.children : [],
      t.key,
      e
    ), e.lanes = n, e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation
    }, e;
  }
  var pm = /* @__PURE__ */ new WeakMap();
  function en(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = pm.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: uh(e)
      }, pm.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: uh(e)
    };
  }
  var za = [], Oa = 0, Is = null, zl = 0, nn = [], an = 0, si = null, xn = 1, En = "";
  function qn(t, e) {
    za[Oa++] = zl, za[Oa++] = Is, Is = t, zl = e;
  }
  function gm(t, e, n) {
    nn[an++] = xn, nn[an++] = En, nn[an++] = si, si = t;
    var a = xn;
    t = En;
    var s = 32 - Ye(a) - 1;
    a &= ~(1 << s), n += 1;
    var u = 32 - Ye(e) + s;
    if (30 < u) {
      var f = s - s % 5;
      u = (a & (1 << f) - 1).toString(32), a >>= f, s -= f, xn = 1 << 32 - Ye(e) + s | n << s | a, En = u + t;
    } else
      xn = 1 << u | n << s | a, En = t;
  }
  function Ws(t) {
    t.return !== null && (qn(t, 1), gm(t, 1, 0));
  }
  function xu(t) {
    for (; t === Is; )
      Is = za[--Oa], za[Oa] = null, zl = za[--Oa], za[Oa] = null;
    for (; t === si; )
      si = nn[--an], nn[an] = null, En = nn[--an], nn[an] = null, xn = nn[--an], nn[an] = null;
  }
  function ym(t, e) {
    nn[an++] = xn, nn[an++] = En, nn[an++] = si, xn = e.id, En = e.overflow, si = t;
  }
  var fe = null, Xt = null, Ct = !1, oi = null, ln = !1, Eu = Error(r(519));
  function ri(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ol(en(e, t)), Eu;
  }
  function vm(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[me] = t, e[Ne] = a, n) {
      case "dialog":
        Dt("cancel", e), Dt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Dt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Wl.length; n++)
          Dt(Wl[n], e);
        break;
      case "source":
        Dt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Dt("error", e), Dt("load", e);
        break;
      case "details":
        Dt("toggle", e);
        break;
      case "input":
        Dt("invalid", e), Oh(
          e,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Dt("invalid", e);
        break;
      case "textarea":
        Dt("invalid", e), Nh(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Hg(e.textContent, n) ? (a.popover != null && (Dt("beforetoggle", e), Dt("toggle", e)), a.onScroll != null && Dt("scroll", e), a.onScrollEnd != null && Dt("scrollend", e), a.onClick != null && (e.onclick = Tn), e = !0) : e = !1, e || ri(t, !0);
  }
  function $s(t) {
    for (fe = t.return; fe; )
      switch (fe.tag) {
        case 5:
        case 31:
        case 13:
          ln = !1;
          return;
        case 27:
        case 3:
          ln = !0;
          return;
        default:
          fe = fe.return;
      }
  }
  function Ra(t) {
    if (t !== fe) return !1;
    if (!Ct) return $s(t), Ct = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || $c(t.type, t.memoizedProps)), n = !n), n && Xt && ri(t), $s(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Xt = ay(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Xt = ay(t);
    } else
      e === 27 ? (e = Xt, Ai(t.type) ? (t = uf, uf = null, Xt = t) : Xt = e) : Xt = fe ? on(t.stateNode.nextSibling) : null;
    return !0;
  }
  function ki() {
    Xt = fe = null, Ct = !1;
  }
  function Au() {
    var t = oi;
    return t !== null && (Ue === null ? Ue = t : Ue.push.apply(
      Ue,
      t
    ), oi = null), t;
  }
  function Ol(t) {
    oi === null ? oi = [t] : oi.push(t);
  }
  var Cu = Wt(null), Xi = null, kn = null;
  function ui(t, e, n) {
    _t(Cu, e._currentValue), e._currentValue = n;
  }
  function Xn(t) {
    t._currentValue = Cu.current, $t(Cu);
  }
  function to(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function wu(t, e, n, a) {
    var s = t.child;
    for (s !== null && (s.return = t); s !== null; ) {
      var u = s.dependencies;
      if (u !== null) {
        var f = s.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var p = u;
          u = s;
          for (var T = 0; T < e.length; T++)
            if (p.context === e[T]) {
              u.lanes |= n, p = u.alternate, p !== null && (p.lanes |= n), to(
                u.return,
                n,
                t
              ), a || (f = null);
              break t;
            }
          u = p.next;
        }
      } else if (s.tag === 18) {
        if (f = s.return, f === null) throw Error(r(341));
        f.lanes |= n, u = f.alternate, u !== null && (u.lanes |= n), to(f, n, t), f = null;
      } else
        s.tag === 13 && s.memoizedState !== null && s.memoizedState.dehydrated === null ? (s.lanes |= n, f = s.alternate, f !== null && (f.lanes |= n), to(
          s.return,
          n,
          t
        ), f = s.child, f = f !== null ? f.sibling : null) : f = s.child;
      if (f !== null) f.return = s;
      else
        for (f = s; f !== null; ) {
          if (f === t) {
            f = null;
            break;
          }
          if (s = f.sibling, s !== null) {
            s.return = f.return, f = s;
            break;
          }
          f = f.return;
        }
      s = f;
    }
  }
  function Zi(t, e, n, a) {
    t = null;
    for (var s = e, u = !1; s !== null; ) {
      if (!u) {
        if ((s.flags & 524288) !== 0) u = !0;
        else if ((s.flags & 262144) !== 0) break;
      }
      if (s.tag === 10) {
        var f = s.alternate;
        if (f === null) throw Error(r(387));
        if (f = f.memoizedProps, f !== null) {
          var p = s.type;
          ke(s.pendingProps.value, f.value) || (t !== null ? t.push(p) : t = [p]);
        }
      } else if (s === Ms.current) {
        if (f = s.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(nl) : t = [nl]);
      }
      s = s.return;
    }
    return t !== null && wu(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function eo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ke(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Qi(t) {
    Xi = t, kn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function pe(t) {
    return bm(Xi, t);
  }
  function no(t, e) {
    return Xi === null && Qi(t), bm(t, e);
  }
  function bm(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, kn === null) {
      if (t === null) throw Error(r(308));
      kn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else kn = kn.next = e;
    return n;
  }
  var iT = typeof AbortController < "u" ? AbortController : function() {
    var t = [], e = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        t.push(a);
      }
    };
    this.abort = function() {
      e.aborted = !0, t.forEach(function(n) {
        return n();
      });
    };
  }, aT = i.unstable_scheduleCallback, lT = i.unstable_NormalPriority, te = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mu() {
    return {
      controller: new iT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Rl(t) {
    t.refCount--, t.refCount === 0 && aT(lT, function() {
      t.controller.abort();
    });
  }
  function Sm(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var Nl = null;
  function sT(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var _l = null, Du = 0, Ki = 0, Na = null;
  function oT(t, e) {
    if (_l === null) {
      var n = _l = [];
      Du = 0, Ki = Xc(), Na = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Du++, e.then(Tm, Tm), e;
  }
  function Tm() {
    if (--Du === 0 && (Nl = null, _l !== null)) {
      Na !== null && (Na.status = "fulfilled");
      var t = _l;
      _l = null, Ki = 0, Na = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function rT(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(s) {
        n.push(s);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var s = 0; s < n.length; s++) (0, n[s])(e);
      },
      function(s) {
        for (a.status = "rejected", a.reason = s, s = 0; s < n.length; s++)
          (0, n[s])(void 0);
      }
    ), a;
  }
  var xm = lt.S;
  lt.S = function(t, e) {
    if (mg = He(), typeof e == "object" && e !== null && typeof e.then == "function" && oT(t, e), Nl !== null)
      for (var n = Fa; n !== null; )
        Sm(n, Nl), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = Fa; a !== null; )
        Sm(a, n), a = a.next;
      if (Ki !== 0) {
        a = Nl, a === null && (a = Nl = []);
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    xm !== null && xm(t, e);
  };
  var Pi = Wt(null);
  function zu() {
    var t = Pi.current;
    return t !== null ? t : kt.pooledCache;
  }
  function io(t, e) {
    e === null ? _t(Pi, Pi.current) : _t(Pi, e.pool);
  }
  function Em() {
    var t = zu();
    return t === null ? null : { parent: te._currentValue, pool: t };
  }
  var _a = Error(r(460)), Ou = Error(r(474)), ao = Error(r(542)), lo = { then: function() {
  } };
  function Am(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Cm(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Tn, Tn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Mm(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Tn, Tn);
        else {
          if (t = kt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "fulfilled", s.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var s = e;
                s.status = "rejected", s.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, Mm(t), t;
        }
        throw Fi = e, _a;
    }
  }
  function Ji(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Fi = n, _a) : n;
    }
  }
  var Fi = null;
  function wm() {
    if (Fi === null) throw Error(r(459));
    var t = Fi;
    return Fi = null, t;
  }
  function Mm(t) {
    if (t === _a || t === ao)
      throw Error(r(483));
  }
  var Va = null, Vl = 0;
  function so(t) {
    var e = Vl;
    return Vl += 1, Va === null && (Va = []), Cm(Va, t, e);
  }
  function ci(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function oo(t, e) {
    throw e.$$typeof === _ ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function Dm(t) {
    function e(C, E) {
      if (t) {
        var O = C.deletions;
        O === null ? (C.deletions = [E], C.flags |= 16) : O.push(E);
      }
    }
    function n(C, E) {
      if (!t) return null;
      for (; E !== null; )
        e(C, E), E = E.sibling;
      return null;
    }
    function a(C) {
      for (var E = /* @__PURE__ */ new Map(); C !== null; )
        C.key === null ? E.set(C.index, C) : E.set(C.key, C), C = C.sibling;
      return E;
    }
    function s(C, E) {
      return C = Yn(C, E), C.index = 0, C.sibling = null, C;
    }
    function u(C, E, O) {
      return C.index = O, t ? (O = C.alternate, O !== null ? (O = O.index, O < E ? (C.flags |= 2, E) : O) : (C.flags |= 134217730, E)) : (C.flags |= 1048576, E);
    }
    function f(C) {
      return t && C.alternate === null && (C.flags |= 134217730), C;
    }
    function p(C, E, O, Y) {
      return E === null || E.tag !== 6 ? (E = Su(O, C.mode, Y), E.return = C, E) : (E = s(E, O), E.return = C, E);
    }
    function T(C, E, O, Y) {
      var ot = O.type;
      return ot === I ? (C = V(
        C,
        E,
        O.props.children,
        Y,
        O.key
      ), ci(C, O), C) : E !== null && (E.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === H && Ji(ot) === E.type) ? (E = s(E, O.props), ci(E, O), E.return = C, E) : (E = Fs(
        O.type,
        O.key,
        O.props,
        null,
        C.mode,
        Y
      ), ci(E, O), E.return = C, E);
    }
    function w(C, E, O, Y) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== O.containerInfo || E.stateNode.implementation !== O.implementation ? (E = Tu(O, C.mode, Y), E.return = C, E) : (E = s(E, O.children || []), E.return = C, E);
    }
    function V(C, E, O, Y, ot) {
      return E === null || E.tag !== 7 ? (E = qi(
        O,
        C.mode,
        Y,
        ot
      ), E.return = C, E) : (E = s(E, O), E.return = C, E);
    }
    function q(C, E, O) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = Su(
          "" + E,
          C.mode,
          O
        ), E.return = C, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case St:
            return O = Fs(
              E.type,
              E.key,
              E.props,
              null,
              C.mode,
              O
            ), ci(O, E), O.return = C, O;
          case gt:
            return E = Tu(
              E,
              C.mode,
              O
            ), E.return = C, E;
          case H:
            return E = Ji(E), q(C, E, O);
        }
        if (At(E) || Q(E))
          return E = qi(
            E,
            C.mode,
            O,
            null
          ), E.return = C, E;
        if (typeof E.then == "function")
          return q(C, so(E), O);
        if (E.$$typeof === W)
          return q(
            C,
            no(C, E),
            O
          );
        oo(C, E);
      }
      return null;
    }
    function A(C, E, O, Y) {
      var ot = E !== null ? E.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return ot !== null ? null : p(C, E, "" + O, Y);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case St:
            return O.key === ot ? T(C, E, O, Y) : null;
          case gt:
            return O.key === ot ? w(C, E, O, Y) : null;
          case H:
            return O = Ji(O), A(C, E, O, Y);
        }
        if (At(O) || Q(O))
          return ot !== null ? null : V(C, E, O, Y, null);
        if (typeof O.then == "function")
          return A(
            C,
            E,
            so(O),
            Y
          );
        if (O.$$typeof === W)
          return A(
            C,
            E,
            no(C, O),
            Y
          );
        oo(C, O);
      }
      return null;
    }
    function N(C, E, O, Y, ot) {
      if (typeof Y == "string" && Y !== "" || typeof Y == "number" || typeof Y == "bigint")
        return C = C.get(O) || null, p(E, C, "" + Y, ot);
      if (typeof Y == "object" && Y !== null) {
        switch (Y.$$typeof) {
          case St:
            return C = C.get(
              Y.key === null ? O : Y.key
            ) || null, T(E, C, Y, ot);
          case gt:
            return C = C.get(
              Y.key === null ? O : Y.key
            ) || null, w(E, C, Y, ot);
          case H:
            return Y = Ji(Y), N(
              C,
              E,
              O,
              Y,
              ot
            );
        }
        if (At(Y) || Q(Y))
          return C = C.get(O) || null, V(E, C, Y, ot, null);
        if (typeof Y.then == "function")
          return N(
            C,
            E,
            O,
            so(Y),
            ot
          );
        if (Y.$$typeof === W)
          return N(
            C,
            E,
            O,
            no(E, Y),
            ot
          );
        oo(E, Y);
      }
      return null;
    }
    function it(C, E, O, Y) {
      for (var ot = null, Ot = null, mt = E, vt = E = 0, ie = null; mt !== null && vt < O.length; vt++) {
        mt.index > vt ? (ie = mt, mt = null) : ie = mt.sibling;
        var Nt = A(
          C,
          mt,
          O[vt],
          Y
        );
        if (Nt === null) {
          mt === null && (mt = ie);
          break;
        }
        t && mt && Nt.alternate === null && e(C, mt), E = u(Nt, E, vt), Ot === null ? ot = Nt : Ot.sibling = Nt, Ot = Nt, mt = ie;
      }
      if (vt === O.length)
        return n(C, mt), Ct && qn(C, vt), ot;
      if (mt === null) {
        for (; vt < O.length; vt++)
          mt = q(C, O[vt], Y), mt !== null && (E = u(
            mt,
            E,
            vt
          ), Ot === null ? ot = mt : Ot.sibling = mt, Ot = mt);
        return Ct && qn(C, vt), ot;
      }
      for (mt = a(mt); vt < O.length; vt++)
        ie = N(
          mt,
          C,
          vt,
          O[vt],
          Y
        ), ie !== null && (t && (Nt = ie.alternate, Nt !== null && mt.delete(Nt.key === null ? vt : Nt.key)), E = u(
          ie,
          E,
          vt
        ), Ot === null ? ot = ie : Ot.sibling = ie, Ot = ie);
      return t && mt.forEach(function(zi) {
        return e(C, zi);
      }), Ct && qn(C, vt), ot;
    }
    function ct(C, E, O, Y) {
      if (O == null) throw Error(r(151));
      for (var ot = null, Ot = null, mt = E, vt = E = 0, ie = null, Nt = O.next(); mt !== null && !Nt.done; vt++, Nt = O.next()) {
        mt.index > vt ? (ie = mt, mt = null) : ie = mt.sibling;
        var zi = A(C, mt, Nt.value, Y);
        if (zi === null) {
          mt === null && (mt = ie);
          break;
        }
        t && mt && zi.alternate === null && e(C, mt), E = u(zi, E, vt), Ot === null ? ot = zi : Ot.sibling = zi, Ot = zi, mt = ie;
      }
      if (Nt.done)
        return n(C, mt), Ct && qn(C, vt), ot;
      if (mt === null) {
        for (; !Nt.done; vt++, Nt = O.next())
          Nt = q(C, Nt.value, Y), Nt !== null && (E = u(Nt, E, vt), Ot === null ? ot = Nt : Ot.sibling = Nt, Ot = Nt);
        return Ct && qn(C, vt), ot;
      }
      for (mt = a(mt); !Nt.done; vt++, Nt = O.next())
        Nt = N(mt, C, vt, Nt.value, Y), Nt !== null && (t && (ie = Nt.alternate, ie !== null && mt.delete(
          ie.key === null ? vt : ie.key
        )), E = u(Nt, E, vt), Ot === null ? ot = Nt : Ot.sibling = Nt, Ot = Nt);
      return t && mt.forEach(function(qx) {
        return e(C, qx);
      }), Ct && qn(C, vt), ot;
    }
    function Et(C, E, O, Y) {
      if (typeof O == "object" && O !== null && O.type === I && O.key === null && O.props.ref === void 0 && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case St:
            t: {
              for (var ot = O.key; E !== null; ) {
                if (E.key === ot) {
                  if (ot = O.type, ot === I) {
                    if (E.tag === 7) {
                      n(
                        C,
                        E.sibling
                      ), Y = s(
                        E,
                        O.props.children
                      ), ci(Y, O), Y.return = C, C = Y;
                      break t;
                    }
                  } else if (E.elementType === ot || typeof ot == "object" && ot !== null && ot.$$typeof === H && Ji(ot) === E.type) {
                    n(
                      C,
                      E.sibling
                    ), Y = s(E, O.props), ci(Y, O), Y.return = C, C = Y;
                    break t;
                  }
                  n(C, E);
                  break;
                } else e(C, E);
                E = E.sibling;
              }
              O.type === I ? (Y = qi(
                O.props.children,
                C.mode,
                Y,
                O.key
              ), ci(Y, O), Y.return = C, C = Y) : (Y = Fs(
                O.type,
                O.key,
                O.props,
                null,
                C.mode,
                Y
              ), ci(Y, O), Y.return = C, C = Y);
            }
            return f(C);
          case gt:
            t: {
              for (ot = O.key; E !== null; ) {
                if (E.key === ot)
                  if (E.tag === 4 && E.stateNode.containerInfo === O.containerInfo && E.stateNode.implementation === O.implementation) {
                    n(
                      C,
                      E.sibling
                    ), Y = s(E, O.children || []), Y.return = C, C = Y;
                    break t;
                  } else {
                    n(C, E);
                    break;
                  }
                else e(C, E);
                E = E.sibling;
              }
              Y = Tu(O, C.mode, Y), Y.return = C, C = Y;
            }
            return f(C);
          case H:
            return O = Ji(O), Et(
              C,
              E,
              O,
              Y
            );
        }
        if (At(O))
          return it(
            C,
            E,
            O,
            Y
          );
        if (Q(O)) {
          if (ot = Q(O), typeof ot != "function") throw Error(r(150));
          return O = ot.call(O), ct(
            C,
            E,
            O,
            Y
          );
        }
        if (typeof O.then == "function")
          return Et(
            C,
            E,
            so(O),
            Y
          );
        if (O.$$typeof === W)
          return Et(
            C,
            E,
            no(C, O),
            Y
          );
        oo(C, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, E !== null && E.tag === 6 ? (n(C, E.sibling), Y = s(E, O), Y.return = C, C = Y) : (n(C, E), Y = Su(O, C.mode, Y), Y.return = C, C = Y), f(C)) : n(C, E);
    }
    return function(C, E, O, Y) {
      try {
        Vl = 0;
        var ot = Et(
          C,
          E,
          O,
          Y
        );
        return Va = null, ot;
      } catch (mt) {
        if (mt === _a || mt === ao) throw mt;
        var Ot = _e(29, mt, null, C.mode);
        return Ot.lanes = Y, Ot.return = C, Ot;
      }
    };
  }
  var Ii = Dm(!0), zm = Dm(!1), fi = !1;
  function Ru(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Nu(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function di(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function hi(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (jt & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Js(t), dm(t, null, n), e;
    }
    return Ps(t, a, e, n), Js(t);
  }
  function jl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, gh(t, n);
    }
  }
  function _u(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var s = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var f = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? s = u = f : u = u.next = f, n = n.next;
        } while (n !== null);
        u === null ? s = u = e : u = u.next = e;
      } else s = u = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: s,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var Vu = !1;
  function Ul() {
    if (Vu) {
      var t = Na;
      if (t !== null) throw t;
    }
  }
  function Bl(t, e, n, a) {
    Vu = !1;
    var s = t.updateQueue;
    fi = !1;
    var u = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var T = p, w = T.next;
      T.next = null, f === null ? u = w : f.next = w, f = T;
      var V = t.alternate;
      V !== null && (V = V.updateQueue, p = V.lastBaseUpdate, p !== f && (p === null ? V.firstBaseUpdate = w : p.next = w, V.lastBaseUpdate = T));
    }
    if (u !== null) {
      var q = s.baseState;
      f = 0, V = w = T = null, p = u;
      do {
        var A = p.lane & -536870913, N = A !== p.lane;
        if (N ? (zt & A) === A : (a & A) === A) {
          A !== 0 && A === Ki && (Vu = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          t: {
            var it = t, ct = p;
            A = e;
            var Et = n;
            switch (ct.tag) {
              case 1:
                if (it = ct.payload, typeof it == "function") {
                  q = it.call(Et, q, A);
                  break t;
                }
                q = it;
                break t;
              case 3:
                it.flags = it.flags & -65537 | 128;
              case 0:
                if (it = ct.payload, A = typeof it == "function" ? it.call(Et, q, A) : it, A == null) break t;
                q = j({}, q, A);
                break t;
              case 2:
                fi = !0;
            }
          }
          A = p.callback, A !== null && (t.flags |= 64, N && (t.flags |= 8192), N = s.callbacks, N === null ? s.callbacks = [A] : N.push(A));
        } else
          N = {
            lane: A,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, V === null ? (w = V = N, T = q) : V = V.next = N, f |= A;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null)
            break;
          N = p, p = N.next, N.next = null, s.lastBaseUpdate = N, s.shared.pending = null;
        }
      } while (!0);
      V === null && (T = q), s.baseState = T, s.firstBaseUpdate = w, s.lastBaseUpdate = V, u === null && (s.shared.lanes = 0), Si |= f, t.lanes = f, t.memoizedState = q;
    }
  }
  function Om(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Rm(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        Om(n[t], e);
  }
  var mi = Wt(null), ro = Wt(0);
  function Nm(t, e) {
    t = Jn, _t(ro, t), _t(mi, e), Jn = t | e.baseLanes;
  }
  function ju() {
    _t(ro, Jn), _t(mi, mi.current);
  }
  function Uu() {
    Jn = ro.current, $t(mi), $t(ro);
  }
  var ge = Wt(null), Ee = null;
  function pi(t) {
    var e = t.alternate;
    _t(ye, ye.current & 1), _t(ge, t), Ee === null && (e === null || mi.current !== null || e.memoizedState !== null) && (Ee = t);
  }
  function Bu(t) {
    _t(ye, ye.current), _t(ge, t), Ee === null && (Ee = t);
  }
  function _m(t) {
    t.tag === 22 ? (_t(ye, ye.current), _t(ge, t), Ee === null && (Ee = t)) : gi();
  }
  function gi() {
    _t(ye, ye.current), _t(ge, ge.current);
  }
  function Xe(t) {
    $t(ge), Ee === t && (Ee = null), $t(ye);
  }
  var ye = Wt(0);
  function Ll(t, e) {
    _t(ge, ge.current), _t(ye, e);
  }
  function Lu(t) {
    $t(ye), $t(ge), Ee === t && (Ee = null);
  }
  function uo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || of(n) || rf(n)))
          return e;
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== "independent") {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    return null;
  }
  var Zn = 0, xt = null, Yt = null, ee = null, co = !1, ja = !1, Wi = !1, fo = 0, Hl = 0, Ua = null, uT = 0;
  function Jt() {
    throw Error(r(321));
  }
  function Hu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!ke(t[n], e[n])) return !1;
    return !0;
  }
  function Gu(t, e, n, a, s, u) {
    return Zn = u, xt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, lt.H = t === null || t.memoizedState === null ? gp : yp, Wi = !1, u = n(a, s), Wi = !1, ja && (u = jm(
      e,
      n,
      a,
      s
    )), Vm(t), u;
  }
  function Vm(t) {
    lt.H = bo;
    var e = Yt !== null && Yt.next !== null;
    if (Zn = 0, ee = Yt = xt = null, co = !1, Hl = 0, Ua = null, e) throw Error(r(300));
    t === null || ne || (t = t.dependencies, t !== null && eo(t) && (ne = !0));
  }
  function jm(t, e, n, a) {
    xt = t;
    var s = 0;
    do {
      if (ja && (Ua = null), Hl = 0, ja = !1, 25 <= s) throw Error(r(301));
      if (s += 1, ee = Yt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      lt.H = yT, u = e(n, a);
    } while (ja);
    return u;
  }
  function cT() {
    var t = lt.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Gl(e) : e, t = t.useState()[0], (Yt !== null ? Yt.memoizedState : null) !== t && (xt.flags |= 1024), e;
  }
  function Yu() {
    var t = fo !== 0;
    return fo = 0, t;
  }
  function qu(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function ku(t) {
    if (co) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      co = !1;
    }
    Zn = 0, ee = Yt = xt = null, ja = !1, Hl = fo = 0, Ua = null;
  }
  function Me() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ee === null ? xt.memoizedState = ee = t : ee = ee.next = t, ee;
  }
  function It() {
    if (Yt === null) {
      var t = xt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Yt.next;
    var e = ee === null ? xt.memoizedState : ee.next;
    if (e !== null)
      ee = e, Yt = t;
    else {
      if (t === null)
        throw xt.alternate === null ? Error(r(467)) : Error(r(310));
      Yt = t, t = {
        memoizedState: Yt.memoizedState,
        baseState: Yt.baseState,
        baseQueue: Yt.baseQueue,
        queue: Yt.queue,
        next: null
      }, ee === null ? xt.memoizedState = ee = t : ee = ee.next = t;
    }
    return ee;
  }
  function ho() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gl(t) {
    var e = Hl;
    return Hl += 1, Ua === null && (Ua = []), t = Cm(Ua, t, e), e = xt, (ee === null ? e.memoizedState : ee.next) === null && (e = e.alternate, lt.H = e === null || e.memoizedState === null ? gp : yp), t;
  }
  function mo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Gl(t);
      if (t.$$typeof === M) return;
      if (t.$$typeof === W) return pe(t);
    }
    throw Error(r(438, String(t)));
  }
  function Xu(t) {
    var e = null, n = xt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = xt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(s) {
          return s.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = ho(), xt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = Rt;
    return e.index++, n;
  }
  function Qn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function po(t) {
    var e = It();
    return Zu(e, Yt, t);
  }
  function Zu(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var s = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (s !== null) {
        var f = s.next;
        s.next = u.next, u.next = f;
      }
      e.baseQueue = s = u, a.pending = null;
    }
    if (u = t.baseState, s === null) t.memoizedState = u;
    else {
      e = s.next;
      var p = f = null, T = null, w = e, V = !1;
      do {
        var q = w.lane & -536870913;
        if (q !== w.lane ? (zt & q) === q : (Zn & q) === q) {
          var A = w.revertLane;
          if (A === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), q === Ki && (V = !0);
          else if ((Zn & A) === A) {
            w = w.next, A === Ki && (V = !0);
            continue;
          } else
            q = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, T === null ? (p = T = q, f = u) : T = T.next = q, xt.lanes |= A, Si |= A;
          q = w.action, Wi && n(u, q), u = w.hasEagerState ? w.eagerState : n(u, q);
        } else
          A = {
            lane: q,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, T === null ? (p = T = A, f = u) : T = T.next = A, xt.lanes |= q, Si |= q;
        w = w.next;
      } while (w !== null && w !== e);
      if (T === null ? f = u : T.next = p, !ke(u, t.memoizedState) && (ne = !0, V && (n = Na, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = f, t.baseQueue = T, a.lastRenderedState = u;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Qu(t) {
    var e = It(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, s = n.pending, u = e.memoizedState;
    if (s !== null) {
      n.pending = null;
      var f = s = s.next;
      do
        u = t(u, f.action), f = f.next;
      while (f !== s);
      ke(u, e.memoizedState) || (ne = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Um(t, e, n) {
    var a = xt, s = It(), u = Ct;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !ke(
      (Yt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, ne = !0), s = s.queue, Ju(Hm.bind(null, a, s, t), [
      t
    ]), t = s.getSnapshot !== e || f || ee !== null && (ee.memoizedState.tag & 1) !== 0, Ba(
      t ? 9 : 8,
      { destroy: void 0 },
      Lm.bind(null, a, s, n, e),
      null
    ), t) {
      if (a.flags |= 2048, kt === null) throw Error(r(349));
      u || (Zn & 127) !== 0 || Bm(a, e, n);
    }
    return n;
  }
  function Bm(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = xt.updateQueue, e === null ? (e = ho(), xt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Lm(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Gm(e) && Ym(t);
  }
  function Hm(t, e, n) {
    return n(function() {
      Gm(e) && Ym(t);
    });
  }
  function Gm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !ke(t, n);
    } catch {
      return !0;
    }
  }
  function Ym(t) {
    var e = Yi(t, 2);
    e !== null && Be(e, t, 2);
  }
  function Ku(t) {
    var e = Me();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Wi) {
        ii(!0);
        try {
          n();
        } finally {
          ii(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Qn,
      lastRenderedState: t
    }, e;
  }
  function qm(t, e, n, a) {
    return t.baseState = n, Zu(
      t,
      Yt,
      typeof a == "function" ? a : Qn
    );
  }
  function fT(t, e, n, a, s) {
    if (vo(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: s,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          u.listeners.push(f);
        }
      };
      lt.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, km(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function km(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var u = lt.T, f = {};
      f.types = u !== null ? u.types : null, lt.T = f;
      try {
        var p = n(s, a), T = lt.S;
        T !== null && T(f, p), Xm(t, e, p);
      } catch (w) {
        Pu(t, e, w);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), lt.T = u;
      }
    } else
      try {
        u = n(s, a), Xm(t, e, u);
      } catch (w) {
        Pu(t, e, w);
      }
  }
  function Xm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Zm(t, e, a);
      },
      function(a) {
        return Pu(t, e, a);
      }
    ) : Zm(t, e, n);
  }
  function Zm(t, e, n) {
    e.status = "fulfilled", e.value = n, Qm(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, km(t, n)));
  }
  function Pu(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Qm(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Qm(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Km(t, e) {
    return e;
  }
  function Pm(t, e) {
    if (Ct) {
      var n = kt.formState;
      if (n !== null) {
        t: {
          var a = xt;
          if (Ct) {
            if (Xt) {
              e: {
                for (var s = Xt, u = ln; s.nodeType !== 8; ) {
                  if (!u) {
                    s = null;
                    break e;
                  }
                  if (s = on(
                    s.nextSibling
                  ), s === null) {
                    s = null;
                    break e;
                  }
                }
                u = s.data, s = u === "F!" || u === "F" ? s : null;
              }
              if (s) {
                Xt = on(
                  s.nextSibling
                ), a = s.data === "F!";
                break t;
              }
            }
            ri(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = Me(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Km,
      lastRenderedState: e
    }, n.queue = a, n = hp.bind(
      null,
      xt,
      a
    ), a.dispatch = n, a = Ku(!1), u = tc.bind(
      null,
      xt,
      !1,
      a.queue
    ), a = Me(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = fT.bind(
      null,
      xt,
      s,
      u,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Jm(t) {
    var e = It();
    return Fm(e, Yt, t);
  }
  function Fm(t, e, n) {
    if (e = Zu(
      t,
      e,
      Km
    )[0], t = po(Qn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = Gl(e);
      } catch (f) {
        throw f === _a ? ao : f;
      }
    else a = e;
    e = It();
    var s = e.queue, u = s.dispatch;
    return n !== e.memoizedState && (xt.flags |= 2048, Ba(
      9,
      { destroy: void 0 },
      dT.bind(null, s, n),
      null
    )), [a, u, t];
  }
  function dT(t, e) {
    t.action = e;
  }
  function Im(t) {
    var e = It(), n = Yt;
    if (n !== null)
      return Fm(e, n, t);
    It(), e = e.memoizedState, n = It();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ba(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = xt.updateQueue, e === null && (e = ho(), xt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Wm() {
    return It().memoizedState;
  }
  function go(t, e, n, a) {
    var s = Me();
    xt.flags |= t, s.memoizedState = Ba(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function yo(t, e, n, a) {
    var s = It();
    a = a === void 0 ? null : a;
    var u = s.memoizedState.inst;
    Yt !== null && a !== null && Hu(a, Yt.memoizedState.deps) ? s.memoizedState = Ba(e, u, n, a) : (xt.flags |= t, s.memoizedState = Ba(
      1 | e,
      u,
      n,
      a
    ));
  }
  function $m(t, e) {
    go(8390656, 8, t, e);
  }
  function Ju(t, e) {
    yo(2048, 8, t, e);
  }
  function hT(t) {
    xt.flags |= 4;
    var e = xt.updateQueue;
    if (e === null)
      e = ho(), xt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function tp(t) {
    var e = It().memoizedState;
    return hT({ ref: e, nextImpl: t }), function() {
      if ((jt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function ep(t, e) {
    return yo(4, 2, t, e);
  }
  function np(t, e) {
    return yo(4, 4, t, e);
  }
  function ip(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function() {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return t = t(), e.current = t, function() {
        e.current = null;
      };
  }
  function ap(t, e, n) {
    n = n != null ? n.concat([t]) : null, yo(4, 4, ip.bind(null, e, t), n);
  }
  function Fu() {
  }
  function lp(t, e) {
    var n = It();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Hu(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function sp(t, e) {
    var n = It();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Hu(e, a[1]))
      return a[0];
    if (a = t(), Wi) {
      ii(!0);
      try {
        t();
      } finally {
        ii(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function Iu(t, e, n) {
    return n === void 0 || (Zn & 1073741824) !== 0 && (zt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = gg(), xt.lanes |= t, Si |= t, n);
  }
  function op(t, e, n, a) {
    return ke(n, e) ? n : mi.current !== null ? (t = Iu(t, n, a), ke(t, e) || (ne = !0), t) : (Zn & 106) === 0 || (Zn & 1073741824) !== 0 && (zt & 261930) === 0 ? (ne = !0, t.memoizedState = n) : (t = gg(), xt.lanes |= t, Si |= t, e);
  }
  function rp(t, e, n, a, s) {
    var u = ht.p;
    ht.p = u !== 0 && 8 > u ? u : 8;
    var f = lt.T, p = {};
    p.types = f !== null ? f.types : null, lt.T = p, tc(t, !1, e, n);
    try {
      var T = s(), w = lt.S;
      if (w !== null && w(p, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var V = rT(
          T,
          a
        );
        Yl(
          t,
          e,
          V,
          Pe(t)
        );
      } else
        Yl(
          t,
          e,
          a,
          Pe(t)
        );
    } catch (q) {
      Yl(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: q },
        Pe()
      );
    } finally {
      ht.p = u, f !== null && p.types !== null && (f.types = p.types), lt.T = f;
    }
  }
  function mT() {
  }
  function Wu(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var s = up(t).queue;
    rp(
      t,
      s,
      e,
      le,
      n === null ? mT : function() {
        return cp(t), n(a);
      }
    );
  }
  function up(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: le
      },
      next: null
    };
    var n = {};
    return e.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function cp(t) {
    var e = up(t);
    e.next === null && (e = t.alternate.memoizedState), Yl(
      t,
      e.next.queue,
      {},
      Pe()
    );
  }
  function $u() {
    return pe(nl);
  }
  function fp() {
    return It().memoizedState;
  }
  function dp() {
    return It().memoizedState;
  }
  function pT(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Pe();
          t = di(n);
          var a = hi(e, t, n);
          a !== null && (Be(a, e, n), jl(a, e, n)), e = { cache: Mu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function gT(t, e, n) {
    var a = Pe();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(t) ? mp(e, n) : (n = vu(t, e, n, a), n !== null && (Be(n, t, a), pp(n, e, a)));
  }
  function hp(t, e, n) {
    var a = Pe();
    Yl(t, e, n, a);
  }
  function Yl(t, e, n, a) {
    var s = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vo(t)) mp(e, s);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var f = e.lastRenderedState, p = u(f, n);
          if (s.hasEagerState = !0, s.eagerState = p, ke(p, f))
            return Ps(t, e, s, 0), kt === null && Ks(), !1;
        } catch {
        }
      if (n = vu(t, e, s, a), n !== null)
        return Be(n, t, a), pp(n, e, a), !0;
    }
    return !1;
  }
  function tc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Xc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(t)) {
      if (e) throw Error(r(479));
    } else
      e = vu(
        t,
        n,
        a,
        2
      ), e !== null && Be(e, t, 2);
  }
  function vo(t) {
    var e = t.alternate;
    return t === xt || e !== null && e === xt;
  }
  function mp(t, e) {
    ja = co = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function pp(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, gh(t, n);
    }
  }
  var bo = {
    readContext: pe,
    use: mo,
    useCallback: Jt,
    useContext: Jt,
    useEffect: Jt,
    useImperativeHandle: Jt,
    useLayoutEffect: Jt,
    useInsertionEffect: Jt,
    useMemo: Jt,
    useReducer: Jt,
    useRef: Jt,
    useState: Jt,
    useDebugValue: Jt,
    useDeferredValue: Jt,
    useTransition: Jt,
    useSyncExternalStore: Jt,
    useId: Jt,
    useHostTransitionStatus: Jt,
    useFormState: Jt,
    useActionState: Jt,
    useOptimistic: Jt,
    useMemoCache: Jt,
    useCacheRefresh: Jt,
    useEffectEvent: Jt
  }, gp = {
    readContext: pe,
    use: mo,
    useCallback: function(t, e) {
      return Me().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: pe,
    useEffect: $m,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, go(
        4194308,
        4,
        ip.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return go(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      go(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Me();
      e = e === void 0 ? null : e;
      var a = t();
      if (Wi) {
        ii(!0);
        try {
          t();
        } finally {
          ii(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = Me();
      if (n !== void 0) {
        var s = n(e);
        if (Wi) {
          ii(!0);
          try {
            n(e);
          } finally {
            ii(!1);
          }
        }
      } else s = e;
      return a.memoizedState = a.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, a.queue = t, t = t.dispatch = gT.bind(
        null,
        xt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Me();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Ku(t);
      var e = t.queue, n = hp.bind(null, xt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Fu,
    useDeferredValue: function(t, e) {
      var n = Me();
      return Iu(n, t, e);
    },
    useTransition: function() {
      var t = Ku(!1);
      return t = rp.bind(
        null,
        xt,
        t.queue,
        !0,
        !1
      ), Me().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = xt, s = Me();
      if (Ct) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), kt === null)
          throw Error(r(349));
        (zt & 127) !== 0 || Bm(a, e, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return s.queue = u, $m(Hm.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ba(
        9,
        { destroy: void 0 },
        Lm.bind(
          null,
          a,
          u,
          n,
          e
        ),
        null
      ), n;
    },
    useId: function() {
      var t = Me(), e = kt.identifierPrefix;
      if (Ct) {
        var n = En, a = xn;
        n = (a & ~(1 << 32 - Ye(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = fo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = uT++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: $u,
    useFormState: Pm,
    useActionState: Pm,
    useOptimistic: function(t) {
      var e = Me();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = tc.bind(
        null,
        xt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Xu,
    useCacheRefresh: function() {
      return Me().memoizedState = pT.bind(
        null,
        xt
      );
    },
    useEffectEvent: function(t) {
      var e = Me(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((jt & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, yp = {
    readContext: pe,
    use: mo,
    useCallback: lp,
    useContext: pe,
    useEffect: Ju,
    useImperativeHandle: ap,
    useInsertionEffect: ep,
    useLayoutEffect: np,
    useMemo: sp,
    useReducer: po,
    useRef: Wm,
    useState: function() {
      return po(Qn);
    },
    useDebugValue: Fu,
    useDeferredValue: function(t, e) {
      var n = It();
      return op(
        n,
        Yt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = po(Qn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : Gl(t),
        e
      ];
    },
    useSyncExternalStore: Um,
    useId: fp,
    useHostTransitionStatus: $u,
    useFormState: Jm,
    useActionState: Jm,
    useOptimistic: function(t, e) {
      var n = It();
      return qm(n, Yt, t, e);
    },
    useMemoCache: Xu,
    useCacheRefresh: dp,
    useEffectEvent: tp
  }, yT = {
    readContext: pe,
    use: mo,
    useCallback: lp,
    useContext: pe,
    useEffect: Ju,
    useImperativeHandle: ap,
    useInsertionEffect: ep,
    useLayoutEffect: np,
    useMemo: sp,
    useReducer: Qu,
    useRef: Wm,
    useState: function() {
      return Qu(Qn);
    },
    useDebugValue: Fu,
    useDeferredValue: function(t, e) {
      var n = It();
      return Yt === null ? Iu(n, t, e) : op(
        n,
        Yt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Qu(Qn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : Gl(t),
        e
      ];
    },
    useSyncExternalStore: Um,
    useId: fp,
    useHostTransitionStatus: $u,
    useFormState: Im,
    useActionState: Im,
    useOptimistic: function(t, e) {
      var n = It();
      return Yt !== null ? qm(n, Yt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Xu,
    useCacheRefresh: dp,
    useEffectEvent: tp
  };
  function ec(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : j({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var nc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Pe(), s = di(a);
      s.payload = e, n != null && (s.callback = n), e = hi(t, s, a), e !== null && (Be(e, t, a), jl(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Pe(), s = di(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = hi(t, s, a), e !== null && (Be(e, t, a), jl(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Pe(), a = di(n);
      a.tag = 2, e != null && (a.callback = e), e = hi(t, a, n), e !== null && (Be(e, t, n), jl(e, t, n));
    }
  };
  function vp(t, e, n, a, s, u, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !Ml(n, a) || !Ml(s, u) : !0;
  }
  function bp(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && nc.enqueueReplaceState(e, e.state, null);
  }
  function $i(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = j({}, n));
      for (var s in t)
        n[s] === void 0 && (n[s] = t[s]);
    }
    return n;
  }
  function Sp(t) {
    Qs(t);
  }
  function Tp(t) {
    console.error(t);
  }
  function xp(t) {
    Qs(t);
  }
  function So(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ep(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (s) {
      setTimeout(function() {
        throw s;
      });
    }
  }
  function ic(t, e, n) {
    return n = di(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      So(t, e);
    }, n;
  }
  function Ap(t) {
    return t = di(t), t.tag = 3, t;
  }
  function Cp(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = a.value;
      t.payload = function() {
        return s(u);
      }, t.callback = function() {
        Ep(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Ep(e, n, a), typeof s != "function" && (Ti === null ? Ti = /* @__PURE__ */ new Set([this]) : Ti.add(this));
      var p = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function vT(t, e, n, a, s) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && Zi(
        e,
        n,
        s,
        !0
      ), n = ge.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return Ee === null ? Yo() : n.alternate === null && Ft === 0 && (Ft = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === lo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Yc(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === lo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Yc(t, a, s)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Yc(t, a, s), Yo(), !1;
    }
    if (Ct)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== Eu && (t = Error(r(422), { cause: a }), Ol(en(t, n)))) : (a !== Eu && (e = Error(r(423), {
        cause: a
      }), Ol(
        en(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = en(a, n), s = ic(
        t.stateNode,
        a,
        s
      ), _u(t, s), Ft !== 4 && (Ft = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = en(u, n), Jl === null ? Jl = [u] : Jl.push(u), Ft !== 4 && (Ft = 2), e === null) return !0;
    a = en(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = ic(n.stateNode, a, t), _u(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ti === null || !Ti.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = Ap(s), Cp(
              s,
              t,
              n,
              a
            ), _u(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ac = Error(r(461)), ne = !1;
  function se(t, e, n, a) {
    e.child = t === null ? zm(e, null, n, a) : Ii(
      e,
      t.child,
      n,
      a
    );
  }
  function wp(t, e, n, a, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var p in a)
        p !== "ref" && (f[p] = a[p]);
    } else f = a;
    return Qi(e), a = Gu(
      t,
      e,
      n,
      f,
      u,
      s
    ), p = Yu(), t !== null && !ne ? (qu(t, e, s), Kn(t, e, s)) : (Ct && p && Ws(e), e.flags |= 1, se(t, e, a, s), e.child);
  }
  function Mp(t, e, n, a, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !bu(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, Dp(
        t,
        e,
        u,
        a,
        s
      )) : (t = Fs(
        n.type,
        null,
        a,
        e,
        e.mode,
        s
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !dc(t, s)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ml, n(f, a) && t.ref === e.ref)
        return Kn(t, e, s);
    }
    return e.flags |= 1, t = Yn(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function Dp(t, e, n, a, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Ml(u, a) && t.ref === e.ref)
        if (ne = !1, e.pendingProps = a = u, dc(t, s))
          (t.flags & 131072) !== 0 && (ne = !0);
        else
          return e.lanes = t.lanes, Kn(t, e, s);
    }
    return lc(
      t,
      e,
      n,
      a,
      s
    );
  }
  function zp(t, e, n, a) {
    var s = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, s = 0; a !== null; )
            s = s | a.lanes | a.childLanes, a = a.sibling;
          a = s & ~u;
        } else a = 0, e.child = null;
        return Op(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && io(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? Nm(e, u) : ju(), _m(e);
      else
        return a = e.lanes = 536870912, Op(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (io(e, u.cachePool), Nm(e, u), gi(), e.memoizedState = null) : (t !== null && io(e, null), ju(), gi());
    return se(t, e, s, n), e.child;
  }
  function ql(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function Op(t, e, n, a, s) {
    var u = zu();
    return u = u === null ? null : { parent: te._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && io(e, null), ju(), _m(e), t !== null && Zi(t, e, a, !0), e.childLanes = s, null;
  }
  function To(t, e) {
    return e = xo(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Rp(t, e, n) {
    return Ii(e, t.child, null, n), t = To(e, e.pendingProps), t.flags |= 2, Xe(e), e.memoizedState = null, t;
  }
  function bT(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Ct) {
        if (a.mode === "hidden")
          return t = To(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, ql(null, t);
        if (Bu(e), (t = Xt) ? (t = iy(
          t,
          ln
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: si !== null ? { id: xn, overflow: En } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = mm(t), n.return = e, e.child = n, fe = e, Xt = null)) : t = null, t === null) throw ri(e);
        return e.lanes = 536870912, null;
      }
      return To(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Bu(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = Rp(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (ne || Zi(t, e, n, !1), s = (n & t.childLanes) !== 0, ne || s) {
        if (mi.current === null) {
          if (a = kt, a !== null && (f = yh(a, n), f !== 0 && f !== u.retryLane))
            throw u.retryLane = f, Yi(t, f), Be(a, t, f), ac;
          Yo();
        }
        e = Rp(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Xt = on(f.nextSibling), fe = e, Ct = !0, oi = null, ln = !1, t !== null && ym(e, t), e = To(e, a), e.flags |= 134221824;
      return e;
    }
    return t = Yn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function La(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function lc(t, e, n, a, s) {
    return Qi(e), n = Gu(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = Yu(), t !== null && !ne ? (qu(t, e, s), Kn(t, e, s)) : (Ct && a && Ws(e), e.flags |= 1, se(t, e, n, s), e.child);
  }
  function Np(t, e, n, a, s, u) {
    return Qi(e), e.updateQueue = null, n = jm(
      e,
      a,
      n,
      s
    ), Vm(t), a = Yu(), t !== null && !ne ? (qu(t, e, u), Kn(t, e, u)) : (Ct && a && Ws(e), e.flags |= 1, se(t, e, n, u), e.child);
  }
  function _p(t, e, n, a, s) {
    if (Qi(e), e.stateNode === null) {
      var u = Da, f = n.contextType;
      typeof f == "object" && f !== null && (u = pe(f)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = nc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, Ru(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? pe(f) : Da, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (ec(
        e,
        n,
        f,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && nc.enqueueReplaceState(u, u.state, null), Bl(e, a, u, s), Ul(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var p = e.memoizedProps, T = $i(n, p);
      u.props = T;
      var w = u.context, V = n.contextType;
      f = Da, typeof V == "object" && V !== null && (f = pe(V));
      var q = n.getDerivedStateFromProps;
      V = typeof q == "function" || typeof u.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, V || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p || w !== f) && bp(
        e,
        u,
        a,
        f
      ), fi = !1;
      var A = e.memoizedState;
      u.state = A, Bl(e, a, u, s), Ul(), w = e.memoizedState, p || A !== w || fi ? (typeof q == "function" && (ec(
        e,
        n,
        q,
        a
      ), w = e.memoizedState), (T = fi || vp(
        e,
        n,
        T,
        a,
        A,
        w,
        f
      )) ? (V || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = w), u.props = a, u.state = w, u.context = f, a = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Nu(t, e), f = e.memoizedProps, V = $i(n, f), u.props = V, q = e.pendingProps, A = u.context, w = n.contextType, T = Da, typeof w == "object" && w !== null && (T = pe(w)), p = n.getDerivedStateFromProps, (w = typeof p == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== q || A !== T) && bp(
        e,
        u,
        a,
        T
      ), fi = !1, A = e.memoizedState, u.state = A, Bl(e, a, u, s), Ul();
      var N = e.memoizedState;
      f !== q || A !== N || fi || t !== null && t.dependencies !== null && eo(t.dependencies) ? (typeof p == "function" && (ec(
        e,
        n,
        p,
        a
      ), N = e.memoizedState), (V = fi || vp(
        e,
        n,
        V,
        a,
        A,
        N,
        T
      ) || t !== null && t.dependencies !== null && eo(t.dependencies)) ? (w || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, N, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        N,
        T
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = N), u.props = a, u.state = N, u.context = T, a = V) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, La(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = Ii(
      e,
      t.child,
      null,
      s
    ), e.child = Ii(
      e,
      null,
      n,
      s
    )) : se(t, e, n, s), e.memoizedState = u.state, t = e.child) : t = Kn(
      t,
      e,
      s
    ), t;
  }
  function Vp(t, e, n, a) {
    return ki(), e.flags |= 256, se(t, e, n, a), e.child;
  }
  var sc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function oc(t) {
    return { baseLanes: t, cachePool: Em() };
  }
  function rc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ke), t;
  }
  function jp(t, e, n) {
    var a = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, f;
    if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (ye.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Ct) {
        if (s ? pi(e) : gi(), (t = Xt) ? (t = iy(
          t,
          ln
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: si !== null ? { id: xn, overflow: En } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = mm(t), n.return = e, e.child = n, fe = e, Xt = null)) : t = null, t === null) throw ri(e);
        return rf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, s ? (gi(), s = e.mode, u = xo(
        { mode: "hidden", children: u },
        s
      ), a = qi(
        a,
        s,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = oc(n), a.childLanes = rc(
        t,
        f,
        n
      ), e.memoizedState = sc, ql(null, a)) : (pi(e), uc(e, u));
    }
    var p = t.memoizedState;
    if (p !== null) {
      var T = p.dehydrated;
      if (T !== null)
        return ST(
          t,
          e,
          u,
          f,
          a,
          T,
          p,
          n
        );
    }
    return s ? (gi(), s = a.fallback, u = e.mode, p = t.child, T = p.sibling, a = Yn(p, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = p.subtreeFlags & 1206910976, T !== null ? s = Yn(T, s) : (s = qi(
      s,
      u,
      n,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, ql(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = oc(n) : (u = s.cachePool, u !== null ? (p = te._currentValue, u = u.parent !== p ? { parent: p, pool: p } : u) : u = Em(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: u
    }), a.memoizedState = s, a.childLanes = rc(
      t,
      f,
      n
    ), e.memoizedState = sc, ql(t.child, a)) : (pi(e), n = t.child, t = n.sibling, n = Yn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function uc(t, e) {
    return e = xo(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function xo(t, e) {
    return t = _e(22, t, null, e), t.lanes = 0, t;
  }
  function Eo(t, e, n) {
    return Ii(e, t.child, null, n), t = uc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function ST(t, e, n, a, s, u, f, p) {
    if (n)
      return e.flags & 256 ? (pi(e), e.flags &= -257, Eo(
        t,
        e,
        p
      )) : e.memoizedState !== null ? (gi(), e.child = t.child, e.flags |= 128, null) : (gi(), u = s.fallback, f = e.mode, s = xo(
        { mode: "visible", children: s.children },
        f
      ), u = qi(
        u,
        f,
        p,
        null
      ), u.flags |= 2, s.return = e, u.return = e, s.sibling = u, e.child = s, Ii(e, t.child, null, p), s = e.child, s.memoizedState = oc(p), s.childLanes = rc(
        t,
        a,
        p
      ), e.memoizedState = sc, ql(null, s));
    if (pi(e), rf(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var T = a.dgst;
      return a = T, a !== "" && (s = Error(r(419)), s.stack = "", s.digest = a, Ol({ value: s, source: null, stack: null })), Eo(
        t,
        e,
        p
      );
    }
    if (ne || Zi(t, e, p, !1), a = (p & t.childLanes) !== 0, ne || a) {
      if (mi.current !== null)
        return Eo(
          t,
          e,
          p
        );
      if (a = kt, a !== null && (s = yh(
        a,
        p
      ), s !== 0 && s !== f.retryLane))
        throw f.retryLane = s, Yi(t, s), Be(a, t, s), ac;
      return of(u) || Yo(), Eo(
        t,
        e,
        p
      );
    }
    return of(u) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, Xt = on(u.nextSibling), fe = e, Ct = !0, oi = null, ln = !1, t !== null && ym(e, t), e = uc(
      e,
      s.children
    ), e.flags |= 134221824, e);
  }
  function Up(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), to(t.return, e, n);
  }
  function Bp(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && uo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function Ao(t, e, n, a, s, u) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: s,
      treeForkCount: u
    } : (f.isBackwards = e, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = n, f.tailMode = s, f.treeForkCount = u);
  }
  function cc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function fc(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, u = a.tail;
    a = a.children;
    var f = ye.current;
    if (e.flags & 128)
      return Ll(e, f), null;
    var p = (f & 2) !== 0;
    if (p ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, Ll(e, f), s === "backwards" && t !== null ? (cc(t), se(t, e, a, n), cc(t)) : se(t, e, a, n), a = Ct ? zl : 0, !p && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Up(t, n, e);
        else if (t.tag === 19)
          Up(t, n, e);
        else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            break t;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    switch (s) {
      case "backwards":
        n = Bp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null, cc(e)), Ao(
          e,
          !0,
          s,
          null,
          u,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, s = e.child, e.child = null; s !== null; ) {
          if (t = s.alternate, t !== null && uo(t) === null) {
            e.child = s;
            break;
          }
          t = s.sibling, s.sibling = n, n = s, s = t;
        }
        Ao(
          e,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        Ao(
          e,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        e.memoizedState = null;
        break;
      default:
        n = Bp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), Ao(
          e,
          !1,
          s,
          n,
          u,
          a
        );
    }
    return e.child;
  }
  function Lp(t, e, n) {
    var a = e.pendingProps;
    return ui(e, e.type, a.value), se(t, e, a.children, n), e.child;
  }
  function Kn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Si |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (Zi(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = Yn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Yn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function dc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eo(t)));
  }
  function TT(t, e, n) {
    switch (e.tag) {
      case 3:
        Ds(e, e.stateNode.containerInfo), ui(e, te, t.memoizedState.cache), ki();
        break;
      case 27:
      case 5:
        Hr(e);
        break;
      case 4:
        Ds(e, e.stateNode.containerInfo);
        break;
      case 10:
        ui(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Bu(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return pi(e), e.flags |= 128, null;
          a = Zi(
            t,
            e,
            n,
            !1
          );
          var s = e.child.childLanes;
          return a || (n & s) !== 0 ? jp(t, e, n) : (pi(e), t = Kn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        pi(e);
        break;
      case 19:
        if (e.flags & 128)
          return fc(
            t,
            e,
            n
          );
        if (s = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (Zi(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), s) {
          if (a)
            return fc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ll(e, ye.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, zp(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        ui(e, te, t.memoizedState.cache);
    }
    return Kn(t, e, n);
  }
  function Hp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ne = !0;
      else {
        if (!dc(t, n) && (e.flags & 128) === 0)
          return ne = !1, TT(
            t,
            e,
            n
          );
        ne = (t.flags & 131072) !== 0;
      }
    else
      ne = !1, Ct && (e.flags & 1048576) !== 0 && gm(e, zl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Ji(e.elementType), e.type = t, typeof t == "function")
            bu(t) ? (a = $i(t, a), e.tag = 1, e = _p(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = lc(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === G) {
                e.tag = 11, e = wp(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === tt) {
                e.tag = 14, e = Mp(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === W) {
                e.tag = 10, e.type = t, e = Lp(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = dt(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return lc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, s = $i(
          a,
          e.pendingProps
        ), _p(
          t,
          e,
          a,
          s,
          n
        );
      case 3:
        t: {
          if (Ds(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          s = u.element, Nu(t, e), Bl(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, ui(e, te, a), a !== u.cache && wu(
            e,
            [te],
            n,
            !0
          ), Ul(), a = f.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Vp(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== s) {
              s = en(
                Error(r(424)),
                e
              ), Ol(s), e = Vp(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Xt = on(t.firstChild), fe = e, Ct = !0, oi = null, ln = !0, n = zm(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (ki(), a === s) {
              e = Kn(
                t,
                e,
                n
              );
              break t;
            }
            se(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return La(t, e), t === null ? (n = cy(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Ct || (e.stateNode = kg(
          e.type,
          e.pendingProps,
          Ce.current,
          e
        )) : e.memoizedState = cy(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Hr(e), t === null && Ct && (a = e.stateNode = sy(
          e.type,
          e.pendingProps,
          Ce.current
        ), fe = e, ln = !0, s = Xt, Ai(e.type) ? (uf = s, Xt = on(a.firstChild)) : Xt = s), se(
          t,
          e,
          e.pendingProps.children,
          n
        ), La(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Ct && ((s = a = Xt) && (a = px(
          a,
          e.type,
          e.pendingProps,
          ln
        ), a !== null ? (e.stateNode = a, fe = e, Xt = on(a.firstChild), ln = !1, s = !0) : s = !1), s || ri(e)), Hr(e), s = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = u.children, $c(s, u) ? a = null : f !== null && $c(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = Gu(
          t,
          e,
          cT,
          null,
          null,
          n
        ), nl._currentValue = s), La(t, e), se(t, e, a, n), e.child;
      case 6:
        return t === null && Ct && ((t = n = Xt) && (n = gx(
          n,
          e.pendingProps,
          ln
        ), n !== null ? (e.stateNode = n, fe = e, Xt = null, t = !0) : t = !1), t || ri(e)), null;
      case 13:
        return jp(t, e, n);
      case 4:
        return Ds(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = Ii(
          e,
          null,
          a,
          n
        ) : se(t, e, a, n), e.child;
      case 11:
        return wp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, La(t, e), se(t, e, a, n), e.child;
      case 8:
        return se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return Lp(t, e, n);
      case 9:
        return s = e.type._context, a = e.pendingProps.children, Qi(e), s = pe(s), a = a(s), e.flags |= 1, se(t, e, a, n), e.child;
      case 14:
        return Mp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return Dp(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return fc(t, e, n);
      case 31:
        return bT(t, e, n);
      case 22:
        return zp(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Qi(e), a = pe(te), t === null ? (s = zu(), s === null && (s = kt, u = Mu(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = { parent: a, cache: s }, Ru(e), ui(e, te, s)) : ((t.lanes & n) !== 0 && (Nu(t, e), Bl(e, null, null, n), Ul()), s = t.memoizedState, u = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), ui(e, te, a)) : (a = u.cache, ui(e, te, a), a !== s.cache && wu(
          e,
          [te],
          n,
          !0
        ))), se(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 30:
        return e.stateNode === null && (e.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Ct && Ws(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : La(t, e), se(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function Pn(t) {
    t.flags |= 4;
  }
  function hc(t, e, n, a, s) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? my(e, a) : my(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Sg()) t.flags |= 8192;
        else
          throw Fi = lo, Ou;
    } else t.flags &= -16777217;
  }
  function Gp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !py(e))
      if (Sg()) t.flags |= 8192;
      else
        throw Fi = lo, Ou;
  }
  function Co(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? mh() : 536870912, t.lanes |= e, ka |= e);
  }
  function kl(t, e) {
    if (!Ct)
      switch (t.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = t.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e || t.tail === null ? t.tail = null : t.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (e = t.tail, n = null; e !== null; )
            e.alternate !== null && (n = e), e = e.sibling;
          n === null ? t.tail = null : n.sibling = null;
      }
  }
  function Zt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags & 1206910976, a |= s.flags & 1206910976, s.return = t, s = s.sibling;
    else
      for (s = t.child; s !== null; )
        n |= s.lanes | s.childLanes, a |= s.subtreeFlags, a |= s.flags, s.return = t, s = s.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function xT(t, e, n) {
    var a = e.pendingProps;
    switch (xu(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Zt(e), null;
      case 1:
        return Zt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Xn(te), pa(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ra(e) ? Pn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Au())), Zt(e), null;
      case 26:
        var s = e.type, u = e.memoizedState;
        return t === null ? (Pn(e), u !== null ? (Zt(e), Gp(e, u)) : (Zt(e), hc(
          e,
          s,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (Pn(e), Zt(e), Gp(e, u)) : (Zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Pn(e), Zt(e), hc(
          e,
          s,
          t,
          a,
          n
        )), null;
      case 27:
        if (zs(e), n = Ce.current, s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Zt(e), e.subtreeFlags &= -33554433, null;
          }
          t = Le.current, Ra(e) ? vm(e) : (t = sy(s, a, n), e.stateNode = t, Pn(e));
        }
        return Zt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (zs(e), s = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && Pn(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Zt(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = Le.current, Ra(e))
            vm(e);
          else {
            var f = ts(
              Ce.current
            );
            switch (u) {
              case 1:
                u = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  s
                );
                break;
              case 2:
                u = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  s
                );
                break;
              default:
                switch (s) {
                  case "svg":
                    u = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      s
                    );
                    break;
                  case "math":
                    u = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      s
                    );
                    break;
                  case "script":
                    u = f.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? f.createElement(s, { is: a.is }) : f.createElement(s);
                }
            }
            u[me] = e, u[Ne] = a;
            t: for (f = e.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                u.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === e) break t;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === e)
                  break t;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            e.stateNode = u;
            t: switch (be(u, s, a), s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break t;
              case "img":
                a = !0;
                break t;
              default:
                a = !1;
            }
            a && Pn(e);
          }
        }
        return Zt(e), e.subtreeFlags &= -33554433, hc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && Pn(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(r(166));
          if (t = Ce.current, Ra(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, s = fe, s !== null)
              switch (s.tag) {
                case 27:
                case 5:
                  a = s.memoizedProps;
              }
            t[me] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Hg(t.nodeValue, n)), t || ri(e, !0);
          } else
            t = ts(t).createTextNode(
              a
            ), t[me] = e, e.stateNode = t;
        }
        return Zt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Ra(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[me] = e;
            } else
              ki(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Zt(e), t = !1;
          } else
            n = Au(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Xe(e), e) : (Xe(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Zt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (s = Ra(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!s) throw Error(r(318));
              if (s = e.memoizedState, s = s !== null ? s.dehydrated : null, !s) throw Error(r(317));
              s[me] = e;
            } else
              ki(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Zt(e), s = !1;
          } else
            s = Au(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (Xe(e), e) : (Xe(e), null);
        }
        return Xe(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Co(e, e.updateQueue), Zt(e), null);
      case 4:
        return pa(), t === null && Pc(e.stateNode.containerInfo), e.flags |= 67108864, Zt(e), null;
      case 10:
        return Xn(e.type), Zt(e), null;
      case 19:
        if (Lu(e), a = e.memoizedState, a === null) return Zt(e), null;
        if (s = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (s) kl(a, !1);
          else {
            if (Ft !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = uo(t), u !== null) {
                  for (e.flags |= 128, kl(a, !1), t = u.updateQueue, e.updateQueue = t, Co(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    hm(n, t), n = n.sibling;
                  return Ll(
                    e,
                    ye.current & 1 | 2
                  ), Ct && qn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && He() > Bo && (e.flags |= 128, s = !0, kl(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = uo(u), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, Co(e, t), kl(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Ct)
                return Zt(e), null;
            } else
              2 * He() - a.renderingStartTime > Bo && n !== 536870912 && (e.flags |= 128, s = !0, kl(a, !1), e.lanes = 4194304);
          a.isBackwards ? (u.sibling = e.child, e.child = u) : (t = a.last, t !== null ? t.sibling = u : e.child = u, a.last = u);
        }
        if (a.tail !== null) {
          t = a.tail;
          t: {
            for (n = t; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break t;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = He(), t.sibling = null, u = ye.current, u = s ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ct ? Ll(e, u) : (n = u, _t(ge, e), _t(ye, n), Ee === null && (Ee = e)), Ct && qn(e, a.treeForkCount), t;
        }
        return Zt(e), null;
      case 22:
      case 23:
        return Xe(e), Uu(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Zt(e), n = e.updateQueue, n !== null && Co(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && $t(Pi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Xn(te), Zt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Zt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function ET(t, e) {
    switch (xu(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Xn(te), pa(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return zs(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Xe(e), e.alternate === null)
            throw Error(r(340));
          ki();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Xe(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          ki();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Lu(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return pa(), null;
      case 10:
        return Xn(e.type), null;
      case 22:
      case 23:
        return Xe(e), Uu(), t !== null && $t(Pi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Xn(te), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Yp(t, e) {
    switch (xu(e), e.tag) {
      case 3:
        Xn(te), pa();
        break;
      case 26:
      case 27:
      case 5:
        zs(e);
        break;
      case 4:
        pa();
        break;
      case 31:
        e.memoizedState !== null && Xe(e);
        break;
      case 13:
        Xe(e);
        break;
      case 19:
        Lu(e);
        break;
      case 10:
        Xn(e.type);
        break;
      case 22:
      case 23:
        Xe(e), Uu(), t !== null && $t(Pi);
        break;
      case 24:
        Xn(te);
    }
  }
  function Xl(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var s = a.next;
        n = s;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create, f = n.inst;
            a = u(), f.destroy = a;
          }
          n = n.next;
        } while (n !== s);
      }
    } catch (p) {
      Lt(e, e.return, p);
    }
  }
  function yi(t, e, n) {
    try {
      var a = e.updateQueue, s = a !== null ? a.lastEffect : null;
      if (s !== null) {
        var u = s.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var f = a.inst, p = f.destroy;
            if (p !== void 0) {
              f.destroy = void 0, s = e;
              var T = n, w = p;
              try {
                w();
              } catch (V) {
                Lt(
                  s,
                  T,
                  V
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (V) {
      Lt(e, e.return, V);
    }
  }
  function qp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Rm(e, n);
      } catch (a) {
        Lt(t, t.return, a);
      }
    }
  }
  function kp(t, e, n) {
    n.props = $i(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Lt(t, e, a);
    }
  }
  function An(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var a = t.stateNode;
            break;
          case 30:
            var s = t.stateNode, u = Hn(t.memoizedProps, s);
            (s.ref === null || s.ref.name !== u) && (s.ref = Fg(u)), a = s.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new Je(t);
              y(
                t.child,
                !1,
                hx,
                f,
                void 0,
                void 0
              ), t.stateNode = f;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (p) {
      Lt(t, e, p);
    }
  }
  function ve(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (s) {
          Lt(t, e, s);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (s) {
          Lt(t, e, s);
        }
      else n.current = null;
  }
  function wo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        ny(
          t.stateNode,
          e[n]
        );
  }
  function Xp(t) {
    for (var e = t.return; e !== null && (pc(e) && ny(t.stateNode, e.stateNode), !mc(e)); )
      e = e.return;
  }
  function Zl(t) {
    for (var e = t.return; e !== null && (pc(e) && mx(t.stateNode, e.stateNode), !mc(e)); )
      e = e.return;
  }
  function mc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function pc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function gc(t) {
    var e = t.type, n = t.memoizedProps, a = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break t;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (s) {
      Lt(t, t.return, s);
    }
  }
  function yc(t, e, n) {
    try {
      var a = t.stateNode;
      JT(a, t.type, n, e), a[Ne] = e;
    } catch (s) {
      Lt(t, t.return, s);
    }
  }
  function Zp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ai(t.type) || t.tag === 4;
  }
  function vc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Zp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ai(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function bc(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(s), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Tn)), wo(t, a), Vt = !0;
    else if (s !== 4 && (s === 27 && (wo(t, a), a = null, Ai(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (bc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        bc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Mo(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? n.insertBefore(s, e) : n.appendChild(s), wo(t, a), Vt = !0;
    else if (s !== 4 && (s === 27 && (wo(t, a), a = null, Ai(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (Mo(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Mo(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Qp(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, s = e.attributes; s.length; )
        e.removeAttributeNode(s[0]);
      be(e, a, n), e[me] = t, e[Ne] = n;
    } catch (u) {
      Lt(t, t.return, u);
    }
  }
  var Do = !1, Ze = null;
  function Kp(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Do = !0);
  }
  var Cn = null;
  function Pp() {
    var t = Cn;
    return Cn = null, t;
  }
  var Ve = 0;
  function Ha(t, e, n, a, s) {
    return Ve = 0, Jp(
      t.child,
      e,
      n,
      a,
      s
    );
  }
  function Jp(t, e, n, a, s) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (a !== null) {
          var p = nf(f);
          a.push(p), p.view && (u = !0);
        } else
          u || nf(f).view && (u = !0);
        Do = !0, Pg(
          f,
          Ve === 0 ? e : e + "_" + Ve,
          n
        ), Ve++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s || Jp(
        t.child,
        e,
        n,
        a,
        s
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function wn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? Jg(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || wn(
        t.child,
        e
      )), t = t.sibling;
  }
  function zo(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (zo(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(r(544));
          var n = e.name;
          e = Gn(e.default, e.share), e !== "none" && (Ha(
            t,
            n,
            e,
            null,
            !1
          ) || wn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Sc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, s = Hn(a, n), u = Gn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? Ha(t, s, u, null, !1) ? (zo(t), n.paired || e || Ka(t, a.onEnter)) : wn(t.child, !1) : zo(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Sc(t, e), t = t.sibling;
    else zo(t);
  }
  function Tc(t) {
    if (Ze !== null && Ze.size !== 0) {
      var e = Ze;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var s = e.get(a);
                if (s !== void 0) {
                  var u = Gn(
                    n.default,
                    n.share
                  );
                  if (u !== "none" && (Ha(
                    t,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, s.paired = u, u.paired = s, Ka(t, n.onShare)) : wn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            Tc(t);
          }
          t = t.sibling;
        }
    }
  }
  function xc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Hn(e, t.stateNode), a = Ze !== null ? Ze.get(n) : void 0, s = Gn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      s !== "none" && (Ha(t, n, s, null, !1) ? a !== void 0 ? (s = t.stateNode, a.paired = s, s.paired = a, Ze.delete(n), Ka(t, e.onShare)) : Ka(t, e.onExit) : wn(t.child, !1)), Ze !== null && Tc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        xc(t), t = t.sibling;
    else
      Ze !== null && Tc(t);
  }
  function Fp(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Hn(e, t.stateNode);
        e = Gn(e.default, e.update), t.flags &= -5, e !== "none" && Ha(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Fp(t);
      t = t.sibling;
    }
  }
  function Ec(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, wn(t.child, !1));
          }
          Ec(t);
        }
        t = t.sibling;
      }
  }
  function Oo(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, wn(t.child, !1), Ec(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Oo(t), t = t.sibling;
    else Ec(t);
  }
  function Ip(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? wn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Ip(t), t = t.sibling;
  }
  function Ac(t, e, n, a, s, u, f) {
    for (var p = !1; e !== null; ) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (u !== null && Ve < u.length) {
          var w = u[Ve], V = nf(T);
          (w.view || V.view) && (p = !0);
          var q;
          if (q = (t.flags & 4) === 0)
            if (V.clip) q = !0;
            else {
              q = w.rect;
              var A = V.rect;
              q = q.y !== A.y || q.x !== A.x || q.height !== A.height || q.width !== A.width;
            }
          q && (t.flags |= 4), V.abs ? V = !w.abs : (w = w.rect, V = V.rect, V = w.height !== V.height || w.width !== V.width), V && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Pg(
          T,
          Ve === 0 ? n : n + "_" + Ve,
          s
        ), p && (t.flags & 4) !== 0 || (Cn === null && (Cn = []), Cn.push(
          T,
          Ve === 0 ? a : a + "_" + Ve,
          e.memoizedProps
        )), Ve++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : Ac(
        t,
        e.child,
        n,
        a,
        s,
        u,
        f
      ) && (p = !0));
      e = e.sibling;
    }
    return p;
  }
  function Wp(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, s = Hn(n, a), u = Gn(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, a = t;
        var p = t.child;
        Ve = 0, s = Ac(
          a,
          p,
          s,
          s,
          u,
          f,
          !1
        ), (t.flags & 4) !== 0 && s && Ka(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Wp(t);
      t = t.sibling;
    }
  }
  var de = !1, Ut = !1, Mn = !1, Cc = !1, $p = typeof WeakSet == "function" ? WeakSet : Set, he = null, Dn = !1, Ql = !1, Ro = !1, wc = !1;
  function AT(t, e, n) {
    if (t = t.containerInfo, Ic = il, t = im(t), du(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var s = a.getSelection && a.getSelection();
          if (s && s.rangeCount !== 0) {
            a = s.anchorNode;
            var u = s.anchorOffset, f = s.focusNode;
            s = s.focusOffset;
            try {
              a.nodeType, f.nodeType;
            } catch {
              a = null;
              break t;
            }
            var p = 0, T = -1, w = -1, V = 0, q = 0, A = t, N = null;
            e: for (; ; ) {
              for (var it; A !== a || u !== 0 && A.nodeType !== 3 || (T = p + u), A !== f || s !== 0 && A.nodeType !== 3 || (w = p + s), A.nodeType === 3 && (p += A.nodeValue.length), (it = A.firstChild) !== null; )
                N = A, A = it;
              for (; ; ) {
                if (A === t) break e;
                if (N === a && ++V === u && (T = p), N === f && ++q === s && (w = p), (it = A.nextSibling) !== null) break;
                A = N, N = A.parentNode;
              }
              A = it;
            }
            a = T === -1 || w === -1 ? null : { start: T, end: w };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Wc = { focusedElem: t, selectionRange: a }, il = !1, n = (n & 335544064) === n, he = e, e = n ? 9270 : 1024; he !== null; ) {
      if (t = he, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && xc(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && Kp(t), No(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && xc(a), No(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && Kp(t), No(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, he = a) : (n && Fp(t), No(n));
      }
    }
    Ze = null;
  }
  function No(t) {
    for (; he !== null; ) {
      var e = he, n = t, a = e.alternate, s = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((s & 1024) !== 0 && a !== null) {
            n = void 0, s = a.memoizedProps, a = a.memoizedState;
            var u = e.stateNode;
            try {
              var f = $i(
                e.type,
                s
              );
              n = u.getSnapshotBeforeUpdate(
                f,
                a
              ), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (p) {
              Lt(e, e.return, p);
            }
          }
          break;
        case 3:
          if ((s & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              sf(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  sf(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && a !== null && (n = Hn(
            a.memoizedProps,
            a.stateNode
          ), s = e.memoizedProps, s = Gn(s.default, s.update), s !== "none" && Ha(
            a,
            n,
            s,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((s & 1024) !== 0) throw Error(r(163));
      }
      if (a = e.sibling, a !== null) {
        a.return = e.return, he = a;
        break;
      }
      he = e.return;
    }
  }
  function tg(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        zn(t, n), a & 4 && Xl(5, n);
        break;
      case 1:
        if (zn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (f) {
              Lt(n, n.return, f);
            }
          else {
            var s = $i(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                s,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              Lt(
                n,
                n.return,
                f
              );
            }
          }
        a & 64 && qp(n), a & 512 && An(n, n.return);
        break;
      case 3:
        if (zn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
          if (e = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Rm(t, e);
          } catch (f) {
            Lt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Qp(n);
      case 26:
      case 5:
        zn(t, n), e === null && a & 4 && gc(n), a & 512 && An(n, n.return);
        break;
      case 12:
        zn(t, n);
        break;
      case 31:
        zn(t, n), a & 4 && ag(t, n);
        break;
      case 13:
        zn(t, n), a & 4 && lg(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = UT.bind(
          null,
          n
        ), yx(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || de, !a) {
          var u = e !== null && e.memoizedState !== null || Ut;
          e = de, s = Ut, de = a, (Ut = u) && !s ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), hn(
            t,
            n,
            a
          )) : zn(t, n), de = e, Ut = s;
        }
        break;
      case 30:
        zn(t, n), a & 512 && An(n, n.return);
        break;
      case 7:
        a & 512 && An(n, n.return);
      default:
        zn(t, n);
    }
  }
  function Mc(t, e) {
    for (t = t.child; t !== null; )
      eg(t, e), t = t.sibling;
  }
  function eg(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var s = t.stateNode, u = t.memoizedProps.style, f = u != null && u.hasOwnProperty("display") ? u.display : null;
            s.style.display = f == null || typeof f == "boolean" ? "" : ("" + f).trim();
          }
        } catch (T) {
          Lt(t, t.return, T);
        }
        Dc(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Vt = !0;
        } catch (T) {
          Lt(t, t.return, T);
        }
        break;
      case 18:
        try {
          var p = t.stateNode;
          e ? Kg(p, !0) : Kg(t.stateNode, !1);
        } catch (T) {
          Lt(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Mc(t, e);
        break;
      default:
        Mc(t, e);
    }
  }
  function Dc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              eg(n, a);
              break t;
            case 22:
              n.memoizedState === null && Dc(n, a);
              break t;
            default:
              Dc(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function ng(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, ng(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Us(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Qt = null, je = !1;
  function fn(t, e, n) {
    for (n = n.child; n !== null; )
      ig(t, e, n), n = n.sibling;
  }
  function ig(t, e, n) {
    if (Ge && typeof Ge.onCommitFiberUnmount == "function")
      try {
        Ge.onCommitFiberUnmount(pl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ut || ve(n, e), fn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Ut && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ut || ve(n, e), Zl(n);
        var a = Qt, s = je;
        Ai(n.type) && (Qt = n.stateNode, je = !1), fn(
          t,
          e,
          n
        ), oy(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Qt = a, je = s;
        break;
      case 5:
        Ut || ve(n, e), Zl(n);
      case 6:
        if (n.tag === 6 && Zl(n), a = Qt, s = je, Qt = null, fn(
          t,
          e,
          n
        ), Qt = a, je = s, Qt !== null)
          if (je)
            try {
              (Qt.nodeType === 9 ? Qt.body : Qt.nodeName === "HTML" ? Qt.ownerDocument.body : Qt).removeChild(n.stateNode), Vt = !0;
            } catch (u) {
              Lt(
                n,
                e,
                u
              );
            }
          else
            try {
              Qt.removeChild(n.stateNode), Vt = !0;
            } catch (u) {
              Lt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Qt !== null && (je ? (t = Qt, Qg(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), al(t)) : Qg(Qt, n.stateNode));
        break;
      case 4:
        a = Qt, s = je, Qt = n.stateNode.containerInfo, je = !0, fn(
          t,
          e,
          n
        ), Qt = a, je = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        yi(2, n, e), Ut || yi(4, n, e), fn(
          t,
          e,
          n
        );
        break;
      case 1:
        Ut || (ve(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && kp(
          n,
          e,
          a
        )), fn(
          t,
          e,
          n
        );
        break;
      case 21:
        fn(
          t,
          e,
          n
        );
        break;
      case 22:
        Ut = (a = Ut) || n.memoizedState !== null, fn(
          t,
          e,
          n
        ), Ut = a;
        break;
      case 30:
        ve(n, e), fn(
          t,
          e,
          n
        );
        break;
      case 7:
        Ut || ve(n, e), fn(
          t,
          e,
          n
        );
        break;
      default:
        fn(
          t,
          e,
          n
        );
    }
  }
  function ag(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        al(t);
      } catch (n) {
        Lt(e, e.return, n);
      }
    }
  }
  function lg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        al(t);
      } catch (n) {
        Lt(e, e.return, n);
      }
  }
  function CT(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new $p()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new $p()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function _o(t, e) {
    var n = CT(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = BT.bind(null, t, a);
        a.then(s, s);
      }
    });
  }
  function De(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var s = 0; s < a.length; s++) {
        var u = a[s], f = t, p = e, T = p;
        t: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (Ai(T.type)) {
                Qt = T.stateNode, je = !1;
                break t;
              }
              break;
            case 5:
              Qt = T.stateNode, je = !1;
              break t;
            case 3:
            case 4:
              Qt = T.stateNode.containerInfo, je = !0;
              break t;
          }
          T = T.return;
        }
        if (Qt === null) throw Error(r(160));
        ig(f, p, u), Qt = null, je = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        sg(e, t, n), e = e.sibling;
  }
  var dn = null;
  function sg(t, e, n) {
    var a = t.alternate, s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (s & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var u = 0; u < a.length; u++) {
            var f = a[u];
            f.ref.impl = f.nextImpl;
          }
        De(e, t, n), ze(t), s & 4 && (yi(3, t, t.return), Xl(3, t), yi(5, t, t.return));
        break;
      case 1:
        De(e, t, n), ze(t), s & 512 && (Ut || a === null || ve(a, a.return)), s & 64 && de && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (u = dn, De(e, t, n), ze(t), s & 512 && (Ut || a === null || ve(a, a.return)), s & 4)
          if (s = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (de)
                  t.stateNode = kg(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, s = u.ownerDocument || u;
                    e: switch (e) {
                      case "title":
                        a = s.getElementsByTagName("title")[0], (!a || a[vl] || a[me] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = s.createElement(e), s.head.insertBefore(
                          a,
                          s.querySelector("head > title")
                        )), be(a, e, n), a[me] = t, ce(a), e = a;
                        break t;
                      case "link":
                        if (u = hy(
                          "link",
                          "href",
                          s
                        ).get(e + (n.href || ""))) {
                          for (f = 0; f < u.length; f++)
                            if (a = u[f], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(f, 1);
                              break e;
                            }
                        }
                        a = s.createElement(e), be(a, e, n), s.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = hy(
                          "meta",
                          "content",
                          s
                        ).get(e + (n.content || ""))) {
                          for (f = 0; f < u.length; f++)
                            if (a = u[f], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(f, 1);
                              break e;
                            }
                        }
                        a = s.createElement(e), be(a, e, n), s.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    a[me] = t, ce(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                de || hf(u, t.type, t.stateNode);
            else
              t.stateNode = dy(
                u,
                n,
                t.memoizedProps
              );
          else
            s !== n ? (s === null ? (e = a.stateNode, e === null || Ut || e.parentNode.removeChild(e)) : s.count--, n === null ? de || hf(u, t.type, t.stateNode) : dy(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && yc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        De(e, t, n), ze(t), s & 512 && (Ut || a === null || ve(a, a.return)), a !== null && s & 4 && yc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Mn, Mn = !1, De(e, t, n), Mn = u, ze(t), s & 512 && (Ut || a === null || ve(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Ta(e, ""), Vt = !0;
          } catch (V) {
            Lt(t, t.return, V);
          }
        }
        s & 4 && t.stateNode != null && (e = t.memoizedProps, yc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), s & 1024 && (Cc = !0);
        break;
      case 6:
        if (De(e, t, n), ze(t), s & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Vt = !0;
          } catch (V) {
            Lt(t, t.return, V);
          }
        }
        break;
      case 3:
        if (Vt = !1, Po = null, u = dn, dn = es(e.containerInfo), De(e, t, n), dn = u, ze(t), s & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            al(e.containerInfo);
          } catch (V) {
            Lt(t, t.return, V);
          }
        Cc && (Cc = !1, og(t)), Vt = !1;
        break;
      case 4:
        s = Mn, Mn = de, a = Mh(), u = dn, dn = es(
          t.stateNode.containerInfo
        ), De(e, t, n), ze(t), dn = u, Vt && Ql && (Ro = !0), Vt = a, Mn = s;
        break;
      case 12:
        De(e, t, n), ze(t);
        break;
      case 31:
        De(e, t, n), ze(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, _o(t, e)));
        break;
      case 13:
        De(e, t, n), ze(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (Uo = He()), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, _o(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, f = a !== null && a.memoizedState !== null;
        var p = de, T = Ut, w = Mn;
        de = p || u, Mn = w || u, Ut = T || f, De(e, t, n), Ut = T, Mn = w, de = p, ze(t), s & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || f || de || Ut || (e = f || Ut, n = de, a = Ut, de = u || de, Ut = e, vi(t, 2), de = n, Ut = a), !u && Mn || Mc(t, u)), s & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, _o(t, n))));
        break;
      case 19:
        De(e, t, n), ze(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, _o(t, e)));
        break;
      case 30:
        s & 512 && (Ut || a === null || ve(a, a.return)), s = Mh(), u = Ql, f = (n & 335544064) === n, p = t.memoizedProps, Ql = f && Gn(
          p.default,
          p.update
        ) !== "none", De(e, t, n), ze(t), f && a !== null && Vt && (t.flags |= 4), Ql = u, Vt = s;
        break;
      case 21:
        break;
      case 7:
        s & 512 && (Ut || a === null || ve(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        De(e, t, n), ze(t);
    }
  }
  function ze(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Zp(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var s = t.return; s !== null; ) {
          if (pc(s)) {
            var u = s.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (mc(s)) break;
          s = s.return;
        }
        var f = a;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var p = n.stateNode, T = vc(t);
            Mo(
              t,
              T,
              p,
              f
            );
            break;
          case 5:
            var w = n.stateNode;
            n.flags & 32 && (Ta(w, ""), n.flags &= -33);
            var V = vc(t);
            Mo(
              t,
              V,
              w,
              f
            );
            break;
          case 3:
          case 4:
            var q = n.stateNode.containerInfo, A = vc(t);
            bc(
              t,
              A,
              q,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (N) {
        Lt(t, t.return, N);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function og(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        og(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, il = !0, e.reset(), il = !1), t = t.sibling;
      }
  }
  function Ga(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        rg(e, t), e = e.sibling;
    else Wp(e);
  }
  function rg(t, e) {
    var n = t.alternate;
    if (n === null) Sc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (wc = Dn = !1, Pp(), Ga(e, t), !Dn && !Ro) {
            if (t = Cn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var s = t[a + 1];
                Jg(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + s + ")"
                  }
                );
              }
            t = e.containerInfo, t = t.nodeType === 9 ? t.documentElement : t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "" && (t.style.viewTransitionName = "none", t.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), t.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), wc = !0;
          }
          Cn = null;
          break;
        case 5:
          Ga(e, t);
          break;
        case 4:
          a = Dn, Dn = !1, Ga(e, t), Dn && (Ro = !0), Dn = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Sc(t, !1) : Ga(e, t));
          break;
        case 30:
          a = Dn, s = Pp(), Dn = !1, Ga(e, t), Dn && (t.flags |= 4);
          var u = t.memoizedProps, f = t.stateNode;
          e = Hn(u, f), f = Hn(n.memoizedProps, f);
          var p = Gn(u.default, u.update);
          p === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, Ve = 0, e = Ac(
            t,
            n,
            e,
            f,
            p,
            u,
            !0
          ), Ve !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (Ka(
            t,
            t.memoizedProps.onUpdate
          ), Cn = s) : s !== null && (s.push.apply(s, Cn), Cn = s), Dn = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ga(e, t);
      }
  }
  function zn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        tg(t, e.alternate, e), e = e.sibling;
  }
  function vi(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          yi(4, n, n.return), vi(
            n,
            a
          );
          break;
        case 1:
          ve(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && kp(
            n,
            n.return,
            s
          ), vi(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && oy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          ve(n, n.return), n.tag !== 5 && n.tag !== 27 || Zl(n), vi(
            n,
            a
          );
          break;
        case 6:
          Zl(n);
          break;
        case 26:
          ve(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || Ut || s.parentNode.removeChild(s), vi(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && vi(
            n,
            a
          );
          break;
        case 30:
          ve(n, n.return), vi(
            n,
            a
          );
          break;
        case 7:
          ve(n, n.return);
        default:
          vi(
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function hn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var a = e.alternate, s = t, u = e, f = u.flags, p = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          hn(
            s,
            u,
            n
          ), Xl(4, u);
          break;
        case 1:
          if (hn(
            s,
            u,
            n
          ), a = u, s = a.stateNode, typeof s.componentDidMount == "function")
            try {
              s.componentDidMount();
            } catch (V) {
              Lt(a, a.return, V);
            }
          if (a = u, s = a.updateQueue, s !== null) {
            var T = a.stateNode;
            try {
              var w = s.shared.hiddenCallbacks;
              if (w !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < w.length; s++)
                  Om(w[s], T);
            } catch (V) {
              Lt(a, a.return, V);
            }
          }
          p && f & 64 && qp(u), An(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Qp(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Xp(u), hn(
            s,
            u,
            n
          ), p && a === null && f & 4 && gc(u), An(u, u.return);
          break;
        case 6:
          Xp(u);
          break;
        case 26:
          T = u.stateNode, u.memoizedState !== null || T === null || de || hf(
            es(T.ownerDocument),
            u.type,
            T
          ), hn(
            s,
            u,
            n
          ), p && a === null && f & 4 && gc(u), An(u, u.return);
          break;
        case 12:
          hn(
            s,
            u,
            n
          );
          break;
        case 31:
          hn(
            s,
            u,
            n
          ), p && f & 4 && ag(s, u);
          break;
        case 13:
          hn(
            s,
            u,
            n
          ), p && f & 4 && lg(s, u);
          break;
        case 22:
          u.memoizedState === null && hn(
            s,
            u,
            n
          ), An(u, u.return);
          break;
        case 30:
          hn(
            s,
            u,
            n
          ), An(u, u.return);
          break;
        case 7:
          An(u, u.return);
        default:
          hn(
            s,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function zc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Rl(n));
  }
  function Oc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Rl(t));
  }
  function sn(t, e, n, a) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null; )
        ug(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else s && Ip(e);
  }
  function ug(t, e, n, a) {
    var s = (n & 335544064) === n;
    s && e.alternate === null && e.return !== null && e.return.alternate !== null && Oo(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        sn(
          t,
          e,
          n,
          a
        ), u & 2048 && Xl(9, e);
        break;
      case 1:
        sn(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        sn(
          t,
          e,
          n,
          a
        ), s && wc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Rl(u)));
        break;
      case 12:
        if (u & 2048) {
          sn(
            t,
            e,
            n,
            a
          ), u = e.stateNode;
          try {
            var f = e.memoizedProps, p = f.id, T = f.onPostCommit;
            typeof T == "function" && T(
              p,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (w) {
            Lt(e, e.return, w);
          }
        } else
          sn(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        sn(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        sn(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        f = e.stateNode, p = e.alternate, e.memoizedState !== null ? (s && p !== null && p.memoizedState === null && Oo(p), f._visibility & 2 ? sn(
          t,
          e,
          n,
          a
        ) : Kl(
          t,
          e
        )) : (s && p !== null && p.memoizedState !== null && Oo(e), f._visibility & 2 ? sn(
          t,
          e,
          n,
          a
        ) : (f._visibility |= 2, Ya(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && zc(p, e);
        break;
      case 24:
        sn(
          t,
          e,
          n,
          a
        ), u & 2048 && Oc(e.alternate, e);
        break;
      case 30:
        s && (u = e.alternate, u !== null && (wn(u.child, !0), wn(e.child, !0))), sn(
          t,
          e,
          n,
          a
        );
        break;
      default:
        sn(
          t,
          e,
          n,
          a
        );
    }
  }
  function Ya(t, e, n, a, s) {
    for (s = s && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, f = e, p = n, T = a, w = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ya(
            u,
            f,
            p,
            T,
            s
          ), Xl(8, f);
          break;
        case 23:
          break;
        case 22:
          var V = f.stateNode;
          f.memoizedState !== null ? V._visibility & 2 ? Ya(
            u,
            f,
            p,
            T,
            s
          ) : Kl(
            u,
            f
          ) : (V._visibility |= 2, Ya(
            u,
            f,
            p,
            T,
            s
          )), s && w & 2048 && zc(
            f.alternate,
            f
          );
          break;
        case 24:
          Ya(
            u,
            f,
            p,
            T,
            s
          ), s && w & 2048 && Oc(f.alternate, f);
          break;
        default:
          Ya(
            u,
            f,
            p,
            T,
            s
          );
      }
      e = e.sibling;
    }
  }
  function Kl(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, s = a.flags;
        switch (a.tag) {
          case 22:
            Kl(n, a), s & 2048 && zc(
              a.alternate,
              a
            );
            break;
          case 24:
            Kl(n, a), s & 2048 && Oc(a.alternate, a);
            break;
          default:
            Kl(n, a);
        }
        e = e.sibling;
      }
  }
  var ta = 8192;
  function ea(t, e, n) {
    if (t.subtreeFlags & ta)
      for (t = t.child; t !== null; )
        cg(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function cg(t, e, n) {
    switch (t.tag) {
      case 26:
        ea(
          t,
          e,
          n
        ), t.flags & ta && (t.memoizedState !== null ? Rx(
          n,
          dn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && yy(n, t)));
        break;
      case 5:
        ea(
          t,
          e,
          n
        ), t.flags & ta && (t = t.stateNode, (e & 335544128) === e && yy(n, t));
        break;
      case 3:
      case 4:
        var a = dn;
        dn = es(t.stateNode.containerInfo), ea(
          t,
          e,
          n
        ), dn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ta, ta = 16777216, ea(
          t,
          e,
          n
        ), ta = a) : ea(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & ta) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var s = t.stateNode;
          s.paired = null, Ze === null && (Ze = /* @__PURE__ */ new Map()), Ze.set(a, s);
        }
        ea(
          t,
          e,
          n
        );
        break;
      default:
        ea(
          t,
          e,
          n
        );
    }
  }
  function fg(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function Pl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          he = a, hg(
            a,
            t
          );
        }
      fg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        dg(t), t = t.sibling;
  }
  function dg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pl(t), t.flags & 2048 && yi(9, t, t.return);
        break;
      case 3:
        Pl(t);
        break;
      case 12:
        Pl(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, Vo(t)) : Pl(t);
        break;
      default:
        Pl(t);
    }
  }
  function Vo(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          he = a, hg(
            a,
            t
          );
        }
      fg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          yi(8, e, e.return), Vo(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, Vo(e));
          break;
        default:
          Vo(e);
      }
      t = t.sibling;
    }
  }
  function hg(t, e) {
    for (; he !== null; ) {
      var n = he;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          yi(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Rl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, he = a;
      else
        t: for (n = t; he !== null; ) {
          a = he;
          var s = a.sibling, u = a.return;
          if (ng(a), a === n) {
            he = null;
            break t;
          }
          if (s !== null) {
            s.return = u, he = s;
            break t;
          }
          he = u;
        }
    }
  }
  var wT = {
    getCacheForType: function(t) {
      var e = pe(te), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return pe(te).controller.signal;
    }
  }, MT = typeof WeakMap == "function" ? WeakMap : Map, jt = 0, kt = null, Mt = null, zt = 0, Bt = 0, Qe = null, bi = !1, qa = !1, Rc = !1, Jn = 0, Ft = 0, Si = 0, na = 0, jo = 0, Ke = 0, ka = 0, Jl = null, Ue = null, Nc = !1, Uo = 0, mg = 0, Bo = 1 / 0, Lo = null, Ti = null, Kt = 0, mn = null, ia = null, On = 0, _c = 0, Vc = null, pg = null, Xa = null, Za = null, Qa = null, Fl = 0, Ho = null;
  function Pe() {
    return (jt & 2) !== 0 && zt !== 0 ? zt & -zt : lt.T !== null ? Xc() : vh();
  }
  function gg() {
    if (Ke === 0)
      if ((zt & 536870912) === 0 || Ct) {
        var t = Ns;
        Ns <<= 1, (Ns & 3932160) === 0 && (Ns = 262144), Ke = t;
      } else Ke = 536870912;
    return t = ge.current, t !== null && (t.flags |= 32), Ke;
  }
  function Ka(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = Fg(
        Hn(t.memoizedProps, n)
      )), Za === null && (Za = []), Za.push(e.bind(null, a));
    }
  }
  function Be(t, e, n) {
    (t === kt && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null) && (Pa(t, 0), xi(
      t,
      zt,
      Ke,
      !1
    )), yl(t, n), ((jt & 2) === 0 || t !== kt) && (t === kt && ((jt & 2) === 0 && (na |= n), Ft === 4 && xi(
      t,
      zt,
      Ke,
      !1
    )), Rn(t));
  }
  function yg(t, e, n) {
    if ((jt & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || gl(t, e), s = a ? OT(t, e) : Uc(t, e, !0), u = a;
    do {
      if (s === 0) {
        qa && !a && xi(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !DT(n)) {
          s = Uc(t, e, !1), u = !1;
          continue;
        }
        if (s === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var f = 0;
          else
            f = t.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            e = f;
            t: {
              var p = t;
              s = Jl;
              var T = p.current.memoizedState.isDehydrated;
              if (T && (Pa(p, f).flags |= 256), f = Uc(
                p,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (Rc && !T) {
                  p.errorRecoveryDisabledLanes |= u, na |= u, s = 4;
                  break t;
                }
                u = Ue, Ue = s, u !== null && (Ue === null ? Ue = u : Ue.push.apply(
                  Ue,
                  u
                ));
              }
              s = f;
            }
            if (u = !1, s !== 2) continue;
          }
        }
        if (s === 1) {
          Pa(t, 0), xi(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = s, u) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              xi(
                a,
                e,
                Ke,
                !bi
              );
              break t;
            case 2:
              Ue = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (s = Uo + 300 - He(), 10 < s)) {
            if (xi(
              a,
              e,
              Ke,
              !bi
            ), Vs(a, 0, !0) !== 0) break t;
            On = e, a.timeoutHandle = ef(
              vg.bind(
                null,
                a,
                n,
                Ue,
                Lo,
                Nc,
                e,
                Ke,
                na,
                ka,
                bi,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          vg(
            a,
            n,
            Ue,
            Lo,
            Nc,
            e,
            Ke,
            na,
            ka,
            bi,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Rn(t);
  }
  function vg(t, e, n, a, s, u, f, p, T, w, V, q, A, N) {
    t.timeoutHandle = -1;
    var it = e.subtreeFlags, ct = (u & 335544064) === u;
    if (q = null, (ct || it & 8192 || (it & 16785408) === 16785408) && (q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Tn
    }, Ze = null, cg(
      e,
      u,
      q
    ), ct && (it = q, ct = t.containerInfo, ct = (ct.nodeType === 9 ? ct : ct.ownerDocument).__reactViewTransition, ct != null && (it.count++, it.waitingForViewTransition = !0, it = as.bind(it), ct.finished.then(it, it))), it = (u & 62914560) === u ? Uo - He() : (u & 4194048) === u ? mg - He() : 0, it = Nx(
      q,
      it
    ), it !== null)) {
      On = u, t.cancelPendingCommit = it(
        wg.bind(
          null,
          t,
          e,
          u,
          n,
          a,
          s,
          f,
          p,
          T,
          w,
          V,
          q,
          null,
          A,
          N
        )
      ), xi(t, u, f, !w);
      return;
    }
    wg(
      t,
      e,
      u,
      n,
      a,
      s,
      f,
      p,
      T,
      w,
      V,
      q
    );
  }
  function DT(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var s = n[a], u = s.getSnapshot;
          s = s.value;
          try {
            if (!ke(u(), s)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = e.child, e.subtreeFlags & 16384 && n !== null)
        n.return = e, e = n;
      else {
        if (e === t) break;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    }
    return !0;
  }
  function xi(t, e, n, a) {
    e = hh(t, e), e &= ~jo, e &= ~na, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var u = 31 - Ye(s), f = 1 << u;
      a[u] = -1, s &= ~f;
    }
    n !== 0 && ph(t, n, e);
  }
  function Go() {
    return (jt & 6) === 0 ? (Il(0), !1) : !0;
  }
  function jc() {
    if (Mt !== null) {
      if (Bt === 0)
        var t = Mt.return;
      else
        t = Mt, kn = Xi = null, ku(t), Va = null, Vl = 0, t = Mt;
      for (; t !== null; )
        Yp(t.alternate, t), t = t.return;
      Mt = null;
    }
  }
  function Pa(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, WT(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), On = 0, jc(), kt = t, Mt = n = Yn(t.current, null), zt = e, Bt = 0, Qe = null, bi = !1, qa = gl(t, e), Rc = !1, ka = Ke = jo = na = Si = Ft = 0, Ue = Jl = null, Nc = !1, Jn = hh(t, e), Ks(), n;
  }
  function bg(t, e) {
    xt = null, lt.H = bo, e === _a || e === ao ? (e = wm(), Bt = 3) : e === Ou ? (e = wm(), Bt = 4) : Bt = e === ac ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Qe = e, Mt === null && (Ft = 1, So(
      t,
      en(e, t.current)
    ));
  }
  function Sg() {
    var t = ge.current;
    return t === null ? !0 : (zt & 4194048) === zt ? Ee === null : (zt & 62914560) === zt || (zt & 536870912) !== 0 ? t === Ee : !1;
  }
  function Tg() {
    var t = lt.H;
    return lt.H = bo, t === null ? bo : t;
  }
  function xg() {
    var t = lt.A;
    return lt.A = wT, t;
  }
  function Yo() {
    Ft = 4, bi || (zt & 4194048) !== zt && ge.current !== null || (qa = !0), (Si & 134217727) === 0 && (na & 134217727) === 0 || kt === null || xi(
      kt,
      zt,
      Ke,
      !1
    );
  }
  function Uc(t, e, n) {
    var a = jt;
    jt |= 2;
    var s = Tg(), u = xg();
    (kt !== t || zt !== e) && (Lo = null, Pa(t, e)), e = !1;
    var f = Ft;
    t: do
      try {
        if (Bt !== 0 && Mt !== null) {
          var p = Mt, T = Qe;
          switch (Bt) {
            case 8:
              jc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var w = Bt;
              if (Bt = 0, Qe = null, Ja(t, p, T, w), n && qa) {
                f = 0;
                break t;
              }
              break;
            default:
              w = Bt, Bt = 0, Qe = null, Ja(t, p, T, w);
          }
        }
        zT(), f = Ft;
        break;
      } catch (V) {
        bg(t, V);
      }
    while (!0);
    return e && t.shellSuspendCounter++, kn = Xi = null, jt = a, lt.H = s, lt.A = u, Mt === null && (kt = null, zt = 0, Ks()), f;
  }
  function zT() {
    for (; Mt !== null; ) Eg(Mt);
  }
  function OT(t, e) {
    var n = jt;
    jt |= 2;
    var a = Tg(), s = xg();
    kt !== t || zt !== e ? (Lo = null, Bo = He() + 500, Pa(t, e)) : qa = gl(
      t,
      e
    );
    t: do
      try {
        if (Bt !== 0 && Mt !== null) {
          e = Mt;
          var u = Qe;
          e: switch (Bt) {
            case 1:
              Bt = 0, Qe = null, Ja(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (Am(u)) {
                Bt = 0, Qe = null, Ag(e);
                break;
              }
              e = function() {
                Bt !== 2 && Bt !== 9 || kt !== t || (Bt = 7), Rn(t);
              }, u.then(e, e);
              break t;
            case 3:
              Bt = 7;
              break t;
            case 4:
              Bt = 5;
              break t;
            case 7:
              Am(u) ? (Bt = 0, Qe = null, Ag(e)) : (Bt = 0, Qe = null, Ja(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (Mt.tag) {
                case 26:
                  f = Mt.memoizedState;
                case 5:
                case 27:
                  var p = Mt;
                  if (f ? py(f) : p.stateNode.complete) {
                    Bt = 0, Qe = null;
                    var T = p.sibling;
                    if (T !== null) Mt = T;
                    else {
                      var w = p.return;
                      w !== null ? (Mt = w, qo(w)) : Mt = null;
                    }
                    break e;
                  }
              }
              Bt = 0, Qe = null, Ja(t, e, u, 5);
              break;
            case 6:
              Bt = 0, Qe = null, Ja(t, e, u, 6);
              break;
            case 8:
              jc(), Ft = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        RT();
        break;
      } catch (V) {
        bg(t, V);
      }
    while (!0);
    return kn = Xi = null, lt.H = a, lt.A = s, jt = n, Mt !== null ? 0 : (kt = null, zt = 0, Ks(), Ft);
  }
  function RT() {
    for (; Mt !== null && !P1(); )
      Eg(Mt);
  }
  function Eg(t) {
    var e = Hp(t.alternate, t, Jn);
    t.memoizedProps = t.pendingProps, e === null ? qo(t) : Mt = e;
  }
  function Ag(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Np(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          zt
        );
        break;
      case 11:
        e = Np(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          zt
        );
        break;
      case 5:
        ku(e);
        var a = e;
        a === fe && (Ct ? ($s(a), a.tag === 5 && a.stateNode != null && (Xt = a.stateNode)) : ($s(a), Ct = !0));
      default:
        Yp(n, e), e = Mt = hm(e, Jn), e = Hp(n, e, Jn);
    }
    t.memoizedProps = t.pendingProps, e === null ? qo(t) : Mt = e;
  }
  function Ja(t, e, n, a) {
    kn = Xi = null, ku(e), Va = null, Vl = 0;
    var s = e.return;
    try {
      if (vT(
        t,
        s,
        e,
        n,
        zt
      )) {
        Ft = 1, So(
          t,
          en(n, t.current)
        ), Mt = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw Mt = s, u;
      Ft = 1, So(
        t,
        en(n, t.current)
      ), Mt = null;
      return;
    }
    e.flags & 32768 ? (Ct || a === 1 ? t = !0 : qa || (zt & 536870912) !== 0 ? t = !1 : (bi = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Cg(e, t)) : qo(e);
  }
  function qo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Cg(
          e,
          bi
        );
        return;
      }
      t = e.return;
      var n = xT(
        e.alternate,
        e,
        Jn
      );
      if (n !== null) {
        Mt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Mt = e;
        return;
      }
      Mt = e = t;
    } while (e !== null);
    Ft === 0 && (Ft = 5);
  }
  function Cg(t, e) {
    do {
      var n = ET(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Mt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Mt = t;
        return;
      }
      Mt = t = n;
    } while (t !== null);
    Ft = 6, Mt = null;
  }
  function wg(t, e, n, a, s, u, f, p, T, w, V, q) {
    t.cancelPendingCommit = null;
    do
      ko();
    while (Kt !== 0);
    if ((jt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === kt && (Mt = kt = null, zt = 0), ia = e, mn = t, On = n, Vc = s, pg = a, NT(
        t,
        e,
        n,
        f,
        p,
        T,
        q
      );
    }
  }
  function NT(t, e, n, a, s, u, f) {
    var p = e.lanes | e.childLanes;
    if (_c = p, p |= yu, aS(
      t,
      n,
      p,
      a,
      s,
      u
    ), Za = null, (n & 335544064) === n ? (Qa = sT(t), a = 10262) : (Qa = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, LT(Os, function() {
      return Gc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Do = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = lt.T, lt.T = null, s = ht.p, ht.p = 2, u = jt, jt |= 4;
      try {
        AT(t, e, n);
      } finally {
        jt = u, ht.p = s, lt.T = a;
      }
    }
    Kt = 1, Do ? Xa = ax(
      f,
      t.containerInfo,
      Qa,
      Bc,
      Lc,
      VT,
      Hc,
      Gc,
      _T
    ) : (Bc(), Lc(), Hc());
  }
  function _T(t) {
    if (Kt !== 0) {
      var e = mn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function VT() {
    Kt === 3 && (Kt = 0, rg(ia, mn), Kt = 4);
  }
  function Bc() {
    if (Kt === 1) {
      Kt = 0;
      var t = mn, e = ia, n = On, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = lt.T, lt.T = null;
        var s = ht.p;
        ht.p = 2;
        var u = jt;
        jt |= 4;
        try {
          Ql = Ro = !1, sg(e, t, n), n = Wc;
          var f = im(t.containerInfo), p = n.focusedElem, T = n.selectionRange;
          if (f !== p && p && p.ownerDocument && nm(
            p.ownerDocument.documentElement,
            p
          )) {
            if (T !== null && du(p)) {
              var w = T.start, V = T.end;
              if (V === void 0 && (V = w), "selectionStart" in p)
                p.selectionStart = w, p.selectionEnd = Math.min(
                  V,
                  p.value.length
                );
              else {
                var q = p.ownerDocument || document, A = q && q.defaultView || window;
                if (A.getSelection) {
                  var N = A.getSelection(), it = p.textContent.length, ct = Math.min(T.start, it), Et = T.end === void 0 ? ct : Math.min(T.end, it);
                  !N.extend && ct > Et && (f = Et, Et = ct, ct = f);
                  var C = em(
                    p,
                    ct
                  ), E = em(
                    p,
                    Et
                  );
                  if (C && E && (N.rangeCount !== 1 || N.anchorNode !== C.node || N.anchorOffset !== C.offset || N.focusNode !== E.node || N.focusOffset !== E.offset)) {
                    var O = q.createRange();
                    O.setStart(C.node, C.offset), N.removeAllRanges(), ct > Et ? (N.addRange(O), N.extend(E.node, E.offset)) : (O.setEnd(E.node, E.offset), N.addRange(O));
                  }
                }
              }
            }
            for (q = [], N = p; N = N.parentNode; )
              N.nodeType === 1 && q.push({
                element: N,
                left: N.scrollLeft,
                top: N.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < q.length; p++) {
              var Y = q[p];
              Y.element.scrollLeft = Y.left, Y.element.scrollTop = Y.top;
            }
          }
          il = !!Ic, Wc = Ic = null;
        } finally {
          jt = u, ht.p = s, lt.T = a;
        }
      }
      t.current = e, Kt = 2;
    }
  }
  function Lc() {
    if (Kt === 2) {
      Kt = 0;
      var t = mn, e = ia, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = lt.T, lt.T = null;
        var a = ht.p;
        ht.p = 2;
        var s = jt;
        jt |= 4;
        try {
          tg(t, e.alternate, e);
        } finally {
          jt = s, ht.p = a, lt.T = n;
        }
      }
      Kt = 3;
    }
  }
  function Hc() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0;
      var t = Xa;
      Xa = null, J1();
      var e = mn, n = ia, a = On, s = pg, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Kt = 5 : (Kt = 0, ia = mn = null, Mg(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (Ti = null), Pr(a), n = n.stateNode, Ge && typeof Ge.onCommitFiberRoot == "function")
        try {
          Ge.onCommitFiberRoot(
            pl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (s !== null) {
        n = lt.T, u = ht.p, ht.p = 2, lt.T = null;
        try {
          for (var f = e.onRecoverableError, p = 0; p < s.length; p++) {
            var T = s[p];
            f(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          lt.T = n, ht.p = u;
        }
      }
      if (s = Za, f = Qa, Qa = null, s !== null && (Za = null, f === null && (f = []), t !== null))
        for (T = 0; T < s.length; T++)
          n = (0, s[T])(
            f
          ), n !== void 0 && t.finished.finally(n);
      (On & 3) !== 0 && ko(), Rn(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === Ho ? Fl++ : (Fl = 0, Ho = e) : (Fl = 0, Ho = null), Il(0);
    }
  }
  function Mg(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Rl(e)));
  }
  function ko() {
    return Xa !== null && (Xa.skipTransition(), Xa = null), Bc(), Lc(), Hc(), Gc();
  }
  function Gc() {
    if (Kt !== 5) return !1;
    var t = mn, e = _c;
    _c = 0;
    var n = Pr(On), a = lt.T, s = ht.p;
    try {
      ht.p = 32 > n ? 32 : n, lt.T = null, n = Vc, Vc = null;
      var u = mn, f = On;
      if (Kt = 0, ia = mn = null, On = 0, (jt & 6) !== 0) throw Error(r(331));
      var p = jt;
      if (jt |= 4, dg(u.current), ug(
        u,
        u.current,
        f,
        n
      ), jt = p, Il(0, !1), Ge && typeof Ge.onPostCommitFiberRoot == "function")
        try {
          Ge.onPostCommitFiberRoot(pl, u);
        } catch {
        }
      return !0;
    } finally {
      ht.p = s, lt.T = a, Mg(t, e);
    }
  }
  function Dg(t, e, n) {
    e = en(n, e), e = ic(t.stateNode, e, 2), t = hi(t, e, 2), t !== null && (yl(t, 2), Rn(t));
  }
  function Lt(t, e, n) {
    if (t.tag === 3)
      Dg(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          Dg(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ti === null || !Ti.has(a))) {
            t = en(n, t), n = Ap(2), a = hi(e, n, 2), a !== null && (Cp(
              n,
              a,
              e,
              t
            ), yl(a, 2), Rn(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function Yc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new MT();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (Rc = !0, s.add(n), t = jT.bind(null, t, e, n), e.then(t, t));
  }
  function jT(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, kt === t && (zt & n) === n && ((Ft === 4 || Ft === 3 && (zt & 62914560) === zt && 300 > He() - Uo) && (jt & 2) === 0 ? Pa(t, 0) : jo |= n, ka === zt && (ka = 0)), Rn(t);
  }
  function zg(t, e) {
    e === 0 && (e = mh()), t = Yi(t, e), t !== null && (yl(t, e), Rn(t));
  }
  function UT(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), zg(t, n);
  }
  function BT(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, s = t.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    a !== null && a.delete(e), zg(t, n);
  }
  function LT(t, e) {
    return Xr(t, e);
  }
  var Fa = null, Ia = null, qc = !1, Xo = !1, kc = !1, Ei = 0;
  function Rn(t) {
    t !== Ia && t.next === null && (Ia === null ? Fa = Ia = t : Ia = Ia.next = t), Xo = !0, qc || (qc = !0, GT());
  }
  function Il(t, e) {
    if (!kc && Xo) {
      kc = !0;
      do
        for (var n = !1, a = Fa; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = a.suspendedLanes, p = a.pingedLanes;
              u = (1 << 31 - Ye(42 | t) + 1) - 1, u &= s & ~(f & ~p), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, _g(a, u));
          } else
            u = zt, u = Vs(
              a,
              a === kt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || gl(a, u) || (n = !0, _g(a, u));
          a = a.next;
        }
      while (n);
      kc = !1;
    }
  }
  function HT() {
    Og();
  }
  function Og() {
    Xo = qc = !1;
    var t = 0;
    Ei !== 0 && IT() && (t = Ei);
    for (var e = He(), n = null, a = Fa; a !== null; ) {
      var s = a.next, u = Rg(a, e);
      u === 0 ? (a.next = null, n === null ? Fa = s : n.next = s, s === null && (Ia = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (Xo = !0)), a = s;
    }
    Kt !== 0 && Kt !== 5 || Il(t), Ei !== 0 && (Ei = 0);
  }
  function Rg(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Ye(u), p = 1 << f, T = s[f];
      T === -1 ? ((p & n) === 0 || (p & a) !== 0) && (s[f] = iS(p, e)) : T <= e && (t.expiredLanes |= p), u &= ~p;
    }
    if (e = kt, n = zt, n = Vs(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Zr(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || gl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Zr(a), Pr(n)) {
        case 2:
        case 8:
          n = fh;
          break;
        case 32:
          n = Os;
          break;
        case 268435456:
          n = dh;
          break;
        default:
          n = Os;
      }
      return a = Ng.bind(null, t), n = Xr(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Zr(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Ng(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (ko() && t.callbackNode !== n)
      return null;
    var a = zt;
    return a = Vs(
      t,
      t === kt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (yg(t, a, e), Rg(t, He()), t.callbackNode != null && t.callbackNode === n ? Ng.bind(null, t) : null);
  }
  function _g(t, e) {
    if (ko()) return null;
    yg(t, e, !0);
  }
  function GT() {
    $T(function() {
      (jt & 6) !== 0 ? Xr(
        ch,
        HT
      ) : Og();
    });
  }
  function Xc() {
    if (Ei === 0) {
      var t = Ki;
      t === 0 && (t = Rs, Rs <<= 1, (Rs & 261888) === 0 && (Rs = 256)), Ei = t;
    }
    return Ei;
  }
  function Vg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Hs(t);
  }
  function YT(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = Vg(
        (s[Ne] || null).action
      ), f = a.submitter;
      f && (e = (e = f[Ne] || null) ? Vg(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
      var p = new ks(
        "action",
        "action",
        null,
        a,
        s
      );
      t.push({
        event: p,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Ei !== 0) {
                  var T = new FormData(s, f);
                  Wu(
                    n,
                    {
                      pending: !0,
                      data: T,
                      method: s.method,
                      action: u
                    },
                    null,
                    T
                  );
                }
              } else
                typeof u == "function" && (p.preventDefault(), T = new FormData(s, f), Wu(
                  n,
                  {
                    pending: !0,
                    data: T,
                    method: s.method,
                    action: u
                  },
                  u,
                  T
                ));
            },
            currentTarget: s
          }
        ]
      });
    }
  }
  for (var Zc = 0; Zc < gu.length; Zc++) {
    var Qc = gu[Zc], qT = Qc.toLowerCase(), kT = Qc[0].toUpperCase() + Qc.slice(1);
    cn(
      qT,
      "on" + kT
    );
  }
  cn(sm, "onAnimationEnd"), cn(om, "onAnimationIteration"), cn(rm, "onAnimationStart"), cn("dblclick", "onDoubleClick"), cn("focusin", "onFocus"), cn("focusout", "onBlur"), cn(WS, "onTransitionRun"), cn($S, "onTransitionStart"), cn(tT, "onTransitionCancel"), cn(um, "onTransitionEnd"), ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]), Li(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Li(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Li("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Li(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Li(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Li(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Wl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), XT = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl)
  );
  function jg(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var p = a[f], T = p.instance, w = p.currentTarget;
            if (p = p.listener, T !== u && s.isPropagationStopped())
              break t;
            u = p, s.currentTarget = w;
            try {
              u(s);
            } catch (V) {
              Qs(V);
            }
            s.currentTarget = null, u = T;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (p = a[f], T = p.instance, w = p.currentTarget, p = p.listener, T !== u && s.isPropagationStopped())
              break t;
            u = p, s.currentTarget = w;
            try {
              u(s);
            } catch (V) {
              Qs(V);
            }
            s.currentTarget = null, u = T;
          }
      }
    }
  }
  function Dt(t, e) {
    var n = e[Sh];
    n === void 0 && (n = e[Sh] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Ug(e, t, 2, !1), n.add(a));
  }
  function Kc(t, e, n) {
    var a = 0;
    e && (a |= 4), Ug(
      n,
      t,
      a,
      e
    );
  }
  var Zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Pc(t) {
    if (!t[Zo]) {
      t[Zo] = !0, Eh.forEach(function(n) {
        n !== "selectionchange" && (XT.has(n) || Kc(n, !1, t), Kc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Zo] || (e[Zo] = !0, Kc("selectionchange", !1, e));
    }
  }
  function Ug(t, e, n, a) {
    switch (Cy(e)) {
      case 2:
        var s = Ux;
        break;
      case 8:
        s = Bx;
        break;
      default:
        s = pf;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !nu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function Jc(t, e, n, a, s) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var p = a.stateNode.containerInfo;
          if (p === s) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var T = f.tag;
              if ((T === 3 || T === 4) && f.stateNode.containerInfo === s)
                return;
              f = f.return;
            }
          for (; p !== null; ) {
            if (f = Bi(p), f === null) return;
            if (T = f.tag, T === 5 || T === 6 || T === 26 || T === 27) {
              a = u = f;
              continue t;
            }
            p = p.parentNode;
          }
        }
        a = a.return;
      }
    Uh(function() {
      var w = u, V = tu(n), q = [];
      t: {
        var A = cm.get(t);
        if (A !== void 0) {
          var N = ks, it = t;
          switch (t) {
            case "keypress":
              if (Ys(n) === 0) break t;
            case "keydown":
            case "keyup":
              N = DS;
              break;
            case "focusin":
              it = "focus", N = su;
              break;
            case "focusout":
              it = "blur", N = su;
              break;
            case "beforeblur":
            case "afterblur":
              N = su;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              N = Hh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              N = gS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              N = _S;
              break;
            case sm:
            case om:
            case rm:
              N = bS;
              break;
            case um:
              N = jS;
              break;
            case "scroll":
            case "scrollend":
              N = mS;
              break;
            case "wheel":
              N = BS;
              break;
            case "copy":
            case "cut":
            case "paste":
              N = TS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              N = Yh;
              break;
            case "submit":
              N = RS;
              break;
            case "toggle":
            case "beforetoggle":
              N = HS;
          }
          var ct = (e & 4) !== 0, Et = !ct && (t === "scroll" || t === "scrollend"), C = ct ? A !== null ? A + "Capture" : null : A;
          ct = [];
          for (var E = w, O; E !== null; ) {
            var Y = E;
            if (O = Y.stateNode, Y = Y.tag, Y !== 5 && Y !== 26 && Y !== 27 || O === null || C === null || (Y = Sl(E, C), Y != null && ct.push(
              $l(E, Y, O)
            )), Et) break;
            E = E.return;
          }
          0 < ct.length && (A = new N(
            A,
            it,
            null,
            n,
            V
          ), q.push({ event: A, listeners: ct }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (N = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", N && n !== $r && (it = n.relatedTarget || n.fromElement) && (Bi(it) || it[ga]))
            break t;
          (A || N) && (it = V.window === V ? V : (N = V.ownerDocument) ? N.defaultView || N.parentWindow : window, A ? (N = n.relatedTarget || n.toElement, A = w, N = N ? Bi(N) : null, N !== null && (Et = h(N), ct = N.tag, N !== Et || ct !== 5 && ct !== 27 && ct !== 6) && (N = null)) : (A = null, N = w), A !== N && (ct = Hh, Y = "onMouseLeave", C = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (ct = Yh, Y = "onPointerLeave", C = "onPointerEnter", E = "pointer"), Et = A == null ? it : bl(A), O = N == null ? it : bl(N), it = new ct(
            Y,
            E + "leave",
            A,
            n,
            V
          ), it.target = Et, it.relatedTarget = O, Y = null, Bi(V) === w && (ct = new ct(
            C,
            E + "enter",
            N,
            n,
            V
          ), ct.target = O, ct.relatedTarget = Et, Y = ct), Et = Y, ct = A && N ? at(
            A,
            N,
            ZT
          ) : null, A !== null && Bg(
            q,
            it,
            A,
            ct,
            !1
          ), N !== null && Et !== null && Bg(
            q,
            Et,
            N,
            ct,
            !0
          )));
        }
        t: {
          if (A = w ? bl(w) : window, N = A.nodeName && A.nodeName.toLowerCase(), N === "select" || N === "input" && A.type === "file")
            var ot = Jh;
          else if (Kh(A))
            if (Fh)
              ot = JS;
            else {
              ot = KS;
              var Ot = QS;
            }
          else
            N = A.nodeName, !N || N.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? w && Wr(w.elementType) && (ot = Jh) : ot = PS;
          if (ot && (ot = ot(t, w))) {
            Ph(
              q,
              ot,
              n,
              V
            );
            break t;
          }
          Ot && Ot(t, A, w);
        }
        switch (Ot = w ? bl(w) : window, t) {
          case "focusin":
            (Kh(Ot) || Ot.contentEditable === "true") && (Ca = Ot, hu = w, Dl = null);
            break;
          case "focusout":
            Dl = hu = Ca = null;
            break;
          case "mousedown":
            mu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            mu = !1, am(q, n, V);
            break;
          case "selectionchange":
            if (IS) break;
          case "keydown":
          case "keyup":
            am(q, n, V);
        }
        var mt;
        if (ru)
          t: {
            switch (t) {
              case "compositionstart":
                var vt = "onCompositionStart";
                break t;
              case "compositionend":
                vt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                vt = "onCompositionUpdate";
                break t;
            }
            vt = void 0;
          }
        else
          Aa ? Zh(t, n) && (vt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (vt = "onCompositionStart");
        vt && (qh && n.locale !== "ko" && (Aa || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && Aa && (mt = Bh()) : (ai = V, iu = "value" in ai ? ai.value : ai.textContent, Aa = !0)), Ot = Qo(w, vt), 0 < Ot.length && (vt = new Gh(
          vt,
          t,
          null,
          n,
          V
        ), q.push({ event: vt, listeners: Ot }), mt ? vt.data = mt : (mt = Qh(n), mt !== null && (vt.data = mt)))), (mt = YS ? qS(t, n) : kS(t, n)) && (vt = Qo(w, "onBeforeInput"), 0 < vt.length && (Ot = new Gh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          V
        ), q.push({
          event: Ot,
          listeners: vt
        }), Ot.data = mt)), YT(
          q,
          t,
          w,
          n,
          V
        );
      }
      jg(q, e);
    });
  }
  function $l(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function Qo(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var s = t, u = s.stateNode;
      if (s = s.tag, s !== 5 && s !== 26 && s !== 27 || u === null || (s = Sl(t, n), s != null && a.unshift(
        $l(t, s, u)
      ), s = Sl(t, e), s != null && a.push(
        $l(t, s, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function ZT(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Bg(t, e, n, a, s) {
    for (var u = e._reactName, f = []; n !== null && n !== a; ) {
      var p = n, T = p.alternate, w = p.stateNode;
      if (p = p.tag, T !== null && T === a) break;
      p !== 5 && p !== 26 && p !== 27 || w === null || (T = w, s ? (w = Sl(n, u), w != null && f.unshift(
        $l(n, w, T)
      )) : s || (w = Sl(n, u), w != null && f.push(
        $l(n, w, T)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var QT = /\r\n?/g, KT = /\u0000|\uFFFD/g;
  function Lg(t) {
    return (typeof t == "string" ? t : "" + t).replace(QT, `
`).replace(KT, "");
  }
  function Hg(t, e) {
    return e = Lg(e), Lg(t) === e;
  }
  function Ht(t, e, n, a, s, u) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || Ta(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && Ta(t, "" + a);
        else return;
        break;
      case "className":
        Ls(t, "class", a);
        break;
      case "tabIndex":
        Ls(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ls(t, n, a);
        break;
      case "style":
        Vh(t, a, u);
        return;
      case "data":
        if (e !== "object") {
          Ls(t, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Hs(a), t.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (e !== "input" && Ht(t, e, "name", s.name, s, null), Ht(
            t,
            e,
            "formEncType",
            s.formEncType,
            s,
            null
          ), Ht(
            t,
            e,
            "formMethod",
            s.formMethod,
            s,
            null
          ), Ht(
            t,
            e,
            "formTarget",
            s.formTarget,
            s,
            null
          )) : (Ht(t, e, "encType", s.encType, s, null), Ht(t, e, "method", s.method, s, null), Ht(t, e, "target", s.target, s, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = Hs(a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Tn);
        return;
      case "onScroll":
        a != null && Dt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Dt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "multiple":
        t.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        t.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          t.removeAttribute("xlink:href");
          break;
        }
        n = Hs(a), t.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, "") : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? t.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? t.setAttribute(n, a) : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? t.removeAttribute(n) : t.setAttribute(n, a);
        break;
      case "popover":
        Dt("beforetoggle", t), Dt("toggle", t), Bs(t, "popover", a);
        break;
      case "xlinkActuate":
        Bn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Bn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Bn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Bn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Bn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Bn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Bn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Bn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Bn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        Bs(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = dS.get(n) || n, Bs(t, n, a);
        else return;
    }
    Vt = !0;
  }
  function Fc(t, e, n, a, s, u) {
    switch (n) {
      case "style":
        Vh(t, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (s.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Ta(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Ta(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Dt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Dt("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = Tn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Ah.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (s = n.endsWith("Capture"), u = n.slice(2, s ? n.length - 7 : void 0), e = t[Ne] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, s), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, a, s);
              break t;
            }
            Vt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : Bs(t, n, a);
          }
        return;
    }
    Vt = !0;
  }
  function be(t, e, n) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Dt("error", t), Dt("load", t);
        var a = !1, s = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var f = n[u];
            if (f != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  s = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Ht(t, e, u, f, n, null);
              }
          }
        s && Ht(t, e, "srcSet", n.srcSet, n, null), a && Ht(t, e, "src", n.src, n, null);
        return;
      case "input":
        Dt("invalid", t);
        var p = u = f = s = null, T = null, w = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var V = n[a];
            if (V != null)
              switch (a) {
                case "name":
                  s = V;
                  break;
                case "type":
                  f = V;
                  break;
                case "checked":
                  T = V;
                  break;
                case "defaultChecked":
                  w = V;
                  break;
                case "value":
                  u = V;
                  break;
                case "defaultValue":
                  p = V;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (V != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Ht(t, e, a, V, n, null);
              }
          }
        Oh(
          t,
          u,
          p,
          T,
          w,
          f,
          s,
          !1
        );
        return;
      case "select":
        Dt("invalid", t), a = f = u = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (p = n[s], p != null))
            switch (s) {
              case "value":
                u = p;
                break;
              case "defaultValue":
                f = p;
                break;
              case "multiple":
                a = p;
              default:
                Ht(t, e, s, p, n, null);
            }
        e = u, n = f, t.multiple = !!a, e != null ? Sa(t, !!a, e, !1) : n != null && Sa(t, !!a, n, !0);
        return;
      case "textarea":
        Dt("invalid", t), u = s = a = null;
        for (f in n)
          if (n.hasOwnProperty(f) && (p = n[f], p != null))
            switch (f) {
              case "value":
                a = p;
                break;
              case "defaultValue":
                s = p;
                break;
              case "children":
                u = p;
                break;
              case "dangerouslySetInnerHTML":
                if (p != null) throw Error(r(91));
                break;
              default:
                Ht(t, e, f, p, n, null);
            }
        Nh(t, a, s, u);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) && (a = n[T], a != null) && (T === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Ht(t, e, T, a, n, null));
        return;
      case "dialog":
        Dt("beforetoggle", t), Dt("toggle", t), Dt("cancel", t), Dt("close", t);
        break;
      case "iframe":
      case "object":
        Dt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Wl.length; a++)
          Dt(Wl[a], t);
        break;
      case "image":
        Dt("error", t), Dt("load", t);
        break;
      case "details":
        Dt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Dt("error", t), Dt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (w in n)
          if (n.hasOwnProperty(w) && (a = n[w], a != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ht(t, e, w, a, n, null);
            }
        return;
      default:
        if (Wr(e)) {
          for (V in n)
            n.hasOwnProperty(V) && (a = n[V], a !== void 0 && Fc(
              t,
              e,
              V,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (p in n)
      n.hasOwnProperty(p) && (a = n[p], a != null && Ht(t, e, p, a, n, null));
  }
  var PT = {};
  function JT(t, e, n, a) {
    switch (e) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var s = null, u = null, f = null, p = null, T = null, w = null, V = null;
        for (N in n) {
          var q = n[N];
          if (n.hasOwnProperty(N) && q != null)
            switch (N) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = q;
              default:
                a.hasOwnProperty(N) || Ht(t, e, N, null, a, q);
            }
        }
        for (var A in a) {
          var N = a[A];
          if (q = n[A], a.hasOwnProperty(A) && (N != null || q != null))
            switch (A) {
              case "type":
                N !== q && (Vt = !0), u = N;
                break;
              case "name":
                N !== q && (Vt = !0), s = N;
                break;
              case "checked":
                N !== q && (Vt = !0), w = N;
                break;
              case "defaultChecked":
                N !== q && (Vt = !0), V = N;
                break;
              case "value":
                N !== q && (Vt = !0), f = N;
                break;
              case "defaultValue":
                N !== q && (Vt = !0), p = N;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, e));
                break;
              default:
                N !== q && Ht(
                  t,
                  e,
                  A,
                  N,
                  a,
                  q
                );
            }
        }
        Fr(
          t,
          f,
          p,
          T,
          w,
          V,
          u,
          s
        );
        return;
      case "select":
        N = f = p = A = null;
        for (u in n)
          if (T = n[u], n.hasOwnProperty(u) && T != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                N = T;
              default:
                a.hasOwnProperty(u) || Ht(
                  t,
                  e,
                  u,
                  null,
                  a,
                  T
                );
            }
        for (s in a)
          if (u = a[s], T = n[s], a.hasOwnProperty(s) && (u != null || T != null))
            switch (s) {
              case "value":
                u !== T && (Vt = !0), A = u;
                break;
              case "defaultValue":
                u !== T && (Vt = !0), p = u;
                break;
              case "multiple":
                u !== T && (Vt = !0), f = u;
              default:
                u !== T && Ht(
                  t,
                  e,
                  s,
                  u,
                  a,
                  T
                );
            }
        e = p, n = f, a = N, A != null ? Sa(t, !!n, A, !1) : !!a != !!n && (e != null ? Sa(t, !!n, e, !0) : Sa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        N = A = null;
        for (p in n)
          if (s = n[p], n.hasOwnProperty(p) && s != null && !a.hasOwnProperty(p))
            switch (p) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ht(t, e, p, null, a, s);
            }
        for (f in a)
          if (s = a[f], u = n[f], a.hasOwnProperty(f) && (s != null || u != null))
            switch (f) {
              case "value":
                s !== u && (Vt = !0), A = s;
                break;
              case "defaultValue":
                s !== u && (Vt = !0), N = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && Ht(t, e, f, s, a, u);
            }
        Rh(t, A, N);
        return;
      case "option":
        for (var it in n)
          A = n[it], n.hasOwnProperty(it) && A != null && !a.hasOwnProperty(it) && (it === "selected" ? t.selected = !1 : Ht(
            t,
            e,
            it,
            null,
            a,
            A
          ));
        for (T in a)
          A = a[T], N = n[T], a.hasOwnProperty(T) && A !== N && (A != null || N != null) && (T === "selected" ? (A !== N && (Vt = !0), t.selected = A && typeof A != "function" && typeof A != "symbol") : Ht(
            t,
            e,
            T,
            A,
            a,
            N
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ct in n)
          A = n[ct], n.hasOwnProperty(ct) && A != null && !a.hasOwnProperty(ct) && Ht(t, e, ct, null, a, A);
        for (w in a)
          if (A = a[w], N = n[w], a.hasOwnProperty(w) && A !== N && (A != null || N != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, e));
                break;
              default:
                Ht(
                  t,
                  e,
                  w,
                  A,
                  a,
                  N
                );
            }
        return;
      default:
        if (Wr(e)) {
          for (var Et in n)
            A = n[Et], n.hasOwnProperty(Et) && A !== void 0 && !a.hasOwnProperty(Et) && Fc(
              t,
              e,
              Et,
              void 0,
              a,
              A
            );
          for (V in a)
            A = a[V], N = n[V], !a.hasOwnProperty(V) || A === N || A === void 0 && N === void 0 || Fc(
              t,
              e,
              V,
              A,
              a,
              N
            );
          return;
        }
    }
    for (var C in n)
      A = n[C], n.hasOwnProperty(C) && A != null && !a.hasOwnProperty(C) && Ht(t, e, C, null, a, A);
    for (q in a)
      A = a[q], N = n[q], !a.hasOwnProperty(q) || A === N || A == null && N == null || Ht(t, e, q, A, a, N);
  }
  function Gg(t) {
    switch (t) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function FT() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], u = s.transferSize, f = s.initiatorType, p = s.duration;
        if (u && p && Gg(f)) {
          for (f = 0, p = s.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a], w = T.startTime;
            if (w > p) break;
            var V = T.transferSize, q = T.initiatorType;
            V && Gg(q) && (T = T.responseEnd, f += V * (T < p ? 1 : (p - w) / (T - w)));
          }
          if (--a, e += 8 * (u + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ic = null, Wc = null;
  function ts(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Yg(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function qg(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function kg(t, e, n, a) {
    return n = ts(
      n
    ).createElement(t), n[me] = a, n[Ne] = e, be(n, t, e), ce(n), n;
  }
  function $c(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var tf = null;
  function IT() {
    var t = window.event;
    return t && t.type === "popstate" ? t === tf ? !1 : (tf = t, !0) : (tf = null, !1);
  }
  var ef = typeof setTimeout == "function" ? setTimeout : void 0, WT = typeof clearTimeout == "function" ? clearTimeout : void 0, Xg = typeof Promise == "function" ? Promise : void 0, Zg = typeof requestAnimationFrame == "function" ? requestAnimationFrame : ef, $T = typeof queueMicrotask == "function" ? queueMicrotask : typeof Xg < "u" ? function(t) {
    return Xg.resolve(null).then(t).catch(tx);
  } : ef;
  function tx(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ai(t) {
    return t === "head";
  }
  function Qg(t, e) {
    var n = e, a = 0;
    do {
      var s = n.nextSibling;
      if (t.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(s), al(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          cf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, cf(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, p = u.nodeName;
            u[vl] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && cf(t.ownerDocument.body);
      n = s;
    } while (n);
    al(e);
  }
  function Kg(t, e) {
    var n = t;
    t = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? e ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (e ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (t === 0) break;
          t--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || t++;
      n = a;
    } while (n);
  }
  function Pg(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var a = 1;
      else
        for (var s = a = 0; s < e.length; s++) {
          var u = e[s];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function Jg(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function ex(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function nf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return ex(e, n, t);
  }
  function nx(t) {
    return t.documentElement.clientHeight;
  }
  function ix(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function ax(t, e, n, a, s, u, f, p, T) {
    var w = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var V = w.startViewTransition({
        update: function() {
          var A = w.defaultView, N = A.navigation && A.navigation.transition, it = w.fonts.status;
          a();
          var ct = [];
          if (it === "loaded" && (nx(w), w.fonts.status === "loading" && ct.push(w.fonts.ready)), it = ct.length, t !== null)
            for (var Et = t.suspenseyImages, C = 0, E = 0; E < Et.length; E++) {
              var O = Et[E];
              if (!O.complete) {
                var Y = O.getBoundingClientRect();
                if (0 < Y.bottom && 0 < Y.right && Y.top < A.innerHeight && Y.left < A.innerWidth) {
                  if (C += gy(O), C > Jo) {
                    ct.length = it;
                    break;
                  }
                  O = new Promise(
                    ix.bind(O)
                  ), ct.push(O);
                }
              }
            }
          if (0 < ct.length)
            return A = Promise.race([
              Promise.all(ct),
              new Promise(function(ot) {
                return setTimeout(ot, 500);
              })
            ]).then(s, s), (N ? Promise.allSettled([N.finished, A]) : A).then(u, u);
          if (s(), N)
            return N.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      w.__reactViewTransition = V;
      var q = [];
      return V.ready.then(
        function() {
          for (var A = w.documentElement.getAnimations({
            subtree: !0
          }), N = 0; N < A.length; N++) {
            var it = A[N], ct = it.effect, Et = ct.pseudoElement;
            if (Et != null && Et.startsWith("::view-transition")) {
              q.push(it), it = ct.getKeyframes();
              for (var C = Et = void 0, E = !0, O = 0; O < it.length; O++) {
                var Y = it[O], ot = Y.width;
                if (Et === void 0) Et = ot;
                else if (Et !== ot) {
                  E = !1;
                  break;
                }
                if (ot = Y.height, C === void 0) C = ot;
                else if (C !== ot) {
                  E = !1;
                  break;
                }
                delete Y.width, delete Y.height, Y.transform === "none" && delete Y.transform;
              }
              E && Et !== void 0 && C !== void 0 && (ct.setKeyframes(it), E = getComputedStyle(
                ct.target,
                ct.pseudoElement
              ), E.width !== Et || E.height !== C) && (E = it[0], E.width = Et, E.height = C, E = it[it.length - 1], E.width = Et, E.height = C, ct.setKeyframes(it));
            }
          }
          f();
        },
        function(A) {
          w.__reactViewTransition === V && (w.__reactViewTransition = null);
          try {
            typeof A == "object" && A !== null && A.name === "InvalidStateError" && (A.message === "View transition was skipped because document visibility state is hidden." || A.message === "Skipping view transition because document visibility state has become hidden." || A.message === "Skipping view transition because viewport size changed." || A.message === "Transition was aborted because of invalid state") && (A = null), A !== null && T(A);
          } finally {
            a(), s(), f();
          }
        }
      ), V.finished.finally(function() {
        for (var A = 0; A < q.length; A++)
          q[A].cancel();
        w.__reactViewTransition === V && (w.__reactViewTransition = null), p();
      }), V;
    } catch {
      return a(), s(), f(), null;
    }
  }
  function aa(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  aa.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : j({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, aa.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], s = 0; s < n.length; s++) {
      var u = n[s].effect;
      u !== null && u.target === t && u.pseudoElement === e && a.push(n[s]);
    }
    return a;
  }, aa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Fg(t) {
    return {
      name: t,
      group: new aa("group", t),
      imagePair: new aa("image-pair", t),
      old: new aa("old", t),
      new: new aa("new", t)
    };
  }
  function Je(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Je.prototype.addEventListener = function(t, e, n) {
    var a = null, s = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Wg(u, t, e, n) === -1) {
        var f = this, p = e;
        n != null && typeof n != "boolean" && n.once === !0 && (p = function(T) {
          f.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, T) : e.handleEvent(T);
        }), a !== null && (s = f.removeEventListener.bind(
          f,
          t,
          e,
          n
        ), a.addEventListener("abort", s, { once: !0 }), s = a.removeEventListener.bind(a, "abort", s)), a = Wa(n), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: p,
          cleanup: s
        }), y(
          this._fragmentFiber.child,
          !1,
          lx,
          t,
          p,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function lx(t, e, n, a) {
    return R(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  Je.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = Wg(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var s = a[e];
      n = s.attachedListener;
      var u = s.cleanup;
      s = Wa(s.optionsOrUseCapture), y(
        this._fragmentFiber.child,
        !1,
        sx,
        t,
        n,
        s
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function sx(t, e, n, a) {
    return R(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function Wa(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Ig(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Wg(t, e, n, a) {
    if (t.length === 0) return -1;
    a = Ig(a);
    for (var s = 0; s < t.length; s++) {
      var u = t[s];
      if (u.type === e && u.listener === n && Ig(u.optionsOrUseCapture) === a)
        return s;
    }
    return -1;
  }
  Je.prototype.dispatchEvent = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = R(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var a = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.addEventListener(
            u.type,
            u.attachedListener,
            Wa(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (s = 0; s < n.length; s++)
          u = n[s], a.removeEventListener(
            u.type,
            u.attachedListener,
            Wa(u.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, Je.prototype.focus = function(t) {
    y(
      this._fragmentFiber.child,
      !0,
      $g,
      t,
      void 0,
      void 0
    );
  };
  function $g(t, e) {
    return t.tag === 6 ? !1 : (t = R(t), vx(t, e));
  }
  Je.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      af,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !$g(e[n], t); n--) ;
  };
  function af(t, e) {
    return e.push(t), !1;
  }
  Je.prototype.blur = function() {
    var t = S(
      this._fragmentFiber
    );
    t !== null && (t = R(t), t = ts(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      ox,
      t,
      void 0,
      void 0
    ));
  };
  function ox(t, e) {
    return t.tag === 6 ? !1 : (t = R(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Je.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      rx,
      t,
      void 0,
      void 0
    );
  };
  function rx(t, e) {
    return t.tag === 6 || (t = R(t), e.observe(t)), !1;
  }
  Je.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        ux,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < pn.length; n++) {
        var a = pn[n];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : pn[e++] = a;
      }
      pn.length = e;
    }
  };
  function ux(t, e) {
    return t.tag === 6 || (t = R(t), e.unobserve(t)), !1;
  }
  var pn = [], lf = !1;
  function cx(t, e, n) {
    pn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), lf || (lf = !0, bx(function() {
      lf = !1;
      var a = pn;
      pn = [];
      for (var s = 0; s < a.length; s++) {
        var u = a[s];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Je.prototype.getClientRects = function() {
    var t = [];
    return y(
      this._fragmentFiber.child,
      !1,
      fx,
      t,
      void 0,
      void 0
    ), t;
  };
  function fx(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = R(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Je.prototype.getRootNode = function(t) {
    var e = S(
      this._fragmentFiber
    );
    return e === null ? this : R(e).getRootNode(t);
  }, Je.prototype.compareDocumentPosition = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    y(
      this._fragmentFiber.child,
      !1,
      af,
      n,
      void 0,
      void 0
    );
    var a = R(e);
    if (n.length === 0) {
      if (n = a, z(this._fragmentFiber)) {
        t: {
          for (e = this._fragmentFiber.return; e !== null; ) {
            if (e.tag === 4) {
              e = e.stateNode.containerInfo;
              break t;
            }
            if (e.tag === 3 || e.tag === 5 || e.tag === 27)
              break;
            e = e.return;
          }
          e = null;
        }
        e != null && (n = e);
      }
      e = this._fragmentFiber;
      var s = a = n.compareDocumentPosition(t);
      return n === t ? s = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = D(e)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (t = R(n).compareDocumentPosition(
        t
      ), s = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = R(n[0]), s = R(n[n.length - 1]);
    var u = z(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), p = s.compareDocumentPosition(t), T = f & Node.DOCUMENT_POSITION_CONTAINED_BY || p & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return p = a && u && f & Node.DOCUMENT_POSITION_FOLLOWING && p & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && s === t || T || p ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && s === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || dx(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function dx(t, e, n, a, s) {
    var u = Bi(s);
    if (t & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!u)
        t: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === e || u.alternate === e)) {
              n = !0;
              break t;
            }
            u = u.return;
          }
          n = !1;
        }
      return n;
    }
    if (t & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = s.ownerDocument, s === u || s === u.documentElement || s === u.body;
      t: {
        for (u = e, e = S(e); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== e && u.alternate !== e)) {
            u = !0;
            break t;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === n) && (e = at(
      n,
      u,
      st
    ), e === null ? e = !1 : (y(
      e,
      !0,
      F,
      u,
      n
    ), u = K, K = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === a) && (e = at(
      a,
      u,
      st
    ), e === null ? e = !1 : (y(
      e,
      !0,
      U,
      u,
      a
    ), u = K, P = K = null, e = u !== null)), e) : !1;
  }
  function ty(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Je.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    y(
      this._fragmentFiber.child,
      !1,
      af,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var a = D(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || S(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = R(a), ty(t, n);
        return;
      }
      if (a = R(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var s = e[a];
      s.tag === 6 ? (s = R(s), ty(s, n)) : R(s).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function hx(t, e) {
    return t = R(t), ey(t, e), !1;
  }
  function ey(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function ny(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.addEventListener(
          s.type,
          s.attachedListener,
          Wa(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      for (var f = 0, p = 0; p < pn.length; p++) {
        var T = pn[p];
        (T.fragmentInstance !== e || T.observer !== u || T.instance !== t) && (pn[f++] = T);
      }
      pn.length = f, u.observe(t);
    }), ey(t, e));
  }
  function mx(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var s = n[a];
        t.removeEventListener(
          s.type,
          s.attachedListener,
          Wa(s.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? cx(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function sf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          sf(n), Us(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function px(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var s = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[vl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== s.rel || t.getAttribute("href") !== (s.href == null || s.href === "" ? null : s.href) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin) || t.getAttribute("title") !== (s.title == null ? null : s.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (s.src == null ? null : s.src) || t.getAttribute("type") !== (s.type == null ? null : s.type) || t.getAttribute("crossorigin") !== (s.crossOrigin == null ? null : s.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = s.name == null ? null : "" + s.name;
        if (s.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = on(t.nextSibling), t === null) break;
    }
    return null;
  }
  function gx(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = on(t.nextSibling), t === null)) return null;
    return t;
  }
  function iy(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = on(t.nextSibling), t === null)) return null;
    return t;
  }
  function of(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function rf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function yx(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading")
      e();
    else {
      var a = function() {
        e(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), t._reactRetry = a;
    }
  }
  function on(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (e = t.data, e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&" || e === "F!" || e === "F")
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var uf = null;
  function ay(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return on(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function ly(t) {
    t = t.previousSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else n !== "/$" && n !== "/&" || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function vx(t, e) {
    function n() {
      a = !0;
    }
    if (t.ownerDocument.activeElement === t) return !0;
    var a = !1;
    try {
      t.ownerDocument.addEventListener("focus", n, !0), (t.focus || HTMLElement.prototype.focus).call(t, e);
    } finally {
      t.ownerDocument.removeEventListener("focus", n, !0);
    }
    return a;
  }
  function bx(t) {
    Zg(function() {
      Zg(function(e) {
        return t(e);
      });
    });
  }
  function sy(t, e, n) {
    switch (e = ts(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(r(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(r(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(r(454));
        return t;
      default:
        throw Error(r(451));
    }
  }
  function oy(t, e, n) {
    for (var a in n) {
      var s = n[a];
      n.hasOwnProperty(a) && s != null && Ht(t, e, a, null, PT, s);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Tn && (t.onclick = null), Us(t);
  }
  function cf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Us(t);
  }
  var rn = /* @__PURE__ */ new Map(), ry = /* @__PURE__ */ new Set();
  function es(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Fn = ht.d;
  ht.d = {
    f: Sx,
    r: Tx,
    D: xx,
    C: Ex,
    L: Ax,
    m: Cx,
    X: Mx,
    S: wx,
    M: Dx
  };
  function Sx() {
    var t = Fn.f(), e = Go();
    return t || e;
  }
  function Tx(t) {
    var e = ya(t);
    e !== null && e.tag === 5 && e.type === "form" ? cp(e) : Fn.r(t);
  }
  var $a = typeof document > "u" ? null : document;
  function uy(t, e, n) {
    var a = $a;
    if (a && typeof e == "string" && e) {
      var s = $e(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), ry.has(s) || (ry.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), be(e, "link", t), ce(e), a.head.appendChild(e)));
    }
  }
  function xx(t) {
    Fn.D(t), uy("dns-prefetch", t, null);
  }
  function Ex(t, e) {
    Fn.C(t, e), uy("preconnect", t, e);
  }
  function Ax(t, e, n) {
    Fn.L(t, e, n);
    var a = $a;
    if (a && t && e) {
      var s = 'link[rel="preload"][as="' + $e(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (s += '[imagesrcset="' + $e(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (s += '[imagesizes="' + $e(
        n.imageSizes
      ) + '"]')) : s += '[href="' + $e(t) + '"]';
      var u = s;
      switch (e) {
        case "style":
          u = tl(t);
          break;
        case "script":
          u = el(t);
      }
      if (!(rn.has(u) || (t = j(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), rn.set(u, t), a.querySelector(s) !== null || e === "style" && a.querySelector(ns(u)) || e === "script" && a.querySelector(is(u))))) {
        var f = a.createElement("link");
        be(f, "link", t), e === "style" && (f[js] = !0, f.onload = f.onerror = function() {
          xh(f);
        }), ce(f), a.head.appendChild(f);
      }
    }
  }
  function Cx(t, e) {
    Fn.m(t, e);
    var n = $a;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", s = 'link[rel="modulepreload"][as="' + $e(a) + '"][href="' + $e(t) + '"]', u = s;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = el(t);
      }
      if (!rn.has(u) && (t = j({ rel: "modulepreload", href: t }, e), rn.set(u, t), n.querySelector(s) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(is(u)))
              return;
        }
        a = n.createElement("link"), be(a, "link", t), ce(a), n.head.appendChild(a);
      }
    }
  }
  function wx(t, e, n) {
    Fn.S(t, e, n);
    var a = $a;
    if (a && t) {
      var s = va(a).hoistableStyles, u = tl(t);
      e = e || "default";
      var f = s.get(u);
      if (!f) {
        var p = { loading: 0, preload: null };
        if (f = a.querySelector(
          ns(u)
        ))
          p.loading = 5;
        else {
          t = j(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = rn.get(u)) && ff(t, n);
          var T = f = a.createElement("link");
          ce(T), be(T, "link", t), T._p = new Promise(function(w, V) {
            T.onload = w, T.onerror = V;
          }), T.addEventListener("load", function() {
            p.loading |= 1;
          }), T.addEventListener("error", function() {
            p.loading |= 2;
          }), p.loading |= 4, Ko(f, e, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: p
        }, s.set(u, f);
      }
    }
  }
  function Mx(t, e) {
    Fn.X(t, e);
    var n = $a;
    if (n && t) {
      var a = va(n).hoistableScripts, s = el(t), u = a.get(s);
      u || (u = n.querySelector(is(s)), u || (t = j({ src: t, async: !0 }, e), (e = rn.get(s)) && df(t, e), u = n.createElement("script"), ce(u), be(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function Dx(t, e) {
    Fn.M(t, e);
    var n = $a;
    if (n && t) {
      var a = va(n).hoistableScripts, s = el(t), u = a.get(s);
      u || (u = n.querySelector(is(s)), u || (t = j({ src: t, async: !0, type: "module" }, e), (e = rn.get(s)) && df(t, e), u = n.createElement("script"), ce(u), be(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function cy(t, e, n, a) {
    var s = (s = Ce.current) ? es(s) : null;
    if (!s) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = tl(n.href), e = va(
          s
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = tl(n.href);
          var u = va(
            s
          ).hoistableStyles, f = u.get(t);
          if (f || (s = s.ownerDocument || s, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, f), (u = s.querySelector(
            ns(t)
          )) ? u._p || (f.instance = u, f.state.loading = 5) : (u = rn.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, rn.set(t, u)), zx(
            s,
            t,
            u,
            f.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return f;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = el(n), e = va(
          s
        ).hoistableScripts, a = e.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(r(444, t));
    }
  }
  function tl(t) {
    return 'href="' + $e(t) + '"';
  }
  function ns(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function fy(t) {
    return j({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function zx(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[js] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[js] = !0, e.onload = e.onerror = xh.bind(null, e), be(e, "link", n), ce(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function el(t) {
    return '[src="' + $e(t) + '"]';
  }
  function is(t) {
    return "script[async]" + t;
  }
  function dy(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + $e(n.href) + '"]'
          );
          if (a)
            return e.instance = a, ce(a), a;
          var s = j({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), ce(a), be(a, "style", s), Ko(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          s = tl(n.href);
          var u = t.querySelector(
            ns(s)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, ce(u), u;
          a = fy(n), (s = rn.get(s)) && ff(a, s), u = (t.ownerDocument || t).createElement("link"), ce(u);
          var f = u;
          return f._p = new Promise(function(p, T) {
            f.onload = p, f.onerror = T;
          }), be(u, "link", a), e.state.loading |= 4, Ko(u, n.precedence, t), e.instance = u;
        case "script":
          return u = el(n.src), (s = t.querySelector(
            is(u)
          )) ? (e.instance = s, ce(s), s) : (a = n, (s = rn.get(u)) && (a = j({}, n), df(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), ce(s), be(s, "link", a), t.head.appendChild(s), e.instance = s);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, Ko(a, n.precedence, t));
    return e.instance;
  }
  function Ko(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), s = a.length ? a[a.length - 1] : null, u = s, f = 0; f < a.length; f++) {
      var p = a[f];
      if (p.dataset.precedence === e) u = p;
      else if (u !== s) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function ff(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function df(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Po = null;
  function hy(t, e, n) {
    if (Po === null) {
      var a = /* @__PURE__ */ new Map(), s = Po = /* @__PURE__ */ new Map();
      s.set(n, a);
    } else
      s = Po, a = s.get(n), a || (a = /* @__PURE__ */ new Map(), s.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), s = 0; s < n.length; s++) {
      var u = n[s];
      if (!(u[vl] || u[me] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = u.getAttribute(e) || "";
        f = t + f;
        var p = a.get(f);
        p ? p.push(u) : a.set(f, [u]);
      }
    }
    return a;
  }
  function hf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function Ox(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof e.precedence != "string" || typeof e.href != "string" || e.href === "")
          break;
        return !0;
      case "link":
        if (typeof e.rel != "string" || typeof e.href != "string" || e.href === "" || e.onLoad || e.onError)
          break;
        return e.rel === "stylesheet" ? (t = e.disabled, typeof e.precedence == "string" && t == null) : !0;
      case "script":
        if (e.async && typeof e.async != "function" && typeof e.async != "symbol" && !e.onLoad && !e.onError && e.src && typeof e.src == "string")
          return !0;
    }
    return !1;
  }
  function my(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function py(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function gy(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function yy(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += gy(e), t.suspenseyImages.push(e)), t = _x.bind(t), e.decode().then(t, t));
  }
  function Rx(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = tl(a.href), u = e.querySelector(
          ns(s)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = as.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, ce(u);
          return;
        }
        u = e.ownerDocument || e, a = fy(a), (s = rn.get(s)) && ff(a, s), u = u.createElement("link"), ce(u);
        var f = u;
        f._p = new Promise(function(p, T) {
          f.onload = p, f.onerror = T;
        }), be(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = as.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Jo = 0;
  function Nx(t, e) {
    return t.stylesheets && t.count === 0 && Io(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Io(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Jo === 0 && (Jo = 62500 * FT());
      var s = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Io(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Jo ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(s);
      };
    } : null;
  }
  function vy(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Io(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function as() {
    this.count--, vy(this);
  }
  function _x() {
    this.imgCount--, vy(this);
  }
  var Fo = null;
  function Io(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Fo = /* @__PURE__ */ new Map(), e.forEach(Vx, t), Fo = null, as.call(t));
  }
  function Vx(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Fo.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Fo.set(t, n);
        for (var s = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < s.length; u++) {
          var f = s[u];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (n.set(f.dataset.precedence, f), a = f);
        }
        a && n.set(null, a);
      }
      s = e.instance, f = s.getAttribute("data-precedence"), u = n.get(f) || a, u === a && n.set(null, s), n.set(f, s), this.count++, a = as.bind(this), s.addEventListener("load", a), s.addEventListener("error", a), u ? u.parentNode.insertBefore(s, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(s, t.firstChild)), e.state.loading |= 4;
    }
  }
  var nl = {
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0
  };
  function jx(t, e, n, a, s, u, f, p, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qr(0), this.hiddenUpdates = Qr(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function by(t, e, n, a, s, u, f, p, T, w, V, q) {
    return t = new jx(
      t,
      e,
      n,
      f,
      T,
      w,
      V,
      q,
      p
    ), e = 1, u === !0 && (e |= 24), u = _e(3, null, null, e), t.current = u, u.stateNode = t, e = Mu(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, Ru(u), t;
  }
  function Sy(t) {
    return t ? (t = Da, t) : Da;
  }
  function Ty(t, e, n, a, s, u) {
    s = Sy(s), a.context === null ? a.context = s : a.pendingContext = s, a = di(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = hi(t, a, e), n !== null && (Be(n, t, e), jl(n, t, e));
  }
  function xy(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function mf(t, e) {
    xy(t, e), (t = t.alternate) && xy(t, e);
  }
  function Ey(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Yi(t, 67108864);
      e !== null && Be(e, t, 67108864), mf(t, 67108864);
    }
  }
  function Ay(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Pe();
      e = Kr(e);
      var n = Yi(t, e);
      n !== null && Be(n, t, e), mf(t, e);
    }
  }
  var il = !0;
  function Ux(t, e, n, a) {
    var s = lt.T;
    lt.T = null;
    var u = ht.p;
    try {
      ht.p = 2, pf(t, e, n, a);
    } finally {
      ht.p = u, lt.T = s;
    }
  }
  function Bx(t, e, n, a) {
    var s = lt.T;
    lt.T = null;
    var u = ht.p;
    try {
      ht.p = 8, pf(t, e, n, a);
    } finally {
      ht.p = u, lt.T = s;
    }
  }
  function pf(t, e, n, a) {
    if (il) {
      var s = gf(a);
      if (s === null)
        Jc(
          t,
          e,
          a,
          Wo,
          n
        ), wy(t, a);
      else if (Hx(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (wy(t, a), e & 4 && -1 < Lx.indexOf(t)) {
        for (; s !== null; ) {
          var u = ya(s);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var f = Ui(u.pendingLanes);
                  if (f !== 0) {
                    var p = u;
                    for (p.pendingLanes |= 2, p.entangledLanes |= 2; f; ) {
                      var T = 1 << 31 - Ye(f);
                      p.entanglements[1] |= T, f &= ~T;
                    }
                    Rn(u), (jt & 6) === 0 && (Bo = He() + 500, Il(0));
                  }
                }
                break;
              case 31:
              case 13:
                p = Yi(u, 2), p !== null && Be(p, u, 2), Go(), mf(u, 2);
            }
          if (u = gf(a), u === null && Jc(
            t,
            e,
            a,
            Wo,
            n
          ), u === s) break;
          s = u;
        }
        s !== null && a.stopPropagation();
      } else
        Jc(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function gf(t) {
    return t = tu(t), yf(t);
  }
  var Wo = null;
  function yf(t) {
    if (Wo = null, t = Bi(t), t !== null) {
      var e = h(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = d(e), t !== null) return t;
          t = null;
        } else if (n === 31) {
          if (t = m(e), t !== null) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return Wo = t, null;
  }
  function Cy(t) {
    switch (t) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (F1()) {
          case ch:
            return 2;
          case fh:
            return 8;
          case Os:
          case I1:
            return 32;
          case dh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vf = !1, Ci = null, wi = null, Mi = null, ls = /* @__PURE__ */ new Map(), ss = /* @__PURE__ */ new Map(), Di = [], Lx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function wy(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ci = null;
        break;
      case "dragenter":
      case "dragleave":
        wi = null;
        break;
      case "mouseover":
      case "mouseout":
        Mi = null;
        break;
      case "pointerover":
      case "pointerout":
        ls.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ss.delete(e.pointerId);
    }
  }
  function os(t, e, n, a, s, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [s]
    }, e !== null && (e = ya(e), e !== null && Ey(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function Hx(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return Ci = os(
          Ci,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return wi = os(
          wi,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "mouseover":
        return Mi = os(
          Mi,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "pointerover":
        var u = s.pointerId;
        return ls.set(
          u,
          os(
            ls.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
      case "gotpointercapture":
        return u = s.pointerId, ss.set(
          u,
          os(
            ss.get(u) || null,
            t,
            e,
            n,
            a,
            s
          )
        ), !0;
    }
    return !1;
  }
  function My(t) {
    var e = Bi(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, bh(t.priority, function() {
              Ay(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, bh(t.priority, function() {
              Ay(n);
            });
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function $o(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = gf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        $r = a, n.target.dispatchEvent(a), $r = null;
      } else
        return e = ya(n), e !== null && Ey(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function Dy(t, e, n) {
    $o(t) && n.delete(e);
  }
  function Gx() {
    vf = !1, Ci !== null && $o(Ci) && (Ci = null), wi !== null && $o(wi) && (wi = null), Mi !== null && $o(Mi) && (Mi = null), ls.forEach(Dy), ss.forEach(Dy);
  }
  function tr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, vf || (vf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Gx
    )));
  }
  var er = null;
  function zy(t) {
    er !== t && (er = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        er === t && (er = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (yf(a || n) === null)
              continue;
            break;
          }
          var u = ya(n);
          u !== null && (t.splice(e, 3), e -= 3, Wu(
            u,
            {
              pending: !0,
              data: s,
              method: n.method,
              action: a
            },
            a,
            s
          ));
        }
      }
    ));
  }
  function al(t) {
    function e(T) {
      return tr(T, t);
    }
    Ci !== null && tr(Ci, t), wi !== null && tr(wi, t), Mi !== null && tr(Mi, t), ls.forEach(e), ss.forEach(e);
    for (var n = 0; n < Di.length; n++) {
      var a = Di[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Di.length && (n = Di[0], n.blockedOn === null); )
      My(n), n.blockedOn === null && Di.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], u = n[a + 1], f = s[Ne] || null;
        if (typeof u == "function")
          f || zy(n);
        else if (f) {
          var p = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, f = u[Ne] || null)
              p = f.formAction;
            else if (yf(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? n[a + 1] = p : (n.splice(a, 3), a -= 3), zy(n);
        }
      }
  }
  function Oy() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(f) {
            return s = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      s !== null && (s(), s = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, s = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), s !== null && (s(), s = null);
      };
    }
  }
  function bf(t) {
    this._internalRoot = t;
  }
  nr.prototype.render = bf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = Pe();
    Ty(n, a, t, e, null, null);
  }, nr.prototype.unmount = bf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      Ty(t.current, 2, null, t, null, null), Go(), e[ga] = null;
    }
  };
  function nr(t) {
    this._internalRoot = t;
  }
  nr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = vh();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Di.length && e !== 0 && e < Di[n].priority; n++) ;
      Di.splice(n, 0, t), n === 0 && My(t);
    }
  };
  var Ry = l.version;
  if (Ry !== "19.3.0")
    throw Error(
      r(
        527,
        Ry,
        "19.3.0"
      )
    );
  ht.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = v(e), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var Yx = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: lt,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ir.isDisabled && ir.supportsFiber)
      try {
        pl = ir.inject(
          Yx
        ), Ge = ir;
      } catch {
      }
  }
  return us.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, a = "", s = Sp, u = Tp, f = xp;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = by(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      s,
      u,
      f,
      Oy
    ), t[ga] = e.current, Pc(t), new bf(e);
  }, us.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var a = !1, s = "", u = Sp, f = Tp, p = xp, T = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = by(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      s,
      T,
      u,
      f,
      p,
      Oy
    ), e.context = Sy(null), n = e.current, a = Pe(), a = Kr(a), s = di(a), s.callback = null, hi(n, s, a), n = a, e.current.lanes = n, yl(e, n), Rn(e), t[ga] = e.current, Pc(t), new nr(e);
  }, us.version = "19.3.0", us;
}
var Yy;
function Wx() {
  if (Yy) return Tf.exports;
  Yy = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Tf.exports = Ix(), Tf.exports;
}
var qy = Wx(), Z = Ed();
const $x = /* @__PURE__ */ Xx(Z), tE = /* @__PURE__ */ kx({
  __proto__: null,
  default: $x
}, [Z]);
var eE = v0(), nE = Object.defineProperty, Ad = (i, l) => nE(i, "name", { value: l, configurable: !0 });
function If(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
Ad(If, "setRef");
function b0(...i) {
  return (l) => {
    let o = !1;
    const r = i.map((c) => {
      const h = If(c, l);
      return !o && typeof h == "function" && (o = !0), h;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const h = r[c];
          typeof h == "function" ? h() : If(i[c], null);
        }
      };
  };
}
Ad(b0, "composeRefs");
function S0(...i) {
  return Z.useCallback(b0(...i), i);
}
Ad(S0, "useComposedRefs");
var iE = Object.defineProperty, We = (i, l) => iE(i, "name", { value: l, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function T0(i) {
  const l = Z.forwardRef((o, r) => {
    let { children: c, ...h } = o, d = null, m = !1;
    const g = [];
    c = M0(c), Z.Children.forEach(c, (S) => {
      if (C0(S)) {
        m = !0;
        const z = S;
        let D = "child" in z.props ? z.props.child : z.props.children;
        for (; Cd(D) && typeof Sr == "function"; )
          D = Sr(D._payload);
        d = lE(z, D), g.push(d?.props?.children);
      } else
        g.push(S);
    }), d ? d = Z.cloneElement(d, void 0, g) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && Z.Children.count(c) === 1 && Z.isValidElement(c) && (d = c)
    );
    const v = d ? A0(d) : void 0, b = S0(r, v);
    if (!d) {
      if (c || c === 0)
        throw new Error(
          m ? rE(i) : oE(i)
        );
      return c;
    }
    const y = E0(h, d.props ?? {});
    return d.type !== Z.Fragment && (y.ref = r ? b : v), Z.cloneElement(d, y);
  });
  return l.displayName = `${i}.Slot`, l;
}
We(T0, "createSlot");
var x0 = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function aE(i) {
  const l = /* @__PURE__ */ We((o) => "child" in o ? o.children(o.child) : o.children, "Slottable");
  return l.displayName = `${i}.Slottable`, l.__radixId = x0, l;
}
We(aE, "createSlottable");
var lE = /* @__PURE__ */ We((i, l) => "child" in i.props ? Z.isValidElement(l) ? Z.cloneElement(l, void 0, i.props.children(l.props.children)) : null : Z.isValidElement(l) ? l : null, "getSlottableElementFromSlottable");
function E0(i, l) {
  const o = { ...l };
  for (const r in l) {
    const c = i[r], h = l[r];
    /^on[A-Z]/.test(r) ? c && h ? o[r] = (...m) => {
      const g = h(...m);
      return c(...m), g;
    } : c && (o[r] = c) : r === "style" ? o[r] = { ...c, ...h } : r === "className" ? o[r] = [c, h].filter(Boolean).join(" ") : r === "aria-describedby" && (o[r] = D0(h, c));
  }
  return { ...i, ...o };
}
We(E0, "mergeProps");
function A0(i) {
  let l = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, o = l && "isReactWarning" in l && l.isReactWarning;
  return o ? i.ref : (l = Object.getOwnPropertyDescriptor(i, "ref")?.get, o = l && "isReactWarning" in l && l.isReactWarning, o ? i.props.ref : i.props.ref || i.ref);
}
We(A0, "getElementRef");
function C0(i) {
  return Z.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === x0;
}
We(C0, "isSlottable");
var sE = /* @__PURE__ */ Symbol.for("react.lazy");
function Cd(i) {
  return i != null && typeof i == "object" && "$$typeof" in i && i.$$typeof === sE && "_payload" in i && w0(i._payload);
}
We(Cd, "isLazyComponent");
function w0(i) {
  return typeof i == "object" && i !== null && "then" in i;
}
We(w0, "isPromiseLike");
function M0(i) {
  let l = i;
  for (; Cd(l) && typeof Sr == "function"; )
    l = Sr(l._payload);
  return l;
}
We(M0, "useUnwrappedLazy");
function D0(...i) {
  const l = /* @__PURE__ */ new Set();
  for (const o of i)
    if (typeof o == "string")
      for (const r of String(o).trim().split(/\s+/))
        r && l.add(r);
  return l.size > 0 ? Array.from(l).join(" ") : void 0;
}
We(D0, "concatAriaDescribedby");
var oE = /* @__PURE__ */ We((i) => `${i} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), rE = /* @__PURE__ */ We((i) => `${i} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Sr = tE[" use ".trim().toString()], uE = Object.defineProperty, cE = (i, l) => uE(i, "name", { value: l, configurable: !0 }), fE = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], dE = fE.reduce((i, l) => {
  const o = /* @__PURE__ */ T0(`Primitive.${l}`), r = Z.forwardRef((c, h) => {
    const { asChild: d, ...m } = c, g = d ? o : l;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ B.jsx(g, { ...m, ref: h });
  });
  return r.displayName = `Primitive.${l}`, { ...i, [l]: r };
}, {});
function hE(i, l) {
  i && eE.flushSync(() => i.dispatchEvent(l));
}
cE(hE, "dispatchDiscreteCustomEvent");
var mE = Object.defineProperty, z0 = (i, l) => mE(i, "name", { value: l, configurable: !0 }), wd = {
  Horizontal: "horizontal",
  Vertical: "vertical"
}, ky = wd.Horizontal, pE = Object.values(wd), O0 = /* @__PURE__ */ Z.forwardRef(
  /* @__PURE__ */ z0(function(l, o) {
    const { decorative: r, orientation: c = ky, ...h } = l, d = R0(c) ? c : ky, m = d === wd.Vertical ? d : void 0, g = r ? { role: "none" } : { "aria-orientation": m, role: "separator" };
    return /* @__PURE__ */ B.jsx(
      dE.div,
      {
        "data-orientation": d,
        ...g,
        ...h,
        ref: o
      }
    );
  }, "Separator")
);
function R0(i) {
  return pE.includes(i);
}
z0(R0, "isValidOrientation");
function N0(i) {
  var l, o, r = "";
  if (typeof i == "string" || typeof i == "number") r += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var c = i.length;
    for (l = 0; l < c; l++) i[l] && (o = N0(i[l])) && (r && (r += " "), r += o);
  } else for (o in i) i[o] && (r && (r += " "), r += o);
  return r;
}
function gE() {
  for (var i, l, o = 0, r = "", c = arguments.length; o < c; o++) (i = arguments[o]) && (l = N0(i)) && (r && (r += " "), r += l);
  return r;
}
const yE = (i, l) => {
  const o = new Array(i.length + l.length);
  for (let r = 0; r < i.length; r++)
    o[r] = i[r];
  for (let r = 0; r < l.length; r++)
    o[i.length + r] = l[r];
  return o;
}, vE = (i, l) => ({
  classGroupId: i,
  validator: l
}), _0 = (i = /* @__PURE__ */ new Map(), l = null, o) => ({
  nextPart: i,
  validators: l,
  classGroupId: o
}), Tr = "-", Xy = [], bE = "arbitrary..", SE = (i) => {
  const l = xE(i), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = i;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return TE(d);
      const m = d.split(Tr), g = m[0] === "" && m.length > 1 ? 1 : 0;
      return V0(m, g, l);
    },
    getConflictingClassGroupIds: (d, m) => {
      if (m) {
        const g = r[d], v = o[d];
        return g ? v ? yE(v, g) : g : v || Xy;
      }
      return o[d] || Xy;
    }
  };
}, V0 = (i, l, o) => {
  if (i.length - l === 0)
    return o.classGroupId;
  const c = i[l], h = o.nextPart.get(c);
  if (h) {
    const v = V0(i, l + 1, h);
    if (v) return v;
  }
  const d = o.validators;
  if (d === null)
    return;
  const m = l === 0 ? i.join(Tr) : i.slice(l).join(Tr), g = d.length;
  for (let v = 0; v < g; v++) {
    const b = d[v];
    if (b.validator(m))
      return b.classGroupId;
  }
}, TE = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const l = i.slice(1, -1), o = l.indexOf(":"), r = l.slice(0, o);
  return r ? bE + r : void 0;
})(), xE = (i) => {
  const {
    theme: l,
    classGroups: o
  } = i;
  return EE(o, l);
}, EE = (i, l) => {
  const o = _0();
  for (const r in i) {
    const c = i[r];
    Md(c, o, r, l);
  }
  return o;
}, Md = (i, l, o, r) => {
  const c = i.length;
  for (let h = 0; h < c; h++) {
    const d = i[h];
    AE(d, l, o, r);
  }
}, AE = (i, l, o, r) => {
  if (typeof i == "string") {
    CE(i, l, o);
    return;
  }
  if (typeof i == "function") {
    wE(i, l, o, r);
    return;
  }
  ME(i, l, o, r);
}, CE = (i, l, o) => {
  const r = i === "" ? l : j0(l, i);
  r.classGroupId = o;
}, wE = (i, l, o, r) => {
  if (DE(i)) {
    Md(i(r), l, o, r);
    return;
  }
  l.validators === null && (l.validators = []), l.validators.push(vE(o, i));
}, ME = (i, l, o, r) => {
  const c = Object.entries(i), h = c.length;
  for (let d = 0; d < h; d++) {
    const [m, g] = c[d];
    Md(g, j0(l, m), o, r);
  }
}, j0 = (i, l) => {
  let o = i;
  const r = l.split(Tr), c = r.length;
  for (let h = 0; h < c; h++) {
    const d = r[h];
    let m = o.nextPart.get(d);
    m || (m = _0(), o.nextPart.set(d, m)), o = m;
  }
  return o;
}, DE = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, zE = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, o = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const c = (h, d) => {
    o[h] = d, l++, l > i && (l = 0, r = o, o = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(h) {
      let d = o[h];
      if (d !== void 0)
        return d;
      if ((d = r[h]) !== void 0)
        return c(h, d), d;
    },
    set(h, d) {
      h in o ? o[h] = d : c(h, d);
    }
  };
}, Wf = "!", Zy = ":", OE = [], Qy = (i, l, o, r, c) => ({
  modifiers: i,
  hasImportantModifier: l,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: c
}), RE = (i) => {
  const {
    prefix: l,
    experimentalParseClassName: o
  } = i;
  let r = (c) => {
    const h = [];
    let d = 0, m = 0, g = 0, v;
    const b = c.length;
    for (let L = 0; L < b; L++) {
      const R = c[L];
      if (d === 0 && m === 0) {
        if (R === Zy) {
          h.push(c.slice(g, L)), g = L + 1;
          continue;
        }
        if (R === "/") {
          v = L;
          continue;
        }
      }
      R === "[" ? d++ : R === "]" ? d-- : R === "(" ? m++ : R === ")" && m--;
    }
    const y = h.length === 0 ? c : c.slice(g);
    let S = y, z = !1;
    y.endsWith(Wf) ? (S = y.slice(0, -1), z = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(Wf) && (S = y.slice(1), z = !0)
    );
    const D = v && v > g ? v - g : void 0;
    return Qy(h, z, S, D);
  };
  if (l) {
    const c = l + Zy, h = r;
    r = (d) => d.startsWith(c) ? h(d.slice(c.length)) : Qy(OE, !1, d, void 0, !0);
  }
  if (o) {
    const c = r;
    r = (h) => o({
      className: h,
      parseClassName: c
    });
  }
  return r;
}, NE = (i) => {
  const l = /* @__PURE__ */ new Map();
  return i.orderSensitiveModifiers.forEach((o, r) => {
    l.set(o, 1e6 + r);
  }), (o) => {
    const r = [];
    let c = [];
    for (let h = 0; h < o.length; h++) {
      const d = o[h], m = d[0] === "[", g = l.has(d);
      m || g ? (c.length > 0 && (c.sort(), r.push(...c), c = []), r.push(d)) : c.push(d);
    }
    return c.length > 0 && (c.sort(), r.push(...c)), r;
  };
}, _E = (i) => ({
  cache: zE(i.cacheSize),
  parseClassName: RE(i),
  sortModifiers: NE(i),
  postfixLookupClassGroupIds: VE(i),
  ...SE(i)
}), VE = (i) => {
  const l = /* @__PURE__ */ Object.create(null), o = i.postfixLookupClassGroups;
  if (o)
    for (let r = 0; r < o.length; r++)
      l[o[r]] = !0;
  return l;
}, jE = /\s+/, UE = (i, l) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: c,
    sortModifiers: h,
    postfixLookupClassGroupIds: d
  } = l, m = [], g = i.trim().split(jE);
  let v = "";
  for (let b = g.length - 1; b >= 0; b -= 1) {
    const y = g[b], {
      isExternal: S,
      modifiers: z,
      hasImportantModifier: D,
      baseClassName: L,
      maybePostfixModifierPosition: R
    } = o(y);
    if (S) {
      v = y + (v.length > 0 ? " " + v : v);
      continue;
    }
    let K = !!R, P;
    if (K) {
      const j = L.substring(0, R);
      P = r(j);
      const _ = P && d[P] ? r(L) : void 0;
      _ && _ !== P && (P = _, K = !1);
    } else
      P = r(L);
    if (!P) {
      if (!K) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      if (P = r(L), !P) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      K = !1;
    }
    const F = z.length === 0 ? "" : z.length === 1 ? z[0] : h(z).join(":"), U = D ? F + Wf : F, st = U + P;
    if (m.indexOf(st) > -1)
      continue;
    m.push(st);
    const at = c(P, K);
    for (let j = 0; j < at.length; ++j) {
      const _ = at[j];
      m.push(U + _);
    }
    v = y + (v.length > 0 ? " " + v : v);
  }
  return v;
}, BE = (...i) => {
  let l = 0, o, r, c = "";
  for (; l < i.length; )
    (o = i[l++]) && (r = U0(o)) && (c && (c += " "), c += r);
  return c;
}, U0 = (i) => {
  if (typeof i == "string")
    return i;
  let l, o = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (l = U0(i[r])) && (o && (o += " "), o += l);
  return o;
}, LE = (i, ...l) => {
  let o, r, c, h;
  const d = (g) => {
    const v = l.reduce((b, y) => y(b), i());
    return o = _E(v), r = o.cache.get, c = o.cache.set, h = m, m(g);
  }, m = (g) => {
    const v = r(g);
    if (v)
      return v;
    const b = UE(g, o);
    return c(g, b), b;
  };
  return h = d, (...g) => h(BE(...g));
}, HE = [], oe = (i) => {
  const l = (o) => o[i] || HE;
  return l.isThemeGetter = !0, l.themeKey = i, l;
}, B0 = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, L0 = /^\((?:(\w[\w-]*):)?(.+)\)$/i, GE = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, YE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, qE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, kE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, XE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, ZE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Oi = (i) => GE.test(i), wt = (i) => !!i && !Number.isNaN(Number(i)), Nn = (i) => !!i && Number.isInteger(Number(i)), wf = (i) => i.endsWith("%") && wt(i.slice(0, -1)), In = (i) => YE.test(i), H0 = () => !0, QE = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  qE.test(i) && !kE.test(i)
), Dd = () => !1, KE = (i) => XE.test(i), PE = (i) => ZE.test(i), JE = (i) => !rt(i) && !ut(i), FE = (i) => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)), IE = (i) => Vi(i, q0, Dd), rt = (i) => B0.test(i), la = (i) => Vi(i, k0, QE), Ky = (i) => Vi(i, l2, wt), WE = (i) => Vi(i, Z0, H0), $E = (i) => Vi(i, X0, Dd), Py = (i) => Vi(i, G0, Dd), t2 = (i) => Vi(i, Y0, PE), ar = (i) => Vi(i, Q0, KE), ut = (i) => L0.test(i), cs = (i) => ma(i, k0), e2 = (i) => ma(i, X0), Jy = (i) => ma(i, G0), n2 = (i) => ma(i, q0), i2 = (i) => ma(i, Y0), lr = (i) => ma(i, Q0, !0), a2 = (i) => ma(i, Z0, !0), Vi = (i, l, o) => {
  const r = B0.exec(i);
  return r ? r[1] ? l(r[1]) : o(r[2]) : !1;
}, ma = (i, l, o = !1) => {
  const r = L0.exec(i);
  return r ? r[1] ? l(r[1]) : o : !1;
}, G0 = (i) => i === "position" || i === "percentage", Y0 = (i) => i === "image" || i === "url", q0 = (i) => i === "length" || i === "size" || i === "bg-size", k0 = (i) => i === "length", l2 = (i) => i === "number", X0 = (i) => i === "family-name", Z0 = (i) => i === "number" || i === "weight", Q0 = (i) => i === "shadow", s2 = () => {
  const i = oe("color"), l = oe("font"), o = oe("text"), r = oe("font-weight"), c = oe("tracking"), h = oe("leading"), d = oe("breakpoint"), m = oe("container"), g = oe("spacing"), v = oe("radius"), b = oe("shadow"), y = oe("inset-shadow"), S = oe("text-shadow"), z = oe("drop-shadow"), D = oe("blur"), L = oe("perspective"), R = oe("aspect"), K = oe("ease"), P = oe("animate"), F = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], U = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], st = () => [...U(), ut, rt], at = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], _ = () => [ut, rt, g], St = () => [Oi, "full", "auto", ..._()], gt = () => [Nn, "none", "subgrid", ut, rt], I = () => ["auto", {
    span: ["full", Nn, ut, rt]
  }, Nn, ut, rt], J = () => [Nn, "auto", ut, rt], et = () => ["auto", "min", "max", "fr", ut, rt], nt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], G = () => ["auto", ..._()], X = () => [Oi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ..._()], $ = () => [m, Oi, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ..._()], tt = () => [Oi, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ..._()], H = () => [i, ut, rt], bt = () => [...U(), Jy, Py, {
    position: [ut, rt]
  }], yt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Rt = () => ["auto", "cover", "contain", n2, IE, {
    size: [ut, rt]
  }], x = () => [wf, cs, la], M = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    ut,
    rt
  ], k = () => ["", wt, cs, la], Q = () => ["solid", "dashed", "dotted", "double"], pt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], dt = () => [wt, wf, Jy, Py], At = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    D,
    ut,
    rt
  ], lt = () => ["none", wt, ut, rt], ht = () => ["none", wt, ut, rt], le = () => [wt, ut, rt], Re = () => [Oi, "full", ..._()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [In],
      breakpoint: [In],
      color: [H0],
      container: [In],
      "drop-shadow": [In],
      ease: ["in", "out", "in-out"],
      font: [JE],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [In],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [In],
      shadow: [In],
      spacing: ["px", wt],
      text: [In],
      "text-shadow": [In],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", Oi, rt, ut, R]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Container Type
       * @see https://tailwindcss.com/docs/responsive-design#container-queries
       */
      "container-type": [{
        "@container": ["", "normal", "size", ut, rt]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [FE],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [wt, "auto", rt, ut, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": F()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": F()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: st()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: at()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": at()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": at()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: j()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": j()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": j()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Inset
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: St()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": St()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": St()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": St(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: St()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": St(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: St()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": St()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": St()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: St()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: St()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: St()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: St()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Nn, "auto", ut, rt]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Oi, "full", "auto", m, ..._()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [wt, Oi, "auto", "initial", "none", rt]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", wt, ut, rt]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", wt, ut, rt]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Nn, "first", "last", "none", ut, rt]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": gt()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: I()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": J()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": J()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": gt()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: I()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": J()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": J()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": et()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": et()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: _()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": _()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": _()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...nt(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...W(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...W()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...nt()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...W(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": nt()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...W(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...W()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: _()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: _()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: _()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: _()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: _()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: _()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: _()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: _()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: _()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: _()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: _()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: G()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: G()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: G()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: G()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: G()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: G()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: G()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: G()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: G()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: G()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: G()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": _()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": _()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: X()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ...$()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...$()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...$()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...tt()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...tt()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...tt()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...X()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          m,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...X()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          m,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [d]
          },
          ...X()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...X()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...X()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...X()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", o, cs, la]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, a2, WE]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", wf, rt]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [e2, $E, l]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [rt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [c, ut, rt]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [wt, "none", ut, Ky]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          h,
          ..._()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ut, rt]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", ut, rt]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: H()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: H()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Q(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [wt, "from-font", "auto", ut, la]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: H()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [wt, "auto", ut, rt]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: _()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Nn, ut, rt]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ut, rt]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ut, rt]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: bt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: yt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: Rt()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Nn, ut, rt],
          radial: ["", ut, rt],
          conic: ["", Nn, ut, rt]
        }, i2, t2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: H()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: x()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: x()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: x()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: H()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: H()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: H()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: M()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": M()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": M()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": M()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": M()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": M()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": M()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": M()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": M()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": M()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": M()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": M()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": M()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": M()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": M()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: k()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": k()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": k()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": k()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": k()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": k()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": k()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": k()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": k()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": k()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": k()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": k()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": k()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Q(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...Q(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: H()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": H()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": H()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": H()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": H()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": H()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": H()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": H()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": H()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": H()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": H()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: H()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...Q(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [wt, ut, rt]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", wt, cs, la]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: H()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          // Deprecated since Tailwind CSS v4.0.0
          "inner",
          "none",
          b,
          lr,
          ar
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: H()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, lr, ar]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": H()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: k()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: H()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [wt, la]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": H()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": k()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": H()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", S, lr, ar]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": H()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [wt, ut, rt]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...pt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": pt()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [wt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": dt()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": dt()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": H()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": H()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": dt()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": dt()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": H()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": H()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": dt()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": dt()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": H()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": H()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": dt()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": dt()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": H()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": H()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": dt()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": dt()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": H()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": H()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": dt()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": dt()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": H()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": H()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": dt()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": dt()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": H()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": H()
      }],
      "mask-image-radial": [{
        "mask-radial": [ut, rt]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": dt()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": dt()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": H()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": H()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": U()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [wt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": dt()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": dt()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": H()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": H()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: bt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: yt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: Rt()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", ut, rt]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ut,
          rt
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: At()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [wt, ut, rt]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [wt, ut, rt]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          z,
          lr,
          ar
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": H()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", wt, ut, rt]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [wt, ut, rt]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", wt, ut, rt]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [wt, ut, rt]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", wt, ut, rt]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          ut,
          rt
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": At()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [wt, ut, rt]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [wt, ut, rt]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", wt, ut, rt]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [wt, ut, rt]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", wt, ut, rt]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [wt, ut, rt]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [wt, ut, rt]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", wt, ut, rt]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": _()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": _()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": _()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", ut, rt]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [wt, "initial", ut, rt]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", K, ut, rt]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [wt, ut, rt]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", P, ut, rt]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [L, ut, rt]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": st()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: lt()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": lt()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": lt()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": lt()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: ht()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": ht()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": ht()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": ht()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: le()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": le()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": le()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [ut, rt, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: st()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Re()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Re()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Re()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Re()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      /**
       * Zoom
       * @see https://tailwindcss.com/docs/zoom
       */
      zoom: [{
        zoom: [Nn, ut, rt]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: H()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: H()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ut, rt]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scrollbar Thumb Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-thumb-color": [{
        "scrollbar-thumb": H()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": H()
      }],
      /**
       * Scrollbar Gutter
       * @see https://tailwindcss.com/docs/scrollbar-gutter
       */
      "scrollbar-gutter": [{
        "scrollbar-gutter": ["auto", "stable", "both"]
      }],
      /**
       * Scrollbar Width
       * @see https://tailwindcss.com/docs/scrollbar-width
       */
      "scrollbar-w": [{
        scrollbar: ["auto", "thin", "none"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": _()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": _()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": _()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": _()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": _()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": _()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": _()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": _()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": _()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": _()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": _()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": _()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": _()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": _()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": _()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": _()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": _()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": _()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": _()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": _()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": _()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": _()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ut, rt]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...H()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [wt, cs, la, Ky]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...H()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      "container-named": ["container-type"],
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["start", "end", "right", "left"],
      "inset-y": ["inset-bs", "inset-be", "top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
      px: ["ps", "pe", "pr", "pl"],
      py: ["pbs", "pbe", "pt", "pb"],
      m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
      mx: ["ms", "me", "mr", "ml"],
      my: ["mbs", "mbe", "mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-s", "border-w-e", "border-w-r", "border-w-l"],
      "border-w-y": ["border-w-bs", "border-w-be", "border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-s", "border-color-e", "border-color-r", "border-color-l"],
      "border-color-y": ["border-color-bs", "border-color-be", "border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-ms", "scroll-me", "scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-ps", "scroll-pe", "scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    postfixLookupClassGroups: ["container-type"],
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, o2 = /* @__PURE__ */ LE(s2);
function K0(...i) {
  return o2(gE(i));
}
const P0 = Z.forwardRef(({ className: i, orientation: l = "horizontal", decorative: o = !0, ...r }, c) => /* @__PURE__ */ B.jsx(O0, { ref: c, decorative: o, orientation: l, className: K0("vt:shrink-0 vt:bg-border", l === "horizontal" ? "vt:h-px vt:w-full" : "vt:h-full vt:w-px", i), ...r }));
P0.displayName = O0.displayName;
const r2 = (i) => i?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function u2(i, l, o = []) {
  if (l == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: r2(i),
    size: 24,
    node: l,
    ...o.length > 0 ? { aliases: o } : {}
  };
}
const c2 = (i) => {
  let l = "", o = !1;
  for (const r of i) {
    if (r === "-" || r === "_" || r <= " ") {
      o = l.length > 0;
      continue;
    }
    l.length === 0 ? l += r.toLowerCase() : l += o ? r.toUpperCase() : r, o = !1;
  }
  return l;
};
const f2 = (i) => {
  const l = c2(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
const $f = (...i) => i.filter((l, o, r) => !!l && l.trim() !== "" && r.indexOf(l) === o).join(" ").trim();
const sa = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Mf(i) {
  return i != null;
}
function d2(i, l = {}) {
  const o = l.attributeNames ?? {}, r = (S) => o[S] ?? S, c = i.size ?? i.width ?? sa.width, h = i.size ?? i.height ?? sa.height, d = i.aliases?.filter((S) => typeof S == "string" && S.trim() !== "").map((S) => `lucide-${S}`) ?? [], m = [...i.name ? [`lucide-${i.name}`] : [], ...d], g = l.className?.split(" ").filter(Boolean) ?? [], v = l.includeDefaultClasses === !1 ? $f(...g) : $f("lucide", ...m, ...g), b = l.absoluteStrokeWidth ? Number(l.strokeWidth ?? sa["stroke-width"]) * Number(i.size ?? i.width ?? sa.width) / Number(l.size ?? l.width ?? sa.width) : l.strokeWidth ?? sa["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(sa).reduce((S, [z, D]) => (S[r(z)] = D, S), {}),
      ..."color" in l && l.color && {
        [r("stroke")]: l.color
      },
      ..."size" in l && Mf(l.size) && {
        [r("width")]: l.size,
        [r("height")]: l.size
      },
      ..."width" in l && Mf(l.width) && {
        [r("width")]: l.width
      },
      ..."height" in l && Mf(l.height) && {
        [r("height")]: l.height
      },
      [r("stroke-width")]: b,
      ...v && {
        [r("class")]: v
      },
      [r("viewBox")]: `0 0 ${c} ${h}`,
      ...l.hasA11yProp === !1 ? {
        [r("aria-hidden")]: "true"
      } : {},
      ..."attributes" in l && l.attributes
    },
    i.node.map((S) => {
      const [z, D, L] = S, R = l.nonScalingStroke ? { [r("vector-effect")]: "non-scaling-stroke", ...D } : D;
      return L ? [z, R, L] : [z, R];
    })
  ];
}
function h2(i, l = {}) {
  return d2(i, {
    ...l,
    attributeNames: {
      ...l.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}
const m2 = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
}, p2 = Z.createContext({}), g2 = () => Z.useContext(p2), y2 = Z.forwardRef(
  ({
    color: i,
    size: l,
    width: o,
    height: r,
    strokeWidth: c,
    absoluteStrokeWidth: h,
    nonScalingStroke: d,
    className: m = "",
    children: g,
    iconNode: v = [],
    icon: b = {
      node: v,
      aliases: [],
      size: 24
    },
    ...y
  }, S) => {
    const {
      size: z = 24,
      strokeWidth: D = 2,
      absoluteStrokeWidth: L = !1,
      nonScalingStroke: R = !1,
      color: K = "currentColor",
      className: P = ""
    } = g2() ?? {}, F = !!g || m2(y), [U, st, at = []] = h2(b, {
      color: i ?? K,
      width: o ?? l ?? z,
      height: r ?? l ?? z,
      strokeWidth: c ?? D,
      absoluteStrokeWidth: h ?? L,
      nonScalingStroke: d ?? R,
      className: $f(P, m),
      hasA11yProp: F,
      attributes: y
    });
    return Z.createElement(
      U,
      {
        ref: S,
        ...st
      },
      [
        ...at.map(([j, _]) => Z.createElement(j, _)),
        ...Array.isArray(g) ? g : [g]
      ]
    );
  }
);
function ti(i, l = [], o = []) {
  const r = typeof i == "string" ? u2(i, l, o) : i, c = Z.forwardRef(
    ({ className: h, ...d }, m) => Z.createElement(y2, {
      ref: m,
      icon: r,
      className: h,
      ...d
    })
  );
  return r.name && (c.displayName = f2(r.name)), c;
}
const J0 = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
J0.node;
const v2 = ti(J0);
const F0 = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
F0.node;
const Fy = ti(F0);
const I0 = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
I0.node;
const W0 = ti(I0);
const $0 = {
  name: "leaf",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",
        key: "1wjnjv"
      }
    ],
    ["path", { d: "M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13", key: "c1ejpn" }]
  ]
};
$0.node;
const b2 = ti($0);
const tb = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
tb.node;
const eb = ti(tb);
const nb = {
  name: "play",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1"
      }
    ]
  ]
};
nb.node;
const ib = ti(nb);
const ab = {
  name: "quote",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "rib7q0"
      }
    ],
    [
      "path",
      {
        d: "M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",
        key: "1ymkrd"
      }
    ]
  ]
};
ab.node;
const S2 = ti(ab);
const lb = {
  name: "star",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
        key: "r04s7s"
      }
    ]
  ]
};
lb.node;
const sb = ti(lb);
const ob = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
ob.node;
const T2 = ti(ob), rb = Z.createContext({});
function x2(i) {
  const l = Z.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const E2 = typeof window < "u", Iy = E2 ? Z.useLayoutEffect : Z.useEffect, zd = /* @__PURE__ */ Z.createContext(null);
function Od(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function xr(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1);
}
const jn = (i, l, o) => o > l ? l : o < i ? i : o;
let Vr = () => {
};
const Vn = {}, Rd = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), ub = (i) => typeof i == "object" && i !== null, Nd = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function cb(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const Sn = /* @__NO_SIDE_EFFECTS__ */ (i) => i, As = (...i) => i.reduce((l, o) => (r) => o(l(r))), ha = /* @__NO_SIDE_EFFECTS__ */ (i, l, o) => {
  const r = l - i;
  return r ? (o - i) / r : 1;
};
class Er {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return Od(this.subscriptions, l), () => this.remove(l);
  }
  remove(l) {
    xr(this.subscriptions, l);
  }
  notify(l, o, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, o, r);
      else
        for (let h = 0; h < c; h++) {
          const d = this.subscriptions[h];
          d && d(l, o, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const un = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, Fe = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, fb = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, Df = (i, l, o) => i * (3 * (1 - i) * ((1 - i) * l + i * o) + i * i);
// @__NO_SIDE_EFFECTS__
function Cs(i, l, o, r) {
  return i === l && o === r ? Sn : (c) => {
    let h = 0, d = 1, m = c;
    for (let g = 0; ; g++) {
      m >= h && m <= d || (m = (h + d) / 2);
      const v = Df(m, i, o) - c;
      if (v * v < 1e-28 || g === 40)
        break;
      v > 0 ? d = m : h = m, m -= v * 1e-7 / (Df(m + 1e-7, i, o) - c - v);
    }
    return Df(m, l, r);
  };
}
const db = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, hb = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), mb = /* @__PURE__ */ Cs(0.33, 1.53, 0.69, 0.99), _d = /* @__PURE__ */ hb(mb), pb = /* @__PURE__ */ db(_d), gb = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * _d(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Vd = (i) => 1 - Math.sin(Math.acos(i)), yb = /* @__PURE__ */ hb(Vd), vb = /* @__PURE__ */ db(Vd), A2 = /* @__PURE__ */ Cs(0.42, 0, 1, 1), C2 = /* @__PURE__ */ Cs(0, 0, 0.58, 1), jd = /* @__PURE__ */ Cs(0.42, 0, 0.58, 1), w2 = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", Ud = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", M2 = {
  linear: Sn,
  easeIn: A2,
  easeInOut: jd,
  easeOut: C2,
  circIn: Vd,
  circInOut: vb,
  circOut: yb,
  backIn: _d,
  backInOut: pb,
  backOut: mb,
  anticipate: gb
}, D2 = (i) => typeof i == "string", Wy = (i) => {
  if (/* @__PURE__ */ Ud(i)) {
    Vr(i.length === 4);
    const [l, o, r, c] = i;
    return /* @__PURE__ */ Cs(l, o, r, c);
  } else if (D2(i))
    return M2[i];
  return i;
}, ae = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let fr;
function z2() {
  fr = void 0;
}
const Pt = {
  now: () => (fr === void 0 && Pt.set(ae.isProcessing || Vn.useManualTiming ? ae.timestamp : performance.now()), fr),
  set: (i) => {
    fr = i, queueMicrotask(z2);
  }
}, fl = (i) => Math.round(i * 1e5) / 1e5, bb = (i) => (l) => typeof l == "string" && l.startsWith(i), Sb = /* @__PURE__ */ bb("--"), O2 = /* @__PURE__ */ bb("var(--"), Bd = (i) => O2(i) ? R2.test(i.split("/*")[0].trim()) : !1, R2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function zf(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const ml = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, ms = {
  ...ml,
  transform: (i) => jn(0, 1, i)
}, sr = {
  ...ml,
  default: 1
}, Ld = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function N2(i) {
  return i == null;
}
const _2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Hd = (i, l) => (o) => !!(typeof o == "string" && _2.test(o) && o.startsWith(i) || l && !N2(o) && Object.prototype.hasOwnProperty.call(o, l)), Tb = (i, l, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, h, d, m] = r.match(Ld);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(h),
    [o]: parseFloat(d),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, V2 = (i) => jn(0, 255, i), Of = {
  ...ml,
  transform: (i) => Math.round(V2(i))
}, ra = {
  test: /* @__PURE__ */ Hd("rgb", "red"),
  parse: /* @__PURE__ */ Tb("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: o, alpha: r = 1 }) => "rgba(" + Of.transform(i) + ", " + Of.transform(l) + ", " + Of.transform(o) + ", " + fl(ms.transform(r)) + ")"
};
function j2(i) {
  let l = "", o = "", r = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), o = i.substring(3, 5), r = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), o = i.substring(2, 3), r = i.substring(3, 4), c = i.substring(4, 5), l += l, o += o, r += r, c += c), {
    red: parseInt(l, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const td = {
  test: /* @__PURE__ */ Hd("#"),
  parse: j2,
  transform: ra.transform
}, ws = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), Wn = /* @__PURE__ */ ws("deg"), _n = /* @__PURE__ */ ws("%"), ft = /* @__PURE__ */ ws("px"), U2 = /* @__PURE__ */ ws("vh"), B2 = /* @__PURE__ */ ws("vw"), $y = {
  ..._n,
  parse: (i) => _n.parse(i) / 100,
  transform: (i) => _n.transform(i * 100)
}, sl = {
  test: /* @__PURE__ */ Hd("hsl", "hue"),
  parse: /* @__PURE__ */ Tb("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + _n.transform(fl(l)) + ", " + _n.transform(fl(o)) + ", " + fl(ms.transform(r)) + ")"
}, ue = {
  test: (i) => ra.test(i) || td.test(i) || sl.test(i),
  parse: (i) => ra.test(i) ? ra.parse(i) : sl.test(i) ? sl.parse(i) : td.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ra.transform(i) : sl.transform(i),
  getAnimatableNone: (i) => {
    const l = ue.parse(i);
    return l.alpha = 0, ue.transform(l);
  }
}, L2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, xb = /* @__PURE__ */ new RegExp(Ld.source), Eb = /* @__PURE__ */ new RegExp(L2.source, "i");
function H2(i) {
  return isNaN(i) && typeof i == "string" && (xb.test(i) || Eb.test(i));
}
const Ab = "number", Cb = "color", G2 = "var", Y2 = "var(", tv = "${}", q2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function k2(i) {
  const l = i.toString();
  return xb.test(l) || Eb.test(l);
}
function ps(i) {
  const l = i.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let h = 0;
  const m = l.replace(q2, (g) => (ue.test(g) ? (r.color.push(h), c.push(Cb), o.push(ue.parse(g))) : g.startsWith(Y2) ? (r.var.push(h), c.push(G2), o.push(g)) : (r.number.push(h), c.push(Ab), o.push(parseFloat(g))), ++h, tv)).split(tv);
  return { values: o, split: m, indexes: r, types: c };
}
function X2(i) {
  return ps(i).values;
}
function wb({ split: i, types: l }) {
  const o = i.length;
  return (r) => {
    let c = "";
    for (let h = 0; h < o; h++)
      if (c += i[h], r[h] !== void 0) {
        const d = l[h];
        d === Ab ? c += fl(r[h]) : d === Cb ? c += ue.transform(r[h]) : c += r[h];
      }
    return c;
  };
}
function Z2(i) {
  return wb(ps(i));
}
const Q2 = (i) => typeof i == "number" ? 0 : ue.test(i) ? ue.getAnimatableNone(i) : i, K2 = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : Q2(i);
function P2(i) {
  const l = ps(i);
  return wb(l)(l.values.map((r, c) => K2(r, l.split[c])));
}
const Ie = {
  test: H2,
  parse: X2,
  createTransformer: Z2,
  getAnimatableNone: P2
};
function Rf(i, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? i + (l - i) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? i + (l - i) * (2 / 3 - o) * 6 : i;
}
function J2({ hue: i, saturation: l, lightness: o, alpha: r }) {
  i /= 360, l /= 100, o /= 100;
  let c = 0, h = 0, d = 0;
  if (!l)
    c = h = d = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l, g = 2 * o - m;
    c = Rf(g, m, i + 1 / 3), h = Rf(g, m, i), d = Rf(g, m, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(h * 255),
    blue: Math.round(d * 255),
    alpha: r
  };
}
function Ar(i, l) {
  return (o) => o > 0 ? l : i;
}
const Gt = (i, l, o) => i + (l - i) * o, Nf = (i, l, o) => {
  const r = i * i, c = o * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, F2 = [td, ra, sl], I2 = (i) => F2.find((l) => l.test(i));
function ev(i) {
  const l = I2(i);
  if (!l)
    return !1;
  let o = l.parse(i);
  return l === sl && (o = J2(o)), o;
}
const nv = (i, l) => {
  const o = ev(i), r = ev(l);
  if (!o || !r)
    return Ar(i, l);
  const c = { ...o };
  return (h) => (c.red = Nf(o.red, r.red, h), c.green = Nf(o.green, r.green, h), c.blue = Nf(o.blue, r.blue, h), c.alpha = Gt(o.alpha, r.alpha, h), ra.transform(c));
}, ed = /* @__PURE__ */ new Set(["none", "hidden"]);
function W2(i, l) {
  return ed.has(i) ? (o) => o <= 0 ? i : l : (o) => o >= 1 ? l : i;
}
function $2(i, l) {
  return (o) => Gt(i, l, o);
}
function Gd(i) {
  return typeof i == "number" ? $2 : typeof i == "string" ? Bd(i) ? Ar : ue.test(i) ? nv : nA : Array.isArray(i) ? Mb : typeof i == "object" ? ue.test(i) ? nv : tA : Ar;
}
function Mb(i, l) {
  const o = [...i], r = o.length, c = i.map((h, d) => Gd(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < r; d++)
      o[d] = c[d](h);
    return o;
  };
}
function tA(i, l) {
  const o = { ...i, ...l }, r = {};
  for (const c in o)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = Gd(i[c])(i[c], l[c]));
  return (c) => {
    for (const h in r)
      o[h] = r[h](c);
    return o;
  };
}
function eA(i, l) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c], d = i.indexes[h][r[h]], m = i.values[d] ?? 0;
    o[c] = m, r[h]++;
  }
  return o;
}
const nA = (i, l) => {
  const o = Ie.createTransformer(l), r = ps(i), c = ps(l);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? ed.has(i) && !c.values.length || ed.has(l) && !r.values.length ? W2(i, l) : As(Mb(eA(r, c), c.values), o) : Ar(i, l);
}, iv = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function iA(i, l) {
  const o = iv.exec(i);
  if (!o)
    return;
  const r = iv.exec(l);
  if (!r || o[2] !== r[2])
    return;
  const c = o[2], h = parseFloat(o[1]), d = parseFloat(r[1]);
  return (m) => fl(Gt(h, d, m)) + c;
}
function Yd(i, l, o) {
  if (typeof i == "number" && typeof l == "number" && typeof o == "number")
    return Gt(i, l, o);
  if (typeof i == "string" && typeof l == "string") {
    const c = iA(i, l);
    if (c)
      return c;
  }
  return Gd(i)(i, l);
}
const or = [
  "setup",
  // Compute
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "preUpdate",
  // Compute
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
];
function aA(i) {
  let l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set(), r = !1, c = !1;
  const h = /* @__PURE__ */ new Set();
  let d = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function m(v) {
    h.has(v) && (o.add(v), i()), v(d);
  }
  const g = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (v, b = !1, y = !1) => {
      const z = y && r ? l : o;
      return b && h.add(v), z.add(v), v;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (v) => {
      o.delete(v), h.delete(v);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (v) => {
      if (d = v, r) {
        c = !0;
        return;
      }
      r = !0;
      const b = l;
      l = o, o = b, l.forEach(m), l.clear(), r = !1, c && (c = !1, g.process(v));
    }
  };
  return g;
}
const lA = 40;
function Db(i, l, o = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let r = !1, c = !0;
  const h = () => r = !0, d = or.reduce((F, U) => (F[U] = aA(h), F), {}), { setup: m, read: g, resolveKeyframes: v, preUpdate: b, update: y, preRender: S, render: z, postRender: D } = d, L = () => {
    const F = Vn.useManualTiming, U = F ? o.timestamp : performance.now();
    r = !1, F || (o.delta = c ? 1e3 / 60 : Math.max(Math.min(U - o.timestamp, lA), 1)), o.timestamp = U, o.isProcessing = !0, m.process(o), g.process(o), v.process(o), b.process(o), y.process(o), S.process(o), z.process(o), D.process(o), o.isProcessing = !1, r && l && (c = !1, i(L));
  }, R = () => {
    r = !0, c = !0, o.isProcessing || i(L);
  };
  return { schedule: or.reduce((F, U) => {
    const st = d[U];
    return F[U] = (at, j = !1, _ = !1) => (r || R(), st.schedule(at, j, _)), F;
  }, {}), cancel: (F) => {
    for (let U = 0; U < or.length; U++)
      d[or[U]].cancel(F);
  }, state: o, steps: d };
}
const { schedule: qt, cancel: _i, steps: _f } = /* @__PURE__ */ Db(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Sn, !0, ae), zb = (i) => {
  const l = ({ timestamp: o }) => i(o);
  return {
    start: (o = !0) => qt.update(l, o),
    stop: () => _i(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ae.isProcessing ? ae.timestamp : Pt.now()
  };
}, Ob = (i, l, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / o), 2);
  for (let h = 0; h < c; h++)
    r += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, qd = 2e4;
function kd(i, l = 50, o = qd, r) {
  let c = 0, h = i.next(c);
  for (; !h.done && c < o; )
    c += l, h = i.next(c);
  return c >= o ? 1 / 0 : c;
}
function sA(i, l = 100, o) {
  const { keyframes: r, velocity: c } = i, h = r && r[r.length - 1] - r[0], d = o({
    ...i,
    velocity: c && h ? c * l / h : c,
    keyframes: [0, l]
  }), m = Math.min(kd(d), qd);
  return {
    type: "keyframes",
    ease: (g) => d.next(m * g).value / l,
    duration: /* @__PURE__ */ Fe(m)
  };
}
const Te = {
  // Default spring physics
  stiffness: 100,
  damping: 10,
  mass: 1,
  // Default duration/bounce-based options
  duration: 800,
  // in ms
  bounce: 0.3,
  visualDuration: 0.3,
  // in seconds
  // Rest thresholds
  restSpeed: {
    granular: 0.01,
    default: 2
  },
  restDelta: {
    granular: 5e-3,
    default: 0.5
  },
  // Limits
  minDuration: 0.01,
  // in seconds
  maxDuration: 10,
  // in seconds
  minDamping: 0.05
}, Rb = (i) => i < 0 ? 1 / Math.max(1 + i, Te.minDamping) : Math.max(1 - i, Te.minDamping);
function Nb(i, l) {
  if (!(i > 1))
    return 1;
  const o = Math.sqrt(i * i - 1), r = i - o, c = i + o, h = 2 * o * Math.exp(-l) * (1 + l);
  return _b((d) => c * Math.exp(-r * d) - r * Math.exp(-c * d) - h, (d) => Math.exp(-c * d) - Math.exp(-r * d), l) / l;
}
function nd(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const oA = 12;
function _b(i, l, o) {
  let r = o;
  for (let c = 1; c < oA; c++)
    r = r - i(r) / l(r);
  return r;
}
const Vf = 1e-3;
function rA({ duration: i = Te.duration, bounce: l = Te.bounce }) {
  let o, r;
  const c = Rb(l);
  i = jn(Te.minDuration, Te.maxDuration, /* @__PURE__ */ Fe(i)), c < 1 ? (o = (v) => {
    const b = v * c, y = b * i, S = nd(v, c), z = Math.exp(-y);
    return Vf - b / S * z;
  }, r = (v) => {
    const y = v * c * i, S = c * c * v * v * i, z = Math.exp(-y), D = nd(v * v, c);
    return (-o(v) + Vf > 0 ? -1 : 1) * -S * z / D;
  }) : (o = (v) => {
    const b = Math.exp(-v * i), y = v * i + 1;
    return -Vf + b * y;
  }, r = (v) => {
    const b = Math.exp(-v * i), y = -v * (i * i);
    return b * y;
  });
  const h = 5 / i, d = _b(o, r, h), m = d * Nb(c, d * i), g = m * m;
  return {
    stiffness: g,
    damping: c * 2 * Math.sqrt(g),
    duration: /* @__PURE__ */ un(i)
  };
}
const id = (i, l) => (l ? i >= 0 : i > 0) && i < 1 / 0;
function jf(i, l) {
  if (id(i, l))
    return i;
}
function uA(i) {
  const l = jf(i.stiffness), o = jf(i.damping, !0), r = jf(i.mass), c = {
    ...i,
    stiffness: l ?? Te.stiffness,
    damping: o ?? Te.damping,
    mass: r ?? Te.mass,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (l ?? o ?? r) === void 0 && (i.duration !== void 0 || i.bounce !== void 0)
  };
  if (c.isTimeDefined) {
    if (i.visualDuration) {
      const h = Rb(i.bounce || 0), d = 2 * Math.PI / (i.visualDuration * 1.2) * Nb(h, 2 * Math.PI / 1.2);
      c.stiffness = d * d, c.damping = 2 * h * Math.sqrt(c.stiffness);
    } else
      Object.assign(c, rA(c)), c.isResolvedFromDuration = !0;
    (!id(c.stiffness) || !id(c.damping, !0)) && (c.stiffness = Te.stiffness, c.damping = Te.damping);
  }
  return c;
}
function Cr(i = Te.visualDuration, l = Te.bounce) {
  const o = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i, r = o.keyframes[0], c = o.keyframes[o.keyframes.length - 1], h = { done: !1, value: r }, { stiffness: d, damping: m, mass: g, duration: v, isResolvedFromDuration: b, isTimeDefined: y } = uA({ ...o }), S = (j) => y ? 0 : -/* @__PURE__ */ Fe(j), z = m / (2 * Math.sqrt(d * g)), D = /* @__PURE__ */ Fe(Math.sqrt(d / g)), L = z * D, R = {
    target: c,
    delta: c - r,
    velocity: S(o.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, K = () => {
    const j = Math.abs(R.delta) < 5;
    R.restSpeed = o.restSpeed || (j ? Te.restSpeed.granular : Te.restSpeed.default), R.restDelta = o.restDelta || (j ? Te.restDelta.granular : Te.restDelta.default);
  };
  K();
  let P, F, U;
  if (z < 1) {
    const j = nd(D, z), _ = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    U = () => {
      _.A = (R.velocity + L * R.delta) / j, _.sinC = L * _.A + R.delta * j, _.cosC = L * R.delta - _.A * j;
    };
    const St = (gt) => {
      gt !== _.t && (_.t = gt, _.env = Math.exp(-L * gt), _.sin = Math.sin(j * gt), _.cos = Math.cos(j * gt));
    };
    P = (gt) => (St(gt), R.target - _.env * (_.A * _.sin + R.delta * _.cos)), F = (gt) => (St(gt), _.env * (_.sinC * _.sin + _.cosC * _.cos));
  } else if (z === 1) {
    P = (_) => R.target - Math.exp(-D * _) * (R.delta + (R.velocity + D * R.delta) * _);
    const j = { C: 0 };
    U = () => {
      j.C = R.velocity + D * R.delta;
    }, F = (_) => Math.exp(-D * _) * (D * j.C * _ - R.velocity);
  } else {
    const j = D * Math.sqrt(z * z - 1), _ = L - j, St = L + j, gt = y ? 1 / 0 : 300 / j, I = (et, nt) => Math.exp(nt > gt ? -et * gt - L * (nt - gt) : -et * nt), J = { S: 0, F: 0 };
    U = () => {
      const et = (R.velocity + L * R.delta) / j;
      J.S = (R.delta + et) / 2, J.F = (R.delta - et) / 2;
    }, P = (et) => R.target - J.S * I(_, et) - J.F * I(St, et), F = (et) => _ * J.S * I(_, et) + St * J.F * I(St, et);
  }
  U();
  const st = b && v || null, at = {
    calculatedDuration: st,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (j, _) => {
      R.target = j[j.length - 1], R.delta = R.target - j[0], R.velocity = S(_), o.restSpeed && o.restDelta || K(), at.calculatedDuration = st, h.done = !1, U();
    },
    velocity: (j) => /* @__PURE__ */ un(F(j)),
    next: (j) => {
      const _ = P(j);
      if (b)
        h.done = j >= v;
      else {
        const St = /* @__PURE__ */ un(F(j));
        h.done = Math.abs(St) <= R.restSpeed && Math.abs(R.target - _) <= R.restDelta;
      }
      return h.value = h.done ? R.target : _, h;
    },
    toString: () => {
      const j = Math.min(kd(at), qd), _ = Ob((St) => at.next(j * St).value, j, 30);
      return j + "ms " + _;
    },
    toTransition: () => {
    }
  };
  return at;
}
Cr.applyToOptions = (i) => {
  const l = sA(i, 100, Cr);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ un(l.duration), i.type = "keyframes", i;
};
function wr({ keyframes: i, velocity: l = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: h = 500, modifyTarget: d, min: m, max: g, restDelta: v = 0.5, restSpeed: b }) {
  const y = i[0], S = {
    done: !1,
    value: y
  }, z = (j) => j < m || j > g, D = (j) => m === void 0 ? g : g === void 0 || Math.abs(m - j) < Math.abs(g - j) ? m : g;
  let L = o * l;
  const R = y + L, K = d === void 0 ? R : d(R);
  K !== R && (L = K - y);
  const P = (j) => -L * Math.exp(-j / r), F = (j) => {
    const _ = P(j);
    S.done = Math.abs(_) <= v, S.value = S.done ? K : K + _;
  };
  let U, st;
  const at = (j) => {
    z(S.value) && (U = j, st = Cr({
      keyframes: [S.value, D(S.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -P(j) / r * 1e3,
      damping: c,
      stiffness: h,
      restDelta: v,
      restSpeed: b
    }));
  };
  return at(0), {
    calculatedDuration: null,
    next: (j) => {
      let _ = !1;
      return !st && U === void 0 && (_ = !0, F(j), at(j)), U !== void 0 && j >= U ? st.next(j - U) : (!_ && F(j), S);
    }
  };
}
function cA(i, l, o) {
  const r = [], c = o || Vn.mix || Yd, h = i.length - 1;
  for (let d = 0; d < h; d++) {
    let m = c(i[d], i[d + 1]);
    if (l) {
      const g = Array.isArray(l) ? l[d] || Sn : l;
      m = As(g, m);
    }
    r.push(m);
  }
  return r;
}
function fA(i, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const h = i.length;
  if (Vr(h === l.length), h === 1)
    return () => l[0];
  if (h === 2 && l[0] === l[1])
    return () => l[1];
  const d = i[0] === i[1];
  i[0] > i[h - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = cA(l, r, c), g = m.length, v = (b) => {
    if (d && b < i[0])
      return l[0];
    let y = 0;
    if (g > 1)
      for (; y < i.length - 2 && !(b < i[y + 1]); y++)
        ;
    const S = /* @__PURE__ */ ha(i[y], i[y + 1], b);
    return m[y](S);
  };
  return o ? (b) => v(jn(i[0], i[h - 1], b)) : v;
}
function dA(i, l) {
  const o = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ ha(0, l, r);
    i.push(Gt(o, 1, c));
  }
}
function Vb(i) {
  const l = [0];
  return dA(l, i.length - 1), l;
}
function hA(i, l) {
  return i.map((o) => o * l);
}
function mA(i, l) {
  return i.map(() => l || jd).splice(0, i.length - 1);
}
function Ri({ duration: i = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ w2(r) ? r.map(Wy) : Wy(r) || jd, h = {
    done: !1,
    value: l[0]
  };
  if (l.length === 2 && !Array.isArray(c) && (!o || o.length !== 2 || o[0] === 0 && o[1] === 1)) {
    const [g, v] = l, b = g === v ? void 0 : (Vn.mix || Yd)(g, v);
    return {
      calculatedDuration: i,
      next: (y) => (h.value = b ? b(c(i > 0 ? jn(0, 1, y / i) : 1)) : v, h.done = y >= i, h)
    };
  }
  const d = hA(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === l.length ? o : Vb(l),
    i
  ), m = fA(d, l, {
    ease: Array.isArray(c) ? c : mA(l, c)
  });
  return {
    calculatedDuration: i,
    next: (g) => (h.value = m(g), h.done = g >= i, h)
  };
}
const pA = 5;
function gA(i, l, o) {
  const r = Math.max(l - pA, 0);
  return /* @__PURE__ */ fb(o - i(r), l - r);
}
function yA(i, l, o = 0) {
  return l <= 0 ? o : i.velocity ? i.velocity(l) : gA((r) => i.next(r).value, l, i.next(l).value);
}
const vA = (i) => i !== null;
function gs(i, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const h = i.filter(vA), m = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
  return !m || r === void 0 ? h[m] : r;
}
const bA = {
  decay: wr,
  inertia: wr,
  tween: Ri,
  keyframes: Ri,
  spring: Cr
};
function jb(i) {
  typeof i.type == "string" && (i.type = bA[i.type]);
}
const SA = 40, Ub = (i, l) => l - i > SA && !Vn.useManualTiming ? l : i;
function Bb(i, l) {
  return {
    kind: i,
    animation: l,
    timestamp: Pt.now(),
    frameTimestamp: ae.timestamp,
    frameIsProcessing: ae.isProcessing
  };
}
function Lb(i, l, o) {
  const r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({
        ...Bb("animation-start", i),
        options: o ? { ...l, ...o } : l
      });
    } catch {
    }
}
function TA(i, l) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...Bb("layout-animation-start", i),
        node: l
      });
    } catch {
    }
}
class Xd {
  constructor() {
    this.isResolved = !1;
  }
  get finished() {
    return this._finished || (this._finished = this.isResolved ? Promise.resolve() : new Promise((l) => {
      this._resolve = l;
    })), this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = void 0, this.isResolved = !1;
  }
  notifyFinished() {
    this.isResolved = !0, this._resolve?.();
  }
  /**
   * Allows the animation to be awaited.
   *
   * @deprecated Use `finished` instead.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
}
const xA = (i) => i / 100, ad = (i) => Math.round(i * 1e4) / 1e4;
class ys extends Xd {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== Pt.now() && this.tick(Pt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause(), Lb(this, this.options);
  }
  initAnimation() {
    const { options: l } = this;
    jb(l);
    const { type: o = Ri, repeat: r = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: m } = l;
    const g = o || Ri;
    g !== Ri && typeof m[0] != "number" && (this.mixKeyframes = As(xA, Yd(m[0], m[1])), m = [0, 100]);
    const v = g(m === l.keyframes ? l : { ...l, keyframes: m });
    h === "mirror" && (this.mirroredGenerator = g({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -d
    })), v.calculatedDuration === null && (v.calculatedDuration = kd(v));
    const { calculatedDuration: b } = v;
    this.calculatedDuration = b, this.resolvedDuration = b + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = v;
  }
  updateTime(l) {
    const o = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = o;
  }
  tick(l, o = !1) {
    const { generator: r, totalDuration: c, calculatedDuration: h } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: d = 0, keyframes: m, type: g, onUpdate: v, finalKeyframe: b } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = Ub(this.startTime, l)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const y = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), S = this.playbackSpeed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    const z = this.generate(this.currentTime, S);
    let { done: D } = z;
    !S && h !== null && (D = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const L = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return L && g !== wr && (z.value = gs(m, this.options, b, this.speed)), v && v(z.value), L && this.finish(), z;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(l) {
    return this.holdTime ?? ad((l - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(l, o) {
    const { options: r, totalDuration: c } = this, h = this.at(l) - (r.delay || 0);
    return h >= c && r.type !== wr ? gs(r.keyframes, r, o ? void 0 : r.finalKeyframe) : this.generate(Math.max(h, 0), h < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(l, o) {
    const { generator: r, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: m } = this, { keyframes: g, repeat: v, repeatType: b, repeatDelay: y } = this.options;
    let S = l, z = r;
    if (v) {
      const L = Math.min(l, c) / m;
      let R = Math.floor(L), K = L % 1;
      !K && L >= 1 && (K = 1), K === 1 && R--, R = Math.min(R, v + 1), R % 2 && (b === "reverse" ? (K = 1 - K, y && (K -= y / m)) : b === "mirror" && (z = d)), S = jn(0, 1, K) * m;
    }
    let D;
    return o ? (this.delayState.value = g[0], D = this.delayState) : D = z.next(S), h && !o && (D.value = h(D.value)), D;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, o) {
    return this.finished.then(l, o);
  }
  get duration() {
    return /* @__PURE__ */ Fe(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Fe(l);
  }
  get time() {
    return /* @__PURE__ */ Fe(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ un(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return yA(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const o = this.playbackSpeed !== l;
    o && this.driver && this.updateTime(Pt.now()), this.playbackSpeed = l, o && this.driver && (this.time = /* @__PURE__ */ Fe(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = zb, startTime: o } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = o ?? (this.pendingStartTime = r)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(Pt.now()), this.holdTime = this.currentTime;
  }
  complete() {
    this.state !== "running" && this.play(), this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null;
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(l) {
    return this.startTime = 0, this.tick(l, !0);
  }
  attachTimeline(l) {
    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), l.observe(this);
  }
}
const EA = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function AA(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [r] = o.match(Ld) || [];
  if (!r)
    return i;
  const c = o.replace(r, "");
  let h = EA.has(l) ? 1 : 0;
  return r !== o && (h *= 100), l + "(" + h + c + ")";
}
const CA = /\b([a-z-]*)\(.*?\)/gu, ld = {
  ...Ie,
  getAnimatableNone: (i) => {
    const l = i.match(CA);
    return l ? l.map(AA).join(" ") : i;
  }
}, sd = {
  ...Ie,
  getAnimatableNone: (i) => {
    const l = Ie.parse(i);
    return Ie.createTransformer(i)(l.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, av = {
  ...ml,
  transform: Math.round
}, wA = {
  rotate: Wn,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: Wn,
  rotateX: Wn,
  rotateY: Wn,
  rotateZ: Wn,
  scale: sr,
  scaleX: sr,
  scaleY: sr,
  scaleZ: sr,
  skew: Wn,
  skewX: Wn,
  skewY: Wn,
  distance: ft,
  translateX: ft,
  translateY: ft,
  translateZ: ft,
  x: ft,
  y: ft,
  z: ft,
  perspective: ft,
  transformPerspective: ft,
  opacity: ms,
  originX: $y,
  originY: $y,
  originZ: ft
}, vs = {
  // Border props
  borderWidth: ft,
  borderTopWidth: ft,
  borderRightWidth: ft,
  borderBottomWidth: ft,
  borderLeftWidth: ft,
  borderRadius: ft,
  borderTopLeftRadius: ft,
  borderTopRightRadius: ft,
  borderBottomRightRadius: ft,
  borderBottomLeftRadius: ft,
  // Positioning props
  width: ft,
  maxWidth: ft,
  height: ft,
  maxHeight: ft,
  top: ft,
  right: ft,
  bottom: ft,
  left: ft,
  inset: ft,
  insetBlock: ft,
  insetBlockStart: ft,
  insetBlockEnd: ft,
  insetInline: ft,
  insetInlineStart: ft,
  insetInlineEnd: ft,
  // Spacing props
  padding: ft,
  paddingTop: ft,
  paddingRight: ft,
  paddingBottom: ft,
  paddingLeft: ft,
  paddingBlock: ft,
  paddingBlockStart: ft,
  paddingBlockEnd: ft,
  paddingInline: ft,
  paddingInlineStart: ft,
  paddingInlineEnd: ft,
  margin: ft,
  marginTop: ft,
  marginRight: ft,
  marginBottom: ft,
  marginLeft: ft,
  marginBlock: ft,
  marginBlockStart: ft,
  marginBlockEnd: ft,
  marginInline: ft,
  marginInlineStart: ft,
  marginInlineEnd: ft,
  // Typography
  fontSize: ft,
  // Misc
  backgroundPositionX: ft,
  backgroundPositionY: ft,
  ...wA,
  zIndex: av,
  // SVG
  fillOpacity: ms,
  strokeOpacity: ms,
  numOctaves: av
}, MA = {
  ...vs,
  // Color props
  color: ue,
  backgroundColor: ue,
  outlineColor: ue,
  fill: ue,
  stroke: ue,
  // Border props
  borderColor: ue,
  borderTopColor: ue,
  borderRightColor: ue,
  borderBottomColor: ue,
  borderLeftColor: ue,
  filter: ld,
  WebkitFilter: ld,
  mask: sd,
  WebkitMask: sd
}, Hb = (i) => MA[i], DA = /* @__PURE__ */ new Set([ld, sd]);
function Zd(i, l) {
  let o = Hb(i);
  return DA.has(o) || (o = Ie), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0;
}
function zA(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const ua = (i) => i * 180 / Math.PI, od = (i) => {
  const l = ua(Math.atan2(i[1], i[0]));
  return rd(l);
}, OA = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: od,
  rotateZ: od,
  skewX: (i) => ua(Math.atan(i[1])),
  skewY: (i) => ua(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, rd = (i) => (i = i % 360, i < 0 && (i += 360), i), lv = od, sv = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), ov = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), RA = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: sv,
  scaleY: ov,
  scale: (i) => (sv(i) + ov(i)) / 2,
  rotateX: (i) => rd(ua(Math.atan2(i[6], i[5]))),
  rotateY: (i) => rd(ua(Math.atan2(-i[2], i[0]))),
  rotateZ: lv,
  rotate: lv,
  skewX: (i) => ua(Math.atan(i[4])),
  skewY: (i) => ua(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function bs(i) {
  return i.includes("scale") ? 1 : 0;
}
function ud(i, l) {
  if (!i || i === "none")
    return bs(l);
  const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o)
    r = RA, c = o;
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = OA, c = m;
  }
  if (!c)
    return bs(l);
  const h = r[l], d = c[1].split(",").map(_A);
  return typeof h == "function" ? h(d) : d[h];
}
const NA = (i, l) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return ud(o, l);
};
function _A(i) {
  return parseFloat(i.trim());
}
const $n = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ni = /* @__PURE__ */ new Set([...$n, "pathRotation"]), rv = (i) => i === ml || i === ft, VA = /* @__PURE__ */ new Set(["x", "y", "z"]), jA = $n.filter((i) => !VA.has(i));
function UA(i) {
  const l = [];
  return jA.forEach((o) => {
    const r = i.getValue(o);
    if (r !== void 0) {
      const c = r.get(), h = o.startsWith("scale") ? 1 : 0;
      if (c === h)
        return;
      l.push([o, c]), r.set(h);
    }
  }), l;
}
const BA = /* @__PURE__ */ new Set(["bottom", "right"]);
function uv(i, l, o, r, c, h) {
  const d = parseFloat(i);
  if (!isNaN(d))
    return d;
  const { min: m, max: g } = l()[o], v = g - m;
  return h === "border-box" ? v : v - parseFloat(r) - parseFloat(c);
}
const ca = {
  // Dimensions
  width: ({ width: i, paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r }, c) => uv(i, c, "x", l, o, r),
  height: ({ height: i, paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r }, c) => uv(i, c, "y", l, o, r),
  top: ({ top: i }) => parseFloat(i),
  left: ({ left: i }) => parseFloat(i),
  bottom: ({ top: i }, l) => {
    const { y: o } = l();
    return parseFloat(i) + (o.max - o.min);
  },
  right: ({ left: i }, l) => {
    const { x: o } = l();
    return parseFloat(i) + (o.max - o.min);
  },
  // Transform
  x: ({ transform: i }) => ud(i, "x"),
  y: ({ transform: i }) => ud(i, "y")
};
ca.translateX = ca.x;
ca.translateY = ca.y;
const fa = /* @__PURE__ */ new Set();
let cd = !1, fd = !1, dd = !1;
function Gb() {
  if (fd) {
    const i = [], l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
    fa.forEach((c) => {
      c.needsMeasurement && (i.push(c), l.add(c.element), BA.has(c.name) && o.add(c.element));
    });
    const r = /* @__PURE__ */ new Map();
    o.forEach((c) => {
      const h = UA(c);
      h.length && (r.set(c, h), c.render());
    }), i.forEach((c) => c.measureInitialState()), l.forEach((c) => {
      c.render();
      const h = r.get(c);
      h && h.forEach(([d, m]) => {
        c.getValue(d)?.set(m);
      });
    }), i.forEach((c) => c.measureEndState()), i.forEach((c) => {
      c.suspendedScrollY !== void 0 && window.scrollTo(0, c.suspendedScrollY);
    });
  }
  fd = !1, cd = !1, fa.forEach((i) => i.complete(dd)), fa.clear();
}
function Yb() {
  fa.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (fd = !0);
  });
}
function LA() {
  dd = !0, Yb(), Gb(), dd = !1;
}
function HA(i, l, o) {
  if (typeof i == "string") {
    if (Rd(i) || Nd(i))
      return parseFloat(i);
    if (!Ie.test(i) && Ie.test(o))
      return Zd(l, o);
  }
  return i ?? void 0;
}
class Qd {
  constructor(l, o, r, c, h, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = h, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (fa.add(this), cd || (cd = !0, qt.read(Yb), qt.resolveKeyframes(Gb))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const h = c?.get(), d = l[l.length - 1];
      if (h !== void 0)
        l[0] = h;
      else if (r && o) {
        const m = HA(r.readValue(o, d), o, d);
        m !== void 0 && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    zA(l);
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete(l = !1) {
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), fa.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (fa.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const GA = (i) => i.startsWith("--");
function qb(i, l, o) {
  GA(l) ? i.style.setProperty(l, o) : i.style[l] = o;
}
const YA = {};
function kb(i, l) {
  const o = /* @__PURE__ */ cb(i);
  return () => YA[l] ?? o();
}
const qA = /* @__PURE__ */ kb(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Kd = /* @__PURE__ */ kb(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ol = ([i, l, o, r]) => `cubic-bezier(${i}, ${l}, ${o}, ${r})`, hd = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ ol([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ ol([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ ol([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ ol([0.33, 1.53, 0.69, 0.99])
};
function Xb(i, l) {
  if (i)
    return typeof i == "function" ? Kd() ? Ob(i, l) : "ease-out" : /* @__PURE__ */ Ud(i) ? ol(i) : Array.isArray(i) ? i.map((o) => Xb(o, l) || hd.easeOut) : hd[i];
}
function kA(i, l, o, { delay: r = 0, duration: c = 300, repeat: h = 0, repeatType: d = "loop", ease: m = "easeOut", times: g } = {}, v = void 0) {
  const b = {
    [l]: o
  };
  g && (b.offset = g);
  const y = Xb(m, c);
  Array.isArray(y) && (b.easing = y);
  const S = {
    delay: r,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: h + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return v && (S.pseudoElement = v), i.animate(b, S);
}
function Zb(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function XA({ type: i, ...l }) {
  return Zb(i) && Kd() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Qb extends Xd {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: h, allowFlatten: d = !1, finalKeyframe: m, onComplete: g } = l;
    this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l, Vr(typeof l.type != "string");
    const v = XA(l);
    this.animation = kA(o, r, c, v, h), v.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !h) {
        const b = gs(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(b), qb(o, r, b), this.animation.cancel();
      }
      g?.(), this.notifyFinished();
    }, Lb(this, l, v);
  }
  play() {
    this.isStopped || (this.manualStartTime = null, this.animation.play(), this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {
    }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: l } = this;
    l === "idle" || l === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * In this method, we commit styles back to the DOM before cancelling
   * the animation.
   *
   * This is designed to be overridden by NativeAnimationExtended, which
   * will create a renderless JS animation and sample it twice to calculate
   * its current value, "previous" value, and therefore allow
   * Motion to also correctly calculate velocity for any subsequent animation
   * while deferring the commit until the next animation frame.
   */
  commitStyles() {
    const l = this.options?.element;
    !this.isPseudoElement && l?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const l = this.animation.effect?.getComputedTiming?.().duration || 0;
    return /* @__PURE__ */ Fe(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ Fe(l);
  }
  get time() {
    return /* @__PURE__ */ Fe(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const o = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ un(l), o && this.animation.pause();
  }
  /**
   * The playback speed of the animation.
   * 1 = normal speed, 2 = double speed, 0.5 = half speed.
   */
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(l) {
    l < 0 && (this.finishedTime = null), this.animation.playbackRate = l;
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(l) {
    this.manualStartTime = this.animation.startTime = l;
  }
  /**
   * Attaches a timeline to the animation, for instance the `ScrollTimeline`.
   */
  attachTimeline({ timeline: l, onAttach: o, observe: r }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && qA() ? (this.animation.timeline = l, o?.(this.animation), Sn) : r(this);
  }
}
const Kb = {
  anticipate: gb,
  backInOut: pb,
  circInOut: vb
};
function ZA(i) {
  return i in Kb;
}
function QA(i) {
  typeof i.ease == "string" && ZA(i.ease) && (i.ease = Kb[i.ease]);
}
const Mr = 10;
class KA extends Qb {
  constructor(l) {
    QA(l), jb(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * The animation's time now, in ms. Wall-clock rather than WAAPI's
   * currentTime while running, as under CPU load currentTime may not
   * reflect the actual elapsed time, causing incorrect sampling and
   * visual jumps.
   */
  elapsed() {
    return this.state === "running" ? (Pt.now() - this.startTime) * this.speed : this.time * 1e3;
  }
  /**
   * The value at a time, from a renderless JS animation.
   */
  sample(l) {
    if (!this.sampler) {
      const { motionValue: o, onUpdate: r, onComplete: c, onPlay: h, onStop: d, element: m, ...g } = this.options;
      this.sampler = new ys({ ...g, autoplay: !1 }), this.sampler.stop();
    }
    return this.sampler.sample(Math.max(0, l)).value;
  }
  /**
   * The value now, as WAAPI doesn't set the motion value while it runs.
   */
  liveValue() {
    const { state: l } = this;
    if (l === "running" || l === "paused")
      return this.sample(this.elapsed());
  }
  /**
   * WAAPI doesn't natively have any interruption capabilities.
   *
   * Rather than read committed styles back out of the DOM, we can
   * sample a renderless JS animation twice to calculate its current
   * value, "previous" value, and therefore allow Motion to calculate
   * velocity for any subsequent animation.
   */
  updateMotionValue(l) {
    const { motionValue: o, element: r, name: c } = this.options;
    if (!o)
      return;
    if (l !== void 0) {
      o.set(l);
      return;
    }
    const { speed: h } = this, d = this.elapsed(), m = this.state === "running" && h ? jn(0, Mr, d) : 0, g = this.sample(d);
    r && c && qb(r, c, g), o.setWithVelocity(this.sample(d - m * Math.sign(h)), g, m / Math.abs(h || 1));
  }
}
const cv = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Ie.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function PA(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let o = 0; o < i.length; o++)
    if (i[o] !== l)
      return !0;
}
function JA(i, l, o, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const h = i[i.length - 1], d = cv(c, l), m = cv(h, l);
  return !d || !m ? !1 : PA(i) || (o === "spring" || Zb(o)) && r;
}
function md(i) {
  i.duration = 0, i.type = "keyframes";
}
const pd = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), FA = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function IA(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && FA.test(i[l]))
      return !0;
  return !1;
}
const fv = /* @__PURE__ */ new Set([
  "color",
  "backgroundColor",
  "outlineColor",
  "fill",
  "stroke",
  "borderColor",
  "borderTopColor",
  "borderRightColor",
  "borderBottomColor",
  "borderLeftColor"
]), Pb = /* @__PURE__ */ cb(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function WA(i) {
  const { motionValue: l, name: o, repeatDelay: r, repeatType: c, damping: h, type: d, keyframes: m } = i;
  if (!o || !(pd.has(o) || fv.has(o)))
    return !1;
  const g = l?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement))
    return !1;
  const { onUpdate: v, transformTemplate: b } = l.owner.getProps();
  return Pb() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (pd.has(o) || fv.has(o) && IA(m)) && (o !== "transform" || !b) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !v && !r && c !== "mirror" && h !== 0 && d !== "inertia";
}
const Dr = (i, l) => l && typeof i == "number" ? l.transform(i) : i, Jb = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, $A = $n.length;
function Fb(i, l, o) {
  let r = "", c = !0;
  for (let d = 0; d < $A; d++) {
    const m = $n[d], g = i[m];
    if (g === void 0)
      continue;
    let v = !0;
    if (typeof g == "number")
      v = g === (m.startsWith("scale") ? 1 : 0);
    else {
      const b = parseFloat(g);
      v = m.startsWith("scale") ? b === 1 : b === 0;
    }
    if (!v || o) {
      const b = Dr(g, vs[m]);
      if (!v) {
        c = !1;
        const y = Jb[m] || m;
        r += `${y}(${b}) `;
      }
      o && (l[m] = b);
    }
  }
  const h = i.pathRotation;
  return h && (c = !1, r += `rotate(${Dr(h, vs.pathRotation)}) `), r = r.trim(), o ? r = o(l, c ? "" : r) : c && (r = "none"), r;
}
const dl = /* @__PURE__ */ new WeakMap(), t3 = 200, Uf = 1e-3, e3 = 0.1, n3 = 1e-3, i3 = 100, a3 = (i) => /^(linear|ease(In|Out|InOut))$/.test(i), Bf = (i, l) => i - l, dv = (i, l, o) => {
  const r = [];
  for (let c = 0; c <= o; c++)
    r.push(Gt(i, l, c / o));
  return r;
}, dr = (i) => i.motionValue.owner, Lf = (i) => dl.get(i), rl = (i, l) => i.latestValues ? i.latestValues[l] : i.getValue(l)?.get(), l3 = ({ name: i, motionValue: l }) => i && $n.includes(i) && l?.owner?.current instanceof HTMLElement && Pb() && Kd();
function s3(i) {
  const l = dr(i), { onUpdate: o, transformTemplate: r } = l.getProps();
  return (
    /**
     * A handoff from an optimised appear animation is already running
     * on its own WAAPI animation. onUpdate needs every value, every
     * frame.
     */
    !i.isHandoff && !o && !i.hasOnUpdate && /**
     * transformTemplate could output anything.
     */
    !r && i.type !== "inertia" && /**
     * A literal transform, or pathRotation, replaces or adds to the
     * transform we'd build. styleEffect builds its own as "none".
     */
    (rl(l, "transform") || "none") === "none" && !rl(l, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !l.projection?.isProjecting()
  );
}
class o3 extends ys {
  constructor(l) {
    const o = dr(l).current, { driver: r = zb } = l, c = s3(l);
    l.driver = (d) => {
      const m = r(d);
      return {
        js: m,
        now: m.now,
        start: (g = !0) => {
          const v = Lf(o);
          !v || v.isJS ? m.start(g) : v.schedule(!1, !g);
        },
        stop: () => {
          m.stop();
          const g = Lf(o);
          g?.schedule(!g.isFinishing);
        }
      };
    }, super(l), this.canAccelerate = c;
    const { stop: h } = this;
    this.stop = () => {
      this.isAccelerated() && this.sync(), h();
    };
  }
  get group() {
    return Lf(dr(this.options).current);
  }
  get js() {
    return this.driver?.js;
  }
  get name() {
    return this.options.name;
  }
  /**
   * When this stops moving, or, if it repeats forever, when it starts
   * repeating, and how long each repeat takes. Held (paused, or at
   * speed 0) animations never stop moving.
   */
  timing() {
    const { startTime: l, speed: o, totalDuration: r } = this, { delay: c = 0, repeatType: h } = this.options;
    return this.holdTime !== null ? [1 / 0, 0] : r === 1 / 0 ? [
      l + c / o,
      this.resolvedDuration * (h === "loop" ? 1 : 2) / o || 1
    ] : [l + (c + r) / o, 0];
  }
  /**
   * Whether this is running, or paused, on the compositor.
   */
  isAccelerated() {
    const { group: l, state: o } = this;
    return l?.tracks.has(this) && !l.isJS && this.canAccelerate && (o === "running" || o === "paused");
  }
  /**
   * The value now, while this runs on the compositor and so doesn't
   * set its motion value every frame.
   */
  liveValue() {
    return this.isAccelerated() ? this.sampleAt(Pt.now()) : void 0;
  }
  /**
   * If this is a two-keyframe tween whose easing WAAPI runs exactly,
   * when it starts and stops moving, and that easing.
   */
  tween() {
    const { keyframes: l, type: o, ease: r, times: c, repeat: h, delay: d = 0 } = this.options, m = /* @__PURE__ */ Ud(r) ? ol(r) : a3(r) && hd[r];
    if (m && !h && !c && l.length === 2 && o === Ri && this.holdTime === null) {
      const g = this.startTime + d / this.speed;
      return [g, g + this.resolvedDuration / this.speed, m];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(l, o) {
    const { startTime: r, speed: c, resolvedDuration: h, options: d } = this, { delay: m = 0, repeat: g = 0, repeatDelay: v = 0, repeatType: b, times: y, keyframes: S, type: z } = d, D = (z || Ri) === Ri ? y || Vb(S) : [0, 1], L = r + m / c, R = [];
    if (this.holdTime !== null || !(h > 0))
      return R;
    for (let K = Math.max(0, Math.floor((l - L) * c / h)); K <= g; K++) {
      const P = L + K * h / c;
      if (P > o)
        break;
      for (const F of D) {
        const U = P + (K % 2 && b && b !== "loop" ? 1 - F : F) * (h - v) / c;
        U > l && U < o && R.push(U);
      }
    }
    return R;
  }
  /**
   * The value at a timestamp, as a number.
   */
  numberAt(l) {
    return parseFloat(this.sampleAt(l, !0));
  }
  /**
   * Write the current value, and velocity, to the motion value.
   */
  sync() {
    const l = Pt.now();
    this.options.motionValue.setWithVelocity(this.sampleAt(l - Mr, !0), this.sampleAt(l, !0), Mr);
  }
  play() {
    this.isStopped || ((this.group || r3(dr(this.options))).tracks.add(this), super.play());
  }
  pause() {
    super.pause(), this.isAccelerated() && (this.sync(), this.group.schedule(!1));
  }
  /**
   * JSAnimation finishes on its next tick, which only happens on the
   * main thread, so finish now.
   */
  complete() {
    super.complete();
    const { group: l } = this;
    l && !l.isJS && this.canAccelerate && this.tick(Pt.now());
  }
  /**
   * Without a tick to rebase it, a held time still includes the delay,
   * so take it off here, as a JS animation does on its next tick.
   */
  get time() {
    return this.isAccelerated() ? /* @__PURE__ */ Fe(jn(0, this.totalDuration, this.at(Pt.now()) - (this.options.delay || 0))) : super.time;
  }
  set time(l) {
    super.time = l;
  }
  /**
   * Scroll timelines set time every frame, so run these on the main
   * thread.
   */
  attachTimeline(l) {
    return this.canAccelerate = !1, this.group?.demote(!0), super.attachTimeline(l);
  }
}
function r3(i) {
  const l = i.current, o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
  let c = {}, h = [], d = /* @__PURE__ */ new Map(), m = [], g = !1, v = !1, b = !1, y = -1 / 0;
  const S = (I) => {
    for (const J of o)
      if (J.name === I)
        return !0;
  }, z = (I, J) => {
    const et = {};
    for (const nt of I === void 0 ? $n : h) {
      const W = r.get(nt), G = I === void 0 ? rl(i, nt) : W ? W.sampleAt(J > I && !W.timing()[1] ? J : I) : c[nt];
      G !== void 0 && (et[nt] = G);
    }
    return et;
  }, D = (I, J) => {
    let et = "";
    const nt = z(I, J);
    for (const W in nt)
      et += (Jb[W] || W) + "(" + Dr(nt[W], vs[W]) + ") ";
    return et || "none";
  }, L = (I = z()) => {
    l.style.transform = Fb(I, {});
  }, R = (I = !0) => {
    I && L(), m.forEach(({ animation: J }) => J.cancel()), m = [];
  }, K = (I, J, et = 1 / 0) => {
    const nt = { animation: I, offset: J, end: et };
    I.startTime = Pt.now() + J, et < 1 / 0 && (I.onfinish = () => {
      nt.isDone = !0, m.some((W) => W.end === 1 / 0) && (I.cancel(), m = m.filter((W) => W !== nt)), gt.schedule(!1);
    }), I.oncancel = () => m.includes(nt) && gt.demote(), m.push(nt);
  }, P = (I, J, et) => {
    const nt = (G, X) => Math.abs(I(X) - I(G)), W = nt(J, et);
    for (; et - J > 0.01; ) {
      const G = (J + et) / 2;
      nt(J, G) > nt(G, et) ? et = G : J = G;
    }
    return nt(J, et) > W / 2 ? [J, et] : [];
  }, F = (I, J, et, nt) => {
    const W = Math.min(t3, Math.max(2, Math.ceil((et - J) / Mr)));
    if (nt.length * 4 > W)
      return;
    const G = dv(J, et, W).concat(nt).sort(Bf), X = (yt) => /* @__PURE__ */ ha(J, et, yt);
    let $, tt;
    for (const yt of I) {
      const Rt = G.map((Q) => yt.numberAt(Q)), [x] = Rt, M = Rt[Rt.length - 1] - x, k = Rt.map((Q) => M ? (Q - x) / M : Q - x);
      if (M) {
        if (!$)
          $ = k, tt = (Q) => (yt.numberAt(Q) - x) / M;
        else if (k.some((Q, pt) => !(Math.abs(Q - $[pt]) <= Uf)))
          return;
      } else if (k.some((Q) => !(Math.abs(Q) <= Uf)))
        return;
    }
    if (!$ || $.every((yt, Rt) => Math.abs(yt - X(G[Rt])) <= Uf))
      return "linear";
    const H = [], bt = (yt, Rt = tt(yt)) => H.push(ad(Rt) + " " + ad(X(yt) * 100) + "%");
    return $.forEach((yt, Rt) => {
      Rt && Math.abs(yt - $[Rt - 1]) > 0.2 && P(tt, G[Rt - 1], G[Rt]).forEach((x) => bt(x)), bt(G[Rt], yt);
    }), "linear(" + H + ")";
  }, U = (I, J, et, nt) => {
    const W = [J], G = (H, bt) => I.every((yt) => !(Math.abs(yt.numberAt((H + bt) / 2) - (yt.numberAt(H) + yt.numberAt(bt)) / 2) > (yt.name.startsWith("scale") ? n3 : e3))), X = (H, bt, yt) => {
      if (bt - H < 1 || G(H, bt))
        W.push(bt);
      else if (yt < 4)
        X(H, (H + bt) / 2, yt + 1), X((H + bt) / 2, bt, yt + 1);
      else {
        for (const Rt of I)
          W.push(...P((x) => Rt.numberAt(x), H, bt));
        W.push(bt);
      }
    }, $ = dv(J, et, Math.ceil((et - J) / 100));
    for (const H of nt)
      $.push(H, Math.min(H + 0.01, et));
    let tt = J;
    for (const H of $.sort(Bf))
      H > tt && X(tt, H, 0), tt = H;
    return W.sort(Bf);
  }, st = (I) => {
    let J;
    for (const et of I) {
      const nt = et.tween();
      if (!nt || J?.some((W, G) => G < 2 ? Math.abs(nt[G] - W) > 1 : nt[G] !== W))
        return;
      J = nt;
    }
    return J;
  }, at = (I, J, et, nt = { fill: "both" }, W, G) => {
    const X = I.flatMap((yt) => yt.boundaries(J, et)), $ = G || F(I, J, et, X), tt = $ ? [J, et] : U(I, J, et, X), H = tt.map((yt) => D(yt, W));
    let bt = { transform: H };
    return $ || (bt.offset = tt.map((yt) => /* @__PURE__ */ ha(J, et, yt))), H.every((yt) => yt === H[0]) && (L(z(J, W)), bt = null), l.animate(bt, {
      ...nt,
      duration: et - J,
      easing: $ || "linear"
    });
  }, j = (I) => {
    let J = I, et = 0, nt = 0;
    const W = [], G = [], X = /* @__PURE__ */ new Set();
    r.clear(), d = /* @__PURE__ */ new Map();
    for (const tt of o) {
      r.set(tt.name, tt);
      const [H, bt] = tt.timing(), yt = H === 1 / 0;
      if (d.set(tt, [tt.at(I), tt.speed, yt]), yt) {
        tt.sync();
        continue;
      }
      if (tt.speed < 0)
        return;
      if (bt) {
        if (et) {
          const Rt = (H - nt) / bt;
          if (Math.abs(bt - et) > 1 || Math.abs(Rt - Math.round(Rt)) * et > 1)
            return;
        } else
          et = bt, nt = H;
        G.push(tt);
      } else
        X.add(H);
      W.push(tt), J = Math.max(J, H);
    }
    c = {}, h = $n.filter((tt) => {
      if (r.has(tt))
        return !0;
      const H = c[tt] = rl(i, tt);
      return H !== void 0 && parseFloat(H) !== (tt.startsWith("scale") ? 1 : 0);
    }), R(!1);
    const $ = !et && st(W);
    try {
      if ($ && $[1] > I) {
        const [tt, H, bt] = $;
        K(at(W, tt, H, void 0, void 0, bt), tt - I, H - tt);
      } else J > I && (K(at(W, I, J), 0, J - I), X.forEach((tt) => tt < J - 1 && K(l.animate(null, {
        duration: tt - I
      }), 0, tt - I)));
      if (et) {
        const tt = nt + Math.floor((J - nt) / et) * et;
        K(at(G, tt, tt + et, {
          iterations: 1 / 0,
          iterationStart: (J - tt) / et,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, J), J - I);
      }
    } catch {
      return;
    }
    return m.length || R(), !0;
  }, _ = (I) => {
    let J, et = 0;
    for (const nt of o) {
      const W = d.get(nt);
      if (!W)
        return !1;
      const [G, X, $] = W, tt = nt.at(I), H = nt.timing()[0] === 1 / 0;
      if ($) {
        if (H && tt === G)
          continue;
        return !1;
      }
      const bt = (tt - G) / X, yt = H ? 0 : nt.speed / X;
      if (J === void 0)
        J = bt, et = yt;
      else if (Math.abs(bt - J) > 1 || yt !== et)
        return !1;
    }
    if (J === void 0)
      return !0;
    if (!m.length)
      return !1;
    for (const { offset: nt, end: W, isDone: G } of m) {
      const X = J - nt;
      if (W < 1 / 0 && (G ? X < W - 1 : X < 0 || X >= W))
        return !1;
    }
    for (const { animation: nt, offset: W, isDone: G } of m) {
      if (G)
        continue;
      const X = J - W;
      et ? (nt.playbackRate = et, nt.startTime = I - X / et) : (nt.pause(), nt.currentTime = X);
    }
    return !0;
  }, St = () => {
    const I = Pt.now();
    if (gt.isJS || (gt.isFinishing = !0, o.forEach((nt) => {
      const [W, G] = nt.timing();
      nt.state === "running" && nt.speed > 0 && !G && W <= I + 1 && (nt.complete(), c[nt.name] = rl(i, nt.name), d.has(nt) || (g = !0));
    }), gt.isFinishing = !1), v = !1, o.forEach(({ state: nt }, W) => {
      (nt === "idle" || nt === "finished") && o.delete(W);
    }), !o.size) {
      dl.delete(l), gt.isJS || R();
      return;
    }
    for (const nt of o)
      if (!nt.canAccelerate)
        return gt.demote(!0);
    gt.isJS && (gt.isJS = !1, g = !0, o.forEach((nt) => nt.js?.stop()));
    const J = g, et = b;
    if (g = b = !1, J || !_(I)) {
      if (et) {
        if (I - y < i3)
          return gt.demote();
        y = I;
      }
      if (!j(I))
        return gt.demote();
    }
  }, gt = {
    tracks: o,
    isJS: !1,
    isFinishing: !1,
    schedule(I, J) {
      g || (g = I), b || (b = !!J), v || (v = !0, ae.isProcessing ? qt.render(St, !1, !0) : queueMicrotask(St));
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (!gt.isJS) {
        for (const I in c)
          if (rl(i, I) !== c[I] && !S(I))
            return gt.schedule(!0, !0);
      }
    },
    demote(I) {
      gt.isJS || (o.forEach((J) => {
        J.isAccelerated() && J.sync(), I || (J.canAccelerate = !1);
      }), gt.isJS = !0, d = /* @__PURE__ */ new Map(), R(), o.forEach((J) => J.state === "running" && J.js?.start()));
    }
  };
  return dl.set(l, gt), gt;
}
class u3 extends Xd {
  constructor(l) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Pt.now();
    const { keyframes: o, name: r, motionValue: c, element: h } = l, d = l;
    d.autoplay ?? (d.autoplay = !0), d.delay ?? (d.delay = 0), d.type ?? (d.type = "keyframes"), d.repeat ?? (d.repeat = 0), d.repeatDelay ?? (d.repeatDelay = 0), d.repeatType ?? (d.repeatType = "loop");
    const m = h?.KeyframeResolver || Qd;
    this.keyframeResolver = new m(o, (g, v, b) => this.onKeyframesResolved(g, v, d, !b), r, c, h), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: m, delay: g, isHandoff: v, onUpdate: b } = r;
    this.resolvedAt = Pt.now();
    let y = !0;
    JA(l, h, d, m) || (y = !1, (Vn.instantAnimations || !g) && b?.(gs(l, r, o)), l[0] = l[l.length - 1], md(r), r.repeat = 0);
    const { onComplete: S } = r;
    r.finalKeyframe = o, r.keyframes = l, r.onComplete = () => {
      S?.(), this.notifyFinished();
    };
    const z = y && !v && WA(r), D = !z && l3(r);
    c && (z || D || this.resolvedAt !== this.createdAt) && (r.startTime ?? (r.startTime = Ub(this.createdAt, this.resolvedAt)));
    let L;
    if (z) {
      r.element = r.motionValue?.owner?.current;
      try {
        L = new KA(r);
      } catch {
        L = new ys(r);
      }
    } else D ? L = new o3(r) : L = new ys(r);
    this.pendingTimeline && (this.stopTimeline = L.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = L;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(l, o) {
    return this.finished.finally(l).then(() => {
    });
  }
  /**
   * The value now, if the animation runs on the compositor.
   */
  liveValue() {
    return this._animation?.liveValue?.();
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(), LA()), this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(l) {
    this.animation.time = l;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(l) {
    this.animation.speed = l;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(l) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(l) : this.pendingTimeline = l, () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel();
  }
}
function Ib(i, l, o, r = 0, c = 1) {
  const h = Array.from(i).sort((v, b) => v.sortNodePosition(b)).indexOf(l), d = i.size, m = (d - 1) * r;
  return typeof o == "function" ? o(h, d) : c === 1 ? h * r : m - h * r;
}
const hv = 30, c3 = (i) => !isNaN(parseFloat(i));
class f3 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, o = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const c = Pt.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.notifyChange(), this.dependents))
        for (const h of this.dependents)
          h.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = o.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = Pt.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = c3(this.current));
  }
  setPrevFrameValue(l = this.current) {
    this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(l) {
    return this.on("change", l);
  }
  on(l, o) {
    var r;
    return l === "change" ? this.onChangeSubscribe(o) : ((r = this.events)[l] || (r[l] = new Er())).add(o);
  }
  onChangeSubscribe(l) {
    const { events: o } = this;
    return !o.change && !this.changeSubscriber ? this.changeSubscriber = l : (o.change || (o.change = new Er(), o.change.add(this.changeSubscriber), this.changeSubscriber = void 0), o.change.add(l)), () => {
      this.changeSubscriber === l ? this.changeSubscriber = void 0 : o.change?.remove(l), this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    qt.read(() => {
      !this.changeSubscriber && !this.events.change?.getSize() && this.stop();
    });
  }
  clearListeners() {
    this.changeSubscriber = void 0;
    for (const l in this.events)
      this.events[l].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   */
  attach(l, o) {
    this.passiveEffect = l, this.stopPassiveEffect = o;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(l) {
    this.passiveEffect ? this.passiveEffect(l, this.updateAndNotify) : this.updateAndNotify(l);
  }
  setWithVelocity(l, o, r) {
    this.set(o), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, o = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, o && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.notifyChange();
  }
  notifyChange() {
    const { current: l, changeSubscriber: o } = this;
    o ? o(l) : this.events.change?.notify(l);
  }
  addDependent(l) {
    this.dependents || (this.dependents = /* @__PURE__ */ new Set()), this.dependents.add(l);
  }
  removeDependent(l) {
    this.dependents && this.dependents.delete(l);
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    const l = this.animation?.liveValue?.();
    return l === void 0 ? this.current : l;
  }
  /**
   * The value as last set. Unlike get(), this doesn't read an animation
   * running on the compositor, which renders the value itself.
   */
  getCurrent() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const l = Pt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > hv)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, hv);
    return /* @__PURE__ */ fb(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   */
  start(l) {
    return this.stop(), new Promise((o) => {
      this.hasAnimated = !0;
      let r = !1, c;
      c = l(() => {
        r = !0, this.events.animationComplete?.notify(), this.animation === c && this.clearAnimation(), o();
      }), r || (this.animation = c), this.events.animationStart?.notify();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    this.animation = void 0;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function hl(i, l) {
  return new f3(i, l);
}
function Wb(i, l) {
  if (i?.inherit && l) {
    const { inherit: o, ...r } = i;
    return { ...l, ...r };
  }
  return i;
}
function Pd(i, l) {
  const o = i?.[l] ?? i?.default ?? i;
  return o !== i ? Wb(o, i) : o;
}
const d3 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, h3 = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), m3 = {
  type: "keyframes",
  duration: 0.8
}, p3 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, g3 = (i, { keyframes: l }) => l.length > 2 ? m3 : Ni.has(i) ? i.startsWith("scale") ? h3(l[1]) : d3 : p3, y3 = /* @__PURE__ */ new Set([
  "when",
  "delay",
  "delayChildren",
  "staggerChildren",
  "staggerDirection",
  "repeat",
  "repeatType",
  "repeatDelay",
  "from",
  "elapsed"
]);
function v3(i) {
  for (const l in i)
    if (!y3.has(l))
      return !0;
  return !1;
}
const Jd = (i, l, o, r = {}, c, h) => (d) => {
  const m = Pd(r, i) || {}, g = m.delay || r.delay || 0;
  let { elapsed: v = 0 } = r;
  v = v - /* @__PURE__ */ un(g);
  const b = {
    keyframes: Array.isArray(o) ? o : [null, o],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...m,
    delay: -v,
    onUpdate: (S) => {
      l.set(S), m.onUpdate && m.onUpdate(S);
    },
    onComplete: () => {
      d(), m.onComplete && m.onComplete();
    },
    name: i,
    motionValue: l,
    element: h ? void 0 : c,
    hasOnUpdate: !!m.onUpdate
  };
  v3(m) || Object.assign(b, g3(i, b)), b.duration && (b.duration = /* @__PURE__ */ un(b.duration)), b.repeatDelay && (b.repeatDelay = /* @__PURE__ */ un(b.repeatDelay)), b.from !== void 0 && (b.keyframes[0] = b.from);
  let y = !1;
  if ((b.type === !1 || b.duration === 0 && !b.repeatDelay) && (md(b), b.delay === 0 && (y = !0)), (Vn.instantAnimations || Vn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, md(b), b.delay = 0), b.allowFlatten = !m.type && !m.ease, y && !h && l.get() !== void 0) {
    const S = gs(b.keyframes, m);
    if (S !== void 0) {
      qt.update(() => {
        b.onUpdate(S), b.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new ys(b) : new u3(b);
}, b3 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function S3(i) {
  const l = b3.exec(i);
  if (!l)
    return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function $b(i, l, o = 1) {
  const [r, c] = S3(i);
  if (!r)
    return;
  const h = window.getComputedStyle(l).getPropertyValue(r);
  if (h) {
    const d = h.trim();
    return Rd(d) ? parseFloat(d) : d;
  }
  return Bd(c) ? $b(c, l, o + 1) : c;
}
function T3(i) {
  const l = [{}, {}];
  return i?.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity();
  }), l;
}
function t1(i, l, o, r) {
  const c = (h) => typeof h == "function" ? h(o !== void 0 ? o : i.custom, ...T3(r)) : h;
  return l = c(l), typeof l == "string" && (l = i.variants && i.variants[l]), c(l);
}
function da(i, l, o) {
  return t1(i.getProps(), l, o, i);
}
const e1 = (i, l) => l === "exit" ? i.presenceContext?.custom : void 0, n1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...$n
]), x3 = (i) => Array.isArray(i);
function E3(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, hl(o));
}
function A3(i) {
  return x3(i) ? i[i.length - 1] || 0 : i;
}
function C3(i, l) {
  const o = da(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...r };
  for (const d in h) {
    const m = A3(h[d]);
    E3(i, d, m);
  }
}
const xe = (i) => !!(i && i.getVelocity);
function w3(i) {
  return !!(xe(i) && i.add);
}
function gd(i, l) {
  const o = i.getValue("willChange");
  if (w3(o))
    return o.add(l);
  if (!o && Vn.WillChange) {
    const r = new Vn.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
function Fd(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const M3 = "framerAppearId", i1 = "data-" + Fd(M3);
function a1(i) {
  return i.props[i1];
}
const D3 = typeof window < "u";
function z3({ protectedKeys: i, needsAnimating: l }, o) {
  const r = o in i && !l[o];
  return l[o] = !1, r;
}
function l1(i, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...m } = l;
  const g = i.getDefaultTransition();
  h = h ? Wb(h, g) : g;
  const v = h?.reduceMotion, b = h?.skipAnimations;
  r && (h = r);
  const y = [], S = c && i.animationState?.getState()[c], z = h?.path;
  z && z.animateVisualElement(i, m, h, o, y);
  for (const D in m) {
    const L = i.getValue(D, i.latestValues[D] ?? null), R = m[D];
    if (R === void 0 || S && z3(S, D))
      continue;
    const K = {
      delay: o,
      ...Pd(h || {}, D)
    };
    b && (K.skipAnimations = !0);
    const P = L.get();
    if (P !== void 0 && !L.isAnimating() && !Array.isArray(R) && R === P && !K.velocity) {
      qt.update(() => L.set(R));
      continue;
    }
    let F = !1;
    if (D3 && window.MotionHandoffAnimation) {
      const at = a1(i);
      if (at) {
        const j = window.MotionHandoffAnimation(at, D, qt);
        j !== null && (K.startTime = j, F = !0);
      }
    }
    gd(i, D);
    const U = v ?? i.shouldReduceMotion;
    L.start(Jd(D, L, R, U && n1.has(D) ? { type: !1 } : K, i, F));
    const st = L.animation;
    st && y.push(st);
  }
  if (d) {
    const D = () => qt.update(() => {
      d && C3(i, d);
    });
    y.length ? Promise.all(y).then(D) : D();
  }
  return y;
}
function yd(i, l, o = {}) {
  const r = da(i, l, e1(i, o.type)), c = o.transitionOverride || (r?.transition ?? (i.getDefaultTransition() || {})), h = () => Promise.all(r ? l1(i, r, o) : []), d = (g = 0) => {
    const { variantChildren: v } = i, { delayChildren: b = 0, staggerChildren: y, staggerDirection: S } = c, z = [];
    return v?.forEach((D) => {
      D.notify("AnimationStart", l), z.push(yd(D, l, {
        ...o,
        delay: g + (typeof b == "function" ? 0 : b) + Ib(v, D, b, y, S)
      }).then(() => D.notify("AnimationComplete", l)));
    }), Promise.all(z);
  }, { when: m } = c;
  return m ? m === "beforeChildren" ? h().then(() => d()) : d().then(h) : Promise.all([h(), d(o.delay)]);
}
function O3(i, l, o = {}) {
  return i.notify("AnimationStart", l), (Array.isArray(l) ? Promise.all(l.map((c) => yd(i, c, o))) : typeof l == "string" ? yd(i, l, o) : Promise.all(l1(i, da(i, l, o.custom), o))).then(() => {
    i.notify("AnimationComplete", l);
  });
}
const R3 = {
  test: (i) => i === "auto",
  parse: (i) => i
}, N3 = (i) => (l) => l.test(i), _3 = [ml, ft, _n, Wn, B2, U2, R3], mv = (i) => _3.find(N3(i));
function V3(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Nd(i) : !0;
}
const j3 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function U3(i, l, o) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const h = i[r];
    typeof h == "string" && !j3.has(h) && k2(h) && (c = i[r]), r++;
  }
  if (c && o)
    for (const h of l)
      i[h] !== c && (i[h] = Zd(o, c));
}
class B3 extends Qd {
  constructor(l, o, r, c, h) {
    super(l, o, r, c, h, !0);
  }
  /**
   * Keyframes that don't need reading from the DOM, or measuring,
   * resolve straight away rather than in the frame loop's batched read.
   */
  scheduleResolve() {
    if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement))
      return this.complete();
    super.scheduleResolve();
  }
  canReadNow() {
    const { unresolvedKeyframes: l, element: o, motionValue: r } = this, c = l[0] ?? r?.get();
    if (!o?.current || c === void 0)
      return !1;
    for (let h = 0; h < l.length; h++)
      if (zf(h ? l[h] : c))
        return !1;
    return !0;
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: o, name: r } = this;
    if (!o || !o.current)
      return;
    super.readKeyframes();
    for (let b = 0; b < l.length; b++) {
      let y = l[b];
      if (typeof y == "string" && (y = y.trim(), Bd(y))) {
        const S = $b(y, o.current);
        S !== void 0 && (l[b] = S), b === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !n1.has(r) || l.length !== 2)
      return;
    const [c, h] = l;
    if (typeof c == "number" && typeof h == "number")
      return;
    const d = mv(c), m = mv(h), g = zf(c), v = zf(h);
    if (g !== v && ca[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== m)
      if (rv(d) && rv(m))
        for (let b = 0; b < l.length; b++) {
          const y = l[b];
          typeof y == "string" && (l[b] = parseFloat(y));
        }
      else ca[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || V3(l[c])) && r.push(c);
    r.length && U3(l, r, o);
  }
  measure() {
    const { element: l, name: o } = this;
    return ca[o](window.getComputedStyle(l.current), () => l.measureViewportBox());
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: o, name: r } = this;
    if (!l || !l.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), o[0] = this.measuredOrigin;
    const c = o[o.length - 1];
    c !== void 0 && this.motionValue?.jump(c, !1);
  }
  measureEndState() {
    const { element: l, unresolvedKeyframes: o } = this;
    if (!l || !l.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, !1);
    const r = o.length - 1, c = o[r];
    o[r] = this.measure(), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), this.removedTransforms?.length && this.removedTransforms.forEach(([h, d]) => {
      l.getValue(h).set(d);
    }), this.resolveNoneKeyframes();
  }
}
const Id = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function L3(i) {
  return ub(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
function Wd(i) {
  return ub(i) && "ownerSVGElement" in i;
}
function $d(i, l, o) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    const c = document.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((r) => r != null);
}
function th(i, l, o) {
  const { style: r, vars: c, transformOrigin: h } = i;
  let d = !1, m = !1;
  for (const g in l) {
    const v = l[g];
    if (Ni.has(g)) {
      d = !0;
      continue;
    } else if (Sb(g)) {
      c[g] = v;
      continue;
    } else {
      const b = Dr(v, vs[g]);
      g.startsWith("origin") ? (m = !0, h[g] = b) : r[g] = b;
    }
  }
  if (l.transform || (d || o ? r.transform = Fb(l, i.transform, o) : r.transform && (r.transform = "none")), m) {
    const { originX: g = "50%", originY: v = "50%", originZ: b = 0 } = h;
    r.transformOrigin = `${g} ${v} ${b}`;
  }
}
const H3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, G3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Y3(i, l, o = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? H3 : G3;
  i[h.offset] = `${-r}`, i[h.array] = `${l} ${o}`;
}
const s1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function o1(i, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: h = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, g, v, b) {
  if (th(i, m, v), g) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: S } = i;
  for (const z of s1)
    y[z] !== void 0 && (S[z] = y[z], delete y[z]);
  (S.transform || y.transformOrigin) && (S.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), S.transform && (S.transformBox = b?.transformBox ?? "fill-box", delete y.transformBox), l !== void 0 && (y.x = l), o !== void 0 && (y.y = o), r !== void 0 && (y.scale = r), c !== void 0 && Y3(y, c, h, d, !1);
}
function r1({ top: i, left: l, right: o, bottom: r }) {
  return {
    x: { min: l, max: o },
    y: { min: i, max: r }
  };
}
function q3({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function k3(i, l) {
  if (!l)
    return i;
  const o = l({ x: i.left, y: i.top }), r = l({ x: i.right, y: i.bottom });
  return {
    top: o.y,
    left: o.x,
    bottom: r.y,
    right: r.x
  };
}
function Hf(i) {
  return i === void 0 || i === 1;
}
function vd({ scale: i, scaleX: l, scaleY: o }) {
  return !Hf(i) || !Hf(l) || !Hf(o);
}
function oa(i) {
  return vd(i) || u1(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function u1(i) {
  return pv(i.x) || pv(i.y);
}
function pv(i) {
  return i && i !== "0%";
}
function zr(i, l, o) {
  const r = i - o, c = l * r;
  return o + c;
}
function gv(i, l, o, r, c) {
  return c !== void 0 && (i = zr(i, c, r)), zr(i, o, r) + l;
}
function bd(i, l = 0, o = 1, r, c) {
  i.min = gv(i.min, l, o, r, c), i.max = gv(i.max, l, o, r, c);
}
function c1(i, { x: l, y: o }) {
  bd(i.x, l.translate, l.scale, l.originPoint), bd(i.y, o.translate, o.scale, o.originPoint);
}
const yv = 0.999999999999, vv = 1.0000000000001;
function X3(i, l, o, r = !1) {
  const c = o.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let h, d;
  for (let m = 0; m < c; m++) {
    h = o[m], d = h.projectionDelta;
    const { visualElement: g } = h.options;
    g && g.props.style && g.props.style.display === "contents" || (r && h.options.layoutScroll && h.scroll && h !== h.root && (bn(i.x, -h.scroll.offset.x), bn(i.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, c1(i, d)), r && oa(h.latestValues) && hr(i, h.latestValues, h.layout?.layoutBox));
  }
  l.x < vv && l.x > yv && (l.x = 1), l.y < vv && l.y > yv && (l.y = 1);
}
function bn(i, l) {
  i.min += l, i.max += l;
}
function bv(i, l, o, r, c = 0.5) {
  const h = Gt(i.min, i.max, c);
  bd(i, l, o, h, r);
}
function Sv(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function hr(i, l, o) {
  const r = o ?? i;
  bv(i.x, Sv(l.x, r.x), l.scaleX, l.scale, l.originX), bv(i.y, Sv(l.y, r.y), l.scaleY, l.scale, l.originY);
}
function f1(i, l) {
  return r1(k3(i.getBoundingClientRect(), l));
}
function Z3(i, l, o) {
  const r = f1(i, o), { scroll: c } = l;
  return c && (bn(r.x, c.offset.x), bn(r.y, c.offset.y)), r;
}
const { schedule: eh } = /* @__PURE__ */ Db(queueMicrotask, !1), yn = {
  x: !1,
  y: !1
};
function d1() {
  return yn.x || yn.y;
}
function Q3(i) {
  return i === "x" || i === "y" ? yn[i] ? null : (yn[i] = !0, () => {
    yn[i] = !1;
  }) : yn.x || yn.y ? null : (yn.x = yn.y = !0, () => {
    yn.x = yn.y = !1;
  });
}
function h1(i, l) {
  const o = $d(i), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  };
  return [o, c, () => r.abort()];
}
function K3(i) {
  return !(i.pointerType === "touch" || d1());
}
function P3(i, l, o = {}) {
  const [r, c, h] = h1(i, o);
  return r.forEach((d) => {
    let m = !1, g = !1, v;
    const b = () => {
      d.removeEventListener("pointerleave", D);
    }, y = (R) => {
      v && (v(R), v = void 0), b();
    }, S = (R) => {
      m = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), g && (g = !1, y(R));
    }, z = () => {
      m = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c);
    }, D = (R) => {
      if (R.pointerType !== "touch") {
        if (m) {
          g = !0;
          return;
        }
        y(R);
      }
    }, L = (R) => {
      if (!K3(R))
        return;
      g = !1;
      const K = l(d, R);
      typeof K == "function" && (v = K, d.addEventListener("pointerleave", D, c));
    };
    d.addEventListener("pointerenter", L, c), d.addEventListener("pointerdown", z, c);
  }), h;
}
const m1 = (i, l) => l ? i === l ? !0 : m1(i, l.parentElement) : !1, nh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, J3 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function F3(i) {
  return J3.has(i.tagName) || i.isContentEditable === !0;
}
const I3 = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function W3(i) {
  return I3.has(i.tagName) || i.isContentEditable === !0;
}
const mr = /* @__PURE__ */ new WeakSet();
function Tv(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function Gf(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const $3 = (i, l) => {
  const o = i.currentTarget;
  if (!o)
    return;
  const r = Tv(() => {
    if (mr.has(o))
      return;
    Gf(o, "down");
    const c = Tv(() => {
      Gf(o, "up");
    }), h = () => Gf(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", h, l);
  });
  o.addEventListener("keydown", r, l), o.addEventListener("blur", () => o.removeEventListener("keydown", r), l);
};
function xv(i) {
  return nh(i) && !d1();
}
const Ev = /* @__PURE__ */ new WeakSet();
function tC(i, l, o = {}) {
  const [r, c, h] = h1(i, o), d = (m) => {
    const g = m.currentTarget;
    if (!xv(m) || Ev.has(m))
      return;
    mr.add(g), o.stopPropagation && Ev.add(m);
    const v = l(g, m), b = { ...c, capture: !0 }, y = (D, L) => {
      window.removeEventListener("pointerup", S, b), window.removeEventListener("pointercancel", z, b), mr.has(g) && mr.delete(g), xv(D) && typeof v == "function" && v(D, { success: L });
    }, S = (D) => {
      y(D, g === window || g === document || o.useGlobalTarget || m1(g, D.target));
    }, z = (D) => {
      y(D, !1);
    };
    window.addEventListener("pointerup", S, b), window.addEventListener("pointercancel", z, b);
  };
  return r.forEach((m) => {
    (o.useGlobalTarget ? window : m).addEventListener("pointerdown", d, c), L3(m) && (m.addEventListener("focus", (v) => $3(v, c)), !F3(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), h;
}
const pr = /* @__PURE__ */ new WeakMap();
let gr;
const p1 = (i, l, o) => (r, c) => c && c[0] ? c[0][i + "Size"] : Wd(r) && "getBBox" in r ? r.getBBox()[l] : r[o], eC = /* @__PURE__ */ p1("inline", "width", "offsetWidth"), nC = /* @__PURE__ */ p1("block", "height", "offsetHeight");
function iC({ target: i, borderBoxSize: l }) {
  pr.get(i)?.forEach((o) => {
    o(i, {
      get width() {
        return eC(i, l);
      },
      get height() {
        return nC(i, l);
      }
    });
  });
}
function aC(i) {
  i.forEach(iC);
}
function lC() {
  typeof ResizeObserver > "u" || (gr = new ResizeObserver(aC));
}
function sC(i, l) {
  gr || lC();
  const o = $d(i);
  return o.forEach((r) => {
    let c = pr.get(r);
    c || (c = /* @__PURE__ */ new Set(), pr.set(r, c)), c.add(l), gr?.observe(r);
  }), () => {
    o.forEach((r) => {
      const c = pr.get(r);
      c?.delete(l), c?.size || gr?.unobserve(r);
    });
  };
}
const yr = /* @__PURE__ */ new Set();
let ul;
function oC() {
  ul = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    yr.forEach((l) => l(i));
  }, window.addEventListener("resize", ul);
}
function rC(i) {
  return yr.add(i), ul || oC(), () => {
    yr.delete(i), !yr.size && typeof ul == "function" && (window.removeEventListener("resize", ul), ul = void 0);
  };
}
function Av(i, l) {
  return typeof i == "function" ? rC(i) : sC(i, l);
}
function uC(i) {
  return Wd(i) && i.tagName === "svg";
}
const Cv = (i) => typeof i == "number" ? i : parseFloat(i), wv = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), cl = () => ({
  x: wv(),
  y: wv()
}), Mv = () => ({ min: 0, max: 0 }), re = () => ({
  x: Mv(),
  y: Mv()
}), cC = /* @__PURE__ */ new WeakMap();
function jr(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Ss(i) {
  return typeof i == "string" || Array.isArray(i);
}
const ih = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], Dv = ["initial", ...ih];
function Ur(i) {
  if (jr(i.animate))
    return !0;
  for (let l = 0; l < Dv.length; l++)
    if (Ss(i[Dv[l]]))
      return !0;
  return !1;
}
function g1(i) {
  return !!(Ur(i) || i.variants);
}
function fC(i, l, o) {
  for (const r in l) {
    const c = l[r], h = o[r];
    if (xe(c))
      i.addValue(r, c);
    else if (xe(h))
      i.addValue(r, hl(c, { owner: i }));
    else if (h !== c)
      if (i.hasValue(r)) {
        const d = i.getValue(r);
        d.liveStyle === !0 ? d.jump(c) : d.hasAnimated || d.set(c);
      } else {
        const d = i.getStaticValue(r);
        i.addValue(r, hl(d !== void 0 ? d : c, { owner: i }));
      }
  }
  for (const r in o)
    l[r] === void 0 && i.removeValue(r);
  return l;
}
const Or = { current: null }, ah = { current: !1 }, dC = typeof window < "u";
function y1() {
  if (ah.current = !0, !!dC)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => Or.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      Or.current = !1;
}
const zv = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Rr = {};
function v1(i) {
  Rr = i;
}
function hC() {
  return Rr;
}
class mC {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, o, r) {
    return {};
  }
  constructor({ parent: l, props: o, presenceContext: r, reducedMotionConfig: c, skipAnimations: h, blockInitialAnimation: d, visualState: m }, g = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Qd, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const z = Pt.now();
      this.renderScheduledAt < z && (this.renderScheduledAt = z, qt.render(this.render, !1, !0));
    };
    const { latestValues: v, renderState: b } = m;
    this.latestValues = v, this.baseTarget = { ...v }, this.initialValues = o.initial ? { ...v } : {}, this.renderState = b, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = g, this.blockInitialAnimation = !!d, this.isControllingVariants = Ur(o), this.isVariantNode = g1(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: y, ...S } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const z in S) {
      const D = S[z];
      v[z] !== void 0 && xe(D) && D.set(v[z]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    if (this.current = l, cC.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.isVariantNode && !this.isControllingVariants) {
      let o = this;
      do
        o = o.props.inherit !== !1 && o.parent;
      while (o && !o.isVariantNode);
      if (o) {
        const { variantChildren: r } = o;
        r.add(this), this.removeFromVariantTree = () => r.delete(this);
      }
    }
    this.values.forEach((o, r) => this.bindToMotionValue(r, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (ah.current || y1(), this.shouldReduceMotion = Or.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), _i(this.notifyUpdate), _i(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const o = this.features[l];
      o && (o.unmount(), o.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, o) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), o.accelerate && pd.has(l) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: m, times: g, ease: v, duration: b } = o.accelerate, y = new Qb({
        element: this.current,
        name: l,
        keyframes: m,
        times: g,
        ease: v,
        duration: /* @__PURE__ */ un(b)
      }), S = d(y);
      this.valueSubscriptions.set(l, () => {
        S(), y.cancel();
      });
      return;
    }
    const r = Ni.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = o.on("change", (d) => {
      this.latestValues[l] = d, this.props.onUpdate && qt.preRender(this.notifyUpdate), r && (this.projection && (this.projection.isTransformDirty = !0), dl.get(this.current)?.check()), this.scheduleRender();
    });
    let h;
    typeof window < "u" && window.MotionCheckAppearSync && (h = window.MotionCheckAppearSync(this, l, o)), this.valueSubscriptions.set(l, () => {
      c(), h && h();
    });
  }
  sortNodePosition(l) {
    return !this.current || !l.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in Rr) {
      const o = Rr[l];
      if (!o)
        continue;
      const { isEnabled: r, Feature: c } = o;
      if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const h = this.features[l];
        h.isMounted ? h.update() : (h.mount(), h.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : re();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, o) {
    this.latestValues[l] = o;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, o) {
    const { transformTemplate: r, onUpdate: c } = this.props;
    (l.transformTemplate || r) && this.scheduleRender(), (l.transformTemplate && !r || l.onUpdate && !c) && dl.get(this.current)?.demote(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = o;
    for (let h = 0; h < zv.length; h++) {
      const d = zv[h];
      this.propEventSubscriptions[d] && (this.propEventSubscriptions[d](), delete this.propEventSubscriptions[d]);
      const m = "on" + d, g = l[m];
      g && (this.propEventSubscriptions[d] = this.on(d, g));
    }
    this.prevMotionValues = fC(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(l) {
    return this.props.variants ? this.props.variants[l] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(l, o) {
    const r = this.values.get(l);
    if (o !== r) {
      r && this.removeValue(l), this.bindToMotionValue(l, o), this.values.set(l, o);
      const c = o.get();
      c !== void 0 && (this.latestValues[l] = c);
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const o = this.valueSubscriptions.get(l);
    o && (o(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, o) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let r = this.values.get(l);
    return r === void 0 && o !== void 0 && (r = hl(o ?? this.getDefaultValue?.(l), {
      owner: this
    }), this.addValue(l, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, o) {
    let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return r != null && (typeof r == "string" && (Rd(r) || Nd(r)) ? r = parseFloat(r) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof r != "number" && !Ie.test(r) && Ie.test(o) && (r = Zd(l, o))
    ), this.setBaseTarget(l, xe(r) ? r.get() : r)), xe(r) ? r.get() : r;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, o) {
    this.baseTarget[l] = o;
  }
  on(l, o) {
    return this.events[l] || (this.events[l] = new Er()), this.events[l].add(o);
  }
  notify(l, ...o) {
    this.events[l] && this.events[l].notify(...o);
  }
  scheduleRenderMicrotask() {
    eh.render(this.render);
  }
}
class b1 extends mC {
  constructor() {
    super(...arguments), this.KeyframeResolver = B3;
  }
  sortInstanceNodePosition(l, o) {
    return l.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, o) {
    const r = l.style;
    return r ? r[o] : void 0;
  }
  removeValueFromRenderState(l, { vars: o, style: r }) {
    delete o[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    xe(l) && (this.childSubscription = l.on("change", (o) => {
      this.current && (this.current.textContent = `${o}`);
    }));
  }
}
class ji {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function S1(i, { style: l, vars: o }, r, c) {
  const h = i.style;
  let d;
  for (d in l)
    h[d] = l[d];
  c?.applyProjectionStyles(h, r);
  for (d in o)
    h.setProperty(d, o[d]);
}
const Ts = {};
function T1(i, { layout: l, layoutId: o }) {
  return Ni.has(i) || i.startsWith("origin") || (l || o !== void 0) && (!!Ts[i] || i === "opacity");
}
function lh(i, l, o) {
  const r = i.style, c = l?.style, h = {};
  if (!r)
    return h;
  for (const d in r)
    (xe(r[d]) || c && xe(c[d]) || T1(d, i) || o?.getValue(d)?.liveStyle !== void 0) && (h[d] = r[d]);
  return h;
}
function pC(i) {
  return window.getComputedStyle(i);
}
class gC extends b1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = S1;
  }
  mount(l) {
    Vr(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, o) {
    if (Ni.has(o))
      return this.projection?.isProjecting ? bs(o) : NA(l, o);
    {
      const r = pC(l), c = (Sb(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return f1(l, o);
  }
  build(l, o, r) {
    th(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return lh(l, o, r);
  }
}
const x1 = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]), E1 = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function yC(i, l, o, r) {
  S1(i, l, void 0, r);
  for (const c in l.attrs)
    i.setAttribute(x1.has(c) ? c : Fd(c), l.attrs[c]);
}
function A1(i, l, o) {
  const r = lh(i, l, o);
  for (const c in i)
    if (xe(i[c]) || xe(l[c])) {
      const h = $n.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[h] = i[c];
    }
  return r;
}
class vC extends b1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = re;
  }
  getBaseTargetFromProps(l, o) {
    return Ni.has(o) ? super.getBaseTargetFromProps(l, o) ?? bs(o) : l[o];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(l) {
    return Ni.has(l) ? this.latestValues[l] ?? bs(l) : void 0;
  }
  readValueFromInstance(l, o) {
    if (Ni.has(o)) {
      const r = Hb(o);
      return r && r.default || 0;
    }
    if (s1.includes(o)) {
      const c = getComputedStyle(l)[o];
      if (typeof c == "string" && c)
        return c.trim();
    }
    return o = x1.has(o) ? o : Fd(o), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return A1(l, o, r);
  }
  build(l, o, r) {
    o1(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    yC(l, o, r, c);
  }
  mount(l) {
    this.isSVGTag = E1(l.tagName), super.mount(l);
  }
}
function C1(i, l) {
  if (!Array.isArray(l))
    return !1;
  const o = l.length;
  if (o !== i.length)
    return !1;
  for (let r = 0; r < o; r++)
    if (l[r] !== i[r])
      return !1;
  return !0;
}
const bC = [...ih].reverse();
function SC(i) {
  let l = (m) => Promise.all(m.map(({ animation: g, options: v }) => O3(i, g, v))), o = Ov(), r = !0, c = !1;
  function h(m) {
    const { props: g, parent: v, manuallyAnimateOnMount: b } = i, y = r || c, S = [], z = /* @__PURE__ */ new Set();
    let D = {}, L = 1 / 0, R = i;
    do
      R = R.props.inherit !== !1 && R.parent;
    while (R && !R.isControllingVariants);
    if (bC.forEach((P, F) => {
      const U = o[P], st = g[P], at = R && R.props[P], j = st !== void 0 ? st : Ss(at) || at === !1 ? at : void 0, _ = Ss(j), St = P === m ? U.isActive : null;
      St === !1 && (L = F);
      const gt = _ && st === void 0 && !(y && b);
      if (U.protectedKeys = { ...D }, !U.isActive && St === null || !j && !U.prevProp || jr(j) || typeof j == "boolean")
        return;
      if (P === "exit" && U.isActive && St !== !0) {
        D = {
          ...D,
          ...U.prevResolvedValues
        };
        return;
      }
      const I = TC(U.prevProp, j);
      let J = I || _ && (St && !gt || F > L), et = !1;
      const nt = Array.isArray(j) ? j : [j];
      let W = {};
      if (St !== !1)
        for (const X of nt) {
          const { transition: $, transitionEnd: tt, ...H } = da(i, X, e1(i, P)) || {};
          W = {
            ...W,
            ...H,
            ...tt
          };
        }
      const { prevResolvedValues: G } = U;
      for (const X in { ...G, ...W }) {
        if (X in D)
          continue;
        const $ = W[X], tt = G[X], H = Array.isArray($) && Array.isArray(tt) ? !C1($, tt) || I : $ !== tt;
        if (H && $ == null)
          z.add(X);
        else if (H || $ !== void 0 && z.has(X)) {
          J = !0, z.delete(X) && (et = !0), U.needsAnimating[X] = !0;
          const bt = i.getValue(X);
          bt && (bt.liveStyle = !1);
        } else
          U.protectedKeys[X] = !0;
      }
      if (U.prevProp = j, U.prevResolvedValues = W, U.isActive && (D = { ...D, ...W }), J && (!(gt && I) || et))
        for (const X of nt) {
          const $ = { type: P };
          if (typeof X == "string" && y && b && v?.enteringChildren) {
            const tt = da(v, X)?.transition?.delayChildren;
            $.delay = Ib(v.enteringChildren, i, tt);
          }
          S.push({ animation: X, options: $ });
        }
    }), z.size) {
      const { initial: P } = g, F = {}, U = typeof P != "boolean" && da(i, Array.isArray(P) ? P[0] : P, i.presenceContext?.custom);
      U && U.transition && (F.transition = U.transition), z.forEach((st) => {
        const at = i.getValue(st);
        at && (at.liveStyle = !0);
        const j = U && !Array.isArray(P) ? U[st] : void 0, _ = i.getBaseTargetFromProps(g, st);
        F[st] = (j !== void 0 ? j : _ !== void 0 && !xe(_) ? _ : i.initialValues[st] === void 0 ? i.baseTarget[st] : void 0) ?? null;
      }), S.push({ animation: F });
    }
    const K = y && i.blockInitialAnimation || r && !b && (g.initial === !1 || g.initial === g.animate);
    return r = c = !1, !K && S.length ? l(S) : Promise.resolve();
  }
  function d(m, g) {
    if (o[m].isActive === g)
      return Promise.resolve();
    i.variantChildren?.forEach((b) => b.animationState?.setActive(m, g)), o[m].isActive = g;
    const v = h(m);
    for (const b in o)
      o[b].protectedKeys = {};
    return v;
  }
  return {
    animateChanges: h,
    setActive: d,
    /**
     * Allows tests to inject a mocked animate function.
     * @internal
     */
    setAnimateFunction: (m) => {
      l = m(i);
    },
    getState: () => o,
    reset: () => {
      o = Ov(), c = !0;
    }
  };
}
function TC(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !C1(l, i) : !1;
}
function Ov() {
  const i = {};
  for (const l of ih)
    i[l] = {
      isActive: l === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  return i;
}
function Sd(i, l) {
  i.min = l.min, i.max = l.max;
}
function gn(i, l) {
  Sd(i.x, l.x), Sd(i.y, l.y);
}
function Rv(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const w1 = 1e-4, xC = 1 - w1, EC = 1 + w1, M1 = 0.01, AC = 0 - M1, CC = 0 + M1;
function Oe(i) {
  return i.max - i.min;
}
function wC(i, l, o) {
  return Math.abs(i - l) <= o;
}
function Nv(i, l, o, r = 0.5) {
  i.origin = r, i.originPoint = Gt(l.min, l.max, i.origin), i.scale = Oe(o) / Oe(l), i.translate = Gt(o.min, o.max, i.origin) - i.originPoint, (i.scale >= xC && i.scale <= EC || isNaN(i.scale)) && (i.scale = 1), (i.translate >= AC && i.translate <= CC || isNaN(i.translate)) && (i.translate = 0);
}
function ds(i, l, o, r) {
  Nv(i.x, l.x, o.x, r ? r.originX : void 0), Nv(i.y, l.y, o.y, r ? r.originY : void 0);
}
function _v(i, l, o, r = 0) {
  const c = r ? Gt(o.min, o.max, r) : o.min;
  i.min = c + l.min, i.max = i.min + Oe(l);
}
function MC(i, l, o, r) {
  _v(i.x, l.x, o.x, r?.x), _v(i.y, l.y, o.y, r?.y);
}
function Vv(i, l, o, r = 0) {
  const c = r ? Gt(o.min, o.max, r) : o.min;
  i.min = l.min - c, i.max = i.min + Oe(l);
}
function Nr(i, l, o, r) {
  Vv(i.x, l.x, o.x, r?.x), Vv(i.y, l.y, o.y, r?.y);
}
function jv(i, l, o, r, c) {
  return i -= l, i = zr(i, 1 / o, r), c !== void 0 && (i = zr(i, 1 / c, r)), i;
}
function DC(i, l = 0, o = 1, r = 0.5, c, h = i, d = i) {
  if (_n.test(l) && (l = parseFloat(l), l = Gt(d.min, d.max, l / 100) - d.min), typeof l != "number")
    return;
  let m = Gt(h.min, h.max, r);
  i === h && (m -= l), i.min = jv(i.min, l, o, m, c), i.max = jv(i.max, l, o, m, c);
}
function Uv(i, l, [o, r, c], h, d) {
  DC(i, l[o], l[r], l[c], l.scale, h, d);
}
const zC = ["x", "scaleX", "originX"], OC = ["y", "scaleY", "originY"];
function Bv(i, l, o, r) {
  Uv(i.x, l, zC, o ? o.x : void 0, r ? r.x : void 0), Uv(i.y, l, OC, o ? o.y : void 0, r ? r.y : void 0);
}
function Lv(i) {
  return i.translate === 0 && i.scale === 1;
}
function D1(i) {
  return Lv(i.x) && Lv(i.y);
}
function Hv(i, l) {
  return i.min === l.min && i.max === l.max;
}
function RC(i, l) {
  return Hv(i.x, l.x) && Hv(i.y, l.y);
}
function Gv(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function z1(i, l) {
  return Gv(i.x, l.x) && Gv(i.y, l.y);
}
function Yv(i) {
  return Oe(i.x) / Oe(i.y);
}
function qv(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function vn(i) {
  return [i("x"), i("y")];
}
function kv(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const fs = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (ft.test(i))
        i = parseFloat(i);
      else
        return i;
    const o = kv(i, l.target.x), r = kv(i, l.target.y);
    return `${o}% ${r}%`;
  }
}, NC = {
  correct: (i, { treeScale: l, projectionDelta: o }) => {
    const r = i, c = Ie.parse(i);
    if (c.length > 5)
      return r;
    const h = Ie.createTransformer(i), d = typeof c[0] != "number" ? 1 : 0, m = o.x.scale * l.x, g = o.y.scale * l.y;
    c[0 + d] /= m, c[1 + d] /= g;
    const v = Gt(m, g, 0.5);
    return typeof c[2 + d] == "number" && (c[2 + d] /= v), typeof c[3 + d] == "number" && (c[3 + d] /= v), h(c);
  }
};
function _C(i, l, o) {
  let r = "";
  const c = i.x.translate / l.x, h = i.y.translate / l.y, d = o?.z || 0;
  if ((c || h || d) && (r = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), o) {
    const { transformPerspective: v, rotate: b, pathRotation: y, rotateX: S, rotateY: z, skewX: D, skewY: L } = o;
    v && (r = `perspective(${v}px) ${r}`), b && (r += `rotate(${b}deg) `), y && (r += `rotate(${y}deg) `), S && (r += `rotateX(${S}deg) `), z && (r += `rotateY(${z}deg) `), D && (r += `skewX(${D}deg) `), L && (r += `skewY(${L}deg) `);
  }
  const m = i.x.scale * l.x, g = i.y.scale * l.y;
  return (m !== 1 || g !== 1) && (r += `scale(${m}, ${g})`), r || "none";
}
const VC = Id.length, Xv = (i) => typeof i == "number" || ft.test(i);
function jC(i, l, o, r, c, h) {
  c ? (i.opacity = Gt(0, o.opacity ?? 1, UC(r)), i.opacityExit = Gt(l.opacity ?? 1, 0, BC(r))) : h && (i.opacity = Gt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < VC; d++) {
    const m = Id[d];
    let g = Zv(l, m), v = Zv(o, m);
    if (g === void 0 && v === void 0)
      continue;
    g || (g = 0), v || (v = 0), g === 0 || v === 0 || Xv(g) === Xv(v) ? (i[m] = Math.max(Gt(Cv(g), Cv(v), r), 0), (_n.test(v) || _n.test(g)) && (i[m] += "%")) : i[m] = v;
  }
  (l.rotate || o.rotate) && (i.rotate = Gt(l.rotate || 0, o.rotate || 0, r));
}
function Zv(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const UC = /* @__PURE__ */ O1(0, 0.5, yb), BC = /* @__PURE__ */ O1(0.5, 0.95, Sn);
function O1(i, l, o) {
  return (r) => r < i ? 0 : r > l ? 1 : o(/* @__PURE__ */ ha(i, l, r));
}
function LC(i, l, o) {
  const r = xe(i) ? i : hl(i);
  return r.start(Jd("", r, l, o)), r.animation;
}
function xs(i, l, o, r = { passive: !0 }) {
  return i.addEventListener(l, o, r), () => i.removeEventListener(l, o, r);
}
const HC = (i, l) => i.depth - l.depth;
class GC {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    Od(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    xr(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(HC), this.isDirty = !1, this.children.forEach(l);
  }
}
function YC(i, l) {
  const o = Pt.now(), r = ({ timestamp: c }) => {
    const h = c - o;
    h >= l && (_i(r), i(h - l));
  };
  return qt.setup(r, !0), () => _i(r);
}
function vr(i) {
  return xe(i) ? i.get() : i;
}
class qC {
  constructor() {
    this.members = [];
  }
  add(l) {
    Od(this.members, l);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r === l || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (xr(this.members, r), r.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (xr(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(l) {
    for (let o = this.members.indexOf(l) - 1; o >= 0; o--) {
      const r = this.members[o];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return this.promote(r), !0;
    }
    return !1;
  }
  promote(l, o) {
    const r = this.lead;
    if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
      r.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = r.options, { layoutDependency: h } = l.options;
      (c === void 0 || c !== h) && (l.resumeFrom = r, o && (r.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((l) => {
      l.options.onExitComplete?.(), l.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach((l) => l.instance && l.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const kC = {
  borderRadius: {
    ...fs,
    applyTo: [...Id]
  },
  borderTopLeftRadius: fs,
  borderTopRightRadius: fs,
  borderBottomLeftRadius: fs,
  borderBottomRightRadius: fs,
  boxShadow: NC
}, br = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
Object.assign(Ts, {
  ...kC,
  ...Ts
});
const Yf = ["", "X", "Y", "Z"], XC = 1e3;
let ZC = 0;
function qf(i, l, o, r) {
  const { latestValues: c } = l;
  c[i] && (o[i] = c[i], l.setStaticValue(i, 0), r && (r[i] = 0));
}
const kf = ({ instance: i }) => i && dl.get(i)?.demote();
function R1(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const o = a1(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", qt, !(c || h));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && R1(r);
}
function N1({ attachResizeListener: i, defaultParent: l, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(d = {}, m = l?.()) {
      this.id = ZC++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(PC), this.nodes.forEach(nw), this.nodes.forEach(iw), this.nodes.forEach(JC);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new GC());
    }
    addEventListener(d, m) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Er()), this.eventHandlers.get(d).add(m);
    }
    notifyListeners(d, ...m) {
      const g = this.eventHandlers.get(d);
      g && g.notify(...m);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    /**
     * Lifecycles
     */
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = Wd(d) && !uC(d), this.instance = d;
      const { layoutId: m, layout: g, visualElement: v } = this.options;
      if (v && !v.current && v.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0), i) {
        let b, y = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        qt.read(() => {
          y = window.innerWidth;
        }), i(d, () => {
          const z = window.innerWidth;
          z !== y && (y = z, this.root.updateBlockedByResize = !0, b && b(), b = YC(S, 250), br.hasAnimatedSinceResize && (br.hasAnimatedSinceResize = !1, this.nodes.forEach(Pv)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && v && (m || g) && this.addEventListener("didUpdate", ({ delta: b, hasLayoutChanged: y, hasRelativeLayoutChanged: S, layout: z }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const D = this.options.transition || v.getDefaultTransition() || rw, { onLayoutAnimationStart: L, onLayoutAnimationComplete: R } = v.getProps(), K = !this.targetLayout || !z1(this.targetLayout, z), P = !y && S;
        if (this.options.layoutRoot || this.resumeFrom || P || y && (K || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const F = {
            ...Pd(D, "layout"),
            onPlay: L,
            onComplete: R
          };
          (v.shouldReduceMotion || this.options.layoutRoot) && (F.delay = 0, F.type = !1), this.startAnimation(F), this.setAnimationOrigin(b, P, F.path);
        } else
          y || Pv(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = z;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), _i(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(aw), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && R1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      kf(this), this.isLayoutDirty = !0;
      for (let b = 0; b < this.path.length; b++) {
        const y = this.path[b];
        y.shouldResetTransform = !0, kf(y), (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1), y.isAnimationBlocked && (y.dragSnapshot || (y.dragSnapshot = y.measure()), this.dragAncestor = y);
      }
      const { layoutId: m, layout: g } = this.options;
      if (m === void 0 && !g)
        return;
      const v = this.getTransformTemplate();
      this.prevTransformTemplateValue = v ? v(this.latestValues, "") : void 0, this.updateSnapshot(), d && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const g = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach(IC), this.nodes.forEach(Qv);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Kv);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach($C), this.nodes.forEach(tw), this.nodes.forEach(ew), this.nodes.forEach(QC), this.nodes.forEach(KC)) : this.nodes.forEach(Kv), this.clearAllSnapshots();
      const m = Pt.now();
      ae.delta = jn(0, 1e3 / 60, m - ae.timestamp), ae.timestamp = m, ae.isProcessing = !0, _f.update.process(ae), _f.preRender.process(ae), _f.render.process(ae), ae.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, eh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(FC), this.sharedNodes.forEach(lw);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, qt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      qt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Oe(this.snapshot.measuredBox.x) && !Oe(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++)
          this.path[g].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = re()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m && m.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0);
    }
    updateScroll(d = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (m = !1), m && this.instance) {
        const g = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: g,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      d && kf(this);
      const m = this.projectionDelta && !D1(this.projectionDelta), g = this.getTransformTemplate(), v = g ? g(this.latestValues, "") : void 0, b = v !== this.prevTransformTemplateValue;
      d && this.instance && (m || oa(this.latestValues) || b) && (c(this.instance, v), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const m = this.measurePageBox();
      let g = this.removeElementScroll(m);
      return d && (g = this.removeTransform(g)), uw(g), {
        animationId: this.root.animationId,
        measuredBox: m,
        layoutBox: g,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d)
        return re();
      const m = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(cw))) {
        const { scroll: v } = this.root;
        v && (bn(m.x, v.offset.x), bn(m.y, v.offset.y));
      }
      return m;
    }
    removeElementScroll(d) {
      const m = re();
      if (gn(m, d), this.scroll?.wasRoot)
        return m;
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g], { scroll: b, options: y } = v;
        v !== this.root && b && y.layoutScroll && (b.wasRoot && gn(m, d), bn(m.x, b.offset.x), bn(m.y, b.offset.y));
      }
      return m;
    }
    applyTransform(d, m = !1, g) {
      const v = g || re();
      gn(v, d);
      for (let b = 0; b < this.path.length; b++) {
        const y = this.path[b];
        !m && y.options.layoutScroll && y.scroll && y !== y.root && (bn(v.x, -y.scroll.offset.x), bn(v.y, -y.scroll.offset.y)), oa(y.latestValues) && hr(v, y.latestValues, y.layout?.layoutBox);
      }
      return oa(this.latestValues) && hr(v, this.latestValues, this.layout?.layoutBox), v;
    }
    removeTransform(d) {
      const m = re();
      gn(m, d);
      for (let g = 0; g < this.path.length; g++) {
        const v = this.path[g];
        if (!oa(v.latestValues))
          continue;
        let b;
        v.instance && (vd(v.latestValues) && v.updateSnapshot(), b = re(), gn(b, v.measurePageBox())), Bv(m, v.latestValues, v.snapshot?.layoutBox, b);
      }
      return oa(this.latestValues) && Bv(m, this.latestValues), m;
    }
    setTargetDelta(d) {
      this.targetDelta = d, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ae.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const g = !!this.resumingFrom || this !== m;
      if (!(d || g && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: b, layoutId: y } = this.options;
      if (!this.layout || !(b || y))
        return;
      this.resolvedRelativeTargetAt = ae.timestamp;
      const S = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = re(), this.targetWithTransforms = re()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), MC(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : gn(this.target, this.layout.layoutBox), c1(this.target, this.targetDelta)) : gn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || vd(this.parent.latestValues) || u1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(d, m, g) {
      this.relativeParent = d, this.forceRelativeParentToResolveTarget(), this.relativeTarget = re(), this.relativeTargetOrigin = re(), Nr(this.relativeTargetOrigin, m, g, this.options.layoutAnchor || void 0), gn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(), m = !!this.resumingFrom || this !== d;
      let g = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (g = !1), this.resolvedRelativeTargetAt === ae.timestamp && (g = !1), g)
        return;
      const { layout: v, layoutId: b } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(v || b))
        return;
      gn(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, S = this.treeScale.y;
      X3(this.layoutCorrected, this.treeScale, this.path, m), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = re());
      const { target: z } = d;
      if (!z) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Rv(this.prevProjectionDelta.x, this.projectionDelta.x), Rv(this.prevProjectionDelta.y, this.projectionDelta.y)), ds(this.projectionDelta, this.layoutCorrected, z, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== S || !qv(this.projectionDelta.x, this.prevProjectionDelta.x) || !qv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", z));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      if (this.options.visualElement?.scheduleRender(), d) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = cl(), this.projectionDelta = cl(), this.projectionDeltaWithTransform = cl();
    }
    setAnimationOrigin(d, m = !1, g) {
      const v = this.snapshot, b = v ? v.latestValues : {}, y = { ...this.latestValues }, S = cl();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const z = re(), D = v ? v.source : void 0, L = this.layout ? this.layout.source : void 0, R = D !== L, K = this.getStack(), P = !K || K.members.length <= 1, F = !!(R && !P && this.options.crossfade === !0 && !this.path.some(ow));
      this.animationProgress = 0;
      let U;
      const st = g?.interpolateProjection(d);
      this.mixTargetDelta = (at) => {
        const j = at / 1e3, _ = st?.(j);
        _ ? (S.x.translate = _.x, S.x.scale = Gt(d.x.scale, 1, j), S.x.origin = d.x.origin, S.x.originPoint = d.x.originPoint, S.y.translate = _.y, S.y.scale = Gt(d.y.scale, 1, j), S.y.origin = d.y.origin, S.y.originPoint = d.y.originPoint) : (Jv(S.x, d.x, j), Jv(S.y, d.y, j)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Nr(z, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), sw(this.relativeTarget, this.relativeTargetOrigin, z, j), U && RC(this.relativeTarget, U) && (this.isProjectionDirty = !1), U || (U = re()), gn(U, this.relativeTarget)), R && (this.animationValues = y, jC(y, b, this.latestValues, j, F, P)), _ && _.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = _.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (_i(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = qt.update(() => {
        br.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = hl(0)), this.motionValue.jump(0, !1), this.currentAnimation = LC(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), d.onUpdate && d.onUpdate(m);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), TA(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(XC), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead(), { targetWithTransforms: m, layout: g, latestValues: v } = d;
      let { target: b } = d;
      if (!(!m || !b || !g)) {
        if (this !== d && this.layout && g && _1(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
          b = this.target || re();
          const y = Oe(this.layout.layoutBox.x);
          b.x.min = d.target.x.min, b.x.max = b.x.min + y;
          const S = Oe(this.layout.layoutBox.y);
          b.y.min = d.target.y.min, b.y.max = b.y.min + S;
        }
        gn(m, b), hr(m, v), ds(this.projectionDeltaWithTransform, this.layoutCorrected, m, v);
      }
    }
    registerSharedNode(d, m) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new qC()), this.sharedNodes.get(d).add(m);
      const v = m.options.initialPromotionConfig;
      m.promote({
        transition: v ? v.transition : void 0,
        preserveFollowOpacity: v && v.shouldPreserveFollowOpacity ? v.shouldPreserveFollowOpacity(m) : void 0
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: m, preserveFollowOpacity: g } = {}) {
      const v = this.getStack();
      v && v.promote(this, g), d && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m });
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      let m = !1;
      const { latestValues: g } = d;
      if ((g.z || g.rotate || g.rotateX || g.rotateY || g.rotateZ || g.skewX || g.skewY) && (m = !0), !m)
        return;
      const v = {};
      g.z && qf("z", d, v, this.animationValues);
      for (let b = 0; b < Yf.length; b++)
        qf(`rotate${Yf[b]}`, d, v, this.animationValues), qf(`skew${Yf[b]}`, d, v, this.animationValues);
      d.render();
      for (const b in v)
        d.setStaticValue(b, v[b]), this.animationValues && (this.animationValues[b] = v[b]);
      d.scheduleRender();
    }
    applyProjectionStyles(d, m) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, d.visibility = "", d.opacity = "", d.pointerEvents = vr(m?.pointerEvents) || "", d.transform = g ? g(this.latestValues, "") : "none";
        return;
      }
      const v = this.getLead();
      if (!this.projectionDelta || !this.layout || !v.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, d.pointerEvents = vr(m?.pointerEvents) || ""), this.hasProjected && !oa(this.latestValues) && (d.transform = g ? g({}, "") : "none", this.hasProjected = !1);
        return;
      }
      d.visibility = "";
      const b = v.animationValues || v.latestValues;
      this.applyTransformsToTarget();
      let y = _C(this.projectionDeltaWithTransform, this.treeScale, b);
      g && (y = g(b, y)), d.transform = y;
      const { x: S, y: z } = this.projectionDelta;
      d.transformOrigin = `${S.origin * 100}% ${z.origin * 100}% 0`, v.animationValues ? d.opacity = v === this ? b.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : b.opacityExit : d.opacity = v === this ? b.opacity !== void 0 ? b.opacity : "" : b.opacityExit !== void 0 ? b.opacityExit : 0;
      for (const D in Ts) {
        if (b[D] === void 0)
          continue;
        const { correct: L, applyTo: R, isCSSVariable: K } = Ts[D], P = y === "none" ? b[D] : L(b[D], v);
        if (R) {
          const F = R.length;
          for (let U = 0; U < F; U++)
            d[R[U]] = P;
        } else
          K ? this.options.visualElement.renderState.vars[D] = P : d[D] = P;
      }
      this.options.layoutId && (d.pointerEvents = v === this ? vr(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(Qv), this.root.sharedNodes.clear();
    }
  };
}
function QC(i) {
  i.updateLayout(), WC(i);
}
function KC(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: r } = i.layout, { animationType: c } = i.options, h = l.source !== i.layout.source;
    if (c === "size")
      vn((b) => {
        const y = h ? l.measuredBox[b] : l.layoutBox[b], S = Oe(y);
        y.min = o[b].min, y.max = y.min + S;
      });
    else if (c === "x" || c === "y") {
      const b = c === "x" ? "y" : "x";
      Sd(h ? l.measuredBox[b] : l.layoutBox[b], o[b]);
    } else _1(c, l.layoutBox, o) && vn((b) => {
      const y = h ? l.measuredBox[b] : l.layoutBox[b], S = Oe(o[b]);
      y.max = y.min + S, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[b].max = i.relativeTarget[b].min + S);
    });
    const d = cl();
    ds(d, o, l.layoutBox);
    const m = cl();
    h ? ds(m, i.applyTransform(r, !0), l.measuredBox) : ds(m, o, l.layoutBox);
    const g = !D1(d);
    let v = !1;
    if (!i.resumeFrom) {
      const b = i.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: y, layout: S } = b;
        if (y && S) {
          const z = i.options.layoutAnchor || void 0, D = re();
          Nr(D, l.layoutBox, y.layoutBox, z);
          const L = re();
          Nr(L, o, S.layoutBox, z), z1(D, L) || (v = !0), b.options.layoutRoot && (i.relativeTarget = L, i.relativeTargetOrigin = D, i.relativeParent = b);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: o,
      snapshot: l,
      delta: m,
      layoutDelta: d,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: v
    });
  } else if (i.isLead()) {
    const { onExitComplete: o } = i.options;
    o && o();
  }
  i.options.transition = void 0;
}
function PC(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function JC(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function FC(i) {
  i.clearSnapshot();
}
function Qv(i) {
  i.clearMeasurements();
}
function IC(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function Kv(i) {
  i.isLayoutDirty = !1;
}
function WC(i) {
  const { snapshot: l, dragAncestor: o } = i, r = o?.layout;
  if (!l || !r || i.resumeFrom || i.isAnimationBlocked)
    return;
  const c = o.dragSnapshot;
  vn((h) => bn(l.layoutBox[h], r.layoutBox[h].min - c.layoutBox[h].min));
}
function $C(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.dragSnapshot || i.layout, i.isLayoutDirty = !0);
}
function tw(i) {
  i.relativeTarget && i.relativeParent?.isLayoutDirty && (i.currentAnimation ? i.isLayoutDirty = !0 : (i.targetDelta = void 0, i.removeRelativeTarget()));
}
function ew(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function Pv(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function nw(i) {
  i.resolveTargetDelta();
}
function iw(i) {
  i.calcProjection();
}
function aw(i) {
  i.resetSkewAndRotation();
}
function lw(i) {
  i.removeLeadSnapshot();
}
function Jv(i, l, o) {
  i.translate = Gt(l.translate, 0, o), i.scale = Gt(l.scale, 1, o), i.origin = l.origin, i.originPoint = l.originPoint;
}
function Fv(i, l, o, r) {
  i.min = Gt(l.min, o.min, r), i.max = Gt(l.max, o.max, r);
}
function sw(i, l, o, r) {
  Fv(i.x, l.x, o.x, r), Fv(i.y, l.y, o.y, r);
}
function ow(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const rw = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Iv = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), Wv = Iv("applewebkit/") && !Iv("chrome/") ? Math.round : Sn;
function $v(i) {
  i.min = Wv(i.min), i.max = Wv(i.max);
}
function uw(i) {
  $v(i.x), $v(i.y);
}
function _1(i, l, o) {
  return i === "position" || i === "preserve-aspect" && !wC(Yv(l), Yv(o), 0.2);
}
function cw(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const fw = N1({
  attachResizeListener: (i, l) => xs(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Xf = {
  current: void 0
}, V1 = N1({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!Xf.current) {
      const i = new fw({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), Xf.current = i;
    }
    return Xf.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), j1 = Z.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function dw(i = !0) {
  const l = Z.useContext(zd);
  if (l === null)
    return [!0, null];
  const { isPresent: o, onExitComplete: r, register: c } = l, h = Z.useId();
  Z.useEffect(() => {
    if (i)
      return c(h);
  }, [i]);
  const d = Z.useCallback(() => i && r && r(h), [h, r, i]);
  return !o && r ? [!1, d] : [!0];
}
const U1 = Z.createContext({ strict: !1 }), t0 = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
};
let e0 = !1;
function hw() {
  if (e0)
    return;
  const i = {};
  for (const l in t0)
    i[l] = {
      isEnabled: (o) => t0[l].some((r) => !!o[r])
    };
  v1(i), e0 = !0;
}
function B1() {
  return hw(), hC();
}
function mw(i) {
  const l = B1();
  for (const o in i)
    l[o] = {
      ...l[o],
      ...i[o]
    };
  v1(l);
}
const Br = /* @__PURE__ */ Z.createContext({});
function pw(i, l) {
  if (Ur(i)) {
    const { initial: o, animate: r } = i;
    return {
      initial: o === !1 || Ss(o) ? o : void 0,
      animate: Ss(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function gw(i) {
  const { initial: l, animate: o } = pw(i, Z.useContext(Br));
  return Z.useMemo(() => ({ initial: l, animate: o }), [n0(l), n0(o)]);
}
function n0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const sh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function L1(i, l, o) {
  for (const r in l)
    !xe(l[r]) && !T1(r, o) && (i[r] = l[r]);
}
function yw({ transformTemplate: i }, l) {
  return Z.useMemo(() => {
    const o = sh();
    return th(o, l, i), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function vw(i, l) {
  const o = i.style || {}, r = {};
  return L1(r, o, i), Object.assign(r, yw(i, l)), r;
}
function bw(i, l) {
  const o = {}, r = vw(i, l);
  return i.drag && i.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const H1 = () => ({
  ...sh(),
  attrs: {}
});
function Sw(i, l, o, r) {
  const c = Z.useMemo(() => {
    const h = H1();
    return o1(h, l, E1(r), i.transformTemplate, i.style), {
      ...h.attrs,
      style: { ...h.style }
    };
  }, [l]);
  if (i.style) {
    const h = {};
    L1(h, i.style, i), c.style = { ...h, ...c.style };
  }
  return c;
}
const Tw = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport"
]);
function _r(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || Tw.has(i);
}
function xw(i, l) {
  return i.startsWith("on") ? !_r(i) : l?.(i) ?? !_r(i);
}
function Ew(i, l, o, r) {
  const c = {};
  for (const h in i)
    h === "values" && typeof i.values == "object" || xe(i[h]) || (xw(h, r) || o === !0 && _r(h) || !l && !_r(h) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && h.startsWith("onDrag")) && (c[h] = i[h]);
  return c;
}
const Aw = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function oh(i) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof i != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    i.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(Aw.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function Cw(i, l, o, { latestValues: r }, c, h = !1, d, m) {
  const v = (d ?? oh(i) ? Sw : bw)(l, r, c, i), b = Ew(l, typeof i == "string", h, m), y = i !== Z.Fragment ? { ...b, ...v, ref: o } : {}, { children: S } = l, z = Z.useMemo(() => xe(S) ? S.get() : S, [S]);
  return Z.createElement(i, {
    ...y,
    children: z
  });
}
function ww({ scrapeMotionValuesFromProps: i, createRenderState: l }, o, r, c) {
  return {
    latestValues: Mw(o, r, c, i),
    renderState: l()
  };
}
function Mw(i, l, o, r) {
  const c = {}, h = r(i, {});
  for (const S in h)
    c[S] = vr(h[S]);
  let { initial: d, animate: m } = i;
  const g = Ur(i), v = g1(i);
  l && v && !g && i.inherit !== !1 && (d === void 0 && (d = l.initial), m === void 0 && (m = l.animate));
  let b = o ? o.initial === !1 : !1;
  b = b || d === !1;
  const y = b ? m : d;
  if (y && typeof y != "boolean" && !jr(y)) {
    const S = Array.isArray(y) ? y : [y];
    for (let z = 0; z < S.length; z++) {
      const D = t1(i, S[z]);
      if (D) {
        const { transitionEnd: L, transition: R, ...K } = D;
        for (const P in K) {
          let F = K[P];
          if (Array.isArray(F)) {
            const U = b ? F.length - 1 : 0;
            F = F[U];
          }
          F !== null && (c[P] = F);
        }
        for (const P in L)
          c[P] = L[P];
      }
    }
  }
  return c;
}
const G1 = (i) => (l, o) => {
  const r = Z.useContext(Br), c = Z.useContext(zd), h = () => ww(i, l, r, c);
  return o ? h() : x2(h);
}, Dw = /* @__PURE__ */ G1({
  scrapeMotionValuesFromProps: lh,
  createRenderState: sh
}), zw = /* @__PURE__ */ G1({
  scrapeMotionValuesFromProps: A1,
  createRenderState: H1
}), Ow = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function Rw(i, l, o) {
  const r = Z.useRef(o);
  Z.useInsertionEffect(() => {
    r.current = o;
  });
  const c = Z.useRef(null);
  return Z.useCallback((h) => {
    h && i.onMount?.(h), l && (h ? l.mount(h) : l.unmount());
    const d = r.current;
    if (typeof d == "function")
      if (h) {
        const m = d(h);
        typeof m == "function" && (c.current = m);
      } else c.current ? (c.current(), c.current = null) : d(h);
    else d && (d.current = h);
  }, [l]);
}
const Y1 = Z.createContext({});
function ll(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function Nw(i, l, o, r, c, h) {
  const { visualElement: d } = Z.useContext(Br), m = Z.useContext(U1), g = Z.useContext(zd), v = Z.useContext(j1), b = v.reducedMotion, y = v.skipAnimations, S = Z.useRef(null), z = Z.useRef(!1);
  r = r || m.renderer, !S.current && r && (S.current = r(i, {
    visualState: l,
    parent: d,
    props: o,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: b,
    skipAnimations: y,
    isSVG: h
  }), z.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const D = S.current, L = Z.useContext(Y1);
  D && !D.projection && c && (D.type === "html" || D.type === "svg") && _w(S.current, o, c, L);
  const R = Z.useRef(!1);
  Z.useInsertionEffect(() => {
    D && R.current && D.update(o, g);
  });
  const K = o[i1], P = Z.useRef(!!K && typeof window < "u" && !window.MotionHandoffIsComplete?.(K) && window.MotionHasOptimisedAnimation?.(K));
  return Iy(() => {
    !z.current || !D || (D.animationState?.animateChanges(), D.enteringChildren = void 0);
  }, []), Iy(() => {
    z.current = !0, D && (R.current = !0, window.MotionIsMounted = !0, D.updateFeatures(), D.scheduleRenderMicrotask(), P.current && D.animationState && D.animationState.animateChanges());
  }), Z.useEffect(() => {
    D && (!P.current && D.animationState && D.animationState.animateChanges(), P.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(K);
    }), P.current = !1), D.enteringChildren = void 0);
  }), D;
}
function _w(i, l, o, r) {
  const { layoutId: c, layout: h, drag: d, dragConstraints: m, layoutScroll: g, layoutRoot: v, layoutAnchor: b, layoutCrossfade: y } = l;
  i.projection = new o(i.latestValues, l["data-framer-portal-id"] ? void 0 : q1(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: h,
    alwaysMeasureLayout: !!d || m && ll(m),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof h == "string" ? h : "both",
    initialPromotionConfig: r,
    crossfade: y,
    layoutScroll: g,
    layoutRoot: v,
    layoutAnchor: b
  });
}
function q1(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : q1(i.parent);
}
function Zf(i, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && mw(r);
  const h = o ? o === "svg" : oh(i), d = h ? zw : Dw;
  function m(v, b) {
    let y;
    const S = {
      ...Z.useContext(j1),
      ...v,
      layoutId: Vw(v)
    }, { isStatic: z, isValidProp: D } = S, L = gw(v), R = d(v, z);
    if (!z && typeof window < "u") {
      jw();
      const K = Uw(S);
      y = K.MeasureLayout, L.visualElement = Nw(i, R, S, c, K.ProjectionNode, h);
    }
    return B.jsxs(Br.Provider, { value: L, children: [y && L.visualElement ? B.jsx(y, { visualElement: L.visualElement, ...S }) : null, Cw(i, v, Rw(R, L.visualElement, b), R, z, l, h, D)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const g = Z.forwardRef(m);
  return g[Ow] = i, g;
}
function Vw({ layoutId: i }) {
  const l = Z.useContext(rb).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function jw(i, l) {
  Z.useContext(U1).strict;
}
function Uw(i) {
  const l = B1(), { drag: o, layout: r } = l;
  if (!o && !r)
    return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout: o?.isEnabled(i) || r?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function Bw(i, l) {
  if (typeof Proxy > "u")
    return Zf;
  const o = /* @__PURE__ */ new Map(), r = (h, d) => Zf(h, d, i, l), c = (h, d) => r(h, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (h, d) => d === "create" ? r : (o.has(d) || o.set(d, Zf(d, void 0, i, l)), o.get(d))
  });
}
const Lw = (i, l) => l.isSVG ?? oh(i) ? new vC(l) : new gC(l, {
  allowProjection: i !== Z.Fragment
});
class Hw extends ji {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = SC(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    jr(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: o } = this.node.prevProps || {};
    l !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let Gw = 0;
class Yw extends ji {
  constructor() {
    super(...arguments), this.id = Gw++;
  }
  update() {
    const { presenceContext: l, prevPresenceContext: o, animationState: r } = this.node;
    if (!l || !r)
      return;
    const { isPresent: c, onExitComplete: h } = l, d = o?.isPresent;
    if (c === d)
      return;
    if (c && d === !1) {
      if (this.exit === !0) {
        const { initial: g } = this.node.getProps();
        if (g && !Array.isArray(g)) {
          const { transition: v, transitionEnd: b, ...y } = da(this.node, g) || {};
          for (const S in y)
            this.node.getValue(S)?.jump(y[S]);
        }
        this.node.blockInitialAnimation = !1, r.reset(), r.animateChanges();
      } else
        r.setActive("exit", !1);
      this.exit = void 0;
      return;
    }
    const m = this.exit = r.setActive("exit", !c);
    h && !c && m.then(() => {
      this.exit === m && (this.exit = !0, h(this.id));
    });
  }
  mount() {
    const { register: l, onExitComplete: o } = this.node.presenceContext || {};
    o && o(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const qw = {
  animation: {
    Feature: Hw
  },
  exit: {
    Feature: Yw
  }
};
function Lr(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const kw = (i) => (l) => nh(l) && i(l, Lr(l));
function hs(i, l, o, r) {
  return xs(i, l, kw(o), r);
}
const k1 = ({ current: i }) => i ? i.ownerDocument.defaultView : null, i0 = (i, l) => Math.abs(i - l);
function Xw(i, l) {
  const o = i0(i.x, l.x), r = i0(i.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const a0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class X1 {
  constructor(l, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: h = !1, distanceThreshold: d = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (D) => {
      this.handleScroll(D.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = rr(this.lastRawMoveEventInfo, this.transformPagePoint));
      const D = Qf(this.lastMoveEventInfo, this.history), L = this.startEvent !== null, R = Xw(D.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!L && !R)
        return;
      const { point: K } = D;
      this.history.push({ ...K, timestamp: Pt.now() });
      const { onStart: P, onMove: F } = this.handlers;
      L || (P && P(this.lastMoveEvent, D), this.startEvent = this.lastMoveEvent), F && F(this.lastMoveEvent, D);
    }, this.handlePointerMove = (D, L) => {
      this.lastMoveEvent = D, this.lastRawMoveEventInfo = L, this.lastMoveEventInfo = rr(L, this.transformPagePoint), this.hasPendingMove = !0, qt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (D, L) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: R, onSessionEnd: K, resumeAnimation: P } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && P && P(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const F = Qf(D.type === "pointercancel" ? this.lastMoveEventInfo : rr(L, this.transformPagePoint), this.history);
      this.startEvent && R && R(D, F), K && K(D, F);
    }, !nh(l))
      return;
    this.dragSnapToOrigin = h, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = d, this.contextWindow = c || window;
    const g = Lr(l), v = rr(g, this.transformPagePoint), { point: b } = v, { timestamp: y } = ae;
    this.history = [{ ...b, timestamp: y }];
    const { onSessionStart: S } = o;
    S && S(l, Qf(v, this.history));
    const z = { passive: !0, capture: !0 };
    this.removeListeners = As(hs(this.contextWindow, "pointermove", this.handlePointerMove, z), hs(this.contextWindow, "pointerup", this.handlePointerUp, z), hs(this.contextWindow, "pointercancel", this.handlePointerUp, z)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (a0.has(r.overflowX) || a0.has(r.overflowY)) && this.scrollPositions.set(o, {
        x: o.scrollLeft,
        y: o.scrollTop
      }), o = o.parentElement;
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }), window.addEventListener("scroll", this.onElementScroll, {
      capture: !0
    }), window.addEventListener("scroll", this.onWindowScroll), this.removeScrollListeners = () => {
      window.removeEventListener("scroll", this.onElementScroll, {
        capture: !0
      }), window.removeEventListener("scroll", this.onWindowScroll);
    };
  }
  /**
   * Handle scroll compensation during drag.
   *
   * For element scroll: adjusts history origin since pageX/pageY doesn't change.
   * For window scroll: adjusts lastMoveEventInfo since pageX/pageY would change.
   */
  handleScroll(l) {
    const o = this.scrollPositions.get(l);
    if (!o)
      return;
    const r = l === window, c = r ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, h = { x: c.x - o.x, y: c.y - o.y };
    h.x === 0 && h.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += h.x, this.lastMoveEventInfo.point.y += h.y) : this.history.length > 0 && (this.history[0].x -= h.x, this.history[0].y -= h.y), this.scrollPositions.set(l, c), qt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), _i(this.updatePoint);
  }
}
function rr(i, l) {
  return l ? { point: l(i.point) } : i;
}
function l0(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Qf({ point: i }, l) {
  return {
    point: i,
    delta: l0(i, Z1(l)),
    offset: l0(i, Zw(l)),
    velocity: Qw(l, 0.1)
  };
}
function Zw(i) {
  return i[0];
}
function Z1(i) {
  return i[i.length - 1];
}
function Qw(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let o = i.length - 1, r = null;
  const c = Z1(i);
  for (; o >= 0 && (r = i[o], !(c.timestamp - r.timestamp > /* @__PURE__ */ un(l))); )
    o--;
  if (!r)
    return { x: 0, y: 0 };
  r === i[0] && i.length > 2 && c.timestamp - r.timestamp > /* @__PURE__ */ un(l) * 2 && (r = i[1]);
  const h = /* @__PURE__ */ Fe(c.timestamp - r.timestamp);
  if (h === 0)
    return { x: 0, y: 0 };
  const d = {
    x: (c.x - r.x) / h,
    y: (c.y - r.y) / h
  };
  return d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d;
}
function Kw(i, { min: l, max: o }, r) {
  return l !== void 0 && i < l ? i = r ? Gt(l, i, r.min) : Math.max(i, l) : o !== void 0 && i > o && (i = r ? Gt(o, i, r.max) : Math.min(i, o)), i;
}
function s0(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
  };
}
function Pw(i, { top: l, left: o, bottom: r, right: c }) {
  return {
    x: s0(i.x, o, c),
    y: s0(i.y, l, r)
  };
}
function o0(i, l) {
  let o = l.min - i.min, r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([o, r] = [r, o]), { min: o, max: r };
}
function Jw(i, l) {
  return {
    x: o0(i.x, l.x),
    y: o0(i.y, l.y)
  };
}
function Fw(i, l) {
  let o = 0.5;
  const r = Oe(i), c = Oe(l);
  return c > r ? o = /* @__PURE__ */ ha(l.min, l.max - r, i.min) : r > c && (o = /* @__PURE__ */ ha(i.min, i.max - c, l.min)), jn(0, 1, o);
}
function Iw(i, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - i.min), l.max !== void 0 && (o.max = l.max - i.min), o;
}
const Td = 0.35;
function Ww(i = Td) {
  return i === !1 ? i = 0 : i === !0 && (i = Td), {
    x: r0(i, "left", "right"),
    y: r0(i, "top", "bottom")
  };
}
function r0(i, l, o) {
  return {
    min: u0(i, l),
    max: u0(i, o)
  };
}
function u0(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const $w = /* @__PURE__ */ new WeakMap();
class tM {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = re(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: o = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const h = (y) => {
      o && this.snapToCursor(y), this.stopAnimation();
    }, d = (y, S) => {
      const { drag: z, dragPropagation: D, onDragStart: L } = this.getProps();
      if (z && !D && (this.openDragLock && this.openDragLock(), this.openDragLock = Q3(z), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), vn((K) => {
        let P = this.getAxisMotionValue(K).get() || 0;
        if (_n.test(P)) {
          const { projection: F } = this.visualElement;
          if (F && F.layout) {
            const U = F.layout.layoutBox[K];
            U && (P = Oe(U) * (parseFloat(P) / 100));
          }
        }
        this.originPoint[K] = P;
      }), L && qt.update(() => L(y, S), !1, !0), gd(this.visualElement, "transform");
      const { animationState: R } = this.visualElement;
      R && R.setActive("whileDrag", !0);
    }, m = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S;
      const { dragPropagation: z, dragDirectionLock: D, onDirectionLock: L, onDrag: R } = this.getProps();
      if (!z && !this.openDragLock)
        return;
      const { offset: K } = S;
      if (D && this.currentDirection === null) {
        this.currentDirection = nM(K), this.currentDirection !== null && L && L(this.currentDirection);
        return;
      }
      this.updateAxis("x", S.point, K), this.updateAxis("y", S.point, K), this.visualElement.render(), R && qt.update(() => R(y, S), !1, !0);
    }, g = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S, this.stop(y, S), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, v = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: b } = this.getProps();
    this.panSession = new X1(l, {
      onSessionStart: h,
      onStart: d,
      onMove: m,
      onSessionEnd: g,
      resumeAnimation: v
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: b,
      distanceThreshold: r,
      contextWindow: k1(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, o) {
    const r = l || this.latestPointerEvent, c = o || this.latestPanInfo, h = this.isDragging;
    if (this.cancel(), !h || !c || !r)
      return;
    const { velocity: d } = c;
    this.startAnimation(d);
    const { onDragEnd: m } = this.getProps();
    m && qt.postRender(() => m(r, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: o } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), o && o.setActive("whileDrag", !1);
  }
  /**
   * Clean up the pan session without modifying other drag state.
   * This is used during unmount to ensure event listeners are removed
   * without affecting projection animations or drag locks.
   * @internal
   */
  endPanSession() {
    this.panSession && this.panSession.end(), this.panSession = void 0;
  }
  updateAxis(l, o, r) {
    const { drag: c } = this.getProps();
    if (!r || !ur(l, c, this.currentDirection))
      return;
    const h = this.getAxisMotionValue(l);
    let d = this.originPoint[l] + r[l];
    this.constraints && this.constraints[l] && (d = Kw(d, this.constraints[l], this.elastic[l])), h.set(d);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && ll(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = Pw(r.layoutBox, l) : this.constraints = !1, this.elastic = Ww(o), c !== this.constraints && !ll(l) && r && this.constraints && !this.hasMutatedConstraints && vn((h) => {
      this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = Iw(r.layoutBox[h], this.constraints[h]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: o } = this.getProps();
    if (!l || !ll(l))
      return !1;
    const r = l.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const h = Z3(r, c.root, this.visualElement.getTransformPagePoint());
    let d = Jw(c.layout.layoutBox, h);
    if (o) {
      const m = o(q3(d));
      this.hasMutatedConstraints = !!m, m && (d = r1(m));
    }
    return d;
  }
  startAnimation(l) {
    const { drag: o, dragMomentum: r, dragElastic: c, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: m } = this.getProps(), g = this.constraints || {}, v = vn((b) => {
      if (!ur(b, o, this.currentDirection))
        return;
      let y = g && g[b] || {};
      (d === !0 || d === b) && (y = { min: 0, max: 0 });
      const S = c ? 200 : 1e6, z = c ? 40 : 1e7, D = {
        type: "inertia",
        velocity: r ? l[b] : 0,
        bounceStiffness: S,
        bounceDamping: z,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...h,
        ...y
      };
      return this.startAxisValueAnimation(b, D);
    });
    return Promise.all(v).then(m);
  }
  startAxisValueAnimation(l, o) {
    const r = this.getAxisMotionValue(l);
    return gd(this.visualElement, l), r.start(Jd(l, r, 0, o, this.visualElement, !1));
  }
  stopAnimation() {
    vn((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const o = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[o];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  /**
   * Measure the live box - projection.layout may or may not include the
   * drag transform, depending on when it was measured.
   */
  snapToCursor({ clientX: l, clientY: o }) {
    const { drag: r } = this.getProps(), c = { x: l, y: o }, h = this.visualElement.getTransformPagePoint()?.(c) || c, d = this.visualElement.measureViewportBox();
    vn((m) => {
      if (!ur(m, r, this.currentDirection))
        return;
      const g = this.getAxisMotionValue(m), { min: v, max: b } = d[m];
      g.set((g.get() || 0) + h[m] - Gt(v, b, 0.5));
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: l, dragConstraints: o } = this.getProps(), { projection: r } = this.visualElement;
    if (!ll(o) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = this.constraints, h = { x: 0, y: 0 };
    vn((m) => {
      const g = this.getAxisMotionValue(m).get();
      h[m] = Fw({ min: g, max: g }, c[m]);
    });
    const { transformTemplate: d } = this.visualElement.getProps();
    this.visualElement.current.style.transform = d ? d({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), vn((m) => {
      const g = this.getAxisMotionValue(m);
      if (!ur(m, l, null) || !g.get())
        return;
      const { min: v, max: b } = this.constraints[m];
      g.set(Gt(v, b, h[m]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    $w.set(this.visualElement, this);
    const l = this.visualElement.current, o = hs(l, "pointerdown", (v) => {
      const { drag: b, dragListener: y = !0 } = this.getProps(), S = v.target, z = S !== l && W3(S);
      b && y && !z && this.start(v);
    });
    let r;
    const c = () => {
      const { dragConstraints: v } = this.getProps();
      ll(v) && v.current && (this.constraints = this.resolveRefConstraints(), r || (r = eM(l, v.current, () => this.scalePositionWithinConstraints())));
    }, { projection: h } = this.visualElement, d = h.addEventListener("measure", c);
    h && !h.layout && (h.root && h.root.updateScroll(), h.updateLayout()), qt.read(c);
    const m = xs(window, "resize", () => this.scalePositionWithinConstraints()), g = h.addEventListener("didUpdate", (({ delta: v, hasLayoutChanged: b }) => {
      this.isDragging && b && (vn((y) => {
        const S = this.getAxisMotionValue(y);
        S && (this.originPoint[y] += v[y].translate, S.set(S.get() + v[y].translate));
      }), this.visualElement.render());
    }));
    return () => {
      m(), o(), d(), g && g(), r && r();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: h = !1, dragElastic: d = Td, dragMomentum: m = !0 } = l;
    return {
      ...l,
      drag: o,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: h,
      dragElastic: d,
      dragMomentum: m
    };
  }
}
function c0(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function eM(i, l, o) {
  const r = Av(i, c0(o)), c = Av(l, c0(o));
  return () => {
    r(), c();
  };
}
function ur(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i);
}
function nM(i, l = 10) {
  let o = null;
  return Math.abs(i.y) > l ? o = "y" : Math.abs(i.x) > l && (o = "x"), o;
}
class iM extends ji {
  constructor(l) {
    super(l), this.removeGroupControls = Sn, this.removeListeners = Sn, this.controls = new tM(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Sn;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: o } = this.node.prevProps || {};
    l !== o && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Kf = (i) => (l, o) => {
  i && qt.update(() => i(l, o), !1, !0);
};
class aM extends ji {
  constructor() {
    super(...arguments), this.removePointerDownListener = Sn;
  }
  onPointerDown(l) {
    this.session = new X1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: k1(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Kf(l),
      onStart: Kf(o),
      onMove: Kf(r),
      onEnd: (h, d) => {
        delete this.session, c && qt.postRender(() => c(h, d));
      }
    };
  }
  mount() {
    this.removePointerDownListener = hs(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Pf = !1;
class lM extends Z.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: h } = l;
    h && (o.group && o.group.add(h), r && r.register && c && r.register(h), Pf && h.root.didUpdate(), h.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), h.setOptions({
      ...h.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), br.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: o, visualElement: r, drag: c, isPresent: h } = this.props, { projection: d } = r;
    return d && (d.isPresent = h, l.layoutDependency !== o && d.setOptions({
      ...d.options,
      layoutDependency: o
    }), Pf = !0, c || l.layoutDependency !== o || o === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(), l.isPresent !== h && (h ? d.promote() : d.relegate() || qt.postRender(() => {
      const m = d.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: o } = this.props, { projection: r } = l;
    r && (r.options.layoutAnchor = o, r.root.didUpdate(), eh.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = l;
    Pf = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function Q1(i) {
  const [l, o] = dw(), r = Z.useContext(rb);
  return B.jsx(lM, { ...i, layoutGroup: r, switchLayoutGroup: Z.useContext(Y1), isPresent: l, safeToRemove: o });
}
const sM = {
  pan: {
    Feature: aM
  },
  drag: {
    Feature: iM,
    ProjectionNode: V1,
    MeasureLayout: Q1
  }
};
function f0(i, l, o) {
  const { props: r } = i;
  i.animationState && r.whileHover && i.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o, h = r[c];
  h && qt.postRender(() => h(l, Lr(l)));
}
class oM extends ji {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = P3(l, (o, r) => (f0(this.node, r, "Start"), (c) => f0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class rM extends ji {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let l = !1;
    try {
      l = this.node.current.matches(":focus-visible");
    } catch {
      l = !0;
    }
    !l || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = As(xs(this.node.current, "focus", () => this.onFocus()), xs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function d0(i, l, o) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && r.whileTap && i.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o), h = r[c];
  h && qt.postRender(() => h(l, Lr(l)));
}
class uM extends ji {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = tC(l, (c, h) => (d0(this.node, h, "Start"), (d, { success: m }) => d0(this.node, d, m ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const xd = /* @__PURE__ */ new WeakMap(), Jf = /* @__PURE__ */ new WeakMap(), cM = (i) => {
  const l = xd.get(i.target);
  l && l(i);
}, fM = (i) => {
  i.forEach(cM);
};
function dM({ root: i, ...l }) {
  const o = i || document;
  Jf.has(o) || Jf.set(o, {});
  const r = Jf.get(o), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(fM, { root: i, ...l })), r[c];
}
function hM(i, l, o) {
  const r = dM(l);
  return xd.set(i, o), r.observe(i), () => {
    xd.delete(i), r.unobserve(i);
  };
}
const mM = {
  some: 0,
  all: 1
};
class pM extends ji {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: h } = l, d = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : mM[c]
    }, m = (g) => {
      const { isIntersecting: v } = g;
      if (this.isInView === v || (this.isInView = v, h && !v && this.hasEnteredView))
        return;
      v && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", v);
      const { onViewportEnter: b, onViewportLeave: y } = this.node.getProps(), S = v ? b : y;
      S && S(g);
    };
    this.stopObserver = hM(this.node.current, d, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(gM(l, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function gM({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (o) => i[o] !== l[o];
}
const yM = {
  inView: {
    Feature: pM
  },
  tap: {
    Feature: uM
  },
  focus: {
    Feature: rM
  },
  hover: {
    Feature: oM
  }
}, vM = {
  layout: {
    ProjectionNode: V1,
    MeasureLayout: Q1
  }
}, bM = {
  ...qw,
  ...yM,
  ...sM,
  ...vM
}, SM = /* @__PURE__ */ Bw(bM, Lw);
function TM() {
  !ah.current && y1();
  const [i] = Z.useState(Or.current);
  return i;
}
const xM = {
  some: 0,
  all: 1
};
function EM(i, l, { root: o, margin: r, amount: c = "some" } = {}) {
  const h = $d(i), d = /* @__PURE__ */ new WeakMap(), m = (v) => {
    v.forEach((b) => {
      const y = d.get(b.target);
      if (b.isIntersecting !== !!y)
        if (b.isIntersecting) {
          const S = l(b.target, b);
          typeof S == "function" ? d.set(b.target, S) : g.unobserve(b.target);
        } else typeof y == "function" && (y(b), d.delete(b.target));
    });
  }, g = new IntersectionObserver(m, {
    root: o,
    rootMargin: r,
    threshold: typeof c == "number" ? c : xM[c]
  });
  return h.forEach((v) => g.observe(v)), () => g.disconnect();
}
function AM(i, { root: l, margin: o, amount: r, once: c = !1, initial: h = !1 } = {}) {
  const [d, m] = Z.useState(h);
  return Z.useEffect(() => {
    if (!i.current || c && d)
      return;
    const g = () => (m(!0), c ? void 0 : () => m(!1)), v = {
      root: l && l.current || void 0,
      margin: o,
      amount: r
    };
    return EM(i.current, g, v);
  }, [l, i, o, c, r]), d;
}
function CM({
  title: i = `Little moments.
Lasting impressions.`,
  subtitle: l = "Stories from the people who bring our vetiver pieces into their homes and celebrations.",
  badgeText: o = "",
  testimonials: r = [],
  autoRotateInterval: c = 6e3,
  trustedCompanies: h = [],
  trustedCompaniesTitle: d = "Our community",
  className: m
}) {
  const g = Z.useRef(null), v = AM(g, { amount: 0.15 }), b = TM(), [y, S] = Z.useState(0), [z, D] = Z.useState(!1), [L, R] = Z.useState(!1), [K, P] = Z.useState(!0), F = Z.useId(), U = r.length ? y % r.length : 0;
  Z.useEffect(() => {
    const at = () => P(!document.hidden);
    return at(), document.addEventListener("visibilitychange", at), () => document.removeEventListener("visibilitychange", at);
  }, []), Z.useEffect(() => {
    if (c <= 0 || r.length <= 1 || b || z || L || !v || !K) return;
    const at = window.setInterval(() => S((j) => (j + 1) % r.length), Math.max(3e3, c));
    return () => clearInterval(at);
  }, [c, r.length, b, z, L, v, K]);
  const st = (at) => {
    D(!0), S((at + r.length) % r.length);
  };
  return /* @__PURE__ */ B.jsxs("section", { ref: g, id: "testimonials", "aria-labelledby": F, className: K0("vt-testimonials", m), children: [
    /* @__PURE__ */ B.jsxs("div", { className: "vt-section-inner vt:grid vt:grid-cols-1 vt:gap-12 vt:md:grid-cols-2 vt:md:gap-16", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "vt-testimonial-intro", children: [
        o && /* @__PURE__ */ B.jsx("p", { className: "vt-review-badge", children: o }),
        /* @__PURE__ */ B.jsx("h2", { id: F, children: i }),
        /* @__PURE__ */ B.jsx("p", { children: l }),
        /* @__PURE__ */ B.jsxs("button", { type: "button", className: "vt-primary-button vt-add-feedback", "aria-haspopup": "dialog", "aria-controls": "feedback-dialog", onClick: () => window.dispatchEvent(new Event("vettiver:add-feedback")), children: [
          "Add feedback ",
          /* @__PURE__ */ B.jsx(Fy, { size: 18, "aria-hidden": "true" })
        ] }),
        r.length > 1 && /* @__PURE__ */ B.jsxs("div", { className: "vt-review-controls", "aria-label": "Customer story controls", children: [
          /* @__PURE__ */ B.jsx("button", { type: "button", onClick: () => st(U - 1), "aria-label": "Previous review", children: /* @__PURE__ */ B.jsx(v2, { size: 19 }) }),
          /* @__PURE__ */ B.jsxs("span", { children: [
            String(U + 1).padStart(2, "0"),
            " / ",
            String(r.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ B.jsx("button", { type: "button", onClick: () => st(U + 1), "aria-label": "Next review", children: /* @__PURE__ */ B.jsx(Fy, { size: 19 }) }),
          !b && c > 0 && /* @__PURE__ */ B.jsx("button", { type: "button", onClick: () => D(!z), "aria-label": z ? "Play review slideshow" : "Pause review slideshow", children: z ? /* @__PURE__ */ B.jsx(ib, { size: 17 }) : /* @__PURE__ */ B.jsx(eb, { size: 17 }) })
        ] })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "vt-review-stage", onMouseEnter: () => R(!0), onMouseLeave: () => R(!1), onFocusCapture: () => R(!0), onBlurCapture: (at) => {
        at.currentTarget.contains(at.relatedTarget) || R(!1);
      }, "aria-roledescription": r.length ? "carousel" : void 0, "aria-label": "Customer feedback", children: [
        r.length ? /* @__PURE__ */ B.jsx("div", { className: "vt-review-stack", "aria-live": z ? "polite" : "off", children: r.map((at, j) => /* @__PURE__ */ B.jsxs(
          SM.article,
          {
            className: "vt-review-card",
            "aria-hidden": j !== U,
            "aria-label": "Review " + (j + 1) + " of " + r.length,
            initial: !1,
            animate: { opacity: j === U ? 1 : 0, x: b || j === U ? 0 : 32, scale: b || j === U ? 1 : 0.98 },
            transition: { duration: b ? 0 : 0.45, ease: "easeInOut" },
            style: { gridArea: "1 / 1", pointerEvents: j === U ? "auto" : "none" },
            children: [
              /* @__PURE__ */ B.jsx("div", { className: "vt-review-stars", "aria-label": Math.max(1, Math.min(5, Math.round(at.rating || 1))) + " out of 5 stars", children: Array.from({ length: Math.max(1, Math.min(5, Math.round(at.rating || 1))) }, (_, St) => /* @__PURE__ */ B.jsx(sb, { size: 18, fill: "currentColor", "aria-hidden": "true" }, St)) }),
              /* @__PURE__ */ B.jsx(S2, { size: 38, strokeWidth: 1.2, className: "vt-quote-mark", "aria-hidden": "true" }),
              /* @__PURE__ */ B.jsx("blockquote", { children: at.content }),
              /* @__PURE__ */ B.jsx(P0, { className: "vt:my-6" }),
              /* @__PURE__ */ B.jsx("p", { className: "vt-review-name", children: at.name })
            ]
          },
          at.id
        )) }) : /* @__PURE__ */ B.jsxs("div", { className: "vt-review-empty", children: [
          /* @__PURE__ */ B.jsx(b2, { size: 38, strokeWidth: 1.2, "aria-hidden": "true" }),
          /* @__PURE__ */ B.jsx("h3", { children: "Your story belongs here." }),
          /* @__PURE__ */ B.jsx("p", { children: "Our customer stories are just beginning. Once feedback has been reviewed and approved, you can read it here." }),
          /* @__PURE__ */ B.jsx("span", { children: "No published reviews yet." })
        ] }),
        r.length > 1 && /* @__PURE__ */ B.jsx("div", { className: "vt-review-dots", children: r.map((at, j) => /* @__PURE__ */ B.jsx("button", { type: "button", onClick: () => st(j), "aria-label": "Read review by " + at.name, "aria-pressed": j === U, children: /* @__PURE__ */ B.jsx("span", {}) }, at.id)) })
      ] })
    ] }),
    h.length > 0 && /* @__PURE__ */ B.jsxs("div", { className: "vt-section-inner vt-review-companies", children: [
      /* @__PURE__ */ B.jsx("h3", { children: d }),
      /* @__PURE__ */ B.jsx("div", { children: h.map((at) => /* @__PURE__ */ B.jsx("span", { children: at }, at)) })
    ] })
  ] });
}
const Ff = "vettiver-feedback-draft-v1";
function h0({ endpoint: i = "" }) {
  const l = Z.useRef(null);
  Z.useEffect(() => {
    const U = l.current;
    if (!U) return;
    const st = () => {
      U.open || U.showModal();
    };
    return window.addEventListener("vettiver:add-feedback", st), () => {
      window.removeEventListener("vettiver:add-feedback", st), U.close();
    };
  }, []);
  const [o, r] = Z.useState(""), [c, h] = Z.useState(""), [d, m] = Z.useState(0), [g, v] = Z.useState(!1), [b, y] = Z.useState(""), [S, z] = Z.useState(!1), [D, L] = Z.useState(!1), [R, K] = Z.useState(!1);
  async function P(U) {
    if (U.preventDefault(), z(!1), !o.trim() || !c.trim() || !d) {
      z(!0), y("Please add your name, feedback and a star rating.");
      return;
    }
    if (R || g) return;
    const st = { name: o.trim(), content: c.trim(), rating: d };
    if (!i) {
      try {
        localStorage.setItem(Ff, JSON.stringify(st)), y("Draft saved only on this device. It has not been sent or published.");
      } catch {
        z(!0), y("Your browser could not save the draft. Please copy your feedback to keep it.");
      }
      return;
    }
    v(!0);
    try {
      const at = await fetch(i, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...st, consentToPublish: D }), credentials: "same-origin" });
      if (!at.ok) throw new Error("Request failed");
      const j = await at.json();
      if (!j.id || j.status !== "pending") throw new Error("Invalid acknowledgement");
      K(!0), y("Thank you. Your feedback was received and is waiting for approval. It is not public yet.");
    } catch {
      z(!0), y("We could not submit your feedback. Nothing has been published. Please try again.");
    } finally {
      v(!1);
    }
  }
  function F() {
    try {
      const U = JSON.parse(localStorage.getItem(Ff) || "null");
      if (!U || typeof U.name != "string" || typeof U.content != "string" || !Number.isInteger(U.rating) || U.rating < 1 || U.rating > 5) {
        y("No saved draft on this device.");
        return;
      }
      r(U.name.slice(0, 80)), h(U.content.slice(0, 1200)), m(U.rating), y("Your draft is restored. It has not been sent.");
    } catch {
      y("No readable draft on this device.");
    }
  }
  return /* @__PURE__ */ B.jsxs("dialog", { ref: l, id: "feedback-dialog", className: "vt-feedback-dialog", "aria-labelledby": "feedback-dialog-title", "aria-describedby": "feedback-dialog-description", onClick: (U) => {
    if (U.target !== U.currentTarget) return;
    const st = U.currentTarget.getBoundingClientRect();
    (U.clientX < st.left || U.clientX > st.right || U.clientY < st.top || U.clientY > st.bottom) && U.currentTarget.close();
  }, children: [
    /* @__PURE__ */ B.jsx("button", { type: "button", className: "vt-feedback-close", "aria-label": "Close feedback", onClick: () => l.current?.close(), children: /* @__PURE__ */ B.jsx(T2, { size: 22, "aria-hidden": "true" }) }),
    /* @__PURE__ */ B.jsxs("div", { className: "vt-feedback-heading", children: [
      /* @__PURE__ */ B.jsx("h2", { id: "feedback-dialog-title", children: "A few words mean a lot." }),
      /* @__PURE__ */ B.jsx("p", { id: "feedback-dialog-description", children: "Tell us about your Vettiver experience." })
    ] }),
    /* @__PURE__ */ B.jsxs("form", { id: "feedback-form", className: "vt-feedback-form", onSubmit: P, "aria-label": "Share customer feedback", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "vt-feedback-fields", children: [
        /* @__PURE__ */ B.jsxs("div", { children: [
          /* @__PURE__ */ B.jsx("label", { htmlFor: "feedback-name", children: "Your name" }),
          /* @__PURE__ */ B.jsx("input", { id: "feedback-name", name: "name", autoComplete: "name", maxLength: 80, required: !0, value: o, onChange: (U) => r(U.target.value), disabled: g || R })
        ] }),
        /* @__PURE__ */ B.jsxs("fieldset", { children: [
          /* @__PURE__ */ B.jsx("legend", { children: "Your rating" }),
          /* @__PURE__ */ B.jsx("div", { className: "vt-rating-input", children: [1, 2, 3, 4, 5].map((U) => /* @__PURE__ */ B.jsxs("label", { className: U <= d ? "is-selected" : "", children: [
            /* @__PURE__ */ B.jsx("input", { type: "radio", name: "rating", value: U, required: !0, checked: d === U, onChange: () => m(U), disabled: g || R }),
            /* @__PURE__ */ B.jsx(sb, { size: 25, fill: U <= d ? "currentColor" : "none", "aria-hidden": "true" }),
            /* @__PURE__ */ B.jsxs("span", { className: "vt:sr-only", children: [
              U,
              " ",
              U === 1 ? "star" : "stars"
            ] })
          ] }, U)) })
        ] })
      ] }),
      /* @__PURE__ */ B.jsx("label", { htmlFor: "feedback-content", children: "Your feedback" }),
      /* @__PURE__ */ B.jsx("textarea", { id: "feedback-content", name: "content", rows: 3, maxLength: 1200, required: !0, value: c, onChange: (U) => h(U.target.value), disabled: g || R, placeholder: "What did you choose, and how was your experience?" }),
      i ? /* @__PURE__ */ B.jsxs("label", { className: "vt-feedback-consent", children: [
        /* @__PURE__ */ B.jsx("input", { type: "checkbox", required: !0, checked: D, onChange: (U) => L(U.target.checked), disabled: g || R }),
        " I agree that my name, rating and feedback may be published after review."
      ] }) : /* @__PURE__ */ B.jsx("p", { className: "vt-feedback-note", children: "Review submissions will open when our approval system is ready. For now, save a draft on this device. Nothing is sent to us." }),
      /* @__PURE__ */ B.jsxs("div", { className: "vt-feedback-actions", children: [
        /* @__PURE__ */ B.jsxs("button", { className: "vt-primary-button", type: "submit", disabled: g || R, children: [
          g ? "Sending…" : R ? "Waiting for approval" : i ? "Send for approval" : "Save feedback draft",
          /* @__PURE__ */ B.jsx(W0, { size: 18, "aria-hidden": "true" })
        ] }),
        !i && /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
          /* @__PURE__ */ B.jsx("button", { className: "vt-text-link", type: "button", onClick: F, children: "Restore draft" }),
          /* @__PURE__ */ B.jsx("button", { className: "vt-text-link", type: "button", onClick: () => {
            try {
              localStorage.removeItem(Ff), y("Saved draft removed from this device.");
            } catch {
              y("Could not remove the saved draft.");
            }
          }, children: "Delete saved draft" })
        ] })
      ] }),
      /* @__PURE__ */ B.jsx("p", { className: "vt-feedback-status" + (S ? " is-error" : ""), role: "status", "aria-live": "polite", children: b })
    ] })
  ] });
}
const Es = (i, l, o) => i < l ? l : i > o ? o : i, m0 = (i, l = "174, 204, 135") => {
  const o = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec((i || "").trim());
  if (!o) return l;
  const r = o[1].length === 3 ? o[1].replace(/./g, (h) => h + h) : o[1], c = parseInt(r, 16);
  return (c >> 16 & 255) + ", " + (c >> 8 & 255) + ", " + (c & 255);
}, wM = (i, l, o) => {
  if (!(i > 0) || !(l > 0)) return 0;
  const r = 100 * l / i;
  return o > 0 ? Math.min(r, o) : r;
}, MM = (i, l = 30, o = 82) => l + (o - l) * Es(Number.isFinite(i) ? i : 0.5, 0, 1), p0 = (i, l = 58, o = 9) => l + o * (0.7 * Math.sin(i * 0.21) + 0.3 * Math.sin(i * 0.077 + 1.3)), cr = (i, l, o, r) => l + (i - l) * Math.pow(1 - Es(o, 0, 1), Es(r, 0, 0.1) * 60), DM = (i, l) => !(i > 0) || !(l >= 0) ? 0.8 : Es(((100 - i - l) / 2 + i) / 100, 0.5, 1.2), zM = (i, l, o) => Math.max(0, i * (l + Es(Number.isFinite(o) ? o : 0, -0.4, 0.4))), g0 = {
  x: /* @__PURE__ */ B.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ B.jsx("path", { fill: "currentColor", d: "M17.6 3.5h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9-5.2 5.9H3.2l6.7-7.7L2.8 3.5h5.9l4.1 5.4 4.8-5.4Zm-1 15.3h1.6L7.9 5.1H6.2l10.4 13.7Z" }) }),
  linkedin: /* @__PURE__ */ B.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ B.jsx("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "2.5" }),
    /* @__PURE__ */ B.jsx("path", { d: "M8 10.5V16M12 16v-5.5M12 13c0-1.6 1-2.6 2.4-2.6s2.1.9 2.1 2.4V16" }),
    /* @__PURE__ */ B.jsx("circle", { cx: "8", cy: "7.7", r: ".55", fill: "currentColor" })
  ] }),
  youtube: /* @__PURE__ */ B.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ B.jsx("rect", { x: "2.75", y: "5.5", width: "18.5", height: "13", rx: "4" }),
    /* @__PURE__ */ B.jsx("path", { d: "M10.2 9.3v5.4l4.6-2.7-4.6-2.7Z" })
  ] }),
  instagram: /* @__PURE__ */ B.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ B.jsx("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "5" }),
    /* @__PURE__ */ B.jsx("circle", { cx: "12", cy: "12", r: "3.9" }),
    /* @__PURE__ */ B.jsx("circle", { cx: "17.1", cy: "6.9", r: ".6", fill: "currentColor" })
  ] }),
  github: /* @__PURE__ */ B.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: /* @__PURE__ */ B.jsx("path", { d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" }) }),
  dribbble: /* @__PURE__ */ B.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ B.jsx("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ B.jsx("path", { d: "M8.6 4.2c3.4 4.4 5.4 9.6 6.1 15.6M3.6 10.6c5.6.3 10.4-1 13.9-4.4M5.6 17.6c3.4-4.2 8.6-5.6 14.8-3.6" })
  ] })
}, OM = [
  { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "#about" }, { label: "Customer stories", href: "#reviews" }] },
  { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "#feedback-form" }, { label: "Good to know", href: "#questions-title" }, { label: "Back to the top", href: "#home" }] }
];
function RM({
  brand: i = "Vettiver",
  wordmark: l,
  company: o = "Akash Vetiver Export",
  year: r = (/* @__PURE__ */ new Date()).getFullYear(),
  socials: c = [],
  credits: h = [{ label: "Natural roots. Thoughtful hands." }, { lead: "Handcrafted in ", label: "Tamil Nadu, India" }],
  columns: d = OM,
  onLinkClick: m,
  cut: g = 0.1,
  background: v = "#08170f",
  ink: b = "#f4f8ef",
  muted: y = "#bacbb5",
  accent: S = "#b1cd8b",
  wordTop: z = "#668b54",
  wordFoot: D = "#152d1c",
  fontSans: L = "Outfit, sans-serif",
  wordWeight: R = 600,
  animate: K = !0,
  className: P = ""
}) {
  const F = (l ?? i).trim() || i, U = Z.useMemo(() => Array.from(F), [F]), st = Z.useRef(null), at = Z.useRef(null), [j, _] = Z.useState(0), [St, gt] = Z.useState(0.8), [I, J] = Z.useState(!1), [et, nt] = Z.useState(!1), [W, G] = Z.useState(!1), [X, $] = Z.useState(!1), [tt, H] = Z.useState(!0), bt = Z.useRef({ u: 0.5, x: 0, y: 0, inside: !1 });
  Z.useLayoutEffect(() => {
    const M = st.current, k = at.current;
    if (!M || !k) return;
    let Q = 0, pt = !0;
    const dt = () => {
      const ht = k.parentElement, le = getComputedStyle(ht), Re = ht.clientWidth - parseFloat(le.paddingLeft) - parseFloat(le.paddingRight);
      k.style.fontSize = "100px";
      const Ae = wM(k.getBoundingClientRect().width, Re, Re * 0.42);
      k.style.fontSize = Ae + "px", _(Ae);
      const Wt = document.createElement("canvas").getContext("2d");
      if (Wt) {
        Wt.font = R + " 100px " + L;
        const _t = Wt.measureText(F);
        gt(DM(_t.fontBoundingBoxAscent, _t.fontBoundingBoxDescent));
      }
      const $t = M.getBoundingClientRect();
      M.style.setProperty("--bwf-rw", $t.width + "px"), M.style.setProperty("--bwf-rh", $t.height + "px"), k.querySelectorAll(".bwf-l").forEach((_t) => {
        let Le = 0, ei = 0, Ce = _t;
        for (; Ce && Ce !== M; )
          Le += Ce.offsetLeft, ei += Ce.offsetTop, Ce = Ce.offsetParent;
        _t.style.setProperty("--bwf-x", Le + "px"), _t.style.setProperty("--bwf-y", ei + "px");
      });
    }, At = () => {
      cancelAnimationFrame(Q), Q = requestAnimationFrame(dt);
    };
    dt();
    const lt = new ResizeObserver(At);
    return lt.observe(M), document.fonts.ready.then(() => {
      pt && At();
    }), () => {
      pt = !1, cancelAnimationFrame(Q), lt.disconnect();
    };
  }, [F, L, R]), Z.useEffect(() => {
    const M = matchMedia("(prefers-reduced-motion: reduce)"), k = () => G(M.matches), Q = () => H(!document.hidden);
    k(), Q(), M.addEventListener("change", k), document.addEventListener("visibilitychange", Q);
    const pt = new IntersectionObserver(([dt]) => {
      nt(dt.isIntersecting), dt.isIntersecting && J(!0);
    }, { threshold: 0.1 });
    return st.current && pt.observe(st.current), () => {
      pt.disconnect(), M.removeEventListener("change", k), document.removeEventListener("visibilitychange", Q);
    };
  }, []), Z.useEffect(() => {
    const M = st.current;
    if (!M) return;
    if (W || X || !K || !et || !tt) {
      M.style.setProperty("--bwf-g", "0");
      return;
    }
    let k = 0, Q = performance.now(), pt = Q / 1e3, dt = 58, At = 0, lt = 0, ht = 0;
    const le = (Re) => {
      const Ae = Math.min(0.1, (Re - Q) / 1e3);
      Q = Re, pt += Ae;
      const Wt = bt.current;
      dt = cr(dt, Wt.inside ? MM(Wt.u) * 0.75 + p0(pt) * 0.25 : p0(pt), 0.035, Ae), At = cr(At, Wt.x, 0.16, Ae), lt = cr(lt, Wt.y, 0.16, Ae), ht = cr(ht, Wt.inside ? 1 : 0, 0.06, Ae), M.style.setProperty("--bwf-b", dt.toFixed(2) + "%"), M.style.setProperty("--bwf-px", At.toFixed(1) + "px"), M.style.setProperty("--bwf-py", lt.toFixed(1) + "px"), M.style.setProperty("--bwf-g", ht.toFixed(3)), k = requestAnimationFrame(le);
    };
    return k = requestAnimationFrame(le), () => cancelAnimationFrame(k);
  }, [W, X, K, et, tt]);
  const yt = (M) => {
    if (M.pointerType === "touch" || W) return;
    const k = M.currentTarget.getBoundingClientRect();
    bt.current = { x: M.clientX - k.left, y: M.clientY - k.top, u: (M.clientX - k.left) / k.width, inside: M.type !== "pointerleave" };
  }, Rt = (M, k, Q) => {
    Q === "#feedback-form" && (M.preventDefault(), M.stopPropagation(), window.dispatchEvent(new Event("vettiver:add-feedback"))), (!Q || Q === "#") && M.preventDefault(), m?.(k, Q);
  }, x = {
    "--bwf-bg": v,
    "--bwf-bg-rgb": m0(v),
    "--bwf-ink": b,
    "--bwf-muted": y,
    "--bwf-acc": m0(S),
    "--bwf-wt": z,
    "--bwf-wf": D,
    "--bwf-sans": L,
    "--bwf-ww": R,
    "--bwf-b": "58%",
    "--bwf-px": "50%",
    "--bwf-py": "50%",
    "--bwf-g": "0"
  };
  return /* @__PURE__ */ B.jsxs("footer", { ref: st, className: "bwf " + P, style: x, "data-in": I || W ? "true" : "false", "data-motion": W || X || !K ? "paused" : et && tt ? "running" : "idle", onPointerMove: yt, onPointerEnter: yt, onPointerLeave: yt, children: [
    /* @__PURE__ */ B.jsx("div", { className: "bwf-rule", "aria-hidden": "true" }),
    /* @__PURE__ */ B.jsxs("div", { className: "bwf-sky", "aria-hidden": "true", children: [
      /* @__PURE__ */ B.jsx("div", { className: "bwf-wash" }),
      /* @__PURE__ */ B.jsx("div", { className: "bwf-beam" }),
      /* @__PURE__ */ B.jsx("div", { className: "bwf-glow" })
    ] }),
    /* @__PURE__ */ B.jsxs("div", { className: "bwf-inner", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "bwf-col", children: [
        /* @__PURE__ */ B.jsxs("p", { className: "bwf-label", children: [
          "© ",
          r,
          " ",
          o || i
        ] }),
        /* @__PURE__ */ B.jsxs("p", { className: "bwf-brand-line", children: [
          "From our roots.",
          /* @__PURE__ */ B.jsx("br", {}),
          "To your rituals."
        ] }),
        c.length > 0 && /* @__PURE__ */ B.jsx("ul", { className: "bwf-socials", children: c.map((M, k) => /* @__PURE__ */ B.jsx("li", { children: /* @__PURE__ */ B.jsx("a", { href: M.href || "#", className: "bwf-soc", "aria-label": M.label, onClick: (Q) => Rt(Q, M.label, M.href), ...M.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: typeof M.icon == "string" && M.icon in g0 ? g0[M.icon] : M.icon }) }, M.label + k)) }),
        /* @__PURE__ */ B.jsx("div", { className: "bwf-credits", children: h.map((M, k) => /* @__PURE__ */ B.jsxs("p", { children: [
          M.lead,
          M.href ? /* @__PURE__ */ B.jsx("a", { href: M.href, onClick: (Q) => Rt(Q, M.label, M.href), children: M.label }) : /* @__PURE__ */ B.jsx("b", { children: M.label }),
          M.tail
        ] }, k)) }),
        K && !W && /* @__PURE__ */ B.jsxs("button", { type: "button", className: "bwf-motion-toggle", onClick: () => $(!X), "aria-pressed": X, children: [
          X ? /* @__PURE__ */ B.jsx(ib, { size: 14 }) : /* @__PURE__ */ B.jsx(eb, { size: 14 }),
          X ? "Resume light" : "Pause light"
        ] })
      ] }),
      d.map((M, k) => /* @__PURE__ */ B.jsxs("nav", { className: "bwf-col", "aria-label": M.title, children: [
        /* @__PURE__ */ B.jsx("p", { className: "bwf-label", children: M.title }),
        /* @__PURE__ */ B.jsx("ul", { className: "bwf-links", children: M.links.map((Q, pt) => /* @__PURE__ */ B.jsx("li", { children: /* @__PURE__ */ B.jsxs("a", { className: "bwf-link", href: Q.href || "#", onClick: (dt) => Rt(dt, Q.label, Q.href), children: [
          /* @__PURE__ */ B.jsx("span", { children: Q.label }),
          /* @__PURE__ */ B.jsx(W0, { size: 16, "aria-hidden": "true" })
        ] }) }, Q.label + pt)) })
      ] }, M.title + k))
    ] }),
    /* @__PURE__ */ B.jsxs("div", { className: "bwf-word", style: { height: j ? zM(j, St, g) : "26vw" }, children: [
      /* @__PURE__ */ B.jsx("p", { className: "vt:sr-only", children: F }),
      /* @__PURE__ */ B.jsx("div", { className: "bwf-word-box", children: /* @__PURE__ */ B.jsx("div", { ref: at, className: "bwf-word-in", "aria-hidden": "true", children: U.map((M, k) => /* @__PURE__ */ B.jsx("span", { className: "bwf-lw", style: { "--bwf-d": 180 + k * 65 + "ms" }, children: /* @__PURE__ */ B.jsx("span", { className: "bwf-l", onClick: (Q) => {
        if (!W) {
          const pt = Q.currentTarget;
          pt.classList.remove("is-hop"), pt.offsetWidth, pt.classList.add("is-hop");
        }
      }, onAnimationEnd: (Q) => Q.currentTarget.classList.remove("is-hop"), children: M === " " ? " " : M }) }, k)) }) }),
      /* @__PURE__ */ B.jsx("div", { className: "bwf-foot", "aria-hidden": "true" })
    ] })
  ] });
}
const NM = [];
function y0() {
  const i = window.VETTIVER_CONFIG?.feedbackEndpoint || "", l = i.startsWith("/") && !i.startsWith("//") ? i : "", o = document.getElementById("testimonials-root");
  if (o) {
    const d = qy.createRoot(o), m = /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      /* @__PURE__ */ B.jsx(CM, { testimonials: NM }),
      /* @__PURE__ */ B.jsx(h0, { endpoint: l })
    ] });
    new URLSearchParams(location.search).get("ui-demo") === "testimonials" ? import("./demo-CVYBMc0E.js").then(({ AnimatedTestimonialsBasic: g }) => d.render(/* @__PURE__ */ B.jsxs(B.Fragment, { children: [
      /* @__PURE__ */ B.jsx(g, {}),
      /* @__PURE__ */ B.jsx(h0, { endpoint: "" })
    ] }))) : d.render(m);
  }
  const r = document.getElementById("footer-root");
  r && qy.createRoot(r).render(/* @__PURE__ */ B.jsx(RM, {}));
  let c = 0;
  const h = new ResizeObserver(() => {
    cancelAnimationFrame(c), c = requestAnimationFrame(() => window.ScrollTrigger?.refresh());
  });
  o && h.observe(o), r && h.observe(r), window.addEventListener("pagehide", (d) => {
    d.persisted || (h.disconnect(), cancelAnimationFrame(c));
  });
}
document.readyState === "complete" ? y0() : document.addEventListener("DOMContentLoaded", y0, { once: !0 });
export {
  CM as A,
  B as j
};
