function EE(i, l) {
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
function AE(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Qf = { exports: {} }, Ds = {};
var mv;
function wE() {
  if (mv) return Ds;
  mv = 1;
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
  return Ds.Fragment = l, Ds.jsx = s, Ds.jsxs = s, Ds;
}
var pv;
function CE() {
  return pv || (pv = 1, Qf.exports = wE()), Qf.exports;
}
var O = CE(), Zf = { exports: {} }, zs = {}, Kf = { exports: {} }, Pf = {};
var gv;
function ME() {
  return gv || (gv = 1, (function(i) {
    function l(G, P) {
      var et = G.length;
      G.push(P);
      t: for (; 0 < et; ) {
        var st = et - 1 >>> 1, Y = G[st];
        if (0 < c(Y, P))
          G[st] = P, G[et] = Y, et = st;
        else break t;
      }
    }
    function s(G) {
      return G.length === 0 ? null : G[0];
    }
    function o(G) {
      if (G.length === 0) return null;
      var P = G[0], et = G.pop();
      if (et !== P) {
        G[0] = et;
        t: for (var st = 0, Y = G.length, yt = Y >>> 1; st < yt; ) {
          var bt = 2 * (st + 1) - 1, nt = G[bt], x = bt + 1, H = G[x];
          if (0 > c(nt, et))
            x < Y && 0 > c(H, nt) ? (G[st] = H, G[x] = et, st = x) : (G[st] = nt, G[bt] = et, st = bt);
          else if (x < Y && 0 > c(H, et))
            G[st] = H, G[x] = et, st = x;
          else break t;
        }
      }
      return P;
    }
    function c(G, P) {
      var et = G.sortIndex - P.sortIndex;
      return et !== 0 ? et : G.id - P.id;
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
    var p = [], g = [], v = 1, y = null, S = 3, C = !1, T = !1, M = !1, A = !1, w = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, B = typeof setImmediate < "u" ? setImmediate : null;
    function X(G) {
      for (var P = s(g); P !== null; ) {
        if (P.callback === null) o(g);
        else if (P.startTime <= G)
          o(g), P.sortIndex = P.expirationTime, l(p, P);
        else break;
        P = s(g);
      }
    }
    function rt(G) {
      if (M = !1, X(G), !T)
        if (s(p) !== null)
          T = !0, ut || (ut = !0, Q());
        else {
          var P = s(g);
          P !== null && $(rt, P.startTime - G);
        }
    }
    var ut = !1, j = -1, N = 5, Z = -1;
    function lt() {
      return A ? !0 : !(i.unstable_now() - Z < N);
    }
    function J() {
      if (A = !1, ut) {
        var G = i.unstable_now();
        Z = G;
        var P = !0;
        try {
          t: {
            T = !1, M && (M = !1, z(j), j = -1), C = !0;
            var et = S;
            try {
              e: {
                for (X(G), y = s(p); y !== null && !(y.expirationTime > G && lt()); ) {
                  var st = y.callback;
                  if (typeof st == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var Y = st(
                      y.expirationTime <= G
                    );
                    if (G = i.unstable_now(), typeof Y == "function") {
                      y.callback = Y, X(G), P = !0;
                      break e;
                    }
                    y === s(p) && o(p), X(G);
                  } else o(p);
                  y = s(p);
                }
                if (y !== null) P = !0;
                else {
                  var yt = s(g);
                  yt !== null && $(
                    rt,
                    yt.startTime - G
                  ), P = !1;
                }
              }
              break t;
            } finally {
              y = null, S = et, C = !1;
            }
            P = void 0;
          }
        } finally {
          P ? Q() : ut = !1;
        }
      }
    }
    var Q;
    if (typeof B == "function")
      Q = function() {
        B(J);
      };
    else if (typeof MessageChannel < "u") {
      var tt = new MessageChannel(), W = tt.port2;
      tt.port1.onmessage = J, Q = function() {
        W.postMessage(null);
      };
    } else
      Q = function() {
        w(J, 0);
      };
    function $(G, P) {
      j = w(function() {
        G(i.unstable_now());
      }, P);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(G) {
      G.callback = null;
    }, i.unstable_forceFrameRate = function(G) {
      0 > G || 125 < G ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : N = 0 < G ? Math.floor(1e3 / G) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, i.unstable_next = function(G) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var P = 3;
          break;
        default:
          P = S;
      }
      var et = S;
      S = P;
      try {
        return G();
      } finally {
        S = et;
      }
    }, i.unstable_requestPaint = function() {
      A = !0;
    }, i.unstable_runWithPriority = function(G, P) {
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
      var et = S;
      S = G;
      try {
        return P();
      } finally {
        S = et;
      }
    }, i.unstable_scheduleCallback = function(G, P, et) {
      var st = i.unstable_now();
      switch (typeof et == "object" && et !== null ? (et = et.delay, et = typeof et == "number" && 0 < et ? st + et : st) : et = st, G) {
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
      return Y = et + Y, G = {
        id: v++,
        callback: P,
        priorityLevel: G,
        startTime: et,
        expirationTime: Y,
        sortIndex: -1
      }, et > st ? (G.sortIndex = et, l(g, G), s(p) === null && G === s(g) && (M ? (z(j), j = -1) : M = !0, $(rt, et - st))) : (G.sortIndex = Y, l(p, G), T || C || (T = !0, ut || (ut = !0, Q()))), G;
    }, i.unstable_shouldYield = lt, i.unstable_wrapCallback = function(G) {
      var P = S;
      return function() {
        var et = S;
        S = P;
        try {
          return G.apply(this, arguments);
        } finally {
          S = et;
        }
      };
    };
  })(Pf)), Pf;
}
var yv;
function DE() {
  return yv || (yv = 1, Kf.exports = ME()), Kf.exports;
}
var Ff = { exports: {} }, At = {};
var vv;
function zE() {
  if (vv) return At;
  vv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = /* @__PURE__ */ Symbol.for("react.view_transition"), C = Symbol.iterator;
  function T(x) {
    return x === null || typeof x != "object" ? null : (x = C && x[C] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var M = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, A = Object.assign, w = {};
  function z(x, H, it) {
    this.props = x, this.context = H, this.refs = w, this.updater = it || M;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(x, H) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, H, "setState");
  }, z.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function B() {
  }
  B.prototype = z.prototype;
  function X(x, H, it) {
    this.props = x, this.context = H, this.refs = w, this.updater = it || M;
  }
  var rt = X.prototype = new B();
  rt.constructor = X, A(rt, z.prototype), rt.isPureReactComponent = !0;
  var ut = Array.isArray;
  function j() {
  }
  var N = { H: null, A: null, T: null, S: null }, Z = Object.prototype.hasOwnProperty;
  function lt(x, H, it) {
    var at = it.ref;
    return {
      $$typeof: i,
      type: x,
      key: H,
      ref: at !== void 0 ? at : null,
      props: it
    };
  }
  function J(x, H) {
    return lt(x.type, H, x.props);
  }
  function Q(x) {
    return typeof x == "object" && x !== null && x.$$typeof === i;
  }
  function tt(x) {
    var H = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(it) {
      return H[it];
    });
  }
  var W = /\/+/g;
  function $(x, H) {
    return typeof x == "object" && x !== null && x.key != null ? tt("" + x.key) : H.toString(36);
  }
  function G(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(j, j) : (x.status = "pending", x.then(
          function(H) {
            x.status === "pending" && (x.status = "fulfilled", x.value = H);
          },
          function(H) {
            x.status === "pending" && (x.status = "rejected", x.reason = H);
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
  function P(x, H, it, at, vt) {
    var ft = typeof x;
    (ft === "undefined" || ft === "boolean") && (x = null);
    var Tt = !1;
    if (x === null) Tt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          Tt = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case i:
            case l:
              Tt = !0;
              break;
            case v:
              return Tt = x._init, P(
                Tt(x._payload),
                H,
                it,
                at,
                vt
              );
          }
      }
    if (Tt)
      return vt = vt(x), Tt = at === "" ? "." + $(x, 0) : at, ut(vt) ? (it = "", Tt != null && (it = Tt.replace(W, "$&/") + "/"), P(vt, H, it, "", function(Et) {
        return Et;
      })) : vt != null && (Q(vt) && (vt = J(
        vt,
        it + (vt.key == null || x && x.key === vt.key ? "" : ("" + vt.key).replace(
          W,
          "$&/"
        ) + "/") + Tt
      )), H.push(vt)), 1;
    Tt = 0;
    var ot = at === "" ? "." : at + ":";
    if (ut(x))
      for (var I = 0; I < x.length; I++)
        at = x[I], ft = ot + $(at, I), Tt += P(
          at,
          H,
          it,
          ft,
          vt
        );
    else if (I = T(x), typeof I == "function")
      for (x = I.call(x), I = 0; !(at = x.next()).done; )
        at = at.value, ft = ot + $(at, I++), Tt += P(
          at,
          H,
          it,
          ft,
          vt
        );
    else if (ft === "object") {
      if (typeof x.then == "function")
        return P(
          G(x),
          H,
          it,
          at,
          vt
        );
      throw H = String(x), Error(
        "Objects are not valid as a React child (found: " + (H === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : H) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Tt;
  }
  function et(x, H, it) {
    if (x == null) return x;
    var at = [], vt = 0;
    return P(x, at, "", "", function(ft) {
      return H.call(it, ft, vt++);
    }), at;
  }
  function st(x) {
    if (x._status === -1) {
      var H = x._result, it = H();
      it.then(
        function(at) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = at, it.status === void 0 && (it.status = "fulfilled", it.value = at));
        },
        function(at) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = at, it.status === void 0 && (it.status = "rejected", it.reason = at));
        }
      ), x._status === -1 && (x._status = 0, x._result = it);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var H = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(H)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  };
  function yt(x) {
    var H = N.T, it = {};
    it.types = H !== null ? H.types : null, N.T = it;
    try {
      var at = x(), vt = N.S;
      vt !== null && vt(it, at), typeof at == "object" && at !== null && typeof at.then == "function" && at.then(j, Y);
    } catch (ft) {
      Y(ft);
    } finally {
      H !== null && it.types !== null && (H.types = it.types), N.T = H;
    }
  }
  function bt(x) {
    var H = N.T;
    if (H !== null) {
      var it = H.types;
      it === null ? H.types = [x] : it.indexOf(x) === -1 && it.push(x);
    } else yt(bt.bind(null, x));
  }
  var nt = {
    map: et,
    forEach: function(x, H, it) {
      et(
        x,
        function() {
          H.apply(this, arguments);
        },
        it
      );
    },
    count: function(x) {
      var H = 0;
      return et(x, function() {
        H++;
      }), H;
    },
    toArray: function(x) {
      return et(x, function(H) {
        return H;
      }) || [];
    },
    only: function(x) {
      if (!Q(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return At.Activity = y, At.Children = nt, At.Component = z, At.Fragment = s, At.Profiler = c, At.PureComponent = X, At.StrictMode = o, At.Suspense = p, At.ViewTransition = S, At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, At.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return N.H.useMemoCache(x);
    }
  }, At.addTransitionType = bt, At.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, At.cacheSignal = function() {
    return null;
  }, At.cloneElement = function(x, H, it) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var at = A({}, x.props), vt = x.key;
    if (H != null)
      for (ft in H.key !== void 0 && (vt = "" + H.key), H)
        !Z.call(H, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && H.ref === void 0 || (at[ft] = H[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) at.children = it;
    else if (1 < ft) {
      for (var Tt = Array(ft), ot = 0; ot < ft; ot++)
        Tt[ot] = arguments[ot + 2];
      at.children = Tt;
    }
    return lt(x.type, vt, at);
  }, At.createContext = function(x) {
    return x = {
      $$typeof: f,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: d,
      _context: x
    }, x;
  }, At.createElement = function(x, H, it) {
    var at, vt = {}, ft = null;
    if (H != null)
      for (at in H.key !== void 0 && (ft = "" + H.key), H)
        Z.call(H, at) && at !== "key" && at !== "__self" && at !== "__source" && (vt[at] = H[at]);
    var Tt = arguments.length - 2;
    if (Tt === 1) vt.children = it;
    else if (1 < Tt) {
      for (var ot = Array(Tt), I = 0; I < Tt; I++)
        ot[I] = arguments[I + 2];
      vt.children = ot;
    }
    if (x && x.defaultProps)
      for (at in Tt = x.defaultProps, Tt)
        vt[at] === void 0 && (vt[at] = Tt[at]);
    return lt(x, ft, vt);
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(x) {
    return { $$typeof: m, render: x };
  }, At.isValidElement = Q, At.lazy = function(x) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: x },
      _init: st
    };
  }, At.memo = function(x, H) {
    return {
      $$typeof: g,
      type: x,
      compare: H === void 0 ? null : H
    };
  }, At.startTransition = yt, At.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, At.use = function(x) {
    return N.H.use(x);
  }, At.useActionState = function(x, H, it) {
    return N.H.useActionState(x, H, it);
  }, At.useCallback = function(x, H) {
    return N.H.useCallback(x, H);
  }, At.useContext = function(x) {
    return N.H.useContext(x);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(x, H) {
    return N.H.useDeferredValue(x, H);
  }, At.useEffect = function(x, H) {
    return N.H.useEffect(x, H);
  }, At.useEffectEvent = function(x) {
    return N.H.useEffectEvent(x);
  }, At.useId = function() {
    return N.H.useId();
  }, At.useImperativeHandle = function(x, H, it) {
    return N.H.useImperativeHandle(x, H, it);
  }, At.useInsertionEffect = function(x, H) {
    return N.H.useInsertionEffect(x, H);
  }, At.useLayoutEffect = function(x, H) {
    return N.H.useLayoutEffect(x, H);
  }, At.useMemo = function(x, H) {
    return N.H.useMemo(x, H);
  }, At.useOptimistic = function(x, H) {
    return N.H.useOptimistic(x, H);
  }, At.useReducer = function(x, H, it) {
    return N.H.useReducer(x, H, it);
  }, At.useRef = function(x) {
    return N.H.useRef(x);
  }, At.useState = function(x) {
    return N.H.useState(x);
  }, At.useSyncExternalStore = function(x, H, it) {
    return N.H.useSyncExternalStore(
      x,
      H,
      it
    );
  }, At.useTransition = function() {
    return N.H.useTransition();
  }, At.version = "19.3.0", At;
}
var bv;
function eh() {
  return bv || (bv = 1, Ff.exports = zE()), Ff.exports;
}
var Jf = { exports: {} }, Ae = {};
var Sv;
function OE() {
  if (Sv) return Ae;
  Sv = 1;
  var i = eh();
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
    var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: C == null ? null : C === f ? f : "" + C,
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
  return Ae.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Ae.browser = function(v) {
    return { $$typeof: d, _reason: v };
  }, Ae.createPortal = function(v, y) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11)
      throw Error(l(299));
    return m(v, y, null, S);
  }, Ae.flushSync = function(v) {
    var y = p.T, S = o.p;
    try {
      if (p.T = null, o.p = 2, v) return v();
    } finally {
      p.T = y, o.p = S, o.d.f();
    }
  }, Ae.preconnect = function(v, y) {
    typeof v == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, o.d.C(v, y));
  }, Ae.prefetchDNS = function(v) {
    typeof v == "string" && o.d.D(v);
  }, Ae.preinit = function(v, y) {
    if (typeof v == "string" && y && typeof y.as == "string") {
      var S = y.as, C = g(S, y.crossOrigin), T = typeof y.integrity == "string" ? y.integrity : void 0, M = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? o.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: C,
          integrity: T,
          fetchPriority: M
        }
      ) : S === "script" && o.d.X(v, {
        crossOrigin: C,
        integrity: T,
        fetchPriority: M,
        nonce: typeof y.nonce == "string" ? y.nonce : void 0
      });
    }
  }, Ae.preinitModule = function(v, y) {
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
  }, Ae.preload = function(v, y) {
    if (typeof v == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
      var S = y.as, C = g(S, y.crossOrigin);
      o.d.L(v, S, {
        crossOrigin: C,
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
  }, Ae.preloadModule = function(v, y) {
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
  }, Ae.requestFormReset = function(v) {
    o.d.r(v);
  }, Ae.unstable_batchedUpdates = function(v, y) {
    return v(y);
  }, Ae.useFormState = function(v, y, S) {
    return p.H.useFormState(v, y, S);
  }, Ae.useFormStatus = function() {
    return p.H.useHostTransitionStatus();
  }, Ae.version = "19.3.0", Ae;
}
var Tv;
function ab() {
  if (Tv) return Jf.exports;
  Tv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Jf.exports = OE(), Jf.exports;
}
var xv;
function NE() {
  if (xv) return zs;
  xv = 1;
  var i = DE(), l = eh(), s = ab();
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
  function C(t) {
    var e = !1;
    for (t = t.return; t !== null && (t.tag === 4 && (e = !0), !(t.tag === 3 || t.tag === 5 || t.tag === 27)); )
      t = t.return;
    return e;
  }
  function T(t) {
    var e = [null, null], n = S(t);
    return n === null || M(
      e,
      t,
      n.child,
      { foundSelf: !1 }
    ), e;
  }
  function M(t, e, n, a) {
    for (; n !== null; ) {
      if (n === e) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return t[1] = n, !0;
        t[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && M(
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
  function A(t) {
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
  var w = null, z = null;
  function B(t, e, n) {
    return t === n ? !0 : t === e ? (w = t, !0) : !1;
  }
  function X(t, e, n) {
    return t === n ? (z = t, !1) : t === e ? (z !== null && (w = t), !0) : !1;
  }
  function rt(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function ut(t, e, n) {
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
  var j = Object.assign, N = /* @__PURE__ */ Symbol.for("react.element"), Z = /* @__PURE__ */ Symbol.for("react.transitional.element"), lt = /* @__PURE__ */ Symbol.for("react.portal"), J = /* @__PURE__ */ Symbol.for("react.fragment"), Q = /* @__PURE__ */ Symbol.for("react.strict_mode"), tt = /* @__PURE__ */ Symbol.for("react.profiler"), W = /* @__PURE__ */ Symbol.for("react.consumer"), $ = /* @__PURE__ */ Symbol.for("react.context"), G = /* @__PURE__ */ Symbol.for("react.forward_ref"), P = /* @__PURE__ */ Symbol.for("react.suspense"), et = /* @__PURE__ */ Symbol.for("react.suspense_list"), st = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), yt = /* @__PURE__ */ Symbol.for("react.activity"), bt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), nt = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), x = /* @__PURE__ */ Symbol.for("react.view_transition"), H = /* @__PURE__ */ Symbol.for("react.recoverable"), it = Symbol.iterator;
  function at(t) {
    return t === null || typeof t != "object" ? null : (t = it && t[it] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var vt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case J:
        return "Fragment";
      case tt:
        return "Profiler";
      case Q:
        return "StrictMode";
      case P:
        return "Suspense";
      case et:
        return "SuspenseList";
      case yt:
        return "Activity";
      case x:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case lt:
          return "Portal";
        case $:
          return t.displayName || "Context";
        case W:
          return (t._context.displayName || "Context") + ".Consumer";
        case G:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case st:
          return e = t.displayName || null, e !== null ? e : ft(t.type) || "Memo";
        case Y:
          e = t._payload, t = t._init;
          try {
            return ft(t(e));
          } catch {
          }
      }
    return null;
  }
  var Tt = Array.isArray, ot = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Et = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Mt = [], It = -1;
  function Xt(t) {
    return { current: t };
  }
  function Ut(t) {
    0 > It || (t.current = Mt[It], Mt[It] = null, It--);
  }
  function Ot(t, e) {
    It++, Mt[It] = t.current, t.current = e;
  }
  var Pt = Xt(null), Ge = Xt(null), Ve = Xt(null), si = Xt(null);
  function oi(t, e) {
    switch (Ot(Ve, e), Ot(Ge, t), Ot(Pt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ey(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Ey(e), t = Ay(e, t);
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
    Ut(Pt), Ot(Pt, t);
  }
  function Gn() {
    Ut(Pt), Ut(Ge), Ut(Ve);
  }
  function Ca(t) {
    var e = t.memoizedState;
    e !== null && (pl._currentValue = e.memoizedState, Ot(si, t)), e = Pt.current;
    var n = Ay(e, t.type);
    e !== n && (Ot(Ge, t), Ot(Pt, n));
  }
  function Ma(t) {
    Ge.current === t && (Ut(Pt), Ut(Ge)), si.current === t && (Ut(si), pl._currentValue = Et);
  }
  var Da, $s;
  function en(t) {
    if (Da === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        Da = e && e[1] || "", $s = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Da + t + $s;
  }
  var wn = !1;
  function Gi(t, e) {
    if (!t || wn) return "";
    wn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var F = function() {
                throw Error();
              };
              if (Object.defineProperty(F.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(F, []);
                } catch (ct) {
                  var R = ct;
                }
                Reflect.construct(t, [], F);
              } else {
                try {
                  F.call();
                } catch (ct) {
                  R = ct;
                }
                F = !1;
                try {
                  var U = Object.getOwnPropertyDescriptor(
                    t.prototype,
                    "props"
                  );
                  Object.defineProperty(t.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), F = !0, new t();
                } finally {
                  F && (U !== void 0 ? Object.defineProperty(t.prototype, "props", U) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ct) {
                R = ct;
              }
              (F = t()) && typeof F.catch == "function" && F.catch(function() {
              });
            }
          } catch (ct) {
            if (ct && R && typeof ct.stack == "string")
              return [ct.stack, R.stack];
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
        var E = h.split(`
`), V = b.split(`
`);
        for (r = a = 0; a < E.length && !E[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; r < V.length && !V[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (a === E.length || r === V.length)
          for (a = E.length - 1, r = V.length - 1; 1 <= a && 0 <= r && E[a] !== V[r]; )
            r--;
        for (; 1 <= a && 0 <= r; a--, r--)
          if (E[a] !== V[r]) {
            if (a !== 1 || r !== 1)
              do
                if (a--, r--, 0 > r || E[a] !== V[r]) {
                  var k = `
` + E[a].replace(" at new ", " at ");
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
        return Gi(t.type, !1);
      case 11:
        return Gi(t.type.render, !1);
      case 1:
        return Gi(t.type, !0);
      case 31:
        return en("Activity");
      case 30:
        return en("ViewTransition");
      default:
        return "";
    }
  }
  function Yi(t) {
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
  var zl = Object.prototype.hasOwnProperty, Ol = i.unstable_scheduleCallback, Nl = i.unstable_cancelCallback, du = i.unstable_shouldYield, hu = i.unstable_requestPaint, Me = i.unstable_now, mu = i.unstable_getCurrentPriorityLevel, Rl = i.unstable_ImmediatePriority, _l = i.unstable_UserBlockingPriority, qi = i.unstable_NormalPriority, pu = i.unstable_LowPriority, Vl = i.unstable_IdlePriority, to = i.log, gu = i.unstable_setDisableYieldValue, jl = null, Ye = null;
  function ri(t) {
    if (typeof to == "function" && gu(t), Ye && typeof Ye.setStrictMode == "function")
      try {
        Ye.setStrictMode(jl, t);
      } catch {
      }
  }
  var qe = Math.clz32 ? Math.clz32 : LS, VS = Math.log, jS = Math.LN2;
  function LS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (VS(t) / jS | 0) | 0;
  }
  var eo = 256, no = 262144, io = 4194304;
  function Xi(t) {
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
  function ao(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var r = 0, u = t.suspendedLanes, h = t.pingedLanes;
    t = t.warmLanes;
    var b = a & 134217727;
    return b !== 0 ? (a = b & ~u, a !== 0 ? r = Xi(a) : (h &= b, h !== 0 ? r = Xi(h) : n || (n = b & ~t, n !== 0 && (r = Xi(n))))) : (b = a & ~u, b !== 0 ? r = Xi(b) : h !== 0 ? r = Xi(h) : n || (n = a & ~t, n !== 0 && (r = Xi(n)))), r === 0 ? 0 : e !== 0 && e !== r && (e & u) === 0 && (u = r & -r, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : r;
  }
  function Ll(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Fh(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - qe(n), r = 1 << a;
        e |= t[a], n &= ~r;
      }
    return e;
  }
  function BS(t, e) {
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
  function Jh() {
    var t = io;
    return io <<= 1, (io & 62914560) === 0 && (io = 4194304), t;
  }
  function yu(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Bl(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function US(t, e, n, a, r, u) {
    var h = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var b = t.entanglements, E = t.expirationTimes, V = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var k = 31 - qe(n), F = 1 << k;
      b[k] = 0, E[k] = -1;
      var R = V[k];
      if (R !== null)
        for (V[k] = null, k = 0; k < R.length; k++) {
          var U = R[k];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~F;
    }
    a !== 0 && Ih(t, a, 0), u !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e));
  }
  function Ih(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - qe(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function Wh(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - qe(n), r = 1 << a;
      r & e | t[a] & e && (t[a] |= e), n &= ~r;
    }
  }
  function $h(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : vu(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function vu(t) {
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
  function bu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function tm() {
    var t = I.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : ov(t.type));
  }
  function em(t, e) {
    var n = I.p;
    try {
      return I.p = t, e();
    } finally {
      I.p = n;
    }
  }
  var Yn = Math.random().toString(36).slice(2), ve = "__reactFiber$" + Yn, je = "__reactProps$" + Yn, za = "__reactContainer$" + Yn, nm = "__reactEvents$" + Yn, HS = "__reactListeners$" + Yn, kS = "__reactHandles$" + Yn, im = "__reactResources$" + Yn, Ul = "__reactMarker$" + Yn, lo = "__reactLoad$" + Yn;
  function so(t) {
    delete t[ve], delete t[je], delete t[HS], delete t[kS];
  }
  function Qi(t) {
    var e;
    if (e = t[ve]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[za] || n[ve]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Gy(t); t !== null; ) {
            if (n = t[ve]) return n;
            t = Gy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function Oa(t) {
    if (t = t[ve] || t[za]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Hl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Na(t) {
    var e = t[im];
    return e || (e = t[im] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function me(t) {
    t[Ul] = !0;
  }
  function am(t) {
    t[lo] = void 0;
  }
  var lm = /* @__PURE__ */ new Set(), sm = {};
  function Zi(t, e) {
    Ra(t, e), Ra(t + "Capture", e);
  }
  function Ra(t, e) {
    for (sm[t] = e, t = 0; t < e.length; t++)
      lm.add(e[t]);
  }
  var GS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), om = {}, rm = {};
  function YS(t) {
    return zl.call(rm, t) ? !0 : zl.call(om, t) ? !1 : GS.test(t) ? rm[t] = !0 : (om[t] = !0, !1);
  }
  var Lt = !1;
  function um() {
    var t = Lt;
    return Lt = !1, t;
  }
  function oo(t, e, n) {
    if (YS(e))
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
  function ro(t, e, n) {
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
  function cm(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function qS(t, e, n) {
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
  function Su(t) {
    if (!t._valueTracker) {
      var e = cm(t) ? "checked" : "value";
      t._valueTracker = qS(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function fm(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = cm(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var XS = /[\n"\\]/g;
  function nn(t) {
    return t.replace(
      XS,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Tu(t, e, n, a, r, u, h, b) {
    t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Xe(e)) : t.value !== "" + Xe(e) && (t.value = "" + Xe(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? h === "number" && t.value == e ? xu(t, Xe(t.value)) : xu(t, Xe(e)) : n != null ? xu(t, Xe(n)) : a != null && t.removeAttribute("value"), r == null && u != null && (t.defaultChecked = !!u), r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Xe(b) : t.removeAttribute("name");
  }
  function dm(t, e, n, a, r, u, h, b) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Su(t);
        return;
      }
      n = n != null ? "" + Xe(n) : "", e = e != null ? "" + Xe(e) : n, b || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? r, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = b ? t.checked : !!a, t.defaultChecked = !!a, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), Su(t);
  }
  function xu(t, e) {
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
  function hm(t, e, n) {
    if (e != null && (e = "" + Xe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Xe(n) : "";
  }
  function mm(t, e, n, a) {
    if (e == null) {
      if (a != null) {
        if (n != null) throw Error(o(92));
        if (Tt(a)) {
          if (1 < a.length) throw Error(o(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), e = n;
    }
    n = Xe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Su(t);
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
  var QS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pm(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || QS.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function gm(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Lt = !0);
      for (var r in e)
        a = e[r], e.hasOwnProperty(r) && n[r] !== a && (pm(t, r, a), Lt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && pm(t, u, e[u]);
  }
  function Eu(t) {
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
  var ZS = /* @__PURE__ */ new Map([
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
  ]), KS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function uo(t) {
    return KS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Cn() {
  }
  var Au = null;
  function wu(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ja = null, La = null;
  function ym(t) {
    var e = Oa(t);
    if (e && (t = e.stateNode)) {
      var n = t[je] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Tu(
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
                var r = a[je] || null;
                if (!r) throw Error(o(90));
                Tu(
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
              a = n[e], a.form === t.form && fm(a);
          }
          break t;
        case "textarea":
          hm(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && _a(t, !!n.multiple, e, !1);
      }
    }
  }
  var Cu = !1;
  function vm(t, e, n) {
    if (Cu) return t(e, n);
    Cu = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Cu = !1, (ja !== null || La !== null) && (cr(), ja && (e = ja, t = La, La = ja = null, ym(e), t)))
        for (e = 0; e < t.length; e++) ym(t[e]);
    }
  }
  function kl(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var a = n[je] || null;
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
  var Xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Mu = !1;
  if (Xn)
    try {
      var Gl = {};
      Object.defineProperty(Gl, "passive", {
        get: function() {
          Mu = !0;
        }
      }), window.addEventListener("test", Gl, Gl), window.removeEventListener("test", Gl, Gl);
    } catch {
      Mu = !1;
    }
  var ui = null, Du = null, co = null;
  function bm() {
    if (co) return co;
    var t, e = Du, n = e.length, a, r = "value" in ui ? ui.value : ui.textContent, u = r.length;
    for (t = 0; t < n && e[t] === r[t]; t++) ;
    var h = n - t;
    for (a = 1; a <= h && e[n - a] === r[u - a]; a++) ;
    return co = r.slice(t, 1 < a ? 1 - a : void 0);
  }
  function fo(t) {
    var e = t.keyCode;
    return "charCode" in t ? (t = t.charCode, t === 0 && e === 13 && (t = 13)) : t = e, t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0;
  }
  function ho() {
    return !0;
  }
  function Sm() {
    return !1;
  }
  function ze(t) {
    function e(n, a, r, u, h) {
      this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var b in t)
        t.hasOwnProperty(b) && (n = t[b], this[b] = n ? n(u) : u[b]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? ho : Sm, this.isPropagationStopped = Sm, this;
    }
    return j(e.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = ho);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = ho);
      },
      persist: function() {
      },
      isPersistent: ho
    }), e;
  }
  var ci = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, mo = ze(ci), Yl = j({}, ci, { view: 0, detail: 0 }), PS = ze(Yl), zu, Ou, ql, po = j({}, Yl, {
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
    getModifierState: Ru,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== ql && (ql && t.type === "mousemove" ? (zu = t.screenX - ql.screenX, Ou = t.screenY - ql.screenY) : Ou = zu = 0, ql = t), zu);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Ou;
    }
  }), Tm = ze(po), FS = j({}, po, { dataTransfer: 0 }), JS = ze(FS), IS = j({}, Yl, { relatedTarget: 0 }), Nu = ze(IS), WS = j({}, ci, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $S = ze(WS), tT = j({}, ci, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), eT = ze(tT), nT = j({}, ci, { data: 0 }), xm = ze(nT), iT = {
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
  }, aT = {
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
  }, lT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function sT(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = lT[t]) ? !!e[t] : !1;
  }
  function Ru() {
    return sT;
  }
  var oT = j({}, Yl, {
    key: function(t) {
      if (t.key) {
        var e = iT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = fo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? aT[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ru,
    charCode: function(t) {
      return t.type === "keypress" ? fo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? fo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), rT = ze(oT), uT = j({}, po, {
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
  }), Em = ze(uT), cT = j({}, ci, { submitter: 0 }), fT = ze(cT), dT = j({}, Yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ru
  }), hT = ze(dT), mT = j({}, ci, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), pT = ze(mT), gT = j({}, po, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), yT = ze(gT), vT = j({}, ci, {
    newState: 0,
    oldState: 0,
    source: 0
  }), bT = ze(vT), ST = [9, 13, 27, 32], _u = Xn && "CompositionEvent" in window, Xl = null;
  Xn && "documentMode" in document && (Xl = document.documentMode);
  var TT = Xn && "TextEvent" in window && !Xl, Am = Xn && (!_u || Xl && 8 < Xl && 11 >= Xl), wm = " ", Cm = !1;
  function Mm(t, e) {
    switch (t) {
      case "keyup":
        return ST.indexOf(e.keyCode) !== -1;
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
  function Dm(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ba = !1;
  function xT(t, e) {
    switch (t) {
      case "compositionend":
        return Dm(e);
      case "keypress":
        return e.which !== 32 ? null : (Cm = !0, wm);
      case "textInput":
        return t = e.data, t === wm && Cm ? null : t;
      default:
        return null;
    }
  }
  function ET(t, e) {
    if (Ba)
      return t === "compositionend" || !_u && Mm(t, e) ? (t = bm(), co = Du = ui = null, Ba = !1, t) : null;
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
        return Am && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var AT = {
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
    return e === "input" ? !!AT[t.type] : e === "textarea";
  }
  function Om(t, e, n, a) {
    ja ? La ? La.push(a) : La = [a] : ja = a, e = gr(e, "onChange"), 0 < e.length && (n = new mo(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Ql = null, Zl = null;
  function wT(t) {
    yy(t, 0);
  }
  function go(t) {
    var e = Hl(t);
    if (fm(e)) return t;
  }
  function Nm(t, e) {
    if (t === "change") return e;
  }
  var Rm = !1;
  if (Xn) {
    var Vu;
    if (Xn) {
      var ju = "oninput" in document;
      if (!ju) {
        var _m = document.createElement("div");
        _m.setAttribute("oninput", "return;"), ju = typeof _m.oninput == "function";
      }
      Vu = ju;
    } else Vu = !1;
    Rm = Vu && (!document.documentMode || 9 < document.documentMode);
  }
  function Vm() {
    Ql && (Ql.detachEvent("onpropertychange", jm), Zl = Ql = null);
  }
  function jm(t) {
    if (t.propertyName === "value" && go(Zl)) {
      var e = [];
      Om(
        e,
        Zl,
        t,
        wu(t)
      ), vm(wT, e);
    }
  }
  function CT(t, e, n) {
    t === "focusin" ? (Vm(), Ql = e, Zl = n, Ql.attachEvent("onpropertychange", jm)) : t === "focusout" && Vm();
  }
  function MT(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return go(Zl);
  }
  function DT(t, e) {
    if (t === "click") return go(e);
  }
  function zT(t, e) {
    if (t === "input" || t === "change")
      return go(e);
  }
  function OT(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Qe = typeof Object.is == "function" ? Object.is : OT;
  function Kl(t, e) {
    if (Qe(t, e)) return !0;
    if (typeof t != "object" || t === null || typeof e != "object" || e === null)
      return !1;
    var n = Object.keys(t), a = Object.keys(e);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var r = n[a];
      if (!zl.call(e, r) || !Qe(t[r], e[r]))
        return !1;
    }
    return !0;
  }
  function Lu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Lm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Bm(t, e) {
    var n = Lm(t);
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
      n = Lm(n);
    }
  }
  function Um(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Um(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Hm(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Lu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Lu(t.document);
    }
    return e;
  }
  function Bu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var NT = Xn && "documentMode" in document && 11 >= document.documentMode, Ua = null, Uu = null, Pl = null, Hu = !1;
  function km(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Hu || Ua == null || Ua !== Lu(a) || (a = Ua, "selectionStart" in a && Bu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Pl && Kl(Pl, a) || (Pl = a, a = gr(Uu, "onSelect"), 0 < a.length && (e = new mo(
      "onSelect",
      "select",
      null,
      e,
      n
    ), t.push({ event: e, listeners: a }), e.target = Ua)));
  }
  function Ki(t, e) {
    var n = {};
    return n[t.toLowerCase()] = e.toLowerCase(), n["Webkit" + t] = "webkit" + e, n["Moz" + t] = "moz" + e, n;
  }
  var Ha = {
    animationend: Ki("Animation", "AnimationEnd"),
    animationiteration: Ki("Animation", "AnimationIteration"),
    animationstart: Ki("Animation", "AnimationStart"),
    transitionrun: Ki("Transition", "TransitionRun"),
    transitionstart: Ki("Transition", "TransitionStart"),
    transitioncancel: Ki("Transition", "TransitionCancel"),
    transitionend: Ki("Transition", "TransitionEnd")
  }, ku = {}, Gm = {};
  Xn && (Gm = document.createElement("div").style, "AnimationEvent" in window || (delete Ha.animationend.animation, delete Ha.animationiteration.animation, delete Ha.animationstart.animation), "TransitionEvent" in window || delete Ha.transitionend.transition);
  function Pi(t) {
    if (ku[t]) return ku[t];
    if (!Ha[t]) return t;
    var e = Ha[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Gm)
        return ku[t] = e[n];
    return t;
  }
  var Ym = Pi("animationend"), qm = Pi("animationiteration"), Xm = Pi("animationstart"), RT = Pi("transitionrun"), _T = Pi("transitionstart"), VT = Pi("transitioncancel"), Qm = Pi("transitionend"), Zm = /* @__PURE__ */ new Map(), Gu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Gu.push("scrollEnd");
  function hn(t, e) {
    Zm.set(t, e), Zi(e, [t]);
  }
  var jT = 0;
  function Qn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = yn.identifierPrefix;
    var n = jT++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Km(t) {
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
    return t = Km(t), e = Km(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
  }
  var yo = typeof reportError == "function" ? reportError : function(t) {
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
  }, an = [], ka = 0, Yu = 0;
  function vo() {
    for (var t = ka, e = Yu = ka = 0; e < t; ) {
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
      u !== 0 && Pm(n, r, u);
    }
  }
  function bo(t, e, n, a) {
    an[ka++] = t, an[ka++] = e, an[ka++] = n, an[ka++] = a, Yu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function qu(t, e, n, a) {
    return bo(t, e, n, a), So(t);
  }
  function Fi(t, e) {
    return bo(t, null, null, e), So(t);
  }
  function Pm(t, e, n) {
    t.lanes |= n;
    var a = t.alternate;
    a !== null && (a.lanes |= n);
    for (var r = !1, u = t.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (t = u.stateNode, t === null || t._visibility & 1 || (r = !0)), t = u, u = u.return;
    return t.tag === 3 ? (u = t.stateNode, r && e !== null && (r = 31 - qe(n), t = u.hiddenUpdates, a = t[r], a === null ? t[r] = [e] : a.push(e), e.lane = n | 536870912), u) : null;
  }
  function So(t) {
    if (50 < gs)
      throw gs = 0, ur = null, Error(o(185));
    for (var e = t.return; e !== null; )
      t = e, e = t.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Ga = {};
  function LT(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Le(t, e, n, a) {
    return new LT(t, e, n, a);
  }
  function Xu(t) {
    return t = t.prototype, !(!t || !t.isReactComponent);
  }
  function Kn(t, e) {
    var n = t.alternate;
    return n === null ? (n = Le(
      t.tag,
      e,
      t.key,
      t.mode
    ), n.elementType = t.elementType, n.type = t.type, n.stateNode = t.stateNode, n.alternate = t, t.alternate = n) : (n.pendingProps = e, n.type = t.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = t.flags & 1206910976, n.childLanes = t.childLanes, n.lanes = t.lanes, n.child = t.child, n.memoizedProps = t.memoizedProps, n.memoizedState = t.memoizedState, n.updateQueue = t.updateQueue, e = t.dependencies, n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }, n.sibling = t.sibling, n.index = t.index, n.ref = t.ref, n.refCleanup = t.refCleanup, n;
  }
  function Fm(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function To(t, e, n, a, r, u) {
    var h = 0;
    if (a = t, typeof a == "function") Xu(a) && (h = 1);
    else if (typeof a == "string")
      h = cE(
        t,
        n,
        Pt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case yt:
          return t = Le(31, n, e, r), t.elementType = yt, t.lanes = u, t;
        case J:
          return Ji(n.children, r, u, e);
        case Q:
          h = 8, r |= 24;
          break;
        case tt:
          return t = Le(12, n, e, r | 2), t.elementType = tt, t.lanes = u, t;
        case P:
          return t = Le(13, n, e, r), t.elementType = P, t.lanes = u, t;
        case et:
          return t = Le(19, n, e, r), t.elementType = et, t.lanes = u, t;
        case bt:
        case x:
          return t = r | 32, t = Le(30, n, e, t), t.elementType = x, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case $:
                h = 10;
                break t;
              case W:
                h = 9;
                break t;
              case G:
                h = 11;
                break t;
              case st:
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
    return e = Le(h, n, e, r), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Ji(t, e, n, a) {
    return t = Le(7, t, a, e), t.lanes = n, t;
  }
  function Qu(t, e, n) {
    return t = Le(6, t, null, e), t.lanes = n, t;
  }
  function Jm(t) {
    var e = Le(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Zu(t, e, n) {
    return e = Le(
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
  var Im = /* @__PURE__ */ new WeakMap();
  function ln(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Im.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Yi(e)
      }, Im.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Yi(e)
    };
  }
  var Ya = [], qa = 0, xo = null, Fl = 0, sn = [], on = 0, fi = null, Mn = 1, Dn = "";
  function Pn(t, e) {
    Ya[qa++] = Fl, Ya[qa++] = xo, xo = t, Fl = e;
  }
  function Wm(t, e, n) {
    sn[on++] = Mn, sn[on++] = Dn, sn[on++] = fi, fi = t;
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
  function Eo(t) {
    t.return !== null && (Pn(t, 1), Wm(t, 1, 0));
  }
  function Ku(t) {
    for (; t === xo; )
      xo = Ya[--qa], Ya[qa] = null, Fl = Ya[--qa], Ya[qa] = null;
    for (; t === fi; )
      fi = sn[--on], sn[on] = null, Dn = sn[--on], sn[on] = null, Mn = sn[--on], sn[on] = null;
  }
  function $m(t, e) {
    sn[on++] = Mn, sn[on++] = Dn, sn[on++] = fi, Mn = e.id, Dn = e.overflow, fi = t;
  }
  var pe = null, Ft = null, Dt = !1, di = null, rn = !1, Pu = Error(o(519));
  function hi(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Jl(ln(e, t)), Pu;
  }
  function tp(t) {
    var e = t.stateNode, n = t.type, a = t.memoizedProps;
    switch (e[ve] = t, e[je] = a, n) {
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
        Rt("invalid", e), dm(
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
        Rt("invalid", e), mm(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Ty(e.textContent, n) ? (a.popover != null && (Rt("beforetoggle", e), Rt("toggle", e)), a.onScroll != null && Rt("scroll", e), a.onScrollEnd != null && Rt("scrollend", e), a.onClick != null && (e.onclick = Cn), e = !0) : e = !1, e || hi(t, !0);
  }
  function Ao(t) {
    for (pe = t.return; pe; )
      switch (pe.tag) {
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
          pe = pe.return;
      }
  }
  function Xa(t) {
    if (t !== pe) return !1;
    if (!Dt) return Ao(t), Dt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || wf(t.type, t.memoizedProps)), n = !n), n && Ft && hi(t), Ao(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Ft = ky(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Ft = ky(t);
    } else
      e === 27 ? (e = Ft, zi(t.type) ? (t = Vf, Vf = null, Ft = t) : Ft = e) : Ft = pe ? cn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ii() {
    Ft = pe = null, Dt = !1;
  }
  function Fu() {
    var t = di;
    return t !== null && (He === null ? He = t : He.push.apply(
      He,
      t
    ), di = null), t;
  }
  function Jl(t) {
    di === null ? di = [t] : di.push(t);
  }
  var Ju = Xt(null), Wi = null, Fn = null;
  function mi(t, e, n) {
    Ot(Ju, e._currentValue), e._currentValue = n;
  }
  function Jn(t) {
    t._currentValue = Ju.current, Ut(Ju);
  }
  function wo(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function Iu(t, e, n, a) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var u = r.dependencies;
      if (u !== null) {
        var h = r.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var b = u;
          u = r;
          for (var E = 0; E < e.length; E++)
            if (b.context === e[E]) {
              u.lanes |= n, b = u.alternate, b !== null && (b.lanes |= n), wo(
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
        h.lanes |= n, u = h.alternate, u !== null && (u.lanes |= n), wo(h, n, t), h = null;
      } else
        r.tag === 13 && r.memoizedState !== null && r.memoizedState.dehydrated === null ? (r.lanes |= n, h = r.alternate, h !== null && (h.lanes |= n), wo(
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
  function $i(t, e, n, a) {
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
      } else if (r === si.current) {
        if (h = r.alternate, h === null) throw Error(o(387));
        h.memoizedState.memoizedState !== r.memoizedState.memoizedState && (t !== null ? t.push(pl) : t = [pl]);
      }
      r = r.return;
    }
    return t !== null && Iu(
      e,
      t,
      n,
      a
    ), e.flags |= 262144, t !== null;
  }
  function Co(t) {
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
  function ta(t) {
    Wi = t, Fn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function be(t) {
    return ep(Wi, t);
  }
  function Mo(t, e) {
    return Wi === null && ta(t), ep(t, e);
  }
  function ep(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Fn === null) {
      if (t === null) throw Error(o(308));
      Fn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Fn = Fn.next = e;
    return n;
  }
  var BT = typeof AbortController < "u" ? AbortController : function() {
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
  }, UT = i.unstable_scheduleCallback, HT = i.unstable_NormalPriority, le = {
    $$typeof: $,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Wu() {
    return {
      controller: new BT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Il(t) {
    t.refCount--, t.refCount === 0 && UT(HT, function() {
      t.controller.abort();
    });
  }
  function np(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var Wl = null;
  function kT(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var $l = null, $u = 0, ea = 0, Qa = null;
  function GT(t, e) {
    if ($l === null) {
      var n = $l = [];
      $u = 0, ea = gf(), Qa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return $u++, e.then(ip, ip), e;
  }
  function ip() {
    if (--$u === 0 && (Wl = null, $l !== null)) {
      Qa !== null && (Qa.status = "fulfilled");
      var t = $l;
      $l = null, ea = 0, Qa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function YT(t, e) {
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
  var ap = ot.S;
  ot.S = function(t, e) {
    if (Jg = Me(), typeof e == "object" && e !== null && typeof e.then == "function" && GT(t, e), Wl !== null)
      for (var n = ul; n !== null; )
        np(n, Wl), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = ul; a !== null; )
        np(a, n), a = a.next;
      if (ea !== 0) {
        a = Wl, a === null && (a = Wl = []);
        for (var r = 0; r < n.length; r++) {
          var u = n[r];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    ap !== null && ap(t, e);
  };
  var na = Xt(null);
  function tc() {
    var t = na.current;
    return t !== null ? t : Kt.pooledCache;
  }
  function Do(t, e) {
    e === null ? Ot(na, na.current) : Ot(na, e.pool);
  }
  function lp() {
    var t = tc();
    return t === null ? null : { parent: le._currentValue, pool: t };
  }
  var Za = Error(o(460)), ec = Error(o(474)), zo = Error(o(542)), Oo = { then: function() {
  } };
  function sp(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function op(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Cn, Cn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, up(t), t === void 0 && !("reason" in e) ? Error(o(600)) : t;
      default:
        if (typeof e.status == "string") e.then(Cn, Cn);
        else {
          if (t = Kt, t !== null && 100 < t.shellSuspendCounter)
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
            throw t = e.reason, up(t), t;
        }
        throw aa = e, Za;
    }
  }
  function ia(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (aa = n, Za) : n;
    }
  }
  var aa = null;
  function rp() {
    if (aa === null) throw Error(o(459));
    var t = aa;
    return aa = null, t;
  }
  function up(t) {
    if (t === Za || t === zo)
      throw Error(o(483));
  }
  var Ka = null, ts = 0;
  function No(t) {
    var e = ts;
    return ts += 1, Ka === null && (Ka = []), op(Ka, t, e);
  }
  function pi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function Ro(t, e) {
    throw e.$$typeof === N ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function cp(t) {
    function e(_, D) {
      if (t) {
        var L = _.deletions;
        L === null ? (_.deletions = [D], _.flags |= 16) : L.push(D);
      }
    }
    function n(_, D) {
      if (!t) return null;
      for (; D !== null; )
        e(_, D), D = D.sibling;
      return null;
    }
    function a(_) {
      for (var D = /* @__PURE__ */ new Map(); _ !== null; )
        _.key === null ? D.set(_.index, _) : D.set(_.key, _), _ = _.sibling;
      return D;
    }
    function r(_, D) {
      return _ = Kn(_, D), _.index = 0, _.sibling = null, _;
    }
    function u(_, D, L) {
      return _.index = L, t ? (L = _.alternate, L !== null ? (L = L.index, L < D ? (_.flags |= 2, D) : L) : (_.flags |= 134217730, D)) : (_.flags |= 1048576, D);
    }
    function h(_) {
      return t && _.alternate === null && (_.flags |= 134217730), _;
    }
    function b(_, D, L, K) {
      return D === null || D.tag !== 6 ? (D = Qu(L, _.mode, K), D.return = _, D) : (D = r(D, L), D.return = _, D);
    }
    function E(_, D, L, K) {
      var dt = L.type;
      return dt === J ? (_ = k(
        _,
        D,
        L.props.children,
        K,
        L.key
      ), pi(_, L), _) : D !== null && (D.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Y && ia(dt) === D.type) ? (D = r(D, L.props), pi(D, L), D.return = _, D) : (D = To(
        L.type,
        L.key,
        L.props,
        null,
        _.mode,
        K
      ), pi(D, L), D.return = _, D);
    }
    function V(_, D, L, K) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== L.containerInfo || D.stateNode.implementation !== L.implementation ? (D = Zu(L, _.mode, K), D.return = _, D) : (D = r(D, L.children || []), D.return = _, D);
    }
    function k(_, D, L, K, dt) {
      return D === null || D.tag !== 7 ? (D = Ji(
        L,
        _.mode,
        K,
        dt
      ), D.return = _, D) : (D = r(D, L), D.return = _, D);
    }
    function F(_, D, L) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = Qu(
          "" + D,
          _.mode,
          L
        ), D.return = _, D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case Z:
            return L = To(
              D.type,
              D.key,
              D.props,
              null,
              _.mode,
              L
            ), pi(L, D), L.return = _, L;
          case lt:
            return D = Zu(
              D,
              _.mode,
              L
            ), D.return = _, D;
          case Y:
            return D = ia(D), F(_, D, L);
        }
        if (Tt(D) || at(D))
          return D = Ji(
            D,
            _.mode,
            L,
            null
          ), D.return = _, D;
        if (typeof D.then == "function")
          return F(_, No(D), L);
        if (D.$$typeof === $)
          return F(
            _,
            Mo(_, D),
            L
          );
        Ro(_, D);
      }
      return null;
    }
    function R(_, D, L, K) {
      var dt = D !== null ? D.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return dt !== null ? null : b(_, D, "" + L, K);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Z:
            return L.key === dt ? E(_, D, L, K) : null;
          case lt:
            return L.key === dt ? V(_, D, L, K) : null;
          case Y:
            return L = ia(L), R(_, D, L, K);
        }
        if (Tt(L) || at(L))
          return dt !== null ? null : k(_, D, L, K, null);
        if (typeof L.then == "function")
          return R(
            _,
            D,
            No(L),
            K
          );
        if (L.$$typeof === $)
          return R(
            _,
            D,
            Mo(_, L),
            K
          );
        Ro(_, L);
      }
      return null;
    }
    function U(_, D, L, K, dt) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return _ = _.get(L) || null, b(D, _, "" + K, dt);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case Z:
            return _ = _.get(
              K.key === null ? L : K.key
            ) || null, E(D, _, K, dt);
          case lt:
            return _ = _.get(
              K.key === null ? L : K.key
            ) || null, V(D, _, K, dt);
          case Y:
            return K = ia(K), U(
              _,
              D,
              L,
              K,
              dt
            );
        }
        if (Tt(K) || at(K))
          return _ = _.get(L) || null, k(D, _, K, dt, null);
        if (typeof K.then == "function")
          return U(
            _,
            D,
            L,
            No(K),
            dt
          );
        if (K.$$typeof === $)
          return U(
            _,
            D,
            L,
            Mo(D, K),
            dt
          );
        Ro(D, K);
      }
      return null;
    }
    function ct(_, D, L, K) {
      for (var dt = null, Vt = null, St = D, xt = D = 0, re = null; St !== null && xt < L.length; xt++) {
        St.index > xt ? (re = St, St = null) : re = St.sibling;
        var jt = R(
          _,
          St,
          L[xt],
          K
        );
        if (jt === null) {
          St === null && (St = re);
          break;
        }
        t && St && jt.alternate === null && e(_, St), D = u(jt, D, xt), Vt === null ? dt = jt : Vt.sibling = jt, Vt = jt, St = re;
      }
      if (xt === L.length)
        return n(_, St), Dt && Pn(_, xt), dt;
      if (St === null) {
        for (; xt < L.length; xt++)
          St = F(_, L[xt], K), St !== null && (D = u(
            St,
            D,
            xt
          ), Vt === null ? dt = St : Vt.sibling = St, Vt = St);
        return Dt && Pn(_, xt), dt;
      }
      for (St = a(St); xt < L.length; xt++)
        re = U(
          St,
          _,
          xt,
          L[xt],
          K
        ), re !== null && (t && (jt = re.alternate, jt !== null && St.delete(jt.key === null ? xt : jt.key)), D = u(
          re,
          D,
          xt
        ), Vt === null ? dt = re : Vt.sibling = re, Vt = re);
      return t && St.forEach(function(Vi) {
        return e(_, Vi);
      }), Dt && Pn(_, xt), dt;
    }
    function pt(_, D, L, K) {
      if (L == null) throw Error(o(151));
      for (var dt = null, Vt = null, St = D, xt = D = 0, re = null, jt = L.next(); St !== null && !jt.done; xt++, jt = L.next()) {
        St.index > xt ? (re = St, St = null) : re = St.sibling;
        var Vi = R(_, St, jt.value, K);
        if (Vi === null) {
          St === null && (St = re);
          break;
        }
        t && St && Vi.alternate === null && e(_, St), D = u(Vi, D, xt), Vt === null ? dt = Vi : Vt.sibling = Vi, Vt = Vi, St = re;
      }
      if (jt.done)
        return n(_, St), Dt && Pn(_, xt), dt;
      if (St === null) {
        for (; !jt.done; xt++, jt = L.next())
          jt = F(_, jt.value, K), jt !== null && (D = u(jt, D, xt), Vt === null ? dt = jt : Vt.sibling = jt, Vt = jt);
        return Dt && Pn(_, xt), dt;
      }
      for (St = a(St); !jt.done; xt++, jt = L.next())
        jt = U(St, _, xt, jt.value, K), jt !== null && (t && (re = jt.alternate, re !== null && St.delete(
          re.key === null ? xt : re.key
        )), D = u(jt, D, xt), Vt === null ? dt = jt : Vt.sibling = jt, Vt = jt);
      return t && St.forEach(function(xE) {
        return e(_, xE);
      }), Dt && Pn(_, xt), dt;
    }
    function Ct(_, D, L, K) {
      if (typeof L == "object" && L !== null && L.type === J && L.key === null && L.props.ref === void 0 && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case Z:
            t: {
              for (var dt = L.key; D !== null; ) {
                if (D.key === dt) {
                  if (dt = L.type, dt === J) {
                    if (D.tag === 7) {
                      n(
                        _,
                        D.sibling
                      ), K = r(
                        D,
                        L.props.children
                      ), pi(K, L), K.return = _, _ = K;
                      break t;
                    }
                  } else if (D.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Y && ia(dt) === D.type) {
                    n(
                      _,
                      D.sibling
                    ), K = r(D, L.props), pi(K, L), K.return = _, _ = K;
                    break t;
                  }
                  n(_, D);
                  break;
                } else e(_, D);
                D = D.sibling;
              }
              L.type === J ? (K = Ji(
                L.props.children,
                _.mode,
                K,
                L.key
              ), pi(K, L), K.return = _, _ = K) : (K = To(
                L.type,
                L.key,
                L.props,
                null,
                _.mode,
                K
              ), pi(K, L), K.return = _, _ = K);
            }
            return h(_);
          case lt:
            t: {
              for (dt = L.key; D !== null; ) {
                if (D.key === dt)
                  if (D.tag === 4 && D.stateNode.containerInfo === L.containerInfo && D.stateNode.implementation === L.implementation) {
                    n(
                      _,
                      D.sibling
                    ), K = r(D, L.children || []), K.return = _, _ = K;
                    break t;
                  } else {
                    n(_, D);
                    break;
                  }
                else e(_, D);
                D = D.sibling;
              }
              K = Zu(L, _.mode, K), K.return = _, _ = K;
            }
            return h(_);
          case Y:
            return L = ia(L), Ct(
              _,
              D,
              L,
              K
            );
        }
        if (Tt(L))
          return ct(
            _,
            D,
            L,
            K
          );
        if (at(L)) {
          if (dt = at(L), typeof dt != "function") throw Error(o(150));
          return L = dt.call(L), pt(
            _,
            D,
            L,
            K
          );
        }
        if (typeof L.then == "function")
          return Ct(
            _,
            D,
            No(L),
            K
          );
        if (L.$$typeof === $)
          return Ct(
            _,
            D,
            Mo(_, L),
            K
          );
        Ro(_, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, D !== null && D.tag === 6 ? (n(_, D.sibling), K = r(D, L), K.return = _, _ = K) : (n(_, D), K = Qu(L, _.mode, K), K.return = _, _ = K), h(_)) : n(_, D);
    }
    return function(_, D, L, K) {
      try {
        ts = 0;
        var dt = Ct(
          _,
          D,
          L,
          K
        );
        return Ka = null, dt;
      } catch (St) {
        if (St === Za || St === zo) throw St;
        var Vt = Le(29, St, null, _.mode);
        return Vt.lanes = K, Vt.return = _, Vt;
      }
    };
  }
  var la = cp(!0), fp = cp(!1), gi = !1;
  function nc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ic(t, e) {
    t = t.updateQueue, e.updateQueue === t && (e.updateQueue = {
      baseState: t.baseState,
      firstBaseUpdate: t.firstBaseUpdate,
      lastBaseUpdate: t.lastBaseUpdate,
      shared: t.shared,
      callbacks: null
    });
  }
  function yi(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function vi(t, e, n) {
    var a = t.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Bt & 2) !== 0) {
      var r = a.pending;
      return r === null ? e.next = e : (e.next = r.next, r.next = e), a.pending = e, e = So(t), Pm(t, null, n), e;
    }
    return bo(t, a, e, n), So(t);
  }
  function es(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Wh(t, n);
    }
  }
  function ac(t, e) {
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
  var lc = !1;
  function ns() {
    if (lc) {
      var t = Qa;
      if (t !== null) throw t;
    }
  }
  function is(t, e, n, a) {
    lc = !1;
    var r = t.updateQueue;
    gi = !1;
    var u = r.firstBaseUpdate, h = r.lastBaseUpdate, b = r.shared.pending;
    if (b !== null) {
      r.shared.pending = null;
      var E = b, V = E.next;
      E.next = null, h === null ? u = V : h.next = V, h = E;
      var k = t.alternate;
      k !== null && (k = k.updateQueue, b = k.lastBaseUpdate, b !== h && (b === null ? k.firstBaseUpdate = V : b.next = V, k.lastBaseUpdate = E));
    }
    if (u !== null) {
      var F = r.baseState;
      h = 0, k = V = E = null, b = u;
      do {
        var R = b.lane & -536870913, U = R !== b.lane;
        if (U ? (_t & R) === R : (a & R) === R) {
          R !== 0 && R === ea && (lc = !0), k !== null && (k = k.next = {
            lane: 0,
            tag: b.tag,
            payload: b.payload,
            callback: null,
            next: null
          });
          t: {
            var ct = t, pt = b;
            R = e;
            var Ct = n;
            switch (pt.tag) {
              case 1:
                if (ct = pt.payload, typeof ct == "function") {
                  F = ct.call(Ct, F, R);
                  break t;
                }
                F = ct;
                break t;
              case 3:
                ct.flags = ct.flags & -65537 | 128;
              case 0:
                if (ct = pt.payload, R = typeof ct == "function" ? ct.call(Ct, F, R) : ct, R == null) break t;
                F = j({}, F, R);
                break t;
              case 2:
                gi = !0;
            }
          }
          R = b.callback, R !== null && (t.flags |= 64, U && (t.flags |= 8192), U = r.callbacks, U === null ? r.callbacks = [R] : U.push(R));
        } else
          U = {
            lane: R,
            tag: b.tag,
            payload: b.payload,
            callback: b.callback,
            next: null
          }, k === null ? (V = k = U, E = F) : k = k.next = U, h |= R;
        if (b = b.next, b === null) {
          if (b = r.shared.pending, b === null)
            break;
          U = b, b = U.next, U.next = null, r.lastBaseUpdate = U, r.shared.pending = null;
        }
      } while (!0);
      k === null && (E = F), r.baseState = E, r.firstBaseUpdate = V, r.lastBaseUpdate = k, u === null && (r.shared.lanes = 0), wi |= h, t.lanes = h, t.memoizedState = F;
    }
  }
  function dp(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function hp(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        dp(n[t], e);
  }
  var bi = Xt(null), _o = Xt(0);
  function mp(t, e) {
    t = ei, Ot(_o, t), Ot(bi, e), ei = t | e.baseLanes;
  }
  function sc() {
    Ot(_o, ei), Ot(bi, bi.current);
  }
  function oc() {
    ei = _o.current, Ut(bi), Ut(_o);
  }
  var Se = Xt(null), De = null;
  function Si(t) {
    var e = t.alternate;
    Ot(Te, Te.current & 1), Ot(Se, t), De === null && (e === null || bi.current !== null || e.memoizedState !== null) && (De = t);
  }
  function rc(t) {
    Ot(Te, Te.current), Ot(Se, t), De === null && (De = t);
  }
  function pp(t) {
    t.tag === 22 ? (Ot(Te, Te.current), Ot(Se, t), De === null && (De = t)) : Ti();
  }
  function Ti() {
    Ot(Te, Te.current), Ot(Se, Se.current);
  }
  function Ze(t) {
    Ut(Se), De === t && (De = null), Ut(Te);
  }
  var Te = Xt(0);
  function as(t, e) {
    Ot(Se, Se.current), Ot(Te, e);
  }
  function uc(t) {
    Ut(Te), Ut(Se), De === t && (De = null);
  }
  function Vo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || Rf(n) || _f(n)))
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
  var In = 0, wt = null, Qt = null, se = null, jo = !1, Pa = !1, sa = !1, Lo = 0, ls = 0, Fa = null, qT = 0;
  function ne() {
    throw Error(o(321));
  }
  function cc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Qe(t[n], e[n])) return !1;
    return !0;
  }
  function fc(t, e, n, a, r, u) {
    return In = u, wt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, ot.H = t === null || t.memoizedState === null ? Wp : $p, sa = !1, u = n(a, r), sa = !1, Pa && (u = yp(
      e,
      n,
      a,
      r
    )), gp(t), u;
  }
  function gp(t) {
    ot.H = qo;
    var e = Qt !== null && Qt.next !== null;
    if (In = 0, se = Qt = wt = null, jo = !1, ls = 0, Fa = null, e) throw Error(o(300));
    t === null || oe || (t = t.dependencies, t !== null && Co(t) && (oe = !0));
  }
  function yp(t, e, n, a) {
    wt = t;
    var r = 0;
    do {
      if (Pa && (Fa = null), ls = 0, Pa = !1, 25 <= r) throw Error(o(301));
      if (r += 1, se = Qt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      ot.H = IT, u = e(n, a);
    } while (Pa);
    return u;
  }
  function XT() {
    var t = ot.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? ss(e) : e, t = t.useState()[0], (Qt !== null ? Qt.memoizedState : null) !== t && (wt.flags |= 1024), e;
  }
  function dc() {
    var t = Lo !== 0;
    return Lo = 0, t;
  }
  function hc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function mc(t) {
    if (jo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      jo = !1;
    }
    In = 0, se = Qt = wt = null, Pa = !1, ls = Lo = 0, Fa = null;
  }
  function Oe() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return se === null ? wt.memoizedState = se = t : se = se.next = t, se;
  }
  function ae() {
    if (Qt === null) {
      var t = wt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Qt.next;
    var e = se === null ? wt.memoizedState : se.next;
    if (e !== null)
      se = e, Qt = t;
    else {
      if (t === null)
        throw wt.alternate === null ? Error(o(467)) : Error(o(310));
      Qt = t, t = {
        memoizedState: Qt.memoizedState,
        baseState: Qt.baseState,
        baseQueue: Qt.baseQueue,
        queue: Qt.queue,
        next: null
      }, se === null ? wt.memoizedState = se = t : se = se.next = t;
    }
    return se;
  }
  function Bo() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ss(t) {
    var e = ls;
    return ls += 1, Fa === null && (Fa = []), t = op(Fa, t, e), e = wt, (se === null ? e.memoizedState : se.next) === null && (e = e.alternate, ot.H = e === null || e.memoizedState === null ? Wp : $p), t;
  }
  function Uo(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return ss(t);
      if (t.$$typeof === H) return;
      if (t.$$typeof === $) return be(t);
    }
    throw Error(o(438, String(t)));
  }
  function pc(t) {
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
    if (e == null && (e = { data: [], index: 0 }), n === null && (n = Bo(), wt.updateQueue = n), n.memoCache = e, n = e.data[e.index], n === void 0)
      for (n = e.data[e.index] = Array(t), a = 0; a < t; a++)
        n[a] = nt;
    return e.index++, n;
  }
  function Wn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Ho(t) {
    var e = ae();
    return gc(e, Qt, t);
  }
  function gc(t, e, n) {
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
      var b = h = null, E = null, V = e, k = !1;
      do {
        var F = V.lane & -536870913;
        if (F !== V.lane ? (_t & F) === F : (In & F) === F) {
          var R = V.revertLane;
          if (R === 0)
            E !== null && (E = E.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            }), F === ea && (k = !0);
          else if ((In & R) === R) {
            V = V.next, R === ea && (k = !0);
            continue;
          } else
            F = {
              lane: 0,
              revertLane: V.revertLane,
              gesture: null,
              action: V.action,
              hasEagerState: V.hasEagerState,
              eagerState: V.eagerState,
              next: null
            }, E === null ? (b = E = F, h = u) : E = E.next = F, wt.lanes |= R, wi |= R;
          F = V.action, sa && n(u, F), u = V.hasEagerState ? V.eagerState : n(u, F);
        } else
          R = {
            lane: F,
            revertLane: V.revertLane,
            gesture: V.gesture,
            action: V.action,
            hasEagerState: V.hasEagerState,
            eagerState: V.eagerState,
            next: null
          }, E === null ? (b = E = R, h = u) : E = E.next = R, wt.lanes |= F, wi |= F;
        V = V.next;
      } while (V !== null && V !== e);
      if (E === null ? h = u : E.next = b, !Qe(u, t.memoizedState) && (oe = !0, k && (n = Qa, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = h, t.baseQueue = E, a.lastRenderedState = u;
    }
    return r === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function yc(t) {
    var e = ae(), n = e.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = t;
    var a = n.dispatch, r = n.pending, u = e.memoizedState;
    if (r !== null) {
      n.pending = null;
      var h = r = r.next;
      do
        u = t(u, h.action), h = h.next;
      while (h !== r);
      Qe(u, e.memoizedState) || (oe = !0), e.memoizedState = u, e.baseQueue === null && (e.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function vp(t, e, n) {
    var a = wt, r = ae(), u = Dt;
    if (u) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var h = !Qe(
      (Qt || r).memoizedState,
      n
    );
    if (h && (r.memoizedState = n, oe = !0), r = r.queue, Sc(Tp.bind(null, a, r, t), [
      t
    ]), t = r.getSnapshot !== e || h || se !== null && (se.memoizedState.tag & 1) !== 0, Ja(
      t ? 9 : 8,
      { destroy: void 0 },
      Sp.bind(null, a, r, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Kt === null) throw Error(o(349));
      u || (In & 127) !== 0 || bp(a, e, n);
    }
    return n;
  }
  function bp(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = wt.updateQueue, e === null ? (e = Bo(), wt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Sp(t, e, n, a) {
    e.value = n, e.getSnapshot = a, xp(e) && Ep(t);
  }
  function Tp(t, e, n) {
    return n(function() {
      xp(e) && Ep(t);
    });
  }
  function xp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Qe(t, n);
    } catch {
      return !0;
    }
  }
  function Ep(t) {
    var e = Fi(t, 2);
    e !== null && ke(e, t, 2);
  }
  function vc(t) {
    var e = Oe();
    if (typeof t == "function") {
      var n = t;
      if (t = n(), sa) {
        ri(!0);
        try {
          n();
        } finally {
          ri(!1);
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
  function Ap(t, e, n, a) {
    return t.baseState = n, gc(
      t,
      Qt,
      typeof a == "function" ? a : Wn
    );
  }
  function QT(t, e, n, a, r) {
    if (Yo(t)) throw Error(o(485));
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
      ot.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, wp(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function wp(t, e) {
    var n = e.action, a = e.payload, r = t.state;
    if (e.isTransition) {
      var u = ot.T, h = {};
      h.types = u !== null ? u.types : null, ot.T = h;
      try {
        var b = n(r, a), E = ot.S;
        E !== null && E(h, b), Cp(t, e, b);
      } catch (V) {
        bc(t, e, V);
      } finally {
        u !== null && h.types !== null && (u.types = h.types), ot.T = u;
      }
    } else
      try {
        u = n(r, a), Cp(t, e, u);
      } catch (V) {
        bc(t, e, V);
      }
  }
  function Cp(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Mp(t, e, a);
      },
      function(a) {
        return bc(t, e, a);
      }
    ) : Mp(t, e, n);
  }
  function Mp(t, e, n) {
    e.status = "fulfilled", e.value = n, Dp(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, wp(t, n)));
  }
  function bc(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Dp(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Dp(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function zp(t, e) {
    return e;
  }
  function Op(t, e) {
    if (Dt) {
      var n = Kt.formState;
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
            hi(a);
          }
          a = !1;
        }
        a && (e = n[0]);
      }
    }
    return n = Oe(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zp,
      lastRenderedState: e
    }, n.queue = a, n = Fp.bind(
      null,
      wt,
      a
    ), a.dispatch = n, a = vc(!1), u = wc.bind(
      null,
      wt,
      !1,
      a.queue
    ), a = Oe(), r = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = r, n = QT.bind(
      null,
      wt,
      r,
      u,
      n
    ), r.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function Np(t) {
    var e = ae();
    return Rp(e, Qt, t);
  }
  function Rp(t, e, n) {
    if (e = gc(
      t,
      e,
      zp
    )[0], t = Ho(Wn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = ss(e);
      } catch (h) {
        throw h === Za ? zo : h;
      }
    else a = e;
    e = ae();
    var r = e.queue, u = r.dispatch;
    return n !== e.memoizedState && (wt.flags |= 2048, Ja(
      9,
      { destroy: void 0 },
      ZT.bind(null, r, n),
      null
    )), [a, u, t];
  }
  function ZT(t, e) {
    t.action = e;
  }
  function _p(t) {
    var e = ae(), n = Qt;
    if (n !== null)
      return Rp(e, n, t);
    ae(), e = e.memoizedState, n = ae();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ja(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = wt.updateQueue, e === null && (e = Bo(), wt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Vp() {
    return ae().memoizedState;
  }
  function ko(t, e, n, a) {
    var r = Oe();
    wt.flags |= t, r.memoizedState = Ja(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Go(t, e, n, a) {
    var r = ae();
    a = a === void 0 ? null : a;
    var u = r.memoizedState.inst;
    Qt !== null && a !== null && cc(a, Qt.memoizedState.deps) ? r.memoizedState = Ja(e, u, n, a) : (wt.flags |= t, r.memoizedState = Ja(
      1 | e,
      u,
      n,
      a
    ));
  }
  function jp(t, e) {
    ko(8390656, 8, t, e);
  }
  function Sc(t, e) {
    Go(2048, 8, t, e);
  }
  function KT(t) {
    wt.flags |= 4;
    var e = wt.updateQueue;
    if (e === null)
      e = Bo(), wt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Lp(t) {
    var e = ae().memoizedState;
    return KT({ ref: e, nextImpl: t }), function() {
      if ((Bt & 2) !== 0) throw Error(o(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Bp(t, e) {
    return Go(4, 2, t, e);
  }
  function Up(t, e) {
    return Go(4, 4, t, e);
  }
  function Hp(t, e) {
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
    n = n != null ? n.concat([t]) : null, Go(4, 4, Hp.bind(null, e, t), n);
  }
  function Tc() {
  }
  function Gp(t, e) {
    var n = ae();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && cc(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Yp(t, e) {
    var n = ae();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && cc(e, a[1]))
      return a[0];
    if (a = t(), sa) {
      ri(!0);
      try {
        t();
      } finally {
        ri(!1);
      }
    }
    return n.memoizedState = [a, e], a;
  }
  function xc(t, e, n) {
    return n === void 0 || (In & 1073741824) !== 0 && (_t & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = Wg(), wt.lanes |= t, wi |= t, n);
  }
  function qp(t, e, n, a) {
    return Qe(n, e) ? n : bi.current !== null ? (t = xc(t, n, a), Qe(t, e) || (oe = !0), t) : (In & 106) === 0 || (In & 1073741824) !== 0 && (_t & 261930) === 0 ? (oe = !0, t.memoizedState = n) : (t = Wg(), wt.lanes |= t, wi |= t, e);
  }
  function Xp(t, e, n, a, r) {
    var u = I.p;
    I.p = u !== 0 && 8 > u ? u : 8;
    var h = ot.T, b = {};
    b.types = h !== null ? h.types : null, ot.T = b, wc(t, !1, e, n);
    try {
      var E = r(), V = ot.S;
      if (V !== null && V(b, E), E !== null && typeof E == "object" && typeof E.then == "function") {
        var k = YT(
          E,
          a
        );
        os(
          t,
          e,
          k,
          Je(t)
        );
      } else
        os(
          t,
          e,
          a,
          Je(t)
        );
    } catch (F) {
      os(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: F },
        Je()
      );
    } finally {
      I.p = u, h !== null && b.types !== null && (h.types = b.types), ot.T = h;
    }
  }
  function PT() {
  }
  function Ec(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var r = Qp(t).queue;
    Xp(
      t,
      r,
      e,
      Et,
      n === null ? PT : function() {
        return Zp(t), n(a);
      }
    );
  }
  function Qp(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: Et,
      baseState: Et,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Wn,
        lastRenderedState: Et
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
  function Zp(t) {
    var e = Qp(t);
    e.next === null && (e = t.alternate.memoizedState), os(
      t,
      e.next.queue,
      {},
      Je()
    );
  }
  function Ac() {
    return be(pl);
  }
  function Kp() {
    return ae().memoizedState;
  }
  function Pp() {
    return ae().memoizedState;
  }
  function FT(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Je();
          t = yi(n);
          var a = vi(e, t, n);
          a !== null && (ke(a, e, n), es(a, e, n)), e = { cache: Wu() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function JT(t, e, n) {
    var a = Je();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yo(t) ? Jp(e, n) : (n = qu(t, e, n, a), n !== null && (ke(n, t, a), Ip(n, e, a)));
  }
  function Fp(t, e, n) {
    var a = Je();
    os(t, e, n, a);
  }
  function os(t, e, n, a) {
    var r = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Yo(t)) Jp(e, r);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var h = e.lastRenderedState, b = u(h, n);
          if (r.hasEagerState = !0, r.eagerState = b, Qe(b, h))
            return bo(t, e, r, 0), Kt === null && vo(), !1;
        } catch {
        }
      if (n = qu(t, e, r, a), n !== null)
        return ke(n, t, a), Ip(n, e, a), !0;
    }
    return !1;
  }
  function wc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: gf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Yo(t)) {
      if (e) throw Error(o(479));
    } else
      e = qu(
        t,
        n,
        a,
        2
      ), e !== null && ke(e, t, 2);
  }
  function Yo(t) {
    var e = t.alternate;
    return t === wt || e !== null && e === wt;
  }
  function Jp(t, e) {
    Pa = jo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function Ip(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, Wh(t, n);
    }
  }
  var qo = {
    readContext: be,
    use: Uo,
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
  }, Wp = {
    readContext: be,
    use: Uo,
    useCallback: function(t, e) {
      return Oe().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: be,
    useEffect: jp,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, ko(
        4194308,
        4,
        Hp.bind(null, e, t),
        n
      );
    },
    useLayoutEffect: function(t, e) {
      return ko(4194308, 4, t, e);
    },
    useInsertionEffect: function(t, e) {
      ko(4, 2, t, e);
    },
    useMemo: function(t, e) {
      var n = Oe();
      e = e === void 0 ? null : e;
      var a = t();
      if (sa) {
        ri(!0);
        try {
          t();
        } finally {
          ri(!1);
        }
      }
      return n.memoizedState = [a, e], a;
    },
    useReducer: function(t, e, n) {
      var a = Oe();
      if (n !== void 0) {
        var r = n(e);
        if (sa) {
          ri(!0);
          try {
            n(e);
          } finally {
            ri(!1);
          }
        }
      } else r = e;
      return a.memoizedState = a.baseState = r, t = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: t,
        lastRenderedState: r
      }, a.queue = t, t = t.dispatch = JT.bind(
        null,
        wt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = Oe();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = vc(t);
      var e = t.queue, n = Fp.bind(null, wt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Tc,
    useDeferredValue: function(t, e) {
      var n = Oe();
      return xc(n, t, e);
    },
    useTransition: function() {
      var t = vc(!1);
      return t = Xp.bind(
        null,
        wt,
        t.queue,
        !0,
        !1
      ), Oe().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = wt, r = Oe();
      if (Dt) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = e(), Kt === null)
          throw Error(o(349));
        (_t & 127) !== 0 || bp(a, e, n);
      }
      r.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return r.queue = u, jp(Tp.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ja(
        9,
        { destroy: void 0 },
        Sp.bind(
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
      var t = Oe(), e = Kt.identifierPrefix;
      if (Dt) {
        var n = Dn, a = Mn;
        n = (a & ~(1 << 32 - qe(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Lo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = qT++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Ac,
    useFormState: Op,
    useActionState: Op,
    useOptimistic: function(t) {
      var e = Oe();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = wc.bind(
        null,
        wt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: pc,
    useCacheRefresh: function() {
      return Oe().memoizedState = FT.bind(
        null,
        wt
      );
    },
    useEffectEvent: function(t) {
      var e = Oe(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Bt & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, $p = {
    readContext: be,
    use: Uo,
    useCallback: Gp,
    useContext: be,
    useEffect: Sc,
    useImperativeHandle: kp,
    useInsertionEffect: Bp,
    useLayoutEffect: Up,
    useMemo: Yp,
    useReducer: Ho,
    useRef: Vp,
    useState: function() {
      return Ho(Wn);
    },
    useDebugValue: Tc,
    useDeferredValue: function(t, e) {
      var n = ae();
      return qp(
        n,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Ho(Wn)[0], e = ae().memoizedState;
      return [
        typeof t == "boolean" ? t : ss(t),
        e
      ];
    },
    useSyncExternalStore: vp,
    useId: Kp,
    useHostTransitionStatus: Ac,
    useFormState: Np,
    useActionState: Np,
    useOptimistic: function(t, e) {
      var n = ae();
      return Ap(n, Qt, t, e);
    },
    useMemoCache: pc,
    useCacheRefresh: Pp,
    useEffectEvent: Lp
  }, IT = {
    readContext: be,
    use: Uo,
    useCallback: Gp,
    useContext: be,
    useEffect: Sc,
    useImperativeHandle: kp,
    useInsertionEffect: Bp,
    useLayoutEffect: Up,
    useMemo: Yp,
    useReducer: yc,
    useRef: Vp,
    useState: function() {
      return yc(Wn);
    },
    useDebugValue: Tc,
    useDeferredValue: function(t, e) {
      var n = ae();
      return Qt === null ? xc(n, t, e) : qp(
        n,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = yc(Wn)[0], e = ae().memoizedState;
      return [
        typeof t == "boolean" ? t : ss(t),
        e
      ];
    },
    useSyncExternalStore: vp,
    useId: Kp,
    useHostTransitionStatus: Ac,
    useFormState: _p,
    useActionState: _p,
    useOptimistic: function(t, e) {
      var n = ae();
      return Qt !== null ? Ap(n, Qt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: pc,
    useCacheRefresh: Pp,
    useEffectEvent: Lp
  };
  function Cc(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : j({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var Mc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Je(), r = yi(a);
      r.payload = e, n != null && (r.callback = n), e = vi(t, r, a), e !== null && (ke(e, t, a), es(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Je(), r = yi(a);
      r.tag = 1, r.payload = e, n != null && (r.callback = n), e = vi(t, r, a), e !== null && (ke(e, t, a), es(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Je(), a = yi(n);
      a.tag = 2, e != null && (a.callback = e), e = vi(t, a, n), e !== null && (ke(e, t, n), es(e, t, n));
    }
  };
  function tg(t, e, n, a, r, u, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, h) : e.prototype && e.prototype.isPureReactComponent ? !Kl(n, a) || !Kl(r, u) : !0;
  }
  function eg(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && Mc.enqueueReplaceState(e, e.state, null);
  }
  function oa(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var a in e)
        a !== "ref" && (n[a] = e[a]);
    }
    if (t = t.defaultProps) {
      n === e && (n = j({}, n));
      for (var r in t)
        n[r] === void 0 && (n[r] = t[r]);
    }
    return n;
  }
  function ng(t) {
    yo(t);
  }
  function ig(t) {
    console.error(t);
  }
  function ag(t) {
    yo(t);
  }
  function Xo(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function lg(t, e, n) {
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
  function Dc(t, e, n) {
    return n = yi(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Xo(t, e);
    }, n;
  }
  function sg(t) {
    return t = yi(t), t.tag = 3, t;
  }
  function og(t, e, n, a) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var u = a.value;
      t.payload = function() {
        return r(u);
      }, t.callback = function() {
        lg(e, n, a);
      };
    }
    var h = n.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
      lg(e, n, a), typeof r != "function" && (Ci === null ? Ci = /* @__PURE__ */ new Set([this]) : Ci.add(this));
      var b = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function WT(t, e, n, a, r) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (e = n.alternate, e !== null && $i(
        e,
        n,
        r,
        !0
      ), n = Se.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return De === null ? fr() : n.alternate === null && ie === 0 && (ie = 3), n.flags &= -257, n.flags |= 65536, n.lanes = r, a === Oo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), hf(t, a, r)), !1;
          case 22:
            return n.flags |= 65536, a === Oo ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), hf(t, a, r)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return hf(t, a, r), fr(), !1;
    }
    if (Dt)
      return e = Se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = r, a !== Pu && (t = Error(o(422), { cause: a }), Jl(ln(t, n)))) : (a !== Pu && (e = Error(o(423), {
        cause: a
      }), Jl(
        ln(e, n)
      )), t = t.current.alternate, t.flags |= 65536, r &= -r, t.lanes |= r, a = ln(a, n), r = Dc(
        t.stateNode,
        a,
        r
      ), ac(t, r), ie !== 4 && (ie = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = ln(u, n), ps === null ? ps = [u] : ps.push(u), ie !== 4 && (ie = 2), e === null) return !0;
    a = ln(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = r & -r, n.lanes |= t, t = Dc(n.stateNode, a, t), ac(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ci === null || !Ci.has(u))))
            return n.flags |= 65536, r &= -r, n.lanes |= r, r = sg(r), og(
              r,
              t,
              n,
              a
            ), ac(n, r), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var zc = Error(o(461)), oe = !1;
  function ce(t, e, n, a) {
    e.child = t === null ? fp(e, null, n, a) : la(
      e,
      t.child,
      n,
      a
    );
  }
  function rg(t, e, n, a, r) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var h = {};
      for (var b in a)
        b !== "ref" && (h[b] = a[b]);
    } else h = a;
    return ta(e), a = fc(
      t,
      e,
      n,
      h,
      u,
      r
    ), b = dc(), t !== null && !oe ? (hc(t, e, r), $n(t, e, r)) : (Dt && b && Eo(e), e.flags |= 1, ce(t, e, a, r), e.child);
  }
  function ug(t, e, n, a, r) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Xu(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, cg(
        t,
        e,
        u,
        a,
        r
      )) : (t = To(
        n.type,
        null,
        a,
        e,
        e.mode,
        r
      ), t.ref = e.ref, t.return = e, e.child = t);
    }
    if (u = t.child, !Bc(t, r)) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Kl, n(h, a) && t.ref === e.ref)
        return $n(t, e, r);
    }
    return e.flags |= 1, t = Kn(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function cg(t, e, n, a, r) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Kl(u, a) && t.ref === e.ref)
        if (oe = !1, e.pendingProps = a = u, Bc(t, r))
          (t.flags & 131072) !== 0 && (oe = !0);
        else
          return e.lanes = t.lanes, $n(t, e, r);
    }
    return Oc(
      t,
      e,
      n,
      a,
      r
    );
  }
  function fg(t, e, n, a) {
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
        return dg(
          t,
          e,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        e.memoizedState = { baseLanes: 0, cachePool: null }, t !== null && Do(
          e,
          u !== null ? u.cachePool : null
        ), u !== null ? mp(e, u) : sc(), pp(e);
      else
        return a = e.lanes = 536870912, dg(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (Do(e, u.cachePool), mp(e, u), Ti(), e.memoizedState = null) : (t !== null && Do(e, null), sc(), Ti());
    return ce(t, e, r, n), e.child;
  }
  function rs(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function dg(t, e, n, a, r) {
    var u = tc();
    return u = u === null ? null : { parent: le._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && Do(e, null), sc(), pp(e), t !== null && $i(t, e, a, !0), e.childLanes = r, null;
  }
  function Qo(t, e) {
    return e = Zo(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function hg(t, e, n) {
    return la(e, t.child, null, n), t = Qo(e, e.pendingProps), t.flags |= 2, Ze(e), e.memoizedState = null, t;
  }
  function $T(t, e, n) {
    var a = e.pendingProps, r = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Dt) {
        if (a.mode === "hidden")
          return t = Qo(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, rs(null, t);
        if (rc(e), (t = Ft) ? (t = Hy(
          t,
          rn
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: fi !== null ? { id: Mn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Jm(t), n.return = e, e.child = n, pe = e, Ft = null)) : t = null, t === null) throw hi(e);
        return e.lanes = 536870912, null;
      }
      return Qo(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var h = u.dehydrated;
      if (rc(e), r)
        if (e.flags & 256)
          e.flags &= -257, e = hg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(o(558));
      else if (oe || $i(t, e, n, !1), r = (n & t.childLanes) !== 0, oe || r) {
        if (bi.current === null) {
          if (a = Kt, a !== null && (h = $h(a, n), h !== 0 && h !== u.retryLane))
            throw u.retryLane = h, Fi(t, h), ke(a, t, h), zc;
          fr();
        }
        e = hg(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Ft = cn(h.nextSibling), pe = e, Dt = !0, di = null, rn = !1, t !== null && $m(e, t), e = Qo(e, a), e.flags |= 134221824;
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
  function Oc(t, e, n, a, r) {
    return ta(e), n = fc(
      t,
      e,
      n,
      a,
      void 0,
      r
    ), a = dc(), t !== null && !oe ? (hc(t, e, r), $n(t, e, r)) : (Dt && a && Eo(e), e.flags |= 1, ce(t, e, n, r), e.child);
  }
  function mg(t, e, n, a, r, u) {
    return ta(e), e.updateQueue = null, n = yp(
      e,
      a,
      n,
      r
    ), gp(t), a = dc(), t !== null && !oe ? (hc(t, e, u), $n(t, e, u)) : (Dt && a && Eo(e), e.flags |= 1, ce(t, e, n, u), e.child);
  }
  function pg(t, e, n, a, r) {
    if (ta(e), e.stateNode === null) {
      var u = Ga, h = n.contextType;
      typeof h == "object" && h !== null && (u = be(h)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Mc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, nc(e), h = n.contextType, u.context = typeof h == "object" && h !== null ? be(h) : Ga, u.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Cc(
        e,
        n,
        h,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), h !== u.state && Mc.enqueueReplaceState(u, u.state, null), is(e, a, u, r), ns(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var b = e.memoizedProps, E = oa(n, b);
      u.props = E;
      var V = u.context, k = n.contextType;
      h = Ga, typeof k == "object" && k !== null && (h = be(k));
      var F = n.getDerivedStateFromProps;
      k = typeof F == "function" || typeof u.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, k || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || V !== h) && eg(
        e,
        u,
        a,
        h
      ), gi = !1;
      var R = e.memoizedState;
      u.state = R, is(e, a, u, r), ns(), V = e.memoizedState, b || R !== V || gi ? (typeof F == "function" && (Cc(
        e,
        n,
        F,
        a
      ), V = e.memoizedState), (E = gi || tg(
        e,
        n,
        E,
        a,
        R,
        V,
        h
      )) ? (k || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = V), u.props = a, u.state = V, u.context = h, a = E) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, ic(t, e), h = e.memoizedProps, k = oa(n, h), u.props = k, F = e.pendingProps, R = u.context, V = n.contextType, E = Ga, typeof V == "object" && V !== null && (E = be(V)), b = n.getDerivedStateFromProps, (V = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== F || R !== E) && eg(
        e,
        u,
        a,
        E
      ), gi = !1, R = e.memoizedState, u.state = R, is(e, a, u, r), ns();
      var U = e.memoizedState;
      h !== F || R !== U || gi || t !== null && t.dependencies !== null && Co(t.dependencies) ? (typeof b == "function" && (Cc(
        e,
        n,
        b,
        a
      ), U = e.memoizedState), (k = gi || tg(
        e,
        n,
        k,
        a,
        R,
        U,
        E
      ) || t !== null && t.dependencies !== null && Co(t.dependencies)) ? (V || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, U, E), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        U,
        E
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = U), u.props = a, u.state = U, u.context = E, a = k) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), a = !1);
    }
    return u = a, Ia(t, e), a = (e.flags & 128) !== 0, u || a ? (u = e.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), e.flags |= 1, t !== null && a ? (e.child = la(
      e,
      t.child,
      null,
      r
    ), e.child = la(
      e,
      null,
      n,
      r
    )) : ce(t, e, n, r), e.memoizedState = u.state, t = e.child) : t = $n(
      t,
      e,
      r
    ), t;
  }
  function gg(t, e, n, a) {
    return Ii(), e.flags |= 256, ce(t, e, n, a), e.child;
  }
  var Nc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Rc(t) {
    return { baseLanes: t, cachePool: lp() };
  }
  function _c(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Fe), t;
  }
  function yg(t, e, n) {
    var a = e.pendingProps, r = !1, u = (e.flags & 128) !== 0, h;
    if ((h = u) || (h = t !== null && t.memoizedState === null ? !1 : (Te.current & 2) !== 0), h && (r = !0, e.flags &= -129), h = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Dt) {
        if (r ? Si(e) : Ti(), (t = Ft) ? (t = Hy(
          t,
          rn
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: fi !== null ? { id: Mn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Jm(t), n.return = e, e.child = n, pe = e, Ft = null)) : t = null, t === null) throw hi(e);
        return _f(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, r ? (Ti(), r = e.mode, u = Zo(
        { mode: "hidden", children: u },
        r
      ), a = Ji(
        a,
        r,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = Rc(n), a.childLanes = _c(
        t,
        h,
        n
      ), e.memoizedState = Nc, rs(null, a)) : (Si(e), Vc(e, u));
    }
    var b = t.memoizedState;
    if (b !== null) {
      var E = b.dehydrated;
      if (E !== null)
        return tx(
          t,
          e,
          u,
          h,
          a,
          E,
          b,
          n
        );
    }
    return r ? (Ti(), r = a.fallback, u = e.mode, b = t.child, E = b.sibling, a = Kn(b, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = b.subtreeFlags & 1206910976, E !== null ? r = Kn(E, r) : (r = Ji(
      r,
      u,
      n,
      null
    ), r.flags |= 2), r.return = e, a.return = e, a.sibling = r, e.child = a, rs(null, a), a = e.child, r = t.child.memoizedState, r === null ? r = Rc(n) : (u = r.cachePool, u !== null ? (b = le._currentValue, u = u.parent !== b ? { parent: b, pool: b } : u) : u = lp(), r = {
      baseLanes: r.baseLanes | n,
      cachePool: u
    }), a.memoizedState = r, a.childLanes = _c(
      t,
      h,
      n
    ), e.memoizedState = Nc, rs(t.child, a)) : (Si(e), n = t.child, t = n.sibling, n = Kn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [t], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Vc(t, e) {
    return e = Zo(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Zo(t, e) {
    return t = Le(22, t, null, e), t.lanes = 0, t;
  }
  function Ko(t, e, n) {
    return la(e, t.child, null, n), t = Vc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function tx(t, e, n, a, r, u, h, b) {
    if (n)
      return e.flags & 256 ? (Si(e), e.flags &= -257, Ko(
        t,
        e,
        b
      )) : e.memoizedState !== null ? (Ti(), e.child = t.child, e.flags |= 128, null) : (Ti(), u = r.fallback, h = e.mode, r = Zo(
        { mode: "visible", children: r.children },
        h
      ), u = Ji(
        u,
        h,
        b,
        null
      ), u.flags |= 2, r.return = e, u.return = e, r.sibling = u, e.child = r, la(e, t.child, null, b), r = e.child, r.memoizedState = Rc(b), r.childLanes = _c(
        t,
        a,
        b
      ), e.memoizedState = Nc, rs(null, r));
    if (Si(e), _f(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var E = a.dgst;
      return a = E, a !== "" && (r = Error(o(419)), r.stack = "", r.digest = a, Jl({ value: r, source: null, stack: null })), Ko(
        t,
        e,
        b
      );
    }
    if (oe || $i(t, e, b, !1), a = (b & t.childLanes) !== 0, oe || a) {
      if (bi.current !== null)
        return Ko(
          t,
          e,
          b
        );
      if (a = Kt, a !== null && (r = $h(
        a,
        b
      ), r !== 0 && r !== h.retryLane))
        throw h.retryLane = r, Fi(t, r), ke(a, t, r), zc;
      return Rf(u) || fr(), Ko(
        t,
        e,
        b
      );
    }
    return Rf(u) ? (e.flags |= 192, e.child = t.child, null) : (t = h.treeContext, Ft = cn(u.nextSibling), pe = e, Dt = !0, di = null, rn = !1, t !== null && $m(e, t), e = Vc(
      e,
      r.children
    ), e.flags |= 134221824, e);
  }
  function vg(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), wo(t.return, e, n);
  }
  function bg(t) {
    for (var e = null; t !== null; ) {
      var n = t.alternate;
      n !== null && Vo(n) === null && (e = t), t = t.sibling;
    }
    return e;
  }
  function Po(t, e, n, a, r, u) {
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
  function jc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function Lc(t, e, n) {
    var a = e.pendingProps, r = a.revealOrder, u = a.tail;
    a = a.children;
    var h = Te.current;
    if (e.flags & 128)
      return as(e, h), null;
    var b = (h & 2) !== 0;
    if (b ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, as(e, h), r === "backwards" && t !== null ? (jc(t), ce(t, e, a, n), jc(t)) : ce(t, e, a, n), a = Dt ? Fl : 0, !b && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && vg(t, n, e);
        else if (t.tag === 19)
          vg(t, n, e);
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
        n = bg(e.child), n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null, jc(e)), Po(
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
          if (t = r.alternate, t !== null && Vo(t) === null) {
            e.child = r;
            break;
          }
          t = r.sibling, r.sibling = n, n = r, r = t;
        }
        Po(
          e,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        Po(
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
        n = bg(e.child), n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), Po(
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
  function Sg(t, e, n) {
    var a = e.pendingProps;
    return mi(e, e.type, a.value), ce(t, e, a.children, n), e.child;
  }
  function $n(t, e, n) {
    if (t !== null && (e.dependencies = t.dependencies), wi |= e.lanes, (n & e.childLanes) === 0)
      if (t !== null) {
        if ($i(
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
  function Bc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Co(t)));
  }
  function ex(t, e, n) {
    switch (e.tag) {
      case 3:
        oi(e, e.stateNode.containerInfo), mi(e, le, t.memoizedState.cache), Ii();
        break;
      case 27:
      case 5:
        Ca(e);
        break;
      case 4:
        oi(e, e.stateNode.containerInfo);
        break;
      case 10:
        mi(
          e,
          e.type,
          e.memoizedProps.value
        );
        break;
      case 31:
        if (e.memoizedState !== null)
          return e.flags |= 128, rc(e), null;
        break;
      case 13:
        var a = e.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Si(e), e.flags |= 128, null;
          a = $i(
            t,
            e,
            n,
            !1
          );
          var r = e.child.childLanes;
          return a || (n & r) !== 0 ? yg(t, e, n) : (Si(e), t = $n(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        Si(e);
        break;
      case 19:
        if (e.flags & 128)
          return Lc(
            t,
            e,
            n
          );
        if (r = (t.flags & 128) !== 0, a = (n & e.childLanes) !== 0, a || ($i(
          t,
          e,
          n,
          !1
        ), a = (n & e.childLanes) !== 0), r) {
          if (a)
            return Lc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), as(e, Te.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, fg(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        mi(e, le, t.memoizedState.cache);
    }
    return $n(t, e, n);
  }
  function Tg(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        oe = !0;
      else {
        if (!Bc(t, n) && (e.flags & 128) === 0)
          return oe = !1, ex(
            t,
            e,
            n
          );
        oe = (t.flags & 131072) !== 0;
      }
    else
      oe = !1, Dt && (e.flags & 1048576) !== 0 && Wm(e, Fl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = ia(e.elementType), e.type = t, typeof t == "function")
            Xu(t) ? (a = oa(t, a), e.tag = 1, e = pg(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = Oc(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === G) {
                e.tag = 11, e = rg(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (r === st) {
                e.tag = 14, e = ug(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (r === $) {
                e.tag = 10, e.type = t, e = Sg(
                  null,
                  e,
                  n
                );
                break t;
              }
            }
            throw e = ft(t) || t, Error(o(306, e, ""));
          }
        }
        return e;
      case 0:
        return Oc(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 1:
        return a = e.type, r = oa(
          a,
          e.pendingProps
        ), pg(
          t,
          e,
          a,
          r,
          n
        );
      case 3:
        t: {
          if (oi(
            e,
            e.stateNode.containerInfo
          ), t === null) throw Error(o(387));
          a = e.pendingProps;
          var u = e.memoizedState;
          r = u.element, ic(t, e), is(e, a, null, n);
          var h = e.memoizedState;
          if (a = h.cache, mi(e, le, a), a !== u.cache && Iu(
            e,
            [le],
            n,
            !0
          ), ns(), a = h.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: h.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = gg(
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
              ), Jl(r), e = gg(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ft = cn(t.firstChild), pe = e, Dt = !0, di = null, rn = !0, n = fp(
                e,
                null,
                a,
                n
              ), e.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Ii(), a === r) {
              e = $n(
                t,
                e,
                n
              );
              break t;
            }
            ce(t, e, a, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return Ia(t, e), t === null ? (n = Zy(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Dt || (e.stateNode = wy(
          e.type,
          e.pendingProps,
          Ve.current,
          e
        )) : e.memoizedState = Zy(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ca(e), t === null && Dt && (a = e.stateNode = Yy(
          e.type,
          e.pendingProps,
          Ve.current
        ), pe = e, rn = !0, r = Ft, zi(e.type) ? (Vf = r, Ft = cn(a.firstChild)) : Ft = r), ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), Ia(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Dt && ((r = a = Ft) && (a = Fx(
          a,
          e.type,
          e.pendingProps,
          rn
        ), a !== null ? (e.stateNode = a, pe = e, Ft = cn(a.firstChild), rn = !1, r = !0) : r = !1), r || hi(e)), Ca(e), r = e.type, u = e.pendingProps, h = t !== null ? t.memoizedProps : null, a = u.children, wf(r, u) ? a = null : h !== null && wf(r, h) && (e.flags |= 32), e.memoizedState !== null && (r = fc(
          t,
          e,
          XT,
          null,
          null,
          n
        ), pl._currentValue = r), Ia(t, e), ce(t, e, a, n), e.child;
      case 6:
        return t === null && Dt && ((t = n = Ft) && (n = Jx(
          n,
          e.pendingProps,
          rn
        ), n !== null ? (e.stateNode = n, pe = e, Ft = null, t = !0) : t = !1), t || hi(e)), null;
      case 13:
        return yg(t, e, n);
      case 4:
        return oi(
          e,
          e.stateNode.containerInfo
        ), a = e.pendingProps, t === null ? e.child = la(
          e,
          null,
          a,
          n
        ) : ce(t, e, a, n), e.child;
      case 11:
        return rg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 7:
        return a = e.pendingProps, Ia(t, e), ce(t, e, a, n), e.child;
      case 8:
        return ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 12:
        return ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), e.child;
      case 10:
        return Sg(t, e, n);
      case 9:
        return r = e.type._context, a = e.pendingProps.children, ta(e), r = be(r), a = a(r), e.flags |= 1, ce(t, e, a, n), e.child;
      case 14:
        return ug(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return cg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Lc(t, e, n);
      case 31:
        return $T(t, e, n);
      case 22:
        return fg(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ta(e), a = be(le), t === null ? (r = tc(), r === null && (r = Kt, u = Wu(), r.pooledCache = u, u.refCount++, u !== null && (r.pooledCacheLanes |= n), r = u), e.memoizedState = { parent: a, cache: r }, nc(e), mi(e, le, r)) : ((t.lanes & n) !== 0 && (ic(t, e), is(e, null, null, n), ns()), r = t.memoizedState, u = e.memoizedState, r.parent !== a ? (r = { parent: a, cache: a }, e.memoizedState = r, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r), mi(e, le, a)) : (a = u.cache, mi(e, le, a), a !== r.cache && Iu(
          e,
          [le],
          n,
          !0
        ))), ce(
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
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Dt && Eo(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : Ia(t, e), ce(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function ti(t) {
    t.flags |= 4;
  }
  function Uc(t, e, n, a, r) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? Jy(e, a) : Jy(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (r & 335544128) === r)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (ny()) t.flags |= 8192;
        else
          throw aa = Oo, ec;
    } else t.flags &= -16777217;
  }
  function xg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !Iy(e))
      if (ny()) t.flags |= 8192;
      else
        throw aa = Oo, ec;
  }
  function Fo(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? Jh() : 536870912, t.lanes |= e, nl |= e);
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
      for (var r = t.child; r !== null; )
        n |= r.lanes | r.childLanes, a |= r.subtreeFlags & 1206910976, a |= r.flags & 1206910976, r.return = t, r = r.sibling;
    else
      for (r = t.child; r !== null; )
        n |= r.lanes | r.childLanes, a |= r.subtreeFlags, a |= r.flags, r.return = t, r = r.sibling;
    return t.subtreeFlags |= a, t.childLanes = n, e;
  }
  function nx(t, e, n) {
    var a = e.pendingProps;
    switch (Ku(e), e.tag) {
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
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Jn(le), Gn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Xa(e) ? ti(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Fu())), Jt(e), null;
      case 26:
        var r = e.type, u = e.memoizedState;
        return t === null ? (ti(e), u !== null ? (Jt(e), xg(e, u)) : (Jt(e), Uc(
          e,
          r,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (ti(e), Jt(e), xg(e, u)) : (Jt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ti(e), Jt(e), Uc(
          e,
          r,
          t,
          a,
          n
        )), null;
      case 27:
        if (Ma(e), n = Ve.current, r = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ti(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Jt(e), e.subtreeFlags &= -33554433, null;
          }
          t = Pt.current, Xa(e) ? tp(e) : (t = Yy(r, a, n), e.stateNode = t, ti(e));
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
          if (u = Pt.current, Xa(e))
            tp(e);
          else {
            var h = Ss(
              Ve.current
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
            u[ve] = e, u[je] = a;
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
            t: switch (Ee(u, r, a), r) {
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
        return Jt(e), e.subtreeFlags &= -33554433, Uc(
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
          if (t = Ve.current, Xa(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, r = pe, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  a = r.memoizedProps;
              }
            t[ve] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Ty(t.nodeValue, n)), t || hi(e, !0);
          } else
            t = Ss(t).createTextNode(
              a
            ), t[ve] = e, e.stateNode = t;
        }
        return Jt(e), null;
      case 31:
        if (n = e.memoizedState, t === null || t.memoizedState !== null) {
          if (a = Xa(e), n !== null) {
            if (t === null) {
              if (!a) throw Error(o(318));
              if (t = e.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(557));
              t[ve] = e;
            } else
              Ii(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Jt(e), t = !1;
          } else
            n = Fu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
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
              r[ve] = e;
            } else
              Ii(), (e.flags & 128) === 0 && (e.memoizedState = null), e.flags |= 4;
            Jt(e), r = !1;
          } else
            r = Fu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
        }
        return Ze(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, r = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (r = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== r && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Fo(e, e.updateQueue), Jt(e), null);
      case 4:
        return Gn(), t === null && Sf(e.stateNode.containerInfo), e.flags |= 67108864, Jt(e), null;
      case 10:
        return Jn(e.type), Jt(e), null;
      case 19:
        if (uc(e), a = e.memoizedState, a === null) return Jt(e), null;
        if (r = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (r) us(a, !1);
          else {
            if (ie !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Vo(t), u !== null) {
                  for (e.flags |= 128, us(a, !1), t = u.updateQueue, e.updateQueue = t, Fo(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Fm(n, t), n = n.sibling;
                  return as(
                    e,
                    Te.current & 1 | 2
                  ), Dt && Pn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && Me() > or && (e.flags |= 128, r = !0, us(a, !1), e.lanes = 4194304);
          }
        else {
          if (!r)
            if (t = Vo(u), t !== null) {
              if (e.flags |= 128, r = !0, t = t.updateQueue, e.updateQueue = t, Fo(e, t), us(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Dt)
                return Jt(e), null;
            } else
              2 * Me() - a.renderingStartTime > or && n !== 536870912 && (e.flags |= 128, r = !0, us(a, !1), e.lanes = 4194304);
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
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Me(), t.sibling = null, u = Te.current, u = r ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Dt ? as(e, u) : (n = u, Ot(Se, e), Ot(Te, n), De === null && (De = e)), Dt && Pn(e, a.treeForkCount), t;
        }
        return Jt(e), null;
      case 22:
      case 23:
        return Ze(e), oc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Jt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Jt(e), n = e.updateQueue, n !== null && Fo(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && Ut(na), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Jn(le), Jt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Jt(e), null;
    }
    throw Error(o(156, e.tag));
  }
  function ix(t, e) {
    switch (Ku(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Jn(le), Gn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
      case 26:
      case 27:
      case 5:
        return Ma(e), null;
      case 31:
        if (e.memoizedState !== null) {
          if (Ze(e), e.alternate === null)
            throw Error(o(340));
          Ii();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 13:
        if (Ze(e), t = e.memoizedState, t !== null && t.dehydrated !== null) {
          if (e.alternate === null)
            throw Error(o(340));
          Ii();
        }
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 19:
        return uc(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return Gn(), null;
      case 10:
        return Jn(e.type), null;
      case 22:
      case 23:
        return Ze(e), oc(), t !== null && Ut(na), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Jn(le), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Eg(t, e) {
    switch (Ku(e), e.tag) {
      case 3:
        Jn(le), Gn();
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
        uc(e);
        break;
      case 10:
        Jn(e.type);
        break;
      case 22:
      case 23:
        Ze(e), oc(), t !== null && Ut(na);
        break;
      case 24:
        Jn(le);
    }
  }
  function cs(t, e) {
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
      Gt(e, e.return, b);
    }
  }
  function xi(t, e, n) {
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
              var E = n, V = b;
              try {
                V();
              } catch (k) {
                Gt(
                  r,
                  E,
                  k
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (k) {
      Gt(e, e.return, k);
    }
  }
  function Ag(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        hp(e, n);
      } catch (a) {
        Gt(t, t.return, a);
      }
    }
  }
  function wg(t, e, n) {
    n.props = oa(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Gt(t, e, a);
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
            (r.ref === null || r.ref.name !== u) && (r.ref = Ry(u)), a = r.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var h = new Ie(t);
              y(
                t.child,
                !1,
                Kx,
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
      Gt(t, e, b);
    }
  }
  function xe(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (r) {
          Gt(t, e, r);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Gt(t, e, r);
        }
      else n.current = null;
  }
  function Jo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        Uy(
          t.stateNode,
          e[n]
        );
  }
  function Cg(t) {
    for (var e = t.return; e !== null && (kc(e) && Uy(t.stateNode, e.stateNode), !Hc(e)); )
      e = e.return;
  }
  function fs(t) {
    for (var e = t.return; e !== null && (kc(e) && Px(t.stateNode, e.stateNode), !Hc(e)); )
      e = e.return;
  }
  function Hc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function kc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Gc(t) {
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
      Gt(t, t.return, r);
    }
  }
  function Yc(t, e, n) {
    try {
      var a = t.stateNode;
      zx(a, t.type, n, e), a[je] = e;
    } catch (r) {
      Gt(t, t.return, r);
    }
  }
  function Mg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && zi(t.type) || t.tag === 4;
  }
  function qc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || Mg(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && zi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Xc(t, e, n, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      r = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(r, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(r), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Cn)), Jo(t, a), Lt = !0;
    else if (r !== 4 && (r === 27 && (Jo(t, a), a = null, zi(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (Xc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Xc(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Io(t, e, n, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      r = t.stateNode, e ? n.insertBefore(r, e) : n.appendChild(r), Jo(t, a), Lt = !0;
    else if (r !== 4 && (r === 27 && (Jo(t, a), a = null, zi(t.type) && (n = t.stateNode)), t = t.child, t !== null))
      for (Io(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Io(
          t,
          e,
          n,
          a
        ), t = t.sibling;
  }
  function Dg(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      Ee(e, a, n), e[ve] = t, e[je] = n;
    } catch (u) {
      Gt(t, t.return, u);
    }
  }
  var Wo = !1, Ke = null;
  function zg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (Wo = !0);
  }
  var On = null;
  function Og() {
    var t = On;
    return On = null, t;
  }
  var Be = 0;
  function Wa(t, e, n, a, r) {
    return Be = 0, Ng(
      t.child,
      e,
      n,
      a,
      r
    );
  }
  function Ng(t, e, n, a, r) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var h = t.stateNode;
        if (a !== null) {
          var b = Df(h);
          a.push(b), b.view && (u = !0);
        } else
          u || Df(h).view && (u = !0);
        Wo = !0, Oy(
          h,
          Be === 0 ? e : e + "_" + Be,
          n
        ), Be++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && r || Ng(
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
      t.tag === 5 ? Ny(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Nn(
        t.child,
        e
      )), t = t.sibling;
  }
  function $o(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if ((t.tag !== 22 || t.memoizedState === null) && ($o(t), t.tag === 30 && (t.flags & 18874368) !== 0 && t.stateNode.paired)) {
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
  function Qc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, r = Qn(a, n), u = Zn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? Wa(t, r, u, null, !1) ? ($o(t), n.paired || e || sl(t, a.onEnter)) : Nn(t.child, !1) : $o(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Qc(t, e), t = t.sibling;
    else $o(t);
  }
  function Zc(t) {
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
            Zc(t);
          }
          t = t.sibling;
        }
    }
  }
  function Kc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Qn(e, t.stateNode), a = Ke !== null ? Ke.get(n) : void 0, r = Zn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      r !== "none" && (Wa(t, n, r, null, !1) ? a !== void 0 ? (r = t.stateNode, a.paired = r, r.paired = a, Ke.delete(n), sl(t, e.onShare)) : sl(t, e.onExit) : Nn(t.child, !1)), Ke !== null && Zc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Kc(t), t = t.sibling;
    else
      Ke !== null && Zc(t);
  }
  function Rg(t) {
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
        (t.subtreeFlags & 33554432) !== 0 && Rg(t);
      t = t.sibling;
    }
  }
  function Pc(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Nn(t.child, !1));
          }
          Pc(t);
        }
        t = t.sibling;
      }
  }
  function tr(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Nn(t.child, !1), Pc(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        tr(t), t = t.sibling;
    else Pc(t);
  }
  function _g(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Nn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && _g(t), t = t.sibling;
  }
  function Fc(t, e, n, a, r, u, h) {
    for (var b = !1; e !== null; ) {
      if (e.tag === 5) {
        var E = e.stateNode;
        if (u !== null && Be < u.length) {
          var V = u[Be], k = Df(E);
          (V.view || k.view) && (b = !0);
          var F;
          if (F = (t.flags & 4) === 0)
            if (k.clip) F = !0;
            else {
              F = V.rect;
              var R = k.rect;
              F = F.y !== R.y || F.x !== R.x || F.height !== R.height || F.width !== R.width;
            }
          F && (t.flags |= 4), k.abs ? k = !V.abs : (V = V.rect, k = k.rect, k = V.height !== k.height || V.width !== k.width), k && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Oy(
          E,
          Be === 0 ? n : n + "_" + Be,
          r
        ), b && (t.flags & 4) !== 0 || (On === null && (On = []), On.push(
          E,
          Be === 0 ? a : a + "_" + Be,
          e.memoizedProps
        )), Be++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h ? t.flags |= e.flags & 32 : Fc(
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
  function Vg(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, r = Qn(n, a), u = Zn(n.default, n.update), h;
        h = t.memoizedState, t.memoizedState = null, a = t;
        var b = t.child;
        Be = 0, r = Fc(
          a,
          b,
          r,
          r,
          u,
          h,
          !1
        ), (t.flags & 4) !== 0 && r && sl(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Vg(t);
      t = t.sibling;
    }
  }
  var ge = !1, Ht = !1, Rn = !1, Jc = !1, jg = typeof WeakSet == "function" ? WeakSet : Set, ye = null, _n = !1, ds = !1, er = !1, Ic = !1;
  function ax(t, e, n) {
    if (t = t.containerInfo, Ef = gl, t = Hm(t), Bu(t)) {
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
            var b = 0, E = -1, V = -1, k = 0, F = 0, R = t, U = null;
            e: for (; ; ) {
              for (var ct; R !== a || u !== 0 && R.nodeType !== 3 || (E = b + u), R !== h || r !== 0 && R.nodeType !== 3 || (V = b + r), R.nodeType === 3 && (b += R.nodeValue.length), (ct = R.firstChild) !== null; )
                U = R, R = ct;
              for (; ; ) {
                if (R === t) break e;
                if (U === a && ++k === u && (E = b), U === h && ++F === r && (V = b), (ct = R.nextSibling) !== null) break;
                R = U, U = R.parentNode;
              }
              R = ct;
            }
            a = E === -1 || V === -1 ? null : { start: E, end: V };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Af = { focusedElem: t, selectionRange: a }, gl = !1, n = (n & 335544064) === n, ye = e, e = n ? 9270 : 1024; ye !== null; ) {
      if (t = ye, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && Kc(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && zg(t), nr(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Kc(a), nr(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && zg(t), nr(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, ye = a) : (n && Rg(t), nr(n));
      }
    }
    Ke = null;
  }
  function nr(t) {
    for (; ye !== null; ) {
      var e = ye, n = t, a = e.alternate, r = e.flags;
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
              var h = oa(
                e.type,
                r
              );
              n = u.getSnapshotBeforeUpdate(
                h,
                a
              ), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (b) {
              Gt(e, e.return, b);
            }
          }
          break;
        case 3:
          if ((r & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              Nf(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Nf(a);
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
        a.return = e.return, ye = a;
        break;
      }
      ye = e.return;
    }
  }
  function Lg(t, e, n) {
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
              Gt(n, n.return, h);
            }
          else {
            var r = oa(
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
              Gt(
                n,
                n.return,
                h
              );
            }
          }
        a & 64 && Ag(n), a & 512 && zn(n, n.return);
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
            hp(t, e);
          } catch (h) {
            Gt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Dg(n);
      case 26:
      case 5:
        Vn(t, n), e === null && a & 4 && Gc(n), a & 512 && zn(n, n.return);
        break;
      case 12:
        Vn(t, n);
        break;
      case 31:
        Vn(t, n), a & 4 && kg(t, n);
        break;
      case 13:
        Vn(t, n), a & 4 && Gg(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = gx.bind(
          null,
          n
        ), Ix(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ge, !a) {
          var u = e !== null && e.memoizedState !== null || Ht;
          e = ge, r = Ht, ge = a, (Ht = u) && !r ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), gn(
            t,
            n,
            a
          )) : Vn(t, n), ge = e, Ht = r;
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
  function Wc(t, e) {
    for (t = t.child; t !== null; )
      Bg(t, e), t = t.sibling;
  }
  function Bg(t, e) {
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
        } catch (E) {
          Gt(t, t.return, E);
        }
        $c(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Lt = !0;
        } catch (E) {
          Gt(t, t.return, E);
        }
        break;
      case 18:
        try {
          var b = t.stateNode;
          e ? zy(b, !0) : zy(t.stateNode, !1);
        } catch (E) {
          Gt(t, t.return, E);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && Wc(t, e);
        break;
      default:
        Wc(t, e);
    }
  }
  function $c(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Bg(n, a);
              break t;
            case 22:
              n.memoizedState === null && $c(n, a);
              break t;
            default:
              $c(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function Ug(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, Ug(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && so(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Wt = null, Ue = !1;
  function mn(t, e, n) {
    for (n = n.child; n !== null; )
      Hg(t, e, n), n = n.sibling;
  }
  function Hg(t, e, n) {
    if (Ye && typeof Ye.onCommitFiberUnmount == "function")
      try {
        Ye.onCommitFiberUnmount(jl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Ht || xe(n, e), mn(
          t,
          e,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Ht && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Ht || xe(n, e), fs(n);
        var a = Wt, r = Ue;
        zi(n.type) && (Wt = n.stateNode, Ue = !1), mn(
          t,
          e,
          n
        ), qy(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Wt = a, Ue = r;
        break;
      case 5:
        Ht || xe(n, e), fs(n);
      case 6:
        if (n.tag === 6 && fs(n), a = Wt, r = Ue, Wt = null, mn(
          t,
          e,
          n
        ), Wt = a, Ue = r, Wt !== null)
          if (Ue)
            try {
              (Wt.nodeType === 9 ? Wt.body : Wt.nodeName === "HTML" ? Wt.ownerDocument.body : Wt).removeChild(n.stateNode), Lt = !0;
            } catch (u) {
              Gt(
                n,
                e,
                u
              );
            }
          else
            try {
              Wt.removeChild(n.stateNode), Lt = !0;
            } catch (u) {
              Gt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Wt !== null && (Ue ? (t = Wt, Dy(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), yl(t)) : Dy(Wt, n.stateNode));
        break;
      case 4:
        a = Wt, r = Ue, Wt = n.stateNode.containerInfo, Ue = !0, mn(
          t,
          e,
          n
        ), Wt = a, Ue = r;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        xi(2, n, e), Ht || xi(4, n, e), mn(
          t,
          e,
          n
        );
        break;
      case 1:
        Ht || (xe(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && wg(
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
        Ht = (a = Ht) || n.memoizedState !== null, mn(
          t,
          e,
          n
        ), Ht = a;
        break;
      case 30:
        xe(n, e), mn(
          t,
          e,
          n
        );
        break;
      case 7:
        Ht || xe(n, e), mn(
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
        yl(t);
      } catch (n) {
        Gt(e, e.return, n);
      }
    }
  }
  function Gg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        yl(t);
      } catch (n) {
        Gt(e, e.return, n);
      }
  }
  function lx(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new jg()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new jg()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function ir(t, e) {
    var n = lx(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var r = yx.bind(null, t, a);
        a.then(r, r);
      }
    });
  }
  function Ne(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var u = a[r], h = t, b = e, E = b;
        t: for (; E !== null; ) {
          switch (E.tag) {
            case 27:
              if (zi(E.type)) {
                Wt = E.stateNode, Ue = !1;
                break t;
              }
              break;
            case 5:
              Wt = E.stateNode, Ue = !1;
              break t;
            case 3:
            case 4:
              Wt = E.stateNode.containerInfo, Ue = !0;
              break t;
          }
          E = E.return;
        }
        if (Wt === null) throw Error(o(160));
        Hg(h, b, u), Wt = null, Ue = !1, h = u.alternate, h !== null && (h.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Yg(e, t, n), e = e.sibling;
  }
  var pn = null;
  function Yg(t, e, n) {
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
        Ne(e, t, n), Re(t), r & 4 && (xi(3, t, t.return), cs(3, t), xi(5, t, t.return));
        break;
      case 1:
        Ne(e, t, n), Re(t), r & 512 && (Ht || a === null || xe(a, a.return)), r & 64 && ge && (t = t.updateQueue, t !== null && (e = t.callbacks, e !== null && (n = t.shared.hiddenCallbacks, t.shared.hiddenCallbacks = n === null ? e : n.concat(e))));
        break;
      case 26:
        if (u = pn, Ne(e, t, n), Re(t), r & 512 && (Ht || a === null || xe(a, a.return)), r & 4)
          if (r = a !== null ? a.memoizedState : null, n = t.memoizedState, a === null)
            if (n === null)
              if (t.stateNode === null)
                if (ge)
                  t.stateNode = wy(
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
                        a = r.getElementsByTagName("title")[0], (!a || a[Ul] || a[ve] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = r.createElement(e), r.head.insertBefore(
                          a,
                          r.querySelector("head > title")
                        )), Ee(a, e, n), a[ve] = t, me(a), e = a;
                        break t;
                      case "link":
                        if (u = Fy(
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
                        a = r.createElement(e), Ee(a, e, n), r.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = Fy(
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
                        a = r.createElement(e), Ee(a, e, n), r.head.appendChild(a);
                        break;
                      default:
                        throw Error(o(468, e));
                    }
                    a[ve] = t, me(a), e = a;
                  }
                  t.stateNode = e;
                }
              else
                ge || Uf(u, t.type, t.stateNode);
            else
              t.stateNode = Py(
                u,
                n,
                t.memoizedProps
              );
          else
            r !== n ? (r === null ? (e = a.stateNode, e === null || Ht || e.parentNode.removeChild(e)) : r.count--, n === null ? ge || Uf(u, t.type, t.stateNode) : Py(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && Yc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Ne(e, t, n), Re(t), r & 512 && (Ht || a === null || xe(a, a.return)), a !== null && r & 4 && Yc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Rn, Rn = !1, Ne(e, t, n), Rn = u, Re(t), r & 512 && (Ht || a === null || xe(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            Va(e, ""), Lt = !0;
          } catch (k) {
            Gt(t, t.return, k);
          }
        }
        r & 4 && t.stateNode != null && (e = t.memoizedProps, Yc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), r & 1024 && (Jc = !0);
        break;
      case 6:
        if (Ne(e, t, n), Re(t), r & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Lt = !0;
          } catch (k) {
            Gt(t, t.return, k);
          }
        }
        break;
      case 3:
        if (Lt = !1, vr = null, u = pn, pn = Ts(e.containerInfo), Ne(e, t, n), pn = u, Re(t), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            yl(e.containerInfo);
          } catch (k) {
            Gt(t, t.return, k);
          }
        Jc && (Jc = !1, qg(t)), Lt = !1;
        break;
      case 4:
        r = Rn, Rn = ge, a = um(), u = pn, pn = Ts(
          t.stateNode.containerInfo
        ), Ne(e, t, n), Re(t), pn = u, Lt && ds && (er = !0), Lt = a, Rn = r;
        break;
      case 12:
        Ne(e, t, n), Re(t);
        break;
      case 31:
        Ne(e, t, n), Re(t), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ir(t, e)));
        break;
      case 13:
        Ne(e, t, n), Re(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (sr = Me()), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ir(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, h = a !== null && a.memoizedState !== null;
        var b = ge, E = Ht, V = Rn;
        ge = b || u, Rn = V || u, Ht = E || h, Ne(e, t, n), Ht = E, Rn = V, ge = b, Re(t), r & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || h || ge || Ht || (e = h || Ht, n = ge, a = Ht, ge = u || ge, Ht = e, Ei(t, 2), ge = n, Ht = a), !u && Rn || Wc(t, u)), r & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, ir(t, n))));
        break;
      case 19:
        Ne(e, t, n), Re(t), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, ir(t, e)));
        break;
      case 30:
        r & 512 && (Ht || a === null || xe(a, a.return)), r = um(), u = ds, h = (n & 335544064) === n, b = t.memoizedProps, ds = h && Zn(
          b.default,
          b.update
        ) !== "none", Ne(e, t, n), Re(t), h && a !== null && Lt && (t.flags |= 4), ds = u, Lt = r;
        break;
      case 21:
        break;
      case 7:
        r & 512 && (Ht || a === null || xe(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = t);
      default:
        Ne(e, t, n), Re(t);
    }
  }
  function Re(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, a = t.return; a !== null; ) {
          if (Mg(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var r = t.return; r !== null; ) {
          if (kc(r)) {
            var u = r.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (Hc(r)) break;
          r = r.return;
        }
        var h = a;
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var b = n.stateNode, E = qc(t);
            Io(
              t,
              E,
              b,
              h
            );
            break;
          case 5:
            var V = n.stateNode;
            n.flags & 32 && (Va(V, ""), n.flags &= -33);
            var k = qc(t);
            Io(
              t,
              k,
              V,
              h
            );
            break;
          case 3:
          case 4:
            var F = n.stateNode.containerInfo, R = qc(t);
            Xc(
              t,
              R,
              F,
              h
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (U) {
        Gt(t, t.return, U);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function qg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        qg(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, gl = !0, e.reset(), gl = !1), t = t.sibling;
      }
  }
  function $a(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Xg(e, t), e = e.sibling;
    else Vg(e);
  }
  function Xg(t, e) {
    var n = t.alternate;
    if (n === null) Qc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (Ic = _n = !1, Og(), $a(e, t), !_n && !er) {
            if (t = On, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var r = t[a + 1];
                Ny(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), Ic = !0;
          }
          On = null;
          break;
        case 5:
          $a(e, t);
          break;
        case 4:
          a = _n, _n = !1, $a(e, t), _n && (er = !0), _n = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Qc(t, !1) : $a(e, t));
          break;
        case 30:
          a = _n, r = Og(), _n = !1, $a(e, t), _n && (t.flags |= 4);
          var u = t.memoizedProps, h = t.stateNode;
          e = Qn(u, h), h = Qn(n.memoizedProps, h);
          var b = Zn(u.default, u.update);
          b === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, Be = 0, e = Fc(
            t,
            n,
            e,
            h,
            b,
            u,
            !0
          ), Be !== (u === null ? 0 : u.length) && (t.flags |= 32)), (t.flags & 4) !== 0 && e ? (sl(
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
        Lg(t, e.alternate, e), e = e.sibling;
  }
  function Ei(t, e) {
    for (t = t.child; t !== null; ) {
      var n = t, a = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          xi(4, n, n.return), Ei(
            n,
            a
          );
          break;
        case 1:
          xe(n, n.return);
          var r = n.stateNode;
          typeof r.componentWillUnmount == "function" && wg(
            n,
            n.return,
            r
          ), Ei(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && qy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          xe(n, n.return), n.tag !== 5 && n.tag !== 27 || fs(n), Ei(
            n,
            a
          );
          break;
        case 6:
          fs(n);
          break;
        case 26:
          xe(n, n.return), r = n.stateNode, n.memoizedState !== null || r === null || Ht || r.parentNode.removeChild(r), Ei(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && Ei(
            n,
            a
          );
          break;
        case 30:
          xe(n, n.return), Ei(
            n,
            a
          );
          break;
        case 7:
          xe(n, n.return);
        default:
          Ei(
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
          ), cs(4, u);
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
              Gt(a, a.return, k);
            }
          if (a = u, r = a.updateQueue, r !== null) {
            var E = a.stateNode;
            try {
              var V = r.shared.hiddenCallbacks;
              if (V !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < V.length; r++)
                  dp(V[r], E);
            } catch (k) {
              Gt(a, a.return, k);
            }
          }
          b && h & 64 && Ag(u), zn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Dg(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Cg(u), gn(
            r,
            u,
            n
          ), b && a === null && h & 4 && Gc(u), zn(u, u.return);
          break;
        case 6:
          Cg(u);
          break;
        case 26:
          E = u.stateNode, u.memoizedState !== null || E === null || ge || Uf(
            Ts(E.ownerDocument),
            u.type,
            E
          ), gn(
            r,
            u,
            n
          ), b && a === null && h & 4 && Gc(u), zn(u, u.return);
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
          ), b && h & 4 && kg(r, u);
          break;
        case 13:
          gn(
            r,
            u,
            n
          ), b && h & 4 && Gg(r, u);
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
  function tf(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Il(n));
  }
  function ef(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Il(t));
  }
  function un(t, e, n, a) {
    var r = (n & 335544064) === n;
    if (e.subtreeFlags & (r ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Qg(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else r && _g(e);
  }
  function Qg(t, e, n, a) {
    var r = (n & 335544064) === n;
    r && e.alternate === null && e.return !== null && e.return.alternate !== null && tr(e);
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
        ), r && Ic && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Il(u)));
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
            var h = e.memoizedProps, b = h.id, E = h.onPostCommit;
            typeof E == "function" && E(
              b,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (V) {
            Gt(e, e.return, V);
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
        h = e.stateNode, b = e.alternate, e.memoizedState !== null ? (r && b !== null && b.memoizedState === null && tr(b), h._visibility & 2 ? un(
          t,
          e,
          n,
          a
        ) : hs(
          t,
          e
        )) : (r && b !== null && b.memoizedState !== null && tr(e), h._visibility & 2 ? un(
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
        ))), u & 2048 && tf(b, e);
        break;
      case 24:
        un(
          t,
          e,
          n,
          a
        ), u & 2048 && ef(e.alternate, e);
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
      var u = t, h = e, b = n, E = a, V = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          tl(
            u,
            h,
            b,
            E,
            r
          ), cs(8, h);
          break;
        case 23:
          break;
        case 22:
          var k = h.stateNode;
          h.memoizedState !== null ? k._visibility & 2 ? tl(
            u,
            h,
            b,
            E,
            r
          ) : hs(
            u,
            h
          ) : (k._visibility |= 2, tl(
            u,
            h,
            b,
            E,
            r
          )), r && V & 2048 && tf(
            h.alternate,
            h
          );
          break;
        case 24:
          tl(
            u,
            h,
            b,
            E,
            r
          ), r && V & 2048 && ef(h.alternate, h);
          break;
        default:
          tl(
            u,
            h,
            b,
            E,
            r
          );
      }
      e = e.sibling;
    }
  }
  function hs(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var n = t, a = e, r = a.flags;
        switch (a.tag) {
          case 22:
            hs(n, a), r & 2048 && tf(
              a.alternate,
              a
            );
            break;
          case 24:
            hs(n, a), r & 2048 && ef(a.alternate, a);
            break;
          default:
            hs(n, a);
        }
        e = e.sibling;
      }
  }
  var ra = 8192;
  function ua(t, e, n) {
    if (t.subtreeFlags & ra)
      for (t = t.child; t !== null; )
        Zg(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Zg(t, e, n) {
    switch (t.tag) {
      case 26:
        ua(
          t,
          e,
          n
        ), t.flags & ra && (t.memoizedState !== null ? fE(
          n,
          pn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && $y(n, t)));
        break;
      case 5:
        ua(
          t,
          e,
          n
        ), t.flags & ra && (t = t.stateNode, (e & 335544128) === e && $y(n, t));
        break;
      case 3:
      case 4:
        var a = pn;
        pn = Ts(t.stateNode.containerInfo), ua(
          t,
          e,
          n
        ), pn = a;
        break;
      case 22:
        t.memoizedState === null && (a = t.alternate, a !== null && a.memoizedState !== null ? (a = ra, ra = 16777216, ua(
          t,
          e,
          n
        ), ra = a) : ua(
          t,
          e,
          n
        ));
        break;
      case 30:
        if ((t.flags & ra) !== 0 && (a = t.memoizedProps.name, a != null && a !== "auto")) {
          var r = t.stateNode;
          r.paired = null, Ke === null && (Ke = /* @__PURE__ */ new Map()), Ke.set(a, r);
        }
        ua(
          t,
          e,
          n
        );
        break;
      default:
        ua(
          t,
          e,
          n
        );
    }
  }
  function Kg(t) {
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
          ye = a, Fg(
            a,
            t
          );
        }
      Kg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Pg(t), t = t.sibling;
  }
  function Pg(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ms(t), t.flags & 2048 && xi(9, t, t.return);
        break;
      case 3:
        ms(t);
        break;
      case 12:
        ms(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null && e._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (e._visibility &= -3, ar(t)) : ms(t);
        break;
      default:
        ms(t);
    }
  }
  function ar(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var a = e[n];
          ye = a, Fg(
            a,
            t
          );
        }
      Kg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          xi(8, e, e.return), ar(e);
          break;
        case 22:
          n = e.stateNode, n._visibility & 2 && (n._visibility &= -3, ar(e));
          break;
        default:
          ar(e);
      }
      t = t.sibling;
    }
  }
  function Fg(t, e) {
    for (; ye !== null; ) {
      var n = ye;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          xi(8, n, e);
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
      if (a = n.child, a !== null) a.return = n, ye = a;
      else
        t: for (n = t; ye !== null; ) {
          a = ye;
          var r = a.sibling, u = a.return;
          if (Ug(a), a === n) {
            ye = null;
            break t;
          }
          if (r !== null) {
            r.return = u, ye = r;
            break t;
          }
          ye = u;
        }
    }
  }
  var sx = {
    getCacheForType: function(t) {
      var e = be(le), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return be(le).controller.signal;
    }
  }, ox = typeof WeakMap == "function" ? WeakMap : Map, Bt = 0, Kt = null, Nt = null, _t = 0, kt = 0, Pe = null, Ai = !1, el = !1, nf = !1, ei = 0, ie = 0, wi = 0, ca = 0, lr = 0, Fe = 0, nl = 0, ps = null, He = null, af = !1, sr = 0, Jg = 0, or = 1 / 0, rr = null, Ci = null, $t = 0, yn = null, fa = null, jn = 0, lf = 0, sf = null, Ig = null, il = null, al = null, ll = null, gs = 0, ur = null;
  function Je() {
    return (Bt & 2) !== 0 && _t !== 0 ? _t & -_t : ot.T !== null ? gf() : tm();
  }
  function Wg() {
    if (Fe === 0)
      if ((_t & 536870912) === 0 || Dt) {
        var t = no;
        no <<= 1, (no & 3932160) === 0 && (no = 262144), Fe = t;
      } else Fe = 536870912;
    return t = Se.current, t !== null && (t.flags |= 32), Fe;
  }
  function sl(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = Ry(
        Qn(t.memoizedProps, n)
      )), al === null && (al = []), al.push(e.bind(null, a));
    }
  }
  function ke(t, e, n) {
    (t === Kt && (kt === 2 || kt === 9) || t.cancelPendingCommit !== null) && (ol(t, 0), Mi(
      t,
      _t,
      Fe,
      !1
    )), Bl(t, n), ((Bt & 2) === 0 || t !== Kt) && (t === Kt && ((Bt & 2) === 0 && (ca |= n), ie === 4 && Mi(
      t,
      _t,
      Fe,
      !1
    )), Ln(t));
  }
  function $g(t, e, n) {
    if ((Bt & 6) !== 0) throw Error(o(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Ll(t, e), r = a ? cx(t, e) : rf(t, e, !0), u = a;
    do {
      if (r === 0) {
        el && !a && Mi(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !rx(n)) {
          r = rf(t, e, !1), u = !1;
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
              r = ps;
              var E = b.current.memoizedState.isDehydrated;
              if (E && (ol(b, h).flags |= 256), h = rf(
                b,
                h,
                !1
              ), h !== 2 && h !== 6) {
                if (nf && !E) {
                  b.errorRecoveryDisabledLanes |= u, ca |= u, r = 4;
                  break t;
                }
                u = He, He = r, u !== null && (He === null ? He = u : He.push.apply(
                  He,
                  u
                ));
              }
              r = h;
            }
            if (u = !1, r !== 2) continue;
          }
        }
        if (r === 1) {
          ol(t, 0), Mi(t, e, 0, !0);
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
              Mi(
                a,
                e,
                Fe,
                !Ai
              );
              break t;
            case 2:
              He = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((e & 62914560) === e && (r = sr + 300 - Me(), 10 < r)) {
            if (Mi(
              a,
              e,
              Fe,
              !Ai
            ), ao(a, 0, !0) !== 0) break t;
            jn = e, a.timeoutHandle = Mf(
              ty.bind(
                null,
                a,
                n,
                He,
                rr,
                af,
                e,
                Fe,
                ca,
                nl,
                Ai,
                u,
                "Throttled",
                -0,
                0
              ),
              r
            );
            break t;
          }
          ty(
            a,
            n,
            He,
            rr,
            af,
            e,
            Fe,
            ca,
            nl,
            Ai,
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
  function ty(t, e, n, a, r, u, h, b, E, V, k, F, R, U) {
    t.timeoutHandle = -1;
    var ct = e.subtreeFlags, pt = (u & 335544064) === u;
    if (F = null, (pt || ct & 8192 || (ct & 16785408) === 16785408) && (F = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Cn
    }, Ke = null, Zg(
      e,
      u,
      F
    ), pt && (ct = F, pt = t.containerInfo, pt = (pt.nodeType === 9 ? pt : pt.ownerDocument).__reactViewTransition, pt != null && (ct.count++, ct.waitingForViewTransition = !0, ct = As.bind(ct), pt.finished.then(ct, ct))), ct = (u & 62914560) === u ? sr - Me() : (u & 4194048) === u ? Jg - Me() : 0, ct = dE(
      F,
      ct
    ), ct !== null)) {
      jn = u, t.cancelPendingCommit = ct(
        ry.bind(
          null,
          t,
          e,
          u,
          n,
          a,
          r,
          h,
          b,
          E,
          V,
          k,
          F,
          null,
          R,
          U
        )
      ), Mi(t, u, h, !V);
      return;
    }
    ry(
      t,
      e,
      u,
      n,
      a,
      r,
      h,
      b,
      E,
      V,
      k,
      F
    );
  }
  function rx(t) {
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
  function Mi(t, e, n, a) {
    e = Fh(t, e), e &= ~lr, e &= ~ca, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var r = e; 0 < r; ) {
      var u = 31 - qe(r), h = 1 << u;
      a[u] = -1, r &= ~h;
    }
    n !== 0 && Ih(t, n, e);
  }
  function cr() {
    return (Bt & 6) === 0 ? (ys(0), !1) : !0;
  }
  function of() {
    if (Nt !== null) {
      if (kt === 0)
        var t = Nt.return;
      else
        t = Nt, Fn = Wi = null, mc(t), Ka = null, ts = 0, t = Nt;
      for (; t !== null; )
        Eg(t.alternate, t), t = t.return;
      Nt = null;
    }
  }
  function ol(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, Rx(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), jn = 0, of(), Kt = t, Nt = n = Kn(t.current, null), _t = e, kt = 0, Pe = null, Ai = !1, el = Ll(t, e), nf = !1, nl = Fe = lr = ca = wi = ie = 0, He = ps = null, af = !1, ei = Fh(t, e), vo(), n;
  }
  function ey(t, e) {
    wt = null, ot.H = qo, e === Za || e === zo ? (e = rp(), kt = 3) : e === ec ? (e = rp(), kt = 4) : kt = e === zc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Pe = e, Nt === null && (ie = 1, Xo(
      t,
      ln(e, t.current)
    ));
  }
  function ny() {
    var t = Se.current;
    return t === null ? !0 : (_t & 4194048) === _t ? De === null : (_t & 62914560) === _t || (_t & 536870912) !== 0 ? t === De : !1;
  }
  function iy() {
    var t = ot.H;
    return ot.H = qo, t === null ? qo : t;
  }
  function ay() {
    var t = ot.A;
    return ot.A = sx, t;
  }
  function fr() {
    ie = 4, Ai || (_t & 4194048) !== _t && Se.current !== null || (el = !0), (wi & 134217727) === 0 && (ca & 134217727) === 0 || Kt === null || Mi(
      Kt,
      _t,
      Fe,
      !1
    );
  }
  function rf(t, e, n) {
    var a = Bt;
    Bt |= 2;
    var r = iy(), u = ay();
    (Kt !== t || _t !== e) && (rr = null, ol(t, e)), e = !1;
    var h = ie;
    t: do
      try {
        if (kt !== 0 && Nt !== null) {
          var b = Nt, E = Pe;
          switch (kt) {
            case 8:
              of(), h = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var V = kt;
              if (kt = 0, Pe = null, rl(t, b, E, V), n && el) {
                h = 0;
                break t;
              }
              break;
            default:
              V = kt, kt = 0, Pe = null, rl(t, b, E, V);
          }
        }
        ux(), h = ie;
        break;
      } catch (k) {
        ey(t, k);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Fn = Wi = null, Bt = a, ot.H = r, ot.A = u, Nt === null && (Kt = null, _t = 0, vo()), h;
  }
  function ux() {
    for (; Nt !== null; ) ly(Nt);
  }
  function cx(t, e) {
    var n = Bt;
    Bt |= 2;
    var a = iy(), r = ay();
    Kt !== t || _t !== e ? (rr = null, or = Me() + 500, ol(t, e)) : el = Ll(
      t,
      e
    );
    t: do
      try {
        if (kt !== 0 && Nt !== null) {
          e = Nt;
          var u = Pe;
          e: switch (kt) {
            case 1:
              kt = 0, Pe = null, rl(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (sp(u)) {
                kt = 0, Pe = null, sy(e);
                break;
              }
              e = function() {
                kt !== 2 && kt !== 9 || Kt !== t || (kt = 7), Ln(t);
              }, u.then(e, e);
              break t;
            case 3:
              kt = 7;
              break t;
            case 4:
              kt = 5;
              break t;
            case 7:
              sp(u) ? (kt = 0, Pe = null, sy(e)) : (kt = 0, Pe = null, rl(t, e, u, 7));
              break;
            case 5:
              var h = null;
              switch (Nt.tag) {
                case 26:
                  h = Nt.memoizedState;
                case 5:
                case 27:
                  var b = Nt;
                  if (h ? Iy(h) : b.stateNode.complete) {
                    kt = 0, Pe = null;
                    var E = b.sibling;
                    if (E !== null) Nt = E;
                    else {
                      var V = b.return;
                      V !== null ? (Nt = V, dr(V)) : Nt = null;
                    }
                    break e;
                  }
              }
              kt = 0, Pe = null, rl(t, e, u, 5);
              break;
            case 6:
              kt = 0, Pe = null, rl(t, e, u, 6);
              break;
            case 8:
              of(), ie = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        fx();
        break;
      } catch (k) {
        ey(t, k);
      }
    while (!0);
    return Fn = Wi = null, ot.H = a, ot.A = r, Bt = n, Nt !== null ? 0 : (Kt = null, _t = 0, vo(), ie);
  }
  function fx() {
    for (; Nt !== null && !du(); )
      ly(Nt);
  }
  function ly(t) {
    var e = Tg(t.alternate, t, ei);
    t.memoizedProps = t.pendingProps, e === null ? dr(t) : Nt = e;
  }
  function sy(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = mg(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          _t
        );
        break;
      case 11:
        e = mg(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          _t
        );
        break;
      case 5:
        mc(e);
        var a = e;
        a === pe && (Dt ? (Ao(a), a.tag === 5 && a.stateNode != null && (Ft = a.stateNode)) : (Ao(a), Dt = !0));
      default:
        Eg(n, e), e = Nt = Fm(e, ei), e = Tg(n, e, ei);
    }
    t.memoizedProps = t.pendingProps, e === null ? dr(t) : Nt = e;
  }
  function rl(t, e, n, a) {
    Fn = Wi = null, mc(e), Ka = null, ts = 0;
    var r = e.return;
    try {
      if (WT(
        t,
        r,
        e,
        n,
        _t
      )) {
        ie = 1, Xo(
          t,
          ln(n, t.current)
        ), Nt = null;
        return;
      }
    } catch (u) {
      if (r !== null) throw Nt = r, u;
      ie = 1, Xo(
        t,
        ln(n, t.current)
      ), Nt = null;
      return;
    }
    e.flags & 32768 ? (Dt || a === 1 ? t = !0 : el || (_t & 536870912) !== 0 ? t = !1 : (Ai = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Se.current, a !== null && a.tag === 13 && (a.flags |= 16384))), oy(e, t)) : dr(e);
  }
  function dr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        oy(
          e,
          Ai
        );
        return;
      }
      t = e.return;
      var n = nx(
        e.alternate,
        e,
        ei
      );
      if (n !== null) {
        Nt = n;
        return;
      }
      if (e = e.sibling, e !== null) {
        Nt = e;
        return;
      }
      Nt = e = t;
    } while (e !== null);
    ie === 0 && (ie = 5);
  }
  function oy(t, e) {
    do {
      var n = ix(t.alternate, t);
      if (n !== null) {
        n.flags &= 32767, Nt = n;
        return;
      }
      if (n = t.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !e && (t = t.sibling, t !== null)) {
        Nt = t;
        return;
      }
      Nt = t = n;
    } while (t !== null);
    ie = 6, Nt = null;
  }
  function ry(t, e, n, a, r, u, h, b, E, V, k, F) {
    t.cancelPendingCommit = null;
    do
      hr();
    while ($t !== 0);
    if ((Bt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      t === Kt && (Nt = Kt = null, _t = 0), fa = e, yn = t, jn = n, sf = r, Ig = a, dx(
        t,
        e,
        n,
        h,
        b,
        E,
        F
      );
    }
  }
  function dx(t, e, n, a, r, u, h) {
    var b = e.lanes | e.childLanes;
    if (lf = b, b |= Yu, US(
      t,
      n,
      b,
      a,
      r,
      u
    ), al = null, (n & 335544064) === n ? (ll = kT(t), a = 10262) : (ll = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, vx(qi, function() {
      return df(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), Wo = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = ot.T, ot.T = null, r = I.p, I.p = 2, u = Bt, Bt |= 4;
      try {
        ax(t, e, n);
      } finally {
        Bt = u, I.p = r, ot.T = a;
      }
    }
    $t = 1, Wo ? il = Ux(
      h,
      t.containerInfo,
      ll,
      uf,
      cf,
      mx,
      ff,
      df,
      hx
    ) : (uf(), cf(), ff());
  }
  function hx(t) {
    if ($t !== 0) {
      var e = yn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function mx() {
    $t === 3 && ($t = 0, Xg(fa, yn), $t = 4);
  }
  function uf() {
    if ($t === 1) {
      $t = 0;
      var t = yn, e = fa, n = jn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = ot.T, ot.T = null;
        var r = I.p;
        I.p = 2;
        var u = Bt;
        Bt |= 4;
        try {
          ds = er = !1, Yg(e, t, n), n = Af;
          var h = Hm(t.containerInfo), b = n.focusedElem, E = n.selectionRange;
          if (h !== b && b && b.ownerDocument && Um(
            b.ownerDocument.documentElement,
            b
          )) {
            if (E !== null && Bu(b)) {
              var V = E.start, k = E.end;
              if (k === void 0 && (k = V), "selectionStart" in b)
                b.selectionStart = V, b.selectionEnd = Math.min(
                  k,
                  b.value.length
                );
              else {
                var F = b.ownerDocument || document, R = F && F.defaultView || window;
                if (R.getSelection) {
                  var U = R.getSelection(), ct = b.textContent.length, pt = Math.min(E.start, ct), Ct = E.end === void 0 ? pt : Math.min(E.end, ct);
                  !U.extend && pt > Ct && (h = Ct, Ct = pt, pt = h);
                  var _ = Bm(
                    b,
                    pt
                  ), D = Bm(
                    b,
                    Ct
                  );
                  if (_ && D && (U.rangeCount !== 1 || U.anchorNode !== _.node || U.anchorOffset !== _.offset || U.focusNode !== D.node || U.focusOffset !== D.offset)) {
                    var L = F.createRange();
                    L.setStart(_.node, _.offset), U.removeAllRanges(), pt > Ct ? (U.addRange(L), U.extend(D.node, D.offset)) : (L.setEnd(D.node, D.offset), U.addRange(L));
                  }
                }
              }
            }
            for (F = [], U = b; U = U.parentNode; )
              U.nodeType === 1 && F.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < F.length; b++) {
              var K = F[b];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          gl = !!Ef, Af = Ef = null;
        } finally {
          Bt = u, I.p = r, ot.T = a;
        }
      }
      t.current = e, $t = 2;
    }
  }
  function cf() {
    if ($t === 2) {
      $t = 0;
      var t = yn, e = fa, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = ot.T, ot.T = null;
        var a = I.p;
        I.p = 2;
        var r = Bt;
        Bt |= 4;
        try {
          Lg(t, e.alternate, e);
        } finally {
          Bt = r, I.p = a, ot.T = n;
        }
      }
      $t = 3;
    }
  }
  function ff() {
    if ($t === 4 || $t === 3) {
      $t = 0;
      var t = il;
      il = null, hu();
      var e = yn, n = fa, a = jn, r = Ig, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? $t = 5 : ($t = 0, fa = yn = null, uy(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (Ci = null), bu(a), n = n.stateNode, Ye && typeof Ye.onCommitFiberRoot == "function")
        try {
          Ye.onCommitFiberRoot(
            jl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (r !== null) {
        n = ot.T, u = I.p, I.p = 2, ot.T = null;
        try {
          for (var h = e.onRecoverableError, b = 0; b < r.length; b++) {
            var E = r[b];
            h(E.value, {
              componentStack: E.stack
            });
          }
        } finally {
          ot.T = n, I.p = u;
        }
      }
      if (r = al, h = ll, ll = null, r !== null && (al = null, h === null && (h = []), t !== null))
        for (E = 0; E < r.length; E++)
          n = (0, r[E])(
            h
          ), n !== void 0 && t.finished.finally(n);
      (jn & 3) !== 0 && hr(), Ln(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === ur ? gs++ : (gs = 0, ur = e) : (gs = 0, ur = null), ys(0);
    }
  }
  function uy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Il(e)));
  }
  function hr() {
    return il !== null && (il.skipTransition(), il = null), uf(), cf(), ff(), df();
  }
  function df() {
    if ($t !== 5) return !1;
    var t = yn, e = lf;
    lf = 0;
    var n = bu(jn), a = ot.T, r = I.p;
    try {
      I.p = 32 > n ? 32 : n, ot.T = null, n = sf, sf = null;
      var u = yn, h = jn;
      if ($t = 0, fa = yn = null, jn = 0, (Bt & 6) !== 0) throw Error(o(331));
      var b = Bt;
      if (Bt |= 4, Pg(u.current), Qg(
        u,
        u.current,
        h,
        n
      ), Bt = b, ys(0, !1), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        try {
          Ye.onPostCommitFiberRoot(jl, u);
        } catch {
        }
      return !0;
    } finally {
      I.p = r, ot.T = a, uy(t, e);
    }
  }
  function cy(t, e, n) {
    e = ln(n, e), e = Dc(t.stateNode, e, 2), t = vi(t, e, 2), t !== null && (Bl(t, 2), Ln(t));
  }
  function Gt(t, e, n) {
    if (t.tag === 3)
      cy(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          cy(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ci === null || !Ci.has(a))) {
            t = ln(n, t), n = sg(2), a = vi(e, n, 2), a !== null && (og(
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
  function hf(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new ox();
      var r = /* @__PURE__ */ new Set();
      a.set(e, r);
    } else
      r = a.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), a.set(e, r));
    r.has(n) || (nf = !0, r.add(n), t = px.bind(null, t, e, n), e.then(t, t));
  }
  function px(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Kt === t && (_t & n) === n && ((ie === 4 || ie === 3 && (_t & 62914560) === _t && 300 > Me() - sr) && (Bt & 2) === 0 ? ol(t, 0) : lr |= n, nl === _t && (nl = 0)), Ln(t);
  }
  function fy(t, e) {
    e === 0 && (e = Jh()), t = Fi(t, e), t !== null && (Bl(t, e), Ln(t));
  }
  function gx(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), fy(t, n);
  }
  function yx(t, e) {
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
    a !== null && a.delete(e), fy(t, n);
  }
  function vx(t, e) {
    return Ol(t, e);
  }
  var ul = null, cl = null, mf = !1, mr = !1, pf = !1, Di = 0;
  function Ln(t) {
    t !== cl && t.next === null && (cl === null ? ul = cl = t : cl = cl.next = t), mr = !0, mf || (mf = !0, Sx());
  }
  function ys(t, e) {
    if (!pf && mr) {
      pf = !0;
      do
        for (var n = !1, a = ul; a !== null; ) {
          if (t !== 0) {
            var r = a.pendingLanes;
            if (r === 0) var u = 0;
            else {
              var h = a.suspendedLanes, b = a.pingedLanes;
              u = (1 << 31 - qe(42 | t) + 1) - 1, u &= r & ~(h & ~b), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, py(a, u));
          } else
            u = _t, u = ao(
              a,
              a === Kt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Ll(a, u) || (n = !0, py(a, u));
          a = a.next;
        }
      while (n);
      pf = !1;
    }
  }
  function bx() {
    dy();
  }
  function dy() {
    mr = mf = !1;
    var t = 0;
    Di !== 0 && Nx() && (t = Di);
    for (var e = Me(), n = null, a = ul; a !== null; ) {
      var r = a.next, u = hy(a, e);
      u === 0 ? (a.next = null, n === null ? ul = r : n.next = r, r === null && (cl = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (mr = !0)), a = r;
    }
    $t !== 0 && $t !== 5 || ys(t), Di !== 0 && (Di = 0);
  }
  function hy(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, r = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var h = 31 - qe(u), b = 1 << h, E = r[h];
      E === -1 ? ((b & n) === 0 || (b & a) !== 0) && (r[h] = BS(b, e)) : E <= e && (t.expiredLanes |= b), u &= ~b;
    }
    if (e = Kt, n = _t, n = ao(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (kt === 2 || kt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Nl(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Ll(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Nl(a), bu(n)) {
        case 2:
        case 8:
          n = _l;
          break;
        case 32:
          n = qi;
          break;
        case 268435456:
          n = Vl;
          break;
        default:
          n = qi;
      }
      return a = my.bind(null, t), n = Ol(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Nl(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function my(t, e) {
    if ($t !== 0 && $t !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (hr() && t.callbackNode !== n)
      return null;
    var a = _t;
    return a = ao(
      t,
      t === Kt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : ($g(t, a, e), hy(t, Me()), t.callbackNode != null && t.callbackNode === n ? my.bind(null, t) : null);
  }
  function py(t, e) {
    if (hr()) return null;
    $g(t, e, !0);
  }
  function Sx() {
    _x(function() {
      (Bt & 6) !== 0 ? Ol(
        Rl,
        bx
      ) : dy();
    });
  }
  function gf() {
    if (Di === 0) {
      var t = ea;
      t === 0 && (t = eo, eo <<= 1, (eo & 261888) === 0 && (eo = 256)), Di = t;
    }
    return Di;
  }
  function gy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : uo(t);
  }
  function Tx(t, e, n, a, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var u = gy(
        (r[je] || null).action
      ), h = a.submitter;
      h && (e = (e = h[je] || null) ? gy(e.formAction) : h.getAttribute("formAction"), e !== null && (u = e, h = null));
      var b = new mo(
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
                if (Di !== 0) {
                  var E = new FormData(r, h);
                  Ec(
                    n,
                    {
                      pending: !0,
                      data: E,
                      method: r.method,
                      action: u
                    },
                    null,
                    E
                  );
                }
              } else
                typeof u == "function" && (b.preventDefault(), E = new FormData(r, h), Ec(
                  n,
                  {
                    pending: !0,
                    data: E,
                    method: r.method,
                    action: u
                  },
                  u,
                  E
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var yf = 0; yf < Gu.length; yf++) {
    var vf = Gu[yf], xx = vf.toLowerCase(), Ex = vf[0].toUpperCase() + vf.slice(1);
    hn(
      xx,
      "on" + Ex
    );
  }
  hn(Ym, "onAnimationEnd"), hn(qm, "onAnimationIteration"), hn(Xm, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(RT, "onTransitionRun"), hn(_T, "onTransitionStart"), hn(VT, "onTransitionCancel"), hn(Qm, "onTransitionEnd"), Ra("onMouseEnter", ["mouseout", "mouseover"]), Ra("onMouseLeave", ["mouseout", "mouseover"]), Ra("onPointerEnter", ["pointerout", "pointerover"]), Ra("onPointerLeave", ["pointerout", "pointerover"]), Zi(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Zi(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Zi("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Zi(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Zi(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Zi(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var vs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Ax = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vs)
  );
  function yy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], r = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var h = a.length - 1; 0 <= h; h--) {
            var b = a[h], E = b.instance, V = b.currentTarget;
            if (b = b.listener, E !== u && r.isPropagationStopped())
              break t;
            u = b, r.currentTarget = V;
            try {
              u(r);
            } catch (k) {
              yo(k);
            }
            r.currentTarget = null, u = E;
          }
        else
          for (h = 0; h < a.length; h++) {
            if (b = a[h], E = b.instance, V = b.currentTarget, b = b.listener, E !== u && r.isPropagationStopped())
              break t;
            u = b, r.currentTarget = V;
            try {
              u(r);
            } catch (k) {
              yo(k);
            }
            r.currentTarget = null, u = E;
          }
      }
    }
  }
  function Rt(t, e) {
    var n = e[nm];
    n === void 0 && (n = e[nm] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (vy(e, t, 2, !1), n.add(a));
  }
  function bf(t, e, n) {
    var a = 0;
    e && (a |= 4), vy(
      n,
      t,
      a,
      e
    );
  }
  var pr = "_reactListening" + Math.random().toString(36).slice(2);
  function Sf(t) {
    if (!t[pr]) {
      t[pr] = !0, lm.forEach(function(n) {
        n !== "selectionchange" && (Ax.has(n) || bf(n, !1, t), bf(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[pr] || (e[pr] = !0, bf("selectionchange", !1, e));
    }
  }
  function vy(t, e, n, a) {
    switch (ov(e)) {
      case 2:
        var r = gE;
        break;
      case 8:
        r = yE;
        break;
      default:
        r = kf;
    }
    n = r.bind(
      null,
      e,
      n,
      t
    ), r = void 0, !Mu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), a ? r !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
      passive: r
    }) : t.addEventListener(e, n, !1);
  }
  function Tf(t, e, n, a, r) {
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
              var E = h.tag;
              if ((E === 3 || E === 4) && h.stateNode.containerInfo === r)
                return;
              h = h.return;
            }
          for (; b !== null; ) {
            if (h = Qi(b), h === null) return;
            if (E = h.tag, E === 5 || E === 6 || E === 26 || E === 27) {
              a = u = h;
              continue t;
            }
            b = b.parentNode;
          }
        }
        a = a.return;
      }
    vm(function() {
      var V = u, k = wu(n), F = [];
      t: {
        var R = Zm.get(t);
        if (R !== void 0) {
          var U = mo, ct = t;
          switch (t) {
            case "keypress":
              if (fo(n) === 0) break t;
            case "keydown":
            case "keyup":
              U = rT;
              break;
            case "focusin":
              ct = "focus", U = Nu;
              break;
            case "focusout":
              ct = "blur", U = Nu;
              break;
            case "beforeblur":
            case "afterblur":
              U = Nu;
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
              U = Tm;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = JS;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = hT;
              break;
            case Ym:
            case qm:
            case Xm:
              U = $S;
              break;
            case Qm:
              U = pT;
              break;
            case "scroll":
            case "scrollend":
              U = PS;
              break;
            case "wheel":
              U = yT;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = eT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Em;
              break;
            case "submit":
              U = fT;
              break;
            case "toggle":
            case "beforetoggle":
              U = bT;
          }
          var pt = (e & 4) !== 0, Ct = !pt && (t === "scroll" || t === "scrollend"), _ = pt ? R !== null ? R + "Capture" : null : R;
          pt = [];
          for (var D = V, L; D !== null; ) {
            var K = D;
            if (L = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || L === null || _ === null || (K = kl(D, _), K != null && pt.push(
              bs(D, K, L)
            )), Ct) break;
            D = D.return;
          }
          0 < pt.length && (R = new U(
            R,
            ct,
            null,
            n,
            k
          ), F.push({ event: R, listeners: pt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (U = t === "mouseover" || t === "pointerover", R = t === "mouseout" || t === "pointerout", U && n !== Au && (ct = n.relatedTarget || n.fromElement) && (Qi(ct) || ct[za]))
            break t;
          (R || U) && (ct = k.window === k ? k : (U = k.ownerDocument) ? U.defaultView || U.parentWindow : window, R ? (U = n.relatedTarget || n.toElement, R = V, U = U ? Qi(U) : null, U !== null && (Ct = d(U), pt = U.tag, U !== Ct || pt !== 5 && pt !== 27 && pt !== 6) && (U = null)) : (R = null, U = V), R !== U && (pt = Tm, K = "onMouseLeave", _ = "onMouseEnter", D = "mouse", (t === "pointerout" || t === "pointerover") && (pt = Em, K = "onPointerLeave", _ = "onPointerEnter", D = "pointer"), Ct = R == null ? ct : Hl(R), L = U == null ? ct : Hl(U), ct = new pt(
            K,
            D + "leave",
            R,
            n,
            k
          ), ct.target = Ct, ct.relatedTarget = L, K = null, Qi(k) === V && (pt = new pt(
            _,
            D + "enter",
            U,
            n,
            k
          ), pt.target = L, pt.relatedTarget = Ct, K = pt), Ct = K, pt = R && U ? ut(
            R,
            U,
            wx
          ) : null, R !== null && by(
            F,
            ct,
            R,
            pt,
            !1
          ), U !== null && Ct !== null && by(
            F,
            Ct,
            U,
            pt,
            !0
          )));
        }
        t: {
          if (R = V ? Hl(V) : window, U = R.nodeName && R.nodeName.toLowerCase(), U === "select" || U === "input" && R.type === "file")
            var dt = Nm;
          else if (zm(R))
            if (Rm)
              dt = zT;
            else {
              dt = MT;
              var Vt = CT;
            }
          else
            U = R.nodeName, !U || U.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? V && Eu(V.elementType) && (dt = Nm) : dt = DT;
          if (dt && (dt = dt(t, V))) {
            Om(
              F,
              dt,
              n,
              k
            );
            break t;
          }
          Vt && Vt(t, R, V);
        }
        switch (Vt = V ? Hl(V) : window, t) {
          case "focusin":
            (zm(Vt) || Vt.contentEditable === "true") && (Ua = Vt, Uu = V, Pl = null);
            break;
          case "focusout":
            Pl = Uu = Ua = null;
            break;
          case "mousedown":
            Hu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Hu = !1, km(F, n, k);
            break;
          case "selectionchange":
            if (NT) break;
          case "keydown":
          case "keyup":
            km(F, n, k);
        }
        var St;
        if (_u)
          t: {
            switch (t) {
              case "compositionstart":
                var xt = "onCompositionStart";
                break t;
              case "compositionend":
                xt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                xt = "onCompositionUpdate";
                break t;
            }
            xt = void 0;
          }
        else
          Ba ? Mm(t, n) && (xt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (xt = "onCompositionStart");
        xt && (Am && n.locale !== "ko" && (Ba || xt !== "onCompositionStart" ? xt === "onCompositionEnd" && Ba && (St = bm()) : (ui = k, Du = "value" in ui ? ui.value : ui.textContent, Ba = !0)), Vt = gr(V, xt), 0 < Vt.length && (xt = new xm(
          xt,
          t,
          null,
          n,
          k
        ), F.push({ event: xt, listeners: Vt }), St ? xt.data = St : (St = Dm(n), St !== null && (xt.data = St)))), (St = TT ? xT(t, n) : ET(t, n)) && (xt = gr(V, "onBeforeInput"), 0 < xt.length && (Vt = new xm(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          k
        ), F.push({
          event: Vt,
          listeners: xt
        }), Vt.data = St)), Tx(
          F,
          t,
          V,
          n,
          k
        );
      }
      yy(F, e);
    });
  }
  function bs(t, e, n) {
    return {
      instance: t,
      listener: e,
      currentTarget: n
    };
  }
  function gr(t, e) {
    for (var n = e + "Capture", a = []; t !== null; ) {
      var r = t, u = r.stateNode;
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || u === null || (r = kl(t, n), r != null && a.unshift(
        bs(t, r, u)
      ), r = kl(t, e), r != null && a.push(
        bs(t, r, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function wx(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function by(t, e, n, a, r) {
    for (var u = e._reactName, h = []; n !== null && n !== a; ) {
      var b = n, E = b.alternate, V = b.stateNode;
      if (b = b.tag, E !== null && E === a) break;
      b !== 5 && b !== 26 && b !== 27 || V === null || (E = V, r ? (V = kl(n, u), V != null && h.unshift(
        bs(n, V, E)
      )) : r || (V = kl(n, u), V != null && h.push(
        bs(n, V, E)
      ))), n = n.return;
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var Cx = /\r\n?/g, Mx = /\u0000|\uFFFD/g;
  function Sy(t) {
    return (typeof t == "string" ? t : "" + t).replace(Cx, `
`).replace(Mx, "");
  }
  function Ty(t, e) {
    return e = Sy(e), Sy(t) === e;
  }
  function Yt(t, e, n, a, r, u) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          e === "body" || e === "textarea" && a === "" || Va(t, a);
        else if (typeof a == "number" || typeof a == "bigint")
          e !== "body" && Va(t, "" + a);
        else return;
        break;
      case "className":
        ro(t, "class", a);
        break;
      case "tabIndex":
        ro(t, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ro(t, n, a);
        break;
      case "style":
        gm(t, a, u);
        return;
      case "data":
        if (e !== "object") {
          ro(t, "data", a);
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
        a = uo(a), t.setAttribute(n, a);
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
          typeof u == "function" && (n === "formAction" ? (e !== "input" && Yt(t, e, "name", r.name, r, null), Yt(
            t,
            e,
            "formEncType",
            r.formEncType,
            r,
            null
          ), Yt(
            t,
            e,
            "formMethod",
            r.formMethod,
            r,
            null
          ), Yt(
            t,
            e,
            "formTarget",
            r.formTarget,
            r,
            null
          )) : (Yt(t, e, "encType", r.encType, r, null), Yt(t, e, "method", r.method, r, null), Yt(t, e, "target", r.target, r, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          t.removeAttribute(n);
          break;
        }
        a = uo(a), t.setAttribute(n, a);
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
        n = uo(a), t.setAttributeNS(
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
        Rt("beforetoggle", t), Rt("toggle", t), oo(t, "popover", a);
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
        oo(t, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = ZS.get(n) || n, oo(t, n, a);
        else return;
    }
    Lt = !0;
  }
  function xf(t, e, n, a, r, u) {
    switch (n) {
      case "style":
        gm(t, a, u);
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
        if (!sm.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"), u = n.slice(2, r ? n.length - 7 : void 0), e = t[je] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, r), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, a, r);
              break t;
            }
            Lt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : oo(t, n, a);
          }
        return;
    }
    Lt = !0;
  }
  function Ee(t, e, n) {
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
                  Yt(t, e, u, h, n, null);
              }
          }
        r && Yt(t, e, "srcSet", n.srcSet, n, null), a && Yt(t, e, "src", n.src, n, null);
        return;
      case "input":
        Rt("invalid", t);
        var b = u = h = r = null, E = null, V = null;
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
                  E = k;
                  break;
                case "defaultChecked":
                  V = k;
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
                  Yt(t, e, a, k, n, null);
              }
          }
        dm(
          t,
          u,
          b,
          E,
          V,
          h,
          r,
          !1
        );
        return;
      case "select":
        Rt("invalid", t), a = h = u = null;
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
                Yt(t, e, r, b, n, null);
            }
        e = u, n = h, t.multiple = !!a, e != null ? _a(t, !!a, e, !1) : n != null && _a(t, !!a, n, !0);
        return;
      case "textarea":
        Rt("invalid", t), u = r = a = null;
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
                Yt(t, e, h, b, n, null);
            }
        mm(t, a, r, u);
        return;
      case "option":
        for (E in n)
          n.hasOwnProperty(E) && (a = n[E], a != null) && (E === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Yt(t, e, E, a, n, null));
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
        for (V in n)
          if (n.hasOwnProperty(V) && (a = n[V], a != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Yt(t, e, V, a, n, null);
            }
        return;
      default:
        if (Eu(e)) {
          for (k in n)
            n.hasOwnProperty(k) && (a = n[k], a !== void 0 && xf(
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
      n.hasOwnProperty(b) && (a = n[b], a != null && Yt(t, e, b, a, n, null));
  }
  var Dx = {};
  function zx(t, e, n, a) {
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
        var r = null, u = null, h = null, b = null, E = null, V = null, k = null;
        for (U in n) {
          var F = n[U];
          if (n.hasOwnProperty(U) && F != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                E = F;
              default:
                a.hasOwnProperty(U) || Yt(t, e, U, null, a, F);
            }
        }
        for (var R in a) {
          var U = a[R];
          if (F = n[R], a.hasOwnProperty(R) && (U != null || F != null))
            switch (R) {
              case "type":
                U !== F && (Lt = !0), u = U;
                break;
              case "name":
                U !== F && (Lt = !0), r = U;
                break;
              case "checked":
                U !== F && (Lt = !0), V = U;
                break;
              case "defaultChecked":
                U !== F && (Lt = !0), k = U;
                break;
              case "value":
                U !== F && (Lt = !0), h = U;
                break;
              case "defaultValue":
                U !== F && (Lt = !0), b = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(o(137, e));
                break;
              default:
                U !== F && Yt(
                  t,
                  e,
                  R,
                  U,
                  a,
                  F
                );
            }
        }
        Tu(
          t,
          h,
          b,
          E,
          V,
          k,
          u,
          r
        );
        return;
      case "select":
        U = h = b = R = null;
        for (u in n)
          if (E = n[u], n.hasOwnProperty(u) && E != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = E;
              default:
                a.hasOwnProperty(u) || Yt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  E
                );
            }
        for (r in a)
          if (u = a[r], E = n[r], a.hasOwnProperty(r) && (u != null || E != null))
            switch (r) {
              case "value":
                u !== E && (Lt = !0), R = u;
                break;
              case "defaultValue":
                u !== E && (Lt = !0), b = u;
                break;
              case "multiple":
                u !== E && (Lt = !0), h = u;
              default:
                u !== E && Yt(
                  t,
                  e,
                  r,
                  u,
                  a,
                  E
                );
            }
        e = b, n = h, a = U, R != null ? _a(t, !!n, R, !1) : !!a != !!n && (e != null ? _a(t, !!n, e, !0) : _a(t, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = R = null;
        for (b in n)
          if (r = n[b], n.hasOwnProperty(b) && r != null && !a.hasOwnProperty(b))
            switch (b) {
              case "value":
                break;
              case "children":
                break;
              default:
                Yt(t, e, b, null, a, r);
            }
        for (h in a)
          if (r = a[h], u = n[h], a.hasOwnProperty(h) && (r != null || u != null))
            switch (h) {
              case "value":
                r !== u && (Lt = !0), R = r;
                break;
              case "defaultValue":
                r !== u && (Lt = !0), U = r;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (r != null) throw Error(o(91));
                break;
              default:
                r !== u && Yt(t, e, h, r, a, u);
            }
        hm(t, R, U);
        return;
      case "option":
        for (var ct in n)
          R = n[ct], n.hasOwnProperty(ct) && R != null && !a.hasOwnProperty(ct) && (ct === "selected" ? t.selected = !1 : Yt(
            t,
            e,
            ct,
            null,
            a,
            R
          ));
        for (E in a)
          R = a[E], U = n[E], a.hasOwnProperty(E) && R !== U && (R != null || U != null) && (E === "selected" ? (R !== U && (Lt = !0), t.selected = R && typeof R != "function" && typeof R != "symbol") : Yt(
            t,
            e,
            E,
            R,
            a,
            U
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
          R = n[pt], n.hasOwnProperty(pt) && R != null && !a.hasOwnProperty(pt) && Yt(t, e, pt, null, a, R);
        for (V in a)
          if (R = a[V], U = n[V], a.hasOwnProperty(V) && R !== U && (R != null || U != null))
            switch (V) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(o(137, e));
                break;
              default:
                Yt(
                  t,
                  e,
                  V,
                  R,
                  a,
                  U
                );
            }
        return;
      default:
        if (Eu(e)) {
          for (var Ct in n)
            R = n[Ct], n.hasOwnProperty(Ct) && R !== void 0 && !a.hasOwnProperty(Ct) && xf(
              t,
              e,
              Ct,
              void 0,
              a,
              R
            );
          for (k in a)
            R = a[k], U = n[k], !a.hasOwnProperty(k) || R === U || R === void 0 && U === void 0 || xf(
              t,
              e,
              k,
              R,
              a,
              U
            );
          return;
        }
    }
    for (var _ in n)
      R = n[_], n.hasOwnProperty(_) && R != null && !a.hasOwnProperty(_) && Yt(t, e, _, null, a, R);
    for (F in a)
      R = a[F], U = n[F], !a.hasOwnProperty(F) || R === U || R == null && U == null || Yt(t, e, F, R, a, U);
  }
  function xy(t) {
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
  function Ox() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var r = n[a], u = r.transferSize, h = r.initiatorType, b = r.duration;
        if (u && b && xy(h)) {
          for (h = 0, b = r.responseEnd, a += 1; a < n.length; a++) {
            var E = n[a], V = E.startTime;
            if (V > b) break;
            var k = E.transferSize, F = E.initiatorType;
            k && xy(F) && (E = E.responseEnd, h += k * (E < b ? 1 : (b - V) / (E - V)));
          }
          if (--a, e += 8 * (u + h) / (r.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Ef = null, Af = null;
  function Ss(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ey(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ay(t, e) {
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
  function wy(t, e, n, a) {
    return n = Ss(
      n
    ).createElement(t), n[ve] = a, n[je] = e, Ee(n, t, e), me(n), n;
  }
  function wf(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Cf = null;
  function Nx() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Cf ? !1 : (Cf = t, !0) : (Cf = null, !1);
  }
  var Mf = typeof setTimeout == "function" ? setTimeout : void 0, Rx = typeof clearTimeout == "function" ? clearTimeout : void 0, Cy = typeof Promise == "function" ? Promise : void 0, My = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Mf, _x = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cy < "u" ? function(t) {
    return Cy.resolve(null).then(t).catch(Vx);
  } : Mf;
  function Vx(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function zi(t) {
    return t === "head";
  }
  function Dy(t, e) {
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
          jf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, jf(n);
          for (var u = n.firstChild; u; ) {
            var h = u.nextSibling, b = u.nodeName;
            u[Ul] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = h;
          }
        } else
          n === "body" && jf(t.ownerDocument.body);
      n = r;
    } while (n);
    yl(e);
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
  function Oy(t, e, n) {
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
  function Ny(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function jx(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Df(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return jx(e, n, t);
  }
  function Lx(t) {
    return t.documentElement.clientHeight;
  }
  function Bx(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function Ux(t, e, n, a, r, u, h, b, E) {
    var V = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var k = V.startViewTransition({
        update: function() {
          var R = V.defaultView, U = R.navigation && R.navigation.transition, ct = V.fonts.status;
          a();
          var pt = [];
          if (ct === "loaded" && (Lx(V), V.fonts.status === "loading" && pt.push(V.fonts.ready)), ct = pt.length, t !== null)
            for (var Ct = t.suspenseyImages, _ = 0, D = 0; D < Ct.length; D++) {
              var L = Ct[D];
              if (!L.complete) {
                var K = L.getBoundingClientRect();
                if (0 < K.bottom && 0 < K.right && K.top < R.innerHeight && K.left < R.innerWidth) {
                  if (_ += Wy(L), _ > br) {
                    pt.length = ct;
                    break;
                  }
                  L = new Promise(
                    Bx.bind(L)
                  ), pt.push(L);
                }
              }
            }
          if (0 < pt.length)
            return R = Promise.race([
              Promise.all(pt),
              new Promise(function(dt) {
                return setTimeout(dt, 500);
              })
            ]).then(r, r), (U ? Promise.allSettled([U.finished, R]) : R).then(u, u);
          if (r(), U)
            return U.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      V.__reactViewTransition = k;
      var F = [];
      return k.ready.then(
        function() {
          for (var R = V.documentElement.getAnimations({
            subtree: !0
          }), U = 0; U < R.length; U++) {
            var ct = R[U], pt = ct.effect, Ct = pt.pseudoElement;
            if (Ct != null && Ct.startsWith("::view-transition")) {
              F.push(ct), ct = pt.getKeyframes();
              for (var _ = Ct = void 0, D = !0, L = 0; L < ct.length; L++) {
                var K = ct[L], dt = K.width;
                if (Ct === void 0) Ct = dt;
                else if (Ct !== dt) {
                  D = !1;
                  break;
                }
                if (dt = K.height, _ === void 0) _ = dt;
                else if (_ !== dt) {
                  D = !1;
                  break;
                }
                delete K.width, delete K.height, K.transform === "none" && delete K.transform;
              }
              D && Ct !== void 0 && _ !== void 0 && (pt.setKeyframes(ct), D = getComputedStyle(
                pt.target,
                pt.pseudoElement
              ), D.width !== Ct || D.height !== _) && (D = ct[0], D.width = Ct, D.height = _, D = ct[ct.length - 1], D.width = Ct, D.height = _, pt.setKeyframes(ct));
            }
          }
          h();
        },
        function(R) {
          V.__reactViewTransition === k && (V.__reactViewTransition = null);
          try {
            typeof R == "object" && R !== null && R.name === "InvalidStateError" && (R.message === "View transition was skipped because document visibility state is hidden." || R.message === "Skipping view transition because document visibility state has become hidden." || R.message === "Skipping view transition because viewport size changed." || R.message === "Transition was aborted because of invalid state") && (R = null), R !== null && E(R);
          } finally {
            a(), r(), h();
          }
        }
      ), k.finished.finally(function() {
        for (var R = 0; R < F.length; R++)
          F[R].cancel();
        V.__reactViewTransition === k && (V.__reactViewTransition = null), b();
      }), k;
    } catch {
      return a(), r(), h(), null;
    }
  }
  function da(t, e) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + t + "(" + e + ")";
  }
  da.prototype.animate = function(t, e) {
    return e = typeof e == "number" ? { duration: e } : j({}, e), e.pseudoElement = this._selector, this._scope.animate(t, e);
  }, da.prototype.getAnimations = function() {
    for (var t = this._scope, e = this._selector, n = t.getAnimations({ subtree: !0 }), a = [], r = 0; r < n.length; r++) {
      var u = n[r].effect;
      u !== null && u.target === t && u.pseudoElement === e && a.push(n[r]);
    }
    return a;
  }, da.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ry(t) {
    return {
      name: t,
      group: new da("group", t),
      imagePair: new da("image-pair", t),
      old: new da("old", t),
      new: new da("new", t)
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
      if (Vy(u, t, e, n) === -1) {
        var h = this, b = e;
        n != null && typeof n != "boolean" && n.once === !0 && (b = function(E) {
          h.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, E) : e.handleEvent(E);
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
          Hx,
          t,
          b,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function Hx(t, e, n, a) {
    return A(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  Ie.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = Vy(
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
        kx,
        t,
        n,
        r
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function kx(t, e, n, a) {
    return A(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function fl(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function _y(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function Vy(t, e, n, a) {
    if (t.length === 0) return -1;
    a = _y(a);
    for (var r = 0; r < t.length; r++) {
      var u = t[r];
      if (u.type === e && u.listener === n && _y(u.optionsOrUseCapture) === a)
        return r;
    }
    return -1;
  }
  Ie.prototype.dispatchEvent = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = A(e);
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
      jy,
      t,
      void 0,
      void 0
    );
  };
  function jy(t, e) {
    return t.tag === 6 ? !1 : (t = A(t), Wx(t, e));
  }
  Ie.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      zf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !jy(e[n], t); n--) ;
  };
  function zf(t, e) {
    return e.push(t), !1;
  }
  Ie.prototype.blur = function() {
    var t = S(
      this._fragmentFiber
    );
    t !== null && (t = A(t), t = Ss(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      Gx,
      t,
      void 0,
      void 0
    ));
  };
  function Gx(t, e) {
    return t.tag === 6 ? !1 : (t = A(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ie.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      Yx,
      t,
      void 0,
      void 0
    );
  };
  function Yx(t, e) {
    return t.tag === 6 || (t = A(t), e.observe(t)), !1;
  }
  Ie.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        qx,
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
  function qx(t, e) {
    return t.tag === 6 || (t = A(t), e.unobserve(t)), !1;
  }
  var vn = [], Of = !1;
  function Xx(t, e, n) {
    vn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Of || (Of = !0, $x(function() {
      Of = !1;
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
      Qx,
      t,
      void 0,
      void 0
    ), t;
  };
  function Qx(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = A(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ie.prototype.getRootNode = function(t) {
    var e = S(
      this._fragmentFiber
    );
    return e === null ? this : A(e).getRootNode(t);
  }, Ie.prototype.compareDocumentPosition = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    y(
      this._fragmentFiber.child,
      !1,
      zf,
      n,
      void 0,
      void 0
    );
    var a = A(e);
    if (n.length === 0) {
      if (n = a, C(this._fragmentFiber)) {
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
      return n === t ? r = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = T(e)[1], n === null ? r = Node.DOCUMENT_POSITION_PRECEDING : (t = A(n).compareDocumentPosition(
        t
      ), r = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), r |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = A(n[0]), r = A(n[n.length - 1]);
    var u = C(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = e.compareDocumentPosition(t), b = r.compareDocumentPosition(t), E = h & Node.DOCUMENT_POSITION_CONTAINED_BY || b & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return b = a && u && h & Node.DOCUMENT_POSITION_FOLLOWING && b & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && r === t || E || b ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && r === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Zx(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Zx(t, e, n, a, r) {
    var u = Qi(r);
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === n) && (e = ut(
      n,
      u,
      rt
    ), e === null ? e = !1 : (y(
      e,
      !0,
      B,
      u,
      n
    ), u = w, w = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === a) && (e = ut(
      a,
      u,
      rt
    ), e === null ? e = !1 : (y(
      e,
      !0,
      X,
      u,
      a
    ), u = w, z = w = null, e = u !== null)), e) : !1;
  }
  function Ly(t, e) {
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
      zf,
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
        t = A(a), Ly(t, n);
        return;
      }
      if (a = A(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var r = e[a];
      r.tag === 6 ? (r = A(r), Ly(r, n)) : A(r).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function Kx(t, e) {
    return t = A(t), By(t, e), !1;
  }
  function By(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function Uy(t, e) {
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
        var E = vn[b];
        (E.fragmentInstance !== e || E.observer !== u || E.instance !== t) && (vn[h++] = E);
      }
      vn.length = h, u.observe(t);
    }), By(t, e));
  }
  function Px(t, e) {
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
      typeof u.rootMargin == "string" ? Xx(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function Nf(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Nf(n), so(n);
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
  function Fx(t, e, n, a) {
    for (; t.nodeType === 1; ) {
      var r = n;
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
  function Jx(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = cn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Hy(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = cn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Rf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function _f(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function Ix(t, e) {
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
  var Vf = null;
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
  function Gy(t) {
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
  function Wx(t, e) {
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
  function $x(t) {
    My(function() {
      My(function(e) {
        return t(e);
      });
    });
  }
  function Yy(t, e, n) {
    switch (e = Ss(n), t) {
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
  function qy(t, e, n) {
    for (var a in n) {
      var r = n[a];
      n.hasOwnProperty(a) && r != null && Yt(t, e, a, null, Dx, r);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Cn && (t.onclick = null), so(t);
  }
  function jf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    so(t);
  }
  var fn = /* @__PURE__ */ new Map(), Xy = /* @__PURE__ */ new Set();
  function Ts(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ni = I.d;
  I.d = {
    f: tE,
    r: eE,
    D: nE,
    C: iE,
    L: aE,
    m: lE,
    X: oE,
    S: sE,
    M: rE
  };
  function tE() {
    var t = ni.f(), e = cr();
    return t || e;
  }
  function eE(t) {
    var e = Oa(t);
    e !== null && e.tag === 5 && e.type === "form" ? Zp(e) : ni.r(t);
  }
  var dl = typeof document > "u" ? null : document;
  function Qy(t, e, n) {
    var a = dl;
    if (a && typeof e == "string" && e) {
      var r = nn(e);
      r = 'link[rel="' + t + '"][href="' + r + '"]', typeof n == "string" && (r += '[crossorigin="' + n + '"]'), Xy.has(r) || (Xy.add(r), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(r) === null && (e = a.createElement("link"), Ee(e, "link", t), me(e), a.head.appendChild(e)));
    }
  }
  function nE(t) {
    ni.D(t), Qy("dns-prefetch", t, null);
  }
  function iE(t, e) {
    ni.C(t, e), Qy("preconnect", t, e);
  }
  function aE(t, e, n) {
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
      if (!(fn.has(u) || (t = j(
        {
          rel: "preload",
          href: e === "image" && n && n.imageSrcSet ? void 0 : t,
          as: e
        },
        n
      ), fn.set(u, t), a.querySelector(r) !== null || e === "style" && a.querySelector(xs(u)) || e === "script" && a.querySelector(Es(u))))) {
        var h = a.createElement("link");
        Ee(h, "link", t), e === "style" && (h[lo] = !0, h.onload = h.onerror = function() {
          am(h);
        }), me(h), a.head.appendChild(h);
      }
    }
  }
  function lE(t, e) {
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
      if (!fn.has(u) && (t = j({ rel: "modulepreload", href: t }, e), fn.set(u, t), n.querySelector(r) === null)) {
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
        a = n.createElement("link"), Ee(a, "link", t), me(a), n.head.appendChild(a);
      }
    }
  }
  function sE(t, e, n) {
    ni.S(t, e, n);
    var a = dl;
    if (a && t) {
      var r = Na(a).hoistableStyles, u = hl(t);
      e = e || "default";
      var h = r.get(u);
      if (!h) {
        var b = { loading: 0, preload: null };
        if (h = a.querySelector(
          xs(u)
        ))
          b.loading = 5;
        else {
          t = j(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = fn.get(u)) && Lf(t, n);
          var E = h = a.createElement("link");
          me(E), Ee(E, "link", t), E._p = new Promise(function(V, k) {
            E.onload = V, E.onerror = k;
          }), E.addEventListener("load", function() {
            b.loading |= 1;
          }), E.addEventListener("error", function() {
            b.loading |= 2;
          }), b.loading |= 4, yr(h, e, a);
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
  function oE(t, e) {
    ni.X(t, e);
    var n = dl;
    if (n && t) {
      var a = Na(n).hoistableScripts, r = ml(t), u = a.get(r);
      u || (u = n.querySelector(Es(r)), u || (t = j({ src: t, async: !0 }, e), (e = fn.get(r)) && Bf(t, e), u = n.createElement("script"), me(u), Ee(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(r, u));
    }
  }
  function rE(t, e) {
    ni.M(t, e);
    var n = dl;
    if (n && t) {
      var a = Na(n).hoistableScripts, r = ml(t), u = a.get(r);
      u || (u = n.querySelector(Es(r)), u || (t = j({ src: t, async: !0, type: "module" }, e), (e = fn.get(r)) && Bf(t, e), u = n.createElement("script"), me(u), Ee(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(r, u));
    }
  }
  function Zy(t, e, n, a) {
    var r = (r = Ve.current) ? Ts(r) : null;
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
          }, fn.set(t, u)), uE(
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
  function xs(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function Ky(t) {
    return j({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function uE(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[lo] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[lo] = !0, e.onload = e.onerror = am.bind(null, e), Ee(e, "link", n), me(e), t.head.appendChild(e);
    a.preload = e, e.addEventListener("load", function() {
      return a.loading |= 1;
    }), e.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function ml(t) {
    return '[src="' + nn(t) + '"]';
  }
  function Es(t) {
    return "script[async]" + t;
  }
  function Py(t, e, n) {
    if (e.count++, e.instance === null)
      switch (e.type) {
        case "style":
          var a = t.querySelector(
            'style[data-href~="' + nn(n.href) + '"]'
          );
          if (a)
            return e.instance = a, me(a), a;
          var r = j({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (t.ownerDocument || t).createElement(
            "style"
          ), me(a), Ee(a, "style", r), yr(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          r = hl(n.href);
          var u = t.querySelector(
            xs(r)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, me(u), u;
          a = Ky(n), (r = fn.get(r)) && Lf(a, r), u = (t.ownerDocument || t).createElement("link"), me(u);
          var h = u;
          return h._p = new Promise(function(b, E) {
            h.onload = b, h.onerror = E;
          }), Ee(u, "link", a), e.state.loading |= 4, yr(u, n.precedence, t), e.instance = u;
        case "script":
          return u = ml(n.src), (r = t.querySelector(
            Es(u)
          )) ? (e.instance = r, me(r), r) : (a = n, (r = fn.get(u)) && (a = j({}, n), Bf(a, r)), t = t.ownerDocument || t, r = t.createElement("script"), me(r), Ee(r, "link", a), t.head.appendChild(r), e.instance = r);
        case "void":
          return null;
        default:
          throw Error(o(443, e.type));
      }
    else
      e.type === "stylesheet" && (e.state.loading & 4) === 0 && (a = e.instance, e.state.loading |= 4, yr(a, n.precedence, t));
    return e.instance;
  }
  function yr(t, e, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), r = a.length ? a[a.length - 1] : null, u = r, h = 0; h < a.length; h++) {
      var b = a[h];
      if (b.dataset.precedence === e) u = b;
      else if (u !== r) break;
    }
    u ? u.parentNode.insertBefore(t, u.nextSibling) : (e = n.nodeType === 9 ? n.head : n, e.insertBefore(t, e.firstChild));
  }
  function Lf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Bf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var vr = null;
  function Fy(t, e, n) {
    if (vr === null) {
      var a = /* @__PURE__ */ new Map(), r = vr = /* @__PURE__ */ new Map();
      r.set(n, a);
    } else
      r = vr, a = r.get(n), a || (a = /* @__PURE__ */ new Map(), r.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var u = n[r];
      if (!(u[Ul] || u[ve] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = u.getAttribute(e) || "";
        h = t + h;
        var b = a.get(h);
        b ? b.push(u) : a.set(h, [u]);
      }
    }
    return a;
  }
  function Uf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function cE(t, e, n) {
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
  function Jy(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function Iy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function Wy(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function $y(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += Wy(e), t.suspenseyImages.push(e)), t = hE.bind(t), e.decode().then(t, t));
  }
  function fE(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = hl(a.href), u = e.querySelector(
          xs(r)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = As.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, me(u);
          return;
        }
        u = e.ownerDocument || e, a = Ky(a), (r = fn.get(r)) && Lf(a, r), u = u.createElement("link"), me(u);
        var h = u;
        h._p = new Promise(function(b, E) {
          h.onload = b, h.onerror = E;
        }), Ee(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = As.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var br = 0;
  function dE(t, e) {
    return t.stylesheets && t.count === 0 && Tr(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Tr(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && br === 0 && (br = 62500 * Ox());
      var r = setTimeout(
        function() {
          if (t.waitingForImages = !1, t.count === 0 && (t.stylesheets && Tr(t, t.stylesheets), t.unsuspend)) {
            var u = t.unsuspend;
            t.unsuspend = null, u();
          }
        },
        (t.imgBytes > br ? 50 : 800) + e
      );
      return t.unsuspend = n, function() {
        t.unsuspend = null, clearTimeout(a), clearTimeout(r);
      };
    } : null;
  }
  function tv(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Tr(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function As() {
    this.count--, tv(this);
  }
  function hE() {
    this.imgCount--, tv(this);
  }
  var Sr = null;
  function Tr(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, Sr = /* @__PURE__ */ new Map(), e.forEach(mE, t), Sr = null, As.call(t));
  }
  function mE(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Sr.get(t);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Sr.set(t, n);
        for (var r = t.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < r.length; u++) {
          var h = r[u];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") && (n.set(h.dataset.precedence, h), a = h);
        }
        a && n.set(null, a);
      }
      r = e.instance, h = r.getAttribute("data-precedence"), u = n.get(h) || a, u === a && n.set(null, r), n.set(h, r), this.count++, a = As.bind(this), r.addEventListener("load", a), r.addEventListener("error", a), u ? u.parentNode.insertBefore(r, u.nextSibling) : (t = t.nodeType === 9 ? t.head : t, t.insertBefore(r, t.firstChild)), e.state.loading |= 4;
    }
  }
  var pl = {
    $$typeof: $,
    Provider: null,
    Consumer: null,
    _currentValue: Et,
    _currentValue2: Et,
    _threadCount: 0
  };
  function pE(t, e, n, a, r, u, h, b, E) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = yu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = yu(0), this.hiddenUpdates = yu(null), this.identifierPrefix = a, this.onUncaughtError = r, this.onCaughtError = u, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = E, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ev(t, e, n, a, r, u, h, b, E, V, k, F) {
    return t = new pE(
      t,
      e,
      n,
      h,
      E,
      V,
      k,
      F,
      b
    ), e = 1, u === !0 && (e |= 24), u = Le(3, null, null, e), t.current = u, u.stateNode = t, e = Wu(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, nc(u), t;
  }
  function nv(t) {
    return t ? (t = Ga, t) : Ga;
  }
  function iv(t, e, n, a, r, u) {
    r = nv(r), a.context === null ? a.context = r : a.pendingContext = r, a = yi(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = vi(t, a, e), n !== null && (ke(n, t, e), es(n, t, e));
  }
  function av(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Hf(t, e) {
    av(t, e), (t = t.alternate) && av(t, e);
  }
  function lv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fi(t, 67108864);
      e !== null && ke(e, t, 67108864), Hf(t, 67108864);
    }
  }
  function sv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Je();
      e = vu(e);
      var n = Fi(t, e);
      n !== null && ke(n, t, e), Hf(t, e);
    }
  }
  var gl = !0;
  function gE(t, e, n, a) {
    var r = ot.T;
    ot.T = null;
    var u = I.p;
    try {
      I.p = 2, kf(t, e, n, a);
    } finally {
      I.p = u, ot.T = r;
    }
  }
  function yE(t, e, n, a) {
    var r = ot.T;
    ot.T = null;
    var u = I.p;
    try {
      I.p = 8, kf(t, e, n, a);
    } finally {
      I.p = u, ot.T = r;
    }
  }
  function kf(t, e, n, a) {
    if (gl) {
      var r = Gf(a);
      if (r === null)
        Tf(
          t,
          e,
          a,
          xr,
          n
        ), rv(t, a);
      else if (bE(
        r,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (rv(t, a), e & 4 && -1 < vE.indexOf(t)) {
        for (; r !== null; ) {
          var u = Oa(r);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var h = Xi(u.pendingLanes);
                  if (h !== 0) {
                    var b = u;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; h; ) {
                      var E = 1 << 31 - qe(h);
                      b.entanglements[1] |= E, h &= ~E;
                    }
                    Ln(u), (Bt & 6) === 0 && (or = Me() + 500, ys(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = Fi(u, 2), b !== null && ke(b, u, 2), cr(), Hf(u, 2);
            }
          if (u = Gf(a), u === null && Tf(
            t,
            e,
            a,
            xr,
            n
          ), u === r) break;
          r = u;
        }
        r !== null && a.stopPropagation();
      } else
        Tf(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Gf(t) {
    return t = wu(t), Yf(t);
  }
  var xr = null;
  function Yf(t) {
    if (xr = null, t = Qi(t), t !== null) {
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
    return xr = t, null;
  }
  function ov(t) {
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
        switch (mu()) {
          case Rl:
            return 2;
          case _l:
            return 8;
          case qi:
          case pu:
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
  var qf = !1, Oi = null, Ni = null, Ri = null, ws = /* @__PURE__ */ new Map(), Cs = /* @__PURE__ */ new Map(), _i = [], vE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rv(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Oi = null;
        break;
      case "dragenter":
      case "dragleave":
        Ni = null;
        break;
      case "mouseover":
      case "mouseout":
        Ri = null;
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
  function Ms(t, e, n, a, r, u) {
    return t === null || t.nativeEvent !== u ? (t = {
      blockedOn: e,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [r]
    }, e !== null && (e = Oa(e), e !== null && lv(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t);
  }
  function bE(t, e, n, a, r) {
    switch (e) {
      case "focusin":
        return Oi = Ms(
          Oi,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "dragenter":
        return Ni = Ms(
          Ni,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "mouseover":
        return Ri = Ms(
          Ri,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "pointerover":
        var u = r.pointerId;
        return ws.set(
          u,
          Ms(
            ws.get(u) || null,
            t,
            e,
            n,
            a,
            r
          )
        ), !0;
      case "gotpointercapture":
        return u = r.pointerId, Cs.set(
          u,
          Ms(
            Cs.get(u) || null,
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
  function uv(t) {
    var e = Qi(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = f(n), e !== null) {
            t.blockedOn = e, em(t.priority, function() {
              sv(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, em(t.priority, function() {
              sv(n);
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
  function Er(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length; ) {
      var n = Gf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Au = a, n.target.dispatchEvent(a), Au = null;
      } else
        return e = Oa(n), e !== null && lv(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function cv(t, e, n) {
    Er(t) && n.delete(e);
  }
  function SE() {
    qf = !1, Oi !== null && Er(Oi) && (Oi = null), Ni !== null && Er(Ni) && (Ni = null), Ri !== null && Er(Ri) && (Ri = null), ws.forEach(cv), Cs.forEach(cv);
  }
  function Ar(t, e) {
    t.blockedOn === e && (t.blockedOn = null, qf || (qf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      SE
    )));
  }
  var wr = null;
  function fv(t) {
    wr !== t && (wr = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        wr === t && (wr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], r = t[e + 2];
          if (typeof a != "function") {
            if (Yf(a || n) === null)
              continue;
            break;
          }
          var u = Oa(n);
          u !== null && (t.splice(e, 3), e -= 3, Ec(
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
    function e(E) {
      return Ar(E, t);
    }
    Oi !== null && Ar(Oi, t), Ni !== null && Ar(Ni, t), Ri !== null && Ar(Ri, t), ws.forEach(e), Cs.forEach(e);
    for (var n = 0; n < _i.length; n++) {
      var a = _i[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < _i.length && (n = _i[0], n.blockedOn === null); )
      uv(n), n.blockedOn === null && _i.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var r = n[a], u = n[a + 1], h = r[je] || null;
        if (typeof u == "function")
          h || fv(n);
        else if (h) {
          var b = null;
          if (u && u.hasAttribute("formAction")) {
            if (r = u, h = u[je] || null)
              b = h.formAction;
            else if (Yf(r) !== null) continue;
          } else b = h.action;
          typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), fv(n);
        }
      }
  }
  function dv() {
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
  function Xf(t) {
    this._internalRoot = t;
  }
  Cr.prototype.render = Xf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var n = e.current, a = Je();
    iv(n, a, t, e, null, null);
  }, Cr.prototype.unmount = Xf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      iv(t.current, 2, null, t, null, null), cr(), e[za] = null;
    }
  };
  function Cr(t) {
    this._internalRoot = t;
  }
  Cr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = tm();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < _i.length && e !== 0 && e < _i[n].priority; n++) ;
      _i.splice(n, 0, t), n === 0 && uv(t);
    }
  };
  var hv = l.version;
  if (hv !== "19.3.0")
    throw Error(
      o(
        527,
        hv,
        "19.3.0"
      )
    );
  I.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = g(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var TE = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ot,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mr.isDisabled && Mr.supportsFiber)
      try {
        jl = Mr.inject(
          TE
        ), Ye = Mr;
      } catch {
      }
  }
  return zs.createRoot = function(t, e) {
    if (!c(t)) throw Error(o(299));
    var n = !1, a = "", r = ng, u = ig, h = ag;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (r = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError)), e = ev(
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
      dv
    ), t[za] = e.current, Sf(t), new Xf(e);
  }, zs.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(o(299));
    var a = !1, r = "", u = ng, h = ig, b = ag, E = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (E = n.formState)), e = ev(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      r,
      E,
      u,
      h,
      b,
      dv
    ), e.context = nv(null), n = e.current, a = Je(), a = vu(a), r = yi(a), r.callback = null, vi(n, r, a), n = a, e.current.lanes = n, Bl(e, n), Ln(e), t[za] = e.current, Sf(t), new Cr(e);
  }, zs.version = "19.3.0", zs;
}
var Ev;
function RE() {
  if (Ev) return Zf.exports;
  Ev = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Zf.exports = NE(), Zf.exports;
}
var Dr = RE(), q = eh();
const _E = /* @__PURE__ */ AE(q), VE = /* @__PURE__ */ EE({
  __proto__: null,
  default: _E
}, [q]);
var jE = ab(), LE = Object.defineProperty, nh = (i, l) => LE(i, "name", { value: l, configurable: !0 });
function wd(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
nh(wd, "setRef");
function lb(...i) {
  return (l) => {
    let s = !1;
    const o = i.map((c) => {
      const d = wd(c, l);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const d = o[c];
          typeof d == "function" ? d() : wd(i[c], null);
        }
      };
  };
}
nh(lb, "composeRefs");
function sb(...i) {
  return q.useCallback(lb(...i), i);
}
nh(sb, "useComposedRefs");
var BE = Object.defineProperty, tn = (i, l) => BE(i, "name", { value: l, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function ih(i) {
  const l = q.forwardRef((s, o) => {
    let { children: c, ...d } = s, f = null, m = !1;
    const p = [];
    c = db(c), q.Children.forEach(c, (S) => {
      if (cb(S)) {
        m = !0;
        const C = S;
        let T = "child" in C.props ? C.props.child : C.props.children;
        for (; ah(T) && typeof Qr == "function"; )
          T = Qr(T._payload);
        f = kE(C, T), p.push(f?.props?.children);
      } else
        p.push(S);
    }), f ? f = q.cloneElement(f, void 0, p) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && q.Children.count(c) === 1 && q.isValidElement(c) && (f = c)
    );
    const g = f ? ub(f) : void 0, v = sb(o, g);
    if (!f) {
      if (c || c === 0)
        throw new Error(
          m ? qE(i) : YE(i)
        );
      return c;
    }
    const y = rb(d, f.props ?? {});
    return f.type !== q.Fragment && (y.ref = o ? v : g), q.cloneElement(f, y);
  });
  return l.displayName = `${i}.Slot`, l;
}
tn(ih, "createSlot");
var UE = /* @__PURE__ */ ih("Slot"), ob = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function HE(i) {
  const l = /* @__PURE__ */ tn((s) => "child" in s ? s.children(s.child) : s.children, "Slottable");
  return l.displayName = `${i}.Slottable`, l.__radixId = ob, l;
}
tn(HE, "createSlottable");
var kE = /* @__PURE__ */ tn((i, l) => "child" in i.props ? q.isValidElement(l) ? q.cloneElement(l, void 0, i.props.children(l.props.children)) : null : q.isValidElement(l) ? l : null, "getSlottableElementFromSlottable");
function rb(i, l) {
  const s = { ...l };
  for (const o in l) {
    const c = i[o], d = l[o];
    /^on[A-Z]/.test(o) ? c && d ? s[o] = (...m) => {
      const p = d(...m);
      return c(...m), p;
    } : c && (s[o] = c) : o === "style" ? s[o] = { ...c, ...d } : o === "className" ? s[o] = [c, d].filter(Boolean).join(" ") : o === "aria-describedby" && (s[o] = hb(d, c));
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
  return q.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === ob;
}
tn(cb, "isSlottable");
var GE = /* @__PURE__ */ Symbol.for("react.lazy");
function ah(i) {
  return i != null && typeof i == "object" && "$$typeof" in i && i.$$typeof === GE && "_payload" in i && fb(i._payload);
}
tn(ah, "isLazyComponent");
function fb(i) {
  return typeof i == "object" && i !== null && "then" in i;
}
tn(fb, "isPromiseLike");
function db(i) {
  let l = i;
  for (; ah(l) && typeof Qr == "function"; )
    l = Qr(l._payload);
  return l;
}
tn(db, "useUnwrappedLazy");
function hb(...i) {
  const l = /* @__PURE__ */ new Set();
  for (const s of i)
    if (typeof s == "string")
      for (const o of String(s).trim().split(/\s+/))
        o && l.add(o);
  return l.size > 0 ? Array.from(l).join(" ") : void 0;
}
tn(hb, "concatAriaDescribedby");
var YE = /* @__PURE__ */ tn((i) => `${i} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), qE = /* @__PURE__ */ tn((i) => `${i} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Qr = VE[" use ".trim().toString()], XE = Object.defineProperty, QE = (i, l) => XE(i, "name", { value: l, configurable: !0 }), ZE = [
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
], KE = ZE.reduce((i, l) => {
  const s = /* @__PURE__ */ ih(`Primitive.${l}`), o = q.forwardRef((c, d) => {
    const { asChild: f, ...m } = c, p = f ? s : l;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ O.jsx(p, { ...m, ref: d });
  });
  return o.displayName = `Primitive.${l}`, { ...i, [l]: o };
}, {});
function PE(i, l) {
  i && jE.flushSync(() => i.dispatchEvent(l));
}
QE(PE, "dispatchDiscreteCustomEvent");
var FE = Object.defineProperty, mb = (i, l) => FE(i, "name", { value: l, configurable: !0 }), lh = {
  Horizontal: "horizontal",
  Vertical: "vertical"
}, Av = lh.Horizontal, JE = Object.values(lh), pb = /* @__PURE__ */ q.forwardRef(
  /* @__PURE__ */ mb(function(l, s) {
    const { decorative: o, orientation: c = Av, ...d } = l, f = gb(c) ? c : Av, m = f === lh.Vertical ? f : void 0, p = o ? { role: "none" } : { "aria-orientation": m, role: "separator" };
    return /* @__PURE__ */ O.jsx(
      KE.div,
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
  return JE.includes(i);
}
mb(gb, "isValidOrientation");
function yb(i) {
  var l, s, o = "";
  if (typeof i == "string" || typeof i == "number") o += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var c = i.length;
    for (l = 0; l < c; l++) i[l] && (s = yb(i[l])) && (o && (o += " "), o += s);
  } else for (s in i) i[s] && (o && (o += " "), o += s);
  return o;
}
function vb() {
  for (var i, l, s = 0, o = "", c = arguments.length; s < c; s++) (i = arguments[s]) && (l = yb(i)) && (o && (o += " "), o += l);
  return o;
}
const IE = (i, l) => {
  const s = new Array(i.length + l.length);
  for (let o = 0; o < i.length; o++)
    s[o] = i[o];
  for (let o = 0; o < l.length; o++)
    s[i.length + o] = l[o];
  return s;
}, WE = (i, l) => ({
  classGroupId: i,
  validator: l
}), bb = (i = /* @__PURE__ */ new Map(), l = null, s) => ({
  nextPart: i,
  validators: l,
  classGroupId: s
}), Zr = "-", wv = [], $E = "arbitrary..", tA = (i) => {
  const l = nA(i), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: o
  } = i;
  return {
    getClassGroupId: (f) => {
      if (f.startsWith("[") && f.endsWith("]"))
        return eA(f);
      const m = f.split(Zr), p = m[0] === "" && m.length > 1 ? 1 : 0;
      return Sb(m, p, l);
    },
    getConflictingClassGroupIds: (f, m) => {
      if (m) {
        const p = o[f], g = s[f];
        return p ? g ? IE(g, p) : p : g || wv;
      }
      return s[f] || wv;
    }
  };
}, Sb = (i, l, s) => {
  if (i.length - l === 0)
    return s.classGroupId;
  const c = i[l], d = s.nextPart.get(c);
  if (d) {
    const g = Sb(i, l + 1, d);
    if (g) return g;
  }
  const f = s.validators;
  if (f === null)
    return;
  const m = l === 0 ? i.join(Zr) : i.slice(l).join(Zr), p = f.length;
  for (let g = 0; g < p; g++) {
    const v = f[g];
    if (v.validator(m))
      return v.classGroupId;
  }
}, eA = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const l = i.slice(1, -1), s = l.indexOf(":"), o = l.slice(0, s);
  return o ? $E + o : void 0;
})(), nA = (i) => {
  const {
    theme: l,
    classGroups: s
  } = i;
  return iA(s, l);
}, iA = (i, l) => {
  const s = bb();
  for (const o in i) {
    const c = i[o];
    sh(c, s, o, l);
  }
  return s;
}, sh = (i, l, s, o) => {
  const c = i.length;
  for (let d = 0; d < c; d++) {
    const f = i[d];
    aA(f, l, s, o);
  }
}, aA = (i, l, s, o) => {
  if (typeof i == "string") {
    lA(i, l, s);
    return;
  }
  if (typeof i == "function") {
    sA(i, l, s, o);
    return;
  }
  oA(i, l, s, o);
}, lA = (i, l, s) => {
  const o = i === "" ? l : Tb(l, i);
  o.classGroupId = s;
}, sA = (i, l, s, o) => {
  if (rA(i)) {
    sh(i(o), l, s, o);
    return;
  }
  l.validators === null && (l.validators = []), l.validators.push(WE(s, i));
}, oA = (i, l, s, o) => {
  const c = Object.entries(i), d = c.length;
  for (let f = 0; f < d; f++) {
    const [m, p] = c[f];
    sh(p, Tb(l, m), s, o);
  }
}, Tb = (i, l) => {
  let s = i;
  const o = l.split(Zr), c = o.length;
  for (let d = 0; d < c; d++) {
    const f = o[d];
    let m = s.nextPart.get(f);
    m || (m = bb(), s.nextPart.set(f, m)), s = m;
  }
  return s;
}, rA = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, uA = (i) => {
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
}, Cd = "!", Cv = ":", cA = [], Mv = (i, l, s, o, c) => ({
  modifiers: i,
  hasImportantModifier: l,
  baseClassName: s,
  maybePostfixModifierPosition: o,
  isExternal: c
}), fA = (i) => {
  const {
    prefix: l,
    experimentalParseClassName: s
  } = i;
  let o = (c) => {
    const d = [];
    let f = 0, m = 0, p = 0, g;
    const v = c.length;
    for (let M = 0; M < v; M++) {
      const A = c[M];
      if (f === 0 && m === 0) {
        if (A === Cv) {
          d.push(c.slice(p, M)), p = M + 1;
          continue;
        }
        if (A === "/") {
          g = M;
          continue;
        }
      }
      A === "[" ? f++ : A === "]" ? f-- : A === "(" ? m++ : A === ")" && m--;
    }
    const y = d.length === 0 ? c : c.slice(p);
    let S = y, C = !1;
    y.endsWith(Cd) ? (S = y.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(Cd) && (S = y.slice(1), C = !0)
    );
    const T = g && g > p ? g - p : void 0;
    return Mv(d, C, S, T);
  };
  if (l) {
    const c = l + Cv, d = o;
    o = (f) => f.startsWith(c) ? d(f.slice(c.length)) : Mv(cA, !1, f, void 0, !0);
  }
  if (s) {
    const c = o;
    o = (d) => s({
      className: d,
      parseClassName: c
    });
  }
  return o;
}, dA = (i) => {
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
}, hA = (i) => ({
  cache: uA(i.cacheSize),
  parseClassName: fA(i),
  sortModifiers: dA(i),
  postfixLookupClassGroupIds: mA(i),
  ...tA(i)
}), mA = (i) => {
  const l = /* @__PURE__ */ Object.create(null), s = i.postfixLookupClassGroups;
  if (s)
    for (let o = 0; o < s.length; o++)
      l[s[o]] = !0;
  return l;
}, pA = /\s+/, gA = (i, l) => {
  const {
    parseClassName: s,
    getClassGroupId: o,
    getConflictingClassGroupIds: c,
    sortModifiers: d,
    postfixLookupClassGroupIds: f
  } = l, m = [], p = i.trim().split(pA);
  let g = "";
  for (let v = p.length - 1; v >= 0; v -= 1) {
    const y = p[v], {
      isExternal: S,
      modifiers: C,
      hasImportantModifier: T,
      baseClassName: M,
      maybePostfixModifierPosition: A
    } = s(y);
    if (S) {
      g = y + (g.length > 0 ? " " + g : g);
      continue;
    }
    let w = !!A, z;
    if (w) {
      const j = M.substring(0, A);
      z = o(j);
      const N = z && f[z] ? o(M) : void 0;
      N && N !== z && (z = N, w = !1);
    } else
      z = o(M);
    if (!z) {
      if (!w) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (z = o(M), !z) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      w = !1;
    }
    const B = C.length === 0 ? "" : C.length === 1 ? C[0] : d(C).join(":"), X = T ? B + Cd : B, rt = X + z;
    if (m.indexOf(rt) > -1)
      continue;
    m.push(rt);
    const ut = c(z, w);
    for (let j = 0; j < ut.length; ++j) {
      const N = ut[j];
      m.push(X + N);
    }
    g = y + (g.length > 0 ? " " + g : g);
  }
  return g;
}, yA = (...i) => {
  let l = 0, s, o, c = "";
  for (; l < i.length; )
    (s = i[l++]) && (o = xb(s)) && (c && (c += " "), c += o);
  return c;
}, xb = (i) => {
  if (typeof i == "string")
    return i;
  let l, s = "";
  for (let o = 0; o < i.length; o++)
    i[o] && (l = xb(i[o])) && (s && (s += " "), s += l);
  return s;
}, vA = (i, ...l) => {
  let s, o, c, d;
  const f = (p) => {
    const g = l.reduce((v, y) => y(v), i());
    return s = hA(g), o = s.cache.get, c = s.cache.set, d = m, m(p);
  }, m = (p) => {
    const g = o(p);
    if (g)
      return g;
    const v = gA(p, s);
    return c(p, v), v;
  };
  return d = f, (...p) => d(yA(...p));
}, bA = [], fe = (i) => {
  const l = (s) => s[i] || bA;
  return l.isThemeGetter = !0, l.themeKey = i, l;
}, Eb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Ab = /^\((?:(\w[\w-]*):)?(.+)\)$/i, SA = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, TA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, xA = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, EA = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, AA = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, wA = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ji = (i) => SA.test(i), zt = (i) => !!i && !Number.isNaN(Number(i)), Bn = (i) => !!i && Number.isInteger(Number(i)), If = (i) => i.endsWith("%") && zt(i.slice(0, -1)), ii = (i) => TA.test(i), wb = () => !0, CA = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  xA.test(i) && !EA.test(i)
), oh = () => !1, MA = (i) => AA.test(i), DA = (i) => wA.test(i), zA = (i) => !ht(i) && !mt(i), OA = (i) => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)), NA = (i) => Hi(i, Db, oh), ht = (i) => Eb.test(i), ha = (i) => Hi(i, zb, CA), Dv = (i) => Hi(i, HA, zt), RA = (i) => Hi(i, Nb, wb), _A = (i) => Hi(i, Ob, oh), zv = (i) => Hi(i, Cb, oh), VA = (i) => Hi(i, Mb, DA), zr = (i) => Hi(i, Rb, MA), mt = (i) => Ab.test(i), Os = (i) => Ea(i, zb), jA = (i) => Ea(i, Ob), Ov = (i) => Ea(i, Cb), LA = (i) => Ea(i, Db), BA = (i) => Ea(i, Mb), Or = (i) => Ea(i, Rb, !0), UA = (i) => Ea(i, Nb, !0), Hi = (i, l, s) => {
  const o = Eb.exec(i);
  return o ? o[1] ? l(o[1]) : s(o[2]) : !1;
}, Ea = (i, l, s = !1) => {
  const o = Ab.exec(i);
  return o ? o[1] ? l(o[1]) : s : !1;
}, Cb = (i) => i === "position" || i === "percentage", Mb = (i) => i === "image" || i === "url", Db = (i) => i === "length" || i === "size" || i === "bg-size", zb = (i) => i === "length", HA = (i) => i === "number", Ob = (i) => i === "family-name", Nb = (i) => i === "number" || i === "weight", Rb = (i) => i === "shadow", kA = () => {
  const i = fe("color"), l = fe("font"), s = fe("text"), o = fe("font-weight"), c = fe("tracking"), d = fe("leading"), f = fe("breakpoint"), m = fe("container"), p = fe("spacing"), g = fe("radius"), v = fe("shadow"), y = fe("inset-shadow"), S = fe("text-shadow"), C = fe("drop-shadow"), T = fe("blur"), M = fe("perspective"), A = fe("aspect"), w = fe("ease"), z = fe("animate"), B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], X = () => [
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
  ], rt = () => [...X(), mt, ht], ut = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], N = () => [mt, ht, p], Z = () => [ji, "full", "auto", ...N()], lt = () => [Bn, "none", "subgrid", mt, ht], J = () => ["auto", {
    span: ["full", Bn, mt, ht]
  }, Bn, mt, ht], Q = () => [Bn, "auto", mt, ht], tt = () => ["auto", "min", "max", "fr", mt, ht], W = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], $ = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], G = () => ["auto", ...N()], P = () => [ji, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], et = () => [m, ji, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], st = () => [ji, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], Y = () => [i, mt, ht], yt = () => [...X(), Ov, zv, {
    position: [mt, ht]
  }], bt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], nt = () => ["auto", "cover", "contain", LA, NA, {
    size: [mt, ht]
  }], x = () => [If, Os, ha], H = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    mt,
    ht
  ], it = () => ["", zt, Os, ha], at = () => ["solid", "dashed", "dotted", "double"], vt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ft = () => [zt, If, Ov, zv], Tt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    T,
    mt,
    ht
  ], ot = () => ["none", zt, mt, ht], I = () => ["none", zt, mt, ht], Et = () => [zt, mt, ht], Mt = () => [ji, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ii],
      breakpoint: [ii],
      color: [wb],
      container: [ii],
      "drop-shadow": [ii],
      ease: ["in", "out", "in-out"],
      font: [zA],
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
        aspect: ["auto", "square", ji, ht, mt, A]
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
      "container-named": [OA],
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
        "break-after": B()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": B()
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
        object: rt()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ut()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ut()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ut()
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
        inset: Z()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": Z()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": Z()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": Z(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: Z()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": Z(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: Z()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": Z()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": Z()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: Z()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: Z()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: Z()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: Z()
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
        basis: [ji, "full", "auto", m, ...N()]
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
        flex: [zt, ji, "auto", "initial", "none", ht]
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
        "grid-cols": lt()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: J()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Q()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Q()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": lt()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: J()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Q()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Q()
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
        "auto-cols": tt()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": tt()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: N()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": N()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": N()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...W(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...$(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...$()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...W()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...$(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": W()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...$(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...$()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: N()
      }],
      /**
       * Padding Inline
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: N()
      }],
      /**
       * Padding Block
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: N()
      }],
      /**
       * Padding Inline Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: N()
      }],
      /**
       * Padding Inline End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: N()
      }],
      /**
       * Padding Block Start
       * @see https://tailwindcss.com/docs/padding
       */
      pbs: [{
        pbs: N()
      }],
      /**
       * Padding Block End
       * @see https://tailwindcss.com/docs/padding
       */
      pbe: [{
        pbe: N()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: N()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: N()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: N()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: N()
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
        "space-x": N()
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
        "space-y": N()
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
        size: P()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ...et()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...et()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...et()]
      }],
      /**
       * Block Size
       * @see https://tailwindcss.com/docs/block-size
       */
      "block-size": [{
        block: ["auto", ...st()]
      }],
      /**
       * Min-Block Size
       * @see https://tailwindcss.com/docs/min-block-size
       */
      "min-block-size": [{
        "min-block": ["auto", ...st()]
      }],
      /**
       * Max-Block Size
       * @see https://tailwindcss.com/docs/max-block-size
       */
      "max-block-size": [{
        "max-block": ["none", ...st()]
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [m, "screen", ...P()]
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
          ...P()
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
          ...P()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...P()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...P()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...P()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, Os, ha]
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
        font: [o, UA, RA]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", If, ht]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [jA, _A, l]
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
        "line-clamp": [zt, "none", mt, Dv]
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
          ...N()
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
        decoration: [...at(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [zt, "from-font", "auto", mt, ha]
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
        indent: N()
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
        bg: bt()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: nt()
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
        }, BA, VA]
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
        rounded: H()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": H()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": H()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": H()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": H()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": H()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": H()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": H()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": H()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": H()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": H()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": H()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": H()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": H()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": H()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: it()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": it()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": it()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": it()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": it()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": it()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": it()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": it()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": it()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": it()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": it()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": it()
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
        "divide-y": it()
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
        border: [...at(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...at(), "hidden", "none"]
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
        outline: [...at(), "none", "hidden"]
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
        outline: ["", zt, Os, ha]
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
          Or,
          zr
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
        "inset-shadow": ["none", y, Or, zr]
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
        ring: it()
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
        "ring-offset": [zt, ha]
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
        "inset-ring": it()
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
        "text-shadow": ["none", S, Or, zr]
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
        "mix-blend": [...vt(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": vt()
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
        "mask-linear-from": ft()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": ft()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": Y()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": Y()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": ft()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": ft()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": Y()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": Y()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": ft()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": ft()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": Y()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": Y()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": ft()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": ft()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": Y()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": Y()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": ft()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": ft()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": Y()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": Y()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": ft()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": ft()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": Y()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": Y()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": ft()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": ft()
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
        "mask-radial-from": ft()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": ft()
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
        "mask-radial-at": X()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [zt]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": ft()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": ft()
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
        mask: bt()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: nt()
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
        blur: Tt()
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
          C,
          Or,
          zr
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
        "backdrop-blur": Tt()
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
        "border-spacing": N()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": N()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": N()
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
        ease: ["linear", "initial", w, mt, ht]
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
        animate: ["none", z, mt, ht]
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
        perspective: [M, mt, ht]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": rt()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: ot()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": ot()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": ot()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": ot()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: I()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": I()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": I()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": I()
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
        skew: Et()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": Et()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": Et()
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
        origin: rt()
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
        translate: Mt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Mt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Mt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Mt()
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
        "scroll-m": N()
      }],
      /**
       * Scroll Margin Inline
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": N()
      }],
      /**
       * Scroll Margin Block
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": N()
      }],
      /**
       * Scroll Margin Inline Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": N()
      }],
      /**
       * Scroll Margin Inline End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": N()
      }],
      /**
       * Scroll Margin Block Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbs": [{
        "scroll-mbs": N()
      }],
      /**
       * Scroll Margin Block End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mbe": [{
        "scroll-mbe": N()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": N()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": N()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": N()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": N()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": N()
      }],
      /**
       * Scroll Padding Inline
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": N()
      }],
      /**
       * Scroll Padding Block
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": N()
      }],
      /**
       * Scroll Padding Inline Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": N()
      }],
      /**
       * Scroll Padding Inline End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": N()
      }],
      /**
       * Scroll Padding Block Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbs": [{
        "scroll-pbs": N()
      }],
      /**
       * Scroll Padding Block End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pbe": [{
        "scroll-pbe": N()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": N()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": N()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": N()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": N()
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
        stroke: [zt, Os, ha, Dv]
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
}, GA = /* @__PURE__ */ vA(kA);
function Aa(...i) {
  return GA(vb(i));
}
const _b = q.forwardRef(({ className: i, orientation: l = "horizontal", decorative: s = !0, ...o }, c) => /* @__PURE__ */ O.jsx(pb, { ref: c, decorative: s, orientation: l, className: Aa("vt:shrink-0 vt:bg-border", l === "horizontal" ? "vt:h-px vt:w-full" : "vt:h-full vt:w-px", i), ...o }));
_b.displayName = pb.displayName;
const YA = (i) => i?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function qA(i, l, s = []) {
  if (l == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: YA(i),
    size: 24,
    node: l,
    ...s.length > 0 ? { aliases: s } : {}
  };
}
const XA = (i) => {
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
const QA = (i) => {
  const l = XA(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
const Md = (...i) => i.filter((l, s, o) => !!l && l.trim() !== "" && o.indexOf(l) === s).join(" ").trim();
const ma = {
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
function Wf(i) {
  return i != null;
}
function ZA(i, l = {}) {
  const s = l.attributeNames ?? {}, o = (S) => s[S] ?? S, c = i.size ?? i.width ?? ma.width, d = i.size ?? i.height ?? ma.height, f = i.aliases?.filter((S) => typeof S == "string" && S.trim() !== "").map((S) => `lucide-${S}`) ?? [], m = [...i.name ? [`lucide-${i.name}`] : [], ...f], p = l.className?.split(" ").filter(Boolean) ?? [], g = l.includeDefaultClasses === !1 ? Md(...p) : Md("lucide", ...m, ...p), v = l.absoluteStrokeWidth ? Number(l.strokeWidth ?? ma["stroke-width"]) * Number(i.size ?? i.width ?? ma.width) / Number(l.size ?? l.width ?? ma.width) : l.strokeWidth ?? ma["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(ma).reduce((S, [C, T]) => (S[o(C)] = T, S), {}),
      ..."color" in l && l.color && {
        [o("stroke")]: l.color
      },
      ..."size" in l && Wf(l.size) && {
        [o("width")]: l.size,
        [o("height")]: l.size
      },
      ..."width" in l && Wf(l.width) && {
        [o("width")]: l.width
      },
      ..."height" in l && Wf(l.height) && {
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
      const [C, T, M] = S, A = l.nonScalingStroke ? { [o("vector-effect")]: "non-scaling-stroke", ...T } : T;
      return M ? [C, A, M] : [C, A];
    })
  ];
}
function KA(i, l = {}) {
  return ZA(i, {
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
const PA = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
}, FA = q.createContext({}), JA = () => q.useContext(FA), IA = q.forwardRef(
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
      size: C = 24,
      strokeWidth: T = 2,
      absoluteStrokeWidth: M = !1,
      nonScalingStroke: A = !1,
      color: w = "currentColor",
      className: z = ""
    } = JA() ?? {}, B = !!p || PA(y), [X, rt, ut = []] = KA(v, {
      color: i ?? w,
      width: s ?? l ?? C,
      height: o ?? l ?? C,
      strokeWidth: c ?? T,
      absoluteStrokeWidth: d ?? M,
      nonScalingStroke: f ?? A,
      className: Md(z, m),
      hasA11yProp: B,
      attributes: y
    });
    return q.createElement(
      X,
      {
        ref: S,
        ...rt
      },
      [
        ...ut.map(([j, N]) => q.createElement(j, N)),
        ...Array.isArray(p) ? p : [p]
      ]
    );
  }
);
function wa(i, l = [], s = []) {
  const o = typeof i == "string" ? qA(i, l, s) : i, c = q.forwardRef(
    ({ className: d, ...f }, m) => q.createElement(IA, {
      ref: m,
      icon: o,
      className: d,
      ...f
    })
  );
  return o.name && (c.displayName = QA(o.name)), c;
}
const Vb = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
Vb.node;
const WA = wa(Vb);
const jb = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
jb.node;
const Kr = wa(jb);
const Lb = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
Lb.node;
const rh = wa(Lb);
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
const $A = wa(Bb);
const Ub = {
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
Ub.node;
const t2 = wa(Ub);
const Hb = {
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
Hb.node;
const kb = wa(Hb);
const Gb = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
Gb.node;
const e2 = wa(Gb), Yb = q.createContext({});
function n2(i) {
  const l = q.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const i2 = typeof window < "u", Nv = i2 ? q.useLayoutEffect : q.useEffect, uh = /* @__PURE__ */ q.createContext(null);
function ch(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function Pr(i, l) {
  const s = i.indexOf(l);
  s > -1 && i.splice(s, 1);
}
const kn = (i, l, s) => s > l ? l : s < i ? i : s;
let su = () => {
};
const Hn = {}, fh = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), qb = (i) => typeof i == "object" && i !== null, dh = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function Xb(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const En = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Fs = (...i) => i.reduce((l, s) => (o) => s(l(o))), Ta = /* @__NO_SIDE_EFFECTS__ */ (i, l, s) => {
  const o = l - i;
  return o ? (s - i) / o : 1;
};
class Fr {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return ch(this.subscriptions, l), () => this.remove(l);
  }
  remove(l) {
    Pr(this.subscriptions, l);
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
const dn = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, We = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, Qb = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, $f = (i, l, s) => i * (3 * (1 - i) * ((1 - i) * l + i * s) + i * i);
// @__NO_SIDE_EFFECTS__
function Js(i, l, s, o) {
  return i === l && s === o ? En : (c) => {
    let d = 0, f = 1, m = c;
    for (let p = 0; ; p++) {
      m >= d && m <= f || (m = (d + f) / 2);
      const g = $f(m, i, s) - c;
      if (g * g < 1e-28 || p === 40)
        break;
      g > 0 ? f = m : d = m, m -= g * 1e-7 / ($f(m + 1e-7, i, s) - c - g);
    }
    return $f(m, l, o);
  };
}
const Zb = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, Kb = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), Pb = /* @__PURE__ */ Js(0.33, 1.53, 0.69, 0.99), hh = /* @__PURE__ */ Kb(Pb), Fb = /* @__PURE__ */ Zb(hh), Jb = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * hh(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), mh = (i) => 1 - Math.sin(Math.acos(i)), Ib = /* @__PURE__ */ Kb(mh), Wb = /* @__PURE__ */ Zb(mh), a2 = /* @__PURE__ */ Js(0.42, 0, 1, 1), l2 = /* @__PURE__ */ Js(0, 0, 0.58, 1), ph = /* @__PURE__ */ Js(0.42, 0, 0.58, 1), s2 = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", gh = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", o2 = {
  linear: En,
  easeIn: a2,
  easeInOut: ph,
  easeOut: l2,
  circIn: mh,
  circInOut: Wb,
  circOut: Ib,
  backIn: hh,
  backInOut: Fb,
  backOut: Pb,
  anticipate: Jb
}, r2 = (i) => typeof i == "string", Rv = (i) => {
  if (/* @__PURE__ */ gh(i)) {
    su(i.length === 4);
    const [l, s, o, c] = i;
    return /* @__PURE__ */ Js(l, s, o, c);
  } else if (r2(i))
    return o2[i];
  return i;
}, ue = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let Lr;
function u2() {
  Lr = void 0;
}
const ee = {
  now: () => (Lr === void 0 && ee.set(ue.isProcessing || Hn.useManualTiming ? ue.timestamp : performance.now()), Lr),
  set: (i) => {
    Lr = i, queueMicrotask(u2);
  }
}, Al = (i) => Math.round(i * 1e5) / 1e5, $b = (i) => (l) => typeof l == "string" && l.startsWith(i), t1 = /* @__PURE__ */ $b("--"), c2 = /* @__PURE__ */ $b("var(--"), yh = (i) => c2(i) ? f2.test(i.split("/*")[0].trim()) : !1, f2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function td(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const Ml = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Ls = {
  ...Ml,
  transform: (i) => kn(0, 1, i)
}, Nr = {
  ...Ml,
  default: 1
}, vh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function d2(i) {
  return i == null;
}
const h2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, bh = (i, l) => (s) => !!(typeof s == "string" && h2.test(s) && s.startsWith(i) || l && !d2(s) && Object.prototype.hasOwnProperty.call(s, l)), e1 = (i, l, s) => (o) => {
  if (typeof o != "string")
    return o;
  const [c, d, f, m] = o.match(vh);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(d),
    [s]: parseFloat(f),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, m2 = (i) => kn(0, 255, i), ed = {
  ...Ml,
  transform: (i) => Math.round(m2(i))
}, ga = {
  test: /* @__PURE__ */ bh("rgb", "red"),
  parse: /* @__PURE__ */ e1("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: s, alpha: o = 1 }) => "rgba(" + ed.transform(i) + ", " + ed.transform(l) + ", " + ed.transform(s) + ", " + Al(Ls.transform(o)) + ")"
};
function p2(i) {
  let l = "", s = "", o = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), s = i.substring(3, 5), o = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), s = i.substring(2, 3), o = i.substring(3, 4), c = i.substring(4, 5), l += l, s += s, o += o, c += c), {
    red: parseInt(l, 16),
    green: parseInt(s, 16),
    blue: parseInt(o, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Dd = {
  test: /* @__PURE__ */ bh("#"),
  parse: p2,
  transform: ga.transform
}, Is = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), ai = /* @__PURE__ */ Is("deg"), Un = /* @__PURE__ */ Is("%"), gt = /* @__PURE__ */ Is("px"), g2 = /* @__PURE__ */ Is("vh"), y2 = /* @__PURE__ */ Is("vw"), _v = {
  ...Un,
  parse: (i) => Un.parse(i) / 100,
  transform: (i) => Un.transform(i * 100)
}, bl = {
  test: /* @__PURE__ */ bh("hsl", "hue"),
  parse: /* @__PURE__ */ e1("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: s, alpha: o = 1 }) => "hsla(" + Math.round(i) + ", " + Un.transform(Al(l)) + ", " + Un.transform(Al(s)) + ", " + Al(Ls.transform(o)) + ")"
}, he = {
  test: (i) => ga.test(i) || Dd.test(i) || bl.test(i),
  parse: (i) => ga.test(i) ? ga.parse(i) : bl.test(i) ? bl.parse(i) : Dd.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ga.transform(i) : bl.transform(i),
  getAnimatableNone: (i) => {
    const l = he.parse(i);
    return l.alpha = 0, he.transform(l);
  }
}, v2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, n1 = /* @__PURE__ */ new RegExp(vh.source), i1 = /* @__PURE__ */ new RegExp(v2.source, "i");
function b2(i) {
  return isNaN(i) && typeof i == "string" && (n1.test(i) || i1.test(i));
}
const a1 = "number", l1 = "color", S2 = "var", T2 = "var(", Vv = "${}", x2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function E2(i) {
  const l = i.toString();
  return n1.test(l) || i1.test(l);
}
function Bs(i) {
  const l = i.toString(), s = [], o = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const m = l.replace(x2, (p) => (he.test(p) ? (o.color.push(d), c.push(l1), s.push(he.parse(p))) : p.startsWith(T2) ? (o.var.push(d), c.push(S2), s.push(p)) : (o.number.push(d), c.push(a1), s.push(parseFloat(p))), ++d, Vv)).split(Vv);
  return { values: s, split: m, indexes: o, types: c };
}
function A2(i) {
  return Bs(i).values;
}
function s1({ split: i, types: l }) {
  const s = i.length;
  return (o) => {
    let c = "";
    for (let d = 0; d < s; d++)
      if (c += i[d], o[d] !== void 0) {
        const f = l[d];
        f === a1 ? c += Al(o[d]) : f === l1 ? c += he.transform(o[d]) : c += o[d];
      }
    return c;
  };
}
function w2(i) {
  return s1(Bs(i));
}
const C2 = (i) => typeof i == "number" ? 0 : he.test(i) ? he.getAnimatableNone(i) : i, M2 = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : C2(i);
function D2(i) {
  const l = Bs(i);
  return s1(l)(l.values.map((o, c) => M2(o, l.split[c])));
}
const $e = {
  test: b2,
  parse: A2,
  createTransformer: w2,
  getAnimatableNone: D2
};
function nd(i, l, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? i + (l - i) * 6 * s : s < 1 / 2 ? l : s < 2 / 3 ? i + (l - i) * (2 / 3 - s) * 6 : i;
}
function z2({ hue: i, saturation: l, lightness: s, alpha: o }) {
  i /= 360, l /= 100, s /= 100;
  let c = 0, d = 0, f = 0;
  if (!l)
    c = d = f = s;
  else {
    const m = s < 0.5 ? s * (1 + l) : s + l - s * l, p = 2 * s - m;
    c = nd(p, m, i + 1 / 3), d = nd(p, m, i), f = nd(p, m, i - 1 / 3);
  }
  return {
    red: Math.round(c * 255),
    green: Math.round(d * 255),
    blue: Math.round(f * 255),
    alpha: o
  };
}
function Jr(i, l) {
  return (s) => s > 0 ? l : i;
}
const qt = (i, l, s) => i + (l - i) * s, id = (i, l, s) => {
  const o = i * i, c = s * (l * l - o) + o;
  return c < 0 ? 0 : Math.sqrt(c);
}, O2 = [Dd, ga, bl], N2 = (i) => O2.find((l) => l.test(i));
function jv(i) {
  const l = N2(i);
  if (!l)
    return !1;
  let s = l.parse(i);
  return l === bl && (s = z2(s)), s;
}
const Lv = (i, l) => {
  const s = jv(i), o = jv(l);
  if (!s || !o)
    return Jr(i, l);
  const c = { ...s };
  return (d) => (c.red = id(s.red, o.red, d), c.green = id(s.green, o.green, d), c.blue = id(s.blue, o.blue, d), c.alpha = qt(s.alpha, o.alpha, d), ga.transform(c));
}, zd = /* @__PURE__ */ new Set(["none", "hidden"]);
function R2(i, l) {
  return zd.has(i) ? (s) => s <= 0 ? i : l : (s) => s >= 1 ? l : i;
}
function _2(i, l) {
  return (s) => qt(i, l, s);
}
function Sh(i) {
  return typeof i == "number" ? _2 : typeof i == "string" ? yh(i) ? Jr : he.test(i) ? Lv : L2 : Array.isArray(i) ? o1 : typeof i == "object" ? he.test(i) ? Lv : V2 : Jr;
}
function o1(i, l) {
  const s = [...i], o = s.length, c = i.map((d, f) => Sh(d)(d, l[f]));
  return (d) => {
    for (let f = 0; f < o; f++)
      s[f] = c[f](d);
    return s;
  };
}
function V2(i, l) {
  const s = { ...i, ...l }, o = {};
  for (const c in s)
    i[c] !== void 0 && l[c] !== void 0 && (o[c] = Sh(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in o)
      s[d] = o[d](c);
    return s;
  };
}
function j2(i, l) {
  const s = [], o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], f = i.indexes[d][o[d]], m = i.values[f] ?? 0;
    s[c] = m, o[d]++;
  }
  return s;
}
const L2 = (i, l) => {
  const s = $e.createTransformer(l), o = Bs(i), c = Bs(l);
  return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? zd.has(i) && !c.values.length || zd.has(l) && !o.values.length ? R2(i, l) : Fs(o1(j2(o, c), c.values), s) : Jr(i, l);
}, Bv = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function B2(i, l) {
  const s = Bv.exec(i);
  if (!s)
    return;
  const o = Bv.exec(l);
  if (!o || s[2] !== o[2])
    return;
  const c = s[2], d = parseFloat(s[1]), f = parseFloat(o[1]);
  return (m) => Al(qt(d, f, m)) + c;
}
function Th(i, l, s) {
  if (typeof i == "number" && typeof l == "number" && typeof s == "number")
    return qt(i, l, s);
  if (typeof i == "string" && typeof l == "string") {
    const c = B2(i, l);
    if (c)
      return c;
  }
  return Sh(i)(i, l);
}
const Rr = [
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
function U2(i) {
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
      const C = y && o ? l : s;
      return v && d.add(g), C.add(g), g;
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
const H2 = 40;
function r1(i, l, s = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let o = !1, c = !0;
  const d = () => o = !0, f = Rr.reduce((B, X) => (B[X] = U2(d), B), {}), { setup: m, read: p, resolveKeyframes: g, preUpdate: v, update: y, preRender: S, render: C, postRender: T } = f, M = () => {
    const B = Hn.useManualTiming, X = B ? s.timestamp : performance.now();
    o = !1, B || (s.delta = c ? 1e3 / 60 : Math.max(Math.min(X - s.timestamp, H2), 1)), s.timestamp = X, s.isProcessing = !0, m.process(s), p.process(s), g.process(s), v.process(s), y.process(s), S.process(s), C.process(s), T.process(s), s.isProcessing = !1, o && l && (c = !1, i(M));
  }, A = () => {
    o = !0, c = !0, s.isProcessing || i(M);
  };
  return { schedule: Rr.reduce((B, X) => {
    const rt = f[X];
    return B[X] = (ut, j = !1, N = !1) => (o || A(), rt.schedule(ut, j, N)), B;
  }, {}), cancel: (B) => {
    for (let X = 0; X < Rr.length; X++)
      f[Rr[X]].cancel(B);
  }, state: s, steps: f };
}
const { schedule: Zt, cancel: Ui, steps: ad } = /* @__PURE__ */ r1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : En, !0, ue), u1 = (i) => {
  const l = ({ timestamp: s }) => i(s);
  return {
    start: (s = !0) => Zt.update(l, s),
    stop: () => Ui(l),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ue.isProcessing ? ue.timestamp : ee.now()
  };
}, c1 = (i, l, s = 10) => {
  let o = "";
  const c = Math.max(Math.round(l / s), 2);
  for (let d = 0; d < c; d++)
    o += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, xh = 2e4;
function Eh(i, l = 50, s = xh, o) {
  let c = 0, d = i.next(c);
  for (; !d.done && c < s; )
    c += l, d = i.next(c);
  return c >= s ? 1 / 0 : c;
}
function k2(i, l = 100, s) {
  const { keyframes: o, velocity: c } = i, d = o && o[o.length - 1] - o[0], f = s({
    ...i,
    velocity: c && d ? c * l / d : c,
    keyframes: [0, l]
  }), m = Math.min(Eh(f), xh);
  return {
    type: "keyframes",
    ease: (p) => f.next(m * p).value / l,
    duration: /* @__PURE__ */ We(m)
  };
}
const we = {
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
}, f1 = (i) => i < 0 ? 1 / Math.max(1 + i, we.minDamping) : Math.max(1 - i, we.minDamping);
function d1(i, l) {
  if (!(i > 1))
    return 1;
  const s = Math.sqrt(i * i - 1), o = i - s, c = i + s, d = 2 * s * Math.exp(-l) * (1 + l);
  return h1((f) => c * Math.exp(-o * f) - o * Math.exp(-c * f) - d, (f) => Math.exp(-c * f) - Math.exp(-o * f), l) / l;
}
function Od(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const G2 = 12;
function h1(i, l, s) {
  let o = s;
  for (let c = 1; c < G2; c++)
    o = o - i(o) / l(o);
  return o;
}
const ld = 1e-3;
function Y2({ duration: i = we.duration, bounce: l = we.bounce }) {
  let s, o;
  const c = f1(l);
  i = kn(we.minDuration, we.maxDuration, /* @__PURE__ */ We(i)), c < 1 ? (s = (g) => {
    const v = g * c, y = v * i, S = Od(g, c), C = Math.exp(-y);
    return ld - v / S * C;
  }, o = (g) => {
    const y = g * c * i, S = c * c * g * g * i, C = Math.exp(-y), T = Od(g * g, c);
    return (-s(g) + ld > 0 ? -1 : 1) * -S * C / T;
  }) : (s = (g) => {
    const v = Math.exp(-g * i), y = g * i + 1;
    return -ld + v * y;
  }, o = (g) => {
    const v = Math.exp(-g * i), y = -g * (i * i);
    return v * y;
  });
  const d = 5 / i, f = h1(s, o, d), m = f * d1(c, f * i), p = m * m;
  return {
    stiffness: p,
    damping: c * 2 * Math.sqrt(p),
    duration: /* @__PURE__ */ dn(i)
  };
}
const Nd = (i, l) => (l ? i >= 0 : i > 0) && i < 1 / 0;
function sd(i, l) {
  if (Nd(i, l))
    return i;
}
function q2(i) {
  const l = sd(i.stiffness), s = sd(i.damping, !0), o = sd(i.mass), c = {
    ...i,
    stiffness: l ?? we.stiffness,
    damping: s ?? we.damping,
    mass: o ?? we.mass,
    isResolvedFromDuration: !1,
    // stiffness/damping/mass overrides duration/bounce
    isTimeDefined: (l ?? s ?? o) === void 0 && (i.duration !== void 0 || i.bounce !== void 0)
  };
  if (c.isTimeDefined) {
    if (i.visualDuration) {
      const d = f1(i.bounce || 0), f = 2 * Math.PI / (i.visualDuration * 1.2) * d1(d, 2 * Math.PI / 1.2);
      c.stiffness = f * f, c.damping = 2 * d * Math.sqrt(c.stiffness);
    } else
      Object.assign(c, Y2(c)), c.isResolvedFromDuration = !0;
    (!Nd(c.stiffness) || !Nd(c.damping, !0)) && (c.stiffness = we.stiffness, c.damping = we.damping);
  }
  return c;
}
function Ir(i = we.visualDuration, l = we.bounce) {
  const s = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i, o = s.keyframes[0], c = s.keyframes[s.keyframes.length - 1], d = { done: !1, value: o }, { stiffness: f, damping: m, mass: p, duration: g, isResolvedFromDuration: v, isTimeDefined: y } = q2({ ...s }), S = (j) => y ? 0 : -/* @__PURE__ */ We(j), C = m / (2 * Math.sqrt(f * p)), T = /* @__PURE__ */ We(Math.sqrt(f / p)), M = C * T, A = {
    target: c,
    delta: c - o,
    velocity: S(s.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, w = () => {
    const j = Math.abs(A.delta) < 5;
    A.restSpeed = s.restSpeed || (j ? we.restSpeed.granular : we.restSpeed.default), A.restDelta = s.restDelta || (j ? we.restDelta.granular : we.restDelta.default);
  };
  w();
  let z, B, X;
  if (C < 1) {
    const j = Od(T, C), N = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    X = () => {
      N.A = (A.velocity + M * A.delta) / j, N.sinC = M * N.A + A.delta * j, N.cosC = M * A.delta - N.A * j;
    };
    const Z = (lt) => {
      lt !== N.t && (N.t = lt, N.env = Math.exp(-M * lt), N.sin = Math.sin(j * lt), N.cos = Math.cos(j * lt));
    };
    z = (lt) => (Z(lt), A.target - N.env * (N.A * N.sin + A.delta * N.cos)), B = (lt) => (Z(lt), N.env * (N.sinC * N.sin + N.cosC * N.cos));
  } else if (C === 1) {
    z = (N) => A.target - Math.exp(-T * N) * (A.delta + (A.velocity + T * A.delta) * N);
    const j = { C: 0 };
    X = () => {
      j.C = A.velocity + T * A.delta;
    }, B = (N) => Math.exp(-T * N) * (T * j.C * N - A.velocity);
  } else {
    const j = T * Math.sqrt(C * C - 1), N = M - j, Z = M + j, lt = y ? 1 / 0 : 300 / j, J = (tt, W) => Math.exp(W > lt ? -tt * lt - M * (W - lt) : -tt * W), Q = { S: 0, F: 0 };
    X = () => {
      const tt = (A.velocity + M * A.delta) / j;
      Q.S = (A.delta + tt) / 2, Q.F = (A.delta - tt) / 2;
    }, z = (tt) => A.target - Q.S * J(N, tt) - Q.F * J(Z, tt), B = (tt) => N * Q.S * J(N, tt) + Z * Q.F * J(Z, tt);
  }
  X();
  const rt = v && g || null, ut = {
    calculatedDuration: rt,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (j, N) => {
      A.target = j[j.length - 1], A.delta = A.target - j[0], A.velocity = S(N), s.restSpeed && s.restDelta || w(), ut.calculatedDuration = rt, d.done = !1, X();
    },
    velocity: (j) => /* @__PURE__ */ dn(B(j)),
    next: (j) => {
      const N = z(j);
      if (v)
        d.done = j >= g;
      else {
        const Z = /* @__PURE__ */ dn(B(j));
        d.done = Math.abs(Z) <= A.restSpeed && Math.abs(A.target - N) <= A.restDelta;
      }
      return d.value = d.done ? A.target : N, d;
    },
    toString: () => {
      const j = Math.min(Eh(ut), xh), N = c1((Z) => ut.next(j * Z).value, j, 30);
      return j + "ms " + N;
    },
    toTransition: () => {
    }
  };
  return ut;
}
Ir.applyToOptions = (i) => {
  const l = k2(i, 100, Ir);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ dn(l.duration), i.type = "keyframes", i;
};
function Wr({ keyframes: i, velocity: l = 0, power: s = 0.8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: f, min: m, max: p, restDelta: g = 0.5, restSpeed: v }) {
  const y = i[0], S = {
    done: !1,
    value: y
  }, C = (j) => j < m || j > p, T = (j) => m === void 0 ? p : p === void 0 || Math.abs(m - j) < Math.abs(p - j) ? m : p;
  let M = s * l;
  const A = y + M, w = f === void 0 ? A : f(A);
  w !== A && (M = w - y);
  const z = (j) => -M * Math.exp(-j / o), B = (j) => {
    const N = z(j);
    S.done = Math.abs(N) <= g, S.value = S.done ? w : w + N;
  };
  let X, rt;
  const ut = (j) => {
    C(S.value) && (X = j, rt = Ir({
      keyframes: [S.value, T(S.value)],
      /**
       * The friction curve is target + calcDelta(t), so its exact
       * derivative is -calcDelta(t) / timeConstant in units/ms,
       * converted here to the units/second expected by spring.
       */
      velocity: -z(j) / o * 1e3,
      damping: c,
      stiffness: d,
      restDelta: g,
      restSpeed: v
    }));
  };
  return ut(0), {
    calculatedDuration: null,
    next: (j) => {
      let N = !1;
      return !rt && X === void 0 && (N = !0, B(j), ut(j)), X !== void 0 && j >= X ? rt.next(j - X) : (!N && B(j), S);
    }
  };
}
function X2(i, l, s) {
  const o = [], c = s || Hn.mix || Th, d = i.length - 1;
  for (let f = 0; f < d; f++) {
    let m = c(i[f], i[f + 1]);
    if (l) {
      const p = Array.isArray(l) ? l[f] || En : l;
      m = Fs(p, m);
    }
    o.push(m);
  }
  return o;
}
function Q2(i, l, { clamp: s = !0, ease: o, mixer: c } = {}) {
  const d = i.length;
  if (su(d === l.length), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const f = i[0] === i[1];
  i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = X2(l, o, c), p = m.length, g = (v) => {
    if (f && v < i[0])
      return l[0];
    let y = 0;
    if (p > 1)
      for (; y < i.length - 2 && !(v < i[y + 1]); y++)
        ;
    const S = /* @__PURE__ */ Ta(i[y], i[y + 1], v);
    return m[y](S);
  };
  return s ? (v) => g(kn(i[0], i[d - 1], v)) : g;
}
function Z2(i, l) {
  const s = i[i.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = /* @__PURE__ */ Ta(0, l, o);
    i.push(qt(s, 1, c));
  }
}
function m1(i) {
  const l = [0];
  return Z2(l, i.length - 1), l;
}
function K2(i, l) {
  return i.map((s) => s * l);
}
function P2(i, l) {
  return i.map(() => l || ph).splice(0, i.length - 1);
}
function Li({ duration: i = 300, keyframes: l, times: s, ease: o = "easeInOut" }) {
  const c = /* @__PURE__ */ s2(o) ? o.map(Rv) : Rv(o) || ph, d = {
    done: !1,
    value: l[0]
  };
  if (l.length === 2 && !Array.isArray(c) && (!s || s.length !== 2 || s[0] === 0 && s[1] === 1)) {
    const [p, g] = l, v = p === g ? void 0 : (Hn.mix || Th)(p, g);
    return {
      calculatedDuration: i,
      next: (y) => (d.value = v ? v(c(i > 0 ? kn(0, 1, y / i) : 1)) : g, d.done = y >= i, d)
    };
  }
  const f = K2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === l.length ? s : m1(l),
    i
  ), m = Q2(f, l, {
    ease: Array.isArray(c) ? c : P2(l, c)
  });
  return {
    calculatedDuration: i,
    next: (p) => (d.value = m(p), d.done = p >= i, d)
  };
}
const F2 = 5;
function J2(i, l, s) {
  const o = Math.max(l - F2, 0);
  return /* @__PURE__ */ Qb(s - i(o), l - o);
}
function I2(i, l, s = 0) {
  return l <= 0 ? s : i.velocity ? i.velocity(l) : J2((o) => i.next(o).value, l, i.next(l).value);
}
const W2 = (i) => i !== null;
function Us(i, { repeat: l, repeatType: s = "loop" }, o, c = 1) {
  const d = i.filter(W2), m = c < 0 || l && s !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !m || o === void 0 ? d[m] : o;
}
const $2 = {
  decay: Wr,
  inertia: Wr,
  tween: Li,
  keyframes: Li,
  spring: Ir
};
function p1(i) {
  typeof i.type == "string" && (i.type = $2[i.type]);
}
const tw = 40, g1 = (i, l) => l - i > tw && !Hn.useManualTiming ? l : i;
function y1(i, l) {
  return {
    kind: i,
    animation: l,
    timestamp: ee.now(),
    frameTimestamp: ue.timestamp,
    frameIsProcessing: ue.isProcessing
  };
}
function v1(i, l, s) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...y1("animation-start", i),
        options: s ? { ...l, ...s } : l
      });
    } catch {
    }
}
function ew(i, l) {
  const s = globalThis.__MOTION_INSPECT__;
  if (s)
    try {
      s({
        ...y1("layout-animation-start", i),
        node: l
      });
    } catch {
    }
}
class Ah {
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
const nw = (i) => i / 100, Rd = (i) => Math.round(i * 1e4) / 1e4;
class Hs extends Ah {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: s } = this.options;
      s && s.updatedAt !== ee.now() && this.tick(ee.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause(), v1(this, this.options);
  }
  initAnimation() {
    const { options: l } = this;
    p1(l);
    const { type: s = Li, repeat: o = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = l;
    let { keyframes: m } = l;
    const p = s || Li;
    p !== Li && typeof m[0] != "number" && (this.mixKeyframes = Fs(nw, Th(m[0], m[1])), m = [0, 100]);
    const g = p(m === l.keyframes ? l : { ...l, keyframes: m });
    d === "mirror" && (this.mirroredGenerator = p({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = Eh(g));
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
    this.startTime === this.pendingStartTime && (this.startTime = g1(this.startTime, l)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), s ? this.currentTime = l : this.updateTime(l);
    const y = this.currentTime - f * (this.playbackSpeed >= 0 ? 1 : -1), S = this.playbackSpeed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    const C = this.generate(this.currentTime, S);
    let { done: T } = C;
    !S && d !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const M = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return M && p !== Wr && (C.value = Us(m, this.options, v, this.speed)), g && g(C.value), M && this.finish(), C;
  }
  /**
   * This animation's time, including delay, at a timestamp.
   */
  at(l) {
    return this.holdTime ?? Rd((l - this.startTime) * this.playbackSpeed);
  }
  /**
   * The value at a timestamp, without changing this animation's state.
   * If resolved, it ends at the last resolved keyframe, which is in the
   * same unit as the others, rather than at finalKeyframe.
   */
  sampleAt(l, s) {
    const { options: o, totalDuration: c } = this, d = this.at(l) - (o.delay || 0);
    return d >= c && o.type !== Wr ? Us(o.keyframes, o, s ? void 0 : o.finalKeyframe) : this.generate(Math.max(d, 0), d < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(l, s) {
    const { generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: m } = this, { keyframes: p, repeat: g, repeatType: v, repeatDelay: y } = this.options;
    let S = l, C = o;
    if (g) {
      const M = Math.min(l, c) / m;
      let A = Math.floor(M), w = M % 1;
      !w && M >= 1 && (w = 1), w === 1 && A--, A = Math.min(A, g + 1), A % 2 && (v === "reverse" ? (w = 1 - w, y && (w -= y / m)) : v === "mirror" && (C = f)), S = kn(0, 1, w) * m;
    }
    let T;
    return s ? (this.delayState.value = p[0], T = this.delayState) : T = C.next(S), d && !s && (T.value = d(T.value)), T;
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
    return I2(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(l) {
    const s = this.playbackSpeed !== l;
    s && this.driver && this.updateTime(ee.now()), this.playbackSpeed = l, s && this.driver && (this.time = /* @__PURE__ */ We(this.currentTime));
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: l = u1, startTime: s } = this.options;
    this.driver || (this.driver = l((c) => this.tick(c))), this.options.onPlay?.();
    const o = this.driver.now();
    this.state === "finished" ? (this.updateFinished(), this.startTime = o) : this.holdTime !== null ? this.startTime = o - this.holdTime / (this.playbackSpeed || 1) : this.startTime || (this.startTime = s ?? (this.pendingStartTime = o)), this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    this.state = "paused", this.updateTime(ee.now()), this.holdTime = this.currentTime;
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
const iw = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function aw(i) {
  const [l, s] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [o] = s.match(vh) || [];
  if (!o)
    return i;
  const c = s.replace(o, "");
  let d = iw.has(l) ? 1 : 0;
  return o !== s && (d *= 100), l + "(" + d + c + ")";
}
const lw = /\b([a-z-]*)\(.*?\)/gu, _d = {
  ...$e,
  getAnimatableNone: (i) => {
    const l = i.match(lw);
    return l ? l.map(aw).join(" ") : i;
  }
}, Vd = {
  ...$e,
  getAnimatableNone: (i) => {
    const l = $e.parse(i);
    return $e.createTransformer(i)(l.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, Uv = {
  ...Ml,
  transform: Math.round
}, sw = {
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
  scale: Nr,
  scaleX: Nr,
  scaleY: Nr,
  scaleZ: Nr,
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
  opacity: Ls,
  originX: _v,
  originY: _v,
  originZ: gt
}, ks = {
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
  ...sw,
  zIndex: Uv,
  // SVG
  fillOpacity: Ls,
  strokeOpacity: Ls,
  numOctaves: Uv
}, ow = {
  ...ks,
  // Color props
  color: he,
  backgroundColor: he,
  outlineColor: he,
  fill: he,
  stroke: he,
  // Border props
  borderColor: he,
  borderTopColor: he,
  borderRightColor: he,
  borderBottomColor: he,
  borderLeftColor: he,
  filter: _d,
  WebkitFilter: _d,
  mask: Vd,
  WebkitMask: Vd
}, b1 = (i) => ow[i], rw = /* @__PURE__ */ new Set([_d, Vd]);
function wh(i, l) {
  let s = b1(i);
  return rw.has(s) || (s = $e), s.getAnimatableNone ? s.getAnimatableNone(l) : void 0;
}
function uw(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const ya = (i) => i * 180 / Math.PI, jd = (i) => {
  const l = ya(Math.atan2(i[1], i[0]));
  return Ld(l);
}, cw = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: jd,
  rotateZ: jd,
  skewX: (i) => ya(Math.atan(i[1])),
  skewY: (i) => ya(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Ld = (i) => (i = i % 360, i < 0 && (i += 360), i), Hv = jd, kv = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), Gv = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), fw = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: kv,
  scaleY: Gv,
  scale: (i) => (kv(i) + Gv(i)) / 2,
  rotateX: (i) => Ld(ya(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Ld(ya(Math.atan2(-i[2], i[0]))),
  rotateZ: Hv,
  rotate: Hv,
  skewX: (i) => ya(Math.atan(i[4])),
  skewY: (i) => ya(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function Gs(i) {
  return i.includes("scale") ? 1 : 0;
}
function Bd(i, l) {
  if (!i || i === "none")
    return Gs(l);
  const s = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (s)
    o = fw, c = s;
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = cw, c = m;
  }
  if (!c)
    return Gs(l);
  const d = o[l], f = c[1].split(",").map(hw);
  return typeof d == "function" ? d(f) : f[d];
}
const dw = (i, l) => {
  const { transform: s = "none" } = getComputedStyle(i);
  return Bd(s, l);
};
function hw(i) {
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
], Bi = /* @__PURE__ */ new Set([...li, "pathRotation"]), Yv = (i) => i === Ml || i === gt, mw = /* @__PURE__ */ new Set(["x", "y", "z"]), pw = li.filter((i) => !mw.has(i));
function gw(i) {
  const l = [];
  return pw.forEach((s) => {
    const o = i.getValue(s);
    if (o !== void 0) {
      const c = o.get(), d = s.startsWith("scale") ? 1 : 0;
      if (c === d)
        return;
      l.push([s, c]), o.set(d);
    }
  }), l;
}
const yw = /* @__PURE__ */ new Set(["bottom", "right"]);
function qv(i, l, s, o, c, d) {
  const f = parseFloat(i);
  if (!isNaN(f))
    return f;
  const { min: m, max: p } = l()[s], g = p - m;
  return d === "border-box" ? g : g - parseFloat(o) - parseFloat(c);
}
const va = {
  // Dimensions
  width: ({ width: i, paddingLeft: l = "0", paddingRight: s = "0", boxSizing: o }, c) => qv(i, c, "x", l, s, o),
  height: ({ height: i, paddingTop: l = "0", paddingBottom: s = "0", boxSizing: o }, c) => qv(i, c, "y", l, s, o),
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
  x: ({ transform: i }) => Bd(i, "x"),
  y: ({ transform: i }) => Bd(i, "y")
};
va.translateX = va.x;
va.translateY = va.y;
const ba = /* @__PURE__ */ new Set();
let Ud = !1, Hd = !1, kd = !1;
function S1() {
  if (Hd) {
    const i = [], l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
    ba.forEach((c) => {
      c.needsMeasurement && (i.push(c), l.add(c.element), yw.has(c.name) && s.add(c.element));
    });
    const o = /* @__PURE__ */ new Map();
    s.forEach((c) => {
      const d = gw(c);
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
  Hd = !1, Ud = !1, ba.forEach((i) => i.complete(kd)), ba.clear();
}
function T1() {
  ba.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Hd = !0);
  });
}
function vw() {
  kd = !0, T1(), S1(), kd = !1;
}
function bw(i, l, s) {
  if (typeof i == "string") {
    if (fh(i) || dh(i))
      return parseFloat(i);
    if (!$e.test(i) && $e.test(s))
      return wh(l, s);
  }
  return i ?? void 0;
}
class Ch {
  constructor(l, s, o, c, d, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = s, this.name = o, this.motionValue = c, this.element = d, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ba.add(this), Ud || (Ud = !0, Zt.read(T1), Zt.resolveKeyframes(S1))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: s, element: o, motionValue: c } = this;
    if (l[0] === null) {
      const d = c?.get(), f = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (o && s) {
        const m = bw(o.readValue(s, f), s, f);
        m !== void 0 && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = f), c && d === void 0 && c.set(l[0]);
    }
    uw(l);
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
    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, l), ba.delete(this);
  }
  cancel() {
    this.state === "scheduled" && (ba.delete(this), this.state = "pending");
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const Sw = (i) => i.startsWith("--");
function x1(i, l, s) {
  Sw(l) ? i.style.setProperty(l, s) : i.style[l] = s;
}
const Tw = {};
function E1(i, l) {
  const s = /* @__PURE__ */ Xb(i);
  return () => Tw[l] ?? s();
}
const xw = /* @__PURE__ */ E1(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Mh = /* @__PURE__ */ E1(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Sl = ([i, l, s, o]) => `cubic-bezier(${i}, ${l}, ${s}, ${o})`, Gd = {
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
function A1(i, l) {
  if (i)
    return typeof i == "function" ? Mh() ? c1(i, l) : "ease-out" : /* @__PURE__ */ gh(i) ? Sl(i) : Array.isArray(i) ? i.map((s) => A1(s, l) || Gd.easeOut) : Gd[i];
}
function Ew(i, l, s, { delay: o = 0, duration: c = 300, repeat: d = 0, repeatType: f = "loop", ease: m = "easeOut", times: p } = {}, g = void 0) {
  const v = {
    [l]: s
  };
  p && (v.offset = p);
  const y = A1(m, c);
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
function w1(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Aw({ type: i, ...l }) {
  return w1(i) && Mh() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class C1 extends Ah {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: s, name: o, keyframes: c, pseudoElement: d, allowFlatten: f = !1, finalKeyframe: m, onComplete: p } = l;
    this.isPseudoElement = !!d, this.allowFlatten = f, this.options = l, su(typeof l.type != "string");
    const g = Aw(l);
    this.animation = Ew(s, o, c, g, d), g.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = Us(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), x1(s, o, v), this.animation.cancel();
      }
      p?.(), this.notifyFinished();
    }, v1(this, l, g);
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && xw() ? (this.animation.timeline = l, s?.(this.animation), En) : o(this);
  }
}
const M1 = {
  anticipate: Jb,
  backInOut: Fb,
  circInOut: Wb
};
function ww(i) {
  return i in M1;
}
function Cw(i) {
  typeof i.ease == "string" && ww(i.ease) && (i.ease = M1[i.ease]);
}
const $r = 10;
class Mw extends C1 {
  constructor(l) {
    Cw(l), p1(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
  }
  /**
   * The animation's time now, in ms. Wall-clock rather than WAAPI's
   * currentTime while running, as under CPU load currentTime may not
   * reflect the actual elapsed time, causing incorrect sampling and
   * visual jumps.
   */
  elapsed() {
    return this.state === "running" ? (ee.now() - this.startTime) * this.speed : this.time * 1e3;
  }
  /**
   * The value at a time, from a renderless JS animation.
   */
  sample(l) {
    if (!this.sampler) {
      const { motionValue: s, onUpdate: o, onComplete: c, onPlay: d, onStop: f, element: m, ...p } = this.options;
      this.sampler = new Hs({ ...p, autoplay: !1 }), this.sampler.stop();
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
    const { speed: d } = this, f = this.elapsed(), m = this.state === "running" && d ? kn(0, $r, f) : 0, p = this.sample(f);
    o && c && x1(o, c, p), s.setWithVelocity(this.sample(f - m * Math.sign(d)), p, m / Math.abs(d || 1));
  }
}
const Xv = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
($e.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function Dw(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let s = 0; s < i.length; s++)
    if (i[s] !== l)
      return !0;
}
function zw(i, l, s, o) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = i[i.length - 1], f = Xv(c, l), m = Xv(d, l);
  return !f || !m ? !1 : Dw(i) || (s === "spring" || w1(s)) && o;
}
function Yd(i) {
  i.duration = 0, i.type = "keyframes";
}
const qd = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Ow = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Nw(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && Ow.test(i[l]))
      return !0;
  return !1;
}
const Qv = /* @__PURE__ */ new Set([
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
]), D1 = /* @__PURE__ */ Xb(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function Rw(i) {
  const { motionValue: l, name: s, repeatDelay: o, repeatType: c, damping: d, type: f, keyframes: m } = i;
  if (!s || !(qd.has(s) || Qv.has(s)))
    return !1;
  const p = l?.owner?.current;
  if (!(p instanceof HTMLElement) && !(p instanceof SVGElement))
    return !1;
  const { onUpdate: g, transformTemplate: v } = l.owner.getProps();
  return D1() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (qd.has(s) || Qv.has(s) && Nw(m)) && (s !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !g && !o && c !== "mirror" && d !== 0 && f !== "inertia";
}
const tu = (i, l) => l && typeof i == "number" ? l.transform(i) : i, z1 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, _w = li.length;
function O1(i, l, s) {
  let o = "", c = !0;
  for (let f = 0; f < _w; f++) {
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
      const v = tu(p, ks[m]);
      if (!g) {
        c = !1;
        const y = z1[m] || m;
        o += `${y}(${v}) `;
      }
      s && (l[m] = v);
    }
  }
  const d = i.pathRotation;
  return d && (c = !1, o += `rotate(${tu(d, ks.pathRotation)}) `), o = o.trim(), s ? o = s(l, c ? "" : o) : c && (o = "none"), o;
}
const wl = /* @__PURE__ */ new WeakMap(), Vw = 200, od = 1e-3, jw = 0.1, Lw = 1e-3, Bw = 100, Uw = (i) => /^(linear|ease(In|Out|InOut))$/.test(i), rd = (i, l) => i - l, Zv = (i, l, s) => {
  const o = [];
  for (let c = 0; c <= s; c++)
    o.push(qt(i, l, c / s));
  return o;
}, Br = (i) => i.motionValue.owner, ud = (i) => wl.get(i), Tl = (i, l) => i.latestValues ? i.latestValues[l] : i.getValue(l)?.get(), Hw = ({ name: i, motionValue: l }) => i && li.includes(i) && l?.owner?.current instanceof HTMLElement && D1() && Mh();
function kw(i) {
  const l = Br(i), { onUpdate: s, transformTemplate: o } = l.getProps();
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
    (Tl(l, "transform") || "none") === "none" && !Tl(l, "pathRotation") && /**
     * Layout animations write transform every frame.
     */
    !l.projection?.isProjecting()
  );
}
class Gw extends Hs {
  constructor(l) {
    const s = Br(l).current, { driver: o = u1 } = l, c = kw(l);
    l.driver = (f) => {
      const m = o(f);
      return {
        js: m,
        now: m.now,
        start: (p = !0) => {
          const g = ud(s);
          !g || g.isJS ? m.start(p) : g.schedule(!1, !p);
        },
        stop: () => {
          m.stop();
          const p = ud(s);
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
    return ud(Br(this.options).current);
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
    return this.isAccelerated() ? this.sampleAt(ee.now()) : void 0;
  }
  /**
   * If this is a two-keyframe tween whose easing WAAPI runs exactly,
   * when it starts and stops moving, and that easing.
   */
  tween() {
    const { keyframes: l, type: s, ease: o, times: c, repeat: d, delay: f = 0 } = this.options, m = /* @__PURE__ */ gh(o) ? Sl(o) : Uw(o) && Gd[o];
    if (m && !d && !c && l.length === 2 && s === Li && this.holdTime === null) {
      const p = this.startTime + f / this.speed;
      return [p, p + this.resolvedDuration / this.speed, m];
    }
  }
  /**
   * The timestamps between two timestamps where this reaches a
   * keyframe or starts a repeat, where it can turn or jump.
   */
  boundaries(l, s) {
    const { startTime: o, speed: c, resolvedDuration: d, options: f } = this, { delay: m = 0, repeat: p = 0, repeatDelay: g = 0, repeatType: v, times: y, keyframes: S, type: C } = f, T = (C || Li) === Li ? y || m1(S) : [0, 1], M = o + m / c, A = [];
    if (this.holdTime !== null || !(d > 0))
      return A;
    for (let w = Math.max(0, Math.floor((l - M) * c / d)); w <= p; w++) {
      const z = M + w * d / c;
      if (z > s)
        break;
      for (const B of T) {
        const X = z + (w % 2 && v && v !== "loop" ? 1 - B : B) * (d - g) / c;
        X > l && X < s && A.push(X);
      }
    }
    return A;
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
    const l = ee.now();
    this.options.motionValue.setWithVelocity(this.sampleAt(l - $r, !0), this.sampleAt(l, !0), $r);
  }
  play() {
    this.isStopped || ((this.group || Yw(Br(this.options))).tracks.add(this), super.play());
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
    l && !l.isJS && this.canAccelerate && this.tick(ee.now());
  }
  /**
   * Without a tick to rebase it, a held time still includes the delay,
   * so take it off here, as a JS animation does on its next tick.
   */
  get time() {
    return this.isAccelerated() ? /* @__PURE__ */ We(kn(0, this.totalDuration, this.at(ee.now()) - (this.options.delay || 0))) : super.time;
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
function Yw(i) {
  const l = i.current, s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  let c = {}, d = [], f = /* @__PURE__ */ new Map(), m = [], p = !1, g = !1, v = !1, y = -1 / 0;
  const S = (J) => {
    for (const Q of s)
      if (Q.name === J)
        return !0;
  }, C = (J, Q) => {
    const tt = {};
    for (const W of J === void 0 ? li : d) {
      const $ = o.get(W), G = J === void 0 ? Tl(i, W) : $ ? $.sampleAt(Q > J && !$.timing()[1] ? Q : J) : c[W];
      G !== void 0 && (tt[W] = G);
    }
    return tt;
  }, T = (J, Q) => {
    let tt = "";
    const W = C(J, Q);
    for (const $ in W)
      tt += (z1[$] || $) + "(" + tu(W[$], ks[$]) + ") ";
    return tt || "none";
  }, M = (J = C()) => {
    l.style.transform = O1(J, {});
  }, A = (J = !0) => {
    J && M(), m.forEach(({ animation: Q }) => Q.cancel()), m = [];
  }, w = (J, Q, tt = 1 / 0) => {
    const W = { animation: J, offset: Q, end: tt };
    J.startTime = ee.now() + Q, tt < 1 / 0 && (J.onfinish = () => {
      W.isDone = !0, m.some(($) => $.end === 1 / 0) && (J.cancel(), m = m.filter(($) => $ !== W)), lt.schedule(!1);
    }), J.oncancel = () => m.includes(W) && lt.demote(), m.push(W);
  }, z = (J, Q, tt) => {
    const W = (G, P) => Math.abs(J(P) - J(G)), $ = W(Q, tt);
    for (; tt - Q > 0.01; ) {
      const G = (Q + tt) / 2;
      W(Q, G) > W(G, tt) ? tt = G : Q = G;
    }
    return W(Q, tt) > $ / 2 ? [Q, tt] : [];
  }, B = (J, Q, tt, W) => {
    const $ = Math.min(Vw, Math.max(2, Math.ceil((tt - Q) / $r)));
    if (W.length * 4 > $)
      return;
    const G = Zv(Q, tt, $).concat(W).sort(rd), P = (bt) => /* @__PURE__ */ Ta(Q, tt, bt);
    let et, st;
    for (const bt of J) {
      const nt = G.map((at) => bt.numberAt(at)), [x] = nt, H = nt[nt.length - 1] - x, it = nt.map((at) => H ? (at - x) / H : at - x);
      if (H) {
        if (!et)
          et = it, st = (at) => (bt.numberAt(at) - x) / H;
        else if (it.some((at, vt) => !(Math.abs(at - et[vt]) <= od)))
          return;
      } else if (it.some((at) => !(Math.abs(at) <= od)))
        return;
    }
    if (!et || et.every((bt, nt) => Math.abs(bt - P(G[nt])) <= od))
      return "linear";
    const Y = [], yt = (bt, nt = st(bt)) => Y.push(Rd(nt) + " " + Rd(P(bt) * 100) + "%");
    return et.forEach((bt, nt) => {
      nt && Math.abs(bt - et[nt - 1]) > 0.2 && z(st, G[nt - 1], G[nt]).forEach((x) => yt(x)), yt(G[nt], bt);
    }), "linear(" + Y + ")";
  }, X = (J, Q, tt, W) => {
    const $ = [Q], G = (Y, yt) => J.every((bt) => !(Math.abs(bt.numberAt((Y + yt) / 2) - (bt.numberAt(Y) + bt.numberAt(yt)) / 2) > (bt.name.startsWith("scale") ? Lw : jw))), P = (Y, yt, bt) => {
      if (yt - Y < 1 || G(Y, yt))
        $.push(yt);
      else if (bt < 4)
        P(Y, (Y + yt) / 2, bt + 1), P((Y + yt) / 2, yt, bt + 1);
      else {
        for (const nt of J)
          $.push(...z((x) => nt.numberAt(x), Y, yt));
        $.push(yt);
      }
    }, et = Zv(Q, tt, Math.ceil((tt - Q) / 100));
    for (const Y of W)
      et.push(Y, Math.min(Y + 0.01, tt));
    let st = Q;
    for (const Y of et.sort(rd))
      Y > st && P(st, Y, 0), st = Y;
    return $.sort(rd);
  }, rt = (J) => {
    let Q;
    for (const tt of J) {
      const W = tt.tween();
      if (!W || Q?.some(($, G) => G < 2 ? Math.abs(W[G] - $) > 1 : W[G] !== $))
        return;
      Q = W;
    }
    return Q;
  }, ut = (J, Q, tt, W = { fill: "both" }, $, G) => {
    const P = J.flatMap((bt) => bt.boundaries(Q, tt)), et = G || B(J, Q, tt, P), st = et ? [Q, tt] : X(J, Q, tt, P), Y = st.map((bt) => T(bt, $));
    let yt = { transform: Y };
    return et || (yt.offset = st.map((bt) => /* @__PURE__ */ Ta(Q, tt, bt))), Y.every((bt) => bt === Y[0]) && (M(C(Q, $)), yt = null), l.animate(yt, {
      ...W,
      duration: tt - Q,
      easing: et || "linear"
    });
  }, j = (J) => {
    let Q = J, tt = 0, W = 0;
    const $ = [], G = [], P = /* @__PURE__ */ new Set();
    o.clear(), f = /* @__PURE__ */ new Map();
    for (const st of s) {
      o.set(st.name, st);
      const [Y, yt] = st.timing(), bt = Y === 1 / 0;
      if (f.set(st, [st.at(J), st.speed, bt]), bt) {
        st.sync();
        continue;
      }
      if (st.speed < 0)
        return;
      if (yt) {
        if (tt) {
          const nt = (Y - W) / yt;
          if (Math.abs(yt - tt) > 1 || Math.abs(nt - Math.round(nt)) * tt > 1)
            return;
        } else
          tt = yt, W = Y;
        G.push(st);
      } else
        P.add(Y);
      $.push(st), Q = Math.max(Q, Y);
    }
    c = {}, d = li.filter((st) => {
      if (o.has(st))
        return !0;
      const Y = c[st] = Tl(i, st);
      return Y !== void 0 && parseFloat(Y) !== (st.startsWith("scale") ? 1 : 0);
    }), A(!1);
    const et = !tt && rt($);
    try {
      if (et && et[1] > J) {
        const [st, Y, yt] = et;
        w(ut($, st, Y, void 0, void 0, yt), st - J, Y - st);
      } else Q > J && (w(ut($, J, Q), 0, Q - J), P.forEach((st) => st < Q - 1 && w(l.animate(null, {
        duration: st - J
      }), 0, st - J)));
      if (tt) {
        const st = W + Math.floor((Q - W) / tt) * tt;
        w(ut(G, st, st + tt, {
          iterations: 1 / 0,
          iterationStart: (Q - st) / tt,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, Q), Q - J);
      }
    } catch {
      return;
    }
    return m.length || A(), !0;
  }, N = (J) => {
    let Q, tt = 0;
    for (const W of s) {
      const $ = f.get(W);
      if (!$)
        return !1;
      const [G, P, et] = $, st = W.at(J), Y = W.timing()[0] === 1 / 0;
      if (et) {
        if (Y && st === G)
          continue;
        return !1;
      }
      const yt = (st - G) / P, bt = Y ? 0 : W.speed / P;
      if (Q === void 0)
        Q = yt, tt = bt;
      else if (Math.abs(yt - Q) > 1 || bt !== tt)
        return !1;
    }
    if (Q === void 0)
      return !0;
    if (!m.length)
      return !1;
    for (const { offset: W, end: $, isDone: G } of m) {
      const P = Q - W;
      if ($ < 1 / 0 && (G ? P < $ - 1 : P < 0 || P >= $))
        return !1;
    }
    for (const { animation: W, offset: $, isDone: G } of m) {
      if (G)
        continue;
      const P = Q - $;
      tt ? (W.playbackRate = tt, W.startTime = J - P / tt) : (W.pause(), W.currentTime = P);
    }
    return !0;
  }, Z = () => {
    const J = ee.now();
    if (lt.isJS || (lt.isFinishing = !0, s.forEach((W) => {
      const [$, G] = W.timing();
      W.state === "running" && W.speed > 0 && !G && $ <= J + 1 && (W.complete(), c[W.name] = Tl(i, W.name), f.has(W) || (p = !0));
    }), lt.isFinishing = !1), g = !1, s.forEach(({ state: W }, $) => {
      (W === "idle" || W === "finished") && s.delete($);
    }), !s.size) {
      wl.delete(l), lt.isJS || A();
      return;
    }
    for (const W of s)
      if (!W.canAccelerate)
        return lt.demote(!0);
    lt.isJS && (lt.isJS = !1, p = !0, s.forEach((W) => W.js?.stop()));
    const Q = p, tt = v;
    if (p = v = !1, Q || !N(J)) {
      if (tt) {
        if (J - y < Bw)
          return lt.demote();
        y = J;
      }
      if (!j(J))
        return lt.demote();
    }
  }, lt = {
    tracks: s,
    isJS: !1,
    isFinishing: !1,
    schedule(J, Q) {
      p || (p = J), v || (v = !!Q), g || (g = !0, ue.isProcessing ? Zt.render(Z, !1, !0) : queueMicrotask(Z));
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (!lt.isJS) {
        for (const J in c)
          if (Tl(i, J) !== c[J] && !S(J))
            return lt.schedule(!0, !0);
      }
    },
    demote(J) {
      lt.isJS || (s.forEach((Q) => {
        Q.isAccelerated() && Q.sync(), J || (Q.canAccelerate = !1);
      }), lt.isJS = !0, f = /* @__PURE__ */ new Map(), A(), s.forEach((Q) => Q.state === "running" && Q.js?.start()));
    }
  };
  return wl.set(l, lt), lt;
}
class qw extends Ah {
  constructor(l) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = ee.now();
    const { keyframes: s, name: o, motionValue: c, element: d } = l, f = l;
    f.autoplay ?? (f.autoplay = !0), f.delay ?? (f.delay = 0), f.type ?? (f.type = "keyframes"), f.repeat ?? (f.repeat = 0), f.repeatDelay ?? (f.repeatDelay = 0), f.repeatType ?? (f.repeatType = "loop");
    const m = d?.KeyframeResolver || Ch;
    this.keyframeResolver = new m(s, (p, g, v) => this.onKeyframesResolved(p, g, f, !v), o, c, d), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, s, o, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: m, delay: p, isHandoff: g, onUpdate: v } = o;
    this.resolvedAt = ee.now();
    let y = !0;
    zw(l, d, f, m) || (y = !1, (Hn.instantAnimations || !p) && v?.(Us(l, o, s)), l[0] = l[l.length - 1], Yd(o), o.repeat = 0);
    const { onComplete: S } = o;
    o.finalKeyframe = s, o.keyframes = l, o.onComplete = () => {
      S?.(), this.notifyFinished();
    };
    const C = y && !g && Rw(o), T = !C && Hw(o);
    c && (C || T || this.resolvedAt !== this.createdAt) && (o.startTime ?? (o.startTime = g1(this.createdAt, this.resolvedAt)));
    let M;
    if (C) {
      o.element = o.motionValue?.owner?.current;
      try {
        M = new Mw(o);
      } catch {
        M = new Hs(o);
      }
    } else T ? M = new Gw(o) : M = new Hs(o);
    this.pendingTimeline && (this.stopTimeline = M.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = M;
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
    return this._animation || (this.keyframeResolver?.resume(), vw()), this._animation;
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
function N1(i, l, s, o = 0, c = 1) {
  const d = Array.from(i).sort((g, v) => g.sortNodePosition(v)).indexOf(l), f = i.size, m = (f - 1) * o;
  return typeof s == "function" ? s(d, f) : c === 1 ? d * o : m - d * o;
}
const Kv = 30, Xw = (i) => !isNaN(parseFloat(i));
class Qw {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   */
  constructor(l, s = {}) {
    this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (o) => {
      const c = ee.now();
      if (this.updatedAt !== c && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(o), this.current !== this.prev && (this.notifyChange(), this.dependents))
        for (const d of this.dependents)
          d.dirty();
    }, this.hasAnimated = !1, this.setCurrent(l), this.owner = s.owner;
  }
  setCurrent(l) {
    this.current = l, this.updatedAt = ee.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = Xw(this.current));
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
    return l === "change" ? this.onChangeSubscribe(s) : ((o = this.events)[l] || (o[l] = new Fr())).add(s);
  }
  onChangeSubscribe(l) {
    const { events: s } = this;
    return !s.change && !this.changeSubscriber ? this.changeSubscriber = l : (s.change || (s.change = new Fr(), s.change.add(this.changeSubscriber), this.changeSubscriber = void 0), s.change.add(l)), () => {
      this.changeSubscriber === l ? this.changeSubscriber = void 0 : s.change?.remove(l), this.stopIfUnobserved();
    };
  }
  /**
   * If we have no more change listeners by the start
   * of the next frame, stop active animations.
   */
  stopIfUnobserved() {
    Zt.read(() => {
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
    const l = ee.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Kv)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Kv);
    return /* @__PURE__ */ Qb(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
function Cl(i, l) {
  return new Qw(i, l);
}
function R1(i, l) {
  if (i?.inherit && l) {
    const { inherit: s, ...o } = i;
    return { ...l, ...o };
  }
  return i;
}
function Dh(i, l) {
  const s = i?.[l] ?? i?.default ?? i;
  return s !== i ? R1(s, i) : s;
}
const Zw = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Kw = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Pw = {
  type: "keyframes",
  duration: 0.8
}, Fw = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Jw = (i, { keyframes: l }) => l.length > 2 ? Pw : Bi.has(i) ? i.startsWith("scale") ? Kw(l[1]) : Zw : Fw, Iw = /* @__PURE__ */ new Set([
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
function Ww(i) {
  for (const l in i)
    if (!Iw.has(l))
      return !0;
  return !1;
}
const zh = (i, l, s, o = {}, c, d) => (f) => {
  const m = Dh(o, i) || {}, p = m.delay || o.delay || 0;
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
  Ww(m) || Object.assign(v, Jw(i, v)), v.duration && (v.duration = /* @__PURE__ */ dn(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ dn(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let y = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Yd(v), v.delay === 0 && (y = !0)), (Hn.instantAnimations || Hn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, Yd(v), v.delay = 0), v.allowFlatten = !m.type && !m.ease, y && !d && l.get() !== void 0) {
    const S = Us(v.keyframes, m);
    if (S !== void 0) {
      Zt.update(() => {
        v.onUpdate(S), v.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new Hs(v) : new qw(v);
}, $w = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function tC(i) {
  const l = $w.exec(i);
  if (!l)
    return [,];
  const [, s, o, c] = l;
  return [`--${s ?? o}`, c];
}
function _1(i, l, s = 1) {
  const [o, c] = tC(i);
  if (!o)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const f = d.trim();
    return fh(f) ? parseFloat(f) : f;
  }
  return yh(c) ? _1(c, l, s + 1) : c;
}
function eC(i) {
  const l = [{}, {}];
  return i?.values.forEach((s, o) => {
    l[0][o] = s.get(), l[1][o] = s.getVelocity();
  }), l;
}
function V1(i, l, s, o) {
  const c = (d) => typeof d == "function" ? d(s !== void 0 ? s : i.custom, ...eC(o)) : d;
  return l = c(l), typeof l == "string" && (l = i.variants && i.variants[l]), c(l);
}
function Sa(i, l, s) {
  return V1(i.getProps(), l, s, i);
}
const j1 = (i, l) => l === "exit" ? i.presenceContext?.custom : void 0, L1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...li
]), nC = (i) => Array.isArray(i);
function iC(i, l, s) {
  i.hasValue(l) ? i.getValue(l).set(s) : i.addValue(l, Cl(s));
}
function aC(i) {
  return nC(i) ? i[i.length - 1] || 0 : i;
}
function lC(i, l) {
  const s = Sa(i, l);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...o };
  for (const f in d) {
    const m = aC(d[f]);
    iC(i, f, m);
  }
}
const Ce = (i) => !!(i && i.getVelocity);
function sC(i) {
  return !!(Ce(i) && i.add);
}
function Xd(i, l) {
  const s = i.getValue("willChange");
  if (sC(s))
    return s.add(l);
  if (!s && Hn.WillChange) {
    const o = new Hn.WillChange("auto");
    i.addValue("willChange", o), o.add(l);
  }
}
function Oh(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const oC = "framerAppearId", B1 = "data-" + Oh(oC);
function U1(i) {
  return i.props[B1];
}
const rC = typeof window < "u";
function uC({ protectedKeys: i, needsAnimating: l }, s) {
  const o = s in i && !l[s];
  return l[s] = !1, o;
}
function H1(i, l, { delay: s = 0, transitionOverride: o, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...m } = l;
  const p = i.getDefaultTransition();
  d = d ? R1(d, p) : p;
  const g = d?.reduceMotion, v = d?.skipAnimations;
  o && (d = o);
  const y = [], S = c && i.animationState?.getState()[c], C = d?.path;
  C && C.animateVisualElement(i, m, d, s, y);
  for (const T in m) {
    const M = i.getValue(T, i.latestValues[T] ?? null), A = m[T];
    if (A === void 0 || S && uC(S, T))
      continue;
    const w = {
      delay: s,
      ...Dh(d || {}, T)
    };
    v && (w.skipAnimations = !0);
    const z = M.get();
    if (z !== void 0 && !M.isAnimating() && !Array.isArray(A) && A === z && !w.velocity) {
      Zt.update(() => M.set(A));
      continue;
    }
    let B = !1;
    if (rC && window.MotionHandoffAnimation) {
      const ut = U1(i);
      if (ut) {
        const j = window.MotionHandoffAnimation(ut, T, Zt);
        j !== null && (w.startTime = j, B = !0);
      }
    }
    Xd(i, T);
    const X = g ?? i.shouldReduceMotion;
    M.start(zh(T, M, A, X && L1.has(T) ? { type: !1 } : w, i, B));
    const rt = M.animation;
    rt && y.push(rt);
  }
  if (f) {
    const T = () => Zt.update(() => {
      f && lC(i, f);
    });
    y.length ? Promise.all(y).then(T) : T();
  }
  return y;
}
function Qd(i, l, s = {}) {
  const o = Sa(i, l, j1(i, s.type)), c = s.transitionOverride || (o?.transition ?? (i.getDefaultTransition() || {})), d = () => Promise.all(o ? H1(i, o, s) : []), f = (p = 0) => {
    const { variantChildren: g } = i, { delayChildren: v = 0, staggerChildren: y, staggerDirection: S } = c, C = [];
    return g?.forEach((T) => {
      T.notify("AnimationStart", l), C.push(Qd(T, l, {
        ...s,
        delay: p + (typeof v == "function" ? 0 : v) + N1(g, T, v, y, S)
      }).then(() => T.notify("AnimationComplete", l)));
    }), Promise.all(C);
  }, { when: m } = c;
  return m ? m === "beforeChildren" ? d().then(() => f()) : f().then(d) : Promise.all([d(), f(s.delay)]);
}
function cC(i, l, s = {}) {
  return i.notify("AnimationStart", l), (Array.isArray(l) ? Promise.all(l.map((c) => Qd(i, c, s))) : typeof l == "string" ? Qd(i, l, s) : Promise.all(H1(i, Sa(i, l, s.custom), s))).then(() => {
    i.notify("AnimationComplete", l);
  });
}
const fC = {
  test: (i) => i === "auto",
  parse: (i) => i
}, dC = (i) => (l) => l.test(i), hC = [Ml, gt, Un, ai, y2, g2, fC], Pv = (i) => hC.find(dC(i));
function mC(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || dh(i) : !0;
}
const pC = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function gC(i, l, s) {
  let o = 0, c;
  for (; o < i.length && !c; ) {
    const d = i[o];
    typeof d == "string" && !pC.has(d) && E2(d) && (c = i[o]), o++;
  }
  if (c && s)
    for (const d of l)
      i[d] !== c && (i[d] = wh(s, c));
}
class yC extends Ch {
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
      if (td(d ? l[d] : c))
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
      if (typeof y == "string" && (y = y.trim(), yh(y))) {
        const S = _1(y, s.current);
        S !== void 0 && (l[v] = S), v === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !L1.has(o) || l.length !== 2)
      return;
    const [c, d] = l;
    if (typeof c == "number" && typeof d == "number")
      return;
    const f = Pv(c), m = Pv(d), p = td(c), g = td(d);
    if (p !== g && va[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (Yv(f) && Yv(m))
        for (let v = 0; v < l.length; v++) {
          const y = l[v];
          typeof y == "string" && (l[v] = parseFloat(y));
        }
      else va[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: s } = this, o = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || mC(l[c])) && o.push(c);
    o.length && gC(l, o, s);
  }
  measure() {
    const { element: l, name: s } = this;
    return va[s](window.getComputedStyle(l.current), () => l.measureViewportBox());
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
const Nh = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function vC(i) {
  return qb(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
function Rh(i) {
  return qb(i) && "ownerSVGElement" in i;
}
function _h(i, l, s) {
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
function Vh(i, l, s) {
  const { style: o, vars: c, transformOrigin: d } = i;
  let f = !1, m = !1;
  for (const p in l) {
    const g = l[p];
    if (Bi.has(p)) {
      f = !0;
      continue;
    } else if (t1(p)) {
      c[p] = g;
      continue;
    } else {
      const v = tu(g, ks[p]);
      p.startsWith("origin") ? (m = !0, d[p] = v) : o[p] = v;
    }
  }
  if (l.transform || (f || s ? o.transform = O1(l, i.transform, s) : o.transform && (o.transform = "none")), m) {
    const { originX: p = "50%", originY: g = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${p} ${g} ${v}`;
  }
}
const bC = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, SC = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function TC(i, l, s = 1, o = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? bC : SC;
  i[d.offset] = `${-o}`, i[d.array] = `${l} ${s}`;
}
const k1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function G1(i, {
  attrX: l,
  attrY: s,
  attrScale: o,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, p, g, v) {
  if (Vh(i, m, g), p) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: S } = i;
  for (const C of k1)
    y[C] !== void 0 && (S[C] = y[C], delete y[C]);
  (S.transform || y.transformOrigin) && (S.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), S.transform && (S.transformBox = v?.transformBox ?? "fill-box", delete y.transformBox), l !== void 0 && (y.x = l), s !== void 0 && (y.y = s), o !== void 0 && (y.scale = o), c !== void 0 && TC(y, c, d, f, !1);
}
function Y1({ top: i, left: l, right: s, bottom: o }) {
  return {
    x: { min: l, max: s },
    y: { min: i, max: o }
  };
}
function xC({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function EC(i, l) {
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
function cd(i) {
  return i === void 0 || i === 1;
}
function Zd({ scale: i, scaleX: l, scaleY: s }) {
  return !cd(i) || !cd(l) || !cd(s);
}
function pa(i) {
  return Zd(i) || q1(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function q1(i) {
  return Fv(i.x) || Fv(i.y);
}
function Fv(i) {
  return i && i !== "0%";
}
function eu(i, l, s) {
  const o = i - s, c = l * o;
  return s + c;
}
function Jv(i, l, s, o, c) {
  return c !== void 0 && (i = eu(i, c, o)), eu(i, s, o) + l;
}
function Kd(i, l = 0, s = 1, o, c) {
  i.min = Jv(i.min, l, s, o, c), i.max = Jv(i.max, l, s, o, c);
}
function X1(i, { x: l, y: s }) {
  Kd(i.x, l.translate, l.scale, l.originPoint), Kd(i.y, s.translate, s.scale, s.originPoint);
}
const Iv = 0.999999999999, Wv = 1.0000000000001;
function AC(i, l, s, o = !1) {
  const c = s.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, f;
  for (let m = 0; m < c; m++) {
    d = s[m], f = d.projectionDelta;
    const { visualElement: p } = d.options;
    p && p.props.style && p.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && (xn(i.x, -d.scroll.offset.x), xn(i.y, -d.scroll.offset.y)), f && (l.x *= f.x.scale, l.y *= f.y.scale, X1(i, f)), o && pa(d.latestValues) && Ur(i, d.latestValues, d.layout?.layoutBox));
  }
  l.x < Wv && l.x > Iv && (l.x = 1), l.y < Wv && l.y > Iv && (l.y = 1);
}
function xn(i, l) {
  i.min += l, i.max += l;
}
function $v(i, l, s, o, c = 0.5) {
  const d = qt(i.min, i.max, c);
  Kd(i, l, s, d, o);
}
function t0(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function Ur(i, l, s) {
  const o = s ?? i;
  $v(i.x, t0(l.x, o.x), l.scaleX, l.scale, l.originX), $v(i.y, t0(l.y, o.y), l.scaleY, l.scale, l.originY);
}
function Q1(i, l) {
  return Y1(EC(i.getBoundingClientRect(), l));
}
function wC(i, l, s) {
  const o = Q1(i, s), { scroll: c } = l;
  return c && (xn(o.x, c.offset.x), xn(o.y, c.offset.y)), o;
}
const { schedule: jh } = /* @__PURE__ */ r1(queueMicrotask, !1), Sn = {
  x: !1,
  y: !1
};
function Z1() {
  return Sn.x || Sn.y;
}
function CC(i) {
  return i === "x" || i === "y" ? Sn[i] ? null : (Sn[i] = !0, () => {
    Sn[i] = !1;
  }) : Sn.x || Sn.y ? null : (Sn.x = Sn.y = !0, () => {
    Sn.x = Sn.y = !1;
  });
}
function K1(i, l) {
  const s = _h(i), o = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: o.signal
  };
  return [s, c, () => o.abort()];
}
function MC(i) {
  return !(i.pointerType === "touch" || Z1());
}
function DC(i, l, s = {}) {
  const [o, c, d] = K1(i, s);
  return o.forEach((f) => {
    let m = !1, p = !1, g;
    const v = () => {
      f.removeEventListener("pointerleave", T);
    }, y = (A) => {
      g && (g(A), g = void 0), v();
    }, S = (A) => {
      m = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), p && (p = !1, y(A));
    }, C = () => {
      m = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c);
    }, T = (A) => {
      if (A.pointerType !== "touch") {
        if (m) {
          p = !0;
          return;
        }
        y(A);
      }
    }, M = (A) => {
      if (!MC(A))
        return;
      p = !1;
      const w = l(f, A);
      typeof w == "function" && (g = w, f.addEventListener("pointerleave", T, c));
    };
    f.addEventListener("pointerenter", M, c), f.addEventListener("pointerdown", C, c);
  }), d;
}
const P1 = (i, l) => l ? i === l ? !0 : P1(i, l.parentElement) : !1, Lh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, zC = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function OC(i) {
  return zC.has(i.tagName) || i.isContentEditable === !0;
}
const NC = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function RC(i) {
  return NC.has(i.tagName) || i.isContentEditable === !0;
}
const Hr = /* @__PURE__ */ new WeakSet();
function e0(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function fd(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const _C = (i, l) => {
  const s = i.currentTarget;
  if (!s)
    return;
  const o = e0(() => {
    if (Hr.has(s))
      return;
    fd(s, "down");
    const c = e0(() => {
      fd(s, "up");
    }), d = () => fd(s, "cancel");
    s.addEventListener("keyup", c, l), s.addEventListener("blur", d, l);
  });
  s.addEventListener("keydown", o, l), s.addEventListener("blur", () => s.removeEventListener("keydown", o), l);
};
function n0(i) {
  return Lh(i) && !Z1();
}
const i0 = /* @__PURE__ */ new WeakSet();
function VC(i, l, s = {}) {
  const [o, c, d] = K1(i, s), f = (m) => {
    const p = m.currentTarget;
    if (!n0(m) || i0.has(m))
      return;
    Hr.add(p), s.stopPropagation && i0.add(m);
    const g = l(p, m), v = { ...c, capture: !0 }, y = (T, M) => {
      window.removeEventListener("pointerup", S, v), window.removeEventListener("pointercancel", C, v), Hr.has(p) && Hr.delete(p), n0(T) && typeof g == "function" && g(T, { success: M });
    }, S = (T) => {
      y(T, p === window || p === document || s.useGlobalTarget || P1(p, T.target));
    }, C = (T) => {
      y(T, !1);
    };
    window.addEventListener("pointerup", S, v), window.addEventListener("pointercancel", C, v);
  };
  return o.forEach((m) => {
    (s.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c), vC(m) && (m.addEventListener("focus", (g) => _C(g, c)), !OC(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), d;
}
const kr = /* @__PURE__ */ new WeakMap();
let Gr;
const F1 = (i, l, s) => (o, c) => c && c[0] ? c[0][i + "Size"] : Rh(o) && "getBBox" in o ? o.getBBox()[l] : o[s], jC = /* @__PURE__ */ F1("inline", "width", "offsetWidth"), LC = /* @__PURE__ */ F1("block", "height", "offsetHeight");
function BC({ target: i, borderBoxSize: l }) {
  kr.get(i)?.forEach((s) => {
    s(i, {
      get width() {
        return jC(i, l);
      },
      get height() {
        return LC(i, l);
      }
    });
  });
}
function UC(i) {
  i.forEach(BC);
}
function HC() {
  typeof ResizeObserver > "u" || (Gr = new ResizeObserver(UC));
}
function kC(i, l) {
  Gr || HC();
  const s = _h(i);
  return s.forEach((o) => {
    let c = kr.get(o);
    c || (c = /* @__PURE__ */ new Set(), kr.set(o, c)), c.add(l), Gr?.observe(o);
  }), () => {
    s.forEach((o) => {
      const c = kr.get(o);
      c?.delete(l), c?.size || Gr?.unobserve(o);
    });
  };
}
const Yr = /* @__PURE__ */ new Set();
let xl;
function GC() {
  xl = () => {
    const i = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Yr.forEach((l) => l(i));
  }, window.addEventListener("resize", xl);
}
function YC(i) {
  return Yr.add(i), xl || GC(), () => {
    Yr.delete(i), !Yr.size && typeof xl == "function" && (window.removeEventListener("resize", xl), xl = void 0);
  };
}
function a0(i, l) {
  return typeof i == "function" ? YC(i) : kC(i, l);
}
function qC(i) {
  return Rh(i) && i.tagName === "svg";
}
const l0 = (i) => typeof i == "number" ? i : parseFloat(i), s0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), El = () => ({
  x: s0(),
  y: s0()
}), o0 = () => ({ min: 0, max: 0 }), de = () => ({
  x: o0(),
  y: o0()
}), XC = /* @__PURE__ */ new WeakMap();
function ou(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Ys(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Bh = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], r0 = ["initial", ...Bh];
function ru(i) {
  if (ou(i.animate))
    return !0;
  for (let l = 0; l < r0.length; l++)
    if (Ys(i[r0[l]]))
      return !0;
  return !1;
}
function J1(i) {
  return !!(ru(i) || i.variants);
}
function QC(i, l, s) {
  for (const o in l) {
    const c = l[o], d = s[o];
    if (Ce(c))
      i.addValue(o, c);
    else if (Ce(d))
      i.addValue(o, Cl(c, { owner: i }));
    else if (d !== c)
      if (i.hasValue(o)) {
        const f = i.getValue(o);
        f.liveStyle === !0 ? f.jump(c) : f.hasAnimated || f.set(c);
      } else {
        const f = i.getStaticValue(o);
        i.addValue(o, Cl(f !== void 0 ? f : c, { owner: i }));
      }
  }
  for (const o in s)
    l[o] === void 0 && i.removeValue(o);
  return l;
}
const Pd = { current: null }, I1 = { current: !1 }, ZC = typeof window < "u";
function KC() {
  if (I1.current = !0, !!ZC)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => Pd.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      Pd.current = !1;
}
const u0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let nu = {};
function W1(i) {
  nu = i;
}
function PC() {
  return nu;
}
class FC {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Ch, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const C = ee.now();
      this.renderScheduledAt < C && (this.renderScheduledAt = C, Zt.render(this.render, !1, !0));
    };
    const { latestValues: g, renderState: v } = m;
    this.latestValues = g, this.baseTarget = { ...g }, this.initialValues = s.initial ? { ...g } : {}, this.renderState = v, this.parent = l, this.props = s, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = p, this.blockInitialAnimation = !!f, this.isControllingVariants = ru(s), this.isVariantNode = J1(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
    const { willChange: y, ...S } = this.scrapeMotionValuesFromProps(s, {}, this);
    for (const C in S) {
      const T = S[C];
      g[C] !== void 0 && Ce(T) && T.set(g[C]);
    }
  }
  mount(l) {
    if (this.hasBeenMounted)
      for (const s in this.initialValues)
        this.values.get(s)?.jump(this.initialValues[s]), this.latestValues[s] = this.initialValues[s];
    if (this.current = l, XC.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.isVariantNode && !this.isControllingVariants) {
      let s = this;
      do
        s = s.props.inherit !== !1 && s.parent;
      while (s && !s.isVariantNode);
      if (s) {
        const { variantChildren: o } = s;
        o.add(this), this.removeFromVariantTree = () => o.delete(this);
      }
    }
    this.values.forEach((s, o) => this.bindToMotionValue(o, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (I1.current || KC(), this.shouldReduceMotion = Pd.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
  }
  unmount() {
    this.projection && this.projection.unmount(), Ui(this.notifyUpdate), Ui(this.render), this.valueSubscriptions.forEach((l) => l()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this);
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
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), s.accelerate && qd.has(l) && this.current instanceof HTMLElement) {
      const { factory: f, keyframes: m, times: p, ease: g, duration: v } = s.accelerate, y = new C1({
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
    const o = Bi.has(l);
    o && this.onBindTransform && this.onBindTransform();
    const c = s.on("change", (f) => {
      this.latestValues[l] = f, this.props.onUpdate && Zt.preRender(this.notifyUpdate), o && (this.projection && (this.projection.isTransformDirty = !0), wl.get(this.current)?.check()), this.scheduleRender();
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
    for (l in nu) {
      const s = nu[l];
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : de();
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
    (l.transformTemplate || o) && this.scheduleRender(), (l.transformTemplate && !o || l.onUpdate && !c) && wl.get(this.current)?.demote(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
    for (let d = 0; d < u0.length; d++) {
      const f = u0[d];
      this.propEventSubscriptions[f] && (this.propEventSubscriptions[f](), delete this.propEventSubscriptions[f]);
      const m = "on" + f, p = l[m];
      p && (this.propEventSubscriptions[f] = this.on(f, p));
    }
    this.prevMotionValues = QC(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return o === void 0 && s !== void 0 && (o = Cl(s ?? this.getDefaultValue?.(l), {
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
    return o != null && (typeof o == "string" && (fh(o) || dh(o)) ? o = parseFloat(o) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof o != "number" && !$e.test(o) && $e.test(s) && (o = wh(l, s))
    ), this.setBaseTarget(l, Ce(o) ? o.get() : o)), Ce(o) ? o.get() : o;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(l, s) {
    this.baseTarget[l] = s;
  }
  on(l, s) {
    return this.events[l] || (this.events[l] = new Fr()), this.events[l].add(s);
  }
  notify(l, ...s) {
    this.events[l] && this.events[l].notify(...s);
  }
  scheduleRenderMicrotask() {
    jh.render(this.render);
  }
}
class $1 extends FC {
  constructor() {
    super(...arguments), this.KeyframeResolver = yC;
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
    Ce(l) && (this.childSubscription = l.on("change", (s) => {
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
function tS(i, { style: l, vars: s }, o, c) {
  const d = i.style;
  let f;
  for (f in l)
    d[f] = l[f];
  c?.applyProjectionStyles(d, o);
  for (f in s)
    d.setProperty(f, s[f]);
}
const qs = {};
function eS(i, { layout: l, layoutId: s }) {
  return Bi.has(i) || i.startsWith("origin") || (l || s !== void 0) && (!!qs[i] || i === "opacity");
}
function Uh(i, l, s) {
  const o = i.style, c = l?.style, d = {};
  if (!o)
    return d;
  for (const f in o)
    (Ce(o[f]) || c && Ce(c[f]) || eS(f, i) || s?.getValue(f)?.liveStyle !== void 0) && (d[f] = o[f]);
  return d;
}
function JC(i) {
  return window.getComputedStyle(i);
}
class IC extends $1 {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = tS;
  }
  mount(l) {
    su(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, s) {
    if (Bi.has(s))
      return this.projection?.isProjecting ? Gs(s) : dw(l, s);
    {
      const o = JC(l), c = (t1(s) ? o.getPropertyValue(s) : o[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: s }) {
    return Q1(l, s);
  }
  build(l, s, o) {
    Vh(l, s, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, s, o) {
    return Uh(l, s, o);
  }
}
const nS = /* @__PURE__ */ new Set([
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
]), iS = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function WC(i, l, s, o) {
  tS(i, l, void 0, o);
  for (const c in l.attrs)
    i.setAttribute(nS.has(c) ? c : Oh(c), l.attrs[c]);
}
function aS(i, l, s) {
  const o = Uh(i, l, s);
  for (const c in i)
    if (Ce(i[c]) || Ce(l[c])) {
      const d = li.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      o[d] = i[c];
    }
  return o;
}
class $C extends $1 {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = de;
  }
  getBaseTargetFromProps(l, s) {
    return Bi.has(s) ? super.getBaseTargetFromProps(l, s) ?? Gs(s) : l[s];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(l) {
    return Bi.has(l) ? this.latestValues[l] ?? Gs(l) : void 0;
  }
  readValueFromInstance(l, s) {
    if (Bi.has(s)) {
      const o = b1(s);
      return o && o.default || 0;
    }
    if (k1.includes(s)) {
      const c = getComputedStyle(l)[s];
      if (typeof c == "string" && c)
        return c.trim();
    }
    return s = nS.has(s) ? s : Oh(s), l.getAttribute(s);
  }
  scrapeMotionValuesFromProps(l, s, o) {
    return aS(l, s, o);
  }
  build(l, s, o) {
    G1(l, s, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, s, o, c) {
    WC(l, s, o, c);
  }
  mount(l) {
    this.isSVGTag = iS(l.tagName), super.mount(l);
  }
}
function lS(i, l) {
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
const tM = [...Bh].reverse();
function eM(i) {
  let l = (m) => Promise.all(m.map(({ animation: p, options: g }) => cC(i, p, g))), s = c0(), o = !0, c = !1;
  function d(m) {
    const { props: p, parent: g, manuallyAnimateOnMount: v } = i, y = o || c, S = [], C = /* @__PURE__ */ new Set();
    let T = {}, M = 1 / 0, A = i;
    do
      A = A.props.inherit !== !1 && A.parent;
    while (A && !A.isControllingVariants);
    if (tM.forEach((z, B) => {
      const X = s[z], rt = p[z], ut = A && A.props[z], j = rt !== void 0 ? rt : Ys(ut) || ut === !1 ? ut : void 0, N = Ys(j), Z = z === m ? X.isActive : null;
      Z === !1 && (M = B);
      const lt = N && rt === void 0 && !(y && v);
      if (X.protectedKeys = { ...T }, !X.isActive && Z === null || !j && !X.prevProp || ou(j) || typeof j == "boolean")
        return;
      if (z === "exit" && X.isActive && Z !== !0) {
        T = {
          ...T,
          ...X.prevResolvedValues
        };
        return;
      }
      const J = nM(X.prevProp, j);
      let Q = J || N && (Z && !lt || B > M), tt = !1;
      const W = Array.isArray(j) ? j : [j];
      let $ = {};
      if (Z !== !1)
        for (const P of W) {
          const { transition: et, transitionEnd: st, ...Y } = Sa(i, P, j1(i, z)) || {};
          $ = {
            ...$,
            ...Y,
            ...st
          };
        }
      const { prevResolvedValues: G } = X;
      for (const P in { ...G, ...$ }) {
        if (P in T)
          continue;
        const et = $[P], st = G[P], Y = Array.isArray(et) && Array.isArray(st) ? !lS(et, st) || J : et !== st;
        if (Y && et == null)
          C.add(P);
        else if (Y || et !== void 0 && C.has(P)) {
          Q = !0, C.delete(P) && (tt = !0), X.needsAnimating[P] = !0;
          const yt = i.getValue(P);
          yt && (yt.liveStyle = !1);
        } else
          X.protectedKeys[P] = !0;
      }
      if (X.prevProp = j, X.prevResolvedValues = $, X.isActive && (T = { ...T, ...$ }), Q && (!(lt && J) || tt))
        for (const P of W) {
          const et = { type: z };
          if (typeof P == "string" && y && v && g?.enteringChildren) {
            const st = Sa(g, P)?.transition?.delayChildren;
            et.delay = N1(g.enteringChildren, i, st);
          }
          S.push({ animation: P, options: et });
        }
    }), C.size) {
      const { initial: z } = p, B = {}, X = typeof z != "boolean" && Sa(i, Array.isArray(z) ? z[0] : z, i.presenceContext?.custom);
      X && X.transition && (B.transition = X.transition), C.forEach((rt) => {
        const ut = i.getValue(rt);
        ut && (ut.liveStyle = !0);
        const j = X && !Array.isArray(z) ? X[rt] : void 0, N = i.getBaseTargetFromProps(p, rt);
        B[rt] = (j !== void 0 ? j : N !== void 0 && !Ce(N) ? N : i.initialValues[rt] === void 0 ? i.baseTarget[rt] : void 0) ?? null;
      }), S.push({ animation: B });
    }
    const w = y && i.blockInitialAnimation || o && !v && (p.initial === !1 || p.initial === p.animate);
    return o = c = !1, !w && S.length ? l(S) : Promise.resolve();
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
      s = c0(), c = !0;
    }
  };
}
function nM(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !lS(l, i) : !1;
}
function c0() {
  const i = {};
  for (const l of Bh)
    i[l] = {
      isActive: l === "animate",
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {}
    };
  return i;
}
function Fd(i, l) {
  i.min = l.min, i.max = l.max;
}
function bn(i, l) {
  Fd(i.x, l.x), Fd(i.y, l.y);
}
function f0(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const sS = 1e-4, iM = 1 - sS, aM = 1 + sS, oS = 0.01, lM = 0 - oS, sM = 0 + oS;
function _e(i) {
  return i.max - i.min;
}
function oM(i, l, s) {
  return Math.abs(i - l) <= s;
}
function d0(i, l, s, o = 0.5) {
  i.origin = o, i.originPoint = qt(l.min, l.max, i.origin), i.scale = _e(s) / _e(l), i.translate = qt(s.min, s.max, i.origin) - i.originPoint, (i.scale >= iM && i.scale <= aM || isNaN(i.scale)) && (i.scale = 1), (i.translate >= lM && i.translate <= sM || isNaN(i.translate)) && (i.translate = 0);
}
function _s(i, l, s, o) {
  d0(i.x, l.x, s.x, o ? o.originX : void 0), d0(i.y, l.y, s.y, o ? o.originY : void 0);
}
function h0(i, l, s, o = 0) {
  const c = o ? qt(s.min, s.max, o) : s.min;
  i.min = c + l.min, i.max = i.min + _e(l);
}
function rM(i, l, s, o) {
  h0(i.x, l.x, s.x, o?.x), h0(i.y, l.y, s.y, o?.y);
}
function m0(i, l, s, o = 0) {
  const c = o ? qt(s.min, s.max, o) : s.min;
  i.min = l.min - c, i.max = i.min + _e(l);
}
function iu(i, l, s, o) {
  m0(i.x, l.x, s.x, o?.x), m0(i.y, l.y, s.y, o?.y);
}
function p0(i, l, s, o, c) {
  return i -= l, i = eu(i, 1 / s, o), c !== void 0 && (i = eu(i, 1 / c, o)), i;
}
function uM(i, l = 0, s = 1, o = 0.5, c, d = i, f = i) {
  if (Un.test(l) && (l = parseFloat(l), l = qt(f.min, f.max, l / 100) - f.min), typeof l != "number")
    return;
  let m = qt(d.min, d.max, o);
  i === d && (m -= l), i.min = p0(i.min, l, s, m, c), i.max = p0(i.max, l, s, m, c);
}
function g0(i, l, [s, o, c], d, f) {
  uM(i, l[s], l[o], l[c], l.scale, d, f);
}
const cM = ["x", "scaleX", "originX"], fM = ["y", "scaleY", "originY"];
function y0(i, l, s, o) {
  g0(i.x, l, cM, s ? s.x : void 0, o ? o.x : void 0), g0(i.y, l, fM, s ? s.y : void 0, o ? o.y : void 0);
}
function v0(i) {
  return i.translate === 0 && i.scale === 1;
}
function rS(i) {
  return v0(i.x) && v0(i.y);
}
function b0(i, l) {
  return i.min === l.min && i.max === l.max;
}
function dM(i, l) {
  return b0(i.x, l.x) && b0(i.y, l.y);
}
function S0(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function uS(i, l) {
  return S0(i.x, l.x) && S0(i.y, l.y);
}
function T0(i) {
  return _e(i.x) / _e(i.y);
}
function x0(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function Tn(i) {
  return [i("x"), i("y")];
}
function E0(i, l) {
  return l.max === l.min ? 0 : i / (l.max - l.min) * 100;
}
const Ns = {
  correct: (i, l) => {
    if (!l.target)
      return i;
    if (typeof i == "string")
      if (gt.test(i))
        i = parseFloat(i);
      else
        return i;
    const s = E0(i, l.target.x), o = E0(i, l.target.y);
    return `${s}% ${o}%`;
  }
}, hM = {
  correct: (i, { treeScale: l, projectionDelta: s }) => {
    const o = i, c = $e.parse(i);
    if (c.length > 5)
      return o;
    const d = $e.createTransformer(i), f = typeof c[0] != "number" ? 1 : 0, m = s.x.scale * l.x, p = s.y.scale * l.y;
    c[0 + f] /= m, c[1 + f] /= p;
    const g = qt(m, p, 0.5);
    return typeof c[2 + f] == "number" && (c[2 + f] /= g), typeof c[3 + f] == "number" && (c[3 + f] /= g), d(c);
  }
};
function mM(i, l, s) {
  let o = "";
  const c = i.x.translate / l.x, d = i.y.translate / l.y, f = s?.z || 0;
  if ((c || d || f) && (o = `translate3d(${c}px, ${d}px, ${f}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `), s) {
    const { transformPerspective: g, rotate: v, pathRotation: y, rotateX: S, rotateY: C, skewX: T, skewY: M } = s;
    g && (o = `perspective(${g}px) ${o}`), v && (o += `rotate(${v}deg) `), y && (o += `rotate(${y}deg) `), S && (o += `rotateX(${S}deg) `), C && (o += `rotateY(${C}deg) `), T && (o += `skewX(${T}deg) `), M && (o += `skewY(${M}deg) `);
  }
  const m = i.x.scale * l.x, p = i.y.scale * l.y;
  return (m !== 1 || p !== 1) && (o += `scale(${m}, ${p})`), o || "none";
}
const pM = Nh.length, A0 = (i) => typeof i == "number" || gt.test(i);
function gM(i, l, s, o, c, d) {
  c ? (i.opacity = qt(0, s.opacity ?? 1, yM(o)), i.opacityExit = qt(l.opacity ?? 1, 0, vM(o))) : d && (i.opacity = qt(l.opacity ?? 1, s.opacity ?? 1, o));
  for (let f = 0; f < pM; f++) {
    const m = Nh[f];
    let p = w0(l, m), g = w0(s, m);
    if (p === void 0 && g === void 0)
      continue;
    p || (p = 0), g || (g = 0), p === 0 || g === 0 || A0(p) === A0(g) ? (i[m] = Math.max(qt(l0(p), l0(g), o), 0), (Un.test(g) || Un.test(p)) && (i[m] += "%")) : i[m] = g;
  }
  (l.rotate || s.rotate) && (i.rotate = qt(l.rotate || 0, s.rotate || 0, o));
}
function w0(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const yM = /* @__PURE__ */ cS(0, 0.5, Ib), vM = /* @__PURE__ */ cS(0.5, 0.95, En);
function cS(i, l, s) {
  return (o) => o < i ? 0 : o > l ? 1 : s(/* @__PURE__ */ Ta(i, l, o));
}
function bM(i, l, s) {
  const o = Ce(i) ? i : Cl(i);
  return o.start(zh("", o, l, s)), o.animation;
}
function Xs(i, l, s, o = { passive: !0 }) {
  return i.addEventListener(l, s, o), () => i.removeEventListener(l, s, o);
}
const SM = (i, l) => i.depth - l.depth;
class TM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    ch(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    Pr(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(SM), this.isDirty = !1, this.children.forEach(l);
  }
}
function xM(i, l) {
  const s = ee.now(), o = ({ timestamp: c }) => {
    const d = c - s;
    d >= l && (Ui(o), i(d - l));
  };
  return Zt.setup(o, !0), () => Ui(o);
}
function qr(i) {
  return Ce(i) ? i.get() : i;
}
class EM {
  constructor() {
    this.members = [];
  }
  add(l) {
    ch(this.members, l);
    for (let s = this.members.length - 1; s >= 0; s--) {
      const o = this.members[s];
      if (o === l || o === this.lead || o === this.prevLead)
        continue;
      const c = o.instance;
      (!c || c.isConnected === !1) && !o.snapshot && (Pr(this.members, o), o.unmount());
    }
    l.scheduleRender();
  }
  remove(l) {
    if (Pr(this.members, l), l === this.prevLead && (this.prevLead = void 0), l === this.lead) {
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
const AM = {
  borderRadius: {
    ...Ns,
    applyTo: [...Nh]
  },
  borderTopLeftRadius: Ns,
  borderTopRightRadius: Ns,
  borderBottomLeftRadius: Ns,
  borderBottomRightRadius: Ns,
  boxShadow: hM
}, Xr = {
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
Object.assign(qs, {
  ...AM,
  ...qs
});
const dd = ["", "X", "Y", "Z"], wM = 1e3;
let CM = 0;
function hd(i, l, s, o) {
  const { latestValues: c } = l;
  c[i] && (s[i] = c[i], l.setStaticValue(i, 0), o && (o[i] = 0));
}
const md = ({ instance: i }) => i && wl.get(i)?.demote();
function fS(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const s = U1(l);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Zt, !(c || d));
  }
  const { parent: o } = i;
  o && !o.hasCheckedOptimisedAppear && fS(o);
}
function dS({ attachResizeListener: i, defaultParent: l, measureScroll: s, checkIsScrollRoot: o, resetTransform: c }) {
  return class {
    constructor(f = {}, m = l?.()) {
      this.id = CM++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(zM), this.nodes.forEach(BM), this.nodes.forEach(UM), this.nodes.forEach(OM);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new TM());
    }
    addEventListener(f, m) {
      return this.eventHandlers.has(f) || this.eventHandlers.set(f, new Fr()), this.eventHandlers.get(f).add(m);
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
      this.isSVG = Rh(f) && !qC(f), this.instance = f;
      const { layoutId: m, layout: p, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0), i) {
        let v, y = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        Zt.read(() => {
          y = window.innerWidth;
        }), i(f, () => {
          const C = window.innerWidth;
          C !== y && (y = C, this.root.updateBlockedByResize = !0, v && v(), v = xM(S, 250), Xr.hasAnimatedSinceResize && (Xr.hasAnimatedSinceResize = !1, this.nodes.forEach(D0)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && g && (m || p) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: y, hasRelativeLayoutChanged: S, layout: C }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const T = this.options.transition || g.getDefaultTransition() || qM, { onLayoutAnimationStart: M, onLayoutAnimationComplete: A } = g.getProps(), w = !this.targetLayout || !uS(this.targetLayout, C), z = !y && S;
        if (this.options.layoutRoot || this.resumeFrom || z || y && (w || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const B = {
            ...Dh(T, "layout"),
            onPlay: M,
            onComplete: A
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (B.delay = 0, B.type = !1), this.startAnimation(B), this.setAnimationOrigin(v, z, B.path);
        } else
          y || D0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = C;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const f = this.getStack();
      f && f.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, this.eventHandlers.clear(), Ui(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(HM), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && fS(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      md(this), this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        y.shouldResetTransform = !0, md(y), (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1), y.isAnimationBlocked && (y.dragSnapshot || (y.dragSnapshot = y.measure()), this.dragAncestor = y);
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), p && this.nodes.forEach(RM), this.nodes.forEach(C0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(M0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(VM), this.nodes.forEach(jM), this.nodes.forEach(LM), this.nodes.forEach(MM), this.nodes.forEach(DM)) : this.nodes.forEach(M0), this.clearAllSnapshots();
      const m = ee.now();
      ue.delta = kn(0, 1e3 / 60, m - ue.timestamp), ue.timestamp = m, ue.isProcessing = !0, ad.update.process(ue), ad.preRender.process(ue), ad.render.process(ue), ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, jh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(NM), this.sharedNodes.forEach(kM);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, Zt.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      Zt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !_e(this.snapshot.measuredBox.x) && !_e(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++)
          this.path[p].updateScroll();
      const f = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected || (this.layoutCorrected = de()), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
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
      f && md(this);
      const m = this.projectionDelta && !rS(this.projectionDelta), p = this.getTransformTemplate(), g = p ? p(this.latestValues, "") : void 0, v = g !== this.prevTransformTemplateValue;
      f && this.instance && (m || pa(this.latestValues) || v) && (c(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      return f && (p = this.removeTransform(p)), XM(p), {
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
        return de();
      const m = f.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(QM))) {
        const { scroll: g } = this.root;
        g && (xn(m.x, g.offset.x), xn(m.y, g.offset.y));
      }
      return m;
    }
    removeElementScroll(f) {
      const m = de();
      if (bn(m, f), this.scroll?.wasRoot)
        return m;
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p], { scroll: v, options: y } = g;
        g !== this.root && v && y.layoutScroll && (v.wasRoot && bn(m, f), xn(m.x, v.offset.x), xn(m.y, v.offset.y));
      }
      return m;
    }
    applyTransform(f, m = !1, p) {
      const g = p || de();
      bn(g, f);
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        !m && y.options.layoutScroll && y.scroll && y !== y.root && (xn(g.x, -y.scroll.offset.x), xn(g.y, -y.scroll.offset.y)), pa(y.latestValues) && Ur(g, y.latestValues, y.layout?.layoutBox);
      }
      return pa(this.latestValues) && Ur(g, this.latestValues, this.layout?.layoutBox), g;
    }
    removeTransform(f) {
      const m = de();
      bn(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        if (!pa(g.latestValues))
          continue;
        let v;
        g.instance && (Zd(g.latestValues) && g.updateSnapshot(), v = de(), bn(v, g.measurePageBox())), y0(m, g.latestValues, g.snapshot?.layoutBox, v);
      }
      return pa(this.latestValues) && y0(m, this.latestValues), m;
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
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp && this.relativeParent.resolveTargetDelta(!0);
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
      this.resolvedRelativeTargetAt = ue.timestamp;
      const S = this.getClosestProjectingParent();
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = de(), this.targetWithTransforms = de()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), rM(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : bn(this.target, this.layout.layoutBox), X1(this.target, this.targetDelta)) : bn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Zd(this.parent.latestValues) || q1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(f, m, p) {
      this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = de(), this.relativeTargetOrigin = de(), iu(this.relativeTargetOrigin, m, p, this.options.layoutAnchor || void 0), bn(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const f = this.getLead(), m = !!this.resumingFrom || this !== f;
      let p = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1), m && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1), this.resolvedRelativeTargetAt === ue.timestamp && (p = !1), p)
        return;
      const { layout: g, layoutId: v } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(g || v))
        return;
      bn(this.layoutCorrected, this.layout.layoutBox);
      const y = this.treeScale.x, S = this.treeScale.y;
      AC(this.layoutCorrected, this.treeScale, this.path, m), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = de());
      const { target: C } = f;
      if (!C) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (f0(this.prevProjectionDelta.x, this.projectionDelta.x), f0(this.prevProjectionDelta.y, this.projectionDelta.y)), _s(this.projectionDelta, this.layoutCorrected, C, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== S || !x0(this.projectionDelta.x, this.prevProjectionDelta.x) || !x0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", C));
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
      const C = de(), T = g ? g.source : void 0, M = this.layout ? this.layout.source : void 0, A = T !== M, w = this.getStack(), z = !w || w.members.length <= 1, B = !!(A && !z && this.options.crossfade === !0 && !this.path.some(YM));
      this.animationProgress = 0;
      let X;
      const rt = p?.interpolateProjection(f);
      this.mixTargetDelta = (ut) => {
        const j = ut / 1e3, N = rt?.(j);
        N ? (S.x.translate = N.x, S.x.scale = qt(f.x.scale, 1, j), S.x.origin = f.x.origin, S.x.originPoint = f.x.originPoint, S.y.translate = N.y, S.y.scale = qt(f.y.scale, 1, j), S.y.origin = f.y.origin, S.y.originPoint = f.y.originPoint) : (z0(S.x, f.x, j), z0(S.y, f.y, j)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (iu(C, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), GM(this.relativeTarget, this.relativeTargetOrigin, C, j), X && dM(this.relativeTarget, X) && (this.isProjectionDirty = !1), X || (X = de()), bn(X, this.relativeTarget)), A && (this.animationValues = y, gM(y, v, this.latestValues, j, B, z)), N && N.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = N.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Ui(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Zt.update(() => {
        Xr.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Cl(0)), this.motionValue.jump(0, !1), this.currentAnimation = bM(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m);
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), ew(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(wM), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead(), { targetWithTransforms: m, layout: p, latestValues: g } = f;
      let { target: v } = f;
      if (!(!m || !v || !p)) {
        if (this !== f && this.layout && p && hS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          v = this.target || de();
          const y = _e(this.layout.layoutBox.x);
          v.x.min = f.target.x.min, v.x.max = v.x.min + y;
          const S = _e(this.layout.layoutBox.y);
          v.y.min = f.target.y.min, v.y.max = v.y.min + S;
        }
        bn(m, v), Ur(m, g), _s(this.projectionDeltaWithTransform, this.layoutCorrected, m, g);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new EM()), this.sharedNodes.get(f).add(m);
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
      p.z && hd("z", f, g, this.animationValues);
      for (let v = 0; v < dd.length; v++)
        hd(`rotate${dd[v]}`, f, g, this.animationValues), hd(`skew${dd[v]}`, f, g, this.animationValues);
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
        this.needsReset = !1, f.visibility = "", f.opacity = "", f.pointerEvents = qr(m?.pointerEvents) || "", f.transform = p ? p(this.latestValues, "") : "none";
        return;
      }
      const g = this.getLead();
      if (!this.projectionDelta || !this.layout || !g.target) {
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = qr(m?.pointerEvents) || ""), this.hasProjected && !pa(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let y = mM(this.projectionDeltaWithTransform, this.treeScale, v);
      p && (y = p(v, y)), f.transform = y;
      const { x: S, y: C } = this.projectionDelta;
      f.transformOrigin = `${S.origin * 100}% ${C.origin * 100}% 0`, g.animationValues ? f.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : f.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const T in qs) {
        if (v[T] === void 0)
          continue;
        const { correct: M, applyTo: A, isCSSVariable: w } = qs[T], z = y === "none" ? v[T] : M(v[T], g);
        if (A) {
          const B = A.length;
          for (let X = 0; X < B; X++)
            f[A[X]] = z;
        } else
          w ? this.options.visualElement.renderState.vars[T] = z : f[T] = z;
      }
      this.options.layoutId && (f.pointerEvents = g === this ? qr(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(C0), this.root.sharedNodes.clear();
    }
  };
}
function MM(i) {
  i.updateLayout(), _M(i);
}
function DM(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: o } = i.layout, { animationType: c } = i.options, d = l.source !== i.layout.source;
    if (c === "size")
      Tn((v) => {
        const y = d ? l.measuredBox[v] : l.layoutBox[v], S = _e(y);
        y.min = s[v].min, y.max = y.min + S;
      });
    else if (c === "x" || c === "y") {
      const v = c === "x" ? "y" : "x";
      Fd(d ? l.measuredBox[v] : l.layoutBox[v], s[v]);
    } else hS(c, l.layoutBox, s) && Tn((v) => {
      const y = d ? l.measuredBox[v] : l.layoutBox[v], S = _e(s[v]);
      y.max = y.min + S, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + S);
    });
    const f = El();
    _s(f, s, l.layoutBox);
    const m = El();
    d ? _s(m, i.applyTransform(o, !0), l.measuredBox) : _s(m, s, l.layoutBox);
    const p = !rS(f);
    let g = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: y, layout: S } = v;
        if (y && S) {
          const C = i.options.layoutAnchor || void 0, T = de();
          iu(T, l.layoutBox, y.layoutBox, C);
          const M = de();
          iu(M, s, S.layoutBox, C), uS(T, M) || (g = !0), v.options.layoutRoot && (i.relativeTarget = M, i.relativeTargetOrigin = T, i.relativeParent = v);
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
function zM(i) {
  i.parent && (i.isProjecting() || (i.isProjectionDirty = i.parent.isProjectionDirty), i.isSharedProjectionDirty || (i.isSharedProjectionDirty = !!(i.isProjectionDirty || i.parent.isProjectionDirty || i.parent.isSharedProjectionDirty)), i.isTransformDirty || (i.isTransformDirty = i.parent.isTransformDirty));
}
function OM(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function NM(i) {
  i.clearSnapshot();
}
function C0(i) {
  i.clearMeasurements();
}
function RM(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function M0(i) {
  i.isLayoutDirty = !1;
}
function _M(i) {
  const { snapshot: l, dragAncestor: s } = i, o = s?.layout;
  if (!l || !o || i.resumeFrom || i.isAnimationBlocked)
    return;
  const c = s.dragSnapshot;
  Tn((d) => xn(l.layoutBox[d], o.layoutBox[d].min - c.layoutBox[d].min));
}
function VM(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.dragSnapshot || i.layout, i.isLayoutDirty = !0);
}
function jM(i) {
  i.relativeTarget && i.relativeParent?.isLayoutDirty && (i.currentAnimation ? i.isLayoutDirty = !0 : (i.targetDelta = void 0, i.removeRelativeTarget()));
}
function LM(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function D0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function BM(i) {
  i.resolveTargetDelta();
}
function UM(i) {
  i.calcProjection();
}
function HM(i) {
  i.resetSkewAndRotation();
}
function kM(i) {
  i.removeLeadSnapshot();
}
function z0(i, l, s) {
  i.translate = qt(l.translate, 0, s), i.scale = qt(l.scale, 1, s), i.origin = l.origin, i.originPoint = l.originPoint;
}
function O0(i, l, s, o) {
  i.min = qt(l.min, s.min, o), i.max = qt(l.max, s.max, o);
}
function GM(i, l, s, o) {
  O0(i.x, l.x, s.x, o), O0(i.y, l.y, s.y, o);
}
function YM(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const qM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, N0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), R0 = N0("applewebkit/") && !N0("chrome/") ? Math.round : En;
function _0(i) {
  i.min = R0(i.min), i.max = R0(i.max);
}
function XM(i) {
  _0(i.x), _0(i.y);
}
function hS(i, l, s) {
  return i === "position" || i === "preserve-aspect" && !oM(T0(l), T0(s), 0.2);
}
function QM(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const ZM = dS({
  attachResizeListener: (i, l) => Xs(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), pd = {
  current: void 0
}, mS = dS({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!pd.current) {
      const i = new ZM({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), pd.current = i;
    }
    return pd.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), pS = q.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function KM(i = !0) {
  const l = q.useContext(uh);
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
const gS = q.createContext({ strict: !1 }), V0 = {
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
let j0 = !1;
function PM() {
  if (j0)
    return;
  const i = {};
  for (const l in V0)
    i[l] = {
      isEnabled: (s) => V0[l].some((o) => !!s[o])
    };
  W1(i), j0 = !0;
}
function yS() {
  return PM(), PC();
}
function FM(i) {
  const l = yS();
  for (const s in i)
    l[s] = {
      ...l[s],
      ...i[s]
    };
  W1(l);
}
const uu = /* @__PURE__ */ q.createContext({});
function JM(i, l) {
  if (ru(i)) {
    const { initial: s, animate: o } = i;
    return {
      initial: s === !1 || Ys(s) ? s : void 0,
      animate: Ys(o) ? o : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function IM(i) {
  const { initial: l, animate: s } = JM(i, q.useContext(uu));
  return q.useMemo(() => ({ initial: l, animate: s }), [L0(l), L0(s)]);
}
function L0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Hh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function vS(i, l, s) {
  for (const o in l)
    !Ce(l[o]) && !eS(o, s) && (i[o] = l[o]);
}
function WM({ transformTemplate: i }, l) {
  return q.useMemo(() => {
    const s = Hh();
    return Vh(s, l, i), Object.assign({}, s.vars, s.style);
  }, [l]);
}
function $M(i, l) {
  const s = i.style || {}, o = {};
  return vS(o, s, i), Object.assign(o, WM(i, l)), o;
}
function t3(i, l) {
  const s = {}, o = $M(i, l);
  return i.drag && i.dragListener !== !1 && (s.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (s.tabIndex = 0), s.style = o, s;
}
const bS = () => ({
  ...Hh(),
  attrs: {}
});
function e3(i, l, s, o) {
  const c = q.useMemo(() => {
    const d = bS();
    return G1(d, l, iS(o), i.transformTemplate, i.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (i.style) {
    const d = {};
    vS(d, i.style, i), c.style = { ...d, ...c.style };
  }
  return c;
}
const n3 = /* @__PURE__ */ new Set([
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
function au(i) {
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || n3.has(i);
}
function i3(i, l) {
  return i.startsWith("on") ? !au(i) : l?.(i) ?? !au(i);
}
function a3(i, l, s, o) {
  const c = {};
  for (const d in i)
    d === "values" && typeof i.values == "object" || Ce(i[d]) || (i3(d, o) || s === !0 && au(d) || !l && !au(d) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && d.startsWith("onDrag")) && (c[d] = i[d]);
  return c;
}
const l3 = [
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
function kh(i) {
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
      !!(l3.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function s3(i, l, s, { latestValues: o }, c, d = !1, f, m) {
  const g = (f ?? kh(i) ? e3 : t3)(l, o, c, i), v = a3(l, typeof i == "string", d, m), y = i !== q.Fragment ? { ...v, ...g, ref: s } : {}, { children: S } = l, C = q.useMemo(() => Ce(S) ? S.get() : S, [S]);
  return q.createElement(i, {
    ...y,
    children: C
  });
}
function o3({ scrapeMotionValuesFromProps: i, createRenderState: l }, s, o, c) {
  return {
    latestValues: r3(s, o, c, i),
    renderState: l()
  };
}
function r3(i, l, s, o) {
  const c = {}, d = o(i, {});
  for (const S in d)
    c[S] = qr(d[S]);
  let { initial: f, animate: m } = i;
  const p = ru(i), g = J1(i);
  l && g && !p && i.inherit !== !1 && (f === void 0 && (f = l.initial), m === void 0 && (m = l.animate));
  let v = s ? s.initial === !1 : !1;
  v = v || f === !1;
  const y = v ? m : f;
  if (y && typeof y != "boolean" && !ou(y)) {
    const S = Array.isArray(y) ? y : [y];
    for (let C = 0; C < S.length; C++) {
      const T = V1(i, S[C]);
      if (T) {
        const { transitionEnd: M, transition: A, ...w } = T;
        for (const z in w) {
          let B = w[z];
          if (Array.isArray(B)) {
            const X = v ? B.length - 1 : 0;
            B = B[X];
          }
          B !== null && (c[z] = B);
        }
        for (const z in M)
          c[z] = M[z];
      }
    }
  }
  return c;
}
const SS = (i) => (l, s) => {
  const o = q.useContext(uu), c = q.useContext(uh), d = () => o3(i, l, o, c);
  return s ? d() : n2(d);
}, u3 = /* @__PURE__ */ SS({
  scrapeMotionValuesFromProps: Uh,
  createRenderState: Hh
}), c3 = /* @__PURE__ */ SS({
  scrapeMotionValuesFromProps: aS,
  createRenderState: bS
}), f3 = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function d3(i, l, s) {
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
const TS = q.createContext({});
function vl(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function h3(i, l, s, o, c, d) {
  const { visualElement: f } = q.useContext(uu), m = q.useContext(gS), p = q.useContext(uh), g = q.useContext(pS), v = g.reducedMotion, y = g.skipAnimations, S = q.useRef(null), C = q.useRef(!1);
  o = o || m.renderer, !S.current && o && (S.current = o(i, {
    visualState: l,
    parent: f,
    props: s,
    presenceContext: p,
    blockInitialAnimation: p ? p.initial === !1 : !1,
    reducedMotionConfig: v,
    skipAnimations: y,
    isSVG: d
  }), C.current && S.current && (S.current.manuallyAnimateOnMount = !0));
  const T = S.current, M = q.useContext(TS);
  T && !T.projection && c && (T.type === "html" || T.type === "svg") && m3(S.current, s, c, M);
  const A = q.useRef(!1);
  q.useInsertionEffect(() => {
    T && A.current && T.update(s, p);
  });
  const w = s[B1], z = q.useRef(!!w && typeof window < "u" && !window.MotionHandoffIsComplete?.(w) && window.MotionHasOptimisedAnimation?.(w));
  return Nv(() => {
    !C.current || !T || (T.animationState?.animateChanges(), T.enteringChildren = void 0);
  }, []), Nv(() => {
    C.current = !0, T && (A.current = !0, window.MotionIsMounted = !0, T.updateFeatures(), T.scheduleRenderMicrotask(), z.current && T.animationState && T.animationState.animateChanges());
  }), q.useEffect(() => {
    T && (!z.current && T.animationState && T.animationState.animateChanges(), z.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(w);
    }), z.current = !1), T.enteringChildren = void 0);
  }), T;
}
function m3(i, l, s, o) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: m, layoutScroll: p, layoutRoot: g, layoutAnchor: v, layoutCrossfade: y } = l;
  i.projection = new s(i.latestValues, l["data-framer-portal-id"] ? void 0 : xS(i.parent)), i.projection.setOptions({
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
function xS(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : xS(i.parent);
}
function gd(i, { forwardMotionProps: l = !1, type: s } = {}, o, c) {
  o && FM(o);
  const d = s ? s === "svg" : kh(i), f = d ? c3 : u3;
  function m(g, v) {
    let y;
    const S = {
      ...q.useContext(pS),
      ...g,
      layoutId: p3(g)
    }, { isStatic: C, isValidProp: T } = S, M = IM(g), A = f(g, C);
    if (!C && typeof window < "u") {
      g3();
      const w = y3(S);
      y = w.MeasureLayout, M.visualElement = h3(i, A, S, c, w.ProjectionNode, d);
    }
    return O.jsxs(uu.Provider, { value: M, children: [y && M.visualElement ? O.jsx(y, { visualElement: M.visualElement, ...S }) : null, s3(i, g, d3(A, M.visualElement, v), A, C, l, d, T)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const p = q.forwardRef(m);
  return p[f3] = i, p;
}
function p3({ layoutId: i }) {
  const l = q.useContext(Yb).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function g3(i, l) {
  q.useContext(gS).strict;
}
function y3(i) {
  const l = yS(), { drag: s, layout: o } = l;
  if (!s && !o)
    return {};
  const c = { ...s, ...o };
  return {
    MeasureLayout: s?.isEnabled(i) || o?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function v3(i, l) {
  if (typeof Proxy > "u")
    return gd;
  const s = /* @__PURE__ */ new Map(), o = (d, f) => gd(d, f, i, l), c = (d, f) => o(d, f);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, f) => f === "create" ? o : (s.has(f) || s.set(f, gd(f, void 0, i, l)), s.get(f))
  });
}
const b3 = (i, l) => l.isSVG ?? kh(i) ? new $C(l) : new IC(l, {
  allowProjection: i !== q.Fragment
});
class S3 extends ki {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = eM(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    ou(l) && (this.unmountControls = l.subscribe(this.node));
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
let T3 = 0;
class x3 extends ki {
  constructor() {
    super(...arguments), this.id = T3++;
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
          const { transition: g, transitionEnd: v, ...y } = Sa(this.node, p) || {};
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
const E3 = {
  animation: {
    Feature: S3
  },
  exit: {
    Feature: x3
  }
};
function cu(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const A3 = (i) => (l) => Lh(l) && i(l, cu(l));
function Vs(i, l, s, o) {
  return Xs(i, l, A3(s), o);
}
const ES = ({ current: i }) => i ? i.ownerDocument.defaultView : null, B0 = (i, l) => Math.abs(i - l);
function w3(i, l) {
  const s = B0(i.x, l.x), o = B0(i.y, l.y);
  return Math.sqrt(s ** 2 + o ** 2);
}
const U0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class AS {
  constructor(l, s, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: f = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (T) => {
      this.handleScroll(T.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = _r(this.lastRawMoveEventInfo, this.transformPagePoint));
      const T = yd(this.lastMoveEventInfo, this.history), M = this.startEvent !== null, A = w3(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!M && !A)
        return;
      const { point: w } = T;
      this.history.push({ ...w, timestamp: ee.now() });
      const { onStart: z, onMove: B } = this.handlers;
      M || (z && z(this.lastMoveEvent, T), this.startEvent = this.lastMoveEvent), B && B(this.lastMoveEvent, T);
    }, this.handlePointerMove = (T, M) => {
      this.lastMoveEvent = T, this.lastRawMoveEventInfo = M, this.lastMoveEventInfo = _r(M, this.transformPagePoint), this.hasPendingMove = !0, Zt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (T, M) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: A, onSessionEnd: w, resumeAnimation: z } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && z && z(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const B = yd(T.type === "pointercancel" ? this.lastMoveEventInfo : _r(M, this.transformPagePoint), this.history);
      this.startEvent && A && A(T, B), w && w(T, B);
    }, !Lh(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = s, this.transformPagePoint = o, this.distanceThreshold = f, this.contextWindow = c || window;
    const p = cu(l), g = _r(p, this.transformPagePoint), { point: v } = g, { timestamp: y } = ue;
    this.history = [{ ...v, timestamp: y }];
    const { onSessionStart: S } = s;
    S && S(l, yd(g, this.history));
    const C = { passive: !0, capture: !0 };
    this.removeListeners = Fs(Vs(this.contextWindow, "pointermove", this.handlePointerMove, C), Vs(this.contextWindow, "pointerup", this.handlePointerUp, C), Vs(this.contextWindow, "pointercancel", this.handlePointerUp, C)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let s = l.parentElement;
    for (; s; ) {
      const o = getComputedStyle(s);
      (U0.has(o.overflowX) || U0.has(o.overflowY)) && this.scrollPositions.set(s, {
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
    d.x === 0 && d.y === 0 || (o ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += d.x, this.lastMoveEventInfo.point.y += d.y) : this.history.length > 0 && (this.history[0].x -= d.x, this.history[0].y -= d.y), this.scrollPositions.set(l, c), Zt.update(this.updatePoint, !0));
  }
  updateHandlers(l) {
    this.handlers = l;
  }
  end() {
    this.removeListeners && this.removeListeners(), this.removeScrollListeners && this.removeScrollListeners(), this.scrollPositions.clear(), Ui(this.updatePoint);
  }
}
function _r(i, l) {
  return l ? { point: l(i.point) } : i;
}
function H0(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function yd({ point: i }, l) {
  return {
    point: i,
    delta: H0(i, wS(l)),
    offset: H0(i, C3(l)),
    velocity: M3(l, 0.1)
  };
}
function C3(i) {
  return i[0];
}
function wS(i) {
  return i[i.length - 1];
}
function M3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let s = i.length - 1, o = null;
  const c = wS(i);
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
function D3(i, { min: l, max: s }, o) {
  return l !== void 0 && i < l ? i = o ? qt(l, i, o.min) : Math.max(i, l) : s !== void 0 && i > s && (i = o ? qt(s, i, o.max) : Math.min(i, s)), i;
}
function k0(i, l, s) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: s !== void 0 ? i.max + s - (i.max - i.min) : void 0
  };
}
function z3(i, { top: l, left: s, bottom: o, right: c }) {
  return {
    x: k0(i.x, s, c),
    y: k0(i.y, l, o)
  };
}
function G0(i, l) {
  let s = l.min - i.min, o = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([s, o] = [o, s]), { min: s, max: o };
}
function O3(i, l) {
  return {
    x: G0(i.x, l.x),
    y: G0(i.y, l.y)
  };
}
function N3(i, l) {
  let s = 0.5;
  const o = _e(i), c = _e(l);
  return c > o ? s = /* @__PURE__ */ Ta(l.min, l.max - o, i.min) : o > c && (s = /* @__PURE__ */ Ta(i.min, i.max - c, l.min)), kn(0, 1, s);
}
function R3(i, l) {
  const s = {};
  return l.min !== void 0 && (s.min = l.min - i.min), l.max !== void 0 && (s.max = l.max - i.min), s;
}
const Jd = 0.35;
function _3(i = Jd) {
  return i === !1 ? i = 0 : i === !0 && (i = Jd), {
    x: Y0(i, "left", "right"),
    y: Y0(i, "top", "bottom")
  };
}
function Y0(i, l, s) {
  return {
    min: q0(i, l),
    max: q0(i, s)
  };
}
function q0(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const V3 = /* @__PURE__ */ new WeakMap();
class j3 {
  constructor(l) {
    this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = de(), this.latestPointerEvent = null, this.latestPanInfo = null, this.visualElement = l;
  }
  start(l, { snapToCursor: s = !1, distanceThreshold: o } = {}) {
    const { presenceContext: c } = this.visualElement;
    if (c && c.isPresent === !1)
      return;
    const d = (y) => {
      s && this.snapToCursor(y), this.stopAnimation();
    }, f = (y, S) => {
      const { drag: C, dragPropagation: T, onDragStart: M } = this.getProps();
      if (C && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = CC(C), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Tn((w) => {
        let z = this.getAxisMotionValue(w).get() || 0;
        if (Un.test(z)) {
          const { projection: B } = this.visualElement;
          if (B && B.layout) {
            const X = B.layout.layoutBox[w];
            X && (z = _e(X) * (parseFloat(z) / 100));
          }
        }
        this.originPoint[w] = z;
      }), M && Zt.update(() => M(y, S), !1, !0), Xd(this.visualElement, "transform");
      const { animationState: A } = this.visualElement;
      A && A.setActive("whileDrag", !0);
    }, m = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S;
      const { dragPropagation: C, dragDirectionLock: T, onDirectionLock: M, onDrag: A } = this.getProps();
      if (!C && !this.openDragLock)
        return;
      const { offset: w } = S;
      if (T && this.currentDirection === null) {
        this.currentDirection = B3(w), this.currentDirection !== null && M && M(this.currentDirection);
        return;
      }
      this.updateAxis("x", S.point, w), this.updateAxis("y", S.point, w), this.visualElement.render(), A && Zt.update(() => A(y, S), !1, !0);
    }, p = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S, this.stop(y, S), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new AS(l, {
      onSessionStart: d,
      onStart: f,
      onMove: m,
      onSessionEnd: p,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: o,
      contextWindow: ES(this.visualElement),
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
    m && Zt.postRender(() => m(o, c));
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
    if (!o || !Vr(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + o[l];
    this.constraints && this.constraints[l] && (f = D3(f, this.constraints[l], this.elastic[l])), d.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: s } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && vl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = z3(o.layoutBox, l) : this.constraints = !1, this.elastic = _3(s), c !== this.constraints && !vl(l) && o && this.constraints && !this.hasMutatedConstraints && Tn((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = R3(o.layoutBox[d], this.constraints[d]));
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
    const d = wC(o, c.root, this.visualElement.getTransformPagePoint());
    let f = O3(c.layout.layoutBox, d);
    if (s) {
      const m = s(xC(f));
      this.hasMutatedConstraints = !!m, m && (f = Y1(m));
    }
    return f;
  }
  startAnimation(l) {
    const { drag: s, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: m } = this.getProps(), p = this.constraints || {}, g = Tn((v) => {
      if (!Vr(v, s, this.currentDirection))
        return;
      let y = p && p[v] || {};
      (f === !0 || f === v) && (y = { min: 0, max: 0 });
      const S = c ? 200 : 1e6, C = c ? 40 : 1e7, T = {
        type: "inertia",
        velocity: o ? l[v] : 0,
        bounceStiffness: S,
        bounceDamping: C,
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
    return Xd(this.visualElement, l), o.start(zh(l, o, 0, s, this.visualElement, !1));
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
      if (!Vr(m, o, this.currentDirection))
        return;
      const p = this.getAxisMotionValue(m), { min: g, max: v } = f[m];
      p.set((p.get() || 0) + d[m] - qt(g, v, 0.5));
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
      d[m] = N3({ min: p, max: p }, c[m]);
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    this.visualElement.current.style.transform = f ? f({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), Tn((m) => {
      const p = this.getAxisMotionValue(m);
      if (!Vr(m, l, null) || !p.get())
        return;
      const { min: g, max: v } = this.constraints[m];
      p.set(qt(g, v, d[m]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    V3.set(this.visualElement, this);
    const l = this.visualElement.current, s = Vs(l, "pointerdown", (g) => {
      const { drag: v, dragListener: y = !0 } = this.getProps(), S = g.target, C = S !== l && RC(S);
      v && y && !C && this.start(g);
    });
    let o;
    const c = () => {
      const { dragConstraints: g } = this.getProps();
      vl(g) && g.current && (this.constraints = this.resolveRefConstraints(), o || (o = L3(l, g.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, f = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Zt.read(c);
    const m = Xs(window, "resize", () => this.scalePositionWithinConstraints()), p = d.addEventListener("didUpdate", (({ delta: g, hasLayoutChanged: v }) => {
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
    const l = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: f = Jd, dragMomentum: m = !0 } = l;
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
function X0(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function L3(i, l, s) {
  const o = a0(i, X0(s)), c = a0(l, X0(s));
  return () => {
    o(), c();
  };
}
function Vr(i, l, s) {
  return (l === !0 || l === i) && (s === null || s === i);
}
function B3(i, l = 10) {
  let s = null;
  return Math.abs(i.y) > l ? s = "y" : Math.abs(i.x) > l && (s = "x"), s;
}
class U3 extends ki {
  constructor(l) {
    super(l), this.removeGroupControls = En, this.removeListeners = En, this.controls = new j3(l);
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
const vd = (i) => (l, s) => {
  i && Zt.update(() => i(l, s), !1, !0);
};
class H3 extends ki {
  constructor() {
    super(...arguments), this.removePointerDownListener = En;
  }
  onPointerDown(l) {
    this.session = new AS(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ES(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: s, onPan: o, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: vd(l),
      onStart: vd(s),
      onMove: vd(o),
      onEnd: (d, f) => {
        delete this.session, c && Zt.postRender(() => c(d, f));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Vs(this.node.current, "pointerdown", (l) => this.onPointerDown(l));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
let bd = !1;
class k3 extends q.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: s, switchLayoutGroup: o, layoutId: c } = this.props, { projection: d } = l;
    d && (s.group && s.group.add(d), o && o.register && c && o.register(d), bd && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), d.setOptions({
      ...d.options,
      layoutDependency: this.props.layoutDependency,
      onExitComplete: () => this.safeToRemove()
    })), Xr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(l) {
    const { layoutDependency: s, visualElement: o, drag: c, isPresent: d } = this.props, { projection: f } = o;
    return f && (f.isPresent = d, l.layoutDependency !== s && f.setOptions({
      ...f.options,
      layoutDependency: s
    }), bd = !0, c || l.layoutDependency !== s || s === void 0 || l.isPresent !== d ? f.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? f.promote() : f.relegate() || Zt.postRender(() => {
      const m = f.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: s } = this.props, { projection: o } = l;
    o && (o.options.layoutAnchor = s, o.root.didUpdate(), jh.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: s, switchLayoutGroup: o } = this.props, { projection: c } = l;
    bd = !0, c && (c.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(c), o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function CS(i) {
  const [l, s] = KM(), o = q.useContext(Yb);
  return O.jsx(k3, { ...i, layoutGroup: o, switchLayoutGroup: q.useContext(TS), isPresent: l, safeToRemove: s });
}
const G3 = {
  pan: {
    Feature: H3
  },
  drag: {
    Feature: U3,
    ProjectionNode: mS,
    MeasureLayout: CS
  }
};
function Q0(i, l, s) {
  const { props: o } = i;
  i.animationState && o.whileHover && i.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s, d = o[c];
  d && Zt.postRender(() => d(l, cu(l)));
}
class Y3 extends ki {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = DC(l, (s, o) => (Q0(this.node, o, "Start"), (c) => Q0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class q3 extends ki {
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
    this.unmount = Fs(Xs(this.node.current, "focus", () => this.onFocus()), Xs(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
function Z0(i, l, s) {
  const { props: o } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && o.whileTap && i.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s), d = o[c];
  d && Zt.postRender(() => d(l, cu(l)));
}
class X3 extends ki {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: s, propagate: o } = this.node.props;
    this.unmount = VC(l, (c, d) => (Z0(this.node, d, "Start"), (f, { success: m }) => Z0(this.node, f, m ? "End" : "Cancel")), {
      useGlobalTarget: s,
      stopPropagation: o?.tap === !1
    });
  }
  unmount() {
  }
}
const Id = /* @__PURE__ */ new WeakMap(), Sd = /* @__PURE__ */ new WeakMap(), Q3 = (i) => {
  const l = Id.get(i.target);
  l && l(i);
}, Z3 = (i) => {
  i.forEach(Q3);
};
function K3({ root: i, ...l }) {
  const s = i || document;
  Sd.has(s) || Sd.set(s, {});
  const o = Sd.get(s), c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(Z3, { root: i, ...l })), o[c];
}
function P3(i, l, s) {
  const o = K3(l);
  return Id.set(i, s), o.observe(i), () => {
    Id.delete(i), o.unobserve(i);
  };
}
const F3 = {
  some: 0,
  all: 1
};
class J3 extends ki {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: s, margin: o, amount: c = "some", once: d } = l, f = {
      root: s ? s.current : void 0,
      rootMargin: o,
      threshold: typeof c == "number" ? c : F3[c]
    }, m = (p) => {
      const { isIntersecting: g } = p;
      if (this.isInView === g || (this.isInView = g, d && !g && this.hasEnteredView))
        return;
      g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
      const { onViewportEnter: v, onViewportLeave: y } = this.node.getProps(), S = g ? v : y;
      S && S(p);
    };
    this.stopObserver = P3(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(I3(l, s)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function I3({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (s) => i[s] !== l[s];
}
const W3 = {
  inView: {
    Feature: J3
  },
  tap: {
    Feature: X3
  },
  focus: {
    Feature: q3
  },
  hover: {
    Feature: Y3
  }
}, $3 = {
  layout: {
    ProjectionNode: mS,
    MeasureLayout: CS
  }
}, tD = {
  ...E3,
  ...W3,
  ...G3,
  ...$3
}, Wd = /* @__PURE__ */ v3(tD, b3), eD = {
  some: 0,
  all: 1
};
function nD(i, l, { root: s, margin: o, amount: c = "some" } = {}) {
  const d = _h(i), f = /* @__PURE__ */ new WeakMap(), m = (g) => {
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
    threshold: typeof c == "number" ? c : eD[c]
  });
  return d.forEach((g) => p.observe(g)), () => p.disconnect();
}
function Gh(i, { root: l, margin: s, amount: o, once: c = !1, initial: d = !1 } = {}) {
  const [f, m] = q.useState(d);
  return q.useEffect(() => {
    if (!i.current || c && f)
      return;
    const p = () => (m(!0), c ? void 0 : () => m(!1)), g = {
      root: l && l.current || void 0,
      margin: s,
      amount: o
    };
    return nD(i.current, p, g);
  }, [l, i, s, c, o]), f;
}
const MS = "(prefers-reduced-motion: reduce)", iD = (i) => {
  const l = window.matchMedia(MS);
  return l.addEventListener("change", i), () => l.removeEventListener("change", i);
}, aD = () => window.matchMedia(MS).matches;
function Yh() {
  return q.useSyncExternalStore(iD, aD, () => !0);
}
function lD({
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
  const p = q.useRef(null), g = Gh(p, { amount: 0.15 }), v = Yh(), [y, S] = q.useState(0), [C, T] = q.useState(!0), M = q.useId(), A = o.length ? y % o.length : 0;
  q.useEffect(() => {
    const z = () => T(!document.hidden);
    return z(), document.addEventListener("visibilitychange", z), () => document.removeEventListener("visibilitychange", z);
  }, []), q.useEffect(() => {
    if (c <= 0 || o.length <= 1 || v || !g || !C) return;
    const z = window.setInterval(() => S((B) => (B + 1) % o.length), Math.max(3e3, c));
    return () => clearInterval(z);
  }, [c, o.length, v, g, C]);
  const w = (z) => {
    S((z + o.length) % o.length);
  };
  return /* @__PURE__ */ O.jsxs("section", { ref: p, id: "testimonials", "aria-labelledby": M, className: Aa("vt-testimonials", m), children: [
    /* @__PURE__ */ O.jsxs("div", { className: "vt-section-inner vt:grid vt:grid-cols-1 vt:gap-12 vt:md:grid-cols-2 vt:md:gap-16", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "vt-testimonial-intro", children: [
        s && /* @__PURE__ */ O.jsx("p", { className: "vt-review-badge", children: s }),
        /* @__PURE__ */ O.jsx("h2", { id: M, children: i }),
        /* @__PURE__ */ O.jsx("p", { children: l }),
        /* @__PURE__ */ O.jsxs("button", { type: "button", className: "vt-primary-button vt-add-feedback", "aria-haspopup": "dialog", "aria-controls": "feedback-dialog", onClick: () => window.dispatchEvent(new Event("vettiver:add-feedback")), children: [
          "Add feedback ",
          /* @__PURE__ */ O.jsx(Kr, { size: 18, "aria-hidden": "true" })
        ] }),
        o.length > 1 && /* @__PURE__ */ O.jsxs("div", { className: "vt-review-controls", "aria-label": "Customer story controls", children: [
          /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => w(A - 1), "aria-label": "Previous review", children: /* @__PURE__ */ O.jsx(WA, { size: 19 }) }),
          /* @__PURE__ */ O.jsxs("span", { children: [
            String(A + 1).padStart(2, "0"),
            " / ",
            String(o.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => w(A + 1), "aria-label": "Next review", children: /* @__PURE__ */ O.jsx(Kr, { size: 19 }) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "vt-review-stage", "aria-roledescription": o.length ? "carousel" : void 0, "aria-label": "Customer feedback", children: [
        o.length ? /* @__PURE__ */ O.jsx("div", { className: "vt-review-stack", "aria-live": v ? "polite" : "off", children: o.map((z, B) => /* @__PURE__ */ O.jsxs(
          Wd.article,
          {
            className: "vt-review-card",
            "aria-hidden": B !== A,
            "aria-label": "Review " + (B + 1) + " of " + o.length,
            initial: !1,
            animate: { opacity: B === A ? 1 : 0, x: v || B === A ? 0 : 32, scale: v || B === A ? 1 : 0.98 },
            transition: { duration: v ? 0 : 0.45, ease: "easeInOut" },
            style: { gridArea: "1 / 1", pointerEvents: B === A ? "auto" : "none" },
            children: [
              /* @__PURE__ */ O.jsx("div", { className: "vt-review-stars", "aria-label": Math.max(1, Math.min(5, Math.round(z.rating || 1))) + " out of 5 stars", children: Array.from({ length: Math.max(1, Math.min(5, Math.round(z.rating || 1))) }, (X, rt) => /* @__PURE__ */ O.jsx(kb, { size: 18, fill: "currentColor", "aria-hidden": "true" }, rt)) }),
              /* @__PURE__ */ O.jsx(t2, { size: 38, strokeWidth: 1.2, className: "vt-quote-mark", "aria-hidden": "true" }),
              /* @__PURE__ */ O.jsx("blockquote", { children: z.content }),
              /* @__PURE__ */ O.jsx(_b, { className: "vt:my-6" }),
              /* @__PURE__ */ O.jsx("p", { className: "vt-review-name", children: z.name })
            ]
          },
          z.id
        )) }) : /* @__PURE__ */ O.jsxs("div", { className: "vt-review-empty", children: [
          /* @__PURE__ */ O.jsx($A, { size: 38, strokeWidth: 1.2, "aria-hidden": "true" }),
          /* @__PURE__ */ O.jsx("h3", { children: "Your story belongs here." }),
          /* @__PURE__ */ O.jsx("p", { children: "Our customer stories are just beginning. Once feedback has been reviewed and approved, you can read it here." }),
          /* @__PURE__ */ O.jsx("span", { children: "No published reviews yet." })
        ] }),
        o.length > 1 && /* @__PURE__ */ O.jsx("div", { className: "vt-review-dots", children: o.map((z, B) => /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => w(B), "aria-label": "Read review by " + z.name, "aria-pressed": B === A, children: /* @__PURE__ */ O.jsx("span", {}) }, z.id)) })
      ] })
    ] }),
    d.length > 0 && /* @__PURE__ */ O.jsxs("div", { className: "vt-section-inner vt-review-companies", children: [
      /* @__PURE__ */ O.jsx("h3", { children: f }),
      /* @__PURE__ */ O.jsx("div", { children: d.map((z) => /* @__PURE__ */ O.jsx("span", { children: z }, z)) })
    ] })
  ] });
}
const Td = "vettiver-feedback-draft-v1";
function K0({ endpoint: i = "" }) {
  const l = q.useRef(null), s = q.useRef(!1), o = q.useRef(null), c = q.useRef(!0);
  q.useEffect(() => (c.current = !0, () => {
    c.current = !1, o.current?.abort();
  }), []), q.useEffect(() => {
    const Z = l.current;
    if (!Z) return;
    const lt = () => {
      Z.open || Z.showModal();
    };
    return window.addEventListener("vettiver:add-feedback", lt), () => {
      window.removeEventListener("vettiver:add-feedback", lt), Z.close();
    };
  }, []);
  const [d, f] = q.useState(""), [m, p] = q.useState(""), [g, v] = q.useState(0), [y, S] = q.useState(!1), [C, T] = q.useState(""), [M, A] = q.useState(!1), [w, z] = q.useState(!1), [B, X] = q.useState(!1), [rt, ut] = q.useState("");
  async function j(Z) {
    if (Z.preventDefault(), B || s.current) return;
    A(!1), T("");
    const lt = (G) => {
      A(!0), T(G);
    };
    if (typeof d != "string" || !d.trim() || d.length > 80) {
      lt("Enter your name using 1–80 characters.");
      return;
    }
    if (typeof m != "string" || !m.trim() || m.length > 1200) {
      lt("Enter your feedback using 1–1,200 characters.");
      return;
    }
    if (!Number.isInteger(g) || g < 1 || g > 5) {
      lt("Choose a rating from 1 to 5 stars.");
      return;
    }
    if (typeof rt != "string" || rt.length > 200 || rt.trim()) {
      ut(""), lt("An extra field was filled unexpectedly. We have cleared it; please try again without autofilling the form.");
      return;
    }
    const J = { name: d.trim(), content: m.trim(), rating: g };
    if (!i) {
      try {
        localStorage.setItem(Td, JSON.stringify(J)), T("Draft saved only on this device. It has not been sent or published.");
      } catch {
        A(!0), T("Your browser could not save the draft. Please copy your feedback to keep it.");
      }
      return;
    }
    if (w !== !0) {
      lt("Please agree to publication after review before sending your feedback.");
      return;
    }
    let Q;
    try {
      if (typeof i != "string" || !i.trim()) throw new Error("Invalid endpoint");
      if (Q = new URL(i, window.location.href), Q.origin !== window.location.origin || !["https:", "http:"].includes(Q.protocol) || Q.username || Q.password || Q.hash) throw new Error("Invalid endpoint");
    } catch {
      lt("Feedback submission is not configured correctly. Your feedback remains here; please try again later.");
      return;
    }
    s.current = !0, S(!0);
    const tt = new AbortController();
    o.current = tt;
    let W = !1;
    const $ = window.setTimeout(() => {
      W = !0, tt.abort();
    }, 15e3);
    try {
      const G = await fetch(Q.href, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ ...J, consentToPublish: w, website: rt }), credentials: "same-origin", redirect: "error", signal: tt.signal });
      if (!c.current) return;
      if (!G.ok) {
        lt(G.status === 429 ? "Too many attempts. Please wait a few minutes before trying again. Your feedback is still here." : G.status === 400 || G.status === 422 ? "The service could not accept these details. Check your name, rating, feedback and consent, then try again." : "The feedback service is unavailable. Your feedback is still here; please try again later.");
        return;
      }
      const P = await G.json();
      if (!P || typeof P != "object" || !("id" in P) || typeof P.id != "string" || !P.id.trim() || P.id.length > 200 || !("status" in P) || P.status !== "pending") throw new Error("Invalid acknowledgement");
      if (!c.current) return;
      X(!0), T("Thank you. Your feedback was received and is waiting for approval. It is not public yet.");
    } catch {
      c.current && lt(W ? "The request timed out. We could not confirm receipt. Your feedback is still here; please try again later." : "We could not confirm receipt of your feedback. Check your connection and try again. Your text is still here.");
    } finally {
      window.clearTimeout($), o.current = null, s.current = !1, c.current && S(!1);
    }
  }
  function N() {
    A(!1);
    try {
      const Z = JSON.parse(localStorage.getItem(Td) || "null");
      if (!Z || typeof Z.name != "string" || typeof Z.content != "string" || !Number.isInteger(Z.rating) || Z.rating < 1 || Z.rating > 5) {
        T("No saved draft on this device.");
        return;
      }
      f(Z.name.slice(0, 80)), p(Z.content.slice(0, 1200)), v(Z.rating), T("Your draft is restored. It has not been sent.");
    } catch {
      T("No readable draft on this device.");
    }
  }
  return /* @__PURE__ */ O.jsxs("dialog", { ref: l, id: "feedback-dialog", className: "vt-feedback-dialog", "aria-labelledby": "feedback-dialog-title", "aria-describedby": "feedback-dialog-description", onKeyDown: (Z) => {
    if (Z.key !== "Tab") return;
    const lt = Array.from(Z.currentTarget.querySelectorAll("button:not(:disabled), input:not(:disabled), textarea:not(:disabled)")).filter((tt) => tt.tabIndex >= 0 && !tt.closest('[aria-hidden="true"]')), J = lt[0], Q = lt[lt.length - 1];
    Z.shiftKey && document.activeElement === J ? (Z.preventDefault(), Q?.focus()) : !Z.shiftKey && document.activeElement === Q && (Z.preventDefault(), J?.focus());
  }, onClick: (Z) => {
    if (Z.target !== Z.currentTarget) return;
    const lt = Z.currentTarget.getBoundingClientRect();
    (Z.clientX < lt.left || Z.clientX > lt.right || Z.clientY < lt.top || Z.clientY > lt.bottom) && Z.currentTarget.close();
  }, children: [
    /* @__PURE__ */ O.jsx("button", { type: "button", className: "vt-feedback-close", "aria-label": "Close feedback", onClick: () => l.current?.close(), children: /* @__PURE__ */ O.jsx(e2, { size: 22, "aria-hidden": "true" }) }),
    /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-heading", children: [
      /* @__PURE__ */ O.jsx("h2", { id: "feedback-dialog-title", children: "A few words mean a lot." }),
      /* @__PURE__ */ O.jsx("p", { id: "feedback-dialog-description", children: "Tell us about your Vettiver experience." })
    ] }),
    /* @__PURE__ */ O.jsxs("form", { id: "feedback-form", className: "vt-feedback-form", onSubmit: j, "aria-label": "Share customer feedback", "aria-busy": y, "aria-describedby": "feedback-status", children: [
      /* @__PURE__ */ O.jsxs("div", { "aria-hidden": "true", style: { position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)", whiteSpace: "nowrap" }, children: [
        /* @__PURE__ */ O.jsx("label", { htmlFor: "feedback-website", children: "Leave this field empty" }),
        /* @__PURE__ */ O.jsx("input", { id: "feedback-website", name: "website", type: "text", tabIndex: -1, autoComplete: "off", maxLength: 200, value: rt, onChange: (Z) => ut(Z.target.value), disabled: y || B })
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-fields", children: [
        /* @__PURE__ */ O.jsxs("div", { children: [
          /* @__PURE__ */ O.jsx("label", { htmlFor: "feedback-name", children: "Your name" }),
          /* @__PURE__ */ O.jsx("input", { id: "feedback-name", name: "name", autoComplete: "name", maxLength: 80, required: !0, value: d, onChange: (Z) => f(Z.target.value), disabled: y || B })
        ] }),
        /* @__PURE__ */ O.jsxs("fieldset", { children: [
          /* @__PURE__ */ O.jsx("legend", { children: "Your rating" }),
          /* @__PURE__ */ O.jsx("div", { className: "vt-rating-input", children: [1, 2, 3, 4, 5].map((Z) => /* @__PURE__ */ O.jsxs("label", { className: Z <= g ? "is-selected" : "", children: [
            /* @__PURE__ */ O.jsx("input", { type: "radio", name: "rating", value: Z, required: !0, checked: g === Z, onChange: () => v(Z), disabled: y || B }),
            /* @__PURE__ */ O.jsx(kb, { size: 25, fill: Z <= g ? "currentColor" : "none", "aria-hidden": "true" }),
            /* @__PURE__ */ O.jsxs("span", { className: "vt:sr-only", children: [
              Z,
              " ",
              Z === 1 ? "star" : "stars"
            ] })
          ] }, Z)) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx("label", { htmlFor: "feedback-content", children: "Your feedback" }),
      /* @__PURE__ */ O.jsx("textarea", { id: "feedback-content", name: "content", rows: 3, maxLength: 1200, required: !0, value: m, onChange: (Z) => p(Z.target.value), disabled: y || B, placeholder: "What did you choose, and how was your experience?" }),
      i ? /* @__PURE__ */ O.jsxs("label", { className: "vt-feedback-consent", children: [
        /* @__PURE__ */ O.jsx("input", { type: "checkbox", required: !0, checked: w, onChange: (Z) => z(Z.target.checked), disabled: y || B }),
        " I agree that my name, rating and feedback may be published after review."
      ] }) : /* @__PURE__ */ O.jsx("p", { className: "vt-feedback-note", children: "Review submissions will open when our approval system is ready. For now, save a draft on this device. Nothing is sent to us." }),
      /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-actions", children: [
        /* @__PURE__ */ O.jsxs("button", { className: "vt-primary-button", type: "submit", disabled: y || B, children: [
          y ? "Sending…" : B ? "Waiting for approval" : i ? "Send for approval" : "Save feedback draft",
          /* @__PURE__ */ O.jsx(rh, { size: 18, "aria-hidden": "true" })
        ] }),
        !i && /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          /* @__PURE__ */ O.jsx("button", { className: "vt-text-link", type: "button", onClick: N, children: "Restore draft" }),
          /* @__PURE__ */ O.jsx("button", { className: "vt-text-link", type: "button", onClick: () => {
            try {
              localStorage.removeItem(Td), T("Saved draft removed from this device.");
            } catch {
              T("Could not remove the saved draft.");
            }
          }, children: "Delete saved draft" })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx("p", { id: "feedback-status", className: "vt-feedback-status" + (M ? " is-error" : ""), role: "status", "aria-live": "polite", "aria-atomic": "true", children: C })
    ] })
  ] });
}
const Qs = (i, l, s) => i < l ? l : i > s ? s : i, P0 = (i, l = "174, 204, 135") => {
  const s = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec((i || "").trim());
  if (!s) return l;
  const o = s[1].length === 3 ? s[1].replace(/./g, (d) => d + d) : s[1], c = parseInt(o, 16);
  return (c >> 16 & 255) + ", " + (c >> 8 & 255) + ", " + (c & 255);
}, sD = (i, l, s) => {
  if (!(i > 0) || !(l > 0)) return 0;
  const o = 100 * l / i;
  return s > 0 ? Math.min(o, s) : o;
}, oD = (i, l = 30, s = 82) => l + (s - l) * Qs(Number.isFinite(i) ? i : 0.5, 0, 1), F0 = (i, l = 58, s = 9) => l + s * (0.7 * Math.sin(i * 0.21) + 0.3 * Math.sin(i * 0.077 + 1.3)), jr = (i, l, s, o) => l + (i - l) * Math.pow(1 - Qs(s, 0, 1), Qs(o, 0, 0.1) * 60), rD = (i, l) => !(i > 0) || !(l >= 0) ? 0.8 : Qs(((100 - i - l) / 2 + i) / 100, 0.5, 1.2), uD = (i, l, s) => Math.max(0, i * (l + Qs(Number.isFinite(s) ? s : 0, -0.4, 0.4))), J0 = {
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
}, cD = [
  { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "#about" }, { label: "Customer stories", href: "#reviews" }] },
  { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "#feedback-form" }, { label: "Good to know", href: "#questions-title" }, { label: "Back to the top", href: "#home" }] }
];
function fD({
  brand: i = "Vettiver",
  wordmark: l,
  company: s = "Akash Vetiver Export",
  year: o = (/* @__PURE__ */ new Date()).getFullYear(),
  socials: c = [],
  credits: d = [{ label: "Natural roots. Thoughtful hands." }, { lead: "Handcrafted in ", label: "Tamil Nadu, India" }],
  columns: f = cD,
  onLinkClick: m,
  cut: p = 0.1,
  background: g = "#08170f",
  ink: v = "#f4f8ef",
  muted: y = "#bacbb5",
  accent: S = "#b1cd8b",
  wordTop: C = "#668b54",
  wordFoot: T = "#152d1c",
  fontSans: M = "Outfit, sans-serif",
  wordWeight: A = 600,
  animate: w = !0,
  className: z = ""
}) {
  const B = (l ?? i).trim() || i, X = q.useMemo(() => Array.from(B), [B]), rt = q.useRef(null), ut = q.useRef(null), [j, N] = q.useState(0), [Z, lt] = q.useState(0.8), [J, Q] = q.useState(!1), [tt, W] = q.useState(!1), [$, G] = q.useState(!1), [P, et] = q.useState(!0), st = q.useRef({ u: 0.5, x: 0, y: 0, inside: !1 });
  q.useLayoutEffect(() => {
    const nt = rt.current, x = ut.current;
    if (!nt || !x) return;
    let H = 0, it = !0;
    const at = () => {
      const Tt = x.parentElement, ot = getComputedStyle(Tt), I = Tt.clientWidth - parseFloat(ot.paddingLeft) - parseFloat(ot.paddingRight);
      x.style.fontSize = "100px";
      const Et = sD(x.getBoundingClientRect().width, I, I * 0.42);
      x.style.fontSize = Et + "px", N(Et);
      const Mt = document.createElement("canvas").getContext("2d");
      if (Mt) {
        Mt.font = A + " 100px " + M;
        const Xt = Mt.measureText(B);
        lt(rD(Xt.fontBoundingBoxAscent, Xt.fontBoundingBoxDescent));
      }
      const It = nt.getBoundingClientRect();
      nt.style.setProperty("--bwf-rw", It.width + "px"), nt.style.setProperty("--bwf-rh", It.height + "px"), x.querySelectorAll(".bwf-l").forEach((Xt) => {
        let Ut = 0, Ot = 0, Pt = Xt;
        for (; Pt && Pt !== nt; )
          Ut += Pt.offsetLeft, Ot += Pt.offsetTop, Pt = Pt.offsetParent;
        Xt.style.setProperty("--bwf-x", Ut + "px"), Xt.style.setProperty("--bwf-y", Ot + "px");
      });
    }, vt = () => {
      cancelAnimationFrame(H), H = requestAnimationFrame(at);
    };
    at();
    const ft = new ResizeObserver(vt);
    return ft.observe(nt), document.fonts.ready.then(() => {
      it && vt();
    }), () => {
      it = !1, cancelAnimationFrame(H), ft.disconnect();
    };
  }, [B, M, A]), q.useEffect(() => {
    const nt = matchMedia("(prefers-reduced-motion: reduce)"), x = () => G(nt.matches), H = () => et(!document.hidden);
    x(), H(), nt.addEventListener("change", x), document.addEventListener("visibilitychange", H);
    const it = new IntersectionObserver(([at]) => {
      W(at.isIntersecting), at.isIntersecting && Q(!0);
    }, { threshold: 0.1 });
    return rt.current && it.observe(rt.current), () => {
      it.disconnect(), nt.removeEventListener("change", x), document.removeEventListener("visibilitychange", H);
    };
  }, []), q.useEffect(() => {
    const nt = rt.current;
    if (!nt) return;
    if ($ || !w || !tt || !P) {
      nt.style.setProperty("--bwf-g", "0");
      return;
    }
    let x = 0, H = performance.now(), it = H / 1e3, at = 58, vt = 0, ft = 0, Tt = 0;
    const ot = (I) => {
      const Et = Math.min(0.1, (I - H) / 1e3);
      H = I, it += Et;
      const Mt = st.current;
      at = jr(at, Mt.inside ? oD(Mt.u) * 0.75 + F0(it) * 0.25 : F0(it), 0.035, Et), vt = jr(vt, Mt.x, 0.16, Et), ft = jr(ft, Mt.y, 0.16, Et), Tt = jr(Tt, Mt.inside ? 1 : 0, 0.06, Et), nt.style.setProperty("--bwf-b", at.toFixed(2) + "%"), nt.style.setProperty("--bwf-px", vt.toFixed(1) + "px"), nt.style.setProperty("--bwf-py", ft.toFixed(1) + "px"), nt.style.setProperty("--bwf-g", Tt.toFixed(3)), x = requestAnimationFrame(ot);
    };
    return x = requestAnimationFrame(ot), () => cancelAnimationFrame(x);
  }, [$, w, tt, P]);
  const Y = (nt) => {
    if (nt.pointerType === "touch" || $) return;
    const x = nt.currentTarget.getBoundingClientRect();
    st.current = { x: nt.clientX - x.left, y: nt.clientY - x.top, u: (nt.clientX - x.left) / x.width, inside: nt.type !== "pointerleave" };
  }, yt = (nt, x, H) => {
    H === "#feedback-form" && (nt.preventDefault(), nt.stopPropagation(), window.dispatchEvent(new Event("vettiver:add-feedback"))), (!H || H === "#") && nt.preventDefault(), m?.(x, H);
  }, bt = {
    "--bwf-bg": g,
    "--bwf-bg-rgb": P0(g),
    "--bwf-ink": v,
    "--bwf-muted": y,
    "--bwf-acc": P0(S),
    "--bwf-wt": C,
    "--bwf-wf": T,
    "--bwf-sans": M,
    "--bwf-ww": A,
    "--bwf-b": "58%",
    "--bwf-px": "50%",
    "--bwf-py": "50%",
    "--bwf-g": "0"
  };
  return /* @__PURE__ */ O.jsxs("footer", { ref: rt, className: "bwf " + z, style: bt, "data-in": J || $ ? "true" : "false", "data-motion": $ || !w ? "paused" : tt && P ? "running" : "idle", onPointerMove: Y, onPointerEnter: Y, onPointerLeave: Y, children: [
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
          o,
          " ",
          s || i
        ] }),
        /* @__PURE__ */ O.jsxs("p", { className: "bwf-brand-line", children: [
          "From our roots.",
          /* @__PURE__ */ O.jsx("br", {}),
          "To your rituals."
        ] }),
        c.length > 0 && /* @__PURE__ */ O.jsx("ul", { className: "bwf-socials", children: c.map((nt, x) => /* @__PURE__ */ O.jsx("li", { children: /* @__PURE__ */ O.jsx("a", { href: nt.href || "#", className: "bwf-soc", "aria-label": nt.label, onClick: (H) => yt(H, nt.label, nt.href), ...nt.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: typeof nt.icon == "string" && nt.icon in J0 ? J0[nt.icon] : nt.icon }) }, nt.label + x)) }),
        /* @__PURE__ */ O.jsx("div", { className: "bwf-credits", children: d.map((nt, x) => /* @__PURE__ */ O.jsxs("p", { children: [
          nt.lead,
          nt.href ? /* @__PURE__ */ O.jsx("a", { href: nt.href, onClick: (H) => yt(H, nt.label, nt.href), children: nt.label }) : /* @__PURE__ */ O.jsx("b", { children: nt.label }),
          nt.tail
        ] }, x)) })
      ] }),
      f.map((nt, x) => /* @__PURE__ */ O.jsxs("nav", { className: "bwf-col", "aria-label": nt.title, children: [
        /* @__PURE__ */ O.jsx("p", { className: "bwf-label", children: nt.title }),
        /* @__PURE__ */ O.jsx("ul", { className: "bwf-links", children: nt.links.map((H, it) => /* @__PURE__ */ O.jsx("li", { children: /* @__PURE__ */ O.jsxs("a", { className: "bwf-link", href: H.href || "#", onClick: (at) => yt(at, H.label, H.href), children: [
          /* @__PURE__ */ O.jsx("span", { children: H.label }),
          /* @__PURE__ */ O.jsx(rh, { size: 16, "aria-hidden": "true" })
        ] }) }, H.label + it)) })
      ] }, nt.title + x))
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "bwf-word", style: { height: j ? uD(j, Z, p) : "26vw" }, children: [
      /* @__PURE__ */ O.jsx("p", { className: "vt:sr-only", children: B }),
      /* @__PURE__ */ O.jsx("div", { className: "bwf-word-box", children: /* @__PURE__ */ O.jsx("div", { ref: ut, className: "bwf-word-in", "aria-hidden": "true", children: X.map((nt, x) => /* @__PURE__ */ O.jsx("span", { className: "bwf-lw", style: { "--bwf-d": 180 + x * 65 + "ms" }, children: /* @__PURE__ */ O.jsx("span", { className: "bwf-l", onClick: (H) => {
        if (!$) {
          const it = H.currentTarget;
          it.classList.remove("is-hop"), it.offsetWidth, it.classList.add("is-hop");
        }
      }, onAnimationEnd: (H) => H.currentTarget.classList.remove("is-hop"), children: nt === " " ? " " : nt }) }, x)) }) }),
      /* @__PURE__ */ O.jsx("div", { className: "bwf-foot", "aria-hidden": "true" })
    ] })
  ] });
}
const dD = [];
function hD(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function I0(i) {
  return hD(i) || Array.isArray(i);
}
function mD() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function qh(i, l) {
  const s = Object.keys(i), o = Object.keys(l);
  if (s.length !== o.length) return !1;
  const c = JSON.stringify(Object.keys(i.breakpoints || {})), d = JSON.stringify(Object.keys(l.breakpoints || {}));
  return c !== d ? !1 : s.every((f) => {
    const m = i[f], p = l[f];
    return typeof m == "function" ? `${m}` == `${p}` : !I0(m) || !I0(p) ? m === p : qh(m, p);
  });
}
function W0(i) {
  return i.concat().sort((l, s) => l.name > s.name ? 1 : -1).map((l) => l.options);
}
function pD(i, l) {
  if (i.length !== l.length) return !1;
  const s = W0(i), o = W0(l);
  return s.every((c, d) => {
    const f = o[d];
    return qh(c, f);
  });
}
function Xh(i) {
  return typeof i == "number";
}
function $d(i) {
  return typeof i == "string";
}
function fu(i) {
  return typeof i == "boolean";
}
function $0(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function te(i) {
  return Math.abs(i);
}
function Qh(i) {
  return Math.sign(i);
}
function js(i, l) {
  return te(i - l);
}
function gD(i, l) {
  if (i === 0 || l === 0 || te(i) <= te(l)) return 0;
  const s = js(te(i), te(l));
  return te(s / i);
}
function yD(i) {
  return Math.round(i * 100) / 100;
}
function Zs(i) {
  return Ks(i).map(Number);
}
function An(i) {
  return i[Ws(i)];
}
function Ws(i) {
  return Math.max(0, i.length - 1);
}
function Zh(i, l) {
  return l === Ws(i);
}
function tb(i, l = 0) {
  return Array.from(Array(i), (s, o) => l + o);
}
function Ks(i) {
  return Object.keys(i);
}
function DS(i, l) {
  return [i, l].reduce((s, o) => (Ks(o).forEach((c) => {
    const d = s[c], f = o[c], m = $0(d) && $0(f);
    s[c] = m ? DS(d, f) : f;
  }), s), {});
}
function th(i, l) {
  return typeof l.MouseEvent < "u" && i instanceof l.MouseEvent;
}
function vD(i, l) {
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
    return $d(i) ? s[i](p) : i(l, p, g);
  }
  return {
    measure: f
  };
}
function Ps() {
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
function bD(i, l, s, o) {
  const c = Ps(), d = 1e3 / 60;
  let f = null, m = 0, p = 0;
  function g() {
    c.add(i, "visibilitychange", () => {
      i.hidden && T();
    });
  }
  function v() {
    C(), c.clear();
  }
  function y(A) {
    if (!p) return;
    f || (f = A, s(), s());
    const w = A - f;
    for (f = A, m += w; m >= d; )
      s(), m -= d;
    const z = m / d;
    o(z), p && (p = l.requestAnimationFrame(y));
  }
  function S() {
    p || (p = l.requestAnimationFrame(y));
  }
  function C() {
    l.cancelAnimationFrame(p), f = null, m = 0, p = 0;
  }
  function T() {
    f = null, m = 0;
  }
  return {
    init: g,
    destroy: v,
    start: S,
    stop: C,
    update: s,
    render: o
  };
}
function SD(i, l) {
  const s = l === "rtl", o = i === "y", c = o ? "y" : "x", d = o ? "x" : "y", f = !o && s ? -1 : 1, m = v(), p = y();
  function g(T) {
    const {
      height: M,
      width: A
    } = T;
    return o ? M : A;
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
function xa(i = 0, l = 0) {
  const s = te(i - l);
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
function zS(i, l, s) {
  const {
    constrain: o
  } = xa(0, i), c = i + 1;
  let d = f(l);
  function f(S) {
    return s ? te((c + S) % c) : o(S);
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
function TD(i, l, s, o, c, d, f, m, p, g, v, y, S, C, T, M, A, w, z) {
  const {
    cross: B,
    direction: X
  } = i, rt = ["INPUT", "SELECT", "TEXTAREA"], ut = {
    passive: !1
  }, j = Ps(), N = Ps(), Z = xa(50, 225).constrain(C.measure(20)), lt = {
    mouse: 300,
    touch: 400
  }, J = {
    mouse: 500,
    touch: 600
  }, Q = T ? 43 : 25;
  let tt = !1, W = 0, $ = 0, G = !1, P = !1, et = !1, st = !1;
  function Y(I) {
    if (!z) return;
    function Et(It) {
      (fu(z) || z(I, It)) && it(It);
    }
    const Mt = l;
    j.add(Mt, "dragstart", (It) => It.preventDefault(), ut).add(Mt, "touchmove", () => {
    }, ut).add(Mt, "touchend", () => {
    }).add(Mt, "touchstart", Et).add(Mt, "mousedown", Et).add(Mt, "touchcancel", vt).add(Mt, "contextmenu", vt).add(Mt, "click", ft, !0);
  }
  function yt() {
    j.clear(), N.clear();
  }
  function bt() {
    const I = st ? s : l;
    N.add(I, "touchmove", at, ut).add(I, "touchend", vt).add(I, "mousemove", at, ut).add(I, "mouseup", vt);
  }
  function nt(I) {
    const Et = I.nodeName || "";
    return rt.includes(Et);
  }
  function x() {
    return (T ? J : lt)[st ? "mouse" : "touch"];
  }
  function H(I, Et) {
    const Mt = y.add(Qh(I) * -1), It = v.byDistance(I, !T).distance;
    return T || te(I) < Z ? It : A && Et ? It * 0.5 : v.byIndex(Mt.get(), 0).distance;
  }
  function it(I) {
    const Et = th(I, o);
    st = Et, et = T && Et && !I.buttons && tt, tt = js(c.get(), f.get()) >= 2, !(Et && I.button !== 0) && (nt(I.target) || (G = !0, d.pointerDown(I), g.useFriction(0).useDuration(0), c.set(f), bt(), W = d.readPoint(I), $ = d.readPoint(I, B), S.emit("pointerDown")));
  }
  function at(I) {
    if (!th(I, o) && I.touches.length >= 2) return vt(I);
    const Mt = d.readPoint(I), It = d.readPoint(I, B), Xt = js(Mt, W), Ut = js(It, $);
    if (!P && !st && (!I.cancelable || (P = Xt > Ut, !P)))
      return vt(I);
    const Ot = d.pointerMove(I);
    Xt > M && (et = !0), g.useFriction(0.3).useDuration(0.75), m.start(), c.add(X(Ot)), I.preventDefault();
  }
  function vt(I) {
    const Mt = v.byDistance(0, !1).index !== y.get(), It = d.pointerUp(I) * x(), Xt = H(X(It), Mt), Ut = gD(It, Xt), Ot = Q - 10 * Ut, Pt = w + Ut / 50;
    P = !1, G = !1, N.clear(), g.useDuration(Ot).useFriction(Pt), p.distance(Xt, !T), st = !1, S.emit("pointerUp");
  }
  function ft(I) {
    et && (I.stopPropagation(), I.preventDefault(), et = !1);
  }
  function Tt() {
    return G;
  }
  return {
    init: Y,
    destroy: yt,
    pointerDown: Tt
  };
}
function xD(i, l) {
  let o, c;
  function d(y) {
    return y.timeStamp;
  }
  function f(y, S) {
    const T = `client${(S || i.scroll) === "x" ? "X" : "Y"}`;
    return (th(y, l) ? y : y.touches[0])[T];
  }
  function m(y) {
    return o = y, c = y, f(y);
  }
  function p(y) {
    const S = f(y) - f(c), C = d(y) - d(o) > 170;
    return c = y, C && (o = y), S;
  }
  function g(y) {
    if (!o || !c) return 0;
    const S = f(c) - f(o), C = d(y) - d(o), T = d(y) - d(c) > 170, M = S / C;
    return C && !T && te(M) > 0.1 ? M : 0;
  }
  return {
    pointerDown: m,
    pointerMove: p,
    pointerUp: g,
    readPoint: f
  };
}
function ED() {
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
function AD(i) {
  function l(o) {
    return i * (o / 100);
  }
  return {
    measure: l
  };
}
function wD(i, l, s, o, c, d, f) {
  const m = [i].concat(o);
  let p, g, v = [], y = !1;
  function S(A) {
    return c.measureSize(f.measure(A));
  }
  function C(A) {
    if (!d) return;
    g = S(i), v = o.map(S);
    function w(z) {
      for (const B of z) {
        if (y) return;
        const X = B.target === i, rt = o.indexOf(B.target), ut = X ? g : v[rt], j = S(X ? i : o[rt]);
        if (te(j - ut) >= 0.5) {
          A.reInit(), l.emit("resize");
          break;
        }
      }
    }
    p = new ResizeObserver((z) => {
      (fu(d) || d(A, z)) && w(z);
    }), s.requestAnimationFrame(() => {
      m.forEach((z) => p.observe(z));
    });
  }
  function T() {
    y = !0, p && p.disconnect();
  }
  return {
    init: C,
    destroy: T
  };
}
function CD(i, l, s, o, c, d) {
  let f = 0, m = 0, p = c, g = d, v = i.get(), y = 0;
  function S() {
    const ut = o.get() - i.get(), j = !p;
    let N = 0;
    return j ? (f = 0, s.set(o), i.set(o), N = ut) : (s.set(i), f += ut / p, f *= g, v += f, i.add(f), N = v - y), m = Qh(N), y = v, rt;
  }
  function C() {
    const ut = o.get() - l.get();
    return te(ut) < 1e-3;
  }
  function T() {
    return p;
  }
  function M() {
    return m;
  }
  function A() {
    return f;
  }
  function w() {
    return B(c);
  }
  function z() {
    return X(d);
  }
  function B(ut) {
    return p = ut, rt;
  }
  function X(ut) {
    return g = ut, rt;
  }
  const rt = {
    direction: M,
    duration: T,
    velocity: A,
    seek: S,
    settled: C,
    useBaseFriction: z,
    useBaseDuration: w,
    useFriction: X,
    useDuration: B
  };
  return rt;
}
function MD(i, l, s, o, c) {
  const d = c.measure(10), f = c.measure(50), m = xa(0.1, 0.99);
  let p = !1;
  function g() {
    return !(p || !i.reachedAny(s.get()) || !i.reachedAny(l.get()));
  }
  function v(C) {
    if (!g()) return;
    const T = i.reachedMin(l.get()) ? "min" : "max", M = te(i[T] - l.get()), A = s.get() - l.get(), w = m.constrain(M / f);
    s.subtract(A * w), !C && te(A) < d && (s.set(i.constrain(s.get())), o.useDuration(25).useBaseFriction());
  }
  function y(C) {
    p = !C;
  }
  return {
    shouldConstrain: g,
    constrain: v,
    toggleActive: y
  };
}
function DD(i, l, s, o, c) {
  const d = xa(-l + i, 0), f = y(), m = v(), p = S();
  function g(T, M) {
    return js(T, M) <= 1;
  }
  function v() {
    const T = f[0], M = An(f), A = f.lastIndexOf(T), w = f.indexOf(M) + 1;
    return xa(A, w);
  }
  function y() {
    return s.map((T, M) => {
      const {
        min: A,
        max: w
      } = d, z = d.constrain(T), B = !M, X = Zh(s, M);
      return B ? w : X || g(A, z) ? A : g(w, z) ? w : z;
    }).map((T) => parseFloat(T.toFixed(3)));
  }
  function S() {
    if (l <= i + c) return [d.max];
    if (o === "keepSnaps") return f;
    const {
      min: T,
      max: M
    } = m;
    return f.slice(T, M);
  }
  return {
    snapsContained: p,
    scrollContainLimit: m
  };
}
function zD(i, l, s) {
  const o = l[0], c = s ? o - i : An(l);
  return {
    limit: xa(c, o)
  };
}
function OD(i, l, s, o) {
  const d = l.min + 0.1, f = l.max + 0.1, {
    reachedMin: m,
    reachedMax: p
  } = xa(d, f);
  function g(S) {
    return S === 1 ? p(s.get()) : S === -1 ? m(s.get()) : !1;
  }
  function v(S) {
    if (!g(S)) return;
    const C = i * (S * -1);
    o.forEach((T) => T.add(C));
  }
  return {
    loop: v
  };
}
function ND(i) {
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
function RD(i, l, s, o, c) {
  const {
    startEdge: d,
    endEdge: f
  } = i, {
    groupSlides: m
  } = c, p = y().map(l.measure), g = S(), v = C();
  function y() {
    return m(o).map((M) => An(M)[f] - M[0][d]).map(te);
  }
  function S() {
    return o.map((M) => s[d] - M[d]).map((M) => -te(M));
  }
  function C() {
    return m(g).map((M) => M[0]).map((M, A) => M + p[A]);
  }
  return {
    snaps: g,
    snapsAligned: v
  };
}
function _D(i, l, s, o, c, d) {
  const {
    groupSlides: f
  } = c, {
    min: m,
    max: p
  } = o, g = v();
  function v() {
    const S = f(d), C = !i || l === "keepSnaps";
    return s.length === 1 ? [d] : C ? S : S.slice(m, p).map((T, M, A) => {
      const w = !M, z = Zh(A, M);
      if (w) {
        const B = An(A[0]) + 1;
        return tb(B);
      }
      if (z) {
        const B = Ws(d) - An(A)[0] + 1;
        return tb(B, An(A)[0]);
      }
      return T;
    });
  }
  return {
    slideRegistry: g
  };
}
function VD(i, l, s, o, c) {
  const {
    reachedAny: d,
    removeOffset: f,
    constrain: m
  } = o;
  function p(T) {
    return T.concat().sort((M, A) => te(M) - te(A))[0];
  }
  function g(T) {
    const M = i ? f(T) : m(T), A = l.map((z, B) => ({
      diff: v(z - M, 0),
      index: B
    })).sort((z, B) => te(z.diff) - te(B.diff)), {
      index: w
    } = A[0];
    return {
      index: w,
      distance: M
    };
  }
  function v(T, M) {
    const A = [T, T + s, T - s];
    if (!i) return T;
    if (!M) return p(A);
    const w = A.filter((z) => Qh(z) === M);
    return w.length ? p(w) : An(A) - s;
  }
  function y(T, M) {
    const A = l[T] - c.get(), w = v(A, M);
    return {
      index: T,
      distance: w
    };
  }
  function S(T, M) {
    const A = c.get() + T, {
      index: w,
      distance: z
    } = g(A), B = !i && d(A);
    if (!M || B) return {
      index: w,
      distance: T
    };
    const X = l[w] - z, rt = T + v(X, 0);
    return {
      index: w,
      distance: rt
    };
  }
  return {
    byDistance: S,
    byIndex: y,
    shortcut: v
  };
}
function jD(i, l, s, o, c, d, f) {
  function m(y) {
    const S = y.distance, C = y.index !== l.get();
    d.add(S), S && (o.duration() ? i.start() : (i.update(), i.render(1), i.update())), C && (s.set(l.get()), l.set(y.index), f.emit("select"));
  }
  function p(y, S) {
    const C = c.byDistance(y, S);
    m(C);
  }
  function g(y, S) {
    const C = l.clone().set(y), T = c.byIndex(C.get(), S);
    m(T);
  }
  return {
    distance: p,
    index: g
  };
}
function LD(i, l, s, o, c, d, f, m) {
  const p = {
    passive: !0,
    capture: !0
  };
  let g = 0;
  function v(C) {
    if (!m) return;
    function T(M) {
      if ((/* @__PURE__ */ new Date()).getTime() - g > 10) return;
      f.emit("slideFocusStart"), i.scrollLeft = 0;
      const z = s.findIndex((B) => B.includes(M));
      Xh(z) && (c.useDuration(0), o.index(z, 0), f.emit("slideFocus"));
    }
    d.add(document, "keydown", y, !1), l.forEach((M, A) => {
      d.add(M, "focus", (w) => {
        (fu(m) || m(C, w)) && T(A);
      }, p);
    });
  }
  function y(C) {
    C.code === "Tab" && (g = (/* @__PURE__ */ new Date()).getTime());
  }
  return {
    init: v
  };
}
function Rs(i) {
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
    return Xh(p) ? p : p.get();
  }
  return {
    get: s,
    set: o,
    add: c,
    subtract: d
  };
}
function OS(i, l) {
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
    const C = yD(i.direction(S));
    C !== c && (o.transform = s(C), c = C);
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
function BD(i, l, s, o, c, d, f, m, p) {
  const v = Zs(c), y = Zs(c).reverse(), S = w().concat(z());
  function C(j, N) {
    return j.reduce((Z, lt) => Z - c[lt], N);
  }
  function T(j, N) {
    return j.reduce((Z, lt) => C(Z, N) > 0 ? Z.concat([lt]) : Z, []);
  }
  function M(j) {
    return d.map((N, Z) => ({
      start: N - o[Z] + 0.5 + j,
      end: N + l - 0.5 + j
    }));
  }
  function A(j, N, Z) {
    const lt = M(N);
    return j.map((J) => {
      const Q = Z ? 0 : -s, tt = Z ? s : 0, W = Z ? "end" : "start", $ = lt[J][W];
      return {
        index: J,
        loopPoint: $,
        slideLocation: Rs(-1),
        translate: OS(i, p[J]),
        target: () => m.get() > $ ? Q : tt
      };
    });
  }
  function w() {
    const j = f[0], N = T(y, j);
    return A(N, s, !1);
  }
  function z() {
    const j = l - f[0] - 1, N = T(v, j);
    return A(N, -s, !0);
  }
  function B() {
    return S.every(({
      index: j
    }) => {
      const N = v.filter((Z) => Z !== j);
      return C(N, l) <= 0.1;
    });
  }
  function X() {
    S.forEach((j) => {
      const {
        target: N,
        translate: Z,
        slideLocation: lt
      } = j, J = N();
      J !== lt.get() && (Z.to(J), lt.set(J));
    });
  }
  function rt() {
    S.forEach((j) => j.translate.clear());
  }
  return {
    canLoop: B,
    clear: rt,
    loop: X,
    loopPoints: S
  };
}
function UD(i, l, s) {
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
      c || (fu(s) || s(p, v)) && g(v);
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
function HD(i, l, s, o) {
  const c = {};
  let d = null, f = null, m, p = !1;
  function g() {
    m = new IntersectionObserver((T) => {
      p || (T.forEach((M) => {
        const A = l.indexOf(M.target);
        c[A] = M;
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
    return Ks(c).reduce((M, A) => {
      const w = parseInt(A), {
        isIntersecting: z
      } = c[w];
      return (T && z || !T && !z) && M.push(w), M;
    }, []);
  }
  function S(T = !0) {
    if (T && d) return d;
    if (!T && f) return f;
    const M = y(T);
    return T && (d = M), T || (f = M), M;
  }
  return {
    init: g,
    destroy: v,
    get: S
  };
}
function kD(i, l, s, o, c, d) {
  const {
    measureSize: f,
    startEdge: m,
    endEdge: p
  } = i, g = s[0] && c, v = T(), y = M(), S = s.map(f), C = A();
  function T() {
    if (!g) return 0;
    const z = s[0];
    return te(l[m] - z[m]);
  }
  function M() {
    if (!g) return 0;
    const z = d.getComputedStyle(An(o));
    return parseFloat(z.getPropertyValue(`margin-${p}`));
  }
  function A() {
    return s.map((z, B, X) => {
      const rt = !B, ut = Zh(X, B);
      return rt ? S[B] + v : ut ? S[B] + y : X[B + 1][m] - z[m];
    }).map(te);
  }
  return {
    slideSizes: S,
    slideSizesWithGaps: C,
    startGap: v,
    endGap: y
  };
}
function GD(i, l, s, o, c, d, f, m, p) {
  const {
    startEdge: g,
    endEdge: v,
    direction: y
  } = i, S = Xh(s);
  function C(w, z) {
    return Zs(w).filter((B) => B % z === 0).map((B) => w.slice(B, B + z));
  }
  function T(w) {
    return w.length ? Zs(w).reduce((z, B, X) => {
      const rt = An(z) || 0, ut = rt === 0, j = B === Ws(w), N = c[g] - d[rt][g], Z = c[g] - d[B][v], lt = !o && ut ? y(f) : 0, J = !o && j ? y(m) : 0, Q = te(Z - J - (N + lt));
      return X && Q > l + p && z.push(B), j && z.push(w.length), z;
    }, []).map((z, B, X) => {
      const rt = Math.max(X[B - 1] || 0);
      return w.slice(rt, z);
    }) : [];
  }
  function M(w) {
    return S ? C(w, s) : T(w);
  }
  return {
    groupSlides: M
  };
}
function YD(i, l, s, o, c, d, f) {
  const {
    align: m,
    axis: p,
    direction: g,
    startIndex: v,
    loop: y,
    duration: S,
    dragFree: C,
    dragThreshold: T,
    inViewThreshold: M,
    slidesToScroll: A,
    skipSnaps: w,
    containScroll: z,
    watchResize: B,
    watchSlides: X,
    watchDrag: rt,
    watchFocus: ut
  } = d, j = 2, N = ED(), Z = N.measure(l), lt = s.map(N.measure), J = SD(p, g), Q = J.measureSize(Z), tt = AD(Q), W = vD(m, Q), $ = !y && !!z, G = y || !!z, {
    slideSizes: P,
    slideSizesWithGaps: et,
    startGap: st,
    endGap: Y
  } = kD(J, Z, lt, s, G, c), yt = GD(J, Q, A, y, Z, lt, st, Y, j), {
    snaps: bt,
    snapsAligned: nt
  } = RD(J, W, Z, lt, yt), x = -An(bt) + An(et), {
    snapsContained: H,
    scrollContainLimit: it
  } = DD(Q, x, nt, z, j), at = $ ? H : nt, {
    limit: vt
  } = zD(x, at, y), ft = zS(Ws(at), v, y), Tt = ft.clone(), ot = Zs(s), I = ({
    dragHandler: wn,
    scrollBody: Gi,
    scrollBounds: Dl,
    options: {
      loop: Yi
    }
  }) => {
    Yi || Dl.constrain(wn.pointerDown()), Gi.seek();
  }, Et = ({
    scrollBody: wn,
    translate: Gi,
    location: Dl,
    offsetLocation: Yi,
    previousLocation: zl,
    scrollLooper: Ol,
    slideLooper: Nl,
    dragHandler: du,
    animation: hu,
    eventHandler: Me,
    scrollBounds: mu,
    options: {
      loop: Rl
    }
  }, _l) => {
    const qi = wn.settled(), pu = !mu.shouldConstrain(), Vl = Rl ? qi : qi && pu, to = Vl && !du.pointerDown();
    to && hu.stop();
    const gu = Dl.get() * _l + zl.get() * (1 - _l);
    Yi.set(gu), Rl && (Ol.loop(wn.direction()), Nl.loop()), Gi.to(Yi.get()), to && Me.emit("settle"), Vl || Me.emit("scroll");
  }, Mt = bD(o, c, () => I(en), (wn) => Et(en, wn)), It = 0.68, Xt = at[ft.get()], Ut = Rs(Xt), Ot = Rs(Xt), Pt = Rs(Xt), Ge = Rs(Xt), Ve = CD(Ut, Pt, Ot, Ge, S, It), si = VD(y, at, x, vt, Ge), oi = jD(Mt, ft, Tt, Ve, si, Ge, f), Gn = ND(vt), Ca = Ps(), Ma = HD(l, s, f, M), {
    slideRegistry: Da
  } = _D($, z, at, it, yt, ot), $s = LD(i, s, Da, oi, Ve, Ca, f, ut), en = {
    ownerDocument: o,
    ownerWindow: c,
    eventHandler: f,
    containerRect: Z,
    slideRects: lt,
    animation: Mt,
    axis: J,
    dragHandler: TD(J, i, o, c, Ge, xD(J, c), Ut, Mt, oi, Ve, si, ft, f, tt, C, T, w, It, rt),
    eventStore: Ca,
    percentOfView: tt,
    index: ft,
    indexPrevious: Tt,
    limit: vt,
    location: Ut,
    offsetLocation: Pt,
    previousLocation: Ot,
    options: d,
    resizeHandler: wD(l, f, c, s, J, B, N),
    scrollBody: Ve,
    scrollBounds: MD(vt, Pt, Ge, Ve, tt),
    scrollLooper: OD(x, vt, Pt, [Ut, Pt, Ot, Ge]),
    scrollProgress: Gn,
    scrollSnapList: at.map(Gn.get),
    scrollSnaps: at,
    scrollTarget: si,
    scrollTo: oi,
    slideLooper: BD(J, Q, x, P, et, bt, at, Pt, s),
    slideFocus: $s,
    slidesHandler: UD(l, f, X),
    slidesInView: Ma,
    slideIndexes: ot,
    slideRegistry: Da,
    slidesToScroll: yt,
    target: Ge,
    translate: OS(J, l)
  };
  return en;
}
function qD() {
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
const XD = {
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
function QD(i) {
  function l(d, f) {
    return DS(d, f || {});
  }
  function s(d) {
    const f = d.breakpoints || {}, m = Ks(f).filter((p) => i.matchMedia(p).matches).map((p) => f[p]).reduce((p, g) => l(p, g), {});
    return l(d, m);
  }
  function o(d) {
    return d.map((f) => Ks(f.breakpoints || {})).reduce((f, m) => f.concat(m), []).map(i.matchMedia);
  }
  return {
    mergeOptions: l,
    optionsAtMedia: s,
    optionsMediaQueries: o
  };
}
function ZD(i) {
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
function lu(i, l, s) {
  const o = i.ownerDocument, c = o.defaultView, d = QD(c), f = ZD(d), m = Ps(), p = qD(), {
    mergeOptions: g,
    optionsAtMedia: v,
    optionsMediaQueries: y
  } = d, {
    on: S,
    off: C,
    emit: T
  } = p, M = J;
  let A = !1, w, z = g(XD, lu.globalOptions), B = g(z), X = [], rt, ut, j;
  function N() {
    const {
      container: ot,
      slides: I
    } = B;
    ut = ($d(ot) ? i.querySelector(ot) : ot) || i.children[0];
    const Mt = $d(I) ? ut.querySelectorAll(I) : I;
    j = [].slice.call(Mt || ut.children);
  }
  function Z(ot) {
    const I = YD(i, ut, j, o, c, ot, p);
    if (ot.loop && !I.slideLooper.canLoop()) {
      const Et = Object.assign({}, ot, {
        loop: !1
      });
      return Z(Et);
    }
    return I;
  }
  function lt(ot, I) {
    A || (z = g(z, ot), B = v(z), X = I || X, N(), w = Z(B), y([z, ...X.map(({
      options: Et
    }) => Et)]).forEach((Et) => m.add(Et, "change", J)), B.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(Tt), w.eventHandler.init(Tt), w.resizeHandler.init(Tt), w.slidesHandler.init(Tt), w.options.loop && w.slideLooper.loop(), ut.offsetParent && j.length && w.dragHandler.init(Tt), rt = f.init(Tt, X)));
  }
  function J(ot, I) {
    const Et = yt();
    Q(), lt(g({
      startIndex: Et
    }, ot), I), p.emit("reInit");
  }
  function Q() {
    w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), f.destroy(), m.clear();
  }
  function tt() {
    A || (A = !0, m.clear(), Q(), p.emit("destroy"), p.clear());
  }
  function W(ot, I, Et) {
    !B.active || A || (w.scrollBody.useBaseFriction().useDuration(I === !0 ? 0 : B.duration), w.scrollTo.index(ot, Et || 0));
  }
  function $(ot) {
    const I = w.index.add(1).get();
    W(I, ot, -1);
  }
  function G(ot) {
    const I = w.index.add(-1).get();
    W(I, ot, 1);
  }
  function P() {
    return w.index.add(1).get() !== yt();
  }
  function et() {
    return w.index.add(-1).get() !== yt();
  }
  function st() {
    return w.scrollSnapList;
  }
  function Y() {
    return w.scrollProgress.get(w.offsetLocation.get());
  }
  function yt() {
    return w.index.get();
  }
  function bt() {
    return w.indexPrevious.get();
  }
  function nt() {
    return w.slidesInView.get();
  }
  function x() {
    return w.slidesInView.get(!1);
  }
  function H() {
    return rt;
  }
  function it() {
    return w;
  }
  function at() {
    return i;
  }
  function vt() {
    return ut;
  }
  function ft() {
    return j;
  }
  const Tt = {
    canScrollNext: P,
    canScrollPrev: et,
    containerNode: vt,
    internalEngine: it,
    destroy: tt,
    off: C,
    on: S,
    emit: T,
    plugins: H,
    previousScrollSnap: bt,
    reInit: M,
    rootNode: at,
    scrollNext: $,
    scrollPrev: G,
    scrollProgress: Y,
    scrollSnapList: st,
    scrollTo: W,
    selectedScrollSnap: yt,
    slideNodes: ft,
    slidesInView: nt,
    slidesNotInView: x
  };
  return lt(l, s), setTimeout(() => p.emit("init"), 0), Tt;
}
lu.globalOptions = void 0;
function Kh(i = {}, l = []) {
  const s = q.useRef(i), o = q.useRef(l), [c, d] = q.useState(), [f, m] = q.useState(), p = q.useCallback(() => {
    c && c.reInit(s.current, o.current);
  }, [c]);
  return q.useEffect(() => {
    qh(s.current, i) || (s.current = i, p());
  }, [i, p]), q.useEffect(() => {
    pD(o.current, l) || (o.current = l, p());
  }, [l, p]), q.useEffect(() => {
    if (mD() && f) {
      lu.globalOptions = Kh.globalOptions;
      const g = lu(f, s.current, o.current);
      return d(g), () => g.destroy();
    } else
      d(void 0);
  }, [f, d]), [m, c];
}
Kh.globalOptions = void 0;
const eb = (i) => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i, nb = vb, KD = (i, l) => (s) => {
  var o;
  if (l?.variants == null) return nb(i, s?.class, s?.className);
  const { variants: c, defaultVariants: d } = l, f = Object.keys(c).map((g) => {
    const v = s?.[g], y = d?.[g];
    if (v === null) return null;
    const S = eb(v) || eb(y);
    return c[g][S];
  }), m = s && Object.entries(s).reduce((g, v) => {
    let [y, S] = v;
    return S === void 0 || (g[y] = S), g;
  }, {}), p = l == null || (o = l.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((g, v) => {
    let { class: y, className: S, ...C } = v;
    return Object.entries(C).every((T) => {
      let [M, A] = T;
      return Array.isArray(A) ? A.includes({
        ...d,
        ...m
      }[M]) : {
        ...d,
        ...m
      }[M] === A;
    }) ? [
      ...g,
      y,
      S
    ] : g;
  }, []);
  return nb(i, f, p, s?.class, s?.className);
}, PD = KD(
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
function FD({
  className: i,
  variant: l = "default",
  size: s = "default",
  asChild: o = !1,
  ...c
}) {
  const d = o ? UE : "button";
  return /* @__PURE__ */ O.jsx(
    d,
    {
      "data-slot": "button",
      "data-variant": l,
      "data-size": s,
      className: Aa(PD({ variant: l, size: s, className: i })),
      ...c
    }
  );
}
const NS = q.createContext(null);
function RS() {
  const i = q.useContext(NS);
  if (!i)
    throw new Error("useCarousel must be used within a <Carousel />");
  return i;
}
function xd({
  orientation: i = "horizontal",
  opts: l,
  setApi: s,
  plugins: o,
  className: c,
  children: d,
  ...f
}) {
  const [m, p] = Kh(
    {
      ...l,
      axis: i === "horizontal" ? "x" : "y"
    },
    o
  ), [g, v] = q.useState(!1), [y, S] = q.useState(!1), C = q.useCallback((w) => {
    w && (v(w.canScrollPrev()), S(w.canScrollNext()));
  }, []), T = q.useCallback(() => {
    p?.scrollPrev();
  }, [p]), M = q.useCallback(() => {
    p?.scrollNext();
  }, [p]), A = q.useCallback(
    (w) => {
      w.key === "ArrowLeft" ? (w.preventDefault(), T()) : w.key === "ArrowRight" && (w.preventDefault(), M());
    },
    [T, M]
  );
  return q.useEffect(() => {
    !p || !s || s(p);
  }, [p, s]), q.useEffect(() => {
    if (p)
      return C(p), p.on("reInit", C), p.on("select", C), () => {
        p?.off("select", C), p?.off("reInit", C);
      };
  }, [p, C]), /* @__PURE__ */ O.jsx(
    NS.Provider,
    {
      value: {
        carouselRef: m,
        api: p,
        opts: l,
        orientation: i || (l?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev: T,
        scrollNext: M,
        canScrollPrev: g,
        canScrollNext: y
      },
      children: /* @__PURE__ */ O.jsx(
        "div",
        {
          onKeyDownCapture: A,
          className: Aa("vt:relative", c),
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
function Ed({ className: i, ...l }) {
  const { carouselRef: s, orientation: o } = RS();
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      ref: s,
      className: "vt:overflow-hidden",
      "data-slot": "carousel-content",
      children: /* @__PURE__ */ O.jsx(
        "div",
        {
          className: Aa(
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
function Ad({ className: i, ...l }) {
  const { orientation: s } = RS();
  return /* @__PURE__ */ O.jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: Aa(
        "vt:min-w-0 vt:shrink-0 vt:grow-0 vt:basis-full",
        s === "horizontal" ? "vt:pl-4" : "vt:pt-4",
        i
      ),
      ...l
    }
  );
}
const JD = {
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
function ID(i, l) {
  const s = i.scrollSnapList();
  return typeof l == "number" ? s.map(() => l) : l(s, i);
}
function WD(i, l) {
  const s = i.rootNode();
  return l && l(s) || s;
}
function Ph(i = {}) {
  let l, s, o, c, d = null, f = 0, m = !1, p = !1, g = !1, v = !1;
  function y(W, $) {
    s = W;
    const {
      mergeOptions: G,
      optionsAtMedia: P
    } = $, et = G(JD, Ph.globalOptions), st = G(et, i);
    if (l = P(st), s.scrollSnapList().length <= 1) return;
    v = l.jump, o = !1, c = ID(s, l.delay);
    const {
      eventStore: Y,
      ownerDocument: yt
    } = s.internalEngine(), bt = !!s.internalEngine().options.watchDrag, nt = WD(s, l.rootNode);
    Y.add(yt, "visibilitychange", w), bt && s.on("pointerDown", B), bt && !l.stopOnInteraction && s.on("pointerUp", X), l.stopOnMouseEnter && Y.add(nt, "mouseenter", rt), l.stopOnMouseEnter && !l.stopOnInteraction && Y.add(nt, "mouseleave", ut), l.stopOnFocusIn && s.on("slideFocusStart", A), l.stopOnFocusIn && !l.stopOnInteraction && Y.add(s.containerNode(), "focusout", M), l.playOnInit && M();
  }
  function S() {
    s.off("pointerDown", B).off("pointerUp", X).off("slideFocusStart", A), A(), o = !0, m = !1;
  }
  function C() {
    const {
      ownerWindow: W
    } = s.internalEngine();
    W.clearTimeout(f), f = W.setTimeout(J, c[s.selectedScrollSnap()]), d = (/* @__PURE__ */ new Date()).getTime(), s.emit("autoplay:timerset");
  }
  function T() {
    const {
      ownerWindow: W
    } = s.internalEngine();
    W.clearTimeout(f), f = 0, d = null, s.emit("autoplay:timerstopped");
  }
  function M() {
    if (!o) {
      if (z()) {
        g = !0;
        return;
      }
      m || s.emit("autoplay:play"), C(), m = !0;
    }
  }
  function A() {
    o || (m && s.emit("autoplay:stop"), T(), m = !1);
  }
  function w() {
    if (z())
      return g = m, A();
    g && M();
  }
  function z() {
    const {
      ownerDocument: W
    } = s.internalEngine();
    return W.visibilityState === "hidden";
  }
  function B() {
    p || A();
  }
  function X() {
    p || M();
  }
  function rt() {
    p = !0, A();
  }
  function ut() {
    p = !1, M();
  }
  function j(W) {
    typeof W < "u" && (v = W), M();
  }
  function N() {
    m && A();
  }
  function Z() {
    m && M();
  }
  function lt() {
    return m;
  }
  function J() {
    const {
      index: W
    } = s.internalEngine(), $ = W.clone().add(1).get(), G = s.scrollSnapList().length - 1, P = l.stopOnLastSnap && $ === G;
    if (s.canScrollNext() ? s.scrollNext(v) : s.scrollTo(0, v), s.emit("autoplay:select"), P) return A();
    M();
  }
  function Q() {
    if (!d) return null;
    const W = c[s.selectedScrollSnap()], $ = (/* @__PURE__ */ new Date()).getTime() - d;
    return W - $;
  }
  return {
    name: "autoplay",
    options: i,
    init: y,
    destroy: S,
    play: j,
    stop: N,
    reset: Z,
    isPlaying: lt,
    timeUntilNext: Q
  };
}
Ph.globalOptions = void 0;
const $D = [
  {
    id: "product-malai-pair",
    category: "garland",
    name: "Wedding Garland Pair",
    image: "images/optimized/products/studio-v1/malai-pair.webp",
    alt: "Vetiver wedding garland pair with purple and orange thread",
    description: "Matching vetiver malai set with purple, orange & gold thread work. Perfect for weddings.",
    thumbnail: "images/optimized/products/studio-v1/malai-pair-thumb.webp",
    status: "published",
    sort_order: 0,
    featured_order: null
  },
  {
    id: "product-malai-royal",
    category: "garland",
    name: "Royal Vetiver Garland",
    image: "images/optimized/products/studio-v1/malai-royal.webp",
    alt: "Vetiver garland with maroon thread and gold ornaments",
    description: "Elegant malai with deep maroon thread, gold spiral ornaments & beaded tassel pendant.",
    thumbnail: "images/optimized/products/studio-v1/malai-royal-thumb.webp",
    status: "published",
    sort_order: 1,
    featured_order: 0
  },
  {
    id: "product-malai-green",
    category: "garland",
    name: "Green & Gold Garland",
    image: "images/optimized/products/studio-v1/malai-green.webp",
    alt: "Vetiver garland with green thread and gold roses",
    description: "Classic vetiver malai with emerald green thread bands and golden rose ornaments.",
    thumbnail: "images/optimized/products/studio-v1/malai-green-thumb.webp",
    status: "published",
    sort_order: 2,
    featured_order: null
  },
  {
    id: "product-malai-neon",
    category: "garland",
    name: "Neon Vetiver Garland",
    image: "images/optimized/products/studio-v1/malai-neon.webp",
    alt: "Vetiver garland with neon green and pink thread",
    description: "Vibrant vetiver malai with bright neon green and hot pink thread accents.",
    thumbnail: "images/optimized/products/studio-v1/malai-neon-thumb.webp",
    status: "published",
    sort_order: 3,
    featured_order: null
  },
  {
    id: "product-malai-flowers",
    category: "garland",
    name: "Flower Vetiver Garland",
    image: "images/optimized/products/studio-v1/malai-flowers.webp",
    alt: "Vetiver garland with flower decorations",
    description: "Beautiful vetiver malai adorned with red & yellow flowers and pink tassels.",
    thumbnail: "images/optimized/products/studio-v1/malai-flowers-thumb.webp",
    status: "published",
    sort_order: 4,
    featured_order: 3
  },
  {
    id: "product-peacock",
    category: "decor",
    name: "Vetiver Peacock (Mayil)",
    image: "images/optimized/products/studio-v1/peacock.webp",
    alt: "Vetiver root peacock sculpture",
    description: "Stunning peacock sculpture crafted entirely from vetiver roots with colorful feather details.",
    thumbnail: "images/optimized/products/studio-v1/peacock-thumb.webp",
    status: "published",
    sort_order: 5,
    featured_order: 2
  },
  {
    id: "product-toran-fringe",
    category: "toran",
    name: "Vetiver Door Curtain",
    image: "images/optimized/products/studio-v1/toran-fringe.webp",
    alt: "Vetiver root door hanging with natural fringe",
    description: "Natural vetiver root door hanging with woven top band and flowing fringe. Cooling fragrance.",
    thumbnail: "images/optimized/products/studio-v1/toran-fringe-thumb.webp",
    status: "published",
    sort_order: 6,
    featured_order: 1
  },
  {
    id: "product-toran-flowers",
    category: "toran",
    name: "Flower Toran",
    image: "images/optimized/products/studio-v1/toran-flowers.webp",
    alt: "Vetiver door hanging with flower decorations",
    description: "Vetiver door hanging with red ribbon border and colorful flower embellishments.",
    thumbnail: "images/optimized/products/studio-v1/toran-flowers-thumb.webp",
    status: "published",
    sort_order: 7,
    featured_order: null
  },
  {
    id: "product-hanging-bells",
    category: "toran",
    name: "Vetiver Bell Hanging",
    image: "images/optimized/products/hanging-bells.webp",
    alt: "Vetiver circular hanging decoration with brass bells",
    description: "Decorative hanging with circular vetiver discs on embroidered ribbon with brass bells.",
    thumbnail: "images/optimized/products/hanging-bells-thumb.webp",
    status: "published",
    sort_order: 8,
    featured_order: null
  },
  {
    id: "product-vel",
    category: "ceremony",
    name: "Vetiver Vel (Spear)",
    image: "images/optimized/products/studio-v1/vel.webp",
    alt: "Vetiver root vel - Lord Murugan's spear",
    description: "Sacred vel of Lord Murugan crafted from vetiver roots with blue and gold fabric wrapping.",
    thumbnail: "images/optimized/products/studio-v1/vel-thumb.webp",
    status: "published",
    sort_order: 9,
    featured_order: 4
  },
  {
    id: "product-flag",
    category: "ceremony",
    name: "Vetiver Kodi (Flag)",
    image: "images/optimized/products/studio-v1/flag.webp",
    alt: "Vetiver root ceremonial flag",
    description: "Ceremonial temple flag handcrafted from vetiver roots with crochet border and palm motif.",
    thumbnail: "images/optimized/products/studio-v1/flag-thumb.webp",
    status: "published",
    sort_order: 10,
    featured_order: null
  },
  {
    id: "product-toran-auspicious",
    category: "toran",
    name: "Auspicious Toran",
    image: "images/optimized/products/studio-v1/toran-auspicious.webp",
    alt: "Vetiver door hanging with auspicious symbols",
    description: "Vetiver door hanging with sacred symbols, maroon border, and golden zigzag trim.",
    thumbnail: "images/optimized/products/studio-v1/toran-auspicious-thumb.webp",
    status: "published",
    sort_order: 11,
    featured_order: null
  }
], _S = $D;
function tz({ products: i = _S }) {
  const l = q.useMemo(() => i.filter((w) => w.featured_order !== null).sort((w, z) => w.featured_order - z.featured_order), [i]), s = q.useRef(null), o = Gh(s, { amount: 0.2 }), c = Yh(), d = q.useMemo(() => Ph({ active: !c, delay: 3e3, stopOnInteraction: !1, stopOnFocusIn: !1, stopOnMouseEnter: !1, playOnInit: !1 }), [c]), [f, m] = q.useState(), [p, g] = q.useState(), [v, y] = q.useState(), [S, C] = q.useState(0), [T, M] = q.useState(!0);
  q.useEffect(() => {
    const w = () => M(!document.hidden);
    return w(), document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, []), q.useEffect(() => {
    if (!f || !p || !v) return;
    const w = [f, p, v], z = w.map((B) => {
      const X = () => {
        const rt = B.selectedScrollSnap();
        C(rt), w.forEach((ut) => {
          ut !== B && ut.selectedScrollSnap() !== rt && ut.scrollTo(rt, !!c);
        });
      };
      return B.on("select", X), X;
    });
    return () => {
      w.forEach((B, X) => {
        B.off("select", z[X]);
      });
    };
  }, [f, p, v, c]), q.useEffect(() => {
    f && (!c && o && T ? d.play() : d.stop());
  }, [f, c, o, T, d]);
  const A = (w) => {
    f?.scrollTo(w, !!c), d.reset();
  };
  return l.length ? /* @__PURE__ */ O.jsxs("div", { ref: s, className: "showcase-inner", "data-current": S, children: [
    /* @__PURE__ */ O.jsxs("div", { className: "showcase-top", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "showcase-intro", children: [
        /* @__PURE__ */ O.jsxs("h2", { id: "showcase-title", children: [
          "Nature,",
          /* @__PURE__ */ O.jsx("br", {}),
          "thoughtfully made."
        ] }),
        /* @__PURE__ */ O.jsx("p", { children: "Handcrafted vetiver pieces for the moments you celebrate and the spaces you call home." }),
        /* @__PURE__ */ O.jsx("div", { className: "showcase-actions", children: /* @__PURE__ */ O.jsx(FD, { asChild: !0, size: "lg", className: "showcase-cta", children: /* @__PURE__ */ O.jsxs("a", { href: "products.html", children: [
          "View all pieces ",
          /* @__PURE__ */ O.jsx(Kr, { size: 20, "aria-hidden": "true" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ O.jsx(xd, { setApi: m, plugins: [d], opts: { loop: !0, duration: c ? 0 : 25 }, className: "showcase-main showcase-viewport", "aria-roledescription": "carousel", "aria-label": "Featured vetiver products", onKeyDownCapture: (w) => {
        (w.key === "ArrowRight" || w.key === "ArrowLeft") && (w.preventDefault(), A(S + (w.key === "ArrowRight" ? 1 : -1)));
      }, tabIndex: 0, children: /* @__PURE__ */ O.jsx(Ed, { className: "showcase-track", children: l.map((w, z) => /* @__PURE__ */ O.jsx(Ad, { className: "showcase-slide", "aria-hidden": S !== z, children: /* @__PURE__ */ O.jsx("div", { className: "showcase-image-frame", children: /* @__PURE__ */ O.jsx("img", { src: w.image, alt: w.alt, width: 1024, height: 1024, loading: "lazy", draggable: !1 }) }) }, w.id)) }) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "showcase-bottom", children: [
      /* @__PURE__ */ O.jsx("div", { className: "showcase-thumbnails", children: /* @__PURE__ */ O.jsx(xd, { setApi: g, opts: { loop: !0, duration: c ? 0 : 25 }, className: "showcase-thumb-viewport showcase-viewport", "aria-label": "Choose a featured product", children: /* @__PURE__ */ O.jsx(Ed, { className: "showcase-track", children: l.map((w, z) => /* @__PURE__ */ O.jsx(Ad, { className: "showcase-thumb-slide", children: /* @__PURE__ */ O.jsxs("button", { type: "button", className: "showcase-thumb", "aria-label": "Show " + w.name, "aria-pressed": S === z, onClick: () => A(z), children: [
        /* @__PURE__ */ O.jsx("svg", { viewBox: "0 0 161 92", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("path", { d: "M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z", fill: "none", stroke: "currentColor" }) }),
        /* @__PURE__ */ O.jsx("img", { src: w.thumbnail, alt: "", width: 100, height: 100, loading: "lazy", draggable: !1 })
      ] }) }, w.id)) }) }) }),
      /* @__PURE__ */ O.jsx(xd, { setApi: y, opts: { loop: !0, duration: c ? 0 : 25 }, className: "showcase-details showcase-viewport", "aria-live": c ? "polite" : "off", children: /* @__PURE__ */ O.jsx(Ed, { className: "showcase-track", children: l.map((w, z) => /* @__PURE__ */ O.jsxs(Ad, { className: "showcase-detail-slide", "aria-hidden": S !== z, children: [
        /* @__PURE__ */ O.jsx("h3", { children: w.name }),
        /* @__PURE__ */ O.jsx("p", { children: w.description }),
        /* @__PURE__ */ O.jsxs("a", { href: "products.html#" + w.id, tabIndex: S === z ? 0 : -1, children: [
          "View product details ",
          /* @__PURE__ */ O.jsx(Kr, { size: 16, "aria-hidden": "true" })
        ] })
      ] }, w.id)) }) })
    ] })
  ] }) : /* @__PURE__ */ O.jsxs("div", { className: "wrap", children: [
    /* @__PURE__ */ O.jsx("h2", { id: "showcase-title", children: "Our vetiver collection." }),
    /* @__PURE__ */ O.jsx("p", { children: window.VETTIVER_CATALOG?.error || "Explore the available pieces in our collection." }),
    /* @__PURE__ */ O.jsx("a", { className: "text-link", href: "products.html", children: "View all pieces" })
  ] });
}
function ez({ tagline: i, title: l, description: s, ctaText: o, images: c, className: d }) {
  const f = q.useRef(null), m = Gh(f, { amount: 0.15 }), p = Yh(), [g, v] = q.useState(!0);
  return q.useEffect(() => {
    const y = () => v(!document.hidden);
    return y(), document.addEventListener("visibilitychange", y), () => document.removeEventListener("visibilitychange", y);
  }, []), /* @__PURE__ */ O.jsxs("section", { ref: f, className: Aa("bulk-marquee", d), "aria-labelledby": "bulk-title", children: [
    /* @__PURE__ */ O.jsxs(Wd.div, { className: "bulk-copy", initial: !1, animate: { y: p || m ? 0 : 16 }, transition: { duration: p ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }, children: [
      i && /* @__PURE__ */ O.jsx("p", { children: i }),
      /* @__PURE__ */ O.jsx("h2", { id: "bulk-title", children: l }),
      /* @__PURE__ */ O.jsx("p", { children: s }),
      /* @__PURE__ */ O.jsxs(Wd.button, { type: "button", "data-bulk-enquiry": !0, "aria-haspopup": "dialog", "aria-controls": "bulk-enquiry-dialog", className: "bulk-cta", whileHover: p ? {} : { y: -2 }, whileTap: p ? {} : { scale: 0.98 }, children: [
        o,
        /* @__PURE__ */ O.jsx(rh, { size: 20, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ O.jsx("span", { className: "bulk-note", children: "Share your occasion, quantity and delivery location." })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: "bulk-image-window", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("div", { className: "bulk-image-track", style: { animationPlayState: p || !m || !g ? "paused" : "running" }, children: [0, 1].map((y) => /* @__PURE__ */ O.jsx("div", { className: "bulk-image-group", children: c.map((S, C) => /* @__PURE__ */ O.jsx("div", { className: "bulk-image", style: { rotate: (C % 2 === 0 ? -3 : 4) + "deg" }, children: /* @__PURE__ */ O.jsx("img", { src: S, alt: "", width: 1024, height: 1024, loading: "lazy", draggable: !1 }) }, S + C)) }, y)) }) })
  ] });
}
async function ib() {
  await window.VETTIVER_CATALOG?.ready;
  const i = window.VETTIVER_CATALOG?.products ?? _S, l = document.getElementById("product-showcase-root");
  l && Dr.createRoot(l).render(/* @__PURE__ */ O.jsx(tz, { products: i }));
  const s = document.getElementById("bulk-order-root");
  s && Dr.createRoot(s).render(/* @__PURE__ */ O.jsx(ez, { title: /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    "More pieces.",
    /* @__PURE__ */ O.jsx("br", {}),
    "One thoughtful gesture."
  ] }), description: "For celebrations, gifting and larger orders, bring a little vetiver into every detail. Tell us what you have in mind and we’ll discuss the options with you.", ctaText: "Request a bulk quote", images: i.slice(0, 8).map((g) => g.thumbnail) }));
  const o = window.VETTIVER_CONFIG?.feedbackEndpoint || "", c = o.startsWith("/") && !o.startsWith("//") ? o : "", d = document.getElementById("testimonials-root");
  if (d) {
    const g = Dr.createRoot(d), v = /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
      /* @__PURE__ */ O.jsx(lD, { testimonials: dD }),
      /* @__PURE__ */ O.jsx(K0, { endpoint: c })
    ] });
    new URLSearchParams(location.search).get("ui-demo") === "testimonials" ? import("./demo-DahIYyAW.js").then(({ AnimatedTestimonialsBasic: y }) => g.render(/* @__PURE__ */ O.jsxs(O.Fragment, { children: [
      /* @__PURE__ */ O.jsx(y, {}),
      /* @__PURE__ */ O.jsx(K0, { endpoint: "" })
    ] }))) : g.render(v);
  }
  const f = document.getElementById("footer-root");
  f && Dr.createRoot(f).render(/* @__PURE__ */ O.jsx(fD, { columns: document.body.classList.contains("catalog-page") ? [
    { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "index.html#about" }, { label: "Customer stories", href: "index.html#reviews" }] },
    { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "index.html#reviews" }, { label: "Back home", href: "index.html" }] }
  ] : void 0 }));
  let m = 0;
  const p = new ResizeObserver(() => {
    cancelAnimationFrame(m), m = requestAnimationFrame(() => window.ScrollTrigger?.refresh());
  });
  d && p.observe(d), f && p.observe(f), l && p.observe(l), s && p.observe(s), window.addEventListener("pagehide", (g) => {
    g.persisted || (p.disconnect(), cancelAnimationFrame(m));
  });
}
document.readyState === "complete" ? ib() : document.addEventListener("DOMContentLoaded", ib, { once: !0 });
export {
  lD as A,
  O as j
};
