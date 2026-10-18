function OE(i, l) {
  for (var s = 0; s < l.length; s++) {
    const o = l[s];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const c in o)
        if (c !== "default" && !(c in i)) {
          const d = Object.getOwnPropertyDescriptor(o, c);
          d && Object.defineProperty(i, c, d.get ? d : {
            enumerable: !0,
            get: () => o[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
function NE(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Jf = { exports: {} }, zs = {};
var bv;
function RE() {
  if (bv) return zs;
  bv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(o, c, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), c.key !== void 0 && (f = "" + c.key), "key" in c) {
      d = {};
      for (var m in c)
        m !== "key" && (d[m] = c[m]);
    } else d = c;
    return c = d.ref, {
      $$typeof: i,
      type: o,
      key: f,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return zs.Fragment = l, zs.jsx = s, zs.jsxs = s, zs;
}
var Sv;
function _E() {
  return Sv || (Sv = 1, Jf.exports = RE()), Jf.exports;
}
var D = _E(), If = { exports: {} }, Os = {}, Wf = { exports: {} }, $f = {};
var Tv;
function VE() {
  return Tv || (Tv = 1, (function(i) {
    function l(X, J) {
      var it = X.length;
      X.push(J);
      t: for (; 0 < it; ) {
        var at = it - 1 >>> 1, Y = X[at];
        if (0 < c(Y, J))
          X[at] = J, X[it] = Y, it = at;
        else break t;
      }
    }
    function s(X) {
      return X.length === 0 ? null : X[0];
    }
    function o(X) {
      if (X.length === 0) return null;
      var J = X[0], it = X.pop();
      if (it !== J) {
        X[0] = it;
        t: for (var at = 0, Y = X.length, yt = Y >>> 1; at < yt; ) {
          var vt = 2 * (at + 1) - 1, At = X[vt], C = vt + 1, L = X[C];
          if (0 > c(At, it))
            C < Y && 0 > c(L, At) ? (X[at] = L, X[C] = it, at = C) : (X[at] = At, X[vt] = it, at = vt);
          else if (C < Y && 0 > c(L, it))
            X[at] = L, X[C] = it, at = C;
          else break t;
        }
      }
      return J;
    }
    function c(X, J) {
      var it = X.sortIndex - J.sortIndex;
      return it !== 0 ? it : X.id - J.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      i.unstable_now = function() {
        return d.now();
      };
    } else {
      var f = Date, m = f.now();
      i.unstable_now = function() {
        return f.now() - m;
      };
    }
    var p = [], g = [], v = 1, y = null, S = 3, A = !1, T = !1, w = !1, E = !1, z = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, G = typeof setImmediate < "u" ? setImmediate : null;
    function _(X) {
      for (var J = s(g); J !== null; ) {
        if (J.callback === null) o(g);
        else if (J.startTime <= X)
          o(g), J.sortIndex = J.expirationTime, l(p, J);
        else break;
        J = s(g);
      }
    }
    function Q(X) {
      if (w = !1, _(X), !T)
        if (s(p) !== null)
          T = !0, K || (K = !0, I());
        else {
          var J = s(g);
          J !== null && nt(Q, J.startTime - X);
        }
    }
    var K = !1, N = -1, O = 5, ot = -1;
    function ut() {
      return E ? !0 : !(i.unstable_now() - ot < O);
    }
    function F() {
      if (E = !1, K) {
        var X = i.unstable_now();
        ot = X;
        var J = !0;
        try {
          t: {
            T = !1, w && (w = !1, B(N), N = -1), A = !0;
            var it = S;
            try {
              e: {
                for (_(X), y = s(p); y !== null && !(y.expirationTime > X && ut()); ) {
                  var at = y.callback;
                  if (typeof at == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var Y = at(
                      y.expirationTime <= X
                    );
                    if (X = i.unstable_now(), typeof Y == "function") {
                      y.callback = Y, _(X), J = !0;
                      break e;
                    }
                    y === s(p) && o(p), _(X);
                  } else o(p);
                  y = s(p);
                }
                if (y !== null) J = !0;
                else {
                  var yt = s(g);
                  yt !== null && nt(
                    Q,
                    yt.startTime - X
                  ), J = !1;
                }
              }
              break t;
            } finally {
              y = null, S = it, A = !1;
            }
            J = void 0;
          }
        } finally {
          J ? I() : K = !1;
        }
      }
    }
    var I;
    if (typeof G == "function")
      I = function() {
        G(F);
      };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), et = lt.port2;
      lt.port1.onmessage = F, I = function() {
        et.postMessage(null);
      };
    } else
      I = function() {
        z(F, 0);
      };
    function nt(X, J) {
      N = z(function() {
        X(i.unstable_now());
      }, J);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, i.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : O = 0 < X ? Math.floor(1e3 / X) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, i.unstable_next = function(X) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = S;
      }
      var it = S;
      S = J;
      try {
        return X();
      } finally {
        S = it;
      }
    }, i.unstable_requestPaint = function() {
      E = !0;
    }, i.unstable_runWithPriority = function(X, J) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var it = S;
      S = X;
      try {
        return J();
      } finally {
        S = it;
      }
    }, i.unstable_scheduleCallback = function(X, J, it) {
      var at = i.unstable_now();
      switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? at + it : at) : it = at, X) {
        case 1:
          var Y = -1;
          break;
        case 2:
          Y = 250;
          break;
        case 5:
          Y = 1073741823;
          break;
        case 4:
          Y = 1e4;
          break;
        default:
          Y = 5e3;
      }
      return Y = it + Y, X = {
        id: v++,
        callback: J,
        priorityLevel: X,
        startTime: it,
        expirationTime: Y,
        sortIndex: -1
      }, it > at ? (X.sortIndex = it, l(g, X), s(p) === null && X === s(g) && (w ? (B(N), N = -1) : w = !0, nt(Q, it - at))) : (X.sortIndex = Y, l(p, X), T || A || (T = !0, K || (K = !0, I()))), X;
    }, i.unstable_shouldYield = ut, i.unstable_wrapCallback = function(X) {
      var J = S;
      return function() {
        var it = S;
        S = J;
        try {
          return X.apply(this, arguments);
        } finally {
          S = it;
        }
      };
    };
  })($f)), $f;
}
var xv;
function jE() {
  return xv || (xv = 1, Wf.exports = VE()), Wf.exports;
}
var td = { exports: {} }, Et = {};
var Ev;
function LE() {
  if (Ev) return Et;
  Ev = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = /* @__PURE__ */ Symbol.for("react.view_transition"), A = Symbol.iterator;
  function T(C) {
    return C === null || typeof C != "object" ? null : (C = A && C[A] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var w = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, E = Object.assign, z = {};
  function B(C, L, tt) {
    this.props = C, this.context = L, this.refs = z, this.updater = tt || w;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(C, L) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, L, "setState");
  }, B.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function G() {
  }
  G.prototype = B.prototype;
  function _(C, L, tt) {
    this.props = C, this.context = L, this.refs = z, this.updater = tt || w;
  }
  var Q = _.prototype = new G();
  Q.constructor = _, E(Q, B.prototype), Q.isPureReactComponent = !0;
  var K = Array.isArray;
  function N() {
  }
  var O = { H: null, A: null, T: null, S: null }, ot = Object.prototype.hasOwnProperty;
  function ut(C, L, tt) {
    var W = tt.ref;
    return {
      $$typeof: i,
      type: C,
      key: L,
      ref: W !== void 0 ? W : null,
      props: tt
    };
  }
  function F(C, L) {
    return ut(C.type, L, C.props);
  }
  function I(C) {
    return typeof C == "object" && C !== null && C.$$typeof === i;
  }
  function lt(C) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(tt) {
      return L[tt];
    });
  }
  var et = /\/+/g;
  function nt(C, L) {
    return typeof C == "object" && C !== null && C.key != null ? lt("" + C.key) : L.toString(36);
  }
  function X(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(N, N) : (C.status = "pending", C.then(
          function(L) {
            C.status === "pending" && (C.status = "fulfilled", C.value = L);
          },
          function(L) {
            C.status === "pending" && (C.status = "rejected", C.reason = L);
          }
        )), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function J(C, L, tt, W, ft) {
    var ct = typeof C;
    (ct === "undefined" || ct === "boolean") && (C = null);
    var St = !1;
    if (C === null) St = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          St = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case i:
            case l:
              St = !0;
              break;
            case v:
              return St = C._init, J(
                St(C._payload),
                L,
                tt,
                W,
                ft
              );
          }
      }
    if (St)
      return ft = ft(C), St = W === "" ? "." + nt(C, 0) : W, K(ft) ? (tt = "", St != null && (tt = St.replace(et, "$&/") + "/"), J(ft, L, tt, "", function(xt) {
        return xt;
      })) : ft != null && (I(ft) && (ft = F(
        ft,
        tt + (ft.key == null || C && C.key === ft.key ? "" : ("" + ft.key).replace(
          et,
          "$&/"
        ) + "/") + St
      )), L.push(ft)), 1;
    St = 0;
    var st = W === "" ? "." : W + ":";
    if (K(C))
      for (var $ = 0; $ < C.length; $++)
        W = C[$], ct = st + nt(W, $), St += J(
          W,
          L,
          tt,
          ct,
          ft
        );
    else if ($ = T(C), typeof $ == "function")
      for (C = $.call(C), $ = 0; !(W = C.next()).done; )
        W = W.value, ct = st + nt(W, $++), St += J(
          W,
          L,
          tt,
          ct,
          ft
        );
    else if (ct === "object") {
      if (typeof C.then == "function")
        return J(
          X(C),
          L,
          tt,
          W,
          ft
        );
      throw L = String(C), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return St;
  }
  function it(C, L, tt) {
    if (C == null) return C;
    var W = [], ft = 0;
    return J(C, W, "", "", function(ct) {
      return L.call(tt, ct, ft++);
    }), W;
  }
  function at(C) {
    if (C._status === -1) {
      var L = C._result, tt = L();
      tt.then(
        function(W) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = W, tt.status === void 0 && (tt.status = "fulfilled", tt.value = W));
        },
        function(W) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = W, tt.status === void 0 && (tt.status = "rejected", tt.reason = W));
        }
      ), C._status === -1 && (C._status = 0, C._result = tt);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function yt(C) {
    var L = O.T, tt = {};
    tt.types = L !== null ? L.types : null, O.T = tt;
    try {
      var W = C(), ft = O.S;
      ft !== null && ft(tt, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(N, Y);
    } catch (ct) {
      Y(ct);
    } finally {
      L !== null && tt.types !== null && (L.types = tt.types), O.T = L;
    }
  }
  function vt(C) {
    var L = O.T;
    if (L !== null) {
      var tt = L.types;
      tt === null ? L.types = [C] : tt.indexOf(C) === -1 && tt.push(C);
    } else yt(vt.bind(null, C));
  }
  var At = {
    map: it,
    forEach: function(C, L, tt) {
      it(
        C,
        function() {
          L.apply(this, arguments);
        },
        tt
      );
    },
    count: function(C) {
      var L = 0;
      return it(C, function() {
        L++;
      }), L;
    },
    toArray: function(C) {
      return it(C, function(L) {
        return L;
      }) || [];
    },
    only: function(C) {
      if (!I(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  };
  return Et.Activity = y, Et.Children = At, Et.Component = B, Et.Fragment = s, Et.Profiler = c, Et.PureComponent = _, Et.StrictMode = o, Et.Suspense = p, Et.ViewTransition = S, Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, Et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(C) {
      return O.H.useMemoCache(C);
    }
  }, Et.addTransitionType = vt, Et.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, Et.cacheSignal = function() {
    return null;
  }, Et.cloneElement = function(C, L, tt) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var W = E({}, C.props), ft = C.key;
    if (L != null)
      for (ct in L.key !== void 0 && (ft = "" + L.key), L)
        !ot.call(L, ct) || ct === "key" || ct === "__self" || ct === "__source" || ct === "ref" && L.ref === void 0 || (W[ct] = L[ct]);
    var ct = arguments.length - 2;
    if (ct === 1) W.children = tt;
    else if (1 < ct) {
      for (var St = Array(ct), st = 0; st < ct; st++)
        St[st] = arguments[st + 2];
      W.children = St;
    }
    return ut(C.type, ft, W);
  }, Et.createContext = function(C) {
    return C = {
      $$typeof: f,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, C.Provider = C, C.Consumer = {
      $$typeof: d,
      _context: C
    }, C;
  }, Et.createElement = function(C, L, tt) {
    var W, ft = {}, ct = null;
    if (L != null)
      for (W in L.key !== void 0 && (ct = "" + L.key), L)
        ot.call(L, W) && W !== "key" && W !== "__self" && W !== "__source" && (ft[W] = L[W]);
    var St = arguments.length - 2;
    if (St === 1) ft.children = tt;
    else if (1 < St) {
      for (var st = Array(St), $ = 0; $ < St; $++)
        st[$] = arguments[$ + 2];
      ft.children = st;
    }
    if (C && C.defaultProps)
      for (W in St = C.defaultProps, St)
        ft[W] === void 0 && (ft[W] = St[W]);
    return ut(C, ct, ft);
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(C) {
    return { $$typeof: m, render: C };
  }, Et.isValidElement = I, Et.lazy = function(C) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: C },
      _init: at
    };
  }, Et.memo = function(C, L) {
    return {
      $$typeof: g,
      type: C,
      compare: L === void 0 ? null : L
    };
  }, Et.startTransition = yt, Et.unstable_useCacheRefresh = function() {
    return O.H.useCacheRefresh();
  }, Et.use = function(C) {
    return O.H.use(C);
  }, Et.useActionState = function(C, L, tt) {
    return O.H.useActionState(C, L, tt);
  }, Et.useCallback = function(C, L) {
    return O.H.useCallback(C, L);
  }, Et.useContext = function(C) {
    return O.H.useContext(C);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(C, L) {
    return O.H.useDeferredValue(C, L);
  }, Et.useEffect = function(C, L) {
    return O.H.useEffect(C, L);
  }, Et.useEffectEvent = function(C) {
    return O.H.useEffectEvent(C);
  }, Et.useId = function() {
    return O.H.useId();
  }, Et.useImperativeHandle = function(C, L, tt) {
    return O.H.useImperativeHandle(C, L, tt);
  }, Et.useInsertionEffect = function(C, L) {
    return O.H.useInsertionEffect(C, L);
  }, Et.useLayoutEffect = function(C, L) {
    return O.H.useLayoutEffect(C, L);
  }, Et.useMemo = function(C, L) {
    return O.H.useMemo(C, L);
  }, Et.useOptimistic = function(C, L) {
    return O.H.useOptimistic(C, L);
  }, Et.useReducer = function(C, L, tt) {
    return O.H.useReducer(C, L, tt);
  }, Et.useRef = function(C) {
    return O.H.useRef(C);
  }, Et.useState = function(C) {
    return O.H.useState(C);
  }, Et.useSyncExternalStore = function(C, L, tt) {
    return O.H.useSyncExternalStore(
      C,
      L,
      tt
    );
  }, Et.useTransition = function() {
    return O.H.useTransition();
  }, Et.version = "19.3.0", Et;
}
var Av;
function lh() {
  return Av || (Av = 1, td.exports = LE()), td.exports;
}
var ed = { exports: {} }, we = {};
var wv;
function BE() {
  if (wv) return we;
  wv = 1;
  var i = lh();
  function l(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        y += "&args[]=" + encodeURIComponent(arguments[S]);
    }
    return "Minified React error #" + v + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s() {
  }
  var o = {
    d: {
      f: s,
      r: function() {
        throw Error(l(522));
      },
      D: s,
      C: s,
      L: s,
      m: s,
      X: s,
      S: s,
      M: s
    },
    p: 0,
    findDOMNode: null
  }, c = /* @__PURE__ */ Symbol.for("react.portal"), d = /* @__PURE__ */ Symbol.for("react.recoverable"), f = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function m(v, y, S) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: A == null ? null : A === f ? f : "" + A,
      children: v,
      containerInfo: y,
      implementation: S
    };
  }
  var p = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(v, y) {
    if (v === "font") return "";
    if (typeof y == "string")
      return y === "use-credentials" ? y : "";
  }
  return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, we.browser = function(v) {
    return { $$typeof: d, _reason: v };
  }, we.createPortal = function(v, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(l(299));
    return m(v, y, null, S);
  }, we.flushSync = function(v) {
    var y = p.T, S = o.p;
    try {
      if (p.T = null, o.p = 2, v) return v();
    } finally {
      p.T = y, o.p = S, o.d.f();
    }
  }, we.preconnect = function(v, y) {
    typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(v, y));
  }, we.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, we.preinit = function(v, y) {
    if (typeof v == "string" && y && typeof y.as == "string") {
      var S = y.as, A = g(S, y.crossOrigin), T = typeof y.integrity == "string" ? y.integrity : void 0, w = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? o.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: A,
          integrity: T,
          fetchPriority: w
        }
      ) : S === "script" && o.d.X(v, {
        crossOrigin: A,
        integrity: T,
        fetchPriority: w,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, we.preinitModule = function(v, y) {
    if (typeof v == "string")
      if (typeof y == "object" && y !== null) {
        if (y.as == null || y.as === "script") {
          var S = g(
            y.as,
            y.crossOrigin
          );
          o.d.M(v, {
            crossOrigin: S,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
          });
        }
      } else y == null && o.d.M(v);
  }, we.preload = function(v, y) {
    if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var S = y.as, A = g(S, y.crossOrigin);
      o.d.L(v, S, {
        crossOrigin: A,
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
  }, we.preloadModule = function(v, y) {
    if (typeof v == "string")
      if (y) {
        var S = g(y.as, y.crossOrigin);
        o.d.m(v, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
        });
      } else o.d.m(v);
  }, we.requestFormReset = function(v) {
    o.d.r(v);
  }, we.unstable_batchedUpdates = function(v, y) {
    return v(y);
  }, we.useFormState = function(v, y, S) {
    return p.H.useFormState(v, y, S);
  }, we.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, we.version = "19.3.0", we;
}
var Cv;
function cb() {
  if (Cv) return ed.exports;
  Cv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), ed.exports = BE(), ed.exports;
}
var Mv;
function UE() {
  if (Mv) return Os;
  Mv = 1;
  var i = jE(), l = lh(), s = cb();
  function o(t) {
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
  function d(t) {
    for (var e = t, n = e; n && !n.alternate; )
      e = n, (e.flags & 4098) !== 0 && (t = e.return), n = e.return;
    for (; e.return; ) e = e.return;
    return e.tag === 3 ? t : null;
  }
  function f(t) {
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
  function p(t) {
    if (d(t) !== t)
      throw Error(o(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(o(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var r = n.return;
      if (r === null) break;
      var u = r.alternate;
      if (u === null) {
        if (a = r.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (r.child === u.child) {
        for (u = r.child; u; ) {
          if (u === n) return p(r), t;
          if (u === a) return p(r), e;
          u = u.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== a.return) n = r, a = u;
      else {
        for (var h = !1, b = r.child; b; ) {
          if (b === n) {
            h = !0, n = r, a = u;
            break;
          }
          if (b === a) {
            h = !0, a = r, n = u;
            break;
          }
          b = b.sibling;
        }
        if (!h) {
          for (b = u.child; b; ) {
            if (b === n) {
              h = !0, n = u, a = r;
              break;
            }
            if (b === a) {
              h = !0, a = u, n = r;
              break;
            }
            b = b.sibling;
          }
          if (!h) throw Error(o(189));
        }
      }
      if (n.alternate !== a) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? t : e;
  }
  function v(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null; ) {
      if (e = v(t), e !== null) return e;
      t = t.sibling;
    }
    return null;
  }
  function y(t, e, n, a, r, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, r, u) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && y(
        t.child,
        e,
        n,
        a,
        r,
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
  function A(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function T(t) {
    var e = [null, null], n = S(t);
    return n === null || w(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function w(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && w(
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
  function E(t) {
    switch (t.tag) {
      case 5:
      case 27:
      case 6:
        return t.stateNode;
      case 3:
        return t.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var z = null, B = null;
  function G(t, e, n) {
    return t === n ? !0 : t === e ? (z = t, !0) : !1;
  }
  function _(t, e, n) {
    return t === n ? (B = t, !1) : t === e ? (B !== null && (z = t), !0) : !1;
  }
  function Q(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function K(t, e, n) {
    for (var a = 0, r = t; r; r = n(r)) a++;
    r = 0;
    for (var u = e; u; u = n(u)) r++;
    for (; 0 < a - r; ) t = n(t), a--;
    for (; 0 < r - a; ) e = n(e), r--;
    for (; a--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var N = Object.assign, O = /* @__PURE__ */ Symbol.for("react.element"), ot = /* @__PURE__ */ Symbol.for("react.transitional.element"), ut = /* @__PURE__ */ Symbol.for("react.portal"), F = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), lt = /* @__PURE__ */ Symbol.for("react.profiler"), et = /* @__PURE__ */ Symbol.for("react.consumer"), nt = /* @__PURE__ */ Symbol.for("react.context"), X = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), it = /* @__PURE__ */ Symbol.for("react.suspense_list"), at = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), yt = /* @__PURE__ */ Symbol.for("react.activity"), vt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), At = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), C = /* @__PURE__ */ Symbol.for("react.view_transition"), L = /* @__PURE__ */ Symbol.for("react.recoverable"), tt = Symbol.iterator;
  function W(t) {
    return t === null || typeof t != "object" ? null : (t = tt && t[tt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var ft = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ct(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === ft ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case F:
        return "Fragment";
      case lt:
        return "Profiler";
      case I:
        return "StrictMode";
      case J:
        return "Suspense";
      case it:
        return "SuspenseList";
      case yt:
        return "Activity";
      case C:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ut:
          return "Portal";
        case nt:
          return t.displayName || "Context";
        case et:
          return (t._context.displayName || "Context") + ".Consumer";
        case X:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case at:
          return e = t.displayName || null, e !== null ? e : ct(t.type) || "Memo";
        case Y:
          e = t._payload, t = t._init;
          try {
            return ct(t(e));
          } catch {
          }
      }
    return null;
  }
  var St = Array.isArray, st = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, xt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Vt = [], Bt = -1;
  function Ut(t) {
    return { current: t };
  }
  function kt(t) {
    0 > Bt || (t.current = Vt[Bt], Vt[Bt] = null, Bt--);
  }
  function Mt(t, e) {
    Bt++, Vt[Bt] = t.current, t.current = e;
  }
  var ee = Ut(null), De = Ut(null), ae = Ut(null), oi = Ut(null);
  function ri(t, e) {
    switch (Mt(ae, e), Mt(De, t), Mt(ee, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Dy(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Dy(e), t = zy(e, t);
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
    kt(ee), Mt(ee, t);
  }
  function Gn() {
    kt(ee), kt(De), kt(ae);
  }
  function Ca(t) {
    var e = t.memoizedState;
    e !== null && (pl._currentValue = e.memoizedState, Mt(oi, t)), e = ee.current;
    var n = zy(e, t.type);
    e !== n && (Mt(De, t), Mt(ee, n));
  }
  function Ma(t) {
    De.current === t && (kt(ee), kt(De)), oi.current === t && (kt(oi), pl._currentValue = xt);
  }
  var Da, eo;
  function en(t) {
    if (Da === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Da = e && e[1] || "", eo = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Da + t + eo;
  }
  var wn = !1;
  function Yi(t, e) {
    if (!t || wn) return "";
    wn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var P = function() {
                throw Error();
              };
              if (Object.defineProperty(P.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(P, []);
                } catch (rt) {
                  var R = rt;
                }
                Reflect.construct(t, [], P);
              } else {
                try {
                  P.call();
                } catch (rt) {
                  R = rt;
                }
                P = !1;
                try {
                  var H = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), P = !0, new t();
                } finally {
                  P && (H !== void 0 ? Object.defineProperty(t.prototype, "props", H) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (rt) {
                R = rt;
              }
              (P = t()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (rt) {
            if (rt && R && typeof rt.stack == "string")
              return [rt.stack, R.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var r = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      r && r.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), h = u[0], b = u[1];
      if (h && b) {
        var x = h.split(`
`), j = b.split(`
`);
        for (r = a = 0; a < x.length && !x[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; r < j.length && !j[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (a === x.length || r === j.length)
          for (a = x.length - 1, r = j.length - 1; 1 <= a && 0 <= r && x[a] !== j[r]; )
            r--;
        for (; 1 <= a && 0 <= r; a--, r--)
          if (x[a] !== j[r]) {
            if (a !== 1 || r !== 1)
              do
                if (a--, r--, 0 > r || x[a] !== j[r]) {
                  var k = `
` + x[a].replace(" at new ", " at ");
                  return t.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", t.displayName)), k;
                }
              while (1 <= a && 0 <= r);
            break;
          }
      }
    } finally {
      wn = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? en(n) : "";
  }
  function zl(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return en(t.type);
      case 16:
        return en("Lazy");
      case 13:
        return t.child !== e && e !== null ? en("Suspense Fallback") : en("Suspense");
      case 19:
        return en("SuspenseList");
      case 0:
      case 15:
        return Yi(t.type, !1);
      case 11:
        return Yi(t.type.render, !1);
      case 1:
        return Yi(t.type, !0);
      case 31:
        return en("Activity");
      case 30:
        return en("ViewTransition");
      default:
        return "";
    }
  }
  function qi(t) {
    try {
      var e = "", n = null;
      do
        e += zl(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ol = Object.prototype.hasOwnProperty, Nl = i.unstable_scheduleCallback, Rl = i.unstable_cancelCallback, yu = i.unstable_shouldYield, vu = i.unstable_requestPaint, ze = i.unstable_now, bu = i.unstable_getCurrentPriorityLevel, _l = i.unstable_ImmediatePriority, Vl = i.unstable_UserBlockingPriority, Xi = i.unstable_NormalPriority, Su = i.unstable_LowPriority, jl = i.unstable_IdlePriority, no = i.log, Tu = i.unstable_setDisableYieldValue, Ll = null, Ye = null;
  function ui(t) {
    if (typeof no == "function" && Tu(t), Ye && typeof Ye.setStrictMode == "function")
      try {
        Ye.setStrictMode(Ll, t);
      } catch {
      }
  }
  var qe = Math.clz32 ? Math.clz32 : qS, GS = Math.log, YS = Math.LN2;
  function qS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (GS(t) / YS | 0) | 0;
  }
  var io = 256, ao = 262144, lo = 4194304;
  function Qi(t) {
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
  function so(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var r = 0, u = t.suspendedLanes, h = t.pingedLanes;
    t = t.warmLanes;
    var b = a & 134217727;
    return b !== 0 ? (a = b & ~u, a !== 0 ? r = Qi(a) : (h &= b, h !== 0 ? r = Qi(h) : n || (n = b & ~t, n !== 0 && (r = Qi(n))))) : (b = a & ~u, b !== 0 ? r = Qi(b) : h !== 0 ? r = Qi(h) : n || (n = a & ~t, n !== 0 && (r = Qi(n)))), r === 0 ? 0 : e !== 0 && e !== r && (e & u) === 0 && (u = r & -r, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : r;
  }
  function Bl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function tm(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - qe(n), r = 1 << a;
        e |= t[a], n &= ~r;
      }
    return e;
  }
  function XS(t, e) {
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
  function em() {
    var t = lo;
    return lo <<= 1, (lo & 62914560) === 0 && (lo = 4194304), t;
  }
  function xu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ul(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function QS(t, e, n, a, r, u) {
    var h = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var b = t.entanglements, x = t.expirationTimes, j = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var k = 31 - qe(n), P = 1 << k;
      b[k] = 0, x[k] = -1;
      var R = j[k];
      if (R !== null)
        for (j[k] = null, k = 0; k < R.length; k++) {
          var H = R[k];
          H !== null && (H.lane &= -536870913);
        }
      n &= ~P;
    }
    a !== 0 && nm(t, a, 0), u !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e));
  }
  function nm(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - qe(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function im(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - qe(n), r = 1 << a;
      r & e | t[a] & e && (t[a] |= e), n &= ~r;
    }
  }
  function am(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Eu(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Eu(t) {
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
  function Au(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function lm() {
    var t = $.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : dv(t.type));
  }
  function sm(t, e) {
    var n = $.p;
    try {
      return $.p = t, e();
    } finally {
      $.p = n;
    }
  }
  var Yn = Math.random().toString(36).slice(2), be = "__reactFiber$" + Yn, Le = "__reactProps$" + Yn, za = "__reactContainer$" + Yn, om = "__reactEvents$" + Yn, ZS = "__reactListeners$" + Yn, KS = "__reactHandles$" + Yn, rm = "__reactResources$" + Yn, Hl = "__reactMarker$" + Yn, oo = "__reactLoad$" + Yn;
  function ro(t) {
    delete t[be], delete t[Le], delete t[ZS], delete t[KS];
  }
  function Zi(t) {
    var e;
    if (e = t[be]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[za] || n[be]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Zy(t); t !== null; ) {
            if (n = t[be]) return n;
            t = Zy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Oa(t) {
    if (t = t[be] || t[za]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function kl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Na(t) {
    var e = t[rm];
    return e || (e = t[rm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function pe(t) {
    t[Hl] = !0;
  }
  function um(t) {
    t[oo] = void 0;
  }
  var cm = /* @__PURE__ */ new Set(), fm = {};
  function Ki(t, e) {
    Ra(t, e), Ra(t + "Capture", e);
  }
  function Ra(t, e) {
    for (fm[t] = e, t = 0; t < e.length; t++)
      cm.add(e[t]);
  }
  var PS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), dm = {}, hm = {};
  function FS(t) {
    return Ol.call(hm, t) ? !0 : Ol.call(dm, t) ? !1 : PS.test(t) ? hm[t] = !0 : (dm[t] = !0, !1);
  }
  var Lt = !1;
  function mm() {
    var t = Lt;
    return Lt = !1, t;
  }
  function uo(t, e, n) {
    if (FS(e))
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
  function co(t, e, n) {
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
  function qn(t, e, n, a) {
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
  function Xe(t) {
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
  function pm(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function JS(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var r = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return r.call(this);
        },
        set: function(h) {
          n = "" + h, u.call(this, h);
        }
      }), Object.defineProperty(t, e, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(h) {
          n = "" + h;
        },
        stopTracking: function() {
          t._valueTracker = null, delete t[e];
        }
      };
    }
  }
  function wu(t) {
    if (!t._valueTracker) {
      var e = pm(t) ? "checked" : "value";
      t._valueTracker = JS(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function gm(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = pm(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var IS = /[\n"\\]/g;
  function nn(t) {
    return t.replace(
      IS,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Cu(t, e, n, a, r, u, h, b) {
    t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Xe(e)) : t.value !== "" + Xe(e) && (t.value = "" + Xe(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? h === "number" && t.value == e ? Mu(t, Xe(t.value)) : Mu(t, Xe(e)) : n != null ? Mu(t, Xe(n)) : a != null && t.removeAttribute("value"), r == null && u != null && (t.defaultChecked = !!u), r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Xe(b) : t.removeAttribute("name");
  }
  function ym(t, e, n, a, r, u, h, b) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        wu(t);
        return;
      }
      n = n != null ? "" + Xe(n) : "", e = e != null ? "" + Xe(e) : n, b || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? r, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = b ? t.checked : !!a, t.defaultChecked = !!a, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), wu(t);
  }
  function Mu(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function _a(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var r = 0; r < n.length; r++)
        e["$" + n[r]] = !0;
      for (n = 0; n < t.length; n++)
        r = e.hasOwnProperty("$" + t[n].value), t[n].selected !== r && (t[n].selected = r), r && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Xe(n), e = null, r = 0; r < t.length; r++) {
        if (t[r].value === n) {
          t[r].selected = !0, a && (t[r].defaultSelected = !0);
          return;
        }
        e !== null || t[r].disabled || (e = t[r]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function vm(t, e, n) {
    if (e != null && (e = "" + Xe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Xe(n) : "";
  }
  function bm(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (St(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Xe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), wu(t);
  }
  function Va(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var WS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Sm(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || WS.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function Tm(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Lt = !0);
      for (var r in e)
        a = e[r], e.hasOwnProperty(r) && n[r] !== a && (Sm(t, r, a), Lt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && Sm(t, u, e[u]);
  }
  function Du(t) {
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
  var $S = /* @__PURE__ */ new Map([
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
  ]), tT = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fo(t) {
    return tT.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Cn() {
  }
  var zu = null;
  function Ou(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ja = null, La = null;
  function xm(t) {
    var e = Oa(t);
    if (e && (t = e.stateNode)) {
      var n = t[Le] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Cu(
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
              'input[name="' + nn(
                "" + e
              ) + '"][type="radio"]'
            ), e = 0; e < n.length; e++) {
              var a = n[e];
              if (a !== t && a.form === t.form) {
                var r = a[Le] || null;
                if (!r) throw Error(o(90));
                Cu(
                  a,
                  r.value,
                  r.defaultValue,
                  r.defaultValue,
                  r.checked,
                  r.defaultChecked,
                  r.type,
                  r.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && gm(a);
          }
          break t;
        case "textarea":
          vm(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && _a(t, !!n.multiple, e, !1);
      }
    }
  }
  var Nu = !1;
  function Em(t, e, n) {
    if (Nu) return t(e, n);
    Nu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Nu = !1, (ja !== null || La !== null) && (dr(), ja && (e = ja, t = La, La = ja = null, xm(e), t)))
        for (e = 0; e < t.length; e++) xm(t[e]);
    }
  }
  function Gl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[Le] || null;
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
        o(231, e, typeof n)
      );
    return n;
  }
  var Xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Ru = !1;
  if (Xn)
    try {
      var Yl = {};
      Object.defineProperty(Yl, "passive", {
        get: function() {
          Ru = !0;
        }
      }), window.addEventListener("test", Yl, Yl), window.removeEventListener("test", Yl, Yl);
    } catch {
      Ru = !1;
    }
  var ci = null, _u = null, ho = null;
  function Am() {
    if (ho) return ho;
    var t, e = _u, n = e.length, a, r = "value" in ci ? ci.value : ci.textContent, u = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++) ;
    var h = n - t;
    for (a = 1; a <= h && e[n - a] === r[u - a]; a++) ;
    return ho = r.slice(t, 1 < a ? 1 - a : void 0);
  }
  function mo(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function po() {
    return !0;
  }
  function wm() {
    return !1;
  }
  function Ne(t) {
    function e(n, a, r, u, h) {
      this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var b in t)
        t.hasOwnProperty(b) && (n = t[b], this[b] = n ? n(u) : u[b]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? po : wm, this.isPropagationStopped = wm, this;
    }
    return N(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = po);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = po);
      },
      persist: function() {
      },
      isPersistent: po
    }), e;
  }
  var fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, go = Ne(fi), ql = N({}, fi, { view: 0, detail: 0 }), eT = Ne(ql), Vu, ju, Xl, yo = N({}, ql, {
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
    getModifierState: Bu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Xl && (Xl && t.type === "mousemove" ? (Vu = t.screenX - Xl.screenX, ju = t.screenY - Xl.screenY) : ju = Vu = 0, Xl = t), Vu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : ju;
    }
  }), Cm = Ne(yo), nT = N({}, yo, { dataTransfer: 0 }), iT = Ne(nT), aT = N({}, ql, { relatedTarget: 0 }), Lu = Ne(aT), lT = N({}, fi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), sT = Ne(lT), oT = N({}, fi, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), rT = Ne(oT), uT = N({}, fi, { data: 0 }), Mm = Ne(uT), cT = {
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
  }, fT = {
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
  }, dT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function hT(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = dT[t]) ? !!e[t] : !1;
  }
  function Bu() {
    return hT;
  }
  var mT = N({}, ql, {
    key: function(t) {
      if (t.key) {
        var e = cT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = mo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? fT[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Bu,
    charCode: function(t) {
      return t.type === "keypress" ? mo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? mo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), pT = Ne(mT), gT = N({}, yo, {
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
  }), Dm = Ne(gT), yT = N({}, fi, { submitter: 0 }), vT = Ne(yT), bT = N({}, ql, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Bu
  }), ST = Ne(bT), TT = N({}, fi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), xT = Ne(TT), ET = N({}, yo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), AT = Ne(ET), wT = N({}, fi, {
    newState: 0,
    oldState: 0,
    source: 0
  }), CT = Ne(wT), MT = [9, 13, 27, 32], Uu = Xn && "CompositionEvent" in window, Ql = null;
  Xn && "documentMode" in document && (Ql = document.documentMode);
  var DT = Xn && "TextEvent" in window && !Ql, zm = Xn && (!Uu || Ql && 8 < Ql && 11 >= Ql), Om = " ", Nm = !1;
  function Rm(t, e) {
    switch (t) {
      case "keyup":
        return MT.indexOf(e.keyCode) !== -1;
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
  function _m(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ba = !1;
  function zT(t, e) {
    switch (t) {
      case "compositionend":
        return _m(e);
      case "keypress":
        return e.which !== 32 ? null : (Nm = !0, Om);
      case "textInput":
        return t = e.data, t === Om && Nm ? null : t;
      default:
        return null;
    }
  }
  function OT(t, e) {
    if (Ba)
      return t === "compositionend" || !Uu && Rm(t, e) ? (t = Am(), ho = _u = ci = null, Ba = !1, t) : null;
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
        return zm && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var NT = {
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
  function Vm(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!NT[t.type] : e === "textarea";
  }
  function jm(t, e, n, a) {
    ja ? La ? La.push(a) : La = [a] : ja = a, e = vr(e, "onChange"), 0 < e.length && (n = new go(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Zl = null, Kl = null;
  function RT(t) {
    xy(t, 0);
  }
  function vo(t) {
    var e = kl(t);
    if (gm(e)) return t;
  }
  function Lm(t, e) {
    if (t === "change") return e;
  }
  var Bm = !1;
  if (Xn) {
    var Hu;
    if (Xn) {
      var ku = "oninput" in document;
      if (!ku) {
        var Um = document.createElement("div");
        Um.setAttribute("oninput", "return;"), ku = typeof Um.oninput == "function";
      }
      Hu = ku;
    } else Hu = !1;
    Bm = Hu && (!document.documentMode || 9 < document.documentMode);
  }
  function Hm() {
    Zl && (Zl.detachEvent("onpropertychange", km), Kl = Zl = null);
  }
  function km(t) {
    if (t.propertyName === "value" && vo(Kl)) {
      var e = [];
      jm(
        e,
        Kl,
        t,
        Ou(t)
      ), Em(RT, e);
    }
  }
  function _T(t, e, n) {
    t === "focusin" ? (Hm(), Zl = e, Kl = n, Zl.attachEvent("onpropertychange", km)) : t === "focusout" && Hm();
  }
  function VT(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return vo(Kl);
  }
  function jT(t, e) {
    if (t === "click") return vo(e);
  }
  function LT(t, e) {
    if (t === "input" || t === "change")
      return vo(e);
  }
  function BT(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Qe = typeof Object.is == "function" ? Object.is : BT;
  function Pl(t, e) {
    if (Qe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var r = n[a];
      if (!Ol.call(e, r) || !Qe(t[r], e[r]))
        return !1;
    }
    return !0;
  }
  function Gu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Gm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Ym(t, e) {
    var n = Gm(t);
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
      n = Gm(n);
    }
  }
  function qm(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? qm(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Xm(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Gu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Gu(t.document);
    }
    return e;
  }
  function Yu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var UT = Xn && "documentMode" in document && 11 >= document.documentMode, Ua = null, qu = null, Fl = null, Xu = !1;
  function Qm(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Xu || Ua == null || Ua !== Gu(a) || (a = Ua, "selectionStart" in a && Yu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Fl && Pl(Fl, a) || (Fl = a, a = vr(qu, "onSelect"), 0 < a.length && (e = new go(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Ua)));
  }
  function Pi(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ha = {
    animationend: Pi("Animation", "AnimationEnd"),
    animationiteration: Pi("Animation", "AnimationIteration"),
    animationstart: Pi("Animation", "AnimationStart"),
    transitionrun: Pi("Transition", "TransitionRun"),
    transitionstart: Pi("Transition", "TransitionStart"),
    transitioncancel: Pi("Transition", "TransitionCancel"),
    transitionend: Pi("Transition", "TransitionEnd")
  }, Qu = {}, Zm = {};
  Xn && (Zm = document.createElement("div").style, "AnimationEvent" in window || (delete Ha.animationend.animation, delete Ha.animationiteration.animation, delete Ha.animationstart.animation), "TransitionEvent" in window || delete Ha.transitionend.transition);
  function Fi(t) {
    if (Qu[t]) return Qu[t];
    if (!Ha[t]) return t;
    var e = Ha[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Zm)
        return Qu[t] = e[n];
    return t;
  }
  var Km = Fi("animationend"), Pm = Fi("animationiteration"), Fm = Fi("animationstart"), HT = Fi("transitionrun"), kT = Fi("transitionstart"), GT = Fi("transitioncancel"), Jm = Fi("transitionend"), Im = /* @__PURE__ */ new Map(), Zu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Zu.push("scrollEnd");
  function hn(t, e) {
    Im.set(t, e), Ki(e, [t]);
  }
  var YT = 0;
  function Qn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = yn.identifierPrefix;
    var n = YT++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Wm(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = ll;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var r = t[n[a]];
        if (r != null) {
          if (r === "none") return "none";
          e = e == null ? r : e + (" " + r);
        }
      }
    return e ?? t.default;
  }
  function Zn(t, e) {
    return t = Wm(t), e = Wm(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var bo = typeof reportError == "function" ? reportError : function(t) {
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
  }, an = [], ka = 0, Ku = 0;
  function So() {
    for (var t = ka, e = Ku = ka = 0; e < t; ) {
      var n = an[e];
      an[e++] = null;
      var a = an[e];
      an[e++] = null;
      var r = an[e];
      an[e++] = null;
      var u = an[e];
      if (an[e++] = null, a !== null && r !== null) {
        var h = a.pending;
        h === null ? r.next = r : (r.next = h.next, h.next = r), a.pending = r;
      }
      u !== 0 && $m(n, r, u);
    }
  }
  function To(t, e, n, a) {
    an[ka++] = t, an[ka++] = e, an[ka++] = n, an[ka++] = a, Ku |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Pu(t, e, n, a) {
    return To(t, e, n, a), xo(t);
  }
  function Ji(t, e) {
    return To(t, null, null, e), xo(t);
  }
  function $m(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var r = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (r = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, r && e !== null && (r = 31 - qe(n), t = u.hiddenUpdates, a = t[r], a === null ? t[r] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function xo(t) {
    if (50 < ys)
      throw ys = 0, fr = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ga = {};
  function qT(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Be(t, e, n, a) {
    return new qT(t, e, n, a);
  }
  function Fu(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Kn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Be(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function tp(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Eo(t, e, n, a, r, u) {
    var h = 0;
    if (a = t, typeof a == "function") Fu(a) && (h = 1);
    else if (typeof a == "string")
      h = yE(
        t,
        n,
        ee.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case yt:
          return t = Be(31, n, e, r), t.elementType = yt, t.lanes = u, t;
        case F:
          return Ii(n.children, r, u, e);
        case I:
          h = 8, r |= 24;
          break;
        case lt:
          return t = Be(12, n, e, r | 2), t.elementType = lt, t.lanes = u, t;
        case J:
          return t = Be(13, n, e, r), t.elementType = J, t.lanes = u, t;
        case it:
          return t = Be(19, n, e, r), t.elementType = it, t.lanes = u, t;
        case vt:
        case C:
          return t = r | 32, t = Be(30, n, e, t), t.elementType = C, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case nt:
                h = 10;
                break t;
              case et:
                h = 9;
                break t;
              case X:
                h = 11;
                break t;
              case at:
                h = 14;
                break t;
              case Y:
                h = 16, a = null;
                break t;
            }
          h = 29, n = Error(
            o(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Be(h, n, e, r), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Ii(t, e, n, a) {
    return t = Be(7, t, a, e), t.lanes = n, t;
  }
  function Ju(t, e, n) {
    return t = Be(6, t, null, e), t.lanes = n, t;
  }
  function ep(t) {
    var e = Be(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Iu(t, e, n) {
    return e = Be(
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
  var np = /* @__PURE__ */ new WeakMap();
  function ln(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = np.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: qi(e)
      }, np.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: qi(e)
    };
  }
  var Ya = [], qa = 0, Ao = null, Jl = 0, sn = [], on = 0, di = null, Mn = 1, Dn = "";
  function Pn(t, e) {
    Ya[qa++] = Jl, Ya[qa++] = Ao, Ao = t, Jl = e;
  }
  function ip(t, e, n) {
    sn[on++] = Mn, sn[on++] = Dn, sn[on++] = di, di = t;
    var a = Mn;
    t = Dn;
    var r = 32 - qe(a) - 1;
    a &= ~(1 << r), n += 1;
    var u = 32 - qe(e) + r;
    if (30 < u) {
      var h = r - r % 5;
      u = (a & (1 << h) - 1).toString(32), a >>= h, r -= h, Mn = 1 << 32 - qe(e) + r | n << r | a, Dn = u + t;
    } else
      Mn = 1 << u | n << r | a, Dn = t;
  }
  function wo(t) {
    t.return !== null && (Pn(t, 1), ip(t, 1, 0));
  }
  function Wu(t) {
    for (; t === Ao; )
      Ao = Ya[--qa], Ya[qa] = null, Jl = Ya[--qa], Ya[qa] = null;
    for (; t === di; )
      di = sn[--on], sn[on] = null, Dn = sn[--on], sn[on] = null, Mn = sn[--on], sn[on] = null;
  }
  function ap(t, e) {
    sn[on++] = Mn, sn[on++] = Dn, sn[on++] = di, Mn = e.id, Dn = e.overflow, di = t;
  }
  var ge = null, Ft = null, Dt = !1, hi = null, rn = !1, $u = Error(o(519));
  function mi(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Il(ln(e, t)), $u;
  }
  function lp(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[be] = t, e[Le] = a, n) {
      case "dialog":
        Nt("cancel", e), Nt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Nt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < bs.length; n++)
          Nt(bs[n], e);
        break;
      case "source":
        Nt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Nt("error", e), Nt("load", e);
        break;
      case "details":
        Nt("toggle", e);
        break;
      case "input":
        Nt("invalid", e), ym(
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
        Nt("invalid", e);
        break;
      case "textarea":
        Nt("invalid", e), bm(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Cy(e.textContent, n) ? (a.popover != null && (Nt("beforetoggle", e), Nt("toggle", e)), a.onScroll != null && Nt("scroll", e), a.onScrollEnd != null && Nt("scrollend", e), a.onClick != null && (e.onclick = Cn), e = !0) : e = !1, e || mi(t, !0);
  }
  function Co(t) {
    for (ge = t.return; ge; )
      switch (ge.tag) {
        case 5:
        case 31:
        case 13:
          rn = !1;
          return;
        case 27:
        case 3:
          rn = !0;
          return;
        default:
          ge = ge.return;
      }
  }
  function Xa(t) {
    if (t !== ge) return !1;
    if (!Dt) return Co(t), Dt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Of(t.type, t.memoizedProps)), n = !n), n && Ft && mi(t), Co(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Ft = Qy(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Ft = Qy(t);
    } else
      e === 27 ? (e = Ft, Oi(t.type) ? (t = Hf, Hf = null, Ft = t) : Ft = e) : Ft = ge ? cn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    Ft = ge = null, Dt = !1;
  }
  function tc() {
    var t = hi;
    return t !== null && (ke === null ? ke = t : ke.push.apply(
      ke,
      t
    ), hi = null), t;
  }
  function Il(t) {
    hi === null ? hi = [t] : hi.push(t);
  }
  var ec = Ut(null), $i = null, Fn = null;
  function pi(t, e, n) {
    Mt(ec, e._currentValue), e._currentValue = n;
  }
  function Jn(t) {
    t._currentValue = ec.current, kt(ec);
  }
  function Mo(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function nc(t, e, n, a) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var u = r.dependencies;
      if (u !== null) {
        var h = r.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var b = u;
          u = r;
          for (var x = 0; x < e.length; x++)
            if (b.context === e[x]) {
              u.lanes |= n, b = u.alternate, b !== null && (b.lanes |= n), Mo(
                u.return,
                n,
                t
              ), a || (h = null);
              break t;
            }
          u = b.next;
        }
      } else if (r.tag === 18) {
        if (h = r.return, h === null) throw Error(o(341));
        h.lanes |= n, u = h.alternate, u !== null && (u.lanes |= n), Mo(h, n, t), h = null;
      } else
        r.tag === 13 && r.memoizedState !== null && r.memoizedState.dehydrated === null ? (r.lanes |= n, h = r.alternate, h !== null && (h.lanes |= n), Mo(
          r.return,
          n,
          t
        ), h = r.child, h = h !== null ? h.sibling : null) : h = r.child;
      if (h !== null) h.return = r;
      else
        for (h = r; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (r = h.sibling, r !== null) {
            r.return = h.return, h = r;
            break;
          }
          h = h.return;
        }
      r = h;
    }
  }
  function ta(t, e, n, a) {
    t = null;
    for (var r = e, u = !1; r !== null; ) {
      if (!u) {
        if ((r.flags & 524288) !== 0) u = !0;
        else if ((r.flags & 262144) !== 0) break;
      }
      if (r.tag === 10) {
        var h = r.alternate;
        if (h === null) throw Error(o(387));
        if (h = h.memoizedProps, h !== null) {
          var b = r.type;
          Qe(r.pendingProps.value, h.value) || (t !== null ? t.push(b) : t = [b]);
        }
      } else if (r === oi.current) {
        if (h = r.alternate, h === null) throw Error(o(387));
        h.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(pl) : t = [pl]);
      }
      r = r.return;
    }
    return t !== null && nc(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function Do(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!Qe(
        t.context._currentValue,
        t.memoizedValue
      ))
        return !0;
      t = t.next;
    }
    return !1;
  }
  function ea(t) {
    $i = t, Fn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function Se(t) {
    return sp($i, t);
  }
  function zo(t, e) {
    return $i === null && ea(t), sp(t, e);
  }
  function sp(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Fn === null) {
      if (t === null) throw Error(o(308));
      Fn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Fn = Fn.next = e;
    return n;
  }
  var XT = typeof AbortController < "u" ? AbortController : function() {
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
  }, QT = i.unstable_scheduleCallback, ZT = i.unstable_NormalPriority, se = {
    $$typeof: nt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ic() {
    return {
      controller: new XT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wl(t) {
    t.refCount--, t.refCount === 0 && QT(ZT, function() {
      t.controller.abort();
    });
  }
  function op(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var $l = null;
  function KT(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var ts = null, ac = 0, na = 0, Qa = null;
  function PT(t, e) {
    if (ts === null) {
      var n = ts = [];
      ac = 0, na = Tf(), Qa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return ac++, e.then(rp, rp), e;
  }
  function rp() {
    if (--ac === 0 && ($l = null, ts !== null)) {
      Qa !== null && (Qa.status = "fulfilled");
      var t = ts;
      ts = null, na = 0, Qa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function FT(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(r) {
        n.push(r);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var r = 0; r < n.length; r++) (0, n[r])(e);
      },
      function(r) {
        for (a.status = "rejected", a.reason = r, r = 0; r < n.length; r++)
          (0, n[r])(void 0);
      }
    ), a;
  }
  var up = st.S;
  st.S = function(t, e) {
    if (ey = ze(), typeof e == "object" && e !== null && typeof e.then == "function" && PT(t, e), $l !== null)
      for (var n = ul; n !== null; )
        op(n, $l), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = ul; a !== null; )
        op(a, n), a = a.next;
      if (na !== 0) {
        a = $l, a === null && (a = $l = []);
        for (var r = 0; r < n.length; r++) {
          var u = n[r];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    up !== null && up(t, e);
  };
  var ia = Ut(null);
  function lc() {
    var t = ia.current;
    return t !== null ? t : Pt.pooledCache;
  }
  function Oo(t, e) {
    e === null ? Mt(ia, ia.current) : Mt(ia, e.pool);
  }
  function cp() {
    var t = lc();
    return t === null ? null : { parent: se._currentValue, pool: t };
  }
  var Za = Error(o(460)), sc = Error(o(474)), No = Error(o(542)), Ro = { then: function() {
  } };
  function fp(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function dp(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Cn, Cn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, mp(t), t === void 0 && !("reason" in e) ? Error(o(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Cn, Cn);
        else {
          if (t = Pt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(o(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var r = e;
                r.status = "fulfilled", r.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var r = e;
                r.status = "rejected", r.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, mp(t), t;
        }
        throw la = e, Za;
    }
  }
  function aa(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (la = n, Za) : n;
    }
  }
  var la = null;
  function hp() {
    if (la === null) throw Error(o(459));
    var t = la;
    return la = null, t;
  }
  function mp(t) {
    if (t === Za || t === No)
      throw Error(o(483));
  }
  var Ka = null, es = 0;
  function _o(t) {
    var e = es;
    return es += 1, Ka === null && (Ka = []), dp(Ka, t, e);
  }
  function gi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Vo(t, e) {
    throw e.$$typeof === O ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function pp(t) {
    function e(V, M) {
      if (t) {
        var U = V.deletions;
        U === null ? (V.deletions = [M], V.flags |= 16) : U.push(M);
      }
    }
    function n(V, M) {
      if (!t) return null;
      for (; M !== null; )
        e(V, M), M = M.sibling;
      return null;
    }
    function a(V) {
      for (var M = /* @__PURE__ */ new Map(); V !== null; )
        V.key === null ? M.set(V.index, V) : M.set(V.key, V), V = V.sibling;
      return M;
    }
    function r(V, M) {
      return V = Kn(V, M), V.index = 0, V.sibling = null, V;
    }
    function u(V, M, U) {
      return V.index = U, t ? (U = V.alternate, U !== null ? (U = U.index, U < M ? (V.flags |= 2, M) : U) : (V.flags |= 134217730, M)) : (V.flags |= 1048576, M);
    }
    function h(V) {
      return t && V.alternate === null && (V.flags |= 134217730), V;
    }
    function b(V, M, U, Z) {
      return M === null || M.tag !== 6 ? (M = Ju(U, V.mode, Z), M.return = V, M) : (M = r(M, U), M.return = V, M);
    }
    function x(V, M, U, Z) {
      var dt = U.type;
      return dt === F ? (V = k(
        V,
        M,
        U.props.children,
        Z,
        U.key
      ), gi(V, U), V) : M !== null && (M.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Y && aa(dt) === M.type) ? (M = r(M, U.props), gi(M, U), M.return = V, M) : (M = Eo(
        U.type,
        U.key,
        U.props,
        null,
        V.mode,
        Z
      ), gi(M, U), M.return = V, M);
    }
    function j(V, M, U, Z) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== U.containerInfo || M.stateNode.implementation !== U.implementation ? (M = Iu(U, V.mode, Z), M.return = V, M) : (M = r(M, U.children || []), M.return = V, M);
    }
    function k(V, M, U, Z, dt) {
      return M === null || M.tag !== 7 ? (M = Ii(
        U,
        V.mode,
        Z,
        dt
      ), M.return = V, M) : (M = r(M, U), M.return = V, M);
    }
    function P(V, M, U) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = Ju(
          "" + M,
          V.mode,
          U
        ), M.return = V, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ot:
            return U = Eo(
              M.type,
              M.key,
              M.props,
              null,
              V.mode,
              U
            ), gi(U, M), U.return = V, U;
          case ut:
            return M = Iu(
              M,
              V.mode,
              U
            ), M.return = V, M;
          case Y:
            return M = aa(M), P(V, M, U);
        }
        if (St(M) || W(M))
          return M = Ii(
            M,
            V.mode,
            U,
            null
          ), M.return = V, M;
        if (typeof M.then == "function")
          return P(V, _o(M), U);
        if (M.$$typeof === nt)
          return P(
            V,
            zo(V, M),
            U
          );
        Vo(V, M);
      }
      return null;
    }
    function R(V, M, U, Z) {
      var dt = M !== null ? M.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return dt !== null ? null : b(V, M, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ot:
            return U.key === dt ? x(V, M, U, Z) : null;
          case ut:
            return U.key === dt ? j(V, M, U, Z) : null;
          case Y:
            return U = aa(U), R(V, M, U, Z);
        }
        if (St(U) || W(U))
          return dt !== null ? null : k(V, M, U, Z, null);
        if (typeof U.then == "function")
          return R(
            V,
            M,
            _o(U),
            Z
          );
        if (U.$$typeof === nt)
          return R(
            V,
            M,
            zo(V, U),
            Z
          );
        Vo(V, U);
      }
      return null;
    }
    function H(V, M, U, Z, dt) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return V = V.get(U) || null, b(M, V, "" + Z, dt);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case ot:
            return V = V.get(
              Z.key === null ? U : Z.key
            ) || null, x(M, V, Z, dt);
          case ut:
            return V = V.get(
              Z.key === null ? U : Z.key
            ) || null, j(M, V, Z, dt);
          case Y:
            return Z = aa(Z), H(
              V,
              M,
              U,
              Z,
              dt
            );
        }
        if (St(Z) || W(Z))
          return V = V.get(U) || null, k(M, V, Z, dt, null);
        if (typeof Z.then == "function")
          return H(
            V,
            M,
            U,
            _o(Z),
            dt
          );
        if (Z.$$typeof === nt)
          return H(
            V,
            M,
            U,
            zo(M, Z),
            dt
          );
        Vo(M, Z);
      }
      return null;
    }
    function rt(V, M, U, Z) {
      for (var dt = null, _t = null, bt = M, Tt = M = 0, ue = null; bt !== null && Tt < U.length; Tt++) {
        bt.index > Tt ? (ue = bt, bt = null) : ue = bt.sibling;
        var jt = R(
          V,
          bt,
          U[Tt],
          Z
        );
        if (jt === null) {
          bt === null && (bt = ue);
          break;
        }
        t && bt && jt.alternate === null && e(V, bt), M = u(jt, M, Tt), _t === null ? dt = jt : _t.sibling = jt, _t = jt, bt = ue;
      }
      if (Tt === U.length)
        return n(V, bt), Dt && Pn(V, Tt), dt;
      if (bt === null) {
        for (; Tt < U.length; Tt++)
          bt = P(V, U[Tt], Z), bt !== null && (M = u(
            bt,
            M,
            Tt
          ), _t === null ? dt = bt : _t.sibling = bt, _t = bt);
        return Dt && Pn(V, Tt), dt;
      }
      for (bt = a(bt); Tt < U.length; Tt++)
        ue = H(
          bt,
          V,
          Tt,
          U[Tt],
          Z
        ), ue !== null && (t && (jt = ue.alternate, jt !== null && bt.delete(jt.key === null ? Tt : jt.key)), M = u(
          ue,
          M,
          Tt
        ), _t === null ? dt = ue : _t.sibling = ue, _t = ue);
      return t && bt.forEach(function(ji) {
        return e(V, ji);
      }), Dt && Pn(V, Tt), dt;
    }
    function pt(V, M, U, Z) {
      if (U == null) throw Error(o(151));
      for (var dt = null, _t = null, bt = M, Tt = M = 0, ue = null, jt = U.next(); bt !== null && !jt.done; Tt++, jt = U.next()) {
        bt.index > Tt ? (ue = bt, bt = null) : ue = bt.sibling;
        var ji = R(V, bt, jt.value, Z);
        if (ji === null) {
          bt === null && (bt = ue);
          break;
        }
        t && bt && ji.alternate === null && e(V, bt), M = u(ji, M, Tt), _t === null ? dt = ji : _t.sibling = ji, _t = ji, bt = ue;
      }
      if (jt.done)
        return n(V, bt), Dt && Pn(V, Tt), dt;
      if (bt === null) {
        for (; !jt.done; Tt++, jt = U.next())
          jt = P(V, jt.value, Z), jt !== null && (M = u(jt, M, Tt), _t === null ? dt = jt : _t.sibling = jt, _t = jt);
        return Dt && Pn(V, Tt), dt;
      }
      for (bt = a(bt); !jt.done; Tt++, jt = U.next())
        jt = H(bt, V, Tt, jt.value, Z), jt !== null && (t && (ue = jt.alternate, ue !== null && bt.delete(
          ue.key === null ? Tt : ue.key
        )), M = u(jt, M, Tt), _t === null ? dt = jt : _t.sibling = jt, _t = jt);
      return t && bt.forEach(function(zE) {
        return e(V, zE);
      }), Dt && Pn(V, Tt), dt;
    }
    function Ct(V, M, U, Z) {
      if (typeof U == "object" && U !== null && U.type === F && U.key === null && U.props.ref === void 0 && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ot:
            t: {
              for (var dt = U.key; M !== null; ) {
                if (M.key === dt) {
                  if (dt = U.type, dt === F) {
                    if (M.tag === 7) {
                      n(
                        V,
                        M.sibling
                      ), Z = r(
                        M,
                        U.props.children
                      ), gi(Z, U), Z.return = V, V = Z;
                      break t;
                    }
                  } else if (M.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Y && aa(dt) === M.type) {
                    n(
                      V,
                      M.sibling
                    ), Z = r(M, U.props), gi(Z, U), Z.return = V, V = Z;
                    break t;
                  }
                  n(V, M);
                  break;
                } else e(V, M);
                M = M.sibling;
              }
              U.type === F ? (Z = Ii(
                U.props.children,
                V.mode,
                Z,
                U.key
              ), gi(Z, U), Z.return = V, V = Z) : (Z = Eo(
                U.type,
                U.key,
                U.props,
                null,
                V.mode,
                Z
              ), gi(Z, U), Z.return = V, V = Z);
            }
            return h(V);
          case ut:
            t: {
              for (dt = U.key; M !== null; ) {
                if (M.key === dt)
                  if (M.tag === 4 && M.stateNode.containerInfo === U.containerInfo && M.stateNode.implementation === U.implementation) {
                    n(
                      V,
                      M.sibling
                    ), Z = r(M, U.children || []), Z.return = V, V = Z;
                    break t;
                  } else {
                    n(V, M);
                    break;
                  }
                else e(V, M);
                M = M.sibling;
              }
              Z = Iu(U, V.mode, Z), Z.return = V, V = Z;
            }
            return h(V);
          case Y:
            return U = aa(U), Ct(
              V,
              M,
              U,
              Z
            );
        }
        if (St(U))
          return rt(
            V,
            M,
            U,
            Z
          );
        if (W(U)) {
          if (dt = W(U), typeof dt != "function") throw Error(o(150));
          return U = dt.call(U), pt(
            V,
            M,
            U,
            Z
          );
        }
        if (typeof U.then == "function")
          return Ct(
            V,
            M,
            _o(U),
            Z
          );
        if (U.$$typeof === nt)
          return Ct(
            V,
            M,
            zo(V, U),
            Z
          );
        Vo(V, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, M !== null && M.tag === 6 ? (n(V, M.sibling), Z = r(M, U), Z.return = V, V = Z) : (n(V, M), Z = Ju(U, V.mode, Z), Z.return = V, V = Z), h(V)) : n(V, M);
    }
    return function(V, M, U, Z) {
      try {
        es = 0;
        var dt = Ct(
          V,
          M,
          U,
          Z
        );
        return Ka = null, dt;
      } catch (bt) {
        if (bt === Za || bt === No) throw bt;
        var _t = Be(29, bt, null, V.mode);
        return _t.lanes = Z, _t.return = V, _t;
      }
    };
  }
  var sa = pp(!0), gp = pp(!1), yi = !1;
  function oc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function rc(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function vi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function bi(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ht & 2) !== 0) {
      var r = a.pending;
      return r === null ? e.next = e : (e.next = r.next, r.next = e), a.pending = e, e = xo(t), $m(t, null, n), e;
    }
    return To(t, a, e, n), xo(t);
  }
  function ns(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, im(t, n);
    }
  }
  function uc(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var r = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? r = u = h : u = u.next = h, n = n.next;
        } while (n !== null);
        u === null ? r = u = e : u = u.next = e;
      } else r = u = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: r,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var cc = !1;
  function is() {
    if (cc) {
      var t = Qa;
      if (t !== null) throw t;
    }
  }
  function as(t, e, n, a) {
    cc = !1;
    var r = t.updateQueue;
    yi = !1;
    var u = r.firstBaseUpdate, h = r.lastBaseUpdate, b = r.shared.pending;
    if (b !== null) {
      r.shared.pending = null;
      var x = b, j = x.next;
      x.next = null, h === null ? u = j : h.next = j, h = x;
      var k = t.alternate;
      k !== null && (k = k.updateQueue, b = k.lastBaseUpdate, b !== h && (b === null ? k.firstBaseUpdate = j : b.next = j, k.lastBaseUpdate = x));
    }
    if (u !== null) {
      var P = r.baseState;
      h = 0, k = j = x = null, b = u;
      do {
        var R = b.lane & -536870913, H = R !== b.lane;
        if (H ? (Rt & R) === R : (a & R) === R) {
          R !== 0 && R === na && (cc = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          t: {
            var rt = t, pt = b;
            R = e;
            var Ct = n;
            switch (pt.tag) {
              case 1:
                if (rt = pt.payload, typeof rt == "function") {
                  P = rt.call(Ct, P, R);
                  break t;
                }
                P = rt;
                break t;
              case 3:
                rt.flags = rt.flags & -65537 | 128;
              case 0:
                if (rt = pt.payload, R = typeof rt == "function" ? rt.call(Ct, P, R) : rt, R == null) break t;
                P = N({}, P, R);
                break t;
              case 2:
                yi = !0;
            }
          }
          R = b.callback, R !== null && (t.flags |= 64, H && (t.flags |= 8192), H = r.callbacks, H === null ? r.callbacks = [R] : H.push(R));
        } else
          H = {
            lane: R,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, k === null ? (j = k = H, x = P) : k = k.next = H, h |= R;
        if (b = b.next, b === null) {
          if (b = r.shared.pending, b === null)
            break;
          H = b, b = H.next, H.next = null, r.lastBaseUpdate = H, r.shared.pending = null;
        }
      } while (!0);
      k === null && (x = P), r.baseState = x, r.firstBaseUpdate = j, r.lastBaseUpdate = k, u === null && (r.shared.lanes = 0), Ci |= h, t.lanes = h, t.memoizedState = P;
    }
  }
  function yp(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function vp(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        yp(n[t], e);
  }
  var Si = Ut(null), jo = Ut(0);
  function bp(t, e) {
    t = ei, Mt(jo, t), Mt(Si, e), ei = t | e.baseLanes;
  }
  function fc() {
    Mt(jo, ei), Mt(Si, Si.current);
  }
  function dc() {
    ei = jo.current, kt(Si), kt(jo);
  }
  var Te = Ut(null), Oe = null;
  function Ti(t) {
    var e = t.alternate;
    Mt(xe, xe.current & 1), Mt(Te, t), Oe === null && (e === null || Si.current !== null || e.memoizedState !== null) && (Oe = t);
  }
  function hc(t) {
    Mt(xe, xe.current), Mt(Te, t), Oe === null && (Oe = t);
  }
  function Sp(t) {
    t.tag === 22 ? (Mt(xe, xe.current), Mt(Te, t), Oe === null && (Oe = t)) : xi();
  }
  function xi() {
    Mt(xe, xe.current), Mt(Te, Te.current);
  }
  function Ze(t) {
    kt(Te), Oe === t && (Oe = null), kt(xe);
  }
  var xe = Ut(0);
  function ls(t, e) {
    Mt(Te, Te.current), Mt(xe, e);
  }
  function mc(t) {
    kt(xe), kt(Te), Oe === t && (Oe = null);
  }
  function Lo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Bf(n) || Uf(n)))
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
  var In = 0, wt = null, Zt = null, oe = null, Bo = !1, Pa = !1, oa = !1, Uo = 0, ss = 0, Fa = null, JT = 0;
  function ne() {
    throw Error(o(321));
  }
  function pc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Qe(t[n], e[n])) return !1;
    return !0;
  }
  function gc(t, e, n, a, r, u) {
    return In = u, wt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, st.H = t === null || t.memoizedState === null ? ig : ag, oa = !1, u = n(a, r), oa = !1, Pa && (u = xp(
      e,
      n,
      a,
      r
    )), Tp(t), u;
  }
  function Tp(t) {
    st.H = Qo;
    var e = Zt !== null && Zt.next !== null;
    if (In = 0, oe = Zt = wt = null, Bo = !1, ss = 0, Fa = null, e) throw Error(o(300));
    t === null || re || (t = t.dependencies, t !== null && Do(t) && (re = !0));
  }
  function xp(t, e, n, a) {
    wt = t;
    var r = 0;
    do {
      if (Pa && (Fa = null), ss = 0, Pa = !1, 25 <= r) throw Error(o(301));
      if (r += 1, oe = Zt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      st.H = ax, u = e(n, a);
    } while (Pa);
    return u;
  }
  function IT() {
    var t = st.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? os(e) : e, t = t.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== t && (wt.flags |= 1024), e;
  }
  function yc() {
    var t = Uo !== 0;
    return Uo = 0, t;
  }
  function vc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function bc(t) {
    if (Bo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Bo = !1;
    }
    In = 0, oe = Zt = wt = null, Pa = !1, ss = Uo = 0, Fa = null;
  }
  function Re() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return oe === null ? wt.memoizedState = oe = t : oe = oe.next = t, oe;
  }
  function le() {
    if (Zt === null) {
      var t = wt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Zt.next;
    var e = oe === null ? wt.memoizedState : oe.next;
    if (e !== null)
      oe = e, Zt = t;
    else {
      if (t === null)
        throw wt.alternate === null ? Error(o(467)) : Error(o(310));
      Zt = t, t = {
        memoizedState: Zt.memoizedState,
        baseState: Zt.baseState,
        baseQueue: Zt.baseQueue,
        queue: Zt.queue,
        next: null
      }, oe === null ? wt.memoizedState = oe = t : oe = oe.next = t;
    }
    return oe;
  }
  function Ho() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function os(t) {
    var e = ss;
    return ss += 1, Fa === null && (Fa = []), t = dp(Fa, t, e), e = wt, (oe === null ? e.memoizedState : oe.next) === null && (e = e.alternate, st.H = e === null || e.memoizedState === null ? ig : ag), t;
  }
  function ko(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return os(t);
      if (t.$$typeof === L) return;
      if (t.$$typeof === nt) return Se(t);
    }
    throw Error(o(438, String(t)));
  }
  function Sc(t) {
    var e = null, n = wt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = wt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(r) {
          return r.slice();
        }),
        index: 0
      })));
    }
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Ho(), wt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = At;
    return e.index++, n;
  }
  function Wn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Go(t) {
    var e = le();
    return Tc(e, Zt, t);
  }
  function Tc(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(o(311));
    a.lastRenderedReducer = n;
    var r = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (r !== null) {
        var h = r.next;
        r.next = u.next, u.next = h;
      }
      e.baseQueue = r = u, a.pending = null;
    }
    if (u = t.baseState, r === null) t.memoizedState = u;
    else {
      e = r.next;
      var b = h = null, x = null, j = e, k = !1;
      do {
        var P = j.lane & -536870913;
        if (P !== j.lane ? (Rt & P) === P : (In & P) === P) {
          var R = j.revertLane;
          if (R === 0)
            x !== null && (x = x.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), P === na && (k = !0);
          else if ((In & R) === R) {
            j = j.next, R === na && (k = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: j.revertLane,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }, x === null ? (b = x = P, h = u) : x = x.next = P, wt.lanes |= R, Ci |= R;
          P = j.action, oa && n(u, P), u = j.hasEagerState ? j.eagerState : n(u, P);
        } else
          R = {
            lane: P,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, x === null ? (b = x = R, h = u) : x = x.next = R, wt.lanes |= P, Ci |= P;
        j = j.next;
      } while (j !== null && j !== e);
      if (x === null ? h = u : x.next = b, !Qe(u, t.memoizedState) && (re = !0, k && (n = Qa, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = h, t.baseQueue = x, a.lastRenderedState = u;
    }
    return r === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function xc(t) {
    var e = le(), n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, r = n.pending, u = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var h = r = r.next;
      do
        u = t(u, h.action), h = h.next;
      while (h !== r);
      Qe(u, e.memoizedState) || (re = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function Ep(t, e, n) {
    var a = wt, r = le(), u = Dt;
    if (u) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var h = !Qe(
      (Zt || r).memoizedState,
      n
    );
    if (h && (r.memoizedState = n, re = !0), r = r.queue, wc(Cp.bind(null, a, r, t), [
      t
    ]), t = r.getSnapshot !== e || h || oe !== null && (oe.memoizedState.tag & 1) !== 0, Ja(
      t ? 9 : 8,
      { destroy: void 0 },
      wp.bind(null, a, r, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Pt === null) throw Error(o(349));
      u || (In & 127) !== 0 || Ap(a, e, n);
    }
    return n;
  }
  function Ap(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = wt.updateQueue, e === null ? (e = Ho(), wt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function wp(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Mp(e) && Dp(t);
  }
  function Cp(t, e, n) {
    return n(function() {
      Mp(e) && Dp(t);
    });
  }
  function Mp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Qe(t, n);
    } catch {
      return !0;
    }
  }
  function Dp(t) {
    var e = Ji(t, 2);
    e !== null && Ge(e, t, 2);
  }
  function Ec(t) {
    var e = Re();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), oa) {
        ui(!0);
        try {
          n();
        } finally {
          ui(!1);
        }
      }
    }
    return e.memoizedState = e.baseState = t, e.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Wn,
      lastRenderedState: t
    }, e;
  }
  function zp(t, e, n, a) {
    return t.baseState = n, Tc(
      t,
      Zt,
      typeof a == "function" ? a : Wn
    );
  }
  function WT(t, e, n, a, r) {
    if (Xo(t)) throw Error(o(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: r,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(h) {
          u.listeners.push(h);
        }
      };
      st.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Op(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Op(t, e) {
    var n = e.action, a = e.payload, r = t.state;
    if (e.isTransition) {
      var u = st.T, h = {};
      h.types = u !== null ? u.types : null, st.T = h;
      try {
        var b = n(r, a), x = st.S;
        x !== null && x(h, b), Np(t, e, b);
      } catch (j) {
        Ac(t, e, j);
      } finally {
        u !== null && h.types !== null && (u.types = h.types), st.T = u;
      }
    } else
      try {
        u = n(r, a), Np(t, e, u);
      } catch (j) {
        Ac(t, e, j);
      }
  }
  function Np(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Rp(t, e, a);
      },
      function(a) {
        return Ac(t, e, a);
      }
    ) : Rp(t, e, n);
  }
  function Rp(t, e, n) {
    e.status = "fulfilled", e.value = n, _p(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Op(t, n)));
  }
  function Ac(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, _p(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function _p(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Vp(t, e) {
    return e;
  }
  function jp(t, e) {
    if (Dt) {
      var n = Pt.formState;
      if (n !== null) {
        t: {
          var a = wt;
          if (Dt) {
            if (Ft) {
              e: {
                for (var r = Ft, u = rn; r.nodeType !== 8; ) {
                  if (!u) {
                    r = null;
                    break e;
                  }
                  if (r = cn(
                    r.nextSibling
                  ), r === null) {
                    r = null;
                    break e;
                  }
                }
                u = r.data, r = u === "F!" || u === "F" ? r : null;
              }
              if (r) {
                Ft = cn(
                  r.nextSibling
                ), a = r.data === "F!";
                break t;
              }
            }
            mi(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = Re(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vp,
      lastRenderedState: e
    }, n.queue = a, n = tg.bind(
      null,
      wt,
      a
    ), a.dispatch = n, a = Ec(!1), u = Oc.bind(
      null,
      wt,
      !1,
      a.queue
    ), a = Re(), r = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = r, n = WT.bind(
      null,
      wt,
      r,
      u,
      n
    ), r.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Lp(t) {
    var e = le();
    return Bp(e, Zt, t);
  }
  function Bp(t, e, n) {
    if (e = Tc(
      t,
      e,
      Vp
    )[0], t = Go(Wn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = os(e);
      } catch (h) {
        throw h === Za ? No : h;
      }
    else a = e;
    e = le();
    var r = e.queue, u = r.dispatch;
    return n !== e.memoizedState && (wt.flags |= 2048, Ja(
      9,
      { destroy: void 0 },
      $T.bind(null, r, n),
      null
    )), [a, u, t];
  }
  function $T(t, e) {
    t.action = e;
  }
  function Up(t) {
    var e = le(), n = Zt;
    if (n !== null)
      return Bp(e, n, t);
    le(), e = e.memoizedState, n = le();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ja(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = wt.updateQueue, e === null && (e = Ho(), wt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Hp() {
    return le().memoizedState;
  }
  function Yo(t, e, n, a) {
    var r = Re();
    wt.flags |= t, r.memoizedState = Ja(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function qo(t, e, n, a) {
    var r = le();
    a = a === void 0 ? null : a;
    var u = r.memoizedState.inst;
    Zt !== null && a !== null && pc(a, Zt.memoizedState.deps) ? r.memoizedState = Ja(e, u, n, a) : (wt.flags |= t, r.memoizedState = Ja(
      1 | e,
      u,
      n,
      a
    ));
  }
  function kp(t, e) {
    Yo(8390656, 8, t, e);
  }
  function wc(t, e) {
    qo(2048, 8, t, e);
  }
  function tx(t) {
    wt.flags |= 4;
    var e = wt.updateQueue;
    if (e === null)
      e = Ho(), wt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Gp(t) {
    var e = le().memoizedState;
    return tx({ ref: e, nextImpl: t }), function() {
      if ((Ht & 2) !== 0) throw Error(o(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Yp(t, e) {
    return qo(4, 2, t, e);
  }
  function qp(t, e) {
    return qo(4, 4, t, e);
  }
  function Xp(t, e) {
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
  function Qp(t, e, n) {
    n = n != null ? n.concat([t]) : null, qo(4, 4, Xp.bind(null, e, t), n);
  }
  function Cc() {
  }
  function Zp(t, e) {
    var n = le();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && pc(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Kp(t, e) {
    var n = le();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && pc(e, a[1]))
      return a[0];
    if (a = t(), oa) {
      ui(!0);
      try {
        t();
      } finally {
        ui(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function Mc(t, e, n) {
    return n === void 0 || (In & 1073741824) !== 0 && (Rt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = iy(), wt.lanes |= t, Ci |= t, n);
  }
  function Pp(t, e, n, a) {
    return Qe(n, e) ? n : Si.current !== null ? (t = Mc(t, n, a), Qe(t, e) || (re = !0), t) : (In & 106) === 0 || (In & 1073741824) !== 0 && (Rt & 261930) === 0 ? (re = !0, t.memoizedState = n) : (t = iy(), wt.lanes |= t, Ci |= t, e);
  }
  function Fp(t, e, n, a, r) {
    var u = $.p;
    $.p = u !== 0 && 8 > u ? u : 8;
    var h = st.T, b = {};
    b.types = h !== null ? h.types : null, st.T = b, Oc(t, !1, e, n);
    try {
      var x = r(), j = st.S;
      if (j !== null && j(b, x), x !== null && typeof x == "object" && typeof x.then == "function") {
        var k = FT(
          x,
          a
        );
        rs(
          t,
          e,
          k,
          Je(t)
        );
      } else
        rs(
          t,
          e,
          a,
          Je(t)
        );
    } catch (P) {
      rs(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: P },
        Je()
      );
    } finally {
      $.p = u, h !== null && b.types !== null && (h.types = b.types), st.T = h;
    }
  }
  function ex() {
  }
  function Dc(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var r = Jp(t).queue;
    Fp(
      t,
      r,
      e,
      xt,
      n === null ? ex : function() {
        return Ip(t), n(a);
      }
    );
  }
  function Jp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: xt,
      baseState: xt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wn,
        lastRenderedState: xt
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
        lastRenderedReducer: Wn,
        lastRenderedState: n
      },
      next: null
    }, t.memoizedState = e, t = t.alternate, t !== null && (t.memoizedState = e), e;
  }
  function Ip(t) {
    var e = Jp(t);
    e.next === null && (e = t.alternate.memoizedState), rs(
      t,
      e.next.queue,
      {},
      Je()
    );
  }
  function zc() {
    return Se(pl);
  }
  function Wp() {
    return le().memoizedState;
  }
  function $p() {
    return le().memoizedState;
  }
  function nx(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Je();
          t = vi(n);
          var a = bi(e, t, n);
          a !== null && (Ge(a, e, n), ns(a, e, n)), e = { cache: ic() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function ix(t, e, n) {
    var a = Je();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xo(t) ? eg(e, n) : (n = Pu(t, e, n, a), n !== null && (Ge(n, t, a), ng(n, e, a)));
  }
  function tg(t, e, n) {
    var a = Je();
    rs(t, e, n, a);
  }
  function rs(t, e, n, a) {
    var r = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Xo(t)) eg(e, r);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var h = e.lastRenderedState, b = u(h, n);
          if (r.hasEagerState = !0, r.eagerState = b, Qe(b, h))
            return To(t, e, r, 0), Pt === null && So(), !1;
        } catch {
        }
      if (n = Pu(t, e, r, a), n !== null)
        return Ge(n, t, a), ng(n, e, a), !0;
    }
    return !1;
  }
  function Oc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: Tf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xo(t)) {
      if (e) throw Error(o(479));
    } else
      e = Pu(
        t,
        n,
        a,
        2
      ), e !== null && Ge(e, t, 2);
  }
  function Xo(t) {
    var e = t.alternate;
    return t === wt || e !== null && e === wt;
  }
  function eg(t, e) {
    Pa = Bo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function ng(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, im(t, n);
    }
  }
  var Qo = {
    readContext: Se,
    use: ko,
    useCallback: ne,
    useContext: ne,
    useEffect: ne,
    useImperativeHandle: ne,
    useLayoutEffect: ne,
    useInsertionEffect: ne,
    useMemo: ne,
    useReducer: ne,
    useRef: ne,
    useState: ne,
    useDebugValue: ne,
    useDeferredValue: ne,
    useTransition: ne,
    useSyncExternalStore: ne,
    useId: ne,
    useHostTransitionStatus: ne,
    useFormState: ne,
    useActionState: ne,
    useOptimistic: ne,
    useMemoCache: ne,
    useCacheRefresh: ne,
    useEffectEvent: ne
  }, ig = {
    readContext: Se,
    use: ko,
    useCallback: function(t, e) {
      return Re().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Se,
    useEffect: kp,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Yo(
        4194308,
        4,
        Xp.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return Yo(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      Yo(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Re();
      e = e === void 0 ? null : e;
      var a = t();
      if (oa) {
        ui(!0);
        try {
          t();
        } finally {
          ui(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = Re();
      if (n !== void 0) {
        var r = n(e);
        if (oa) {
          ui(!0);
          try {
            n(e);
          } finally {
            ui(!1);
          }
        }
      } else r = e;
      return a.memoizedState = a.baseState = r, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: r
      }, a.queue = t, t = t.dispatch = ix.bind(
        null,
        wt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Re();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Ec(t);
      var e = t.queue, n = tg.bind(null, wt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Cc,
    useDeferredValue: function(t, e) {
      var n = Re();
      return Mc(n, t, e);
    },
    useTransition: function() {
      var t = Ec(!1);
      return t = Fp.bind(
        null,
        wt,
        t.queue,
        !0,
        !1
      ), Re().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = wt, r = Re();
      if (Dt) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = e(), Pt === null)
          throw Error(o(349));
        (Rt & 127) !== 0 || Ap(a, e, n);
      }
      r.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return r.queue = u, kp(Cp.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ja(
        9,
        { destroy: void 0 },
        wp.bind(
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
      var t = Re(), e = Pt.identifierPrefix;
      if (Dt) {
        var n = Dn, a = Mn;
        n = (a & ~(1 << 32 - qe(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Uo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = JT++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: zc,
    useFormState: jp,
    useActionState: jp,
    useOptimistic: function(t) {
      var e = Re();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Oc.bind(
        null,
        wt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Sc,
    useCacheRefresh: function() {
      return Re().memoizedState = nx.bind(
        null,
        wt
      );
    },
    useEffectEvent: function(t) {
      var e = Re(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Ht & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, ag = {
    readContext: Se,
    use: ko,
    useCallback: Zp,
    useContext: Se,
    useEffect: wc,
    useImperativeHandle: Qp,
    useInsertionEffect: Yp,
    useLayoutEffect: qp,
    useMemo: Kp,
    useReducer: Go,
    useRef: Hp,
    useState: function() {
      return Go(Wn);
    },
    useDebugValue: Cc,
    useDeferredValue: function(t, e) {
      var n = le();
      return Pp(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Go(Wn)[0], e = le().memoizedState;
      return [
        typeof t == "boolean" ? t : os(t),
        e
      ];
    },
    useSyncExternalStore: Ep,
    useId: Wp,
    useHostTransitionStatus: zc,
    useFormState: Lp,
    useActionState: Lp,
    useOptimistic: function(t, e) {
      var n = le();
      return zp(n, Zt, t, e);
    },
    useMemoCache: Sc,
    useCacheRefresh: $p,
    useEffectEvent: Gp
  }, ax = {
    readContext: Se,
    use: ko,
    useCallback: Zp,
    useContext: Se,
    useEffect: wc,
    useImperativeHandle: Qp,
    useInsertionEffect: Yp,
    useLayoutEffect: qp,
    useMemo: Kp,
    useReducer: xc,
    useRef: Hp,
    useState: function() {
      return xc(Wn);
    },
    useDebugValue: Cc,
    useDeferredValue: function(t, e) {
      var n = le();
      return Zt === null ? Mc(n, t, e) : Pp(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = xc(Wn)[0], e = le().memoizedState;
      return [
        typeof t == "boolean" ? t : os(t),
        e
      ];
    },
    useSyncExternalStore: Ep,
    useId: Wp,
    useHostTransitionStatus: zc,
    useFormState: Up,
    useActionState: Up,
    useOptimistic: function(t, e) {
      var n = le();
      return Zt !== null ? zp(n, Zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Sc,
    useCacheRefresh: $p,
    useEffectEvent: Gp
  };
  function Nc(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : N({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Rc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Je(), r = vi(a);
      r.payload = e, n != null && (r.callback = n), e = bi(t, r, a), e !== null && (Ge(e, t, a), ns(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Je(), r = vi(a);
      r.tag = 1, r.payload = e, n != null && (r.callback = n), e = bi(t, r, a), e !== null && (Ge(e, t, a), ns(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Je(), a = vi(n);
      a.tag = 2, e != null && (a.callback = e), e = bi(t, a, n), e !== null && (Ge(e, t, n), ns(e, t, n));
    }
  };
  function lg(t, e, n, a, r, u, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, h) : e.prototype && e.prototype.isPureReactComponent ? !Pl(n, a) || !Pl(r, u) : !0;
  }
  function sg(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Rc.enqueueReplaceState(e, e.state, null);
  }
  function ra(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = N({}, n));
      for (var r in t)
        n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  function og(t) {
    bo(t);
  }
  function rg(t) {
    console.error(t);
  }
  function ug(t) {
    bo(t);
  }
  function Zo(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function cg(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (r) {
      setTimeout(function() {
        throw r;
      });
    }
  }
  function _c(t, e, n) {
    return n = vi(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Zo(t, e);
    }, n;
  }
  function fg(t) {
    return t = vi(t), t.tag = 3, t;
  }
  function dg(t, e, n, a) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var u = a.value;
      t.payload = function() {
        return r(u);
      }, t.callback = function() {
        cg(e, n, a);
      };
    }
    var h = n.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
      cg(e, n, a), typeof r != "function" && (Mi === null ? Mi = /* @__PURE__ */ new Set([this]) : Mi.add(this));
      var b = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function lx(t, e, n, a, r) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && ta(
        e,
        n,
        r,
        !0
      ), n = Te.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return Oe === null ? hr() : n.alternate === null && ie === 0 && (ie = 3), n.flags &= -257, n.flags |= 65536, n.lanes = r, a === Ro ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), vf(t, a, r)), !1;
          case 22:
            return n.flags |= 65536, a === Ro ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), vf(t, a, r)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return vf(t, a, r), hr(), !1;
    }
    if (Dt)
      return e = Te.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = r, a !== $u && (t = Error(o(422), { cause: a }), Il(ln(t, n)))) : (a !== $u && (e = Error(o(423), {
        cause: a
      }), Il(
        ln(e, n)
      )), t = t.current.alternate, t.flags |= 65536, r &= -r, t.lanes |= r, a = ln(a, n), r = _c(
        t.stateNode,
        a,
        r
      ), uc(t, r), ie !== 4 && (ie = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = ln(u, n), gs === null ? gs = [u] : gs.push(u), ie !== 4 && (ie = 2), e === null) return !0;
    a = ln(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = r & -r, n.lanes |= t, t = _c(n.stateNode, a, t), uc(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Mi === null || !Mi.has(u))))
            return n.flags |= 65536, r &= -r, n.lanes |= r, r = fg(r), dg(
              r,
              t,
              n,
              a
            ), uc(n, r), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Vc = Error(o(461)), re = !1;
  function fe(t, e, n, a) {
    e.child = t === null ? gp(e, null, n, a) : sa(
      e,
      t.child,
      n,
      a
    );
  }
  function hg(t, e, n, a, r) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var h = {};
      for (var b in a)
        b !== "ref" && (h[b] = a[b]);
    } else h = a;
    return ea(e), a = gc(
      t,
      e,
      n,
      h,
      u,
      r
    ), b = yc(), t !== null && !re ? (vc(t, e, r), $n(t, e, r)) : (Dt && b && wo(e), e.flags |= 1, fe(t, e, a, r), e.child);
  }
  function mg(t, e, n, a, r) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Fu(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, pg(
        t,
        e,
        u,
        a,
        r
      )) : (t = Eo(
        n.type,
        null,
        a,
        e,
        e.mode,
        r
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Yc(t, r)) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Pl, n(h, a) && t.ref === e.ref)
        return $n(t, e, r);
    }
    return e.flags |= 1, t = Kn(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function pg(t, e, n, a, r) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Pl(u, a) && t.ref === e.ref)
        if (re = !1, e.pendingProps = a = u, Yc(t, r))
          (t.flags & 131072) !== 0 && (re = !0);
        else
          return e.lanes = t.lanes, $n(t, e, r);
    }
    return jc(
      t,
      e,
      n,
      a,
      r
    );
  }
  function gg(t, e, n, a) {
    var r = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, r = 0; a !== null; )
            r = r | a.lanes | a.childLanes, a = a.sibling;
          a = r & ~u;
        } else a = 0, e.child = null;
        return yg(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Oo(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? bp(e, u) : fc(), Sp(e);
      else
        return a = e.lanes = 536870912, yg(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (Oo(e, u.cachePool), bp(e, u), xi(), e.memoizedState = null) : (t !== null && Oo(e, null), fc(), xi());
    return fe(t, e, r, n), e.child;
  }
  function us(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function yg(t, e, n, a, r) {
    var u = lc();
    return u = u === null ? null : { parent: se._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && Oo(e, null), fc(), Sp(e), t !== null && ta(t, e, a, !0), e.childLanes = r, null;
  }
  function Ko(t, e) {
    return e = Po(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function vg(t, e, n) {
    return sa(e, t.child, null, n), t = Ko(e, e.pendingProps), t.flags |= 2, Ze(e), e.memoizedState = null, t;
  }
  function sx(t, e, n) {
    var a = e.pendingProps, r = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Dt) {
        if (a.mode === "hidden")
          return t = Ko(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, us(null, t);
        if (hc(e), (t = Ft) ? (t = Xy(
          t,
          rn
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: di !== null ? { id: Mn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ep(t), n.return = e, e.child = n, ge = e, Ft = null)) : t = null, t === null) throw mi(e);
        return e.lanes = 536870912, null;
      }
      return Ko(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var h = u.dehydrated;
      if (hc(e), r)
        if (e.flags & 256)
          e.flags &= -257, e = vg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(o(558));
      else if (re || ta(t, e, n, !1), r = (n & t.childLanes) !== 0, re || r) {
        if (Si.current === null) {
          if (a = Pt, a !== null && (h = am(a, n), h !== 0 && h !== u.retryLane))
            throw u.retryLane = h, Ji(t, h), Ge(a, t, h), Vc;
          hr();
        }
        e = vg(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Ft = cn(h.nextSibling), ge = e, Dt = !0, hi = null, rn = !1, t !== null && ap(e, t), e = Ko(e, a), e.flags |= 134221824;
      return e;
    }
    return t = Kn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ia(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function jc(t, e, n, a, r) {
    return ea(e), n = gc(
      t,
      e,
      n,
      a,
      void 0,
      r
    ), a = yc(), t !== null && !re ? (vc(t, e, r), $n(t, e, r)) : (Dt && a && wo(e), e.flags |= 1, fe(t, e, n, r), e.child);
  }
  function bg(t, e, n, a, r, u) {
    return ea(e), e.updateQueue = null, n = xp(
      e,
      a,
      n,
      r
    ), Tp(t), a = yc(), t !== null && !re ? (vc(t, e, u), $n(t, e, u)) : (Dt && a && wo(e), e.flags |= 1, fe(t, e, n, u), e.child);
  }
  function Sg(t, e, n, a, r) {
    if (ea(e), e.stateNode === null) {
      var u = Ga, h = n.contextType;
      typeof h == "object" && h !== null && (u = Se(h)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Rc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, oc(e), h = n.contextType, u.context = typeof h == "object" && h !== null ? Se(h) : Ga, u.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Nc(
        e,
        n,
        h,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), h !== u.state && Rc.enqueueReplaceState(u, u.state, null), as(e, a, u, r), is(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var b = e.memoizedProps, x = ra(n, b);
      u.props = x;
      var j = u.context, k = n.contextType;
      h = Ga, typeof k == "object" && k !== null && (h = Se(k));
      var P = n.getDerivedStateFromProps;
      k = typeof P == "function" || typeof u.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, k || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || j !== h) && sg(
        e,
        u,
        a,
        h
      ), yi = !1;
      var R = e.memoizedState;
      u.state = R, as(e, a, u, r), is(), j = e.memoizedState, b || R !== j || yi ? (typeof P == "function" && (Nc(
        e,
        n,
        P,
        a
      ), j = e.memoizedState), (x = yi || lg(
        e,
        n,
        x,
        a,
        R,
        j,
        h
      )) ? (k || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = j), u.props = a, u.state = j, u.context = h, a = x) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, rc(t, e), h = e.memoizedProps, k = ra(n, h), u.props = k, P = e.pendingProps, R = u.context, j = n.contextType, x = Ga, typeof j == "object" && j !== null && (x = Se(j)), b = n.getDerivedStateFromProps, (j = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== P || R !== x) && sg(
        e,
        u,
        a,
        x
      ), yi = !1, R = e.memoizedState, u.state = R, as(e, a, u, r), is();
      var H = e.memoizedState;
      h !== P || R !== H || yi || t !== null && t.dependencies !== null && Do(t.dependencies) ? (typeof b == "function" && (Nc(
        e,
        n,
        b,
        a
      ), H = e.memoizedState), (k = yi || lg(
        e,
        n,
        k,
        a,
        R,
        H,
        x
      ) || t !== null && t.dependencies !== null && Do(t.dependencies)) ? (j || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, H, x), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        H,
        x
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = H), u.props = a, u.state = H, u.context = x, a = k) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Ia(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = sa(
      e,
      t.child,
      null,
      r
    ), e.child = sa(
      e,
      null,
      n,
      r
    )) : fe(t, e, n, r), e.memoizedState = u.state, t = e.child) : t = $n(
      t,
      e,
      r
    ), t;
  }
  function Tg(t, e, n, a) {
    return Wi(), e.flags |= 256, fe(t, e, n, a), e.child;
  }
  var Lc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Bc(t) {
    return { baseLanes: t, cachePool: cp() };
  }
  function Uc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Fe), t;
  }
  function xg(t, e, n) {
    var a = e.pendingProps, r = !1, u = (e.flags & 128) !== 0, h;
    if ((h = u) || (h = t !== null && t.memoizedState === null ? !1 : (xe.current & 2) !== 0), h && (r = !0, e.flags &= -129), h = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Dt) {
        if (r ? Ti(e) : xi(), (t = Ft) ? (t = Xy(
          t,
          rn
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: di !== null ? { id: Mn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = ep(t), n.return = e, e.child = n, ge = e, Ft = null)) : t = null, t === null) throw mi(e);
        return Uf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, r ? (xi(), r = e.mode, u = Po(
        { mode: "hidden", children: u },
        r
      ), a = Ii(
        a,
        r,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = Bc(n), a.childLanes = Uc(
        t,
        h,
        n
      ), e.memoizedState = Lc, us(null, a)) : (Ti(e), Hc(e, u));
    }
    var b = t.memoizedState;
    if (b !== null) {
      var x = b.dehydrated;
      if (x !== null)
        return ox(
          t,
          e,
          u,
          h,
          a,
          x,
          b,
          n
        );
    }
    return r ? (xi(), r = a.fallback, u = e.mode, b = t.child, x = b.sibling, a = Kn(b, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = b.subtreeFlags & 1206910976, x !== null ? r = Kn(x, r) : (r = Ii(
      r,
      u,
      n,
      null
    ), r.flags |= 2), r.return = e, a.return = e, a.sibling = r, e.child = a, us(null, a), a = e.child, r = t.child.memoizedState, r === null ? r = Bc(n) : (u = r.cachePool, u !== null ? (b = se._currentValue, u = u.parent !== b ? { parent: b, pool: b } : u) : u = cp(), r = {
      baseLanes: r.baseLanes | n,
      cachePool: u
    }), a.memoizedState = r, a.childLanes = Uc(
      t,
      h,
      n
    ), e.memoizedState = Lc, us(t.child, a)) : (Ti(e), n = t.child, t = n.sibling, n = Kn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [t], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Hc(t, e) {
    return e = Po(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Po(t, e) {
    return t = Be(22, t, null, e), t.lanes = 0, t;
  }
  function Fo(t, e, n) {
    return sa(e, t.child, null, n), t = Hc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function ox(t, e, n, a, r, u, h, b) {
    if (n)
      return e.flags & 256 ? (Ti(e), e.flags &= -257, Fo(
        t,
        e,
        b
      )) : e.memoizedState !== null ? (xi(), e.child = t.child, e.flags |= 128, null) : (xi(), u = r.fallback, h = e.mode, r = Po(
        { mode: "visible", children: r.children },
        h
      ), u = Ii(
        u,
        h,
        b,
        null
      ), u.flags |= 2, r.return = e, u.return = e, r.sibling = u, e.child = r, sa(e, t.child, null, b), r = e.child, r.memoizedState = Bc(b), r.childLanes = Uc(
        t,
        a,
        b
      ), e.memoizedState = Lc, us(null, r));
    if (Ti(e), Uf(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var x = a.dgst;
      return a = x, a !== "" && (r = Error(o(419)), r.stack = "", r.digest = a, Il({ value: r, source: null, stack: null })), Fo(
        t,
        e,
        b
      );
    }
    if (re || ta(t, e, b, !1), a = (b & t.childLanes) !== 0, re || a) {
      if (Si.current !== null)
        return Fo(
          t,
          e,
          b
        );
      if (a = Pt, a !== null && (r = am(
        a,
        b
      ), r !== 0 && r !== h.retryLane))
        throw h.retryLane = r, Ji(t, r), Ge(a, t, r), Vc;
      return Bf(u) || hr(), Fo(
        t,
        e,
        b
      );
    }
    return Bf(u) ? (e.flags |= 192, e.child = t.child, null) : (t = h.treeContext, Ft = cn(u.nextSibling), ge = e, Dt = !0, hi = null, rn = !1, t !== null && ap(e, t), e = Hc(
      e,
      r.children
    ), e.flags |= 134221824, e);
  }
  function Eg(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Mo(t.return, e, n);
  }
  function Ag(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Lo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function Jo(t, e, n, a, r, u) {
    var h = t.memoizedState;
    h === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: r,
      treeForkCount: u
    } : (h.isBackwards = e, h.rendering = null, h.renderingStartTime = 0, h.last = a, h.tail = n, h.tailMode = r, h.treeForkCount = u);
  }
  function kc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function Gc(t, e, n) {
    var a = e.pendingProps, r = a.revealOrder, u = a.tail;
    a = a.children;
    var h = xe.current;
    if (e.flags & 128)
      return ls(e, h), null;
    var b = (h & 2) !== 0;
    if (b ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, ls(e, h), r === "backwards" && t !== null ? (kc(t), fe(t, e, a, n), kc(t)) : fe(t, e, a, n), a = Dt ? Jl : 0, !b && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Eg(t, n, e);
        else if (t.tag === 19)
          Eg(t, n, e);
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
    switch (r) {
      case "backwards":
        n = Ag(e.child), n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null, kc(e)), Jo(
          e,
          !0,
          r,
          null,
          u,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (t = r.alternate, t !== null && Lo(t) === null) {
            e.child = r;
            break;
          }
          t = r.sibling, r.sibling = n, n = r, r = t;
        }
        Jo(
          e,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        Jo(
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
        n = Ag(e.child), n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), Jo(
          e,
          !1,
          r,
          n,
          u,
          a
        );
    }
    return e.child;
  }
  function wg(t, e, n) {
    var a = e.pendingProps;
    return pi(e, e.type, a.value), fe(t, e, a.children, n), e.child;
  }
  function $n(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), Ci |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if (ta(
          t,
          e,
          n,
          !1
        ), (n & e.childLanes) === 0)
          return null;
      } else return null;
    if (t !== null && e.child !== t.child)
      throw Error(o(153));
    if (e.child !== null) {
      for (t = e.child, n = Kn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Kn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function Yc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Do(t)));
  }
  function rx(t, e, n) {
    switch (e.tag) {
      case 3:
        ri(e, e.stateNode.containerInfo), pi(e, se, t.memoizedState.cache), Wi();
        break;
      case 27:
      case 5:
        Ca(e);
        break;
      case 4:
        ri(e, e.stateNode.containerInfo);
        break;
      case 10:
        pi(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, hc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Ti(e), e.flags |= 128, null;
          a = ta(
            t,
            e,
            n,
            !1
          );
          var r = e.child.childLanes;
          return a || (n & r) !== 0 ? xg(t, e, n) : (Ti(e), t = $n(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        Ti(e);
        break;
      case 19:
        if (e.flags & 128)
          return Gc(
            t,
            e,
            n
          );
        if (r = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (ta(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), r) {
          if (a)
            return Gc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), ls(e, xe.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, gg(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        pi(e, se, t.memoizedState.cache);
    }
    return $n(t, e, n);
  }
  function Cg(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        re = !0;
      else {
        if (!Yc(t, n) && (e.flags & 128) === 0)
          return re = !1, rx(
            t,
            e,
            n
          );
        re = (t.flags & 131072) !== 0;
      }
    else
      re = !1, Dt && (e.flags & 1048576) !== 0 && ip(e, Jl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = aa(e.elementType), e.type = t, typeof t == "function")
            Fu(t) ? (a = ra(t, a), e.tag = 1, e = Sg(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = jc(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === X) {
                e.tag = 11, e = hg(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (r === at) {
                e.tag = 14, e = mg(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (r === nt) {
                e.tag = 10, e.type = t, e = wg(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = ct(t) || t, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return jc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, r = ra(
          a,
          e.pendingProps
        ), Sg(
          t,
          e,
          a,
          r,
          n
        );
      case 3:
        t: {
          if (ri(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          r = u.element, rc(t, e), as(e, a, null, n);
          var h = e.memoizedState;
          if (a = h.cache, pi(e, se, a), a !== u.cache && nc(
            e,
            [se],
            n,
            !0
          ), is(), a = h.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: h.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = Tg(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== r) {
              r = ln(
                Error(o(424)),
                e
              ), Il(r), e = Tg(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ft = cn(t.firstChild), ge = e, Dt = !0, hi = null, rn = !0, n = gp(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Wi(), a === r) {
              e = $n(
                t,
                e,
                n
              );
              break t;
            }
            fe(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ia(t, e), t === null ? (n = Iy(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Dt || (e.stateNode = Oy(
          e.type,
          e.pendingProps,
          ae.current,
          e
        )) : e.memoizedState = Iy(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ca(e), t === null && Dt && (a = e.stateNode = Ky(
          e.type,
          e.pendingProps,
          ae.current
        ), ge = e, rn = !0, r = Ft, Oi(e.type) ? (Hf = r, Ft = cn(a.firstChild)) : Ft = r), fe(
          t,
          e,
          e.pendingProps.children,
          n
        ), Ia(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Dt && ((r = a = Ft) && (a = nE(
          a,
          e.type,
          e.pendingProps,
          rn
        ), a !== null ? (e.stateNode = a, ge = e, Ft = cn(a.firstChild), rn = !1, r = !0) : r = !1), r || mi(e)), Ca(e), r = e.type, u = e.pendingProps, h = t !== null ? t.memoizedProps : null, a = u.children, Of(r, u) ? a = null : h !== null && Of(r, h) && (e.flags |= 32), e.memoizedState !== null && (r = gc(
          t,
          e,
          IT,
          null,
          null,
          n
        ), pl._currentValue = r), Ia(t, e), fe(t, e, a, n), e.child;
      case 6:
        return t === null && Dt && ((t = n = Ft) && (n = iE(
          n,
          e.pendingProps,
          rn
        ), n !== null ? (e.stateNode = n, ge = e, Ft = null, t = !0) : t = !1), t || mi(e)), null;
      case 13:
        return xg(t, e, n);
      case 4:
        return ri(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = sa(
          e,
          null,
          a,
          n
        ) : fe(t, e, a, n), e.child;
      case 11:
        return hg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, Ia(t, e), fe(t, e, a, n), e.child;
      case 8:
        return fe(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return fe(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return wg(t, e, n);
      case 9:
        return r = e.type._context, a = e.pendingProps.children, ea(e), r = Se(r), a = a(r), e.flags |= 1, fe(t, e, a, n), e.child;
      case 14:
        return mg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return pg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Gc(t, e, n);
      case 31:
        return sx(t, e, n);
      case 22:
        return gg(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ea(e), a = Se(se), t === null ? (r = lc(), r === null && (r = Pt, u = ic(), r.pooledCache = u, u.refCount++, u !== null && (r.pooledCacheLanes |= n), r = u), e.memoizedState = { parent: a, cache: r }, oc(e), pi(e, se, r)) : ((t.lanes & n) !== 0 && (rc(t, e), as(e, null, null, n), is()), r = t.memoizedState, u = e.memoizedState, r.parent !== a ? (r = { parent: a, cache: a }, e.memoizedState = r, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r), pi(e, se, a)) : (a = u.cache, pi(e, se, a), a !== r.cache && nc(
          e,
          [se],
          n,
          !0
        ))), fe(
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
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Dt && wo(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : Ia(t, e), fe(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function ti(t) {
    t.flags |= 4;
  }
  function qc(t, e, n, a, r) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? ev(e, a) : ev(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (r & 335544128) === r)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (oy()) t.flags |= 8192;
        else
          throw la = Ro, sc;
    } else t.flags &= -16777217;
  }
  function Mg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !nv(e))
      if (oy()) t.flags |= 8192;
      else
        throw la = Ro, sc;
  }
  function Io(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? em() : 536870912, t.lanes |= e, nl |= e);
  }
  function cs(t, e) {
    if (!Dt)
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
  function Jt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child, n = 0, a = 0;
    if (e)
      for (var r = t.child; r !== null; )
        n |= r.lanes | r.childLanes, a |= r.subtreeFlags & 1206910976, a |= r.flags & 1206910976, r.return = t, r = r.sibling;
    else
      for (r = t.child; r !== null; )
        n |= r.lanes | r.childLanes, a |= r.subtreeFlags, a |= r.flags, r.return = t, r = r.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function ux(t, e, n) {
    var a = e.pendingProps;
    switch (Wu(e), e.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Jt(e), null;
      case 1:
        return Jt(e), null;
      case 3:
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Jn(se), Gn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Xa(e) ? ti(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, tc())), Jt(e), null;
      case 26:
        var r = e.type, u = e.memoizedState;
        return t === null ? (ti(e), u !== null ? (Jt(e), Mg(e, u)) : (Jt(e), qc(
          e,
          r,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (ti(e), Jt(e), Mg(e, u)) : (Jt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ti(e), Jt(e), qc(
          e,
          r,
          t,
          a,
          n
        )), null;
      case 27:
        if (Ma(e), n = ae.current, r = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ti(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Jt(e), e.subtreeFlags &= -33554433, null;
          }
          t = ee.current, Xa(e) ? lp(e) : (t = Ky(r, a, n), e.stateNode = t, ti(e));
        }
        return Jt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Ma(e), r = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ti(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Jt(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = ee.current, Xa(e))
            lp(e);
          else {
            var h = Ts(
              ae.current
            );
            switch (u) {
              case 1:
                u = h.createElementNS(
                  "http://www.w3.org/2000/svg",
                  r
                );
                break;
              case 2:
                u = h.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  r
                );
                break;
              default:
                switch (r) {
                  case "svg":
                    u = h.createElementNS(
                      "http://www.w3.org/2000/svg",
                      r
                    );
                    break;
                  case "math":
                    u = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      r
                    );
                    break;
                  case "script":
                    u = h.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? h.createElement("select", {
                      is: a.is
                    }) : h.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? h.createElement(r, { is: a.is }) : h.createElement(r);
                }
            }
            u[be] = e, u[Le] = a;
            t: for (h = e.child; h !== null; ) {
              if (h.tag === 5 || h.tag === 6)
                u.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                h.child.return = h, h = h.child;
                continue;
              }
              if (h === e) break t;
              for (; h.sibling === null; ) {
                if (h.return === null || h.return === e)
                  break t;
                h = h.return;
              }
              h.sibling.return = h.return, h = h.sibling;
            }
            e.stateNode = u;
            t: switch (Ae(u, r, a), r) {
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
            a && ti(e);
          }
        }
        return Jt(e), e.subtreeFlags &= -33554433, qc(
          e,
          e.type,
          t === null ? null : t.memoizedProps,
          e.pendingProps,
          n
        ), null;
      case 6:
        if (t && e.stateNode != null)
          t.memoizedProps !== a && ti(e);
        else {
          if (typeof a != "string" && e.stateNode === null)
            throw Error(o(166));
          if (t = ae.current, Xa(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, r = ge, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  a = r.memoizedProps;
              }
            t[be] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Cy(t.nodeValue, n)), t || mi(e, !0);
          } else
            t = Ts(t).createTextNode(
              a
            ), t[be] = e, e.stateNode = t;
        }
        return Jt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Xa(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[be] = e;
            } else
              Wi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Jt(e), t = !1;
          } else
            n = tc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Jt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (r = Xa(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!r) throw Error(o(318));
              if (r = e.memoizedState, r = r !== null ? r.dehydrated : null, !r) throw Error(o(317));
              r[be] = e;
            } else
              Wi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Jt(e), r = !1;
          } else
            r = tc(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
        }
        return Ze(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, r = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (r = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== r && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Io(e, e.updateQueue), Jt(e), null);
      case 4:
        return Gn(), t === null && wf(e.stateNode.containerInfo), e.flags |= 67108864, Jt(e), null;
      case 10:
        return Jn(e.type), Jt(e), null;
      case 19:
        if (mc(e), a = e.memoizedState, a === null) return Jt(e), null;
        if (r = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (r) cs(a, !1);
          else {
            if (ie !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Lo(t), u !== null) {
                  for (e.flags |= 128, cs(a, !1), t = u.updateQueue, e.updateQueue = t, Io(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    tp(n, t), n = n.sibling;
                  return ls(
                    e,
                    xe.current & 1 | 2
                  ), Dt && Pn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && ze() > ur && (e.flags |= 128, r = !0, cs(a, !1), e.lanes = 4194304);
          }
        else {
          if (!r)
            if (t = Lo(u), t !== null) {
              if (e.flags |= 128, r = !0, t = t.updateQueue, e.updateQueue = t, Io(e, t), cs(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Dt)
                return Jt(e), null;
            } else
              2 * ze() - a.renderingStartTime > ur && n !== 536870912 && (e.flags |= 128, r = !0, cs(a, !1), e.lanes = 4194304);
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
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ze(), t.sibling = null, u = xe.current, u = r ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Dt ? ls(e, u) : (n = u, Mt(Te, e), Mt(xe, n), Oe === null && (Oe = e)), Dt && Pn(e, a.treeForkCount), t;
        }
        return Jt(e), null;
      case 22:
      case 23:
        return Ze(e), dc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Jt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Jt(e), n = e.updateQueue, n !== null && Io(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && kt(ia), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Jn(se), Jt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Jt(e), null;
    }
    throw Error(o(156, e.tag));
  }
  function cx(t, e) {
    switch (Wu(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Jn(se), Gn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ma(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ze(e), e.alternate === null)
            throw Error(o(340));
          Wi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ze(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          Wi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return mc(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Gn(), null;
      case 10:
        return Jn(e.type), null;
      case 22:
      case 23:
        return Ze(e), dc(), t !== null && kt(ia), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Jn(se), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dg(t, e) {
    switch (Wu(e), e.tag) {
      case 3:
        Jn(se), Gn();
        break;
      case 26:
      case 27:
      case 5:
        Ma(e);
        break;
      case 4:
        Gn();
        break;
      case 31:
        e.memoizedState !== null && Ze(e);
        break;
      case 13:
        Ze(e);
        break;
      case 19:
        mc(e);
        break;
      case 10:
        Jn(e.type);
        break;
      case 22:
      case 23:
        Ze(e), dc(), t !== null && kt(ia);
        break;
      case 24:
        Jn(se);
    }
  }
  function fs(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var r = a.next;
        n = r;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create, h = n.inst;
            a = u(), h.destroy = a;
          }
          n = n.next;
        } while (n !== r);
      }
    } catch (b) {
      qt(e, e.return, b);
    }
  }
  function Ei(t, e, n) {
    try {
      var a = e.updateQueue, r = a !== null ? a.lastEffect : null;
      if (r !== null) {
        var u = r.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var h = a.inst, b = h.destroy;
            if (b !== void 0) {
              h.destroy = void 0, r = e;
              var x = n, j = b;
              try {
                j();
              } catch (k) {
                qt(
                  r,
                  x,
                  k
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (k) {
      qt(e, e.return, k);
    }
  }
  function zg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        vp(e, n);
      } catch (a) {
        qt(t, t.return, a);
      }
    }
  }
  function Og(t, e, n) {
    n.props = ra(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      qt(t, e, a);
    }
  }
  function zn(t, e) {
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
            var r = t.stateNode, u = Qn(t.memoizedProps, r);
            (r.ref === null || r.ref.name !== u) && (r.ref = By(u)), a = r.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var h = new Ie(t);
              y(
                t.child,
                !1,
                tE,
                h,
                void 0,
                void 0
              ), t.stateNode = h;
            }
            a = t.stateNode;
            break;
          default:
            a = t.stateNode;
        }
        typeof n == "function" ? t.refCleanup = n(a) : n.current = a;
      }
    } catch (b) {
      qt(t, e, b);
    }
  }
  function Ee(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (r) {
          qt(t, e, r);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          qt(t, e, r);
        }
      else n.current = null;
  }
  function Wo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        qy(
          t.stateNode,
          e[n]
        );
  }
  function Ng(t) {
    for (var e = t.return; e !== null && (Qc(e) && qy(t.stateNode, e.stateNode), !Xc(e)); )
      e = e.return;
  }
  function ds(t) {
    for (var e = t.return; e !== null && (Qc(e) && eE(t.stateNode, e.stateNode), !Xc(e)); )
      e = e.return;
  }
  function Xc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Qc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Zc(t) {
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
    } catch (r) {
      qt(t, t.return, r);
    }
  }
  function Kc(t, e, n) {
    try {
      var a = t.stateNode;
      Lx(a, t.type, n, e), a[Le] = e;
    } catch (r) {
      qt(t, t.return, r);
    }
  }
  function Rg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Oi(t.type) || t.tag === 4;
  }
  function Pc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Rg(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Oi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Fc(t, e, n, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      r = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(r, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(r), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Cn)), Wo(t, a), Lt = !0;
    else if (r !== 4 && (r === 27 && (Wo(t, a), a = null, Oi(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (Fc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Fc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function $o(t, e, n, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      r = t.stateNode, e ? n.insertBefore(r, e) : n.appendChild(r), Wo(t, a), Lt = !0;
    else if (r !== 4 && (r === 27 && (Wo(t, a), a = null, Oi(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for ($o(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        $o(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function _g(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      Ae(e, a, n), e[be] = t, e[Le] = n;
    } catch (u) {
      qt(t, t.return, u);
    }
  }
  var tr = !1, Ke = null;
  function Vg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (tr = !0);
  }
  var On = null;
  function jg() {
    var t = On;
    return On = null, t;
  }
  var Ue = 0;
  function Wa(t, e, n, a, r) {
    return Ue = 0, Lg(
      t.child,
      e,
      n,
      a,
      r
    );
  }
  function Lg(t, e, n, a, r) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var h = t.stateNode;
        if (a !== null) {
          var b = _f(h);
          a.push(b), b.view && (u = !0);
        } else
          u || _f(h).view && (u = !0);
        tr = !0, jy(
          h,
          Ue === 0 ? e : e + "_" + Ue,
          n
        ), Ue++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && r || Lg(
        t.child,
        e,
        n,
        a,
        r
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function Nn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? Ly(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Nn(
        t.child,
        e
      )), t = t.sibling;
  }
  function er(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && (er(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
          var e = t.memoizedProps;
          if (e.name == null || e.name === "auto")
            throw Error(o(544));
          var n = e.name;
          e = Zn(e.default, e.share), e !== "none" && (Wa(
            t,
            n,
            e,
            null,
            !1
          ) || Nn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Jc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, r = Qn(a, n), u = Zn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? Wa(t, r, u, null, !1) ? (er(t), n.paired || e || sl(t, a.onEnter)) : Nn(t.child, !1) : er(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Jc(t, e), t = t.sibling;
    else er(t);
  }
  function Ic(t) {
    if (Ke !== null && Ke.size !== 0) {
      var e = Ke;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var r = e.get(a);
                if (r !== void 0) {
                  var u = Zn(
                    n.default,
                    n.share
                  );
                  if (u !== "none" && (Wa(
                    t,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, r.paired = u, u.paired = r, sl(t, n.onShare)) : Nn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            Ic(t);
          }
          t = t.sibling;
        }
    }
  }
  function Wc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Qn(e, t.stateNode), a = Ke !== null ? Ke.get(n) : void 0, r = Zn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      r !== "none" && (Wa(t, n, r, null, !1) ? a !== void 0 ? (r = t.stateNode, a.paired = r, r.paired = a, Ke.delete(n), sl(t, e.onShare)) : sl(t, e.onExit) : Nn(t.child, !1)), Ke !== null && Ic(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Wc(t), t = t.sibling;
    else
      Ke !== null && Ic(t);
  }
  function Bg(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Qn(e, t.stateNode);
        e = Zn(e.default, e.update), t.flags &= -5, e !== "none" && Wa(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && Bg(t);
      t = t.sibling;
    }
  }
  function $c(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Nn(t.child, !1));
          }
          $c(t);
        }
        t = t.sibling;
      }
  }
  function nr(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Nn(t.child, !1), $c(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        nr(t), t = t.sibling;
    else $c(t);
  }
  function Ug(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Nn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Ug(t), t = t.sibling;
  }
  function tf(t, e, n, a, r, u, h) {
    for (var b = !1; e !== null; ) {
      if (e.tag === 5) {
        var x = e.stateNode;
        if (u !== null && Ue < u.length) {
          var j = u[Ue], k = _f(x);
          (j.view || k.view) && (b = !0);
          var P;
          if (P = (t.flags & 4) === 0)
            if (k.clip) P = !0;
            else {
              P = j.rect;
              var R = k.rect;
              P = P.y !== R.y || P.x !== R.x || P.height !== R.height || P.width !== R.width;
            }
          P && (t.flags |= 4), k.abs ? k = !j.abs : (j = j.rect, k = k.rect, k = j.height !== k.height || j.width !== k.width), k && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && jy(
          x,
          Ue === 0 ? n : n + "_" + Ue,
          r
        ), b && (t.flags & 4) !== 0 || (On === null && (On = []), On.push(
          x,
          Ue === 0 ? a : a + "_" + Ue,
          e.memoizedProps
        )), Ue++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h ? t.flags |= e.flags & 32 : tf(
        t,
        e.child,
        n,
        a,
        r,
        u,
        h
      ) && (b = !0));
      e = e.sibling;
    }
    return b;
  }
  function Hg(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, r = Qn(n, a), u = Zn(n.default, n.update), h;
        h = t.memoizedState, t.memoizedState = null, a = t;
        var b = t.child;
        Ue = 0, r = tf(
          a,
          b,
          r,
          r,
          u,
          h,
          !1
        ), (t.flags & 4) !== 0 && r && sl(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Hg(t);
      t = t.sibling;
    }
  }
  var ye = !1, Gt = !1, Rn = !1, ef = !1, kg = typeof WeakSet == "function" ? WeakSet : Set, ve = null, _n = !1, hs = !1, ir = !1, nf = !1;
  function fx(t, e, n) {
    if (t = t.containerInfo, Df = gl, t = Xm(t), Yu(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var r = a.getSelection && a.getSelection();
          if (r && r.rangeCount !== 0) {
            a = r.anchorNode;
            var u = r.anchorOffset, h = r.focusNode;
            r = r.focusOffset;
            try {
              a.nodeType, h.nodeType;
            } catch {
              a = null;
              break t;
            }
            var b = 0, x = -1, j = -1, k = 0, P = 0, R = t, H = null;
            e: for (; ; ) {
              for (var rt; R !== a || u !== 0 && R.nodeType !== 3 || (x = b + u), R !== h || r !== 0 && R.nodeType !== 3 || (j = b + r), R.nodeType === 3 && (b += R.nodeValue.length), (rt = R.firstChild) !== null; )
                H = R, R = rt;
              for (; ; ) {
                if (R === t) break e;
                if (H === a && ++k === u && (x = b), H === h && ++P === r && (j = b), (rt = R.nextSibling) !== null) break;
                R = H, H = R.parentNode;
              }
              R = rt;
            }
            a = x === -1 || j === -1 ? null : { start: x, end: j };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (zf = { focusedElem: t, selectionRange: a }, gl = !1, n = (n & 335544064) === n, ve = e, e = n ? 9270 : 1024; ve !== null; ) {
      if (t = ve, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && Wc(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && Vg(t), ar(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Wc(a), ar(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && Vg(t), ar(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, ve = a) : (n && Bg(t), ar(n));
      }
    }
    Ke = null;
  }
  function ar(t) {
    for (; ve !== null; ) {
      var e = ve, n = t, a = e.alternate, r = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((r & 1024) !== 0 && a !== null) {
            n = void 0, r = a.memoizedProps, a = a.memoizedState;
            var u = e.stateNode;
            try {
              var h = ra(
                e.type,
                r
              );
              n = u.getSnapshotBeforeUpdate(
                h,
                a
              ), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (b) {
              qt(e, e.return, b);
            }
          }
          break;
        case 3:
          if ((r & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              Lf(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Lf(a);
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
          n && a !== null && (n = Qn(
            a.memoizedProps,
            a.stateNode
          ), r = e.memoizedProps, r = Zn(r.default, r.update), r !== "none" && Wa(
            a,
            n,
            r,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((r & 1024) !== 0) throw Error(o(163));
      }
      if (a = e.sibling, a !== null) {
        a.return = e.return, ve = a;
        break;
      }
      ve = e.return;
    }
  }
  function Gg(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Vn(t, n), a & 4 && fs(5, n);
        break;
      case 1:
        if (Vn(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (h) {
              qt(n, n.return, h);
            }
          else {
            var r = ra(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                r,
                e,
                t.__reactInternalSnapshotBeforeUpdate
              );
            } catch (h) {
              qt(
                n,
                n.return,
                h
              );
            }
          }
        a & 64 && zg(n), a & 512 && zn(n, n.return);
        break;
      case 3:
        if (Vn(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
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
            vp(t, e);
          } catch (h) {
            qt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && a & 4 && _g(n);
      case 26:
      case 5:
        Vn(t, n), e === null && a & 4 && Zc(n), a & 512 && zn(n, n.return);
        break;
      case 12:
        Vn(t, n);
        break;
      case 31:
        Vn(t, n), a & 4 && Qg(t, n);
        break;
      case 13:
        Vn(t, n), a & 4 && Zg(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = Ex.bind(
          null,
          n
        ), aE(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ye, !a) {
          var u = e !== null && e.memoizedState !== null || Gt;
          e = ye, r = Gt, ye = a, (Gt = u) && !r ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), gn(
            t,
            n,
            a
          )) : Vn(t, n), ye = e, Gt = r;
        }
        break;
      case 30:
        Vn(t, n), a & 512 && zn(n, n.return);
        break;
      case 7:
        a & 512 && zn(n, n.return);
      default:
        Vn(t, n);
    }
  }
  function af(t, e) {
    for (t = t.child; t !== null; )
      Yg(t, e), t = t.sibling;
  }
  function Yg(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var r = t.stateNode, u = t.memoizedProps.style, h = u != null && u.hasOwnProperty("display") ? u.display : null;
            r.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
          }
        } catch (x) {
          qt(t, t.return, x);
        }
        lf(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Lt = !0;
        } catch (x) {
          qt(t, t.return, x);
        }
        break;
      case 18:
        try {
          var b = t.stateNode;
          e ? Vy(b, !0) : Vy(t.stateNode, !1);
        } catch (x) {
          qt(t, t.return, x);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && af(t, e);
        break;
      default:
        af(t, e);
    }
  }
  function lf(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Yg(n, a);
              break t;
            case 22:
              n.memoizedState === null && lf(n, a);
              break t;
            default:
              lf(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function qg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, qg(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ro(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var It = null, He = !1;
  function mn(t, e, n) {
    for (n = n.child; n !== null; )
      Xg(t, e, n), n = n.sibling;
  }
  function Xg(t, e, n) {
    if (Ye && typeof Ye.onCommitFiberUnmount == "function")
      try {
        Ye.onCommitFiberUnmount(Ll, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Gt || Ee(n, e), mn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Gt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Gt || Ee(n, e), ds(n);
        var a = It, r = He;
        Oi(n.type) && (It = n.stateNode, He = !1), mn(
          t,
          e,
          n
        ), Py(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), It = a, He = r;
        break;
      case 5:
        Gt || Ee(n, e), ds(n);
      case 6:
        if (n.tag === 6 && ds(n), a = It, r = He, It = null, mn(
          t,
          e,
          n
        ), It = a, He = r, It !== null)
          if (He)
            try {
              (It.nodeType === 9 ? It.body : It.nodeName === "HTML" ? It.ownerDocument.body : It).removeChild(n.stateNode), Lt = !0;
            } catch (u) {
              qt(
                n,
                e,
                u
              );
            }
          else
            try {
              It.removeChild(n.stateNode), Lt = !0;
            } catch (u) {
              qt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        It !== null && (He ? (t = It, _y(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), yl(t)) : _y(It, n.stateNode));
        break;
      case 4:
        a = It, r = He, It = n.stateNode.containerInfo, He = !0, mn(
          t,
          e,
          n
        ), It = a, He = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ei(2, n, e), Gt || Ei(4, n, e), mn(
          t,
          e,
          n
        );
        break;
      case 1:
        Gt || (Ee(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Og(
          n,
          e,
          a
        )), mn(
          t,
          e,
          n
        );
        break;
      case 21:
        mn(
          t,
          e,
          n
        );
        break;
      case 22:
        Gt = (a = Gt) || n.memoizedState !== null, mn(
          t,
          e,
          n
        ), Gt = a;
        break;
      case 30:
        Ee(n, e), mn(
          t,
          e,
          n
        );
        break;
      case 7:
        Gt || Ee(n, e), mn(
          t,
          e,
          n
        );
        break;
      default:
        mn(
          t,
          e,
          n
        );
    }
  }
  function Qg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        yl(t);
      } catch (n) {
        qt(e, e.return, n);
      }
    }
  }
  function Zg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        yl(t);
      } catch (n) {
        qt(e, e.return, n);
      }
  }
  function dx(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new kg()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new kg()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function lr(t, e) {
    var n = dx(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var r = Ax.bind(null, t, a);
        a.then(r, r);
      }
    });
  }
  function _e(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var u = a[r], h = t, b = e, x = b;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (Oi(x.type)) {
                It = x.stateNode, He = !1;
                break t;
              }
              break;
            case 5:
              It = x.stateNode, He = !1;
              break t;
            case 3:
            case 4:
              It = x.stateNode.containerInfo, He = !0;
              break t;
          }
          x = x.return;
        }
        if (It === null) throw Error(o(160));
        Xg(h, b, u), It = null, He = !1, h = u.alternate, h !== null && (h.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Kg(e, t, n), e = e.sibling;
  }
  var pn = null;
  function Kg(t, e, n) {
    var a = t.alternate, r = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (r & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var u = 0; u < a.length; u++) {
            var h = a[u];
            h.ref.impl = h.nextImpl;
          }
        _e(e, t, n), Ve(t), r & 4 && (Ei(3, t, t.return), fs(3, t), Ei(5, t, t.return));
        break;
      case 1:
        _e(e, t, n), Ve(t), r & 512 && (Gt || a === null || Ee(a, a.return)), r & 64 && ye && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (u = pn, _e(e, t, n), Ve(t), r & 512 && (Gt || a === null || Ee(a, a.return)), r & 4)
          if (r = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (ye)
                  t.stateNode = Oy(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, r = u.ownerDocument || u;
                    e: switch (e) {
                      case "title":
                        a = r.getElementsByTagName("title")[0], (!a || a[Hl] || a[be] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = r.createElement(e), r.head.insertBefore(
                          a,
                          r.querySelector("head > title")
                        )), Ae(a, e, n), a[be] = t, pe(a), e = a;
                        break t;
                      case "link":
                        if (u = tv(
                          "link",
                          "href",
                          r
                        ).get(e + (n.href || ""))) {
                          for (h = 0; h < u.length; h++)
                            if (a = u[h], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(h, 1);
                              break e;
                            }
                        }
                        a = r.createElement(e), Ae(a, e, n), r.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = tv(
                          "meta",
                          "content",
                          r
                        ).get(e + (n.content || ""))) {
                          for (h = 0; h < u.length; h++)
                            if (a = u[h], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(h, 1);
                              break e;
                            }
                        }
                        a = r.createElement(e), Ae(a, e, n), r.head.appendChild(a);
                        break;
                      default:
                        throw Error(o(468, e));
                    }
                    a[be] = t, pe(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                ye || qf(u, t.type, t.stateNode);
            else
              t.stateNode = $y(
                u,
                n,
                t.memoizedProps
              );
          else
            r !== n ? (r === null ? (e = a.stateNode, e === null || Gt || e.parentNode.removeChild(e)) : r.count--, n === null ? ye || qf(u, t.type, t.stateNode) : $y(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && Kc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        _e(e, t, n), Ve(t), r & 512 && (Gt || a === null || Ee(a, a.return)), a !== null && r & 4 && Kc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Rn, Rn = !1, _e(e, t, n), Rn = u, Ve(t), r & 512 && (Gt || a === null || Ee(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Va(e, ""), Lt = !0;
          } catch (k) {
            qt(t, t.return, k);
          }
        }
        r & 4 && t.stateNode != null && (e = t.memoizedProps, Kc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), r & 1024 && (ef = !0);
        break;
      case 6:
        if (_e(e, t, n), Ve(t), r & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Lt = !0;
          } catch (k) {
            qt(t, t.return, k);
          }
        }
        break;
      case 3:
        if (Lt = !1, Sr = null, u = pn, pn = xs(e.containerInfo), _e(e, t, n), pn = u, Ve(t), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            yl(e.containerInfo);
          } catch (k) {
            qt(t, t.return, k);
          }
        ef && (ef = !1, Pg(t)), Lt = !1;
        break;
      case 4:
        r = Rn, Rn = ye, a = mm(), u = pn, pn = xs(
          t.stateNode.containerInfo
        ), _e(e, t, n), Ve(t), pn = u, Lt && hs && (ir = !0), Lt = a, Rn = r;
        break;
      case 12:
        _e(e, t, n), Ve(t);
        break;
      case 31:
        _e(e, t, n), Ve(t), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 13:
        _e(e, t, n), Ve(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (rr = ze()), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, h = a !== null && a.memoizedState !== null;
        var b = ye, x = Gt, j = Rn;
        ye = b || u, Rn = j || u, Gt = x || h, _e(e, t, n), Gt = x, Rn = j, ye = b, Ve(t), r & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || h || ye || Gt || (e = h || Gt, n = ye, a = Gt, ye = u || ye, Gt = e, Ai(t, 2), ye = n, Gt = a), !u && Rn || af(t, u)), r & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, lr(t, n))));
        break;
      case 19:
        _e(e, t, n), Ve(t), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 30:
        r & 512 && (Gt || a === null || Ee(a, a.return)), r = mm(), u = hs, h = (n & 335544064) === n, b = t.memoizedProps, hs = h && Zn(
          b.default,
          b.update
        ) !== "none", _e(e, t, n), Ve(t), h && a !== null && Lt && (t.flags |= 4), hs = u, Lt = r;
        break;
      case 21:
        break;
      case 7:
        r & 512 && (Gt || a === null || Ee(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        _e(e, t, n), Ve(t);
    }
  }
  function Ve(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Rg(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var r = t.return; r !== null; ) {
          if (Qc(r)) {
            var u = r.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (Xc(r)) break;
          r = r.return;
        }
        var h = a;
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var b = n.stateNode, x = Pc(t);
            $o(
              t,
              x,
              b,
              h
            );
            break;
          case 5:
            var j = n.stateNode;
            n.flags & 32 && (Va(j, ""), n.flags &= -33);
            var k = Pc(t);
            $o(
              t,
              k,
              j,
              h
            );
            break;
          case 3:
          case 4:
            var P = n.stateNode.containerInfo, R = Pc(t);
            Fc(
              t,
              R,
              P,
              h
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (H) {
        qt(t, t.return, H);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Pg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Pg(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, gl = !0, e.reset(), gl = !1), t = t.sibling;
      }
  }
  function $a(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Fg(e, t), e = e.sibling;
    else Hg(e);
  }
  function Fg(t, e) {
    var n = t.alternate;
    if (n === null) Jc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (nf = _n = !1, jg(), $a(e, t), !_n && !ir) {
            if (t = On, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var r = t[a + 1];
                Ly(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + r + ")"
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
            )), nf = !0;
          }
          On = null;
          break;
        case 5:
          $a(e, t);
          break;
        case 4:
          a = _n, _n = !1, $a(e, t), _n && (ir = !0), _n = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Jc(t, !1) : $a(e, t));
          break;
        case 30:
          a = _n, r = jg(), _n = !1, $a(e, t), _n && (t.flags |= 4);
          var u = t.memoizedProps, h = t.stateNode;
          e = Qn(u, h), h = Qn(n.memoizedProps, h);
          var b = Zn(u.default, u.update);
          b === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, Ue = 0, e = tf(
            t,
            n,
            e,
            h,
            b,
            u,
            !0
          ), Ue !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (sl(
            t,
            t.memoizedProps.onUpdate
          ), On = r) : r !== null && (r.push.apply(r, On), On = r), _n = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          $a(e, t);
      }
  }
  function Vn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Gg(t, e.alternate, e), e = e.sibling;
  }
  function Ai(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ei(4, n, n.return), Ai(
            n,
            a
          );
          break;
        case 1:
          Ee(n, n.return);
          var r = n.stateNode;
          typeof r.componentWillUnmount == "function" && Og(
            n,
            n.return,
            r
          ), Ai(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Py(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          Ee(n, n.return), n.tag !== 5 && n.tag !== 27 || ds(n), Ai(
            n,
            a
          );
          break;
        case 6:
          ds(n);
          break;
        case 26:
          Ee(n, n.return), r = n.stateNode, n.memoizedState !== null || r === null || Gt || r.parentNode.removeChild(r), Ai(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && Ai(
            n,
            a
          );
          break;
        case 30:
          Ee(n, n.return), Ai(
            n,
            a
          );
          break;
        case 7:
          Ee(n, n.return);
        default:
          Ai(
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function gn(t, e, n) {
    for (n = (e.subtreeFlags & 8772) !== 0 ? n : n & -2, e = e.child; e !== null; ) {
      var a = e.alternate, r = t, u = e, h = u.flags, b = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          gn(
            r,
            u,
            n
          ), fs(4, u);
          break;
        case 1:
          if (gn(
            r,
            u,
            n
          ), a = u, r = a.stateNode, typeof r.componentDidMount == "function")
            try {
              r.componentDidMount();
            } catch (k) {
              qt(a, a.return, k);
            }
          if (a = u, r = a.updateQueue, r !== null) {
            var x = a.stateNode;
            try {
              var j = r.shared.hiddenCallbacks;
              if (j !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < j.length; r++)
                  yp(j[r], x);
            } catch (k) {
              qt(a, a.return, k);
            }
          }
          b && h & 64 && zg(u), zn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && _g(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Ng(u), gn(
            r,
            u,
            n
          ), b && a === null && h & 4 && Zc(u), zn(u, u.return);
          break;
        case 6:
          Ng(u);
          break;
        case 26:
          x = u.stateNode, u.memoizedState !== null || x === null || ye || qf(
            xs(x.ownerDocument),
            u.type,
            x
          ), gn(
            r,
            u,
            n
          ), b && a === null && h & 4 && Zc(u), zn(u, u.return);
          break;
        case 12:
          gn(
            r,
            u,
            n
          );
          break;
        case 31:
          gn(
            r,
            u,
            n
          ), b && h & 4 && Qg(r, u);
          break;
        case 13:
          gn(
            r,
            u,
            n
          ), b && h & 4 && Zg(r, u);
          break;
        case 22:
          u.memoizedState === null && gn(
            r,
            u,
            n
          ), zn(u, u.return);
          break;
        case 30:
          gn(
            r,
            u,
            n
          ), zn(u, u.return);
          break;
        case 7:
          zn(u, u.return);
        default:
          gn(
            r,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function sf(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Wl(n));
  }
  function of(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Wl(t));
  }
  function un(t, e, n, a) {
    var r = (n & 335544064) === n;
    if (e.subtreeFlags & (r ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Jg(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else r && Ug(e);
  }
  function Jg(t, e, n, a) {
    var r = (n & 335544064) === n;
    r && e.alternate === null && e.return !== null && e.return.alternate !== null && nr(e);
    var u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        un(
          t,
          e,
          n,
          a
        ), u & 2048 && fs(9, e);
        break;
      case 1:
        un(
          t,
          e,
          n,
          a
        );
        break;
      case 3:
        un(
          t,
          e,
          n,
          a
        ), r && nf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Wl(u)));
        break;
      case 12:
        if (u & 2048) {
          un(
            t,
            e,
            n,
            a
          ), u = e.stateNode;
          try {
            var h = e.memoizedProps, b = h.id, x = h.onPostCommit;
            typeof x == "function" && x(
              b,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (j) {
            qt(e, e.return, j);
          }
        } else
          un(
            t,
            e,
            n,
            a
          );
        break;
      case 31:
        un(
          t,
          e,
          n,
          a
        );
        break;
      case 13:
        un(
          t,
          e,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        h = e.stateNode, b = e.alternate, e.memoizedState !== null ? (r && b !== null && b.memoizedState === null && nr(b), h._visibility & 2 ? un(
          t,
          e,
          n,
          a
        ) : ms(
          t,
          e
        )) : (r && b !== null && b.memoizedState !== null && nr(e), h._visibility & 2 ? un(
          t,
          e,
          n,
          a
        ) : (h._visibility |= 2, tl(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && sf(b, e);
        break;
      case 24:
        un(
          t,
          e,
          n,
          a
        ), u & 2048 && of(e.alternate, e);
        break;
      case 30:
        r && (u = e.alternate, u !== null && (Nn(u.child, !0), Nn(e.child, !0))), un(
          t,
          e,
          n,
          a
        );
        break;
      default:
        un(
          t,
          e,
          n,
          a
        );
    }
  }
  function tl(t, e, n, a, r) {
    for (r = r && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, h = e, b = n, x = a, j = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          tl(
            u,
            h,
            b,
            x,
            r
          ), fs(8, h);
          break;
        case 23:
          break;
        case 22:
          var k = h.stateNode;
          h.memoizedState !== null ? k._visibility & 2 ? tl(
            u,
            h,
            b,
            x,
            r
          ) : ms(
            u,
            h
          ) : (k._visibility |= 2, tl(
            u,
            h,
            b,
            x,
            r
          )), r && j & 2048 && sf(
            h.alternate,
            h
          );
          break;
        case 24:
          tl(
            u,
            h,
            b,
            x,
            r
          ), r && j & 2048 && of(h.alternate, h);
          break;
        default:
          tl(
            u,
            h,
            b,
            x,
            r
          );
      }
      e = e.sibling;
    }
  }
  function ms(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, r = a.flags;
        switch (a.tag) {
          case 22:
            ms(n, a), r & 2048 && sf(
              a.alternate,
              a
            );
            break;
          case 24:
            ms(n, a), r & 2048 && of(a.alternate, a);
            break;
          default:
            ms(n, a);
        }
        e = e.sibling;
      }
  }
  var ua = 8192;
  function ca(t, e, n) {
    if (t.subtreeFlags & ua)
      for (t = t.child; t !== null; )
        Ig(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Ig(t, e, n) {
    switch (t.tag) {
      case 26:
        ca(
          t,
          e,
          n
        ), t.flags & ua && (t.memoizedState !== null ? vE(
          n,
          pn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && av(n, t)));
        break;
      case 5:
        ca(
          t,
          e,
          n
        ), t.flags & ua && (t = t.stateNode, (e & 335544128) === e && av(n, t));
        break;
      case 3:
      case 4:
        var a = pn;
        pn = xs(t.stateNode.containerInfo), ca(
          t,
          e,
          n
        ), pn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ua, ua = 16777216, ca(
          t,
          e,
          n
        ), ua = a) : ca(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & ua) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var r = t.stateNode;
          r.paired = null, Ke === null && (Ke = /* @__PURE__ */ new Map()), Ke.set(a, r);
        }
        ca(
          t,
          e,
          n
        );
        break;
      default:
        ca(
          t,
          e,
          n
        );
    }
  }
  function Wg(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ps(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ve = a, ty(
            a,
            t
          );
        }
      Wg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        $g(t), t = t.sibling;
  }
  function $g(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ps(t), t.flags & 2048 && Ei(9, t, t.return);
        break;
      case 3:
        ps(t);
        break;
      case 12:
        ps(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, sr(t)) : ps(t);
        break;
      default:
        ps(t);
    }
  }
  function sr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ve = a, ty(
            a,
            t
          );
        }
      Wg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          Ei(8, e, e.return), sr(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, sr(e));
          break;
        default:
          sr(e);
      }
      t = t.sibling;
    }
  }
  function ty(t, e) {
    for (; ve !== null; ) {
      var n = ve;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Ei(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Wl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ve = a;
      else
        t: for (n = t; ve !== null; ) {
          a = ve;
          var r = a.sibling, u = a.return;
          if (qg(a), a === n) {
            ve = null;
            break t;
          }
          if (r !== null) {
            r.return = u, ve = r;
            break t;
          }
          ve = u;
        }
    }
  }
  var hx = {
    getCacheForType: function(t) {
      var e = Se(se), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Se(se).controller.signal;
    }
  }, mx = typeof WeakMap == "function" ? WeakMap : Map, Ht = 0, Pt = null, Ot = null, Rt = 0, Yt = 0, Pe = null, wi = !1, el = !1, rf = !1, ei = 0, ie = 0, Ci = 0, fa = 0, or = 0, Fe = 0, nl = 0, gs = null, ke = null, uf = !1, rr = 0, ey = 0, ur = 1 / 0, cr = null, Mi = null, Wt = 0, yn = null, da = null, jn = 0, cf = 0, ff = null, ny = null, il = null, al = null, ll = null, ys = 0, fr = null;
  function Je() {
    return (Ht & 2) !== 0 && Rt !== 0 ? Rt & -Rt : st.T !== null ? Tf() : lm();
  }
  function iy() {
    if (Fe === 0)
      if ((Rt & 536870912) === 0 || Dt) {
        var t = ao;
        ao <<= 1, (ao & 3932160) === 0 && (ao = 262144), Fe = t;
      } else Fe = 536870912;
    return t = Te.current, t !== null && (t.flags |= 32), Fe;
  }
  function sl(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = By(
        Qn(t.memoizedProps, n)
      )), al === null && (al = []), al.push(e.bind(null, a));
    }
  }
  function Ge(t, e, n) {
    (t === Pt && (Yt === 2 || Yt === 9) || t.cancelPendingCommit !== null) && (ol(t, 0), Di(
      t,
      Rt,
      Fe,
      !1
    )), Ul(t, n), ((Ht & 2) === 0 || t !== Pt) && (t === Pt && ((Ht & 2) === 0 && (fa |= n), ie === 4 && Di(
      t,
      Rt,
      Fe,
      !1
    )), Ln(t));
  }
  function ay(t, e, n) {
    if ((Ht & 6) !== 0) throw Error(o(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Bl(t, e), r = a ? yx(t, e) : hf(t, e, !0), u = a;
    do {
      if (r === 0) {
        el && !a && Di(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !px(n)) {
          r = hf(t, e, !1), u = !1;
          continue;
        }
        if (r === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var h = 0;
          else
            h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
          if (h !== 0) {
            e = h;
            t: {
              var b = t;
              r = gs;
              var x = b.current.memoizedState.isDehydrated;
              if (x && (ol(b, h).flags |= 256), h = hf(
                b,
                h,
                !1
              ), h !== 2 && h !== 6) {
                if (rf && !x) {
                  b.errorRecoveryDisabledLanes |= u, fa |= u, r = 4;
                  break t;
                }
                u = ke, ke = r, u !== null && (ke === null ? ke = u : ke.push.apply(
                  ke,
                  u
                ));
              }
              r = h;
            }
            if (u = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          ol(t, 0), Di(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = r, u) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((e & 4194048) !== e && (e & 62914560) !== e)
                break;
            case 6:
              Di(
                a,
                e,
                Fe,
                !wi
              );
              break t;
            case 2:
              ke = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (r = rr + 300 - ze(), 10 < r)) {
            if (Di(
              a,
              e,
              Fe,
              !wi
            ), so(a, 0, !0) !== 0) break t;
            jn = e, a.timeoutHandle = Rf(
              ly.bind(
                null,
                a,
                n,
                ke,
                cr,
                uf,
                e,
                Fe,
                fa,
                nl,
                wi,
                u,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break t;
          }
          ly(
            a,
            n,
            ke,
            cr,
            uf,
            e,
            Fe,
            fa,
            nl,
            wi,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Ln(t);
  }
  function ly(t, e, n, a, r, u, h, b, x, j, k, P, R, H) {
    t.timeoutHandle = -1;
    var rt = e.subtreeFlags, pt = (u & 335544064) === u;
    if (P = null, (pt || rt & 8192 || (rt & 16785408) === 16785408) && (P = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Cn
    }, Ke = null, Ig(
      e,
      u,
      P
    ), pt && (rt = P, pt = t.containerInfo, pt = (pt.nodeType === 9 ? pt : pt.ownerDocument).__reactViewTransition, pt != null && (rt.count++, rt.waitingForViewTransition = !0, rt = ws.bind(rt), pt.finished.then(rt, rt))), rt = (u & 62914560) === u ? rr - ze() : (u & 4194048) === u ? ey - ze() : 0, rt = bE(
      P,
      rt
    ), rt !== null)) {
      jn = u, t.cancelPendingCommit = rt(
        hy.bind(
          null,
          t,
          e,
          u,
          n,
          a,
          r,
          h,
          b,
          x,
          j,
          k,
          P,
          null,
          R,
          H
        )
      ), Di(t, u, h, !j);
      return;
    }
    hy(
      t,
      e,
      u,
      n,
      a,
      r,
      h,
      b,
      x,
      j,
      k,
      P
    );
  }
  function px(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var r = n[a], u = r.getSnapshot;
          r = r.value;
          try {
            if (!Qe(u(), r)) return !1;
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
  function Di(t, e, n, a) {
    e = tm(t, e), e &= ~or, e &= ~fa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var r = e; 0 < r; ) {
      var u = 31 - qe(r), h = 1 << u;
      a[u] = -1, r &= ~h;
    }
    n !== 0 && nm(t, n, e);
  }
  function dr() {
    return (Ht & 6) === 0 ? (vs(0), !1) : !0;
  }
  function df() {
    if (Ot !== null) {
      if (Yt === 0)
        var t = Ot.return;
      else
        t = Ot, Fn = $i = null, bc(t), Ka = null, es = 0, t = Ot;
      for (; t !== null; )
        Dg(t.alternate, t), t = t.return;
      Ot = null;
    }
  }
  function ol(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, Hx(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), jn = 0, df(), Pt = t, Ot = n = Kn(t.current, null), Rt = e, Yt = 0, Pe = null, wi = !1, el = Bl(t, e), rf = !1, nl = Fe = or = fa = Ci = ie = 0, ke = gs = null, uf = !1, ei = tm(t, e), So(), n;
  }
  function sy(t, e) {
    wt = null, st.H = Qo, e === Za || e === No ? (e = hp(), Yt = 3) : e === sc ? (e = hp(), Yt = 4) : Yt = e === Vc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Pe = e, Ot === null && (ie = 1, Zo(
      t,
      ln(e, t.current)
    ));
  }
  function oy() {
    var t = Te.current;
    return t === null ? !0 : (Rt & 4194048) === Rt ? Oe === null : (Rt & 62914560) === Rt || (Rt & 536870912) !== 0 ? t === Oe : !1;
  }
  function ry() {
    var t = st.H;
    return st.H = Qo, t === null ? Qo : t;
  }
  function uy() {
    var t = st.A;
    return st.A = hx, t;
  }
  function hr() {
    ie = 4, wi || (Rt & 4194048) !== Rt && Te.current !== null || (el = !0), (Ci & 134217727) === 0 && (fa & 134217727) === 0 || Pt === null || Di(
      Pt,
      Rt,
      Fe,
      !1
    );
  }
  function hf(t, e, n) {
    var a = Ht;
    Ht |= 2;
    var r = ry(), u = uy();
    (Pt !== t || Rt !== e) && (cr = null, ol(t, e)), e = !1;
    var h = ie;
    t: do
      try {
        if (Yt !== 0 && Ot !== null) {
          var b = Ot, x = Pe;
          switch (Yt) {
            case 8:
              df(), h = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Te.current === null && (e = !0);
              var j = Yt;
              if (Yt = 0, Pe = null, rl(t, b, x, j), n && el) {
                h = 0;
                break t;
              }
              break;
            default:
              j = Yt, Yt = 0, Pe = null, rl(t, b, x, j);
          }
        }
        gx(), h = ie;
        break;
      } catch (k) {
        sy(t, k);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Fn = $i = null, Ht = a, st.H = r, st.A = u, Ot === null && (Pt = null, Rt = 0, So()), h;
  }
  function gx() {
    for (; Ot !== null; ) cy(Ot);
  }
  function yx(t, e) {
    var n = Ht;
    Ht |= 2;
    var a = ry(), r = uy();
    Pt !== t || Rt !== e ? (cr = null, ur = ze() + 500, ol(t, e)) : el = Bl(
      t,
      e
    );
    t: do
      try {
        if (Yt !== 0 && Ot !== null) {
          e = Ot;
          var u = Pe;
          e: switch (Yt) {
            case 1:
              Yt = 0, Pe = null, rl(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (fp(u)) {
                Yt = 0, Pe = null, fy(e);
                break;
              }
              e = function() {
                Yt !== 2 && Yt !== 9 || Pt !== t || (Yt = 7), Ln(t);
              }, u.then(e, e);
              break t;
            case 3:
              Yt = 7;
              break t;
            case 4:
              Yt = 5;
              break t;
            case 7:
              fp(u) ? (Yt = 0, Pe = null, fy(e)) : (Yt = 0, Pe = null, rl(t, e, u, 7));
              break;
            case 5:
              var h = null;
              switch (Ot.tag) {
                case 26:
                  h = Ot.memoizedState;
                case 5:
                case 27:
                  var b = Ot;
                  if (h ? nv(h) : b.stateNode.complete) {
                    Yt = 0, Pe = null;
                    var x = b.sibling;
                    if (x !== null) Ot = x;
                    else {
                      var j = b.return;
                      j !== null ? (Ot = j, mr(j)) : Ot = null;
                    }
                    break e;
                  }
              }
              Yt = 0, Pe = null, rl(t, e, u, 5);
              break;
            case 6:
              Yt = 0, Pe = null, rl(t, e, u, 6);
              break;
            case 8:
              df(), ie = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        vx();
        break;
      } catch (k) {
        sy(t, k);
      }
    while (!0);
    return Fn = $i = null, st.H = a, st.A = r, Ht = n, Ot !== null ? 0 : (Pt = null, Rt = 0, So(), ie);
  }
  function vx() {
    for (; Ot !== null && !yu(); )
      cy(Ot);
  }
  function cy(t) {
    var e = Cg(t.alternate, t, ei);
    t.memoizedProps = t.pendingProps, e === null ? mr(t) : Ot = e;
  }
  function fy(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = bg(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Rt
        );
        break;
      case 11:
        e = bg(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Rt
        );
        break;
      case 5:
        bc(e);
        var a = e;
        a === ge && (Dt ? (Co(a), a.tag === 5 && a.stateNode != null && (Ft = a.stateNode)) : (Co(a), Dt = !0));
      default:
        Dg(n, e), e = Ot = tp(e, ei), e = Cg(n, e, ei);
    }
    t.memoizedProps = t.pendingProps, e === null ? mr(t) : Ot = e;
  }
  function rl(t, e, n, a) {
    Fn = $i = null, bc(e), Ka = null, es = 0;
    var r = e.return;
    try {
      if (lx(
        t,
        r,
        e,
        n,
        Rt
      )) {
        ie = 1, Zo(
          t,
          ln(n, t.current)
        ), Ot = null;
        return;
      }
    } catch (u) {
      if (r !== null) throw Ot = r, u;
      ie = 1, Zo(
        t,
        ln(n, t.current)
      ), Ot = null;
      return;
    }
    e.flags & 32768 ? (Dt || a === 1 ? t = !0 : el || (Rt & 536870912) !== 0 ? t = !1 : (wi = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Te.current, a !== null && a.tag === 13 && (a.flags |= 16384))), dy(e, t)) : mr(e);
  }
  function mr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        dy(
          e,
          wi
        );
        return;
      }
      t = e.return;
      var n = ux(
        e.alternate,
        e,
        ei
      );
      if (n !== null) {
        Ot = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Ot = e;
        return;
      }
      Ot = e = t;
    } while (e !== null);
    ie === 0 && (ie = 5);
  }
  function dy(t, e) {
    do {
      var n = cx(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Ot = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Ot = t;
        return;
      }
      Ot = t = n;
    } while (t !== null);
    ie = 6, Ot = null;
  }
  function hy(t, e, n, a, r, u, h, b, x, j, k, P) {
    t.cancelPendingCommit = null;
    do
      pr();
    while (Wt !== 0);
    if ((Ht & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      t === Pt && (Ot = Pt = null, Rt = 0), da = e, yn = t, jn = n, ff = r, ny = a, bx(
        t,
        e,
        n,
        h,
        b,
        x,
        P
      );
    }
  }
  function bx(t, e, n, a, r, u, h) {
    var b = e.lanes | e.childLanes;
    if (cf = b, b |= Ku, QS(
      t,
      n,
      b,
      a,
      r,
      u
    ), al = null, (n & 335544064) === n ? (ll = KT(t), a = 10262) : (ll = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, wx(Xi, function() {
      return yf(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), tr = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = st.T, st.T = null, r = $.p, $.p = 2, u = Ht, Ht |= 4;
      try {
        fx(t, e, n);
      } finally {
        Ht = u, $.p = r, st.T = a;
      }
    }
    Wt = 1, tr ? il = Qx(
      h,
      t.containerInfo,
      ll,
      mf,
      pf,
      Tx,
      gf,
      yf,
      Sx
    ) : (mf(), pf(), gf());
  }
  function Sx(t) {
    if (Wt !== 0) {
      var e = yn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function Tx() {
    Wt === 3 && (Wt = 0, Fg(da, yn), Wt = 4);
  }
  function mf() {
    if (Wt === 1) {
      Wt = 0;
      var t = yn, e = da, n = jn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = st.T, st.T = null;
        var r = $.p;
        $.p = 2;
        var u = Ht;
        Ht |= 4;
        try {
          hs = ir = !1, Kg(e, t, n), n = zf;
          var h = Xm(t.containerInfo), b = n.focusedElem, x = n.selectionRange;
          if (h !== b && b && b.ownerDocument && qm(
            b.ownerDocument.documentElement,
            b
          )) {
            if (x !== null && Yu(b)) {
              var j = x.start, k = x.end;
              if (k === void 0 && (k = j), "selectionStart" in b)
                b.selectionStart = j, b.selectionEnd = Math.min(
                  k,
                  b.value.length
                );
              else {
                var P = b.ownerDocument || document, R = P && P.defaultView || window;
                if (R.getSelection) {
                  var H = R.getSelection(), rt = b.textContent.length, pt = Math.min(x.start, rt), Ct = x.end === void 0 ? pt : Math.min(x.end, rt);
                  !H.extend && pt > Ct && (h = Ct, Ct = pt, pt = h);
                  var V = Ym(
                    b,
                    pt
                  ), M = Ym(
                    b,
                    Ct
                  );
                  if (V && M && (H.rangeCount !== 1 || H.anchorNode !== V.node || H.anchorOffset !== V.offset || H.focusNode !== M.node || H.focusOffset !== M.offset)) {
                    var U = P.createRange();
                    U.setStart(V.node, V.offset), H.removeAllRanges(), pt > Ct ? (H.addRange(U), H.extend(M.node, M.offset)) : (U.setEnd(M.node, M.offset), H.addRange(U));
                  }
                }
              }
            }
            for (P = [], H = b; H = H.parentNode; )
              H.nodeType === 1 && P.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < P.length; b++) {
              var Z = P[b];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          gl = !!Df, zf = Df = null;
        } finally {
          Ht = u, $.p = r, st.T = a;
        }
      }
      t.current = e, Wt = 2;
    }
  }
  function pf() {
    if (Wt === 2) {
      Wt = 0;
      var t = yn, e = da, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = st.T, st.T = null;
        var a = $.p;
        $.p = 2;
        var r = Ht;
        Ht |= 4;
        try {
          Gg(t, e.alternate, e);
        } finally {
          Ht = r, $.p = a, st.T = n;
        }
      }
      Wt = 3;
    }
  }
  function gf() {
    if (Wt === 4 || Wt === 3) {
      Wt = 0;
      var t = il;
      il = null, vu();
      var e = yn, n = da, a = jn, r = ny, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Wt = 5 : (Wt = 0, da = yn = null, my(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (Mi = null), Au(a), n = n.stateNode, Ye && typeof Ye.onCommitFiberRoot == "function")
        try {
          Ye.onCommitFiberRoot(
            Ll,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        n = st.T, u = $.p, $.p = 2, st.T = null;
        try {
          for (var h = e.onRecoverableError, b = 0; b < r.length; b++) {
            var x = r[b];
            h(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          st.T = n, $.p = u;
        }
      }
      if (r = al, h = ll, ll = null, r !== null && (al = null, h === null && (h = []), t !== null))
        for (x = 0; x < r.length; x++)
          n = (0, r[x])(
            h
          ), n !== void 0 && t.finished.finally(n);
      (jn & 3) !== 0 && pr(), Ln(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === fr ? ys++ : (ys = 0, fr = e) : (ys = 0, fr = null), vs(0);
    }
  }
  function my(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Wl(e)));
  }
  function pr() {
    return il !== null && (il.skipTransition(), il = null), mf(), pf(), gf(), yf();
  }
  function yf() {
    if (Wt !== 5) return !1;
    var t = yn, e = cf;
    cf = 0;
    var n = Au(jn), a = st.T, r = $.p;
    try {
      $.p = 32 > n ? 32 : n, st.T = null, n = ff, ff = null;
      var u = yn, h = jn;
      if (Wt = 0, da = yn = null, jn = 0, (Ht & 6) !== 0) throw Error(o(331));
      var b = Ht;
      if (Ht |= 4, $g(u.current), Jg(
        u,
        u.current,
        h,
        n
      ), Ht = b, vs(0, !1), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        try {
          Ye.onPostCommitFiberRoot(Ll, u);
        } catch {
        }
      return !0;
    } finally {
      $.p = r, st.T = a, my(t, e);
    }
  }
  function py(t, e, n) {
    e = ln(n, e), e = _c(t.stateNode, e, 2), t = bi(t, e, 2), t !== null && (Ul(t, 2), Ln(t));
  }
  function qt(t, e, n) {
    if (t.tag === 3)
      py(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          py(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Mi === null || !Mi.has(a))) {
            t = ln(n, t), n = fg(2), a = bi(e, n, 2), a !== null && (dg(
              n,
              a,
              e,
              t
            ), Ul(a, 2), Ln(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function vf(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new mx();
      var r = /* @__PURE__ */ new Set();
      a.set(e, r);
    } else
      r = a.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), a.set(e, r));
    r.has(n) || (rf = !0, r.add(n), t = xx.bind(null, t, e, n), e.then(t, t));
  }
  function xx(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Pt === t && (Rt & n) === n && ((ie === 4 || ie === 3 && (Rt & 62914560) === Rt && 300 > ze() - rr) && (Ht & 2) === 0 ? ol(t, 0) : or |= n, nl === Rt && (nl = 0)), Ln(t);
  }
  function gy(t, e) {
    e === 0 && (e = em()), t = Ji(t, e), t !== null && (Ul(t, e), Ln(t));
  }
  function Ex(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), gy(t, n);
  }
  function Ax(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, r = t.memoizedState;
        r !== null && (n = r.retryLane);
        break;
      case 19:
        a = t.stateNode;
        break;
      case 22:
        a = t.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    a !== null && a.delete(e), gy(t, n);
  }
  function wx(t, e) {
    return Nl(t, e);
  }
  var ul = null, cl = null, bf = !1, gr = !1, Sf = !1, zi = 0;
  function Ln(t) {
    t !== cl && t.next === null && (cl === null ? ul = cl = t : cl = cl.next = t), gr = !0, bf || (bf = !0, Mx());
  }
  function vs(t, e) {
    if (!Sf && gr) {
      Sf = !0;
      do
        for (var n = !1, a = ul; a !== null; ) {
          if (t !== 0) {
            var r = a.pendingLanes;
            if (r === 0) var u = 0;
            else {
              var h = a.suspendedLanes, b = a.pingedLanes;
              u = (1 << 31 - qe(42 | t) + 1) - 1, u &= r & ~(h & ~b), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, Sy(a, u));
          } else
            u = Rt, u = so(
              a,
              a === Pt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Bl(a, u) || (n = !0, Sy(a, u));
          a = a.next;
        }
      while (n);
      Sf = !1;
    }
  }
  function Cx() {
    yy();
  }
  function yy() {
    gr = bf = !1;
    var t = 0;
    zi !== 0 && Ux() && (t = zi);
    for (var e = ze(), n = null, a = ul; a !== null; ) {
      var r = a.next, u = vy(a, e);
      u === 0 ? (a.next = null, n === null ? ul = r : n.next = r, r === null && (cl = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (gr = !0)), a = r;
    }
    Wt !== 0 && Wt !== 5 || vs(t), zi !== 0 && (zi = 0);
  }
  function vy(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, r = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var h = 31 - qe(u), b = 1 << h, x = r[h];
      x === -1 ? ((b & n) === 0 || (b & a) !== 0) && (r[h] = XS(b, e)) : x <= e && (t.expiredLanes |= b), u &= ~b;
    }
    if (e = Pt, n = Rt, n = so(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Yt === 2 || Yt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Rl(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Bl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Rl(a), Au(n)) {
        case 2:
        case 8:
          n = Vl;
          break;
        case 32:
          n = Xi;
          break;
        case 268435456:
          n = jl;
          break;
        default:
          n = Xi;
      }
      return a = by.bind(null, t), n = Nl(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Rl(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function by(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (pr() && t.callbackNode !== n)
      return null;
    var a = Rt;
    return a = so(
      t,
      t === Pt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (ay(t, a, e), vy(t, ze()), t.callbackNode != null && t.callbackNode === n ? by.bind(null, t) : null);
  }
  function Sy(t, e) {
    if (pr()) return null;
    ay(t, e, !0);
  }
  function Mx() {
    kx(function() {
      (Ht & 6) !== 0 ? Nl(
        _l,
        Cx
      ) : yy();
    });
  }
  function Tf() {
    if (zi === 0) {
      var t = na;
      t === 0 && (t = io, io <<= 1, (io & 261888) === 0 && (io = 256)), zi = t;
    }
    return zi;
  }
  function Ty(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : fo(t);
  }
  function Dx(t, e, n, a, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var u = Ty(
        (r[Le] || null).action
      ), h = a.submitter;
      h && (e = (e = h[Le] || null) ? Ty(e.formAction) : h.getAttribute("formAction"), e !== null && (u = e, h = null));
      var b = new go(
        "action",
        "action",
        null,
        a,
        r
      );
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (zi !== 0) {
                  var x = new FormData(r, h);
                  Dc(
                    n,
                    {
                      pending: !0,
                      data: x,
                      method: r.method,
                      action: u
                    },
                    null,
                    x
                  );
                }
              } else
                typeof u == "function" && (b.preventDefault(), x = new FormData(r, h), Dc(
                  n,
                  {
                    pending: !0,
                    data: x,
                    method: r.method,
                    action: u
                  },
                  u,
                  x
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var xf = 0; xf < Zu.length; xf++) {
    var Ef = Zu[xf], zx = Ef.toLowerCase(), Ox = Ef[0].toUpperCase() + Ef.slice(1);
    hn(
      zx,
      "on" + Ox
    );
  }
  hn(Km, "onAnimationEnd"), hn(Pm, "onAnimationIteration"), hn(Fm, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(HT, "onTransitionRun"), hn(kT, "onTransitionStart"), hn(GT, "onTransitionCancel"), hn(Jm, "onTransitionEnd"), Ra("onMouseEnter", ["mouseout", "mouseover"]), Ra("onMouseLeave", ["mouseout", "mouseover"]), Ra("onPointerEnter", ["pointerout", "pointerover"]), Ra("onPointerLeave", ["pointerout", "pointerover"]), Ki(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ki(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ki("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ki(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ki(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ki(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var bs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Nx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bs)
  );
  function xy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], r = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var h = a.length - 1; 0 <= h; h--) {
            var b = a[h], x = b.instance, j = b.currentTarget;
            if (b = b.listener, x !== u && r.isPropagationStopped())
              break t;
            u = b, r.currentTarget = j;
            try {
              u(r);
            } catch (k) {
              bo(k);
            }
            r.currentTarget = null, u = x;
          }
        else
          for (h = 0; h < a.length; h++) {
            if (b = a[h], x = b.instance, j = b.currentTarget, b = b.listener, x !== u && r.isPropagationStopped())
              break t;
            u = b, r.currentTarget = j;
            try {
              u(r);
            } catch (k) {
              bo(k);
            }
            r.currentTarget = null, u = x;
          }
      }
    }
  }
  function Nt(t, e) {
    var n = e[om];
    n === void 0 && (n = e[om] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Ey(e, t, 2, !1), n.add(a));
  }
  function Af(t, e, n) {
    var a = 0;
    e && (a |= 4), Ey(
      n,
      t,
      a,
      e
    );
  }
  var yr = "_reactListening" + Math.random().toString(36).slice(2);
  function wf(t) {
    if (!t[yr]) {
      t[yr] = !0, cm.forEach(function(n) {
        n !== "selectionchange" && (Nx.has(n) || Af(n, !1, t), Af(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[yr] || (e[yr] = !0, Af("selectionchange", !1, e));
    }
  }
  function Ey(t, e, n, a) {
    switch (dv(e)) {
      case 2:
        var r = EE;
        break;
      case 8:
        r = AE;
        break;
      default:
        r = Qf;
    }
    n = r.bind(
      null,
      e,
      n,
      t
    ), r = void 0, !Ru || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), a ? r !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
      passive: r
    }) : t.addEventListener(e, n, !1);
  }
  function Cf(t, e, n, a, r) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var h = a.tag;
        if (h === 3 || h === 4) {
          var b = a.stateNode.containerInfo;
          if (b === r) break;
          if (h === 4)
            for (h = a.return; h !== null; ) {
              var x = h.tag;
              if ((x === 3 || x === 4) && h.stateNode.containerInfo === r)
                return;
              h = h.return;
            }
          for (; b !== null; ) {
            if (h = Zi(b), h === null) return;
            if (x = h.tag, x === 5 || x === 6 || x === 26 || x === 27) {
              a = u = h;
              continue t;
            }
            b = b.parentNode;
          }
        }
        a = a.return;
      }
    Em(function() {
      var j = u, k = Ou(n), P = [];
      t: {
        var R = Im.get(t);
        if (R !== void 0) {
          var H = go, rt = t;
          switch (t) {
            case "keypress":
              if (mo(n) === 0) break t;
            case "keydown":
            case "keyup":
              H = pT;
              break;
            case "focusin":
              rt = "focus", H = Lu;
              break;
            case "focusout":
              rt = "blur", H = Lu;
              break;
            case "beforeblur":
            case "afterblur":
              H = Lu;
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
              H = Cm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = iT;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = ST;
              break;
            case Km:
            case Pm:
            case Fm:
              H = sT;
              break;
            case Jm:
              H = xT;
              break;
            case "scroll":
            case "scrollend":
              H = eT;
              break;
            case "wheel":
              H = AT;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = rT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Dm;
              break;
            case "submit":
              H = vT;
              break;
            case "toggle":
            case "beforetoggle":
              H = CT;
          }
          var pt = (e & 4) !== 0, Ct = !pt && (t === "scroll" || t === "scrollend"), V = pt ? R !== null ? R + "Capture" : null : R;
          pt = [];
          for (var M = j, U; M !== null; ) {
            var Z = M;
            if (U = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || U === null || V === null || (Z = Gl(M, V), Z != null && pt.push(
              Ss(M, Z, U)
            )), Ct) break;
            M = M.return;
          }
          0 < pt.length && (R = new H(
            R,
            rt,
            null,
            n,
            k
          ), P.push({ event: R, listeners: pt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (H = t === "mouseover" || t === "pointerover", R = t === "mouseout" || t === "pointerout", H && n !== zu && (rt = n.relatedTarget || n.fromElement) && (Zi(rt) || rt[za]))
            break t;
          (R || H) && (rt = k.window === k ? k : (H = k.ownerDocument) ? H.defaultView || H.parentWindow : window, R ? (H = n.relatedTarget || n.toElement, R = j, H = H ? Zi(H) : null, H !== null && (Ct = d(H), pt = H.tag, H !== Ct || pt !== 5 && pt !== 27 && pt !== 6) && (H = null)) : (R = null, H = j), R !== H && (pt = Cm, Z = "onMouseLeave", V = "onMouseEnter", M = "mouse", (t === "pointerout" || t === "pointerover") && (pt = Dm, Z = "onPointerLeave", V = "onPointerEnter", M = "pointer"), Ct = R == null ? rt : kl(R), U = H == null ? rt : kl(H), rt = new pt(
            Z,
            M + "leave",
            R,
            n,
            k
          ), rt.target = Ct, rt.relatedTarget = U, Z = null, Zi(k) === j && (pt = new pt(
            V,
            M + "enter",
            H,
            n,
            k
          ), pt.target = U, pt.relatedTarget = Ct, Z = pt), Ct = Z, pt = R && H ? K(
            R,
            H,
            Rx
          ) : null, R !== null && Ay(
            P,
            rt,
            R,
            pt,
            !1
          ), H !== null && Ct !== null && Ay(
            P,
            Ct,
            H,
            pt,
            !0
          )));
        }
        t: {
          if (R = j ? kl(j) : window, H = R.nodeName && R.nodeName.toLowerCase(), H === "select" || H === "input" && R.type === "file")
            var dt = Lm;
          else if (Vm(R))
            if (Bm)
              dt = LT;
            else {
              dt = VT;
              var _t = _T;
            }
          else
            H = R.nodeName, !H || H.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? j && Du(j.elementType) && (dt = Lm) : dt = jT;
          if (dt && (dt = dt(t, j))) {
            jm(
              P,
              dt,
              n,
              k
            );
            break t;
          }
          _t && _t(t, R, j);
        }
        switch (_t = j ? kl(j) : window, t) {
          case "focusin":
            (Vm(_t) || _t.contentEditable === "true") && (Ua = _t, qu = j, Fl = null);
            break;
          case "focusout":
            Fl = qu = Ua = null;
            break;
          case "mousedown":
            Xu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Xu = !1, Qm(P, n, k);
            break;
          case "selectionchange":
            if (UT) break;
          case "keydown":
          case "keyup":
            Qm(P, n, k);
        }
        var bt;
        if (Uu)
          t: {
            switch (t) {
              case "compositionstart":
                var Tt = "onCompositionStart";
                break t;
              case "compositionend":
                Tt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                Tt = "onCompositionUpdate";
                break t;
            }
            Tt = void 0;
          }
        else
          Ba ? Rm(t, n) && (Tt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (Tt = "onCompositionStart");
        Tt && (zm && n.locale !== "ko" && (Ba || Tt !== "onCompositionStart" ? Tt === "onCompositionEnd" && Ba && (bt = Am()) : (ci = k, _u = "value" in ci ? ci.value : ci.textContent, Ba = !0)), _t = vr(j, Tt), 0 < _t.length && (Tt = new Mm(
          Tt,
          t,
          null,
          n,
          k
        ), P.push({ event: Tt, listeners: _t }), bt ? Tt.data = bt : (bt = _m(n), bt !== null && (Tt.data = bt)))), (bt = DT ? zT(t, n) : OT(t, n)) && (Tt = vr(j, "onBeforeInput"), 0 < Tt.length && (_t = new Mm(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          k
        ), P.push({
          event: _t,
          listeners: Tt
        }), _t.data = bt)), Dx(
          P,
          t,
          j,
          n,
          k
        );
      }
      xy(P, e);
    });
  }
  function Ss(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function vr(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var r = t, u = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || u === null || (r = Gl(t, n), r != null && a.unshift(
        Ss(t, r, u)
      ), r = Gl(t, e), r != null && a.push(
        Ss(t, r, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Rx(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Ay(t, e, n, a, r) {
    for (var u = e._reactName, h = []; n !== null && n !== a; ) {
      var b = n, x = b.alternate, j = b.stateNode;
      if (b = b.tag, x !== null && x === a) break;
      b !== 5 && b !== 26 && b !== 27 || j === null || (x = j, r ? (j = Gl(n, u), j != null && h.unshift(
        Ss(n, j, x)
      )) : r || (j = Gl(n, u), j != null && h.push(
        Ss(n, j, x)
      ))), n = n.return;
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var _x = /\r\n?/g, Vx = /\u0000|\uFFFD/g;
  function wy(t) {
    return (typeof t == "string" ? t : "" + t).replace(_x, `
`).replace(Vx, "");
  }
  function Cy(t, e) {
    return e = wy(e), wy(t) === e;
  }
  function Xt(t, e, n, a, r, u) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || Va(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && Va(t, "" + a);
        else return;
        break;
      case "className":
        co(t, "class", a);
        break;
      case "tabIndex":
        co(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        co(t, n, a);
        break;
      case "style":
        Tm(t, a, u);
        return;
      case "data":
        if (e !== "object") {
          co(t, "data", a);
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
        a = fo(a), t.setAttribute(n, a);
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
          typeof u == "function" && (n === "formAction" ? (e !== "input" && Xt(t, e, "name", r.name, r, null), Xt(
            t,
            e,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Xt(
            t,
            e,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Xt(
            t,
            e,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Xt(t, e, "encType", r.encType, r, null), Xt(t, e, "method", r.method, r, null), Xt(t, e, "target", r.target, r, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = fo(a), t.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (t.onclick = Cn);
        return;
      case "onScroll":
        a != null && Nt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Nt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (r.children != null) throw Error(o(60));
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
        n = fo(a), t.setAttributeNS(
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
        Nt("beforetoggle", t), Nt("toggle", t), uo(t, "popover", a);
        break;
      case "xlinkActuate":
        qn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        qn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        qn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        qn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        qn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        qn(
          t,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        qn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        qn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        qn(
          t,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        uo(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = $S.get(n) || n, uo(t, n, a);
        else return;
    }
    Lt = !0;
  }
  function Mf(t, e, n, a, r, u) {
    switch (n) {
      case "style":
        Tm(t, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(o(61));
          if (n = a.__html, n != null) {
            if (r.children != null) throw Error(o(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Va(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Va(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Nt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Nt("scrollend", t);
        return;
      case "onClick":
        a != null && (t.onclick = Cn);
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
        if (!fm.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"), u = n.slice(2, r ? n.length - 7 : void 0), e = t[Le] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, r), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, a, r);
              break t;
            }
            Lt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : uo(t, n, a);
          }
        return;
    }
    Lt = !0;
  }
  function Ae(t, e, n) {
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
        Nt("error", t), Nt("load", t);
        var a = !1, r = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var h = n[u];
            if (h != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  r = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, e));
                default:
                  Xt(t, e, u, h, n, null);
              }
          }
        r && Xt(t, e, "srcSet", n.srcSet, n, null), a && Xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        Nt("invalid", t);
        var b = u = h = r = null, x = null, j = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var k = n[a];
            if (k != null)
              switch (a) {
                case "name":
                  r = k;
                  break;
                case "type":
                  h = k;
                  break;
                case "checked":
                  x = k;
                  break;
                case "defaultChecked":
                  j = k;
                  break;
                case "value":
                  u = k;
                  break;
                case "defaultValue":
                  b = k;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (k != null)
                    throw Error(o(137, e));
                  break;
                default:
                  Xt(t, e, a, k, n, null);
              }
          }
        ym(
          t,
          u,
          b,
          x,
          j,
          h,
          r,
          !1
        );
        return;
      case "select":
        Nt("invalid", t), a = h = u = null;
        for (r in n)
          if (n.hasOwnProperty(r) && (b = n[r], b != null))
            switch (r) {
              case "value":
                u = b;
                break;
              case "defaultValue":
                h = b;
                break;
              case "multiple":
                a = b;
              default:
                Xt(t, e, r, b, n, null);
            }
        e = u, n = h, t.multiple = !!a, e != null ? _a(t, !!a, e, !1) : n != null && _a(t, !!a, n, !0);
        return;
      case "textarea":
        Nt("invalid", t), u = r = a = null;
        for (h in n)
          if (n.hasOwnProperty(h) && (b = n[h], b != null))
            switch (h) {
              case "value":
                a = b;
                break;
              case "defaultValue":
                r = b;
                break;
              case "children":
                u = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(o(91));
                break;
              default:
                Xt(t, e, h, b, n, null);
            }
        bm(t, a, r, u);
        return;
      case "option":
        for (x in n)
          n.hasOwnProperty(x) && (a = n[x], a != null) && (x === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Xt(t, e, x, a, n, null));
        return;
      case "dialog":
        Nt("beforetoggle", t), Nt("toggle", t), Nt("cancel", t), Nt("close", t);
        break;
      case "iframe":
      case "object":
        Nt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < bs.length; a++)
          Nt(bs[a], t);
        break;
      case "image":
        Nt("error", t), Nt("load", t);
        break;
      case "details":
        Nt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Nt("error", t), Nt("load", t);
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
        for (j in n)
          if (n.hasOwnProperty(j) && (a = n[j], a != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Xt(t, e, j, a, n, null);
            }
        return;
      default:
        if (Du(e)) {
          for (k in n)
            n.hasOwnProperty(k) && (a = n[k], a !== void 0 && Mf(
              t,
              e,
              k,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (b in n)
      n.hasOwnProperty(b) && (a = n[b], a != null && Xt(t, e, b, a, n, null));
  }
  var jx = {};
  function Lx(t, e, n, a) {
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
        var r = null, u = null, h = null, b = null, x = null, j = null, k = null;
        for (H in n) {
          var P = n[H];
          if (n.hasOwnProperty(H) && P != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = P;
              default:
                a.hasOwnProperty(H) || Xt(t, e, H, null, a, P);
            }
        }
        for (var R in a) {
          var H = a[R];
          if (P = n[R], a.hasOwnProperty(R) && (H != null || P != null))
            switch (R) {
              case "type":
                H !== P && (Lt = !0), u = H;
                break;
              case "name":
                H !== P && (Lt = !0), r = H;
                break;
              case "checked":
                H !== P && (Lt = !0), j = H;
                break;
              case "defaultChecked":
                H !== P && (Lt = !0), k = H;
                break;
              case "value":
                H !== P && (Lt = !0), h = H;
                break;
              case "defaultValue":
                H !== P && (Lt = !0), b = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(o(137, e));
                break;
              default:
                H !== P && Xt(
                  t,
                  e,
                  R,
                  H,
                  a,
                  P
                );
            }
        }
        Cu(
          t,
          h,
          b,
          x,
          j,
          k,
          u,
          r
        );
        return;
      case "select":
        H = h = b = R = null;
        for (u in n)
          if (x = n[u], n.hasOwnProperty(u) && x != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                H = x;
              default:
                a.hasOwnProperty(u) || Xt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  x
                );
            }
        for (r in a)
          if (u = a[r], x = n[r], a.hasOwnProperty(r) && (u != null || x != null))
            switch (r) {
              case "value":
                u !== x && (Lt = !0), R = u;
                break;
              case "defaultValue":
                u !== x && (Lt = !0), b = u;
                break;
              case "multiple":
                u !== x && (Lt = !0), h = u;
              default:
                u !== x && Xt(
                  t,
                  e,
                  r,
                  u,
                  a,
                  x
                );
            }
        e = b, n = h, a = H, R != null ? _a(t, !!n, R, !1) : !!a != !!n && (e != null ? _a(t, !!n, e, !0) : _a(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        H = R = null;
        for (b in n)
          if (r = n[b], n.hasOwnProperty(b) && r != null && !a.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(t, e, b, null, a, r);
            }
        for (h in a)
          if (r = a[h], u = n[h], a.hasOwnProperty(h) && (r != null || u != null))
            switch (h) {
              case "value":
                r !== u && (Lt = !0), R = r;
                break;
              case "defaultValue":
                r !== u && (Lt = !0), H = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                r !== u && Xt(t, e, h, r, a, u);
            }
        vm(t, R, H);
        return;
      case "option":
        for (var rt in n)
          R = n[rt], n.hasOwnProperty(rt) && R != null && !a.hasOwnProperty(rt) && (rt === "selected" ? t.selected = !1 : Xt(
            t,
            e,
            rt,
            null,
            a,
            R
          ));
        for (x in a)
          R = a[x], H = n[x], a.hasOwnProperty(x) && R !== H && (R != null || H != null) && (x === "selected" ? (R !== H && (Lt = !0), t.selected = R && typeof R != "function" && typeof R != "symbol") : Xt(
            t,
            e,
            x,
            R,
            a,
            H
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
        for (var pt in n)
          R = n[pt], n.hasOwnProperty(pt) && R != null && !a.hasOwnProperty(pt) && Xt(t, e, pt, null, a, R);
        for (j in a)
          if (R = a[j], H = n[j], a.hasOwnProperty(j) && R !== H && (R != null || H != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(o(137, e));
                break;
              default:
                Xt(
                  t,
                  e,
                  j,
                  R,
                  a,
                  H
                );
            }
        return;
      default:
        if (Du(e)) {
          for (var Ct in n)
            R = n[Ct], n.hasOwnProperty(Ct) && R !== void 0 && !a.hasOwnProperty(Ct) && Mf(
              t,
              e,
              Ct,
              void 0,
              a,
              R
            );
          for (k in a)
            R = a[k], H = n[k], !a.hasOwnProperty(k) || R === H || R === void 0 && H === void 0 || Mf(
              t,
              e,
              k,
              R,
              a,
              H
            );
          return;
        }
    }
    for (var V in n)
      R = n[V], n.hasOwnProperty(V) && R != null && !a.hasOwnProperty(V) && Xt(t, e, V, null, a, R);
    for (P in a)
      R = a[P], H = n[P], !a.hasOwnProperty(P) || R === H || R == null && H == null || Xt(t, e, P, R, a, H);
  }
  function My(t) {
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
  function Bx() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var r = n[a], u = r.transferSize, h = r.initiatorType, b = r.duration;
        if (u && b && My(h)) {
          for (h = 0, b = r.responseEnd, a += 1; a < n.length; a++) {
            var x = n[a], j = x.startTime;
            if (j > b) break;
            var k = x.transferSize, P = x.initiatorType;
            k && My(P) && (x = x.responseEnd, h += k * (x < b ? 1 : (b - j) / (x - j)));
          }
          if (--a, e += 8 * (u + h) / (r.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Df = null, zf = null;
  function Ts(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Dy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function zy(t, e) {
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
  function Oy(t, e, n, a) {
    return n = Ts(
      n
    ).createElement(t), n[be] = a, n[Le] = e, Ae(n, t, e), pe(n), n;
  }
  function Of(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Nf = null;
  function Ux() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Nf ? !1 : (Nf = t, !0) : (Nf = null, !1);
  }
  var Rf = typeof setTimeout == "function" ? setTimeout : void 0, Hx = typeof clearTimeout == "function" ? clearTimeout : void 0, Ny = typeof Promise == "function" ? Promise : void 0, Ry = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Rf, kx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ny < "u" ? function(t) {
    return Ny.resolve(null).then(t).catch(Gx);
  } : Rf;
  function Gx(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Oi(t) {
    return t === "head";
  }
  function _y(t, e) {
    var n = e, a = 0;
    do {
      var r = n.nextSibling;
      if (t.removeChild(n), r && r.nodeType === 8)
        if (n = r.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(r), yl(e);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          kf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, kf(n);
          for (var u = n.firstChild; u; ) {
            var h = u.nextSibling, b = u.nodeName;
            u[Hl] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = h;
          }
        } else
          n === "body" && kf(t.ownerDocument.body);
      n = r;
    } while (n);
    yl(e);
  }
  function Vy(t, e) {
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
  function jy(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var a = 1;
      else
        for (var r = a = 0; r < e.length; r++) {
          var u = e[r];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function Ly(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function Yx(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function _f(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return Yx(e, n, t);
  }
  function qx(t) {
    return t.documentElement.clientHeight;
  }
  function Xx(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Qx(t, e, n, a, r, u, h, b, x) {
    var j = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var k = j.startViewTransition({
        update: function() {
          var R = j.defaultView, H = R.navigation && R.navigation.transition, rt = j.fonts.status;
          a();
          var pt = [];
          if (rt === "loaded" && (qx(j), j.fonts.status === "loading" && pt.push(j.fonts.ready)), rt = pt.length, t !== null)
            for (var Ct = t.suspenseyImages, V = 0, M = 0; M < Ct.length; M++) {
              var U = Ct[M];
              if (!U.complete) {
                var Z = U.getBoundingClientRect();
                if (0 < Z.bottom && 0 < Z.right && Z.top < R.innerHeight && Z.left < R.innerWidth) {
                  if (V += iv(U), V > Tr) {
                    pt.length = rt;
                    break;
                  }
                  U = new Promise(
                    Xx.bind(U)
                  ), pt.push(U);
                }
              }
            }
          if (0 < pt.length)
            return R = Promise.race([
              Promise.all(pt),
              new Promise(function(dt) {
                return setTimeout(dt, 500);
              })
            ]).then(r, r), (H ? Promise.allSettled([H.finished, R]) : R).then(u, u);
          if (r(), H)
            return H.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      j.__reactViewTransition = k;
      var P = [];
      return k.ready.then(
        function() {
          for (var R = j.documentElement.getAnimations({
            subtree: !0
          }), H = 0; H < R.length; H++) {
            var rt = R[H], pt = rt.effect, Ct = pt.pseudoElement;
            if (Ct != null && Ct.startsWith("::view-transition")) {
              P.push(rt), rt = pt.getKeyframes();
              for (var V = Ct = void 0, M = !0, U = 0; U < rt.length; U++) {
                var Z = rt[U], dt = Z.width;
                if (Ct === void 0) Ct = dt;
                else if (Ct !== dt) {
                  M = !1;
                  break;
                }
                if (dt = Z.height, V === void 0) V = dt;
                else if (V !== dt) {
                  M = !1;
                  break;
                }
                delete Z.width, delete Z.height, Z.transform === "none" && delete Z.transform;
              }
              M && Ct !== void 0 && V !== void 0 && (pt.setKeyframes(rt), M = getComputedStyle(
                pt.target,
                pt.pseudoElement
              ), M.width !== Ct || M.height !== V) && (M = rt[0], M.width = Ct, M.height = V, M = rt[rt.length - 1], M.width = Ct, M.height = V, pt.setKeyframes(rt));
            }
          }
          h();
        },
        function(R) {
          j.__reactViewTransition === k && (j.__reactViewTransition = null);
          try {
            typeof R == "object" && R !== null && R.name === "InvalidStateError" && (R.message === "View transition was skipped because document visibility state is hidden." || R.message === "Skipping view transition because document visibility state has become hidden." || R.message === "Skipping view transition because viewport size changed." || R.message === "Transition was aborted because of invalid state") && (R = null), R !== null && x(R);
          } finally {
            a(), r(), h();
          }
        }
      ), k.finished.finally(function() {
        for (var R = 0; R < P.length; R++)
          P[R].cancel();
        j.__reactViewTransition === k && (j.__reactViewTransition = null), b();
      }), k;
    } catch {
      return a(), r(), h(), null;
    }
  }
  function ha(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  ha.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : N({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, ha.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], r = 0; r < n.length; r++) {
      var u = n[r].effect;
      u !== null && u.target === t && u.pseudoElement === e && a.push(n[r]);
    }
    return a;
  }, ha.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function By(t) {
    return {
      name: t,
      group: new ha("group", t),
      imagePair: new ha("image-pair", t),
      old: new ha("old", t),
      new: new ha("new", t)
    };
  }
  function Ie(t) {
    this._fragmentFiber = t, this._observers = this._eventListeners = null;
  }
  Ie.prototype.addEventListener = function(t, e, n) {
    var a = null, r = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Hy(u, t, e, n) === -1) {
        var h = this, b = e;
        n != null && typeof n != "boolean" && n.once === !0 && (b = function(x) {
          h.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, x) : e.handleEvent(x);
        }), a !== null && (r = h.removeEventListener.bind(
          h,
          t,
          e,
          n
        ), a.addEventListener("abort", r, { once: !0 }), r = a.removeEventListener.bind(a, "abort", r)), a = fl(n), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: b,
          cleanup: r
        }), y(
          this._fragmentFiber.child,
          !1,
          Zx,
          t,
          b,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function Zx(t, e, n, a) {
    return E(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  Ie.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = Hy(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var r = a[e];
      n = r.attachedListener;
      var u = r.cleanup;
      r = fl(r.optionsOrUseCapture), y(
        this._fragmentFiber.child,
        !1,
        Kx,
        t,
        n,
        r
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function Kx(t, e, n, a) {
    return E(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function fl(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Uy(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Hy(t, e, n, a) {
    if (t.length === 0) return -1;
    a = Uy(a);
    for (var r = 0; r < t.length; r++) {
      var u = t[r];
      if (u.type === e && u.listener === n && Uy(u.optionsOrUseCapture) === a)
        return r;
    }
    return -1;
  }
  Ie.prototype.dispatchEvent = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = E(e);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !t.bubbles) {
      var a = e.nodeType === 9 ? e.createComment("") : document.createTextNode("");
      if (n)
        for (var r = 0; r < n.length; r++) {
          var u = n[r];
          a.addEventListener(
            u.type,
            u.attachedListener,
            fl(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (r = 0; r < n.length; r++)
          u = n[r], a.removeEventListener(
            u.type,
            u.attachedListener,
            fl(u.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, Ie.prototype.focus = function(t) {
    y(
      this._fragmentFiber.child,
      !0,
      ky,
      t,
      void 0,
      void 0
    );
  };
  function ky(t, e) {
    return t.tag === 6 ? !1 : (t = E(t), lE(t, e));
  }
  Ie.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      Vf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !ky(e[n], t); n--) ;
  };
  function Vf(t, e) {
    return e.push(t), !1;
  }
  Ie.prototype.blur = function() {
    var t = S(
      this._fragmentFiber
    );
    t !== null && (t = E(t), t = Ts(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      Px,
      t,
      void 0,
      void 0
    ));
  };
  function Px(t, e) {
    return t.tag === 6 ? !1 : (t = E(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ie.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      Fx,
      t,
      void 0,
      void 0
    );
  };
  function Fx(t, e) {
    return t.tag === 6 || (t = E(t), e.observe(t)), !1;
  }
  Ie.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        Jx,
        t,
        void 0,
        void 0
      );
      for (var n = e = 0; n < vn.length; n++) {
        var a = vn[n];
        a.fragmentInstance === this && a.observer === t ? t.unobserve(a.instance) : vn[e++] = a;
      }
      vn.length = e;
    }
  };
  function Jx(t, e) {
    return t.tag === 6 || (t = E(t), e.unobserve(t)), !1;
  }
  var vn = [], jf = !1;
  function Ix(t, e, n) {
    vn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), jf || (jf = !0, sE(function() {
      jf = !1;
      var a = vn;
      vn = [];
      for (var r = 0; r < a.length; r++) {
        var u = a[r];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Ie.prototype.getClientRects = function() {
    var t = [];
    return y(
      this._fragmentFiber.child,
      !1,
      Wx,
      t,
      void 0,
      void 0
    ), t;
  };
  function Wx(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = E(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ie.prototype.getRootNode = function(t) {
    var e = S(
      this._fragmentFiber
    );
    return e === null ? this : E(e).getRootNode(t);
  }, Ie.prototype.compareDocumentPosition = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    y(
      this._fragmentFiber.child,
      !1,
      Vf,
      n,
      void 0,
      void 0
    );
    var a = E(e);
    if (n.length === 0) {
      if (n = a, A(this._fragmentFiber)) {
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
      var r = a = n.compareDocumentPosition(t);
      return n === t ? r = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = T(e)[1], n === null ? r = Node.DOCUMENT_POSITION_PRECEDING : (t = E(n).compareDocumentPosition(
        t
      ), r = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), r |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = E(n[0]), r = E(n[n.length - 1]);
    var u = A(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = e.compareDocumentPosition(t), b = r.compareDocumentPosition(t), x = h & Node.DOCUMENT_POSITION_CONTAINED_BY || b & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return b = a && u && h & Node.DOCUMENT_POSITION_FOLLOWING && b & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && r === t || x || b ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && r === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || $x(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function $x(t, e, n, a, r) {
    var u = Zi(r);
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
        return u = r.ownerDocument, r === u || r === u.documentElement || r === u.body;
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === n) && (e = K(
      n,
      u,
      Q
    ), e === null ? e = !1 : (y(
      e,
      !0,
      G,
      u,
      n
    ), u = z, z = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === a) && (e = K(
      a,
      u,
      Q
    ), e === null ? e = !1 : (y(
      e,
      !0,
      _,
      u,
      a
    ), u = z, B = z = null, e = u !== null)), e) : !1;
  }
  function Gy(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Ie.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(o(566));
    var e = [];
    y(
      this._fragmentFiber.child,
      !1,
      Vf,
      e,
      void 0,
      void 0
    );
    var n = t !== !1;
    if (e.length === 0) {
      var a = T(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || S(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        t = E(a), Gy(t, n);
        return;
      }
      if (a = E(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var r = e[a];
      r.tag === 6 ? (r = E(r), Gy(r, n)) : E(r).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function tE(t, e) {
    return t = E(t), Yy(t, e), !1;
  }
  function Yy(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function qy(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var r = n[a];
        t.addEventListener(
          r.type,
          r.attachedListener,
          fl(r.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      for (var h = 0, b = 0; b < vn.length; b++) {
        var x = vn[b];
        (x.fragmentInstance !== e || x.observer !== u || x.instance !== t) && (vn[h++] = x);
      }
      vn.length = h, u.observe(t);
    }), Yy(t, e));
  }
  function eE(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var r = n[a];
        t.removeEventListener(
          r.type,
          r.attachedListener,
          fl(r.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? Ix(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Lf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lf(n), ro(n);
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
  function nE(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var r = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Hl])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== r.rel || t.getAttribute("href") !== (r.href == null || r.href === "" ? null : r.href) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin) || t.getAttribute("title") !== (r.title == null ? null : r.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (r.src == null ? null : r.src) || t.getAttribute("type") !== (r.type == null ? null : r.type) || t.getAttribute("crossorigin") !== (r.crossOrigin == null ? null : r.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = r.name == null ? null : "" + r.name;
        if (r.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = cn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function iE(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = cn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Xy(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = cn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Bf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Uf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function aE(t, e) {
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
  function cn(t) {
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
  var Hf = null;
  function Qy(t) {
    t = t.nextSibling;
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0)
            return cn(t.nextSibling);
          e--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function Zy(t) {
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
  function lE(t, e) {
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
  function sE(t) {
    Ry(function() {
      Ry(function(e) {
        return t(e);
      });
    });
  }
  function Ky(t, e, n) {
    switch (e = Ts(n), t) {
      case "html":
        if (t = e.documentElement, !t) throw Error(o(452));
        return t;
      case "head":
        if (t = e.head, !t) throw Error(o(453));
        return t;
      case "body":
        if (t = e.body, !t) throw Error(o(454));
        return t;
      default:
        throw Error(o(451));
    }
  }
  function Py(t, e, n) {
    for (var a in n) {
      var r = n[a];
      n.hasOwnProperty(a) && r != null && Xt(t, e, a, null, jx, r);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Cn && (t.onclick = null), ro(t);
  }
  function kf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ro(t);
  }
  var fn = /* @__PURE__ */ new Map(), Fy = /* @__PURE__ */ new Set();
  function xs(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ni = $.d;
  $.d = {
    f: oE,
    r: rE,
    D: uE,
    C: cE,
    L: fE,
    m: dE,
    X: mE,
    S: hE,
    M: pE
  };
  function oE() {
    var t = ni.f(), e = dr();
    return t || e;
  }
  function rE(t) {
    var e = Oa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Ip(e) : ni.r(t);
  }
  var dl = typeof document > "u" ? null : document;
  function Jy(t, e, n) {
    var a = dl;
    if (a && typeof e == "string" && e) {
      var r = nn(e);
      r = 'link[rel="' + t + '"][href="' + r + '"]', typeof n == "string" && (r += '[crossorigin="' + n + '"]'), Fy.has(r) || (Fy.add(r), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(r) === null && (e = a.createElement("link"), Ae(e, "link", t), pe(e), a.head.appendChild(e)));
    }
  }
  function uE(t) {
    ni.D(t), Jy("dns-prefetch", t, null);
  }
  function cE(t, e) {
    ni.C(t, e), Jy("preconnect", t, e);
  }
  function fE(t, e, n) {
    ni.L(t, e, n);
    var a = dl;
    if (a && t && e) {
      var r = 'link[rel="preload"][as="' + nn(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (r += '[imagesrcset="' + nn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (r += '[imagesizes="' + nn(
        n.imageSizes
      ) + '"]')) : r += '[href="' + nn(t) + '"]';
      var u = r;
      switch (e) {
        case "style":
          u = hl(t);
          break;
        case "script":
          u = ml(t);
      }
      if (!(fn.has(u) || (t = N(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), fn.set(u, t), a.querySelector(r) !== null || e === "style" && a.querySelector(Es(u)) || e === "script" && a.querySelector(As(u))))) {
        var h = a.createElement("link");
        Ae(h, "link", t), e === "style" && (h[oo] = !0, h.onload = h.onerror = function() {
          um(h);
        }), pe(h), a.head.appendChild(h);
      }
    }
  }
  function dE(t, e) {
    ni.m(t, e);
    var n = dl;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", r = 'link[rel="modulepreload"][as="' + nn(a) + '"][href="' + nn(t) + '"]', u = r;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = ml(t);
      }
      if (!fn.has(u) && (t = N({ rel: "modulepreload", href: t }, e), fn.set(u, t), n.querySelector(r) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(As(u)))
              return;
        }
        a = n.createElement("link"), Ae(a, "link", t), pe(a), n.head.appendChild(a);
      }
    }
  }
  function hE(t, e, n) {
    ni.S(t, e, n);
    var a = dl;
    if (a && t) {
      var r = Na(a).hoistableStyles, u = hl(t);
      e = e || "default";
      var h = r.get(u);
      if (!h) {
        var b = { loading: 0, preload: null };
        if (h = a.querySelector(
          Es(u)
        ))
          b.loading = 5;
        else {
          t = N(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = fn.get(u)) && Gf(t, n);
          var x = h = a.createElement("link");
          pe(x), Ae(x, "link", t), x._p = new Promise(function(j, k) {
            x.onload = j, x.onerror = k;
          }), x.addEventListener("load", function() {
            b.loading |= 1;
          }), x.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, br(h, e, a);
        }
        h = {
          type: "stylesheet",
          instance: h,
          count: 1,
          state: b
        }, r.set(u, h);
      }
    }
  }
  function mE(t, e) {
    ni.X(t, e);
    var n = dl;
    if (n && t) {
      var a = Na(n).hoistableScripts, r = ml(t), u = a.get(r);
      u || (u = n.querySelector(As(r)), u || (t = N({ src: t, async: !0 }, e), (e = fn.get(r)) && Yf(t, e), u = n.createElement("script"), pe(u), Ae(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(r, u));
    }
  }
  function pE(t, e) {
    ni.M(t, e);
    var n = dl;
    if (n && t) {
      var a = Na(n).hoistableScripts, r = ml(t), u = a.get(r);
      u || (u = n.querySelector(As(r)), u || (t = N({ src: t, async: !0, type: "module" }, e), (e = fn.get(r)) && Yf(t, e), u = n.createElement("script"), pe(u), Ae(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(r, u));
    }
  }
  function Iy(t, e, n, a) {
    var r = (r = ae.current) ? xs(r) : null;
    if (!r) throw Error(o(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = hl(n.href), e = Na(
          r
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = hl(n.href);
          var u = Na(
            r
          ).hoistableStyles, h = u.get(t);
          if (h || (r = r.ownerDocument || r, h = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, h), (u = r.querySelector(
            Es(t)
          )) ? u._p || (h.instance = u, h.state.loading = 5) : (u = fn.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, fn.set(t, u)), gE(
            r,
            t,
            u,
            h.state
          ))), e && a === null)
            throw Error(o(528, ""));
          return h;
        }
        if (e && a !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = ml(n), e = Na(
          r
        ).hoistableScripts, a = e.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, t));
    }
  }
  function hl(t) {
    return 'href="' + nn(t) + '"';
  }
  function Es(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Wy(t) {
    return N({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function gE(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[oo] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[oo] = !0, e.onload = e.onerror = um.bind(null, e), Ae(e, "link", n), pe(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function ml(t) {
    return '[src="' + nn(t) + '"]';
  }
  function As(t) {
    return "script[async]" + t;
  }
  function $y(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + nn(n.href) + '"]'
          );
          if (a)
            return e.instance = a, pe(a), a;
          var r = N({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), pe(a), Ae(a, "style", r), br(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          r = hl(n.href);
          var u = t.querySelector(
            Es(r)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, pe(u), u;
          a = Wy(n), (r = fn.get(r)) && Gf(a, r), u = (t.ownerDocument || t).createElement("link"), pe(u);
          var h = u;
          return h._p = new Promise(function(b, x) {
            h.onload = b, h.onerror = x;
          }), Ae(u, "link", a), e.state.loading |= 4, br(u, n.precedence, t), e.instance = u;
        case "script":
          return u = ml(n.src), (r = t.querySelector(
            As(u)
          )) ? (e.instance = r, pe(r), r) : (a = n, (r = fn.get(u)) && (a = N({}, n), Yf(a, r)), t = t.ownerDocument || t, r = t.createElement("script"), pe(r), Ae(r, "link", a), t.head.appendChild(r), e.instance = r);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, br(a, n.precedence, t));
    return e.instance;
  }
  function br(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = a.length ? a[a.length - 1] : null, u = r, h = 0; h < a.length; h++) {
      var b = a[h];
      if (b.dataset.precedence === e) u = b;
      else if (u !== r) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Gf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Yf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Sr = null;
  function tv(t, e, n) {
    if (Sr === null) {
      var a = /* @__PURE__ */ new Map(), r = Sr = /* @__PURE__ */ new Map();
      r.set(n, a);
    } else
      r = Sr, a = r.get(n), a || (a = /* @__PURE__ */ new Map(), r.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var u = n[r];
      if (!(u[Hl] || u[be] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = u.getAttribute(e) || "";
        h = t + h;
        var b = a.get(h);
        b ? b.push(u) : a.set(h, [u]);
      }
    }
    return a;
  }
  function qf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function yE(t, e, n) {
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
  function ev(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function nv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function iv(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function av(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += iv(e), t.suspenseyImages.push(e)), t = SE.bind(t), e.decode().then(t, t));
  }
  function vE(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = hl(a.href), u = e.querySelector(
          Es(r)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ws.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, pe(u);
          return;
        }
        u = e.ownerDocument || e, a = Wy(a), (r = fn.get(r)) && Gf(a, r), u = u.createElement("link"), pe(u);
        var h = u;
        h._p = new Promise(function(b, x) {
          h.onload = b, h.onerror = x;
        }), Ae(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ws.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Tr = 0;
  function bE(t, e) {
    return t.stylesheets && t.count === 0 && Er(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Er(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Tr === 0 && (Tr = 62500 * Bx());
      var r = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Er(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Tr ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(r);
      };
    } : null;
  }
  function lv(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Er(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function ws() {
    this.count--, lv(this);
  }
  function SE() {
    this.imgCount--, lv(this);
  }
  var xr = null;
  function Er(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, xr = /* @__PURE__ */ new Map(), e.forEach(TE, t), xr = null, ws.call(t));
  }
  function TE(t, e) {
    if (!(e.state.loading & 4)) {
      var n = xr.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), xr.set(t, n);
        for (var r = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < r.length; u++) {
          var h = r[u];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), a = h);
        }
        a && n.set(null, a);
      }
      r = e.instance, h = r.getAttribute("data-precedence"), u = n.get(h) || a, u === a && n.set(null, r), n.set(h, r), this.count++, a = ws.bind(this), r.addEventListener("load", a), r.addEventListener("error", a), u ? u.parentNode.insertBefore(r, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(r, t.firstChild)), e.state.loading |= 4;
    }
  }
  var pl = {
    $$typeof: nt,
    Provider: null,
    Consumer: null,
    _currentValue: xt,
    _currentValue2: xt,
    _threadCount: 0
  };
  function xE(t, e, n, a, r, u, h, b, x) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = xu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = xu(0), this.hiddenUpdates = xu(null), this.identifierPrefix = a, this.onUncaughtError = r, this.onCaughtError = u, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function sv(t, e, n, a, r, u, h, b, x, j, k, P) {
    return t = new xE(
      t,
      e,
      n,
      h,
      x,
      j,
      k,
      P,
      b
    ), e = 1, u === !0 && (e |= 24), u = Be(3, null, null, e), t.current = u, u.stateNode = t, e = ic(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, oc(u), t;
  }
  function ov(t) {
    return t ? (t = Ga, t) : Ga;
  }
  function rv(t, e, n, a, r, u) {
    r = ov(r), a.context === null ? a.context = r : a.pendingContext = r, a = vi(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = bi(t, a, e), n !== null && (Ge(n, t, e), ns(n, t, e));
  }
  function uv(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Xf(t, e) {
    uv(t, e), (t = t.alternate) && uv(t, e);
  }
  function cv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ji(t, 67108864);
      e !== null && Ge(e, t, 67108864), Xf(t, 67108864);
    }
  }
  function fv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Je();
      e = Eu(e);
      var n = Ji(t, e);
      n !== null && Ge(n, t, e), Xf(t, e);
    }
  }
  var gl = !0;
  function EE(t, e, n, a) {
    var r = st.T;
    st.T = null;
    var u = $.p;
    try {
      $.p = 2, Qf(t, e, n, a);
    } finally {
      $.p = u, st.T = r;
    }
  }
  function AE(t, e, n, a) {
    var r = st.T;
    st.T = null;
    var u = $.p;
    try {
      $.p = 8, Qf(t, e, n, a);
    } finally {
      $.p = u, st.T = r;
    }
  }
  function Qf(t, e, n, a) {
    if (gl) {
      var r = Zf(a);
      if (r === null)
        Cf(
          t,
          e,
          a,
          Ar,
          n
        ), hv(t, a);
      else if (CE(
        r,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (hv(t, a), e & 4 && -1 < wE.indexOf(t)) {
        for (; r !== null; ) {
          var u = Oa(r);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var h = Qi(u.pendingLanes);
                  if (h !== 0) {
                    var b = u;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; h; ) {
                      var x = 1 << 31 - qe(h);
                      b.entanglements[1] |= x, h &= ~x;
                    }
                    Ln(u), (Ht & 6) === 0 && (ur = ze() + 500, vs(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = Ji(u, 2), b !== null && Ge(b, u, 2), dr(), Xf(u, 2);
            }
          if (u = Zf(a), u === null && Cf(
            t,
            e,
            a,
            Ar,
            n
          ), u === r) break;
          r = u;
        }
        r !== null && a.stopPropagation();
      } else
        Cf(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Zf(t) {
    return t = Ou(t), Kf(t);
  }
  var Ar = null;
  function Kf(t) {
    if (Ar = null, t = Zi(t), t !== null) {
      var e = d(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (t = f(e), t !== null) return t;
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
    return Ar = t, null;
  }
  function dv(t) {
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
        switch (bu()) {
          case _l:
            return 2;
          case Vl:
            return 8;
          case Xi:
          case Su:
            return 32;
          case jl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Pf = !1, Ni = null, Ri = null, _i = null, Cs = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Vi = [], wE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function hv(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ni = null;
        break;
      case "dragenter":
      case "dragleave":
        Ri = null;
        break;
      case "mouseover":
      case "mouseout":
        _i = null;
        break;
      case "pointerover":
      case "pointerout":
        Cs.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ms.delete(e.pointerId);
    }
  }
  function Ds(t, e, n, a, r, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [r]
    }, e !== null && (e = Oa(e), e !== null && cv(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t);
  }
  function CE(t, e, n, a, r) {
    switch (e) {
      case "focusin":
        return Ni = Ds(
          Ni,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "dragenter":
        return Ri = Ds(
          Ri,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "mouseover":
        return _i = Ds(
          _i,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "pointerover":
        var u = r.pointerId;
        return Cs.set(
          u,
          Ds(
            Cs.get(u) || null,
            t,
            e,
            n,
            a,
            r
          )
        ), !0;
      case "gotpointercapture":
        return u = r.pointerId, Ms.set(
          u,
          Ds(
            Ms.get(u) || null,
            t,
            e,
            n,
            a,
            r
          )
        ), !0;
    }
    return !1;
  }
  function mv(t) {
    var e = Zi(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = f(n), e !== null) {
            t.blockedOn = e, sm(t.priority, function() {
              fv(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, sm(t.priority, function() {
              fv(n);
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
  function wr(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Zf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        zu = a, n.target.dispatchEvent(a), zu = null;
      } else
        return e = Oa(n), e !== null && cv(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function pv(t, e, n) {
    wr(t) && n.delete(e);
  }
  function ME() {
    Pf = !1, Ni !== null && wr(Ni) && (Ni = null), Ri !== null && wr(Ri) && (Ri = null), _i !== null && wr(_i) && (_i = null), Cs.forEach(pv), Ms.forEach(pv);
  }
  function Cr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Pf || (Pf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      ME
    )));
  }
  var Mr = null;
  function gv(t) {
    Mr !== t && (Mr = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Mr === t && (Mr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], r = t[e + 2];
          if (typeof a != "function") {
            if (Kf(a || n) === null)
              continue;
            break;
          }
          var u = Oa(n);
          u !== null && (t.splice(e, 3), e -= 3, Dc(
            u,
            {
              pending: !0,
              data: r,
              method: n.method,
              action: a
            },
            a,
            r
          ));
        }
      }
    ));
  }
  function yl(t) {
    function e(x) {
      return Cr(x, t);
    }
    Ni !== null && Cr(Ni, t), Ri !== null && Cr(Ri, t), _i !== null && Cr(_i, t), Cs.forEach(e), Ms.forEach(e);
    for (var n = 0; n < Vi.length; n++) {
      var a = Vi[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Vi.length && (n = Vi[0], n.blockedOn === null); )
      mv(n), n.blockedOn === null && Vi.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var r = n[a], u = n[a + 1], h = r[Le] || null;
        if (typeof u == "function")
          h || gv(n);
        else if (h) {
          var b = null;
          if (u && u.hasAttribute("formAction")) {
            if (r = u, h = u[Le] || null)
              b = h.formAction;
            else if (Kf(r) !== null) continue;
          } else b = h.action;
          typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), gv(n);
        }
      }
  }
  function yv() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(h) {
            return r = h;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      r !== null && (r(), r = null), a || setTimeout(n, 20);
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
      var a = !1, r = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), r !== null && (r(), r = null);
      };
    }
  }
  function Ff(t) {
    this._internalRoot = t;
  }
  Dr.prototype.render = Ff.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var n = e.current, a = Je();
    rv(n, a, t, e, null, null);
  }, Dr.prototype.unmount = Ff.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      rv(t.current, 2, null, t, null, null), dr(), e[za] = null;
    }
  };
  function Dr(t) {
    this._internalRoot = t;
  }
  Dr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = lm();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Vi.length && e !== 0 && e < Vi[n].priority; n++) ;
      Vi.splice(n, 0, t), n === 0 && mv(t);
    }
  };
  var vv = l.version;
  if (vv !== "19.3.0")
    throw Error(
      o(
        527,
        vv,
        "19.3.0"
      )
    );
  $.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = g(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var DE = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: st,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zr.isDisabled && zr.supportsFiber)
      try {
        Ll = zr.inject(
          DE
        ), Ye = zr;
      } catch {
      }
  }
  return Os.createRoot = function(t, e) {
    if (!c(t)) throw Error(o(299));
    var n = !1, a = "", r = og, u = rg, h = ug;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (r = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError)), e = sv(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      r,
      u,
      h,
      yv
    ), t[za] = e.current, wf(t), new Ff(e);
  }, Os.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(o(299));
    var a = !1, r = "", u = og, h = rg, b = ug, x = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (x = n.formState)), e = sv(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      r,
      x,
      u,
      h,
      b,
      yv
    ), e.context = ov(null), n = e.current, a = Je(), a = Eu(a), r = vi(a), r.callback = null, bi(n, r, a), n = a, e.current.lanes = n, Ul(e, n), Ln(e), t[za] = e.current, wf(t), new Dr(e);
  }, Os.version = "19.3.0", Os;
}
var Dv;
function HE() {
  if (Dv) return If.exports;
  Dv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), If.exports = UE(), If.exports;
}
var Or = HE(), q = lh();
const kE = /* @__PURE__ */ NE(q), GE = /* @__PURE__ */ OE({
  __proto__: null,
  default: kE
}, [q]);
var YE = cb(), qE = Object.defineProperty, sh = (i, l) => qE(i, "name", { value: l, configurable: !0 });
function Od(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
sh(Od, "setRef");
function fb(...i) {
  return (l) => {
    let s = !1;
    const o = i.map((c) => {
      const d = Od(c, l);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const d = o[c];
          typeof d == "function" ? d() : Od(i[c], null);
        }
      };
  };
}
sh(fb, "composeRefs");
function db(...i) {
  return q.useCallback(fb(...i), i);
}
sh(db, "useComposedRefs");
var XE = Object.defineProperty, tn = (i, l) => XE(i, "name", { value: l, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function oh(i) {
  const l = q.forwardRef((s, o) => {
    let { children: c, ...d } = s, f = null, m = !1;
    const p = [];
    c = vb(c), q.Children.forEach(c, (S) => {
      if (gb(S)) {
        m = !0;
        const A = S;
        let T = "child" in A.props ? A.props.child : A.props.children;
        for (; rh(T) && typeof Pr == "function"; )
          T = Pr(T._payload);
        f = KE(A, T), p.push(f?.props?.children);
      } else
        p.push(S);
    }), f ? f = q.cloneElement(f, void 0, p) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && q.Children.count(c) === 1 && q.isValidElement(c) && (f = c)
    );
    const g = f ? pb(f) : void 0, v = db(o, g);
    if (!f) {
      if (c || c === 0)
        throw new Error(
          m ? JE(i) : FE(i)
        );
      return c;
    }
    const y = mb(d, f.props ?? {});
    return f.type !== q.Fragment && (y.ref = o ? v : g), q.cloneElement(f, y);
  });
  return l.displayName = `${i}.Slot`, l;
}
tn(oh, "createSlot");
var QE = /* @__PURE__ */ oh("Slot"), hb = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function ZE(i) {
  const l = /* @__PURE__ */ tn((s) => "child" in s ? s.children(s.child) : s.children, "Slottable");
  return l.displayName = `${i}.Slottable`, l.__radixId = hb, l;
}
tn(ZE, "createSlottable");
var KE = /* @__PURE__ */ tn((i, l) => "child" in i.props ? q.isValidElement(l) ? q.cloneElement(l, void 0, i.props.children(l.props.children)) : null : q.isValidElement(l) ? l : null, "getSlottableElementFromSlottable");
function mb(i, l) {
  const s = { ...l };
  for (const o in l) {
    const c = i[o], d = l[o];
    /^on[A-Z]/.test(o) ? c && d ? s[o] = (...m) => {
      const p = d(...m);
      return c(...m), p;
    } : c && (s[o] = c) : o === "style" ? s[o] = { ...c, ...d } : o === "className" ? s[o] = [c, d].filter(Boolean).join(" ") : o === "aria-describedby" && (s[o] = bb(d, c));
  }
  return { ...i, ...s };
}
tn(mb, "mergeProps");
function pb(i) {
  let l = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? i.ref : (l = Object.getOwnPropertyDescriptor(i, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? i.props.ref : i.props.ref || i.ref);
}
tn(pb, "getElementRef");
function gb(i) {
  return q.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === hb;
}
tn(gb, "isSlottable");
var PE = /* @__PURE__ */ Symbol.for("react.lazy");
function rh(i) {
  return i != null && typeof i == "object" && "$$typeof" in i && i.$$typeof === PE && "_payload" in i && yb(i._payload);
}
tn(rh, "isLazyComponent");
function yb(i) {
  return typeof i == "object" && i !== null && "then" in i;
}
tn(yb, "isPromiseLike");
function vb(i) {
  let l = i;
  for (; rh(l) && typeof Pr == "function"; )
    l = Pr(l._payload);
  return l;
}
tn(vb, "useUnwrappedLazy");
function bb(...i) {
  const l = /* @__PURE__ */ new Set();
  for (const s of i)
    if (typeof s == "string")
      for (const o of String(s).trim().split(/\s+/))
        o && l.add(o);
  return l.size > 0 ? Array.from(l).join(" ") : void 0;
}
tn(bb, "concatAriaDescribedby");
var FE = /* @__PURE__ */ tn((i) => `${i} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), JE = /* @__PURE__ */ tn((i) => `${i} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Pr = GE[" use ".trim().toString()], IE = Object.defineProperty, WE = (i, l) => IE(i, "name", { value: l, configurable: !0 }), $E = [
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
], tA = $E.reduce((i, l) => {
  const s = /* @__PURE__ */ oh(`Primitive.${l}`), o = q.forwardRef((c, d) => {
    const { asChild: f, ...m } = c, p = f ? s : l;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ D.jsx(p, { ...m, ref: d });
  });
  return o.displayName = `Primitive.${l}`, { ...i, [l]: o };
}, {});
function eA(i, l) {
  i && YE.flushSync(() => i.dispatchEvent(l));
}
WE(eA, "dispatchDiscreteCustomEvent");
var nA = Object.defineProperty, Sb = (i, l) => nA(i, "name", { value: l, configurable: !0 }), uh = {
  Horizontal: "horizontal",
  Vertical: "vertical"
}, zv = uh.Horizontal, iA = Object.values(uh), Tb = /* @__PURE__ */ q.forwardRef(
  /* @__PURE__ */ Sb(function(l, s) {
    const { decorative: o, orientation: c = zv, ...d } = l, f = xb(c) ? c : zv, m = f === uh.Vertical ? f : void 0, p = o ? { role: "none" } : { "aria-orientation": m, role: "separator" };
    return /* @__PURE__ */ D.jsx(
      tA.div,
      {
        "data-orientation": f,
        ...p,
        ...d,
        ref: s
      }
    );
  }, "Separator")
);
function xb(i) {
  return iA.includes(i);
}
Sb(xb, "isValidOrientation");
function Eb(i) {
  var l, s, o = "";
  if (typeof i == "string" || typeof i == "number") o += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var c = i.length;
    for (l = 0; l < c; l++) i[l] && (s = Eb(i[l])) && (o && (o += " "), o += s);
  } else for (s in i) i[s] && (o && (o += " "), o += s);
  return o;
}
function Ab() {
  for (var i, l, s = 0, o = "", c = arguments.length; s < c; s++) (i = arguments[s]) && (l = Eb(i)) && (o && (o += " "), o += l);
  return o;
}
const aA = (i, l) => {
  const s = new Array(i.length + l.length);
  for (let o = 0; o < i.length; o++)
    s[o] = i[o];
  for (let o = 0; o < l.length; o++)
    s[i.length + o] = l[o];
  return s;
}, lA = (i, l) => ({
  classGroupId: i,
  validator: l
}), wb = (i = /* @__PURE__ */ new Map(), l = null, s) => ({
  nextPart: i,
  validators: l,
  classGroupId: s
}), Fr = "-", Ov = [], sA = "arbitrary..", oA = (i) => {
  const l = uA(i), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: o
  } = i;
  return {
    getClassGroupId: (f) => {
      if (f.startsWith("[") && f.endsWith("]"))
        return rA(f);
      const m = f.split(Fr), p = m[0] === "" && m.length > 1 ? 1 : 0;
      return Cb(m, p, l);
    },
    getConflictingClassGroupIds: (f, m) => {
      if (m) {
        const p = o[f], g = s[f];
        return p ? g ? aA(g, p) : p : g || Ov;
      }
      return s[f] || Ov;
    }
  };
}, Cb = (i, l, s) => {
  if (i.length - l === 0)
    return s.classGroupId;
  const c = i[l], d = s.nextPart.get(c);
  if (d) {
    const g = Cb(i, l + 1, d);
    if (g) return g;
  }
  const f = s.validators;
  if (f === null)
    return;
  const m = l === 0 ? i.join(Fr) : i.slice(l).join(Fr), p = f.length;
  for (let g = 0; g < p; g++) {
    const v = f[g];
    if (v.validator(m))
      return v.classGroupId;
  }
}, rA = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const l = i.slice(1, -1), s = l.indexOf(":"), o = l.slice(0, s);
  return o ? sA + o : void 0;
})(), uA = (i) => {
  const {
    theme: l,
    classGroups: s
  } = i;
  return cA(s, l);
}, cA = (i, l) => {
  const s = wb();
  for (const o in i) {
    const c = i[o];
    ch(c, s, o, l);
  }
  return s;
}, ch = (i, l, s, o) => {
  const c = i.length;
  for (let d = 0; d < c; d++) {
    const f = i[d];
    fA(f, l, s, o);
  }
}, fA = (i, l, s, o) => {
  if (typeof i == "string") {
    dA(i, l, s);
    return;
  }
  if (typeof i == "function") {
    hA(i, l, s, o);
    return;
  }
  mA(i, l, s, o);
}, dA = (i, l, s) => {
  const o = i === "" ? l : Mb(l, i);
  o.classGroupId = s;
}, hA = (i, l, s, o) => {
  if (pA(i)) {
    ch(i(o), l, s, o);
    return;
  }
  l.validators === null && (l.validators = []), l.validators.push(lA(s, i));
}, mA = (i, l, s, o) => {
  const c = Object.entries(i), d = c.length;
  for (let f = 0; f < d; f++) {
    const [m, p] = c[f];
    ch(p, Mb(l, m), s, o);
  }
}, Mb = (i, l) => {
  let s = i;
  const o = l.split(Fr), c = o.length;
  for (let d = 0; d < c; d++) {
    const f = o[d];
    let m = s.nextPart.get(f);
    m || (m = wb(), s.nextPart.set(f, m)), s = m;
  }
  return s;
}, pA = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, gA = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, s = /* @__PURE__ */ Object.create(null), o = /* @__PURE__ */ Object.create(null);
  const c = (d, f) => {
    s[d] = f, l++, l > i && (l = 0, o = s, s = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(d) {
      let f = s[d];
      if (f !== void 0)
        return f;
      if ((f = o[d]) !== void 0)
        return c(d, f), f;
    },
    set(d, f) {
      d in s ? s[d] = f : c(d, f);
    }
  };
}, Nd = "!", Nv = ":", yA = [], Rv = (i, l, s, o, c) => ({
  modifiers: i,
  hasImportantModifier: l,
  baseClassName: s,
  maybePostfixModifierPosition: o,
  isExternal: c
}), vA = (i) => {
  const {
    prefix: l,
    experimentalParseClassName: s
  } = i;
  let o = (c) => {
    const d = [];
    let f = 0, m = 0, p = 0, g;
    const v = c.length;
    for (let w = 0; w < v; w++) {
      const E = c[w];
      if (f === 0 && m === 0) {
        if (E === Nv) {
          d.push(c.slice(p, w)), p = w + 1;
          continue;
        }
        if (E === "/") {
          g = w;
          continue;
        }
      }
      E === "[" ? f++ : E === "]" ? f-- : E === "(" ? m++ : E === ")" && m--;
    }
    const y = d.length === 0 ? c : c.slice(p);
    let S = y, A = !1;
    y.endsWith(Nd) ? (S = y.slice(0, -1), A = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(Nd) && (S = y.slice(1), A = !0)
    );
    const T = g && g > p ? g - p : void 0;
    return Rv(d, A, S, T);
  };
  if (l) {
    const c = l + Nv, d = o;
    o = (f) => f.startsWith(c) ? d(f.slice(c.length)) : Rv(yA, !1, f, void 0, !0);
  }
  if (s) {
    const c = o;
    o = (d) => s({
      className: d,
      parseClassName: c
    });
  }
  return o;
}, bA = (i) => {
  const l = /* @__PURE__ */ new Map();
  return i.orderSensitiveModifiers.forEach((s, o) => {
    l.set(s, 1e6 + o);
  }), (s) => {
    const o = [];
    let c = [];
    for (let d = 0; d < s.length; d++) {
      const f = s[d], m = f[0] === "[", p = l.has(f);
      m || p ? (c.length > 0 && (c.sort(), o.push(...c), c = []), o.push(f)) : c.push(f);
    }
    return c.length > 0 && (c.sort(), o.push(...c)), o;
  };
}, SA = (i) => ({
  cache: gA(i.cacheSize),
  parseClassName: vA(i),
  sortModifiers: bA(i),
  postfixLookupClassGroupIds: TA(i),
  ...oA(i)
}), TA = (i) => {
  const l = /* @__PURE__ */ Object.create(null), s = i.postfixLookupClassGroups;
  if (s)
    for (let o = 0; o < s.length; o++)
      l[s[o]] = !0;
  return l;
}, xA = /\s+/, EA = (i, l) => {
  const {
    parseClassName: s,
    getClassGroupId: o,
    getConflictingClassGroupIds: c,
    sortModifiers: d,
    postfixLookupClassGroupIds: f
  } = l, m = [], p = i.trim().split(xA);
  let g = "";
  for (let v = p.length - 1; v >= 0; v -= 1) {
    const y = p[v], {
      isExternal: S,
      modifiers: A,
      hasImportantModifier: T,
      baseClassName: w,
      maybePostfixModifierPosition: E
    } = s(y);
    if (S) {
      g = y + (g.length > 0 ? " " + g : g);
      continue;
    }
    let z = !!E, B;
    if (z) {
      const N = w.substring(0, E);
      B = o(N);
      const O = B && f[B] ? o(w) : void 0;
      O && O !== B && (B = O, z = !1);
    } else
      B = o(w);
    if (!B) {
      if (!z) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (B = o(w), !B) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      z = !1;
    }
    const G = A.length === 0 ? "" : A.length === 1 ? A[0] : d(A).join(":"), _ = T ? G + Nd : G, Q = _ + B;
    if (m.indexOf(Q) > -1)
      continue;
    m.push(Q);
    const K = c(B, z);
    for (let N = 0; N < K.length; ++N) {
      const O = K[N];
      m.push(_ + O);
    }
    g = y + (g.length > 0 ? " " + g : g);
  }
  return g;
}, AA = (...i) => {
  let l = 0, s, o, c = "";
  for (; l < i.length; )
    (s = i[l++]) && (o = Db(s)) && (c && (c += " "), c += o);
  return c;
}, Db = (i) => {
  if (typeof i == "string")
    return i;
  let l, s = "";
  for (let o = 0; o < i.length; o++)
    i[o] && (l = Db(i[o])) && (s && (s += " "), s += l);
  return s;
}, wA = (i, ...l) => {
  let s, o, c, d;
  const f = (p) => {
    const g = l.reduce((v, y) => y(v), i());
    return s = SA(g), o = s.cache.get, c = s.cache.set, d = m, m(p);
  }, m = (p) => {
    const g = o(p);
    if (g)
      return g;
    const v = EA(p, s);
    return c(p, v), v;
  };
  return d = f, (...p) => d(AA(...p));
}, CA = [], de = (i) => {
  const l = (s) => s[i] || CA;
  return l.isThemeGetter = !0, l.themeKey = i, l;
}, zb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ob = /^\((?:(\w[\w-]*):)?(.+)\)$/i, MA = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, DA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, zA = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, OA = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, NA = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, RA = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Li = (i) => MA.test(i), zt = (i) => !!i && !Number.isNaN(Number(i)), Bn = (i) => !!i && Number.isInteger(Number(i)), nd = (i) => i.endsWith("%") && zt(i.slice(0, -1)), ii = (i) => DA.test(i), Nb = () => !0, _A = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  zA.test(i) && !OA.test(i)
), fh = () => !1, VA = (i) => NA.test(i), jA = (i) => RA.test(i), LA = (i) => !ht(i) && !mt(i), BA = (i) => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)), UA = (i) => ki(i, Vb, fh), ht = (i) => zb.test(i), ma = (i) => ki(i, jb, _A), _v = (i) => ki(i, ZA, zt), HA = (i) => ki(i, Bb, Nb), kA = (i) => ki(i, Lb, fh), Vv = (i) => ki(i, Rb, fh), GA = (i) => ki(i, _b, jA), Nr = (i) => ki(i, Ub, VA), mt = (i) => Ob.test(i), Ns = (i) => Aa(i, jb), YA = (i) => Aa(i, Lb), jv = (i) => Aa(i, Rb), qA = (i) => Aa(i, Vb), XA = (i) => Aa(i, _b), Rr = (i) => Aa(i, Ub, !0), QA = (i) => Aa(i, Bb, !0), ki = (i, l, s) => {
  const o = zb.exec(i);
  return o ? o[1] ? l(o[1]) : s(o[2]) : !1;
}, Aa = (i, l, s = !1) => {
  const o = Ob.exec(i);
  return o ? o[1] ? l(o[1]) : s : !1;
}, Rb = (i) => i === "position" || i === "percentage", _b = (i) => i === "image" || i === "url", Vb = (i) => i === "length" || i === "size" || i === "bg-size", jb = (i) => i === "length", ZA = (i) => i === "number", Lb = (i) => i === "family-name", Bb = (i) => i === "number" || i === "weight", Ub = (i) => i === "shadow", KA = () => {
  const i = de("color"), l = de("font"), s = de("text"), o = de("font-weight"), c = de("tracking"), d = de("leading"), f = de("breakpoint"), m = de("container"), p = de("spacing"), g = de("radius"), v = de("shadow"), y = de("inset-shadow"), S = de("text-shadow"), A = de("drop-shadow"), T = de("blur"), w = de("perspective"), E = de("aspect"), z = de("ease"), B = de("animate"), G = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
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
  ], Q = () => [..._(), mt, ht], K = () => ["auto", "hidden", "clip", "visible", "scroll"], N = () => ["auto", "contain", "none"], O = () => [mt, ht, p], ot = () => [Li, "full", "auto", ...O()], ut = () => [Bn, "none", "subgrid", mt, ht], F = () => ["auto", {
    span: ["full", Bn, mt, ht]
  }, Bn, mt, ht], I = () => [Bn, "auto", mt, ht], lt = () => ["auto", "min", "max", "fr", mt, ht], et = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], nt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], X = () => ["auto", ...O()], J = () => [Li, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...O()], it = () => [m, Li, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...O()], at = () => [Li, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...O()], Y = () => [i, mt, ht], yt = () => [..._(), jv, Vv, {
    position: [mt, ht]
  }], vt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], At = () => ["auto", "cover", "contain", qA, UA, {
    size: [mt, ht]
  }], C = () => [nd, Ns, ma], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    mt,
    ht
  ], tt = () => ["", zt, Ns, ma], W = () => ["solid", "dashed", "dotted", "double"], ft = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ct = () => [zt, nd, jv, Vv], St = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    T,
    mt,
    ht
  ], st = () => ["none", zt, mt, ht], $ = () => ["none", zt, mt, ht], xt = () => [zt, mt, ht], Vt = () => [Li, "full", ...O()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ii],
      breakpoint: [ii],
      color: [Nb],
      container: [ii],
      "drop-shadow": [ii],
      ease: ["in", "out", "in-out"],
      font: [LA],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ii],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ii],
      shadow: [ii],
      spacing: ["px", zt],
      text: [ii],
      "text-shadow": [ii],
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
        aspect: ["auto", "square", Li, ht, mt, E]
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
        "@container": ["", "normal", "size", mt, ht]
      }],
      /**
       * Container Name
       * @see https://tailwindcss.com/docs/responsive-design#named-containers
       */
      "container-named": [BA],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [zt, "auto", ht, mt, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": G()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": G()
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
        object: Q()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: K()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": K()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": K()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
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
        inset: ot()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": ot()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": ot()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": ot(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: ot()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": ot(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: ot()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": ot()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": ot()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: ot()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: ot()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: ot()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: ot()
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
        z: [Bn, "auto", mt, ht]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [Li, "full", "auto", m, ...O()]
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
        flex: [zt, Li, "auto", "initial", "none", ht]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", zt, mt, ht]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", zt, mt, ht]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Bn, "first", "last", "none", mt, ht]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": ut()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: F()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ut()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: F()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
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
        "auto-cols": lt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": lt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: O()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": O()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": O()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...et(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...nt(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...nt()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...et()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...nt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...nt(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": et()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...nt(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...nt()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: O()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: O()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: O()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: O()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: O()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: O()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: O()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: O()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: O()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: O()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: O()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: X()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: X()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: X()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: X()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: X()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: X()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: X()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: X()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: X()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: X()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: X()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": O()
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
        "space-y": O()
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
        size: J()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ...it()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...it()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...it()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...at()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...at()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...at()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...J()]
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
          ...J()
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
            screen: [f]
          },
          ...J()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...J()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...J()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...J()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, Ns, ma]
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
        font: [o, QA, HA]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", nd, ht]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [YA, kA, l]
      }],
      /**
       * Font Feature Settings
       * @see https://tailwindcss.com/docs/font-feature-settings
       */
      "font-features": [{
        "font-features": [ht]
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
        tracking: [c, mt, ht]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [zt, "none", mt, _v]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          d,
          ...O()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", mt, ht]
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
        list: ["disc", "decimal", "none", mt, ht]
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
        placeholder: Y()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: Y()
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
        decoration: [...W(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [zt, "from-font", "auto", mt, ma]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: Y()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [zt, "auto", mt, ht]
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
        indent: O()
      }],
      /**
       * Tab Size
       * @see https://tailwindcss.com/docs/tab-size
       */
      "tab-size": [{
        tab: [Bn, mt, ht]
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", mt, ht]
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
        content: ["none", mt, ht]
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
        bg: yt()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: vt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: At()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Bn, mt, ht],
          radial: ["", mt, ht],
          conic: ["", Bn, mt, ht]
        }, XA, GA]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: Y()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: C()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: C()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: C()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: Y()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: Y()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: Y()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: L()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": L()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": L()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": L()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": L()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": L()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": L()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": L()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": L()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": L()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": L()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": L()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": L()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": L()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": L()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: tt()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": tt()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": tt()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": tt()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": tt()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": tt()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": tt()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": tt()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": tt()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": tt()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": tt()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": tt()
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
        "divide-y": tt()
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
        border: [...W(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...W(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: Y()
      }],
      /**
       * Border Color Inline
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": Y()
      }],
      /**
       * Border Color Block
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": Y()
      }],
      /**
       * Border Color Inline Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": Y()
      }],
      /**
       * Border Color Inline End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": Y()
      }],
      /**
       * Border Color Block Start
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-bs": [{
        "border-bs": Y()
      }],
      /**
       * Border Color Block End
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-be": [{
        "border-be": Y()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": Y()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": Y()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": Y()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": Y()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: Y()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...W(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [zt, mt, ht]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", zt, Ns, ma]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: Y()
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
          v,
          Rr,
          Nr
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: Y()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", y, Rr, Nr]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": Y()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: tt()
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
        ring: Y()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [zt, ma]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": Y()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": tt()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": Y()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", S, Rr, Nr]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": Y()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [zt, mt, ht]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ft(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ft()
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
        "mask-linear": [zt]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": ct()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ct()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Y()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Y()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ct()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ct()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Y()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Y()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ct()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ct()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Y()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Y()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ct()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ct()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Y()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Y()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ct()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ct()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Y()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Y()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ct()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ct()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Y()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Y()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ct()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ct()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": Y()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": Y()
      }],
      "mask-image-radial": [{
        "mask-radial": [mt, ht]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": ct()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ct()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": Y()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": Y()
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
        "mask-radial-at": _()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [zt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ct()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ct()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": Y()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": Y()
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
        mask: yt()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: vt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: At()
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
        mask: ["none", mt, ht]
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
          mt,
          ht
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: St()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [zt, mt, ht]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [zt, mt, ht]
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
          A,
          Rr,
          Nr
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": Y()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", zt, mt, ht]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [zt, mt, ht]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", zt, mt, ht]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [zt, mt, ht]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", zt, mt, ht]
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
          mt,
          ht
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": St()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [zt, mt, ht]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [zt, mt, ht]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", zt, mt, ht]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [zt, mt, ht]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", zt, mt, ht]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [zt, mt, ht]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [zt, mt, ht]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", zt, mt, ht]
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
        "border-spacing": O()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": O()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": O()
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
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", mt, ht]
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
        duration: [zt, "initial", mt, ht]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", z, mt, ht]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [zt, mt, ht]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", B, mt, ht]
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
        perspective: [w, mt, ht]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": Q()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: st()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": st()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": st()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": st()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: $()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": $()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": $()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": $()
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
        skew: xt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": xt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": xt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [mt, ht, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: Q()
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
        translate: Vt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Vt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Vt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Vt()
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
        zoom: [Bn, mt, ht]
      }],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: Y()
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
        caret: Y()
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", mt, ht]
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
        "scrollbar-thumb": Y()
      }],
      /**
       * Scrollbar Track Color
       * @see https://tailwindcss.com/docs/scrollbar-color
       */
      "scrollbar-track-color": [{
        "scrollbar-track": Y()
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
        "scroll-m": O()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": O()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": O()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": O()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": O()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": O()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": O()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": O()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": O()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": O()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": O()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": O()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": O()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": O()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": O()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": O()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": O()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": O()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": O()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": O()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": O()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": O()
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
        "will-change": ["auto", "scroll", "contents", "transform", mt, ht]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...Y()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [zt, Ns, ma, _v]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...Y()]
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
}, PA = /* @__PURE__ */ wA(KA);
function wa(...i) {
  return PA(Ab(i));
}
const Hb = q.forwardRef(({ className: i, orientation: l = "horizontal", decorative: s = !0, ...o }, c) => /* @__PURE__ */ D.jsx(Tb, { ref: c, decorative: s, orientation: l, className: wa("vt:shrink-0 vt:bg-border", l === "horizontal" ? "vt:h-px vt:w-full" : "vt:h-full vt:w-px", i), ...o }));
Hb.displayName = Tb.displayName;
const FA = (i) => i?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function JA(i, l, s = []) {
  if (l == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: FA(i),
    size: 24,
    node: l,
    ...s.length > 0 ? { aliases: s } : {}
  };
}
const IA = (i) => {
  let l = "", s = !1;
  for (const o of i) {
    if (o === "-" || o === "_" || o <= " ") {
      s = l.length > 0;
      continue;
    }
    l.length === 0 ? l += o.toLowerCase() : l += s ? o.toUpperCase() : o, s = !1;
  }
  return l;
};
const WA = (i) => {
  const l = IA(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
const Rd = (...i) => i.filter((l, s, o) => !!l && l.trim() !== "" && o.indexOf(l) === s).join(" ").trim();
const pa = {
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
function id(i) {
  return i != null;
}
function $A(i, l = {}) {
  const s = l.attributeNames ?? {}, o = (S) => s[S] ?? S, c = i.size ?? i.width ?? pa.width, d = i.size ?? i.height ?? pa.height, f = i.aliases?.filter((S) => typeof S == "string" && S.trim() !== "").map((S) => `lucide-${S}`) ?? [], m = [...i.name ? [`lucide-${i.name}`] : [], ...f], p = l.className?.split(" ").filter(Boolean) ?? [], g = l.includeDefaultClasses === !1 ? Rd(...p) : Rd("lucide", ...m, ...p), v = l.absoluteStrokeWidth ? Number(l.strokeWidth ?? pa["stroke-width"]) * Number(i.size ?? i.width ?? pa.width) / Number(l.size ?? l.width ?? pa.width) : l.strokeWidth ?? pa["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(pa).reduce((S, [A, T]) => (S[o(A)] = T, S), {}),
      ..."color" in l && l.color && {
        [o("stroke")]: l.color
      },
      ..."size" in l && id(l.size) && {
        [o("width")]: l.size,
        [o("height")]: l.size
      },
      ..."width" in l && id(l.width) && {
        [o("width")]: l.width
      },
      ..."height" in l && id(l.height) && {
        [o("height")]: l.height
      },
      [o("stroke-width")]: v,
      ...g && {
        [o("class")]: g
      },
      [o("viewBox")]: `0 0 ${c} ${d}`,
      ...l.hasA11yProp === !1 ? {
        [o("aria-hidden")]: "true"
      } : {},
      ..."attributes" in l && l.attributes
    },
    i.node.map((S) => {
      const [A, T, w] = S, E = l.nonScalingStroke ? { [o("vector-effect")]: "non-scaling-stroke", ...T } : T;
      return w ? [A, E, w] : [A, E];
    })
  ];
}
function t2(i, l = {}) {
  return $A(i, {
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
const e2 = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
}, n2 = q.createContext({}), i2 = () => q.useContext(n2), a2 = q.forwardRef(
  ({
    color: i,
    size: l,
    width: s,
    height: o,
    strokeWidth: c,
    absoluteStrokeWidth: d,
    nonScalingStroke: f,
    className: m = "",
    children: p,
    iconNode: g = [],
    icon: v = {
      node: g,
      aliases: [],
      size: 24
    },
    ...y
  }, S) => {
    const {
      size: A = 24,
      strokeWidth: T = 2,
      absoluteStrokeWidth: w = !1,
      nonScalingStroke: E = !1,
      color: z = "currentColor",
      className: B = ""
    } = i2() ?? {}, G = !!p || e2(y), [_, Q, K = []] = t2(v, {
      color: i ?? z,
      width: s ?? l ?? A,
      height: o ?? l ?? A,
      strokeWidth: c ?? T,
      absoluteStrokeWidth: d ?? w,
      nonScalingStroke: f ?? E,
      className: Rd(B, m),
      hasA11yProp: G,
      attributes: y
    });
    return q.createElement(
      _,
      {
        ref: S,
        ...Q
      },
      [
        ...K.map(([N, O]) => q.createElement(N, O)),
        ...Array.isArray(p) ? p : [p]
      ]
    );
  }
);
function si(i, l = [], s = []) {
  const o = typeof i == "string" ? JA(i, l, s) : i, c = q.forwardRef(
    ({ className: d, ...f }, m) => q.createElement(a2, {
      ref: m,
      icon: o,
      className: d,
      ...f
    })
  );
  return o.name && (c.displayName = WA(o.name)), c;
}
const kb = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
kb.node;
const Gb = si(kb);
const Yb = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
Yb.node;
const Vs = si(Yb);
const qb = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
qb.node;
const dh = si(qb);
const Xb = {
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
Xb.node;
const l2 = si(Xb);
const Qb = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
Qb.node;
const uu = si(Qb);
const Zb = {
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
Zb.node;
const cu = si(Zb);
const Kb = {
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
Kb.node;
const s2 = si(Kb);
const Pb = {
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
Pb.node;
const Fb = si(Pb);
const Jb = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
Jb.node;
const o2 = si(Jb), Ib = q.createContext({});
function r2(i) {
  const l = q.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const u2 = typeof window < "u", Lv = u2 ? q.useLayoutEffect : q.useEffect, hh = /* @__PURE__ */ q.createContext(null);
function mh(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function Jr(i, l) {
  const s = i.indexOf(l);
  s > -1 && i.splice(s, 1);
}
const kn = (i, l, s) => s > l ? l : s < i ? i : s;
let fu = () => {
};
const Hn = {}, ph = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), Wb = (i) => typeof i == "object" && i !== null, gh = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function $b(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const En = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Is = (...i) => i.reduce((l, s) => (o) => s(l(o))), xa = /* @__NO_SIDE_EFFECTS__ */ (i, l, s) => {
  const o = l - i;
  return o ? (s - i) / o : 1;
};
class Ir {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return mh(this.subscriptions, l), () => this.remove(l);
  }
  remove(l) {
    Jr(this.subscriptions, l);
  }
  notify(l, s, o) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, s, o);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(l, s, o);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const dn = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, We = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, t1 = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, ad = (i, l, s) => i * (3 * (1 - i) * ((1 - i) * l + i * s) + i * i);
// @__NO_SIDE_EFFECTS__
function Ws(i, l, s, o) {
  return i === l && s === o ? En : (c) => {
    let d = 0, f = 1, m = c;
    for (let p = 0; ; p++) {
      m >= d && m <= f || (m = (d + f) / 2);
      const g = ad(m, i, s) - c;
      if (g * g < 1e-28 || p === 40)
        break;
      g > 0 ? f = m : d = m, m -= g * 1e-7 / (ad(m + 1e-7, i, s) - c - g);
    }
    return ad(m, l, o);
  };
}
const e1 = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, n1 = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), i1 = /* @__PURE__ */ Ws(0.33, 1.53, 0.69, 0.99), yh = /* @__PURE__ */ n1(i1), a1 = /* @__PURE__ */ e1(yh), l1 = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * yh(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), vh = (i) => 1 - Math.sin(Math.acos(i)), s1 = /* @__PURE__ */ n1(vh), o1 = /* @__PURE__ */ e1(vh), c2 = /* @__PURE__ */ Ws(0.42, 0, 1, 1), f2 = /* @__PURE__ */ Ws(0, 0, 0.58, 1), bh = /* @__PURE__ */ Ws(0.42, 0, 0.58, 1), d2 = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", Sh = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", h2 = {
  linear: En,
  easeIn: c2,
  easeInOut: bh,
  easeOut: f2,
  circIn: vh,
  circInOut: o1,
  circOut: s1,
  backIn: yh,
  backInOut: a1,
  backOut: i1,
  anticipate: l1
}, m2 = (i) => typeof i == "string", Bv = (i) => {
  if (/* @__PURE__ */ Sh(i)) {
    fu(i.length === 4);
    const [l, s, o, c] = i;
    return /* @__PURE__ */ Ws(l, s, o, c);
  } else if (m2(i))
    return h2[i];
  return i;
}, ce = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let Hr;
function p2() {
  Hr = void 0;
}
const te = {
  now: () => (Hr === void 0 && te.set(ce.isProcessing || Hn.useManualTiming ? ce.timestamp : performance.now()), Hr),
  set: (i) => {
    Hr = i, queueMicrotask(p2);
  }
}, wl = (i) => Math.round(i * 1e5) / 1e5, r1 = (i) => (l) => typeof l == "string" && l.startsWith(i), u1 = /* @__PURE__ */ r1("--"), g2 = /* @__PURE__ */ r1("var(--"), Th = (i) => g2(i) ? y2.test(i.split("/*")[0].trim()) : !1, y2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function ld(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const Dl = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Us = {
  ...Dl,
  transform: (i) => kn(0, 1, i)
}, _r = {
  ...Dl,
  default: 1
}, xh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function v2(i) {
  return i == null;
}
const b2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Eh = (i, l) => (s) => !!(typeof s == "string" && b2.test(s) && s.startsWith(i) || l && !v2(s) && Object.prototype.hasOwnProperty.call(s, l)), c1 = (i, l, s) => (o) => {
  if (typeof o != "string")
    return o;
  const [c, d, f, m] = o.match(xh);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(d),
    [s]: parseFloat(f),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, S2 = (i) => kn(0, 255, i), sd = {
  ...Dl,
  transform: (i) => Math.round(S2(i))
}, ya = {
  test: /* @__PURE__ */ Eh("rgb", "red"),
  parse: /* @__PURE__ */ c1("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: s, alpha: o = 1 }) => "rgba(" + sd.transform(i) + ", " + sd.transform(l) + ", " + sd.transform(s) + ", " + wl(Us.transform(o)) + ")"
};
function T2(i) {
  let l = "", s = "", o = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), s = i.substring(3, 5), o = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), s = i.substring(2, 3), o = i.substring(3, 4), c = i.substring(4, 5), l += l, s += s, o += o, c += c), {
    red: parseInt(l, 16),
    green: parseInt(s, 16),
    blue: parseInt(o, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const _d = {
  test: /* @__PURE__ */ Eh("#"),
  parse: T2,
  transform: ya.transform
}, $s = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), ai = /* @__PURE__ */ $s("deg"), Un = /* @__PURE__ */ $s("%"), gt = /* @__PURE__ */ $s("px"), x2 = /* @__PURE__ */ $s("vh"), E2 = /* @__PURE__ */ $s("vw"), Uv = {
  ...Un,
  parse: (i) => Un.parse(i) / 100,
  transform: (i) => Un.transform(i * 100)
}, Sl = {
  test: /* @__PURE__ */ Eh("hsl", "hue"),
  parse: /* @__PURE__ */ c1("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: s, alpha: o = 1 }) => "hsla(" + Math.round(i) + ", " + Un.transform(wl(l)) + ", " + Un.transform(wl(s)) + ", " + wl(Us.transform(o)) + ")"
}, me = {
  test: (i) => ya.test(i) || _d.test(i) || Sl.test(i),
  parse: (i) => ya.test(i) ? ya.parse(i) : Sl.test(i) ? Sl.parse(i) : _d.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ya.transform(i) : Sl.transform(i),
  getAnimatableNone: (i) => {
    const l = me.parse(i);
    return l.alpha = 0, me.transform(l);
  }
}, A2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, f1 = /* @__PURE__ */ new RegExp(xh.source), d1 = /* @__PURE__ */ new RegExp(A2.source, "i");
function w2(i) {
  return isNaN(i) && typeof i == "string" && (f1.test(i) || d1.test(i));
}
const h1 = "number", m1 = "color", C2 = "var", M2 = "var(", Hv = "${}", D2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function z2(i) {
  const l = i.toString();
  return f1.test(l) || d1.test(l);
}
function Hs(i) {
  const l = i.toString(), s = [], o = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const m = l.replace(D2, (p) => (me.test(p) ? (o.color.push(d), c.push(m1), s.push(me.parse(p))) : p.startsWith(M2) ? (o.var.push(d), c.push(C2), s.push(p)) : (o.number.push(d), c.push(h1), s.push(parseFloat(p))), ++d, Hv)).split(Hv);
  return { values: s, split: m, indexes: o, types: c };
}
function O2(i) {
  return Hs(i).values;
}
function p1({ split: i, types: l }) {
  const s = i.length;
  return (o) => {
    let c = "";
    for (let d = 0; d < s; d++)
      if (c += i[d], o[d] !== void 0) {
        const f = l[d];
        f === h1 ? c += wl(o[d]) : f === m1 ? c += me.transform(o[d]) : c += o[d];
      }
    return c;
  };
}
function N2(i) {
  return p1(Hs(i));
}
const R2 = (i) => typeof i == "number" ? 0 : me.test(i) ? me.getAnimatableNone(i) : i, _2 = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : R2(i);
function V2(i) {
  const l = Hs(i);
  return p1(l)(l.values.map((o, c) => _2(o, l.split[c])));
}
const $e = {
  test: w2,
  parse: O2,
  createTransformer: N2,
  getAnimatableNone: V2
};
function od(i, l, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? i + (l - i) * 6 * s : s < 1 / 2 ? l : s < 2 / 3 ? i + (l - i) * (2 / 3 - s) * 6 : i;
}
function j2({ hue: i, saturation: l, lightness: s, alpha: o }) {
  i /= 360, l /= 100, s /= 100;
  let c = 0, d = 0, f = 0;
  if (!l)
    c = d = f = s;
  else {
    const m = s < 0.5 ? s * (1 + l) : s + l - s * l, p = 2 * s - m;
    c = od(p, m, i + 1 / 3), d = od(p, m, i), f = od(p, m, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: o
  };
}
function Wr(i, l) {
  return (s) => s > 0 ? l : i;
}
const Qt = (i, l, s) => i + (l - i) * s, rd = (i, l, s) => {
  const o = i * i, c = s * (l * l - o) + o;
  return c < 0 ? 0 : Math.sqrt(c);
}, L2 = [_d, ya, Sl], B2 = (i) => L2.find((l) => l.test(i));
function kv(i) {
  const l = B2(i);
  if (!l)
    return !1;
  let s = l.parse(i);
  return l === Sl && (s = j2(s)), s;
}
const Gv = (i, l) => {
  const s = kv(i), o = kv(l);
  if (!s || !o)
    return Wr(i, l);
  const c = { ...s };
  return (d) => (c.red = rd(s.red, o.red, d), c.green = rd(s.green, o.green, d), c.blue = rd(s.blue, o.blue, d), c.alpha = Qt(s.alpha, o.alpha, d), ya.transform(c));
}, Vd = /* @__PURE__ */ new Set(["none", "hidden"]);
function U2(i, l) {
  return Vd.has(i) ? (s) => s <= 0 ? i : l : (s) => s >= 1 ? l : i;
}
function H2(i, l) {
  return (s) => Qt(i, l, s);
}
function Ah(i) {
  return typeof i == "number" ? H2 : typeof i == "string" ? Th(i) ? Wr : me.test(i) ? Gv : Y2 : Array.isArray(i) ? g1 : typeof i == "object" ? me.test(i) ? Gv : k2 : Wr;
}
function g1(i, l) {
  const s = [...i], o = s.length, c = i.map((d, f) => Ah(d)(d, l[f]));
  return (d) => {
    for (let f = 0; f < o; f++)
      s[f] = c[f](d);
    return s;
  };
}
function k2(i, l) {
  const s = { ...i, ...l }, o = {};
  for (const c in s)
    i[c] !== void 0 && l[c] !== void 0 && (o[c] = Ah(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in o)
      s[d] = o[d](c);
    return s;
  };
}
function G2(i, l) {
  const s = [], o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], f = i.indexes[d][o[d]], m = i.values[f] ?? 0;
    s[c] = m, o[d]++;
  }
  return s;
}
const Y2 = (i, l) => {
  const s = $e.createTransformer(l), o = Hs(i), c = Hs(l);
  return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Vd.has(i) && !c.values.length || Vd.has(l) && !o.values.length ? U2(i, l) : Is(g1(G2(o, c), c.values), s) : Wr(i, l);
}, Yv = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function q2(i, l) {
  const s = Yv.exec(i);
  if (!s)
    return;
  const o = Yv.exec(l);
  if (!o || s[2] !== o[2])
    return;
  const c = s[2], d = parseFloat(s[1]), f = parseFloat(o[1]);
  return (m) => wl(Qt(d, f, m)) + c;
}
function wh(i, l, s) {
  if (typeof i == "number" && typeof l == "number" && typeof s == "number")
    return Qt(i, l, s);
  if (typeof i == "string" && typeof l == "string") {
    const c = q2(i, l);
    if (c)
      return c;
  }
  return Ah(i)(i, l);
}
const Vr = [
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
function X2(i) {
  let l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), o = !1, c = !1;
  const d = /* @__PURE__ */ new Set();
  let f = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function m(g) {
    d.has(g) && (s.add(g), i()), g(f);
  }
  const p = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (g, v = !1, y = !1) => {
      const A = y && o ? l : s;
      return v && d.add(g), A.add(g), g;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (g) => {
      s.delete(g), d.delete(g);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (g) => {
      if (f = g, o) {
        c = !0;
        return;
      }
      o = !0;
      const v = l;
      l = s, s = v, l.forEach(m), l.clear(), o = !1, c && (c = !1, p.process(g));
    }
  };
  return p;
}
const Q2 = 40;
function y1(i, l, s = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let o = !1, c = !0;
  const d = () => o = !0, f = Vr.reduce((G, _) => (G[_] = X2(d), G), {}), { setup: m, read: p, resolveKeyframes: g, preUpdate: v, update: y, preRender: S, render: A, postRender: T } = f, w = () => {
    const G = Hn.useManualTiming, _ = G ? s.timestamp : performance.now();
    o = !1, G || (s.delta = c ? 1e3 / 60 : Math.max(Math.min(_ - s.timestamp, Q2), 1)), s.timestamp = _, s.isProcessing = !0, m.process(s), p.process(s), g.process(s), v.process(s), y.process(s), S.process(s), A.process(s), T.process(s), s.isProcessing = !1, o && l && (c = !1, i(w));
  }, E = () => {
    o = !0, c = !0, s.isProcessing || i(w);
  };
  return { schedule: Vr.reduce((G, _) => {
    const Q = f[_];
    return G[_] = (K, N = !1, O = !1) => (o || E(), Q.schedule(K, N, O)), G;
  }, {}), cancel: (G) => {
    for (let _ = 0; _ < Vr.length; _++)
      f[Vr[_]].cancel(G);
  }, state: s, steps: f };
}
const { schedule: Kt, cancel: Hi, steps: ud } = /* @__PURE__ */ y1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : En, !0, ce), v1 = (i) => {
  const l = ({ timestamp: s }) => i(s);
  return {
    start: (s = !0) => Kt.update(l, s),
    stop: () => Hi(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ce.isProcessing ? ce.timestamp : te.now()
  };
}, b1 = (i, l, s = 10) => {
  let o = "";
  const c = Math.max(Math.round(l / s), 2);
  for (let d = 0; d < c; d++)
    o += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, Ch = 2e4;
function Mh(i, l = 50, s = Ch, o) {
  let c = 0, d = i.next(c);
  for (; !d.done && c < s; )
    c += l, d = i.next(c);
  return c >= s ? 1 / 0 : c;
}
function Z2(i, l = 100, s) {
  const { keyframes: o, velocity: c } = i, d = o && o[o.length - 1] - o[0], f = s({
    ...i,
    velocity: c && d ? c * l / d : c,
    keyframes: [0, l]
  }), m = Math.min(Mh(f), Ch);
  return {
    type: "keyframes",
    ease: (p) => f.next(m * p).value / l,
    duration: /* @__PURE__ */ We(m)
  };
}
const Ce = {
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
}, S1 = (i) => i < 0 ? 1 / Math.max(1 + i, Ce.minDamping) : Math.max(1 - i, Ce.minDamping);
function T1(i, l) {
  if (!(i > 1))
    return 1;
  const s = Math.sqrt(i * i - 1), o = i - s, c = i + s, d = 2 * s * Math.exp(-l) * (1 + l);
  return x1((f) => c * Math.exp(-o * f) - o * Math.exp(-c * f) - d, (f) => Math.exp(-c * f) - Math.exp(-o * f), l) / l;
}
function jd(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const K2 = 12;
function x1(i, l, s) {
  let o = s;
  for (let c = 1; c < K2; c++)
    o = o - i(o) / l(o);
  return o;
}
const cd = 1e-3;
function P2({ duration: i = Ce.duration, bounce: l = Ce.bounce }) {
  let s, o;
  const c = S1(l);
  i = kn(Ce.minDuration, Ce.maxDuration, /* @__PURE__ */ We(i)), c < 1 ? (s = (g) => {
    const v = g * c, y = v * i, S = jd(g, c), A = Math.exp(-y);
    return cd - v / S * A;
  }, o = (g) => {
    const y = g * c * i, S = c * c * g * g * i, A = Math.exp(-y), T = jd(g * g, c);
    return (-s(g) + cd > 0 ? -1 : 1) * -S * A / T;
  }) : (s = (g) => {
    const v = Math.exp(-g * i), y = g * i + 1;
    return -cd + v * y;
  }, o = (g) => {
    const v = Math.exp(-g * i), y = -g * (i * i);
    return v * y;
  });
  const d = 5 / i, f = x1(s, o, d), m = f * T1(c, f * i), p = m * m;
  return {
    stiffness: p,
    damping: c * 2 * Math.sqrt(p),
    duration: /* @__PURE__ */ dn(i)
  };
}
const Ld = (i, l) => (l ? i >= 0 : i > 0) && i < 1 / 0;
function fd(i, l) {
  if (Ld(i, l))
    return i;
}
function F2(i) {
  const l = fd(i.stiffness), s = fd(i.damping, !0), o = fd(i.mass), c = {
    ...i,
    stiffness: l ?? Ce.stiffness,
    damping: s ?? Ce.damping,
    mass: o ?? Ce.mass,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (l ?? s ?? o) === void 0 && (i.duration !== void 0 || i.bounce !== void 0)
  };
  if (c.isTimeDefined) {
    if (i.visualDuration) {
      const d = S1(i.bounce || 0), f = 2 * Math.PI / (i.visualDuration * 1.2) * T1(d, 2 * Math.PI / 1.2);
      c.stiffness = f * f, c.damping = 2 * d * Math.sqrt(c.stiffness);
    } else
      Object.assign(c, P2(c)), c.isResolvedFromDuration = !0;
    (!Ld(c.stiffness) || !Ld(c.damping, !0)) && (c.stiffness = Ce.stiffness, c.damping = Ce.damping);
  }
  return c;
}
function $r(i = Ce.visualDuration, l = Ce.bounce) {
  const s = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i, o = s.keyframes[0], c = s.keyframes[s.keyframes.length - 1], d = { done: !1, value: o }, { stiffness: f, damping: m, mass: p, duration: g, isResolvedFromDuration: v, isTimeDefined: y } = F2({ ...s }), S = (N) => y ? 0 : -/* @__PURE__ */ We(N), A = m / (2 * Math.sqrt(f * p)), T = /* @__PURE__ */ We(Math.sqrt(f / p)), w = A * T, E = {
    target: c,
    delta: c - o,
    velocity: S(s.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, z = () => {
    const N = Math.abs(E.delta) < 5;
    E.restSpeed = s.restSpeed || (N ? Ce.restSpeed.granular : Ce.restSpeed.default), E.restDelta = s.restDelta || (N ? Ce.restDelta.granular : Ce.restDelta.default);
  };
  z();
  let B, G, _;
  if (A < 1) {
    const N = jd(T, A), O = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    _ = () => {
      O.A = (E.velocity + w * E.delta) / N, O.sinC = w * O.A + E.delta * N, O.cosC = w * E.delta - O.A * N;
    };
    const ot = (ut) => {
      ut !== O.t && (O.t = ut, O.env = Math.exp(-w * ut), O.sin = Math.sin(N * ut), O.cos = Math.cos(N * ut));
    };
    B = (ut) => (ot(ut), E.target - O.env * (O.A * O.sin + E.delta * O.cos)), G = (ut) => (ot(ut), O.env * (O.sinC * O.sin + O.cosC * O.cos));
  } else if (A === 1) {
    B = (O) => E.target - Math.exp(-T * O) * (E.delta + (E.velocity + T * E.delta) * O);
    const N = { C: 0 };
    _ = () => {
      N.C = E.velocity + T * E.delta;
    }, G = (O) => Math.exp(-T * O) * (T * N.C * O - E.velocity);
  } else {
    const N = T * Math.sqrt(A * A - 1), O = w - N, ot = w + N, ut = y ? 1 / 0 : 300 / N, F = (lt, et) => Math.exp(et > ut ? -lt * ut - w * (et - ut) : -lt * et), I = { S: 0, F: 0 };
    _ = () => {
      const lt = (E.velocity + w * E.delta) / N;
      I.S = (E.delta + lt) / 2, I.F = (E.delta - lt) / 2;
    }, B = (lt) => E.target - I.S * F(O, lt) - I.F * F(ot, lt), G = (lt) => O * I.S * F(O, lt) + ot * I.F * F(ot, lt);
  }
  _();
  const Q = v && g || null, K = {
    calculatedDuration: Q,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (N, O) => {
      E.target = N[N.length - 1], E.delta = E.target - N[0], E.velocity = S(O), s.restSpeed && s.restDelta || z(), K.calculatedDuration = Q, d.done = !1, _();
    },
    velocity: (N) => /* @__PURE__ */ dn(G(N)),
    next: (N) => {
      const O = B(N);
      if (v)
        d.done = N >= g;
      else {
        const ot = /* @__PURE__ */ dn(G(N));
        d.done = Math.abs(ot) <= E.restSpeed && Math.abs(E.target - O) <= E.restDelta;
      }
      return d.value = d.done ? E.target : O, d;
    },
    toString: () => {
      const N = Math.min(Mh(K), Ch), O = b1((ot) => K.next(N * ot).value, N, 30);
      return N + "ms " + O;
    },
    toTransition: () => {
    }
  };
  return K;
}
$r.applyToOptions = (i) => {
  const l = Z2(i, 100, $r);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ dn(l.duration), i.type = "keyframes", i;
};
function tu({ keyframes: i, velocity: l = 0, power: s = 0.8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: f, min: m, max: p, restDelta: g = 0.5, restSpeed: v }) {
  const y = i[0], S = {
    done: !1,
    value: y
  }, A = (N) => N < m || N > p, T = (N) => m === void 0 ? p : p === void 0 || Math.abs(m - N) < Math.abs(p - N) ? m : p;
  let w = s * l;
  const E = y + w, z = f === void 0 ? E : f(E);
  z !== E && (w = z - y);
  const B = (N) => -w * Math.exp(-N / o), G = (N) => {
    const O = B(N);
    S.done = Math.abs(O) <= g, S.value = S.done ? z : z + O;
  };
  let _, Q;
  const K = (N) => {
    A(S.value) && (_ = N, Q = $r({
      keyframes: [S.value, T(S.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -B(N) / o * 1e3,
      damping: c,
      stiffness: d,
      restDelta: g,
      restSpeed: v
    }));
  };
  return K(0), {
    calculatedDuration: null,
    next: (N) => {
      let O = !1;
      return !Q && _ === void 0 && (O = !0, G(N), K(N)), _ !== void 0 && N >= _ ? Q.next(N - _) : (!O && G(N), S);
    }
  };
}
function J2(i, l, s) {
  const o = [], c = s || Hn.mix || wh, d = i.length - 1;
  for (let f = 0; f < d; f++) {
    let m = c(i[f], i[f + 1]);
    if (l) {
      const p = Array.isArray(l) ? l[f] || En : l;
      m = Is(p, m);
    }
    o.push(m);
  }
  return o;
}
function I2(i, l, { clamp: s = !0, ease: o, mixer: c } = {}) {
  const d = i.length;
  if (fu(d === l.length), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const f = i[0] === i[1];
  i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = J2(l, o, c), p = m.length, g = (v) => {
    if (f && v < i[0])
      return l[0];
    let y = 0;
    if (p > 1)
      for (; y < i.length - 2 && !(v < i[y + 1]); y++)
        ;
    const S = /* @__PURE__ */ xa(i[y], i[y + 1], v);
    return m[y](S);
  };
  return s ? (v) => g(kn(i[0], i[d - 1], v)) : g;
}
function W2(i, l) {
  const s = i[i.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = /* @__PURE__ */ xa(0, l, o);
    i.push(Qt(s, 1, c));
  }
}
function E1(i) {
  const l = [0];
  return W2(l, i.length - 1), l;
}
function $2(i, l) {
  return i.map((s) => s * l);
}
function tw(i, l) {
  return i.map(() => l || bh).splice(0, i.length - 1);
}
function Bi({ duration: i = 300, keyframes: l, times: s, ease: o = "easeInOut" }) {
  const c = /* @__PURE__ */ d2(o) ? o.map(Bv) : Bv(o) || bh, d = {
    done: !1,
    value: l[0]
  };
  if (l.length === 2 && !Array.isArray(c) && (!s || s.length !== 2 || s[0] === 0 && s[1] === 1)) {
    const [p, g] = l, v = p === g ? void 0 : (Hn.mix || wh)(p, g);
    return {
      calculatedDuration: i,
      next: (y) => (d.value = v ? v(c(i > 0 ? kn(0, 1, y / i) : 1)) : g, d.done = y >= i, d)
    };
  }
  const f = $2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === l.length ? s : E1(l),
    i
  ), m = I2(f, l, {
    ease: Array.isArray(c) ? c : tw(l, c)
  });
  return {
    calculatedDuration: i,
    next: (p) => (d.value = m(p), d.done = p >= i, d)
  };
}
const ew = 5;
function nw(i, l, s) {
  const o = Math.max(l - ew, 0);
  return /* @__PURE__ */ t1(s - i(o), l - o);
}
function iw(i, l, s = 0) {
  return l <= 0 ? s : i.velocity ? i.velocity(l) : nw((o) => i.next(o).value, l, i.next(l).value);
}
const aw = (i) => i !== null;
function ks(i, { repeat: l, repeatType: s = "loop" }, o, c = 1) {
  const d = i.filter(aw), m = c < 0 || l && s !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !m || o === void 0 ? d[m] : o;
}
const lw = {
  decay: tu,
  inertia: tu,
  tween: Bi,
  keyframes: Bi,
  spring: $r
};
function A1(i) {
  typeof i.type == "string" && (i.type = lw[i.type]);
}
const sw = 40, w1 = (i, l) => l - i > sw && !Hn.useManualTiming ? l : i;
function C1(i, l) {
  return {
    kind: i,
    animation: l,
    timestamp: te.now(),
    frameTimestamp: ce.timestamp,
    frameIsProcessing: ce.isProcessing
  };
}
function M1(i, l, s) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...C1("animation-start", i),
        options: s ? { ...l, ...s } : l
      });
    } catch {
    }
}
function ow(i, l) {
  const s = globalThis.__MOTION_INSPECT__;
  if (s)
    try {
      s({
        ...C1("layout-animation-start", i),
        node: l
      });
    } catch {
    }
}
class Dh {
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
  then(l, s) {
    return this.finished.then(l, s);
  }
}
const rw = (i) => i / 100, Bd = (i) => Math.round(i * 1e4) / 1e4;
class Gs extends Dh {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: s } = this.options;
      s && s.updatedAt !== te.now() && this.tick(te.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause(), M1(this, this.options);
  }
  initAnimation() {
    const { options: l } = this;
    A1(l);
    const { type: s = Bi, repeat: o = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = l;
    let { keyframes: m } = l;
    const p = s || Bi;
    p !== Bi && typeof m[0] != "number" && (this.mixKeyframes = Is(rw, wh(m[0], m[1])), m = [0, 100]);
    const g = p(m === l.keyframes ? l : { ...l, keyframes: m });
    d === "mirror" && (this.mirroredGenerator = p({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = Mh(g));
    const { calculatedDuration: v } = g;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (o + 1) - c, this.generator = g;
  }
  updateTime(l) {
    const s = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s;
  }
  tick(l, s = !1) {
    const { generator: o, totalDuration: c, calculatedDuration: d } = this;
    if (this.startTime === null)
      return o.next(0);
    const { delay: f = 0, keyframes: m, type: p, onUpdate: g, finalKeyframe: v } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = w1(this.startTime, l)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), s ? this.currentTime = l : this.updateTime(l);
    const y = this.currentTime - f * (this.playbackSpeed >= 0 ? 1 : -1), S = this.playbackSpeed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    const A = this.generate(this.currentTime, S);
    let { done: T } = A;
    !S && d !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const w = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return w && p !== tu && (A.value = ks(m, this.options, v, this.speed)), g && g(A.value), w && this.finish(), A;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(l) {
    return this.holdTime ?? Bd((l - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(l, s) {
    const { options: o, totalDuration: c } = this, d = this.at(l) - (o.delay || 0);
    return d >= c && o.type !== tu ? ks(o.keyframes, o, s ? void 0 : o.finalKeyframe) : this.generate(Math.max(d, 0), d < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(l, s) {
    const { generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: m } = this, { keyframes: p, repeat: g, repeatType: v, repeatDelay: y } = this.options;
    let S = l, A = o;
    if (g) {
      const w = Math.min(l, c) / m;
      let E = Math.floor(w), z = w % 1;
      !z && w >= 1 && (z = 1), z === 1 && E--, E = Math.min(E, g + 1), E % 2 && (v === "reverse" ? (z = 1 - z, y && (z -= y / m)) : v === "mirror" && (A = f)), S = kn(0, 1, z) * m;
    }
    let T;
    return s ? (this.delayState.value = p[0], T = this.delayState) : T = A.next(S), d && !s && (T.value = d(T.value)), T;
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(l, s) {
    return this.finished.then(l, s);
  }
  get duration() {
    return /* @__PURE__ */ We(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ We(l);
  }
  get time() {
    return /* @__PURE__ */ We(this.currentTime);
  }
  set time(l) {
    l = /* @__PURE__ */ dn(l), this.currentTime = l, this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = l : this.driver && (this.startTime = this.driver.now() - l / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = l, this.tick(l));
  }
  /**
   * Returns the generator's velocity at the current time in units/second.
   * Uses the analytical derivative when available (springs), avoiding
   * the MotionValue's frame-dependent velocity estimation.
   */
  getGeneratorVelocity() {
    return iw(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const s = this.playbackSpeed !== l;
    s && this.driver && this.updateTime(te.now()), this.playbackSpeed = l, s && this.driver && (this.time = /* @__PURE__ */ We(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = v1, startTime: s } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = s ?? (this.pendingStartTime = o)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(te.now()), this.holdTime = this.currentTime;
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
const uw = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function cw(i) {
  const [l, s] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [o] = s.match(xh) || [];
  if (!o)
    return i;
  const c = s.replace(o, "");
  let d = uw.has(l) ? 1 : 0;
  return o !== s && (d *= 100), l + "(" + d + c + ")";
}
const fw = /\b([a-z-]*)\(.*?\)/gu, Ud = {
  ...$e,
  getAnimatableNone: (i) => {
    const l = i.match(fw);
    return l ? l.map(cw).join(" ") : i;
  }
}, Hd = {
  ...$e,
  getAnimatableNone: (i) => {
    const l = $e.parse(i);
    return $e.createTransformer(i)(l.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, qv = {
  ...Dl,
  transform: Math.round
}, dw = {
  rotate: ai,
  /**
   * Internal channel for `transition.path` orientToPath. Composed onto
   * `rotate` at the transform-build sites so the user's `rotate` is
   * never read or overwritten. Not part of `transformPropOrder`.
   */
  pathRotation: ai,
  rotateX: ai,
  rotateY: ai,
  rotateZ: ai,
  scale: _r,
  scaleX: _r,
  scaleY: _r,
  scaleZ: _r,
  skew: ai,
  skewX: ai,
  skewY: ai,
  distance: gt,
  translateX: gt,
  translateY: gt,
  translateZ: gt,
  x: gt,
  y: gt,
  z: gt,
  perspective: gt,
  transformPerspective: gt,
  opacity: Us,
  originX: Uv,
  originY: Uv,
  originZ: gt
}, Ys = {
  // Border props
  borderWidth: gt,
  borderTopWidth: gt,
  borderRightWidth: gt,
  borderBottomWidth: gt,
  borderLeftWidth: gt,
  borderRadius: gt,
  borderTopLeftRadius: gt,
  borderTopRightRadius: gt,
  borderBottomRightRadius: gt,
  borderBottomLeftRadius: gt,
  // Positioning props
  width: gt,
  maxWidth: gt,
  height: gt,
  maxHeight: gt,
  top: gt,
  right: gt,
  bottom: gt,
  left: gt,
  inset: gt,
  insetBlock: gt,
  insetBlockStart: gt,
  insetBlockEnd: gt,
  insetInline: gt,
  insetInlineStart: gt,
  insetInlineEnd: gt,
  // Spacing props
  padding: gt,
  paddingTop: gt,
  paddingRight: gt,
  paddingBottom: gt,
  paddingLeft: gt,
  paddingBlock: gt,
  paddingBlockStart: gt,
  paddingBlockEnd: gt,
  paddingInline: gt,
  paddingInlineStart: gt,
  paddingInlineEnd: gt,
  margin: gt,
  marginTop: gt,
  marginRight: gt,
  marginBottom: gt,
  marginLeft: gt,
  marginBlock: gt,
  marginBlockStart: gt,
  marginBlockEnd: gt,
  marginInline: gt,
  marginInlineStart: gt,
  marginInlineEnd: gt,
  // Typography
  fontSize: gt,
  // Misc
  backgroundPositionX: gt,
  backgroundPositionY: gt,
  ...dw,
  zIndex: qv,
  // SVG
  fillOpacity: Us,
  strokeOpacity: Us,
  numOctaves: qv
}, hw = {
  ...Ys,
  // Color props
  color: me,
  backgroundColor: me,
  outlineColor: me,
  fill: me,
  stroke: me,
  // Border props
  borderColor: me,
  borderTopColor: me,
  borderRightColor: me,
  borderBottomColor: me,
  borderLeftColor: me,
  filter: Ud,
  WebkitFilter: Ud,
  mask: Hd,
  WebkitMask: Hd
}, D1 = (i) => hw[i], mw = /* @__PURE__ */ new Set([Ud, Hd]);
function zh(i, l) {
  let s = D1(i);
  return mw.has(s) || (s = $e), s.getAnimatableNone ? s.getAnimatableNone(l) : void 0;
}
function pw(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const va = (i) => i * 180 / Math.PI, kd = (i) => {
  const l = va(Math.atan2(i[1], i[0]));
  return Gd(l);
}, gw = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: kd,
  rotateZ: kd,
  skewX: (i) => va(Math.atan(i[1])),
  skewY: (i) => va(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Gd = (i) => (i = i % 360, i < 0 && (i += 360), i), Xv = kd, Qv = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), Zv = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), yw = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: Qv,
  scaleY: Zv,
  scale: (i) => (Qv(i) + Zv(i)) / 2,
  rotateX: (i) => Gd(va(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Gd(va(Math.atan2(-i[2], i[0]))),
  rotateZ: Xv,
  rotate: Xv,
  skewX: (i) => va(Math.atan(i[4])),
  skewY: (i) => va(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function qs(i) {
  return i.includes("scale") ? 1 : 0;
}
function Yd(i, l) {
  if (!i || i === "none")
    return qs(l);
  const s = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (s)
    o = yw, c = s;
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = gw, c = m;
  }
  if (!c)
    return qs(l);
  const d = o[l], f = c[1].split(",").map(bw);
  return typeof d == "function" ? d(f) : f[d];
}
const vw = (i, l) => {
  const { transform: s = "none" } = getComputedStyle(i);
  return Yd(s, l);
};
function bw(i) {
  return parseFloat(i.trim());
}
const li = [
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
], Ui = /* @__PURE__ */ new Set([...li, "pathRotation"]), Kv = (i) => i === Dl || i === gt, Sw = /* @__PURE__ */ new Set(["x", "y", "z"]), Tw = li.filter((i) => !Sw.has(i));
function xw(i) {
  const l = [];
  return Tw.forEach((s) => {
    const o = i.getValue(s);
    if (o !== void 0) {
      const c = o.get(), d = s.startsWith("scale") ? 1 : 0;
      if (c === d)
        return;
      l.push([s, c]), o.set(d);
    }
  }), l;
}
const Ew = /* @__PURE__ */ new Set(["bottom", "right"]);
function Pv(i, l, s, o, c, d) {
  const f = parseFloat(i);
  if (!isNaN(f))
    return f;
  const { min: m, max: p } = l()[s], g = p - m;
  return d === "border-box" ? g : g - parseFloat(o) - parseFloat(c);
}
const ba = {
  // Dimensions
  width: ({ width: i, paddingLeft: l = "0", paddingRight: s = "0", boxSizing: o }, c) => Pv(i, c, "x", l, s, o),
  height: ({ height: i, paddingTop: l = "0", paddingBottom: s = "0", boxSizing: o }, c) => Pv(i, c, "y", l, s, o),
  top: ({ top: i }) => parseFloat(i),
  left: ({ left: i }) => parseFloat(i),
  bottom: ({ top: i }, l) => {
    const { y: s } = l();
    return parseFloat(i) + (s.max - s.min);
  },
  right: ({ left: i }, l) => {
    const { x: s } = l();
    return parseFloat(i) + (s.max - s.min);
  },
  // Transform
  x: ({ transform: i }) => Yd(i, "x"),
  y: ({ transform: i }) => Yd(i, "y")
};
ba.translateX = ba.x;
ba.translateY = ba.y;
const Sa = /* @__PURE__ */ new Set();
let qd = !1, Xd = !1, Qd = !1;
function z1() {
  if (Xd) {
    const i = [], l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
    Sa.forEach((c) => {
      c.needsMeasurement && (i.push(c), l.add(c.element), Ew.has(c.name) && s.add(c.element));
    });
    const o = /* @__PURE__ */ new Map();
    s.forEach((c) => {
      const d = xw(c);
      d.length && (o.set(c, d), c.render());
    }), i.forEach((c) => c.measureInitialState()), l.forEach((c) => {
      c.render();
      const d = o.get(c);
      d && d.forEach(([f, m]) => {
        c.getValue(f)?.set(m);
      });
    }), i.forEach((c) => c.measureEndState()), i.forEach((c) => {
      c.suspendedScrollY !== void 0 && window.scrollTo(0, c.suspendedScrollY);
    });
  }
  Xd = !1, qd = !1, Sa.forEach((i) => i.complete(Qd)), Sa.clear();
}
function O1() {
  Sa.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Xd = !0);
  });
}
function Aw() {
  Qd = !0, O1(), z1(), Qd = !1;
}
function ww(i, l, s) {
  if (typeof i == "string") {
    if (ph(i) || gh(i))
      return parseFloat(i);
    if (!$e.test(i) && $e.test(s))
      return zh(l, s);
  }
  return i ?? void 0;
}
class Oh {
  constructor(l, s, o, c, d, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = s, this.name = o, this.motionValue = c, this.element = d, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Sa.add(this), qd || (qd = !0, Kt.read(O1), Kt.resolveKeyframes(z1))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: s, element: o, motionValue: c } = this;
    if (l[0] === null) {
      const d = c?.get(), f = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (o && s) {
        const m = ww(o.readValue(s, f), s, f);
        m !== void 0 && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = f), c && d === void 0 && c.set(l[0]);
    }
    pw(l);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), Sa.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (Sa.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Cw = (i) => i.startsWith("--");
function N1(i, l, s) {
  Cw(l) ? i.style.setProperty(l, s) : i.style[l] = s;
}
const Mw = {};
function R1(i, l) {
  const s = /* @__PURE__ */ $b(i);
  return () => Mw[l] ?? s();
}
const Dw = /* @__PURE__ */ R1(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Nh = /* @__PURE__ */ R1(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Tl = ([i, l, s, o]) => `cubic-bezier(${i}, ${l}, ${s}, ${o})`, Zd = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Tl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Tl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Tl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Tl([0.33, 1.53, 0.69, 0.99])
};
function _1(i, l) {
  if (i)
    return typeof i == "function" ? Nh() ? b1(i, l) : "ease-out" : /* @__PURE__ */ Sh(i) ? Tl(i) : Array.isArray(i) ? i.map((s) => _1(s, l) || Zd.easeOut) : Zd[i];
}
function zw(i, l, s, { delay: o = 0, duration: c = 300, repeat: d = 0, repeatType: f = "loop", ease: m = "easeOut", times: p } = {}, g = void 0) {
  const v = {
    [l]: s
  };
  p && (v.offset = p);
  const y = _1(m, c);
  Array.isArray(y) && (v.easing = y);
  const S = {
    delay: o,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return g && (S.pseudoElement = g), i.animate(v, S);
}
function V1(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Ow({ type: i, ...l }) {
  return V1(i) && Nh() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class j1 extends Dh {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: s, name: o, keyframes: c, pseudoElement: d, allowFlatten: f = !1, finalKeyframe: m, onComplete: p } = l;
    this.isPseudoElement = !!d, this.allowFlatten = f, this.options = l, fu(typeof l.type != "string");
    const g = Ow(l);
    this.animation = zw(s, o, c, g, d), g.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = ks(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), N1(s, o, v), this.animation.cancel();
      }
      p?.(), this.notifyFinished();
    }, M1(this, l, g);
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
    return /* @__PURE__ */ We(Number(l));
  }
  get iterationDuration() {
    const { delay: l = 0 } = this.options || {};
    return this.duration + /* @__PURE__ */ We(l);
  }
  get time() {
    return /* @__PURE__ */ We(Number(this.animation.currentTime) || 0);
  }
  set time(l) {
    const s = this.finishedTime !== null;
    this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = /* @__PURE__ */ dn(l), s && this.animation.pause();
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
  attachTimeline({ timeline: l, onAttach: s, observe: o }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && Dw() ? (this.animation.timeline = l, s?.(this.animation), En) : o(this);
  }
}
const L1 = {
  anticipate: l1,
  backInOut: a1,
  circInOut: o1
};
function Nw(i) {
  return i in L1;
}
function Rw(i) {
  typeof i.ease == "string" && Nw(i.ease) && (i.ease = L1[i.ease]);
}
const eu = 10;
class _w extends j1 {
  constructor(l) {
    Rw(l), A1(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * The animation's time now, in ms. Wall-clock rather than WAAPI's
   * currentTime while running, as under CPU load currentTime may not
   * reflect the actual elapsed time, causing incorrect sampling and
   * visual jumps.
   */
  elapsed() {
    return this.state === "running" ? (te.now() - this.startTime) * this.speed : this.time * 1e3;
  }
  /**
   * The value at a time, from a renderless JS animation.
   */
  sample(l) {
    if (!this.sampler) {
      const { motionValue: s, onUpdate: o, onComplete: c, onPlay: d, onStop: f, element: m, ...p } = this.options;
      this.sampler = new Gs({ ...p, autoplay: !1 }), this.sampler.stop();
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
    const { motionValue: s, element: o, name: c } = this.options;
    if (!s)
      return;
    if (l !== void 0) {
      s.set(l);
      return;
    }
    const { speed: d } = this, f = this.elapsed(), m = this.state === "running" && d ? kn(0, eu, f) : 0, p = this.sample(f);
    o && c && N1(o, c, p), s.setWithVelocity(this.sample(f - m * Math.sign(d)), p, m / Math.abs(d || 1));
  }
}
const Fv = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
($e.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function Vw(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let s = 0; s < i.length; s++)
    if (i[s] !== l)
      return !0;
}
function jw(i, l, s, o) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = i[i.length - 1], f = Fv(c, l), m = Fv(d, l);
  return !f || !m ? !1 : Vw(i) || (s === "spring" || V1(s)) && o;
}
function Kd(i) {
  i.duration = 0, i.type = "keyframes";
}
const Pd = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Lw = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Bw(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && Lw.test(i[l]))
      return !0;
  return !1;
}
const Jv = /* @__PURE__ */ new Set([
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
]), B1 = /* @__PURE__ */ $b(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Uw(i) {
  const { motionValue: l, name: s, repeatDelay: o, repeatType: c, damping: d, type: f, keyframes: m } = i;
  if (!s || !(Pd.has(s) || Jv.has(s)))
    return !1;
  const p = l?.owner?.current;
  if (!(p instanceof HTMLElement) && !(p instanceof SVGElement))
    return !1;
  const { onUpdate: g, transformTemplate: v } = l.owner.getProps();
  return B1() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Pd.has(s) || Jv.has(s) && Bw(m)) && (s !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !g && !o && c !== "mirror" && d !== 0 && f !== "inertia";
}
const nu = (i, l) => l && typeof i == "number" ? l.transform(i) : i, U1 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Hw = li.length;
function H1(i, l, s) {
  let o = "", c = !0;
  for (let f = 0; f < Hw; f++) {
    const m = li[f], p = i[m];
    if (p === void 0)
      continue;
    let g = !0;
    if (typeof p == "number")
      g = p === (m.startsWith("scale") ? 1 : 0);
    else {
      const v = parseFloat(p);
      g = m.startsWith("scale") ? v === 1 : v === 0;
    }
    if (!g || s) {
      const v = nu(p, Ys[m]);
      if (!g) {
        c = !1;
        const y = U1[m] || m;
        o += `${y}(${v}) `;
      }
      s && (l[m] = v);
    }
  }
  const d = i.pathRotation;
  return d && (c = !1, o += `rotate(${nu(d, Ys.pathRotation)}) `), o = o.trim(), s ? o = s(l, c ? "" : o) : c && (o = "none"), o;
}
const Cl = /* @__PURE__ */ new WeakMap(), kw = 200, dd = 1e-3, Gw = 0.1, Yw = 1e-3, qw = 100, Xw = (i) => /^(linear|ease(In|Out|InOut))$/.test(i), hd = (i, l) => i - l, Iv = (i, l, s) => {
  const o = [];
  for (let c = 0; c <= s; c++)
    o.push(Qt(i, l, c / s));
  return o;
}, kr = (i) => i.motionValue.owner, md = (i) => Cl.get(i), xl = (i, l) => i.latestValues ? i.latestValues[l] : i.getValue(l)?.get(), Qw = ({ name: i, motionValue: l }) => i && li.includes(i) && l?.owner?.current instanceof HTMLElement && B1() && Nh();
function Zw(i) {
  const l = kr(i), { onUpdate: s, transformTemplate: o } = l.getProps();
  return (
    /**
     * A handoff from an optimised appear animation is already running
     * on its own WAAPI animation. onUpdate needs every value, every
     * frame.
     */
    !i.isHandoff && !s && !i.hasOnUpdate && /**
     * transformTemplate could output anything.
     */
    !o && i.type !== "inertia" && /**
     * A literal transform, or pathRotation, replaces or adds to the
     * transform we'd build. styleEffect builds its own as "none".
     */
    (xl(l, "transform") || "none") === "none" && !xl(l, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !l.projection?.isProjecting()
  );
}
class Kw extends Gs {
  constructor(l) {
    const s = kr(l).current, { driver: o = v1 } = l, c = Zw(l);
    l.driver = (f) => {
      const m = o(f);
      return {
        js: m,
        now: m.now,
        start: (p = !0) => {
          const g = md(s);
          !g || g.isJS ? m.start(p) : g.schedule(!1, !p);
        },
        stop: () => {
          m.stop();
          const p = md(s);
          p?.schedule(!p.isFinishing);
        }
      };
    }, super(l), this.canAccelerate = c;
    const { stop: d } = this;
    this.stop = () => {
      this.isAccelerated() && this.sync(), d();
    };
  }
  get group() {
    return md(kr(this.options).current);
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
    const { startTime: l, speed: s, totalDuration: o } = this, { delay: c = 0, repeatType: d } = this.options;
    return this.holdTime !== null ? [1 / 0, 0] : o === 1 / 0 ? [
      l + c / s,
      this.resolvedDuration * (d === "loop" ? 1 : 2) / s || 1
    ] : [l + (c + o) / s, 0];
  }
  /**
   * Whether this is running, or paused, on the compositor.
   */
  isAccelerated() {
    const { group: l, state: s } = this;
    return l?.tracks.has(this) && !l.isJS && this.canAccelerate && (s === "running" || s === "paused");
  }
  /**
   * The value now, while this runs on the compositor and so doesn't
   * set its motion value every frame.
   */
  liveValue() {
    return this.isAccelerated() ? this.sampleAt(te.now()) : void 0;
  }
  /**
   * If this is a two-keyframe tween whose easing WAAPI runs exactly,
   * when it starts and stops moving, and that easing.
   */
  tween() {
    const { keyframes: l, type: s, ease: o, times: c, repeat: d, delay: f = 0 } = this.options, m = /* @__PURE__ */ Sh(o) ? Tl(o) : Xw(o) && Zd[o];
    if (m && !d && !c && l.length === 2 && s === Bi && this.holdTime === null) {
      const p = this.startTime + f / this.speed;
      return [p, p + this.resolvedDuration / this.speed, m];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(l, s) {
    const { startTime: o, speed: c, resolvedDuration: d, options: f } = this, { delay: m = 0, repeat: p = 0, repeatDelay: g = 0, repeatType: v, times: y, keyframes: S, type: A } = f, T = (A || Bi) === Bi ? y || E1(S) : [0, 1], w = o + m / c, E = [];
    if (this.holdTime !== null || !(d > 0))
      return E;
    for (let z = Math.max(0, Math.floor((l - w) * c / d)); z <= p; z++) {
      const B = w + z * d / c;
      if (B > s)
        break;
      for (const G of T) {
        const _ = B + (z % 2 && v && v !== "loop" ? 1 - G : G) * (d - g) / c;
        _ > l && _ < s && E.push(_);
      }
    }
    return E;
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
    const l = te.now();
    this.options.motionValue.setWithVelocity(this.sampleAt(l - eu, !0), this.sampleAt(l, !0), eu);
  }
  play() {
    this.isStopped || ((this.group || Pw(kr(this.options))).tracks.add(this), super.play());
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
    l && !l.isJS && this.canAccelerate && this.tick(te.now());
  }
  /**
   * Without a tick to rebase it, a held time still includes the delay,
   * so take it off here, as a JS animation does on its next tick.
   */
  get time() {
    return this.isAccelerated() ? /* @__PURE__ */ We(kn(0, this.totalDuration, this.at(te.now()) - (this.options.delay || 0))) : super.time;
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
function Pw(i) {
  const l = i.current, s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  let c = {}, d = [], f = /* @__PURE__ */ new Map(), m = [], p = !1, g = !1, v = !1, y = -1 / 0;
  const S = (F) => {
    for (const I of s)
      if (I.name === F)
        return !0;
  }, A = (F, I) => {
    const lt = {};
    for (const et of F === void 0 ? li : d) {
      const nt = o.get(et), X = F === void 0 ? xl(i, et) : nt ? nt.sampleAt(I > F && !nt.timing()[1] ? I : F) : c[et];
      X !== void 0 && (lt[et] = X);
    }
    return lt;
  }, T = (F, I) => {
    let lt = "";
    const et = A(F, I);
    for (const nt in et)
      lt += (U1[nt] || nt) + "(" + nu(et[nt], Ys[nt]) + ") ";
    return lt || "none";
  }, w = (F = A()) => {
    l.style.transform = H1(F, {});
  }, E = (F = !0) => {
    F && w(), m.forEach(({ animation: I }) => I.cancel()), m = [];
  }, z = (F, I, lt = 1 / 0) => {
    const et = { animation: F, offset: I, end: lt };
    F.startTime = te.now() + I, lt < 1 / 0 && (F.onfinish = () => {
      et.isDone = !0, m.some((nt) => nt.end === 1 / 0) && (F.cancel(), m = m.filter((nt) => nt !== et)), ut.schedule(!1);
    }), F.oncancel = () => m.includes(et) && ut.demote(), m.push(et);
  }, B = (F, I, lt) => {
    const et = (X, J) => Math.abs(F(J) - F(X)), nt = et(I, lt);
    for (; lt - I > 0.01; ) {
      const X = (I + lt) / 2;
      et(I, X) > et(X, lt) ? lt = X : I = X;
    }
    return et(I, lt) > nt / 2 ? [I, lt] : [];
  }, G = (F, I, lt, et) => {
    const nt = Math.min(kw, Math.max(2, Math.ceil((lt - I) / eu)));
    if (et.length * 4 > nt)
      return;
    const X = Iv(I, lt, nt).concat(et).sort(hd), J = (vt) => /* @__PURE__ */ xa(I, lt, vt);
    let it, at;
    for (const vt of F) {
      const At = X.map((W) => vt.numberAt(W)), [C] = At, L = At[At.length - 1] - C, tt = At.map((W) => L ? (W - C) / L : W - C);
      if (L) {
        if (!it)
          it = tt, at = (W) => (vt.numberAt(W) - C) / L;
        else if (tt.some((W, ft) => !(Math.abs(W - it[ft]) <= dd)))
          return;
      } else if (tt.some((W) => !(Math.abs(W) <= dd)))
        return;
    }
    if (!it || it.every((vt, At) => Math.abs(vt - J(X[At])) <= dd))
      return "linear";
    const Y = [], yt = (vt, At = at(vt)) => Y.push(Bd(At) + " " + Bd(J(vt) * 100) + "%");
    return it.forEach((vt, At) => {
      At && Math.abs(vt - it[At - 1]) > 0.2 && B(at, X[At - 1], X[At]).forEach((C) => yt(C)), yt(X[At], vt);
    }), "linear(" + Y + ")";
  }, _ = (F, I, lt, et) => {
    const nt = [I], X = (Y, yt) => F.every((vt) => !(Math.abs(vt.numberAt((Y + yt) / 2) - (vt.numberAt(Y) + vt.numberAt(yt)) / 2) > (vt.name.startsWith("scale") ? Yw : Gw))), J = (Y, yt, vt) => {
      if (yt - Y < 1 || X(Y, yt))
        nt.push(yt);
      else if (vt < 4)
        J(Y, (Y + yt) / 2, vt + 1), J((Y + yt) / 2, yt, vt + 1);
      else {
        for (const At of F)
          nt.push(...B((C) => At.numberAt(C), Y, yt));
        nt.push(yt);
      }
    }, it = Iv(I, lt, Math.ceil((lt - I) / 100));
    for (const Y of et)
      it.push(Y, Math.min(Y + 0.01, lt));
    let at = I;
    for (const Y of it.sort(hd))
      Y > at && J(at, Y, 0), at = Y;
    return nt.sort(hd);
  }, Q = (F) => {
    let I;
    for (const lt of F) {
      const et = lt.tween();
      if (!et || I?.some((nt, X) => X < 2 ? Math.abs(et[X] - nt) > 1 : et[X] !== nt))
        return;
      I = et;
    }
    return I;
  }, K = (F, I, lt, et = { fill: "both" }, nt, X) => {
    const J = F.flatMap((vt) => vt.boundaries(I, lt)), it = X || G(F, I, lt, J), at = it ? [I, lt] : _(F, I, lt, J), Y = at.map((vt) => T(vt, nt));
    let yt = { transform: Y };
    return it || (yt.offset = at.map((vt) => /* @__PURE__ */ xa(I, lt, vt))), Y.every((vt) => vt === Y[0]) && (w(A(I, nt)), yt = null), l.animate(yt, {
      ...et,
      duration: lt - I,
      easing: it || "linear"
    });
  }, N = (F) => {
    let I = F, lt = 0, et = 0;
    const nt = [], X = [], J = /* @__PURE__ */ new Set();
    o.clear(), f = /* @__PURE__ */ new Map();
    for (const at of s) {
      o.set(at.name, at);
      const [Y, yt] = at.timing(), vt = Y === 1 / 0;
      if (f.set(at, [at.at(F), at.speed, vt]), vt) {
        at.sync();
        continue;
      }
      if (at.speed < 0)
        return;
      if (yt) {
        if (lt) {
          const At = (Y - et) / yt;
          if (Math.abs(yt - lt) > 1 || Math.abs(At - Math.round(At)) * lt > 1)
            return;
        } else
          lt = yt, et = Y;
        X.push(at);
      } else
        J.add(Y);
      nt.push(at), I = Math.max(I, Y);
    }
    c = {}, d = li.filter((at) => {
      if (o.has(at))
        return !0;
      const Y = c[at] = xl(i, at);
      return Y !== void 0 && parseFloat(Y) !== (at.startsWith("scale") ? 1 : 0);
    }), E(!1);
    const it = !lt && Q(nt);
    try {
      if (it && it[1] > F) {
        const [at, Y, yt] = it;
        z(K(nt, at, Y, void 0, void 0, yt), at - F, Y - at);
      } else I > F && (z(K(nt, F, I), 0, I - F), J.forEach((at) => at < I - 1 && z(l.animate(null, {
        duration: at - F
      }), 0, at - F)));
      if (lt) {
        const at = et + Math.floor((I - et) / lt) * lt;
        z(K(X, at, at + lt, {
          iterations: 1 / 0,
          iterationStart: (I - at) / lt,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, I), I - F);
      }
    } catch {
      return;
    }
    return m.length || E(), !0;
  }, O = (F) => {
    let I, lt = 0;
    for (const et of s) {
      const nt = f.get(et);
      if (!nt)
        return !1;
      const [X, J, it] = nt, at = et.at(F), Y = et.timing()[0] === 1 / 0;
      if (it) {
        if (Y && at === X)
          continue;
        return !1;
      }
      const yt = (at - X) / J, vt = Y ? 0 : et.speed / J;
      if (I === void 0)
        I = yt, lt = vt;
      else if (Math.abs(yt - I) > 1 || vt !== lt)
        return !1;
    }
    if (I === void 0)
      return !0;
    if (!m.length)
      return !1;
    for (const { offset: et, end: nt, isDone: X } of m) {
      const J = I - et;
      if (nt < 1 / 0 && (X ? J < nt - 1 : J < 0 || J >= nt))
        return !1;
    }
    for (const { animation: et, offset: nt, isDone: X } of m) {
      if (X)
        continue;
      const J = I - nt;
      lt ? (et.playbackRate = lt, et.startTime = F - J / lt) : (et.pause(), et.currentTime = J);
    }
    return !0;
  }, ot = () => {
    const F = te.now();
    if (ut.isJS || (ut.isFinishing = !0, s.forEach((et) => {
      const [nt, X] = et.timing();
      et.state === "running" && et.speed > 0 && !X && nt <= F + 1 && (et.complete(), c[et.name] = xl(i, et.name), f.has(et) || (p = !0));
    }), ut.isFinishing = !1), g = !1, s.forEach(({ state: et }, nt) => {
      (et === "idle" || et === "finished") && s.delete(nt);
    }), !s.size) {
      Cl.delete(l), ut.isJS || E();
      return;
    }
    for (const et of s)
      if (!et.canAccelerate)
        return ut.demote(!0);
    ut.isJS && (ut.isJS = !1, p = !0, s.forEach((et) => et.js?.stop()));
    const I = p, lt = v;
    if (p = v = !1, I || !O(F)) {
      if (lt) {
        if (F - y < qw)
          return ut.demote();
        y = F;
      }
      if (!N(F))
        return ut.demote();
    }
  }, ut = {
    tracks: s,
    isJS: !1,
    isFinishing: !1,
    schedule(F, I) {
      p || (p = F), v || (v = !!I), g || (g = !0, ce.isProcessing ? Kt.render(ot, !1, !0) : queueMicrotask(ot));
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (!ut.isJS) {
        for (const F in c)
          if (xl(i, F) !== c[F] && !S(F))
            return ut.schedule(!0, !0);
      }
    },
    demote(F) {
      ut.isJS || (s.forEach((I) => {
        I.isAccelerated() && I.sync(), F || (I.canAccelerate = !1);
      }), ut.isJS = !0, f = /* @__PURE__ */ new Map(), E(), s.forEach((I) => I.state === "running" && I.js?.start()));
    }
  };
  return Cl.set(l, ut), ut;
}
class Fw extends Dh {
  constructor(l) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = te.now();
    const { keyframes: s, name: o, motionValue: c, element: d } = l, f = l;
    f.autoplay ?? (f.autoplay = !0), f.delay ?? (f.delay = 0), f.type ?? (f.type = "keyframes"), f.repeat ?? (f.repeat = 0), f.repeatDelay ?? (f.repeatDelay = 0), f.repeatType ?? (f.repeatType = "loop");
    const m = d?.KeyframeResolver || Oh;
    this.keyframeResolver = new m(s, (p, g, v) => this.onKeyframesResolved(p, g, f, !v), o, c, d), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, s, o, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: m, delay: p, isHandoff: g, onUpdate: v } = o;
    this.resolvedAt = te.now();
    let y = !0;
    jw(l, d, f, m) || (y = !1, (Hn.instantAnimations || !p) && v?.(ks(l, o, s)), l[0] = l[l.length - 1], Kd(o), o.repeat = 0);
    const { onComplete: S } = o;
    o.finalKeyframe = s, o.keyframes = l, o.onComplete = () => {
      S?.(), this.notifyFinished();
    };
    const A = y && !g && Uw(o), T = !A && Qw(o);
    c && (A || T || this.resolvedAt !== this.createdAt) && (o.startTime ?? (o.startTime = w1(this.createdAt, this.resolvedAt)));
    let w;
    if (A) {
      o.element = o.motionValue?.owner?.current;
      try {
        w = new _w(o);
      } catch {
        w = new Gs(o);
      }
    } else T ? w = new Kw(o) : w = new Gs(o);
    this.pendingTimeline && (this.stopTimeline = w.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = w;
  }
  get finished() {
    return this._animation ? this._animation.finished : super.finished;
  }
  then(l, s) {
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
    return this._animation || (this.keyframeResolver?.resume(), Aw()), this._animation;
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
function k1(i, l, s, o = 0, c = 1) {
  const d = Array.from(i).sort((g, v) => g.sortNodePosition(v)).indexOf(l), f = i.size, m = (f - 1) * o;
  return typeof s == "function" ? s(d, f) : c === 1 ? d * o : m - d * o;
}
const Wv = 30, Jw = (i) => !isNaN(parseFloat(i));
class Iw {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, s = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      const c = te.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.notifyChange(), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = s.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = te.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = Jw(this.current));
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
  on(l, s) {
    var o;
    return l === "change" ? this.onChangeSubscribe(s) : ((o = this.events)[l] || (o[l] = new Ir())).add(s);
  }
  onChangeSubscribe(l) {
    const { events: s } = this;
    return !s.change && !this.changeSubscriber ? this.changeSubscriber = l : (s.change || (s.change = new Ir(), s.change.add(this.changeSubscriber), this.changeSubscriber = void 0), s.change.add(l)), () => {
      this.changeSubscriber === l ? this.changeSubscriber = void 0 : s.change?.remove(l), this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    Kt.read(() => {
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
  attach(l, s) {
    this.passiveEffect = l, this.stopPassiveEffect = s;
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
  setWithVelocity(l, s, o) {
    this.set(s), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - o;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(l, s = !0) {
    this.updateAndNotify(l), this.prev = l, this.prevUpdatedAt = this.prevFrameValue = void 0, s && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  dirty() {
    this.notifyChange();
  }
  notifyChange() {
    const { current: l, changeSubscriber: s } = this;
    s ? s(l) : this.events.change?.notify(l);
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
    const l = te.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Wv)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Wv);
    return /* @__PURE__ */ t1(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
    return this.stop(), new Promise((s) => {
      this.hasAnimated = !0;
      let o = !1, c;
      c = l(() => {
        o = !0, this.events.animationComplete?.notify(), this.animation === c && this.clearAnimation(), s();
      }), o || (this.animation = c), this.events.animationStart?.notify();
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
function Ml(i, l) {
  return new Iw(i, l);
}
function G1(i, l) {
  if (i?.inherit && l) {
    const { inherit: s, ...o } = i;
    return { ...l, ...o };
  }
  return i;
}
function Rh(i, l) {
  const s = i?.[l] ?? i?.default ?? i;
  return s !== i ? G1(s, i) : s;
}
const Ww = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, $w = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), tC = {
  type: "keyframes",
  duration: 0.8
}, eC = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, nC = (i, { keyframes: l }) => l.length > 2 ? tC : Ui.has(i) ? i.startsWith("scale") ? $w(l[1]) : Ww : eC, iC = /* @__PURE__ */ new Set([
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
function aC(i) {
  for (const l in i)
    if (!iC.has(l))
      return !0;
  return !1;
}
const _h = (i, l, s, o = {}, c, d) => (f) => {
  const m = Rh(o, i) || {}, p = m.delay || o.delay || 0;
  let { elapsed: g = 0 } = o;
  g = g - /* @__PURE__ */ dn(p);
  const v = {
    keyframes: Array.isArray(s) ? s : [null, s],
    ease: "easeOut",
    velocity: l.getVelocity(),
    ...m,
    delay: -g,
    onUpdate: (S) => {
      l.set(S), m.onUpdate && m.onUpdate(S);
    },
    onComplete: () => {
      f(), m.onComplete && m.onComplete();
    },
    name: i,
    motionValue: l,
    element: d ? void 0 : c,
    hasOnUpdate: !!m.onUpdate
  };
  aC(m) || Object.assign(v, nC(i, v)), v.duration && (v.duration = /* @__PURE__ */ dn(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ dn(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let y = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Kd(v), v.delay === 0 && (y = !0)), (Hn.instantAnimations || Hn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, Kd(v), v.delay = 0), v.allowFlatten = !m.type && !m.ease, y && !d && l.get() !== void 0) {
    const S = ks(v.keyframes, m);
    if (S !== void 0) {
      Kt.update(() => {
        v.onUpdate(S), v.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new Gs(v) : new Fw(v);
}, lC = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function sC(i) {
  const l = lC.exec(i);
  if (!l)
    return [,];
  const [, s, o, c] = l;
  return [`--${s ?? o}`, c];
}
function Y1(i, l, s = 1) {
  const [o, c] = sC(i);
  if (!o)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const f = d.trim();
    return ph(f) ? parseFloat(f) : f;
  }
  return Th(c) ? Y1(c, l, s + 1) : c;
}
function oC(i) {
  const l = [{}, {}];
  return i?.values.forEach((s, o) => {
    l[0][o] = s.get(), l[1][o] = s.getVelocity();
  }), l;
}
function q1(i, l, s, o) {
  const c = (d) => typeof d == "function" ? d(s !== void 0 ? s : i.custom, ...oC(o)) : d;
  return l = c(l), typeof l == "string" && (l = i.variants && i.variants[l]), c(l);
}
function Ta(i, l, s) {
  return q1(i.getProps(), l, s, i);
}
const X1 = (i, l) => l === "exit" ? i.presenceContext?.custom : void 0, Q1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...li
]), rC = (i) => Array.isArray(i);
function uC(i, l, s) {
  i.hasValue(l) ? i.getValue(l).set(s) : i.addValue(l, Ml(s));
}
function cC(i) {
  return rC(i) ? i[i.length - 1] || 0 : i;
}
function fC(i, l) {
  const s = Ta(i, l);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...o };
  for (const f in d) {
    const m = cC(d[f]);
    uC(i, f, m);
  }
}
const Me = (i) => !!(i && i.getVelocity);
function dC(i) {
  return !!(Me(i) && i.add);
}
function Fd(i, l) {
  const s = i.getValue("willChange");
  if (dC(s))
    return s.add(l);
  if (!s && Hn.WillChange) {
    const o = new Hn.WillChange("auto");
    i.addValue("willChange", o), o.add(l);
  }
}
function Vh(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const hC = "framerAppearId", Z1 = "data-" + Vh(hC);
function K1(i) {
  return i.props[Z1];
}
const mC = typeof window < "u";
function pC({ protectedKeys: i, needsAnimating: l }, s) {
  const o = s in i && !l[s];
  return l[s] = !1, o;
}
function P1(i, l, { delay: s = 0, transitionOverride: o, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...m } = l;
  const p = i.getDefaultTransition();
  d = d ? G1(d, p) : p;
  const g = d?.reduceMotion, v = d?.skipAnimations;
  o && (d = o);
  const y = [], S = c && i.animationState?.getState()[c], A = d?.path;
  A && A.animateVisualElement(i, m, d, s, y);
  for (const T in m) {
    const w = i.getValue(T, i.latestValues[T] ?? null), E = m[T];
    if (E === void 0 || S && pC(S, T))
      continue;
    const z = {
      delay: s,
      ...Rh(d || {}, T)
    };
    v && (z.skipAnimations = !0);
    const B = w.get();
    if (B !== void 0 && !w.isAnimating() && !Array.isArray(E) && E === B && !z.velocity) {
      Kt.update(() => w.set(E));
      continue;
    }
    let G = !1;
    if (mC && window.MotionHandoffAnimation) {
      const K = K1(i);
      if (K) {
        const N = window.MotionHandoffAnimation(K, T, Kt);
        N !== null && (z.startTime = N, G = !0);
      }
    }
    Fd(i, T);
    const _ = g ?? i.shouldReduceMotion;
    w.start(_h(T, w, E, _ && Q1.has(T) ? { type: !1 } : z, i, G));
    const Q = w.animation;
    Q && y.push(Q);
  }
  if (f) {
    const T = () => Kt.update(() => {
      f && fC(i, f);
    });
    y.length ? Promise.all(y).then(T) : T();
  }
  return y;
}
function Jd(i, l, s = {}) {
  const o = Ta(i, l, X1(i, s.type)), c = s.transitionOverride || (o?.transition ?? (i.getDefaultTransition() || {})), d = () => Promise.all(o ? P1(i, o, s) : []), f = (p = 0) => {
    const { variantChildren: g } = i, { delayChildren: v = 0, staggerChildren: y, staggerDirection: S } = c, A = [];
    return g?.forEach((T) => {
      T.notify("AnimationStart", l), A.push(Jd(T, l, {
        ...s,
        delay: p + (typeof v == "function" ? 0 : v) + k1(g, T, v, y, S)
      }).then(() => T.notify("AnimationComplete", l)));
    }), Promise.all(A);
  }, { when: m } = c;
  return m ? m === "beforeChildren" ? d().then(() => f()) : f().then(d) : Promise.all([d(), f(s.delay)]);
}
function gC(i, l, s = {}) {
  return i.notify("AnimationStart", l), (Array.isArray(l) ? Promise.all(l.map((c) => Jd(i, c, s))) : typeof l == "string" ? Jd(i, l, s) : Promise.all(P1(i, Ta(i, l, s.custom), s))).then(() => {
    i.notify("AnimationComplete", l);
  });
}
const yC = {
  test: (i) => i === "auto",
  parse: (i) => i
}, vC = (i) => (l) => l.test(i), bC = [Dl, gt, Un, ai, E2, x2, yC], $v = (i) => bC.find(vC(i));
function SC(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || gh(i) : !0;
}
const TC = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function xC(i, l, s) {
  let o = 0, c;
  for (; o < i.length && !c; ) {
    const d = i[o];
    typeof d == "string" && !TC.has(d) && z2(d) && (c = i[o]), o++;
  }
  if (c && s)
    for (const d of l)
      i[d] !== c && (i[d] = zh(s, c));
}
class EC extends Oh {
  constructor(l, s, o, c, d) {
    super(l, s, o, c, d, !0);
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
    const { unresolvedKeyframes: l, element: s, motionValue: o } = this, c = l[0] ?? o?.get();
    if (!s?.current || c === void 0)
      return !1;
    for (let d = 0; d < l.length; d++)
      if (ld(d ? l[d] : c))
        return !1;
    return !0;
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: s, name: o } = this;
    if (!s || !s.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let y = l[v];
      if (typeof y == "string" && (y = y.trim(), Th(y))) {
        const S = Y1(y, s.current);
        S !== void 0 && (l[v] = S), v === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !Q1.has(o) || l.length !== 2)
      return;
    const [c, d] = l;
    if (typeof c == "number" && typeof d == "number")
      return;
    const f = $v(c), m = $v(d), p = ld(c), g = ld(d);
    if (p !== g && ba[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (Kv(f) && Kv(m))
        for (let v = 0; v < l.length; v++) {
          const y = l[v];
          typeof y == "string" && (l[v] = parseFloat(y));
        }
      else ba[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: s } = this, o = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || SC(l[c])) && o.push(c);
    o.length && xC(l, o, s);
  }
  measure() {
    const { element: l, name: s } = this;
    return ba[s](window.getComputedStyle(l.current), () => l.measureViewportBox());
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: s, name: o } = this;
    if (!l || !l.current)
      return;
    o === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), s[0] = this.measuredOrigin;
    const c = s[s.length - 1];
    c !== void 0 && this.motionValue?.jump(c, !1);
  }
  measureEndState() {
    const { element: l, unresolvedKeyframes: s } = this;
    if (!l || !l.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, !1);
    const o = s.length - 1, c = s[o];
    s[o] = this.measure(), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), this.removedTransforms?.length && this.removedTransforms.forEach(([d, f]) => {
      l.getValue(d).set(f);
    }), this.resolveNoneKeyframes();
  }
}
const jh = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function AC(i) {
  return Wb(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
function Lh(i) {
  return Wb(i) && "ownerSVGElement" in i;
}
function Bh(i, l, s) {
  if (i == null)
    return [];
  if (i instanceof EventTarget)
    return [i];
  if (typeof i == "string") {
    const c = document.querySelectorAll(i);
    return c ? Array.from(c) : [];
  }
  return Array.from(i).filter((o) => o != null);
}
function Uh(i, l, s) {
  const { style: o, vars: c, transformOrigin: d } = i;
  let f = !1, m = !1;
  for (const p in l) {
    const g = l[p];
    if (Ui.has(p)) {
      f = !0;
      continue;
    } else if (u1(p)) {
      c[p] = g;
      continue;
    } else {
      const v = nu(g, Ys[p]);
      p.startsWith("origin") ? (m = !0, d[p] = v) : o[p] = v;
    }
  }
  if (l.transform || (f || s ? o.transform = H1(l, i.transform, s) : o.transform && (o.transform = "none")), m) {
    const { originX: p = "50%", originY: g = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${p} ${g} ${v}`;
  }
}
const wC = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, CC = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function MC(i, l, s = 1, o = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? wC : CC;
  i[d.offset] = `${-o}`, i[d.array] = `${l} ${s}`;
}
const F1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function J1(i, {
  attrX: l,
  attrY: s,
  attrScale: o,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, p, g, v) {
  if (Uh(i, m, g), p) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: S } = i;
  for (const A of F1)
    y[A] !== void 0 && (S[A] = y[A], delete y[A]);
  (S.transform || y.transformOrigin) && (S.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), S.transform && (S.transformBox = v?.transformBox ?? "fill-box", delete y.transformBox), l !== void 0 && (y.x = l), s !== void 0 && (y.y = s), o !== void 0 && (y.scale = o), c !== void 0 && MC(y, c, d, f, !1);
}
function I1({ top: i, left: l, right: s, bottom: o }) {
  return {
    x: { min: l, max: s },
    y: { min: i, max: o }
  };
}
function DC({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function zC(i, l) {
  if (!l)
    return i;
  const s = l({ x: i.left, y: i.top }), o = l({ x: i.right, y: i.bottom });
  return {
    top: s.y,
    left: s.x,
    bottom: o.y,
    right: o.x
  };
}
function pd(i) {
  return i === void 0 || i === 1;
}
function Id({ scale: i, scaleX: l, scaleY: s }) {
  return !pd(i) || !pd(l) || !pd(s);
}
function ga(i) {
  return Id(i) || W1(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function W1(i) {
  return t0(i.x) || t0(i.y);
}
function t0(i) {
  return i && i !== "0%";
}
function iu(i, l, s) {
  const o = i - s, c = l * o;
  return s + c;
}
function e0(i, l, s, o, c) {
  return c !== void 0 && (i = iu(i, c, o)), iu(i, s, o) + l;
}
function Wd(i, l = 0, s = 1, o, c) {
  i.min = e0(i.min, l, s, o, c), i.max = e0(i.max, l, s, o, c);
}
function $1(i, { x: l, y: s }) {
  Wd(i.x, l.translate, l.scale, l.originPoint), Wd(i.y, s.translate, s.scale, s.originPoint);
}
const n0 = 0.999999999999, i0 = 1.0000000000001;
function OC(i, l, s, o = !1) {
  const c = s.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, f;
  for (let m = 0; m < c; m++) {
    d = s[m], f = d.projectionDelta;
    const { visualElement: p } = d.options;
    p && p.props.style && p.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && (xn(i.x, -d.scroll.offset.x), xn(i.y, -d.scroll.offset.y)), f && (l.x *= f.x.scale, l.y *= f.y.scale, $1(i, f)), o && ga(d.latestValues) && Gr(i, d.latestValues, d.layout?.layoutBox));
  }
  l.x < i0 && l.x > n0 && (l.x = 1), l.y < i0 && l.y > n0 && (l.y = 1);
}
function xn(i, l) {
  i.min += l, i.max += l;
}
function a0(i, l, s, o, c = 0.5) {
  const d = Qt(i.min, i.max, c);
  Wd(i, l, s, d, o);
}
function l0(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function Gr(i, l, s) {
  const o = s ?? i;
  a0(i.x, l0(l.x, o.x), l.scaleX, l.scale, l.originX), a0(i.y, l0(l.y, o.y), l.scaleY, l.scale, l.originY);
}
function tS(i, l) {
  return I1(zC(i.getBoundingClientRect(), l));
}
function NC(i, l, s) {
  const o = tS(i, s), { scroll: c } = l;
  return c && (xn(o.x, c.offset.x), xn(o.y, c.offset.y)), o;
}
const { schedule: Hh } = /* @__PURE__ */ y1(queueMicrotask, !1), Sn = {
  x: !1,
  y: !1
};
function eS() {
  return Sn.x || Sn.y;
}
function RC(i) {
  return i === "x" || i === "y" ? Sn[i] ? null : (Sn[i] = !0, () => {
    Sn[i] = !1;
  }) : Sn.x || Sn.y ? null : (Sn.x = Sn.y = !0, () => {
    Sn.x = Sn.y = !1;
  });
}
function nS(i, l) {
  const s = Bh(i), o = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: o.signal
  };
  return [s, c, () => o.abort()];
}
function _C(i) {
  return !(i.pointerType === "touch" || eS());
}
function VC(i, l, s = {}) {
  const [o, c, d] = nS(i, s);
  return o.forEach((f) => {
    let m = !1, p = !1, g;
    const v = () => {
      f.removeEventListener("pointerleave", T);
    }, y = (E) => {
      g && (g(E), g = void 0), v();
    }, S = (E) => {
      m = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), p && (p = !1, y(E));
    }, A = () => {
      m = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c);
    }, T = (E) => {
      if (E.pointerType !== "touch") {
        if (m) {
          p = !0;
          return;
        }
        y(E);
      }
    }, w = (E) => {
      if (!_C(E))
        return;
      p = !1;
      const z = l(f, E);
      typeof z == "function" && (g = z, f.addEventListener("pointerleave", T, c));
    };
    f.addEventListener("pointerenter", w, c), f.addEventListener("pointerdown", A, c);
  }), d;
}
const iS = (i, l) => l ? i === l ? !0 : iS(i, l.parentElement) : !1, kh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, jC = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function LC(i) {
  return jC.has(i.tagName) || i.isContentEditable === !0;
}
const BC = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function UC(i) {
  return BC.has(i.tagName) || i.isContentEditable === !0;
}
const Yr = /* @__PURE__ */ new WeakSet();
function s0(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function gd(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const HC = (i, l) => {
  const s = i.currentTarget;
  if (!s)
    return;
  const o = s0(() => {
    if (Yr.has(s))
      return;
    gd(s, "down");
    const c = s0(() => {
      gd(s, "up");
    }), d = () => gd(s, "cancel");
    s.addEventListener("keyup", c, l), s.addEventListener("blur", d, l);
  });
  s.addEventListener("keydown", o, l), s.addEventListener("blur", () => s.removeEventListener("keydown", o), l);
};
function o0(i) {
  return kh(i) && !eS();
}
const r0 = /* @__PURE__ */ new WeakSet();
function kC(i, l, s = {}) {
  const [o, c, d] = nS(i, s), f = (m) => {
    const p = m.currentTarget;
    if (!o0(m) || r0.has(m))
      return;
    Yr.add(p), s.stopPropagation && r0.add(m);
    const g = l(p, m), v = { ...c, capture: !0 }, y = (T, w) => {
      window.removeEventListener("pointerup", S, v), window.removeEventListener("pointercancel", A, v), Yr.has(p) && Yr.delete(p), o0(T) && typeof g == "function" && g(T, { success: w });
    }, S = (T) => {
      y(T, p === window || p === document || s.useGlobalTarget || iS(p, T.target));
    }, A = (T) => {
      y(T, !1);
    };
    window.addEventListener("pointerup", S, v), window.addEventListener("pointercancel", A, v);
  };
  return o.forEach((m) => {
    (s.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c), AC(m) && (m.addEventListener("focus", (g) => HC(g, c)), !LC(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), d;
}
const qr = /* @__PURE__ */ new WeakMap();
let Xr;
const aS = (i, l, s) => (o, c) => c && c[0] ? c[0][i + "Size"] : Lh(o) && "getBBox" in o ? o.getBBox()[l] : o[s], GC = /* @__PURE__ */ aS("inline", "width", "offsetWidth"), YC = /* @__PURE__ */ aS("block", "height", "offsetHeight");
function qC({ target: i, borderBoxSize: l }) {
  qr.get(i)?.forEach((s) => {
    s(i, {
      get width() {
        return GC(i, l);
      },
      get height() {
        return YC(i, l);
      }
    });
  });
}
function XC(i) {
  i.forEach(qC);
}
function QC() {
  typeof ResizeObserver > "u" || (Xr = new ResizeObserver(XC));
}
function ZC(i, l) {
  Xr || QC();
  const s = Bh(i);
  return s.forEach((o) => {
    let c = qr.get(o);
    c || (c = /* @__PURE__ */ new Set(), qr.set(o, c)), c.add(l), Xr?.observe(o);
  }), () => {
    s.forEach((o) => {
      const c = qr.get(o);
      c?.delete(l), c?.size || Xr?.unobserve(o);
    });
  };
}
const Qr = /* @__PURE__ */ new Set();
let El;
function KC() {
  El = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Qr.forEach((l) => l(i));
  }, window.addEventListener("resize", El);
}
function PC(i) {
  return Qr.add(i), El || KC(), () => {
    Qr.delete(i), !Qr.size && typeof El == "function" && (window.removeEventListener("resize", El), El = void 0);
  };
}
function u0(i, l) {
  return typeof i == "function" ? PC(i) : ZC(i, l);
}
function FC(i) {
  return Lh(i) && i.tagName === "svg";
}
const c0 = (i) => typeof i == "number" ? i : parseFloat(i), f0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Al = () => ({
  x: f0(),
  y: f0()
}), d0 = () => ({ min: 0, max: 0 }), he = () => ({
  x: d0(),
  y: d0()
}), JC = /* @__PURE__ */ new WeakMap();
function du(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Xs(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Gh = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], h0 = ["initial", ...Gh];
function hu(i) {
  if (du(i.animate))
    return !0;
  for (let l = 0; l < h0.length; l++)
    if (Xs(i[h0[l]]))
      return !0;
  return !1;
}
function lS(i) {
  return !!(hu(i) || i.variants);
}
function IC(i, l, s) {
  for (const o in l) {
    const c = l[o], d = s[o];
    if (Me(c))
      i.addValue(o, c);
    else if (Me(d))
      i.addValue(o, Ml(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(o)) {
        const f = i.getValue(o);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(o);
        i.addValue(o, Ml(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const o in s)
    l[o] === void 0 && i.removeValue(o);
  return l;
}
const au = { current: null }, Yh = { current: !1 }, WC = typeof window < "u";
function sS() {
  if (Yh.current = !0, !!WC)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => au.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      au.current = !1;
}
const m0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let lu = {};
function oS(i) {
  lu = i;
}
function $C() {
  return lu;
}
class tM {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, s, o) {
    return {};
  }
  constructor({ parent: l, props: s, presenceContext: o, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: f, visualState: m }, p = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Oh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const A = te.now();
      this.renderScheduledAt < A && (this.renderScheduledAt = A, Kt.render(this.render, !1, !0));
    };
    const { latestValues: g, renderState: v } = m;
    this.latestValues = g, this.baseTarget = { ...g }, this.initialValues = s.initial ? { ...g } : {}, this.renderState = v, this.parent = l, this.props = s, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = p, this.blockInitialAnimation = !!f, this.isControllingVariants = hu(s), this.isVariantNode = lS(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: y, ...S } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const A in S) {
      const T = S[A];
      g[A] !== void 0 && Me(T) && T.set(g[A]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const s in this.initialValues)
        this.values.get(s)?.jump(this.initialValues[s]), this.latestValues[s] = this.initialValues[s];
    if (this.current = l, JC.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.isVariantNode && !this.isControllingVariants) {
      let s = this;
      do
        s = s.props.inherit !== !1 && s.parent;
      while (s && !s.isVariantNode);
      if (s) {
        const { variantChildren: o } = s;
        o.add(this), this.removeFromVariantTree = () => o.delete(this);
      }
    }
    this.values.forEach((s, o) => this.bindToMotionValue(o, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Yh.current || sS(), this.shouldReduceMotion = au.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), Hi(this.notifyUpdate), Hi(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
    for (const l in this.events)
      this.events[l].clear();
    for (const l in this.features) {
      const s = this.features[l];
      s && (s.unmount(), s.isMounted = !1);
    }
    this.current = null;
  }
  addChild(l) {
    this.children.add(l), this.enteringChildren ?? (this.enteringChildren = /* @__PURE__ */ new Set()), this.enteringChildren.add(l);
  }
  removeChild(l) {
    this.children.delete(l), this.enteringChildren && this.enteringChildren.delete(l);
  }
  bindToMotionValue(l, s) {
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), s.accelerate && Pd.has(l) && this.current instanceof HTMLElement) {
      const { factory: f, keyframes: m, times: p, ease: g, duration: v } = s.accelerate, y = new j1({
        element: this.current,
        name: l,
        keyframes: m,
        times: p,
        ease: g,
        duration: /* @__PURE__ */ dn(v)
      }), S = f(y);
      this.valueSubscriptions.set(l, () => {
        S(), y.cancel();
      });
      return;
    }
    const o = Ui.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = s.on("change", (f) => {
      this.latestValues[l] = f, this.props.onUpdate && Kt.preRender(this.notifyUpdate), o && (this.projection && (this.projection.isTransformDirty = !0), Cl.get(this.current)?.check()), this.scheduleRender();
    });
    let d;
    typeof window < "u" && window.MotionCheckAppearSync && (d = window.MotionCheckAppearSync(this, l, s)), this.valueSubscriptions.set(l, () => {
      c(), d && d();
    });
  }
  sortNodePosition(l) {
    return !this.current || !l.current || !this.sortInstanceNodePosition || this.type !== l.type ? 0 : this.sortInstanceNodePosition(this.current, l.current);
  }
  updateFeatures() {
    let l = "animation";
    for (l in lu) {
      const s = lu[l];
      if (!s)
        continue;
      const { isEnabled: o, Feature: c } = s;
      if (!this.features[l] && c && o(this.props) && (this.features[l] = new c(this)), this.features[l]) {
        const d = this.features[l];
        d.isMounted ? d.update() : (d.mount(), d.isMounted = !0);
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : he();
  }
  getStaticValue(l) {
    return this.latestValues[l];
  }
  setStaticValue(l, s) {
    this.latestValues[l] = s;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(l, s) {
    const { transformTemplate: o, onUpdate: c } = this.props;
    (l.transformTemplate || o) && this.scheduleRender(), (l.transformTemplate && !o || l.onUpdate && !c) && Cl.get(this.current)?.demote(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
    for (let d = 0; d < m0.length; d++) {
      const f = m0[d];
      this.propEventSubscriptions[f] && (this.propEventSubscriptions[f](), delete this.propEventSubscriptions[f]);
      const m = "on" + f, p = l[m];
      p && (this.propEventSubscriptions[f] = this.on(f, p));
    }
    this.prevMotionValues = IC(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
  addValue(l, s) {
    const o = this.values.get(l);
    if (s !== o) {
      o && this.removeValue(l), this.bindToMotionValue(l, s), this.values.set(l, s);
      const c = s.get();
      c !== void 0 && (this.latestValues[l] = c);
    }
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(l) {
    this.values.delete(l);
    const s = this.valueSubscriptions.get(l);
    s && (s(), this.valueSubscriptions.delete(l)), delete this.latestValues[l], this.removeValueFromRenderState(l, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(l) {
    return this.values.has(l);
  }
  getValue(l, s) {
    if (this.props.values && this.props.values[l])
      return this.props.values[l];
    let o = this.values.get(l);
    return o === void 0 && s !== void 0 && (o = Ml(s ?? this.getDefaultValue?.(l), {
      owner: this
    }), this.addValue(l, o)), o;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, s) {
    let o = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return o != null && (typeof o == "string" && (ph(o) || gh(o)) ? o = parseFloat(o) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof o != "number" && !$e.test(o) && $e.test(s) && (o = zh(l, s))
    ), this.setBaseTarget(l, Me(o) ? o.get() : o)), Me(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, s) {
    this.baseTarget[l] = s;
  }
  on(l, s) {
    return this.events[l] || (this.events[l] = new Ir()), this.events[l].add(s);
  }
  notify(l, ...s) {
    this.events[l] && this.events[l].notify(...s);
  }
  scheduleRenderMicrotask() {
    Hh.render(this.render);
  }
}
class rS extends tM {
  constructor() {
    super(...arguments), this.KeyframeResolver = EC;
  }
  sortInstanceNodePosition(l, s) {
    return l.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, s) {
    const o = l.style;
    return o ? o[s] : void 0;
  }
  removeValueFromRenderState(l, { vars: s, style: o }) {
    delete s[l], delete o[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    Me(l) && (this.childSubscription = l.on("change", (s) => {
      this.current && (this.current.textContent = `${s}`);
    }));
  }
}
class Gi {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function uS(i, { style: l, vars: s }, o, c) {
  const d = i.style;
  let f;
  for (f in l)
    d[f] = l[f];
  c?.applyProjectionStyles(d, o);
  for (f in s)
    d.setProperty(f, s[f]);
}
const Qs = {};
function cS(i, { layout: l, layoutId: s }) {
  return Ui.has(i) || i.startsWith("origin") || (l || s !== void 0) && (!!Qs[i] || i === "opacity");
}
function qh(i, l, s) {
  const o = i.style, c = l?.style, d = {};
  if (!o)
    return d;
  for (const f in o)
    (Me(o[f]) || c && Me(c[f]) || cS(f, i) || s?.getValue(f)?.liveStyle !== void 0) && (d[f] = o[f]);
  return d;
}
function eM(i) {
  return window.getComputedStyle(i);
}
class nM extends rS {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = uS;
  }
  mount(l) {
    fu(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, s) {
    if (Ui.has(s))
      return this.projection?.isProjecting ? qs(s) : vw(l, s);
    {
      const o = eM(l), c = (u1(s) ? o.getPropertyValue(s) : o[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: s }) {
    return tS(l, s);
  }
  build(l, s, o) {
    Uh(l, s, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, s, o) {
    return qh(l, s, o);
  }
}
const fS = /* @__PURE__ */ new Set([
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
]), dS = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function iM(i, l, s, o) {
  uS(i, l, void 0, o);
  for (const c in l.attrs)
    i.setAttribute(fS.has(c) ? c : Vh(c), l.attrs[c]);
}
function hS(i, l, s) {
  const o = qh(i, l, s);
  for (const c in i)
    if (Me(i[c]) || Me(l[c])) {
      const d = li.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      o[d] = i[c];
    }
  return o;
}
class aM extends rS {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = he;
  }
  getBaseTargetFromProps(l, s) {
    return Ui.has(s) ? super.getBaseTargetFromProps(l, s) ?? qs(s) : l[s];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(l) {
    return Ui.has(l) ? this.latestValues[l] ?? qs(l) : void 0;
  }
  readValueFromInstance(l, s) {
    if (Ui.has(s)) {
      const o = D1(s);
      return o && o.default || 0;
    }
    if (F1.includes(s)) {
      const c = getComputedStyle(l)[s];
      if (typeof c == "string" && c)
        return c.trim();
    }
    return s = fS.has(s) ? s : Vh(s), l.getAttribute(s);
  }
  scrapeMotionValuesFromProps(l, s, o) {
    return hS(l, s, o);
  }
  build(l, s, o) {
    J1(l, s, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, s, o, c) {
    iM(l, s, o, c);
  }
  mount(l) {
    this.isSVGTag = dS(l.tagName), super.mount(l);
  }
}
function mS(i, l) {
  if (!Array.isArray(l))
    return !1;
  const s = l.length;
  if (s !== i.length)
    return !1;
  for (let o = 0; o < s; o++)
    if (l[o] !== i[o])
      return !1;
  return !0;
}
const lM = [...Gh].reverse();
function sM(i) {
  let l = (m) => Promise.all(m.map(({ animation: p, options: g }) => gC(i, p, g))), s = p0(), o = !0, c = !1;
  function d(m) {
    const { props: p, parent: g, manuallyAnimateOnMount: v } = i, y = o || c, S = [], A = /* @__PURE__ */ new Set();
    let T = {}, w = 1 / 0, E = i;
    do
      E = E.props.inherit !== !1 && E.parent;
    while (E && !E.isControllingVariants);
    if (lM.forEach((B, G) => {
      const _ = s[B], Q = p[B], K = E && E.props[B], N = Q !== void 0 ? Q : Xs(K) || K === !1 ? K : void 0, O = Xs(N), ot = B === m ? _.isActive : null;
      ot === !1 && (w = G);
      const ut = O && Q === void 0 && !(y && v);
      if (_.protectedKeys = { ...T }, !_.isActive && ot === null || !N && !_.prevProp || du(N) || typeof N == "boolean")
        return;
      if (B === "exit" && _.isActive && ot !== !0) {
        T = {
          ...T,
          ..._.prevResolvedValues
        };
        return;
      }
      const F = oM(_.prevProp, N);
      let I = F || O && (ot && !ut || G > w), lt = !1;
      const et = Array.isArray(N) ? N : [N];
      let nt = {};
      if (ot !== !1)
        for (const J of et) {
          const { transition: it, transitionEnd: at, ...Y } = Ta(i, J, X1(i, B)) || {};
          nt = {
            ...nt,
            ...Y,
            ...at
          };
        }
      const { prevResolvedValues: X } = _;
      for (const J in { ...X, ...nt }) {
        if (J in T)
          continue;
        const it = nt[J], at = X[J], Y = Array.isArray(it) && Array.isArray(at) ? !mS(it, at) || F : it !== at;
        if (Y && it == null)
          A.add(J);
        else if (Y || it !== void 0 && A.has(J)) {
          I = !0, A.delete(J) && (lt = !0), _.needsAnimating[J] = !0;
          const yt = i.getValue(J);
          yt && (yt.liveStyle = !1);
        } else
          _.protectedKeys[J] = !0;
      }
      if (_.prevProp = N, _.prevResolvedValues = nt, _.isActive && (T = { ...T, ...nt }), I && (!(ut && F) || lt))
        for (const J of et) {
          const it = { type: B };
          if (typeof J == "string" && y && v && g?.enteringChildren) {
            const at = Ta(g, J)?.transition?.delayChildren;
            it.delay = k1(g.enteringChildren, i, at);
          }
          S.push({ animation: J, options: it });
        }
    }), A.size) {
      const { initial: B } = p, G = {}, _ = typeof B != "boolean" && Ta(i, Array.isArray(B) ? B[0] : B, i.presenceContext?.custom);
      _ && _.transition && (G.transition = _.transition), A.forEach((Q) => {
        const K = i.getValue(Q);
        K && (K.liveStyle = !0);
        const N = _ && !Array.isArray(B) ? _[Q] : void 0, O = i.getBaseTargetFromProps(p, Q);
        G[Q] = (N !== void 0 ? N : O !== void 0 && !Me(O) ? O : i.initialValues[Q] === void 0 ? i.baseTarget[Q] : void 0) ?? null;
      }), S.push({ animation: G });
    }
    const z = y && i.blockInitialAnimation || o && !v && (p.initial === !1 || p.initial === p.animate);
    return o = c = !1, !z && S.length ? l(S) : Promise.resolve();
  }
  function f(m, p) {
    if (s[m].isActive === p)
      return Promise.resolve();
    i.variantChildren?.forEach((v) => v.animationState?.setActive(m, p)), s[m].isActive = p;
    const g = d(m);
    for (const v in s)
      s[v].protectedKeys = {};
    return g;
  }
  return {
    animateChanges: d,
    setActive: f,
    /**
     * Allows tests to inject a mocked animate function.
     * @internal
     */
    setAnimateFunction: (m) => {
      l = m(i);
    },
    getState: () => s,
    reset: () => {
      s = p0(), c = !0;
    }
  };
}
function oM(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !mS(l, i) : !1;
}
function p0() {
  const i = {};
  for (const l of Gh)
    i[l] = {
      isActive: l === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  return i;
}
function $d(i, l) {
  i.min = l.min, i.max = l.max;
}
function bn(i, l) {
  $d(i.x, l.x), $d(i.y, l.y);
}
function g0(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const pS = 1e-4, rM = 1 - pS, uM = 1 + pS, gS = 0.01, cM = 0 - gS, fM = 0 + gS;
function je(i) {
  return i.max - i.min;
}
function dM(i, l, s) {
  return Math.abs(i - l) <= s;
}
function y0(i, l, s, o = 0.5) {
  i.origin = o, i.originPoint = Qt(l.min, l.max, i.origin), i.scale = je(s) / je(l), i.translate = Qt(s.min, s.max, i.origin) - i.originPoint, (i.scale >= rM && i.scale <= uM || isNaN(i.scale)) && (i.scale = 1), (i.translate >= cM && i.translate <= fM || isNaN(i.translate)) && (i.translate = 0);
}
function js(i, l, s, o) {
  y0(i.x, l.x, s.x, o ? o.originX : void 0), y0(i.y, l.y, s.y, o ? o.originY : void 0);
}
function v0(i, l, s, o = 0) {
  const c = o ? Qt(s.min, s.max, o) : s.min;
  i.min = c + l.min, i.max = i.min + je(l);
}
function hM(i, l, s, o) {
  v0(i.x, l.x, s.x, o?.x), v0(i.y, l.y, s.y, o?.y);
}
function b0(i, l, s, o = 0) {
  const c = o ? Qt(s.min, s.max, o) : s.min;
  i.min = l.min - c, i.max = i.min + je(l);
}
function su(i, l, s, o) {
  b0(i.x, l.x, s.x, o?.x), b0(i.y, l.y, s.y, o?.y);
}
function S0(i, l, s, o, c) {
  return i -= l, i = iu(i, 1 / s, o), c !== void 0 && (i = iu(i, 1 / c, o)), i;
}
function mM(i, l = 0, s = 1, o = 0.5, c, d = i, f = i) {
  if (Un.test(l) && (l = parseFloat(l), l = Qt(f.min, f.max, l / 100) - f.min), typeof l != "number")
    return;
  let m = Qt(d.min, d.max, o);
  i === d && (m -= l), i.min = S0(i.min, l, s, m, c), i.max = S0(i.max, l, s, m, c);
}
function T0(i, l, [s, o, c], d, f) {
  mM(i, l[s], l[o], l[c], l.scale, d, f);
}
const pM = ["x", "scaleX", "originX"], gM = ["y", "scaleY", "originY"];
function x0(i, l, s, o) {
  T0(i.x, l, pM, s ? s.x : void 0, o ? o.x : void 0), T0(i.y, l, gM, s ? s.y : void 0, o ? o.y : void 0);
}
function E0(i) {
  return i.translate === 0 && i.scale === 1;
}
function yS(i) {
  return E0(i.x) && E0(i.y);
}
function A0(i, l) {
  return i.min === l.min && i.max === l.max;
}
function yM(i, l) {
  return A0(i.x, l.x) && A0(i.y, l.y);
}
function w0(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function vS(i, l) {
  return w0(i.x, l.x) && w0(i.y, l.y);
}
function C0(i) {
  return je(i.x) / je(i.y);
}
function M0(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function Tn(i) {
  return [i("x"), i("y")];
}
function D0(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const Rs = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (gt.test(i))
        i = parseFloat(i);
      else
        return i;
    const s = D0(i, l.target.x), o = D0(i, l.target.y);
    return `${s}% ${o}%`;
  }
}, vM = {
  correct: (i, { treeScale: l, projectionDelta: s }) => {
    const o = i, c = $e.parse(i);
    if (c.length > 5)
      return o;
    const d = $e.createTransformer(i), f = typeof c[0] != "number" ? 1 : 0, m = s.x.scale * l.x, p = s.y.scale * l.y;
    c[0 + f] /= m, c[1 + f] /= p;
    const g = Qt(m, p, 0.5);
    return typeof c[2 + f] == "number" && (c[2 + f] /= g), typeof c[3 + f] == "number" && (c[3 + f] /= g), d(c);
  }
};
function bM(i, l, s) {
  let o = "";
  const c = i.x.translate / l.x, d = i.y.translate / l.y, f = s?.z || 0;
  if ((c || d || f) && (o = `translate3d(${c}px, ${d}px, ${f}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `), s) {
    const { transformPerspective: g, rotate: v, pathRotation: y, rotateX: S, rotateY: A, skewX: T, skewY: w } = s;
    g && (o = `perspective(${g}px) ${o}`), v && (o += `rotate(${v}deg) `), y && (o += `rotate(${y}deg) `), S && (o += `rotateX(${S}deg) `), A && (o += `rotateY(${A}deg) `), T && (o += `skewX(${T}deg) `), w && (o += `skewY(${w}deg) `);
  }
  const m = i.x.scale * l.x, p = i.y.scale * l.y;
  return (m !== 1 || p !== 1) && (o += `scale(${m}, ${p})`), o || "none";
}
const SM = jh.length, z0 = (i) => typeof i == "number" || gt.test(i);
function TM(i, l, s, o, c, d) {
  c ? (i.opacity = Qt(0, s.opacity ?? 1, xM(o)), i.opacityExit = Qt(l.opacity ?? 1, 0, EM(o))) : d && (i.opacity = Qt(l.opacity ?? 1, s.opacity ?? 1, o));
  for (let f = 0; f < SM; f++) {
    const m = jh[f];
    let p = O0(l, m), g = O0(s, m);
    if (p === void 0 && g === void 0)
      continue;
    p || (p = 0), g || (g = 0), p === 0 || g === 0 || z0(p) === z0(g) ? (i[m] = Math.max(Qt(c0(p), c0(g), o), 0), (Un.test(g) || Un.test(p)) && (i[m] += "%")) : i[m] = g;
  }
  (l.rotate || s.rotate) && (i.rotate = Qt(l.rotate || 0, s.rotate || 0, o));
}
function O0(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const xM = /* @__PURE__ */ bS(0, 0.5, s1), EM = /* @__PURE__ */ bS(0.5, 0.95, En);
function bS(i, l, s) {
  return (o) => o < i ? 0 : o > l ? 1 : s(/* @__PURE__ */ xa(i, l, o));
}
function AM(i, l, s) {
  const o = Me(i) ? i : Ml(i);
  return o.start(_h("", o, l, s)), o.animation;
}
function Zs(i, l, s, o = { passive: !0 }) {
  return i.addEventListener(l, s, o), () => i.removeEventListener(l, s, o);
}
const wM = (i, l) => i.depth - l.depth;
class CM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    mh(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    Jr(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(wM), this.isDirty = !1, this.children.forEach(l);
  }
}
function MM(i, l) {
  const s = te.now(), o = ({ timestamp: c }) => {
    const d = c - s;
    d >= l && (Hi(o), i(d - l));
  };
  return Kt.setup(o, !0), () => Hi(o);
}
function Zr(i) {
  return Me(i) ? i.get() : i;
}
class DM {
  constructor() {
    this.members = [];
  }
  add(l) {
    mh(this.members, l);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const o = this.members[s];
      if (o === l || o === this.lead || o === this.prevLead)
        continue;
      const c = o.instance;
      (!c || c.isConnected === !1) && !o.snapshot && (Jr(this.members, o), o.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (Jr(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
      const s = this.members[this.members.length - 1];
      s && this.promote(s);
    }
  }
  relegate(l) {
    for (let s = this.members.indexOf(l) - 1; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1 && o.instance?.isConnected !== !1)
        return this.promote(o), !0;
    }
    return !1;
  }
  promote(l, s) {
    const o = this.lead;
    if (l !== o && (this.prevLead = o, this.lead = l, l.show(), o)) {
      o.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = o.options, { layoutDependency: d } = l.options;
      (c === void 0 || c !== d) && (l.resumeFrom = o, s && (o.preserveOpacity = !0), o.snapshot && (l.snapshot = o.snapshot, l.snapshot.latestValues = o.animationValues || o.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && o.hide();
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
const zM = {
  borderRadius: {
    ...Rs,
    applyTo: [...jh]
  },
  borderTopLeftRadius: Rs,
  borderTopRightRadius: Rs,
  borderBottomLeftRadius: Rs,
  borderBottomRightRadius: Rs,
  boxShadow: vM
}, Kr = {
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
Object.assign(Qs, {
  ...zM,
  ...Qs
});
const yd = ["", "X", "Y", "Z"], OM = 1e3;
let NM = 0;
function vd(i, l, s, o) {
  const { latestValues: c } = l;
  c[i] && (s[i] = c[i], l.setStaticValue(i, 0), o && (o[i] = 0));
}
const bd = ({ instance: i }) => i && Cl.get(i)?.demote();
function SS(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const s = K1(l);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Kt, !(c || d));
  }
  const { parent: o } = i;
  o && !o.hasCheckedOptimisedAppear && SS(o);
}
function TS({ attachResizeListener: i, defaultParent: l, measureScroll: s, checkIsScrollRoot: o, resetTransform: c }) {
  return class {
    constructor(f = {}, m = l?.()) {
      this.id = NM++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(VM), this.nodes.forEach(YM), this.nodes.forEach(qM), this.nodes.forEach(jM);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new CM());
    }
    addEventListener(f, m) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Ir()), this.eventHandlers.get(f).add(m);
    }
    notifyListeners(f, ...m) {
      const p = this.eventHandlers.get(f);
      p && p.notify(...m);
    }
    hasListeners(f) {
      return this.eventHandlers.has(f);
    }
    /**
     * Lifecycles
     */
    mount(f) {
      if (this.instance)
        return;
      this.isSVG = Lh(f) && !FC(f), this.instance = f;
      const { layoutId: m, layout: p, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0), i) {
        let v, y = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        Kt.read(() => {
          y = window.innerWidth;
        }), i(f, () => {
          const A = window.innerWidth;
          A !== y && (y = A, this.root.updateBlockedByResize = !0, v && v(), v = MM(S, 250), Kr.hasAnimatedSinceResize && (Kr.hasAnimatedSinceResize = !1, this.nodes.forEach(_0)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && g && (m || p) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: y, hasRelativeLayoutChanged: S, layout: A }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const T = this.options.transition || g.getDefaultTransition() || PM, { onLayoutAnimationStart: w, onLayoutAnimationComplete: E } = g.getProps(), z = !this.targetLayout || !vS(this.targetLayout, A), B = !y && S;
        if (this.options.layoutRoot || this.resumeFrom || B || y && (z || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const G = {
            ...Rh(T, "layout"),
            onPlay: w,
            onComplete: E
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (G.delay = 0, G.type = !1), this.startAnimation(G), this.setAnimationOrigin(v, B, G.path);
        } else
          y || _0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = A;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Hi(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(XM), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: f } = this.options;
      return f && f.getProps().transformTemplate;
    }
    willUpdate(f = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && SS(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      bd(this), this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        y.shouldResetTransform = !0, bd(y), (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1), y.isAnimationBlocked && (y.dragSnapshot || (y.dragSnapshot = y.measure()), this.dragAncestor = y);
      }
      const { layoutId: m, layout: p } = this.options;
      if (m === void 0 && !p)
        return;
      const g = this.getTransformTemplate();
      this.prevTransformTemplateValue = g ? g(this.latestValues, "") : void 0, this.updateSnapshot(), f && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        const p = this.updateBlockedByResize;
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), p && this.nodes.forEach(BM), this.nodes.forEach(N0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(R0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(HM), this.nodes.forEach(kM), this.nodes.forEach(GM), this.nodes.forEach(RM), this.nodes.forEach(_M)) : this.nodes.forEach(R0), this.clearAllSnapshots();
      const m = te.now();
      ce.delta = kn(0, 1e3 / 60, m - ce.timestamp), ce.timestamp = m, ce.isProcessing = !0, ud.update.process(ce), ud.preRender.process(ce), ud.render.process(ce), ce.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Hh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(LM), this.sharedNodes.forEach(QM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Kt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Kt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !je(this.snapshot.measuredBox.x) && !je(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++)
          this.path[p].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = he()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: m } = this.options;
      m && m.notify("LayoutMeasure", this.layout.layoutBox, f ? f.layoutBox : void 0);
    }
    updateScroll(f = "measure") {
      let m = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === f && (m = !1), m && this.instance) {
        const p = o(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: f,
          isRoot: p,
          offset: s(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p
        };
      }
    }
    resetTransform() {
      if (!c)
        return;
      const f = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      f && bd(this);
      const m = this.projectionDelta && !yS(this.projectionDelta), p = this.getTransformTemplate(), g = p ? p(this.latestValues, "") : void 0, v = g !== this.prevTransformTemplateValue;
      f && this.instance && (m || ga(this.latestValues) || v) && (c(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      return f && (p = this.removeTransform(p)), FM(p), {
        animationId: this.root.animationId,
        measuredBox: m,
        layoutBox: p,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: f } = this.options;
      if (!f)
        return he();
      const m = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(JM))) {
        const { scroll: g } = this.root;
        g && (xn(m.x, g.offset.x), xn(m.y, g.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      const m = he();
      if (bn(m, f), this.scroll?.wasRoot)
        return m;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p], { scroll: v, options: y } = g;
        g !== this.root && v && y.layoutScroll && (v.wasRoot && bn(m, f), xn(m.x, v.offset.x), xn(m.y, v.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1, p) {
      const g = p || he();
      bn(g, f);
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        !m && y.options.layoutScroll && y.scroll && y !== y.root && (xn(g.x, -y.scroll.offset.x), xn(g.y, -y.scroll.offset.y)), ga(y.latestValues) && Gr(g, y.latestValues, y.layout?.layoutBox);
      }
      return ga(this.latestValues) && Gr(g, this.latestValues, this.layout?.layoutBox), g;
    }
    removeTransform(f) {
      const m = he();
      bn(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        if (!ga(g.latestValues))
          continue;
        let v;
        g.instance && (Id(g.latestValues) && g.updateSnapshot(), v = he(), bn(v, g.measurePageBox())), x0(m, g.latestValues, g.snapshot?.layoutBox, v);
      }
      return ga(this.latestValues) && x0(m, this.latestValues), m;
    }
    setTargetDelta(f) {
      this.targetDelta = f, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(f) {
      this.options = {
        ...this.options,
        ...f,
        crossfade: f.crossfade !== void 0 ? f.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ce.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(f = !1) {
      const m = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = m.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = m.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = m.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== m;
      if (!(f || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: v, layoutId: y } = this.options;
      if (!this.layout || !(v || y))
        return;
      this.resolvedRelativeTargetAt = ce.timestamp;
      const S = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = he(), this.targetWithTransforms = he()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), hM(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : bn(this.target, this.layout.layoutBox), $1(this.target, this.targetDelta)) : bn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Id(this.parent.latestValues) || W1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(f, m, p) {
      this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = he(), this.relativeTargetOrigin = he(), su(this.relativeTargetOrigin, m, p, this.options.layoutAnchor || void 0), bn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(), m = !!this.resumingFrom || this !== f;
      let p = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === ce.timestamp && (p = !1), p)
        return;
      const { layout: g, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || v))
        return;
      bn(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, S = this.treeScale.y;
      OC(this.layoutCorrected, this.treeScale, this.path, m), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = he());
      const { target: A } = f;
      if (!A) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (g0(this.prevProjectionDelta.x, this.projectionDelta.x), g0(this.prevProjectionDelta.y, this.projectionDelta.y)), js(this.projectionDelta, this.layoutCorrected, A, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== S || !M0(this.projectionDelta.x, this.prevProjectionDelta.x) || !M0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", A));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(f = !0) {
      if (this.options.visualElement?.scheduleRender(), f) {
        const m = this.getStack();
        m && m.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Al(), this.projectionDelta = Al(), this.projectionDeltaWithTransform = Al();
    }
    setAnimationOrigin(f, m = !1, p) {
      const g = this.snapshot, v = g ? g.latestValues : {}, y = { ...this.latestValues }, S = Al();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const A = he(), T = g ? g.source : void 0, w = this.layout ? this.layout.source : void 0, E = T !== w, z = this.getStack(), B = !z || z.members.length <= 1, G = !!(E && !B && this.options.crossfade === !0 && !this.path.some(KM));
      this.animationProgress = 0;
      let _;
      const Q = p?.interpolateProjection(f);
      this.mixTargetDelta = (K) => {
        const N = K / 1e3, O = Q?.(N);
        O ? (S.x.translate = O.x, S.x.scale = Qt(f.x.scale, 1, N), S.x.origin = f.x.origin, S.x.originPoint = f.x.originPoint, S.y.translate = O.y, S.y.scale = Qt(f.y.scale, 1, N), S.y.origin = f.y.origin, S.y.originPoint = f.y.originPoint) : (V0(S.x, f.x, N), V0(S.y, f.y, N)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (su(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), ZM(this.relativeTarget, this.relativeTargetOrigin, A, N), _ && yM(this.relativeTarget, _) && (this.isProjectionDirty = !1), _ || (_ = he()), bn(_, this.relativeTarget)), E && (this.animationValues = y, TM(y, v, this.latestValues, N, G, B)), O && O.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = O.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = N;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Hi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Kt.update(() => {
        Kr.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ml(0)), this.motionValue.jump(0, !1), this.currentAnimation = AM(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m);
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), ow(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(OM), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead(), { targetWithTransforms: m, layout: p, latestValues: g } = f;
      let { target: v } = f;
      if (!(!m || !v || !p)) {
        if (this !== f && this.layout && p && xS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          v = this.target || he();
          const y = je(this.layout.layoutBox.x);
          v.x.min = f.target.x.min, v.x.max = v.x.min + y;
          const S = je(this.layout.layoutBox.y);
          v.y.min = f.target.y.min, v.y.max = v.y.min + S;
        }
        bn(m, v), Gr(m, g), js(this.projectionDeltaWithTransform, this.layoutCorrected, m, g);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new DM()), this.sharedNodes.get(f).add(m);
      const g = m.options.initialPromotionConfig;
      m.promote({
        transition: g ? g.transition : void 0,
        preserveFollowOpacity: g && g.shouldPreserveFollowOpacity ? g.shouldPreserveFollowOpacity(m) : void 0
      });
    }
    isLead() {
      const f = this.getStack();
      return f ? f.lead === this : !0;
    }
    getLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: f } = this.options;
      return f ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: f } = this.options;
      if (f)
        return this.root.sharedNodes.get(f);
    }
    promote({ needsReset: f, transition: m, preserveFollowOpacity: p } = {}) {
      const g = this.getStack();
      g && g.promote(this, p), f && (this.projectionDelta = void 0, this.needsReset = !0), m && this.setOptions({ transition: m });
    }
    relegate() {
      const f = this.getStack();
      return f ? f.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: f } = this.options;
      if (!f)
        return;
      let m = !1;
      const { latestValues: p } = f;
      if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (m = !0), !m)
        return;
      const g = {};
      p.z && vd("z", f, g, this.animationValues);
      for (let v = 0; v < yd.length; v++)
        vd(`rotate${yd[v]}`, f, g, this.animationValues), vd(`skew${yd[v]}`, f, g, this.animationValues);
      f.render();
      for (const v in g)
        f.setStaticValue(v, g[v]), this.animationValues && (this.animationValues[v] = g[v]);
      f.scheduleRender();
    }
    applyProjectionStyles(f, m) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        f.visibility = "hidden";
        return;
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = Zr(m?.pointerEvents) || "", f.transform = p ? p(this.latestValues, "") : "none";
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = Zr(m?.pointerEvents) || ""), this.hasProjected && !ga(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let y = bM(this.projectionDeltaWithTransform, this.treeScale, v);
      p && (y = p(v, y)), f.transform = y;
      const { x: S, y: A } = this.projectionDelta;
      f.transformOrigin = `${S.origin * 100}% ${A.origin * 100}% 0`, g.animationValues ? f.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : f.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const T in Qs) {
        if (v[T] === void 0)
          continue;
        const { correct: w, applyTo: E, isCSSVariable: z } = Qs[T], B = y === "none" ? v[T] : w(v[T], g);
        if (E) {
          const G = E.length;
          for (let _ = 0; _ < G; _++)
            f[E[_]] = B;
        } else
          z ? this.options.visualElement.renderState.vars[T] = B : f[T] = B;
      }
      this.options.layoutId && (f.pointerEvents = g === this ? Zr(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(N0), this.root.sharedNodes.clear();
    }
  };
}
function RM(i) {
  i.updateLayout(), UM(i);
}
function _M(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: o } = i.layout, { animationType: c } = i.options, d = l.source !== i.layout.source;
    if (c === "size")
      Tn((v) => {
        const y = d ? l.measuredBox[v] : l.layoutBox[v], S = je(y);
        y.min = s[v].min, y.max = y.min + S;
      });
    else if (c === "x" || c === "y") {
      const v = c === "x" ? "y" : "x";
      $d(d ? l.measuredBox[v] : l.layoutBox[v], s[v]);
    } else xS(c, l.layoutBox, s) && Tn((v) => {
      const y = d ? l.measuredBox[v] : l.layoutBox[v], S = je(s[v]);
      y.max = y.min + S, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + S);
    });
    const f = Al();
    js(f, s, l.layoutBox);
    const m = Al();
    d ? js(m, i.applyTransform(o, !0), l.measuredBox) : js(m, s, l.layoutBox);
    const p = !yS(f);
    let g = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: y, layout: S } = v;
        if (y && S) {
          const A = i.options.layoutAnchor || void 0, T = he();
          su(T, l.layoutBox, y.layoutBox, A);
          const w = he();
          su(w, s, S.layoutBox, A), vS(T, w) || (g = !0), v.options.layoutRoot && (i.relativeTarget = w, i.relativeTargetOrigin = T, i.relativeParent = v);
        }
      }
    }
    i.notifyListeners("didUpdate", {
      layout: s,
      snapshot: l,
      delta: m,
      layoutDelta: f,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: g
    });
  } else if (i.isLead()) {
    const { onExitComplete: s } = i.options;
    s && s();
  }
  i.options.transition = void 0;
}
function VM(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function jM(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function LM(i) {
  i.clearSnapshot();
}
function N0(i) {
  i.clearMeasurements();
}
function BM(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function R0(i) {
  i.isLayoutDirty = !1;
}
function UM(i) {
  const { snapshot: l, dragAncestor: s } = i, o = s?.layout;
  if (!l || !o || i.resumeFrom || i.isAnimationBlocked)
    return;
  const c = s.dragSnapshot;
  Tn((d) => xn(l.layoutBox[d], o.layoutBox[d].min - c.layoutBox[d].min));
}
function HM(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.dragSnapshot || i.layout, i.isLayoutDirty = !0);
}
function kM(i) {
  i.relativeTarget && i.relativeParent?.isLayoutDirty && (i.currentAnimation ? i.isLayoutDirty = !0 : (i.targetDelta = void 0, i.removeRelativeTarget()));
}
function GM(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function _0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function YM(i) {
  i.resolveTargetDelta();
}
function qM(i) {
  i.calcProjection();
}
function XM(i) {
  i.resetSkewAndRotation();
}
function QM(i) {
  i.removeLeadSnapshot();
}
function V0(i, l, s) {
  i.translate = Qt(l.translate, 0, s), i.scale = Qt(l.scale, 1, s), i.origin = l.origin, i.originPoint = l.originPoint;
}
function j0(i, l, s, o) {
  i.min = Qt(l.min, s.min, o), i.max = Qt(l.max, s.max, o);
}
function ZM(i, l, s, o) {
  j0(i.x, l.x, s.x, o), j0(i.y, l.y, s.y, o);
}
function KM(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const PM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, L0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), B0 = L0("applewebkit/") && !L0("chrome/") ? Math.round : En;
function U0(i) {
  i.min = B0(i.min), i.max = B0(i.max);
}
function FM(i) {
  U0(i.x), U0(i.y);
}
function xS(i, l, s) {
  return i === "position" || i === "preserve-aspect" && !dM(C0(l), C0(s), 0.2);
}
function JM(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const IM = TS({
  attachResizeListener: (i, l) => Zs(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Sd = {
  current: void 0
}, ES = TS({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!Sd.current) {
      const i = new IM({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), Sd.current = i;
    }
    return Sd.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), AS = q.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function WM(i = !0) {
  const l = q.useContext(hh);
  if (l === null)
    return [!0, null];
  const { isPresent: s, onExitComplete: o, register: c } = l, d = q.useId();
  q.useEffect(() => {
    if (i)
      return c(d);
  }, [i]);
  const f = q.useCallback(() => i && o && o(d), [d, o, i]);
  return !s && o ? [!1, f] : [!0];
}
const wS = q.createContext({ strict: !1 }), H0 = {
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
let k0 = !1;
function $M() {
  if (k0)
    return;
  const i = {};
  for (const l in H0)
    i[l] = {
      isEnabled: (s) => H0[l].some((o) => !!s[o])
    };
  oS(i), k0 = !0;
}
function CS() {
  return $M(), $C();
}
function t3(i) {
  const l = CS();
  for (const s in i)
    l[s] = {
      ...l[s],
      ...i[s]
    };
  oS(l);
}
const mu = /* @__PURE__ */ q.createContext({});
function e3(i, l) {
  if (hu(i)) {
    const { initial: s, animate: o } = i;
    return {
      initial: s === !1 || Xs(s) ? s : void 0,
      animate: Xs(o) ? o : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function n3(i) {
  const { initial: l, animate: s } = e3(i, q.useContext(mu));
  return q.useMemo(() => ({ initial: l, animate: s }), [G0(l), G0(s)]);
}
function G0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Xh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function MS(i, l, s) {
  for (const o in l)
    !Me(l[o]) && !cS(o, s) && (i[o] = l[o]);
}
function i3({ transformTemplate: i }, l) {
  return q.useMemo(() => {
    const s = Xh();
    return Uh(s, l, i), Object.assign({}, s.vars, s.style);
  }, [l]);
}
function a3(i, l) {
  const s = i.style || {}, o = {};
  return MS(o, s, i), Object.assign(o, i3(i, l)), o;
}
function l3(i, l) {
  const s = {}, o = a3(i, l);
  return i.drag && i.dragListener !== !1 && (s.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (s.tabIndex = 0), s.style = o, s;
}
const DS = () => ({
  ...Xh(),
  attrs: {}
});
function s3(i, l, s, o) {
  const c = q.useMemo(() => {
    const d = DS();
    return J1(d, l, dS(o), i.transformTemplate, i.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (i.style) {
    const d = {};
    MS(d, i.style, i), c.style = { ...d, ...c.style };
  }
  return c;
}
const o3 = /* @__PURE__ */ new Set([
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
function ou(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || o3.has(i);
}
function r3(i, l) {
  return i.startsWith("on") ? !ou(i) : l?.(i) ?? !ou(i);
}
function u3(i, l, s, o) {
  const c = {};
  for (const d in i)
    d === "values" && typeof i.values == "object" || Me(i[d]) || (r3(d, o) || s === !0 && ou(d) || !l && !ou(d) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && d.startsWith("onDrag")) && (c[d] = i[d]);
  return c;
}
const c3 = [
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
function Qh(i) {
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
      !!(c3.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function f3(i, l, s, { latestValues: o }, c, d = !1, f, m) {
  const g = (f ?? Qh(i) ? s3 : l3)(l, o, c, i), v = u3(l, typeof i == "string", d, m), y = i !== q.Fragment ? { ...v, ...g, ref: s } : {}, { children: S } = l, A = q.useMemo(() => Me(S) ? S.get() : S, [S]);
  return q.createElement(i, {
    ...y,
    children: A
  });
}
function d3({ scrapeMotionValuesFromProps: i, createRenderState: l }, s, o, c) {
  return {
    latestValues: h3(s, o, c, i),
    renderState: l()
  };
}
function h3(i, l, s, o) {
  const c = {}, d = o(i, {});
  for (const S in d)
    c[S] = Zr(d[S]);
  let { initial: f, animate: m } = i;
  const p = hu(i), g = lS(i);
  l && g && !p && i.inherit !== !1 && (f === void 0 && (f = l.initial), m === void 0 && (m = l.animate));
  let v = s ? s.initial === !1 : !1;
  v = v || f === !1;
  const y = v ? m : f;
  if (y && typeof y != "boolean" && !du(y)) {
    const S = Array.isArray(y) ? y : [y];
    for (let A = 0; A < S.length; A++) {
      const T = q1(i, S[A]);
      if (T) {
        const { transitionEnd: w, transition: E, ...z } = T;
        for (const B in z) {
          let G = z[B];
          if (Array.isArray(G)) {
            const _ = v ? G.length - 1 : 0;
            G = G[_];
          }
          G !== null && (c[B] = G);
        }
        for (const B in w)
          c[B] = w[B];
      }
    }
  }
  return c;
}
const zS = (i) => (l, s) => {
  const o = q.useContext(mu), c = q.useContext(hh), d = () => d3(i, l, o, c);
  return s ? d() : r2(d);
}, m3 = /* @__PURE__ */ zS({
  scrapeMotionValuesFromProps: qh,
  createRenderState: Xh
}), p3 = /* @__PURE__ */ zS({
  scrapeMotionValuesFromProps: hS,
  createRenderState: DS
}), g3 = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function y3(i, l, s) {
  const o = q.useRef(s);
  q.useInsertionEffect(() => {
    o.current = s;
  });
  const c = q.useRef(null);
  return q.useCallback((d) => {
    d && i.onMount?.(d), l && (d ? l.mount(d) : l.unmount());
    const f = o.current;
    if (typeof f == "function")
      if (d) {
        const m = f(d);
        typeof m == "function" && (c.current = m);
      } else c.current ? (c.current(), c.current = null) : f(d);
    else f && (f.current = d);
  }, [l]);
}
const OS = q.createContext({});
function vl(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function v3(i, l, s, o, c, d) {
  const { visualElement: f } = q.useContext(mu), m = q.useContext(wS), p = q.useContext(hh), g = q.useContext(AS), v = g.reducedMotion, y = g.skipAnimations, S = q.useRef(null), A = q.useRef(!1);
  o = o || m.renderer, !S.current && o && (S.current = o(i, {
    visualState: l,
    parent: f,
    props: s,
    presenceContext: p,
    blockInitialAnimation: p ? p.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: y,
    isSVG: d
  }), A.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const T = S.current, w = q.useContext(OS);
  T && !T.projection && c && (T.type === "html" || T.type === "svg") && b3(S.current, s, c, w);
  const E = q.useRef(!1);
  q.useInsertionEffect(() => {
    T && E.current && T.update(s, p);
  });
  const z = s[Z1], B = q.useRef(!!z && typeof window < "u" && !window.MotionHandoffIsComplete?.(z) && window.MotionHasOptimisedAnimation?.(z));
  return Lv(() => {
    !A.current || !T || (T.animationState?.animateChanges(), T.enteringChildren = void 0);
  }, []), Lv(() => {
    A.current = !0, T && (E.current = !0, window.MotionIsMounted = !0, T.updateFeatures(), T.scheduleRenderMicrotask(), B.current && T.animationState && T.animationState.animateChanges());
  }), q.useEffect(() => {
    T && (!B.current && T.animationState && T.animationState.animateChanges(), B.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(z);
    }), B.current = !1), T.enteringChildren = void 0);
  }), T;
}
function b3(i, l, s, o) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: m, layoutScroll: p, layoutRoot: g, layoutAnchor: v, layoutCrossfade: y } = l;
  i.projection = new s(i.latestValues, l["data-framer-portal-id"] ? void 0 : NS(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: d,
    alwaysMeasureLayout: !!f || m && vl(m),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: o,
    crossfade: y,
    layoutScroll: p,
    layoutRoot: g,
    layoutAnchor: v
  });
}
function NS(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : NS(i.parent);
}
function Td(i, { forwardMotionProps: l = !1, type: s } = {}, o, c) {
  o && t3(o);
  const d = s ? s === "svg" : Qh(i), f = d ? p3 : m3;
  function m(g, v) {
    let y;
    const S = {
      ...q.useContext(AS),
      ...g,
      layoutId: S3(g)
    }, { isStatic: A, isValidProp: T } = S, w = n3(g), E = f(g, A);
    if (!A && typeof window < "u") {
      T3();
      const z = x3(S);
      y = z.MeasureLayout, w.visualElement = v3(i, E, S, c, z.ProjectionNode, d);
    }
    return D.jsxs(mu.Provider, { value: w, children: [y && w.visualElement ? D.jsx(y, { visualElement: w.visualElement, ...S }) : null, f3(i, g, y3(E, w.visualElement, v), E, A, l, d, T)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const p = q.forwardRef(m);
  return p[g3] = i, p;
}
function S3({ layoutId: i }) {
  const l = q.useContext(Ib).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function T3(i, l) {
  q.useContext(wS).strict;
}
function x3(i) {
  const l = CS(), { drag: s, layout: o } = l;
  if (!s && !o)
    return {};
  const c = { ...s, ...o };
  return {
    MeasureLayout: s?.isEnabled(i) || o?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function E3(i, l) {
  if (typeof Proxy > "u")
    return Td;
  const s = /* @__PURE__ */ new Map(), o = (d, f) => Td(d, f, i, l), c = (d, f) => o(d, f);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, f) => f === "create" ? o : (s.has(f) || s.set(f, Td(f, void 0, i, l)), s.get(f))
  });
}
const A3 = (i, l) => l.isSVG ?? Qh(i) ? new aM(l) : new nM(l, {
  allowProjection: i !== q.Fragment
});
class w3 extends Gi {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = sM(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    du(l) && (this.unmountControls = l.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: l } = this.node.getProps(), { animate: s } = this.node.prevProps || {};
    l !== s && this.updateAnimationControlsSubscription();
  }
  unmount() {
    this.node.animationState.reset(), this.unmountControls?.();
  }
}
let C3 = 0;
class M3 extends Gi {
  constructor() {
    super(...arguments), this.id = C3++;
  }
  update() {
    const { presenceContext: l, prevPresenceContext: s, animationState: o } = this.node;
    if (!l || !o)
      return;
    const { isPresent: c, onExitComplete: d } = l, f = s?.isPresent;
    if (c === f)
      return;
    if (c && f === !1) {
      if (this.exit === !0) {
        const { initial: p } = this.node.getProps();
        if (p && !Array.isArray(p)) {
          const { transition: g, transitionEnd: v, ...y } = Ta(this.node, p) || {};
          for (const S in y)
            this.node.getValue(S)?.jump(y[S]);
        }
        this.node.blockInitialAnimation = !1, o.reset(), o.animateChanges();
      } else
        o.setActive("exit", !1);
      this.exit = void 0;
      return;
    }
    const m = this.exit = o.setActive("exit", !c);
    d && !c && m.then(() => {
      this.exit === m && (this.exit = !0, d(this.id));
    });
  }
  mount() {
    const { register: l, onExitComplete: s } = this.node.presenceContext || {};
    s && s(this.id), l && (this.unmount = l(this.id));
  }
  unmount() {
  }
}
const D3 = {
  animation: {
    Feature: w3
  },
  exit: {
    Feature: M3
  }
};
function pu(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const z3 = (i) => (l) => kh(l) && i(l, pu(l));
function Ls(i, l, s, o) {
  return Zs(i, l, z3(s), o);
}
const RS = ({ current: i }) => i ? i.ownerDocument.defaultView : null, Y0 = (i, l) => Math.abs(i - l);
function O3(i, l) {
  const s = Y0(i.x, l.x), o = Y0(i.y, l.y);
  return Math.sqrt(s ** 2 + o ** 2);
}
const q0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class _S {
  constructor(l, s, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: f = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (T) => {
      this.handleScroll(T.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = jr(this.lastRawMoveEventInfo, this.transformPagePoint));
      const T = xd(this.lastMoveEventInfo, this.history), w = this.startEvent !== null, E = O3(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!w && !E)
        return;
      const { point: z } = T;
      this.history.push({ ...z, timestamp: te.now() });
      const { onStart: B, onMove: G } = this.handlers;
      w || (B && B(this.lastMoveEvent, T), this.startEvent = this.lastMoveEvent), G && G(this.lastMoveEvent, T);
    }, this.handlePointerMove = (T, w) => {
      this.lastMoveEvent = T, this.lastRawMoveEventInfo = w, this.lastMoveEventInfo = jr(w, this.transformPagePoint), this.hasPendingMove = !0, Kt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (T, w) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: E, onSessionEnd: z, resumeAnimation: B } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && B && B(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const G = xd(T.type === "pointercancel" ? this.lastMoveEventInfo : jr(w, this.transformPagePoint), this.history);
      this.startEvent && E && E(T, G), z && z(T, G);
    }, !kh(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = s, this.transformPagePoint = o, this.distanceThreshold = f, this.contextWindow = c || window;
    const p = pu(l), g = jr(p, this.transformPagePoint), { point: v } = g, { timestamp: y } = ce;
    this.history = [{ ...v, timestamp: y }];
    const { onSessionStart: S } = s;
    S && S(l, xd(g, this.history));
    const A = { passive: !0, capture: !0 };
    this.removeListeners = Is(Ls(this.contextWindow, "pointermove", this.handlePointerMove, A), Ls(this.contextWindow, "pointerup", this.handlePointerUp, A), Ls(this.contextWindow, "pointercancel", this.handlePointerUp, A)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let s = l.parentElement;
    for (; s; ) {
      const o = getComputedStyle(s);
      (q0.has(o.overflowX) || q0.has(o.overflowY)) && this.scrollPositions.set(s, {
        x: s.scrollLeft,
        y: s.scrollTop
      }), s = s.parentElement;
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
    const s = this.scrollPositions.get(l);
    if (!s)
      return;
    const o = l === window, c = o ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, d = { x: c.x - s.x, y: c.y - s.y };
    d.x === 0 && d.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, c), Kt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Hi(this.updatePoint);
  }
}
function jr(i, l) {
  return l ? { point: l(i.point) } : i;
}
function X0(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function xd({ point: i }, l) {
  return {
    point: i,
    delta: X0(i, VS(l)),
    offset: X0(i, N3(l)),
    velocity: R3(l, 0.1)
  };
}
function N3(i) {
  return i[0];
}
function VS(i) {
  return i[i.length - 1];
}
function R3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let s = i.length - 1, o = null;
  const c = VS(i);
  for (; s >= 0 && (o = i[s], !(c.timestamp - o.timestamp > /* @__PURE__ */ dn(l))); )
    s--;
  if (!o)
    return { x: 0, y: 0 };
  o === i[0] && i.length > 2 && c.timestamp - o.timestamp > /* @__PURE__ */ dn(l) * 2 && (o = i[1]);
  const d = /* @__PURE__ */ We(c.timestamp - o.timestamp);
  if (d === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (c.x - o.x) / d,
    y: (c.y - o.y) / d
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function _3(i, { min: l, max: s }, o) {
  return l !== void 0 && i < l ? i = o ? Qt(l, i, o.min) : Math.max(i, l) : s !== void 0 && i > s && (i = o ? Qt(s, i, o.max) : Math.min(i, s)), i;
}
function Q0(i, l, s) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: s !== void 0 ? i.max + s - (i.max - i.min) : void 0
  };
}
function V3(i, { top: l, left: s, bottom: o, right: c }) {
  return {
    x: Q0(i.x, s, c),
    y: Q0(i.y, l, o)
  };
}
function Z0(i, l) {
  let s = l.min - i.min, o = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([s, o] = [o, s]), { min: s, max: o };
}
function j3(i, l) {
  return {
    x: Z0(i.x, l.x),
    y: Z0(i.y, l.y)
  };
}
function L3(i, l) {
  let s = 0.5;
  const o = je(i), c = je(l);
  return c > o ? s = /* @__PURE__ */ xa(l.min, l.max - o, i.min) : o > c && (s = /* @__PURE__ */ xa(i.min, i.max - c, l.min)), kn(0, 1, s);
}
function B3(i, l) {
  const s = {};
  return l.min !== void 0 && (s.min = l.min - i.min), l.max !== void 0 && (s.max = l.max - i.min), s;
}
const th = 0.35;
function U3(i = th) {
  return i === !1 ? i = 0 : i === !0 && (i = th), {
    x: K0(i, "left", "right"),
    y: K0(i, "top", "bottom")
  };
}
function K0(i, l, s) {
  return {
    min: P0(i, l),
    max: P0(i, s)
  };
}
function P0(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const H3 = /* @__PURE__ */ new WeakMap();
class k3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = he(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: s = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (y) => {
      s && this.snapToCursor(y), this.stopAnimation();
    }, f = (y, S) => {
      const { drag: A, dragPropagation: T, onDragStart: w } = this.getProps();
      if (A && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = RC(A), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Tn((z) => {
        let B = this.getAxisMotionValue(z).get() || 0;
        if (Un.test(B)) {
          const { projection: G } = this.visualElement;
          if (G && G.layout) {
            const _ = G.layout.layoutBox[z];
            _ && (B = je(_) * (parseFloat(B) / 100));
          }
        }
        this.originPoint[z] = B;
      }), w && Kt.update(() => w(y, S), !1, !0), Fd(this.visualElement, "transform");
      const { animationState: E } = this.visualElement;
      E && E.setActive("whileDrag", !0);
    }, m = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S;
      const { dragPropagation: A, dragDirectionLock: T, onDirectionLock: w, onDrag: E } = this.getProps();
      if (!A && !this.openDragLock)
        return;
      const { offset: z } = S;
      if (T && this.currentDirection === null) {
        this.currentDirection = Y3(z), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", S.point, z), this.updateAxis("y", S.point, z), this.visualElement.render(), E && Kt.update(() => E(y, S), !1, !0);
    }, p = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S, this.stop(y, S), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new _S(l, {
      onSessionStart: d,
      onStart: f,
      onMove: m,
      onSessionEnd: p,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: o,
      contextWindow: RS(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, s) {
    const o = l || this.latestPointerEvent, c = s || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !c || !o)
      return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: m } = this.getProps();
    m && Kt.postRender(() => m(o, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: s } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: o } = this.getProps();
    !o && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1);
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
  updateAxis(l, s, o) {
    const { drag: c } = this.getProps();
    if (!o || !Lr(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + o[l];
    this.constraints && this.constraints[l] && (f = _3(f, this.constraints[l], this.elastic[l])), d.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: s } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && vl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = V3(o.layoutBox, l) : this.constraints = !1, this.elastic = U3(s), c !== this.constraints && !vl(l) && o && this.constraints && !this.hasMutatedConstraints && Tn((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = B3(o.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: s } = this.getProps();
    if (!l || !vl(l))
      return !1;
    const o = l.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const d = NC(o, c.root, this.visualElement.getTransformPagePoint());
    let f = j3(c.layout.layoutBox, d);
    if (s) {
      const m = s(DC(f));
      this.hasMutatedConstraints = !!m, m && (f = I1(m));
    }
    return f;
  }
  startAnimation(l) {
    const { drag: s, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: m } = this.getProps(), p = this.constraints || {}, g = Tn((v) => {
      if (!Lr(v, s, this.currentDirection))
        return;
      let y = p && p[v] || {};
      (f === !0 || f === v) && (y = { min: 0, max: 0 });
      const S = c ? 200 : 1e6, A = c ? 40 : 1e7, T = {
        type: "inertia",
        velocity: o ? l[v] : 0,
        bounceStiffness: S,
        bounceDamping: A,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...d,
        ...y
      };
      return this.startAxisValueAnimation(v, T);
    });
    return Promise.all(g).then(m);
  }
  startAxisValueAnimation(l, s) {
    const o = this.getAxisMotionValue(l);
    return Fd(this.visualElement, l), o.start(_h(l, o, 0, s, this.visualElement, !1));
  }
  stopAnimation() {
    Tn((l) => this.getAxisMotionValue(l).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(l) {
    const s = `_drag${l.toUpperCase()}`, c = this.visualElement.getProps()[s];
    return c || this.visualElement.getValue(l, this.visualElement.latestValues[l] ?? 0);
  }
  /**
   * Measure the live box - projection.layout may or may not include the
   * drag transform, depending on when it was measured.
   */
  snapToCursor({ clientX: l, clientY: s }) {
    const { drag: o } = this.getProps(), c = { x: l, y: s }, d = this.visualElement.getTransformPagePoint()?.(c) || c, f = this.visualElement.measureViewportBox();
    Tn((m) => {
      if (!Lr(m, o, this.currentDirection))
        return;
      const p = this.getAxisMotionValue(m), { min: g, max: v } = f[m];
      p.set((p.get() || 0) + d[m] - Qt(g, v, 0.5));
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
    const { drag: l, dragConstraints: s } = this.getProps(), { projection: o } = this.visualElement;
    if (!vl(s) || !o || !this.constraints)
      return;
    this.stopAnimation();
    const c = this.constraints, d = { x: 0, y: 0 };
    Tn((m) => {
      const p = this.getAxisMotionValue(m).get();
      d[m] = L3({ min: p, max: p }, c[m]);
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    this.visualElement.current.style.transform = f ? f({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), Tn((m) => {
      const p = this.getAxisMotionValue(m);
      if (!Lr(m, l, null) || !p.get())
        return;
      const { min: g, max: v } = this.constraints[m];
      p.set(Qt(g, v, d[m]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    H3.set(this.visualElement, this);
    const l = this.visualElement.current, s = Ls(l, "pointerdown", (g) => {
      const { drag: v, dragListener: y = !0 } = this.getProps(), S = g.target, A = S !== l && UC(S);
      v && y && !A && this.start(g);
    });
    let o;
    const c = () => {
      const { dragConstraints: g } = this.getProps();
      vl(g) && g.current && (this.constraints = this.resolveRefConstraints(), o || (o = G3(l, g.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, f = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Kt.read(c);
    const m = Zs(window, "resize", () => this.scalePositionWithinConstraints()), p = d.addEventListener("didUpdate", (({ delta: g, hasLayoutChanged: v }) => {
      this.isDragging && v && (Tn((y) => {
        const S = this.getAxisMotionValue(y);
        S && (this.originPoint[y] += g[y].translate, S.set(S.get() + g[y].translate));
      }), this.visualElement.render());
    }));
    return () => {
      m(), s(), f(), p && p(), o && o();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: f = th, dragMomentum: m = !0 } = l;
    return {
      ...l,
      drag: s,
      dragDirectionLock: o,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: m
    };
  }
}
function F0(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function G3(i, l, s) {
  const o = u0(i, F0(s)), c = u0(l, F0(s));
  return () => {
    o(), c();
  };
}
function Lr(i, l, s) {
  return (l === !0 || l === i) && (s === null || s === i);
}
function Y3(i, l = 10) {
  let s = null;
  return Math.abs(i.y) > l ? s = "y" : Math.abs(i.x) > l && (s = "x"), s;
}
class q3 extends Gi {
  constructor(l) {
    super(l), this.removeGroupControls = En, this.removeListeners = En, this.controls = new k3(l);
  }
  mount() {
    const { dragControls: l } = this.node.getProps();
    l && (this.removeGroupControls = l.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || En;
  }
  update() {
    const { dragControls: l } = this.node.getProps(), { dragControls: s } = this.node.prevProps || {};
    l !== s && (this.removeGroupControls(), l && (this.removeGroupControls = l.subscribe(this.controls)));
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners(), this.controls.isDragging || this.controls.endPanSession();
  }
}
const Ed = (i) => (l, s) => {
  i && Kt.update(() => i(l, s), !1, !0);
};
class X3 extends Gi {
  constructor() {
    super(...arguments), this.removePointerDownListener = En;
  }
  onPointerDown(l) {
    this.session = new _S(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: RS(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: s, onPan: o, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Ed(l),
      onStart: Ed(s),
      onMove: Ed(o),
      onEnd: (d, f) => {
        delete this.session, c && Kt.postRender(() => c(d, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Ls(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let Ad = !1;
class Q3 extends q.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: s, switchLayoutGroup: o, layoutId: c } = this.props, { projection: d } = l;
    d && (s.group && s.group.add(d), o && o.register && c && o.register(d), Ad && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Kr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: s, visualElement: o, drag: c, isPresent: d } = this.props, { projection: f } = o;
    return f && (f.isPresent = d, l.layoutDependency !== s && f.setOptions({
      ...f.options,
      layoutDependency: s
    }), Ad = !0, c || l.layoutDependency !== s || s === void 0 || l.isPresent !== d ? f.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? f.promote() : f.relegate() || Kt.postRender(() => {
      const m = f.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: s } = this.props, { projection: o } = l;
    o && (o.options.layoutAnchor = s, o.root.didUpdate(), Hh.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: s, switchLayoutGroup: o } = this.props, { projection: c } = l;
    Ad = !0, c && (c.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(c), o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function jS(i) {
  const [l, s] = WM(), o = q.useContext(Ib);
  return D.jsx(Q3, { ...i, layoutGroup: o, switchLayoutGroup: q.useContext(OS), isPresent: l, safeToRemove: s });
}
const Z3 = {
  pan: {
    Feature: X3
  },
  drag: {
    Feature: q3,
    ProjectionNode: ES,
    MeasureLayout: jS
  }
};
function J0(i, l, s) {
  const { props: o } = i;
  i.animationState && o.whileHover && i.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s, d = o[c];
  d && Kt.postRender(() => d(l, pu(l)));
}
class K3 extends Gi {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = VC(l, (s, o) => (J0(this.node, o, "Start"), (c) => J0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class P3 extends Gi {
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
    this.unmount = Is(Zs(this.node.current, "focus", () => this.onFocus()), Zs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function I0(i, l, s) {
  const { props: o } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && o.whileTap && i.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s), d = o[c];
  d && Kt.postRender(() => d(l, pu(l)));
}
class F3 extends Gi {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: s, propagate: o } = this.node.props;
    this.unmount = kC(l, (c, d) => (I0(this.node, d, "Start"), (f, { success: m }) => I0(this.node, f, m ? "End" : "Cancel")), {
      useGlobalTarget: s,
      stopPropagation: o?.tap === !1
    });
  }
  unmount() {
  }
}
const eh = /* @__PURE__ */ new WeakMap(), wd = /* @__PURE__ */ new WeakMap(), J3 = (i) => {
  const l = eh.get(i.target);
  l && l(i);
}, I3 = (i) => {
  i.forEach(J3);
};
function W3({ root: i, ...l }) {
  const s = i || document;
  wd.has(s) || wd.set(s, {});
  const o = wd.get(s), c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(I3, { root: i, ...l })), o[c];
}
function $3(i, l, s) {
  const o = W3(l);
  return eh.set(i, s), o.observe(i), () => {
    eh.delete(i), o.unobserve(i);
  };
}
const tD = {
  some: 0,
  all: 1
};
class eD extends Gi {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: s, margin: o, amount: c = "some", once: d } = l, f = {
      root: s ? s.current : void 0,
      rootMargin: o,
      threshold: typeof c == "number" ? c : tD[c]
    }, m = (p) => {
      const { isIntersecting: g } = p;
      if (this.isInView === g || (this.isInView = g, d && !g && this.hasEnteredView))
        return;
      g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
      const { onViewportEnter: v, onViewportLeave: y } = this.node.getProps(), S = g ? v : y;
      S && S(p);
    };
    this.stopObserver = $3(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(nD(l, s)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function nD({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (s) => i[s] !== l[s];
}
const iD = {
  inView: {
    Feature: eD
  },
  tap: {
    Feature: F3
  },
  focus: {
    Feature: P3
  },
  hover: {
    Feature: K3
  }
}, aD = {
  layout: {
    ProjectionNode: ES,
    MeasureLayout: jS
  }
}, lD = {
  ...D3,
  ...iD,
  ...Z3,
  ...aD
}, nh = /* @__PURE__ */ E3(lD, A3);
function Zh() {
  !Yh.current && sS();
  const [i] = q.useState(au.current);
  return i;
}
const sD = {
  some: 0,
  all: 1
};
function oD(i, l, { root: s, margin: o, amount: c = "some" } = {}) {
  const d = Bh(i), f = /* @__PURE__ */ new WeakMap(), m = (g) => {
    g.forEach((v) => {
      const y = f.get(v.target);
      if (v.isIntersecting !== !!y)
        if (v.isIntersecting) {
          const S = l(v.target, v);
          typeof S == "function" ? f.set(v.target, S) : p.unobserve(v.target);
        } else typeof y == "function" && (y(v), f.delete(v.target));
    });
  }, p = new IntersectionObserver(m, {
    root: s,
    rootMargin: o,
    threshold: typeof c == "number" ? c : sD[c]
  });
  return d.forEach((g) => p.observe(g)), () => p.disconnect();
}
function Kh(i, { root: l, margin: s, amount: o, once: c = !1, initial: d = !1 } = {}) {
  const [f, m] = q.useState(d);
  return q.useEffect(() => {
    if (!i.current || c && f)
      return;
    const p = () => (m(!0), c ? void 0 : () => m(!1)), g = {
      root: l && l.current || void 0,
      margin: s,
      amount: o
    };
    return oD(i.current, p, g);
  }, [l, i, s, c, o]), f;
}
function rD({
  title: i = `Little moments.
Lasting impressions.`,
  subtitle: l = "Stories from the people who bring our vetiver pieces into their homes and celebrations.",
  badgeText: s = "",
  testimonials: o = [],
  autoRotateInterval: c = 6e3,
  trustedCompanies: d = [],
  trustedCompaniesTitle: f = "Our community",
  className: m
}) {
  const p = q.useRef(null), g = Kh(p, { amount: 0.15 }), v = Zh(), [y, S] = q.useState(0), [A, T] = q.useState(!1), [w, E] = q.useState(!1), [z, B] = q.useState(!0), G = q.useId(), _ = o.length ? y % o.length : 0;
  q.useEffect(() => {
    const K = () => B(!document.hidden);
    return K(), document.addEventListener("visibilitychange", K), () => document.removeEventListener("visibilitychange", K);
  }, []), q.useEffect(() => {
    if (c <= 0 || o.length <= 1 || v || A || w || !g || !z) return;
    const K = window.setInterval(() => S((N) => (N + 1) % o.length), Math.max(3e3, c));
    return () => clearInterval(K);
  }, [c, o.length, v, A, w, g, z]);
  const Q = (K) => {
    T(!0), S((K + o.length) % o.length);
  };
  return /* @__PURE__ */ D.jsxs("section", { ref: p, id: "testimonials", "aria-labelledby": G, className: wa("vt-testimonials", m), children: [
    /* @__PURE__ */ D.jsxs("div", { className: "vt-section-inner vt:grid vt:grid-cols-1 vt:gap-12 vt:md:grid-cols-2 vt:md:gap-16", children: [
      /* @__PURE__ */ D.jsxs("div", { className: "vt-testimonial-intro", children: [
        s && /* @__PURE__ */ D.jsx("p", { className: "vt-review-badge", children: s }),
        /* @__PURE__ */ D.jsx("h2", { id: G, children: i }),
        /* @__PURE__ */ D.jsx("p", { children: l }),
        /* @__PURE__ */ D.jsxs("button", { type: "button", className: "vt-primary-button vt-add-feedback", "aria-haspopup": "dialog", "aria-controls": "feedback-dialog", onClick: () => window.dispatchEvent(new Event("vettiver:add-feedback")), children: [
          "Add feedback ",
          /* @__PURE__ */ D.jsx(Vs, { size: 18, "aria-hidden": "true" })
        ] }),
        o.length > 1 && /* @__PURE__ */ D.jsxs("div", { className: "vt-review-controls", "aria-label": "Customer story controls", children: [
          /* @__PURE__ */ D.jsx("button", { type: "button", onClick: () => Q(_ - 1), "aria-label": "Previous review", children: /* @__PURE__ */ D.jsx(Gb, { size: 19 }) }),
          /* @__PURE__ */ D.jsxs("span", { children: [
            String(_ + 1).padStart(2, "0"),
            " / ",
            String(o.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ D.jsx("button", { type: "button", onClick: () => Q(_ + 1), "aria-label": "Next review", children: /* @__PURE__ */ D.jsx(Vs, { size: 19 }) }),
          !v && c > 0 && /* @__PURE__ */ D.jsx("button", { type: "button", onClick: () => T(!A), "aria-label": A ? "Play review slideshow" : "Pause review slideshow", children: A ? /* @__PURE__ */ D.jsx(cu, { size: 17 }) : /* @__PURE__ */ D.jsx(uu, { size: 17 }) })
        ] })
      ] }),
      /* @__PURE__ */ D.jsxs("div", { className: "vt-review-stage", onMouseEnter: () => E(!0), onMouseLeave: () => E(!1), onFocusCapture: () => E(!0), onBlurCapture: (K) => {
        K.currentTarget.contains(K.relatedTarget) || E(!1);
      }, "aria-roledescription": o.length ? "carousel" : void 0, "aria-label": "Customer feedback", children: [
        o.length ? /* @__PURE__ */ D.jsx("div", { className: "vt-review-stack", "aria-live": A ? "polite" : "off", children: o.map((K, N) => /* @__PURE__ */ D.jsxs(
          nh.article,
          {
            className: "vt-review-card",
            "aria-hidden": N !== _,
            "aria-label": "Review " + (N + 1) + " of " + o.length,
            initial: !1,
            animate: { opacity: N === _ ? 1 : 0, x: v || N === _ ? 0 : 32, scale: v || N === _ ? 1 : 0.98 },
            transition: { duration: v ? 0 : 0.45, ease: "easeInOut" },
            style: { gridArea: "1 / 1", pointerEvents: N === _ ? "auto" : "none" },
            children: [
              /* @__PURE__ */ D.jsx("div", { className: "vt-review-stars", "aria-label": Math.max(1, Math.min(5, Math.round(K.rating || 1))) + " out of 5 stars", children: Array.from({ length: Math.max(1, Math.min(5, Math.round(K.rating || 1))) }, (O, ot) => /* @__PURE__ */ D.jsx(Fb, { size: 18, fill: "currentColor", "aria-hidden": "true" }, ot)) }),
              /* @__PURE__ */ D.jsx(s2, { size: 38, strokeWidth: 1.2, className: "vt-quote-mark", "aria-hidden": "true" }),
              /* @__PURE__ */ D.jsx("blockquote", { children: K.content }),
              /* @__PURE__ */ D.jsx(Hb, { className: "vt:my-6" }),
              /* @__PURE__ */ D.jsx("p", { className: "vt-review-name", children: K.name })
            ]
          },
          K.id
        )) }) : /* @__PURE__ */ D.jsxs("div", { className: "vt-review-empty", children: [
          /* @__PURE__ */ D.jsx(l2, { size: 38, strokeWidth: 1.2, "aria-hidden": "true" }),
          /* @__PURE__ */ D.jsx("h3", { children: "Your story belongs here." }),
          /* @__PURE__ */ D.jsx("p", { children: "Our customer stories are just beginning. Once feedback has been reviewed and approved, you can read it here." }),
          /* @__PURE__ */ D.jsx("span", { children: "No published reviews yet." })
        ] }),
        o.length > 1 && /* @__PURE__ */ D.jsx("div", { className: "vt-review-dots", children: o.map((K, N) => /* @__PURE__ */ D.jsx("button", { type: "button", onClick: () => Q(N), "aria-label": "Read review by " + K.name, "aria-pressed": N === _, children: /* @__PURE__ */ D.jsx("span", {}) }, K.id)) })
      ] })
    ] }),
    d.length > 0 && /* @__PURE__ */ D.jsxs("div", { className: "vt-section-inner vt-review-companies", children: [
      /* @__PURE__ */ D.jsx("h3", { children: f }),
      /* @__PURE__ */ D.jsx("div", { children: d.map((K) => /* @__PURE__ */ D.jsx("span", { children: K }, K)) })
    ] })
  ] });
}
const Cd = "vettiver-feedback-draft-v1";
function W0({ endpoint: i = "" }) {
  const l = q.useRef(null);
  q.useEffect(() => {
    const _ = l.current;
    if (!_) return;
    const Q = () => {
      _.open || _.showModal();
    };
    return window.addEventListener("vettiver:add-feedback", Q), () => {
      window.removeEventListener("vettiver:add-feedback", Q), _.close();
    };
  }, []);
  const [s, o] = q.useState(""), [c, d] = q.useState(""), [f, m] = q.useState(0), [p, g] = q.useState(!1), [v, y] = q.useState(""), [S, A] = q.useState(!1), [T, w] = q.useState(!1), [E, z] = q.useState(!1);
  async function B(_) {
    if (_.preventDefault(), A(!1), !s.trim() || !c.trim() || !f) {
      A(!0), y("Please add your name, feedback and a star rating.");
      return;
    }
    if (E || p) return;
    const Q = { name: s.trim(), content: c.trim(), rating: f };
    if (!i) {
      try {
        localStorage.setItem(Cd, JSON.stringify(Q)), y("Draft saved only on this device. It has not been sent or published.");
      } catch {
        A(!0), y("Your browser could not save the draft. Please copy your feedback to keep it.");
      }
      return;
    }
    g(!0);
    try {
      const K = await fetch(i, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...Q, consentToPublish: T }), credentials: "same-origin" });
      if (!K.ok) throw new Error("Request failed");
      const N = await K.json();
      if (!N.id || N.status !== "pending") throw new Error("Invalid acknowledgement");
      z(!0), y("Thank you. Your feedback was received and is waiting for approval. It is not public yet.");
    } catch {
      A(!0), y("We could not submit your feedback. Nothing has been published. Please try again.");
    } finally {
      g(!1);
    }
  }
  function G() {
    try {
      const _ = JSON.parse(localStorage.getItem(Cd) || "null");
      if (!_ || typeof _.name != "string" || typeof _.content != "string" || !Number.isInteger(_.rating) || _.rating < 1 || _.rating > 5) {
        y("No saved draft on this device.");
        return;
      }
      o(_.name.slice(0, 80)), d(_.content.slice(0, 1200)), m(_.rating), y("Your draft is restored. It has not been sent.");
    } catch {
      y("No readable draft on this device.");
    }
  }
  return /* @__PURE__ */ D.jsxs("dialog", { ref: l, id: "feedback-dialog", className: "vt-feedback-dialog", "aria-labelledby": "feedback-dialog-title", "aria-describedby": "feedback-dialog-description", onKeyDown: (_) => {
    if (_.key !== "Tab") return;
    const Q = Array.from(_.currentTarget.querySelectorAll("button:not(:disabled), input:not(:disabled), textarea:not(:disabled)")), K = Q[0], N = Q[Q.length - 1];
    _.shiftKey && document.activeElement === K ? (_.preventDefault(), N?.focus()) : !_.shiftKey && document.activeElement === N && (_.preventDefault(), K?.focus());
  }, onClick: (_) => {
    if (_.target !== _.currentTarget) return;
    const Q = _.currentTarget.getBoundingClientRect();
    (_.clientX < Q.left || _.clientX > Q.right || _.clientY < Q.top || _.clientY > Q.bottom) && _.currentTarget.close();
  }, children: [
    /* @__PURE__ */ D.jsx("button", { type: "button", className: "vt-feedback-close", "aria-label": "Close feedback", onClick: () => l.current?.close(), children: /* @__PURE__ */ D.jsx(o2, { size: 22, "aria-hidden": "true" }) }),
    /* @__PURE__ */ D.jsxs("div", { className: "vt-feedback-heading", children: [
      /* @__PURE__ */ D.jsx("h2", { id: "feedback-dialog-title", children: "A few words mean a lot." }),
      /* @__PURE__ */ D.jsx("p", { id: "feedback-dialog-description", children: "Tell us about your Vettiver experience." })
    ] }),
    /* @__PURE__ */ D.jsxs("form", { id: "feedback-form", className: "vt-feedback-form", onSubmit: B, "aria-label": "Share customer feedback", children: [
      /* @__PURE__ */ D.jsxs("div", { className: "vt-feedback-fields", children: [
        /* @__PURE__ */ D.jsxs("div", { children: [
          /* @__PURE__ */ D.jsx("label", { htmlFor: "feedback-name", children: "Your name" }),
          /* @__PURE__ */ D.jsx("input", { id: "feedback-name", name: "name", autoComplete: "name", maxLength: 80, required: !0, value: s, onChange: (_) => o(_.target.value), disabled: p || E })
        ] }),
        /* @__PURE__ */ D.jsxs("fieldset", { children: [
          /* @__PURE__ */ D.jsx("legend", { children: "Your rating" }),
          /* @__PURE__ */ D.jsx("div", { className: "vt-rating-input", children: [1, 2, 3, 4, 5].map((_) => /* @__PURE__ */ D.jsxs("label", { className: _ <= f ? "is-selected" : "", children: [
            /* @__PURE__ */ D.jsx("input", { type: "radio", name: "rating", value: _, required: !0, checked: f === _, onChange: () => m(_), disabled: p || E }),
            /* @__PURE__ */ D.jsx(Fb, { size: 25, fill: _ <= f ? "currentColor" : "none", "aria-hidden": "true" }),
            /* @__PURE__ */ D.jsxs("span", { className: "vt:sr-only", children: [
              _,
              " ",
              _ === 1 ? "star" : "stars"
            ] })
          ] }, _)) })
        ] })
      ] }),
      /* @__PURE__ */ D.jsx("label", { htmlFor: "feedback-content", children: "Your feedback" }),
      /* @__PURE__ */ D.jsx("textarea", { id: "feedback-content", name: "content", rows: 3, maxLength: 1200, required: !0, value: c, onChange: (_) => d(_.target.value), disabled: p || E, placeholder: "What did you choose, and how was your experience?" }),
      i ? /* @__PURE__ */ D.jsxs("label", { className: "vt-feedback-consent", children: [
        /* @__PURE__ */ D.jsx("input", { type: "checkbox", required: !0, checked: T, onChange: (_) => w(_.target.checked), disabled: p || E }),
        " I agree that my name, rating and feedback may be published after review."
      ] }) : /* @__PURE__ */ D.jsx("p", { className: "vt-feedback-note", children: "Review submissions will open when our approval system is ready. For now, save a draft on this device. Nothing is sent to us." }),
      /* @__PURE__ */ D.jsxs("div", { className: "vt-feedback-actions", children: [
        /* @__PURE__ */ D.jsxs("button", { className: "vt-primary-button", type: "submit", disabled: p || E, children: [
          p ? "Sending…" : E ? "Waiting for approval" : i ? "Send for approval" : "Save feedback draft",
          /* @__PURE__ */ D.jsx(dh, { size: 18, "aria-hidden": "true" })
        ] }),
        !i && /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
          /* @__PURE__ */ D.jsx("button", { className: "vt-text-link", type: "button", onClick: G, children: "Restore draft" }),
          /* @__PURE__ */ D.jsx("button", { className: "vt-text-link", type: "button", onClick: () => {
            try {
              localStorage.removeItem(Cd), y("Saved draft removed from this device.");
            } catch {
              y("Could not remove the saved draft.");
            }
          }, children: "Delete saved draft" })
        ] })
      ] }),
      /* @__PURE__ */ D.jsx("p", { className: "vt-feedback-status" + (S ? " is-error" : ""), role: "status", "aria-live": "polite", children: v })
    ] })
  ] });
}
const Ks = (i, l, s) => i < l ? l : i > s ? s : i, $0 = (i, l = "174, 204, 135") => {
  const s = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec((i || "").trim());
  if (!s) return l;
  const o = s[1].length === 3 ? s[1].replace(/./g, (d) => d + d) : s[1], c = parseInt(o, 16);
  return (c >> 16 & 255) + ", " + (c >> 8 & 255) + ", " + (c & 255);
}, uD = (i, l, s) => {
  if (!(i > 0) || !(l > 0)) return 0;
  const o = 100 * l / i;
  return s > 0 ? Math.min(o, s) : o;
}, cD = (i, l = 30, s = 82) => l + (s - l) * Ks(Number.isFinite(i) ? i : 0.5, 0, 1), tb = (i, l = 58, s = 9) => l + s * (0.7 * Math.sin(i * 0.21) + 0.3 * Math.sin(i * 0.077 + 1.3)), Br = (i, l, s, o) => l + (i - l) * Math.pow(1 - Ks(s, 0, 1), Ks(o, 0, 0.1) * 60), fD = (i, l) => !(i > 0) || !(l >= 0) ? 0.8 : Ks(((100 - i - l) / 2 + i) / 100, 0.5, 1.2), dD = (i, l, s) => Math.max(0, i * (l + Ks(Number.isFinite(s) ? s : 0, -0.4, 0.4))), eb = {
  x: /* @__PURE__ */ D.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ D.jsx("path", { fill: "currentColor", d: "M17.6 3.5h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9-5.2 5.9H3.2l6.7-7.7L2.8 3.5h5.9l4.1 5.4 4.8-5.4Zm-1 15.3h1.6L7.9 5.1H6.2l10.4 13.7Z" }) }),
  linkedin: /* @__PURE__ */ D.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ D.jsx("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "2.5" }),
    /* @__PURE__ */ D.jsx("path", { d: "M8 10.5V16M12 16v-5.5M12 13c0-1.6 1-2.6 2.4-2.6s2.1.9 2.1 2.4V16" }),
    /* @__PURE__ */ D.jsx("circle", { cx: "8", cy: "7.7", r: ".55", fill: "currentColor" })
  ] }),
  youtube: /* @__PURE__ */ D.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ D.jsx("rect", { x: "2.75", y: "5.5", width: "18.5", height: "13", rx: "4" }),
    /* @__PURE__ */ D.jsx("path", { d: "M10.2 9.3v5.4l4.6-2.7-4.6-2.7Z" })
  ] }),
  instagram: /* @__PURE__ */ D.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ D.jsx("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "5" }),
    /* @__PURE__ */ D.jsx("circle", { cx: "12", cy: "12", r: "3.9" }),
    /* @__PURE__ */ D.jsx("circle", { cx: "17.1", cy: "6.9", r: ".6", fill: "currentColor" })
  ] }),
  github: /* @__PURE__ */ D.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: /* @__PURE__ */ D.jsx("path", { d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" }) }),
  dribbble: /* @__PURE__ */ D.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ D.jsx("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ D.jsx("path", { d: "M8.6 4.2c3.4 4.4 5.4 9.6 6.1 15.6M3.6 10.6c5.6.3 10.4-1 13.9-4.4M5.6 17.6c3.4-4.2 8.6-5.6 14.8-3.6" })
  ] })
}, hD = [
  { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "#about" }, { label: "Customer stories", href: "#reviews" }] },
  { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "#feedback-form" }, { label: "Good to know", href: "#questions-title" }, { label: "Back to the top", href: "#home" }] }
];
function mD({
  brand: i = "Vettiver",
  wordmark: l,
  company: s = "Akash Vetiver Export",
  year: o = (/* @__PURE__ */ new Date()).getFullYear(),
  socials: c = [],
  credits: d = [{ label: "Natural roots. Thoughtful hands." }, { lead: "Handcrafted in ", label: "Tamil Nadu, India" }],
  columns: f = hD,
  onLinkClick: m,
  cut: p = 0.1,
  background: g = "#08170f",
  ink: v = "#f4f8ef",
  muted: y = "#bacbb5",
  accent: S = "#b1cd8b",
  wordTop: A = "#668b54",
  wordFoot: T = "#152d1c",
  fontSans: w = "Outfit, sans-serif",
  wordWeight: E = 600,
  animate: z = !0,
  className: B = ""
}) {
  const G = (l ?? i).trim() || i, _ = q.useMemo(() => Array.from(G), [G]), Q = q.useRef(null), K = q.useRef(null), [N, O] = q.useState(0), [ot, ut] = q.useState(0.8), [F, I] = q.useState(!1), [lt, et] = q.useState(!1), [nt, X] = q.useState(!1), [J, it] = q.useState(!1), [at, Y] = q.useState(!0), yt = q.useRef({ u: 0.5, x: 0, y: 0, inside: !1 });
  q.useLayoutEffect(() => {
    const L = Q.current, tt = K.current;
    if (!L || !tt) return;
    let W = 0, ft = !0;
    const ct = () => {
      const $ = tt.parentElement, xt = getComputedStyle($), Vt = $.clientWidth - parseFloat(xt.paddingLeft) - parseFloat(xt.paddingRight);
      tt.style.fontSize = "100px";
      const Bt = uD(tt.getBoundingClientRect().width, Vt, Vt * 0.42);
      tt.style.fontSize = Bt + "px", O(Bt);
      const Ut = document.createElement("canvas").getContext("2d");
      if (Ut) {
        Ut.font = E + " 100px " + w;
        const Mt = Ut.measureText(G);
        ut(fD(Mt.fontBoundingBoxAscent, Mt.fontBoundingBoxDescent));
      }
      const kt = L.getBoundingClientRect();
      L.style.setProperty("--bwf-rw", kt.width + "px"), L.style.setProperty("--bwf-rh", kt.height + "px"), tt.querySelectorAll(".bwf-l").forEach((Mt) => {
        let ee = 0, De = 0, ae = Mt;
        for (; ae && ae !== L; )
          ee += ae.offsetLeft, De += ae.offsetTop, ae = ae.offsetParent;
        Mt.style.setProperty("--bwf-x", ee + "px"), Mt.style.setProperty("--bwf-y", De + "px");
      });
    }, St = () => {
      cancelAnimationFrame(W), W = requestAnimationFrame(ct);
    };
    ct();
    const st = new ResizeObserver(St);
    return st.observe(L), document.fonts.ready.then(() => {
      ft && St();
    }), () => {
      ft = !1, cancelAnimationFrame(W), st.disconnect();
    };
  }, [G, w, E]), q.useEffect(() => {
    const L = matchMedia("(prefers-reduced-motion: reduce)"), tt = () => X(L.matches), W = () => Y(!document.hidden);
    tt(), W(), L.addEventListener("change", tt), document.addEventListener("visibilitychange", W);
    const ft = new IntersectionObserver(([ct]) => {
      et(ct.isIntersecting), ct.isIntersecting && I(!0);
    }, { threshold: 0.1 });
    return Q.current && ft.observe(Q.current), () => {
      ft.disconnect(), L.removeEventListener("change", tt), document.removeEventListener("visibilitychange", W);
    };
  }, []), q.useEffect(() => {
    const L = Q.current;
    if (!L) return;
    if (nt || J || !z || !lt || !at) {
      L.style.setProperty("--bwf-g", "0");
      return;
    }
    let tt = 0, W = performance.now(), ft = W / 1e3, ct = 58, St = 0, st = 0, $ = 0;
    const xt = (Vt) => {
      const Bt = Math.min(0.1, (Vt - W) / 1e3);
      W = Vt, ft += Bt;
      const Ut = yt.current;
      ct = Br(ct, Ut.inside ? cD(Ut.u) * 0.75 + tb(ft) * 0.25 : tb(ft), 0.035, Bt), St = Br(St, Ut.x, 0.16, Bt), st = Br(st, Ut.y, 0.16, Bt), $ = Br($, Ut.inside ? 1 : 0, 0.06, Bt), L.style.setProperty("--bwf-b", ct.toFixed(2) + "%"), L.style.setProperty("--bwf-px", St.toFixed(1) + "px"), L.style.setProperty("--bwf-py", st.toFixed(1) + "px"), L.style.setProperty("--bwf-g", $.toFixed(3)), tt = requestAnimationFrame(xt);
    };
    return tt = requestAnimationFrame(xt), () => cancelAnimationFrame(tt);
  }, [nt, J, z, lt, at]);
  const vt = (L) => {
    if (L.pointerType === "touch" || nt) return;
    const tt = L.currentTarget.getBoundingClientRect();
    yt.current = { x: L.clientX - tt.left, y: L.clientY - tt.top, u: (L.clientX - tt.left) / tt.width, inside: L.type !== "pointerleave" };
  }, At = (L, tt, W) => {
    W === "#feedback-form" && (L.preventDefault(), L.stopPropagation(), window.dispatchEvent(new Event("vettiver:add-feedback"))), (!W || W === "#") && L.preventDefault(), m?.(tt, W);
  }, C = {
    "--bwf-bg": g,
    "--bwf-bg-rgb": $0(g),
    "--bwf-ink": v,
    "--bwf-muted": y,
    "--bwf-acc": $0(S),
    "--bwf-wt": A,
    "--bwf-wf": T,
    "--bwf-sans": w,
    "--bwf-ww": E,
    "--bwf-b": "58%",
    "--bwf-px": "50%",
    "--bwf-py": "50%",
    "--bwf-g": "0"
  };
  return /* @__PURE__ */ D.jsxs("footer", { ref: Q, className: "bwf " + B, style: C, "data-in": F || nt ? "true" : "false", "data-motion": nt || J || !z ? "paused" : lt && at ? "running" : "idle", onPointerMove: vt, onPointerEnter: vt, onPointerLeave: vt, children: [
    /* @__PURE__ */ D.jsx("div", { className: "bwf-rule", "aria-hidden": "true" }),
    /* @__PURE__ */ D.jsxs("div", { className: "bwf-sky", "aria-hidden": "true", children: [
      /* @__PURE__ */ D.jsx("div", { className: "bwf-wash" }),
      /* @__PURE__ */ D.jsx("div", { className: "bwf-beam" }),
      /* @__PURE__ */ D.jsx("div", { className: "bwf-glow" })
    ] }),
    /* @__PURE__ */ D.jsxs("div", { className: "bwf-inner", children: [
      /* @__PURE__ */ D.jsxs("div", { className: "bwf-col", children: [
        /* @__PURE__ */ D.jsxs("p", { className: "bwf-label", children: [
          "© ",
          o,
          " ",
          s || i
        ] }),
        /* @__PURE__ */ D.jsxs("p", { className: "bwf-brand-line", children: [
          "From our roots.",
          /* @__PURE__ */ D.jsx("br", {}),
          "To your rituals."
        ] }),
        c.length > 0 && /* @__PURE__ */ D.jsx("ul", { className: "bwf-socials", children: c.map((L, tt) => /* @__PURE__ */ D.jsx("li", { children: /* @__PURE__ */ D.jsx("a", { href: L.href || "#", className: "bwf-soc", "aria-label": L.label, onClick: (W) => At(W, L.label, L.href), ...L.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: typeof L.icon == "string" && L.icon in eb ? eb[L.icon] : L.icon }) }, L.label + tt)) }),
        /* @__PURE__ */ D.jsx("div", { className: "bwf-credits", children: d.map((L, tt) => /* @__PURE__ */ D.jsxs("p", { children: [
          L.lead,
          L.href ? /* @__PURE__ */ D.jsx("a", { href: L.href, onClick: (W) => At(W, L.label, L.href), children: L.label }) : /* @__PURE__ */ D.jsx("b", { children: L.label }),
          L.tail
        ] }, tt)) }),
        z && !nt && /* @__PURE__ */ D.jsxs("button", { type: "button", className: "bwf-motion-toggle", onClick: () => it(!J), "aria-pressed": J, children: [
          J ? /* @__PURE__ */ D.jsx(cu, { size: 14 }) : /* @__PURE__ */ D.jsx(uu, { size: 14 }),
          J ? "Resume light" : "Pause light"
        ] })
      ] }),
      f.map((L, tt) => /* @__PURE__ */ D.jsxs("nav", { className: "bwf-col", "aria-label": L.title, children: [
        /* @__PURE__ */ D.jsx("p", { className: "bwf-label", children: L.title }),
        /* @__PURE__ */ D.jsx("ul", { className: "bwf-links", children: L.links.map((W, ft) => /* @__PURE__ */ D.jsx("li", { children: /* @__PURE__ */ D.jsxs("a", { className: "bwf-link", href: W.href || "#", onClick: (ct) => At(ct, W.label, W.href), children: [
          /* @__PURE__ */ D.jsx("span", { children: W.label }),
          /* @__PURE__ */ D.jsx(dh, { size: 16, "aria-hidden": "true" })
        ] }) }, W.label + ft)) })
      ] }, L.title + tt))
    ] }),
    /* @__PURE__ */ D.jsxs("div", { className: "bwf-word", style: { height: N ? dD(N, ot, p) : "26vw" }, children: [
      /* @__PURE__ */ D.jsx("p", { className: "vt:sr-only", children: G }),
      /* @__PURE__ */ D.jsx("div", { className: "bwf-word-box", children: /* @__PURE__ */ D.jsx("div", { ref: K, className: "bwf-word-in", "aria-hidden": "true", children: _.map((L, tt) => /* @__PURE__ */ D.jsx("span", { className: "bwf-lw", style: { "--bwf-d": 180 + tt * 65 + "ms" }, children: /* @__PURE__ */ D.jsx("span", { className: "bwf-l", onClick: (W) => {
        if (!nt) {
          const ft = W.currentTarget;
          ft.classList.remove("is-hop"), ft.offsetWidth, ft.classList.add("is-hop");
        }
      }, onAnimationEnd: (W) => W.currentTarget.classList.remove("is-hop"), children: L === " " ? " " : L }) }, tt)) }) }),
      /* @__PURE__ */ D.jsx("div", { className: "bwf-foot", "aria-hidden": "true" })
    ] })
  ] });
}
const pD = [];
function gD(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function nb(i) {
  return gD(i) || Array.isArray(i);
}
function yD() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Ph(i, l) {
  const s = Object.keys(i), o = Object.keys(l);
  if (s.length !== o.length) return !1;
  const c = JSON.stringify(Object.keys(i.breakpoints || {})), d = JSON.stringify(Object.keys(l.breakpoints || {}));
  return c !== d ? !1 : s.every((f) => {
    const m = i[f], p = l[f];
    return typeof m == "function" ? `${m}` == `${p}` : !nb(m) || !nb(p) ? m === p : Ph(m, p);
  });
}
function ib(i) {
  return i.concat().sort((l, s) => l.name > s.name ? 1 : -1).map((l) => l.options);
}
function vD(i, l) {
  if (i.length !== l.length) return !1;
  const s = ib(i), o = ib(l);
  return s.every((c, d) => {
    const f = o[d];
    return Ph(c, f);
  });
}
function Fh(i) {
  return typeof i == "number";
}
function ih(i) {
  return typeof i == "string";
}
function gu(i) {
  return typeof i == "boolean";
}
function ab(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function $t(i) {
  return Math.abs(i);
}
function Jh(i) {
  return Math.sign(i);
}
function Bs(i, l) {
  return $t(i - l);
}
function bD(i, l) {
  if (i === 0 || l === 0 || $t(i) <= $t(l)) return 0;
  const s = Bs($t(i), $t(l));
  return $t(s / i);
}
function SD(i) {
  return Math.round(i * 100) / 100;
}
function Ps(i) {
  return Fs(i).map(Number);
}
function An(i) {
  return i[to(i)];
}
function to(i) {
  return Math.max(0, i.length - 1);
}
function Ih(i, l) {
  return l === to(i);
}
function lb(i, l = 0) {
  return Array.from(Array(i), (s, o) => l + o);
}
function Fs(i) {
  return Object.keys(i);
}
function LS(i, l) {
  return [i, l].reduce((s, o) => (Fs(o).forEach((c) => {
    const d = s[c], f = o[c], m = ab(d) && ab(f);
    s[c] = m ? LS(d, f) : f;
  }), s), {});
}
function ah(i, l) {
  return typeof l.MouseEvent < "u" && i instanceof l.MouseEvent;
}
function TD(i, l) {
  const s = {
    start: o,
    center: c,
    end: d
  };
  function o() {
    return 0;
  }
  function c(p) {
    return d(p) / 2;
  }
  function d(p) {
    return l - p;
  }
  function f(p, g) {
    return ih(i) ? s[i](p) : i(l, p, g);
  }
  return {
    measure: f
  };
}
function Js() {
  let i = [];
  function l(c, d, f, m = {
    passive: !0
  }) {
    let p;
    if ("addEventListener" in c)
      c.addEventListener(d, f, m), p = () => c.removeEventListener(d, f, m);
    else {
      const g = c;
      g.addListener(f), p = () => g.removeListener(f);
    }
    return i.push(p), o;
  }
  function s() {
    i = i.filter((c) => c());
  }
  const o = {
    add: l,
    clear: s
  };
  return o;
}
function xD(i, l, s, o) {
  const c = Js(), d = 1e3 / 60;
  let f = null, m = 0, p = 0;
  function g() {
    c.add(i, "visibilitychange", () => {
      i.hidden && T();
    });
  }
  function v() {
    A(), c.clear();
  }
  function y(E) {
    if (!p) return;
    f || (f = E, s(), s());
    const z = E - f;
    for (f = E, m += z; m >= d; )
      s(), m -= d;
    const B = m / d;
    o(B), p && (p = l.requestAnimationFrame(y));
  }
  function S() {
    p || (p = l.requestAnimationFrame(y));
  }
  function A() {
    l.cancelAnimationFrame(p), f = null, m = 0, p = 0;
  }
  function T() {
    f = null, m = 0;
  }
  return {
    init: g,
    destroy: v,
    start: S,
    stop: A,
    update: s,
    render: o
  };
}
function ED(i, l) {
  const s = l === "rtl", o = i === "y", c = o ? "y" : "x", d = o ? "x" : "y", f = !o && s ? -1 : 1, m = v(), p = y();
  function g(T) {
    const {
      height: w,
      width: E
    } = T;
    return o ? w : E;
  }
  function v() {
    return o ? "top" : s ? "right" : "left";
  }
  function y() {
    return o ? "bottom" : s ? "left" : "right";
  }
  function S(T) {
    return T * f;
  }
  return {
    scroll: c,
    cross: d,
    startEdge: m,
    endEdge: p,
    measureSize: g,
    direction: S
  };
}
function Ea(i = 0, l = 0) {
  const s = $t(i - l);
  function o(g) {
    return g < i;
  }
  function c(g) {
    return g > l;
  }
  function d(g) {
    return o(g) || c(g);
  }
  function f(g) {
    return d(g) ? o(g) ? i : l : g;
  }
  function m(g) {
    return s ? g - s * Math.ceil((g - l) / s) : g;
  }
  return {
    length: s,
    max: l,
    min: i,
    constrain: f,
    reachedAny: d,
    reachedMax: c,
    reachedMin: o,
    removeOffset: m
  };
}
function BS(i, l, s) {
  const {
    constrain: o
  } = Ea(0, i), c = i + 1;
  let d = f(l);
  function f(S) {
    return s ? $t((c + S) % c) : o(S);
  }
  function m() {
    return d;
  }
  function p(S) {
    return d = f(S), y;
  }
  function g(S) {
    return v().set(m() + S);
  }
  function v() {
    return BS(i, m(), s);
  }
  const y = {
    get: m,
    set: p,
    add: g,
    clone: v
  };
  return y;
}
function AD(i, l, s, o, c, d, f, m, p, g, v, y, S, A, T, w, E, z, B) {
  const {
    cross: G,
    direction: _
  } = i, Q = ["INPUT", "SELECT", "TEXTAREA"], K = {
    passive: !1
  }, N = Js(), O = Js(), ot = Ea(50, 225).constrain(A.measure(20)), ut = {
    mouse: 300,
    touch: 400
  }, F = {
    mouse: 500,
    touch: 600
  }, I = T ? 43 : 25;
  let lt = !1, et = 0, nt = 0, X = !1, J = !1, it = !1, at = !1;
  function Y($) {
    if (!B) return;
    function xt(Bt) {
      (gu(B) || B($, Bt)) && tt(Bt);
    }
    const Vt = l;
    N.add(Vt, "dragstart", (Bt) => Bt.preventDefault(), K).add(Vt, "touchmove", () => {
    }, K).add(Vt, "touchend", () => {
    }).add(Vt, "touchstart", xt).add(Vt, "mousedown", xt).add(Vt, "touchcancel", ft).add(Vt, "contextmenu", ft).add(Vt, "click", ct, !0);
  }
  function yt() {
    N.clear(), O.clear();
  }
  function vt() {
    const $ = at ? s : l;
    O.add($, "touchmove", W, K).add($, "touchend", ft).add($, "mousemove", W, K).add($, "mouseup", ft);
  }
  function At($) {
    const xt = $.nodeName || "";
    return Q.includes(xt);
  }
  function C() {
    return (T ? F : ut)[at ? "mouse" : "touch"];
  }
  function L($, xt) {
    const Vt = y.add(Jh($) * -1), Bt = v.byDistance($, !T).distance;
    return T || $t($) < ot ? Bt : E && xt ? Bt * 0.5 : v.byIndex(Vt.get(), 0).distance;
  }
  function tt($) {
    const xt = ah($, o);
    at = xt, it = T && xt && !$.buttons && lt, lt = Bs(c.get(), f.get()) >= 2, !(xt && $.button !== 0) && (At($.target) || (X = !0, d.pointerDown($), g.useFriction(0).useDuration(0), c.set(f), vt(), et = d.readPoint($), nt = d.readPoint($, G), S.emit("pointerDown")));
  }
  function W($) {
    if (!ah($, o) && $.touches.length >= 2) return ft($);
    const Vt = d.readPoint($), Bt = d.readPoint($, G), Ut = Bs(Vt, et), kt = Bs(Bt, nt);
    if (!J && !at && (!$.cancelable || (J = Ut > kt, !J)))
      return ft($);
    const Mt = d.pointerMove($);
    Ut > w && (it = !0), g.useFriction(0.3).useDuration(0.75), m.start(), c.add(_(Mt)), $.preventDefault();
  }
  function ft($) {
    const Vt = v.byDistance(0, !1).index !== y.get(), Bt = d.pointerUp($) * C(), Ut = L(_(Bt), Vt), kt = bD(Bt, Ut), Mt = I - 10 * kt, ee = z + kt / 50;
    J = !1, X = !1, O.clear(), g.useDuration(Mt).useFriction(ee), p.distance(Ut, !T), at = !1, S.emit("pointerUp");
  }
  function ct($) {
    it && ($.stopPropagation(), $.preventDefault(), it = !1);
  }
  function St() {
    return X;
  }
  return {
    init: Y,
    destroy: yt,
    pointerDown: St
  };
}
function wD(i, l) {
  let o, c;
  function d(y) {
    return y.timeStamp;
  }
  function f(y, S) {
    const T = `client${(S || i.scroll) === "x" ? "X" : "Y"}`;
    return (ah(y, l) ? y : y.touches[0])[T];
  }
  function m(y) {
    return o = y, c = y, f(y);
  }
  function p(y) {
    const S = f(y) - f(c), A = d(y) - d(o) > 170;
    return c = y, A && (o = y), S;
  }
  function g(y) {
    if (!o || !c) return 0;
    const S = f(c) - f(o), A = d(y) - d(o), T = d(y) - d(c) > 170, w = S / A;
    return A && !T && $t(w) > 0.1 ? w : 0;
  }
  return {
    pointerDown: m,
    pointerMove: p,
    pointerUp: g,
    readPoint: f
  };
}
function CD() {
  function i(s) {
    const {
      offsetTop: o,
      offsetLeft: c,
      offsetWidth: d,
      offsetHeight: f
    } = s;
    return {
      top: o,
      right: c + d,
      bottom: o + f,
      left: c,
      width: d,
      height: f
    };
  }
  return {
    measure: i
  };
}
function MD(i) {
  function l(o) {
    return i * (o / 100);
  }
  return {
    measure: l
  };
}
function DD(i, l, s, o, c, d, f) {
  const m = [i].concat(o);
  let p, g, v = [], y = !1;
  function S(E) {
    return c.measureSize(f.measure(E));
  }
  function A(E) {
    if (!d) return;
    g = S(i), v = o.map(S);
    function z(B) {
      for (const G of B) {
        if (y) return;
        const _ = G.target === i, Q = o.indexOf(G.target), K = _ ? g : v[Q], N = S(_ ? i : o[Q]);
        if ($t(N - K) >= 0.5) {
          E.reInit(), l.emit("resize");
          break;
        }
      }
    }
    p = new ResizeObserver((B) => {
      (gu(d) || d(E, B)) && z(B);
    }), s.requestAnimationFrame(() => {
      m.forEach((B) => p.observe(B));
    });
  }
  function T() {
    y = !0, p && p.disconnect();
  }
  return {
    init: A,
    destroy: T
  };
}
function zD(i, l, s, o, c, d) {
  let f = 0, m = 0, p = c, g = d, v = i.get(), y = 0;
  function S() {
    const K = o.get() - i.get(), N = !p;
    let O = 0;
    return N ? (f = 0, s.set(o), i.set(o), O = K) : (s.set(i), f += K / p, f *= g, v += f, i.add(f), O = v - y), m = Jh(O), y = v, Q;
  }
  function A() {
    const K = o.get() - l.get();
    return $t(K) < 1e-3;
  }
  function T() {
    return p;
  }
  function w() {
    return m;
  }
  function E() {
    return f;
  }
  function z() {
    return G(c);
  }
  function B() {
    return _(d);
  }
  function G(K) {
    return p = K, Q;
  }
  function _(K) {
    return g = K, Q;
  }
  const Q = {
    direction: w,
    duration: T,
    velocity: E,
    seek: S,
    settled: A,
    useBaseFriction: B,
    useBaseDuration: z,
    useFriction: _,
    useDuration: G
  };
  return Q;
}
function OD(i, l, s, o, c) {
  const d = c.measure(10), f = c.measure(50), m = Ea(0.1, 0.99);
  let p = !1;
  function g() {
    return !(p || !i.reachedAny(s.get()) || !i.reachedAny(l.get()));
  }
  function v(A) {
    if (!g()) return;
    const T = i.reachedMin(l.get()) ? "min" : "max", w = $t(i[T] - l.get()), E = s.get() - l.get(), z = m.constrain(w / f);
    s.subtract(E * z), !A && $t(E) < d && (s.set(i.constrain(s.get())), o.useDuration(25).useBaseFriction());
  }
  function y(A) {
    p = !A;
  }
  return {
    shouldConstrain: g,
    constrain: v,
    toggleActive: y
  };
}
function ND(i, l, s, o, c) {
  const d = Ea(-l + i, 0), f = y(), m = v(), p = S();
  function g(T, w) {
    return Bs(T, w) <= 1;
  }
  function v() {
    const T = f[0], w = An(f), E = f.lastIndexOf(T), z = f.indexOf(w) + 1;
    return Ea(E, z);
  }
  function y() {
    return s.map((T, w) => {
      const {
        min: E,
        max: z
      } = d, B = d.constrain(T), G = !w, _ = Ih(s, w);
      return G ? z : _ || g(E, B) ? E : g(z, B) ? z : B;
    }).map((T) => parseFloat(T.toFixed(3)));
  }
  function S() {
    if (l <= i + c) return [d.max];
    if (o === "keepSnaps") return f;
    const {
      min: T,
      max: w
    } = m;
    return f.slice(T, w);
  }
  return {
    snapsContained: p,
    scrollContainLimit: m
  };
}
function RD(i, l, s) {
  const o = l[0], c = s ? o - i : An(l);
  return {
    limit: Ea(c, o)
  };
}
function _D(i, l, s, o) {
  const d = l.min + 0.1, f = l.max + 0.1, {
    reachedMin: m,
    reachedMax: p
  } = Ea(d, f);
  function g(S) {
    return S === 1 ? p(s.get()) : S === -1 ? m(s.get()) : !1;
  }
  function v(S) {
    if (!g(S)) return;
    const A = i * (S * -1);
    o.forEach((T) => T.add(A));
  }
  return {
    loop: v
  };
}
function VD(i) {
  const {
    max: l,
    length: s
  } = i;
  function o(d) {
    const f = d - l;
    return s ? f / -s : 0;
  }
  return {
    get: o
  };
}
function jD(i, l, s, o, c) {
  const {
    startEdge: d,
    endEdge: f
  } = i, {
    groupSlides: m
  } = c, p = y().map(l.measure), g = S(), v = A();
  function y() {
    return m(o).map((w) => An(w)[f] - w[0][d]).map($t);
  }
  function S() {
    return o.map((w) => s[d] - w[d]).map((w) => -$t(w));
  }
  function A() {
    return m(g).map((w) => w[0]).map((w, E) => w + p[E]);
  }
  return {
    snaps: g,
    snapsAligned: v
  };
}
function LD(i, l, s, o, c, d) {
  const {
    groupSlides: f
  } = c, {
    min: m,
    max: p
  } = o, g = v();
  function v() {
    const S = f(d), A = !i || l === "keepSnaps";
    return s.length === 1 ? [d] : A ? S : S.slice(m, p).map((T, w, E) => {
      const z = !w, B = Ih(E, w);
      if (z) {
        const G = An(E[0]) + 1;
        return lb(G);
      }
      if (B) {
        const G = to(d) - An(E)[0] + 1;
        return lb(G, An(E)[0]);
      }
      return T;
    });
  }
  return {
    slideRegistry: g
  };
}
function BD(i, l, s, o, c) {
  const {
    reachedAny: d,
    removeOffset: f,
    constrain: m
  } = o;
  function p(T) {
    return T.concat().sort((w, E) => $t(w) - $t(E))[0];
  }
  function g(T) {
    const w = i ? f(T) : m(T), E = l.map((B, G) => ({
      diff: v(B - w, 0),
      index: G
    })).sort((B, G) => $t(B.diff) - $t(G.diff)), {
      index: z
    } = E[0];
    return {
      index: z,
      distance: w
    };
  }
  function v(T, w) {
    const E = [T, T + s, T - s];
    if (!i) return T;
    if (!w) return p(E);
    const z = E.filter((B) => Jh(B) === w);
    return z.length ? p(z) : An(E) - s;
  }
  function y(T, w) {
    const E = l[T] - c.get(), z = v(E, w);
    return {
      index: T,
      distance: z
    };
  }
  function S(T, w) {
    const E = c.get() + T, {
      index: z,
      distance: B
    } = g(E), G = !i && d(E);
    if (!w || G) return {
      index: z,
      distance: T
    };
    const _ = l[z] - B, Q = T + v(_, 0);
    return {
      index: z,
      distance: Q
    };
  }
  return {
    byDistance: S,
    byIndex: y,
    shortcut: v
  };
}
function UD(i, l, s, o, c, d, f) {
  function m(y) {
    const S = y.distance, A = y.index !== l.get();
    d.add(S), S && (o.duration() ? i.start() : (i.update(), i.render(1), i.update())), A && (s.set(l.get()), l.set(y.index), f.emit("select"));
  }
  function p(y, S) {
    const A = c.byDistance(y, S);
    m(A);
  }
  function g(y, S) {
    const A = l.clone().set(y), T = c.byIndex(A.get(), S);
    m(T);
  }
  return {
    distance: p,
    index: g
  };
}
function HD(i, l, s, o, c, d, f, m) {
  const p = {
    passive: !0,
    capture: !0
  };
  let g = 0;
  function v(A) {
    if (!m) return;
    function T(w) {
      if ((/* @__PURE__ */ new Date()).getTime() - g > 10) return;
      f.emit("slideFocusStart"), i.scrollLeft = 0;
      const B = s.findIndex((G) => G.includes(w));
      Fh(B) && (c.useDuration(0), o.index(B, 0), f.emit("slideFocus"));
    }
    d.add(document, "keydown", y, !1), l.forEach((w, E) => {
      d.add(w, "focus", (z) => {
        (gu(m) || m(A, z)) && T(E);
      }, p);
    });
  }
  function y(A) {
    A.code === "Tab" && (g = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: v
  };
}
function _s(i) {
  let l = i;
  function s() {
    return l;
  }
  function o(p) {
    l = f(p);
  }
  function c(p) {
    l += f(p);
  }
  function d(p) {
    l -= f(p);
  }
  function f(p) {
    return Fh(p) ? p : p.get();
  }
  return {
    get: s,
    set: o,
    add: c,
    subtract: d
  };
}
function US(i, l) {
  const s = i.scroll === "x" ? f : m, o = l.style;
  let c = null, d = !1;
  function f(S) {
    return `translate3d(${S}px,0px,0px)`;
  }
  function m(S) {
    return `translate3d(0px,${S}px,0px)`;
  }
  function p(S) {
    if (d) return;
    const A = SD(i.direction(S));
    A !== c && (o.transform = s(A), c = A);
  }
  function g(S) {
    d = !S;
  }
  function v() {
    d || (o.transform = "", l.getAttribute("style") || l.removeAttribute("style"));
  }
  return {
    clear: v,
    to: p,
    toggleActive: g
  };
}
function kD(i, l, s, o, c, d, f, m, p) {
  const v = Ps(c), y = Ps(c).reverse(), S = z().concat(B());
  function A(N, O) {
    return N.reduce((ot, ut) => ot - c[ut], O);
  }
  function T(N, O) {
    return N.reduce((ot, ut) => A(ot, O) > 0 ? ot.concat([ut]) : ot, []);
  }
  function w(N) {
    return d.map((O, ot) => ({
      start: O - o[ot] + 0.5 + N,
      end: O + l - 0.5 + N
    }));
  }
  function E(N, O, ot) {
    const ut = w(O);
    return N.map((F) => {
      const I = ot ? 0 : -s, lt = ot ? s : 0, et = ot ? "end" : "start", nt = ut[F][et];
      return {
        index: F,
        loopPoint: nt,
        slideLocation: _s(-1),
        translate: US(i, p[F]),
        target: () => m.get() > nt ? I : lt
      };
    });
  }
  function z() {
    const N = f[0], O = T(y, N);
    return E(O, s, !1);
  }
  function B() {
    const N = l - f[0] - 1, O = T(v, N);
    return E(O, -s, !0);
  }
  function G() {
    return S.every(({
      index: N
    }) => {
      const O = v.filter((ot) => ot !== N);
      return A(O, l) <= 0.1;
    });
  }
  function _() {
    S.forEach((N) => {
      const {
        target: O,
        translate: ot,
        slideLocation: ut
      } = N, F = O();
      F !== ut.get() && (ot.to(F), ut.set(F));
    });
  }
  function Q() {
    S.forEach((N) => N.translate.clear());
  }
  return {
    canLoop: G,
    clear: Q,
    loop: _,
    loopPoints: S
  };
}
function GD(i, l, s) {
  let o, c = !1;
  function d(p) {
    if (!s) return;
    function g(v) {
      for (const y of v)
        if (y.type === "childList") {
          p.reInit(), l.emit("slidesChanged");
          break;
        }
    }
    o = new MutationObserver((v) => {
      c || (gu(s) || s(p, v)) && g(v);
    }), o.observe(i, {
      childList: !0
    });
  }
  function f() {
    o && o.disconnect(), c = !0;
  }
  return {
    init: d,
    destroy: f
  };
}
function YD(i, l, s, o) {
  const c = {};
  let d = null, f = null, m, p = !1;
  function g() {
    m = new IntersectionObserver((T) => {
      p || (T.forEach((w) => {
        const E = l.indexOf(w.target);
        c[E] = w;
      }), d = null, f = null, s.emit("slidesInView"));
    }, {
      root: i.parentElement,
      threshold: o
    }), l.forEach((T) => m.observe(T));
  }
  function v() {
    m && m.disconnect(), p = !0;
  }
  function y(T) {
    return Fs(c).reduce((w, E) => {
      const z = parseInt(E), {
        isIntersecting: B
      } = c[z];
      return (T && B || !T && !B) && w.push(z), w;
    }, []);
  }
  function S(T = !0) {
    if (T && d) return d;
    if (!T && f) return f;
    const w = y(T);
    return T && (d = w), T || (f = w), w;
  }
  return {
    init: g,
    destroy: v,
    get: S
  };
}
function qD(i, l, s, o, c, d) {
  const {
    measureSize: f,
    startEdge: m,
    endEdge: p
  } = i, g = s[0] && c, v = T(), y = w(), S = s.map(f), A = E();
  function T() {
    if (!g) return 0;
    const B = s[0];
    return $t(l[m] - B[m]);
  }
  function w() {
    if (!g) return 0;
    const B = d.getComputedStyle(An(o));
    return parseFloat(B.getPropertyValue(`margin-${p}`));
  }
  function E() {
    return s.map((B, G, _) => {
      const Q = !G, K = Ih(_, G);
      return Q ? S[G] + v : K ? S[G] + y : _[G + 1][m] - B[m];
    }).map($t);
  }
  return {
    slideSizes: S,
    slideSizesWithGaps: A,
    startGap: v,
    endGap: y
  };
}
function XD(i, l, s, o, c, d, f, m, p) {
  const {
    startEdge: g,
    endEdge: v,
    direction: y
  } = i, S = Fh(s);
  function A(z, B) {
    return Ps(z).filter((G) => G % B === 0).map((G) => z.slice(G, G + B));
  }
  function T(z) {
    return z.length ? Ps(z).reduce((B, G, _) => {
      const Q = An(B) || 0, K = Q === 0, N = G === to(z), O = c[g] - d[Q][g], ot = c[g] - d[G][v], ut = !o && K ? y(f) : 0, F = !o && N ? y(m) : 0, I = $t(ot - F - (O + ut));
      return _ && I > l + p && B.push(G), N && B.push(z.length), B;
    }, []).map((B, G, _) => {
      const Q = Math.max(_[G - 1] || 0);
      return z.slice(Q, B);
    }) : [];
  }
  function w(z) {
    return S ? A(z, s) : T(z);
  }
  return {
    groupSlides: w
  };
}
function QD(i, l, s, o, c, d, f) {
  const {
    align: m,
    axis: p,
    direction: g,
    startIndex: v,
    loop: y,
    duration: S,
    dragFree: A,
    dragThreshold: T,
    inViewThreshold: w,
    slidesToScroll: E,
    skipSnaps: z,
    containScroll: B,
    watchResize: G,
    watchSlides: _,
    watchDrag: Q,
    watchFocus: K
  } = d, N = 2, O = CD(), ot = O.measure(l), ut = s.map(O.measure), F = ED(p, g), I = F.measureSize(ot), lt = MD(I), et = TD(m, I), nt = !y && !!B, X = y || !!B, {
    slideSizes: J,
    slideSizesWithGaps: it,
    startGap: at,
    endGap: Y
  } = qD(F, ot, ut, s, X, c), yt = XD(F, I, E, y, ot, ut, at, Y, N), {
    snaps: vt,
    snapsAligned: At
  } = jD(F, et, ot, ut, yt), C = -An(vt) + An(it), {
    snapsContained: L,
    scrollContainLimit: tt
  } = ND(I, C, At, B, N), W = nt ? L : At, {
    limit: ft
  } = RD(C, W, y), ct = BS(to(W), v, y), St = ct.clone(), st = Ps(s), $ = ({
    dragHandler: wn,
    scrollBody: Yi,
    scrollBounds: zl,
    options: {
      loop: qi
    }
  }) => {
    qi || zl.constrain(wn.pointerDown()), Yi.seek();
  }, xt = ({
    scrollBody: wn,
    translate: Yi,
    location: zl,
    offsetLocation: qi,
    previousLocation: Ol,
    scrollLooper: Nl,
    slideLooper: Rl,
    dragHandler: yu,
    animation: vu,
    eventHandler: ze,
    scrollBounds: bu,
    options: {
      loop: _l
    }
  }, Vl) => {
    const Xi = wn.settled(), Su = !bu.shouldConstrain(), jl = _l ? Xi : Xi && Su, no = jl && !yu.pointerDown();
    no && vu.stop();
    const Tu = zl.get() * Vl + Ol.get() * (1 - Vl);
    qi.set(Tu), _l && (Nl.loop(wn.direction()), Rl.loop()), Yi.to(qi.get()), no && ze.emit("settle"), jl || ze.emit("scroll");
  }, Vt = xD(o, c, () => $(en), (wn) => xt(en, wn)), Bt = 0.68, Ut = W[ct.get()], kt = _s(Ut), Mt = _s(Ut), ee = _s(Ut), De = _s(Ut), ae = zD(kt, ee, Mt, De, S, Bt), oi = BD(y, W, C, ft, De), ri = UD(Vt, ct, St, ae, oi, De, f), Gn = VD(ft), Ca = Js(), Ma = YD(l, s, f, w), {
    slideRegistry: Da
  } = LD(nt, B, W, tt, yt, st), eo = HD(i, s, Da, ri, ae, Ca, f, K), en = {
    ownerDocument: o,
    ownerWindow: c,
    eventHandler: f,
    containerRect: ot,
    slideRects: ut,
    animation: Vt,
    axis: F,
    dragHandler: AD(F, i, o, c, De, wD(F, c), kt, Vt, ri, ae, oi, ct, f, lt, A, T, z, Bt, Q),
    eventStore: Ca,
    percentOfView: lt,
    index: ct,
    indexPrevious: St,
    limit: ft,
    location: kt,
    offsetLocation: ee,
    previousLocation: Mt,
    options: d,
    resizeHandler: DD(l, f, c, s, F, G, O),
    scrollBody: ae,
    scrollBounds: OD(ft, ee, De, ae, lt),
    scrollLooper: _D(C, ft, ee, [kt, ee, Mt, De]),
    scrollProgress: Gn,
    scrollSnapList: W.map(Gn.get),
    scrollSnaps: W,
    scrollTarget: oi,
    scrollTo: ri,
    slideLooper: kD(F, I, C, J, it, vt, W, ee, s),
    slideFocus: eo,
    slidesHandler: GD(l, f, _),
    slidesInView: Ma,
    slideIndexes: st,
    slideRegistry: Da,
    slidesToScroll: yt,
    target: De,
    translate: US(F, l)
  };
  return en;
}
function ZD() {
  let i = {}, l;
  function s(g) {
    l = g;
  }
  function o(g) {
    return i[g] || [];
  }
  function c(g) {
    return o(g).forEach((v) => v(l, g)), p;
  }
  function d(g, v) {
    return i[g] = o(g).concat([v]), p;
  }
  function f(g, v) {
    return i[g] = o(g).filter((y) => y !== v), p;
  }
  function m() {
    i = {};
  }
  const p = {
    init: s,
    emit: c,
    off: f,
    on: d,
    clear: m
  };
  return p;
}
const KD = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
  watchFocus: !0
};
function PD(i) {
  function l(d, f) {
    return LS(d, f || {});
  }
  function s(d) {
    const f = d.breakpoints || {}, m = Fs(f).filter((p) => i.matchMedia(p).matches).map((p) => f[p]).reduce((p, g) => l(p, g), {});
    return l(d, m);
  }
  function o(d) {
    return d.map((f) => Fs(f.breakpoints || {})).reduce((f, m) => f.concat(m), []).map(i.matchMedia);
  }
  return {
    mergeOptions: l,
    optionsAtMedia: s,
    optionsMediaQueries: o
  };
}
function FD(i) {
  let l = [];
  function s(d, f) {
    return l = f.filter(({
      options: m
    }) => i.optionsAtMedia(m).active !== !1), l.forEach((m) => m.init(d, i)), f.reduce((m, p) => Object.assign(m, {
      [p.name]: p
    }), {});
  }
  function o() {
    l = l.filter((d) => d.destroy());
  }
  return {
    init: s,
    destroy: o
  };
}
function ru(i, l, s) {
  const o = i.ownerDocument, c = o.defaultView, d = PD(c), f = FD(d), m = Js(), p = ZD(), {
    mergeOptions: g,
    optionsAtMedia: v,
    optionsMediaQueries: y
  } = d, {
    on: S,
    off: A,
    emit: T
  } = p, w = F;
  let E = !1, z, B = g(KD, ru.globalOptions), G = g(B), _ = [], Q, K, N;
  function O() {
    const {
      container: st,
      slides: $
    } = G;
    K = (ih(st) ? i.querySelector(st) : st) || i.children[0];
    const Vt = ih($) ? K.querySelectorAll($) : $;
    N = [].slice.call(Vt || K.children);
  }
  function ot(st) {
    const $ = QD(i, K, N, o, c, st, p);
    if (st.loop && !$.slideLooper.canLoop()) {
      const xt = Object.assign({}, st, {
        loop: !1
      });
      return ot(xt);
    }
    return $;
  }
  function ut(st, $) {
    E || (B = g(B, st), G = v(B), _ = $ || _, O(), z = ot(G), y([B, ..._.map(({
      options: xt
    }) => xt)]).forEach((xt) => m.add(xt, "change", F)), G.active && (z.translate.to(z.location.get()), z.animation.init(), z.slidesInView.init(), z.slideFocus.init(St), z.eventHandler.init(St), z.resizeHandler.init(St), z.slidesHandler.init(St), z.options.loop && z.slideLooper.loop(), K.offsetParent && N.length && z.dragHandler.init(St), Q = f.init(St, _)));
  }
  function F(st, $) {
    const xt = yt();
    I(), ut(g({
      startIndex: xt
    }, st), $), p.emit("reInit");
  }
  function I() {
    z.dragHandler.destroy(), z.eventStore.clear(), z.translate.clear(), z.slideLooper.clear(), z.resizeHandler.destroy(), z.slidesHandler.destroy(), z.slidesInView.destroy(), z.animation.destroy(), f.destroy(), m.clear();
  }
  function lt() {
    E || (E = !0, m.clear(), I(), p.emit("destroy"), p.clear());
  }
  function et(st, $, xt) {
    !G.active || E || (z.scrollBody.useBaseFriction().useDuration($ === !0 ? 0 : G.duration), z.scrollTo.index(st, xt || 0));
  }
  function nt(st) {
    const $ = z.index.add(1).get();
    et($, st, -1);
  }
  function X(st) {
    const $ = z.index.add(-1).get();
    et($, st, 1);
  }
  function J() {
    return z.index.add(1).get() !== yt();
  }
  function it() {
    return z.index.add(-1).get() !== yt();
  }
  function at() {
    return z.scrollSnapList;
  }
  function Y() {
    return z.scrollProgress.get(z.offsetLocation.get());
  }
  function yt() {
    return z.index.get();
  }
  function vt() {
    return z.indexPrevious.get();
  }
  function At() {
    return z.slidesInView.get();
  }
  function C() {
    return z.slidesInView.get(!1);
  }
  function L() {
    return Q;
  }
  function tt() {
    return z;
  }
  function W() {
    return i;
  }
  function ft() {
    return K;
  }
  function ct() {
    return N;
  }
  const St = {
    canScrollNext: J,
    canScrollPrev: it,
    containerNode: ft,
    internalEngine: tt,
    destroy: lt,
    off: A,
    on: S,
    emit: T,
    plugins: L,
    previousScrollSnap: vt,
    reInit: w,
    rootNode: W,
    scrollNext: nt,
    scrollPrev: X,
    scrollProgress: Y,
    scrollSnapList: at,
    scrollTo: et,
    selectedScrollSnap: yt,
    slideNodes: ct,
    slidesInView: At,
    slidesNotInView: C
  };
  return ut(l, s), setTimeout(() => p.emit("init"), 0), St;
}
ru.globalOptions = void 0;
function Wh(i = {}, l = []) {
  const s = q.useRef(i), o = q.useRef(l), [c, d] = q.useState(), [f, m] = q.useState(), p = q.useCallback(() => {
    c && c.reInit(s.current, o.current);
  }, [c]);
  return q.useEffect(() => {
    Ph(s.current, i) || (s.current = i, p());
  }, [i, p]), q.useEffect(() => {
    vD(o.current, l) || (o.current = l, p());
  }, [l, p]), q.useEffect(() => {
    if (yD() && f) {
      ru.globalOptions = Wh.globalOptions;
      const g = ru(f, s.current, o.current);
      return d(g), () => g.destroy();
    } else
      d(void 0);
  }, [f, d]), [m, c];
}
Wh.globalOptions = void 0;
const sb = (i) => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i, ob = Ab, JD = (i, l) => (s) => {
  var o;
  if (l?.variants == null) return ob(i, s?.class, s?.className);
  const { variants: c, defaultVariants: d } = l, f = Object.keys(c).map((g) => {
    const v = s?.[g], y = d?.[g];
    if (v === null) return null;
    const S = sb(v) || sb(y);
    return c[g][S];
  }), m = s && Object.entries(s).reduce((g, v) => {
    let [y, S] = v;
    return S === void 0 || (g[y] = S), g;
  }, {}), p = l == null || (o = l.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((g, v) => {
    let { class: y, className: S, ...A } = v;
    return Object.entries(A).every((T) => {
      let [w, E] = T;
      return Array.isArray(E) ? E.includes({
        ...d,
        ...m
      }[w]) : {
        ...d,
        ...m
      }[w] === E;
    }) ? [
      ...g,
      y,
      S
    ] : g;
  }, []);
  return ob(i, f, p, s?.class, s?.className);
}, ID = JD(
  "vt:inline-flex vt:shrink-0 vt:items-center vt:justify-center vt:gap-2 vt:rounded-md vt:text-sm vt:font-medium vt:whitespace-nowrap vt:transition-all vt:outline-none vt:focus-visible:border-ring vt:focus-visible:ring-[3px] vt:focus-visible:ring-ring/50 vt:disabled:pointer-events-none vt:disabled:opacity-50 vt:aria-invalid:border-destructive vt:aria-invalid:ring-destructive/20 vt:dark:aria-invalid:ring-destructive/40 vt:[&_svg]:pointer-events-none vt:[&_svg]:shrink-0 vt:[&_svg:not([class*=size-])]:size-4",
  {
    variants: {
      variant: {
        default: "vt:bg-primary vt:text-primary-foreground vt:hover:bg-primary/90",
        destructive: "vt:bg-destructive vt:text-white vt:hover:bg-destructive/90 vt:focus-visible:ring-destructive/20 vt:dark:bg-destructive/60 vt:dark:focus-visible:ring-destructive/40",
        outline: "vt:border vt:bg-background vt:shadow-xs vt:hover:bg-accent vt:hover:text-accent-foreground vt:dark:border-input vt:dark:bg-input/30 vt:dark:hover:bg-input/50",
        secondary: "vt:bg-secondary vt:text-secondary-foreground vt:hover:bg-secondary/80",
        ghost: "vt:hover:bg-accent vt:hover:text-accent-foreground vt:dark:hover:bg-accent/50",
        link: "vt:text-primary vt:underline-offset-4 vt:hover:underline"
      },
      size: {
        default: "vt:h-9 vt:px-4 vt:py-2 vt:has-[>svg]:px-3",
        xs: "vt:h-6 vt:gap-1 vt:rounded-md vt:px-2 vt:text-xs vt:has-[>svg]:px-1.5 vt:[&_svg:not([class*=size-])]:size-3",
        sm: "vt:h-8 vt:gap-1.5 vt:rounded-md vt:px-3 vt:has-[>svg]:px-2.5",
        lg: "vt:h-10 vt:rounded-md vt:px-6 vt:has-[>svg]:px-4",
        icon: "vt:size-9",
        "icon-xs": "vt:size-6 vt:rounded-md vt:[&_svg:not([class*=size-])]:size-3",
        "icon-sm": "vt:size-8",
        "icon-lg": "vt:size-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function rb({
  className: i,
  variant: l = "default",
  size: s = "default",
  asChild: o = !1,
  ...c
}) {
  const d = o ? QE : "button";
  return /* @__PURE__ */ D.jsx(
    d,
    {
      "data-slot": "button",
      "data-variant": l,
      "data-size": s,
      className: wa(ID({ variant: l, size: s, className: i })),
      ...c
    }
  );
}
const HS = q.createContext(null);
function kS() {
  const i = q.useContext(HS);
  if (!i)
    throw new Error("useCarousel must be used within a <Carousel />");
  return i;
}
function Md({
  orientation: i = "horizontal",
  opts: l,
  setApi: s,
  plugins: o,
  className: c,
  children: d,
  ...f
}) {
  const [m, p] = Wh(
    {
      ...l,
      axis: i === "horizontal" ? "x" : "y"
    },
    o
  ), [g, v] = q.useState(!1), [y, S] = q.useState(!1), A = q.useCallback((z) => {
    z && (v(z.canScrollPrev()), S(z.canScrollNext()));
  }, []), T = q.useCallback(() => {
    p?.scrollPrev();
  }, [p]), w = q.useCallback(() => {
    p?.scrollNext();
  }, [p]), E = q.useCallback(
    (z) => {
      z.key === "ArrowLeft" ? (z.preventDefault(), T()) : z.key === "ArrowRight" && (z.preventDefault(), w());
    },
    [T, w]
  );
  return q.useEffect(() => {
    !p || !s || s(p);
  }, [p, s]), q.useEffect(() => {
    if (p)
      return A(p), p.on("reInit", A), p.on("select", A), () => {
        p?.off("select", A), p?.off("reInit", A);
      };
  }, [p, A]), /* @__PURE__ */ D.jsx(
    HS.Provider,
    {
      value: {
        carouselRef: m,
        api: p,
        opts: l,
        orientation: i || (l?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: T,
        scrollNext: w,
        canScrollPrev: g,
        canScrollNext: y
      },
      children: /* @__PURE__ */ D.jsx(
        "div",
        {
          onKeyDownCapture: E,
          className: wa("vt:relative", c),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...f,
          children: d
        }
      )
    }
  );
}
function Dd({ className: i, ...l }) {
  const { carouselRef: s, orientation: o } = kS();
  return /* @__PURE__ */ D.jsx(
    "div",
    {
      ref: s,
      className: "vt:overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ D.jsx(
        "div",
        {
          className: wa(
            "vt:flex",
            o === "horizontal" ? "vt:-ml-4" : "vt:-mt-4 vt:flex-col",
            i
          ),
          ...l
        }
      )
    }
  );
}
function zd({ className: i, ...l }) {
  const { orientation: s } = kS();
  return /* @__PURE__ */ D.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: wa(
        "vt:min-w-0 vt:shrink-0 vt:grow-0 vt:basis-full",
        s === "horizontal" ? "vt:pl-4" : "vt:pt-4",
        i
      ),
      ...l
    }
  );
}
const WD = {
  active: !0,
  breakpoints: {},
  delay: 4e3,
  jump: !1,
  playOnInit: !0,
  stopOnFocusIn: !0,
  stopOnInteraction: !0,
  stopOnMouseEnter: !1,
  stopOnLastSnap: !1,
  rootNode: null
};
function $D(i, l) {
  const s = i.scrollSnapList();
  return typeof l == "number" ? s.map(() => l) : l(s, i);
}
function tz(i, l) {
  const s = i.rootNode();
  return l && l(s) || s;
}
function $h(i = {}) {
  let l, s, o, c, d = null, f = 0, m = !1, p = !1, g = !1, v = !1;
  function y(et, nt) {
    s = et;
    const {
      mergeOptions: X,
      optionsAtMedia: J
    } = nt, it = X(WD, $h.globalOptions), at = X(it, i);
    if (l = J(at), s.scrollSnapList().length <= 1) return;
    v = l.jump, o = !1, c = $D(s, l.delay);
    const {
      eventStore: Y,
      ownerDocument: yt
    } = s.internalEngine(), vt = !!s.internalEngine().options.watchDrag, At = tz(s, l.rootNode);
    Y.add(yt, "visibilitychange", z), vt && s.on("pointerDown", G), vt && !l.stopOnInteraction && s.on("pointerUp", _), l.stopOnMouseEnter && Y.add(At, "mouseenter", Q), l.stopOnMouseEnter && !l.stopOnInteraction && Y.add(At, "mouseleave", K), l.stopOnFocusIn && s.on("slideFocusStart", E), l.stopOnFocusIn && !l.stopOnInteraction && Y.add(s.containerNode(), "focusout", w), l.playOnInit && w();
  }
  function S() {
    s.off("pointerDown", G).off("pointerUp", _).off("slideFocusStart", E), E(), o = !0, m = !1;
  }
  function A() {
    const {
      ownerWindow: et
    } = s.internalEngine();
    et.clearTimeout(f), f = et.setTimeout(F, c[s.selectedScrollSnap()]), d = (/* @__PURE__ */ new Date()).getTime(), s.emit("autoplay:timerset");
  }
  function T() {
    const {
      ownerWindow: et
    } = s.internalEngine();
    et.clearTimeout(f), f = 0, d = null, s.emit("autoplay:timerstopped");
  }
  function w() {
    if (!o) {
      if (B()) {
        g = !0;
        return;
      }
      m || s.emit("autoplay:play"), A(), m = !0;
    }
  }
  function E() {
    o || (m && s.emit("autoplay:stop"), T(), m = !1);
  }
  function z() {
    if (B())
      return g = m, E();
    g && w();
  }
  function B() {
    const {
      ownerDocument: et
    } = s.internalEngine();
    return et.visibilityState === "hidden";
  }
  function G() {
    p || E();
  }
  function _() {
    p || w();
  }
  function Q() {
    p = !0, E();
  }
  function K() {
    p = !1, w();
  }
  function N(et) {
    typeof et < "u" && (v = et), w();
  }
  function O() {
    m && E();
  }
  function ot() {
    m && w();
  }
  function ut() {
    return m;
  }
  function F() {
    const {
      index: et
    } = s.internalEngine(), nt = et.clone().add(1).get(), X = s.scrollSnapList().length - 1, J = l.stopOnLastSnap && nt === X;
    if (s.canScrollNext() ? s.scrollNext(v) : s.scrollTo(0, v), s.emit("autoplay:select"), J) return E();
    w();
  }
  function I() {
    if (!d) return null;
    const et = c[s.selectedScrollSnap()], nt = (/* @__PURE__ */ new Date()).getTime() - d;
    return et - nt;
  }
  return {
    name: "autoplay",
    options: i,
    init: y,
    destroy: S,
    play: N,
    stop: O,
    reset: ot,
    isPlaying: ut,
    timeUntilNext: I
  };
}
$h.globalOptions = void 0;
const bl = [
  {
    id: "product-malai-pair",
    category: "garland",
    name: "Wedding Garland Pair",
    image: "images/products/malai-pair.png",
    alt: "Vetiver wedding garland pair with purple and orange thread",
    description: "Matching vetiver malai set with purple, orange & gold thread work. Perfect for weddings."
  },
  {
    id: "product-malai-royal",
    category: "garland",
    name: "Royal Vetiver Garland",
    image: "images/products/malai-royal.png",
    alt: "Vetiver garland with maroon thread and gold ornaments",
    description: "Elegant malai with deep maroon thread, gold spiral ornaments & beaded tassel pendant."
  },
  {
    id: "product-malai-green",
    category: "garland",
    name: "Green & Gold Garland",
    image: "images/products/malai-green.png",
    alt: "Vetiver garland with green thread and gold roses",
    description: "Classic vetiver malai with emerald green thread bands and golden rose ornaments."
  },
  {
    id: "product-malai-neon",
    category: "garland",
    name: "Neon Vetiver Garland",
    image: "images/products/malai-neon.png",
    alt: "Vetiver garland with neon green and pink thread",
    description: "Vibrant vetiver malai with bright neon green and hot pink thread accents."
  },
  {
    id: "product-malai-flowers",
    category: "garland",
    name: "Flower Vetiver Garland",
    image: "images/products/malai-flowers.png",
    alt: "Vetiver garland with flower decorations",
    description: "Beautiful vetiver malai adorned with red & yellow flowers and pink tassels."
  },
  {
    id: "product-peacock",
    category: "decor",
    name: "Vetiver Peacock (Mayil)",
    image: "images/products/peacock.png",
    alt: "Vetiver root peacock sculpture",
    description: "Stunning peacock sculpture crafted entirely from vetiver roots with colorful feather details."
  },
  {
    id: "product-toran-fringe",
    category: "toran",
    name: "Vetiver Door Curtain",
    image: "images/products/toran-fringe.png",
    alt: "Vetiver root door hanging with natural fringe",
    description: "Natural vetiver root door hanging with woven top band and flowing fringe. Cooling fragrance."
  },
  {
    id: "product-toran-flowers",
    category: "toran",
    name: "Flower Toran",
    image: "images/products/toran-flowers.png",
    alt: "Vetiver door hanging with flower decorations",
    description: "Vetiver door hanging with red ribbon border and colorful flower embellishments."
  },
  {
    id: "product-hanging-bells",
    category: "toran",
    name: "Vetiver Bell Hanging",
    image: "images/products/hanging-bells.png",
    alt: "Vetiver circular hanging decoration with brass bells",
    description: "Decorative hanging with circular vetiver discs on embroidered ribbon with brass bells."
  },
  {
    id: "product-vel",
    category: "ceremony",
    name: "Vetiver Vel (Spear)",
    image: "images/products/vel.png",
    alt: "Vetiver root vel - Lord Murugan's spear",
    description: "Sacred vel of Lord Murugan crafted from vetiver roots with blue and gold fabric wrapping."
  },
  {
    id: "product-flag",
    category: "ceremony",
    name: "Vetiver Kodi (Flag)",
    image: "images/products/flag.png",
    alt: "Vetiver root ceremonial flag",
    description: "Ceremonial temple flag handcrafted from vetiver roots with crochet border and palm motif."
  },
  {
    id: "product-toran-auspicious",
    category: "toran",
    name: "Auspicious Toran",
    image: "images/products/toran-auspicious.png",
    alt: "Vetiver door hanging with auspicious symbols",
    description: "Vetiver door hanging with sacred symbols, maroon border, and golden zigzag trim."
  }
], Ur = [bl[1], bl[6], bl[5], bl[4], bl[9]];
function ez() {
  const i = q.useRef(null), l = Kh(i, { amount: 0.2 }), s = Zh(), o = q.useRef($h({ delay: 3e3, stopOnInteraction: !0, playOnInit: !1 })), [c, d] = q.useState(), [f, m] = q.useState(), [p, g] = q.useState(), [v, y] = q.useState(0), [S, A] = q.useState(!1), [T, w] = q.useState(!1), [E, z] = q.useState(!1), [B, G] = q.useState(!0);
  q.useEffect(() => {
    const Q = () => G(!document.hidden);
    return Q(), document.addEventListener("visibilitychange", Q), () => document.removeEventListener("visibilitychange", Q);
  }, []), q.useEffect(() => {
    if (!c || !f || !p) return;
    const Q = [c, f, p], K = () => A(!0);
    Q.forEach((O) => O.on("pointerDown", K));
    const N = Q.map((O) => {
      const ot = () => {
        const ut = O.selectedScrollSnap();
        y(ut), Q.forEach((F) => {
          F !== O && F.selectedScrollSnap() !== ut && F.scrollTo(ut, !!s);
        });
      };
      return O.on("select", ot), ot;
    });
    return () => {
      Q.forEach((O, ot) => {
        O.off("select", N[ot]), O.off("pointerDown", K);
      });
    };
  }, [c, f, p, s]), q.useEffect(() => {
    c && (!s && l && B && !S && !T && !E ? o.current.play() : o.current.stop());
  }, [c, s, l, B, S, T, E]);
  const _ = (Q) => {
    A(!0), c?.scrollTo(Q, !!s);
  };
  return /* @__PURE__ */ D.jsxs("div", { ref: i, className: "showcase-inner", "data-current": v, onMouseEnter: () => w(!0), onMouseLeave: () => w(!1), onFocusCapture: () => z(!0), onBlurCapture: (Q) => {
    Q.currentTarget.contains(Q.relatedTarget) || z(!1);
  }, children: [
    /* @__PURE__ */ D.jsxs("div", { className: "showcase-top", children: [
      /* @__PURE__ */ D.jsxs("div", { className: "showcase-intro", children: [
        /* @__PURE__ */ D.jsxs("h2", { id: "showcase-title", children: [
          "Nature,",
          /* @__PURE__ */ D.jsx("br", {}),
          "thoughtfully made."
        ] }),
        /* @__PURE__ */ D.jsx("p", { children: "Handcrafted vetiver pieces for the moments you celebrate and the spaces you call home." }),
        /* @__PURE__ */ D.jsxs("div", { className: "showcase-actions", children: [
          /* @__PURE__ */ D.jsx(rb, { asChild: !0, size: "lg", className: "showcase-cta", children: /* @__PURE__ */ D.jsxs("a", { href: "products.html", children: [
            "Explore all products ",
            /* @__PURE__ */ D.jsx(Vs, { size: 20, "aria-hidden": "true" })
          ] }) }),
          /* @__PURE__ */ D.jsx(rb, { asChild: !0, size: "lg", className: "showcase-secondary", children: /* @__PURE__ */ D.jsx("a", { href: "#contact", children: "Bulk orders" }) })
        ] })
      ] }),
      /* @__PURE__ */ D.jsx(Md, { setApi: d, plugins: [o.current], opts: { loop: !0, duration: s ? 0 : 25 }, className: "showcase-main showcase-viewport", "aria-roledescription": "carousel", "aria-label": "Featured vetiver products", onKeyDown: (Q) => {
        (Q.key === "ArrowRight" || Q.key === "ArrowLeft") && (Q.preventDefault(), _(v + (Q.key === "ArrowRight" ? 1 : -1)));
      }, tabIndex: 0, children: /* @__PURE__ */ D.jsx(Dd, { className: "showcase-track", children: Ur.map((Q, K) => /* @__PURE__ */ D.jsx(zd, { className: "showcase-slide", "aria-hidden": v !== K, children: /* @__PURE__ */ D.jsx("img", { src: Q.image, alt: Q.alt, width: 1024, height: 1024, loading: "lazy", draggable: !1 }) }, Q.id)) }) })
    ] }),
    /* @__PURE__ */ D.jsxs("div", { className: "showcase-bottom", children: [
      /* @__PURE__ */ D.jsxs("div", { className: "showcase-thumbnails", children: [
        /* @__PURE__ */ D.jsx(Md, { setApi: m, opts: { loop: !0, duration: s ? 0 : 25 }, className: "showcase-thumb-viewport showcase-viewport", "aria-label": "Choose a featured product", children: /* @__PURE__ */ D.jsx(Dd, { className: "showcase-track", children: Ur.map((Q, K) => /* @__PURE__ */ D.jsx(zd, { className: "showcase-thumb-slide", children: /* @__PURE__ */ D.jsxs("button", { type: "button", className: "showcase-thumb", "aria-label": "Show " + Q.name, "aria-pressed": v === K, onClick: () => _(K), children: [
          /* @__PURE__ */ D.jsx("svg", { viewBox: "0 0 161 92", "aria-hidden": "true", children: /* @__PURE__ */ D.jsx("path", { d: "M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z", fill: "none", stroke: "currentColor" }) }),
          /* @__PURE__ */ D.jsx("img", { src: Q.image, alt: "", width: 100, height: 100, loading: "lazy", draggable: !1 })
        ] }) }, Q.id)) }) }),
        /* @__PURE__ */ D.jsxs("div", { className: "showcase-controls", children: [
          /* @__PURE__ */ D.jsx("button", { type: "button", "aria-label": "Previous product", onClick: () => _(v - 1), children: /* @__PURE__ */ D.jsx(Gb, { size: 18 }) }),
          /* @__PURE__ */ D.jsxs("span", { children: [
            String(v + 1).padStart(2, "0"),
            " / ",
            String(Ur.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ D.jsx("button", { type: "button", "aria-label": "Next product", onClick: () => _(v + 1), children: /* @__PURE__ */ D.jsx(Vs, { size: 18 }) }),
          !s && /* @__PURE__ */ D.jsx("button", { type: "button", "aria-label": S ? "Play product slideshow" : "Pause product slideshow", onClick: () => A(!S), children: S ? /* @__PURE__ */ D.jsx(cu, { size: 16 }) : /* @__PURE__ */ D.jsx(uu, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ D.jsx(Md, { setApi: g, opts: { loop: !0, duration: s ? 0 : 25 }, className: "showcase-details showcase-viewport", "aria-live": S ? "polite" : "off", children: /* @__PURE__ */ D.jsx(Dd, { className: "showcase-track", children: Ur.map((Q, K) => /* @__PURE__ */ D.jsxs(zd, { className: "showcase-detail-slide", "aria-hidden": v !== K, children: [
        /* @__PURE__ */ D.jsx("h3", { children: Q.name }),
        /* @__PURE__ */ D.jsx("p", { children: Q.description }),
        /* @__PURE__ */ D.jsxs("a", { href: "products.html#" + Q.id, tabIndex: v === K ? 0 : -1, children: [
          "Explore this piece ",
          /* @__PURE__ */ D.jsx(Vs, { size: 16, "aria-hidden": "true" })
        ] })
      ] }, Q.id)) }) })
    ] })
  ] });
}
function nz({ tagline: i, title: l, description: s, ctaText: o, images: c, className: d }) {
  const f = q.useRef(null), m = Kh(f, { amount: 0.15 }), p = Zh(), [g, v] = q.useState(!1), [y, S] = q.useState(!0);
  return q.useEffect(() => {
    const A = () => S(!document.hidden);
    return A(), document.addEventListener("visibilitychange", A), () => document.removeEventListener("visibilitychange", A);
  }, []), /* @__PURE__ */ D.jsxs("section", { ref: f, className: wa("bulk-marquee", d), "aria-labelledby": "bulk-title", children: [
    /* @__PURE__ */ D.jsxs(nh.div, { className: "bulk-copy", initial: !1, animate: { y: p || m ? 0 : 16 }, transition: { duration: p ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }, children: [
      i && /* @__PURE__ */ D.jsx("p", { children: i }),
      /* @__PURE__ */ D.jsx("h2", { id: "bulk-title", children: l }),
      /* @__PURE__ */ D.jsx("p", { children: s }),
      /* @__PURE__ */ D.jsxs(nh.button, { type: "button", "data-bulk-enquiry": !0, "aria-haspopup": "dialog", "aria-controls": "bulk-enquiry-dialog", className: "bulk-cta", whileHover: p ? {} : { y: -2 }, whileTap: p ? {} : { scale: 0.98 }, children: [
        o,
        /* @__PURE__ */ D.jsx(dh, { size: 20, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ D.jsx("span", { className: "bulk-note", children: "Share your occasion, quantity and delivery location." })
    ] }),
    /* @__PURE__ */ D.jsx("div", { className: "bulk-image-window", "aria-hidden": "true", children: /* @__PURE__ */ D.jsx("div", { className: "bulk-image-track", style: { animationPlayState: g || p || !m || !y ? "paused" : "running" }, children: [0, 1].map((A) => /* @__PURE__ */ D.jsx("div", { className: "bulk-image-group", children: c.map((T, w) => /* @__PURE__ */ D.jsx("div", { className: "bulk-image", style: { rotate: (w % 2 === 0 ? -3 : 4) + "deg" }, children: /* @__PURE__ */ D.jsx("img", { src: T, alt: "", width: 1024, height: 1024, loading: "lazy", draggable: !1 }) }, T + w)) }, A)) }) }),
    !p && /* @__PURE__ */ D.jsxs("button", { type: "button", className: "bulk-motion-toggle", onClick: () => v(!g), "aria-label": g ? "Play product ribbon" : "Pause product ribbon", children: [
      g ? /* @__PURE__ */ D.jsx(cu, { size: 15 }) : /* @__PURE__ */ D.jsx(uu, { size: 15 }),
      /* @__PURE__ */ D.jsx("span", { children: g ? "Play motion" : "Pause motion" })
    ] })
  ] });
}
function ub() {
  const i = document.getElementById("product-showcase-root");
  i && Or.createRoot(i).render(/* @__PURE__ */ D.jsx(ez, {}));
  const l = document.getElementById("bulk-order-root");
  l && Or.createRoot(l).render(/* @__PURE__ */ D.jsx(nz, { title: /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
    "More pieces.",
    /* @__PURE__ */ D.jsx("br", {}),
    "One thoughtful gesture."
  ] }), description: "For celebrations, gifting and larger orders, bring a little vetiver into every detail. Tell us what you have in mind and we’ll discuss the options with you.", ctaText: "Discuss a bulk order", images: bl.slice(0, 8).map((p) => p.image) }));
  const s = window.VETTIVER_CONFIG?.feedbackEndpoint || "", o = s.startsWith("/") && !s.startsWith("//") ? s : "", c = document.getElementById("testimonials-root");
  if (c) {
    const p = Or.createRoot(c), g = /* @__PURE__ */ D.jsxs(D.Fragment, { children: [
      /* @__PURE__ */ D.jsx(rD, { testimonials: pD }),
      /* @__PURE__ */ D.jsx(W0, { endpoint: o })
    ] });
    new URLSearchParams(location.search).get("ui-demo") === "testimonials" ? import("./demo-U7ZIHGko.js").then(({ AnimatedTestimonialsBasic: v }) => p.render(/* @__PURE__ */ D.jsxs(D.Fragment, { children: [
      /* @__PURE__ */ D.jsx(v, {}),
      /* @__PURE__ */ D.jsx(W0, { endpoint: "" })
    ] }))) : p.render(g);
  }
  const d = document.getElementById("footer-root");
  d && Or.createRoot(d).render(/* @__PURE__ */ D.jsx(mD, { columns: document.body.classList.contains("catalog-page") ? [
    { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "index.html#about" }, { label: "Customer stories", href: "index.html#reviews" }] },
    { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "index.html#reviews" }, { label: "Back home", href: "index.html" }] }
  ] : void 0 }));
  let f = 0;
  const m = new ResizeObserver(() => {
    cancelAnimationFrame(f), f = requestAnimationFrame(() => window.ScrollTrigger?.refresh());
  });
  c && m.observe(c), d && m.observe(d), i && m.observe(i), l && m.observe(l), window.addEventListener("pagehide", (p) => {
    p.persisted || (m.disconnect(), cancelAnimationFrame(f));
  });
}
document.readyState === "complete" ? ub() : document.addEventListener("DOMContentLoaded", ub, { once: !0 });
export {
  rD as A,
  D as j
};
