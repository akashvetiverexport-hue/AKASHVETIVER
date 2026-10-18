function TE(i, l) {
  for (var s = 0; s < l.length; s++) {
    const r = l[s];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const c in r)
        if (c !== "default" && !(c in i)) {
          const d = Object.getOwnPropertyDescriptor(r, c);
          d && Object.defineProperty(i, c, d.get ? d : {
            enumerable: !0,
            get: () => r[c]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }));
}
function xE(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var If = { exports: {} }, Ds = {};
var p0;
function EE() {
  if (p0) return Ds;
  p0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(r, c, d) {
    var f = null;
    if (d !== void 0 && (f = "" + d), c.key !== void 0 && (f = "" + c.key), "key" in c) {
      d = {};
      for (var m in c)
        m !== "key" && (d[m] = c[m]);
    } else d = c;
    return c = d.ref, {
      $$typeof: i,
      type: r,
      key: f,
      ref: c !== void 0 ? c : null,
      props: d
    };
  }
  return Ds.Fragment = l, Ds.jsx = s, Ds.jsxs = s, Ds;
}
var g0;
function AE() {
  return g0 || (g0 = 1, If.exports = EE()), If.exports;
}
var O = AE(), Wf = { exports: {} }, Os = {}, $f = { exports: {} }, td = {};
var y0;
function wE() {
  return y0 || (y0 = 1, (function(i) {
    function l(q, J) {
      var it = q.length;
      q.push(J);
      t: for (; 0 < it; ) {
        var at = it - 1 >>> 1, Y = q[at];
        if (0 < c(Y, J))
          q[at] = J, q[it] = Y, it = at;
        else break t;
      }
    }
    function s(q) {
      return q.length === 0 ? null : q[0];
    }
    function r(q) {
      if (q.length === 0) return null;
      var J = q[0], it = q.pop();
      if (it !== J) {
        q[0] = it;
        t: for (var at = 0, Y = q.length, yt = Y >>> 1; at < yt; ) {
          var vt = 2 * (at + 1) - 1, At = q[vt], w = vt + 1, L = q[w];
          if (0 > c(At, it))
            w < Y && 0 > c(L, At) ? (q[at] = L, q[w] = it, at = w) : (q[at] = At, q[vt] = it, at = vt);
          else if (w < Y && 0 > c(L, it))
            q[at] = L, q[w] = it, at = w;
          else break t;
        }
      }
      return J;
    }
    function c(q, J) {
      var it = q.sortIndex - J.sortIndex;
      return it !== 0 ? it : q.id - J.id;
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
    var p = [], g = [], v = 1, y = null, S = 3, A = !1, T = !1, C = !1, E = !1, z = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function _(q) {
      for (var J = s(g); J !== null; ) {
        if (J.callback === null) r(g);
        else if (J.startTime <= q)
          r(g), J.sortIndex = J.expirationTime, l(p, J);
        else break;
        J = s(g);
      }
    }
    function X(q) {
      if (C = !1, _(q), !T)
        if (s(p) !== null)
          T = !0, Z || (Z = !0, I());
        else {
          var J = s(g);
          J !== null && nt(X, J.startTime - q);
        }
    }
    var Z = !1, R = -1, D = 5, ot = -1;
    function ut() {
      return E ? !0 : !(i.unstable_now() - ot < D);
    }
    function F() {
      if (E = !1, Z) {
        var q = i.unstable_now();
        ot = q;
        var J = !0;
        try {
          t: {
            T = !1, C && (C = !1, B(R), R = -1), A = !0;
            var it = S;
            try {
              e: {
                for (_(q), y = s(p); y !== null && !(y.expirationTime > q && ut()); ) {
                  var at = y.callback;
                  if (typeof at == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var Y = at(
                      y.expirationTime <= q
                    );
                    if (q = i.unstable_now(), typeof Y == "function") {
                      y.callback = Y, _(q), J = !0;
                      break e;
                    }
                    y === s(p) && r(p), _(q);
                  } else r(p);
                  y = s(p);
                }
                if (y !== null) J = !0;
                else {
                  var yt = s(g);
                  yt !== null && nt(
                    X,
                    yt.startTime - q
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
          J ? I() : Z = !1;
        }
      }
    }
    var I;
    if (typeof k == "function")
      I = function() {
        k(F);
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
    function nt(q, J) {
      R = z(function() {
        q(i.unstable_now());
      }, J);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, i.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : D = 0 < q ? Math.floor(1e3 / q) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, i.unstable_next = function(q) {
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
        return q();
      } finally {
        S = it;
      }
    }, i.unstable_requestPaint = function() {
      E = !0;
    }, i.unstable_runWithPriority = function(q, J) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var it = S;
      S = q;
      try {
        return J();
      } finally {
        S = it;
      }
    }, i.unstable_scheduleCallback = function(q, J, it) {
      var at = i.unstable_now();
      switch (typeof it == "object" && it !== null ? (it = it.delay, it = typeof it == "number" && 0 < it ? at + it : at) : it = at, q) {
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
      return Y = it + Y, q = {
        id: v++,
        callback: J,
        priorityLevel: q,
        startTime: it,
        expirationTime: Y,
        sortIndex: -1
      }, it > at ? (q.sortIndex = it, l(g, q), s(p) === null && q === s(g) && (C ? (B(R), R = -1) : C = !0, nt(X, it - at))) : (q.sortIndex = Y, l(p, q), T || A || (T = !0, Z || (Z = !0, I()))), q;
    }, i.unstable_shouldYield = ut, i.unstable_wrapCallback = function(q) {
      var J = S;
      return function() {
        var it = S;
        S = J;
        try {
          return q.apply(this, arguments);
        } finally {
          S = it;
        }
      };
    };
  })(td)), td;
}
var v0;
function CE() {
  return v0 || (v0 = 1, $f.exports = wE()), $f.exports;
}
var ed = { exports: {} }, Et = {};
var b0;
function ME() {
  if (b0) return Et;
  b0 = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), r = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = /* @__PURE__ */ Symbol.for("react.view_transition"), A = Symbol.iterator;
  function T(w) {
    return w === null || typeof w != "object" ? null : (w = A && w[A] || w["@@iterator"], typeof w == "function" ? w : null);
  }
  var C = {
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
  function B(w, L, tt) {
    this.props = w, this.context = L, this.refs = z, this.updater = tt || C;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(w, L) {
    if (typeof w != "object" && typeof w != "function" && w != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, w, L, "setState");
  }, B.prototype.forceUpdate = function(w) {
    this.updater.enqueueForceUpdate(this, w, "forceUpdate");
  };
  function k() {
  }
  k.prototype = B.prototype;
  function _(w, L, tt) {
    this.props = w, this.context = L, this.refs = z, this.updater = tt || C;
  }
  var X = _.prototype = new k();
  X.constructor = _, E(X, B.prototype), X.isPureReactComponent = !0;
  var Z = Array.isArray;
  function R() {
  }
  var D = { H: null, A: null, T: null, S: null }, ot = Object.prototype.hasOwnProperty;
  function ut(w, L, tt) {
    var W = tt.ref;
    return {
      $$typeof: i,
      type: w,
      key: L,
      ref: W !== void 0 ? W : null,
      props: tt
    };
  }
  function F(w, L) {
    return ut(w.type, L, w.props);
  }
  function I(w) {
    return typeof w == "object" && w !== null && w.$$typeof === i;
  }
  function lt(w) {
    var L = { "=": "=0", ":": "=2" };
    return "$" + w.replace(/[=:]/g, function(tt) {
      return L[tt];
    });
  }
  var et = /\/+/g;
  function nt(w, L) {
    return typeof w == "object" && w !== null && w.key != null ? lt("" + w.key) : L.toString(36);
  }
  function q(w) {
    switch (w.status) {
      case "fulfilled":
        return w.value;
      case "rejected":
        throw w.reason;
      default:
        switch (typeof w.status == "string" ? w.then(R, R) : (w.status = "pending", w.then(
          function(L) {
            w.status === "pending" && (w.status = "fulfilled", w.value = L);
          },
          function(L) {
            w.status === "pending" && (w.status = "rejected", w.reason = L);
          }
        )), w.status) {
          case "fulfilled":
            return w.value;
          case "rejected":
            throw w.reason;
        }
    }
    throw w;
  }
  function J(w, L, tt, W, ft) {
    var ct = typeof w;
    (ct === "undefined" || ct === "boolean") && (w = null);
    var St = !1;
    if (w === null) St = !0;
    else
      switch (ct) {
        case "bigint":
        case "string":
        case "number":
          St = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case i:
            case l:
              St = !0;
              break;
            case v:
              return St = w._init, J(
                St(w._payload),
                L,
                tt,
                W,
                ft
              );
          }
      }
    if (St)
      return ft = ft(w), St = W === "" ? "." + nt(w, 0) : W, Z(ft) ? (tt = "", St != null && (tt = St.replace(et, "$&/") + "/"), J(ft, L, tt, "", function(xt) {
        return xt;
      })) : ft != null && (I(ft) && (ft = F(
        ft,
        tt + (ft.key == null || w && w.key === ft.key ? "" : ("" + ft.key).replace(
          et,
          "$&/"
        ) + "/") + St
      )), L.push(ft)), 1;
    St = 0;
    var st = W === "" ? "." : W + ":";
    if (Z(w))
      for (var $ = 0; $ < w.length; $++)
        W = w[$], ct = st + nt(W, $), St += J(
          W,
          L,
          tt,
          ct,
          ft
        );
    else if ($ = T(w), typeof $ == "function")
      for (w = $.call(w), $ = 0; !(W = w.next()).done; )
        W = W.value, ct = st + nt(W, $++), St += J(
          W,
          L,
          tt,
          ct,
          ft
        );
    else if (ct === "object") {
      if (typeof w.then == "function")
        return J(
          q(w),
          L,
          tt,
          W,
          ft
        );
      throw L = String(w), Error(
        "Objects are not valid as a React child (found: " + (L === "[object Object]" ? "object with keys {" + Object.keys(w).join(", ") + "}" : L) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return St;
  }
  function it(w, L, tt) {
    if (w == null) return w;
    var W = [], ft = 0;
    return J(w, W, "", "", function(ct) {
      return L.call(tt, ct, ft++);
    }), W;
  }
  function at(w) {
    if (w._status === -1) {
      var L = w._result, tt = L();
      tt.then(
        function(W) {
          (w._status === 0 || w._status === -1) && (w._status = 1, w._result = W, tt.status === void 0 && (tt.status = "fulfilled", tt.value = W));
        },
        function(W) {
          (w._status === 0 || w._status === -1) && (w._status = 2, w._result = W, tt.status === void 0 && (tt.status = "rejected", tt.reason = W));
        }
      ), w._status === -1 && (w._status = 0, w._result = tt);
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(w) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var L = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof w == "object" && w !== null && typeof w.message == "string" ? String(w.message) : String(w),
        error: w
      });
      if (!window.dispatchEvent(L)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", w);
      return;
    }
    console.error(w);
  };
  function yt(w) {
    var L = D.T, tt = {};
    tt.types = L !== null ? L.types : null, D.T = tt;
    try {
      var W = w(), ft = D.S;
      ft !== null && ft(tt, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(R, Y);
    } catch (ct) {
      Y(ct);
    } finally {
      L !== null && tt.types !== null && (L.types = tt.types), D.T = L;
    }
  }
  function vt(w) {
    var L = D.T;
    if (L !== null) {
      var tt = L.types;
      tt === null ? L.types = [w] : tt.indexOf(w) === -1 && tt.push(w);
    } else yt(vt.bind(null, w));
  }
  var At = {
    map: it,
    forEach: function(w, L, tt) {
      it(
        w,
        function() {
          L.apply(this, arguments);
        },
        tt
      );
    },
    count: function(w) {
      var L = 0;
      return it(w, function() {
        L++;
      }), L;
    },
    toArray: function(w) {
      return it(w, function(L) {
        return L;
      }) || [];
    },
    only: function(w) {
      if (!I(w))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return w;
    }
  };
  return Et.Activity = y, Et.Children = At, Et.Component = B, Et.Fragment = s, Et.Profiler = c, Et.PureComponent = _, Et.StrictMode = r, Et.Suspense = p, Et.ViewTransition = S, Et.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = D, Et.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(w) {
      return D.H.useMemoCache(w);
    }
  }, Et.addTransitionType = vt, Et.cache = function(w) {
    return function() {
      return w.apply(null, arguments);
    };
  }, Et.cacheSignal = function() {
    return null;
  }, Et.cloneElement = function(w, L, tt) {
    if (w == null)
      throw Error(
        "The argument must be a React element, but you passed " + w + "."
      );
    var W = E({}, w.props), ft = w.key;
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
    return ut(w.type, ft, W);
  }, Et.createContext = function(w) {
    return w = {
      $$typeof: f,
      _currentValue: w,
      _currentValue2: w,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, w.Provider = w, w.Consumer = {
      $$typeof: d,
      _context: w
    }, w;
  }, Et.createElement = function(w, L, tt) {
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
    if (w && w.defaultProps)
      for (W in St = w.defaultProps, St)
        ft[W] === void 0 && (ft[W] = St[W]);
    return ut(w, ct, ft);
  }, Et.createRef = function() {
    return { current: null };
  }, Et.forwardRef = function(w) {
    return { $$typeof: m, render: w };
  }, Et.isValidElement = I, Et.lazy = function(w) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: w },
      _init: at
    };
  }, Et.memo = function(w, L) {
    return {
      $$typeof: g,
      type: w,
      compare: L === void 0 ? null : L
    };
  }, Et.startTransition = yt, Et.unstable_useCacheRefresh = function() {
    return D.H.useCacheRefresh();
  }, Et.use = function(w) {
    return D.H.use(w);
  }, Et.useActionState = function(w, L, tt) {
    return D.H.useActionState(w, L, tt);
  }, Et.useCallback = function(w, L) {
    return D.H.useCallback(w, L);
  }, Et.useContext = function(w) {
    return D.H.useContext(w);
  }, Et.useDebugValue = function() {
  }, Et.useDeferredValue = function(w, L) {
    return D.H.useDeferredValue(w, L);
  }, Et.useEffect = function(w, L) {
    return D.H.useEffect(w, L);
  }, Et.useEffectEvent = function(w) {
    return D.H.useEffectEvent(w);
  }, Et.useId = function() {
    return D.H.useId();
  }, Et.useImperativeHandle = function(w, L, tt) {
    return D.H.useImperativeHandle(w, L, tt);
  }, Et.useInsertionEffect = function(w, L) {
    return D.H.useInsertionEffect(w, L);
  }, Et.useLayoutEffect = function(w, L) {
    return D.H.useLayoutEffect(w, L);
  }, Et.useMemo = function(w, L) {
    return D.H.useMemo(w, L);
  }, Et.useOptimistic = function(w, L) {
    return D.H.useOptimistic(w, L);
  }, Et.useReducer = function(w, L, tt) {
    return D.H.useReducer(w, L, tt);
  }, Et.useRef = function(w) {
    return D.H.useRef(w);
  }, Et.useState = function(w) {
    return D.H.useState(w);
  }, Et.useSyncExternalStore = function(w, L, tt) {
    return D.H.useSyncExternalStore(
      w,
      L,
      tt
    );
  }, Et.useTransition = function() {
    return D.H.useTransition();
  }, Et.version = "19.3.0", Et;
}
var S0;
function nh() {
  return S0 || (S0 = 1, ed.exports = ME()), ed.exports;
}
var nd = { exports: {} }, we = {};
var T0;
function DE() {
  if (T0) return we;
  T0 = 1;
  var i = nh();
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
  var r = {
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
  return we.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r, we.browser = function(v) {
    return { $$typeof: d, _reason: v };
  }, we.createPortal = function(v, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(l(299));
    return m(v, y, null, S);
  }, we.flushSync = function(v) {
    var y = p.T, S = r.p;
    try {
      if (p.T = null, r.p = 2, v) return v();
    } finally {
      p.T = y, r.p = S, r.d.f();
    }
  }, we.preconnect = function(v, y) {
    typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, r.d.C(v, y));
  }, we.prefetchDNS = function(v) {
    typeof v == "string" && r.d.D(v);
  }, we.preinit = function(v, y) {
    if (typeof v == "string" && y && typeof y.as == "string") {
      var S = y.as, A = g(S, y.crossOrigin), T = typeof y.integrity == "string" ? y.integrity : void 0, C = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? r.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: A,
          integrity: T,
          fetchPriority: C
        }
      ) : S === "script" && r.d.X(v, {
        crossOrigin: A,
        integrity: T,
        fetchPriority: C,
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
          r.d.M(v, {
            crossOrigin: S,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
            nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
          });
        }
      } else y == null && r.d.M(v);
  }, we.preload = function(v, y) {
    if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var S = y.as, A = g(S, y.crossOrigin);
      r.d.L(v, S, {
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
        r.d.m(v, {
          as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
          crossOrigin: S,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0
        });
      } else r.d.m(v);
  }, we.requestFormReset = function(v) {
    r.d.r(v);
  }, we.unstable_batchedUpdates = function(v, y) {
    return v(y);
  }, we.useFormState = function(v, y, S) {
    return p.H.useFormState(v, y, S);
  }, we.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, we.version = "19.3.0", we;
}
var x0;
function ib() {
  if (x0) return nd.exports;
  x0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), nd.exports = DE(), nd.exports;
}
var E0;
function OE() {
  if (E0) return Os;
  E0 = 1;
  var i = CE(), l = nh(), s = ib();
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
      throw Error(r(188));
  }
  function g(t) {
    var e = t.alternate;
    if (!e) {
      if (e = d(t), e === null) throw Error(r(188));
      return e !== t ? null : t;
    }
    for (var n = t, a = e; ; ) {
      var o = n.return;
      if (o === null) break;
      var u = o.alternate;
      if (u === null) {
        if (a = o.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (o.child === u.child) {
        for (u = o.child; u; ) {
          if (u === n) return p(o), t;
          if (u === a) return p(o), e;
          u = u.sibling;
        }
        throw Error(r(188));
      }
      if (n.return !== a.return) n = o, a = u;
      else {
        for (var h = !1, b = o.child; b; ) {
          if (b === n) {
            h = !0, n = o, a = u;
            break;
          }
          if (b === a) {
            h = !0, a = o, n = u;
            break;
          }
          b = b.sibling;
        }
        if (!h) {
          for (b = u.child; b; ) {
            if (b === n) {
              h = !0, n = u, a = o;
              break;
            }
            if (b === a) {
              h = !0, a = u, n = o;
              break;
            }
            b = b.sibling;
          }
          if (!h) throw Error(r(189));
        }
      }
      if (n.alternate !== a) throw Error(r(190));
    }
    if (n.tag !== 3) throw Error(r(188));
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
  function y(t, e, n, a, o, u) {
    for (; t !== null; ) {
      if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && n(t, a, o, u) || (t.tag !== 22 || t.memoizedState === null) && (e || t.tag !== 5 && t.tag !== 27) && y(
        t.child,
        e,
        n,
        a,
        o,
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
    return n === null || C(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function C(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && C(
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
        throw Error(r(559));
    }
  }
  var z = null, B = null;
  function k(t, e, n) {
    return t === n ? !0 : t === e ? (z = t, !0) : !1;
  }
  function _(t, e, n) {
    return t === n ? (B = t, !1) : t === e ? (B !== null && (z = t), !0) : !1;
  }
  function X(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function Z(t, e, n) {
    for (var a = 0, o = t; o; o = n(o)) a++;
    o = 0;
    for (var u = e; u; u = n(u)) o++;
    for (; 0 < a - o; ) t = n(t), a--;
    for (; 0 < o - a; ) e = n(e), o--;
    for (; a--; ) {
      if (t === e || e !== null && t === e.alternate)
        return t;
      t = n(t), e = n(e);
    }
    return null;
  }
  var R = Object.assign, D = /* @__PURE__ */ Symbol.for("react.element"), ot = /* @__PURE__ */ Symbol.for("react.transitional.element"), ut = /* @__PURE__ */ Symbol.for("react.portal"), F = /* @__PURE__ */ Symbol.for("react.fragment"), I = /* @__PURE__ */ Symbol.for("react.strict_mode"), lt = /* @__PURE__ */ Symbol.for("react.profiler"), et = /* @__PURE__ */ Symbol.for("react.consumer"), nt = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), it = /* @__PURE__ */ Symbol.for("react.suspense_list"), at = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), yt = /* @__PURE__ */ Symbol.for("react.activity"), vt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), At = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), w = /* @__PURE__ */ Symbol.for("react.view_transition"), L = /* @__PURE__ */ Symbol.for("react.recoverable"), tt = Symbol.iterator;
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
      case w:
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
        case q:
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
  function Gt(t) {
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
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ay(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Ay(e), t = wy(e, t);
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
    Gt(ee), Mt(ee, t);
  }
  function kn() {
    Gt(ee), Gt(De), Gt(ae);
  }
  function wa(t) {
    var e = t.memoizedState;
    e !== null && (ml._currentValue = e.memoizedState, Mt(oi, t)), e = ee.current;
    var n = wy(e, t.type);
    e !== n && (Mt(De, t), Mt(ee, n));
  }
  function Ca(t) {
    De.current === t && (Gt(ee), Gt(De)), oi.current === t && (Gt(oi), ml._currentValue = xt);
  }
  var Ma, eo;
  function en(t) {
    if (Ma === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Ma = e && e[1] || "", eo = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ma + t + eo;
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
                  var N = rt;
                }
                Reflect.construct(t, [], P);
              } else {
                try {
                  P.call();
                } catch (rt) {
                  N = rt;
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
                N = rt;
              }
              (P = t()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (rt) {
            if (rt && N && typeof rt.stack == "string")
              return [rt.stack, N.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = a.DetermineComponentFrameRoot(), h = u[0], b = u[1];
      if (h && b) {
        var x = h.split(`
`), j = b.split(`
`);
        for (o = a = 0; a < x.length && !x[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; o < j.length && !j[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (a === x.length || o === j.length)
          for (a = x.length - 1, o = j.length - 1; 1 <= a && 0 <= o && x[a] !== j[o]; )
            o--;
        for (; 1 <= a && 0 <= o; a--, o--)
          if (x[a] !== j[o]) {
            if (a !== 1 || o !== 1)
              do
                if (a--, o--, 0 > o || x[a] !== j[o]) {
                  var G = `
` + x[a].replace(" at new ", " at ");
                  return t.displayName && G.includes("<anonymous>") && (G = G.replace("<anonymous>", t.displayName)), G;
                }
              while (1 <= a && 0 <= o);
            break;
          }
      }
    } finally {
      wn = !1, Error.prepareStackTrace = n;
    }
    return (n = t ? t.displayName || t.name : "") ? en(n) : "";
  }
  function Dl(t, e) {
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
        e += Dl(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ol = Object.prototype.hasOwnProperty, zl = i.unstable_scheduleCallback, Rl = i.unstable_cancelCallback, vu = i.unstable_shouldYield, bu = i.unstable_requestPaint, Oe = i.unstable_now, Su = i.unstable_getCurrentPriorityLevel, Nl = i.unstable_ImmediatePriority, _l = i.unstable_UserBlockingPriority, Xi = i.unstable_NormalPriority, Tu = i.unstable_LowPriority, Vl = i.unstable_IdlePriority, no = i.log, xu = i.unstable_setDisableYieldValue, jl = null, Ye = null;
  function ui(t) {
    if (typeof no == "function" && xu(t), Ye && typeof Ye.setStrictMode == "function")
      try {
        Ye.setStrictMode(jl, t);
      } catch {
      }
  }
  var qe = Math.clz32 ? Math.clz32 : VS, NS = Math.log, _S = Math.LN2;
  function VS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (NS(t) / _S | 0) | 0;
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
    var o = 0, u = t.suspendedLanes, h = t.pingedLanes;
    t = t.warmLanes;
    var b = a & 134217727;
    return b !== 0 ? (a = b & ~u, a !== 0 ? o = Qi(a) : (h &= b, h !== 0 ? o = Qi(h) : n || (n = b & ~t, n !== 0 && (o = Qi(n))))) : (b = a & ~u, b !== 0 ? o = Qi(b) : h !== 0 ? o = Qi(h) : n || (n = a & ~t, n !== 0 && (o = Qi(n)))), o === 0 ? 0 : e !== 0 && e !== o && (e & u) === 0 && (u = o & -o, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : o;
  }
  function Ll(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Jh(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - qe(n), o = 1 << a;
        e |= t[a], n &= ~o;
      }
    return e;
  }
  function jS(t, e) {
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
  function Ih() {
    var t = lo;
    return lo <<= 1, (lo & 62914560) === 0 && (lo = 4194304), t;
  }
  function Eu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Bl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function LS(t, e, n, a, o, u) {
    var h = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var b = t.entanglements, x = t.expirationTimes, j = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var G = 31 - qe(n), P = 1 << G;
      b[G] = 0, x[G] = -1;
      var N = j[G];
      if (N !== null)
        for (j[G] = null, G = 0; G < N.length; G++) {
          var H = N[G];
          H !== null && (H.lane &= -536870913);
        }
      n &= ~P;
    }
    a !== 0 && Wh(t, a, 0), u !== 0 && o === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e));
  }
  function Wh(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - qe(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function $h(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - qe(n), o = 1 << a;
      o & e | t[a] & e && (t[a] |= e), n &= ~o;
    }
  }
  function tm(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Au(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Au(t) {
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
  function wu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function em() {
    var t = $.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : r0(t.type));
  }
  function nm(t, e) {
    var n = $.p;
    try {
      return $.p = t, e();
    } finally {
      $.p = n;
    }
  }
  var Yn = Math.random().toString(36).slice(2), be = "__reactFiber$" + Yn, Le = "__reactProps$" + Yn, Da = "__reactContainer$" + Yn, im = "__reactEvents$" + Yn, BS = "__reactListeners$" + Yn, US = "__reactHandles$" + Yn, am = "__reactResources$" + Yn, Ul = "__reactMarker$" + Yn, oo = "__reactLoad$" + Yn;
  function ro(t) {
    delete t[be], delete t[Le], delete t[BS], delete t[US];
  }
  function Zi(t) {
    var e;
    if (e = t[be]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Da] || n[be]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Yy(t); t !== null; ) {
            if (n = t[be]) return n;
            t = Yy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Oa(t) {
    if (t = t[be] || t[Da]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Hl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(r(33));
  }
  function za(t) {
    var e = t[am];
    return e || (e = t[am] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function pe(t) {
    t[Ul] = !0;
  }
  function lm(t) {
    t[oo] = void 0;
  }
  var sm = /* @__PURE__ */ new Set(), om = {};
  function Ki(t, e) {
    Ra(t, e), Ra(t + "Capture", e);
  }
  function Ra(t, e) {
    for (om[t] = e, t = 0; t < e.length; t++)
      sm.add(e[t]);
  }
  var HS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), rm = {}, um = {};
  function GS(t) {
    return Ol.call(um, t) ? !0 : Ol.call(rm, t) ? !1 : HS.test(t) ? um[t] = !0 : (rm[t] = !0, !1);
  }
  var Lt = !1;
  function cm() {
    var t = Lt;
    return Lt = !1, t;
  }
  function uo(t, e, n) {
    if (GS(e))
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
  function fm(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function kS(t, e, n) {
    var a = Object.getOwnPropertyDescriptor(
      t.constructor.prototype,
      e
    );
    if (!t.hasOwnProperty(e) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var o = a.get, u = a.set;
      return Object.defineProperty(t, e, {
        configurable: !0,
        get: function() {
          return o.call(this);
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
  function Cu(t) {
    if (!t._valueTracker) {
      var e = fm(t) ? "checked" : "value";
      t._valueTracker = kS(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function dm(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = fm(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var YS = /[\n"\\]/g;
  function nn(t) {
    return t.replace(
      YS,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Mu(t, e, n, a, o, u, h, b) {
    t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Xe(e)) : t.value !== "" + Xe(e) && (t.value = "" + Xe(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? h === "number" && t.value == e ? Du(t, Xe(t.value)) : Du(t, Xe(e)) : n != null ? Du(t, Xe(n)) : a != null && t.removeAttribute("value"), o == null && u != null && (t.defaultChecked = !!u), o != null && (t.checked = o && typeof o != "function" && typeof o != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Xe(b) : t.removeAttribute("name");
  }
  function hm(t, e, n, a, o, u, h, b) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Cu(t);
        return;
      }
      n = n != null ? "" + Xe(n) : "", e = e != null ? "" + Xe(e) : n, b || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? o, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = b ? t.checked : !!a, t.defaultChecked = !!a, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), Cu(t);
  }
  function Du(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Na(t, e, n, a) {
    if (t = t.options, e) {
      e = {};
      for (var o = 0; o < n.length; o++)
        e["$" + n[o]] = !0;
      for (n = 0; n < t.length; n++)
        o = e.hasOwnProperty("$" + t[n].value), t[n].selected !== o && (t[n].selected = o), o && a && (t[n].defaultSelected = !0);
    } else {
      for (n = "" + Xe(n), e = null, o = 0; o < t.length; o++) {
        if (t[o].value === n) {
          t[o].selected = !0, a && (t[o].defaultSelected = !0);
          return;
        }
        e !== null || t[o].disabled || (e = t[o]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function mm(t, e, n) {
    if (e != null && (e = "" + Xe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Xe(n) : "";
  }
  function pm(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(r(92));
        if (St(a)) {
          if (1 < a.length) throw Error(r(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Xe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Cu(t);
  }
  function _a(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var qS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gm(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || qS.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function ym(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(r(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Lt = !0);
      for (var o in e)
        a = e[o], e.hasOwnProperty(o) && n[o] !== a && (gm(t, o, a), Lt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && gm(t, u, e[u]);
  }
  function Ou(t) {
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
  var XS = /* @__PURE__ */ new Map([
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
  ]), QS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fo(t) {
    return QS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Cn() {
  }
  var zu = null;
  function Ru(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var Va = null, ja = null;
  function vm(t) {
    var e = Oa(t);
    if (e && (t = e.stateNode)) {
      var n = t[Le] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Mu(
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
                var o = a[Le] || null;
                if (!o) throw Error(r(90));
                Mu(
                  a,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (e = 0; e < n.length; e++)
              a = n[e], a.form === t.form && dm(a);
          }
          break t;
        case "textarea":
          mm(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Na(t, !!n.multiple, e, !1);
      }
    }
  }
  var Nu = !1;
  function bm(t, e, n) {
    if (Nu) return t(e, n);
    Nu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Nu = !1, (Va !== null || ja !== null) && (dr(), Va && (e = Va, t = ja, ja = Va = null, vm(e), t)))
        for (e = 0; e < t.length; e++) vm(t[e]);
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
        r(231, e, typeof n)
      );
    return n;
  }
  var Xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), _u = !1;
  if (Xn)
    try {
      var kl = {};
      Object.defineProperty(kl, "passive", {
        get: function() {
          _u = !0;
        }
      }), window.addEventListener("test", kl, kl), window.removeEventListener("test", kl, kl);
    } catch {
      _u = !1;
    }
  var ci = null, Vu = null, ho = null;
  function Sm() {
    if (ho) return ho;
    var t, e = Vu, n = e.length, a, o = "value" in ci ? ci.value : ci.textContent, u = o.length;
    for (t = 0; t < n && e[t] === o[t]; t++) ;
    var h = n - t;
    for (a = 1; a <= h && e[n - a] === o[u - a]; a++) ;
    return ho = o.slice(t, 1 < a ? 1 - a : void 0);
  }
  function mo(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function po() {
    return !0;
  }
  function Tm() {
    return !1;
  }
  function Re(t) {
    function e(n, a, o, u, h) {
      this._reactName = n, this._targetInst = o, this.type = a, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var b in t)
        t.hasOwnProperty(b) && (n = t[b], this[b] = n ? n(u) : u[b]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? po : Tm, this.isPropagationStopped = Tm, this;
    }
    return R(e.prototype, {
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
  }, go = Re(fi), Yl = R({}, fi, { view: 0, detail: 0 }), ZS = Re(Yl), ju, Lu, ql, yo = R({}, Yl, {
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
    getModifierState: Uu,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ql && (ql && t.type === "mousemove" ? (ju = t.screenX - ql.screenX, Lu = t.screenY - ql.screenY) : Lu = ju = 0, ql = t), ju);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Lu;
    }
  }), xm = Re(yo), KS = R({}, yo, { dataTransfer: 0 }), PS = Re(KS), FS = R({}, Yl, { relatedTarget: 0 }), Bu = Re(FS), JS = R({}, fi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), IS = Re(JS), WS = R({}, fi, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), $S = Re(WS), tT = R({}, fi, { data: 0 }), Em = Re(tT), eT = {
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
  }, nT = {
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
  }, iT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function aT(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = iT[t]) ? !!e[t] : !1;
  }
  function Uu() {
    return aT;
  }
  var lT = R({}, Yl, {
    key: function(t) {
      if (t.key) {
        var e = eT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = mo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? nT[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Uu,
    charCode: function(t) {
      return t.type === "keypress" ? mo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? mo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), sT = Re(lT), oT = R({}, yo, {
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
  }), Am = Re(oT), rT = R({}, fi, { submitter: 0 }), uT = Re(rT), cT = R({}, Yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Uu
  }), fT = Re(cT), dT = R({}, fi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), hT = Re(dT), mT = R({}, yo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), pT = Re(mT), gT = R({}, fi, {
    newState: 0,
    oldState: 0,
    source: 0
  }), yT = Re(gT), vT = [9, 13, 27, 32], Hu = Xn && "CompositionEvent" in window, Xl = null;
  Xn && "documentMode" in document && (Xl = document.documentMode);
  var bT = Xn && "TextEvent" in window && !Xl, wm = Xn && (!Hu || Xl && 8 < Xl && 11 >= Xl), Cm = " ", Mm = !1;
  function Dm(t, e) {
    switch (t) {
      case "keyup":
        return vT.indexOf(e.keyCode) !== -1;
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
  function Om(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var La = !1;
  function ST(t, e) {
    switch (t) {
      case "compositionend":
        return Om(e);
      case "keypress":
        return e.which !== 32 ? null : (Mm = !0, Cm);
      case "textInput":
        return t = e.data, t === Cm && Mm ? null : t;
      default:
        return null;
    }
  }
  function TT(t, e) {
    if (La)
      return t === "compositionend" || !Hu && Dm(t, e) ? (t = Sm(), ho = Vu = ci = null, La = !1, t) : null;
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
        return wm && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var xT = {
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
  function zm(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!xT[t.type] : e === "textarea";
  }
  function Rm(t, e, n, a) {
    Va ? ja ? ja.push(a) : ja = [a] : Va = a, e = vr(e, "onChange"), 0 < e.length && (n = new go(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Ql = null, Zl = null;
  function ET(t) {
    vy(t, 0);
  }
  function vo(t) {
    var e = Hl(t);
    if (dm(e)) return t;
  }
  function Nm(t, e) {
    if (t === "change") return e;
  }
  var _m = !1;
  if (Xn) {
    var Gu;
    if (Xn) {
      var ku = "oninput" in document;
      if (!ku) {
        var Vm = document.createElement("div");
        Vm.setAttribute("oninput", "return;"), ku = typeof Vm.oninput == "function";
      }
      Gu = ku;
    } else Gu = !1;
    _m = Gu && (!document.documentMode || 9 < document.documentMode);
  }
  function jm() {
    Ql && (Ql.detachEvent("onpropertychange", Lm), Zl = Ql = null);
  }
  function Lm(t) {
    if (t.propertyName === "value" && vo(Zl)) {
      var e = [];
      Rm(
        e,
        Zl,
        t,
        Ru(t)
      ), bm(ET, e);
    }
  }
  function AT(t, e, n) {
    t === "focusin" ? (jm(), Ql = e, Zl = n, Ql.attachEvent("onpropertychange", Lm)) : t === "focusout" && jm();
  }
  function wT(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return vo(Zl);
  }
  function CT(t, e) {
    if (t === "click") return vo(e);
  }
  function MT(t, e) {
    if (t === "input" || t === "change")
      return vo(e);
  }
  function DT(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Qe = typeof Object.is == "function" ? Object.is : DT;
  function Kl(t, e) {
    if (Qe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var o = n[a];
      if (!Ol.call(e, o) || !Qe(t[o], e[o]))
        return !1;
    }
    return !0;
  }
  function Yu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Bm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Um(t, e) {
    var n = Bm(t);
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
      n = Bm(n);
    }
  }
  function Hm(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Hm(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Gm(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Yu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Yu(t.document);
    }
    return e;
  }
  function qu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var OT = Xn && "documentMode" in document && 11 >= document.documentMode, Ba = null, Xu = null, Pl = null, Qu = !1;
  function km(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Qu || Ba == null || Ba !== Yu(a) || (a = Ba, "selectionStart" in a && qu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Pl && Kl(Pl, a) || (Pl = a, a = vr(Xu, "onSelect"), 0 < a.length && (e = new go(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Ba)));
  }
  function Pi(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ua = {
    animationend: Pi("Animation", "AnimationEnd"),
    animationiteration: Pi("Animation", "AnimationIteration"),
    animationstart: Pi("Animation", "AnimationStart"),
    transitionrun: Pi("Transition", "TransitionRun"),
    transitionstart: Pi("Transition", "TransitionStart"),
    transitioncancel: Pi("Transition", "TransitionCancel"),
    transitionend: Pi("Transition", "TransitionEnd")
  }, Zu = {}, Ym = {};
  Xn && (Ym = document.createElement("div").style, "AnimationEvent" in window || (delete Ua.animationend.animation, delete Ua.animationiteration.animation, delete Ua.animationstart.animation), "TransitionEvent" in window || delete Ua.transitionend.transition);
  function Fi(t) {
    if (Zu[t]) return Zu[t];
    if (!Ua[t]) return t;
    var e = Ua[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Ym)
        return Zu[t] = e[n];
    return t;
  }
  var qm = Fi("animationend"), Xm = Fi("animationiteration"), Qm = Fi("animationstart"), zT = Fi("transitionrun"), RT = Fi("transitionstart"), NT = Fi("transitioncancel"), Zm = Fi("transitionend"), Km = /* @__PURE__ */ new Map(), Ku = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Ku.push("scrollEnd");
  function hn(t, e) {
    Km.set(t, e), Ki(e, [t]);
  }
  var _T = 0;
  function Qn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = yn.identifierPrefix;
    var n = _T++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Pm(t) {
    if (t == null || typeof t == "string")
      return t;
    var e = null, n = al;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var o = t[n[a]];
        if (o != null) {
          if (o === "none") return "none";
          e = e == null ? o : e + (" " + o);
        }
      }
    return e ?? t.default;
  }
  function Zn(t, e) {
    return t = Pm(t), e = Pm(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
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
  }, an = [], Ha = 0, Pu = 0;
  function So() {
    for (var t = Ha, e = Pu = Ha = 0; e < t; ) {
      var n = an[e];
      an[e++] = null;
      var a = an[e];
      an[e++] = null;
      var o = an[e];
      an[e++] = null;
      var u = an[e];
      if (an[e++] = null, a !== null && o !== null) {
        var h = a.pending;
        h === null ? o.next = o : (o.next = h.next, h.next = o), a.pending = o;
      }
      u !== 0 && Fm(n, o, u);
    }
  }
  function To(t, e, n, a) {
    an[Ha++] = t, an[Ha++] = e, an[Ha++] = n, an[Ha++] = a, Pu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Fu(t, e, n, a) {
    return To(t, e, n, a), xo(t);
  }
  function Ji(t, e) {
    return To(t, null, null, e), xo(t);
  }
  function Fm(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var o = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (o = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, o && e !== null && (o = 31 - qe(n), t = u.hiddenUpdates, a = t[o], a === null ? t[o] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function xo(t) {
    if (50 < gs)
      throw gs = 0, fr = null, Error(r(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ga = {};
  function VT(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Be(t, e, n, a) {
    return new VT(t, e, n, a);
  }
  function Ju(t) {
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
  function Jm(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Eo(t, e, n, a, o, u) {
    var h = 0;
    if (a = t, typeof a == "function") Ju(a) && (h = 1);
    else if (typeof a == "string")
      h = rE(
        t,
        n,
        ee.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case yt:
          return t = Be(31, n, e, o), t.elementType = yt, t.lanes = u, t;
        case F:
          return Ii(n.children, o, u, e);
        case I:
          h = 8, o |= 24;
          break;
        case lt:
          return t = Be(12, n, e, o | 2), t.elementType = lt, t.lanes = u, t;
        case J:
          return t = Be(13, n, e, o), t.elementType = J, t.lanes = u, t;
        case it:
          return t = Be(19, n, e, o), t.elementType = it, t.lanes = u, t;
        case vt:
        case w:
          return t = o | 32, t = Be(30, n, e, t), t.elementType = w, t.lanes = u, t.stateNode = {
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
              case q:
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
            r(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Be(h, n, e, o), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Ii(t, e, n, a) {
    return t = Be(7, t, a, e), t.lanes = n, t;
  }
  function Iu(t, e, n) {
    return t = Be(6, t, null, e), t.lanes = n, t;
  }
  function Im(t) {
    var e = Be(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Wu(t, e, n) {
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
  var Wm = /* @__PURE__ */ new WeakMap();
  function ln(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Wm.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: qi(e)
      }, Wm.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: qi(e)
    };
  }
  var ka = [], Ya = 0, Ao = null, Fl = 0, sn = [], on = 0, di = null, Mn = 1, Dn = "";
  function Pn(t, e) {
    ka[Ya++] = Fl, ka[Ya++] = Ao, Ao = t, Fl = e;
  }
  function $m(t, e, n) {
    sn[on++] = Mn, sn[on++] = Dn, sn[on++] = di, di = t;
    var a = Mn;
    t = Dn;
    var o = 32 - qe(a) - 1;
    a &= ~(1 << o), n += 1;
    var u = 32 - qe(e) + o;
    if (30 < u) {
      var h = o - o % 5;
      u = (a & (1 << h) - 1).toString(32), a >>= h, o -= h, Mn = 1 << 32 - qe(e) + o | n << o | a, Dn = u + t;
    } else
      Mn = 1 << u | n << o | a, Dn = t;
  }
  function wo(t) {
    t.return !== null && (Pn(t, 1), $m(t, 1, 0));
  }
  function $u(t) {
    for (; t === Ao; )
      Ao = ka[--Ya], ka[Ya] = null, Fl = ka[--Ya], ka[Ya] = null;
    for (; t === di; )
      di = sn[--on], sn[on] = null, Dn = sn[--on], sn[on] = null, Mn = sn[--on], sn[on] = null;
  }
  function tp(t, e) {
    sn[on++] = Mn, sn[on++] = Dn, sn[on++] = di, Mn = e.id, Dn = e.overflow, di = t;
  }
  var ge = null, Ft = null, Dt = !1, hi = null, rn = !1, tc = Error(r(519));
  function mi(t) {
    var e = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Jl(ln(e, t)), tc;
  }
  function ep(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[be] = t, e[Le] = a, n) {
      case "dialog":
        Rt("cancel", e), Rt("close", e);
        break;
      case "iframe":
      case "object":
      case "embed":
        Rt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < vs.length; n++)
          Rt(vs[n], e);
        break;
      case "source":
        Rt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        Rt("error", e), Rt("load", e);
        break;
      case "details":
        Rt("toggle", e);
        break;
      case "input":
        Rt("invalid", e), hm(
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
        Rt("invalid", e);
        break;
      case "textarea":
        Rt("invalid", e), pm(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || xy(e.textContent, n) ? (a.popover != null && (Rt("beforetoggle", e), Rt("toggle", e)), a.onScroll != null && Rt("scroll", e), a.onScrollEnd != null && Rt("scrollend", e), a.onClick != null && (e.onclick = Cn), e = !0) : e = !1, e || mi(t, !0);
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
  function qa(t) {
    if (t !== ge) return !1;
    if (!Dt) return Co(t), Dt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Rf(t.type, t.memoizedProps)), n = !n), n && Ft && mi(t), Co(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Ft = ky(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(317));
      Ft = ky(t);
    } else
      e === 27 ? (e = Ft, zi(t.type) ? (t = Gf, Gf = null, Ft = t) : Ft = e) : Ft = ge ? cn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Wi() {
    Ft = ge = null, Dt = !1;
  }
  function ec() {
    var t = hi;
    return t !== null && (Ge === null ? Ge = t : Ge.push.apply(
      Ge,
      t
    ), hi = null), t;
  }
  function Jl(t) {
    hi === null ? hi = [t] : hi.push(t);
  }
  var nc = Ut(null), $i = null, Fn = null;
  function pi(t, e, n) {
    Mt(nc, e._currentValue), e._currentValue = n;
  }
  function Jn(t) {
    t._currentValue = nc.current, Gt(nc);
  }
  function Mo(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function ic(t, e, n, a) {
    var o = t.child;
    for (o !== null && (o.return = t); o !== null; ) {
      var u = o.dependencies;
      if (u !== null) {
        var h = o.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var b = u;
          u = o;
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
      } else if (o.tag === 18) {
        if (h = o.return, h === null) throw Error(r(341));
        h.lanes |= n, u = h.alternate, u !== null && (u.lanes |= n), Mo(h, n, t), h = null;
      } else
        o.tag === 13 && o.memoizedState !== null && o.memoizedState.dehydrated === null ? (o.lanes |= n, h = o.alternate, h !== null && (h.lanes |= n), Mo(
          o.return,
          n,
          t
        ), h = o.child, h = h !== null ? h.sibling : null) : h = o.child;
      if (h !== null) h.return = o;
      else
        for (h = o; h !== null; ) {
          if (h === t) {
            h = null;
            break;
          }
          if (o = h.sibling, o !== null) {
            o.return = h.return, h = o;
            break;
          }
          h = h.return;
        }
      o = h;
    }
  }
  function ta(t, e, n, a) {
    t = null;
    for (var o = e, u = !1; o !== null; ) {
      if (!u) {
        if ((o.flags & 524288) !== 0) u = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var h = o.alternate;
        if (h === null) throw Error(r(387));
        if (h = h.memoizedProps, h !== null) {
          var b = o.type;
          Qe(o.pendingProps.value, h.value) || (t !== null ? t.push(b) : t = [b]);
        }
      } else if (o === oi.current) {
        if (h = o.alternate, h === null) throw Error(r(387));
        h.memoizedState.memoizedState !== o.memoizedState.memoizedState && (t !== null ? t.push(ml) : t = [ml]);
      }
      o = o.return;
    }
    return t !== null && ic(
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
    return np($i, t);
  }
  function Oo(t, e) {
    return $i === null && ea(t), np(t, e);
  }
  function np(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Fn === null) {
      if (t === null) throw Error(r(308));
      Fn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Fn = Fn.next = e;
    return n;
  }
  var jT = typeof AbortController < "u" ? AbortController : function() {
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
  }, LT = i.unstable_scheduleCallback, BT = i.unstable_NormalPriority, se = {
    $$typeof: nt,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ac() {
    return {
      controller: new jT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Il(t) {
    t.refCount--, t.refCount === 0 && LT(BT, function() {
      t.controller.abort();
    });
  }
  function ip(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var Wl = null;
  function UT(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var $l = null, lc = 0, na = 0, Xa = null;
  function HT(t, e) {
    if ($l === null) {
      var n = $l = [];
      lc = 0, na = xf(), Xa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return lc++, e.then(ap, ap), e;
  }
  function ap() {
    if (--lc === 0 && (Wl = null, $l !== null)) {
      Xa !== null && (Xa.status = "fulfilled");
      var t = $l;
      $l = null, na = 0, Xa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function GT(t, e) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return t.then(
      function() {
        a.status = "fulfilled", a.value = e;
        for (var o = 0; o < n.length; o++) (0, n[o])(e);
      },
      function(o) {
        for (a.status = "rejected", a.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), a;
  }
  var lp = st.S;
  st.S = function(t, e) {
    if (Ig = Oe(), typeof e == "object" && e !== null && typeof e.then == "function" && HT(t, e), Wl !== null)
      for (var n = rl; n !== null; )
        ip(n, Wl), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = rl; a !== null; )
        ip(a, n), a = a.next;
      if (na !== 0) {
        a = Wl, a === null && (a = Wl = []);
        for (var o = 0; o < n.length; o++) {
          var u = n[o];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    lp !== null && lp(t, e);
  };
  var ia = Ut(null);
  function sc() {
    var t = ia.current;
    return t !== null ? t : Pt.pooledCache;
  }
  function zo(t, e) {
    e === null ? Mt(ia, ia.current) : Mt(ia, e.pool);
  }
  function sp() {
    var t = sc();
    return t === null ? null : { parent: se._currentValue, pool: t };
  }
  var Qa = Error(r(460)), oc = Error(r(474)), Ro = Error(r(542)), No = { then: function() {
  } };
  function op(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function rp(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Cn, Cn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, cp(t), t === void 0 && !("reason" in e) ? Error(r(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Cn, Cn);
        else {
          if (t = Pt, t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = e, t.status = "pending", t.then(
            function(a) {
              if (e.status === "pending") {
                var o = e;
                o.status = "fulfilled", o.value = a;
              }
            },
            function(a) {
              if (e.status === "pending") {
                var o = e;
                o.status = "rejected", o.reason = a;
              }
            }
          );
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw t = e.reason, cp(t), t;
        }
        throw la = e, Qa;
    }
  }
  function aa(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (la = n, Qa) : n;
    }
  }
  var la = null;
  function up() {
    if (la === null) throw Error(r(459));
    var t = la;
    return la = null, t;
  }
  function cp(t) {
    if (t === Qa || t === Ro)
      throw Error(r(483));
  }
  var Za = null, ts = 0;
  function _o(t) {
    var e = ts;
    return ts += 1, Za === null && (Za = []), rp(Za, t, e);
  }
  function gi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Vo(t, e) {
    throw e.$$typeof === D ? Error(r(525)) : (t = Object.prototype.toString.call(e), Error(
      r(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function fp(t) {
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
    function o(V, M) {
      return V = Kn(V, M), V.index = 0, V.sibling = null, V;
    }
    function u(V, M, U) {
      return V.index = U, t ? (U = V.alternate, U !== null ? (U = U.index, U < M ? (V.flags |= 2, M) : U) : (V.flags |= 134217730, M)) : (V.flags |= 1048576, M);
    }
    function h(V) {
      return t && V.alternate === null && (V.flags |= 134217730), V;
    }
    function b(V, M, U, K) {
      return M === null || M.tag !== 6 ? (M = Iu(U, V.mode, K), M.return = V, M) : (M = o(M, U), M.return = V, M);
    }
    function x(V, M, U, K) {
      var dt = U.type;
      return dt === F ? (V = G(
        V,
        M,
        U.props.children,
        K,
        U.key
      ), gi(V, U), V) : M !== null && (M.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Y && aa(dt) === M.type) ? (M = o(M, U.props), gi(M, U), M.return = V, M) : (M = Eo(
        U.type,
        U.key,
        U.props,
        null,
        V.mode,
        K
      ), gi(M, U), M.return = V, M);
    }
    function j(V, M, U, K) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== U.containerInfo || M.stateNode.implementation !== U.implementation ? (M = Wu(U, V.mode, K), M.return = V, M) : (M = o(M, U.children || []), M.return = V, M);
    }
    function G(V, M, U, K, dt) {
      return M === null || M.tag !== 7 ? (M = Ii(
        U,
        V.mode,
        K,
        dt
      ), M.return = V, M) : (M = o(M, U), M.return = V, M);
    }
    function P(V, M, U) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = Iu(
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
            return M = Wu(
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
            Oo(V, M),
            U
          );
        Vo(V, M);
      }
      return null;
    }
    function N(V, M, U, K) {
      var dt = M !== null ? M.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return dt !== null ? null : b(V, M, "" + U, K);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case ot:
            return U.key === dt ? x(V, M, U, K) : null;
          case ut:
            return U.key === dt ? j(V, M, U, K) : null;
          case Y:
            return U = aa(U), N(V, M, U, K);
        }
        if (St(U) || W(U))
          return dt !== null ? null : G(V, M, U, K, null);
        if (typeof U.then == "function")
          return N(
            V,
            M,
            _o(U),
            K
          );
        if (U.$$typeof === nt)
          return N(
            V,
            M,
            Oo(V, U),
            K
          );
        Vo(V, U);
      }
      return null;
    }
    function H(V, M, U, K, dt) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return V = V.get(U) || null, b(M, V, "" + K, dt);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case ot:
            return V = V.get(
              K.key === null ? U : K.key
            ) || null, x(M, V, K, dt);
          case ut:
            return V = V.get(
              K.key === null ? U : K.key
            ) || null, j(M, V, K, dt);
          case Y:
            return K = aa(K), H(
              V,
              M,
              U,
              K,
              dt
            );
        }
        if (St(K) || W(K))
          return V = V.get(U) || null, G(M, V, K, dt, null);
        if (typeof K.then == "function")
          return H(
            V,
            M,
            U,
            _o(K),
            dt
          );
        if (K.$$typeof === nt)
          return H(
            V,
            M,
            U,
            Oo(M, K),
            dt
          );
        Vo(M, K);
      }
      return null;
    }
    function rt(V, M, U, K) {
      for (var dt = null, _t = null, bt = M, Tt = M = 0, ue = null; bt !== null && Tt < U.length; Tt++) {
        bt.index > Tt ? (ue = bt, bt = null) : ue = bt.sibling;
        var jt = N(
          V,
          bt,
          U[Tt],
          K
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
          bt = P(V, U[Tt], K), bt !== null && (M = u(
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
          K
        ), ue !== null && (t && (jt = ue.alternate, jt !== null && bt.delete(jt.key === null ? Tt : jt.key)), M = u(
          ue,
          M,
          Tt
        ), _t === null ? dt = ue : _t.sibling = ue, _t = ue);
      return t && bt.forEach(function(ji) {
        return e(V, ji);
      }), Dt && Pn(V, Tt), dt;
    }
    function pt(V, M, U, K) {
      if (U == null) throw Error(r(151));
      for (var dt = null, _t = null, bt = M, Tt = M = 0, ue = null, jt = U.next(); bt !== null && !jt.done; Tt++, jt = U.next()) {
        bt.index > Tt ? (ue = bt, bt = null) : ue = bt.sibling;
        var ji = N(V, bt, jt.value, K);
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
          jt = P(V, jt.value, K), jt !== null && (M = u(jt, M, Tt), _t === null ? dt = jt : _t.sibling = jt, _t = jt);
        return Dt && Pn(V, Tt), dt;
      }
      for (bt = a(bt); !jt.done; Tt++, jt = U.next())
        jt = H(bt, V, Tt, jt.value, K), jt !== null && (t && (ue = jt.alternate, ue !== null && bt.delete(
          ue.key === null ? Tt : ue.key
        )), M = u(jt, M, Tt), _t === null ? dt = jt : _t.sibling = jt, _t = jt);
      return t && bt.forEach(function(SE) {
        return e(V, SE);
      }), Dt && Pn(V, Tt), dt;
    }
    function Ct(V, M, U, K) {
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
                      ), K = o(
                        M,
                        U.props.children
                      ), gi(K, U), K.return = V, V = K;
                      break t;
                    }
                  } else if (M.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Y && aa(dt) === M.type) {
                    n(
                      V,
                      M.sibling
                    ), K = o(M, U.props), gi(K, U), K.return = V, V = K;
                    break t;
                  }
                  n(V, M);
                  break;
                } else e(V, M);
                M = M.sibling;
              }
              U.type === F ? (K = Ii(
                U.props.children,
                V.mode,
                K,
                U.key
              ), gi(K, U), K.return = V, V = K) : (K = Eo(
                U.type,
                U.key,
                U.props,
                null,
                V.mode,
                K
              ), gi(K, U), K.return = V, V = K);
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
                    ), K = o(M, U.children || []), K.return = V, V = K;
                    break t;
                  } else {
                    n(V, M);
                    break;
                  }
                else e(V, M);
                M = M.sibling;
              }
              K = Wu(U, V.mode, K), K.return = V, V = K;
            }
            return h(V);
          case Y:
            return U = aa(U), Ct(
              V,
              M,
              U,
              K
            );
        }
        if (St(U))
          return rt(
            V,
            M,
            U,
            K
          );
        if (W(U)) {
          if (dt = W(U), typeof dt != "function") throw Error(r(150));
          return U = dt.call(U), pt(
            V,
            M,
            U,
            K
          );
        }
        if (typeof U.then == "function")
          return Ct(
            V,
            M,
            _o(U),
            K
          );
        if (U.$$typeof === nt)
          return Ct(
            V,
            M,
            Oo(V, U),
            K
          );
        Vo(V, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, M !== null && M.tag === 6 ? (n(V, M.sibling), K = o(M, U), K.return = V, V = K) : (n(V, M), K = Iu(U, V.mode, K), K.return = V, V = K), h(V)) : n(V, M);
    }
    return function(V, M, U, K) {
      try {
        ts = 0;
        var dt = Ct(
          V,
          M,
          U,
          K
        );
        return Za = null, dt;
      } catch (bt) {
        if (bt === Qa || bt === Ro) throw bt;
        var _t = Be(29, bt, null, V.mode);
        return _t.lanes = K, _t.return = V, _t;
      }
    };
  }
  var sa = fp(!0), dp = fp(!1), yi = !1;
  function rc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function uc(t, e) {
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
      var o = a.pending;
      return o === null ? e.next = e : (e.next = o.next, o.next = e), a.pending = e, e = xo(t), Fm(t, null, n), e;
    }
    return To(t, a, e, n), xo(t);
  }
  function es(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, $h(t, n);
    }
  }
  function cc(t, e) {
    var n = t.updateQueue, a = t.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var o = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? o = u = h : u = u.next = h, n = n.next;
        } while (n !== null);
        u === null ? o = u = e : u = u.next = e;
      } else o = u = e;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, t.updateQueue = n;
      return;
    }
    t = n.lastBaseUpdate, t === null ? n.firstBaseUpdate = e : t.next = e, n.lastBaseUpdate = e;
  }
  var fc = !1;
  function ns() {
    if (fc) {
      var t = Xa;
      if (t !== null) throw t;
    }
  }
  function is(t, e, n, a) {
    fc = !1;
    var o = t.updateQueue;
    yi = !1;
    var u = o.firstBaseUpdate, h = o.lastBaseUpdate, b = o.shared.pending;
    if (b !== null) {
      o.shared.pending = null;
      var x = b, j = x.next;
      x.next = null, h === null ? u = j : h.next = j, h = x;
      var G = t.alternate;
      G !== null && (G = G.updateQueue, b = G.lastBaseUpdate, b !== h && (b === null ? G.firstBaseUpdate = j : b.next = j, G.lastBaseUpdate = x));
    }
    if (u !== null) {
      var P = o.baseState;
      h = 0, G = j = x = null, b = u;
      do {
        var N = b.lane & -536870913, H = N !== b.lane;
        if (H ? (Nt & N) === N : (a & N) === N) {
          N !== 0 && N === na && (fc = !0), G !== null && (G = G.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          t: {
            var rt = t, pt = b;
            N = e;
            var Ct = n;
            switch (pt.tag) {
              case 1:
                if (rt = pt.payload, typeof rt == "function") {
                  P = rt.call(Ct, P, N);
                  break t;
                }
                P = rt;
                break t;
              case 3:
                rt.flags = rt.flags & -65537 | 128;
              case 0:
                if (rt = pt.payload, N = typeof rt == "function" ? rt.call(Ct, P, N) : rt, N == null) break t;
                P = R({}, P, N);
                break t;
              case 2:
                yi = !0;
            }
          }
          N = b.callback, N !== null && (t.flags |= 64, H && (t.flags |= 8192), H = o.callbacks, H === null ? o.callbacks = [N] : H.push(N));
        } else
          H = {
            lane: N,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, G === null ? (j = G = H, x = P) : G = G.next = H, h |= N;
        if (b = b.next, b === null) {
          if (b = o.shared.pending, b === null)
            break;
          H = b, b = H.next, H.next = null, o.lastBaseUpdate = H, o.shared.pending = null;
        }
      } while (!0);
      G === null && (x = P), o.baseState = x, o.firstBaseUpdate = j, o.lastBaseUpdate = G, u === null && (o.shared.lanes = 0), Ci |= h, t.lanes = h, t.memoizedState = P;
    }
  }
  function hp(t, e) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(e);
  }
  function mp(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        hp(n[t], e);
  }
  var Si = Ut(null), jo = Ut(0);
  function pp(t, e) {
    t = ei, Mt(jo, t), Mt(Si, e), ei = t | e.baseLanes;
  }
  function dc() {
    Mt(jo, ei), Mt(Si, Si.current);
  }
  function hc() {
    ei = jo.current, Gt(Si), Gt(jo);
  }
  var Te = Ut(null), ze = null;
  function Ti(t) {
    var e = t.alternate;
    Mt(xe, xe.current & 1), Mt(Te, t), ze === null && (e === null || Si.current !== null || e.memoizedState !== null) && (ze = t);
  }
  function mc(t) {
    Mt(xe, xe.current), Mt(Te, t), ze === null && (ze = t);
  }
  function gp(t) {
    t.tag === 22 ? (Mt(xe, xe.current), Mt(Te, t), ze === null && (ze = t)) : xi();
  }
  function xi() {
    Mt(xe, xe.current), Mt(Te, Te.current);
  }
  function Ze(t) {
    Gt(Te), ze === t && (ze = null), Gt(xe);
  }
  var xe = Ut(0);
  function as(t, e) {
    Mt(Te, Te.current), Mt(xe, e);
  }
  function pc(t) {
    Gt(xe), Gt(Te), ze === t && (ze = null);
  }
  function Lo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Uf(n) || Hf(n)))
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
  var In = 0, wt = null, Zt = null, oe = null, Bo = !1, Ka = !1, oa = !1, Uo = 0, ls = 0, Pa = null, kT = 0;
  function ne() {
    throw Error(r(321));
  }
  function gc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Qe(t[n], e[n])) return !1;
    return !0;
  }
  function yc(t, e, n, a, o, u) {
    return In = u, wt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, st.H = t === null || t.memoizedState === null ? $p : tg, oa = !1, u = n(a, o), oa = !1, Ka && (u = vp(
      e,
      n,
      a,
      o
    )), yp(t), u;
  }
  function yp(t) {
    st.H = Qo;
    var e = Zt !== null && Zt.next !== null;
    if (In = 0, oe = Zt = wt = null, Bo = !1, ls = 0, Pa = null, e) throw Error(r(300));
    t === null || re || (t = t.dependencies, t !== null && Do(t) && (re = !0));
  }
  function vp(t, e, n, a) {
    wt = t;
    var o = 0;
    do {
      if (Ka && (Pa = null), ls = 0, Ka = !1, 25 <= o) throw Error(r(301));
      if (o += 1, oe = Zt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      st.H = FT, u = e(n, a);
    } while (Ka);
    return u;
  }
  function YT() {
    var t = st.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? ss(e) : e, t = t.useState()[0], (Zt !== null ? Zt.memoizedState : null) !== t && (wt.flags |= 1024), e;
  }
  function vc() {
    var t = Uo !== 0;
    return Uo = 0, t;
  }
  function bc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function Sc(t) {
    if (Bo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Bo = !1;
    }
    In = 0, oe = Zt = wt = null, Ka = !1, ls = Uo = 0, Pa = null;
  }
  function Ne() {
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
        throw wt.alternate === null ? Error(r(467)) : Error(r(310));
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
  function ss(t) {
    var e = ls;
    return ls += 1, Pa === null && (Pa = []), t = rp(Pa, t, e), e = wt, (oe === null ? e.memoizedState : oe.next) === null && (e = e.alternate, st.H = e === null || e.memoizedState === null ? $p : tg), t;
  }
  function Go(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ss(t);
      if (t.$$typeof === L) return;
      if (t.$$typeof === nt) return Se(t);
    }
    throw Error(r(438, String(t)));
  }
  function Tc(t) {
    var e = null, n = wt.updateQueue;
    if (n !== null && (e = n.memoCache), e == null) {
      var a = wt.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (e = {
        data: a.data.map(function(o) {
          return o.slice();
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
  function ko(t) {
    var e = le();
    return xc(e, Zt, t);
  }
  function xc(t, e, n) {
    var a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = n;
    var o = t.baseQueue, u = a.pending;
    if (u !== null) {
      if (o !== null) {
        var h = o.next;
        o.next = u.next, u.next = h;
      }
      e.baseQueue = o = u, a.pending = null;
    }
    if (u = t.baseState, o === null) t.memoizedState = u;
    else {
      e = o.next;
      var b = h = null, x = null, j = e, G = !1;
      do {
        var P = j.lane & -536870913;
        if (P !== j.lane ? (Nt & P) === P : (In & P) === P) {
          var N = j.revertLane;
          if (N === 0)
            x !== null && (x = x.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null
            }), P === na && (G = !0);
          else if ((In & N) === N) {
            j = j.next, N === na && (G = !0);
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
            }, x === null ? (b = x = P, h = u) : x = x.next = P, wt.lanes |= N, Ci |= N;
          P = j.action, oa && n(u, P), u = j.hasEagerState ? j.eagerState : n(u, P);
        } else
          N = {
            lane: P,
            revertLane: j.revertLane,
            gesture: j.gesture,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          }, x === null ? (b = x = N, h = u) : x = x.next = N, wt.lanes |= P, Ci |= P;
        j = j.next;
      } while (j !== null && j !== e);
      if (x === null ? h = u : x.next = b, !Qe(u, t.memoizedState) && (re = !0, G && (n = Xa, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = h, t.baseQueue = x, a.lastRenderedState = u;
    }
    return o === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Ec(t) {
    var e = le(), n = e.queue;
    if (n === null) throw Error(r(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, o = n.pending, u = e.memoizedState;
    if (o !== null) {
      n.pending = null;
      var h = o = o.next;
      do
        u = t(u, h.action), h = h.next;
      while (h !== o);
      Qe(u, e.memoizedState) || (re = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function bp(t, e, n) {
    var a = wt, o = le(), u = Dt;
    if (u) {
      if (n === void 0) throw Error(r(407));
      n = n();
    } else n = e();
    var h = !Qe(
      (Zt || o).memoizedState,
      n
    );
    if (h && (o.memoizedState = n, re = !0), o = o.queue, Cc(xp.bind(null, a, o, t), [
      t
    ]), t = o.getSnapshot !== e || h || oe !== null && (oe.memoizedState.tag & 1) !== 0, Fa(
      t ? 9 : 8,
      { destroy: void 0 },
      Tp.bind(null, a, o, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Pt === null) throw Error(r(349));
      u || (In & 127) !== 0 || Sp(a, e, n);
    }
    return n;
  }
  function Sp(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = wt.updateQueue, e === null ? (e = Ho(), wt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Tp(t, e, n, a) {
    e.value = n, e.getSnapshot = a, Ep(e) && Ap(t);
  }
  function xp(t, e, n) {
    return n(function() {
      Ep(e) && Ap(t);
    });
  }
  function Ep(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Qe(t, n);
    } catch {
      return !0;
    }
  }
  function Ap(t) {
    var e = Ji(t, 2);
    e !== null && ke(e, t, 2);
  }
  function Ac(t) {
    var e = Ne();
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
  function wp(t, e, n, a) {
    return t.baseState = n, xc(
      t,
      Zt,
      typeof a == "function" ? a : Wn
    );
  }
  function qT(t, e, n, a, o) {
    if (Xo(t)) throw Error(r(485));
    if (t = e.action, t !== null) {
      var u = {
        payload: o,
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
      st.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Cp(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Cp(t, e) {
    var n = e.action, a = e.payload, o = t.state;
    if (e.isTransition) {
      var u = st.T, h = {};
      h.types = u !== null ? u.types : null, st.T = h;
      try {
        var b = n(o, a), x = st.S;
        x !== null && x(h, b), Mp(t, e, b);
      } catch (j) {
        wc(t, e, j);
      } finally {
        u !== null && h.types !== null && (u.types = h.types), st.T = u;
      }
    } else
      try {
        u = n(o, a), Mp(t, e, u);
      } catch (j) {
        wc(t, e, j);
      }
  }
  function Mp(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Dp(t, e, a);
      },
      function(a) {
        return wc(t, e, a);
      }
    ) : Dp(t, e, n);
  }
  function Dp(t, e, n) {
    e.status = "fulfilled", e.value = n, Op(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Cp(t, n)));
  }
  function wc(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Op(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Op(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function zp(t, e) {
    return e;
  }
  function Rp(t, e) {
    if (Dt) {
      var n = Pt.formState;
      if (n !== null) {
        t: {
          var a = wt;
          if (Dt) {
            if (Ft) {
              e: {
                for (var o = Ft, u = rn; o.nodeType !== 8; ) {
                  if (!u) {
                    o = null;
                    break e;
                  }
                  if (o = cn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break e;
                  }
                }
                u = o.data, o = u === "F!" || u === "F" ? o : null;
              }
              if (o) {
                Ft = cn(
                  o.nextSibling
                ), a = o.data === "F!";
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
    return n = Ne(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zp,
      lastRenderedState: e
    }, n.queue = a, n = Jp.bind(
      null,
      wt,
      a
    ), a.dispatch = n, a = Ac(!1), u = Rc.bind(
      null,
      wt,
      !1,
      a.queue
    ), a = Ne(), o = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = o, n = qT.bind(
      null,
      wt,
      o,
      u,
      n
    ), o.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Np(t) {
    var e = le();
    return _p(e, Zt, t);
  }
  function _p(t, e, n) {
    if (e = xc(
      t,
      e,
      zp
    )[0], t = ko(Wn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = ss(e);
      } catch (h) {
        throw h === Qa ? Ro : h;
      }
    else a = e;
    e = le();
    var o = e.queue, u = o.dispatch;
    return n !== e.memoizedState && (wt.flags |= 2048, Fa(
      9,
      { destroy: void 0 },
      XT.bind(null, o, n),
      null
    )), [a, u, t];
  }
  function XT(t, e) {
    t.action = e;
  }
  function Vp(t) {
    var e = le(), n = Zt;
    if (n !== null)
      return _p(e, n, t);
    le(), e = e.memoizedState, n = le();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Fa(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = wt.updateQueue, e === null && (e = Ho(), wt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function jp() {
    return le().memoizedState;
  }
  function Yo(t, e, n, a) {
    var o = Ne();
    wt.flags |= t, o.memoizedState = Fa(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function qo(t, e, n, a) {
    var o = le();
    a = a === void 0 ? null : a;
    var u = o.memoizedState.inst;
    Zt !== null && a !== null && gc(a, Zt.memoizedState.deps) ? o.memoizedState = Fa(e, u, n, a) : (wt.flags |= t, o.memoizedState = Fa(
      1 | e,
      u,
      n,
      a
    ));
  }
  function Lp(t, e) {
    Yo(8390656, 8, t, e);
  }
  function Cc(t, e) {
    qo(2048, 8, t, e);
  }
  function QT(t) {
    wt.flags |= 4;
    var e = wt.updateQueue;
    if (e === null)
      e = Ho(), wt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Bp(t) {
    var e = le().memoizedState;
    return QT({ ref: e, nextImpl: t }), function() {
      if ((Ht & 2) !== 0) throw Error(r(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Up(t, e) {
    return qo(4, 2, t, e);
  }
  function Hp(t, e) {
    return qo(4, 4, t, e);
  }
  function Gp(t, e) {
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
  function kp(t, e, n) {
    n = n != null ? n.concat([t]) : null, qo(4, 4, Gp.bind(null, e, t), n);
  }
  function Mc() {
  }
  function Yp(t, e) {
    var n = le();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && gc(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function qp(t, e) {
    var n = le();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && gc(e, a[1]))
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
  function Dc(t, e, n) {
    return n === void 0 || (In & 1073741824) !== 0 && (Nt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = $g(), wt.lanes |= t, Ci |= t, n);
  }
  function Xp(t, e, n, a) {
    return Qe(n, e) ? n : Si.current !== null ? (t = Dc(t, n, a), Qe(t, e) || (re = !0), t) : (In & 106) === 0 || (In & 1073741824) !== 0 && (Nt & 261930) === 0 ? (re = !0, t.memoizedState = n) : (t = $g(), wt.lanes |= t, Ci |= t, e);
  }
  function Qp(t, e, n, a, o) {
    var u = $.p;
    $.p = u !== 0 && 8 > u ? u : 8;
    var h = st.T, b = {};
    b.types = h !== null ? h.types : null, st.T = b, Rc(t, !1, e, n);
    try {
      var x = o(), j = st.S;
      if (j !== null && j(b, x), x !== null && typeof x == "object" && typeof x.then == "function") {
        var G = GT(
          x,
          a
        );
        os(
          t,
          e,
          G,
          Je(t)
        );
      } else
        os(
          t,
          e,
          a,
          Je(t)
        );
    } catch (P) {
      os(
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
  function ZT() {
  }
  function Oc(t, e, n, a) {
    if (t.tag !== 5) throw Error(r(476));
    var o = Zp(t).queue;
    Qp(
      t,
      o,
      e,
      xt,
      n === null ? ZT : function() {
        return Kp(t), n(a);
      }
    );
  }
  function Zp(t) {
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
  function Kp(t) {
    var e = Zp(t);
    e.next === null && (e = t.alternate.memoizedState), os(
      t,
      e.next.queue,
      {},
      Je()
    );
  }
  function zc() {
    return Se(ml);
  }
  function Pp() {
    return le().memoizedState;
  }
  function Fp() {
    return le().memoizedState;
  }
  function KT(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Je();
          t = vi(n);
          var a = bi(e, t, n);
          a !== null && (ke(a, e, n), es(a, e, n)), e = { cache: ac() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function PT(t, e, n) {
    var a = Je();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xo(t) ? Ip(e, n) : (n = Fu(t, e, n, a), n !== null && (ke(n, t, a), Wp(n, e, a)));
  }
  function Jp(t, e, n) {
    var a = Je();
    os(t, e, n, a);
  }
  function os(t, e, n, a) {
    var o = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Xo(t)) Ip(e, o);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var h = e.lastRenderedState, b = u(h, n);
          if (o.hasEagerState = !0, o.eagerState = b, Qe(b, h))
            return To(t, e, o, 0), Pt === null && So(), !1;
        } catch {
        }
      if (n = Fu(t, e, o, a), n !== null)
        return ke(n, t, a), Wp(n, e, a), !0;
    }
    return !1;
  }
  function Rc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: xf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xo(t)) {
      if (e) throw Error(r(479));
    } else
      e = Fu(
        t,
        n,
        a,
        2
      ), e !== null && ke(e, t, 2);
  }
  function Xo(t) {
    var e = t.alternate;
    return t === wt || e !== null && e === wt;
  }
  function Ip(t, e) {
    Ka = Bo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Wp(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, $h(t, n);
    }
  }
  var Qo = {
    readContext: Se,
    use: Go,
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
  }, $p = {
    readContext: Se,
    use: Go,
    useCallback: function(t, e) {
      return Ne().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: Se,
    useEffect: Lp,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Yo(
        4194308,
        4,
        Gp.bind(null, e, t),
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
      var n = Ne();
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
      var a = Ne();
      if (n !== void 0) {
        var o = n(e);
        if (oa) {
          ui(!0);
          try {
            n(e);
          } finally {
            ui(!1);
          }
        }
      } else o = e;
      return a.memoizedState = a.baseState = o, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: o
      }, a.queue = t, t = t.dispatch = PT.bind(
        null,
        wt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Ne();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Ac(t);
      var e = t.queue, n = Jp.bind(null, wt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Mc,
    useDeferredValue: function(t, e) {
      var n = Ne();
      return Dc(n, t, e);
    },
    useTransition: function() {
      var t = Ac(!1);
      return t = Qp.bind(
        null,
        wt,
        t.queue,
        !0,
        !1
      ), Ne().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = wt, o = Ne();
      if (Dt) {
        if (n === void 0)
          throw Error(r(407));
        n = n();
      } else {
        if (n = e(), Pt === null)
          throw Error(r(349));
        (Nt & 127) !== 0 || Sp(a, e, n);
      }
      o.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return o.queue = u, Lp(xp.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Fa(
        9,
        { destroy: void 0 },
        Tp.bind(
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
      var t = Ne(), e = Pt.identifierPrefix;
      if (Dt) {
        var n = Dn, a = Mn;
        n = (a & ~(1 << 32 - qe(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Uo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = kT++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: zc,
    useFormState: Rp,
    useActionState: Rp,
    useOptimistic: function(t) {
      var e = Ne();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Rc.bind(
        null,
        wt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: Tc,
    useCacheRefresh: function() {
      return Ne().memoizedState = KT.bind(
        null,
        wt
      );
    },
    useEffectEvent: function(t) {
      var e = Ne(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Ht & 2) !== 0)
          throw Error(r(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, tg = {
    readContext: Se,
    use: Go,
    useCallback: Yp,
    useContext: Se,
    useEffect: Cc,
    useImperativeHandle: kp,
    useInsertionEffect: Up,
    useLayoutEffect: Hp,
    useMemo: qp,
    useReducer: ko,
    useRef: jp,
    useState: function() {
      return ko(Wn);
    },
    useDebugValue: Mc,
    useDeferredValue: function(t, e) {
      var n = le();
      return Xp(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ko(Wn)[0], e = le().memoizedState;
      return [
        typeof t == "boolean" ? t : ss(t),
        e
      ];
    },
    useSyncExternalStore: bp,
    useId: Pp,
    useHostTransitionStatus: zc,
    useFormState: Np,
    useActionState: Np,
    useOptimistic: function(t, e) {
      var n = le();
      return wp(n, Zt, t, e);
    },
    useMemoCache: Tc,
    useCacheRefresh: Fp,
    useEffectEvent: Bp
  }, FT = {
    readContext: Se,
    use: Go,
    useCallback: Yp,
    useContext: Se,
    useEffect: Cc,
    useImperativeHandle: kp,
    useInsertionEffect: Up,
    useLayoutEffect: Hp,
    useMemo: qp,
    useReducer: Ec,
    useRef: jp,
    useState: function() {
      return Ec(Wn);
    },
    useDebugValue: Mc,
    useDeferredValue: function(t, e) {
      var n = le();
      return Zt === null ? Dc(n, t, e) : Xp(
        n,
        Zt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ec(Wn)[0], e = le().memoizedState;
      return [
        typeof t == "boolean" ? t : ss(t),
        e
      ];
    },
    useSyncExternalStore: bp,
    useId: Pp,
    useHostTransitionStatus: zc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(t, e) {
      var n = le();
      return Zt !== null ? wp(n, Zt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: Tc,
    useCacheRefresh: Fp,
    useEffectEvent: Bp
  };
  function Nc(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : R({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var _c = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Je(), o = vi(a);
      o.payload = e, n != null && (o.callback = n), e = bi(t, o, a), e !== null && (ke(e, t, a), es(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Je(), o = vi(a);
      o.tag = 1, o.payload = e, n != null && (o.callback = n), e = bi(t, o, a), e !== null && (ke(e, t, a), es(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Je(), a = vi(n);
      a.tag = 2, e != null && (a.callback = e), e = bi(t, a, n), e !== null && (ke(e, t, n), es(e, t, n));
    }
  };
  function eg(t, e, n, a, o, u, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, h) : e.prototype && e.prototype.isPureReactComponent ? !Kl(n, a) || !Kl(o, u) : !0;
  }
  function ng(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && _c.enqueueReplaceState(e, e.state, null);
  }
  function ra(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = R({}, n));
      for (var o in t)
        n[o] === void 0 && (n[o] = t[o]);
    }
    return n;
  }
  function ig(t) {
    bo(t);
  }
  function ag(t) {
    console.error(t);
  }
  function lg(t) {
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
  function sg(t, e, n) {
    try {
      var a = t.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function Vc(t, e, n) {
    return n = vi(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Zo(t, e);
    }, n;
  }
  function og(t) {
    return t = vi(t), t.tag = 3, t;
  }
  function rg(t, e, n, a) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var u = a.value;
      t.payload = function() {
        return o(u);
      }, t.callback = function() {
        sg(e, n, a);
      };
    }
    var h = n.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
      sg(e, n, a), typeof o != "function" && (Mi === null ? Mi = /* @__PURE__ */ new Set([this]) : Mi.add(this));
      var b = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function JT(t, e, n, a, o) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && ta(
        e,
        n,
        o,
        !0
      ), n = Te.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return ze === null ? hr() : n.alternate === null && ie === 0 && (ie = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, a === No ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), bf(t, a, o)), !1;
          case 22:
            return n.flags |= 65536, a === No ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), bf(t, a, o)), !1;
        }
        throw Error(r(435, n.tag));
      }
      return bf(t, a, o), hr(), !1;
    }
    if (Dt)
      return e = Te.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = o, a !== tc && (t = Error(r(422), { cause: a }), Jl(ln(t, n)))) : (a !== tc && (e = Error(r(423), {
        cause: a
      }), Jl(
        ln(e, n)
      )), t = t.current.alternate, t.flags |= 65536, o &= -o, t.lanes |= o, a = ln(a, n), o = Vc(
        t.stateNode,
        a,
        o
      ), cc(t, o), ie !== 4 && (ie = 2)), !1;
    var u = Error(r(520), { cause: a });
    if (u = ln(u, n), ps === null ? ps = [u] : ps.push(u), ie !== 4 && (ie = 2), e === null) return !0;
    a = ln(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = o & -o, n.lanes |= t, t = Vc(n.stateNode, a, t), cc(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Mi === null || !Mi.has(u))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = og(o), rg(
              o,
              t,
              n,
              a
            ), cc(n, o), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var jc = Error(r(461)), re = !1;
  function fe(t, e, n, a) {
    e.child = t === null ? dp(e, null, n, a) : sa(
      e,
      t.child,
      n,
      a
    );
  }
  function ug(t, e, n, a, o) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var h = {};
      for (var b in a)
        b !== "ref" && (h[b] = a[b]);
    } else h = a;
    return ea(e), a = yc(
      t,
      e,
      n,
      h,
      u,
      o
    ), b = vc(), t !== null && !re ? (bc(t, e, o), $n(t, e, o)) : (Dt && b && wo(e), e.flags |= 1, fe(t, e, a, o), e.child);
  }
  function cg(t, e, n, a, o) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Ju(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, fg(
        t,
        e,
        u,
        a,
        o
      )) : (t = Eo(
        n.type,
        null,
        a,
        e,
        e.mode,
        o
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !qc(t, o)) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Kl, n(h, a) && t.ref === e.ref)
        return $n(t, e, o);
    }
    return e.flags |= 1, t = Kn(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function fg(t, e, n, a, o) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Kl(u, a) && t.ref === e.ref)
        if (re = !1, e.pendingProps = a = u, qc(t, o))
          (t.flags & 131072) !== 0 && (re = !0);
        else
          return e.lanes = t.lanes, $n(t, e, o);
    }
    return Lc(
      t,
      e,
      n,
      a,
      o
    );
  }
  function dg(t, e, n, a) {
    var o = a.children, u = t !== null ? t.memoizedState : null;
    if (t === null && e.stateNode === null && (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((e.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, t !== null) {
          for (a = e.child = t.child, o = 0; a !== null; )
            o = o | a.lanes | a.childLanes, a = a.sibling;
          a = o & ~u;
        } else a = 0, e.child = null;
        return hg(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && zo(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? pp(e, u) : dc(), gp(e);
      else
        return a = e.lanes = 536870912, hg(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (zo(e, u.cachePool), pp(e, u), xi(), e.memoizedState = null) : (t !== null && zo(e, null), dc(), xi());
    return fe(t, e, o, n), e.child;
  }
  function rs(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function hg(t, e, n, a, o) {
    var u = sc();
    return u = u === null ? null : { parent: se._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && zo(e, null), dc(), gp(e), t !== null && ta(t, e, a, !0), e.childLanes = o, null;
  }
  function Ko(t, e) {
    return e = Po(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function mg(t, e, n) {
    return sa(e, t.child, null, n), t = Ko(e, e.pendingProps), t.flags |= 2, Ze(e), e.memoizedState = null, t;
  }
  function IT(t, e, n) {
    var a = e.pendingProps, o = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Dt) {
        if (a.mode === "hidden")
          return t = Ko(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, rs(null, t);
        if (mc(e), (t = Ft) ? (t = Gy(
          t,
          rn
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: di !== null ? { id: Mn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Im(t), n.return = e, e.child = n, ge = e, Ft = null)) : t = null, t === null) throw mi(e);
        return e.lanes = 536870912, null;
      }
      return Ko(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var h = u.dehydrated;
      if (mc(e), o)
        if (e.flags & 256)
          e.flags &= -257, e = mg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(r(558));
      else if (re || ta(t, e, n, !1), o = (n & t.childLanes) !== 0, re || o) {
        if (Si.current === null) {
          if (a = Pt, a !== null && (h = tm(a, n), h !== 0 && h !== u.retryLane))
            throw u.retryLane = h, Ji(t, h), ke(a, t, h), jc;
          hr();
        }
        e = mg(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Ft = cn(h.nextSibling), ge = e, Dt = !0, hi = null, rn = !1, t !== null && tp(e, t), e = Ko(e, a), e.flags |= 134221824;
      return e;
    }
    return t = Kn(t.child, {
      mode: a.mode,
      children: a.children
    }), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function Ja(t, e) {
    var n = e.ref;
    if (n === null)
      t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(r(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function Lc(t, e, n, a, o) {
    return ea(e), n = yc(
      t,
      e,
      n,
      a,
      void 0,
      o
    ), a = vc(), t !== null && !re ? (bc(t, e, o), $n(t, e, o)) : (Dt && a && wo(e), e.flags |= 1, fe(t, e, n, o), e.child);
  }
  function pg(t, e, n, a, o, u) {
    return ea(e), e.updateQueue = null, n = vp(
      e,
      a,
      n,
      o
    ), yp(t), a = vc(), t !== null && !re ? (bc(t, e, u), $n(t, e, u)) : (Dt && a && wo(e), e.flags |= 1, fe(t, e, n, u), e.child);
  }
  function gg(t, e, n, a, o) {
    if (ea(e), e.stateNode === null) {
      var u = Ga, h = n.contextType;
      typeof h == "object" && h !== null && (u = Se(h)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = _c, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, rc(e), h = n.contextType, u.context = typeof h == "object" && h !== null ? Se(h) : Ga, u.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Nc(
        e,
        n,
        h,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), h !== u.state && _c.enqueueReplaceState(u, u.state, null), is(e, a, u, o), ns(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var b = e.memoizedProps, x = ra(n, b);
      u.props = x;
      var j = u.context, G = n.contextType;
      h = Ga, typeof G == "object" && G !== null && (h = Se(G));
      var P = n.getDerivedStateFromProps;
      G = typeof P == "function" || typeof u.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, G || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || j !== h) && ng(
        e,
        u,
        a,
        h
      ), yi = !1;
      var N = e.memoizedState;
      u.state = N, is(e, a, u, o), ns(), j = e.memoizedState, b || N !== j || yi ? (typeof P == "function" && (Nc(
        e,
        n,
        P,
        a
      ), j = e.memoizedState), (x = yi || eg(
        e,
        n,
        x,
        a,
        N,
        j,
        h
      )) ? (G || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = j), u.props = a, u.state = j, u.context = h, a = x) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, uc(t, e), h = e.memoizedProps, G = ra(n, h), u.props = G, P = e.pendingProps, N = u.context, j = n.contextType, x = Ga, typeof j == "object" && j !== null && (x = Se(j)), b = n.getDerivedStateFromProps, (j = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== P || N !== x) && ng(
        e,
        u,
        a,
        x
      ), yi = !1, N = e.memoizedState, u.state = N, is(e, a, u, o), ns();
      var H = e.memoizedState;
      h !== P || N !== H || yi || t !== null && t.dependencies !== null && Do(t.dependencies) ? (typeof b == "function" && (Nc(
        e,
        n,
        b,
        a
      ), H = e.memoizedState), (G = yi || eg(
        e,
        n,
        G,
        a,
        N,
        H,
        x
      ) || t !== null && t.dependencies !== null && Do(t.dependencies)) ? (j || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, H, x), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        H,
        x
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = H), u.props = a, u.state = H, u.context = x, a = G) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && N === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Ja(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = sa(
      e,
      t.child,
      null,
      o
    ), e.child = sa(
      e,
      null,
      n,
      o
    )) : fe(t, e, n, o), e.memoizedState = u.state, t = e.child) : t = $n(
      t,
      e,
      o
    ), t;
  }
  function yg(t, e, n, a) {
    return Wi(), e.flags |= 256, fe(t, e, n, a), e.child;
  }
  var Bc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Uc(t) {
    return { baseLanes: t, cachePool: sp() };
  }
  function Hc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Fe), t;
  }
  function vg(t, e, n) {
    var a = e.pendingProps, o = !1, u = (e.flags & 128) !== 0, h;
    if ((h = u) || (h = t !== null && t.memoizedState === null ? !1 : (xe.current & 2) !== 0), h && (o = !0, e.flags &= -129), h = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Dt) {
        if (o ? Ti(e) : xi(), (t = Ft) ? (t = Gy(
          t,
          rn
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: di !== null ? { id: Mn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Im(t), n.return = e, e.child = n, ge = e, Ft = null)) : t = null, t === null) throw mi(e);
        return Hf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, o ? (xi(), o = e.mode, u = Po(
        { mode: "hidden", children: u },
        o
      ), a = Ii(
        a,
        o,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = Uc(n), a.childLanes = Hc(
        t,
        h,
        n
      ), e.memoizedState = Bc, rs(null, a)) : (Ti(e), Gc(e, u));
    }
    var b = t.memoizedState;
    if (b !== null) {
      var x = b.dehydrated;
      if (x !== null)
        return WT(
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
    return o ? (xi(), o = a.fallback, u = e.mode, b = t.child, x = b.sibling, a = Kn(b, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = b.subtreeFlags & 1206910976, x !== null ? o = Kn(x, o) : (o = Ii(
      o,
      u,
      n,
      null
    ), o.flags |= 2), o.return = e, a.return = e, a.sibling = o, e.child = a, rs(null, a), a = e.child, o = t.child.memoizedState, o === null ? o = Uc(n) : (u = o.cachePool, u !== null ? (b = se._currentValue, u = u.parent !== b ? { parent: b, pool: b } : u) : u = sp(), o = {
      baseLanes: o.baseLanes | n,
      cachePool: u
    }), a.memoizedState = o, a.childLanes = Hc(
      t,
      h,
      n
    ), e.memoizedState = Bc, rs(t.child, a)) : (Ti(e), n = t.child, t = n.sibling, n = Kn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [t], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Gc(t, e) {
    return e = Po(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Po(t, e) {
    return t = Be(22, t, null, e), t.lanes = 0, t;
  }
  function Fo(t, e, n) {
    return sa(e, t.child, null, n), t = Gc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function WT(t, e, n, a, o, u, h, b) {
    if (n)
      return e.flags & 256 ? (Ti(e), e.flags &= -257, Fo(
        t,
        e,
        b
      )) : e.memoizedState !== null ? (xi(), e.child = t.child, e.flags |= 128, null) : (xi(), u = o.fallback, h = e.mode, o = Po(
        { mode: "visible", children: o.children },
        h
      ), u = Ii(
        u,
        h,
        b,
        null
      ), u.flags |= 2, o.return = e, u.return = e, o.sibling = u, e.child = o, sa(e, t.child, null, b), o = e.child, o.memoizedState = Uc(b), o.childLanes = Hc(
        t,
        a,
        b
      ), e.memoizedState = Bc, rs(null, o));
    if (Ti(e), Hf(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var x = a.dgst;
      return a = x, a !== "" && (o = Error(r(419)), o.stack = "", o.digest = a, Jl({ value: o, source: null, stack: null })), Fo(
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
      if (a = Pt, a !== null && (o = tm(
        a,
        b
      ), o !== 0 && o !== h.retryLane))
        throw h.retryLane = o, Ji(t, o), ke(a, t, o), jc;
      return Uf(u) || hr(), Fo(
        t,
        e,
        b
      );
    }
    return Uf(u) ? (e.flags |= 192, e.child = t.child, null) : (t = h.treeContext, Ft = cn(u.nextSibling), ge = e, Dt = !0, hi = null, rn = !1, t !== null && tp(e, t), e = Gc(
      e,
      o.children
    ), e.flags |= 134221824, e);
  }
  function bg(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Mo(t.return, e, n);
  }
  function Sg(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Lo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function Jo(t, e, n, a, o, u) {
    var h = t.memoizedState;
    h === null ? t.memoizedState = {
      isBackwards: e,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: o,
      treeForkCount: u
    } : (h.isBackwards = e, h.rendering = null, h.renderingStartTime = 0, h.last = a, h.tail = n, h.tailMode = o, h.treeForkCount = u);
  }
  function kc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function Yc(t, e, n) {
    var a = e.pendingProps, o = a.revealOrder, u = a.tail;
    a = a.children;
    var h = xe.current;
    if (e.flags & 128)
      return as(e, h), null;
    var b = (h & 2) !== 0;
    if (b ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, as(e, h), o === "backwards" && t !== null ? (kc(t), fe(t, e, a, n), kc(t)) : fe(t, e, a, n), a = Dt ? Fl : 0, !b && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && bg(t, n, e);
        else if (t.tag === 19)
          bg(t, n, e);
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
    switch (o) {
      case "backwards":
        n = Sg(e.child), n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null, kc(e)), Jo(
          e,
          !0,
          o,
          null,
          u,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, o = e.child, e.child = null; o !== null; ) {
          if (t = o.alternate, t !== null && Lo(t) === null) {
            e.child = o;
            break;
          }
          t = o.sibling, o.sibling = n, n = o, o = t;
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
        n = Sg(e.child), n === null ? (o = e.child, e.child = null) : (o = n.sibling, n.sibling = null), Jo(
          e,
          !1,
          o,
          n,
          u,
          a
        );
    }
    return e.child;
  }
  function Tg(t, e, n) {
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
      throw Error(r(153));
    if (e.child !== null) {
      for (t = e.child, n = Kn(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
        t = t.sibling, n = n.sibling = Kn(t, t.pendingProps), n.return = e;
      n.sibling = null;
    }
    return e.child;
  }
  function qc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Do(t)));
  }
  function $T(t, e, n) {
    switch (e.tag) {
      case 3:
        ri(e, e.stateNode.containerInfo), pi(e, se, t.memoizedState.cache), Wi();
        break;
      case 27:
      case 5:
        wa(e);
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
          return e.flags |= 128, mc(e), null;
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
          var o = e.child.childLanes;
          return a || (n & o) !== 0 ? vg(t, e, n) : (Ti(e), t = $n(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        Ti(e);
        break;
      case 19:
        if (e.flags & 128)
          return Yc(
            t,
            e,
            n
          );
        if (o = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || (ta(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), o) {
          if (a)
            return Yc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (o = e.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), as(e, xe.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, dg(
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
  function xg(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        re = !0;
      else {
        if (!qc(t, n) && (e.flags & 128) === 0)
          return re = !1, $T(
            t,
            e,
            n
          );
        re = (t.flags & 131072) !== 0;
      }
    else
      re = !1, Dt && (e.flags & 1048576) !== 0 && $m(e, Fl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = aa(e.elementType), e.type = t, typeof t == "function")
            Ju(t) ? (a = ra(t, a), e.tag = 1, e = gg(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = Lc(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var o = t.$$typeof;
              if (o === q) {
                e.tag = 11, e = ug(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (o === at) {
                e.tag = 14, e = cg(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (o === nt) {
                e.tag = 10, e.type = t, e = Tg(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = ct(t) || t, Error(r(306, e, ""));
          }
        }
        return e;
      case 0:
        return Lc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, o = ra(
          a,
          e.pendingProps
        ), gg(
          t,
          e,
          a,
          o,
          n
        );
      case 3:
        t: {
          if (ri(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(r(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          o = u.element, uc(t, e), is(e, a, null, n);
          var h = e.memoizedState;
          if (a = h.cache, pi(e, se, a), a !== u.cache && ic(
            e,
            [se],
            n,
            !0
          ), ns(), a = h.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: h.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = yg(
                t,
                e,
                a,
                n
              );
              break t;
            } else if (a !== o) {
              o = ln(
                Error(r(424)),
                e
              ), Jl(o), e = yg(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ft = cn(t.firstChild), ge = e, Dt = !0, hi = null, rn = !0, n = dp(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Wi(), a === o) {
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
        return Ja(t, e), t === null ? (n = Ky(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Dt || (e.stateNode = Cy(
          e.type,
          e.pendingProps,
          ae.current,
          e
        )) : e.memoizedState = Ky(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return wa(e), t === null && Dt && (a = e.stateNode = qy(
          e.type,
          e.pendingProps,
          ae.current
        ), ge = e, rn = !0, o = Ft, zi(e.type) ? (Gf = o, Ft = cn(a.firstChild)) : Ft = o), fe(
          t,
          e,
          e.pendingProps.children,
          n
        ), Ja(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Dt && ((o = a = Ft) && (a = Kx(
          a,
          e.type,
          e.pendingProps,
          rn
        ), a !== null ? (e.stateNode = a, ge = e, Ft = cn(a.firstChild), rn = !1, o = !0) : o = !1), o || mi(e)), wa(e), o = e.type, u = e.pendingProps, h = t !== null ? t.memoizedProps : null, a = u.children, Rf(o, u) ? a = null : h !== null && Rf(o, h) && (e.flags |= 32), e.memoizedState !== null && (o = yc(
          t,
          e,
          YT,
          null,
          null,
          n
        ), ml._currentValue = o), Ja(t, e), fe(t, e, a, n), e.child;
      case 6:
        return t === null && Dt && ((t = n = Ft) && (n = Px(
          n,
          e.pendingProps,
          rn
        ), n !== null ? (e.stateNode = n, ge = e, Ft = null, t = !0) : t = !1), t || mi(e)), null;
      case 13:
        return vg(t, e, n);
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
        return ug(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, Ja(t, e), fe(t, e, a, n), e.child;
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
        return Tg(t, e, n);
      case 9:
        return o = e.type._context, a = e.pendingProps.children, ea(e), o = Se(o), a = a(o), e.flags |= 1, fe(t, e, a, n), e.child;
      case 14:
        return cg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return fg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Yc(t, e, n);
      case 31:
        return IT(t, e, n);
      case 22:
        return dg(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ea(e), a = Se(se), t === null ? (o = sc(), o === null && (o = Pt, u = ac(), o.pooledCache = u, u.refCount++, u !== null && (o.pooledCacheLanes |= n), o = u), e.memoizedState = { parent: a, cache: o }, rc(e), pi(e, se, o)) : ((t.lanes & n) !== 0 && (uc(t, e), is(e, null, null, n), ns()), o = t.memoizedState, u = e.memoizedState, o.parent !== a ? (o = { parent: a, cache: a }, e.memoizedState = o, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = o), pi(e, se, a)) : (a = u.cache, pi(e, se, a), a !== o.cache && ic(
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
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Dt && wo(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : Ja(t, e), fe(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(r(156, e.tag));
  }
  function ti(t) {
    t.flags |= 4;
  }
  function Xc(t, e, n, a, o) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? Iy(e, a) : Iy(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (o & 335544128) === o)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (iy()) t.flags |= 8192;
        else
          throw la = No, oc;
    } else t.flags &= -16777217;
  }
  function Eg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Wy(e))
      if (iy()) t.flags |= 8192;
      else
        throw la = No, oc;
  }
  function Io(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Ih() : 536870912, t.lanes |= e, el |= e);
  }
  function us(t, e) {
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
      for (var o = t.child; o !== null; )
        n |= o.lanes | o.childLanes, a |= o.subtreeFlags & 1206910976, a |= o.flags & 1206910976, o.return = t, o = o.sibling;
    else
      for (o = t.child; o !== null; )
        n |= o.lanes | o.childLanes, a |= o.subtreeFlags, a |= o.flags, o.return = t, o = o.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function tx(t, e, n) {
    var a = e.pendingProps;
    switch ($u(e), e.tag) {
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
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Jn(se), kn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (qa(e) ? ti(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, ec())), Jt(e), null;
      case 26:
        var o = e.type, u = e.memoizedState;
        return t === null ? (ti(e), u !== null ? (Jt(e), Eg(e, u)) : (Jt(e), Xc(
          e,
          o,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (ti(e), Jt(e), Eg(e, u)) : (Jt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ti(e), Jt(e), Xc(
          e,
          o,
          t,
          a,
          n
        )), null;
      case 27:
        if (Ca(e), n = ae.current, o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ti(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Jt(e), e.subtreeFlags &= -33554433, null;
          }
          t = ee.current, qa(e) ? ep(e) : (t = qy(o, a, n), e.stateNode = t, ti(e));
        }
        return Jt(e), e.subtreeFlags &= -33554433, null;
      case 5:
        if (Ca(e), o = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ti(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(r(166));
            return Jt(e), e.subtreeFlags &= -33554433, null;
          }
          if (u = ee.current, qa(e))
            ep(e);
          else {
            var h = Ss(
              ae.current
            );
            switch (u) {
              case 1:
                u = h.createElementNS(
                  "http://www.w3.org/2000/svg",
                  o
                );
                break;
              case 2:
                u = h.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  o
                );
                break;
              default:
                switch (o) {
                  case "svg":
                    u = h.createElementNS(
                      "http://www.w3.org/2000/svg",
                      o
                    );
                    break;
                  case "math":
                    u = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      o
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
                    u = typeof a.is == "string" ? h.createElement(o, { is: a.is }) : h.createElement(o);
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
            t: switch (Ae(u, o, a), o) {
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
        return Jt(e), e.subtreeFlags &= -33554433, Xc(
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
            throw Error(r(166));
          if (t = ae.current, qa(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, o = ge, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  a = o.memoizedProps;
              }
            t[be] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || xy(t.nodeValue, n)), t || mi(e, !0);
          } else
            t = Ss(t).createTextNode(
              a
            ), t[be] = e, e.stateNode = t;
        }
        return Jt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = qa(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(r(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(r(557));
              t[be] = e;
            } else
              Wi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Jt(e), t = !1;
          } else
            n = ec(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
          if (!t)
            return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
          if ((e.flags & 128) !== 0)
            throw Error(r(558));
        }
        return Jt(e), null;
      case 13:
        if (a = e.memoizedState, t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (o = qa(e), a !== null && a.dehydrated !== null) {
            if (t === null) {
              if (!o) throw Error(r(318));
              if (o = e.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(r(317));
              o[be] = e;
            } else
              Wi(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Jt(e), o = !1;
          } else
            o = ec(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
        }
        return Ze(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, o = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (o = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== o && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Io(e, e.updateQueue), Jt(e), null);
      case 4:
        return kn(), t === null && Cf(e.stateNode.containerInfo), e.flags |= 67108864, Jt(e), null;
      case 10:
        return Jn(e.type), Jt(e), null;
      case 19:
        if (pc(e), a = e.memoizedState, a === null) return Jt(e), null;
        if (o = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (o) us(a, !1);
          else {
            if (ie !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Lo(t), u !== null) {
                  for (e.flags |= 128, us(a, !1), t = u.updateQueue, e.updateQueue = t, Io(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Jm(n, t), n = n.sibling;
                  return as(
                    e,
                    xe.current & 1 | 2
                  ), Dt && Pn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && Oe() > ur && (e.flags |= 128, o = !0, us(a, !1), e.lanes = 4194304);
          }
        else {
          if (!o)
            if (t = Lo(u), t !== null) {
              if (e.flags |= 128, o = !0, t = t.updateQueue, e.updateQueue = t, Io(e, t), us(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Dt)
                return Jt(e), null;
            } else
              2 * Oe() - a.renderingStartTime > ur && n !== 536870912 && (e.flags |= 128, o = !0, us(a, !1), e.lanes = 4194304);
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
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Oe(), t.sibling = null, u = xe.current, u = o ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Dt ? as(e, u) : (n = u, Mt(Te, e), Mt(xe, n), ze === null && (ze = e)), Dt && Pn(e, a.treeForkCount), t;
        }
        return Jt(e), null;
      case 22:
      case 23:
        return Ze(e), hc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Jt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Jt(e), n = e.updateQueue, n !== null && Io(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && Gt(ia), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Jn(se), Jt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Jt(e), null;
    }
    throw Error(r(156, e.tag));
  }
  function ex(t, e) {
    switch ($u(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Jn(se), kn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ca(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ze(e), e.alternate === null)
            throw Error(r(340));
          Wi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ze(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(r(340));
          Wi();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return pc(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return kn(), null;
      case 10:
        return Jn(e.type), null;
      case 22:
      case 23:
        return Ze(e), hc(), t !== null && Gt(ia), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Jn(se), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ag(t, e) {
    switch ($u(e), e.tag) {
      case 3:
        Jn(se), kn();
        break;
      case 26:
      case 27:
      case 5:
        Ca(e);
        break;
      case 4:
        kn();
        break;
      case 31:
        e.memoizedState !== null && Ze(e);
        break;
      case 13:
        Ze(e);
        break;
      case 19:
        pc(e);
        break;
      case 10:
        Jn(e.type);
        break;
      case 22:
      case 23:
        Ze(e), hc(), t !== null && Gt(ia);
        break;
      case 24:
        Jn(se);
    }
  }
  function cs(t, e) {
    try {
      var n = e.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var o = a.next;
        n = o;
        do {
          if ((n.tag & t) === t) {
            a = void 0;
            var u = n.create, h = n.inst;
            a = u(), h.destroy = a;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (b) {
      qt(e, e.return, b);
    }
  }
  function Ei(t, e, n) {
    try {
      var a = e.updateQueue, o = a !== null ? a.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        a = u;
        do {
          if ((a.tag & t) === t) {
            var h = a.inst, b = h.destroy;
            if (b !== void 0) {
              h.destroy = void 0, o = e;
              var x = n, j = b;
              try {
                j();
              } catch (G) {
                qt(
                  o,
                  x,
                  G
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (G) {
      qt(e, e.return, G);
    }
  }
  function wg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        mp(e, n);
      } catch (a) {
        qt(t, t.return, a);
      }
    }
  }
  function Cg(t, e, n) {
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
  function On(t, e) {
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
            var o = t.stateNode, u = Qn(t.memoizedProps, o);
            (o.ref === null || o.ref.name !== u) && (o.ref = _y(u)), a = o.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var h = new Ie(t);
              y(
                t.child,
                !1,
                Qx,
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
        } catch (o) {
          qt(t, e, o);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          qt(t, e, o);
        }
      else n.current = null;
  }
  function Wo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Hy(
          t.stateNode,
          e[n]
        );
  }
  function Mg(t) {
    for (var e = t.return; e !== null && (Zc(e) && Hy(t.stateNode, e.stateNode), !Qc(e)); )
      e = e.return;
  }
  function fs(t) {
    for (var e = t.return; e !== null && (Zc(e) && Zx(t.stateNode, e.stateNode), !Qc(e)); )
      e = e.return;
  }
  function Qc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function Zc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Kc(t) {
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
    } catch (o) {
      qt(t, t.return, o);
    }
  }
  function Pc(t, e, n) {
    try {
      var a = t.stateNode;
      Mx(a, t.type, n, e), a[Le] = e;
    } catch (o) {
      qt(t, t.return, o);
    }
  }
  function Dg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && zi(t.type) || t.tag === 4;
  }
  function Fc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Dg(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && zi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Jc(t, e, n, a) {
    var o = t.tag;
    if (o === 5 || o === 6)
      o = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(o, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(o), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Cn)), Wo(t, a), Lt = !0;
    else if (o !== 4 && (o === 27 && (Wo(t, a), a = null, zi(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (Jc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Jc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function $o(t, e, n, a) {
    var o = t.tag;
    if (o === 5 || o === 6)
      o = t.stateNode, e ? n.insertBefore(o, e) : n.appendChild(o), Wo(t, a), Lt = !0;
    else if (o !== 4 && (o === 27 && (Wo(t, a), a = null, zi(t.type) && (n = t.stateNode)), t = t.child, t !== null))
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
  function Og(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, o = e.attributes; o.length; )
        e.removeAttributeNode(o[0]);
      Ae(e, a, n), e[be] = t, e[Le] = n;
    } catch (u) {
      qt(t, t.return, u);
    }
  }
  var tr = !1, Ke = null;
  function zg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (tr = !0);
  }
  var zn = null;
  function Rg() {
    var t = zn;
    return zn = null, t;
  }
  var Ue = 0;
  function Ia(t, e, n, a, o) {
    return Ue = 0, Ng(
      t.child,
      e,
      n,
      a,
      o
    );
  }
  function Ng(t, e, n, a, o) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var h = t.stateNode;
        if (a !== null) {
          var b = Vf(h);
          a.push(b), b.view && (u = !0);
        } else
          u || Vf(h).view && (u = !0);
        tr = !0, Ry(
          h,
          Ue === 0 ? e : e + "_" + Ue,
          n
        ), Ue++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && o || Ng(
        t.child,
        e,
        n,
        a,
        o
      ) && (u = !0));
      t = t.sibling;
    }
    return u;
  }
  function Rn(t, e) {
    for (; t !== null; )
      t.tag === 5 ? Ny(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Rn(
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
            throw Error(r(544));
          var n = e.name;
          e = Zn(e.default, e.share), e !== "none" && (Ia(
            t,
            n,
            e,
            null,
            !1
          ) || Rn(t.child, !1));
        }
        t = t.sibling;
      }
  }
  function Ic(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, o = Qn(a, n), u = Zn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? Ia(t, o, u, null, !1) ? (er(t), n.paired || e || ll(t, a.onEnter)) : Rn(t.child, !1) : er(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Ic(t, e), t = t.sibling;
    else er(t);
  }
  function Wc(t) {
    if (Ke !== null && Ke.size !== 0) {
      var e = Ke;
      if ((t.subtreeFlags & 18874368) !== 0)
        for (t = t.child; t !== null; ) {
          if (t.tag !== 22 || t.memoizedState === null) {
            if (t.tag === 30 && (t.flags & 18874368) !== 0) {
              var n = t.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var o = e.get(a);
                if (o !== void 0) {
                  var u = Zn(
                    n.default,
                    n.share
                  );
                  if (u !== "none" && (Ia(
                    t,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = t.stateNode, o.paired = u, u.paired = o, ll(t, n.onShare)) : Rn(t.child, !1)), e.delete(a), e.size === 0) break;
                }
              }
            }
            Wc(t);
          }
          t = t.sibling;
        }
    }
  }
  function $c(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Qn(e, t.stateNode), a = Ke !== null ? Ke.get(n) : void 0, o = Zn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      o !== "none" && (Ia(t, n, o, null, !1) ? a !== void 0 ? (o = t.stateNode, a.paired = o, o.paired = a, Ke.delete(n), ll(t, e.onShare)) : ll(t, e.onExit) : Rn(t.child, !1)), Ke !== null && Wc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        $c(t), t = t.sibling;
    else
      Ke !== null && Wc(t);
  }
  function _g(t) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var e = t.memoizedProps, n = Qn(e, t.stateNode);
        e = Zn(e.default, e.update), t.flags &= -5, e !== "none" && Ia(
          t,
          n,
          e,
          t.memoizedState = [],
          !1
        );
      } else
        (t.subtreeFlags & 33554432) !== 0 && _g(t);
      t = t.sibling;
    }
  }
  function tf(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Rn(t.child, !1));
          }
          tf(t);
        }
        t = t.sibling;
      }
  }
  function nr(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Rn(t.child, !1), tf(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        nr(t), t = t.sibling;
    else tf(t);
  }
  function Vg(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Rn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Vg(t), t = t.sibling;
  }
  function ef(t, e, n, a, o, u, h) {
    for (var b = !1; e !== null; ) {
      if (e.tag === 5) {
        var x = e.stateNode;
        if (u !== null && Ue < u.length) {
          var j = u[Ue], G = Vf(x);
          (j.view || G.view) && (b = !0);
          var P;
          if (P = (t.flags & 4) === 0)
            if (G.clip) P = !0;
            else {
              P = j.rect;
              var N = G.rect;
              P = P.y !== N.y || P.x !== N.x || P.height !== N.height || P.width !== N.width;
            }
          P && (t.flags |= 4), G.abs ? G = !j.abs : (j = j.rect, G = G.rect, G = j.height !== G.height || j.width !== G.width), G && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Ry(
          x,
          Ue === 0 ? n : n + "_" + Ue,
          o
        ), b && (t.flags & 4) !== 0 || (zn === null && (zn = []), zn.push(
          x,
          Ue === 0 ? a : a + "_" + Ue,
          e.memoizedProps
        )), Ue++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h ? t.flags |= e.flags & 32 : ef(
        t,
        e.child,
        n,
        a,
        o,
        u,
        h
      ) && (b = !0));
      e = e.sibling;
    }
    return b;
  }
  function jg(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, o = Qn(n, a), u = Zn(n.default, n.update), h;
        h = t.memoizedState, t.memoizedState = null, a = t;
        var b = t.child;
        Ue = 0, o = ef(
          a,
          b,
          o,
          o,
          u,
          h,
          !1
        ), (t.flags & 4) !== 0 && o && ll(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && jg(t);
      t = t.sibling;
    }
  }
  var ye = !1, kt = !1, Nn = !1, nf = !1, Lg = typeof WeakSet == "function" ? WeakSet : Set, ve = null, _n = !1, ds = !1, ir = !1, af = !1;
  function nx(t, e, n) {
    if (t = t.containerInfo, Of = pl, t = Gm(t), qu(t)) {
      if ("selectionStart" in t)
        var a = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          a = (a = t.ownerDocument) && a.defaultView || window;
          var o = a.getSelection && a.getSelection();
          if (o && o.rangeCount !== 0) {
            a = o.anchorNode;
            var u = o.anchorOffset, h = o.focusNode;
            o = o.focusOffset;
            try {
              a.nodeType, h.nodeType;
            } catch {
              a = null;
              break t;
            }
            var b = 0, x = -1, j = -1, G = 0, P = 0, N = t, H = null;
            e: for (; ; ) {
              for (var rt; N !== a || u !== 0 && N.nodeType !== 3 || (x = b + u), N !== h || o !== 0 && N.nodeType !== 3 || (j = b + o), N.nodeType === 3 && (b += N.nodeValue.length), (rt = N.firstChild) !== null; )
                H = N, N = rt;
              for (; ; ) {
                if (N === t) break e;
                if (H === a && ++G === u && (x = b), H === h && ++P === o && (j = b), (rt = N.nextSibling) !== null) break;
                N = H, H = N.parentNode;
              }
              N = rt;
            }
            a = x === -1 || j === -1 ? null : { start: x, end: j };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (zf = { focusedElem: t, selectionRange: a }, pl = !1, n = (n & 335544064) === n, ve = e, e = n ? 9270 : 1024; ve !== null; ) {
      if (t = ve, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && $c(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && zg(t), ar(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && $c(a), ar(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && zg(t), ar(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, ve = a) : (n && _g(t), ar(n));
      }
    }
    Ke = null;
  }
  function ar(t) {
    for (; ve !== null; ) {
      var e = ve, n = t, a = e.alternate, o = e.flags;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((o & 1024) !== 0 && a !== null) {
            n = void 0, o = a.memoizedProps, a = a.memoizedState;
            var u = e.stateNode;
            try {
              var h = ra(
                e.type,
                o
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
          if ((o & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              Bf(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Bf(a);
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
          ), o = e.memoizedProps, o = Zn(o.default, o.update), o !== "none" && Ia(
            a,
            n,
            o,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((o & 1024) !== 0) throw Error(r(163));
      }
      if (a = e.sibling, a !== null) {
        a.return = e.return, ve = a;
        break;
      }
      ve = e.return;
    }
  }
  function Bg(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Vn(t, n), a & 4 && cs(5, n);
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
            var o = ra(
              n.type,
              e.memoizedProps
            );
            e = e.memoizedState;
            try {
              t.componentDidUpdate(
                o,
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
        a & 64 && wg(n), a & 512 && On(n, n.return);
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
            mp(t, e);
          } catch (h) {
            qt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Og(n);
      case 26:
      case 5:
        Vn(t, n), e === null && a & 4 && Kc(n), a & 512 && On(n, n.return);
        break;
      case 12:
        Vn(t, n);
        break;
      case 31:
        Vn(t, n), a & 4 && kg(t, n);
        break;
      case 13:
        Vn(t, n), a & 4 && Yg(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = mx.bind(
          null,
          n
        ), Fx(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ye, !a) {
          var u = e !== null && e.memoizedState !== null || kt;
          e = ye, o = kt, ye = a, (kt = u) && !o ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), gn(
            t,
            n,
            a
          )) : Vn(t, n), ye = e, kt = o;
        }
        break;
      case 30:
        Vn(t, n), a & 512 && On(n, n.return);
        break;
      case 7:
        a & 512 && On(n, n.return);
      default:
        Vn(t, n);
    }
  }
  function lf(t, e) {
    for (t = t.child; t !== null; )
      Ug(t, e), t = t.sibling;
  }
  function Ug(t, e) {
    switch (t.tag) {
      case 5:
      case 26:
        try {
          var n = t.stateNode;
          if (e) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var o = t.stateNode, u = t.memoizedProps.style, h = u != null && u.hasOwnProperty("display") ? u.display : null;
            o.style.display = h == null || typeof h == "boolean" ? "" : ("" + h).trim();
          }
        } catch (x) {
          qt(t, t.return, x);
        }
        sf(t, e);
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
          e ? zy(b, !0) : zy(t.stateNode, !1);
        } catch (x) {
          qt(t, t.return, x);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && lf(t, e);
        break;
      default:
        lf(t, e);
    }
  }
  function sf(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Ug(n, a);
              break t;
            case 22:
              n.memoizedState === null && sf(n, a);
              break t;
            default:
              sf(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function Hg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Hg(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ro(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var It = null, He = !1;
  function mn(t, e, n) {
    for (n = n.child; n !== null; )
      Gg(t, e, n), n = n.sibling;
  }
  function Gg(t, e, n) {
    if (Ye && typeof Ye.onCommitFiberUnmount == "function")
      try {
        Ye.onCommitFiberUnmount(jl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        kt || Ee(n, e), mn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !kt && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        kt || Ee(n, e), fs(n);
        var a = It, o = He;
        zi(n.type) && (It = n.stateNode, He = !1), mn(
          t,
          e,
          n
        ), Xy(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), It = a, He = o;
        break;
      case 5:
        kt || Ee(n, e), fs(n);
      case 6:
        if (n.tag === 6 && fs(n), a = It, o = He, It = null, mn(
          t,
          e,
          n
        ), It = a, He = o, It !== null)
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
        It !== null && (He ? (t = It, Oy(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), gl(t)) : Oy(It, n.stateNode));
        break;
      case 4:
        a = It, o = He, It = n.stateNode.containerInfo, He = !0, mn(
          t,
          e,
          n
        ), It = a, He = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Ei(2, n, e), kt || Ei(4, n, e), mn(
          t,
          e,
          n
        );
        break;
      case 1:
        kt || (Ee(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Cg(
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
        kt = (a = kt) || n.memoizedState !== null, mn(
          t,
          e,
          n
        ), kt = a;
        break;
      case 30:
        Ee(n, e), mn(
          t,
          e,
          n
        );
        break;
      case 7:
        kt || Ee(n, e), mn(
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
  function kg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        gl(t);
      } catch (n) {
        qt(e, e.return, n);
      }
    }
  }
  function Yg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        gl(t);
      } catch (n) {
        qt(e, e.return, n);
      }
  }
  function ix(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Lg()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Lg()), e;
      default:
        throw Error(r(435, t.tag));
    }
  }
  function lr(t, e) {
    var n = ix(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var o = px.bind(null, t, a);
        a.then(o, o);
      }
    });
  }
  function _e(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var o = 0; o < a.length; o++) {
        var u = a[o], h = t, b = e, x = b;
        t: for (; x !== null; ) {
          switch (x.tag) {
            case 27:
              if (zi(x.type)) {
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
        if (It === null) throw Error(r(160));
        Gg(h, b, u), It = null, He = !1, h = u.alternate, h !== null && (h.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        qg(e, t, n), e = e.sibling;
  }
  var pn = null;
  function qg(t, e, n) {
    var a = t.alternate, o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (o & 4 && (a = t.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var u = 0; u < a.length; u++) {
            var h = a[u];
            h.ref.impl = h.nextImpl;
          }
        _e(e, t, n), Ve(t), o & 4 && (Ei(3, t, t.return), cs(3, t), Ei(5, t, t.return));
        break;
      case 1:
        _e(e, t, n), Ve(t), o & 512 && (kt || a === null || Ee(a, a.return)), o & 64 && ye && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (u = pn, _e(e, t, n), Ve(t), o & 512 && (kt || a === null || Ee(a, a.return)), o & 4)
          if (o = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (ye)
                  t.stateNode = Cy(
                    t.type,
                    t.memoizedProps,
                    e.containerInfo,
                    t
                  );
                else {
                  t: {
                    e = t.type, n = t.memoizedProps, o = u.ownerDocument || u;
                    e: switch (e) {
                      case "title":
                        a = o.getElementsByTagName("title")[0], (!a || a[Ul] || a[be] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = o.createElement(e), o.head.insertBefore(
                          a,
                          o.querySelector("head > title")
                        )), Ae(a, e, n), a[be] = t, pe(a), e = a;
                        break t;
                      case "link":
                        if (u = Jy(
                          "link",
                          "href",
                          o
                        ).get(e + (n.href || ""))) {
                          for (h = 0; h < u.length; h++)
                            if (a = u[h], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(h, 1);
                              break e;
                            }
                        }
                        a = o.createElement(e), Ae(a, e, n), o.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = Jy(
                          "meta",
                          "content",
                          o
                        ).get(e + (n.content || ""))) {
                          for (h = 0; h < u.length; h++)
                            if (a = u[h], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(h, 1);
                              break e;
                            }
                        }
                        a = o.createElement(e), Ae(a, e, n), o.head.appendChild(a);
                        break;
                      default:
                        throw Error(r(468, e));
                    }
                    a[be] = t, pe(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                ye || Xf(u, t.type, t.stateNode);
            else
              t.stateNode = Fy(
                u,
                n,
                t.memoizedProps
              );
          else
            o !== n ? (o === null ? (e = a.stateNode, e === null || kt || e.parentNode.removeChild(e)) : o.count--, n === null ? ye || Xf(u, t.type, t.stateNode) : Fy(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && Pc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        _e(e, t, n), Ve(t), o & 512 && (kt || a === null || Ee(a, a.return)), a !== null && o & 4 && Pc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Nn, Nn = !1, _e(e, t, n), Nn = u, Ve(t), o & 512 && (kt || a === null || Ee(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            _a(e, ""), Lt = !0;
          } catch (G) {
            qt(t, t.return, G);
          }
        }
        o & 4 && t.stateNode != null && (e = t.memoizedProps, Pc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), o & 1024 && (nf = !0);
        break;
      case 6:
        if (_e(e, t, n), Ve(t), o & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Lt = !0;
          } catch (G) {
            qt(t, t.return, G);
          }
        }
        break;
      case 3:
        if (Lt = !1, Sr = null, u = pn, pn = Ts(e.containerInfo), _e(e, t, n), pn = u, Ve(t), o & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            gl(e.containerInfo);
          } catch (G) {
            qt(t, t.return, G);
          }
        nf && (nf = !1, Xg(t)), Lt = !1;
        break;
      case 4:
        o = Nn, Nn = ye, a = cm(), u = pn, pn = Ts(
          t.stateNode.containerInfo
        ), _e(e, t, n), Ve(t), pn = u, Lt && ds && (ir = !0), Lt = a, Nn = o;
        break;
      case 12:
        _e(e, t, n), Ve(t);
        break;
      case 31:
        _e(e, t, n), Ve(t), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 13:
        _e(e, t, n), Ve(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (rr = Oe()), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, h = a !== null && a.memoizedState !== null;
        var b = ye, x = kt, j = Nn;
        ye = b || u, Nn = j || u, kt = x || h, _e(e, t, n), kt = x, Nn = j, ye = b, Ve(t), o & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || h || ye || kt || (e = h || kt, n = ye, a = kt, ye = u || ye, kt = e, Ai(t, 2), ye = n, kt = a), !u && Nn || lf(t, u)), o & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, lr(t, n))));
        break;
      case 19:
        _e(e, t, n), Ve(t), o & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 30:
        o & 512 && (kt || a === null || Ee(a, a.return)), o = cm(), u = ds, h = (n & 335544064) === n, b = t.memoizedProps, ds = h && Zn(
          b.default,
          b.update
        ) !== "none", _e(e, t, n), Ve(t), h && a !== null && Lt && (t.flags |= 4), ds = u, Lt = o;
        break;
      case 21:
        break;
      case 7:
        o & 512 && (kt || a === null || Ee(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        _e(e, t, n), Ve(t);
    }
  }
  function Ve(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Dg(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var o = t.return; o !== null; ) {
          if (Zc(o)) {
            var u = o.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (Qc(o)) break;
          o = o.return;
        }
        var h = a;
        if (n == null) throw Error(r(160));
        switch (n.tag) {
          case 27:
            var b = n.stateNode, x = Fc(t);
            $o(
              t,
              x,
              b,
              h
            );
            break;
          case 5:
            var j = n.stateNode;
            n.flags & 32 && (_a(j, ""), n.flags &= -33);
            var G = Fc(t);
            $o(
              t,
              G,
              j,
              h
            );
            break;
          case 3:
          case 4:
            var P = n.stateNode.containerInfo, N = Fc(t);
            Jc(
              t,
              N,
              P,
              h
            );
            break;
          default:
            throw Error(r(161));
        }
      } catch (H) {
        qt(t, t.return, H);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Xg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Xg(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, pl = !0, e.reset(), pl = !1), t = t.sibling;
      }
  }
  function Wa(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Qg(e, t), e = e.sibling;
    else jg(e);
  }
  function Qg(t, e) {
    var n = t.alternate;
    if (n === null) Ic(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (af = _n = !1, Rg(), Wa(e, t), !_n && !ir) {
            if (t = zn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var o = t[a + 1];
                Ny(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + o + ")"
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
            )), af = !0;
          }
          zn = null;
          break;
        case 5:
          Wa(e, t);
          break;
        case 4:
          a = _n, _n = !1, Wa(e, t), _n && (ir = !0), _n = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Ic(t, !1) : Wa(e, t));
          break;
        case 30:
          a = _n, o = Rg(), _n = !1, Wa(e, t), _n && (t.flags |= 4);
          var u = t.memoizedProps, h = t.stateNode;
          e = Qn(u, h), h = Qn(n.memoizedProps, h);
          var b = Zn(u.default, u.update);
          b === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, Ue = 0, e = ef(
            t,
            n,
            e,
            h,
            b,
            u,
            !0
          ), Ue !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (ll(
            t,
            t.memoizedProps.onUpdate
          ), zn = o) : o !== null && (o.push.apply(o, zn), zn = o), _n = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Wa(e, t);
      }
  }
  function Vn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Bg(t, e.alternate, e), e = e.sibling;
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
          var o = n.stateNode;
          typeof o.componentWillUnmount == "function" && Cg(
            n,
            n.return,
            o
          ), Ai(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Xy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          Ee(n, n.return), n.tag !== 5 && n.tag !== 27 || fs(n), Ai(
            n,
            a
          );
          break;
        case 6:
          fs(n);
          break;
        case 26:
          Ee(n, n.return), o = n.stateNode, n.memoizedState !== null || o === null || kt || o.parentNode.removeChild(o), Ai(
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
      var a = e.alternate, o = t, u = e, h = u.flags, b = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          gn(
            o,
            u,
            n
          ), cs(4, u);
          break;
        case 1:
          if (gn(
            o,
            u,
            n
          ), a = u, o = a.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (G) {
              qt(a, a.return, G);
            }
          if (a = u, o = a.updateQueue, o !== null) {
            var x = a.stateNode;
            try {
              var j = o.shared.hiddenCallbacks;
              if (j !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < j.length; o++)
                  hp(j[o], x);
            } catch (G) {
              qt(a, a.return, G);
            }
          }
          b && h & 64 && wg(u), On(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Og(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Mg(u), gn(
            o,
            u,
            n
          ), b && a === null && h & 4 && Kc(u), On(u, u.return);
          break;
        case 6:
          Mg(u);
          break;
        case 26:
          x = u.stateNode, u.memoizedState !== null || x === null || ye || Xf(
            Ts(x.ownerDocument),
            u.type,
            x
          ), gn(
            o,
            u,
            n
          ), b && a === null && h & 4 && Kc(u), On(u, u.return);
          break;
        case 12:
          gn(
            o,
            u,
            n
          );
          break;
        case 31:
          gn(
            o,
            u,
            n
          ), b && h & 4 && kg(o, u);
          break;
        case 13:
          gn(
            o,
            u,
            n
          ), b && h & 4 && Yg(o, u);
          break;
        case 22:
          u.memoizedState === null && gn(
            o,
            u,
            n
          ), On(u, u.return);
          break;
        case 30:
          gn(
            o,
            u,
            n
          ), On(u, u.return);
          break;
        case 7:
          On(u, u.return);
        default:
          gn(
            o,
            u,
            n
          );
      }
      e = e.sibling;
    }
  }
  function of(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Il(n));
  }
  function rf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Il(t));
  }
  function un(t, e, n, a) {
    var o = (n & 335544064) === n;
    if (e.subtreeFlags & (o ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Zg(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else o && Vg(e);
  }
  function Zg(t, e, n, a) {
    var o = (n & 335544064) === n;
    o && e.alternate === null && e.return !== null && e.return.alternate !== null && nr(e);
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
        ), u & 2048 && cs(9, e);
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
        ), o && af && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Il(u)));
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
        h = e.stateNode, b = e.alternate, e.memoizedState !== null ? (o && b !== null && b.memoizedState === null && nr(b), h._visibility & 2 ? un(
          t,
          e,
          n,
          a
        ) : hs(
          t,
          e
        )) : (o && b !== null && b.memoizedState !== null && nr(e), h._visibility & 2 ? un(
          t,
          e,
          n,
          a
        ) : (h._visibility |= 2, $a(
          t,
          e,
          n,
          a,
          (e.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && of(b, e);
        break;
      case 24:
        un(
          t,
          e,
          n,
          a
        ), u & 2048 && rf(e.alternate, e);
        break;
      case 30:
        o && (u = e.alternate, u !== null && (Rn(u.child, !0), Rn(e.child, !0))), un(
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
  function $a(t, e, n, a, o) {
    for (o = o && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child; e !== null; ) {
      var u = t, h = e, b = n, x = a, j = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          $a(
            u,
            h,
            b,
            x,
            o
          ), cs(8, h);
          break;
        case 23:
          break;
        case 22:
          var G = h.stateNode;
          h.memoizedState !== null ? G._visibility & 2 ? $a(
            u,
            h,
            b,
            x,
            o
          ) : hs(
            u,
            h
          ) : (G._visibility |= 2, $a(
            u,
            h,
            b,
            x,
            o
          )), o && j & 2048 && of(
            h.alternate,
            h
          );
          break;
        case 24:
          $a(
            u,
            h,
            b,
            x,
            o
          ), o && j & 2048 && rf(h.alternate, h);
          break;
        default:
          $a(
            u,
            h,
            b,
            x,
            o
          );
      }
      e = e.sibling;
    }
  }
  function hs(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, o = a.flags;
        switch (a.tag) {
          case 22:
            hs(n, a), o & 2048 && of(
              a.alternate,
              a
            );
            break;
          case 24:
            hs(n, a), o & 2048 && rf(a.alternate, a);
            break;
          default:
            hs(n, a);
        }
        e = e.sibling;
      }
  }
  var ua = 8192;
  function ca(t, e, n) {
    if (t.subtreeFlags & ua)
      for (t = t.child; t !== null; )
        Kg(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Kg(t, e, n) {
    switch (t.tag) {
      case 26:
        ca(
          t,
          e,
          n
        ), t.flags & ua && (t.memoizedState !== null ? uE(
          n,
          pn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && t0(n, t)));
        break;
      case 5:
        ca(
          t,
          e,
          n
        ), t.flags & ua && (t = t.stateNode, (e & 335544128) === e && t0(n, t));
        break;
      case 3:
      case 4:
        var a = pn;
        pn = Ts(t.stateNode.containerInfo), ca(
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
          var o = t.stateNode;
          o.paired = null, Ke === null && (Ke = /* @__PURE__ */ new Map()), Ke.set(a, o);
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
  function Pg(t) {
    var e = t.alternate;
    if (e !== null && (t = e.child, t !== null)) {
      e.child = null;
      do
        e = t.sibling, t.sibling = null, t = e;
      while (t !== null);
    }
  }
  function ms(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ve = a, Jg(
            a,
            t
          );
        }
      Pg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Fg(t), t = t.sibling;
  }
  function Fg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ms(t), t.flags & 2048 && Ei(9, t, t.return);
        break;
      case 3:
        ms(t);
        break;
      case 12:
        ms(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, sr(t)) : ms(t);
        break;
      default:
        ms(t);
    }
  }
  function sr(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ve = a, Jg(
            a,
            t
          );
        }
      Pg(t);
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
  function Jg(t, e) {
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
          Il(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ve = a;
      else
        t: for (n = t; ve !== null; ) {
          a = ve;
          var o = a.sibling, u = a.return;
          if (Hg(a), a === n) {
            ve = null;
            break t;
          }
          if (o !== null) {
            o.return = u, ve = o;
            break t;
          }
          ve = u;
        }
    }
  }
  var ax = {
    getCacheForType: function(t) {
      var e = Se(se), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return Se(se).controller.signal;
    }
  }, lx = typeof WeakMap == "function" ? WeakMap : Map, Ht = 0, Pt = null, zt = null, Nt = 0, Yt = 0, Pe = null, wi = !1, tl = !1, uf = !1, ei = 0, ie = 0, Ci = 0, fa = 0, or = 0, Fe = 0, el = 0, ps = null, Ge = null, cf = !1, rr = 0, Ig = 0, ur = 1 / 0, cr = null, Mi = null, Wt = 0, yn = null, da = null, jn = 0, ff = 0, df = null, Wg = null, nl = null, il = null, al = null, gs = 0, fr = null;
  function Je() {
    return (Ht & 2) !== 0 && Nt !== 0 ? Nt & -Nt : st.T !== null ? xf() : em();
  }
  function $g() {
    if (Fe === 0)
      if ((Nt & 536870912) === 0 || Dt) {
        var t = ao;
        ao <<= 1, (ao & 3932160) === 0 && (ao = 262144), Fe = t;
      } else Fe = 536870912;
    return t = Te.current, t !== null && (t.flags |= 32), Fe;
  }
  function ll(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = _y(
        Qn(t.memoizedProps, n)
      )), il === null && (il = []), il.push(e.bind(null, a));
    }
  }
  function ke(t, e, n) {
    (t === Pt && (Yt === 2 || Yt === 9) || t.cancelPendingCommit !== null) && (sl(t, 0), Di(
      t,
      Nt,
      Fe,
      !1
    )), Bl(t, n), ((Ht & 2) === 0 || t !== Pt) && (t === Pt && ((Ht & 2) === 0 && (fa |= n), ie === 4 && Di(
      t,
      Nt,
      Fe,
      !1
    )), Ln(t));
  }
  function ty(t, e, n) {
    if ((Ht & 6) !== 0) throw Error(r(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ll(t, e), o = a ? rx(t, e) : mf(t, e, !0), u = a;
    do {
      if (o === 0) {
        tl && !a && Di(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !sx(n)) {
          o = mf(t, e, !1), u = !1;
          continue;
        }
        if (o === 2) {
          if (u = e, t.errorRecoveryDisabledLanes & u)
            var h = 0;
          else
            h = t.pendingLanes & -536870913, h = h !== 0 ? h : h & 536870912 ? 536870912 : 0;
          if (h !== 0) {
            e = h;
            t: {
              var b = t;
              o = ps;
              var x = b.current.memoizedState.isDehydrated;
              if (x && (sl(b, h).flags |= 256), h = mf(
                b,
                h,
                !1
              ), h !== 2 && h !== 6) {
                if (uf && !x) {
                  b.errorRecoveryDisabledLanes |= u, fa |= u, o = 4;
                  break t;
                }
                u = Ge, Ge = o, u !== null && (Ge === null ? Ge = u : Ge.push.apply(
                  Ge,
                  u
                ));
              }
              o = h;
            }
            if (u = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          sl(t, 0), Di(t, e, 0, !0);
          break;
        }
        t: {
          switch (a = t, u = o, u) {
            case 0:
            case 1:
              throw Error(r(345));
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
              Ge = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((e & 62914560) === e && (o = rr + 300 - Oe(), 10 < o)) {
            if (Di(
              a,
              e,
              Fe,
              !wi
            ), so(a, 0, !0) !== 0) break t;
            jn = e, a.timeoutHandle = _f(
              ey.bind(
                null,
                a,
                n,
                Ge,
                cr,
                cf,
                e,
                Fe,
                fa,
                el,
                wi,
                u,
                "Throttled",
                -0,
                0
              ),
              o
            );
            break t;
          }
          ey(
            a,
            n,
            Ge,
            cr,
            cf,
            e,
            Fe,
            fa,
            el,
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
  function ey(t, e, n, a, o, u, h, b, x, j, G, P, N, H) {
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
    }, Ke = null, Kg(
      e,
      u,
      P
    ), pt && (rt = P, pt = t.containerInfo, pt = (pt.nodeType === 9 ? pt : pt.ownerDocument).__reactViewTransition, pt != null && (rt.count++, rt.waitingForViewTransition = !0, rt = As.bind(rt), pt.finished.then(rt, rt))), rt = (u & 62914560) === u ? rr - Oe() : (u & 4194048) === u ? Ig - Oe() : 0, rt = cE(
      P,
      rt
    ), rt !== null)) {
      jn = u, t.cancelPendingCommit = rt(
        uy.bind(
          null,
          t,
          e,
          u,
          n,
          a,
          o,
          h,
          b,
          x,
          j,
          G,
          P,
          null,
          N,
          H
        )
      ), Di(t, u, h, !j);
      return;
    }
    uy(
      t,
      e,
      u,
      n,
      a,
      o,
      h,
      b,
      x,
      j,
      G,
      P
    );
  }
  function sx(t) {
    for (var e = t; ; ) {
      var n = e.tag;
      if ((n === 0 || n === 11 || n === 15) && e.flags & 16384 && (n = e.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var o = n[a], u = o.getSnapshot;
          o = o.value;
          try {
            if (!Qe(u(), o)) return !1;
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
    e = Jh(t, e), e &= ~or, e &= ~fa, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var o = e; 0 < o; ) {
      var u = 31 - qe(o), h = 1 << u;
      a[u] = -1, o &= ~h;
    }
    n !== 0 && Wh(t, n, e);
  }
  function dr() {
    return (Ht & 6) === 0 ? (ys(0), !1) : !0;
  }
  function hf() {
    if (zt !== null) {
      if (Yt === 0)
        var t = zt.return;
      else
        t = zt, Fn = $i = null, Sc(t), Za = null, ts = 0, t = zt;
      for (; t !== null; )
        Ag(t.alternate, t), t = t.return;
      zt = null;
    }
  }
  function sl(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, zx(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), jn = 0, hf(), Pt = t, zt = n = Kn(t.current, null), Nt = e, Yt = 0, Pe = null, wi = !1, tl = Ll(t, e), uf = !1, el = Fe = or = fa = Ci = ie = 0, Ge = ps = null, cf = !1, ei = Jh(t, e), So(), n;
  }
  function ny(t, e) {
    wt = null, st.H = Qo, e === Qa || e === Ro ? (e = up(), Yt = 3) : e === oc ? (e = up(), Yt = 4) : Yt = e === jc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Pe = e, zt === null && (ie = 1, Zo(
      t,
      ln(e, t.current)
    ));
  }
  function iy() {
    var t = Te.current;
    return t === null ? !0 : (Nt & 4194048) === Nt ? ze === null : (Nt & 62914560) === Nt || (Nt & 536870912) !== 0 ? t === ze : !1;
  }
  function ay() {
    var t = st.H;
    return st.H = Qo, t === null ? Qo : t;
  }
  function ly() {
    var t = st.A;
    return st.A = ax, t;
  }
  function hr() {
    ie = 4, wi || (Nt & 4194048) !== Nt && Te.current !== null || (tl = !0), (Ci & 134217727) === 0 && (fa & 134217727) === 0 || Pt === null || Di(
      Pt,
      Nt,
      Fe,
      !1
    );
  }
  function mf(t, e, n) {
    var a = Ht;
    Ht |= 2;
    var o = ay(), u = ly();
    (Pt !== t || Nt !== e) && (cr = null, sl(t, e)), e = !1;
    var h = ie;
    t: do
      try {
        if (Yt !== 0 && zt !== null) {
          var b = zt, x = Pe;
          switch (Yt) {
            case 8:
              hf(), h = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Te.current === null && (e = !0);
              var j = Yt;
              if (Yt = 0, Pe = null, ol(t, b, x, j), n && tl) {
                h = 0;
                break t;
              }
              break;
            default:
              j = Yt, Yt = 0, Pe = null, ol(t, b, x, j);
          }
        }
        ox(), h = ie;
        break;
      } catch (G) {
        ny(t, G);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Fn = $i = null, Ht = a, st.H = o, st.A = u, zt === null && (Pt = null, Nt = 0, So()), h;
  }
  function ox() {
    for (; zt !== null; ) sy(zt);
  }
  function rx(t, e) {
    var n = Ht;
    Ht |= 2;
    var a = ay(), o = ly();
    Pt !== t || Nt !== e ? (cr = null, ur = Oe() + 500, sl(t, e)) : tl = Ll(
      t,
      e
    );
    t: do
      try {
        if (Yt !== 0 && zt !== null) {
          e = zt;
          var u = Pe;
          e: switch (Yt) {
            case 1:
              Yt = 0, Pe = null, ol(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (op(u)) {
                Yt = 0, Pe = null, oy(e);
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
              op(u) ? (Yt = 0, Pe = null, oy(e)) : (Yt = 0, Pe = null, ol(t, e, u, 7));
              break;
            case 5:
              var h = null;
              switch (zt.tag) {
                case 26:
                  h = zt.memoizedState;
                case 5:
                case 27:
                  var b = zt;
                  if (h ? Wy(h) : b.stateNode.complete) {
                    Yt = 0, Pe = null;
                    var x = b.sibling;
                    if (x !== null) zt = x;
                    else {
                      var j = b.return;
                      j !== null ? (zt = j, mr(j)) : zt = null;
                    }
                    break e;
                  }
              }
              Yt = 0, Pe = null, ol(t, e, u, 5);
              break;
            case 6:
              Yt = 0, Pe = null, ol(t, e, u, 6);
              break;
            case 8:
              hf(), ie = 6;
              break t;
            default:
              throw Error(r(462));
          }
        }
        ux();
        break;
      } catch (G) {
        ny(t, G);
      }
    while (!0);
    return Fn = $i = null, st.H = a, st.A = o, Ht = n, zt !== null ? 0 : (Pt = null, Nt = 0, So(), ie);
  }
  function ux() {
    for (; zt !== null && !vu(); )
      sy(zt);
  }
  function sy(t) {
    var e = xg(t.alternate, t, ei);
    t.memoizedProps = t.pendingProps, e === null ? mr(t) : zt = e;
  }
  function oy(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = pg(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Nt
        );
        break;
      case 11:
        e = pg(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Nt
        );
        break;
      case 5:
        Sc(e);
        var a = e;
        a === ge && (Dt ? (Co(a), a.tag === 5 && a.stateNode != null && (Ft = a.stateNode)) : (Co(a), Dt = !0));
      default:
        Ag(n, e), e = zt = Jm(e, ei), e = xg(n, e, ei);
    }
    t.memoizedProps = t.pendingProps, e === null ? mr(t) : zt = e;
  }
  function ol(t, e, n, a) {
    Fn = $i = null, Sc(e), Za = null, ts = 0;
    var o = e.return;
    try {
      if (JT(
        t,
        o,
        e,
        n,
        Nt
      )) {
        ie = 1, Zo(
          t,
          ln(n, t.current)
        ), zt = null;
        return;
      }
    } catch (u) {
      if (o !== null) throw zt = o, u;
      ie = 1, Zo(
        t,
        ln(n, t.current)
      ), zt = null;
      return;
    }
    e.flags & 32768 ? (Dt || a === 1 ? t = !0 : tl || (Nt & 536870912) !== 0 ? t = !1 : (wi = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Te.current, a !== null && a.tag === 13 && (a.flags |= 16384))), ry(e, t)) : mr(e);
  }
  function mr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        ry(
          e,
          wi
        );
        return;
      }
      t = e.return;
      var n = tx(
        e.alternate,
        e,
        ei
      );
      if (n !== null) {
        zt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        zt = e;
        return;
      }
      zt = e = t;
    } while (e !== null);
    ie === 0 && (ie = 5);
  }
  function ry(t, e) {
    do {
      var n = ex(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, zt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        zt = t;
        return;
      }
      zt = t = n;
    } while (t !== null);
    ie = 6, zt = null;
  }
  function uy(t, e, n, a, o, u, h, b, x, j, G, P) {
    t.cancelPendingCommit = null;
    do
      pr();
    while (Wt !== 0);
    if ((Ht & 6) !== 0) throw Error(r(327));
    if (e !== null) {
      if (e === t.current) throw Error(r(177));
      t === Pt && (zt = Pt = null, Nt = 0), da = e, yn = t, jn = n, df = o, Wg = a, cx(
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
  function cx(t, e, n, a, o, u, h) {
    var b = e.lanes | e.childLanes;
    if (ff = b, b |= Pu, LS(
      t,
      n,
      b,
      a,
      o,
      u
    ), il = null, (n & 335544064) === n ? (al = UT(t), a = 10262) : (al = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, gx(Xi, function() {
      return vf(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), tr = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = st.T, st.T = null, o = $.p, $.p = 2, u = Ht, Ht |= 4;
      try {
        nx(t, e, n);
      } finally {
        Ht = u, $.p = o, st.T = a;
      }
    }
    Wt = 1, tr ? nl = Lx(
      h,
      t.containerInfo,
      al,
      pf,
      gf,
      dx,
      yf,
      vf,
      fx
    ) : (pf(), gf(), yf());
  }
  function fx(t) {
    if (Wt !== 0) {
      var e = yn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function dx() {
    Wt === 3 && (Wt = 0, Qg(da, yn), Wt = 4);
  }
  function pf() {
    if (Wt === 1) {
      Wt = 0;
      var t = yn, e = da, n = jn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = st.T, st.T = null;
        var o = $.p;
        $.p = 2;
        var u = Ht;
        Ht |= 4;
        try {
          ds = ir = !1, qg(e, t, n), n = zf;
          var h = Gm(t.containerInfo), b = n.focusedElem, x = n.selectionRange;
          if (h !== b && b && b.ownerDocument && Hm(
            b.ownerDocument.documentElement,
            b
          )) {
            if (x !== null && qu(b)) {
              var j = x.start, G = x.end;
              if (G === void 0 && (G = j), "selectionStart" in b)
                b.selectionStart = j, b.selectionEnd = Math.min(
                  G,
                  b.value.length
                );
              else {
                var P = b.ownerDocument || document, N = P && P.defaultView || window;
                if (N.getSelection) {
                  var H = N.getSelection(), rt = b.textContent.length, pt = Math.min(x.start, rt), Ct = x.end === void 0 ? pt : Math.min(x.end, rt);
                  !H.extend && pt > Ct && (h = Ct, Ct = pt, pt = h);
                  var V = Um(
                    b,
                    pt
                  ), M = Um(
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
              var K = P[b];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          pl = !!Of, zf = Of = null;
        } finally {
          Ht = u, $.p = o, st.T = a;
        }
      }
      t.current = e, Wt = 2;
    }
  }
  function gf() {
    if (Wt === 2) {
      Wt = 0;
      var t = yn, e = da, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = st.T, st.T = null;
        var a = $.p;
        $.p = 2;
        var o = Ht;
        Ht |= 4;
        try {
          Bg(t, e.alternate, e);
        } finally {
          Ht = o, $.p = a, st.T = n;
        }
      }
      Wt = 3;
    }
  }
  function yf() {
    if (Wt === 4 || Wt === 3) {
      Wt = 0;
      var t = nl;
      nl = null, bu();
      var e = yn, n = da, a = jn, o = Wg, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Wt = 5 : (Wt = 0, da = yn = null, cy(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (Mi = null), wu(a), n = n.stateNode, Ye && typeof Ye.onCommitFiberRoot == "function")
        try {
          Ye.onCommitFiberRoot(
            jl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (o !== null) {
        n = st.T, u = $.p, $.p = 2, st.T = null;
        try {
          for (var h = e.onRecoverableError, b = 0; b < o.length; b++) {
            var x = o[b];
            h(x.value, {
              componentStack: x.stack
            });
          }
        } finally {
          st.T = n, $.p = u;
        }
      }
      if (o = il, h = al, al = null, o !== null && (il = null, h === null && (h = []), t !== null))
        for (x = 0; x < o.length; x++)
          n = (0, o[x])(
            h
          ), n !== void 0 && t.finished.finally(n);
      (jn & 3) !== 0 && pr(), Ln(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === fr ? gs++ : (gs = 0, fr = e) : (gs = 0, fr = null), ys(0);
    }
  }
  function cy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Il(e)));
  }
  function pr() {
    return nl !== null && (nl.skipTransition(), nl = null), pf(), gf(), yf(), vf();
  }
  function vf() {
    if (Wt !== 5) return !1;
    var t = yn, e = ff;
    ff = 0;
    var n = wu(jn), a = st.T, o = $.p;
    try {
      $.p = 32 > n ? 32 : n, st.T = null, n = df, df = null;
      var u = yn, h = jn;
      if (Wt = 0, da = yn = null, jn = 0, (Ht & 6) !== 0) throw Error(r(331));
      var b = Ht;
      if (Ht |= 4, Fg(u.current), Zg(
        u,
        u.current,
        h,
        n
      ), Ht = b, ys(0, !1), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        try {
          Ye.onPostCommitFiberRoot(jl, u);
        } catch {
        }
      return !0;
    } finally {
      $.p = o, st.T = a, cy(t, e);
    }
  }
  function fy(t, e, n) {
    e = ln(n, e), e = Vc(t.stateNode, e, 2), t = bi(t, e, 2), t !== null && (Bl(t, 2), Ln(t));
  }
  function qt(t, e, n) {
    if (t.tag === 3)
      fy(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          fy(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Mi === null || !Mi.has(a))) {
            t = ln(n, t), n = og(2), a = bi(e, n, 2), a !== null && (rg(
              n,
              a,
              e,
              t
            ), Bl(a, 2), Ln(a));
            break;
          }
        }
        e = e.return;
      }
  }
  function bf(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new lx();
      var o = /* @__PURE__ */ new Set();
      a.set(e, o);
    } else
      o = a.get(e), o === void 0 && (o = /* @__PURE__ */ new Set(), a.set(e, o));
    o.has(n) || (uf = !0, o.add(n), t = hx.bind(null, t, e, n), e.then(t, t));
  }
  function hx(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Pt === t && (Nt & n) === n && ((ie === 4 || ie === 3 && (Nt & 62914560) === Nt && 300 > Oe() - rr) && (Ht & 2) === 0 ? sl(t, 0) : or |= n, el === Nt && (el = 0)), Ln(t);
  }
  function dy(t, e) {
    e === 0 && (e = Ih()), t = Ji(t, e), t !== null && (Bl(t, e), Ln(t));
  }
  function mx(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), dy(t, n);
  }
  function px(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var a = t.stateNode, o = t.memoizedState;
        o !== null && (n = o.retryLane);
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
    a !== null && a.delete(e), dy(t, n);
  }
  function gx(t, e) {
    return zl(t, e);
  }
  var rl = null, ul = null, Sf = !1, gr = !1, Tf = !1, Oi = 0;
  function Ln(t) {
    t !== ul && t.next === null && (ul === null ? rl = ul = t : ul = ul.next = t), gr = !0, Sf || (Sf = !0, vx());
  }
  function ys(t, e) {
    if (!Tf && gr) {
      Tf = !0;
      do
        for (var n = !1, a = rl; a !== null; ) {
          if (t !== 0) {
            var o = a.pendingLanes;
            if (o === 0) var u = 0;
            else {
              var h = a.suspendedLanes, b = a.pingedLanes;
              u = (1 << 31 - qe(42 | t) + 1) - 1, u &= o & ~(h & ~b), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, gy(a, u));
          } else
            u = Nt, u = so(
              a,
              a === Pt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ll(a, u) || (n = !0, gy(a, u));
          a = a.next;
        }
      while (n);
      Tf = !1;
    }
  }
  function yx() {
    hy();
  }
  function hy() {
    gr = Sf = !1;
    var t = 0;
    Oi !== 0 && Ox() && (t = Oi);
    for (var e = Oe(), n = null, a = rl; a !== null; ) {
      var o = a.next, u = my(a, e);
      u === 0 ? (a.next = null, n === null ? rl = o : n.next = o, o === null && (ul = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (gr = !0)), a = o;
    }
    Wt !== 0 && Wt !== 5 || ys(t), Oi !== 0 && (Oi = 0);
  }
  function my(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, o = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var h = 31 - qe(u), b = 1 << h, x = o[h];
      x === -1 ? ((b & n) === 0 || (b & a) !== 0) && (o[h] = jS(b, e)) : x <= e && (t.expiredLanes |= b), u &= ~b;
    }
    if (e = Pt, n = Nt, n = so(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Yt === 2 || Yt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Rl(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Ll(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Rl(a), wu(n)) {
        case 2:
        case 8:
          n = _l;
          break;
        case 32:
          n = Xi;
          break;
        case 268435456:
          n = Vl;
          break;
        default:
          n = Xi;
      }
      return a = py.bind(null, t), n = zl(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Rl(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function py(t, e) {
    if (Wt !== 0 && Wt !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (pr() && t.callbackNode !== n)
      return null;
    var a = Nt;
    return a = so(
      t,
      t === Pt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (ty(t, a, e), my(t, Oe()), t.callbackNode != null && t.callbackNode === n ? py.bind(null, t) : null);
  }
  function gy(t, e) {
    if (pr()) return null;
    ty(t, e, !0);
  }
  function vx() {
    Rx(function() {
      (Ht & 6) !== 0 ? zl(
        Nl,
        yx
      ) : hy();
    });
  }
  function xf() {
    if (Oi === 0) {
      var t = na;
      t === 0 && (t = io, io <<= 1, (io & 261888) === 0 && (io = 256)), Oi = t;
    }
    return Oi;
  }
  function yy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : fo(t);
  }
  function bx(t, e, n, a, o) {
    if (e === "submit" && n && n.stateNode === o) {
      var u = yy(
        (o[Le] || null).action
      ), h = a.submitter;
      h && (e = (e = h[Le] || null) ? yy(e.formAction) : h.getAttribute("formAction"), e !== null && (u = e, h = null));
      var b = new go(
        "action",
        "action",
        null,
        a,
        o
      );
      t.push({
        event: b,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Oi !== 0) {
                  var x = new FormData(o, h);
                  Oc(
                    n,
                    {
                      pending: !0,
                      data: x,
                      method: o.method,
                      action: u
                    },
                    null,
                    x
                  );
                }
              } else
                typeof u == "function" && (b.preventDefault(), x = new FormData(o, h), Oc(
                  n,
                  {
                    pending: !0,
                    data: x,
                    method: o.method,
                    action: u
                  },
                  u,
                  x
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Ef = 0; Ef < Ku.length; Ef++) {
    var Af = Ku[Ef], Sx = Af.toLowerCase(), Tx = Af[0].toUpperCase() + Af.slice(1);
    hn(
      Sx,
      "on" + Tx
    );
  }
  hn(qm, "onAnimationEnd"), hn(Xm, "onAnimationIteration"), hn(Qm, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(zT, "onTransitionRun"), hn(RT, "onTransitionStart"), hn(NT, "onTransitionCancel"), hn(Zm, "onTransitionEnd"), Ra("onMouseEnter", ["mouseout", "mouseover"]), Ra("onMouseLeave", ["mouseout", "mouseover"]), Ra("onPointerEnter", ["pointerout", "pointerover"]), Ra("onPointerLeave", ["pointerout", "pointerover"]), Ki(
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
  var vs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), xx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vs)
  );
  function vy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], o = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var h = a.length - 1; 0 <= h; h--) {
            var b = a[h], x = b.instance, j = b.currentTarget;
            if (b = b.listener, x !== u && o.isPropagationStopped())
              break t;
            u = b, o.currentTarget = j;
            try {
              u(o);
            } catch (G) {
              bo(G);
            }
            o.currentTarget = null, u = x;
          }
        else
          for (h = 0; h < a.length; h++) {
            if (b = a[h], x = b.instance, j = b.currentTarget, b = b.listener, x !== u && o.isPropagationStopped())
              break t;
            u = b, o.currentTarget = j;
            try {
              u(o);
            } catch (G) {
              bo(G);
            }
            o.currentTarget = null, u = x;
          }
      }
    }
  }
  function Rt(t, e) {
    var n = e[im];
    n === void 0 && (n = e[im] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (by(e, t, 2, !1), n.add(a));
  }
  function wf(t, e, n) {
    var a = 0;
    e && (a |= 4), by(
      n,
      t,
      a,
      e
    );
  }
  var yr = "_reactListening" + Math.random().toString(36).slice(2);
  function Cf(t) {
    if (!t[yr]) {
      t[yr] = !0, sm.forEach(function(n) {
        n !== "selectionchange" && (xx.has(n) || wf(n, !1, t), wf(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[yr] || (e[yr] = !0, wf("selectionchange", !1, e));
    }
  }
  function by(t, e, n, a) {
    switch (r0(e)) {
      case 2:
        var o = mE;
        break;
      case 8:
        o = pE;
        break;
      default:
        o = Zf;
    }
    n = o.bind(
      null,
      e,
      n,
      t
    ), o = void 0, !_u || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (o = !0), a ? o !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: o
    }) : t.addEventListener(e, n, !0) : o !== void 0 ? t.addEventListener(e, n, {
      passive: o
    }) : t.addEventListener(e, n, !1);
  }
  function Mf(t, e, n, a, o) {
    var u = a;
    if ((e & 1) === 0 && (e & 2) === 0 && a !== null)
      t: for (; ; ) {
        if (a === null) return;
        var h = a.tag;
        if (h === 3 || h === 4) {
          var b = a.stateNode.containerInfo;
          if (b === o) break;
          if (h === 4)
            for (h = a.return; h !== null; ) {
              var x = h.tag;
              if ((x === 3 || x === 4) && h.stateNode.containerInfo === o)
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
    bm(function() {
      var j = u, G = Ru(n), P = [];
      t: {
        var N = Km.get(t);
        if (N !== void 0) {
          var H = go, rt = t;
          switch (t) {
            case "keypress":
              if (mo(n) === 0) break t;
            case "keydown":
            case "keyup":
              H = sT;
              break;
            case "focusin":
              rt = "focus", H = Bu;
              break;
            case "focusout":
              rt = "blur", H = Bu;
              break;
            case "beforeblur":
            case "afterblur":
              H = Bu;
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
              H = xm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = PS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = fT;
              break;
            case qm:
            case Xm:
            case Qm:
              H = IS;
              break;
            case Zm:
              H = hT;
              break;
            case "scroll":
            case "scrollend":
              H = ZS;
              break;
            case "wheel":
              H = pT;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = $S;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Am;
              break;
            case "submit":
              H = uT;
              break;
            case "toggle":
            case "beforetoggle":
              H = yT;
          }
          var pt = (e & 4) !== 0, Ct = !pt && (t === "scroll" || t === "scrollend"), V = pt ? N !== null ? N + "Capture" : null : N;
          pt = [];
          for (var M = j, U; M !== null; ) {
            var K = M;
            if (U = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || U === null || V === null || (K = Gl(M, V), K != null && pt.push(
              bs(M, K, U)
            )), Ct) break;
            M = M.return;
          }
          0 < pt.length && (N = new H(
            N,
            rt,
            null,
            n,
            G
          ), P.push({ event: N, listeners: pt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (H = t === "mouseover" || t === "pointerover", N = t === "mouseout" || t === "pointerout", H && n !== zu && (rt = n.relatedTarget || n.fromElement) && (Zi(rt) || rt[Da]))
            break t;
          (N || H) && (rt = G.window === G ? G : (H = G.ownerDocument) ? H.defaultView || H.parentWindow : window, N ? (H = n.relatedTarget || n.toElement, N = j, H = H ? Zi(H) : null, H !== null && (Ct = d(H), pt = H.tag, H !== Ct || pt !== 5 && pt !== 27 && pt !== 6) && (H = null)) : (N = null, H = j), N !== H && (pt = xm, K = "onMouseLeave", V = "onMouseEnter", M = "mouse", (t === "pointerout" || t === "pointerover") && (pt = Am, K = "onPointerLeave", V = "onPointerEnter", M = "pointer"), Ct = N == null ? rt : Hl(N), U = H == null ? rt : Hl(H), rt = new pt(
            K,
            M + "leave",
            N,
            n,
            G
          ), rt.target = Ct, rt.relatedTarget = U, K = null, Zi(G) === j && (pt = new pt(
            V,
            M + "enter",
            H,
            n,
            G
          ), pt.target = U, pt.relatedTarget = Ct, K = pt), Ct = K, pt = N && H ? Z(
            N,
            H,
            Ex
          ) : null, N !== null && Sy(
            P,
            rt,
            N,
            pt,
            !1
          ), H !== null && Ct !== null && Sy(
            P,
            Ct,
            H,
            pt,
            !0
          )));
        }
        t: {
          if (N = j ? Hl(j) : window, H = N.nodeName && N.nodeName.toLowerCase(), H === "select" || H === "input" && N.type === "file")
            var dt = Nm;
          else if (zm(N))
            if (_m)
              dt = MT;
            else {
              dt = wT;
              var _t = AT;
            }
          else
            H = N.nodeName, !H || H.toLowerCase() !== "input" || N.type !== "checkbox" && N.type !== "radio" ? j && Ou(j.elementType) && (dt = Nm) : dt = CT;
          if (dt && (dt = dt(t, j))) {
            Rm(
              P,
              dt,
              n,
              G
            );
            break t;
          }
          _t && _t(t, N, j);
        }
        switch (_t = j ? Hl(j) : window, t) {
          case "focusin":
            (zm(_t) || _t.contentEditable === "true") && (Ba = _t, Xu = j, Pl = null);
            break;
          case "focusout":
            Pl = Xu = Ba = null;
            break;
          case "mousedown":
            Qu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Qu = !1, km(P, n, G);
            break;
          case "selectionchange":
            if (OT) break;
          case "keydown":
          case "keyup":
            km(P, n, G);
        }
        var bt;
        if (Hu)
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
          La ? Dm(t, n) && (Tt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (Tt = "onCompositionStart");
        Tt && (wm && n.locale !== "ko" && (La || Tt !== "onCompositionStart" ? Tt === "onCompositionEnd" && La && (bt = Sm()) : (ci = G, Vu = "value" in ci ? ci.value : ci.textContent, La = !0)), _t = vr(j, Tt), 0 < _t.length && (Tt = new Em(
          Tt,
          t,
          null,
          n,
          G
        ), P.push({ event: Tt, listeners: _t }), bt ? Tt.data = bt : (bt = Om(n), bt !== null && (Tt.data = bt)))), (bt = bT ? ST(t, n) : TT(t, n)) && (Tt = vr(j, "onBeforeInput"), 0 < Tt.length && (_t = new Em(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          G
        ), P.push({
          event: _t,
          listeners: Tt
        }), _t.data = bt)), bx(
          P,
          t,
          j,
          n,
          G
        );
      }
      vy(P, e);
    });
  }
  function bs(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function vr(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var o = t, u = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || u === null || (o = Gl(t, n), o != null && a.unshift(
        bs(t, o, u)
      ), o = Gl(t, e), o != null && a.push(
        bs(t, o, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Ex(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Sy(t, e, n, a, o) {
    for (var u = e._reactName, h = []; n !== null && n !== a; ) {
      var b = n, x = b.alternate, j = b.stateNode;
      if (b = b.tag, x !== null && x === a) break;
      b !== 5 && b !== 26 && b !== 27 || j === null || (x = j, o ? (j = Gl(n, u), j != null && h.unshift(
        bs(n, j, x)
      )) : o || (j = Gl(n, u), j != null && h.push(
        bs(n, j, x)
      ))), n = n.return;
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var Ax = /\r\n?/g, wx = /\u0000|\uFFFD/g;
  function Ty(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ax, `
`).replace(wx, "");
  }
  function xy(t, e) {
    return e = Ty(e), Ty(t) === e;
  }
  function Xt(t, e, n, a, o, u) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || _a(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && _a(t, "" + a);
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
        ym(t, a, u);
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
          typeof u == "function" && (n === "formAction" ? (e !== "input" && Xt(t, e, "name", o.name, o, null), Xt(
            t,
            e,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Xt(
            t,
            e,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Xt(
            t,
            e,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Xt(t, e, "encType", o.encType, o, null), Xt(t, e, "method", o.method, o, null), Xt(t, e, "target", o.target, o, null)));
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
        a != null && Rt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Rt("scrollend", t);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(r(60));
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
        Rt("beforetoggle", t), Rt("toggle", t), uo(t, "popover", a);
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
          n = XS.get(n) || n, uo(t, n, a);
        else return;
    }
    Lt = !0;
  }
  function Df(t, e, n, a, o, u) {
    switch (n) {
      case "style":
        ym(t, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(r(61));
          if (n = a.__html, n != null) {
            if (o.children != null) throw Error(r(60));
            u?.__html !== n && (t.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") _a(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          _a(t, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Rt("scroll", t);
        return;
      case "onScrollEnd":
        a != null && Rt("scrollend", t);
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
        if (!om.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), u = n.slice(2, o ? n.length - 7 : void 0), e = t[Le] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, o), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, a, o);
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
        Rt("error", t), Rt("load", t);
        var a = !1, o = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var h = n[u];
            if (h != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, e));
                default:
                  Xt(t, e, u, h, n, null);
              }
          }
        o && Xt(t, e, "srcSet", n.srcSet, n, null), a && Xt(t, e, "src", n.src, n, null);
        return;
      case "input":
        Rt("invalid", t);
        var b = u = h = o = null, x = null, j = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var G = n[a];
            if (G != null)
              switch (a) {
                case "name":
                  o = G;
                  break;
                case "type":
                  h = G;
                  break;
                case "checked":
                  x = G;
                  break;
                case "defaultChecked":
                  j = G;
                  break;
                case "value":
                  u = G;
                  break;
                case "defaultValue":
                  b = G;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (G != null)
                    throw Error(r(137, e));
                  break;
                default:
                  Xt(t, e, a, G, n, null);
              }
          }
        hm(
          t,
          u,
          b,
          x,
          j,
          h,
          o,
          !1
        );
        return;
      case "select":
        Rt("invalid", t), a = h = u = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (b = n[o], b != null))
            switch (o) {
              case "value":
                u = b;
                break;
              case "defaultValue":
                h = b;
                break;
              case "multiple":
                a = b;
              default:
                Xt(t, e, o, b, n, null);
            }
        e = u, n = h, t.multiple = !!a, e != null ? Na(t, !!a, e, !1) : n != null && Na(t, !!a, n, !0);
        return;
      case "textarea":
        Rt("invalid", t), u = o = a = null;
        for (h in n)
          if (n.hasOwnProperty(h) && (b = n[h], b != null))
            switch (h) {
              case "value":
                a = b;
                break;
              case "defaultValue":
                o = b;
                break;
              case "children":
                u = b;
                break;
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(r(91));
                break;
              default:
                Xt(t, e, h, b, n, null);
            }
        pm(t, a, o, u);
        return;
      case "option":
        for (x in n)
          n.hasOwnProperty(x) && (a = n[x], a != null) && (x === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Xt(t, e, x, a, n, null));
        return;
      case "dialog":
        Rt("beforetoggle", t), Rt("toggle", t), Rt("cancel", t), Rt("close", t);
        break;
      case "iframe":
      case "object":
        Rt("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < vs.length; a++)
          Rt(vs[a], t);
        break;
      case "image":
        Rt("error", t), Rt("load", t);
        break;
      case "details":
        Rt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Rt("error", t), Rt("load", t);
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
                throw Error(r(137, e));
              default:
                Xt(t, e, j, a, n, null);
            }
        return;
      default:
        if (Ou(e)) {
          for (G in n)
            n.hasOwnProperty(G) && (a = n[G], a !== void 0 && Df(
              t,
              e,
              G,
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
  var Cx = {};
  function Mx(t, e, n, a) {
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
        var o = null, u = null, h = null, b = null, x = null, j = null, G = null;
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
        for (var N in a) {
          var H = a[N];
          if (P = n[N], a.hasOwnProperty(N) && (H != null || P != null))
            switch (N) {
              case "type":
                H !== P && (Lt = !0), u = H;
                break;
              case "name":
                H !== P && (Lt = !0), o = H;
                break;
              case "checked":
                H !== P && (Lt = !0), j = H;
                break;
              case "defaultChecked":
                H !== P && (Lt = !0), G = H;
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
                  throw Error(r(137, e));
                break;
              default:
                H !== P && Xt(
                  t,
                  e,
                  N,
                  H,
                  a,
                  P
                );
            }
        }
        Mu(
          t,
          h,
          b,
          x,
          j,
          G,
          u,
          o
        );
        return;
      case "select":
        H = h = b = N = null;
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
        for (o in a)
          if (u = a[o], x = n[o], a.hasOwnProperty(o) && (u != null || x != null))
            switch (o) {
              case "value":
                u !== x && (Lt = !0), N = u;
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
                  o,
                  u,
                  a,
                  x
                );
            }
        e = b, n = h, a = H, N != null ? Na(t, !!n, N, !1) : !!a != !!n && (e != null ? Na(t, !!n, e, !0) : Na(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        H = N = null;
        for (b in n)
          if (o = n[b], n.hasOwnProperty(b) && o != null && !a.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xt(t, e, b, null, a, o);
            }
        for (h in a)
          if (o = a[h], u = n[h], a.hasOwnProperty(h) && (o != null || u != null))
            switch (h) {
              case "value":
                o !== u && (Lt = !0), N = o;
                break;
              case "defaultValue":
                o !== u && (Lt = !0), H = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(r(91));
                break;
              default:
                o !== u && Xt(t, e, h, o, a, u);
            }
        mm(t, N, H);
        return;
      case "option":
        for (var rt in n)
          N = n[rt], n.hasOwnProperty(rt) && N != null && !a.hasOwnProperty(rt) && (rt === "selected" ? t.selected = !1 : Xt(
            t,
            e,
            rt,
            null,
            a,
            N
          ));
        for (x in a)
          N = a[x], H = n[x], a.hasOwnProperty(x) && N !== H && (N != null || H != null) && (x === "selected" ? (N !== H && (Lt = !0), t.selected = N && typeof N != "function" && typeof N != "symbol") : Xt(
            t,
            e,
            x,
            N,
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
          N = n[pt], n.hasOwnProperty(pt) && N != null && !a.hasOwnProperty(pt) && Xt(t, e, pt, null, a, N);
        for (j in a)
          if (N = a[j], H = n[j], a.hasOwnProperty(j) && N !== H && (N != null || H != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (N != null)
                  throw Error(r(137, e));
                break;
              default:
                Xt(
                  t,
                  e,
                  j,
                  N,
                  a,
                  H
                );
            }
        return;
      default:
        if (Ou(e)) {
          for (var Ct in n)
            N = n[Ct], n.hasOwnProperty(Ct) && N !== void 0 && !a.hasOwnProperty(Ct) && Df(
              t,
              e,
              Ct,
              void 0,
              a,
              N
            );
          for (G in a)
            N = a[G], H = n[G], !a.hasOwnProperty(G) || N === H || N === void 0 && H === void 0 || Df(
              t,
              e,
              G,
              N,
              a,
              H
            );
          return;
        }
    }
    for (var V in n)
      N = n[V], n.hasOwnProperty(V) && N != null && !a.hasOwnProperty(V) && Xt(t, e, V, null, a, N);
    for (P in a)
      N = a[P], H = n[P], !a.hasOwnProperty(P) || N === H || N == null && H == null || Xt(t, e, P, N, a, H);
  }
  function Ey(t) {
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
  function Dx() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var o = n[a], u = o.transferSize, h = o.initiatorType, b = o.duration;
        if (u && b && Ey(h)) {
          for (h = 0, b = o.responseEnd, a += 1; a < n.length; a++) {
            var x = n[a], j = x.startTime;
            if (j > b) break;
            var G = x.transferSize, P = x.initiatorType;
            G && Ey(P) && (x = x.responseEnd, h += G * (x < b ? 1 : (b - j) / (x - j)));
          }
          if (--a, e += 8 * (u + h) / (o.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Of = null, zf = null;
  function Ss(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ay(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function wy(t, e) {
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
  function Cy(t, e, n, a) {
    return n = Ss(
      n
    ).createElement(t), n[be] = a, n[Le] = e, Ae(n, t, e), pe(n), n;
  }
  function Rf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Nf = null;
  function Ox() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Nf ? !1 : (Nf = t, !0) : (Nf = null, !1);
  }
  var _f = typeof setTimeout == "function" ? setTimeout : void 0, zx = typeof clearTimeout == "function" ? clearTimeout : void 0, My = typeof Promise == "function" ? Promise : void 0, Dy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : _f, Rx = typeof queueMicrotask == "function" ? queueMicrotask : typeof My < "u" ? function(t) {
    return My.resolve(null).then(t).catch(Nx);
  } : _f;
  function Nx(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function zi(t) {
    return t === "head";
  }
  function Oy(t, e) {
    var n = e, a = 0;
    do {
      var o = n.nextSibling;
      if (t.removeChild(n), o && o.nodeType === 8)
        if (n = o.data, n === "/$" || n === "/&") {
          if (a === 0) {
            t.removeChild(o), gl(e);
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
            u[Ul] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = h;
          }
        } else
          n === "body" && kf(t.ownerDocument.body);
      n = o;
    } while (n);
    gl(e);
  }
  function zy(t, e) {
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
  function Ry(t, e, n) {
    if (e = CSS.escape(e) !== e ? "r-" + btoa(e).replace(/=/g, "") : e, t.style.viewTransitionName = e, n != null && (t.style.viewTransitionClass = n), n = getComputedStyle(t), n.display === "inline") {
      if (e = t.getClientRects(), e.length === 1) var a = 1;
      else
        for (var o = a = 0; o < e.length; o++) {
          var u = e[o];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 && (t = t.style, t.display = e.length === 1 ? "inline-block" : "block", t.marginTop = "-" + n.paddingTop, t.marginBottom = "-" + n.paddingBottom);
    }
  }
  function Ny(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function _x(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Vf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return _x(e, n, t);
  }
  function Vx(t) {
    return t.documentElement.clientHeight;
  }
  function jx(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Lx(t, e, n, a, o, u, h, b, x) {
    var j = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var G = j.startViewTransition({
        update: function() {
          var N = j.defaultView, H = N.navigation && N.navigation.transition, rt = j.fonts.status;
          a();
          var pt = [];
          if (rt === "loaded" && (Vx(j), j.fonts.status === "loading" && pt.push(j.fonts.ready)), rt = pt.length, t !== null)
            for (var Ct = t.suspenseyImages, V = 0, M = 0; M < Ct.length; M++) {
              var U = Ct[M];
              if (!U.complete) {
                var K = U.getBoundingClientRect();
                if (0 < K.bottom && 0 < K.right && K.top < N.innerHeight && K.left < N.innerWidth) {
                  if (V += $y(U), V > Tr) {
                    pt.length = rt;
                    break;
                  }
                  U = new Promise(
                    jx.bind(U)
                  ), pt.push(U);
                }
              }
            }
          if (0 < pt.length)
            return N = Promise.race([
              Promise.all(pt),
              new Promise(function(dt) {
                return setTimeout(dt, 500);
              })
            ]).then(o, o), (H ? Promise.allSettled([H.finished, N]) : N).then(u, u);
          if (o(), H)
            return H.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      j.__reactViewTransition = G;
      var P = [];
      return G.ready.then(
        function() {
          for (var N = j.documentElement.getAnimations({
            subtree: !0
          }), H = 0; H < N.length; H++) {
            var rt = N[H], pt = rt.effect, Ct = pt.pseudoElement;
            if (Ct != null && Ct.startsWith("::view-transition")) {
              P.push(rt), rt = pt.getKeyframes();
              for (var V = Ct = void 0, M = !0, U = 0; U < rt.length; U++) {
                var K = rt[U], dt = K.width;
                if (Ct === void 0) Ct = dt;
                else if (Ct !== dt) {
                  M = !1;
                  break;
                }
                if (dt = K.height, V === void 0) V = dt;
                else if (V !== dt) {
                  M = !1;
                  break;
                }
                delete K.width, delete K.height, K.transform === "none" && delete K.transform;
              }
              M && Ct !== void 0 && V !== void 0 && (pt.setKeyframes(rt), M = getComputedStyle(
                pt.target,
                pt.pseudoElement
              ), M.width !== Ct || M.height !== V) && (M = rt[0], M.width = Ct, M.height = V, M = rt[rt.length - 1], M.width = Ct, M.height = V, pt.setKeyframes(rt));
            }
          }
          h();
        },
        function(N) {
          j.__reactViewTransition === G && (j.__reactViewTransition = null);
          try {
            typeof N == "object" && N !== null && N.name === "InvalidStateError" && (N.message === "View transition was skipped because document visibility state is hidden." || N.message === "Skipping view transition because document visibility state has become hidden." || N.message === "Skipping view transition because viewport size changed." || N.message === "Transition was aborted because of invalid state") && (N = null), N !== null && x(N);
          } finally {
            a(), o(), h();
          }
        }
      ), G.finished.finally(function() {
        for (var N = 0; N < P.length; N++)
          P[N].cancel();
        j.__reactViewTransition === G && (j.__reactViewTransition = null), b();
      }), G;
    } catch {
      return a(), o(), h(), null;
    }
  }
  function ha(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  ha.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : R({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, ha.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], o = 0; o < n.length; o++) {
      var u = n[o].effect;
      u !== null && u.target === t && u.pseudoElement === e && a.push(n[o]);
    }
    return a;
  }, ha.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function _y(t) {
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
    var a = null, o = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (jy(u, t, e, n) === -1) {
        var h = this, b = e;
        n != null && typeof n != "boolean" && n.once === !0 && (b = function(x) {
          h.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, x) : e.handleEvent(x);
        }), a !== null && (o = h.removeEventListener.bind(
          h,
          t,
          e,
          n
        ), a.addEventListener("abort", o, { once: !0 }), o = a.removeEventListener.bind(a, "abort", o)), a = cl(n), u.push({
          type: t,
          listener: e,
          optionsOrUseCapture: n,
          attachedListener: b,
          cleanup: o
        }), y(
          this._fragmentFiber.child,
          !1,
          Bx,
          t,
          b,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function Bx(t, e, n, a) {
    return E(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  Ie.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = jy(
      a,
      t,
      e,
      n
    ), e !== -1)) {
      var o = a[e];
      n = o.attachedListener;
      var u = o.cleanup;
      o = cl(o.optionsOrUseCapture), y(
        this._fragmentFiber.child,
        !1,
        Ux,
        t,
        n,
        o
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function Ux(t, e, n, a) {
    return E(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function cl(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Vy(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function jy(t, e, n, a) {
    if (t.length === 0) return -1;
    a = Vy(a);
    for (var o = 0; o < t.length; o++) {
      var u = t[o];
      if (u.type === e && u.listener === n && Vy(u.optionsOrUseCapture) === a)
        return o;
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
        for (var o = 0; o < n.length; o++) {
          var u = n[o];
          a.addEventListener(
            u.type,
            u.attachedListener,
            cl(u.optionsOrUseCapture)
          );
        }
      if (e.appendChild(a), t = a.dispatchEvent(t), n)
        for (o = 0; o < n.length; o++)
          u = n[o], a.removeEventListener(
            u.type,
            u.attachedListener,
            cl(u.optionsOrUseCapture)
          );
      return e.removeChild(a), t;
    }
    return e.dispatchEvent(t);
  }, Ie.prototype.focus = function(t) {
    y(
      this._fragmentFiber.child,
      !0,
      Ly,
      t,
      void 0,
      void 0
    );
  };
  function Ly(t, e) {
    return t.tag === 6 ? !1 : (t = E(t), Jx(t, e));
  }
  Ie.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      jf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Ly(e[n], t); n--) ;
  };
  function jf(t, e) {
    return e.push(t), !1;
  }
  Ie.prototype.blur = function() {
    var t = S(
      this._fragmentFiber
    );
    t !== null && (t = E(t), t = Ss(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      Hx,
      t,
      void 0,
      void 0
    ));
  };
  function Hx(t, e) {
    return t.tag === 6 ? !1 : (t = E(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ie.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      Gx,
      t,
      void 0,
      void 0
    );
  };
  function Gx(t, e) {
    return t.tag === 6 || (t = E(t), e.observe(t)), !1;
  }
  Ie.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        kx,
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
  function kx(t, e) {
    return t.tag === 6 || (t = E(t), e.unobserve(t)), !1;
  }
  var vn = [], Lf = !1;
  function Yx(t, e, n) {
    vn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Lf || (Lf = !0, Ix(function() {
      Lf = !1;
      var a = vn;
      vn = [];
      for (var o = 0; o < a.length; o++) {
        var u = a[o];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Ie.prototype.getClientRects = function() {
    var t = [];
    return y(
      this._fragmentFiber.child,
      !1,
      qx,
      t,
      void 0,
      void 0
    ), t;
  };
  function qx(t, e) {
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
      jf,
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
      var o = a = n.compareDocumentPosition(t);
      return n === t ? o = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = T(e)[1], n === null ? o = Node.DOCUMENT_POSITION_PRECEDING : (t = E(n).compareDocumentPosition(
        t
      ), o = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), o |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = E(n[0]), o = E(n[n.length - 1]);
    var u = A(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(o) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = e.compareDocumentPosition(t), b = o.compareDocumentPosition(t), x = h & Node.DOCUMENT_POSITION_CONTAINED_BY || b & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return b = a && u && h & Node.DOCUMENT_POSITION_FOLLOWING && b & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && o === t || x || b ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && o === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xx(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Xx(t, e, n, a, o) {
    var u = Zi(o);
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
        return u = o.ownerDocument, o === u || o === u.documentElement || o === u.body;
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === n) && (e = Z(
      n,
      u,
      X
    ), e === null ? e = !1 : (y(
      e,
      !0,
      k,
      u,
      n
    ), u = z, z = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === a) && (e = Z(
      a,
      u,
      X
    ), e === null ? e = !1 : (y(
      e,
      !0,
      _,
      u,
      a
    ), u = z, B = z = null, e = u !== null)), e) : !1;
  }
  function By(t, e) {
    var n = t.ownerDocument.createRange();
    n.selectNodeContents(t), t = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + t.left,
      e ? window.scrollY + t.top : window.scrollY + t.bottom - window.innerHeight
    );
  }
  Ie.prototype.scrollIntoView = function(t) {
    if (typeof t == "object") throw Error(r(566));
    var e = [];
    y(
      this._fragmentFiber.child,
      !1,
      jf,
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
        t = E(a), By(t, n);
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
      var o = e[a];
      o.tag === 6 ? (o = E(o), By(o, n)) : E(o).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function Qx(t, e) {
    return t = E(t), Uy(t, e), !1;
  }
  function Uy(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Hy(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var o = n[a];
        t.addEventListener(
          o.type,
          o.attachedListener,
          cl(o.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      for (var h = 0, b = 0; b < vn.length; b++) {
        var x = vn[b];
        (x.fragmentInstance !== e || x.observer !== u || x.instance !== t) && (vn[h++] = x);
      }
      vn.length = h, u.observe(t);
    }), Uy(t, e));
  }
  function Zx(t, e) {
    var n = e._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var o = n[a];
        t.removeEventListener(
          o.type,
          o.attachedListener,
          cl(o.optionsOrUseCapture)
        );
      }
    t.nodeType !== 3 && (n = e._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? Yx(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Bf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Bf(n), ro(n);
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
  function Kx(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var o = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break;
      } else if (a) {
        if (!t[Ul])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (u = t.getAttribute("rel"), u === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (u !== o.rel || t.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || t.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (u = t.getAttribute("src"), (u !== (o.src == null ? null : o.src) || t.getAttribute("type") !== (o.type == null ? null : o.type) || t.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && u && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var u = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && t.getAttribute("name") === u)
          return t;
      } else return t;
      if (t = cn(t.nextSibling), t === null) break;
    }
    return null;
  }
  function Px(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = cn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Gy(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = cn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Uf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Hf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Fx(t, e) {
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
  var Gf = null;
  function ky(t) {
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
  function Yy(t) {
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
  function Jx(t, e) {
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
  function Ix(t) {
    Dy(function() {
      Dy(function(e) {
        return t(e);
      });
    });
  }
  function qy(t, e, n) {
    switch (e = Ss(n), t) {
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
  function Xy(t, e, n) {
    for (var a in n) {
      var o = n[a];
      n.hasOwnProperty(a) && o != null && Xt(t, e, a, null, Cx, o);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Cn && (t.onclick = null), ro(t);
  }
  function kf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ro(t);
  }
  var fn = /* @__PURE__ */ new Map(), Qy = /* @__PURE__ */ new Set();
  function Ts(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ni = $.d;
  $.d = {
    f: Wx,
    r: $x,
    D: tE,
    C: eE,
    L: nE,
    m: iE,
    X: lE,
    S: aE,
    M: sE
  };
  function Wx() {
    var t = ni.f(), e = dr();
    return t || e;
  }
  function $x(t) {
    var e = Oa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Kp(e) : ni.r(t);
  }
  var fl = typeof document > "u" ? null : document;
  function Zy(t, e, n) {
    var a = fl;
    if (a && typeof e == "string" && e) {
      var o = nn(e);
      o = 'link[rel="' + t + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), Qy.has(o) || (Qy.add(o), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(o) === null && (e = a.createElement("link"), Ae(e, "link", t), pe(e), a.head.appendChild(e)));
    }
  }
  function tE(t) {
    ni.D(t), Zy("dns-prefetch", t, null);
  }
  function eE(t, e) {
    ni.C(t, e), Zy("preconnect", t, e);
  }
  function nE(t, e, n) {
    ni.L(t, e, n);
    var a = fl;
    if (a && t && e) {
      var o = 'link[rel="preload"][as="' + nn(e) + '"]';
      e === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + nn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + nn(
        n.imageSizes
      ) + '"]')) : o += '[href="' + nn(t) + '"]';
      var u = o;
      switch (e) {
        case "style":
          u = dl(t);
          break;
        case "script":
          u = hl(t);
      }
      if (!(fn.has(u) || (t = R(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), fn.set(u, t), a.querySelector(o) !== null || e === "style" && a.querySelector(xs(u)) || e === "script" && a.querySelector(Es(u))))) {
        var h = a.createElement("link");
        Ae(h, "link", t), e === "style" && (h[oo] = !0, h.onload = h.onerror = function() {
          lm(h);
        }), pe(h), a.head.appendChild(h);
      }
    }
  }
  function iE(t, e) {
    ni.m(t, e);
    var n = fl;
    if (n && t) {
      var a = e && typeof e.as == "string" ? e.as : "script", o = 'link[rel="modulepreload"][as="' + nn(a) + '"][href="' + nn(t) + '"]', u = o;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = hl(t);
      }
      if (!fn.has(u) && (t = R({ rel: "modulepreload", href: t }, e), fn.set(u, t), n.querySelector(o) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Es(u)))
              return;
        }
        a = n.createElement("link"), Ae(a, "link", t), pe(a), n.head.appendChild(a);
      }
    }
  }
  function aE(t, e, n) {
    ni.S(t, e, n);
    var a = fl;
    if (a && t) {
      var o = za(a).hoistableStyles, u = dl(t);
      e = e || "default";
      var h = o.get(u);
      if (!h) {
        var b = { loading: 0, preload: null };
        if (h = a.querySelector(
          xs(u)
        ))
          b.loading = 5;
        else {
          t = R(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = fn.get(u)) && Yf(t, n);
          var x = h = a.createElement("link");
          pe(x), Ae(x, "link", t), x._p = new Promise(function(j, G) {
            x.onload = j, x.onerror = G;
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
        }, o.set(u, h);
      }
    }
  }
  function lE(t, e) {
    ni.X(t, e);
    var n = fl;
    if (n && t) {
      var a = za(n).hoistableScripts, o = hl(t), u = a.get(o);
      u || (u = n.querySelector(Es(o)), u || (t = R({ src: t, async: !0 }, e), (e = fn.get(o)) && qf(t, e), u = n.createElement("script"), pe(u), Ae(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(o, u));
    }
  }
  function sE(t, e) {
    ni.M(t, e);
    var n = fl;
    if (n && t) {
      var a = za(n).hoistableScripts, o = hl(t), u = a.get(o);
      u || (u = n.querySelector(Es(o)), u || (t = R({ src: t, async: !0, type: "module" }, e), (e = fn.get(o)) && qf(t, e), u = n.createElement("script"), pe(u), Ae(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(o, u));
    }
  }
  function Ky(t, e, n, a) {
    var o = (o = ae.current) ? Ts(o) : null;
    if (!o) throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = dl(n.href), e = za(
          o
        ).hoistableStyles, a = e.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, e.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          t = dl(n.href);
          var u = za(
            o
          ).hoistableStyles, h = u.get(t);
          if (h || (o = o.ownerDocument || o, h = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(t, h), (u = o.querySelector(
            xs(t)
          )) ? u._p || (h.instance = u, h.state.loading = 5) : (u = fn.get(t), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, fn.set(t, u)), oE(
            o,
            t,
            u,
            h.state
          ))), e && a === null)
            throw Error(r(528, ""));
          return h;
        }
        if (e && a !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return e = n.async, n = n.src, typeof n == "string" && e && typeof e != "function" && typeof e != "symbol" ? (n = hl(n), e = za(
          o
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
  function dl(t) {
    return 'href="' + nn(t) + '"';
  }
  function xs(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Py(t) {
    return R({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function oE(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[oo] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[oo] = !0, e.onload = e.onerror = lm.bind(null, e), Ae(e, "link", n), pe(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function hl(t) {
    return '[src="' + nn(t) + '"]';
  }
  function Es(t) {
    return "script[async]" + t;
  }
  function Fy(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + nn(n.href) + '"]'
          );
          if (a)
            return e.instance = a, pe(a), a;
          var o = R({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), pe(a), Ae(a, "style", o), br(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          o = dl(n.href);
          var u = t.querySelector(
            xs(o)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, pe(u), u;
          a = Py(n), (o = fn.get(o)) && Yf(a, o), u = (t.ownerDocument || t).createElement("link"), pe(u);
          var h = u;
          return h._p = new Promise(function(b, x) {
            h.onload = b, h.onerror = x;
          }), Ae(u, "link", a), e.state.loading |= 4, br(u, n.precedence, t), e.instance = u;
        case "script":
          return u = hl(n.src), (o = t.querySelector(
            Es(u)
          )) ? (e.instance = o, pe(o), o) : (a = n, (o = fn.get(u)) && (a = R({}, n), qf(a, o)), t = t.ownerDocument || t, o = t.createElement("script"), pe(o), Ae(o, "link", a), t.head.appendChild(o), e.instance = o);
        case "void":
          return null;
        default:
          throw Error(r(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, br(a, n.precedence, t));
    return e.instance;
  }
  function br(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = a.length ? a[a.length - 1] : null, u = o, h = 0; h < a.length; h++) {
      var b = a[h];
      if (b.dataset.precedence === e) u = b;
      else if (u !== o) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Yf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function qf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Sr = null;
  function Jy(t, e, n) {
    if (Sr === null) {
      var a = /* @__PURE__ */ new Map(), o = Sr = /* @__PURE__ */ new Map();
      o.set(n, a);
    } else
      o = Sr, a = o.get(n), a || (a = /* @__PURE__ */ new Map(), o.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), o = 0; o < n.length; o++) {
      var u = n[o];
      if (!(u[Ul] || u[be] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = u.getAttribute(e) || "";
        h = t + h;
        var b = a.get(h);
        b ? b.push(u) : a.set(h, [u]);
      }
    }
    return a;
  }
  function Xf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function rE(t, e, n) {
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
  function Iy(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Wy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function $y(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function t0(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += $y(e), t.suspenseyImages.push(e)), t = fE.bind(t), e.decode().then(t, t));
  }
  function uE(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var o = dl(a.href), u = e.querySelector(
          xs(o)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = As.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, pe(u);
          return;
        }
        u = e.ownerDocument || e, a = Py(a), (o = fn.get(o)) && Yf(a, o), u = u.createElement("link"), pe(u);
        var h = u;
        h._p = new Promise(function(b, x) {
          h.onload = b, h.onerror = x;
        }), Ae(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = As.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Tr = 0;
  function cE(t, e) {
    return t.stylesheets && t.count === 0 && Er(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Er(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Tr === 0 && (Tr = 62500 * Dx());
      var o = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Er(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > Tr ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(o);
      };
    } : null;
  }
  function e0(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Er(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function As() {
    this.count--, e0(this);
  }
  function fE() {
    this.imgCount--, e0(this);
  }
  var xr = null;
  function Er(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, xr = /* @__PURE__ */ new Map(), e.forEach(dE, t), xr = null, As.call(t));
  }
  function dE(t, e) {
    if (!(e.state.loading & 4)) {
      var n = xr.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), xr.set(t, n);
        for (var o = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < o.length; u++) {
          var h = o[u];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), a = h);
        }
        a && n.set(null, a);
      }
      o = e.instance, h = o.getAttribute("data-precedence"), u = n.get(h) || a, u === a && n.set(null, o), n.set(h, o), this.count++, a = As.bind(this), o.addEventListener("load", a), o.addEventListener("error", a), u ? u.parentNode.insertBefore(o, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(o, t.firstChild)), e.state.loading |= 4;
    }
  }
  var ml = {
    $$typeof: nt,
    Provider: null,
    Consumer: null,
    _currentValue: xt,
    _currentValue2: xt,
    _threadCount: 0
  };
  function hE(t, e, n, a, o, u, h, b, x) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Eu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Eu(0), this.hiddenUpdates = Eu(null), this.identifierPrefix = a, this.onUncaughtError = o, this.onCaughtError = u, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = x, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function n0(t, e, n, a, o, u, h, b, x, j, G, P) {
    return t = new hE(
      t,
      e,
      n,
      h,
      x,
      j,
      G,
      P,
      b
    ), e = 1, u === !0 && (e |= 24), u = Be(3, null, null, e), t.current = u, u.stateNode = t, e = ac(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, rc(u), t;
  }
  function i0(t) {
    return t ? (t = Ga, t) : Ga;
  }
  function a0(t, e, n, a, o, u) {
    o = i0(o), a.context === null ? a.context = o : a.pendingContext = o, a = vi(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = bi(t, a, e), n !== null && (ke(n, t, e), es(n, t, e));
  }
  function l0(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Qf(t, e) {
    l0(t, e), (t = t.alternate) && l0(t, e);
  }
  function s0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ji(t, 67108864);
      e !== null && ke(e, t, 67108864), Qf(t, 67108864);
    }
  }
  function o0(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Je();
      e = Au(e);
      var n = Ji(t, e);
      n !== null && ke(n, t, e), Qf(t, e);
    }
  }
  var pl = !0;
  function mE(t, e, n, a) {
    var o = st.T;
    st.T = null;
    var u = $.p;
    try {
      $.p = 2, Zf(t, e, n, a);
    } finally {
      $.p = u, st.T = o;
    }
  }
  function pE(t, e, n, a) {
    var o = st.T;
    st.T = null;
    var u = $.p;
    try {
      $.p = 8, Zf(t, e, n, a);
    } finally {
      $.p = u, st.T = o;
    }
  }
  function Zf(t, e, n, a) {
    if (pl) {
      var o = Kf(a);
      if (o === null)
        Mf(
          t,
          e,
          a,
          Ar,
          n
        ), u0(t, a);
      else if (yE(
        o,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (u0(t, a), e & 4 && -1 < gE.indexOf(t)) {
        for (; o !== null; ) {
          var u = Oa(o);
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
                    Ln(u), (Ht & 6) === 0 && (ur = Oe() + 500, ys(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = Ji(u, 2), b !== null && ke(b, u, 2), dr(), Qf(u, 2);
            }
          if (u = Kf(a), u === null && Mf(
            t,
            e,
            a,
            Ar,
            n
          ), u === o) break;
          o = u;
        }
        o !== null && a.stopPropagation();
      } else
        Mf(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Kf(t) {
    return t = Ru(t), Pf(t);
  }
  var Ar = null;
  function Pf(t) {
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
  function r0(t) {
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
        switch (Su()) {
          case Nl:
            return 2;
          case _l:
            return 8;
          case Xi:
          case Tu:
            return 32;
          case Vl:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Ff = !1, Ri = null, Ni = null, _i = null, ws = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), Vi = [], gE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function u0(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Ri = null;
        break;
      case "dragenter":
      case "dragleave":
        Ni = null;
        break;
      case "mouseover":
      case "mouseout":
        _i = null;
        break;
      case "pointerover":
      case "pointerout":
        ws.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Cs.delete(e.pointerId);
    }
  }
  function Ms(t, e, n, a, o, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [o]
    }, e !== null && (e = Oa(e), e !== null && s0(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, o !== null && e.indexOf(o) === -1 && e.push(o), t);
  }
  function yE(t, e, n, a, o) {
    switch (e) {
      case "focusin":
        return Ri = Ms(
          Ri,
          t,
          e,
          n,
          a,
          o
        ), !0;
      case "dragenter":
        return Ni = Ms(
          Ni,
          t,
          e,
          n,
          a,
          o
        ), !0;
      case "mouseover":
        return _i = Ms(
          _i,
          t,
          e,
          n,
          a,
          o
        ), !0;
      case "pointerover":
        var u = o.pointerId;
        return ws.set(
          u,
          Ms(
            ws.get(u) || null,
            t,
            e,
            n,
            a,
            o
          )
        ), !0;
      case "gotpointercapture":
        return u = o.pointerId, Cs.set(
          u,
          Ms(
            Cs.get(u) || null,
            t,
            e,
            n,
            a,
            o
          )
        ), !0;
    }
    return !1;
  }
  function c0(t) {
    var e = Zi(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = f(n), e !== null) {
            t.blockedOn = e, nm(t.priority, function() {
              o0(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, nm(t.priority, function() {
              o0(n);
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
      var n = Kf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        zu = a, n.target.dispatchEvent(a), zu = null;
      } else
        return e = Oa(n), e !== null && s0(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function f0(t, e, n) {
    wr(t) && n.delete(e);
  }
  function vE() {
    Ff = !1, Ri !== null && wr(Ri) && (Ri = null), Ni !== null && wr(Ni) && (Ni = null), _i !== null && wr(_i) && (_i = null), ws.forEach(f0), Cs.forEach(f0);
  }
  function Cr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Ff || (Ff = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      vE
    )));
  }
  var Mr = null;
  function d0(t) {
    Mr !== t && (Mr = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Mr === t && (Mr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], o = t[e + 2];
          if (typeof a != "function") {
            if (Pf(a || n) === null)
              continue;
            break;
          }
          var u = Oa(n);
          u !== null && (t.splice(e, 3), e -= 3, Oc(
            u,
            {
              pending: !0,
              data: o,
              method: n.method,
              action: a
            },
            a,
            o
          ));
        }
      }
    ));
  }
  function gl(t) {
    function e(x) {
      return Cr(x, t);
    }
    Ri !== null && Cr(Ri, t), Ni !== null && Cr(Ni, t), _i !== null && Cr(_i, t), ws.forEach(e), Cs.forEach(e);
    for (var n = 0; n < Vi.length; n++) {
      var a = Vi[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Vi.length && (n = Vi[0], n.blockedOn === null); )
      c0(n), n.blockedOn === null && Vi.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var o = n[a], u = n[a + 1], h = o[Le] || null;
        if (typeof u == "function")
          h || d0(n);
        else if (h) {
          var b = null;
          if (u && u.hasAttribute("formAction")) {
            if (o = u, h = u[Le] || null)
              b = h.formAction;
            else if (Pf(o) !== null) continue;
          } else b = h.action;
          typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), d0(n);
        }
      }
  }
  function h0() {
    function t(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(h) {
            return o = h;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function e() {
      o !== null && (o(), o = null), a || setTimeout(n, 20);
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
      var a = !1, o = null;
      return navigation.addEventListener("navigate", t), navigation.addEventListener("navigatesuccess", e), navigation.addEventListener("navigateerror", e), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", t), navigation.removeEventListener("navigatesuccess", e), navigation.removeEventListener("navigateerror", e), o !== null && (o(), o = null);
      };
    }
  }
  function Jf(t) {
    this._internalRoot = t;
  }
  Dr.prototype.render = Jf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(r(409));
    var n = e.current, a = Je();
    a0(n, a, t, e, null, null);
  }, Dr.prototype.unmount = Jf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      a0(t.current, 2, null, t, null, null), dr(), e[Da] = null;
    }
  };
  function Dr(t) {
    this._internalRoot = t;
  }
  Dr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = em();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Vi.length && e !== 0 && e < Vi[n].priority; n++) ;
      Vi.splice(n, 0, t), n === 0 && c0(t);
    }
  };
  var m0 = l.version;
  if (m0 !== "19.3.0")
    throw Error(
      r(
        527,
        m0,
        "19.3.0"
      )
    );
  $.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","), Error(r(268, t)));
    return t = g(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var bE = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: st,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Or.isDisabled && Or.supportsFiber)
      try {
        jl = Or.inject(
          bE
        ), Ye = Or;
      } catch {
      }
  }
  return Os.createRoot = function(t, e) {
    if (!c(t)) throw Error(r(299));
    var n = !1, a = "", o = ig, u = ag, h = lg;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (o = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError)), e = n0(
      t,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      o,
      u,
      h,
      h0
    ), t[Da] = e.current, Cf(t), new Jf(e);
  }, Os.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(r(299));
    var a = !1, o = "", u = ig, h = ag, b = lg, x = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (x = n.formState)), e = n0(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      o,
      x,
      u,
      h,
      b,
      h0
    ), e.context = i0(null), n = e.current, a = Je(), a = Au(a), o = vi(a), o.callback = null, bi(n, o, a), n = a, e.current.lanes = n, Bl(e, n), Ln(e), t[Da] = e.current, Cf(t), new Dr(e);
  }, Os.version = "19.3.0", Os;
}
var A0;
function zE() {
  if (A0) return Wf.exports;
  A0 = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Wf.exports = OE(), Wf.exports;
}
var zr = zE(), Q = nh();
const RE = /* @__PURE__ */ xE(Q), NE = /* @__PURE__ */ TE({
  __proto__: null,
  default: RE
}, [Q]);
var _E = ib(), VE = Object.defineProperty, ih = (i, l) => VE(i, "name", { value: l, configurable: !0 });
function Dd(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
ih(Dd, "setRef");
function ab(...i) {
  return (l) => {
    let s = !1;
    const r = i.map((c) => {
      const d = Dd(c, l);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let c = 0; c < r.length; c++) {
          const d = r[c];
          typeof d == "function" ? d() : Dd(i[c], null);
        }
      };
  };
}
ih(ab, "composeRefs");
function lb(...i) {
  return Q.useCallback(ab(...i), i);
}
ih(lb, "useComposedRefs");
var jE = Object.defineProperty, tn = (i, l) => jE(i, "name", { value: l, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function sb(i) {
  const l = Q.forwardRef((s, r) => {
    let { children: c, ...d } = s, f = null, m = !1;
    const p = [];
    c = db(c), Q.Children.forEach(c, (S) => {
      if (cb(S)) {
        m = !0;
        const A = S;
        let T = "child" in A.props ? A.props.child : A.props.children;
        for (; ah(T) && typeof Pr == "function"; )
          T = Pr(T._payload);
        f = BE(A, T), p.push(f?.props?.children);
      } else
        p.push(S);
    }), f ? f = Q.cloneElement(f, void 0, p) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && Q.Children.count(c) === 1 && Q.isValidElement(c) && (f = c)
    );
    const g = f ? ub(f) : void 0, v = lb(r, g);
    if (!f) {
      if (c || c === 0)
        throw new Error(
          m ? GE(i) : HE(i)
        );
      return c;
    }
    const y = rb(d, f.props ?? {});
    return f.type !== Q.Fragment && (y.ref = r ? v : g), Q.cloneElement(f, y);
  });
  return l.displayName = `${i}.Slot`, l;
}
tn(sb, "createSlot");
var ob = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function LE(i) {
  const l = /* @__PURE__ */ tn((s) => "child" in s ? s.children(s.child) : s.children, "Slottable");
  return l.displayName = `${i}.Slottable`, l.__radixId = ob, l;
}
tn(LE, "createSlottable");
var BE = /* @__PURE__ */ tn((i, l) => "child" in i.props ? Q.isValidElement(l) ? Q.cloneElement(l, void 0, i.props.children(l.props.children)) : null : Q.isValidElement(l) ? l : null, "getSlottableElementFromSlottable");
function rb(i, l) {
  const s = { ...l };
  for (const r in l) {
    const c = i[r], d = l[r];
    /^on[A-Z]/.test(r) ? c && d ? s[r] = (...m) => {
      const p = d(...m);
      return c(...m), p;
    } : c && (s[r] = c) : r === "style" ? s[r] = { ...c, ...d } : r === "className" ? s[r] = [c, d].filter(Boolean).join(" ") : r === "aria-describedby" && (s[r] = hb(d, c));
  }
  return { ...i, ...s };
}
tn(rb, "mergeProps");
function ub(i) {
  let l = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? i.ref : (l = Object.getOwnPropertyDescriptor(i, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? i.props.ref : i.props.ref || i.ref);
}
tn(ub, "getElementRef");
function cb(i) {
  return Q.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === ob;
}
tn(cb, "isSlottable");
var UE = /* @__PURE__ */ Symbol.for("react.lazy");
function ah(i) {
  return i != null && typeof i == "object" && "$$typeof" in i && i.$$typeof === UE && "_payload" in i && fb(i._payload);
}
tn(ah, "isLazyComponent");
function fb(i) {
  return typeof i == "object" && i !== null && "then" in i;
}
tn(fb, "isPromiseLike");
function db(i) {
  let l = i;
  for (; ah(l) && typeof Pr == "function"; )
    l = Pr(l._payload);
  return l;
}
tn(db, "useUnwrappedLazy");
function hb(...i) {
  const l = /* @__PURE__ */ new Set();
  for (const s of i)
    if (typeof s == "string")
      for (const r of String(s).trim().split(/\s+/))
        r && l.add(r);
  return l.size > 0 ? Array.from(l).join(" ") : void 0;
}
tn(hb, "concatAriaDescribedby");
var HE = /* @__PURE__ */ tn((i) => `${i} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), GE = /* @__PURE__ */ tn((i) => `${i} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Pr = NE[" use ".trim().toString()], kE = Object.defineProperty, YE = (i, l) => kE(i, "name", { value: l, configurable: !0 }), qE = [
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
], XE = qE.reduce((i, l) => {
  const s = /* @__PURE__ */ sb(`Primitive.${l}`), r = Q.forwardRef((c, d) => {
    const { asChild: f, ...m } = c, p = f ? s : l;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ O.jsx(p, { ...m, ref: d });
  });
  return r.displayName = `Primitive.${l}`, { ...i, [l]: r };
}, {});
function QE(i, l) {
  i && _E.flushSync(() => i.dispatchEvent(l));
}
YE(QE, "dispatchDiscreteCustomEvent");
var ZE = Object.defineProperty, mb = (i, l) => ZE(i, "name", { value: l, configurable: !0 }), lh = {
  Horizontal: "horizontal",
  Vertical: "vertical"
}, w0 = lh.Horizontal, KE = Object.values(lh), pb = /* @__PURE__ */ Q.forwardRef(
  /* @__PURE__ */ mb(function(l, s) {
    const { decorative: r, orientation: c = w0, ...d } = l, f = gb(c) ? c : w0, m = f === lh.Vertical ? f : void 0, p = r ? { role: "none" } : { "aria-orientation": m, role: "separator" };
    return /* @__PURE__ */ O.jsx(
      XE.div,
      {
        "data-orientation": f,
        ...p,
        ...d,
        ref: s
      }
    );
  }, "Separator")
);
function gb(i) {
  return KE.includes(i);
}
mb(gb, "isValidOrientation");
function yb(i) {
  var l, s, r = "";
  if (typeof i == "string" || typeof i == "number") r += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var c = i.length;
    for (l = 0; l < c; l++) i[l] && (s = yb(i[l])) && (r && (r += " "), r += s);
  } else for (s in i) i[s] && (r && (r += " "), r += s);
  return r;
}
function PE() {
  for (var i, l, s = 0, r = "", c = arguments.length; s < c; s++) (i = arguments[s]) && (l = yb(i)) && (r && (r += " "), r += l);
  return r;
}
const FE = (i, l) => {
  const s = new Array(i.length + l.length);
  for (let r = 0; r < i.length; r++)
    s[r] = i[r];
  for (let r = 0; r < l.length; r++)
    s[i.length + r] = l[r];
  return s;
}, JE = (i, l) => ({
  classGroupId: i,
  validator: l
}), vb = (i = /* @__PURE__ */ new Map(), l = null, s) => ({
  nextPart: i,
  validators: l,
  classGroupId: s
}), Fr = "-", C0 = [], IE = "arbitrary..", WE = (i) => {
  const l = tA(i), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: r
  } = i;
  return {
    getClassGroupId: (f) => {
      if (f.startsWith("[") && f.endsWith("]"))
        return $E(f);
      const m = f.split(Fr), p = m[0] === "" && m.length > 1 ? 1 : 0;
      return bb(m, p, l);
    },
    getConflictingClassGroupIds: (f, m) => {
      if (m) {
        const p = r[f], g = s[f];
        return p ? g ? FE(g, p) : p : g || C0;
      }
      return s[f] || C0;
    }
  };
}, bb = (i, l, s) => {
  if (i.length - l === 0)
    return s.classGroupId;
  const c = i[l], d = s.nextPart.get(c);
  if (d) {
    const g = bb(i, l + 1, d);
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
}, $E = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const l = i.slice(1, -1), s = l.indexOf(":"), r = l.slice(0, s);
  return r ? IE + r : void 0;
})(), tA = (i) => {
  const {
    theme: l,
    classGroups: s
  } = i;
  return eA(s, l);
}, eA = (i, l) => {
  const s = vb();
  for (const r in i) {
    const c = i[r];
    sh(c, s, r, l);
  }
  return s;
}, sh = (i, l, s, r) => {
  const c = i.length;
  for (let d = 0; d < c; d++) {
    const f = i[d];
    nA(f, l, s, r);
  }
}, nA = (i, l, s, r) => {
  if (typeof i == "string") {
    iA(i, l, s);
    return;
  }
  if (typeof i == "function") {
    aA(i, l, s, r);
    return;
  }
  lA(i, l, s, r);
}, iA = (i, l, s) => {
  const r = i === "" ? l : Sb(l, i);
  r.classGroupId = s;
}, aA = (i, l, s, r) => {
  if (sA(i)) {
    sh(i(r), l, s, r);
    return;
  }
  l.validators === null && (l.validators = []), l.validators.push(JE(s, i));
}, lA = (i, l, s, r) => {
  const c = Object.entries(i), d = c.length;
  for (let f = 0; f < d; f++) {
    const [m, p] = c[f];
    sh(p, Sb(l, m), s, r);
  }
}, Sb = (i, l) => {
  let s = i;
  const r = l.split(Fr), c = r.length;
  for (let d = 0; d < c; d++) {
    const f = r[d];
    let m = s.nextPart.get(f);
    m || (m = vb(), s.nextPart.set(f, m)), s = m;
  }
  return s;
}, sA = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, oA = (i) => {
  if (i < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let l = 0, s = /* @__PURE__ */ Object.create(null), r = /* @__PURE__ */ Object.create(null);
  const c = (d, f) => {
    s[d] = f, l++, l > i && (l = 0, r = s, s = /* @__PURE__ */ Object.create(null));
  };
  return {
    get(d) {
      let f = s[d];
      if (f !== void 0)
        return f;
      if ((f = r[d]) !== void 0)
        return c(d, f), f;
    },
    set(d, f) {
      d in s ? s[d] = f : c(d, f);
    }
  };
}, Od = "!", M0 = ":", rA = [], D0 = (i, l, s, r, c) => ({
  modifiers: i,
  hasImportantModifier: l,
  baseClassName: s,
  maybePostfixModifierPosition: r,
  isExternal: c
}), uA = (i) => {
  const {
    prefix: l,
    experimentalParseClassName: s
  } = i;
  let r = (c) => {
    const d = [];
    let f = 0, m = 0, p = 0, g;
    const v = c.length;
    for (let C = 0; C < v; C++) {
      const E = c[C];
      if (f === 0 && m === 0) {
        if (E === M0) {
          d.push(c.slice(p, C)), p = C + 1;
          continue;
        }
        if (E === "/") {
          g = C;
          continue;
        }
      }
      E === "[" ? f++ : E === "]" ? f-- : E === "(" ? m++ : E === ")" && m--;
    }
    const y = d.length === 0 ? c : c.slice(p);
    let S = y, A = !1;
    y.endsWith(Od) ? (S = y.slice(0, -1), A = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(Od) && (S = y.slice(1), A = !0)
    );
    const T = g && g > p ? g - p : void 0;
    return D0(d, A, S, T);
  };
  if (l) {
    const c = l + M0, d = r;
    r = (f) => f.startsWith(c) ? d(f.slice(c.length)) : D0(rA, !1, f, void 0, !0);
  }
  if (s) {
    const c = r;
    r = (d) => s({
      className: d,
      parseClassName: c
    });
  }
  return r;
}, cA = (i) => {
  const l = /* @__PURE__ */ new Map();
  return i.orderSensitiveModifiers.forEach((s, r) => {
    l.set(s, 1e6 + r);
  }), (s) => {
    const r = [];
    let c = [];
    for (let d = 0; d < s.length; d++) {
      const f = s[d], m = f[0] === "[", p = l.has(f);
      m || p ? (c.length > 0 && (c.sort(), r.push(...c), c = []), r.push(f)) : c.push(f);
    }
    return c.length > 0 && (c.sort(), r.push(...c)), r;
  };
}, fA = (i) => ({
  cache: oA(i.cacheSize),
  parseClassName: uA(i),
  sortModifiers: cA(i),
  postfixLookupClassGroupIds: dA(i),
  ...WE(i)
}), dA = (i) => {
  const l = /* @__PURE__ */ Object.create(null), s = i.postfixLookupClassGroups;
  if (s)
    for (let r = 0; r < s.length; r++)
      l[s[r]] = !0;
  return l;
}, hA = /\s+/, mA = (i, l) => {
  const {
    parseClassName: s,
    getClassGroupId: r,
    getConflictingClassGroupIds: c,
    sortModifiers: d,
    postfixLookupClassGroupIds: f
  } = l, m = [], p = i.trim().split(hA);
  let g = "";
  for (let v = p.length - 1; v >= 0; v -= 1) {
    const y = p[v], {
      isExternal: S,
      modifiers: A,
      hasImportantModifier: T,
      baseClassName: C,
      maybePostfixModifierPosition: E
    } = s(y);
    if (S) {
      g = y + (g.length > 0 ? " " + g : g);
      continue;
    }
    let z = !!E, B;
    if (z) {
      const R = C.substring(0, E);
      B = r(R);
      const D = B && f[B] ? r(C) : void 0;
      D && D !== B && (B = D, z = !1);
    } else
      B = r(C);
    if (!B) {
      if (!z) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (B = r(C), !B) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      z = !1;
    }
    const k = A.length === 0 ? "" : A.length === 1 ? A[0] : d(A).join(":"), _ = T ? k + Od : k, X = _ + B;
    if (m.indexOf(X) > -1)
      continue;
    m.push(X);
    const Z = c(B, z);
    for (let R = 0; R < Z.length; ++R) {
      const D = Z[R];
      m.push(_ + D);
    }
    g = y + (g.length > 0 ? " " + g : g);
  }
  return g;
}, pA = (...i) => {
  let l = 0, s, r, c = "";
  for (; l < i.length; )
    (s = i[l++]) && (r = Tb(s)) && (c && (c += " "), c += r);
  return c;
}, Tb = (i) => {
  if (typeof i == "string")
    return i;
  let l, s = "";
  for (let r = 0; r < i.length; r++)
    i[r] && (l = Tb(i[r])) && (s && (s += " "), s += l);
  return s;
}, gA = (i, ...l) => {
  let s, r, c, d;
  const f = (p) => {
    const g = l.reduce((v, y) => y(v), i());
    return s = fA(g), r = s.cache.get, c = s.cache.set, d = m, m(p);
  }, m = (p) => {
    const g = r(p);
    if (g)
      return g;
    const v = mA(p, s);
    return c(p, v), v;
  };
  return d = f, (...p) => d(pA(...p));
}, yA = [], de = (i) => {
  const l = (s) => s[i] || yA;
  return l.isThemeGetter = !0, l.themeKey = i, l;
}, xb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Eb = /^\((?:(\w[\w-]*):)?(.+)\)$/i, vA = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, bA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, SA = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, TA = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, xA = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, EA = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Li = (i) => vA.test(i), Ot = (i) => !!i && !Number.isNaN(Number(i)), Bn = (i) => !!i && Number.isInteger(Number(i)), id = (i) => i.endsWith("%") && Ot(i.slice(0, -1)), ii = (i) => bA.test(i), Ab = () => !0, AA = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  SA.test(i) && !TA.test(i)
), oh = () => !1, wA = (i) => xA.test(i), CA = (i) => EA.test(i), MA = (i) => !ht(i) && !mt(i), DA = (i) => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)), OA = (i) => Gi(i, Mb, oh), ht = (i) => xb.test(i), ma = (i) => Gi(i, Db, AA), O0 = (i) => Gi(i, BA, Ot), zA = (i) => Gi(i, zb, Ab), RA = (i) => Gi(i, Ob, oh), z0 = (i) => Gi(i, wb, oh), NA = (i) => Gi(i, Cb, CA), Rr = (i) => Gi(i, Rb, wA), mt = (i) => Eb.test(i), zs = (i) => Aa(i, Db), _A = (i) => Aa(i, Ob), R0 = (i) => Aa(i, wb), VA = (i) => Aa(i, Mb), jA = (i) => Aa(i, Cb), Nr = (i) => Aa(i, Rb, !0), LA = (i) => Aa(i, zb, !0), Gi = (i, l, s) => {
  const r = xb.exec(i);
  return r ? r[1] ? l(r[1]) : s(r[2]) : !1;
}, Aa = (i, l, s = !1) => {
  const r = Eb.exec(i);
  return r ? r[1] ? l(r[1]) : s : !1;
}, wb = (i) => i === "position" || i === "percentage", Cb = (i) => i === "image" || i === "url", Mb = (i) => i === "length" || i === "size" || i === "bg-size", Db = (i) => i === "length", BA = (i) => i === "number", Ob = (i) => i === "family-name", zb = (i) => i === "number" || i === "weight", Rb = (i) => i === "shadow", UA = () => {
  const i = de("color"), l = de("font"), s = de("text"), r = de("font-weight"), c = de("tracking"), d = de("leading"), f = de("breakpoint"), m = de("container"), p = de("spacing"), g = de("radius"), v = de("shadow"), y = de("inset-shadow"), S = de("text-shadow"), A = de("drop-shadow"), T = de("blur"), C = de("perspective"), E = de("aspect"), z = de("ease"), B = de("animate"), k = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], _ = () => [
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
  ], X = () => [..._(), mt, ht], Z = () => ["auto", "hidden", "clip", "visible", "scroll"], R = () => ["auto", "contain", "none"], D = () => [mt, ht, p], ot = () => [Li, "full", "auto", ...D()], ut = () => [Bn, "none", "subgrid", mt, ht], F = () => ["auto", {
    span: ["full", Bn, mt, ht]
  }, Bn, mt, ht], I = () => [Bn, "auto", mt, ht], lt = () => ["auto", "min", "max", "fr", mt, ht], et = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], nt = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...D()], J = () => [Li, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...D()], it = () => [m, Li, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...D()], at = () => [Li, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...D()], Y = () => [i, mt, ht], yt = () => [..._(), R0, z0, {
    position: [mt, ht]
  }], vt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], At = () => ["auto", "cover", "contain", VA, OA, {
    size: [mt, ht]
  }], w = () => [id, zs, ma], L = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    mt,
    ht
  ], tt = () => ["", Ot, zs, ma], W = () => ["solid", "dashed", "dotted", "double"], ft = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ct = () => [Ot, id, R0, z0], St = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    T,
    mt,
    ht
  ], st = () => ["none", Ot, mt, ht], $ = () => ["none", Ot, mt, ht], xt = () => [Ot, mt, ht], Vt = () => [Li, "full", ...D()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ii],
      breakpoint: [ii],
      color: [Ab],
      container: [ii],
      "drop-shadow": [ii],
      ease: ["in", "out", "in-out"],
      font: [MA],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [ii],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [ii],
      shadow: [ii],
      spacing: ["px", Ot],
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
      "container-named": [DA],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ot, "auto", ht, mt, m]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": k()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": k()
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
        object: X()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: Z()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": Z()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": Z()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        basis: [Li, "full", "auto", m, ...D()]
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
        flex: [Ot, Li, "auto", "initial", "none", ht]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", Ot, mt, ht]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", Ot, mt, ht]
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
        gap: D()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": D()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": D()
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
        p: D()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: D()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: D()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: D()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: D()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: D()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: D()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: D()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: D()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: D()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: D()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: q()
      }],
      /**
       * Margin Inline
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: q()
      }],
      /**
       * Margin Block
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: q()
      }],
      /**
       * Margin Inline Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: q()
      }],
      /**
       * Margin Inline End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: q()
      }],
      /**
       * Margin Block Start
       * @see https://tailwindcss.com/docs/margin
       */
      mbs: [{
        mbs: q()
      }],
      /**
       * Margin Block End
       * @see https://tailwindcss.com/docs/margin
       */
      mbe: [{
        mbe: q()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: q()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: q()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: q()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: q()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": D()
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
        "space-y": D()
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
        text: ["base", s, zs, ma]
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
        font: [r, LA, zA]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", id, ht]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_A, RA, l]
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
        "line-clamp": [Ot, "none", mt, O0]
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
          ...D()
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
        decoration: [Ot, "from-font", "auto", mt, ma]
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
        "underline-offset": [Ot, "auto", mt, ht]
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
        indent: D()
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
        }, jA, NA]
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
        from: w()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: w()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: w()
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
        "outline-offset": [Ot, mt, ht]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", Ot, zs, ma]
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
          Nr,
          Rr
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
        "inset-shadow": ["none", y, Nr, Rr]
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
        "ring-offset": [Ot, ma]
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
        "text-shadow": ["none", S, Nr, Rr]
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
        opacity: [Ot, mt, ht]
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
        "mask-linear": [Ot]
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
        "mask-conic": [Ot]
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
        brightness: [Ot, mt, ht]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [Ot, mt, ht]
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
          Nr,
          Rr
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
        grayscale: ["", Ot, mt, ht]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [Ot, mt, ht]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", Ot, mt, ht]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [Ot, mt, ht]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", Ot, mt, ht]
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
        "backdrop-brightness": [Ot, mt, ht]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [Ot, mt, ht]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", Ot, mt, ht]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [Ot, mt, ht]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", Ot, mt, ht]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [Ot, mt, ht]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [Ot, mt, ht]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", Ot, mt, ht]
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
        "border-spacing": D()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": D()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": D()
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
        duration: [Ot, "initial", mt, ht]
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
        delay: [Ot, mt, ht]
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
        perspective: [C, mt, ht]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": X()
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
        origin: X()
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
        "scroll-m": D()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": D()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": D()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
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
        stroke: [Ot, zs, ma, O0]
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
}, HA = /* @__PURE__ */ gA(UA);
function rh(...i) {
  return HA(PE(i));
}
const Nb = Q.forwardRef(({ className: i, orientation: l = "horizontal", decorative: s = !0, ...r }, c) => /* @__PURE__ */ O.jsx(pb, { ref: c, decorative: s, orientation: l, className: rh("vt:shrink-0 vt:bg-border", l === "horizontal" ? "vt:h-px vt:w-full" : "vt:h-full vt:w-px", i), ...r }));
Nb.displayName = pb.displayName;
const GA = (i) => i?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function kA(i, l, s = []) {
  if (l == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: GA(i),
    size: 24,
    node: l,
    ...s.length > 0 ? { aliases: s } : {}
  };
}
const YA = (i) => {
  let l = "", s = !1;
  for (const r of i) {
    if (r === "-" || r === "_" || r <= " ") {
      s = l.length > 0;
      continue;
    }
    l.length === 0 ? l += r.toLowerCase() : l += s ? r.toUpperCase() : r, s = !1;
  }
  return l;
};
const qA = (i) => {
  const l = YA(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
const zd = (...i) => i.filter((l, s, r) => !!l && l.trim() !== "" && r.indexOf(l) === s).join(" ").trim();
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
function ad(i) {
  return i != null;
}
function XA(i, l = {}) {
  const s = l.attributeNames ?? {}, r = (S) => s[S] ?? S, c = i.size ?? i.width ?? pa.width, d = i.size ?? i.height ?? pa.height, f = i.aliases?.filter((S) => typeof S == "string" && S.trim() !== "").map((S) => `lucide-${S}`) ?? [], m = [...i.name ? [`lucide-${i.name}`] : [], ...f], p = l.className?.split(" ").filter(Boolean) ?? [], g = l.includeDefaultClasses === !1 ? zd(...p) : zd("lucide", ...m, ...p), v = l.absoluteStrokeWidth ? Number(l.strokeWidth ?? pa["stroke-width"]) * Number(i.size ?? i.width ?? pa.width) / Number(l.size ?? l.width ?? pa.width) : l.strokeWidth ?? pa["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(pa).reduce((S, [A, T]) => (S[r(A)] = T, S), {}),
      ..."color" in l && l.color && {
        [r("stroke")]: l.color
      },
      ..."size" in l && ad(l.size) && {
        [r("width")]: l.size,
        [r("height")]: l.size
      },
      ..."width" in l && ad(l.width) && {
        [r("width")]: l.width
      },
      ..."height" in l && ad(l.height) && {
        [r("height")]: l.height
      },
      [r("stroke-width")]: v,
      ...g && {
        [r("class")]: g
      },
      [r("viewBox")]: `0 0 ${c} ${d}`,
      ...l.hasA11yProp === !1 ? {
        [r("aria-hidden")]: "true"
      } : {},
      ..."attributes" in l && l.attributes
    },
    i.node.map((S) => {
      const [A, T, C] = S, E = l.nonScalingStroke ? { [r("vector-effect")]: "non-scaling-stroke", ...T } : T;
      return C ? [A, E, C] : [A, E];
    })
  ];
}
function QA(i, l = {}) {
  return XA(i, {
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
const ZA = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
}, KA = Q.createContext({}), PA = () => Q.useContext(KA), FA = Q.forwardRef(
  ({
    color: i,
    size: l,
    width: s,
    height: r,
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
      absoluteStrokeWidth: C = !1,
      nonScalingStroke: E = !1,
      color: z = "currentColor",
      className: B = ""
    } = PA() ?? {}, k = !!p || ZA(y), [_, X, Z = []] = QA(v, {
      color: i ?? z,
      width: s ?? l ?? A,
      height: r ?? l ?? A,
      strokeWidth: c ?? T,
      absoluteStrokeWidth: d ?? C,
      nonScalingStroke: f ?? E,
      className: zd(B, m),
      hasA11yProp: k,
      attributes: y
    });
    return Q.createElement(
      _,
      {
        ref: S,
        ...X
      },
      [
        ...Z.map(([R, D]) => Q.createElement(R, D)),
        ...Array.isArray(p) ? p : [p]
      ]
    );
  }
);
function si(i, l = [], s = []) {
  const r = typeof i == "string" ? kA(i, l, s) : i, c = Q.forwardRef(
    ({ className: d, ...f }, m) => Q.createElement(FA, {
      ref: m,
      icon: r,
      className: d,
      ...f
    })
  );
  return r.name && (c.displayName = qA(r.name)), c;
}
const _b = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
_b.node;
const Vb = si(_b);
const jb = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
jb.node;
const _s = si(jb);
const Lb = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
Lb.node;
const uh = si(Lb);
const Bb = {
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
Bb.node;
const JA = si(Bb);
const Ub = {
  name: "pause",
  size: 24,
  node: [
    ["rect", { x: "14", y: "3", width: "5", height: "18", rx: "1", key: "kaeet6" }],
    ["rect", { x: "5", y: "3", width: "5", height: "18", rx: "1", key: "1wsw3u" }]
  ]
};
Ub.node;
const cu = si(Ub);
const Hb = {
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
Hb.node;
const fu = si(Hb);
const Gb = {
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
Gb.node;
const IA = si(Gb);
const kb = {
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
kb.node;
const Yb = si(kb);
const qb = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
qb.node;
const WA = si(qb), Xb = Q.createContext({});
function $A(i) {
  const l = Q.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const t2 = typeof window < "u", N0 = t2 ? Q.useLayoutEffect : Q.useEffect, ch = /* @__PURE__ */ Q.createContext(null);
function fh(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function Jr(i, l) {
  const s = i.indexOf(l);
  s > -1 && i.splice(s, 1);
}
const Gn = (i, l, s) => s > l ? l : s < i ? i : s;
let du = () => {
};
const Hn = {}, dh = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), Qb = (i) => typeof i == "object" && i !== null, hh = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function Zb(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const En = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Is = (...i) => i.reduce((l, s) => (r) => s(l(r))), xa = /* @__NO_SIDE_EFFECTS__ */ (i, l, s) => {
  const r = l - i;
  return r ? (s - i) / r : 1;
};
class Ir {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return fh(this.subscriptions, l), () => this.remove(l);
  }
  remove(l) {
    Jr(this.subscriptions, l);
  }
  notify(l, s, r) {
    const c = this.subscriptions.length;
    if (c)
      if (c === 1)
        this.subscriptions[0](l, s, r);
      else
        for (let d = 0; d < c; d++) {
          const f = this.subscriptions[d];
          f && f(l, s, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const dn = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, We = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, Kb = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, ld = (i, l, s) => i * (3 * (1 - i) * ((1 - i) * l + i * s) + i * i);
// @__NO_SIDE_EFFECTS__
function Ws(i, l, s, r) {
  return i === l && s === r ? En : (c) => {
    let d = 0, f = 1, m = c;
    for (let p = 0; ; p++) {
      m >= d && m <= f || (m = (d + f) / 2);
      const g = ld(m, i, s) - c;
      if (g * g < 1e-28 || p === 40)
        break;
      g > 0 ? f = m : d = m, m -= g * 1e-7 / (ld(m + 1e-7, i, s) - c - g);
    }
    return ld(m, l, r);
  };
}
const Pb = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, Fb = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), Jb = /* @__PURE__ */ Ws(0.33, 1.53, 0.69, 0.99), mh = /* @__PURE__ */ Fb(Jb), Ib = /* @__PURE__ */ Pb(mh), Wb = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * mh(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), ph = (i) => 1 - Math.sin(Math.acos(i)), $b = /* @__PURE__ */ Fb(ph), t1 = /* @__PURE__ */ Pb(ph), e2 = /* @__PURE__ */ Ws(0.42, 0, 1, 1), n2 = /* @__PURE__ */ Ws(0, 0, 0.58, 1), gh = /* @__PURE__ */ Ws(0.42, 0, 0.58, 1), i2 = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", yh = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", a2 = {
  linear: En,
  easeIn: e2,
  easeInOut: gh,
  easeOut: n2,
  circIn: ph,
  circInOut: t1,
  circOut: $b,
  backIn: mh,
  backInOut: Ib,
  backOut: Jb,
  anticipate: Wb
}, l2 = (i) => typeof i == "string", _0 = (i) => {
  if (/* @__PURE__ */ yh(i)) {
    du(i.length === 4);
    const [l, s, r, c] = i;
    return /* @__PURE__ */ Ws(l, s, r, c);
  } else if (l2(i))
    return a2[i];
  return i;
}, ce = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let Hr;
function s2() {
  Hr = void 0;
}
const te = {
  now: () => (Hr === void 0 && te.set(ce.isProcessing || Hn.useManualTiming ? ce.timestamp : performance.now()), Hr),
  set: (i) => {
    Hr = i, queueMicrotask(s2);
  }
}, Al = (i) => Math.round(i * 1e5) / 1e5, e1 = (i) => (l) => typeof l == "string" && l.startsWith(i), n1 = /* @__PURE__ */ e1("--"), o2 = /* @__PURE__ */ e1("var(--"), vh = (i) => o2(i) ? r2.test(i.split("/*")[0].trim()) : !1, r2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function sd(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const Ml = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Us = {
  ...Ml,
  transform: (i) => Gn(0, 1, i)
}, _r = {
  ...Ml,
  default: 1
}, bh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function u2(i) {
  return i == null;
}
const c2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Sh = (i, l) => (s) => !!(typeof s == "string" && c2.test(s) && s.startsWith(i) || l && !u2(s) && Object.prototype.hasOwnProperty.call(s, l)), i1 = (i, l, s) => (r) => {
  if (typeof r != "string")
    return r;
  const [c, d, f, m] = r.match(bh);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(d),
    [s]: parseFloat(f),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, f2 = (i) => Gn(0, 255, i), od = {
  ...Ml,
  transform: (i) => Math.round(f2(i))
}, ya = {
  test: /* @__PURE__ */ Sh("rgb", "red"),
  parse: /* @__PURE__ */ i1("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: s, alpha: r = 1 }) => "rgba(" + od.transform(i) + ", " + od.transform(l) + ", " + od.transform(s) + ", " + Al(Us.transform(r)) + ")"
};
function d2(i) {
  let l = "", s = "", r = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), s = i.substring(3, 5), r = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), s = i.substring(2, 3), r = i.substring(3, 4), c = i.substring(4, 5), l += l, s += s, r += r, c += c), {
    red: parseInt(l, 16),
    green: parseInt(s, 16),
    blue: parseInt(r, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Rd = {
  test: /* @__PURE__ */ Sh("#"),
  parse: d2,
  transform: ya.transform
}, $s = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), ai = /* @__PURE__ */ $s("deg"), Un = /* @__PURE__ */ $s("%"), gt = /* @__PURE__ */ $s("px"), h2 = /* @__PURE__ */ $s("vh"), m2 = /* @__PURE__ */ $s("vw"), V0 = {
  ...Un,
  parse: (i) => Un.parse(i) / 100,
  transform: (i) => Un.transform(i * 100)
}, bl = {
  test: /* @__PURE__ */ Sh("hsl", "hue"),
  parse: /* @__PURE__ */ i1("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: s, alpha: r = 1 }) => "hsla(" + Math.round(i) + ", " + Un.transform(Al(l)) + ", " + Un.transform(Al(s)) + ", " + Al(Us.transform(r)) + ")"
}, me = {
  test: (i) => ya.test(i) || Rd.test(i) || bl.test(i),
  parse: (i) => ya.test(i) ? ya.parse(i) : bl.test(i) ? bl.parse(i) : Rd.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ya.transform(i) : bl.transform(i),
  getAnimatableNone: (i) => {
    const l = me.parse(i);
    return l.alpha = 0, me.transform(l);
  }
}, p2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, a1 = /* @__PURE__ */ new RegExp(bh.source), l1 = /* @__PURE__ */ new RegExp(p2.source, "i");
function g2(i) {
  return isNaN(i) && typeof i == "string" && (a1.test(i) || l1.test(i));
}
const s1 = "number", o1 = "color", y2 = "var", v2 = "var(", j0 = "${}", b2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function S2(i) {
  const l = i.toString();
  return a1.test(l) || l1.test(l);
}
function Hs(i) {
  const l = i.toString(), s = [], r = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const m = l.replace(b2, (p) => (me.test(p) ? (r.color.push(d), c.push(o1), s.push(me.parse(p))) : p.startsWith(v2) ? (r.var.push(d), c.push(y2), s.push(p)) : (r.number.push(d), c.push(s1), s.push(parseFloat(p))), ++d, j0)).split(j0);
  return { values: s, split: m, indexes: r, types: c };
}
function T2(i) {
  return Hs(i).values;
}
function r1({ split: i, types: l }) {
  const s = i.length;
  return (r) => {
    let c = "";
    for (let d = 0; d < s; d++)
      if (c += i[d], r[d] !== void 0) {
        const f = l[d];
        f === s1 ? c += Al(r[d]) : f === o1 ? c += me.transform(r[d]) : c += r[d];
      }
    return c;
  };
}
function x2(i) {
  return r1(Hs(i));
}
const E2 = (i) => typeof i == "number" ? 0 : me.test(i) ? me.getAnimatableNone(i) : i, A2 = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : E2(i);
function w2(i) {
  const l = Hs(i);
  return r1(l)(l.values.map((r, c) => A2(r, l.split[c])));
}
const $e = {
  test: g2,
  parse: T2,
  createTransformer: x2,
  getAnimatableNone: w2
};
function rd(i, l, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? i + (l - i) * 6 * s : s < 1 / 2 ? l : s < 2 / 3 ? i + (l - i) * (2 / 3 - s) * 6 : i;
}
function C2({ hue: i, saturation: l, lightness: s, alpha: r }) {
  i /= 360, l /= 100, s /= 100;
  let c = 0, d = 0, f = 0;
  if (!l)
    c = d = f = s;
  else {
    const m = s < 0.5 ? s * (1 + l) : s + l - s * l, p = 2 * s - m;
    c = rd(p, m, i + 1 / 3), d = rd(p, m, i), f = rd(p, m, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: r
  };
}
function Wr(i, l) {
  return (s) => s > 0 ? l : i;
}
const Qt = (i, l, s) => i + (l - i) * s, ud = (i, l, s) => {
  const r = i * i, c = s * (l * l - r) + r;
  return c < 0 ? 0 : Math.sqrt(c);
}, M2 = [Rd, ya, bl], D2 = (i) => M2.find((l) => l.test(i));
function L0(i) {
  const l = D2(i);
  if (!l)
    return !1;
  let s = l.parse(i);
  return l === bl && (s = C2(s)), s;
}
const B0 = (i, l) => {
  const s = L0(i), r = L0(l);
  if (!s || !r)
    return Wr(i, l);
  const c = { ...s };
  return (d) => (c.red = ud(s.red, r.red, d), c.green = ud(s.green, r.green, d), c.blue = ud(s.blue, r.blue, d), c.alpha = Qt(s.alpha, r.alpha, d), ya.transform(c));
}, Nd = /* @__PURE__ */ new Set(["none", "hidden"]);
function O2(i, l) {
  return Nd.has(i) ? (s) => s <= 0 ? i : l : (s) => s >= 1 ? l : i;
}
function z2(i, l) {
  return (s) => Qt(i, l, s);
}
function Th(i) {
  return typeof i == "number" ? z2 : typeof i == "string" ? vh(i) ? Wr : me.test(i) ? B0 : _2 : Array.isArray(i) ? u1 : typeof i == "object" ? me.test(i) ? B0 : R2 : Wr;
}
function u1(i, l) {
  const s = [...i], r = s.length, c = i.map((d, f) => Th(d)(d, l[f]));
  return (d) => {
    for (let f = 0; f < r; f++)
      s[f] = c[f](d);
    return s;
  };
}
function R2(i, l) {
  const s = { ...i, ...l }, r = {};
  for (const c in s)
    i[c] !== void 0 && l[c] !== void 0 && (r[c] = Th(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in r)
      s[d] = r[d](c);
    return s;
  };
}
function N2(i, l) {
  const s = [], r = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], f = i.indexes[d][r[d]], m = i.values[f] ?? 0;
    s[c] = m, r[d]++;
  }
  return s;
}
const _2 = (i, l) => {
  const s = $e.createTransformer(l), r = Hs(i), c = Hs(l);
  return r.indexes.var.length === c.indexes.var.length && r.indexes.color.length === c.indexes.color.length && r.indexes.number.length >= c.indexes.number.length ? Nd.has(i) && !c.values.length || Nd.has(l) && !r.values.length ? O2(i, l) : Is(u1(N2(r, c), c.values), s) : Wr(i, l);
}, U0 = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function V2(i, l) {
  const s = U0.exec(i);
  if (!s)
    return;
  const r = U0.exec(l);
  if (!r || s[2] !== r[2])
    return;
  const c = s[2], d = parseFloat(s[1]), f = parseFloat(r[1]);
  return (m) => Al(Qt(d, f, m)) + c;
}
function xh(i, l, s) {
  if (typeof i == "number" && typeof l == "number" && typeof s == "number")
    return Qt(i, l, s);
  if (typeof i == "string" && typeof l == "string") {
    const c = V2(i, l);
    if (c)
      return c;
  }
  return Th(i)(i, l);
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
function j2(i) {
  let l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set(), r = !1, c = !1;
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
      const A = y && r ? l : s;
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
      if (f = g, r) {
        c = !0;
        return;
      }
      r = !0;
      const v = l;
      l = s, s = v, l.forEach(m), l.clear(), r = !1, c && (c = !1, p.process(g));
    }
  };
  return p;
}
const L2 = 40;
function c1(i, l, s = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let r = !1, c = !0;
  const d = () => r = !0, f = Vr.reduce((k, _) => (k[_] = j2(d), k), {}), { setup: m, read: p, resolveKeyframes: g, preUpdate: v, update: y, preRender: S, render: A, postRender: T } = f, C = () => {
    const k = Hn.useManualTiming, _ = k ? s.timestamp : performance.now();
    r = !1, k || (s.delta = c ? 1e3 / 60 : Math.max(Math.min(_ - s.timestamp, L2), 1)), s.timestamp = _, s.isProcessing = !0, m.process(s), p.process(s), g.process(s), v.process(s), y.process(s), S.process(s), A.process(s), T.process(s), s.isProcessing = !1, r && l && (c = !1, i(C));
  }, E = () => {
    r = !0, c = !0, s.isProcessing || i(C);
  };
  return { schedule: Vr.reduce((k, _) => {
    const X = f[_];
    return k[_] = (Z, R = !1, D = !1) => (r || E(), X.schedule(Z, R, D)), k;
  }, {}), cancel: (k) => {
    for (let _ = 0; _ < Vr.length; _++)
      f[Vr[_]].cancel(k);
  }, state: s, steps: f };
}
const { schedule: Kt, cancel: Hi, steps: cd } = /* @__PURE__ */ c1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : En, !0, ce), f1 = (i) => {
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
}, d1 = (i, l, s = 10) => {
  let r = "";
  const c = Math.max(Math.round(l / s), 2);
  for (let d = 0; d < c; d++)
    r += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${r.substring(0, r.length - 2)})`;
}, Eh = 2e4;
function Ah(i, l = 50, s = Eh, r) {
  let c = 0, d = i.next(c);
  for (; !d.done && c < s; )
    c += l, d = i.next(c);
  return c >= s ? 1 / 0 : c;
}
function B2(i, l = 100, s) {
  const { keyframes: r, velocity: c } = i, d = r && r[r.length - 1] - r[0], f = s({
    ...i,
    velocity: c && d ? c * l / d : c,
    keyframes: [0, l]
  }), m = Math.min(Ah(f), Eh);
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
}, h1 = (i) => i < 0 ? 1 / Math.max(1 + i, Ce.minDamping) : Math.max(1 - i, Ce.minDamping);
function m1(i, l) {
  if (!(i > 1))
    return 1;
  const s = Math.sqrt(i * i - 1), r = i - s, c = i + s, d = 2 * s * Math.exp(-l) * (1 + l);
  return p1((f) => c * Math.exp(-r * f) - r * Math.exp(-c * f) - d, (f) => Math.exp(-c * f) - Math.exp(-r * f), l) / l;
}
function _d(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const U2 = 12;
function p1(i, l, s) {
  let r = s;
  for (let c = 1; c < U2; c++)
    r = r - i(r) / l(r);
  return r;
}
const fd = 1e-3;
function H2({ duration: i = Ce.duration, bounce: l = Ce.bounce }) {
  let s, r;
  const c = h1(l);
  i = Gn(Ce.minDuration, Ce.maxDuration, /* @__PURE__ */ We(i)), c < 1 ? (s = (g) => {
    const v = g * c, y = v * i, S = _d(g, c), A = Math.exp(-y);
    return fd - v / S * A;
  }, r = (g) => {
    const y = g * c * i, S = c * c * g * g * i, A = Math.exp(-y), T = _d(g * g, c);
    return (-s(g) + fd > 0 ? -1 : 1) * -S * A / T;
  }) : (s = (g) => {
    const v = Math.exp(-g * i), y = g * i + 1;
    return -fd + v * y;
  }, r = (g) => {
    const v = Math.exp(-g * i), y = -g * (i * i);
    return v * y;
  });
  const d = 5 / i, f = p1(s, r, d), m = f * m1(c, f * i), p = m * m;
  return {
    stiffness: p,
    damping: c * 2 * Math.sqrt(p),
    duration: /* @__PURE__ */ dn(i)
  };
}
const Vd = (i, l) => (l ? i >= 0 : i > 0) && i < 1 / 0;
function dd(i, l) {
  if (Vd(i, l))
    return i;
}
function G2(i) {
  const l = dd(i.stiffness), s = dd(i.damping, !0), r = dd(i.mass), c = {
    ...i,
    stiffness: l ?? Ce.stiffness,
    damping: s ?? Ce.damping,
    mass: r ?? Ce.mass,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (l ?? s ?? r) === void 0 && (i.duration !== void 0 || i.bounce !== void 0)
  };
  if (c.isTimeDefined) {
    if (i.visualDuration) {
      const d = h1(i.bounce || 0), f = 2 * Math.PI / (i.visualDuration * 1.2) * m1(d, 2 * Math.PI / 1.2);
      c.stiffness = f * f, c.damping = 2 * d * Math.sqrt(c.stiffness);
    } else
      Object.assign(c, H2(c)), c.isResolvedFromDuration = !0;
    (!Vd(c.stiffness) || !Vd(c.damping, !0)) && (c.stiffness = Ce.stiffness, c.damping = Ce.damping);
  }
  return c;
}
function $r(i = Ce.visualDuration, l = Ce.bounce) {
  const s = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i, r = s.keyframes[0], c = s.keyframes[s.keyframes.length - 1], d = { done: !1, value: r }, { stiffness: f, damping: m, mass: p, duration: g, isResolvedFromDuration: v, isTimeDefined: y } = G2({ ...s }), S = (R) => y ? 0 : -/* @__PURE__ */ We(R), A = m / (2 * Math.sqrt(f * p)), T = /* @__PURE__ */ We(Math.sqrt(f / p)), C = A * T, E = {
    target: c,
    delta: c - r,
    velocity: S(s.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, z = () => {
    const R = Math.abs(E.delta) < 5;
    E.restSpeed = s.restSpeed || (R ? Ce.restSpeed.granular : Ce.restSpeed.default), E.restDelta = s.restDelta || (R ? Ce.restDelta.granular : Ce.restDelta.default);
  };
  z();
  let B, k, _;
  if (A < 1) {
    const R = _d(T, A), D = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    _ = () => {
      D.A = (E.velocity + C * E.delta) / R, D.sinC = C * D.A + E.delta * R, D.cosC = C * E.delta - D.A * R;
    };
    const ot = (ut) => {
      ut !== D.t && (D.t = ut, D.env = Math.exp(-C * ut), D.sin = Math.sin(R * ut), D.cos = Math.cos(R * ut));
    };
    B = (ut) => (ot(ut), E.target - D.env * (D.A * D.sin + E.delta * D.cos)), k = (ut) => (ot(ut), D.env * (D.sinC * D.sin + D.cosC * D.cos));
  } else if (A === 1) {
    B = (D) => E.target - Math.exp(-T * D) * (E.delta + (E.velocity + T * E.delta) * D);
    const R = { C: 0 };
    _ = () => {
      R.C = E.velocity + T * E.delta;
    }, k = (D) => Math.exp(-T * D) * (T * R.C * D - E.velocity);
  } else {
    const R = T * Math.sqrt(A * A - 1), D = C - R, ot = C + R, ut = y ? 1 / 0 : 300 / R, F = (lt, et) => Math.exp(et > ut ? -lt * ut - C * (et - ut) : -lt * et), I = { S: 0, F: 0 };
    _ = () => {
      const lt = (E.velocity + C * E.delta) / R;
      I.S = (E.delta + lt) / 2, I.F = (E.delta - lt) / 2;
    }, B = (lt) => E.target - I.S * F(D, lt) - I.F * F(ot, lt), k = (lt) => D * I.S * F(D, lt) + ot * I.F * F(ot, lt);
  }
  _();
  const X = v && g || null, Z = {
    calculatedDuration: X,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (R, D) => {
      E.target = R[R.length - 1], E.delta = E.target - R[0], E.velocity = S(D), s.restSpeed && s.restDelta || z(), Z.calculatedDuration = X, d.done = !1, _();
    },
    velocity: (R) => /* @__PURE__ */ dn(k(R)),
    next: (R) => {
      const D = B(R);
      if (v)
        d.done = R >= g;
      else {
        const ot = /* @__PURE__ */ dn(k(R));
        d.done = Math.abs(ot) <= E.restSpeed && Math.abs(E.target - D) <= E.restDelta;
      }
      return d.value = d.done ? E.target : D, d;
    },
    toString: () => {
      const R = Math.min(Ah(Z), Eh), D = d1((ot) => Z.next(R * ot).value, R, 30);
      return R + "ms " + D;
    },
    toTransition: () => {
    }
  };
  return Z;
}
$r.applyToOptions = (i) => {
  const l = B2(i, 100, $r);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ dn(l.duration), i.type = "keyframes", i;
};
function tu({ keyframes: i, velocity: l = 0, power: s = 0.8, timeConstant: r = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: f, min: m, max: p, restDelta: g = 0.5, restSpeed: v }) {
  const y = i[0], S = {
    done: !1,
    value: y
  }, A = (R) => R < m || R > p, T = (R) => m === void 0 ? p : p === void 0 || Math.abs(m - R) < Math.abs(p - R) ? m : p;
  let C = s * l;
  const E = y + C, z = f === void 0 ? E : f(E);
  z !== E && (C = z - y);
  const B = (R) => -C * Math.exp(-R / r), k = (R) => {
    const D = B(R);
    S.done = Math.abs(D) <= g, S.value = S.done ? z : z + D;
  };
  let _, X;
  const Z = (R) => {
    A(S.value) && (_ = R, X = $r({
      keyframes: [S.value, T(S.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -B(R) / r * 1e3,
      damping: c,
      stiffness: d,
      restDelta: g,
      restSpeed: v
    }));
  };
  return Z(0), {
    calculatedDuration: null,
    next: (R) => {
      let D = !1;
      return !X && _ === void 0 && (D = !0, k(R), Z(R)), _ !== void 0 && R >= _ ? X.next(R - _) : (!D && k(R), S);
    }
  };
}
function k2(i, l, s) {
  const r = [], c = s || Hn.mix || xh, d = i.length - 1;
  for (let f = 0; f < d; f++) {
    let m = c(i[f], i[f + 1]);
    if (l) {
      const p = Array.isArray(l) ? l[f] || En : l;
      m = Is(p, m);
    }
    r.push(m);
  }
  return r;
}
function Y2(i, l, { clamp: s = !0, ease: r, mixer: c } = {}) {
  const d = i.length;
  if (du(d === l.length), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const f = i[0] === i[1];
  i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = k2(l, r, c), p = m.length, g = (v) => {
    if (f && v < i[0])
      return l[0];
    let y = 0;
    if (p > 1)
      for (; y < i.length - 2 && !(v < i[y + 1]); y++)
        ;
    const S = /* @__PURE__ */ xa(i[y], i[y + 1], v);
    return m[y](S);
  };
  return s ? (v) => g(Gn(i[0], i[d - 1], v)) : g;
}
function q2(i, l) {
  const s = i[i.length - 1];
  for (let r = 1; r <= l; r++) {
    const c = /* @__PURE__ */ xa(0, l, r);
    i.push(Qt(s, 1, c));
  }
}
function g1(i) {
  const l = [0];
  return q2(l, i.length - 1), l;
}
function X2(i, l) {
  return i.map((s) => s * l);
}
function Q2(i, l) {
  return i.map(() => l || gh).splice(0, i.length - 1);
}
function Bi({ duration: i = 300, keyframes: l, times: s, ease: r = "easeInOut" }) {
  const c = /* @__PURE__ */ i2(r) ? r.map(_0) : _0(r) || gh, d = {
    done: !1,
    value: l[0]
  };
  if (l.length === 2 && !Array.isArray(c) && (!s || s.length !== 2 || s[0] === 0 && s[1] === 1)) {
    const [p, g] = l, v = p === g ? void 0 : (Hn.mix || xh)(p, g);
    return {
      calculatedDuration: i,
      next: (y) => (d.value = v ? v(c(i > 0 ? Gn(0, 1, y / i) : 1)) : g, d.done = y >= i, d)
    };
  }
  const f = X2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === l.length ? s : g1(l),
    i
  ), m = Y2(f, l, {
    ease: Array.isArray(c) ? c : Q2(l, c)
  });
  return {
    calculatedDuration: i,
    next: (p) => (d.value = m(p), d.done = p >= i, d)
  };
}
const Z2 = 5;
function K2(i, l, s) {
  const r = Math.max(l - Z2, 0);
  return /* @__PURE__ */ Kb(s - i(r), l - r);
}
function P2(i, l, s = 0) {
  return l <= 0 ? s : i.velocity ? i.velocity(l) : K2((r) => i.next(r).value, l, i.next(l).value);
}
const F2 = (i) => i !== null;
function Gs(i, { repeat: l, repeatType: s = "loop" }, r, c = 1) {
  const d = i.filter(F2), m = c < 0 || l && s !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !m || r === void 0 ? d[m] : r;
}
const J2 = {
  decay: tu,
  inertia: tu,
  tween: Bi,
  keyframes: Bi,
  spring: $r
};
function y1(i) {
  typeof i.type == "string" && (i.type = J2[i.type]);
}
const I2 = 40, v1 = (i, l) => l - i > I2 && !Hn.useManualTiming ? l : i;
function b1(i, l) {
  return {
    kind: i,
    animation: l,
    timestamp: te.now(),
    frameTimestamp: ce.timestamp,
    frameIsProcessing: ce.isProcessing
  };
}
function S1(i, l, s) {
  const r = globalThis.__MOTION_INSPECT__;
  if (r)
    try {
      r({
        ...b1("animation-start", i),
        options: s ? { ...l, ...s } : l
      });
    } catch {
    }
}
function W2(i, l) {
  const s = globalThis.__MOTION_INSPECT__;
  if (s)
    try {
      s({
        ...b1("layout-animation-start", i),
        node: l
      });
    } catch {
    }
}
class wh {
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
const $2 = (i) => i / 100, jd = (i) => Math.round(i * 1e4) / 1e4;
class ks extends wh {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: s } = this.options;
      s && s.updatedAt !== te.now() && this.tick(te.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause(), S1(this, this.options);
  }
  initAnimation() {
    const { options: l } = this;
    y1(l);
    const { type: s = Bi, repeat: r = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = l;
    let { keyframes: m } = l;
    const p = s || Bi;
    p !== Bi && typeof m[0] != "number" && (this.mixKeyframes = Is($2, xh(m[0], m[1])), m = [0, 100]);
    const g = p(m === l.keyframes ? l : { ...l, keyframes: m });
    d === "mirror" && (this.mirroredGenerator = p({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = Ah(g));
    const { calculatedDuration: v } = g;
    this.calculatedDuration = v, this.resolvedDuration = v + c, this.totalDuration = this.resolvedDuration * (r + 1) - c, this.generator = g;
  }
  updateTime(l) {
    const s = Math.round(l - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = s;
  }
  tick(l, s = !1) {
    const { generator: r, totalDuration: c, calculatedDuration: d } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: f = 0, keyframes: m, type: p, onUpdate: g, finalKeyframe: v } = this.options;
    this.startTime === this.pendingStartTime && (this.startTime = v1(this.startTime, l)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), s ? this.currentTime = l : this.updateTime(l);
    const y = this.currentTime - f * (this.playbackSpeed >= 0 ? 1 : -1), S = this.playbackSpeed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    const A = this.generate(this.currentTime, S);
    let { done: T } = A;
    !S && d !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const C = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return C && p !== tu && (A.value = Gs(m, this.options, v, this.speed)), g && g(A.value), C && this.finish(), A;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(l) {
    return this.holdTime ?? jd((l - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(l, s) {
    const { options: r, totalDuration: c } = this, d = this.at(l) - (r.delay || 0);
    return d >= c && r.type !== tu ? Gs(r.keyframes, r, s ? void 0 : r.finalKeyframe) : this.generate(Math.max(d, 0), d < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(l, s) {
    const { generator: r, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: m } = this, { keyframes: p, repeat: g, repeatType: v, repeatDelay: y } = this.options;
    let S = l, A = r;
    if (g) {
      const C = Math.min(l, c) / m;
      let E = Math.floor(C), z = C % 1;
      !z && C >= 1 && (z = 1), z === 1 && E--, E = Math.min(E, g + 1), E % 2 && (v === "reverse" ? (z = 1 - z, y && (z -= y / m)) : v === "mirror" && (A = f)), S = Gn(0, 1, z) * m;
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
    return P2(this.generator, this.currentTime, this.options.velocity);
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
    const { driver: l = f1, startTime: s } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = s ?? (this.pendingStartTime = r)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
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
const tw = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function ew(i) {
  const [l, s] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [r] = s.match(bh) || [];
  if (!r)
    return i;
  const c = s.replace(r, "");
  let d = tw.has(l) ? 1 : 0;
  return r !== s && (d *= 100), l + "(" + d + c + ")";
}
const nw = /\b([a-z-]*)\(.*?\)/gu, Ld = {
  ...$e,
  getAnimatableNone: (i) => {
    const l = i.match(nw);
    return l ? l.map(ew).join(" ") : i;
  }
}, Bd = {
  ...$e,
  getAnimatableNone: (i) => {
    const l = $e.parse(i);
    return $e.createTransformer(i)(l.map((r) => typeof r == "number" ? 0 : typeof r == "object" ? { ...r, alpha: 1 } : r));
  }
}, H0 = {
  ...Ml,
  transform: Math.round
}, iw = {
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
  originX: V0,
  originY: V0,
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
  ...iw,
  zIndex: H0,
  // SVG
  fillOpacity: Us,
  strokeOpacity: Us,
  numOctaves: H0
}, aw = {
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
  filter: Ld,
  WebkitFilter: Ld,
  mask: Bd,
  WebkitMask: Bd
}, T1 = (i) => aw[i], lw = /* @__PURE__ */ new Set([Ld, Bd]);
function Ch(i, l) {
  let s = T1(i);
  return lw.has(s) || (s = $e), s.getAnimatableNone ? s.getAnimatableNone(l) : void 0;
}
function sw(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const va = (i) => i * 180 / Math.PI, Ud = (i) => {
  const l = va(Math.atan2(i[1], i[0]));
  return Hd(l);
}, ow = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: Ud,
  rotateZ: Ud,
  skewX: (i) => va(Math.atan(i[1])),
  skewY: (i) => va(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Hd = (i) => (i = i % 360, i < 0 && (i += 360), i), G0 = Ud, k0 = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), Y0 = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), rw = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: k0,
  scaleY: Y0,
  scale: (i) => (k0(i) + Y0(i)) / 2,
  rotateX: (i) => Hd(va(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Hd(va(Math.atan2(-i[2], i[0]))),
  rotateZ: G0,
  rotate: G0,
  skewX: (i) => va(Math.atan(i[4])),
  skewY: (i) => va(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function qs(i) {
  return i.includes("scale") ? 1 : 0;
}
function Gd(i, l) {
  if (!i || i === "none")
    return qs(l);
  const s = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, c;
  if (s)
    r = rw, c = s;
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = ow, c = m;
  }
  if (!c)
    return qs(l);
  const d = r[l], f = c[1].split(",").map(cw);
  return typeof d == "function" ? d(f) : f[d];
}
const uw = (i, l) => {
  const { transform: s = "none" } = getComputedStyle(i);
  return Gd(s, l);
};
function cw(i) {
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
], Ui = /* @__PURE__ */ new Set([...li, "pathRotation"]), q0 = (i) => i === Ml || i === gt, fw = /* @__PURE__ */ new Set(["x", "y", "z"]), dw = li.filter((i) => !fw.has(i));
function hw(i) {
  const l = [];
  return dw.forEach((s) => {
    const r = i.getValue(s);
    if (r !== void 0) {
      const c = r.get(), d = s.startsWith("scale") ? 1 : 0;
      if (c === d)
        return;
      l.push([s, c]), r.set(d);
    }
  }), l;
}
const mw = /* @__PURE__ */ new Set(["bottom", "right"]);
function X0(i, l, s, r, c, d) {
  const f = parseFloat(i);
  if (!isNaN(f))
    return f;
  const { min: m, max: p } = l()[s], g = p - m;
  return d === "border-box" ? g : g - parseFloat(r) - parseFloat(c);
}
const ba = {
  // Dimensions
  width: ({ width: i, paddingLeft: l = "0", paddingRight: s = "0", boxSizing: r }, c) => X0(i, c, "x", l, s, r),
  height: ({ height: i, paddingTop: l = "0", paddingBottom: s = "0", boxSizing: r }, c) => X0(i, c, "y", l, s, r),
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
  x: ({ transform: i }) => Gd(i, "x"),
  y: ({ transform: i }) => Gd(i, "y")
};
ba.translateX = ba.x;
ba.translateY = ba.y;
const Sa = /* @__PURE__ */ new Set();
let kd = !1, Yd = !1, qd = !1;
function x1() {
  if (Yd) {
    const i = [], l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
    Sa.forEach((c) => {
      c.needsMeasurement && (i.push(c), l.add(c.element), mw.has(c.name) && s.add(c.element));
    });
    const r = /* @__PURE__ */ new Map();
    s.forEach((c) => {
      const d = hw(c);
      d.length && (r.set(c, d), c.render());
    }), i.forEach((c) => c.measureInitialState()), l.forEach((c) => {
      c.render();
      const d = r.get(c);
      d && d.forEach(([f, m]) => {
        c.getValue(f)?.set(m);
      });
    }), i.forEach((c) => c.measureEndState()), i.forEach((c) => {
      c.suspendedScrollY !== void 0 && window.scrollTo(0, c.suspendedScrollY);
    });
  }
  Yd = !1, kd = !1, Sa.forEach((i) => i.complete(qd)), Sa.clear();
}
function E1() {
  Sa.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Yd = !0);
  });
}
function pw() {
  qd = !0, E1(), x1(), qd = !1;
}
function gw(i, l, s) {
  if (typeof i == "string") {
    if (dh(i) || hh(i))
      return parseFloat(i);
    if (!$e.test(i) && $e.test(s))
      return Ch(l, s);
  }
  return i ?? void 0;
}
class Mh {
  constructor(l, s, r, c, d, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = s, this.name = r, this.motionValue = c, this.element = d, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (Sa.add(this), kd || (kd = !0, Kt.read(E1), Kt.resolveKeyframes(x1))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: s, element: r, motionValue: c } = this;
    if (l[0] === null) {
      const d = c?.get(), f = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (r && s) {
        const m = gw(r.readValue(s, f), s, f);
        m !== void 0 && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = f), c && d === void 0 && c.set(l[0]);
    }
    sw(l);
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
const yw = (i) => i.startsWith("--");
function A1(i, l, s) {
  yw(l) ? i.style.setProperty(l, s) : i.style[l] = s;
}
const vw = {};
function w1(i, l) {
  const s = /* @__PURE__ */ Zb(i);
  return () => vw[l] ?? s();
}
const bw = /* @__PURE__ */ w1(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Dh = /* @__PURE__ */ w1(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Sl = ([i, l, s, r]) => `cubic-bezier(${i}, ${l}, ${s}, ${r})`, Xd = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: /* @__PURE__ */ Sl([0, 0.65, 0.55, 1]),
  circOut: /* @__PURE__ */ Sl([0.55, 0, 1, 0.45]),
  backIn: /* @__PURE__ */ Sl([0.31, 0.01, 0.66, -0.59]),
  backOut: /* @__PURE__ */ Sl([0.33, 1.53, 0.69, 0.99])
};
function C1(i, l) {
  if (i)
    return typeof i == "function" ? Dh() ? d1(i, l) : "ease-out" : /* @__PURE__ */ yh(i) ? Sl(i) : Array.isArray(i) ? i.map((s) => C1(s, l) || Xd.easeOut) : Xd[i];
}
function Sw(i, l, s, { delay: r = 0, duration: c = 300, repeat: d = 0, repeatType: f = "loop", ease: m = "easeOut", times: p } = {}, g = void 0) {
  const v = {
    [l]: s
  };
  p && (v.offset = p);
  const y = C1(m, c);
  Array.isArray(y) && (v.easing = y);
  const S = {
    delay: r,
    duration: c,
    easing: Array.isArray(y) ? "linear" : y,
    fill: "both",
    iterations: d + 1,
    direction: f === "reverse" ? "alternate" : "normal"
  };
  return g && (S.pseudoElement = g), i.animate(v, S);
}
function M1(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Tw({ type: i, ...l }) {
  return M1(i) && Dh() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class D1 extends wh {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: s, name: r, keyframes: c, pseudoElement: d, allowFlatten: f = !1, finalKeyframe: m, onComplete: p } = l;
    this.isPseudoElement = !!d, this.allowFlatten = f, this.options = l, du(typeof l.type != "string");
    const g = Tw(l);
    this.animation = Sw(s, r, c, g, d), g.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = Gs(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), A1(s, r, v), this.animation.cancel();
      }
      p?.(), this.notifyFinished();
    }, S1(this, l, g);
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
  attachTimeline({ timeline: l, onAttach: s, observe: r }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && bw() ? (this.animation.timeline = l, s?.(this.animation), En) : r(this);
  }
}
const O1 = {
  anticipate: Wb,
  backInOut: Ib,
  circInOut: t1
};
function xw(i) {
  return i in O1;
}
function Ew(i) {
  typeof i.ease == "string" && xw(i.ease) && (i.ease = O1[i.ease]);
}
const eu = 10;
class Aw extends D1 {
  constructor(l) {
    Ew(l), y1(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
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
      const { motionValue: s, onUpdate: r, onComplete: c, onPlay: d, onStop: f, element: m, ...p } = this.options;
      this.sampler = new ks({ ...p, autoplay: !1 }), this.sampler.stop();
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
    const { motionValue: s, element: r, name: c } = this.options;
    if (!s)
      return;
    if (l !== void 0) {
      s.set(l);
      return;
    }
    const { speed: d } = this, f = this.elapsed(), m = this.state === "running" && d ? Gn(0, eu, f) : 0, p = this.sample(f);
    r && c && A1(r, c, p), s.setWithVelocity(this.sample(f - m * Math.sign(d)), p, m / Math.abs(d || 1));
  }
}
const Q0 = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
($e.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function ww(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let s = 0; s < i.length; s++)
    if (i[s] !== l)
      return !0;
}
function Cw(i, l, s, r) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = i[i.length - 1], f = Q0(c, l), m = Q0(d, l);
  return !f || !m ? !1 : ww(i) || (s === "spring" || M1(s)) && r;
}
function Qd(i) {
  i.duration = 0, i.type = "keyframes";
}
const Zd = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Mw = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Dw(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && Mw.test(i[l]))
      return !0;
  return !1;
}
const Z0 = /* @__PURE__ */ new Set([
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
]), z1 = /* @__PURE__ */ Zb(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Ow(i) {
  const { motionValue: l, name: s, repeatDelay: r, repeatType: c, damping: d, type: f, keyframes: m } = i;
  if (!s || !(Zd.has(s) || Z0.has(s)))
    return !1;
  const p = l?.owner?.current;
  if (!(p instanceof HTMLElement) && !(p instanceof SVGElement))
    return !1;
  const { onUpdate: g, transformTemplate: v } = l.owner.getProps();
  return z1() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Zd.has(s) || Z0.has(s) && Dw(m)) && (s !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !g && !r && c !== "mirror" && d !== 0 && f !== "inertia";
}
const nu = (i, l) => l && typeof i == "number" ? l.transform(i) : i, R1 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, zw = li.length;
function N1(i, l, s) {
  let r = "", c = !0;
  for (let f = 0; f < zw; f++) {
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
        const y = R1[m] || m;
        r += `${y}(${v}) `;
      }
      s && (l[m] = v);
    }
  }
  const d = i.pathRotation;
  return d && (c = !1, r += `rotate(${nu(d, Ys.pathRotation)}) `), r = r.trim(), s ? r = s(l, c ? "" : r) : c && (r = "none"), r;
}
const wl = /* @__PURE__ */ new WeakMap(), Rw = 200, hd = 1e-3, Nw = 0.1, _w = 1e-3, Vw = 100, jw = (i) => /^(linear|ease(In|Out|InOut))$/.test(i), md = (i, l) => i - l, K0 = (i, l, s) => {
  const r = [];
  for (let c = 0; c <= s; c++)
    r.push(Qt(i, l, c / s));
  return r;
}, Gr = (i) => i.motionValue.owner, pd = (i) => wl.get(i), Tl = (i, l) => i.latestValues ? i.latestValues[l] : i.getValue(l)?.get(), Lw = ({ name: i, motionValue: l }) => i && li.includes(i) && l?.owner?.current instanceof HTMLElement && z1() && Dh();
function Bw(i) {
  const l = Gr(i), { onUpdate: s, transformTemplate: r } = l.getProps();
  return (
    /**
     * A handoff from an optimised appear animation is already running
     * on its own WAAPI animation. onUpdate needs every value, every
     * frame.
     */
    !i.isHandoff && !s && !i.hasOnUpdate && /**
     * transformTemplate could output anything.
     */
    !r && i.type !== "inertia" && /**
     * A literal transform, or pathRotation, replaces or adds to the
     * transform we'd build. styleEffect builds its own as "none".
     */
    (Tl(l, "transform") || "none") === "none" && !Tl(l, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !l.projection?.isProjecting()
  );
}
class Uw extends ks {
  constructor(l) {
    const s = Gr(l).current, { driver: r = f1 } = l, c = Bw(l);
    l.driver = (f) => {
      const m = r(f);
      return {
        js: m,
        now: m.now,
        start: (p = !0) => {
          const g = pd(s);
          !g || g.isJS ? m.start(p) : g.schedule(!1, !p);
        },
        stop: () => {
          m.stop();
          const p = pd(s);
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
    return pd(Gr(this.options).current);
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
    const { startTime: l, speed: s, totalDuration: r } = this, { delay: c = 0, repeatType: d } = this.options;
    return this.holdTime !== null ? [1 / 0, 0] : r === 1 / 0 ? [
      l + c / s,
      this.resolvedDuration * (d === "loop" ? 1 : 2) / s || 1
    ] : [l + (c + r) / s, 0];
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
    const { keyframes: l, type: s, ease: r, times: c, repeat: d, delay: f = 0 } = this.options, m = /* @__PURE__ */ yh(r) ? Sl(r) : jw(r) && Xd[r];
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
    const { startTime: r, speed: c, resolvedDuration: d, options: f } = this, { delay: m = 0, repeat: p = 0, repeatDelay: g = 0, repeatType: v, times: y, keyframes: S, type: A } = f, T = (A || Bi) === Bi ? y || g1(S) : [0, 1], C = r + m / c, E = [];
    if (this.holdTime !== null || !(d > 0))
      return E;
    for (let z = Math.max(0, Math.floor((l - C) * c / d)); z <= p; z++) {
      const B = C + z * d / c;
      if (B > s)
        break;
      for (const k of T) {
        const _ = B + (z % 2 && v && v !== "loop" ? 1 - k : k) * (d - g) / c;
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
    this.isStopped || ((this.group || Hw(Gr(this.options))).tracks.add(this), super.play());
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
    return this.isAccelerated() ? /* @__PURE__ */ We(Gn(0, this.totalDuration, this.at(te.now()) - (this.options.delay || 0))) : super.time;
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
function Hw(i) {
  const l = i.current, s = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map();
  let c = {}, d = [], f = /* @__PURE__ */ new Map(), m = [], p = !1, g = !1, v = !1, y = -1 / 0;
  const S = (F) => {
    for (const I of s)
      if (I.name === F)
        return !0;
  }, A = (F, I) => {
    const lt = {};
    for (const et of F === void 0 ? li : d) {
      const nt = r.get(et), q = F === void 0 ? Tl(i, et) : nt ? nt.sampleAt(I > F && !nt.timing()[1] ? I : F) : c[et];
      q !== void 0 && (lt[et] = q);
    }
    return lt;
  }, T = (F, I) => {
    let lt = "";
    const et = A(F, I);
    for (const nt in et)
      lt += (R1[nt] || nt) + "(" + nu(et[nt], Ys[nt]) + ") ";
    return lt || "none";
  }, C = (F = A()) => {
    l.style.transform = N1(F, {});
  }, E = (F = !0) => {
    F && C(), m.forEach(({ animation: I }) => I.cancel()), m = [];
  }, z = (F, I, lt = 1 / 0) => {
    const et = { animation: F, offset: I, end: lt };
    F.startTime = te.now() + I, lt < 1 / 0 && (F.onfinish = () => {
      et.isDone = !0, m.some((nt) => nt.end === 1 / 0) && (F.cancel(), m = m.filter((nt) => nt !== et)), ut.schedule(!1);
    }), F.oncancel = () => m.includes(et) && ut.demote(), m.push(et);
  }, B = (F, I, lt) => {
    const et = (q, J) => Math.abs(F(J) - F(q)), nt = et(I, lt);
    for (; lt - I > 0.01; ) {
      const q = (I + lt) / 2;
      et(I, q) > et(q, lt) ? lt = q : I = q;
    }
    return et(I, lt) > nt / 2 ? [I, lt] : [];
  }, k = (F, I, lt, et) => {
    const nt = Math.min(Rw, Math.max(2, Math.ceil((lt - I) / eu)));
    if (et.length * 4 > nt)
      return;
    const q = K0(I, lt, nt).concat(et).sort(md), J = (vt) => /* @__PURE__ */ xa(I, lt, vt);
    let it, at;
    for (const vt of F) {
      const At = q.map((W) => vt.numberAt(W)), [w] = At, L = At[At.length - 1] - w, tt = At.map((W) => L ? (W - w) / L : W - w);
      if (L) {
        if (!it)
          it = tt, at = (W) => (vt.numberAt(W) - w) / L;
        else if (tt.some((W, ft) => !(Math.abs(W - it[ft]) <= hd)))
          return;
      } else if (tt.some((W) => !(Math.abs(W) <= hd)))
        return;
    }
    if (!it || it.every((vt, At) => Math.abs(vt - J(q[At])) <= hd))
      return "linear";
    const Y = [], yt = (vt, At = at(vt)) => Y.push(jd(At) + " " + jd(J(vt) * 100) + "%");
    return it.forEach((vt, At) => {
      At && Math.abs(vt - it[At - 1]) > 0.2 && B(at, q[At - 1], q[At]).forEach((w) => yt(w)), yt(q[At], vt);
    }), "linear(" + Y + ")";
  }, _ = (F, I, lt, et) => {
    const nt = [I], q = (Y, yt) => F.every((vt) => !(Math.abs(vt.numberAt((Y + yt) / 2) - (vt.numberAt(Y) + vt.numberAt(yt)) / 2) > (vt.name.startsWith("scale") ? _w : Nw))), J = (Y, yt, vt) => {
      if (yt - Y < 1 || q(Y, yt))
        nt.push(yt);
      else if (vt < 4)
        J(Y, (Y + yt) / 2, vt + 1), J((Y + yt) / 2, yt, vt + 1);
      else {
        for (const At of F)
          nt.push(...B((w) => At.numberAt(w), Y, yt));
        nt.push(yt);
      }
    }, it = K0(I, lt, Math.ceil((lt - I) / 100));
    for (const Y of et)
      it.push(Y, Math.min(Y + 0.01, lt));
    let at = I;
    for (const Y of it.sort(md))
      Y > at && J(at, Y, 0), at = Y;
    return nt.sort(md);
  }, X = (F) => {
    let I;
    for (const lt of F) {
      const et = lt.tween();
      if (!et || I?.some((nt, q) => q < 2 ? Math.abs(et[q] - nt) > 1 : et[q] !== nt))
        return;
      I = et;
    }
    return I;
  }, Z = (F, I, lt, et = { fill: "both" }, nt, q) => {
    const J = F.flatMap((vt) => vt.boundaries(I, lt)), it = q || k(F, I, lt, J), at = it ? [I, lt] : _(F, I, lt, J), Y = at.map((vt) => T(vt, nt));
    let yt = { transform: Y };
    return it || (yt.offset = at.map((vt) => /* @__PURE__ */ xa(I, lt, vt))), Y.every((vt) => vt === Y[0]) && (C(A(I, nt)), yt = null), l.animate(yt, {
      ...et,
      duration: lt - I,
      easing: it || "linear"
    });
  }, R = (F) => {
    let I = F, lt = 0, et = 0;
    const nt = [], q = [], J = /* @__PURE__ */ new Set();
    r.clear(), f = /* @__PURE__ */ new Map();
    for (const at of s) {
      r.set(at.name, at);
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
        q.push(at);
      } else
        J.add(Y);
      nt.push(at), I = Math.max(I, Y);
    }
    c = {}, d = li.filter((at) => {
      if (r.has(at))
        return !0;
      const Y = c[at] = Tl(i, at);
      return Y !== void 0 && parseFloat(Y) !== (at.startsWith("scale") ? 1 : 0);
    }), E(!1);
    const it = !lt && X(nt);
    try {
      if (it && it[1] > F) {
        const [at, Y, yt] = it;
        z(Z(nt, at, Y, void 0, void 0, yt), at - F, Y - at);
      } else I > F && (z(Z(nt, F, I), 0, I - F), J.forEach((at) => at < I - 1 && z(l.animate(null, {
        duration: at - F
      }), 0, at - F)));
      if (lt) {
        const at = et + Math.floor((I - et) / lt) * lt;
        z(Z(q, at, at + lt, {
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
  }, D = (F) => {
    let I, lt = 0;
    for (const et of s) {
      const nt = f.get(et);
      if (!nt)
        return !1;
      const [q, J, it] = nt, at = et.at(F), Y = et.timing()[0] === 1 / 0;
      if (it) {
        if (Y && at === q)
          continue;
        return !1;
      }
      const yt = (at - q) / J, vt = Y ? 0 : et.speed / J;
      if (I === void 0)
        I = yt, lt = vt;
      else if (Math.abs(yt - I) > 1 || vt !== lt)
        return !1;
    }
    if (I === void 0)
      return !0;
    if (!m.length)
      return !1;
    for (const { offset: et, end: nt, isDone: q } of m) {
      const J = I - et;
      if (nt < 1 / 0 && (q ? J < nt - 1 : J < 0 || J >= nt))
        return !1;
    }
    for (const { animation: et, offset: nt, isDone: q } of m) {
      if (q)
        continue;
      const J = I - nt;
      lt ? (et.playbackRate = lt, et.startTime = F - J / lt) : (et.pause(), et.currentTime = J);
    }
    return !0;
  }, ot = () => {
    const F = te.now();
    if (ut.isJS || (ut.isFinishing = !0, s.forEach((et) => {
      const [nt, q] = et.timing();
      et.state === "running" && et.speed > 0 && !q && nt <= F + 1 && (et.complete(), c[et.name] = Tl(i, et.name), f.has(et) || (p = !0));
    }), ut.isFinishing = !1), g = !1, s.forEach(({ state: et }, nt) => {
      (et === "idle" || et === "finished") && s.delete(nt);
    }), !s.size) {
      wl.delete(l), ut.isJS || E();
      return;
    }
    for (const et of s)
      if (!et.canAccelerate)
        return ut.demote(!0);
    ut.isJS && (ut.isJS = !1, p = !0, s.forEach((et) => et.js?.stop()));
    const I = p, lt = v;
    if (p = v = !1, I || !D(F)) {
      if (lt) {
        if (F - y < Vw)
          return ut.demote();
        y = F;
      }
      if (!R(F))
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
          if (Tl(i, F) !== c[F] && !S(F))
            return ut.schedule(!0, !0);
      }
    },
    demote(F) {
      ut.isJS || (s.forEach((I) => {
        I.isAccelerated() && I.sync(), F || (I.canAccelerate = !1);
      }), ut.isJS = !0, f = /* @__PURE__ */ new Map(), E(), s.forEach((I) => I.state === "running" && I.js?.start()));
    }
  };
  return wl.set(l, ut), ut;
}
class Gw extends wh {
  constructor(l) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = te.now();
    const { keyframes: s, name: r, motionValue: c, element: d } = l, f = l;
    f.autoplay ?? (f.autoplay = !0), f.delay ?? (f.delay = 0), f.type ?? (f.type = "keyframes"), f.repeat ?? (f.repeat = 0), f.repeatDelay ?? (f.repeatDelay = 0), f.repeatType ?? (f.repeatType = "loop");
    const m = d?.KeyframeResolver || Mh;
    this.keyframeResolver = new m(s, (p, g, v) => this.onKeyframesResolved(p, g, f, !v), r, c, d), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, s, r, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: m, delay: p, isHandoff: g, onUpdate: v } = r;
    this.resolvedAt = te.now();
    let y = !0;
    Cw(l, d, f, m) || (y = !1, (Hn.instantAnimations || !p) && v?.(Gs(l, r, s)), l[0] = l[l.length - 1], Qd(r), r.repeat = 0);
    const { onComplete: S } = r;
    r.finalKeyframe = s, r.keyframes = l, r.onComplete = () => {
      S?.(), this.notifyFinished();
    };
    const A = y && !g && Ow(r), T = !A && Lw(r);
    c && (A || T || this.resolvedAt !== this.createdAt) && (r.startTime ?? (r.startTime = v1(this.createdAt, this.resolvedAt)));
    let C;
    if (A) {
      r.element = r.motionValue?.owner?.current;
      try {
        C = new Aw(r);
      } catch {
        C = new ks(r);
      }
    } else T ? C = new Uw(r) : C = new ks(r);
    this.pendingTimeline && (this.stopTimeline = C.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = C;
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
    return this._animation || (this.keyframeResolver?.resume(), pw()), this._animation;
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
function _1(i, l, s, r = 0, c = 1) {
  const d = Array.from(i).sort((g, v) => g.sortNodePosition(v)).indexOf(l), f = i.size, m = (f - 1) * r;
  return typeof s == "function" ? s(d, f) : c === 1 ? d * r : m - d * r;
}
const P0 = 30, kw = (i) => !isNaN(parseFloat(i));
class Yw {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, s = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r) => {
      const c = te.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && (this.notifyChange(), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = s.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = te.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = kw(this.current));
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
    var r;
    return l === "change" ? this.onChangeSubscribe(s) : ((r = this.events)[l] || (r[l] = new Ir())).add(s);
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
  setWithVelocity(l, s, r) {
    this.set(s), this.prev = void 0, this.prevFrameValue = l, this.prevUpdatedAt = this.updatedAt - r;
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > P0)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, P0);
    return /* @__PURE__ */ Kb(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
      let r = !1, c;
      c = l(() => {
        r = !0, this.events.animationComplete?.notify(), this.animation === c && this.clearAnimation(), s();
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
function Cl(i, l) {
  return new Yw(i, l);
}
function V1(i, l) {
  if (i?.inherit && l) {
    const { inherit: s, ...r } = i;
    return { ...l, ...r };
  }
  return i;
}
function Oh(i, l) {
  const s = i?.[l] ?? i?.default ?? i;
  return s !== i ? V1(s, i) : s;
}
const qw = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Xw = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Qw = {
  type: "keyframes",
  duration: 0.8
}, Zw = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Kw = (i, { keyframes: l }) => l.length > 2 ? Qw : Ui.has(i) ? i.startsWith("scale") ? Xw(l[1]) : qw : Zw, Pw = /* @__PURE__ */ new Set([
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
function Fw(i) {
  for (const l in i)
    if (!Pw.has(l))
      return !0;
  return !1;
}
const zh = (i, l, s, r = {}, c, d) => (f) => {
  const m = Oh(r, i) || {}, p = m.delay || r.delay || 0;
  let { elapsed: g = 0 } = r;
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
  Fw(m) || Object.assign(v, Kw(i, v)), v.duration && (v.duration = /* @__PURE__ */ dn(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ dn(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let y = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Qd(v), v.delay === 0 && (y = !0)), (Hn.instantAnimations || Hn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, Qd(v), v.delay = 0), v.allowFlatten = !m.type && !m.ease, y && !d && l.get() !== void 0) {
    const S = Gs(v.keyframes, m);
    if (S !== void 0) {
      Kt.update(() => {
        v.onUpdate(S), v.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new ks(v) : new Gw(v);
}, Jw = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function Iw(i) {
  const l = Jw.exec(i);
  if (!l)
    return [,];
  const [, s, r, c] = l;
  return [`--${s ?? r}`, c];
}
function j1(i, l, s = 1) {
  const [r, c] = Iw(i);
  if (!r)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(r);
  if (d) {
    const f = d.trim();
    return dh(f) ? parseFloat(f) : f;
  }
  return vh(c) ? j1(c, l, s + 1) : c;
}
function Ww(i) {
  const l = [{}, {}];
  return i?.values.forEach((s, r) => {
    l[0][r] = s.get(), l[1][r] = s.getVelocity();
  }), l;
}
function L1(i, l, s, r) {
  const c = (d) => typeof d == "function" ? d(s !== void 0 ? s : i.custom, ...Ww(r)) : d;
  return l = c(l), typeof l == "string" && (l = i.variants && i.variants[l]), c(l);
}
function Ta(i, l, s) {
  return L1(i.getProps(), l, s, i);
}
const B1 = (i, l) => l === "exit" ? i.presenceContext?.custom : void 0, U1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...li
]), $w = (i) => Array.isArray(i);
function tC(i, l, s) {
  i.hasValue(l) ? i.getValue(l).set(s) : i.addValue(l, Cl(s));
}
function eC(i) {
  return $w(i) ? i[i.length - 1] || 0 : i;
}
function nC(i, l) {
  const s = Ta(i, l);
  let { transitionEnd: r = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...r };
  for (const f in d) {
    const m = eC(d[f]);
    tC(i, f, m);
  }
}
const Me = (i) => !!(i && i.getVelocity);
function iC(i) {
  return !!(Me(i) && i.add);
}
function Kd(i, l) {
  const s = i.getValue("willChange");
  if (iC(s))
    return s.add(l);
  if (!s && Hn.WillChange) {
    const r = new Hn.WillChange("auto");
    i.addValue("willChange", r), r.add(l);
  }
}
function Rh(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const aC = "framerAppearId", H1 = "data-" + Rh(aC);
function G1(i) {
  return i.props[H1];
}
const lC = typeof window < "u";
function sC({ protectedKeys: i, needsAnimating: l }, s) {
  const r = s in i && !l[s];
  return l[s] = !1, r;
}
function k1(i, l, { delay: s = 0, transitionOverride: r, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...m } = l;
  const p = i.getDefaultTransition();
  d = d ? V1(d, p) : p;
  const g = d?.reduceMotion, v = d?.skipAnimations;
  r && (d = r);
  const y = [], S = c && i.animationState?.getState()[c], A = d?.path;
  A && A.animateVisualElement(i, m, d, s, y);
  for (const T in m) {
    const C = i.getValue(T, i.latestValues[T] ?? null), E = m[T];
    if (E === void 0 || S && sC(S, T))
      continue;
    const z = {
      delay: s,
      ...Oh(d || {}, T)
    };
    v && (z.skipAnimations = !0);
    const B = C.get();
    if (B !== void 0 && !C.isAnimating() && !Array.isArray(E) && E === B && !z.velocity) {
      Kt.update(() => C.set(E));
      continue;
    }
    let k = !1;
    if (lC && window.MotionHandoffAnimation) {
      const Z = G1(i);
      if (Z) {
        const R = window.MotionHandoffAnimation(Z, T, Kt);
        R !== null && (z.startTime = R, k = !0);
      }
    }
    Kd(i, T);
    const _ = g ?? i.shouldReduceMotion;
    C.start(zh(T, C, E, _ && U1.has(T) ? { type: !1 } : z, i, k));
    const X = C.animation;
    X && y.push(X);
  }
  if (f) {
    const T = () => Kt.update(() => {
      f && nC(i, f);
    });
    y.length ? Promise.all(y).then(T) : T();
  }
  return y;
}
function Pd(i, l, s = {}) {
  const r = Ta(i, l, B1(i, s.type)), c = s.transitionOverride || (r?.transition ?? (i.getDefaultTransition() || {})), d = () => Promise.all(r ? k1(i, r, s) : []), f = (p = 0) => {
    const { variantChildren: g } = i, { delayChildren: v = 0, staggerChildren: y, staggerDirection: S } = c, A = [];
    return g?.forEach((T) => {
      T.notify("AnimationStart", l), A.push(Pd(T, l, {
        ...s,
        delay: p + (typeof v == "function" ? 0 : v) + _1(g, T, v, y, S)
      }).then(() => T.notify("AnimationComplete", l)));
    }), Promise.all(A);
  }, { when: m } = c;
  return m ? m === "beforeChildren" ? d().then(() => f()) : f().then(d) : Promise.all([d(), f(s.delay)]);
}
function oC(i, l, s = {}) {
  return i.notify("AnimationStart", l), (Array.isArray(l) ? Promise.all(l.map((c) => Pd(i, c, s))) : typeof l == "string" ? Pd(i, l, s) : Promise.all(k1(i, Ta(i, l, s.custom), s))).then(() => {
    i.notify("AnimationComplete", l);
  });
}
const rC = {
  test: (i) => i === "auto",
  parse: (i) => i
}, uC = (i) => (l) => l.test(i), cC = [Ml, gt, Un, ai, m2, h2, rC], F0 = (i) => cC.find(uC(i));
function fC(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || hh(i) : !0;
}
const dC = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function hC(i, l, s) {
  let r = 0, c;
  for (; r < i.length && !c; ) {
    const d = i[r];
    typeof d == "string" && !dC.has(d) && S2(d) && (c = i[r]), r++;
  }
  if (c && s)
    for (const d of l)
      i[d] !== c && (i[d] = Ch(s, c));
}
class mC extends Mh {
  constructor(l, s, r, c, d) {
    super(l, s, r, c, d, !0);
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
    const { unresolvedKeyframes: l, element: s, motionValue: r } = this, c = l[0] ?? r?.get();
    if (!s?.current || c === void 0)
      return !1;
    for (let d = 0; d < l.length; d++)
      if (sd(d ? l[d] : c))
        return !1;
    return !0;
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, element: s, name: r } = this;
    if (!s || !s.current)
      return;
    super.readKeyframes();
    for (let v = 0; v < l.length; v++) {
      let y = l[v];
      if (typeof y == "string" && (y = y.trim(), vh(y))) {
        const S = j1(y, s.current);
        S !== void 0 && (l[v] = S), v === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !U1.has(r) || l.length !== 2)
      return;
    const [c, d] = l;
    if (typeof c == "number" && typeof d == "number")
      return;
    const f = F0(c), m = F0(d), p = sd(c), g = sd(d);
    if (p !== g && ba[r]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (q0(f) && q0(m))
        for (let v = 0; v < l.length; v++) {
          const y = l[v];
          typeof y == "string" && (l[v] = parseFloat(y));
        }
      else ba[r] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: s } = this, r = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || fC(l[c])) && r.push(c);
    r.length && hC(l, r, s);
  }
  measure() {
    const { element: l, name: s } = this;
    return ba[s](window.getComputedStyle(l.current), () => l.measureViewportBox());
  }
  measureInitialState() {
    const { element: l, unresolvedKeyframes: s, name: r } = this;
    if (!l || !l.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = this.measure(), s[0] = this.measuredOrigin;
    const c = s[s.length - 1];
    c !== void 0 && this.motionValue?.jump(c, !1);
  }
  measureEndState() {
    const { element: l, unresolvedKeyframes: s } = this;
    if (!l || !l.current)
      return;
    this.motionValue?.jump(this.measuredOrigin, !1);
    const r = s.length - 1, c = s[r];
    s[r] = this.measure(), c !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = c), this.removedTransforms?.length && this.removedTransforms.forEach(([d, f]) => {
      l.getValue(d).set(f);
    }), this.resolveNoneKeyframes();
  }
}
const Nh = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function pC(i) {
  return Qb(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
function _h(i) {
  return Qb(i) && "ownerSVGElement" in i;
}
function Vh(i, l, s) {
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
function jh(i, l, s) {
  const { style: r, vars: c, transformOrigin: d } = i;
  let f = !1, m = !1;
  for (const p in l) {
    const g = l[p];
    if (Ui.has(p)) {
      f = !0;
      continue;
    } else if (n1(p)) {
      c[p] = g;
      continue;
    } else {
      const v = nu(g, Ys[p]);
      p.startsWith("origin") ? (m = !0, d[p] = v) : r[p] = v;
    }
  }
  if (l.transform || (f || s ? r.transform = N1(l, i.transform, s) : r.transform && (r.transform = "none")), m) {
    const { originX: p = "50%", originY: g = "50%", originZ: v = 0 } = d;
    r.transformOrigin = `${p} ${g} ${v}`;
  }
}
const gC = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, yC = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function vC(i, l, s = 1, r = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? gC : yC;
  i[d.offset] = `${-r}`, i[d.array] = `${l} ${s}`;
}
const Y1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function q1(i, {
  attrX: l,
  attrY: s,
  attrScale: r,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, p, g, v) {
  if (jh(i, m, g), p) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: S } = i;
  for (const A of Y1)
    y[A] !== void 0 && (S[A] = y[A], delete y[A]);
  (S.transform || y.transformOrigin) && (S.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), S.transform && (S.transformBox = v?.transformBox ?? "fill-box", delete y.transformBox), l !== void 0 && (y.x = l), s !== void 0 && (y.y = s), r !== void 0 && (y.scale = r), c !== void 0 && vC(y, c, d, f, !1);
}
function X1({ top: i, left: l, right: s, bottom: r }) {
  return {
    x: { min: l, max: s },
    y: { min: i, max: r }
  };
}
function bC({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function SC(i, l) {
  if (!l)
    return i;
  const s = l({ x: i.left, y: i.top }), r = l({ x: i.right, y: i.bottom });
  return {
    top: s.y,
    left: s.x,
    bottom: r.y,
    right: r.x
  };
}
function gd(i) {
  return i === void 0 || i === 1;
}
function Fd({ scale: i, scaleX: l, scaleY: s }) {
  return !gd(i) || !gd(l) || !gd(s);
}
function ga(i) {
  return Fd(i) || Q1(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function Q1(i) {
  return J0(i.x) || J0(i.y);
}
function J0(i) {
  return i && i !== "0%";
}
function iu(i, l, s) {
  const r = i - s, c = l * r;
  return s + c;
}
function I0(i, l, s, r, c) {
  return c !== void 0 && (i = iu(i, c, r)), iu(i, s, r) + l;
}
function Jd(i, l = 0, s = 1, r, c) {
  i.min = I0(i.min, l, s, r, c), i.max = I0(i.max, l, s, r, c);
}
function Z1(i, { x: l, y: s }) {
  Jd(i.x, l.translate, l.scale, l.originPoint), Jd(i.y, s.translate, s.scale, s.originPoint);
}
const W0 = 0.999999999999, $0 = 1.0000000000001;
function TC(i, l, s, r = !1) {
  const c = s.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, f;
  for (let m = 0; m < c; m++) {
    d = s[m], f = d.projectionDelta;
    const { visualElement: p } = d.options;
    p && p.props.style && p.props.style.display === "contents" || (r && d.options.layoutScroll && d.scroll && d !== d.root && (xn(i.x, -d.scroll.offset.x), xn(i.y, -d.scroll.offset.y)), f && (l.x *= f.x.scale, l.y *= f.y.scale, Z1(i, f)), r && ga(d.latestValues) && kr(i, d.latestValues, d.layout?.layoutBox));
  }
  l.x < $0 && l.x > W0 && (l.x = 1), l.y < $0 && l.y > W0 && (l.y = 1);
}
function xn(i, l) {
  i.min += l, i.max += l;
}
function tv(i, l, s, r, c = 0.5) {
  const d = Qt(i.min, i.max, c);
  Jd(i, l, s, d, r);
}
function ev(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function kr(i, l, s) {
  const r = s ?? i;
  tv(i.x, ev(l.x, r.x), l.scaleX, l.scale, l.originX), tv(i.y, ev(l.y, r.y), l.scaleY, l.scale, l.originY);
}
function K1(i, l) {
  return X1(SC(i.getBoundingClientRect(), l));
}
function xC(i, l, s) {
  const r = K1(i, s), { scroll: c } = l;
  return c && (xn(r.x, c.offset.x), xn(r.y, c.offset.y)), r;
}
const { schedule: Lh } = /* @__PURE__ */ c1(queueMicrotask, !1), Sn = {
  x: !1,
  y: !1
};
function P1() {
  return Sn.x || Sn.y;
}
function EC(i) {
  return i === "x" || i === "y" ? Sn[i] ? null : (Sn[i] = !0, () => {
    Sn[i] = !1;
  }) : Sn.x || Sn.y ? null : (Sn.x = Sn.y = !0, () => {
    Sn.x = Sn.y = !1;
  });
}
function F1(i, l) {
  const s = Vh(i), r = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: r.signal
  };
  return [s, c, () => r.abort()];
}
function AC(i) {
  return !(i.pointerType === "touch" || P1());
}
function wC(i, l, s = {}) {
  const [r, c, d] = F1(i, s);
  return r.forEach((f) => {
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
    }, C = (E) => {
      if (!AC(E))
        return;
      p = !1;
      const z = l(f, E);
      typeof z == "function" && (g = z, f.addEventListener("pointerleave", T, c));
    };
    f.addEventListener("pointerenter", C, c), f.addEventListener("pointerdown", A, c);
  }), d;
}
const J1 = (i, l) => l ? i === l ? !0 : J1(i, l.parentElement) : !1, Bh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, CC = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function MC(i) {
  return CC.has(i.tagName) || i.isContentEditable === !0;
}
const DC = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function OC(i) {
  return DC.has(i.tagName) || i.isContentEditable === !0;
}
const Yr = /* @__PURE__ */ new WeakSet();
function nv(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function yd(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const zC = (i, l) => {
  const s = i.currentTarget;
  if (!s)
    return;
  const r = nv(() => {
    if (Yr.has(s))
      return;
    yd(s, "down");
    const c = nv(() => {
      yd(s, "up");
    }), d = () => yd(s, "cancel");
    s.addEventListener("keyup", c, l), s.addEventListener("blur", d, l);
  });
  s.addEventListener("keydown", r, l), s.addEventListener("blur", () => s.removeEventListener("keydown", r), l);
};
function iv(i) {
  return Bh(i) && !P1();
}
const av = /* @__PURE__ */ new WeakSet();
function RC(i, l, s = {}) {
  const [r, c, d] = F1(i, s), f = (m) => {
    const p = m.currentTarget;
    if (!iv(m) || av.has(m))
      return;
    Yr.add(p), s.stopPropagation && av.add(m);
    const g = l(p, m), v = { ...c, capture: !0 }, y = (T, C) => {
      window.removeEventListener("pointerup", S, v), window.removeEventListener("pointercancel", A, v), Yr.has(p) && Yr.delete(p), iv(T) && typeof g == "function" && g(T, { success: C });
    }, S = (T) => {
      y(T, p === window || p === document || s.useGlobalTarget || J1(p, T.target));
    }, A = (T) => {
      y(T, !1);
    };
    window.addEventListener("pointerup", S, v), window.addEventListener("pointercancel", A, v);
  };
  return r.forEach((m) => {
    (s.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c), pC(m) && (m.addEventListener("focus", (g) => zC(g, c)), !MC(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), d;
}
const qr = /* @__PURE__ */ new WeakMap();
let Xr;
const I1 = (i, l, s) => (r, c) => c && c[0] ? c[0][i + "Size"] : _h(r) && "getBBox" in r ? r.getBBox()[l] : r[s], NC = /* @__PURE__ */ I1("inline", "width", "offsetWidth"), _C = /* @__PURE__ */ I1("block", "height", "offsetHeight");
function VC({ target: i, borderBoxSize: l }) {
  qr.get(i)?.forEach((s) => {
    s(i, {
      get width() {
        return NC(i, l);
      },
      get height() {
        return _C(i, l);
      }
    });
  });
}
function jC(i) {
  i.forEach(VC);
}
function LC() {
  typeof ResizeObserver > "u" || (Xr = new ResizeObserver(jC));
}
function BC(i, l) {
  Xr || LC();
  const s = Vh(i);
  return s.forEach((r) => {
    let c = qr.get(r);
    c || (c = /* @__PURE__ */ new Set(), qr.set(r, c)), c.add(l), Xr?.observe(r);
  }), () => {
    s.forEach((r) => {
      const c = qr.get(r);
      c?.delete(l), c?.size || Xr?.unobserve(r);
    });
  };
}
const Qr = /* @__PURE__ */ new Set();
let xl;
function UC() {
  xl = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Qr.forEach((l) => l(i));
  }, window.addEventListener("resize", xl);
}
function HC(i) {
  return Qr.add(i), xl || UC(), () => {
    Qr.delete(i), !Qr.size && typeof xl == "function" && (window.removeEventListener("resize", xl), xl = void 0);
  };
}
function lv(i, l) {
  return typeof i == "function" ? HC(i) : BC(i, l);
}
function GC(i) {
  return _h(i) && i.tagName === "svg";
}
const sv = (i) => typeof i == "number" ? i : parseFloat(i), ov = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), El = () => ({
  x: ov(),
  y: ov()
}), rv = () => ({ min: 0, max: 0 }), he = () => ({
  x: rv(),
  y: rv()
}), kC = /* @__PURE__ */ new WeakMap();
function hu(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Xs(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Uh = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], uv = ["initial", ...Uh];
function mu(i) {
  if (hu(i.animate))
    return !0;
  for (let l = 0; l < uv.length; l++)
    if (Xs(i[uv[l]]))
      return !0;
  return !1;
}
function W1(i) {
  return !!(mu(i) || i.variants);
}
function YC(i, l, s) {
  for (const r in l) {
    const c = l[r], d = s[r];
    if (Me(c))
      i.addValue(r, c);
    else if (Me(d))
      i.addValue(r, Cl(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(r)) {
        const f = i.getValue(r);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(r);
        i.addValue(r, Cl(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const r in s)
    l[r] === void 0 && i.removeValue(r);
  return l;
}
const au = { current: null }, Hh = { current: !1 }, qC = typeof window < "u";
function $1() {
  if (Hh.current = !0, !!qC)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => au.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      au.current = !1;
}
const cv = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let lu = {};
function tS(i) {
  lu = i;
}
function XC() {
  return lu;
}
class QC {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(l, s, r) {
    return {};
  }
  constructor({ parent: l, props: s, presenceContext: r, reducedMotionConfig: c, skipAnimations: d, blockInitialAnimation: f, visualState: m }, p = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Mh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const A = te.now();
      this.renderScheduledAt < A && (this.renderScheduledAt = A, Kt.render(this.render, !1, !0));
    };
    const { latestValues: g, renderState: v } = m;
    this.latestValues = g, this.baseTarget = { ...g }, this.initialValues = s.initial ? { ...g } : {}, this.renderState = v, this.parent = l, this.props = s, this.presenceContext = r, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = p, this.blockInitialAnimation = !!f, this.isControllingVariants = mu(s), this.isVariantNode = W1(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
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
    if (this.current = l, kC.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.isVariantNode && !this.isControllingVariants) {
      let s = this;
      do
        s = s.props.inherit !== !1 && s.parent;
      while (s && !s.isVariantNode);
      if (s) {
        const { variantChildren: r } = s;
        r.add(this), this.removeFromVariantTree = () => r.delete(this);
      }
    }
    this.values.forEach((s, r) => this.bindToMotionValue(r, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Hh.current || $1(), this.shouldReduceMotion = au.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
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
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), s.accelerate && Zd.has(l) && this.current instanceof HTMLElement) {
      const { factory: f, keyframes: m, times: p, ease: g, duration: v } = s.accelerate, y = new D1({
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
    const r = Ui.has(l);
    r && this.onBindTransform && this.onBindTransform();
    const c = s.on("change", (f) => {
      this.latestValues[l] = f, this.props.onUpdate && Kt.preRender(this.notifyUpdate), r && (this.projection && (this.projection.isTransformDirty = !0), wl.get(this.current)?.check()), this.scheduleRender();
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
      const { isEnabled: r, Feature: c } = s;
      if (!this.features[l] && c && r(this.props) && (this.features[l] = new c(this)), this.features[l]) {
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
    const { transformTemplate: r, onUpdate: c } = this.props;
    (l.transformTemplate || r) && this.scheduleRender(), (l.transformTemplate && !r || l.onUpdate && !c) && wl.get(this.current)?.demote(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
    for (let d = 0; d < cv.length; d++) {
      const f = cv[d];
      this.propEventSubscriptions[f] && (this.propEventSubscriptions[f](), delete this.propEventSubscriptions[f]);
      const m = "on" + f, p = l[m];
      p && (this.propEventSubscriptions[f] = this.on(f, p));
    }
    this.prevMotionValues = YC(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    const r = this.values.get(l);
    if (s !== r) {
      r && this.removeValue(l), this.bindToMotionValue(l, s), this.values.set(l, s);
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
    let r = this.values.get(l);
    return r === void 0 && s !== void 0 && (r = Cl(s ?? this.getDefaultValue?.(l), {
      owner: this
    }), this.addValue(l, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(l, s) {
    let r = this.latestValues[l] !== void 0 || !this.current ? this.latestValues[l] : this.getBaseTargetFromProps(this.props, l) ?? this.readValueFromInstance(this.current, l, this.options);
    return r != null && (typeof r == "string" && (dh(r) || hh(r)) ? r = parseFloat(r) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof r != "number" && !$e.test(r) && $e.test(s) && (r = Ch(l, s))
    ), this.setBaseTarget(l, Me(r) ? r.get() : r)), Me(r) ? r.get() : r;
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
    Lh.render(this.render);
  }
}
class eS extends QC {
  constructor() {
    super(...arguments), this.KeyframeResolver = mC;
  }
  sortInstanceNodePosition(l, s) {
    return l.compareDocumentPosition(s) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(l, s) {
    const r = l.style;
    return r ? r[s] : void 0;
  }
  removeValueFromRenderState(l, { vars: s, style: r }) {
    delete s[l], delete r[l];
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: l } = this.props;
    Me(l) && (this.childSubscription = l.on("change", (s) => {
      this.current && (this.current.textContent = `${s}`);
    }));
  }
}
class ki {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function nS(i, { style: l, vars: s }, r, c) {
  const d = i.style;
  let f;
  for (f in l)
    d[f] = l[f];
  c?.applyProjectionStyles(d, r);
  for (f in s)
    d.setProperty(f, s[f]);
}
const Qs = {};
function iS(i, { layout: l, layoutId: s }) {
  return Ui.has(i) || i.startsWith("origin") || (l || s !== void 0) && (!!Qs[i] || i === "opacity");
}
function Gh(i, l, s) {
  const r = i.style, c = l?.style, d = {};
  if (!r)
    return d;
  for (const f in r)
    (Me(r[f]) || c && Me(c[f]) || iS(f, i) || s?.getValue(f)?.liveStyle !== void 0) && (d[f] = r[f]);
  return d;
}
function ZC(i) {
  return window.getComputedStyle(i);
}
class KC extends eS {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = nS;
  }
  mount(l) {
    du(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, s) {
    if (Ui.has(s))
      return this.projection?.isProjecting ? qs(s) : uw(l, s);
    {
      const r = ZC(l), c = (n1(s) ? r.getPropertyValue(s) : r[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: s }) {
    return K1(l, s);
  }
  build(l, s, r) {
    jh(l, s, r.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, s, r) {
    return Gh(l, s, r);
  }
}
const aS = /* @__PURE__ */ new Set([
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
]), lS = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function PC(i, l, s, r) {
  nS(i, l, void 0, r);
  for (const c in l.attrs)
    i.setAttribute(aS.has(c) ? c : Rh(c), l.attrs[c]);
}
function sS(i, l, s) {
  const r = Gh(i, l, s);
  for (const c in i)
    if (Me(i[c]) || Me(l[c])) {
      const d = li.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      r[d] = i[c];
    }
  return r;
}
class FC extends eS {
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
      const r = T1(s);
      return r && r.default || 0;
    }
    if (Y1.includes(s)) {
      const c = getComputedStyle(l)[s];
      if (typeof c == "string" && c)
        return c.trim();
    }
    return s = aS.has(s) ? s : Rh(s), l.getAttribute(s);
  }
  scrapeMotionValuesFromProps(l, s, r) {
    return sS(l, s, r);
  }
  build(l, s, r) {
    q1(l, s, this.isSVGTag, r.transformTemplate, r.style);
  }
  renderInstance(l, s, r, c) {
    PC(l, s, r, c);
  }
  mount(l) {
    this.isSVGTag = lS(l.tagName), super.mount(l);
  }
}
function oS(i, l) {
  if (!Array.isArray(l))
    return !1;
  const s = l.length;
  if (s !== i.length)
    return !1;
  for (let r = 0; r < s; r++)
    if (l[r] !== i[r])
      return !1;
  return !0;
}
const JC = [...Uh].reverse();
function IC(i) {
  let l = (m) => Promise.all(m.map(({ animation: p, options: g }) => oC(i, p, g))), s = fv(), r = !0, c = !1;
  function d(m) {
    const { props: p, parent: g, manuallyAnimateOnMount: v } = i, y = r || c, S = [], A = /* @__PURE__ */ new Set();
    let T = {}, C = 1 / 0, E = i;
    do
      E = E.props.inherit !== !1 && E.parent;
    while (E && !E.isControllingVariants);
    if (JC.forEach((B, k) => {
      const _ = s[B], X = p[B], Z = E && E.props[B], R = X !== void 0 ? X : Xs(Z) || Z === !1 ? Z : void 0, D = Xs(R), ot = B === m ? _.isActive : null;
      ot === !1 && (C = k);
      const ut = D && X === void 0 && !(y && v);
      if (_.protectedKeys = { ...T }, !_.isActive && ot === null || !R && !_.prevProp || hu(R) || typeof R == "boolean")
        return;
      if (B === "exit" && _.isActive && ot !== !0) {
        T = {
          ...T,
          ..._.prevResolvedValues
        };
        return;
      }
      const F = WC(_.prevProp, R);
      let I = F || D && (ot && !ut || k > C), lt = !1;
      const et = Array.isArray(R) ? R : [R];
      let nt = {};
      if (ot !== !1)
        for (const J of et) {
          const { transition: it, transitionEnd: at, ...Y } = Ta(i, J, B1(i, B)) || {};
          nt = {
            ...nt,
            ...Y,
            ...at
          };
        }
      const { prevResolvedValues: q } = _;
      for (const J in { ...q, ...nt }) {
        if (J in T)
          continue;
        const it = nt[J], at = q[J], Y = Array.isArray(it) && Array.isArray(at) ? !oS(it, at) || F : it !== at;
        if (Y && it == null)
          A.add(J);
        else if (Y || it !== void 0 && A.has(J)) {
          I = !0, A.delete(J) && (lt = !0), _.needsAnimating[J] = !0;
          const yt = i.getValue(J);
          yt && (yt.liveStyle = !1);
        } else
          _.protectedKeys[J] = !0;
      }
      if (_.prevProp = R, _.prevResolvedValues = nt, _.isActive && (T = { ...T, ...nt }), I && (!(ut && F) || lt))
        for (const J of et) {
          const it = { type: B };
          if (typeof J == "string" && y && v && g?.enteringChildren) {
            const at = Ta(g, J)?.transition?.delayChildren;
            it.delay = _1(g.enteringChildren, i, at);
          }
          S.push({ animation: J, options: it });
        }
    }), A.size) {
      const { initial: B } = p, k = {}, _ = typeof B != "boolean" && Ta(i, Array.isArray(B) ? B[0] : B, i.presenceContext?.custom);
      _ && _.transition && (k.transition = _.transition), A.forEach((X) => {
        const Z = i.getValue(X);
        Z && (Z.liveStyle = !0);
        const R = _ && !Array.isArray(B) ? _[X] : void 0, D = i.getBaseTargetFromProps(p, X);
        k[X] = (R !== void 0 ? R : D !== void 0 && !Me(D) ? D : i.initialValues[X] === void 0 ? i.baseTarget[X] : void 0) ?? null;
      }), S.push({ animation: k });
    }
    const z = y && i.blockInitialAnimation || r && !v && (p.initial === !1 || p.initial === p.animate);
    return r = c = !1, !z && S.length ? l(S) : Promise.resolve();
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
      s = fv(), c = !0;
    }
  };
}
function WC(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !oS(l, i) : !1;
}
function fv() {
  const i = {};
  for (const l of Uh)
    i[l] = {
      isActive: l === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  return i;
}
function Id(i, l) {
  i.min = l.min, i.max = l.max;
}
function bn(i, l) {
  Id(i.x, l.x), Id(i.y, l.y);
}
function dv(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const rS = 1e-4, $C = 1 - rS, tM = 1 + rS, uS = 0.01, eM = 0 - uS, nM = 0 + uS;
function je(i) {
  return i.max - i.min;
}
function iM(i, l, s) {
  return Math.abs(i - l) <= s;
}
function hv(i, l, s, r = 0.5) {
  i.origin = r, i.originPoint = Qt(l.min, l.max, i.origin), i.scale = je(s) / je(l), i.translate = Qt(s.min, s.max, i.origin) - i.originPoint, (i.scale >= $C && i.scale <= tM || isNaN(i.scale)) && (i.scale = 1), (i.translate >= eM && i.translate <= nM || isNaN(i.translate)) && (i.translate = 0);
}
function Vs(i, l, s, r) {
  hv(i.x, l.x, s.x, r ? r.originX : void 0), hv(i.y, l.y, s.y, r ? r.originY : void 0);
}
function mv(i, l, s, r = 0) {
  const c = r ? Qt(s.min, s.max, r) : s.min;
  i.min = c + l.min, i.max = i.min + je(l);
}
function aM(i, l, s, r) {
  mv(i.x, l.x, s.x, r?.x), mv(i.y, l.y, s.y, r?.y);
}
function pv(i, l, s, r = 0) {
  const c = r ? Qt(s.min, s.max, r) : s.min;
  i.min = l.min - c, i.max = i.min + je(l);
}
function su(i, l, s, r) {
  pv(i.x, l.x, s.x, r?.x), pv(i.y, l.y, s.y, r?.y);
}
function gv(i, l, s, r, c) {
  return i -= l, i = iu(i, 1 / s, r), c !== void 0 && (i = iu(i, 1 / c, r)), i;
}
function lM(i, l = 0, s = 1, r = 0.5, c, d = i, f = i) {
  if (Un.test(l) && (l = parseFloat(l), l = Qt(f.min, f.max, l / 100) - f.min), typeof l != "number")
    return;
  let m = Qt(d.min, d.max, r);
  i === d && (m -= l), i.min = gv(i.min, l, s, m, c), i.max = gv(i.max, l, s, m, c);
}
function yv(i, l, [s, r, c], d, f) {
  lM(i, l[s], l[r], l[c], l.scale, d, f);
}
const sM = ["x", "scaleX", "originX"], oM = ["y", "scaleY", "originY"];
function vv(i, l, s, r) {
  yv(i.x, l, sM, s ? s.x : void 0, r ? r.x : void 0), yv(i.y, l, oM, s ? s.y : void 0, r ? r.y : void 0);
}
function bv(i) {
  return i.translate === 0 && i.scale === 1;
}
function cS(i) {
  return bv(i.x) && bv(i.y);
}
function Sv(i, l) {
  return i.min === l.min && i.max === l.max;
}
function rM(i, l) {
  return Sv(i.x, l.x) && Sv(i.y, l.y);
}
function Tv(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function fS(i, l) {
  return Tv(i.x, l.x) && Tv(i.y, l.y);
}
function xv(i) {
  return je(i.x) / je(i.y);
}
function Ev(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function Tn(i) {
  return [i("x"), i("y")];
}
function Av(i, l) {
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
    const s = Av(i, l.target.x), r = Av(i, l.target.y);
    return `${s}% ${r}%`;
  }
}, uM = {
  correct: (i, { treeScale: l, projectionDelta: s }) => {
    const r = i, c = $e.parse(i);
    if (c.length > 5)
      return r;
    const d = $e.createTransformer(i), f = typeof c[0] != "number" ? 1 : 0, m = s.x.scale * l.x, p = s.y.scale * l.y;
    c[0 + f] /= m, c[1 + f] /= p;
    const g = Qt(m, p, 0.5);
    return typeof c[2 + f] == "number" && (c[2 + f] /= g), typeof c[3 + f] == "number" && (c[3 + f] /= g), d(c);
  }
};
function cM(i, l, s) {
  let r = "";
  const c = i.x.translate / l.x, d = i.y.translate / l.y, f = s?.z || 0;
  if ((c || d || f) && (r = `translate3d(${c}px, ${d}px, ${f}px) `), (l.x !== 1 || l.y !== 1) && (r += `scale(${1 / l.x}, ${1 / l.y}) `), s) {
    const { transformPerspective: g, rotate: v, pathRotation: y, rotateX: S, rotateY: A, skewX: T, skewY: C } = s;
    g && (r = `perspective(${g}px) ${r}`), v && (r += `rotate(${v}deg) `), y && (r += `rotate(${y}deg) `), S && (r += `rotateX(${S}deg) `), A && (r += `rotateY(${A}deg) `), T && (r += `skewX(${T}deg) `), C && (r += `skewY(${C}deg) `);
  }
  const m = i.x.scale * l.x, p = i.y.scale * l.y;
  return (m !== 1 || p !== 1) && (r += `scale(${m}, ${p})`), r || "none";
}
const fM = Nh.length, wv = (i) => typeof i == "number" || gt.test(i);
function dM(i, l, s, r, c, d) {
  c ? (i.opacity = Qt(0, s.opacity ?? 1, hM(r)), i.opacityExit = Qt(l.opacity ?? 1, 0, mM(r))) : d && (i.opacity = Qt(l.opacity ?? 1, s.opacity ?? 1, r));
  for (let f = 0; f < fM; f++) {
    const m = Nh[f];
    let p = Cv(l, m), g = Cv(s, m);
    if (p === void 0 && g === void 0)
      continue;
    p || (p = 0), g || (g = 0), p === 0 || g === 0 || wv(p) === wv(g) ? (i[m] = Math.max(Qt(sv(p), sv(g), r), 0), (Un.test(g) || Un.test(p)) && (i[m] += "%")) : i[m] = g;
  }
  (l.rotate || s.rotate) && (i.rotate = Qt(l.rotate || 0, s.rotate || 0, r));
}
function Cv(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const hM = /* @__PURE__ */ dS(0, 0.5, $b), mM = /* @__PURE__ */ dS(0.5, 0.95, En);
function dS(i, l, s) {
  return (r) => r < i ? 0 : r > l ? 1 : s(/* @__PURE__ */ xa(i, l, r));
}
function pM(i, l, s) {
  const r = Me(i) ? i : Cl(i);
  return r.start(zh("", r, l, s)), r.animation;
}
function Zs(i, l, s, r = { passive: !0 }) {
  return i.addEventListener(l, s, r), () => i.removeEventListener(l, s, r);
}
const gM = (i, l) => i.depth - l.depth;
class yM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    fh(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    Jr(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(gM), this.isDirty = !1, this.children.forEach(l);
  }
}
function vM(i, l) {
  const s = te.now(), r = ({ timestamp: c }) => {
    const d = c - s;
    d >= l && (Hi(r), i(d - l));
  };
  return Kt.setup(r, !0), () => Hi(r);
}
function Zr(i) {
  return Me(i) ? i.get() : i;
}
class bM {
  constructor() {
    this.members = [];
  }
  add(l) {
    fh(this.members, l);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const r = this.members[s];
      if (r === l || r === this.lead || r === this.prevLead)
        continue;
      const c = r.instance;
      (!c || c.isConnected === !1) && !r.snapshot && (Jr(this.members, r), r.unmount());
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
      const r = this.members[s];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return this.promote(r), !0;
    }
    return !1;
  }
  promote(l, s) {
    const r = this.lead;
    if (l !== r && (this.prevLead = r, this.lead = l, l.show(), r)) {
      r.updateSnapshot(), l.scheduleRender();
      const { layoutDependency: c } = r.options, { layoutDependency: d } = l.options;
      (c === void 0 || c !== d) && (l.resumeFrom = r, s && (r.preserveOpacity = !0), r.snapshot && (l.snapshot = r.snapshot, l.snapshot.latestValues = r.animationValues || r.latestValues), l.root?.isUpdating && (l.isLayoutDirty = !0)), l.options.crossfade === !1 && r.hide();
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
const SM = {
  borderRadius: {
    ...Rs,
    applyTo: [...Nh]
  },
  borderTopLeftRadius: Rs,
  borderTopRightRadius: Rs,
  borderBottomLeftRadius: Rs,
  borderBottomRightRadius: Rs,
  boxShadow: uM
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
  ...SM,
  ...Qs
});
const vd = ["", "X", "Y", "Z"], TM = 1e3;
let xM = 0;
function bd(i, l, s, r) {
  const { latestValues: c } = l;
  c[i] && (s[i] = c[i], l.setStaticValue(i, 0), r && (r[i] = 0));
}
const Sd = ({ instance: i }) => i && wl.get(i)?.demote();
function hS(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const s = G1(l);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Kt, !(c || d));
  }
  const { parent: r } = i;
  r && !r.hasCheckedOptimisedAppear && hS(r);
}
function mS({ attachResizeListener: i, defaultParent: l, measureScroll: s, checkIsScrollRoot: r, resetTransform: c }) {
  return class {
    constructor(f = {}, m = l?.()) {
      this.id = xM++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(wM), this.nodes.forEach(_M), this.nodes.forEach(VM), this.nodes.forEach(CM);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new yM());
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
      this.isSVG = _h(f) && !GC(f), this.instance = f;
      const { layoutId: m, layout: p, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0), i) {
        let v, y = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        Kt.read(() => {
          y = window.innerWidth;
        }), i(f, () => {
          const A = window.innerWidth;
          A !== y && (y = A, this.root.updateBlockedByResize = !0, v && v(), v = vM(S, 250), Kr.hasAnimatedSinceResize && (Kr.hasAnimatedSinceResize = !1, this.nodes.forEach(Ov)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && g && (m || p) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: y, hasRelativeLayoutChanged: S, layout: A }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const T = this.options.transition || g.getDefaultTransition() || HM, { onLayoutAnimationStart: C, onLayoutAnimationComplete: E } = g.getProps(), z = !this.targetLayout || !fS(this.targetLayout, A), B = !y && S;
        if (this.options.layoutRoot || this.resumeFrom || B || y && (z || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const k = {
            ...Oh(T, "layout"),
            onPlay: C,
            onComplete: E
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (k.delay = 0, k.type = !1), this.startAnimation(k), this.setAnimationOrigin(v, B, k.path);
        } else
          y || Ov(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(jM), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && hS(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      Sd(this), this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        y.shouldResetTransform = !0, Sd(y), (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1), y.isAnimationBlocked && (y.dragSnapshot || (y.dragSnapshot = y.measure()), this.dragAncestor = y);
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), p && this.nodes.forEach(DM), this.nodes.forEach(Mv);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Dv);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(zM), this.nodes.forEach(RM), this.nodes.forEach(NM), this.nodes.forEach(EM), this.nodes.forEach(AM)) : this.nodes.forEach(Dv), this.clearAllSnapshots();
      const m = te.now();
      ce.delta = Gn(0, 1e3 / 60, m - ce.timestamp), ce.timestamp = m, ce.isProcessing = !0, cd.update.process(ce), cd.preRender.process(ce), cd.render.process(ce), ce.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Lh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(MM), this.sharedNodes.forEach(LM);
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
        const p = r(this.instance);
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
      f && Sd(this);
      const m = this.projectionDelta && !cS(this.projectionDelta), p = this.getTransformTemplate(), g = p ? p(this.latestValues, "") : void 0, v = g !== this.prevTransformTemplateValue;
      f && this.instance && (m || ga(this.latestValues) || v) && (c(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      return f && (p = this.removeTransform(p)), GM(p), {
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
      if (!(this.scroll?.wasRoot || this.path.some(kM))) {
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
        !m && y.options.layoutScroll && y.scroll && y !== y.root && (xn(g.x, -y.scroll.offset.x), xn(g.y, -y.scroll.offset.y)), ga(y.latestValues) && kr(g, y.latestValues, y.layout?.layoutBox);
      }
      return ga(this.latestValues) && kr(g, this.latestValues, this.layout?.layoutBox), g;
    }
    removeTransform(f) {
      const m = he();
      bn(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        if (!ga(g.latestValues))
          continue;
        let v;
        g.instance && (Fd(g.latestValues) && g.updateSnapshot(), v = he(), bn(v, g.measurePageBox())), vv(m, g.latestValues, g.snapshot?.layoutBox, v);
      }
      return ga(this.latestValues) && vv(m, this.latestValues), m;
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
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = he(), this.targetWithTransforms = he()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), aM(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : bn(this.target, this.layout.layoutBox), Z1(this.target, this.targetDelta)) : bn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Fd(this.parent.latestValues) || Q1(this.parent.latestValues)))
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
      TC(this.layoutCorrected, this.treeScale, this.path, m), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = he());
      const { target: A } = f;
      if (!A) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (dv(this.prevProjectionDelta.x, this.projectionDelta.x), dv(this.prevProjectionDelta.y, this.projectionDelta.y)), Vs(this.projectionDelta, this.layoutCorrected, A, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== S || !Ev(this.projectionDelta.x, this.prevProjectionDelta.x) || !Ev(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", A));
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
      this.prevProjectionDelta = El(), this.projectionDelta = El(), this.projectionDeltaWithTransform = El();
    }
    setAnimationOrigin(f, m = !1, p) {
      const g = this.snapshot, v = g ? g.latestValues : {}, y = { ...this.latestValues }, S = El();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !m;
      const A = he(), T = g ? g.source : void 0, C = this.layout ? this.layout.source : void 0, E = T !== C, z = this.getStack(), B = !z || z.members.length <= 1, k = !!(E && !B && this.options.crossfade === !0 && !this.path.some(UM));
      this.animationProgress = 0;
      let _;
      const X = p?.interpolateProjection(f);
      this.mixTargetDelta = (Z) => {
        const R = Z / 1e3, D = X?.(R);
        D ? (S.x.translate = D.x, S.x.scale = Qt(f.x.scale, 1, R), S.x.origin = f.x.origin, S.x.originPoint = f.x.originPoint, S.y.translate = D.y, S.y.scale = Qt(f.y.scale, 1, R), S.y.origin = f.y.origin, S.y.originPoint = f.y.originPoint) : (zv(S.x, f.x, R), zv(S.y, f.y, R)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (su(A, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), BM(this.relativeTarget, this.relativeTargetOrigin, A, R), _ && rM(this.relativeTarget, _) && (this.isProjectionDirty = !1), _ || (_ = he()), bn(_, this.relativeTarget)), E && (this.animationValues = y, dM(y, v, this.latestValues, R, k, B)), D && D.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = D.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = R;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Hi(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Kt.update(() => {
        Kr.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Cl(0)), this.motionValue.jump(0, !1), this.currentAnimation = pM(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m);
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), W2(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(TM), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead(), { targetWithTransforms: m, layout: p, latestValues: g } = f;
      let { target: v } = f;
      if (!(!m || !v || !p)) {
        if (this !== f && this.layout && p && pS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          v = this.target || he();
          const y = je(this.layout.layoutBox.x);
          v.x.min = f.target.x.min, v.x.max = v.x.min + y;
          const S = je(this.layout.layoutBox.y);
          v.y.min = f.target.y.min, v.y.max = v.y.min + S;
        }
        bn(m, v), kr(m, g), Vs(this.projectionDeltaWithTransform, this.layoutCorrected, m, g);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new bM()), this.sharedNodes.get(f).add(m);
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
      p.z && bd("z", f, g, this.animationValues);
      for (let v = 0; v < vd.length; v++)
        bd(`rotate${vd[v]}`, f, g, this.animationValues), bd(`skew${vd[v]}`, f, g, this.animationValues);
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
      let y = cM(this.projectionDeltaWithTransform, this.treeScale, v);
      p && (y = p(v, y)), f.transform = y;
      const { x: S, y: A } = this.projectionDelta;
      f.transformOrigin = `${S.origin * 100}% ${A.origin * 100}% 0`, g.animationValues ? f.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : f.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const T in Qs) {
        if (v[T] === void 0)
          continue;
        const { correct: C, applyTo: E, isCSSVariable: z } = Qs[T], B = y === "none" ? v[T] : C(v[T], g);
        if (E) {
          const k = E.length;
          for (let _ = 0; _ < k; _++)
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
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(Mv), this.root.sharedNodes.clear();
    }
  };
}
function EM(i) {
  i.updateLayout(), OM(i);
}
function AM(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: r } = i.layout, { animationType: c } = i.options, d = l.source !== i.layout.source;
    if (c === "size")
      Tn((v) => {
        const y = d ? l.measuredBox[v] : l.layoutBox[v], S = je(y);
        y.min = s[v].min, y.max = y.min + S;
      });
    else if (c === "x" || c === "y") {
      const v = c === "x" ? "y" : "x";
      Id(d ? l.measuredBox[v] : l.layoutBox[v], s[v]);
    } else pS(c, l.layoutBox, s) && Tn((v) => {
      const y = d ? l.measuredBox[v] : l.layoutBox[v], S = je(s[v]);
      y.max = y.min + S, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + S);
    });
    const f = El();
    Vs(f, s, l.layoutBox);
    const m = El();
    d ? Vs(m, i.applyTransform(r, !0), l.measuredBox) : Vs(m, s, l.layoutBox);
    const p = !cS(f);
    let g = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: y, layout: S } = v;
        if (y && S) {
          const A = i.options.layoutAnchor || void 0, T = he();
          su(T, l.layoutBox, y.layoutBox, A);
          const C = he();
          su(C, s, S.layoutBox, A), fS(T, C) || (g = !0), v.options.layoutRoot && (i.relativeTarget = C, i.relativeTargetOrigin = T, i.relativeParent = v);
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
function wM(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function CM(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function MM(i) {
  i.clearSnapshot();
}
function Mv(i) {
  i.clearMeasurements();
}
function DM(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function Dv(i) {
  i.isLayoutDirty = !1;
}
function OM(i) {
  const { snapshot: l, dragAncestor: s } = i, r = s?.layout;
  if (!l || !r || i.resumeFrom || i.isAnimationBlocked)
    return;
  const c = s.dragSnapshot;
  Tn((d) => xn(l.layoutBox[d], r.layoutBox[d].min - c.layoutBox[d].min));
}
function zM(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.dragSnapshot || i.layout, i.isLayoutDirty = !0);
}
function RM(i) {
  i.relativeTarget && i.relativeParent?.isLayoutDirty && (i.currentAnimation ? i.isLayoutDirty = !0 : (i.targetDelta = void 0, i.removeRelativeTarget()));
}
function NM(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function Ov(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function _M(i) {
  i.resolveTargetDelta();
}
function VM(i) {
  i.calcProjection();
}
function jM(i) {
  i.resetSkewAndRotation();
}
function LM(i) {
  i.removeLeadSnapshot();
}
function zv(i, l, s) {
  i.translate = Qt(l.translate, 0, s), i.scale = Qt(l.scale, 1, s), i.origin = l.origin, i.originPoint = l.originPoint;
}
function Rv(i, l, s, r) {
  i.min = Qt(l.min, s.min, r), i.max = Qt(l.max, s.max, r);
}
function BM(i, l, s, r) {
  Rv(i.x, l.x, s.x, r), Rv(i.y, l.y, s.y, r);
}
function UM(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const HM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, Nv = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), _v = Nv("applewebkit/") && !Nv("chrome/") ? Math.round : En;
function Vv(i) {
  i.min = _v(i.min), i.max = _v(i.max);
}
function GM(i) {
  Vv(i.x), Vv(i.y);
}
function pS(i, l, s) {
  return i === "position" || i === "preserve-aspect" && !iM(xv(l), xv(s), 0.2);
}
function kM(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const YM = mS({
  attachResizeListener: (i, l) => Zs(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), Td = {
  current: void 0
}, gS = mS({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!Td.current) {
      const i = new YM({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), Td.current = i;
    }
    return Td.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), yS = Q.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function qM(i = !0) {
  const l = Q.useContext(ch);
  if (l === null)
    return [!0, null];
  const { isPresent: s, onExitComplete: r, register: c } = l, d = Q.useId();
  Q.useEffect(() => {
    if (i)
      return c(d);
  }, [i]);
  const f = Q.useCallback(() => i && r && r(d), [d, r, i]);
  return !s && r ? [!1, f] : [!0];
}
const vS = Q.createContext({ strict: !1 }), jv = {
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
let Lv = !1;
function XM() {
  if (Lv)
    return;
  const i = {};
  for (const l in jv)
    i[l] = {
      isEnabled: (s) => jv[l].some((r) => !!s[r])
    };
  tS(i), Lv = !0;
}
function bS() {
  return XM(), XC();
}
function QM(i) {
  const l = bS();
  for (const s in i)
    l[s] = {
      ...l[s],
      ...i[s]
    };
  tS(l);
}
const pu = /* @__PURE__ */ Q.createContext({});
function ZM(i, l) {
  if (mu(i)) {
    const { initial: s, animate: r } = i;
    return {
      initial: s === !1 || Xs(s) ? s : void 0,
      animate: Xs(r) ? r : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function KM(i) {
  const { initial: l, animate: s } = ZM(i, Q.useContext(pu));
  return Q.useMemo(() => ({ initial: l, animate: s }), [Bv(l), Bv(s)]);
}
function Bv(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const kh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function SS(i, l, s) {
  for (const r in l)
    !Me(l[r]) && !iS(r, s) && (i[r] = l[r]);
}
function PM({ transformTemplate: i }, l) {
  return Q.useMemo(() => {
    const s = kh();
    return jh(s, l, i), Object.assign({}, s.vars, s.style);
  }, [l]);
}
function FM(i, l) {
  const s = i.style || {}, r = {};
  return SS(r, s, i), Object.assign(r, PM(i, l)), r;
}
function JM(i, l) {
  const s = {}, r = FM(i, l);
  return i.drag && i.dragListener !== !1 && (s.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (s.tabIndex = 0), s.style = r, s;
}
const TS = () => ({
  ...kh(),
  attrs: {}
});
function IM(i, l, s, r) {
  const c = Q.useMemo(() => {
    const d = TS();
    return q1(d, l, lS(r), i.transformTemplate, i.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (i.style) {
    const d = {};
    SS(d, i.style, i), c.style = { ...d, ...c.style };
  }
  return c;
}
const WM = /* @__PURE__ */ new Set([
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
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || WM.has(i);
}
function $M(i, l) {
  return i.startsWith("on") ? !ou(i) : l?.(i) ?? !ou(i);
}
function t3(i, l, s, r) {
  const c = {};
  for (const d in i)
    d === "values" && typeof i.values == "object" || Me(i[d]) || ($M(d, r) || s === !0 && ou(d) || !l && !ou(d) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && d.startsWith("onDrag")) && (c[d] = i[d]);
  return c;
}
const e3 = [
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
function Yh(i) {
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
      !!(e3.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function n3(i, l, s, { latestValues: r }, c, d = !1, f, m) {
  const g = (f ?? Yh(i) ? IM : JM)(l, r, c, i), v = t3(l, typeof i == "string", d, m), y = i !== Q.Fragment ? { ...v, ...g, ref: s } : {}, { children: S } = l, A = Q.useMemo(() => Me(S) ? S.get() : S, [S]);
  return Q.createElement(i, {
    ...y,
    children: A
  });
}
function i3({ scrapeMotionValuesFromProps: i, createRenderState: l }, s, r, c) {
  return {
    latestValues: a3(s, r, c, i),
    renderState: l()
  };
}
function a3(i, l, s, r) {
  const c = {}, d = r(i, {});
  for (const S in d)
    c[S] = Zr(d[S]);
  let { initial: f, animate: m } = i;
  const p = mu(i), g = W1(i);
  l && g && !p && i.inherit !== !1 && (f === void 0 && (f = l.initial), m === void 0 && (m = l.animate));
  let v = s ? s.initial === !1 : !1;
  v = v || f === !1;
  const y = v ? m : f;
  if (y && typeof y != "boolean" && !hu(y)) {
    const S = Array.isArray(y) ? y : [y];
    for (let A = 0; A < S.length; A++) {
      const T = L1(i, S[A]);
      if (T) {
        const { transitionEnd: C, transition: E, ...z } = T;
        for (const B in z) {
          let k = z[B];
          if (Array.isArray(k)) {
            const _ = v ? k.length - 1 : 0;
            k = k[_];
          }
          k !== null && (c[B] = k);
        }
        for (const B in C)
          c[B] = C[B];
      }
    }
  }
  return c;
}
const xS = (i) => (l, s) => {
  const r = Q.useContext(pu), c = Q.useContext(ch), d = () => i3(i, l, r, c);
  return s ? d() : $A(d);
}, l3 = /* @__PURE__ */ xS({
  scrapeMotionValuesFromProps: Gh,
  createRenderState: kh
}), s3 = /* @__PURE__ */ xS({
  scrapeMotionValuesFromProps: sS,
  createRenderState: TS
}), o3 = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function r3(i, l, s) {
  const r = Q.useRef(s);
  Q.useInsertionEffect(() => {
    r.current = s;
  });
  const c = Q.useRef(null);
  return Q.useCallback((d) => {
    d && i.onMount?.(d), l && (d ? l.mount(d) : l.unmount());
    const f = r.current;
    if (typeof f == "function")
      if (d) {
        const m = f(d);
        typeof m == "function" && (c.current = m);
      } else c.current ? (c.current(), c.current = null) : f(d);
    else f && (f.current = d);
  }, [l]);
}
const ES = Q.createContext({});
function yl(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function u3(i, l, s, r, c, d) {
  const { visualElement: f } = Q.useContext(pu), m = Q.useContext(vS), p = Q.useContext(ch), g = Q.useContext(yS), v = g.reducedMotion, y = g.skipAnimations, S = Q.useRef(null), A = Q.useRef(!1);
  r = r || m.renderer, !S.current && r && (S.current = r(i, {
    visualState: l,
    parent: f,
    props: s,
    presenceContext: p,
    blockInitialAnimation: p ? p.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: y,
    isSVG: d
  }), A.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const T = S.current, C = Q.useContext(ES);
  T && !T.projection && c && (T.type === "html" || T.type === "svg") && c3(S.current, s, c, C);
  const E = Q.useRef(!1);
  Q.useInsertionEffect(() => {
    T && E.current && T.update(s, p);
  });
  const z = s[H1], B = Q.useRef(!!z && typeof window < "u" && !window.MotionHandoffIsComplete?.(z) && window.MotionHasOptimisedAnimation?.(z));
  return N0(() => {
    !A.current || !T || (T.animationState?.animateChanges(), T.enteringChildren = void 0);
  }, []), N0(() => {
    A.current = !0, T && (E.current = !0, window.MotionIsMounted = !0, T.updateFeatures(), T.scheduleRenderMicrotask(), B.current && T.animationState && T.animationState.animateChanges());
  }), Q.useEffect(() => {
    T && (!B.current && T.animationState && T.animationState.animateChanges(), B.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(z);
    }), B.current = !1), T.enteringChildren = void 0);
  }), T;
}
function c3(i, l, s, r) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: m, layoutScroll: p, layoutRoot: g, layoutAnchor: v, layoutCrossfade: y } = l;
  i.projection = new s(i.latestValues, l["data-framer-portal-id"] ? void 0 : AS(i.parent)), i.projection.setOptions({
    layoutId: c,
    layout: d,
    alwaysMeasureLayout: !!f || m && yl(m),
    visualElement: i,
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof d == "string" ? d : "both",
    initialPromotionConfig: r,
    crossfade: y,
    layoutScroll: p,
    layoutRoot: g,
    layoutAnchor: v
  });
}
function AS(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : AS(i.parent);
}
function xd(i, { forwardMotionProps: l = !1, type: s } = {}, r, c) {
  r && QM(r);
  const d = s ? s === "svg" : Yh(i), f = d ? s3 : l3;
  function m(g, v) {
    let y;
    const S = {
      ...Q.useContext(yS),
      ...g,
      layoutId: f3(g)
    }, { isStatic: A, isValidProp: T } = S, C = KM(g), E = f(g, A);
    if (!A && typeof window < "u") {
      d3();
      const z = h3(S);
      y = z.MeasureLayout, C.visualElement = u3(i, E, S, c, z.ProjectionNode, d);
    }
    return O.jsxs(pu.Provider, { value: C, children: [y && C.visualElement ? O.jsx(y, { visualElement: C.visualElement, ...S }) : null, n3(i, g, r3(E, C.visualElement, v), E, A, l, d, T)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const p = Q.forwardRef(m);
  return p[o3] = i, p;
}
function f3({ layoutId: i }) {
  const l = Q.useContext(Xb).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function d3(i, l) {
  Q.useContext(vS).strict;
}
function h3(i) {
  const l = bS(), { drag: s, layout: r } = l;
  if (!s && !r)
    return {};
  const c = { ...s, ...r };
  return {
    MeasureLayout: s?.isEnabled(i) || r?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function m3(i, l) {
  if (typeof Proxy > "u")
    return xd;
  const s = /* @__PURE__ */ new Map(), r = (d, f) => xd(d, f, i, l), c = (d, f) => r(d, f);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, f) => f === "create" ? r : (s.has(f) || s.set(f, xd(f, void 0, i, l)), s.get(f))
  });
}
const p3 = (i, l) => l.isSVG ?? Yh(i) ? new FC(l) : new KC(l, {
  allowProjection: i !== Q.Fragment
});
class g3 extends ki {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = IC(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    hu(l) && (this.unmountControls = l.subscribe(this.node));
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
let y3 = 0;
class v3 extends ki {
  constructor() {
    super(...arguments), this.id = y3++;
  }
  update() {
    const { presenceContext: l, prevPresenceContext: s, animationState: r } = this.node;
    if (!l || !r)
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
        this.node.blockInitialAnimation = !1, r.reset(), r.animateChanges();
      } else
        r.setActive("exit", !1);
      this.exit = void 0;
      return;
    }
    const m = this.exit = r.setActive("exit", !c);
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
const b3 = {
  animation: {
    Feature: g3
  },
  exit: {
    Feature: v3
  }
};
function gu(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const S3 = (i) => (l) => Bh(l) && i(l, gu(l));
function js(i, l, s, r) {
  return Zs(i, l, S3(s), r);
}
const wS = ({ current: i }) => i ? i.ownerDocument.defaultView : null, Uv = (i, l) => Math.abs(i - l);
function T3(i, l) {
  const s = Uv(i.x, l.x), r = Uv(i.y, l.y);
  return Math.sqrt(s ** 2 + r ** 2);
}
const Hv = /* @__PURE__ */ new Set(["auto", "scroll"]);
class CS {
  constructor(l, s, { transformPagePoint: r, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: f = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (T) => {
      this.handleScroll(T.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = jr(this.lastRawMoveEventInfo, this.transformPagePoint));
      const T = Ed(this.lastMoveEventInfo, this.history), C = this.startEvent !== null, E = T3(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!C && !E)
        return;
      const { point: z } = T;
      this.history.push({ ...z, timestamp: te.now() });
      const { onStart: B, onMove: k } = this.handlers;
      C || (B && B(this.lastMoveEvent, T), this.startEvent = this.lastMoveEvent), k && k(this.lastMoveEvent, T);
    }, this.handlePointerMove = (T, C) => {
      this.lastMoveEvent = T, this.lastRawMoveEventInfo = C, this.lastMoveEventInfo = jr(C, this.transformPagePoint), this.hasPendingMove = !0, Kt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (T, C) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: E, onSessionEnd: z, resumeAnimation: B } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && B && B(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const k = Ed(T.type === "pointercancel" ? this.lastMoveEventInfo : jr(C, this.transformPagePoint), this.history);
      this.startEvent && E && E(T, k), z && z(T, k);
    }, !Bh(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = s, this.transformPagePoint = r, this.distanceThreshold = f, this.contextWindow = c || window;
    const p = gu(l), g = jr(p, this.transformPagePoint), { point: v } = g, { timestamp: y } = ce;
    this.history = [{ ...v, timestamp: y }];
    const { onSessionStart: S } = s;
    S && S(l, Ed(g, this.history));
    const A = { passive: !0, capture: !0 };
    this.removeListeners = Is(js(this.contextWindow, "pointermove", this.handlePointerMove, A), js(this.contextWindow, "pointerup", this.handlePointerUp, A), js(this.contextWindow, "pointercancel", this.handlePointerUp, A)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let s = l.parentElement;
    for (; s; ) {
      const r = getComputedStyle(s);
      (Hv.has(r.overflowX) || Hv.has(r.overflowY)) && this.scrollPositions.set(s, {
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
    const r = l === window, c = r ? { x: window.scrollX, y: window.scrollY } : {
      x: l.scrollLeft,
      y: l.scrollTop
    }, d = { x: c.x - s.x, y: c.y - s.y };
    d.x === 0 && d.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, c), Kt.update(this.updatePoint, !0));
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
function Gv(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Ed({ point: i }, l) {
  return {
    point: i,
    delta: Gv(i, MS(l)),
    offset: Gv(i, x3(l)),
    velocity: E3(l, 0.1)
  };
}
function x3(i) {
  return i[0];
}
function MS(i) {
  return i[i.length - 1];
}
function E3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let s = i.length - 1, r = null;
  const c = MS(i);
  for (; s >= 0 && (r = i[s], !(c.timestamp - r.timestamp > /* @__PURE__ */ dn(l))); )
    s--;
  if (!r)
    return { x: 0, y: 0 };
  r === i[0] && i.length > 2 && c.timestamp - r.timestamp > /* @__PURE__ */ dn(l) * 2 && (r = i[1]);
  const d = /* @__PURE__ */ We(c.timestamp - r.timestamp);
  if (d === 0)
    return { x: 0, y: 0 };
  const f = {
    x: (c.x - r.x) / d,
    y: (c.y - r.y) / d
  };
  return f.x === 1 / 0 && (f.x = 0), f.y === 1 / 0 && (f.y = 0), f;
}
function A3(i, { min: l, max: s }, r) {
  return l !== void 0 && i < l ? i = r ? Qt(l, i, r.min) : Math.max(i, l) : s !== void 0 && i > s && (i = r ? Qt(s, i, r.max) : Math.min(i, s)), i;
}
function kv(i, l, s) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: s !== void 0 ? i.max + s - (i.max - i.min) : void 0
  };
}
function w3(i, { top: l, left: s, bottom: r, right: c }) {
  return {
    x: kv(i.x, s, c),
    y: kv(i.y, l, r)
  };
}
function Yv(i, l) {
  let s = l.min - i.min, r = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([s, r] = [r, s]), { min: s, max: r };
}
function C3(i, l) {
  return {
    x: Yv(i.x, l.x),
    y: Yv(i.y, l.y)
  };
}
function M3(i, l) {
  let s = 0.5;
  const r = je(i), c = je(l);
  return c > r ? s = /* @__PURE__ */ xa(l.min, l.max - r, i.min) : r > c && (s = /* @__PURE__ */ xa(i.min, i.max - c, l.min)), Gn(0, 1, s);
}
function D3(i, l) {
  const s = {};
  return l.min !== void 0 && (s.min = l.min - i.min), l.max !== void 0 && (s.max = l.max - i.min), s;
}
const Wd = 0.35;
function O3(i = Wd) {
  return i === !1 ? i = 0 : i === !0 && (i = Wd), {
    x: qv(i, "left", "right"),
    y: qv(i, "top", "bottom")
  };
}
function qv(i, l, s) {
  return {
    min: Xv(i, l),
    max: Xv(i, s)
  };
}
function Xv(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const z3 = /* @__PURE__ */ new WeakMap();
class R3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = he(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: s = !1, distanceThreshold: r } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (y) => {
      s && this.snapToCursor(y), this.stopAnimation();
    }, f = (y, S) => {
      const { drag: A, dragPropagation: T, onDragStart: C } = this.getProps();
      if (A && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = EC(A), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Tn((z) => {
        let B = this.getAxisMotionValue(z).get() || 0;
        if (Un.test(B)) {
          const { projection: k } = this.visualElement;
          if (k && k.layout) {
            const _ = k.layout.layoutBox[z];
            _ && (B = je(_) * (parseFloat(B) / 100));
          }
        }
        this.originPoint[z] = B;
      }), C && Kt.update(() => C(y, S), !1, !0), Kd(this.visualElement, "transform");
      const { animationState: E } = this.visualElement;
      E && E.setActive("whileDrag", !0);
    }, m = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S;
      const { dragPropagation: A, dragDirectionLock: T, onDirectionLock: C, onDrag: E } = this.getProps();
      if (!A && !this.openDragLock)
        return;
      const { offset: z } = S;
      if (T && this.currentDirection === null) {
        this.currentDirection = _3(z), this.currentDirection !== null && C && C(this.currentDirection);
        return;
      }
      this.updateAxis("x", S.point, z), this.updateAxis("y", S.point, z), this.visualElement.render(), E && Kt.update(() => E(y, S), !1, !0);
    }, p = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S, this.stop(y, S), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new CS(l, {
      onSessionStart: d,
      onStart: f,
      onMove: m,
      onSessionEnd: p,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: r,
      contextWindow: wS(this.visualElement),
      element: this.visualElement.current
    });
  }
  /**
   * @internal
   */
  stop(l, s) {
    const r = l || this.latestPointerEvent, c = s || this.latestPanInfo, d = this.isDragging;
    if (this.cancel(), !d || !c || !r)
      return;
    const { velocity: f } = c;
    this.startAnimation(f);
    const { onDragEnd: m } = this.getProps();
    m && Kt.postRender(() => m(r, c));
  }
  /**
   * @internal
   */
  cancel() {
    this.isDragging = !1;
    const { projection: l, animationState: s } = this.visualElement;
    l && (l.isAnimationBlocked = !1), this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(), this.openDragLock = null), s && s.setActive("whileDrag", !1);
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
  updateAxis(l, s, r) {
    const { drag: c } = this.getProps();
    if (!r || !Lr(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + r[l];
    this.constraints && this.constraints[l] && (f = A3(f, this.constraints[l], this.elastic[l])), d.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: s } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && yl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && r ? this.constraints = w3(r.layoutBox, l) : this.constraints = !1, this.elastic = O3(s), c !== this.constraints && !yl(l) && r && this.constraints && !this.hasMutatedConstraints && Tn((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = D3(r.layoutBox[d], this.constraints[d]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: l, onMeasureDragConstraints: s } = this.getProps();
    if (!l || !yl(l))
      return !1;
    const r = l.current, { projection: c } = this.visualElement;
    if (!c || !c.layout)
      return !1;
    c.root && (c.root.scroll = void 0, c.root.updateScroll());
    const d = xC(r, c.root, this.visualElement.getTransformPagePoint());
    let f = C3(c.layout.layoutBox, d);
    if (s) {
      const m = s(bC(f));
      this.hasMutatedConstraints = !!m, m && (f = X1(m));
    }
    return f;
  }
  startAnimation(l) {
    const { drag: s, dragMomentum: r, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: m } = this.getProps(), p = this.constraints || {}, g = Tn((v) => {
      if (!Lr(v, s, this.currentDirection))
        return;
      let y = p && p[v] || {};
      (f === !0 || f === v) && (y = { min: 0, max: 0 });
      const S = c ? 200 : 1e6, A = c ? 40 : 1e7, T = {
        type: "inertia",
        velocity: r ? l[v] : 0,
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
    const r = this.getAxisMotionValue(l);
    return Kd(this.visualElement, l), r.start(zh(l, r, 0, s, this.visualElement, !1));
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
    const { drag: r } = this.getProps(), c = { x: l, y: s }, d = this.visualElement.getTransformPagePoint()?.(c) || c, f = this.visualElement.measureViewportBox();
    Tn((m) => {
      if (!Lr(m, r, this.currentDirection))
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
    const { drag: l, dragConstraints: s } = this.getProps(), { projection: r } = this.visualElement;
    if (!yl(s) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const c = this.constraints, d = { x: 0, y: 0 };
    Tn((m) => {
      const p = this.getAxisMotionValue(m).get();
      d[m] = M3({ min: p, max: p }, c[m]);
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    this.visualElement.current.style.transform = f ? f({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.constraints = !1, this.resolveConstraints(), Tn((m) => {
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
    z3.set(this.visualElement, this);
    const l = this.visualElement.current, s = js(l, "pointerdown", (g) => {
      const { drag: v, dragListener: y = !0 } = this.getProps(), S = g.target, A = S !== l && OC(S);
      v && y && !A && this.start(g);
    });
    let r;
    const c = () => {
      const { dragConstraints: g } = this.getProps();
      yl(g) && g.current && (this.constraints = this.resolveRefConstraints(), r || (r = N3(l, g.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, f = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Kt.read(c);
    const m = Zs(window, "resize", () => this.scalePositionWithinConstraints()), p = d.addEventListener("didUpdate", (({ delta: g, hasLayoutChanged: v }) => {
      this.isDragging && v && (Tn((y) => {
        const S = this.getAxisMotionValue(y);
        S && (this.originPoint[y] += g[y].translate, S.set(S.get() + g[y].translate));
      }), this.visualElement.render());
    }));
    return () => {
      m(), s(), f(), p && p(), r && r();
    };
  }
  getProps() {
    const l = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: r = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: f = Wd, dragMomentum: m = !0 } = l;
    return {
      ...l,
      drag: s,
      dragDirectionLock: r,
      dragPropagation: c,
      dragConstraints: d,
      dragElastic: f,
      dragMomentum: m
    };
  }
}
function Qv(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function N3(i, l, s) {
  const r = lv(i, Qv(s)), c = lv(l, Qv(s));
  return () => {
    r(), c();
  };
}
function Lr(i, l, s) {
  return (l === !0 || l === i) && (s === null || s === i);
}
function _3(i, l = 10) {
  let s = null;
  return Math.abs(i.y) > l ? s = "y" : Math.abs(i.x) > l && (s = "x"), s;
}
class V3 extends ki {
  constructor(l) {
    super(l), this.removeGroupControls = En, this.removeListeners = En, this.controls = new R3(l);
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
const Ad = (i) => (l, s) => {
  i && Kt.update(() => i(l, s), !1, !0);
};
class j3 extends ki {
  constructor() {
    super(...arguments), this.removePointerDownListener = En;
  }
  onPointerDown(l) {
    this.session = new CS(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: wS(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: s, onPan: r, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Ad(l),
      onStart: Ad(s),
      onMove: Ad(r),
      onEnd: (d, f) => {
        delete this.session, c && Kt.postRender(() => c(d, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = js(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let wd = !1;
class L3 extends Q.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: s, switchLayoutGroup: r, layoutId: c } = this.props, { projection: d } = l;
    d && (s.group && s.group.add(d), r && r.register && c && r.register(d), wd && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Kr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: s, visualElement: r, drag: c, isPresent: d } = this.props, { projection: f } = r;
    return f && (f.isPresent = d, l.layoutDependency !== s && f.setOptions({
      ...f.options,
      layoutDependency: s
    }), wd = !0, c || l.layoutDependency !== s || s === void 0 || l.isPresent !== d ? f.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? f.promote() : f.relegate() || Kt.postRender(() => {
      const m = f.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: s } = this.props, { projection: r } = l;
    r && (r.options.layoutAnchor = s, r.root.didUpdate(), Lh.postRender(() => {
      !r.currentAnimation && r.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: s, switchLayoutGroup: r } = this.props, { projection: c } = l;
    wd = !0, c && (c.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(c), r && r.deregister && r.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function DS(i) {
  const [l, s] = qM(), r = Q.useContext(Xb);
  return O.jsx(L3, { ...i, layoutGroup: r, switchLayoutGroup: Q.useContext(ES), isPresent: l, safeToRemove: s });
}
const B3 = {
  pan: {
    Feature: j3
  },
  drag: {
    Feature: V3,
    ProjectionNode: gS,
    MeasureLayout: DS
  }
};
function Zv(i, l, s) {
  const { props: r } = i;
  i.animationState && r.whileHover && i.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s, d = r[c];
  d && Kt.postRender(() => d(l, gu(l)));
}
class U3 extends ki {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = wC(l, (s, r) => (Zv(this.node, r, "Start"), (c) => Zv(this.node, c, "End"))));
  }
  unmount() {
  }
}
class H3 extends ki {
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
function Kv(i, l, s) {
  const { props: r } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && r.whileTap && i.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s), d = r[c];
  d && Kt.postRender(() => d(l, gu(l)));
}
class G3 extends ki {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: s, propagate: r } = this.node.props;
    this.unmount = RC(l, (c, d) => (Kv(this.node, d, "Start"), (f, { success: m }) => Kv(this.node, f, m ? "End" : "Cancel")), {
      useGlobalTarget: s,
      stopPropagation: r?.tap === !1
    });
  }
  unmount() {
  }
}
const $d = /* @__PURE__ */ new WeakMap(), Cd = /* @__PURE__ */ new WeakMap(), k3 = (i) => {
  const l = $d.get(i.target);
  l && l(i);
}, Y3 = (i) => {
  i.forEach(k3);
};
function q3({ root: i, ...l }) {
  const s = i || document;
  Cd.has(s) || Cd.set(s, {});
  const r = Cd.get(s), c = JSON.stringify(l);
  return r[c] || (r[c] = new IntersectionObserver(Y3, { root: i, ...l })), r[c];
}
function X3(i, l, s) {
  const r = q3(l);
  return $d.set(i, s), r.observe(i), () => {
    $d.delete(i), r.unobserve(i);
  };
}
const Q3 = {
  some: 0,
  all: 1
};
class Z3 extends ki {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: s, margin: r, amount: c = "some", once: d } = l, f = {
      root: s ? s.current : void 0,
      rootMargin: r,
      threshold: typeof c == "number" ? c : Q3[c]
    }, m = (p) => {
      const { isIntersecting: g } = p;
      if (this.isInView === g || (this.isInView = g, d && !g && this.hasEnteredView))
        return;
      g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
      const { onViewportEnter: v, onViewportLeave: y } = this.node.getProps(), S = g ? v : y;
      S && S(p);
    };
    this.stopObserver = X3(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(K3(l, s)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function K3({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (s) => i[s] !== l[s];
}
const P3 = {
  inView: {
    Feature: Z3
  },
  tap: {
    Feature: G3
  },
  focus: {
    Feature: H3
  },
  hover: {
    Feature: U3
  }
}, F3 = {
  layout: {
    ProjectionNode: gS,
    MeasureLayout: DS
  }
}, J3 = {
  ...b3,
  ...P3,
  ...B3,
  ...F3
}, ru = /* @__PURE__ */ m3(J3, p3);
function qh() {
  !Hh.current && $1();
  const [i] = Q.useState(au.current);
  return i;
}
const I3 = {
  some: 0,
  all: 1
};
function W3(i, l, { root: s, margin: r, amount: c = "some" } = {}) {
  const d = Vh(i), f = /* @__PURE__ */ new WeakMap(), m = (g) => {
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
    rootMargin: r,
    threshold: typeof c == "number" ? c : I3[c]
  });
  return d.forEach((g) => p.observe(g)), () => p.disconnect();
}
function Xh(i, { root: l, margin: s, amount: r, once: c = !1, initial: d = !1 } = {}) {
  const [f, m] = Q.useState(d);
  return Q.useEffect(() => {
    if (!i.current || c && f)
      return;
    const p = () => (m(!0), c ? void 0 : () => m(!1)), g = {
      root: l && l.current || void 0,
      margin: s,
      amount: r
    };
    return W3(i.current, p, g);
  }, [l, i, s, c, r]), f;
}
function $3({
  title: i = `Little moments.
Lasting impressions.`,
  subtitle: l = "Stories from the people who bring our vetiver pieces into their homes and celebrations.",
  badgeText: s = "",
  testimonials: r = [],
  autoRotateInterval: c = 6e3,
  trustedCompanies: d = [],
  trustedCompaniesTitle: f = "Our community",
  className: m
}) {
  const p = Q.useRef(null), g = Xh(p, { amount: 0.15 }), v = qh(), [y, S] = Q.useState(0), [A, T] = Q.useState(!1), [C, E] = Q.useState(!1), [z, B] = Q.useState(!0), k = Q.useId(), _ = r.length ? y % r.length : 0;
  Q.useEffect(() => {
    const Z = () => B(!document.hidden);
    return Z(), document.addEventListener("visibilitychange", Z), () => document.removeEventListener("visibilitychange", Z);
  }, []), Q.useEffect(() => {
    if (c <= 0 || r.length <= 1 || v || A || C || !g || !z) return;
    const Z = window.setInterval(() => S((R) => (R + 1) % r.length), Math.max(3e3, c));
    return () => clearInterval(Z);
  }, [c, r.length, v, A, C, g, z]);
  const X = (Z) => {
    T(!0), S((Z + r.length) % r.length);
  };
  return /* @__PURE__ */ O.jsxs("section", { ref: p, id: "testimonials", "aria-labelledby": k, className: rh("vt-testimonials", m), children: [
    /* @__PURE__ */ O.jsxs("div", { className: "vt-section-inner vt:grid vt:grid-cols-1 vt:gap-12 vt:md:grid-cols-2 vt:md:gap-16", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "vt-testimonial-intro", children: [
        s && /* @__PURE__ */ O.jsx("p", { className: "vt-review-badge", children: s }),
        /* @__PURE__ */ O.jsx("h2", { id: k, children: i }),
        /* @__PURE__ */ O.jsx("p", { children: l }),
        /* @__PURE__ */ O.jsxs("button", { type: "button", className: "vt-primary-button vt-add-feedback", "aria-haspopup": "dialog", "aria-controls": "feedback-dialog", onClick: () => window.dispatchEvent(new Event("vettiver:add-feedback")), children: [
          "Add feedback ",
          /* @__PURE__ */ O.jsx(_s, { size: 18, "aria-hidden": "true" })
        ] }),
        r.length > 1 && /* @__PURE__ */ O.jsxs("div", { className: "vt-review-controls", "aria-label": "Customer story controls", children: [
          /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => X(_ - 1), "aria-label": "Previous review", children: /* @__PURE__ */ O.jsx(Vb, { size: 19 }) }),
          /* @__PURE__ */ O.jsxs("span", { children: [
            String(_ + 1).padStart(2, "0"),
            " / ",
            String(r.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => X(_ + 1), "aria-label": "Next review", children: /* @__PURE__ */ O.jsx(_s, { size: 19 }) }),
          !v && c > 0 && /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => T(!A), "aria-label": A ? "Play review slideshow" : "Pause review slideshow", children: A ? /* @__PURE__ */ O.jsx(fu, { size: 17 }) : /* @__PURE__ */ O.jsx(cu, { size: 17 }) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "vt-review-stage", onMouseEnter: () => E(!0), onMouseLeave: () => E(!1), onFocusCapture: () => E(!0), onBlurCapture: (Z) => {
        Z.currentTarget.contains(Z.relatedTarget) || E(!1);
      }, "aria-roledescription": r.length ? "carousel" : void 0, "aria-label": "Customer feedback", children: [
        r.length ? /* @__PURE__ */ O.jsx("div", { className: "vt-review-stack", "aria-live": A ? "polite" : "off", children: r.map((Z, R) => /* @__PURE__ */ O.jsxs(
          ru.article,
          {
            className: "vt-review-card",
            "aria-hidden": R !== _,
            "aria-label": "Review " + (R + 1) + " of " + r.length,
            initial: !1,
            animate: { opacity: R === _ ? 1 : 0, x: v || R === _ ? 0 : 32, scale: v || R === _ ? 1 : 0.98 },
            transition: { duration: v ? 0 : 0.45, ease: "easeInOut" },
            style: { gridArea: "1 / 1", pointerEvents: R === _ ? "auto" : "none" },
            children: [
              /* @__PURE__ */ O.jsx("div", { className: "vt-review-stars", "aria-label": Math.max(1, Math.min(5, Math.round(Z.rating || 1))) + " out of 5 stars", children: Array.from({ length: Math.max(1, Math.min(5, Math.round(Z.rating || 1))) }, (D, ot) => /* @__PURE__ */ O.jsx(Yb, { size: 18, fill: "currentColor", "aria-hidden": "true" }, ot)) }),
              /* @__PURE__ */ O.jsx(IA, { size: 38, strokeWidth: 1.2, className: "vt-quote-mark", "aria-hidden": "true" }),
              /* @__PURE__ */ O.jsx("blockquote", { children: Z.content }),
              /* @__PURE__ */ O.jsx(Nb, { className: "vt:my-6" }),
              /* @__PURE__ */ O.jsx("p", { className: "vt-review-name", children: Z.name })
            ]
          },
          Z.id
        )) }) : /* @__PURE__ */ O.jsxs("div", { className: "vt-review-empty", children: [
          /* @__PURE__ */ O.jsx(JA, { size: 38, strokeWidth: 1.2, "aria-hidden": "true" }),
          /* @__PURE__ */ O.jsx("h3", { children: "Your story belongs here." }),
          /* @__PURE__ */ O.jsx("p", { children: "Our customer stories are just beginning. Once feedback has been reviewed and approved, you can read it here." }),
          /* @__PURE__ */ O.jsx("span", { children: "No published reviews yet." })
        ] }),
        r.length > 1 && /* @__PURE__ */ O.jsx("div", { className: "vt-review-dots", children: r.map((Z, R) => /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => X(R), "aria-label": "Read review by " + Z.name, "aria-pressed": R === _, children: /* @__PURE__ */ O.jsx("span", {}) }, Z.id)) })
      ] })
    ] }),
    d.length > 0 && /* @__PURE__ */ O.jsxs("div", { className: "vt-section-inner vt-review-companies", children: [
      /* @__PURE__ */ O.jsx("h3", { children: f }),
      /* @__PURE__ */ O.jsx("div", { children: d.map((Z) => /* @__PURE__ */ O.jsx("span", { children: Z }, Z)) })
    ] })
  ] });
}
const Md = "vettiver-feedback-draft-v1";
function Pv({ endpoint: i = "" }) {
  const l = Q.useRef(null);
  Q.useEffect(() => {
    const _ = l.current;
    if (!_) return;
    const X = () => {
      _.open || _.showModal();
    };
    return window.addEventListener("vettiver:add-feedback", X), () => {
      window.removeEventListener("vettiver:add-feedback", X), _.close();
    };
  }, []);
  const [s, r] = Q.useState(""), [c, d] = Q.useState(""), [f, m] = Q.useState(0), [p, g] = Q.useState(!1), [v, y] = Q.useState(""), [S, A] = Q.useState(!1), [T, C] = Q.useState(!1), [E, z] = Q.useState(!1);
  async function B(_) {
    if (_.preventDefault(), A(!1), !s.trim() || !c.trim() || !f) {
      A(!0), y("Please add your name, feedback and a star rating.");
      return;
    }
    if (E || p) return;
    const X = { name: s.trim(), content: c.trim(), rating: f };
    if (!i) {
      try {
        localStorage.setItem(Md, JSON.stringify(X)), y("Draft saved only on this device. It has not been sent or published.");
      } catch {
        A(!0), y("Your browser could not save the draft. Please copy your feedback to keep it.");
      }
      return;
    }
    g(!0);
    try {
      const Z = await fetch(i, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...X, consentToPublish: T }), credentials: "same-origin" });
      if (!Z.ok) throw new Error("Request failed");
      const R = await Z.json();
      if (!R.id || R.status !== "pending") throw new Error("Invalid acknowledgement");
      z(!0), y("Thank you. Your feedback was received and is waiting for approval. It is not public yet.");
    } catch {
      A(!0), y("We could not submit your feedback. Nothing has been published. Please try again.");
    } finally {
      g(!1);
    }
  }
  function k() {
    try {
      const _ = JSON.parse(localStorage.getItem(Md) || "null");
      if (!_ || typeof _.name != "string" || typeof _.content != "string" || !Number.isInteger(_.rating) || _.rating < 1 || _.rating > 5) {
        y("No saved draft on this device.");
        return;
      }
      r(_.name.slice(0, 80)), d(_.content.slice(0, 1200)), m(_.rating), y("Your draft is restored. It has not been sent.");
    } catch {
      y("No readable draft on this device.");
    }
  }
  return /* @__PURE__ */ O.jsxs("dialog", { ref: l, id: "feedback-dialog", className: "vt-feedback-dialog", "aria-labelledby": "feedback-dialog-title", "aria-describedby": "feedback-dialog-description", onKeyDown: (_) => {
    if (_.key !== "Tab") return;
    const X = Array.from(_.currentTarget.querySelectorAll("button:not(:disabled), input:not(:disabled), textarea:not(:disabled)")), Z = X[0], R = X[X.length - 1];
    _.shiftKey && document.activeElement === Z ? (_.preventDefault(), R?.focus()) : !_.shiftKey && document.activeElement === R && (_.preventDefault(), Z?.focus());
  }, onClick: (_) => {
    if (_.target !== _.currentTarget) return;
    const X = _.currentTarget.getBoundingClientRect();
    (_.clientX < X.left || _.clientX > X.right || _.clientY < X.top || _.clientY > X.bottom) && _.currentTarget.close();
  }, children: [
    /* @__PURE__ */ O.jsx("button", { type: "button", className: "vt-feedback-close", "aria-label": "Close feedback", onClick: () => l.current?.close(), children: /* @__PURE__ */ O.jsx(WA, { size: 22, "aria-hidden": "true" }) }),
    /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-heading", children: [
      /* @__PURE__ */ O.jsx("h2", { id: "feedback-dialog-title", children: "A few words mean a lot." }),
      /* @__PURE__ */ O.jsx("p", { id: "feedback-dialog-description", children: "Tell us about your Vettiver experience." })
    ] }),
    /* @__PURE__ */ O.jsxs("form", { id: "feedback-form", className: "vt-feedback-form", onSubmit: B, "aria-label": "Share customer feedback", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-fields", children: [
        /* @__PURE__ */ O.jsxs("div", { children: [
          /* @__PURE__ */ O.jsx("label", { htmlFor: "feedback-name", children: "Your name" }),
          /* @__PURE__ */ O.jsx("input", { id: "feedback-name", name: "name", autoComplete: "name", maxLength: 80, required: !0, value: s, onChange: (_) => r(_.target.value), disabled: p || E })
        ] }),
        /* @__PURE__ */ O.jsxs("fieldset", { children: [
          /* @__PURE__ */ O.jsx("legend", { children: "Your rating" }),
          /* @__PURE__ */ O.jsx("div", { className: "vt-rating-input", children: [1, 2, 3, 4, 5].map((_) => /* @__PURE__ */ O.jsxs("label", { className: _ <= f ? "is-selected" : "", children: [
            /* @__PURE__ */ O.jsx("input", { type: "radio", name: "rating", value: _, required: !0, checked: f === _, onChange: () => m(_), disabled: p || E }),
            /* @__PURE__ */ O.jsx(Yb, { size: 25, fill: _ <= f ? "currentColor" : "none", "aria-hidden": "true" }),
            /* @__PURE__ */ O.jsxs("span", { className: "vt:sr-only", children: [
              _,
              " ",
              _ === 1 ? "star" : "stars"
            ] })
          ] }, _)) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx("label", { htmlFor: "feedback-content", children: "Your feedback" }),
      /* @__PURE__ */ O.jsx("textarea", { id: "feedback-content", name: "content", rows: 3, maxLength: 1200, required: !0, value: c, onChange: (_) => d(_.target.value), disabled: p || E, placeholder: "What did you choose, and how was your experience?" }),
      i ? /* @__PURE__ */ O.jsxs("label", { className: "vt-feedback-consent", children: [
        /* @__PURE__ */ O.jsx("input", { type: "checkbox", required: !0, checked: T, onChange: (_) => C(_.target.checked), disabled: p || E }),
        " I agree that my name, rating and feedback may be published after review."
      ] }) : /* @__PURE__ */ O.jsx("p", { className: "vt-feedback-note", children: "Review submissions will open when our approval system is ready. For now, save a draft on this device. Nothing is sent to us." }),
      /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-actions", children: [
        /* @__PURE__ */ O.jsxs("button", { className: "vt-primary-button", type: "submit", disabled: p || E, children: [
          p ? "Sending…" : E ? "Waiting for approval" : i ? "Send for approval" : "Save feedback draft",
          /* @__PURE__ */ O.jsx(uh, { size: 18, "aria-hidden": "true" })
        ] }),
        !i && /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          /* @__PURE__ */ O.jsx("button", { className: "vt-text-link", type: "button", onClick: k, children: "Restore draft" }),
          /* @__PURE__ */ O.jsx("button", { className: "vt-text-link", type: "button", onClick: () => {
            try {
              localStorage.removeItem(Md), y("Saved draft removed from this device.");
            } catch {
              y("Could not remove the saved draft.");
            }
          }, children: "Delete saved draft" })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx("p", { className: "vt-feedback-status" + (S ? " is-error" : ""), role: "status", "aria-live": "polite", children: v })
    ] })
  ] });
}
const Ks = (i, l, s) => i < l ? l : i > s ? s : i, Fv = (i, l = "174, 204, 135") => {
  const s = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec((i || "").trim());
  if (!s) return l;
  const r = s[1].length === 3 ? s[1].replace(/./g, (d) => d + d) : s[1], c = parseInt(r, 16);
  return (c >> 16 & 255) + ", " + (c >> 8 & 255) + ", " + (c & 255);
}, tD = (i, l, s) => {
  if (!(i > 0) || !(l > 0)) return 0;
  const r = 100 * l / i;
  return s > 0 ? Math.min(r, s) : r;
}, eD = (i, l = 30, s = 82) => l + (s - l) * Ks(Number.isFinite(i) ? i : 0.5, 0, 1), Jv = (i, l = 58, s = 9) => l + s * (0.7 * Math.sin(i * 0.21) + 0.3 * Math.sin(i * 0.077 + 1.3)), Br = (i, l, s, r) => l + (i - l) * Math.pow(1 - Ks(s, 0, 1), Ks(r, 0, 0.1) * 60), nD = (i, l) => !(i > 0) || !(l >= 0) ? 0.8 : Ks(((100 - i - l) / 2 + i) / 100, 0.5, 1.2), iD = (i, l, s) => Math.max(0, i * (l + Ks(Number.isFinite(s) ? s : 0, -0.4, 0.4))), Iv = {
  x: /* @__PURE__ */ O.jsx("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("path", { fill: "currentColor", d: "M17.6 3.5h2.9l-6.3 7.2 7.4 9.8h-5.8l-4.5-5.9-5.2 5.9H3.2l6.7-7.7L2.8 3.5h5.9l4.1 5.4 4.8-5.4Zm-1 15.3h1.6L7.9 5.1H6.2l10.4 13.7Z" }) }),
  linkedin: /* @__PURE__ */ O.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "2.5" }),
    /* @__PURE__ */ O.jsx("path", { d: "M8 10.5V16M12 16v-5.5M12 13c0-1.6 1-2.6 2.4-2.6s2.1.9 2.1 2.4V16" }),
    /* @__PURE__ */ O.jsx("circle", { cx: "8", cy: "7.7", r: ".55", fill: "currentColor" })
  ] }),
  youtube: /* @__PURE__ */ O.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("rect", { x: "2.75", y: "5.5", width: "18.5", height: "13", rx: "4" }),
    /* @__PURE__ */ O.jsx("path", { d: "M10.2 9.3v5.4l4.6-2.7-4.6-2.7Z" })
  ] }),
  instagram: /* @__PURE__ */ O.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("rect", { x: "3.5", y: "3.5", width: "17", height: "17", rx: "5" }),
    /* @__PURE__ */ O.jsx("circle", { cx: "12", cy: "12", r: "3.9" }),
    /* @__PURE__ */ O.jsx("circle", { cx: "17.1", cy: "6.9", r: ".6", fill: "currentColor" })
  ] }),
  github: /* @__PURE__ */ O.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("path", { d: "M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" }) }),
  dribbble: /* @__PURE__ */ O.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", "aria-hidden": "true", children: [
    /* @__PURE__ */ O.jsx("circle", { cx: "12", cy: "12", r: "8.5" }),
    /* @__PURE__ */ O.jsx("path", { d: "M8.6 4.2c3.4 4.4 5.4 9.6 6.1 15.6M3.6 10.6c5.6.3 10.4-1 13.9-4.4M5.6 17.6c3.4-4.2 8.6-5.6 14.8-3.6" })
  ] })
}, aD = [
  { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "#about" }, { label: "Customer stories", href: "#reviews" }] },
  { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "#feedback-form" }, { label: "Good to know", href: "#questions-title" }, { label: "Back to the top", href: "#home" }] }
];
function lD({
  brand: i = "Vettiver",
  wordmark: l,
  company: s = "Akash Vetiver Export",
  year: r = (/* @__PURE__ */ new Date()).getFullYear(),
  socials: c = [],
  credits: d = [{ label: "Natural roots. Thoughtful hands." }, { lead: "Handcrafted in ", label: "Tamil Nadu, India" }],
  columns: f = aD,
  onLinkClick: m,
  cut: p = 0.1,
  background: g = "#08170f",
  ink: v = "#f4f8ef",
  muted: y = "#bacbb5",
  accent: S = "#b1cd8b",
  wordTop: A = "#668b54",
  wordFoot: T = "#152d1c",
  fontSans: C = "Outfit, sans-serif",
  wordWeight: E = 600,
  animate: z = !0,
  className: B = ""
}) {
  const k = (l ?? i).trim() || i, _ = Q.useMemo(() => Array.from(k), [k]), X = Q.useRef(null), Z = Q.useRef(null), [R, D] = Q.useState(0), [ot, ut] = Q.useState(0.8), [F, I] = Q.useState(!1), [lt, et] = Q.useState(!1), [nt, q] = Q.useState(!1), [J, it] = Q.useState(!1), [at, Y] = Q.useState(!0), yt = Q.useRef({ u: 0.5, x: 0, y: 0, inside: !1 });
  Q.useLayoutEffect(() => {
    const L = X.current, tt = Z.current;
    if (!L || !tt) return;
    let W = 0, ft = !0;
    const ct = () => {
      const $ = tt.parentElement, xt = getComputedStyle($), Vt = $.clientWidth - parseFloat(xt.paddingLeft) - parseFloat(xt.paddingRight);
      tt.style.fontSize = "100px";
      const Bt = tD(tt.getBoundingClientRect().width, Vt, Vt * 0.42);
      tt.style.fontSize = Bt + "px", D(Bt);
      const Ut = document.createElement("canvas").getContext("2d");
      if (Ut) {
        Ut.font = E + " 100px " + C;
        const Mt = Ut.measureText(k);
        ut(nD(Mt.fontBoundingBoxAscent, Mt.fontBoundingBoxDescent));
      }
      const Gt = L.getBoundingClientRect();
      L.style.setProperty("--bwf-rw", Gt.width + "px"), L.style.setProperty("--bwf-rh", Gt.height + "px"), tt.querySelectorAll(".bwf-l").forEach((Mt) => {
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
  }, [k, C, E]), Q.useEffect(() => {
    const L = matchMedia("(prefers-reduced-motion: reduce)"), tt = () => q(L.matches), W = () => Y(!document.hidden);
    tt(), W(), L.addEventListener("change", tt), document.addEventListener("visibilitychange", W);
    const ft = new IntersectionObserver(([ct]) => {
      et(ct.isIntersecting), ct.isIntersecting && I(!0);
    }, { threshold: 0.1 });
    return X.current && ft.observe(X.current), () => {
      ft.disconnect(), L.removeEventListener("change", tt), document.removeEventListener("visibilitychange", W);
    };
  }, []), Q.useEffect(() => {
    const L = X.current;
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
      ct = Br(ct, Ut.inside ? eD(Ut.u) * 0.75 + Jv(ft) * 0.25 : Jv(ft), 0.035, Bt), St = Br(St, Ut.x, 0.16, Bt), st = Br(st, Ut.y, 0.16, Bt), $ = Br($, Ut.inside ? 1 : 0, 0.06, Bt), L.style.setProperty("--bwf-b", ct.toFixed(2) + "%"), L.style.setProperty("--bwf-px", St.toFixed(1) + "px"), L.style.setProperty("--bwf-py", st.toFixed(1) + "px"), L.style.setProperty("--bwf-g", $.toFixed(3)), tt = requestAnimationFrame(xt);
    };
    return tt = requestAnimationFrame(xt), () => cancelAnimationFrame(tt);
  }, [nt, J, z, lt, at]);
  const vt = (L) => {
    if (L.pointerType === "touch" || nt) return;
    const tt = L.currentTarget.getBoundingClientRect();
    yt.current = { x: L.clientX - tt.left, y: L.clientY - tt.top, u: (L.clientX - tt.left) / tt.width, inside: L.type !== "pointerleave" };
  }, At = (L, tt, W) => {
    W === "#feedback-form" && (L.preventDefault(), L.stopPropagation(), window.dispatchEvent(new Event("vettiver:add-feedback"))), (!W || W === "#") && L.preventDefault(), m?.(tt, W);
  }, w = {
    "--bwf-bg": g,
    "--bwf-bg-rgb": Fv(g),
    "--bwf-ink": v,
    "--bwf-muted": y,
    "--bwf-acc": Fv(S),
    "--bwf-wt": A,
    "--bwf-wf": T,
    "--bwf-sans": C,
    "--bwf-ww": E,
    "--bwf-b": "58%",
    "--bwf-px": "50%",
    "--bwf-py": "50%",
    "--bwf-g": "0"
  };
  return /* @__PURE__ */ O.jsxs("footer", { ref: X, className: "bwf " + B, style: w, "data-in": F || nt ? "true" : "false", "data-motion": nt || J || !z ? "paused" : lt && at ? "running" : "idle", onPointerMove: vt, onPointerEnter: vt, onPointerLeave: vt, children: [
    /* @__PURE__ */ O.jsx("div", { className: "bwf-rule", "aria-hidden": "true" }),
    /* @__PURE__ */ O.jsxs("div", { className: "bwf-sky", "aria-hidden": "true", children: [
      /* @__PURE__ */ O.jsx("div", { className: "bwf-wash" }),
      /* @__PURE__ */ O.jsx("div", { className: "bwf-beam" }),
      /* @__PURE__ */ O.jsx("div", { className: "bwf-glow" })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "bwf-inner", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "bwf-col", children: [
        /* @__PURE__ */ O.jsxs("p", { className: "bwf-label", children: [
          "© ",
          r,
          " ",
          s || i
        ] }),
        /* @__PURE__ */ O.jsxs("p", { className: "bwf-brand-line", children: [
          "From our roots.",
          /* @__PURE__ */ O.jsx("br", {}),
          "To your rituals."
        ] }),
        c.length > 0 && /* @__PURE__ */ O.jsx("ul", { className: "bwf-socials", children: c.map((L, tt) => /* @__PURE__ */ O.jsx("li", { children: /* @__PURE__ */ O.jsx("a", { href: L.href || "#", className: "bwf-soc", "aria-label": L.label, onClick: (W) => At(W, L.label, L.href), ...L.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: typeof L.icon == "string" && L.icon in Iv ? Iv[L.icon] : L.icon }) }, L.label + tt)) }),
        /* @__PURE__ */ O.jsx("div", { className: "bwf-credits", children: d.map((L, tt) => /* @__PURE__ */ O.jsxs("p", { children: [
          L.lead,
          L.href ? /* @__PURE__ */ O.jsx("a", { href: L.href, onClick: (W) => At(W, L.label, L.href), children: L.label }) : /* @__PURE__ */ O.jsx("b", { children: L.label }),
          L.tail
        ] }, tt)) }),
        z && !nt && /* @__PURE__ */ O.jsxs("button", { type: "button", className: "bwf-motion-toggle", onClick: () => it(!J), "aria-pressed": J, children: [
          J ? /* @__PURE__ */ O.jsx(fu, { size: 14 }) : /* @__PURE__ */ O.jsx(cu, { size: 14 }),
          J ? "Resume light" : "Pause light"
        ] })
      ] }),
      f.map((L, tt) => /* @__PURE__ */ O.jsxs("nav", { className: "bwf-col", "aria-label": L.title, children: [
        /* @__PURE__ */ O.jsx("p", { className: "bwf-label", children: L.title }),
        /* @__PURE__ */ O.jsx("ul", { className: "bwf-links", children: L.links.map((W, ft) => /* @__PURE__ */ O.jsx("li", { children: /* @__PURE__ */ O.jsxs("a", { className: "bwf-link", href: W.href || "#", onClick: (ct) => At(ct, W.label, W.href), children: [
          /* @__PURE__ */ O.jsx("span", { children: W.label }),
          /* @__PURE__ */ O.jsx(uh, { size: 16, "aria-hidden": "true" })
        ] }) }, W.label + ft)) })
      ] }, L.title + tt))
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "bwf-word", style: { height: R ? iD(R, ot, p) : "26vw" }, children: [
      /* @__PURE__ */ O.jsx("p", { className: "vt:sr-only", children: k }),
      /* @__PURE__ */ O.jsx("div", { className: "bwf-word-box", children: /* @__PURE__ */ O.jsx("div", { ref: Z, className: "bwf-word-in", "aria-hidden": "true", children: _.map((L, tt) => /* @__PURE__ */ O.jsx("span", { className: "bwf-lw", style: { "--bwf-d": 180 + tt * 65 + "ms" }, children: /* @__PURE__ */ O.jsx("span", { className: "bwf-l", onClick: (W) => {
        if (!nt) {
          const ft = W.currentTarget;
          ft.classList.remove("is-hop"), ft.offsetWidth, ft.classList.add("is-hop");
        }
      }, onAnimationEnd: (W) => W.currentTarget.classList.remove("is-hop"), children: L === " " ? " " : L }) }, tt)) }) }),
      /* @__PURE__ */ O.jsx("div", { className: "bwf-foot", "aria-hidden": "true" })
    ] })
  ] });
}
const sD = [];
function oD(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function Wv(i) {
  return oD(i) || Array.isArray(i);
}
function rD() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Qh(i, l) {
  const s = Object.keys(i), r = Object.keys(l);
  if (s.length !== r.length) return !1;
  const c = JSON.stringify(Object.keys(i.breakpoints || {})), d = JSON.stringify(Object.keys(l.breakpoints || {}));
  return c !== d ? !1 : s.every((f) => {
    const m = i[f], p = l[f];
    return typeof m == "function" ? `${m}` == `${p}` : !Wv(m) || !Wv(p) ? m === p : Qh(m, p);
  });
}
function $v(i) {
  return i.concat().sort((l, s) => l.name > s.name ? 1 : -1).map((l) => l.options);
}
function uD(i, l) {
  if (i.length !== l.length) return !1;
  const s = $v(i), r = $v(l);
  return s.every((c, d) => {
    const f = r[d];
    return Qh(c, f);
  });
}
function Zh(i) {
  return typeof i == "number";
}
function th(i) {
  return typeof i == "string";
}
function yu(i) {
  return typeof i == "boolean";
}
function tb(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function $t(i) {
  return Math.abs(i);
}
function Kh(i) {
  return Math.sign(i);
}
function Ls(i, l) {
  return $t(i - l);
}
function cD(i, l) {
  if (i === 0 || l === 0 || $t(i) <= $t(l)) return 0;
  const s = Ls($t(i), $t(l));
  return $t(s / i);
}
function fD(i) {
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
function Ph(i, l) {
  return l === to(i);
}
function eb(i, l = 0) {
  return Array.from(Array(i), (s, r) => l + r);
}
function Fs(i) {
  return Object.keys(i);
}
function OS(i, l) {
  return [i, l].reduce((s, r) => (Fs(r).forEach((c) => {
    const d = s[c], f = r[c], m = tb(d) && tb(f);
    s[c] = m ? OS(d, f) : f;
  }), s), {});
}
function eh(i, l) {
  return typeof l.MouseEvent < "u" && i instanceof l.MouseEvent;
}
function dD(i, l) {
  const s = {
    start: r,
    center: c,
    end: d
  };
  function r() {
    return 0;
  }
  function c(p) {
    return d(p) / 2;
  }
  function d(p) {
    return l - p;
  }
  function f(p, g) {
    return th(i) ? s[i](p) : i(l, p, g);
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
    return i.push(p), r;
  }
  function s() {
    i = i.filter((c) => c());
  }
  const r = {
    add: l,
    clear: s
  };
  return r;
}
function hD(i, l, s, r) {
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
    r(B), p && (p = l.requestAnimationFrame(y));
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
    render: r
  };
}
function mD(i, l) {
  const s = l === "rtl", r = i === "y", c = r ? "y" : "x", d = r ? "x" : "y", f = !r && s ? -1 : 1, m = v(), p = y();
  function g(T) {
    const {
      height: C,
      width: E
    } = T;
    return r ? C : E;
  }
  function v() {
    return r ? "top" : s ? "right" : "left";
  }
  function y() {
    return r ? "bottom" : s ? "left" : "right";
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
  function r(g) {
    return g < i;
  }
  function c(g) {
    return g > l;
  }
  function d(g) {
    return r(g) || c(g);
  }
  function f(g) {
    return d(g) ? r(g) ? i : l : g;
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
    reachedMin: r,
    removeOffset: m
  };
}
function zS(i, l, s) {
  const {
    constrain: r
  } = Ea(0, i), c = i + 1;
  let d = f(l);
  function f(S) {
    return s ? $t((c + S) % c) : r(S);
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
    return zS(i, m(), s);
  }
  const y = {
    get: m,
    set: p,
    add: g,
    clone: v
  };
  return y;
}
function pD(i, l, s, r, c, d, f, m, p, g, v, y, S, A, T, C, E, z, B) {
  const {
    cross: k,
    direction: _
  } = i, X = ["INPUT", "SELECT", "TEXTAREA"], Z = {
    passive: !1
  }, R = Js(), D = Js(), ot = Ea(50, 225).constrain(A.measure(20)), ut = {
    mouse: 300,
    touch: 400
  }, F = {
    mouse: 500,
    touch: 600
  }, I = T ? 43 : 25;
  let lt = !1, et = 0, nt = 0, q = !1, J = !1, it = !1, at = !1;
  function Y($) {
    if (!B) return;
    function xt(Bt) {
      (yu(B) || B($, Bt)) && tt(Bt);
    }
    const Vt = l;
    R.add(Vt, "dragstart", (Bt) => Bt.preventDefault(), Z).add(Vt, "touchmove", () => {
    }, Z).add(Vt, "touchend", () => {
    }).add(Vt, "touchstart", xt).add(Vt, "mousedown", xt).add(Vt, "touchcancel", ft).add(Vt, "contextmenu", ft).add(Vt, "click", ct, !0);
  }
  function yt() {
    R.clear(), D.clear();
  }
  function vt() {
    const $ = at ? s : l;
    D.add($, "touchmove", W, Z).add($, "touchend", ft).add($, "mousemove", W, Z).add($, "mouseup", ft);
  }
  function At($) {
    const xt = $.nodeName || "";
    return X.includes(xt);
  }
  function w() {
    return (T ? F : ut)[at ? "mouse" : "touch"];
  }
  function L($, xt) {
    const Vt = y.add(Kh($) * -1), Bt = v.byDistance($, !T).distance;
    return T || $t($) < ot ? Bt : E && xt ? Bt * 0.5 : v.byIndex(Vt.get(), 0).distance;
  }
  function tt($) {
    const xt = eh($, r);
    at = xt, it = T && xt && !$.buttons && lt, lt = Ls(c.get(), f.get()) >= 2, !(xt && $.button !== 0) && (At($.target) || (q = !0, d.pointerDown($), g.useFriction(0).useDuration(0), c.set(f), vt(), et = d.readPoint($), nt = d.readPoint($, k), S.emit("pointerDown")));
  }
  function W($) {
    if (!eh($, r) && $.touches.length >= 2) return ft($);
    const Vt = d.readPoint($), Bt = d.readPoint($, k), Ut = Ls(Vt, et), Gt = Ls(Bt, nt);
    if (!J && !at && (!$.cancelable || (J = Ut > Gt, !J)))
      return ft($);
    const Mt = d.pointerMove($);
    Ut > C && (it = !0), g.useFriction(0.3).useDuration(0.75), m.start(), c.add(_(Mt)), $.preventDefault();
  }
  function ft($) {
    const Vt = v.byDistance(0, !1).index !== y.get(), Bt = d.pointerUp($) * w(), Ut = L(_(Bt), Vt), Gt = cD(Bt, Ut), Mt = I - 10 * Gt, ee = z + Gt / 50;
    J = !1, q = !1, D.clear(), g.useDuration(Mt).useFriction(ee), p.distance(Ut, !T), at = !1, S.emit("pointerUp");
  }
  function ct($) {
    it && ($.stopPropagation(), $.preventDefault(), it = !1);
  }
  function St() {
    return q;
  }
  return {
    init: Y,
    destroy: yt,
    pointerDown: St
  };
}
function gD(i, l) {
  let r, c;
  function d(y) {
    return y.timeStamp;
  }
  function f(y, S) {
    const T = `client${(S || i.scroll) === "x" ? "X" : "Y"}`;
    return (eh(y, l) ? y : y.touches[0])[T];
  }
  function m(y) {
    return r = y, c = y, f(y);
  }
  function p(y) {
    const S = f(y) - f(c), A = d(y) - d(r) > 170;
    return c = y, A && (r = y), S;
  }
  function g(y) {
    if (!r || !c) return 0;
    const S = f(c) - f(r), A = d(y) - d(r), T = d(y) - d(c) > 170, C = S / A;
    return A && !T && $t(C) > 0.1 ? C : 0;
  }
  return {
    pointerDown: m,
    pointerMove: p,
    pointerUp: g,
    readPoint: f
  };
}
function yD() {
  function i(s) {
    const {
      offsetTop: r,
      offsetLeft: c,
      offsetWidth: d,
      offsetHeight: f
    } = s;
    return {
      top: r,
      right: c + d,
      bottom: r + f,
      left: c,
      width: d,
      height: f
    };
  }
  return {
    measure: i
  };
}
function vD(i) {
  function l(r) {
    return i * (r / 100);
  }
  return {
    measure: l
  };
}
function bD(i, l, s, r, c, d, f) {
  const m = [i].concat(r);
  let p, g, v = [], y = !1;
  function S(E) {
    return c.measureSize(f.measure(E));
  }
  function A(E) {
    if (!d) return;
    g = S(i), v = r.map(S);
    function z(B) {
      for (const k of B) {
        if (y) return;
        const _ = k.target === i, X = r.indexOf(k.target), Z = _ ? g : v[X], R = S(_ ? i : r[X]);
        if ($t(R - Z) >= 0.5) {
          E.reInit(), l.emit("resize");
          break;
        }
      }
    }
    p = new ResizeObserver((B) => {
      (yu(d) || d(E, B)) && z(B);
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
function SD(i, l, s, r, c, d) {
  let f = 0, m = 0, p = c, g = d, v = i.get(), y = 0;
  function S() {
    const Z = r.get() - i.get(), R = !p;
    let D = 0;
    return R ? (f = 0, s.set(r), i.set(r), D = Z) : (s.set(i), f += Z / p, f *= g, v += f, i.add(f), D = v - y), m = Kh(D), y = v, X;
  }
  function A() {
    const Z = r.get() - l.get();
    return $t(Z) < 1e-3;
  }
  function T() {
    return p;
  }
  function C() {
    return m;
  }
  function E() {
    return f;
  }
  function z() {
    return k(c);
  }
  function B() {
    return _(d);
  }
  function k(Z) {
    return p = Z, X;
  }
  function _(Z) {
    return g = Z, X;
  }
  const X = {
    direction: C,
    duration: T,
    velocity: E,
    seek: S,
    settled: A,
    useBaseFriction: B,
    useBaseDuration: z,
    useFriction: _,
    useDuration: k
  };
  return X;
}
function TD(i, l, s, r, c) {
  const d = c.measure(10), f = c.measure(50), m = Ea(0.1, 0.99);
  let p = !1;
  function g() {
    return !(p || !i.reachedAny(s.get()) || !i.reachedAny(l.get()));
  }
  function v(A) {
    if (!g()) return;
    const T = i.reachedMin(l.get()) ? "min" : "max", C = $t(i[T] - l.get()), E = s.get() - l.get(), z = m.constrain(C / f);
    s.subtract(E * z), !A && $t(E) < d && (s.set(i.constrain(s.get())), r.useDuration(25).useBaseFriction());
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
function xD(i, l, s, r, c) {
  const d = Ea(-l + i, 0), f = y(), m = v(), p = S();
  function g(T, C) {
    return Ls(T, C) <= 1;
  }
  function v() {
    const T = f[0], C = An(f), E = f.lastIndexOf(T), z = f.indexOf(C) + 1;
    return Ea(E, z);
  }
  function y() {
    return s.map((T, C) => {
      const {
        min: E,
        max: z
      } = d, B = d.constrain(T), k = !C, _ = Ph(s, C);
      return k ? z : _ || g(E, B) ? E : g(z, B) ? z : B;
    }).map((T) => parseFloat(T.toFixed(3)));
  }
  function S() {
    if (l <= i + c) return [d.max];
    if (r === "keepSnaps") return f;
    const {
      min: T,
      max: C
    } = m;
    return f.slice(T, C);
  }
  return {
    snapsContained: p,
    scrollContainLimit: m
  };
}
function ED(i, l, s) {
  const r = l[0], c = s ? r - i : An(l);
  return {
    limit: Ea(c, r)
  };
}
function AD(i, l, s, r) {
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
    r.forEach((T) => T.add(A));
  }
  return {
    loop: v
  };
}
function wD(i) {
  const {
    max: l,
    length: s
  } = i;
  function r(d) {
    const f = d - l;
    return s ? f / -s : 0;
  }
  return {
    get: r
  };
}
function CD(i, l, s, r, c) {
  const {
    startEdge: d,
    endEdge: f
  } = i, {
    groupSlides: m
  } = c, p = y().map(l.measure), g = S(), v = A();
  function y() {
    return m(r).map((C) => An(C)[f] - C[0][d]).map($t);
  }
  function S() {
    return r.map((C) => s[d] - C[d]).map((C) => -$t(C));
  }
  function A() {
    return m(g).map((C) => C[0]).map((C, E) => C + p[E]);
  }
  return {
    snaps: g,
    snapsAligned: v
  };
}
function MD(i, l, s, r, c, d) {
  const {
    groupSlides: f
  } = c, {
    min: m,
    max: p
  } = r, g = v();
  function v() {
    const S = f(d), A = !i || l === "keepSnaps";
    return s.length === 1 ? [d] : A ? S : S.slice(m, p).map((T, C, E) => {
      const z = !C, B = Ph(E, C);
      if (z) {
        const k = An(E[0]) + 1;
        return eb(k);
      }
      if (B) {
        const k = to(d) - An(E)[0] + 1;
        return eb(k, An(E)[0]);
      }
      return T;
    });
  }
  return {
    slideRegistry: g
  };
}
function DD(i, l, s, r, c) {
  const {
    reachedAny: d,
    removeOffset: f,
    constrain: m
  } = r;
  function p(T) {
    return T.concat().sort((C, E) => $t(C) - $t(E))[0];
  }
  function g(T) {
    const C = i ? f(T) : m(T), E = l.map((B, k) => ({
      diff: v(B - C, 0),
      index: k
    })).sort((B, k) => $t(B.diff) - $t(k.diff)), {
      index: z
    } = E[0];
    return {
      index: z,
      distance: C
    };
  }
  function v(T, C) {
    const E = [T, T + s, T - s];
    if (!i) return T;
    if (!C) return p(E);
    const z = E.filter((B) => Kh(B) === C);
    return z.length ? p(z) : An(E) - s;
  }
  function y(T, C) {
    const E = l[T] - c.get(), z = v(E, C);
    return {
      index: T,
      distance: z
    };
  }
  function S(T, C) {
    const E = c.get() + T, {
      index: z,
      distance: B
    } = g(E), k = !i && d(E);
    if (!C || k) return {
      index: z,
      distance: T
    };
    const _ = l[z] - B, X = T + v(_, 0);
    return {
      index: z,
      distance: X
    };
  }
  return {
    byDistance: S,
    byIndex: y,
    shortcut: v
  };
}
function OD(i, l, s, r, c, d, f) {
  function m(y) {
    const S = y.distance, A = y.index !== l.get();
    d.add(S), S && (r.duration() ? i.start() : (i.update(), i.render(1), i.update())), A && (s.set(l.get()), l.set(y.index), f.emit("select"));
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
function zD(i, l, s, r, c, d, f, m) {
  const p = {
    passive: !0,
    capture: !0
  };
  let g = 0;
  function v(A) {
    if (!m) return;
    function T(C) {
      if ((/* @__PURE__ */ new Date()).getTime() - g > 10) return;
      f.emit("slideFocusStart"), i.scrollLeft = 0;
      const B = s.findIndex((k) => k.includes(C));
      Zh(B) && (c.useDuration(0), r.index(B, 0), f.emit("slideFocus"));
    }
    d.add(document, "keydown", y, !1), l.forEach((C, E) => {
      d.add(C, "focus", (z) => {
        (yu(m) || m(A, z)) && T(E);
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
function Ns(i) {
  let l = i;
  function s() {
    return l;
  }
  function r(p) {
    l = f(p);
  }
  function c(p) {
    l += f(p);
  }
  function d(p) {
    l -= f(p);
  }
  function f(p) {
    return Zh(p) ? p : p.get();
  }
  return {
    get: s,
    set: r,
    add: c,
    subtract: d
  };
}
function RS(i, l) {
  const s = i.scroll === "x" ? f : m, r = l.style;
  let c = null, d = !1;
  function f(S) {
    return `translate3d(${S}px,0px,0px)`;
  }
  function m(S) {
    return `translate3d(0px,${S}px,0px)`;
  }
  function p(S) {
    if (d) return;
    const A = fD(i.direction(S));
    A !== c && (r.transform = s(A), c = A);
  }
  function g(S) {
    d = !S;
  }
  function v() {
    d || (r.transform = "", l.getAttribute("style") || l.removeAttribute("style"));
  }
  return {
    clear: v,
    to: p,
    toggleActive: g
  };
}
function RD(i, l, s, r, c, d, f, m, p) {
  const v = Ps(c), y = Ps(c).reverse(), S = z().concat(B());
  function A(R, D) {
    return R.reduce((ot, ut) => ot - c[ut], D);
  }
  function T(R, D) {
    return R.reduce((ot, ut) => A(ot, D) > 0 ? ot.concat([ut]) : ot, []);
  }
  function C(R) {
    return d.map((D, ot) => ({
      start: D - r[ot] + 0.5 + R,
      end: D + l - 0.5 + R
    }));
  }
  function E(R, D, ot) {
    const ut = C(D);
    return R.map((F) => {
      const I = ot ? 0 : -s, lt = ot ? s : 0, et = ot ? "end" : "start", nt = ut[F][et];
      return {
        index: F,
        loopPoint: nt,
        slideLocation: Ns(-1),
        translate: RS(i, p[F]),
        target: () => m.get() > nt ? I : lt
      };
    });
  }
  function z() {
    const R = f[0], D = T(y, R);
    return E(D, s, !1);
  }
  function B() {
    const R = l - f[0] - 1, D = T(v, R);
    return E(D, -s, !0);
  }
  function k() {
    return S.every(({
      index: R
    }) => {
      const D = v.filter((ot) => ot !== R);
      return A(D, l) <= 0.1;
    });
  }
  function _() {
    S.forEach((R) => {
      const {
        target: D,
        translate: ot,
        slideLocation: ut
      } = R, F = D();
      F !== ut.get() && (ot.to(F), ut.set(F));
    });
  }
  function X() {
    S.forEach((R) => R.translate.clear());
  }
  return {
    canLoop: k,
    clear: X,
    loop: _,
    loopPoints: S
  };
}
function ND(i, l, s) {
  let r, c = !1;
  function d(p) {
    if (!s) return;
    function g(v) {
      for (const y of v)
        if (y.type === "childList") {
          p.reInit(), l.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((v) => {
      c || (yu(s) || s(p, v)) && g(v);
    }), r.observe(i, {
      childList: !0
    });
  }
  function f() {
    r && r.disconnect(), c = !0;
  }
  return {
    init: d,
    destroy: f
  };
}
function _D(i, l, s, r) {
  const c = {};
  let d = null, f = null, m, p = !1;
  function g() {
    m = new IntersectionObserver((T) => {
      p || (T.forEach((C) => {
        const E = l.indexOf(C.target);
        c[E] = C;
      }), d = null, f = null, s.emit("slidesInView"));
    }, {
      root: i.parentElement,
      threshold: r
    }), l.forEach((T) => m.observe(T));
  }
  function v() {
    m && m.disconnect(), p = !0;
  }
  function y(T) {
    return Fs(c).reduce((C, E) => {
      const z = parseInt(E), {
        isIntersecting: B
      } = c[z];
      return (T && B || !T && !B) && C.push(z), C;
    }, []);
  }
  function S(T = !0) {
    if (T && d) return d;
    if (!T && f) return f;
    const C = y(T);
    return T && (d = C), T || (f = C), C;
  }
  return {
    init: g,
    destroy: v,
    get: S
  };
}
function VD(i, l, s, r, c, d) {
  const {
    measureSize: f,
    startEdge: m,
    endEdge: p
  } = i, g = s[0] && c, v = T(), y = C(), S = s.map(f), A = E();
  function T() {
    if (!g) return 0;
    const B = s[0];
    return $t(l[m] - B[m]);
  }
  function C() {
    if (!g) return 0;
    const B = d.getComputedStyle(An(r));
    return parseFloat(B.getPropertyValue(`margin-${p}`));
  }
  function E() {
    return s.map((B, k, _) => {
      const X = !k, Z = Ph(_, k);
      return X ? S[k] + v : Z ? S[k] + y : _[k + 1][m] - B[m];
    }).map($t);
  }
  return {
    slideSizes: S,
    slideSizesWithGaps: A,
    startGap: v,
    endGap: y
  };
}
function jD(i, l, s, r, c, d, f, m, p) {
  const {
    startEdge: g,
    endEdge: v,
    direction: y
  } = i, S = Zh(s);
  function A(z, B) {
    return Ps(z).filter((k) => k % B === 0).map((k) => z.slice(k, k + B));
  }
  function T(z) {
    return z.length ? Ps(z).reduce((B, k, _) => {
      const X = An(B) || 0, Z = X === 0, R = k === to(z), D = c[g] - d[X][g], ot = c[g] - d[k][v], ut = !r && Z ? y(f) : 0, F = !r && R ? y(m) : 0, I = $t(ot - F - (D + ut));
      return _ && I > l + p && B.push(k), R && B.push(z.length), B;
    }, []).map((B, k, _) => {
      const X = Math.max(_[k - 1] || 0);
      return z.slice(X, B);
    }) : [];
  }
  function C(z) {
    return S ? A(z, s) : T(z);
  }
  return {
    groupSlides: C
  };
}
function LD(i, l, s, r, c, d, f) {
  const {
    align: m,
    axis: p,
    direction: g,
    startIndex: v,
    loop: y,
    duration: S,
    dragFree: A,
    dragThreshold: T,
    inViewThreshold: C,
    slidesToScroll: E,
    skipSnaps: z,
    containScroll: B,
    watchResize: k,
    watchSlides: _,
    watchDrag: X,
    watchFocus: Z
  } = d, R = 2, D = yD(), ot = D.measure(l), ut = s.map(D.measure), F = mD(p, g), I = F.measureSize(ot), lt = vD(I), et = dD(m, I), nt = !y && !!B, q = y || !!B, {
    slideSizes: J,
    slideSizesWithGaps: it,
    startGap: at,
    endGap: Y
  } = VD(F, ot, ut, s, q, c), yt = jD(F, I, E, y, ot, ut, at, Y, R), {
    snaps: vt,
    snapsAligned: At
  } = CD(F, et, ot, ut, yt), w = -An(vt) + An(it), {
    snapsContained: L,
    scrollContainLimit: tt
  } = xD(I, w, At, B, R), W = nt ? L : At, {
    limit: ft
  } = ED(w, W, y), ct = zS(to(W), v, y), St = ct.clone(), st = Ps(s), $ = ({
    dragHandler: wn,
    scrollBody: Yi,
    scrollBounds: Dl,
    options: {
      loop: qi
    }
  }) => {
    qi || Dl.constrain(wn.pointerDown()), Yi.seek();
  }, xt = ({
    scrollBody: wn,
    translate: Yi,
    location: Dl,
    offsetLocation: qi,
    previousLocation: Ol,
    scrollLooper: zl,
    slideLooper: Rl,
    dragHandler: vu,
    animation: bu,
    eventHandler: Oe,
    scrollBounds: Su,
    options: {
      loop: Nl
    }
  }, _l) => {
    const Xi = wn.settled(), Tu = !Su.shouldConstrain(), Vl = Nl ? Xi : Xi && Tu, no = Vl && !vu.pointerDown();
    no && bu.stop();
    const xu = Dl.get() * _l + Ol.get() * (1 - _l);
    qi.set(xu), Nl && (zl.loop(wn.direction()), Rl.loop()), Yi.to(qi.get()), no && Oe.emit("settle"), Vl || Oe.emit("scroll");
  }, Vt = hD(r, c, () => $(en), (wn) => xt(en, wn)), Bt = 0.68, Ut = W[ct.get()], Gt = Ns(Ut), Mt = Ns(Ut), ee = Ns(Ut), De = Ns(Ut), ae = SD(Gt, ee, Mt, De, S, Bt), oi = DD(y, W, w, ft, De), ri = OD(Vt, ct, St, ae, oi, De, f), kn = wD(ft), wa = Js(), Ca = _D(l, s, f, C), {
    slideRegistry: Ma
  } = MD(nt, B, W, tt, yt, st), eo = zD(i, s, Ma, ri, ae, wa, f, Z), en = {
    ownerDocument: r,
    ownerWindow: c,
    eventHandler: f,
    containerRect: ot,
    slideRects: ut,
    animation: Vt,
    axis: F,
    dragHandler: pD(F, i, r, c, De, gD(F, c), Gt, Vt, ri, ae, oi, ct, f, lt, A, T, z, Bt, X),
    eventStore: wa,
    percentOfView: lt,
    index: ct,
    indexPrevious: St,
    limit: ft,
    location: Gt,
    offsetLocation: ee,
    previousLocation: Mt,
    options: d,
    resizeHandler: bD(l, f, c, s, F, k, D),
    scrollBody: ae,
    scrollBounds: TD(ft, ee, De, ae, lt),
    scrollLooper: AD(w, ft, ee, [Gt, ee, Mt, De]),
    scrollProgress: kn,
    scrollSnapList: W.map(kn.get),
    scrollSnaps: W,
    scrollTarget: oi,
    scrollTo: ri,
    slideLooper: RD(F, I, w, J, it, vt, W, ee, s),
    slideFocus: eo,
    slidesHandler: ND(l, f, _),
    slidesInView: Ca,
    slideIndexes: st,
    slideRegistry: Ma,
    slidesToScroll: yt,
    target: De,
    translate: RS(F, l)
  };
  return en;
}
function BD() {
  let i = {}, l;
  function s(g) {
    l = g;
  }
  function r(g) {
    return i[g] || [];
  }
  function c(g) {
    return r(g).forEach((v) => v(l, g)), p;
  }
  function d(g, v) {
    return i[g] = r(g).concat([v]), p;
  }
  function f(g, v) {
    return i[g] = r(g).filter((y) => y !== v), p;
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
const UD = {
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
function HD(i) {
  function l(d, f) {
    return OS(d, f || {});
  }
  function s(d) {
    const f = d.breakpoints || {}, m = Fs(f).filter((p) => i.matchMedia(p).matches).map((p) => f[p]).reduce((p, g) => l(p, g), {});
    return l(d, m);
  }
  function r(d) {
    return d.map((f) => Fs(f.breakpoints || {})).reduce((f, m) => f.concat(m), []).map(i.matchMedia);
  }
  return {
    mergeOptions: l,
    optionsAtMedia: s,
    optionsMediaQueries: r
  };
}
function GD(i) {
  let l = [];
  function s(d, f) {
    return l = f.filter(({
      options: m
    }) => i.optionsAtMedia(m).active !== !1), l.forEach((m) => m.init(d, i)), f.reduce((m, p) => Object.assign(m, {
      [p.name]: p
    }), {});
  }
  function r() {
    l = l.filter((d) => d.destroy());
  }
  return {
    init: s,
    destroy: r
  };
}
function uu(i, l, s) {
  const r = i.ownerDocument, c = r.defaultView, d = HD(c), f = GD(d), m = Js(), p = BD(), {
    mergeOptions: g,
    optionsAtMedia: v,
    optionsMediaQueries: y
  } = d, {
    on: S,
    off: A,
    emit: T
  } = p, C = F;
  let E = !1, z, B = g(UD, uu.globalOptions), k = g(B), _ = [], X, Z, R;
  function D() {
    const {
      container: st,
      slides: $
    } = k;
    Z = (th(st) ? i.querySelector(st) : st) || i.children[0];
    const Vt = th($) ? Z.querySelectorAll($) : $;
    R = [].slice.call(Vt || Z.children);
  }
  function ot(st) {
    const $ = LD(i, Z, R, r, c, st, p);
    if (st.loop && !$.slideLooper.canLoop()) {
      const xt = Object.assign({}, st, {
        loop: !1
      });
      return ot(xt);
    }
    return $;
  }
  function ut(st, $) {
    E || (B = g(B, st), k = v(B), _ = $ || _, D(), z = ot(k), y([B, ..._.map(({
      options: xt
    }) => xt)]).forEach((xt) => m.add(xt, "change", F)), k.active && (z.translate.to(z.location.get()), z.animation.init(), z.slidesInView.init(), z.slideFocus.init(St), z.eventHandler.init(St), z.resizeHandler.init(St), z.slidesHandler.init(St), z.options.loop && z.slideLooper.loop(), Z.offsetParent && R.length && z.dragHandler.init(St), X = f.init(St, _)));
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
    !k.active || E || (z.scrollBody.useBaseFriction().useDuration($ === !0 ? 0 : k.duration), z.scrollTo.index(st, xt || 0));
  }
  function nt(st) {
    const $ = z.index.add(1).get();
    et($, st, -1);
  }
  function q(st) {
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
  function w() {
    return z.slidesInView.get(!1);
  }
  function L() {
    return X;
  }
  function tt() {
    return z;
  }
  function W() {
    return i;
  }
  function ft() {
    return Z;
  }
  function ct() {
    return R;
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
    reInit: C,
    rootNode: W,
    scrollNext: nt,
    scrollPrev: q,
    scrollProgress: Y,
    scrollSnapList: at,
    scrollTo: et,
    selectedScrollSnap: yt,
    slideNodes: ct,
    slidesInView: At,
    slidesNotInView: w
  };
  return ut(l, s), setTimeout(() => p.emit("init"), 0), St;
}
uu.globalOptions = void 0;
function Bs(i = {}, l = []) {
  const s = Q.useRef(i), r = Q.useRef(l), [c, d] = Q.useState(), [f, m] = Q.useState(), p = Q.useCallback(() => {
    c && c.reInit(s.current, r.current);
  }, [c]);
  return Q.useEffect(() => {
    Qh(s.current, i) || (s.current = i, p());
  }, [i, p]), Q.useEffect(() => {
    uD(r.current, l) || (r.current = l, p());
  }, [l, p]), Q.useEffect(() => {
    if (rD() && f) {
      uu.globalOptions = Bs.globalOptions;
      const g = uu(f, s.current, r.current);
      return d(g), () => g.destroy();
    } else
      d(void 0);
  }, [f, d]), [m, c];
}
Bs.globalOptions = void 0;
const kD = {
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
function YD(i, l) {
  const s = i.scrollSnapList();
  return typeof l == "number" ? s.map(() => l) : l(s, i);
}
function qD(i, l) {
  const s = i.rootNode();
  return l && l(s) || s;
}
function Fh(i = {}) {
  let l, s, r, c, d = null, f = 0, m = !1, p = !1, g = !1, v = !1;
  function y(et, nt) {
    s = et;
    const {
      mergeOptions: q,
      optionsAtMedia: J
    } = nt, it = q(kD, Fh.globalOptions), at = q(it, i);
    if (l = J(at), s.scrollSnapList().length <= 1) return;
    v = l.jump, r = !1, c = YD(s, l.delay);
    const {
      eventStore: Y,
      ownerDocument: yt
    } = s.internalEngine(), vt = !!s.internalEngine().options.watchDrag, At = qD(s, l.rootNode);
    Y.add(yt, "visibilitychange", z), vt && s.on("pointerDown", k), vt && !l.stopOnInteraction && s.on("pointerUp", _), l.stopOnMouseEnter && Y.add(At, "mouseenter", X), l.stopOnMouseEnter && !l.stopOnInteraction && Y.add(At, "mouseleave", Z), l.stopOnFocusIn && s.on("slideFocusStart", E), l.stopOnFocusIn && !l.stopOnInteraction && Y.add(s.containerNode(), "focusout", C), l.playOnInit && C();
  }
  function S() {
    s.off("pointerDown", k).off("pointerUp", _).off("slideFocusStart", E), E(), r = !0, m = !1;
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
  function C() {
    if (!r) {
      if (B()) {
        g = !0;
        return;
      }
      m || s.emit("autoplay:play"), A(), m = !0;
    }
  }
  function E() {
    r || (m && s.emit("autoplay:stop"), T(), m = !1);
  }
  function z() {
    if (B())
      return g = m, E();
    g && C();
  }
  function B() {
    const {
      ownerDocument: et
    } = s.internalEngine();
    return et.visibilityState === "hidden";
  }
  function k() {
    p || E();
  }
  function _() {
    p || C();
  }
  function X() {
    p = !0, E();
  }
  function Z() {
    p = !1, C();
  }
  function R(et) {
    typeof et < "u" && (v = et), C();
  }
  function D() {
    m && E();
  }
  function ot() {
    m && C();
  }
  function ut() {
    return m;
  }
  function F() {
    const {
      index: et
    } = s.internalEngine(), nt = et.clone().add(1).get(), q = s.scrollSnapList().length - 1, J = l.stopOnLastSnap && nt === q;
    if (s.canScrollNext() ? s.scrollNext(v) : s.scrollTo(0, v), s.emit("autoplay:select"), J) return E();
    C();
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
    play: R,
    stop: D,
    reset: ot,
    isPlaying: ut,
    timeUntilNext: I
  };
}
Fh.globalOptions = void 0;
const vl = [
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
], Ur = [vl[1], vl[6], vl[5], vl[4], vl[9]];
function XD() {
  const i = Q.useRef(null), l = Xh(i, { amount: 0.2 }), s = qh(), r = Q.useRef(Fh({ delay: 5500, stopOnInteraction: !0, playOnInit: !1 })), [c, d] = Bs({ loop: !0, duration: s ? 0 : 25 }, [r.current]), [f, m] = Bs({ loop: !0, duration: s ? 0 : 25 }), [p, g] = Bs({ loop: !0, duration: s ? 0 : 25 }), [v, y] = Q.useState(0), [S, A] = Q.useState(!1), [T, C] = Q.useState(!1), [E, z] = Q.useState(!1), [B, k] = Q.useState(!0);
  Q.useEffect(() => {
    const X = () => k(!document.hidden);
    return X(), document.addEventListener("visibilitychange", X), () => document.removeEventListener("visibilitychange", X);
  }, []), Q.useEffect(() => {
    if (!d || !m || !g) return;
    const X = [d, m, g], Z = () => A(!0);
    X.forEach((D) => D.on("pointerDown", Z));
    const R = X.map((D) => {
      const ot = () => {
        const ut = D.selectedScrollSnap();
        y(ut), X.forEach((F) => {
          F !== D && F.selectedScrollSnap() !== ut && F.scrollTo(ut, !!s);
        });
      };
      return D.on("select", ot), ot;
    });
    return () => {
      X.forEach((D, ot) => {
        D.off("select", R[ot]), D.off("pointerDown", Z);
      });
    };
  }, [d, m, g, s]), Q.useEffect(() => {
    d && (!s && l && B && !S && !T && !E ? r.current.play() : r.current.stop());
  }, [d, s, l, B, S, T, E]);
  const _ = (X) => {
    A(!0), d?.scrollTo(X, !!s);
  };
  return /* @__PURE__ */ O.jsxs("div", { ref: i, className: "showcase-inner wrap", "data-current": v, onMouseEnter: () => C(!0), onMouseLeave: () => C(!1), onFocusCapture: () => z(!0), onBlurCapture: (X) => {
    X.currentTarget.contains(X.relatedTarget) || z(!1);
  }, children: [
    /* @__PURE__ */ O.jsxs("div", { className: "showcase-top", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "showcase-intro", children: [
        /* @__PURE__ */ O.jsxs("h2", { id: "showcase-title", children: [
          "Rooted in craft.",
          /* @__PURE__ */ O.jsx("br", {}),
          /* @__PURE__ */ O.jsx("span", { children: "Made to be kept." })
        ] }),
        /* @__PURE__ */ O.jsx("p", { children: "Discover our collection of handcrafted vetiver garlands, home pieces and sacred crafts." }),
        /* @__PURE__ */ O.jsx("div", { className: "showcase-actions", children: /* @__PURE__ */ O.jsxs("a", { className: "showcase-cta", href: "products.html", children: [
          "Explore all products ",
          /* @__PURE__ */ O.jsx(_s, { size: 20, "aria-hidden": "true" })
        ] }) })
      ] }),
      /* @__PURE__ */ O.jsx("div", { className: "showcase-main showcase-viewport", ref: c, "aria-roledescription": "carousel", "aria-label": "Featured vetiver products", onKeyDown: (X) => {
        (X.key === "ArrowRight" || X.key === "ArrowLeft") && (X.preventDefault(), _(v + (X.key === "ArrowRight" ? 1 : -1)));
      }, tabIndex: 0, children: /* @__PURE__ */ O.jsx("div", { className: "showcase-track", children: Ur.map((X, Z) => /* @__PURE__ */ O.jsx("div", { className: "showcase-slide", "aria-hidden": v !== Z, children: /* @__PURE__ */ O.jsx(ru.img, { initial: !1, animate: { scale: s || v === Z ? 1 : 1.06 }, transition: { duration: s ? 0 : 0.9, ease: [0.22, 1, 0.36, 1] }, src: X.image, alt: X.alt, width: 1024, height: 1024, loading: "lazy", draggable: !1 }) }, X.id)) }) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "showcase-bottom", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "showcase-thumbnails", children: [
        /* @__PURE__ */ O.jsx("div", { className: "showcase-thumb-viewport showcase-viewport", ref: f, "aria-label": "Choose a featured product", children: /* @__PURE__ */ O.jsx("div", { className: "showcase-track", children: Ur.map((X, Z) => /* @__PURE__ */ O.jsx("div", { className: "showcase-thumb-slide", children: /* @__PURE__ */ O.jsxs("button", { type: "button", className: "showcase-thumb", "aria-label": "Show " + X.name, "aria-pressed": v === Z, onClick: () => _(Z), children: [
          /* @__PURE__ */ O.jsx("svg", { viewBox: "0 0 161 92", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("path", { d: "M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z", fill: "none", stroke: "currentColor" }) }),
          /* @__PURE__ */ O.jsx("img", { src: X.image, alt: "", width: 100, height: 100, loading: "lazy", draggable: !1 }),
          /* @__PURE__ */ O.jsx("span", { children: X.name })
        ] }) }, X.id)) }) }),
        /* @__PURE__ */ O.jsxs("div", { className: "showcase-controls", children: [
          /* @__PURE__ */ O.jsx("button", { type: "button", "aria-label": "Previous product", onClick: () => _(v - 1), children: /* @__PURE__ */ O.jsx(Vb, { size: 18 }) }),
          /* @__PURE__ */ O.jsxs("span", { children: [
            String(v + 1).padStart(2, "0"),
            " / ",
            String(Ur.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ O.jsx("button", { type: "button", "aria-label": "Next product", onClick: () => _(v + 1), children: /* @__PURE__ */ O.jsx(_s, { size: 18 }) }),
          !s && /* @__PURE__ */ O.jsx("button", { type: "button", "aria-label": S ? "Play product slideshow" : "Pause product slideshow", onClick: () => A(!S), children: S ? /* @__PURE__ */ O.jsx(fu, { size: 16 }) : /* @__PURE__ */ O.jsx(cu, { size: 16 }) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx("div", { className: "showcase-details showcase-viewport", ref: p, "aria-live": S ? "polite" : "off", children: /* @__PURE__ */ O.jsx("div", { className: "showcase-track", children: Ur.map((X, Z) => /* @__PURE__ */ O.jsxs("div", { className: "showcase-detail-slide", "aria-hidden": v !== Z, children: [
        /* @__PURE__ */ O.jsx("h3", { children: X.name }),
        /* @__PURE__ */ O.jsx("p", { children: X.description }),
        /* @__PURE__ */ O.jsxs("a", { href: "products.html#" + X.id, tabIndex: v === Z ? 0 : -1, children: [
          "Explore this piece ",
          /* @__PURE__ */ O.jsx(_s, { size: 16, "aria-hidden": "true" })
        ] })
      ] }, X.id)) }) })
    ] })
  ] });
}
function QD({ tagline: i, title: l, description: s, ctaText: r, images: c, className: d }) {
  const f = Q.useRef(null), m = Xh(f, { amount: 0.15 }), p = qh(), [g, v] = Q.useState(!1), [y, S] = Q.useState(!0);
  return Q.useEffect(() => {
    const A = () => S(!document.hidden);
    return A(), document.addEventListener("visibilitychange", A), () => document.removeEventListener("visibilitychange", A);
  }, []), /* @__PURE__ */ O.jsxs("section", { ref: f, className: rh("bulk-marquee", d), "aria-labelledby": "bulk-title", children: [
    /* @__PURE__ */ O.jsxs(ru.div, { className: "bulk-copy", initial: !1, animate: { y: p || m ? 0 : 16 }, transition: { duration: p ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }, children: [
      i && /* @__PURE__ */ O.jsx("p", { children: i }),
      /* @__PURE__ */ O.jsx("h2", { id: "bulk-title", children: l }),
      /* @__PURE__ */ O.jsx("p", { children: s }),
      /* @__PURE__ */ O.jsxs(ru.button, { type: "button", "data-bulk-enquiry": !0, "aria-haspopup": "dialog", "aria-controls": "bulk-enquiry-dialog", className: "bulk-cta", whileHover: p ? {} : { y: -2 }, whileTap: p ? {} : { scale: 0.98 }, children: [
        r,
        /* @__PURE__ */ O.jsx(uh, { size: 20, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ O.jsx("span", { className: "bulk-note", children: "Share your occasion, quantity and delivery location." })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: "bulk-image-window", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("div", { className: "bulk-image-track", style: { animationPlayState: g || p || !m || !y ? "paused" : "running" }, children: [0, 1].map((A) => /* @__PURE__ */ O.jsx("div", { className: "bulk-image-group", children: c.map((T, C) => /* @__PURE__ */ O.jsx("div", { className: "bulk-image", style: { rotate: (C % 2 === 0 ? -3 : 4) + "deg" }, children: /* @__PURE__ */ O.jsx("img", { src: T, alt: "", width: 1024, height: 1024, loading: "lazy", draggable: !1 }) }, T + C)) }, A)) }) }),
    !p && /* @__PURE__ */ O.jsxs("button", { type: "button", className: "bulk-motion-toggle", onClick: () => v(!g), "aria-label": g ? "Play product ribbon" : "Pause product ribbon", children: [
      g ? /* @__PURE__ */ O.jsx(fu, { size: 15 }) : /* @__PURE__ */ O.jsx(cu, { size: 15 }),
      /* @__PURE__ */ O.jsx("span", { children: g ? "Play motion" : "Pause motion" })
    ] })
  ] });
}
function nb() {
  const i = document.getElementById("product-showcase-root");
  i && zr.createRoot(i).render(/* @__PURE__ */ O.jsx(XD, {}));
  const l = document.getElementById("bulk-order-root");
  l && zr.createRoot(l).render(/* @__PURE__ */ O.jsx(QD, { title: /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    "More pieces.",
    /* @__PURE__ */ O.jsx("br", {}),
    "One thoughtful gesture."
  ] }), description: "For celebrations, gifting and larger orders, bring a little vetiver into every detail. Tell us what you have in mind and we’ll discuss the options with you.", ctaText: "Discuss a bulk order", images: vl.slice(0, 8).map((p) => p.image) }));
  const s = window.VETTIVER_CONFIG?.feedbackEndpoint || "", r = s.startsWith("/") && !s.startsWith("//") ? s : "", c = document.getElementById("testimonials-root");
  if (c) {
    const p = zr.createRoot(c), g = /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
      /* @__PURE__ */ O.jsx($3, { testimonials: sD }),
      /* @__PURE__ */ O.jsx(Pv, { endpoint: r })
    ] });
    new URLSearchParams(location.search).get("ui-demo") === "testimonials" ? import("./demo-DlVAriyq.js").then(({ AnimatedTestimonialsBasic: v }) => p.render(/* @__PURE__ */ O.jsxs(O.Fragment, { children: [
      /* @__PURE__ */ O.jsx(v, {}),
      /* @__PURE__ */ O.jsx(Pv, { endpoint: "" })
    ] }))) : p.render(g);
  }
  const d = document.getElementById("footer-root");
  d && zr.createRoot(d).render(/* @__PURE__ */ O.jsx(lD, { columns: document.body.classList.contains("catalog-page") ? [
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
document.readyState === "complete" ? nb() : document.addEventListener("DOMContentLoaded", nb, { once: !0 });
export {
  $3 as A,
  O as j
};
