/*! shiny 1.8.1.1 | (c) 2012-2024 RStudio, PBC. | License: GPL-3 | file LICENSE */
"use strict";
(function() {
    var Dq = Object.create;
    var rh = Object.defineProperty;
    var Bq = Object.getOwnPropertyDescriptor;
    var Mq = Object.getOwnPropertyNames;
    var Gq = Object.getPrototypeOf
      , Uq = Object.prototype.hasOwnProperty;
    var I = function(e, r) {
        return function() {
            return r || e((r = {
                exports: {}
            }).exports, r),
            r.exports
        }
    };
    var Fq = function(e, r, t, n) {
        if (r && typeof r == "object" || typeof r == "function")
            for (var i = Mq(r), a = 0, f = i.length, c; a < f; a++)
                c = i[a],
                !Uq.call(e, c) && c !== t && rh(e, c, {
                    get: function(l) {
                        return r[l]
                    }
                    .bind(null, c),
                    enumerable: !(n = Bq(r, c)) || n.enumerable
                });
        return e
    };
    var N = function(e, r, t) {
        return t = e != null ? Dq(Gq(e)) : {},
        Fq(r || !e || !e.__esModule ? rh(t, "default", {
            value: e,
            enumerable: !0
        }) : t, e)
    };
    var W = I(function(M6, th) {
        th.exports = window.jQuery
    });
    var X = I(function(F6, uh) {
        var Wo = function(e) {
            return e && e.Math == Math && e
        };
        uh.exports = Wo(typeof globalThis == "object" && globalThis) || Wo(typeof window == "object" && window) || Wo(typeof self == "object" && self) || Wo(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    });
    var K = I(function(V6, sh) {
        sh.exports = function(e) {
            try {
                return !!e()
            } catch (r) {
                return !0
            }
        }
    });
    var ne = I(function(z6, fh) {
        var Vq = K();
        fh.exports = !Vq(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    });
    var Ut = I(function(H6, ch) {
        var zq = K();
        ch.exports = !zq(function() {
            var e = function() {}
            .bind();
            return typeof e != "function" || e.hasOwnProperty("prototype")
        })
    });
    var re = I(function(K6, lh) {
        var Hq = Ut()
          , Yo = Function.prototype.call;
        lh.exports = Hq ? Yo.bind(Yo) : function() {
            return Yo.apply(Yo, arguments)
        }
    });
    var Xo = I(function(hh) {
        "use strict";
        var ph = {}.propertyIsEnumerable
          , vh = Object.getOwnPropertyDescriptor
          , Kq = vh && !ph.call({
            1: 2
        }, 1);
        hh.f = Kq ? function(r) {
            var t = vh(this, r);
            return !!t && t.enumerable
        }
        : ph
    });
    var Ft = I(function(Y6, dh) {
        dh.exports = function(e, r) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: r
            }
        }
    });
    var Y = I(function(X6, gh) {
        var mh = Ut()
          , yh = Function.prototype
          , gs = yh.call
          , Wq = mh && yh.bind.bind(gs, gs);
        gh.exports = mh ? Wq : function(e) {
            return function() {
                return gs.apply(e, arguments)
            }
        }
    });
    var Ue = I(function(Q6, wh) {
        var bh = Y()
          , Yq = bh({}.toString)
          , Xq = bh("".slice);
        wh.exports = function(e) {
            return Xq(Yq(e), 8, -1)
        }
    });
    var ui = I(function(J6, Sh) {
        var Qq = Y()
          , Jq = K()
          , Zq = Ue()
          , bs = Object
          , eT = Qq("".split);
        Sh.exports = Jq(function() {
            return !bs("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Zq(e) == "String" ? eT(e, "") : bs(e)
        }
        : bs
    });
    var Fe = I(function(Z6, Oh) {
        Oh.exports = function(e) {
            return e == null
        }
    });
    var Xe = I(function(eW, _h) {
        var rT = Fe()
          , tT = TypeError;
        _h.exports = function(e) {
            if (rT(e))
                throw tT("Can't call method on " + e);
            return e
        }
    });
    var xe = I(function(rW, Ph) {
        var nT = ui()
          , iT = Xe();
        Ph.exports = function(e) {
            return nT(iT(e))
        }
    });
    var Ss = I(function(tW, Eh) {
        var ws = typeof document == "object" && document.all
          , oT = typeof ws == "undefined" && ws !== void 0;
        Eh.exports = {
            all: ws,
            IS_HTMLDDA: oT
        }
    });
    var Z = I(function(nW, qh) {
        var Ih = Ss()
          , aT = Ih.all;
        qh.exports = Ih.IS_HTMLDDA ? function(e) {
            return typeof e == "function" || e === aT
        }
        : function(e) {
            return typeof e == "function"
        }
    });
    var ae = I(function(iW, xh) {
        var Th = Z()
          , kh = Ss()
          , uT = kh.all;
        xh.exports = kh.IS_HTMLDDA ? function(e) {
            return typeof e == "object" ? e !== null : Th(e) || e === uT
        }
        : function(e) {
            return typeof e == "object" ? e !== null : Th(e)
        }
    });
    var Re = I(function(oW, Rh) {
        var Os = X()
          , sT = Z()
          , fT = function(e) {
            return sT(e) ? e : void 0
        };
        Rh.exports = function(e, r) {
            return arguments.length < 2 ? fT(Os[e]) : Os[e] && Os[e][r]
        }
    });
    var mr = I(function(aW, Ah) {
        var cT = Y();
        Ah.exports = cT({}.isPrototypeOf)
    });
    var si = I(function(uW, $h) {
        $h.exports = typeof navigator != "undefined" && String(navigator.userAgent) || ""
    });
    var Vt = I(function(sW, Bh) {
        var Dh = X(), _s = si(), Nh = Dh.process, jh = Dh.Deno, Lh = Nh && Nh.versions || jh && jh.version, Ch = Lh && Lh.v8, Qe, Qo;
        Ch && (Qe = Ch.split("."),
        Qo = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1]));
        !Qo && _s && (Qe = _s.match(/Edge\/(\d+)/),
        (!Qe || Qe[1] >= 74) && (Qe = _s.match(/Chrome\/(\d+)/),
        Qe && (Qo = +Qe[1])));
        Bh.exports = Qo
    });
    var et = I(function(fW, Gh) {
        var Mh = Vt()
          , lT = K();
        Gh.exports = !!Object.getOwnPropertySymbols && !lT(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Mh && Mh < 41
        })
    });
    var Ps = I(function(cW, Uh) {
        var pT = et();
        Uh.exports = pT && !Symbol.sham && typeof Symbol.iterator == "symbol"
    });
    var zt = I(function(lW, Fh) {
        var vT = Re()
          , hT = Z()
          , dT = mr()
          , mT = Ps()
          , yT = Object;
        Fh.exports = mT ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var r = vT("Symbol");
            return hT(r) && dT(r.prototype, yT(e))
        }
    });
    var rt = I(function(pW, Vh) {
        var gT = String;
        Vh.exports = function(e) {
            try {
                return gT(e)
            } catch (r) {
                return "Object"
            }
        }
    });
    var Ve = I(function(vW, zh) {
        var bT = Z()
          , wT = rt()
          , ST = TypeError;
        zh.exports = function(e) {
            if (bT(e))
                return e;
            throw ST(wT(e) + " is not a function")
        }
    });
    var xr = I(function(hW, Hh) {
        var OT = Ve()
          , _T = Fe();
        Hh.exports = function(e, r) {
            var t = e[r];
            return _T(t) ? void 0 : OT(t)
        }
    });
    var Ts = I(function(dW, Kh) {
        var Es = re()
          , Is = Z()
          , qs = ae()
          , PT = TypeError;
        Kh.exports = function(e, r) {
            var t, n;
            if (r === "string" && Is(t = e.toString) && !qs(n = Es(t, e)) || Is(t = e.valueOf) && !qs(n = Es(t, e)) || r !== "string" && Is(t = e.toString) && !qs(n = Es(t, e)))
                return n;
            throw PT("Can't convert object to primitive value")
        }
    });
    var Ae = I(function(mW, Wh) {
        Wh.exports = !1
    });
    var Jo = I(function(yW, Xh) {
        var Yh = X()
          , ET = Object.defineProperty;
        Xh.exports = function(e, r) {
            try {
                ET(Yh, e, {
                    value: r,
                    configurable: !0,
                    writable: !0
                })
            } catch (t) {
                Yh[e] = r
            }
            return r
        }
    });
    var Zo = I(function(gW, Jh) {
        var IT = X()
          , qT = Jo()
          , Qh = "__core-js_shared__"
          , TT = IT[Qh] || qT(Qh, {});
        Jh.exports = TT
    });
    var tt = I(function(bW, ed) {
        var kT = Ae()
          , Zh = Zo();
        (ed.exports = function(e, r) {
            return Zh[e] || (Zh[e] = r !== void 0 ? r : {})
        }
        )("versions", []).push({
            version: "3.29.0",
            mode: kT ? "pure" : "global",
            copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)",
            license: "https://github.com/zloirock/core-js/blob/v3.29.0/LICENSE",
            source: "https://github.com/zloirock/core-js"
        })
    });
    var Te = I(function(wW, rd) {
        var xT = Xe()
          , RT = Object;
        rd.exports = function(e) {
            return RT(xT(e))
        }
    });
    var ie = I(function(SW, td) {
        var AT = Y()
          , $T = Te()
          , NT = AT({}.hasOwnProperty);
        td.exports = Object.hasOwn || function(r, t) {
            return NT($T(r), t)
        }
    });
    var fi = I(function(OW, nd) {
        var jT = Y()
          , LT = 0
          , CT = Math.random()
          , DT = jT(1.toString);
        nd.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + DT(++LT + CT, 36)
        }
    });
    var ee = I(function(_W, od) {
        var BT = X()
          , MT = tt()
          , id = ie()
          , GT = fi()
          , UT = et()
          , FT = Ps()
          , Ht = BT.Symbol
          , ks = MT("wks")
          , VT = FT ? Ht.for || Ht : Ht && Ht.withoutSetter || GT;
        od.exports = function(e) {
            return id(ks, e) || (ks[e] = UT && id(Ht, e) ? Ht[e] : VT("Symbol." + e)),
            ks[e]
        }
    });
    var xs = I(function(PW, sd) {
        var zT = re()
          , ad = ae()
          , ud = zt()
          , HT = xr()
          , KT = Ts()
          , WT = ee()
          , YT = TypeError
          , XT = WT("toPrimitive");
        sd.exports = function(e, r) {
            if (!ad(e) || ud(e))
                return e;
            var t = HT(e, XT), n;
            if (t) {
                if (r === void 0 && (r = "default"),
                n = zT(t, e, r),
                !ad(n) || ud(n))
                    return n;
                throw YT("Can't convert object to primitive value")
            }
            return r === void 0 && (r = "number"),
            KT(e, r)
        }
    });
    var ci = I(function(EW, fd) {
        var QT = xs()
          , JT = zt();
        fd.exports = function(e) {
            var r = QT(e, "string");
            return JT(r) ? r : r + ""
        }
    });
    var li = I(function(IW, ld) {
        var ZT = X()
          , cd = ae()
          , Rs = ZT.document
          , ek = cd(Rs) && cd(Rs.createElement);
        ld.exports = function(e) {
            return ek ? Rs.createElement(e) : {}
        }
    });
    var As = I(function(qW, pd) {
        var rk = ne()
          , tk = K()
          , nk = li();
        pd.exports = !rk && !tk(function() {
            return Object.defineProperty(nk("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    });
    var Je = I(function(hd) {
        var ik = ne()
          , ok = re()
          , ak = Xo()
          , uk = Ft()
          , sk = xe()
          , fk = ci()
          , ck = ie()
          , lk = As()
          , vd = Object.getOwnPropertyDescriptor;
        hd.f = ik ? vd : function(r, t) {
            if (r = sk(r),
            t = fk(t),
            lk)
                try {
                    return vd(r, t)
                } catch (n) {}
            if (ck(r, t))
                return uk(!ok(ak.f, r, t), r[t])
        }
    });
    var $s = I(function(kW, dd) {
        var pk = ne()
          , vk = K();
        dd.exports = pk && vk(function() {
            return Object.defineProperty(function() {}, "prototype", {
                value: 42,
                writable: !1
            }).prototype != 42
        })
    });
    var te = I(function(xW, md) {
        var hk = ae()
          , dk = String
          , mk = TypeError;
        md.exports = function(e) {
            if (hk(e))
                return e;
            throw mk(dk(e) + " is not an object")
        }
    });
    var be = I(function(gd) {
        var yk = ne()
          , gk = As()
          , bk = $s()
          , ea = te()
          , yd = ci()
          , wk = TypeError
          , Ns = Object.defineProperty
          , Sk = Object.getOwnPropertyDescriptor
          , js = "enumerable"
          , Ls = "configurable"
          , Cs = "writable";
        gd.f = yk ? bk ? function(r, t, n) {
            if (ea(r),
            t = yd(t),
            ea(n),
            typeof r == "function" && t === "prototype" && "value"in n && Cs in n && !n[Cs]) {
                var i = Sk(r, t);
                i && i[Cs] && (r[t] = n.value,
                n = {
                    configurable: Ls in n ? n[Ls] : i[Ls],
                    enumerable: js in n ? n[js] : i[js],
                    writable: !1
                })
            }
            return Ns(r, t, n)
        }
        : Ns : function(r, t, n) {
            if (ea(r),
            t = yd(t),
            ea(n),
            gk)
                try {
                    return Ns(r, t, n)
                } catch (i) {}
            if ("get"in n || "set"in n)
                throw wk("Accessors not supported");
            return "value"in n && (r[t] = n.value),
            r
        }
    });
    var yr = I(function(AW, bd) {
        var Ok = ne()
          , _k = be()
          , Pk = Ft();
        bd.exports = Ok ? function(e, r, t) {
            return _k.f(e, r, Pk(1, t))
        }
        : function(e, r, t) {
            return e[r] = t,
            e
        }
    });
    var nt = I(function($W, Sd) {
        var Ds = ne()
          , Ek = ie()
          , wd = Function.prototype
          , Ik = Ds && Object.getOwnPropertyDescriptor
          , Bs = Ek(wd, "name")
          , qk = Bs && function() {}
        .name === "something"
          , Tk = Bs && (!Ds || Ds && Ik(wd, "name").configurable);
        Sd.exports = {
            EXISTS: Bs,
            PROPER: qk,
            CONFIGURABLE: Tk
        }
    });
    var ra = I(function(NW, Od) {
        var kk = Y()
          , xk = Z()
          , Ms = Zo()
          , Rk = kk(Function.toString);
        xk(Ms.inspectSource) || (Ms.inspectSource = function(e) {
            return Rk(e)
        }
        );
        Od.exports = Ms.inspectSource
    });
    var Gs = I(function(jW, Pd) {
        var Ak = X()
          , $k = Z()
          , _d = Ak.WeakMap;
        Pd.exports = $k(_d) && /native code/.test(String(_d))
    });
    var pi = I(function(LW, Id) {
        var Nk = tt()
          , jk = fi()
          , Ed = Nk("keys");
        Id.exports = function(e) {
            return Ed[e] || (Ed[e] = jk(e))
        }
    });
    var Kt = I(function(CW, qd) {
        qd.exports = {}
    });
    var $e = I(function(DW, xd) {
        var Lk = Gs(), kd = X(), Ck = ae(), Dk = yr(), Us = ie(), Fs = Zo(), Bk = pi(), Mk = Kt(), Td = "Object already initialized", Vs = kd.TypeError, Gk = kd.WeakMap, ta, vi, na, Uk = function(e) {
            return na(e) ? vi(e) : ta(e, {})
        }, Fk = function(e) {
            return function(r) {
                var t;
                if (!Ck(r) || (t = vi(r)).type !== e)
                    throw Vs("Incompatible receiver, " + e + " required");
                return t
            }
        };
        Lk || Fs.state ? (Ze = Fs.state || (Fs.state = new Gk),
        Ze.get = Ze.get,
        Ze.has = Ze.has,
        Ze.set = Ze.set,
        ta = function(e, r) {
            if (Ze.has(e))
                throw Vs(Td);
            return r.facade = e,
            Ze.set(e, r),
            r
        }
        ,
        vi = function(e) {
            return Ze.get(e) || {}
        }
        ,
        na = function(e) {
            return Ze.has(e)
        }
        ) : (it = Bk("state"),
        Mk[it] = !0,
        ta = function(e, r) {
            if (Us(e, it))
                throw Vs(Td);
            return r.facade = e,
            Dk(e, it, r),
            r
        }
        ,
        vi = function(e) {
            return Us(e, it) ? e[it] : {}
        }
        ,
        na = function(e) {
            return Us(e, it)
        }
        );
        var Ze, it;
        xd.exports = {
            set: ta,
            get: vi,
            has: na,
            enforce: Uk,
            getterFor: Fk
        }
    });
    var Ks = I(function(BW, $d) {
        var Hs = Y()
          , Vk = K()
          , zk = Z()
          , ia = ie()
          , zs = ne()
          , Hk = nt().CONFIGURABLE
          , Kk = ra()
          , Ad = $e()
          , Wk = Ad.enforce
          , Yk = Ad.get
          , Rd = String
          , oa = Object.defineProperty
          , Xk = Hs("".slice)
          , Qk = Hs("".replace)
          , Jk = Hs([].join)
          , Zk = zs && !Vk(function() {
            return oa(function() {}, "length", {
                value: 8
            }).length !== 8
        })
          , ex = String(String).split("String")
          , rx = $d.exports = function(e, r, t) {
            Xk(Rd(r), 0, 7) === "Symbol(" && (r = "[" + Qk(Rd(r), /^Symbol\(([^)]*)\)/, "$1") + "]"),
            t && t.getter && (r = "get " + r),
            t && t.setter && (r = "set " + r),
            (!ia(e, "name") || Hk && e.name !== r) && (zs ? oa(e, "name", {
                value: r,
                configurable: !0
            }) : e.name = r),
            Zk && t && ia(t, "arity") && e.length !== t.arity && oa(e, "length", {
                value: t.arity
            });
            try {
                t && ia(t, "constructor") && t.constructor ? zs && oa(e, "prototype", {
                    writable: !1
                }) : e.prototype && (e.prototype = void 0)
            } catch (i) {}
            var n = Wk(e);
            return ia(n, "source") || (n.source = Jk(ex, typeof r == "string" ? r : "")),
            e
        }
        ;
        Function.prototype.toString = rx(function() {
            return zk(this) && Yk(this).source || Kk(this)
        }, "toString")
    });
    var Pe = I(function(MW, Nd) {
        var tx = Z()
          , nx = be()
          , ix = Ks()
          , ox = Jo();
        Nd.exports = function(e, r, t, n) {
            n || (n = {});
            var i = n.enumerable
              , a = n.name !== void 0 ? n.name : r;
            if (tx(t) && ix(t, a, n),
            n.global)
                i ? e[r] = t : ox(r, t);
            else {
                try {
                    n.unsafe ? e[r] && (i = !0) : delete e[r]
                } catch (f) {}
                i ? e[r] = t : nx.f(e, r, {
                    value: t,
                    enumerable: !1,
                    configurable: !n.nonConfigurable,
                    writable: !n.nonWritable
                })
            }
            return e
        }
    });
    var Ld = I(function(GW, jd) {
        var ax = Math.ceil
          , ux = Math.floor;
        jd.exports = Math.trunc || function(r) {
            var t = +r;
            return (t > 0 ? ux : ax)(t)
        }
    });
    var gr = I(function(UW, Cd) {
        var sx = Ld();
        Cd.exports = function(e) {
            var r = +e;
            return r !== r || r === 0 ? 0 : sx(r)
        }
    });
    var ot = I(function(FW, Dd) {
        var fx = gr()
          , cx = Math.max
          , lx = Math.min;
        Dd.exports = function(e, r) {
            var t = fx(e);
            return t < 0 ? cx(t + r, 0) : lx(t, r)
        }
    });
    var fr = I(function(VW, Bd) {
        var px = gr()
          , vx = Math.min;
        Bd.exports = function(e) {
            return e > 0 ? vx(px(e), 9007199254740991) : 0
        }
    });
    var Ne = I(function(zW, Md) {
        var hx = fr();
        Md.exports = function(e) {
            return hx(e.length)
        }
    });
    var Ws = I(function(HW, Ud) {
        var dx = xe()
          , mx = ot()
          , yx = Ne()
          , Gd = function(e) {
            return function(r, t, n) {
                var i = dx(r), a = yx(i), f = mx(n, a), c;
                if (e && t != t) {
                    for (; a > f; )
                        if (c = i[f++],
                        c != c)
                            return !0
                } else
                    for (; a > f; f++)
                        if ((e || f in i) && i[f] === t)
                            return e || f || 0;
                return !e && -1
            }
        };
        Ud.exports = {
            includes: Gd(!0),
            indexOf: Gd(!1)
        }
    });
    var Xs = I(function(KW, Vd) {
        var gx = Y()
          , Ys = ie()
          , bx = xe()
          , wx = Ws().indexOf
          , Sx = Kt()
          , Fd = gx([].push);
        Vd.exports = function(e, r) {
            var t = bx(e), n = 0, i = [], a;
            for (a in t)
                !Ys(Sx, a) && Ys(t, a) && Fd(i, a);
            for (; r.length > n; )
                Ys(t, a = r[n++]) && (~wx(i, a) || Fd(i, a));
            return i
        }
    });
    var aa = I(function(WW, zd) {
        zd.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    });
    var Rr = I(function(Hd) {
        var Ox = Xs()
          , _x = aa()
          , Px = _x.concat("length", "prototype");
        Hd.f = Object.getOwnPropertyNames || function(r) {
            return Ox(r, Px)
        }
    });
    var ua = I(function(Kd) {
        Kd.f = Object.getOwnPropertySymbols
    });
    var Qs = I(function(QW, Wd) {
        var Ex = Re()
          , Ix = Y()
          , qx = Rr()
          , Tx = ua()
          , kx = te()
          , xx = Ix([].concat);
        Wd.exports = Ex("Reflect", "ownKeys") || function(r) {
            var t = qx.f(kx(r))
              , n = Tx.f;
            return n ? xx(t, n(r)) : t
        }
    });
    var Js = I(function(JW, Xd) {
        var Yd = ie()
          , Rx = Qs()
          , Ax = Je()
          , $x = be();
        Xd.exports = function(e, r, t) {
            for (var n = Rx(r), i = $x.f, a = Ax.f, f = 0; f < n.length; f++) {
                var c = n[f];
                !Yd(e, c) && !(t && Yd(t, c)) && i(e, c, a(r, c))
            }
        }
    });
    var Wt = I(function(ZW, Qd) {
        var Nx = K()
          , jx = Z()
          , Lx = /#|\.prototype\./
          , hi = function(e, r) {
            var t = Dx[Cx(e)];
            return t == Mx ? !0 : t == Bx ? !1 : jx(r) ? Nx(r) : !!r
        }
          , Cx = hi.normalize = function(e) {
            return String(e).replace(Lx, ".").toLowerCase()
        }
          , Dx = hi.data = {}
          , Bx = hi.NATIVE = "N"
          , Mx = hi.POLYFILL = "P";
        Qd.exports = hi
    });
    var M = I(function(e4, Jd) {
        var Zs = X()
          , Gx = Je().f
          , Ux = yr()
          , Fx = Pe()
          , Vx = Jo()
          , zx = Js()
          , Hx = Wt();
        Jd.exports = function(e, r) {
            var t = e.target, n = e.global, i = e.stat, a, f, c, l, h, m;
            if (n ? f = Zs : i ? f = Zs[t] || Vx(t, {}) : f = (Zs[t] || {}).prototype,
            f)
                for (c in r) {
                    if (h = r[c],
                    e.dontCallGetSet ? (m = Gx(f, c),
                    l = m && m.value) : l = f[c],
                    a = Hx(n ? c : t + (i ? "." : "#") + c, e.forced),
                    !a && l !== void 0) {
                        if (typeof h == typeof l)
                            continue;
                        zx(h, l)
                    }
                    (e.sham || l && l.sham) && Ux(h, "sham", !0),
                    Fx(f, c, h, e)
                }
        }
    });
    var at = I(function(r4, Zd) {
        var Kx = Ue()
          , Wx = Y();
        Zd.exports = function(e) {
            if (Kx(e) === "Function")
                return Wx(e)
        }
    });
    var Yt = I(function(t4, em) {
        "use strict";
        var Yx = K();
        em.exports = function(e, r) {
            var t = [][e];
            return !!t && Yx(function() {
                t.call(null, r || function() {
                    return 1
                }
                , 1)
            })
        }
    });
    var sa = I(function(n4, nm) {
        var rR = ee()
          , tR = rR("toStringTag")
          , tm = {};
        tm[tR] = "z";
        nm.exports = String(tm) === "[object z]"
    });
    var di = I(function(i4, im) {
        var nR = sa()
          , iR = Z()
          , fa = Ue()
          , oR = ee()
          , aR = oR("toStringTag")
          , uR = Object
          , sR = fa(function() {
            return arguments
        }()) == "Arguments"
          , fR = function(e, r) {
            try {
                return e[r]
            } catch (t) {}
        };
        im.exports = nR ? fa : function(e) {
            var r, t, n;
            return e === void 0 ? "Undefined" : e === null ? "Null" : typeof (t = fR(r = uR(e), aR)) == "string" ? t : sR ? fa(r) : (n = fa(r)) == "Object" && iR(r.callee) ? "Arguments" : n
        }
    });
    var le = I(function(o4, om) {
        var cR = di()
          , lR = String;
        om.exports = function(e) {
            if (cR(e) === "Symbol")
                throw TypeError("Cannot convert a Symbol value to a string");
            return lR(e)
        }
    });
    var mi = I(function(a4, am) {
        am.exports = "	\n\v\f\r \xA0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF"
    });
    var yi = I(function(u4, sm) {
        var pR = Y()
          , vR = Xe()
          , hR = le()
          , tf = mi()
          , um = pR("".replace)
          , dR = RegExp("^[" + tf + "]+")
          , mR = RegExp("(^|[^" + tf + "])[" + tf + "]+$")
          , rf = function(e) {
            return function(r) {
                var t = hR(vR(r));
                return e & 1 && (t = um(t, dR, "")),
                e & 2 && (t = um(t, mR, "$1")),
                t
            }
        };
        sm.exports = {
            start: rf(1),
            end: rf(2),
            trim: rf(3)
        }
    });
    var dm = I(function(s4, hm) {
        var pm = X()
          , yR = K()
          , gR = Y()
          , bR = le()
          , wR = yi().trim
          , fm = mi()
          , gi = pm.parseInt
          , cm = pm.Symbol
          , lm = cm && cm.iterator
          , vm = /^[+-]?0x/i
          , SR = gR(vm.exec)
          , OR = gi(fm + "08") !== 8 || gi(fm + "0x16") !== 22 || lm && !yR(function() {
            gi(Object(lm))
        });
        hm.exports = OR ? function(r, t) {
            var n = wR(bR(r));
            return gi(n, t >>> 0 || (SR(vm, n) ? 16 : 10))
        }
        : gi
    });
    var nf = I(function(f4, ym) {
        "use strict";
        var PR = te();
        ym.exports = function() {
            var e = PR(this)
              , r = "";
            return e.hasIndices && (r += "d"),
            e.global && (r += "g"),
            e.ignoreCase && (r += "i"),
            e.multiline && (r += "m"),
            e.dotAll && (r += "s"),
            e.unicode && (r += "u"),
            e.unicodeSets && (r += "v"),
            e.sticky && (r += "y"),
            r
        }
    });
    var bi = I(function(c4, gm) {
        var of = K()
          , ER = X()
          , af = ER.RegExp
          , uf = of(function() {
            var e = af("a", "y");
            return e.lastIndex = 2,
            e.exec("abcd") != null
        })
          , IR = uf || of(function() {
            return !af("a", "y").sticky
        })
          , qR = uf || of(function() {
            var e = af("^r", "gy");
            return e.lastIndex = 2,
            e.exec("str") != null
        });
        gm.exports = {
            BROKEN_CARET: qR,
            MISSED_STICKY: IR,
            UNSUPPORTED_Y: uf
        }
    });
    var wi = I(function(l4, bm) {
        var TR = Xs()
          , kR = aa();
        bm.exports = Object.keys || function(r) {
            return TR(r, kR)
        }
    });
    var ca = I(function(wm) {
        var xR = ne()
          , RR = $s()
          , AR = be()
          , $R = te()
          , NR = xe()
          , jR = wi();
        wm.f = xR && !RR ? Object.defineProperties : function(r, t) {
            $R(r);
            for (var n = NR(t), i = jR(t), a = i.length, f = 0, c; a > f; )
                AR.f(r, c = i[f++], n[c]);
            return r
        }
    });
    var sf = I(function(v4, Sm) {
        var LR = Re();
        Sm.exports = LR("document", "documentElement")
    });
    var Ar = I(function(h4, Tm) {
        var CR = te(), DR = ca(), Om = aa(), BR = Kt(), MR = sf(), GR = li(), UR = pi(), _m = ">", Pm = "<", cf = "prototype", lf = "script", Im = UR("IE_PROTO"), ff = function() {}, qm = function(e) {
            return Pm + lf + _m + e + Pm + "/" + lf + _m
        }, Em = function(e) {
            e.write(qm("")),
            e.close();
            var r = e.parentWindow.Object;
            return e = null,
            r
        }, FR = function() {
            var e = GR("iframe"), r = "java" + lf + ":", t;
            return e.style.display = "none",
            MR.appendChild(e),
            e.src = String(r),
            t = e.contentWindow.document,
            t.open(),
            t.write(qm("document.F=Object")),
            t.close(),
            t.F
        }, la, pa = function() {
            try {
                la = new ActiveXObject("htmlfile")
            } catch (r) {}
            pa = typeof document != "undefined" ? document.domain && la ? Em(la) : FR() : Em(la);
            for (var e = Om.length; e--; )
                delete pa[cf][Om[e]];
            return pa()
        };
        BR[Im] = !0;
        Tm.exports = Object.create || function(r, t) {
            var n;
            return r !== null ? (ff[cf] = CR(r),
            n = new ff,
            ff[cf] = null,
            n[Im] = r) : n = pa(),
            t === void 0 ? n : DR.f(n, t)
        }
    });
    var pf = I(function(d4, km) {
        var VR = K()
          , zR = X()
          , HR = zR.RegExp;
        km.exports = VR(function() {
            var e = HR(".", "s");
            return !(e.dotAll && e.exec("\n") && e.flags === "s")
        })
    });
    var vf = I(function(m4, xm) {
        var KR = K()
          , WR = X()
          , YR = WR.RegExp;
        xm.exports = KR(function() {
            var e = YR("(?<a>b)", "g");
            return e.exec("b").groups.a !== "b" || "b".replace(e, "$<a>c") !== "bc"
        })
    });
    var Si = I(function(y4, Am) {
        "use strict";
        var Xt = re()
          , ha = Y()
          , XR = le()
          , QR = nf()
          , JR = bi()
          , ZR = tt()
          , e1 = Ar()
          , r1 = $e().get
          , t1 = pf()
          , n1 = vf()
          , i1 = ZR("native-string-replace", String.prototype.replace)
          , va = RegExp.prototype.exec
          , df = va
          , o1 = ha("".charAt)
          , a1 = ha("".indexOf)
          , u1 = ha("".replace)
          , hf = ha("".slice)
          , mf = function() {
            var e = /a/
              , r = /b*/g;
            return Xt(va, e, "a"),
            Xt(va, r, "a"),
            e.lastIndex !== 0 || r.lastIndex !== 0
        }()
          , Rm = JR.BROKEN_CARET
          , yf = /()??/.exec("")[1] !== void 0
          , s1 = mf || yf || Rm || t1 || n1;
        s1 && (df = function(r) {
            var t = this, n = r1(t), i = XR(r), a = n.raw, f, c, l, h, m, y, b;
            if (a)
                return a.lastIndex = t.lastIndex,
                f = Xt(df, a, i),
                t.lastIndex = a.lastIndex,
                f;
            var w = n.groups
              , S = Rm && t.sticky
              , T = Xt(QR, t)
              , k = t.source
              , E = 0
              , P = i;
            if (S && (T = u1(T, "y", ""),
            a1(T, "g") === -1 && (T += "g"),
            P = hf(i, t.lastIndex),
            t.lastIndex > 0 && (!t.multiline || t.multiline && o1(i, t.lastIndex - 1) !== "\n") && (k = "(?: " + k + ")",
            P = " " + P,
            E++),
            c = new RegExp("^(?:" + k + ")",T)),
            yf && (c = new RegExp("^" + k + "$(?!\\s)",T)),
            mf && (l = t.lastIndex),
            h = Xt(va, S ? c : t, P),
            S ? h ? (h.input = hf(h.input, E),
            h[0] = hf(h[0], E),
            h.index = t.lastIndex,
            t.lastIndex += h[0].length) : t.lastIndex = 0 : mf && h && (t.lastIndex = t.global ? h.index + h[0].length : l),
            yf && h && h.length > 1 && Xt(i1, h[0], c, function() {
                for (m = 1; m < arguments.length - 2; m++)
                    arguments[m] === void 0 && (h[m] = void 0)
            }),
            h && w)
                for (h.groups = y = e1(null),
                m = 0; m < w.length; m++)
                    b = w[m],
                    y[b[0]] = h[b[1]];
            return h
        }
        );
        Am.exports = df
    });
    var pe = I(function() {
        "use strict";
        var f1 = M()
          , $m = Si();
        f1({
            target: "RegExp",
            proto: !0,
            forced: /./.exec !== $m
        }, {
            exec: $m
        })
    });
    var Km = I(function(x4, Hm) {
        "use strict";
        var m1 = sa()
          , y1 = di();
        Hm.exports = m1 ? {}.toString : function() {
            return "[object " + y1(this) + "]"
        }
    });
    var Qt = I(function(R4, Wm) {
        var S1 = Ue();
        Wm.exports = typeof process != "undefined" && S1(process) == "process"
    });
    var Xm = I(function(A4, Ym) {
        var O1 = Y()
          , _1 = Ve();
        Ym.exports = function(e, r, t) {
            try {
                return O1(_1(Object.getOwnPropertyDescriptor(e, r)[t]))
            } catch (n) {}
        }
    });
    var Jm = I(function($4, Qm) {
        var P1 = Z()
          , E1 = String
          , I1 = TypeError;
        Qm.exports = function(e) {
            if (typeof e == "object" || P1(e))
                return e;
            throw I1("Can't set " + E1(e) + " as a prototype")
        }
    });
    var Jt = I(function(N4, Zm) {
        var q1 = Xm()
          , T1 = te()
          , k1 = Jm();
        Zm.exports = Object.setPrototypeOf || ("__proto__"in {} ? function() {
            var e = !1, r = {}, t;
            try {
                t = q1(Object.prototype, "__proto__", "set"),
                t(r, []),
                e = r instanceof Array
            } catch (n) {}
            return function(i, a) {
                return T1(i),
                k1(a),
                e ? t(i, a) : i.__proto__ = a,
                i
            }
        }() : void 0)
    });
    var er = I(function(j4, ry) {
        var x1 = be().f
          , R1 = ie()
          , A1 = ee()
          , ey = A1("toStringTag");
        ry.exports = function(e, r, t) {
            e && !t && (e = e.prototype),
            e && !R1(e, ey) && x1(e, ey, {
                configurable: !0,
                value: r
            })
        }
    });
    var $r = I(function(L4, ny) {
        var ty = Ks()
          , $1 = be();
        ny.exports = function(e, r, t) {
            return t.get && ty(t.get, r, {
                getter: !0
            }),
            t.set && ty(t.set, r, {
                setter: !0
            }),
            $1.f(e, r, t)
        }
    });
    var Oi = I(function(C4, oy) {
        "use strict";
        var N1 = Re()
          , j1 = $r()
          , L1 = ee()
          , C1 = ne()
          , iy = L1("species");
        oy.exports = function(e) {
            var r = N1(e);
            C1 && r && !r[iy] && j1(r, iy, {
                configurable: !0,
                get: function() {
                    return this
                }
            })
        }
    });
    var Zt = I(function(D4, ay) {
        var D1 = mr()
          , B1 = TypeError;
        ay.exports = function(e, r) {
            if (D1(r, e))
                return e;
            throw B1("Incorrect invocation")
        }
    });
    var Pi = I(function(B4, ly) {
        var M1 = Y()
          , G1 = K()
          , uy = Z()
          , U1 = di()
          , F1 = Re()
          , V1 = ra()
          , sy = function() {}
          , z1 = []
          , fy = F1("Reflect", "construct")
          , bf = /^\s*(?:class|function)\b/
          , H1 = M1(bf.exec)
          , K1 = !bf.exec(sy)
          , _i = function(r) {
            if (!uy(r))
                return !1;
            try {
                return fy(sy, z1, r),
                !0
            } catch (t) {
                return !1
            }
        }
          , cy = function(r) {
            if (!uy(r))
                return !1;
            switch (U1(r)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
            }
            try {
                return K1 || !!H1(bf, V1(r))
            } catch (t) {
                return !0
            }
        };
        cy.sham = !0;
        ly.exports = !fy || G1(function() {
            var e;
            return _i(_i.call) || !_i(Object) || !_i(function() {
                e = !0
            }) || e
        }) ? cy : _i
    });
    var wf = I(function(M4, py) {
        var W1 = Pi()
          , Y1 = rt()
          , X1 = TypeError;
        py.exports = function(e) {
            if (W1(e))
                return e;
            throw X1(Y1(e) + " is not a constructor")
        }
    });
    var ma = I(function(G4, hy) {
        var vy = te()
          , Q1 = wf()
          , J1 = Fe()
          , Z1 = ee()
          , eA = Z1("species");
        hy.exports = function(e, r) {
            var t = vy(e).constructor, n;
            return t === void 0 || J1(n = vy(t)[eA]) ? r : Q1(n)
        }
    });
    var en = I(function(U4, gy) {
        var rA = Ut()
          , yy = Function.prototype
          , dy = yy.apply
          , my = yy.call;
        gy.exports = typeof Reflect == "object" && Reflect.apply || (rA ? my.bind(dy) : function() {
            return my.apply(dy, arguments)
        }
        )
    });
    var Nr = I(function(F4, wy) {
        var by = at()
          , tA = Ve()
          , nA = Ut()
          , iA = by(by.bind);
        wy.exports = function(e, r) {
            return tA(e),
            r === void 0 ? e : nA ? iA(e, r) : function() {
                return e.apply(r, arguments)
            }
        }
    });
    var Ei = I(function(V4, Sy) {
        var oA = Y();
        Sy.exports = oA([].slice)
    });
    var _y = I(function(z4, Oy) {
        var aA = TypeError;
        Oy.exports = function(e, r) {
            if (e < r)
                throw aA("Not enough arguments");
            return e
        }
    });
    var Sf = I(function(H4, Py) {
        var uA = si();
        Py.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(uA)
    });
    var xf = I(function(K4, $y) {
        var je = X(), sA = en(), fA = Nr(), Ey = Z(), cA = ie(), Ay = K(), Iy = sf(), lA = Ei(), qy = li(), pA = _y(), vA = Sf(), hA = Qt(), qf = je.setImmediate, Tf = je.clearImmediate, dA = je.process, Of = je.Dispatch, mA = je.Function, Ty = je.MessageChannel, yA = je.String, _f = 0, Ii = {}, ky = "onreadystatechange", qi, st, Pf, Ef;
        Ay(function() {
            qi = je.location
        });
        var kf = function(e) {
            if (cA(Ii, e)) {
                var r = Ii[e];
                delete Ii[e],
                r()
            }
        }
          , If = function(e) {
            return function() {
                kf(e)
            }
        }
          , xy = function(e) {
            kf(e.data)
        }
          , Ry = function(e) {
            je.postMessage(yA(e), qi.protocol + "//" + qi.host)
        };
        (!qf || !Tf) && (qf = function(r) {
            pA(arguments.length, 1);
            var t = Ey(r) ? r : mA(r)
              , n = lA(arguments, 1);
            return Ii[++_f] = function() {
                sA(t, void 0, n)
            }
            ,
            st(_f),
            _f
        }
        ,
        Tf = function(r) {
            delete Ii[r]
        }
        ,
        hA ? st = function(e) {
            dA.nextTick(If(e))
        }
        : Of && Of.now ? st = function(e) {
            Of.now(If(e))
        }
        : Ty && !vA ? (Pf = new Ty,
        Ef = Pf.port2,
        Pf.port1.onmessage = xy,
        st = fA(Ef.postMessage, Ef)) : je.addEventListener && Ey(je.postMessage) && !je.importScripts && qi && qi.protocol !== "file:" && !Ay(Ry) ? (st = Ry,
        je.addEventListener("message", xy, !1)) : ky in qy("script") ? st = function(e) {
            Iy.appendChild(qy("script"))[ky] = function() {
                Iy.removeChild(this),
                kf(e)
            }
        }
        : st = function(e) {
            setTimeout(If(e), 0)
        }
        );
        $y.exports = {
            set: qf,
            clear: Tf
        }
    });
    var Rf = I(function(W4, jy) {
        var Ny = function() {
            this.head = null,
            this.tail = null
        };
        Ny.prototype = {
            add: function(e) {
                var r = {
                    item: e,
                    next: null
                }
                  , t = this.tail;
                t ? t.next = r : this.head = r,
                this.tail = r
            },
            get: function() {
                var e = this.head;
                if (e) {
                    var r = this.head = e.next;
                    return r === null && (this.tail = null),
                    e.item
                }
            }
        };
        jy.exports = Ny
    });
    var Cy = I(function(Y4, Ly) {
        var gA = si();
        Ly.exports = /ipad|iphone|ipod/i.test(gA) && typeof Pebble != "undefined"
    });
    var By = I(function(X4, Dy) {
        var bA = si();
        Dy.exports = /web0s(?!.*chrome)/i.test(bA)
    });
    var Ky = I(function(Q4, Hy) {
        var ft = X(), My = Nr(), wA = Je().f, Af = xf().set, SA = Rf(), OA = Sf(), _A = Cy(), PA = By(), $f = Qt(), Gy = ft.MutationObserver || ft.WebKitMutationObserver, Uy = ft.document, Fy = ft.process, ya = ft.Promise, Vy = wA(ft, "queueMicrotask"), Lf = Vy && Vy.value, rn, Nf, jf, ga, zy;
        Lf || (Ti = new SA,
        ki = function() {
            var e, r;
            for ($f && (e = Fy.domain) && e.exit(); r = Ti.get(); )
                try {
                    r()
                } catch (t) {
                    throw Ti.head && rn(),
                    t
                }
            e && e.enter()
        }
        ,
        !OA && !$f && !PA && Gy && Uy ? (Nf = !0,
        jf = Uy.createTextNode(""),
        new Gy(ki).observe(jf, {
            characterData: !0
        }),
        rn = function() {
            jf.data = Nf = !Nf
        }
        ) : !_A && ya && ya.resolve ? (ga = ya.resolve(void 0),
        ga.constructor = ya,
        zy = My(ga.then, ga),
        rn = function() {
            zy(ki)
        }
        ) : $f ? rn = function() {
            Fy.nextTick(ki)
        }
        : (Af = My(Af, ft),
        rn = function() {
            Af(ki)
        }
        ),
        Lf = function(e) {
            Ti.head || rn(),
            Ti.add(e)
        }
        );
        var Ti, ki;
        Hy.exports = Lf
    });
    var Yy = I(function(J4, Wy) {
        Wy.exports = function(e, r) {
            try {
                arguments.length == 1 ? console.error(e) : console.error(e, r)
            } catch (t) {}
        }
    });
    var xi = I(function(Z4, Xy) {
        Xy.exports = function(e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (r) {
                return {
                    error: !0,
                    value: r
                }
            }
        }
    });
    var tn = I(function(eY, Qy) {
        var EA = X();
        Qy.exports = EA.Promise
    });
    var Cf = I(function(rY, Jy) {
        Jy.exports = typeof Deno == "object" && Deno && typeof Deno.version == "object"
    });
    var eg = I(function(tY, Zy) {
        var IA = Cf()
          , qA = Qt();
        Zy.exports = !IA && !qA && typeof window == "object" && typeof document == "object"
    });
    var nn = I(function(nY, ng) {
        var TA = X()
          , Ri = tn()
          , kA = Z()
          , xA = Wt()
          , RA = ra()
          , AA = ee()
          , $A = eg()
          , NA = Cf()
          , jA = Ae()
          , Df = Vt()
          , rg = Ri && Ri.prototype
          , LA = AA("species")
          , Bf = !1
          , tg = kA(TA.PromiseRejectionEvent)
          , CA = xA("Promise", function() {
            var e = RA(Ri)
              , r = e !== String(Ri);
            if (!r && Df === 66 || jA && !(rg.catch && rg.finally))
                return !0;
            if (!Df || Df < 51 || !/native code/.test(e)) {
                var t = new Ri(function(a) {
                    a(1)
                }
                )
                  , n = function(a) {
                    a(function() {}, function() {})
                }
                  , i = t.constructor = {};
                if (i[LA] = n,
                Bf = t.then(function() {})instanceof n,
                !Bf)
                    return !0
            }
            return !r && ($A || NA) && !tg
        });
        ng.exports = {
            CONSTRUCTOR: CA,
            REJECTION_EVENT: tg,
            SUBCLASSING: Bf
        }
    });
    var ct = I(function(iY, og) {
        "use strict";
        var ig = Ve()
          , DA = TypeError
          , BA = function(e) {
            var r, t;
            this.promise = new e(function(n, i) {
                if (r !== void 0 || t !== void 0)
                    throw DA("Bad Promise constructor");
                r = n,
                t = i
            }
            ),
            this.resolve = ig(r),
            this.reject = ig(t)
        };
        og.exports.f = function(e) {
            return new BA(e)
        }
    });
    var Pg = I(function() {
        "use strict";
        var MA = M(), GA = Ae(), Oa = Qt(), jr = X(), sn = re(), ag = Pe(), ug = Jt(), UA = er(), FA = Oi(), VA = Ve(), Sa = Z(), zA = ae(), HA = Zt(), KA = ma(), pg = xf().set, Vf = Ky(), WA = Yy(), YA = xi(), XA = Rf(), vg = $e(), _a = tn(), zf = nn(), hg = ct(), Pa = "Promise", dg = zf.CONSTRUCTOR, QA = zf.REJECTION_EVENT, JA = zf.SUBCLASSING, Mf = vg.getterFor(Pa), ZA = vg.set, on = _a && _a.prototype, lt = _a, ba = on, mg = jr.TypeError, Gf = jr.document, Hf = jr.process, Uf = hg.f, e$ = Uf, r$ = !!(Gf && Gf.createEvent && jr.dispatchEvent), yg = "unhandledrejection", t$ = "rejectionhandled", sg = 0, gg = 1, n$ = 2, Kf = 1, bg = 2, wa, fg, i$, cg, wg = function(e) {
            var r;
            return zA(e) && Sa(r = e.then) ? r : !1
        }, Sg = function(e, r) {
            var t = r.value, n = r.state == gg, i = n ? e.ok : e.fail, a = e.resolve, f = e.reject, c = e.domain, l, h, m;
            try {
                i ? (n || (r.rejection === bg && a$(r),
                r.rejection = Kf),
                i === !0 ? l = t : (c && c.enter(),
                l = i(t),
                c && (c.exit(),
                m = !0)),
                l === e.promise ? f(mg("Promise-chain cycle")) : (h = wg(l)) ? sn(h, l, a, f) : a(l)) : f(t)
            } catch (y) {
                c && !m && c.exit(),
                f(y)
            }
        }, Og = function(e, r) {
            e.notified || (e.notified = !0,
            Vf(function() {
                for (var t = e.reactions, n; n = t.get(); )
                    Sg(n, e);
                e.notified = !1,
                r && !e.rejection && o$(e)
            }))
        }, _g = function(e, r, t) {
            var n, i;
            r$ ? (n = Gf.createEvent("Event"),
            n.promise = r,
            n.reason = t,
            n.initEvent(e, !1, !0),
            jr.dispatchEvent(n)) : n = {
                promise: r,
                reason: t
            },
            !QA && (i = jr["on" + e]) ? i(n) : e === yg && WA("Unhandled promise rejection", t)
        }, o$ = function(e) {
            sn(pg, jr, function() {
                var r = e.facade, t = e.value, n = lg(e), i;
                if (n && (i = YA(function() {
                    Oa ? Hf.emit("unhandledRejection", t, r) : _g(yg, r, t)
                }),
                e.rejection = Oa || lg(e) ? bg : Kf,
                i.error))
                    throw i.value
            })
        }, lg = function(e) {
            return e.rejection !== Kf && !e.parent
        }, a$ = function(e) {
            sn(pg, jr, function() {
                var r = e.facade;
                Oa ? Hf.emit("rejectionHandled", r) : _g(t$, r, e.value)
            })
        }, an = function(e, r, t) {
            return function(n) {
                e(r, n, t)
            }
        }, un = function(e, r, t) {
            e.done || (e.done = !0,
            t && (e = t),
            e.value = r,
            e.state = n$,
            Og(e, !0))
        }, Ff = function(e, r, t) {
            if (!e.done) {
                e.done = !0,
                t && (e = t);
                try {
                    if (e.facade === r)
                        throw mg("Promise can't be resolved itself");
                    var n = wg(r);
                    n ? Vf(function() {
                        var i = {
                            done: !1
                        };
                        try {
                            sn(n, r, an(Ff, i, e), an(un, i, e))
                        } catch (a) {
                            un(i, a, e)
                        }
                    }) : (e.value = r,
                    e.state = gg,
                    Og(e, !1))
                } catch (i) {
                    un({
                        done: !1
                    }, i, e)
                }
            }
        };
        if (dg && (lt = function(r) {
            HA(this, ba),
            VA(r),
            sn(wa, this);
            var t = Mf(this);
            try {
                r(an(Ff, t), an(un, t))
            } catch (n) {
                un(t, n)
            }
        }
        ,
        ba = lt.prototype,
        wa = function(r) {
            ZA(this, {
                type: Pa,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: new XA,
                rejection: !1,
                state: sg,
                value: void 0
            })
        }
        ,
        wa.prototype = ag(ba, "then", function(r, t) {
            var n = Mf(this)
              , i = Uf(KA(this, lt));
            return n.parent = !0,
            i.ok = Sa(r) ? r : !0,
            i.fail = Sa(t) && t,
            i.domain = Oa ? Hf.domain : void 0,
            n.state == sg ? n.reactions.add(i) : Vf(function() {
                Sg(i, n)
            }),
            i.promise
        }),
        fg = function() {
            var e = new wa
              , r = Mf(e);
            this.promise = e,
            this.resolve = an(Ff, r),
            this.reject = an(un, r)
        }
        ,
        hg.f = Uf = function(e) {
            return e === lt || e === i$ ? new fg(e) : e$(e)
        }
        ,
        !GA && Sa(_a) && on !== Object.prototype)) {
            cg = on.then,
            JA || ag(on, "then", function(r, t) {
                var n = this;
                return new lt(function(i, a) {
                    sn(cg, n, i, a)
                }
                ).then(r, t)
            }, {
                unsafe: !0
            });
            try {
                delete on.constructor
            } catch (e) {}
            ug && ug(on, ba)
        }
        MA({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: dg
        }, {
            Promise: lt
        });
        UA(lt, Pa, !1, !0);
        FA(Pa)
    });
    var fn = I(function(uY, Eg) {
        Eg.exports = {}
    });
    var Wf = I(function(sY, Ig) {
        var u$ = ee()
          , s$ = fn()
          , f$ = u$("iterator")
          , c$ = Array.prototype;
        Ig.exports = function(e) {
            return e !== void 0 && (s$.Array === e || c$[f$] === e)
        }
    });
    var Ea = I(function(fY, Tg) {
        var l$ = di()
          , qg = xr()
          , p$ = Fe()
          , v$ = fn()
          , h$ = ee()
          , d$ = h$("iterator");
        Tg.exports = function(e) {
            if (!p$(e))
                return qg(e, d$) || qg(e, "@@iterator") || v$[l$(e)]
        }
    });
    var Yf = I(function(cY, kg) {
        var m$ = re()
          , y$ = Ve()
          , g$ = te()
          , b$ = rt()
          , w$ = Ea()
          , S$ = TypeError;
        kg.exports = function(e, r) {
            var t = arguments.length < 2 ? w$(e) : r;
            if (y$(t))
                return g$(m$(t, e));
            throw S$(b$(e) + " is not iterable")
        }
    });
    var Xf = I(function(lY, Rg) {
        var O$ = re()
          , xg = te()
          , _$ = xr();
        Rg.exports = function(e, r, t) {
            var n, i;
            xg(e);
            try {
                if (n = _$(e, "return"),
                !n) {
                    if (r === "throw")
                        throw t;
                    return t
                }
                n = O$(n, e)
            } catch (a) {
                i = !0,
                n = a
            }
            if (r === "throw")
                throw t;
            if (i)
                throw n;
            return xg(n),
            t
        }
    });
    var pt = I(function(pY, jg) {
        var P$ = Nr()
          , E$ = re()
          , I$ = te()
          , q$ = rt()
          , T$ = Wf()
          , k$ = Ne()
          , Ag = mr()
          , x$ = Yf()
          , R$ = Ea()
          , $g = Xf()
          , A$ = TypeError
          , Ia = function(e, r) {
            this.stopped = e,
            this.result = r
        }
          , Ng = Ia.prototype;
        jg.exports = function(e, r, t) {
            var n = t && t.that, i = !!(t && t.AS_ENTRIES), a = !!(t && t.IS_RECORD), f = !!(t && t.IS_ITERATOR), c = !!(t && t.INTERRUPTED), l = P$(r, n), h, m, y, b, w, S, T, k = function(P) {
                return h && $g(h, "normal", P),
                new Ia(!0,P)
            }, E = function(P) {
                return i ? (I$(P),
                c ? l(P[0], P[1], k) : l(P[0], P[1])) : c ? l(P, k) : l(P)
            };
            if (a)
                h = e.iterator;
            else if (f)
                h = e;
            else {
                if (m = R$(e),
                !m)
                    throw A$(q$(e) + " is not iterable");
                if (T$(m)) {
                    for (y = 0,
                    b = k$(e); b > y; y++)
                        if (w = E(e[y]),
                        w && Ag(Ng, w))
                            return w;
                    return new Ia(!1)
                }
                h = x$(e, m)
            }
            for (S = a ? e.next : h.next; !(T = E$(S, h)).done; ) {
                try {
                    w = E(T.value)
                } catch (P) {
                    $g(h, "throw", P)
                }
                if (typeof w == "object" && w && Ag(Ng, w))
                    return w
            }
            return new Ia(!1)
        }
    });
    var qa = I(function(vY, Bg) {
        var $$ = ee()
          , Cg = $$("iterator")
          , Dg = !1;
        try {
            Lg = 0,
            Qf = {
                next: function() {
                    return {
                        done: !!Lg++
                    }
                },
                return: function() {
                    Dg = !0
                }
            },
            Qf[Cg] = function() {
                return this
            }
            ,
            Array.from(Qf, function() {
                throw 2
            })
        } catch (e) {}
        var Lg, Qf;
        Bg.exports = function(e, r) {
            if (!r && !Dg)
                return !1;
            var t = !1;
            try {
                var n = {};
                n[Cg] = function() {
                    return {
                        next: function() {
                            return {
                                done: t = !0
                            }
                        }
                    }
                }
                ,
                e(n)
            } catch (i) {}
            return t
        }
    });
    var Ta = I(function(hY, Mg) {
        var N$ = tn()
          , j$ = qa()
          , L$ = nn().CONSTRUCTOR;
        Mg.exports = L$ || !j$(function(e) {
            N$.all(e).then(void 0, function() {})
        })
    });
    var Gg = I(function() {
        "use strict";
        var C$ = M()
          , D$ = re()
          , B$ = Ve()
          , M$ = ct()
          , G$ = xi()
          , U$ = pt()
          , F$ = Ta();
        C$({
            target: "Promise",
            stat: !0,
            forced: F$
        }, {
            all: function(r) {
                var t = this
                  , n = M$.f(t)
                  , i = n.resolve
                  , a = n.reject
                  , f = G$(function() {
                    var c = B$(t.resolve)
                      , l = []
                      , h = 0
                      , m = 1;
                    U$(r, function(y) {
                        var b = h++
                          , w = !1;
                        m++,
                        D$(c, t, y).then(function(S) {
                            w || (w = !0,
                            l[b] = S,
                            --m || i(l))
                        }, a)
                    }),
                    --m || i(l)
                });
                return f.error && a(f.value),
                n.promise
            }
        })
    });
    var Fg = I(function() {
        "use strict";
        var V$ = M()
          , z$ = Ae()
          , H$ = nn().CONSTRUCTOR
          , Zf = tn()
          , K$ = Re()
          , W$ = Z()
          , Y$ = Pe()
          , Ug = Zf && Zf.prototype;
        V$({
            target: "Promise",
            proto: !0,
            forced: H$,
            real: !0
        }, {
            catch: function(e) {
                return this.then(void 0, e)
            }
        });
        !z$ && W$(Zf) && (Jf = K$("Promise").prototype.catch,
        Ug.catch !== Jf && Y$(Ug, "catch", Jf, {
            unsafe: !0
        }));
        var Jf
    });
    var Vg = I(function() {
        "use strict";
        var X$ = M()
          , Q$ = re()
          , J$ = Ve()
          , Z$ = ct()
          , eN = xi()
          , rN = pt()
          , tN = Ta();
        X$({
            target: "Promise",
            stat: !0,
            forced: tN
        }, {
            race: function(r) {
                var t = this
                  , n = Z$.f(t)
                  , i = n.reject
                  , a = eN(function() {
                    var f = J$(t.resolve);
                    rN(r, function(c) {
                        Q$(f, t, c).then(n.resolve, i)
                    })
                });
                return a.error && i(a.value),
                n.promise
            }
        })
    });
    var zg = I(function() {
        "use strict";
        var nN = M()
          , iN = re()
          , oN = ct()
          , aN = nn().CONSTRUCTOR;
        nN({
            target: "Promise",
            stat: !0,
            forced: aN
        }, {
            reject: function(r) {
                var t = oN.f(this);
                return iN(t.reject, void 0, r),
                t.promise
            }
        })
    });
    var Kg = I(function(_Y, Hg) {
        var uN = te()
          , sN = ae()
          , fN = ct();
        Hg.exports = function(e, r) {
            if (uN(e),
            sN(r) && r.constructor === e)
                return r;
            var t = fN.f(e)
              , n = t.resolve;
            return n(r),
            t.promise
        }
    });
    var Xg = I(function() {
        "use strict";
        var cN = M()
          , lN = Re()
          , Wg = Ae()
          , pN = tn()
          , Yg = nn().CONSTRUCTOR
          , vN = Kg()
          , hN = lN("Promise")
          , dN = Wg && !Yg;
        cN({
            target: "Promise",
            stat: !0,
            forced: Wg || Yg
        }, {
            resolve: function(r) {
                return vN(dN && this === hN ? pN : this, r)
            }
        })
    });
    var vt = I(function(IY, Jg) {
        "use strict";
        var gN = ci()
          , bN = be()
          , wN = Ft();
        Jg.exports = function(e, r, t) {
            var n = gN(r);
            n in e ? bN.f(e, n, wN(0, t)) : e[n] = t
        }
    });
    var ka = I(function(qY, eb) {
        var Zg = ot()
          , SN = Ne()
          , ON = vt()
          , _N = Array
          , PN = Math.max;
        eb.exports = function(e, r, t) {
            for (var n = SN(e), i = Zg(r, n), a = Zg(t === void 0 ? n : t, n), f = _N(PN(a - i, 0)), c = 0; i < a; i++,
            c++)
                ON(f, c, e[i]);
            return f.length = c,
            f
        }
    });
    var xa = I(function(TY, nb) {
        var EN = Ue()
          , IN = xe()
          , rb = Rr().f
          , qN = ka()
          , tb = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : []
          , TN = function(e) {
            try {
                return rb(e)
            } catch (r) {
                return qN(tb)
            }
        };
        nb.exports.f = function(r) {
            return tb && EN(r) == "Window" ? TN(r) : rb(IN(r))
        }
    });
    var ec = I(function(ib) {
        var kN = ee();
        ib.f = kN
    });
    var rc = I(function(xY, ob) {
        var xN = X();
        ob.exports = xN
    });
    var cn = I(function(RY, ub) {
        var ab = rc()
          , RN = ie()
          , AN = ec()
          , $N = be().f;
        ub.exports = function(e) {
            var r = ab.Symbol || (ab.Symbol = {});
            RN(r, e) || $N(r, e, {
                value: AN.f(e)
            })
        }
    });
    var tc = I(function(AY, sb) {
        var NN = re()
          , jN = Re()
          , LN = ee()
          , CN = Pe();
        sb.exports = function() {
            var e = jN("Symbol")
              , r = e && e.prototype
              , t = r && r.valueOf
              , n = LN("toPrimitive");
            r && !r[n] && CN(r, n, function(i) {
                return NN(t, this)
            }, {
                arity: 1
            })
        }
    });
    var Lr = I(function($Y, fb) {
        var DN = Ue();
        fb.exports = Array.isArray || function(r) {
            return DN(r) == "Array"
        }
    });
    var vb = I(function(NY, pb) {
        var cb = Lr()
          , BN = Pi()
          , MN = ae()
          , GN = ee()
          , UN = GN("species")
          , lb = Array;
        pb.exports = function(e) {
            var r;
            return cb(e) && (r = e.constructor,
            BN(r) && (r === lb || cb(r.prototype)) ? r = void 0 : MN(r) && (r = r[UN],
            r === null && (r = void 0))),
            r === void 0 ? lb : r
        }
    });
    var Ai = I(function(jY, hb) {
        var FN = vb();
        hb.exports = function(e, r) {
            return new (FN(e))(r === 0 ? 0 : r)
        }
    });
    var Dr = I(function(LY, mb) {
        var VN = Nr()
          , zN = Y()
          , HN = ui()
          , KN = Te()
          , WN = Ne()
          , YN = Ai()
          , db = zN([].push)
          , Cr = function(e) {
            var r = e == 1
              , t = e == 2
              , n = e == 3
              , i = e == 4
              , a = e == 6
              , f = e == 7
              , c = e == 5 || a;
            return function(l, h, m, y) {
                for (var b = KN(l), w = HN(b), S = VN(h, m), T = WN(w), k = 0, E = y || YN, P = r ? E(l, T) : t || f ? E(l, 0) : void 0, $, R; T > k; k++)
                    if ((c || k in w) && ($ = w[k],
                    R = S($, k, b),
                    e))
                        if (r)
                            P[k] = R;
                        else if (R)
                            switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return $;
                            case 6:
                                return k;
                            case 2:
                                db(P, $)
                            }
                        else
                            switch (e) {
                            case 4:
                                return !1;
                            case 7:
                                db(P, $)
                            }
                return a ? -1 : n || i ? i : P
            }
        };
        mb.exports = {
            forEach: Cr(0),
            map: Cr(1),
            filter: Cr(2),
            some: Cr(3),
            every: Cr(4),
            find: Cr(5),
            findIndex: Cr(6),
            filterReject: Cr(7)
        }
    });
    var Ab = I(function() {
        "use strict";
        var Ra = M()
          , lc = X()
          , pc = re()
          , XN = Y()
          , QN = Ae()
          , ln = ne()
          , pn = et()
          , JN = K()
          , he = ie()
          , ZN = mr()
          , ac = te()
          , Aa = xe()
          , vc = ci()
          , ej = le()
          , uc = Ft()
          , Ni = Ar()
          , bb = wi()
          , rj = Rr()
          , wb = xa()
          , tj = ua()
          , Sb = Je()
          , Ob = be()
          , nj = ca()
          , _b = Xo()
          , nc = Pe()
          , ij = $r()
          , hc = tt()
          , oj = pi()
          , Pb = Kt()
          , yb = fi()
          , aj = ee()
          , uj = ec()
          , sj = cn()
          , fj = tc()
          , cj = er()
          , Eb = $e()
          , $a = Dr().forEach
          , ke = oj("hidden")
          , Na = "Symbol"
          , ji = "prototype"
          , lj = Eb.set
          , gb = Eb.getterFor(Na)
          , ze = Object[ji]
          , dt = lc.Symbol
          , $i = dt && dt[ji]
          , pj = lc.TypeError
          , ic = lc.QObject
          , Ib = Sb.f
          , ht = Ob.f
          , qb = wb.f
          , vj = _b.f
          , Tb = XN([].push)
          , br = hc("symbols")
          , Li = hc("op-symbols")
          , hj = hc("wks")
          , sc = !ic || !ic[ji] || !ic[ji].findChild
          , fc = ln && JN(function() {
            return Ni(ht({}, "a", {
                get: function() {
                    return ht(this, "a", {
                        value: 7
                    }).a
                }
            })).a != 7
        }) ? function(e, r, t) {
            var n = Ib(ze, r);
            n && delete ze[r],
            ht(e, r, t),
            n && e !== ze && ht(ze, r, n)
        }
        : ht
          , oc = function(e, r) {
            var t = br[e] = Ni($i);
            return lj(t, {
                type: Na,
                tag: e,
                description: r
            }),
            ln || (t.description = r),
            t
        }
          , ja = function(r, t, n) {
            r === ze && ja(Li, t, n),
            ac(r);
            var i = vc(t);
            return ac(n),
            he(br, i) ? (n.enumerable ? (he(r, ke) && r[ke][i] && (r[ke][i] = !1),
            n = Ni(n, {
                enumerable: uc(0, !1)
            })) : (he(r, ke) || ht(r, ke, uc(1, {})),
            r[ke][i] = !0),
            fc(r, i, n)) : ht(r, i, n)
        }
          , dc = function(r, t) {
            ac(r);
            var n = Aa(t)
              , i = bb(n).concat(Rb(n));
            return $a(i, function(a) {
                (!ln || pc(cc, n, a)) && ja(r, a, n[a])
            }),
            r
        }
          , dj = function(r, t) {
            return t === void 0 ? Ni(r) : dc(Ni(r), t)
        }
          , cc = function(r) {
            var t = vc(r)
              , n = pc(vj, this, t);
            return this === ze && he(br, t) && !he(Li, t) ? !1 : n || !he(this, t) || !he(br, t) || he(this, ke) && this[ke][t] ? n : !0
        }
          , kb = function(r, t) {
            var n = Aa(r)
              , i = vc(t);
            if (!(n === ze && he(br, i) && !he(Li, i))) {
                var a = Ib(n, i);
                return a && he(br, i) && !(he(n, ke) && n[ke][i]) && (a.enumerable = !0),
                a
            }
        }
          , xb = function(r) {
            var t = qb(Aa(r))
              , n = [];
            return $a(t, function(i) {
                !he(br, i) && !he(Pb, i) && Tb(n, i)
            }),
            n
        }
          , Rb = function(e) {
            var r = e === ze
              , t = qb(r ? Li : Aa(e))
              , n = [];
            return $a(t, function(i) {
                he(br, i) && (!r || he(ze, i)) && Tb(n, br[i])
            }),
            n
        };
        pn || (dt = function() {
            if (ZN($i, this))
                throw pj("Symbol is not a constructor");
            var r = !arguments.length || arguments[0] === void 0 ? void 0 : ej(arguments[0])
              , t = yb(r)
              , n = function(i) {
                this === ze && pc(n, Li, i),
                he(this, ke) && he(this[ke], t) && (this[ke][t] = !1),
                fc(this, t, uc(1, i))
            };
            return ln && sc && fc(ze, t, {
                configurable: !0,
                set: n
            }),
            oc(t, r)
        }
        ,
        $i = dt[ji],
        nc($i, "toString", function() {
            return gb(this).tag
        }),
        nc(dt, "withoutSetter", function(e) {
            return oc(yb(e), e)
        }),
        _b.f = cc,
        Ob.f = ja,
        nj.f = dc,
        Sb.f = kb,
        rj.f = wb.f = xb,
        tj.f = Rb,
        uj.f = function(e) {
            return oc(aj(e), e)
        }
        ,
        ln && (ij($i, "description", {
            configurable: !0,
            get: function() {
                return gb(this).description
            }
        }),
        QN || nc(ze, "propertyIsEnumerable", cc, {
            unsafe: !0
        })));
        Ra({
            global: !0,
            constructor: !0,
            wrap: !0,
            forced: !pn,
            sham: !pn
        }, {
            Symbol: dt
        });
        $a(bb(hj), function(e) {
            sj(e)
        });
        Ra({
            target: Na,
            stat: !0,
            forced: !pn
        }, {
            useSetter: function() {
                sc = !0
            },
            useSimple: function() {
                sc = !1
            }
        });
        Ra({
            target: "Object",
            stat: !0,
            forced: !pn,
            sham: !ln
        }, {
            create: dj,
            defineProperty: ja,
            defineProperties: dc,
            getOwnPropertyDescriptor: kb
        });
        Ra({
            target: "Object",
            stat: !0,
            forced: !pn
        }, {
            getOwnPropertyNames: xb
        });
        fj();
        cj(dt, Na);
        Pb[ke] = !0
    });
    var mc = I(function(BY, $b) {
        var mj = et();
        $b.exports = mj && !!Symbol.for && !!Symbol.keyFor
    });
    var jb = I(function() {
        var yj = M()
          , gj = Re()
          , bj = ie()
          , wj = le()
          , Nb = tt()
          , Sj = mc()
          , yc = Nb("string-to-symbol-registry")
          , Oj = Nb("symbol-to-string-registry");
        yj({
            target: "Symbol",
            stat: !0,
            forced: !Sj
        }, {
            for: function(e) {
                var r = wj(e);
                if (bj(yc, r))
                    return yc[r];
                var t = gj("Symbol")(r);
                return yc[r] = t,
                Oj[t] = r,
                t
            }
        })
    });
    var Cb = I(function() {
        var _j = M()
          , Pj = ie()
          , Ej = zt()
          , Ij = rt()
          , qj = tt()
          , Tj = mc()
          , Lb = qj("symbol-to-string-registry");
        _j({
            target: "Symbol",
            stat: !0,
            forced: !Tj
        }, {
            keyFor: function(r) {
                if (!Ej(r))
                    throw TypeError(Ij(r) + " is not a symbol");
                if (Pj(Lb, r))
                    return Lb[r]
            }
        })
    });
    var Ub = I(function(VY, Gb) {
        var kj = Y()
          , Db = Lr()
          , xj = Z()
          , Bb = Ue()
          , Rj = le()
          , Mb = kj([].push);
        Gb.exports = function(e) {
            if (xj(e))
                return e;
            if (!!Db(e)) {
                for (var r = e.length, t = [], n = 0; n < r; n++) {
                    var i = e[n];
                    typeof i == "string" ? Mb(t, i) : (typeof i == "number" || Bb(i) == "Number" || Bb(i) == "String") && Mb(t, Rj(i))
                }
                var a = t.length
                  , f = !0;
                return function(c, l) {
                    if (f)
                        return f = !1,
                        l;
                    if (Db(this))
                        return l;
                    for (var h = 0; h < a; h++)
                        if (t[h] === c)
                            return l
                }
            }
        }
    });
    var vn = I(function() {
        var Aj = M()
          , Xb = Re()
          , Qb = en()
          , $j = re()
          , Ci = Y()
          , Jb = K()
          , Fb = Z()
          , Vb = zt()
          , Zb = Ei()
          , Nj = Ub()
          , jj = et()
          , Lj = String
          , Br = Xb("JSON", "stringify")
          , La = Ci(/./.exec)
          , zb = Ci("".charAt)
          , Cj = Ci("".charCodeAt)
          , Dj = Ci("".replace)
          , Bj = Ci(1.toString)
          , Mj = /[\uD800-\uDFFF]/g
          , Hb = /^[\uD800-\uDBFF]$/
          , Kb = /^[\uDC00-\uDFFF]$/
          , Wb = !jj || Jb(function() {
            var e = Xb("Symbol")();
            return Br([e]) != "[null]" || Br({
                a: e
            }) != "{}" || Br(Object(e)) != "{}"
        })
          , Yb = Jb(function() {
            return Br("\uDF06\uD834") !== '"\\udf06\\ud834"' || Br("\uDEAD") !== '"\\udead"'
        })
          , Gj = function(e, r) {
            var t = Zb(arguments)
              , n = Nj(r);
            if (!(!Fb(n) && (e === void 0 || Vb(e))))
                return t[1] = function(i, a) {
                    if (Fb(n) && (a = $j(n, this, Lj(i), a)),
                    !Vb(a))
                        return a
                }
                ,
                Qb(Br, null, t)
        }
          , Uj = function(e, r, t) {
            var n = zb(t, r - 1)
              , i = zb(t, r + 1);
            return La(Hb, e) && !La(Kb, i) || La(Kb, e) && !La(Hb, n) ? "\\u" + Bj(Cj(e, 0), 16) : e
        };
        Br && Aj({
            target: "JSON",
            stat: !0,
            arity: 3,
            forced: Wb || Yb
        }, {
            stringify: function(r, t, n) {
                var i = Zb(arguments)
                  , a = Qb(Wb ? Gj : Br, null, i);
                return Yb && typeof a == "string" ? Dj(a, Mj, Uj) : a
            }
        })
    });
    var rw = I(function() {
        var Fj = M()
          , Vj = et()
          , zj = K()
          , ew = ua()
          , Hj = Te()
          , Kj = !Vj || zj(function() {
            ew.f(1)
        });
        Fj({
            target: "Object",
            stat: !0,
            forced: Kj
        }, {
            getOwnPropertySymbols: function(r) {
                var t = ew.f;
                return t ? t(Hj(r)) : []
            }
        })
    });
    var Bi = I(function(YY, sw) {
        var iL = ee()
          , oL = Ar()
          , aL = be().f
          , bc = iL("unscopables")
          , wc = Array.prototype;
        wc[bc] == null && aL(wc, bc, {
            configurable: !0,
            value: oL(null)
        });
        sw.exports = function(e) {
            wc[bc][e] = !0
        }
    });
    var Sc = I(function(XY, fw) {
        var uL = K();
        fw.exports = !uL(function() {
            function e() {}
            return e.prototype.constructor = null,
            Object.getPrototypeOf(new e) !== e.prototype
        })
    });
    var hn = I(function(QY, lw) {
        var sL = ie()
          , fL = Z()
          , cL = Te()
          , lL = pi()
          , pL = Sc()
          , cw = lL("IE_PROTO")
          , Oc = Object
          , vL = Oc.prototype;
        lw.exports = pL ? Oc.getPrototypeOf : function(e) {
            var r = cL(e);
            if (sL(r, cw))
                return r[cw];
            var t = r.constructor;
            return fL(t) && r instanceof t ? t.prototype : r instanceof Oc ? vL : null
        }
    });
    var Ic = I(function(JY, hw) {
        "use strict";
        var hL = K(), dL = Z(), mL = ae(), yL = Ar(), pw = hn(), gL = Pe(), bL = ee(), wL = Ae(), Ec = bL("iterator"), vw = !1, Sr, _c, Pc;
        [].keys && (Pc = [].keys(),
        "next"in Pc ? (_c = pw(pw(Pc)),
        _c !== Object.prototype && (Sr = _c)) : vw = !0);
        var SL = !mL(Sr) || hL(function() {
            var e = {};
            return Sr[Ec].call(e) !== e
        });
        SL ? Sr = {} : wL && (Sr = yL(Sr));
        dL(Sr[Ec]) || gL(Sr, Ec, function() {
            return this
        });
        hw.exports = {
            IteratorPrototype: Sr,
            BUGGY_SAFARI_ITERATORS: vw
        }
    });
    var mw = I(function(ZY, dw) {
        "use strict";
        var OL = Ic().IteratorPrototype
          , _L = Ar()
          , PL = Ft()
          , EL = er()
          , IL = fn()
          , qL = function() {
            return this
        };
        dw.exports = function(e, r, t, n) {
            var i = r + " Iterator";
            return e.prototype = _L(OL, {
                next: PL(+!n, t)
            }),
            EL(e, i, !1, !0),
            IL[i] = qL,
            e
        }
    });
    var Ma = I(function(e7, Iw) {
        "use strict";
        var TL = M()
          , kL = re()
          , Da = Ae()
          , Pw = nt()
          , xL = Z()
          , RL = mw()
          , yw = hn()
          , gw = Jt()
          , AL = er()
          , $L = yr()
          , qc = Pe()
          , NL = ee()
          , bw = fn()
          , Ew = Ic()
          , jL = Pw.PROPER
          , LL = Pw.CONFIGURABLE
          , ww = Ew.IteratorPrototype
          , Ba = Ew.BUGGY_SAFARI_ITERATORS
          , Mi = NL("iterator")
          , Sw = "keys"
          , Gi = "values"
          , Ow = "entries"
          , _w = function() {
            return this
        };
        Iw.exports = function(e, r, t, n, i, a, f) {
            RL(t, r, n);
            var c = function(E) {
                if (E === i && b)
                    return b;
                if (!Ba && E in m)
                    return m[E];
                switch (E) {
                case Sw:
                    return function() {
                        return new t(this,E)
                    }
                    ;
                case Gi:
                    return function() {
                        return new t(this,E)
                    }
                    ;
                case Ow:
                    return function() {
                        return new t(this,E)
                    }
                }
                return function() {
                    return new t(this)
                }
            }, l = r + " Iterator", h = !1, m = e.prototype, y = m[Mi] || m["@@iterator"] || i && m[i], b = !Ba && y || c(i), w = r == "Array" && m.entries || y, S, T, k;
            if (w && (S = yw(w.call(new e)),
            S !== Object.prototype && S.next && (!Da && yw(S) !== ww && (gw ? gw(S, ww) : xL(S[Mi]) || qc(S, Mi, _w)),
            AL(S, l, !0, !0),
            Da && (bw[l] = _w))),
            jL && i == Gi && y && y.name !== Gi && (!Da && LL ? $L(m, "name", Gi) : (h = !0,
            b = function() {
                return kL(y, this)
            }
            )),
            i)
                if (T = {
                    values: c(Gi),
                    keys: a ? b : c(Sw),
                    entries: c(Ow)
                },
                f)
                    for (k in T)
                        (Ba || h || !(k in m)) && qc(m, k, T[k]);
                else
                    TL({
                        target: r,
                        proto: !0,
                        forced: Ba || h
                    }, T);
            return (!Da || f) && m[Mi] !== b && qc(m, Mi, b, {
                name: i
            }),
            bw[r] = b,
            T
        }
    });
    var Ga = I(function(r7, qw) {
        qw.exports = function(e, r) {
            return {
                value: e,
                done: r
            }
        }
    });
    var z = I(function(t7, Aw) {
        "use strict";
        var CL = xe()
          , Tc = Bi()
          , Tw = fn()
          , xw = $e()
          , DL = be().f
          , BL = Ma()
          , Ua = Ga()
          , ML = Ae()
          , GL = ne()
          , Rw = "Array Iterator"
          , UL = xw.set
          , FL = xw.getterFor(Rw);
        Aw.exports = BL(Array, "Array", function(e, r) {
            UL(this, {
                type: Rw,
                target: CL(e),
                index: 0,
                kind: r
            })
        }, function() {
            var e = FL(this)
              , r = e.target
              , t = e.kind
              , n = e.index++;
            return !r || n >= r.length ? (e.target = void 0,
            Ua(void 0, !0)) : t == "keys" ? Ua(n, !1) : t == "values" ? Ua(r[n], !1) : Ua([n, r[n]], !1)
        }, "values");
        var kw = Tw.Arguments = Tw.Array;
        Tc("keys");
        Tc("values");
        Tc("entries");
        if (!ML && GL && kw.name !== "values")
            try {
                DL(kw, "name", {
                    value: "values"
                })
            } catch (e) {}
    });
    var xc = I(function(n7, jw) {
        var kc = Y()
          , VL = gr()
          , zL = le()
          , HL = Xe()
          , KL = kc("".charAt)
          , $w = kc("".charCodeAt)
          , WL = kc("".slice)
          , Nw = function(e) {
            return function(r, t) {
                var n = zL(HL(r)), i = VL(t), a = n.length, f, c;
                return i < 0 || i >= a ? e ? "" : void 0 : (f = $w(n, i),
                f < 55296 || f > 56319 || i + 1 === a || (c = $w(n, i + 1)) < 56320 || c > 57343 ? e ? KL(n, i) : f : e ? WL(n, i, i + 2) : (f - 55296 << 10) + (c - 56320) + 65536)
            }
        };
        jw.exports = {
            codeAt: Nw(!1),
            charAt: Nw(!0)
        }
    });
    var Rc = I(function(i7, Bw) {
        Bw.exports = {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }
    });
    var $c = I(function(o7, Gw) {
        var eC = li()
          , Ac = eC("span").classList
          , Mw = Ac && Ac.constructor && Ac.constructor.prototype;
        Gw.exports = Mw === Object.prototype ? void 0 : Mw
    });
    var Cc = I(function(a7, Ww) {
        "use strict";
        var hC = Dr().forEach
          , dC = Yt()
          , mC = dC("forEach");
        Ww.exports = mC ? [].forEach : function(r) {
            return hC(this, r, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var dn = I(function(u7, nS) {
        var AC = K()
          , $C = ee()
          , NC = Vt()
          , jC = $C("species");
        nS.exports = function(e) {
            return NC >= 51 || !AC(function() {
                var r = []
                  , t = r.constructor = {};
                return t[jC] = function() {
                    return {
                        foo: 1
                    }
                }
                ,
                r[e](Boolean).foo !== 1
            })
        }
    });
    var uS = I(function(s7, aS) {
        "use strict";
        var XC = te()
          , QC = Ts()
          , JC = TypeError;
        aS.exports = function(e) {
            if (XC(this),
            e === "string" || e === "default")
                e = "string";
            else if (e !== "number")
                throw JC("Incorrect hint");
            return QC(this, e)
        }
    });
    var za = I(function(f7, lS) {
        var nD = Z()
          , iD = ae()
          , cS = Jt();
        lS.exports = function(e, r, t) {
            var n, i;
            return cS && nD(n = r.constructor) && n !== t && iD(i = n.prototype) && i !== t.prototype && cS(e, i),
            e
        }
    });
    var Mc = I(function(c7, pS) {
        var oD = Y();
        pS.exports = oD(1.valueOf)
    });
    var Vi = I(function(l7, _S) {
        "use strict";
        pe();
        var bS = at()
          , wS = Pe()
          , _D = Si()
          , SS = K()
          , OS = ee()
          , PD = yr()
          , ED = OS("species")
          , zc = RegExp.prototype;
        _S.exports = function(e, r, t, n) {
            var i = OS(e)
              , a = !SS(function() {
                var h = {};
                return h[i] = function() {
                    return 7
                }
                ,
                ""[e](h) != 7
            })
              , f = a && !SS(function() {
                var h = !1
                  , m = /a/;
                return e === "split" && (m = {},
                m.constructor = {},
                m.constructor[ED] = function() {
                    return m
                }
                ,
                m.flags = "",
                m[i] = /./[i]),
                m.exec = function() {
                    return h = !0,
                    null
                }
                ,
                m[i](""),
                !h
            });
            if (!a || !f || t) {
                var c = bS(/./[i])
                  , l = r(i, ""[e], function(h, m, y, b, w) {
                    var S = bS(h)
                      , T = m.exec;
                    return T === _D || T === zc.exec ? a && !w ? {
                        done: !0,
                        value: c(m, y, b)
                    } : {
                        done: !0,
                        value: S(y, m, b)
                    } : {
                        done: !1
                    }
                });
                wS(String.prototype, e, l[0]),
                wS(zc, i, l[1])
            }
            n && PD(zc[i], "sham", !0)
        }
    });
    var Wa = I(function(p7, PS) {
        "use strict";
        var ID = xc().charAt;
        PS.exports = function(e, r, t) {
            return r + (t ? ID(e, r).length : 1)
        }
    });
    var IS = I(function(v7, ES) {
        var Wc = Y()
          , qD = Te()
          , TD = Math.floor
          , Hc = Wc("".charAt)
          , kD = Wc("".replace)
          , Kc = Wc("".slice)
          , xD = /\$([$&'`]|\d{1,2}|<[^>]*>)/g
          , RD = /\$([$&'`]|\d{1,2})/g;
        ES.exports = function(e, r, t, n, i, a) {
            var f = t + e.length
              , c = n.length
              , l = RD;
            return i !== void 0 && (i = qD(i),
            l = xD),
            kD(a, l, function(h, m) {
                var y;
                switch (Hc(m, 0)) {
                case "$":
                    return "$";
                case "&":
                    return e;
                case "`":
                    return Kc(r, 0, t);
                case "'":
                    return Kc(r, f);
                case "<":
                    y = i[Kc(m, 1, -1)];
                    break;
                default:
                    var b = +m;
                    if (b === 0)
                        return h;
                    if (b > c) {
                        var w = TD(b / 10);
                        return w === 0 ? h : w <= c ? n[w - 1] === void 0 ? Hc(m, 1) : n[w - 1] + Hc(m, 1) : h
                    }
                    y = n[b - 1]
                }
                return y === void 0 ? "" : y
            })
        }
    });
    var zi = I(function(h7, TS) {
        var qS = re()
          , AD = te()
          , $D = Z()
          , ND = Ue()
          , jD = Si()
          , LD = TypeError;
        TS.exports = function(e, r) {
            var t = e.exec;
            if ($D(t)) {
                var n = qS(t, e, r);
                return n !== null && AD(n),
                n
            }
            if (ND(e) === "RegExp")
                return qS(jD, e, r);
            throw LD("RegExp#exec called on incompatible receiver")
        }
    });
    var Qc = I(function(d7, NS) {
        var nB = re()
          , iB = ie()
          , oB = mr()
          , aB = nf()
          , $S = RegExp.prototype;
        NS.exports = function(e) {
            var r = e.flags;
            return r === void 0 && !("flags"in $S) && !iB(e, "flags") && oB($S, e) ? nB(aB, e) : r
        }
    });
    var GS = I(function(m7, MS) {
        var BS = X()
          , dB = K()
          , mB = Y()
          , yB = le()
          , gB = yi().trim
          , bB = mi()
          , wB = mB("".charAt)
          , Xa = BS.parseFloat
          , CS = BS.Symbol
          , DS = CS && CS.iterator
          , SB = 1 / Xa(bB + "-0") !== -1 / 0 || DS && !dB(function() {
            Xa(Object(DS))
        });
        MS.exports = SB ? function(r) {
            var t = gB(yB(r))
              , n = Xa(t);
            return n === 0 && wB(t, 0) == "-" ? -0 : n
        }
        : Xa
    });
    var Ja = I(function(y7, zS) {
        var IB = TypeError
          , qB = 9007199254740991;
        zS.exports = function(e) {
            if (e > qB)
                throw IB("Maximum allowed index exceeded");
            return e
        }
    });
    var XS = I(function(g7, YS) {
        "use strict";
        var GB = ne()
          , UB = Lr()
          , FB = TypeError
          , VB = Object.getOwnPropertyDescriptor
          , zB = GB && !function() {
            if (this !== void 0)
                return !0;
            try {
                Object.defineProperty([], "length", {
                    writable: !1
                }).length = 1
            } catch (e) {
                return e instanceof TypeError
            }
        }();
        YS.exports = zB ? function(e, r) {
            if (UB(e) && !VB(e, "length").writable)
                throw FB("Cannot set read only .length");
            return e.length = r
        }
        : function(e, r) {
            return e.length = r
        }
    });
    var ZS = I(function(b7, JS) {
        "use strict";
        var QS = rt()
          , HB = TypeError;
        JS.exports = function(e, r) {
            if (!delete e[r])
                throw HB("Cannot delete property " + QS(r) + " of " + QS(e))
        }
    });
    var g0 = I(function(c9, y0) {
        "use strict";
        var d0 = Y()
          , _2 = Ve()
          , P2 = ae()
          , E2 = ie()
          , h0 = Ei()
          , I2 = Ut()
          , m0 = Function
          , q2 = d0([].concat)
          , T2 = d0([].join)
          , sl = {}
          , k2 = function(e, r, t) {
            if (!E2(sl, r)) {
                for (var n = [], i = 0; i < r; i++)
                    n[i] = "a[" + i + "]";
                sl[r] = m0("C,a", "return new C(" + T2(n, ",") + ")")
            }
            return sl[r](e, t)
        };
        y0.exports = I2 ? m0.bind : function(r) {
            var t = _2(this)
              , n = t.prototype
              , i = h0(arguments, 1)
              , a = function() {
                var c = q2(i, h0(arguments));
                return this instanceof a ? k2(t, c.length, c) : t.apply(r, c)
            };
            return P2(n) && (a.prototype = n),
            a
        }
    });
    var x0 = I(function(x9, k0) {
        var H2 = nt().PROPER
          , K2 = K()
          , q0 = mi()
          , T0 = "\u200B\x85\u180E";
        k0.exports = function(e) {
            return K2(function() {
                return !!q0[e]() || T0[e]() !== T0 || H2 && q0[e].name !== e
            })
        }
    });
    var L0 = I(function(Q9, j0) {
        var N0 = ie();
        j0.exports = function(e) {
            return e !== void 0 && (N0(e, "value") || N0(e, "writable"))
        }
    });
    var EO = I(function(nee, PO) {
        var oU = te()
          , aU = Xf();
        PO.exports = function(e, r, t, n) {
            try {
                return n ? r(oU(t)[0], t[1]) : r(t)
            } catch (i) {
                aU(e, "throw", i)
            }
        }
    });
    var kO = I(function(iee, TO) {
        "use strict";
        var uU = Nr()
          , sU = re()
          , fU = Te()
          , cU = EO()
          , lU = Wf()
          , pU = Pi()
          , vU = Ne()
          , IO = vt()
          , hU = Yf()
          , dU = Ea()
          , qO = Array;
        TO.exports = function(r) {
            var t = fU(r)
              , n = pU(this)
              , i = arguments.length
              , a = i > 1 ? arguments[1] : void 0
              , f = a !== void 0;
            f && (a = uU(a, i > 2 ? arguments[2] : void 0));
            var c = dU(t), l = 0, h, m, y, b, w, S;
            if (c && !(this === qO && lU(c)))
                for (b = hU(t, c),
                w = b.next,
                m = n ? new this : []; !(y = sU(w, b)).done; l++)
                    S = f ? cU(b, a, [y.value, l], !0) : y.value,
                    IO(m, l, S);
            else
                for (h = vU(t),
                m = n ? new this(h) : qO(h); h > l; l++)
                    S = f ? a(t[l], l) : t[l],
                    IO(m, l, S);
            return m.length = l,
            m
        }
    });
    var Ml = I(function(Hte, u_) {
        u_.exports = Object.is || function(r, t) {
            return r === t ? r !== 0 || 1 / r === 1 / t : r != r && t != t
        }
    });
    var Fl = I(function(aie, S_) {
        var KF = ne()
          , w_ = Y()
          , WF = wi()
          , YF = xe()
          , XF = Xo().f
          , QF = w_(XF)
          , JF = w_([].push)
          , b_ = function(e) {
            return function(r) {
                for (var t = YF(r), n = WF(t), i = n.length, a = 0, f = [], c; i > a; )
                    c = n[a++],
                    (!KF || QF(t, c)) && JF(f, e ? [c, t[c]] : t[c]);
                return f
            }
        };
        S_.exports = {
            entries: b_(!0),
            values: b_(!1)
        }
    });
    var ku = I(function(Eue, Q_) {
        var hz = ae()
          , dz = Ue()
          , mz = ee()
          , yz = mz("match");
        Q_.exports = function(e) {
            var r;
            return hz(e) && ((r = e[yz]) !== void 0 ? !!r : dz(e) == "RegExp")
        }
    });
    var qP = I(function(Vce, IP) {
        var dH = K();
        IP.exports = dH(function() {
            if (typeof ArrayBuffer == "function") {
                var e = new ArrayBuffer(8);
                Object.isExtensible(e) && Object.defineProperty(e, "a", {
                    value: 8
                })
            }
        })
    });
    var xP = I(function(zce, kP) {
        var mH = K()
          , yH = ae()
          , gH = Ue()
          , TP = qP()
          , Nu = Object.isExtensible
          , bH = mH(function() {
            Nu(1)
        });
        kP.exports = bH || TP ? function(r) {
            return !yH(r) || TP && gH(r) == "ArrayBuffer" ? !1 : Nu ? Nu(r) : !0
        }
        : Nu
    });
    var ju = I(function(Hce, RP) {
        var wH = K();
        RP.exports = !wH(function() {
            return Object.isExtensible(Object.preventExtensions({}))
        })
    });
    var Wn = I(function(Kce, NP) {
        var SH = M()
          , OH = Y()
          , _H = Kt()
          , PH = ae()
          , xp = ie()
          , EH = be().f
          , AP = Rr()
          , IH = xa()
          , Rp = xP()
          , qH = fi()
          , TH = ju()
          , $P = !1
          , qr = qH("meta")
          , kH = 0
          , Ap = function(e) {
            EH(e, qr, {
                value: {
                    objectID: "O" + kH++,
                    weakData: {}
                }
            })
        }
          , xH = function(e, r) {
            if (!PH(e))
                return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
            if (!xp(e, qr)) {
                if (!Rp(e))
                    return "F";
                if (!r)
                    return "E";
                Ap(e)
            }
            return e[qr].objectID
        }
          , RH = function(e, r) {
            if (!xp(e, qr)) {
                if (!Rp(e))
                    return !0;
                if (!r)
                    return !1;
                Ap(e)
            }
            return e[qr].weakData
        }
          , AH = function(e) {
            return TH && $P && Rp(e) && !xp(e, qr) && Ap(e),
            e
        }
          , $H = function() {
            NH.enable = function() {}
            ,
            $P = !0;
            var e = AP.f
              , r = OH([].splice)
              , t = {};
            t[qr] = 1,
            e(t).length && (AP.f = function(n) {
                for (var i = e(n), a = 0, f = i.length; a < f; a++)
                    if (i[a] === qr) {
                        r(i, a, 1);
                        break
                    }
                return i
            }
            ,
            SH({
                target: "Object",
                stat: !0,
                forced: !0
            }, {
                getOwnPropertyNames: IH.f
            }))
        }
          , NH = NP.exports = {
            enable: $H,
            fastKey: xH,
            getWeakData: RH,
            onFreeze: AH
        };
        _H[qr] = !0
    });
    var Lu = I(function(Wce, LP) {
        "use strict";
        var jH = M()
          , LH = X()
          , CH = Y()
          , jP = Wt()
          , DH = Pe()
          , BH = Wn()
          , MH = pt()
          , GH = Zt()
          , UH = Z()
          , FH = Fe()
          , $p = ae()
          , Np = K()
          , VH = qa()
          , zH = er()
          , HH = za();
        LP.exports = function(e, r, t) {
            var n = e.indexOf("Map") !== -1
              , i = e.indexOf("Weak") !== -1
              , a = n ? "set" : "add"
              , f = LH[e]
              , c = f && f.prototype
              , l = f
              , h = {}
              , m = function(E) {
                var P = CH(c[E]);
                DH(c, E, E == "add" ? function(R) {
                    return P(this, R === 0 ? 0 : R),
                    this
                }
                : E == "delete" ? function($) {
                    return i && !$p($) ? !1 : P(this, $ === 0 ? 0 : $)
                }
                : E == "get" ? function(R) {
                    return i && !$p(R) ? void 0 : P(this, R === 0 ? 0 : R)
                }
                : E == "has" ? function(R) {
                    return i && !$p(R) ? !1 : P(this, R === 0 ? 0 : R)
                }
                : function(R, j) {
                    return P(this, R === 0 ? 0 : R, j),
                    this
                }
                )
            }
              , y = jP(e, !UH(f) || !(i || c.forEach && !Np(function() {
                new f().entries().next()
            })));
            if (y)
                l = t.getConstructor(r, e, n, a),
                BH.enable();
            else if (jP(e, !0)) {
                var b = new l
                  , w = b[a](i ? {} : -0, 1) != b
                  , S = Np(function() {
                    b.has(1)
                })
                  , T = VH(function(E) {
                    new f(E)
                })
                  , k = !i && Np(function() {
                    for (var E = new f, P = 5; P--; )
                        E[a](P, P);
                    return !E.has(-0)
                });
                T || (l = r(function(E, P) {
                    GH(E, c);
                    var $ = HH(new f, E, l);
                    return FH(P) || MH(P, $[a], {
                        that: $,
                        AS_ENTRIES: n
                    }),
                    $
                }),
                l.prototype = c,
                c.constructor = l),
                (S || k) && (m("delete"),
                m("has"),
                n && m("get")),
                (k || w) && m(a),
                i && c.clear && delete c.clear
            }
            return h[e] = l,
            jH({
                global: !0,
                constructor: !0,
                forced: l != f
            }, h),
            zH(l, e),
            i || t.setStrong(l, e, n),
            l
        }
    });
    var Io = I(function(Yce, CP) {
        var KH = Pe();
        CP.exports = function(e, r, t) {
            for (var n in r)
                KH(e, n, r[n], t);
            return e
        }
    });
    var Lp = I(function(Xce, UP) {
        "use strict";
        var WH = Ar()
          , YH = $r()
          , DP = Io()
          , XH = Nr()
          , QH = Zt()
          , JH = Fe()
          , ZH = pt()
          , e8 = Ma()
          , Cu = Ga()
          , r8 = Oi()
          , qo = ne()
          , BP = Wn().fastKey
          , GP = $e()
          , MP = GP.set
          , jp = GP.getterFor;
        UP.exports = {
            getConstructor: function(e, r, t, n) {
                var i = e(function(h, m) {
                    QH(h, a),
                    MP(h, {
                        type: r,
                        index: WH(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }),
                    qo || (h.size = 0),
                    JH(m) || ZH(m, h[n], {
                        that: h,
                        AS_ENTRIES: t
                    })
                })
                  , a = i.prototype
                  , f = jp(r)
                  , c = function(h, m, y) {
                    var b = f(h), w = l(h, m), S, T;
                    return w ? w.value = y : (b.last = w = {
                        index: T = BP(m, !0),
                        key: m,
                        value: y,
                        previous: S = b.last,
                        next: void 0,
                        removed: !1
                    },
                    b.first || (b.first = w),
                    S && (S.next = w),
                    qo ? b.size++ : h.size++,
                    T !== "F" && (b.index[T] = w)),
                    h
                }
                  , l = function(h, m) {
                    var y = f(h), b = BP(m), w;
                    if (b !== "F")
                        return y.index[b];
                    for (w = y.first; w; w = w.next)
                        if (w.key == m)
                            return w
                };
                return DP(a, {
                    clear: function() {
                        for (var m = this, y = f(m), b = y.index, w = y.first; w; )
                            w.removed = !0,
                            w.previous && (w.previous = w.previous.next = void 0),
                            delete b[w.index],
                            w = w.next;
                        y.first = y.last = void 0,
                        qo ? y.size = 0 : m.size = 0
                    },
                    delete: function(h) {
                        var m = this
                          , y = f(m)
                          , b = l(m, h);
                        if (b) {
                            var w = b.next
                              , S = b.previous;
                            delete y.index[b.index],
                            b.removed = !0,
                            S && (S.next = w),
                            w && (w.previous = S),
                            y.first == b && (y.first = w),
                            y.last == b && (y.last = S),
                            qo ? y.size-- : m.size--
                        }
                        return !!b
                    },
                    forEach: function(m) {
                        for (var y = f(this), b = XH(m, arguments.length > 1 ? arguments[1] : void 0), w; w = w ? w.next : y.first; )
                            for (b(w.value, w.key, this); w && w.removed; )
                                w = w.previous
                    },
                    has: function(m) {
                        return !!l(this, m)
                    }
                }),
                DP(a, t ? {
                    get: function(m) {
                        var y = l(this, m);
                        return y && y.value
                    },
                    set: function(m, y) {
                        return c(this, m === 0 ? 0 : m, y)
                    }
                } : {
                    add: function(m) {
                        return c(this, m = m === 0 ? 0 : m, m)
                    }
                }),
                qo && YH(a, "size", {
                    configurable: !0,
                    get: function() {
                        return f(this).size
                    }
                }),
                i
            },
            setStrong: function(e, r, t) {
                var n = r + " Iterator"
                  , i = jp(r)
                  , a = jp(n);
                e8(e, r, function(f, c) {
                    MP(this, {
                        type: n,
                        target: f,
                        state: i(f),
                        kind: c,
                        last: void 0
                    })
                }, function() {
                    for (var f = a(this), c = f.kind, l = f.last; l && l.removed; )
                        l = l.previous;
                    return !f.target || !(f.last = l = l ? l.next : f.state.first) ? (f.target = void 0,
                    Cu(void 0, !0)) : c == "keys" ? Cu(l.key, !1) : c == "values" ? Cu(l.value, !1) : Cu([l.key, l.value], !1)
                }, t ? "entries" : "values", !t, !0),
                r8(r)
            }
        }
    });
    var FP = I(function() {
        "use strict";
        var t8 = Lu()
          , n8 = Lp();
        t8("Map", function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, n8)
    });
    var iE = I(function() {
        "use strict";
        var I8 = Lu()
          , q8 = Lp();
        I8("Set", function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, q8)
    });
    var zp = I(function(Tpe, oE) {
        oE.exports = typeof ArrayBuffer != "undefined" && typeof DataView != "undefined"
    });
    var uE = I(function(kpe, aE) {
        var T8 = gr()
          , k8 = fr()
          , x8 = RangeError;
        aE.exports = function(e) {
            if (e === void 0)
                return 0;
            var r = T8(e)
              , t = k8(r);
            if (r !== t)
                throw x8("Wrong length or index");
            return t
        }
    });
    var fE = I(function(xpe, sE) {
        var R8 = Array
          , A8 = Math.abs
          , Tr = Math.pow
          , $8 = Math.floor
          , N8 = Math.log
          , j8 = Math.LN2
          , L8 = function(e, r, t) {
            var n = R8(t), i = t * 8 - r - 1, a = (1 << i) - 1, f = a >> 1, c = r === 23 ? Tr(2, -24) - Tr(2, -77) : 0, l = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0, h = 0, m, y, b;
            for (e = A8(e),
            e != e || e === 1 / 0 ? (y = e != e ? 1 : 0,
            m = a) : (m = $8(N8(e) / j8),
            b = Tr(2, -m),
            e * b < 1 && (m--,
            b *= 2),
            m + f >= 1 ? e += c / b : e += c * Tr(2, 1 - f),
            e * b >= 2 && (m++,
            b /= 2),
            m + f >= a ? (y = 0,
            m = a) : m + f >= 1 ? (y = (e * b - 1) * Tr(2, r),
            m = m + f) : (y = e * Tr(2, f - 1) * Tr(2, r),
            m = 0)); r >= 8; )
                n[h++] = y & 255,
                y /= 256,
                r -= 8;
            for (m = m << r | y,
            i += r; i > 0; )
                n[h++] = m & 255,
                m /= 256,
                i -= 8;
            return n[--h] |= l * 128,
            n
        }
          , C8 = function(e, r) {
            var t = e.length, n = t * 8 - r - 1, i = (1 << n) - 1, a = i >> 1, f = n - 7, c = t - 1, l = e[c--], h = l & 127, m;
            for (l >>= 7; f > 0; )
                h = h * 256 + e[c--],
                f -= 8;
            for (m = h & (1 << -f) - 1,
            h >>= -f,
            f += r; f > 0; )
                m = m * 256 + e[c--],
                f -= 8;
            if (h === 0)
                h = 1 - a;
            else {
                if (h === i)
                    return m ? NaN : l ? -1 / 0 : 1 / 0;
                m = m + Tr(2, r),
                h = h - a
            }
            return (l ? -1 : 1) * m * Tr(2, h - r)
        };
        sE.exports = {
            pack: L8,
            unpack: C8
        }
    });
    var Hp = I(function(Rpe, lE) {
        "use strict";
        var D8 = Te()
          , cE = ot()
          , B8 = Ne();
        lE.exports = function(r) {
            for (var t = D8(this), n = B8(t), i = arguments.length, a = cE(i > 1 ? arguments[1] : void 0, n), f = i > 2 ? arguments[2] : void 0, c = f === void 0 ? n : cE(f, n); c > a; )
                t[a++] = r;
            return t
        }
    });
    var Ku = I(function(Ape, kE) {
        "use strict";
        var zu = X()
          , Zp = Y()
          , Kp = ne()
          , M8 = zp()
          , PE = nt()
          , pE = yr()
          , G8 = $r()
          , vE = Io()
          , Wp = K()
          , Mu = Zt()
          , U8 = gr()
          , F8 = fr()
          , Fu = uE()
          , EE = fE()
          , V8 = hn()
          , hE = Jt()
          , z8 = Rr().f
          , H8 = Hp()
          , K8 = ka()
          , IE = er()
          , ev = $e()
          , W8 = PE.PROPER
          , dE = PE.CONFIGURABLE
          , Jn = "ArrayBuffer"
          , Hu = "DataView"
          , Zn = "prototype"
          , Y8 = "Wrong length"
          , qE = "Wrong index"
          , mE = ev.getterFor(Jn)
          , Ao = ev.getterFor(Hu)
          , yE = ev.set
          , Ye = zu[Jn]
          , Be = Ye
          , Qn = Be && Be[Zn]
          , dr = zu[Hu]
          , qt = dr && dr[Zn]
          , gE = Object.prototype
          , X8 = zu.Array
          , Vu = zu.RangeError
          , Q8 = Zp(H8)
          , J8 = Zp([].reverse)
          , TE = EE.pack
          , bE = EE.unpack
          , wE = function(e) {
            return [e & 255]
        }
          , SE = function(e) {
            return [e & 255, e >> 8 & 255]
        }
          , OE = function(e) {
            return [e & 255, e >> 8 & 255, e >> 16 & 255, e >> 24 & 255]
        }
          , _E = function(e) {
            return e[3] << 24 | e[2] << 16 | e[1] << 8 | e[0]
        }
          , Z8 = function(e) {
            return TE(e, 23, 4)
        }
          , e3 = function(e) {
            return TE(e, 52, 8)
        }
          , Gu = function(e, r, t) {
            G8(e[Zn], r, {
                configurable: !0,
                get: function() {
                    return t(this)[r]
                }
            })
        }
          , Kr = function(e, r, t, n) {
            var i = Fu(t)
              , a = Ao(e);
            if (i + r > a.byteLength)
                throw Vu(qE);
            var f = a.bytes
              , c = i + a.byteOffset
              , l = K8(f, c, c + r);
            return n ? l : J8(l)
        }
          , Wr = function(e, r, t, n, i, a) {
            var f = Fu(t)
              , c = Ao(e);
            if (f + r > c.byteLength)
                throw Vu(qE);
            for (var l = c.bytes, h = f + c.byteOffset, m = n(+i), y = 0; y < r; y++)
                l[h + y] = m[a ? y : r - y - 1]
        };
        if (!M8)
            Be = function(r) {
                Mu(this, Qn);
                var t = Fu(r);
                yE(this, {
                    type: Jn,
                    bytes: Q8(X8(t), 0),
                    byteLength: t
                }),
                Kp || (this.byteLength = t,
                this.detached = !1)
            }
            ,
            Qn = Be[Zn],
            dr = function(r, t, n) {
                Mu(this, qt),
                Mu(r, Qn);
                var i = mE(r)
                  , a = i.byteLength
                  , f = U8(t);
                if (f < 0 || f > a)
                    throw Vu("Wrong offset");
                if (n = n === void 0 ? a - f : F8(n),
                f + n > a)
                    throw Vu(Y8);
                yE(this, {
                    type: Hu,
                    buffer: r,
                    byteLength: n,
                    byteOffset: f,
                    bytes: i.bytes
                }),
                Kp || (this.buffer = r,
                this.byteLength = n,
                this.byteOffset = f)
            }
            ,
            qt = dr[Zn],
            Kp && (Gu(Be, "byteLength", mE),
            Gu(dr, "buffer", Ao),
            Gu(dr, "byteLength", Ao),
            Gu(dr, "byteOffset", Ao)),
            vE(qt, {
                getInt8: function(r) {
                    return Kr(this, 1, r)[0] << 24 >> 24
                },
                getUint8: function(r) {
                    return Kr(this, 1, r)[0]
                },
                getInt16: function(r) {
                    var t = Kr(this, 2, r, arguments.length > 1 ? arguments[1] : void 0);
                    return (t[1] << 8 | t[0]) << 16 >> 16
                },
                getUint16: function(r) {
                    var t = Kr(this, 2, r, arguments.length > 1 ? arguments[1] : void 0);
                    return t[1] << 8 | t[0]
                },
                getInt32: function(r) {
                    return _E(Kr(this, 4, r, arguments.length > 1 ? arguments[1] : void 0))
                },
                getUint32: function(r) {
                    return _E(Kr(this, 4, r, arguments.length > 1 ? arguments[1] : void 0)) >>> 0
                },
                getFloat32: function(r) {
                    return bE(Kr(this, 4, r, arguments.length > 1 ? arguments[1] : void 0), 23)
                },
                getFloat64: function(r) {
                    return bE(Kr(this, 8, r, arguments.length > 1 ? arguments[1] : void 0), 52)
                },
                setInt8: function(r, t) {
                    Wr(this, 1, r, wE, t)
                },
                setUint8: function(r, t) {
                    Wr(this, 1, r, wE, t)
                },
                setInt16: function(r, t) {
                    Wr(this, 2, r, SE, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint16: function(r, t) {
                    Wr(this, 2, r, SE, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setInt32: function(r, t) {
                    Wr(this, 4, r, OE, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setUint32: function(r, t) {
                    Wr(this, 4, r, OE, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat32: function(r, t) {
                    Wr(this, 4, r, Z8, t, arguments.length > 2 ? arguments[2] : void 0)
                },
                setFloat64: function(r, t) {
                    Wr(this, 8, r, e3, t, arguments.length > 2 ? arguments[2] : void 0)
                }
            });
        else {
            if (Yp = W8 && Ye.name !== Jn,
            !Wp(function() {
                Ye(1)
            }) || !Wp(function() {
                new Ye(-1)
            }) || Wp(function() {
                return new Ye,
                new Ye(1.5),
                new Ye(NaN),
                Ye.length != 1 || Yp && !dE
            })) {
                for (Be = function(r) {
                    return Mu(this, Qn),
                    new Ye(Fu(r))
                }
                ,
                Be[Zn] = Qn,
                Xp = z8(Ye),
                Qp = 0; Xp.length > Qp; )
                    (Uu = Xp[Qp++])in Be || pE(Be, Uu, Ye[Uu]);
                Qn.constructor = Be
            } else
                Yp && dE && pE(Ye, "name", Jn);
            hE && V8(qt) !== gE && hE(qt, gE),
            Ro = new dr(new Be(2)),
            Jp = Zp(qt.setInt8),
            Ro.setInt8(0, 2147483648),
            Ro.setInt8(1, 2147483649),
            (Ro.getInt8(0) || !Ro.getInt8(1)) && vE(qt, {
                setInt8: function(r, t) {
                    Jp(this, r, t << 24 >> 24)
                },
                setUint8: function(r, t) {
                    Jp(this, r, t << 24 >> 24)
                }
            }, {
                unsafe: !0
            })
        }
        var Yp, Xp, Qp, Uu, Ro, Jp;
        IE(Be, Jn);
        IE(dr, Hu);
        kE.exports = {
            ArrayBuffer: Be,
            DataView: dr
        }
    });
    var LE = I(function() {
        var v3 = M()
          , h3 = Ku()
          , d3 = zp();
        v3({
            global: !0,
            constructor: !0,
            forced: !d3
        }, {
            DataView: h3.DataView
        })
    });
    var BE = I(function(jpe, DE) {
        var m3 = Ve()
          , y3 = Te()
          , g3 = ui()
          , b3 = Ne()
          , w3 = TypeError
          , CE = function(e) {
            return function(r, t, n, i) {
                m3(t);
                var a = y3(r)
                  , f = g3(a)
                  , c = b3(a)
                  , l = e ? c - 1 : 0
                  , h = e ? -1 : 1;
                if (n < 2)
                    for (; ; ) {
                        if (l in f) {
                            i = f[l],
                            l += h;
                            break
                        }
                        if (l += h,
                        e ? l < 0 : c <= l)
                            throw w3("Reduce of empty array with no initial value")
                    }
                for (; e ? l >= 0 : c > l; l += h)
                    l in f && (i = t(i, f[l], l, a));
                return i
            }
        };
        DE.exports = {
            left: CE(!1),
            right: CE(!0)
        }
    });
    var JE = I(function(ave, QE) {
        "use strict";
        var V3 = Y()
          , HE = Io()
          , Wu = Wn().getWeakData
          , z3 = Zt()
          , H3 = te()
          , K3 = Fe()
          , sv = ae()
          , W3 = pt()
          , WE = Dr()
          , KE = ie()
          , YE = $e()
          , Y3 = YE.set
          , X3 = YE.getterFor
          , Q3 = WE.find
          , J3 = WE.findIndex
          , Z3 = V3([].splice)
          , eK = 0
          , Yu = function(e) {
            return e.frozen || (e.frozen = new XE)
        }
          , XE = function() {
            this.entries = []
        }
          , fv = function(e, r) {
            return Q3(e.entries, function(t) {
                return t[0] === r
            })
        };
        XE.prototype = {
            get: function(e) {
                var r = fv(this, e);
                if (r)
                    return r[1]
            },
            has: function(e) {
                return !!fv(this, e)
            },
            set: function(e, r) {
                var t = fv(this, e);
                t ? t[1] = r : this.entries.push([e, r])
            },
            delete: function(e) {
                var r = J3(this.entries, function(t) {
                    return t[0] === e
                });
                return ~r && Z3(this.entries, r, 1),
                !!~r
            }
        };
        QE.exports = {
            getConstructor: function(e, r, t, n) {
                var i = e(function(l, h) {
                    z3(l, a),
                    Y3(l, {
                        type: r,
                        id: eK++,
                        frozen: void 0
                    }),
                    K3(h) || W3(h, l[n], {
                        that: l,
                        AS_ENTRIES: t
                    })
                })
                  , a = i.prototype
                  , f = X3(r)
                  , c = function(l, h, m) {
                    var y = f(l)
                      , b = Wu(H3(h), !0);
                    return b === !0 ? Yu(y).set(h, m) : b[y.id] = m,
                    l
                };
                return HE(a, {
                    delete: function(l) {
                        var h = f(this);
                        if (!sv(l))
                            return !1;
                        var m = Wu(l);
                        return m === !0 ? Yu(h).delete(l) : m && KE(m, h.id) && delete m[h.id]
                    },
                    has: function(h) {
                        var m = f(this);
                        if (!sv(h))
                            return !1;
                        var y = Wu(h);
                        return y === !0 ? Yu(m).has(h) : y && KE(y, m.id)
                    }
                }),
                HE(a, t ? {
                    get: function(h) {
                        var m = f(this);
                        if (sv(h)) {
                            var y = Wu(h);
                            return y === !0 ? Yu(m).get(h) : y ? y[m.id] : void 0
                        }
                    },
                    set: function(h, m) {
                        return c(this, h, m)
                    }
                } : {
                    add: function(h) {
                        return c(this, h, !0)
                    }
                }),
                i
            }
        }
    });
    var sI = I(function() {
        "use strict";
        var rK = ju(), ZE = X(), Zu = Y(), eI = Io(), tK = Wn(), nK = Lu(), nI = JE(), Xu = ae(), Qu = $e().enforce, iK = K(), oK = Gs(), jo = Object, aK = Array.isArray, Ju = jo.isExtensible, iI = jo.isFrozen, uK = jo.isSealed, oI = jo.freeze, sK = jo.seal, rI = {}, tI = {}, fK = !ZE.ActiveXObject && "ActiveXObject"in ZE, $o, aI = function(e) {
            return function() {
                return e(this, arguments.length ? arguments[0] : void 0)
            }
        }, uI = nK("WeakMap", aI, nI), ri = uI.prototype, es = Zu(ri.set), cK = function() {
            return rK && iK(function() {
                var e = oI([]);
                return es(new uI, e, 1),
                !iI(e)
            })
        };
        oK && (fK ? ($o = nI.getConstructor(aI, "WeakMap", !0),
        tK.enable(),
        cv = Zu(ri.delete),
        No = Zu(ri.has),
        lv = Zu(ri.get),
        eI(ri, {
            delete: function(e) {
                if (Xu(e) && !Ju(e)) {
                    var r = Qu(this);
                    return r.frozen || (r.frozen = new $o),
                    cv(this, e) || r.frozen.delete(e)
                }
                return cv(this, e)
            },
            has: function(r) {
                if (Xu(r) && !Ju(r)) {
                    var t = Qu(this);
                    return t.frozen || (t.frozen = new $o),
                    No(this, r) || t.frozen.has(r)
                }
                return No(this, r)
            },
            get: function(r) {
                if (Xu(r) && !Ju(r)) {
                    var t = Qu(this);
                    return t.frozen || (t.frozen = new $o),
                    No(this, r) ? lv(this, r) : t.frozen.get(r)
                }
                return lv(this, r)
            },
            set: function(r, t) {
                if (Xu(r) && !Ju(r)) {
                    var n = Qu(this);
                    n.frozen || (n.frozen = new $o),
                    No(this, r) ? es(this, r, t) : n.frozen.set(r, t)
                } else
                    es(this, r, t);
                return this
            }
        })) : cK() && eI(ri, {
            set: function(r, t) {
                var n;
                return aK(r) && (iI(r) ? n = rI : uK(r) && (n = tI)),
                es(this, r, t),
                n == rI && oI(r),
                n == tI && sK(r),
                this
            }
        }));
        var cv, No, lv
    });
    var lI = I(function(fve, cI) {
        "use strict";
        var lK = Lr()
          , pK = Ne()
          , vK = Ja()
          , hK = Nr()
          , fI = function(e, r, t, n, i, a, f, c) {
            for (var l = i, h = 0, m = f ? hK(f, c) : !1, y, b; h < n; )
                h in t && (y = m ? m(t[h], h, r) : t[h],
                a > 0 && lK(y) ? (b = pK(y),
                l = fI(e, r, y, b, l, a - 1) - 1) : (vK(l + 1),
                e[l] = y),
                l++),
                h++;
            return l
        };
        cI.exports = fI
    });
    var PI = I(function(Ohe, _I) {
        var XK = be().f;
        _I.exports = function(e, r, t) {
            t in e || XK(e, t, {
                configurable: !0,
                get: function() {
                    return r[t]
                },
                set: function(n) {
                    r[t] = n
                }
            })
        }
    });
    var Tv = I(function(_he, NI) {
        var q5 = ku()
          , T5 = TypeError;
        NI.exports = function(e) {
            if (q5(e))
                throw T5("The method doesn't accept regular expressions");
            return e
        }
    });
    var kv = I(function(Phe, jI) {
        var k5 = ee()
          , x5 = k5("match");
        jI.exports = function(e) {
            var r = /./;
            try {
                "/./"[e](r)
            } catch (t) {
                try {
                    return r[x5] = !1,
                    "/./"[e](r)
                } catch (n) {}
            }
            return !1
        }
    });
    var nh = N(W());
    function ih() {
        (0,
        nh.default)(document).on("submit", "form:not([action])", function(e) {
            e.preventDefault()
        })
    }
    var oh = N(W());
    function ah() {
        var e = window.history.pushState;
        window.history.pushState = function() {
            for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++)
                t[n] = arguments[n];
            var i = e.apply(this, t);
            return (0,
            oh.default)(document).trigger("pushstate"),
            i
        }
    }
    var Xx = M()
      , Qx = at()
      , Jx = Ws().indexOf
      , Zx = Yt()
      , ef = Qx([].indexOf)
      , rm = !!ef && 1 / ef([1], 1, -0) < 0
      , eR = rm || !Zx("indexOf");
    Xx({
        target: "Array",
        proto: !0,
        forced: eR
    }, {
        indexOf: function(r) {
            var t = arguments.length > 1 ? arguments[1] : void 0;
            return rm ? ef(this, r, t) || 0 : Jx(this, r, t)
        }
    });
    var _R = M()
      , mm = dm();
    _R({
        global: !0,
        forced: parseInt != mm
    }, {
        parseInt: mm
    });
    var P4 = N(pe());
    pe();
    var c1 = M()
      , Nm = re()
      , l1 = Z()
      , jm = te()
      , p1 = le()
      , v1 = function() {
        var e = !1
          , r = /[ac]/;
        return r.exec = function() {
            return e = !0,
            /./.exec.apply(this, arguments)
        }
        ,
        r.test("abc") === !0 && e
    }()
      , h1 = /./.test;
    c1({
        target: "RegExp",
        proto: !0,
        forced: !v1
    }, {
        test: function(e) {
            var r = jm(this)
              , t = p1(e)
              , n = r.exec;
            if (!l1(n))
                return Nm(h1, r, t);
            var i = Nm(n, r, t);
            return i === null ? !1 : (jm(i),
            !0)
        }
    });
    var da = N(W());
    var Lm = !1
      , Cm = !1
      , Dm = -1;
    function gf(e) {
        Lm = e
    }
    function Bm(e) {
        Cm = e
    }
    function Mm(e) {
        Dm = e
    }
    function Gm() {
        return Lm
    }
    function ut() {
        return Cm
    }
    function Um() {
        return Dm
    }
    var Ee;
    function Fm(e) {
        Ee = e
    }
    function d1() {
        var e = Ee.indexOf("MSIE ");
        if (ut() && e > 0)
            return parseInt(Ee.substring(e + 5, Ee.indexOf(".", e)), 10);
        var r = Ee.indexOf("Trident/");
        if (r > 0) {
            var t = Ee.indexOf("rv:");
            return parseInt(Ee.substring(t + 3, Ee.indexOf(".", t)), 10)
        }
        return -1
    }
    function Vm() {
        /\bQt\//.test(Ee) ? ((0,
        da.default)(document.documentElement).addClass("qt"),
        gf(!0)) : gf(!1),
        /\bQt/.test(Ee) && /\bMacintosh/.test(Ee) && (0,
        da.default)(document.documentElement).addClass("qtmac"),
        /\bQt\/5/.test(Ee) && /Linux/.test(Ee) && (0,
        da.default)(document.documentElement).addClass("qt5"),
        Bm(/MSIE|Trident|Edge/.test(Ee)),
        Mm(d1())
    }
    function zm() {
        return window.Shiny || (window.Shiny = {}),
        window.Shiny
    }
    var g1 = sa()
      , b1 = Pe()
      , w1 = Km();
    g1 || b1(Object.prototype, "toString", w1, {
        unsafe: !0
    });
    Pg();
    Gg();
    Fg();
    Vg();
    zg();
    Xg();
    var mN = M()
      , yN = ne()
      , Qg = be().f;
    mN({
        target: "Object",
        stat: !0,
        forced: Object.defineProperty !== Qg,
        sham: !yN
    }, {
        defineProperty: Qg
    });
    Ab();
    jb();
    Cb();
    vn();
    rw();
    var Wj = M()
      , Yj = ne()
      , Xj = X()
      , Ca = Y()
      , Qj = ie()
      , Jj = Z()
      , Zj = mr()
      , eL = le()
      , rL = $r()
      , tL = Js()
      , wr = Xj.Symbol
      , mt = wr && wr.prototype;
    Yj && Jj(wr) && (!("description"in mt) || wr().description !== void 0) && (gc = {},
    Di = function() {
        var r = arguments.length < 1 || arguments[0] === void 0 ? void 0 : eL(arguments[0])
          , t = Zj(mt, this) ? new wr(r) : r === void 0 ? wr() : wr(r);
        return r === "" && (gc[t] = !0),
        t
    }
    ,
    tL(Di, wr),
    Di.prototype = mt,
    mt.constructor = Di,
    tw = String(wr("test")) == "Symbol(test)",
    nw = Ca(mt.valueOf),
    iw = Ca(mt.toString),
    ow = /^Symbol\((.*)\)[^)]+$/,
    aw = Ca("".replace),
    uw = Ca("".slice),
    rL(mt, "description", {
        configurable: !0,
        get: function() {
            var r = nw(this);
            if (Qj(gc, r))
                return "";
            var t = iw(r)
              , n = tw ? uw(t, 7, -1) : aw(t, ow, "$1");
            return n === "" ? void 0 : n
        }
    }),
    Wj({
        global: !0,
        constructor: !0,
        forced: !0
    }, {
        Symbol: Di
    }));
    var gc, Di, tw, nw, iw, ow, aw, uw;
    var nL = cn();
    nL("iterator");
    var rge = N(z());
    var YL = xc().charAt
      , XL = le()
      , Cw = $e()
      , QL = Ma()
      , Lw = Ga()
      , Dw = "String Iterator"
      , JL = Cw.set
      , ZL = Cw.getterFor(Dw);
    QL(String, "String", function(e) {
        JL(this, {
            type: Dw,
            string: XL(e),
            index: 0
        })
    }, function() {
        var r = ZL(this), t = r.string, n = r.index, i;
        return n >= t.length ? Lw(void 0, !0) : (i = YL(t, n),
        r.index += i.length,
        Lw(i, !1))
    });
    var Uw = X()
      , Vw = Rc()
      , rC = $c()
      , Ui = z()
      , Nc = yr()
      , zw = ee()
      , jc = zw("iterator")
      , Fw = zw("toStringTag")
      , Lc = Ui.values
      , Hw = function(e, r) {
        if (e) {
            if (e[jc] !== Lc)
                try {
                    Nc(e, jc, Lc)
                } catch (n) {
                    e[jc] = Lc
                }
            if (e[Fw] || Nc(e, Fw, r),
            Vw[r]) {
                for (var t in Ui)
                    if (e[t] !== Ui[t])
                        try {
                            Nc(e, t, Ui[t])
                        } catch (n) {
                            e[t] = Ui[t]
                        }
            }
        }
    };
    for (Fa in Vw)
        Hw(Uw[Fa] && Uw[Fa].prototype, Fa);
    var Fa;
    Hw(rC, "DOMTokenList");
    var tC = cn();
    tC("asyncIterator");
    var nC = Re()
      , iC = cn()
      , oC = er();
    iC("toStringTag");
    oC(nC("Symbol"), "Symbol");
    var aC = X()
      , uC = er();
    uC(aC.JSON, "JSON", !0);
    var sC = er();
    sC(Math, "Math", !0);
    var fC = M()
      , cC = K()
      , lC = Te()
      , Kw = hn()
      , pC = Sc()
      , vC = cC(function() {
        Kw(1)
    });
    fC({
        target: "Object",
        stat: !0,
        forced: vC,
        sham: !pC
    }, {
        getPrototypeOf: function(r) {
            return Kw(lC(r))
        }
    });
    var yC = M()
      , Yw = Cc();
    yC({
        target: "Array",
        proto: !0,
        forced: [].forEach != Yw
    }, {
        forEach: Yw
    });
    var Xw = X()
      , Qw = Rc()
      , gC = $c()
      , Dc = Cc()
      , bC = yr()
      , Jw = function(e) {
        if (e && e.forEach !== Dc)
            try {
                bC(e, "forEach", Dc)
            } catch (r) {
                e.forEach = Dc
            }
    };
    for (Va in Qw)
        Qw[Va] && Jw(Xw[Va] && Xw[Va].prototype);
    var Va;
    Jw(gC);
    var wC = ne()
      , SC = nt().EXISTS
      , Zw = Y()
      , OC = $r()
      , eS = Function.prototype
      , _C = Zw(eS.toString)
      , rS = /function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/
      , PC = Zw(rS.exec)
      , EC = "name";
    wC && !SC && OC(eS, EC, {
        configurable: !0,
        get: function() {
            try {
                return PC(rS, _C(this))[1]
            } catch (e) {
                return ""
            }
        }
    });
    var IC = M()
      , qC = Jt();
    IC({
        target: "Object",
        stat: !0
    }, {
        setPrototypeOf: qC
    });
    var TC = M()
      , kC = Y()
      , xC = Lr()
      , RC = kC([].reverse)
      , tS = [1, 2];
    TC({
        target: "Array",
        proto: !0,
        forced: String(tS) === String(tS.reverse())
    }, {
        reverse: function() {
            return xC(this) && (this.length = this.length),
            RC(this)
        }
    });
    var LC = M()
      , iS = Lr()
      , CC = Pi()
      , DC = ae()
      , oS = ot()
      , BC = Ne()
      , MC = xe()
      , GC = vt()
      , UC = ee()
      , FC = dn()
      , VC = Ei()
      , zC = FC("slice")
      , HC = UC("species")
      , Bc = Array
      , KC = Math.max;
    LC({
        target: "Array",
        proto: !0,
        forced: !zC
    }, {
        slice: function(r, t) {
            var n = MC(this), i = BC(n), a = oS(r, i), f = oS(t === void 0 ? i : t, i), c, l, h;
            if (iS(n) && (c = n.constructor,
            CC(c) && (c === Bc || iS(c.prototype)) ? c = void 0 : DC(c) && (c = c[HC],
            c === null && (c = void 0)),
            c === Bc || c === void 0))
                return VC(n, a, f);
            for (l = new (c === void 0 ? Bc : c)(KC(f - a, 0)),
            h = 0; a < f; a++,
            h++)
                a in n && GC(l, h, n[a]);
            return l.length = h,
            l
        }
    });
    var $q = N(W());
    var WC = cn()
      , YC = tc();
    WC("toPrimitive");
    YC();
    var ZC = ie()
      , eD = Pe()
      , rD = uS()
      , tD = ee()
      , sS = tD("toPrimitive")
      , fS = Date.prototype;
    ZC(fS, sS) || eD(fS, sS, rD);
    var aD = M()
      , Gc = Ae()
      , uD = ne()
      , dS = X()
      , Uc = rc()
      , mS = Y()
      , sD = Wt()
      , vS = ie()
      , fD = za()
      , cD = mr()
      , lD = zt()
      , yS = xs()
      , pD = K()
      , vD = Rr().f
      , hD = Je().f
      , dD = be().f
      , mD = Mc()
      , yD = yi().trim
      , Fi = "Number"
      , mn = dS[Fi]
      , hS = Uc[Fi]
      , Fc = mn.prototype
      , gD = dS.TypeError
      , bD = mS("".slice)
      , Ha = mS("".charCodeAt)
      , wD = function(e) {
        var r = yS(e, "number");
        return typeof r == "bigint" ? r : SD(r)
    }
      , SD = function(e) {
        var r = yS(e, "number"), t, n, i, a, f, c, l, h;
        if (lD(r))
            throw gD("Cannot convert a Symbol value to a number");
        if (typeof r == "string" && r.length > 2) {
            if (r = yD(r),
            t = Ha(r, 0),
            t === 43 || t === 45) {
                if (n = Ha(r, 2),
                n === 88 || n === 120)
                    return NaN
            } else if (t === 48) {
                switch (Ha(r, 1)) {
                case 66:
                case 98:
                    i = 2,
                    a = 49;
                    break;
                case 79:
                case 111:
                    i = 8,
                    a = 55;
                    break;
                default:
                    return +r
                }
                for (f = bD(r, 2),
                c = f.length,
                l = 0; l < c; l++)
                    if (h = Ha(f, l),
                    h < 48 || h > a)
                        return NaN;
                return parseInt(f, i)
            }
        }
        return +r
    }
      , Vc = sD(Fi, !mn(" 0o1") || !mn("0b1") || mn("+0x1"))
      , OD = function(e) {
        return cD(Fc, e) && pD(function() {
            mD(e)
        })
    }
      , Ka = function(r) {
        var t = arguments.length < 1 ? 0 : mn(wD(r));
        return OD(this) ? fD(Object(t), this, Ka) : t
    };
    Ka.prototype = Fc;
    Vc && !Gc && (Fc.constructor = Ka);
    aD({
        global: !0,
        constructor: !0,
        wrap: !0,
        forced: Vc
    }, {
        Number: Ka
    });
    var gS = function(e, r) {
        for (var t = uD ? vD(r) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","), n = 0, i; t.length > n; n++)
            vS(r, i = t[n]) && !vS(e, i) && dD(e, i, hD(r, i))
    };
    Gc && hS && gS(Uc[Fi], hS);
    (Vc || Gc) && gS(Uc[Fi], mn);
    var K7 = N(z());
    var O7 = N(pe());
    var CD = en()
      , kS = re()
      , Ya = Y()
      , DD = Vi()
      , BD = K()
      , MD = te()
      , GD = Z()
      , UD = Fe()
      , FD = gr()
      , VD = fr()
      , yn = le()
      , zD = Xe()
      , HD = Wa()
      , KD = xr()
      , WD = IS()
      , YD = zi()
      , XD = ee()
      , Xc = XD("replace")
      , QD = Math.max
      , JD = Math.min
      , ZD = Ya([].concat)
      , Yc = Ya([].push)
      , xS = Ya("".indexOf)
      , RS = Ya("".slice)
      , eB = function(e) {
        return e === void 0 ? e : String(e)
    }
      , rB = function() {
        return "a".replace(/./, "$0") === "$0"
    }()
      , AS = function() {
        return /./[Xc] ? /./[Xc]("a", "$0") === "" : !1
    }()
      , tB = !BD(function() {
        var e = /./;
        return e.exec = function() {
            var r = [];
            return r.groups = {
                a: "7"
            },
            r
        }
        ,
        "".replace(e, "$<a>") !== "7"
    });
    DD("replace", function(e, r, t) {
        var n = AS ? "$" : "$0";
        return [function(a, f) {
            var c = zD(this)
              , l = UD(a) ? void 0 : KD(a, Xc);
            return l ? kS(l, a, c, f) : kS(r, yn(c), a, f)
        }
        , function(i, a) {
            var f = MD(this)
              , c = yn(i);
            if (typeof a == "string" && xS(a, n) === -1 && xS(a, "$<") === -1) {
                var l = t(r, f, c, a);
                if (l.done)
                    return l.value
            }
            var h = GD(a);
            h || (a = yn(a));
            var m = f.global;
            if (m) {
                var y = f.unicode;
                f.lastIndex = 0
            }
            for (var b = []; ; ) {
                var w = YD(f, c);
                if (w === null || (Yc(b, w),
                !m))
                    break;
                var S = yn(w[0]);
                S === "" && (f.lastIndex = HD(c, VD(f.lastIndex), y))
            }
            for (var T = "", k = 0, E = 0; E < b.length; E++) {
                w = b[E];
                for (var P = yn(w[0]), $ = QD(JD(FD(w.index), c.length), 0), R = [], j = 1; j < w.length; j++)
                    Yc(R, eB(w[j]));
                var L = w.groups;
                if (h) {
                    var F = ZD([P], R, $, c);
                    L !== void 0 && Yc(F, L);
                    var C = yn(CD(a, void 0, F))
                } else
                    C = WD(P, c, $, R, L, a);
                $ >= k && (T += RS(c, k, $) + C,
                k = $ + P.length)
            }
            return T + RS(c, k)
        }
        ]
    }, !tB || !rB || AS);
    var uB = nt().PROPER
      , sB = Pe()
      , fB = te()
      , jS = le()
      , cB = K()
      , lB = Qc()
      , Jc = "toString"
      , pB = RegExp.prototype
      , LS = pB[Jc]
      , vB = cB(function() {
        return LS.call({
            source: "a",
            flags: "b"
        }) != "/a/b"
    })
      , hB = uB && LS.name != Jc;
    (vB || hB) && sB(RegExp.prototype, Jc, function() {
        var r = fB(this)
          , t = jS(r.source)
          , n = jS(lB(r));
        return "/" + t + "/" + n
    }, {
        unsafe: !0
    });
    var OB = M()
      , US = GS();
    OB({
        global: !0,
        forced: parseFloat != US
    }, {
        parseFloat: US
    });
    var _B = M()
      , PB = Y()
      , FS = K()
      , VS = Mc()
      , Qa = PB(1.toPrecision)
      , EB = FS(function() {
        return Qa(1, void 0) !== "1"
    }) || !FS(function() {
        Qa({})
    });
    _B({
        target: "Number",
        proto: !0,
        forced: EB
    }, {
        toPrecision: function(r) {
            return r === void 0 ? Qa(VS(this)) : Qa(VS(this), r)
        }
    });
    var TB = M()
      , kB = K()
      , xB = Lr()
      , RB = ae()
      , AB = Te()
      , $B = Ne()
      , HS = Ja()
      , KS = vt()
      , NB = Ai()
      , jB = dn()
      , LB = ee()
      , CB = Vt()
      , WS = LB("isConcatSpreadable")
      , DB = CB >= 51 || !kB(function() {
        var e = [];
        return e[WS] = !1,
        e.concat()[0] !== e
    })
      , BB = function(e) {
        if (!RB(e))
            return !1;
        var r = e[WS];
        return r !== void 0 ? !!r : xB(e)
    }
      , MB = !DB || !jB("concat");
    TB({
        target: "Array",
        proto: !0,
        arity: 1,
        forced: MB
    }, {
        concat: function(r) {
            var t = AB(this), n = NB(t, 0), i = 0, a, f, c, l, h;
            for (a = -1,
            c = arguments.length; a < c; a++)
                if (h = a === -1 ? t : arguments[a],
                BB(h))
                    for (l = $B(h),
                    HS(i + l),
                    f = 0; f < l; f++,
                    i++)
                        f in h && KS(n, i, h[f]);
                else
                    HS(i + 1),
                    KS(n, i++, h);
            return n.length = i,
            n
        }
    });
    var KB = M()
      , WB = Te()
      , YB = ot()
      , XB = gr()
      , QB = Ne()
      , JB = XS()
      , ZB = Ja()
      , e2 = Ai()
      , r2 = vt()
      , Zc = ZS()
      , t2 = dn()
      , n2 = t2("splice")
      , i2 = Math.max
      , o2 = Math.min;
    KB({
        target: "Array",
        proto: !0,
        forced: !n2
    }, {
        splice: function(r, t) {
            var n = WB(this), i = QB(n), a = YB(r, i), f = arguments.length, c, l, h, m, y, b;
            for (f === 0 ? c = l = 0 : f === 1 ? (c = 0,
            l = i - a) : (c = f - 2,
            l = o2(i2(XB(t), 0), i - a)),
            ZB(i + c - l),
            h = e2(n, l),
            m = 0; m < l; m++)
                y = a + m,
                y in n && r2(h, m, n[y]);
            if (h.length = l,
            c < l) {
                for (m = a; m < i - l; m++)
                    y = m + l,
                    b = m + c,
                    y in n ? n[b] = n[y] : Zc(n, b);
                for (m = i; m > i - l + c; m--)
                    Zc(n, m - 1)
            } else if (c > l)
                for (m = i - l; m > a; m--)
                    y = m + l - 1,
                    b = m + c - 1,
                    y in n ? n[b] = n[y] : Zc(n, b);
            for (m = 0; m < c; m++)
                n[m + a] = arguments[m + 2];
            return JB(n, i - l + c),
            h
        }
    });
    var a2 = M()
      , u2 = Te()
      , e0 = wi()
      , s2 = K()
      , f2 = s2(function() {
        e0(1)
    });
    a2({
        target: "Object",
        stat: !0,
        forced: f2
    }, {
        keys: function(r) {
            return e0(u2(r))
        }
    });
    var Hi = N(W());
    function el() {
        return window.devicePixelRatio
    }
    function He(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r)
    }
    function U(e, r) {
        return Object.prototype.hasOwnProperty.call(e, r) && e[r] !== void 0
    }
    function we(e, r) {
        return e === void 0 ? r : e
    }
    function t0(e) {
        var r = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#039;",
            "/": "&#x2F;"
        };
        return e.replace(/[&<>'"/]/g, function(t) {
            return r[t]
        })
    }
    function Za() {
        return Math.floor(4294967296 + Math.random() * 64424509440).toString(16)
    }
    function yt(e) {
        if (!(!e || !e.toLowerCase))
            switch (e.toLowerCase()) {
            case "true":
                return !0;
            case "false":
                return !1;
            default:
                return
            }
    }
    function cr(e, r) {
        var t = void 0;
        if ("currentStyle"in e)
            t = e.currentStyle[r];
        else {
            var n, i, a = (n = document) === null || n === void 0 || (i = n.defaultView) === null || i === void 0 ? void 0 : i.getComputedStyle(e, null);
            a && (t = a.getPropertyValue(r))
        }
        return t
    }
    function r0(e, r) {
        for (var t = e.toString(); t.length < r; )
            t = "0" + t;
        return t
    }
    function tl(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        if (r < 1)
            throw "Significant digits must be at least 1.";
        return parseFloat(e.toPrecision(r))
    }
    function n0(e) {
        var r = new Date(e);
        return r.toString() === "Invalid Date" && (r = new Date(e.replace(/-/g, "/"))),
        r
    }
    function rr(e) {
        return e instanceof Date ? e.getUTCFullYear() + "-" + r0(e.getUTCMonth() + 1, 2) + "-" + r0(e.getUTCDate(), 2) : null
    }
    function i0(e, r) {
        var t = {};
        return function() {
            var n = e.getBoundingClientRect()
              , i = {
                w: n.width,
                h: n.height
            };
            i.w === 0 && i.h === 0 || i.w === t.w && i.h === t.h || (t = i,
            r(i.w, i.h))
        }
    }
    function nl() {
        return el() ? Math.round(el() * 100) / 100 : 1
    }
    function o0(e) {
        var r = e.replace(/[\\"']/g, "\\$&").replace(/\u0000/g, "\\0").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\b]/g, "\\b"), t;
        try {
            t = new Function("with (this) {\n        try {\n          return (".concat(e, ");\n        } catch (e) {\n          console.error('Error evaluating expression: ").concat(r, "');\n          throw e;\n        }\n      }"))
        } catch (n) {
            throw console.error("Error parsing expression: " + e),
            n
        }
        return function(n) {
            return t.call(n)
        }
    }
    function Ki(e) {
        return e == null ? [] : Array.isArray(e) ? e : [e]
    }
    function a0(e, r) {
        function t(h, m) {
            for (var y = 0, b = 0, w = []; y < h.length && b < m.length; )
                r(h[y], m[b]) <= 0 ? w.push(h[y++]) : w.push(m[b++]);
            for (; y < h.length; )
                w.push(h[y++]);
            for (; b < m.length; )
                w.push(m[b++]);
            return w
        }
        e = e.slice(0);
        for (var n = 1; n < e.length; n *= 2)
            for (var i = 0; i < e.length; i += n * 2) {
                var a = e.slice(i, i + n)
                  , f = e.slice(i + n, i + n * 2)
                  , c = t(a, f)
                  , l = [i, c.length];
                Array.prototype.push.apply(l, c),
                Array.prototype.splice.apply(e, l)
            }
        return e
    }
    function H(e) {
        return typeof e == "undefined" ? e : e.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g, "\\$1")
    }
    function tr(e, r) {
        var t = {};
        return Object.keys(e).forEach(function(n) {
            t[n] = r(e[n], n, e)
        }),
        t
    }
    function u0(e) {
        return typeof e == "number" && isNaN(e)
    }
    function rl(e, r) {
        if (Hi.default.type(e) === "object" && Hi.default.type(r) === "object") {
            var t = e
              , n = r;
            if (Object.keys(t).length !== Object.keys(n).length)
                return !1;
            for (var i in t)
                if (!He(n, i) || !rl(t[i], n[i]))
                    return !1;
            return !0
        } else if (Hi.default.type(e) === "array" && Hi.default.type(r) === "array") {
            var a = e
              , f = r;
            if (a.length !== f.length)
                return !1;
            for (var c = 0; c < a.length; c++)
                if (!rl(a[c], f[c]))
                    return !1;
            return !0
        } else
            return e === r
    }
    function il() {
        if (arguments.length < 2)
            throw new Error("equal requires at least two arguments.");
        for (var e = 0; e < arguments.length - 1; e++)
            if (!rl(e < 0 || arguments.length <= e ? void 0 : arguments[e], e + 1 < 0 || arguments.length <= e + 1 ? void 0 : arguments[e + 1]))
                return !1;
        return !0
    }
    var s0 = function(r, t, n) {
        function i(c) {
            return (c + "").replace(/-/, ".").replace(/(\.0)+[^.]*$/, "").split(".")
        }
        function a(c, l) {
            for (var h = i(c), m = i(l), y = Math.min(h.length, m.length), b, w = 0; w < y; w++)
                if (b = parseInt(h[w], 10) - parseInt(m[w], 10),
                b !== 0)
                    return b;
            return h.length - m.length
        }
        var f = a(r, n);
        if (t === "==")
            return f === 0;
        if (t === ">=")
            return f >= 0;
        if (t === ">")
            return f > 0;
        if (t === "<=")
            return f <= 0;
        if (t === "<")
            return f < 0;
        throw "Unknown operator: ".concat(t)
    };
    function Se(e, r) {
        if (typeof e != "undefined") {
            if (r.length !== 1)
                throw new Error("labelNode must be of length 1");
            var t = Array.isArray(e) && e.length === 0;
            t ? r.addClass("shiny-label-null") : (r.text(e),
            r.removeClass("shiny-label-null"))
        }
    }
    function Wi(e) {
        var r = document.createElement("a");
        r.href = "/";
        var t = document.createElement("div");
        t.style.setProperty("position", "absolute", "important"),
        t.style.setProperty("top", "-1000px", "important"),
        t.style.setProperty("left", "0", "important"),
        t.style.setProperty("width", "30px", "important"),
        t.style.setProperty("height", "10px", "important"),
        t.appendChild(r),
        e.appendChild(t);
        var n = window.getComputedStyle(r).getPropertyValue("color");
        return e.removeChild(t),
        n
    }
    function ol() {
        return !window.bootstrap
    }
    function Yi(e) {
        return Yi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Yi(e)
    }
    function c2(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function f0(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, c0(n.key), n)
        }
    }
    function l2(e, r, t) {
        return r && f0(e.prototype, r),
        t && f0(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function al(e, r, t) {
        return r = c0(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function c0(e) {
        var r = p2(e, "string");
        return Yi(r) === "symbol" ? r : String(r)
    }
    function p2(e, r) {
        if (Yi(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Yi(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var eu = function() {
        function e() {
            c2(this, e),
            al(this, "name", void 0),
            al(this, "bindings", []),
            al(this, "bindingNames", {})
        }
        return l2(e, [{
            key: "register",
            value: function(t, n) {
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0
                  , a = {
                    binding: t,
                    priority: i
                };
                this.bindings.unshift(a),
                n && (this.bindingNames[n] = a,
                t.name = n)
            }
        }, {
            key: "setPriority",
            value: function(t, n) {
                var i = this.bindingNames[t];
                if (!i)
                    throw "Tried to set priority on unknown binding " + t;
                i.priority = n || 0
            }
        }, {
            key: "getPriority",
            value: function(t) {
                var n = this.bindingNames[t];
                return n ? n.priority : !1
            }
        }, {
            key: "getBindings",
            value: function() {
                return a0(this.bindings, function(t, n) {
                    return n.priority - t.priority
                })
            }
        }]),
        e
    }();
    var a9 = N(z());
    function Xi(e) {
        return Xi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Xi(e)
    }
    function v2(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function l0(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, p0(n.key), n)
        }
    }
    function h2(e, r, t) {
        return r && l0(e.prototype, r),
        t && l0(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function d2(e, r, t) {
        return r = p0(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function p0(e) {
        var r = m2(e, "string");
        return Xi(r) === "symbol" ? r : String(r)
    }
    function m2(e, r) {
        if (Xi(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Xi(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var oe = function() {
        function e() {
            v2(this, e),
            d2(this, "name", void 0)
        }
        return h2(e, [{
            key: "find",
            value: function(t) {
                throw "Not implemented"
            }
        }, {
            key: "getId",
            value: function(t) {
                return t.getAttribute("data-input-id") || t.id
            }
        }, {
            key: "getType",
            value: function(t) {
                return null
            }
        }, {
            key: "getValue",
            value: function(t) {
                throw "Not implemented"
            }
        }, {
            key: "subscribe",
            value: function(t, n) {}
        }, {
            key: "unsubscribe",
            value: function(t) {}
        }, {
            key: "receiveMessage",
            value: function(t, n) {
                throw "Not implemented"
            }
        }, {
            key: "getState",
            value: function(t) {
                throw "Not implemented"
            }
        }, {
            key: "getRatePolicy",
            value: function(t) {
                return null
            }
        }, {
            key: "initialize",
            value: function(t) {}
        }, {
            key: "dispose",
            value: function(t) {}
        }]),
        e
    }();
    var y2 = M()
      , g2 = Dr().find
      , b2 = Bi()
      , ul = "find"
      , v0 = !0;
    ul in [] && Array(1)[ul](function() {
        v0 = !1
    });
    y2({
        target: "Array",
        proto: !0,
        forced: v0
    }, {
        find: function(r) {
            return g2(this, r, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    b2(ul);
    var w2 = M()
      , S2 = X()
      , O2 = er();
    w2({
        global: !0
    }, {
        Reflect: {}
    });
    O2(S2.Reflect, "Reflect", !0);
    var x2 = M()
      , R2 = Re()
      , fl = en()
      , A2 = g0()
      , b0 = wf()
      , $2 = te()
      , w0 = ae()
      , N2 = Ar()
      , O0 = K()
      , cl = R2("Reflect", "construct")
      , j2 = Object.prototype
      , L2 = [].push
      , _0 = O0(function() {
        function e() {}
        return !(cl(function() {}, [], e)instanceof e)
    })
      , P0 = !O0(function() {
        cl(function() {})
    })
      , S0 = _0 || P0;
    x2({
        target: "Reflect",
        stat: !0,
        forced: S0,
        sham: S0
    }, {
        construct: function(r, t) {
            b0(r),
            $2(t);
            var n = arguments.length < 3 ? r : b0(arguments[2]);
            if (P0 && !_0)
                return cl(r, t, n);
            if (r == n) {
                switch (t.length) {
                case 0:
                    return new r;
                case 1:
                    return new r(t[0]);
                case 2:
                    return new r(t[0],t[1]);
                case 3:
                    return new r(t[0],t[1],t[2]);
                case 4:
                    return new r(t[0],t[1],t[2],t[3])
                }
                var i = [null];
                return fl(L2, i, t),
                new (fl(A2, r, i))
            }
            var a = n.prototype
              , f = N2(w0(a) ? a : j2)
              , c = fl(r, f, t);
            return w0(c) ? c : f
        }
    });
    var P9 = N(z());
    var gt = N(W());
    function gn(e) {
        return gn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        gn(e)
    }
    function C2(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function E0(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, B2(n.key), n)
        }
    }
    function D2(e, r, t) {
        return r && E0(e.prototype, r),
        t && E0(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function B2(e) {
        var r = M2(e, "string");
        return gn(r) === "symbol" ? r : String(r)
    }
    function M2(e, r) {
        if (gn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (gn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function G2(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && ll(e, r)
    }
    function ll(e, r) {
        return ll = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        ll(e, r)
    }
    function U2(e) {
        var r = z2();
        return function() {
            var n = ru(e), i;
            if (r) {
                var a = ru(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return F2(this, i)
        }
    }
    function F2(e, r) {
        if (r && (gn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return V2(e)
    }
    function V2(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function z2() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function ru(e) {
        return ru = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        ru(e)
    }
    var I0 = function(e) {
        G2(t, e);
        var r = U2(t);
        function t() {
            return C2(this, t),
            r.apply(this, arguments)
        }
        return D2(t, [{
            key: "find",
            value: function(i) {
                return (0,
                gt.default)(i).find('input[type="checkbox"]')
            }
        }, {
            key: "getValue",
            value: function(i) {
                return i.checked
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                i.checked = a
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                gt.default)(i).on("change.checkboxInputBinding", function() {
                    a(!0)
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                gt.default)(i).off(".checkboxInputBinding")
            }
        }, {
            key: "getState",
            value: function(i) {
                return {
                    label: (0,
                    gt.default)(i).parent().find("span").text(),
                    value: i.checked
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                U(a, "value") && (i.checked = a.value),
                U(a, "label") && (0,
                gt.default)(i).parent().find("span").text(a.label),
                (0,
                gt.default)(i).trigger("change")
            }
        }]),
        t
    }(oe);
    var W2 = M()
      , Y2 = yi().trim
      , X2 = x0();
    W2({
        target: "String",
        proto: !0,
        forced: X2("trim")
    }, {
        trim: function() {
            return Y2(this)
        }
    });
    var z9 = N(z());
    var Le = N(W());
    function bn(e) {
        return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        bn(e)
    }
    function Q2(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function R0(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, Z2(n.key), n)
        }
    }
    function J2(e, r, t) {
        return r && R0(e.prototype, r),
        t && R0(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function Z2(e) {
        var r = eM(e, "string");
        return bn(r) === "symbol" ? r : String(r)
    }
    function eM(e, r) {
        if (bn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (bn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function rM(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && pl(e, r)
    }
    function pl(e, r) {
        return pl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        pl(e, r)
    }
    function tM(e) {
        var r = oM();
        return function() {
            var n = tu(e), i;
            if (r) {
                var a = tu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return nM(this, i)
        }
    }
    function nM(e, r) {
        if (r && (bn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return iM(e)
    }
    function iM(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function oM() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function tu(e) {
        return tu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        tu(e)
    }
    function A0(e) {
        return (0,
        Le.default)(e).find('label[for="' + H(e.id) + '"]')
    }
    function aM(e) {
        var r = e.parentNode;
        return r.tagName === "LABEL" ? (0,
        Le.default)(r).find("span").text().trim() : null
    }
    var $0 = function(e) {
        rM(t, e);
        var r = tM(t);
        function t() {
            return Q2(this, t),
            r.apply(this, arguments)
        }
        return J2(t, [{
            key: "find",
            value: function(i) {
                return (0,
                Le.default)(i).find(".shiny-input-checkboxgroup")
            }
        }, {
            key: "getValue",
            value: function(i) {
                for (var a = (0,
                Le.default)('input:checkbox[name="' + H(i.id) + '"]:checked'), f = new Array(a.length), c = 0; c < a.length; c++)
                    f[c] = a[c].value;
                return f
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                var f;
                if (a = (f = a) !== null && f !== void 0 ? f : [],
                (0,
                Le.default)('input:checkbox[name="' + H(i.id) + '"]').prop("checked", !1),
                a instanceof Array)
                    for (var c = 0; c < a.length; c++)
                        (0,
                        Le.default)('input:checkbox[name="' + H(i.id) + '"][value="' + H(a[c]) + '"]').prop("checked", !0);
                else
                    (0,
                    Le.default)('input:checkbox[name="' + H(i.id) + '"][value="' + H(a) + '"]').prop("checked", !0)
            }
        }, {
            key: "getState",
            value: function(i) {
                for (var a = (0,
                Le.default)('input:checkbox[name="' + H(i.id) + '"]'), f = new Array(a.length), c = 0; c < f.length; c++)
                    f[c] = {
                        value: a[c].value,
                        label: aM(a[c])
                    };
                return {
                    label: A0(i).text(),
                    value: this.getValue(i),
                    options: f
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                var f = (0,
                Le.default)(i);
                U(a, "options") && (f.find("div.shiny-options-group").remove(),
                f.find("label.checkbox").remove(),
                f.append(a.options)),
                U(a, "value") && this.setValue(i, a.value),
                Se(a.label, A0(i)),
                (0,
                Le.default)(i).trigger("change")
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                Le.default)(i).on("change.checkboxGroupInputBinding", function() {
                    a(!1)
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                Le.default)(i).off(".checkboxGroupInputBinding")
            }
        }]),
        t
    }(oe);
    var OX = N(pe());
    var jX = N(z());
    var Ji = N(W());
    var uM = M()
      , sM = re()
      , fM = ae()
      , cM = te()
      , lM = L0()
      , pM = Je()
      , vM = hn();
    function C0(e, r) {
        var t = arguments.length < 3 ? e : arguments[2], n, i;
        if (cM(e) === t)
            return e[r];
        if (n = pM.f(e, r),
        n)
            return lM(n) ? n.value : n.get === void 0 ? void 0 : sM(n.get, t);
        if (fM(i = vM(e)))
            return C0(i, r, t)
    }
    uM({
        target: "Reflect",
        stat: !0
    }, {
        get: C0
    });
    var hM = M()
      , dM = K()
      , mM = xe()
      , D0 = Je().f
      , B0 = ne()
      , yM = !B0 || dM(function() {
        D0(1)
    });
    hM({
        target: "Object",
        stat: !0,
        forced: yM,
        sham: !B0
    }, {
        getOwnPropertyDescriptor: function(r, t) {
            return D0(mM(r), t)
        }
    });
    var hX = N(z());
    var bt = N(W());
    function wn(e) {
        return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        wn(e)
    }
    function U0(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function M0(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, gM(n.key), n)
        }
    }
    function F0(e, r, t) {
        return r && M0(e.prototype, r),
        t && M0(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function gM(e) {
        var r = bM(e, "string");
        return wn(r) === "symbol" ? r : String(r)
    }
    function bM(e, r) {
        if (wn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (wn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function nu() {
        return typeof Reflect != "undefined" && Reflect.get ? nu = Reflect.get.bind() : nu = function(r, t, n) {
            var i = wM(r, t);
            if (!!i) {
                var a = Object.getOwnPropertyDescriptor(i, t);
                return a.get ? a.get.call(arguments.length < 3 ? r : n) : a.value
            }
        }
        ,
        nu.apply(this, arguments)
    }
    function wM(e, r) {
        for (; !Object.prototype.hasOwnProperty.call(e, r) && (e = Sn(e),
        e !== null); )
            ;
        return e
    }
    function V0(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && vl(e, r)
    }
    function vl(e, r) {
        return vl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        vl(e, r)
    }
    function z0(e) {
        var r = _M();
        return function() {
            var n = Sn(e), i;
            if (r) {
                var a = Sn(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return SM(this, i)
        }
    }
    function SM(e, r) {
        if (r && (wn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return OM(e)
    }
    function OM(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function _M() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function Sn(e) {
        return Sn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Sn(e)
    }
    function G0(e) {
        return (0,
        bt.default)(e).parent().find('label[for="' + H(e.id) + '"]')
    }
    var Qi = function(e) {
        V0(t, e);
        var r = z0(t);
        function t() {
            return U0(this, t),
            r.apply(this, arguments)
        }
        return F0(t, [{
            key: "find",
            value: function(i) {
                var a = (0,
                bt.default)(i).find('input[type="text"], input[type="search"], input[type="url"], input[type="email"]');
                return a.not('input[type="text"][id$="-selectized"]')
            }
        }, {
            key: "getId",
            value: function(i) {
                return nu(Sn(t.prototype), "getId", this).call(this, i) || i.name
            }
        }, {
            key: "getValue",
            value: function(i) {
                throw "not implemented"
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                throw "not implemented"
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                bt.default)(i).on("keyup.textInputBinding input.textInputBinding", function() {
                    a(!0)
                }),
                (0,
                bt.default)(i).on("change.textInputBinding", function() {
                    a(!1)
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                bt.default)(i).off(".textInputBinding")
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                throw "not implemented"
            }
        }, {
            key: "getState",
            value: function(i) {
                throw "not implemented"
            }
        }, {
            key: "getRatePolicy",
            value: function(i) {
                return {
                    policy: "debounce",
                    delay: 250
                }
            }
        }]),
        t
    }(oe)
      , On = function(e) {
        V0(t, e);
        var r = z0(t);
        function t() {
            return U0(this, t),
            r.apply(this, arguments)
        }
        return F0(t, [{
            key: "setValue",
            value: function(i, a) {
                i.value = a
            }
        }, {
            key: "getValue",
            value: function(i) {
                return i.value
            }
        }, {
            key: "getState",
            value: function(i) {
                return {
                    label: G0(i).text(),
                    value: i.value,
                    placeholder: i.placeholder
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                U(a, "value") && this.setValue(i, a.value),
                Se(a.label, G0(i)),
                U(a, "placeholder") && (i.placeholder = a.placeholder),
                (0,
                bt.default)(i).trigger("change")
            }
        }]),
        t
    }(Qi);
    function _n(e) {
        return _n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        _n(e)
    }
    function PM(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function H0(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, IM(n.key), n)
        }
    }
    function EM(e, r, t) {
        return r && H0(e.prototype, r),
        t && H0(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function IM(e) {
        var r = qM(e, "string");
        return _n(r) === "symbol" ? r : String(r)
    }
    function qM(e, r) {
        if (_n(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (_n(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function TM(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && hl(e, r)
    }
    function hl(e, r) {
        return hl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        hl(e, r)
    }
    function kM(e) {
        var r = AM();
        return function() {
            var n = iu(e), i;
            if (r) {
                var a = iu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return xM(this, i)
        }
    }
    function xM(e, r) {
        if (r && (_n(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return RM(e)
    }
    function RM(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function AM() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function iu(e) {
        return iu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        iu(e)
    }
    function K0(e) {
        return (0,
        Ji.default)(e).parent().find('label[for="' + H(e.id) + '"]')
    }
    var W0 = function(e) {
        TM(t, e);
        var r = kM(t);
        function t() {
            return PM(this, t),
            r.apply(this, arguments)
        }
        return EM(t, [{
            key: "find",
            value: function(i) {
                return (0,
                Ji.default)(i).find('input[type="number"]')
            }
        }, {
            key: "getValue",
            value: function(i) {
                var a = (0,
                Ji.default)(i).val();
                if (typeof a == "string" && /^\s*$/.test(a))
                    return null;
                var f = Number(a);
                return isNaN(f) ? a : f
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                i.value = "" + a
            }
        }, {
            key: "getType",
            value: function(i) {
                return "shiny.number"
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                var f, c, l, h;
                U(a, "value") && (i.value = (f = a.value) !== null && f !== void 0 ? f : ""),
                U(a, "min") && (i.min = (c = a.min) !== null && c !== void 0 ? c : ""),
                U(a, "max") && (i.max = (l = a.max) !== null && l !== void 0 ? l : ""),
                U(a, "step") && (i.step = (h = a.step) !== null && h !== void 0 ? h : ""),
                Se(a.label, K0(i)),
                (0,
                Ji.default)(i).trigger("change")
            }
        }, {
            key: "getState",
            value: function(i) {
                return {
                    label: K0(i).text(),
                    value: this.getValue(i),
                    min: Number(i.min),
                    max: Number(i.max),
                    step: Number(i.step)
                }
            }
        }]),
        t
    }(Qi);
    var eQ = N(z());
    var X0 = N(W());
    function Pn(e) {
        return Pn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Pn(e)
    }
    function $M(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function Y0(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, jM(n.key), n)
        }
    }
    function NM(e, r, t) {
        return r && Y0(e.prototype, r),
        t && Y0(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function jM(e) {
        var r = LM(e, "string");
        return Pn(r) === "symbol" ? r : String(r)
    }
    function LM(e, r) {
        if (Pn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Pn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function CM(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && dl(e, r)
    }
    function dl(e, r) {
        return dl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        dl(e, r)
    }
    function DM(e) {
        var r = GM();
        return function() {
            var n = ou(e), i;
            if (r) {
                var a = ou(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return BM(this, i)
        }
    }
    function BM(e, r) {
        if (r && (Pn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return MM(e)
    }
    function MM(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function GM() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function ou(e) {
        return ou = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        ou(e)
    }
    var Q0 = function(e) {
        CM(t, e);
        var r = DM(t);
        function t() {
            return $M(this, t),
            r.apply(this, arguments)
        }
        return NM(t, [{
            key: "find",
            value: function(i) {
                return (0,
                X0.default)(i).find('input[type="password"]')
            }
        }, {
            key: "getType",
            value: function(i) {
                return "shiny.password"
            }
        }]),
        t
    }(On);
    var gQ = N(z());
    var Z0 = N(W());
    function En(e) {
        return En = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        En(e)
    }
    function UM(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function J0(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, VM(n.key), n)
        }
    }
    function FM(e, r, t) {
        return r && J0(e.prototype, r),
        t && J0(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function VM(e) {
        var r = zM(e, "string");
        return En(r) === "symbol" ? r : String(r)
    }
    function zM(e, r) {
        if (En(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (En(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function HM(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && ml(e, r)
    }
    function ml(e, r) {
        return ml = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        ml(e, r)
    }
    function KM(e) {
        var r = XM();
        return function() {
            var n = au(e), i;
            if (r) {
                var a = au(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return WM(this, i)
        }
    }
    function WM(e, r) {
        if (r && (En(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return YM(e)
    }
    function YM(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function XM() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function au(e) {
        return au = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        au(e)
    }
    var eO = function(e) {
        HM(t, e);
        var r = KM(t);
        function t() {
            return UM(this, t),
            r.apply(this, arguments)
        }
        return FM(t, [{
            key: "find",
            value: function(i) {
                return (0,
                Z0.default)(i).find("textarea")
            }
        }]),
        t
    }(On);
    var CQ = N(z());
    var Ke = N(W());
    function In(e) {
        return In = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        In(e)
    }
    function QM(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function rO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, ZM(n.key), n)
        }
    }
    function JM(e, r, t) {
        return r && rO(e.prototype, r),
        t && rO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function ZM(e) {
        var r = eG(e, "string");
        return In(r) === "symbol" ? r : String(r)
    }
    function eG(e, r) {
        if (In(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (In(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function rG(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && yl(e, r)
    }
    function yl(e, r) {
        return yl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        yl(e, r)
    }
    function tG(e) {
        var r = oG();
        return function() {
            var n = uu(e), i;
            if (r) {
                var a = uu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return nG(this, i)
        }
    }
    function nG(e, r) {
        if (r && (In(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return iG(e)
    }
    function iG(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function oG() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function uu(e) {
        return uu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        uu(e)
    }
    function tO(e) {
        return (0,
        Ke.default)(e).parent().find('label[for="' + H(e.id) + '"]')
    }
    function aG(e) {
        var r = e.parentNode;
        return r.tagName === "LABEL" ? (0,
        Ke.default)(r).find("span").text().trim() : null
    }
    var nO = function(e) {
        rG(t, e);
        var r = tG(t);
        function t() {
            return QM(this, t),
            r.apply(this, arguments)
        }
        return JM(t, [{
            key: "find",
            value: function(i) {
                return (0,
                Ke.default)(i).find(".shiny-input-radiogroup")
            }
        }, {
            key: "getValue",
            value: function(i) {
                var a = (0,
                Ke.default)('input:radio[name="' + H(i.id) + '"]:checked');
                return a.length === 0 ? null : a.val()
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                Array.isArray(a) && a.length === 0 ? (0,
                Ke.default)('input:radio[name="' + H(i.id) + '"]').prop("checked", !1) : (0,
                Ke.default)('input:radio[name="' + H(i.id) + '"][value="' + H(a) + '"]').prop("checked", !0)
            }
        }, {
            key: "getState",
            value: function(i) {
                for (var a = (0,
                Ke.default)('input:radio[name="' + H(i.id) + '"]'), f = new Array(a.length), c = 0; c < f.length; c++)
                    f[c] = {
                        value: a[c].value,
                        label: aG(a[c])
                    };
                return {
                    label: tO(i).text(),
                    value: this.getValue(i),
                    options: f
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                var f = (0,
                Ke.default)(i);
                U(a, "options") && (f.find("div.shiny-options-group").remove(),
                f.find("label.radio").remove(),
                f.append(a.options)),
                U(a, "value") && this.setValue(i, a.value),
                Se(a.label, tO(i)),
                (0,
                Ke.default)(i).trigger("change")
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                Ke.default)(i).on("change.radioInputBinding", function() {
                    a(!1)
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                Ke.default)(i).off(".radioInputBinding")
            }
        }]),
        t
    }(oe);
    var tJ = N(z());
    var ue = N(W());
    function qn(e) {
        return qn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        qn(e)
    }
    function oO(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function iO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, uG(n.key), n)
        }
    }
    function aO(e, r, t) {
        return r && iO(e.prototype, r),
        t && iO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function uG(e) {
        var r = sG(e, "string");
        return qn(r) === "symbol" ? r : String(r)
    }
    function sG(e, r) {
        if (qn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (qn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function uO(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && gl(e, r)
    }
    function gl(e, r) {
        return gl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        gl(e, r)
    }
    function sO(e) {
        var r = lG();
        return function() {
            var n = su(e), i;
            if (r) {
                var a = su(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return fG(this, i)
        }
    }
    function fG(e, r) {
        if (r && (qn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return cG(e)
    }
    function cG(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function lG() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function su(e) {
        return su = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        su(e)
    }
    var bl = function(e) {
        uO(t, e);
        var r = sO(t);
        function t() {
            return oO(this, t),
            r.apply(this, arguments)
        }
        return aO(t, [{
            key: "find",
            value: function(i) {
                return (0,
                ue.default)(i).find(".shiny-date-input")
            }
        }, {
            key: "getType",
            value: function(i) {
                return "shiny.date"
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                ue.default)(i).on("keyup.dateInputBinding input.dateInputBinding", function() {
                    a(!0)
                }),
                (0,
                ue.default)(i).on("changeDate.dateInputBinding change.dateInputBinding", function() {
                    a(!1)
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                ue.default)(i).off(".dateInputBinding")
            }
        }, {
            key: "getRatePolicy",
            value: function() {
                return {
                    policy: "debounce",
                    delay: 250
                }
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                throw "not implemented"
            }
        }, {
            key: "initialize",
            value: function(i) {
                var a = (0,
                ue.default)(i).find("input")
                  , f = a.data("initial-date");
                f == null && (f = this._floorDateTime(this._dateAsUTC(new Date))),
                this.setValue(i, f),
                a.data("min-date") !== void 0 && this._setMin(a[0], a.data("min-date")),
                a.data("max-date") !== void 0 && this._setMax(a[0], a.data("max-date"))
            }
        }, {
            key: "_getLabelNode",
            value: function(i) {
                return (0,
                ue.default)(i).find('label[for="' + H(i.id) + '"]')
            }
        }, {
            key: "_formatToString",
            value: function(i) {
                var a = "", f;
                for (f = 0; f < i.parts.length; f++)
                    a += i.separators[f] + i.parts[f];
                return a += i.separators[f],
                a
            }
        }, {
            key: "_setMin",
            value: function(i, a) {
                if (a === null) {
                    (0,
                    ue.default)(i).bsDatepicker("setStartDate", null);
                    return
                }
                var f = this._newDate(a);
                if (f !== null && (a = f,
                !isNaN(a.valueOf()))) {
                    var c = (0,
                    ue.default)(i).bsDatepicker("getUTCDate");
                    (0,
                    ue.default)(i).bsDatepicker("setStartDate", this._utcDateAsLocal(a)),
                    a && c && a.getTime() > c.getTime() ? (0,
                    ue.default)(i).bsDatepicker("clearDates") : (0,
                    ue.default)(i).bsDatepicker("setUTCDate", c)
                }
            }
        }, {
            key: "_setMax",
            value: function(i, a) {
                if (a === null) {
                    (0,
                    ue.default)(i).bsDatepicker("setEndDate", null);
                    return
                }
                var f = this._newDate(a);
                if (f !== null && (a = f,
                !isNaN(a.valueOf()))) {
                    var c = (0,
                    ue.default)(i).bsDatepicker("getUTCDate");
                    (0,
                    ue.default)(i).bsDatepicker("setEndDate", this._utcDateAsLocal(a)),
                    a && c && a.getTime() < c.getTime() ? (0,
                    ue.default)(i).bsDatepicker("clearDates") : (0,
                    ue.default)(i).bsDatepicker("setUTCDate", c)
                }
            }
        }, {
            key: "_newDate",
            value: function(i) {
                if (i instanceof Date)
                    return i;
                if (!i)
                    return null;
                var a = n0(i);
                return isNaN(a.valueOf()) ? null : a
            }
        }, {
            key: "_floorDateTime",
            value: function(i) {
                return i = new Date(i.getTime()),
                i.setUTCHours(0, 0, 0, 0),
                i
            }
        }, {
            key: "_dateAsUTC",
            value: function(i) {
                return new Date(i.getTime() - i.getTimezoneOffset() * 6e4)
            }
        }, {
            key: "_utcDateAsLocal",
            value: function(i) {
                return new Date(i.getTime() + i.getTimezoneOffset() * 6e4)
            }
        }]),
        t
    }(oe)
      , fO = function(e) {
        uO(t, e);
        var r = sO(t);
        function t() {
            return oO(this, t),
            r.apply(this, arguments)
        }
        return aO(t, [{
            key: "getValue",
            value: function(i) {
                var a = (0,
                ue.default)(i).find("input").bsDatepicker("getUTCDate");
                return rr(a)
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                if (a === null) {
                    (0,
                    ue.default)(i).find("input").val("").bsDatepicker("update");
                    return
                }
                var f = this._newDate(a);
                f !== null && (isNaN(f.valueOf()) || (0,
                ue.default)(i).find("input").bsDatepicker("setUTCDate", f))
            }
        }, {
            key: "getState",
            value: function(i) {
                var a = (0,
                ue.default)(i)
                  , f = a.find("input")
                  , c = f.data("datepicker").startDate
                  , l = f.data("datepicker").endDate;
                c = c === -1 / 0 ? null : rr(c),
                l = l === 1 / 0 ? null : rr(l);
                var h = f.data("datepicker").startViewMode;
                return h === 2 ? h = "decade" : h === 1 ? h = "year" : h === 0 && (h = "month"),
                {
                    label: this._getLabelNode(i).text(),
                    value: this.getValue(i),
                    valueString: f.val(),
                    min: c,
                    max: l,
                    language: f.data("datepicker").language,
                    weekstart: f.data("datepicker").weekStart,
                    format: this._formatToString(f.data("datepicker").format),
                    startview: h
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                var f = (0,
                ue.default)(i).find("input");
                Se(a.label, this._getLabelNode(i)),
                U(a, "min") && this._setMin(f[0], a.min),
                U(a, "max") && this._setMax(f[0], a.max),
                U(a, "value") && this.setValue(i, a.value),
                (0,
                ue.default)(i).trigger("change")
            }
        }]),
        t
    }(bl);
    var pJ = N(pe());
    var EJ = N(z());
    var ve = N(W());
    function Tn(e) {
        return Tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Tn(e)
    }
    function pG(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function cO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, hG(n.key), n)
        }
    }
    function vG(e, r, t) {
        return r && cO(e.prototype, r),
        t && cO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function hG(e) {
        var r = dG(e, "string");
        return Tn(r) === "symbol" ? r : String(r)
    }
    function dG(e, r) {
        if (Tn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Tn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function mG(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Sl(e, r)
    }
    function Sl(e, r) {
        return Sl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Sl(e, r)
    }
    function yG(e) {
        var r = wG();
        return function() {
            var n = fu(e), i;
            if (r) {
                var a = fu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return gG(this, i)
        }
    }
    function gG(e, r) {
        if (r && (Tn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return bG(e)
    }
    function bG(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function wG() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function fu(e) {
        return fu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        fu(e)
    }
    function cu(e) {
        e.$cache && e.$cache.input ? e.$cache.input.trigger("change") : console.log("Couldn't force ion slider to update")
    }
    function lO(e, r, t) {
        var n, i;
        return e === "date" ? (n = window.strftime.utc(),
        i = function(f) {
            return n(r, new Date(f))
        }
        ) : e === "datetime" ? (t ? n = window.strftime.timezone(t) : n = window.strftime,
        i = function(f) {
            return n(r, new Date(f))
        }
        ) : i = function(f) {
            return OG(f, this.prettify_separator)
        }
        ,
        i
    }
    function SG(e) {
        return (0,
        ve.default)(e).parent().find('label[for="' + H(e.id) + '"]')
    }
    function wl(e) {
        return (0,
        ve.default)(e).data("ionRangeSlider").options.type === "double" ? 2 : 1
    }
    var pO = function(e) {
        mG(t, e);
        var r = yG(t);
        function t() {
            return pG(this, t),
            r.apply(this, arguments)
        }
        return vG(t, [{
            key: "find",
            value: function(i) {
                return ve.default.fn.ionRangeSlider ? (0,
                ve.default)(i).find("input.js-range-slider") : (0,
                ve.default)()
            }
        }, {
            key: "getType",
            value: function(i) {
                var a = (0,
                ve.default)(i).data("data-type");
                return a === "date" ? "shiny.date" : a === "datetime" ? "shiny.datetime" : null
            }
        }, {
            key: "getValue",
            value: function(i) {
                var a = (0,
                ve.default)(i), f = (0,
                ve.default)(i).data("ionRangeSlider").result, c, l = a.data("data-type");
                return l === "date" ? c = function(m) {
                    return rr(new Date(Number(m)))
                }
                : l === "datetime" ? c = function(m) {
                    return Number(m) / 1e3
                }
                : c = function(m) {
                    return Number(m)
                }
                ,
                wl(i) === 2 ? [c(f.from), c(f.to)] : c(f.from)
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                var f = (0,
                ve.default)(i)
                  , c = f.data("ionRangeSlider");
                f.data("immediate", !0);
                try {
                    wl(i) === 2 && a instanceof Array ? c.update({
                        from: a[0],
                        to: a[1]
                    }) : c.update({
                        from: a
                    }),
                    cu(c)
                } finally {
                    f.data("immediate", !1)
                }
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                ve.default)(i).on("change.sliderInputBinding", function() {
                    a(!(0,
                    ve.default)(i).data("immediate") && !(0,
                    ve.default)(i).data("animating"))
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                ve.default)(i).off(".sliderInputBinding")
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                var f = (0,
                ve.default)(i)
                  , c = f.data("ionRangeSlider")
                  , l = {};
                if (U(a, "value"))
                    if (wl(i) === 2 && a.value instanceof Array)
                        l.from = a.value[0],
                        l.to = a.value[1];
                    else {
                        if (Array.isArray(a.value)) {
                            var h = ["an empty array.", "a single-value array.", "an array with more than two values."];
                            throw "Slider requires two values to update with an array, but message value was " + h[Math.min(a.value.length, 2)]
                        }
                        l.from = a.value
                    }
                for (var m = ["min", "max", "step"], y = 0; y < m.length; y++) {
                    var b = m[y];
                    U(a, b) && (l[b] = a[b])
                }
                Se(a.label, SG(i));
                for (var w = ["data-type", "time-format", "timezone"], S = 0; S < w.length; S++) {
                    var T = w[S];
                    U(a, T) && f.data(T, a[T])
                }
                var k = f.data("data-type")
                  , E = f.data("time-format")
                  , P = f.data("timezone");
                l.prettify = lO(k, E, P),
                f.data("immediate", !0);
                try {
                    c.update(l),
                    cu(c)
                } finally {
                    f.data("immediate", !1)
                }
            }
        }, {
            key: "getRatePolicy",
            value: function(i) {
                return {
                    policy: "debounce",
                    delay: 250
                }
            }
        }, {
            key: "getState",
            value: function(i) {}
        }, {
            key: "initialize",
            value: function(i) {
                var a = (0,
                ve.default)(i)
                  , f = a.data("data-type")
                  , c = a.data("time-format")
                  , l = a.data("timezone")
                  , h = {
                    prettify: lO(f, c, l)
                };
                a.ionRangeSlider(h)
            }
        }]),
        t
    }(Qi);
    function OG(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ","
          , t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "."
          , n = e.toString().split(".");
        return n[0] = n[0].replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, "$1" + r),
        n.length === 1 ? n[0] : n.length === 2 ? n[0] + t + n[1] : ""
    }
    (0,
    ve.default)(document).on("click", ".slider-animate-button", function(e) {
        e.preventDefault();
        var r = (0,
        ve.default)(this)
          , t = (0,
        ve.default)("#" + H(r.attr("data-target-id")))
          , n = "Play"
          , i = "Pause"
          , a = r.attr("data-loop") !== void 0 && !/^\s*false\s*$/i.test(r.attr("data-loop"))
          , f = r.attr("data-interval");
        if (isNaN(f) ? f = 1500 : f = Number(f),
        t.data("animTimer"))
            clearTimeout(t.data("animTimer")),
            t.removeData("animTimer"),
            r.attr("title", n),
            r.removeClass("playing"),
            t.removeData("animating");
        else {
            var c;
            if (t.hasClass("jslider")) {
                var l = t.slider();
                l.canStepNext() || l.resetToStart(),
                c = setInterval(function() {
                    a && !l.canStepNext() ? l.resetToStart() : (l.stepNext(),
                    !a && !l.canStepNext() && r.click())
                }, f)
            } else {
                var h = t.data("ionRangeSlider")
                  , m = function() {
                    return h.options.type === "double" ? h.result.to < h.result.max : h.result.from < h.result.max
                }
                  , y = function() {
                    var S = {
                        from: h.result.min
                    };
                    h.options.type === "double" && (S.to = S.from + (h.result.to - h.result.from)),
                    h.update(S),
                    cu(h)
                }
                  , b = function() {
                    var S = {
                        from: Math.min(h.result.max, h.result.from + h.options.step)
                    };
                    h.options.type === "double" && (S.to = Math.min(h.result.max, h.result.to + h.options.step)),
                    h.update(S),
                    cu(h)
                };
                m() || y(),
                c = setInterval(function() {
                    a && !m() ? y() : (b(),
                    !a && !m() && r.click())
                }, f)
            }
            t.data("animTimer", c),
            r.attr("title", i),
            r.addClass("playing"),
            t.data("animating", !0)
        }
    });
    var VJ = N(z());
    var nr = N(W());
    function kn(e) {
        return kn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        kn(e)
    }
    function _G(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function vO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, EG(n.key), n)
        }
    }
    function PG(e, r, t) {
        return r && vO(e.prototype, r),
        t && vO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function EG(e) {
        var r = IG(e, "string");
        return kn(r) === "symbol" ? r : String(r)
    }
    function IG(e, r) {
        if (kn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (kn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function qG(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Ol(e, r)
    }
    function Ol(e, r) {
        return Ol = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Ol(e, r)
    }
    function TG(e) {
        var r = RG();
        return function() {
            var n = lu(e), i;
            if (r) {
                var a = lu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return kG(this, i)
        }
    }
    function kG(e, r) {
        if (r && (kn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return xG(e)
    }
    function xG(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function RG() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function lu(e) {
        return lu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        lu(e)
    }
    function hO(e) {
        return (0,
        nr.default)(e).find('label[for="' + H(e.id) + '"]')
    }
    var dO = function(e) {
        qG(t, e);
        var r = TG(t);
        function t() {
            return _G(this, t),
            r.apply(this, arguments)
        }
        return PG(t, [{
            key: "find",
            value: function(i) {
                return (0,
                nr.default)(i).find(".shiny-date-range-input")
            }
        }, {
            key: "getValue",
            value: function(i) {
                var a = (0,
                nr.default)(i).find("input")
                  , f = a.eq(0).bsDatepicker("getUTCDate")
                  , c = a.eq(1).bsDatepicker("getUTCDate");
                return [rr(f), rr(c)]
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                if (a instanceof Object) {
                    var f = (0,
                    nr.default)(i).find("input");
                    if (a.start !== void 0)
                        if (a.start === null)
                            f.eq(0).val("").bsDatepicker("update");
                        else {
                            var c = this._newDate(a.start);
                            f.eq(0).bsDatepicker("setUTCDate", c)
                        }
                    if (a.end !== void 0)
                        if (a.end === null)
                            f.eq(1).val("").bsDatepicker("update");
                        else {
                            var l = this._newDate(a.end);
                            f.eq(1).bsDatepicker("setUTCDate", l)
                        }
                }
            }
        }, {
            key: "getState",
            value: function(i) {
                var a = (0,
                nr.default)(i)
                  , f = a.find("input")
                  , c = f.eq(0)
                  , l = f.eq(1)
                  , h = c.bsDatepicker("getStartDate")
                  , m = c.bsDatepicker("getEndDate")
                  , y = h === -1 / 0 ? null : rr(h)
                  , b = m === 1 / 0 ? null : rr(m)
                  , w = c.data("datepicker").startView;
                return w === 2 ? w = "decade" : w === 1 ? w = "year" : w === 0 && (w = "month"),
                {
                    label: hO(i).text(),
                    value: this.getValue(i),
                    valueString: [c.val(), l.val()],
                    min: y,
                    max: b,
                    weekstart: c.data("datepicker").weekStart,
                    format: this._formatToString(c.data("datepicker").format),
                    language: c.data("datepicker").language,
                    startview: w
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                var f = (0,
                nr.default)(i)
                  , c = f.find("input")
                  , l = c.eq(0)
                  , h = c.eq(1);
                Se(a.label, hO(i)),
                U(a, "min") && (this._setMin(l[0], a.min),
                this._setMin(h[0], a.min)),
                U(a, "max") && (this._setMax(l[0], a.max),
                this._setMax(h[0], a.max)),
                U(a, "value") && this.setValue(i, a.value),
                f.trigger("change")
            }
        }, {
            key: "initialize",
            value: function(i) {
                var a = (0,
                nr.default)(i)
                  , f = a.find("input")
                  , c = f.eq(0)
                  , l = f.eq(1)
                  , h = c.data("initial-date")
                  , m = l.data("initial-date");
                h == null && (h = this._dateAsUTC(new Date)),
                m == null && (m = this._dateAsUTC(new Date)),
                this.setValue(i, {
                    start: h,
                    end: m
                }),
                this._setMin(c[0], c.data("min-date")),
                this._setMin(l[0], c.data("min-date")),
                this._setMax(c[0], l.data("max-date")),
                this._setMax(l[0], l.data("max-date"))
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                nr.default)(i).on("keyup.dateRangeInputBinding input.dateRangeInputBinding", function() {
                    a(!0)
                }),
                (0,
                nr.default)(i).on("changeDate.dateRangeInputBinding change.dateRangeInputBinding", function() {
                    a(!1)
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                nr.default)(i).off(".dateRangeInputBinding")
            }
        }]),
        t
    }(bl);
    var eZ = N(vn());
    var pZ = N(z());
    var fe = N(W());
    var wt = eval;
    function xn(e) {
        return xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        xn(e)
    }
    function AG(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function mO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, NG(n.key), n)
        }
    }
    function $G(e, r, t) {
        return r && mO(e.prototype, r),
        t && mO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function NG(e) {
        var r = jG(e, "string");
        return xn(r) === "symbol" ? r : String(r)
    }
    function jG(e, r) {
        if (xn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (xn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function LG(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && _l(e, r)
    }
    function _l(e, r) {
        return _l = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        _l(e, r)
    }
    function CG(e) {
        var r = MG();
        return function() {
            var n = pu(e), i;
            if (r) {
                var a = pu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return DG(this, i)
        }
    }
    function DG(e, r) {
        if (r && (xn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return BG(e)
    }
    function BG(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function MG() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function pu(e) {
        return pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        pu(e)
    }
    function yO(e) {
        var r = H(e.id);
        return Pl(e) && (r += "-selectized"),
        (0,
        fe.default)(e).parent().parent().find('label[for="' + r + '"]')
    }
    function Pl(e) {
        var r = (0,
        fe.default)(e).parent().find('script[data-for="' + H(e.id) + '"]');
        return r.length > 0
    }
    var gO = function(e) {
        LG(t, e);
        var r = CG(t);
        function t() {
            return AG(this, t),
            r.apply(this, arguments)
        }
        return $G(t, [{
            key: "find",
            value: function(i) {
                return (0,
                fe.default)(i).find("select")
            }
        }, {
            key: "getType",
            value: function(i) {
                var a = (0,
                fe.default)(i);
                return a.hasClass("symbol") ? a.attr("multiple") === "multiple" ? "shiny.symbolList" : "shiny.symbol" : null
            }
        }, {
            key: "getId",
            value: function(i) {
                return oe.prototype.getId.call(this, i) || i.name
            }
        }, {
            key: "getValue",
            value: function(i) {
                if (Pl(i)) {
                    var a = this._selectize(i);
                    return a == null ? void 0 : a.getValue()
                } else
                    return (0,
                    fe.default)(i).val()
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                if (!Pl(i))
                    (0,
                    fe.default)(i).val(a);
                else {
                    var f = this._selectize(i);
                    f == null || f.setValue(a)
                }
            }
        }, {
            key: "getState",
            value: function(i) {
                for (var a = new Array(i.length), f = 0; f < i.length; f++)
                    a[f] = {
                        value: i[f].value,
                        label: i[f].label
                    };
                return {
                    label: yO(i),
                    value: this.getValue(i),
                    options: a
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                var f = (0,
                fe.default)(i);
                if (U(a, "options")) {
                    var c = this._selectize(i);
                    c == null || c.destroy(),
                    f.empty().append(a.options),
                    this._selectize(i)
                }
                if (U(a, "config") && (f.parent().find('script[data-for="' + H(i.id) + '"]').replaceWith(a.config),
                this._selectize(i, !0)),
                U(a, "url")) {
                    var l = this._selectize(i);
                    l.clearOptions(),
                    U(a, "value") && l.clear();
                    var h = !1;
                    l.settings.load = function(m, y) {
                        var b = l.settings;
                        fe.default.ajax({
                            url: a.url,
                            data: {
                                query: m,
                                field: JSON.stringify([b.searchField]),
                                value: b.valueField,
                                conju: b.searchConjunction,
                                maxop: b.maxOptions
                            },
                            type: "GET",
                            error: function() {
                                y()
                            },
                            success: function(S) {
                                fe.default.each(S, function(T, k) {
                                    var E = k[b.optgroupField || "optgroup"]
                                      , P = {};
                                    P[b.optgroupLabelField || "label"] = E,
                                    P[b.optgroupValueField || "value"] = E,
                                    l.addOptionGroup(E, P)
                                }),
                                y(S),
                                h || (U(a, "value") ? l.setValue(a.value) : b.maxItems === 1 && l.setValue(S[0].value)),
                                h = !0
                            }
                        })
                    }
                    ,
                    l.load(function(m) {
                        l.settings.load.apply(l, ["", m])
                    })
                } else
                    U(a, "value") && this.setValue(i, a.value);
                Se(a.label, yO(i)),
                (0,
                fe.default)(i).trigger("change")
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                var f = this;
                (0,
                fe.default)(i).on("change.selectInputBinding", function() {
                    i.nonempty && f.getValue(i) === "" || a(!1)
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                fe.default)(i).off(".selectInputBinding")
            }
        }, {
            key: "initialize",
            value: function(i) {
                this._selectize(i)
            }
        }, {
            key: "_selectize",
            value: function(i) {
                var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                if (!!fe.default.fn.selectize) {
                    var f = (0,
                    fe.default)(i)
                      , c = f.parent().find('script[data-for="' + H(i.id) + '"]');
                    if (c.length !== 0) {
                        var l = fe.default.extend({
                            labelField: "label",
                            valueField: "value",
                            searchField: ["label"]
                        }, JSON.parse(c.html()));
                        typeof c.data("nonempty") != "undefined" ? (i.nonempty = !0,
                        l = fe.default.extend(l, {
                            onItemRemove: function(b) {
                                this.getValue() === "" && (0,
                                fe.default)("select#" + H(i.id)).empty().append((0,
                                fe.default)("<option/>", {
                                    value: b,
                                    selected: !0
                                })).trigger("change")
                            },
                            onDropdownClose: function() {
                                this.getValue() === "" && this.setValue((0,
                                fe.default)("select#" + H(i.id)).val())
                            }
                        })) : i.nonempty = !1,
                        c.data("eval")instanceof Array && fe.default.each(c.data("eval"), function(y, b) {
                            l[b] = wt("(" + l[b] + ")")
                        });
                        var h = f.selectize(l)[0].selectize;
                        if (a) {
                            var m = fe.default.extend(h.settings, l);
                            h.destroy(),
                            h = f.selectize(m)[0].selectize
                        }
                        return h
                    }
                }
            }
        }]),
        t
    }(oe);
    var AZ = N(z());
    var lr = N(W());
    function Rn(e) {
        return Rn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Rn(e)
    }
    function GG(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function bO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, FG(n.key), n)
        }
    }
    function UG(e, r, t) {
        return r && bO(e.prototype, r),
        t && bO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function FG(e) {
        var r = VG(e, "string");
        return Rn(r) === "symbol" ? r : String(r)
    }
    function VG(e, r) {
        if (Rn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Rn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function zG(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && El(e, r)
    }
    function El(e, r) {
        return El = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        El(e, r)
    }
    function HG(e) {
        var r = YG();
        return function() {
            var n = vu(e), i;
            if (r) {
                var a = vu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return KG(this, i)
        }
    }
    function KG(e, r) {
        if (r && (Rn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return WG(e)
    }
    function WG(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function YG() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function vu(e) {
        return vu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        vu(e)
    }
    var wO = function(e) {
        zG(t, e);
        var r = HG(t);
        function t() {
            return GG(this, t),
            r.apply(this, arguments)
        }
        return UG(t, [{
            key: "find",
            value: function(i) {
                return (0,
                lr.default)(i).find(".action-button")
            }
        }, {
            key: "getValue",
            value: function(i) {
                return (0,
                lr.default)(i).data("val") || 0
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                (0,
                lr.default)(i).data("val", a)
            }
        }, {
            key: "getType",
            value: function(i) {
                return "shiny.action"
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                lr.default)(i).on("click.actionButtonInputBinding", function() {
                    var f = (0,
                    lr.default)(this)
                      , c = f.data("val") || 0;
                    f.data("val", c + 1),
                    a(!1)
                })
            }
        }, {
            key: "getState",
            value: function(i) {
                return {
                    value: this.getValue(i)
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                var f = (0,
                lr.default)(i);
                if (U(a, "label") || U(a, "icon")) {
                    var c = f.text()
                      , l = "";
                    if (f.find("i[class]").length > 0) {
                        var h = f.find("i[class]")[0];
                        h === f.children()[0] && (l = (0,
                        lr.default)(h).prop("outerHTML"))
                    }
                    if (U(a, "label") && (c = a.label),
                    U(a, "icon")) {
                        var m;
                        l = Array.isArray(a.icon) ? "" : (m = a.icon) !== null && m !== void 0 ? m : ""
                    }
                    f.html(l + " " + c)
                }
                U(a, "disabled") && (a.disabled ? f.attr("disabled", "") : f.attr("disabled", null))
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                lr.default)(i).off(".actionButtonInputBinding")
            }
        }]),
        t
    }(oe);
    (0,
    lr.default)(document).on("click", "a.action-button", function(e) {
        e.preventDefault()
    });
    var QZ = N(z());
    var We = N(W());
    function An(e) {
        return An = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        An(e)
    }
    function XG(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function SO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, JG(n.key), n)
        }
    }
    function QG(e, r, t) {
        return r && SO(e.prototype, r),
        t && SO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function JG(e) {
        var r = ZG(e, "string");
        return An(r) === "symbol" ? r : String(r)
    }
    function ZG(e, r) {
        if (An(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (An(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function eU(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Il(e, r)
    }
    function Il(e, r) {
        return Il = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Il(e, r)
    }
    function rU(e) {
        var r = iU();
        return function() {
            var n = hu(e), i;
            if (r) {
                var a = hu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return tU(this, i)
        }
    }
    function tU(e, r) {
        if (r && (An(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return nU(e)
    }
    function nU(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function iU() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function hu(e) {
        return hu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        hu(e)
    }
    function OO(e) {
        return e.attr("data-value") || e.text()
    }
    var _O = function(e) {
        eU(t, e);
        var r = rU(t);
        function t() {
            return XG(this, t),
            r.apply(this, arguments)
        }
        return QG(t, [{
            key: "find",
            value: function(i) {
                return (0,
                We.default)(i).find("ul.nav.shiny-tab-input")
            }
        }, {
            key: "getValue",
            value: function(i) {
                var a = ol() ? (0,
                We.default)(i).find("li:not(.dropdown).active > a") : (0,
                We.default)(i).find(".nav-link:not(.dropdown-toggle).active, .dropdown-menu .dropdown-item.active");
                return a.length === 1 ? OO(a) : null
            }
        }, {
            key: "setValue",
            value: function(i, a) {
                var f = !1;
                if (a) {
                    var c = ol() ? (0,
                    We.default)(i).find("li:not(.dropdown) > a") : (0,
                    We.default)(i).find(".nav-link:not(.dropdown-toggle), .dropdown-menu .dropdown-item");
                    c.each(function() {
                        if (OO((0,
                        We.default)(this)) === a)
                            return (0,
                            We.default)(this).tab("show"),
                            f = !0,
                            !1
                    })
                }
                f || (0,
                We.default)(i).trigger("change")
            }
        }, {
            key: "getState",
            value: function(i) {
                return {
                    value: this.getValue(i)
                }
            }
        }, {
            key: "receiveMessage",
            value: function(i, a) {
                U(a, "value") && this.setValue(i, a.value),
                (0,
                We.default)(i).trigger("change")
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                We.default)(i).on("change shown.bootstrapTabInputBinding shown.bs.tab.bootstrapTabInputBinding", function() {
                    a(!1)
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                (0,
                We.default)(i).off(".bootstrapTabInputBinding")
            }
        }]),
        t
    }(oe);
    var cre = N(z());
    var Oe = N(W());
    var mU = M()
      , yU = kO()
      , gU = qa()
      , bU = !gU(function(e) {
        Array.from(e)
    });
    mU({
        target: "Array",
        stat: !0,
        forced: bU
    }, {
        from: yU
    });
    var wU = M()
      , SU = Dr().map
      , OU = dn()
      , _U = OU("map");
    wU({
        target: "Array",
        proto: !0,
        forced: !_U
    }, {
        map: function(r) {
            return SU(this, r, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Vee = N(z());
    var vr = N(W());
    var ql = N(W());
    function xO(e, r, t, n, i, a) {
        var f = ql.default.Event("shiny:inputchanged");
        return f.name = e,
        f.value = r,
        f.binding = t,
        f.el = n,
        f.inputType = i,
        (0,
        ql.default)(a).trigger(f),
        f
    }
    var vee = N(z());
    function Tl(e) {
        return Tl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Tl(e)
    }
    function Zi() {
        "use strict";
        Zi = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && Tl(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function RO(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function AO(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    RO(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    RO(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    var kl;
    function $O(e) {
        kl = e
    }
    function Or() {
        if (typeof kl == "undefined")
            throw "Shiny has not finish initialization yet. Please wait for the 'shiny-initialized' event.";
        return kl
    }
    function pr(e, r, t) {
        Or().setInputValue(e, r, t)
    }
    function St() {
        return Or().shinyapp
    }
    function NO(e) {
        Or().user = e
    }
    function jO(e) {
        Or().forgetLastInputValue(e)
    }
    function eo(e) {
        return xl.apply(this, arguments)
    }
    function xl() {
        return xl = AO(Zi().mark(function e(r) {
            return Zi().wrap(function(n) {
                for (; ; )
                    switch (n.prev = n.next) {
                    case 0:
                        return n.next = 2,
                        Or().bindAll(r);
                    case 2:
                    case "end":
                        return n.stop()
                    }
            }, e)
        })),
        xl.apply(this, arguments)
    }
    function Ie(e) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        Or().unbindAll(e, r)
    }
    function ro(e) {
        Or().initializeInputs(e)
    }
    function LO(e, r) {
        return Rl.apply(this, arguments)
    }
    function Rl() {
        return Rl = AO(Zi().mark(function e(r, t) {
            return Zi().wrap(function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        return i.next = 2,
                        St().bindOutput(r, t);
                    case 2:
                    case "end":
                        return i.stop()
                    }
            }, e)
        })),
        Rl.apply(this, arguments)
    }
    function CO(e, r) {
        return St().unbindOutput(e, r)
    }
    function DO() {
        return Or().oncustommessage
    }
    var BO;
    function MO() {
        return BO
    }
    function GO(e) {
        BO = e
    }
    function UO() {
        return Or().createSocket
    }
    function $n(e) {
        return $n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        $n(e)
    }
    function PU(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Al(e, r)
    }
    function Al(e, r) {
        return Al = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Al(e, r)
    }
    function EU(e) {
        var r = qU();
        return function() {
            var n = du(e), i;
            if (r) {
                var a = du(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return IU(this, i)
        }
    }
    function IU(e, r) {
        if (r && ($n(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return Mr(e)
    }
    function Mr(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function qU() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function du(e) {
        return du = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        du(e)
    }
    function VO(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function FO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, HO(n.key), n)
        }
    }
    function zO(e, r, t) {
        return r && FO(e.prototype, r),
        t && FO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function ir(e, r, t) {
        return r = HO(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function HO(e) {
        var r = TU(e, "string");
        return $n(r) === "symbol" ? r : String(r)
    }
    function TU(e, r) {
        if ($n(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if ($n(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var kU = function() {
        function e(r) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            VO(this, e),
            ir(this, "files", void 0),
            ir(this, "fileIndex", -1),
            ir(this, "aborted", !1),
            ir(this, "completed", !1),
            this.files = Array.from(r),
            t && this.$run()
        }
        return zO(e, [{
            key: "onBegin",
            value: function(t, n) {
                setTimeout(n, 0)
            }
        }, {
            key: "onFile",
            value: function(t, n) {
                setTimeout(n, 0)
            }
        }, {
            key: "onComplete",
            value: function() {}
        }, {
            key: "onAbort",
            value: function() {}
        }, {
            key: "abort",
            value: function() {
                this.completed || this.aborted || (this.aborted = !0,
                this.onAbort())
            }
        }, {
            key: "$getRun",
            value: function() {
                var t = this
                  , n = !1;
                return function() {
                    n || (n = !0,
                    t.$run())
                }
            }
        }, {
            key: "$run",
            value: function() {
                if (!(this.aborted || this.completed)) {
                    if (this.fileIndex < 0) {
                        this.fileIndex = 0,
                        this.onBegin(this.files, this.$getRun());
                        return
                    }
                    if (this.fileIndex === this.files.length) {
                        this.completed = !0,
                        this.onComplete();
                        return
                    }
                    var t = this.files[this.fileIndex++];
                    this.onFile(t, this.$getRun())
                }
            }
        }]),
        e
    }()
      , $l = function(e) {
        PU(t, e);
        var r = EU(t);
        function t(n, i, a, f) {
            var c;
            return VO(this, t),
            c = r.call(this, a, !1),
            ir(Mr(c), "shinyapp", void 0),
            ir(Mr(c), "id", void 0),
            ir(Mr(c), "el", void 0),
            ir(Mr(c), "jobId", void 0),
            ir(Mr(c), "uploadUrl", void 0),
            ir(Mr(c), "progressBytes", void 0),
            ir(Mr(c), "totalBytes", void 0),
            c.shinyapp = n,
            c.id = i,
            c.el = f,
            c.$run(),
            c
        }
        return zO(t, [{
            key: "makeRequest",
            value: function(i, a, f, c, l) {
                this.shinyapp.makeRequest(i, a, f, c, l)
            }
        }, {
            key: "onBegin",
            value: function(i, a) {
                var f = this;
                this.$setError(null),
                this.$setActive(!0),
                this.$setVisible(!0),
                this.onProgress(null, 0),
                this.totalBytes = 0,
                this.progressBytes = 0,
                vr.default.each(i, function(l, h) {
                    f.totalBytes += h.size
                });
                var c = vr.default.map(i, function(l) {
                    return {
                        name: l.name,
                        size: l.size,
                        type: l.type
                    }
                });
                this.makeRequest("uploadInit", [c], function(l) {
                    f.jobId = l.jobId,
                    f.uploadUrl = l.uploadUrl,
                    a()
                }, function(l) {
                    f.onError(l)
                }, void 0)
            }
        }, {
            key: "onFile",
            value: function(i, a) {
                var f = this;
                this.onProgress(i, 0),
                vr.default.ajax(this.uploadUrl, {
                    type: "POST",
                    cache: !1,
                    xhr: function() {
                        if (typeof vr.default.ajaxSettings.xhr != "function")
                            throw "jQuery's XHR is not a function";
                        var l = vr.default.ajaxSettings.xhr();
                        return l.upload && (l.upload.onprogress = function(h) {
                            h.lengthComputable && f.onProgress(i, (f.progressBytes + h.loaded) / f.totalBytes)
                        }
                        ),
                        l
                    },
                    data: i,
                    contentType: "application/octet-stream",
                    processData: !1,
                    success: function() {
                        f.progressBytes += i.size,
                        a()
                    },
                    error: function(l, h, m) {
                        f.onError(l.responseText || h)
                    }
                })
            }
        }, {
            key: "onComplete",
            value: function() {
                var i = this
                  , a = vr.default.map(this.files, function(c, l) {
                    return {
                        name: c.name,
                        size: c.size,
                        type: c.type
                    }
                })
                  , f = xO(this.id, a, MO(), this.el, "shiny.fileupload", document);
                this.makeRequest("uploadEnd", [this.jobId, this.id], function() {
                    i.$setActive(!1),
                    i.onProgress(null, 1),
                    i.$bar().text("Upload complete"),
                    (0,
                    vr.default)(f.el).val("")
                }, function(c) {
                    i.onError(c)
                }, void 0),
                this.$bar().text("Finishing upload")
            }
        }, {
            key: "onError",
            value: function(i) {
                this.$setError(i || ""),
                this.$setActive(!1)
            }
        }, {
            key: "onAbort",
            value: function() {
                this.$setVisible(!1)
            }
        }, {
            key: "onProgress",
            value: function(i, a) {
                this.$bar().width(Math.round(a * 100) + "%"),
                this.$bar().text(i ? i.name : "")
            }
        }, {
            key: "$container",
            value: function() {
                return (0,
                vr.default)("#" + H(this.id) + "_progress.shiny-file-input-progress")
            }
        }, {
            key: "$bar",
            value: function() {
                return (0,
                vr.default)("#" + H(this.id) + "_progress.shiny-file-input-progress .progress-bar")
            }
        }, {
            key: "$setVisible",
            value: function(i) {
                this.$container().css("visibility", i ? "visible" : "hidden")
            }
        }, {
            key: "$setError",
            value: function(i) {
                this.$bar().toggleClass("progress-bar-danger", i !== null),
                i !== null && (this.onProgress(null, 1),
                this.$bar().text(i))
            }
        }, {
            key: "$setActive",
            value: function(i) {
                this.$container().toggleClass("active", !!i)
            }
        }]),
        t
    }(kU);
    function Nn(e) {
        return Nn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Nn(e)
    }
    function xU(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function KO(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, AU(n.key), n)
        }
    }
    function RU(e, r, t) {
        return r && KO(e.prototype, r),
        t && KO(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function AU(e) {
        var r = $U(e, "string");
        return Nn(r) === "symbol" ? r : String(r)
    }
    function $U(e, r) {
        if (Nn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Nn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function NU(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Nl(e, r)
    }
    function Nl(e, r) {
        return Nl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Nl(e, r)
    }
    function jU(e) {
        var r = DU();
        return function() {
            var n = gu(e), i;
            if (r) {
                var a = gu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return LU(this, i)
        }
    }
    function LU(e, r) {
        if (r && (Nn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return CU(e)
    }
    function CU(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function DU() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function gu(e) {
        return gu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        gu(e)
    }
    var mu = "shiny-file-input-active"
      , yu = "shiny-file-input-over";
    function to(e) {
        return (0,
        Oe.default)(e).closest("div.input-group")
    }
    function WO(e) {
        var r = (0,
        Oe.default)(e)
          , t = 0;
        return r.on({
            "dragenter.draghover": function(i) {
                t++ === 0 && r.trigger("draghover:enter", i)
            },
            "dragleave.draghover": function(i) {
                --t === 0 && r.trigger("draghover:leave", i),
                t < 0 && console.error("draghover childCounter is negative somehow")
            },
            "dragover.draghover": function(i) {
                i.preventDefault()
            },
            "drop.draghover": function(i) {
                t = 0,
                r.trigger("draghover:drop", i),
                i.preventDefault()
            }
        }),
        r
    }
    function YO(e) {
        return (0,
        Oe.default)(e).off(".draghover")
    }
    function BU() {
        var e = (0,
        Oe.default)("html");
        WO(e).on({
            "draghover:enter.draghover": function() {
                to(_r).addClass(mu)
            },
            "draghover:leave.draghover": function() {
                to(_r).removeClass(mu)
            },
            "draghover:drop.draghover": function() {
                to(_r).removeClass(yu).removeClass(mu)
            }
        })
    }
    function MU() {
        var e = (0,
        Oe.default)("html");
        e.off(".draghover"),
        YO(e)
    }
    function GU(e) {
        var r = document.createElement("input");
        r.type = "file";
        try {
            r.files = e
        } catch (t) {
            return !1
        }
        return !0
    }
    function UU(e, r) {
        var t, n, i = (t = e.originalEvent) === null || t === void 0 || (n = t.dataTransfer) === null || n === void 0 ? void 0 : n.files, a = (0,
        Oe.default)(r);
        i == null ? console.log("Dropping files is not supported on this browser. (no FileList)") : GU(i) ? (a.val(""),
        r.files = i,
        a.trigger("change")) : (a.val(""),
        FU(r, i))
    }
    function XO(e, r) {
        var t = e.closest("div.input-group").find("input[type=text]");
        r.length === 1 ? t.val(r[0].name) : t.val(r.length + " files")
    }
    function QO(e) {
        var r = e.data("currentUploader");
        r && r.abort(),
        e.removeAttr("data-restore")
    }
    function FU(e, r) {
        var t = (0,
        Oe.default)(e);
        QO(t),
        XO(t, r),
        t.data("currentUploader", new $l(St(),jl(e),r,e))
    }
    function VU(e) {
        var r = (0,
        Oe.default)(e.target);
        QO(r);
        var t = e.target.files
          , n = jl(e.target);
        t.length !== 0 && (XO(r, t),
        r.data("currentUploader", new $l(St(),n,t,e.target)))
    }
    var _r = (0,
    Oe.default)();
    function jl(e) {
        return oe.prototype.getId.call(this, e) || e.name
    }
    var JO = function(e) {
        NU(t, e);
        var r = jU(t);
        function t() {
            return xU(this, t),
            r.apply(this, arguments)
        }
        return RU(t, [{
            key: "find",
            value: function(i) {
                return (0,
                Oe.default)(i).find('input[type="file"]')
            }
        }, {
            key: "getId",
            value: function(i) {
                return jl(i)
            }
        }, {
            key: "getValue",
            value: function(i) {
                var a = (0,
                Oe.default)(i).attr("data-restore");
                if (a) {
                    var f = JSON.parse(a)
                      , c = (0,
                    Oe.default)(i).closest("div.input-group").find("input[type=text]");
                    f.name.length === 1 ? c.val(f.name[0]) : c.val(f.name.length + " files");
                    var l = (0,
                    Oe.default)(i).closest("div.form-group").find(".progress")
                      , h = l.find(".progress-bar");
                    return l.removeClass("active"),
                    h.width("100%"),
                    h.css("visibility", "visible"),
                    f
                } else
                    return null
            }
        }, {
            key: "setValue",
            value: function(i, a) {}
        }, {
            key: "getType",
            value: function(i) {
                return "shiny.file"
            }
        }, {
            key: "subscribe",
            value: function(i, a) {
                (0,
                Oe.default)(i).on("change.fileInputBinding", VU),
                _r.length === 0 && BU(),
                _r = _r.add(i);
                var f = to(i);
                WO(f).on({
                    "draghover:enter.draghover": function(l) {
                        f.addClass(yu)
                    },
                    "draghover:leave.draghover": function(l) {
                        f.removeClass(yu),
                        l.stopPropagation()
                    },
                    "draghover:drop.draghover": function(l, h) {
                        UU(h, i)
                    }
                })
            }
        }, {
            key: "unsubscribe",
            value: function(i) {
                var a = (0,
                Oe.default)(i)
                  , f = to(i);
                f.removeClass(yu).removeClass(mu),
                YO(f),
                a.off(".fileInputBinding"),
                f.off(".draghover"),
                _r = _r.not(i),
                _r.length === 0 && MU()
            }
        }]),
        t
    }(oe);
    function ZO() {
        var e = new eu;
        e.register(new On, "shiny.textInput"),
        e.register(new eO, "shiny.textareaInput"),
        e.register(new Q0, "shiny.passwordInput"),
        e.register(new W0, "shiny.numberInput"),
        e.register(new I0, "shiny.checkboxInput"),
        e.register(new $0, "shiny.checkboxGroupInput"),
        e.register(new nO, "shiny.radioInput"),
        e.register(new pO, "shiny.sliderInput"),
        e.register(new fO, "shiny.dateInput"),
        e.register(new dO, "shiny.dateRangeInput"),
        e.register(new gO, "shiny.selectInput"),
        e.register(new wO, "shiny.actionButtonInput"),
        e.register(new _O, "shiny.bootstrapTabInput");
        var r = new JO;
        return e.register(r, "shiny.fileInputBinding"),
        {
            inputBindings: e,
            fileInputBinding: r
        }
    }
    var Ote = N(z());
    var Dl = N(W());
    var zU = M()
      , HU = Y()
      , KU = ui()
      , WU = xe()
      , YU = Yt()
      , XU = HU([].join)
      , QU = KU != Object
      , JU = QU || !YU("join", ",");
    zU({
        target: "Array",
        proto: !0,
        forced: JU
    }, {
        join: function(r) {
            return XU(WU(this), r === void 0 ? "," : r)
        }
    });
    var Lre = N(pe());
    var Kre = N(z());
    var Ot = N(W());
    function jn(e) {
        return jn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        jn(e)
    }
    function Ll() {
        "use strict";
        Ll = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && jn(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function e_(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function ZU(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    e_(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    e_(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function eF(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function r_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, t_(n.key), n)
        }
    }
    function rF(e, r, t) {
        return r && r_(e.prototype, r),
        t && r_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function tF(e, r, t) {
        return r = t_(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function t_(e) {
        var r = nF(e, "string");
        return jn(r) === "symbol" ? r : String(r)
    }
    function nF(e, r) {
        if (jn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (jn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var _e = function() {
        function e() {
            eF(this, e),
            tF(this, "name", void 0)
        }
        return rF(e, [{
            key: "find",
            value: function(t) {
                throw "Not implemented"
            }
        }, {
            key: "renderValue",
            value: function(t, n) {
                throw "Not implemented"
            }
        }, {
            key: "getId",
            value: function(t) {
                return t.getAttribute("data-input-id") || t.id
            }
        }, {
            key: "onValueChange",
            value: function() {
                var r = ZU(Ll().mark(function n(i, a) {
                    return Ll().wrap(function(c) {
                        for (; ; )
                            switch (c.prev = c.next) {
                            case 0:
                                return this.clearError(i),
                                c.next = 3,
                                this.renderValue(i, a);
                            case 3:
                            case "end":
                                return c.stop()
                            }
                    }, n, this)
                }));
                function t(n, i) {
                    return r.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: "onValueError",
            value: function(t, n) {
                this.renderError(t, n)
            }
        }, {
            key: "renderError",
            value: function(t, n) {
                if (this.clearError(t),
                n.message === "") {
                    (0,
                    Ot.default)(t).empty();
                    return
                }
                var i = "shiny-output-error";
                n.type !== null && (i = i + " " + Ot.default.map(Ki(n.type), function(a) {
                    return i + "-" + a
                }).join(" ")),
                (0,
                Ot.default)(t).addClass(i).text(n.message)
            }
        }, {
            key: "clearError",
            value: function(t) {
                (0,
                Ot.default)(t).attr("class", function(n, i) {
                    return i.replace(/(^|\s)shiny-output-error\S*/g, "")
                })
            }
        }, {
            key: "showProgress",
            value: function(t, n) {
                var i = "recalculating";
                n ? (0,
                Ot.default)(t).addClass(i) : (0,
                Ot.default)(t).removeClass(i)
            }
        }]),
        e
    }();
    function Ln(e) {
        return Ln = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Ln(e)
    }
    function iF(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function n_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, aF(n.key), n)
        }
    }
    function oF(e, r, t) {
        return r && n_(e.prototype, r),
        t && n_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function aF(e) {
        var r = uF(e, "string");
        return Ln(r) === "symbol" ? r : String(r)
    }
    function uF(e, r) {
        if (Ln(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Ln(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function sF(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Cl(e, r)
    }
    function Cl(e, r) {
        return Cl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Cl(e, r)
    }
    function fF(e) {
        var r = pF();
        return function() {
            var n = bu(e), i;
            if (r) {
                var a = bu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return cF(this, i)
        }
    }
    function cF(e, r) {
        if (r && (Ln(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return lF(e)
    }
    function lF(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function pF() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function bu(e) {
        return bu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        bu(e)
    }
    var i_ = function(e) {
        sF(t, e);
        var r = fF(t);
        function t() {
            return iF(this, t),
            r.apply(this, arguments)
        }
        return oF(t, [{
            key: "find",
            value: function(i) {
                return (0,
                Dl.default)(i).find(".shiny-text-output")
            }
        }, {
            key: "renderValue",
            value: function(i, a) {
                (0,
                Dl.default)(i).text(a)
            }
        }]),
        t
    }(_e);
    var Gte = N(z());
    var Cn = N(W());
    function Dn(e) {
        return Dn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Dn(e)
    }
    function vF(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function o_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, dF(n.key), n)
        }
    }
    function hF(e, r, t) {
        return r && o_(e.prototype, r),
        t && o_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function dF(e) {
        var r = mF(e, "string");
        return Dn(r) === "symbol" ? r : String(r)
    }
    function mF(e, r) {
        if (Dn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Dn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function yF(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Bl(e, r)
    }
    function Bl(e, r) {
        return Bl = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Bl(e, r)
    }
    function gF(e) {
        var r = SF();
        return function() {
            var n = wu(e), i;
            if (r) {
                var a = wu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return bF(this, i)
        }
    }
    function bF(e, r) {
        if (r && (Dn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return wF(e)
    }
    function wF(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function SF() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function wu(e) {
        return wu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        wu(e)
    }
    var a_ = function(e) {
        yF(t, e);
        var r = gF(t);
        function t() {
            return vF(this, t),
            r.apply(this, arguments)
        }
        return hF(t, [{
            key: "find",
            value: function(i) {
                return (0,
                Cn.default)(i).find("a.shiny-download-link")
            }
        }, {
            key: "renderValue",
            value: function(i, a) {
                (0,
                Cn.default)(i).attr("href", a)
            }
        }]),
        t
    }(_e);
    (0,
    Cn.default)(document).on("click.shinyDownloadLink", "a.shiny-download-link", function(e) {
        var r = Cn.default.Event("shiny:filedownload");
        r.name = this.id,
        r.href = this.href,
        (0,
        Cn.default)(document).trigger(r)
    });
    var Cne = N(pe());
    var OF = re()
      , _F = Vi()
      , PF = te()
      , EF = Fe()
      , IF = Xe()
      , s_ = Ml()
      , f_ = le()
      , qF = xr()
      , TF = zi();
    _F("search", function(e, r, t) {
        return [function(i) {
            var a = IF(this)
              , f = EF(i) ? void 0 : qF(i, e);
            return f ? OF(f, i, a) : new RegExp(i)[e](f_(a))
        }
        , function(n) {
            var i = PF(this)
              , a = f_(n)
              , f = t(r, i, a);
            if (f.done)
                return f.value;
            var c = i.lastIndex;
            s_(c, 0) || (i.lastIndex = 0);
            var l = TF(i, a);
            return s_(i.lastIndex, c) || (i.lastIndex = c),
            l === null ? -1 : l.index
        }
        ]
    });
    var Qne = N(z());
    var hr = N(W());
    var rne = N(z());
    function io(e) {
        return io = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        io(e)
    }
    function kF(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function c_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, l_(n.key), n)
        }
    }
    function xF(e, r, t) {
        return r && c_(e.prototype, r),
        t && c_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function no(e, r, t) {
        return r = l_(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function l_(e) {
        var r = RF(e, "string");
        return io(r) === "symbol" ? r : String(r)
    }
    function RF(e, r) {
        if (io(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (io(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var or = function() {
        function e(r, t, n) {
            kF(this, e),
            no(this, "target", void 0),
            no(this, "func", void 0),
            no(this, "delayMs", void 0),
            no(this, "timerId", void 0),
            no(this, "args", void 0),
            this.target = r,
            this.func = t,
            this.delayMs = n,
            this.timerId = null,
            this.args = null
        }
        return xF(e, [{
            key: "normalCall",
            value: function() {
                var t = this;
                this.$clearTimer();
                for (var n = arguments.length, i = new Array(n), a = 0; a < n; a++)
                    i[a] = arguments[a];
                this.args = i,
                this.timerId = setTimeout(function() {
                    t.timerId !== null && (t.$clearTimer(),
                    t.$invoke())
                }, this.delayMs)
            }
        }, {
            key: "immediateCall",
            value: function() {
                this.$clearTimer();
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                this.args = n,
                this.$invoke()
            }
        }, {
            key: "isPending",
            value: function() {
                return this.timerId !== null
            }
        }, {
            key: "$clearTimer",
            value: function() {
                this.timerId !== null && (clearTimeout(this.timerId),
                this.timerId = null)
            }
        }, {
            key: "$invoke",
            value: function() {
                this.args && this.args.length > 0 ? this.func.apply(this.target, this.args) : this.func.apply(this.target),
                this.args = null
            }
        }]),
        e
    }();
    function Gr(e, r) {
        var t = null;
        return function n() {
            for (var i = arguments.length, a = new Array(i), f = 0; f < i; f++)
                a[f] = arguments[f];
            t !== null && (clearTimeout(t),
            t = null),
            t = setTimeout(function() {
                t !== null && (t = null,
                r.apply(n, a))
            }, e)
        }
    }
    var vne = N(z());
    function oo(e) {
        return oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        oo(e)
    }
    function AF(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function p_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, h_(n.key), n)
        }
    }
    function $F(e, r, t) {
        return r && p_(e.prototype, r),
        t && p_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function v_(e, r, t) {
        return r = h_(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function h_(e) {
        var r = NF(e, "string");
        return oo(r) === "symbol" ? r : String(r)
    }
    function NF(e, r) {
        if (oo(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (oo(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var Gl = function() {
        function e(r, t) {
            AF(this, e),
            v_(this, "target", void 0),
            v_(this, "func", void 0),
            this.target = r,
            this.func = t
        }
        return $F(e, [{
            key: "normalCall",
            value: function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                this.func.apply(this.target, n)
            }
        }, {
            key: "immediateCall",
            value: function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                this.func.apply(this.target, n)
            }
        }]),
        e
    }();
    var Ene = N(z());
    function uo(e) {
        return uo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        uo(e)
    }
    function jF(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function d_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, m_(n.key), n)
        }
    }
    function LF(e, r, t) {
        return r && d_(e.prototype, r),
        t && d_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function ao(e, r, t) {
        return r = m_(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function m_(e) {
        var r = CF(e, "string");
        return uo(r) === "symbol" ? r : String(r)
    }
    function CF(e, r) {
        if (uo(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (uo(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var Bn = function() {
        function e(r, t, n) {
            jF(this, e),
            ao(this, "target", void 0),
            ao(this, "func", void 0),
            ao(this, "delayMs", void 0),
            ao(this, "timerId", void 0),
            ao(this, "args", void 0),
            this.target = r,
            this.func = t,
            this.delayMs = n,
            this.timerId = null,
            this.args = null
        }
        return LF(e, [{
            key: "normalCall",
            value: function() {
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                this.args = n,
                this.timerId === null && this.$invoke()
            }
        }, {
            key: "immediateCall",
            value: function() {
                this.$clearTimer();
                for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                    n[i] = arguments[i];
                this.args = n,
                this.$invoke()
            }
        }, {
            key: "isPending",
            value: function() {
                return this.args !== null
            }
        }, {
            key: "$clearTimer",
            value: function() {
                this.timerId !== null && (clearTimeout(this.timerId),
                this.timerId = null)
            }
        }, {
            key: "$invoke",
            value: function() {
                var t = this;
                this.args !== null && (this.func.apply(this.target, this.args),
                this.args = null,
                this.timerId = setTimeout(function() {
                    t.timerId !== null && (t.$clearTimer(),
                    t.isPending() && t.$invoke())
                }, this.delayMs))
            }
        }]),
        e
    }();
    function Mn(e) {
        return Mn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Mn(e)
    }
    function DF(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function y_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, MF(n.key), n)
        }
    }
    function BF(e, r, t) {
        return r && y_(e.prototype, r),
        t && y_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function MF(e) {
        var r = GF(e, "string");
        return Mn(r) === "symbol" ? r : String(r)
    }
    function GF(e, r) {
        if (Mn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Mn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function UF(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Ul(e, r)
    }
    function Ul(e, r) {
        return Ul = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Ul(e, r)
    }
    function FF(e) {
        var r = HF();
        return function() {
            var n = Su(e), i;
            if (r) {
                var a = Su(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return VF(this, i)
        }
    }
    function VF(e, r) {
        if (r && (Mn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return zF(e)
    }
    function zF(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function HF() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function Su(e) {
        return Su = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Su(e)
    }
    var g_ = function(e) {
        UF(t, e);
        var r = FF(t);
        function t() {
            return DF(this, t),
            r.apply(this, arguments)
        }
        return BF(t, [{
            key: "find",
            value: function(i) {
                return (0,
                hr.default)(i).find(".shiny-datatable-output")
            }
        }, {
            key: "onValueError",
            value: function(i, a) {
                Ie(i),
                this.renderError(i, a)
            }
        }, {
            key: "renderValue",
            value: function(i, a) {
                var f, c, l, h, m = (0,
                hr.default)(i).empty();
                if (!(!a || !a.colnames)) {
                    var y = hr.default.makeArray(a.colnames)
                      , b = hr.default.map(y, function($) {
                        return "<th>" + $ + "</th>"
                    }).join("");
                    b = "<thead><tr>" + b + "</tr></thead>";
                    var w = "";
                    (!((f = (c = a.options) === null || c === void 0 ? void 0 : c.searching) !== null && f !== void 0) || f) && (w = hr.default.map(y, function($) {
                        return '<th><input type="text" placeholder="' + t0($.replace(/(<([^>]+)>)/gi, "")) + '" /></th>'
                    }).join(""),
                    w = "<tfoot>" + w + "</tfoot>");
                    var S = '<table class="table table-striped table-hover">' + b + w + "</table>";
                    m.append(S),
                    a.evalOptions && hr.default.each(a.evalOptions, function($, R) {
                        a.options[R] = wt("(" + a.options[R] + ")")
                    });
                    var T = ((l = a.options) === null || l === void 0 || (h = l.search) === null || h === void 0 ? void 0 : h.caseInsensitive) !== !1
                      , k = (0,
                    hr.default)(i).children("table").DataTable(hr.default.extend({
                        processing: !0,
                        serverSide: !0,
                        order: [],
                        orderClasses: !1,
                        pageLength: 25,
                        ajax: {
                            url: a.action,
                            type: "POST",
                            data: function(R) {
                                R.search || (R.search = {}),
                                R.search.caseInsensitive = T,
                                R.escape = a.escape
                            }
                        }
                    }, a.options));
                    if (typeof a.callback == "string") {
                        var E = wt("(" + a.callback + ")");
                        typeof E == "function" && E(k)
                    }
                    m.find("label input").first().unbind("keyup").keyup(Gr(a.searchDelay, function() {
                        k.search(this.value).draw()
                    }));
                    var P = m.find("tfoot input");
                    P.length > 0 && (hr.default.each(k.settings()[0].aoColumns, function($, R) {
                        R.bSearchable || P.eq($).hide()
                    }),
                    P.keyup(Gr(a.searchDelay, function() {
                        k.column(P.index(this)).search(this.value).draw()
                    }))),
                    m.parents(".tab-content").css("overflow", "visible")
                }
            }
        }]),
        t
    }(_e);
    var Soe = N(z());
    var M_ = N(W());
    var qie = N(pe());
    var ZF = M()
      , eV = Fl().entries;
    ZF({
        target: "Object",
        stat: !0
    }, {
        entries: function(r) {
            return eV(r)
        }
    });
    var Cie = N(z());
    var rV = M()
      , tV = re()
      , nV = Ve()
      , iV = ct()
      , oV = xi()
      , aV = pt()
      , uV = Ta();
    rV({
        target: "Promise",
        stat: !0,
        forced: uV
    }, {
        allSettled: function(r) {
            var t = this
              , n = iV.f(t)
              , i = n.resolve
              , a = n.reject
              , f = oV(function() {
                var c = nV(t.resolve)
                  , l = []
                  , h = 0
                  , m = 1;
                aV(r, function(y) {
                    var b = h++
                      , w = !1;
                    m++,
                    tV(c, t, y).then(function(S) {
                        w || (w = !0,
                        l[b] = {
                            status: "fulfilled",
                            value: S
                        },
                        --m || i(l))
                    }, function(S) {
                        w || (w = !0,
                        l[b] = {
                            status: "rejected",
                            reason: S
                        },
                        --m || i(l))
                    })
                }),
                --m || i(l)
            });
            return f.error && a(f.value),
            n.promise
        }
    });
    var Ce = N(W());
    var die = N(z());
    function so(e) {
        return so = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        so(e)
    }
    function sV(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function O_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, P_(n.key), n)
        }
    }
    function fV(e, r, t) {
        return r && O_(e.prototype, r),
        t && O_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function __(e, r, t) {
        return r = P_(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function P_(e) {
        var r = cV(e, "string");
        return so(r) === "symbol" ? r : String(r)
    }
    function cV(e, r) {
        if (so(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (so(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var lV = function() {
        function e() {
            sV(this, e),
            __(this, "regular", void 0),
            __(this, "transitioned", void 0)
        }
        return fV(e, [{
            key: "setImageSend",
            value: function(t, n) {
                var i = new or(null,n,0);
                return this.regular = function() {
                    i.normalCall()
                }
                ,
                t.lastChanceCallback.push(function() {
                    i.isPending() && i.immediateCall()
                }),
                this.transitioned = Gr(200, this.regular),
                i
            }
        }]),
        e
    }()
      , ar = new lV;
    var wie = N(pe());
    var Pr = N(W())
      , pV = /<!--(SHINY.SINGLETON\[([\w]+)\])-->([\s\S]*?)<!--\/\1-->/
      , vV = /<head(?:\s[^>]*)?>([\s\S]*?)<\/head>/
      , Ou = {};
    function Vl(e, r, t) {
        var n = mV(e);
        switch (dV(n.head),
        hV(n.singletons),
        t.toLowerCase()) {
        case "replace":
            (0,
            Pr.default)(r).html(n.html);
            break;
        case "beforebegin":
            (0,
            Pr.default)(r).before(n.html);
            break;
        case "afterbegin":
            (0,
            Pr.default)(r).prepend(n.html);
            break;
        case "beforeend":
            (0,
            Pr.default)(r).append(n.html);
            break;
        case "afterend":
            (0,
            Pr.default)(r).after(n.html);
            break;
        default:
            throw new Error("Unknown where position: " + t)
        }
        return n
    }
    function hV(e) {
        Pr.default.extend(Ou, e)
    }
    function E_(e) {
        if (typeof e == "string")
            Ou[e] = !0;
        else if (e instanceof Array)
            for (var r = 0; r < e.length; r++)
                Ou[e[r]] = !0
    }
    function dV(e) {
        if (e.length > 0)
            for (var r = (0,
            Pr.default)("<div>" + e + "</div>").get(0), t = (0,
            Pr.default)("head"); r.hasChildNodes(); )
                t.append(r.firstChild)
    }
    function mV(e) {
        for (var r = {}, t, n = function(c, l, h, m) {
            return Ou[h] || r[h] ? "" : (r[h] = !0,
            m)
        }; t = e.replace(pV, n),
        e.length !== t.length; )
            e = t;
        for (var i = [], a = function(c, l) {
            return i.push(l),
            ""
        }; t = e.replace(vV, a),
        e.length !== t.length; )
            e = t;
        return {
            html: e,
            head: i.join("\n"),
            singletons: r
        }
    }
    function ur() {
        "use strict";
        ur = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && fo(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function Gn(e, r) {
        return bV(e) || gV(e, r) || k_(e, r) || yV()
    }
    function yV() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function gV(e, r) {
        var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (t != null) {
            var n, i, a, f, c = [], l = !0, h = !1;
            try {
                if (a = (t = t.call(e)).next,
                r === 0) {
                    if (Object(t) !== t)
                        return;
                    l = !1
                } else
                    for (; !(l = (n = a.call(t)).done) && (c.push(n.value),
                    c.length !== r); l = !0)
                        ;
            } catch (m) {
                h = !0,
                i = m
            } finally {
                try {
                    if (!l && t.return != null && (f = t.return(),
                    Object(f) !== f))
                        return
                } finally {
                    if (h)
                        throw i
                }
            }
            return c
        }
    }
    function bV(e) {
        if (Array.isArray(e))
            return e
    }
    function T_(e, r) {
        var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (!t) {
            if (Array.isArray(e) || (t = k_(e)) || r && e && typeof e.length == "number") {
                t && (e = t);
                var n = 0
                  , i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(h) {
                        throw h
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a = !0, f = !1, c;
        return {
            s: function() {
                t = t.call(e)
            },
            n: function() {
                var h = t.next();
                return a = h.done,
                h
            },
            e: function(h) {
                f = !0,
                c = h
            },
            f: function() {
                try {
                    !a && t.return != null && t.return()
                } finally {
                    if (f)
                        throw c
                }
            }
        }
    }
    function k_(e, r) {
        if (!!e) {
            if (typeof e == "string")
                return I_(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (t === "Object" && e.constructor && (t = e.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(e);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return I_(e, r)
        }
    }
    function I_(e, r) {
        (r == null || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++)
            n[t] = e[t];
        return n
    }
    function fo(e) {
        return fo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        fo(e)
    }
    function q_(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function lo(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    q_(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    q_(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function De(e, r) {
        return zl.apply(this, arguments)
    }
    function zl() {
        return zl = lo(ur().mark(function e(r, t) {
            var n, i, a, f, c, l, h = arguments;
            return ur().wrap(function(y) {
                for (; ; )
                    switch (y.prev = y.next) {
                    case 0:
                        return n = h.length > 2 && h[2] !== void 0 ? h[2] : "replace",
                        n === "replace" && Ie(r),
                        i = "",
                        a = [],
                        t === null ? i = "" : typeof t == "string" ? i = t : fo(t) === "object" && (i = t.html,
                        a = t.deps || []),
                        y.next = 7,
                        po(i, r, a, n);
                    case 7:
                        if (f = r,
                        n !== "replace") {
                            y.next = 14;
                            break
                        }
                        return ro(r),
                        y.next = 12,
                        eo(r);
                    case 12:
                        y.next = 19;
                        break;
                    case 14:
                        return c = (0,
                        Ce.default)(r).parent(),
                        c.length > 0 && (f = c,
                        (n === "beforeBegin" || n === "afterEnd") && (l = c.parent(),
                        l.length > 0 && (f = l))),
                        ro(f),
                        y.next = 19,
                        eo(f);
                    case 19:
                    case "end":
                        return y.stop()
                    }
            }, e)
        })),
        zl.apply(this, arguments)
    }
    function x_(e, r) {
        var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "replace";
        t === "replace" && Ie(e);
        var n = ""
          , i = [];
        r === null ? n = "" : typeof r == "string" ? n = r : fo(r) === "object" && (n = r.html,
        i = r.deps || []),
        Xl(n, e, i, t);
        var a = e;
        if (t === "replace")
            return ro(e),
            eo(e);
        var f = (0,
        Ce.default)(e).parent();
        if (f.length > 0 && (a = f,
        t === "beforeBegin" || t === "afterEnd")) {
            var c = f.parent();
            c.length > 0 && (a = c)
        }
        return ro(a),
        eo(a)
    }
    function po(e, r, t) {
        return Hl.apply(this, arguments)
    }
    function Hl() {
        return Hl = lo(ur().mark(function e(r, t, n) {
            var i, a = arguments;
            return ur().wrap(function(c) {
                for (; ; )
                    switch (c.prev = c.next) {
                    case 0:
                        return i = a.length > 3 && a[3] !== void 0 ? a[3] : "replace",
                        c.next = 3,
                        _t(n);
                    case 3:
                        return c.abrupt("return", Vl(r, t, i));
                    case 4:
                    case "end":
                        return c.stop()
                    }
            }, e)
        })),
        Hl.apply(this, arguments)
    }
    function Xl(e, r, t) {
        var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "replace";
        return Ql(t),
        Vl(e, r, n)
    }
    function _t(e) {
        return Kl.apply(this, arguments)
    }
    function Kl() {
        return Kl = lo(ur().mark(function e(r) {
            var t, n, i;
            return ur().wrap(function(f) {
                for (; ; )
                    switch (f.prev = f.next) {
                    case 0:
                        if (!r) {
                            f.next = 18;
                            break
                        }
                        t = T_(r),
                        f.prev = 2,
                        t.s();
                    case 4:
                        if ((n = t.n()).done) {
                            f.next = 10;
                            break
                        }
                        return i = n.value,
                        f.next = 8,
                        OV(i);
                    case 8:
                        f.next = 4;
                        break;
                    case 10:
                        f.next = 15;
                        break;
                    case 12:
                        f.prev = 12,
                        f.t0 = f.catch(2),
                        t.e(f.t0);
                    case 15:
                        return f.prev = 15,
                        t.f(),
                        f.finish(15);
                    case 18:
                    case "end":
                        return f.stop()
                    }
            }, e, null, [[2, 12, 15, 18]])
        })),
        Kl.apply(this, arguments)
    }
    function Ql(e) {
        if (e) {
            var r = T_(e), t;
            try {
                for (r.s(); !(t = r.n()).done; ) {
                    var n = t.value;
                    _V(n)
                }
            } catch (i) {
                r.e(i)
            } finally {
                r.f()
            }
        }
    }
    var co = {};
    function _u(e, r) {
        co[e] = r
    }
    function R_(e) {
        if (!e.restyle)
            return !1;
        var r = Object.keys(co)
          , t = r.indexOf(e.name);
        return t === -1 ? !1 : co[r[t]] === e.version
    }
    function A_(e) {
        var r = (0,
        Ce.default)("head").first()
          , t = function(f, c) {
            var l = new XMLHttpRequest;
            l.open("GET", f),
            l.onload = function() {
                var h = "shiny_restyle_" + f.split("?restyle")[0].replace(/\W/g, "_")
                  , m = r.find("style#" + h)
                  , y = (0,
                Ce.default)("<style>").attr("id", h).html(l.responseText);
                r.append(y),
                m.remove(),
                i(c),
                ar.transitioned()
            }
            ,
            l.send()
        }
          , n = function(f) {
            if (!f)
                return null;
            for (var c = 0; c < document.styleSheets.length; c++) {
                var l = document.styleSheets[c];
                if (typeof l.href == "string" && l.href.indexOf(f) > -1)
                    return l
            }
            return null
        }
          , i = function(f) {
            !f || (f.disabled = !0,
            ut() && (f.cssText = ""),
            f.ownerNode instanceof Element && (0,
            Ce.default)(f.ownerNode).remove())
        };
        e.map(function(a) {
            var f = (0,
            Ce.default)(a)
              , c = n(f.attr("href"))
              , l = f.attr("href") + "?restyle=" + new Date().getTime();
            ut() ? t(l, c) : (f.attr("href", l),
            f.attr("onload", function() {
                var h = (0,
                Ce.default)("<div>").css("transition", "0.1s all").css("position", "absolute").css("top", "-1000px").css("left", "0");
                h.one("transitionend", function() {
                    h.remove(),
                    i(c),
                    ar.transitioned()
                }),
                (0,
                Ce.default)(document.body).append(h);
                var m = "#" + Math.floor(Math.random() * 16777215).toString(16);
                setTimeout(function() {
                    return h.css("color", m)
                }, 10)
            }),
            r.append(a))
        })
    }
    function Jl(e) {
        return e.stylesheet.map(function(r) {
            U(r, "rel") || (r.rel = "stylesheet"),
            U(r, "type") || (r.type = "text/css");
            var t = document.createElement("link");
            return Object.entries(r).forEach(function(n) {
                var i = Gn(n, 2)
                  , a = i[0]
                  , f = i[1];
                a === "href" && (f = encodeURI(f)),
                t.setAttribute(a, f || "")
            }),
            t
        })
    }
    function $_(e, r) {
        var t = Jl(e);
        t.length !== 0 && r.append(t)
    }
    function wV(e, r) {
        e.script.forEach(function(t) {
            var n = document.createElement("script");
            Object.entries(t).forEach(function(i) {
                var a = Gn(i, 2)
                  , f = a[0]
                  , c = a[1];
                f === "src" && (c = encodeURI(c)),
                n.setAttribute(f, c || "")
            }),
            r.append(n)
        })
    }
    function SV(e) {
        return Wl.apply(this, arguments)
    }
    function Wl() {
        return Wl = lo(ur().mark(function e(r) {
            var t;
            return ur().wrap(function(i) {
                for (; ; )
                    switch (i.prev = i.next) {
                    case 0:
                        return t = [],
                        r.script.forEach(function(a) {
                            var f = document.createElement("script");
                            U(a, "async") || (f.async = !1),
                            Object.entries(a).forEach(function(l) {
                                var h = Gn(l, 2)
                                  , m = h[0]
                                  , y = h[1];
                                m === "src" && (y = encodeURI(y)),
                                f.setAttribute(m, y || "")
                            });
                            var c = new Promise(function(l, h) {
                                f.onload = function(m) {
                                    l(null)
                                }
                                ,
                                f.onerror = function(m) {
                                    h(m)
                                }
                            }
                            );
                            t.push(c),
                            document.head.append(f)
                        }),
                        i.next = 4,
                        Promise.allSettled(t);
                    case 4:
                    case "end":
                        return i.stop()
                    }
            }, e)
        })),
        Wl.apply(this, arguments)
    }
    function N_(e, r) {
        e.meta.forEach(function(t) {
            for (var n = document.createElement("meta"), i = 0, a = Object.entries(t); i < a.length; i++) {
                var f = Gn(a[i], 2)
                  , c = f[0]
                  , l = f[1];
                n.setAttribute(c, l)
            }
            r.append(n)
        })
    }
    function j_(e, r) {
        e.attachment.forEach(function(t) {
            var n = (0,
            Ce.default)("<link rel='attachment'>").attr("id", e.name + "-" + t.key + "-attachment").attr("href", encodeURI(t.href));
            r.append(n)
        })
    }
    function L_(e, r) {
        if (e.head) {
            var t = (0,
            Ce.default)("<head></head>");
            t.html(e.head),
            r.append(t.children())
        }
    }
    function OV(e) {
        return Yl.apply(this, arguments)
    }
    function Yl() {
        return Yl = lo(ur().mark(function e(r) {
            var t, n;
            return ur().wrap(function(a) {
                for (; ; )
                    switch (a.prev = a.next) {
                    case 0:
                        if (t = C_(r),
                        !R_(t)) {
                            a.next = 4;
                            break
                        }
                        return A_(Jl(t)),
                        a.abrupt("return", !0);
                    case 4:
                        if (!U(co, t.name)) {
                            a.next = 6;
                            break
                        }
                        return a.abrupt("return", !1);
                    case 6:
                        return _u(t.name, t.version),
                        n = (0,
                        Ce.default)("head").first(),
                        N_(t, n),
                        $_(t, n),
                        a.next = 12,
                        SV(t);
                    case 12:
                        return j_(t, n),
                        L_(t, n),
                        a.abrupt("return", !0);
                    case 15:
                    case "end":
                        return a.stop()
                    }
            }, e)
        })),
        Yl.apply(this, arguments)
    }
    function _V(e) {
        var r = C_(e);
        if (R_(r))
            return A_(Jl(r)),
            !0;
        if (U(co, r.name))
            return !1;
        _u(r.name, r.version);
        var t = (0,
        Ce.default)("head").first();
        return N_(r, t),
        $_(r, t),
        wV(r, t),
        j_(r, t),
        L_(r, t),
        !0
    }
    function C_(e) {
        var r, t = (r = e.src) === null || r === void 0 ? void 0 : r.href, n = {
            name: e.name,
            version: e.version,
            restyle: e.restyle,
            meta: [],
            stylesheet: [],
            script: [],
            attachment: [],
            head: e.head
        };
        e.meta && (Array.isArray(e.meta) ? n.meta = e.meta : n.meta = Object.entries(e.meta).map(function(f) {
            var c = Gn(f, 2)
              , l = c[0]
              , h = c[1];
            return {
                name: l,
                content: h
            }
        })),
        n.stylesheet = Ki(e.stylesheet).map(function(f) {
            return typeof f == "string" && (f = {
                href: f
            }),
            t && (f.href = t + "/" + f.href),
            f
        }),
        n.script = Ki(e.script).map(function(f) {
            return typeof f == "string" && (f = {
                src: f
            }),
            t && (f.src = t + "/" + f.src),
            f
        });
        var i = e.attachment;
        if (i || (i = []),
        typeof i == "string" && (i = [i]),
        Array.isArray(i)) {
            var a = i;
            i = a.map(function(f, c) {
                return typeof f == "string" ? {
                    key: (c + 1).toString(),
                    href: f
                } : f
            })
        } else
            i = Object.entries(i).map(function(f) {
                var c = Gn(f, 2)
                  , l = c[0]
                  , h = c[1];
                return {
                    key: l,
                    href: h
                }
            });
        return n.attachment = i.map(function(f) {
            return t && (f.href = t + "/" + f.href),
            f
        }),
        n
    }
    function Pt(e) {
        return Pt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Pt(e)
    }
    function Zl() {
        "use strict";
        Zl = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && Pt(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function D_(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function PV(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    D_(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    D_(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function EV(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function B_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, qV(n.key), n)
        }
    }
    function IV(e, r, t) {
        return r && B_(e.prototype, r),
        t && B_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function qV(e) {
        var r = TV(e, "string");
        return Pt(r) === "symbol" ? r : String(r)
    }
    function TV(e, r) {
        if (Pt(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Pt(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function kV(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && ep(e, r)
    }
    function ep(e, r) {
        return ep = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        ep(e, r)
    }
    function xV(e) {
        var r = $V();
        return function() {
            var n = Pu(e), i;
            if (r) {
                var a = Pu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return RV(this, i)
        }
    }
    function RV(e, r) {
        if (r && (Pt(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return AV(e)
    }
    function AV(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function $V() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function Pu(e) {
        return Pu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Pu(e)
    }
    var G_ = function(e) {
        kV(t, e);
        var r = xV(t);
        function t() {
            return EV(this, t),
            r.apply(this, arguments)
        }
        return IV(t, [{
            key: "find",
            value: function(i) {
                return (0,
                M_.default)(i).find(".shiny-html-output")
            }
        }, {
            key: "onValueError",
            value: function(i, a) {
                Ie(i),
                this.renderError(i, a)
            }
        }, {
            key: "renderValue",
            value: function() {
                var n = PV(Zl().mark(function a(f, c) {
                    return Zl().wrap(function(h) {
                        for (; ; )
                            switch (h.prev = h.next) {
                            case 0:
                                return h.next = 2,
                                De(f, c);
                            case 2:
                            case "end":
                                return h.stop()
                            }
                    }, a)
                }));
                function i(a, f) {
                    return n.apply(this, arguments)
                }
                return i
            }()
        }]),
        t
    }(_e);
    var NV = M()
      , jV = Dr().filter
      , LV = dn()
      , CV = LV("filter");
    NV({
        target: "Array",
        proto: !0,
        forced: !CV
    }, {
        filter: function(r) {
            return jV(this, r, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var eue = N(z());
    var Vr = N(W());
    var DV = M()
      , BV = Dr().some
      , MV = Yt()
      , GV = MV("some");
    DV({
        target: "Array",
        proto: !0,
        forced: !GV
    }, {
        some: function(r) {
            return BV(this, r, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var UV = M()
      , FV = Fl().values;
    UV({
        target: "Object",
        stat: !0
    }, {
        values: function(r) {
            return FV(r)
        }
    });
    var VV = M()
      , zV = ne()
      , HV = Qs()
      , KV = xe()
      , WV = Je()
      , YV = vt();
    VV({
        target: "Object",
        stat: !0,
        sham: !zV
    }, {
        getOwnPropertyDescriptors: function(r) {
            for (var t = KV(r), n = WV.f, i = HV(t), a = {}, f = 0, c, l; i.length > f; )
                l = n(t, c = i[f++]),
                l !== void 0 && YV(a, c, l);
            return a
        }
    });
    var XV = M()
      , QV = ne()
      , U_ = ca().f;
    XV({
        target: "Object",
        stat: !0,
        forced: Object.defineProperties !== U_,
        sham: !QV
    }, {
        defineProperties: U_
    });
    var vae = N(z());
    var K_ = N(W());
    var z_ = N(W());
    function F_(e, r, t, n, i) {
        var a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !0;
        a = a || !0;
        var f = (i - n) / (t - r)
          , c = e - r
          , l = c * f + n;
        if (a) {
            var h = Math.max(i, n)
              , m = Math.min(i, n);
            l > h ? l = h : l < m && (l = m)
        }
        return l
    }
    function V_(e, r, t, n, i) {
        return {
            scale: function(f, c) {
                return i && (f = Math.log(f) / Math.log(i)),
                F_(f, e, r, t, n, c)
            },
            scaleInv: function(f, c) {
                var l = F_(f, t, n, e, r, c);
                return i && (l = Math.pow(i, l)),
                l
            }
        }
    }
    function JV(e) {
        var r = e
          , t = r.domain
          , n = r.range
          , i = r.log && r.log.x ? r.log.x : null
          , a = r.log && r.log.y ? r.log.y : null
          , f = V_(t.left, t.right, n.left, n.right, i)
          , c = V_(t.bottom, t.top, n.bottom, n.top, a);
        function l(m, y) {
            return tr(m, function(b, w) {
                var S = w.substring(0, 1);
                return S === "x" ? f.scale(b, y) : S === "y" ? c.scale(b, y) : null
            })
        }
        r.scaleDataToImg = l;
        function h(m, y) {
            return tr(m, function(b, w) {
                var S = w.substring(0, 1);
                return S === "x" ? f.scaleInv(b, y) : S === "y" ? c.scaleInv(b, y) : null
            })
        }
        return r.scaleImgToData = h,
        r.clipImg = function(m) {
            var y = {
                x: m.x,
                y: m.y
            }
              , b = r.range;
            return m.x > b.right ? y.x = b.right : m.x < b.left && (y.x = b.left),
            m.y > b.bottom ? y.y = b.bottom : m.y < b.top && (y.y = b.top),
            y
        }
        ,
        r
    }
    function rp(e) {
        return e.map(function(r) {
            return JV(r)
        })
    }
    function ZV(e) {
        var r = e[0].getBoundingClientRect();
        return {
            x: r.width / e.outerWidth(),
            y: r.height / e.outerHeight()
        }
    }
    function tp(e) {
        var r = e.offset()
          , t = ZV(e)
          , n = {
            left: parseInt(e.css("border-left-width")) + parseInt(e.css("padding-left")),
            top: parseInt(e.css("border-top-width")) + parseInt(e.css("padding-top"))
        };
        return {
            x: r.left + t.x * n.left,
            y: r.top + t.y * n.top
        }
    }
    function ez(e) {
        var r = {
            x: e.width() / e.outerWidth(),
            y: e.height() / e.outerHeight()
        }
          , t = e[0].getBoundingClientRect();
        return {
            x: r.x * t.width,
            y: r.y * t.height
        }
    }
    function np(e, r) {
        var t = e.find("img")
          , n = t[0];
        if (r.panels.length === 0) {
            var i = {
                top: 0,
                left: 0,
                right: n.clientWidth - 1,
                bottom: n.clientHeight - 1
            };
            r.panels[0] = {
                domain: i,
                range: i,
                mapping: {}
            }
        }
        var a = r;
        a.dims.height = a.dims.height || n.naturalHeight,
        a.dims.width = a.dims.width || n.naturalWidth,
        a.panels = rp(r.panels),
        a.mouseOffsetCss = function(l) {
            var h = tp(t);
            return {
                x: l.pageX - h.x,
                y: l.pageY - h.y
            }
        }
        ;
        function f(l) {
            var h = a.imgToCssScalingRatio()
              , m = tr(l, function(y, b) {
                var w = b.substring(0, 1);
                return w === "x" ? l[b] / h.x : w === "y" ? l[b] / h.y : null
            });
            return m
        }
        a.scaleCssToImg = f;
        function c(l) {
            var h = a.imgToCssScalingRatio()
              , m = tr(l, function(y, b) {
                var w = b.substring(0, 1);
                return w === "x" ? l[b] * h.x : w === "y" ? l[b] * h.y : null
            });
            return m
        }
        return a.scaleImgToCss = c,
        a.imgToCssScalingRatio = function() {
            var l = ez(t);
            return {
                x: l.x / a.dims.width,
                y: l.y / a.dims.height
            }
        }
        ,
        a.cssToImgScalingRatio = function() {
            var l = a.imgToCssScalingRatio();
            return {
                x: 1 / l.x,
                y: 1 / l.y
            }
        }
        ,
        a.getPanelCss = function(l) {
            var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, m = a.scaleCssToImg(l), y = m.x, b = m.y, w = a.cssToImgScalingRatio(), S = {
                x: h * w.x,
                y: h * w.y
            }, T = [], k = [], E, P;
            for (P = 0; P < a.panels.length; P++)
                if (E = a.panels[P].range,
                y <= E.right + S.x && y >= E.left - S.x && b <= E.bottom + S.y && b >= E.top - S.y) {
                    T.push(a.panels[P]);
                    var $ = 0
                      , R = 0;
                    y > E.right && y <= E.right + S.x ? $ = y - E.right : y < E.left && y >= E.left - S.x && ($ = y - E.left),
                    b > E.bottom && b <= E.bottom + S.y ? R = b - E.bottom : b < E.top && b >= E.top - S.y && (R = b - E.top),
                    k.push(Math.sqrt(Math.pow($, 2) + Math.pow(R, 2)))
                }
            if (T.length) {
                var j = Math.min.apply(null, k);
                for (P = 0; P < T.length; P++)
                    if (k[P] === j)
                        return T[P]
            }
            return null
        }
        ,
        a.isInPanelCss = function(l) {
            var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            return !!a.getPanelCss(l, h)
        }
        ,
        a.mouseCoordinateSender = function(l) {
            var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
              , m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
            return function(y) {
                if (y === null) {
                    pr(l, null);
                    return
                }
                var b = a.mouseOffsetCss(y);
                if (!a.isInPanelCss(b)) {
                    if (m) {
                        pr(l, null);
                        return
                    }
                    if (h)
                        return;
                    var w = {
                        coords_css: b,
                        coords_img: a.scaleCssToImg(b)
                    };
                    pr(l, w, {
                        priority: "event"
                    });
                    return
                }
                var S = a.getPanelCss(b)
                  , T = a.scaleCssToImg(b)
                  , k = S.scaleImgToData(T)
                  , E = {
                    x: k == null ? void 0 : k.x,
                    y: k == null ? void 0 : k.y,
                    coords_css: b,
                    coords_img: T,
                    img_css_ratio: a.cssToImgScalingRatio()
                };
                z_.default.extend(E, S.panel_vars),
                E.mapping = S.mapping,
                E.domain = S.domain,
                E.range = S.range,
                E.log = S.log,
                pr(l, E, {
                    priority: "event"
                })
            }
        }
        ,
        a
    }
    function Un(e, r) {
        return {
            xmin: Math.min(e.x, r.x),
            xmax: Math.max(e.x, r.x),
            ymin: Math.min(e.y, r.y),
            ymax: Math.max(e.y, r.y)
        }
    }
    function Ur(e, r, t) {
        e instanceof Array || (e = [e]);
        var n = Math.max.apply(null, e)
          , i = Math.min.apply(null, e)
          , a = 0;
        n > t ? a = t - n : i < r && (a = r - i);
        for (var f = [], c = 0; c < e.length; c++)
            f[c] = e[c] + a;
        return f
    }
    function vo(e) {
        return vo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        vo(e)
    }
    function H_(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r && (n = n.filter(function(i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
    }
    function Eu(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2 ? H_(Object(t), !0).forEach(function(n) {
                rz(e, n, t[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : H_(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            })
        }
        return e
    }
    function rz(e, r, t) {
        return r = tz(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function tz(e) {
        var r = nz(e, "string");
        return vo(r) === "symbol" ? r : String(r)
    }
    function nz(e, r) {
        if (vo(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (vo(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function ip(e, r, t, n) {
        var i = 10
          , a = e[0]
          , f = null
          , c = {}
          , l = t.scaleCssToImg
          , h = t.scaleImgToCss;
        m();
        function m() {
            c.brushing = !1,
            c.dragging = !1,
            c.resizing = !1,
            c.down = {
                x: NaN,
                y: NaN
            },
            c.up = {
                x: NaN,
                y: NaN
            },
            c.resizeSides = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            },
            c.boundsCss = {
                xmin: NaN,
                xmax: NaN,
                ymin: NaN,
                ymax: NaN
            },
            c.boundsData = {
                xmin: NaN,
                xmax: NaN,
                ymin: NaN,
                ymax: NaN
            },
            c.panel = null,
            c.changeStartBounds = {
                xmin: NaN,
                xmax: NaN,
                ymin: NaN,
                ymax: NaN
            },
            f && f.remove()
        }
        function y() {
            var O = e.find("#" + a.id + "_brush");
            return O.length > 0
        }
        function b() {
            var O = e.find("#" + a.id + "_brush");
            if (O.length !== 0) {
                var q = O.data("bounds-data")
                  , x = O.data("panel");
                if (!(!q || !x)) {
                    for (var A = 0; A < t.panels.length; A++) {
                        var ye = t.panels[A];
                        if (il(x.mapping, ye.mapping) && il(x.panel_vars, ye.panel_vars)) {
                            c.panel = t.panels[A];
                            break
                        }
                    }
                    if (c.panel === null) {
                        O.remove();
                        return
                    }
                    f = O,
                    P(q),
                    j()
                }
            }
        }
        function w() {
            var O = P();
            Object.values(O).some(u0) || (P(O),
            j())
        }
        function S(O) {
            var q = c.boundsCss;
            return O.x <= q.xmax && O.x >= q.xmin && O.y <= q.ymax && O.y >= q.ymin
        }
        function T(O) {
            var q = k(O);
            return q.left || q.right || q.top || q.bottom
        }
        function k(O) {
            var q = c.boundsCss
              , x = {
                xmin: q.xmin - i,
                xmax: q.xmax + i,
                ymin: q.ymin - i,
                ymax: q.ymax + i
            }
              , A = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            };
            return (r.brushDirection === "xy" || r.brushDirection === "x") && O.y <= x.ymax && O.y >= x.ymin && (O.x < q.xmin && O.x >= x.xmin ? A.left = !0 : O.x > q.xmax && O.x <= x.xmax && (A.right = !0)),
            (r.brushDirection === "xy" || r.brushDirection === "y") && O.x <= x.xmax && O.x >= x.xmin && (O.y < q.ymin && O.y >= x.ymin ? A.top = !0 : O.y > q.ymax && O.y <= x.ymax && (A.bottom = !0)),
            A
        }
        function E(O) {
            if (O === void 0)
                return Eu({}, c.boundsCss);
            var q = {
                x: O.xmin,
                y: O.ymin
            }
              , x = {
                x: O.xmax,
                y: O.ymax
            }
              , A = c.panel
              , ye = A.range;
            r.brushClip && (q = h(A.clipImg(l(q))),
            x = h(A.clipImg(l(x)))),
            r.brushDirection === "xy" || (r.brushDirection === "x" ? (q.y = h({
                y: ye.top
            }).y,
            x.y = h({
                y: ye.bottom
            }).y) : r.brushDirection === "y" && (q.x = h({
                x: ye.left
            }).x,
            x.x = h({
                x: ye.right
            }).x)),
            c.boundsCss = {
                xmin: q.x,
                xmax: x.x,
                ymin: q.y,
                ymax: x.y
            };
            var Me = A.scaleImgToData(l(q))
              , sr = A.scaleImgToData(l(x));
            c.boundsData = Un(Me, sr),
            c.boundsData = tr(c.boundsData, function(Ge) {
                return tl(Ge, 14)
            }),
            f.data("bounds-data", c.boundsData),
            f.data("panel", c.panel)
        }
        function P(O) {
            if (typeof O == "undefined")
                return Eu({}, c.boundsData);
            var q = h(c.panel.scaleDataToImg(O));
            q = tr(q, function(x) {
                return tl(x, 13)
            }),
            E({
                xmin: Math.min(q.xmin, q.xmax),
                xmax: Math.max(q.xmin, q.xmax),
                ymin: Math.min(q.ymin, q.ymax),
                ymax: Math.max(q.ymin, q.ymax)
            })
        }
        function $() {
            return c.panel
        }
        function R() {
            f && f.remove(),
            f = (0,
            K_.default)(document.createElement("div")).attr("id", a.id + "_brush").css({
                "background-color": r.brushFill,
                opacity: r.brushOpacity,
                "pointer-events": "none",
                position: "absolute"
            }).hide();
            var O = "1px solid " + r.brushStroke;
            r.brushDirection === "xy" ? f.css({
                border: O
            }) : r.brushDirection === "x" ? f.css({
                "border-left": O,
                "border-right": O
            }) : r.brushDirection === "y" && f.css({
                "border-top": O,
                "border-bottom": O
            }),
            e.append(f),
            f.offset({
                x: 0,
                y: 0
            }).width(0).outerHeight(0)
        }
        function j() {
            var O = tp(e.find("img"))
              , q = c.boundsCss;
            f.offset({
                top: O.y + q.ymin,
                left: O.x + q.xmin
            }).outerWidth(q.xmax - q.xmin + 1).outerHeight(q.ymax - q.ymin + 1)
        }
        function L(O) {
            if (O === void 0)
                return c.down;
            c.down = O
        }
        function F(O) {
            if (O === void 0)
                return c.up;
            c.up = O
        }
        function C() {
            return c.brushing
        }
        function B() {
            c.brushing = !0,
            R(),
            c.panel = t.getPanelCss(c.down, n),
            E(Un(c.down, c.down)),
            j()
        }
        function D(O) {
            E(Un(c.down, O)),
            f.show(),
            j()
        }
        function V() {
            c.brushing = !1,
            E(Un(c.down, c.up))
        }
        function s() {
            return c.dragging
        }
        function o() {
            c.dragging = !0,
            c.changeStartBounds = Eu({}, c.boundsCss)
        }
        function u(O) {
            var q = O.x - c.down.x
              , x = O.y - c.down.y
              , A = c.changeStartBounds
              , ye = {
                xmin: A.xmin + q,
                xmax: A.xmax + q,
                ymin: A.ymin + x,
                ymax: A.ymax + x
            };
            if (r.brushClip) {
                var Me = c.panel
                  , sr = Me.range
                  , Ge = l(ye)
                  , Mt = [Ge.xmin, Ge.xmax]
                  , Gt = [Ge.ymin, Ge.ymax];
                Mt = Ur(Mt, sr.left, sr.right),
                Gt = Ur(Gt, sr.top, sr.bottom),
                ye = h({
                    xmin: Mt[0],
                    xmax: Mt[1],
                    ymin: Gt[0],
                    ymax: Gt[1]
                })
            }
            E(ye),
            j()
        }
        function v() {
            c.dragging = !1
        }
        function d() {
            return c.resizing
        }
        function p() {
            c.resizing = !0,
            c.changeStartBounds = Eu({}, c.boundsCss),
            c.resizeSides = k(c.down)
        }
        function g(O) {
            var q = {
                x: O.x - c.down.x,
                y: O.y - c.down.y
            }
              , x = l(q)
              , A = l(c.changeStartBounds)
              , ye = c.panel
              , Me = ye.range;
            if (c.resizeSides.left) {
                var sr = Ur(A.xmin + x.x, Me.left, A.xmax)[0];
                A.xmin = sr
            } else if (c.resizeSides.right) {
                var Ge = Ur(A.xmax + x.x, A.xmin, Me.right)[0];
                A.xmax = Ge
            }
            if (c.resizeSides.top) {
                var Mt = Ur(A.ymin + x.y, Me.top, A.ymax)[0];
                A.ymin = Mt
            } else if (c.resizeSides.bottom) {
                var Gt = Ur(A.ymax + x.y, A.ymin, Me.bottom)[0];
                A.ymax = Gt
            }
            E(h(A)),
            j()
        }
        function _() {
            c.resizing = !1
        }
        return {
            reset: m,
            hasOldBrush: y,
            importOldBrush: b,
            isInsideBrush: S,
            isInResizeArea: T,
            whichResizeSides: k,
            onResize: w,
            boundsCss: E,
            boundsData: P,
            getPanel: $,
            down: L,
            up: F,
            isBrushing: C,
            startBrushing: B,
            brushTo: D,
            stopBrushing: V,
            isDragging: s,
            startDragging: o,
            dragTo: u,
            stopDragging: v,
            isResizing: d,
            startResizing: p,
            resizeTo: g,
            stopResizing: _
        }
    }
    var W_ = N(W());
    function op(e, r, t) {
        var n = void 0
          , i = null;
        function a(m, y) {
            var b = W_.default.Event(m, {
                which: y.which,
                pageX: y.pageX,
                pageY: y.pageY
            });
            e.trigger(b)
        }
        function f() {
            i && (a("mousedown2", i),
            i = null)
        }
        function c(m) {
            i = m,
            n = window.setTimeout(function() {
                f()
            }, t)
        }
        function l(m) {
            if (m.which === 1) {
                if (!r) {
                    a("mousedown2", m);
                    return
                }
                i === null ? c(m) : (clearTimeout(n),
                i && Math.abs(i.pageX - m.pageX) > 2 || Math.abs(i.pageY - m.pageY) > 2 ? (f(),
                c(m)) : (i = null,
                a("dblclick2", m)))
            }
        }
        function h(m) {
            m.which = 1,
            a("dblclick2", m)
        }
        return {
            mousedown: l,
            dblclickIE8: h
        }
    }
    var Fr = N(W());
    function Iu(e, r, t) {
        var n = t.mouseCoordinateSender(e, r);
        return n(null),
        {
            mousedown: function(a) {
                a.which === 1 && n(a)
            },
            onResetImg: function() {
                n(null)
            },
            onResize: null
        }
    }
    function ap(e, r, t, n, i, a) {
        var f = a.mouseCoordinateSender(e, n, i), c;
        t === "throttle" ? c = new Bn(null,f,r) : c = new or(null,f,r),
        c.immediateCall(null);
        var l;
        return i ? l = function() {
            c.normalCall(null)
        }
        : l = function() {}
        ,
        {
            mousemove: function(m) {
                c.normalCall(m)
            },
            mouseout: l,
            onResetImg: function() {
                c.immediateCall(null)
            },
            onResize: null
        }
    }
    function up(e, r, t, n, i) {
        var a = 20
          , f = ip(r, t, n, a);
        r.on("shiny-internal:brushed.image_output", function(R, j) {
            j.brushId === e && j.outputId !== i && (r.data("mostRecentBrush", !1),
            f.reset())
        });
        function c(R) {
            r.removeClass("crosshair grabbable grabbing ns-resize ew-resize nesw-resize nwse-resize"),
            R && r.addClass(R)
        }
        function l() {
            var R = f.boundsData();
            if (isNaN(R.xmin)) {
                pr(e, null),
                Et.find(document.documentElement).trigger("shiny-internal:brushed", {
                    brushId: e,
                    outputId: null
                });
                return
            }
            var j = f.getPanel();
            Fr.default.extend(R, j.panel_vars),
            R.coords_css = f.boundsCss(),
            R.coords_img = n.scaleCssToImg(R.coords_css),
            R.img_css_ratio = n.cssToImgScalingRatio(),
            R.mapping = j.mapping,
            R.domain = j.domain,
            R.range = j.range,
            R.log = j.log,
            R.direction = t.brushDirection,
            R.brushId = e,
            R.outputId = i,
            pr(e, R),
            r.data("mostRecentBrush", !0),
            Et.find(document.documentElement).trigger("shiny-internal:brushed", R)
        }
        var h;
        t.brushDelayType === "throttle" ? h = new Bn(null,l,t.brushDelay) : h = new or(null,l,t.brushDelay),
        f.hasOldBrush() || h.immediateCall();
        function m(R) {
            if (!(f.isBrushing() || f.isDragging() || f.isResizing()) && R.which === 1) {
                var j = n.mouseOffsetCss(R);
                if (!(t.brushClip && !n.isInPanelCss(j, a)))
                    if (f.up({
                        x: NaN,
                        y: NaN
                    }),
                    f.down(j),
                    f.isInResizeArea(j))
                        f.startResizing(j),
                        (0,
                        Fr.default)(document).on("mousemove.image_brush", S).on("mouseup.image_brush", E);
                    else if (f.isInsideBrush(j))
                        f.startDragging(j),
                        c("grabbing"),
                        (0,
                        Fr.default)(document).on("mousemove.image_brush", w).on("mouseup.image_brush", k);
                    else {
                        var L = n.getPanelCss(j, a);
                        f.startBrushing(L.clipImg(n.scaleCssToImg(j))),
                        (0,
                        Fr.default)(document).on("mousemove.image_brush", b).on("mouseup.image_brush", T)
                    }
            }
        }
        function y(R) {
            var j = n.mouseOffsetCss(R);
            if (!(f.isBrushing() || f.isDragging() || f.isResizing()))
                if (f.isInResizeArea(j)) {
                    var L = f.whichResizeSides(j);
                    L.left && L.top || L.right && L.bottom ? c("nwse-resize") : L.left && L.bottom || L.right && L.top ? c("nesw-resize") : L.left || L.right ? c("ew-resize") : (L.top || L.bottom) && c("ns-resize")
                } else
                    f.isInsideBrush(j) ? c("grabbable") : n.isInPanelCss(j, a) ? c("crosshair") : c(null)
        }
        function b(R) {
            f.brushTo(n.mouseOffsetCss(R)),
            h.normalCall()
        }
        function w(R) {
            f.dragTo(n.mouseOffsetCss(R)),
            h.normalCall()
        }
        function S(R) {
            f.resizeTo(n.mouseOffsetCss(R)),
            h.normalCall()
        }
        function T(R) {
            if (R.which === 1) {
                if ((0,
                Fr.default)(document).off("mousemove.image_brush").off("mouseup.image_brush"),
                f.up(n.mouseOffsetCss(R)),
                f.stopBrushing(),
                c("crosshair"),
                f.down().x === f.up().x && f.down().y === f.up().y) {
                    f.reset(),
                    h.immediateCall();
                    return
                }
                h.isPending() && h.immediateCall()
            }
        }
        function k(R) {
            R.which === 1 && ((0,
            Fr.default)(document).off("mousemove.image_brush").off("mouseup.image_brush"),
            f.up(n.mouseOffsetCss(R)),
            f.stopDragging(),
            c("grabbable"),
            h.isPending() && h.immediateCall())
        }
        function E(R) {
            R.which === 1 && ((0,
            Fr.default)(document).off("mousemove.image_brush").off("mouseup.image_brush"),
            f.up(n.mouseOffsetCss(R)),
            f.stopResizing(),
            h.isPending() && h.immediateCall())
        }
        function P() {
            t.brushResetOnNew && r.data("mostRecentBrush") && (f.reset(),
            h.immediateCall())
        }
        t.brushResetOnNew || r.data("mostRecentBrush") && (f.importOldBrush(),
        h.immediateCall());
        function $() {
            f.onResize(),
            h.immediateCall()
        }
        return {
            mousedown: m,
            mousemove: y,
            onResetImg: P,
            onResize: $
        }
    }
    function Fn(e, r) {
        r.css("-webkit-user-drag", "none"),
        r.off("dragstart.image_output"),
        r.on("dragstart.image_output", function() {
            return !1
        }),
        e.off("selectstart.image_output"),
        e.on("selectstart.image_output", function() {
            return !1
        })
    }
    function Vn(e) {
        return Vn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Vn(e)
    }
    function iz(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function Y_(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, az(n.key), n)
        }
    }
    function oz(e, r, t) {
        return r && Y_(e.prototype, r),
        t && Y_(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function az(e) {
        var r = uz(e, "string");
        return Vn(r) === "symbol" ? r : String(r)
    }
    function uz(e, r) {
        if (Vn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Vn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function sz(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && sp(e, r)
    }
    function sp(e, r) {
        return sp = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        sp(e, r)
    }
    function fz(e) {
        var r = pz();
        return function() {
            var n = qu(e), i;
            if (r) {
                var a = qu(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return cz(this, i)
        }
    }
    function cz(e, r) {
        if (r && (Vn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return lz(e)
    }
    function lz(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function pz() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function qu(e) {
        return qu = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        qu(e)
    }
    var vz = function(e) {
        sz(t, e);
        var r = fz(t);
        function t() {
            return iz(this, t),
            r.apply(this, arguments)
        }
        return oz(t, [{
            key: "find",
            value: function(i) {
                return (0,
                Vr.default)(i).find(".shiny-image-output, .shiny-plot-output")
            }
        }, {
            key: "renderValue",
            value: function(i, a) {
                var f = this.getId(i), c = (0,
                Vr.default)(i), l, h = c.find("img");
                if (h.length === 0 ? (l = document.createElement("img"),
                c.append(l),
                h = (0,
                Vr.default)(l)) : (l = h[0],
                h.trigger("reset")),
                !a) {
                    c.empty();
                    return
                }
                var m = {
                    clickId: c.data("click-id"),
                    clickClip: we(yt(c.data("click-clip")), !0),
                    dblclickId: c.data("dblclick-id"),
                    dblclickClip: we(yt(c.data("dblclick-clip")), !0),
                    dblclickDelay: we(c.data("dblclick-delay"), 400),
                    hoverId: c.data("hover-id"),
                    hoverClip: we(yt(c.data("hover-clip")), !0),
                    hoverDelayType: we(c.data("hover-delay-type"), "debounce"),
                    hoverDelay: we(c.data("hover-delay"), 300),
                    hoverNullOutside: we(yt(c.data("hover-null-outside")), !1),
                    brushId: c.data("brush-id"),
                    brushClip: we(yt(c.data("brush-clip")), !0),
                    brushDelayType: we(c.data("brush-delay-type"), "debounce"),
                    brushDelay: we(c.data("brush-delay"), 300),
                    brushFill: we(c.data("brush-fill"), "#666"),
                    brushStroke: we(c.data("brush-stroke"), "#000"),
                    brushOpacity: we(c.data("brush-opacity"), .3),
                    brushDirection: we(c.data("brush-direction"), "xy"),
                    brushResetOnNew: we(yt(c.data("brush-reset-on-new")), !1),
                    coordmap: a.coordmap
                };
                m.brushFill === "auto" && (m.brushFill = Wi(c[0])),
                m.brushStroke === "auto" && (m.brushStroke = cr(c[0], "color")),
                Vr.default.each(a, function(w, S) {
                    S === null || w === "coordmap" || (w === "src" && S === l.getAttribute("src") && l.removeAttribute("src"),
                    l.setAttribute(w, S))
                });
                for (var y = 0; y < l.attributes.length; y++) {
                    var b = l.attributes[y];
                    b.specified && !He(a, b.name) && l.removeAttribute(b.name)
                }
                m.coordmap || (m.coordmap = {
                    panels: [],
                    dims: {
                        height: null,
                        width: null
                    }
                }),
                c.off(".image_output"),
                h.off(".image_output"),
                h.off("load.shiny_image_interaction"),
                h.one("load.shiny_image_interaction", function() {
                    var w = m.coordmap = np(c, m.coordmap)
                      , S = op(c, m.dblclickId, m.dblclickDelay);
                    if (c.on("mousedown.image_output", S.mousedown),
                    ut() && Um() === 8 && c.on("dblclick.image_output", S.dblclickIE8),
                    m.clickId) {
                        Fn(c, h);
                        var T = Iu(m.clickId, m.clickClip, w);
                        c.on("mousedown2.image_output", T.mousedown),
                        c.on("resize.image_output", T.onResize),
                        h.on("reset.image_output", T.onResetImg)
                    }
                    if (m.dblclickId) {
                        Fn(c, h);
                        var k = Iu(m.dblclickId, m.clickClip, w);
                        c.on("dblclick2.image_output", k.mousedown),
                        c.on("resize.image_output", k.onResize),
                        h.on("reset.image_output", k.onResetImg)
                    }
                    if (m.hoverId) {
                        Fn(c, h);
                        var E = ap(m.hoverId, m.hoverDelay, m.hoverDelayType, m.hoverClip, m.hoverNullOutside, w);
                        c.on("mousemove.image_output", E.mousemove),
                        c.on("mouseout.image_output", E.mouseout),
                        c.on("resize.image_output", E.onResize),
                        h.on("reset.image_output", E.onResetImg)
                    }
                    if (m.brushId) {
                        Fn(c, h);
                        var P = up(m.brushId, c, m, w, f);
                        c.on("mousedown.image_output", P.mousedown),
                        c.on("mousemove.image_output", P.mousemove),
                        c.on("resize.image_output", P.onResize),
                        h.on("reset.image_output", P.onResetImg)
                    }
                    (m.clickId || m.dblclickId || m.hoverId || m.brushId) && c.addClass("crosshair"),
                    a.error && console.log("Error on server extracting coordmap: " + a.error)
                })
            }
        }, {
            key: "renderError",
            value: function(i, a) {
                (0,
                Vr.default)(i).find("img").trigger("reset"),
                _e.prototype.renderError.call(this, i, a)
            }
        }, {
            key: "clearError",
            value: function(i) {
                (0,
                Vr.default)(i).contents().filter(function() {
                    return !(this instanceof HTMLElement && (this.tagName === "IMG" || this.id === i.id + "_brush"))
                }).remove(),
                _e.prototype.clearError.call(this, i)
            }
        }, {
            key: "resize",
            value: function(i, a, f) {
                (0,
                Vr.default)(i).find("img").trigger("resize")
            }
        }]),
        t
    }(_e)
      , Et = new vz;
    function X_() {
        var e = new eu;
        return e.register(new i_, "shiny.textOutput"),
        e.register(new a_, "shiny.downloadLink"),
        e.register(new g_, "shiny.datatableOutput"),
        e.register(new G_, "shiny.htmlOutput"),
        e.register(Et, "shiny.imageOutput"),
        {
            outputBindings: e
        }
    }
    function Tu(e) {
        pr(e, null),
        Et.find(document.documentElement).trigger("shiny-internal:brushed", {
            brushId: e,
            outputId: null
        })
    }
    var kue = N(pe());
    var gz = en()
      , ho = re()
      , cp = Y()
      , bz = Vi()
      , wz = te()
      , Sz = Fe()
      , Oz = ku()
      , J_ = Xe()
      , _z = ma()
      , Pz = Wa()
      , Ez = fr()
      , fp = le()
      , Iz = xr()
      , Z_ = ka()
      , eP = zi()
      , qz = Si()
      , Tz = bi()
      , kz = K()
      , zn = Tz.UNSUPPORTED_Y
      , rP = 4294967295
      , xz = Math.min
      , tP = [].push
      , Rz = cp(/./.exec)
      , Hn = cp(tP)
      , mo = cp("".slice)
      , Az = !kz(function() {
        var e = /(?:)/
          , r = e.exec;
        e.exec = function() {
            return r.apply(this, arguments)
        }
        ;
        var t = "ab".split(e);
        return t.length !== 2 || t[0] !== "a" || t[1] !== "b"
    });
    bz("split", function(e, r, t) {
        var n;
        return "abbc".split(/(b)*/)[1] == "c" || "test".split(/(?:)/, -1).length != 4 || "ab".split(/(?:ab)*/).length != 2 || ".".split(/(.?)(.?)/).length != 4 || ".".split(/()()/).length > 1 || "".split(/.?/).length ? n = function(i, a) {
            var f = fp(J_(this))
              , c = a === void 0 ? rP : a >>> 0;
            if (c === 0)
                return [];
            if (i === void 0)
                return [f];
            if (!Oz(i))
                return ho(r, f, i, c);
            for (var l = [], h = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (i.sticky ? "y" : ""), m = 0, y = new RegExp(i.source,h + "g"), b, w, S; (b = ho(qz, y, f)) && (w = y.lastIndex,
            !(w > m && (Hn(l, mo(f, m, b.index)),
            b.length > 1 && b.index < f.length && gz(tP, l, Z_(b, 1)),
            S = b[0].length,
            m = w,
            l.length >= c))); )
                y.lastIndex === b.index && y.lastIndex++;
            return m === f.length ? (S || !Rz(y, "")) && Hn(l, "") : Hn(l, mo(f, m)),
            l.length > c ? Z_(l, 0, c) : l
        }
        : "0".split(void 0, 0).length ? n = function(i, a) {
            return i === void 0 && a === 0 ? [] : ho(r, this, i, a)
        }
        : n = r,
        [function(a, f) {
            var c = J_(this)
              , l = Sz(a) ? void 0 : Iz(a, e);
            return l ? ho(l, a, c, f) : ho(n, fp(c), a, f)
        }
        , function(i, a) {
            var f = wz(this)
              , c = fp(i)
              , l = t(n, f, c, a, n !== r);
            if (l.done)
                return l.value;
            var h = _z(f, RegExp)
              , m = f.unicode
              , y = (f.ignoreCase ? "i" : "") + (f.multiline ? "m" : "") + (f.unicode ? "u" : "") + (zn ? "g" : "y")
              , b = new h(zn ? "^(?:" + f.source + ")" : f,y)
              , w = a === void 0 ? rP : a >>> 0;
            if (w === 0)
                return [];
            if (c.length === 0)
                return eP(b, c) === null ? [c] : [];
            for (var S = 0, T = 0, k = []; T < c.length; ) {
                b.lastIndex = zn ? 0 : T;
                var E = eP(b, zn ? mo(c, T) : c), P;
                if (E === null || (P = xz(Ez(b.lastIndex + (zn ? T : 0)), c.length)) === S)
                    T = Pz(c, T, m);
                else {
                    if (Hn(k, mo(c, S, T)),
                    k.length === w)
                        return k;
                    for (var $ = 1; $ <= E.length - 1; $++)
                        if (Hn(k, E[$]),
                        k.length === w)
                            return k;
                    T = S = P
                }
            }
            return Hn(k, mo(c, S)),
            k
        }
        ]
    }, !Az, zn);
    var $z = re()
      , Nz = Vi()
      , jz = te()
      , Lz = Fe()
      , Cz = fr()
      , lp = le()
      , Dz = Xe()
      , Bz = xr()
      , Mz = Wa()
      , nP = zi();
    Nz("match", function(e, r, t) {
        return [function(i) {
            var a = Dz(this)
              , f = Lz(i) ? void 0 : Bz(i, e);
            return f ? $z(f, i, a) : new RegExp(i)[e](lp(a))
        }
        , function(n) {
            var i = jz(this)
              , a = lp(n)
              , f = t(r, i, a);
            if (f.done)
                return f.value;
            if (!i.global)
                return nP(i, a);
            var c = i.unicode;
            i.lastIndex = 0;
            for (var l = [], h = 0, m; (m = nP(i, a)) !== null; ) {
                var y = lp(m[0]);
                l[h] = y,
                y === "" && (i.lastIndex = Mz(a, Cz(i.lastIndex), c)),
                h++
            }
            return h === 0 ? null : l
        }
        ]
    });
    var Mue = N(z());
    var yo = N(W());
    function pp(e) {
        return pp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        pp(e)
    }
    function vp() {
        "use strict";
        vp = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && pp(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function iP(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function Gz(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    iP(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    iP(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    var Uz = 250;
    function Er() {
        return hp.apply(this, arguments)
    }
    function hp() {
        return hp = Gz(vp().mark(function e() {
            var r, t, n, i, a, f, c, l, h, m, y, b, w, S, T, k, E, P, $, R, j, L, F, C = arguments;
            return vp().wrap(function(D) {
                for (; ; )
                    switch (D.prev = D.next) {
                    case 0:
                        return t = C.length > 0 && C[0] !== void 0 ? C[0] : {},
                        n = t.html,
                        i = n === void 0 ? "" : n,
                        a = t.action,
                        f = a === void 0 ? "" : a,
                        c = t.deps,
                        l = c === void 0 ? [] : c,
                        h = t.duration,
                        m = h === void 0 ? 5e3 : h,
                        y = t.id,
                        b = y === void 0 ? null : y,
                        w = t.closeButton,
                        S = w === void 0 ? !0 : w,
                        T = t.type,
                        k = T === void 0 ? null : T,
                        b || (b = Za()),
                        D.next = 4,
                        _t(l);
                    case 4:
                        return Vz(),
                        E = go(b),
                        ((r = E) === null || r === void 0 ? void 0 : r.length) === 0 && (E = zz(b)),
                        P = E,
                        $ = '<div class="shiny-notification-content-text">'.concat(i, "</div>") + '<div class="shiny-notification-content-action">'.concat(f, "</div>"),
                        R = P.find(".shiny-notification-content"),
                        D.next = 12,
                        De(R, {
                            html: $
                        });
                    case 12:
                        return j = P == null ? void 0 : P.attr("class"),
                        j && (L = j.split(/\s+/).filter(function(V) {
                            return V.match(/^shiny-notification-/)
                        }).join(" "),
                        P.removeClass(L)),
                        k && k !== "default" && P.addClass("shiny-notification-" + k),
                        F = P.find(".shiny-notification-close"),
                        S && F.length === 0 ? P.append('<div class="shiny-notification-close">&times;</div>') : !S && F.length !== 0 && F.remove(),
                        m ? Hz(b, m) : oP(b),
                        D.abrupt("return", b);
                    case 19:
                    case "end":
                        return D.stop()
                    }
            }, e)
        })),
        hp.apply(this, arguments)
    }
    function Ir(e) {
        var r;
        (r = go(e)) === null || r === void 0 || r.fadeOut(Uz, function() {
            Ie(this),
            (0,
            yo.default)(this).remove(),
            Fz().length === 0 && bo().remove()
        })
    }
    function go(e) {
        return e ? bo().find("#shiny-notification-" + H(e)) : null
    }
    function Fz() {
        return bo().find(".shiny-notification").map(function() {
            return this.id.replace(/shiny-notification-/, "")
        }).get()
    }
    function bo() {
        return (0,
        yo.default)("#shiny-notification-panel")
    }
    function Vz() {
        var e = bo();
        return e.length > 0 || (0,
        yo.default)(document.body).append('<div id="shiny-notification-panel">'),
        e
    }
    function zz(e) {
        var r, t = go(e);
        return ((r = t) === null || r === void 0 ? void 0 : r.length) === 0 && (t = (0,
        yo.default)('<div id="shiny-notification-'.concat(e, '" class="shiny-notification">') + '<div class="shiny-notification-close">&times;</div><div class="shiny-notification-content"></div></div>'),
        t.find(".shiny-notification-close").on("click", function(n) {
            n.preventDefault(),
            n.stopPropagation(),
            Ir(e)
        }),
        bo().append(t)),
        t
    }
    function Hz(e, r) {
        var t;
        oP(e);
        var n = setTimeout(function() {
            Ir(e)
        }, r);
        (t = go(e)) === null || t === void 0 || t.data("removalCallback", n)
    }
    function oP(e) {
        var r = go(e)
          , t = r == null ? void 0 : r.data("removalCallback");
        t && clearTimeout(t)
    }
    var pse = N(z());
    var zr = N(W());
    function dp(e) {
        return dp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        dp(e)
    }
    function mp() {
        "use strict";
        mp = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && dp(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function aP(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function Kz(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    aP(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    aP(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function xu() {
        return yp.apply(this, arguments)
    }
    function yp() {
        return yp = Kz(mp().mark(function e() {
            var r, t, n, i, a, f, c = arguments;
            return mp().wrap(function(h) {
                for (; ; )
                    switch (h.prev = h.next) {
                    case 0:
                        return r = c.length > 0 && c[0] !== void 0 ? c[0] : {},
                        t = r.html,
                        n = t === void 0 ? "" : t,
                        i = r.deps,
                        a = i === void 0 ? [] : i,
                        h.next = 3,
                        _t(a);
                    case 3:
                        return (0,
                        zr.default)(".modal-backdrop").remove(),
                        f = (0,
                        zr.default)("#shiny-modal-wrapper"),
                        f.length === 0 && (f = (0,
                        zr.default)('<div id="shiny-modal-wrapper"></div>'),
                        (0,
                        zr.default)(document.body).append(f),
                        f.on("hidden.bs.modal", function(m) {
                            m.target === (0,
                            zr.default)("#shiny-modal")[0] && (Ie(f),
                            f.remove())
                        })),
                        f.on("keydown.shinymodal", function(m) {
                            (0,
                            zr.default)("#shiny-modal").data("keyboard") !== !1 && m.keyCode === 27 && (m.stopPropagation(),
                            m.preventDefault())
                        }),
                        h.next = 9,
                        De(f, {
                            html: n
                        });
                    case 9:
                    case "end":
                        return h.stop()
                    }
            }, e)
        })),
        yp.apply(this, arguments)
    }
    function Ru() {
        var e = (0,
        zr.default)("#shiny-modal-wrapper");
        e.off("keydown.shinymodal"),
        e.find(".modal").length > 0 ? e.find(".modal").modal("hide") : (Ie(e),
        e.remove())
    }
    var jse = N(z());
    var Sp = N(W());
    function gp(e) {
        return gp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        gp(e)
    }
    function bp() {
        "use strict";
        bp = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && gp(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function uP(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function Wz(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    uP(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    uP(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function sP(e) {
        var r = (0,
        Sp.default)("#shiny-reconnect-time");
        if (r.length !== 0) {
            var t = Math.floor((e - new Date().getTime()) / 1e3);
            t > 0 ? r.text(" in " + t + "s") : r.text("..."),
            setTimeout(function() {
                sP(e)
            }, 1e3)
        }
    }
    function Au(e) {
        return wp.apply(this, arguments)
    }
    function wp() {
        return wp = Wz(bp().mark(function e(r) {
            var t, n, i;
            return bp().wrap(function(f) {
                for (; ; )
                    switch (f.prev = f.next) {
                    case 0:
                        if (t = new Date().getTime() + r,
                        !((0,
                        Sp.default)("#shiny-reconnect-text").length > 0)) {
                            f.next = 3;
                            break
                        }
                        return f.abrupt("return");
                    case 3:
                        return n = '<span id="shiny-reconnect-text">Attempting to reconnect</span><span id="shiny-reconnect-time"></span>',
                        i = '<a id="shiny-reconnect-now" href="#" onclick="Shiny.shinyapp.reconnect();">Try now</a>',
                        f.next = 7,
                        Er({
                            id: "reconnect",
                            html: n,
                            action: i,
                            duration: null,
                            closeButton: !1,
                            type: "warning"
                        });
                    case 7:
                        sP(t);
                    case 8:
                    case "end":
                        return f.stop()
                    }
            }, e)
        })),
        wp.apply(this, arguments)
    }
    function $u() {
        Ir("reconnect")
    }
    var pye = N(pe());
    var Pye = N(z());
    var J = N(W());
    var ufe = N(z());
    function wo(e) {
        return wo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        wo(e)
    }
    function Yz(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function fP(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, cP(n.key), n)
        }
    }
    function Xz(e, r, t) {
        return r && fP(e.prototype, r),
        t && fP(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function Kn(e, r, t) {
        return r = cP(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function cP(e) {
        var r = Qz(e, "string");
        return wo(r) === "symbol" ? r : String(r)
    }
    function Qz(e, r) {
        if (wo(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (wo(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var Op = function() {
        function e(r) {
            Yz(this, e),
            Kn(this, "target", void 0),
            Kn(this, "shinyapp", void 0),
            Kn(this, "pendingData", {}),
            Kn(this, "reentrant", !1),
            Kn(this, "sendIsEnqueued", !1),
            Kn(this, "lastChanceCallback", []),
            this.shinyapp = r
        }
        return Xz(e, [{
            key: "setInput",
            value: function(t, n, i) {
                var a = this;
                this.pendingData[t] = n,
                this.reentrant || (i.priority === "event" ? this._sendNow() : this.sendIsEnqueued || this.shinyapp.taskQueue.enqueue(function() {
                    a.sendIsEnqueued = !1,
                    a._sendNow()
                }))
            }
        }, {
            key: "_sendNow",
            value: function() {
                this.reentrant && console.trace("Unexpected reentrancy in InputBatchSender!"),
                this.reentrant = !0;
                try {
                    this.lastChanceCallback.forEach(function(n) {
                        return n()
                    });
                    var t = this.pendingData;
                    this.pendingData = {},
                    this.shinyapp.sendInput(t)
                } finally {
                    this.reentrant = !1
                }
            }
        }]),
        e
    }();
    var vfe = N(vn());
    var Ofe = N(z());
    function Hr(e) {
        var r = e.split(":");
        return {
            name: r[0],
            inputType: r.length > 1 ? r[1] : ""
        }
    }
    function So(e) {
        return So = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        So(e)
    }
    function Jz(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function lP(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, vP(n.key), n)
        }
    }
    function Zz(e, r, t) {
        return r && lP(e.prototype, r),
        t && lP(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function pP(e, r, t) {
        return r = vP(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function vP(e) {
        var r = eH(e, "string");
        return So(r) === "symbol" ? r : String(r)
    }
    function eH(e, r) {
        if (So(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (So(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var _p = function() {
        function e(r) {
            var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            Jz(this, e),
            pP(this, "target", void 0),
            pP(this, "lastSentValues", {}),
            this.target = r,
            this.reset(t)
        }
        return Zz(e, [{
            key: "setInput",
            value: function(t, n, i) {
                var a = Hr(t)
                  , f = a.name
                  , c = a.inputType
                  , l = JSON.stringify(n);
                i.priority !== "event" && this.lastSentValues[f] && this.lastSentValues[f].jsonValue === l && this.lastSentValues[f].inputType === c || (this.lastSentValues[f] = {
                    jsonValue: l,
                    inputType: c
                },
                this.target.setInput(t, n, i))
            }
        }, {
            key: "reset",
            value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , n = {};
                for (var i in t)
                    if (U(t, i)) {
                        var a = Hr(i)
                          , f = a.name
                          , c = a.inputType;
                        n[f] = {
                            jsonValue: JSON.stringify(t[i]),
                            inputType: c
                        }
                    }
                this.lastSentValues = n
            }
        }, {
            key: "forget",
            value: function(t) {
                delete this.lastSentValues[t]
            }
        }]),
        e
    }();
    var Cfe = N(z());
    var Pp = N(W());
    function Oo(e) {
        return Oo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Oo(e)
    }
    function rH(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function hP(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, dP(n.key), n)
        }
    }
    function tH(e, r, t) {
        return r && hP(e.prototype, r),
        t && hP(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function nH(e, r, t) {
        return r = dP(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function dP(e) {
        var r = iH(e, "string");
        return Oo(r) === "symbol" ? r : String(r)
    }
    function iH(e, r) {
        if (Oo(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Oo(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var Ep = function() {
        function e(r) {
            rH(this, e),
            nH(this, "target", void 0),
            this.target = r
        }
        return tH(e, [{
            key: "setInput",
            value: function(t, n, i) {
                var a = Pp.default.Event("shiny:inputchanged")
                  , f = Hr(t);
                if (a.name = f.name,
                a.inputType = f.inputType,
                a.value = n,
                a.binding = i.binding || null,
                a.el = i.el || null,
                a.priority = i.priority,
                (0,
                Pp.default)(i.el || window.document).trigger(a),
                !a.isDefaultPrevented()) {
                    var c = a.name;
                    a.inputType !== "" && (c += ":" + a.inputType),
                    this.target.setInput(c, a.value, {
                        priority: i.priority
                    })
                }
            }
        }]),
        e
    }();
    var Qfe = N(z());
    function _o(e) {
        return _o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        _o(e)
    }
    function oH(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function mP(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, gP(n.key), n)
        }
    }
    function aH(e, r, t) {
        return r && mP(e.prototype, r),
        t && mP(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function yP(e, r, t) {
        return r = gP(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function gP(e) {
        var r = uH(e, "string");
        return _o(r) === "symbol" ? r : String(r)
    }
    function uH(e, r) {
        if (_o(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (_o(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var Ip = function() {
        function e(r) {
            oH(this, e),
            yP(this, "target", void 0),
            yP(this, "inputRatePolicies", {}),
            this.target = r
        }
        return aH(e, [{
            key: "setInput",
            value: function(t, n, i) {
                var a = Hr(t)
                  , f = a.name;
                this._ensureInit(f),
                i.priority !== "deferred" ? this.inputRatePolicies[f].immediateCall(t, n, i) : this.inputRatePolicies[f].normalCall(t, n, i)
            }
        }, {
            key: "setRatePolicy",
            value: function(t, n, i) {
                var a = Hr(t)
                  , f = a.name;
                n === "direct" ? this.inputRatePolicies[f] = new Gl(this,this._doSetInput) : n === "debounce" ? this.inputRatePolicies[f] = new or(this,this._doSetInput,i) : n === "throttle" && (this.inputRatePolicies[f] = new Bn(this,this._doSetInput,i))
            }
        }, {
            key: "_ensureInit",
            value: function(t) {
                t in this.inputRatePolicies || this.setRatePolicy(t, "direct")
            }
        }, {
            key: "_doSetInput",
            value: function(t, n, i) {
                this.target.setInput(t, n, i)
            }
        }]),
        e
    }();
    var nce = N(pe());
    var vce = N(z());
    function Po(e) {
        return Po = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Po(e)
    }
    function sH(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function bP(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, SP(n.key), n)
        }
    }
    function fH(e, r, t) {
        return r && bP(e.prototype, r),
        t && bP(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function wP(e, r, t) {
        return r = SP(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function SP(e) {
        var r = cH(e, "string");
        return Po(r) === "symbol" ? r : String(r)
    }
    function cH(e, r) {
        if (Po(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Po(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var qp = function() {
        function e(r) {
            sH(this, e),
            wP(this, "pendingInput", {}),
            wP(this, "target", void 0),
            this.target = r
        }
        return fH(e, [{
            key: "setInput",
            value: function(t, n, i) {
                /^\./.test(t) ? this.target.setInput(t, n, i) : this.pendingInput[t] = {
                    value: n,
                    opts: i
                }
            }
        }, {
            key: "submit",
            value: function() {
                for (var t in this.pendingInput)
                    if (U(this.pendingInput, t)) {
                        var n = this.pendingInput[t]
                          , i = n.value
                          , a = n.opts;
                        this.target.setInput(t, i, a)
                    }
            }
        }]),
        e
    }();
    var $ce = N(z());
    function Eo(e) {
        return Eo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Eo(e)
    }
    function lH(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function OP(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, EP(n.key), n)
        }
    }
    function pH(e, r, t) {
        return r && OP(e.prototype, r),
        t && OP(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function _P(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            r && (n = n.filter(function(i) {
                return Object.getOwnPropertyDescriptor(e, i).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
    }
    function vH(e) {
        for (var r = 1; r < arguments.length; r++) {
            var t = arguments[r] != null ? arguments[r] : {};
            r % 2 ? _P(Object(t), !0).forEach(function(n) {
                PP(e, n, t[n])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _P(Object(t)).forEach(function(n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
            })
        }
        return e
    }
    function PP(e, r, t) {
        return r = EP(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function EP(e) {
        var r = hH(e, "string");
        return Eo(r) === "symbol" ? r : String(r)
    }
    function hH(e, r) {
        if (Eo(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Eo(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function Tp(e) {
        var r = vH({
            priority: "immediate"
        }, e);
        switch (r.priority) {
        case "deferred":
        case "immediate":
        case "event":
            break;
        default:
            throw new Error("Unexpected input value mode: '" + r.priority + "'")
        }
        return r
    }
    var kp = function() {
        function e(r) {
            lH(this, e),
            PP(this, "target", void 0),
            this.target = r
        }
        return pH(e, [{
            key: "setInput",
            value: function(t, n) {
                var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
                if (!t)
                    throw "Can't set input with empty name.";
                var a = Tp(i);
                this.target.setInput(t, n, a)
            }
        }]),
        e
    }();
    var Vle = N(z());
    FP();
    var lpe = N(pe());
    var ge = N(W());
    var sle = N(z());
    function Yn(e) {
        return Yn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Yn(e)
    }
    function Cp() {
        "use strict";
        Cp = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && Yn(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function VP(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function i8(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    VP(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    VP(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function o8(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function zP(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, KP(n.key), n)
        }
    }
    function a8(e, r, t) {
        return r && zP(e.prototype, r),
        t && zP(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function HP(e, r, t) {
        return r = KP(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function KP(e) {
        var r = u8(e, "string");
        return Yn(r) === "symbol" ? r : String(r)
    }
    function u8(e, r) {
        if (Yn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Yn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var WP = function() {
        function e(r, t) {
            o8(this, e),
            HP(this, "el", void 0),
            HP(this, "binding", void 0),
            this.el = r,
            this.binding = t,
            t.resize && (this.onResize = i0(r, function(n, i) {
                t.resize(r, n, i)
            }))
        }
        return a8(e, [{
            key: "getId",
            value: function() {
                return this.binding.getId(this.el)
            }
        }, {
            key: "onValueChange",
            value: function() {
                var r = i8(Cp().mark(function n(i) {
                    return Cp().wrap(function(f) {
                        for (; ; )
                            switch (f.prev = f.next) {
                            case 0:
                                return f.next = 2,
                                this.binding.onValueChange(this.el, i);
                            case 2:
                            case "end":
                                return f.stop()
                            }
                    }, n, this)
                }));
                function t(n) {
                    return r.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: "onValueError",
            value: function(t) {
                this.binding.onValueError(this.el, t)
            }
        }, {
            key: "showProgress",
            value: function(t) {
                this.binding.showProgress(this.el, t)
            }
        }, {
            key: "onResize",
            value: function() {}
        }]),
        e
    }();
    var Dle = N(z());
    function Xn(e) {
        return Xn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Xn(e)
    }
    function YP(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, JP(n.key), n)
        }
    }
    function s8(e, r, t) {
        return r && YP(e.prototype, r),
        t && YP(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function f8(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function c8(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && To(e, r)
    }
    function l8(e) {
        var r = QP();
        return function() {
            var n = ko(e), i;
            if (r) {
                var a = ko(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return p8(this, i)
        }
    }
    function p8(e, r) {
        if (r && (Xn(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return XP(e)
    }
    function XP(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function Dp(e) {
        var r = typeof Map == "function" ? new Map : void 0;
        return Dp = function(n) {
            if (n === null || !v8(n))
                return n;
            if (typeof n != "function")
                throw new TypeError("Super expression must either be null or a function");
            if (typeof r != "undefined") {
                if (r.has(n))
                    return r.get(n);
                r.set(n, i)
            }
            function i() {
                return Du(n, arguments, ko(this).constructor)
            }
            return i.prototype = Object.create(n.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            To(i, n)
        }
        ,
        Dp(e)
    }
    function Du(e, r, t) {
        return QP() ? Du = Reflect.construct.bind() : Du = function(i, a, f) {
            var c = [null];
            c.push.apply(c, a);
            var l = Function.bind.apply(i, c)
              , h = new l;
            return f && To(h, f.prototype),
            h
        }
        ,
        Du.apply(null, arguments)
    }
    function QP() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function v8(e) {
        return Function.toString.call(e).indexOf("[native code]") !== -1
    }
    function To(e, r) {
        return To = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        To(e, r)
    }
    function ko(e) {
        return ko = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        ko(e)
    }
    function h8(e, r, t) {
        return r = JP(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function JP(e) {
        var r = d8(e, "string");
        return Xn(r) === "symbol" ? r : String(r)
    }
    function d8(e, r) {
        if (Xn(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Xn(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var Bu = function(e) {
        c8(t, e);
        var r = l8(t);
        function t(n) {
            var i, a = n.headline, f = n.message;
            return f8(this, t),
            i = r.call(this, f),
            h8(XP(i), "headline", void 0),
            i.name = "ShinyClientError",
            i.headline = a,
            i
        }
        return s8(t)
    }(Dp(Error));
    function Bp(e) {
        return Bp = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Bp(e)
    }
    function It() {
        "use strict";
        It = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && Bp(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function ZP(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function Fp(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    ZP(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    ZP(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function m8(e, r) {
        return w8(e) || b8(e, r) || g8(e, r) || y8()
    }
    function y8() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function g8(e, r) {
        if (!!e) {
            if (typeof e == "string")
                return eE(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (t === "Object" && e.constructor && (t = e.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(e);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return eE(e, r)
        }
    }
    function eE(e, r) {
        (r == null || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++)
            n[t] = e[t];
        return n
    }
    function b8(e, r) {
        var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (t != null) {
            var n, i, a, f, c = [], l = !0, h = !1;
            try {
                if (a = (t = t.call(e)).next,
                r === 0) {
                    if (Object(t) !== t)
                        return;
                    l = !1
                } else
                    for (; !(l = (n = a.call(t)).done) && (c.push(n.value),
                    c.length !== r); l = !0)
                        ;
            } catch (m) {
                h = !0,
                i = m
            } finally {
                try {
                    if (!l && t.return != null && (f = t.return(),
                    Object(f) !== f))
                        return
                } finally {
                    if (h)
                        throw i
                }
            }
            return c
        }
    }
    function w8(e) {
        if (Array.isArray(e))
            return e
    }
    function S8(e, r, t, n) {
        var i = r.getId(t);
        if (i) {
            var a = r.getValue(t)
              , f = r.getType(t);
            f && (i = i + ":" + f);
            var c = {
                priority: n ? "deferred" : "immediate",
                binding: r,
                el: t
            };
            e.setInput(i, a, c)
        }
    }
    var xo = function() {
        var e = new Map;
        function r() {
            var i = new Map;
            if (e.forEach(function(f, c) {
                var l = {
                    input: 0,
                    output: 0
                };
                f.forEach(function(h) {
                    return l[h] += 1
                }),
                !(l.input === 1 && l.output === 1 && !Shiny.inDevMode()) && l.input + l.output > 1 && i.set(c, l)
            }),
            i.size === 0)
                return {
                    status: "ok"
                };
            var a = Array.from(i.entries()).map(function(f) {
                var c = m8(f, 2)
                  , l = c[0]
                  , h = c[1]
                  , m = [rE(h.input, "input"), rE(h.output, "output")].filter(function(y) {
                    return y !== ""
                }).join(" and ");
                return '- "'.concat(l, '": ').concat(m)
            }).join("\n");
            return {
                status: "error",
                error: new Bu({
                    headline: "Duplicate input/output IDs found",
                    message: "The following ".concat(i.size === 1 ? "ID was" : "IDs were", " repeated:\n").concat(a)
                })
            }
        }
        function t(i, a) {
            var f = e.get(i);
            f ? f.push(a) : e.set(i, [a])
        }
        function n(i, a) {
            var f = e.get(i);
            if (f) {
                var c = f.indexOf(a);
                c > -1 && f.splice(c, 1)
            }
            (f == null ? void 0 : f.length) === 0 && e.delete(i)
        }
        return {
            addBinding: t,
            removeBinding: n,
            checkValidity: r
        }
    }();
    function rE(e, r) {
        return e === 0 ? "" : e === 1 ? "".concat(e, " ").concat(r) : "".concat(e, " ").concat(r, "s")
    }
    function O8(e) {
        for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.documentElement, t = e.inputs, n = e.inputsRate, i = e.inputBindings, a = i.getBindings(), f = {}, c = function() {
            for (var m = a[l].binding, y = m.find(r) || [], b = function() {
                var k = y[w];
                if (k.hasAttribute("data-shiny-no-bind-input"))
                    return "continue";
                var E = m.getId(k);
                if (!E || (0,
                ge.default)(k).hasClass("shiny-bound-input"))
                    return "continue";
                var P = m.getType(k)
                  , $ = P ? E + ":" + P : E;
                f[$] = {
                    value: m.getValue(k),
                    opts: {
                        immediate: !0,
                        binding: m,
                        el: k
                    }
                };
                var R = function() {
                    var L = m
                      , F = k;
                    return function(C) {
                        S8(t, L, F, C)
                    }
                }();
                m.subscribe(k, R),
                (0,
                ge.default)(k).data("shiny-input-binding", m),
                (0,
                ge.default)(k).addClass("shiny-bound-input");
                var j = m.getRatePolicy(k);
                j !== null && n.setRatePolicy($, j.policy, j.delay),
                xo.addBinding(E, "input"),
                (0,
                ge.default)(k).trigger({
                    type: "shiny:bound",
                    binding: m,
                    bindingType: "input"
                })
            }, w = 0; w < y.length; w++)
                var S = b()
        }, l = 0; l < a.length; l++)
            c();
        return f
    }
    function _8(e) {
        return Mp.apply(this, arguments)
    }
    function Mp() {
        return Mp = Fp(It().mark(function e(r) {
            var t, n, i, a, f, c, l, h, m, y, b, w, S, T, k = arguments;
            return It().wrap(function(P) {
                for (; ; )
                    switch (P.prev = P.next) {
                    case 0:
                        t = r.sendOutputHiddenState,
                        n = r.maybeAddThemeObserver,
                        i = r.outputBindings,
                        a = k.length > 1 && k[1] !== void 0 ? k[1] : document.documentElement,
                        f = (0,
                        ge.default)(a),
                        c = i.getBindings(),
                        l = 0;
                    case 5:
                        if (!(l < c.length)) {
                            P.next = 34;
                            break
                        }
                        h = c[l].binding,
                        m = h.find(f) || [],
                        y = 0;
                    case 9:
                        if (!(y < m.length)) {
                            P.next = 31;
                            break
                        }
                        if (b = m[y],
                        w = h.getId(b),
                        w) {
                            P.next = 14;
                            break
                        }
                        return P.abrupt("continue", 28);
                    case 14:
                        if (ge.default.contains(document.documentElement, b)) {
                            P.next = 16;
                            break
                        }
                        return P.abrupt("continue", 28);
                    case 16:
                        if (S = (0,
                        ge.default)(b),
                        !S.hasClass("shiny-bound-output")) {
                            P.next = 19;
                            break
                        }
                        return P.abrupt("continue", 28);
                    case 19:
                        return n(b),
                        T = new WP(b,h),
                        P.next = 23,
                        LO(w, T);
                    case 23:
                        S.data("shiny-output-binding", T),
                        S.addClass("shiny-bound-output"),
                        S.attr("aria-live") || S.attr("aria-live", "polite"),
                        xo.addBinding(w, "output"),
                        S.trigger({
                            type: "shiny:bound",
                            binding: h,
                            bindingType: "output"
                        });
                    case 28:
                        y++,
                        P.next = 9;
                        break;
                    case 31:
                        l++,
                        P.next = 5;
                        break;
                    case 34:
                        setTimeout(ar.regular, 0),
                        setTimeout(t, 0);
                    case 36:
                    case "end":
                        return P.stop()
                    }
            }, e)
        })),
        Mp.apply(this, arguments)
    }
    function P8() {
        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.documentElement
          , r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
          , t = (0,
        ge.default)(e).find(".shiny-bound-input").toArray();
        r && (0,
        ge.default)(e).hasClass("shiny-bound-input") && t.push(e);
        for (var n = 0; n < t.length; n++) {
            var i = t[n]
              , a = (0,
            ge.default)(i).data("shiny-input-binding");
            if (!!a) {
                var f = a.getId(i);
                (0,
                ge.default)(i).removeClass("shiny-bound-input"),
                xo.removeBinding(f, "input"),
                a.unsubscribe(i),
                (0,
                ge.default)(i).trigger({
                    type: "shiny:unbound",
                    binding: a,
                    bindingType: "input"
                })
            }
        }
    }
    function E8(e) {
        var r = e.sendOutputHiddenState
          , t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : document.documentElement
          , n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
          , i = (0,
        ge.default)(t).find(".shiny-bound-output").toArray();
        n && (0,
        ge.default)(t).hasClass("shiny-bound-output") && i.push(t);
        for (var a = 0; a < i.length; a++) {
            var f = (0,
            ge.default)(i[a])
              , c = f.data("shiny-output-binding");
            if (!!c) {
                var l = c.binding.getId(i[a]);
                CO(l, c),
                xo.removeBinding(l, "output"),
                f.removeClass("shiny-bound-output"),
                f.removeData("shiny-output-binding"),
                f.trigger({
                    type: "shiny:unbound",
                    binding: c.binding,
                    bindingType: "output"
                })
            }
        }
        setTimeout(ar.regular, 0),
        setTimeout(r, 0)
    }
    function Vp(e, r) {
        return Gp.apply(this, arguments)
    }
    function Gp() {
        return Gp = Fp(It().mark(function e(r, t) {
            var n, i;
            return It().wrap(function(f) {
                for (; ; )
                    switch (f.prev = f.next) {
                    case 0:
                        return f.next = 2,
                        _8(r, t);
                    case 2:
                        if (n = O8(r, t),
                        i = xo.checkValidity(),
                        i.status !== "error") {
                            f.next = 10;
                            break
                        }
                        if (!Shiny.inDevMode()) {
                            f.next = 9;
                            break
                        }
                        throw i.error;
                    case 9:
                        console.warn("[shiny] " + i.error.message);
                    case 10:
                        return f.abrupt("return", n);
                    case 11:
                    case "end":
                        return f.stop()
                    }
            }, e)
        })),
        Gp.apply(this, arguments)
    }
    function tE(e, r) {
        var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
        P8(r, t),
        E8(e, r, t)
    }
    function nE(e, r) {
        return Up.apply(this, arguments)
    }
    function Up() {
        return Up = Fp(It().mark(function e(r, t) {
            var n, i;
            return It().wrap(function(f) {
                for (; ; )
                    switch (f.prev = f.next) {
                    case 0:
                        return f.next = 2,
                        Vp(r, t);
                    case 2:
                        n = f.sent,
                        i = r.inputs,
                        ge.default.each(n, function(c, l) {
                            i.setInput(c, l.value, l.opts)
                        }),
                        r.initDeferredIframes();
                    case 6:
                    case "end":
                        return f.stop()
                    }
            }, e)
        })),
        Up.apply(this, arguments)
    }
    var pme = N(z());
    iE();
    var gme = N(pe());
    var wme = N(vn());
    var r3 = M()
      , t3 = X()
      , n3 = Ku()
      , i3 = Oi()
      , rv = "ArrayBuffer"
      , xE = n3[rv]
      , o3 = t3[rv];
    r3({
        global: !0,
        constructor: !0,
        forced: o3 !== xE
    }, {
        ArrayBuffer: xE
    });
    i3(rv);
    var a3 = M()
      , nv = at()
      , u3 = K()
      , NE = Ku()
      , RE = te()
      , AE = ot()
      , s3 = fr()
      , f3 = ma()
      , iv = NE.ArrayBuffer
      , tv = NE.DataView
      , jE = tv.prototype
      , $E = nv(iv.prototype.slice)
      , c3 = nv(jE.getUint8)
      , l3 = nv(jE.setUint8)
      , p3 = u3(function() {
        return !new iv(2).slice(1, void 0).byteLength
    });
    a3({
        target: "ArrayBuffer",
        proto: !0,
        unsafe: !0,
        forced: p3
    }, {
        slice: function(r, t) {
            if ($E && t === void 0)
                return $E(RE(this), r);
            for (var n = RE(this).byteLength, i = AE(r, n), a = AE(t === void 0 ? n : t, n), f = new (f3(this, iv))(s3(a - i)), c = new tv(this), l = new tv(f), h = 0; i < a; )
                l3(l, h++, c3(c, i++));
            return f
        }
    });
    LE();
    var S3 = M()
      , O3 = BE().left
      , _3 = Yt()
      , ME = Vt()
      , P3 = Qt()
      , E3 = !P3 && ME > 79 && ME < 83
      , I3 = E3 || !_3("reduce");
    S3({
        target: "Array",
        proto: !0,
        forced: I3
    }, {
        reduce: function(r) {
            var t = arguments.length;
            return O3(this, r, t, t > 1 ? arguments[1] : void 0)
        }
    });
    var G = N(W());
    var zpe = N(z());
    function ei(e) {
        return ei = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        ei(e)
    }
    function ov() {
        "use strict";
        ov = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && ei(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function GE(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function q3(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    GE(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    GE(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function T3(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function UE(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, VE(n.key), n)
        }
    }
    function k3(e, r, t) {
        return r && UE(e.prototype, r),
        t && UE(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function FE(e, r, t) {
        return r = VE(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function VE(e) {
        var r = x3(e, "string");
        return ei(r) === "symbol" ? r : String(r)
    }
    function x3(e, r) {
        if (ei(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (ei(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var zE = function() {
        function e() {
            T3(this, e),
            FE(this, "$promises", []),
            FE(this, "$resolvers", [])
        }
        return k3(e, [{
            key: "_add",
            value: function() {
                var t = this
                  , n = new Promise(function(i) {
                    t.$resolvers.push(i)
                }
                );
                this.$promises.push(n)
            }
        }, {
            key: "enqueue",
            value: function(t) {
                this.$resolvers.length || this._add();
                var n = this.$resolvers.shift();
                n(t)
            }
        }, {
            key: "dequeue",
            value: function() {
                var r = q3(ov().mark(function n() {
                    var i;
                    return ov().wrap(function(f) {
                        for (; ; )
                            switch (f.prev = f.next) {
                            case 0:
                                return this.$promises.length || this._add(),
                                i = this.$promises.shift(),
                                f.abrupt("return", i);
                            case 3:
                            case "end":
                                return f.stop()
                            }
                    }, n, this)
                }));
                function t() {
                    return r.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: "isEmpty",
            value: function() {
                return !this.$promises.length
            }
        }, {
            key: "isBlocked",
            value: function() {
                return !!this.$resolvers.length
            }
        }, {
            key: "length",
            get: function() {
                return this.$promises.length - this.$resolvers.length
            }
        }]),
        e
    }();
    var R3 = M()
      , A3 = ju()
      , $3 = K()
      , N3 = ae()
      , j3 = Wn().onFreeze
      , av = Object.freeze
      , L3 = $3(function() {
        av(1)
    });
    R3({
        target: "Object",
        stat: !0,
        forced: L3,
        sham: !A3
    }, {
        freeze: function(r) {
            return av && N3(r) ? av(j3(r)) : r
        }
    });
    var Yde = N(z());
    var Mve = N(pe(), 1);
    var C3 = M()
      , D3 = Ml();
    C3({
        target: "Object",
        stat: !0
    }, {
        is: D3
    });
    var B3 = M()
      , M3 = K()
      , G3 = xa().f
      , U3 = M3(function() {
        return !Object.getOwnPropertyNames(1)
    });
    B3({
        target: "Object",
        stat: !0,
        forced: U3
    }, {
        getOwnPropertyNames: G3
    });
    var F3 = M()
      , uv = X();
    F3({
        global: !0,
        forced: uv.globalThis !== uv
    }, {
        globalThis: uv
    });
    var ehe = N(vn(), 1);
    var ihe = N(z(), 1);
    sI();
    var dK = M()
      , mK = lI()
      , yK = Te()
      , gK = Ne()
      , bK = gr()
      , wK = Ai();
    dK({
        target: "Array",
        proto: !0
    }, {
        flat: function() {
            var r = arguments.length ? arguments[0] : void 0
              , t = yK(this)
              , n = gK(t)
              , i = wK(t, 0);
            return i.length = mK(i, t, t, n, 0, r === void 0 ? 1 : bK(r)),
            i
        }
    });
    var SK = Bi();
    SK("flat");
    var lve = N(pe(), 1);
    var dve = N(z(), 1);
    function Lo(e) {
        return Lo = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Lo(e)
    }
    function dI(e, r) {
        var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (!t) {
            if (Array.isArray(e) || (t = OK(e)) || r && e && typeof e.length == "number") {
                t && (e = t);
                var n = 0
                  , i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(h) {
                        throw h
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a = !0, f = !1, c;
        return {
            s: function() {
                t = t.call(e)
            },
            n: function() {
                var h = t.next();
                return a = h.done,
                h
            },
            e: function(h) {
                f = !0,
                c = h
            },
            f: function() {
                try {
                    !a && t.return != null && t.return()
                } finally {
                    if (f)
                        throw c
                }
            }
        }
    }
    function OK(e, r) {
        if (!!e) {
            if (typeof e == "string")
                return pI(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (t === "Object" && e.constructor && (t = e.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(e);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return pI(e, r)
        }
    }
    function pI(e, r) {
        (r == null || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++)
            n[t] = e[t];
        return n
    }
    function _K(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function vI(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, EK(n.key), n)
        }
    }
    function PK(e, r, t) {
        return r && vI(e.prototype, r),
        t && vI(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function EK(e) {
        var r = IK(e, "string");
        return Lo(r) === "symbol" ? r : String(r)
    }
    function IK(e, r) {
        if (Lo(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Lo(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var rs = globalThis
      , ts = rs.ShadowRoot && (rs.ShadyCSS === void 0 || rs.ShadyCSS.nativeShadow) && "adoptedStyleSheets"in Document.prototype && "replace"in CSSStyleSheet.prototype
      , pv = Symbol()
      , hI = new WeakMap
      , vv = function() {
        function e(r, t, n) {
            if (_K(this, e),
            this._$cssResult$ = !0,
            n !== pv)
                throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
            this.cssText = r,
            this.t = t
        }
        return PK(e, [{
            key: "styleSheet",
            get: function() {
                var t = this.o
                  , n = this.t;
                if (ts && t === void 0) {
                    var i = n !== void 0 && n.length === 1;
                    i && (t = hI.get(n)),
                    t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText),
                    i && hI.set(n, t))
                }
                return t
            }
        }, {
            key: "toString",
            value: function() {
                return this.cssText
            }
        }]),
        e
    }()
      , mI = function(r) {
        return new vv(typeof r == "string" ? r : r + "",void 0,pv)
    }
      , Co = function(r) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
            n[i - 1] = arguments[i];
        var a = r.length === 1 ? r[0] : n.reduce(function(f, c, l) {
            return f + function(h) {
                if (h._$cssResult$ === !0)
                    return h.cssText;
                if (typeof h == "number")
                    return h;
                throw Error("Value passed to 'css' function must be a 'css' function result: " + h + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
            }(c) + r[l + 1]
        }, r[0]);
        return new vv(a,r,pv)
    }
      , hv = function(r, t) {
        if (ts)
            r.adoptedStyleSheets = t.map(function(l) {
                return l instanceof CSSStyleSheet ? l : l.styleSheet
            });
        else {
            var n = dI(t), i;
            try {
                for (n.s(); !(i = n.n()).done; ) {
                    var a = i.value
                      , f = document.createElement("style")
                      , c = rs.litNonce;
                    c !== void 0 && f.setAttribute("nonce", c),
                    f.textContent = a.cssText,
                    r.appendChild(f)
                }
            } catch (l) {
                n.e(l)
            } finally {
                n.f()
            }
        }
    }
      , ns = ts ? function(e) {
        return e
    }
    : function(e) {
        return e instanceof CSSStyleSheet ? function(r) {
            var t = "", n = dI(r.cssRules), i;
            try {
                for (n.s(); !(i = n.n()).done; ) {
                    var a = i.value;
                    t += a.cssText
                }
            } catch (f) {
                n.e(f)
            } finally {
                n.f()
            }
            return mI(t)
        }(e) : e
    }
    ;
    function xt(e) {
        return xt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        xt(e)
    }
    var dv, mv, yv;
    function is(e) {
        return kK(e) || TK(e) || _v(e) || qK()
    }
    function qK() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function TK(e) {
        if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
            return Array.from(e)
    }
    function kK(e) {
        if (Array.isArray(e))
            return wv(e)
    }
    function os(e, r) {
        return AK(e) || RK(e, r) || _v(e, r) || xK()
    }
    function xK() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function RK(e, r) {
        var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (t != null) {
            var n, i, a, f, c = [], l = !0, h = !1;
            try {
                if (a = (t = t.call(e)).next,
                r === 0) {
                    if (Object(t) !== t)
                        return;
                    l = !1
                } else
                    for (; !(l = (n = a.call(t)).done) && (c.push(n.value),
                    c.length !== r); l = !0)
                        ;
            } catch (m) {
                h = !0,
                i = m
            } finally {
                try {
                    if (!l && t.return != null && (f = t.return(),
                    Object(f) !== f))
                        return
                } finally {
                    if (h)
                        throw i
                }
            }
            return c
        }
    }
    function AK(e) {
        if (Array.isArray(e))
            return e
    }
    function bv() {
        "use strict";
        bv = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && xt(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function yI(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function $K(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    yI(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    yI(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function Tt(e, r) {
        var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (!t) {
            if (Array.isArray(e) || (t = _v(e)) || r && e && typeof e.length == "number") {
                t && (e = t);
                var n = 0
                  , i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(h) {
                        throw h
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a = !0, f = !1, c;
        return {
            s: function() {
                t = t.call(e)
            },
            n: function() {
                var h = t.next();
                return a = h.done,
                h
            },
            e: function(h) {
                f = !0,
                c = h
            },
            f: function() {
                try {
                    !a && t.return != null && t.return()
                } finally {
                    if (f)
                        throw c
                }
            }
        }
    }
    function _v(e, r) {
        if (!!e) {
            if (typeof e == "string")
                return wv(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (t === "Object" && e.constructor && (t = e.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(e);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return wv(e, r)
        }
    }
    function wv(e, r) {
        (r == null || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++)
            n[t] = e[t];
        return n
    }
    function NK(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function gI(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, LK(n.key), n)
        }
    }
    function jK(e, r, t) {
        return r && gI(e.prototype, r),
        t && gI(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function LK(e) {
        var r = CK(e, "string");
        return xt(r) === "symbol" ? r : String(r)
    }
    function CK(e, r) {
        if (xt(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (xt(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function DK(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Bo(e, r)
    }
    function BK(e) {
        var r = SI();
        return function() {
            var n = Mo(e), i;
            if (r) {
                var a = Mo(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return MK(this, i)
        }
    }
    function MK(e, r) {
        if (r && (xt(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return GK(e)
    }
    function GK(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function Sv(e) {
        var r = typeof Map == "function" ? new Map : void 0;
        return Sv = function(n) {
            if (n === null || !UK(n))
                return n;
            if (typeof n != "function")
                throw new TypeError("Super expression must either be null or a function");
            if (typeof r != "undefined") {
                if (r.has(n))
                    return r.get(n);
                r.set(n, i)
            }
            function i() {
                return as(n, arguments, Mo(this).constructor)
            }
            return i.prototype = Object.create(n.prototype, {
                constructor: {
                    value: i,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            Bo(i, n)
        }
        ,
        Sv(e)
    }
    function as(e, r, t) {
        return SI() ? as = Reflect.construct.bind() : as = function(i, a, f) {
            var c = [null];
            c.push.apply(c, a);
            var l = Function.bind.apply(i, c)
              , h = new l;
            return f && Bo(h, f.prototype),
            h
        }
        ,
        as.apply(null, arguments)
    }
    function SI() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function UK(e) {
        return Function.toString.call(e).indexOf("[native code]") !== -1
    }
    function Bo(e, r) {
        return Bo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Bo(e, r)
    }
    function Mo(e) {
        return Mo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        Mo(e)
    }
    var FK = Object.is
      , VK = Object.defineProperty
      , zK = Object.getOwnPropertyDescriptor
      , HK = Object.getOwnPropertyNames
      , KK = Object.getOwnPropertySymbols
      , WK = Object.getPrototypeOf
      , ti = globalThis
      , bI = ti.trustedTypes
      , YK = bI ? bI.emptyScript : ""
      , gv = ti.reactiveElementPolyfillSupport
      , Do = function(r, t) {
        return r
    }
      , Ov = {
        toAttribute: function(r, t) {
            switch (t) {
            case Boolean:
                r = r ? YK : null;
                break;
            case Object:
            case Array:
                r = r == null ? r : JSON.stringify(r)
            }
            return r
        },
        fromAttribute: function(r, t) {
            var n = r;
            switch (t) {
            case Boolean:
                n = r !== null;
                break;
            case Number:
                n = r === null ? null : Number(r);
                break;
            case Object:
            case Array:
                try {
                    n = JSON.parse(r)
                } catch (i) {
                    n = null
                }
            }
            return n
        }
    }
      , OI = function(r, t) {
        return !FK(r, t)
    }
      , wI = {
        attribute: !0,
        type: String,
        converter: Ov,
        reflect: !1,
        hasChanged: OI
    };
    (dv = Symbol.metadata) !== null && dv !== void 0 || (Symbol.metadata = Symbol("metadata")),
    (mv = ti.litPropertyMetadata) !== null && mv !== void 0 || (ti.litPropertyMetadata = new WeakMap);
    var kt = function(e) {
        DK(t, e);
        var r = BK(t);
        function t() {
            var n;
            return NK(this, t),
            n = r.call(this),
            n._$Ep = void 0,
            n.isUpdatePending = !1,
            n.hasUpdated = !1,
            n._$Em = null,
            n._$Ev(),
            n
        }
        return jK(t, [{
            key: "_$Ev",
            value: function() {
                var i = this, a;
                this._$Eg = new Promise(function(f) {
                    return i.enableUpdating = f
                }
                ),
                this._$AL = new Map,
                this._$E_(),
                this.requestUpdate(),
                (a = this.constructor.l) === null || a === void 0 || a.forEach(function(f) {
                    return f(i)
                })
            }
        }, {
            key: "addController",
            value: function(i) {
                var a, f;
                ((a = this._$ES) !== null && a !== void 0 ? a : this._$ES = []).push(i),
                this.renderRoot !== void 0 && this.isConnected && ((f = i.hostConnected) === null || f === void 0 || f.call(i))
            }
        }, {
            key: "removeController",
            value: function(i) {
                var a;
                (a = this._$ES) === null || a === void 0 || a.splice(this._$ES.indexOf(i) >>> 0, 1)
            }
        }, {
            key: "_$E_",
            value: function() {
                var i = new Map, a = this.constructor.elementProperties, f = Tt(a.keys()), c;
                try {
                    for (f.s(); !(c = f.n()).done; ) {
                        var l = c.value;
                        this.hasOwnProperty(l) && (i.set(l, this[l]),
                        delete this[l])
                    }
                } catch (h) {
                    f.e(h)
                } finally {
                    f.f()
                }
                i.size > 0 && (this._$Ep = i)
            }
        }, {
            key: "createRenderRoot",
            value: function() {
                var i, a = (i = this.shadowRoot) !== null && i !== void 0 ? i : this.attachShadow(this.constructor.shadowRootOptions);
                return hv(a, this.constructor.elementStyles),
                a
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var i, a;
                (i = this.renderRoot) !== null && i !== void 0 || (this.renderRoot = this.createRenderRoot()),
                this.enableUpdating(!0),
                (a = this._$ES) === null || a === void 0 || a.forEach(function(f) {
                    var c;
                    return (c = f.hostConnected) === null || c === void 0 ? void 0 : c.call(f)
                })
            }
        }, {
            key: "enableUpdating",
            value: function(i) {}
        }, {
            key: "disconnectedCallback",
            value: function() {
                var i;
                (i = this._$ES) === null || i === void 0 || i.forEach(function(a) {
                    var f;
                    return (f = a.hostDisconnected) === null || f === void 0 ? void 0 : f.call(a)
                })
            }
        }, {
            key: "attributeChangedCallback",
            value: function(i, a, f) {
                this._$AK(i, f)
            }
        }, {
            key: "_$EO",
            value: function(i, a) {
                var f = this.constructor.elementProperties.get(i)
                  , c = this.constructor._$Eu(i, f);
                if (c !== void 0 && f.reflect === !0) {
                    var l, h = (((l = f.converter) === null || l === void 0 ? void 0 : l.toAttribute) !== void 0 ? f.converter : Ov).toAttribute(a, f.type);
                    this._$Em = i,
                    h == null ? this.removeAttribute(c) : this.setAttribute(c, h),
                    this._$Em = null
                }
            }
        }, {
            key: "_$AK",
            value: function(i, a) {
                var f = this.constructor
                  , c = f._$Eh.get(i);
                if (c !== void 0 && this._$Em !== c) {
                    var l, h = f.getPropertyOptions(c), m = typeof h.converter == "function" ? {
                        fromAttribute: h.converter
                    } : ((l = h.converter) === null || l === void 0 ? void 0 : l.fromAttribute) !== void 0 ? h.converter : Ov;
                    this._$Em = c,
                    this[c] = m.fromAttribute(a, h.type),
                    this._$Em = null
                }
            }
        }, {
            key: "requestUpdate",
            value: function(i, a, f) {
                var c = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
                  , l = arguments.length > 4 ? arguments[4] : void 0;
                if (i !== void 0) {
                    var h, m;
                    if ((h = f) !== null && h !== void 0 || (f = this.constructor.getPropertyOptions(i)),
                    !((m = f.hasChanged) !== null && m !== void 0 ? m : OI)(c ? l : this[i], a))
                        return;
                    this.C(i, a, f)
                }
                this.isUpdatePending === !1 && (this._$Eg = this._$EP())
            }
        }, {
            key: "C",
            value: function(i, a, f) {
                var c;
                this._$AL.has(i) || this._$AL.set(i, a),
                f.reflect === !0 && this._$Em !== i && ((c = this._$Ej) !== null && c !== void 0 ? c : this._$Ej = new Set).add(i)
            }
        }, {
            key: "_$EP",
            value: function() {
                var n = $K(bv().mark(function a() {
                    var f;
                    return bv().wrap(function(l) {
                        for (; ; )
                            switch (l.prev = l.next) {
                            case 0:
                                return this.isUpdatePending = !0,
                                l.prev = 1,
                                l.next = 4,
                                this._$Eg;
                            case 4:
                                l.next = 9;
                                break;
                            case 6:
                                l.prev = 6,
                                l.t0 = l.catch(1),
                                Promise.reject(l.t0);
                            case 9:
                                if (f = this.scheduleUpdate(),
                                l.t1 = f != null,
                                !l.t1) {
                                    l.next = 14;
                                    break
                                }
                                return l.next = 14,
                                f;
                            case 14:
                                return l.abrupt("return", !this.isUpdatePending);
                            case 15:
                            case "end":
                                return l.stop()
                            }
                    }, a, this, [[1, 6]])
                }));
                function i() {
                    return n.apply(this, arguments)
                }
                return i
            }()
        }, {
            key: "scheduleUpdate",
            value: function() {
                return this.performUpdate()
            }
        }, {
            key: "performUpdate",
            value: function() {
                if (!!this.isUpdatePending) {
                    if (!this.hasUpdated) {
                        if (this._$Ep) {
                            var i = Tt(this._$Ep), a;
                            try {
                                for (i.s(); !(a = i.n()).done; ) {
                                    var f = os(a.value, 2)
                                      , c = f[0]
                                      , l = f[1];
                                    this[c] = l
                                }
                            } catch (P) {
                                i.e(P)
                            } finally {
                                i.f()
                            }
                            this._$Ep = void 0
                        }
                        var h = this.constructor.elementProperties;
                        if (h.size > 0) {
                            var m = Tt(h), y;
                            try {
                                for (m.s(); !(y = m.n()).done; ) {
                                    var b = os(y.value, 2)
                                      , w = b[0]
                                      , S = b[1];
                                    S.wrapped !== !0 || this._$AL.has(w) || this[w] === void 0 || this.C(w, this[w], S)
                                }
                            } catch (P) {
                                m.e(P)
                            } finally {
                                m.f()
                            }
                        }
                    }
                    var T = !1
                      , k = this._$AL;
                    try {
                        var E;
                        T = this.shouldUpdate(k),
                        T ? (this.willUpdate(k),
                        (E = this._$ES) !== null && E !== void 0 && E.forEach(function(P) {
                            var $;
                            return ($ = P.hostUpdate) === null || $ === void 0 ? void 0 : $.call(P)
                        }),
                        this.update(k)) : this._$ET()
                    } catch (P) {
                        throw T = !1,
                        this._$ET(),
                        P
                    }
                    T && this._$AE(k)
                }
            }
        }, {
            key: "willUpdate",
            value: function(i) {}
        }, {
            key: "_$AE",
            value: function(i) {
                var a;
                (a = this._$ES) !== null && a !== void 0 && a.forEach(function(f) {
                    var c;
                    return (c = f.hostUpdated) === null || c === void 0 ? void 0 : c.call(f)
                }),
                this.hasUpdated || (this.hasUpdated = !0,
                this.firstUpdated(i)),
                this.updated(i)
            }
        }, {
            key: "_$ET",
            value: function() {
                this._$AL = new Map,
                this.isUpdatePending = !1
            }
        }, {
            key: "updateComplete",
            get: function() {
                return this.getUpdateComplete()
            }
        }, {
            key: "getUpdateComplete",
            value: function() {
                return this._$Eg
            }
        }, {
            key: "shouldUpdate",
            value: function(i) {
                return !0
            }
        }, {
            key: "update",
            value: function(i) {
                var a = this;
                this._$Ej && (this._$Ej = this._$Ej.forEach(function(f) {
                    return a._$EO(f, a[f])
                })),
                this._$ET()
            }
        }, {
            key: "updated",
            value: function(i) {}
        }, {
            key: "firstUpdated",
            value: function(i) {}
        }], [{
            key: "addInitializer",
            value: function(i) {
                var a;
                this._$Ei(),
                ((a = this.l) !== null && a !== void 0 ? a : this.l = []).push(i)
            }
        }, {
            key: "observedAttributes",
            get: function() {
                return this.finalize(),
                this._$Eh && is(this._$Eh.keys())
            }
        }, {
            key: "createProperty",
            value: function(i) {
                var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : wI;
                if (a.state && (a.attribute = !1),
                this._$Ei(),
                this.elementProperties.set(i, a),
                !a.noAccessor) {
                    var f = Symbol()
                      , c = this.getPropertyDescriptor(i, f, a);
                    c !== void 0 && VK(this.prototype, i, c)
                }
            }
        }, {
            key: "getPropertyDescriptor",
            value: function(i, a, f) {
                var c, l = (c = zK(this.prototype, i)) !== null && c !== void 0 ? c : {
                    get: function() {
                        return this[a]
                    },
                    set: function(b) {
                        this[a] = b
                    }
                }, h = l.get, m = l.set;
                return {
                    get: function() {
                        return h == null ? void 0 : h.call(this)
                    },
                    set: function(b) {
                        var w = h == null ? void 0 : h.call(this);
                        m.call(this, b),
                        this.requestUpdate(i, w, f)
                    },
                    configurable: !0,
                    enumerable: !0
                }
            }
        }, {
            key: "getPropertyOptions",
            value: function(i) {
                var a;
                return (a = this.elementProperties.get(i)) !== null && a !== void 0 ? a : wI
            }
        }, {
            key: "_$Ei",
            value: function() {
                if (!this.hasOwnProperty(Do("elementProperties"))) {
                    var i = WK(this);
                    i.finalize(),
                    i.l !== void 0 && (this.l = is(i.l)),
                    this.elementProperties = new Map(i.elementProperties)
                }
            }
        }, {
            key: "finalize",
            value: function() {
                if (!this.hasOwnProperty(Do("finalized"))) {
                    if (this.finalized = !0,
                    this._$Ei(),
                    this.hasOwnProperty(Do("properties"))) {
                        var i = this.properties, a = [].concat(is(HK(i)), is(KK(i))), f = Tt(a), c;
                        try {
                            for (f.s(); !(c = f.n()).done; ) {
                                var l = c.value;
                                this.createProperty(l, i[l])
                            }
                        } catch (L) {
                            f.e(L)
                        } finally {
                            f.f()
                        }
                    }
                    var h = this[Symbol.metadata];
                    if (h !== null) {
                        var m = litPropertyMetadata.get(h);
                        if (m !== void 0) {
                            var y = Tt(m), b;
                            try {
                                for (y.s(); !(b = y.n()).done; ) {
                                    var w = os(b.value, 2)
                                      , S = w[0]
                                      , T = w[1];
                                    this.elementProperties.set(S, T)
                                }
                            } catch (L) {
                                y.e(L)
                            } finally {
                                y.f()
                            }
                        }
                    }
                    this._$Eh = new Map;
                    var k = Tt(this.elementProperties), E;
                    try {
                        for (k.s(); !(E = k.n()).done; ) {
                            var P = os(E.value, 2)
                              , $ = P[0]
                              , R = P[1]
                              , j = this._$Eu($, R);
                            j !== void 0 && this._$Eh.set(j, $)
                        }
                    } catch (L) {
                        k.e(L)
                    } finally {
                        k.f()
                    }
                    this.elementStyles = this.finalizeStyles(this.styles)
                }
            }
        }, {
            key: "finalizeStyles",
            value: function(i) {
                var a = [];
                if (Array.isArray(i)) {
                    var f = new Set(i.flat(1 / 0).reverse()), c = Tt(f), l;
                    try {
                        for (c.s(); !(l = c.n()).done; ) {
                            var h = l.value;
                            a.unshift(ns(h))
                        }
                    } catch (m) {
                        c.e(m)
                    } finally {
                        c.f()
                    }
                } else
                    i !== void 0 && a.push(ns(i));
                return a
            }
        }, {
            key: "_$Eu",
            value: function(i, a) {
                var f = a.attribute;
                return f === !1 ? void 0 : typeof f == "string" ? f : typeof i == "string" ? i.toLowerCase() : void 0
            }
        }]),
        t
    }(Sv(HTMLElement));
    kt.elementStyles = [],
    kt.shadowRootOptions = {
        mode: "open"
    },
    kt[Do("elementProperties")] = new Map,
    kt[Do("finalized")] = new Map,
    gv != null && gv({
        ReactiveElement: kt
    }),
    ((yv = ti.reactiveElementVersions) !== null && yv !== void 0 ? yv : ti.reactiveElementVersions = []).push("2.0.0");
    var The = N(z(), 1);
    var QK = ne()
      , qv = X()
      , Go = Y()
      , JK = Wt()
      , ZK = za()
      , e5 = yr()
      , r5 = Rr().f
      , EI = mr()
      , t5 = ku()
      , II = le()
      , n5 = Qc()
      , kI = bi()
      , i5 = PI()
      , o5 = Pe()
      , a5 = K()
      , u5 = ie()
      , s5 = $e().enforce
      , f5 = Oi()
      , c5 = ee()
      , xI = pf()
      , RI = vf()
      , l5 = c5("match")
      , Xr = qv.RegExp
      , ni = Xr.prototype
      , p5 = qv.SyntaxError
      , v5 = Go(ni.exec)
      , us = Go("".charAt)
      , qI = Go("".replace)
      , TI = Go("".indexOf)
      , h5 = Go("".slice)
      , d5 = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/
      , Rt = /a/g
      , Pv = /a/g
      , m5 = new Xr(Rt) !== Rt
      , AI = kI.MISSED_STICKY
      , y5 = kI.UNSUPPORTED_Y
      , g5 = QK && (!m5 || AI || xI || RI || a5(function() {
        return Pv[l5] = !1,
        Xr(Rt) != Rt || Xr(Pv) == Pv || Xr(Rt, "i") != "/a/i"
    }))
      , b5 = function(e) {
        for (var r = e.length, t = 0, n = "", i = !1, a; t <= r; t++) {
            if (a = us(e, t),
            a === "\\") {
                n += a + us(e, ++t);
                continue
            }
            !i && a === "." ? n += "[\\s\\S]" : (a === "[" ? i = !0 : a === "]" && (i = !1),
            n += a)
        }
        return n
    }
      , w5 = function(e) {
        for (var r = e.length, t = 0, n = "", i = [], a = {}, f = !1, c = !1, l = 0, h = "", m; t <= r; t++) {
            if (m = us(e, t),
            m === "\\")
                m = m + us(e, ++t);
            else if (m === "]")
                f = !1;
            else if (!f)
                switch (!0) {
                case m === "[":
                    f = !0;
                    break;
                case m === "(":
                    v5(d5, h5(e, t + 1)) && (t += 2,
                    c = !0),
                    n += m,
                    l++;
                    continue;
                case (m === ">" && c):
                    if (h === "" || u5(a, h))
                        throw new p5("Invalid capture group name");
                    a[h] = !0,
                    i[i.length] = [h, l],
                    c = !1,
                    h = "";
                    continue
                }
            c ? h += m : n += m
        }
        return [n, i]
    };
    if (JK("RegExp", g5)) {
        for (Yr = function(r, t) {
            var n = EI(ni, this), i = t5(r), a = t === void 0, f = [], c = r, l, h, m, y, b, w;
            if (!n && i && a && r.constructor === Yr)
                return r;
            if ((i || EI(ni, r)) && (r = r.source,
            a && (t = n5(c))),
            r = r === void 0 ? "" : II(r),
            t = t === void 0 ? "" : II(t),
            c = r,
            xI && "dotAll"in Rt && (h = !!t && TI(t, "s") > -1,
            h && (t = qI(t, /s/g, ""))),
            l = t,
            AI && "sticky"in Rt && (m = !!t && TI(t, "y") > -1,
            m && y5 && (t = qI(t, /y/g, ""))),
            RI && (y = w5(r),
            r = y[0],
            f = y[1]),
            b = ZK(Xr(r, t), n ? this : ni, Yr),
            (h || m || f.length) && (w = s5(b),
            h && (w.dotAll = !0,
            w.raw = Yr(b5(r), l)),
            m && (w.sticky = !0),
            f.length && (w.groups = f)),
            r !== c)
                try {
                    e5(b, "source", c === "" ? "(?:)" : c)
                } catch (S) {}
            return b
        }
        ,
        Ev = r5(Xr),
        Iv = 0; Ev.length > Iv; )
            i5(Yr, Xr, Ev[Iv++]);
        ni.constructor = Yr,
        Yr.prototype = ni,
        o5(qv, "RegExp", Yr, {
            constructor: !0
        })
    }
    var Yr, Ev, Iv;
    f5("RegExp");
    var jhe = N(pe(), 1);
    var S5 = ne()
      , O5 = bi().MISSED_STICKY
      , _5 = Ue()
      , P5 = $r()
      , E5 = $e().get
      , $I = RegExp.prototype
      , I5 = TypeError;
    S5 && O5 && P5($I, "sticky", {
        configurable: !0,
        get: function() {
            if (this !== $I) {
                if (_5(this) === "RegExp")
                    return !!E5(this).sticky;
                throw I5("Incompatible receiver, RegExp required")
            }
        }
    });
    var R5 = M()
      , DI = at()
      , A5 = Je().f
      , $5 = fr()
      , LI = le()
      , N5 = Tv()
      , j5 = Xe()
      , L5 = kv()
      , C5 = Ae()
      , CI = DI("".startsWith)
      , D5 = DI("".slice)
      , B5 = Math.min
      , BI = L5("startsWith")
      , M5 = !C5 && !BI && !!function() {
        var e = A5(String.prototype, "startsWith");
        return e && !e.writable
    }();
    R5({
        target: "String",
        proto: !0,
        forced: !M5 && !BI
    }, {
        startsWith: function(r) {
            var t = LI(j5(this));
            N5(r);
            var n = $5(B5(arguments.length > 1 ? arguments[1] : void 0, t.length))
              , i = LI(r);
            return CI ? CI(t, i, n) : D5(t, n, n + i.length) === i
        }
    });
    var G5 = M()
      , UI = at()
      , U5 = Je().f
      , F5 = fr()
      , MI = le()
      , V5 = Tv()
      , z5 = Xe()
      , H5 = kv()
      , K5 = Ae()
      , GI = UI("".endsWith)
      , W5 = UI("".slice)
      , Y5 = Math.min
      , FI = H5("endsWith")
      , X5 = !K5 && !FI && !!function() {
        var e = U5(String.prototype, "endsWith");
        return e && !e.writable
    }();
    G5({
        target: "String",
        proto: !0,
        forced: !X5 && !FI
    }, {
        endsWith: function(r) {
            var t = MI(z5(this));
            V5(r);
            var n = arguments.length > 1 ? arguments[1] : void 0
              , i = t.length
              , a = n === void 0 ? i : Y5(F5(n), i)
              , f = MI(r);
            return GI ? GI(t, f, a) : W5(t, a - f.length, a) === f
        }
    });
    var Q5 = M()
      , J5 = Hp()
      , Z5 = Bi();
    Q5({
        target: "Array",
        proto: !0
    }, {
        fill: J5
    });
    Z5("fill");
    var xv;
    function Lv(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && $v(e, r)
    }
    function $v(e, r) {
        return $v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        $v(e, r)
    }
    function Cv(e) {
        var r = t6();
        return function() {
            var n = ss(e), i;
            if (r) {
                var a = ss(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return e6(this, i)
        }
    }
    function e6(e, r) {
        if (r && (Nt(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return r6(e)
    }
    function r6(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function t6() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function ss(e) {
        return ss = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        ss(e)
    }
    function Dv(e, r) {
        var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (!t) {
            if (Array.isArray(e) || (t = Bv(e)) || r && e && typeof e.length == "number") {
                t && (e = t);
                var n = 0
                  , i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(h) {
                        throw h
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a = !0, f = !1, c;
        return {
            s: function() {
                t = t.call(e)
            },
            n: function() {
                var h = t.next();
                return a = h.done,
                h
            },
            e: function(h) {
                f = !0,
                c = h
            },
            f: function() {
                try {
                    !a && t.return != null && t.return()
                } finally {
                    if (f)
                        throw c
                }
            }
        }
    }
    function n6(e) {
        return a6(e) || o6(e) || Bv(e) || i6()
    }
    function i6() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function o6(e) {
        if (typeof Symbol != "undefined" && e[Symbol.iterator] != null || e["@@iterator"] != null)
            return Array.from(e)
    }
    function a6(e) {
        if (Array.isArray(e))
            return Nv(e)
    }
    function u6(e, r) {
        return c6(e) || f6(e, r) || Bv(e, r) || s6()
    }
    function s6() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
    }
    function Bv(e, r) {
        if (!!e) {
            if (typeof e == "string")
                return Nv(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (t === "Object" && e.constructor && (t = e.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(e);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Nv(e, r)
        }
    }
    function Nv(e, r) {
        (r == null || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++)
            n[t] = e[t];
        return n
    }
    function f6(e, r) {
        var t = e == null ? null : typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (t != null) {
            var n, i, a, f, c = [], l = !0, h = !1;
            try {
                if (a = (t = t.call(e)).next,
                r === 0) {
                    if (Object(t) !== t)
                        return;
                    l = !1
                } else
                    for (; !(l = (n = a.call(t)).done) && (c.push(n.value),
                    c.length !== r); l = !0)
                        ;
            } catch (m) {
                h = !0,
                i = m
            } finally {
                try {
                    if (!l && t.return != null && (f = t.return(),
                    Object(f) !== f))
                        return
                } finally {
                    if (h)
                        throw i
                }
            }
            return c
        }
    }
    function c6(e) {
        if (Array.isArray(e))
            return e
    }
    function Jr(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function VI(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, l6(n.key), n)
        }
    }
    function Zr(e, r, t) {
        return r && VI(e.prototype, r),
        t && VI(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function l6(e) {
        var r = p6(e, "string");
        return Nt(r) === "symbol" ? r : String(r)
    }
    function p6(e, r) {
        if (Nt(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Nt(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function Nt(e) {
        return Nt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Nt(e)
    }
    var fs = globalThis
      , cs = fs.trustedTypes
      , zI = cs ? cs.createPolicy("lit-html", {
        createHTML: function(r) {
            return r
        }
    }) : void 0
      , QI = "$lit$"
      , Qr = "lit$".concat((Math.random() + "").slice(9), "$")
      , JI = "?" + Qr
      , v6 = "<".concat(JI, ">")
      , jt = document
      , Fo = function() {
        return jt.createComment("")
    }
      , Vo = function(r) {
        return r === null || Nt(r) != "object" && typeof r != "function"
    }
      , ZI = Array.isArray
      , h6 = function(r) {
        return ZI(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function"
    }
      , Rv = "[ 	\n\f\r]"
      , Uo = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g
      , HI = /-->/g
      , KI = />/g
      , At = RegExp(">|".concat(Rv, "(?:([^\\s\"'>=/]+)(").concat(Rv, "*=").concat(Rv, "*(?:[^ 	\n\f\r\"'`<>=]|(\"|')|))|$)"), "g")
      , WI = /'/g
      , YI = /"/g
      , eq = /^(?:script|style|textarea|title)$/i
      , rq = function(r) {
        return function(t) {
            for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                i[a - 1] = arguments[a];
            return {
                _$litType$: r,
                strings: t,
                values: i
            }
        }
    }
      , Mv = rq(1)
      , tde = rq(2)
      , Lt = Symbol.for("lit-noChange")
      , de = Symbol.for("lit-nothing")
      , XI = new WeakMap
      , $t = jt.createTreeWalker(jt, 129);
    function tq(e, r) {
        if (!Array.isArray(e) || !e.hasOwnProperty("raw"))
            throw Error("invalid template strings array");
        return zI !== void 0 ? zI.createHTML(r) : r
    }
    var d6 = function(r, t) {
        for (var n = r.length - 1, i = [], a, f = t === 2 ? "<svg>" : "", c = Uo, l = 0; l < n; l++) {
            for (var h = r[l], m = void 0, y = void 0, b = -1, w = 0; w < h.length && (c.lastIndex = w,
            y = c.exec(h),
            y !== null); ) {
                var S;
                w = c.lastIndex,
                c === Uo ? y[1] === "!--" ? c = HI : y[1] !== void 0 ? c = KI : y[2] !== void 0 ? (eq.test(y[2]) && (a = RegExp("</" + y[2], "g")),
                c = At) : y[3] !== void 0 && (c = At) : c === At ? y[0] === ">" ? (c = (S = a) !== null && S !== void 0 ? S : Uo,
                b = -1) : y[1] === void 0 ? b = -2 : (b = c.lastIndex - y[2].length,
                m = y[1],
                c = y[3] === void 0 ? At : y[3] === '"' ? YI : WI) : c === YI || c === WI ? c = At : c === HI || c === KI ? c = Uo : (c = At,
                a = void 0)
            }
            var T = c === At && r[l + 1].startsWith("/>") ? " " : "";
            f += c === Uo ? h + v6 : b >= 0 ? (i.push(m),
            h.slice(0, b) + QI + h.slice(b) + Qr + T) : h + Qr + (b === -2 ? l : T)
        }
        return [tq(r, f + (r[n] || "<?>") + (t === 2 ? "</svg>" : "")), i]
    }
      , jv = function() {
        function e(r, t) {
            var n = r.strings
              , i = r._$litType$;
            Jr(this, e);
            var a;
            this.parts = [];
            var f = 0
              , c = 0
              , l = n.length - 1
              , h = this.parts
              , m = d6(n, i)
              , y = u6(m, 2)
              , b = y[0]
              , w = y[1];
            if (this.el = e.createElement(b, t),
            $t.currentNode = this.el.content,
            i === 2) {
                var S = this.el.content.firstChild;
                S.replaceWith.apply(S, n6(S.childNodes))
            }
            for (; (a = $t.nextNode()) !== null && h.length < l; ) {
                if (a.nodeType === 1) {
                    if (a.hasAttributes()) {
                        var T = Dv(a.getAttributeNames()), k;
                        try {
                            for (T.s(); !(k = T.n()).done; ) {
                                var E = k.value;
                                if (E.endsWith(QI)) {
                                    var P = w[c++]
                                      , $ = a.getAttribute(E).split(Qr)
                                      , R = /([.?@])?(.*)/.exec(P);
                                    h.push({
                                        type: 1,
                                        index: f,
                                        name: R[2],
                                        strings: $,
                                        ctor: R[1] === "." ? y6 : R[1] === "?" ? g6 : R[1] === "@" ? b6 : ls
                                    }),
                                    a.removeAttribute(E)
                                } else
                                    E.startsWith(Qr) && (h.push({
                                        type: 6,
                                        index: f
                                    }),
                                    a.removeAttribute(E))
                            }
                        } catch (B) {
                            T.e(B)
                        } finally {
                            T.f()
                        }
                    }
                    if (eq.test(a.tagName)) {
                        var j = a.textContent.split(Qr)
                          , L = j.length - 1;
                        if (L > 0) {
                            a.textContent = cs ? cs.emptyScript : "";
                            for (var F = 0; F < L; F++)
                                a.append(j[F], Fo()),
                                $t.nextNode(),
                                h.push({
                                    type: 2,
                                    index: ++f
                                });
                            a.append(j[L], Fo())
                        }
                    }
                } else if (a.nodeType === 8)
                    if (a.data === JI)
                        h.push({
                            type: 2,
                            index: f
                        });
                    else
                        for (var C = -1; (C = a.data.indexOf(Qr, C + 1)) !== -1; )
                            h.push({
                                type: 7,
                                index: f
                            }),
                            C += Qr.length - 1;
                f++
            }
        }
        return Zr(e, null, [{
            key: "createElement",
            value: function(t, n) {
                var i = jt.createElement("template");
                return i.innerHTML = t,
                i
            }
        }]),
        e
    }();
    function ii(e, r) {
        var t, n, i, a, f, c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : e, l = arguments.length > 3 ? arguments[3] : void 0;
        if (r === Lt)
            return r;
        var h = l !== void 0 ? (t = c._$Co) === null || t === void 0 ? void 0 : t[l] : c._$Cl
          , m = Vo(r) ? void 0 : r._$litDirective$;
        return ((n = h) === null || n === void 0 ? void 0 : n.constructor) !== m && ((i = h) !== null && i !== void 0 && (a = i._$AO) !== null && a !== void 0 && a.call(i, !1),
        m === void 0 ? h = void 0 : (h = new m(e),
        h._$AT(e, c, l)),
        l !== void 0 ? ((f = c._$Co) !== null && f !== void 0 ? f : c._$Co = [])[l] = h : c._$Cl = h),
        h !== void 0 && (r = ii(e, h._$AS(e, r.values), h, l)),
        r
    }
    var m6 = function() {
        function e(r, t) {
            Jr(this, e),
            this._$AV = [],
            this._$AN = void 0,
            this._$AD = r,
            this._$AM = t
        }
        return Zr(e, [{
            key: "parentNode",
            get: function() {
                return this._$AM.parentNode
            }
        }, {
            key: "_$AU",
            get: function() {
                return this._$AM._$AU
            }
        }, {
            key: "u",
            value: function(t) {
                var n, i = this._$AD, a = i.el.content, f = i.parts, c = ((n = t == null ? void 0 : t.creationScope) !== null && n !== void 0 ? n : jt).importNode(a, !0);
                $t.currentNode = c;
                for (var l = $t.nextNode(), h = 0, m = 0, y = f[0]; y !== void 0; ) {
                    var b;
                    if (h === y.index) {
                        var w = void 0;
                        y.type === 2 ? w = new Gv(l,l.nextSibling,this,t) : y.type === 1 ? w = new y.ctor(l,y.name,y.strings,this,t) : y.type === 6 && (w = new w6(l,this,t)),
                        this._$AV.push(w),
                        y = f[++m]
                    }
                    h !== ((b = y) === null || b === void 0 ? void 0 : b.index) && (l = $t.nextNode(),
                    h++)
                }
                return $t.currentNode = jt,
                c
            }
        }, {
            key: "p",
            value: function(t) {
                var n = 0, i = Dv(this._$AV), a;
                try {
                    for (i.s(); !(a = i.n()).done; ) {
                        var f = a.value;
                        f !== void 0 && (f.strings !== void 0 ? (f._$AI(t, f, n),
                        n += f.strings.length - 2) : f._$AI(t[n])),
                        n++
                    }
                } catch (c) {
                    i.e(c)
                } finally {
                    i.f()
                }
            }
        }]),
        e
    }()
      , Gv = function() {
        function e(r, t, n, i) {
            var a;
            Jr(this, e),
            this.type = 2,
            this._$AH = de,
            this._$AN = void 0,
            this._$AA = r,
            this._$AB = t,
            this._$AM = n,
            this.options = i,
            this._$Cv = (a = i == null ? void 0 : i.isConnected) !== null && a !== void 0 ? a : !0
        }
        return Zr(e, [{
            key: "_$AU",
            get: function() {
                var t, n;
                return (t = (n = this._$AM) === null || n === void 0 ? void 0 : n._$AU) !== null && t !== void 0 ? t : this._$Cv
            }
        }, {
            key: "parentNode",
            get: function() {
                var t, n = this._$AA.parentNode, i = this._$AM;
                return i !== void 0 && ((t = n) === null || t === void 0 ? void 0 : t.nodeType) === 11 && (n = i.parentNode),
                n
            }
        }, {
            key: "startNode",
            get: function() {
                return this._$AA
            }
        }, {
            key: "endNode",
            get: function() {
                return this._$AB
            }
        }, {
            key: "_$AI",
            value: function(t) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                t = ii(this, t, n),
                Vo(t) ? t === de || t == null || t === "" ? (this._$AH !== de && this._$AR(),
                this._$AH = de) : t !== this._$AH && t !== Lt && this._(t) : t._$litType$ !== void 0 ? this.g(t) : t.nodeType !== void 0 ? this.$(t) : h6(t) ? this.T(t) : this._(t)
            }
        }, {
            key: "k",
            value: function(t) {
                return this._$AA.parentNode.insertBefore(t, this._$AB)
            }
        }, {
            key: "$",
            value: function(t) {
                this._$AH !== t && (this._$AR(),
                this._$AH = this.k(t))
            }
        }, {
            key: "_",
            value: function(t) {
                this._$AH !== de && Vo(this._$AH) ? this._$AA.nextSibling.data = t : this.$(jt.createTextNode(t)),
                this._$AH = t
            }
        }, {
            key: "g",
            value: function(t) {
                var n, i = t.values, a = t._$litType$, f = typeof a == "number" ? this._$AC(t) : (a.el === void 0 && (a.el = jv.createElement(tq(a.h, a.h[0]), this.options)),
                a);
                if (((n = this._$AH) === null || n === void 0 ? void 0 : n._$AD) === f)
                    this._$AH.p(i);
                else {
                    var c = new m6(f,this)
                      , l = c.u(this.options);
                    c.p(i),
                    this.$(l),
                    this._$AH = c
                }
            }
        }, {
            key: "_$AC",
            value: function(t) {
                var n = XI.get(t.strings);
                return n === void 0 && XI.set(t.strings, n = new jv(t)),
                n
            }
        }, {
            key: "T",
            value: function(t) {
                ZI(this._$AH) || (this._$AH = [],
                this._$AR());
                var n = this._$AH, i, a = 0, f = Dv(t), c;
                try {
                    for (f.s(); !(c = f.n()).done; ) {
                        var l = c.value;
                        a === n.length ? n.push(i = new e(this.k(Fo()),this.k(Fo()),this,this.options)) : i = n[a],
                        i._$AI(l),
                        a++
                    }
                } catch (h) {
                    f.e(h)
                } finally {
                    f.f()
                }
                a < n.length && (this._$AR(i && i._$AB.nextSibling, a),
                n.length = a)
            }
        }, {
            key: "_$AR",
            value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this._$AA.nextSibling
                  , n = arguments.length > 1 ? arguments[1] : void 0;
                for ((i = this._$AP) === null || i === void 0 ? void 0 : i.call(this, !1, !0, n); t && t !== this._$AB; ) {
                    var i, a = t.nextSibling;
                    t.remove(),
                    t = a
                }
            }
        }, {
            key: "setConnected",
            value: function(t) {
                var n;
                this._$AM === void 0 && (this._$Cv = t,
                (n = this._$AP) === null || n === void 0 || n.call(this, t))
            }
        }]),
        e
    }()
      , ls = function() {
        function e(r, t, n, i, a) {
            Jr(this, e),
            this.type = 1,
            this._$AH = de,
            this._$AN = void 0,
            this.element = r,
            this.name = t,
            this._$AM = i,
            this.options = a,
            n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String),
            this.strings = n) : this._$AH = de
        }
        return Zr(e, [{
            key: "tagName",
            get: function() {
                return this.element.tagName
            }
        }, {
            key: "_$AU",
            get: function() {
                return this._$AM._$AU
            }
        }, {
            key: "_$AI",
            value: function(t) {
                var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this
                  , i = arguments.length > 2 ? arguments[2] : void 0
                  , a = arguments.length > 3 ? arguments[3] : void 0
                  , f = this.strings
                  , c = !1;
                if (f === void 0)
                    t = ii(this, t, n, 0),
                    c = !Vo(t) || t !== this._$AH && t !== Lt,
                    c && (this._$AH = t);
                else {
                    var l = t, h, m;
                    for (t = f[0],
                    h = 0; h < f.length - 1; h++) {
                        var y;
                        m = ii(this, l[i + h], n, h),
                        m === Lt && (m = this._$AH[h]),
                        c || (c = !Vo(m) || m !== this._$AH[h]),
                        m === de ? t = de : t !== de && (t += ((y = m) !== null && y !== void 0 ? y : "") + f[h + 1]),
                        this._$AH[h] = m
                    }
                }
                c && !a && this.j(t)
            }
        }, {
            key: "j",
            value: function(t) {
                t === de ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t != null ? t : "")
            }
        }]),
        e
    }()
      , y6 = function(e) {
        Lv(t, e);
        var r = Cv(t);
        function t() {
            var n;
            return Jr(this, t),
            n = r.apply(this, arguments),
            n.type = 3,
            n
        }
        return Zr(t, [{
            key: "j",
            value: function(i) {
                this.element[this.name] = i === de ? void 0 : i
            }
        }]),
        t
    }(ls)
      , g6 = function(e) {
        Lv(t, e);
        var r = Cv(t);
        function t() {
            var n;
            return Jr(this, t),
            n = r.apply(this, arguments),
            n.type = 4,
            n
        }
        return Zr(t, [{
            key: "j",
            value: function(i) {
                this.element.toggleAttribute(this.name, !!i && i !== de)
            }
        }]),
        t
    }(ls)
      , b6 = function(e) {
        Lv(t, e);
        var r = Cv(t);
        function t(n, i, a, f, c) {
            var l;
            return Jr(this, t),
            l = r.call(this, n, i, a, f, c),
            l.type = 5,
            l
        }
        return Zr(t, [{
            key: "_$AI",
            value: function(i) {
                var a, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this;
                if ((i = (a = ii(this, i, f, 0)) !== null && a !== void 0 ? a : de) !== Lt) {
                    var c = this._$AH
                      , l = i === de && c !== de || i.capture !== c.capture || i.once !== c.once || i.passive !== c.passive
                      , h = i !== de && (c === de || l);
                    l && this.element.removeEventListener(this.name, this, c),
                    h && this.element.addEventListener(this.name, this, i),
                    this._$AH = i
                }
            }
        }, {
            key: "handleEvent",
            value: function(i) {
                var a, f;
                typeof this._$AH == "function" ? this._$AH.call((a = (f = this.options) === null || f === void 0 ? void 0 : f.host) !== null && a !== void 0 ? a : this.element, i) : this._$AH.handleEvent(i)
            }
        }]),
        t
    }(ls)
      , w6 = function() {
        function e(r, t, n) {
            Jr(this, e),
            this.element = r,
            this.type = 6,
            this._$AN = void 0,
            this._$AM = t,
            this.options = n
        }
        return Zr(e, [{
            key: "_$AU",
            get: function() {
                return this._$AM._$AU
            }
        }, {
            key: "_$AI",
            value: function(t) {
                ii(this, t)
            }
        }]),
        e
    }();
    var Av = fs.litHtmlPolyfillSupport;
    Av != null && Av(jv, Gv),
    ((xv = fs.litHtmlVersions) !== null && xv !== void 0 ? xv : fs.litHtmlVersions = []).push("3.0.0");
    var nq = function(r, t, n) {
        var i, a = (i = n == null ? void 0 : n.renderBefore) !== null && i !== void 0 ? i : t, f = a._$litPart$;
        if (f === void 0) {
            var c, l = (c = n == null ? void 0 : n.renderBefore) !== null && c !== void 0 ? c : null;
            a._$litPart$ = f = new Gv(t.insertBefore(Fo(), l),l,void 0,n != null ? n : {})
        }
        return f._$AI(r),
        f
    };
    var bde = N(z(), 1);
    function oi(e) {
        return oi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        oi(e)
    }
    var Uv, Fv;
    function S6(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function iq(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, _6(n.key), n)
        }
    }
    function O6(e, r, t) {
        return r && iq(e.prototype, r),
        t && iq(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function _6(e) {
        var r = P6(e, "string");
        return oi(r) === "symbol" ? r : String(r)
    }
    function P6(e, r) {
        if (oi(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (oi(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function Ct() {
        return typeof Reflect != "undefined" && Reflect.get ? Ct = Reflect.get.bind() : Ct = function(r, t, n) {
            var i = E6(r, t);
            if (!!i) {
                var a = Object.getOwnPropertyDescriptor(i, t);
                return a.get ? a.get.call(arguments.length < 3 ? r : n) : a.value
            }
        }
        ,
        Ct.apply(this, arguments)
    }
    function E6(e, r) {
        for (; !Object.prototype.hasOwnProperty.call(e, r) && (e = kr(e),
        e !== null); )
            ;
        return e
    }
    function I6(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && zv(e, r)
    }
    function zv(e, r) {
        return zv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        zv(e, r)
    }
    function q6(e) {
        var r = k6();
        return function() {
            var n = kr(e), i;
            if (r) {
                var a = kr(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return T6(this, i)
        }
    }
    function T6(e, r) {
        if (r && (oi(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return oq(e)
    }
    function oq(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function k6() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function kr(e) {
        return kr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        kr(e)
    }
    var Dt = function(e) {
        I6(t, e);
        var r = q6(t);
        function t() {
            var n;
            return S6(this, t),
            n = r.apply(this, arguments),
            n.renderOptions = {
                host: oq(n)
            },
            n._$Do = void 0,
            n
        }
        return O6(t, [{
            key: "createRenderRoot",
            value: function() {
                var i, a, f = Ct(kr(t.prototype), "createRenderRoot", this).call(this);
                return (a = (i = this.renderOptions).renderBefore) !== null && a !== void 0 || (i.renderBefore = f.firstChild),
                f
            }
        }, {
            key: "update",
            value: function(i) {
                var a = this.render();
                this.hasUpdated || (this.renderOptions.isConnected = this.isConnected),
                Ct(kr(t.prototype), "update", this).call(this, i),
                this._$Do = nq(a, this.renderRoot, this.renderOptions)
            }
        }, {
            key: "connectedCallback",
            value: function() {
                var i;
                Ct(kr(t.prototype), "connectedCallback", this).call(this),
                (i = this._$Do) === null || i === void 0 || i.setConnected(!0)
            }
        }, {
            key: "disconnectedCallback",
            value: function() {
                var i;
                Ct(kr(t.prototype), "disconnectedCallback", this).call(this),
                (i = this._$Do) === null || i === void 0 || i.setConnected(!1)
            }
        }, {
            key: "render",
            value: function() {
                return Lt
            }
        }]),
        t
    }(kt);
    Dt._$litElement$ = !0,
    Dt["finalized"] = !0,
    (Uv = globalThis.litElementHydrateSupport) === null || Uv === void 0 || Uv.call(globalThis, {
        LitElement: Dt
    });
    var Vv = globalThis.litElementPolyfillSupport;
    Vv == null || Vv({
        LitElement: Dt
    });
    ((Fv = globalThis.litElementVersions) !== null && Fv !== void 0 ? Fv : globalThis.litElementVersions = []).push("4.0.0");
    function Bt(e) {
        return Bt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Bt(e)
    }
    var aq, uq, sq, fq, cq;
    function Hv() {
        "use strict";
        Hv = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && Bt(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function lq(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function x6(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    lq(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    lq(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function vq(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function pq(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, yq(n.key), n)
        }
    }
    function hq(e, r, t) {
        return r && pq(e.prototype, r),
        t && pq(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function dq(e, r) {
        if (typeof r != "function" && r !== null)
            throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(r && r.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        r && Kv(e, r)
    }
    function Kv(e, r) {
        return Kv = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
            return n.__proto__ = i,
            n
        }
        ,
        Kv(e, r)
    }
    function mq(e) {
        var r = A6();
        return function() {
            var n = ps(e), i;
            if (r) {
                var a = ps(this).constructor;
                i = Reflect.construct(n, arguments, a)
            } else
                i = n.apply(this, arguments);
            return R6(this, i)
        }
    }
    function R6(e, r) {
        if (r && (Bt(r) === "object" || typeof r == "function"))
            return r;
        if (r !== void 0)
            throw new TypeError("Derived constructors may only return object or undefined");
        return Wv(e)
    }
    function Wv(e) {
        if (e === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    function A6() {
        if (typeof Reflect == "undefined" || !Reflect.construct || Reflect.construct.sham)
            return !1;
        if (typeof Proxy == "function")
            return !0;
        try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})),
            !0
        } catch (e) {
            return !1
        }
    }
    function ps(e) {
        return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        ,
        ps(e)
    }
    function zo(e, r, t) {
        return r = yq(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function yq(e) {
        var r = $6(e, "string");
        return Bt(r) === "symbol" ? r : String(r)
    }
    function $6(e, r) {
        if (Bt(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (Bt(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    function Ho(e, r) {
        return r || (r = e.slice(0)),
        Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(r)
            }
        }))
    }
    var gq = Co(aq || (aq = Ho(["\n  button {\n    background-color: transparent;\n    outline: none;\n    border-style: none;\n    padding: var(--space-3);\n    border-radius: var(--space-1);\n    font-size: var(--font-lg);\n    background-color: inherit;\n    display: block;\n  }\n\n  button > svg {\n    display: block;\n  }\n"])))
      , bq = function(e) {
        dq(t, e);
        var r = mq(t);
        function t() {
            return vq(this, t),
            r.apply(this, arguments)
        }
        return hq(t, [{
            key: "toggleCollapsed",
            value: function() {
                var i;
                this.classList.toggle("collapsed"),
                (i = this.querySelector(".toggle-button")) === null || i === void 0 || i.blur()
            }
        }, {
            key: "handleDismissAll",
            value: function() {
                var i = this;
                this.classList.add("leaving"),
                this.addEventListener("animationend", function() {
                    i.remove()
                })
            }
        }, {
            key: "render",
            value: function() {
                return Mv(uq || (uq = Ho([' <div class="header">\n        <span class="title"> Shiny Client Errors </span>\n        <button\n          class="close-button"\n          @click=', '\n          title="Dismiss all console messages and close console"\n        >\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n            stroke-width="1.5"\n            height="1em"\n            width="1em"\n            stroke="currentColor"\n            class="close-icon"\n          >\n            <path\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              d="M6 18L18 6M6 6l12 12"\n            />\n          </svg>\n          Dismiss all\n        </button>\n        <button class="toggle-button" @click=', '>\n          <svg\n            xmlns="http://www.w3.org/2000/svg"\n            fill="none"\n            viewBox="0 0 24 24"\n            stroke-width="1.5"\n            height="1em"\n            width="1em"\n            stroke="currentColor"\n            class="toggle-icon"\n          >\n            <path\n              class="collapse"\n              stroke-linecap="round"\n              stroke-linejoin="round"\n              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"\n            />\n          </svg>\n        </button>\n      </div>\n      <slot class="content"></slot>'])), this.handleDismissAll, this.toggleCollapsed)
            }
        }]),
        t
    }(Dt);
    zo(bq, "styles", [Co(fq || (fq = Ho(["\n      :host {\n        /* We declare hard pixel values here to avoid body font size changes\n        messing up the size of the console. This was an issue with bslib setting\n        the body font-size at 16px relative to base shiny's 14px. */\n        --font-md: 14px;\n        --font-lg: 16px;\n        --font-xl: 18px;\n\n        /* These are all taken from open-props */\n        --space-1: 6px;\n        --space-2: calc(var(--space-1) * 2);\n        --space-3: calc(var(--space-1) * 3);\n        --space-4: calc(var(--space-1) * 4);\n        --space-8: calc(var(--space-1) * 8);\n\n        --red-2: #ffc9c9;\n        --red-6: #fa5252;\n        --red-7: #f03e3e;\n        --red-8: #e03131;\n        --red-10: #b02525;\n        --red-11: #962020;\n        --red-12: #7d1a1a;\n\n        --gray-1: #f8f9fa;\n        --gray-2: #e9ecef;\n        --gray-3: #dee2e6;\n        --gray-4: #ced4da;\n        --gray-6: #868e96;\n        --gray-8: #6c757d;\n\n        --green-8: #51cf66;\n\n        --shadow-color: 220 3% 15%;\n        --shadow-strength: 1%;\n        --shadow-3: 0 -1px 3px 0 hsl(var(--shadow-color) /\n                calc(var(--shadow-strength) + 2%)),\n          0 1px 2px -5px hsl(var(--shadow-color) /\n                calc(var(--shadow-strength) + 2%)),\n          0 2px 5px -5px hsl(var(--shadow-color) /\n                calc(var(--shadow-strength) + 4%)),\n          0 4px 12px -5px hsl(var(--shadow-color) /\n                calc(var(--shadow-strength) + 5%)),\n          0 12px 15px -5px hsl(var(--shadow-color) /\n                calc(var(--shadow-strength) + 7%));\n\n        --ring-shadow: 0 0 0 1px var(--gray-2);\n\n        /* How fast should the message pop in and out of the screen? */\n        --animation-speed: 500ms;\n\n        /* Taken from open-props */\n        --ease-3: cubic-bezier(0.25, 0, 0.3, 1);\n        --animation-slide-in-left: slide-in-left var(--animation-speed)\n          var(--ease-3);\n\n        --animation-slide-out-left: slide-out-left var(--animation-speed)\n          var(--ease-3);\n        --modal-bg-color: white;\n\n        position: fixed;\n        top: var(--space-1);\n        right: var(--space-1);\n        z-index: 1000;\n\n        display: flex;\n        flex-direction: column;\n\n        background-color: var(--modal-bg-color);\n        border-radius: var(--space-1);\n\n        animation: var(--animation-slide-in-left);\n        box-shadow: var(--shadow-3), var(--ring-shadow);\n\n        /* Dont let the error console burst out of the viewport */\n        max-height: calc(100vh - 2 * var(--space-1));\n      }\n\n      @keyframes slide-in-left {\n        from {\n          transform: translateX(100%);\n        }\n      }\n      @keyframes slide-out-left {\n        to {\n          transform: translateX(100%);\n        }\n      }\n\n      :host(.leaving) {\n        animation: var(--animation-slide-out-left);\n      }\n\n      .header {\n        display: flex;\n        justify-content: flex-end;\n        align-items: flex-start;\n        gap: var(--space-2);\n      }\n\n      .title {\n        font-size: var(--font-xl);\n        margin-right: auto;\n        padding: var(--space-3);\n        line-height: 1;\n        font-weight: 600;\n        color: var(--red-12);\n      }\n\n      ", "\n\n      button:hover {\n        background-color: var(--gray-2);\n      }\n\n      .toggle-button {\n        width: fit-content;\n        border: none;\n        aspect-ratio: 1;\n        border-color: var(--gray-4);\n      }\n\n      .close-button {\n        display: flex;\n        align-items: center;\n        color: var(--red-11);\n      }\n\n      .close-button > svg {\n        margin-right: 3px;\n      }\n\n      .toggle-button:focus {\n        outline: 1px solid black;\n      }\n\n      .toggle-icon {\n        transition: transform var(--animation-speed) ease-in-out;\n      }\n\n      :host(.collapsed) .toggle-icon {\n        transform: scaleX(-1) scaleY(-1);\n      }\n\n      :host(.collapsed) .close-button {\n        display: none;\n      }\n\n      .content {\n        display: block;\n        padding-inline: var(--space-4);\n        padding-block-start: 0;\n        padding-block-end: var(--space-4);\n        max-height: 100%;\n        overflow: auto;\n      }\n\n      :host(.collapsed) .content {\n        display: none;\n      }\n    "])), gq)]);
    customElements.define("shiny-error-console", bq);
    var Yv = function(e) {
        dq(t, e);
        var r = mq(t);
        function t() {
            var n;
            vq(this, t);
            for (var i = arguments.length, a = new Array(i), f = 0; f < i; f++)
                a[f] = arguments[f];
            return n = r.call.apply(r, [this].concat(a)),
            zo(Wv(n), "headline", ""),
            zo(Wv(n), "message", ""),
            n
        }
        return hq(t, [{
            key: "copyErrorToClipboard",
            value: function() {
                var n = x6(Hv().mark(function a() {
                    var f = this;
                    return Hv().wrap(function(l) {
                        for (; ; )
                            switch (l.prev = l.next) {
                            case 0:
                                return l.next = 2,
                                navigator.clipboard.writeText(this.message);
                            case 2:
                                this.classList.add("copy-success"),
                                setTimeout(function() {
                                    f.classList.remove("copy-success")
                                }, 1e3);
                            case 4:
                            case "end":
                                return l.stop()
                            }
                    }, a, this)
                }));
                function i() {
                    return n.apply(this, arguments)
                }
                return i
            }()
        }, {
            key: "render",
            value: function() {
                return Mv(sq || (sq = Ho(['\n      <div class="container">\n        <div class="decoration-container">\n          <div class="vertical-line"></div>\n          <div class="dot"></div>\n        </div>\n        <div class="contents">\n          <h3>', '</h3>\n          <pre class="error-message">', '</pre>\n        </div>\n\n        <div class="actions">\n          <button\n            class="copy-button"\n            @click=', '\n            title="Copy error to clipboard"\n          >\n            <div class="copy-button-inner">\n              <svg\n                class="front"\n                xmlns="http://www.w3.org/2000/svg"\n                fill="none"\n                viewBox="0 0 24 24"\n                stroke-width="1.5"\n                stroke="currentColor"\n                height="1em"\n                width="1em"\n              >\n                <path\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"\n                />\n              </svg>\n\n              <svg\n                class="back"\n                xmlns="http://www.w3.org/2000/svg"\n                fill="none"\n                viewBox="0 0 24 24"\n                stroke-width="1.5"\n                stroke="currentColor"\n                height="1em"\n                width="1em"\n              >\n                <path\n                  stroke-linecap="round"\n                  stroke-linejoin="round"\n                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"\n                />\n              </svg>\n            </div>\n          </button>\n        </div>\n      </div>\n    '])), this.headline, this.message, this.copyErrorToClipboard)
            }
        }]),
        t
    }(Dt);
    zo(Yv, "properties", {
        headline: {},
        message: {}
    });
    zo(Yv, "styles", [Co(cq || (cq = Ho(['\n      :host {\n        color: var(--red-11);\n        display: block;\n        font-size: var(--font-md);\n\n        position: relative;\n        --icon-size: var(--font-lg)\n\n        /* Reset box sizing */\n        box-sizing: border-box;\n      }\n\n      .container {\n        display: flex;\n        gap: var(--space-2);\n      }\n\n      .contents {\n        width: 40ch;\n        display: flex;\n        flex-direction: column;\n        gap: var(--space-1);\n        padding-block-start: 0;\n        padding-block-end: var(--space-3);\n        overflow: auto;\n      }\n\n      :host(:last-of-type) .contents {\n\n        padding-block-end: var(--space-1);\n      }\n\n      .contents > h3 {\n        font-size: 1em;\n        font-weight: 500;\n        color: var(--red-12);\n      }\n\n      .contents > * {\n        margin-block: 0;\n      }\n\n      .error-message {\n        font-family: "Courier New", Courier, monospace;\n      }\n\n      .decoration-container {\n        flex-shrink: 0;\n        position: relative;\n\n        --line-w: 2px;\n        --dot-size: 11px;\n      }\n\n      :host(:hover) .decoration-container {\n        --scale: 1.25;\n      }\n\n      .vertical-line {\n        margin-inline: auto;\n        width: var(--line-w);\n        height: 100%;\n\n        background-color: var(--red-10);\n      }\n\n      :host(:first-of-type) .vertical-line {\n        height: calc(100% - var(--dot-size));\n        margin-top: var(--dot-size);\n      }\n\n      .dot {\n        position: absolute;\n        width: var(--dot-size);\n        height: var(--dot-size);\n        top: calc(-1px +  var(--dot-size) / 2);\n        left: calc(50% - var(--dot-size) / 2);\n        border-radius: 100%;\n        transform: scale(var(--scale, 1));\n\n        color: var(--red-6);\n        background-color: var(--red-10);\n      }\n\n      .actions {\n        transform: scaleX(0);\n        transition: transform calc(var(--animation-speed) / 2) ease-in-out;\n        display: flex;\n        justify-content: center;\n        flex-direction: column;\n      }\n\n      /* Delay transition on mouseout so the buttons don\'t jump away if the user\n      overshoots them with their mouse */\n      :host(:not(:hover)) .actions {\n        transition-delay: 0.15s;\n      }\n\n      :host(:hover) .actions {\n        transform: scaleX(1);\n      }\n\n      ', "\n\n      .copy-button {\n        padding: 0;\n        width: var(--space-8);\n        height: var(--space-8);\n        position: relative;\n        --pad: var(--space-2);\n      }\n\n      .copy-button-inner {\n        position: relative;\n        width: 100%;\n        height: 100%;\n        border-radius: inherit;\n        transition: transform 0.5s;\n        transform-style: preserve-3d;\n      }\n\n      /* Animate flipping to the other side when the .copy-success class is\n      added to the host */\n      :host(.copy-success) .copy-button-inner {\n        transform: rotateY(180deg);\n      }\n\n      /* Position the front and back side */\n      .copy-button .front,\n      .copy-button .back {\n        --side: calc(100% - 2 * var(--pad));\n        position: absolute;\n        inset: var(--pad);\n        height: var(--side);\n        width: var(--side);\n        -webkit-backface-visibility: hidden; /* Safari */\n        backface-visibility: hidden;\n      }\n\n      .copy-button:hover .copy-button-inner {\n        background-color: var(--gray-2);\n      }\n\n      /* Style the back side */\n      .copy-button .back {\n        --pad: var(--space-1);\n        color: var(--green-8);\n        transform: rotateY(180deg);\n      }\n    "])), gq)]);
    customElements.define("shiny-error-message", Yv);
    function vs(e) {
        if (!!Shiny.inDevMode()) {
            var r = null
              , t = "Error on client while running Shiny app";
            typeof e == "string" ? r = e : e instanceof Bu ? (r = e.message,
            t = e.headline) : e instanceof Error ? r = e.message : r = "Unknown error";
            var n = document.querySelector("shiny-error-console");
            n || (n = document.createElement("shiny-error-console"),
            document.body.appendChild(n));
            var i = document.createElement("shiny-error-message");
            i.setAttribute("headline", t || ""),
            i.setAttribute("message", r),
            n.appendChild(i)
        }
    }
    function ai(e) {
        return ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        ai(e)
    }
    function wq(e, r) {
        var t = typeof Symbol != "undefined" && e[Symbol.iterator] || e["@@iterator"];
        if (!t) {
            if (Array.isArray(e) || (t = N6(e)) || r && e && typeof e.length == "number") {
                t && (e = t);
                var n = 0
                  , i = function() {};
                return {
                    s: i,
                    n: function() {
                        return n >= e.length ? {
                            done: !0
                        } : {
                            done: !1,
                            value: e[n++]
                        }
                    },
                    e: function(h) {
                        throw h
                    },
                    f: i
                }
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var a = !0, f = !1, c;
        return {
            s: function() {
                t = t.call(e)
            },
            n: function() {
                var h = t.next();
                return a = h.done,
                h
            },
            e: function(h) {
                f = !0,
                c = h
            },
            f: function() {
                try {
                    !a && t.return != null && t.return()
                } finally {
                    if (f)
                        throw c
                }
            }
        }
    }
    function N6(e, r) {
        if (!!e) {
            if (typeof e == "string")
                return Sq(e, r);
            var t = Object.prototype.toString.call(e).slice(8, -1);
            if (t === "Object" && e.constructor && (t = e.constructor.name),
            t === "Map" || t === "Set")
                return Array.from(e);
            if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                return Sq(e, r)
        }
    }
    function Sq(e, r) {
        (r == null || r > e.length) && (r = e.length);
        for (var t = 0, n = new Array(r); t < r; t++)
            n[t] = e[t];
        return n
    }
    function Q() {
        "use strict";
        Q = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && ai(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function Oq(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function qe(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    Oq(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    Oq(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function j6(e, r) {
        if (!(e instanceof r))
            throw new TypeError("Cannot call a class as a function")
    }
    function _q(e, r) {
        for (var t = 0; t < r.length; t++) {
            var n = r[t];
            n.enumerable = n.enumerable || !1,
            n.configurable = !0,
            "value"in n && (n.writable = !0),
            Object.defineProperty(e, Pq(n.key), n)
        }
    }
    function L6(e, r, t) {
        return r && _q(e.prototype, r),
        t && _q(e, t),
        Object.defineProperty(e, "prototype", {
            writable: !1
        }),
        e
    }
    function me(e, r, t) {
        return r = Pq(r),
        r in e ? Object.defineProperty(e, r, {
            value: t,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[r] = t,
        e
    }
    function Pq(e) {
        var r = C6(e, "string");
        return ai(r) === "symbol" ? r : String(r)
    }
    function C6(e, r) {
        if (ai(e) !== "object" || e === null)
            return e;
        var t = e[Symbol.toPrimitive];
        if (t !== void 0) {
            var n = t.call(e, r || "default");
            if (ai(n) !== "object")
                return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return (r === "string" ? String : Number)(e)
    }
    var Eq = []
      , Xv = {}
      , hs = []
      , ds = {};
    function se(e, r) {
        if (Xv[e])
            throw 'handler for message of type "' + e + '" already added.';
        if (typeof r != "function")
            throw "handler must be a function.";
        if (r.length !== 1)
            throw "handler must be a function that takes one argument.";
        Eq.push(e),
        Xv[e] = r
    }
    function Iq(e, r) {
        if (ds[e]) {
            var t = hs.indexOf(e);
            t !== -1 && (hs.splice(t, 1),
            delete ds[e])
        }
        if (typeof r != "function")
            throw "handler must be a function.";
        if (r.length !== 1)
            throw "handler must be a function that takes one argument.";
        hs.push(e),
        ds[e] = r
    }
    var qq = function() {
        function e() {
            j6(this, e),
            me(this, "$socket", null),
            me(this, "taskQueue", new zE),
            me(this, "config", null),
            me(this, "$inputValues", {}),
            me(this, "$initialInput", null),
            me(this, "$bindings", {}),
            me(this, "$persistentProgress", new Set),
            me(this, "$values", {}),
            me(this, "$errors", {}),
            me(this, "$conditionals", {}),
            me(this, "$pendingMessages", []),
            me(this, "$activeRequests", {}),
            me(this, "$nextRequestId", 0),
            me(this, "$allowReconnect", !1),
            me(this, "scheduledReconnect", void 0),
            me(this, "reconnectDelay", function() {
                var r = 0
                  , t = [1500, 1500, 2500, 2500, 5500, 5500, 10500];
                return {
                    next: function() {
                        var i = r;
                        return i >= t.length && (i = t.length - 1),
                        r++,
                        t[i]
                    },
                    reset: function() {
                        r = 0
                    }
                }
            }()),
            me(this, "progressHandlers", {
                binding: function(t) {
                    var n = t.id
                      , i = this.$bindings[n];
                    i && ((0,
                    G.default)(i.el).trigger({
                        type: "shiny:outputinvalidated",
                        binding: i,
                        name: n
                    }),
                    i.showProgress && i.showProgress(!0),
                    t.persistent ? this.$persistentProgress.add(n) : this.$persistentProgress.delete(n))
                },
                open: function() {
                    var r = qe(Q().mark(function n(i) {
                        var a, f, c, l, h;
                        return Q().wrap(function(y) {
                            for (; ; )
                                switch (y.prev = y.next) {
                                case 0:
                                    if (i.style !== "notification") {
                                        y.next = 5;
                                        break
                                    }
                                    return y.next = 3,
                                    Er({
                                        html: '<div id="shiny-progress-'.concat(i.id, '" class="shiny-progress-notification">') + '<div class="progress active" style="display: none;"><div class="progress-bar"></div></div><div class="progress-text"><span class="progress-message">message</span> <span class="progress-detail"></span></div></div>',
                                        id: i.id,
                                        duration: null
                                    });
                                case 3:
                                    y.next = 6;
                                    break;
                                case 5:
                                    i.style === "old" && (a = (0,
                                    G.default)(".shiny-progress-container"),
                                    a.length === 0 && (a = (0,
                                    G.default)('<div class="shiny-progress-container"></div>'),
                                    (0,
                                    G.default)(document.body).append(a)),
                                    f = (0,
                                    G.default)(".shiny-progress.open").length,
                                    c = (0,
                                    G.default)('<div class="shiny-progress open"><div class="progress active"><div class="progress-bar bar"></div></div><div class="progress-text"><span class="progress-message">message</span><span class="progress-detail"></span></div></div>'),
                                    c.attr("id", i.id),
                                    a.append(c),
                                    l = c.find(".progress"),
                                    l && (l.css("top", f * l.height() + "px"),
                                    h = c.find(".progress-text"),
                                    h.css("top", 3 * l.height() + f * h.outerHeight() + "px"),
                                    c.hide()));
                                case 6:
                                case "end":
                                    return y.stop()
                                }
                        }, n)
                    }));
                    function t(n) {
                        return r.apply(this, arguments)
                    }
                    return t
                }(),
                update: function(t) {
                    if (t.style === "notification") {
                        var n = (0,
                        G.default)("#shiny-progress-" + t.id);
                        if (n.length === 0)
                            return;
                        typeof t.message != "undefined" && n.find(".progress-message").text(t.message),
                        typeof t.detail != "undefined" && n.find(".progress-detail").text(t.detail),
                        typeof t.value != "undefined" && t.value !== null && (n.find(".progress").show(),
                        n.find(".progress-bar").width(t.value * 100 + "%"))
                    } else if (t.style === "old") {
                        var i = (0,
                        G.default)("#" + t.id + ".shiny-progress");
                        typeof t.message != "undefined" && i.find(".progress-message").text(t.message),
                        typeof t.detail != "undefined" && i.find(".progress-detail").text(t.detail),
                        typeof t.value != "undefined" && t.value !== null && (i.find(".progress").show(),
                        i.find(".bar").width(t.value * 100 + "%")),
                        i.fadeIn()
                    }
                },
                close: function(t) {
                    if (t.style === "notification")
                        Ir(t.id);
                    else if (t.style === "old") {
                        var n = (0,
                        G.default)("#" + t.id + ".shiny-progress");
                        n.removeClass("open"),
                        n.fadeOut({
                            complete: function() {
                                n.remove(),
                                (0,
                                G.default)(".shiny-progress").length === 0 && (0,
                                G.default)(".shiny-progress-container").remove()
                            }
                        })
                    }
                }
            }),
            this._init()
        }
        return L6(e, [{
            key: "connect",
            value: function(t) {
                if (this.$socket)
                    throw "Connect was already called on this application object";
                this.$socket = this.createSocket(),
                this.$initialInput = t,
                G.default.extend(this.$inputValues, t),
                this.$updateConditionals()
            }
        }, {
            key: "isConnected",
            value: function() {
                return !!this.$socket
            }
        }, {
            key: "reconnect",
            value: function() {
                if (clearTimeout(this.scheduledReconnect),
                this.isConnected())
                    throw "Attempted to reconnect, but already connected.";
                this.$socket = this.createSocket(),
                this.$initialInput = G.default.extend({}, this.$inputValues),
                this.$updateConditionals()
            }
        }, {
            key: "createSocket",
            value: function() {
                var t = this
                  , n = UO() || function() {
                    var f = "ws:";
                    window.location.protocol === "https:" && (f = "wss:");
                    var c = window.location.pathname;
                    /^([$#!&-;=?-[\]_a-z~]|%[0-9a-fA-F]{2})+$/.test(c) || (c = encodeURI(c),
                    Gm() && (c = encodeURI(c))),
                    /\/$/.test(c) || (c += "/"),
                    c += "websocket/";
                    var l = new WebSocket(f + "//" + window.location.host + c);
                    return l.binaryType = "arraybuffer",
                    l
                }
                  , i = n()
                  , a = !1;
                return i.onopen = function() {
                    for (a = !0,
                    (0,
                    G.default)(document).trigger({
                        type: "shiny:connected",
                        socket: i
                    }),
                    t.onConnected(),
                    i.send(JSON.stringify({
                        method: "init",
                        data: t.$initialInput
                    })); t.$pendingMessages.length; ) {
                        var f = t.$pendingMessages.shift();
                        i.send(f)
                    }
                    t.startActionQueueLoop()
                }
                ,
                i.onmessage = function(f) {
                    t.taskQueue.enqueue(qe(Q().mark(function c() {
                        return Q().wrap(function(h) {
                            for (; ; )
                                switch (h.prev = h.next) {
                                case 0:
                                    return h.next = 2,
                                    t.dispatchMessage(f.data);
                                case 2:
                                    return h.abrupt("return", h.sent);
                                case 3:
                                case "end":
                                    return h.stop()
                                }
                        }, c)
                    })))
                }
                ,
                i.onclose = function(f) {
                    var c = f.code === 1012;
                    a && ((0,
                    G.default)(document).trigger({
                        type: "shiny:disconnected",
                        socket: i
                    }),
                    t.$notifyDisconnected()),
                    t.onDisconnected(c),
                    t.$removeSocket()
                }
                ,
                i
            }
        }, {
            key: "startActionQueueLoop",
            value: function() {
                var r = qe(Q().mark(function n() {
                    var i;
                    return Q().wrap(function(f) {
                        for (; ; )
                            switch (f.prev = f.next) {
                            case 0:
                                return f.prev = 1,
                                f.next = 4,
                                this.taskQueue.dequeue();
                            case 4:
                                return i = f.sent,
                                f.next = 7,
                                i();
                            case 7:
                                f.next = 13;
                                break;
                            case 9:
                                f.prev = 9,
                                f.t0 = f.catch(1),
                                vs(f.t0),
                                console.error(f.t0);
                            case 13:
                                f.next = 0;
                                break;
                            case 15:
                            case "end":
                                return f.stop()
                            }
                    }, n, this, [[1, 9]])
                }));
                function t() {
                    return r.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: "sendInput",
            value: function(t) {
                var n = JSON.stringify({
                    method: "update",
                    data: t
                });
                this.$sendMsg(n),
                G.default.extend(this.$inputValues, t),
                this.$updateConditionals()
            }
        }, {
            key: "$notifyDisconnected",
            value: function() {
                window.parent && window.parent.postMessage("disconnected", "*")
            }
        }, {
            key: "$removeSocket",
            value: function() {
                this.$socket = null
            }
        }, {
            key: "$scheduleReconnect",
            value: function(t) {
                var n = this;
                this.scheduledReconnect = window.setTimeout(function() {
                    n.reconnect()
                }, t)
            }
        }, {
            key: "onDisconnected",
            value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
                if ((0,
                G.default)("#shiny-disconnected-overlay").length === 0 && (0,
                G.default)(document.body).append('<div id="shiny-disconnected-overlay"></div>'),
                (0,
                G.default)("#shiny-disconnected-overlay").toggleClass("reloading", t),
                this.$allowReconnect === !0 && this.$socket.allowReconnect === !0 || this.$allowReconnect === "force") {
                    var n = this.reconnectDelay.next();
                    Au(n),
                    this.$scheduleReconnect(n)
                }
            }
        }, {
            key: "onConnected",
            value: function() {
                (0,
                G.default)("#shiny-disconnected-overlay").remove(),
                $u(),
                this.reconnectDelay.reset()
            }
        }, {
            key: "makeRequest",
            value: function(t, n, i, a, f) {
                for (var c = this.$nextRequestId; this.$activeRequests[c]; )
                    c = (c + 1) % 1e9;
                this.$nextRequestId = c + 1,
                this.$activeRequests[c] = {
                    onSuccess: i,
                    onError: a
                };
                var l = JSON.stringify({
                    method: t,
                    args: n,
                    tag: c
                });
                if (f) {
                    var h = function(k) {
                        var E = new ArrayBuffer(4)
                          , P = new DataView(E);
                        return P.setUint32(0, k, !0),
                        E
                    }
                      , m = [];
                    m.push(h(16908802));
                    var y = new Blob([l]);
                    m.push(h(y.size)),
                    m.push(y);
                    for (var b = 0; b < f.length; b++) {
                        var w = f[b];
                        m.push(h(w.byteLength || w.size || 0)),
                        m.push(w)
                    }
                    var S = new Blob(m);
                    l = S
                }
                this.$sendMsg(l)
            }
        }, {
            key: "$sendMsg",
            value: function(t) {
                this.$socket.readyState ? this.$socket.send(t) : this.$pendingMessages.push(t)
            }
        }, {
            key: "receiveError",
            value: function(t, n) {
                if (this.$errors[t] !== n) {
                    this.$errors[t] = n,
                    delete this.$values[t];
                    var i = this.$bindings[t]
                      , a = G.default.Event("shiny:error");
                    a.name = t,
                    a.error = n,
                    a.binding = i,
                    (0,
                    G.default)(i ? i.el : document).trigger(a),
                    !a.isDefaultPrevented() && i && i.onValueError && i.onValueError(a.error)
                }
            }
        }, {
            key: "receiveOutput",
            value: function() {
                var r = qe(Q().mark(function n(i, a) {
                    var f, c;
                    return Q().wrap(function(h) {
                        for (; ; )
                            switch (h.prev = h.next) {
                            case 0:
                                if (f = this.$bindings[i],
                                c = G.default.Event("shiny:value"),
                                c.name = i,
                                c.value = a,
                                c.binding = f,
                                this.$values[i] !== a) {
                                    h.next = 8;
                                    break
                                }
                                return (0,
                                G.default)(f ? f.el : document).trigger(c),
                                h.abrupt("return", void 0);
                            case 8:
                                if (this.$values[i] = a,
                                delete this.$errors[i],
                                (0,
                                G.default)(f ? f.el : document).trigger(c),
                                !(!c.isDefaultPrevented() && f)) {
                                    h.next = 14;
                                    break
                                }
                                return h.next = 14,
                                f.onValueChange(c.value);
                            case 14:
                                return h.abrupt("return", a);
                            case 15:
                            case "end":
                                return h.stop()
                            }
                    }, n, this)
                }));
                function t(n, i) {
                    return r.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: "bindOutput",
            value: function() {
                var r = qe(Q().mark(function n(i, a) {
                    return Q().wrap(function(c) {
                        for (; ; )
                            switch (c.prev = c.next) {
                            case 0:
                                if (i) {
                                    c.next = 2;
                                    break
                                }
                                throw new Error("Can't bind an element with no ID");
                            case 2:
                                if (this.$bindings[i] = a,
                                this.$values[i] === void 0) {
                                    c.next = 8;
                                    break
                                }
                                return c.next = 6,
                                a.onValueChange(this.$values[i]);
                            case 6:
                                c.next = 9;
                                break;
                            case 8:
                                this.$errors[i] !== void 0 && a.onValueError(this.$errors[i]);
                            case 9:
                                return c.abrupt("return", a);
                            case 10:
                            case "end":
                                return c.stop()
                            }
                    }, n, this)
                }));
                function t(n, i) {
                    return r.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: "unbindOutput",
            value: function(t, n) {
                return this.$bindings[t] === n ? (delete this.$bindings[t],
                !0) : !1
            }
        }, {
            key: "_narrowScopeComponent",
            value: function(t, n) {
                return Object.keys(t).filter(function(i) {
                    return i.indexOf(n) === 0
                }).map(function(i) {
                    return me({}, i.substring(n.length), t[i])
                }).reduce(function(i, a) {
                    return G.default.extend(i, a)
                }, {})
            }
        }, {
            key: "_narrowScope",
            value: function(t, n) {
                return n ? {
                    input: this._narrowScopeComponent(t.input, n),
                    output: this._narrowScopeComponent(t.output, n)
                } : t
            }
        }, {
            key: "$updateConditionals",
            value: function() {
                (0,
                G.default)(document).trigger({
                    type: "shiny:conditional"
                });
                var t = {};
                for (var n in this.$inputValues)
                    if (He(this.$inputValues, n)) {
                        var i = n.replace(/:.*/, "");
                        t[i] = this.$inputValues[n]
                    }
                for (var a = {
                    input: t,
                    output: this.$values
                }, f = (0,
                G.default)(document).find("[data-display-if]"), c = 0; c < f.length; c++) {
                    var l = (0,
                    G.default)(f[c])
                      , h = l.data("data-display-if-func");
                    if (!h) {
                        var m = l.attr("data-display-if");
                        h = o0(m),
                        l.data("data-display-if-func", h)
                    }
                    var y = l.attr("data-ns-prefix")
                      , b = this._narrowScope(a, y)
                      , w = h(b)
                      , S = l.css("display") !== "none";
                    w !== S && (w ? (l.trigger("show"),
                    l.show(),
                    l.trigger("shown")) : (l.trigger("hide"),
                    l.hide(),
                    l.trigger("hidden")))
                }
            }
        }, {
            key: "dispatchMessage",
            value: function() {
                var r = qe(Q().mark(function n(i) {
                    var a, f, c, l, h, m, y;
                    return Q().wrap(function(w) {
                        for (; ; )
                            switch (w.prev = w.next) {
                            case 0:
                                if (a = {},
                                typeof i == "string")
                                    a = JSON.parse(i);
                                else {
                                    for (f = new DataView(i,0,1).getUint8(0),
                                    c = new DataView(i,1,f),
                                    l = [],
                                    h = 0; h < f; h++)
                                        l.push(String.fromCharCode(c.getUint8(h)));
                                    m = l.join(""),
                                    i = i.slice(f + 1),
                                    a.custom = {},
                                    a.custom[m] = i
                                }
                                if (y = G.default.Event("shiny:message"),
                                y.message = a,
                                (0,
                                G.default)(document).trigger(y),
                                !y.isDefaultPrevented()) {
                                    w.next = 7;
                                    break
                                }
                                return w.abrupt("return");
                            case 7:
                                return w.next = 9,
                                this._sendMessagesToHandlers(y.message, Xv, Eq);
                            case 9:
                                this.$updateConditionals();
                            case 10:
                            case "end":
                                return w.stop()
                            }
                    }, n, this)
                }));
                function t(n) {
                    return r.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: "_sendMessagesToHandlers",
            value: function() {
                var r = qe(Q().mark(function n(i, a, f) {
                    var c, l;
                    return Q().wrap(function(m) {
                        for (; ; )
                            switch (m.prev = m.next) {
                            case 0:
                                c = 0;
                            case 1:
                                if (!(c < f.length)) {
                                    m.next = 9;
                                    break
                                }
                                if (l = f[c],
                                !He(i, l)) {
                                    m.next = 6;
                                    break
                                }
                                return m.next = 6,
                                a[l].call(this, i[l]);
                            case 6:
                                c++,
                                m.next = 1;
                                break;
                            case 9:
                            case "end":
                                return m.stop()
                            }
                    }, n, this)
                }));
                function t(n, i, a) {
                    return r.apply(this, arguments)
                }
                return t
            }()
        }, {
            key: "_clearProgress",
            value: function() {
                for (var t in this.$bindings)
                    He(this.$bindings, t) && !this.$persistentProgress.has(t) && this.$bindings[t].showProgress(!1)
            }
        }, {
            key: "_init",
            value: function() {
                var t = this;
                se("values", function() {
                    var h = qe(Q().mark(function m(y) {
                        var b;
                        return Q().wrap(function(S) {
                            for (; ; )
                                switch (S.prev = S.next) {
                                case 0:
                                    t._clearProgress(),
                                    S.t0 = Q().keys(y);
                                case 2:
                                    if ((S.t1 = S.t0()).done) {
                                        S.next = 10;
                                        break
                                    }
                                    if (b = S.t1.value,
                                    !He(y, b)) {
                                        S.next = 8;
                                        break
                                    }
                                    return t.$persistentProgress.delete(b),
                                    S.next = 8,
                                    t.receiveOutput(b, y[b]);
                                case 8:
                                    S.next = 2;
                                    break;
                                case 10:
                                case "end":
                                    return S.stop()
                                }
                        }, m)
                    }));
                    return function(m) {
                        return h.apply(this, arguments)
                    }
                }()),
                se("errors", function(h) {
                    for (var m in h)
                        He(h, m) && (t.$persistentProgress.delete(m),
                        t.receiveError(m, h[m]))
                }),
                se("inputMessages", function() {
                    var h = qe(Q().mark(function m(y) {
                        var b, w, S, T, k;
                        return Q().wrap(function(P) {
                            for (; ; )
                                switch (P.prev = P.next) {
                                case 0:
                                    b = 0;
                                case 1:
                                    if (!(b < y.length)) {
                                        P.next = 23;
                                        break
                                    }
                                    if (w = (0,
                                    G.default)(".shiny-bound-input#" + H(y[b].id)),
                                    S = w.data("shiny-input-binding"),
                                    !(w.length > 0)) {
                                        P.next = 20;
                                        break
                                    }
                                    if (w.attr("aria-live") || w.attr("aria-live", "polite"),
                                    T = w[0],
                                    k = G.default.Event("shiny:updateinput"),
                                    k.message = y[b].message,
                                    k.binding = S,
                                    (0,
                                    G.default)(T).trigger(k),
                                    k.isDefaultPrevented()) {
                                        P.next = 20;
                                        break
                                    }
                                    return P.prev = 12,
                                    P.next = 15,
                                    S.receiveMessage(T, k.message);
                                case 15:
                                    P.next = 20;
                                    break;
                                case 17:
                                    P.prev = 17,
                                    P.t0 = P.catch(12),
                                    console.error("[shiny] Error in inputBinding.receiveMessage()", {
                                        error: P.t0,
                                        binding: S,
                                        message: k.message
                                    });
                                case 20:
                                    b++,
                                    P.next = 1;
                                    break;
                                case 23:
                                case "end":
                                    return P.stop()
                                }
                        }, m, null, [[12, 17]])
                    }));
                    return function(m) {
                        return h.apply(this, arguments)
                    }
                }()),
                se("javascript", function(h) {
                    wt(h)
                }),
                se("console", function(h) {
                    for (var m = 0; m < h.length; m++)
                        console.log && console.log(h[m])
                }),
                se("progress", function() {
                    var h = qe(Q().mark(function m(y) {
                        var b;
                        return Q().wrap(function(S) {
                            for (; ; )
                                switch (S.prev = S.next) {
                                case 0:
                                    if (!(y.type && y.message)) {
                                        S.next = 5;
                                        break
                                    }
                                    return S.next = 3,
                                    t.progressHandlers[y.type];
                                case 3:
                                    b = S.sent,
                                    b && b.call(t, y.message);
                                case 5:
                                case "end":
                                    return S.stop()
                                }
                        }, m)
                    }));
                    return function(m) {
                        return h.apply(this, arguments)
                    }
                }()),
                se("notification", function() {
                    var h = qe(Q().mark(function m(y) {
                        return Q().wrap(function(w) {
                            for (; ; )
                                switch (w.prev = w.next) {
                                case 0:
                                    if (y.type !== "show") {
                                        w.next = 5;
                                        break
                                    }
                                    return w.next = 3,
                                    Er(y.message);
                                case 3:
                                    w.next = 10;
                                    break;
                                case 5:
                                    if (y.type !== "remove") {
                                        w.next = 9;
                                        break
                                    }
                                    Ir(y.message),
                                    w.next = 10;
                                    break;
                                case 9:
                                    throw "Unkown notification type: " + y.type;
                                case 10:
                                case "end":
                                    return w.stop()
                                }
                        }, m)
                    }));
                    return function(m) {
                        return h.apply(this, arguments)
                    }
                }()),
                se("modal", function() {
                    var h = qe(Q().mark(function m(y) {
                        return Q().wrap(function(w) {
                            for (; ; )
                                switch (w.prev = w.next) {
                                case 0:
                                    if (y.type !== "show") {
                                        w.next = 5;
                                        break
                                    }
                                    return w.next = 3,
                                    xu(y.message);
                                case 3:
                                    w.next = 10;
                                    break;
                                case 5:
                                    if (y.type !== "remove") {
                                        w.next = 9;
                                        break
                                    }
                                    Ru(),
                                    w.next = 10;
                                    break;
                                case 9:
                                    throw "Unkown modal type: " + y.type;
                                case 10:
                                case "end":
                                    return w.stop()
                                }
                        }, m)
                    }));
                    return function(m) {
                        return h.apply(this, arguments)
                    }
                }()),
                se("response", function(h) {
                    var m = h.tag
                      , y = t.$activeRequests[m];
                    y && (delete t.$activeRequests[m],
                    "value"in h ? y.onSuccess(h.value) : y.onError(h.error))
                }),
                se("allowReconnect", function(h) {
                    switch (h) {
                    case !0:
                    case !1:
                    case "force":
                        t.$allowReconnect = h;
                        break;
                    default:
                        throw "Invalid value for allowReconnect: " + h
                    }
                }),
                se("custom", function() {
                    var h = qe(Q().mark(function m(y) {
                        var b;
                        return Q().wrap(function(S) {
                            for (; ; )
                                switch (S.prev = S.next) {
                                case 0:
                                    if (b = DO(),
                                    !b) {
                                        S.next = 4;
                                        break
                                    }
                                    return S.next = 4,
                                    b(y);
                                case 4:
                                    return S.next = 6,
                                    t._sendMessagesToHandlers(y, ds, hs);
                                case 6:
                                case "end":
                                    return S.stop()
                                }
                        }, m)
                    }));
                    return function(m) {
                        return h.apply(this, arguments)
                    }
                }()),
                se("config", function(h) {
                    t.config = {
                        workerId: h.workerId,
                        sessionId: h.sessionId
                    },
                    h.user && NO(h.user),
                    (0,
                    G.default)(document).trigger("shiny:sessioninitialized")
                }),
                se("busy", function(h) {
                    h === "busy" ? ((0,
                    G.default)(document.documentElement).addClass("shiny-busy"),
                    (0,
                    G.default)(document).trigger("shiny:busy")) : h === "idle" && ((0,
                    G.default)(document.documentElement).removeClass("shiny-busy"),
                    (0,
                    G.default)(document).trigger("shiny:idle"))
                }),
                se("recalculating", function(h) {
                    if (He(h, "name") && He(h, "status")) {
                        var m = t.$bindings[h.name];
                        m ? (0,
                        G.default)(m.el).trigger("shiny:" + h.status) : (0,
                        G.default)().trigger("shiny:" + h.status)
                    }
                }),
                se("reload", function(h) {
                    window.location.reload()
                }),
                se("shiny-insert-ui", function() {
                    var h = qe(Q().mark(function m(y) {
                        var b, w, S, T;
                        return Q().wrap(function(E) {
                            for (; ; )
                                switch (E.prev = E.next) {
                                case 0:
                                    if (b = (0,
                                    G.default)(y.selector),
                                    b.length !== 0) {
                                        E.next = 7;
                                        break
                                    }
                                    return console.warn('The selector you chose ("' + y.selector + '") could not be found in the DOM.'),
                                    E.next = 5,
                                    po(y.content.html, (0,
                                    G.default)([]), y.content.deps);
                                case 5:
                                    E.next = 26;
                                    break;
                                case 7:
                                    w = wq(b),
                                    E.prev = 8,
                                    w.s();
                                case 10:
                                    if ((S = w.n()).done) {
                                        E.next = 18;
                                        break
                                    }
                                    return T = S.value,
                                    E.next = 14,
                                    De(T, y.content, y.where);
                                case 14:
                                    if (y.multiple !== !1) {
                                        E.next = 16;
                                        break
                                    }
                                    return E.abrupt("break", 18);
                                case 16:
                                    E.next = 10;
                                    break;
                                case 18:
                                    E.next = 23;
                                    break;
                                case 20:
                                    E.prev = 20,
                                    E.t0 = E.catch(8),
                                    w.e(E.t0);
                                case 23:
                                    return E.prev = 23,
                                    w.f(),
                                    E.finish(23);
                                case 26:
                                case "end":
                                    return E.stop()
                                }
                        }, m, null, [[8, 20, 23, 26]])
                    }));
                    return function(m) {
                        return h.apply(this, arguments)
                    }
                }()),
                se("shiny-remove-ui", function(h) {
                    var m = (0,
                    G.default)(h.selector);
                    m.each(function(y, b) {
                        return Ie(b, !0),
                        (0,
                        G.default)(b).remove(),
                        h.multiple === !1 ? !1 : void 0
                    })
                }),
                se("frozen", function(h) {
                    for (var m = 0; m < h.ids.length; m++)
                        jO(h.ids[m])
                });
                function n(h) {
                    var m = (0,
                    G.default)("#" + H(h));
                    if (m.length === 0)
                        throw "There is no tabsetPanel (or navbarPage or navlistPanel) with id equal to '" + h + "'";
                    return m
                }
                function i(h) {
                    var m = h.attr("data-tabsetid")
                      , y = (0,
                    G.default)("div.tab-content[data-tabsetid='" + H(m) + "']");
                    return y
                }
                function a(h, m, y) {
                    var b = "[data-value='" + H(y) + "']"
                      , w = h.find("a" + b)
                      , S = w.parent();
                    if (S.length === 0)
                        throw "There is no tabPanel (or navbarMenu) with value (or menuName) equal to '" + y + "'";
                    var T = []
                      , k = [];
                    if (w.attr("data-toggle") === "dropdown") {
                        var E = w.find("+ ul.dropdown-menu")
                          , P = E.attr("data-tabsetid")
                          , $ = E.find("a[data-toggle='tab']").parent("li");
                        $.each(function(L, F) {
                            T.push((0,
                            G.default)(F))
                        });
                        var R = "div.tab-pane[id^='tab-" + H(P) + "']"
                          , j = m.find(R);
                        j.each(function(L, F) {
                            k.push((0,
                            G.default)(F))
                        })
                    } else
                        k.push(m.find("div" + b));
                    return {
                        $liTag: S,
                        $liTags: T,
                        $divTags: k
                    }
                }
                se("shiny-insert-tab", function() {
                    var h = qe(Q().mark(function m(y) {
                        var b, w, S, T, k, E, P, $, R, j, L, F, C, B, D, V, s;
                        return Q().wrap(function(u) {
                            for (; ; )
                                switch (u.prev = u.next) {
                                case 0:
                                    if (s = function() {
                                        if (y.menuName !== null) {
                                            var d = (0,
                                            G.default)("a.dropdown-toggle[data-value='" + H(y.menuName) + "']");
                                            if (d.length === 0)
                                                throw "There is no navbarMenu with menuName equal to '" + y.menuName + "'";
                                            var p = d.find("+ ul.dropdown-menu")
                                              , g = p.attr("data-tabsetid");
                                            return {
                                                $tabset: p,
                                                id: g
                                            }
                                        } else if (y.target !== null && $ !== null) {
                                            var _ = $.parent("ul");
                                            if (_.hasClass("dropdown-menu")) {
                                                var O = _.attr("data-tabsetid");
                                                return {
                                                    $tabset: _,
                                                    id: O
                                                }
                                            }
                                        }
                                        return null
                                    }
                                    ,
                                    V = function(d, p) {
                                        var g = [0];
                                        return d.find("> li").each(function() {
                                            var _ = (0,
                                            G.default)(this).find("> a[data-toggle='tab']");
                                            if (_.length > 0) {
                                                var O = _.attr("href").replace(/.*(?=#[^\s]+$)/, "")
                                                  , q = O.replace("#tab-" + p + "-", "");
                                                g.push(Number(q))
                                            }
                                        }),
                                        Math.max.apply(null, g) + 1
                                    }
                                    ,
                                    b = n(y.inputId),
                                    w = b,
                                    S = i(w),
                                    T = b.attr("data-tabsetid"),
                                    k = (0,
                                    G.default)(y.divTag.html),
                                    E = (0,
                                    G.default)(y.liTag.html),
                                    P = E.find("> a"),
                                    $ = null,
                                    y.target !== null && (R = a(w, S, y.target),
                                    $ = R.$liTag),
                                    j = s(),
                                    j === null) {
                                        u.next = 18;
                                        break
                                    }
                                    if (P.attr("data-toggle") !== "dropdown") {
                                        u.next = 15;
                                        break
                                    }
                                    throw "Cannot insert a navbarMenu inside another one";
                                case 15:
                                    w = j.$tabset,
                                    T = j.id,
                                    E.removeClass("nav-item").find(".nav-link").removeClass("nav-link").addClass("dropdown-item");
                                case 18:
                                    return P.attr("data-toggle") === "tab" && (L = V(w, T),
                                    F = "tab-" + T + "-" + L,
                                    E.find("> a").attr("href", "#" + F),
                                    k.attr("id", F)),
                                    y.position === "before" ? $ ? $.before(E) : w.prepend(E) : y.position === "after" && ($ ? $.after(E) : w.append(E)),
                                    u.next = 22,
                                    De(E[0], {
                                        html: E.html(),
                                        deps: y.liTag.deps
                                    });
                                case 22:
                                    return u.next = 24,
                                    De(S[0], {
                                        html: "",
                                        deps: y.divTag.deps
                                    }, "beforeend");
                                case 24:
                                    C = wq(k.get()),
                                    u.prev = 25,
                                    C.s();
                                case 27:
                                    if ((B = C.n()).done) {
                                        u.next = 34;
                                        break
                                    }
                                    return D = B.value,
                                    S[0].appendChild(D),
                                    u.next = 32,
                                    De(D, D.innerHTML || D.textContent);
                                case 32:
                                    u.next = 27;
                                    break;
                                case 34:
                                    u.next = 39;
                                    break;
                                case 36:
                                    u.prev = 36,
                                    u.t0 = u.catch(25),
                                    C.e(u.t0);
                                case 39:
                                    return u.prev = 39,
                                    C.f(),
                                    u.finish(39);
                                case 42:
                                    y.select && E.find("a").tab("show");
                                case 43:
                                case "end":
                                    return u.stop()
                                }
                        }, m, null, [[25, 36, 39, 42]])
                    }));
                    return function(m) {
                        return h.apply(this, arguments)
                    }
                }());
                function f(h) {
                    var m = h.data("shiny-input-binding");
                    if (!m.getValue(h)) {
                        var y = c(h)
                          , b = G.default.Event("shiny:updateinput");
                        b.binding = m,
                        h.trigger(b),
                        m.setValue(h[0], y)
                    }
                }
                function c(h) {
                    return h.find("li:visible a[data-toggle='tab']").first().attr("data-value") || null
                }
                function l(h, m) {
                    var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
                    G.default.each(h, function(b, w) {
                        b === "$liTag" ? m(w) : b === "$divTags" ? G.default.each(w, function(S, T) {
                            m(T)
                        }) : y && b === "$liTags" && G.default.each(w, function(S, T) {
                            m(T)
                        })
                    })
                }
                se("shiny-remove-tab", function(h) {
                    var m = n(h.inputId)
                      , y = i(m)
                      , b = a(m, y, h.target);
                    l(b, w),
                    f(m);
                    function w(S) {
                        Ie(S, !0),
                        S.remove()
                    }
                }),
                se("shiny-change-tab-visibility", function(h) {
                    var m = n(h.inputId)
                      , y = i(m)
                      , b = a(m, y, h.target);
                    l(b, w, !0),
                    f(m);
                    function w(S) {
                        h.type === "show" ? S.css("display", "") : h.type === "hide" && (S.hide(),
                        S.removeClass("active"))
                    }
                }),
                se("updateQueryString", function(h) {
                    if (h.mode === "replace") {
                        window.history.replaceState(null, null, h.queryString);
                        return
                    }
                    var m = null;
                    if (h.queryString.charAt(0) === "#")
                        m = "hash";
                    else if (h.queryString.charAt(0) === "?")
                        m = "query";
                    else
                        throw "The 'query' string must start with either '?' (to update the query string) or with '#' (to update the hash).";
                    var y = window.location.pathname
                      , b = window.location.search
                      , w = window.location.hash
                      , S = y;
                    m === "query" ? S += h.queryString : S += b + h.queryString,
                    window.history.pushState(null, null, S),
                    h.queryString.indexOf("#") !== -1 && (m = "hash"),
                    window.location.hash !== w && (m = "hash"),
                    m === "hash" && (0,
                    G.default)(document).trigger("hashchange")
                }),
                se("resetBrush", function(h) {
                    Tu(h.brushId)
                })
            }
        }, {
            key: "getTestSnapshotBaseUrl",
            value: function() {
                var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
                  , n = t.fullUrl
                  , i = n === void 0 ? !0 : n
                  , a = window.location
                  , f = "";
                return i && (f = a.origin + a.pathname.replace(/\/[^/]*$/, "")),
                f += "/session/" + encodeURIComponent(this.config.sessionId) + "/dataobj/shinytest?w=" + encodeURIComponent(this.config.workerId) + "&nonce=" + Za(),
                f
            }
        }]),
        e
    }();
    function Qv(e) {
        return Qv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Qv(e)
    }
    function Ko() {
        "use strict";
        Ko = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && Qv(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function Tq(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function kq(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    Tq(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    Tq(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    function Rq(e) {
        return Jv.apply(this, arguments)
    }
    function Jv() {
        return Jv = kq(Ko().mark(function e(r) {
            var t, n, i, a, f, c, l, h, m, y, b, w, S, T, k, E, P, $, R, j, L, F, C, B, D, V, s, o;
            return Ko().wrap(function(v) {
                for (; ; )
                    switch (v.prev = v.next) {
                    case 0:
                        return D = function(p, g) {
                            for (var _ = arguments.length, O = new Array(_ > 2 ? _ - 2 : 0), q = 2; q < _; q++)
                                O[q - 2] = arguments[q];
                            var x = p.split(".");
                            return function(A) {
                                for (var ye, Me, sr = (ye = (Me = A.namespace) === null || Me === void 0 ? void 0 : Me.split(".")) !== null && ye !== void 0 ? ye : [], Ge = 0; Ge < x.length; Ge++)
                                    if (sr.indexOf(x[Ge]) === -1)
                                        return;
                                g.apply(this, [x, g].concat(O))
                            }
                        }
                        ,
                        B = function() {
                            C.normalCall()
                        }
                        ,
                        F = function() {
                            var p = {};
                            (0,
                            J.default)(".shiny-bound-output").each(function() {
                                var _ = S(this);
                                delete L[_];
                                var O = j(this)
                                  , q = {
                                    type: "shiny:visualchange",
                                    visible: !O
                                };
                                O ? h.setInput(".clientdata_output_" + _ + "_hidden", !0) : (p[_] = !0,
                                h.setInput(".clientdata_output_" + _ + "_hidden", !1));
                                var x = (0,
                                J.default)(this);
                                q.binding = x.data("shiny-output-binding"),
                                x.trigger(q)
                            });
                            for (var g in L)
                                U(L, g) && h.setInput(".clientdata_output_" + g + "_hidden", !0);
                            L = p
                        }
                        ,
                        j = function(p) {
                            return p === null || p.offsetWidth !== 0 || p.offsetHeight !== 0 ? !1 : cr(p, "display") === "none" ? !0 : j(p.parentNode)
                        }
                        ,
                        R = function() {
                            (0,
                            J.default)(".shiny-image-output, .shiny-plot-output, .shiny-report-size").each(function() {
                                var p = S(this)
                                  , g = this.getBoundingClientRect();
                                (g.width !== 0 || g.height !== 0) && (h.setInput(".clientdata_output_" + p + "_width", g.width),
                                h.setInput(".clientdata_output_" + p + "_height", g.height))
                            }),
                            (0,
                            J.default)(".shiny-image-output, .shiny-plot-output, .shiny-report-theme").each(function() {
                                $(this)
                            }),
                            (0,
                            J.default)(".shiny-bound-output").each(function() {
                                var p = (0,
                                J.default)(this)
                                  , g = p.data("shiny-output-binding");
                                p.trigger({
                                    type: "shiny:visualchange",
                                    visible: !j(this),
                                    binding: g
                                }),
                                g.onResize()
                            })
                        }
                        ,
                        $ = function(p) {
                            if (!p.classList.contains("shiny-output-error")) {
                                var g = S(p);
                                h.setInput(".clientdata_output_" + g + "_bg", k(p)),
                                h.setInput(".clientdata_output_" + g + "_fg", cr(p, "color")),
                                h.setInput(".clientdata_output_" + g + "_accent", Wi(p)),
                                h.setInput(".clientdata_output_" + g + "_font", E(p))
                            }
                        }
                        ,
                        P = function(p) {
                            if (!!window.MutationObserver) {
                                var g = p.classList
                                  , _ = g.contains("shiny-image-output") || g.contains("shiny-plot-output") || g.contains("shiny-report-theme");
                                if (!!_) {
                                    var O = (0,
                                    J.default)(p);
                                    if (!O.data("shiny-theme-observer")) {
                                        var q = new or(null,function() {
                                            return $(p)
                                        }
                                        ,100)
                                          , x = new MutationObserver(function() {
                                            return q.normalCall()
                                        }
                                        )
                                          , A = {
                                            attributes: !0,
                                            attributeFilter: ["style", "class"]
                                        };
                                        x.observe(p, A),
                                        O.data("shiny-theme-observer", x)
                                    }
                                }
                            }
                        }
                        ,
                        E = function(p) {
                            var g = cr(p, "font-family")
                              , _ = cr(p, "font-size");
                            return {
                                families: g == null ? void 0 : g.replace(/"/g, "").split(", "),
                                size: _
                            }
                        }
                        ,
                        k = function(p) {
                            if (!p)
                                return null;
                            var g = cr(p, "background-color");
                            if (!g)
                                return g;
                            var _ = g.match(/^rgba\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)$/);
                            if (g === "transparent" || _ && parseFloat(_[4]) === 0) {
                                var O = cr(p, "background-image");
                                return O && O !== "none" ? null : k(p.parentElement)
                            }
                            return g
                        }
                        ,
                        S = function(p) {
                            var g = (0,
                            J.default)(p)
                              , _ = g.data("shiny-output-binding");
                            return _ ? _.getId() : null
                        }
                        ,
                        w = function() {
                            for (var p = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document.documentElement, g = m.getBindings(), _ = 0; _ < g.length; _++) {
                                var O = g[_].binding
                                  , q = O.find(p);
                                if (q)
                                    for (var x = 0; x < q.length; x++) {
                                        var A = (0,
                                        J.default)(q[x]);
                                        A.data("_shiny_initialized") || (A.data("_shiny_initialized", !0),
                                        O.initialize(q[x]))
                                    }
                            }
                        }
                        ,
                        b = function() {
                            return {
                                inputs: h,
                                inputsRate: f,
                                sendOutputHiddenState: B,
                                maybeAddThemeObserver: P,
                                inputBindings: m,
                                outputBindings: y,
                                initDeferredIframes: xq
                            }
                        }
                        ,
                        $O(r),
                        t = r.shinyapp = new qq,
                        r.progressHandlers = t.progressHandlers,
                        n = new Op(t),
                        i = new _p(n),
                        a = new Ep(i),
                        f = new Ip(a),
                        c = new qp(a),
                        (0,
                        J.default)('input[type="submit"], button[type="submit"]').length > 0 ? (l = c,
                        (0,
                        J.default)('input[type="submit"], button[type="submit"]').each(function() {
                            (0,
                            J.default)(this).click(function(d) {
                                d.preventDefault(),
                                c.submit()
                            })
                        })) : l = f,
                        h = new kp(l),
                        r.setInputValue = r.onInputChange = function(d, p) {
                            var g = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
                              , _ = Tp(g);
                            h.setInput(d, p, _)
                        }
                        ,
                        r.forgetLastInputValue = function(d) {
                            i.forget(d)
                        }
                        ,
                        m = r.inputBindings,
                        y = r.outputBindings,
                        r.bindAll = function() {
                            var d = kq(Ko().mark(function p(g) {
                                return Ko().wrap(function(O) {
                                    for (; ; )
                                        switch (O.prev = O.next) {
                                        case 0:
                                            return O.next = 2,
                                            nE(b(), g);
                                        case 2:
                                        case "end":
                                            return O.stop()
                                        }
                                }, p)
                            }));
                            return function(p) {
                                return d.apply(this, arguments)
                            }
                        }(),
                        r.unbindAll = function(d) {
                            var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
                            tE(b(), d, p)
                        }
                        ,
                        r.initializeInputs = w,
                        w(document.documentElement),
                        v.t0 = tr,
                        v.next = 33,
                        Vp(b(), document.documentElement);
                    case 33:
                        v.t1 = v.sent,
                        v.t2 = function(d) {
                            return d.value
                        }
                        ,
                        T = (0,
                        v.t0)(v.t1, v.t2),
                        (0,
                        J.default)(".shiny-image-output, .shiny-plot-output, .shiny-report-size").each(function() {
                            var d = S(this)
                              , p = this.getBoundingClientRect();
                            (p.width !== 0 || p.height !== 0) && (T[".clientdata_output_" + d + "_width"] = p.width,
                            T[".clientdata_output_" + d + "_height"] = p.height)
                        }),
                        (0,
                        J.default)(".shiny-image-output, .shiny-plot-output, .shiny-report-theme").each(function() {
                            var d = this
                              , p = S(d);
                            T[".clientdata_output_" + p + "_bg"] = k(d),
                            T[".clientdata_output_" + p + "_fg"] = cr(d, "color"),
                            T[".clientdata_output_" + p + "_accent"] = Wi(d),
                            T[".clientdata_output_" + p + "_font"] = E(d),
                            P(d)
                        }),
                        ar.setImageSend(n, R),
                        L = {},
                        (0,
                        J.default)(".shiny-bound-output").each(function() {
                            var d = S(this);
                            j(this) ? T[".clientdata_output_" + d + "_hidden"] = !0 : (L[d] = !0,
                            T[".clientdata_output_" + d + "_hidden"] = !1)
                        }),
                        C = new or(null,F,0),
                        n.lastChanceCallback.push(function() {
                            C.isPending() && C.immediateCall()
                        }),
                        (0,
                        J.default)(window).resize(Gr(500, ar.regular)),
                        V = ["modal", "dropdown", "tab", "tooltip", "popover", "collapse"],
                        J.default.each(V, function(d, p) {
                            (0,
                            J.default)(document.body).on("shown.bs." + p + ".sendImageSize", "*", D("bs", ar.regular)),
                            (0,
                            J.default)(document.body).on("shown.bs." + p + ".sendOutputHiddenState hidden.bs." + p + ".sendOutputHiddenState", "*", D("bs", B))
                        }),
                        (0,
                        J.default)(document.body).on("shown.sendImageSize", "*", ar.regular),
                        (0,
                        J.default)(document.body).on("shown.sendOutputHiddenState hidden.sendOutputHiddenState", "*", B),
                        T[".clientdata_pixelratio"] = nl(),
                        (0,
                        J.default)(window).resize(function() {
                            h.setInput(".clientdata_pixelratio", nl())
                        }),
                        T[".clientdata_url_protocol"] = window.location.protocol,
                        T[".clientdata_url_hostname"] = window.location.hostname,
                        T[".clientdata_url_port"] = window.location.port,
                        T[".clientdata_url_pathname"] = window.location.pathname,
                        T[".clientdata_url_search"] = window.location.search,
                        (0,
                        J.default)(window).on("pushstate", function(d) {
                            h.setInput(".clientdata_url_search", window.location.search)
                        }),
                        (0,
                        J.default)(window).on("popstate", function(d) {
                            h.setInput(".clientdata_url_search", window.location.search)
                        }),
                        T[".clientdata_url_hash_initial"] = window.location.hash,
                        T[".clientdata_url_hash"] = window.location.hash,
                        (0,
                        J.default)(window).on("hashchange", function(d) {
                            h.setInput(".clientdata_url_hash", window.location.hash)
                        }),
                        s = T[".clientdata_singletons"] = (0,
                        J.default)('script[type="application/shiny-singletons"]').text(),
                        E_(s.split(/,/)),
                        o = (0,
                        J.default)('script[type="application/html-dependencies"]').text(),
                        J.default.each(o.split(/;/), function(d, p) {
                            var g = /\s*^(.+)\[(.+)\]\s*$/.exec(p);
                            g && _u(g[1], g[2])
                        }),
                        i.reset(T),
                        t.connect(T),
                        (0,
                        J.default)(document).one("shiny:connected", function() {
                            xq()
                        });
                    case 67:
                    case "end":
                        return v.stop()
                    }
            }, e)
        })),
        Jv.apply(this, arguments)
    }
    function xq() {
        !window.Shiny || !window.Shiny.shinyapp || !window.Shiny.shinyapp.isConnected() || (0,
        J.default)(".shiny-frame-deferred").each(function(e, r) {
            var t = (0,
            J.default)(r);
            t.removeClass("shiny-frame-deferred"),
            t.attr("src", t.attr("data-deferred-src")),
            t.attr("data-deferred-src", null)
        })
    }
    function Zv(e) {
        return Zv = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(r) {
            return typeof r
        }
        : function(r) {
            return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r
        }
        ,
        Zv(e)
    }
    function eh() {
        "use strict";
        eh = function() {
            return e
        }
        ;
        var e = {}
          , r = Object.prototype
          , t = r.hasOwnProperty
          , n = Object.defineProperty || function(s, o, u) {
            s[o] = u.value
        }
          , i = typeof Symbol == "function" ? Symbol : {}
          , a = i.iterator || "@@iterator"
          , f = i.asyncIterator || "@@asyncIterator"
          , c = i.toStringTag || "@@toStringTag";
        function l(s, o, u) {
            return Object.defineProperty(s, o, {
                value: u,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }),
            s[o]
        }
        try {
            l({}, "")
        } catch (s) {
            l = function(u, v, d) {
                return u[v] = d
            }
        }
        function h(s, o, u, v) {
            var d = o && o.prototype instanceof b ? o : b
              , p = Object.create(d.prototype)
              , g = new B(v || []);
            return n(p, "_invoke", {
                value: j(s, u, g)
            }),
            p
        }
        function m(s, o, u) {
            try {
                return {
                    type: "normal",
                    arg: s.call(o, u)
                }
            } catch (v) {
                return {
                    type: "throw",
                    arg: v
                }
            }
        }
        e.wrap = h;
        var y = {};
        function b() {}
        function w() {}
        function S() {}
        var T = {};
        l(T, a, function() {
            return this
        });
        var k = Object.getPrototypeOf
          , E = k && k(k(D([])));
        E && E !== r && t.call(E, a) && (T = E);
        var P = S.prototype = b.prototype = Object.create(T);
        function $(s) {
            ["next", "throw", "return"].forEach(function(o) {
                l(s, o, function(u) {
                    return this._invoke(o, u)
                })
            })
        }
        function R(s, o) {
            function u(d, p, g, _) {
                var O = m(s[d], s, p);
                if (O.type !== "throw") {
                    var q = O.arg
                      , x = q.value;
                    return x && Zv(x) == "object" && t.call(x, "__await") ? o.resolve(x.__await).then(function(A) {
                        u("next", A, g, _)
                    }, function(A) {
                        u("throw", A, g, _)
                    }) : o.resolve(x).then(function(A) {
                        q.value = A,
                        g(q)
                    }, function(A) {
                        return u("throw", A, g, _)
                    })
                }
                _(O.arg)
            }
            var v;
            n(this, "_invoke", {
                value: function(p, g) {
                    function _() {
                        return new o(function(O, q) {
                            u(p, g, O, q)
                        }
                        )
                    }
                    return v = v ? v.then(_, _) : _()
                }
            })
        }
        function j(s, o, u) {
            var v = "suspendedStart";
            return function(d, p) {
                if (v === "executing")
                    throw new Error("Generator is already running");
                if (v === "completed") {
                    if (d === "throw")
                        throw p;
                    return V()
                }
                for (u.method = d,
                u.arg = p; ; ) {
                    var g = u.delegate;
                    if (g) {
                        var _ = L(g, u);
                        if (_) {
                            if (_ === y)
                                continue;
                            return _
                        }
                    }
                    if (u.method === "next")
                        u.sent = u._sent = u.arg;
                    else if (u.method === "throw") {
                        if (v === "suspendedStart")
                            throw v = "completed",
                            u.arg;
                        u.dispatchException(u.arg)
                    } else
                        u.method === "return" && u.abrupt("return", u.arg);
                    v = "executing";
                    var O = m(s, o, u);
                    if (O.type === "normal") {
                        if (v = u.done ? "completed" : "suspendedYield",
                        O.arg === y)
                            continue;
                        return {
                            value: O.arg,
                            done: u.done
                        }
                    }
                    O.type === "throw" && (v = "completed",
                    u.method = "throw",
                    u.arg = O.arg)
                }
            }
        }
        function L(s, o) {
            var u = o.method
              , v = s.iterator[u];
            if (v === void 0)
                return o.delegate = null,
                u === "throw" && s.iterator.return && (o.method = "return",
                o.arg = void 0,
                L(s, o),
                o.method === "throw") || u !== "return" && (o.method = "throw",
                o.arg = new TypeError("The iterator does not provide a '" + u + "' method")),
                y;
            var d = m(v, s.iterator, o.arg);
            if (d.type === "throw")
                return o.method = "throw",
                o.arg = d.arg,
                o.delegate = null,
                y;
            var p = d.arg;
            return p ? p.done ? (o[s.resultName] = p.value,
            o.next = s.nextLoc,
            o.method !== "return" && (o.method = "next",
            o.arg = void 0),
            o.delegate = null,
            y) : p : (o.method = "throw",
            o.arg = new TypeError("iterator result is not an object"),
            o.delegate = null,
            y)
        }
        function F(s) {
            var o = {
                tryLoc: s[0]
            };
            1 in s && (o.catchLoc = s[1]),
            2 in s && (o.finallyLoc = s[2],
            o.afterLoc = s[3]),
            this.tryEntries.push(o)
        }
        function C(s) {
            var o = s.completion || {};
            o.type = "normal",
            delete o.arg,
            s.completion = o
        }
        function B(s) {
            this.tryEntries = [{
                tryLoc: "root"
            }],
            s.forEach(F, this),
            this.reset(!0)
        }
        function D(s) {
            if (s) {
                var o = s[a];
                if (o)
                    return o.call(s);
                if (typeof s.next == "function")
                    return s;
                if (!isNaN(s.length)) {
                    var u = -1
                      , v = function d() {
                        for (; ++u < s.length; )
                            if (t.call(s, u))
                                return d.value = s[u],
                                d.done = !1,
                                d;
                        return d.value = void 0,
                        d.done = !0,
                        d
                    };
                    return v.next = v
                }
            }
            return {
                next: V
            }
        }
        function V() {
            return {
                value: void 0,
                done: !0
            }
        }
        return w.prototype = S,
        n(P, "constructor", {
            value: S,
            configurable: !0
        }),
        n(S, "constructor", {
            value: w,
            configurable: !0
        }),
        w.displayName = l(S, c, "GeneratorFunction"),
        e.isGeneratorFunction = function(s) {
            var o = typeof s == "function" && s.constructor;
            return !!o && (o === w || (o.displayName || o.name) === "GeneratorFunction")
        }
        ,
        e.mark = function(s) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(s, S) : (s.__proto__ = S,
            l(s, c, "GeneratorFunction")),
            s.prototype = Object.create(P),
            s
        }
        ,
        e.awrap = function(s) {
            return {
                __await: s
            }
        }
        ,
        $(R.prototype),
        l(R.prototype, f, function() {
            return this
        }),
        e.AsyncIterator = R,
        e.async = function(s, o, u, v, d) {
            d === void 0 && (d = Promise);
            var p = new R(h(s, o, u, v),d);
            return e.isGeneratorFunction(o) ? p : p.next().then(function(g) {
                return g.done ? g.value : p.next()
            })
        }
        ,
        $(P),
        l(P, c, "Generator"),
        l(P, a, function() {
            return this
        }),
        l(P, "toString", function() {
            return "[object Generator]"
        }),
        e.keys = function(s) {
            var o = Object(s)
              , u = [];
            for (var v in o)
                u.push(v);
            return u.reverse(),
            function d() {
                for (; u.length; ) {
                    var p = u.pop();
                    if (p in o)
                        return d.value = p,
                        d.done = !1,
                        d
                }
                return d.done = !0,
                d
            }
        }
        ,
        e.values = D,
        B.prototype = {
            constructor: B,
            reset: function(o) {
                if (this.prev = 0,
                this.next = 0,
                this.sent = this._sent = void 0,
                this.done = !1,
                this.delegate = null,
                this.method = "next",
                this.arg = void 0,
                this.tryEntries.forEach(C),
                !o)
                    for (var u in this)
                        u.charAt(0) === "t" && t.call(this, u) && !isNaN(+u.slice(1)) && (this[u] = void 0)
            },
            stop: function() {
                this.done = !0;
                var o = this.tryEntries[0].completion;
                if (o.type === "throw")
                    throw o.arg;
                return this.rval
            },
            dispatchException: function(o) {
                if (this.done)
                    throw o;
                var u = this;
                function v(q, x) {
                    return g.type = "throw",
                    g.arg = o,
                    u.next = q,
                    x && (u.method = "next",
                    u.arg = void 0),
                    !!x
                }
                for (var d = this.tryEntries.length - 1; d >= 0; --d) {
                    var p = this.tryEntries[d]
                      , g = p.completion;
                    if (p.tryLoc === "root")
                        return v("end");
                    if (p.tryLoc <= this.prev) {
                        var _ = t.call(p, "catchLoc")
                          , O = t.call(p, "finallyLoc");
                        if (_ && O) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0);
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        } else if (_) {
                            if (this.prev < p.catchLoc)
                                return v(p.catchLoc, !0)
                        } else {
                            if (!O)
                                throw new Error("try statement without catch or finally");
                            if (this.prev < p.finallyLoc)
                                return v(p.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(o, u) {
                for (var v = this.tryEntries.length - 1; v >= 0; --v) {
                    var d = this.tryEntries[v];
                    if (d.tryLoc <= this.prev && t.call(d, "finallyLoc") && this.prev < d.finallyLoc) {
                        var p = d;
                        break
                    }
                }
                p && (o === "break" || o === "continue") && p.tryLoc <= u && u <= p.finallyLoc && (p = null);
                var g = p ? p.completion : {};
                return g.type = o,
                g.arg = u,
                p ? (this.method = "next",
                this.next = p.finallyLoc,
                y) : this.complete(g)
            },
            complete: function(o, u) {
                if (o.type === "throw")
                    throw o.arg;
                return o.type === "break" || o.type === "continue" ? this.next = o.arg : o.type === "return" ? (this.rval = this.arg = o.arg,
                this.method = "return",
                this.next = "end") : o.type === "normal" && u && (this.next = u),
                y
            },
            finish: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.finallyLoc === o)
                        return this.complete(v.completion, v.afterLoc),
                        C(v),
                        y
                }
            },
            catch: function(o) {
                for (var u = this.tryEntries.length - 1; u >= 0; --u) {
                    var v = this.tryEntries[u];
                    if (v.tryLoc === o) {
                        var d = v.completion;
                        if (d.type === "throw") {
                            var p = d.arg;
                            C(v)
                        }
                        return p
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(o, u, v) {
                return this.delegate = {
                    iterator: D(o),
                    resultName: u,
                    nextLoc: v
                },
                this.method === "next" && (this.arg = void 0),
                y
            }
        },
        e
    }
    function Aq(e, r, t, n, i, a, f) {
        try {
            var c = e[a](f)
              , l = c.value
        } catch (h) {
            t(h);
            return
        }
        c.done ? r(l) : Promise.resolve(l).then(n, i)
    }
    function D6(e) {
        return function() {
            var r = this
              , t = arguments;
            return new Promise(function(n, i) {
                var a = e.apply(r, t);
                function f(l) {
                    Aq(a, n, i, f, c, "next", l)
                }
                function c(l) {
                    Aq(a, n, i, f, c, "throw", l)
                }
                f(void 0)
            }
            )
        }
    }
    var ce;
    function Nq(e) {
        ce = e,
        ce.version = "1.8.1.1";
        var r = ZO()
          , t = r.inputBindings
          , n = r.fileInputBinding
          , i = X_()
          , a = i.outputBindings;
        GO(n),
        ce.$escape = H,
        ce.compareVersion = s0,
        ce.inputBindings = t,
        ce.InputBinding = oe,
        ce.outputBindings = a,
        ce.OutputBinding = _e,
        ce.resetBrush = Tu,
        ce.notifications = {
            show: Er,
            remove: Ir
        },
        ce.modal = {
            show: xu,
            remove: Ru
        },
        ce.addCustomMessageHandler = Iq,
        ce.showReconnectDialog = Au,
        ce.hideReconnectDialog = $u,
        ce.renderDependenciesAsync = _t,
        ce.renderDependencies = Ql,
        ce.renderContentAsync = De,
        ce.renderContent = x_,
        ce.renderHtmlAsync = po,
        ce.renderHtml = Xl,
        ce.inDevMode = function() {
            return "__SHINY_DEV_MODE__"in window ? Boolean(window.__SHINY_DEV_MODE__) : !1
        }
        ,
        (0,
        $q.default)(function() {
            setTimeout(D6(eh().mark(function f() {
                return eh().wrap(function(l) {
                    for (; ; )
                        switch (l.prev = l.next) {
                        case 0:
                            return l.prev = 0,
                            l.next = 3,
                            Rq(ce);
                        case 3:
                            l.next = 9;
                            break;
                        case 5:
                            throw l.prev = 5,
                            l.t0 = l.catch(0),
                            vs(l.t0),
                            l.t0;
                        case 9:
                        case "end":
                            return l.stop()
                        }
                }, f, null, [[0, 5]])
            })), 1)
        })
    }
    function jq() {
        return window.navigator.userAgent
    }
    var ys = N(W());
    function ms() {
        return St().config
    }
    function Lq() {
        (0,
        ys.default)(document).on("keydown", function(e) {
            if (!(e.which !== 114 || !e.ctrlKey && !e.metaKey || e.shiftKey || e.altKey)) {
                var r = "reactlog?w=" + window.escape(ms().workerId) + "&s=" + window.escape(ms().sessionId);
                window.open(r),
                e.preventDefault()
            }
        }),
        (0,
        ys.default)(document).on("keydown", function(e) {
            if (!!(e.which === 115 && (e.ctrlKey || e.metaKey) && !e.shiftKey && !e.altKey || e.which === 114 && (e.ctrlKey || e.metaKey) && e.shiftKey && !e.altKey)) {
                var r = "reactlog/mark?w=" + window.escape(ms().workerId) + "&s=" + window.escape(ms().sessionId);
                ys.default.get(r, function(t) {
                    if (t === "marked") {
                        var n = '<span id="shiny-reactlog-mark-text">Marked time point in reactlog</span>';
                        Er({
                            html: n,
                            closeButton: !0
                        })
                    }
                }).fail(function() {
                    window.open(r)
                }),
                e.preventDefault()
            }
        })
    }
    function Cq() {
        Nq(zm()),
        Fm(jq()),
        Vm(),
        ah(),
        ih(),
        Lq()
    }
    Cq();
}
)();
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2022 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
//# sourceMappingURL=shiny.min.js.map