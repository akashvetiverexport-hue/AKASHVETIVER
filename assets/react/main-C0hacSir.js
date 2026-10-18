function CE(i, l) {
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
function ME(i) {
  return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i;
}
var Pf = { exports: {} }, Os = {};
var yv;
function DE() {
  if (yv) return Os;
  yv = 1;
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
  return Os.Fragment = l, Os.jsx = s, Os.jsxs = s, Os;
}
var vv;
function OE() {
  return vv || (vv = 1, Pf.exports = DE()), Pf.exports;
}
var O = OE(), Ff = { exports: {} }, zs = {}, Jf = { exports: {} }, If = {};
var bv;
function zE() {
  return bv || (bv = 1, (function(i) {
    function l(q, F) {
      var tt = q.length;
      q.push(F);
      t: for (; 0 < tt; ) {
        var at = tt - 1 >>> 1, Y = q[at];
        if (0 < c(Y, F))
          q[at] = F, q[tt] = Y, tt = at;
        else break t;
      }
    }
    function s(q) {
      return q.length === 0 ? null : q[0];
    }
    function o(q) {
      if (q.length === 0) return null;
      var F = q[0], tt = q.pop();
      if (tt !== F) {
        q[0] = tt;
        t: for (var at = 0, Y = q.length, yt = Y >>> 1; at < yt; ) {
          var bt = 2 * (at + 1) - 1, et = q[bt], E = bt + 1, G = q[E];
          if (0 > c(et, tt))
            E < Y && 0 > c(G, et) ? (q[at] = G, q[E] = tt, at = E) : (q[at] = et, q[bt] = tt, at = bt);
          else if (E < Y && 0 > c(G, tt))
            q[at] = G, q[E] = tt, at = E;
          else break t;
        }
      }
      return F;
    }
    function c(q, F) {
      var tt = q.sortIndex - F.sortIndex;
      return tt !== 0 ? tt : q.id - F.id;
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
    var p = [], g = [], v = 1, y = null, S = 3, C = !1, T = !1, w = !1, x = !1, D = typeof setTimeout == "function" ? setTimeout : null, z = typeof clearTimeout == "function" ? clearTimeout : null, H = typeof setImmediate < "u" ? setImmediate : null;
    function L(q) {
      for (var F = s(g); F !== null; ) {
        if (F.callback === null) o(g);
        else if (F.startTime <= q)
          o(g), F.sortIndex = F.expirationTime, l(p, F);
        else break;
        F = s(g);
      }
    }
    function $(q) {
      if (w = !1, L(q), !T)
        if (s(p) !== null)
          T = !0, ot || (ot = !0, K());
        else {
          var F = s(g);
          F !== null && W($, F.startTime - q);
        }
    }
    var ot = !1, j = -1, N = 5, ut = -1;
    function ct() {
      return x ? !0 : !(i.unstable_now() - ut < N);
    }
    function P() {
      if (x = !1, ot) {
        var q = i.unstable_now();
        ut = q;
        var F = !0;
        try {
          t: {
            T = !1, w && (w = !1, z(j), j = -1), C = !0;
            var tt = S;
            try {
              e: {
                for (L(q), y = s(p); y !== null && !(y.expirationTime > q && ct()); ) {
                  var at = y.callback;
                  if (typeof at == "function") {
                    y.callback = null, S = y.priorityLevel;
                    var Y = at(
                      y.expirationTime <= q
                    );
                    if (q = i.unstable_now(), typeof Y == "function") {
                      y.callback = Y, L(q), F = !0;
                      break e;
                    }
                    y === s(p) && o(p), L(q);
                  } else o(p);
                  y = s(p);
                }
                if (y !== null) F = !0;
                else {
                  var yt = s(g);
                  yt !== null && W(
                    $,
                    yt.startTime - q
                  ), F = !1;
                }
              }
              break t;
            } finally {
              y = null, S = tt, C = !1;
            }
            F = void 0;
          }
        } finally {
          F ? K() : ot = !1;
        }
      }
    }
    var K;
    if (typeof H == "function")
      K = function() {
        H(P);
      };
    else if (typeof MessageChannel < "u") {
      var lt = new MessageChannel(), I = lt.port2;
      lt.port1.onmessage = P, K = function() {
        I.postMessage(null);
      };
    } else
      K = function() {
        D(P, 0);
      };
    function W(q, F) {
      j = D(function() {
        q(i.unstable_now());
      }, F);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, i.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : N = 0 < q ? Math.floor(1e3 / q) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return S;
    }, i.unstable_next = function(q) {
      switch (S) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = S;
      }
      var tt = S;
      S = F;
      try {
        return q();
      } finally {
        S = tt;
      }
    }, i.unstable_requestPaint = function() {
      x = !0;
    }, i.unstable_runWithPriority = function(q, F) {
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
      var tt = S;
      S = q;
      try {
        return F();
      } finally {
        S = tt;
      }
    }, i.unstable_scheduleCallback = function(q, F, tt) {
      var at = i.unstable_now();
      switch (typeof tt == "object" && tt !== null ? (tt = tt.delay, tt = typeof tt == "number" && 0 < tt ? at + tt : at) : tt = at, q) {
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
      return Y = tt + Y, q = {
        id: v++,
        callback: F,
        priorityLevel: q,
        startTime: tt,
        expirationTime: Y,
        sortIndex: -1
      }, tt > at ? (q.sortIndex = tt, l(g, q), s(p) === null && q === s(g) && (w ? (z(j), j = -1) : w = !0, W($, tt - at))) : (q.sortIndex = Y, l(p, q), T || C || (T = !0, ot || (ot = !0, K()))), q;
    }, i.unstable_shouldYield = ct, i.unstable_wrapCallback = function(q) {
      var F = S;
      return function() {
        var tt = S;
        S = F;
        try {
          return q.apply(this, arguments);
        } finally {
          S = tt;
        }
      };
    };
  })(If)), If;
}
var Sv;
function NE() {
  return Sv || (Sv = 1, Jf.exports = zE()), Jf.exports;
}
var Wf = { exports: {} }, At = {};
var Tv;
function RE() {
  if (Tv) return At;
  Tv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), l = /* @__PURE__ */ Symbol.for("react.portal"), s = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), c = /* @__PURE__ */ Symbol.for("react.profiler"), d = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), m = /* @__PURE__ */ Symbol.for("react.forward_ref"), p = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), v = /* @__PURE__ */ Symbol.for("react.lazy"), y = /* @__PURE__ */ Symbol.for("react.activity"), S = /* @__PURE__ */ Symbol.for("react.view_transition"), C = Symbol.iterator;
  function T(E) {
    return E === null || typeof E != "object" ? null : (E = C && E[C] || E["@@iterator"], typeof E == "function" ? E : null);
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
  }, x = Object.assign, D = {};
  function z(E, G, nt) {
    this.props = E, this.context = G, this.refs = D, this.updater = nt || w;
  }
  z.prototype.isReactComponent = {}, z.prototype.setState = function(E, G) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, G, "setState");
  }, z.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function H() {
  }
  H.prototype = z.prototype;
  function L(E, G, nt) {
    this.props = E, this.context = G, this.refs = D, this.updater = nt || w;
  }
  var $ = L.prototype = new H();
  $.constructor = L, x($, z.prototype), $.isPureReactComponent = !0;
  var ot = Array.isArray;
  function j() {
  }
  var N = { H: null, A: null, T: null, S: null }, ut = Object.prototype.hasOwnProperty;
  function ct(E, G, nt) {
    var it = nt.ref;
    return {
      $$typeof: i,
      type: E,
      key: G,
      ref: it !== void 0 ? it : null,
      props: nt
    };
  }
  function P(E, G) {
    return ct(E.type, G, E.props);
  }
  function K(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function lt(E) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(nt) {
      return G[nt];
    });
  }
  var I = /\/+/g;
  function W(E, G) {
    return typeof E == "object" && E !== null && E.key != null ? lt("" + E.key) : G.toString(36);
  }
  function q(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(j, j) : (E.status = "pending", E.then(
          function(G) {
            E.status === "pending" && (E.status = "fulfilled", E.value = G);
          },
          function(G) {
            E.status === "pending" && (E.status = "rejected", E.reason = G);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function F(E, G, nt, it, vt) {
    var ft = typeof E;
    (ft === "undefined" || ft === "boolean") && (E = null);
    var Tt = !1;
    if (E === null) Tt = !0;
    else
      switch (ft) {
        case "bigint":
        case "string":
        case "number":
          Tt = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case l:
              Tt = !0;
              break;
            case v:
              return Tt = E._init, F(
                Tt(E._payload),
                G,
                nt,
                it,
                vt
              );
          }
      }
    if (Tt)
      return vt = vt(E), Tt = it === "" ? "." + W(E, 0) : it, ot(vt) ? (nt = "", Tt != null && (nt = Tt.replace(I, "$&/") + "/"), F(vt, G, nt, "", function(Et) {
        return Et;
      })) : vt != null && (K(vt) && (vt = P(
        vt,
        nt + (vt.key == null || E && E.key === vt.key ? "" : ("" + vt.key).replace(
          I,
          "$&/"
        ) + "/") + Tt
      )), G.push(vt)), 1;
    Tt = 0;
    var st = it === "" ? "." : it + ":";
    if (ot(E))
      for (var J = 0; J < E.length; J++)
        it = E[J], ft = st + W(it, J), Tt += F(
          it,
          G,
          nt,
          ft,
          vt
        );
    else if (J = T(E), typeof J == "function")
      for (E = J.call(E), J = 0; !(it = E.next()).done; )
        it = it.value, ft = st + W(it, J++), Tt += F(
          it,
          G,
          nt,
          ft,
          vt
        );
    else if (ft === "object") {
      if (typeof E.then == "function")
        return F(
          q(E),
          G,
          nt,
          it,
          vt
        );
      throw G = String(E), Error(
        "Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Tt;
  }
  function tt(E, G, nt) {
    if (E == null) return E;
    var it = [], vt = 0;
    return F(E, it, "", "", function(ft) {
      return G.call(nt, ft, vt++);
    }), it;
  }
  function at(E) {
    if (E._status === -1) {
      var G = E._result, nt = G();
      nt.then(
        function(it) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = it, nt.status === void 0 && (nt.status = "fulfilled", nt.value = it));
        },
        function(it) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = it, nt.status === void 0 && (nt.status = "rejected", nt.reason = it));
        }
      ), E._status === -1 && (E._status = 0, E._result = nt);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var Y = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function yt(E) {
    var G = N.T, nt = {};
    nt.types = G !== null ? G.types : null, N.T = nt;
    try {
      var it = E(), vt = N.S;
      vt !== null && vt(nt, it), typeof it == "object" && it !== null && typeof it.then == "function" && it.then(j, Y);
    } catch (ft) {
      Y(ft);
    } finally {
      G !== null && nt.types !== null && (G.types = nt.types), N.T = G;
    }
  }
  function bt(E) {
    var G = N.T;
    if (G !== null) {
      var nt = G.types;
      nt === null ? G.types = [E] : nt.indexOf(E) === -1 && nt.push(E);
    } else yt(bt.bind(null, E));
  }
  var et = {
    map: tt,
    forEach: function(E, G, nt) {
      tt(
        E,
        function() {
          G.apply(this, arguments);
        },
        nt
      );
    },
    count: function(E) {
      var G = 0;
      return tt(E, function() {
        G++;
      }), G;
    },
    toArray: function(E) {
      return tt(E, function(G) {
        return G;
      }) || [];
    },
    only: function(E) {
      if (!K(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return At.Activity = y, At.Children = et, At.Component = z, At.Fragment = s, At.Profiler = c, At.PureComponent = L, At.StrictMode = o, At.Suspense = p, At.ViewTransition = S, At.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, At.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return N.H.useMemoCache(E);
    }
  }, At.addTransitionType = bt, At.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, At.cacheSignal = function() {
    return null;
  }, At.cloneElement = function(E, G, nt) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var it = x({}, E.props), vt = E.key;
    if (G != null)
      for (ft in G.key !== void 0 && (vt = "" + G.key), G)
        !ut.call(G, ft) || ft === "key" || ft === "__self" || ft === "__source" || ft === "ref" && G.ref === void 0 || (it[ft] = G[ft]);
    var ft = arguments.length - 2;
    if (ft === 1) it.children = nt;
    else if (1 < ft) {
      for (var Tt = Array(ft), st = 0; st < ft; st++)
        Tt[st] = arguments[st + 2];
      it.children = Tt;
    }
    return ct(E.type, vt, it);
  }, At.createContext = function(E) {
    return E = {
      $$typeof: f,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: d,
      _context: E
    }, E;
  }, At.createElement = function(E, G, nt) {
    var it, vt = {}, ft = null;
    if (G != null)
      for (it in G.key !== void 0 && (ft = "" + G.key), G)
        ut.call(G, it) && it !== "key" && it !== "__self" && it !== "__source" && (vt[it] = G[it]);
    var Tt = arguments.length - 2;
    if (Tt === 1) vt.children = nt;
    else if (1 < Tt) {
      for (var st = Array(Tt), J = 0; J < Tt; J++)
        st[J] = arguments[J + 2];
      vt.children = st;
    }
    if (E && E.defaultProps)
      for (it in Tt = E.defaultProps, Tt)
        vt[it] === void 0 && (vt[it] = Tt[it]);
    return ct(E, ft, vt);
  }, At.createRef = function() {
    return { current: null };
  }, At.forwardRef = function(E) {
    return { $$typeof: m, render: E };
  }, At.isValidElement = K, At.lazy = function(E) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: E },
      _init: at
    };
  }, At.memo = function(E, G) {
    return {
      $$typeof: g,
      type: E,
      compare: G === void 0 ? null : G
    };
  }, At.startTransition = yt, At.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, At.use = function(E) {
    return N.H.use(E);
  }, At.useActionState = function(E, G, nt) {
    return N.H.useActionState(E, G, nt);
  }, At.useCallback = function(E, G) {
    return N.H.useCallback(E, G);
  }, At.useContext = function(E) {
    return N.H.useContext(E);
  }, At.useDebugValue = function() {
  }, At.useDeferredValue = function(E, G) {
    return N.H.useDeferredValue(E, G);
  }, At.useEffect = function(E, G) {
    return N.H.useEffect(E, G);
  }, At.useEffectEvent = function(E) {
    return N.H.useEffectEvent(E);
  }, At.useId = function() {
    return N.H.useId();
  }, At.useImperativeHandle = function(E, G, nt) {
    return N.H.useImperativeHandle(E, G, nt);
  }, At.useInsertionEffect = function(E, G) {
    return N.H.useInsertionEffect(E, G);
  }, At.useLayoutEffect = function(E, G) {
    return N.H.useLayoutEffect(E, G);
  }, At.useMemo = function(E, G) {
    return N.H.useMemo(E, G);
  }, At.useOptimistic = function(E, G) {
    return N.H.useOptimistic(E, G);
  }, At.useReducer = function(E, G, nt) {
    return N.H.useReducer(E, G, nt);
  }, At.useRef = function(E) {
    return N.H.useRef(E);
  }, At.useState = function(E) {
    return N.H.useState(E);
  }, At.useSyncExternalStore = function(E, G, nt) {
    return N.H.useSyncExternalStore(
      E,
      G,
      nt
    );
  }, At.useTransition = function() {
    return N.H.useTransition();
  }, At.version = "19.3.0", At;
}
var xv;
function ih() {
  return xv || (xv = 1, Wf.exports = RE()), Wf.exports;
}
var $f = { exports: {} }, Ae = {};
var Ev;
function VE() {
  if (Ev) return Ae;
  Ev = 1;
  var i = ih();
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
      var S = y.as, C = g(S, y.crossOrigin), T = typeof y.integrity == "string" ? y.integrity : void 0, w = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
      S === "style" ? o.d.S(
        v,
        typeof y.precedence == "string" ? y.precedence : void 0,
        {
          crossOrigin: C,
          integrity: T,
          fetchPriority: w
        }
      ) : S === "script" && o.d.X(v, {
        crossOrigin: C,
        integrity: T,
        fetchPriority: w,
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
var Av;
function rb() {
  if (Av) return $f.exports;
  Av = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), $f.exports = VE(), $f.exports;
}
var wv;
function _E() {
  if (wv) return zs;
  wv = 1;
  var i = NE(), l = ih(), s = rb();
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
  function x(t) {
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
  var D = null, z = null;
  function H(t, e, n) {
    return t === n ? !0 : t === e ? (D = t, !0) : !1;
  }
  function L(t, e, n) {
    return t === n ? (z = t, !1) : t === e ? (z !== null && (D = t), !0) : !1;
  }
  function $(t) {
    if (t === null) return null;
    do
      t = t === null ? null : t.return;
    while (t && t.tag !== 5 && t.tag !== 27 && t.tag !== 3);
    return t || null;
  }
  function ot(t, e, n) {
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
  var j = Object.assign, N = /* @__PURE__ */ Symbol.for("react.element"), ut = /* @__PURE__ */ Symbol.for("react.transitional.element"), ct = /* @__PURE__ */ Symbol.for("react.portal"), P = /* @__PURE__ */ Symbol.for("react.fragment"), K = /* @__PURE__ */ Symbol.for("react.strict_mode"), lt = /* @__PURE__ */ Symbol.for("react.profiler"), I = /* @__PURE__ */ Symbol.for("react.consumer"), W = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), F = /* @__PURE__ */ Symbol.for("react.suspense"), tt = /* @__PURE__ */ Symbol.for("react.suspense_list"), at = /* @__PURE__ */ Symbol.for("react.memo"), Y = /* @__PURE__ */ Symbol.for("react.lazy"), yt = /* @__PURE__ */ Symbol.for("react.activity"), bt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), et = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), G = /* @__PURE__ */ Symbol.for("react.recoverable"), nt = Symbol.iterator;
  function it(t) {
    return t === null || typeof t != "object" ? null : (t = nt && t[nt] || t["@@iterator"], typeof t == "function" ? t : null);
  }
  var vt = /* @__PURE__ */ Symbol.for("react.client.reference");
  function ft(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === vt ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case P:
        return "Fragment";
      case lt:
        return "Profiler";
      case K:
        return "StrictMode";
      case F:
        return "Suspense";
      case tt:
        return "SuspenseList";
      case yt:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case ct:
          return "Portal";
        case W:
          return t.displayName || "Context";
        case I:
          return (t._context.displayName || "Context") + ".Consumer";
        case q:
          var e = t.render;
          return t = t.displayName, t || (t = e.displayName || e.name || "", t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"), t;
        case at:
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
  var Tt = Array.isArray, st = l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, J = s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Et = {
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
  function zt(t, e) {
    It++, Mt[It] = t.current, t.current = e;
  }
  var Pt = Xt(null), ke = Xt(null), _e = Xt(null), si = Xt(null);
  function oi(t, e) {
    switch (zt(_e, e), zt(ke, t), zt(Pt, null), e.nodeType) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Cy(t) : 0;
        break;
      default:
        if (t = e.tagName, e = e.namespaceURI)
          e = Cy(e), t = My(e, t);
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
    Ut(Pt), zt(Pt, t);
  }
  function kn() {
    Ut(Pt), Ut(ke), Ut(_e);
  }
  function Ca(t) {
    var e = t.memoizedState;
    e !== null && (pl._currentValue = e.memoizedState, zt(si, t)), e = Pt.current;
    var n = My(e, t.type);
    e !== n && (zt(ke, t), zt(Pt, n));
  }
  function Ma(t) {
    ke.current === t && (Ut(Pt), Ut(ke)), si.current === t && (Ut(si), pl._currentValue = Et);
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
  function ki(t, e) {
    if (!t || wn) return "";
    wn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (e) {
              var Z = function() {
                throw Error();
              };
              if (Object.defineProperty(Z.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Z, []);
                } catch (rt) {
                  var R = rt;
                }
                Reflect.construct(t, [], Z);
              } else {
                try {
                  Z.call();
                } catch (rt) {
                  R = rt;
                }
                Z = !1;
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
                  }), Z = !0, new t();
                } finally {
                  Z && (U !== void 0 ? Object.defineProperty(t.prototype, "props", U) : delete t.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (rt) {
                R = rt;
              }
              (Z = t()) && typeof Z.catch == "function" && Z.catch(function() {
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
        var A = h.split(`
`), _ = b.split(`
`);
        for (r = a = 0; a < A.length && !A[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; r < _.length && !_[r].includes(
          "DetermineComponentFrameRoot"
        ); )
          r++;
        if (a === A.length || r === _.length)
          for (a = A.length - 1, r = _.length - 1; 1 <= a && 0 <= r && A[a] !== _[r]; )
            r--;
        for (; 1 <= a && 0 <= r; a--, r--)
          if (A[a] !== _[r]) {
            if (a !== 1 || r !== 1)
              do
                if (a--, r--, 0 > r || A[a] !== _[r]) {
                  var k = `
` + A[a].replace(" at new ", " at ");
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
  function Ol(t, e) {
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
        return ki(t.type, !1);
      case 11:
        return ki(t.type.render, !1);
      case 1:
        return ki(t.type, !0);
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
        e += Ol(t, n), n = t, t = t.return;
      while (t);
      return e;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var zl = Object.prototype.hasOwnProperty, Nl = i.unstable_scheduleCallback, Rl = i.unstable_cancelCallback, pu = i.unstable_shouldYield, gu = i.unstable_requestPaint, Me = i.unstable_now, yu = i.unstable_getCurrentPriorityLevel, Vl = i.unstable_ImmediatePriority, _l = i.unstable_UserBlockingPriority, qi = i.unstable_NormalPriority, vu = i.unstable_LowPriority, jl = i.unstable_IdlePriority, no = i.log, bu = i.unstable_setDisableYieldValue, Ll = null, Ye = null;
  function ri(t) {
    if (typeof no == "function" && bu(t), Ye && typeof Ye.setStrictMode == "function")
      try {
        Ye.setStrictMode(Ll, t);
      } catch {
      }
  }
  var qe = Math.clz32 ? Math.clz32 : HS, BS = Math.log, US = Math.LN2;
  function HS(t) {
    return t >>>= 0, t === 0 ? 32 : 31 - (BS(t) / US | 0) | 0;
  }
  var io = 256, ao = 262144, lo = 4194304;
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
  function so(t, e, n) {
    var a = t.pendingLanes;
    if (a === 0) return 0;
    var r = 0, u = t.suspendedLanes, h = t.pingedLanes;
    t = t.warmLanes;
    var b = a & 134217727;
    return b !== 0 ? (a = b & ~u, a !== 0 ? r = Xi(a) : (h &= b, h !== 0 ? r = Xi(h) : n || (n = b & ~t, n !== 0 && (r = Xi(n))))) : (b = a & ~u, b !== 0 ? r = Xi(b) : h !== 0 ? r = Xi(h) : n || (n = a & ~t, n !== 0 && (r = Xi(n)))), r === 0 ? 0 : e !== 0 && e !== r && (e & u) === 0 && (u = r & -r, n = e & -e, u >= n || u === 32 && (n & 4194048) !== 0) ? e : r;
  }
  function Bl(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function Wh(t, e) {
    (e & 8) !== 0 && (e |= e & 32);
    var n = t.entangledLanes;
    if (n !== 0)
      for (t = t.entanglements, n &= e; 0 < n; ) {
        var a = 31 - qe(n), r = 1 << a;
        e |= t[a], n &= ~r;
      }
    return e;
  }
  function GS(t, e) {
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
  function $h() {
    var t = lo;
    return lo <<= 1, (lo & 62914560) === 0 && (lo = 4194304), t;
  }
  function Su(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ul(t, e) {
    t.pendingLanes |= e, e !== 268435456 && (t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0);
  }
  function kS(t, e, n, a, r, u) {
    var h = t.pendingLanes;
    t.pendingLanes = n, t.suspendedLanes = 0, t.pingedLanes = 0, t.warmLanes = 0, t.expiredLanes &= n, t.entangledLanes &= n, t.errorRecoveryDisabledLanes &= n, t.shellSuspendCounter = 0;
    var b = t.entanglements, A = t.expirationTimes, _ = t.hiddenUpdates;
    for (n = h & ~n; 0 < n; ) {
      var k = 31 - qe(n), Z = 1 << k;
      b[k] = 0, A[k] = -1;
      var R = _[k];
      if (R !== null)
        for (_[k] = null, k = 0; k < R.length; k++) {
          var U = R[k];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~Z;
    }
    a !== 0 && tm(t, a, 0), u !== 0 && r === 0 && t.tag !== 0 && (t.suspendedLanes |= u & ~(h & ~e));
  }
  function tm(t, e, n) {
    t.pendingLanes |= e, t.suspendedLanes &= ~e;
    var a = 31 - qe(e);
    t.entangledLanes |= e, t.entanglements[a] = t.entanglements[a] | 1073741824 | n & 261930;
  }
  function em(t, e) {
    var n = t.entangledLanes |= e;
    for (t = t.entanglements; n; ) {
      var a = 31 - qe(n), r = 1 << a;
      r & e | t[a] & e && (t[a] |= e), n &= ~r;
    }
  }
  function nm(t, e) {
    var n = e & -e;
    return n = (n & 42) !== 0 ? 1 : Tu(n), (n & (t.suspendedLanes | e)) !== 0 ? 0 : n;
  }
  function Tu(t) {
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
  function xu(t) {
    return t &= -t, 2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function im() {
    var t = J.p;
    return t !== 0 ? t : (t = window.event, t === void 0 ? 32 : cv(t.type));
  }
  function am(t, e) {
    var n = J.p;
    try {
      return J.p = t, e();
    } finally {
      J.p = n;
    }
  }
  var Yn = Math.random().toString(36).slice(2), ve = "__reactFiber$" + Yn, je = "__reactProps$" + Yn, Oa = "__reactContainer$" + Yn, lm = "__reactEvents$" + Yn, YS = "__reactListeners$" + Yn, qS = "__reactHandles$" + Yn, sm = "__reactResources$" + Yn, Hl = "__reactMarker$" + Yn, oo = "__reactLoad$" + Yn;
  function ro(t) {
    delete t[ve], delete t[je], delete t[YS], delete t[qS];
  }
  function Qi(t) {
    var e;
    if (e = t[ve]) return e;
    for (var n = t.parentNode; n; ) {
      if (e = n[Oa] || n[ve]) {
        if (n = e.alternate, e.child !== null || n !== null && n.child !== null)
          for (t = Xy(t); t !== null; ) {
            if (n = t[ve]) return n;
            t = Xy(t);
          }
        return e;
      }
      t = n, n = t.parentNode;
    }
    return null;
  }
  function za(t) {
    if (t = t[ve] || t[Oa]) {
      var e = t.tag;
      if (e === 5 || e === 6 || e === 13 || e === 31 || e === 26 || e === 27 || e === 3)
        return t;
    }
    return null;
  }
  function Gl(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(o(33));
  }
  function Na(t) {
    var e = t[sm];
    return e || (e = t[sm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), e;
  }
  function me(t) {
    t[Hl] = !0;
  }
  function om(t) {
    t[oo] = void 0;
  }
  var rm = /* @__PURE__ */ new Set(), um = {};
  function Zi(t, e) {
    Ra(t, e), Ra(t + "Capture", e);
  }
  function Ra(t, e) {
    for (um[t] = e, t = 0; t < e.length; t++)
      rm.add(e[t]);
  }
  var XS = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), cm = {}, fm = {};
  function QS(t) {
    return zl.call(fm, t) ? !0 : zl.call(cm, t) ? !1 : XS.test(t) ? fm[t] = !0 : (cm[t] = !0, !1);
  }
  var Lt = !1;
  function dm() {
    var t = Lt;
    return Lt = !1, t;
  }
  function uo(t, e, n) {
    if (QS(e))
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
  function hm(t) {
    var e = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (e === "checkbox" || e === "radio");
  }
  function ZS(t, e, n) {
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
  function Eu(t) {
    if (!t._valueTracker) {
      var e = hm(t) ? "checked" : "value";
      t._valueTracker = ZS(
        t,
        e,
        "" + t[e]
      );
    }
  }
  function mm(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(), a = "";
    return t && (a = hm(t) ? t.checked ? "true" : "false" : t.value), t = a, t !== n ? (e.setValue(t), !0) : !1;
  }
  var KS = /[\n"\\]/g;
  function nn(t) {
    return t.replace(
      KS,
      function(e) {
        return "\\" + e.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Au(t, e, n, a, r, u, h, b) {
    t.name = "", h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? t.type = h : t.removeAttribute("type"), e != null ? h === "number" ? (e === 0 && t.value === "" || t.value != e) && (t.value = "" + Xe(e)) : t.value !== "" + Xe(e) && (t.value = "" + Xe(e)) : h !== "submit" && h !== "reset" || t.removeAttribute("value"), e != null ? h === "number" && t.value == e ? wu(t, Xe(t.value)) : wu(t, Xe(e)) : n != null ? wu(t, Xe(n)) : a != null && t.removeAttribute("value"), r == null && u != null && (t.defaultChecked = !!u), r != null && (t.checked = r && typeof r != "function" && typeof r != "symbol"), b != null && typeof b != "function" && typeof b != "symbol" && typeof b != "boolean" ? t.name = "" + Xe(b) : t.removeAttribute("name");
  }
  function pm(t, e, n, a, r, u, h, b) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (t.type = u), e != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || e != null)) {
        Eu(t);
        return;
      }
      n = n != null ? "" + Xe(n) : "", e = e != null ? "" + Xe(e) : n, b || e === t.value || (t.value = e), t.defaultValue = e;
    }
    a = a ?? r, a = typeof a != "function" && typeof a != "symbol" && !!a, t.checked = b ? t.checked : !!a, t.defaultChecked = !!a, h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" && (t.name = h), Eu(t);
  }
  function wu(t, e) {
    t.defaultValue !== "" + e && (t.defaultValue = "" + e);
  }
  function Va(t, e, n, a) {
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
  function gm(t, e, n) {
    if (e != null && (e = "" + Xe(e), e !== t.value && (t.value = e), n == null)) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Xe(n) : "";
  }
  function ym(t, e, n, a) {
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
    n = Xe(e), t.defaultValue = n, a = t.textContent, a === n && a !== "" && a !== null && (t.value = a), Eu(t);
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
  var PS = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function vm(t, e, n) {
    var a = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? t.setProperty(e, "") : e === "float" ? t.cssFloat = "" : t[e] = "" : a ? t.setProperty(e, n) : typeof n != "number" || n === 0 || PS.has(e) ? e === "float" ? t.cssFloat = n : t[e] = ("" + n).trim() : t[e] = n + "px";
  }
  function bm(t, e, n) {
    if (e != null && typeof e != "object")
      throw Error(o(62));
    if (t = t.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || e != null && e.hasOwnProperty(a) || (a.indexOf("--") === 0 ? t.setProperty(a, "") : a === "float" ? t.cssFloat = "" : t[a] = "", Lt = !0);
      for (var r in e)
        a = e[r], e.hasOwnProperty(r) && n[r] !== a && (vm(t, r, a), Lt = !0);
    } else
      for (var u in e)
        e.hasOwnProperty(u) && vm(t, u, e[u]);
  }
  function Cu(t) {
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
  var FS = /* @__PURE__ */ new Map([
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
  ]), JS = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function fo(t) {
    return JS.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t;
  }
  function Cn() {
  }
  var Mu = null;
  function Du(t) {
    return t = t.target || t.srcElement || window, t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t;
  }
  var ja = null, La = null;
  function Sm(t) {
    var e = za(t);
    if (e && (t = e.stateNode)) {
      var n = t[je] || null;
      t: switch (t = e.stateNode, e.type) {
        case "input":
          if (Au(
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
                Au(
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
              a = n[e], a.form === t.form && mm(a);
          }
          break t;
        case "textarea":
          gm(t, n.value, n.defaultValue);
          break t;
        case "select":
          e = n.value, e != null && Va(t, !!n.multiple, e, !1);
      }
    }
  }
  var Ou = !1;
  function Tm(t, e, n) {
    if (Ou) return t(e, n);
    Ou = !0;
    try {
      var a = t(e);
      return a;
    } finally {
      if (Ou = !1, (ja !== null || La !== null) && (dr(), ja && (e = ja, t = La, La = ja = null, Sm(e), t)))
        for (e = 0; e < t.length; e++) Sm(t[e]);
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
  var Xn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), zu = !1;
  if (Xn)
    try {
      var Yl = {};
      Object.defineProperty(Yl, "passive", {
        get: function() {
          zu = !0;
        }
      }), window.addEventListener("test", Yl, Yl), window.removeEventListener("test", Yl, Yl);
    } catch {
      zu = !1;
    }
  var ui = null, Nu = null, ho = null;
  function xm() {
    if (ho) return ho;
    var t, e = Nu, n = e.length, a, r = "value" in ui ? ui.value : ui.textContent, u = r.length;
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
  function Em() {
    return !1;
  }
  function Oe(t) {
    function e(n, a, r, u, h) {
      this._reactName = n, this._targetInst = r, this.type = a, this.nativeEvent = u, this.target = h, this.currentTarget = null;
      for (var b in t)
        t.hasOwnProperty(b) && (n = t[b], this[b] = n ? n(u) : u[b]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? po : Em, this.isPropagationStopped = Em, this;
    }
    return j(e.prototype, {
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
  var ci = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, go = Oe(ci), ql = j({}, ci, { view: 0, detail: 0 }), IS = Oe(ql), Ru, Vu, Xl, yo = j({}, ql, {
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
    getModifierState: ju,
    button: 0,
    buttons: 0,
    relatedTarget: function(t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget;
    },
    movementX: function(t) {
      return "movementX" in t ? t.movementX : (t !== Xl && (Xl && t.type === "mousemove" ? (Ru = t.screenX - Xl.screenX, Vu = t.screenY - Xl.screenY) : Vu = Ru = 0, Xl = t), Ru);
    },
    movementY: function(t) {
      return "movementY" in t ? t.movementY : Vu;
    }
  }), Am = Oe(yo), WS = j({}, yo, { dataTransfer: 0 }), $S = Oe(WS), tT = j({}, ql, { relatedTarget: 0 }), _u = Oe(tT), eT = j({}, ci, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nT = Oe(eT), iT = j({}, ci, {
    clipboardData: function(t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    }
  }), aT = Oe(iT), lT = j({}, ci, { data: 0 }), wm = Oe(lT), sT = {
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
  }, oT = {
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
  }, rT = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function uT(t) {
    var e = this.nativeEvent;
    return e.getModifierState ? e.getModifierState(t) : (t = rT[t]) ? !!e[t] : !1;
  }
  function ju() {
    return uT;
  }
  var cT = j({}, ql, {
    key: function(t) {
      if (t.key) {
        var e = sT[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress" ? (t = mo(t), t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? oT[t.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ju,
    charCode: function(t) {
      return t.type === "keypress" ? mo(t) : 0;
    },
    keyCode: function(t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function(t) {
      return t.type === "keypress" ? mo(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    }
  }), fT = Oe(cT), dT = j({}, yo, {
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
  }), Cm = Oe(dT), hT = j({}, ci, { submitter: 0 }), mT = Oe(hT), pT = j({}, ql, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ju
  }), gT = Oe(pT), yT = j({}, ci, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), vT = Oe(yT), bT = j({}, yo, {
    deltaX: function(t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function(t) {
      return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ST = Oe(bT), TT = j({}, ci, {
    newState: 0,
    oldState: 0,
    source: 0
  }), xT = Oe(TT), ET = [9, 13, 27, 32], Lu = Xn && "CompositionEvent" in window, Ql = null;
  Xn && "documentMode" in document && (Ql = document.documentMode);
  var AT = Xn && "TextEvent" in window && !Ql, Mm = Xn && (!Lu || Ql && 8 < Ql && 11 >= Ql), Dm = " ", Om = !1;
  function zm(t, e) {
    switch (t) {
      case "keyup":
        return ET.indexOf(e.keyCode) !== -1;
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
  function Nm(t) {
    return t = t.detail, typeof t == "object" && "data" in t ? t.data : null;
  }
  var Ba = !1;
  function wT(t, e) {
    switch (t) {
      case "compositionend":
        return Nm(e);
      case "keypress":
        return e.which !== 32 ? null : (Om = !0, Dm);
      case "textInput":
        return t = e.data, t === Dm && Om ? null : t;
      default:
        return null;
    }
  }
  function CT(t, e) {
    if (Ba)
      return t === "compositionend" || !Lu && zm(t, e) ? (t = xm(), ho = Nu = ui = null, Ba = !1, t) : null;
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
        return Mm && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var MT = {
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
  function Rm(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!MT[t.type] : e === "textarea";
  }
  function Vm(t, e, n, a) {
    ja ? La ? La.push(a) : La = [a] : ja = a, e = vr(e, "onChange"), 0 < e.length && (n = new go(
      "onChange",
      "change",
      null,
      n,
      a
    ), t.push({ event: n, listeners: e }));
  }
  var Zl = null, Kl = null;
  function DT(t) {
    Sy(t, 0);
  }
  function vo(t) {
    var e = Gl(t);
    if (mm(e)) return t;
  }
  function _m(t, e) {
    if (t === "change") return e;
  }
  var jm = !1;
  if (Xn) {
    var Bu;
    if (Xn) {
      var Uu = "oninput" in document;
      if (!Uu) {
        var Lm = document.createElement("div");
        Lm.setAttribute("oninput", "return;"), Uu = typeof Lm.oninput == "function";
      }
      Bu = Uu;
    } else Bu = !1;
    jm = Bu && (!document.documentMode || 9 < document.documentMode);
  }
  function Bm() {
    Zl && (Zl.detachEvent("onpropertychange", Um), Kl = Zl = null);
  }
  function Um(t) {
    if (t.propertyName === "value" && vo(Kl)) {
      var e = [];
      Vm(
        e,
        Kl,
        t,
        Du(t)
      ), Tm(DT, e);
    }
  }
  function OT(t, e, n) {
    t === "focusin" ? (Bm(), Zl = e, Kl = n, Zl.attachEvent("onpropertychange", Um)) : t === "focusout" && Bm();
  }
  function zT(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return vo(Kl);
  }
  function NT(t, e) {
    if (t === "click") return vo(e);
  }
  function RT(t, e) {
    if (t === "input" || t === "change")
      return vo(e);
  }
  function VT(t, e) {
    return t === e && (t !== 0 || 1 / t === 1 / e) || t !== t && e !== e;
  }
  var Qe = typeof Object.is == "function" ? Object.is : VT;
  function Pl(t, e) {
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
  function Hu(t) {
    if (t = t || (typeof document < "u" ? document : void 0), typeof t > "u") return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  function Hm(t) {
    for (; t && t.firstChild; ) t = t.firstChild;
    return t;
  }
  function Gm(t, e) {
    var n = Hm(t);
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
      n = Hm(n);
    }
  }
  function km(t, e) {
    return t && e ? t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? km(t, e.parentNode) : "contains" in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1 : !1;
  }
  function Ym(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var e = Hu(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Hu(t.document);
    }
    return e;
  }
  function Gu(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e && (e === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || e === "textarea" || t.contentEditable === "true");
  }
  var _T = Xn && "documentMode" in document && 11 >= document.documentMode, Ua = null, ku = null, Fl = null, Yu = !1;
  function qm(t, e, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Yu || Ua == null || Ua !== Hu(a) || (a = Ua, "selectionStart" in a && Gu(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Fl && Pl(Fl, a) || (Fl = a, a = vr(ku, "onSelect"), 0 < a.length && (e = new go(
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
  }, qu = {}, Xm = {};
  Xn && (Xm = document.createElement("div").style, "AnimationEvent" in window || (delete Ha.animationend.animation, delete Ha.animationiteration.animation, delete Ha.animationstart.animation), "TransitionEvent" in window || delete Ha.transitionend.transition);
  function Pi(t) {
    if (qu[t]) return qu[t];
    if (!Ha[t]) return t;
    var e = Ha[t], n;
    for (n in e)
      if (e.hasOwnProperty(n) && n in Xm)
        return qu[t] = e[n];
    return t;
  }
  var Qm = Pi("animationend"), Zm = Pi("animationiteration"), Km = Pi("animationstart"), jT = Pi("transitionrun"), LT = Pi("transitionstart"), BT = Pi("transitioncancel"), Pm = Pi("transitionend"), Fm = /* @__PURE__ */ new Map(), Xu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  Xu.push("scrollEnd");
  function hn(t, e) {
    Fm.set(t, e), Zi(e, [t]);
  }
  var UT = 0;
  function Qn(t, e) {
    if (t.name != null && t.name !== "auto") return t.name;
    if (e.autoName !== null) return e.autoName;
    t = yn.identifierPrefix;
    var n = UT++;
    return t = "_" + t + "t_" + n.toString(32) + "_", e.autoName = t;
  }
  function Jm(t) {
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
    return t = Jm(t), e = Jm(e), e == null ? t === "auto" ? null : t : e === "auto" ? null : e;
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
  }, an = [], Ga = 0, Qu = 0;
  function So() {
    for (var t = Ga, e = Qu = Ga = 0; e < t; ) {
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
      u !== 0 && Im(n, r, u);
    }
  }
  function To(t, e, n, a) {
    an[Ga++] = t, an[Ga++] = e, an[Ga++] = n, an[Ga++] = a, Qu |= a, t.lanes |= a, t = t.alternate, t !== null && (t.lanes |= a);
  }
  function Zu(t, e, n, a) {
    return To(t, e, n, a), xo(t);
  }
  function Fi(t, e) {
    return To(t, null, null, e), xo(t);
  }
  function Im(t, e, n) {
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
  var ka = {};
  function HT(t, e, n, a) {
    this.tag = t, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = e, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Le(t, e, n, a) {
    return new HT(t, e, n, a);
  }
  function Ku(t) {
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
  function Wm(t, e) {
    t.flags &= 1206910978;
    var n = t.alternate;
    return n === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = n.childLanes, t.lanes = n.lanes, t.child = n.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = n.memoizedProps, t.memoizedState = n.memoizedState, t.updateQueue = n.updateQueue, t.type = n.type, e = n.dependencies, t.dependencies = e === null ? null : {
      lanes: e.lanes,
      firstContext: e.firstContext
    }), t;
  }
  function Eo(t, e, n, a, r, u) {
    var h = 0;
    if (a = t, typeof a == "function") Ku(a) && (h = 1);
    else if (typeof a == "string")
      h = hE(
        t,
        n,
        Pt.current
      ) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (a) {
        case yt:
          return t = Le(31, n, e, r), t.elementType = yt, t.lanes = u, t;
        case P:
          return Ji(n.children, r, u, e);
        case K:
          h = 8, r |= 24;
          break;
        case lt:
          return t = Le(12, n, e, r | 2), t.elementType = lt, t.lanes = u, t;
        case F:
          return t = Le(13, n, e, r), t.elementType = F, t.lanes = u, t;
        case tt:
          return t = Le(19, n, e, r), t.elementType = tt, t.lanes = u, t;
        case bt:
        case E:
          return t = r | 32, t = Le(30, n, e, t), t.elementType = E, t.lanes = u, t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, t;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case W:
                h = 10;
                break t;
              case I:
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
            o(130, t === null ? "null" : typeof t, "")
          ), a = null;
      }
    return e = Le(h, n, e, r), e.elementType = t, e.type = a, e.lanes = u, e;
  }
  function Ji(t, e, n, a) {
    return t = Le(7, t, a, e), t.lanes = n, t;
  }
  function Pu(t, e, n) {
    return t = Le(6, t, null, e), t.lanes = n, t;
  }
  function $m(t) {
    var e = Le(18, null, null, 0);
    return e.stateNode = t, e;
  }
  function Fu(t, e, n) {
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
  var tp = /* @__PURE__ */ new WeakMap();
  function ln(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = tp.get(t);
      return n !== void 0 ? n : (e = {
        value: t,
        source: e,
        stack: Yi(e)
      }, tp.set(t, e), e);
    }
    return {
      value: t,
      source: e,
      stack: Yi(e)
    };
  }
  var Ya = [], qa = 0, Ao = null, Jl = 0, sn = [], on = 0, fi = null, Mn = 1, Dn = "";
  function Pn(t, e) {
    Ya[qa++] = Jl, Ya[qa++] = Ao, Ao = t, Jl = e;
  }
  function ep(t, e, n) {
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
  function wo(t) {
    t.return !== null && (Pn(t, 1), ep(t, 1, 0));
  }
  function Ju(t) {
    for (; t === Ao; )
      Ao = Ya[--qa], Ya[qa] = null, Jl = Ya[--qa], Ya[qa] = null;
    for (; t === fi; )
      fi = sn[--on], sn[on] = null, Dn = sn[--on], sn[on] = null, Mn = sn[--on], sn[on] = null;
  }
  function np(t, e) {
    sn[on++] = Mn, sn[on++] = Dn, sn[on++] = fi, Mn = e.id, Dn = e.overflow, fi = t;
  }
  var pe = null, Ft = null, Dt = !1, di = null, rn = !1, Iu = Error(o(519));
  function hi(t) {
    var e = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Il(ln(e, t)), Iu;
  }
  function ip(t) {
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
        for (n = 0; n < bs.length; n++)
          Rt(bs[n], e);
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
        Rt("invalid", e), pm(
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
        Rt("invalid", e), ym(e, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || e.textContent === "" + n || a.suppressHydrationWarning === !0 || Ay(e.textContent, n) ? (a.popover != null && (Rt("beforetoggle", e), Rt("toggle", e)), a.onScroll != null && Rt("scroll", e), a.onScrollEnd != null && Rt("scrollend", e), a.onClick != null && (e.onclick = Cn), e = !0) : e = !1, e || hi(t, !0);
  }
  function Co(t) {
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
    if (!Dt) return Co(t), Dt = !0, !1;
    var e = t.tag, n;
    if ((n = e !== 3 && e !== 27) && ((n = e === 5) && (n = t.type, n = !(n !== "form" && n !== "button") || Df(t.type, t.memoizedProps)), n = !n), n && Ft && hi(t), Co(t), e === 13) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Ft = qy(t);
    } else if (e === 31) {
      if (t = t.memoizedState, t = t !== null ? t.dehydrated : null, !t) throw Error(o(317));
      Ft = qy(t);
    } else
      e === 27 ? (e = Ft, Oi(t.type) ? (t = Bf, Bf = null, Ft = t) : Ft = e) : Ft = pe ? cn(t.stateNode.nextSibling) : null;
    return !0;
  }
  function Ii() {
    Ft = pe = null, Dt = !1;
  }
  function Wu() {
    var t = di;
    return t !== null && (He === null ? He = t : He.push.apply(
      He,
      t
    ), di = null), t;
  }
  function Il(t) {
    di === null ? di = [t] : di.push(t);
  }
  var $u = Xt(null), Wi = null, Fn = null;
  function mi(t, e, n) {
    zt($u, e._currentValue), e._currentValue = n;
  }
  function Jn(t) {
    t._currentValue = $u.current, Ut($u);
  }
  function Mo(t, e, n) {
    for (; t !== null; ) {
      var a = t.alternate;
      if ((t.childLanes & e) !== e ? (t.childLanes |= e, a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === n) break;
      t = t.return;
    }
  }
  function tc(t, e, n, a) {
    var r = t.child;
    for (r !== null && (r.return = t); r !== null; ) {
      var u = r.dependencies;
      if (u !== null) {
        var h = r.child;
        u = u.firstContext;
        t: for (; u !== null; ) {
          var b = u;
          u = r;
          for (var A = 0; A < e.length; A++)
            if (b.context === e[A]) {
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
    return t !== null && tc(
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
  function ta(t) {
    Wi = t, Fn = null, t = t.dependencies, t !== null && (t.firstContext = null);
  }
  function be(t) {
    return ap(Wi, t);
  }
  function Oo(t, e) {
    return Wi === null && ta(t), ap(t, e);
  }
  function ap(t, e) {
    var n = e._currentValue;
    if (e = { context: e, memoizedValue: n, next: null }, Fn === null) {
      if (t === null) throw Error(o(308));
      Fn = e, t.dependencies = { lanes: 0, firstContext: e }, t.flags |= 524288;
    } else Fn = Fn.next = e;
    return n;
  }
  var GT = typeof AbortController < "u" ? AbortController : function() {
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
  }, kT = i.unstable_scheduleCallback, YT = i.unstable_NormalPriority, le = {
    $$typeof: W,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ec() {
    return {
      controller: new GT(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Wl(t) {
    t.refCount--, t.refCount === 0 && kT(YT, function() {
      t.controller.abort();
    });
  }
  function lp(t, e) {
    if ((t.pendingLanes & 4194048) !== 0) {
      var n = t.transitionTypes;
      for (n === null && (n = t.transitionTypes = []), t = 0; t < e.length; t++) {
        var a = e[t];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var $l = null;
  function qT(t) {
    var e = t.transitionTypes;
    return t.transitionTypes = null, e;
  }
  var ts = null, nc = 0, ea = 0, Qa = null;
  function XT(t, e) {
    if (ts === null) {
      var n = ts = [];
      nc = 0, ea = bf(), Qa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return nc++, e.then(sp, sp), e;
  }
  function sp() {
    if (--nc === 0 && ($l = null, ts !== null)) {
      Qa !== null && (Qa.status = "fulfilled");
      var t = ts;
      ts = null, ea = 0, Qa = null;
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function QT(t, e) {
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
  var op = st.S;
  st.S = function(t, e) {
    if ($g = Me(), typeof e == "object" && e !== null && typeof e.then == "function" && XT(t, e), $l !== null)
      for (var n = ul; n !== null; )
        lp(n, $l), n = n.next;
    if (n = t.types, n !== null) {
      for (var a = ul; a !== null; )
        lp(a, n), a = a.next;
      if (ea !== 0) {
        a = $l, a === null && (a = $l = []);
        for (var r = 0; r < n.length; r++) {
          var u = n[r];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    op !== null && op(t, e);
  };
  var na = Xt(null);
  function ic() {
    var t = na.current;
    return t !== null ? t : Kt.pooledCache;
  }
  function zo(t, e) {
    e === null ? zt(na, na.current) : zt(na, e.pool);
  }
  function rp() {
    var t = ic();
    return t === null ? null : { parent: le._currentValue, pool: t };
  }
  var Za = Error(o(460)), ac = Error(o(474)), No = Error(o(542)), Ro = { then: function() {
  } };
  function up(t) {
    return t = t.status, t === "fulfilled" || t === "rejected";
  }
  function cp(t, e, n) {
    switch (n = t[n], n === void 0 ? t.push(e) : n !== e && (e.then(Cn, Cn), e = n), e.status) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw t = e.reason, dp(t), t === void 0 && !("reason" in e) ? Error(o(600)) : t;
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
            throw t = e.reason, dp(t), t;
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
  function fp() {
    if (aa === null) throw Error(o(459));
    var t = aa;
    return aa = null, t;
  }
  function dp(t) {
    if (t === Za || t === No)
      throw Error(o(483));
  }
  var Ka = null, es = 0;
  function Vo(t) {
    var e = es;
    return es += 1, Ka === null && (Ka = []), cp(Ka, t, e);
  }
  function pi(t, e) {
    e = e.props.ref, t.ref = e !== void 0 ? e : null;
  }
  function _o(t, e) {
    throw e.$$typeof === N ? Error(o(525)) : (t = Object.prototype.toString.call(e), Error(
      o(
        31,
        t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t
      )
    ));
  }
  function hp(t) {
    function e(V, M) {
      if (t) {
        var B = V.deletions;
        B === null ? (V.deletions = [M], V.flags |= 16) : B.push(M);
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
    function u(V, M, B) {
      return V.index = B, t ? (B = V.alternate, B !== null ? (B = B.index, B < M ? (V.flags |= 2, M) : B) : (V.flags |= 134217730, M)) : (V.flags |= 1048576, M);
    }
    function h(V) {
      return t && V.alternate === null && (V.flags |= 134217730), V;
    }
    function b(V, M, B, Q) {
      return M === null || M.tag !== 6 ? (M = Pu(B, V.mode, Q), M.return = V, M) : (M = r(M, B), M.return = V, M);
    }
    function A(V, M, B, Q) {
      var dt = B.type;
      return dt === P ? (V = k(
        V,
        M,
        B.props.children,
        Q,
        B.key
      ), pi(V, B), V) : M !== null && (M.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Y && ia(dt) === M.type) ? (M = r(M, B.props), pi(M, B), M.return = V, M) : (M = Eo(
        B.type,
        B.key,
        B.props,
        null,
        V.mode,
        Q
      ), pi(M, B), M.return = V, M);
    }
    function _(V, M, B, Q) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== B.containerInfo || M.stateNode.implementation !== B.implementation ? (M = Fu(B, V.mode, Q), M.return = V, M) : (M = r(M, B.children || []), M.return = V, M);
    }
    function k(V, M, B, Q, dt) {
      return M === null || M.tag !== 7 ? (M = Ji(
        B,
        V.mode,
        Q,
        dt
      ), M.return = V, M) : (M = r(M, B), M.return = V, M);
    }
    function Z(V, M, B) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = Pu(
          "" + M,
          V.mode,
          B
        ), M.return = V, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case ut:
            return B = Eo(
              M.type,
              M.key,
              M.props,
              null,
              V.mode,
              B
            ), pi(B, M), B.return = V, B;
          case ct:
            return M = Fu(
              M,
              V.mode,
              B
            ), M.return = V, M;
          case Y:
            return M = ia(M), Z(V, M, B);
        }
        if (Tt(M) || it(M))
          return M = Ji(
            M,
            V.mode,
            B,
            null
          ), M.return = V, M;
        if (typeof M.then == "function")
          return Z(V, Vo(M), B);
        if (M.$$typeof === W)
          return Z(
            V,
            Oo(V, M),
            B
          );
        _o(V, M);
      }
      return null;
    }
    function R(V, M, B, Q) {
      var dt = M !== null ? M.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return dt !== null ? null : b(V, M, "" + B, Q);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ut:
            return B.key === dt ? A(V, M, B, Q) : null;
          case ct:
            return B.key === dt ? _(V, M, B, Q) : null;
          case Y:
            return B = ia(B), R(V, M, B, Q);
        }
        if (Tt(B) || it(B))
          return dt !== null ? null : k(V, M, B, Q, null);
        if (typeof B.then == "function")
          return R(
            V,
            M,
            Vo(B),
            Q
          );
        if (B.$$typeof === W)
          return R(
            V,
            M,
            Oo(V, B),
            Q
          );
        _o(V, B);
      }
      return null;
    }
    function U(V, M, B, Q, dt) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return V = V.get(B) || null, b(M, V, "" + Q, dt);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case ut:
            return V = V.get(
              Q.key === null ? B : Q.key
            ) || null, A(M, V, Q, dt);
          case ct:
            return V = V.get(
              Q.key === null ? B : Q.key
            ) || null, _(M, V, Q, dt);
          case Y:
            return Q = ia(Q), U(
              V,
              M,
              B,
              Q,
              dt
            );
        }
        if (Tt(Q) || it(Q))
          return V = V.get(B) || null, k(M, V, Q, dt, null);
        if (typeof Q.then == "function")
          return U(
            V,
            M,
            B,
            Vo(Q),
            dt
          );
        if (Q.$$typeof === W)
          return U(
            V,
            M,
            B,
            Oo(M, Q),
            dt
          );
        _o(M, Q);
      }
      return null;
    }
    function rt(V, M, B, Q) {
      for (var dt = null, _t = null, St = M, xt = M = 0, re = null; St !== null && xt < B.length; xt++) {
        St.index > xt ? (re = St, St = null) : re = St.sibling;
        var jt = R(
          V,
          St,
          B[xt],
          Q
        );
        if (jt === null) {
          St === null && (St = re);
          break;
        }
        t && St && jt.alternate === null && e(V, St), M = u(jt, M, xt), _t === null ? dt = jt : _t.sibling = jt, _t = jt, St = re;
      }
      if (xt === B.length)
        return n(V, St), Dt && Pn(V, xt), dt;
      if (St === null) {
        for (; xt < B.length; xt++)
          St = Z(V, B[xt], Q), St !== null && (M = u(
            St,
            M,
            xt
          ), _t === null ? dt = St : _t.sibling = St, _t = St);
        return Dt && Pn(V, xt), dt;
      }
      for (St = a(St); xt < B.length; xt++)
        re = U(
          St,
          V,
          xt,
          B[xt],
          Q
        ), re !== null && (t && (jt = re.alternate, jt !== null && St.delete(jt.key === null ? xt : jt.key)), M = u(
          re,
          M,
          xt
        ), _t === null ? dt = re : _t.sibling = re, _t = re);
      return t && St.forEach(function(_i) {
        return e(V, _i);
      }), Dt && Pn(V, xt), dt;
    }
    function pt(V, M, B, Q) {
      if (B == null) throw Error(o(151));
      for (var dt = null, _t = null, St = M, xt = M = 0, re = null, jt = B.next(); St !== null && !jt.done; xt++, jt = B.next()) {
        St.index > xt ? (re = St, St = null) : re = St.sibling;
        var _i = R(V, St, jt.value, Q);
        if (_i === null) {
          St === null && (St = re);
          break;
        }
        t && St && _i.alternate === null && e(V, St), M = u(_i, M, xt), _t === null ? dt = _i : _t.sibling = _i, _t = _i, St = re;
      }
      if (jt.done)
        return n(V, St), Dt && Pn(V, xt), dt;
      if (St === null) {
        for (; !jt.done; xt++, jt = B.next())
          jt = Z(V, jt.value, Q), jt !== null && (M = u(jt, M, xt), _t === null ? dt = jt : _t.sibling = jt, _t = jt);
        return Dt && Pn(V, xt), dt;
      }
      for (St = a(St); !jt.done; xt++, jt = B.next())
        jt = U(St, V, xt, jt.value, Q), jt !== null && (t && (re = jt.alternate, re !== null && St.delete(
          re.key === null ? xt : re.key
        )), M = u(jt, M, xt), _t === null ? dt = jt : _t.sibling = jt, _t = jt);
      return t && St.forEach(function(wE) {
        return e(V, wE);
      }), Dt && Pn(V, xt), dt;
    }
    function Ct(V, M, B, Q) {
      if (typeof B == "object" && B !== null && B.type === P && B.key === null && B.props.ref === void 0 && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ut:
            t: {
              for (var dt = B.key; M !== null; ) {
                if (M.key === dt) {
                  if (dt = B.type, dt === P) {
                    if (M.tag === 7) {
                      n(
                        V,
                        M.sibling
                      ), Q = r(
                        M,
                        B.props.children
                      ), pi(Q, B), Q.return = V, V = Q;
                      break t;
                    }
                  } else if (M.elementType === dt || typeof dt == "object" && dt !== null && dt.$$typeof === Y && ia(dt) === M.type) {
                    n(
                      V,
                      M.sibling
                    ), Q = r(M, B.props), pi(Q, B), Q.return = V, V = Q;
                    break t;
                  }
                  n(V, M);
                  break;
                } else e(V, M);
                M = M.sibling;
              }
              B.type === P ? (Q = Ji(
                B.props.children,
                V.mode,
                Q,
                B.key
              ), pi(Q, B), Q.return = V, V = Q) : (Q = Eo(
                B.type,
                B.key,
                B.props,
                null,
                V.mode,
                Q
              ), pi(Q, B), Q.return = V, V = Q);
            }
            return h(V);
          case ct:
            t: {
              for (dt = B.key; M !== null; ) {
                if (M.key === dt)
                  if (M.tag === 4 && M.stateNode.containerInfo === B.containerInfo && M.stateNode.implementation === B.implementation) {
                    n(
                      V,
                      M.sibling
                    ), Q = r(M, B.children || []), Q.return = V, V = Q;
                    break t;
                  } else {
                    n(V, M);
                    break;
                  }
                else e(V, M);
                M = M.sibling;
              }
              Q = Fu(B, V.mode, Q), Q.return = V, V = Q;
            }
            return h(V);
          case Y:
            return B = ia(B), Ct(
              V,
              M,
              B,
              Q
            );
        }
        if (Tt(B))
          return rt(
            V,
            M,
            B,
            Q
          );
        if (it(B)) {
          if (dt = it(B), typeof dt != "function") throw Error(o(150));
          return B = dt.call(B), pt(
            V,
            M,
            B,
            Q
          );
        }
        if (typeof B.then == "function")
          return Ct(
            V,
            M,
            Vo(B),
            Q
          );
        if (B.$$typeof === W)
          return Ct(
            V,
            M,
            Oo(V, B),
            Q
          );
        _o(V, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, M !== null && M.tag === 6 ? (n(V, M.sibling), Q = r(M, B), Q.return = V, V = Q) : (n(V, M), Q = Pu(B, V.mode, Q), Q.return = V, V = Q), h(V)) : n(V, M);
    }
    return function(V, M, B, Q) {
      try {
        es = 0;
        var dt = Ct(
          V,
          M,
          B,
          Q
        );
        return Ka = null, dt;
      } catch (St) {
        if (St === Za || St === No) throw St;
        var _t = Le(29, St, null, V.mode);
        return _t.lanes = Q, _t.return = V, _t;
      }
    };
  }
  var la = hp(!0), mp = hp(!1), gi = !1;
  function lc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function sc(t, e) {
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
      return r === null ? e.next = e : (e.next = r.next, r.next = e), a.pending = e, e = xo(t), Im(t, null, n), e;
    }
    return To(t, a, e, n), xo(t);
  }
  function ns(t, e, n) {
    if (e = e.updateQueue, e !== null && (e = e.shared, (n & 4194048) !== 0)) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, em(t, n);
    }
  }
  function oc(t, e) {
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
  var rc = !1;
  function is() {
    if (rc) {
      var t = Qa;
      if (t !== null) throw t;
    }
  }
  function as(t, e, n, a) {
    rc = !1;
    var r = t.updateQueue;
    gi = !1;
    var u = r.firstBaseUpdate, h = r.lastBaseUpdate, b = r.shared.pending;
    if (b !== null) {
      r.shared.pending = null;
      var A = b, _ = A.next;
      A.next = null, h === null ? u = _ : h.next = _, h = A;
      var k = t.alternate;
      k !== null && (k = k.updateQueue, b = k.lastBaseUpdate, b !== h && (b === null ? k.firstBaseUpdate = _ : b.next = _, k.lastBaseUpdate = A));
    }
    if (u !== null) {
      var Z = r.baseState;
      h = 0, k = _ = A = null, b = u;
      do {
        var R = b.lane & -536870913, U = R !== b.lane;
        if (U ? (Vt & R) === R : (a & R) === R) {
          R !== 0 && R === ea && (rc = !0), k !== null && (k = k.next = {
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
                  Z = rt.call(Ct, Z, R);
                  break t;
                }
                Z = rt;
                break t;
              case 3:
                rt.flags = rt.flags & -65537 | 128;
              case 0:
                if (rt = pt.payload, R = typeof rt == "function" ? rt.call(Ct, Z, R) : rt, R == null) break t;
                Z = j({}, Z, R);
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
          }, k === null ? (_ = k = U, A = Z) : k = k.next = U, h |= R;
        if (b = b.next, b === null) {
          if (b = r.shared.pending, b === null)
            break;
          U = b, b = U.next, U.next = null, r.lastBaseUpdate = U, r.shared.pending = null;
        }
      } while (!0);
      k === null && (A = Z), r.baseState = A, r.firstBaseUpdate = _, r.lastBaseUpdate = k, u === null && (r.shared.lanes = 0), wi |= h, t.lanes = h, t.memoizedState = Z;
    }
  }
  function pp(t, e) {
    if (typeof t != "function")
      throw Error(o(191, t));
    t.call(e);
  }
  function gp(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++)
        pp(n[t], e);
  }
  var bi = Xt(null), jo = Xt(0);
  function yp(t, e) {
    t = ei, zt(jo, t), zt(bi, e), ei = t | e.baseLanes;
  }
  function uc() {
    zt(jo, ei), zt(bi, bi.current);
  }
  function cc() {
    ei = jo.current, Ut(bi), Ut(jo);
  }
  var Se = Xt(null), De = null;
  function Si(t) {
    var e = t.alternate;
    zt(Te, Te.current & 1), zt(Se, t), De === null && (e === null || bi.current !== null || e.memoizedState !== null) && (De = t);
  }
  function fc(t) {
    zt(Te, Te.current), zt(Se, t), De === null && (De = t);
  }
  function vp(t) {
    t.tag === 22 ? (zt(Te, Te.current), zt(Se, t), De === null && (De = t)) : Ti();
  }
  function Ti() {
    zt(Te, Te.current), zt(Se, Se.current);
  }
  function Ze(t) {
    Ut(Se), De === t && (De = null), Ut(Te);
  }
  var Te = Xt(0);
  function ls(t, e) {
    zt(Se, Se.current), zt(Te, e);
  }
  function dc(t) {
    Ut(Te), Ut(Se), De === t && (De = null);
  }
  function Lo(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || jf(n) || Lf(n)))
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
  var In = 0, wt = null, Qt = null, se = null, Bo = !1, Pa = !1, sa = !1, Uo = 0, ss = 0, Fa = null, ZT = 0;
  function ne() {
    throw Error(o(321));
  }
  function hc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Qe(t[n], e[n])) return !1;
    return !0;
  }
  function mc(t, e, n, a, r, u) {
    return In = u, wt = e, e.memoizedState = null, e.updateQueue = null, e.lanes = 0, st.H = t === null || t.memoizedState === null ? eg : ng, sa = !1, u = n(a, r), sa = !1, Pa && (u = Sp(
      e,
      n,
      a,
      r
    )), bp(t), u;
  }
  function bp(t) {
    st.H = Qo;
    var e = Qt !== null && Qt.next !== null;
    if (In = 0, se = Qt = wt = null, Bo = !1, ss = 0, Fa = null, e) throw Error(o(300));
    t === null || oe || (t = t.dependencies, t !== null && Do(t) && (oe = !0));
  }
  function Sp(t, e, n, a) {
    wt = t;
    var r = 0;
    do {
      if (Pa && (Fa = null), ss = 0, Pa = !1, 25 <= r) throw Error(o(301));
      if (r += 1, se = Qt = null, t.updateQueue != null) {
        var u = t.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      st.H = tx, u = e(n, a);
    } while (Pa);
    return u;
  }
  function KT() {
    var t = st.H, e = t.useState()[0];
    return e = typeof e.then == "function" ? os(e) : e, t = t.useState()[0], (Qt !== null ? Qt.memoizedState : null) !== t && (wt.flags |= 1024), e;
  }
  function pc() {
    var t = Uo !== 0;
    return Uo = 0, t;
  }
  function gc(t, e, n) {
    e.updateQueue = t.updateQueue, e.flags &= -2053, t.lanes &= ~n;
  }
  function yc(t) {
    if (Bo) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue;
        e !== null && (e.pending = null), t = t.next;
      }
      Bo = !1;
    }
    In = 0, se = Qt = wt = null, Pa = !1, ss = Uo = 0, Fa = null;
  }
  function ze() {
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
  function Ho() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function os(t) {
    var e = ss;
    return ss += 1, Fa === null && (Fa = []), t = cp(Fa, t, e), e = wt, (se === null ? e.memoizedState : se.next) === null && (e = e.alternate, st.H = e === null || e.memoizedState === null ? eg : ng), t;
  }
  function Go(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return os(t);
      if (t.$$typeof === G) return;
      if (t.$$typeof === W) return be(t);
    }
    throw Error(o(438, String(t)));
  }
  function vc(t) {
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
        n[a] = et;
    return e.index++, n;
  }
  function Wn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function ko(t) {
    var e = ae();
    return bc(e, Qt, t);
  }
  function bc(t, e, n) {
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
      var b = h = null, A = null, _ = e, k = !1;
      do {
        var Z = _.lane & -536870913;
        if (Z !== _.lane ? (Vt & Z) === Z : (In & Z) === Z) {
          var R = _.revertLane;
          if (R === 0)
            A !== null && (A = A.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), Z === ea && (k = !0);
          else if ((In & R) === R) {
            _ = _.next, R === ea && (k = !0);
            continue;
          } else
            Z = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, A === null ? (b = A = Z, h = u) : A = A.next = Z, wt.lanes |= R, wi |= R;
          Z = _.action, sa && n(u, Z), u = _.hasEagerState ? _.eagerState : n(u, Z);
        } else
          R = {
            lane: Z,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, A === null ? (b = A = R, h = u) : A = A.next = R, wt.lanes |= Z, wi |= Z;
        _ = _.next;
      } while (_ !== null && _ !== e);
      if (A === null ? h = u : A.next = b, !Qe(u, t.memoizedState) && (oe = !0, k && (n = Qa, n !== null)))
        throw n;
      t.memoizedState = u, t.baseState = h, t.baseQueue = A, a.lastRenderedState = u;
    }
    return r === null && (a.lanes = 0), [t.memoizedState, a.dispatch];
  }
  function Sc(t) {
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
  function Tp(t, e, n) {
    var a = wt, r = ae(), u = Dt;
    if (u) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = e();
    var h = !Qe(
      (Qt || r).memoizedState,
      n
    );
    if (h && (r.memoizedState = n, oe = !0), r = r.queue, Ec(Ap.bind(null, a, r, t), [
      t
    ]), t = r.getSnapshot !== e || h || se !== null && (se.memoizedState.tag & 1) !== 0, Ja(
      t ? 9 : 8,
      { destroy: void 0 },
      Ep.bind(null, a, r, n, e),
      null
    ), t) {
      if (a.flags |= 2048, Kt === null) throw Error(o(349));
      u || (In & 127) !== 0 || xp(a, e, n);
    }
    return n;
  }
  function xp(t, e, n) {
    t.flags |= 16384, t = { getSnapshot: e, value: n }, e = wt.updateQueue, e === null ? (e = Ho(), wt.updateQueue = e, e.stores = [t]) : (n = e.stores, n === null ? e.stores = [t] : n.push(t));
  }
  function Ep(t, e, n, a) {
    e.value = n, e.getSnapshot = a, wp(e) && Cp(t);
  }
  function Ap(t, e, n) {
    return n(function() {
      wp(e) && Cp(t);
    });
  }
  function wp(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Qe(t, n);
    } catch {
      return !0;
    }
  }
  function Cp(t) {
    var e = Fi(t, 2);
    e !== null && Ge(e, t, 2);
  }
  function Tc(t) {
    var e = ze();
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
  function Mp(t, e, n, a) {
    return t.baseState = n, bc(
      t,
      Qt,
      typeof a == "function" ? a : Wn
    );
  }
  function PT(t, e, n, a, r) {
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
      st.T !== null ? n(!0) : u.isTransition = !1, a(u), n = e.pending, n === null ? (u.next = e.pending = u, Dp(e, u)) : (u.next = n.next, e.pending = n.next = u);
    }
  }
  function Dp(t, e) {
    var n = e.action, a = e.payload, r = t.state;
    if (e.isTransition) {
      var u = st.T, h = {};
      h.types = u !== null ? u.types : null, st.T = h;
      try {
        var b = n(r, a), A = st.S;
        A !== null && A(h, b), Op(t, e, b);
      } catch (_) {
        xc(t, e, _);
      } finally {
        u !== null && h.types !== null && (u.types = h.types), st.T = u;
      }
    } else
      try {
        u = n(r, a), Op(t, e, u);
      } catch (_) {
        xc(t, e, _);
      }
  }
  function Op(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        zp(t, e, a);
      },
      function(a) {
        return xc(t, e, a);
      }
    ) : zp(t, e, n);
  }
  function zp(t, e, n) {
    e.status = "fulfilled", e.value = n, Np(e), t.state = n, e = t.pending, e !== null && (n = e.next, n === e ? t.pending = null : (n = n.next, e.next = n, Dp(t, n)));
  }
  function xc(t, e, n) {
    var a = t.pending;
    if (t.pending = null, a !== null) {
      a = a.next;
      do
        e.status = "rejected", e.reason = n, Np(e), e = e.next;
      while (e !== a);
    }
    t.action = null;
  }
  function Np(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function Rp(t, e) {
    return e;
  }
  function Vp(t, e) {
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
    return n = ze(), n.memoizedState = n.baseState = e, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Rp,
      lastRenderedState: e
    }, n.queue = a, n = Wp.bind(
      null,
      wt,
      a
    ), a.dispatch = n, a = Tc(!1), u = Dc.bind(
      null,
      wt,
      !1,
      a.queue
    ), a = ze(), r = {
      state: e,
      dispatch: null,
      action: t,
      pending: null
    }, a.queue = r, n = PT.bind(
      null,
      wt,
      r,
      u,
      n
    ), r.dispatch = n, a.memoizedState = t, [e, n, !1];
  }
  function _p(t) {
    var e = ae();
    return jp(e, Qt, t);
  }
  function jp(t, e, n) {
    if (e = bc(
      t,
      e,
      Rp
    )[0], t = ko(Wn)[0], typeof e == "object" && e !== null && typeof e.then == "function")
      try {
        var a = os(e);
      } catch (h) {
        throw h === Za ? No : h;
      }
    else a = e;
    e = ae();
    var r = e.queue, u = r.dispatch;
    return n !== e.memoizedState && (wt.flags |= 2048, Ja(
      9,
      { destroy: void 0 },
      FT.bind(null, r, n),
      null
    )), [a, u, t];
  }
  function FT(t, e) {
    t.action = e;
  }
  function Lp(t) {
    var e = ae(), n = Qt;
    if (n !== null)
      return jp(e, n, t);
    ae(), e = e.memoizedState, n = ae();
    var a = n.queue.dispatch;
    return n.memoizedState = t, [e, a, !1];
  }
  function Ja(t, e, n, a) {
    return t = { tag: t, create: n, deps: a, inst: e, next: null }, e = wt.updateQueue, e === null && (e = Ho(), wt.updateQueue = e), n = e.lastEffect, n === null ? e.lastEffect = t.next = t : (a = n.next, n.next = t, t.next = a, e.lastEffect = t), t;
  }
  function Bp() {
    return ae().memoizedState;
  }
  function Yo(t, e, n, a) {
    var r = ze();
    wt.flags |= t, r.memoizedState = Ja(
      1 | e,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function qo(t, e, n, a) {
    var r = ae();
    a = a === void 0 ? null : a;
    var u = r.memoizedState.inst;
    Qt !== null && a !== null && hc(a, Qt.memoizedState.deps) ? r.memoizedState = Ja(e, u, n, a) : (wt.flags |= t, r.memoizedState = Ja(
      1 | e,
      u,
      n,
      a
    ));
  }
  function Up(t, e) {
    Yo(8390656, 8, t, e);
  }
  function Ec(t, e) {
    qo(2048, 8, t, e);
  }
  function JT(t) {
    wt.flags |= 4;
    var e = wt.updateQueue;
    if (e === null)
      e = Ho(), wt.updateQueue = e, e.events = [t];
    else {
      var n = e.events;
      n === null ? e.events = [t] : n.push(t);
    }
  }
  function Hp(t) {
    var e = ae().memoizedState;
    return JT({ ref: e, nextImpl: t }), function() {
      if ((Bt & 2) !== 0) throw Error(o(440));
      return e.impl.apply(void 0, arguments);
    };
  }
  function Gp(t, e) {
    return qo(4, 2, t, e);
  }
  function kp(t, e) {
    return qo(4, 4, t, e);
  }
  function Yp(t, e) {
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
  function qp(t, e, n) {
    n = n != null ? n.concat([t]) : null, qo(4, 4, Yp.bind(null, e, t), n);
  }
  function Ac() {
  }
  function Xp(t, e) {
    var n = ae();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    return e !== null && hc(e, a[1]) ? a[0] : (n.memoizedState = [t, e], t);
  }
  function Qp(t, e) {
    var n = ae();
    e = e === void 0 ? null : e;
    var a = n.memoizedState;
    if (e !== null && hc(e, a[1]))
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
  function wc(t, e, n) {
    return n === void 0 || (In & 1073741824) !== 0 && (Vt & 261930) === 0 ? t.memoizedState = e : (t.memoizedState = n, t = ey(), wt.lanes |= t, wi |= t, n);
  }
  function Zp(t, e, n, a) {
    return Qe(n, e) ? n : bi.current !== null ? (t = wc(t, n, a), Qe(t, e) || (oe = !0), t) : (In & 106) === 0 || (In & 1073741824) !== 0 && (Vt & 261930) === 0 ? (oe = !0, t.memoizedState = n) : (t = ey(), wt.lanes |= t, wi |= t, e);
  }
  function Kp(t, e, n, a, r) {
    var u = J.p;
    J.p = u !== 0 && 8 > u ? u : 8;
    var h = st.T, b = {};
    b.types = h !== null ? h.types : null, st.T = b, Dc(t, !1, e, n);
    try {
      var A = r(), _ = st.S;
      if (_ !== null && _(b, A), A !== null && typeof A == "object" && typeof A.then == "function") {
        var k = QT(
          A,
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
    } catch (Z) {
      rs(
        t,
        e,
        { then: function() {
        }, status: "rejected", reason: Z },
        Je()
      );
    } finally {
      J.p = u, h !== null && b.types !== null && (h.types = b.types), st.T = h;
    }
  }
  function IT() {
  }
  function Cc(t, e, n, a) {
    if (t.tag !== 5) throw Error(o(476));
    var r = Pp(t).queue;
    Kp(
      t,
      r,
      e,
      Et,
      n === null ? IT : function() {
        return Fp(t), n(a);
      }
    );
  }
  function Pp(t) {
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
  function Fp(t) {
    var e = Pp(t);
    e.next === null && (e = t.alternate.memoizedState), rs(
      t,
      e.next.queue,
      {},
      Je()
    );
  }
  function Mc() {
    return be(pl);
  }
  function Jp() {
    return ae().memoizedState;
  }
  function Ip() {
    return ae().memoizedState;
  }
  function WT(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Je();
          t = yi(n);
          var a = vi(e, t, n);
          a !== null && (Ge(a, e, n), ns(a, e, n)), e = { cache: ec() }, t.payload = e;
          return;
      }
      e = e.return;
    }
  }
  function $T(t, e, n) {
    var a = Je();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xo(t) ? $p(e, n) : (n = Zu(t, e, n, a), n !== null && (Ge(n, t, a), tg(n, e, a)));
  }
  function Wp(t, e, n) {
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
    if (Xo(t)) $p(e, r);
    else {
      var u = t.alternate;
      if (t.lanes === 0 && (u === null || u.lanes === 0) && (u = e.lastRenderedReducer, u !== null))
        try {
          var h = e.lastRenderedState, b = u(h, n);
          if (r.hasEagerState = !0, r.eagerState = b, Qe(b, h))
            return To(t, e, r, 0), Kt === null && So(), !1;
        } catch {
        }
      if (n = Zu(t, e, r, a), n !== null)
        return Ge(n, t, a), tg(n, e, a), !0;
    }
    return !1;
  }
  function Dc(t, e, n, a) {
    if (a = {
      lane: 2,
      revertLane: bf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Xo(t)) {
      if (e) throw Error(o(479));
    } else
      e = Zu(
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
  function $p(t, e) {
    Pa = Bo = !0;
    var n = t.pending;
    n === null ? e.next = e : (e.next = n.next, n.next = e), t.pending = e;
  }
  function tg(t, e, n) {
    if ((n & 4194048) !== 0) {
      var a = e.lanes;
      a &= t.pendingLanes, n |= a, e.lanes = n, em(t, n);
    }
  }
  var Qo = {
    readContext: be,
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
  }, eg = {
    readContext: be,
    use: Go,
    useCallback: function(t, e) {
      return ze().memoizedState = [
        t,
        e === void 0 ? null : e
      ], t;
    },
    useContext: be,
    useEffect: Up,
    useImperativeHandle: function(t, e, n) {
      n = n != null ? n.concat([t]) : null, Yo(
        4194308,
        4,
        Yp.bind(null, e, t),
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
      var n = ze();
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
      var a = ze();
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
      }, a.queue = t, t = t.dispatch = $T.bind(
        null,
        wt,
        t
      ), [a.memoizedState, t];
    },
    useRef: function(t) {
      var e = ze();
      return t = { current: t }, e.memoizedState = t;
    },
    useState: function(t) {
      t = Tc(t);
      var e = t.queue, n = Wp.bind(null, wt, e);
      return e.dispatch = n, [t.memoizedState, n];
    },
    useDebugValue: Ac,
    useDeferredValue: function(t, e) {
      var n = ze();
      return wc(n, t, e);
    },
    useTransition: function() {
      var t = Tc(!1);
      return t = Kp.bind(
        null,
        wt,
        t.queue,
        !0,
        !1
      ), ze().memoizedState = t, [!1, t];
    },
    useSyncExternalStore: function(t, e, n) {
      var a = wt, r = ze();
      if (Dt) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = e(), Kt === null)
          throw Error(o(349));
        (Vt & 127) !== 0 || xp(a, e, n);
      }
      r.memoizedState = n;
      var u = { value: n, getSnapshot: e };
      return r.queue = u, Up(Ap.bind(null, a, u, t), [
        t
      ]), a.flags |= 2048, Ja(
        9,
        { destroy: void 0 },
        Ep.bind(
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
      var t = ze(), e = Kt.identifierPrefix;
      if (Dt) {
        var n = Dn, a = Mn;
        n = (a & ~(1 << 32 - qe(a) - 1)).toString(32) + n, e = "_" + e + "R_" + n, n = Uo++, 0 < n && (e += "H" + n.toString(32)), e += "_";
      } else
        n = ZT++, e = "_" + e + "r_" + n.toString(32) + "_";
      return t.memoizedState = e;
    },
    useHostTransitionStatus: Mc,
    useFormState: Vp,
    useActionState: Vp,
    useOptimistic: function(t) {
      var e = ze();
      e.memoizedState = e.baseState = t;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return e.queue = n, e = Dc.bind(
        null,
        wt,
        !0,
        n
      ), n.dispatch = e, [t, e];
    },
    useMemoCache: vc,
    useCacheRefresh: function() {
      return ze().memoizedState = WT.bind(
        null,
        wt
      );
    },
    useEffectEvent: function(t) {
      var e = ze(), n = { impl: t };
      return e.memoizedState = n, function() {
        if ((Bt & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, ng = {
    readContext: be,
    use: Go,
    useCallback: Xp,
    useContext: be,
    useEffect: Ec,
    useImperativeHandle: qp,
    useInsertionEffect: Gp,
    useLayoutEffect: kp,
    useMemo: Qp,
    useReducer: ko,
    useRef: Bp,
    useState: function() {
      return ko(Wn);
    },
    useDebugValue: Ac,
    useDeferredValue: function(t, e) {
      var n = ae();
      return Zp(
        n,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = ko(Wn)[0], e = ae().memoizedState;
      return [
        typeof t == "boolean" ? t : os(t),
        e
      ];
    },
    useSyncExternalStore: Tp,
    useId: Jp,
    useHostTransitionStatus: Mc,
    useFormState: _p,
    useActionState: _p,
    useOptimistic: function(t, e) {
      var n = ae();
      return Mp(n, Qt, t, e);
    },
    useMemoCache: vc,
    useCacheRefresh: Ip,
    useEffectEvent: Hp
  }, tx = {
    readContext: be,
    use: Go,
    useCallback: Xp,
    useContext: be,
    useEffect: Ec,
    useImperativeHandle: qp,
    useInsertionEffect: Gp,
    useLayoutEffect: kp,
    useMemo: Qp,
    useReducer: Sc,
    useRef: Bp,
    useState: function() {
      return Sc(Wn);
    },
    useDebugValue: Ac,
    useDeferredValue: function(t, e) {
      var n = ae();
      return Qt === null ? wc(n, t, e) : Zp(
        n,
        Qt.memoizedState,
        t,
        e
      );
    },
    useTransition: function() {
      var t = Sc(Wn)[0], e = ae().memoizedState;
      return [
        typeof t == "boolean" ? t : os(t),
        e
      ];
    },
    useSyncExternalStore: Tp,
    useId: Jp,
    useHostTransitionStatus: Mc,
    useFormState: Lp,
    useActionState: Lp,
    useOptimistic: function(t, e) {
      var n = ae();
      return Qt !== null ? Mp(n, Qt, t, e) : (n.baseState = t, [t, n.queue.dispatch]);
    },
    useMemoCache: vc,
    useCacheRefresh: Ip,
    useEffectEvent: Hp
  };
  function Oc(t, e, n, a) {
    e = t.memoizedState, n = n(a, e), n = n == null ? e : j({}, e, n), t.memoizedState = n, t.lanes === 0 && (t.updateQueue.baseState = n);
  }
  var zc = {
    enqueueSetState: function(t, e, n) {
      t = t._reactInternals;
      var a = Je(), r = yi(a);
      r.payload = e, n != null && (r.callback = n), e = vi(t, r, a), e !== null && (Ge(e, t, a), ns(e, t, a));
    },
    enqueueReplaceState: function(t, e, n) {
      t = t._reactInternals;
      var a = Je(), r = yi(a);
      r.tag = 1, r.payload = e, n != null && (r.callback = n), e = vi(t, r, a), e !== null && (Ge(e, t, a), ns(e, t, a));
    },
    enqueueForceUpdate: function(t, e) {
      t = t._reactInternals;
      var n = Je(), a = yi(n);
      a.tag = 2, e != null && (a.callback = e), e = vi(t, a, n), e !== null && (Ge(e, t, n), ns(e, t, n));
    }
  };
  function ig(t, e, n, a, r, u, h) {
    return t = t.stateNode, typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(a, u, h) : e.prototype && e.prototype.isPureReactComponent ? !Pl(n, a) || !Pl(r, u) : !0;
  }
  function ag(t, e, n, a) {
    t = e.state, typeof e.componentWillReceiveProps == "function" && e.componentWillReceiveProps(n, a), typeof e.UNSAFE_componentWillReceiveProps == "function" && e.UNSAFE_componentWillReceiveProps(n, a), e.state !== t && zc.enqueueReplaceState(e, e.state, null);
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
  function lg(t) {
    bo(t);
  }
  function sg(t) {
    console.error(t);
  }
  function og(t) {
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
  function rg(t, e, n) {
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
  function Nc(t, e, n) {
    return n = yi(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Zo(t, e);
    }, n;
  }
  function ug(t) {
    return t = yi(t), t.tag = 3, t;
  }
  function cg(t, e, n, a) {
    var r = n.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var u = a.value;
      t.payload = function() {
        return r(u);
      }, t.callback = function() {
        rg(e, n, a);
      };
    }
    var h = n.stateNode;
    h !== null && typeof h.componentDidCatch == "function" && (t.callback = function() {
      rg(e, n, a), typeof r != "function" && (Ci === null ? Ci = /* @__PURE__ */ new Set([this]) : Ci.add(this));
      var b = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: b !== null ? b : ""
      });
    });
  }
  function ex(t, e, n, a, r) {
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
            return De === null ? hr() : n.alternate === null && ie === 0 && (ie = 3), n.flags &= -257, n.flags |= 65536, n.lanes = r, a === Ro ? n.flags |= 16384 : (e = n.updateQueue, e === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : e.add(a), gf(t, a, r)), !1;
          case 22:
            return n.flags |= 65536, a === Ro ? n.flags |= 16384 : (e = n.updateQueue, e === null ? (e = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = e) : (n = e.retryQueue, n === null ? e.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), gf(t, a, r)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return gf(t, a, r), hr(), !1;
    }
    if (Dt)
      return e = Se.current, e !== null ? ((e.flags & 65536) === 0 && (e.flags |= 256), e.flags |= 65536, e.lanes = r, a !== Iu && (t = Error(o(422), { cause: a }), Il(ln(t, n)))) : (a !== Iu && (e = Error(o(423), {
        cause: a
      }), Il(
        ln(e, n)
      )), t = t.current.alternate, t.flags |= 65536, r &= -r, t.lanes |= r, a = ln(a, n), r = Nc(
        t.stateNode,
        a,
        r
      ), oc(t, r), ie !== 4 && (ie = 2)), !1;
    var u = Error(o(520), { cause: a });
    if (u = ln(u, n), gs === null ? gs = [u] : gs.push(u), ie !== 4 && (ie = 2), e === null) return !0;
    a = ln(a, n), n = e;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, t = r & -r, n.lanes |= t, t = Nc(n.stateNode, a, t), oc(n, t), !1;
        case 1:
          if (e = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof e.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (Ci === null || !Ci.has(u))))
            return n.flags |= 65536, r &= -r, n.lanes |= r, r = ug(r), cg(
              r,
              t,
              n,
              a
            ), oc(n, r), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Rc = Error(o(461)), oe = !1;
  function ce(t, e, n, a) {
    e.child = t === null ? mp(e, null, n, a) : la(
      e,
      t.child,
      n,
      a
    );
  }
  function fg(t, e, n, a, r) {
    n = n.render;
    var u = e.ref;
    if ("ref" in a) {
      var h = {};
      for (var b in a)
        b !== "ref" && (h[b] = a[b]);
    } else h = a;
    return ta(e), a = mc(
      t,
      e,
      n,
      h,
      u,
      r
    ), b = pc(), t !== null && !oe ? (gc(t, e, r), $n(t, e, r)) : (Dt && b && wo(e), e.flags |= 1, ce(t, e, a, r), e.child);
  }
  function dg(t, e, n, a, r) {
    if (t === null) {
      var u = n.type;
      return typeof u == "function" && !Ku(u) && u.defaultProps === void 0 && n.compare === null ? (e.tag = 15, e.type = u, hg(
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
    if (u = t.child, !Gc(t, r)) {
      var h = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Pl, n(h, a) && t.ref === e.ref)
        return $n(t, e, r);
    }
    return e.flags |= 1, t = Kn(u, a), t.ref = e.ref, t.return = e, e.child = t;
  }
  function hg(t, e, n, a, r) {
    if (t !== null) {
      var u = t.memoizedProps;
      if (Pl(u, a) && t.ref === e.ref)
        if (oe = !1, e.pendingProps = a = u, Gc(t, r))
          (t.flags & 131072) !== 0 && (oe = !0);
        else
          return e.lanes = t.lanes, $n(t, e, r);
    }
    return Vc(
      t,
      e,
      n,
      a,
      r
    );
  }
  function mg(t, e, n, a) {
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
        return pg(
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
        ), u !== null ? yp(e, u) : uc(), vp(e);
      else
        return a = e.lanes = 536870912, pg(
          t,
          e,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (zo(e, u.cachePool), yp(e, u), Ti(), e.memoizedState = null) : (t !== null && zo(e, null), uc(), Ti());
    return ce(t, e, r, n), e.child;
  }
  function us(t, e) {
    return t !== null && t.tag === 22 || e.stateNode !== null || (e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.sibling;
  }
  function pg(t, e, n, a, r) {
    var u = ic();
    return u = u === null ? null : { parent: le._currentValue, pool: u }, e.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, t !== null && zo(e, null), uc(), vp(e), t !== null && $i(t, e, a, !0), e.childLanes = r, null;
  }
  function Ko(t, e) {
    return e = Po(
      { mode: e.mode, children: e.children },
      t.mode
    ), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function gg(t, e, n) {
    return la(e, t.child, null, n), t = Ko(e, e.pendingProps), t.flags |= 2, Ze(e), e.memoizedState = null, t;
  }
  function nx(t, e, n) {
    var a = e.pendingProps, r = (e.flags & 128) !== 0;
    if (e.flags &= -129, t === null) {
      if (Dt) {
        if (a.mode === "hidden")
          return t = Ko(e, a), e.lanes = 536870912, t.memoizedState = { baseLanes: 0, cachePool: null }, us(null, t);
        if (fc(e), (t = Ft) ? (t = Yy(
          t,
          rn
        ), t = t !== null && t.data === "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: fi !== null ? { id: Mn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = $m(t), n.return = e, e.child = n, pe = e, Ft = null)) : t = null, t === null) throw hi(e);
        return e.lanes = 536870912, null;
      }
      return Ko(e, a);
    }
    var u = t.memoizedState;
    if (u !== null) {
      var h = u.dehydrated;
      if (fc(e), r)
        if (e.flags & 256)
          e.flags &= -257, e = gg(
            t,
            e,
            n
          );
        else if (e.memoizedState !== null)
          e.child = t.child, e.flags |= 128, e = null;
        else throw Error(o(558));
      else if (oe || $i(t, e, n, !1), r = (n & t.childLanes) !== 0, oe || r) {
        if (bi.current === null) {
          if (a = Kt, a !== null && (h = nm(a, n), h !== 0 && h !== u.retryLane))
            throw u.retryLane = h, Fi(t, h), Ge(a, t, h), Rc;
          hr();
        }
        e = gg(
          t,
          e,
          n
        );
      } else
        t = u.treeContext, Ft = cn(h.nextSibling), pe = e, Dt = !0, di = null, rn = !1, t !== null && np(e, t), e = Ko(e, a), e.flags |= 134221824;
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
  function Vc(t, e, n, a, r) {
    return ta(e), n = mc(
      t,
      e,
      n,
      a,
      void 0,
      r
    ), a = pc(), t !== null && !oe ? (gc(t, e, r), $n(t, e, r)) : (Dt && a && wo(e), e.flags |= 1, ce(t, e, n, r), e.child);
  }
  function yg(t, e, n, a, r, u) {
    return ta(e), e.updateQueue = null, n = Sp(
      e,
      a,
      n,
      r
    ), bp(t), a = pc(), t !== null && !oe ? (gc(t, e, u), $n(t, e, u)) : (Dt && a && wo(e), e.flags |= 1, ce(t, e, n, u), e.child);
  }
  function vg(t, e, n, a, r) {
    if (ta(e), e.stateNode === null) {
      var u = ka, h = n.contextType;
      typeof h == "object" && h !== null && (u = be(h)), u = new n(a, u), e.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = zc, e.stateNode = u, u._reactInternals = e, u = e.stateNode, u.props = a, u.state = e.memoizedState, u.refs = {}, lc(e), h = n.contextType, u.context = typeof h == "object" && h !== null ? be(h) : ka, u.state = e.memoizedState, h = n.getDerivedStateFromProps, typeof h == "function" && (Oc(
        e,
        n,
        h,
        a
      ), u.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (h = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), h !== u.state && zc.enqueueReplaceState(u, u.state, null), as(e, a, u, r), is(), u.state = e.memoizedState), typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !0;
    } else if (t === null) {
      u = e.stateNode;
      var b = e.memoizedProps, A = oa(n, b);
      u.props = A;
      var _ = u.context, k = n.contextType;
      h = ka, typeof k == "object" && k !== null && (h = be(k));
      var Z = n.getDerivedStateFromProps;
      k = typeof Z == "function" || typeof u.getSnapshotBeforeUpdate == "function", b = e.pendingProps !== b, k || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (b || _ !== h) && ag(
        e,
        u,
        a,
        h
      ), gi = !1;
      var R = e.memoizedState;
      u.state = R, as(e, a, u, r), is(), _ = e.memoizedState, b || R !== _ || gi ? (typeof Z == "function" && (Oc(
        e,
        n,
        Z,
        a
      ), _ = e.memoizedState), (A = gi || ig(
        e,
        n,
        A,
        a,
        R,
        _,
        h
      )) ? (k || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (e.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), e.memoizedProps = a, e.memoizedState = _), u.props = a, u.state = _, u.context = h, a = A) : (typeof u.componentDidMount == "function" && (e.flags |= 4194308), a = !1);
    } else {
      u = e.stateNode, sc(t, e), h = e.memoizedProps, k = oa(n, h), u.props = k, Z = e.pendingProps, R = u.context, _ = n.contextType, A = ka, typeof _ == "object" && _ !== null && (A = be(_)), b = n.getDerivedStateFromProps, (_ = typeof b == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (h !== Z || R !== A) && ag(
        e,
        u,
        a,
        A
      ), gi = !1, R = e.memoizedState, u.state = R, as(e, a, u, r), is();
      var U = e.memoizedState;
      h !== Z || R !== U || gi || t !== null && t.dependencies !== null && Do(t.dependencies) ? (typeof b == "function" && (Oc(
        e,
        n,
        b,
        a
      ), U = e.memoizedState), (k = gi || ig(
        e,
        n,
        k,
        a,
        R,
        U,
        A
      ) || t !== null && t.dependencies !== null && Do(t.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, U, A), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        U,
        A
      )), typeof u.componentDidUpdate == "function" && (e.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), e.memoizedProps = a, e.memoizedState = U), u.props = a, u.state = U, u.context = A, a = k) : (typeof u.componentDidUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || h === t.memoizedProps && R === t.memoizedState || (e.flags |= 1024), a = !1);
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
  function bg(t, e, n, a) {
    return Ii(), e.flags |= 256, ce(t, e, n, a), e.child;
  }
  var _c = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function jc(t) {
    return { baseLanes: t, cachePool: rp() };
  }
  function Lc(t, e, n) {
    return t = t !== null ? t.childLanes & ~n : 0, e && (t |= Fe), t;
  }
  function Sg(t, e, n) {
    var a = e.pendingProps, r = !1, u = (e.flags & 128) !== 0, h;
    if ((h = u) || (h = t !== null && t.memoizedState === null ? !1 : (Te.current & 2) !== 0), h && (r = !0, e.flags &= -129), h = (e.flags & 32) !== 0, e.flags &= -33, t === null) {
      if (Dt) {
        if (r ? Si(e) : Ti(), (t = Ft) ? (t = Yy(
          t,
          rn
        ), t = t !== null && t.data !== "&" ? t : null, t !== null && (e.memoizedState = {
          dehydrated: t,
          treeContext: fi !== null ? { id: Mn, overflow: Dn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = $m(t), n.return = e, e.child = n, pe = e, Ft = null)) : t = null, t === null) throw hi(e);
        return Lf(t) ? e.lanes = 32 : e.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, r ? (Ti(), r = e.mode, u = Po(
        { mode: "hidden", children: u },
        r
      ), a = Ji(
        a,
        r,
        n,
        null
      ), u.return = e, a.return = e, u.sibling = a, e.child = u, a = e.child, a.memoizedState = jc(n), a.childLanes = Lc(
        t,
        h,
        n
      ), e.memoizedState = _c, us(null, a)) : (Si(e), Bc(e, u));
    }
    var b = t.memoizedState;
    if (b !== null) {
      var A = b.dehydrated;
      if (A !== null)
        return ix(
          t,
          e,
          u,
          h,
          a,
          A,
          b,
          n
        );
    }
    return r ? (Ti(), r = a.fallback, u = e.mode, b = t.child, A = b.sibling, a = Kn(b, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = b.subtreeFlags & 1206910976, A !== null ? r = Kn(A, r) : (r = Ji(
      r,
      u,
      n,
      null
    ), r.flags |= 2), r.return = e, a.return = e, a.sibling = r, e.child = a, us(null, a), a = e.child, r = t.child.memoizedState, r === null ? r = jc(n) : (u = r.cachePool, u !== null ? (b = le._currentValue, u = u.parent !== b ? { parent: b, pool: b } : u) : u = rp(), r = {
      baseLanes: r.baseLanes | n,
      cachePool: u
    }), a.memoizedState = r, a.childLanes = Lc(
      t,
      h,
      n
    ), e.memoizedState = _c, us(t.child, a)) : (Si(e), n = t.child, t = n.sibling, n = Kn(n, {
      mode: "visible",
      children: a.children
    }), n.return = e, n.sibling = null, t !== null && (h = e.deletions, h === null ? (e.deletions = [t], e.flags |= 16) : h.push(t)), e.child = n, e.memoizedState = null, n);
  }
  function Bc(t, e) {
    return e = Po(
      { mode: "visible", children: e },
      t.mode
    ), e.return = t, t.child = e;
  }
  function Po(t, e) {
    return t = Le(22, t, null, e), t.lanes = 0, t;
  }
  function Fo(t, e, n) {
    return la(e, t.child, null, n), t = Bc(
      e,
      e.pendingProps.children
    ), t.flags |= 2, e.memoizedState = null, t;
  }
  function ix(t, e, n, a, r, u, h, b) {
    if (n)
      return e.flags & 256 ? (Si(e), e.flags &= -257, Fo(
        t,
        e,
        b
      )) : e.memoizedState !== null ? (Ti(), e.child = t.child, e.flags |= 128, null) : (Ti(), u = r.fallback, h = e.mode, r = Po(
        { mode: "visible", children: r.children },
        h
      ), u = Ji(
        u,
        h,
        b,
        null
      ), u.flags |= 2, r.return = e, u.return = e, r.sibling = u, e.child = r, la(e, t.child, null, b), r = e.child, r.memoizedState = jc(b), r.childLanes = Lc(
        t,
        a,
        b
      ), e.memoizedState = _c, us(null, r));
    if (Si(e), Lf(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var A = a.dgst;
      return a = A, a !== "" && (r = Error(o(419)), r.stack = "", r.digest = a, Il({ value: r, source: null, stack: null })), Fo(
        t,
        e,
        b
      );
    }
    if (oe || $i(t, e, b, !1), a = (b & t.childLanes) !== 0, oe || a) {
      if (bi.current !== null)
        return Fo(
          t,
          e,
          b
        );
      if (a = Kt, a !== null && (r = nm(
        a,
        b
      ), r !== 0 && r !== h.retryLane))
        throw h.retryLane = r, Fi(t, r), Ge(a, t, r), Rc;
      return jf(u) || hr(), Fo(
        t,
        e,
        b
      );
    }
    return jf(u) ? (e.flags |= 192, e.child = t.child, null) : (t = h.treeContext, Ft = cn(u.nextSibling), pe = e, Dt = !0, di = null, rn = !1, t !== null && np(e, t), e = Bc(
      e,
      r.children
    ), e.flags |= 134221824, e);
  }
  function Tg(t, e, n) {
    t.lanes |= e;
    var a = t.alternate;
    a !== null && (a.lanes |= e), Mo(t.return, e, n);
  }
  function xg(t) {
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
  function Uc(t) {
    var e = t.child;
    for (t.child = null; e !== null; ) {
      var n = e.sibling;
      e.sibling = t.child, t.child = e, e = n;
    }
  }
  function Hc(t, e, n) {
    var a = e.pendingProps, r = a.revealOrder, u = a.tail;
    a = a.children;
    var h = Te.current;
    if (e.flags & 128)
      return ls(e, h), null;
    var b = (h & 2) !== 0;
    if (b ? (h = h & 1 | 2, e.flags |= 128) : h &= 1, ls(e, h), r === "backwards" && t !== null ? (Uc(t), ce(t, e, a, n), Uc(t)) : ce(t, e, a, n), a = Dt ? Jl : 0, !b && t !== null && (t.flags & 128) !== 0)
      t: for (t = e.child; t !== null; ) {
        if (t.tag === 13)
          t.memoizedState !== null && Tg(t, n, e);
        else if (t.tag === 19)
          Tg(t, n, e);
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
        n = xg(e.child), n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null, Uc(e)), Jo(
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
        n = xg(e.child), n === null ? (r = e.child, e.child = null) : (r = n.sibling, n.sibling = null), Jo(
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
  function Eg(t, e, n) {
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
  function Gc(t, e) {
    return (t.lanes & e) !== 0 ? !0 : (t = t.dependencies, !!(t !== null && Do(t)));
  }
  function ax(t, e, n) {
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
          return e.flags |= 128, fc(e), null;
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
          return a || (n & r) !== 0 ? Sg(t, e, n) : (Si(e), t = $n(
            t,
            e,
            n
          ), t !== null ? t.sibling : null);
        }
        Si(e);
        break;
      case 19:
        if (e.flags & 128)
          return Hc(
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
            return Hc(
              t,
              e,
              n
            );
          e.flags |= 128;
        }
        if (r = e.memoizedState, r !== null && (r.rendering = null, r.tail = null, r.lastEffect = null), ls(e, Te.current), a) break;
        return null;
      case 22:
        return e.lanes = 0, mg(
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
  function Ag(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps)
        oe = !0;
      else {
        if (!Gc(t, n) && (e.flags & 128) === 0)
          return oe = !1, ax(
            t,
            e,
            n
          );
        oe = (t.flags & 131072) !== 0;
      }
    else
      oe = !1, Dt && (e.flags & 1048576) !== 0 && ep(e, Jl, e.index);
    switch (e.lanes = 0, e.tag) {
      case 16:
        t: {
          var a = e.pendingProps;
          if (t = ia(e.elementType), e.type = t, typeof t == "function")
            Ku(t) ? (a = oa(t, a), e.tag = 1, e = vg(
              null,
              e,
              t,
              a,
              n
            )) : (e.tag = 0, e = Vc(
              null,
              e,
              t,
              a,
              n
            ));
          else {
            if (t != null) {
              var r = t.$$typeof;
              if (r === q) {
                e.tag = 11, e = fg(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (r === at) {
                e.tag = 14, e = dg(
                  null,
                  e,
                  t,
                  a,
                  n
                );
                break t;
              } else if (r === W) {
                e.tag = 10, e.type = t, e = Eg(
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
        return Vc(
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
        ), vg(
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
          r = u.element, sc(t, e), as(e, a, null, n);
          var h = e.memoizedState;
          if (a = h.cache, mi(e, le, a), a !== u.cache && tc(
            e,
            [le],
            n,
            !0
          ), is(), a = h.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: h.cache
            }, e.updateQueue.baseState = u, e.memoizedState = u, e.flags & 256) {
              e = bg(
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
              ), Il(r), e = bg(
                t,
                e,
                a,
                n
              );
              break t;
            } else
              for (t = e.stateNode.containerInfo, t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t, Ft = cn(t.firstChild), pe = e, Dt = !0, di = null, rn = !0, n = mp(
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
        return Ia(t, e), t === null ? (n = Fy(
          e.type,
          null,
          e.pendingProps,
          null
        )) ? e.memoizedState = n : Dt || (e.stateNode = Dy(
          e.type,
          e.pendingProps,
          _e.current,
          e
        )) : e.memoizedState = Fy(
          e.type,
          t.memoizedProps,
          e.pendingProps,
          t.memoizedState
        ), null;
      case 27:
        return Ca(e), t === null && Dt && (a = e.stateNode = Qy(
          e.type,
          e.pendingProps,
          _e.current
        ), pe = e, rn = !0, r = Ft, Oi(e.type) ? (Bf = r, Ft = cn(a.firstChild)) : Ft = r), ce(
          t,
          e,
          e.pendingProps.children,
          n
        ), Ia(t, e), t === null && (e.flags |= 4194304), e.child;
      case 5:
        return t === null && Dt && ((r = a = Ft) && (a = Wx(
          a,
          e.type,
          e.pendingProps,
          rn
        ), a !== null ? (e.stateNode = a, pe = e, Ft = cn(a.firstChild), rn = !1, r = !0) : r = !1), r || hi(e)), Ca(e), r = e.type, u = e.pendingProps, h = t !== null ? t.memoizedProps : null, a = u.children, Df(r, u) ? a = null : h !== null && Df(r, h) && (e.flags |= 32), e.memoizedState !== null && (r = mc(
          t,
          e,
          KT,
          null,
          null,
          n
        ), pl._currentValue = r), Ia(t, e), ce(t, e, a, n), e.child;
      case 6:
        return t === null && Dt && ((t = n = Ft) && (n = $x(
          n,
          e.pendingProps,
          rn
        ), n !== null ? (e.stateNode = n, pe = e, Ft = null, t = !0) : t = !1), t || hi(e)), null;
      case 13:
        return Sg(t, e, n);
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
        return fg(
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
        return Eg(t, e, n);
      case 9:
        return r = e.type._context, a = e.pendingProps.children, ta(e), r = be(r), a = a(r), e.flags |= 1, ce(t, e, a, n), e.child;
      case 14:
        return dg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 15:
        return hg(
          t,
          e,
          e.type,
          e.pendingProps,
          n
        );
      case 19:
        return Hc(t, e, n);
      case 31:
        return nx(t, e, n);
      case 22:
        return mg(
          t,
          e,
          n,
          e.pendingProps
        );
      case 24:
        return ta(e), a = be(le), t === null ? (r = ic(), r === null && (r = Kt, u = ec(), r.pooledCache = u, u.refCount++, u !== null && (r.pooledCacheLanes |= n), r = u), e.memoizedState = { parent: a, cache: r }, lc(e), mi(e, le, r)) : ((t.lanes & n) !== 0 && (sc(t, e), as(e, null, null, n), is()), r = t.memoizedState, u = e.memoizedState, r.parent !== a ? (r = { parent: a, cache: a }, e.memoizedState = r, e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = r), mi(e, le, a)) : (a = u.cache, mi(e, le, a), a !== r.cache && tc(
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
        }), a = e.pendingProps, a.name != null && a.name !== "auto" ? e.flags |= t === null ? 18882560 : 18874368 : Dt && wo(e), t !== null && t.memoizedProps.name !== a.name ? e.flags |= 4194816 : Ia(t, e), ce(t, e, a.children, n), e.child;
      case 29:
        throw e.pendingProps;
    }
    throw Error(o(156, e.tag));
  }
  function ti(t) {
    t.flags |= 4;
  }
  function kc(t, e, n, a, r) {
    var u;
    if ((u = (t.mode & 32) !== 0) && (u = n === null ? $y(e, a) : $y(e, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (t.flags |= 16777216, (r & 335544128) === r)
        if (t.stateNode.complete) t.flags |= 8192;
        else if (ly()) t.flags |= 8192;
        else
          throw aa = Ro, ac;
    } else t.flags &= -16777217;
  }
  function wg(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216, !tv(e))
      if (ly()) t.flags |= 8192;
      else
        throw aa = Ro, ac;
  }
  function Io(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && (e = t.tag !== 22 ? $h() : 536870912, t.lanes |= e, nl |= e);
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
  function lx(t, e, n) {
    var a = e.pendingProps;
    switch (Ju(e), e.tag) {
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
        return n = e.stateNode, a = null, t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Jn(le), kn(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (t === null || t.child === null) && (Xa(e) ? ti(e) : t === null || t.memoizedState.isDehydrated && (e.flags & 256) === 0 || (e.flags |= 1024, Wu())), Jt(e), null;
      case 26:
        var r = e.type, u = e.memoizedState;
        return t === null ? (ti(e), u !== null ? (Jt(e), wg(e, u)) : (Jt(e), kc(
          e,
          r,
          null,
          a,
          n
        ))) : u ? u !== t.memoizedState ? (ti(e), Jt(e), wg(e, u)) : (Jt(e), e.flags &= -16777217) : (t = t.memoizedProps, t !== a && ti(e), Jt(e), kc(
          e,
          r,
          t,
          a,
          n
        )), null;
      case 27:
        if (Ma(e), n = _e.current, r = e.type, t !== null && e.stateNode != null)
          t.memoizedProps !== a && ti(e);
        else {
          if (!a) {
            if (e.stateNode === null)
              throw Error(o(166));
            return Jt(e), e.subtreeFlags &= -33554433, null;
          }
          t = Pt.current, Xa(e) ? ip(e) : (t = Qy(r, a, n), e.stateNode = t, ti(e));
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
            ip(e);
          else {
            var h = Ts(
              _e.current
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
        return Jt(e), e.subtreeFlags &= -33554433, kc(
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
          if (t = _e.current, Xa(e)) {
            if (t = e.stateNode, n = e.memoizedProps, a = null, r = pe, r !== null)
              switch (r.tag) {
                case 27:
                case 5:
                  a = r.memoizedProps;
              }
            t[ve] = e, t = !!(t.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Ay(t.nodeValue, n)), t || hi(e, !0);
          } else
            t = Ts(t).createTextNode(
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
            n = Wu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = n), t = !0;
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
            r = Wu(), t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = r), r = !0;
          if (!r)
            return e.flags & 256 ? (Ze(e), e) : (Ze(e), null);
        }
        return Ze(e), (e.flags & 128) !== 0 ? (e.lanes = n, e) : (n = a !== null, t = t !== null && t.memoizedState !== null, n && (a = e.child, r = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (r = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== r && (a.flags |= 2048)), n !== t && n && (e.child.flags |= 8192), Io(e, e.updateQueue), Jt(e), null);
      case 4:
        return kn(), t === null && Ef(e.stateNode.containerInfo), e.flags |= 67108864, Jt(e), null;
      case 10:
        return Jn(e.type), Jt(e), null;
      case 19:
        if (dc(e), a = e.memoizedState, a === null) return Jt(e), null;
        if (r = (e.flags & 128) !== 0, u = a.rendering, u === null)
          if (r) cs(a, !1);
          else {
            if (ie !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = e.child; t !== null; ) {
                if (u = Lo(t), u !== null) {
                  for (e.flags |= 128, cs(a, !1), t = u.updateQueue, e.updateQueue = t, Io(e, t), e.subtreeFlags = 0, t = n, n = e.child; n !== null; )
                    Wm(n, t), n = n.sibling;
                  return ls(
                    e,
                    Te.current & 1 | 2
                  ), Dt && Pn(e, a.treeForkCount), e.child;
                }
                t = t.sibling;
              }
            a.tail !== null && Me() > ur && (e.flags |= 128, r = !0, cs(a, !1), e.lanes = 4194304);
          }
        else {
          if (!r)
            if (t = Lo(u), t !== null) {
              if (e.flags |= 128, r = !0, t = t.updateQueue, e.updateQueue = t, Io(e, t), cs(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Dt)
                return Jt(e), null;
            } else
              2 * Me() - a.renderingStartTime > ur && n !== 536870912 && (e.flags |= 128, r = !0, cs(a, !1), e.lanes = 4194304);
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
          return a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Me(), t.sibling = null, u = Te.current, u = r ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Dt ? ls(e, u) : (n = u, zt(Se, e), zt(Te, n), De === null && (De = e)), Dt && Pn(e, a.treeForkCount), t;
        }
        return Jt(e), null;
      case 22:
      case 23:
        return Ze(e), cc(), a = e.memoizedState !== null, t !== null ? t.memoizedState !== null !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? (n & 536870912) !== 0 && (e.flags & 128) === 0 && (Jt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Jt(e), n = e.updateQueue, n !== null && Io(e, n.retryQueue), n = null, t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), a = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== n && (e.flags |= 2048), t !== null && Ut(na), null;
      case 24:
        return n = null, t !== null && (n = t.memoizedState.cache), e.memoizedState.cache !== n && (e.flags |= 2048), Jn(le), Jt(e), null;
      case 25:
        return null;
      case 30:
        return e.flags |= 33554432, Jt(e), null;
    }
    throw Error(o(156, e.tag));
  }
  function sx(t, e) {
    switch (Ju(e), e.tag) {
      case 1:
        return t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 3:
        return Jn(le), kn(), t = e.flags, (t & 65536) !== 0 && (t & 128) === 0 ? (e.flags = t & -65537 | 128, e) : null;
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
        return dc(e), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, t = e.memoizedState, t !== null && (t.rendering = null, t.tail = null), e.flags |= 4, e) : null;
      case 4:
        return kn(), null;
      case 10:
        return Jn(e.type), null;
      case 22:
      case 23:
        return Ze(e), cc(), t !== null && Ut(na), t = e.flags, t & 65536 ? (e.flags = t & -65537 | 128, e) : null;
      case 24:
        return Jn(le), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Cg(t, e) {
    switch (Ju(e), e.tag) {
      case 3:
        Jn(le), kn();
        break;
      case 26:
      case 27:
      case 5:
        Ma(e);
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
        dc(e);
        break;
      case 10:
        Jn(e.type);
        break;
      case 22:
      case 23:
        Ze(e), cc(), t !== null && Ut(na);
        break;
      case 24:
        Jn(le);
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
      kt(e, e.return, b);
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
              var A = n, _ = b;
              try {
                _();
              } catch (k) {
                kt(
                  r,
                  A,
                  k
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (k) {
      kt(e, e.return, k);
    }
  }
  function Mg(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        gp(e, n);
      } catch (a) {
        kt(t, t.return, a);
      }
    }
  }
  function Dg(t, e, n) {
    n.props = oa(
      t.type,
      t.memoizedProps
    ), n.state = t.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      kt(t, e, a);
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
            var r = t.stateNode, u = Qn(t.memoizedProps, r);
            (r.ref === null || r.ref.name !== u) && (r.ref = jy(u)), a = r.ref;
            break;
          case 7:
            if (t.stateNode === null) {
              var h = new Ie(t);
              y(
                t.child,
                !1,
                Jx,
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
      kt(t, e, b);
    }
  }
  function xe(t, e) {
    var n = t.ref, a = t.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (r) {
          kt(t, e, r);
        } finally {
          t.refCleanup = null, t = t.alternate, t != null && (t.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          kt(t, e, r);
        }
      else n.current = null;
  }
  function Wo(t, e) {
    if ((t.tag === 5 || t.tag === 27 || t.tag === 6) && t.alternate === null && e !== null)
      for (var n = 0; n < e.length; n++)
        ky(
          t.stateNode,
          e[n]
        );
  }
  function Og(t) {
    for (var e = t.return; e !== null && (qc(e) && ky(t.stateNode, e.stateNode), !Yc(e)); )
      e = e.return;
  }
  function ds(t) {
    for (var e = t.return; e !== null && (qc(e) && Ix(t.stateNode, e.stateNode), !Yc(e)); )
      e = e.return;
  }
  function Yc(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 27;
  }
  function qc(t) {
    return t && t.tag === 7 && t.stateNode !== null;
  }
  function Xc(t) {
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
      kt(t, t.return, r);
    }
  }
  function Qc(t, e, n) {
    try {
      var a = t.stateNode;
      Rx(a, t.type, n, e), a[je] = e;
    } catch (r) {
      kt(t, t.return, r);
    }
  }
  function zg(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && Oi(t.type) || t.tag === 4;
  }
  function Zc(t) {
    t: for (; ; ) {
      for (; t.sibling === null; ) {
        if (t.return === null || zg(t.return)) return null;
        t = t.return;
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
        if (t.tag === 27 && Oi(t.type) || t.flags & 2 || t.child === null || t.tag === 4) continue t;
        t.child.return = t, t = t.child;
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function Kc(t, e, n, a) {
    var r = t.tag;
    if (r === 5 || r === 6)
      r = t.stateNode, e ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(r, e) : (e = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, e.appendChild(r), n = n._reactRootContainer, n != null || e.onclick !== null || (e.onclick = Cn)), Wo(t, a), Lt = !0;
    else if (r !== 4 && (r === 27 && (Wo(t, a), a = null, Oi(t.type) && (n = t.stateNode, e = null)), t = t.child, t !== null))
      for (Kc(
        t,
        e,
        n,
        a
      ), t = t.sibling; t !== null; )
        Kc(
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
  function Ng(t) {
    var e = t.stateNode, n = t.memoizedProps;
    try {
      for (var a = t.type, r = e.attributes; r.length; )
        e.removeAttributeNode(r[0]);
      Ee(e, a, n), e[ve] = t, e[je] = n;
    } catch (u) {
      kt(t, t.return, u);
    }
  }
  var tr = !1, Ke = null;
  function Rg(t) {
    (t.tag === 30 || (t.subtreeFlags & 33554432) !== 0) && (tr = !0);
  }
  var zn = null;
  function Vg() {
    var t = zn;
    return zn = null, t;
  }
  var Be = 0;
  function Wa(t, e, n, a, r) {
    return Be = 0, _g(
      t.child,
      e,
      n,
      a,
      r
    );
  }
  function _g(t, e, n, a, r) {
    for (var u = !1; t !== null; ) {
      if (t.tag === 5) {
        var h = t.stateNode;
        if (a !== null) {
          var b = Nf(h);
          a.push(b), b.view && (u = !0);
        } else
          u || Nf(h).view && (u = !0);
        tr = !0, Vy(
          h,
          Be === 0 ? e : e + "_" + Be,
          n
        ), Be++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && r || _g(
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
      t.tag === 5 ? _y(t.stateNode, t.memoizedProps) : (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && e || Nn(
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
  function Pc(t, e) {
    if (t.tag === 30) {
      var n = t.stateNode, a = t.memoizedProps, r = Qn(a, n), u = Zn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? Wa(t, r, u, null, !1) ? (er(t), n.paired || e || sl(t, a.onEnter)) : Nn(t.child, !1) : er(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Pc(t, e), t = t.sibling;
    else er(t);
  }
  function Fc(t) {
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
            Fc(t);
          }
          t = t.sibling;
        }
    }
  }
  function Jc(t) {
    if (t.tag === 30) {
      var e = t.memoizedProps, n = Qn(e, t.stateNode), a = Ke !== null ? Ke.get(n) : void 0, r = Zn(
        e.default,
        a !== void 0 ? e.share : e.exit
      );
      r !== "none" && (Wa(t, n, r, null, !1) ? a !== void 0 ? (r = t.stateNode, a.paired = r, r.paired = a, Ke.delete(n), sl(t, e.onShare)) : sl(t, e.onExit) : Nn(t.child, !1)), Ke !== null && Fc(t);
    } else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        Jc(t), t = t.sibling;
    else
      Ke !== null && Fc(t);
  }
  function jg(t) {
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
        (t.subtreeFlags & 33554432) !== 0 && jg(t);
      t = t.sibling;
    }
  }
  function Ic(t) {
    if ((t.subtreeFlags & 18874368) !== 0)
      for (t = t.child; t !== null; ) {
        if (t.tag !== 22 || t.memoizedState === null) {
          if (t.tag === 30 && (t.flags & 18874368) !== 0) {
            var e = t.stateNode;
            e.paired !== null && (e.paired = null, Nn(t.child, !1));
          }
          Ic(t);
        }
        t = t.sibling;
      }
  }
  function nr(t) {
    if (t.tag === 30)
      t.stateNode.paired = null, Nn(t.child, !1), Ic(t);
    else if ((t.subtreeFlags & 33554432) !== 0)
      for (t = t.child; t !== null; )
        nr(t), t = t.sibling;
    else Ic(t);
  }
  function Lg(t) {
    for (t = t.child; t !== null; )
      t.tag === 30 ? Nn(t.child, !1) : (t.subtreeFlags & 33554432) !== 0 && Lg(t), t = t.sibling;
  }
  function Wc(t, e, n, a, r, u, h) {
    for (var b = !1; e !== null; ) {
      if (e.tag === 5) {
        var A = e.stateNode;
        if (u !== null && Be < u.length) {
          var _ = u[Be], k = Nf(A);
          (_.view || k.view) && (b = !0);
          var Z;
          if (Z = (t.flags & 4) === 0)
            if (k.clip) Z = !0;
            else {
              Z = _.rect;
              var R = k.rect;
              Z = Z.y !== R.y || Z.x !== R.x || Z.height !== R.height || Z.width !== R.width;
            }
          Z && (t.flags |= 4), k.abs ? k = !_.abs : (_ = _.rect, k = k.rect, k = _.height !== k.height || _.width !== k.width), k && (t.flags |= 32);
        } else t.flags |= 32;
        (t.flags & 4) !== 0 && Vy(
          A,
          Be === 0 ? n : n + "_" + Be,
          r
        ), b && (t.flags & 4) !== 0 || (zn === null && (zn = []), zn.push(
          A,
          Be === 0 ? a : a + "_" + Be,
          e.memoizedProps
        )), Be++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && h ? t.flags |= e.flags & 32 : Wc(
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
  function Bg(t, e) {
    for (t = t.child; t !== null; ) {
      if (t.tag === 30) {
        var n = t.memoizedProps, a = t.stateNode, r = Qn(n, a), u = Zn(n.default, n.update), h;
        h = t.memoizedState, t.memoizedState = null, a = t;
        var b = t.child;
        Be = 0, r = Wc(
          a,
          b,
          r,
          r,
          u,
          h,
          !1
        ), (t.flags & 4) !== 0 && r && sl(t, n.onUpdate);
      } else
        (t.subtreeFlags & 33554432) !== 0 && Bg(t);
      t = t.sibling;
    }
  }
  var ge = !1, Ht = !1, Rn = !1, $c = !1, Ug = typeof WeakSet == "function" ? WeakSet : Set, ye = null, Vn = !1, hs = !1, ir = !1, tf = !1;
  function ox(t, e, n) {
    if (t = t.containerInfo, Cf = gl, t = Ym(t), Gu(t)) {
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
            var b = 0, A = -1, _ = -1, k = 0, Z = 0, R = t, U = null;
            e: for (; ; ) {
              for (var rt; R !== a || u !== 0 && R.nodeType !== 3 || (A = b + u), R !== h || r !== 0 && R.nodeType !== 3 || (_ = b + r), R.nodeType === 3 && (b += R.nodeValue.length), (rt = R.firstChild) !== null; )
                U = R, R = rt;
              for (; ; ) {
                if (R === t) break e;
                if (U === a && ++k === u && (A = b), U === h && ++Z === r && (_ = b), (rt = R.nextSibling) !== null) break;
                R = U, U = R.parentNode;
              }
              R = rt;
            }
            a = A === -1 || _ === -1 ? null : { start: A, end: _ };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Mf = { focusedElem: t, selectionRange: a }, gl = !1, n = (n & 335544064) === n, ye = e, e = n ? 9270 : 1024; ye !== null; ) {
      if (t = ye, n && (a = t.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && Jc(a[u]);
      if (t.alternate === null && (t.flags & 2) !== 0)
        n && Rg(t), ar(n);
      else {
        if (t.tag === 22) {
          if (a = t.alternate, t.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Jc(a), ar(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && Rg(t), ar(n);
            continue;
          }
        }
        a = t.child, (t.subtreeFlags & e) !== 0 && a !== null ? (a.return = t, ye = a) : (n && jg(t), ar(n));
      }
    }
    Ke = null;
  }
  function ar(t) {
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
              kt(e, e.return, b);
            }
          }
          break;
        case 3:
          if ((r & 1024) !== 0) {
            if (a = e.stateNode.containerInfo, n = a.nodeType, n === 9)
              _f(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  _f(a);
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
  function Hg(t, e, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        _n(t, n), a & 4 && fs(5, n);
        break;
      case 1:
        if (_n(t, n), a & 4)
          if (t = n.stateNode, e === null)
            try {
              t.componentDidMount();
            } catch (h) {
              kt(n, n.return, h);
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
              kt(
                n,
                n.return,
                h
              );
            }
          }
        a & 64 && Mg(n), a & 512 && On(n, n.return);
        break;
      case 3:
        if (_n(t, n), a & 64 && (t = n.updateQueue, t !== null)) {
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
            gp(t, e);
          } catch (h) {
            kt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && a & 4 && Ng(n);
      case 26:
      case 5:
        _n(t, n), e === null && a & 4 && Xc(n), a & 512 && On(n, n.return);
        break;
      case 12:
        _n(t, n);
        break;
      case 31:
        _n(t, n), a & 4 && qg(t, n);
        break;
      case 13:
        _n(t, n), a & 4 && Xg(t, n), a & 64 && (t = n.memoizedState, t !== null && (t = t.dehydrated, t !== null && (n = bx.bind(
          null,
          n
        ), tE(t, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ge, !a) {
          var u = e !== null && e.memoizedState !== null || Ht;
          e = ge, r = Ht, ge = a, (Ht = u) && !r ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), gn(
            t,
            n,
            a
          )) : _n(t, n), ge = e, Ht = r;
        }
        break;
      case 30:
        _n(t, n), a & 512 && On(n, n.return);
        break;
      case 7:
        a & 512 && On(n, n.return);
      default:
        _n(t, n);
    }
  }
  function ef(t, e) {
    for (t = t.child; t !== null; )
      Gg(t, e), t = t.sibling;
  }
  function Gg(t, e) {
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
        } catch (A) {
          kt(t, t.return, A);
        }
        nf(t, e);
        break;
      case 6:
        try {
          t.stateNode.nodeValue = e ? "" : t.memoizedProps, Lt = !0;
        } catch (A) {
          kt(t, t.return, A);
        }
        break;
      case 18:
        try {
          var b = t.stateNode;
          e ? Ry(b, !0) : Ry(t.stateNode, !1);
        } catch (A) {
          kt(t, t.return, A);
        }
        break;
      case 22:
      case 23:
        t.memoizedState === null && ef(t, e);
        break;
      default:
        ef(t, e);
    }
  }
  function nf(t, e) {
    if (t.subtreeFlags & 67108864)
      for (t = t.child; t !== null; ) {
        t: {
          var n = t, a = e;
          switch (n.tag) {
            case 4:
              Gg(n, a);
              break t;
            case 22:
              n.memoizedState === null && nf(n, a);
              break t;
            default:
              nf(n, a);
          }
        }
        t = t.sibling;
      }
  }
  function kg(t) {
    var e = t.alternate;
    e !== null && (t.alternate = null, kg(e)), t.child = null, t.deletions = null, t.sibling = null, t.tag === 5 && (e = t.stateNode, e !== null && ro(e)), t.stateNode = null, t.return = null, t.dependencies = null, t.memoizedProps = null, t.memoizedState = null, t.pendingProps = null, t.stateNode = null, t.updateQueue = null;
  }
  var Wt = null, Ue = !1;
  function mn(t, e, n) {
    for (n = n.child; n !== null; )
      Yg(t, e, n), n = n.sibling;
  }
  function Yg(t, e, n) {
    if (Ye && typeof Ye.onCommitFiberUnmount == "function")
      try {
        Ye.onCommitFiberUnmount(Ll, n);
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
        Ht || xe(n, e), ds(n);
        var a = Wt, r = Ue;
        Oi(n.type) && (Wt = n.stateNode, Ue = !1), mn(
          t,
          e,
          n
        ), Zy(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Wt = a, Ue = r;
        break;
      case 5:
        Ht || xe(n, e), ds(n);
      case 6:
        if (n.tag === 6 && ds(n), a = Wt, r = Ue, Wt = null, mn(
          t,
          e,
          n
        ), Wt = a, Ue = r, Wt !== null)
          if (Ue)
            try {
              (Wt.nodeType === 9 ? Wt.body : Wt.nodeName === "HTML" ? Wt.ownerDocument.body : Wt).removeChild(n.stateNode), Lt = !0;
            } catch (u) {
              kt(
                n,
                e,
                u
              );
            }
          else
            try {
              Wt.removeChild(n.stateNode), Lt = !0;
            } catch (u) {
              kt(
                n,
                e,
                u
              );
            }
        break;
      case 18:
        Wt !== null && (Ue ? (t = Wt, Ny(
          t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t,
          n.stateNode
        ), yl(t)) : Ny(Wt, n.stateNode));
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
        Ht || (xe(n, e), a = n.stateNode, typeof a.componentWillUnmount == "function" && Dg(
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
  function qg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null))) {
      t = t.dehydrated;
      try {
        yl(t);
      } catch (n) {
        kt(e, e.return, n);
      }
    }
  }
  function Xg(t, e) {
    if (e.memoizedState === null && (t = e.alternate, t !== null && (t = t.memoizedState, t !== null && (t = t.dehydrated, t !== null))))
      try {
        yl(t);
      } catch (n) {
        kt(e, e.return, n);
      }
  }
  function rx(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return e === null && (e = t.stateNode = new Ug()), e;
      case 22:
        return t = t.stateNode, e = t._retryCache, e === null && (e = t._retryCache = new Ug()), e;
      default:
        throw Error(o(435, t.tag));
    }
  }
  function lr(t, e) {
    var n = rx(t);
    e.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var r = Sx.bind(null, t, a);
        a.then(r, r);
      }
    });
  }
  function Ne(t, e, n) {
    var a = e.deletions;
    if (a !== null)
      for (var r = 0; r < a.length; r++) {
        var u = a[r], h = t, b = e, A = b;
        t: for (; A !== null; ) {
          switch (A.tag) {
            case 27:
              if (Oi(A.type)) {
                Wt = A.stateNode, Ue = !1;
                break t;
              }
              break;
            case 5:
              Wt = A.stateNode, Ue = !1;
              break t;
            case 3:
            case 4:
              Wt = A.stateNode.containerInfo, Ue = !0;
              break t;
          }
          A = A.return;
        }
        if (Wt === null) throw Error(o(160));
        Yg(h, b, u), Wt = null, Ue = !1, h = u.alternate, h !== null && (h.return = null), u.return = null;
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null; )
        Qg(e, t, n), e = e.sibling;
  }
  var pn = null;
  function Qg(t, e, n) {
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
        Ne(e, t, n), Re(t), r & 4 && (xi(3, t, t.return), fs(3, t), xi(5, t, t.return));
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
                  t.stateNode = Dy(
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
                        a = r.getElementsByTagName("title")[0], (!a || a[Hl] || a[ve] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = r.createElement(e), r.head.insertBefore(
                          a,
                          r.querySelector("head > title")
                        )), Ee(a, e, n), a[ve] = t, me(a), e = a;
                        break t;
                      case "link":
                        if (u = Wy(
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
                        if (u = Wy(
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
                ge || kf(u, t.type, t.stateNode);
            else
              t.stateNode = Iy(
                u,
                n,
                t.memoizedProps
              );
          else
            r !== n ? (r === null ? (e = a.stateNode, e === null || Ht || e.parentNode.removeChild(e)) : r.count--, n === null ? ge || kf(u, t.type, t.stateNode) : Iy(u, n, t.memoizedProps)) : n === null && t.stateNode !== null && Qc(
              t,
              t.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Ne(e, t, n), Re(t), r & 512 && (Ht || a === null || xe(a, a.return)), a !== null && r & 4 && Qc(
          t,
          t.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Rn, Rn = !1, Ne(e, t, n), Rn = u, Re(t), r & 512 && (Ht || a === null || xe(a, a.return)), t.flags & 32) {
          e = t.stateNode;
          try {
            _a(e, ""), Lt = !0;
          } catch (k) {
            kt(t, t.return, k);
          }
        }
        r & 4 && t.stateNode != null && (e = t.memoizedProps, Qc(
          t,
          e,
          a !== null ? a.memoizedProps : e
        )), r & 1024 && ($c = !0);
        break;
      case 6:
        if (Ne(e, t, n), Re(t), r & 4) {
          if (t.stateNode === null)
            throw Error(o(162));
          e = t.memoizedProps, n = t.stateNode;
          try {
            n.nodeValue = e, Lt = !0;
          } catch (k) {
            kt(t, t.return, k);
          }
        }
        break;
      case 3:
        if (Lt = !1, Sr = null, u = pn, pn = xs(e.containerInfo), Ne(e, t, n), pn = u, Re(t), r & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            yl(e.containerInfo);
          } catch (k) {
            kt(t, t.return, k);
          }
        $c && ($c = !1, Zg(t)), Lt = !1;
        break;
      case 4:
        r = Rn, Rn = ge, a = dm(), u = pn, pn = xs(
          t.stateNode.containerInfo
        ), Ne(e, t, n), Re(t), pn = u, Lt && hs && (ir = !0), Lt = a, Rn = r;
        break;
      case 12:
        Ne(e, t, n), Re(t);
        break;
      case 31:
        Ne(e, t, n), Re(t), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 13:
        Ne(e, t, n), Re(t), t.child.flags & 8192 && t.memoizedState !== null != (a !== null && a.memoizedState !== null) && (rr = Me()), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 22:
        u = t.memoizedState !== null, h = a !== null && a.memoizedState !== null;
        var b = ge, A = Ht, _ = Rn;
        ge = b || u, Rn = _ || u, Ht = A || h, Ne(e, t, n), Ht = A, Rn = _, ge = b, Re(t), r & 8192 && (e = t.stateNode, e._visibility = u ? e._visibility & -2 : e._visibility | 1, !u || a === null || h || ge || Ht || (e = h || Ht, n = ge, a = Ht, ge = u || ge, Ht = e, Ei(t, 2), ge = n, Ht = a), !u && Rn || ef(t, u)), r & 4 && (e = t.updateQueue, e !== null && (n = e.retryQueue, n !== null && (e.retryQueue = null, lr(t, n))));
        break;
      case 19:
        Ne(e, t, n), Re(t), r & 4 && (e = t.updateQueue, e !== null && (t.updateQueue = null, lr(t, e)));
        break;
      case 30:
        r & 512 && (Ht || a === null || xe(a, a.return)), r = dm(), u = hs, h = (n & 335544064) === n, b = t.memoizedProps, hs = h && Zn(
          b.default,
          b.update
        ) !== "none", Ne(e, t, n), Re(t), h && a !== null && Lt && (t.flags |= 4), hs = u, Lt = r;
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
          if (zg(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var r = t.return; r !== null; ) {
          if (qc(r)) {
            var u = r.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (Yc(r)) break;
          r = r.return;
        }
        var h = a;
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var b = n.stateNode, A = Zc(t);
            $o(
              t,
              A,
              b,
              h
            );
            break;
          case 5:
            var _ = n.stateNode;
            n.flags & 32 && (_a(_, ""), n.flags &= -33);
            var k = Zc(t);
            $o(
              t,
              k,
              _,
              h
            );
            break;
          case 3:
          case 4:
            var Z = n.stateNode.containerInfo, R = Zc(t);
            Kc(
              t,
              R,
              Z,
              h
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (U) {
        kt(t, t.return, U);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function Zg(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t;
        Zg(e), e.tag === 5 && e.flags & 1024 && (e = e.stateNode, gl = !0, e.reset(), gl = !1), t = t.sibling;
      }
  }
  function $a(t, e) {
    if (e.subtreeFlags & 9270)
      for (e = e.child; e !== null; )
        Kg(e, t), e = e.sibling;
    else Bg(e);
  }
  function Kg(t, e) {
    var n = t.alternate;
    if (n === null) Pc(t, !1);
    else
      switch (t.tag) {
        case 3:
          if (tf = Vn = !1, Vg(), $a(e, t), !Vn && !ir) {
            if (t = zn, t !== null)
              for (var a = 0; a < t.length; a += 3) {
                n = t[a];
                var r = t[a + 1];
                _y(n, t[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), tf = !0;
          }
          zn = null;
          break;
        case 5:
          $a(e, t);
          break;
        case 4:
          a = Vn, Vn = !1, $a(e, t), Vn && (ir = !0), Vn = a;
          break;
        case 22:
          t.memoizedState === null && (n.memoizedState !== null ? Pc(t, !1) : $a(e, t));
          break;
        case 30:
          a = Vn, r = Vg(), Vn = !1, $a(e, t), Vn && (t.flags |= 4);
          var u = t.memoizedProps, h = t.stateNode;
          e = Qn(u, h), h = Qn(n.memoizedProps, h);
          var b = Zn(u.default, u.update);
          b === "none" ? e = !1 : (u = n.memoizedState, n.memoizedState = null, n = t.child, Be = 0, e = Wc(
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
          ), zn = r) : r !== null && (r.push.apply(r, zn), zn = r), Vn = (t.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          $a(e, t);
      }
  }
  function _n(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null; )
        Hg(t, e.alternate, e), e = e.sibling;
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
          typeof r.componentWillUnmount == "function" && Dg(
            n,
            n.return,
            r
          ), Ei(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Zy(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          xe(n, n.return), n.tag !== 5 && n.tag !== 27 || ds(n), Ei(
            n,
            a
          );
          break;
        case 6:
          ds(n);
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
              kt(a, a.return, k);
            }
          if (a = u, r = a.updateQueue, r !== null) {
            var A = a.stateNode;
            try {
              var _ = r.shared.hiddenCallbacks;
              if (_ !== null)
                for (r.shared.hiddenCallbacks = null, r = 0; r < _.length; r++)
                  pp(_[r], A);
            } catch (k) {
              kt(a, a.return, k);
            }
          }
          b && h & 64 && Mg(u), On(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Ng(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Og(u), gn(
            r,
            u,
            n
          ), b && a === null && h & 4 && Xc(u), On(u, u.return);
          break;
        case 6:
          Og(u);
          break;
        case 26:
          A = u.stateNode, u.memoizedState !== null || A === null || ge || kf(
            xs(A.ownerDocument),
            u.type,
            A
          ), gn(
            r,
            u,
            n
          ), b && a === null && h & 4 && Xc(u), On(u, u.return);
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
          ), b && h & 4 && qg(r, u);
          break;
        case 13:
          gn(
            r,
            u,
            n
          ), b && h & 4 && Xg(r, u);
          break;
        case 22:
          u.memoizedState === null && gn(
            r,
            u,
            n
          ), On(u, u.return);
          break;
        case 30:
          gn(
            r,
            u,
            n
          ), On(u, u.return);
          break;
        case 7:
          On(u, u.return);
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
  function af(t, e) {
    var n = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (n = t.memoizedState.cachePool.pool), t = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== n && (t != null && t.refCount++, n != null && Wl(n));
  }
  function lf(t, e) {
    t = null, e.alternate !== null && (t = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== t && (e.refCount++, t != null && Wl(t));
  }
  function un(t, e, n, a) {
    var r = (n & 335544064) === n;
    if (e.subtreeFlags & (r ? 10262 : 10256))
      for (e = e.child; e !== null; )
        Pg(
          t,
          e,
          n,
          a
        ), e = e.sibling;
    else r && Lg(e);
  }
  function Pg(t, e, n, a) {
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
        ), r && tf && (t = t.containerInfo, t = t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, t.style.viewTransitionName === "root" && (t.style.viewTransitionName = ""), t = t.ownerDocument.documentElement, t !== null && t.style.viewTransitionName === "none" && (t.style.viewTransitionName = "")), u & 2048 && (u = null, e.alternate !== null && (u = e.alternate.memoizedState.cache), e = e.memoizedState.cache, e !== u && (e.refCount++, u != null && Wl(u)));
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
            var h = e.memoizedProps, b = h.id, A = h.onPostCommit;
            typeof A == "function" && A(
              b,
              e.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (_) {
            kt(e, e.return, _);
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
        ))), u & 2048 && af(b, e);
        break;
      case 24:
        un(
          t,
          e,
          n,
          a
        ), u & 2048 && lf(e.alternate, e);
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
      var u = t, h = e, b = n, A = a, _ = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          tl(
            u,
            h,
            b,
            A,
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
            A,
            r
          ) : ms(
            u,
            h
          ) : (k._visibility |= 2, tl(
            u,
            h,
            b,
            A,
            r
          )), r && _ & 2048 && af(
            h.alternate,
            h
          );
          break;
        case 24:
          tl(
            u,
            h,
            b,
            A,
            r
          ), r && _ & 2048 && lf(h.alternate, h);
          break;
        default:
          tl(
            u,
            h,
            b,
            A,
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
            ms(n, a), r & 2048 && af(
              a.alternate,
              a
            );
            break;
          case 24:
            ms(n, a), r & 2048 && lf(a.alternate, a);
            break;
          default:
            ms(n, a);
        }
        e = e.sibling;
      }
  }
  var ra = 8192;
  function ua(t, e, n) {
    if (t.subtreeFlags & ra)
      for (t = t.child; t !== null; )
        Fg(
          t,
          e,
          n
        ), t = t.sibling;
  }
  function Fg(t, e, n) {
    switch (t.tag) {
      case 26:
        ua(
          t,
          e,
          n
        ), t.flags & ra && (t.memoizedState !== null ? mE(
          n,
          pn,
          t.memoizedState,
          t.memoizedProps
        ) : (t = t.stateNode, (e & 335544128) === e && nv(n, t)));
        break;
      case 5:
        ua(
          t,
          e,
          n
        ), t.flags & ra && (t = t.stateNode, (e & 335544128) === e && nv(n, t));
        break;
      case 3:
      case 4:
        var a = pn;
        pn = xs(t.stateNode.containerInfo), ua(
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
  function Jg(t) {
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
          ye = a, Wg(
            a,
            t
          );
        }
      Jg(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Ig(t), t = t.sibling;
  }
  function Ig(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ps(t), t.flags & 2048 && xi(9, t, t.return);
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
          ye = a, Wg(
            a,
            t
          );
        }
      Jg(t);
    }
    for (t = t.child; t !== null; ) {
      switch (e = t, e.tag) {
        case 0:
        case 11:
        case 15:
          xi(8, e, e.return), sr(e);
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
  function Wg(t, e) {
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
          Wl(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, ye = a;
      else
        t: for (n = t; ye !== null; ) {
          a = ye;
          var r = a.sibling, u = a.return;
          if (kg(a), a === n) {
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
  var ux = {
    getCacheForType: function(t) {
      var e = be(le), n = e.data.get(t);
      return n === void 0 && (n = t(), e.data.set(t, n)), n;
    },
    cacheSignal: function() {
      return be(le).controller.signal;
    }
  }, cx = typeof WeakMap == "function" ? WeakMap : Map, Bt = 0, Kt = null, Nt = null, Vt = 0, Gt = 0, Pe = null, Ai = !1, el = !1, sf = !1, ei = 0, ie = 0, wi = 0, ca = 0, or = 0, Fe = 0, nl = 0, gs = null, He = null, of = !1, rr = 0, $g = 0, ur = 1 / 0, cr = null, Ci = null, $t = 0, yn = null, fa = null, jn = 0, rf = 0, uf = null, ty = null, il = null, al = null, ll = null, ys = 0, fr = null;
  function Je() {
    return (Bt & 2) !== 0 && Vt !== 0 ? Vt & -Vt : st.T !== null ? bf() : im();
  }
  function ey() {
    if (Fe === 0)
      if ((Vt & 536870912) === 0 || Dt) {
        var t = ao;
        ao <<= 1, (ao & 3932160) === 0 && (ao = 262144), Fe = t;
      } else Fe = 536870912;
    return t = Se.current, t !== null && (t.flags |= 32), Fe;
  }
  function sl(t, e) {
    if (e != null) {
      var n = t.stateNode, a = n.ref;
      a === null && (a = n.ref = jy(
        Qn(t.memoizedProps, n)
      )), al === null && (al = []), al.push(e.bind(null, a));
    }
  }
  function Ge(t, e, n) {
    (t === Kt && (Gt === 2 || Gt === 9) || t.cancelPendingCommit !== null) && (ol(t, 0), Mi(
      t,
      Vt,
      Fe,
      !1
    )), Ul(t, n), ((Bt & 2) === 0 || t !== Kt) && (t === Kt && ((Bt & 2) === 0 && (ca |= n), ie === 4 && Mi(
      t,
      Vt,
      Fe,
      !1
    )), Ln(t));
  }
  function ny(t, e, n) {
    if ((Bt & 6) !== 0) throw Error(o(327));
    var a = !n && (e & 127) === 0 && (e & t.expiredLanes) === 0 || Bl(t, e), r = a ? hx(t, e) : ff(t, e, !0), u = a;
    do {
      if (r === 0) {
        el && !a && Mi(t, e, 0, !1);
        break;
      } else {
        if (n = t.current.alternate, u && !fx(n)) {
          r = ff(t, e, !1), u = !1;
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
              var A = b.current.memoizedState.isDehydrated;
              if (A && (ol(b, h).flags |= 256), h = ff(
                b,
                h,
                !1
              ), h !== 2 && h !== 6) {
                if (sf && !A) {
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
          if ((e & 62914560) === e && (r = rr + 300 - Me(), 10 < r)) {
            if (Mi(
              a,
              e,
              Fe,
              !Ai
            ), so(a, 0, !0) !== 0) break t;
            jn = e, a.timeoutHandle = zf(
              iy.bind(
                null,
                a,
                n,
                He,
                cr,
                of,
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
          iy(
            a,
            n,
            He,
            cr,
            of,
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
  function iy(t, e, n, a, r, u, h, b, A, _, k, Z, R, U) {
    t.timeoutHandle = -1;
    var rt = e.subtreeFlags, pt = (u & 335544064) === u;
    if (Z = null, (pt || rt & 8192 || (rt & 16785408) === 16785408) && (Z = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Cn
    }, Ke = null, Fg(
      e,
      u,
      Z
    ), pt && (rt = Z, pt = t.containerInfo, pt = (pt.nodeType === 9 ? pt : pt.ownerDocument).__reactViewTransition, pt != null && (rt.count++, rt.waitingForViewTransition = !0, rt = ws.bind(rt), pt.finished.then(rt, rt))), rt = (u & 62914560) === u ? rr - Me() : (u & 4194048) === u ? $g - Me() : 0, rt = pE(
      Z,
      rt
    ), rt !== null)) {
      jn = u, t.cancelPendingCommit = rt(
        fy.bind(
          null,
          t,
          e,
          u,
          n,
          a,
          r,
          h,
          b,
          A,
          _,
          k,
          Z,
          null,
          R,
          U
        )
      ), Mi(t, u, h, !_);
      return;
    }
    fy(
      t,
      e,
      u,
      n,
      a,
      r,
      h,
      b,
      A,
      _,
      k,
      Z
    );
  }
  function fx(t) {
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
    e = Wh(t, e), e &= ~or, e &= ~ca, t.suspendedLanes |= e, t.pingedLanes &= ~e, a && (t.warmLanes |= e), a = t.expirationTimes;
    for (var r = e; 0 < r; ) {
      var u = 31 - qe(r), h = 1 << u;
      a[u] = -1, r &= ~h;
    }
    n !== 0 && tm(t, n, e);
  }
  function dr() {
    return (Bt & 6) === 0 ? (vs(0), !1) : !0;
  }
  function cf() {
    if (Nt !== null) {
      if (Gt === 0)
        var t = Nt.return;
      else
        t = Nt, Fn = Wi = null, yc(t), Ka = null, es = 0, t = Nt;
      for (; t !== null; )
        Cg(t.alternate, t), t = t.return;
      Nt = null;
    }
  }
  function ol(t, e) {
    var n = t.timeoutHandle;
    return n !== -1 && (t.timeoutHandle = -1, jx(n)), n = t.cancelPendingCommit, n !== null && (t.cancelPendingCommit = null, n()), jn = 0, cf(), Kt = t, Nt = n = Kn(t.current, null), Vt = e, Gt = 0, Pe = null, Ai = !1, el = Bl(t, e), sf = !1, nl = Fe = or = ca = wi = ie = 0, He = gs = null, of = !1, ei = Wh(t, e), So(), n;
  }
  function ay(t, e) {
    wt = null, st.H = Qo, e === Za || e === No ? (e = fp(), Gt = 3) : e === ac ? (e = fp(), Gt = 4) : Gt = e === Rc ? 8 : e !== null && typeof e == "object" && typeof e.then == "function" ? 6 : 1, Pe = e, Nt === null && (ie = 1, Zo(
      t,
      ln(e, t.current)
    ));
  }
  function ly() {
    var t = Se.current;
    return t === null ? !0 : (Vt & 4194048) === Vt ? De === null : (Vt & 62914560) === Vt || (Vt & 536870912) !== 0 ? t === De : !1;
  }
  function sy() {
    var t = st.H;
    return st.H = Qo, t === null ? Qo : t;
  }
  function oy() {
    var t = st.A;
    return st.A = ux, t;
  }
  function hr() {
    ie = 4, Ai || (Vt & 4194048) !== Vt && Se.current !== null || (el = !0), (wi & 134217727) === 0 && (ca & 134217727) === 0 || Kt === null || Mi(
      Kt,
      Vt,
      Fe,
      !1
    );
  }
  function ff(t, e, n) {
    var a = Bt;
    Bt |= 2;
    var r = sy(), u = oy();
    (Kt !== t || Vt !== e) && (cr = null, ol(t, e)), e = !1;
    var h = ie;
    t: do
      try {
        if (Gt !== 0 && Nt !== null) {
          var b = Nt, A = Pe;
          switch (Gt) {
            case 8:
              cf(), h = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Se.current === null && (e = !0);
              var _ = Gt;
              if (Gt = 0, Pe = null, rl(t, b, A, _), n && el) {
                h = 0;
                break t;
              }
              break;
            default:
              _ = Gt, Gt = 0, Pe = null, rl(t, b, A, _);
          }
        }
        dx(), h = ie;
        break;
      } catch (k) {
        ay(t, k);
      }
    while (!0);
    return e && t.shellSuspendCounter++, Fn = Wi = null, Bt = a, st.H = r, st.A = u, Nt === null && (Kt = null, Vt = 0, So()), h;
  }
  function dx() {
    for (; Nt !== null; ) ry(Nt);
  }
  function hx(t, e) {
    var n = Bt;
    Bt |= 2;
    var a = sy(), r = oy();
    Kt !== t || Vt !== e ? (cr = null, ur = Me() + 500, ol(t, e)) : el = Bl(
      t,
      e
    );
    t: do
      try {
        if (Gt !== 0 && Nt !== null) {
          e = Nt;
          var u = Pe;
          e: switch (Gt) {
            case 1:
              Gt = 0, Pe = null, rl(t, e, u, 1);
              break;
            case 2:
            case 9:
              if (up(u)) {
                Gt = 0, Pe = null, uy(e);
                break;
              }
              e = function() {
                Gt !== 2 && Gt !== 9 || Kt !== t || (Gt = 7), Ln(t);
              }, u.then(e, e);
              break t;
            case 3:
              Gt = 7;
              break t;
            case 4:
              Gt = 5;
              break t;
            case 7:
              up(u) ? (Gt = 0, Pe = null, uy(e)) : (Gt = 0, Pe = null, rl(t, e, u, 7));
              break;
            case 5:
              var h = null;
              switch (Nt.tag) {
                case 26:
                  h = Nt.memoizedState;
                case 5:
                case 27:
                  var b = Nt;
                  if (h ? tv(h) : b.stateNode.complete) {
                    Gt = 0, Pe = null;
                    var A = b.sibling;
                    if (A !== null) Nt = A;
                    else {
                      var _ = b.return;
                      _ !== null ? (Nt = _, mr(_)) : Nt = null;
                    }
                    break e;
                  }
              }
              Gt = 0, Pe = null, rl(t, e, u, 5);
              break;
            case 6:
              Gt = 0, Pe = null, rl(t, e, u, 6);
              break;
            case 8:
              cf(), ie = 6;
              break t;
            default:
              throw Error(o(462));
          }
        }
        mx();
        break;
      } catch (k) {
        ay(t, k);
      }
    while (!0);
    return Fn = Wi = null, st.H = a, st.A = r, Bt = n, Nt !== null ? 0 : (Kt = null, Vt = 0, So(), ie);
  }
  function mx() {
    for (; Nt !== null && !pu(); )
      ry(Nt);
  }
  function ry(t) {
    var e = Ag(t.alternate, t, ei);
    t.memoizedProps = t.pendingProps, e === null ? mr(t) : Nt = e;
  }
  function uy(t) {
    var e = t, n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = yg(
          n,
          e,
          e.pendingProps,
          e.type,
          void 0,
          Vt
        );
        break;
      case 11:
        e = yg(
          n,
          e,
          e.pendingProps,
          e.type.render,
          e.ref,
          Vt
        );
        break;
      case 5:
        yc(e);
        var a = e;
        a === pe && (Dt ? (Co(a), a.tag === 5 && a.stateNode != null && (Ft = a.stateNode)) : (Co(a), Dt = !0));
      default:
        Cg(n, e), e = Nt = Wm(e, ei), e = Ag(n, e, ei);
    }
    t.memoizedProps = t.pendingProps, e === null ? mr(t) : Nt = e;
  }
  function rl(t, e, n, a) {
    Fn = Wi = null, yc(e), Ka = null, es = 0;
    var r = e.return;
    try {
      if (ex(
        t,
        r,
        e,
        n,
        Vt
      )) {
        ie = 1, Zo(
          t,
          ln(n, t.current)
        ), Nt = null;
        return;
      }
    } catch (u) {
      if (r !== null) throw Nt = r, u;
      ie = 1, Zo(
        t,
        ln(n, t.current)
      ), Nt = null;
      return;
    }
    e.flags & 32768 ? (Dt || a === 1 ? t = !0 : el || (Vt & 536870912) !== 0 ? t = !1 : (Ai = t = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Se.current, a !== null && a.tag === 13 && (a.flags |= 16384))), cy(e, t)) : mr(e);
  }
  function mr(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        cy(
          e,
          Ai
        );
        return;
      }
      t = e.return;
      var n = lx(
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
  function cy(t, e) {
    do {
      var n = sx(t.alternate, t);
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
  function fy(t, e, n, a, r, u, h, b, A, _, k, Z) {
    t.cancelPendingCommit = null;
    do
      pr();
    while ($t !== 0);
    if ((Bt & 6) !== 0) throw Error(o(327));
    if (e !== null) {
      if (e === t.current) throw Error(o(177));
      t === Kt && (Nt = Kt = null, Vt = 0), fa = e, yn = t, jn = n, uf = r, ty = a, px(
        t,
        e,
        n,
        h,
        b,
        A,
        Z
      );
    }
  }
  function px(t, e, n, a, r, u, h) {
    var b = e.lanes | e.childLanes;
    if (rf = b, b |= Qu, kS(
      t,
      n,
      b,
      a,
      r,
      u
    ), al = null, (n & 335544064) === n ? (ll = qT(t), a = 10262) : (ll = null, a = 10256), (e.subtreeFlags & a) !== 0 || (e.flags & a) !== 0 ? (t.callbackNode = null, t.callbackPriority = 0, Tx(qi, function() {
      return pf(), null;
    })) : (t.callbackNode = null, t.callbackPriority = 0), tr = !1, a = (e.flags & 13878) !== 0, (e.subtreeFlags & 13878) !== 0 || a) {
      a = st.T, st.T = null, r = J.p, J.p = 2, u = Bt, Bt |= 4;
      try {
        ox(t, e, n);
      } finally {
        Bt = u, J.p = r, st.T = a;
      }
    }
    $t = 1, tr ? il = kx(
      h,
      t.containerInfo,
      ll,
      df,
      hf,
      yx,
      mf,
      pf,
      gx
    ) : (df(), hf(), mf());
  }
  function gx(t) {
    if ($t !== 0) {
      var e = yn.onRecoverableError;
      e(t, { componentStack: null });
    }
  }
  function yx() {
    $t === 3 && ($t = 0, Kg(fa, yn), $t = 4);
  }
  function df() {
    if ($t === 1) {
      $t = 0;
      var t = yn, e = fa, n = jn, a = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || a) {
        a = st.T, st.T = null;
        var r = J.p;
        J.p = 2;
        var u = Bt;
        Bt |= 4;
        try {
          hs = ir = !1, Qg(e, t, n), n = Mf;
          var h = Ym(t.containerInfo), b = n.focusedElem, A = n.selectionRange;
          if (h !== b && b && b.ownerDocument && km(
            b.ownerDocument.documentElement,
            b
          )) {
            if (A !== null && Gu(b)) {
              var _ = A.start, k = A.end;
              if (k === void 0 && (k = _), "selectionStart" in b)
                b.selectionStart = _, b.selectionEnd = Math.min(
                  k,
                  b.value.length
                );
              else {
                var Z = b.ownerDocument || document, R = Z && Z.defaultView || window;
                if (R.getSelection) {
                  var U = R.getSelection(), rt = b.textContent.length, pt = Math.min(A.start, rt), Ct = A.end === void 0 ? pt : Math.min(A.end, rt);
                  !U.extend && pt > Ct && (h = Ct, Ct = pt, pt = h);
                  var V = Gm(
                    b,
                    pt
                  ), M = Gm(
                    b,
                    Ct
                  );
                  if (V && M && (U.rangeCount !== 1 || U.anchorNode !== V.node || U.anchorOffset !== V.offset || U.focusNode !== M.node || U.focusOffset !== M.offset)) {
                    var B = Z.createRange();
                    B.setStart(V.node, V.offset), U.removeAllRanges(), pt > Ct ? (U.addRange(B), U.extend(M.node, M.offset)) : (B.setEnd(M.node, M.offset), U.addRange(B));
                  }
                }
              }
            }
            for (Z = [], U = b; U = U.parentNode; )
              U.nodeType === 1 && Z.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof b.focus == "function" && b.focus(), b = 0; b < Z.length; b++) {
              var Q = Z[b];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          gl = !!Cf, Mf = Cf = null;
        } finally {
          Bt = u, J.p = r, st.T = a;
        }
      }
      t.current = e, $t = 2;
    }
  }
  function hf() {
    if ($t === 2) {
      $t = 0;
      var t = yn, e = fa, n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        n = st.T, st.T = null;
        var a = J.p;
        J.p = 2;
        var r = Bt;
        Bt |= 4;
        try {
          Hg(t, e.alternate, e);
        } finally {
          Bt = r, J.p = a, st.T = n;
        }
      }
      $t = 3;
    }
  }
  function mf() {
    if ($t === 4 || $t === 3) {
      $t = 0;
      var t = il;
      il = null, gu();
      var e = yn, n = fa, a = jn, r = ty, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? $t = 5 : ($t = 0, fa = yn = null, dy(e, e.pendingLanes)), u = e.pendingLanes, u === 0 && (Ci = null), xu(a), n = n.stateNode, Ye && typeof Ye.onCommitFiberRoot == "function")
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
        n = st.T, u = J.p, J.p = 2, st.T = null;
        try {
          for (var h = e.onRecoverableError, b = 0; b < r.length; b++) {
            var A = r[b];
            h(A.value, {
              componentStack: A.stack
            });
          }
        } finally {
          st.T = n, J.p = u;
        }
      }
      if (r = al, h = ll, ll = null, r !== null && (al = null, h === null && (h = []), t !== null))
        for (A = 0; A < r.length; A++)
          n = (0, r[A])(
            h
          ), n !== void 0 && t.finished.finally(n);
      (jn & 3) !== 0 && pr(), Ln(e), u = e.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? e === fr ? ys++ : (ys = 0, fr = e) : (ys = 0, fr = null), vs(0);
    }
  }
  function dy(t, e) {
    (t.pooledCacheLanes &= e) === 0 && (e = t.pooledCache, e != null && (t.pooledCache = null, Wl(e)));
  }
  function pr() {
    return il !== null && (il.skipTransition(), il = null), df(), hf(), mf(), pf();
  }
  function pf() {
    if ($t !== 5) return !1;
    var t = yn, e = rf;
    rf = 0;
    var n = xu(jn), a = st.T, r = J.p;
    try {
      J.p = 32 > n ? 32 : n, st.T = null, n = uf, uf = null;
      var u = yn, h = jn;
      if ($t = 0, fa = yn = null, jn = 0, (Bt & 6) !== 0) throw Error(o(331));
      var b = Bt;
      if (Bt |= 4, Ig(u.current), Pg(
        u,
        u.current,
        h,
        n
      ), Bt = b, vs(0, !1), Ye && typeof Ye.onPostCommitFiberRoot == "function")
        try {
          Ye.onPostCommitFiberRoot(Ll, u);
        } catch {
        }
      return !0;
    } finally {
      J.p = r, st.T = a, dy(t, e);
    }
  }
  function hy(t, e, n) {
    e = ln(n, e), e = Nc(t.stateNode, e, 2), t = vi(t, e, 2), t !== null && (Ul(t, 2), Ln(t));
  }
  function kt(t, e, n) {
    if (t.tag === 3)
      hy(t, t, n);
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          hy(
            e,
            t,
            n
          );
          break;
        } else if (e.tag === 1) {
          var a = e.stateNode;
          if (typeof e.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ci === null || !Ci.has(a))) {
            t = ln(n, t), n = ug(2), a = vi(e, n, 2), a !== null && (cg(
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
  function gf(t, e, n) {
    var a = t.pingCache;
    if (a === null) {
      a = t.pingCache = new cx();
      var r = /* @__PURE__ */ new Set();
      a.set(e, r);
    } else
      r = a.get(e), r === void 0 && (r = /* @__PURE__ */ new Set(), a.set(e, r));
    r.has(n) || (sf = !0, r.add(n), t = vx.bind(null, t, e, n), e.then(t, t));
  }
  function vx(t, e, n) {
    var a = t.pingCache;
    a !== null && a.delete(e), t.pingedLanes |= t.suspendedLanes & n, t.warmLanes &= ~n, Kt === t && (Vt & n) === n && ((ie === 4 || ie === 3 && (Vt & 62914560) === Vt && 300 > Me() - rr) && (Bt & 2) === 0 ? ol(t, 0) : or |= n, nl === Vt && (nl = 0)), Ln(t);
  }
  function my(t, e) {
    e === 0 && (e = $h()), t = Fi(t, e), t !== null && (Ul(t, e), Ln(t));
  }
  function bx(t) {
    var e = t.memoizedState, n = 0;
    e !== null && (n = e.retryLane), my(t, n);
  }
  function Sx(t, e) {
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
    a !== null && a.delete(e), my(t, n);
  }
  function Tx(t, e) {
    return Nl(t, e);
  }
  var ul = null, cl = null, yf = !1, gr = !1, vf = !1, Di = 0;
  function Ln(t) {
    t !== cl && t.next === null && (cl === null ? ul = cl = t : cl = cl.next = t), gr = !0, yf || (yf = !0, Ex());
  }
  function vs(t, e) {
    if (!vf && gr) {
      vf = !0;
      do
        for (var n = !1, a = ul; a !== null; ) {
          if (t !== 0) {
            var r = a.pendingLanes;
            if (r === 0) var u = 0;
            else {
              var h = a.suspendedLanes, b = a.pingedLanes;
              u = (1 << 31 - qe(42 | t) + 1) - 1, u &= r & ~(h & ~b), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, vy(a, u));
          } else
            u = Vt, u = so(
              a,
              a === Kt ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Bl(a, u) || (n = !0, vy(a, u));
          a = a.next;
        }
      while (n);
      vf = !1;
    }
  }
  function xx() {
    py();
  }
  function py() {
    gr = yf = !1;
    var t = 0;
    Di !== 0 && _x() && (t = Di);
    for (var e = Me(), n = null, a = ul; a !== null; ) {
      var r = a.next, u = gy(a, e);
      u === 0 ? (a.next = null, n === null ? ul = r : n.next = r, r === null && (cl = n)) : (n = a, (t !== 0 || (u & 3) !== 0) && (gr = !0)), a = r;
    }
    $t !== 0 && $t !== 5 || vs(t), Di !== 0 && (Di = 0);
  }
  function gy(t, e) {
    for (var n = t.suspendedLanes, a = t.pingedLanes, r = t.expirationTimes, u = t.pendingLanes & -62914561; 0 < u; ) {
      var h = 31 - qe(u), b = 1 << h, A = r[h];
      A === -1 ? ((b & n) === 0 || (b & a) !== 0) && (r[h] = GS(b, e)) : A <= e && (t.expiredLanes |= b), u &= ~b;
    }
    if (e = Kt, n = Vt, n = so(
      t,
      t === e ? n : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a = t.callbackNode, n === 0 || t === e && (Gt === 2 || Gt === 9) || t.cancelPendingCommit !== null)
      return a !== null && a !== null && Rl(a), t.callbackNode = null, t.callbackPriority = 0;
    if ((n & 3) === 0 || Bl(t, n)) {
      if (e = n & -n, e === t.callbackPriority) return e;
      switch (a !== null && Rl(a), xu(n)) {
        case 2:
        case 8:
          n = _l;
          break;
        case 32:
          n = qi;
          break;
        case 268435456:
          n = jl;
          break;
        default:
          n = qi;
      }
      return a = yy.bind(null, t), n = Nl(n, a), t.callbackPriority = e, t.callbackNode = n, e;
    }
    return a !== null && a !== null && Rl(a), t.callbackPriority = 2, t.callbackNode = null, 2;
  }
  function yy(t, e) {
    if ($t !== 0 && $t !== 5)
      return t.callbackNode = null, t.callbackPriority = 0, null;
    var n = t.callbackNode;
    if (pr() && t.callbackNode !== n)
      return null;
    var a = Vt;
    return a = so(
      t,
      t === Kt ? a : 0,
      t.cancelPendingCommit !== null || t.timeoutHandle !== -1
    ), a === 0 ? null : (ny(t, a, e), gy(t, Me()), t.callbackNode != null && t.callbackNode === n ? yy.bind(null, t) : null);
  }
  function vy(t, e) {
    if (pr()) return null;
    ny(t, e, !0);
  }
  function Ex() {
    Lx(function() {
      (Bt & 6) !== 0 ? Nl(
        Vl,
        xx
      ) : py();
    });
  }
  function bf() {
    if (Di === 0) {
      var t = ea;
      t === 0 && (t = io, io <<= 1, (io & 261888) === 0 && (io = 256)), Di = t;
    }
    return Di;
  }
  function by(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : fo(t);
  }
  function Ax(t, e, n, a, r) {
    if (e === "submit" && n && n.stateNode === r) {
      var u = by(
        (r[je] || null).action
      ), h = a.submitter;
      h && (e = (e = h[je] || null) ? by(e.formAction) : h.getAttribute("formAction"), e !== null && (u = e, h = null));
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
                if (Di !== 0) {
                  var A = new FormData(r, h);
                  Cc(
                    n,
                    {
                      pending: !0,
                      data: A,
                      method: r.method,
                      action: u
                    },
                    null,
                    A
                  );
                }
              } else
                typeof u == "function" && (b.preventDefault(), A = new FormData(r, h), Cc(
                  n,
                  {
                    pending: !0,
                    data: A,
                    method: r.method,
                    action: u
                  },
                  u,
                  A
                ));
            },
            currentTarget: r
          }
        ]
      });
    }
  }
  for (var Sf = 0; Sf < Xu.length; Sf++) {
    var Tf = Xu[Sf], wx = Tf.toLowerCase(), Cx = Tf[0].toUpperCase() + Tf.slice(1);
    hn(
      wx,
      "on" + Cx
    );
  }
  hn(Qm, "onAnimationEnd"), hn(Zm, "onAnimationIteration"), hn(Km, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(jT, "onTransitionRun"), hn(LT, "onTransitionStart"), hn(BT, "onTransitionCancel"), hn(Pm, "onTransitionEnd"), Ra("onMouseEnter", ["mouseout", "mouseover"]), Ra("onMouseLeave", ["mouseout", "mouseover"]), Ra("onPointerEnter", ["pointerout", "pointerover"]), Ra("onPointerLeave", ["pointerout", "pointerover"]), Zi(
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
  var bs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), Mx = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bs)
  );
  function Sy(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var a = t[n], r = a.event;
      a = a.listeners;
      t: {
        var u = void 0;
        if (e)
          for (var h = a.length - 1; 0 <= h; h--) {
            var b = a[h], A = b.instance, _ = b.currentTarget;
            if (b = b.listener, A !== u && r.isPropagationStopped())
              break t;
            u = b, r.currentTarget = _;
            try {
              u(r);
            } catch (k) {
              bo(k);
            }
            r.currentTarget = null, u = A;
          }
        else
          for (h = 0; h < a.length; h++) {
            if (b = a[h], A = b.instance, _ = b.currentTarget, b = b.listener, A !== u && r.isPropagationStopped())
              break t;
            u = b, r.currentTarget = _;
            try {
              u(r);
            } catch (k) {
              bo(k);
            }
            r.currentTarget = null, u = A;
          }
      }
    }
  }
  function Rt(t, e) {
    var n = e[lm];
    n === void 0 && (n = e[lm] = /* @__PURE__ */ new Set());
    var a = t + "__bubble";
    n.has(a) || (Ty(e, t, 2, !1), n.add(a));
  }
  function xf(t, e, n) {
    var a = 0;
    e && (a |= 4), Ty(
      n,
      t,
      a,
      e
    );
  }
  var yr = "_reactListening" + Math.random().toString(36).slice(2);
  function Ef(t) {
    if (!t[yr]) {
      t[yr] = !0, rm.forEach(function(n) {
        n !== "selectionchange" && (Mx.has(n) || xf(n, !1, t), xf(n, !0, t));
      });
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[yr] || (e[yr] = !0, xf("selectionchange", !1, e));
    }
  }
  function Ty(t, e, n, a) {
    switch (cv(e)) {
      case 2:
        var r = bE;
        break;
      case 8:
        r = SE;
        break;
      default:
        r = qf;
    }
    n = r.bind(
      null,
      e,
      n,
      t
    ), r = void 0, !zu || e !== "touchstart" && e !== "touchmove" && e !== "wheel" || (r = !0), a ? r !== void 0 ? t.addEventListener(e, n, {
      capture: !0,
      passive: r
    }) : t.addEventListener(e, n, !0) : r !== void 0 ? t.addEventListener(e, n, {
      passive: r
    }) : t.addEventListener(e, n, !1);
  }
  function Af(t, e, n, a, r) {
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
              var A = h.tag;
              if ((A === 3 || A === 4) && h.stateNode.containerInfo === r)
                return;
              h = h.return;
            }
          for (; b !== null; ) {
            if (h = Qi(b), h === null) return;
            if (A = h.tag, A === 5 || A === 6 || A === 26 || A === 27) {
              a = u = h;
              continue t;
            }
            b = b.parentNode;
          }
        }
        a = a.return;
      }
    Tm(function() {
      var _ = u, k = Du(n), Z = [];
      t: {
        var R = Fm.get(t);
        if (R !== void 0) {
          var U = go, rt = t;
          switch (t) {
            case "keypress":
              if (mo(n) === 0) break t;
            case "keydown":
            case "keyup":
              U = fT;
              break;
            case "focusin":
              rt = "focus", U = _u;
              break;
            case "focusout":
              rt = "blur", U = _u;
              break;
            case "beforeblur":
            case "afterblur":
              U = _u;
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
              U = Am;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = $S;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = gT;
              break;
            case Qm:
            case Zm:
            case Km:
              U = nT;
              break;
            case Pm:
              U = vT;
              break;
            case "scroll":
            case "scrollend":
              U = IS;
              break;
            case "wheel":
              U = ST;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = aT;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Cm;
              break;
            case "submit":
              U = mT;
              break;
            case "toggle":
            case "beforetoggle":
              U = xT;
          }
          var pt = (e & 4) !== 0, Ct = !pt && (t === "scroll" || t === "scrollend"), V = pt ? R !== null ? R + "Capture" : null : R;
          pt = [];
          for (var M = _, B; M !== null; ) {
            var Q = M;
            if (B = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || B === null || V === null || (Q = kl(M, V), Q != null && pt.push(
              Ss(M, Q, B)
            )), Ct) break;
            M = M.return;
          }
          0 < pt.length && (R = new U(
            R,
            rt,
            null,
            n,
            k
          ), Z.push({ event: R, listeners: pt }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (U = t === "mouseover" || t === "pointerover", R = t === "mouseout" || t === "pointerout", U && n !== Mu && (rt = n.relatedTarget || n.fromElement) && (Qi(rt) || rt[Oa]))
            break t;
          (R || U) && (rt = k.window === k ? k : (U = k.ownerDocument) ? U.defaultView || U.parentWindow : window, R ? (U = n.relatedTarget || n.toElement, R = _, U = U ? Qi(U) : null, U !== null && (Ct = d(U), pt = U.tag, U !== Ct || pt !== 5 && pt !== 27 && pt !== 6) && (U = null)) : (R = null, U = _), R !== U && (pt = Am, Q = "onMouseLeave", V = "onMouseEnter", M = "mouse", (t === "pointerout" || t === "pointerover") && (pt = Cm, Q = "onPointerLeave", V = "onPointerEnter", M = "pointer"), Ct = R == null ? rt : Gl(R), B = U == null ? rt : Gl(U), rt = new pt(
            Q,
            M + "leave",
            R,
            n,
            k
          ), rt.target = Ct, rt.relatedTarget = B, Q = null, Qi(k) === _ && (pt = new pt(
            V,
            M + "enter",
            U,
            n,
            k
          ), pt.target = B, pt.relatedTarget = Ct, Q = pt), Ct = Q, pt = R && U ? ot(
            R,
            U,
            Dx
          ) : null, R !== null && xy(
            Z,
            rt,
            R,
            pt,
            !1
          ), U !== null && Ct !== null && xy(
            Z,
            Ct,
            U,
            pt,
            !0
          )));
        }
        t: {
          if (R = _ ? Gl(_) : window, U = R.nodeName && R.nodeName.toLowerCase(), U === "select" || U === "input" && R.type === "file")
            var dt = _m;
          else if (Rm(R))
            if (jm)
              dt = RT;
            else {
              dt = zT;
              var _t = OT;
            }
          else
            U = R.nodeName, !U || U.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? _ && Cu(_.elementType) && (dt = _m) : dt = NT;
          if (dt && (dt = dt(t, _))) {
            Vm(
              Z,
              dt,
              n,
              k
            );
            break t;
          }
          _t && _t(t, R, _);
        }
        switch (_t = _ ? Gl(_) : window, t) {
          case "focusin":
            (Rm(_t) || _t.contentEditable === "true") && (Ua = _t, ku = _, Fl = null);
            break;
          case "focusout":
            Fl = ku = Ua = null;
            break;
          case "mousedown":
            Yu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Yu = !1, qm(Z, n, k);
            break;
          case "selectionchange":
            if (_T) break;
          case "keydown":
          case "keyup":
            qm(Z, n, k);
        }
        var St;
        if (Lu)
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
          Ba ? zm(t, n) && (xt = "onCompositionEnd") : t === "keydown" && n.keyCode === 229 && (xt = "onCompositionStart");
        xt && (Mm && n.locale !== "ko" && (Ba || xt !== "onCompositionStart" ? xt === "onCompositionEnd" && Ba && (St = xm()) : (ui = k, Nu = "value" in ui ? ui.value : ui.textContent, Ba = !0)), _t = vr(_, xt), 0 < _t.length && (xt = new wm(
          xt,
          t,
          null,
          n,
          k
        ), Z.push({ event: xt, listeners: _t }), St ? xt.data = St : (St = Nm(n), St !== null && (xt.data = St)))), (St = AT ? wT(t, n) : CT(t, n)) && (xt = vr(_, "onBeforeInput"), 0 < xt.length && (_t = new wm(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          k
        ), Z.push({
          event: _t,
          listeners: xt
        }), _t.data = St)), Ax(
          Z,
          t,
          _,
          n,
          k
        );
      }
      Sy(Z, e);
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
      if (r = r.tag, r !== 5 && r !== 26 && r !== 27 || u === null || (r = kl(t, n), r != null && a.unshift(
        Ss(t, r, u)
      ), r = kl(t, e), r != null && a.push(
        Ss(t, r, u)
      )), t.tag === 3) return a;
      t = t.return;
    }
    return [];
  }
  function Dx(t) {
    if (t === null) return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function xy(t, e, n, a, r) {
    for (var u = e._reactName, h = []; n !== null && n !== a; ) {
      var b = n, A = b.alternate, _ = b.stateNode;
      if (b = b.tag, A !== null && A === a) break;
      b !== 5 && b !== 26 && b !== 27 || _ === null || (A = _, r ? (_ = kl(n, u), _ != null && h.unshift(
        Ss(n, _, A)
      )) : r || (_ = kl(n, u), _ != null && h.push(
        Ss(n, _, A)
      ))), n = n.return;
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var Ox = /\r\n?/g, zx = /\u0000|\uFFFD/g;
  function Ey(t) {
    return (typeof t == "string" ? t : "" + t).replace(Ox, `
`).replace(zx, "");
  }
  function Ay(t, e) {
    return e = Ey(e), Ey(t) === e;
  }
  function Yt(t, e, n, a, r, u) {
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
        bm(t, a, u);
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
          n = FS.get(n) || n, uo(t, n, a);
        else return;
    }
    Lt = !0;
  }
  function wf(t, e, n, a, r, u) {
    switch (n) {
      case "style":
        bm(t, a, u);
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
        if (!um.hasOwnProperty(n))
          t: {
            if (n[0] === "o" && n[1] === "n" && (r = n.endsWith("Capture"), u = n.slice(2, r ? n.length - 7 : void 0), e = t[je] || null, e = e != null ? e[n] : null, typeof e == "function" && t.removeEventListener(u, e, r), typeof a == "function")) {
              typeof e != "function" && e !== null && (n in t ? t[n] = null : t.hasAttribute(n) && t.removeAttribute(n)), t.addEventListener(u, a, r);
              break t;
            }
            Lt = !0, n in t ? t[n] = a : a === !0 ? t.setAttribute(n, "") : uo(t, n, a);
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
        var b = u = h = r = null, A = null, _ = null;
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
                  A = k;
                  break;
                case "defaultChecked":
                  _ = k;
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
        pm(
          t,
          u,
          b,
          A,
          _,
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
        e = u, n = h, t.multiple = !!a, e != null ? Va(t, !!a, e, !1) : n != null && Va(t, !!a, n, !0);
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
        ym(t, a, r, u);
        return;
      case "option":
        for (A in n)
          n.hasOwnProperty(A) && (a = n[A], a != null) && (A === "selected" ? t.selected = a && typeof a != "function" && typeof a != "symbol" : Yt(t, e, A, a, n, null));
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
        for (a = 0; a < bs.length; a++)
          Rt(bs[a], t);
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
        for (_ in n)
          if (n.hasOwnProperty(_) && (a = n[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, e));
              default:
                Yt(t, e, _, a, n, null);
            }
        return;
      default:
        if (Cu(e)) {
          for (k in n)
            n.hasOwnProperty(k) && (a = n[k], a !== void 0 && wf(
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
  var Nx = {};
  function Rx(t, e, n, a) {
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
        var r = null, u = null, h = null, b = null, A = null, _ = null, k = null;
        for (U in n) {
          var Z = n[U];
          if (n.hasOwnProperty(U) && Z != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                A = Z;
              default:
                a.hasOwnProperty(U) || Yt(t, e, U, null, a, Z);
            }
        }
        for (var R in a) {
          var U = a[R];
          if (Z = n[R], a.hasOwnProperty(R) && (U != null || Z != null))
            switch (R) {
              case "type":
                U !== Z && (Lt = !0), u = U;
                break;
              case "name":
                U !== Z && (Lt = !0), r = U;
                break;
              case "checked":
                U !== Z && (Lt = !0), _ = U;
                break;
              case "defaultChecked":
                U !== Z && (Lt = !0), k = U;
                break;
              case "value":
                U !== Z && (Lt = !0), h = U;
                break;
              case "defaultValue":
                U !== Z && (Lt = !0), b = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(o(137, e));
                break;
              default:
                U !== Z && Yt(
                  t,
                  e,
                  R,
                  U,
                  a,
                  Z
                );
            }
        }
        Au(
          t,
          h,
          b,
          A,
          _,
          k,
          u,
          r
        );
        return;
      case "select":
        U = h = b = R = null;
        for (u in n)
          if (A = n[u], n.hasOwnProperty(u) && A != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                U = A;
              default:
                a.hasOwnProperty(u) || Yt(
                  t,
                  e,
                  u,
                  null,
                  a,
                  A
                );
            }
        for (r in a)
          if (u = a[r], A = n[r], a.hasOwnProperty(r) && (u != null || A != null))
            switch (r) {
              case "value":
                u !== A && (Lt = !0), R = u;
                break;
              case "defaultValue":
                u !== A && (Lt = !0), b = u;
                break;
              case "multiple":
                u !== A && (Lt = !0), h = u;
              default:
                u !== A && Yt(
                  t,
                  e,
                  r,
                  u,
                  a,
                  A
                );
            }
        e = b, n = h, a = U, R != null ? Va(t, !!n, R, !1) : !!a != !!n && (e != null ? Va(t, !!n, e, !0) : Va(t, !!n, n ? [] : "", !1));
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
        gm(t, R, U);
        return;
      case "option":
        for (var rt in n)
          R = n[rt], n.hasOwnProperty(rt) && R != null && !a.hasOwnProperty(rt) && (rt === "selected" ? t.selected = !1 : Yt(
            t,
            e,
            rt,
            null,
            a,
            R
          ));
        for (A in a)
          R = a[A], U = n[A], a.hasOwnProperty(A) && R !== U && (R != null || U != null) && (A === "selected" ? (R !== U && (Lt = !0), t.selected = R && typeof R != "function" && typeof R != "symbol") : Yt(
            t,
            e,
            A,
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
        for (_ in a)
          if (R = a[_], U = n[_], a.hasOwnProperty(_) && R !== U && (R != null || U != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(o(137, e));
                break;
              default:
                Yt(
                  t,
                  e,
                  _,
                  R,
                  a,
                  U
                );
            }
        return;
      default:
        if (Cu(e)) {
          for (var Ct in n)
            R = n[Ct], n.hasOwnProperty(Ct) && R !== void 0 && !a.hasOwnProperty(Ct) && wf(
              t,
              e,
              Ct,
              void 0,
              a,
              R
            );
          for (k in a)
            R = a[k], U = n[k], !a.hasOwnProperty(k) || R === U || R === void 0 && U === void 0 || wf(
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
    for (var V in n)
      R = n[V], n.hasOwnProperty(V) && R != null && !a.hasOwnProperty(V) && Yt(t, e, V, null, a, R);
    for (Z in a)
      R = a[Z], U = n[Z], !a.hasOwnProperty(Z) || R === U || R == null && U == null || Yt(t, e, Z, R, a, U);
  }
  function wy(t) {
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
  function Vx() {
    if (typeof performance.getEntriesByType == "function") {
      for (var t = 0, e = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var r = n[a], u = r.transferSize, h = r.initiatorType, b = r.duration;
        if (u && b && wy(h)) {
          for (h = 0, b = r.responseEnd, a += 1; a < n.length; a++) {
            var A = n[a], _ = A.startTime;
            if (_ > b) break;
            var k = A.transferSize, Z = A.initiatorType;
            k && wy(Z) && (A = A.responseEnd, h += k * (A < b ? 1 : (b - _) / (A - _)));
          }
          if (--a, e += 8 * (u + h) / (r.duration / 1e3), t++, 10 < t) break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection && (t = navigator.connection.downlink, typeof t == "number") ? t : 5;
  }
  var Cf = null, Mf = null;
  function Ts(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Cy(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function My(t, e) {
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
  function Dy(t, e, n, a) {
    return n = Ts(
      n
    ).createElement(t), n[ve] = a, n[je] = e, Ee(n, t, e), me(n), n;
  }
  function Df(t, e) {
    return t === "textarea" || t === "noscript" || typeof e.children == "string" || typeof e.children == "number" || typeof e.children == "bigint" || typeof e.dangerouslySetInnerHTML == "object" && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null;
  }
  var Of = null;
  function _x() {
    var t = window.event;
    return t && t.type === "popstate" ? t === Of ? !1 : (Of = t, !0) : (Of = null, !1);
  }
  var zf = typeof setTimeout == "function" ? setTimeout : void 0, jx = typeof clearTimeout == "function" ? clearTimeout : void 0, Oy = typeof Promise == "function" ? Promise : void 0, zy = typeof requestAnimationFrame == "function" ? requestAnimationFrame : zf, Lx = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oy < "u" ? function(t) {
    return Oy.resolve(null).then(t).catch(Bx);
  } : zf;
  function Bx(t) {
    setTimeout(function() {
      throw t;
    });
  }
  function Oi(t) {
    return t === "head";
  }
  function Ny(t, e) {
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
          Uf(
            t.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = t.ownerDocument.head, Uf(n);
          for (var u = n.firstChild; u; ) {
            var h = u.nextSibling, b = u.nodeName;
            u[Hl] || b === "SCRIPT" || b === "STYLE" || b === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = h;
          }
        } else
          n === "body" && Uf(t.ownerDocument.body);
      n = r;
    } while (n);
    yl(e);
  }
  function Ry(t, e) {
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
  function Vy(t, e, n) {
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
  function _y(t, e) {
    t = t.style, e = e.style;
    var n = e != null ? e.hasOwnProperty("viewTransitionName") ? e.viewTransitionName : e.hasOwnProperty("view-transition-name") ? e["view-transition-name"] : null : null;
    t.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = e != null ? e.hasOwnProperty("viewTransitionClass") ? e.viewTransitionClass : e.hasOwnProperty("view-transition-class") ? e["view-transition-class"] : null : null, t.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), t.display === "inline-block" && (e == null ? t.display = t.margin = "" : (n = e.display, t.display = n == null || typeof n == "boolean" ? "" : n, n = e.margin, n != null ? t.margin = n : (n = e.hasOwnProperty("marginTop") ? e.marginTop : e["margin-top"], t.marginTop = n == null || typeof n == "boolean" ? "" : n, e = e.hasOwnProperty("marginBottom") ? e.marginBottom : e["margin-bottom"], t.marginBottom = e == null || typeof e == "boolean" ? "" : e)));
  }
  function Ux(t, e, n) {
    return n = n.ownerDocument.defaultView, {
      rect: t,
      abs: e.position === "absolute" || e.position === "fixed",
      clip: e.clipPath !== "none" || e.overflow !== "visible" || e.filter !== "none" || e.mask !== "none" || e.mask !== "none" || e.borderRadius !== "0px",
      view: 0 <= t.bottom && 0 <= t.right && t.top <= n.innerHeight && t.left <= n.innerWidth
    };
  }
  function Nf(t) {
    var e = t.getBoundingClientRect(), n = getComputedStyle(t);
    return Ux(e, n, t);
  }
  function Hx(t) {
    return t.documentElement.clientHeight;
  }
  function Gx(t) {
    this.addEventListener("load", t), this.addEventListener("error", t);
  }
  function kx(t, e, n, a, r, u, h, b, A) {
    var _ = e.nodeType === 9 ? e : e.ownerDocument;
    try {
      var k = _.startViewTransition({
        update: function() {
          var R = _.defaultView, U = R.navigation && R.navigation.transition, rt = _.fonts.status;
          a();
          var pt = [];
          if (rt === "loaded" && (Hx(_), _.fonts.status === "loading" && pt.push(_.fonts.ready)), rt = pt.length, t !== null)
            for (var Ct = t.suspenseyImages, V = 0, M = 0; M < Ct.length; M++) {
              var B = Ct[M];
              if (!B.complete) {
                var Q = B.getBoundingClientRect();
                if (0 < Q.bottom && 0 < Q.right && Q.top < R.innerHeight && Q.left < R.innerWidth) {
                  if (V += ev(B), V > Tr) {
                    pt.length = rt;
                    break;
                  }
                  B = new Promise(
                    Gx.bind(B)
                  ), pt.push(B);
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
      _.__reactViewTransition = k;
      var Z = [];
      return k.ready.then(
        function() {
          for (var R = _.documentElement.getAnimations({
            subtree: !0
          }), U = 0; U < R.length; U++) {
            var rt = R[U], pt = rt.effect, Ct = pt.pseudoElement;
            if (Ct != null && Ct.startsWith("::view-transition")) {
              Z.push(rt), rt = pt.getKeyframes();
              for (var V = Ct = void 0, M = !0, B = 0; B < rt.length; B++) {
                var Q = rt[B], dt = Q.width;
                if (Ct === void 0) Ct = dt;
                else if (Ct !== dt) {
                  M = !1;
                  break;
                }
                if (dt = Q.height, V === void 0) V = dt;
                else if (V !== dt) {
                  M = !1;
                  break;
                }
                delete Q.width, delete Q.height, Q.transform === "none" && delete Q.transform;
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
          _.__reactViewTransition === k && (_.__reactViewTransition = null);
          try {
            typeof R == "object" && R !== null && R.name === "InvalidStateError" && (R.message === "View transition was skipped because document visibility state is hidden." || R.message === "Skipping view transition because document visibility state has become hidden." || R.message === "Skipping view transition because viewport size changed." || R.message === "Transition was aborted because of invalid state") && (R = null), R !== null && A(R);
          } finally {
            a(), r(), h();
          }
        }
      ), k.finished.finally(function() {
        for (var R = 0; R < Z.length; R++)
          Z[R].cancel();
        _.__reactViewTransition === k && (_.__reactViewTransition = null), b();
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
  function jy(t) {
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
      if (By(u, t, e, n) === -1) {
        var h = this, b = e;
        n != null && typeof n != "boolean" && n.once === !0 && (b = function(A) {
          h.removeEventListener(
            t,
            e,
            n
          ), typeof e == "function" ? e.call(this, A) : e.handleEvent(A);
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
          Yx,
          t,
          b,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function Yx(t, e, n, a) {
    return x(t).addEventListener(
      e,
      n,
      a
    ), !1;
  }
  Ie.prototype.removeEventListener = function(t, e, n) {
    var a = this._eventListeners;
    if (a !== null && (e = By(
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
        qx,
        t,
        n,
        r
      ), a.splice(e, 1), u !== null && u();
    }
  };
  function qx(t, e, n, a) {
    return x(t).removeEventListener(
      e,
      n,
      a
    ), !1;
  }
  function fl(t) {
    return t != null && typeof t != "boolean" && (t.once === !0 || t.signal instanceof AbortSignal) ? { capture: t.capture, passive: t.passive } : t;
  }
  function Ly(t) {
    return t == null ? "c=0" : typeof t == "boolean" ? "c=" + (t ? "1" : "0") : "c=" + (t.capture ? "1" : "0");
  }
  function By(t, e, n, a) {
    if (t.length === 0) return -1;
    a = Ly(a);
    for (var r = 0; r < t.length; r++) {
      var u = t[r];
      if (u.type === e && u.listener === n && Ly(u.optionsOrUseCapture) === a)
        return r;
    }
    return -1;
  }
  Ie.prototype.dispatchEvent = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return !0;
    e = x(e);
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
      Uy,
      t,
      void 0,
      void 0
    );
  };
  function Uy(t, e) {
    return t.tag === 6 ? !1 : (t = x(t), eE(t, e));
  }
  Ie.prototype.focusLast = function(t) {
    var e = [];
    y(
      this._fragmentFiber.child,
      !0,
      Rf,
      e,
      void 0,
      void 0
    );
    for (var n = e.length - 1; 0 <= n && !Uy(e[n], t); n--) ;
  };
  function Rf(t, e) {
    return e.push(t), !1;
  }
  Ie.prototype.blur = function() {
    var t = S(
      this._fragmentFiber
    );
    t !== null && (t = x(t), t = Ts(t).activeElement, t !== null && y(
      this._fragmentFiber.child,
      !1,
      Xx,
      t,
      void 0,
      void 0
    ));
  };
  function Xx(t, e) {
    return t.tag === 6 ? !1 : (t = x(t), t === e || t.contains(e) ? (e.blur(), !0) : !1);
  }
  Ie.prototype.observeUsing = function(t) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(t), y(
      this._fragmentFiber.child,
      !1,
      Qx,
      t,
      void 0,
      void 0
    );
  };
  function Qx(t, e) {
    return t.tag === 6 || (t = x(t), e.observe(t)), !1;
  }
  Ie.prototype.unobserveUsing = function(t) {
    var e = this._observers;
    if (e !== null && e.has(t)) {
      e.delete(t), y(
        this._fragmentFiber.child,
        !1,
        Zx,
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
  function Zx(t, e) {
    return t.tag === 6 || (t = x(t), e.unobserve(t)), !1;
  }
  var vn = [], Vf = !1;
  function Kx(t, e, n) {
    vn.push({
      fragmentInstance: t,
      observer: e,
      instance: n
    }), Vf || (Vf = !0, nE(function() {
      Vf = !1;
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
      Px,
      t,
      void 0,
      void 0
    ), t;
  };
  function Px(t, e) {
    if (t.tag === 6) {
      t = t.stateNode;
      var n = t.ownerDocument.createRange();
      n.selectNodeContents(t), e.push.apply(e, n.getClientRects());
    } else
      t = x(t), e.push.apply(e, t.getClientRects());
    return !1;
  }
  Ie.prototype.getRootNode = function(t) {
    var e = S(
      this._fragmentFiber
    );
    return e === null ? this : x(e).getRootNode(t);
  }, Ie.prototype.compareDocumentPosition = function(t) {
    var e = S(
      this._fragmentFiber
    );
    if (e === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    y(
      this._fragmentFiber.child,
      !1,
      Rf,
      n,
      void 0,
      void 0
    );
    var a = x(e);
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
      return n === t ? r = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = T(e)[1], n === null ? r = Node.DOCUMENT_POSITION_PRECEDING : (t = x(n).compareDocumentPosition(
        t
      ), r = t === 0 || t & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), r |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    e = x(n[0]), r = x(n[n.length - 1]);
    var u = C(this._fragmentFiber) ? e.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(r) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var h = e.compareDocumentPosition(t), b = r.compareDocumentPosition(t), A = h & Node.DOCUMENT_POSITION_CONTAINED_BY || b & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return b = a && u && h & Node.DOCUMENT_POSITION_FOLLOWING && b & Node.DOCUMENT_POSITION_PRECEDING, e = a && e === t || u && r === t || A || b ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && e === t || !u && r === t ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : h, e & Node.DOCUMENT_POSITION_DISCONNECTED || e & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Fx(
      e,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      t
    ) ? e : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Fx(t, e, n, a, r) {
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
    return t & Node.DOCUMENT_POSITION_PRECEDING ? ((e = !!u) && !(e = u === n) && (e = ot(
      n,
      u,
      $
    ), e === null ? e = !1 : (y(
      e,
      !0,
      H,
      u,
      n
    ), u = D, D = null, e = u !== null)), e) : t & Node.DOCUMENT_POSITION_FOLLOWING ? ((e = !!u) && !(e = u === a) && (e = ot(
      a,
      u,
      $
    ), e === null ? e = !1 : (y(
      e,
      !0,
      L,
      u,
      a
    ), u = D, z = D = null, e = u !== null)), e) : !1;
  }
  function Hy(t, e) {
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
      Rf,
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
        t = x(a), Hy(t, n);
        return;
      }
      if (a = x(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(t);
          return;
        }
        a.scrollIntoView(t);
      }
    }
    for (a = n ? e.length - 1 : 0; a !== (n ? -1 : e.length); ) {
      var r = e[a];
      r.tag === 6 ? (r = x(r), Hy(r, n)) : x(r).scrollIntoView(t), a += n ? -1 : 1;
    }
  };
  function Jx(t, e) {
    return t = x(t), Gy(t, e), !1;
  }
  function Gy(t, e) {
    t.reactFragments == null && (t.reactFragments = /* @__PURE__ */ new Set()), t.reactFragments.add(e);
  }
  function ky(t, e) {
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
        var A = vn[b];
        (A.fragmentInstance !== e || A.observer !== u || A.instance !== t) && (vn[h++] = A);
      }
      vn.length = h, u.observe(t);
    }), Gy(t, e));
  }
  function Ix(t, e) {
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
      typeof u.rootMargin == "string" ? Kx(
        e,
        u,
        t
      ) : u.unobserve(t);
    }), t.reactFragments != null && t.reactFragments.delete(e));
  }
  function _f(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var n = e;
      switch (e = e.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          _f(n), ro(n);
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
  function Wx(t, e, n, a) {
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
  function $x(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !n || (t = cn(t.nextSibling), t === null)) return null;
    return t;
  }
  function Yy(t, e) {
    for (; t.nodeType !== 8; )
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !e || (t = cn(t.nextSibling), t === null)) return null;
    return t;
  }
  function jf(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Lf(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState !== "loading";
  }
  function tE(t, e) {
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
  var Bf = null;
  function qy(t) {
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
  function Xy(t) {
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
  function eE(t, e) {
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
  function nE(t) {
    zy(function() {
      zy(function(e) {
        return t(e);
      });
    });
  }
  function Qy(t, e, n) {
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
  function Zy(t, e, n) {
    for (var a in n) {
      var r = n[a];
      n.hasOwnProperty(a) && r != null && Yt(t, e, a, null, Nx, r);
    }
    n.dangerouslySetInnerHTML != null && (t.textContent = ""), t.onclick === Cn && (t.onclick = null), ro(t);
  }
  function Uf(t) {
    for (var e = t.attributes; e.length; )
      t.removeAttributeNode(e[0]);
    ro(t);
  }
  var fn = /* @__PURE__ */ new Map(), Ky = /* @__PURE__ */ new Set();
  function xs(t) {
    if (typeof t.getRootNode == "function") {
      var e = t.getRootNode();
      if (e.nodeType === 9 || e.nodeType === 11) return e;
    }
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  var ni = J.d;
  J.d = {
    f: iE,
    r: aE,
    D: lE,
    C: sE,
    L: oE,
    m: rE,
    X: cE,
    S: uE,
    M: fE
  };
  function iE() {
    var t = ni.f(), e = dr();
    return t || e;
  }
  function aE(t) {
    var e = za(t);
    e !== null && e.tag === 5 && e.type === "form" ? Fp(e) : ni.r(t);
  }
  var dl = typeof document > "u" ? null : document;
  function Py(t, e, n) {
    var a = dl;
    if (a && typeof e == "string" && e) {
      var r = nn(e);
      r = 'link[rel="' + t + '"][href="' + r + '"]', typeof n == "string" && (r += '[crossorigin="' + n + '"]'), Ky.has(r) || (Ky.add(r), t = { rel: t, crossOrigin: n, href: e }, a.querySelector(r) === null && (e = a.createElement("link"), Ee(e, "link", t), me(e), a.head.appendChild(e)));
    }
  }
  function lE(t) {
    ni.D(t), Py("dns-prefetch", t, null);
  }
  function sE(t, e) {
    ni.C(t, e), Py("preconnect", t, e);
  }
  function oE(t, e, n) {
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
      ), fn.set(u, t), a.querySelector(r) !== null || e === "style" && a.querySelector(Es(u)) || e === "script" && a.querySelector(As(u))))) {
        var h = a.createElement("link");
        Ee(h, "link", t), e === "style" && (h[oo] = !0, h.onload = h.onerror = function() {
          om(h);
        }), me(h), a.head.appendChild(h);
      }
    }
  }
  function rE(t, e) {
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
            if (n.querySelector(As(u)))
              return;
        }
        a = n.createElement("link"), Ee(a, "link", t), me(a), n.head.appendChild(a);
      }
    }
  }
  function uE(t, e, n) {
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
          t = j(
            { rel: "stylesheet", href: t, "data-precedence": e },
            n
          ), (n = fn.get(u)) && Hf(t, n);
          var A = h = a.createElement("link");
          me(A), Ee(A, "link", t), A._p = new Promise(function(_, k) {
            A.onload = _, A.onerror = k;
          }), A.addEventListener("load", function() {
            b.loading |= 1;
          }), A.addEventListener("error", function() {
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
  function cE(t, e) {
    ni.X(t, e);
    var n = dl;
    if (n && t) {
      var a = Na(n).hoistableScripts, r = ml(t), u = a.get(r);
      u || (u = n.querySelector(As(r)), u || (t = j({ src: t, async: !0 }, e), (e = fn.get(r)) && Gf(t, e), u = n.createElement("script"), me(u), Ee(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(r, u));
    }
  }
  function fE(t, e) {
    ni.M(t, e);
    var n = dl;
    if (n && t) {
      var a = Na(n).hoistableScripts, r = ml(t), u = a.get(r);
      u || (u = n.querySelector(As(r)), u || (t = j({ src: t, async: !0, type: "module" }, e), (e = fn.get(r)) && Gf(t, e), u = n.createElement("script"), me(u), Ee(u, "link", t), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(r, u));
    }
  }
  function Fy(t, e, n, a) {
    var r = (r = _e.current) ? xs(r) : null;
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
          }, fn.set(t, u)), dE(
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
  function Jy(t) {
    return j({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    });
  }
  function dE(t, e, n, a) {
    if (e = t.querySelector(
      'link[rel="preload"][as="style"][' + e + "]"
    )) {
      if (e[oo] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      e = t.createElement("link"), e[oo] = !0, e.onload = e.onerror = om.bind(null, e), Ee(e, "link", n), me(e), t.head.appendChild(e);
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
  function Iy(t, e, n) {
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
          ), me(a), Ee(a, "style", r), br(a, n.precedence, t), e.instance = a;
        case "stylesheet":
          r = hl(n.href);
          var u = t.querySelector(
            Es(r)
          );
          if (u)
            return e.state.loading |= 4, e.instance = u, me(u), u;
          a = Jy(n), (r = fn.get(r)) && Hf(a, r), u = (t.ownerDocument || t).createElement("link"), me(u);
          var h = u;
          return h._p = new Promise(function(b, A) {
            h.onload = b, h.onerror = A;
          }), Ee(u, "link", a), e.state.loading |= 4, br(u, n.precedence, t), e.instance = u;
        case "script":
          return u = ml(n.src), (r = t.querySelector(
            As(u)
          )) ? (e.instance = r, me(r), r) : (a = n, (r = fn.get(u)) && (a = j({}, n), Gf(a, r)), t = t.ownerDocument || t, r = t.createElement("script"), me(r), Ee(r, "link", a), t.head.appendChild(r), e.instance = r);
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
  function Hf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title);
  }
  function Gf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity);
  }
  var Sr = null;
  function Wy(t, e, n) {
    if (Sr === null) {
      var a = /* @__PURE__ */ new Map(), r = Sr = /* @__PURE__ */ new Map();
      r.set(n, a);
    } else
      r = Sr, a = r.get(n), a || (a = /* @__PURE__ */ new Map(), r.set(n, a));
    if (a.has(t)) return a;
    for (a.set(t, null), n = n.getElementsByTagName(t), r = 0; r < n.length; r++) {
      var u = n[r];
      if (!(u[Hl] || u[ve] || t === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var h = u.getAttribute(e) || "";
        h = t + h;
        var b = a.get(h);
        b ? b.push(u) : a.set(h, [u]);
      }
    }
    return a;
  }
  function kf(t, e, n) {
    t = t.ownerDocument || t, t.head.insertBefore(
      n,
      e === "title" ? t.querySelector("head > title") : null
    );
  }
  function hE(t, e, n) {
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
  function $y(t, e) {
    return t === "img" && e.src != null && e.src !== "" && e.onLoad == null && e.loading !== "lazy";
  }
  function tv(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function ev(t) {
    return (t.width || 100) * (t.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function nv(t, e) {
    typeof e.decode == "function" && (t.imgCount++, e.complete || (t.imgBytes += ev(e), t.suspenseyImages.push(e)), t = gE.bind(t), e.decode().then(t, t));
  }
  function mE(t, e, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var r = hl(a.href), u = e.querySelector(
          Es(r)
        );
        if (u) {
          e = u._p, e !== null && typeof e == "object" && typeof e.then == "function" && (t.count++, t = ws.bind(t), e.then(t, t)), n.state.loading |= 4, n.instance = u, me(u);
          return;
        }
        u = e.ownerDocument || e, a = Jy(a), (r = fn.get(r)) && Hf(a, r), u = u.createElement("link"), me(u);
        var h = u;
        h._p = new Promise(function(b, A) {
          h.onload = b, h.onerror = A;
        }), Ee(u, "link", a), n.instance = u;
      }
      t.stylesheets === null && (t.stylesheets = /* @__PURE__ */ new Map()), t.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (t.count++, n = ws.bind(t), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  var Tr = 0;
  function pE(t, e) {
    return t.stylesheets && t.count === 0 && Er(t, t.stylesheets), 0 < t.count || 0 < t.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (t.stylesheets && Er(t, t.stylesheets), t.unsuspend) {
          var u = t.unsuspend;
          t.unsuspend = null, u();
        }
      }, 6e4 + e);
      0 < t.imgBytes && Tr === 0 && (Tr = 62500 * Vx());
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
  function iv(t) {
    if (t.count === 0 && (t.imgCount === 0 || !t.waitingForImages)) {
      if (t.stylesheets) Er(t, t.stylesheets);
      else if (t.unsuspend) {
        var e = t.unsuspend;
        t.unsuspend = null, e();
      }
    }
  }
  function ws() {
    this.count--, iv(this);
  }
  function gE() {
    this.imgCount--, iv(this);
  }
  var xr = null;
  function Er(t, e) {
    t.stylesheets = null, t.unsuspend !== null && (t.count++, xr = /* @__PURE__ */ new Map(), e.forEach(yE, t), xr = null, ws.call(t));
  }
  function yE(t, e) {
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
    $$typeof: W,
    Provider: null,
    Consumer: null,
    _currentValue: Et,
    _currentValue2: Et,
    _threadCount: 0
  };
  function vE(t, e, n, a, r, u, h, b, A) {
    this.tag = 1, this.containerInfo = t, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Su(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Su(0), this.hiddenUpdates = Su(null), this.identifierPrefix = a, this.onUncaughtError = r, this.onCaughtError = u, this.onRecoverableError = h, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = A, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function av(t, e, n, a, r, u, h, b, A, _, k, Z) {
    return t = new vE(
      t,
      e,
      n,
      h,
      A,
      _,
      k,
      Z,
      b
    ), e = 1, u === !0 && (e |= 24), u = Le(3, null, null, e), t.current = u, u.stateNode = t, e = ec(), e.refCount++, t.pooledCache = e, e.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: e
    }, lc(u), t;
  }
  function lv(t) {
    return t ? (t = ka, t) : ka;
  }
  function sv(t, e, n, a, r, u) {
    r = lv(r), a.context === null ? a.context = r : a.pendingContext = r, a = yi(e), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = vi(t, a, e), n !== null && (Ge(n, t, e), ns(n, t, e));
  }
  function ov(t, e) {
    if (t = t.memoizedState, t !== null && t.dehydrated !== null) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Yf(t, e) {
    ov(t, e), (t = t.alternate) && ov(t, e);
  }
  function rv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Fi(t, 67108864);
      e !== null && Ge(e, t, 67108864), Yf(t, 67108864);
    }
  }
  function uv(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Je();
      e = Tu(e);
      var n = Fi(t, e);
      n !== null && Ge(n, t, e), Yf(t, e);
    }
  }
  var gl = !0;
  function bE(t, e, n, a) {
    var r = st.T;
    st.T = null;
    var u = J.p;
    try {
      J.p = 2, qf(t, e, n, a);
    } finally {
      J.p = u, st.T = r;
    }
  }
  function SE(t, e, n, a) {
    var r = st.T;
    st.T = null;
    var u = J.p;
    try {
      J.p = 8, qf(t, e, n, a);
    } finally {
      J.p = u, st.T = r;
    }
  }
  function qf(t, e, n, a) {
    if (gl) {
      var r = Xf(a);
      if (r === null)
        Af(
          t,
          e,
          a,
          Ar,
          n
        ), fv(t, a);
      else if (xE(
        r,
        t,
        e,
        n,
        a
      ))
        a.stopPropagation();
      else if (fv(t, a), e & 4 && -1 < TE.indexOf(t)) {
        for (; r !== null; ) {
          var u = za(r);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var h = Xi(u.pendingLanes);
                  if (h !== 0) {
                    var b = u;
                    for (b.pendingLanes |= 2, b.entangledLanes |= 2; h; ) {
                      var A = 1 << 31 - qe(h);
                      b.entanglements[1] |= A, h &= ~A;
                    }
                    Ln(u), (Bt & 6) === 0 && (ur = Me() + 500, vs(0));
                  }
                }
                break;
              case 31:
              case 13:
                b = Fi(u, 2), b !== null && Ge(b, u, 2), dr(), Yf(u, 2);
            }
          if (u = Xf(a), u === null && Af(
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
        Af(
          t,
          e,
          a,
          null,
          n
        );
    }
  }
  function Xf(t) {
    return t = Du(t), Qf(t);
  }
  var Ar = null;
  function Qf(t) {
    if (Ar = null, t = Qi(t), t !== null) {
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
  function cv(t) {
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
        switch (yu()) {
          case Vl:
            return 2;
          case _l:
            return 8;
          case qi:
          case vu:
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
  var Zf = !1, zi = null, Ni = null, Ri = null, Cs = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Vi = [], TE = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function fv(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        zi = null;
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
    }, e !== null && (e = za(e), e !== null && rv(e)), t) : (t.eventSystemFlags |= a, e = t.targetContainers, r !== null && e.indexOf(r) === -1 && e.push(r), t);
  }
  function xE(t, e, n, a, r) {
    switch (e) {
      case "focusin":
        return zi = Ds(
          zi,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "dragenter":
        return Ni = Ds(
          Ni,
          t,
          e,
          n,
          a,
          r
        ), !0;
      case "mouseover":
        return Ri = Ds(
          Ri,
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
  function dv(t) {
    var e = Qi(t.target);
    if (e !== null) {
      var n = d(e);
      if (n !== null) {
        if (e = n.tag, e === 13) {
          if (e = f(n), e !== null) {
            t.blockedOn = e, am(t.priority, function() {
              uv(n);
            });
            return;
          }
        } else if (e === 31) {
          if (e = m(n), e !== null) {
            t.blockedOn = e, am(t.priority, function() {
              uv(n);
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
      var n = Xf(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Mu = a, n.target.dispatchEvent(a), Mu = null;
      } else
        return e = za(n), e !== null && rv(e), t.blockedOn = n, !1;
      e.shift();
    }
    return !0;
  }
  function hv(t, e, n) {
    wr(t) && n.delete(e);
  }
  function EE() {
    Zf = !1, zi !== null && wr(zi) && (zi = null), Ni !== null && wr(Ni) && (Ni = null), Ri !== null && wr(Ri) && (Ri = null), Cs.forEach(hv), Ms.forEach(hv);
  }
  function Cr(t, e) {
    t.blockedOn === e && (t.blockedOn = null, Zf || (Zf = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      EE
    )));
  }
  var Mr = null;
  function mv(t) {
    Mr !== t && (Mr = t, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Mr === t && (Mr = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e], a = t[e + 1], r = t[e + 2];
          if (typeof a != "function") {
            if (Qf(a || n) === null)
              continue;
            break;
          }
          var u = za(n);
          u !== null && (t.splice(e, 3), e -= 3, Cc(
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
    function e(A) {
      return Cr(A, t);
    }
    zi !== null && Cr(zi, t), Ni !== null && Cr(Ni, t), Ri !== null && Cr(Ri, t), Cs.forEach(e), Ms.forEach(e);
    for (var n = 0; n < Vi.length; n++) {
      var a = Vi[n];
      a.blockedOn === t && (a.blockedOn = null);
    }
    for (; 0 < Vi.length && (n = Vi[0], n.blockedOn === null); )
      dv(n), n.blockedOn === null && Vi.shift();
    if (n = (t.ownerDocument || t).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var r = n[a], u = n[a + 1], h = r[je] || null;
        if (typeof u == "function")
          h || mv(n);
        else if (h) {
          var b = null;
          if (u && u.hasAttribute("formAction")) {
            if (r = u, h = u[je] || null)
              b = h.formAction;
            else if (Qf(r) !== null) continue;
          } else b = h.action;
          typeof b == "function" ? n[a + 1] = b : (n.splice(a, 3), a -= 3), mv(n);
        }
      }
  }
  function pv() {
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
  function Kf(t) {
    this._internalRoot = t;
  }
  Dr.prototype.render = Kf.prototype.render = function(t) {
    var e = this._internalRoot;
    if (e === null) throw Error(o(409));
    var n = e.current, a = Je();
    sv(n, a, t, e, null, null);
  }, Dr.prototype.unmount = Kf.prototype.unmount = function() {
    var t = this._internalRoot;
    if (t !== null) {
      this._internalRoot = null;
      var e = t.containerInfo;
      sv(t.current, 2, null, t, null, null), dr(), e[Oa] = null;
    }
  };
  function Dr(t) {
    this._internalRoot = t;
  }
  Dr.prototype.unstable_scheduleHydration = function(t) {
    if (t) {
      var e = im();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Vi.length && e !== 0 && e < Vi[n].priority; n++) ;
      Vi.splice(n, 0, t), n === 0 && dv(t);
    }
  };
  var gv = l.version;
  if (gv !== "19.3.0")
    throw Error(
      o(
        527,
        gv,
        "19.3.0"
      )
    );
  J.findDOMNode = function(t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function" ? Error(o(188)) : (t = Object.keys(t).join(","), Error(o(268, t)));
    return t = g(e), t = t !== null ? v(t) : null, t = t === null ? null : t.stateNode, t;
  };
  var AE = {
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
        Ll = Or.inject(
          AE
        ), Ye = Or;
      } catch {
      }
  }
  return zs.createRoot = function(t, e) {
    if (!c(t)) throw Error(o(299));
    var n = !1, a = "", r = lg, u = sg, h = og;
    return e != null && (e.unstable_strictMode === !0 && (n = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (r = e.onUncaughtError), e.onCaughtError !== void 0 && (u = e.onCaughtError), e.onRecoverableError !== void 0 && (h = e.onRecoverableError)), e = av(
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
      pv
    ), t[Oa] = e.current, Ef(t), new Kf(e);
  }, zs.hydrateRoot = function(t, e, n) {
    if (!c(t)) throw Error(o(299));
    var a = !1, r = "", u = lg, h = sg, b = og, A = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (h = n.onCaughtError), n.onRecoverableError !== void 0 && (b = n.onRecoverableError), n.formState !== void 0 && (A = n.formState)), e = av(
      t,
      1,
      !0,
      e,
      n ?? null,
      a,
      r,
      A,
      u,
      h,
      b,
      pv
    ), e.context = lv(null), n = e.current, a = Je(), a = Tu(a), r = yi(a), r.callback = null, vi(n, r, a), n = a, e.current.lanes = n, Ul(e, n), Ln(e), t[Oa] = e.current, Ef(t), new Dr(e);
  }, zs.version = "19.3.0", zs;
}
var Cv;
function jE() {
  if (Cv) return Ff.exports;
  Cv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (l) {
        console.error(l);
      }
  }
  return i(), Ff.exports = _E(), Ff.exports;
}
var zr = jE(), X = ih();
const LE = /* @__PURE__ */ ME(X), BE = /* @__PURE__ */ CE({
  __proto__: null,
  default: LE
}, [X]);
var UE = rb(), HE = Object.defineProperty, ah = (i, l) => HE(i, "name", { value: l, configurable: !0 });
function Dd(i, l) {
  if (typeof i == "function")
    return i(l);
  i != null && (i.current = l);
}
ah(Dd, "setRef");
function ub(...i) {
  return (l) => {
    let s = !1;
    const o = i.map((c) => {
      const d = Dd(c, l);
      return !s && typeof d == "function" && (s = !0), d;
    });
    if (s)
      return () => {
        for (let c = 0; c < o.length; c++) {
          const d = o[c];
          typeof d == "function" ? d() : Dd(i[c], null);
        }
      };
  };
}
ah(ub, "composeRefs");
function cb(...i) {
  return X.useCallback(ub(...i), i);
}
ah(cb, "useComposedRefs");
var GE = Object.defineProperty, tn = (i, l) => GE(i, "name", { value: l, configurable: !0 });
// @__NO_SIDE_EFFECTS__
function lh(i) {
  const l = X.forwardRef((s, o) => {
    let { children: c, ...d } = s, f = null, m = !1;
    const p = [];
    c = gb(c), X.Children.forEach(c, (S) => {
      if (mb(S)) {
        m = !0;
        const C = S;
        let T = "child" in C.props ? C.props.child : C.props.children;
        for (; sh(T) && typeof Pr == "function"; )
          T = Pr(T._payload);
        f = qE(C, T), p.push(f?.props?.children);
      } else
        p.push(S);
    }), f ? f = X.cloneElement(f, void 0, p) : (
      // A `Slottable` was found but it didn't resolve to a single element (e.g.
      // it wrapped multiple elements, text, or a render-prop `child` that
      // wasn't an element). Don't fall back to treating the `Slottable` wrapper
      // itself as the slot target — throw a descriptive error below instead.
      !m && X.Children.count(c) === 1 && X.isValidElement(c) && (f = c)
    );
    const g = f ? hb(f) : void 0, v = cb(o, g);
    if (!f) {
      if (c || c === 0)
        throw new Error(
          m ? ZE(i) : QE(i)
        );
      return c;
    }
    const y = db(d, f.props ?? {});
    return f.type !== X.Fragment && (y.ref = o ? v : g), X.cloneElement(f, y);
  });
  return l.displayName = `${i}.Slot`, l;
}
tn(lh, "createSlot");
var kE = /* @__PURE__ */ lh("Slot"), fb = /* @__PURE__ */ Symbol.for("radix.slottable");
// @__NO_SIDE_EFFECTS__
function YE(i) {
  const l = /* @__PURE__ */ tn((s) => "child" in s ? s.children(s.child) : s.children, "Slottable");
  return l.displayName = `${i}.Slottable`, l.__radixId = fb, l;
}
tn(YE, "createSlottable");
var qE = /* @__PURE__ */ tn((i, l) => "child" in i.props ? X.isValidElement(l) ? X.cloneElement(l, void 0, i.props.children(l.props.children)) : null : X.isValidElement(l) ? l : null, "getSlottableElementFromSlottable");
function db(i, l) {
  const s = { ...l };
  for (const o in l) {
    const c = i[o], d = l[o];
    /^on[A-Z]/.test(o) ? c && d ? s[o] = (...m) => {
      const p = d(...m);
      return c(...m), p;
    } : c && (s[o] = c) : o === "style" ? s[o] = { ...c, ...d } : o === "className" ? s[o] = [c, d].filter(Boolean).join(" ") : o === "aria-describedby" && (s[o] = yb(d, c));
  }
  return { ...i, ...s };
}
tn(db, "mergeProps");
function hb(i) {
  let l = Object.getOwnPropertyDescriptor(i.props, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning;
  return s ? i.ref : (l = Object.getOwnPropertyDescriptor(i, "ref")?.get, s = l && "isReactWarning" in l && l.isReactWarning, s ? i.props.ref : i.props.ref || i.ref);
}
tn(hb, "getElementRef");
function mb(i) {
  return X.isValidElement(i) && typeof i.type == "function" && "__radixId" in i.type && i.type.__radixId === fb;
}
tn(mb, "isSlottable");
var XE = /* @__PURE__ */ Symbol.for("react.lazy");
function sh(i) {
  return i != null && typeof i == "object" && "$$typeof" in i && i.$$typeof === XE && "_payload" in i && pb(i._payload);
}
tn(sh, "isLazyComponent");
function pb(i) {
  return typeof i == "object" && i !== null && "then" in i;
}
tn(pb, "isPromiseLike");
function gb(i) {
  let l = i;
  for (; sh(l) && typeof Pr == "function"; )
    l = Pr(l._payload);
  return l;
}
tn(gb, "useUnwrappedLazy");
function yb(...i) {
  const l = /* @__PURE__ */ new Set();
  for (const s of i)
    if (typeof s == "string")
      for (const o of String(s).trim().split(/\s+/))
        o && l.add(o);
  return l.size > 0 ? Array.from(l).join(" ") : void 0;
}
tn(yb, "concatAriaDescribedby");
var QE = /* @__PURE__ */ tn((i) => `${i} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`, "createSlotError"), ZE = /* @__PURE__ */ tn((i) => `${i} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`, "createSlottableError"), Pr = BE[" use ".trim().toString()], KE = Object.defineProperty, PE = (i, l) => KE(i, "name", { value: l, configurable: !0 }), FE = [
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
], JE = FE.reduce((i, l) => {
  const s = /* @__PURE__ */ lh(`Primitive.${l}`), o = X.forwardRef((c, d) => {
    const { asChild: f, ...m } = c, p = f ? s : l;
    return typeof window < "u" && (window[/* @__PURE__ */ Symbol.for("radix-ui")] = !0), /* @__PURE__ */ O.jsx(p, { ...m, ref: d });
  });
  return o.displayName = `Primitive.${l}`, { ...i, [l]: o };
}, {});
function IE(i, l) {
  i && UE.flushSync(() => i.dispatchEvent(l));
}
PE(IE, "dispatchDiscreteCustomEvent");
var WE = Object.defineProperty, vb = (i, l) => WE(i, "name", { value: l, configurable: !0 }), oh = {
  Horizontal: "horizontal",
  Vertical: "vertical"
}, Mv = oh.Horizontal, $E = Object.values(oh), bb = /* @__PURE__ */ X.forwardRef(
  /* @__PURE__ */ vb(function(l, s) {
    const { decorative: o, orientation: c = Mv, ...d } = l, f = Sb(c) ? c : Mv, m = f === oh.Vertical ? f : void 0, p = o ? { role: "none" } : { "aria-orientation": m, role: "separator" };
    return /* @__PURE__ */ O.jsx(
      JE.div,
      {
        "data-orientation": f,
        ...p,
        ...d,
        ref: s
      }
    );
  }, "Separator")
);
function Sb(i) {
  return $E.includes(i);
}
vb(Sb, "isValidOrientation");
function Tb(i) {
  var l, s, o = "";
  if (typeof i == "string" || typeof i == "number") o += i;
  else if (typeof i == "object") if (Array.isArray(i)) {
    var c = i.length;
    for (l = 0; l < c; l++) i[l] && (s = Tb(i[l])) && (o && (o += " "), o += s);
  } else for (s in i) i[s] && (o && (o += " "), o += s);
  return o;
}
function xb() {
  for (var i, l, s = 0, o = "", c = arguments.length; s < c; s++) (i = arguments[s]) && (l = Tb(i)) && (o && (o += " "), o += l);
  return o;
}
const tA = (i, l) => {
  const s = new Array(i.length + l.length);
  for (let o = 0; o < i.length; o++)
    s[o] = i[o];
  for (let o = 0; o < l.length; o++)
    s[i.length + o] = l[o];
  return s;
}, eA = (i, l) => ({
  classGroupId: i,
  validator: l
}), Eb = (i = /* @__PURE__ */ new Map(), l = null, s) => ({
  nextPart: i,
  validators: l,
  classGroupId: s
}), Fr = "-", Dv = [], nA = "arbitrary..", iA = (i) => {
  const l = lA(i), {
    conflictingClassGroups: s,
    conflictingClassGroupModifiers: o
  } = i;
  return {
    getClassGroupId: (f) => {
      if (f.startsWith("[") && f.endsWith("]"))
        return aA(f);
      const m = f.split(Fr), p = m[0] === "" && m.length > 1 ? 1 : 0;
      return Ab(m, p, l);
    },
    getConflictingClassGroupIds: (f, m) => {
      if (m) {
        const p = o[f], g = s[f];
        return p ? g ? tA(g, p) : p : g || Dv;
      }
      return s[f] || Dv;
    }
  };
}, Ab = (i, l, s) => {
  if (i.length - l === 0)
    return s.classGroupId;
  const c = i[l], d = s.nextPart.get(c);
  if (d) {
    const g = Ab(i, l + 1, d);
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
}, aA = (i) => i.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
  const l = i.slice(1, -1), s = l.indexOf(":"), o = l.slice(0, s);
  return o ? nA + o : void 0;
})(), lA = (i) => {
  const {
    theme: l,
    classGroups: s
  } = i;
  return sA(s, l);
}, sA = (i, l) => {
  const s = Eb();
  for (const o in i) {
    const c = i[o];
    rh(c, s, o, l);
  }
  return s;
}, rh = (i, l, s, o) => {
  const c = i.length;
  for (let d = 0; d < c; d++) {
    const f = i[d];
    oA(f, l, s, o);
  }
}, oA = (i, l, s, o) => {
  if (typeof i == "string") {
    rA(i, l, s);
    return;
  }
  if (typeof i == "function") {
    uA(i, l, s, o);
    return;
  }
  cA(i, l, s, o);
}, rA = (i, l, s) => {
  const o = i === "" ? l : wb(l, i);
  o.classGroupId = s;
}, uA = (i, l, s, o) => {
  if (fA(i)) {
    rh(i(o), l, s, o);
    return;
  }
  l.validators === null && (l.validators = []), l.validators.push(eA(s, i));
}, cA = (i, l, s, o) => {
  const c = Object.entries(i), d = c.length;
  for (let f = 0; f < d; f++) {
    const [m, p] = c[f];
    rh(p, wb(l, m), s, o);
  }
}, wb = (i, l) => {
  let s = i;
  const o = l.split(Fr), c = o.length;
  for (let d = 0; d < c; d++) {
    const f = o[d];
    let m = s.nextPart.get(f);
    m || (m = Eb(), s.nextPart.set(f, m)), s = m;
  }
  return s;
}, fA = (i) => "isThemeGetter" in i && i.isThemeGetter === !0, dA = (i) => {
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
}, Od = "!", Ov = ":", hA = [], zv = (i, l, s, o, c) => ({
  modifiers: i,
  hasImportantModifier: l,
  baseClassName: s,
  maybePostfixModifierPosition: o,
  isExternal: c
}), mA = (i) => {
  const {
    prefix: l,
    experimentalParseClassName: s
  } = i;
  let o = (c) => {
    const d = [];
    let f = 0, m = 0, p = 0, g;
    const v = c.length;
    for (let w = 0; w < v; w++) {
      const x = c[w];
      if (f === 0 && m === 0) {
        if (x === Ov) {
          d.push(c.slice(p, w)), p = w + 1;
          continue;
        }
        if (x === "/") {
          g = w;
          continue;
        }
      }
      x === "[" ? f++ : x === "]" ? f-- : x === "(" ? m++ : x === ")" && m--;
    }
    const y = d.length === 0 ? c : c.slice(p);
    let S = y, C = !1;
    y.endsWith(Od) ? (S = y.slice(0, -1), C = !0) : (
      /**
       * In Tailwind CSS v3 the important modifier was at the start of the base class name. This is still supported for legacy reasons.
       * @see https://github.com/dcastil/tailwind-merge/issues/513#issuecomment-2614029864
       */
      y.startsWith(Od) && (S = y.slice(1), C = !0)
    );
    const T = g && g > p ? g - p : void 0;
    return zv(d, C, S, T);
  };
  if (l) {
    const c = l + Ov, d = o;
    o = (f) => f.startsWith(c) ? d(f.slice(c.length)) : zv(hA, !1, f, void 0, !0);
  }
  if (s) {
    const c = o;
    o = (d) => s({
      className: d,
      parseClassName: c
    });
  }
  return o;
}, pA = (i) => {
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
}, gA = (i) => ({
  cache: dA(i.cacheSize),
  parseClassName: mA(i),
  sortModifiers: pA(i),
  postfixLookupClassGroupIds: yA(i),
  ...iA(i)
}), yA = (i) => {
  const l = /* @__PURE__ */ Object.create(null), s = i.postfixLookupClassGroups;
  if (s)
    for (let o = 0; o < s.length; o++)
      l[s[o]] = !0;
  return l;
}, vA = /\s+/, bA = (i, l) => {
  const {
    parseClassName: s,
    getClassGroupId: o,
    getConflictingClassGroupIds: c,
    sortModifiers: d,
    postfixLookupClassGroupIds: f
  } = l, m = [], p = i.trim().split(vA);
  let g = "";
  for (let v = p.length - 1; v >= 0; v -= 1) {
    const y = p[v], {
      isExternal: S,
      modifiers: C,
      hasImportantModifier: T,
      baseClassName: w,
      maybePostfixModifierPosition: x
    } = s(y);
    if (S) {
      g = y + (g.length > 0 ? " " + g : g);
      continue;
    }
    let D = !!x, z;
    if (D) {
      const j = w.substring(0, x);
      z = o(j);
      const N = z && f[z] ? o(w) : void 0;
      N && N !== z && (z = N, D = !1);
    } else
      z = o(w);
    if (!z) {
      if (!D) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      if (z = o(w), !z) {
        g = y + (g.length > 0 ? " " + g : g);
        continue;
      }
      D = !1;
    }
    const H = C.length === 0 ? "" : C.length === 1 ? C[0] : d(C).join(":"), L = T ? H + Od : H, $ = L + z;
    if (m.indexOf($) > -1)
      continue;
    m.push($);
    const ot = c(z, D);
    for (let j = 0; j < ot.length; ++j) {
      const N = ot[j];
      m.push(L + N);
    }
    g = y + (g.length > 0 ? " " + g : g);
  }
  return g;
}, SA = (...i) => {
  let l = 0, s, o, c = "";
  for (; l < i.length; )
    (s = i[l++]) && (o = Cb(s)) && (c && (c += " "), c += o);
  return c;
}, Cb = (i) => {
  if (typeof i == "string")
    return i;
  let l, s = "";
  for (let o = 0; o < i.length; o++)
    i[o] && (l = Cb(i[o])) && (s && (s += " "), s += l);
  return s;
}, TA = (i, ...l) => {
  let s, o, c, d;
  const f = (p) => {
    const g = l.reduce((v, y) => y(v), i());
    return s = gA(g), o = s.cache.get, c = s.cache.set, d = m, m(p);
  }, m = (p) => {
    const g = o(p);
    if (g)
      return g;
    const v = bA(p, s);
    return c(p, v), v;
  };
  return d = f, (...p) => d(SA(...p));
}, xA = [], fe = (i) => {
  const l = (s) => s[i] || xA;
  return l.isThemeGetter = !0, l.themeKey = i, l;
}, Mb = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, Db = /^\((?:(\w[\w-]*):)?(.+)\)$/i, EA = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/, AA = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wA = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, CA = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix|color|light-dark)\(.+\)$/, MA = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, DA = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, ji = (i) => EA.test(i), Ot = (i) => !!i && !Number.isNaN(Number(i)), Bn = (i) => !!i && Number.isInteger(Number(i)), td = (i) => i.endsWith("%") && Ot(i.slice(0, -1)), ii = (i) => AA.test(i), Ob = () => !0, OA = (i) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  wA.test(i) && !CA.test(i)
), uh = () => !1, zA = (i) => MA.test(i), NA = (i) => DA.test(i), RA = (i) => !ht(i) && !mt(i), VA = (i) => i.startsWith("@container") && (i[10] === "/" && i[11] !== void 0 || i[11] === "s" && i[16] !== void 0 && i.startsWith("-size/", 10) || i[11] === "n" && i[18] !== void 0 && i.startsWith("-normal/", 10)), _A = (i) => Hi(i, Rb, uh), ht = (i) => Mb.test(i), ha = (i) => Hi(i, Vb, OA), Nv = (i) => Hi(i, YA, Ot), jA = (i) => Hi(i, jb, Ob), LA = (i) => Hi(i, _b, uh), Rv = (i) => Hi(i, zb, uh), BA = (i) => Hi(i, Nb, NA), Nr = (i) => Hi(i, Lb, zA), mt = (i) => Db.test(i), Ns = (i) => Ea(i, Vb), UA = (i) => Ea(i, _b), Vv = (i) => Ea(i, zb), HA = (i) => Ea(i, Rb), GA = (i) => Ea(i, Nb), Rr = (i) => Ea(i, Lb, !0), kA = (i) => Ea(i, jb, !0), Hi = (i, l, s) => {
  const o = Mb.exec(i);
  return o ? o[1] ? l(o[1]) : s(o[2]) : !1;
}, Ea = (i, l, s = !1) => {
  const o = Db.exec(i);
  return o ? o[1] ? l(o[1]) : s : !1;
}, zb = (i) => i === "position" || i === "percentage", Nb = (i) => i === "image" || i === "url", Rb = (i) => i === "length" || i === "size" || i === "bg-size", Vb = (i) => i === "length", YA = (i) => i === "number", _b = (i) => i === "family-name", jb = (i) => i === "number" || i === "weight", Lb = (i) => i === "shadow", qA = () => {
  const i = fe("color"), l = fe("font"), s = fe("text"), o = fe("font-weight"), c = fe("tracking"), d = fe("leading"), f = fe("breakpoint"), m = fe("container"), p = fe("spacing"), g = fe("radius"), v = fe("shadow"), y = fe("inset-shadow"), S = fe("text-shadow"), C = fe("drop-shadow"), T = fe("blur"), w = fe("perspective"), x = fe("aspect"), D = fe("ease"), z = fe("animate"), H = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], L = () => [
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
  ], $ = () => [...L(), mt, ht], ot = () => ["auto", "hidden", "clip", "visible", "scroll"], j = () => ["auto", "contain", "none"], N = () => [mt, ht, p], ut = () => [ji, "full", "auto", ...N()], ct = () => [Bn, "none", "subgrid", mt, ht], P = () => ["auto", {
    span: ["full", Bn, mt, ht]
  }, Bn, mt, ht], K = () => [Bn, "auto", mt, ht], lt = () => ["auto", "min", "max", "fr", mt, ht], I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], W = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], q = () => ["auto", ...N()], F = () => [ji, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...N()], tt = () => [m, ji, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...N()], at = () => [ji, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...N()], Y = () => [i, mt, ht], yt = () => [...L(), Vv, Rv, {
    position: [mt, ht]
  }], bt = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], et = () => ["auto", "cover", "contain", HA, _A, {
    size: [mt, ht]
  }], E = () => [td, Ns, ha], G = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    g,
    mt,
    ht
  ], nt = () => ["", Ot, Ns, ha], it = () => ["solid", "dashed", "dotted", "double"], vt = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], ft = () => [Ot, td, Vv, Rv], Tt = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    T,
    mt,
    ht
  ], st = () => ["none", Ot, mt, ht], J = () => ["none", Ot, mt, ht], Et = () => [Ot, mt, ht], Mt = () => [ji, "full", ...N()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [ii],
      breakpoint: [ii],
      color: [Ob],
      container: [ii],
      "drop-shadow": [ii],
      ease: ["in", "out", "in-out"],
      font: [RA],
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
        aspect: ["auto", "square", ji, ht, mt, x]
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
      "container-named": [VA],
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
        "break-after": H()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": H()
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
        object: $()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ot()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ot()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ot()
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
        inset: ut()
      }],
      /**
       * Inset Inline
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": ut()
      }],
      /**
       * Inset Block
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": ut()
      }],
      /**
       * Inset Inline Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-s` in next major release
       */
      start: [{
        "inset-s": ut(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-s-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        start: ut()
      }],
      /**
       * Inset Inline End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       * @todo class group will be renamed to `inset-e` in next major release
       */
      end: [{
        "inset-e": ut(),
        /**
         * @deprecated since Tailwind CSS v4.2.0 in favor of `inset-e-*` utilities.
         * @see https://github.com/tailwindlabs/tailwindcss/pull/19613
         */
        end: ut()
      }],
      /**
       * Inset Block Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-bs": [{
        "inset-bs": ut()
      }],
      /**
       * Inset Block End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-be": [{
        "inset-be": ut()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: ut()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: ut()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: ut()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: ut()
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
        flex: [Ot, ji, "auto", "initial", "none", ht]
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
        "grid-cols": ct()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: P()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": K()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": K()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": ct()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: P()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": K()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": K()
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
        justify: [...I(), "normal"]
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
        content: ["normal", ...I()]
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
        "place-content": I()
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
        size: F()
      }],
      /**
       * Inline Size
       * @see https://tailwindcss.com/docs/inline-size
       */
      "inline-size": [{
        inline: ["auto", ...tt()]
      }],
      /**
       * Min-Inline Size
       * @see https://tailwindcss.com/docs/min-inline-size
       */
      "min-inline-size": [{
        "min-inline": ["auto", ...tt()]
      }],
      /**
       * Max-Inline Size
       * @see https://tailwindcss.com/docs/max-inline-size
       */
      "max-inline-size": [{
        "max-inline": ["none", ...tt()]
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
        w: [m, "screen", ...F()]
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
          ...F()
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
          ...F()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...F()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...F()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", "none", ...F()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", s, Ns, ha]
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
        font: [o, kA, jA]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", td, ht]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [UA, LA, l]
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
        "line-clamp": [Ot, "none", mt, Nv]
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
        decoration: [...it(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [Ot, "from-font", "auto", mt, ha]
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
        bg: et()
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
        }, GA, BA]
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
        from: E()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: E()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: E()
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
        rounded: G()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": G()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": G()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": G()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": G()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": G()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": G()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": G()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": G()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": G()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": G()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": G()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": G()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": G()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": G()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: nt()
      }],
      /**
       * Border Width Inline
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": nt()
      }],
      /**
       * Border Width Block
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": nt()
      }],
      /**
       * Border Width Inline Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": nt()
      }],
      /**
       * Border Width Inline End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": nt()
      }],
      /**
       * Border Width Block Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-bs": [{
        "border-bs": nt()
      }],
      /**
       * Border Width Block End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-be": [{
        "border-be": nt()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": nt()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": nt()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": nt()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": nt()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": nt()
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
        "divide-y": nt()
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
        border: [...it(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...it(), "hidden", "none"]
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
        outline: [...it(), "none", "hidden"]
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
        outline: ["", Ot, Ns, ha]
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
        ring: nt()
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
        "ring-offset": [Ot, ha]
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
        "inset-ring": nt()
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
        opacity: [Ot, mt, ht]
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
        "mask-linear": [Ot]
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
        "mask-radial-at": L()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [Ot]
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
        mask: et()
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
          C,
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
        "backdrop-blur": Tt()
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
        duration: [Ot, "initial", mt, ht]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", D, mt, ht]
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
        perspective: [w, mt, ht]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": $()
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
        scale: J()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": J()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": J()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": J()
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
        origin: $()
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
        stroke: [Ot, Ns, ha, Nv]
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
}, XA = /* @__PURE__ */ TA(qA);
function Aa(...i) {
  return XA(xb(i));
}
const Bb = X.forwardRef(({ className: i, orientation: l = "horizontal", decorative: s = !0, ...o }, c) => /* @__PURE__ */ O.jsx(bb, { ref: c, decorative: s, orientation: l, className: Aa("vt:shrink-0 vt:bg-border", l === "horizontal" ? "vt:h-px vt:w-full" : "vt:h-full vt:w-px", i), ...o }));
Bb.displayName = bb.displayName;
const QA = (i) => i?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function ZA(i, l, s = []) {
  if (l == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: QA(i),
    size: 24,
    node: l,
    ...s.length > 0 ? { aliases: s } : {}
  };
}
const KA = (i) => {
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
const PA = (i) => {
  const l = KA(i);
  return l.charAt(0).toUpperCase() + l.slice(1);
};
const zd = (...i) => i.filter((l, s, o) => !!l && l.trim() !== "" && o.indexOf(l) === s).join(" ").trim();
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
function ed(i) {
  return i != null;
}
function FA(i, l = {}) {
  const s = l.attributeNames ?? {}, o = (S) => s[S] ?? S, c = i.size ?? i.width ?? ma.width, d = i.size ?? i.height ?? ma.height, f = i.aliases?.filter((S) => typeof S == "string" && S.trim() !== "").map((S) => `lucide-${S}`) ?? [], m = [...i.name ? [`lucide-${i.name}`] : [], ...f], p = l.className?.split(" ").filter(Boolean) ?? [], g = l.includeDefaultClasses === !1 ? zd(...p) : zd("lucide", ...m, ...p), v = l.absoluteStrokeWidth ? Number(l.strokeWidth ?? ma["stroke-width"]) * Number(i.size ?? i.width ?? ma.width) / Number(l.size ?? l.width ?? ma.width) : l.strokeWidth ?? ma["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(ma).reduce((S, [C, T]) => (S[o(C)] = T, S), {}),
      ..."color" in l && l.color && {
        [o("stroke")]: l.color
      },
      ..."size" in l && ed(l.size) && {
        [o("width")]: l.size,
        [o("height")]: l.size
      },
      ..."width" in l && ed(l.width) && {
        [o("width")]: l.width
      },
      ..."height" in l && ed(l.height) && {
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
      const [C, T, w] = S, x = l.nonScalingStroke ? { [o("vector-effect")]: "non-scaling-stroke", ...T } : T;
      return w ? [C, x, w] : [C, x];
    })
  ];
}
function JA(i, l = {}) {
  return FA(i, {
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
const IA = (i) => {
  for (const l in i)
    if (l.startsWith("aria-") || l === "role" || l === "title")
      return !0;
  return !1;
}, WA = X.createContext({}), $A = () => X.useContext(WA), t2 = X.forwardRef(
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
      absoluteStrokeWidth: w = !1,
      nonScalingStroke: x = !1,
      color: D = "currentColor",
      className: z = ""
    } = $A() ?? {}, H = !!p || IA(y), [L, $, ot = []] = JA(v, {
      color: i ?? D,
      width: s ?? l ?? C,
      height: o ?? l ?? C,
      strokeWidth: c ?? T,
      absoluteStrokeWidth: d ?? w,
      nonScalingStroke: f ?? x,
      className: zd(z, m),
      hasA11yProp: H,
      attributes: y
    });
    return X.createElement(
      L,
      {
        ref: S,
        ...$
      },
      [
        ...ot.map(([j, N]) => X.createElement(j, N)),
        ...Array.isArray(p) ? p : [p]
      ]
    );
  }
);
function wa(i, l = [], s = []) {
  const o = typeof i == "string" ? ZA(i, l, s) : i, c = X.forwardRef(
    ({ className: d, ...f }, m) => X.createElement(t2, {
      ref: m,
      icon: o,
      className: d,
      ...f
    })
  );
  return o.name && (c.displayName = PA(o.name)), c;
}
const Ub = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
Ub.node;
const Hb = wa(Ub);
const Gb = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
Gb.node;
const _s = wa(Gb);
const kb = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
kb.node;
const ch = wa(kb);
const Yb = {
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
Yb.node;
const e2 = wa(Yb);
const qb = {
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
qb.node;
const n2 = wa(qb);
const Xb = {
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
Xb.node;
const Qb = wa(Xb);
const Zb = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
Zb.node;
const i2 = wa(Zb), Kb = X.createContext({});
function a2(i) {
  const l = X.useRef(null);
  return l.current === null && (l.current = i()), l.current;
}
const l2 = typeof window < "u", _v = l2 ? X.useLayoutEffect : X.useEffect, fh = /* @__PURE__ */ X.createContext(null);
function dh(i, l) {
  i.indexOf(l) === -1 && i.push(l);
}
function Jr(i, l) {
  const s = i.indexOf(l);
  s > -1 && i.splice(s, 1);
}
const Gn = (i, l, s) => s > l ? l : s < i ? i : s;
let uu = () => {
};
const Hn = {}, hh = (i) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(i), Pb = (i) => typeof i == "object" && i !== null, mh = (i) => /^0[^.\s]+$/u.test(i);
// @__NO_SIDE_EFFECTS__
function Fb(i) {
  let l;
  return () => (l === void 0 && (l = i()), l);
}
const En = /* @__NO_SIDE_EFFECTS__ */ (i) => i, Is = (...i) => i.reduce((l, s) => (o) => s(l(o))), Ta = /* @__NO_SIDE_EFFECTS__ */ (i, l, s) => {
  const o = l - i;
  return o ? (s - i) / o : 1;
};
class Ir {
  constructor() {
    this.subscriptions = [];
  }
  add(l) {
    return dh(this.subscriptions, l), () => this.remove(l);
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
const dn = /* @__NO_SIDE_EFFECTS__ */ (i) => i * 1e3, We = /* @__NO_SIDE_EFFECTS__ */ (i) => i / 1e3, Jb = /* @__NO_SIDE_EFFECTS__ */ (i, l) => l ? i * (1e3 / l) : 0, nd = (i, l, s) => i * (3 * (1 - i) * ((1 - i) * l + i * s) + i * i);
// @__NO_SIDE_EFFECTS__
function Ws(i, l, s, o) {
  return i === l && s === o ? En : (c) => {
    let d = 0, f = 1, m = c;
    for (let p = 0; ; p++) {
      m >= d && m <= f || (m = (d + f) / 2);
      const g = nd(m, i, s) - c;
      if (g * g < 1e-28 || p === 40)
        break;
      g > 0 ? f = m : d = m, m -= g * 1e-7 / (nd(m + 1e-7, i, s) - c - g);
    }
    return nd(m, l, o);
  };
}
const Ib = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => l <= 0.5 ? i(2 * l) / 2 : (2 - i(2 * (1 - l))) / 2, Wb = /* @__NO_SIDE_EFFECTS__ */ (i) => (l) => 1 - i(1 - l), $b = /* @__PURE__ */ Ws(0.33, 1.53, 0.69, 0.99), ph = /* @__PURE__ */ Wb($b), t1 = /* @__PURE__ */ Ib(ph), e1 = (i) => i >= 1 ? 1 : (i *= 2) < 1 ? 0.5 * ph(i) : 0.5 * (2 - Math.pow(2, -10 * (i - 1))), gh = (i) => 1 - Math.sin(Math.acos(i)), n1 = /* @__PURE__ */ Wb(gh), i1 = /* @__PURE__ */ Ib(gh), s2 = /* @__PURE__ */ Ws(0.42, 0, 1, 1), o2 = /* @__PURE__ */ Ws(0, 0, 0.58, 1), yh = /* @__PURE__ */ Ws(0.42, 0, 0.58, 1), r2 = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] != "number", vh = /* @__NO_SIDE_EFFECTS__ */ (i) => Array.isArray(i) && typeof i[0] == "number", u2 = {
  linear: En,
  easeIn: s2,
  easeInOut: yh,
  easeOut: o2,
  circIn: gh,
  circInOut: i1,
  circOut: n1,
  backIn: ph,
  backInOut: t1,
  backOut: $b,
  anticipate: e1
}, c2 = (i) => typeof i == "string", jv = (i) => {
  if (/* @__PURE__ */ vh(i)) {
    uu(i.length === 4);
    const [l, s, o, c] = i;
    return /* @__PURE__ */ Ws(l, s, o, c);
  } else if (c2(i))
    return u2[i];
  return i;
}, ue = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
};
let Hr;
function f2() {
  Hr = void 0;
}
const ee = {
  now: () => (Hr === void 0 && ee.set(ue.isProcessing || Hn.useManualTiming ? ue.timestamp : performance.now()), Hr),
  set: (i) => {
    Hr = i, queueMicrotask(f2);
  }
}, wl = (i) => Math.round(i * 1e5) / 1e5, a1 = (i) => (l) => typeof l == "string" && l.startsWith(i), l1 = /* @__PURE__ */ a1("--"), d2 = /* @__PURE__ */ a1("var(--"), bh = (i) => d2(i) ? h2.test(i.split("/*")[0].trim()) : !1, h2 = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function id(i) {
  return typeof i != "string" ? !1 : i.split("/*")[0].includes("var(--");
}
const Dl = {
  test: (i) => typeof i == "number",
  parse: parseFloat,
  transform: (i) => i
}, Us = {
  ...Dl,
  transform: (i) => Gn(0, 1, i)
}, Vr = {
  ...Dl,
  default: 1
}, Sh = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function m2(i) {
  return i == null;
}
const p2 = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu, Th = (i, l) => (s) => !!(typeof s == "string" && p2.test(s) && s.startsWith(i) || l && !m2(s) && Object.prototype.hasOwnProperty.call(s, l)), s1 = (i, l, s) => (o) => {
  if (typeof o != "string")
    return o;
  const [c, d, f, m] = o.match(Sh);
  return {
    [i]: parseFloat(c),
    [l]: parseFloat(d),
    [s]: parseFloat(f),
    alpha: m !== void 0 ? parseFloat(m) : 1
  };
}, g2 = (i) => Gn(0, 255, i), ad = {
  ...Dl,
  transform: (i) => Math.round(g2(i))
}, ga = {
  test: /* @__PURE__ */ Th("rgb", "red"),
  parse: /* @__PURE__ */ s1("red", "green", "blue"),
  transform: ({ red: i, green: l, blue: s, alpha: o = 1 }) => "rgba(" + ad.transform(i) + ", " + ad.transform(l) + ", " + ad.transform(s) + ", " + wl(Us.transform(o)) + ")"
};
function y2(i) {
  let l = "", s = "", o = "", c = "";
  return i.length > 5 ? (l = i.substring(1, 3), s = i.substring(3, 5), o = i.substring(5, 7), c = i.substring(7, 9)) : (l = i.substring(1, 2), s = i.substring(2, 3), o = i.substring(3, 4), c = i.substring(4, 5), l += l, s += s, o += o, c += c), {
    red: parseInt(l, 16),
    green: parseInt(s, 16),
    blue: parseInt(o, 16),
    alpha: c ? parseInt(c, 16) / 255 : 1
  };
}
const Nd = {
  test: /* @__PURE__ */ Th("#"),
  parse: y2,
  transform: ga.transform
}, $s = /* @__NO_SIDE_EFFECTS__ */ (i) => ({
  test: (l) => typeof l == "string" && l.endsWith(i) && l.split(" ").length === 1,
  parse: parseFloat,
  transform: (l) => `${l}${i}`
}), ai = /* @__PURE__ */ $s("deg"), Un = /* @__PURE__ */ $s("%"), gt = /* @__PURE__ */ $s("px"), v2 = /* @__PURE__ */ $s("vh"), b2 = /* @__PURE__ */ $s("vw"), Lv = {
  ...Un,
  parse: (i) => Un.parse(i) / 100,
  transform: (i) => Un.transform(i * 100)
}, Sl = {
  test: /* @__PURE__ */ Th("hsl", "hue"),
  parse: /* @__PURE__ */ s1("hue", "saturation", "lightness"),
  transform: ({ hue: i, saturation: l, lightness: s, alpha: o = 1 }) => "hsla(" + Math.round(i) + ", " + Un.transform(wl(l)) + ", " + Un.transform(wl(s)) + ", " + wl(Us.transform(o)) + ")"
}, he = {
  test: (i) => ga.test(i) || Nd.test(i) || Sl.test(i),
  parse: (i) => ga.test(i) ? ga.parse(i) : Sl.test(i) ? Sl.parse(i) : Nd.parse(i),
  transform: (i) => typeof i == "string" ? i : i.hasOwnProperty("red") ? ga.transform(i) : Sl.transform(i),
  getAnimatableNone: (i) => {
    const l = he.parse(i);
    return l.alpha = 0, he.transform(l);
  }
}, S2 = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, o1 = /* @__PURE__ */ new RegExp(Sh.source), r1 = /* @__PURE__ */ new RegExp(S2.source, "i");
function T2(i) {
  return isNaN(i) && typeof i == "string" && (o1.test(i) || r1.test(i));
}
const u1 = "number", c1 = "color", x2 = "var", E2 = "var(", Bv = "${}", A2 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function w2(i) {
  const l = i.toString();
  return o1.test(l) || r1.test(l);
}
function Hs(i) {
  const l = i.toString(), s = [], o = {
    color: [],
    number: [],
    var: []
  }, c = [];
  let d = 0;
  const m = l.replace(A2, (p) => (he.test(p) ? (o.color.push(d), c.push(c1), s.push(he.parse(p))) : p.startsWith(E2) ? (o.var.push(d), c.push(x2), s.push(p)) : (o.number.push(d), c.push(u1), s.push(parseFloat(p))), ++d, Bv)).split(Bv);
  return { values: s, split: m, indexes: o, types: c };
}
function C2(i) {
  return Hs(i).values;
}
function f1({ split: i, types: l }) {
  const s = i.length;
  return (o) => {
    let c = "";
    for (let d = 0; d < s; d++)
      if (c += i[d], o[d] !== void 0) {
        const f = l[d];
        f === u1 ? c += wl(o[d]) : f === c1 ? c += he.transform(o[d]) : c += o[d];
      }
    return c;
  };
}
function M2(i) {
  return f1(Hs(i));
}
const D2 = (i) => typeof i == "number" ? 0 : he.test(i) ? he.getAnimatableNone(i) : i, O2 = (i, l) => typeof i == "number" ? l?.trim().endsWith("/") ? i : 0 : D2(i);
function z2(i) {
  const l = Hs(i);
  return f1(l)(l.values.map((o, c) => O2(o, l.split[c])));
}
const $e = {
  test: T2,
  parse: C2,
  createTransformer: M2,
  getAnimatableNone: z2
};
function ld(i, l, s) {
  return s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6 ? i + (l - i) * 6 * s : s < 1 / 2 ? l : s < 2 / 3 ? i + (l - i) * (2 / 3 - s) * 6 : i;
}
function N2({ hue: i, saturation: l, lightness: s, alpha: o }) {
  i /= 360, l /= 100, s /= 100;
  let c = 0, d = 0, f = 0;
  if (!l)
    c = d = f = s;
  else {
    const m = s < 0.5 ? s * (1 + l) : s + l - s * l, p = 2 * s - m;
    c = ld(p, m, i + 1 / 3), d = ld(p, m, i), f = ld(p, m, i - 1 / 3);
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
const qt = (i, l, s) => i + (l - i) * s, sd = (i, l, s) => {
  const o = i * i, c = s * (l * l - o) + o;
  return c < 0 ? 0 : Math.sqrt(c);
}, R2 = [Nd, ga, Sl], V2 = (i) => R2.find((l) => l.test(i));
function Uv(i) {
  const l = V2(i);
  if (!l)
    return !1;
  let s = l.parse(i);
  return l === Sl && (s = N2(s)), s;
}
const Hv = (i, l) => {
  const s = Uv(i), o = Uv(l);
  if (!s || !o)
    return Wr(i, l);
  const c = { ...s };
  return (d) => (c.red = sd(s.red, o.red, d), c.green = sd(s.green, o.green, d), c.blue = sd(s.blue, o.blue, d), c.alpha = qt(s.alpha, o.alpha, d), ga.transform(c));
}, Rd = /* @__PURE__ */ new Set(["none", "hidden"]);
function _2(i, l) {
  return Rd.has(i) ? (s) => s <= 0 ? i : l : (s) => s >= 1 ? l : i;
}
function j2(i, l) {
  return (s) => qt(i, l, s);
}
function xh(i) {
  return typeof i == "number" ? j2 : typeof i == "string" ? bh(i) ? Wr : he.test(i) ? Hv : U2 : Array.isArray(i) ? d1 : typeof i == "object" ? he.test(i) ? Hv : L2 : Wr;
}
function d1(i, l) {
  const s = [...i], o = s.length, c = i.map((d, f) => xh(d)(d, l[f]));
  return (d) => {
    for (let f = 0; f < o; f++)
      s[f] = c[f](d);
    return s;
  };
}
function L2(i, l) {
  const s = { ...i, ...l }, o = {};
  for (const c in s)
    i[c] !== void 0 && l[c] !== void 0 && (o[c] = xh(i[c])(i[c], l[c]));
  return (c) => {
    for (const d in o)
      s[d] = o[d](c);
    return s;
  };
}
function B2(i, l) {
  const s = [], o = { color: 0, var: 0, number: 0 };
  for (let c = 0; c < l.values.length; c++) {
    const d = l.types[c], f = i.indexes[d][o[d]], m = i.values[f] ?? 0;
    s[c] = m, o[d]++;
  }
  return s;
}
const U2 = (i, l) => {
  const s = $e.createTransformer(l), o = Hs(i), c = Hs(l);
  return o.indexes.var.length === c.indexes.var.length && o.indexes.color.length === c.indexes.color.length && o.indexes.number.length >= c.indexes.number.length ? Rd.has(i) && !c.values.length || Rd.has(l) && !o.values.length ? _2(i, l) : Is(d1(B2(o, c), c.values), s) : Wr(i, l);
}, Gv = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function H2(i, l) {
  const s = Gv.exec(i);
  if (!s)
    return;
  const o = Gv.exec(l);
  if (!o || s[2] !== o[2])
    return;
  const c = s[2], d = parseFloat(s[1]), f = parseFloat(o[1]);
  return (m) => wl(qt(d, f, m)) + c;
}
function Eh(i, l, s) {
  if (typeof i == "number" && typeof l == "number" && typeof s == "number")
    return qt(i, l, s);
  if (typeof i == "string" && typeof l == "string") {
    const c = H2(i, l);
    if (c)
      return c;
  }
  return xh(i)(i, l);
}
const _r = [
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
function G2(i) {
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
const k2 = 40;
function h1(i, l, s = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}) {
  let o = !1, c = !0;
  const d = () => o = !0, f = _r.reduce((H, L) => (H[L] = G2(d), H), {}), { setup: m, read: p, resolveKeyframes: g, preUpdate: v, update: y, preRender: S, render: C, postRender: T } = f, w = () => {
    const H = Hn.useManualTiming, L = H ? s.timestamp : performance.now();
    o = !1, H || (s.delta = c ? 1e3 / 60 : Math.max(Math.min(L - s.timestamp, k2), 1)), s.timestamp = L, s.isProcessing = !0, m.process(s), p.process(s), g.process(s), v.process(s), y.process(s), S.process(s), C.process(s), T.process(s), s.isProcessing = !1, o && l && (c = !1, i(w));
  }, x = () => {
    o = !0, c = !0, s.isProcessing || i(w);
  };
  return { schedule: _r.reduce((H, L) => {
    const $ = f[L];
    return H[L] = (ot, j = !1, N = !1) => (o || x(), $.schedule(ot, j, N)), H;
  }, {}), cancel: (H) => {
    for (let L = 0; L < _r.length; L++)
      f[_r[L]].cancel(H);
  }, state: s, steps: f };
}
const { schedule: Zt, cancel: Ui, steps: od } = /* @__PURE__ */ h1(typeof requestAnimationFrame < "u" ? requestAnimationFrame : En, !0, ue), m1 = (i) => {
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
}, p1 = (i, l, s = 10) => {
  let o = "";
  const c = Math.max(Math.round(l / s), 2);
  for (let d = 0; d < c; d++)
    o += Math.round(i(d / (c - 1)) * 1e4) / 1e4 + ", ";
  return `linear(${o.substring(0, o.length - 2)})`;
}, Ah = 2e4;
function wh(i, l = 50, s = Ah, o) {
  let c = 0, d = i.next(c);
  for (; !d.done && c < s; )
    c += l, d = i.next(c);
  return c >= s ? 1 / 0 : c;
}
function Y2(i, l = 100, s) {
  const { keyframes: o, velocity: c } = i, d = o && o[o.length - 1] - o[0], f = s({
    ...i,
    velocity: c && d ? c * l / d : c,
    keyframes: [0, l]
  }), m = Math.min(wh(f), Ah);
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
}, g1 = (i) => i < 0 ? 1 / Math.max(1 + i, we.minDamping) : Math.max(1 - i, we.minDamping);
function y1(i, l) {
  if (!(i > 1))
    return 1;
  const s = Math.sqrt(i * i - 1), o = i - s, c = i + s, d = 2 * s * Math.exp(-l) * (1 + l);
  return v1((f) => c * Math.exp(-o * f) - o * Math.exp(-c * f) - d, (f) => Math.exp(-c * f) - Math.exp(-o * f), l) / l;
}
function Vd(i, l) {
  return i * Math.sqrt(1 - l * l);
}
const q2 = 12;
function v1(i, l, s) {
  let o = s;
  for (let c = 1; c < q2; c++)
    o = o - i(o) / l(o);
  return o;
}
const rd = 1e-3;
function X2({ duration: i = we.duration, bounce: l = we.bounce }) {
  let s, o;
  const c = g1(l);
  i = Gn(we.minDuration, we.maxDuration, /* @__PURE__ */ We(i)), c < 1 ? (s = (g) => {
    const v = g * c, y = v * i, S = Vd(g, c), C = Math.exp(-y);
    return rd - v / S * C;
  }, o = (g) => {
    const y = g * c * i, S = c * c * g * g * i, C = Math.exp(-y), T = Vd(g * g, c);
    return (-s(g) + rd > 0 ? -1 : 1) * -S * C / T;
  }) : (s = (g) => {
    const v = Math.exp(-g * i), y = g * i + 1;
    return -rd + v * y;
  }, o = (g) => {
    const v = Math.exp(-g * i), y = -g * (i * i);
    return v * y;
  });
  const d = 5 / i, f = v1(s, o, d), m = f * y1(c, f * i), p = m * m;
  return {
    stiffness: p,
    damping: c * 2 * Math.sqrt(p),
    duration: /* @__PURE__ */ dn(i)
  };
}
const _d = (i, l) => (l ? i >= 0 : i > 0) && i < 1 / 0;
function ud(i, l) {
  if (_d(i, l))
    return i;
}
function Q2(i) {
  const l = ud(i.stiffness), s = ud(i.damping, !0), o = ud(i.mass), c = {
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
      const d = g1(i.bounce || 0), f = 2 * Math.PI / (i.visualDuration * 1.2) * y1(d, 2 * Math.PI / 1.2);
      c.stiffness = f * f, c.damping = 2 * d * Math.sqrt(c.stiffness);
    } else
      Object.assign(c, X2(c)), c.isResolvedFromDuration = !0;
    (!_d(c.stiffness) || !_d(c.damping, !0)) && (c.stiffness = we.stiffness, c.damping = we.damping);
  }
  return c;
}
function $r(i = we.visualDuration, l = we.bounce) {
  const s = typeof i != "object" ? {
    visualDuration: i,
    keyframes: [0, 1],
    bounce: l
  } : i, o = s.keyframes[0], c = s.keyframes[s.keyframes.length - 1], d = { done: !1, value: o }, { stiffness: f, damping: m, mass: p, duration: g, isResolvedFromDuration: v, isTimeDefined: y } = Q2({ ...s }), S = (j) => y ? 0 : -/* @__PURE__ */ We(j), C = m / (2 * Math.sqrt(f * p)), T = /* @__PURE__ */ We(Math.sqrt(f / p)), w = C * T, x = {
    target: c,
    delta: c - o,
    velocity: S(s.velocity || 0) || 0,
    restSpeed: 0,
    restDelta: 0
  }, D = () => {
    const j = Math.abs(x.delta) < 5;
    x.restSpeed = s.restSpeed || (j ? we.restSpeed.granular : we.restSpeed.default), x.restDelta = s.restDelta || (j ? we.restDelta.granular : we.restDelta.default);
  };
  D();
  let z, H, L;
  if (C < 1) {
    const j = Vd(T, C), N = { A: 0, sinC: 0, cosC: 0, t: -1, env: 0, sin: 0, cos: 0 };
    L = () => {
      N.A = (x.velocity + w * x.delta) / j, N.sinC = w * N.A + x.delta * j, N.cosC = w * x.delta - N.A * j;
    };
    const ut = (ct) => {
      ct !== N.t && (N.t = ct, N.env = Math.exp(-w * ct), N.sin = Math.sin(j * ct), N.cos = Math.cos(j * ct));
    };
    z = (ct) => (ut(ct), x.target - N.env * (N.A * N.sin + x.delta * N.cos)), H = (ct) => (ut(ct), N.env * (N.sinC * N.sin + N.cosC * N.cos));
  } else if (C === 1) {
    z = (N) => x.target - Math.exp(-T * N) * (x.delta + (x.velocity + T * x.delta) * N);
    const j = { C: 0 };
    L = () => {
      j.C = x.velocity + T * x.delta;
    }, H = (N) => Math.exp(-T * N) * (T * j.C * N - x.velocity);
  } else {
    const j = T * Math.sqrt(C * C - 1), N = w - j, ut = w + j, ct = y ? 1 / 0 : 300 / j, P = (lt, I) => Math.exp(I > ct ? -lt * ct - w * (I - ct) : -lt * I), K = { S: 0, F: 0 };
    L = () => {
      const lt = (x.velocity + w * x.delta) / j;
      K.S = (x.delta + lt) / 2, K.F = (x.delta - lt) / 2;
    }, z = (lt) => x.target - K.S * P(N, lt) - K.F * P(ut, lt), H = (lt) => N * K.S * P(N, lt) + ut * K.F * P(ut, lt);
  }
  L();
  const $ = v && g || null, ot = {
    calculatedDuration: $,
    /**
     * Aim the spring at a new target from its current position and
     * velocity, reusing the resolved physics and closures.
     */
    retarget: (j, N) => {
      x.target = j[j.length - 1], x.delta = x.target - j[0], x.velocity = S(N), s.restSpeed && s.restDelta || D(), ot.calculatedDuration = $, d.done = !1, L();
    },
    velocity: (j) => /* @__PURE__ */ dn(H(j)),
    next: (j) => {
      const N = z(j);
      if (v)
        d.done = j >= g;
      else {
        const ut = /* @__PURE__ */ dn(H(j));
        d.done = Math.abs(ut) <= x.restSpeed && Math.abs(x.target - N) <= x.restDelta;
      }
      return d.value = d.done ? x.target : N, d;
    },
    toString: () => {
      const j = Math.min(wh(ot), Ah), N = p1((ut) => ot.next(j * ut).value, j, 30);
      return j + "ms " + N;
    },
    toTransition: () => {
    }
  };
  return ot;
}
$r.applyToOptions = (i) => {
  const l = Y2(i, 100, $r);
  return i.ease = l.ease, i.duration = /* @__PURE__ */ dn(l.duration), i.type = "keyframes", i;
};
function tu({ keyframes: i, velocity: l = 0, power: s = 0.8, timeConstant: o = 325, bounceDamping: c = 10, bounceStiffness: d = 500, modifyTarget: f, min: m, max: p, restDelta: g = 0.5, restSpeed: v }) {
  const y = i[0], S = {
    done: !1,
    value: y
  }, C = (j) => j < m || j > p, T = (j) => m === void 0 ? p : p === void 0 || Math.abs(m - j) < Math.abs(p - j) ? m : p;
  let w = s * l;
  const x = y + w, D = f === void 0 ? x : f(x);
  D !== x && (w = D - y);
  const z = (j) => -w * Math.exp(-j / o), H = (j) => {
    const N = z(j);
    S.done = Math.abs(N) <= g, S.value = S.done ? D : D + N;
  };
  let L, $;
  const ot = (j) => {
    C(S.value) && (L = j, $ = $r({
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
  return ot(0), {
    calculatedDuration: null,
    next: (j) => {
      let N = !1;
      return !$ && L === void 0 && (N = !0, H(j), ot(j)), L !== void 0 && j >= L ? $.next(j - L) : (!N && H(j), S);
    }
  };
}
function Z2(i, l, s) {
  const o = [], c = s || Hn.mix || Eh, d = i.length - 1;
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
function K2(i, l, { clamp: s = !0, ease: o, mixer: c } = {}) {
  const d = i.length;
  if (uu(d === l.length), d === 1)
    return () => l[0];
  if (d === 2 && l[0] === l[1])
    return () => l[1];
  const f = i[0] === i[1];
  i[0] > i[d - 1] && (i = [...i].reverse(), l = [...l].reverse());
  const m = Z2(l, o, c), p = m.length, g = (v) => {
    if (f && v < i[0])
      return l[0];
    let y = 0;
    if (p > 1)
      for (; y < i.length - 2 && !(v < i[y + 1]); y++)
        ;
    const S = /* @__PURE__ */ Ta(i[y], i[y + 1], v);
    return m[y](S);
  };
  return s ? (v) => g(Gn(i[0], i[d - 1], v)) : g;
}
function P2(i, l) {
  const s = i[i.length - 1];
  for (let o = 1; o <= l; o++) {
    const c = /* @__PURE__ */ Ta(0, l, o);
    i.push(qt(s, 1, c));
  }
}
function b1(i) {
  const l = [0];
  return P2(l, i.length - 1), l;
}
function F2(i, l) {
  return i.map((s) => s * l);
}
function J2(i, l) {
  return i.map(() => l || yh).splice(0, i.length - 1);
}
function Li({ duration: i = 300, keyframes: l, times: s, ease: o = "easeInOut" }) {
  const c = /* @__PURE__ */ r2(o) ? o.map(jv) : jv(o) || yh, d = {
    done: !1,
    value: l[0]
  };
  if (l.length === 2 && !Array.isArray(c) && (!s || s.length !== 2 || s[0] === 0 && s[1] === 1)) {
    const [p, g] = l, v = p === g ? void 0 : (Hn.mix || Eh)(p, g);
    return {
      calculatedDuration: i,
      next: (y) => (d.value = v ? v(c(i > 0 ? Gn(0, 1, y / i) : 1)) : g, d.done = y >= i, d)
    };
  }
  const f = F2(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    s && s.length === l.length ? s : b1(l),
    i
  ), m = K2(f, l, {
    ease: Array.isArray(c) ? c : J2(l, c)
  });
  return {
    calculatedDuration: i,
    next: (p) => (d.value = m(p), d.done = p >= i, d)
  };
}
const I2 = 5;
function W2(i, l, s) {
  const o = Math.max(l - I2, 0);
  return /* @__PURE__ */ Jb(s - i(o), l - o);
}
function $2(i, l, s = 0) {
  return l <= 0 ? s : i.velocity ? i.velocity(l) : W2((o) => i.next(o).value, l, i.next(l).value);
}
const tw = (i) => i !== null;
function Gs(i, { repeat: l, repeatType: s = "loop" }, o, c = 1) {
  const d = i.filter(tw), m = c < 0 || l && s !== "loop" && l % 2 === 1 ? 0 : d.length - 1;
  return !m || o === void 0 ? d[m] : o;
}
const ew = {
  decay: tu,
  inertia: tu,
  tween: Li,
  keyframes: Li,
  spring: $r
};
function S1(i) {
  typeof i.type == "string" && (i.type = ew[i.type]);
}
const nw = 40, T1 = (i, l) => l - i > nw && !Hn.useManualTiming ? l : i;
function x1(i, l) {
  return {
    kind: i,
    animation: l,
    timestamp: ee.now(),
    frameTimestamp: ue.timestamp,
    frameIsProcessing: ue.isProcessing
  };
}
function E1(i, l, s) {
  const o = globalThis.__MOTION_INSPECT__;
  if (o)
    try {
      o({
        ...x1("animation-start", i),
        options: s ? { ...l, ...s } : l
      });
    } catch {
    }
}
function iw(i, l) {
  const s = globalThis.__MOTION_INSPECT__;
  if (s)
    try {
      s({
        ...x1("layout-animation-start", i),
        node: l
      });
    } catch {
    }
}
class Ch {
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
const aw = (i) => i / 100, jd = (i) => Math.round(i * 1e4) / 1e4;
class ks extends Ch {
  constructor(l) {
    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
      done: !1,
      value: void 0
    }, this.stop = () => {
      const { motionValue: s } = this.options;
      s && s.updatedAt !== ee.now() && this.tick(ee.now()), this.isStopped = !0, this.state !== "idle" && (this.teardown(), this.options.onStop?.());
    }, this.options = l, this.initAnimation(), this.play(), l.autoplay === !1 && this.pause(), E1(this, this.options);
  }
  initAnimation() {
    const { options: l } = this;
    S1(l);
    const { type: s = Li, repeat: o = 0, repeatDelay: c = 0, repeatType: d, velocity: f = 0 } = l;
    let { keyframes: m } = l;
    const p = s || Li;
    p !== Li && typeof m[0] != "number" && (this.mixKeyframes = Is(aw, Eh(m[0], m[1])), m = [0, 100]);
    const g = p(m === l.keyframes ? l : { ...l, keyframes: m });
    d === "mirror" && (this.mirroredGenerator = p({
      ...l,
      keyframes: [...m].reverse(),
      velocity: -f
    })), g.calculatedDuration === null && (g.calculatedDuration = wh(g));
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
    this.startTime === this.pendingStartTime && (this.startTime = T1(this.startTime, l)), this.pendingStartTime = void 0, this.speed > 0 ? this.startTime = Math.min(this.startTime, l) : this.speed < 0 && (this.startTime = Math.min(l - c / this.speed, this.startTime)), s ? this.currentTime = l : this.updateTime(l);
    const y = this.currentTime - f * (this.playbackSpeed >= 0 ? 1 : -1), S = this.playbackSpeed >= 0 ? y < 0 : y > c;
    this.currentTime = Math.max(y, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = c);
    const C = this.generate(this.currentTime, S);
    let { done: T } = C;
    !S && d !== null && (T = this.playbackSpeed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
    const w = this.holdTime === null && (this.state === "finished" || this.state === "running" && T);
    return w && p !== tu && (C.value = Gs(m, this.options, v, this.speed)), g && g(C.value), w && this.finish(), C;
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
    const { options: o, totalDuration: c } = this, d = this.at(l) - (o.delay || 0);
    return d >= c && o.type !== tu ? Gs(o.keyframes, o, s ? void 0 : o.finalKeyframe) : this.generate(Math.max(d, 0), d < 0).value;
  }
  /**
   * The generator's state `currentTime` ms after the delay, without
   * changing the animation's own state.
   */
  generate(l, s) {
    const { generator: o, totalDuration: c, mixKeyframes: d, mirroredGenerator: f, resolvedDuration: m } = this, { keyframes: p, repeat: g, repeatType: v, repeatDelay: y } = this.options;
    let S = l, C = o;
    if (g) {
      const w = Math.min(l, c) / m;
      let x = Math.floor(w), D = w % 1;
      !D && w >= 1 && (D = 1), D === 1 && x--, x = Math.min(x, g + 1), x % 2 && (v === "reverse" ? (D = 1 - D, y && (D -= y / m)) : v === "mirror" && (C = f)), S = Gn(0, 1, D) * m;
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
    return $2(this.generator, this.currentTime, this.options.velocity);
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
    const { driver: l = m1, startTime: s } = this.options;
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
const lw = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function sw(i) {
  const [l, s] = i.slice(0, -1).split("(");
  if (l === "drop-shadow")
    return i;
  const [o] = s.match(Sh) || [];
  if (!o)
    return i;
  const c = s.replace(o, "");
  let d = lw.has(l) ? 1 : 0;
  return o !== s && (d *= 100), l + "(" + d + c + ")";
}
const ow = /\b([a-z-]*)\(.*?\)/gu, Ld = {
  ...$e,
  getAnimatableNone: (i) => {
    const l = i.match(ow);
    return l ? l.map(sw).join(" ") : i;
  }
}, Bd = {
  ...$e,
  getAnimatableNone: (i) => {
    const l = $e.parse(i);
    return $e.createTransformer(i)(l.map((o) => typeof o == "number" ? 0 : typeof o == "object" ? { ...o, alpha: 1 } : o));
  }
}, kv = {
  ...Dl,
  transform: Math.round
}, rw = {
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
  scale: Vr,
  scaleX: Vr,
  scaleY: Vr,
  scaleZ: Vr,
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
  originX: Lv,
  originY: Lv,
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
  ...rw,
  zIndex: kv,
  // SVG
  fillOpacity: Us,
  strokeOpacity: Us,
  numOctaves: kv
}, uw = {
  ...Ys,
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
  filter: Ld,
  WebkitFilter: Ld,
  mask: Bd,
  WebkitMask: Bd
}, A1 = (i) => uw[i], cw = /* @__PURE__ */ new Set([Ld, Bd]);
function Mh(i, l) {
  let s = A1(i);
  return cw.has(s) || (s = $e), s.getAnimatableNone ? s.getAnimatableNone(l) : void 0;
}
function fw(i) {
  for (let l = 1; l < i.length; l++)
    i[l] ?? (i[l] = i[l - 1]);
}
const ya = (i) => i * 180 / Math.PI, Ud = (i) => {
  const l = ya(Math.atan2(i[1], i[0]));
  return Hd(l);
}, dw = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scale: (i) => (Math.abs(i[0]) + Math.abs(i[3])) / 2,
  rotate: Ud,
  rotateZ: Ud,
  skewX: (i) => ya(Math.atan(i[1])),
  skewY: (i) => ya(Math.atan(i[2])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[2])) / 2
}, Hd = (i) => (i = i % 360, i < 0 && (i += 360), i), Yv = Ud, qv = (i) => Math.sqrt(i[0] * i[0] + i[1] * i[1]), Xv = (i) => Math.sqrt(i[4] * i[4] + i[5] * i[5]), hw = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: qv,
  scaleY: Xv,
  scale: (i) => (qv(i) + Xv(i)) / 2,
  rotateX: (i) => Hd(ya(Math.atan2(i[6], i[5]))),
  rotateY: (i) => Hd(ya(Math.atan2(-i[2], i[0]))),
  rotateZ: Yv,
  rotate: Yv,
  skewX: (i) => ya(Math.atan(i[4])),
  skewY: (i) => ya(Math.atan(i[1])),
  skew: (i) => (Math.abs(i[1]) + Math.abs(i[4])) / 2
};
function qs(i) {
  return i.includes("scale") ? 1 : 0;
}
function Gd(i, l) {
  if (!i || i === "none")
    return qs(l);
  const s = i.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let o, c;
  if (s)
    o = hw, c = s;
  else {
    const m = i.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    o = dw, c = m;
  }
  if (!c)
    return qs(l);
  const d = o[l], f = c[1].split(",").map(pw);
  return typeof d == "function" ? d(f) : f[d];
}
const mw = (i, l) => {
  const { transform: s = "none" } = getComputedStyle(i);
  return Gd(s, l);
};
function pw(i) {
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
], Bi = /* @__PURE__ */ new Set([...li, "pathRotation"]), Qv = (i) => i === Dl || i === gt, gw = /* @__PURE__ */ new Set(["x", "y", "z"]), yw = li.filter((i) => !gw.has(i));
function vw(i) {
  const l = [];
  return yw.forEach((s) => {
    const o = i.getValue(s);
    if (o !== void 0) {
      const c = o.get(), d = s.startsWith("scale") ? 1 : 0;
      if (c === d)
        return;
      l.push([s, c]), o.set(d);
    }
  }), l;
}
const bw = /* @__PURE__ */ new Set(["bottom", "right"]);
function Zv(i, l, s, o, c, d) {
  const f = parseFloat(i);
  if (!isNaN(f))
    return f;
  const { min: m, max: p } = l()[s], g = p - m;
  return d === "border-box" ? g : g - parseFloat(o) - parseFloat(c);
}
const va = {
  // Dimensions
  width: ({ width: i, paddingLeft: l = "0", paddingRight: s = "0", boxSizing: o }, c) => Zv(i, c, "x", l, s, o),
  height: ({ height: i, paddingTop: l = "0", paddingBottom: s = "0", boxSizing: o }, c) => Zv(i, c, "y", l, s, o),
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
va.translateX = va.x;
va.translateY = va.y;
const ba = /* @__PURE__ */ new Set();
let kd = !1, Yd = !1, qd = !1;
function w1() {
  if (Yd) {
    const i = [], l = /* @__PURE__ */ new Set(), s = /* @__PURE__ */ new Set();
    ba.forEach((c) => {
      c.needsMeasurement && (i.push(c), l.add(c.element), bw.has(c.name) && s.add(c.element));
    });
    const o = /* @__PURE__ */ new Map();
    s.forEach((c) => {
      const d = vw(c);
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
  Yd = !1, kd = !1, ba.forEach((i) => i.complete(qd)), ba.clear();
}
function C1() {
  ba.forEach((i) => {
    i.readKeyframes(), i.needsMeasurement && (Yd = !0);
  });
}
function Sw() {
  qd = !0, C1(), w1(), qd = !1;
}
function Tw(i, l, s) {
  if (typeof i == "string") {
    if (hh(i) || mh(i))
      return parseFloat(i);
    if (!$e.test(i) && $e.test(s))
      return Mh(l, s);
  }
  return i ?? void 0;
}
class Dh {
  constructor(l, s, o, c, d, f = !1) {
    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...l], this.onComplete = s, this.name = o, this.motionValue = c, this.element = d, this.isAsync = f;
  }
  scheduleResolve() {
    this.state = "scheduled", this.isAsync ? (ba.add(this), kd || (kd = !0, Zt.read(C1), Zt.resolveKeyframes(w1))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: l, name: s, element: o, motionValue: c } = this;
    if (l[0] === null) {
      const d = c?.get(), f = l[l.length - 1];
      if (d !== void 0)
        l[0] = d;
      else if (o && s) {
        const m = Tw(o.readValue(s, f), s, f);
        m !== void 0 && (l[0] = m);
      }
      l[0] === void 0 && (l[0] = f), c && d === void 0 && c.set(l[0]);
    }
    fw(l);
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
const xw = (i) => i.startsWith("--");
function M1(i, l, s) {
  xw(l) ? i.style.setProperty(l, s) : i.style[l] = s;
}
const Ew = {};
function D1(i, l) {
  const s = /* @__PURE__ */ Fb(i);
  return () => Ew[l] ?? s();
}
const Aw = /* @__PURE__ */ D1(() => window.ScrollTimeline !== void 0, "scrollTimeline"), Oh = /* @__PURE__ */ D1(() => {
  try {
    document.createElement("div").animate({ opacity: 0 }, { easing: "linear(0, 1)" });
  } catch {
    return !1;
  }
  return !0;
}, "linearEasing"), Tl = ([i, l, s, o]) => `cubic-bezier(${i}, ${l}, ${s}, ${o})`, Xd = {
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
function O1(i, l) {
  if (i)
    return typeof i == "function" ? Oh() ? p1(i, l) : "ease-out" : /* @__PURE__ */ vh(i) ? Tl(i) : Array.isArray(i) ? i.map((s) => O1(s, l) || Xd.easeOut) : Xd[i];
}
function ww(i, l, s, { delay: o = 0, duration: c = 300, repeat: d = 0, repeatType: f = "loop", ease: m = "easeOut", times: p } = {}, g = void 0) {
  const v = {
    [l]: s
  };
  p && (v.offset = p);
  const y = O1(m, c);
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
function z1(i) {
  return typeof i == "function" && "applyToOptions" in i;
}
function Cw({ type: i, ...l }) {
  return z1(i) && Oh() ? i.applyToOptions(l) : (l.duration ?? (l.duration = 300), l.ease ?? (l.ease = "easeOut"), l);
}
class N1 extends Ch {
  constructor(l) {
    if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !l)
      return;
    const { element: s, name: o, keyframes: c, pseudoElement: d, allowFlatten: f = !1, finalKeyframe: m, onComplete: p } = l;
    this.isPseudoElement = !!d, this.allowFlatten = f, this.options = l, uu(typeof l.type != "string");
    const g = Cw(l);
    this.animation = ww(s, o, c, g, d), g.autoplay === !1 && this.animation.pause(), this.animation.onfinish = () => {
      if (this.finishedTime = this.time, !d) {
        const v = Gs(c, this.options, m, this.speed);
        this.updateMotionValue && this.updateMotionValue(v), M1(s, o, v), this.animation.cancel();
      }
      p?.(), this.notifyFinished();
    }, E1(this, l, g);
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
    return this.allowFlatten && this.animation.effect?.updateTiming({ easing: "linear" }), this.animation.onfinish = null, l && Aw() ? (this.animation.timeline = l, s?.(this.animation), En) : o(this);
  }
}
const R1 = {
  anticipate: e1,
  backInOut: t1,
  circInOut: i1
};
function Mw(i) {
  return i in R1;
}
function Dw(i) {
  typeof i.ease == "string" && Mw(i.ease) && (i.ease = R1[i.ease]);
}
const eu = 10;
class Ow extends N1 {
  constructor(l) {
    Dw(l), S1(l), super(l), l.startTime !== void 0 && l.autoplay !== !1 && (this.startTime = l.startTime), this.options = l;
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
    const { motionValue: s, element: o, name: c } = this.options;
    if (!s)
      return;
    if (l !== void 0) {
      s.set(l);
      return;
    }
    const { speed: d } = this, f = this.elapsed(), m = this.state === "running" && d ? Gn(0, eu, f) : 0, p = this.sample(f);
    o && c && M1(o, c, p), s.setWithVelocity(this.sample(f - m * Math.sign(d)), p, m / Math.abs(d || 1));
  }
}
const Kv = (i, l) => l === "zIndex" ? !1 : !!(typeof i == "number" || Array.isArray(i) || typeof i == "string" && // It's animatable if we have a string
($e.test(i) || i === "0") && // And it contains numbers and/or colors
!i.startsWith("url("));
function zw(i) {
  const l = i[0];
  if (i.length === 1)
    return !0;
  for (let s = 0; s < i.length; s++)
    if (i[s] !== l)
      return !0;
}
function Nw(i, l, s, o) {
  const c = i[0];
  if (c === null)
    return !1;
  if (l === "display" || l === "visibility")
    return !0;
  const d = i[i.length - 1], f = Kv(c, l), m = Kv(d, l);
  return !f || !m ? !1 : zw(i) || (s === "spring" || z1(s)) && o;
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
]), Rw = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function Vw(i) {
  for (let l = 0; l < i.length; l++)
    if (typeof i[l] == "string" && Rw.test(i[l]))
      return !0;
  return !1;
}
const Pv = /* @__PURE__ */ new Set([
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
]), V1 = /* @__PURE__ */ Fb(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function _w(i) {
  const { motionValue: l, name: s, repeatDelay: o, repeatType: c, damping: d, type: f, keyframes: m } = i;
  if (!s || !(Zd.has(s) || Pv.has(s)))
    return !1;
  const p = l?.owner?.current;
  if (!(p instanceof HTMLElement) && !(p instanceof SVGElement))
    return !1;
  const { onUpdate: g, transformTemplate: v } = l.owner.getProps();
  return V1() && /**
   * Force WAAPI for color properties with browser-only color formats
   * (oklch, oklab, lab, lch, etc.) that the JS animation path can't parse.
   */
  (Zd.has(s) || Pv.has(s) && Vw(m)) && (s !== "transform" || !v) && /**
   * If we're outputting values to onUpdate then we can't use WAAPI as there's
   * no way to read the value from WAAPI every frame.
   */
  !g && !o && c !== "mirror" && d !== 0 && f !== "inertia";
}
const nu = (i, l) => l && typeof i == "number" ? l.transform(i) : i, _1 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, jw = li.length;
function j1(i, l, s) {
  let o = "", c = !0;
  for (let f = 0; f < jw; f++) {
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
        const y = _1[m] || m;
        o += `${y}(${v}) `;
      }
      s && (l[m] = v);
    }
  }
  const d = i.pathRotation;
  return d && (c = !1, o += `rotate(${nu(d, Ys.pathRotation)}) `), o = o.trim(), s ? o = s(l, c ? "" : o) : c && (o = "none"), o;
}
const Cl = /* @__PURE__ */ new WeakMap(), Lw = 200, cd = 1e-3, Bw = 0.1, Uw = 1e-3, Hw = 100, Gw = (i) => /^(linear|ease(In|Out|InOut))$/.test(i), fd = (i, l) => i - l, Fv = (i, l, s) => {
  const o = [];
  for (let c = 0; c <= s; c++)
    o.push(qt(i, l, c / s));
  return o;
}, Gr = (i) => i.motionValue.owner, dd = (i) => Cl.get(i), xl = (i, l) => i.latestValues ? i.latestValues[l] : i.getValue(l)?.get(), kw = ({ name: i, motionValue: l }) => i && li.includes(i) && l?.owner?.current instanceof HTMLElement && V1() && Oh();
function Yw(i) {
  const l = Gr(i), { onUpdate: s, transformTemplate: o } = l.getProps();
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
class qw extends ks {
  constructor(l) {
    const s = Gr(l).current, { driver: o = m1 } = l, c = Yw(l);
    l.driver = (f) => {
      const m = o(f);
      return {
        js: m,
        now: m.now,
        start: (p = !0) => {
          const g = dd(s);
          !g || g.isJS ? m.start(p) : g.schedule(!1, !p);
        },
        stop: () => {
          m.stop();
          const p = dd(s);
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
    return dd(Gr(this.options).current);
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
    const { keyframes: l, type: s, ease: o, times: c, repeat: d, delay: f = 0 } = this.options, m = /* @__PURE__ */ vh(o) ? Tl(o) : Gw(o) && Xd[o];
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
    const { startTime: o, speed: c, resolvedDuration: d, options: f } = this, { delay: m = 0, repeat: p = 0, repeatDelay: g = 0, repeatType: v, times: y, keyframes: S, type: C } = f, T = (C || Li) === Li ? y || b1(S) : [0, 1], w = o + m / c, x = [];
    if (this.holdTime !== null || !(d > 0))
      return x;
    for (let D = Math.max(0, Math.floor((l - w) * c / d)); D <= p; D++) {
      const z = w + D * d / c;
      if (z > s)
        break;
      for (const H of T) {
        const L = z + (D % 2 && v && v !== "loop" ? 1 - H : H) * (d - g) / c;
        L > l && L < s && x.push(L);
      }
    }
    return x;
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
    this.options.motionValue.setWithVelocity(this.sampleAt(l - eu, !0), this.sampleAt(l, !0), eu);
  }
  play() {
    this.isStopped || ((this.group || Xw(Gr(this.options))).tracks.add(this), super.play());
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
    return this.isAccelerated() ? /* @__PURE__ */ We(Gn(0, this.totalDuration, this.at(ee.now()) - (this.options.delay || 0))) : super.time;
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
function Xw(i) {
  const l = i.current, s = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map();
  let c = {}, d = [], f = /* @__PURE__ */ new Map(), m = [], p = !1, g = !1, v = !1, y = -1 / 0;
  const S = (P) => {
    for (const K of s)
      if (K.name === P)
        return !0;
  }, C = (P, K) => {
    const lt = {};
    for (const I of P === void 0 ? li : d) {
      const W = o.get(I), q = P === void 0 ? xl(i, I) : W ? W.sampleAt(K > P && !W.timing()[1] ? K : P) : c[I];
      q !== void 0 && (lt[I] = q);
    }
    return lt;
  }, T = (P, K) => {
    let lt = "";
    const I = C(P, K);
    for (const W in I)
      lt += (_1[W] || W) + "(" + nu(I[W], Ys[W]) + ") ";
    return lt || "none";
  }, w = (P = C()) => {
    l.style.transform = j1(P, {});
  }, x = (P = !0) => {
    P && w(), m.forEach(({ animation: K }) => K.cancel()), m = [];
  }, D = (P, K, lt = 1 / 0) => {
    const I = { animation: P, offset: K, end: lt };
    P.startTime = ee.now() + K, lt < 1 / 0 && (P.onfinish = () => {
      I.isDone = !0, m.some((W) => W.end === 1 / 0) && (P.cancel(), m = m.filter((W) => W !== I)), ct.schedule(!1);
    }), P.oncancel = () => m.includes(I) && ct.demote(), m.push(I);
  }, z = (P, K, lt) => {
    const I = (q, F) => Math.abs(P(F) - P(q)), W = I(K, lt);
    for (; lt - K > 0.01; ) {
      const q = (K + lt) / 2;
      I(K, q) > I(q, lt) ? lt = q : K = q;
    }
    return I(K, lt) > W / 2 ? [K, lt] : [];
  }, H = (P, K, lt, I) => {
    const W = Math.min(Lw, Math.max(2, Math.ceil((lt - K) / eu)));
    if (I.length * 4 > W)
      return;
    const q = Fv(K, lt, W).concat(I).sort(fd), F = (bt) => /* @__PURE__ */ Ta(K, lt, bt);
    let tt, at;
    for (const bt of P) {
      const et = q.map((it) => bt.numberAt(it)), [E] = et, G = et[et.length - 1] - E, nt = et.map((it) => G ? (it - E) / G : it - E);
      if (G) {
        if (!tt)
          tt = nt, at = (it) => (bt.numberAt(it) - E) / G;
        else if (nt.some((it, vt) => !(Math.abs(it - tt[vt]) <= cd)))
          return;
      } else if (nt.some((it) => !(Math.abs(it) <= cd)))
        return;
    }
    if (!tt || tt.every((bt, et) => Math.abs(bt - F(q[et])) <= cd))
      return "linear";
    const Y = [], yt = (bt, et = at(bt)) => Y.push(jd(et) + " " + jd(F(bt) * 100) + "%");
    return tt.forEach((bt, et) => {
      et && Math.abs(bt - tt[et - 1]) > 0.2 && z(at, q[et - 1], q[et]).forEach((E) => yt(E)), yt(q[et], bt);
    }), "linear(" + Y + ")";
  }, L = (P, K, lt, I) => {
    const W = [K], q = (Y, yt) => P.every((bt) => !(Math.abs(bt.numberAt((Y + yt) / 2) - (bt.numberAt(Y) + bt.numberAt(yt)) / 2) > (bt.name.startsWith("scale") ? Uw : Bw))), F = (Y, yt, bt) => {
      if (yt - Y < 1 || q(Y, yt))
        W.push(yt);
      else if (bt < 4)
        F(Y, (Y + yt) / 2, bt + 1), F((Y + yt) / 2, yt, bt + 1);
      else {
        for (const et of P)
          W.push(...z((E) => et.numberAt(E), Y, yt));
        W.push(yt);
      }
    }, tt = Fv(K, lt, Math.ceil((lt - K) / 100));
    for (const Y of I)
      tt.push(Y, Math.min(Y + 0.01, lt));
    let at = K;
    for (const Y of tt.sort(fd))
      Y > at && F(at, Y, 0), at = Y;
    return W.sort(fd);
  }, $ = (P) => {
    let K;
    for (const lt of P) {
      const I = lt.tween();
      if (!I || K?.some((W, q) => q < 2 ? Math.abs(I[q] - W) > 1 : I[q] !== W))
        return;
      K = I;
    }
    return K;
  }, ot = (P, K, lt, I = { fill: "both" }, W, q) => {
    const F = P.flatMap((bt) => bt.boundaries(K, lt)), tt = q || H(P, K, lt, F), at = tt ? [K, lt] : L(P, K, lt, F), Y = at.map((bt) => T(bt, W));
    let yt = { transform: Y };
    return tt || (yt.offset = at.map((bt) => /* @__PURE__ */ Ta(K, lt, bt))), Y.every((bt) => bt === Y[0]) && (w(C(K, W)), yt = null), l.animate(yt, {
      ...I,
      duration: lt - K,
      easing: tt || "linear"
    });
  }, j = (P) => {
    let K = P, lt = 0, I = 0;
    const W = [], q = [], F = /* @__PURE__ */ new Set();
    o.clear(), f = /* @__PURE__ */ new Map();
    for (const at of s) {
      o.set(at.name, at);
      const [Y, yt] = at.timing(), bt = Y === 1 / 0;
      if (f.set(at, [at.at(P), at.speed, bt]), bt) {
        at.sync();
        continue;
      }
      if (at.speed < 0)
        return;
      if (yt) {
        if (lt) {
          const et = (Y - I) / yt;
          if (Math.abs(yt - lt) > 1 || Math.abs(et - Math.round(et)) * lt > 1)
            return;
        } else
          lt = yt, I = Y;
        q.push(at);
      } else
        F.add(Y);
      W.push(at), K = Math.max(K, Y);
    }
    c = {}, d = li.filter((at) => {
      if (o.has(at))
        return !0;
      const Y = c[at] = xl(i, at);
      return Y !== void 0 && parseFloat(Y) !== (at.startsWith("scale") ? 1 : 0);
    }), x(!1);
    const tt = !lt && $(W);
    try {
      if (tt && tt[1] > P) {
        const [at, Y, yt] = tt;
        D(ot(W, at, Y, void 0, void 0, yt), at - P, Y - at);
      } else K > P && (D(ot(W, P, K), 0, K - P), F.forEach((at) => at < K - 1 && D(l.animate(null, {
        duration: at - P
      }), 0, at - P)));
      if (lt) {
        const at = I + Math.floor((K - I) / lt) * lt;
        D(ot(q, at, at + lt, {
          iterations: 1 / 0,
          iterationStart: (K - at) / lt,
          /**
           * It must not fill backwards over the finite part
           * that runs before it.
           */
          fill: "forwards"
        }, K), K - P);
      }
    } catch {
      return;
    }
    return m.length || x(), !0;
  }, N = (P) => {
    let K, lt = 0;
    for (const I of s) {
      const W = f.get(I);
      if (!W)
        return !1;
      const [q, F, tt] = W, at = I.at(P), Y = I.timing()[0] === 1 / 0;
      if (tt) {
        if (Y && at === q)
          continue;
        return !1;
      }
      const yt = (at - q) / F, bt = Y ? 0 : I.speed / F;
      if (K === void 0)
        K = yt, lt = bt;
      else if (Math.abs(yt - K) > 1 || bt !== lt)
        return !1;
    }
    if (K === void 0)
      return !0;
    if (!m.length)
      return !1;
    for (const { offset: I, end: W, isDone: q } of m) {
      const F = K - I;
      if (W < 1 / 0 && (q ? F < W - 1 : F < 0 || F >= W))
        return !1;
    }
    for (const { animation: I, offset: W, isDone: q } of m) {
      if (q)
        continue;
      const F = K - W;
      lt ? (I.playbackRate = lt, I.startTime = P - F / lt) : (I.pause(), I.currentTime = F);
    }
    return !0;
  }, ut = () => {
    const P = ee.now();
    if (ct.isJS || (ct.isFinishing = !0, s.forEach((I) => {
      const [W, q] = I.timing();
      I.state === "running" && I.speed > 0 && !q && W <= P + 1 && (I.complete(), c[I.name] = xl(i, I.name), f.has(I) || (p = !0));
    }), ct.isFinishing = !1), g = !1, s.forEach(({ state: I }, W) => {
      (I === "idle" || I === "finished") && s.delete(W);
    }), !s.size) {
      Cl.delete(l), ct.isJS || x();
      return;
    }
    for (const I of s)
      if (!I.canAccelerate)
        return ct.demote(!0);
    ct.isJS && (ct.isJS = !1, p = !0, s.forEach((I) => I.js?.stop()));
    const K = p, lt = v;
    if (p = v = !1, K || !N(P)) {
      if (lt) {
        if (P - y < Hw)
          return ct.demote();
        y = P;
      }
      if (!j(P))
        return ct.demote();
    }
  }, ct = {
    tracks: s,
    isJS: !1,
    isFinishing: !1,
    schedule(P, K) {
      p || (p = P), v || (v = !!K), g || (g = !0, ue.isProcessing ? Zt.render(ut, !1, !0) : queueMicrotask(ut));
    },
    /**
     * An outside write. Rebuild once, but if it keeps happening, move
     * to the main thread.
     */
    check() {
      if (!ct.isJS) {
        for (const P in c)
          if (xl(i, P) !== c[P] && !S(P))
            return ct.schedule(!0, !0);
      }
    },
    demote(P) {
      ct.isJS || (s.forEach((K) => {
        K.isAccelerated() && K.sync(), P || (K.canAccelerate = !1);
      }), ct.isJS = !0, f = /* @__PURE__ */ new Map(), x(), s.forEach((K) => K.state === "running" && K.js?.start()));
    }
  };
  return Cl.set(l, ct), ct;
}
class Qw extends Ch {
  constructor(l) {
    super(), this.stop = () => {
      this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel();
    }, this.createdAt = ee.now();
    const { keyframes: s, name: o, motionValue: c, element: d } = l, f = l;
    f.autoplay ?? (f.autoplay = !0), f.delay ?? (f.delay = 0), f.type ?? (f.type = "keyframes"), f.repeat ?? (f.repeat = 0), f.repeatDelay ?? (f.repeatDelay = 0), f.repeatType ?? (f.repeatType = "loop");
    const m = d?.KeyframeResolver || Dh;
    this.keyframeResolver = new m(s, (p, g, v) => this.onKeyframesResolved(p, g, f, !v), o, c, d), this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(l, s, o, c) {
    this.keyframeResolver = void 0;
    const { name: d, type: f, velocity: m, delay: p, isHandoff: g, onUpdate: v } = o;
    this.resolvedAt = ee.now();
    let y = !0;
    Nw(l, d, f, m) || (y = !1, (Hn.instantAnimations || !p) && v?.(Gs(l, o, s)), l[0] = l[l.length - 1], Qd(o), o.repeat = 0);
    const { onComplete: S } = o;
    o.finalKeyframe = s, o.keyframes = l, o.onComplete = () => {
      S?.(), this.notifyFinished();
    };
    const C = y && !g && _w(o), T = !C && kw(o);
    c && (C || T || this.resolvedAt !== this.createdAt) && (o.startTime ?? (o.startTime = T1(this.createdAt, this.resolvedAt)));
    let w;
    if (C) {
      o.element = o.motionValue?.owner?.current;
      try {
        w = new Ow(o);
      } catch {
        w = new ks(o);
      }
    } else T ? w = new qw(o) : w = new ks(o);
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
    return this._animation || (this.keyframeResolver?.resume(), Sw()), this._animation;
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
function L1(i, l, s, o = 0, c = 1) {
  const d = Array.from(i).sort((g, v) => g.sortNodePosition(v)).indexOf(l), f = i.size, m = (f - 1) * o;
  return typeof s == "function" ? s(d, f) : c === 1 ? d * o : m - d * o;
}
const Jv = 30, Zw = (i) => !isNaN(parseFloat(i));
class Kw {
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
    this.current = l, this.updatedAt = ee.now(), this.canTrackVelocity === null && l !== void 0 && (this.canTrackVelocity = Zw(this.current));
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
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || l - this.updatedAt > Jv)
      return 0;
    const s = Math.min(this.updatedAt - this.prevUpdatedAt, Jv);
    return /* @__PURE__ */ Jb(parseFloat(this.current) - parseFloat(this.prevFrameValue), s);
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
  return new Kw(i, l);
}
function B1(i, l) {
  if (i?.inherit && l) {
    const { inherit: s, ...o } = i;
    return { ...l, ...o };
  }
  return i;
}
function zh(i, l) {
  const s = i?.[l] ?? i?.default ?? i;
  return s !== i ? B1(s, i) : s;
}
const Pw = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Fw = (i) => ({
  type: "spring",
  stiffness: 550,
  damping: i === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Jw = {
  type: "keyframes",
  duration: 0.8
}, Iw = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Ww = (i, { keyframes: l }) => l.length > 2 ? Jw : Bi.has(i) ? i.startsWith("scale") ? Fw(l[1]) : Pw : Iw, $w = /* @__PURE__ */ new Set([
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
function tC(i) {
  for (const l in i)
    if (!$w.has(l))
      return !0;
  return !1;
}
const Nh = (i, l, s, o = {}, c, d) => (f) => {
  const m = zh(o, i) || {}, p = m.delay || o.delay || 0;
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
  tC(m) || Object.assign(v, Ww(i, v)), v.duration && (v.duration = /* @__PURE__ */ dn(v.duration)), v.repeatDelay && (v.repeatDelay = /* @__PURE__ */ dn(v.repeatDelay)), v.from !== void 0 && (v.keyframes[0] = v.from);
  let y = !1;
  if ((v.type === !1 || v.duration === 0 && !v.repeatDelay) && (Qd(v), v.delay === 0 && (y = !0)), (Hn.instantAnimations || Hn.skipAnimations || c?.shouldSkipAnimations || m.skipAnimations) && (y = !0, Qd(v), v.delay = 0), v.allowFlatten = !m.type && !m.ease, y && !d && l.get() !== void 0) {
    const S = Gs(v.keyframes, m);
    if (S !== void 0) {
      Zt.update(() => {
        v.onUpdate(S), v.onComplete();
      });
      return;
    }
  }
  return m.isSync ? new ks(v) : new Qw(v);
}, eC = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function nC(i) {
  const l = eC.exec(i);
  if (!l)
    return [,];
  const [, s, o, c] = l;
  return [`--${s ?? o}`, c];
}
function U1(i, l, s = 1) {
  const [o, c] = nC(i);
  if (!o)
    return;
  const d = window.getComputedStyle(l).getPropertyValue(o);
  if (d) {
    const f = d.trim();
    return hh(f) ? parseFloat(f) : f;
  }
  return bh(c) ? U1(c, l, s + 1) : c;
}
function iC(i) {
  const l = [{}, {}];
  return i?.values.forEach((s, o) => {
    l[0][o] = s.get(), l[1][o] = s.getVelocity();
  }), l;
}
function H1(i, l, s, o) {
  const c = (d) => typeof d == "function" ? d(s !== void 0 ? s : i.custom, ...iC(o)) : d;
  return l = c(l), typeof l == "string" && (l = i.variants && i.variants[l]), c(l);
}
function Sa(i, l, s) {
  return H1(i.getProps(), l, s, i);
}
const G1 = (i, l) => l === "exit" ? i.presenceContext?.custom : void 0, k1 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  ...li
]), aC = (i) => Array.isArray(i);
function lC(i, l, s) {
  i.hasValue(l) ? i.getValue(l).set(s) : i.addValue(l, Ml(s));
}
function sC(i) {
  return aC(i) ? i[i.length - 1] || 0 : i;
}
function oC(i, l) {
  const s = Sa(i, l);
  let { transitionEnd: o = {}, transition: c = {}, ...d } = s || {};
  d = { ...d, ...o };
  for (const f in d) {
    const m = sC(d[f]);
    lC(i, f, m);
  }
}
const Ce = (i) => !!(i && i.getVelocity);
function rC(i) {
  return !!(Ce(i) && i.add);
}
function Kd(i, l) {
  const s = i.getValue("willChange");
  if (rC(s))
    return s.add(l);
  if (!s && Hn.WillChange) {
    const o = new Hn.WillChange("auto");
    i.addValue("willChange", o), o.add(l);
  }
}
function Rh(i) {
  return i.replace(/([A-Z])/g, (l) => `-${l.toLowerCase()}`);
}
const uC = "framerAppearId", Y1 = "data-" + Rh(uC);
function q1(i) {
  return i.props[Y1];
}
const cC = typeof window < "u";
function fC({ protectedKeys: i, needsAnimating: l }, s) {
  const o = s in i && !l[s];
  return l[s] = !1, o;
}
function X1(i, l, { delay: s = 0, transitionOverride: o, type: c } = {}) {
  let { transition: d, transitionEnd: f, ...m } = l;
  const p = i.getDefaultTransition();
  d = d ? B1(d, p) : p;
  const g = d?.reduceMotion, v = d?.skipAnimations;
  o && (d = o);
  const y = [], S = c && i.animationState?.getState()[c], C = d?.path;
  C && C.animateVisualElement(i, m, d, s, y);
  for (const T in m) {
    const w = i.getValue(T, i.latestValues[T] ?? null), x = m[T];
    if (x === void 0 || S && fC(S, T))
      continue;
    const D = {
      delay: s,
      ...zh(d || {}, T)
    };
    v && (D.skipAnimations = !0);
    const z = w.get();
    if (z !== void 0 && !w.isAnimating() && !Array.isArray(x) && x === z && !D.velocity) {
      Zt.update(() => w.set(x));
      continue;
    }
    let H = !1;
    if (cC && window.MotionHandoffAnimation) {
      const ot = q1(i);
      if (ot) {
        const j = window.MotionHandoffAnimation(ot, T, Zt);
        j !== null && (D.startTime = j, H = !0);
      }
    }
    Kd(i, T);
    const L = g ?? i.shouldReduceMotion;
    w.start(Nh(T, w, x, L && k1.has(T) ? { type: !1 } : D, i, H));
    const $ = w.animation;
    $ && y.push($);
  }
  if (f) {
    const T = () => Zt.update(() => {
      f && oC(i, f);
    });
    y.length ? Promise.all(y).then(T) : T();
  }
  return y;
}
function Pd(i, l, s = {}) {
  const o = Sa(i, l, G1(i, s.type)), c = s.transitionOverride || (o?.transition ?? (i.getDefaultTransition() || {})), d = () => Promise.all(o ? X1(i, o, s) : []), f = (p = 0) => {
    const { variantChildren: g } = i, { delayChildren: v = 0, staggerChildren: y, staggerDirection: S } = c, C = [];
    return g?.forEach((T) => {
      T.notify("AnimationStart", l), C.push(Pd(T, l, {
        ...s,
        delay: p + (typeof v == "function" ? 0 : v) + L1(g, T, v, y, S)
      }).then(() => T.notify("AnimationComplete", l)));
    }), Promise.all(C);
  }, { when: m } = c;
  return m ? m === "beforeChildren" ? d().then(() => f()) : f().then(d) : Promise.all([d(), f(s.delay)]);
}
function dC(i, l, s = {}) {
  return i.notify("AnimationStart", l), (Array.isArray(l) ? Promise.all(l.map((c) => Pd(i, c, s))) : typeof l == "string" ? Pd(i, l, s) : Promise.all(X1(i, Sa(i, l, s.custom), s))).then(() => {
    i.notify("AnimationComplete", l);
  });
}
const hC = {
  test: (i) => i === "auto",
  parse: (i) => i
}, mC = (i) => (l) => l.test(i), pC = [Dl, gt, Un, ai, b2, v2, hC], Iv = (i) => pC.find(mC(i));
function gC(i) {
  return typeof i == "number" ? i === 0 : i !== null ? i === "none" || i === "0" || mh(i) : !0;
}
const yC = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function vC(i, l, s) {
  let o = 0, c;
  for (; o < i.length && !c; ) {
    const d = i[o];
    typeof d == "string" && !yC.has(d) && w2(d) && (c = i[o]), o++;
  }
  if (c && s)
    for (const d of l)
      i[d] !== c && (i[d] = Mh(s, c));
}
class bC extends Dh {
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
      if (id(d ? l[d] : c))
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
      if (typeof y == "string" && (y = y.trim(), bh(y))) {
        const S = U1(y, s.current);
        S !== void 0 && (l[v] = S), v === l.length - 1 && (this.finalKeyframe = y);
      }
    }
    if (this.resolveNoneKeyframes(), !k1.has(o) || l.length !== 2)
      return;
    const [c, d] = l;
    if (typeof c == "number" && typeof d == "number")
      return;
    const f = Iv(c), m = Iv(d), p = id(c), g = id(d);
    if (p !== g && va[o]) {
      this.needsMeasurement = !0;
      return;
    }
    if (f !== m)
      if (Qv(f) && Qv(m))
        for (let v = 0; v < l.length; v++) {
          const y = l[v];
          typeof y == "string" && (l[v] = parseFloat(y));
        }
      else va[o] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: l, name: s } = this, o = [];
    for (let c = 0; c < l.length; c++)
      (l[c] === null || gC(l[c])) && o.push(c);
    o.length && vC(l, o, s);
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
const Vh = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius"
];
function SC(i) {
  return Pb(i) && "offsetHeight" in i && !("ownerSVGElement" in i);
}
function _h(i) {
  return Pb(i) && "ownerSVGElement" in i;
}
function jh(i, l, s) {
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
function Lh(i, l, s) {
  const { style: o, vars: c, transformOrigin: d } = i;
  let f = !1, m = !1;
  for (const p in l) {
    const g = l[p];
    if (Bi.has(p)) {
      f = !0;
      continue;
    } else if (l1(p)) {
      c[p] = g;
      continue;
    } else {
      const v = nu(g, Ys[p]);
      p.startsWith("origin") ? (m = !0, d[p] = v) : o[p] = v;
    }
  }
  if (l.transform || (f || s ? o.transform = j1(l, i.transform, s) : o.transform && (o.transform = "none")), m) {
    const { originX: p = "50%", originY: g = "50%", originZ: v = 0 } = d;
    o.transformOrigin = `${p} ${g} ${v}`;
  }
}
const TC = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, xC = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function EC(i, l, s = 1, o = 0, c = !0) {
  i.pathLength = 1;
  const d = c ? TC : xC;
  i[d.offset] = `${-o}`, i[d.array] = `${l} ${s}`;
}
const Q1 = [
  "transform",
  "opacity",
  "clipPath",
  "filter",
  "offsetDistance",
  "offsetPath",
  "offsetRotate",
  "offsetAnchor"
];
function Z1(i, {
  attrX: l,
  attrY: s,
  attrScale: o,
  pathLength: c,
  pathSpacing: d = 1,
  pathOffset: f = 0,
  // This is object creation, which we try to avoid per-frame.
  ...m
}, p, g, v) {
  if (Lh(i, m, g), p) {
    i.style.viewBox && (i.attrs.viewBox = i.style.viewBox);
    return;
  }
  i.attrs = i.style, i.style = {};
  const { attrs: y, style: S } = i;
  for (const C of Q1)
    y[C] !== void 0 && (S[C] = y[C], delete y[C]);
  (S.transform || y.transformOrigin) && (S.transformOrigin = y.transformOrigin ?? "50% 50%", delete y.transformOrigin), S.transform && (S.transformBox = v?.transformBox ?? "fill-box", delete y.transformBox), l !== void 0 && (y.x = l), s !== void 0 && (y.y = s), o !== void 0 && (y.scale = o), c !== void 0 && EC(y, c, d, f, !1);
}
function K1({ top: i, left: l, right: s, bottom: o }) {
  return {
    x: { min: l, max: s },
    y: { min: i, max: o }
  };
}
function AC({ x: i, y: l }) {
  return { top: l.min, right: i.max, bottom: l.max, left: i.min };
}
function wC(i, l) {
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
function hd(i) {
  return i === void 0 || i === 1;
}
function Fd({ scale: i, scaleX: l, scaleY: s }) {
  return !hd(i) || !hd(l) || !hd(s);
}
function pa(i) {
  return Fd(i) || P1(i) || i.z || i.rotate || i.rotateX || i.rotateY || i.skewX || i.skewY;
}
function P1(i) {
  return Wv(i.x) || Wv(i.y);
}
function Wv(i) {
  return i && i !== "0%";
}
function iu(i, l, s) {
  const o = i - s, c = l * o;
  return s + c;
}
function $v(i, l, s, o, c) {
  return c !== void 0 && (i = iu(i, c, o)), iu(i, s, o) + l;
}
function Jd(i, l = 0, s = 1, o, c) {
  i.min = $v(i.min, l, s, o, c), i.max = $v(i.max, l, s, o, c);
}
function F1(i, { x: l, y: s }) {
  Jd(i.x, l.translate, l.scale, l.originPoint), Jd(i.y, s.translate, s.scale, s.originPoint);
}
const t0 = 0.999999999999, e0 = 1.0000000000001;
function CC(i, l, s, o = !1) {
  const c = s.length;
  if (!c)
    return;
  l.x = l.y = 1;
  let d, f;
  for (let m = 0; m < c; m++) {
    d = s[m], f = d.projectionDelta;
    const { visualElement: p } = d.options;
    p && p.props.style && p.props.style.display === "contents" || (o && d.options.layoutScroll && d.scroll && d !== d.root && (xn(i.x, -d.scroll.offset.x), xn(i.y, -d.scroll.offset.y)), f && (l.x *= f.x.scale, l.y *= f.y.scale, F1(i, f)), o && pa(d.latestValues) && kr(i, d.latestValues, d.layout?.layoutBox));
  }
  l.x < e0 && l.x > t0 && (l.x = 1), l.y < e0 && l.y > t0 && (l.y = 1);
}
function xn(i, l) {
  i.min += l, i.max += l;
}
function n0(i, l, s, o, c = 0.5) {
  const d = qt(i.min, i.max, c);
  Jd(i, l, s, d, o);
}
function i0(i, l) {
  return typeof i == "string" ? parseFloat(i) / 100 * (l.max - l.min) : i;
}
function kr(i, l, s) {
  const o = s ?? i;
  n0(i.x, i0(l.x, o.x), l.scaleX, l.scale, l.originX), n0(i.y, i0(l.y, o.y), l.scaleY, l.scale, l.originY);
}
function J1(i, l) {
  return K1(wC(i.getBoundingClientRect(), l));
}
function MC(i, l, s) {
  const o = J1(i, s), { scroll: c } = l;
  return c && (xn(o.x, c.offset.x), xn(o.y, c.offset.y)), o;
}
const { schedule: Bh } = /* @__PURE__ */ h1(queueMicrotask, !1), Sn = {
  x: !1,
  y: !1
};
function I1() {
  return Sn.x || Sn.y;
}
function DC(i) {
  return i === "x" || i === "y" ? Sn[i] ? null : (Sn[i] = !0, () => {
    Sn[i] = !1;
  }) : Sn.x || Sn.y ? null : (Sn.x = Sn.y = !0, () => {
    Sn.x = Sn.y = !1;
  });
}
function W1(i, l) {
  const s = jh(i), o = new AbortController(), c = {
    passive: !0,
    ...l,
    signal: o.signal
  };
  return [s, c, () => o.abort()];
}
function OC(i) {
  return !(i.pointerType === "touch" || I1());
}
function zC(i, l, s = {}) {
  const [o, c, d] = W1(i, s);
  return o.forEach((f) => {
    let m = !1, p = !1, g;
    const v = () => {
      f.removeEventListener("pointerleave", T);
    }, y = (x) => {
      g && (g(x), g = void 0), v();
    }, S = (x) => {
      m = !1, window.removeEventListener("pointerup", S), window.removeEventListener("pointercancel", S), p && (p = !1, y(x));
    }, C = () => {
      m = !0, window.addEventListener("pointerup", S, c), window.addEventListener("pointercancel", S, c);
    }, T = (x) => {
      if (x.pointerType !== "touch") {
        if (m) {
          p = !0;
          return;
        }
        y(x);
      }
    }, w = (x) => {
      if (!OC(x))
        return;
      p = !1;
      const D = l(f, x);
      typeof D == "function" && (g = D, f.addEventListener("pointerleave", T, c));
    };
    f.addEventListener("pointerenter", w, c), f.addEventListener("pointerdown", C, c);
  }), d;
}
const $1 = (i, l) => l ? i === l ? !0 : $1(i, l.parentElement) : !1, Uh = (i) => i.pointerType === "mouse" ? typeof i.button != "number" || i.button <= 0 : i.isPrimary !== !1, NC = /* @__PURE__ */ new Set([
  "BUTTON",
  "INPUT",
  "SELECT",
  "TEXTAREA",
  "A"
]);
function RC(i) {
  return NC.has(i.tagName) || i.isContentEditable === !0;
}
const VC = /* @__PURE__ */ new Set(["INPUT", "SELECT", "TEXTAREA"]);
function _C(i) {
  return VC.has(i.tagName) || i.isContentEditable === !0;
}
const Yr = /* @__PURE__ */ new WeakSet();
function a0(i) {
  return (l) => {
    l.key === "Enter" && i(l);
  };
}
function md(i, l) {
  i.dispatchEvent(new PointerEvent("pointer" + l, { isPrimary: !0, bubbles: !0 }));
}
const jC = (i, l) => {
  const s = i.currentTarget;
  if (!s)
    return;
  const o = a0(() => {
    if (Yr.has(s))
      return;
    md(s, "down");
    const c = a0(() => {
      md(s, "up");
    }), d = () => md(s, "cancel");
    s.addEventListener("keyup", c, l), s.addEventListener("blur", d, l);
  });
  s.addEventListener("keydown", o, l), s.addEventListener("blur", () => s.removeEventListener("keydown", o), l);
};
function l0(i) {
  return Uh(i) && !I1();
}
const s0 = /* @__PURE__ */ new WeakSet();
function LC(i, l, s = {}) {
  const [o, c, d] = W1(i, s), f = (m) => {
    const p = m.currentTarget;
    if (!l0(m) || s0.has(m))
      return;
    Yr.add(p), s.stopPropagation && s0.add(m);
    const g = l(p, m), v = { ...c, capture: !0 }, y = (T, w) => {
      window.removeEventListener("pointerup", S, v), window.removeEventListener("pointercancel", C, v), Yr.has(p) && Yr.delete(p), l0(T) && typeof g == "function" && g(T, { success: w });
    }, S = (T) => {
      y(T, p === window || p === document || s.useGlobalTarget || $1(p, T.target));
    }, C = (T) => {
      y(T, !1);
    };
    window.addEventListener("pointerup", S, v), window.addEventListener("pointercancel", C, v);
  };
  return o.forEach((m) => {
    (s.useGlobalTarget ? window : m).addEventListener("pointerdown", f, c), SC(m) && (m.addEventListener("focus", (g) => jC(g, c)), !RC(m) && !m.hasAttribute("tabindex") && (m.tabIndex = 0));
  }), d;
}
const qr = /* @__PURE__ */ new WeakMap();
let Xr;
const tS = (i, l, s) => (o, c) => c && c[0] ? c[0][i + "Size"] : _h(o) && "getBBox" in o ? o.getBBox()[l] : o[s], BC = /* @__PURE__ */ tS("inline", "width", "offsetWidth"), UC = /* @__PURE__ */ tS("block", "height", "offsetHeight");
function HC({ target: i, borderBoxSize: l }) {
  qr.get(i)?.forEach((s) => {
    s(i, {
      get width() {
        return BC(i, l);
      },
      get height() {
        return UC(i, l);
      }
    });
  });
}
function GC(i) {
  i.forEach(HC);
}
function kC() {
  typeof ResizeObserver > "u" || (Xr = new ResizeObserver(GC));
}
function YC(i, l) {
  Xr || kC();
  const s = jh(i);
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
function qC() {
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
function XC(i) {
  return Qr.add(i), El || qC(), () => {
    Qr.delete(i), !Qr.size && typeof El == "function" && (window.removeEventListener("resize", El), El = void 0);
  };
}
function o0(i, l) {
  return typeof i == "function" ? XC(i) : YC(i, l);
}
function QC(i) {
  return _h(i) && i.tagName === "svg";
}
const r0 = (i) => typeof i == "number" ? i : parseFloat(i), u0 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Al = () => ({
  x: u0(),
  y: u0()
}), c0 = () => ({ min: 0, max: 0 }), de = () => ({
  x: c0(),
  y: c0()
}), ZC = /* @__PURE__ */ new WeakMap();
function cu(i) {
  return i !== null && typeof i == "object" && typeof i.start == "function";
}
function Xs(i) {
  return typeof i == "string" || Array.isArray(i);
}
const Hh = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], f0 = ["initial", ...Hh];
function fu(i) {
  if (cu(i.animate))
    return !0;
  for (let l = 0; l < f0.length; l++)
    if (Xs(i[f0[l]]))
      return !0;
  return !1;
}
function eS(i) {
  return !!(fu(i) || i.variants);
}
function KC(i, l, s) {
  for (const o in l) {
    const c = l[o], d = s[o];
    if (Ce(c))
      i.addValue(o, c);
    else if (Ce(d))
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
const au = { current: null }, Gh = { current: !1 }, PC = typeof window < "u";
function nS() {
  if (Gh.current = !0, !!PC)
    if (window.matchMedia) {
      const i = window.matchMedia("(prefers-reduced-motion)"), l = () => au.current = i.matches;
      i.addEventListener("change", l), l();
    } else
      au.current = !1;
}
const d0 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
];
let lu = {};
function iS(i) {
  lu = i;
}
function FC() {
  return lu;
}
class JC {
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
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Dh, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
      const C = ee.now();
      this.renderScheduledAt < C && (this.renderScheduledAt = C, Zt.render(this.render, !1, !0));
    };
    const { latestValues: g, renderState: v } = m;
    this.latestValues = g, this.baseTarget = { ...g }, this.initialValues = s.initial ? { ...g } : {}, this.renderState = v, this.parent = l, this.props = s, this.presenceContext = o, this.depth = l ? l.depth + 1 : 0, this.reducedMotionConfig = c, this.skipAnimationsConfig = d, this.options = p, this.blockInitialAnimation = !!f, this.isControllingVariants = fu(s), this.isVariantNode = eS(s), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(l && l.current);
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
    if (this.current = l, ZC.set(l, this), this.projection && !this.projection.instance && this.projection.mount(l), this.isVariantNode && !this.isControllingVariants) {
      let s = this;
      do
        s = s.props.inherit !== !1 && s.parent;
      while (s && !s.isVariantNode);
      if (s) {
        const { variantChildren: o } = s;
        o.add(this), this.removeFromVariantTree = () => o.delete(this);
      }
    }
    this.values.forEach((s, o) => this.bindToMotionValue(o, s)), this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (Gh.current || nS(), this.shouldReduceMotion = au.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0;
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
    if (this.valueSubscriptions.has(l) && this.valueSubscriptions.get(l)(), s.accelerate && Zd.has(l) && this.current instanceof HTMLElement) {
      const { factory: f, keyframes: m, times: p, ease: g, duration: v } = s.accelerate, y = new N1({
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
      this.latestValues[l] = f, this.props.onUpdate && Zt.preRender(this.notifyUpdate), o && (this.projection && (this.projection.isTransformDirty = !0), Cl.get(this.current)?.check()), this.scheduleRender();
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
    (l.transformTemplate || o) && this.scheduleRender(), (l.transformTemplate && !o || l.onUpdate && !c) && Cl.get(this.current)?.demote(), this.prevProps = this.props, this.props = l, this.prevPresenceContext = this.presenceContext, this.presenceContext = s;
    for (let d = 0; d < d0.length; d++) {
      const f = d0[d];
      this.propEventSubscriptions[f] && (this.propEventSubscriptions[f](), delete this.propEventSubscriptions[f]);
      const m = "on" + f, p = l[m];
      p && (this.propEventSubscriptions[f] = this.on(f, p));
    }
    this.prevMotionValues = KC(this, this.scrapeMotionValuesFromProps(l, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    return o != null && (typeof o == "string" && (hh(o) || mh(o)) ? o = parseFloat(o) : (
      /**
       * If the value as read isn't animatable (e.g. "none") but
       * the target is, derive an animatable none from the target.
       * A value is animatable if it's a number or contains a
       * number or color, which is cheaper to check than trying
       * every value type in turn.
       */
      typeof o != "number" && !$e.test(o) && $e.test(s) && (o = Mh(l, s))
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
    return this.events[l] || (this.events[l] = new Ir()), this.events[l].add(s);
  }
  notify(l, ...s) {
    this.events[l] && this.events[l].notify(...s);
  }
  scheduleRenderMicrotask() {
    Bh.render(this.render);
  }
}
class aS extends JC {
  constructor() {
    super(...arguments), this.KeyframeResolver = bC;
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
class Gi {
  constructor(l) {
    this.isMounted = !1, this.node = l;
  }
  update() {
  }
}
function lS(i, { style: l, vars: s }, o, c) {
  const d = i.style;
  let f;
  for (f in l)
    d[f] = l[f];
  c?.applyProjectionStyles(d, o);
  for (f in s)
    d.setProperty(f, s[f]);
}
const Qs = {};
function sS(i, { layout: l, layoutId: s }) {
  return Bi.has(i) || i.startsWith("origin") || (l || s !== void 0) && (!!Qs[i] || i === "opacity");
}
function kh(i, l, s) {
  const o = i.style, c = l?.style, d = {};
  if (!o)
    return d;
  for (const f in o)
    (Ce(o[f]) || c && Ce(c[f]) || sS(f, i) || s?.getValue(f)?.liveStyle !== void 0) && (d[f] = o[f]);
  return d;
}
function IC(i) {
  return window.getComputedStyle(i);
}
class WC extends aS {
  constructor() {
    super(...arguments), this.type = "html", this.renderInstance = lS;
  }
  mount(l) {
    uu(!!l.style), super.mount(l);
  }
  readValueFromInstance(l, s) {
    if (Bi.has(s))
      return this.projection?.isProjecting ? qs(s) : mw(l, s);
    {
      const o = IC(l), c = (l1(s) ? o.getPropertyValue(s) : o[s]) || 0;
      return typeof c == "string" ? c.trim() : c;
    }
  }
  measureInstanceViewportBox(l, { transformPagePoint: s }) {
    return J1(l, s);
  }
  build(l, s, o) {
    Lh(l, s, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(l, s, o) {
    return kh(l, s, o);
  }
}
const oS = /* @__PURE__ */ new Set([
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
]), rS = (i) => typeof i == "string" && i.toLowerCase() === "svg";
function $C(i, l, s, o) {
  lS(i, l, void 0, o);
  for (const c in l.attrs)
    i.setAttribute(oS.has(c) ? c : Rh(c), l.attrs[c]);
}
function uS(i, l, s) {
  const o = kh(i, l, s);
  for (const c in i)
    if (Ce(i[c]) || Ce(l[c])) {
      const d = li.indexOf(c) !== -1 ? "attr" + c.charAt(0).toUpperCase() + c.substring(1) : c;
      o[d] = i[c];
    }
  return o;
}
class tM extends aS {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = de;
  }
  getBaseTargetFromProps(l, s) {
    return Bi.has(s) ? super.getBaseTargetFromProps(l, s) ?? qs(s) : l[s];
  }
  /**
   * An independent transform's origin is never read from the DOM, so it
   * starts from its latest or default value and renders on mount.
   */
  getDefaultValue(l) {
    return Bi.has(l) ? this.latestValues[l] ?? qs(l) : void 0;
  }
  readValueFromInstance(l, s) {
    if (Bi.has(s)) {
      const o = A1(s);
      return o && o.default || 0;
    }
    if (Q1.includes(s)) {
      const c = getComputedStyle(l)[s];
      if (typeof c == "string" && c)
        return c.trim();
    }
    return s = oS.has(s) ? s : Rh(s), l.getAttribute(s);
  }
  scrapeMotionValuesFromProps(l, s, o) {
    return uS(l, s, o);
  }
  build(l, s, o) {
    Z1(l, s, this.isSVGTag, o.transformTemplate, o.style);
  }
  renderInstance(l, s, o, c) {
    $C(l, s, o, c);
  }
  mount(l) {
    this.isSVGTag = rS(l.tagName), super.mount(l);
  }
}
function cS(i, l) {
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
const eM = [...Hh].reverse();
function nM(i) {
  let l = (m) => Promise.all(m.map(({ animation: p, options: g }) => dC(i, p, g))), s = h0(), o = !0, c = !1;
  function d(m) {
    const { props: p, parent: g, manuallyAnimateOnMount: v } = i, y = o || c, S = [], C = /* @__PURE__ */ new Set();
    let T = {}, w = 1 / 0, x = i;
    do
      x = x.props.inherit !== !1 && x.parent;
    while (x && !x.isControllingVariants);
    if (eM.forEach((z, H) => {
      const L = s[z], $ = p[z], ot = x && x.props[z], j = $ !== void 0 ? $ : Xs(ot) || ot === !1 ? ot : void 0, N = Xs(j), ut = z === m ? L.isActive : null;
      ut === !1 && (w = H);
      const ct = N && $ === void 0 && !(y && v);
      if (L.protectedKeys = { ...T }, !L.isActive && ut === null || !j && !L.prevProp || cu(j) || typeof j == "boolean")
        return;
      if (z === "exit" && L.isActive && ut !== !0) {
        T = {
          ...T,
          ...L.prevResolvedValues
        };
        return;
      }
      const P = iM(L.prevProp, j);
      let K = P || N && (ut && !ct || H > w), lt = !1;
      const I = Array.isArray(j) ? j : [j];
      let W = {};
      if (ut !== !1)
        for (const F of I) {
          const { transition: tt, transitionEnd: at, ...Y } = Sa(i, F, G1(i, z)) || {};
          W = {
            ...W,
            ...Y,
            ...at
          };
        }
      const { prevResolvedValues: q } = L;
      for (const F in { ...q, ...W }) {
        if (F in T)
          continue;
        const tt = W[F], at = q[F], Y = Array.isArray(tt) && Array.isArray(at) ? !cS(tt, at) || P : tt !== at;
        if (Y && tt == null)
          C.add(F);
        else if (Y || tt !== void 0 && C.has(F)) {
          K = !0, C.delete(F) && (lt = !0), L.needsAnimating[F] = !0;
          const yt = i.getValue(F);
          yt && (yt.liveStyle = !1);
        } else
          L.protectedKeys[F] = !0;
      }
      if (L.prevProp = j, L.prevResolvedValues = W, L.isActive && (T = { ...T, ...W }), K && (!(ct && P) || lt))
        for (const F of I) {
          const tt = { type: z };
          if (typeof F == "string" && y && v && g?.enteringChildren) {
            const at = Sa(g, F)?.transition?.delayChildren;
            tt.delay = L1(g.enteringChildren, i, at);
          }
          S.push({ animation: F, options: tt });
        }
    }), C.size) {
      const { initial: z } = p, H = {}, L = typeof z != "boolean" && Sa(i, Array.isArray(z) ? z[0] : z, i.presenceContext?.custom);
      L && L.transition && (H.transition = L.transition), C.forEach(($) => {
        const ot = i.getValue($);
        ot && (ot.liveStyle = !0);
        const j = L && !Array.isArray(z) ? L[$] : void 0, N = i.getBaseTargetFromProps(p, $);
        H[$] = (j !== void 0 ? j : N !== void 0 && !Ce(N) ? N : i.initialValues[$] === void 0 ? i.baseTarget[$] : void 0) ?? null;
      }), S.push({ animation: H });
    }
    const D = y && i.blockInitialAnimation || o && !v && (p.initial === !1 || p.initial === p.animate);
    return o = c = !1, !D && S.length ? l(S) : Promise.resolve();
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
      s = h0(), c = !0;
    }
  };
}
function iM(i, l) {
  return typeof l == "string" ? l !== i : Array.isArray(l) ? !cS(l, i) : !1;
}
function h0() {
  const i = {};
  for (const l of Hh)
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
function m0(i, l) {
  i.translate = l.translate, i.scale = l.scale, i.originPoint = l.originPoint, i.origin = l.origin;
}
const fS = 1e-4, aM = 1 - fS, lM = 1 + fS, dS = 0.01, sM = 0 - dS, oM = 0 + dS;
function Ve(i) {
  return i.max - i.min;
}
function rM(i, l, s) {
  return Math.abs(i - l) <= s;
}
function p0(i, l, s, o = 0.5) {
  i.origin = o, i.originPoint = qt(l.min, l.max, i.origin), i.scale = Ve(s) / Ve(l), i.translate = qt(s.min, s.max, i.origin) - i.originPoint, (i.scale >= aM && i.scale <= lM || isNaN(i.scale)) && (i.scale = 1), (i.translate >= sM && i.translate <= oM || isNaN(i.translate)) && (i.translate = 0);
}
function js(i, l, s, o) {
  p0(i.x, l.x, s.x, o ? o.originX : void 0), p0(i.y, l.y, s.y, o ? o.originY : void 0);
}
function g0(i, l, s, o = 0) {
  const c = o ? qt(s.min, s.max, o) : s.min;
  i.min = c + l.min, i.max = i.min + Ve(l);
}
function uM(i, l, s, o) {
  g0(i.x, l.x, s.x, o?.x), g0(i.y, l.y, s.y, o?.y);
}
function y0(i, l, s, o = 0) {
  const c = o ? qt(s.min, s.max, o) : s.min;
  i.min = l.min - c, i.max = i.min + Ve(l);
}
function su(i, l, s, o) {
  y0(i.x, l.x, s.x, o?.x), y0(i.y, l.y, s.y, o?.y);
}
function v0(i, l, s, o, c) {
  return i -= l, i = iu(i, 1 / s, o), c !== void 0 && (i = iu(i, 1 / c, o)), i;
}
function cM(i, l = 0, s = 1, o = 0.5, c, d = i, f = i) {
  if (Un.test(l) && (l = parseFloat(l), l = qt(f.min, f.max, l / 100) - f.min), typeof l != "number")
    return;
  let m = qt(d.min, d.max, o);
  i === d && (m -= l), i.min = v0(i.min, l, s, m, c), i.max = v0(i.max, l, s, m, c);
}
function b0(i, l, [s, o, c], d, f) {
  cM(i, l[s], l[o], l[c], l.scale, d, f);
}
const fM = ["x", "scaleX", "originX"], dM = ["y", "scaleY", "originY"];
function S0(i, l, s, o) {
  b0(i.x, l, fM, s ? s.x : void 0, o ? o.x : void 0), b0(i.y, l, dM, s ? s.y : void 0, o ? o.y : void 0);
}
function T0(i) {
  return i.translate === 0 && i.scale === 1;
}
function hS(i) {
  return T0(i.x) && T0(i.y);
}
function x0(i, l) {
  return i.min === l.min && i.max === l.max;
}
function hM(i, l) {
  return x0(i.x, l.x) && x0(i.y, l.y);
}
function E0(i, l) {
  return Math.round(i.min) === Math.round(l.min) && Math.round(i.max) === Math.round(l.max);
}
function mS(i, l) {
  return E0(i.x, l.x) && E0(i.y, l.y);
}
function A0(i) {
  return Ve(i.x) / Ve(i.y);
}
function w0(i, l) {
  return i.translate === l.translate && i.scale === l.scale && i.originPoint === l.originPoint;
}
function Tn(i) {
  return [i("x"), i("y")];
}
function C0(i, l) {
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
    const s = C0(i, l.target.x), o = C0(i, l.target.y);
    return `${s}% ${o}%`;
  }
}, mM = {
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
function pM(i, l, s) {
  let o = "";
  const c = i.x.translate / l.x, d = i.y.translate / l.y, f = s?.z || 0;
  if ((c || d || f) && (o = `translate3d(${c}px, ${d}px, ${f}px) `), (l.x !== 1 || l.y !== 1) && (o += `scale(${1 / l.x}, ${1 / l.y}) `), s) {
    const { transformPerspective: g, rotate: v, pathRotation: y, rotateX: S, rotateY: C, skewX: T, skewY: w } = s;
    g && (o = `perspective(${g}px) ${o}`), v && (o += `rotate(${v}deg) `), y && (o += `rotate(${y}deg) `), S && (o += `rotateX(${S}deg) `), C && (o += `rotateY(${C}deg) `), T && (o += `skewX(${T}deg) `), w && (o += `skewY(${w}deg) `);
  }
  const m = i.x.scale * l.x, p = i.y.scale * l.y;
  return (m !== 1 || p !== 1) && (o += `scale(${m}, ${p})`), o || "none";
}
const gM = Vh.length, M0 = (i) => typeof i == "number" || gt.test(i);
function yM(i, l, s, o, c, d) {
  c ? (i.opacity = qt(0, s.opacity ?? 1, vM(o)), i.opacityExit = qt(l.opacity ?? 1, 0, bM(o))) : d && (i.opacity = qt(l.opacity ?? 1, s.opacity ?? 1, o));
  for (let f = 0; f < gM; f++) {
    const m = Vh[f];
    let p = D0(l, m), g = D0(s, m);
    if (p === void 0 && g === void 0)
      continue;
    p || (p = 0), g || (g = 0), p === 0 || g === 0 || M0(p) === M0(g) ? (i[m] = Math.max(qt(r0(p), r0(g), o), 0), (Un.test(g) || Un.test(p)) && (i[m] += "%")) : i[m] = g;
  }
  (l.rotate || s.rotate) && (i.rotate = qt(l.rotate || 0, s.rotate || 0, o));
}
function D0(i, l) {
  return i[l] !== void 0 ? i[l] : i.borderRadius;
}
const vM = /* @__PURE__ */ pS(0, 0.5, n1), bM = /* @__PURE__ */ pS(0.5, 0.95, En);
function pS(i, l, s) {
  return (o) => o < i ? 0 : o > l ? 1 : s(/* @__PURE__ */ Ta(i, l, o));
}
function SM(i, l, s) {
  const o = Ce(i) ? i : Ml(i);
  return o.start(Nh("", o, l, s)), o.animation;
}
function Zs(i, l, s, o = { passive: !0 }) {
  return i.addEventListener(l, s, o), () => i.removeEventListener(l, s, o);
}
const TM = (i, l) => i.depth - l.depth;
class xM {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(l) {
    dh(this.children, l), this.isDirty = !0;
  }
  remove(l) {
    Jr(this.children, l), this.isDirty = !0;
  }
  forEach(l) {
    this.isDirty && this.children.sort(TM), this.isDirty = !1, this.children.forEach(l);
  }
}
function EM(i, l) {
  const s = ee.now(), o = ({ timestamp: c }) => {
    const d = c - s;
    d >= l && (Ui(o), i(d - l));
  };
  return Zt.setup(o, !0), () => Ui(o);
}
function Zr(i) {
  return Ce(i) ? i.get() : i;
}
class AM {
  constructor() {
    this.members = [];
  }
  add(l) {
    dh(this.members, l);
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
const wM = {
  borderRadius: {
    ...Rs,
    applyTo: [...Vh]
  },
  borderTopLeftRadius: Rs,
  borderTopRightRadius: Rs,
  borderBottomLeftRadius: Rs,
  borderBottomRightRadius: Rs,
  boxShadow: mM
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
  ...wM,
  ...Qs
});
const pd = ["", "X", "Y", "Z"], CM = 1e3;
let MM = 0;
function gd(i, l, s, o) {
  const { latestValues: c } = l;
  c[i] && (s[i] = c[i], l.setStaticValue(i, 0), o && (o[i] = 0));
}
const yd = ({ instance: i }) => i && Cl.get(i)?.demote();
function gS(i) {
  if (i.hasCheckedOptimisedAppear = !0, i.root === i)
    return;
  const { visualElement: l } = i.options;
  if (!l)
    return;
  const s = q1(l);
  if (window.MotionHasOptimisedAnimation(s, "transform")) {
    const { layout: c, layoutId: d } = i.options;
    window.MotionCancelOptimisedAnimation(s, "transform", Zt, !(c || d));
  }
  const { parent: o } = i;
  o && !o.hasCheckedOptimisedAppear && gS(o);
}
function yS({ attachResizeListener: i, defaultParent: l, measureScroll: s, checkIsScrollRoot: o, resetTransform: c }) {
  return class {
    constructor(f = {}, m = l?.()) {
      this.id = MM++, this.animationId = 0, this.animationCommitId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, this.nodes.forEach(zM), this.nodes.forEach(UM), this.nodes.forEach(HM), this.nodes.forEach(NM);
      }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = f, this.root = m ? m.root || m : this, this.path = m ? [...m.path, m] : [], this.parent = m, this.depth = m ? m.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new xM());
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
      this.isSVG = _h(f) && !QC(f), this.instance = f;
      const { layoutId: m, layout: p, visualElement: g } = this.options;
      if (g && !g.current && g.mount(f), this.root.nodes.add(this), this.parent && this.parent.children.add(this), this.root.hasTreeAnimated && (p || m) && (this.isLayoutDirty = !0), i) {
        let v, y = 0;
        const S = () => this.root.updateBlockedByResize = !1;
        Zt.read(() => {
          y = window.innerWidth;
        }), i(f, () => {
          const C = window.innerWidth;
          C !== y && (y = C, this.root.updateBlockedByResize = !0, v && v(), v = EM(S, 250), Kr.hasAnimatedSinceResize && (Kr.hasAnimatedSinceResize = !1, this.nodes.forEach(N0)));
        });
      }
      m && this.root.registerSharedNode(m, this), this.options.animate !== !1 && g && (m || p) && this.addEventListener("didUpdate", ({ delta: v, hasLayoutChanged: y, hasRelativeLayoutChanged: S, layout: C }) => {
        if (this.isAnimationBlocked) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const T = this.options.transition || g.getDefaultTransition() || XM, { onLayoutAnimationStart: w, onLayoutAnimationComplete: x } = g.getProps(), D = !this.targetLayout || !mS(this.targetLayout, C), z = !y && S;
        if (this.options.layoutRoot || this.resumeFrom || z || y && (D || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0);
          const H = {
            ...zh(T, "layout"),
            onPlay: w,
            onComplete: x
          };
          (g.shouldReduceMotion || this.options.layoutRoot) && (H.delay = 0, H.type = !1), this.startAnimation(H), this.setAnimationOrigin(v, z, H.path);
        } else
          y || N0(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(GM), this.animationId++);
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
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && gS(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      yd(this), this.isLayoutDirty = !0;
      for (let v = 0; v < this.path.length; v++) {
        const y = this.path[v];
        y.shouldResetTransform = !0, yd(y), (typeof y.latestValues.x == "string" || typeof y.latestValues.y == "string") && (y.isLayoutDirty = !0), y.updateScroll("snapshot"), y.options.layoutRoot && y.willUpdate(!1), y.isAnimationBlocked && (y.dragSnapshot || (y.dragSnapshot = y.measure()), this.dragAncestor = y);
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
        this.unblockUpdate(), this.updateBlockedByResize = !1, this.clearAllSnapshots(), p && this.nodes.forEach(VM), this.nodes.forEach(O0);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(z0);
        return;
      }
      this.animationCommitId = this.animationId, this.isUpdating ? (this.isUpdating = !1, this.nodes.forEach(jM), this.nodes.forEach(LM), this.nodes.forEach(BM), this.nodes.forEach(DM), this.nodes.forEach(OM)) : this.nodes.forEach(z0), this.clearAllSnapshots();
      const m = ee.now();
      ue.delta = Gn(0, 1e3 / 60, m - ue.timestamp), ue.timestamp = m, ue.isProcessing = !0, od.update.process(ue), od.preRender.process(ue), od.render.process(ue), ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, Bh.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(RM), this.sharedNodes.forEach(kM);
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
      this.snapshot || !this.instance || (this.snapshot = this.measure(), this.snapshot && !Ve(this.snapshot.measuredBox.x) && !Ve(this.snapshot.measuredBox.y) && (this.snapshot = void 0));
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
      f && yd(this);
      const m = this.projectionDelta && !hS(this.projectionDelta), p = this.getTransformTemplate(), g = p ? p(this.latestValues, "") : void 0, v = g !== this.prevTransformTemplateValue;
      f && this.instance && (m || pa(this.latestValues) || v) && (c(this.instance, g), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(f = !0) {
      const m = this.measurePageBox();
      let p = this.removeElementScroll(m);
      return f && (p = this.removeTransform(p)), QM(p), {
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
      if (!(this.scroll?.wasRoot || this.path.some(ZM))) {
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
        !m && y.options.layoutScroll && y.scroll && y !== y.root && (xn(g.x, -y.scroll.offset.x), xn(g.y, -y.scroll.offset.y)), pa(y.latestValues) && kr(g, y.latestValues, y.layout?.layoutBox);
      }
      return pa(this.latestValues) && kr(g, this.latestValues, this.layout?.layoutBox), g;
    }
    removeTransform(f) {
      const m = de();
      bn(m, f);
      for (let p = 0; p < this.path.length; p++) {
        const g = this.path[p];
        if (!pa(g.latestValues))
          continue;
        let v;
        g.instance && (Fd(g.latestValues) && g.updateSnapshot(), v = de(), bn(v, g.measurePageBox())), S0(m, g.latestValues, g.snapshot?.layoutBox, v);
      }
      return pa(this.latestValues) && S0(m, this.latestValues), m;
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
      !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && S && S.layout ? this.createRelativeTarget(S, this.layout.layoutBox, S.layout.layoutBox) : this.removeRelativeTarget()), !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = de(), this.targetWithTransforms = de()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), uM(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : bn(this.target, this.layout.layoutBox), F1(this.target, this.targetDelta)) : bn(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1, this.options.layoutAnchor !== !1 && S && !!S.resumingFrom == !!this.resumingFrom && !S.options.layoutScroll && S.target && this.animationProgress !== 1 ? this.createRelativeTarget(S, this.target, S.target) : this.relativeParent = this.relativeTarget = void 0));
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Fd(this.parent.latestValues) || P1(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    createRelativeTarget(f, m, p) {
      this.relativeParent = f, this.forceRelativeParentToResolveTarget(), this.relativeTarget = de(), this.relativeTargetOrigin = de(), su(this.relativeTargetOrigin, m, p, this.options.layoutAnchor || void 0), bn(this.relativeTarget, this.relativeTargetOrigin);
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
      CC(this.layoutCorrected, this.treeScale, this.path, m), f.layout && !f.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (f.target = f.layout.layoutBox, f.targetWithTransforms = de());
      const { target: C } = f;
      if (!C) {
        this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (m0(this.prevProjectionDelta.x, this.projectionDelta.x), m0(this.prevProjectionDelta.y, this.projectionDelta.y)), js(this.projectionDelta, this.layoutCorrected, C, this.latestValues), (this.treeScale.x !== y || this.treeScale.y !== S || !w0(this.projectionDelta.x, this.prevProjectionDelta.x) || !w0(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", C));
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
      const C = de(), T = g ? g.source : void 0, w = this.layout ? this.layout.source : void 0, x = T !== w, D = this.getStack(), z = !D || D.members.length <= 1, H = !!(x && !z && this.options.crossfade === !0 && !this.path.some(qM));
      this.animationProgress = 0;
      let L;
      const $ = p?.interpolateProjection(f);
      this.mixTargetDelta = (ot) => {
        const j = ot / 1e3, N = $?.(j);
        N ? (S.x.translate = N.x, S.x.scale = qt(f.x.scale, 1, j), S.x.origin = f.x.origin, S.x.originPoint = f.x.originPoint, S.y.translate = N.y, S.y.scale = qt(f.y.scale, 1, j), S.y.origin = f.y.origin, S.y.originPoint = f.y.originPoint) : (R0(S.x, f.x, j), R0(S.y, f.y, j)), this.setTargetDelta(S), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (su(C, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0), YM(this.relativeTarget, this.relativeTargetOrigin, C, j), L && hM(this.relativeTarget, L) && (this.isProjectionDirty = !1), L || (L = de()), bn(L, this.relativeTarget)), x && (this.animationValues = y, yM(y, v, this.latestValues, j, H, z)), N && N.rotate !== void 0 && (this.animationValues || (this.animationValues = y), this.animationValues.pathRotation = N.rotate), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(f) {
      this.notifyListeners("animationStart"), this.currentAnimation?.stop(), this.resumingFrom?.currentAnimation?.stop(), this.pendingAnimation && (Ui(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = Zt.update(() => {
        Kr.hasAnimatedSinceResize = !0, this.motionValue || (this.motionValue = Ml(0)), this.motionValue.jump(0, !1), this.currentAnimation = SM(this.motionValue, [0, 1e3], {
          ...f,
          velocity: 0,
          isSync: !0,
          onUpdate: (m) => {
            this.mixTargetDelta(m), f.onUpdate && f.onUpdate(m);
          },
          onComplete: () => {
            f.onComplete && f.onComplete(), this.completeAnimation();
          }
        }), iw(this.currentAnimation, this), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const f = this.getStack();
      f && f.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(CM), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const f = this.getLead(), { targetWithTransforms: m, layout: p, latestValues: g } = f;
      let { target: v } = f;
      if (!(!m || !v || !p)) {
        if (this !== f && this.layout && p && vS(this.options.animationType, this.layout.layoutBox, p.layoutBox)) {
          v = this.target || de();
          const y = Ve(this.layout.layoutBox.x);
          v.x.min = f.target.x.min, v.x.max = v.x.min + y;
          const S = Ve(this.layout.layoutBox.y);
          v.y.min = f.target.y.min, v.y.max = v.y.min + S;
        }
        bn(m, v), kr(m, g), js(this.projectionDeltaWithTransform, this.layoutCorrected, m, g);
      }
    }
    registerSharedNode(f, m) {
      this.sharedNodes.has(f) || this.sharedNodes.set(f, new AM()), this.sharedNodes.get(f).add(m);
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
      p.z && gd("z", f, g, this.animationValues);
      for (let v = 0; v < pd.length; v++)
        gd(`rotate${pd[v]}`, f, g, this.animationValues), gd(`skew${pd[v]}`, f, g, this.animationValues);
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
        this.options.layoutId && (f.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, f.pointerEvents = Zr(m?.pointerEvents) || ""), this.hasProjected && !pa(this.latestValues) && (f.transform = p ? p({}, "") : "none", this.hasProjected = !1);
        return;
      }
      f.visibility = "";
      const v = g.animationValues || g.latestValues;
      this.applyTransformsToTarget();
      let y = pM(this.projectionDeltaWithTransform, this.treeScale, v);
      p && (y = p(v, y)), f.transform = y;
      const { x: S, y: C } = this.projectionDelta;
      f.transformOrigin = `${S.origin * 100}% ${C.origin * 100}% 0`, g.animationValues ? f.opacity = g === this ? v.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : v.opacityExit : f.opacity = g === this ? v.opacity !== void 0 ? v.opacity : "" : v.opacityExit !== void 0 ? v.opacityExit : 0;
      for (const T in Qs) {
        if (v[T] === void 0)
          continue;
        const { correct: w, applyTo: x, isCSSVariable: D } = Qs[T], z = y === "none" ? v[T] : w(v[T], g);
        if (x) {
          const H = x.length;
          for (let L = 0; L < H; L++)
            f[x[L]] = z;
        } else
          D ? this.options.visualElement.renderState.vars[T] = z : f[T] = z;
      }
      this.options.layoutId && (f.pointerEvents = g === this ? Zr(m?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((f) => f.currentAnimation?.stop()), this.root.nodes.forEach(O0), this.root.sharedNodes.clear();
    }
  };
}
function DM(i) {
  i.updateLayout(), _M(i);
}
function OM(i) {
  const l = i.resumeFrom?.snapshot || i.snapshot;
  if (i.isLead() && i.layout && l && i.hasListeners("didUpdate")) {
    const { layoutBox: s, measuredBox: o } = i.layout, { animationType: c } = i.options, d = l.source !== i.layout.source;
    if (c === "size")
      Tn((v) => {
        const y = d ? l.measuredBox[v] : l.layoutBox[v], S = Ve(y);
        y.min = s[v].min, y.max = y.min + S;
      });
    else if (c === "x" || c === "y") {
      const v = c === "x" ? "y" : "x";
      Id(d ? l.measuredBox[v] : l.layoutBox[v], s[v]);
    } else vS(c, l.layoutBox, s) && Tn((v) => {
      const y = d ? l.measuredBox[v] : l.layoutBox[v], S = Ve(s[v]);
      y.max = y.min + S, i.relativeTarget && !i.currentAnimation && (i.isProjectionDirty = !0, i.relativeTarget[v].max = i.relativeTarget[v].min + S);
    });
    const f = Al();
    js(f, s, l.layoutBox);
    const m = Al();
    d ? js(m, i.applyTransform(o, !0), l.measuredBox) : js(m, s, l.layoutBox);
    const p = !hS(f);
    let g = !1;
    if (!i.resumeFrom) {
      const v = i.getClosestProjectingParent();
      if (v && !v.resumeFrom) {
        const { snapshot: y, layout: S } = v;
        if (y && S) {
          const C = i.options.layoutAnchor || void 0, T = de();
          su(T, l.layoutBox, y.layoutBox, C);
          const w = de();
          su(w, s, S.layoutBox, C), mS(T, w) || (g = !0), v.options.layoutRoot && (i.relativeTarget = w, i.relativeTargetOrigin = T, i.relativeParent = v);
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
function NM(i) {
  i.isProjectionDirty = i.isSharedProjectionDirty = i.isTransformDirty = !1;
}
function RM(i) {
  i.clearSnapshot();
}
function O0(i) {
  i.clearMeasurements();
}
function VM(i) {
  i.isLayoutDirty = !0, i.updateLayout();
}
function z0(i) {
  i.isLayoutDirty = !1;
}
function _M(i) {
  const { snapshot: l, dragAncestor: s } = i, o = s?.layout;
  if (!l || !o || i.resumeFrom || i.isAnimationBlocked)
    return;
  const c = s.dragSnapshot;
  Tn((d) => xn(l.layoutBox[d], o.layoutBox[d].min - c.layoutBox[d].min));
}
function jM(i) {
  i.isAnimationBlocked && i.layout && !i.isLayoutDirty && (i.snapshot = i.dragSnapshot || i.layout, i.isLayoutDirty = !0);
}
function LM(i) {
  i.relativeTarget && i.relativeParent?.isLayoutDirty && (i.currentAnimation ? i.isLayoutDirty = !0 : (i.targetDelta = void 0, i.removeRelativeTarget()));
}
function BM(i) {
  const { visualElement: l } = i.options;
  l && l.getProps().onBeforeLayoutMeasure && l.notify("BeforeLayoutMeasure"), i.resetTransform();
}
function N0(i) {
  i.finishAnimation(), i.targetDelta = i.relativeTarget = i.target = void 0, i.isProjectionDirty = !0;
}
function UM(i) {
  i.resolveTargetDelta();
}
function HM(i) {
  i.calcProjection();
}
function GM(i) {
  i.resetSkewAndRotation();
}
function kM(i) {
  i.removeLeadSnapshot();
}
function R0(i, l, s) {
  i.translate = qt(l.translate, 0, s), i.scale = qt(l.scale, 1, s), i.origin = l.origin, i.originPoint = l.originPoint;
}
function V0(i, l, s, o) {
  i.min = qt(l.min, s.min, o), i.max = qt(l.max, s.max, o);
}
function YM(i, l, s, o) {
  V0(i.x, l.x, s.x, o), V0(i.y, l.y, s.y, o);
}
function qM(i) {
  return i.animationValues && i.animationValues.opacityExit !== void 0;
}
const XM = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, _0 = (i) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(i), j0 = _0("applewebkit/") && !_0("chrome/") ? Math.round : En;
function L0(i) {
  i.min = j0(i.min), i.max = j0(i.max);
}
function QM(i) {
  L0(i.x), L0(i.y);
}
function vS(i, l, s) {
  return i === "position" || i === "preserve-aspect" && !rM(A0(l), A0(s), 0.2);
}
function ZM(i) {
  return i !== i.root && i.scroll?.wasRoot;
}
const KM = yS({
  attachResizeListener: (i, l) => Zs(i, "resize", l),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
}), vd = {
  current: void 0
}, bS = yS({
  measureScroll: (i) => ({
    x: i.scrollLeft,
    y: i.scrollTop
  }),
  defaultParent: () => {
    if (!vd.current) {
      const i = new KM({});
      i.mount(window), i.setOptions({ layoutScroll: !0 }), vd.current = i;
    }
    return vd.current;
  },
  resetTransform: (i, l) => {
    i.style.transform = l !== void 0 ? l : "none";
  },
  checkIsScrollRoot: (i) => window.getComputedStyle(i).position === "fixed"
}), SS = X.createContext({
  transformPagePoint: (i) => i,
  isStatic: !1,
  reducedMotion: "never"
});
function PM(i = !0) {
  const l = X.useContext(fh);
  if (l === null)
    return [!0, null];
  const { isPresent: s, onExitComplete: o, register: c } = l, d = X.useId();
  X.useEffect(() => {
    if (i)
      return c(d);
  }, [i]);
  const f = X.useCallback(() => i && o && o(d), [d, o, i]);
  return !s && o ? [!1, f] : [!0];
}
const TS = X.createContext({ strict: !1 }), B0 = {
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
let U0 = !1;
function FM() {
  if (U0)
    return;
  const i = {};
  for (const l in B0)
    i[l] = {
      isEnabled: (s) => B0[l].some((o) => !!s[o])
    };
  iS(i), U0 = !0;
}
function xS() {
  return FM(), FC();
}
function JM(i) {
  const l = xS();
  for (const s in i)
    l[s] = {
      ...l[s],
      ...i[s]
    };
  iS(l);
}
const du = /* @__PURE__ */ X.createContext({});
function IM(i, l) {
  if (fu(i)) {
    const { initial: s, animate: o } = i;
    return {
      initial: s === !1 || Xs(s) ? s : void 0,
      animate: Xs(o) ? o : void 0
    };
  }
  return i.inherit !== !1 ? l : {};
}
function WM(i) {
  const { initial: l, animate: s } = IM(i, X.useContext(du));
  return X.useMemo(() => ({ initial: l, animate: s }), [H0(l), H0(s)]);
}
function H0(i) {
  return Array.isArray(i) ? i.join(" ") : i;
}
const Yh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ES(i, l, s) {
  for (const o in l)
    !Ce(l[o]) && !sS(o, s) && (i[o] = l[o]);
}
function $M({ transformTemplate: i }, l) {
  return X.useMemo(() => {
    const s = Yh();
    return Lh(s, l, i), Object.assign({}, s.vars, s.style);
  }, [l]);
}
function t3(i, l) {
  const s = i.style || {}, o = {};
  return ES(o, s, i), Object.assign(o, $M(i, l)), o;
}
function e3(i, l) {
  const s = {}, o = t3(i, l);
  return i.drag && i.dragListener !== !1 && (s.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = i.drag === !0 ? "none" : `pan-${i.drag === "x" ? "y" : "x"}`), i.tabIndex === void 0 && (i.onTap || i.onTapStart || i.whileTap) && (s.tabIndex = 0), s.style = o, s;
}
const AS = () => ({
  ...Yh(),
  attrs: {}
});
function n3(i, l, s, o) {
  const c = X.useMemo(() => {
    const d = AS();
    return Z1(d, l, rS(o), i.transformTemplate, i.style), {
      ...d.attrs,
      style: { ...d.style }
    };
  }, [l]);
  if (i.style) {
    const d = {};
    ES(d, i.style, i), c.style = { ...d, ...c.style };
  }
  return c;
}
const i3 = /* @__PURE__ */ new Set([
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
  return i.startsWith("while") || i.startsWith("drag") && i !== "draggable" || i.startsWith("layout") || i.startsWith("onTap") || i.startsWith("onPan") || i.startsWith("onLayout") || i3.has(i);
}
function a3(i, l) {
  return i.startsWith("on") ? !ou(i) : l?.(i) ?? !ou(i);
}
function l3(i, l, s, o) {
  const c = {};
  for (const d in i)
    d === "values" && typeof i.values == "object" || Ce(i[d]) || (a3(d, o) || s === !0 && ou(d) || !l && !ou(d) || // If trying to use native HTML drag events, forward drag listeners
    i.draggable && d.startsWith("onDrag")) && (c[d] = i[d]);
  return c;
}
const s3 = [
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
function qh(i) {
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
      !!(s3.indexOf(i) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(i))
    )
  );
}
function o3(i, l, s, { latestValues: o }, c, d = !1, f, m) {
  const g = (f ?? qh(i) ? n3 : e3)(l, o, c, i), v = l3(l, typeof i == "string", d, m), y = i !== X.Fragment ? { ...v, ...g, ref: s } : {}, { children: S } = l, C = X.useMemo(() => Ce(S) ? S.get() : S, [S]);
  return X.createElement(i, {
    ...y,
    children: C
  });
}
function r3({ scrapeMotionValuesFromProps: i, createRenderState: l }, s, o, c) {
  return {
    latestValues: u3(s, o, c, i),
    renderState: l()
  };
}
function u3(i, l, s, o) {
  const c = {}, d = o(i, {});
  for (const S in d)
    c[S] = Zr(d[S]);
  let { initial: f, animate: m } = i;
  const p = fu(i), g = eS(i);
  l && g && !p && i.inherit !== !1 && (f === void 0 && (f = l.initial), m === void 0 && (m = l.animate));
  let v = s ? s.initial === !1 : !1;
  v = v || f === !1;
  const y = v ? m : f;
  if (y && typeof y != "boolean" && !cu(y)) {
    const S = Array.isArray(y) ? y : [y];
    for (let C = 0; C < S.length; C++) {
      const T = H1(i, S[C]);
      if (T) {
        const { transitionEnd: w, transition: x, ...D } = T;
        for (const z in D) {
          let H = D[z];
          if (Array.isArray(H)) {
            const L = v ? H.length - 1 : 0;
            H = H[L];
          }
          H !== null && (c[z] = H);
        }
        for (const z in w)
          c[z] = w[z];
      }
    }
  }
  return c;
}
const wS = (i) => (l, s) => {
  const o = X.useContext(du), c = X.useContext(fh), d = () => r3(i, l, o, c);
  return s ? d() : a2(d);
}, c3 = /* @__PURE__ */ wS({
  scrapeMotionValuesFromProps: kh,
  createRenderState: Yh
}), f3 = /* @__PURE__ */ wS({
  scrapeMotionValuesFromProps: uS,
  createRenderState: AS
}), d3 = /* @__PURE__ */ Symbol.for("motionComponentSymbol");
function h3(i, l, s) {
  const o = X.useRef(s);
  X.useInsertionEffect(() => {
    o.current = s;
  });
  const c = X.useRef(null);
  return X.useCallback((d) => {
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
const CS = X.createContext({});
function vl(i) {
  return i && typeof i == "object" && Object.prototype.hasOwnProperty.call(i, "current");
}
function m3(i, l, s, o, c, d) {
  const { visualElement: f } = X.useContext(du), m = X.useContext(TS), p = X.useContext(fh), g = X.useContext(SS), v = g.reducedMotion, y = g.skipAnimations, S = X.useRef(null), C = X.useRef(!1);
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
  const T = S.current, w = X.useContext(CS);
  T && !T.projection && c && (T.type === "html" || T.type === "svg") && p3(S.current, s, c, w);
  const x = X.useRef(!1);
  X.useInsertionEffect(() => {
    T && x.current && T.update(s, p);
  });
  const D = s[Y1], z = X.useRef(!!D && typeof window < "u" && !window.MotionHandoffIsComplete?.(D) && window.MotionHasOptimisedAnimation?.(D));
  return _v(() => {
    !C.current || !T || (T.animationState?.animateChanges(), T.enteringChildren = void 0);
  }, []), _v(() => {
    C.current = !0, T && (x.current = !0, window.MotionIsMounted = !0, T.updateFeatures(), T.scheduleRenderMicrotask(), z.current && T.animationState && T.animationState.animateChanges());
  }), X.useEffect(() => {
    T && (!z.current && T.animationState && T.animationState.animateChanges(), z.current && (queueMicrotask(() => {
      window.MotionHandoffMarkAsComplete?.(D);
    }), z.current = !1), T.enteringChildren = void 0);
  }), T;
}
function p3(i, l, s, o) {
  const { layoutId: c, layout: d, drag: f, dragConstraints: m, layoutScroll: p, layoutRoot: g, layoutAnchor: v, layoutCrossfade: y } = l;
  i.projection = new s(i.latestValues, l["data-framer-portal-id"] ? void 0 : MS(i.parent)), i.projection.setOptions({
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
function MS(i) {
  if (i)
    return i.options.allowProjection !== !1 ? i.projection : MS(i.parent);
}
function bd(i, { forwardMotionProps: l = !1, type: s } = {}, o, c) {
  o && JM(o);
  const d = s ? s === "svg" : qh(i), f = d ? f3 : c3;
  function m(g, v) {
    let y;
    const S = {
      ...X.useContext(SS),
      ...g,
      layoutId: g3(g)
    }, { isStatic: C, isValidProp: T } = S, w = WM(g), x = f(g, C);
    if (!C && typeof window < "u") {
      y3();
      const D = v3(S);
      y = D.MeasureLayout, w.visualElement = m3(i, x, S, c, D.ProjectionNode, d);
    }
    return O.jsxs(du.Provider, { value: w, children: [y && w.visualElement ? O.jsx(y, { visualElement: w.visualElement, ...S }) : null, o3(i, g, h3(x, w.visualElement, v), x, C, l, d, T)] });
  }
  m.displayName = `motion.${typeof i == "string" ? i : `create(${i.displayName ?? i.name ?? ""})`}`;
  const p = X.forwardRef(m);
  return p[d3] = i, p;
}
function g3({ layoutId: i }) {
  const l = X.useContext(Kb).id;
  return l && i !== void 0 ? l + "-" + i : i;
}
function y3(i, l) {
  X.useContext(TS).strict;
}
function v3(i) {
  const l = xS(), { drag: s, layout: o } = l;
  if (!s && !o)
    return {};
  const c = { ...s, ...o };
  return {
    MeasureLayout: s?.isEnabled(i) || o?.isEnabled(i) ? c.MeasureLayout : void 0,
    ProjectionNode: c.ProjectionNode
  };
}
function b3(i, l) {
  if (typeof Proxy > "u")
    return bd;
  const s = /* @__PURE__ */ new Map(), o = (d, f) => bd(d, f, i, l), c = (d, f) => o(d, f);
  return new Proxy(c, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (d, f) => f === "create" ? o : (s.has(f) || s.set(f, bd(f, void 0, i, l)), s.get(f))
  });
}
const S3 = (i, l) => l.isSVG ?? qh(i) ? new tM(l) : new WC(l, {
  allowProjection: i !== X.Fragment
});
class T3 extends Gi {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(l) {
    super(l), l.animationState || (l.animationState = nM(l));
  }
  updateAnimationControlsSubscription() {
    const { animate: l } = this.node.getProps();
    cu(l) && (this.unmountControls = l.subscribe(this.node));
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
let x3 = 0;
class E3 extends Gi {
  constructor() {
    super(...arguments), this.id = x3++;
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
const A3 = {
  animation: {
    Feature: T3
  },
  exit: {
    Feature: E3
  }
};
function hu(i) {
  return {
    point: {
      x: i.pageX,
      y: i.pageY
    }
  };
}
const w3 = (i) => (l) => Uh(l) && i(l, hu(l));
function Ls(i, l, s, o) {
  return Zs(i, l, w3(s), o);
}
const DS = ({ current: i }) => i ? i.ownerDocument.defaultView : null, G0 = (i, l) => Math.abs(i - l);
function C3(i, l) {
  const s = G0(i.x, l.x), o = G0(i.y, l.y);
  return Math.sqrt(s ** 2 + o ** 2);
}
const k0 = /* @__PURE__ */ new Set(["auto", "scroll"]);
class OS {
  constructor(l, s, { transformPagePoint: o, contextWindow: c = window, dragSnapToOrigin: d = !1, distanceThreshold: f = 3, element: m } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.lastRawMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.scrollPositions = /* @__PURE__ */ new Map(), this.removeScrollListeners = null, this.onElementScroll = (T) => {
      this.handleScroll(T.target);
    }, this.onWindowScroll = () => {
      this.handleScroll(window);
    }, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      this.hasPendingMove = !1, this.lastRawMoveEventInfo && (this.lastMoveEventInfo = jr(this.lastRawMoveEventInfo, this.transformPagePoint));
      const T = Sd(this.lastMoveEventInfo, this.history), w = this.startEvent !== null, x = C3(T.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
      if (!w && !x)
        return;
      const { point: D } = T;
      this.history.push({ ...D, timestamp: ee.now() });
      const { onStart: z, onMove: H } = this.handlers;
      w || (z && z(this.lastMoveEvent, T), this.startEvent = this.lastMoveEvent), H && H(this.lastMoveEvent, T);
    }, this.handlePointerMove = (T, w) => {
      this.lastMoveEvent = T, this.lastRawMoveEventInfo = w, this.lastMoveEventInfo = jr(w, this.transformPagePoint), this.hasPendingMove = !0, Zt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (T, w) => {
      this.hasPendingMove && this.updatePoint(), this.end();
      const { onEnd: x, onSessionEnd: D, resumeAnimation: z } = this.handlers;
      if ((this.dragSnapToOrigin || !this.startEvent) && z && z(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const H = Sd(T.type === "pointercancel" ? this.lastMoveEventInfo : jr(w, this.transformPagePoint), this.history);
      this.startEvent && x && x(T, H), D && D(T, H);
    }, !Uh(l))
      return;
    this.dragSnapToOrigin = d, this.handlers = s, this.transformPagePoint = o, this.distanceThreshold = f, this.contextWindow = c || window;
    const p = hu(l), g = jr(p, this.transformPagePoint), { point: v } = g, { timestamp: y } = ue;
    this.history = [{ ...v, timestamp: y }];
    const { onSessionStart: S } = s;
    S && S(l, Sd(g, this.history));
    const C = { passive: !0, capture: !0 };
    this.removeListeners = Is(Ls(this.contextWindow, "pointermove", this.handlePointerMove, C), Ls(this.contextWindow, "pointerup", this.handlePointerUp, C), Ls(this.contextWindow, "pointercancel", this.handlePointerUp, C)), m && this.startScrollTracking(m);
  }
  /**
   * Start tracking scroll on ancestors and window.
   */
  startScrollTracking(l) {
    let s = l.parentElement;
    for (; s; ) {
      const o = getComputedStyle(s);
      (k0.has(o.overflowX) || k0.has(o.overflowY)) && this.scrollPositions.set(s, {
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
function jr(i, l) {
  return l ? { point: l(i.point) } : i;
}
function Y0(i, l) {
  return { x: i.x - l.x, y: i.y - l.y };
}
function Sd({ point: i }, l) {
  return {
    point: i,
    delta: Y0(i, zS(l)),
    offset: Y0(i, M3(l)),
    velocity: D3(l, 0.1)
  };
}
function M3(i) {
  return i[0];
}
function zS(i) {
  return i[i.length - 1];
}
function D3(i, l) {
  if (i.length < 2)
    return { x: 0, y: 0 };
  let s = i.length - 1, o = null;
  const c = zS(i);
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
function O3(i, { min: l, max: s }, o) {
  return l !== void 0 && i < l ? i = o ? qt(l, i, o.min) : Math.max(i, l) : s !== void 0 && i > s && (i = o ? qt(s, i, o.max) : Math.min(i, s)), i;
}
function q0(i, l, s) {
  return {
    min: l !== void 0 ? i.min + l : void 0,
    max: s !== void 0 ? i.max + s - (i.max - i.min) : void 0
  };
}
function z3(i, { top: l, left: s, bottom: o, right: c }) {
  return {
    x: q0(i.x, s, c),
    y: q0(i.y, l, o)
  };
}
function X0(i, l) {
  let s = l.min - i.min, o = l.max - i.max;
  return l.max - l.min < i.max - i.min && ([s, o] = [o, s]), { min: s, max: o };
}
function N3(i, l) {
  return {
    x: X0(i.x, l.x),
    y: X0(i.y, l.y)
  };
}
function R3(i, l) {
  let s = 0.5;
  const o = Ve(i), c = Ve(l);
  return c > o ? s = /* @__PURE__ */ Ta(l.min, l.max - o, i.min) : o > c && (s = /* @__PURE__ */ Ta(i.min, i.max - c, l.min)), Gn(0, 1, s);
}
function V3(i, l) {
  const s = {};
  return l.min !== void 0 && (s.min = l.min - i.min), l.max !== void 0 && (s.max = l.max - i.min), s;
}
const Wd = 0.35;
function _3(i = Wd) {
  return i === !1 ? i = 0 : i === !0 && (i = Wd), {
    x: Q0(i, "left", "right"),
    y: Q0(i, "top", "bottom")
  };
}
function Q0(i, l, s) {
  return {
    min: Z0(i, l),
    max: Z0(i, s)
  };
}
function Z0(i, l) {
  return typeof i == "number" ? i : i[l] || 0;
}
const j3 = /* @__PURE__ */ new WeakMap();
class L3 {
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
      const { drag: C, dragPropagation: T, onDragStart: w } = this.getProps();
      if (C && !T && (this.openDragLock && this.openDragLock(), this.openDragLock = DC(C), !this.openDragLock))
        return;
      this.latestPointerEvent = y, this.latestPanInfo = S, this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Tn((D) => {
        let z = this.getAxisMotionValue(D).get() || 0;
        if (Un.test(z)) {
          const { projection: H } = this.visualElement;
          if (H && H.layout) {
            const L = H.layout.layoutBox[D];
            L && (z = Ve(L) * (parseFloat(z) / 100));
          }
        }
        this.originPoint[D] = z;
      }), w && Zt.update(() => w(y, S), !1, !0), Kd(this.visualElement, "transform");
      const { animationState: x } = this.visualElement;
      x && x.setActive("whileDrag", !0);
    }, m = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S;
      const { dragPropagation: C, dragDirectionLock: T, onDirectionLock: w, onDrag: x } = this.getProps();
      if (!C && !this.openDragLock)
        return;
      const { offset: D } = S;
      if (T && this.currentDirection === null) {
        this.currentDirection = U3(D), this.currentDirection !== null && w && w(this.currentDirection);
        return;
      }
      this.updateAxis("x", S.point, D), this.updateAxis("y", S.point, D), this.visualElement.render(), x && Zt.update(() => x(y, S), !1, !0);
    }, p = (y, S) => {
      this.latestPointerEvent = y, this.latestPanInfo = S, this.stop(y, S), this.latestPointerEvent = null, this.latestPanInfo = null;
    }, g = () => {
      const { dragSnapToOrigin: y } = this.getProps();
      (y || this.constraints) && this.startAnimation({ x: 0, y: 0 });
    }, { dragSnapToOrigin: v } = this.getProps();
    this.panSession = new OS(l, {
      onSessionStart: d,
      onStart: f,
      onMove: m,
      onSessionEnd: p,
      resumeAnimation: g
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: v,
      distanceThreshold: o,
      contextWindow: DS(this.visualElement),
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
    if (!o || !Lr(l, c, this.currentDirection))
      return;
    const d = this.getAxisMotionValue(l);
    let f = this.originPoint[l] + o[l];
    this.constraints && this.constraints[l] && (f = O3(f, this.constraints[l], this.elastic[l])), d.set(f);
  }
  resolveConstraints() {
    const { dragConstraints: l, dragElastic: s } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout, c = this.constraints;
    l && vl(l) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : l && o ? this.constraints = z3(o.layoutBox, l) : this.constraints = !1, this.elastic = _3(s), c !== this.constraints && !vl(l) && o && this.constraints && !this.hasMutatedConstraints && Tn((d) => {
      this.constraints !== !1 && this.getAxisMotionValue(d) && (this.constraints[d] = V3(o.layoutBox[d], this.constraints[d]));
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
    const d = MC(o, c.root, this.visualElement.getTransformPagePoint());
    let f = N3(c.layout.layoutBox, d);
    if (s) {
      const m = s(AC(f));
      this.hasMutatedConstraints = !!m, m && (f = K1(m));
    }
    return f;
  }
  startAnimation(l) {
    const { drag: s, dragMomentum: o, dragElastic: c, dragTransition: d, dragSnapToOrigin: f, onDragTransitionEnd: m } = this.getProps(), p = this.constraints || {}, g = Tn((v) => {
      if (!Lr(v, s, this.currentDirection))
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
    return Kd(this.visualElement, l), o.start(Nh(l, o, 0, s, this.visualElement, !1));
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
      d[m] = R3({ min: p, max: p }, c[m]);
    });
    const { transformTemplate: f } = this.visualElement.getProps();
    this.visualElement.current.style.transform = f ? f({}, "") : "none", o.root && o.root.updateScroll(), o.updateLayout(), this.constraints = !1, this.resolveConstraints(), Tn((m) => {
      const p = this.getAxisMotionValue(m);
      if (!Lr(m, l, null) || !p.get())
        return;
      const { min: g, max: v } = this.constraints[m];
      p.set(qt(g, v, d[m]));
    }), this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    j3.set(this.visualElement, this);
    const l = this.visualElement.current, s = Ls(l, "pointerdown", (g) => {
      const { drag: v, dragListener: y = !0 } = this.getProps(), S = g.target, C = S !== l && _C(S);
      v && y && !C && this.start(g);
    });
    let o;
    const c = () => {
      const { dragConstraints: g } = this.getProps();
      vl(g) && g.current && (this.constraints = this.resolveRefConstraints(), o || (o = B3(l, g.current, () => this.scalePositionWithinConstraints())));
    }, { projection: d } = this.visualElement, f = d.addEventListener("measure", c);
    d && !d.layout && (d.root && d.root.updateScroll(), d.updateLayout()), Zt.read(c);
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
    const l = this.visualElement.getProps(), { drag: s = !1, dragDirectionLock: o = !1, dragPropagation: c = !1, dragConstraints: d = !1, dragElastic: f = Wd, dragMomentum: m = !0 } = l;
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
function K0(i) {
  let l = !0;
  return () => {
    if (l) {
      l = !1;
      return;
    }
    i();
  };
}
function B3(i, l, s) {
  const o = o0(i, K0(s)), c = o0(l, K0(s));
  return () => {
    o(), c();
  };
}
function Lr(i, l, s) {
  return (l === !0 || l === i) && (s === null || s === i);
}
function U3(i, l = 10) {
  let s = null;
  return Math.abs(i.y) > l ? s = "y" : Math.abs(i.x) > l && (s = "x"), s;
}
class H3 extends Gi {
  constructor(l) {
    super(l), this.removeGroupControls = En, this.removeListeners = En, this.controls = new L3(l);
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
const Td = (i) => (l, s) => {
  i && Zt.update(() => i(l, s), !1, !0);
};
class G3 extends Gi {
  constructor() {
    super(...arguments), this.removePointerDownListener = En;
  }
  onPointerDown(l) {
    this.session = new OS(l, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: DS(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: l, onPanStart: s, onPan: o, onPanEnd: c } = this.node.getProps();
    return {
      onSessionStart: Td(l),
      onStart: Td(s),
      onMove: Td(o),
      onEnd: (d, f) => {
        delete this.session, c && Zt.postRender(() => c(d, f));
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
let xd = !1;
class k3 extends X.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: l, layoutGroup: s, switchLayoutGroup: o, layoutId: c } = this.props, { projection: d } = l;
    d && (s.group && s.group.add(d), o && o.register && c && o.register(d), xd && d.root.didUpdate(), d.addEventListener("animationComplete", () => {
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
    }), xd = !0, c || l.layoutDependency !== s || s === void 0 || l.isPresent !== d ? f.willUpdate() : this.safeToRemove(), l.isPresent !== d && (d ? f.promote() : f.relegate() || Zt.postRender(() => {
      const m = f.getStack();
      (!m || !m.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { visualElement: l, layoutAnchor: s } = this.props, { projection: o } = l;
    o && (o.options.layoutAnchor = s, o.root.didUpdate(), Bh.postRender(() => {
      !o.currentAnimation && o.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: l, layoutGroup: s, switchLayoutGroup: o } = this.props, { projection: c } = l;
    xd = !0, c && (c.scheduleCheckAfterUnmount(), s && s.group && s.group.remove(c), o && o.deregister && o.deregister(c));
  }
  safeToRemove() {
    const { safeToRemove: l } = this.props;
    l && l();
  }
  render() {
    return null;
  }
}
function NS(i) {
  const [l, s] = PM(), o = X.useContext(Kb);
  return O.jsx(k3, { ...i, layoutGroup: o, switchLayoutGroup: X.useContext(CS), isPresent: l, safeToRemove: s });
}
const Y3 = {
  pan: {
    Feature: G3
  },
  drag: {
    Feature: H3,
    ProjectionNode: bS,
    MeasureLayout: NS
  }
};
function P0(i, l, s) {
  const { props: o } = i;
  i.animationState && o.whileHover && i.animationState.setActive("whileHover", s === "Start");
  const c = "onHover" + s, d = o[c];
  d && Zt.postRender(() => d(l, hu(l)));
}
class q3 extends Gi {
  mount() {
    const { current: l } = this.node;
    l && (this.unmount = zC(l, (s, o) => (P0(this.node, o, "Start"), (c) => P0(this.node, c, "End"))));
  }
  unmount() {
  }
}
class X3 extends Gi {
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
function F0(i, l, s) {
  const { props: o } = i;
  if (i.current instanceof HTMLButtonElement && i.current.disabled)
    return;
  i.animationState && o.whileTap && i.animationState.setActive("whileTap", s === "Start");
  const c = "onTap" + (s === "End" ? "" : s), d = o[c];
  d && Zt.postRender(() => d(l, hu(l)));
}
class Q3 extends Gi {
  mount() {
    const { current: l } = this.node;
    if (!l)
      return;
    const { globalTapTarget: s, propagate: o } = this.node.props;
    this.unmount = LC(l, (c, d) => (F0(this.node, d, "Start"), (f, { success: m }) => F0(this.node, f, m ? "End" : "Cancel")), {
      useGlobalTarget: s,
      stopPropagation: o?.tap === !1
    });
  }
  unmount() {
  }
}
const $d = /* @__PURE__ */ new WeakMap(), Ed = /* @__PURE__ */ new WeakMap(), Z3 = (i) => {
  const l = $d.get(i.target);
  l && l(i);
}, K3 = (i) => {
  i.forEach(Z3);
};
function P3({ root: i, ...l }) {
  const s = i || document;
  Ed.has(s) || Ed.set(s, {});
  const o = Ed.get(s), c = JSON.stringify(l);
  return o[c] || (o[c] = new IntersectionObserver(K3, { root: i, ...l })), o[c];
}
function F3(i, l, s) {
  const o = P3(l);
  return $d.set(i, s), o.observe(i), () => {
    $d.delete(i), o.unobserve(i);
  };
}
const J3 = {
  some: 0,
  all: 1
};
class I3 extends Gi {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: l = {} } = this.node.getProps(), { root: s, margin: o, amount: c = "some", once: d } = l, f = {
      root: s ? s.current : void 0,
      rootMargin: o,
      threshold: typeof c == "number" ? c : J3[c]
    }, m = (p) => {
      const { isIntersecting: g } = p;
      if (this.isInView === g || (this.isInView = g, d && !g && this.hasEnteredView))
        return;
      g && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", g);
      const { onViewportEnter: v, onViewportLeave: y } = this.node.getProps(), S = g ? v : y;
      S && S(p);
    };
    this.stopObserver = F3(this.node.current, f, m);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: l, prevProps: s } = this.node;
    ["amount", "margin", "root"].some(W3(l, s)) && this.startObserver();
  }
  unmount() {
    this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1;
  }
}
function W3({ viewport: i = {} }, { viewport: l = {} } = {}) {
  return (s) => i[s] !== l[s];
}
const $3 = {
  inView: {
    Feature: I3
  },
  tap: {
    Feature: Q3
  },
  focus: {
    Feature: X3
  },
  hover: {
    Feature: q3
  }
}, tD = {
  layout: {
    ProjectionNode: bS,
    MeasureLayout: NS
  }
}, eD = {
  ...A3,
  ...$3,
  ...Y3,
  ...tD
}, th = /* @__PURE__ */ b3(eD, S3);
function Xh() {
  !Gh.current && nS();
  const [i] = X.useState(au.current);
  return i;
}
const nD = {
  some: 0,
  all: 1
};
function iD(i, l, { root: s, margin: o, amount: c = "some" } = {}) {
  const d = jh(i), f = /* @__PURE__ */ new WeakMap(), m = (g) => {
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
    threshold: typeof c == "number" ? c : nD[c]
  });
  return d.forEach((g) => p.observe(g)), () => p.disconnect();
}
function Qh(i, { root: l, margin: s, amount: o, once: c = !1, initial: d = !1 } = {}) {
  const [f, m] = X.useState(d);
  return X.useEffect(() => {
    if (!i.current || c && f)
      return;
    const p = () => (m(!0), c ? void 0 : () => m(!1)), g = {
      root: l && l.current || void 0,
      margin: s,
      amount: o
    };
    return iD(i.current, p, g);
  }, [l, i, s, c, o]), f;
}
function aD({
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
  const p = X.useRef(null), g = Qh(p, { amount: 0.15 }), v = Xh(), [y, S] = X.useState(0), [C, T] = X.useState(!0), w = X.useId(), x = o.length ? y % o.length : 0;
  X.useEffect(() => {
    const z = () => T(!document.hidden);
    return z(), document.addEventListener("visibilitychange", z), () => document.removeEventListener("visibilitychange", z);
  }, []), X.useEffect(() => {
    if (c <= 0 || o.length <= 1 || v || !g || !C) return;
    const z = window.setInterval(() => S((H) => (H + 1) % o.length), Math.max(3e3, c));
    return () => clearInterval(z);
  }, [c, o.length, v, g, C]);
  const D = (z) => {
    S((z + o.length) % o.length);
  };
  return /* @__PURE__ */ O.jsxs("section", { ref: p, id: "testimonials", "aria-labelledby": w, className: Aa("vt-testimonials", m), children: [
    /* @__PURE__ */ O.jsxs("div", { className: "vt-section-inner vt:grid vt:grid-cols-1 vt:gap-12 vt:md:grid-cols-2 vt:md:gap-16", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "vt-testimonial-intro", children: [
        s && /* @__PURE__ */ O.jsx("p", { className: "vt-review-badge", children: s }),
        /* @__PURE__ */ O.jsx("h2", { id: w, children: i }),
        /* @__PURE__ */ O.jsx("p", { children: l }),
        /* @__PURE__ */ O.jsxs("button", { type: "button", className: "vt-primary-button vt-add-feedback", "aria-haspopup": "dialog", "aria-controls": "feedback-dialog", onClick: () => window.dispatchEvent(new Event("vettiver:add-feedback")), children: [
          "Add feedback ",
          /* @__PURE__ */ O.jsx(_s, { size: 18, "aria-hidden": "true" })
        ] }),
        o.length > 1 && /* @__PURE__ */ O.jsxs("div", { className: "vt-review-controls", "aria-label": "Customer story controls", children: [
          /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => D(x - 1), "aria-label": "Previous review", children: /* @__PURE__ */ O.jsx(Hb, { size: 19 }) }),
          /* @__PURE__ */ O.jsxs("span", { children: [
            String(x + 1).padStart(2, "0"),
            " / ",
            String(o.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => D(x + 1), "aria-label": "Next review", children: /* @__PURE__ */ O.jsx(_s, { size: 19 }) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsxs("div", { className: "vt-review-stage", "aria-roledescription": o.length ? "carousel" : void 0, "aria-label": "Customer feedback", children: [
        o.length ? /* @__PURE__ */ O.jsx("div", { className: "vt-review-stack", "aria-live": v ? "polite" : "off", children: o.map((z, H) => /* @__PURE__ */ O.jsxs(
          th.article,
          {
            className: "vt-review-card",
            "aria-hidden": H !== x,
            "aria-label": "Review " + (H + 1) + " of " + o.length,
            initial: !1,
            animate: { opacity: H === x ? 1 : 0, x: v || H === x ? 0 : 32, scale: v || H === x ? 1 : 0.98 },
            transition: { duration: v ? 0 : 0.45, ease: "easeInOut" },
            style: { gridArea: "1 / 1", pointerEvents: H === x ? "auto" : "none" },
            children: [
              /* @__PURE__ */ O.jsx("div", { className: "vt-review-stars", "aria-label": Math.max(1, Math.min(5, Math.round(z.rating || 1))) + " out of 5 stars", children: Array.from({ length: Math.max(1, Math.min(5, Math.round(z.rating || 1))) }, (L, $) => /* @__PURE__ */ O.jsx(Qb, { size: 18, fill: "currentColor", "aria-hidden": "true" }, $)) }),
              /* @__PURE__ */ O.jsx(n2, { size: 38, strokeWidth: 1.2, className: "vt-quote-mark", "aria-hidden": "true" }),
              /* @__PURE__ */ O.jsx("blockquote", { children: z.content }),
              /* @__PURE__ */ O.jsx(Bb, { className: "vt:my-6" }),
              /* @__PURE__ */ O.jsx("p", { className: "vt-review-name", children: z.name })
            ]
          },
          z.id
        )) }) : /* @__PURE__ */ O.jsxs("div", { className: "vt-review-empty", children: [
          /* @__PURE__ */ O.jsx(e2, { size: 38, strokeWidth: 1.2, "aria-hidden": "true" }),
          /* @__PURE__ */ O.jsx("h3", { children: "Your story belongs here." }),
          /* @__PURE__ */ O.jsx("p", { children: "Our customer stories are just beginning. Once feedback has been reviewed and approved, you can read it here." }),
          /* @__PURE__ */ O.jsx("span", { children: "No published reviews yet." })
        ] }),
        o.length > 1 && /* @__PURE__ */ O.jsx("div", { className: "vt-review-dots", children: o.map((z, H) => /* @__PURE__ */ O.jsx("button", { type: "button", onClick: () => D(H), "aria-label": "Read review by " + z.name, "aria-pressed": H === x, children: /* @__PURE__ */ O.jsx("span", {}) }, z.id)) })
      ] })
    ] }),
    d.length > 0 && /* @__PURE__ */ O.jsxs("div", { className: "vt-section-inner vt-review-companies", children: [
      /* @__PURE__ */ O.jsx("h3", { children: f }),
      /* @__PURE__ */ O.jsx("div", { children: d.map((z) => /* @__PURE__ */ O.jsx("span", { children: z }, z)) })
    ] })
  ] });
}
const Ad = "vettiver-feedback-draft-v1";
function J0({ endpoint: i = "" }) {
  const l = X.useRef(null);
  X.useEffect(() => {
    const L = l.current;
    if (!L) return;
    const $ = () => {
      L.open || L.showModal();
    };
    return window.addEventListener("vettiver:add-feedback", $), () => {
      window.removeEventListener("vettiver:add-feedback", $), L.close();
    };
  }, []);
  const [s, o] = X.useState(""), [c, d] = X.useState(""), [f, m] = X.useState(0), [p, g] = X.useState(!1), [v, y] = X.useState(""), [S, C] = X.useState(!1), [T, w] = X.useState(!1), [x, D] = X.useState(!1);
  async function z(L) {
    if (L.preventDefault(), C(!1), !s.trim() || !c.trim() || !f) {
      C(!0), y("Please add your name, feedback and a star rating.");
      return;
    }
    if (x || p) return;
    const $ = { name: s.trim(), content: c.trim(), rating: f };
    if (!i) {
      try {
        localStorage.setItem(Ad, JSON.stringify($)), y("Draft saved only on this device. It has not been sent or published.");
      } catch {
        C(!0), y("Your browser could not save the draft. Please copy your feedback to keep it.");
      }
      return;
    }
    g(!0);
    try {
      const ot = await fetch(i, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...$, consentToPublish: T }), credentials: "same-origin" });
      if (!ot.ok) throw new Error("Request failed");
      const j = await ot.json();
      if (!j.id || j.status !== "pending") throw new Error("Invalid acknowledgement");
      D(!0), y("Thank you. Your feedback was received and is waiting for approval. It is not public yet.");
    } catch {
      C(!0), y("We could not submit your feedback. Nothing has been published. Please try again.");
    } finally {
      g(!1);
    }
  }
  function H() {
    try {
      const L = JSON.parse(localStorage.getItem(Ad) || "null");
      if (!L || typeof L.name != "string" || typeof L.content != "string" || !Number.isInteger(L.rating) || L.rating < 1 || L.rating > 5) {
        y("No saved draft on this device.");
        return;
      }
      o(L.name.slice(0, 80)), d(L.content.slice(0, 1200)), m(L.rating), y("Your draft is restored. It has not been sent.");
    } catch {
      y("No readable draft on this device.");
    }
  }
  return /* @__PURE__ */ O.jsxs("dialog", { ref: l, id: "feedback-dialog", className: "vt-feedback-dialog", "aria-labelledby": "feedback-dialog-title", "aria-describedby": "feedback-dialog-description", onKeyDown: (L) => {
    if (L.key !== "Tab") return;
    const $ = Array.from(L.currentTarget.querySelectorAll("button:not(:disabled), input:not(:disabled), textarea:not(:disabled)")), ot = $[0], j = $[$.length - 1];
    L.shiftKey && document.activeElement === ot ? (L.preventDefault(), j?.focus()) : !L.shiftKey && document.activeElement === j && (L.preventDefault(), ot?.focus());
  }, onClick: (L) => {
    if (L.target !== L.currentTarget) return;
    const $ = L.currentTarget.getBoundingClientRect();
    (L.clientX < $.left || L.clientX > $.right || L.clientY < $.top || L.clientY > $.bottom) && L.currentTarget.close();
  }, children: [
    /* @__PURE__ */ O.jsx("button", { type: "button", className: "vt-feedback-close", "aria-label": "Close feedback", onClick: () => l.current?.close(), children: /* @__PURE__ */ O.jsx(i2, { size: 22, "aria-hidden": "true" }) }),
    /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-heading", children: [
      /* @__PURE__ */ O.jsx("h2", { id: "feedback-dialog-title", children: "A few words mean a lot." }),
      /* @__PURE__ */ O.jsx("p", { id: "feedback-dialog-description", children: "Tell us about your Vettiver experience." })
    ] }),
    /* @__PURE__ */ O.jsxs("form", { id: "feedback-form", className: "vt-feedback-form", onSubmit: z, "aria-label": "Share customer feedback", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-fields", children: [
        /* @__PURE__ */ O.jsxs("div", { children: [
          /* @__PURE__ */ O.jsx("label", { htmlFor: "feedback-name", children: "Your name" }),
          /* @__PURE__ */ O.jsx("input", { id: "feedback-name", name: "name", autoComplete: "name", maxLength: 80, required: !0, value: s, onChange: (L) => o(L.target.value), disabled: p || x })
        ] }),
        /* @__PURE__ */ O.jsxs("fieldset", { children: [
          /* @__PURE__ */ O.jsx("legend", { children: "Your rating" }),
          /* @__PURE__ */ O.jsx("div", { className: "vt-rating-input", children: [1, 2, 3, 4, 5].map((L) => /* @__PURE__ */ O.jsxs("label", { className: L <= f ? "is-selected" : "", children: [
            /* @__PURE__ */ O.jsx("input", { type: "radio", name: "rating", value: L, required: !0, checked: f === L, onChange: () => m(L), disabled: p || x }),
            /* @__PURE__ */ O.jsx(Qb, { size: 25, fill: L <= f ? "currentColor" : "none", "aria-hidden": "true" }),
            /* @__PURE__ */ O.jsxs("span", { className: "vt:sr-only", children: [
              L,
              " ",
              L === 1 ? "star" : "stars"
            ] })
          ] }, L)) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx("label", { htmlFor: "feedback-content", children: "Your feedback" }),
      /* @__PURE__ */ O.jsx("textarea", { id: "feedback-content", name: "content", rows: 3, maxLength: 1200, required: !0, value: c, onChange: (L) => d(L.target.value), disabled: p || x, placeholder: "What did you choose, and how was your experience?" }),
      i ? /* @__PURE__ */ O.jsxs("label", { className: "vt-feedback-consent", children: [
        /* @__PURE__ */ O.jsx("input", { type: "checkbox", required: !0, checked: T, onChange: (L) => w(L.target.checked), disabled: p || x }),
        " I agree that my name, rating and feedback may be published after review."
      ] }) : /* @__PURE__ */ O.jsx("p", { className: "vt-feedback-note", children: "Review submissions will open when our approval system is ready. For now, save a draft on this device. Nothing is sent to us." }),
      /* @__PURE__ */ O.jsxs("div", { className: "vt-feedback-actions", children: [
        /* @__PURE__ */ O.jsxs("button", { className: "vt-primary-button", type: "submit", disabled: p || x, children: [
          p ? "Sending…" : x ? "Waiting for approval" : i ? "Send for approval" : "Save feedback draft",
          /* @__PURE__ */ O.jsx(ch, { size: 18, "aria-hidden": "true" })
        ] }),
        !i && /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
          /* @__PURE__ */ O.jsx("button", { className: "vt-text-link", type: "button", onClick: H, children: "Restore draft" }),
          /* @__PURE__ */ O.jsx("button", { className: "vt-text-link", type: "button", onClick: () => {
            try {
              localStorage.removeItem(Ad), y("Saved draft removed from this device.");
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
const Ks = (i, l, s) => i < l ? l : i > s ? s : i, I0 = (i, l = "174, 204, 135") => {
  const s = /^#?([\da-f]{3}|[\da-f]{6})$/i.exec((i || "").trim());
  if (!s) return l;
  const o = s[1].length === 3 ? s[1].replace(/./g, (d) => d + d) : s[1], c = parseInt(o, 16);
  return (c >> 16 & 255) + ", " + (c >> 8 & 255) + ", " + (c & 255);
}, lD = (i, l, s) => {
  if (!(i > 0) || !(l > 0)) return 0;
  const o = 100 * l / i;
  return s > 0 ? Math.min(o, s) : o;
}, sD = (i, l = 30, s = 82) => l + (s - l) * Ks(Number.isFinite(i) ? i : 0.5, 0, 1), W0 = (i, l = 58, s = 9) => l + s * (0.7 * Math.sin(i * 0.21) + 0.3 * Math.sin(i * 0.077 + 1.3)), Br = (i, l, s, o) => l + (i - l) * Math.pow(1 - Ks(s, 0, 1), Ks(o, 0, 0.1) * 60), oD = (i, l) => !(i > 0) || !(l >= 0) ? 0.8 : Ks(((100 - i - l) / 2 + i) / 100, 0.5, 1.2), rD = (i, l, s) => Math.max(0, i * (l + Ks(Number.isFinite(s) ? s : 0, -0.4, 0.4))), $0 = {
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
}, uD = [
  { title: "Explore", links: [{ label: "Our collection", href: "#products" }, { label: "Our roots", href: "#about" }, { label: "Customer stories", href: "#reviews" }] },
  { title: "Let's talk", links: [{ label: "Make an enquiry", href: "#contact" }, { label: "Share feedback", href: "#feedback-form" }, { label: "Good to know", href: "#questions-title" }, { label: "Back to the top", href: "#home" }] }
];
function cD({
  brand: i = "Vettiver",
  wordmark: l,
  company: s = "Akash Vetiver Export",
  year: o = (/* @__PURE__ */ new Date()).getFullYear(),
  socials: c = [],
  credits: d = [{ label: "Natural roots. Thoughtful hands." }, { lead: "Handcrafted in ", label: "Tamil Nadu, India" }],
  columns: f = uD,
  onLinkClick: m,
  cut: p = 0.1,
  background: g = "#08170f",
  ink: v = "#f4f8ef",
  muted: y = "#bacbb5",
  accent: S = "#b1cd8b",
  wordTop: C = "#668b54",
  wordFoot: T = "#152d1c",
  fontSans: w = "Outfit, sans-serif",
  wordWeight: x = 600,
  animate: D = !0,
  className: z = ""
}) {
  const H = (l ?? i).trim() || i, L = X.useMemo(() => Array.from(H), [H]), $ = X.useRef(null), ot = X.useRef(null), [j, N] = X.useState(0), [ut, ct] = X.useState(0.8), [P, K] = X.useState(!1), [lt, I] = X.useState(!1), [W, q] = X.useState(!1), [F, tt] = X.useState(!0), at = X.useRef({ u: 0.5, x: 0, y: 0, inside: !1 });
  X.useLayoutEffect(() => {
    const et = $.current, E = ot.current;
    if (!et || !E) return;
    let G = 0, nt = !0;
    const it = () => {
      const Tt = E.parentElement, st = getComputedStyle(Tt), J = Tt.clientWidth - parseFloat(st.paddingLeft) - parseFloat(st.paddingRight);
      E.style.fontSize = "100px";
      const Et = lD(E.getBoundingClientRect().width, J, J * 0.42);
      E.style.fontSize = Et + "px", N(Et);
      const Mt = document.createElement("canvas").getContext("2d");
      if (Mt) {
        Mt.font = x + " 100px " + w;
        const Xt = Mt.measureText(H);
        ct(oD(Xt.fontBoundingBoxAscent, Xt.fontBoundingBoxDescent));
      }
      const It = et.getBoundingClientRect();
      et.style.setProperty("--bwf-rw", It.width + "px"), et.style.setProperty("--bwf-rh", It.height + "px"), E.querySelectorAll(".bwf-l").forEach((Xt) => {
        let Ut = 0, zt = 0, Pt = Xt;
        for (; Pt && Pt !== et; )
          Ut += Pt.offsetLeft, zt += Pt.offsetTop, Pt = Pt.offsetParent;
        Xt.style.setProperty("--bwf-x", Ut + "px"), Xt.style.setProperty("--bwf-y", zt + "px");
      });
    }, vt = () => {
      cancelAnimationFrame(G), G = requestAnimationFrame(it);
    };
    it();
    const ft = new ResizeObserver(vt);
    return ft.observe(et), document.fonts.ready.then(() => {
      nt && vt();
    }), () => {
      nt = !1, cancelAnimationFrame(G), ft.disconnect();
    };
  }, [H, w, x]), X.useEffect(() => {
    const et = matchMedia("(prefers-reduced-motion: reduce)"), E = () => q(et.matches), G = () => tt(!document.hidden);
    E(), G(), et.addEventListener("change", E), document.addEventListener("visibilitychange", G);
    const nt = new IntersectionObserver(([it]) => {
      I(it.isIntersecting), it.isIntersecting && K(!0);
    }, { threshold: 0.1 });
    return $.current && nt.observe($.current), () => {
      nt.disconnect(), et.removeEventListener("change", E), document.removeEventListener("visibilitychange", G);
    };
  }, []), X.useEffect(() => {
    const et = $.current;
    if (!et) return;
    if (W || !D || !lt || !F) {
      et.style.setProperty("--bwf-g", "0");
      return;
    }
    let E = 0, G = performance.now(), nt = G / 1e3, it = 58, vt = 0, ft = 0, Tt = 0;
    const st = (J) => {
      const Et = Math.min(0.1, (J - G) / 1e3);
      G = J, nt += Et;
      const Mt = at.current;
      it = Br(it, Mt.inside ? sD(Mt.u) * 0.75 + W0(nt) * 0.25 : W0(nt), 0.035, Et), vt = Br(vt, Mt.x, 0.16, Et), ft = Br(ft, Mt.y, 0.16, Et), Tt = Br(Tt, Mt.inside ? 1 : 0, 0.06, Et), et.style.setProperty("--bwf-b", it.toFixed(2) + "%"), et.style.setProperty("--bwf-px", vt.toFixed(1) + "px"), et.style.setProperty("--bwf-py", ft.toFixed(1) + "px"), et.style.setProperty("--bwf-g", Tt.toFixed(3)), E = requestAnimationFrame(st);
    };
    return E = requestAnimationFrame(st), () => cancelAnimationFrame(E);
  }, [W, D, lt, F]);
  const Y = (et) => {
    if (et.pointerType === "touch" || W) return;
    const E = et.currentTarget.getBoundingClientRect();
    at.current = { x: et.clientX - E.left, y: et.clientY - E.top, u: (et.clientX - E.left) / E.width, inside: et.type !== "pointerleave" };
  }, yt = (et, E, G) => {
    G === "#feedback-form" && (et.preventDefault(), et.stopPropagation(), window.dispatchEvent(new Event("vettiver:add-feedback"))), (!G || G === "#") && et.preventDefault(), m?.(E, G);
  }, bt = {
    "--bwf-bg": g,
    "--bwf-bg-rgb": I0(g),
    "--bwf-ink": v,
    "--bwf-muted": y,
    "--bwf-acc": I0(S),
    "--bwf-wt": C,
    "--bwf-wf": T,
    "--bwf-sans": w,
    "--bwf-ww": x,
    "--bwf-b": "58%",
    "--bwf-px": "50%",
    "--bwf-py": "50%",
    "--bwf-g": "0"
  };
  return /* @__PURE__ */ O.jsxs("footer", { ref: $, className: "bwf " + z, style: bt, "data-in": P || W ? "true" : "false", "data-motion": W || !D ? "paused" : lt && F ? "running" : "idle", onPointerMove: Y, onPointerEnter: Y, onPointerLeave: Y, children: [
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
        c.length > 0 && /* @__PURE__ */ O.jsx("ul", { className: "bwf-socials", children: c.map((et, E) => /* @__PURE__ */ O.jsx("li", { children: /* @__PURE__ */ O.jsx("a", { href: et.href || "#", className: "bwf-soc", "aria-label": et.label, onClick: (G) => yt(G, et.label, et.href), ...et.href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}, children: typeof et.icon == "string" && et.icon in $0 ? $0[et.icon] : et.icon }) }, et.label + E)) }),
        /* @__PURE__ */ O.jsx("div", { className: "bwf-credits", children: d.map((et, E) => /* @__PURE__ */ O.jsxs("p", { children: [
          et.lead,
          et.href ? /* @__PURE__ */ O.jsx("a", { href: et.href, onClick: (G) => yt(G, et.label, et.href), children: et.label }) : /* @__PURE__ */ O.jsx("b", { children: et.label }),
          et.tail
        ] }, E)) })
      ] }),
      f.map((et, E) => /* @__PURE__ */ O.jsxs("nav", { className: "bwf-col", "aria-label": et.title, children: [
        /* @__PURE__ */ O.jsx("p", { className: "bwf-label", children: et.title }),
        /* @__PURE__ */ O.jsx("ul", { className: "bwf-links", children: et.links.map((G, nt) => /* @__PURE__ */ O.jsx("li", { children: /* @__PURE__ */ O.jsxs("a", { className: "bwf-link", href: G.href || "#", onClick: (it) => yt(it, G.label, G.href), children: [
          /* @__PURE__ */ O.jsx("span", { children: G.label }),
          /* @__PURE__ */ O.jsx(ch, { size: 16, "aria-hidden": "true" })
        ] }) }, G.label + nt)) })
      ] }, et.title + E))
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "bwf-word", style: { height: j ? rD(j, ut, p) : "26vw" }, children: [
      /* @__PURE__ */ O.jsx("p", { className: "vt:sr-only", children: H }),
      /* @__PURE__ */ O.jsx("div", { className: "bwf-word-box", children: /* @__PURE__ */ O.jsx("div", { ref: ot, className: "bwf-word-in", "aria-hidden": "true", children: L.map((et, E) => /* @__PURE__ */ O.jsx("span", { className: "bwf-lw", style: { "--bwf-d": 180 + E * 65 + "ms" }, children: /* @__PURE__ */ O.jsx("span", { className: "bwf-l", onClick: (G) => {
        if (!W) {
          const nt = G.currentTarget;
          nt.classList.remove("is-hop"), nt.offsetWidth, nt.classList.add("is-hop");
        }
      }, onAnimationEnd: (G) => G.currentTarget.classList.remove("is-hop"), children: et === " " ? " " : et }) }, E)) }) }),
      /* @__PURE__ */ O.jsx("div", { className: "bwf-foot", "aria-hidden": "true" })
    ] })
  ] });
}
const fD = [];
function dD(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function tb(i) {
  return dD(i) || Array.isArray(i);
}
function hD() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Zh(i, l) {
  const s = Object.keys(i), o = Object.keys(l);
  if (s.length !== o.length) return !1;
  const c = JSON.stringify(Object.keys(i.breakpoints || {})), d = JSON.stringify(Object.keys(l.breakpoints || {}));
  return c !== d ? !1 : s.every((f) => {
    const m = i[f], p = l[f];
    return typeof m == "function" ? `${m}` == `${p}` : !tb(m) || !tb(p) ? m === p : Zh(m, p);
  });
}
function eb(i) {
  return i.concat().sort((l, s) => l.name > s.name ? 1 : -1).map((l) => l.options);
}
function mD(i, l) {
  if (i.length !== l.length) return !1;
  const s = eb(i), o = eb(l);
  return s.every((c, d) => {
    const f = o[d];
    return Zh(c, f);
  });
}
function Kh(i) {
  return typeof i == "number";
}
function eh(i) {
  return typeof i == "string";
}
function mu(i) {
  return typeof i == "boolean";
}
function nb(i) {
  return Object.prototype.toString.call(i) === "[object Object]";
}
function te(i) {
  return Math.abs(i);
}
function Ph(i) {
  return Math.sign(i);
}
function Bs(i, l) {
  return te(i - l);
}
function pD(i, l) {
  if (i === 0 || l === 0 || te(i) <= te(l)) return 0;
  const s = Bs(te(i), te(l));
  return te(s / i);
}
function gD(i) {
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
function Fh(i, l) {
  return l === to(i);
}
function ib(i, l = 0) {
  return Array.from(Array(i), (s, o) => l + o);
}
function Fs(i) {
  return Object.keys(i);
}
function RS(i, l) {
  return [i, l].reduce((s, o) => (Fs(o).forEach((c) => {
    const d = s[c], f = o[c], m = nb(d) && nb(f);
    s[c] = m ? RS(d, f) : f;
  }), s), {});
}
function nh(i, l) {
  return typeof l.MouseEvent < "u" && i instanceof l.MouseEvent;
}
function yD(i, l) {
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
    return eh(i) ? s[i](p) : i(l, p, g);
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
function vD(i, l, s, o) {
  const c = Js(), d = 1e3 / 60;
  let f = null, m = 0, p = 0;
  function g() {
    c.add(i, "visibilitychange", () => {
      i.hidden && T();
    });
  }
  function v() {
    C(), c.clear();
  }
  function y(x) {
    if (!p) return;
    f || (f = x, s(), s());
    const D = x - f;
    for (f = x, m += D; m >= d; )
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
function bD(i, l) {
  const s = l === "rtl", o = i === "y", c = o ? "y" : "x", d = o ? "x" : "y", f = !o && s ? -1 : 1, m = v(), p = y();
  function g(T) {
    const {
      height: w,
      width: x
    } = T;
    return o ? w : x;
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
function VS(i, l, s) {
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
    return VS(i, m(), s);
  }
  const y = {
    get: m,
    set: p,
    add: g,
    clone: v
  };
  return y;
}
function SD(i, l, s, o, c, d, f, m, p, g, v, y, S, C, T, w, x, D, z) {
  const {
    cross: H,
    direction: L
  } = i, $ = ["INPUT", "SELECT", "TEXTAREA"], ot = {
    passive: !1
  }, j = Js(), N = Js(), ut = xa(50, 225).constrain(C.measure(20)), ct = {
    mouse: 300,
    touch: 400
  }, P = {
    mouse: 500,
    touch: 600
  }, K = T ? 43 : 25;
  let lt = !1, I = 0, W = 0, q = !1, F = !1, tt = !1, at = !1;
  function Y(J) {
    if (!z) return;
    function Et(It) {
      (mu(z) || z(J, It)) && nt(It);
    }
    const Mt = l;
    j.add(Mt, "dragstart", (It) => It.preventDefault(), ot).add(Mt, "touchmove", () => {
    }, ot).add(Mt, "touchend", () => {
    }).add(Mt, "touchstart", Et).add(Mt, "mousedown", Et).add(Mt, "touchcancel", vt).add(Mt, "contextmenu", vt).add(Mt, "click", ft, !0);
  }
  function yt() {
    j.clear(), N.clear();
  }
  function bt() {
    const J = at ? s : l;
    N.add(J, "touchmove", it, ot).add(J, "touchend", vt).add(J, "mousemove", it, ot).add(J, "mouseup", vt);
  }
  function et(J) {
    const Et = J.nodeName || "";
    return $.includes(Et);
  }
  function E() {
    return (T ? P : ct)[at ? "mouse" : "touch"];
  }
  function G(J, Et) {
    const Mt = y.add(Ph(J) * -1), It = v.byDistance(J, !T).distance;
    return T || te(J) < ut ? It : x && Et ? It * 0.5 : v.byIndex(Mt.get(), 0).distance;
  }
  function nt(J) {
    const Et = nh(J, o);
    at = Et, tt = T && Et && !J.buttons && lt, lt = Bs(c.get(), f.get()) >= 2, !(Et && J.button !== 0) && (et(J.target) || (q = !0, d.pointerDown(J), g.useFriction(0).useDuration(0), c.set(f), bt(), I = d.readPoint(J), W = d.readPoint(J, H), S.emit("pointerDown")));
  }
  function it(J) {
    if (!nh(J, o) && J.touches.length >= 2) return vt(J);
    const Mt = d.readPoint(J), It = d.readPoint(J, H), Xt = Bs(Mt, I), Ut = Bs(It, W);
    if (!F && !at && (!J.cancelable || (F = Xt > Ut, !F)))
      return vt(J);
    const zt = d.pointerMove(J);
    Xt > w && (tt = !0), g.useFriction(0.3).useDuration(0.75), m.start(), c.add(L(zt)), J.preventDefault();
  }
  function vt(J) {
    const Mt = v.byDistance(0, !1).index !== y.get(), It = d.pointerUp(J) * E(), Xt = G(L(It), Mt), Ut = pD(It, Xt), zt = K - 10 * Ut, Pt = D + Ut / 50;
    F = !1, q = !1, N.clear(), g.useDuration(zt).useFriction(Pt), p.distance(Xt, !T), at = !1, S.emit("pointerUp");
  }
  function ft(J) {
    tt && (J.stopPropagation(), J.preventDefault(), tt = !1);
  }
  function Tt() {
    return q;
  }
  return {
    init: Y,
    destroy: yt,
    pointerDown: Tt
  };
}
function TD(i, l) {
  let o, c;
  function d(y) {
    return y.timeStamp;
  }
  function f(y, S) {
    const T = `client${(S || i.scroll) === "x" ? "X" : "Y"}`;
    return (nh(y, l) ? y : y.touches[0])[T];
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
    const S = f(c) - f(o), C = d(y) - d(o), T = d(y) - d(c) > 170, w = S / C;
    return C && !T && te(w) > 0.1 ? w : 0;
  }
  return {
    pointerDown: m,
    pointerMove: p,
    pointerUp: g,
    readPoint: f
  };
}
function xD() {
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
function ED(i) {
  function l(o) {
    return i * (o / 100);
  }
  return {
    measure: l
  };
}
function AD(i, l, s, o, c, d, f) {
  const m = [i].concat(o);
  let p, g, v = [], y = !1;
  function S(x) {
    return c.measureSize(f.measure(x));
  }
  function C(x) {
    if (!d) return;
    g = S(i), v = o.map(S);
    function D(z) {
      for (const H of z) {
        if (y) return;
        const L = H.target === i, $ = o.indexOf(H.target), ot = L ? g : v[$], j = S(L ? i : o[$]);
        if (te(j - ot) >= 0.5) {
          x.reInit(), l.emit("resize");
          break;
        }
      }
    }
    p = new ResizeObserver((z) => {
      (mu(d) || d(x, z)) && D(z);
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
function wD(i, l, s, o, c, d) {
  let f = 0, m = 0, p = c, g = d, v = i.get(), y = 0;
  function S() {
    const ot = o.get() - i.get(), j = !p;
    let N = 0;
    return j ? (f = 0, s.set(o), i.set(o), N = ot) : (s.set(i), f += ot / p, f *= g, v += f, i.add(f), N = v - y), m = Ph(N), y = v, $;
  }
  function C() {
    const ot = o.get() - l.get();
    return te(ot) < 1e-3;
  }
  function T() {
    return p;
  }
  function w() {
    return m;
  }
  function x() {
    return f;
  }
  function D() {
    return H(c);
  }
  function z() {
    return L(d);
  }
  function H(ot) {
    return p = ot, $;
  }
  function L(ot) {
    return g = ot, $;
  }
  const $ = {
    direction: w,
    duration: T,
    velocity: x,
    seek: S,
    settled: C,
    useBaseFriction: z,
    useBaseDuration: D,
    useFriction: L,
    useDuration: H
  };
  return $;
}
function CD(i, l, s, o, c) {
  const d = c.measure(10), f = c.measure(50), m = xa(0.1, 0.99);
  let p = !1;
  function g() {
    return !(p || !i.reachedAny(s.get()) || !i.reachedAny(l.get()));
  }
  function v(C) {
    if (!g()) return;
    const T = i.reachedMin(l.get()) ? "min" : "max", w = te(i[T] - l.get()), x = s.get() - l.get(), D = m.constrain(w / f);
    s.subtract(x * D), !C && te(x) < d && (s.set(i.constrain(s.get())), o.useDuration(25).useBaseFriction());
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
function MD(i, l, s, o, c) {
  const d = xa(-l + i, 0), f = y(), m = v(), p = S();
  function g(T, w) {
    return Bs(T, w) <= 1;
  }
  function v() {
    const T = f[0], w = An(f), x = f.lastIndexOf(T), D = f.indexOf(w) + 1;
    return xa(x, D);
  }
  function y() {
    return s.map((T, w) => {
      const {
        min: x,
        max: D
      } = d, z = d.constrain(T), H = !w, L = Fh(s, w);
      return H ? D : L || g(x, z) ? x : g(D, z) ? D : z;
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
function DD(i, l, s) {
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
function zD(i) {
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
function ND(i, l, s, o, c) {
  const {
    startEdge: d,
    endEdge: f
  } = i, {
    groupSlides: m
  } = c, p = y().map(l.measure), g = S(), v = C();
  function y() {
    return m(o).map((w) => An(w)[f] - w[0][d]).map(te);
  }
  function S() {
    return o.map((w) => s[d] - w[d]).map((w) => -te(w));
  }
  function C() {
    return m(g).map((w) => w[0]).map((w, x) => w + p[x]);
  }
  return {
    snaps: g,
    snapsAligned: v
  };
}
function RD(i, l, s, o, c, d) {
  const {
    groupSlides: f
  } = c, {
    min: m,
    max: p
  } = o, g = v();
  function v() {
    const S = f(d), C = !i || l === "keepSnaps";
    return s.length === 1 ? [d] : C ? S : S.slice(m, p).map((T, w, x) => {
      const D = !w, z = Fh(x, w);
      if (D) {
        const H = An(x[0]) + 1;
        return ib(H);
      }
      if (z) {
        const H = to(d) - An(x)[0] + 1;
        return ib(H, An(x)[0]);
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
    return T.concat().sort((w, x) => te(w) - te(x))[0];
  }
  function g(T) {
    const w = i ? f(T) : m(T), x = l.map((z, H) => ({
      diff: v(z - w, 0),
      index: H
    })).sort((z, H) => te(z.diff) - te(H.diff)), {
      index: D
    } = x[0];
    return {
      index: D,
      distance: w
    };
  }
  function v(T, w) {
    const x = [T, T + s, T - s];
    if (!i) return T;
    if (!w) return p(x);
    const D = x.filter((z) => Ph(z) === w);
    return D.length ? p(D) : An(x) - s;
  }
  function y(T, w) {
    const x = l[T] - c.get(), D = v(x, w);
    return {
      index: T,
      distance: D
    };
  }
  function S(T, w) {
    const x = c.get() + T, {
      index: D,
      distance: z
    } = g(x), H = !i && d(x);
    if (!w || H) return {
      index: D,
      distance: T
    };
    const L = l[D] - z, $ = T + v(L, 0);
    return {
      index: D,
      distance: $
    };
  }
  return {
    byDistance: S,
    byIndex: y,
    shortcut: v
  };
}
function _D(i, l, s, o, c, d, f) {
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
function jD(i, l, s, o, c, d, f, m) {
  const p = {
    passive: !0,
    capture: !0
  };
  let g = 0;
  function v(C) {
    if (!m) return;
    function T(w) {
      if ((/* @__PURE__ */ new Date()).getTime() - g > 10) return;
      f.emit("slideFocusStart"), i.scrollLeft = 0;
      const z = s.findIndex((H) => H.includes(w));
      Kh(z) && (c.useDuration(0), o.index(z, 0), f.emit("slideFocus"));
    }
    d.add(document, "keydown", y, !1), l.forEach((w, x) => {
      d.add(w, "focus", (D) => {
        (mu(m) || m(C, D)) && T(x);
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
function Vs(i) {
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
    return Kh(p) ? p : p.get();
  }
  return {
    get: s,
    set: o,
    add: c,
    subtract: d
  };
}
function _S(i, l) {
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
    const C = gD(i.direction(S));
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
function LD(i, l, s, o, c, d, f, m, p) {
  const v = Ps(c), y = Ps(c).reverse(), S = D().concat(z());
  function C(j, N) {
    return j.reduce((ut, ct) => ut - c[ct], N);
  }
  function T(j, N) {
    return j.reduce((ut, ct) => C(ut, N) > 0 ? ut.concat([ct]) : ut, []);
  }
  function w(j) {
    return d.map((N, ut) => ({
      start: N - o[ut] + 0.5 + j,
      end: N + l - 0.5 + j
    }));
  }
  function x(j, N, ut) {
    const ct = w(N);
    return j.map((P) => {
      const K = ut ? 0 : -s, lt = ut ? s : 0, I = ut ? "end" : "start", W = ct[P][I];
      return {
        index: P,
        loopPoint: W,
        slideLocation: Vs(-1),
        translate: _S(i, p[P]),
        target: () => m.get() > W ? K : lt
      };
    });
  }
  function D() {
    const j = f[0], N = T(y, j);
    return x(N, s, !1);
  }
  function z() {
    const j = l - f[0] - 1, N = T(v, j);
    return x(N, -s, !0);
  }
  function H() {
    return S.every(({
      index: j
    }) => {
      const N = v.filter((ut) => ut !== j);
      return C(N, l) <= 0.1;
    });
  }
  function L() {
    S.forEach((j) => {
      const {
        target: N,
        translate: ut,
        slideLocation: ct
      } = j, P = N();
      P !== ct.get() && (ut.to(P), ct.set(P));
    });
  }
  function $() {
    S.forEach((j) => j.translate.clear());
  }
  return {
    canLoop: H,
    clear: $,
    loop: L,
    loopPoints: S
  };
}
function BD(i, l, s) {
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
      c || (mu(s) || s(p, v)) && g(v);
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
function UD(i, l, s, o) {
  const c = {};
  let d = null, f = null, m, p = !1;
  function g() {
    m = new IntersectionObserver((T) => {
      p || (T.forEach((w) => {
        const x = l.indexOf(w.target);
        c[x] = w;
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
    return Fs(c).reduce((w, x) => {
      const D = parseInt(x), {
        isIntersecting: z
      } = c[D];
      return (T && z || !T && !z) && w.push(D), w;
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
function HD(i, l, s, o, c, d) {
  const {
    measureSize: f,
    startEdge: m,
    endEdge: p
  } = i, g = s[0] && c, v = T(), y = w(), S = s.map(f), C = x();
  function T() {
    if (!g) return 0;
    const z = s[0];
    return te(l[m] - z[m]);
  }
  function w() {
    if (!g) return 0;
    const z = d.getComputedStyle(An(o));
    return parseFloat(z.getPropertyValue(`margin-${p}`));
  }
  function x() {
    return s.map((z, H, L) => {
      const $ = !H, ot = Fh(L, H);
      return $ ? S[H] + v : ot ? S[H] + y : L[H + 1][m] - z[m];
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
  } = i, S = Kh(s);
  function C(D, z) {
    return Ps(D).filter((H) => H % z === 0).map((H) => D.slice(H, H + z));
  }
  function T(D) {
    return D.length ? Ps(D).reduce((z, H, L) => {
      const $ = An(z) || 0, ot = $ === 0, j = H === to(D), N = c[g] - d[$][g], ut = c[g] - d[H][v], ct = !o && ot ? y(f) : 0, P = !o && j ? y(m) : 0, K = te(ut - P - (N + ct));
      return L && K > l + p && z.push(H), j && z.push(D.length), z;
    }, []).map((z, H, L) => {
      const $ = Math.max(L[H - 1] || 0);
      return D.slice($, z);
    }) : [];
  }
  function w(D) {
    return S ? C(D, s) : T(D);
  }
  return {
    groupSlides: w
  };
}
function kD(i, l, s, o, c, d, f) {
  const {
    align: m,
    axis: p,
    direction: g,
    startIndex: v,
    loop: y,
    duration: S,
    dragFree: C,
    dragThreshold: T,
    inViewThreshold: w,
    slidesToScroll: x,
    skipSnaps: D,
    containScroll: z,
    watchResize: H,
    watchSlides: L,
    watchDrag: $,
    watchFocus: ot
  } = d, j = 2, N = xD(), ut = N.measure(l), ct = s.map(N.measure), P = bD(p, g), K = P.measureSize(ut), lt = ED(K), I = yD(m, K), W = !y && !!z, q = y || !!z, {
    slideSizes: F,
    slideSizesWithGaps: tt,
    startGap: at,
    endGap: Y
  } = HD(P, ut, ct, s, q, c), yt = GD(P, K, x, y, ut, ct, at, Y, j), {
    snaps: bt,
    snapsAligned: et
  } = ND(P, I, ut, ct, yt), E = -An(bt) + An(tt), {
    snapsContained: G,
    scrollContainLimit: nt
  } = MD(K, E, et, z, j), it = W ? G : et, {
    limit: vt
  } = DD(E, it, y), ft = VS(to(it), v, y), Tt = ft.clone(), st = Ps(s), J = ({
    dragHandler: wn,
    scrollBody: ki,
    scrollBounds: Ol,
    options: {
      loop: Yi
    }
  }) => {
    Yi || Ol.constrain(wn.pointerDown()), ki.seek();
  }, Et = ({
    scrollBody: wn,
    translate: ki,
    location: Ol,
    offsetLocation: Yi,
    previousLocation: zl,
    scrollLooper: Nl,
    slideLooper: Rl,
    dragHandler: pu,
    animation: gu,
    eventHandler: Me,
    scrollBounds: yu,
    options: {
      loop: Vl
    }
  }, _l) => {
    const qi = wn.settled(), vu = !yu.shouldConstrain(), jl = Vl ? qi : qi && vu, no = jl && !pu.pointerDown();
    no && gu.stop();
    const bu = Ol.get() * _l + zl.get() * (1 - _l);
    Yi.set(bu), Vl && (Nl.loop(wn.direction()), Rl.loop()), ki.to(Yi.get()), no && Me.emit("settle"), jl || Me.emit("scroll");
  }, Mt = vD(o, c, () => J(en), (wn) => Et(en, wn)), It = 0.68, Xt = it[ft.get()], Ut = Vs(Xt), zt = Vs(Xt), Pt = Vs(Xt), ke = Vs(Xt), _e = wD(Ut, Pt, zt, ke, S, It), si = VD(y, it, E, vt, ke), oi = _D(Mt, ft, Tt, _e, si, ke, f), kn = zD(vt), Ca = Js(), Ma = UD(l, s, f, w), {
    slideRegistry: Da
  } = RD(W, z, it, nt, yt, st), eo = jD(i, s, Da, oi, _e, Ca, f, ot), en = {
    ownerDocument: o,
    ownerWindow: c,
    eventHandler: f,
    containerRect: ut,
    slideRects: ct,
    animation: Mt,
    axis: P,
    dragHandler: SD(P, i, o, c, ke, TD(P, c), Ut, Mt, oi, _e, si, ft, f, lt, C, T, D, It, $),
    eventStore: Ca,
    percentOfView: lt,
    index: ft,
    indexPrevious: Tt,
    limit: vt,
    location: Ut,
    offsetLocation: Pt,
    previousLocation: zt,
    options: d,
    resizeHandler: AD(l, f, c, s, P, H, N),
    scrollBody: _e,
    scrollBounds: CD(vt, Pt, ke, _e, lt),
    scrollLooper: OD(E, vt, Pt, [Ut, Pt, zt, ke]),
    scrollProgress: kn,
    scrollSnapList: it.map(kn.get),
    scrollSnaps: it,
    scrollTarget: si,
    scrollTo: oi,
    slideLooper: LD(P, K, E, F, tt, bt, it, Pt, s),
    slideFocus: eo,
    slidesHandler: BD(l, f, L),
    slidesInView: Ma,
    slideIndexes: st,
    slideRegistry: Da,
    slidesToScroll: yt,
    target: ke,
    translate: _S(P, l)
  };
  return en;
}
function YD() {
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
const qD = {
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
function XD(i) {
  function l(d, f) {
    return RS(d, f || {});
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
function QD(i) {
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
  const o = i.ownerDocument, c = o.defaultView, d = XD(c), f = QD(d), m = Js(), p = YD(), {
    mergeOptions: g,
    optionsAtMedia: v,
    optionsMediaQueries: y
  } = d, {
    on: S,
    off: C,
    emit: T
  } = p, w = P;
  let x = !1, D, z = g(qD, ru.globalOptions), H = g(z), L = [], $, ot, j;
  function N() {
    const {
      container: st,
      slides: J
    } = H;
    ot = (eh(st) ? i.querySelector(st) : st) || i.children[0];
    const Mt = eh(J) ? ot.querySelectorAll(J) : J;
    j = [].slice.call(Mt || ot.children);
  }
  function ut(st) {
    const J = kD(i, ot, j, o, c, st, p);
    if (st.loop && !J.slideLooper.canLoop()) {
      const Et = Object.assign({}, st, {
        loop: !1
      });
      return ut(Et);
    }
    return J;
  }
  function ct(st, J) {
    x || (z = g(z, st), H = v(z), L = J || L, N(), D = ut(H), y([z, ...L.map(({
      options: Et
    }) => Et)]).forEach((Et) => m.add(Et, "change", P)), H.active && (D.translate.to(D.location.get()), D.animation.init(), D.slidesInView.init(), D.slideFocus.init(Tt), D.eventHandler.init(Tt), D.resizeHandler.init(Tt), D.slidesHandler.init(Tt), D.options.loop && D.slideLooper.loop(), ot.offsetParent && j.length && D.dragHandler.init(Tt), $ = f.init(Tt, L)));
  }
  function P(st, J) {
    const Et = yt();
    K(), ct(g({
      startIndex: Et
    }, st), J), p.emit("reInit");
  }
  function K() {
    D.dragHandler.destroy(), D.eventStore.clear(), D.translate.clear(), D.slideLooper.clear(), D.resizeHandler.destroy(), D.slidesHandler.destroy(), D.slidesInView.destroy(), D.animation.destroy(), f.destroy(), m.clear();
  }
  function lt() {
    x || (x = !0, m.clear(), K(), p.emit("destroy"), p.clear());
  }
  function I(st, J, Et) {
    !H.active || x || (D.scrollBody.useBaseFriction().useDuration(J === !0 ? 0 : H.duration), D.scrollTo.index(st, Et || 0));
  }
  function W(st) {
    const J = D.index.add(1).get();
    I(J, st, -1);
  }
  function q(st) {
    const J = D.index.add(-1).get();
    I(J, st, 1);
  }
  function F() {
    return D.index.add(1).get() !== yt();
  }
  function tt() {
    return D.index.add(-1).get() !== yt();
  }
  function at() {
    return D.scrollSnapList;
  }
  function Y() {
    return D.scrollProgress.get(D.offsetLocation.get());
  }
  function yt() {
    return D.index.get();
  }
  function bt() {
    return D.indexPrevious.get();
  }
  function et() {
    return D.slidesInView.get();
  }
  function E() {
    return D.slidesInView.get(!1);
  }
  function G() {
    return $;
  }
  function nt() {
    return D;
  }
  function it() {
    return i;
  }
  function vt() {
    return ot;
  }
  function ft() {
    return j;
  }
  const Tt = {
    canScrollNext: F,
    canScrollPrev: tt,
    containerNode: vt,
    internalEngine: nt,
    destroy: lt,
    off: C,
    on: S,
    emit: T,
    plugins: G,
    previousScrollSnap: bt,
    reInit: w,
    rootNode: it,
    scrollNext: W,
    scrollPrev: q,
    scrollProgress: Y,
    scrollSnapList: at,
    scrollTo: I,
    selectedScrollSnap: yt,
    slideNodes: ft,
    slidesInView: et,
    slidesNotInView: E
  };
  return ct(l, s), setTimeout(() => p.emit("init"), 0), Tt;
}
ru.globalOptions = void 0;
function Jh(i = {}, l = []) {
  const s = X.useRef(i), o = X.useRef(l), [c, d] = X.useState(), [f, m] = X.useState(), p = X.useCallback(() => {
    c && c.reInit(s.current, o.current);
  }, [c]);
  return X.useEffect(() => {
    Zh(s.current, i) || (s.current = i, p());
  }, [i, p]), X.useEffect(() => {
    mD(o.current, l) || (o.current = l, p());
  }, [l, p]), X.useEffect(() => {
    if (hD() && f) {
      ru.globalOptions = Jh.globalOptions;
      const g = ru(f, s.current, o.current);
      return d(g), () => g.destroy();
    } else
      d(void 0);
  }, [f, d]), [m, c];
}
Jh.globalOptions = void 0;
const ab = (i) => typeof i == "boolean" ? `${i}` : i === 0 ? "0" : i, lb = xb, ZD = (i, l) => (s) => {
  var o;
  if (l?.variants == null) return lb(i, s?.class, s?.className);
  const { variants: c, defaultVariants: d } = l, f = Object.keys(c).map((g) => {
    const v = s?.[g], y = d?.[g];
    if (v === null) return null;
    const S = ab(v) || ab(y);
    return c[g][S];
  }), m = s && Object.entries(s).reduce((g, v) => {
    let [y, S] = v;
    return S === void 0 || (g[y] = S), g;
  }, {}), p = l == null || (o = l.compoundVariants) === null || o === void 0 ? void 0 : o.reduce((g, v) => {
    let { class: y, className: S, ...C } = v;
    return Object.entries(C).every((T) => {
      let [w, x] = T;
      return Array.isArray(x) ? x.includes({
        ...d,
        ...m
      }[w]) : {
        ...d,
        ...m
      }[w] === x;
    }) ? [
      ...g,
      y,
      S
    ] : g;
  }, []);
  return lb(i, f, p, s?.class, s?.className);
}, KD = ZD(
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
function sb({
  className: i,
  variant: l = "default",
  size: s = "default",
  asChild: o = !1,
  ...c
}) {
  const d = o ? kE : "button";
  return /* @__PURE__ */ O.jsx(
    d,
    {
      "data-slot": "button",
      "data-variant": l,
      "data-size": s,
      className: Aa(KD({ variant: l, size: s, className: i })),
      ...c
    }
  );
}
const jS = X.createContext(null);
function LS() {
  const i = X.useContext(jS);
  if (!i)
    throw new Error("useCarousel must be used within a <Carousel />");
  return i;
}
function wd({
  orientation: i = "horizontal",
  opts: l,
  setApi: s,
  plugins: o,
  className: c,
  children: d,
  ...f
}) {
  const [m, p] = Jh(
    {
      ...l,
      axis: i === "horizontal" ? "x" : "y"
    },
    o
  ), [g, v] = X.useState(!1), [y, S] = X.useState(!1), C = X.useCallback((D) => {
    D && (v(D.canScrollPrev()), S(D.canScrollNext()));
  }, []), T = X.useCallback(() => {
    p?.scrollPrev();
  }, [p]), w = X.useCallback(() => {
    p?.scrollNext();
  }, [p]), x = X.useCallback(
    (D) => {
      D.key === "ArrowLeft" ? (D.preventDefault(), T()) : D.key === "ArrowRight" && (D.preventDefault(), w());
    },
    [T, w]
  );
  return X.useEffect(() => {
    !p || !s || s(p);
  }, [p, s]), X.useEffect(() => {
    if (p)
      return C(p), p.on("reInit", C), p.on("select", C), () => {
        p?.off("select", C), p?.off("reInit", C);
      };
  }, [p, C]), /* @__PURE__ */ O.jsx(
    jS.Provider,
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
      children: /* @__PURE__ */ O.jsx(
        "div",
        {
          onKeyDownCapture: x,
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
function Cd({ className: i, ...l }) {
  const { carouselRef: s, orientation: o } = LS();
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
function Md({ className: i, ...l }) {
  const { orientation: s } = LS();
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
const PD = {
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
function FD(i, l) {
  const s = i.scrollSnapList();
  return typeof l == "number" ? s.map(() => l) : l(s, i);
}
function JD(i, l) {
  const s = i.rootNode();
  return l && l(s) || s;
}
function Ih(i = {}) {
  let l, s, o, c, d = null, f = 0, m = !1, p = !1, g = !1, v = !1;
  function y(I, W) {
    s = I;
    const {
      mergeOptions: q,
      optionsAtMedia: F
    } = W, tt = q(PD, Ih.globalOptions), at = q(tt, i);
    if (l = F(at), s.scrollSnapList().length <= 1) return;
    v = l.jump, o = !1, c = FD(s, l.delay);
    const {
      eventStore: Y,
      ownerDocument: yt
    } = s.internalEngine(), bt = !!s.internalEngine().options.watchDrag, et = JD(s, l.rootNode);
    Y.add(yt, "visibilitychange", D), bt && s.on("pointerDown", H), bt && !l.stopOnInteraction && s.on("pointerUp", L), l.stopOnMouseEnter && Y.add(et, "mouseenter", $), l.stopOnMouseEnter && !l.stopOnInteraction && Y.add(et, "mouseleave", ot), l.stopOnFocusIn && s.on("slideFocusStart", x), l.stopOnFocusIn && !l.stopOnInteraction && Y.add(s.containerNode(), "focusout", w), l.playOnInit && w();
  }
  function S() {
    s.off("pointerDown", H).off("pointerUp", L).off("slideFocusStart", x), x(), o = !0, m = !1;
  }
  function C() {
    const {
      ownerWindow: I
    } = s.internalEngine();
    I.clearTimeout(f), f = I.setTimeout(P, c[s.selectedScrollSnap()]), d = (/* @__PURE__ */ new Date()).getTime(), s.emit("autoplay:timerset");
  }
  function T() {
    const {
      ownerWindow: I
    } = s.internalEngine();
    I.clearTimeout(f), f = 0, d = null, s.emit("autoplay:timerstopped");
  }
  function w() {
    if (!o) {
      if (z()) {
        g = !0;
        return;
      }
      m || s.emit("autoplay:play"), C(), m = !0;
    }
  }
  function x() {
    o || (m && s.emit("autoplay:stop"), T(), m = !1);
  }
  function D() {
    if (z())
      return g = m, x();
    g && w();
  }
  function z() {
    const {
      ownerDocument: I
    } = s.internalEngine();
    return I.visibilityState === "hidden";
  }
  function H() {
    p || x();
  }
  function L() {
    p || w();
  }
  function $() {
    p = !0, x();
  }
  function ot() {
    p = !1, w();
  }
  function j(I) {
    typeof I < "u" && (v = I), w();
  }
  function N() {
    m && x();
  }
  function ut() {
    m && w();
  }
  function ct() {
    return m;
  }
  function P() {
    const {
      index: I
    } = s.internalEngine(), W = I.clone().add(1).get(), q = s.scrollSnapList().length - 1, F = l.stopOnLastSnap && W === q;
    if (s.canScrollNext() ? s.scrollNext(v) : s.scrollTo(0, v), s.emit("autoplay:select"), F) return x();
    w();
  }
  function K() {
    if (!d) return null;
    const I = c[s.selectedScrollSnap()], W = (/* @__PURE__ */ new Date()).getTime() - d;
    return I - W;
  }
  return {
    name: "autoplay",
    options: i,
    init: y,
    destroy: S,
    play: j,
    stop: N,
    reset: ut,
    isPlaying: ct,
    timeUntilNext: K
  };
}
Ih.globalOptions = void 0;
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
function ID() {
  const i = X.useRef(null), l = Qh(i, { amount: 0.2 }), s = Xh(), o = X.useMemo(() => Ih({ active: !s, delay: 3e3, stopOnInteraction: !1, stopOnFocusIn: !1, stopOnMouseEnter: !1, playOnInit: !1 }), [s]), [c, d] = X.useState(), [f, m] = X.useState(), [p, g] = X.useState(), [v, y] = X.useState(0), [S, C] = X.useState(!0);
  X.useEffect(() => {
    const w = () => C(!document.hidden);
    return w(), document.addEventListener("visibilitychange", w), () => document.removeEventListener("visibilitychange", w);
  }, []), X.useEffect(() => {
    if (!c || !f || !p) return;
    const w = [c, f, p], x = w.map((D) => {
      const z = () => {
        const H = D.selectedScrollSnap();
        y(H), w.forEach((L) => {
          L !== D && L.selectedScrollSnap() !== H && L.scrollTo(H, !!s);
        });
      };
      return D.on("select", z), z;
    });
    return () => {
      w.forEach((D, z) => {
        D.off("select", x[z]);
      });
    };
  }, [c, f, p, s]), X.useEffect(() => {
    c && (!s && l && S ? o.play() : o.stop());
  }, [c, s, l, S, o]);
  const T = (w) => {
    c?.scrollTo(w, !!s), o.reset();
  };
  return /* @__PURE__ */ O.jsxs("div", { ref: i, className: "showcase-inner", "data-current": v, children: [
    /* @__PURE__ */ O.jsxs("div", { className: "showcase-top", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "showcase-intro", children: [
        /* @__PURE__ */ O.jsxs("h2", { id: "showcase-title", children: [
          "Nature,",
          /* @__PURE__ */ O.jsx("br", {}),
          "thoughtfully made."
        ] }),
        /* @__PURE__ */ O.jsx("p", { children: "Handcrafted vetiver pieces for the moments you celebrate and the spaces you call home." }),
        /* @__PURE__ */ O.jsxs("div", { className: "showcase-actions", children: [
          /* @__PURE__ */ O.jsx(sb, { asChild: !0, size: "lg", className: "showcase-cta", children: /* @__PURE__ */ O.jsxs("a", { href: "products.html", children: [
            "Explore all products ",
            /* @__PURE__ */ O.jsx(_s, { size: 20, "aria-hidden": "true" })
          ] }) }),
          /* @__PURE__ */ O.jsx(sb, { asChild: !0, size: "lg", className: "showcase-secondary", children: /* @__PURE__ */ O.jsx("a", { href: "#contact", children: "Bulk orders" }) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx(wd, { setApi: d, plugins: [o], opts: { loop: !0, duration: s ? 0 : 25 }, className: "showcase-main showcase-viewport", "aria-roledescription": "carousel", "aria-label": "Featured vetiver products", onKeyDownCapture: (w) => {
        (w.key === "ArrowRight" || w.key === "ArrowLeft") && (w.preventDefault(), T(v + (w.key === "ArrowRight" ? 1 : -1)));
      }, tabIndex: 0, children: /* @__PURE__ */ O.jsx(Cd, { className: "showcase-track", children: Ur.map((w, x) => /* @__PURE__ */ O.jsx(Md, { className: "showcase-slide", "aria-hidden": v !== x, children: /* @__PURE__ */ O.jsx("img", { src: w.image, alt: w.alt, width: 1024, height: 1024, loading: "lazy", draggable: !1 }) }, w.id)) }) })
    ] }),
    /* @__PURE__ */ O.jsxs("div", { className: "showcase-bottom", children: [
      /* @__PURE__ */ O.jsxs("div", { className: "showcase-thumbnails", children: [
        /* @__PURE__ */ O.jsx(wd, { setApi: m, opts: { loop: !0, duration: s ? 0 : 25 }, className: "showcase-thumb-viewport showcase-viewport", "aria-label": "Choose a featured product", children: /* @__PURE__ */ O.jsx(Cd, { className: "showcase-track", children: Ur.map((w, x) => /* @__PURE__ */ O.jsx(Md, { className: "showcase-thumb-slide", children: /* @__PURE__ */ O.jsxs("button", { type: "button", className: "showcase-thumb", "aria-label": "Show " + w.name, "aria-pressed": v === x, onClick: () => T(x), children: [
          /* @__PURE__ */ O.jsx("svg", { viewBox: "0 0 161 92", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("path", { d: "M0.682517 80.6118L0.501193 39.6946C0.480127 34.9409 3.80852 30.8294 8.46241 29.8603L148.426 0.713985C154.636 -0.579105 160.465 4.16121 160.465 10.504V80.7397C160.465 86.2674 155.98 90.7465 150.453 90.7397L10.6701 90.5674C5.16936 90.5607 0.706893 86.1125 0.682517 80.6118Z", fill: "none", stroke: "currentColor" }) }),
          /* @__PURE__ */ O.jsx("img", { src: w.image, alt: "", width: 100, height: 100, loading: "lazy", draggable: !1 })
        ] }) }, w.id)) }) }),
        /* @__PURE__ */ O.jsxs("div", { className: "showcase-controls", children: [
          /* @__PURE__ */ O.jsx("button", { type: "button", "aria-label": "Previous product", onClick: () => T(v - 1), children: /* @__PURE__ */ O.jsx(Hb, { size: 18 }) }),
          /* @__PURE__ */ O.jsxs("span", { children: [
            String(v + 1).padStart(2, "0"),
            " / ",
            String(Ur.length).padStart(2, "0")
          ] }),
          /* @__PURE__ */ O.jsx("button", { type: "button", "aria-label": "Next product", onClick: () => T(v + 1), children: /* @__PURE__ */ O.jsx(_s, { size: 18 }) })
        ] })
      ] }),
      /* @__PURE__ */ O.jsx(wd, { setApi: g, opts: { loop: !0, duration: s ? 0 : 25 }, className: "showcase-details showcase-viewport", "aria-live": s ? "polite" : "off", children: /* @__PURE__ */ O.jsx(Cd, { className: "showcase-track", children: Ur.map((w, x) => /* @__PURE__ */ O.jsxs(Md, { className: "showcase-detail-slide", "aria-hidden": v !== x, children: [
        /* @__PURE__ */ O.jsx("h3", { children: w.name }),
        /* @__PURE__ */ O.jsx("p", { children: w.description }),
        /* @__PURE__ */ O.jsxs("a", { href: "products.html#" + w.id, tabIndex: v === x ? 0 : -1, children: [
          "Explore this piece ",
          /* @__PURE__ */ O.jsx(_s, { size: 16, "aria-hidden": "true" })
        ] })
      ] }, w.id)) }) })
    ] })
  ] });
}
function WD({ tagline: i, title: l, description: s, ctaText: o, images: c, className: d }) {
  const f = X.useRef(null), m = Qh(f, { amount: 0.15 }), p = Xh(), [g, v] = X.useState(!0);
  return X.useEffect(() => {
    const y = () => v(!document.hidden);
    return y(), document.addEventListener("visibilitychange", y), () => document.removeEventListener("visibilitychange", y);
  }, []), /* @__PURE__ */ O.jsxs("section", { ref: f, className: Aa("bulk-marquee", d), "aria-labelledby": "bulk-title", children: [
    /* @__PURE__ */ O.jsxs(th.div, { className: "bulk-copy", initial: !1, animate: { y: p || m ? 0 : 16 }, transition: { duration: p ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }, children: [
      i && /* @__PURE__ */ O.jsx("p", { children: i }),
      /* @__PURE__ */ O.jsx("h2", { id: "bulk-title", children: l }),
      /* @__PURE__ */ O.jsx("p", { children: s }),
      /* @__PURE__ */ O.jsxs(th.button, { type: "button", "data-bulk-enquiry": !0, "aria-haspopup": "dialog", "aria-controls": "bulk-enquiry-dialog", className: "bulk-cta", whileHover: p ? {} : { y: -2 }, whileTap: p ? {} : { scale: 0.98 }, children: [
        o,
        /* @__PURE__ */ O.jsx(ch, { size: 20, "aria-hidden": "true" })
      ] }),
      /* @__PURE__ */ O.jsx("span", { className: "bulk-note", children: "Share your occasion, quantity and delivery location." })
    ] }),
    /* @__PURE__ */ O.jsx("div", { className: "bulk-image-window", "aria-hidden": "true", children: /* @__PURE__ */ O.jsx("div", { className: "bulk-image-track", style: { animationPlayState: p || !m || !g ? "paused" : "running" }, children: [0, 1].map((y) => /* @__PURE__ */ O.jsx("div", { className: "bulk-image-group", children: c.map((S, C) => /* @__PURE__ */ O.jsx("div", { className: "bulk-image", style: { rotate: (C % 2 === 0 ? -3 : 4) + "deg" }, children: /* @__PURE__ */ O.jsx("img", { src: S, alt: "", width: 1024, height: 1024, loading: "lazy", draggable: !1 }) }, S + C)) }, y)) }) })
  ] });
}
function ob() {
  const i = document.getElementById("product-showcase-root");
  i && zr.createRoot(i).render(/* @__PURE__ */ O.jsx(ID, {}));
  const l = document.getElementById("bulk-order-root");
  l && zr.createRoot(l).render(/* @__PURE__ */ O.jsx(WD, { title: /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
    "More pieces.",
    /* @__PURE__ */ O.jsx("br", {}),
    "One thoughtful gesture."
  ] }), description: "For celebrations, gifting and larger orders, bring a little vetiver into every detail. Tell us what you have in mind and we’ll discuss the options with you.", ctaText: "Discuss a bulk order", images: bl.slice(0, 8).map((p) => p.image) }));
  const s = window.VETTIVER_CONFIG?.feedbackEndpoint || "", o = s.startsWith("/") && !s.startsWith("//") ? s : "", c = document.getElementById("testimonials-root");
  if (c) {
    const p = zr.createRoot(c), g = /* @__PURE__ */ O.jsxs(O.Fragment, { children: [
      /* @__PURE__ */ O.jsx(aD, { testimonials: fD }),
      /* @__PURE__ */ O.jsx(J0, { endpoint: o })
    ] });
    new URLSearchParams(location.search).get("ui-demo") === "testimonials" ? import("./demo-_kRM1UDL.js").then(({ AnimatedTestimonialsBasic: v }) => p.render(/* @__PURE__ */ O.jsxs(O.Fragment, { children: [
      /* @__PURE__ */ O.jsx(v, {}),
      /* @__PURE__ */ O.jsx(J0, { endpoint: "" })
    ] }))) : p.render(g);
  }
  const d = document.getElementById("footer-root");
  d && zr.createRoot(d).render(/* @__PURE__ */ O.jsx(cD, { columns: document.body.classList.contains("catalog-page") ? [
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
document.readyState === "complete" ? ob() : document.addEventListener("DOMContentLoaded", ob, { once: !0 });
export {
  aD as A,
  O as j
};
