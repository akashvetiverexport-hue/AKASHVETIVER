function Qx(i, l) {
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
function Kx(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var xf = { exports: {} }, rs = {};
var By;
function Px() {
  if (By) return rs;
  By = 1;
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
var Ly;
function Jx() {
  return Ly || (Ly = 1, xf.exports = Px()), xf.exports;
}
var B = Jx(), Ef = { exports: {} }, us = {}, Af = { exports: {} }, Cf = {};
var Hy;
function Fx() {
  return Hy || (Hy = 1, (function(i) {
    function l(H, k) {
      var $ = H.length;
      H.push(k);
      t: for (; 0 < $; ) {
        var tt = $ - 1 >>> 1, L = H[tt];
        if (0 < c(L, k))
          H[tt] = k, H[$] = L, $ = tt;
        else break t;
      }
    }
    function o(H) {
      return H.length === 0 ? null : H[0];
    }
    function r(H) {
      if (H.length === 0) return null;
      var k = H[0], $ = H.pop();
      if ($ !== k) {
        H[0] = $;
        t: for (var tt = 0, L = H.length, bt = L >>> 1; tt < bt; ) {
          var yt = 2 * (tt + 1) - 1, Rt = H[yt], x = yt + 1, w = H[x];
          if (0 > c(Rt, $))
            x < L && 0 > c(w, Rt) ? (H[tt] = w, H[x] = $, tt = x) : (H[tt] = Rt, H[yt] = $, tt = yt);
          else if (x < L && 0 > c(w, $))
            H[tt] = w, H[x] = $, tt = x;
          else break t;
        }
      }
      return k;
    }
    function c(H, k) {
      var $ = H.sortIndex - k.sortIndex;
      return $ !== 0 ? $ : H.id - k.id;
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
    var g = [], v = [], b = 1, y = null, S = 3, O = !1, D = !1, U = !1, N = !1, P = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, q = typeof setImmediate < "u" ? setImmediate : null;
    function Q(H) {
      for (var k = o(v); k !== null; ) {
        if (k.callback === null) r(v);
        else if (k.startTime <= H)
          r(v), k.sortIndex = k.expirationTime, l(g, k);
        else break;
        k = o(v);
      }
    }
    function dt(H) {
      if (U = !1, Q(H), !D)
        if (o(g) !== null)
          D = !0, at || (at = !0, F());
        else {
          var k = o(v);
          k !== null && W(dt, k.startTime - H);
        }
    }
    var at = !1, j = -1, _ = 5, St = -1;
    function gt() {
      return N ? !0 : !(i.unstable_now() - St < _);
    }
    function I() {
      if (N = !1, at) {
        var H = i.unstable_now();
        St = H;
        var k = !0;
        try {
          t: {
            D = !1, U && (U = !1, J(j), j = -1), O = !0;
            var $ = S;
            try {
              e: {
                for (Q(H), y = o(g); y !== null && !(y.expirationTime > H && gt()); ) {
                  var tt = y.callback;
                  if (typeof tt == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var L = tt(
                      y.expirationTime <= H
                    );
                    if (H = i.unstable_now(), typeof L == "function") {
                      y.callback = L, Q(H), k = !0;
                      break e;
                    }
                    y === o(g) && r(g), Q(H);
                  } else r(g);
                  y = o(g);
                }
                if (y !== null) k = !0;
                else {
                  var bt = o(v);
                  bt !== null && W(
                    dt,
                    bt.startTime - H
                  ), k = !1;
                }
              }
              break t;
            } finally {
              y = null, S = $, O = !1;
            }
            k = void 0;
          }
        } finally {
          k ? F() : at = !1;
        }
      }
    }
    var F;
    if (typeof q == "function")
      F = function() {
        q(I);
      };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), nt = et.port2;
      et.port1.onmessage = I, F = function() {
        nt.postMessage(null);
      };
    } else
      F = function() {
        P(I, 0);
      };
    function W(H, k) {
      j = P(function() {
        H(i.unstable_now());
      }, k);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(H) {
      H.callback = null;
    }, i.unstable_forceFrameRate = function(H) {
      0 > H || 125 < H ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : _ = 0 < H ? Math.floor(1e3 / H) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, i.unstable_next = function(H) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = S;
      }
      var $ = S;
      S = k;
      try {
        return H();
      } finally {
        S = $;
      }
    }, i.unstable_requestPaint = function() {
      N = !0;
    }, i.unstable_runWithPriority = function(H, k) {
      switch (H) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          H = 3;
      }
      var $ = S;
      S = H;
      try {
        return k();
      } finally {
        S = $;
      }
    }, i.unstable_scheduleCallback = function(H, k, $) {
      var tt = i.unstable_now();
      switch (typeof $ == "object" && $ !== null ? ($ = $.delay, $ = typeof $ == "number" && 0 < $ ? tt + $ : tt) : $ = tt, H) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = $ + L, H = {
        id: b++,
        callback: k,
        priorityLevel: H,
        startTime: $,
        expirationTime: L,
        sortIndex: -1
      }, $ > tt ? (H.sortIndex = $, l(v, H), o(g) === null && H === o(v) && (U ? (J(j), j = -1) : U = !0, W(dt, $ - tt))) : (H.sortIndex = L, l(g, H), D || O || (D = !0, at || (at = !0, F()))), H;
    }, i.unstable_shouldYield = gt, i.unstable_wrapCallback = function(H) {
      var k = S;
      return function() {
        var $ = S;
        S = k;
        try {
          return H.apply(this, arguments);
        } finally {
          S = $;
        }
      };
    };
  })(Cf)), Cf;
}
var Gy;
function Ix() {
  return Gy || (Gy = 1, Af.exports = Fx()), Af.exports;
}
var Mf = { exports: {} }, Tt = {};
var Yy;
function Wx() {
  if (Yy) return Tt;
  Yy = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), d = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), g = /* @__PURE__ */ Symbol.for("react.suspense"), v = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = /* @__PURE__ */ Symbol.for("react.view_transition"), O = Symbol.iterator;
  function D(x) {
    return x === null || typeof x != "object" ? null : (x = O && x[O] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var U = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, P = {};
  function J(x, w, X) {
    this.props = x, this.context = w, this.refs = P, this.updater = X || U;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(x, w) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, w, "setState");
  }, J.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function q() {
  }
  q.prototype = J.prototype;
  function Q(x, w, X) {
    this.props = x, this.context = w, this.refs = P, this.updater = X || U;
  }
  var dt = Q.prototype = new q();
  dt.constructor = Q, N(dt, J.prototype), dt.isPureReactComponent = !0;
  var at = Array.isArray;
  function j() {
  }
  var _ = { H: null, A: null, T: null, S: null }, St = Object.prototype.hasOwnProperty;
  function gt(x, w, X) {
    var K = X.ref;
    return {
      $$typeof: i,
      type: x,
      key: w,
      ref: K !== void 0 ? K : null,
      props: X
    };
  }
  function I(x, w) {
    return gt(x.type, w, x.props);
  }
  function F(x) {
    return typeof x == "object" && x !== null && x.$$typeof === i;
  }
  function et(x) {
    var w = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(X) {
      return w[X];
    });
  }
  var nt = /\/+/g;
  function W(x, w) {
    return typeof x == "object" && x !== null && x.key != null ? et("" + x.key) : w.toString(36);
  }
  function H(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(j, j) : (x.status = "pending", x.then(
          function(w) {
            x.status === "pending" && (x.status = "fulfilled", x.value = w);
          },
          function(w) {
            x.status === "pending" && (x.status = "rejected", x.reason = w);
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
  function k(x, w, X, K, pt) {
    var ft = typeof x;
    (ft === "undefined" || ft === "boolean") && (x = null);
    var At = !1;
    if (x === null) At = !0;
    else
      switch (ft) {
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
              return At = x._init, k(
                At(x._payload),
                w,
                X,
                K,
                pt
              );
          }
      }
    if (At)
      return pt = pt(x), At = K === "" ? "." + W(x, 0) : K, at(pt) ? (X = "", At != null && (X = At.replace(nt, "$&/") + "/"), k(pt, w, X, "", function(le) {
        return le;
      })) : pt != null && (F(pt) && (pt = I(
        pt,
        X + (pt.key == null || x && x.key === pt.key ? "" : ("" + pt.key).replace(
          nt,
          "$&/"
        ) + "/") + At
      )), w.push(pt)), 1;
    At = 0;
    var lt = K === "" ? "." : K + ":";
    if (at(x))
      for (var ht = 0; ht < x.length; ht++)
        K = x[ht], ft = lt + W(K, ht), At += k(
          K,
          w,
          X,
          ft,
          pt
        );
    else if (ht = D(x), typeof ht == "function")
      for (x = ht.call(x), ht = 0; !(K = x.next()).done; )
        K = K.value, ft = lt + W(K, ht++), At += k(
          K,
          w,
          X,
          ft,
          pt
        );
    else if (ft === "object") {
      if (typeof x.then == "function")
        return k(
          H(x),
          w,
          X,
          K,
          pt
        );
      throw w = String(x), Error(
        "Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return At;
  }
  function $(x, w, X) {
    if (x == null) return x;
    var K = [], pt = 0;
    return k(x, K, "", "", function(ft) {
      return w.call(X, ft, pt++);
    }), K;
  }
  function tt(x) {
    if (x._status === -1) {
      var w = x._result, X = w();
      X.then(
        function(K) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = K, X.status === void 0 && (X.status = "fulfilled", X.value = K));
        },
        function(K) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = K, X.status === void 0 && (X.status = "rejected", X.reason = K));
        }
      ), x._status === -1 && (x._status = 0, x._result = X);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var L = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var w = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(w)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  };
  function bt(x) {
    var w = _.T, X = {};
    X.types = w !== null ? w.types : null, _.T = X;
    try {
      var K = x(), pt = _.S;
      pt !== null && pt(X, K), typeof K == "object" && K !== null && typeof K.then == "function" && K.then(j, L);
    } catch (ft) {
      L(ft);
    } finally {
      w !== null && X.types !== null && (w.types = X.types), _.T = w;
    }
  }
  function yt(x) {
    var w = _.T;
    if (w !== null) {
      var X = w.types;
      X === null ? w.types = [x] : X.indexOf(x) === -1 && X.push(x);
    } else bt(yt.bind(null, x));
  }
  var Rt = {
    map: $,
    forEach: function(x, w, X) {
      $(
        x,
        function() {
          w.apply(this, arguments);
        },
        X
      );
    },
    count: function(x) {
      var w = 0;
      return $(x, function() {
        w++;
      }), w;
    },
    toArray: function(x) {
      return $(x, function(w) {
        return w;
      }) || [];
    },
    only: function(x) {
      if (!F(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return Tt.Activity = y, Tt.Children = Rt, Tt.Component = J, Tt.Fragment = o, Tt.Profiler = c, Tt.PureComponent = Q, Tt.StrictMode = r, Tt.Suspense = g, Tt.ViewTransition = S, Tt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = _, Tt.__COMPILER_RUNTIME = {
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
  }, Tt.cloneElement = function(x, w, X) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var K = N({}, x.props), pt = x.key;
    if (w != null)
      for (ft in w.key !== void 0 && (pt = "" + w.key), w)
        !St.call(w, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && w.ref === void 0 || (K[ft] = w[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) K.children = X;
    else if (1 < ft) {
      for (var At = Array(ft), lt = 0; lt < ft; lt++)
        At[lt] = arguments[lt + 2];
      K.children = At;
    }
    return gt(x.type, pt, K);
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
  }, Tt.createElement = function(x, w, X) {
    var K, pt = {}, ft = null;
    if (w != null)
      for (K in w.key !== void 0 && (ft = "" + w.key), w)
        St.call(w, K) && K !== "key" && K !== "__self" && K !== "__source" && (pt[K] = w[K]);
    var At = arguments.length - 2;
    if (At === 1) pt.children = X;
    else if (1 < At) {
      for (var lt = Array(At), ht = 0; ht < At; ht++)
        lt[ht] = arguments[ht + 2];
      pt.children = lt;
    }
    if (x && x.defaultProps)
      for (K in At = x.defaultProps, At)
        pt[K] === void 0 && (pt[K] = At[K]);
    return gt(x, ft, pt);
  }, Tt.createRef = function() {
    return { current: null };
  }, Tt.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, Tt.isValidElement = F, Tt.lazy = function(x) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: x },
      _init: tt
    };
  }, Tt.memo = function(x, w) {
    return {
      $$typeof: v,
      type: x,
      compare: w === void 0 ? null : w
    };
  }, Tt.startTransition = bt, Tt.unstable_useCacheRefresh = function() {
    return _.H.useCacheRefresh();
  }, Tt.use = function(x) {
    return _.H.use(x);
  }, Tt.useActionState = function(x, w, X) {
    return _.H.useActionState(x, w, X);
  }, Tt.useCallback = function(x, w) {
    return _.H.useCallback(x, w);
  }, Tt.useContext = function(x) {
    return _.H.useContext(x);
  }, Tt.useDebugValue = function() {
  }, Tt.useDeferredValue = function(x, w) {
    return _.H.useDeferredValue(x, w);
  }, Tt.useEffect = function(x, w) {
    return _.H.useEffect(x, w);
  }, Tt.useEffectEvent = function(x) {
    return _.H.useEffectEvent(x);
  }, Tt.useId = function() {
    return _.H.useId();
  }, Tt.useImperativeHandle = function(x, w, X) {
    return _.H.useImperativeHandle(x, w, X);
  }, Tt.useInsertionEffect = function(x, w) {
    return _.H.useInsertionEffect(x, w);
  }, Tt.useLayoutEffect = function(x, w) {
    return _.H.useLayoutEffect(x, w);
  }, Tt.useMemo = function(x, w) {
    return _.H.useMemo(x, w);
  }, Tt.useOptimistic = function(x, w) {
    return _.H.useOptimistic(x, w);
  }, Tt.useReducer = function(x, w, X) {
    return _.H.useReducer(x, w, X);
  }, Tt.useRef = function(x) {
    return _.H.useRef(x);
  }, Tt.useState = function(x) {
    return _.H.useState(x);
  }, Tt.useSyncExternalStore = function(x, w, X) {
    return _.H.useSyncExternalStore(
      x,
      w,
      X
    );
  }, Tt.useTransition = function() {
    return _.H.useTransition();
  }, Tt.version = "19.3.0", Tt;
}
var qy;
function wd() {
  return qy || (qy = 1, Mf.exports = Wx()), Mf.exports;
}
var wf = { exports: {} }, Se = {};
var Xy;
function $x() {
  if (Xy) return Se;
  Xy = 1;
  var i = wd();
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
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: O == null ? null : O === d ? d : "" + O,
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
      var S = y.as, O = v(S, y.crossOrigin), D = typeof y.integrity == "string" ? y.integrity : void 0, U = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? r.d.S(
        b,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: O,
          integrity: D,
          fetchPriority: U
        }
      ) : S === "script" && r.d.X(b, {
        crossOrigin: O,
        integrity: D,
        fetchPriority: U,
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
      var S = y.as, O = v(S, y.crossOrigin);
      r.d.L(b, S, {
        crossOrigin: O,
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
var ky;
function Tv() {
  if (ky) return wf.exports;
  ky = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), wf.exports = $x(), wf.exports;
}
var Zy;
function tE() {
  if (Zy) return us;
  Zy = 1;
  var i = Ix(), l = wd(), o = Tv();
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
  function O(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function D(t) {
    var e = [null, null], n = S(t);
    return n === null || U(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function U(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && U(
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
  function N(t) {
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
  var P = null, J = null;
  function q(t, e, n) {
    return t === n ? !0 : t === e ? (P = t, !0) : !1;
  }
  function Q(t, e, n) {
    return t === n ? (J = t, !1) : t === e ? (J !== null && (P = t), !0) : !1;
  }
  function dt(t) {
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
  var j = Object.assign, _ = /* @__PURE__ */ Symbol.for("react.element"), St = /* @__PURE__ */ Symbol.for("react.transitional.element"), gt = /* @__PURE__ */ Symbol.for("react.portal"), I = /* @__PURE__ */ Symbol.for("react.fragment"), F = /* @__PURE__ */ Symbol.for("react.strict_mode"), et = /* @__PURE__ */ Symbol.for("react.profiler"), nt = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), H = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), $ = /* @__PURE__ */ Symbol.for("react.suspense_list"), tt = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), bt = /* @__PURE__ */ Symbol.for("react.activity"), yt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Rt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), x = /* @__PURE__ */ Symbol.for("react.view_transition"), w = /* @__PURE__ */ Symbol.for("react.recoverable"), X = Symbol.iterator;
  function K(t) {
    return t === null || typeof t != "object" ? null : (t = X && t[X] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var pt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === pt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case I:
        return "Fragment";
      case et:
        return "Profiler";
      case F:
        return "StrictMode";
      case k:
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
        case H:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case tt:
          return e = t.displayName || null, e !== null ? e : ft(t.type) || "Memo";
        case L:
          e = t._payload, t = t._init;
          try {
            return ft(t(e));
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
  var Le = Wt(null), ti = Wt(null), Ce = Wt(null), ws = Wt(null);
  function Ds(t, e) {
    switch (_t(Ce, e), _t(ti, t), _t(Le, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Qg(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Qg(e), t = Kg(e, t);
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
    $t(Le), $t(ti), $t(Ce);
  }
  function Yr(t) {
    var e = t.memoizedState;
    e !== null && (nl._currentValue = e.memoizedState, _t(ws, t)), e = Le.current;
    var n = Kg(e, t.type);
    e !== n && (_t(ti, t), _t(Le, n));
  }
  function zs(t) {
    ti.current === t && ($t(Le), $t(ti)), ws.current === t && ($t(ws), nl._currentValue = le);
  }
  var qr, hh;
  function ei(t) {
    if (qr === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        qr = e && e[1] || "", hh = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + qr + t + hh;
  }
  var Xr = !1;
  function kr(t, e) {
    if (!t || Xr) return "";
    Xr = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var Y = function() {
                throw Error();
              };
              if (Object.defineProperty(Y.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Y, []);
                } catch (it) {
                  var A = it;
                }
                Reflect.construct(t, [], Y);
              } else {
                try {
                  Y.call();
                } catch (it) {
                  A = it;
                }
                Y = !1;
                try {
                  var R = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), Y = !0, new t();
                } finally {
                  Y && (R !== void 0 ? Object.defineProperty(t.prototype, "props", R) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (it) {
                A = it;
              }
              (Y = t()) && typeof Y.catch == "function" && Y.catch(function() {
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
`), M = p.split(`
`);
        for (s = a = 0; a < T.length && !T[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; s < M.length && !M[s].includes(
          "DetermineComponentFrameRoot"
        ); )
          s++;
        if (a === T.length || s === M.length)
          for (a = T.length - 1, s = M.length - 1; 1 <= a && 0 <= s && T[a] !== M[s]; )
            s--;
        for (; 1 <= a && 0 <= s; a--, s--)
          if (T[a] !== M[s]) {
            if (a !== 1 || s !== 1)
              do
                if (a--, s--, 0 > s || T[a] !== M[s]) {
                  var V = `
` + T[a].replace(" at new ", " at ");
                  return t.displayName && V.includes("<anonymous>") && (V = V.replace("<anonymous>", t.displayName)), V;
                }
              while (1 <= a && 0 <= s);
            break;
          }
      }
    } finally {
      Xr = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? ei(n) : "";
  }
  function F1(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ei(t.type);
      case 16:
        return ei("Lazy");
      case 13:
        return t.child !== e && e !== null ? ei("Suspense Fallback") : ei("Suspense");
      case 19:
        return ei("SuspenseList");
      case 0:
      case 15:
        return kr(t.type, !1);
      case 11:
        return kr(t.type.render, !1);
      case 1:
        return kr(t.type, !0);
      case 31:
        return ei("Activity");
      case 30:
        return ei("ViewTransition");
      default:
        return "";
    }
  }
  function mh(t) {
    try {
      var e = "", n = null;
      do
        e += F1(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Zr = Object.prototype.hasOwnProperty, Qr = i.unstable_scheduleCallback, Kr = i.unstable_cancelCallback, I1 = i.unstable_shouldYield, W1 = i.unstable_requestPaint, He = i.unstable_now, $1 = i.unstable_getCurrentPriorityLevel, ph = i.unstable_ImmediatePriority, gh = i.unstable_UserBlockingPriority, Os = i.unstable_NormalPriority, tS = i.unstable_LowPriority, yh = i.unstable_IdlePriority, eS = i.log, nS = i.unstable_setDisableYieldValue, pl = null, Ge = null;
  function ni(t) {
    if (typeof eS == "function" && nS(t), Ge && typeof Ge.setStrictMode == "function")
      try {
        Ge.setStrictMode(pl, t);
      } catch {
      }
  }
  var Ye = Math.clz32 ? Math.clz32 : lS, iS = Math.log, aS = Math.LN2;
  function lS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (iS(t) / aS | 0) | 0;
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
  function vh(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - Ye(n), s = 1 << a;
        e |= t[a], n &= ~s;
      }
    return e;
  }
  function sS(t, e) {
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
  function bh() {
    var t = _s;
    return _s <<= 1, (_s & 62914560) === 0 && (_s = 4194304), t;
  }
  function Pr(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function yl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function oS(t, e, n, a, s, u) {
    var f = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var p = t.entanglements, T = t.expirationTimes, M = t.hiddenUpdates;
    for (n = f & ~n; 0 < n; ) {
      var V = 31 - Ye(n), Y = 1 << V;
      p[V] = 0, T[V] = -1;
      var A = M[V];
      if (A !== null)
        for (M[V] = null, V = 0; V < A.length; V++) {
          var R = A[V];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~Y;
    }
    a !== 0 && Sh(t, a, 0), u !== 0 && s === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(f & ~e));
  }
  function Sh(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - Ye(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Th(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - Ye(n), s = 1 << a;
      s & e | t[a] & e && (t[a] |= e), n &= ~s;
    }
  }
  function xh(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Jr(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Jr(t) {
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
  function Fr(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Eh() {
    var t = ht.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : Oy(t.type));
  }
  function Ah(t, e) {
    var n = ht.p;
    try {
      return ht.p = t, e();
    } finally {
      ht.p = n;
    }
  }
  var Un = Math.random().toString(36).slice(2), me = "__reactFiber$" + Un, Ne = "__reactProps$" + Un, ga = "__reactContainer$" + Un, Ch = "__reactEvents$" + Un, rS = "__reactListeners$" + Un, uS = "__reactHandles$" + Un, Mh = "__reactResources$" + Un, vl = "__reactMarker$" + Un, js = "__reactLoad$" + Un;
  function Us(t) {
    delete t[me], delete t[Ne], delete t[rS], delete t[uS];
  }
  function Bi(t) {
    var e;
    if (e = t[me]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[ga] || n[me]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = cy(t); t !== null; ) {
            if (n = t[me]) return n;
            t = cy(t);
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
    var e = t[Mh];
    return e || (e = t[Mh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function ce(t) {
    t[vl] = !0;
  }
  function wh(t) {
    t[js] = void 0;
  }
  var Dh = /* @__PURE__ */ new Set(), zh = {};
  function Li(t, e) {
    ba(t, e), ba(t + "Capture", e);
  }
  function ba(t, e) {
    for (zh[t] = e, t = 0; t < e.length; t++)
      Dh.add(e[t]);
  }
  var cS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Oh = {}, Rh = {};
  function fS(t) {
    return Zr.call(Rh, t) ? !0 : Zr.call(Oh, t) ? !1 : cS.test(t) ? Rh[t] = !0 : (Oh[t] = !0, !1);
  }
  var Vt = !1;
  function Nh() {
    var t = Vt;
    return Vt = !1, t;
  }
  function Bs(t, e, n) {
    if (fS(e))
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
  function _h(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function dS(t, e, n) {
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
  function Ir(t) {
    if (!t._valueTracker) {
      var e = _h(t) ? "checked" : "value";
      t._valueTracker = dS(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function Vh(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = _h(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var hS = /[\n"\\]/g;
  function $e(t) {
    return t.replace(
      hS,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Wr(t, e, n, a, s, u, f, p) {
    t.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? t.type = f : t.removeAttribute("type"), e != null ? f === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + qe(e)) : t.value !== "" + qe(e) && (t.value = "" + qe(e)) : f !== "submit" && f !== "reset" || t.removeAttribute("value"), e != null ? f === "number" && t.value == e ? $r(t, qe(t.value)) : $r(t, qe(e)) : n != null ? $r(t, qe(n)) : a != null && t.removeAttribute("value"), s == null && u != null && (t.defaultChecked = !!u), s != null && (t.checked = s && typeof s != "function" && typeof s != "symbol"), p != null && typeof p != "function" && typeof p != "symbol" && typeof p != "boolean" ? t.name = "" + qe(p) : t.removeAttribute("name");
  }
  function jh(t, e, n, a, s, u, f, p) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Ir(t);
        return;
      }
      n = n != null ? "" + qe(n) : "", e = e != null ? "" + qe(e) : n, p || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? s, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = p ? t.checked : !!a, t.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.name = f), Ir(t);
  }
  function $r(t, e) {
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
  function Uh(t, e, n) {
    if (e != null && (e = "" + qe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + qe(n) : "";
  }
  function Bh(t, e, n, a) {
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
    n = qe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Ir(t);
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
  var mS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Lh(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || mS.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Hh(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Vt = !0);
      for (var s in e)
        a = e[s], e.hasOwnProperty(s) && n[s] !== a && (Lh(t, s, a), Vt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Lh(t, u, e[u]);
  }
  function tu(t) {
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
  var pS = /* @__PURE__ */ new Map([
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
  ]), gS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Hs(t) {
    return gS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Tn() {
  }
  var eu = null;
  function nu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var xa = null, Ea = null;
  function Gh(t) {
    var e = ya(t);
    if (e && (t = e.stateNode)) {
      var n = t[Ne] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Wr(
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
                Wr(
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
              a = n[e], a.form === t.form && Vh(a);
          }
          break t;
        case "textarea":
          Uh(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Sa(t, !!n.multiple, e, !1);
      }
    }
  }
  var iu = !1;
  function Yh(t, e, n) {
    if (iu) return t(e, n);
    iu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (iu = !1, (xa !== null || Ea !== null) && (Go(), xa && (e = xa, t = Ea, Ea = xa = null, Gh(e), t)))
        for (e = 0; e < t.length; e++) Gh(t[e]);
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
  var Ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), au = !1;
  if (Ln)
    try {
      var Tl = {};
      Object.defineProperty(Tl, "passive", {
        get: function() {
          au = !0;
        }
      }), window.addEventListener("test", Tl, Tl), window.removeEventListener("test", Tl, Tl);
    } catch {
      au = !1;
    }
  var ii = null, lu = null, Gs = null;
  function qh() {
    if (Gs) return Gs;
    var t, e = lu, n = e.length, a, s = "value" in ii ? ii.value : ii.textContent, u = s.length;
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
  function Xh() {
    return !1;
  }
  function Me(t) {
    function e(n, a, s, u, f) {
      this._reactName = n, this._targetInst = s, this.type = a, this.nativeEvent = u, this.target = f, this.currentTarget = null;
      for (var p in t)
        t.hasOwnProperty(p) && (n = t[p], this[p] = n ? n(u) : u[p]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? qs : Xh, this.isPropagationStopped = Xh, this;
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
  var ai = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Xs = Me(ai), xl = j({}, ai, { view: 0, detail: 0 }), yS = Me(xl), su, ou, El, ks = j({}, xl, {
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
    getModifierState: uu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== El && (El && t.type === "mousemove" ? (su = t.screenX - El.screenX, ou = t.screenY - El.screenY) : ou = su = 0, El = t), su);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ou;
    }
  }), kh = Me(ks), vS = j({}, ks, { dataTransfer: 0 }), bS = Me(vS), SS = j({}, xl, { relatedTarget: 0 }), ru = Me(SS), TS = j({}, ai, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xS = Me(TS), ES = j({}, ai, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), AS = Me(ES), CS = j({}, ai, { data: 0 }), Zh = Me(CS), MS = {
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
  }, wS = {
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
  }, DS = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function zS(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = DS[t]) ? !!e[t] : !1;
  }
  function uu() {
    return zS;
  }
  var OS = j({}, xl, {
    key: function(t) {
      if (t.key) {
        var e = MS[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = Ys(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? wS[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: uu,
    charCode: function(t) {
      return t.type === "keypress" ? Ys(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? Ys(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), RS = Me(OS), NS = j({}, ks, {
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
  }), Qh = Me(NS), _S = j({}, ai, { submitter: 0 }), VS = Me(_S), jS = j({}, xl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: uu
  }), US = Me(jS), BS = j({}, ai, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), LS = Me(BS), HS = j({}, ks, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), GS = Me(HS), YS = j({}, ai, {
    newState: 0,
    oldState: 0,
    source: 0
  }), qS = Me(YS), XS = [9, 13, 27, 32], cu = Ln && "CompositionEvent" in window, Al = null;
  Ln && "documentMode" in document && (Al = document.documentMode);
  var kS = Ln && "TextEvent" in window && !Al, Kh = Ln && (!cu || Al && 8 < Al && 11 >= Al), Ph = " ", Jh = !1;
  function Fh(t, e) {
    switch (t) {
      case "keyup":
        return XS.indexOf(e.keyCode) !== -1;
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
  function Ih(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Aa = !1;
  function ZS(t, e) {
    switch (t) {
      case "compositionend":
        return Ih(e);
      case "keypress":
        return e.which !== 32 ? null : (Jh = !0, Ph);
      case "textInput":
        return t = e.data, t === Ph && Jh ? null : t;
      default:
        return null;
    }
  }
  function QS(t, e) {
    if (Aa)
      return t === "compositionend" || !cu && Fh(t, e) ? (t = qh(), Gs = lu = ii = null, Aa = !1, t) : null;
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
        return Kh && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var KS = {
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
  function Wh(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!KS[t.type] : e === "textarea";
  }
  function $h(t, e, n, a) {
    xa ? Ea ? Ea.push(a) : Ea = [a] : xa = a, e = Qo(e, "onChange"), 0 < e.length && (n = new Xs(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Cl = null, Ml = null;
  function PS(t) {
    Gg(t, 0);
  }
  function Zs(t) {
    var e = bl(t);
    if (Vh(e)) return t;
  }
  function tm(t, e) {
    if (t === "change") return e;
  }
  var em = !1;
  if (Ln) {
    var fu;
    if (Ln) {
      var du = "oninput" in document;
      if (!du) {
        var nm = document.createElement("div");
        nm.setAttribute("oninput", "return;"), du = typeof nm.oninput == "function";
      }
      fu = du;
    } else fu = !1;
    em = fu && (!document.documentMode || 9 < document.documentMode);
  }
  function im() {
    Cl && (Cl.detachEvent("onpropertychange", am), Ml = Cl = null);
  }
  function am(t) {
    if (t.propertyName === "value" && Zs(Ml)) {
      var e = [];
      $h(
        e,
        Ml,
        t,
        nu(t)
      ), Yh(PS, e);
    }
  }
  function JS(t, e, n) {
    t === "focusin" ? (im(), Cl = e, Ml = n, Cl.attachEvent("onpropertychange", am)) : t === "focusout" && im();
  }
  function FS(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Zs(Ml);
  }
  function IS(t, e) {
    if (t === "click") return Zs(e);
  }
  function WS(t, e) {
    if (t === "input" || t === "change")
      return Zs(e);
  }
  function $S(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Xe = typeof Object.is == "function" ? Object.is : $S;
  function wl(t, e) {
    if (Xe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var s = n[a];
      if (!Zr.call(e, s) || !Xe(t[s], e[s]))
        return !1;
    }
    return !0;
  }
  function hu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function lm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function sm(t, e) {
    var n = lm(t);
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
      n = lm(n);
    }
  }
  function om(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? om(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function rm(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = hu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = hu(t.document);
    }
    return e;
  }
  function mu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var tT = Ln && "documentMode" in document && 11 >= document.documentMode, Ca = null, pu = null, Dl = null, gu = !1;
  function um(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    gu || Ca == null || Ca !== hu(a) || (a = Ca, "selectionStart" in a && mu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Dl && wl(Dl, a) || (Dl = a, a = Qo(pu, "onSelect"), 0 < a.length && (e = new Xs(
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
  var Ma = {
    animationend: Hi("Animation", "AnimationEnd"),
    animationiteration: Hi("Animation", "AnimationIteration"),
    animationstart: Hi("Animation", "AnimationStart"),
    transitionrun: Hi("Transition", "TransitionRun"),
    transitionstart: Hi("Transition", "TransitionStart"),
    transitioncancel: Hi("Transition", "TransitionCancel"),
    transitionend: Hi("Transition", "TransitionEnd")
  }, yu = {}, cm = {};
  Ln && (cm = document.createElement("div").style, "AnimationEvent" in window || (delete Ma.animationend.animation, delete Ma.animationiteration.animation, delete Ma.animationstart.animation), "TransitionEvent" in window || delete Ma.transitionend.transition);
  function Gi(t) {
    if (yu[t]) return yu[t];
    if (!Ma[t]) return t;
    var e = Ma[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in cm)
        return yu[t] = e[n];
    return t;
  }
  var fm = Gi("animationend"), dm = Gi("animationiteration"), hm = Gi("animationstart"), eT = Gi("transitionrun"), nT = Gi("transitionstart"), iT = Gi("transitioncancel"), mm = Gi("transitionend"), pm = /* @__PURE__ */ new Map(), vu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  vu.push("scrollEnd");
  function cn(t, e) {
    pm.set(t, e), Li(e, [t]);
  }
  var aT = 0;
  function Hn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = mn.identifierPrefix;
    var n = aT++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function gm(t) {
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
    return t = gm(t), e = gm(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
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
  }, tn = [], wa = 0, bu = 0;
  function Ks() {
    for (var t = wa, e = bu = wa = 0; e < t; ) {
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
      u !== 0 && ym(n, s, u);
    }
  }
  function Ps(t, e, n, a) {
    tn[wa++] = t, tn[wa++] = e, tn[wa++] = n, tn[wa++] = a, bu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Su(t, e, n, a) {
    return Ps(t, e, n, a), Js(t);
  }
  function Yi(t, e) {
    return Ps(t, null, null, e), Js(t);
  }
  function ym(t, e, n) {
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
  function lT(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function _e(t, e, n, a) {
    return new lT(t, e, n, a);
  }
  function Tu(t) {
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
  function vm(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Fs(t, e, n, a, s, u) {
    var f = 0;
    if (a = t, typeof a == "function") Tu(a) && (f = 1);
    else if (typeof a == "string")
      f = _x(
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
        case F:
          f = 8, s |= 24;
          break;
        case et:
          return t = _e(12, n, e, s | 2), t.elementType = et, t.lanes = u, t;
        case k:
          return t = _e(13, n, e, s), t.elementType = k, t.lanes = u, t;
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
              case H:
                f = 11;
                break t;
              case tt:
                f = 14;
                break t;
              case L:
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
  function xu(t, e, n) {
    return t = _e(6, t, null, e), t.lanes = n, t;
  }
  function bm(t) {
    var e = _e(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Eu(t, e, n) {
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
  var Sm = /* @__PURE__ */ new WeakMap();
  function en(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Sm.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: mh(e)
      }, Sm.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: mh(e)
    };
  }
  var za = [], Oa = 0, Is = null, zl = 0, nn = [], an = 0, li = null, xn = 1, En = "";
  function qn(t, e) {
    za[Oa++] = zl, za[Oa++] = Is, Is = t, zl = e;
  }
  function Tm(t, e, n) {
    nn[an++] = xn, nn[an++] = En, nn[an++] = li, li = t;
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
    t.return !== null && (qn(t, 1), Tm(t, 1, 0));
  }
  function Au(t) {
    for (; t === Is; )
      Is = za[--Oa], za[Oa] = null, zl = za[--Oa], za[Oa] = null;
    for (; t === li; )
      li = nn[--an], nn[an] = null, En = nn[--an], nn[an] = null, xn = nn[--an], nn[an] = null;
  }
  function xm(t, e) {
    nn[an++] = xn, nn[an++] = En, nn[an++] = li, xn = e.id, En = e.overflow, li = t;
  }
  var fe = null, kt = null, Ct = !1, si = null, ln = !1, Cu = Error(r(519));
  function oi(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ol(en(e, t)), Cu;
  }
  function Em(t) {
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
        Dt("invalid", e), jh(
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
        Dt("invalid", e), Bh(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || kg(e.textContent, n) ? (a.popover != null && (Dt("beforetoggle", e), Dt("toggle", e)), a.onScroll != null && Dt("scroll", e), a.onScrollEnd != null && Dt("scrollend", e), a.onClick != null && (e.onclick = Tn), e = !0) : e = !1, e || oi(t, !0);
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
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || ef(t.type, t.memoizedProps)), n = !n), n && kt && oi(t), $s(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      kt = uy(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      kt = uy(t);
    } else
      e === 27 ? (e = kt, Ei(t.type) ? (t = ff, ff = null, kt = t) : kt = e) : kt = fe ? on(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Xi() {
    kt = fe = null, Ct = !1;
  }
  function Mu() {
    var t = si;
    return t !== null && (Ue === null ? Ue = t : Ue.push.apply(
      Ue,
      t
    ), si = null), t;
  }
  function Ol(t) {
    si === null ? si = [t] : si.push(t);
  }
  var wu = Wt(null), ki = null, Xn = null;
  function ri(t, e, n) {
    _t(wu, e._currentValue), e._currentValue = n;
  }
  function kn(t) {
    t._currentValue = wu.current, $t(wu);
  }
  function to(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Du(t, e, n, a) {
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
          Xe(s.pendingProps.value, f.value) || (t !== null ? t.push(p) : t = [p]);
        }
      } else if (s === ws.current) {
        if (f = s.alternate, f === null) throw Error(r(387));
        f.memoizedState.memoizedState !== s.memoizedState.memoizedState && (t !== null ? t.push(nl) : t = [nl]);
      }
      s = s.return;
    }
    return t !== null && Du(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function eo(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Xe(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function Qi(t) {
    ki = t, Xn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function pe(t) {
    return Am(ki, t);
  }
  function no(t, e) {
    return ki === null && Qi(t), Am(t, e);
  }
  function Am(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Xn === null) {
      if (t === null) throw Error(r(308));
      Xn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Xn = Xn.next = e;
    return n;
  }
  var sT = typeof AbortController < "u" ? AbortController : function() {
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
  }, oT = i.unstable_scheduleCallback, rT = i.unstable_NormalPriority, te = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zu() {
    return {
      controller: new sT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Rl(t) {
    t.refCount--, t.refCount === 0 && oT(rT, function() {
      t.controller.abort();
    });
  }
  function Cm(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var Nl = null;
  function uT(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var _l = null, Ou = 0, Ki = 0, Na = null;
  function cT(t, e) {
    if (_l === null) {
      var n = _l = [];
      Ou = 0, Ki = Qc(), Na = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Ou++, e.then(Mm, Mm), e;
  }
  function Mm() {
    if (--Ou === 0 && (Nl = null, _l !== null)) {
      Na !== null && (Na.status = "fulfilled");
      var t = _l;
      _l = null, Ki = 0, Na = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function fT(t, e) {
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
  var wm = lt.S;
  lt.S = function(t, e) {
    if (bg = He(), typeof e == "object" && e !== null && typeof e.then == "function" && cT(t, e), Nl !== null)
      for (var n = Fa; n !== null; )
        Cm(n, Nl), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = Fa; a !== null; )
        Cm(a, n), a = a.next;
      if (Ki !== 0) {
        a = Nl, a === null && (a = Nl = []);
        for (var s = 0; s < n.length; s++) {
          var u = n[s];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    wm !== null && wm(t, e);
  };
  var Pi = Wt(null);
  function Ru() {
    var t = Pi.current;
    return t !== null ? t : Xt.pooledCache;
  }
  function io(t, e) {
    e === null ? _t(Pi, Pi.current) : _t(Pi, e.pool);
  }
  function Dm() {
    var t = Ru();
    return t === null ? null : { parent: te._currentValue, pool: t };
  }
  var _a = Error(r(460)), Nu = Error(r(474)), ao = Error(r(542)), lo = { then: function() {
  } };
  function zm(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function Om(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Tn, Tn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, Nm(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Tn, Tn);
        else {
          if (t = Xt, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, Nm(t), t;
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
  function Rm() {
    if (Fi === null) throw Error(r(459));
    var t = Fi;
    return Fi = null, t;
  }
  function Nm(t) {
    if (t === _a || t === ao)
      throw Error(r(483));
  }
  var Va = null, Vl = 0;
  function so(t) {
    var e = Vl;
    return Vl += 1, Va === null && (Va = []), Om(Va, t, e);
  }
  function ui(t, e) {
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
  function _m(t) {
    function e(C, E) {
      if (t) {
        var z = C.deletions;
        z === null ? (C.deletions = [E], C.flags |= 16) : z.push(E);
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
    function u(C, E, z) {
      return C.index = z, t ? (z = C.alternate, z !== null ? (z = z.index, z < E ? (C.flags |= 2, E) : z) : (C.flags |= 134217730, E)) : (C.flags |= 1048576, E);
    }
    function f(C) {
      return t && C.alternate === null && (C.flags |= 134217730), C;
    }
    function p(C, E, z, G) {
      return E === null || E.tag !== 6 ? (E = xu(z, C.mode, G), E.return = C, E) : (E = s(E, z), E.return = C, E);
    }
    function T(C, E, z, G) {
      var st = z.type;
      return st === I ? (C = V(
        C,
        E,
        z.props.children,
        G,
        z.key
      ), ui(C, z), C) : E !== null && (E.elementType === st || typeof st == "object" && st !== null && st.$$typeof === L && Ji(st) === E.type) ? (E = s(E, z.props), ui(E, z), E.return = C, E) : (E = Fs(
        z.type,
        z.key,
        z.props,
        null,
        C.mode,
        G
      ), ui(E, z), E.return = C, E);
    }
    function M(C, E, z, G) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== z.containerInfo || E.stateNode.implementation !== z.implementation ? (E = Eu(z, C.mode, G), E.return = C, E) : (E = s(E, z.children || []), E.return = C, E);
    }
    function V(C, E, z, G, st) {
      return E === null || E.tag !== 7 ? (E = qi(
        z,
        C.mode,
        G,
        st
      ), E.return = C, E) : (E = s(E, z), E.return = C, E);
    }
    function Y(C, E, z) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = xu(
          "" + E,
          C.mode,
          z
        ), E.return = C, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case St:
            return z = Fs(
              E.type,
              E.key,
              E.props,
              null,
              C.mode,
              z
            ), ui(z, E), z.return = C, z;
          case gt:
            return E = Eu(
              E,
              C.mode,
              z
            ), E.return = C, E;
          case L:
            return E = Ji(E), Y(C, E, z);
        }
        if (At(E) || K(E))
          return E = qi(
            E,
            C.mode,
            z,
            null
          ), E.return = C, E;
        if (typeof E.then == "function")
          return Y(C, so(E), z);
        if (E.$$typeof === W)
          return Y(
            C,
            no(C, E),
            z
          );
        oo(C, E);
      }
      return null;
    }
    function A(C, E, z, G) {
      var st = E !== null ? E.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return st !== null ? null : p(C, E, "" + z, G);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case St:
            return z.key === st ? T(C, E, z, G) : null;
          case gt:
            return z.key === st ? M(C, E, z, G) : null;
          case L:
            return z = Ji(z), A(C, E, z, G);
        }
        if (At(z) || K(z))
          return st !== null ? null : V(C, E, z, G, null);
        if (typeof z.then == "function")
          return A(
            C,
            E,
            so(z),
            G
          );
        if (z.$$typeof === W)
          return A(
            C,
            E,
            no(C, z),
            G
          );
        oo(C, z);
      }
      return null;
    }
    function R(C, E, z, G, st) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return C = C.get(z) || null, p(E, C, "" + G, st);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case St:
            return C = C.get(
              G.key === null ? z : G.key
            ) || null, T(E, C, G, st);
          case gt:
            return C = C.get(
              G.key === null ? z : G.key
            ) || null, M(E, C, G, st);
          case L:
            return G = Ji(G), R(
              C,
              E,
              z,
              G,
              st
            );
        }
        if (At(G) || K(G))
          return C = C.get(z) || null, V(E, C, G, st, null);
        if (typeof G.then == "function")
          return R(
            C,
            E,
            z,
            so(G),
            st
          );
        if (G.$$typeof === W)
          return R(
            C,
            E,
            z,
            no(E, G),
            st
          );
        oo(E, G);
      }
      return null;
    }
    function it(C, E, z, G) {
      for (var st = null, Ot = null, mt = E, vt = E = 0, ie = null; mt !== null && vt < z.length; vt++) {
        mt.index > vt ? (ie = mt, mt = null) : ie = mt.sibling;
        var Nt = A(
          C,
          mt,
          z[vt],
          G
        );
        if (Nt === null) {
          mt === null && (mt = ie);
          break;
        }
        t && mt && Nt.alternate === null && e(C, mt), E = u(Nt, E, vt), Ot === null ? st = Nt : Ot.sibling = Nt, Ot = Nt, mt = ie;
      }
      if (vt === z.length)
        return n(C, mt), Ct && qn(C, vt), st;
      if (mt === null) {
        for (; vt < z.length; vt++)
          mt = Y(C, z[vt], G), mt !== null && (E = u(
            mt,
            E,
            vt
          ), Ot === null ? st = mt : Ot.sibling = mt, Ot = mt);
        return Ct && qn(C, vt), st;
      }
      for (mt = a(mt); vt < z.length; vt++)
        ie = R(
          mt,
          C,
          vt,
          z[vt],
          G
        ), ie !== null && (t && (Nt = ie.alternate, Nt !== null && mt.delete(Nt.key === null ? vt : Nt.key)), E = u(
          ie,
          E,
          vt
        ), Ot === null ? st = ie : Ot.sibling = ie, Ot = ie);
      return t && mt.forEach(function(Di) {
        return e(C, Di);
      }), Ct && qn(C, vt), st;
    }
    function ut(C, E, z, G) {
      if (z == null) throw Error(r(151));
      for (var st = null, Ot = null, mt = E, vt = E = 0, ie = null, Nt = z.next(); mt !== null && !Nt.done; vt++, Nt = z.next()) {
        mt.index > vt ? (ie = mt, mt = null) : ie = mt.sibling;
        var Di = A(C, mt, Nt.value, G);
        if (Di === null) {
          mt === null && (mt = ie);
          break;
        }
        t && mt && Di.alternate === null && e(C, mt), E = u(Di, E, vt), Ot === null ? st = Di : Ot.sibling = Di, Ot = Di, mt = ie;
      }
      if (Nt.done)
        return n(C, mt), Ct && qn(C, vt), st;
      if (mt === null) {
        for (; !Nt.done; vt++, Nt = z.next())
          Nt = Y(C, Nt.value, G), Nt !== null && (E = u(Nt, E, vt), Ot === null ? st = Nt : Ot.sibling = Nt, Ot = Nt);
        return Ct && qn(C, vt), st;
      }
      for (mt = a(mt); !Nt.done; vt++, Nt = z.next())
        Nt = R(mt, C, vt, Nt.value, G), Nt !== null && (t && (ie = Nt.alternate, ie !== null && mt.delete(
          ie.key === null ? vt : ie.key
        )), E = u(Nt, E, vt), Ot === null ? st = Nt : Ot.sibling = Nt, Ot = Nt);
      return t && mt.forEach(function(Zx) {
        return e(C, Zx);
      }), Ct && qn(C, vt), st;
    }
    function Et(C, E, z, G) {
      if (typeof z == "object" && z !== null && z.type === I && z.key === null && z.props.ref === void 0 && (z = z.props.children), typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case St:
            t: {
              for (var st = z.key; E !== null; ) {
                if (E.key === st) {
                  if (st = z.type, st === I) {
                    if (E.tag === 7) {
                      n(
                        C,
                        E.sibling
                      ), G = s(
                        E,
                        z.props.children
                      ), ui(G, z), G.return = C, C = G;
                      break t;
                    }
                  } else if (E.elementType === st || typeof st == "object" && st !== null && st.$$typeof === L && Ji(st) === E.type) {
                    n(
                      C,
                      E.sibling
                    ), G = s(E, z.props), ui(G, z), G.return = C, C = G;
                    break t;
                  }
                  n(C, E);
                  break;
                } else e(C, E);
                E = E.sibling;
              }
              z.type === I ? (G = qi(
                z.props.children,
                C.mode,
                G,
                z.key
              ), ui(G, z), G.return = C, C = G) : (G = Fs(
                z.type,
                z.key,
                z.props,
                null,
                C.mode,
                G
              ), ui(G, z), G.return = C, C = G);
            }
            return f(C);
          case gt:
            t: {
              for (st = z.key; E !== null; ) {
                if (E.key === st)
                  if (E.tag === 4 && E.stateNode.containerInfo === z.containerInfo && E.stateNode.implementation === z.implementation) {
                    n(
                      C,
                      E.sibling
                    ), G = s(E, z.children || []), G.return = C, C = G;
                    break t;
                  } else {
                    n(C, E);
                    break;
                  }
                else e(C, E);
                E = E.sibling;
              }
              G = Eu(z, C.mode, G), G.return = C, C = G;
            }
            return f(C);
          case L:
            return z = Ji(z), Et(
              C,
              E,
              z,
              G
            );
        }
        if (At(z))
          return it(
            C,
            E,
            z,
            G
          );
        if (K(z)) {
          if (st = K(z), typeof st != "function") throw Error(r(150));
          return z = st.call(z), ut(
            C,
            E,
            z,
            G
          );
        }
        if (typeof z.then == "function")
          return Et(
            C,
            E,
            so(z),
            G
          );
        if (z.$$typeof === W)
          return Et(
            C,
            E,
            no(C, z),
            G
          );
        oo(C, z);
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z, E !== null && E.tag === 6 ? (n(C, E.sibling), G = s(E, z), G.return = C, C = G) : (n(C, E), G = xu(z, C.mode, G), G.return = C, C = G), f(C)) : n(C, E);
    }
    return function(C, E, z, G) {
      try {
        Vl = 0;
        var st = Et(
          C,
          E,
          z,
          G
        );
        return Va = null, st;
      } catch (mt) {
        if (mt === _a || mt === ao) throw mt;
        var Ot = _e(29, mt, null, C.mode);
        return Ot.lanes = G, Ot.return = C, Ot;
      }
    };
  }
  var Ii = _m(!0), Vm = _m(!1), ci = !1;
  function _u(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Vu(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function fi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function di(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (jt & 2) !== 0) {
      var s = a.pending;
      return s === null ? e.next = e : (e.next = s.next, s.next = e), a.pending = e, e = Js(t), ym(t, null, n), e;
    }
    return Ps(t, a, e, n), Js(t);
  }
  function jl(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Th(t, n);
    }
  }
  function ju(t, e) {
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
  var Uu = !1;
  function Ul() {
    if (Uu) {
      var t = Na;
      if (t !== null) throw t;
    }
  }
  function Bl(t, e, n, a) {
    Uu = !1;
    var s = t.updateQueue;
    ci = !1;
    var u = s.firstBaseUpdate, f = s.lastBaseUpdate, p = s.shared.pending;
    if (p !== null) {
      s.shared.pending = null;
      var T = p, M = T.next;
      T.next = null, f === null ? u = M : f.next = M, f = T;
      var V = t.alternate;
      V !== null && (V = V.updateQueue, p = V.lastBaseUpdate, p !== f && (p === null ? V.firstBaseUpdate = M : p.next = M, V.lastBaseUpdate = T));
    }
    if (u !== null) {
      var Y = s.baseState;
      f = 0, V = M = T = null, p = u;
      do {
        var A = p.lane & -536870913, R = A !== p.lane;
        if (R ? (zt & A) === A : (a & A) === A) {
          A !== 0 && A === Ki && (Uu = !0), V !== null && (V = V.next = {
            lane: 0,
            tag: p.tag,
            payload: p.payload,
            callback: null,
            next: null
          });
          t: {
            var it = t, ut = p;
            A = e;
            var Et = n;
            switch (ut.tag) {
              case 1:
                if (it = ut.payload, typeof it == "function") {
                  Y = it.call(Et, Y, A);
                  break t;
                }
                Y = it;
                break t;
              case 3:
                it.flags = it.flags & -65537 | 128;
              case 0:
                if (it = ut.payload, A = typeof it == "function" ? it.call(Et, Y, A) : it, A == null) break t;
                Y = j({}, Y, A);
                break t;
              case 2:
                ci = !0;
            }
          }
          A = p.callback, A !== null && (t.flags |= 64, R && (t.flags |= 8192), R = s.callbacks, R === null ? s.callbacks = [A] : R.push(A));
        } else
          R = {
            lane: A,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null
          }, V === null ? (M = V = R, T = Y) : V = V.next = R, f |= A;
        if (p = p.next, p === null) {
          if (p = s.shared.pending, p === null)
            break;
          R = p, p = R.next, R.next = null, s.lastBaseUpdate = R, s.shared.pending = null;
        }
      } while (!0);
      V === null && (T = Y), s.baseState = T, s.firstBaseUpdate = M, s.lastBaseUpdate = V, u === null && (s.shared.lanes = 0), bi |= f, t.lanes = f, t.memoizedState = Y;
    }
  }
  function jm(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function Um(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        jm(n[t], e);
  }
  var hi = Wt(null), ro = Wt(0);
  function Bm(t, e) {
    t = Jn, _t(ro, t), _t(hi, e), Jn = t | e.baseLanes;
  }
  function Bu() {
    _t(ro, Jn), _t(hi, hi.current);
  }
  function Lu() {
    Jn = ro.current, $t(hi), $t(ro);
  }
  var ge = Wt(null), Ee = null;
  function mi(t) {
    var e = t.alternate;
    _t(ye, ye.current & 1), _t(ge, t), Ee === null && (e === null || hi.current !== null || e.memoizedState !== null) && (Ee = t);
  }
  function Hu(t) {
    _t(ye, ye.current), _t(ge, t), Ee === null && (Ee = t);
  }
  function Lm(t) {
    t.tag === 22 ? (_t(ye, ye.current), _t(ge, t), Ee === null && (Ee = t)) : pi();
  }
  function pi() {
    _t(ye, ye.current), _t(ge, ge.current);
  }
  function ke(t) {
    $t(ge), Ee === t && (Ee = null), $t(ye);
  }
  var ye = Wt(0);
  function Ll(t, e) {
    _t(ge, ge.current), _t(ye, e);
  }
  function Gu(t) {
    $t(ye), $t(ge), Ee === t && (Ee = null);
  }
  function uo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || uf(n) || cf(n)))
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
  var Zn = 0, xt = null, Yt = null, ee = null, co = !1, ja = !1, Wi = !1, fo = 0, Hl = 0, Ua = null, dT = 0;
  function Jt() {
    throw Error(r(321));
  }
  function Yu(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Xe(t[n], e[n])) return !1;
    return !0;
  }
  function qu(t, e, n, a, s, u) {
    return Zn = u, xt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, lt.H = t === null || t.memoizedState === null ? Tp : xp, Wi = !1, u = n(a, s), Wi = !1, ja && (u = Gm(
      e,
      n,
      a,
      s
    )), Hm(t), u;
  }
  function Hm(t) {
    lt.H = bo;
    var e = Yt !== null && Yt.next !== null;
    if (Zn = 0, ee = Yt = xt = null, co = !1, Hl = 0, Ua = null, e) throw Error(r(300));
    t === null || ne || (t = t.dependencies, t !== null && eo(t) && (ne = !0));
  }
  function Gm(t, e, n, a) {
    xt = t;
    var s = 0;
    do {
      if (ja && (Ua = null), Hl = 0, ja = !1, 25 <= s) throw Error(r(301));
      if (s += 1, ee = Yt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      lt.H = ST, u = e(n, a);
    } while (ja);
    return u;
  }
  function hT() {
    var t = lt.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? Gl(e) : e, t = t.useState()[0], (Yt !== null ? Yt.memoizedState : null) !== t && (xt.flags |= 1024), e;
  }
  function Xu() {
    var t = fo !== 0;
    return fo = 0, t;
  }
  function ku(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Zu(t) {
    if (co) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      co = !1;
    }
    Zn = 0, ee = Yt = xt = null, ja = !1, Hl = fo = 0, Ua = null;
  }
  function we() {
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
    return Hl += 1, Ua === null && (Ua = []), t = Om(Ua, t, e), e = xt, (ee === null ? e.memoizedState : ee.next) === null && (e = e.alternate, lt.H = e === null || e.memoizedState === null ? Tp : xp), t;
  }
  function mo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return Gl(t);
      if (t.$$typeof === w) return;
      if (t.$$typeof === W) return pe(t);
    }
    throw Error(r(438, String(t)));
  }
  function Qu(t) {
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
    return Ku(e, Yt, t);
  }
  function Ku(t, e, n) {
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
      var p = f = null, T = null, M = e, V = !1;
      do {
        var Y = M.lane & -536870913;
        if (Y !== M.lane ? (zt & Y) === Y : (Zn & Y) === Y) {
          var A = M.revertLane;
          if (A === 0)
            T !== null && (T = T.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }), Y === Ki && (V = !0);
          else if ((Zn & A) === A) {
            M = M.next, A === Ki && (V = !0);
            continue;
          } else
            Y = {
              lane: 0,
              revertLane: M.revertLane,
              gesture: null,
              action: M.action,
              hasEagerState: M.hasEagerState,
              eagerState: M.eagerState,
              next: null
            }, T === null ? (p = T = Y, f = u) : T = T.next = Y, xt.lanes |= A, bi |= A;
          Y = M.action, Wi && n(u, Y), u = M.hasEagerState ? M.eagerState : n(u, Y);
        } else
          A = {
            lane: Y,
            revertLane: M.revertLane,
            gesture: M.gesture,
            action: M.action,
            hasEagerState: M.hasEagerState,
            eagerState: M.eagerState,
            next: null
          }, T === null ? (p = T = A, f = u) : T = T.next = A, xt.lanes |= Y, bi |= Y;
        M = M.next;
      } while (M !== null && M !== e);
      if (T === null ? f = u : T.next = p, !Xe(u, t.memoizedState) && (ne = !0, V && (n = Na, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = f, t.baseQueue = T, a.lastRenderedState = u;
    }
    return s === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Pu(t) {
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
      Xe(u, e.memoizedState) || (ne = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ym(t, e, n) {
    var a = xt, s = It(), u = Ct;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var f = !Xe(
      (Yt || s).memoizedState,
      n
    );
    if (f && (s.memoizedState = n, ne = !0), s = s.queue, Iu(km.bind(null, a, s, t), [
      t
    ]), t = s.getSnapshot !== e || f || ee !== null && (ee.memoizedState.tag & 1) !== 0, Ba(
      t ? 9 : 8,
      { destroy: void 0 },
      Xm.bind(null, a, s, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Xt === null) throw Error(r(349));
      u || (Zn & 127) !== 0 || qm(a, e, n);
    }
    return n;
  }
  function qm(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = xt.updateQueue, e === null ? (e = ho(), xt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Xm(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Zm(e) && Qm(t);
  }
  function km(t, e, n) {
    return n(function() {
      Zm(e) && Qm(t);
    });
  }
  function Zm(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Xe(t, n);
    } catch {
      return !0;
    }
  }
  function Qm(t) {
    var e = Yi(t, 2);
    e !== null && Be(e, t, 2);
  }
  function Ju(t) {
    var e = we();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), Wi) {
        ni(!0);
        try {
          n();
        } finally {
          ni(!1);
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
  function Km(t, e, n, a) {
    return t.baseState = n, Ku(
      t,
      Yt,
      typeof a == "function" ? a : Qn
    );
  }
  function mT(t, e, n, a, s) {
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
      lt.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Pm(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Pm(t, e) {
    var n = e.action, a = e.payload, s = t.state;
    if (e.isTransition) {
      var u = lt.T, f = {};
      f.types = u !== null ? u.types : null, lt.T = f;
      try {
        var p = n(s, a), T = lt.S;
        T !== null && T(f, p), Jm(t, e, p);
      } catch (M) {
        Fu(t, e, M);
      } finally {
        u !== null && f.types !== null && (u.types = f.types), lt.T = u;
      }
    } else
      try {
        u = n(s, a), Jm(t, e, u);
      } catch (M) {
        Fu(t, e, M);
      }
  }
  function Jm(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Fm(t, e, a);
      },
      function(a) {
        return Fu(t, e, a);
      }
    ) : Fm(t, e, n);
  }
  function Fm(t, e, n) {
    e.status = "fulfilled", e.value = n, Im(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Pm(t, n)));
  }
  function Fu(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Im(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Im(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Wm(t, e) {
    return e;
  }
  function $m(t, e) {
    if (Ct) {
      var n = Xt.formState;
      if (n !== null) {
        t: {
          var a = xt;
          if (Ct) {
            if (kt) {
              e: {
                for (var s = kt, u = ln; s.nodeType !== 8; ) {
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
                kt = on(
                  s.nextSibling
                ), a = s.data === "F!";
                break t;
              }
            }
            oi(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = we(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wm,
      lastRenderedState: e
    }, n.queue = a, n = vp.bind(
      null,
      xt,
      a
    ), a.dispatch = n, a = Ju(!1), u = nc.bind(
      null,
      xt,
      !1,
      a.queue
    ), a = we(), s = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = s, n = mT.bind(
      null,
      xt,
      s,
      u,
      n
    ), s.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function tp(t) {
    var e = It();
    return ep(e, Yt, t);
  }
  function ep(t, e, n) {
    if (e = Ku(
      t,
      e,
      Wm
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
      pT.bind(null, s, n),
      null
    )), [a, u, t];
  }
  function pT(t, e) {
    t.action = e;
  }
  function np(t) {
    var e = It(), n = Yt;
    if (n !== null)
      return ep(e, n, t);
    It(), e = e.memoizedState, n = It();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ba(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = xt.updateQueue, e === null && (e = ho(), xt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function ip() {
    return It().memoizedState;
  }
  function go(t, e, n, a) {
    var s = we();
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
    Yt !== null && a !== null && Yu(a, Yt.memoizedState.deps) ? s.memoizedState = Ba(e, u, n, a) : (xt.flags |= t, s.memoizedState = Ba(
      1 | e,
      u,
      n,
      a
    ));
  }
  function ap(t, e) {
    go(8390656, 8, t, e);
  }
  function Iu(t, e) {
    yo(2048, 8, t, e);
  }
  function gT(t) {
    xt.flags |= 4;
    var e = xt.updateQueue;
    if (e === null)
      e = ho(), xt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function lp(t) {
    var e = It().memoizedState;
    return gT({ ref: e, nextImpl: t }), function() {
      if ((jt & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function sp(t, e) {
    return yo(4, 2, t, e);
  }
  function op(t, e) {
    return yo(4, 4, t, e);
  }
  function rp(t, e) {
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
  function up(t, e, n) {
    n = n != null ? n.concat([t]) : null, yo(4, 4, rp.bind(null, e, t), n);
  }
  function Wu() {
  }
  function cp(t, e) {
    var n = It();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && Yu(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function fp(t, e) {
    var n = It();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && Yu(e, a[1]))
      return a[0];
    if (a = t(), Wi) {
      ni(!0);
      try {
        t();
      } finally {
        ni(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function $u(t, e, n) {
    return n === void 0 || (Zn & 1073741824) !== 0 && (zt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Tg(), xt.lanes |= t, bi |= t, n);
  }
  function dp(t, e, n, a) {
    return Xe(n, e) ? n : hi.current !== null ? (t = $u(t, n, a), Xe(t, e) || (ne = !0), t) : (Zn & 106) === 0 || (Zn & 1073741824) !== 0 && (zt & 261930) === 0 ? (ne = !0, t.memoizedState = n) : (t = Tg(), xt.lanes |= t, bi |= t, e);
  }
  function hp(t, e, n, a, s) {
    var u = ht.p;
    ht.p = u !== 0 && 8 > u ? u : 8;
    var f = lt.T, p = {};
    p.types = f !== null ? f.types : null, lt.T = p, nc(t, !1, e, n);
    try {
      var T = s(), M = lt.S;
      if (M !== null && M(p, T), T !== null && typeof T == "object" && typeof T.then == "function") {
        var V = fT(
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
    } catch (Y) {
      Yl(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Y },
        Pe()
      );
    } finally {
      ht.p = u, f !== null && p.types !== null && (f.types = p.types), lt.T = f;
    }
  }
  function yT() {
  }
  function tc(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var s = mp(t).queue;
    hp(
      t,
      s,
      e,
      le,
      n === null ? yT : function() {
        return pp(t), n(a);
      }
    );
  }
  function mp(t) {
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
  function pp(t) {
    var e = mp(t);
    e.next === null && (e = t.alternate.memoizedState), Yl(
      t,
      e.next.queue,
      {},
      Pe()
    );
  }
  function ec() {
    return pe(nl);
  }
  function gp() {
    return It().memoizedState;
  }
  function yp() {
    return It().memoizedState;
  }
  function vT(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Pe();
          t = fi(n);
          var a = di(e, t, n);
          a !== null && (Be(a, e, n), jl(a, e, n)), e = { cache: zu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function bT(t, e, n) {
    var a = Pe();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(t) ? bp(e, n) : (n = Su(t, e, n, a), n !== null && (Be(n, t, a), Sp(n, e, a)));
  }
  function vp(t, e, n) {
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
    if (vo(t)) bp(e, s);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var f = e.lastRenderedState, p = u(f, n);
          if (s.hasEagerState = !0, s.eagerState = p, Xe(p, f))
            return Ps(t, e, s, 0), Xt === null && Ks(), !1;
        } catch {
        }
      if (n = Su(t, e, s, a), n !== null)
        return Be(n, t, a), Sp(n, e, a), !0;
    }
    return !1;
  }
  function nc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Qc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vo(t)) {
      if (e) throw Error(r(479));
    } else
      e = Su(
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
  function bp(t, e) {
    ja = co = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Sp(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Th(t, n);
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
  }, Tp = {
    readContext: pe,
    use: mo,
    useCallback: function(t, e) {
      return we().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: pe,
    useEffect: ap,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, go(
        4194308,
        4,
        rp.bind(null, e, t),
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
      var n = we();
      e = e === void 0 ? null : e;
      var a = t();
      if (Wi) {
        ni(!0);
        try {
          t();
        } finally {
          ni(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = we();
      if (n !== void 0) {
        var s = n(e);
        if (Wi) {
          ni(!0);
          try {
            n(e);
          } finally {
            ni(!1);
          }
        }
      } else s = e;
      return a.memoizedState = a.baseState = s, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: s
      }, a.queue = t, t = t.dispatch = bT.bind(
        null,
        xt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = we();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Ju(t);
      var e = t.queue, n = vp.bind(null, xt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Wu,
    useDeferredValue: function(t, e) {
      var n = we();
      return $u(n, t, e);
    },
    useTransition: function() {
      var t = Ju(!1);
      return t = hp.bind(
        null,
        xt,
        t.queue,
        !0,
        !1
      ), we().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = xt, s = we();
      if (Ct) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), Xt === null)
          throw Error(r(349));
        (zt & 127) !== 0 || qm(a, e, n);
      }
      s.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return s.queue = u, ap(km.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ba(
        9,
        { destroy: void 0 },
        Xm.bind(
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
      var t = we(), e = Xt.identifierPrefix;
      if (Ct) {
        var n = En, a = xn;
        n = (a & ~(1 << 32 - Ye(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = fo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = dT++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: ec,
    useFormState: $m,
    useActionState: $m,
    useOptimistic: function(t) {
      var e = we();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = nc.bind(
        null,
        xt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Qu,
    useCacheRefresh: function() {
      return we().memoizedState = vT.bind(
        null,
        xt
      );
    },
    useEffectEvent: function(t) {
      var e = we(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((jt & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, xp = {
    readContext: pe,
    use: mo,
    useCallback: cp,
    useContext: pe,
    useEffect: Iu,
    useImperativeHandle: up,
    useInsertionEffect: sp,
    useLayoutEffect: op,
    useMemo: fp,
    useReducer: po,
    useRef: ip,
    useState: function() {
      return po(Qn);
    },
    useDebugValue: Wu,
    useDeferredValue: function(t, e) {
      var n = It();
      return dp(
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
    useSyncExternalStore: Ym,
    useId: gp,
    useHostTransitionStatus: ec,
    useFormState: tp,
    useActionState: tp,
    useOptimistic: function(t, e) {
      var n = It();
      return Km(n, Yt, t, e);
    },
    useMemoCache: Qu,
    useCacheRefresh: yp,
    useEffectEvent: lp
  }, ST = {
    readContext: pe,
    use: mo,
    useCallback: cp,
    useContext: pe,
    useEffect: Iu,
    useImperativeHandle: up,
    useInsertionEffect: sp,
    useLayoutEffect: op,
    useMemo: fp,
    useReducer: Pu,
    useRef: ip,
    useState: function() {
      return Pu(Qn);
    },
    useDebugValue: Wu,
    useDeferredValue: function(t, e) {
      var n = It();
      return Yt === null ? $u(n, t, e) : dp(
        n,
        Yt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Pu(Qn)[0], e = It().memoizedState;
      return [
        typeof t == "boolean" ? t : Gl(t),
        e
      ];
    },
    useSyncExternalStore: Ym,
    useId: gp,
    useHostTransitionStatus: ec,
    useFormState: np,
    useActionState: np,
    useOptimistic: function(t, e) {
      var n = It();
      return Yt !== null ? Km(n, Yt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Qu,
    useCacheRefresh: yp,
    useEffectEvent: lp
  };
  function ic(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : j({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var ac = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Pe(), s = fi(a);
      s.payload = e, n != null && (s.callback = n), e = di(t, s, a), e !== null && (Be(e, t, a), jl(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Pe(), s = fi(a);
      s.tag = 1, s.payload = e, n != null && (s.callback = n), e = di(t, s, a), e !== null && (Be(e, t, a), jl(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Pe(), a = fi(n);
      a.tag = 2, e != null && (a.callback = e), e = di(t, a, n), e !== null && (Be(e, t, n), jl(e, t, n));
    }
  };
  function Ep(t, e, n, a, s, u, f) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, f) : e.prototype && e.prototype.isPureReactComponent ? !wl(n, a) || !wl(s, u) : !0;
  }
  function Ap(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && ac.enqueueReplaceState(e, e.state, null);
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
  function Cp(t) {
    Qs(t);
  }
  function Mp(t) {
    console.error(t);
  }
  function wp(t) {
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
  function Dp(t, e, n) {
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
  function lc(t, e, n) {
    return n = fi(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      So(t, e);
    }, n;
  }
  function zp(t) {
    return t = fi(t), t.tag = 3, t;
  }
  function Op(t, e, n, a) {
    var s = n.type.getDerivedStateFromError;
    if (typeof s == "function") {
      var u = a.value;
      t.payload = function() {
        return s(u);
      }, t.callback = function() {
        Dp(e, n, a);
      };
    }
    var f = n.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (t.callback = function() {
      Dp(e, n, a), typeof s != "function" && (Si === null ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
      var p = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: p !== null ? p : ""
      });
    });
  }
  function TT(t, e, n, a, s) {
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
            return Ee === null ? Yo() : n.alternate === null && Ft === 0 && (Ft = 3), n.flags &= -257, n.flags |= 65536, n.lanes = s, a === lo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), Xc(t, a, s)), !1;
          case 22:
            return n.flags |= 65536, a === lo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Xc(t, a, s)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return Xc(t, a, s), Yo(), !1;
    }
    if (Ct)
      return e = ge.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = s, a !== Cu && (t = Error(r(422), { cause: a }), Ol(en(t, n)))) : (a !== Cu && (e = Error(r(423), {
        cause: a
      }), Ol(
        en(e, n)
      )), t = t.current.alternate, t.flags |= 65536, s &= -s, t.lanes |= s, a = en(a, n), s = lc(
        t.stateNode,
        a,
        s
      ), ju(t, s), Ft !== 4 && (Ft = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = en(u, n), Jl === null ? Jl = [u] : Jl.push(u), Ft !== 4 && (Ft = 2), e === null) return !0;
    a = en(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = s & -s, n.lanes |= t, t = lc(n.stateNode, a, t), ju(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Si === null || !Si.has(u))))
            return n.flags |= 65536, s &= -s, n.lanes |= s, s = zp(s), Op(
              s,
              t,
              n,
              a
            ), ju(n, s), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var sc = Error(r(461)), ne = !1;
  function se(t, e, n, a) {
    e.child = t === null ? Vm(e, null, n, a) : Ii(
      e,
      t.child,
      n,
      a
    );
  }
  function Rp(t, e, n, a, s) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var f = {};
      for (var p in a)
        p !== "ref" && (f[p] = a[p]);
    } else f = a;
    return Qi(e), a = qu(
      t,
      e,
      n,
      f,
      u,
      s
    ), p = Xu(), t !== null && !ne ? (ku(t, e, s), Kn(t, e, s)) : (Ct && p && Ws(e), e.flags |= 1, se(t, e, a, s), e.child);
  }
  function Np(t, e, n, a, s) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Tu(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, _p(
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
    if (u = t.child, !mc(t, s)) {
      var f = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : wl, n(f, a) && t.ref === e.ref)
        return Kn(t, e, s);
    }
    return e.flags |= 1, t = Yn(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function _p(t, e, n, a, s) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (wl(u, a) && t.ref === e.ref)
        if (ne = !1, e.pendingProps = a = u, mc(t, s))
          (t.flags & 131072) !== 0 && (ne = !0);
        else
          return e.lanes = t.lanes, Kn(t, e, s);
    }
    return oc(
      t,
      e,
      n,
      a,
      s
    );
  }
  function Vp(t, e, n, a) {
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
        return jp(
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
        ), u !== null ? Bm(e, u) : Bu(), Lm(e);
      else
        return a = e.lanes = 536870912, jp(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (io(e, u.cachePool), Bm(e, u), pi(), e.memoizedState = null) : (t !== null && io(e, null), Bu(), pi());
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
  function jp(t, e, n, a, s) {
    var u = Ru();
    return u = u === null ? null : { parent: te._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && io(e, null), Bu(), Lm(e), t !== null && Zi(t, e, a, !0), e.childLanes = s, null;
  }
  function To(t, e) {
    return e = xo(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Up(t, e, n) {
    return Ii(e, t.child, null, n), t = To(e, e.pendingProps), t.flags |= 2, ke(e), e.memoizedState = null, t;
  }
  function xT(t, e, n) {
    var a = e.pendingProps, s = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Ct) {
        if (a.mode === "hidden")
          return t = To(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, ql(null, t);
        if (Hu(e), (t = kt) ? (t = ry(
          t,
          ln
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: li !== null ? { id: xn, overflow: En } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = bm(t), n.return = e, e.child = n, fe = e, kt = null)) : t = null, t === null) throw oi(e);
        return e.lanes = 536870912, null;
      }
      return To(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var f = u.dehydrated;
      if (Hu(e), s)
        if (e.flags & 256)
          e.flags &= -257, e = Up(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (ne || Zi(t, e, n, !1), s = (n & t.childLanes) !== 0, ne || s) {
        if (hi.current === null) {
          if (a = Xt, a !== null && (f = xh(a, n), f !== 0 && f !== u.retryLane))
            throw u.retryLane = f, Yi(t, f), Be(a, t, f), sc;
          Yo();
        }
        e = Up(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, kt = on(f.nextSibling), fe = e, Ct = !0, si = null, ln = !1, t !== null && xm(e, t), e = To(e, a), e.flags |= 134221824;
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
  function oc(t, e, n, a, s) {
    return Qi(e), n = qu(
      t,
      e,
      n,
      a,
      void 0,
      s
    ), a = Xu(), t !== null && !ne ? (ku(t, e, s), Kn(t, e, s)) : (Ct && a && Ws(e), e.flags |= 1, se(t, e, n, s), e.child);
  }
  function Bp(t, e, n, a, s, u) {
    return Qi(e), e.updateQueue = null, n = Gm(
      e,
      a,
      n,
      s
    ), Hm(t), a = Xu(), t !== null && !ne ? (ku(t, e, u), Kn(t, e, u)) : (Ct && a && Ws(e), e.flags |= 1, se(t, e, n, u), e.child);
  }
  function Lp(t, e, n, a, s) {
    if (Qi(e), e.stateNode === null) {
      var u = Da, f = n.contextType;
      typeof f == "object" && f !== null && (u = pe(f)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = ac, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, _u(e), f = n.contextType, u.context = typeof f == "object" && f !== null ? pe(f) : Da, u.state = e.memoizedState, f = n.getDerivedStateFromProps, typeof f == "function" && (ic(
        e,
        n,
        f,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (f = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), f !== u.state && ac.enqueueReplaceState(u, u.state, null), Bl(e, a, u, s), Ul(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var p = e.memoizedProps, T = $i(n, p);
      u.props = T;
      var M = u.context, V = n.contextType;
      f = Da, typeof V == "object" && V !== null && (f = pe(V));
      var Y = n.getDerivedStateFromProps;
      V = typeof Y == "function" || typeof u.getSnapshotBeforeUpdate == "function", p = e.pendingProps !== p, V || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (p || M !== f) && Ap(
        e,
        u,
        a,
        f
      ), ci = !1;
      var A = e.memoizedState;
      u.state = A, Bl(e, a, u, s), Ul(), M = e.memoizedState, p || A !== M || ci ? (typeof Y == "function" && (ic(
        e,
        n,
        Y,
        a
      ), M = e.memoizedState), (T = ci || Ep(
        e,
        n,
        T,
        a,
        A,
        M,
        f
      )) ? (V || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = M), u.props = a, u.state = M, u.context = f, a = T) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, Vu(t, e), f = e.memoizedProps, V = $i(n, f), u.props = V, Y = e.pendingProps, A = u.context, M = n.contextType, T = Da, typeof M == "object" && M !== null && (T = pe(M)), p = n.getDerivedStateFromProps, (M = typeof p == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f !== Y || A !== T) && Ap(
        e,
        u,
        a,
        T
      ), ci = !1, A = e.memoizedState, u.state = A, Bl(e, a, u, s), Ul();
      var R = e.memoizedState;
      f !== Y || A !== R || ci || t !== null && t.dependencies !== null && eo(t.dependencies) ? (typeof p == "function" && (ic(
        e,
        n,
        p,
        a
      ), R = e.memoizedState), (V = ci || Ep(
        e,
        n,
        V,
        a,
        A,
        R,
        T
      ) || t !== null && t.dependencies !== null && eo(t.dependencies)) ? (M || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, R, T), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        R,
        T
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = R), u.props = a, u.state = R, u.context = T, a = V) : (typeof u.componentDidUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || f === t.memoizedProps && A === t.memoizedState || (e.flags |= 1024), a = !1);
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
  function Hp(t, e, n, a) {
    return Xi(), e.flags |= 256, se(t, e, n, a), e.child;
  }
  var rc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uc(t) {
    return { baseLanes: t, cachePool: Dm() };
  }
  function cc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Ke), t;
  }
  function Gp(t, e, n) {
    var a = e.pendingProps, s = !1, u = (e.flags & 128) !== 0, f;
    if ((f = u) || (f = t !== null && t.memoizedState === null ? !1 : (ye.current & 2) !== 0), f && (s = !0, e.flags &= -129), f = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Ct) {
        if (s ? mi(e) : pi(), (t = kt) ? (t = ry(
          t,
          ln
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: li !== null ? { id: xn, overflow: En } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = bm(t), n.return = e, e.child = n, fe = e, kt = null)) : t = null, t === null) throw oi(e);
        return cf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, s ? (pi(), s = e.mode, u = xo(
        { mode: "hidden", children: u },
        s
      ), a = qi(
        a,
        s,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = uc(n), a.childLanes = cc(
        t,
        f,
        n
      ), e.memoizedState = rc, ql(null, a)) : (mi(e), fc(e, u));
    }
    var p = t.memoizedState;
    if (p !== null) {
      var T = p.dehydrated;
      if (T !== null)
        return ET(
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
    return s ? (pi(), s = a.fallback, u = e.mode, p = t.child, T = p.sibling, a = Yn(p, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = p.subtreeFlags & 1206910976, T !== null ? s = Yn(T, s) : (s = qi(
      s,
      u,
      n,
      null
    ), s.flags |= 2), s.return = e, a.return = e, a.sibling = s, e.child = a, ql(null, a), a = e.child, s = t.child.memoizedState, s === null ? s = uc(n) : (u = s.cachePool, u !== null ? (p = te._currentValue, u = u.parent !== p ? { parent: p, pool: p } : u) : u = Dm(), s = {
      baseLanes: s.baseLanes | n,
      cachePool: u
    }), a.memoizedState = s, a.childLanes = cc(
      t,
      f,
      n
    ), e.memoizedState = rc, ql(t.child, a)) : (mi(e), n = t.child, t = n.sibling, n = Yn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (f = e.deletions, f === null ? (e.deletions = [t], e.flags |= 16) : f.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function fc(t, e) {
    return e = xo(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function xo(t, e) {
    return t = _e(22, t, null, e), t.lanes = 0, t;
  }
  function Eo(t, e, n) {
    return Ii(e, t.child, null, n), t = fc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function ET(t, e, n, a, s, u, f, p) {
    if (n)
      return e.flags & 256 ? (mi(e), e.flags &= -257, Eo(
        t,
        e,
        p
      )) : e.memoizedState !== null ? (pi(), e.child = t.child, e.flags |= 128, null) : (pi(), u = s.fallback, f = e.mode, s = xo(
        { mode: "visible", children: s.children },
        f
      ), u = qi(
        u,
        f,
        p,
        null
      ), u.flags |= 2, s.return = e, u.return = e, s.sibling = u, e.child = s, Ii(e, t.child, null, p), s = e.child, s.memoizedState = uc(p), s.childLanes = cc(
        t,
        a,
        p
      ), e.memoizedState = rc, ql(null, s));
    if (mi(e), cf(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var T = a.dgst;
      return a = T, a !== "" && (s = Error(r(419)), s.stack = "", s.digest = a, Ol({ value: s, source: null, stack: null })), Eo(
        t,
        e,
        p
      );
    }
    if (ne || Zi(t, e, p, !1), a = (p & t.childLanes) !== 0, ne || a) {
      if (hi.current !== null)
        return Eo(
          t,
          e,
          p
        );
      if (a = Xt, a !== null && (s = xh(
        a,
        p
      ), s !== 0 && s !== f.retryLane))
        throw f.retryLane = s, Yi(t, s), Be(a, t, s), sc;
      return uf(u) || Yo(), Eo(
        t,
        e,
        p
      );
    }
    return uf(u) ? (e.flags |= 192, e.child = t.child, null) : (t = f.treeContext, kt = on(u.nextSibling), fe = e, Ct = !0, si = null, ln = !1, t !== null && xm(e, t), e = fc(
      e,
      s.children
    ), e.flags |= 134221824, e);
  }
  function Yp(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), to(t.return, e, n);
  }
  function qp(t) {
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
  function dc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function hc(t, e, n) {
    var a = e.pendingProps, s = a.revealOrder, u = a.tail;
    a = a.children;
    var f = ye.current;
    if (e.flags & 128)
      return Ll(e, f), null;
    var p = (f & 2) !== 0;
    if (p ? (f = f & 1 | 2, e.flags |= 128) : f &= 1, Ll(e, f), s === "backwards" && t !== null ? (dc(t), se(t, e, a, n), dc(t)) : se(t, e, a, n), a = Ct ? zl : 0, !p && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Yp(t, n, e);
        else if (t.tag === 19)
          Yp(t, n, e);
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
        n = qp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null, dc(e)), Ao(
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
        n = qp(e.child), n === null ? (s = e.child, e.child = null) : (s = n.sibling, n.sibling = null), Ao(
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
  function Xp(t, e, n) {
    var a = e.pendingProps;
    return ri(e, e.type, a.value), se(t, e, a.children, n), e.child;
  }
  function Kn(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), bi |= e.lanes, (n & e.childLanes) === 0)
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
  function mc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && eo(t)));
  }
  function AT(t, e, n) {
    switch (e.tag) {
      case 3:
        Ds(e, e.stateNode.containerInfo), ri(e, te, t.memoizedState.cache), Xi();
        break;
      case 27:
      case 5:
        Yr(e);
        break;
      case 4:
        Ds(e, e.stateNode.containerInfo);
        break;
      case 10:
        ri(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, Hu(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return mi(e), e.flags |= 128, null;
          a = Zi(
            t,
            e,
            n,
            !1
          );
          var s = e.child.childLanes;
          return a || (n & s) !== 0 ? Gp(t, e, n) : (mi(e), t = Kn(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        mi(e);
        break;
      case 19:
        if (e.flags & 128)
          return hc(
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
            return hc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (s = e.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Ll(e, ye.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, Vp(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        ri(e, te, t.memoizedState.cache);
    }
    return Kn(t, e, n);
  }
  function kp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        ne = !0;
      else {
        if (!mc(t, n) && (e.flags & 128) === 0)
          return ne = !1, AT(
            t,
            e,
            n
          );
        ne = (t.flags & 131072) !== 0;
      }
    else
      ne = !1, Ct && (e.flags & 1048576) !== 0 && Tm(e, zl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = Ji(e.elementType), e.type = t, typeof t == "function")
            Tu(t) ? (a = $i(t, a), e.tag = 1, e = Lp(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = oc(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var s = t.$$typeof;
              if (s === H) {
                e.tag = 11, e = Rp(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === tt) {
                e.tag = 14, e = Np(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (s === W) {
                e.tag = 10, e.type = t, e = Xp(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = ft(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return oc(
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
        ), Lp(
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
          s = u.element, Vu(t, e), Bl(e, a, null, n);
          var f = e.memoizedState;
          if (a = f.cache, ri(e, te, a), a !== u.cache && Du(
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
              e = Hp(
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
              ), Ol(s), e = Hp(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, kt = on(t.firstChild), fe = e, Ct = !0, si = null, ln = !0, n = Vm(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Xi(), a === s) {
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
        return La(t, e), t === null ? (n = py(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Ct || (e.stateNode = Pg(
          e.type,
          e.pendingProps,
          Ce.current,
          e
        )) : e.memoizedState = py(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Yr(e), t === null && Ct && (a = e.stateNode = fy(
          e.type,
          e.pendingProps,
          Ce.current
        ), fe = e, ln = !0, s = kt, Ei(e.type) ? (ff = s, kt = on(a.firstChild)) : kt = s), se(
          t,
          e,
          e.pendingProps.children,
          n
        ), La(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Ct && ((s = a = kt) && (a = vx(
          a,
          e.type,
          e.pendingProps,
          ln
        ), a !== null ? (e.stateNode = a, fe = e, kt = on(a.firstChild), ln = !1, s = !0) : s = !1), s || oi(e)), Yr(e), s = e.type, u = e.pendingProps, f = t !== null ? t.memoizedProps : null, a = u.children, ef(s, u) ? a = null : f !== null && ef(s, f) && (e.flags |= 32), e.memoizedState !== null && (s = qu(
          t,
          e,
          hT,
          null,
          null,
          n
        ), nl._currentValue = s), La(t, e), se(t, e, a, n), e.child;
      case 6:
        return t === null && Ct && ((t = n = kt) && (n = bx(
          n,
          e.pendingProps,
          ln
        ), n !== null ? (e.stateNode = n, fe = e, kt = null, t = !0) : t = !1), t || oi(e)), null;
      case 13:
        return Gp(t, e, n);
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
        return Rp(
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
        return Xp(t, e, n);
      case 9:
        return s = e.type._context, a = e.pendingProps.children, Qi(e), s = pe(s), a = a(s), e.flags |= 1, se(t, e, a, n), e.child;
      case 14:
        return Np(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return _p(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return hc(t, e, n);
      case 31:
        return xT(t, e, n);
      case 22:
        return Vp(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return Qi(e), a = pe(te), t === null ? (s = Ru(), s === null && (s = Xt, u = zu(), s.pooledCache = u, u.refCount++, u !== null && (s.pooledCacheLanes |= n), s = u), e.memoizedState = { parent: a, cache: s }, _u(e), ri(e, te, s)) : ((t.lanes & n) !== 0 && (Vu(t, e), Bl(e, null, null, n), Ul()), s = t.memoizedState, u = e.memoizedState, s.parent !== a ? (s = { parent: a, cache: a }, e.memoizedState = s, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = s), ri(e, te, a)) : (a = u.cache, ri(e, te, a), a !== s.cache && Du(
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
  function pc(t, e, n, a, s) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? by(e, a) : by(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (s & 335544128) === s)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (Cg()) t.flags |= 8192;
        else
          throw Fi = lo, Nu;
    } else t.flags &= -16777217;
  }
  function Zp(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Sy(e))
      if (Cg()) t.flags |= 8192;
      else
        throw Fi = lo, Nu;
  }
  function Co(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? bh() : 536870912, t.lanes |= e, Xa |= e);
  }
  function Xl(t, e) {
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
  function CT(t, e, n) {
    var a = e.pendingProps;
    switch (Au(e), e.tag) {
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
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), kn(te), pa(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Ra(e) ? Pn(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Mu())), Zt(e), null;
      case 26:
        var s = e.type, u = e.memoizedState;
        return t === null ? (Pn(e), u !== null ? (Zt(e), Zp(e, u)) : (Zt(e), pc(
          e,
          s,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (Pn(e), Zt(e), Zp(e, u)) : (Zt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && Pn(e), Zt(e), pc(
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
          t = Le.current, Ra(e) ? Em(e) : (t = fy(s, a, n), e.stateNode = t, Pn(e));
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
            Em(e);
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
        return Zt(e), e.subtreeFlags &= -33554433, pc(
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
            t[me] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || kg(t.nodeValue, n)), t || oi(e, !0);
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
              Xi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Zt(e), t = !1;
          } else
            n = Mu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (ke(e), e) : (ke(e), null);
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
              Xi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Zt(e), s = !1;
          } else
            s = Mu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = s), s = !0;
          if (!s)
            return e.flags & 256 ? (ke(e), e) : (ke(e), null);
        }
        return ke(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, s = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (s = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== s && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Co(e, e.updateQueue), Zt(e), null);
      case 4:
        return pa(), t === null && Fc(e.stateNode.containerInfo), e.flags |= 67108864, Zt(e), null;
      case 10:
        return kn(e.type), Zt(e), null;
      case 19:
        if (Gu(e), a = e.memoizedState, a === null) return Zt(e), null;
        if (s = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (s) Xl(a, !1);
          else {
            if (Ft !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = uo(t), u !== null) {
                  for (e.flags |= 128, Xl(a, !1), t = u.updateQueue, e.updateQueue = t, Co(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    vm(n, t), n = n.sibling;
                  return Ll(
                    e,
                    ye.current & 1 | 2
                  ), Ct && qn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && He() > Bo && (e.flags |= 128, s = !0, Xl(a, !1), e.lanes = 4194304);
          }
        else {
          if (!s)
            if (t = uo(u), t !== null) {
              if (e.flags |= 128, s = !0, t = t.updateQueue, e.updateQueue = t, Co(e, t), Xl(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Ct)
                return Zt(e), null;
            } else
              2 * He() - a.renderingStartTime > Bo && n !== 536870912 && (e.flags |= 128, s = !0, Xl(a, !1), e.lanes = 4194304);
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
        return ke(e), Lu(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Zt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Zt(e), n = e.updateQueue, n !== null && Co(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && $t(Pi), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), kn(te), Zt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Zt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function MT(t, e) {
    switch (Au(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return kn(te), pa(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return zs(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (ke(e), e.alternate === null)
            throw Error(r(340));
          Xi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (ke(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Xi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return Gu(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return pa(), null;
      case 10:
        return kn(e.type), null;
      case 22:
      case 23:
        return ke(e), Lu(), t !== null && $t(Pi), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return kn(te), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qp(t, e) {
    switch (Au(e), e.tag) {
      case 3:
        kn(te), pa();
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
        e.memoizedState !== null && ke(e);
        break;
      case 13:
        ke(e);
        break;
      case 19:
        Gu(e);
        break;
      case 10:
        kn(e.type);
        break;
      case 22:
      case 23:
        ke(e), Lu(), t !== null && $t(Pi);
        break;
      case 24:
        kn(te);
    }
  }
  function kl(t, e) {
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
  function gi(t, e, n) {
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
              var T = n, M = p;
              try {
                M();
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
  function Kp(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Um(e, n);
      } catch (a) {
        Lt(t, t.return, a);
      }
    }
  }
  function Pp(t, e, n) {
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
            (s.ref === null || s.ref.name !== u) && (s.ref = ey(u)), a = s.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var f = new Je(t);
              y(
                t.child,
                !1,
                gx,
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
  function Mo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        oy(
          t.stateNode,
          e[n]
        );
  }
  function Jp(t) {
    for (var e = t.return; e !== null && (yc(e) && oy(t.stateNode, e.stateNode), !gc(e)); )
      e = e.return;
  }
  function Zl(t) {
    for (var e = t.return; e !== null && (yc(e) && yx(t.stateNode, e.stateNode), !gc(e)); )
      e = e.return;
  }
  function gc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function yc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function vc(t) {
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
  function bc(t, e, n) {
    try {
      var a = t.stateNode;
      WT(a, t.type, n, e), a[Ne] = e;
    } catch (s) {
      Lt(t, t.return, s);
    }
  }
  function Fp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Ei(t.type) || t.tag === 4;
  }
  function Sc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Fp(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Ei(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Tc(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(s, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(s), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Tn)), Mo(t, a), Vt = !0;
    else if (s !== 4 && (s === 27 && (Mo(t, a), a = null, Ei(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (Tc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Tc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function wo(t, e, n, a) {
    var s = t.tag;
    if (s === 5 || s === 6)
      s = t.stateNode, e ? n.insertBefore(s, e) : n.appendChild(s), Mo(t, a), Vt = !0;
    else if (s !== 4 && (s === 27 && (Mo(t, a), a = null, Ei(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (wo(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        wo(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Ip(t) {
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
  function Wp(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Do = !0);
  }
  var Cn = null;
  function $p() {
    var t = Cn;
    return Cn = null, t;
  }
  var Ve = 0;
  function Ha(t, e, n, a, s) {
    return Ve = 0, tg(
      t.child,
      e,
      n,
      a,
      s
    );
  }
  function tg(t, e, n, a, s) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (a !== null) {
          var p = lf(f);
          a.push(p), p.view && (u = !0);
        } else
          u || lf(f).view && (u = !0);
        Do = !0, $g(
          f,
          Ve === 0 ? e : e + "_" + Ve,
          n
        ), Ve++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s || tg(
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
  function Mn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? ty(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Mn(
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
          ) || Mn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function xc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, s = Hn(a, n), u = Gn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? Ha(t, s, u, null, !1) ? (zo(t), n.paired || e || Ka(t, a.onEnter)) : Mn(t.child, !1) : zo(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        xc(t, e), t = t.sibling;
    else zo(t);
  }
  function Ec(t) {
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
                  ) ? (u = t.stateNode, s.paired = u, u.paired = s, Ka(t, n.onShare)) : Mn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            Ec(t);
          }
          t = t.sibling;
        }
    }
  }
  function Ac(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Hn(e, t.stateNode), a = Ze !== null ? Ze.get(n) : void 0, s = Gn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      s !== "none" && (Ha(t, n, s, null, !1) ? a !== void 0 ? (s = t.stateNode, a.paired = s, s.paired = a, Ze.delete(n), Ka(t, e.onShare)) : Ka(t, e.onExit) : Mn(t.child, !1)), Ze !== null && Ec(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ac(t), t = t.sibling;
    else
      Ze !== null && Ec(t);
  }
  function eg(t) {
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
        (t.subtreeFlags & 33554432) !== 0 && eg(t);
      t = t.sibling;
    }
  }
  function Cc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Mn(t.child, !1));
          }
          Cc(t);
        }
        t = t.sibling;
      }
  }
  function Oo(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Mn(t.child, !1), Cc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Oo(t), t = t.sibling;
    else Cc(t);
  }
  function ng(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Mn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && ng(t), t = t.sibling;
  }
  function Mc(t, e, n, a, s, u, f) {
    for (var p = !1; e !== null; ) {
      if (e.tag === 5) {
        var T = e.stateNode;
        if (u !== null && Ve < u.length) {
          var M = u[Ve], V = lf(T);
          (M.view || V.view) && (p = !0);
          var Y;
          if (Y = (t.flags & 4) === 0)
            if (V.clip) Y = !0;
            else {
              Y = M.rect;
              var A = V.rect;
              Y = Y.y !== A.y || Y.x !== A.x || Y.height !== A.height || Y.width !== A.width;
            }
          Y && (t.flags |= 4), V.abs ? V = !M.abs : (M = M.rect, V = V.rect, V = M.height !== V.height || M.width !== V.width), V && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && $g(
          T,
          Ve === 0 ? n : n + "_" + Ve,
          s
        ), p && (t.flags & 4) !== 0 || (Cn === null && (Cn = []), Cn.push(
          T,
          Ve === 0 ? a : a + "_" + Ve,
          e.memoizedProps
        )), Ve++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && f ? t.flags |= e.flags & 32 : Mc(
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
  function ig(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, s = Hn(n, a), u = Gn(n.default, n.update), f;
        f = t.memoizedState, t.memoizedState = null, a = t;
        var p = t.child;
        Ve = 0, s = Mc(
          a,
          p,
          s,
          s,
          u,
          f,
          !1
        ), (t.flags & 4) !== 0 && s && Ka(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && ig(t);
      t = t.sibling;
    }
  }
  var de = !1, Ut = !1, wn = !1, wc = !1, ag = typeof WeakSet == "function" ? WeakSet : Set, he = null, Dn = !1, Ql = !1, Ro = !1, Dc = !1;
  function wT(t, e, n) {
    if (t = t.containerInfo, $c = il, t = rm(t), mu(t)) {
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
            var p = 0, T = -1, M = -1, V = 0, Y = 0, A = t, R = null;
            e: for (; ; ) {
              for (var it; A !== a || u !== 0 && A.nodeType !== 3 || (T = p + u), A !== f || s !== 0 && A.nodeType !== 3 || (M = p + s), A.nodeType === 3 && (p += A.nodeValue.length), (it = A.firstChild) !== null; )
                R = A, A = it;
              for (; ; ) {
                if (A === t) break e;
                if (R === a && ++V === u && (T = p), R === f && ++Y === s && (M = p), (it = A.nextSibling) !== null) break;
                A = R, R = A.parentNode;
              }
              A = it;
            }
            a = T === -1 || M === -1 ? null : { start: T, end: M };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (tf = { focusedElem: t, selectionRange: a }, il = !1, n = (n & 335544064) === n, he = e, e = n ? 9270 : 1024; he !== null; ) {
      if (t = he, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && Ac(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && Wp(t), No(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Ac(a), No(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && Wp(t), No(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, he = a) : (n && eg(t), No(n));
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
              rf(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  rf(a);
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
  function lg(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        zn(t, n), a & 4 && kl(5, n);
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
        a & 64 && Kp(n), a & 512 && An(n, n.return);
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
            Um(t, e);
          } catch (f) {
            Lt(n, n.return, f);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ip(n);
      case 26:
      case 5:
        zn(t, n), e === null && a & 4 && vc(n), a & 512 && An(n, n.return);
        break;
      case 12:
        zn(t, n);
        break;
      case 31:
        zn(t, n), a & 4 && ug(t, n);
        break;
      case 13:
        zn(t, n), a & 4 && cg(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = HT.bind(
          null,
          n
        ), Sx(t, n))));
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
  function zc(t, e) {
    for (t = t.child; t !== null; )
      sg(t, e), t = t.sibling;
  }
  function sg(t, e) {
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
        Oc(t, e);
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
          e ? Wg(p, !0) : Wg(t.stateNode, !1);
        } catch (T) {
          Lt(t, t.return, T);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && zc(t, e);
        break;
      default:
        zc(t, e);
    }
  }
  function Oc(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              sg(n, a);
              break t;
            case 22:
              n.memoizedState === null && Oc(n, a);
              break t;
            default:
              Oc(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function og(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, og(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && Us(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Qt = null, je = !1;
  function fn(t, e, n) {
    for (n = n.child; n !== null; )
      rg(t, e, n), n = n.sibling;
  }
  function rg(t, e, n) {
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
        Ei(n.type) && (Qt = n.stateNode, je = !1), fn(
          t,
          e,
          n
        ), dy(
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
        Qt !== null && (je ? (t = Qt, Ig(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), al(t)) : Ig(Qt, n.stateNode));
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
        gi(2, n, e), Ut || gi(4, n, e), fn(
          t,
          e,
          n
        );
        break;
      case 1:
        Ut || (ve(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Pp(
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
  function ug(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        al(t);
      } catch (n) {
        Lt(e, e.return, n);
      }
    }
  }
  function cg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        al(t);
      } catch (n) {
        Lt(e, e.return, n);
      }
  }
  function DT(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new ag()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new ag()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function _o(t, e) {
    var n = DT(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var s = GT.bind(null, t, a);
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
              if (Ei(T.type)) {
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
        rg(f, p, u), Qt = null, je = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        fg(e, t, n), e = e.sibling;
  }
  var dn = null;
  function fg(t, e, n) {
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
        De(e, t, n), ze(t), s & 4 && (gi(3, t, t.return), kl(3, t), gi(5, t, t.return));
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
                  t.stateNode = Pg(
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
                        if (u = vy(
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
                        if (u = vy(
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
                de || pf(u, t.type, t.stateNode);
            else
              t.stateNode = yy(
                u,
                n,
                t.memoizedProps
              );
          else
            s !== n ? (s === null ? (e = a.stateNode, e === null || Ut || e.parentNode.removeChild(e)) : s.count--, n === null ? de || pf(u, t.type, t.stateNode) : yy(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && bc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        De(e, t, n), ze(t), s & 512 && (Ut || a === null || ve(a, a.return)), a !== null && s & 4 && bc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = wn, wn = !1, De(e, t, n), wn = u, ze(t), s & 512 && (Ut || a === null || ve(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Ta(e, ""), Vt = !0;
          } catch (V) {
            Lt(t, t.return, V);
          }
        }
        s & 4 && t.stateNode != null && (e = t.memoizedProps, bc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), s & 1024 && (wc = !0);
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
        wc && (wc = !1, dg(t)), Vt = !1;
        break;
      case 4:
        s = wn, wn = de, a = Nh(), u = dn, dn = es(
          t.stateNode.containerInfo
        ), De(e, t, n), ze(t), dn = u, Vt && Ql && (Ro = !0), Vt = a, wn = s;
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
        var p = de, T = Ut, M = wn;
        de = p || u, wn = M || u, Ut = T || f, De(e, t, n), Ut = T, wn = M, de = p, ze(t), s & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || f || de || Ut || (e = f || Ut, n = de, a = Ut, de = u || de, Ut = e, yi(t, 2), de = n, Ut = a), !u && wn || zc(t, u)), s & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, _o(t, n))));
        break;
      case 19:
        De(e, t, n), ze(t), s & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, _o(t, e)));
        break;
      case 30:
        s & 512 && (Ut || a === null || ve(a, a.return)), s = Nh(), u = Ql, f = (n & 335544064) === n, p = t.memoizedProps, Ql = f && Gn(
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
          if (Fp(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var s = t.return; s !== null; ) {
          if (yc(s)) {
            var u = s.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (gc(s)) break;
          s = s.return;
        }
        var f = a;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var p = n.stateNode, T = Sc(t);
            wo(
              t,
              T,
              p,
              f
            );
            break;
          case 5:
            var M = n.stateNode;
            n.flags & 32 && (Ta(M, ""), n.flags &= -33);
            var V = Sc(t);
            wo(
              t,
              V,
              M,
              f
            );
            break;
          case 3:
          case 4:
            var Y = n.stateNode.containerInfo, A = Sc(t);
            Tc(
              t,
              A,
              Y,
              f
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (R) {
        Lt(t, t.return, R);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function dg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        dg(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, il = !0, e.reset(), il = !1), t = t.sibling;
      }
  }
  function Ga(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        hg(e, t), e = e.sibling;
    else ig(e);
  }
  function hg(t, e) {
    var n = t.alternate;
    if (n === null) xc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Dc = Dn = !1, $p(), Ga(e, t), !Dn && !Ro) {
            if (t = Cn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var s = t[a + 1];
                ty(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), Dc = !0;
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
          t.memoizedState === null && (n.memoizedState !== null ? xc(t, !1) : Ga(e, t));
          break;
        case 30:
          a = Dn, s = $p(), Dn = !1, Ga(e, t), Dn && (t.flags |= 4);
          var u = t.memoizedProps, f = t.stateNode;
          e = Hn(u, f), f = Hn(n.memoizedProps, f);
          var p = Gn(u.default, u.update);
          p === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, Ve = 0, e = Mc(
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
        lg(t, e.alternate, e), e = e.sibling;
  }
  function yi(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          gi(4, n, n.return), yi(
            n,
            a
          );
          break;
        case 1:
          ve(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && Pp(
            n,
            n.return,
            s
          ), yi(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && dy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          ve(n, n.return), n.tag !== 5 && n.tag !== 27 || Zl(n), yi(
            n,
            a
          );
          break;
        case 6:
          Zl(n);
          break;
        case 26:
          ve(n, n.return), s = n.stateNode, n.memoizedState !== null || s === null || Ut || s.parentNode.removeChild(s), yi(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && yi(
            n,
            a
          );
          break;
        case 30:
          ve(n, n.return), yi(
            n,
            a
          );
          break;
        case 7:
          ve(n, n.return);
        default:
          yi(
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
          ), kl(4, u);
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
              var M = s.shared.hiddenCallbacks;
              if (M !== null)
                for (s.shared.hiddenCallbacks = null, s = 0; s < M.length; s++)
                  jm(M[s], T);
            } catch (V) {
              Lt(a, a.return, V);
            }
          }
          p && f & 64 && Kp(u), An(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Ip(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Jp(u), hn(
            s,
            u,
            n
          ), p && a === null && f & 4 && vc(u), An(u, u.return);
          break;
        case 6:
          Jp(u);
          break;
        case 26:
          T = u.stateNode, u.memoizedState !== null || T === null || de || pf(
            es(T.ownerDocument),
            u.type,
            T
          ), hn(
            s,
            u,
            n
          ), p && a === null && f & 4 && vc(u), An(u, u.return);
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
          ), p && f & 4 && ug(s, u);
          break;
        case 13:
          hn(
            s,
            u,
            n
          ), p && f & 4 && cg(s, u);
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
  function Rc(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Rl(n));
  }
  function Nc(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Rl(t));
  }
  function sn(t, e, n, a) {
    var s = (n & 335544064) === n;
    if (e.subtreeFlags & (s ? 10262 : 10256))
      for (e = e.child; e !== null; )
        mg(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else s && ng(e);
  }
  function mg(t, e, n, a) {
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
        ), u & 2048 && kl(9, e);
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
        ), s && Dc && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Rl(u)));
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
          } catch (M) {
            Lt(e, e.return, M);
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
        ))), u & 2048 && Rc(p, e);
        break;
      case 24:
        sn(
          t,
          e,
          n,
          a
        ), u & 2048 && Nc(e.alternate, e);
        break;
      case 30:
        s && (u = e.alternate, u !== null && (Mn(u.child, !0), Mn(e.child, !0))), sn(
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
      var u = t, f = e, p = n, T = a, M = f.flags;
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
          ), kl(8, f);
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
          )), s && M & 2048 && Rc(
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
          ), s && M & 2048 && Nc(f.alternate, f);
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
            Kl(n, a), s & 2048 && Rc(
              a.alternate,
              a
            );
            break;
          case 24:
            Kl(n, a), s & 2048 && Nc(a.alternate, a);
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
        pg(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function pg(t, e, n) {
    switch (t.tag) {
      case 26:
        ea(
          t,
          e,
          n
        ), t.flags & ta && (t.memoizedState !== null ? Vx(
          n,
          dn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && xy(n, t)));
        break;
      case 5:
        ea(
          t,
          e,
          n
        ), t.flags & ta && (t = t.stateNode, (e & 335544128) === e && xy(n, t));
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
  function gg(t) {
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
          he = a, vg(
            a,
            t
          );
        }
      gg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        yg(t), t = t.sibling;
  }
  function yg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Pl(t), t.flags & 2048 && gi(9, t, t.return);
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
          he = a, vg(
            a,
            t
          );
        }
      gg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          gi(8, e, e.return), Vo(e);
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
  function vg(t, e) {
    for (; he !== null; ) {
      var n = he;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          gi(8, n, e);
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
          if (og(a), a === n) {
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
  var zT = {
    getCacheForType: function(t) {
      var e = pe(te), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return pe(te).controller.signal;
    }
  }, OT = typeof WeakMap == "function" ? WeakMap : Map, jt = 0, Xt = null, wt = null, zt = 0, Bt = 0, Qe = null, vi = !1, qa = !1, _c = !1, Jn = 0, Ft = 0, bi = 0, na = 0, jo = 0, Ke = 0, Xa = 0, Jl = null, Ue = null, Vc = !1, Uo = 0, bg = 0, Bo = 1 / 0, Lo = null, Si = null, Kt = 0, mn = null, ia = null, On = 0, jc = 0, Uc = null, Sg = null, ka = null, Za = null, Qa = null, Fl = 0, Ho = null;
  function Pe() {
    return (jt & 2) !== 0 && zt !== 0 ? zt & -zt : lt.T !== null ? Qc() : Eh();
  }
  function Tg() {
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
      a === null && (a = n.ref = ey(
        Hn(t.memoizedProps, n)
      )), Za === null && (Za = []), Za.push(e.bind(null, a));
    }
  }
  function Be(t, e, n) {
    (t === Xt && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null) && (Pa(t, 0), Ti(
      t,
      zt,
      Ke,
      !1
    )), yl(t, n), ((jt & 2) === 0 || t !== Xt) && (t === Xt && ((jt & 2) === 0 && (na |= n), Ft === 4 && Ti(
      t,
      zt,
      Ke,
      !1
    )), Rn(t));
  }
  function xg(t, e, n) {
    if ((jt & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || gl(t, e), s = a ? _T(t, e) : Lc(t, e, !0), u = a;
    do {
      if (s === 0) {
        qa && !a && Ti(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !RT(n)) {
          s = Lc(t, e, !1), u = !1;
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
              if (T && (Pa(p, f).flags |= 256), f = Lc(
                p,
                f,
                !1
              ), f !== 2 && f !== 6) {
                if (_c && !T) {
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
          Pa(t, 0), Ti(t, e, 0, !0);
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
              Ti(
                a,
                e,
                Ke,
                !vi
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
            if (Ti(
              a,
              e,
              Ke,
              !vi
            ), Vs(a, 0, !0) !== 0) break t;
            On = e, a.timeoutHandle = af(
              Eg.bind(
                null,
                a,
                n,
                Ue,
                Lo,
                Vc,
                e,
                Ke,
                na,
                Xa,
                vi,
                u,
                "Throttled",
                -0,
                0
              ),
              s
            );
            break t;
          }
          Eg(
            a,
            n,
            Ue,
            Lo,
            Vc,
            e,
            Ke,
            na,
            Xa,
            vi,
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
  function Eg(t, e, n, a, s, u, f, p, T, M, V, Y, A, R) {
    t.timeoutHandle = -1;
    var it = e.subtreeFlags, ut = (u & 335544064) === u;
    if (Y = null, (ut || it & 8192 || (it & 16785408) === 16785408) && (Y = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Tn
    }, Ze = null, pg(
      e,
      u,
      Y
    ), ut && (it = Y, ut = t.containerInfo, ut = (ut.nodeType === 9 ? ut : ut.ownerDocument).__reactViewTransition, ut != null && (it.count++, it.waitingForViewTransition = !0, it = as.bind(it), ut.finished.then(it, it))), it = (u & 62914560) === u ? Uo - He() : (u & 4194048) === u ? bg - He() : 0, it = jx(
      Y,
      it
    ), it !== null)) {
      On = u, t.cancelPendingCommit = it(
        Rg.bind(
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
          M,
          V,
          Y,
          null,
          A,
          R
        )
      ), Ti(t, u, f, !M);
      return;
    }
    Rg(
      t,
      e,
      u,
      n,
      a,
      s,
      f,
      p,
      T,
      M,
      V,
      Y
    );
  }
  function RT(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var s = n[a], u = s.getSnapshot;
          s = s.value;
          try {
            if (!Xe(u(), s)) return !1;
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
  function Ti(t, e, n, a) {
    e = vh(t, e), e &= ~jo, e &= ~na, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var s = e; 0 < s; ) {
      var u = 31 - Ye(s), f = 1 << u;
      a[u] = -1, s &= ~f;
    }
    n !== 0 && Sh(t, n, e);
  }
  function Go() {
    return (jt & 6) === 0 ? (Il(0), !1) : !0;
  }
  function Bc() {
    if (wt !== null) {
      if (Bt === 0)
        var t = wt.return;
      else
        t = wt, Xn = ki = null, Zu(t), Va = null, Vl = 0, t = wt;
      for (; t !== null; )
        Qp(t.alternate, t), t = t.return;
      wt = null;
    }
  }
  function Pa(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, ex(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), On = 0, Bc(), Xt = t, wt = n = Yn(t.current, null), zt = e, Bt = 0, Qe = null, vi = !1, qa = gl(t, e), _c = !1, Xa = Ke = jo = na = bi = Ft = 0, Ue = Jl = null, Vc = !1, Jn = vh(t, e), Ks(), n;
  }
  function Ag(t, e) {
    xt = null, lt.H = bo, e === _a || e === ao ? (e = Rm(), Bt = 3) : e === Nu ? (e = Rm(), Bt = 4) : Bt = e === sc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Qe = e, wt === null && (Ft = 1, So(
      t,
      en(e, t.current)
    ));
  }
  function Cg() {
    var t = ge.current;
    return t === null ? !0 : (zt & 4194048) === zt ? Ee === null : (zt & 62914560) === zt || (zt & 536870912) !== 0 ? t === Ee : !1;
  }
  function Mg() {
    var t = lt.H;
    return lt.H = bo, t === null ? bo : t;
  }
  function wg() {
    var t = lt.A;
    return lt.A = zT, t;
  }
  function Yo() {
    Ft = 4, vi || (zt & 4194048) !== zt && ge.current !== null || (qa = !0), (bi & 134217727) === 0 && (na & 134217727) === 0 || Xt === null || Ti(
      Xt,
      zt,
      Ke,
      !1
    );
  }
  function Lc(t, e, n) {
    var a = jt;
    jt |= 2;
    var s = Mg(), u = wg();
    (Xt !== t || zt !== e) && (Lo = null, Pa(t, e)), e = !1;
    var f = Ft;
    t: do
      try {
        if (Bt !== 0 && wt !== null) {
          var p = wt, T = Qe;
          switch (Bt) {
            case 8:
              Bc(), f = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              ge.current === null && (e = !0);
              var M = Bt;
              if (Bt = 0, Qe = null, Ja(t, p, T, M), n && qa) {
                f = 0;
                break t;
              }
              break;
            default:
              M = Bt, Bt = 0, Qe = null, Ja(t, p, T, M);
          }
        }
        NT(), f = Ft;
        break;
      } catch (V) {
        Ag(t, V);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Xn = ki = null, jt = a, lt.H = s, lt.A = u, wt === null && (Xt = null, zt = 0, Ks()), f;
  }
  function NT() {
    for (; wt !== null; ) Dg(wt);
  }
  function _T(t, e) {
    var n = jt;
    jt |= 2;
    var a = Mg(), s = wg();
    Xt !== t || zt !== e ? (Lo = null, Bo = He() + 500, Pa(t, e)) : qa = gl(
      t,
      e
    );
    t: do
      try {
        if (Bt !== 0 && wt !== null) {
          e = wt;
          var u = Qe;
          e: switch (Bt) {
            case 1:
              Bt = 0, Qe = null, Ja(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (zm(u)) {
                Bt = 0, Qe = null, zg(e);
                break;
              }
              e = function() {
                Bt !== 2 && Bt !== 9 || Xt !== t || (Bt = 7), Rn(t);
              }, u.then(e, e);
              break t;
            case 3:
              Bt = 7;
              break t;
            case 4:
              Bt = 5;
              break t;
            case 7:
              zm(u) ? (Bt = 0, Qe = null, zg(e)) : (Bt = 0, Qe = null, Ja(t, e, u, 7));
              break;
            case 5:
              var f = null;
              switch (wt.tag) {
                case 26:
                  f = wt.memoizedState;
                case 5:
                case 27:
                  var p = wt;
                  if (f ? Sy(f) : p.stateNode.complete) {
                    Bt = 0, Qe = null;
                    var T = p.sibling;
                    if (T !== null) wt = T;
                    else {
                      var M = p.return;
                      M !== null ? (wt = M, qo(M)) : wt = null;
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
              Bc(), Ft = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        VT();
        break;
      } catch (V) {
        Ag(t, V);
      }
    while (!0);
    return Xn = ki = null, lt.H = a, lt.A = s, jt = n, wt !== null ? 0 : (Xt = null, zt = 0, Ks(), Ft);
  }
  function VT() {
    for (; wt !== null && !I1(); )
      Dg(wt);
  }
  function Dg(t) {
    var e = kp(t.alternate, t, Jn);
    t.memoizedProps = t.pendingProps, e === null ? qo(t) : wt = e;
  }
  function zg(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Bp(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          zt
        );
        break;
      case 11:
        e = Bp(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          zt
        );
        break;
      case 5:
        Zu(e);
        var a = e;
        a === fe && (Ct ? ($s(a), a.tag === 5 && a.stateNode != null && (kt = a.stateNode)) : ($s(a), Ct = !0));
      default:
        Qp(n, e), e = wt = vm(e, Jn), e = kp(n, e, Jn);
    }
    t.memoizedProps = t.pendingProps, e === null ? qo(t) : wt = e;
  }
  function Ja(t, e, n, a) {
    Xn = ki = null, Zu(e), Va = null, Vl = 0;
    var s = e.return;
    try {
      if (TT(
        t,
        s,
        e,
        n,
        zt
      )) {
        Ft = 1, So(
          t,
          en(n, t.current)
        ), wt = null;
        return;
      }
    } catch (u) {
      if (s !== null) throw wt = s, u;
      Ft = 1, So(
        t,
        en(n, t.current)
      ), wt = null;
      return;
    }
    e.flags & 32768 ? (Ct || a === 1 ? t = !0 : qa || (zt & 536870912) !== 0 ? t = !1 : (vi = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = ge.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Og(e, t)) : qo(e);
  }
  function qo(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Og(
          e,
          vi
        );
        return;
      }
      t = e.return;
      var n = CT(
        e.alternate,
        e,
        Jn
      );
      if (n !== null) {
        wt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        wt = e;
        return;
      }
      wt = e = t;
    } while (e !== null);
    Ft === 0 && (Ft = 5);
  }
  function Og(t, e) {
    do {
      var n = MT(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, wt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        wt = t;
        return;
      }
      wt = t = n;
    } while (t !== null);
    Ft = 6, wt = null;
  }
  function Rg(t, e, n, a, s, u, f, p, T, M, V, Y) {
    t.cancelPendingCommit = null;
    do
      Xo();
    while (Kt !== 0);
    if ((jt & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Xt && (wt = Xt = null, zt = 0), ia = e, mn = t, On = n, Uc = s, Sg = a, jT(
        t,
        e,
        n,
        f,
        p,
        T,
        Y
      );
    }
  }
  function jT(t, e, n, a, s, u, f) {
    var p = e.lanes | e.childLanes;
    if (jc = p, p |= bu, oS(
      t,
      n,
      p,
      a,
      s,
      u
    ), Za = null, (n & 335544064) === n ? (Qa = uT(t), a = 10262) : (Qa = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, YT(Os, function() {
      return qc(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Do = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = lt.T, lt.T = null, s = ht.p, ht.p = 2, u = jt, jt |= 4;
      try {
        wT(t, e, n);
      } finally {
        jt = u, ht.p = s, lt.T = a;
      }
    }
    Kt = 1, Do ? ka = ox(
      f,
      t.containerInfo,
      Qa,
      Hc,
      Gc,
      BT,
      Yc,
      qc,
      UT
    ) : (Hc(), Gc(), Yc());
  }
  function UT(t) {
    if (Kt !== 0) {
      var e = mn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function BT() {
    Kt === 3 && (Kt = 0, hg(ia, mn), Kt = 4);
  }
  function Hc() {
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
          Ql = Ro = !1, fg(e, t, n), n = tf;
          var f = rm(t.containerInfo), p = n.focusedElem, T = n.selectionRange;
          if (f !== p && p && p.ownerDocument && om(
            p.ownerDocument.documentElement,
            p
          )) {
            if (T !== null && mu(p)) {
              var M = T.start, V = T.end;
              if (V === void 0 && (V = M), "selectionStart" in p)
                p.selectionStart = M, p.selectionEnd = Math.min(
                  V,
                  p.value.length
                );
              else {
                var Y = p.ownerDocument || document, A = Y && Y.defaultView || window;
                if (A.getSelection) {
                  var R = A.getSelection(), it = p.textContent.length, ut = Math.min(T.start, it), Et = T.end === void 0 ? ut : Math.min(T.end, it);
                  !R.extend && ut > Et && (f = Et, Et = ut, ut = f);
                  var C = sm(
                    p,
                    ut
                  ), E = sm(
                    p,
                    Et
                  );
                  if (C && E && (R.rangeCount !== 1 || R.anchorNode !== C.node || R.anchorOffset !== C.offset || R.focusNode !== E.node || R.focusOffset !== E.offset)) {
                    var z = Y.createRange();
                    z.setStart(C.node, C.offset), R.removeAllRanges(), ut > Et ? (R.addRange(z), R.extend(E.node, E.offset)) : (z.setEnd(E.node, E.offset), R.addRange(z));
                  }
                }
              }
            }
            for (Y = [], R = p; R = R.parentNode; )
              R.nodeType === 1 && Y.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
            for (typeof p.focus == "function" && p.focus(), p = 0; p < Y.length; p++) {
              var G = Y[p];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          il = !!$c, tf = $c = null;
        } finally {
          jt = u, ht.p = s, lt.T = a;
        }
      }
      t.current = e, Kt = 2;
    }
  }
  function Gc() {
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
          lg(t, e.alternate, e);
        } finally {
          jt = s, ht.p = a, lt.T = n;
        }
      }
      Kt = 3;
    }
  }
  function Yc() {
    if (Kt === 4 || Kt === 3) {
      Kt = 0;
      var t = ka;
      ka = null, W1();
      var e = mn, n = ia, a = On, s = Sg, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Kt = 5 : (Kt = 0, ia = mn = null, Ng(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (Si = null), Fr(a), n = n.stateNode, Ge && typeof Ge.onCommitFiberRoot == "function")
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
      (On & 3) !== 0 && Xo(), Rn(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === Ho ? Fl++ : (Fl = 0, Ho = e) : (Fl = 0, Ho = null), Il(0);
    }
  }
  function Ng(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Rl(e)));
  }
  function Xo() {
    return ka !== null && (ka.skipTransition(), ka = null), Hc(), Gc(), Yc(), qc();
  }
  function qc() {
    if (Kt !== 5) return !1;
    var t = mn, e = jc;
    jc = 0;
    var n = Fr(On), a = lt.T, s = ht.p;
    try {
      ht.p = 32 > n ? 32 : n, lt.T = null, n = Uc, Uc = null;
      var u = mn, f = On;
      if (Kt = 0, ia = mn = null, On = 0, (jt & 6) !== 0) throw Error(r(331));
      var p = jt;
      if (jt |= 4, yg(u.current), mg(
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
      ht.p = s, lt.T = a, Ng(t, e);
    }
  }
  function _g(t, e, n) {
    e = en(n, e), e = lc(t.stateNode, e, 2), t = di(t, e, 2), t !== null && (yl(t, 2), Rn(t));
  }
  function Lt(t, e, n) {
    if (t.tag === 3)
      _g(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          _g(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Si === null || !Si.has(a))) {
            t = en(n, t), n = zp(2), a = di(e, n, 2), a !== null && (Op(
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
  function Xc(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new OT();
      var s = /* @__PURE__ */ new Set();
      a.set(e, s);
    } else
      s = a.get(e), s === void 0 && (s = /* @__PURE__ */ new Set(), a.set(e, s));
    s.has(n) || (_c = !0, s.add(n), t = LT.bind(null, t, e, n), e.then(t, t));
  }
  function LT(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Xt === t && (zt & n) === n && ((Ft === 4 || Ft === 3 && (zt & 62914560) === zt && 300 > He() - Uo) && (jt & 2) === 0 ? Pa(t, 0) : jo |= n, Xa === zt && (Xa = 0)), Rn(t);
  }
  function Vg(t, e) {
    e === 0 && (e = bh()), t = Yi(t, e), t !== null && (yl(t, e), Rn(t));
  }
  function HT(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), Vg(t, n);
  }
  function GT(t, e) {
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
    a !== null && a.delete(e), Vg(t, n);
  }
  function YT(t, e) {
    return Qr(t, e);
  }
  var Fa = null, Ia = null, kc = !1, ko = !1, Zc = !1, xi = 0;
  function Rn(t) {
    t !== Ia && t.next === null && (Ia === null ? Fa = Ia = t : Ia = Ia.next = t), ko = !0, kc || (kc = !0, XT());
  }
  function Il(t, e) {
    if (!Zc && ko) {
      Zc = !0;
      do
        for (var n = !1, a = Fa; a !== null; ) {
          if (t !== 0) {
            var s = a.pendingLanes;
            if (s === 0) var u = 0;
            else {
              var f = a.suspendedLanes, p = a.pingedLanes;
              u = (1 << 31 - Ye(42 | t) + 1) - 1, u &= s & ~(f & ~p), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Lg(a, u));
          } else
            u = zt, u = Vs(
              a,
              a === Xt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || gl(a, u) || (n = !0, Lg(a, u));
          a = a.next;
        }
      while (n);
      Zc = !1;
    }
  }
  function qT() {
    jg();
  }
  function jg() {
    ko = kc = !1;
    var t = 0;
    xi !== 0 && tx() && (t = xi);
    for (var e = He(), n = null, a = Fa; a !== null; ) {
      var s = a.next, u = Ug(a, e);
      u === 0 ? (a.next = null, n === null ? Fa = s : n.next = s, s === null && (Ia = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (ko = !0)), a = s;
    }
    Kt !== 0 && Kt !== 5 || Il(t), xi !== 0 && (xi = 0);
  }
  function Ug(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, s = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var f = 31 - Ye(u), p = 1 << f, T = s[f];
      T === -1 ? ((p & n) === 0 || (p & a) !== 0) && (s[f] = sS(p, e)) : T <= e && (t.expiredLanes |= p), u &= ~p;
    }
    if (e = Xt, n = zt, n = Vs(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Bt === 2 || Bt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Kr(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || gl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Kr(a), Fr(n)) {
        case 2:
        case 8:
          n = gh;
          break;
        case 32:
          n = Os;
          break;
        case 268435456:
          n = yh;
          break;
        default:
          n = Os;
      }
      return a = Bg.bind(null, t), n = Qr(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Kr(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function Bg(t, e) {
    if (Kt !== 0 && Kt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (Xo() && t.callbackNode !== n)
      return null;
    var a = zt;
    return a = Vs(
      t,
      t === Xt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (xg(t, a, e), Ug(t, He()), t.callbackNode != null && t.callbackNode === n ? Bg.bind(null, t) : null);
  }
  function Lg(t, e) {
    if (Xo()) return null;
    xg(t, e, !0);
  }
  function XT() {
    nx(function() {
      (jt & 6) !== 0 ? Qr(
        ph,
        qT
      ) : jg();
    });
  }
  function Qc() {
    if (xi === 0) {
      var t = Ki;
      t === 0 && (t = Rs, Rs <<= 1, (Rs & 261888) === 0 && (Rs = 256)), xi = t;
    }
    return xi;
  }
  function Hg(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Hs(t);
  }
  function kT(t, e, n, a, s) {
    if (e === "submit" && n && n.stateNode === s) {
      var u = Hg(
        (s[Ne] || null).action
      ), f = a.submitter;
      f && (e = (e = f[Ne] || null) ? Hg(e.formAction) : f.getAttribute("formAction"), e !== null && (u = e, f = null));
      var p = new Xs(
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
                if (xi !== 0) {
                  var T = new FormData(s, f);
                  tc(
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
                typeof u == "function" && (p.preventDefault(), T = new FormData(s, f), tc(
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
  for (var Kc = 0; Kc < vu.length; Kc++) {
    var Pc = vu[Kc], ZT = Pc.toLowerCase(), QT = Pc[0].toUpperCase() + Pc.slice(1);
    cn(
      ZT,
      "on" + QT
    );
  }
  cn(fm, "onAnimationEnd"), cn(dm, "onAnimationIteration"), cn(hm, "onAnimationStart"), cn("dblclick", "onDoubleClick"), cn("focusin", "onFocus"), cn("focusout", "onBlur"), cn(eT, "onTransitionRun"), cn(nT, "onTransitionStart"), cn(iT, "onTransitionCancel"), cn(mm, "onTransitionEnd"), ba("onMouseEnter", ["mouseout", "mouseover"]), ba("onMouseLeave", ["mouseout", "mouseover"]), ba("onPointerEnter", ["pointerout", "pointerover"]), ba("onPointerLeave", ["pointerout", "pointerover"]), Li(
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
  ), KT = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl)
  );
  function Gg(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], s = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var f = a.length - 1; 0 <= f; f--) {
            var p = a[f], T = p.instance, M = p.currentTarget;
            if (p = p.listener, T !== u && s.isPropagationStopped())
              break t;
            u = p, s.currentTarget = M;
            try {
              u(s);
            } catch (V) {
              Qs(V);
            }
            s.currentTarget = null, u = T;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (p = a[f], T = p.instance, M = p.currentTarget, p = p.listener, T !== u && s.isPropagationStopped())
              break t;
            u = p, s.currentTarget = M;
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
    var n = e[Ch];
    n === void 0 && (n = e[Ch] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Yg(e, t, 2, !1), n.add(a));
  }
  function Jc(t, e, n) {
    var a = 0;
    e && (a |= 4), Yg(
      n,
      t,
      a,
      e
    );
  }
  var Zo = "_reactListening" + Math.random().toString(36).slice(2);
  function Fc(t) {
    if (!t[Zo]) {
      t[Zo] = !0, Dh.forEach(function(n) {
        n !== "selectionchange" && (KT.has(n) || Jc(n, !1, t), Jc(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[Zo] || (e[Zo] = !0, Jc("selectionchange", !1, e));
    }
  }
  function Yg(t, e, n, a) {
    switch (Oy(e)) {
      case 2:
        var s = Hx;
        break;
      case 8:
        s = Gx;
        break;
      default:
        s = yf;
    }
    n = s.bind(
      null,
      e,
      n,
      t
    ), s = void 0, !au || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (s = !0), a ? s !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: s
    }) : t.addEventListener(e, n, !0) : s !== void 0 ? t.addEventListener(e, n, {
      passive: s
    }) : t.addEventListener(e, n, !1);
  }
  function Ic(t, e, n, a, s) {
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
    Yh(function() {
      var M = u, V = nu(n), Y = [];
      t: {
        var A = pm.get(t);
        if (A !== void 0) {
          var R = Xs, it = t;
          switch (t) {
            case "keypress":
              if (Ys(n) === 0) break t;
            case "keydown":
            case "keyup":
              R = RS;
              break;
            case "focusin":
              it = "focus", R = ru;
              break;
            case "focusout":
              it = "blur", R = ru;
              break;
            case "beforeblur":
            case "afterblur":
              R = ru;
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
              R = kh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = bS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = US;
              break;
            case fm:
            case dm:
            case hm:
              R = xS;
              break;
            case mm:
              R = LS;
              break;
            case "scroll":
            case "scrollend":
              R = yS;
              break;
            case "wheel":
              R = GS;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = AS;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = Qh;
              break;
            case "submit":
              R = VS;
              break;
            case "toggle":
            case "beforetoggle":
              R = qS;
          }
          var ut = (e & 4) !== 0, Et = !ut && (t === "scroll" || t === "scrollend"), C = ut ? A !== null ? A + "Capture" : null : A;
          ut = [];
          for (var E = M, z; E !== null; ) {
            var G = E;
            if (z = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || z === null || C === null || (G = Sl(E, C), G != null && ut.push(
              $l(E, G, z)
            )), Et) break;
            E = E.return;
          }
          0 < ut.length && (A = new R(
            A,
            it,
            null,
            n,
            V
          ), Y.push({ event: A, listeners: ut }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (R = t === "mouseover" || t === "pointerover", A = t === "mouseout" || t === "pointerout", R && n !== eu && (it = n.relatedTarget || n.fromElement) && (Bi(it) || it[ga]))
            break t;
          (A || R) && (it = V.window === V ? V : (R = V.ownerDocument) ? R.defaultView || R.parentWindow : window, A ? (R = n.relatedTarget || n.toElement, A = M, R = R ? Bi(R) : null, R !== null && (Et = h(R), ut = R.tag, R !== Et || ut !== 5 && ut !== 27 && ut !== 6) && (R = null)) : (A = null, R = M), A !== R && (ut = kh, G = "onMouseLeave", C = "onMouseEnter", E = "mouse", (t === "pointerout" || t === "pointerover") && (ut = Qh, G = "onPointerLeave", C = "onPointerEnter", E = "pointer"), Et = A == null ? it : bl(A), z = R == null ? it : bl(R), it = new ut(
            G,
            E + "leave",
            A,
            n,
            V
          ), it.target = Et, it.relatedTarget = z, G = null, Bi(V) === M && (ut = new ut(
            C,
            E + "enter",
            R,
            n,
            V
          ), ut.target = z, ut.relatedTarget = Et, G = ut), Et = G, ut = A && R ? at(
            A,
            R,
            PT
          ) : null, A !== null && qg(
            Y,
            it,
            A,
            ut,
            !1
          ), R !== null && Et !== null && qg(
            Y,
            Et,
            R,
            ut,
            !0
          )));
        }
        t: {
          if (A = M ? bl(M) : window, R = A.nodeName && A.nodeName.toLowerCase(), R === "select" || R === "input" && A.type === "file")
            var st = tm;
          else if (Wh(A))
            if (em)
              st = WS;
            else {
              st = FS;
              var Ot = JS;
            }
          else
            R = A.nodeName, !R || R.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? M && tu(M.elementType) && (st = tm) : st = IS;
          if (st && (st = st(t, M))) {
            $h(
              Y,
              st,
              n,
              V
            );
            break t;
          }
          Ot && Ot(t, A, M);
        }
        switch (Ot = M ? bl(M) : window, t) {
          case "focusin":
            (Wh(Ot) || Ot.contentEditable === "true") && (Ca = Ot, pu = M, Dl = null);
            break;
          case "focusout":
            Dl = pu = Ca = null;
            break;
          case "mousedown":
            gu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gu = !1, um(Y, n, V);
            break;
          case "selectionchange":
            if (tT) break;
          case "keydown":
          case "keyup":
            um(Y, n, V);
        }
        var mt;
        if (cu)
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
          Aa ? Fh(t, n) && (vt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (vt = "onCompositionStart");
        vt && (Kh && n.locale !== "ko" && (Aa || vt !== "onCompositionStart" ? vt === "onCompositionEnd" && Aa && (mt = qh()) : (ii = V, lu = "value" in ii ? ii.value : ii.textContent, Aa = !0)), Ot = Qo(M, vt), 0 < Ot.length && (vt = new Zh(
          vt,
          t,
          null,
          n,
          V
        ), Y.push({ event: vt, listeners: Ot }), mt ? vt.data = mt : (mt = Ih(n), mt !== null && (vt.data = mt)))), (mt = kS ? ZS(t, n) : QS(t, n)) && (vt = Qo(M, "onBeforeInput"), 0 < vt.length && (Ot = new Zh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          V
        ), Y.push({
          event: Ot,
          listeners: vt
        }), Ot.data = mt)), kT(
          Y,
          t,
          M,
          n,
          V
        );
      }
      Gg(Y, e);
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
  function PT(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function qg(t, e, n, a, s) {
    for (var u = e._reactName, f = []; n !== null && n !== a; ) {
      var p = n, T = p.alternate, M = p.stateNode;
      if (p = p.tag, T !== null && T === a) break;
      p !== 5 && p !== 26 && p !== 27 || M === null || (T = M, s ? (M = Sl(n, u), M != null && f.unshift(
        $l(n, M, T)
      )) : s || (M = Sl(n, u), M != null && f.push(
        $l(n, M, T)
      ))), n = n.return;
    }
    f.length !== 0 && t.push({ event: e, listeners: f });
  }
  var JT = /\r\n?/g, FT = /\u0000|\uFFFD/g;
  function Xg(t) {
    return (typeof t == "string" ? t : "" + t).replace(JT, `
`).replace(FT, "");
  }
  function kg(t, e) {
    return e = Xg(e), Xg(t) === e;
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
        Hh(t, a, u);
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
          n = pS.get(n) || n, Bs(t, n, a);
        else return;
    }
    Vt = !0;
  }
  function Wc(t, e, n, a, s, u) {
    switch (n) {
      case "style":
        Hh(t, a, u);
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
        if (!zh.hasOwnProperty(n))
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
        var p = u = f = s = null, T = null, M = null;
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
                  M = V;
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
        jh(
          t,
          u,
          p,
          T,
          M,
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
        Bh(t, a, s, u);
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
        for (M in n)
          if (n.hasOwnProperty(M) && (a = n[M], a != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, e));
              default:
                Ht(t, e, M, a, n, null);
            }
        return;
      default:
        if (tu(e)) {
          for (V in n)
            n.hasOwnProperty(V) && (a = n[V], a !== void 0 && Wc(
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
  var IT = {};
  function WT(t, e, n, a) {
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
        var s = null, u = null, f = null, p = null, T = null, M = null, V = null;
        for (R in n) {
          var Y = n[R];
          if (n.hasOwnProperty(R) && Y != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = Y;
              default:
                a.hasOwnProperty(R) || Ht(t, e, R, null, a, Y);
            }
        }
        for (var A in a) {
          var R = a[A];
          if (Y = n[A], a.hasOwnProperty(A) && (R != null || Y != null))
            switch (A) {
              case "type":
                R !== Y && (Vt = !0), u = R;
                break;
              case "name":
                R !== Y && (Vt = !0), s = R;
                break;
              case "checked":
                R !== Y && (Vt = !0), M = R;
                break;
              case "defaultChecked":
                R !== Y && (Vt = !0), V = R;
                break;
              case "value":
                R !== Y && (Vt = !0), f = R;
                break;
              case "defaultValue":
                R !== Y && (Vt = !0), p = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(r(137, e));
                break;
              default:
                R !== Y && Ht(
                  t,
                  e,
                  A,
                  R,
                  a,
                  Y
                );
            }
        }
        Wr(
          t,
          f,
          p,
          T,
          M,
          V,
          u,
          s
        );
        return;
      case "select":
        R = f = p = A = null;
        for (u in n)
          if (T = n[u], n.hasOwnProperty(u) && T != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                R = T;
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
        e = p, n = f, a = R, A != null ? Sa(t, !!n, A, !1) : !!a != !!n && (e != null ? Sa(t, !!n, e, !0) : Sa(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        R = A = null;
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
                s !== u && (Vt = !0), R = s;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (s != null) throw Error(r(91));
                break;
              default:
                s !== u && Ht(t, e, f, s, a, u);
            }
        Uh(t, A, R);
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
          A = a[T], R = n[T], a.hasOwnProperty(T) && A !== R && (A != null || R != null) && (T === "selected" ? (A !== R && (Vt = !0), t.selected = A && typeof A != "function" && typeof A != "symbol") : Ht(
            t,
            e,
            T,
            A,
            a,
            R
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
        for (var ut in n)
          A = n[ut], n.hasOwnProperty(ut) && A != null && !a.hasOwnProperty(ut) && Ht(t, e, ut, null, a, A);
        for (M in a)
          if (A = a[M], R = n[M], a.hasOwnProperty(M) && A !== R && (A != null || R != null))
            switch (M) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(r(137, e));
                break;
              default:
                Ht(
                  t,
                  e,
                  M,
                  A,
                  a,
                  R
                );
            }
        return;
      default:
        if (tu(e)) {
          for (var Et in n)
            A = n[Et], n.hasOwnProperty(Et) && A !== void 0 && !a.hasOwnProperty(Et) && Wc(
              t,
              e,
              Et,
              void 0,
              a,
              A
            );
          for (V in a)
            A = a[V], R = n[V], !a.hasOwnProperty(V) || A === R || A === void 0 && R === void 0 || Wc(
              t,
              e,
              V,
              A,
              a,
              R
            );
          return;
        }
    }
    for (var C in n)
      A = n[C], n.hasOwnProperty(C) && A != null && !a.hasOwnProperty(C) && Ht(t, e, C, null, a, A);
    for (Y in a)
      A = a[Y], R = n[Y], !a.hasOwnProperty(Y) || A === R || A == null && R == null || Ht(t, e, Y, A, a, R);
  }
  function Zg(t) {
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
  function $T() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var s = n[a], u = s.transferSize, f = s.initiatorType, p = s.duration;
        if (u && p && Zg(f)) {
          for (f = 0, p = s.responseEnd, a += 1; a < n.length; a++) {
            var T = n[a], M = T.startTime;
            if (M > p) break;
            var V = T.transferSize, Y = T.initiatorType;
            V && Zg(Y) && (T = T.responseEnd, f += V * (T < p ? 1 : (p - M) / (T - M)));
          }
          if (--a, e += 8 * (u + f) / (s.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var $c = null, tf = null;
  function ts(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Qg(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Kg(t, e) {
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
  function Pg(t, e, n, a) {
    return n = ts(
      n
    ).createElement(t), n[me] = a, n[Ne] = e, be(n, t, e), ce(n), n;
  }
  function ef(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var nf = null;
  function tx() {
    var t = window.event;
    return t && t.type === "popstate" ? t === nf ? !1 : (nf = t, !0) : (nf = null, !1);
  }
  var af = typeof setTimeout == "function" ? setTimeout : void 0, ex = typeof clearTimeout == "function" ? clearTimeout : void 0, Jg = typeof Promise == "function" ? Promise : void 0, Fg = typeof requestAnimationFrame == "function" ? requestAnimationFrame : af, nx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Jg < "u" ? function(t) {
    return Jg.resolve(null).then(t).catch(ix);
  } : af;
  function ix(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Ei(t) {
    return t === "head";
  }
  function Ig(t, e) {
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
          df(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, df(n);
          for (var u = n.firstChild; u; ) {
            var f = u.nextSibling, p = u.nodeName;
            u[vl] || p === "SCRIPT" || p === "STYLE" || p === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = f;
          }
        } else
          n === "body" && df(t.ownerDocument.body);
      n = s;
    } while (n);
    al(e);
  }
  function Wg(t, e) {
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
  function $g(t, e, n) {
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
  function ty(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function ax(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function lf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return ax(e, n, t);
  }
  function lx(t) {
    return t.documentElement.clientHeight;
  }
  function sx(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function ox(t, e, n, a, s, u, f, p, T) {
    var M = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var V = M.startViewTransition({
        update: function() {
          var A = M.defaultView, R = A.navigation && A.navigation.transition, it = M.fonts.status;
          a();
          var ut = [];
          if (it === "loaded" && (lx(M), M.fonts.status === "loading" && ut.push(M.fonts.ready)), it = ut.length, t !== null)
            for (var Et = t.suspenseyImages, C = 0, E = 0; E < Et.length; E++) {
              var z = Et[E];
              if (!z.complete) {
                var G = z.getBoundingClientRect();
                if (0 < G.bottom && 0 < G.right && G.top < A.innerHeight && G.left < A.innerWidth) {
                  if (C += Ty(z), C > Jo) {
                    ut.length = it;
                    break;
                  }
                  z = new Promise(
                    sx.bind(z)
                  ), ut.push(z);
                }
              }
            }
          if (0 < ut.length)
            return A = Promise.race([
              Promise.all(ut),
              new Promise(function(st) {
                return setTimeout(st, 500);
              })
            ]).then(s, s), (R ? Promise.allSettled([R.finished, A]) : A).then(u, u);
          if (s(), R)
            return R.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      M.__reactViewTransition = V;
      var Y = [];
      return V.ready.then(
        function() {
          for (var A = M.documentElement.getAnimations({
            subtree: !0
          }), R = 0; R < A.length; R++) {
            var it = A[R], ut = it.effect, Et = ut.pseudoElement;
            if (Et != null && Et.startsWith("::view-transition")) {
              Y.push(it), it = ut.getKeyframes();
              for (var C = Et = void 0, E = !0, z = 0; z < it.length; z++) {
                var G = it[z], st = G.width;
                if (Et === void 0) Et = st;
                else if (Et !== st) {
                  E = !1;
                  break;
                }
                if (st = G.height, C === void 0) C = st;
                else if (C !== st) {
                  E = !1;
                  break;
                }
                delete G.width, delete G.height, G.transform === "none" && delete G.transform;
              }
              E && Et !== void 0 && C !== void 0 && (ut.setKeyframes(it), E = getComputedStyle(
                ut.target,
                ut.pseudoElement
              ), E.width !== Et || E.height !== C) && (E = it[0], E.width = Et, E.height = C, E = it[it.length - 1], E.width = Et, E.height = C, ut.setKeyframes(it));
            }
          }
          f();
        },
        function(A) {
          M.__reactViewTransition === V && (M.__reactViewTransition = null);
          try {
            typeof A == "object" && A !== null && A.name === "InvalidStateError" && (A.message === "View transition was skipped because document visibility state is hidden." || A.message === "Skipping view transition because document visibility state has become hidden." || A.message === "Skipping view transition because viewport size changed." || A.message === "Transition was aborted because of invalid state") && (A = null), A !== null && T(A);
          } finally {
            a(), s(), f();
          }
        }
      ), V.finished.finally(function() {
        for (var A = 0; A < Y.length; A++)
          Y[A].cancel();
        M.__reactViewTransition === V && (M.__reactViewTransition = null), p();
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
  function ey(t) {
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
      if (iy(u, t, e, n) === -1) {
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
          rx,
          t,
          p,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function rx(t, e, n, a) {
    return N(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  Je.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = iy(
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
        ux,
        t,
        n,
        s
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function ux(t, e, n, a) {
    return N(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function Wa(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function ny(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function iy(t, e, n, a) {
    if (t.length === 0) return -1;
    a = ny(a);
    for (var s = 0; s < t.length; s++) {
      var u = t[s];
      if (u.type === e && u.listener === n && ny(u.optionsOrUseCapture) === a)
        return s;
    }
    return -1;
  }
  Je.prototype.dispatchEvent = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = N(e);
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
      ay,
      t,
      void 0,
      void 0
    );
  };
  function ay(t, e) {
    return t.tag === 6 ? !1 : (t = N(t), Tx(t, e));
  }
  Je.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      sf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !ay(e[n], t); n--) ;
  };
  function sf(t, e) {
    return e.push(t), !1;
  }
  Je.prototype.blur = function() {
    var t = S(
      this._fragmentFiber
    );
    t !== null && (t = N(t), t = ts(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      cx,
      t,
      void 0,
      void 0
    ));
  };
  function cx(t, e) {
    return t.tag === 6 ? !1 : (t = N(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Je.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      fx,
      t,
      void 0,
      void 0
    );
  };
  function fx(t, e) {
    return t.tag === 6 || (t = N(t), e.observe(t)), !1;
  }
  Je.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        dx,
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
  function dx(t, e) {
    return t.tag === 6 || (t = N(t), e.unobserve(t)), !1;
  }
  var pn = [], of = !1;
  function hx(t, e, n) {
    pn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), of || (of = !0, xx(function() {
      of = !1;
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
      mx,
      t,
      void 0,
      void 0
    ), t;
  };
  function mx(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = N(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Je.prototype.getRootNode = function(t) {
    var e = S(
      this._fragmentFiber
    );
    return e === null ? this : N(e).getRootNode(t);
  }, Je.prototype.compareDocumentPosition = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    y(
      this._fragmentFiber.child,
      !1,
      sf,
      n,
      void 0,
      void 0
    );
    var a = N(e);
    if (n.length === 0) {
      if (n = a, O(this._fragmentFiber)) {
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
      return n === t ? s = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = D(e)[1], n === null ? s = Node.DOCUMENT_POSITION_PRECEDING : (t = N(n).compareDocumentPosition(
        t
      ), s = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), s |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = N(n[0]), s = N(n[n.length - 1]);
    var u = O(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(s) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var f = e.compareDocumentPosition(t), p = s.compareDocumentPosition(t), T = f & Node.DOCUMENT_POSITION_CONTAINED_BY || p & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return p = a && u && f & Node.DOCUMENT_POSITION_FOLLOWING && p & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && s === t || T || p ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && s === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : f, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || px(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function px(t, e, n, a, s) {
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
      dt
    ), e === null ? e = !1 : (y(
      e,
      !0,
      q,
      u,
      n
    ), u = P, P = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === a) && (e = at(
      a,
      u,
      dt
    ), e === null ? e = !1 : (y(
      e,
      !0,
      Q,
      u,
      a
    ), u = P, J = P = null, e = u !== null)), e) : !1;
  }
  function ly(t, e) {
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
      sf,
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
        t = N(a), ly(t, n);
        return;
      }
      if (a = N(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var s = e[a];
      s.tag === 6 ? (s = N(s), ly(s, n)) : N(s).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function gx(t, e) {
    return t = N(t), sy(t, e), !1;
  }
  function sy(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function oy(t, e) {
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
    }), sy(t, e));
  }
  function yx(t, e) {
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
      typeof u.rootMargin == "string" ? hx(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function rf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          rf(n), Us(n);
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
  function vx(t, e, n, a) {
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
  function bx(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = on(t.nextSibling), t === null)) return null;
    return t;
  }
  function ry(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = on(t.nextSibling), t === null)) return null;
    return t;
  }
  function uf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function cf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Sx(t, e) {
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
  var ff = null;
  function uy(t) {
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
  function cy(t) {
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
  function Tx(t, e) {
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
  function xx(t) {
    Fg(function() {
      Fg(function(e) {
        return t(e);
      });
    });
  }
  function fy(t, e, n) {
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
  function dy(t, e, n) {
    for (var a in n) {
      var s = n[a];
      n.hasOwnProperty(a) && s != null && Ht(t, e, a, null, IT, s);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Tn && (t.onclick = null), Us(t);
  }
  function df(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    Us(t);
  }
  var rn = /* @__PURE__ */ new Map(), hy = /* @__PURE__ */ new Set();
  function es(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var Fn = ht.d;
  ht.d = {
    f: Ex,
    r: Ax,
    D: Cx,
    C: Mx,
    L: wx,
    m: Dx,
    X: Ox,
    S: zx,
    M: Rx
  };
  function Ex() {
    var t = Fn.f(), e = Go();
    return t || e;
  }
  function Ax(t) {
    var e = ya(t);
    e !== null && e.tag === 5 && e.type === "form" ? pp(e) : Fn.r(t);
  }
  var $a = typeof document > "u" ? null : document;
  function my(t, e, n) {
    var a = $a;
    if (a && typeof e == "string" && e) {
      var s = $e(e);
      s = 'link[rel="' + t + '"][href="' + s + '"]', typeof n == "string" && (s += '[crossorigin="' + n + '"]'), hy.has(s) || (hy.add(s), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(s) === null && (e = a.createElement("link"), be(e, "link", t), ce(e), a.head.appendChild(e)));
    }
  }
  function Cx(t) {
    Fn.D(t), my("dns-prefetch", t, null);
  }
  function Mx(t, e) {
    Fn.C(t, e), my("preconnect", t, e);
  }
  function wx(t, e, n) {
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
          wh(f);
        }), ce(f), a.head.appendChild(f);
      }
    }
  }
  function Dx(t, e) {
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
  function zx(t, e, n) {
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
          ), (n = rn.get(u)) && hf(t, n);
          var T = f = a.createElement("link");
          ce(T), be(T, "link", t), T._p = new Promise(function(M, V) {
            T.onload = M, T.onerror = V;
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
  function Ox(t, e) {
    Fn.X(t, e);
    var n = $a;
    if (n && t) {
      var a = va(n).hoistableScripts, s = el(t), u = a.get(s);
      u || (u = n.querySelector(is(s)), u || (t = j({ src: t, async: !0 }, e), (e = rn.get(s)) && mf(t, e), u = n.createElement("script"), ce(u), be(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function Rx(t, e) {
    Fn.M(t, e);
    var n = $a;
    if (n && t) {
      var a = va(n).hoistableScripts, s = el(t), u = a.get(s);
      u || (u = n.querySelector(is(s)), u || (t = j({ src: t, async: !0, type: "module" }, e), (e = rn.get(s)) && mf(t, e), u = n.createElement("script"), ce(u), be(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(s, u));
    }
  }
  function py(t, e, n, a) {
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
          }, rn.set(t, u)), Nx(
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
  function gy(t) {
    return j({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function Nx(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[js] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[js] = !0, e.onload = e.onerror = wh.bind(null, e), be(e, "link", n), ce(e), t.head.appendChild(e);
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
  function yy(t, e, n) {
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
          a = gy(n), (s = rn.get(s)) && hf(a, s), u = (t.ownerDocument || t).createElement("link"), ce(u);
          var f = u;
          return f._p = new Promise(function(p, T) {
            f.onload = p, f.onerror = T;
          }), be(u, "link", a), e.state.loading |= 4, Ko(u, n.precedence, t), e.instance = u;
        case "script":
          return u = el(n.src), (s = t.querySelector(
            is(u)
          )) ? (e.instance = s, ce(s), s) : (a = n, (s = rn.get(u)) && (a = j({}, n), mf(a, s)), t = t.ownerDocument || t, s = t.createElement("script"), ce(s), be(s, "link", a), t.head.appendChild(s), e.instance = s);
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
  function hf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function mf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Po = null;
  function vy(t, e, n) {
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
  function pf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function _x(t, e, n) {
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
  function by(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Sy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Ty(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function xy(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Ty(e), t.suspenseyImages.push(e)), t = Ux.bind(t), e.decode().then(t, t));
  }
  function Vx(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var s = tl(a.href), u = e.querySelector(
          ns(s)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = as.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, ce(u);
          return;
        }
        u = e.ownerDocument || e, a = gy(a), (s = rn.get(s)) && hf(a, s), u = u.createElement("link"), ce(u);
        var f = u;
        f._p = new Promise(function(p, T) {
          f.onload = p, f.onerror = T;
        }), be(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = as.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Jo = 0;
  function jx(t, e) {
    return t.stylesheets && t.count === 0 && Io(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Io(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Jo === 0 && (Jo = 62500 * $T());
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
  function Ey(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Io(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function as() {
    this.count--, Ey(this);
  }
  function Ux() {
    this.imgCount--, Ey(this);
  }
  var Fo = null;
  function Io(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Fo = /* @__PURE__ */ new Map(), e.forEach(Bx, t), Fo = null, as.call(t));
  }
  function Bx(t, e) {
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
  function Lx(t, e, n, a, s, u, f, p, T) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Pr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Pr(0), this.hiddenUpdates = Pr(null), this.identifierPrefix = a, this.onUncaughtError = s, this.onCaughtError = u, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ay(t, e, n, a, s, u, f, p, T, M, V, Y) {
    return t = new Lx(
      t,
      e,
      n,
      f,
      T,
      M,
      V,
      Y,
      p
    ), e = 1, u === !0 && (e |= 24), u = _e(3, null, null, e), t.current = u, u.stateNode = t, e = zu(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, _u(u), t;
  }
  function Cy(t) {
    return t ? (t = Da, t) : Da;
  }
  function My(t, e, n, a, s, u) {
    s = Cy(s), a.context === null ? a.context = s : a.pendingContext = s, a = fi(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = di(t, a, e), n !== null && (Be(n, t, e), jl(n, t, e));
  }
  function wy(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function gf(t, e) {
    wy(t, e), (t = t.alternate) && wy(t, e);
  }
  function Dy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Yi(t, 67108864);
      e !== null && Be(e, t, 67108864), gf(t, 67108864);
    }
  }
  function zy(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Pe();
      e = Jr(e);
      var n = Yi(t, e);
      n !== null && Be(n, t, e), gf(t, e);
    }
  }
  var il = !0;
  function Hx(t, e, n, a) {
    var s = lt.T;
    lt.T = null;
    var u = ht.p;
    try {
      ht.p = 2, yf(t, e, n, a);
    } finally {
      ht.p = u, lt.T = s;
    }
  }
  function Gx(t, e, n, a) {
    var s = lt.T;
    lt.T = null;
    var u = ht.p;
    try {
      ht.p = 8, yf(t, e, n, a);
    } finally {
      ht.p = u, lt.T = s;
    }
  }
  function yf(t, e, n, a) {
    if (il) {
      var s = vf(a);
      if (s === null)
        Ic(
          t,
          e,
          a,
          Wo,
          n
        ), Ry(t, a);
      else if (qx(
        s,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (Ry(t, a), e & 4 && -1 < Yx.indexOf(t)) {
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
                p = Yi(u, 2), p !== null && Be(p, u, 2), Go(), gf(u, 2);
            }
          if (u = vf(a), u === null && Ic(
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
        Ic(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function vf(t) {
    return t = nu(t), bf(t);
  }
  var Wo = null;
  function bf(t) {
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
  function Oy(t) {
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
        switch ($1()) {
          case ph:
            return 2;
          case gh:
            return 8;
          case Os:
          case tS:
            return 32;
          case yh:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Sf = !1, Ai = null, Ci = null, Mi = null, ls = /* @__PURE__ */ new Map(), ss = /* @__PURE__ */ new Map(), wi = [], Yx = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Ry(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ai = null;
        break;
      case "dragenter":
      case "dragleave":
        Ci = null;
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
    }, e !== null && (e = ya(e), e !== null && Dy(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, s !== null && e.indexOf(s) === -1 && e.push(s), t);
  }
  function qx(t, e, n, a, s) {
    switch (e) {
      case "focusin":
        return Ai = os(
          Ai,
          t,
          e,
          n,
          a,
          s
        ), !0;
      case "dragenter":
        return Ci = os(
          Ci,
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
  function Ny(t) {
    var e = Bi(t.target);
    if (e !== null) {
      var n = h(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = d(n), e !== null) {
            t.blockedOn = e, Ah(t.priority, function() {
              zy(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, Ah(t.priority, function() {
              zy(n);
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
      var n = vf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        eu = a, n.target.dispatchEvent(a), eu = null;
      } else
        return e = ya(n), e !== null && Dy(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function _y(t, e, n) {
    $o(t) && n.delete(e);
  }
  function Xx() {
    Sf = !1, Ai !== null && $o(Ai) && (Ai = null), Ci !== null && $o(Ci) && (Ci = null), Mi !== null && $o(Mi) && (Mi = null), ls.forEach(_y), ss.forEach(_y);
  }
  function tr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Sf || (Sf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Xx
    )));
  }
  var er = null;
  function Vy(t) {
    er !== t && (er = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        er === t && (er = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], s = t[e + 2];
          if (typeof a != "function") {
            if (bf(a || n) === null)
              continue;
            break;
          }
          var u = ya(n);
          u !== null && (t.splice(e, 3), e -= 3, tc(
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
    Ai !== null && tr(Ai, t), Ci !== null && tr(Ci, t), Mi !== null && tr(Mi, t), ls.forEach(e), ss.forEach(e);
    for (var n = 0; n < wi.length; n++) {
      var a = wi[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < wi.length && (n = wi[0], n.blockedOn === null); )
      Ny(n), n.blockedOn === null && wi.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var s = n[a], u = n[a + 1], f = s[Ne] || null;
        if (typeof u == "function")
          f || Vy(n);
        else if (f) {
          var p = null;
          if (u && u.hasAttribute("formAction")) {
            if (s = u, f = u[Ne] || null)
              p = f.formAction;
            else if (bf(s) !== null) continue;
          } else p = f.action;
          typeof p == "function" ? n[a + 1] = p : (n.splice(a, 3), a -= 3), Vy(n);
        }
      }
  }
  function jy() {
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
  function Tf(t) {
    this._internalRoot = t;
  }
  nr.prototype.render = Tf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = Pe();
    My(n, a, t, e, null, null);
  }, nr.prototype.unmount = Tf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      My(t.current, 2, null, t, null, null), Go(), e[ga] = null;
    }
  };
  function nr(t) {
    this._internalRoot = t;
  }
  nr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = Eh();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < wi.length && e !== 0 && e < wi[n].priority; n++) ;
      wi.splice(n, 0, t), n === 0 && Ny(t);
    }
  };
  var Uy = l.version;
  if (Uy !== "19.3.0")
    throw Error(
      r(
        527,
        Uy,
        "19.3.0"
      )
    );
  ht.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = v(e), t = t !== null ? b(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var kx = {
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
          kx
        ), Ge = ir;
      } catch {
      }
  }
  return us.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, a = "", s = Cp, u = Mp, f = wp;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (s = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (f = e.onRecoverableError)), e = Ay(
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
      jy
    ), t[ga] = e.current, Fc(t), new Tf(e);
  }, us.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var a = !1, s = "", u = Cp, f = Mp, p = wp, T = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (s = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (f = n.onCaughtError), n.onRecoverableError !== void 0 && (p = n.onRecoverableError), n.formState !== void 0 && (T = n.formState)), e = Ay(
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
      jy
    ), e.context = Cy(null), n = e.current, a = Pe(), a = Jr(a), s = fi(a), s.callback = null, di(n, s, a), n = a, e.current.lanes = n, yl(e, n), Rn(e), t[ga] = e.current, Fc(t), new nr(e);
  }, us.version = "19.3.0", us;
}
var Qy;
function eE() {
  if (Qy) return Ef.exports;
  Qy = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Ef.exports = tE(), Ef.exports;
}
var xv = eE(), Z = wd();
const nE = /* @__PURE__ */ Kx(Z), iE = /* @__PURE__ */ Qx({
  __proto__: null,
  default: nE
}, [Z]);
var aE = Tv(), lE = Object.defineProperty, Dd = (i, l) => lE(i, "name", { value: l, configurable: !0 });
function td(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
Dd(td, "setRef");
function Ev(...i) {
  return (l) => {
    let o = !1;
    const r = i.map((c) => {
      const h = td(c, l);
      return !o && typeof h == "function" && (o = !0), h;
    });
    if (o)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const h = r[c];
          typeof h == "function" ? h() : td(i[c], null);
        }
      };
  };
}
Dd(Ev, "composeRefs");
function Av(...i) {
  return Z.useCallback(Ev(...i), i);
}
Dd(Av, "useComposedRefs");
var sE = Object.defineProperty, We = (i, l) => sE(i, "name", { value: l, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function Cv(i) {
  const l = Z.forwardRef((o, r) => {
    let { children: c, ...h } = o, d = null, m = !1;
    const g = [];
    c = Rv(c), Z.Children.forEach(c, (S) => {
      if (zv(S)) {
        m = !0;
        const O = S;
        let D = "child" in O.props ? O.props.child : O.props.children;
        for (; zd(D) && typeof Sr == "function"; )
          D = Sr(D._payload);
        d = rE(O, D), g.push(d?.props?.children);
      } else
        g.push(S);
    }), d ? d = Z.cloneElement(d, void 0, g) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && Z.Children.count(c) === 1 && Z.isValidElement(c) && (d = c)
    );
    const v = d ? Dv(d) : void 0, b = Av(r, v);
    if (!d) {
      if (c || c === 0)
        throw new Error(
          m ? fE(i) : cE(i)
        );
      return c;
    }
    const y = wv(h, d.props ?? {});
    return d.type !== Z.Fragment && (y.ref = r ? b : v), Z.cloneElement(d, y);
  });
  return l.displayName = `${i}.Slot`, l;
}
We(Cv, "createSlot");
var Mv = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function oE(i) {
  const l = /* @__PURE__ */ We((o) => "child" in o ? o.children(o.child) : o.children, "Slottable");
  return l.displayName = `${i}.Slottable`, l.__radixId = Mv, l;
}
We(oE, "createSlottable");
var rE = /* @__PURE__ */ We((i, l) => "child" in i.props ? Z.isValidElement(l) ? Z.cloneElement(l, void 0, i.props.children(l.props.children)) : null : Z.isValidElement(l) ? l : null, "getSlottableElementFromSlottable");
function wv(i, l) {
  const o = { ...l };
  for (const r in l) {
    const c = i[r], h = l[r];
    /^on[A-Z]/.test(r) ? c && h ? o[r] = (...m) => {
      const g = h(...m);
      return c(...m), g;
    } : c && (o[r] = c) : r === "style" ? o[r] = { ...c, ...h } : r === "className" ? o[r] = [c, h].filter(Boolean).join(" ") : r === "aria-describedby" && (o[r] = Nv(h, c));
  }
  return { ...i, ...o };
}
We(wv, "mergeProps");
function Dv(i) {
  let l = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, o = l && "isReactWarning" in l && l.isReactWarning;
  return o ? i.ref : (l = Object.getOwnPropertyDescriptor(i, "ref")?.get, o = l && "isReactWarning" in l && l.isReactWarning, o ? i.props.ref : i.props.ref || i.ref);
}
We(Dv, "getElementRef");
function zv(i) {
  return Z.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === Mv;
}
We(zv, "isSlottable");
var uE = /* @__PURE__ */ Symbol.for("react.lazy");
function zd(i) {
  return i != null && typeof i == "object" && "$$typeof" in i && i.$$typeof === uE && "_payload" in i && Ov(i._payload);
}
We(zd, "isLazyComponent");
function Ov(i) {
  return typeof i == "object" && i !== null && "then" in i;
}
We(Ov, "isPromiseLike");
function Rv(i) {
  let l = i;
  for (; zd(l) && typeof Sr == "function"; )
    l = Sr(l._payload);
  return l;
}
We(Rv, "useUnwrappedLazy");
function Nv(...i) {
  const l = /* @__PURE__ */ new Set();
  for (const o of i)
    if (typeof o == "string")
      for (const r of String(o).trim().split(/\s+/))
        r && l.add(r);
  return l.size > 0 ? Array.from(l).join(" ") : void 0;
}
We(Nv, "concatAriaDescribedby");
var cE = /* @__PURE__ */ We((i) => `${i} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), fE = /* @__PURE__ */ We((i) => `${i} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Sr = iE[" use ".trim().toString()], dE = Object.defineProperty, hE = (i, l) => dE(i, "name", { value: l, configurable: !0 }), mE = [
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
], pE = mE.reduce((i, l) => {
  const o = /* @__PURE__ */ Cv(`Primitive.${l}`), r = Z.forwardRef((c, h) => {
    const { asChild: d, ...m } = c, g = d ? o : l;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ B.jsx(g, { ...m, ref: h });
  });
  return r.displayName = `Primitive.${l}`, { ...i, [l]: r };
}, {});
function gE(i, l) {
  i && aE.flushSync(() => i.dispatchEvent(l));
}
hE(gE, "dispatchDiscreteCustomEvent");
var yE = Object.defineProperty, _v = (i, l) => yE(i, "name", { value: l, configurable: !0 }), Od = {
  Horizontal: "horizontal",
  Vertical: "vertical"
}, Ky = Od.Horizontal, vE = Object.values(Od), Vv = /* @__PURE__ */ Z.forwardRef(
  /* @__PURE__ */ _v(function(l, o) {
    const { decorative: r, orientation: c = Ky, ...h } = l, d = jv(c) ? c : Ky, m = d === Od.Vertical ? d : void 0, g = r ? { role: "none" } : { "aria-orientation": m, role: "separator" };
    return /* @__PURE__ */ B.jsx(
      pE.div,
      {
        "data-orientation": d,
        ...g,
        ...h,
        ref: o
      }
    );
  }, "Separator")
);
function jv(i) {
  return vE.includes(i);
}
_v(jv, "isValidOrientation");
function Uv(i) {
  var l, o, r = "";
  if (typeof i == "string" || typeof i == "number") r += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var c = i.length;
    for (l = 0; l < c; l++) i[l] && (o = Uv(i[l])) && (r && (r += " "), r += o);
  } else for (o in i) i[o] && (r && (r += " "), r += o);
  return r;
}
function bE() {
  for (var i, l, o = 0, r = "", c = arguments.length; o < c; o++) (i = arguments[o]) && (l = Uv(i)) && (r && (r += " "), r += l);
  return r;
}
const SE = (i, l) => {
  const o = new Array(i.length + l.length);
  for (let r = 0; r < i.length; r++)
    o[r] = i[r];
  for (let r = 0; r < l.length; r++)
    o[i.length + r] = l[r];
  return o;
}, TE = (i, l) => ({
  classGroupId: i,
  validator: l
}), Bv = (i = /* @__PURE__ */ new Map(), l = null, o) => ({
  nextPart: i,
  validators: l,
  classGroupId: o
}), Tr = "-", Py = [], xE = "arbitrary..", EE = (i) => {
  const l = CE(i), {
    conflictingClassGroups: o,
    conflictingClassGroupModifiers: r
  } = i;
  return {
    getClassGroupId: (d) => {
      if (d.startsWith("[") && d.endsWith("]"))
        return AE(d);
      const m = d.split(Tr), g = m[0] === "" && m.length > 1 ? 1 : 0;
      return Lv(m, g, l);
    },
    getConflictingClassGroupIds: (d, m) => {
      if (m) {
        const g = r[d], v = o[d];
        return g ? v ? SE(v, g) : g : v || Py;
      }
      return o[d] || Py;
    }
  };
}, Lv = (i, l, o) => {
  if (i.length - l === 0)
    return o.classGroupId;
  const c = i[l], h = o.nextPart.get(c);
  if (h) {
    const v = Lv(i, l + 1, h);
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
}, AE = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const l = i.slice(1, -1), o = l.indexOf(":"), r = l.slice(0, o);
  return r ? xE + r : void 0;
})(), CE = (i) => {
  const {
    theme: l,
    classGroups: o
  } = i;
  return ME(o, l);
}, ME = (i, l) => {
  const o = Bv();
  for (const r in i) {
    const c = i[r];
    Rd(c, o, r, l);
  }
  return o;
}, Rd = (i, l, o, r) => {
  const c = i.length;
  for (let h = 0; h < c; h++) {
    const d = i[h];
    wE(d, l, o, r);
  }
}, wE = (i, l, o, r) => {
  if (typeof i == "string") {
    DE(i, l, o);
    return;
  }
  if (typeof i == "function") {
    zE(i, l, o, r);
    return;
  }
  OE(i, l, o, r);
}, DE = (i, l, o) => {
  const r = i === "" ? l : Hv(l, i);
  r.classGroupId = o;
}, zE = (i, l, o, r) => {
  if (RE(i)) {
    Rd(i(r), l, o, r);
    return;
  }
  l.validators === null && (l.validators = []), l.validators.push(TE(o, i));
}, OE = (i, l, o, r) => {
  const c = Object.entries(i), h = c.length;
  for (let d = 0; d < h; d++) {
    const [m, g] = c[d];
    Rd(g, Hv(l, m), o, r);
  }
}, Hv = (i, l) => {
  let o = i;
  const r = l.split(Tr), c = r.length;
  for (let h = 0; h < c; h++) {
    const d = r[h];
    let m = o.nextPart.get(d);
    m || (m = Bv(), o.nextPart.set(d, m)), o = m;
  }
  return o;
}, RE = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, NE = (i) => {
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
}, ed = "!", Jy = ":", _E = [], Fy = (i, l, o, r, c) => ({
  modifiers: i,
  hasImportantModifier: l,
  baseClassName: o,
  maybePostfixModifierPosition: r,
  isExternal: c
}), VE = (i) => {
  const {
    prefix: l,
    experimentalParseClassName: o
  } = i;
  let r = (c) => {
    const h = [];
    let d = 0, m = 0, g = 0, v;
    const b = c.length;
    for (let U = 0; U < b; U++) {
      const N = c[U];
      if (d === 0 && m === 0) {
        if (N === Jy) {
          h.push(c.slice(g, U)), g = U + 1;
          continue;
        }
        if (N === "/") {
          v = U;
          continue;
        }
      }
      N === "[" ? d++ : N === "]" ? d-- : N === "(" ? m++ : N === ")" && m--;
    }
    const y = h.length === 0 ? c : c.slice(g);
    let S = y, O = !1;
    y.endsWith(ed) ? (S = y.slice(0, -1), O = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(ed) && (S = y.slice(1), O = !0)
    );
    const D = v && v > g ? v - g : void 0;
    return Fy(h, O, S, D);
  };
  if (l) {
    const c = l + Jy, h = r;
    r = (d) => d.startsWith(c) ? h(d.slice(c.length)) : Fy(_E, !1, d, void 0, !0);
  }
  if (o) {
    const c = r;
    r = (h) => o({
      className: h,
      parseClassName: c
    });
  }
  return r;
}, jE = (i) => {
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
}, UE = (i) => ({
  cache: NE(i.cacheSize),
  parseClassName: VE(i),
  sortModifiers: jE(i),
  postfixLookupClassGroupIds: BE(i),
  ...EE(i)
}), BE = (i) => {
  const l = /* @__PURE__ */ Object.create(null), o = i.postfixLookupClassGroups;
  if (o)
    for (let r = 0; r < o.length; r++)
      l[o[r]] = !0;
  return l;
}, LE = /\s+/, HE = (i, l) => {
  const {
    parseClassName: o,
    getClassGroupId: r,
    getConflictingClassGroupIds: c,
    sortModifiers: h,
    postfixLookupClassGroupIds: d
  } = l, m = [], g = i.trim().split(LE);
  let v = "";
  for (let b = g.length - 1; b >= 0; b -= 1) {
    const y = g[b], {
      isExternal: S,
      modifiers: O,
      hasImportantModifier: D,
      baseClassName: U,
      maybePostfixModifierPosition: N
    } = o(y);
    if (S) {
      v = y + (v.length > 0 ? " " + v : v);
      continue;
    }
    let P = !!N, J;
    if (P) {
      const j = U.substring(0, N);
      J = r(j);
      const _ = J && d[J] ? r(U) : void 0;
      _ && _ !== J && (J = _, P = !1);
    } else
      J = r(U);
    if (!J) {
      if (!P) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      if (J = r(U), !J) {
        v = y + (v.length > 0 ? " " + v : v);
        continue;
      }
      P = !1;
    }
    const q = O.length === 0 ? "" : O.length === 1 ? O[0] : h(O).join(":"), Q = D ? q + ed : q, dt = Q + J;
    if (m.indexOf(dt) > -1)
      continue;
    m.push(dt);
    const at = c(J, P);
    for (let j = 0; j < at.length; ++j) {
      const _ = at[j];
      m.push(Q + _);
    }
    v = y + (v.length > 0 ? " " + v : v);
  }
  return v;
}, GE = (...i) => {
  let l = 0, o, r, c = "";
  for (; l < i.length; )
    (o = i[l++]) && (r = Gv(o)) && (c && (c += " "), c += r);
  return c;
}, Gv = (i) => {
  if (typeof i == "string")
    return i;
  let l, o = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (l = Gv(i[r])) && (o && (o += " "), o += l);
  return o;
}, YE = (i, ...l) => {
  let o, r, c, h;
  const d = (g) => {
    const v = l.reduce((b, y) => y(b), i());
    return o = UE(v), r = o.cache.get, c = o.cache.set, h = m, m(g);
  }, m = (g) => {
    const v = r(g);
    if (v)
      return v;
    const b = HE(g, o);
    return c(g, b), b;
  };
  return h = d, (...g) => h(GE(...g));
}, qE = [], oe = (i) => {
  const l = (o) => o[i] || qE;
  return l.isThemeGetter = !0, l.themeKey = i, l;
}, Yv = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, qv = /^\((?:(\w[\w-]*):)?(.+)\)$/i, XE = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, kE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, ZE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, QE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, KE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, PE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, zi = (i) => XE.test(i), Mt = (i) => !!i && !Number.isNaN(Number(i)), Nn = (i) => !!i && Number.isInteger(Number(i)), Df = (i) => i.endsWith("%") && Mt(i.slice(0, -1)), In = (i) => kE.test(i), Xv = () => !0, JE = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  ZE.test(i) && !QE.test(i)
), Nd = () => !1, FE = (i) => KE.test(i), IE = (i) => PE.test(i), WE = (i) => !ot(i) && !rt(i), $E = (i) => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)), t2 = (i) => _i(i, Qv, Nd), ot = (i) => Yv.test(i), la = (i) => _i(i, Kv, JE), Iy = (i) => _i(i, r2, Mt), e2 = (i) => _i(i, Jv, Xv), n2 = (i) => _i(i, Pv, Nd), Wy = (i) => _i(i, kv, Nd), i2 = (i) => _i(i, Zv, IE), ar = (i) => _i(i, Fv, FE), rt = (i) => qv.test(i), cs = (i) => ma(i, Kv), a2 = (i) => ma(i, Pv), $y = (i) => ma(i, kv), l2 = (i) => ma(i, Qv), s2 = (i) => ma(i, Zv), lr = (i) => ma(i, Fv, !0), o2 = (i) => ma(i, Jv, !0), _i = (i, l, o) => {
  const r = Yv.exec(i);
  return r ? r[1] ? l(r[1]) : o(r[2]) : !1;
}, ma = (i, l, o = !1) => {
  const r = qv.exec(i);
  return r ? r[1] ? l(r[1]) : o : !1;
}, kv = (i) => i === "position" || i === "percentage", Zv = (i) => i === "image" || i === "url", Qv = (i) => i === "length" || i === "size" || i === "bg-size", Kv = (i) => i === "length", r2 = (i) => i === "number", Pv = (i) => i === "family-name", Jv = (i) => i === "number" || i === "weight", Fv = (i) => i === "shadow", u2 = () => {
  const i = oe("color"), l = oe("font"), o = oe("text"), r = oe("font-weight"), c = oe("tracking"), h = oe("leading"), d = oe("breakpoint"), m = oe("container"), g = oe("spacing"), v = oe("radius"), b = oe("shadow"), y = oe("inset-shadow"), S = oe("text-shadow"), O = oe("drop-shadow"), D = oe("blur"), U = oe("perspective"), N = oe("aspect"), P = oe("ease"), J = oe("animate"), q = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], Q = () => [
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
  ], dt = () => [...Q(), rt, ot], at = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], _ = () => [rt, ot, g], St = () => [zi, "full", "auto", ..._()], gt = () => [Nn, "none", "subgrid", rt, ot], I = () => ["auto", {
    span: ["full", Nn, rt, ot]
  }, Nn, rt, ot], F = () => [Nn, "auto", rt, ot], et = () => ["auto", "min", "max", "fr", rt, ot], nt = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], H = () => ["auto", ..._()], k = () => [zi, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ..._()], $ = () => [m, zi, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ..._()], tt = () => [zi, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ..._()], L = () => [i, rt, ot], bt = () => [...Q(), $y, Wy, {
    position: [rt, ot]
  }], yt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], Rt = () => ["auto", "cover", "contain", l2, t2, {
    size: [rt, ot]
  }], x = () => [Df, cs, la], w = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    v,
    rt,
    ot
  ], X = () => ["", Mt, cs, la], K = () => ["solid", "dashed", "dotted", "double"], pt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ft = () => [Mt, Df, $y, Wy], At = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    D,
    rt,
    ot
  ], lt = () => ["none", Mt, rt, ot], ht = () => ["none", Mt, rt, ot], le = () => [Mt, rt, ot], Re = () => [zi, "full", ..._()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [In],
      breakpoint: [In],
      color: [Xv],
      container: [In],
      "drop-shadow": [In],
      ease: ["in", "out", "in-out"],
      font: [WE],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [In],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [In],
      shadow: [In],
      spacing: ["px", Mt],
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
        aspect: ["auto", "square", zi, ot, rt, N]
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
        "@container": ["", "normal", "size", rt, ot]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [$E],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Mt, "auto", ot, rt, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": q()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": q()
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
        object: dt()
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
        z: [Nn, "auto", rt, ot]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [zi, "full", "auto", m, ..._()]
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
        flex: [Mt, zi, "auto", "initial", "none", ot]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Mt, rt, ot]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Mt, rt, ot]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Nn, "first", "last", "none", rt, ot]
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
        "col-start": F()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": F()
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
        "row-start": F()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": F()
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
        m: H()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: H()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: H()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: H()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: H()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: H()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: H()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: H()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: H()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: H()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: H()
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
        size: k()
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
        w: [m, "screen", ...k()]
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
          ...k()
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
          ...k()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...k()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...k()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...k()]
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
        font: [r, o2, e2]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", Df, ot]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [a2, n2, l]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ot]
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
        tracking: [c, rt, ot]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [Mt, "none", rt, Iy]
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
        "list-image": ["none", rt, ot]
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
        list: ["disc", "decimal", "none", rt, ot]
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
        placeholder: L()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: L()
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
        decoration: [...K(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Mt, "from-font", "auto", rt, la]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: L()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [Mt, "auto", rt, ot]
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
        tab: [Nn, rt, ot]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", rt, ot]
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
        content: ["none", rt, ot]
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
          }, Nn, rt, ot],
          radial: ["", rt, ot],
          conic: ["", Nn, rt, ot]
        }, s2, i2]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: L()
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
        from: L()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: L()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: L()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: w()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": w()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": w()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": w()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": w()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": w()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": w()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": w()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": w()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": w()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": w()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": w()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": w()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": w()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": w()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: X()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": X()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": X()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": X()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": X()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": X()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": X()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": X()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": X()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": X()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": X()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": X()
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
        "divide-y": X()
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
        border: [...K(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...K(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: L()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": L()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": L()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": L()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": L()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": L()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": L()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": L()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": L()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": L()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": L()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: L()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...K(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Mt, rt, ot]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Mt, cs, la]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: L()
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
        shadow: L()
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
        "inset-shadow": L()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: X()
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
        ring: L()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [Mt, la]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": L()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": X()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": L()
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
        "text-shadow": L()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [Mt, rt, ot]
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
        "mask-linear": [Mt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ft()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ft()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": L()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": L()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ft()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ft()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": L()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": L()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ft()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ft()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": L()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": L()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ft()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ft()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": L()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": L()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ft()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ft()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": L()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": L()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ft()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ft()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": L()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": L()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ft()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ft()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": L()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": L()
      }],
      "mask-image-radial": [{
        "mask-radial": [rt, ot]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ft()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ft()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": L()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": L()
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
        "mask-radial-at": Q()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Mt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ft()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ft()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": L()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": L()
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
        mask: ["none", rt, ot]
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
          rt,
          ot
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
        brightness: [Mt, rt, ot]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Mt, rt, ot]
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
          O,
          lr,
          ar
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": L()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", Mt, rt, ot]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Mt, rt, ot]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Mt, rt, ot]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Mt, rt, ot]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Mt, rt, ot]
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
          rt,
          ot
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
        "backdrop-brightness": [Mt, rt, ot]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Mt, rt, ot]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Mt, rt, ot]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Mt, rt, ot]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Mt, rt, ot]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Mt, rt, ot]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Mt, rt, ot]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Mt, rt, ot]
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", rt, ot]
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
        duration: [Mt, "initial", rt, ot]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", P, rt, ot]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [Mt, rt, ot]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", J, rt, ot]
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
        perspective: [U, rt, ot]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": dt()
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
        transform: [rt, ot, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: dt()
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
        zoom: [Nn, rt, ot]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: L()
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
        caret: L()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", rt, ot]
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
        "scrollbar-thumb": L()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": L()
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
        "will-change": ["auto", "scroll", "contents", "transform", rt, ot]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...L()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Mt, cs, la, Iy]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...L()]
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
}, c2 = /* @__PURE__ */ YE(u2);
function Iv(...i) {
  return c2(bE(i));
}
const Wv = Z.forwardRef(({ className: i, orientation: l = "horizontal", decorative: o = !0, ...r }, c) => /* @__PURE__ */ B.jsx(Vv, { ref: c, decorative: o, orientation: l, className: Iv("vt:shrink-0 vt:bg-border", l === "horizontal" ? "vt:h-px vt:w-full" : "vt:h-full vt:w-px", i), ...r }));
Wv.displayName = Vv.displayName;
const f2 = (i) => i?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function d2(i, l, o = []) {
  if (l == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: f2(i),
    size: 24,
    node: l,
    ...o.length > 0 ? { aliases: o } : {}
  };
}
const h2 = (i) => {
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
const m2 = (i) => {
  const l = h2(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
const nd = (...i) => i.filter((l, o, r) => !!l && l.trim() !== "" && r.indexOf(l) === o).join(" ").trim();
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
function zf(i) {
  return i != null;
}
function p2(i, l = {}) {
  const o = l.attributeNames ?? {}, r = (S) => o[S] ?? S, c = i.size ?? i.width ?? sa.width, h = i.size ?? i.height ?? sa.height, d = i.aliases?.filter((S) => typeof S == "string" && S.trim() !== "").map((S) => `lucide-${S}`) ?? [], m = [...i.name ? [`lucide-${i.name}`] : [], ...d], g = l.className?.split(" ").filter(Boolean) ?? [], v = l.includeDefaultClasses === !1 ? nd(...g) : nd("lucide", ...m, ...g), b = l.absoluteStrokeWidth ? Number(l.strokeWidth ?? sa["stroke-width"]) * Number(i.size ?? i.width ?? sa.width) / Number(l.size ?? l.width ?? sa.width) : l.strokeWidth ?? sa["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(sa).reduce((S, [O, D]) => (S[r(O)] = D, S), {}),
      ..."color" in l && l.color && {
        [r("stroke")]: l.color
      },
      ..."size" in l && zf(l.size) && {
        [r("width")]: l.size,
        [r("height")]: l.size
      },
      ..."width" in l && zf(l.width) && {
        [r("width")]: l.width
      },
      ..."height" in l && zf(l.height) && {
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
      const [O, D, U] = S, N = l.nonScalingStroke ? { [r("vector-effect")]: "non-scaling-stroke", ...D } : D;
      return U ? [O, N, U] : [O, N];
    })
  ];
}
function g2(i, l = {}) {
  return p2(i, {
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
const y2 = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
}, v2 = Z.createContext({}), b2 = () => Z.useContext(v2), S2 = Z.forwardRef(
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
      size: O = 24,
      strokeWidth: D = 2,
      absoluteStrokeWidth: U = !1,
      nonScalingStroke: N = !1,
      color: P = "currentColor",
      className: J = ""
    } = b2() ?? {}, q = !!g || y2(y), [Q, dt, at = []] = g2(b, {
      color: i ?? P,
      width: o ?? l ?? O,
      height: r ?? l ?? O,
      strokeWidth: c ?? D,
      absoluteStrokeWidth: h ?? U,
      nonScalingStroke: d ?? N,
      className: nd(J, m),
      hasA11yProp: q,
      attributes: y
    });
    return Z.createElement(
      Q,
      {
        ref: S,
        ...dt
      },
      [
        ...at.map(([j, _]) => Z.createElement(j, _)),
        ...Array.isArray(g) ? g : [g]
      ]
    );
  }
);
function Vi(i, l = [], o = []) {
  const r = typeof i == "string" ? d2(i, l, o) : i, c = Z.forwardRef(
    ({ className: h, ...d }, m) => Z.createElement(S2, {
      ref: m,
      icon: r,
      className: h,
      ...d
    })
  );
  return r.name && (c.displayName = m2(r.name)), c;
}
const $v = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
$v.node;
const T2 = Vi($v);
const tb = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
tb.node;
const t0 = Vi(tb);
const eb = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
eb.node;
const nb = Vi(eb);
const ib = {
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
ib.node;
const x2 = Vi(ib);
const ab = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
ab.node;
const lb = Vi(ab);
const sb = {
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
sb.node;
const ob = Vi(sb);
const rb = {
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
rb.node;
const E2 = Vi(rb);
const ub = {
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
ub.node;
const cb = Vi(ub), fb = Z.createContext({});
function A2(i) {
  const l = Z.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const C2 = typeof window < "u", e0 = C2 ? Z.useLayoutEffect : Z.useEffect, _d = /* @__PURE__ */ Z.createContext(null);
function Vd(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function xr(i, l) {
  const o = i.indexOf(l);
  o > -1 && i.splice(o, 1);
}
const jn = (i, l, o) => o > l ? l : o < i ? i : o;
let Ur = () => {
};
const Vn = {}, jd = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), db = (i) => typeof i == "object" && i !== null, Ud = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function hb(i) {
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
    return Vd(this.subscriptions, l), () => this.remove(l);
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
const un = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, Fe = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, mb = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, Of = (i, l, o) => i * (3 * (1 - i) * ((1 - i) * l + i * o) + i * i);
// @__NO_SIDE_EFFECTS__
function Cs(i, l, o, r) {
  return i === l && o === r ? Sn : (c) => {
    let h = 0, d = 1, m = c;
    for (let g = 0; ; g++) {
      m >= h && m <= d || (m = (h + d) / 2);
      const v = Of(m, i, o) - c;
      if (v * v < 1e-28 || g === 40)
        break;
      v > 0 ? d = m : h = m, m -= v * 1e-7 / (Of(m + 1e-7, i, o) - c - v);
    }
    return Of(m, l, r);
  };
}
const pb = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, gb = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), yb = /* @__PURE__ */ Cs(0.33, 1.53, 0.69, 0.99), Bd = /* @__PURE__ */ gb(yb), vb = /* @__PURE__ */ pb(Bd), bb = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * Bd(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), Ld = (i) => 1 - Math.sin(Math.acos(i)), Sb = /* @__PURE__ */ gb(Ld), Tb = /* @__PURE__ */ pb(Ld), M2 = /* @__PURE__ */ Cs(0.42, 0, 1, 1), w2 = /* @__PURE__ */ Cs(0, 0, 0.58, 1), Hd = /* @__PURE__ */ Cs(0.42, 0, 0.58, 1), D2 = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", Gd = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", z2 = {
  linear: Sn,
  easeIn: M2,
  easeInOut: Hd,
  easeOut: w2,
  circIn: Ld,
  circInOut: Tb,
  circOut: Sb,
  backIn: Bd,
  backInOut: vb,
  backOut: yb,
  anticipate: bb
}, O2 = (i) => typeof i == "string", n0 = (i) => {
  if (/* @__PURE__ */ Gd(i)) {
    Ur(i.length === 4);
    const [l, o, r, c] = i;
    return /* @__PURE__ */ Cs(l, o, r, c);
  } else if (O2(i))
    return z2[i];
  return i;
}, ae = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let fr;
function R2() {
  fr = void 0;
}
const Pt = {
  now: () => (fr === void 0 && Pt.set(ae.isProcessing || Vn.useManualTiming ? ae.timestamp : performance.now()), fr),
  set: (i) => {
    fr = i, queueMicrotask(R2);
  }
}, fl = (i) => Math.round(i * 1e5) / 1e5, xb = (i) => (l) => typeof l == "string" && l.startsWith(i), Eb = /* @__PURE__ */ xb("--"), N2 = /* @__PURE__ */ xb("var(--"), Yd = (i) => N2(i) ? _2.test(i.split("/*")[0].trim()) : !1, _2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Rf(i) {
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
}, qd = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function V2(i) {
  return i == null;
}
const j2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Xd = (i, l) => (o) => !!(typeof o == "string" && j2.test(o) && o.startsWith(i) || l && !V2(o) && Object.prototype.hasOwnProperty.call(o, l)), Ab = (i, l, o) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, h, d, m] = r.match(qd);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(h),
    [o]: parseFloat(d),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, U2 = (i) => jn(0, 255, i), Nf = {
  ...ml,
  transform: (i) => Math.round(U2(i))
}, ra = {
  test: /* @__PURE__ */ Xd("rgb", "red"),
  parse: /* @__PURE__ */ Ab("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: o, alpha: r = 1 }) => "rgba(" + Nf.transform(i) + ", " + Nf.transform(l) + ", " + Nf.transform(o) + ", " + fl(ms.transform(r)) + ")"
};
function B2(i) {
  let l = "", o = "", r = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), o = i.substring(3, 5), r = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), o = i.substring(2, 3), r = i.substring(3, 4), c = i.substring(4, 5), l += l, o += o, r += r, c += c), {
    red: parseInt(l, 16),
    green: parseInt(o, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const id = {
  test: /* @__PURE__ */ Xd("#"),
  parse: B2,
  transform: ra.transform
}, Ms = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), Wn = /* @__PURE__ */ Ms("deg"), _n = /* @__PURE__ */ Ms("%"), ct = /* @__PURE__ */ Ms("px"), L2 = /* @__PURE__ */ Ms("vh"), H2 = /* @__PURE__ */ Ms("vw"), i0 = {
  ..._n,
  parse: (i) => _n.parse(i) / 100,
  transform: (i) => _n.transform(i * 100)
}, sl = {
  test: /* @__PURE__ */ Xd("hsl", "hue"),
  parse: /* @__PURE__ */ Ab("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: o, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + _n.transform(fl(l)) + ", " + _n.transform(fl(o)) + ", " + fl(ms.transform(r)) + ")"
}, ue = {
  test: (i) => ra.test(i) || id.test(i) || sl.test(i),
  parse: (i) => ra.test(i) ? ra.parse(i) : sl.test(i) ? sl.parse(i) : id.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ra.transform(i) : sl.transform(i),
  getAnimatableNone: (i) => {
    const l = ue.parse(i);
    return l.alpha = 0, ue.transform(l);
  }
}, G2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, Cb = /* @__PURE__ */ new RegExp(qd.source), Mb = /* @__PURE__ */ new RegExp(G2.source, "i");
function Y2(i) {
  return isNaN(i) && typeof i == "string" && (Cb.test(i) || Mb.test(i));
}
const wb = "number", Db = "color", q2 = "var", X2 = "var(", a0 = "${}", k2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Z2(i) {
  const l = i.toString();
  return Cb.test(l) || Mb.test(l);
}
function ps(i) {
  const l = i.toString(), o = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let h = 0;
  const m = l.replace(k2, (g) => (ue.test(g) ? (r.color.push(h), c.push(Db), o.push(ue.parse(g))) : g.startsWith(X2) ? (r.var.push(h), c.push(q2), o.push(g)) : (r.number.push(h), c.push(wb), o.push(parseFloat(g))), ++h, a0)).split(a0);
  return { values: o, split: m, indexes: r, types: c };
}
function Q2(i) {
  return ps(i).values;
}
function zb({ split: i, types: l }) {
  const o = i.length;
  return (r) => {
    let c = "";
    for (let h = 0; h < o; h++)
      if (c += i[h], r[h] !== void 0) {
        const d = l[h];
        d === wb ? c += fl(r[h]) : d === Db ? c += ue.transform(r[h]) : c += r[h];
      }
    return c;
  };
}
function K2(i) {
  return zb(ps(i));
}
const P2 = (i) => typeof i == "number" ? 0 : ue.test(i) ? ue.getAnimatableNone(i) : i, J2 = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : P2(i);
function F2(i) {
  const l = ps(i);
  return zb(l)(l.values.map((r, c) => J2(r, l.split[c])));
}
const Ie = {
  test: Y2,
  parse: Q2,
  createTransformer: K2,
  getAnimatableNone: F2
};
function _f(i, l, o) {
  return o < 0 && (o += 1), o > 1 && (o -= 1), o < 1 / 6 ? i + (l - i) * 6 * o : o < 1 / 2 ? l : o < 2 / 3 ? i + (l - i) * (2 / 3 - o) * 6 : i;
}
function I2({ hue: i, saturation: l, lightness: o, alpha: r }) {
  i /= 360, l /= 100, o /= 100;
  let c = 0, h = 0, d = 0;
  if (!l)
    c = h = d = o;
  else {
    const m = o < 0.5 ? o * (1 + l) : o + l - o * l, g = 2 * o - m;
    c = _f(g, m, i + 1 / 3), h = _f(g, m, i), d = _f(g, m, i - 1 / 3);
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
const Gt = (i, l, o) => i + (l - i) * o, Vf = (i, l, o) => {
  const r = i * i, c = o * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, W2 = [id, ra, sl], $2 = (i) => W2.find((l) => l.test(i));
function l0(i) {
  const l = $2(i);
  if (!l)
    return !1;
  let o = l.parse(i);
  return l === sl && (o = I2(o)), o;
}
const s0 = (i, l) => {
  const o = l0(i), r = l0(l);
  if (!o || !r)
    return Ar(i, l);
  const c = { ...o };
  return (h) => (c.red = Vf(o.red, r.red, h), c.green = Vf(o.green, r.green, h), c.blue = Vf(o.blue, r.blue, h), c.alpha = Gt(o.alpha, r.alpha, h), ra.transform(c));
}, ad = /* @__PURE__ */ new Set(["none", "hidden"]);
function tA(i, l) {
  return ad.has(i) ? (o) => o <= 0 ? i : l : (o) => o >= 1 ? l : i;
}
function eA(i, l) {
  return (o) => Gt(i, l, o);
}
function kd(i) {
  return typeof i == "number" ? eA : typeof i == "string" ? Yd(i) ? Ar : ue.test(i) ? s0 : aA : Array.isArray(i) ? Ob : typeof i == "object" ? ue.test(i) ? s0 : nA : Ar;
}
function Ob(i, l) {
  const o = [...i], r = o.length, c = i.map((h, d) => kd(h)(h, l[d]));
  return (h) => {
    for (let d = 0; d < r; d++)
      o[d] = c[d](h);
    return o;
  };
}
function nA(i, l) {
  const o = { ...i, ...l }, r = {};
  for (const c in o)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = kd(i[c])(i[c], l[c]));
  return (c) => {
    for (const h in r)
      o[h] = r[h](c);
    return o;
  };
}
function iA(i, l) {
  const o = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const h = l.types[c], d = i.indexes[h][r[h]], m = i.values[d] ?? 0;
    o[c] = m, r[h]++;
  }
  return o;
}
const aA = (i, l) => {
  const o = Ie.createTransformer(l), r = ps(i), c = ps(l);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? ad.has(i) && !c.values.length || ad.has(l) && !r.values.length ? tA(i, l) : As(Ob(iA(r, c), c.values), o) : Ar(i, l);
}, o0 = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function lA(i, l) {
  const o = o0.exec(i);
  if (!o)
    return;
  const r = o0.exec(l);
  if (!r || o[2] !== r[2])
    return;
  const c = o[2], h = parseFloat(o[1]), d = parseFloat(r[1]);
  return (m) => fl(Gt(h, d, m)) + c;
}
function Zd(i, l, o) {
  if (typeof i == "number" && typeof l == "number" && typeof o == "number")
    return Gt(i, l, o);
  if (typeof i == "string" && typeof l == "string") {
    const c = lA(i, l);
    if (c)
      return c;
  }
  return kd(i)(i, l);
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
function sA(i) {
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
      const O = y && r ? l : o;
      return b && h.add(v), O.add(v), v;
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
const oA = 40;
function Rb(i, l, o = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let r = !1, c = !0;
  const h = () => r = !0, d = or.reduce((q, Q) => (q[Q] = sA(h), q), {}), { setup: m, read: g, resolveKeyframes: v, preUpdate: b, update: y, preRender: S, render: O, postRender: D } = d, U = () => {
    const q = Vn.useManualTiming, Q = q ? o.timestamp : performance.now();
    r = !1, q || (o.delta = c ? 1e3 / 60 : Math.max(Math.min(Q - o.timestamp, oA), 1)), o.timestamp = Q, o.isProcessing = !0, m.process(o), g.process(o), v.process(o), b.process(o), y.process(o), S.process(o), O.process(o), D.process(o), o.isProcessing = !1, r && l && (c = !1, i(U));
  }, N = () => {
    r = !0, c = !0, o.isProcessing || i(U);
  };
  return { schedule: or.reduce((q, Q) => {
    const dt = d[Q];
    return q[Q] = (at, j = !1, _ = !1) => (r || N(), dt.schedule(at, j, _)), q;
  }, {}), cancel: (q) => {
    for (let Q = 0; Q < or.length; Q++)
      d[or[Q]].cancel(q);
  }, state: o, steps: d };
}
const { schedule: qt, cancel: Ni, steps: jf } = /* @__PURE__ */ Rb(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Sn, !0, ae), Nb = (i) => {
  const l = ({ timestamp: o }) => i(o);
  return {
    start: (o = !0) => qt.update(l, o),
    stop: () => Ni(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ae.isProcessing ? ae.timestamp : Pt.now()
  };
}, _b = (i, l, o = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / o), 2);
  for (let h = 0; h < c; h++)
    r += Math.round(i(h / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Qd = 2e4;
function Kd(i, l = 50, o = Qd, r) {
  let c = 0, h = i.next(c);
  for (; !h.done && c < o; )
    c += l, h = i.next(c);
  return c >= o ? 1 / 0 : c;
}
function rA(i, l = 100, o) {
  const { keyframes: r, velocity: c } = i, h = r && r[r.length - 1] - r[0], d = o({
    ...i,
    velocity: c && h ? c * l / h : c,
    keyframes: [0, l]
  }), m = Math.min(Kd(d), Qd);
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
}, Vb = (i) => i < 0 ? 1 / Math.max(1 + i, Te.minDamping) : Math.max(1 - i, Te.minDamping);
function jb(i, l) {
  if (!(i > 1))
    return 1;
  const o = Math.sqrt(i * i - 1), r = i - o, c = i + o, h = 2 * o * Math.exp(-l) * (1 + l);
  return Ub((d) => c * Math.exp(-r * d) - r * Math.exp(-c * d) - h, (d) => Math.exp(-c * d) - Math.exp(-r * d), l) / l;
}
function ld(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const uA = 12;
function Ub(i, l, o) {
  let r = o;
  for (let c = 1; c < uA; c++)
    r = r - i(r) / l(r);
  return r;
}
const Uf = 1e-3;
function cA({ duration: i = Te.duration, bounce: l = Te.bounce }) {
  let o, r;
  const c = Vb(l);
  i = jn(Te.minDuration, Te.maxDuration, /* @__PURE__ */ Fe(i)), c < 1 ? (o = (v) => {
    const b = v * c, y = b * i, S = ld(v, c), O = Math.exp(-y);
    return Uf - b / S * O;
  }, r = (v) => {
    const y = v * c * i, S = c * c * v * v * i, O = Math.exp(-y), D = ld(v * v, c);
    return (-o(v) + Uf > 0 ? -1 : 1) * -S * O / D;
  }) : (o = (v) => {
    const b = Math.exp(-v * i), y = v * i + 1;
    return -Uf + b * y;
  }, r = (v) => {
    const b = Math.exp(-v * i), y = -v * (i * i);
    return b * y;
  });
  const h = 5 / i, d = Ub(o, r, h), m = d * jb(c, d * i), g = m * m;
  return {
    stiffness: g,
    damping: c * 2 * Math.sqrt(g),
    duration: /* @__PURE__ */ un(i)
  };
}
const sd = (i, l) => (l ? i >= 0 : i > 0) && i < 1 / 0;
function Bf(i, l) {
  if (sd(i, l))
    return i;
}
function fA(i) {
  const l = Bf(i.stiffness), o = Bf(i.damping, !0), r = Bf(i.mass), c = {
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
      const h = Vb(i.bounce || 0), d = 2 * Math.PI / (i.visualDuration * 1.2) * jb(h, 2 * Math.PI / 1.2);
      c.stiffness = d * d, c.damping = 2 * h * Math.sqrt(c.stiffness);
    } else
      Object.assign(c, cA(c)), c.isResolvedFromDuration = !0;
    (!sd(c.stiffness) || !sd(c.damping, !0)) && (c.stiffness = Te.stiffness, c.damping = Te.damping);
  }
  return c;
}
function Cr(i = Te.visualDuration, l = Te.bounce) {
  const o = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i, r = o.keyframes[0], c = o.keyframes[o.keyframes.length - 1], h = { done: !1, value: r }, { stiffness: d, damping: m, mass: g, duration: v, isResolvedFromDuration: b, isTimeDefined: y } = fA({ ...o }), S = (j) => y ? 0 : -/* @__PURE__ */ Fe(j), O = m / (2 * Math.sqrt(d * g)), D = /* @__PURE__ */ Fe(Math.sqrt(d / g)), U = O * D, N = {
    target: c,
    delta: c - r,
    velocity: S(o.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, P = () => {
    const j = Math.abs(N.delta) < 5;
    N.restSpeed = o.restSpeed || (j ? Te.restSpeed.granular : Te.restSpeed.default), N.restDelta = o.restDelta || (j ? Te.restDelta.granular : Te.restDelta.default);
  };
  P();
  let J, q, Q;
  if (O < 1) {
    const j = ld(D, O), _ = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    Q = () => {
      _.A = (N.velocity + U * N.delta) / j, _.sinC = U * _.A + N.delta * j, _.cosC = U * N.delta - _.A * j;
    };
    const St = (gt) => {
      gt !== _.t && (_.t = gt, _.env = Math.exp(-U * gt), _.sin = Math.sin(j * gt), _.cos = Math.cos(j * gt));
    };
    J = (gt) => (St(gt), N.target - _.env * (_.A * _.sin + N.delta * _.cos)), q = (gt) => (St(gt), _.env * (_.sinC * _.sin + _.cosC * _.cos));
  } else if (O === 1) {
    J = (_) => N.target - Math.exp(-D * _) * (N.delta + (N.velocity + D * N.delta) * _);
    const j = { C: 0 };
    Q = () => {
      j.C = N.velocity + D * N.delta;
    }, q = (_) => Math.exp(-D * _) * (D * j.C * _ - N.velocity);
  } else {
    const j = D * Math.sqrt(O * O - 1), _ = U - j, St = U + j, gt = y ? 1 / 0 : 300 / j, I = (et, nt) => Math.exp(nt > gt ? -et * gt - U * (nt - gt) : -et * nt), F = { S: 0, F: 0 };
    Q = () => {
      const et = (N.velocity + U * N.delta) / j;
      F.S = (N.delta + et) / 2, F.F = (N.delta - et) / 2;
    }, J = (et) => N.target - F.S * I(_, et) - F.F * I(St, et), q = (et) => _ * F.S * I(_, et) + St * F.F * I(St, et);
  }
  Q();
  const dt = b && v || null, at = {
    calculatedDuration: dt,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (j, _) => {
      N.target = j[j.length - 1], N.delta = N.target - j[0], N.velocity = S(_), o.restSpeed && o.restDelta || P(), at.calculatedDuration = dt, h.done = !1, Q();
    },
    velocity: (j) => /* @__PURE__ */ un(q(j)),
    next: (j) => {
      const _ = J(j);
      if (b)
        h.done = j >= v;
      else {
        const St = /* @__PURE__ */ un(q(j));
        h.done = Math.abs(St) <= N.restSpeed && Math.abs(N.target - _) <= N.restDelta;
      }
      return h.value = h.done ? N.target : _, h;
    },
    toString: () => {
      const j = Math.min(Kd(at), Qd), _ = _b((St) => at.next(j * St).value, j, 30);
      return j + "ms " + _;
    },
    toTransition: () => {
    }
  };
  return at;
}
Cr.applyToOptions = (i) => {
  const l = rA(i, 100, Cr);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ un(l.duration), i.type = "keyframes", i;
};
function Mr({ keyframes: i, velocity: l = 0, power: o = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: h = 500, modifyTarget: d, min: m, max: g, restDelta: v = 0.5, restSpeed: b }) {
  const y = i[0], S = {
    done: !1,
    value: y
  }, O = (j) => j < m || j > g, D = (j) => m === void 0 ? g : g === void 0 || Math.abs(m - j) < Math.abs(g - j) ? m : g;
  let U = o * l;
  const N = y + U, P = d === void 0 ? N : d(N);
  P !== N && (U = P - y);
  const J = (j) => -U * Math.exp(-j / r), q = (j) => {
    const _ = J(j);
    S.done = Math.abs(_) <= v, S.value = S.done ? P : P + _;
  };
  let Q, dt;
  const at = (j) => {
    O(S.value) && (Q = j, dt = Cr({
      keyframes: [S.value, D(S.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -J(j) / r * 1e3,
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
      return !dt && Q === void 0 && (_ = !0, q(j), at(j)), Q !== void 0 && j >= Q ? dt.next(j - Q) : (!_ && q(j), S);
    }
  };
}
function dA(i, l, o) {
  const r = [], c = o || Vn.mix || Zd, h = i.length - 1;
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
function hA(i, l, { clamp: o = !0, ease: r, mixer: c } = {}) {
  const h = i.length;
  if (Ur(h === l.length), h === 1)
    return () => l[0];
  if (h === 2 && l[0] === l[1])
    return () => l[1];
  const d = i[0] === i[1];
  i[0] > i[h - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = dA(l, r, c), g = m.length, v = (b) => {
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
function mA(i, l) {
  const o = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ ha(0, l, r);
    i.push(Gt(o, 1, c));
  }
}
function Bb(i) {
  const l = [0];
  return mA(l, i.length - 1), l;
}
function pA(i, l) {
  return i.map((o) => o * l);
}
function gA(i, l) {
  return i.map(() => l || Hd).splice(0, i.length - 1);
}
function Oi({ duration: i = 300, keyframes: l, times: o, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ D2(r) ? r.map(n0) : n0(r) || Hd, h = {
    done: !1,
    value: l[0]
  };
  if (l.length === 2 && !Array.isArray(c) && (!o || o.length !== 2 || o[0] === 0 && o[1] === 1)) {
    const [g, v] = l, b = g === v ? void 0 : (Vn.mix || Zd)(g, v);
    return {
      calculatedDuration: i,
      next: (y) => (h.value = b ? b(c(i > 0 ? jn(0, 1, y / i) : 1)) : v, h.done = y >= i, h)
    };
  }
  const d = pA(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    o && o.length === l.length ? o : Bb(l),
    i
  ), m = hA(d, l, {
    ease: Array.isArray(c) ? c : gA(l, c)
  });
  return {
    calculatedDuration: i,
    next: (g) => (h.value = m(g), h.done = g >= i, h)
  };
}
const yA = 5;
function vA(i, l, o) {
  const r = Math.max(l - yA, 0);
  return /* @__PURE__ */ mb(o - i(r), l - r);
}
function bA(i, l, o = 0) {
  return l <= 0 ? o : i.velocity ? i.velocity(l) : vA((r) => i.next(r).value, l, i.next(l).value);
}
const SA = (i) => i !== null;
function gs(i, { repeat: l, repeatType: o = "loop" }, r, c = 1) {
  const h = i.filter(SA), m = c < 0 || l && o !== "loop" && l % 2 === 1 ? 0 : h.length - 1;
  return !m || r === void 0 ? h[m] : r;
}
const TA = {
  decay: Mr,
  inertia: Mr,
  tween: Oi,
  keyframes: Oi,
  spring: Cr
};
function Lb(i) {
  typeof i.type == "string" && (i.type = TA[i.type]);
}
const xA = 40, Hb = (i, l) => l - i > xA && !Vn.useManualTiming ? l : i;
function Gb(i, l) {
  return {
    kind: i,
    animation: l,
    timestamp: Pt.now(),
    frameTimestamp: ae.timestamp,
    frameIsProcessing: ae.isProcessing
  };
}
function Yb(i, l, o) {
  const r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({
        ...Gb("animation-start", i),
        options: o ? { ...l, ...o } : l
      });
    } catch {
    }
}
function EA(i, l) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...Gb("layout-animation-start", i),
        node: l
      });
    } catch {
    }
}
class Pd {
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
const AA = (i) => i / 100, od = (i) => Math.round(i * 1e4) / 1e4;
class ys extends Pd {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: o } = this.options;
      o && o.updatedAt !== Pt.now() && this.tick(Pt.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause(), Yb(this, this.options);
  }
  initAnimation() {
    const { options: l } = this;
    Lb(l);
    const { type: o = Oi, repeat: r = 0, repeatDelay: c = 0, repeatType: h, velocity: d = 0 } = l;
    let { keyframes: m } = l;
    const g = o || Oi;
    g !== Oi && typeof m[0] != "number" && (this.mixKeyframes = As(AA, Zd(m[0], m[1])), m = [0, 100]);
    const v = g(m === l.keyframes ? l : { ...l, keyframes: m });
    h === "mirror" && (this.mirroredGenerator = g({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -d
    })), v.calculatedDuration === null && (v.calculatedDuration = Kd(v));
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
    this.startTime === this.pendingStartTime && (this.startTime = Hb(this.startTime, l)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), o ? this.currentTime = l : this.updateTime(l);
    const y = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1), S = this.playbackSpeed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    const O = this.generate(this.currentTime, S);
    let { done: D } = O;
    !S && h !== null && (D = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const U = this.holdTime === null && (this.state === "finished" || this.state === "running" && D);
    return U && g !== Mr && (O.value = gs(m, this.options, b, this.speed)), v && v(O.value), U && this.finish(), O;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(l) {
    return this.holdTime ?? od((l - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(l, o) {
    const { options: r, totalDuration: c } = this, h = this.at(l) - (r.delay || 0);
    return h >= c && r.type !== Mr ? gs(r.keyframes, r, o ? void 0 : r.finalKeyframe) : this.generate(Math.max(h, 0), h < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(l, o) {
    const { generator: r, totalDuration: c, mixKeyframes: h, mirroredGenerator: d, resolvedDuration: m } = this, { keyframes: g, repeat: v, repeatType: b, repeatDelay: y } = this.options;
    let S = l, O = r;
    if (v) {
      const U = Math.min(l, c) / m;
      let N = Math.floor(U), P = U % 1;
      !P && U >= 1 && (P = 1), P === 1 && N--, N = Math.min(N, v + 1), N % 2 && (b === "reverse" ? (P = 1 - P, y && (P -= y / m)) : b === "mirror" && (O = d)), S = jn(0, 1, P) * m;
    }
    let D;
    return o ? (this.delayState.value = g[0], D = this.delayState) : D = O.next(S), h && !o && (D.value = h(D.value)), D;
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
    return bA(this.generator, this.currentTime, this.options.velocity);
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
    const { driver: l = Nb, startTime: o } = this.options;
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
const CA = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function MA(i) {
  const [l, o] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [r] = o.match(qd) || [];
  if (!r)
    return i;
  const c = o.replace(r, "");
  let h = CA.has(l) ? 1 : 0;
  return r !== o && (h *= 100), l + "(" + h + c + ")";
}
const wA = /\b([a-z-]*)\(.*?\)/gu, rd = {
  ...Ie,
  getAnimatableNone: (i) => {
    const l = i.match(wA);
    return l ? l.map(MA).join(" ") : i;
  }
}, ud = {
  ...Ie,
  getAnimatableNone: (i) => {
    const l = Ie.parse(i);
    return Ie.createTransformer(i)(l.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, r0 = {
  ...ml,
  transform: Math.round
}, DA = {
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
  distance: ct,
  translateX: ct,
  translateY: ct,
  translateZ: ct,
  x: ct,
  y: ct,
  z: ct,
  perspective: ct,
  transformPerspective: ct,
  opacity: ms,
  originX: i0,
  originY: i0,
  originZ: ct
}, vs = {
  // Border props
  borderWidth: ct,
  borderTopWidth: ct,
  borderRightWidth: ct,
  borderBottomWidth: ct,
  borderLeftWidth: ct,
  borderRadius: ct,
  borderTopLeftRadius: ct,
  borderTopRightRadius: ct,
  borderBottomRightRadius: ct,
  borderBottomLeftRadius: ct,
  // Positioning props
  width: ct,
  maxWidth: ct,
  height: ct,
  maxHeight: ct,
  top: ct,
  right: ct,
  bottom: ct,
  left: ct,
  inset: ct,
  insetBlock: ct,
  insetBlockStart: ct,
  insetBlockEnd: ct,
  insetInline: ct,
  insetInlineStart: ct,
  insetInlineEnd: ct,
  // Spacing props
  padding: ct,
  paddingTop: ct,
  paddingRight: ct,
  paddingBottom: ct,
  paddingLeft: ct,
  paddingBlock: ct,
  paddingBlockStart: ct,
  paddingBlockEnd: ct,
  paddingInline: ct,
  paddingInlineStart: ct,
  paddingInlineEnd: ct,
  margin: ct,
  marginTop: ct,
  marginRight: ct,
  marginBottom: ct,
  marginLeft: ct,
  marginBlock: ct,
  marginBlockStart: ct,
  marginBlockEnd: ct,
  marginInline: ct,
  marginInlineStart: ct,
  marginInlineEnd: ct,
  // Typography
  fontSize: ct,
  // Misc
  backgroundPositionX: ct,
  backgroundPositionY: ct,
  ...DA,
  zIndex: r0,
  // SVG
  fillOpacity: ms,
  strokeOpacity: ms,
  numOctaves: r0
}, zA = {
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
  filter: rd,
  WebkitFilter: rd,
  mask: ud,
  WebkitMask: ud
}, qb = (i) => zA[i], OA = /* @__PURE__ */ new Set([rd, ud]);
function Jd(i, l) {
  let o = qb(i);
  return OA.has(o) || (o = Ie), o.getAnimatableNone ? o.getAnimatableNone(l) : void 0;
}
function RA(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const ua = (i) => i * 180 / Math.PI, cd = (i) => {
  const l = ua(Math.atan2(i[1], i[0]));
  return fd(l);
}, NA = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: cd,
  rotateZ: cd,
  skewX: (i) => ua(Math.atan(i[1])),
  skewY: (i) => ua(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, fd = (i) => (i = i % 360, i < 0 && (i += 360), i), u0 = cd, c0 = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), f0 = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), _A = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: c0,
  scaleY: f0,
  scale: (i) => (c0(i) + f0(i)) / 2,
  rotateX: (i) => fd(ua(Math.atan2(i[6], i[5]))),
  rotateY: (i) => fd(ua(Math.atan2(-i[2], i[0]))),
  rotateZ: u0,
  rotate: u0,
  skewX: (i) => ua(Math.atan(i[4])),
  skewY: (i) => ua(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function bs(i) {
  return i.includes("scale") ? 1 : 0;
}
function dd(i, l) {
  if (!i || i === "none")
    return bs(l);
  const o = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (o)
    r = _A, c = o;
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = NA, c = m;
  }
  if (!c)
    return bs(l);
  const h = r[l], d = c[1].split(",").map(jA);
  return typeof h == "function" ? h(d) : d[h];
}
const VA = (i, l) => {
  const { transform: o = "none" } = getComputedStyle(i);
  return dd(o, l);
};
function jA(i) {
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
], Ri = /* @__PURE__ */ new Set([...$n, "pathRotation"]), d0 = (i) => i === ml || i === ct, UA = /* @__PURE__ */ new Set(["x", "y", "z"]), BA = $n.filter((i) => !UA.has(i));
function LA(i) {
  const l = [];
  return BA.forEach((o) => {
    const r = i.getValue(o);
    if (r !== void 0) {
      const c = r.get(), h = o.startsWith("scale") ? 1 : 0;
      if (c === h)
        return;
      l.push([o, c]), r.set(h);
    }
  }), l;
}
const HA = /* @__PURE__ */ new Set(["bottom", "right"]);
function h0(i, l, o, r, c, h) {
  const d = parseFloat(i);
  if (!isNaN(d))
    return d;
  const { min: m, max: g } = l()[o], v = g - m;
  return h === "border-box" ? v : v - parseFloat(r) - parseFloat(c);
}
const ca = {
  // Dimensions
  width: ({ width: i, paddingLeft: l = "0", paddingRight: o = "0", boxSizing: r }, c) => h0(i, c, "x", l, o, r),
  height: ({ height: i, paddingTop: l = "0", paddingBottom: o = "0", boxSizing: r }, c) => h0(i, c, "y", l, o, r),
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
  x: ({ transform: i }) => dd(i, "x"),
  y: ({ transform: i }) => dd(i, "y")
};
ca.translateX = ca.x;
ca.translateY = ca.y;
const fa = /* @__PURE__ */ new Set();
let hd = !1, md = !1, pd = !1;
function Xb() {
  if (md) {
    const i = [], l = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Set();
    fa.forEach((c) => {
      c.needsMeasurement && (i.push(c), l.add(c.element), HA.has(c.name) && o.add(c.element));
    });
    const r = /* @__PURE__ */ new Map();
    o.forEach((c) => {
      const h = LA(c);
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
  md = !1, hd = !1, fa.forEach((i) => i.complete(pd)), fa.clear();
}
function kb() {
  fa.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (md = !0);
  });
}
function GA() {
  pd = !0, kb(), Xb(), pd = !1;
}
function YA(i, l, o) {
  if (typeof i == "string") {
    if (jd(i) || Ud(i))
      return parseFloat(i);
    if (!Ie.test(i) && Ie.test(o))
      return Jd(l, o);
  }
  return i ?? void 0;
}
class Fd {
  constructor(l, o, r, c, h, d = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = o, this.name = r, this.motionValue = c, this.element = h, this.isAsync = d;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (fa.add(this), hd || (hd = !0, qt.read(kb), qt.resolveKeyframes(Xb))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: o, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const h = c?.get(), d = l[l.length - 1];
      if (h !== void 0)
        l[0] = h;
      else if (r && o) {
        const m = YA(r.readValue(o, d), o, d);
        m !== void 0 && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = d), c && h === void 0 && c.set(l[0]);
    }
    RA(l);
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
const qA = (i) => i.startsWith("--");
function Zb(i, l, o) {
  qA(l) ? i.style.setProperty(l, o) : i.style[l] = o;
}
const XA = {};
function Qb(i, l) {
  const o = /* @__PURE__ */ hb(i);
  return () => XA[l] ?? o();
}
const kA = /* @__PURE__ */ Qb(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Id = /* @__PURE__ */ Qb(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), ol = ([i, l, o, r]) => `cubic-bezier(${i}, ${l}, ${o}, ${r})`, gd = {
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
function Kb(i, l) {
  if (i)
    return typeof i == "function" ? Id() ? _b(i, l) : "ease-out" : /* @__PURE__ */ Gd(i) ? ol(i) : Array.isArray(i) ? i.map((o) => Kb(o, l) || gd.easeOut) : gd[i];
}
function ZA(i, l, o, { delay: r = 0, duration: c = 300, repeat: h = 0, repeatType: d = "loop", ease: m = "easeOut", times: g } = {}, v = void 0) {
  const b = {
    [l]: o
  };
  g && (b.offset = g);
  const y = Kb(m, c);
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
function Pb(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function QA({ type: i, ...l }) {
  return Pb(i) && Id() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class Jb extends Pd {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: o, name: r, keyframes: c, pseudoElement: h, allowFlatten: d = !1, finalKeyframe: m, onComplete: g } = l;
    this.isPseudoElement = !!h, this.allowFlatten = d, this.options = l, Ur(typeof l.type != "string");
    const v = QA(l);
    this.animation = ZA(o, r, c, v, h), v.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !h) {
        const b = gs(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(b), Zb(o, r, b), this.animation.cancel();
      }
      g?.(), this.notifyFinished();
    }, Yb(this, l, v);
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && kA() ? (this.animation.timeline = l, o?.(this.animation), Sn) : r(this);
  }
}
const Fb = {
  anticipate: bb,
  backInOut: vb,
  circInOut: Tb
};
function KA(i) {
  return i in Fb;
}
function PA(i) {
  typeof i.ease == "string" && KA(i.ease) && (i.ease = Fb[i.ease]);
}
const wr = 10;
class JA extends Jb {
  constructor(l) {
    PA(l), Lb(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
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
    const { speed: h } = this, d = this.elapsed(), m = this.state === "running" && h ? jn(0, wr, d) : 0, g = this.sample(d);
    r && c && Zb(r, c, g), o.setWithVelocity(this.sample(d - m * Math.sign(h)), g, m / Math.abs(h || 1));
  }
}
const m0 = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
(Ie.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function FA(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let o = 0; o < i.length; o++)
    if (i[o] !== l)
      return !0;
}
function IA(i, l, o, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const h = i[i.length - 1], d = m0(c, l), m = m0(h, l);
  return !d || !m ? !1 : FA(i) || (o === "spring" || Pb(o)) && r;
}
function yd(i) {
  i.duration = 0, i.type = "keyframes";
}
const vd = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), WA = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function $A(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && WA.test(i[l]))
      return !0;
  return !1;
}
const p0 = /* @__PURE__ */ new Set([
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
]), Ib = /* @__PURE__ */ hb(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function t3(i) {
  const { motionValue: l, name: o, repeatDelay: r, repeatType: c, damping: h, type: d, keyframes: m } = i;
  if (!o || !(vd.has(o) || p0.has(o)))
    return !1;
  const g = l?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement))
    return !1;
  const { onUpdate: v, transformTemplate: b } = l.owner.getProps();
  return Ib() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (vd.has(o) || p0.has(o) && $A(m)) && (o !== "transform" || !b) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !v && !r && c !== "mirror" && h !== 0 && d !== "inertia";
}
const Dr = (i, l) => l && typeof i == "number" ? l.transform(i) : i, Wb = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, e3 = $n.length;
function $b(i, l, o) {
  let r = "", c = !0;
  for (let d = 0; d < e3; d++) {
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
        const y = Wb[m] || m;
        r += `${y}(${b}) `;
      }
      o && (l[m] = b);
    }
  }
  const h = i.pathRotation;
  return h && (c = !1, r += `rotate(${Dr(h, vs.pathRotation)}) `), r = r.trim(), o ? r = o(l, c ? "" : r) : c && (r = "none"), r;
}
const dl = /* @__PURE__ */ new WeakMap(), n3 = 200, Lf = 1e-3, i3 = 0.1, a3 = 1e-3, l3 = 100, s3 = (i) => /^(linear|ease(In|Out|InOut))$/.test(i), Hf = (i, l) => i - l, g0 = (i, l, o) => {
  const r = [];
  for (let c = 0; c <= o; c++)
    r.push(Gt(i, l, c / o));
  return r;
}, dr = (i) => i.motionValue.owner, Gf = (i) => dl.get(i), rl = (i, l) => i.latestValues ? i.latestValues[l] : i.getValue(l)?.get(), o3 = ({ name: i, motionValue: l }) => i && $n.includes(i) && l?.owner?.current instanceof HTMLElement && Ib() && Id();
function r3(i) {
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
class u3 extends ys {
  constructor(l) {
    const o = dr(l).current, { driver: r = Nb } = l, c = r3(l);
    l.driver = (d) => {
      const m = r(d);
      return {
        js: m,
        now: m.now,
        start: (g = !0) => {
          const v = Gf(o);
          !v || v.isJS ? m.start(g) : v.schedule(!1, !g);
        },
        stop: () => {
          m.stop();
          const g = Gf(o);
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
    return Gf(dr(this.options).current);
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
    const { keyframes: l, type: o, ease: r, times: c, repeat: h, delay: d = 0 } = this.options, m = /* @__PURE__ */ Gd(r) ? ol(r) : s3(r) && gd[r];
    if (m && !h && !c && l.length === 2 && o === Oi && this.holdTime === null) {
      const g = this.startTime + d / this.speed;
      return [g, g + this.resolvedDuration / this.speed, m];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(l, o) {
    const { startTime: r, speed: c, resolvedDuration: h, options: d } = this, { delay: m = 0, repeat: g = 0, repeatDelay: v = 0, repeatType: b, times: y, keyframes: S, type: O } = d, D = (O || Oi) === Oi ? y || Bb(S) : [0, 1], U = r + m / c, N = [];
    if (this.holdTime !== null || !(h > 0))
      return N;
    for (let P = Math.max(0, Math.floor((l - U) * c / h)); P <= g; P++) {
      const J = U + P * h / c;
      if (J > o)
        break;
      for (const q of D) {
        const Q = J + (P % 2 && b && b !== "loop" ? 1 - q : q) * (h - v) / c;
        Q > l && Q < o && N.push(Q);
      }
    }
    return N;
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
    this.options.motionValue.setWithVelocity(this.sampleAt(l - wr, !0), this.sampleAt(l, !0), wr);
  }
  play() {
    this.isStopped || ((this.group || c3(dr(this.options))).tracks.add(this), super.play());
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
function c3(i) {
  const l = i.current, o = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
  let c = {}, h = [], d = /* @__PURE__ */ new Map(), m = [], g = !1, v = !1, b = !1, y = -1 / 0;
  const S = (I) => {
    for (const F of o)
      if (F.name === I)
        return !0;
  }, O = (I, F) => {
    const et = {};
    for (const nt of I === void 0 ? $n : h) {
      const W = r.get(nt), H = I === void 0 ? rl(i, nt) : W ? W.sampleAt(F > I && !W.timing()[1] ? F : I) : c[nt];
      H !== void 0 && (et[nt] = H);
    }
    return et;
  }, D = (I, F) => {
    let et = "";
    const nt = O(I, F);
    for (const W in nt)
      et += (Wb[W] || W) + "(" + Dr(nt[W], vs[W]) + ") ";
    return et || "none";
  }, U = (I = O()) => {
    l.style.transform = $b(I, {});
  }, N = (I = !0) => {
    I && U(), m.forEach(({ animation: F }) => F.cancel()), m = [];
  }, P = (I, F, et = 1 / 0) => {
    const nt = { animation: I, offset: F, end: et };
    I.startTime = Pt.now() + F, et < 1 / 0 && (I.onfinish = () => {
      nt.isDone = !0, m.some((W) => W.end === 1 / 0) && (I.cancel(), m = m.filter((W) => W !== nt)), gt.schedule(!1);
    }), I.oncancel = () => m.includes(nt) && gt.demote(), m.push(nt);
  }, J = (I, F, et) => {
    const nt = (H, k) => Math.abs(I(k) - I(H)), W = nt(F, et);
    for (; et - F > 0.01; ) {
      const H = (F + et) / 2;
      nt(F, H) > nt(H, et) ? et = H : F = H;
    }
    return nt(F, et) > W / 2 ? [F, et] : [];
  }, q = (I, F, et, nt) => {
    const W = Math.min(n3, Math.max(2, Math.ceil((et - F) / wr)));
    if (nt.length * 4 > W)
      return;
    const H = g0(F, et, W).concat(nt).sort(Hf), k = (yt) => /* @__PURE__ */ ha(F, et, yt);
    let $, tt;
    for (const yt of I) {
      const Rt = H.map((K) => yt.numberAt(K)), [x] = Rt, w = Rt[Rt.length - 1] - x, X = Rt.map((K) => w ? (K - x) / w : K - x);
      if (w) {
        if (!$)
          $ = X, tt = (K) => (yt.numberAt(K) - x) / w;
        else if (X.some((K, pt) => !(Math.abs(K - $[pt]) <= Lf)))
          return;
      } else if (X.some((K) => !(Math.abs(K) <= Lf)))
        return;
    }
    if (!$ || $.every((yt, Rt) => Math.abs(yt - k(H[Rt])) <= Lf))
      return "linear";
    const L = [], bt = (yt, Rt = tt(yt)) => L.push(od(Rt) + " " + od(k(yt) * 100) + "%");
    return $.forEach((yt, Rt) => {
      Rt && Math.abs(yt - $[Rt - 1]) > 0.2 && J(tt, H[Rt - 1], H[Rt]).forEach((x) => bt(x)), bt(H[Rt], yt);
    }), "linear(" + L + ")";
  }, Q = (I, F, et, nt) => {
    const W = [F], H = (L, bt) => I.every((yt) => !(Math.abs(yt.numberAt((L + bt) / 2) - (yt.numberAt(L) + yt.numberAt(bt)) / 2) > (yt.name.startsWith("scale") ? a3 : i3))), k = (L, bt, yt) => {
      if (bt - L < 1 || H(L, bt))
        W.push(bt);
      else if (yt < 4)
        k(L, (L + bt) / 2, yt + 1), k((L + bt) / 2, bt, yt + 1);
      else {
        for (const Rt of I)
          W.push(...J((x) => Rt.numberAt(x), L, bt));
        W.push(bt);
      }
    }, $ = g0(F, et, Math.ceil((et - F) / 100));
    for (const L of nt)
      $.push(L, Math.min(L + 0.01, et));
    let tt = F;
    for (const L of $.sort(Hf))
      L > tt && k(tt, L, 0), tt = L;
    return W.sort(Hf);
  }, dt = (I) => {
    let F;
    for (const et of I) {
      const nt = et.tween();
      if (!nt || F?.some((W, H) => H < 2 ? Math.abs(nt[H] - W) > 1 : nt[H] !== W))
        return;
      F = nt;
    }
    return F;
  }, at = (I, F, et, nt = { fill: "both" }, W, H) => {
    const k = I.flatMap((yt) => yt.boundaries(F, et)), $ = H || q(I, F, et, k), tt = $ ? [F, et] : Q(I, F, et, k), L = tt.map((yt) => D(yt, W));
    let bt = { transform: L };
    return $ || (bt.offset = tt.map((yt) => /* @__PURE__ */ ha(F, et, yt))), L.every((yt) => yt === L[0]) && (U(O(F, W)), bt = null), l.animate(bt, {
      ...nt,
      duration: et - F,
      easing: $ || "linear"
    });
  }, j = (I) => {
    let F = I, et = 0, nt = 0;
    const W = [], H = [], k = /* @__PURE__ */ new Set();
    r.clear(), d = /* @__PURE__ */ new Map();
    for (const tt of o) {
      r.set(tt.name, tt);
      const [L, bt] = tt.timing(), yt = L === 1 / 0;
      if (d.set(tt, [tt.at(I), tt.speed, yt]), yt) {
        tt.sync();
        continue;
      }
      if (tt.speed < 0)
        return;
      if (bt) {
        if (et) {
          const Rt = (L - nt) / bt;
          if (Math.abs(bt - et) > 1 || Math.abs(Rt - Math.round(Rt)) * et > 1)
            return;
        } else
          et = bt, nt = L;
        H.push(tt);
      } else
        k.add(L);
      W.push(tt), F = Math.max(F, L);
    }
    c = {}, h = $n.filter((tt) => {
      if (r.has(tt))
        return !0;
      const L = c[tt] = rl(i, tt);
      return L !== void 0 && parseFloat(L) !== (tt.startsWith("scale") ? 1 : 0);
    }), N(!1);
    const $ = !et && dt(W);
    try {
      if ($ && $[1] > I) {
        const [tt, L, bt] = $;
        P(at(W, tt, L, void 0, void 0, bt), tt - I, L - tt);
      } else F > I && (P(at(W, I, F), 0, F - I), k.forEach((tt) => tt < F - 1 && P(l.animate(null, {
        duration: tt - I
      }), 0, tt - I)));
      if (et) {
        const tt = nt + Math.floor((F - nt) / et) * et;
        P(at(H, tt, tt + et, {
          iterations: 1 / 0,
          iterationStart: (F - tt) / et,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, F), F - I);
      }
    } catch {
      return;
    }
    return m.length || N(), !0;
  }, _ = (I) => {
    let F, et = 0;
    for (const nt of o) {
      const W = d.get(nt);
      if (!W)
        return !1;
      const [H, k, $] = W, tt = nt.at(I), L = nt.timing()[0] === 1 / 0;
      if ($) {
        if (L && tt === H)
          continue;
        return !1;
      }
      const bt = (tt - H) / k, yt = L ? 0 : nt.speed / k;
      if (F === void 0)
        F = bt, et = yt;
      else if (Math.abs(bt - F) > 1 || yt !== et)
        return !1;
    }
    if (F === void 0)
      return !0;
    if (!m.length)
      return !1;
    for (const { offset: nt, end: W, isDone: H } of m) {
      const k = F - nt;
      if (W < 1 / 0 && (H ? k < W - 1 : k < 0 || k >= W))
        return !1;
    }
    for (const { animation: nt, offset: W, isDone: H } of m) {
      if (H)
        continue;
      const k = F - W;
      et ? (nt.playbackRate = et, nt.startTime = I - k / et) : (nt.pause(), nt.currentTime = k);
    }
    return !0;
  }, St = () => {
    const I = Pt.now();
    if (gt.isJS || (gt.isFinishing = !0, o.forEach((nt) => {
      const [W, H] = nt.timing();
      nt.state === "running" && nt.speed > 0 && !H && W <= I + 1 && (nt.complete(), c[nt.name] = rl(i, nt.name), d.has(nt) || (g = !0));
    }), gt.isFinishing = !1), v = !1, o.forEach(({ state: nt }, W) => {
      (nt === "idle" || nt === "finished") && o.delete(W);
    }), !o.size) {
      dl.delete(l), gt.isJS || N();
      return;
    }
    for (const nt of o)
      if (!nt.canAccelerate)
        return gt.demote(!0);
    gt.isJS && (gt.isJS = !1, g = !0, o.forEach((nt) => nt.js?.stop()));
    const F = g, et = b;
    if (g = b = !1, F || !_(I)) {
      if (et) {
        if (I - y < l3)
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
    schedule(I, F) {
      g || (g = I), b || (b = !!F), v || (v = !0, ae.isProcessing ? qt.render(St, !1, !0) : queueMicrotask(St));
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
      gt.isJS || (o.forEach((F) => {
        F.isAccelerated() && F.sync(), I || (F.canAccelerate = !1);
      }), gt.isJS = !0, d = /* @__PURE__ */ new Map(), N(), o.forEach((F) => F.state === "running" && F.js?.start()));
    }
  };
  return dl.set(l, gt), gt;
}
class f3 extends Pd {
  constructor(l) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = Pt.now();
    const { keyframes: o, name: r, motionValue: c, element: h } = l, d = l;
    d.autoplay ?? (d.autoplay = !0), d.delay ?? (d.delay = 0), d.type ?? (d.type = "keyframes"), d.repeat ?? (d.repeat = 0), d.repeatDelay ?? (d.repeatDelay = 0), d.repeatType ?? (d.repeatType = "loop");
    const m = h?.KeyframeResolver || Fd;
    this.keyframeResolver = new m(o, (g, v, b) => this.onKeyframesResolved(g, v, d, !b), r, c, h), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, o, r, c) {
    this.keyframeResolver = void 0;
    const { name: h, type: d, velocity: m, delay: g, isHandoff: v, onUpdate: b } = r;
    this.resolvedAt = Pt.now();
    let y = !0;
    IA(l, h, d, m) || (y = !1, (Vn.instantAnimations || !g) && b?.(gs(l, r, o)), l[0] = l[l.length - 1], yd(r), r.repeat = 0);
    const { onComplete: S } = r;
    r.finalKeyframe = o, r.keyframes = l, r.onComplete = () => {
      S?.(), this.notifyFinished();
    };
    const O = y && !v && t3(r), D = !O && o3(r);
    c && (O || D || this.resolvedAt !== this.createdAt) && (r.startTime ?? (r.startTime = Hb(this.createdAt, this.resolvedAt)));
    let U;
    if (O) {
      r.element = r.motionValue?.owner?.current;
      try {
        U = new JA(r);
      } catch {
        U = new ys(r);
      }
    } else D ? U = new u3(r) : U = new ys(r);
    this.pendingTimeline && (this.stopTimeline = U.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = U;
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
    return this._animation || (this.keyframeResolver?.resume(), GA()), this._animation;
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
function t1(i, l, o, r = 0, c = 1) {
  const h = Array.from(i).sort((v, b) => v.sortNodePosition(b)).indexOf(l), d = i.size, m = (d - 1) * r;
  return typeof o == "function" ? o(h, d) : c === 1 ? h * r : m - h * r;
}
const y0 = 30, d3 = (i) => !isNaN(parseFloat(i));
class h3 {
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
    this.current = l, this.updatedAt = Pt.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = d3(this.current));
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > y0)
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, y0);
    return /* @__PURE__ */ mb(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
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
  return new h3(i, l);
}
function e1(i, l) {
  if (i?.inherit && l) {
    const { inherit: o, ...r } = i;
    return { ...l, ...r };
  }
  return i;
}
function Wd(i, l) {
  const o = i?.[l] ?? i?.default ?? i;
  return o !== i ? e1(o, i) : o;
}
const m3 = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, p3 = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), g3 = {
  type: "keyframes",
  duration: 0.8
}, y3 = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, v3 = (i, { keyframes: l }) => l.length > 2 ? g3 : Ri.has(i) ? i.startsWith("scale") ? p3(l[1]) : m3 : y3, b3 = /* @__PURE__ */ new Set([
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
function S3(i) {
  for (const l in i)
    if (!b3.has(l))
      return !0;
  return !1;
}
const $d = (i, l, o, r = {}, c, h) => (d) => {
  const m = Wd(r, i) || {}, g = m.delay || r.delay || 0;
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
  S3(m) || Object.assign(b, v3(i, b)), b.duration && (b.duration = /* @__PURE__ */ un(b.duration)), b.repeatDelay && (b.repeatDelay = /* @__PURE__ */ un(b.repeatDelay)), b.from !== void 0 && (b.keyframes[0] = b.from);
  let y = !1;
  if ((b.type === !1 || b.duration === 0 && !b.repeatDelay) && (yd(b), b.delay === 0 && (y = !0)), (Vn.instantAnimations || Vn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, yd(b), b.delay = 0), b.allowFlatten = !m.type && !m.ease, y && !h && l.get() !== void 0) {
    const S = gs(b.keyframes, m);
    if (S !== void 0) {
      qt.update(() => {
        b.onUpdate(S), b.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new ys(b) : new f3(b);
}, T3 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function x3(i) {
  const l = T3.exec(i);
  if (!l)
    return [,];
  const [, o, r, c] = l;
  return [`--${o ?? r}`, c];
}
function n1(i, l, o = 1) {
  const [r, c] = x3(i);
  if (!r)
    return;
  const h = window.getComputedStyle(l).getPropertyValue(r);
  if (h) {
    const d = h.trim();
    return jd(d) ? parseFloat(d) : d;
  }
  return Yd(c) ? n1(c, l, o + 1) : c;
}
function E3(i) {
  const l = [{}, {}];
  return i?.values.forEach((o, r) => {
    l[0][r] = o.get(), l[1][r] = o.getVelocity();
  }), l;
}
function i1(i, l, o, r) {
  const c = (h) => typeof h == "function" ? h(o !== void 0 ? o : i.custom, ...E3(r)) : h;
  return l = c(l), typeof l == "string" && (l = i.variants && i.variants[l]), c(l);
}
function da(i, l, o) {
  return i1(i.getProps(), l, o, i);
}
const a1 = (i, l) => l === "exit" ? i.presenceContext?.custom : void 0, l1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...$n
]), A3 = (i) => Array.isArray(i);
function C3(i, l, o) {
  i.hasValue(l) ? i.getValue(l).set(o) : i.addValue(l, hl(o));
}
function M3(i) {
  return A3(i) ? i[i.length - 1] || 0 : i;
}
function w3(i, l) {
  const o = da(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...h } = o || {};
  h = { ...h, ...r };
  for (const d in h) {
    const m = M3(h[d]);
    C3(i, d, m);
  }
}
const xe = (i) => !!(i && i.getVelocity);
function D3(i) {
  return !!(xe(i) && i.add);
}
function bd(i, l) {
  const o = i.getValue("willChange");
  if (D3(o))
    return o.add(l);
  if (!o && Vn.WillChange) {
    const r = new Vn.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
function th(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const z3 = "framerAppearId", s1 = "data-" + th(z3);
function o1(i) {
  return i.props[s1];
}
const O3 = typeof window < "u";
function R3({ protectedKeys: i, needsAnimating: l }, o) {
  const r = o in i && !l[o];
  return l[o] = !1, r;
}
function r1(i, l, { delay: o = 0, transitionOverride: r, type: c } = {}) {
  let { transition: h, transitionEnd: d, ...m } = l;
  const g = i.getDefaultTransition();
  h = h ? e1(h, g) : g;
  const v = h?.reduceMotion, b = h?.skipAnimations;
  r && (h = r);
  const y = [], S = c && i.animationState?.getState()[c], O = h?.path;
  O && O.animateVisualElement(i, m, h, o, y);
  for (const D in m) {
    const U = i.getValue(D, i.latestValues[D] ?? null), N = m[D];
    if (N === void 0 || S && R3(S, D))
      continue;
    const P = {
      delay: o,
      ...Wd(h || {}, D)
    };
    b && (P.skipAnimations = !0);
    const J = U.get();
    if (J !== void 0 && !U.isAnimating() && !Array.isArray(N) && N === J && !P.velocity) {
      qt.update(() => U.set(N));
      continue;
    }
    let q = !1;
    if (O3 && window.MotionHandoffAnimation) {
      const at = o1(i);
      if (at) {
        const j = window.MotionHandoffAnimation(at, D, qt);
        j !== null && (P.startTime = j, q = !0);
      }
    }
    bd(i, D);
    const Q = v ?? i.shouldReduceMotion;
    U.start($d(D, U, N, Q && l1.has(D) ? { type: !1 } : P, i, q));
    const dt = U.animation;
    dt && y.push(dt);
  }
  if (d) {
    const D = () => qt.update(() => {
      d && w3(i, d);
    });
    y.length ? Promise.all(y).then(D) : D();
  }
  return y;
}
function Sd(i, l, o = {}) {
  const r = da(i, l, a1(i, o.type)), c = o.transitionOverride || (r?.transition ?? (i.getDefaultTransition() || {})), h = () => Promise.all(r ? r1(i, r, o) : []), d = (g = 0) => {
    const { variantChildren: v } = i, { delayChildren: b = 0, staggerChildren: y, staggerDirection: S } = c, O = [];
    return v?.forEach((D) => {
      D.notify("AnimationStart", l), O.push(Sd(D, l, {
        ...o,
        delay: g + (typeof b == "function" ? 0 : b) + t1(v, D, b, y, S)
      }).then(() => D.notify("AnimationComplete", l)));
    }), Promise.all(O);
  }, { when: m } = c;
  return m ? m === "beforeChildren" ? h().then(() => d()) : d().then(h) : Promise.all([h(), d(o.delay)]);
}
function N3(i, l, o = {}) {
  return i.notify("AnimationStart", l), (Array.isArray(l) ? Promise.all(l.map((c) => Sd(i, c, o))) : typeof l == "string" ? Sd(i, l, o) : Promise.all(r1(i, da(i, l, o.custom), o))).then(() => {
    i.notify("AnimationComplete", l);
  });
}
const _3 = {
  test: (i) => i === "auto",
  parse: (i) => i
}, V3 = (i) => (l) => l.test(i), j3 = [ml, ct, _n, Wn, H2, L2, _3], v0 = (i) => j3.find(V3(i));
function U3(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || Ud(i) : !0;
}
const B3 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function L3(i, l, o) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const h = i[r];
    typeof h == "string" && !B3.has(h) && Z2(h) && (c = i[r]), r++;
  }
  if (c && o)
    for (const h of l)
      i[h] !== c && (i[h] = Jd(o, c));
}
class H3 extends Fd {
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
      if (Rf(h ? l[h] : c))
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
      if (typeof y == "string" && (y = y.trim(), Yd(y))) {
        const S = n1(y, o.current);
        S !== void 0 && (l[b] = S), b === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !l1.has(r) || l.length !== 2)
      return;
    const [c, h] = l;
    if (typeof c == "number" && typeof h == "number")
      return;
    const d = v0(c), m = v0(h), g = Rf(c), v = Rf(h);
    if (g !== v && ca[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== m)
      if (d0(d) && d0(m))
        for (let b = 0; b < l.length; b++) {
          const y = l[b];
          typeof y == "string" && (l[b] = parseFloat(y));
        }
      else ca[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: o } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || U3(l[c])) && r.push(c);
    r.length && L3(l, r, o);
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
const eh = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function G3(i) {
  return db(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
function nh(i) {
  return db(i) && "ownerSVGElement" in i;
}
function ih(i, l, o) {
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
function ah(i, l, o) {
  const { style: r, vars: c, transformOrigin: h } = i;
  let d = !1, m = !1;
  for (const g in l) {
    const v = l[g];
    if (Ri.has(g)) {
      d = !0;
      continue;
    } else if (Eb(g)) {
      c[g] = v;
      continue;
    } else {
      const b = Dr(v, vs[g]);
      g.startsWith("origin") ? (m = !0, h[g] = b) : r[g] = b;
    }
  }
  if (l.transform || (d || o ? r.transform = $b(l, i.transform, o) : r.transform && (r.transform = "none")), m) {
    const { originX: g = "50%", originY: v = "50%", originZ: b = 0 } = h;
    r.transformOrigin = `${g} ${v} ${b}`;
  }
}
const Y3 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, q3 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function X3(i, l, o = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const h = c ? Y3 : q3;
  i[h.offset] = `${-r}`, i[h.array] = `${l} ${o}`;
}
const u1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function c1(i, {
  attrX: l,
  attrY: o,
  attrScale: r,
  pathLength: c,
  pathSpacing: h = 1,
  pathOffset: d = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, g, v, b) {
  if (ah(i, m, v), g) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: S } = i;
  for (const O of u1)
    y[O] !== void 0 && (S[O] = y[O], delete y[O]);
  (S.transform || y.transformOrigin) && (S.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), S.transform && (S.transformBox = b?.transformBox ?? "fill-box", delete y.transformBox), l !== void 0 && (y.x = l), o !== void 0 && (y.y = o), r !== void 0 && (y.scale = r), c !== void 0 && X3(y, c, h, d, !1);
}
function f1({ top: i, left: l, right: o, bottom: r }) {
  return {
    x: { min: l, max: o },
    y: { min: i, max: r }
  };
}
function k3({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function Z3(i, l) {
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
function Yf(i) {
  return i === void 0 || i === 1;
}
function Td({ scale: i, scaleX: l, scaleY: o }) {
  return !Yf(i) || !Yf(l) || !Yf(o);
}
function oa(i) {
  return Td(i) || d1(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function d1(i) {
  return b0(i.x) || b0(i.y);
}
function b0(i) {
  return i && i !== "0%";
}
function zr(i, l, o) {
  const r = i - o, c = l * r;
  return o + c;
}
function S0(i, l, o, r, c) {
  return c !== void 0 && (i = zr(i, c, r)), zr(i, o, r) + l;
}
function xd(i, l = 0, o = 1, r, c) {
  i.min = S0(i.min, l, o, r, c), i.max = S0(i.max, l, o, r, c);
}
function h1(i, { x: l, y: o }) {
  xd(i.x, l.translate, l.scale, l.originPoint), xd(i.y, o.translate, o.scale, o.originPoint);
}
const T0 = 0.999999999999, x0 = 1.0000000000001;
function Q3(i, l, o, r = !1) {
  const c = o.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let h, d;
  for (let m = 0; m < c; m++) {
    h = o[m], d = h.projectionDelta;
    const { visualElement: g } = h.options;
    g && g.props.style && g.props.style.display === "contents" || (r && h.options.layoutScroll && h.scroll && h !== h.root && (bn(i.x, -h.scroll.offset.x), bn(i.y, -h.scroll.offset.y)), d && (l.x *= d.x.scale, l.y *= d.y.scale, h1(i, d)), r && oa(h.latestValues) && hr(i, h.latestValues, h.layout?.layoutBox));
  }
  l.x < x0 && l.x > T0 && (l.x = 1), l.y < x0 && l.y > T0 && (l.y = 1);
}
function bn(i, l) {
  i.min += l, i.max += l;
}
function E0(i, l, o, r, c = 0.5) {
  const h = Gt(i.min, i.max, c);
  xd(i, l, o, h, r);
}
function A0(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function hr(i, l, o) {
  const r = o ?? i;
  E0(i.x, A0(l.x, r.x), l.scaleX, l.scale, l.originX), E0(i.y, A0(l.y, r.y), l.scaleY, l.scale, l.originY);
}
function m1(i, l) {
  return f1(Z3(i.getBoundingClientRect(), l));
}
function K3(i, l, o) {
  const r = m1(i, o), { scroll: c } = l;
  return c && (bn(r.x, c.offset.x), bn(r.y, c.offset.y)), r;
}
const { schedule: lh } = /* @__PURE__ */ Rb(queueMicrotask, !1), yn = {
  x: !1,
  y: !1
};
function p1() {
  return yn.x || yn.y;
}
function P3(i) {
  return i === "x" || i === "y" ? yn[i] ? null : (yn[i] = !0, () => {
    yn[i] = !1;
  }) : yn.x || yn.y ? null : (yn.x = yn.y = !0, () => {
    yn.x = yn.y = !1;
  });
}
function g1(i, l) {
  const o = ih(i), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  };
  return [o, c, () => r.abort()];
}
function J3(i) {
  return !(i.pointerType === "touch" || p1());
}
function F3(i, l, o = {}) {
  const [r, c, h] = g1(i, o);
  return r.forEach((d) => {
    let m = !1, g = !1, v;
    const b = () => {
      d.removeEventListener("pointerleave", D);
    }, y = (N) => {
      v && (v(N), v = void 0), b();
    }, S = (N) => {
      m = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), g && (g = !1, y(N));
    }, O = () => {
      m = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c);
    }, D = (N) => {
      if (N.pointerType !== "touch") {
        if (m) {
          g = !0;
          return;
        }
        y(N);
      }
    }, U = (N) => {
      if (!J3(N))
        return;
      g = !1;
      const P = l(d, N);
      typeof P == "function" && (v = P, d.addEventListener("pointerleave", D, c));
    };
    d.addEventListener("pointerenter", U, c), d.addEventListener("pointerdown", O, c);
  }), h;
}
const y1 = (i, l) => l ? i === l ? !0 : y1(i, l.parentElement) : !1, sh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, I3 = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function W3(i) {
  return I3.has(i.tagName) || i.isContentEditable === !0;
}
const $3 = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function tC(i) {
  return $3.has(i.tagName) || i.isContentEditable === !0;
}
const mr = /* @__PURE__ */ new WeakSet();
function C0(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function qf(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const eC = (i, l) => {
  const o = i.currentTarget;
  if (!o)
    return;
  const r = C0(() => {
    if (mr.has(o))
      return;
    qf(o, "down");
    const c = C0(() => {
      qf(o, "up");
    }), h = () => qf(o, "cancel");
    o.addEventListener("keyup", c, l), o.addEventListener("blur", h, l);
  });
  o.addEventListener("keydown", r, l), o.addEventListener("blur", () => o.removeEventListener("keydown", r), l);
};
function M0(i) {
  return sh(i) && !p1();
}
const w0 = /* @__PURE__ */ new WeakSet();
function nC(i, l, o = {}) {
  const [r, c, h] = g1(i, o), d = (m) => {
    const g = m.currentTarget;
    if (!M0(m) || w0.has(m))
      return;
    mr.add(g), o.stopPropagation && w0.add(m);
    const v = l(g, m), b = { ...c, capture: !0 }, y = (D, U) => {
      window.removeEventListener("pointerup", S, b), window.removeEventListener("pointercancel", O, b), mr.has(g) && mr.delete(g), M0(D) && typeof v == "function" && v(D, { success: U });
    }, S = (D) => {
      y(D, g === window || g === document || o.useGlobalTarget || y1(g, D.target));
    }, O = (D) => {
      y(D, !1);
    };
    window.addEventListener("pointerup", S, b), window.addEventListener("pointercancel", O, b);
  };
  return r.forEach((m) => {
    (o.useGlobalTarget ? window : m).addEventListener("pointerdown", d, c), G3(m) && (m.addEventListener("focus", (v) => eC(v, c)), !W3(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), h;
}
const pr = /* @__PURE__ */ new WeakMap();
let gr;
const v1 = (i, l, o) => (r, c) => c && c[0] ? c[0][i + "Size"] : nh(r) && "getBBox" in r ? r.getBBox()[l] : r[o], iC = /* @__PURE__ */ v1("inline", "width", "offsetWidth"), aC = /* @__PURE__ */ v1("block", "height", "offsetHeight");
function lC({ target: i, borderBoxSize: l }) {
  pr.get(i)?.forEach((o) => {
    o(i, {
      get width() {
        return iC(i, l);
      },
      get height() {
        return aC(i, l);
      }
    });
  });
}
function sC(i) {
  i.forEach(lC);
}
function oC() {
  typeof ResizeObserver > "u" || (gr = new ResizeObserver(sC));
}
function rC(i, l) {
  gr || oC();
  const o = ih(i);
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
function uC() {
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
function cC(i) {
  return yr.add(i), ul || uC(), () => {
    yr.delete(i), !yr.size && typeof ul == "function" && (window.removeEventListener("resize", ul), ul = void 0);
  };
}
function D0(i, l) {
  return typeof i == "function" ? cC(i) : rC(i, l);
}
function fC(i) {
  return nh(i) && i.tagName === "svg";
}
const z0 = (i) => typeof i == "number" ? i : parseFloat(i), O0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), cl = () => ({
  x: O0(),
  y: O0()
}), R0 = () => ({ min: 0, max: 0 }), re = () => ({
  x: R0(),
  y: R0()
}), dC = /* @__PURE__ */ new WeakMap();
function Br(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Ss(i) {
  return typeof i == "string" || Array.isArray(i);
}
const oh = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], N0 = ["initial", ...oh];
function Lr(i) {
  if (Br(i.animate))
    return !0;
  for (let l = 0; l < N0.length; l++)
    if (Ss(i[N0[l]]))
      return !0;
  return !1;
}
function b1(i) {
  return !!(Lr(i) || i.variants);
}
function hC(i, l, o) {
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
const Or = { current: null }, rh = { current: !1 }, mC = typeof window < "u";
function S1() {
  if (rh.current = !0, !!mC)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => Or.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      Or.current = !1;
}
const _0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let Rr = {};
function T1(i) {
  Rr = i;
}
function pC() {
  return Rr;
}
class gC {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Fd, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const O = Pt.now();
      this.renderScheduledAt < O && (this.renderScheduledAt = O, qt.render(this.render, !1, !0));
    };
    const { latestValues: v, renderState: b } = m;
    this.latestValues = v, this.baseTarget = { ...v }, this.initialValues = o.initial ? { ...v } : {}, this.renderState = b, this.parent = l, this.props = o, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = h, this.options = g, this.blockInitialAnimation = !!d, this.isControllingVariants = Lr(o), this.isVariantNode = b1(o), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: y, ...S } = this.scrapeMotionValuesFromProps(o, {}, this);
    for (const O in S) {
      const D = S[O];
      v[O] !== void 0 && xe(D) && D.set(v[O]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        this.values.get(o)?.jump(this.initialValues[o]), this.latestValues[o] = this.initialValues[o];
    if (this.current = l, dC.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.isVariantNode && !this.isControllingVariants) {
      let o = this;
      do
        o = o.props.inherit !== !1 && o.parent;
      while (o && !o.isVariantNode);
      if (o) {
        const { variantChildren: r } = o;
        r.add(this), this.removeFromVariantTree = () => r.delete(this);
      }
    }
    this.values.forEach((o, r) => this.bindToMotionValue(r, o)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (rh.current || S1(), this.shouldReduceMotion = Or.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), Ni(this.notifyUpdate), Ni(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
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
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), o.accelerate && vd.has(l) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: m, times: g, ease: v, duration: b } = o.accelerate, y = new Jb({
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
    const r = Ri.has(l);
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
    for (let h = 0; h < _0.length; h++) {
      const d = _0[h];
      this.propEventSubscriptions[d] && (this.propEventSubscriptions[d](), delete this.propEventSubscriptions[d]);
      const m = "on" + d, g = l[m];
      g && (this.propEventSubscriptions[d] = this.on(d, g));
    }
    this.prevMotionValues = hC(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return r != null && (typeof r == "string" && (jd(r) || Ud(r)) ? r = parseFloat(r) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof r != "number" && !Ie.test(r) && Ie.test(o) && (r = Jd(l, o))
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
    lh.render(this.render);
  }
}
class x1 extends gC {
  constructor() {
    super(...arguments), this.KeyframeResolver = H3;
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
function E1(i, { style: l, vars: o }, r, c) {
  const h = i.style;
  let d;
  for (d in l)
    h[d] = l[d];
  c?.applyProjectionStyles(h, r);
  for (d in o)
    h.setProperty(d, o[d]);
}
const Ts = {};
function A1(i, { layout: l, layoutId: o }) {
  return Ri.has(i) || i.startsWith("origin") || (l || o !== void 0) && (!!Ts[i] || i === "opacity");
}
function uh(i, l, o) {
  const r = i.style, c = l?.style, h = {};
  if (!r)
    return h;
  for (const d in r)
    (xe(r[d]) || c && xe(c[d]) || A1(d, i) || o?.getValue(d)?.liveStyle !== void 0) && (h[d] = r[d]);
  return h;
}
function yC(i) {
  return window.getComputedStyle(i);
}
class vC extends x1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = E1;
  }
  mount(l) {
    Ur(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, o) {
    if (Ri.has(o))
      return this.projection?.isProjecting ? bs(o) : VA(l, o);
    {
      const r = yC(l), c = (Eb(o) ? r.getPropertyValue(o) : r[o]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: o }) {
    return m1(l, o);
  }
  build(l, o, r) {
    ah(l, o, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return uh(l, o, r);
  }
}
const C1 = /* @__PURE__ */ new Set([
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
]), M1 = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function bC(i, l, o, r) {
  E1(i, l, void 0, r);
  for (const c in l.attrs)
    i.setAttribute(C1.has(c) ? c : th(c), l.attrs[c]);
}
function w1(i, l, o) {
  const r = uh(i, l, o);
  for (const c in i)
    if (xe(i[c]) || xe(l[c])) {
      const h = $n.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[h] = i[c];
    }
  return r;
}
class SC extends x1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = re;
  }
  getBaseTargetFromProps(l, o) {
    return Ri.has(o) ? super.getBaseTargetFromProps(l, o) ?? bs(o) : l[o];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(l) {
    return Ri.has(l) ? this.latestValues[l] ?? bs(l) : void 0;
  }
  readValueFromInstance(l, o) {
    if (Ri.has(o)) {
      const r = qb(o);
      return r && r.default || 0;
    }
    if (u1.includes(o)) {
      const c = getComputedStyle(l)[o];
      if (typeof c == "string" && c)
        return c.trim();
    }
    return o = C1.has(o) ? o : th(o), l.getAttribute(o);
  }
  scrapeMotionValuesFromProps(l, o, r) {
    return w1(l, o, r);
  }
  build(l, o, r) {
    c1(l, o, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, o, r, c) {
    bC(l, o, r, c);
  }
  mount(l) {
    this.isSVGTag = M1(l.tagName), super.mount(l);
  }
}
function D1(i, l) {
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
const TC = [...oh].reverse();
function xC(i) {
  let l = (m) => Promise.all(m.map(({ animation: g, options: v }) => N3(i, g, v))), o = V0(), r = !0, c = !1;
  function h(m) {
    const { props: g, parent: v, manuallyAnimateOnMount: b } = i, y = r || c, S = [], O = /* @__PURE__ */ new Set();
    let D = {}, U = 1 / 0, N = i;
    do
      N = N.props.inherit !== !1 && N.parent;
    while (N && !N.isControllingVariants);
    if (TC.forEach((J, q) => {
      const Q = o[J], dt = g[J], at = N && N.props[J], j = dt !== void 0 ? dt : Ss(at) || at === !1 ? at : void 0, _ = Ss(j), St = J === m ? Q.isActive : null;
      St === !1 && (U = q);
      const gt = _ && dt === void 0 && !(y && b);
      if (Q.protectedKeys = { ...D }, !Q.isActive && St === null || !j && !Q.prevProp || Br(j) || typeof j == "boolean")
        return;
      if (J === "exit" && Q.isActive && St !== !0) {
        D = {
          ...D,
          ...Q.prevResolvedValues
        };
        return;
      }
      const I = EC(Q.prevProp, j);
      let F = I || _ && (St && !gt || q > U), et = !1;
      const nt = Array.isArray(j) ? j : [j];
      let W = {};
      if (St !== !1)
        for (const k of nt) {
          const { transition: $, transitionEnd: tt, ...L } = da(i, k, a1(i, J)) || {};
          W = {
            ...W,
            ...L,
            ...tt
          };
        }
      const { prevResolvedValues: H } = Q;
      for (const k in { ...H, ...W }) {
        if (k in D)
          continue;
        const $ = W[k], tt = H[k], L = Array.isArray($) && Array.isArray(tt) ? !D1($, tt) || I : $ !== tt;
        if (L && $ == null)
          O.add(k);
        else if (L || $ !== void 0 && O.has(k)) {
          F = !0, O.delete(k) && (et = !0), Q.needsAnimating[k] = !0;
          const bt = i.getValue(k);
          bt && (bt.liveStyle = !1);
        } else
          Q.protectedKeys[k] = !0;
      }
      if (Q.prevProp = j, Q.prevResolvedValues = W, Q.isActive && (D = { ...D, ...W }), F && (!(gt && I) || et))
        for (const k of nt) {
          const $ = { type: J };
          if (typeof k == "string" && y && b && v?.enteringChildren) {
            const tt = da(v, k)?.transition?.delayChildren;
            $.delay = t1(v.enteringChildren, i, tt);
          }
          S.push({ animation: k, options: $ });
        }
    }), O.size) {
      const { initial: J } = g, q = {}, Q = typeof J != "boolean" && da(i, Array.isArray(J) ? J[0] : J, i.presenceContext?.custom);
      Q && Q.transition && (q.transition = Q.transition), O.forEach((dt) => {
        const at = i.getValue(dt);
        at && (at.liveStyle = !0);
        const j = Q && !Array.isArray(J) ? Q[dt] : void 0, _ = i.getBaseTargetFromProps(g, dt);
        q[dt] = (j !== void 0 ? j : _ !== void 0 && !xe(_) ? _ : i.initialValues[dt] === void 0 ? i.baseTarget[dt] : void 0) ?? null;
      }), S.push({ animation: q });
    }
    const P = y && i.blockInitialAnimation || r && !b && (g.initial === !1 || g.initial === g.animate);
    return r = c = !1, !P && S.length ? l(S) : Promise.resolve();
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
      o = V0(), c = !0;
    }
  };
}
function EC(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !D1(l, i) : !1;
}
function V0() {
  const i = {};
  for (const l of oh)
    i[l] = {
      isActive: l === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  return i;
}
function Ed(i, l) {
  i.min = l.min, i.max = l.max;
}
function gn(i, l) {
  Ed(i.x, l.x), Ed(i.y, l.y);
}
function j0(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const z1 = 1e-4, AC = 1 - z1, CC = 1 + z1, O1 = 0.01, MC = 0 - O1, wC = 0 + O1;
function Oe(i) {
  return i.max - i.min;
}
function DC(i, l, o) {
  return Math.abs(i - l) <= o;
}
function U0(i, l, o, r = 0.5) {
  i.origin = r, i.originPoint = Gt(l.min, l.max, i.origin), i.scale = Oe(o) / Oe(l), i.translate = Gt(o.min, o.max, i.origin) - i.originPoint, (i.scale >= AC && i.scale <= CC || isNaN(i.scale)) && (i.scale = 1), (i.translate >= MC && i.translate <= wC || isNaN(i.translate)) && (i.translate = 0);
}
function ds(i, l, o, r) {
  U0(i.x, l.x, o.x, r ? r.originX : void 0), U0(i.y, l.y, o.y, r ? r.originY : void 0);
}
function B0(i, l, o, r = 0) {
  const c = r ? Gt(o.min, o.max, r) : o.min;
  i.min = c + l.min, i.max = i.min + Oe(l);
}
function zC(i, l, o, r) {
  B0(i.x, l.x, o.x, r?.x), B0(i.y, l.y, o.y, r?.y);
}
function L0(i, l, o, r = 0) {
  const c = r ? Gt(o.min, o.max, r) : o.min;
  i.min = l.min - c, i.max = i.min + Oe(l);
}
function Nr(i, l, o, r) {
  L0(i.x, l.x, o.x, r?.x), L0(i.y, l.y, o.y, r?.y);
}
function H0(i, l, o, r, c) {
  return i -= l, i = zr(i, 1 / o, r), c !== void 0 && (i = zr(i, 1 / c, r)), i;
}
function OC(i, l = 0, o = 1, r = 0.5, c, h = i, d = i) {
  if (_n.test(l) && (l = parseFloat(l), l = Gt(d.min, d.max, l / 100) - d.min), typeof l != "number")
    return;
  let m = Gt(h.min, h.max, r);
  i === h && (m -= l), i.min = H0(i.min, l, o, m, c), i.max = H0(i.max, l, o, m, c);
}
function G0(i, l, [o, r, c], h, d) {
  OC(i, l[o], l[r], l[c], l.scale, h, d);
}
const RC = ["x", "scaleX", "originX"], NC = ["y", "scaleY", "originY"];
function Y0(i, l, o, r) {
  G0(i.x, l, RC, o ? o.x : void 0, r ? r.x : void 0), G0(i.y, l, NC, o ? o.y : void 0, r ? r.y : void 0);
}
function q0(i) {
  return i.translate === 0 && i.scale === 1;
}
function R1(i) {
  return q0(i.x) && q0(i.y);
}
function X0(i, l) {
  return i.min === l.min && i.max === l.max;
}
function _C(i, l) {
  return X0(i.x, l.x) && X0(i.y, l.y);
}
function k0(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function N1(i, l) {
  return k0(i.x, l.x) && k0(i.y, l.y);
}
function Z0(i) {
  return Oe(i.x) / Oe(i.y);
}
function Q0(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function vn(i) {
  return [i("x"), i("y")];
}
function K0(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const fs = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (ct.test(i))
        i = parseFloat(i);
      else
        return i;
    const o = K0(i, l.target.x), r = K0(i, l.target.y);
    return `${o}% ${r}%`;
  }
}, VC = {
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
function jC(i, l, o) {
  let r = "";
  const c = i.x.translate / l.x, h = i.y.translate / l.y, d = o?.z || 0;
  if ((c || h || d) && (r = `translate3d(${c}px, ${h}px, ${d}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), o) {
    const { transformPerspective: v, rotate: b, pathRotation: y, rotateX: S, rotateY: O, skewX: D, skewY: U } = o;
    v && (r = `perspective(${v}px) ${r}`), b && (r += `rotate(${b}deg) `), y && (r += `rotate(${y}deg) `), S && (r += `rotateX(${S}deg) `), O && (r += `rotateY(${O}deg) `), D && (r += `skewX(${D}deg) `), U && (r += `skewY(${U}deg) `);
  }
  const m = i.x.scale * l.x, g = i.y.scale * l.y;
  return (m !== 1 || g !== 1) && (r += `scale(${m}, ${g})`), r || "none";
}
const UC = eh.length, P0 = (i) => typeof i == "number" || ct.test(i);
function BC(i, l, o, r, c, h) {
  c ? (i.opacity = Gt(0, o.opacity ?? 1, LC(r)), i.opacityExit = Gt(l.opacity ?? 1, 0, HC(r))) : h && (i.opacity = Gt(l.opacity ?? 1, o.opacity ?? 1, r));
  for (let d = 0; d < UC; d++) {
    const m = eh[d];
    let g = J0(l, m), v = J0(o, m);
    if (g === void 0 && v === void 0)
      continue;
    g || (g = 0), v || (v = 0), g === 0 || v === 0 || P0(g) === P0(v) ? (i[m] = Math.max(Gt(z0(g), z0(v), r), 0), (_n.test(v) || _n.test(g)) && (i[m] += "%")) : i[m] = v;
  }
  (l.rotate || o.rotate) && (i.rotate = Gt(l.rotate || 0, o.rotate || 0, r));
}
function J0(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const LC = /* @__PURE__ */ _1(0, 0.5, Sb), HC = /* @__PURE__ */ _1(0.5, 0.95, Sn);
function _1(i, l, o) {
  return (r) => r < i ? 0 : r > l ? 1 : o(/* @__PURE__ */ ha(i, l, r));
}
function GC(i, l, o) {
  const r = xe(i) ? i : hl(i);
  return r.start($d("", r, l, o)), r.animation;
}
function xs(i, l, o, r = { passive: !0 }) {
  return i.addEventListener(l, o, r), () => i.removeEventListener(l, o, r);
}
const YC = (i, l) => i.depth - l.depth;
class qC {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    Vd(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    xr(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(YC), this.isDirty = !1, this.children.forEach(l);
  }
}
function XC(i, l) {
  const o = Pt.now(), r = ({ timestamp: c }) => {
    const h = c - o;
    h >= l && (Ni(r), i(h - l));
  };
  return qt.setup(r, !0), () => Ni(r);
}
function vr(i) {
  return xe(i) ? i.get() : i;
}
class kC {
  constructor() {
    this.members = [];
  }
  add(l) {
    Vd(this.members, l);
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
const ZC = {
  borderRadius: {
    ...fs,
    applyTo: [...eh]
  },
  borderTopLeftRadius: fs,
  borderTopRightRadius: fs,
  borderBottomLeftRadius: fs,
  borderBottomRightRadius: fs,
  boxShadow: VC
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
  ...ZC,
  ...Ts
});
const Xf = ["", "X", "Y", "Z"], QC = 1e3;
let KC = 0;
function kf(i, l, o, r) {
  const { latestValues: c } = l;
  c[i] && (o[i] = c[i], l.setStaticValue(i, 0), r && (r[i] = 0));
}
const Zf = ({ instance: i }) => i && dl.get(i)?.demote();
function V1(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const o = o1(l);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: c, layoutId: h } = i.options;
    window.MotionCancelOptimisedAnimation(o, "transform", qt, !(c || h));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && V1(r);
}
function j1({ attachResizeListener: i, defaultParent: l, measureScroll: o, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(d = {}, m = l?.()) {
      this.id = KC++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(FC), this.nodes.forEach(aM), this.nodes.forEach(lM), this.nodes.forEach(IC);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = d, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new qC());
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
      this.isSVG = nh(d) && !fC(d), this.instance = d;
      const { layoutId: m, layout: g, visualElement: v } = this.options;
      if (v && !v.current && v.mount(d), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (g || m) && (this.isLayoutDirty = !0), i) {
        let b, y = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        qt.read(() => {
          y = window.innerWidth;
        }), i(d, () => {
          const O = window.innerWidth;
          O !== y && (y = O, this.root.updateBlockedByResize = !0, b && b(), b = XC(S, 250), br.hasAnimatedSinceResize && (br.hasAnimatedSinceResize = !1, this.nodes.forEach(W0)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && v && (m || g) && this.addEventListener("didUpdate", ({ delta: b, hasLayoutChanged: y, hasRelativeLayoutChanged: S, layout: O }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const D = this.options.transition || v.getDefaultTransition() || cM, { onLayoutAnimationStart: U, onLayoutAnimationComplete: N } = v.getProps(), P = !this.targetLayout || !N1(this.targetLayout, O), J = !y && S;
        if (this.options.layoutRoot || this.resumeFrom || J || y && (P || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const q = {
            ...Wd(D, "layout"),
            onPlay: U,
            onComplete: N
          };
          (v.shouldReduceMotion || this.options.layoutRoot) && (q.delay = 0, q.type = !1), this.startAnimation(q), this.setAnimationOrigin(b, J, q.path);
        } else
          y || W0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = O;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ni(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(sM), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && V1(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      Zf(this), this.isLayoutDirty = !0;
      for (let b = 0; b < this.path.length; b++) {
        const y = this.path[b];
        y.shouldResetTransform = !0, Zf(y), (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1), y.isAnimationBlocked && (y.dragSnapshot || (y.dragSnapshot = y.measure()), this.dragAncestor = y);
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), g && this.nodes.forEach($C), this.nodes.forEach(F0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(I0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(eM), this.nodes.forEach(nM), this.nodes.forEach(iM), this.nodes.forEach(PC), this.nodes.forEach(JC)) : this.nodes.forEach(I0), this.clearAllSnapshots();
      const m = Pt.now();
      ae.delta = jn(0, 1e3 / 60, m - ae.timestamp), ae.timestamp = m, ae.isProcessing = !0, jf.update.process(ae), jf.preRender.process(ae), jf.render.process(ae), ae.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, lh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(WC), this.sharedNodes.forEach(oM);
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
      d && Zf(this);
      const m = this.projectionDelta && !R1(this.projectionDelta), g = this.getTransformTemplate(), v = g ? g(this.latestValues, "") : void 0, b = v !== this.prevTransformTemplateValue;
      d && this.instance && (m || oa(this.latestValues) || b) && (c(this.instance, v), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(d = !0) {
      const m = this.measurePageBox();
      let g = this.removeElementScroll(m);
      return d && (g = this.removeTransform(g)), fM(g), {
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
      if (!(this.scroll?.wasRoot || this.path.some(dM))) {
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
        v.instance && (Td(v.latestValues) && v.updateSnapshot(), b = re(), gn(b, v.measurePageBox())), Y0(m, v.latestValues, v.snapshot?.layoutBox, b);
      }
      return oa(this.latestValues) && Y0(m, this.latestValues), m;
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
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = re(), this.targetWithTransforms = re()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), zC(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : gn(this.target, this.layout.layoutBox), h1(this.target, this.targetDelta)) : gn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Td(this.parent.latestValues) || d1(this.parent.latestValues)))
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
      Q3(this.layoutCorrected, this.treeScale, this.path, m), d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox, d.targetWithTransforms = re());
      const { target: O } = d;
      if (!O) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (j0(this.prevProjectionDelta.x, this.projectionDelta.x), j0(this.prevProjectionDelta.y, this.projectionDelta.y)), ds(this.projectionDelta, this.layoutCorrected, O, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== S || !Q0(this.projectionDelta.x, this.prevProjectionDelta.x) || !Q0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", O));
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
      const O = re(), D = v ? v.source : void 0, U = this.layout ? this.layout.source : void 0, N = D !== U, P = this.getStack(), J = !P || P.members.length <= 1, q = !!(N && !J && this.options.crossfade === !0 && !this.path.some(uM));
      this.animationProgress = 0;
      let Q;
      const dt = g?.interpolateProjection(d);
      this.mixTargetDelta = (at) => {
        const j = at / 1e3, _ = dt?.(j);
        _ ? (S.x.translate = _.x, S.x.scale = Gt(d.x.scale, 1, j), S.x.origin = d.x.origin, S.x.originPoint = d.x.originPoint, S.y.translate = _.y, S.y.scale = Gt(d.y.scale, 1, j), S.y.origin = d.y.origin, S.y.originPoint = d.y.originPoint) : ($0(S.x, d.x, j), $0(S.y, d.y, j)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Nr(O, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), rM(this.relativeTarget, this.relativeTargetOrigin, O, j), Q && _C(this.relativeTarget, Q) && (this.isProjectionDirty = !1), Q || (Q = re()), gn(Q, this.relativeTarget)), N && (this.animationValues = y, BC(y, b, this.latestValues, j, q, J)), _ && _.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = _.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Ni(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = qt.update(() => {
        br.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = hl(0)), this.motionValue.jump(0, !1), this.currentAnimation = GC(this.motionValue, [0, 1e3], {
          ...d,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), d.onUpdate && d.onUpdate(m);
          },
          onComplete: () => {
            d.onComplete && d.onComplete(), this.completeAnimation();
          }
        }), EA(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(QC), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const d = this.getLead(), { targetWithTransforms: m, layout: g, latestValues: v } = d;
      let { target: b } = d;
      if (!(!m || !b || !g)) {
        if (this !== d && this.layout && g && U1(this.options.animationType, this.layout.layoutBox, g.layoutBox)) {
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
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new kC()), this.sharedNodes.get(d).add(m);
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
      g.z && kf("z", d, v, this.animationValues);
      for (let b = 0; b < Xf.length; b++)
        kf(`rotate${Xf[b]}`, d, v, this.animationValues), kf(`skew${Xf[b]}`, d, v, this.animationValues);
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
      let y = jC(this.projectionDeltaWithTransform, this.treeScale, b);
      g && (y = g(b, y)), d.transform = y;
      const { x: S, y: O } = this.projectionDelta;
      d.transformOrigin = `${S.origin * 100}% ${O.origin * 100}% 0`, v.animationValues ? d.opacity = v === this ? b.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : b.opacityExit : d.opacity = v === this ? b.opacity !== void 0 ? b.opacity : "" : b.opacityExit !== void 0 ? b.opacityExit : 0;
      for (const D in Ts) {
        if (b[D] === void 0)
          continue;
        const { correct: U, applyTo: N, isCSSVariable: P } = Ts[D], J = y === "none" ? b[D] : U(b[D], v);
        if (N) {
          const q = N.length;
          for (let Q = 0; Q < q; Q++)
            d[N[Q]] = J;
        } else
          P ? this.options.visualElement.renderState.vars[D] = J : d[D] = J;
      }
      this.options.layoutId && (d.pointerEvents = v === this ? vr(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((d) => d.currentAnimation?.stop()), this.root.nodes.forEach(F0), this.root.sharedNodes.clear();
    }
  };
}
function PC(i) {
  i.updateLayout(), tM(i);
}
function JC(i) {
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
      Ed(h ? l.measuredBox[b] : l.layoutBox[b], o[b]);
    } else U1(c, l.layoutBox, o) && vn((b) => {
      const y = h ? l.measuredBox[b] : l.layoutBox[b], S = Oe(o[b]);
      y.max = y.min + S, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[b].max = i.relativeTarget[b].min + S);
    });
    const d = cl();
    ds(d, o, l.layoutBox);
    const m = cl();
    h ? ds(m, i.applyTransform(r, !0), l.measuredBox) : ds(m, o, l.layoutBox);
    const g = !R1(d);
    let v = !1;
    if (!i.resumeFrom) {
      const b = i.getClosestProjectingParent();
      if (b && !b.resumeFrom) {
        const { snapshot: y, layout: S } = b;
        if (y && S) {
          const O = i.options.layoutAnchor || void 0, D = re();
          Nr(D, l.layoutBox, y.layoutBox, O);
          const U = re();
          Nr(U, o, S.layoutBox, O), N1(D, U) || (v = !0), b.options.layoutRoot && (i.relativeTarget = U, i.relativeTargetOrigin = D, i.relativeParent = b);
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
function FC(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function IC(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function WC(i) {
  i.clearSnapshot();
}
function F0(i) {
  i.clearMeasurements();
}
function $C(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function I0(i) {
  i.isLayoutDirty = !1;
}
function tM(i) {
  const { snapshot: l, dragAncestor: o } = i, r = o?.layout;
  if (!l || !r || i.resumeFrom || i.isAnimationBlocked)
    return;
  const c = o.dragSnapshot;
  vn((h) => bn(l.layoutBox[h], r.layoutBox[h].min - c.layoutBox[h].min));
}
function eM(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.dragSnapshot || i.layout, i.isLayoutDirty = !0);
}
function nM(i) {
  i.relativeTarget && i.relativeParent?.isLayoutDirty && (i.currentAnimation ? i.isLayoutDirty = !0 : (i.targetDelta = void 0, i.removeRelativeTarget()));
}
function iM(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function W0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function aM(i) {
  i.resolveTargetDelta();
}
function lM(i) {
  i.calcProjection();
}
function sM(i) {
  i.resetSkewAndRotation();
}
function oM(i) {
  i.removeLeadSnapshot();
}
function $0(i, l, o) {
  i.translate = Gt(l.translate, 0, o), i.scale = Gt(l.scale, 1, o), i.origin = l.origin, i.originPoint = l.originPoint;
}
function tv(i, l, o, r) {
  i.min = Gt(l.min, o.min, r), i.max = Gt(l.max, o.max, r);
}
function rM(i, l, o, r) {
  tv(i.x, l.x, o.x, r), tv(i.y, l.y, o.y, r);
}
function uM(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const cM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, ev = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), nv = ev("applewebkit/") && !ev("chrome/") ? Math.round : Sn;
function iv(i) {
  i.min = nv(i.min), i.max = nv(i.max);
}
function fM(i) {
  iv(i.x), iv(i.y);
}
function U1(i, l, o) {
  return i === "position" || i === "preserve-aspect" && !DC(Z0(l), Z0(o), 0.2);
}
function dM(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const hM = j1({
  attachResizeListener: (i, l) => xs(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Qf = {
  current: void 0
}, B1 = j1({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!Qf.current) {
      const i = new hM({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), Qf.current = i;
    }
    return Qf.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), L1 = Z.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function mM(i = !0) {
  const l = Z.useContext(_d);
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
const H1 = Z.createContext({ strict: !1 }), av = {
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
let lv = !1;
function pM() {
  if (lv)
    return;
  const i = {};
  for (const l in av)
    i[l] = {
      isEnabled: (o) => av[l].some((r) => !!o[r])
    };
  T1(i), lv = !0;
}
function G1() {
  return pM(), pC();
}
function gM(i) {
  const l = G1();
  for (const o in i)
    l[o] = {
      ...l[o],
      ...i[o]
    };
  T1(l);
}
const Hr = /* @__PURE__ */ Z.createContext({});
function yM(i, l) {
  if (Lr(i)) {
    const { initial: o, animate: r } = i;
    return {
      initial: o === !1 || Ss(o) ? o : void 0,
      animate: Ss(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function vM(i) {
  const { initial: l, animate: o } = yM(i, Z.useContext(Hr));
  return Z.useMemo(() => ({ initial: l, animate: o }), [sv(l), sv(o)]);
}
function sv(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const ch = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Y1(i, l, o) {
  for (const r in l)
    !xe(l[r]) && !A1(r, o) && (i[r] = l[r]);
}
function bM({ transformTemplate: i }, l) {
  return Z.useMemo(() => {
    const o = ch();
    return ah(o, l, i), Object.assign({}, o.vars, o.style);
  }, [l]);
}
function SM(i, l) {
  const o = i.style || {}, r = {};
  return Y1(r, o, i), Object.assign(r, bM(i, l)), r;
}
function TM(i, l) {
  const o = {}, r = SM(i, l);
  return i.drag && i.dragListener !== !1 && (o.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (o.tabIndex = 0), o.style = r, o;
}
const q1 = () => ({
  ...ch(),
  attrs: {}
});
function xM(i, l, o, r) {
  const c = Z.useMemo(() => {
    const h = q1();
    return c1(h, l, M1(r), i.transformTemplate, i.style), {
      ...h.attrs,
      style: { ...h.style }
    };
  }, [l]);
  if (i.style) {
    const h = {};
    Y1(h, i.style, i), c.style = { ...h, ...c.style };
  }
  return c;
}
const EM = /* @__PURE__ */ new Set([
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
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || EM.has(i);
}
function AM(i, l) {
  return i.startsWith("on") ? !_r(i) : l?.(i) ?? !_r(i);
}
function CM(i, l, o, r) {
  const c = {};
  for (const h in i)
    h === "values" && typeof i.values == "object" || xe(i[h]) || (AM(h, r) || o === !0 && _r(h) || !l && !_r(h) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && h.startsWith("onDrag")) && (c[h] = i[h]);
  return c;
}
const MM = [
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
function fh(i) {
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
      !!(MM.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function wM(i, l, o, { latestValues: r }, c, h = !1, d, m) {
  const v = (d ?? fh(i) ? xM : TM)(l, r, c, i), b = CM(l, typeof i == "string", h, m), y = i !== Z.Fragment ? { ...b, ...v, ref: o } : {}, { children: S } = l, O = Z.useMemo(() => xe(S) ? S.get() : S, [S]);
  return Z.createElement(i, {
    ...y,
    children: O
  });
}
function DM({ scrapeMotionValuesFromProps: i, createRenderState: l }, o, r, c) {
  return {
    latestValues: zM(o, r, c, i),
    renderState: l()
  };
}
function zM(i, l, o, r) {
  const c = {}, h = r(i, {});
  for (const S in h)
    c[S] = vr(h[S]);
  let { initial: d, animate: m } = i;
  const g = Lr(i), v = b1(i);
  l && v && !g && i.inherit !== !1 && (d === void 0 && (d = l.initial), m === void 0 && (m = l.animate));
  let b = o ? o.initial === !1 : !1;
  b = b || d === !1;
  const y = b ? m : d;
  if (y && typeof y != "boolean" && !Br(y)) {
    const S = Array.isArray(y) ? y : [y];
    for (let O = 0; O < S.length; O++) {
      const D = i1(i, S[O]);
      if (D) {
        const { transitionEnd: U, transition: N, ...P } = D;
        for (const J in P) {
          let q = P[J];
          if (Array.isArray(q)) {
            const Q = b ? q.length - 1 : 0;
            q = q[Q];
          }
          q !== null && (c[J] = q);
        }
        for (const J in U)
          c[J] = U[J];
      }
    }
  }
  return c;
}
const X1 = (i) => (l, o) => {
  const r = Z.useContext(Hr), c = Z.useContext(_d), h = () => DM(i, l, r, c);
  return o ? h() : A2(h);
}, OM = /* @__PURE__ */ X1({
  scrapeMotionValuesFromProps: uh,
  createRenderState: ch
}), RM = /* @__PURE__ */ X1({
  scrapeMotionValuesFromProps: w1,
  createRenderState: q1
}), NM = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function _M(i, l, o) {
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
const k1 = Z.createContext({});
function ll(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function VM(i, l, o, r, c, h) {
  const { visualElement: d } = Z.useContext(Hr), m = Z.useContext(H1), g = Z.useContext(_d), v = Z.useContext(L1), b = v.reducedMotion, y = v.skipAnimations, S = Z.useRef(null), O = Z.useRef(!1);
  r = r || m.renderer, !S.current && r && (S.current = r(i, {
    visualState: l,
    parent: d,
    props: o,
    presenceContext: g,
    blockInitialAnimation: g ? g.initial === !1 : !1,
    reducedMotionConfig: b,
    skipAnimations: y,
    isSVG: h
  }), O.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const D = S.current, U = Z.useContext(k1);
  D && !D.projection && c && (D.type === "html" || D.type === "svg") && jM(S.current, o, c, U);
  const N = Z.useRef(!1);
  Z.useInsertionEffect(() => {
    D && N.current && D.update(o, g);
  });
  const P = o[s1], J = Z.useRef(!!P && typeof window < "u" && !window.MotionHandoffIsComplete?.(P) && window.MotionHasOptimisedAnimation?.(P));
  return e0(() => {
    !O.current || !D || (D.animationState?.animateChanges(), D.enteringChildren = void 0);
  }, []), e0(() => {
    O.current = !0, D && (N.current = !0, window.MotionIsMounted = !0, D.updateFeatures(), D.scheduleRenderMicrotask(), J.current && D.animationState && D.animationState.animateChanges());
  }), Z.useEffect(() => {
    D && (!J.current && D.animationState && D.animationState.animateChanges(), J.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(P);
    }), J.current = !1), D.enteringChildren = void 0);
  }), D;
}
function jM(i, l, o, r) {
  const { layoutId: c, layout: h, drag: d, dragConstraints: m, layoutScroll: g, layoutRoot: v, layoutAnchor: b, layoutCrossfade: y } = l;
  i.projection = new o(i.latestValues, l["data-framer-portal-id"] ? void 0 : Z1(i.parent)), i.projection.setOptions({
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
function Z1(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : Z1(i.parent);
}
function Kf(i, { forwardMotionProps: l = !1, type: o } = {}, r, c) {
  r && gM(r);
  const h = o ? o === "svg" : fh(i), d = h ? RM : OM;
  function m(v, b) {
    let y;
    const S = {
      ...Z.useContext(L1),
      ...v,
      layoutId: UM(v)
    }, { isStatic: O, isValidProp: D } = S, U = vM(v), N = d(v, O);
    if (!O && typeof window < "u") {
      BM();
      const P = LM(S);
      y = P.MeasureLayout, U.visualElement = VM(i, N, S, c, P.ProjectionNode, h);
    }
    return B.jsxs(Hr.Provider, { value: U, children: [y && U.visualElement ? B.jsx(y, { visualElement: U.visualElement, ...S }) : null, wM(i, v, _M(N, U.visualElement, b), N, O, l, h, D)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const g = Z.forwardRef(m);
  return g[NM] = i, g;
}
function UM({ layoutId: i }) {
  const l = Z.useContext(fb).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function BM(i, l) {
  Z.useContext(H1).strict;
}
function LM(i) {
  const l = G1(), { drag: o, layout: r } = l;
  if (!o && !r)
    return {};
  const c = { ...o, ...r };
  return {
    MeasureLayout: o?.isEnabled(i) || r?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function HM(i, l) {
  if (typeof Proxy > "u")
    return Kf;
  const o = /* @__PURE__ */ new Map(), r = (h, d) => Kf(h, d, i, l), c = (h, d) => r(h, d);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (h, d) => d === "create" ? r : (o.has(d) || o.set(d, Kf(d, void 0, i, l)), o.get(d))
  });
}
const GM = (i, l) => l.isSVG ?? fh(i) ? new SC(l) : new vC(l, {
  allowProjection: i !== Z.Fragment
});
class YM extends ji {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = xC(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    Br(l) && (this.unmountControls = l.subscribe(this.node));
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
let qM = 0;
class XM extends ji {
  constructor() {
    super(...arguments), this.id = qM++;
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
const kM = {
  animation: {
    Feature: YM
  },
  exit: {
    Feature: XM
  }
};
function Gr(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const ZM = (i) => (l) => sh(l) && i(l, Gr(l));
function hs(i, l, o, r) {
  return xs(i, l, ZM(o), r);
}
const Q1 = ({ current: i }) => i ? i.ownerDocument.defaultView : null, ov = (i, l) => Math.abs(i - l);
function QM(i, l) {
  const o = ov(i.x, l.x), r = ov(i.y, l.y);
  return Math.sqrt(o ** 2 + r ** 2);
}
const rv = /* @__PURE__ */ new Set(["auto", "scroll"]);
class K1 {
  constructor(l, o, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: h = !1, distanceThreshold: d = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (D) => {
      this.handleScroll(D.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = rr(this.lastRawMoveEventInfo, this.transformPagePoint));
      const D = Pf(this.lastMoveEventInfo, this.history), U = this.startEvent !== null, N = QM(D.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!U && !N)
        return;
      const { point: P } = D;
      this.history.push({ ...P, timestamp: Pt.now() });
      const { onStart: J, onMove: q } = this.handlers;
      U || (J && J(this.lastMoveEvent, D), this.startEvent = this.lastMoveEvent), q && q(this.lastMoveEvent, D);
    }, this.handlePointerMove = (D, U) => {
      this.lastMoveEvent = D, this.lastRawMoveEventInfo = U, this.lastMoveEventInfo = rr(U, this.transformPagePoint), this.hasPendingMove = !0, qt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (D, U) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: N, onSessionEnd: P, resumeAnimation: J } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && J && J(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const q = Pf(D.type === "pointercancel" ? this.lastMoveEventInfo : rr(U, this.transformPagePoint), this.history);
      this.startEvent && N && N(D, q), P && P(D, q);
    }, !sh(l))
      return;
    this.dragSnapToOrigin = h, this.handlers = o, this.transformPagePoint = r, this.distanceThreshold = d, this.contextWindow = c || window;
    const g = Gr(l), v = rr(g, this.transformPagePoint), { point: b } = v, { timestamp: y } = ae;
    this.history = [{ ...b, timestamp: y }];
    const { onSessionStart: S } = o;
    S && S(l, Pf(v, this.history));
    const O = { passive: !0, capture: !0 };
    this.removeListeners = As(hs(this.contextWindow, "pointermove", this.handlePointerMove, O), hs(this.contextWindow, "pointerup", this.handlePointerUp, O), hs(this.contextWindow, "pointercancel", this.handlePointerUp, O)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let o = l.parentElement;
    for (; o; ) {
      const r = getComputedStyle(o);
      (rv.has(r.overflowX) || rv.has(r.overflowY)) && this.scrollPositions.set(o, {
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
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Ni(this.updatePoint);
  }
}
function rr(i, l) {
  return l ? { point: l(i.point) } : i;
}
function uv(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Pf({ point: i }, l) {
  return {
    point: i,
    delta: uv(i, P1(l)),
    offset: uv(i, KM(l)),
    velocity: PM(l, 0.1)
  };
}
function KM(i) {
  return i[0];
}
function P1(i) {
  return i[i.length - 1];
}
function PM(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let o = i.length - 1, r = null;
  const c = P1(i);
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
function JM(i, { min: l, max: o }, r) {
  return l !== void 0 && i < l ? i = r ? Gt(l, i, r.min) : Math.max(i, l) : o !== void 0 && i > o && (i = r ? Gt(o, i, r.max) : Math.min(i, o)), i;
}
function cv(i, l, o) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: o !== void 0 ? i.max + o - (i.max - i.min) : void 0
  };
}
function FM(i, { top: l, left: o, bottom: r, right: c }) {
  return {
    x: cv(i.x, o, c),
    y: cv(i.y, l, r)
  };
}
function fv(i, l) {
  let o = l.min - i.min, r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([o, r] = [r, o]), { min: o, max: r };
}
function IM(i, l) {
  return {
    x: fv(i.x, l.x),
    y: fv(i.y, l.y)
  };
}
function WM(i, l) {
  let o = 0.5;
  const r = Oe(i), c = Oe(l);
  return c > r ? o = /* @__PURE__ */ ha(l.min, l.max - r, i.min) : r > c && (o = /* @__PURE__ */ ha(i.min, i.max - c, l.min)), jn(0, 1, o);
}
function $M(i, l) {
  const o = {};
  return l.min !== void 0 && (o.min = l.min - i.min), l.max !== void 0 && (o.max = l.max - i.min), o;
}
const Ad = 0.35;
function tw(i = Ad) {
  return i === !1 ? i = 0 : i === !0 && (i = Ad), {
    x: dv(i, "left", "right"),
    y: dv(i, "top", "bottom")
  };
}
function dv(i, l, o) {
  return {
    min: hv(i, l),
    max: hv(i, o)
  };
}
function hv(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const ew = /* @__PURE__ */ new WeakMap();
class nw {
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
      const { drag: O, dragPropagation: D, onDragStart: U } = this.getProps();
      if (O && !D && (this.openDragLock && this.openDragLock(), this.openDragLock = P3(O), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), vn((P) => {
        let J = this.getAxisMotionValue(P).get() || 0;
        if (_n.test(J)) {
          const { projection: q } = this.visualElement;
          if (q && q.layout) {
            const Q = q.layout.layoutBox[P];
            Q && (J = Oe(Q) * (parseFloat(J) / 100));
          }
        }
        this.originPoint[P] = J;
      }), U && qt.update(() => U(y, S), !1, !0), bd(this.visualElement, "transform");
      const { animationState: N } = this.visualElement;
      N && N.setActive("whileDrag", !0);
    }, m = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S;
      const { dragPropagation: O, dragDirectionLock: D, onDirectionLock: U, onDrag: N } = this.getProps();
      if (!O && !this.openDragLock)
        return;
      const { offset: P } = S;
      if (D && this.currentDirection === null) {
        this.currentDirection = aw(P), this.currentDirection !== null && U && U(this.currentDirection);
        return;
      }
      this.updateAxis("x", S.point, P), this.updateAxis("y", S.point, P), this.visualElement.render(), N && qt.update(() => N(y, S), !1, !0);
    }, g = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S, this.stop(y, S), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, v = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: b } = this.getProps();
    this.panSession = new K1(l, {
      onSessionStart: h,
      onStart: d,
      onMove: m,
      onSessionEnd: g,
      resumeAnimation: v
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: b,
      distanceThreshold: r,
      contextWindow: Q1(this.visualElement),
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
    this.constraints && this.constraints[l] && (d = JM(d, this.constraints[l], this.elastic[l])), h.set(d);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: o } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && ll(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = FM(r.layoutBox, l) : this.constraints = !1, this.elastic = tw(o), c !== this.constraints && !ll(l) && r && this.constraints && !this.hasMutatedConstraints && vn((h) => {
      this.constraints !== !1 && this.getAxisMotionValue(h) && (this.constraints[h] = $M(r.layoutBox[h], this.constraints[h]));
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
    const h = K3(r, c.root, this.visualElement.getTransformPagePoint());
    let d = IM(c.layout.layoutBox, h);
    if (o) {
      const m = o(k3(d));
      this.hasMutatedConstraints = !!m, m && (d = f1(m));
    }
    return d;
  }
  startAnimation(l) {
    const { drag: o, dragMomentum: r, dragElastic: c, dragTransition: h, dragSnapToOrigin: d, onDragTransitionEnd: m } = this.getProps(), g = this.constraints || {}, v = vn((b) => {
      if (!ur(b, o, this.currentDirection))
        return;
      let y = g && g[b] || {};
      (d === !0 || d === b) && (y = { min: 0, max: 0 });
      const S = c ? 200 : 1e6, O = c ? 40 : 1e7, D = {
        type: "inertia",
        velocity: r ? l[b] : 0,
        bounceStiffness: S,
        bounceDamping: O,
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
    return bd(this.visualElement, l), r.start($d(l, r, 0, o, this.visualElement, !1));
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
      h[m] = WM({ min: g, max: g }, c[m]);
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
    ew.set(this.visualElement, this);
    const l = this.visualElement.current, o = hs(l, "pointerdown", (v) => {
      const { drag: b, dragListener: y = !0 } = this.getProps(), S = v.target, O = S !== l && tC(S);
      b && y && !O && this.start(v);
    });
    let r;
    const c = () => {
      const { dragConstraints: v } = this.getProps();
      ll(v) && v.current && (this.constraints = this.resolveRefConstraints(), r || (r = iw(l, v.current, () => this.scalePositionWithinConstraints())));
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
    const l = this.visualElement.getProps(), { drag: o = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: h = !1, dragElastic: d = Ad, dragMomentum: m = !0 } = l;
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
function mv(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function iw(i, l, o) {
  const r = D0(i, mv(o)), c = D0(l, mv(o));
  return () => {
    r(), c();
  };
}
function ur(i, l, o) {
  return (l === !0 || l === i) && (o === null || o === i);
}
function aw(i, l = 10) {
  let o = null;
  return Math.abs(i.y) > l ? o = "y" : Math.abs(i.x) > l && (o = "x"), o;
}
class lw extends ji {
  constructor(l) {
    super(l), this.removeGroupControls = Sn, this.removeListeners = Sn, this.controls = new nw(l);
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
const Jf = (i) => (l, o) => {
  i && qt.update(() => i(l, o), !1, !0);
};
class sw extends ji {
  constructor() {
    super(...arguments), this.removePointerDownListener = Sn;
  }
  onPointerDown(l) {
    this.session = new K1(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Q1(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: o, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Jf(l),
      onStart: Jf(o),
      onMove: Jf(r),
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
let Ff = !1;
class ow extends Z.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r, layoutId: c } = this.props, { projection: h } = l;
    h && (o.group && o.group.add(h), r && r.register && c && r.register(h), Ff && h.root.didUpdate(), h.addEventListener("animationComplete", () => {
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
    }), Ff = !0, c || l.layoutDependency !== o || o === void 0 || l.isPresent !== h ? d.willUpdate() : this.safeToRemove(), l.isPresent !== h && (h ? d.promote() : d.relegate() || qt.postRender(() => {
      const m = d.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: o } = this.props, { projection: r } = l;
    r && (r.options.layoutAnchor = o, r.root.didUpdate(), lh.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: o, switchLayoutGroup: r } = this.props, { projection: c } = l;
    Ff = !0, c && (c.scheduleCheckAfterUnmount(), o && o.group && o.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function J1(i) {
  const [l, o] = mM(), r = Z.useContext(fb);
  return B.jsx(ow, { ...i, layoutGroup: r, switchLayoutGroup: Z.useContext(k1), isPresent: l, safeToRemove: o });
}
const rw = {
  pan: {
    Feature: sw
  },
  drag: {
    Feature: lw,
    ProjectionNode: B1,
    MeasureLayout: J1
  }
};
function pv(i, l, o) {
  const { props: r } = i;
  i.animationState && r.whileHover && i.animationState.setActive("whileHover", o === "Start");
  const c = "onHover" + o, h = r[c];
  h && qt.postRender(() => h(l, Gr(l)));
}
class uw extends ji {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = F3(l, (o, r) => (pv(this.node, r, "Start"), (c) => pv(this.node, c, "End"))));
  }
  unmount() {
  }
}
class cw extends ji {
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
function gv(i, l, o) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && r.whileTap && i.animationState.setActive("whileTap", o === "Start");
  const c = "onTap" + (o === "End" ? "" : o), h = r[c];
  h && qt.postRender(() => h(l, Gr(l)));
}
class fw extends ji {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: o, propagate: r } = this.node.props;
    this.unmount = nC(l, (c, h) => (gv(this.node, h, "Start"), (d, { success: m }) => gv(this.node, d, m ? "End" : "Cancel")), {
      useGlobalTarget: o,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const Cd = /* @__PURE__ */ new WeakMap(), If = /* @__PURE__ */ new WeakMap(), dw = (i) => {
  const l = Cd.get(i.target);
  l && l(i);
}, hw = (i) => {
  i.forEach(dw);
};
function mw({ root: i, ...l }) {
  const o = i || document;
  If.has(o) || If.set(o, {});
  const r = If.get(o), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(hw, { root: i, ...l })), r[c];
}
function pw(i, l, o) {
  const r = mw(l);
  return Cd.set(i, o), r.observe(i), () => {
    Cd.delete(i), r.unobserve(i);
  };
}
const gw = {
  some: 0,
  all: 1
};
class yw extends ji {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: o, margin: r, amount: c = "some", once: h } = l, d = {
      root: o ? o.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : gw[c]
    }, m = (g) => {
      const { isIntersecting: v } = g;
      if (this.isInView === v || (this.isInView = v, h && !v && this.hasEnteredView))
        return;
      v && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", v);
      const { onViewportEnter: b, onViewportLeave: y } = this.node.getProps(), S = v ? b : y;
      S && S(g);
    };
    this.stopObserver = pw(this.node.current, d, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(vw(l, o)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function vw({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (o) => i[o] !== l[o];
}
const bw = {
  inView: {
    Feature: yw
  },
  tap: {
    Feature: fw
  },
  focus: {
    Feature: cw
  },
  hover: {
    Feature: uw
  }
}, Sw = {
  layout: {
    ProjectionNode: B1,
    MeasureLayout: J1
  }
}, Tw = {
  ...kM,
  ...bw,
  ...rw,
  ...Sw
}, xw = /* @__PURE__ */ HM(Tw, GM);
function Ew() {
  !rh.current && S1();
  const [i] = Z.useState(Or.current);
  return i;
}
const Aw = {
  some: 0,
  all: 1
};
function Cw(i, l, { root: o, margin: r, amount: c = "some" } = {}) {
  const h = ih(i), d = /* @__PURE__ */ new WeakMap(), m = (v) => {
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
    threshold: typeof c == "number" ? c : Aw[c]
  });
  return h.forEach((v) => g.observe(v)), () => g.disconnect();
}
function Mw(i, { root: l, margin: o, amount: r, once: c = !1, initial: h = !1 } = {}) {
  const [d, m] = Z.useState(h);
  return Z.useEffect(() => {
    if (!i.current || c && d)
      return;
    const g = () => (m(!0), c ? void 0 : () => m(!1)), v = {
      root: l && l.current || void 0,
      margin: o,
      amount: r
    };
    return Cw(i.current, g, v);
  }, [l, i, o, c, r]), d;
}
function ww({
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
  const g = Z.useRef(null), v = Mw(g, { amount: 0.15 }), b = Ew(), [y, S] = Z.useState(0), [O, D] = Z.useState(!1), [U, N] = Z.useState(!1), [P, J] = Z.useState(!0), q = Z.useId(), Q = r.length ? y % r.length : 0;
  Z.useEffect(() => {
    const at = () => J(!document.hidden);
    return at(), document.addEventListener("visibilitychange", at), () => document.removeEventListener("visibilitychange", at);
  }, []), Z.useEffect(() => {
    if (c <= 0 || r.length <= 1 || b || O || U || !v || !P) return;
    const at = window.setInterval(() => S((j) => (j + 1) % r.length), Math.max(3e3, c));
    return () => clearInterval(at);
  }, [c, r.length, b, O, U, v, P]);
  const dt = (at) => {
    D(!0), S((at + r.length) % r.length);
  };
  return /* @__PURE__ */ B.jsxs("section", { ref: g, id: "testimonials", "aria-labelledby": q, className: Iv("vt-testimonials", m), children: [
    /* @__PURE__ */ B.jsxs("div", { className: "vt-section-inner vt:grid vt:grid-cols-1 vt:gap-12 vt:md:grid-cols-2 vt:md:gap-16", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "vt-testimonial-intro", children: [
        o && /* @__PURE__ */ B.jsx("p", { className: "vt-review-badge", children: o }),
        /* @__PURE__ */ B.jsx("h2", { id: q, children: i }),
        /* @__PURE__ */ B.jsx("p", { children: l }),
        /* @__PURE__ */ B.jsxs("a", { href: "#feedback-form", className: "vt-text-link", children: [
          "Share your experience ",
          /* @__PURE__ */ B.jsx(t0, { size: 18, "aria-hidden": "true" })
        ] }),
        r.length > 1 && /* @__PURE__ */ B.jsxs("div", { className: "vt-review-controls", "aria-label": "Customer story controls", children: [
          /* @__PURE__ */ B.jsx("button", { type: "button", onClick: () => dt(Q - 1), "aria-label": "Previous review", children: /* @__PURE__ */ B.jsx(T2, { size: 19 }) }),
          /* @__PURE__ */ B.jsxs("span", { children: [
            String(Q + 1).padStart(2, "0"),
            " / ",
            String(r.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ B.jsx("button", { type: "button", onClick: () => dt(Q + 1), "aria-label": "Next review", children: /* @__PURE__ */ B.jsx(t0, { size: 19 }) }),
          !b && c > 0 && /* @__PURE__ */ B.jsx("button", { type: "button", onClick: () => D(!O), "aria-label": O ? "Play review slideshow" : "Pause review slideshow", children: O ? /* @__PURE__ */ B.jsx(ob, { size: 17 }) : /* @__PURE__ */ B.jsx(lb, { size: 17 }) })
        ] })
      ] }),
      /* @__PURE__ */ B.jsxs("div", { className: "vt-review-stage", onMouseEnter: () => N(!0), onMouseLeave: () => N(!1), onFocusCapture: () => N(!0), onBlurCapture: (at) => {
        at.currentTarget.contains(at.relatedTarget) || N(!1);
      }, "aria-roledescription": r.length ? "carousel" : void 0, "aria-label": "Customer feedback", children: [
        r.length ? /* @__PURE__ */ B.jsx("div", { className: "vt-review-stack", "aria-live": O ? "polite" : "off", children: r.map((at, j) => /* @__PURE__ */ B.jsxs(
          xw.article,
          {
            className: "vt-review-card",
            "aria-hidden": j !== Q,
            "aria-label": "Review " + (j + 1) + " of " + r.length,
            initial: !1,
            animate: { opacity: j === Q ? 1 : 0, x: b || j === Q ? 0 : 32, scale: b || j === Q ? 1 : 0.98 },
            transition: { duration: b ? 0 : 0.45, ease: "easeInOut" },
            style: { gridArea: "1 / 1", pointerEvents: j === Q ? "auto" : "none" },
            children: [
              /* @__PURE__ */ B.jsx("div", { className: "vt-review-stars", "aria-label": Math.max(1, Math.min(5, Math.round(at.rating || 1))) + " out of 5 stars", children: Array.from({ length: Math.max(1, Math.min(5, Math.round(at.rating || 1))) }, (_, St) => /* @__PURE__ */ B.jsx(cb, { size: 18, fill: "currentColor", "aria-hidden": "true" }, St)) }),
              /* @__PURE__ */ B.jsx(E2, { size: 38, strokeWidth: 1.2, className: "vt-quote-mark", "aria-hidden": "true" }),
              /* @__PURE__ */ B.jsx("blockquote", { children: at.content }),
              /* @__PURE__ */ B.jsx(Wv, { className: "vt:my-6" }),
              /* @__PURE__ */ B.jsx("p", { className: "vt-review-name", children: at.name })
            ]
          },
          at.id
        )) }) : /* @__PURE__ */ B.jsxs("div", { className: "vt-review-empty", children: [
          /* @__PURE__ */ B.jsx(x2, { size: 38, strokeWidth: 1.2, "aria-hidden": "true" }),
          /* @__PURE__ */ B.jsx("h3", { children: "Your story belongs here." }),
          /* @__PURE__ */ B.jsx("p", { children: "Our customer stories are just beginning. Once feedback has been reviewed and approved, you can read it here." }),
          /* @__PURE__ */ B.jsx("span", { children: "No published reviews yet." })
        ] }),
        r.length > 1 && /* @__PURE__ */ B.jsx("div", { className: "vt-review-dots", children: r.map((at, j) => /* @__PURE__ */ B.jsx("button", { type: "button", onClick: () => dt(j), "aria-label": "Read review by " + at.name, "aria-pressed": j === Q, children: /* @__PURE__ */ B.jsx("span", {}) }, at.id)) })
      ] })
    ] }),
    h.length > 0 && /* @__PURE__ */ B.jsxs("div", { className: "vt-section-inner vt-review-companies", children: [
      /* @__PURE__ */ B.jsx("h3", { children: d }),
      /* @__PURE__ */ B.jsx("div", { children: h.map((at) => /* @__PURE__ */ B.jsx("span", { children: at }, at)) })
    ] })
  ] });
}
const Wf = "vettiver-feedback-draft-v1";
function yv({ endpoint: i = "" }) {
  const [l, o] = Z.useState(""), [r, c] = Z.useState(""), [h, d] = Z.useState(0), [m, g] = Z.useState(!1), [v, b] = Z.useState(""), [y, S] = Z.useState(!1), [O, D] = Z.useState(!1), [U, N] = Z.useState(!1);
  async function P(q) {
    if (q.preventDefault(), S(!1), !l.trim() || !r.trim() || !h) {
      S(!0), b("Please add your name, feedback and a star rating.");
      return;
    }
    if (U || m) return;
    const Q = { name: l.trim(), content: r.trim(), rating: h };
    if (!i) {
      try {
        localStorage.setItem(Wf, JSON.stringify(Q)), b("Draft saved only on this device. It has not been sent or published.");
      } catch {
        S(!0), b("Your browser could not save the draft. Please copy your feedback to keep it.");
      }
      return;
    }
    g(!0);
    try {
      const dt = await fetch(i, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...Q, consentToPublish: O }), credentials: "same-origin" });
      if (!dt.ok) throw new Error("Request failed");
      const at = await dt.json();
      if (!at.id || at.status !== "pending") throw new Error("Invalid acknowledgement");
      N(!0), b("Thank you. Your feedback was received and is waiting for approval. It is not public yet.");
    } catch {
      S(!0), b("We could not submit your feedback. Nothing has been published. Please try again.");
    } finally {
      g(!1);
    }
  }
  function J() {
    try {
      const q = JSON.parse(localStorage.getItem(Wf) || "null");
      if (!q || typeof q.name != "string" || typeof q.content != "string" || !Number.isInteger(q.rating) || q.rating < 1 || q.rating > 5) {
        b("No saved draft on this device.");
        return;
      }
      o(q.name.slice(0, 80)), c(q.content.slice(0, 1200)), d(q.rating), b("Your draft is restored. It has not been sent.");
    } catch {
      b("No readable draft on this device.");
    }
  }
  return /* @__PURE__ */ B.jsxs("div", { className: "vt-feedback-wrap vt-section-inner", children: [
    /* @__PURE__ */ B.jsxs("div", { className: "vt-feedback-heading", children: [
      /* @__PURE__ */ B.jsx("h3", { children: "A few words mean a lot." }),
      /* @__PURE__ */ B.jsx("p", { children: "Tell us about your Vettiver experience." })
    ] }),
    /* @__PURE__ */ B.jsxs("form", { id: "feedback-form", className: "vt-feedback-form", onSubmit: P, "aria-label": "Share customer feedback", children: [
      /* @__PURE__ */ B.jsxs("div", { className: "vt-feedback-fields", children: [
        /* @__PURE__ */ B.jsxs("div", { children: [
          /* @__PURE__ */ B.jsx("label", { htmlFor: "feedback-name", children: "Your name" }),
          /* @__PURE__ */ B.jsx("input", { id: "feedback-name", name: "name", autoComplete: "name", maxLength: 80, required: !0, value: l, onChange: (q) => o(q.target.value), disabled: m || U })
        ] }),
        /* @__PURE__ */ B.jsxs("fieldset", { children: [
          /* @__PURE__ */ B.jsx("legend", { children: "Your rating" }),
          /* @__PURE__ */ B.jsx("div", { className: "vt-rating-input", children: [1, 2, 3, 4, 5].map((q) => /* @__PURE__ */ B.jsxs("label", { className: q <= h ? "is-selected" : "", children: [
            /* @__PURE__ */ B.jsx("input", { type: "radio", name: "rating", value: q, required: !0, checked: h === q, onChange: () => d(q), disabled: m || U }),
            /* @__PURE__ */ B.jsx(cb, { size: 25, fill: q <= h ? "currentColor" : "none", "aria-hidden": "true" }),
            /* @__PURE__ */ B.jsxs("span", { className: "vt:sr-only", children: [
              q,
              " ",
              q === 1 ? "star" : "stars"
            ] })
          ] }, q)) })
        ] })
      ] }),
      /* @__PURE__ */ B.jsx("label", { htmlFor: "feedback-content", children: "Your feedback" }),
      /* @__PURE__ */ B.jsx("textarea", { id: "feedback-content", name: "content", rows: 3, maxLength: 1200, required: !0, value: r, onChange: (q) => c(q.target.value), disabled: m || U, placeholder: "What did you choose, and how was your experience?" }),
      i ? /* @__PURE__ */ B.jsxs("label", { className: "vt-feedback-consent", children: [
        /* @__PURE__ */ B.jsx("input", { type: "checkbox", required: !0, checked: O, onChange: (q) => D(q.target.checked), disabled: m || U }),
        " I agree that my name, rating and feedback may be published after review."
      ] }) : /* @__PURE__ */ B.jsx("p", { className: "vt-feedback-note", children: "Review submissions will open when our approval system is ready. For now, save a draft on this device. Nothing is sent to us." }),
      /* @__PURE__ */ B.jsxs("div", { className: "vt-feedback-actions", children: [
        /* @__PURE__ */ B.jsxs("button", { className: "vt-primary-button", type: "submit", disabled: m || U, children: [
          m ? "Sending…" : U ? "Waiting for approval" : i ? "Send for approval" : "Save feedback draft",
          /* @__PURE__ */ B.jsx(nb, { size: 18, "aria-hidden": "true" })
        ] }),
        !i && /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
          /* @__PURE__ */ B.jsx("button", { className: "vt-text-link", type: "button", onClick: J, children: "Restore draft" }),
          /* @__PURE__ */ B.jsx("button", { className: "vt-text-link", type: "button", onClick: () => {
            try {
              localStorage.removeItem(Wf), b("Saved draft removed from this device.");
            } catch {
              b("Could not remove the saved draft.");
            }
          }, children: "Delete saved draft" })
        ] })
      ] }),
      /* @__PURE__ */ B.jsx("p", { className: "vt-feedback-status" + (y ? " is-error" : ""), role: "status", "aria-live": "polite", children: v })
    ] })
  ] });
}
const Es = (i, l, o) => i < l ? l : i > o ? o : i, vv = (i, l = "174, 204, 135") => {
  const o = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec((i || "").trim());
  if (!o) return l;
  const r = o[1].length === 3 ? o[1].replace(/./g, (h) => h + h) : o[1], c = parseInt(r, 16);
  return (c >> 16 & 255) + ", " + (c >> 8 & 255) + ", " + (c & 255);
}, Dw = (i, l, o) => {
  if (!(i > 0) || !(l > 0)) return 0;
  const r = 100 * l / i;
  return o > 0 ? Math.min(r, o) : r;
}, zw = (i, l = 30, o = 82) => l + (o - l) * Es(Number.isFinite(i) ? i : 0.5, 0, 1), bv = (i, l = 58, o = 9) => l + o * (0.7 * Math.sin(i * 0.21) + 0.3 * Math.sin(i * 0.077 + 1.3)), cr = (i, l, o, r) => l + (i - l) * Math.pow(1 - Es(o, 0, 1), Es(r, 0, 0.1) * 60), Ow = (i, l) => !(i > 0) || !(l >= 0) ? 0.8 : Es(((100 - i - l) / 2 + i) / 100, 0.5, 1.2), Rw = (i, l, o) => Math.max(0, i * (l + Es(Number.isFinite(o) ? o : 0, -0.4, 0.4))), Sv = {
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
}, Nw = [
  { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "#about" }, { label: "Customer stories", href: "#reviews" }] },
  { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "#feedback-form" }, { label: "Good to know", href: "#questions-title" }, { label: "Back to the top", href: "#home" }] }
];
function _w({
  brand: i = "Vettiver",
  wordmark: l,
  company: o = "Akash Vetiver Export",
  year: r = (/* @__PURE__ */ new Date()).getFullYear(),
  socials: c = [],
  credits: h = [{ label: "Natural roots. Thoughtful hands." }, { lead: "Handcrafted in ", label: "Tamil Nadu, India" }],
  columns: d = Nw,
  onLinkClick: m,
  cut: g = 0.1,
  background: v = "#08170f",
  ink: b = "#f4f8ef",
  muted: y = "#bacbb5",
  accent: S = "#b1cd8b",
  wordTop: O = "#668b54",
  wordFoot: D = "#152d1c",
  fontSans: U = "Outfit, sans-serif",
  wordWeight: N = 600,
  animate: P = !0,
  className: J = ""
}) {
  const q = (l ?? i).trim() || i, Q = Z.useMemo(() => Array.from(q), [q]), dt = Z.useRef(null), at = Z.useRef(null), [j, _] = Z.useState(0), [St, gt] = Z.useState(0.8), [I, F] = Z.useState(!1), [et, nt] = Z.useState(!1), [W, H] = Z.useState(!1), [k, $] = Z.useState(!1), [tt, L] = Z.useState(!0), bt = Z.useRef({ u: 0.5, x: 0, y: 0, inside: !1 });
  Z.useLayoutEffect(() => {
    const w = dt.current, X = at.current;
    if (!w || !X) return;
    let K = 0, pt = !0;
    const ft = () => {
      const ht = X.parentElement, le = getComputedStyle(ht), Re = ht.clientWidth - parseFloat(le.paddingLeft) - parseFloat(le.paddingRight);
      X.style.fontSize = "100px";
      const Ae = Dw(X.getBoundingClientRect().width, Re, Re * 0.42);
      X.style.fontSize = Ae + "px", _(Ae);
      const Wt = document.createElement("canvas").getContext("2d");
      if (Wt) {
        Wt.font = N + " 100px " + U;
        const _t = Wt.measureText(q);
        gt(Ow(_t.fontBoundingBoxAscent, _t.fontBoundingBoxDescent));
      }
      const $t = w.getBoundingClientRect();
      w.style.setProperty("--bwf-rw", $t.width + "px"), w.style.setProperty("--bwf-rh", $t.height + "px"), X.querySelectorAll(".bwf-l").forEach((_t) => {
        let Le = 0, ti = 0, Ce = _t;
        for (; Ce && Ce !== w; )
          Le += Ce.offsetLeft, ti += Ce.offsetTop, Ce = Ce.offsetParent;
        _t.style.setProperty("--bwf-x", Le + "px"), _t.style.setProperty("--bwf-y", ti + "px");
      });
    }, At = () => {
      cancelAnimationFrame(K), K = requestAnimationFrame(ft);
    };
    ft();
    const lt = new ResizeObserver(At);
    return lt.observe(w), document.fonts.ready.then(() => {
      pt && At();
    }), () => {
      pt = !1, cancelAnimationFrame(K), lt.disconnect();
    };
  }, [q, U, N]), Z.useEffect(() => {
    const w = matchMedia("(prefers-reduced-motion: reduce)"), X = () => H(w.matches), K = () => L(!document.hidden);
    X(), K(), w.addEventListener("change", X), document.addEventListener("visibilitychange", K);
    const pt = new IntersectionObserver(([ft]) => {
      nt(ft.isIntersecting), ft.isIntersecting && F(!0);
    }, { threshold: 0.1 });
    return dt.current && pt.observe(dt.current), () => {
      pt.disconnect(), w.removeEventListener("change", X), document.removeEventListener("visibilitychange", K);
    };
  }, []), Z.useEffect(() => {
    const w = dt.current;
    if (!w) return;
    if (W || k || !P || !et || !tt) {
      w.style.setProperty("--bwf-g", "0");
      return;
    }
    let X = 0, K = performance.now(), pt = K / 1e3, ft = 58, At = 0, lt = 0, ht = 0;
    const le = (Re) => {
      const Ae = Math.min(0.1, (Re - K) / 1e3);
      K = Re, pt += Ae;
      const Wt = bt.current;
      ft = cr(ft, Wt.inside ? zw(Wt.u) * 0.75 + bv(pt) * 0.25 : bv(pt), 0.035, Ae), At = cr(At, Wt.x, 0.16, Ae), lt = cr(lt, Wt.y, 0.16, Ae), ht = cr(ht, Wt.inside ? 1 : 0, 0.06, Ae), w.style.setProperty("--bwf-b", ft.toFixed(2) + "%"), w.style.setProperty("--bwf-px", At.toFixed(1) + "px"), w.style.setProperty("--bwf-py", lt.toFixed(1) + "px"), w.style.setProperty("--bwf-g", ht.toFixed(3)), X = requestAnimationFrame(le);
    };
    return X = requestAnimationFrame(le), () => cancelAnimationFrame(X);
  }, [W, k, P, et, tt]);
  const yt = (w) => {
    if (w.pointerType === "touch" || W) return;
    const X = w.currentTarget.getBoundingClientRect();
    bt.current = { x: w.clientX - X.left, y: w.clientY - X.top, u: (w.clientX - X.left) / X.width, inside: w.type !== "pointerleave" };
  }, Rt = (w, X, K) => {
    (!K || K === "#") && w.preventDefault(), m?.(X, K);
  }, x = {
    "--bwf-bg": v,
    "--bwf-bg-rgb": vv(v),
    "--bwf-ink": b,
    "--bwf-muted": y,
    "--bwf-acc": vv(S),
    "--bwf-wt": O,
    "--bwf-wf": D,
    "--bwf-sans": U,
    "--bwf-ww": N,
    "--bwf-b": "58%",
    "--bwf-px": "50%",
    "--bwf-py": "50%",
    "--bwf-g": "0"
  };
  return /* @__PURE__ */ B.jsxs("footer", { ref: dt, className: "bwf " + J, style: x, "data-in": I || W ? "true" : "false", "data-motion": W || k || !P ? "paused" : et && tt ? "running" : "idle", onPointerMove: yt, onPointerEnter: yt, onPointerLeave: yt, children: [
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
        c.length > 0 && /* @__PURE__ */ B.jsx("ul", { className: "bwf-socials", children: c.map((w, X) => /* @__PURE__ */ B.jsx("li", { children: /* @__PURE__ */ B.jsx("a", { href: w.href || "#", className: "bwf-soc", "aria-label": w.label, onClick: (K) => Rt(K, w.label, w.href), ...w.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: typeof w.icon == "string" && w.icon in Sv ? Sv[w.icon] : w.icon }) }, w.label + X)) }),
        /* @__PURE__ */ B.jsx("div", { className: "bwf-credits", children: h.map((w, X) => /* @__PURE__ */ B.jsxs("p", { children: [
          w.lead,
          w.href ? /* @__PURE__ */ B.jsx("a", { href: w.href, onClick: (K) => Rt(K, w.label, w.href), children: w.label }) : /* @__PURE__ */ B.jsx("b", { children: w.label }),
          w.tail
        ] }, X)) }),
        P && !W && /* @__PURE__ */ B.jsxs("button", { type: "button", className: "bwf-motion-toggle", onClick: () => $(!k), "aria-pressed": k, children: [
          k ? /* @__PURE__ */ B.jsx(ob, { size: 14 }) : /* @__PURE__ */ B.jsx(lb, { size: 14 }),
          k ? "Resume light" : "Pause light"
        ] })
      ] }),
      d.map((w, X) => /* @__PURE__ */ B.jsxs("nav", { className: "bwf-col", "aria-label": w.title, children: [
        /* @__PURE__ */ B.jsx("p", { className: "bwf-label", children: w.title }),
        /* @__PURE__ */ B.jsx("ul", { className: "bwf-links", children: w.links.map((K, pt) => /* @__PURE__ */ B.jsx("li", { children: /* @__PURE__ */ B.jsxs("a", { className: "bwf-link", href: K.href || "#", onClick: (ft) => Rt(ft, K.label, K.href), children: [
          /* @__PURE__ */ B.jsx("span", { children: K.label }),
          /* @__PURE__ */ B.jsx(nb, { size: 16, "aria-hidden": "true" })
        ] }) }, K.label + pt)) })
      ] }, w.title + X))
    ] }),
    /* @__PURE__ */ B.jsxs("div", { className: "bwf-word", style: { height: j ? Rw(j, St, g) : "26vw" }, children: [
      /* @__PURE__ */ B.jsx("p", { className: "vt:sr-only", children: q }),
      /* @__PURE__ */ B.jsx("div", { className: "bwf-word-box", children: /* @__PURE__ */ B.jsx("div", { ref: at, className: "bwf-word-in", "aria-hidden": "true", children: Q.map((w, X) => /* @__PURE__ */ B.jsx("span", { className: "bwf-lw", style: { "--bwf-d": 180 + X * 65 + "ms" }, children: /* @__PURE__ */ B.jsx("span", { className: "bwf-l", onClick: (K) => {
        if (!W) {
          const pt = K.currentTarget;
          pt.classList.remove("is-hop"), pt.offsetWidth, pt.classList.add("is-hop");
        }
      }, onAnimationEnd: (K) => K.currentTarget.classList.remove("is-hop"), children: w === " " ? " " : w }) }, X)) }) }),
      /* @__PURE__ */ B.jsx("div", { className: "bwf-foot", "aria-hidden": "true" })
    ] })
  ] });
}
const Vw = [], $f = window.VETTIVER_CONFIG?.feedbackEndpoint || "", jw = $f.startsWith("/") && !$f.startsWith("//") ? $f : "", Vr = document.getElementById("testimonials-root");
if (Vr) {
  const i = xv.createRoot(Vr), l = /* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx(ww, { testimonials: Vw }),
    /* @__PURE__ */ B.jsx(yv, { endpoint: jw })
  ] });
  new URLSearchParams(location.search).get("ui-demo") === "testimonials" ? import("./demo-BAfc0SC7.js").then(({ AnimatedTestimonialsBasic: o }) => i.render(/* @__PURE__ */ B.jsxs(B.Fragment, { children: [
    /* @__PURE__ */ B.jsx(o, {}),
    /* @__PURE__ */ B.jsx(yv, { endpoint: "" })
  ] }))) : i.render(l);
}
const jr = document.getElementById("footer-root");
jr && xv.createRoot(jr).render(/* @__PURE__ */ B.jsx(_w, {}));
let Md = 0;
const dh = new ResizeObserver(() => {
  cancelAnimationFrame(Md), Md = requestAnimationFrame(() => window.ScrollTrigger?.refresh());
});
Vr && dh.observe(Vr);
jr && dh.observe(jr);
window.addEventListener("pagehide", (i) => {
  i.persisted || (dh.disconnect(), cancelAnimationFrame(Md));
});
export {
  ww as A,
  B as j
};
