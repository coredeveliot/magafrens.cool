(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [924],
  {
    1079: (e, t, r) => {
      "use strict";
      var n = r(9018),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var r,
          i,
          s,
          l,
          a,
          c,
          u,
          d,
          p = !1;
        t || (t = {}), (s = t.debug || !1);
        try {
          if (
            ((a = n()),
            (c = document.createRange()),
            (u = document.getSelection()),
            ((d = document.createElement("span")).textContent = e),
            (d.ariaHidden = "true"),
            (d.style.all = "unset"),
            (d.style.position = "fixed"),
            (d.style.top = 0),
            (d.style.clip = "rect(0, 0, 0, 0)"),
            (d.style.whiteSpace = "pre"),
            (d.style.webkitUserSelect = "text"),
            (d.style.MozUserSelect = "text"),
            (d.style.msUserSelect = "text"),
            (d.style.userSelect = "text"),
            d.addEventListener("copy", function (r) {
              if ((r.stopPropagation(), t.format)) {
                if ((r.preventDefault(), void 0 === r.clipboardData)) {
                  s && console.warn("unable to use e.clipboardData"),
                    s && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var n = o[t.format] || o.default;
                  window.clipboardData.setData(n, e);
                } else
                  r.clipboardData.clearData(),
                    r.clipboardData.setData(t.format, e);
              }
              t.onCopy && (r.preventDefault(), t.onCopy(r.clipboardData));
            }),
            document.body.appendChild(d),
            c.selectNodeContents(d),
            u.addRange(c),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          p = !0;
        } catch (n) {
          s && console.error("unable to copy using execCommand: ", n),
            s && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (p = !0);
          } catch (n) {
            s && console.error("unable to copy using clipboardData: ", n),
              s && console.error("falling back to prompt"),
              (r =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (i =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (l = r.replace(/#{\s*key\s*}/g, i)),
              window.prompt(l, e);
          }
        } finally {
          u &&
            ("function" == typeof u.removeRange
              ? u.removeRange(c)
              : u.removeAllRanges()),
            d && document.body.removeChild(d),
            a();
        }
        return p;
      };
    },
    5565: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => o.a });
      var n = r(4146),
        o = r.n(n);
    },
    7396: (e, t, r) => {
      "use strict";
      r.d(t, { default: () => o.a });
      var n = r(4839),
        o = r.n(n);
    },
    5483: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(6573);
      let n = function (e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8929: (e, t, r) => {
      "use strict";
      function n(e, t, r, n) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        r(6573),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    7970: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return _;
          },
        });
      let n = r(306),
        o = r(9955),
        i = r(5155),
        s = o._(r(2115)),
        l = n._(r(7650)),
        a = n._(r(6107)),
        c = r(666),
        u = r(1159),
        d = r(3621);
      r(2363);
      let p = r(3576),
        f = n._(r(5514)),
        h = r(5353),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, r, n, o, i, s) {
        let l = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== l &&
          ((e["data-loaded-src"] = l),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    o = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function b(e) {
        return s.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, s.forwardRef)((e, t) => {
        let {
            src: r,
            srcSet: n,
            sizes: o,
            height: l,
            width: a,
            decoding: c,
            className: u,
            style: d,
            fetchPriority: p,
            placeholder: f,
            loading: m,
            unoptimized: v,
            fill: y,
            onLoadRef: _,
            onLoadingCompleteRef: w,
            setBlurComplete: S,
            setShowAltText: x,
            sizesInput: E,
            onLoad: R,
            onError: P,
            ...O
          } = e,
          C = (0, s.useCallback)(
            (e) => {
              e && (P && (e.src = e.src), e.complete && g(e, f, _, w, S, v, E));
            },
            [r, f, _, w, S, P, v, E]
          ),
          T = (0, h.useMergedRef)(t, C);
        return (0, i.jsx)("img", {
          ...O,
          ...b(p),
          loading: m,
          width: a,
          height: l,
          decoding: c,
          "data-nimg": y ? "fill" : "1",
          className: u,
          style: d,
          sizes: o,
          srcSet: n,
          src: r,
          ref: T,
          onLoad: (e) => {
            g(e.currentTarget, f, _, w, S, v, E);
          },
          onError: (e) => {
            x(!0), "empty" !== f && S(!0), P && P(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...b(r.fetchPriority),
          };
        return t && l.default.preload
          ? (l.default.preload(r.src, n), null)
          : (0, i.jsx)(a.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let _ = (0, s.forwardRef)((e, t) => {
        let r = (0, s.useContext)(p.RouterContext),
          n = (0, s.useContext)(d.ImageConfigContext),
          o = (0, s.useMemo)(() => {
            let e = m || n || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: l, onLoadingComplete: a } = e,
          h = (0, s.useRef)(l);
        (0, s.useEffect)(() => {
          h.current = l;
        }, [l]);
        let g = (0, s.useRef)(a);
        (0, s.useEffect)(() => {
          g.current = a;
        }, [a]);
        let [b, _] = (0, s.useState)(!1),
          [w, S] = (0, s.useState)(!1),
          { props: x, meta: E } = (0, c.getImgProps)(e, {
            defaultLoader: f.default,
            imgConf: o,
            blurComplete: b,
            showAltText: w,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(v, {
              ...x,
              unoptimized: E.unoptimized,
              placeholder: E.placeholder,
              fill: E.fill,
              onLoadRef: h,
              onLoadingCompleteRef: g,
              setBlurComplete: _,
              setShowAltText: S,
              sizesInput: e.sizes,
              ref: t,
            }),
            E.priority
              ? (0, i.jsx)(y, { isAppRouter: !r, imgAttributes: x })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4839: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(306),
        o = r(5155),
        i = n._(r(2115)),
        s = r(2745),
        l = r(9821),
        a = r(180),
        c = r(2170),
        u = r(5483),
        d = r(3576),
        p = r(1394),
        f = r(4116),
        h = r(8929),
        m = r(9544),
        g = r(4445),
        b = r(5353),
        v = new Set();
      function y(e, t, r, n, o, i) {
        if ("undefined" != typeof window && (i || (0, l.isLocalURL)(t))) {
          if (!n.bypassPrefetchedCheck && !i) {
            let o =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== n.locale
                ? n.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (v.has(o)) return;
            v.add(o);
          }
          (async () => (i ? e.prefetch(t, o) : e.prefetch(t, r, n)))().catch(
            (e) => {}
          );
        }
      }
      function _(e) {
        return "string" == typeof e ? e : (0, a.formatUrl)(e);
      }
      let w = i.default.forwardRef(function (e, t) {
        let r, n;
        let {
          href: a,
          as: v,
          children: w,
          prefetch: S = null,
          passHref: x,
          replace: E,
          shallow: R,
          scroll: P,
          locale: O,
          onClick: C,
          onMouseEnter: T,
          onTouchStart: N,
          legacyBehavior: A = !1,
          ...j
        } = e;
        (r = w),
          A &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, o.jsx)("a", { children: r }));
        let I = i.default.useContext(d.RouterContext),
          M = i.default.useContext(p.AppRouterContext),
          k = null != I ? I : M,
          z = !I,
          L = !1 !== S,
          D = null === S ? g.PrefetchKind.AUTO : g.PrefetchKind.FULL,
          { href: U, as: W } = i.default.useMemo(() => {
            if (!I) {
              let e = _(a);
              return { href: e, as: v ? _(v) : e };
            }
            let [e, t] = (0, s.resolveHref)(I, a, !0);
            return { href: e, as: v ? (0, s.resolveHref)(I, v) : t || e };
          }, [I, a, v]),
          F = i.default.useRef(U),
          H = i.default.useRef(W);
        A && (n = i.default.Children.only(r));
        let G = A ? n && "object" == typeof n && n.ref : t,
          [X, V, B] = (0, f.useIntersection)({ rootMargin: "200px" }),
          Y = i.default.useCallback(
            (e) => {
              (H.current !== W || F.current !== U) &&
                (B(), (H.current = W), (F.current = U)),
                X(e);
            },
            [W, U, B, X]
          ),
          $ = (0, b.useMergedRef)(Y, G);
        i.default.useEffect(() => {
          k && V && L && y(k, U, W, { locale: O }, { kind: D }, z);
        }, [W, U, V, O, L, null == I ? void 0 : I.locale, k, z, D]);
        let q = {
          ref: $,
          onClick(e) {
            A || "function" != typeof C || C(e),
              A &&
                n.props &&
                "function" == typeof n.props.onClick &&
                n.props.onClick(e),
              k &&
                !e.defaultPrevented &&
                (function (e, t, r, n, o, s, a, c, u) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!u && !(0, l.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let p = () => {
                    let e = null == a || a;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](r, n, {
                          shallow: s,
                          locale: c,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](n || r, { scroll: e });
                  };
                  u ? i.default.startTransition(p) : p();
                })(e, k, U, W, E, R, P, O, z);
          },
          onMouseEnter(e) {
            A || "function" != typeof T || T(e),
              A &&
                n.props &&
                "function" == typeof n.props.onMouseEnter &&
                n.props.onMouseEnter(e),
              k &&
                (L || !z) &&
                y(
                  k,
                  U,
                  W,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  z
                );
          },
          onTouchStart: function (e) {
            A || "function" != typeof N || N(e),
              A &&
                n.props &&
                "function" == typeof n.props.onTouchStart &&
                n.props.onTouchStart(e),
              k &&
                (L || !z) &&
                y(
                  k,
                  U,
                  W,
                  { locale: O, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  z
                );
          },
        };
        if ((0, c.isAbsoluteUrl)(W)) q.href = W;
        else if (!A || x || ("a" === n.type && !("href" in n.props))) {
          let e = void 0 !== O ? O : null == I ? void 0 : I.locale,
            t =
              (null == I ? void 0 : I.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                W,
                e,
                null == I ? void 0 : I.locales,
                null == I ? void 0 : I.domainLocales
              );
          q.href =
            t ||
            (0, m.addBasePath)(
              (0, u.addLocale)(W, e, null == I ? void 0 : I.defaultLocale)
            );
        }
        return A
          ? i.default.cloneElement(n, q)
          : (0, o.jsx)("a", { ...j, ...q, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8571: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          cancelIdleCallback: function () {
            return n;
          },
          requestIdleCallback: function () {
            return r;
          },
        });
      let r =
          ("undefined" != typeof self &&
            self.requestIdleCallback &&
            self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        n =
          ("undefined" != typeof self &&
            self.cancelIdleCallback &&
            self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2745: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let n = r(4156),
        o = r(180),
        i = r(1673),
        s = r(2170),
        l = r(6573),
        a = r(9821),
        c = r(1885),
        u = r(1605);
      function d(e, t, r) {
        let d;
        let p = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          f = p.match(/^[a-zA-Z]{1,}:\/\//),
          h = f ? p.slice(f[0].length) : p;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              p +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, s.normalizeRepeatedSlashes)(h);
          p = (f ? f[0] : "") + t;
        }
        if (!(0, a.isLocalURL)(p)) return r ? [p] : p;
        try {
          d = new URL(p.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(p, d);
          e.pathname = (0, l.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, c.isDynamicRoute)(e.pathname) && e.searchParams && r) {
            let r = (0, n.searchParamsToUrlQuery)(e.searchParams),
              { result: s, params: l } = (0, u.interpolateAs)(
                e.pathname,
                e.pathname,
                r
              );
            s &&
              (t = (0, o.formatWithValidation)({
                pathname: s,
                hash: e.hash,
                query: (0, i.omit)(r, l),
              }));
          }
          let s =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return r ? [s, t || s] : s;
        } catch (e) {
          return r ? [p] : p;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    4116: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = r(2115),
        o = r(8571),
        i = "function" == typeof IntersectionObserver,
        s = new Map(),
        l = [];
      function a(e) {
        let { rootRef: t, rootMargin: r, disabled: a } = e,
          c = a || !i,
          [u, d] = (0, n.useState)(!1),
          p = (0, n.useRef)(null),
          f = (0, n.useCallback)((e) => {
            p.current = e;
          }, []);
        return (
          (0, n.useEffect)(() => {
            if (i) {
              if (c || u) return;
              let e = p.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: n,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      n = l.find(
                        (e) => e.root === r.root && e.margin === r.margin
                      );
                    if (n && (t = s.get(n))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: o,
                      }),
                      l.push(r),
                      s.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), s.delete(n);
                        let e = l.findIndex(
                          (e) => e.root === n.root && e.margin === n.margin
                        );
                        e > -1 && l.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!u) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [c, r, t, u, p.current]),
          [
            f,
            u,
            (0, n.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5353: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useMergedRef", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(2115);
      function o(e, t) {
        let r = (0, n.useRef)(() => {}),
          o = (0, n.useRef)(() => {});
        return (0, n.useMemo)(
          () =>
            e && t
              ? (n) => {
                  null === n
                    ? (r.current(), o.current())
                    : ((r.current = i(e, n)), (o.current = i(t, n)));
                }
              : e || t,
          [e, t]
        );
      }
      function i(e, t) {
        if ("function" != typeof e)
          return (
            (e.current = t),
            () => {
              e.current = null;
            }
          );
        {
          let r = e(t);
          return "function" == typeof r ? r : () => e(null);
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    918: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ACTION_SUFFIX: function () {
            return d;
          },
          APP_DIR_ALIAS: function () {
            return j;
          },
          CACHE_ONE_YEAR: function () {
            return E;
          },
          DOT_NEXT_ALIAS: function () {
            return N;
          },
          ESLINT_DEFAULT_DIRS: function () {
            return Q;
          },
          GSP_NO_RETURNED_VALUE: function () {
            return V;
          },
          GSSP_COMPONENT_MEMBER_ERROR: function () {
            return $;
          },
          GSSP_NO_RETURNED_VALUE: function () {
            return B;
          },
          INFINITE_CACHE: function () {
            return R;
          },
          INSTRUMENTATION_HOOK_FILENAME: function () {
            return C;
          },
          MATCHED_PATH_HEADER: function () {
            return o;
          },
          MIDDLEWARE_FILENAME: function () {
            return P;
          },
          MIDDLEWARE_LOCATION_REGEXP: function () {
            return O;
          },
          NEXT_BODY_SUFFIX: function () {
            return h;
          },
          NEXT_CACHE_IMPLICIT_TAG_ID: function () {
            return x;
          },
          NEXT_CACHE_REVALIDATED_TAGS_HEADER: function () {
            return b;
          },
          NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function () {
            return v;
          },
          NEXT_CACHE_SOFT_TAGS_HEADER: function () {
            return g;
          },
          NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function () {
            return S;
          },
          NEXT_CACHE_TAGS_HEADER: function () {
            return m;
          },
          NEXT_CACHE_TAG_MAX_ITEMS: function () {
            return _;
          },
          NEXT_CACHE_TAG_MAX_LENGTH: function () {
            return w;
          },
          NEXT_DATA_SUFFIX: function () {
            return p;
          },
          NEXT_INTERCEPTION_MARKER_PREFIX: function () {
            return n;
          },
          NEXT_META_SUFFIX: function () {
            return f;
          },
          NEXT_QUERY_PARAM_PREFIX: function () {
            return r;
          },
          NEXT_RESUME_HEADER: function () {
            return y;
          },
          NON_STANDARD_NODE_ENV: function () {
            return q;
          },
          PAGES_DIR_ALIAS: function () {
            return T;
          },
          PRERENDER_REVALIDATE_HEADER: function () {
            return i;
          },
          PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function () {
            return s;
          },
          PUBLIC_DIR_MIDDLEWARE_CONFLICT: function () {
            return U;
          },
          ROOT_DIR_ALIAS: function () {
            return A;
          },
          RSC_ACTION_CLIENT_WRAPPER_ALIAS: function () {
            return D;
          },
          RSC_ACTION_ENCRYPTION_ALIAS: function () {
            return L;
          },
          RSC_ACTION_PROXY_ALIAS: function () {
            return k;
          },
          RSC_ACTION_VALIDATE_ALIAS: function () {
            return M;
          },
          RSC_CACHE_WRAPPER_ALIAS: function () {
            return z;
          },
          RSC_MOD_REF_PROXY_ALIAS: function () {
            return I;
          },
          RSC_PREFETCH_SUFFIX: function () {
            return l;
          },
          RSC_SEGMENTS_DIR_SUFFIX: function () {
            return a;
          },
          RSC_SEGMENT_SUFFIX: function () {
            return c;
          },
          RSC_SUFFIX: function () {
            return u;
          },
          SERVER_PROPS_EXPORT_ERROR: function () {
            return X;
          },
          SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function () {
            return F;
          },
          SERVER_PROPS_SSG_CONFLICT: function () {
            return H;
          },
          SERVER_RUNTIME: function () {
            return Z;
          },
          SSG_FALLBACK_EXPORT_ERROR: function () {
            return K;
          },
          SSG_GET_INITIAL_PROPS_CONFLICT: function () {
            return W;
          },
          STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function () {
            return G;
          },
          UNSTABLE_REVALIDATE_RENAME_ERROR: function () {
            return Y;
          },
          WEBPACK_LAYERS: function () {
            return ee;
          },
          WEBPACK_RESOURCE_QUERIES: function () {
            return et;
          },
        });
      let r = "nxtP",
        n = "nxtI",
        o = "x-matched-path",
        i = "x-prerender-revalidate",
        s = "x-prerender-revalidate-if-generated",
        l = ".prefetch.rsc",
        a = ".segments",
        c = ".segment.rsc",
        u = ".rsc",
        d = ".action",
        p = ".json",
        f = ".meta",
        h = ".body",
        m = "x-next-cache-tags",
        g = "x-next-cache-soft-tags",
        b = "x-next-revalidated-tags",
        v = "x-next-revalidate-tag-token",
        y = "next-resume",
        _ = 64,
        w = 256,
        S = 1024,
        x = "_N_T_",
        E = 31536e3,
        R = 0xfffffffe,
        P = "middleware",
        O = `(?:src/)?${P}`,
        C = "instrumentation",
        T = "private-next-pages",
        N = "private-dot-next",
        A = "private-next-root-dir",
        j = "private-next-app-dir",
        I = "private-next-rsc-mod-ref-proxy",
        M = "private-next-rsc-action-validate",
        k = "private-next-rsc-server-reference",
        z = "private-next-rsc-cache-wrapper",
        L = "private-next-rsc-action-encryption",
        D = "private-next-rsc-action-client-wrapper",
        U =
          "You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",
        W =
          "You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",
        F =
          "You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",
        H =
          "You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",
        G =
          "can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",
        X =
          "pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",
        V =
          "Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",
        B =
          "Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",
        Y =
          "The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",
        $ =
          "can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",
        q =
          'You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',
        K =
          "Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",
        Q = ["app", "pages", "components", "lib", "src"],
        Z = {
          edge: "edge",
          experimentalEdge: "experimental-edge",
          nodejs: "nodejs",
        },
        J = {
          shared: "shared",
          reactServerComponents: "rsc",
          serverSideRendering: "ssr",
          actionBrowser: "action-browser",
          api: "api",
          middleware: "middleware",
          instrument: "instrument",
          edgeAsset: "edge-asset",
          appPagesBrowser: "app-pages-browser",
        },
        ee = {
          ...J,
          GROUP: {
            builtinReact: [J.reactServerComponents, J.actionBrowser],
            serverOnly: [
              J.reactServerComponents,
              J.actionBrowser,
              J.instrument,
              J.middleware,
            ],
            neutralTarget: [J.api],
            clientOnly: [J.serverSideRendering, J.appPagesBrowser],
            bundled: [
              J.reactServerComponents,
              J.actionBrowser,
              J.serverSideRendering,
              J.appPagesBrowser,
              J.shared,
              J.instrument,
            ],
            appPages: [
              J.reactServerComponents,
              J.serverSideRendering,
              J.appPagesBrowser,
              J.actionBrowser,
            ],
          },
        },
        et = {
          edgeSSREntry: "__next_edge_ssr_entry__",
          metadata: "__next_metadata__",
          metadataRoute: "__next_metadata_route__",
          metadataImageMeta: "__next_metadata_image_meta__",
        };
    },
    3003: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(306)._(r(2115)).default.createContext({});
    },
    675: (e, t) => {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    6832: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = /[|\\{}()[\]^$+*?.-]/,
        n = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return r.test(e) ? e.replace(n, "\\$&") : e;
      }
    },
    666: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        r(2363);
      let n = r(5859),
        o = r(1159);
      function i(e) {
        return void 0 !== e.default;
      }
      function s(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var r;
        let l,
          a,
          c,
          {
            src: u,
            sizes: d,
            unoptimized: p = !1,
            priority: f = !1,
            loading: h,
            className: m,
            quality: g,
            width: b,
            height: v,
            fill: y = !1,
            style: _,
            overrideSrc: w,
            onLoad: S,
            onLoadingComplete: x,
            placeholder: E = "empty",
            blurDataURL: R,
            fetchPriority: P,
            decoding: O = "async",
            layout: C,
            objectFit: T,
            objectPosition: N,
            lazyBoundary: A,
            lazyRoot: j,
            ...I
          } = e,
          { imgConf: M, showAltText: k, blurComplete: z, defaultLoader: L } = t,
          D = M || o.imageConfigDefault;
        if ("allSizes" in D) l = D;
        else {
          let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
            t = D.deviceSizes.sort((e, t) => e - t);
          l = { ...D, allSizes: e, deviceSizes: t };
        }
        if (void 0 === L)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let U = I.loader || L;
        delete I.loader, delete I.srcSet;
        let W = "__next_img_default" in U;
        if (W) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                u +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = U;
          U = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (C) {
          "fill" === C && (y = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[C];
          t && !d && (d = t);
        }
        let F = "",
          H = s(b),
          G = s(v);
        if ((r = u) && "object" == typeof r && (i(r) || void 0 !== r.src)) {
          let e = i(u) ? u.default : u;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((a = e.blurWidth),
            (c = e.blurHeight),
            (R = R || e.blurDataURL),
            (F = e.src),
            !y)
          ) {
            if (H || G) {
              if (H && !G) {
                let t = H / e.width;
                G = Math.round(e.height * t);
              } else if (!H && G) {
                let t = G / e.height;
                H = Math.round(e.width * t);
              }
            } else (H = e.width), (G = e.height);
          }
        }
        let X = !f && ("lazy" === h || void 0 === h);
        (!(u = "string" == typeof u ? u : F) ||
          u.startsWith("data:") ||
          u.startsWith("blob:")) &&
          ((p = !0), (X = !1)),
          l.unoptimized && (p = !0),
          W && u.endsWith(".svg") && !l.dangerouslyAllowSVG && (p = !0);
        let V = s(g),
          B = Object.assign(
            y
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: T,
                  objectPosition: N,
                }
              : {},
            k ? {} : { color: "transparent" },
            _
          ),
          Y =
            z || "empty" === E
              ? null
              : "blur" === E
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: H,
                  heightInt: G,
                  blurWidth: a,
                  blurHeight: c,
                  blurDataURL: R || "",
                  objectFit: B.objectFit,
                }) +
                '")'
              : 'url("' + E + '")',
          $ = Y
            ? {
                backgroundSize: B.objectFit || "cover",
                backgroundPosition: B.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Y,
              }
            : {},
          q = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: o,
              quality: i,
              sizes: s,
              loader: l,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: a, kind: c } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: o } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, s),
              u = a.length - 1;
            return {
              sizes: s || "w" !== c ? s : "100vw",
              srcSet: a
                .map(
                  (e, n) =>
                    l({ config: t, src: r, quality: i, width: e }) +
                    " " +
                    ("w" === c ? e : n + 1) +
                    c
                )
                .join(", "),
              src: l({ config: t, src: r, quality: i, width: a[u] }),
            };
          })({
            config: l,
            src: u,
            unoptimized: p,
            width: H,
            quality: V,
            sizes: d,
            loader: U,
          });
        return {
          props: {
            ...I,
            loading: X ? "lazy" : h,
            fetchPriority: P,
            width: H,
            height: G,
            decoding: O,
            className: m,
            style: { ...B, ...$ },
            sizes: q.sizes,
            srcSet: q.srcSet,
            src: w || q.src,
          },
          meta: { unoptimized: p, priority: f, placeholder: E, fill: y },
        };
      }
    },
    6107: (e, t, r) => {
      "use strict";
      var n = r(2818);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return p;
          },
        });
      let o = r(306),
        i = r(9955),
        s = r(5155),
        l = i._(r(2115)),
        a = o._(r(1172)),
        c = r(3003),
        u = r(1147),
        d = r(675);
      function p(e) {
        void 0 === e && (e = !1);
        let t = [(0, s.jsx)("meta", { charSet: "utf-8" }, "charset")];
        return (
          e ||
            t.push(
              (0, s.jsx)(
                "meta",
                { name: "viewport", content: "width=device-width" },
                "viewport"
              )
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === l.default.Fragment
          ? e.concat(
              l.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(2363);
      let h = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(p(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (o) => {
                let i = !0,
                  s = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  s = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = h.length; e < t; e++) {
                      let t = h[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (i = !1) : r.add(t);
                        else {
                          let e = o.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !s) && r.has(e)
                            ? (i = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let o = e.key || t;
            if (
              n.env.__NEXT_OPTIMIZE_FONTS &&
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                l.default.cloneElement(e, t)
              );
            }
            return l.default.cloneElement(e, { key: o });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          r = (0, l.useContext)(c.AmpStateContext),
          n = (0, l.useContext)(u.HeadManagerContext);
        return (0, s.jsx)(a.default, {
          reduceComponentsToState: m,
          headManager: n,
          inAmpMode: (0, d.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5859: (e, t) => {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: o,
            blurDataURL: i,
            objectFit: s,
          } = e,
          l = n ? 40 * n : t,
          a = o ? 40 * o : r,
          c = l && a ? "viewBox='0 0 " + l + " " + a + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === s
            ? "xMidYMid"
            : "cover" === s
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    3621: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(306)._(r(2115)),
        o = r(1159),
        i = n.default.createContext(o.imageConfigDefault);
    },
    1159: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "attachment",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    4146: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return a;
          },
          getImageProps: function () {
            return l;
          },
        });
      let n = r(306),
        o = r(666),
        i = r(7970),
        s = n._(r(5514));
      function l(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: s.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let a = i.Image;
    },
    5514: (e, t) => {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: o } = e;
        return (
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    3576: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(306)._(r(2115)).default.createContext(null);
    },
    180: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return l;
          },
          urlObjectKeys: function () {
            return s;
          },
        });
      let n = r(9955)._(r(4156)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: r } = e,
          i = e.protocol || "",
          s = e.pathname || "",
          l = e.hash || "",
          a = e.query || "",
          c = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (c = t + e.host)
            : r &&
              ((c = t + (~r.indexOf(":") ? "[" + r + "]" : r)),
              e.port && (c += ":" + e.port)),
          a &&
            "object" == typeof a &&
            (a = String(n.urlQueryToSearchParams(a)));
        let u = e.search || (a && "?" + a) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || o.test(i)) && !1 !== c)
            ? ((c = "//" + (c || "")), s && "/" !== s[0] && (s = "/" + s))
            : c || (c = ""),
          l && "#" !== l[0] && (l = "#" + l),
          u && "?" !== u[0] && (u = "?" + u),
          "" +
            i +
            c +
            (s = s.replace(/[?#]/g, encodeURIComponent)) +
            (u = u.replace("#", "%23")) +
            l
        );
      }
      let s = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function l(e) {
        return i(e);
      }
    },
    1885: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRouteObjects: function () {
            return n.getSortedRouteObjects;
          },
          getSortedRoutes: function () {
            return n.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let n = r(8931),
        o = r(4895);
    },
    1605: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(8827),
        o = r(2630);
      function i(e, t, r) {
        let i = "",
          s = (0, o.getRouteRegex)(e),
          l = s.groups,
          a = (t !== e ? (0, n.getRouteMatcher)(s)(t) : "") || r;
        i = e;
        let c = Object.keys(l);
        return (
          c.every((e) => {
            let t = a[e] || "",
              { repeat: r, optional: n } = l[e],
              o = "[" + (r ? "..." : "") + e + "]";
            return (
              n && (o = (t ? "" : "/") + "[" + o + "]"),
              r && !Array.isArray(t) && (t = [t]),
              (n || e in a) &&
                (i =
                  i.replace(
                    o,
                    r
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (i = ""),
          { params: c, result: i }
        );
      }
    },
    4895: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(8456),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function i(e) {
        return (
          (0, n.isInterceptionRouteAppPath)(e) &&
            (e = (0, n.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    9821: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let n = r(2170),
        o = r(6003);
      function i(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, n.getLocationOrigin)(),
            r = new URL(e, t);
          return r.origin === t && (0, o.hasBasePath)(r.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    1673: (e, t) => {
      "use strict";
      function r(e, t) {
        let r = {};
        return (
          Object.keys(e).forEach((n) => {
            t.includes(n) || (r[n] = e[n]);
          }),
          r
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    4156: (e, t) => {
      "use strict";
      function r(e) {
        let t = {};
        return (
          e.forEach((e, r) => {
            void 0 === t[r]
              ? (t[r] = e)
              : Array.isArray(t[r])
              ? t[r].push(e)
              : (t[r] = [t[r], e]);
          }),
          t
        );
      }
      function n(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [r, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(r, n(e)))
              : t.set(r, n(o));
          }),
          t
        );
      }
      function i(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return (
          r.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, r) => e.append(r, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return r;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    8827: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(2170);
      function o(e) {
        let { re: t, groups: r } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let i = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new n.DecodeError("failed to decode param");
              }
            },
            s = {};
          return (
            Object.keys(r).forEach((e) => {
              let t = r[e],
                n = o[t.pos];
              void 0 !== n &&
                (s[e] = ~n.indexOf("/")
                  ? n.split("/").map((e) => i(e))
                  : t.repeat
                  ? [i(n)]
                  : i(n));
            }),
            s
          );
        };
      }
    },
    2630: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return m;
          },
          getNamedRouteRegex: function () {
            return h;
          },
          getRouteRegex: function () {
            return d;
          },
          parseParameter: function () {
            return a;
          },
        });
      let n = r(918),
        o = r(8456),
        i = r(6832),
        s = r(1246),
        l = /\[((?:\[.*\])|.+)\]/;
      function a(e) {
        let t = e.match(l);
        return t ? c(t[1]) : c(e);
      }
      function c(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let r = e.startsWith("...");
        return r && (e = e.slice(3)), { key: e, repeat: r, optional: t };
      }
      function u(e) {
        let t = (0, s.removeTrailingSlash)(e).slice(1).split("/"),
          r = {},
          n = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = o.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                s = e.match(l);
              if (t && s) {
                let { key: e, optional: o, repeat: l } = c(s[1]);
                return (
                  (r[e] = { pos: n++, repeat: l, optional: o }),
                  "/" + (0, i.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!s) return "/" + (0, i.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: o } = c(s[1]);
                return (
                  (r[e] = { pos: n++, repeat: t, optional: o }),
                  t ? (o ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: r,
        };
      }
      function d(e) {
        let { parameterizedRoute: t, groups: r } = u(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: r };
      }
      function p(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: r,
            segment: n,
            routeKeys: o,
            keyPrefix: s,
          } = e,
          { key: l, optional: a, repeat: u } = c(n),
          d = l.replace(/\W/g, "");
        s && (d = "" + s + d);
        let p = !1;
        (0 === d.length || d.length > 30) && (p = !0),
          isNaN(parseInt(d.slice(0, 1))) || (p = !0),
          p && (d = r()),
          s ? (o[d] = "" + s + l) : (o[d] = l);
        let f = t ? (0, i.escapeStringRegexp)(t) : "";
        return u
          ? a
            ? "(?:/" + f + "(?<" + d + ">.+?))?"
            : "/" + f + "(?<" + d + ">.+?)"
          : "/" + f + "(?<" + d + ">[^/]+?)";
      }
      function f(e, t) {
        let r;
        let l = (0, s.removeTrailingSlash)(e).slice(1).split("/"),
          a =
            ((r = 0),
            () => {
              let e = "",
                t = ++r;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          c = {};
        return {
          namedParameterizedRoute: l
            .map((e) => {
              let r = o.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                s = e.match(/\[((?:\[.*\])|.+)\]/);
              if (r && s) {
                let [r] = e.split(s[0]);
                return p({
                  getSafeRouteKey: a,
                  interceptionMarker: r,
                  segment: s[1],
                  routeKeys: c,
                  keyPrefix: t ? n.NEXT_INTERCEPTION_MARKER_PREFIX : void 0,
                });
              }
              return s
                ? p({
                    getSafeRouteKey: a,
                    segment: s[1],
                    routeKeys: c,
                    keyPrefix: t ? n.NEXT_QUERY_PARAM_PREFIX : void 0,
                  })
                : "/" + (0, i.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: c,
        };
      }
      function h(e, t) {
        let r = f(e, t);
        return {
          ...d(e),
          namedRegex: "^" + r.namedParameterizedRoute + "(?:/)?$",
          routeKeys: r.routeKeys,
        };
      }
      function m(e, t) {
        let { parameterizedRoute: r } = u(e),
          { catchAll: n = !0 } = t;
        if ("/" === r) return { namedRegex: "^/" + (n ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = f(e, !1);
        return { namedRegex: "^" + o + (n ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    8931: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getSortedRouteObjects: function () {
            return o;
          },
          getSortedRoutes: function () {
            return n;
          },
        });
      class r {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let r = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              r.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            r.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              r.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              r.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            r
          );
        }
        _insert(e, t, n) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (n) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let r = o.slice(1, -1),
              s = !1;
            if (
              (r.startsWith("[") &&
                r.endsWith("]") &&
                ((r = r.slice(1, -1)), (s = !0)),
              r.startsWith("…"))
            )
              throw Error(
                "Detected a three-dot character ('…') at ('" +
                  r +
                  "'). Did you mean ('...')?"
              );
            if (
              (r.startsWith("...") && ((r = r.substring(3)), (n = !0)),
              r.startsWith("[") || r.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  r +
                  "')."
              );
            if (r.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  r +
                  "')."
              );
            function i(e, r) {
              if (null !== e && e !== r)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    r +
                    "')."
                );
              t.forEach((e) => {
                if (e === r)
                  throw Error(
                    'You cannot have the same slug name "' +
                      r +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      r +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(r);
            }
            if (n) {
              if (s) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                i(this.optionalRestSlugName, r),
                  (this.optionalRestSlugName = r),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                i(this.restSlugName, r), (this.restSlugName = r), (o = "[...]");
              }
            } else {
              if (s)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              i(this.slugName, r), (this.slugName = r), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new r()),
            this.children.get(o)._insert(e.slice(1), t, n);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function n(e) {
        let t = new r();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
      function o(e, t) {
        let r = {},
          o = [];
        for (let n = 0; n < e.length; n++) {
          let i = t(e[n]);
          (r[i] = n), (o[n] = i);
        }
        return n(o).map((t) => e[r[t]]);
      }
    },
    1172: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let n = r(2115),
        o = "undefined" == typeof window,
        i = o ? () => {} : n.useLayoutEffect,
        s = o ? () => {} : n.useEffect;
      function l(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function l() {
          if (t && t.mountedInstances) {
            let o = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(o, e));
          }
        }
        if (o) {
          var a;
          null == t || null == (a = t.mountedInstances) || a.add(e.children),
            l();
        }
        return (
          i(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = l),
              () => {
                t && (t._pendingUpdate = l);
              }
            )
          ),
          s(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    2170: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return v;
          },
          MissingStaticPage: function () {
            return b;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return g;
          },
          SP: function () {
            return p;
          },
          ST: function () {
            return f;
          },
          WEB_VITALS: function () {
            return r;
          },
          execOnce: function () {
            return n;
          },
          getDisplayName: function () {
            return a;
          },
          getLocationOrigin: function () {
            return s;
          },
          getURL: function () {
            return l;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return c;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return u;
          },
          stringifyError: function () {
            return y;
          },
        });
      let r = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function n(e) {
        let t,
          r = !1;
        return function () {
          for (var n = arguments.length, o = Array(n), i = 0; i < n; i++)
            o[i] = arguments[i];
          return r || ((r = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function s() {
        let { protocol: e, hostname: t, port: r } = window.location;
        return e + "//" + t + (r ? ":" + r : "");
      }
      function l() {
        let { href: e } = window.location,
          t = s();
        return e.substring(t.length);
      }
      function a(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function c(e) {
        return e.finished || e.headersSent;
      }
      function u(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let r = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let n = await e.getInitialProps(t);
        if (r && c(r)) return n;
        if (!n)
          throw Error(
            '"' +
              a(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              n +
              '" instead.'
          );
        return n;
      }
      let p = "undefined" != typeof performance,
        f =
          p &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class h extends Error {}
      class m extends Error {}
      class g extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class b extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class v extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function y(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    9018: (e) => {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, r = [], n = 0;
          n < e.rangeCount;
          n++
        )
          r.push(e.getRangeAt(n));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                r.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    1027: (e, t, r) => {
      "use strict";
      r.d(t, { F: () => s });
      var n = r(3463);
      let o = (e) => ("boolean" == typeof e ? `${e}` : 0 === e ? "0" : e),
        i = n.$,
        s = (e, t) => (r) => {
          var n;
          if ((null == t ? void 0 : t.variants) == null)
            return i(
              e,
              null == r ? void 0 : r.class,
              null == r ? void 0 : r.className
            );
          let { variants: s, defaultVariants: l } = t,
            a = Object.keys(s).map((e) => {
              let t = null == r ? void 0 : r[e],
                n = null == l ? void 0 : l[e];
              if (null === t) return null;
              let i = o(t) || o(n);
              return s[e][i];
            }),
            c =
              r &&
              Object.entries(r).reduce((e, t) => {
                let [r, n] = t;
                return void 0 === n || (e[r] = n), e;
              }, {});
          return i(
            e,
            a,
            null == t
              ? void 0
              : null === (n = t.compoundVariants) || void 0 === n
              ? void 0
              : n.reduce((e, t) => {
                  let { class: r, className: n, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, r] = e;
                    return Array.isArray(r)
                      ? r.includes({ ...l, ...c }[t])
                      : { ...l, ...c }[t] === r;
                  })
                    ? [...e, r, n]
                    : e;
                }, []),
            null == r ? void 0 : r.class,
            null == r ? void 0 : r.className
          );
        };
    },
    3463: (e, t, r) => {
      "use strict";
      function n() {
        for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++)
          (e = arguments[r]) &&
            (t = (function e(t) {
              var r,
                n,
                o = "";
              if ("string" == typeof t || "number" == typeof t) o += t;
              else if ("object" == typeof t) {
                if (Array.isArray(t)) {
                  var i = t.length;
                  for (r = 0; r < i; r++)
                    t[r] && (n = e(t[r])) && (o && (o += " "), (o += n));
                } else for (n in t) t[n] && (o && (o += " "), (o += n));
              }
              return o;
            })(e)) &&
            (n && (n += " "), (n += t));
        return n;
      }
      r.d(t, { $: () => n });
    },
    4741: (e, t, r) => {
      "use strict";
      function n(e, t, r) {
        return Math.max(e, Math.min(t, r));
      }
      r.d(t, { A: () => u });
      var o = class {
          isRunning = !1;
          value = 0;
          from = 0;
          to = 0;
          currentTime = 0;
          lerp;
          duration;
          easing;
          onUpdate;
          advance(e) {
            if (!this.isRunning) return;
            let t = !1;
            if (this.duration && this.easing) {
              this.currentTime += e;
              let r = n(0, this.currentTime / this.duration, 1),
                o = (t = r >= 1) ? 1 : this.easing(r);
              this.value = this.from + (this.to - this.from) * o;
            } else if (this.lerp) {
              var r, o, i;
              (this.value =
                ((r = this.value),
                (o = this.to),
                (1 - (i = 1 - Math.exp(-(60 * this.lerp) * e))) * r + i * o)),
                Math.round(this.value) === this.to &&
                  ((this.value = this.to), (t = !0));
            } else (this.value = this.to), (t = !0);
            t && this.stop(), this.onUpdate?.(this.value, t);
          }
          stop() {
            this.isRunning = !1;
          }
          fromTo(
            e,
            t,
            { lerp: r, duration: n, easing: o, onStart: i, onUpdate: s }
          ) {
            (this.from = this.value = e),
              (this.to = t),
              (this.lerp = r),
              (this.duration = n),
              (this.easing = o),
              (this.currentTime = 0),
              (this.isRunning = !0),
              i?.(),
              (this.onUpdate = s);
          }
        },
        i = class {
          constructor(e, t, { autoResize: r = !0, debounce: n = 250 } = {}) {
            (this.wrapper = e),
              (this.content = t),
              r &&
                ((this.debouncedResize = (function (e, t) {
                  let r;
                  return function (...n) {
                    let o = this;
                    clearTimeout(r),
                      (r = setTimeout(() => {
                        (r = void 0), e.apply(o, n);
                      }, t));
                  };
                })(this.resize, n)),
                this.wrapper instanceof Window
                  ? window.addEventListener("resize", this.debouncedResize, !1)
                  : ((this.wrapperResizeObserver = new ResizeObserver(
                      this.debouncedResize
                    )),
                    this.wrapperResizeObserver.observe(this.wrapper)),
                (this.contentResizeObserver = new ResizeObserver(
                  this.debouncedResize
                )),
                this.contentResizeObserver.observe(this.content)),
              this.resize();
          }
          width = 0;
          height = 0;
          scrollHeight = 0;
          scrollWidth = 0;
          debouncedResize;
          wrapperResizeObserver;
          contentResizeObserver;
          destroy() {
            this.wrapperResizeObserver?.disconnect(),
              this.contentResizeObserver?.disconnect(),
              this.wrapper === window &&
                this.debouncedResize &&
                window.removeEventListener("resize", this.debouncedResize, !1);
          }
          resize = () => {
            this.onWrapperResize(), this.onContentResize();
          };
          onWrapperResize = () => {
            this.wrapper instanceof Window
              ? ((this.width = window.innerWidth),
                (this.height = window.innerHeight))
              : ((this.width = this.wrapper.clientWidth),
                (this.height = this.wrapper.clientHeight));
          };
          onContentResize = () => {
            this.wrapper instanceof Window
              ? ((this.scrollHeight = this.content.scrollHeight),
                (this.scrollWidth = this.content.scrollWidth))
              : ((this.scrollHeight = this.wrapper.scrollHeight),
                (this.scrollWidth = this.wrapper.scrollWidth));
          };
          get limit() {
            return {
              x: this.scrollWidth - this.width,
              y: this.scrollHeight - this.height,
            };
          }
        },
        s = class {
          events = {};
          emit(e, ...t) {
            let r = this.events[e] || [];
            for (let e = 0, n = r.length; e < n; e++) r[e]?.(...t);
          }
          on(e, t) {
            return (
              this.events[e]?.push(t) || (this.events[e] = [t]),
              () => {
                this.events[e] = this.events[e]?.filter((e) => t !== e);
              }
            );
          }
          off(e, t) {
            this.events[e] = this.events[e]?.filter((e) => t !== e);
          }
          destroy() {
            this.events = {};
          }
        },
        l = 100 / 6,
        a = { passive: !1 },
        c = class {
          constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
            (this.element = e),
              (this.options = t),
              window.addEventListener("resize", this.onWindowResize, !1),
              this.onWindowResize(),
              this.element.addEventListener("wheel", this.onWheel, a),
              this.element.addEventListener("touchstart", this.onTouchStart, a),
              this.element.addEventListener("touchmove", this.onTouchMove, a),
              this.element.addEventListener("touchend", this.onTouchEnd, a);
          }
          touchStart = { x: 0, y: 0 };
          lastDelta = { x: 0, y: 0 };
          window = { width: 0, height: 0 };
          emitter = new s();
          on(e, t) {
            return this.emitter.on(e, t);
          }
          destroy() {
            this.emitter.destroy(),
              window.removeEventListener("resize", this.onWindowResize, !1),
              this.element.removeEventListener("wheel", this.onWheel, a),
              this.element.removeEventListener(
                "touchstart",
                this.onTouchStart,
                a
              ),
              this.element.removeEventListener(
                "touchmove",
                this.onTouchMove,
                a
              ),
              this.element.removeEventListener("touchend", this.onTouchEnd, a);
          }
          onTouchStart = (e) => {
            let { clientX: t, clientY: r } = e.targetTouches
              ? e.targetTouches[0]
              : e;
            (this.touchStart.x = t),
              (this.touchStart.y = r),
              (this.lastDelta = { x: 0, y: 0 }),
              this.emitter.emit("scroll", { deltaX: 0, deltaY: 0, event: e });
          };
          onTouchMove = (e) => {
            let { clientX: t, clientY: r } = e.targetTouches
                ? e.targetTouches[0]
                : e,
              n = -(t - this.touchStart.x) * this.options.touchMultiplier,
              o = -(r - this.touchStart.y) * this.options.touchMultiplier;
            (this.touchStart.x = t),
              (this.touchStart.y = r),
              (this.lastDelta = { x: n, y: o }),
              this.emitter.emit("scroll", { deltaX: n, deltaY: o, event: e });
          };
          onTouchEnd = (e) => {
            this.emitter.emit("scroll", {
              deltaX: this.lastDelta.x,
              deltaY: this.lastDelta.y,
              event: e,
            });
          };
          onWheel = (e) => {
            let { deltaX: t, deltaY: r, deltaMode: n } = e,
              o = 1 === n ? l : 2 === n ? this.window.width : 1,
              i = 1 === n ? l : 2 === n ? this.window.height : 1;
            (t *= o),
              (r *= i),
              (t *= this.options.wheelMultiplier),
              (r *= this.options.wheelMultiplier),
              this.emitter.emit("scroll", { deltaX: t, deltaY: r, event: e });
          };
          onWindowResize = () => {
            this.window = {
              width: window.innerWidth,
              height: window.innerHeight,
            };
          };
        },
        u = class {
          _isScrolling = !1;
          _isStopped = !1;
          _isLocked = !1;
          _preventNextNativeScrollEvent = !1;
          _resetVelocityTimeout = null;
          __rafID = null;
          isTouching;
          time = 0;
          userData = {};
          lastVelocity = 0;
          velocity = 0;
          direction = 0;
          options;
          targetScroll;
          animatedScroll;
          animate = new o();
          emitter = new s();
          dimensions;
          virtualScroll;
          constructor({
            wrapper: e = window,
            content: t = document.documentElement,
            eventsTarget: r = e,
            smoothWheel: n = !0,
            syncTouch: o = !1,
            syncTouchLerp: s = 0.075,
            touchInertiaMultiplier: l = 35,
            duration: a,
            easing: u = (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)),
            lerp: d = 0.1,
            infinite: p = !1,
            orientation: f = "vertical",
            gestureOrientation: h = "vertical",
            touchMultiplier: m = 1,
            wheelMultiplier: g = 1,
            autoResize: b = !0,
            prevent: v,
            virtualScroll: y,
            overscroll: _ = !0,
            autoRaf: w = !1,
            __experimental__naiveDimensions: S = !1,
          } = {}) {
            (window.lenisVersion = "1.1.18"),
              (e && e !== document.documentElement && e !== document.body) ||
                (e = window),
              (this.options = {
                wrapper: e,
                content: t,
                eventsTarget: r,
                smoothWheel: n,
                syncTouch: o,
                syncTouchLerp: s,
                touchInertiaMultiplier: l,
                duration: a,
                easing: u,
                lerp: d,
                infinite: p,
                gestureOrientation: h,
                orientation: f,
                touchMultiplier: m,
                wheelMultiplier: g,
                autoResize: b,
                prevent: v,
                virtualScroll: y,
                overscroll: _,
                autoRaf: w,
                __experimental__naiveDimensions: S,
              }),
              (this.dimensions = new i(e, t, { autoResize: b })),
              this.updateClassName(),
              (this.targetScroll = this.animatedScroll = this.actualScroll),
              this.options.wrapper.addEventListener(
                "scroll",
                this.onNativeScroll,
                !1
              ),
              this.options.wrapper.addEventListener(
                "pointerdown",
                this.onPointerDown,
                !1
              ),
              (this.virtualScroll = new c(r, {
                touchMultiplier: m,
                wheelMultiplier: g,
              })),
              this.virtualScroll.on("scroll", this.onVirtualScroll),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          }
          destroy() {
            this.emitter.destroy(),
              this.options.wrapper.removeEventListener(
                "scroll",
                this.onNativeScroll,
                !1
              ),
              this.options.wrapper.removeEventListener(
                "pointerdown",
                this.onPointerDown,
                !1
              ),
              this.virtualScroll.destroy(),
              this.dimensions.destroy(),
              this.cleanUpClassName(),
              this.__rafID && cancelAnimationFrame(this.__rafID);
          }
          on(e, t) {
            return this.emitter.on(e, t);
          }
          off(e, t) {
            return this.emitter.off(e, t);
          }
          setScroll(e) {
            this.isHorizontal
              ? (this.rootElement.scrollLeft = e)
              : (this.rootElement.scrollTop = e);
          }
          onPointerDown = (e) => {
            1 === e.button && this.reset();
          };
          onVirtualScroll = (e) => {
            if (
              "function" == typeof this.options.virtualScroll &&
              !1 === this.options.virtualScroll(e)
            )
              return;
            let { deltaX: t, deltaY: r, event: n } = e;
            if (
              (this.emitter.emit("virtual-scroll", {
                deltaX: t,
                deltaY: r,
                event: n,
              }),
              n.ctrlKey || n.lenisStopPropagation)
            )
              return;
            let o = n.type.includes("touch"),
              i = n.type.includes("wheel");
            this.isTouching = "touchstart" === n.type || "touchmove" === n.type;
            let s = 0 === t && 0 === r;
            if (
              this.options.syncTouch &&
              o &&
              "touchstart" === n.type &&
              s &&
              !this.isStopped &&
              !this.isLocked
            ) {
              this.reset();
              return;
            }
            let l =
              ("vertical" === this.options.gestureOrientation && 0 === r) ||
              ("horizontal" === this.options.gestureOrientation && 0 === t);
            if (s || l) return;
            let a = n.composedPath();
            a = a.slice(0, a.indexOf(this.rootElement));
            let c = this.options.prevent;
            if (
              a.find(
                (e) =>
                  e instanceof HTMLElement &&
                  (("function" == typeof c && c?.(e)) ||
                    e.hasAttribute?.("data-lenis-prevent") ||
                    (o && e.hasAttribute?.("data-lenis-prevent-touch")) ||
                    (i && e.hasAttribute?.("data-lenis-prevent-wheel")))
              )
            )
              return;
            if (this.isStopped || this.isLocked) {
              n.preventDefault();
              return;
            }
            if (
              !(
                (this.options.syncTouch && o) ||
                (this.options.smoothWheel && i)
              )
            ) {
              (this.isScrolling = "native"),
                this.animate.stop(),
                (n.lenisStopPropagation = !0);
              return;
            }
            let u = r;
            "both" === this.options.gestureOrientation
              ? (u = Math.abs(r) > Math.abs(t) ? r : t)
              : "horizontal" === this.options.gestureOrientation && (u = t),
              (!this.options.overscroll ||
                this.options.infinite ||
                (this.options.wrapper !== window &&
                  ((this.animatedScroll > 0 &&
                    this.animatedScroll < this.limit) ||
                    (0 === this.animatedScroll && r > 0) ||
                    (this.animatedScroll === this.limit && r < 0)))) &&
                (n.lenisStopPropagation = !0),
              n.preventDefault();
            let d = o && this.options.syncTouch,
              p = o && "touchend" === n.type && Math.abs(u) > 5;
            p && (u = this.velocity * this.options.touchInertiaMultiplier),
              this.scrollTo(this.targetScroll + u, {
                programmatic: !1,
                ...(d
                  ? { lerp: p ? this.options.syncTouchLerp : 1 }
                  : {
                      lerp: this.options.lerp,
                      duration: this.options.duration,
                      easing: this.options.easing,
                    }),
              });
          };
          resize() {
            this.dimensions.resize(),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              this.emit();
          }
          emit() {
            this.emitter.emit("scroll", this);
          }
          onNativeScroll = () => {
            if (
              (null !== this._resetVelocityTimeout &&
                (clearTimeout(this._resetVelocityTimeout),
                (this._resetVelocityTimeout = null)),
              this._preventNextNativeScrollEvent)
            ) {
              this._preventNextNativeScrollEvent = !1;
              return;
            }
            if (!1 === this.isScrolling || "native" === this.isScrolling) {
              let e = this.animatedScroll;
              (this.animatedScroll = this.targetScroll = this.actualScroll),
                (this.lastVelocity = this.velocity),
                (this.velocity = this.animatedScroll - e),
                (this.direction = Math.sign(this.animatedScroll - e)),
                this.isStopped || (this.isScrolling = "native"),
                this.emit(),
                0 !== this.velocity &&
                  (this._resetVelocityTimeout = setTimeout(() => {
                    (this.lastVelocity = this.velocity),
                      (this.velocity = 0),
                      (this.isScrolling = !1),
                      this.emit();
                  }, 400));
            }
          };
          reset() {
            (this.isLocked = !1),
              (this.isScrolling = !1),
              (this.animatedScroll = this.targetScroll = this.actualScroll),
              (this.lastVelocity = this.velocity = 0),
              this.animate.stop();
          }
          start() {
            this.isStopped && (this.reset(), (this.isStopped = !1));
          }
          stop() {
            this.isStopped || (this.reset(), (this.isStopped = !0));
          }
          raf = (e) => {
            let t = e - (this.time || e);
            (this.time = e),
              this.animate.advance(0.001 * t),
              this.options.autoRaf &&
                (this.__rafID = requestAnimationFrame(this.raf));
          };
          scrollTo(
            e,
            {
              offset: t = 0,
              immediate: r = !1,
              lock: o = !1,
              duration: i = this.options.duration,
              easing: s = this.options.easing,
              lerp: l = this.options.lerp,
              onStart: a,
              onComplete: c,
              force: u = !1,
              programmatic: d = !0,
              userData: p,
            } = {}
          ) {
            if ((!this.isStopped && !this.isLocked) || u) {
              if ("string" == typeof e && ["top", "left", "start"].includes(e))
                e = 0;
              else if (
                "string" == typeof e &&
                ["bottom", "right", "end"].includes(e)
              )
                e = this.limit;
              else {
                let r;
                if (
                  ("string" == typeof e
                    ? (r = document.querySelector(e))
                    : e instanceof HTMLElement && e?.nodeType && (r = e),
                  r)
                ) {
                  if (this.options.wrapper !== window) {
                    let e = this.rootElement.getBoundingClientRect();
                    t -= this.isHorizontal ? e.left : e.top;
                  }
                  let n = r.getBoundingClientRect();
                  e =
                    (this.isHorizontal ? n.left : n.top) + this.animatedScroll;
                }
              }
              if ("number" == typeof e) {
                if (
                  ((e += t),
                  (e = Math.round(e)),
                  this.options.infinite
                    ? d &&
                      (this.targetScroll = this.animatedScroll = this.scroll)
                    : (e = n(0, e, this.limit)),
                  e === this.targetScroll)
                ) {
                  a?.(this), c?.(this);
                  return;
                }
                if (((this.userData = p ?? {}), r)) {
                  (this.animatedScroll = this.targetScroll = e),
                    this.setScroll(this.scroll),
                    this.reset(),
                    this.preventNextNativeScrollEvent(),
                    this.emit(),
                    c?.(this),
                    (this.userData = {});
                  return;
                }
                d || (this.targetScroll = e),
                  this.animate.fromTo(this.animatedScroll, e, {
                    duration: i,
                    easing: s,
                    lerp: l,
                    onStart: () => {
                      o && (this.isLocked = !0),
                        (this.isScrolling = "smooth"),
                        a?.(this);
                    },
                    onUpdate: (e, t) => {
                      (this.isScrolling = "smooth"),
                        (this.lastVelocity = this.velocity),
                        (this.velocity = e - this.animatedScroll),
                        (this.direction = Math.sign(this.velocity)),
                        (this.animatedScroll = e),
                        this.setScroll(this.scroll),
                        d && (this.targetScroll = e),
                        t || this.emit(),
                        t &&
                          (this.reset(),
                          this.emit(),
                          c?.(this),
                          (this.userData = {}),
                          this.preventNextNativeScrollEvent());
                    },
                  });
              }
            }
          }
          preventNextNativeScrollEvent() {
            (this._preventNextNativeScrollEvent = !0),
              requestAnimationFrame(() => {
                this._preventNextNativeScrollEvent = !1;
              });
          }
          get rootElement() {
            return this.options.wrapper === window
              ? document.documentElement
              : this.options.wrapper;
          }
          get limit() {
            return this.options.__experimental__naiveDimensions
              ? this.isHorizontal
                ? this.rootElement.scrollWidth - this.rootElement.clientWidth
                : this.rootElement.scrollHeight - this.rootElement.clientHeight
              : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
          }
          get isHorizontal() {
            return "horizontal" === this.options.orientation;
          }
          get actualScroll() {
            return this.isHorizontal
              ? this.rootElement.scrollLeft
              : this.rootElement.scrollTop;
          }
          get scroll() {
            var e;
            return this.options.infinite
              ? ((this.animatedScroll % (e = this.limit)) + e) % e
              : this.animatedScroll;
          }
          get progress() {
            return 0 === this.limit ? 1 : this.scroll / this.limit;
          }
          get isScrolling() {
            return this._isScrolling;
          }
          set isScrolling(e) {
            this._isScrolling !== e &&
              ((this._isScrolling = e), this.updateClassName());
          }
          get isStopped() {
            return this._isStopped;
          }
          set isStopped(e) {
            this._isStopped !== e &&
              ((this._isStopped = e), this.updateClassName());
          }
          get isLocked() {
            return this._isLocked;
          }
          set isLocked(e) {
            this._isLocked !== e &&
              ((this._isLocked = e), this.updateClassName());
          }
          get isSmooth() {
            return "smooth" === this.isScrolling;
          }
          get className() {
            let e = "lenis";
            return (
              this.isStopped && (e += " lenis-stopped"),
              this.isLocked && (e += " lenis-locked"),
              this.isScrolling && (e += " lenis-scrolling"),
              "smooth" === this.isScrolling && (e += " lenis-smooth"),
              e
            );
          }
          updateClassName() {
            this.cleanUpClassName(),
              (this.rootElement.className =
                `${this.rootElement.className} ${this.className}`.trim());
          }
          cleanUpClassName() {
            this.rootElement.className = this.rootElement.className
              .replace(/lenis(-\w+)?/g, "")
              .trim();
          }
        };
    },
    9795: (e, t, r) => {
      "use strict";
      r.d(t, { QP: () => q });
      let n = (e) => {
          let t = l(e),
            { conflictingClassGroups: r, conflictingClassGroupModifiers: n } =
              e;
          return {
            getClassGroupId: (e) => {
              let r = e.split("-");
              return (
                "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || s(e)
              );
            },
            getConflictingClassGroupIds: (e, t) => {
              let o = r[e] || [];
              return t && n[e] ? [...o, ...n[e]] : o;
            },
          };
        },
        o = (e, t) => {
          if (0 === e.length) return t.classGroupId;
          let r = e[0],
            n = t.nextPart.get(r),
            i = n ? o(e.slice(1), n) : void 0;
          if (i) return i;
          if (0 === t.validators.length) return;
          let s = e.join("-");
          return t.validators.find(({ validator: e }) => e(s))?.classGroupId;
        },
        i = /^\[(.+)\]$/,
        s = (e) => {
          if (i.test(e)) {
            let t = i.exec(e)[1],
              r = t?.substring(0, t.indexOf(":"));
            if (r) return "arbitrary.." + r;
          }
        },
        l = (e) => {
          let { theme: t, prefix: r } = e,
            n = { nextPart: new Map(), validators: [] };
          return (
            d(Object.entries(e.classGroups), r).forEach(([e, r]) => {
              a(r, n, e, t);
            }),
            n
          );
        },
        a = (e, t, r, n) => {
          e.forEach((e) => {
            if ("string" == typeof e) {
              ("" === e ? t : c(t, e)).classGroupId = r;
              return;
            }
            if ("function" == typeof e) {
              if (u(e)) {
                a(e(n), t, r, n);
                return;
              }
              t.validators.push({ validator: e, classGroupId: r });
              return;
            }
            Object.entries(e).forEach(([e, o]) => {
              a(o, c(t, e), r, n);
            });
          });
        },
        c = (e, t) => {
          let r = e;
          return (
            t.split("-").forEach((e) => {
              r.nextPart.has(e) ||
                r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
                (r = r.nextPart.get(e));
            }),
            r
          );
        },
        u = (e) => e.isThemeGetter,
        d = (e, t) =>
          t
            ? e.map(([e, r]) => [
                e,
                r.map((e) =>
                  "string" == typeof e
                    ? t + e
                    : "object" == typeof e
                    ? Object.fromEntries(
                        Object.entries(e).map(([e, r]) => [t + e, r])
                      )
                    : e
                ),
              ])
            : e,
        p = (e) => {
          if (e < 1) return { get: () => void 0, set: () => {} };
          let t = 0,
            r = new Map(),
            n = new Map(),
            o = (o, i) => {
              r.set(o, i), ++t > e && ((t = 0), (n = r), (r = new Map()));
            };
          return {
            get(e) {
              let t = r.get(e);
              return void 0 !== t
                ? t
                : void 0 !== (t = n.get(e))
                ? (o(e, t), t)
                : void 0;
            },
            set(e, t) {
              r.has(e) ? r.set(e, t) : o(e, t);
            },
          };
        },
        f = (e) => {
          let { separator: t, experimentalParseClassName: r } = e,
            n = 1 === t.length,
            o = t[0],
            i = t.length,
            s = (e) => {
              let r;
              let s = [],
                l = 0,
                a = 0;
              for (let c = 0; c < e.length; c++) {
                let u = e[c];
                if (0 === l) {
                  if (u === o && (n || e.slice(c, c + i) === t)) {
                    s.push(e.slice(a, c)), (a = c + i);
                    continue;
                  }
                  if ("/" === u) {
                    r = c;
                    continue;
                  }
                }
                "[" === u ? l++ : "]" === u && l--;
              }
              let c = 0 === s.length ? e : e.substring(a),
                u = c.startsWith("!"),
                d = u ? c.substring(1) : c;
              return {
                modifiers: s,
                hasImportantModifier: u,
                baseClassName: d,
                maybePostfixModifierPosition: r && r > a ? r - a : void 0,
              };
            };
          return r ? (e) => r({ className: e, parseClassName: s }) : s;
        },
        h = (e) => {
          if (e.length <= 1) return e;
          let t = [],
            r = [];
          return (
            e.forEach((e) => {
              "[" === e[0] ? (t.push(...r.sort(), e), (r = [])) : r.push(e);
            }),
            t.push(...r.sort()),
            t
          );
        },
        m = (e) => ({ cache: p(e.cacheSize), parseClassName: f(e), ...n(e) }),
        g = /\s+/,
        b = (e, t) => {
          let {
              parseClassName: r,
              getClassGroupId: n,
              getConflictingClassGroupIds: o,
            } = t,
            i = [],
            s = e.trim().split(g),
            l = "";
          for (let e = s.length - 1; e >= 0; e -= 1) {
            let t = s[e],
              {
                modifiers: a,
                hasImportantModifier: c,
                baseClassName: u,
                maybePostfixModifierPosition: d,
              } = r(t),
              p = !!d,
              f = n(p ? u.substring(0, d) : u);
            if (!f) {
              if (!p || !(f = n(u))) {
                l = t + (l.length > 0 ? " " + l : l);
                continue;
              }
              p = !1;
            }
            let m = h(a).join(":"),
              g = c ? m + "!" : m,
              b = g + f;
            if (i.includes(b)) continue;
            i.push(b);
            let v = o(f, p);
            for (let e = 0; e < v.length; ++e) {
              let t = v[e];
              i.push(g + t);
            }
            l = t + (l.length > 0 ? " " + l : l);
          }
          return l;
        };
      function v() {
        let e,
          t,
          r = 0,
          n = "";
        for (; r < arguments.length; )
          (e = arguments[r++]) && (t = y(e)) && (n && (n += " "), (n += t));
        return n;
      }
      let y = (e) => {
          let t;
          if ("string" == typeof e) return e;
          let r = "";
          for (let n = 0; n < e.length; n++)
            e[n] && (t = y(e[n])) && (r && (r += " "), (r += t));
          return r;
        },
        _ = (e) => {
          let t = (t) => t[e] || [];
          return (t.isThemeGetter = !0), t;
        },
        w = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        S = /^\d+\/\d+$/,
        x = new Set(["px", "full", "screen"]),
        E = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        R =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        P = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
        O = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
        C =
          /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
        T = (e) => A(e) || x.has(e) || S.test(e),
        N = (e) => X(e, "length", V),
        A = (e) => !!e && !Number.isNaN(Number(e)),
        j = (e) => X(e, "number", A),
        I = (e) => !!e && Number.isInteger(Number(e)),
        M = (e) => e.endsWith("%") && A(e.slice(0, -1)),
        k = (e) => w.test(e),
        z = (e) => E.test(e),
        L = new Set(["length", "size", "percentage"]),
        D = (e) => X(e, L, B),
        U = (e) => X(e, "position", B),
        W = new Set(["image", "url"]),
        F = (e) => X(e, W, $),
        H = (e) => X(e, "", Y),
        G = () => !0,
        X = (e, t, r) => {
          let n = w.exec(e);
          return (
            !!n &&
            (n[1] ? ("string" == typeof t ? n[1] === t : t.has(n[1])) : r(n[2]))
          );
        },
        V = (e) => R.test(e) && !P.test(e),
        B = () => !1,
        Y = (e) => O.test(e),
        $ = (e) => C.test(e);
      Symbol.toStringTag;
      let q = (function (e, ...t) {
        let r, n, o;
        let i = function (l) {
          return (
            (n = (r = m(t.reduce((e, t) => t(e), e()))).cache.get),
            (o = r.cache.set),
            (i = s),
            s(l)
          );
        };
        function s(e) {
          let t = n(e);
          if (t) return t;
          let i = b(e, r);
          return o(e, i), i;
        }
        return function () {
          return i(v.apply(null, arguments));
        };
      })(() => {
        let e = _("colors"),
          t = _("spacing"),
          r = _("blur"),
          n = _("brightness"),
          o = _("borderColor"),
          i = _("borderRadius"),
          s = _("borderSpacing"),
          l = _("borderWidth"),
          a = _("contrast"),
          c = _("grayscale"),
          u = _("hueRotate"),
          d = _("invert"),
          p = _("gap"),
          f = _("gradientColorStops"),
          h = _("gradientColorStopPositions"),
          m = _("inset"),
          g = _("margin"),
          b = _("opacity"),
          v = _("padding"),
          y = _("saturate"),
          w = _("scale"),
          S = _("sepia"),
          x = _("skew"),
          E = _("space"),
          R = _("translate"),
          P = () => ["auto", "contain", "none"],
          O = () => ["auto", "hidden", "clip", "visible", "scroll"],
          C = () => ["auto", k, t],
          L = () => [k, t],
          W = () => ["", T, N],
          X = () => ["auto", A, k],
          V = () => [
            "bottom",
            "center",
            "left",
            "left-bottom",
            "left-top",
            "right",
            "right-bottom",
            "right-top",
            "top",
          ],
          B = () => ["solid", "dashed", "dotted", "double", "none"],
          Y = () => [
            "normal",
            "multiply",
            "screen",
            "overlay",
            "darken",
            "lighten",
            "color-dodge",
            "color-burn",
            "hard-light",
            "soft-light",
            "difference",
            "exclusion",
            "hue",
            "saturation",
            "color",
            "luminosity",
          ],
          $ = () => [
            "start",
            "end",
            "center",
            "between",
            "around",
            "evenly",
            "stretch",
          ],
          q = () => ["", "0", k],
          K = () => [
            "auto",
            "avoid",
            "all",
            "avoid-page",
            "page",
            "left",
            "right",
            "column",
          ],
          Q = () => [A, k];
        return {
          cacheSize: 500,
          separator: ":",
          theme: {
            colors: [G],
            spacing: [T, N],
            blur: ["none", "", z, k],
            brightness: Q(),
            borderColor: [e],
            borderRadius: ["none", "", "full", z, k],
            borderSpacing: L(),
            borderWidth: W(),
            contrast: Q(),
            grayscale: q(),
            hueRotate: Q(),
            invert: q(),
            gap: L(),
            gradientColorStops: [e],
            gradientColorStopPositions: [M, N],
            inset: C(),
            margin: C(),
            opacity: Q(),
            padding: L(),
            saturate: Q(),
            scale: Q(),
            sepia: q(),
            skew: Q(),
            space: L(),
            translate: L(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", k] }],
            container: ["container"],
            columns: [{ columns: [z] }],
            "break-after": [{ "break-after": K() }],
            "break-before": [{ "break-before": K() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none", "start", "end"] }],
            clear: [
              { clear: ["left", "right", "both", "none", "start", "end"] },
            ],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [...V(), k] }],
            overflow: [{ overflow: O() }],
            "overflow-x": [{ "overflow-x": O() }],
            "overflow-y": [{ "overflow-y": O() }],
            overscroll: [{ overscroll: P() }],
            "overscroll-x": [{ "overscroll-x": P() }],
            "overscroll-y": [{ "overscroll-y": P() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [m] }],
            "inset-x": [{ "inset-x": [m] }],
            "inset-y": [{ "inset-y": [m] }],
            start: [{ start: [m] }],
            end: [{ end: [m] }],
            top: [{ top: [m] }],
            right: [{ right: [m] }],
            bottom: [{ bottom: [m] }],
            left: [{ left: [m] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", I, k] }],
            basis: [{ basis: C() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", k] }],
            grow: [{ grow: q() }],
            shrink: [{ shrink: q() }],
            order: [{ order: ["first", "last", "none", I, k] }],
            "grid-cols": [{ "grid-cols": [G] }],
            "col-start-end": [{ col: ["auto", { span: ["full", I, k] }, k] }],
            "col-start": [{ "col-start": X() }],
            "col-end": [{ "col-end": X() }],
            "grid-rows": [{ "grid-rows": [G] }],
            "row-start-end": [{ row: ["auto", { span: [I, k] }, k] }],
            "row-start": [{ "row-start": X() }],
            "row-end": [{ "row-end": X() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", k] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", k] }],
            gap: [{ gap: [p] }],
            "gap-x": [{ "gap-x": [p] }],
            "gap-y": [{ "gap-y": [p] }],
            "justify-content": [{ justify: ["normal", ...$()] }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [{ content: ["normal", ...$(), "baseline"] }],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [{ "place-content": [...$(), "baseline"] }],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [v] }],
            px: [{ px: [v] }],
            py: [{ py: [v] }],
            ps: [{ ps: [v] }],
            pe: [{ pe: [v] }],
            pt: [{ pt: [v] }],
            pr: [{ pr: [v] }],
            pb: [{ pb: [v] }],
            pl: [{ pl: [v] }],
            m: [{ m: [g] }],
            mx: [{ mx: [g] }],
            my: [{ my: [g] }],
            ms: [{ ms: [g] }],
            me: [{ me: [g] }],
            mt: [{ mt: [g] }],
            mr: [{ mr: [g] }],
            mb: [{ mb: [g] }],
            ml: [{ ml: [g] }],
            "space-x": [{ "space-x": [E] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [E] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [
              { w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", k, t] },
            ],
            "min-w": [{ "min-w": [k, t, "min", "max", "fit"] }],
            "max-w": [
              {
                "max-w": [
                  k,
                  t,
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [z] },
                  z,
                ],
              },
            ],
            h: [
              { h: [k, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "min-h": [
              { "min-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            "max-h": [
              { "max-h": [k, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
            ],
            size: [{ size: [k, t, "auto", "min", "max", "fit"] }],
            "font-size": [{ text: ["base", z, N] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  j,
                ],
              },
            ],
            "font-family": [{ font: [G] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  k,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", A, j] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  T,
                  k,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", k] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", k] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [b] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [b] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [...B(), "wavy"] }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", T, N] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", T, k] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
            indent: [{ indent: L() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  k,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", k] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [b] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [...V(), U] }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", D] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  F,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [h] }],
            "gradient-via-pos": [{ via: [h] }],
            "gradient-to-pos": [{ to: [h] }],
            "gradient-from": [{ from: [f] }],
            "gradient-via": [{ via: [f] }],
            "gradient-to": [{ to: [f] }],
            rounded: [{ rounded: [i] }],
            "rounded-s": [{ "rounded-s": [i] }],
            "rounded-e": [{ "rounded-e": [i] }],
            "rounded-t": [{ "rounded-t": [i] }],
            "rounded-r": [{ "rounded-r": [i] }],
            "rounded-b": [{ "rounded-b": [i] }],
            "rounded-l": [{ "rounded-l": [i] }],
            "rounded-ss": [{ "rounded-ss": [i] }],
            "rounded-se": [{ "rounded-se": [i] }],
            "rounded-ee": [{ "rounded-ee": [i] }],
            "rounded-es": [{ "rounded-es": [i] }],
            "rounded-tl": [{ "rounded-tl": [i] }],
            "rounded-tr": [{ "rounded-tr": [i] }],
            "rounded-br": [{ "rounded-br": [i] }],
            "rounded-bl": [{ "rounded-bl": [i] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [b] }],
            "border-style": [{ border: [...B(), "hidden"] }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [b] }],
            "divide-style": [{ divide: B() }],
            "border-color": [{ border: [o] }],
            "border-color-x": [{ "border-x": [o] }],
            "border-color-y": [{ "border-y": [o] }],
            "border-color-s": [{ "border-s": [o] }],
            "border-color-e": [{ "border-e": [o] }],
            "border-color-t": [{ "border-t": [o] }],
            "border-color-r": [{ "border-r": [o] }],
            "border-color-b": [{ "border-b": [o] }],
            "border-color-l": [{ "border-l": [o] }],
            "divide-color": [{ divide: [o] }],
            "outline-style": [{ outline: ["", ...B()] }],
            "outline-offset": [{ "outline-offset": [T, k] }],
            "outline-w": [{ outline: [T, N] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: W() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [b] }],
            "ring-offset-w": [{ "ring-offset": [T, N] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", z, H] }],
            "shadow-color": [{ shadow: [G] }],
            opacity: [{ opacity: [b] }],
            "mix-blend": [
              { "mix-blend": [...Y(), "plus-lighter", "plus-darker"] },
            ],
            "bg-blend": [{ "bg-blend": Y() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [n] }],
            contrast: [{ contrast: [a] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", z, k] }],
            grayscale: [{ grayscale: [c] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [d] }],
            saturate: [{ saturate: [y] }],
            sepia: [{ sepia: [S] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [n] }],
            "backdrop-contrast": [{ "backdrop-contrast": [a] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [d] }],
            "backdrop-opacity": [{ "backdrop-opacity": [b] }],
            "backdrop-saturate": [{ "backdrop-saturate": [y] }],
            "backdrop-sepia": [{ "backdrop-sepia": [S] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [s] }],
            "border-spacing-x": [{ "border-spacing-x": [s] }],
            "border-spacing-y": [{ "border-spacing-y": [s] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  k,
                ],
              },
            ],
            duration: [{ duration: Q() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", k] }],
            delay: [{ delay: Q() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", k] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [w] }],
            "scale-x": [{ "scale-x": [w] }],
            "scale-y": [{ "scale-y": [w] }],
            rotate: [{ rotate: [I, k] }],
            "translate-x": [{ "translate-x": [R] }],
            "translate-y": [{ "translate-y": [R] }],
            "skew-x": [{ "skew-x": [x] }],
            "skew-y": [{ "skew-y": [x] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  k,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: [{ appearance: ["none", "auto"] }],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  k,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": L() }],
            "scroll-mx": [{ "scroll-mx": L() }],
            "scroll-my": [{ "scroll-my": L() }],
            "scroll-ms": [{ "scroll-ms": L() }],
            "scroll-me": [{ "scroll-me": L() }],
            "scroll-mt": [{ "scroll-mt": L() }],
            "scroll-mr": [{ "scroll-mr": L() }],
            "scroll-mb": [{ "scroll-mb": L() }],
            "scroll-ml": [{ "scroll-ml": L() }],
            "scroll-p": [{ "scroll-p": L() }],
            "scroll-px": [{ "scroll-px": L() }],
            "scroll-py": [{ "scroll-py": L() }],
            "scroll-ps": [{ "scroll-ps": L() }],
            "scroll-pe": [{ "scroll-pe": L() }],
            "scroll-pt": [{ "scroll-pt": L() }],
            "scroll-pr": [{ "scroll-pr": L() }],
            "scroll-pb": [{ "scroll-pb": L() }],
            "scroll-pl": [{ "scroll-pl": L() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [{ touch: ["auto", "none", "manipulation"] }],
            "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
            "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", k] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [T, N, j] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [
              { "forced-color-adjust": ["auto", "none"] },
            ],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-s",
              "border-color-e",
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
  },
]);
