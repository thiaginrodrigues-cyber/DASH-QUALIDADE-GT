/* @ts-nocheck */
// Occupancy Map Component
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
import { Ex, up, p8, Tx, h8, T3e } from "./Helpers";

export const ZDe = function ({
  cn: e,
  data: t,
  theme: r,
  getOccupancyColorClasses: n,
}) {
  const d = A.useMemo(() => {
      const _ = [];
      for (let T = 55; T >= 0; T--)
        _.push({ idx: T, posOdd: 13 + 2 * T, posEven: 14 + 2 * T });
      return _;
    }, []),
    p = (_) => {
      const T = String(_ || "")
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();
      return T
        ? T.includes("confinado") && T.includes("bebida")
          ? "CONFINADOS - BEBIDAS"
          : T.includes("bebida")
            ? "BEBIDAS"
            : T.includes("fracionado")
              ? "FRACIONADOS"
              : T.includes("higiene") ||
                  T.includes("saude") ||
                  T.includes("beleza") ||
                  T.includes("perfumaria") ||
                  T.includes("cosmetico")
                ? "HIGIENE, SAUDE E BELEZA"
                : T.includes("mercearia") || T.includes("mercear")
                  ? "MERCEARIA SECA"
                  : T.includes("limpeza") || T.includes("lavanderia")
                    ? "LIMPEZA E LAVANDERIA"
                    : T.includes("confinado")
                      ? "CONFINADOS"
                      : T.includes("bazar") ||
                          T.includes("eletro") ||
                          T.includes("textil")
                        ? "BAZAR, ELETRO E TEXTIL"
                        : T.includes("aerosol") || T.includes("aerossol")
                          ? "AEROSOL"
                          : T.includes("fefo")
                            ? "FEFO"
                            : ""
        : "";
    },
    g = (_, T, N) => {
      if (!t || !t.setoresLayout) return "";
      const C = t.setoresLayout.find(
        (P) => P.rua === _ && P.predio === T && P.andar === N,
      );
      return C ? p(C.setor) : "";
    },
    x = A.useMemo(() => {
      const _ = {
          BEBIDAS: {
            bg: "bg-green-500",
            border: "border-green-600",
            text: "text-black",
          },
          "CONFINADOS - BEBIDAS": {
            bg: "bg-violet-500",
            border: "border-violet-600",
            text: "text-white",
          },
          FRACIONADOS: {
            bg: "bg-red-600",
            border: "border-red-700",
            text: "text-white",
          },
          "HIGIENE, SAUDE E BELEZA": {
            bg: "bg-pink-500",
            border: "border-pink-600",
            text: "text-white",
          },
          "MERCEARIA SECA": {
            bg: "bg-[#ffd966]",
            border: "border-yellow-600",
            text: "text-black",
          },
          "LIMPEZA E LAVANDERIA": {
            bg: "bg-blue-600",
            border: "border-blue-700",
            text: "text-white",
          },
          CONFINADOS: {
            bg: "bg-neutral-700",
            border: "border-neutral-800",
            text: "text-white",
          },
          "BAZAR, ELETRO E TEXTIL": {
            bg: "bg-amber-800",
            border: "border-amber-900",
            text: "text-white",
          },
          AEROSOL: {
            bg: "bg-cyan-500",
            border: "border-cyan-600",
            text: "text-black",
          },
          FEFO: {
            bg: "bg-orange-500",
            border: "border-orange-600",
            text: "text-white",
          },
        },
        T = {
          BEBIDAS: 0,
          "CONFINADOS - BEBIDAS": 0,
          FRACIONADOS: 0,
          "HIGIENE, SAUDE E BELEZA": 0,
          "MERCEARIA SECA": 0,
          "LIMPEZA E LAVANDERIA": 0,
          CONFINADOS: 0,
          "BAZAR, ELETRO E TEXTIL": 0,
          AEROSOL: 0,
          FEFO: 0,
        };
      t &&
        t.setoresLayout &&
        t.setoresLayout.forEach((P) => {
          const M = p(P.setor);
          M && (T[M] = (T[M] || 0) + 1);
        });
      const C = [
        "BEBIDAS",
        "CONFINADOS - BEBIDAS",
        "FRACIONADOS",
        "HIGIENE, SAUDE E BELEZA",
        "MERCEARIA SECA",
        "LIMPEZA E LAVANDERIA",
        "CONFINADOS",
        "BAZAR, ELETRO E TEXTIL",
        "AEROSOL",
        "FEFO",
      ].map((P) => {
        const M = T[P] || 0,
          D = _[P] || {
            bg: "bg-purple-600",
            border: "border-purple-700",
            text: "text-white",
          };
        return { norm: P, displayName: P, count: M, style: D };
      });
      return (
        C.sort((P, M) => M.count - P.count),
        C.map((P, M) => ({ ...P, id: M + 1 }))
      );
    }, [t]),
    b = (_) => {
      if (!_)
        return {
          bg: "bg-white",
          text: "text-zinc-400 border-zinc-200/60 hover:bg-zinc-50",
          border: "border-zinc-250",
          id: "0",
        };
      const T = x.find((N) => N.norm === _);
      return T
        ? {
            bg: T.style.bg,
            text: T.style.text,
            border: T.style.border,
            id: String(T.id),
          }
        : {
            bg: "bg-purple-600",
            text: "text-white font-bold",
            border: "border-purple-700",
            id: "?",
          };
    },
    y = [17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
  return v.jsxs("div", {
    className:
      "flex flex-col items-center justify-start p-4 bg-zinc-950 rounded-2xl border border-zinc-800 shadow-xl overflow-hidden w-full gap-4",
    children: [
      v.jsxs("div", {
        className:
          "w-full bg-zinc-900 border border-zinc-800 rounded-xl p-3.5 shadow-inner flex flex-col gap-3",
        children: [
          v.jsxs("div", {
            className:
              "flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-2",
            children: [
              v.jsxs("div", {
                className: "flex flex-col",
                children: [
                  v.jsxs("h4", {
                    className:
                      "text-xs font-black text-zinc-100 uppercase tracking-widest flex items-center gap-2",
                    children: [
                      v.jsx("span", {
                        className:
                          "w-2.5 h-2.5 rounded-full bg-yellow-500 animate-pulse",
                      }),
                      "Legenda de Setores do CD",
                    ],
                  }),
                  v.jsx("p", {
                    className: "text-[10px] text-zinc-400",
                    children:
                      'Classificação colorida conforme aba "Setores" da planilha do Google Sheets',
                  }),
                ],
              }),
              (t == null ? void 0 : t.setoresLayout) &&
                v.jsxs("span", {
                  className:
                    "text-[10px] font-mono text-zinc-400 bg-zinc-850 px-2.5 py-1 rounded-md border border-zinc-800 flex items-center gap-1.5 Self-start sm:self-auto",
                  children: [
                    "Total Mapeado: ",
                    v.jsx("strong", {
                      className: "text-yellow-500",
                      children: t.setoresLayout.length,
                    }),
                    " posições",
                  ],
                }),
            ],
          }),
          v.jsxs("div", {
            className:
              "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-10 gap-2 w-full",
            children: [
              x.map((_) =>
                v.jsxs(
                  "div",
                  {
                    className:
                      "bg-zinc-950/50 border border-zinc-800/80 p-2 rounded-lg flex items-center gap-2",
                    children: [
                      v.jsx("div", {
                        className: e(
                          "w-4 h-4 rounded flex items-center justify-center text-[9px] font-bold shadow-sm border",
                          _.style.bg,
                          _.style.border,
                          _.style.text,
                        ),
                        children: _.id,
                      }),
                      v.jsxs("div", {
                        className: "flex flex-col min-w-0",
                        children: [
                          v.jsx("span", {
                            className:
                              "text-[10px] font-semibold text-zinc-300 truncate uppercase select-none",
                            children: _.displayName,
                          }),
                          v.jsxs("span", {
                            className:
                              "text-[9px] text-zinc-500 font-mono leading-none",
                            children: [_.count, " pos."],
                          }),
                        ],
                      }),
                    ],
                  },
                  _.norm,
                ),
              ),
              v.jsxs("div", {
                className:
                  "bg-zinc-950/50 border border-zinc-800/80 p-2 rounded-lg flex items-center gap-2",
                children: [
                  v.jsx("div", {
                    className:
                      "w-4 h-4 rounded bg-white flex items-center justify-center text-[9px] font-black text-zinc-800 border border-zinc-400 shadow-sm",
                    children: "0",
                  }),
                  v.jsxs("div", {
                    className: "flex flex-col min-w-0",
                    children: [
                      v.jsx("span", {
                        className:
                          "text-[10px] font-semibold text-zinc-300 truncate uppercase select-none",
                        children: "Sem Setor",
                      }),
                      v.jsxs("span", {
                        className:
                          "text-[9px] text-zinc-500 font-mono leading-none",
                        children: [
                          A.useMemo(() => {
                            var T;
                            const _ =
                              ((T = t == null ? void 0 : t.setoresLayout) ==
                              null
                                ? void 0
                                : T.length) || 0;
                            return Math.max(0, 11088 - _);
                          }, [t]),
                          " pos.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsx("div", {
        className:
          "w-full overflow-x-auto overflow-y-auto max-h-[74vh] custom-scrollbar rounded-xl bg-zinc-900/10 p-1",
        children: v.jsx("div", {
          className:
            "flex gap-2 p-1 justify-start items-start select-none min-w-max",
          children: y.map((_) => {
            const T = _ === 1,
              N = "LADO IMPAR".split(""),
              C = "LADO PAR".split("");
            return v.jsxs(
              "div",
              {
                className: "flex flex-col items-center gap-1.5 min-w-max",
                children: [
                  v.jsxs("div", {
                    className:
                      "bg-zinc-900 border border-zinc-700 text-[#cca21a] font-mono font-bold text-[9px] px-2.5 py-0.5 rounded shadow-sm uppercase tracking-wider text-center w-full",
                    children: ["Rua ", _],
                  }),
                  v.jsxs("div", {
                    className:
                      "flex items-stretch bg-white border border-black/80 text-black font-sans shadow-md rounded-sm",
                    children: [
                      v.jsx("div", {
                        className:
                          "bg-[#ffd966] text-black font-extrabold flex flex-col items-center justify-center border-r border-black select-none gap-0.5 py-2",
                        style: {
                          width: `${6.5}px`,
                          fontSize: `${5.2 * 0.85}px`,
                        },
                        children: N.map((P, M) =>
                          v.jsx(
                            "span",
                            { className: "leading-none", children: P },
                            M,
                          ),
                        ),
                      }),
                      v.jsxs("div", {
                        className: "flex flex-col bg-white",
                        children: [
                          v.jsx("div", {
                            className:
                              "bg-[#f9cb9c] text-black font-extrabold text-center uppercase flex items-center justify-center border-b border-black select-none",
                            style: {
                              height: `${8.5 * 1.3}px`,
                              fontSize: `${5.2 * 0.9}px`,
                            },
                            children: T ? "RECEB" : "RECEBIMENTO",
                          }),
                          v.jsx("div", {
                            className: "flex flex-col",
                            children: d.map((P) =>
                              v.jsxs(
                                "div",
                                {
                                  className:
                                    "flex items-center border-b border-black select-none",
                                  style: { height: `${8.5}px` },
                                  children: [
                                    v.jsx("div", {
                                      className:
                                        "bg-[#efefef] text-black font-semibold text-center border-r border-black flex items-center justify-center h-full",
                                      style: {
                                        width: "12px",
                                        fontSize: `${5.2}px`,
                                      },
                                      children: P.posOdd,
                                    }),
                                    [6, 5, 4, 3, 2, 1].map((M) => {
                                      const D = g(_, P.posOdd, M),
                                        k = b(D);
                                      return v.jsx(
                                        "div",
                                        {
                                          className: e(
                                            "border-r border-black h-full transition-colors flex items-center justify-center select-none leading-none",
                                            k.bg,
                                            k.text,
                                          ),
                                          style: {
                                            width: `${8.5}px`,
                                            fontSize: `${5.2 * 0.95}px`,
                                          },
                                          title: `Rua ${_} • Mód: ${P.posOdd} • Nível: ${M}${D ? ` • Setor: #${k.id} - ${D}` : " • (Sem Setor)"}`,
                                          children: M,
                                        },
                                        M,
                                      );
                                    }),
                                    !T &&
                                      v.jsx("div", {
                                        className:
                                          "bg-zinc-100 border-r border-black h-full flex items-center justify-center shadow-inner",
                                        style: { width: `${7.5}px` },
                                      }),
                                    !T &&
                                      [1, 2, 3, 4, 5, 6].map((M) => {
                                        const D = g(_, P.posEven, M),
                                          k = b(D);
                                        return v.jsx(
                                          "div",
                                          {
                                            className: e(
                                              "border-r border-black h-full transition-colors flex items-center justify-center select-none leading-none",
                                              k.bg,
                                              k.text,
                                            ),
                                            style: {
                                              width: `${8.5}px`,
                                              fontSize: `${5.2 * 0.95}px`,
                                            },
                                            title: `Rua ${_} • Mód: ${P.posEven} • Nível: ${M}${D ? ` • Setor: #${k.id} - ${D}` : " • (Sem Setor)"}`,
                                            children: M,
                                          },
                                          M,
                                        );
                                      }),
                                    !T &&
                                      v.jsx("div", {
                                        className:
                                          "bg-[#efefef] text-black font-semibold text-center flex items-center justify-center h-full",
                                        style: {
                                          width: "12px",
                                          fontSize: `${5.2}px`,
                                        },
                                        children: P.posEven,
                                      }),
                                  ],
                                },
                                P.idx,
                              ),
                            ),
                          }),
                          v.jsx("div", {
                            className:
                              "bg-[#4a86e8] text-black font-extrabold text-center uppercase flex items-center justify-center select-none",
                            style: {
                              height: `${8.5 * 1.3}px`,
                              fontSize: `${5.2 * 0.9}px`,
                            },
                            children: T ? "EXPED" : "EXPEDIÇÃO",
                          }),
                        ],
                      }),
                      !T &&
                        v.jsx("div", {
                          className:
                            "bg-[#ffd966] text-black font-extrabold flex flex-col items-center justify-center border-l border-black select-none gap-0.5 py-2",
                          style: {
                            width: `${6.5}px`,
                            fontSize: `${5.2 * 0.85}px`,
                          },
                          children: C.map((P, M) =>
                            v.jsx(
                              "span",
                              { className: "leading-none", children: P },
                              M,
                            ),
                          ),
                        }),
                    ],
                  }),
                ],
              },
              _,
            );
          }),
        }),
      }),
    ],
  });
};

export const i3e = ({ data: e, theme: t, activeView: r }) => {
  const [n, a] = A.useState("categoria"),
    i = (l) =>
      l >= 90
        ? {
            bg: "bg-rose-500/10 border-rose-500/30 text-rose-500 hover:bg-rose-500/20 hover:border-rose-500/50",
            text: "text-rose-500",
            badge: "bg-rose-500/20 text-rose-400 border-rose-500/30",
            bar: "bg-rose-500",
            glow: "shadow-rose-500/10",
          }
        : l >= 80
          ? {
              bg: "bg-orange-500/10 border-orange-500/30 text-orange-500 hover:bg-orange-500/20 hover:border-orange-500/50",
              text: "text-orange-500",
              badge: "bg-orange-500/20 text-orange-400 border-orange-500/30",
              bar: "bg-orange-500",
              glow: "shadow-orange-500/10",
            }
          : l >= 70
            ? {
                bg: "bg-amber-500/10 border-amber-500/30 text-amber-500 hover:bg-amber-500/20 hover:border-amber-500/50",
                text: "text-amber-500",
                badge: "bg-amber-500/20 text-amber-400 border-amber-500/30",
                bar: "bg-amber-500",
                glow: "shadow-amber-500/10",
              }
            : {
                bg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-500 hover:bg-emerald-500/20 hover:border-emerald-500/50",
                text: "text-emerald-500",
                badge:
                  "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
                bar: "bg-emerald-500",
                glow: "shadow-emerald-500/10",
              },
    s = NA.useMemo(() => {
      if (!e) return [];
      const l = [
          { id: "MERCEARIA SECA", label: "Mercearia Seca" },
          { id: "BAZAR, ELETRO E TEXTIL", label: "Bazar, Eletro e Têxtil" },
          { id: "BEBIDAS", label: "Bebidas" },
          { id: "HIGIENE, SAUDE E BELEZA", label: "Higiene, Saúde e Beleza" },
          { id: "LIMPEZA E LAVANDERIA", label: "Limpeza e Lavanderia" },
          { id: "FRACIONADO", label: "Fracionados" },
          { id: "CONFINADO", label: "Confinados" },
          { id: "AEROS", label: "Aerosol" },
        ],
        u: any = {};
      return (
        e.areas.forEach((f) => {
          var d;
          if (
            ((d = f.subcategories) == null ||
              d.forEach((p) => {
                const g = p.area
                    .toUpperCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, ""),
                  x = l.find((b) => g.includes(b.id) || b.id.includes(g));
                x &&
                  (u[x.id] ||
                    (u[x.id] = {
                      area: x.label,
                      structure: 0,
                      addresses: 0,
                      occupied: 0,
                      definitivo: 0,
                      operacional: 0,
                      disponivel: 0,
                      percentage: 0,
                      isCategory: !1,
                    }),
                  (u[x.id].structure += p.structure),
                  (u[x.id].addresses += p.addresses),
                  (u[x.id].occupied += p.occupied),
                  (u[x.id].definitivo += p.definitivo),
                  (u[x.id].operacional += p.operacional),
                  (u[x.id].disponivel += p.disponivel));
              }),
            !f.subcategories || f.subcategories.length === 0)
          ) {
            const p = f.area
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, ""),
              g = l.find((x) => p.includes(x.id) || x.id.includes(p));
            g &&
              (u[g.id] ||
                (u[g.id] = {
                  area: g.label,
                  structure: 0,
                  addresses: 0,
                  occupied: 0,
                  definitivo: 0,
                  operacional: 0,
                  disponivel: 0,
                  percentage: 0,
                  isCategory: !1,
                }),
              (u[g.id].structure += f.structure),
              (u[g.id].addresses += f.addresses),
              (u[g.id].occupied += f.occupied),
              (u[g.id].definitivo += f.definitivo),
              (u[g.id].operacional += f.operacional),
              (u[g.id].disponivel += f.disponivel));
          }
        }),
        (Object.values(u) as any[])
          .map((f) => ({
            ...f,
            percentage: f.addresses > 0 ? (f.occupied / f.addresses) * 100 : 0,
          }))
          .sort((f, d) => d.percentage - f.percentage)
      );
    }, [e]);
  return e
    ? v.jsx("div", {
        className: "space-y-6 relative",
        children: v.jsx(UO, {
          mode: "wait",
          children:
            r === "analitico"
              ? v.jsxs(
                  Gr.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                    children: [
                      v.jsxs("div", {
                        className: G(
                          "rounded-xl border shadow-sm overflow-hidden flex flex-col transition-all duration-500",
                          t
                            ? `${t.contentBg} ${t.contentBorder} ${t.contentShadow}`
                            : "bg-white border-slate-100",
                        ),
                        children: [
                          v.jsxs("div", {
                            className: G(
                              "p-5 border-b bg-gradient-to-r from-blue-500/10 to-transparent",
                              t ? t.contentBorder : "border-slate-100",
                            ),
                            children: [
                              v.jsx("h3", {
                                className: G(
                                  "text-xs font-black tracking-[0.3em] uppercase mb-1",
                                  t ? "text-white" : "text-slate-900",
                                ),
                                children: "Estrutura & Endereços",
                              }),
                              v.jsx("p", {
                                className: G(
                                  "text-[9px] uppercase tracking-widest font-black",
                                  t ? "text-white" : "text-slate-950",
                                ),
                                children: "Mapeamento por Posição e Setor",
                              }),
                            ],
                          }),
                          v.jsx("div", {
                            className: "overflow-x-auto",
                            children: v.jsxs("table", {
                              className: "w-full text-left border-collapse",
                              children: [
                                v.jsx("thead", {
                                  children: v.jsxs("tr", {
                                    className: G(
                                      "text-[10px] uppercase tracking-[0.2em] border-b transition-all duration-500",
                                      t
                                        ? "text-zinc-100 border-zinc-800 bg-black/40"
                                        : "text-slate-950 border-slate-200 bg-slate-50",
                                    ),
                                    children: [
                                      v.jsx("th", {
                                        className: "py-4 px-4 font-black",
                                        children: "Posição / Setor (A)",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "py-4 px-4 text-right font-black",
                                        children: "Estrutura (B)",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "py-4 px-4 text-right font-black",
                                        children: "Endereços (C)",
                                      }),
                                    ],
                                  }),
                                }),
                                v.jsx("tbody", {
                                  children: e.areas.map((l) =>
                                    v.jsx(
                                      Tx,
                                      { area: l, showStructure: !0, theme: t },
                                      l.area,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: G(
                          "rounded-xl border shadow-sm overflow-hidden flex flex-col transition-all duration-500",
                          t
                            ? `${t.contentBg} ${t.contentBorder} ${t.contentShadow}`
                            : "bg-white border-slate-100",
                        ),
                        children: [
                          v.jsxs("div", {
                            className: G(
                              "p-5 bg-gradient-to-r from-amber-500/10 to-transparent",
                              !t && "border-b border-slate-100",
                            ),
                            children: [
                              v.jsx("h3", {
                                className: G(
                                  "text-xs font-black tracking-[0.3em] uppercase mb-1",
                                  t ? "text-white" : "text-slate-900",
                                ),
                                children: "Ocupação Total",
                              }),
                              v.jsx("p", {
                                className: G(
                                  "text-[9px] uppercase tracking-widest font-black",
                                  t ? "text-white" : "text-slate-950",
                                ),
                                children: "Status de Armazenagem",
                              }),
                            ],
                          }),
                          v.jsx("div", {
                            className: "overflow-x-auto",
                            children: v.jsxs("table", {
                              className: "w-full text-left border-collapse",
                              children: [
                                v.jsx("thead", {
                                  children: v.jsxs("tr", {
                                    className: G(
                                      "text-[10px] uppercase tracking-[0.2em] transition-all duration-500",
                                      t
                                        ? "text-zinc-100 bg-black/40"
                                        : "text-slate-950 border-b border-slate-200 bg-slate-50",
                                    ),
                                    children: [
                                      v.jsx("th", {
                                        className: "py-4 px-4 font-black",
                                        children: "Posição / Setor (A)",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "py-4 px-4 text-right font-black",
                                        children: "Ocupado (D)",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "py-4 px-4 text-right font-black",
                                        children: "% (H)",
                                      }),
                                    ],
                                  }),
                                }),
                                v.jsx("tbody", {
                                  children: e.areas.map((l) =>
                                    v.jsx(
                                      Tx,
                                      { area: l, showOccupied: !0, theme: t },
                                      l.area,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: G(
                          "rounded-xl border shadow-sm overflow-hidden flex flex-col transition-all duration-500",
                          t
                            ? `${t.contentBg} ${t.contentBorder} ${t.contentShadow}`
                            : "bg-white border-slate-100",
                        ),
                        children: [
                          v.jsxs("div", {
                            className: G(
                              "p-5 bg-gradient-to-r from-rose-500/10 to-transparent",
                              !t && "border-b border-slate-100",
                            ),
                            children: [
                              v.jsx("h3", {
                                className: G(
                                  "text-xs font-black tracking-[0.3em] uppercase mb-1",
                                  t ? t.contentTitle : "text-slate-900",
                                ),
                                children: "Posições Bloqueadas",
                              }),
                              v.jsx("p", {
                                className: G(
                                  "text-[9px] uppercase tracking-widest font-medium",
                                  t ? t.contentText : "text-slate-500",
                                ),
                                children: "Definitivo & Operacional",
                              }),
                            ],
                          }),
                          v.jsx("div", {
                            className: "overflow-x-auto",
                            children: v.jsxs("table", {
                              className: "w-full text-left border-collapse",
                              children: [
                                v.jsx("thead", {
                                  children: v.jsxs("tr", {
                                    className: G(
                                      "text-[10px] uppercase tracking-[0.2em] transition-all duration-500",
                                      t
                                        ? "text-zinc-100 bg-black/40"
                                        : "text-slate-950 border-b border-slate-200 bg-slate-50",
                                    ),
                                    children: [
                                      v.jsx("th", {
                                        className: "py-4 px-4 font-black",
                                        children: "Posição / Setor (A)",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "py-4 px-4 text-right font-black",
                                        children: "Total Bloqueado (E+F)",
                                      }),
                                    ],
                                  }),
                                }),
                                v.jsx("tbody", {
                                  children: e.areas.map((l) =>
                                    v.jsx(
                                      Tx,
                                      { area: l, showBlocked: !0, theme: t },
                                      l.area,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className: G(
                          "rounded-xl border shadow-sm overflow-hidden flex flex-col transition-all duration-500",
                          t
                            ? `${t.contentBg} ${t.contentBorder} ${t.contentShadow}`
                            : "bg-white border-slate-100",
                        ),
                        children: [
                          v.jsxs("div", {
                            className: G(
                              "p-5 bg-gradient-to-r from-emerald-500/10 to-transparent",
                              !t && "border-b border-slate-100",
                            ),
                            children: [
                              v.jsx("h3", {
                                className: G(
                                  "text-xs font-black tracking-[0.3em] uppercase mb-1",
                                  t ? t.contentTitle : "text-slate-900",
                                ),
                                children: "Espaço Disponível",
                              }),
                              v.jsx("p", {
                                className: G(
                                  "text-[9px] uppercase tracking-widest font-medium",
                                  t ? t.contentText : "text-slate-500",
                                ),
                                children: "Capacidade Ociosa",
                              }),
                            ],
                          }),
                          v.jsx("div", {
                            className: "overflow-x-auto",
                            children: v.jsxs("table", {
                              className: "w-full text-left border-collapse",
                              children: [
                                v.jsx("thead", {
                                  children: v.jsxs("tr", {
                                    className: G(
                                      "text-[10px] uppercase tracking-[0.2em] transition-all duration-500",
                                      t
                                        ? "text-zinc-100 bg-black/40"
                                        : "text-slate-950 border-b border-slate-200 bg-slate-50",
                                    ),
                                    children: [
                                      v.jsx("th", {
                                        className: "py-4 px-4 font-black",
                                        children: "Posição / Setor (A)",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "py-4 px-4 text-right font-black",
                                        children: "Disponível (G)",
                                      }),
                                    ],
                                  }),
                                }),
                                v.jsx("tbody", {
                                  children: e.areas.map((l) =>
                                    v.jsx(
                                      Tx,
                                      { area: l, showAvailable: !0, theme: t },
                                      l.area,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  "analitico",
                )
              : r === "mapa"
                ? v.jsx(ZDe, {
                    data: e,
                    theme: t,
                    getOccupancyColorClasses: i,
                    cn: G,
                  })
                : v.jsxs(
                    Gr.div,
                    {
                      initial: { opacity: 0, y: 10 },
                      animate: { opacity: 1, y: 0 },
                      exit: { opacity: 0, y: -10 },
                      className: "space-y-6",
                      children: [
                        v.jsxs("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4",
                          children: [
                            v.jsx(up, {
                              title: "Estrutura",
                              value: e.totalStructure.toLocaleString(),
                              icon: yp,
                              color: "bg-blue-500/20",
                              theme: t,
                            }),
                            v.jsx(up, {
                              title: "Endereços",
                              value: e.totalAddresses.toLocaleString(),
                              icon: nf,
                              color: "bg-zinc-500/20",
                              theme: t,
                            }),
                            v.jsx(up, {
                              title: "Ocupado",
                              value: e.totalOccupied.toLocaleString(),
                              percentage: `${e.globalPercentage.toFixed(1)}%`,
                              icon: ih,
                              color: "bg-orange-500/20",
                              theme: t,
                            }),
                            v.jsx(up, {
                              title: "Categorias Bloqueadas",
                              value: (
                                e.totalDefinitivo + e.totalOperacional
                              ).toLocaleString(),
                              percentage: `${(((e.totalDefinitivo + e.totalOperacional) / e.totalAddresses) * 100).toFixed(1)}%`,
                              icon: _f,
                              color: "bg-rose-500/20",
                              theme: t,
                            }),
                            v.jsx(up, {
                              title: "Disponível",
                              value: e.totalDisponivel.toLocaleString(),
                              percentage: `${((e.totalDisponivel / e.totalAddresses) * 100).toFixed(1)}%`,
                              icon: IS,
                              color: "bg-emerald-500/20",
                              theme: t,
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
                          children: [
                            v.jsx(h8, {
                              title: "Picking",
                              areaName: "Picking",
                              subtitle: "Destaque: Nível 1",
                              data: e,
                              theme: t,
                            }),
                            v.jsx(h8, {
                              title: "Pulmão",
                              areaName: "Pulmão",
                              subtitle: "Destaque: Níveis 2 ao 6",
                              data: e,
                              theme: t,
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: G(
                            "rounded-2xl border shadow-2xl overflow-hidden flex flex-col p-6 space-y-8 transition-all duration-500",
                            t
                              ? `${t.contentBg} ${t.contentBorder} ${t.contentShadow}`
                              : "bg-[#0f0f0f] border-white/10",
                          ),
                          children: [
                            v.jsxs("div", {
                              className:
                                "flex flex-col lg:flex-row justify-between items-center gap-6",
                              children: [
                                v.jsxs("div", {
                                  className: "flex items-center gap-4",
                                  children: [
                                    v.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        v.jsx("div", {
                                          className: G(
                                            "w-6 h-6 rounded-full flex items-center justify-center",
                                            t ? "bg-white/20" : "bg-black/10",
                                          ),
                                          children: v.jsx(v$, {
                                            className: G(
                                              "w-3.5 h-3.5",
                                              t ? "text-white" : "text-black",
                                            ),
                                          }),
                                        }),
                                        v.jsx("h3", {
                                          className: G(
                                            "text-xs font-black tracking-[0.2em] uppercase",
                                            t ? "text-white" : "text-black",
                                          ),
                                          children: "Alerta de Ocupação",
                                        }),
                                      ],
                                    }),
                                    v.jsx("div", {
                                      className: G(
                                        "h-4 w-[1px] mx-2",
                                        "bg-white/10",
                                      ),
                                    }),
                                    v.jsxs("div", {
                                      className: G(
                                        "p-1 rounded-lg flex items-center gap-1 border transition-all duration-500",
                                        t
                                          ? `${t.contentBg} ${t.contentBorder}`
                                          : "bg-[#1a1a1a] border-white/5",
                                      ),
                                      children: [
                                        v.jsx("button", {
                                          onClick: () => a("categoria"),
                                          className: G(
                                            "px-4 py-1.5 rounded-md text-[9px] font-black uppercase tracking-wider transition-all",
                                            n === "categoria"
                                              ? t
                                                ? "bg-zinc-950 text-white shadow-xl border border-white/10"
                                                : "bg-white text-zinc-950 shadow-lg"
                                              : "text-white/40 hover:text-white",
                                          ),
                                          children: "Por Categoria",
                                        }),
                                        v.jsx("button", {
                                          onClick: () => a("geral"),
                                          className: G(
                                            "px-4 py-1.5 rounded-md text-[9px] font-black uppercase tracking-wider transition-all",
                                            n === "geral"
                                              ? t
                                                ? "bg-zinc-950 text-white shadow-xl border border-white/10"
                                                : "bg-white text-zinc-950 shadow-lg"
                                              : "text-white/40 hover:text-white",
                                          ),
                                          children: "Geral",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v.jsxs("div", {
                                  className:
                                    "flex flex-wrap justify-center gap-6",
                                  children: [
                                    v.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        v.jsx("div", {
                                          className:
                                            "w-2.5 h-2.5 rounded-full bg-red-500",
                                        }),
                                        v.jsx("span", {
                                          className: G(
                                            "text-[9px] font-black uppercase tracking-widest",
                                            t.contentText,
                                          ),
                                          children: "Crítico (≥90%)",
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        v.jsx("div", {
                                          className:
                                            "w-2.5 h-2.5 rounded-full bg-orange-500",
                                        }),
                                        v.jsx("span", {
                                          className: G(
                                            "text-[9px] font-black uppercase tracking-widest",
                                            t.contentText,
                                          ),
                                          children: "Alto (≥80%)",
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        v.jsx("div", {
                                          className:
                                            "w-2.5 h-2.5 rounded-full bg-yellow-400",
                                        }),
                                        v.jsx("span", {
                                          className: G(
                                            "text-[9px] font-black uppercase tracking-widest",
                                            t.contentText,
                                          ),
                                          children: "Médio (≥70%)",
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        v.jsx("div", {
                                          className:
                                            "w-2.5 h-2.5 rounded-full bg-zinc-500",
                                        }),
                                        v.jsx("span", {
                                          className: G(
                                            "text-[9px] font-black uppercase tracking-widest",
                                            t.contentText,
                                          ),
                                          children: "Normal (<70%)",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            n === "categoria"
                              ? v.jsx("div", {
                                  className:
                                    "grid grid-cols-1 lg:grid-cols-3 gap-6",
                                  children: [
                                    "PICKING",
                                    "PICKING DUPLO",
                                    "PULMAO",
                                  ].map((l) => {
                                    var f;
                                    const u = e.areas.find(
                                      (d) =>
                                        d.area
                                          .toUpperCase()
                                          .normalize("NFD")
                                          .replace(/[\u0300-\u036f]/g, "") ===
                                        l,
                                    );
                                    return u
                                      ? v.jsxs(
                                          "div",
                                          {
                                            className: "space-y-4",
                                            children: [
                                              v.jsxs("div", {
                                                className:
                                                  "flex justify-between items-center px-2",
                                                children: [
                                                  v.jsx("h4", {
                                                    className: G(
                                                      "text-[11px] font-black uppercase tracking-[0.2em]",
                                                      "text-white",
                                                    ),
                                                    children: l,
                                                  }),
                                                  v.jsxs("span", {
                                                    className: G(
                                                      "text-[8px] uppercase font-bold tracking-widest",
                                                      t
                                                        ? "text-zinc-300"
                                                        : "text-white/40",
                                                    ),
                                                    children: [
                                                      ((f = u.subcategories) ==
                                                      null
                                                        ? void 0
                                                        : f.length) || 0,
                                                      " itens",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                              v.jsxs("div", {
                                                className:
                                                  "space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar",
                                                children: [
                                                  [...(u.subcategories || [])]
                                                    .sort(
                                                      (d, p) =>
                                                        p.percentage -
                                                        d.percentage,
                                                    )
                                                    .map((d, p) =>
                                                      v.jsx(
                                                        p8,
                                                        { sub: d, theme: t },
                                                        p,
                                                      ),
                                                    ),
                                                  (!u.subcategories ||
                                                    u.subcategories.length ===
                                                      0) &&
                                                    v.jsx("div", {
                                                      className: G(
                                                        "py-12 text-center rounded-xl border border-dashed",
                                                        t
                                                          ? "bg-slate-50 border-slate-200"
                                                          : "bg-white/5 border-white/10",
                                                      ),
                                                      children: v.jsx("p", {
                                                        className: G(
                                                          "text-[9px] uppercase font-bold tracking-widest",
                                                          t
                                                            ? "text-slate-300"
                                                            : "text-white/20",
                                                        ),
                                                        children:
                                                          "Nenhum subsetor encontrado",
                                                      }),
                                                    }),
                                                ],
                                              }),
                                            ],
                                          },
                                          l,
                                        )
                                      : null;
                                  }),
                                })
                              : v.jsx("div", {
                                  className:
                                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
                                  children:
                                    s.length > 0
                                      ? s.map((l, u) =>
                                          v.jsx(p8, { sub: l, theme: t }, u),
                                        )
                                      : v.jsx("div", {
                                          className: G(
                                            "col-span-full py-20 text-center rounded-2xl border border-dashed",
                                            t
                                              ? "bg-slate-50 border-slate-200"
                                              : "bg-white/5 border-white/10",
                                          ),
                                          children: v.jsx("p", {
                                            className: G(
                                              "text-xs uppercase font-black tracking-[0.3em]",
                                              t
                                                ? "text-slate-300"
                                                : "text-white/20",
                                            ),
                                            children:
                                              "Nenhum dado consolidado encontrado para os setores selecionados",
                                          }),
                                        }),
                                }),
                          ],
                        }),
                      ],
                    },
                    "dashboard",
                  ),
        }),
      })
    : v.jsxs(Gr.div, {
        initial: { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, scale: 1 },
        className: G(
          "min-h-[600px] flex flex-col items-center justify-center backdrop-blur-sm rounded-3xl border shadow-2xl p-12 text-center",
          t.bg,
          t.border,
        ),
        children: [
          v.jsx("div", {
            className: G(
              "w-24 h-24 rounded-3xl flex items-center justify-center mb-8 border",
              `bg-${t.primary}-500/10`,
              `border-${t.primary}-500/20`,
            ),
            children: v.jsx(nf, {
              className: G("w-12 h-12 animate-pulse", t.text),
            }),
          }),
          v.jsx("h2", {
            className: G(
              "text-3xl font-bold mb-4 uppercase tracking-wider",
              t.contentTitle,
            ),
            children: "Mapa de Ocupação",
          }),
          v.jsxs("p", {
            className: G("max-w-md mx-auto leading-relaxed", t.contentText),
            children: [
              "Nenhum dado de ocupação encontrado. Certifique-se de que a planilha possui a aba ",
              v.jsx("span", {
                className: G("font-bold", t.contentText),
                children: '"TABELA OCUPAÇÃO CD"',
              }),
              " com os dados configurados.",
            ],
          }),
        ],
      });
};
