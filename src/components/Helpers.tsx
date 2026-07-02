/* @ts-nocheck */
import React from "react";
// Helper components for the Dashboard
import {
  v,
  A,
  NA,
  G,
  Gr,
  UO,
  Ko,
  Xu,
  D_e,
  n1,
  h$,
  Z_e,
  Ju,
  tf,
  rf,
  _c,
  nS,
  xp,
  wh,
  tO,
  zz,
  Ff,
  J_e,
  yp,
  Ox,
  RS,
  DS,
  cx,
  lx,
  Ld,
  ih,
  nf,
  GEe,
  IS,
  MEe,
  NEe,
  REe,
  SEe,
  UEe,
  _Ee,
  _f,
  a1,
  dEe,
  fO,
  g$,
  gm,
  iEe,
  m$,
  oEe,
  pEe,
  v$,
  v6,
  x$,
} from "./Compat";

export const Ex = ({
  title: e,
  value: t,
  icon: r,
  color: n,
  subtitle: a,
  theme: i,
}) =>
  v.jsxs(Gr.div, {
    whileHover: { y: -4 },
    className: G(
      "p-6 rounded-2xl border shadow-sm flex flex-col justify-between transition-all duration-300 backdrop-blur-md",
      i
        ? `${i.contentBg} ${i.contentBorder} ${i.contentShadow}`
        : "bg-white/95 border-slate-100",
    ),
    children: [
      v.jsxs("div", {
        className: "flex justify-between items-start mb-4",
        children: [
          v.jsx("div", {
            className: G("p-3 rounded-xl shadow-lg", n),
            children: v.jsx(r, { className: "w-6 h-6 text-white" }),
          }),
          a &&
            v.jsx("span", {
              className: G(
                "text-xs font-black uppercase tracking-wider",
                i ? i.contentText : "text-slate-400",
              ),
              children: a,
            }),
        ],
      }),
      v.jsxs("div", {
        children: [
          v.jsx("h3", {
            className: G(
              "text-[10px] font-black mb-1 uppercase tracking-[0.2em]",
              i ? i.contentText : "text-slate-400 opacity-60",
            ),
            children: e,
          }),
          v.jsx("p", {
            className: G(
              "text-3xl font-black font-mono tracking-tighter",
              i ? i.contentTitle : "text-slate-900",
            ),
            children: t,
          }),
        ],
      }),
    ],
  });

export const up = ({
  title: e,
  value: t,
  percentage: r,
  icon: n,
  color: a,
  theme: i,
}) =>
  v.jsxs("div", {
    className: G(
      "rounded-2xl p-6 flex items-center justify-between shadow-xl transition-all duration-500",
      i
        ? `${i.contentBg} border-transparent ${i.contentShadow}`
        : "bg-white border-2 border-slate-200",
    ),
    children: [
      v.jsxs("div", {
        className: "flex items-center gap-5",
        children: [
          v.jsx("div", {
            className: G(
              "w-12 h-12 rounded-xl flex items-center justify-center border-2",
              a,
              "border-transparent",
            ),
            children: v.jsx(n, {
              className: G("w-6 h-6", i ? "text-white" : "text-black"),
            }),
          }),
          v.jsxs("div", {
            children: [
              v.jsx("div", {
                className: G(
                  "text-[11px] font-black uppercase tracking-widest mb-1.5",
                  i ? "text-white/80" : "text-slate-950",
                ),
                children: e,
              }),
              v.jsx("div", {
                className: G(
                  "text-4xl font-black font-mono leading-none",
                  i ? "text-white text-shadow-lg" : "text-black",
                ),
                children: t,
              }),
            ],
          }),
        ],
      }),
      r &&
        v.jsx("div", {
          className: G(
            "text-xs font-black px-2 py-1 rounded-lg bg-amber-500/10",
            i ? "text-amber-400" : "text-amber-700",
          ),
          children: r,
        }),
    ],
  });

export const p8 = ({ sub: e, theme: t }) => {
  const r = e.percentage;
  let n = "text-slate-400",
    a = "bg-slate-200",
    i = t ? "border-transparent" : "border-slate-100",
    s = t ? t.contentBg : "bg-white",
    l = t ? t.contentShadow : "";
  return (
    r >= 90
      ? ((n = "text-red-500"),
        (a = "bg-red-500"),
        t
          ? ((i = "border-red-500/40"),
            (l = "shadow-[0_0_20px_rgba(239,68,68,0.2)]"))
          : ((i = "border-red-200"), (s = "bg-red-50")))
      : r >= 80
        ? ((n = "text-orange-500"),
          (a = "bg-orange-500"),
          t
            ? ((i = "border-orange-500/40"),
              (l = "shadow-[0_0_20px_rgba(249,115,22,0.2)]"))
            : ((i = "border-orange-200"), (s = "bg-orange-50")))
        : r >= 70 &&
          ((n = "text-yellow-500"),
          (a = "bg-yellow-500"),
          t
            ? ((i = "border-yellow-500/40"),
              (l = "shadow-[0_0_20px_rgba(234,179,8,0.2)]"))
            : ((i = "border-yellow-200"), (s = "bg-yellow-50"))),
    v.jsxs("div", {
      className: G(
        "rounded-2xl p-6 transition-all duration-500 backdrop-blur-md flex flex-col space-y-6 border",
        s,
        i,
        l,
      ),
      children: [
        v.jsxs("div", {
          className: "flex justify-between items-start",
          children: [
            v.jsxs("div", {
              className: "space-y-1",
              children: [
                v.jsx("h4", {
                  className: G(
                    "text-[9px] font-black uppercase tracking-[0.2em]",
                    t ? "text-yellow-400" : "text-slate-400",
                  ),
                  children: e.area,
                }),
                v.jsxs("div", {
                  className: G(
                    "text-xl font-black font-mono",
                    r >= 70 ? n : t ? t.contentTitle : n,
                  ),
                  children: [r.toFixed(1), "%"],
                }),
              ],
            }),
            v.jsxs("div", {
              className: G(
                "px-2 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider",
                t ? "bg-white/5 text-black" : "bg-slate-50 text-slate-500",
              ),
              children: [
                e.occupied.toLocaleString(),
                " / ",
                e.addresses.toLocaleString(),
              ],
            }),
          ],
        }),
        v.jsx("div", {
          className: G(
            "h-1.5 w-full rounded-full overflow-hidden",
            t ? "bg-zinc-800" : "bg-slate-100",
          ),
          children: v.jsx(Gr.div, {
            initial: { width: 0 },
            animate: { width: `${Math.min(r, 100)}%` },
            className: G("h-full transition-all duration-1000", a),
          }),
        }),
        v.jsxs("div", {
          className: "grid grid-cols-4 gap-2",
          children: [
            v.jsxs("div", {
              className: G(
                "rounded-xl p-3 text-center transition-colors duration-500",
                t ? "bg-black/10" : "border border-slate-100 bg-slate-50/50",
              ),
              children: [
                v.jsx("div", {
                  className: G(
                    "text-[7px] uppercase font-black mb-1",
                    t ? "text-black" : "opacity-50",
                  ),
                  children: "Total",
                }),
                v.jsx("div", {
                  className: G(
                    "text-sm font-black",
                    t ? "text-slate-600" : "text-slate-900",
                  ),
                  children: e.addresses.toLocaleString(),
                }),
              ],
            }),
            v.jsxs("div", {
              className: G(
                "rounded-xl p-3 text-center transition-colors duration-500",
                t ? "bg-black/10" : "border border-slate-100 bg-slate-50/50",
              ),
              children: [
                v.jsx("div", {
                  className: G(
                    "text-[7px] uppercase font-black mb-1",
                    t ? "text-black" : "opacity-50",
                  ),
                  children: "Ocup.",
                }),
                v.jsx("div", {
                  className: "text-sm font-black text-orange-600",
                  children: e.occupied.toLocaleString(),
                }),
              ],
            }),
            v.jsxs("div", {
              className: G(
                "rounded-xl p-3 text-center transition-colors duration-500",
                t ? "bg-black/10" : "border border-slate-100 bg-slate-50/50",
              ),
              children: [
                v.jsx("div", {
                  className: G(
                    "text-[7px] uppercase font-black mb-1",
                    t ? "text-black" : "opacity-50",
                  ),
                  children: "Bloq.",
                }),
                v.jsx("div", {
                  className: "text-sm font-black text-rose-600",
                  children: (e.definitivo + e.operacional).toLocaleString(),
                }),
              ],
            }),
            v.jsxs("div", {
              className: G(
                "rounded-xl p-3 text-center transition-colors duration-500",
                t ? "bg-black/10" : "border border-slate-100 bg-slate-50/50",
              ),
              children: [
                v.jsx("div", {
                  className: G(
                    "text-[7px] uppercase font-black mb-1",
                    t ? "text-black" : "opacity-50",
                  ),
                  children: "Livre",
                }),
                v.jsx("div", {
                  className: "text-sm font-black text-emerald-600",
                  children: e.disponivel.toLocaleString(),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};

export const Tx = ({
  area: e,
  showStructure: t = !1,
  showOccupied: r = !1,
  showBlocked: n = !1,
  showAvailable: a = !1,
  theme: i,
}) => {
  var d;
  const [s, l] = A.useState(!1),
    u = e.subcategories && e.subcategories.length > 0,
    f = e.area.toUpperCase().includes("TOTAL CD");
  return v.jsxs(v.Fragment, {
    children: [
      v.jsxs("tr", {
        className: G(
          "transition-colors",
          !i && "border-b border-slate-100",
          e.isCategory
            ? i
              ? "bg-zinc-900/50 font-bold"
              : "bg-slate-50 font-bold"
            : i
              ? i.contentTitle
              : "text-slate-900",
          f &&
            (i
              ? "bg-zinc-800 border-t-2 border-zinc-700 text-white shadow-lg"
              : "bg-blue-50 border-t border-blue-200 text-blue-900"),
        ),
        children: [
          v.jsx("td", {
            className: "py-4 px-4 flex items-center gap-2",
            children: u
              ? v.jsxs("button", {
                  onClick: () => l(!s),
                  className: G(
                    "transition-colors flex items-center gap-3 w-full text-left group",
                    i
                      ? "text-blue-400 hover:text-blue-300"
                      : "text-blue-500 hover:text-blue-700",
                  ),
                  children: [
                    v.jsx(a1, {
                      className: G(
                        "w-5 h-5 transition-transform duration-200",
                        s ? "rotate-90" : "",
                      ),
                    }),
                    v.jsx("span", {
                      className: G(
                        "text-sm uppercase tracking-wider font-bold group-hover:underline",
                        i
                          ? f
                            ? "text-white font-black"
                            : i.contentTitle
                          : "text-slate-950",
                      ),
                      children: e.area,
                    }),
                  ],
                })
              : v.jsx("div", {
                  className: "flex items-center gap-3 ml-8",
                  children: v.jsx("span", {
                    className: G(
                      "text-sm uppercase tracking-wider font-bold",
                      i
                        ? f
                          ? "text-white font-black"
                          : i.contentTitle
                        : "text-slate-950",
                    ),
                    children: e.area,
                  }),
                }),
          }),
          t &&
            v.jsxs(v.Fragment, {
              children: [
                v.jsx("td", {
                  className: G(
                    "py-4 px-4 text-right font-mono text-base font-black",
                    i ? "text-white" : "text-black",
                  ),
                  children: (e.structure || 0).toLocaleString(),
                }),
                v.jsx("td", {
                  className: G(
                    "py-4 px-4 text-right font-mono text-base font-black",
                    i ? "text-white" : "text-black",
                  ),
                  children: (e.addresses || 0).toLocaleString(),
                }),
              ],
            }),
          r &&
            v.jsxs(v.Fragment, {
              children: [
                v.jsx("td", {
                  className: G(
                    "py-4 px-4 text-right font-mono text-base font-black",
                    i ? "text-white" : "text-black",
                  ),
                  children: (e.occupied || 0).toLocaleString(),
                }),
                v.jsxs("td", {
                  className: G(
                    "py-4 px-4 text-right font-mono text-base font-black scale-110",
                    i
                      ? f
                        ? "text-yellow-200"
                        : "text-amber-400"
                      : "text-amber-700",
                  ),
                  children: [(e.percentage || 0).toFixed(1), "%"],
                }),
              ],
            }),
          n &&
            v.jsx("td", {
              className: G(
                "py-4 px-4 text-right font-mono text-sm font-black",
                i ? "text-rose-400" : "text-rose-700",
              ),
              children: (
                (e.definitivo || 0) + (e.operacional || 0)
              ).toLocaleString(),
            }),
          a &&
            v.jsx("td", {
              className: G(
                "py-4 px-4 text-right font-mono text-sm font-black",
                i ? "text-emerald-400" : "text-emerald-700",
              ),
              children: (e.disponivel || 0).toLocaleString(),
            }),
        ],
      }),
      s &&
        u &&
        ((d = e.subcategories) == null
          ? void 0
          : d.map((p) =>
              v.jsxs(
                "tr",
                {
                  className: G(
                    "italic transition-colors",
                    !i && "border-b border-slate-200",
                    i ? G(i.contentBorder, "bg-black/40") : "bg-slate-100",
                  ),
                  children: [
                    v.jsx("td", {
                      className: G(
                        "py-2 px-4 pl-14 text-xs font-black",
                        i ? "text-yellow-400" : "text-black",
                      ),
                      children: p.area,
                    }),
                    t &&
                      v.jsxs(v.Fragment, {
                        children: [
                          v.jsx("td", {
                            className: G(
                              "py-2 px-4 text-right font-mono text-sm font-black",
                              i ? "text-white" : "text-black",
                            ),
                            children: (p.structure || 0).toLocaleString(),
                          }),
                          v.jsx("td", {
                            className: G(
                              "py-2 px-4 text-right font-mono text-sm font-black",
                              i ? "text-white" : "text-black",
                            ),
                            children: (p.addresses || 0).toLocaleString(),
                          }),
                        ],
                      }),
                    r &&
                      v.jsxs(v.Fragment, {
                        children: [
                          v.jsx("td", {
                            className: G(
                              "py-2 px-4 text-right font-mono text-sm font-black",
                              i ? "text-white" : "text-black",
                            ),
                            children: (p.occupied || 0).toLocaleString(),
                          }),
                          v.jsxs("td", {
                            className: G(
                              "py-2 px-4 text-right font-mono text-sm font-black",
                              i ? "text-white" : "text-amber-800",
                            ),
                            children: [(p.percentage || 0).toFixed(1), "%"],
                          }),
                        ],
                      }),
                    n &&
                      v.jsx("td", {
                        className: G(
                          "py-2 px-4 text-right font-mono text-xs font-black",
                          i ? "text-rose-400" : "text-rose-800",
                        ),
                        children: (
                          (p.definitivo || 0) + (p.operacional || 0)
                        ).toLocaleString(),
                      }),
                    a &&
                      v.jsx("td", {
                        className: G(
                          "py-2 px-4 text-right font-mono text-xs font-black",
                          i ? "text-emerald-400" : "text-emerald-800",
                        ),
                        children: (p.disponivel || 0).toLocaleString(),
                      }),
                  ],
                },
                p.area,
              ),
            )),
    ],
  });
};

export const h8 = ({
  title: e,
  areaName: t,
  subtitle: r,
  data: n,
  theme: a,
}) => {
  const i = n.areas.find((u) => u.area.toUpperCase().includes(t.toUpperCase()));
  if (!i) return null;
  const s = Math.floor(i.percentage / (100 / 6));
  let l = a ? "text-white" : "text-slate-900";
  return (
    a ||
      (s === 4
        ? (l = "text-yellow-600")
        : s === 5
          ? (l = "text-orange-600")
          : s >= 6 && (l = "text-red-600")),
    v.jsxs("div", {
      className: G(
        "rounded-2xl border shadow-sm overflow-hidden flex flex-col transition-all duration-500",
        a
          ? `${a.contentBg} ${a.contentBorder} ${a.contentShadow}`
          : "bg-white border-slate-100",
      ),
      children: [
        v.jsxs("div", {
          className: "p-8 text-center",
          children: [
            v.jsx("div", {
              className: G(
                "text-[12px] font-black uppercase tracking-[0.4em] mb-6",
                a ? "text-white" : "text-slate-800",
              ),
              children: e,
            }),
            v.jsxs("div", {
              className: G(
                "text-8xl font-black mb-8 font-mono tracking-tighter",
                a ? "text-white" : l,
              ),
              children: [i.percentage.toFixed(1), "%"],
            }),
            v.jsx("div", {
              className: "flex justify-center mb-10",
              children: v.jsx("div", {
                className: G(
                  "w-20 h-28 border-2 rounded-sm p-1 flex flex-col-reverse gap-1 transition-colors duration-500",
                  a
                    ? "border-zinc-700 bg-black/40"
                    : "border-slate-100 bg-slate-50",
                ),
                children: [1, 2, 3, 4, 5, 6].map((u) => {
                  const f = i.percentage / 16.666666666666668 >= u;
                  let d = a ? "bg-white" : "bg-slate-900";
                  return (
                    s === 4
                      ? (d = "bg-yellow-500")
                      : s === 5
                        ? (d = "bg-orange-500")
                        : s >= 6 && (d = "bg-red-500"),
                    v.jsx(
                      "div",
                      {
                        className: G(
                          "flex-1 rounded-sm transition-all duration-1000",
                          f ? d : a ? "bg-zinc-900/30" : "bg-white",
                        ),
                      },
                      u,
                    )
                  );
                }),
              }),
            }),
            v.jsxs("div", {
              className: G(
                "inline-flex items-center gap-2 px-5 py-2 rounded-full border transition-colors duration-500",
                a
                  ? "border-zinc-700 bg-black/40"
                  : "border-slate-100 bg-slate-50",
              ),
              children: [
                v.jsx("div", {
                  className: G(
                    "w-2 h-2 rounded-full",
                    a ? "bg-zinc-100" : "bg-slate-900",
                  ),
                }),
                v.jsx("span", {
                  className: G(
                    "text-[9px] font-bold uppercase tracking-widest",
                    a ? "text-black" : "text-slate-500",
                  ),
                  children: r,
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: G(
            "mt-auto grid grid-cols-4 transition-all duration-500",
            a
              ? "text-zinc-100 select-none"
              : "border-t border-slate-100 divide-x divide-slate-100 bg-slate-50/50",
          ),
          children: [
            v.jsxs("div", {
              className: "p-5 text-center",
              children: [
                v.jsx("div", {
                  className: G(
                    "text-[9px] font-black uppercase tracking-widest mb-2",
                    a ? "text-white" : "text-slate-900",
                  ),
                  children: "Ocup.",
                }),
                v.jsx("div", {
                  className: G("text-xl font-black font-mono leading-none", l),
                  children: (i.occupied || 0).toLocaleString(),
                }),
              ],
            }),
            v.jsxs("div", {
              className: "p-5 text-center",
              children: [
                v.jsx("div", {
                  className: G(
                    "text-[9px] font-black uppercase tracking-widest mb-2",
                    a ? "text-white" : "text-slate-900",
                  ),
                  children: "Disp.",
                }),
                v.jsx("div", {
                  className: G(
                    "text-xl font-black font-mono leading-none",
                    a ? "text-white" : "text-slate-900",
                  ),
                  children: (i.disponivel || 0).toLocaleString(),
                }),
              ],
            }),
            v.jsxs("div", {
              className: "p-5 text-center",
              children: [
                v.jsx("div", {
                  className: G(
                    "text-[9px] font-black uppercase tracking-widest mb-2",
                    a ? "text-white" : "text-slate-900",
                  ),
                  children: "Bloq.",
                }),
                v.jsx("div", {
                  className: G(
                    "text-xl font-black font-mono leading-none",
                    a ? "text-white" : "text-slate-900",
                  ),
                  children: (
                    (i.definitivo || 0) + (i.operacional || 0)
                  ).toLocaleString(),
                }),
              ],
            }),
            v.jsxs("div", {
              className: "p-5 text-center",
              children: [
                v.jsx("div", {
                  className: G(
                    "text-[9px] font-black uppercase tracking-widest mb-2",
                    a ? "text-white" : "text-slate-900",
                  ),
                  children: "Total",
                }),
                v.jsx("div", {
                  className: G(
                    "text-xl font-black font-mono leading-none",
                    a ? "text-white" : "text-slate-900",
                  ),
                  children: (i.addresses || 0).toLocaleString(),
                }),
              ],
            }),
          ],
        }),
      ],
    })
  );
};

export class T3e extends React.Component<any, any> {
  state: any;
  props: any;
  constructor(t) {
    (super(t), (this.state = { hasError: !1, error: null }));
  }
  static getDerivedStateFromError(t) {
    return { hasError: !0, error: t };
  }
  componentDidCatch(t, r) {
    console.error("Uncaught error:", t, r);
  }
  render() {
    return this.state.hasError
      ? v.jsx("div", {
          className:
            "min-h-screen bg-white flex items-center justify-center p-4 text-center",
          children: v.jsxs("div", {
            className:
              "max-w-md w-full p-8 bg-rose-500/10 border border-rose-500/20 rounded-3xl",
            children: [
              v.jsx(_f, { className: "w-12 h-12 text-rose-500 mx-auto mb-4" }),
              v.jsx("h2", {
                className: "text-xl font-bold text-white mb-2",
                children: "Ops! Algo deu errado.",
              }),
              v.jsx("p", {
                className: "text-emerald-100/60 mb-6 text-sm",
                children:
                  "Ocorreu um erro inesperado. Tente recarregar a página ou entre em contato com o suporte.",
              }),
              v.jsx("button", {
                onClick: () => window.location.reload(),
                className:
                  "bg-rose-600 hover:bg-rose-700 text-white px-6 py-2 rounded-xl font-semibold transition-colors",
                children: "Recarregar Página",
              }),
            ],
          }),
        })
      : this.props.children;
  }
}
