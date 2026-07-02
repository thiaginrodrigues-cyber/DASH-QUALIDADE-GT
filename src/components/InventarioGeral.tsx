/* @ts-nocheck */
// Inventario Geral Component
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

export const a3e = ({ data: e, theme: t }) => {
  const [r, n] = A.useState("geral"),
    [a, i] = A.useState(""),
    [s, l] = A.useState("perda"),
    [u, f] = A.useState(""),
    [d, p] = A.useState("");
  if (!e)
    return v.jsxs("div", {
      className: G(
        "min-h-[400px] flex flex-col items-center justify-center p-12 text-center rounded-3xl border",
        t.contentBg,
        t.contentBorder,
      ),
      children: [
        v.jsx(nf, { className: "w-12 h-12 text-zinc-500 mb-4 animate-pulse" }),
        v.jsx("p", {
          className: "text-zinc-500 font-medium",
          children: "Dados do Inventário Geral não encontrados na planilha.",
        }),
        v.jsx("p", {
          className: "text-zinc-500 text-xs mt-2",
          children:
            'Certifique-se de que a aba "INVENTARIO GT" existe na planilha vinculada e possui colunas de SKU, Endereço e Área válidas.',
        }),
      ],
    });
  const g = e.items.filter(
      (T) =>
        T.sku.toLowerCase().includes(a.toLowerCase()) ||
        T.description.toLowerCase().includes(a.toLowerCase()) ||
        T.address.toLowerCase().includes(a.toLowerCase()),
    ),
    x = (T) => {
      switch (T) {
        case "perda":
          return "PERDA";
        case "pre_perda":
          return "PRÉ PERDA";
        case "fefo":
          return "FEFO";
        case "pre_fefo":
          return "PRÉ FEFO";
      }
    },
    b = (T) => {
      const N = x(T),
        C: any = {};
      return (
        e.items.forEach((P) => {
          if (P.category !== N) return;
          const M = C[P.sku],
            D = P.address ? P.address.trim() : "";
          M
            ? ((M.valueBR += P.valueBR || 0),
              D && !M.addresses.includes(D) && M.addresses.push(D),
              P.daysRemaining !== null &&
                (M.daysRemaining === 999 ||
                  P.daysRemaining < M.daysRemaining) &&
                ((M.daysRemaining = P.daysRemaining),
                (M.expirationDate = P.expirationDate)))
            : (C[P.sku] = {
                sku: P.sku,
                description: P.description || "",
                valueBR: P.valueBR || 0,
                expirationDate: P.expirationDate,
                daysRemaining: P.daysRemaining !== null ? P.daysRemaining : 999,
                addresses: D ? [D] : [],
                category: P.category,
              });
        }),
        (Object.values(C) as any[])
          .filter(
            (P) =>
              P.sku.toLowerCase().includes(u.toLowerCase()) ||
              P.description.toLowerCase().includes(u.toLowerCase()) ||
              P.addresses.some((M) =>
                M.toLowerCase().includes(u.toLowerCase()),
              ),
          )
          .sort((P, M) => P.daysRemaining - M.daysRemaining)
      );
    },
    y = (T) =>
      T == null || isNaN(T)
        ? "R$ 0,00"
        : T.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }),
    _ = [...e.items]
      .filter((T) => T.daysRemaining !== null && T.daysRemaining <= 90)
      .sort((T, N) => (T.daysRemaining || 0) - (N.daysRemaining || 0))
      .slice(0, 4);
  return v.jsxs("div", {
    className: "space-y-6",
    children: [
      v.jsxs("div", {
        className:
          "flex flex-wrap gap-2 p-1 bg-black/20 rounded-2xl w-fit border border-white/5",
        children: [
          v.jsx("button", {
            onClick: () => n("geral"),
            className: G(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer",
              r === "geral"
                ? t.active
                : "text-zinc-300 hover:text-white hover:bg-white/5",
            ),
            children: "Visão Geral",
          }),
          v.jsx("button", {
            onClick: () => n("fefo"),
            className: G(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer",
              r === "fefo"
                ? t.active
                : "text-zinc-300 hover:text-white hover:bg-white/5",
            ),
            children: "Situação",
          }),
          v.jsx("button", {
            onClick: () => n("analise_geral"),
            className: G(
              "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 cursor-pointer",
              r === "analise_geral"
                ? t.active
                : "text-zinc-300 hover:text-white hover:bg-white/5",
            ),
            children: "Análise Geral da Situação",
          }),
        ],
      }),
      v.jsx(UO, {
        mode: "wait",
        children:
          r === "geral"
            ? v.jsxs(
                Gr.div,
                {
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -10 },
                  className: "space-y-6",
                  children: [
                    v.jsxs("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                      children: [
                        v.jsxs("div", {
                          className: G(
                            "p-8 rounded-3xl border shadow-xl flex flex-col items-center text-center transition-all",
                            t.contentBg,
                            t.contentBorder,
                          ),
                          children: [
                            v.jsx("div", {
                              className: G(
                                "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border",
                                t.primary === "blue"
                                  ? "bg-white/20 border-white/30"
                                  : "bg-blue-500/10 border-blue-500/20",
                              ),
                              children: v.jsx(Ox, {
                                className: G(
                                  "w-8 h-8",
                                  t.primary === "blue"
                                    ? "text-white"
                                    : "text-blue-500",
                                ),
                              }),
                            }),
                            v.jsx("h3", {
                              className: G(
                                "text-xl font-bold mb-2",
                                t.contentTitle,
                              ),
                              children: "TOTAL DE SKU´S",
                            }),
                            v.jsx("div", {
                              className: G(
                                "text-6xl font-black mb-2",
                                t.contentTitle,
                              ),
                              children: (
                                e.uniqueSKUCount || 0
                              ).toLocaleString(),
                            }),
                          ],
                        }),
                        v.jsx("div", {
                          className: G(
                            "p-8 rounded-3xl border shadow-xl flex flex-col items-center text-center transition-all lg:col-span-2",
                            t.contentBg,
                            t.contentBorder,
                          ),
                          children: v.jsxs("div", {
                            className:
                              "w-full flex flex-col md:flex-row justify-between items-center gap-6",
                            children: [
                              v.jsxs("div", {
                                className: "text-left",
                                children: [
                                  v.jsx("h2", {
                                    className: G(
                                      "text-2xl font-black uppercase tracking-wider mb-1",
                                      t.contentTitle,
                                    ),
                                    children: "Análise de Itens",
                                  }),
                                  v.jsx("p", {
                                    className: G(
                                      "text-xs font-semibold",
                                      t.primary === "blue"
                                        ? "text-blue-50"
                                        : "text-zinc-300",
                                    ),
                                    children:
                                      "Filtro por SKU ou Descrição para listagem detalhada.",
                                  }),
                                ],
                              }),
                              v.jsx("div", {
                                className: "relative w-full max-w-sm",
                                children: v.jsx("input", {
                                  type: "text",
                                  placeholder: "Pesquisar SKU ou Descrição...",
                                  value: a,
                                  onChange: (T) => i(T.target.value),
                                  className: G(
                                    "w-full border rounded-xl px-5 py-3 text-sm focus:outline-none focus:ring-2 transition-all",
                                    t.primary === "blue"
                                      ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 ring-white/30"
                                      : "bg-black/20 border border-white/10 text-white ring-blue-500/50",
                                  ),
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    v.jsx("div", {
                      className: G(
                        "rounded-3xl border shadow-2xl overflow-hidden transition-all duration-500",
                        t.contentBg,
                        t.contentBorder,
                      ),
                      children: v.jsx("div", {
                        className:
                          "overflow-x-auto max-h-[600px] custom-scrollbar",
                        children: v.jsxs("table", {
                          className: "w-full text-left border-collapse",
                          children: [
                            v.jsx("thead", {
                              className: "sticky top-0 z-20",
                              children: v.jsxs("tr", {
                                className: G(
                                  "border-b transition-all duration-500",
                                  t.primary === "blue"
                                    ? "bg-blue-800 border-white/10"
                                    : "bg-[#111] border-white/5",
                                ),
                                children: [
                                  v.jsx("th", {
                                    className: G(
                                      "px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em]",
                                      t.primary === "blue"
                                        ? "text-blue-50"
                                        : "text-zinc-200",
                                    ),
                                    children: "SKU",
                                  }),
                                  v.jsx("th", {
                                    className: G(
                                      "px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em]",
                                      t.primary === "blue"
                                        ? "text-blue-50"
                                        : "text-zinc-200",
                                    ),
                                    children: "Descrição do Produto",
                                  }),
                                  v.jsx("th", {
                                    className: G(
                                      "px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-right",
                                      t.primary === "blue"
                                        ? "text-blue-50"
                                        : "text-zinc-200",
                                    ),
                                    children: "Shelf Life (AL)",
                                  }),
                                ],
                              }),
                            }),
                            v.jsxs("tbody", {
                              className: "divide-y divide-white/5",
                              children: [
                                g.slice(0, 500).map((T, N) =>
                                  v.jsxs(
                                    "tr",
                                    {
                                      className:
                                        "hover:bg-white/5 transition-colors group",
                                      children: [
                                        v.jsx("td", {
                                          className: G(
                                            "px-6 py-4 text-xs font-bold font-mono",
                                            t.contentTitle,
                                          ),
                                          children: T.sku,
                                        }),
                                        v.jsx("td", {
                                          className: G(
                                            "px-6 py-4 text-xs font-medium group-hover:text-white transition-colors",
                                            t.primary === "blue"
                                              ? "text-blue-50"
                                              : "text-zinc-300",
                                          ),
                                          children: T.description,
                                        }),
                                        v.jsx("td", {
                                          className:
                                            "px-6 py-4 text-xs font-bold text-right text-emerald-400 font-mono",
                                          children: T.shelfLifeAL || "N/A",
                                        }),
                                      ],
                                    },
                                    `${T.sku}-${N}`,
                                  ),
                                ),
                                g.length === 0 &&
                                  v.jsx("tr", {
                                    children: v.jsx("td", {
                                      colSpan: 3,
                                      className:
                                        "px-6 py-12 text-center text-zinc-300 italic text-sm font-semibold",
                                      children:
                                        "Nenhum item encontrado para a pesquisa.",
                                    }),
                                  }),
                                g.length > 500 &&
                                  v.jsx("tr", {
                                    children: v.jsxs("td", {
                                      colSpan: 3,
                                      className:
                                        "px-6 py-4 text-center text-zinc-300 text-[10px] font-bold uppercase tracking-widest bg-zinc-950/50",
                                      children: [
                                        "Mostrando os primeiros 500 itens de ",
                                        g.length,
                                        ". Use a pesquisa para filtrar.",
                                      ],
                                    }),
                                  }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                },
                "geral",
              )
            : r === "fefo"
              ? v.jsxs(
                  Gr.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    className: "space-y-6",
                    children: [
                      v.jsxs("div", {
                        className:
                          "bg-slate-950 p-6 rounded-3xl border border-rose-500/30 shadow-2xl relative overflow-hidden",
                        children: [
                          v.jsx("div", {
                            className:
                              "absolute top-0 right-0 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none",
                          }),
                          v.jsxs("div", {
                            className: "flex items-center gap-3 mb-4",
                            children: [
                              v.jsx("div", {
                                className:
                                  "w-10 h-10 rounded-xl bg-red-500/20 border border-red-500/30 flex items-center justify-center",
                                children: v.jsx(_f, {
                                  className:
                                    "w-5 h-5 text-red-500 animate-pulse",
                                }),
                              }),
                              v.jsxs("div", {
                                children: [
                                  v.jsx("h3", {
                                    className:
                                      "text-sm font-black uppercase tracking-wider text-rose-300",
                                    children: "Painel de Alertas FEFO Críticos",
                                  }),
                                  v.jsx("p", {
                                    className:
                                      "text-[11px] text-zinc-200 font-extrabold uppercase",
                                    children:
                                      "Estes são os produtos mais próximos de vencer globalmente no inventário geral",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          v.jsxs("div", {
                            className:
                              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6",
                            children: [
                              _.map((T, N) => {
                                const C = T.daysRemaining || 0;
                                let P =
                                    "text-rose-200 border-rose-500/40 bg-rose-950/70 shadow-[0_0_10px_rgba(244,63,94,0.2)]",
                                  M =
                                    "bg-slate-900 border border-rose-500/30 shadow-lg shadow-rose-950/20",
                                  D =
                                    "text-rose-200 bg-rose-950/80 border border-rose-500/50 px-2.5 py-1 rounded-xl font-mono text-xs font-black animate-pulse";
                                return (
                                  C > 60
                                    ? ((P =
                                        "text-sky-200 border-sky-500/40 bg-sky-950/70 shadow-[0_0_10px_rgba(14,165,233,0.2)]"),
                                      (M =
                                        "bg-slate-900 border border-sky-500/30 shadow-lg shadow-sky-950/20"),
                                      (D =
                                        "text-sky-200 bg-sky-950/80 border border-sky-500/50 px-2.5 py-1 rounded-xl font-mono text-xs font-black"))
                                    : C > 30
                                      ? ((P =
                                          "text-amber-200 border-amber-500/40 bg-amber-950/70 shadow-[0_0_10px_rgba(245,158,11,0.2)]"),
                                        (M =
                                          "bg-slate-900 border border-amber-500/30 shadow-lg shadow-amber-950/20"),
                                        (D =
                                          "text-amber-200 bg-amber-950/80 border border-amber-500/50 px-2.5 py-1 rounded-xl font-mono text-xs font-black"))
                                      : C > 15 &&
                                        ((P =
                                          "text-orange-200 border-orange-500/40 bg-orange-950/70 shadow-[0_0_10px_rgba(249,115,22,0.2)]"),
                                        (M =
                                          "bg-slate-900 border border-orange-500/30 shadow-lg shadow-orange-950/20"),
                                        (D =
                                          "text-orange-200 bg-orange-950/80 border border-orange-500/50 px-2.5 py-1 rounded-xl font-mono text-xs font-black")),
                                  v.jsxs(
                                    "div",
                                    {
                                      className: G(
                                        "p-4 rounded-2xl border flex flex-col justify-between transition-all hover:scale-[1.02] duration-300",
                                        M,
                                      ),
                                      children: [
                                        v.jsxs("div", {
                                          children: [
                                            v.jsxs("div", {
                                              className:
                                                "flex justify-between items-start gap-2 mb-2",
                                              children: [
                                                v.jsx("span", {
                                                  className:
                                                    "font-mono text-xs font-black text-white",
                                                  children: T.sku,
                                                }),
                                                v.jsx("span", {
                                                  className: G(
                                                    "px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-wider border",
                                                    P,
                                                  ),
                                                  children: T.category,
                                                }),
                                              ],
                                            }),
                                            v.jsx("p", {
                                              className:
                                                "text-[10px] text-zinc-200 font-bold truncate mb-3",
                                              title: T.description,
                                              children: T.description,
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "border-t border-white/5 pt-3 mt-1 space-y-2",
                                          children: [
                                            v.jsxs("div", {
                                              className:
                                                "flex justify-between text-[9px] font-bold text-zinc-300",
                                              children: [
                                                v.jsx("span", {
                                                  children: "POSIÇÃO:",
                                                }),
                                                v.jsx("span", {
                                                  className:
                                                    "font-black text-cyan-300 font-mono",
                                                  children: T.address || "N/A",
                                                }),
                                              ],
                                            }),
                                            v.jsxs("div", {
                                              className:
                                                "flex justify-between text-[9px] font-bold text-zinc-300",
                                              children: [
                                                v.jsx("span", {
                                                  children: "VALOR BR:",
                                                }),
                                                v.jsx("span", {
                                                  className:
                                                    "font-black text-emerald-300 font-mono",
                                                  children: y(T.valueBR),
                                                }),
                                              ],
                                            }),
                                            v.jsxs("div", {
                                              className:
                                                "flex justify-between text-[9px] font-bold text-zinc-300",
                                              children: [
                                                v.jsx("span", {
                                                  children: "VENCIMENTO:",
                                                }),
                                                v.jsx("span", {
                                                  className:
                                                    "font-black text-zinc-100 font-mono",
                                                  children: T.expirationDate,
                                                }),
                                              ],
                                            }),
                                            v.jsxs("div", {
                                              className:
                                                "flex justify-between items-center text-[10px] font-black pt-1",
                                              children: [
                                                v.jsx("span", {
                                                  className: "text-zinc-200",
                                                  children: "VALIDADE:",
                                                }),
                                                v.jsxs("span", {
                                                  className: D,
                                                  children: [C, " d"],
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    },
                                    `${T.sku}-${N}`,
                                  )
                                );
                              }),
                              _.length === 0 &&
                                v.jsx("div", {
                                  className:
                                    "col-span-full py-6 text-center text-zinc-300 text-xs italic uppercase tracking-wider",
                                  children:
                                    "Nenhum item com vencimento ≤ 90 dias registrado.",
                                }),
                            ],
                          }),
                        ],
                      }),
                      v.jsx("div", {
                        className:
                          "grid grid-cols-2 md:grid-cols-4 p-1.5 bg-black/40 rounded-2xl border border-white/5 gap-1.5 shadow-lg",
                        children: [
                          "perda",
                          "pre_perda",
                          "fefo",
                          "pre_fefo",
                        ].map((T) => {
                          const N = b(T).length;
                          let C =
                            "bg-rose-500/30 text-rose-300 border border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.15)]";
                          return (
                            T === "pre_fefo"
                              ? (C =
                                  "bg-sky-500/30 text-sky-300 border border-sky-500/50 shadow-[0_0_15px_rgba(14,165,233,0.15)]")
                              : T === "fefo"
                                ? (C =
                                    "bg-amber-500/30 text-amber-300 border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]")
                                : T === "pre_perda" &&
                                  (C =
                                    "bg-orange-500/30 text-orange-300 border border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.15)]"),
                            v.jsxs(
                              "button",
                              {
                                onClick: () => l(T),
                                className: G(
                                  "px-4 py-3 rounded-xl font-black uppercase text-[10px] tracking-wider transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer",
                                  s === T
                                    ? C
                                    : "text-zinc-300 hover:text-white hover:bg-white/5 border border-transparent",
                                ),
                                children: [
                                  v.jsx("span", {
                                    children:
                                      T === "perda"
                                        ? "PERDA (≤15d)"
                                        : T === "pre_perda"
                                          ? "PRÉ PERDA (16-30d)"
                                          : T === "fefo"
                                            ? "FEFO (31-60d)"
                                            : "PRÉ FEFO (61-90d)",
                                  }),
                                  v.jsxs("span", {
                                    className: "text-xs font-serif opacity-85",
                                    children: ["(", N, " itens)"],
                                  }),
                                ],
                              },
                              T,
                            )
                          );
                        }),
                      }),
                      v.jsx("div", {
                        className: G(
                          "p-6 rounded-3xl border shadow-xl transition-all",
                          t.contentBg,
                          t.contentBorder,
                        ),
                        children: v.jsxs("div", {
                          className:
                            "flex flex-col md:flex-row justify-between items-center gap-6",
                          children: [
                            v.jsxs("div", {
                              children: [
                                v.jsx("h3", {
                                  className: G(
                                    "text-lg font-black uppercase tracking-wider mb-1",
                                    t.contentTitle,
                                  ),
                                  children:
                                    s === "perda"
                                      ? "Itens em Perda Imediata"
                                      : s === "pre_perda"
                                        ? "Itens em Pré Perda"
                                        : s === "fefo"
                                          ? "Itens em Zona FEFO"
                                          : "Itens em Zona Pré FEFO",
                                }),
                                v.jsx("p", {
                                  className:
                                    "text-xs text-zinc-300 font-semibold",
                                  children:
                                    "Visualizando SKUs filtrados com seus respectivos dias para progredir de critério.",
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className: "relative w-full max-w-sm",
                              children: [
                                v.jsx("input", {
                                  type: "text",
                                  placeholder: `Filtrar listagem de ${x(s)}...`,
                                  value: u,
                                  onChange: (T) => f(T.target.value),
                                  className: G(
                                    "w-full border rounded-xl px-5 py-3 text-xs focus:outline-none focus:ring-2 transition-all",
                                    t.primary === "blue"
                                      ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 ring-white/30"
                                      : "bg-black/20 border border-white/10 text-white ring-blue-500/50",
                                  ),
                                }),
                                v.jsx(gm, {
                                  className:
                                    "absolute right-4 top-3.5 w-4 h-4 text-zinc-300",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                      v.jsx("div", {
                        className: "grid grid-cols-1 gap-6",
                        children: v.jsx("div", {
                          className: G(
                            "p-6 rounded-3xl border shadow-2xl overflow-hidden",
                            t.contentBg,
                            t.contentBorder,
                          ),
                          children: v.jsx("div", {
                            className:
                              "overflow-x-auto max-h-[500px] custom-scrollbar",
                            children: v.jsxs("table", {
                              className: "w-full text-left border-collapse",
                              children: [
                                v.jsx("thead", {
                                  children: v.jsxs("tr", {
                                    className: G(
                                      "border-b border-white/10",
                                      t.primary === "blue"
                                        ? "bg-blue-800"
                                        : "bg-[#090909]",
                                    ),
                                    children: [
                                      v.jsx("th", {
                                        className:
                                          "px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-zinc-100",
                                        children: "SKU / Descrição",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-center",
                                        children: "Posição (B)",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-right",
                                        children: "Valor BR",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-right",
                                        children: "Data Validade",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-right",
                                        children: "Contagem Regressiva",
                                      }),
                                      v.jsx("th", {
                                        className:
                                          "px-4 py-3.5 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-center",
                                        children:
                                          "Dias para o Próximo Critério",
                                      }),
                                    ],
                                  }),
                                }),
                                v.jsxs("tbody", {
                                  className: "divide-y divide-white/5",
                                  children: [
                                    b(s).map((T, N) => {
                                      const C = T.daysRemaining || 0,
                                        P =
                                          C > 60
                                            ? `${C - 60}d`
                                            : v.jsx("span", {
                                                className:
                                                  "text-emerald-300 font-black bg-emerald-950/50 border border-emerald-800/30 px-2 py-0.5 rounded-lg",
                                                children: "Atingido (≤60d)",
                                              }),
                                        M =
                                          C > 30
                                            ? `${C - 30}d`
                                            : v.jsx("span", {
                                                className:
                                                  "text-amber-300 font-black bg-amber-950/50 border border-amber-800/30 px-2 py-0.5 rounded-lg",
                                                children: "Atingido (≤30d)",
                                              }),
                                        D =
                                          C > 15
                                            ? `${C - 15}d`
                                            : v.jsx("span", {
                                                className:
                                                  "text-rose-300 font-black bg-rose-950/60 border border-rose-800/40 px-2 py-0.5 rounded-lg animate-pulse",
                                                children: "Crítico (≤15d)",
                                              });
                                      return v.jsxs(
                                        "tr",
                                        {
                                          className:
                                            "hover:bg-white/5 transition-colors group",
                                          children: [
                                            v.jsxs("td", {
                                              className:
                                                "px-4 py-4 min-w-[200px]",
                                              children: [
                                                v.jsx("div", {
                                                  className: G(
                                                    "text-sm font-black font-mono leading-none",
                                                    t.contentTitle,
                                                  ),
                                                  children: T.sku,
                                                }),
                                                v.jsx("div", {
                                                  className:
                                                    "text-[10px] font-extrabold text-zinc-200 mt-1 truncate max-w-sm",
                                                  title: T.description,
                                                  children: T.description,
                                                }),
                                              ],
                                            }),
                                            v.jsx("td", {
                                              className:
                                                "px-4 py-4 text-center",
                                              children: v.jsx("div", {
                                                className:
                                                  "flex flex-wrap gap-1 justify-center max-w-[220px] mx-auto",
                                                children:
                                                  T.addresses &&
                                                  T.addresses.length > 0
                                                    ? T.addresses.map((k, O) =>
                                                        v.jsx(
                                                          "span",
                                                          {
                                                            className:
                                                              "font-mono text-[10px] font-black text-cyan-300 bg-cyan-950/45 border border-cyan-500/30 px-2 py-0.5 rounded-lg shadow-sm",
                                                            children: k,
                                                          },
                                                          O,
                                                        ),
                                                      )
                                                    : v.jsx("span", {
                                                        className:
                                                          "text-zinc-500 italic text-xs",
                                                        children: "N/A",
                                                      }),
                                              }),
                                            }),
                                            v.jsx("td", {
                                              className: "px-4 py-4 text-right",
                                              children: v.jsx("span", {
                                                className:
                                                  "font-mono text-xs font-black text-emerald-400",
                                                children: y(T.valueBR),
                                              }),
                                            }),
                                            v.jsx("td", {
                                              className: "px-4 py-4 text-right",
                                              children: v.jsx("span", {
                                                className:
                                                  "font-bold text-zinc-200 font-mono",
                                                children: T.expirationDate,
                                              }),
                                            }),
                                            v.jsx("td", {
                                              className:
                                                "px-4 py-4 text-right whitespace-nowrap",
                                              children: v.jsxs("span", {
                                                className: G(
                                                  "text-xs font-black font-mono px-2.5 py-1 rounded-xl border",
                                                  C <= 15
                                                    ? "text-rose-200 bg-rose-950/50 border-rose-800/50"
                                                    : C <= 30
                                                      ? "text-orange-200 bg-orange-950/50 border-orange-800/50"
                                                      : C <= 60
                                                        ? "text-amber-200 bg-amber-950/50 border-amber-800/50"
                                                        : "text-sky-200 bg-sky-950/50 border-sky-800/50",
                                                ),
                                                children: [C, " dias"],
                                              }),
                                            }),
                                            v.jsx("td", {
                                              className: "px-4 py-4",
                                              children: v.jsxs("div", {
                                                className:
                                                  "flex flex-col gap-1 text-[10px] text-zinc-200 font-bold justify-center items-center font-mono",
                                                children: [
                                                  v.jsxs("div", {
                                                    className:
                                                      "flex w-full max-w-[200px] justify-between border-b border-white/5 pb-0.5",
                                                    children: [
                                                      v.jsx("span", {
                                                        children: "PERDA:",
                                                      }),
                                                      v.jsx("span", {
                                                        className:
                                                          "font-black text-white",
                                                        children: D,
                                                      }),
                                                    ],
                                                  }),
                                                  v.jsxs("div", {
                                                    className:
                                                      "flex w-full max-w-[200px] justify-between border-b border-white/5 pb-0.5",
                                                    children: [
                                                      v.jsx("span", {
                                                        children: "PRÉ PERDA:",
                                                      }),
                                                      v.jsx("span", {
                                                        className:
                                                          "font-black text-white",
                                                        children: M,
                                                      }),
                                                    ],
                                                  }),
                                                  v.jsxs("div", {
                                                    className:
                                                      "flex w-full max-w-[200px] justify-between",
                                                    children: [
                                                      v.jsx("span", {
                                                        children: "FEFO:",
                                                      }),
                                                      v.jsx("span", {
                                                        className:
                                                          "font-black text-white",
                                                        children: P,
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            }),
                                          ],
                                        },
                                        `${T.sku}-${N}`,
                                      );
                                    }),
                                    b(s).length === 0 &&
                                      v.jsx("tr", {
                                        children: v.jsx("td", {
                                          colSpan: 6,
                                          className:
                                            "px-4 py-12 text-center text-xs text-zinc-500 font-extrabold uppercase tracking-widest",
                                          children:
                                            "Nenhum item encontrado nesta categoria de vencimento.",
                                        }),
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  },
                  "fefo",
                )
              : v.jsx(
                  Gr.div,
                  {
                    initial: { opacity: 0, y: 10 },
                    animate: { opacity: 1, y: 0 },
                    exit: { opacity: 0, y: -10 },
                    className: "space-y-6",
                    children: (() => {
                      const T = {};
                      e.items.forEach((W) => {
                        if (W.category === "NORMAL") return;
                        const oe = `${W.sku}-${W.category}`,
                          Ae = T[oe],
                          ie = W.address ? W.address.trim() : "";
                        Ae
                          ? ((Ae.valueBR += W.valueBR || 0),
                            W.daysRemaining !== void 0 &&
                              W.daysRemaining < Ae.daysRemaining &&
                              (Ae.daysRemaining = W.daysRemaining),
                            ie &&
                              !Ae.addresses.includes(ie) &&
                              Ae.addresses.push(ie),
                            (Ae.occurrences += 1))
                          : (T[oe] = {
                              sku: W.sku,
                              description: W.description || "",
                              valueBR: W.valueBR || 0,
                              daysRemaining:
                                W.daysRemaining !== void 0
                                  ? W.daysRemaining
                                  : 999,
                              category: W.category,
                              addresses: ie ? [ie] : [],
                              occurrences: 1,
                            });
                      });
                      const N = Object.keys(T).map((W) => {
                          const oe = T[W];
                          return {
                            sku: oe.sku,
                            description: oe.description,
                            valueBR: oe.valueBR,
                            daysRemaining:
                              oe.daysRemaining === 999 ? 0 : oe.daysRemaining,
                            category: oe.category,
                            address: oe.addresses.filter(Boolean).join(", "),
                            occurrences: oe.occurrences,
                          };
                        }),
                        C = N.filter((W) => W.category === "PERDA").length,
                        P = N.filter((W) => W.category === "PERDA").reduce(
                          (W, oe) => W + oe.valueBR,
                          0,
                        ),
                        M = N.filter((W) => W.category === "PRÉ PERDA").length,
                        D = N.filter((W) => W.category === "PRÉ PERDA").reduce(
                          (W, oe) => W + oe.valueBR,
                          0,
                        ),
                        k = N.filter((W) => W.category === "FEFO").length,
                        O = N.filter((W) => W.category === "FEFO").reduce(
                          (W, oe) => W + oe.valueBR,
                          0,
                        ),
                        I = N.filter((W) => W.category === "PRÉ FEFO").length,
                        B = N.filter((W) => W.category === "PRÉ FEFO").reduce(
                          (W, oe) => W + oe.valueBR,
                          0,
                        ),
                        V = C + M + k + I,
                        L = P + D + O + B,
                        z = (W) =>
                          [...N]
                            .filter((oe) => oe.category === W)
                            .sort((oe, Ae) => Ae.valueBR - oe.valueBR)
                            .slice(0, 10),
                        ge = [...N].sort((W, oe) => oe.valueBR - W.valueBR),
                        pe = ge.filter(
                          (W) =>
                            W.sku.toLowerCase().includes(d.toLowerCase()) ||
                            W.description
                              .toLowerCase()
                              .includes(d.toLowerCase()) ||
                            W.category
                              .toLowerCase()
                              .includes(d.toLowerCase()) ||
                            W.address.toLowerCase().includes(d.toLowerCase()),
                        );
                      return v.jsxs("div", {
                        className: "space-y-6",
                        children: [
                          v.jsxs("div", {
                            className:
                              "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-slate-900/50 p-6 rounded-3xl border border-white/5 shadow-xl",
                            children: [
                              v.jsxs("div", {
                                children: [
                                  v.jsx("h2", {
                                    className:
                                      "text-xl font-black uppercase tracking-wider text-white",
                                    children: "Análise Geral da Situação",
                                  }),
                                  v.jsx("p", {
                                    className:
                                      "text-xs text-zinc-300 font-medium",
                                    children:
                                      "Consolidado financeiro e de criticidade por situação de vencimento do inventário.",
                                  }),
                                ],
                              }),
                              v.jsxs("div", {
                                className:
                                  "bg-slate-950 px-5 py-3 rounded-2xl border border-white/5 flex flex-col items-end",
                                children: [
                                  v.jsx("span", {
                                    className:
                                      "text-[9px] font-black text-zinc-400 uppercase tracking-wider",
                                    children: "Total Acumulado Sob Risco",
                                  }),
                                  v.jsx("span", {
                                    className:
                                      "text-xl font-black text-emerald-400 font-mono",
                                    children: y(L),
                                  }),
                                  v.jsxs("span", {
                                    className:
                                      "text-[10px] text-zinc-300 font-bold",
                                    children: [V, " SKUs no total"],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          v.jsxs("div", {
                            className:
                              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                            children: [
                              v.jsxs("div", {
                                className:
                                  "p-5 rounded-2xl border bg-slate-900 border-rose-500/20 shadow-lg hover:border-rose-500/40 transition-all duration-300",
                                children: [
                                  v.jsxs("div", {
                                    className:
                                      "flex justify-between items-start mb-3",
                                    children: [
                                      v.jsx("span", {
                                        className:
                                          "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-rose-950/70 text-rose-300 border border-rose-500/40 animate-pulse",
                                        children: "PERDA (≤15d)",
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-lg bg-rose-500/10 flex items-center justify-center",
                                        children: v.jsx(_f, {
                                          className: "w-4 h-4 text-rose-400",
                                        }),
                                      }),
                                    ],
                                  }),
                                  v.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      v.jsx("div", {
                                        className:
                                          "text-[10px] font-black text-zinc-400 uppercase tracking-widest",
                                        children: "Valor Somado",
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "text-xl font-black text-rose-300 font-mono",
                                        children: y(P),
                                      }),
                                      v.jsxs("div", {
                                        className:
                                          "text-xs font-bold text-zinc-300",
                                        children: [
                                          C,
                                          " produtos em perda imediata",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              v.jsxs("div", {
                                className:
                                  "p-5 rounded-2xl border bg-slate-900 border-orange-500/20 shadow-lg hover:border-orange-500/40 transition-all duration-300",
                                children: [
                                  v.jsxs("div", {
                                    className:
                                      "flex justify-between items-start mb-3",
                                    children: [
                                      v.jsx("span", {
                                        className:
                                          "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-orange-950/70 text-orange-300 border border-orange-500/40",
                                        children: "PRÉ PERDA (16-30d)",
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center",
                                        children: v.jsx(Ld, {
                                          className: "w-4 h-4 text-orange-400",
                                        }),
                                      }),
                                    ],
                                  }),
                                  v.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      v.jsx("div", {
                                        className:
                                          "text-[10px] font-black text-zinc-400 uppercase tracking-widest",
                                        children: "Valor Somado",
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "text-xl font-black text-orange-300 font-mono",
                                        children: y(D),
                                      }),
                                      v.jsxs("div", {
                                        className:
                                          "text-xs font-bold text-zinc-300",
                                        children: [M, " produtos em atenção"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              v.jsxs("div", {
                                className:
                                  "p-5 rounded-2xl border bg-slate-900 border-amber-500/20 shadow-lg hover:border-amber-500/40 transition-all duration-300",
                                children: [
                                  v.jsxs("div", {
                                    className:
                                      "flex justify-between items-start mb-3",
                                    children: [
                                      v.jsx("span", {
                                        className:
                                          "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-amber-950/70 text-amber-300 border border-amber-500/40",
                                        children: "FEFO (31-60d)",
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center",
                                        children: v.jsx(fO, {
                                          className: "w-4 h-4 text-amber-400",
                                        }),
                                      }),
                                    ],
                                  }),
                                  v.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      v.jsx("div", {
                                        className:
                                          "text-[10px] font-black text-zinc-400 uppercase tracking-widest",
                                        children: "Valor Somado",
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "text-xl font-black text-amber-300 font-mono",
                                        children: y(O),
                                      }),
                                      v.jsxs("div", {
                                        className:
                                          "text-xs font-bold text-zinc-300",
                                        children: [
                                          k,
                                          " produtos na zona de giro",
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              v.jsxs("div", {
                                className:
                                  "p-5 rounded-2xl border bg-slate-900 border-sky-500/20 shadow-lg hover:border-sky-500/40 transition-all duration-300",
                                children: [
                                  v.jsxs("div", {
                                    className:
                                      "flex justify-between items-start mb-3",
                                    children: [
                                      v.jsx("span", {
                                        className:
                                          "px-2.5 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider bg-sky-950/70 text-sky-300 border border-sky-500/40",
                                        children: "PRÉ FEFO (61-90d)",
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center",
                                        children: v.jsx(ih, {
                                          className: "w-4 h-4 text-sky-400",
                                        }),
                                      }),
                                    ],
                                  }),
                                  v.jsxs("div", {
                                    className: "space-y-1",
                                    children: [
                                      v.jsx("div", {
                                        className:
                                          "text-[10px] font-black text-zinc-400 uppercase tracking-widest",
                                        children: "Valor Somado",
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "text-xl font-black text-sky-300 font-mono",
                                        children: y(B),
                                      }),
                                      v.jsxs("div", {
                                        className:
                                          "text-xs font-bold text-zinc-300",
                                        children: [I, " produtos monitorados"],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          v.jsxs("div", {
                            className:
                              "bg-slate-950/70 p-6 rounded-3xl border border-rose-500/20 shadow-2xl relative overflow-hidden space-y-4",
                            children: [
                              v.jsx("div", {
                                className:
                                  "absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none",
                              }),
                              v.jsxs("div", {
                                className: "flex items-center gap-3",
                                children: [
                                  v.jsx("div", {
                                    className:
                                      "w-10 h-10 rounded-xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center",
                                    children: v.jsx(SEe, {
                                      className:
                                        "w-5 h-5 text-rose-400 animate-pulse",
                                    }),
                                  }),
                                  v.jsxs("div", {
                                    children: [
                                      v.jsx("h3", {
                                        className:
                                          "text-sm font-black uppercase tracking-wider text-rose-300",
                                        children:
                                          "Painel de Alertas Críticos (Top 10 por Situação)",
                                      }),
                                      v.jsx("p", {
                                        className:
                                          "text-[11px] text-zinc-300 font-bold uppercase",
                                        children:
                                          "Produtos de maior valor financeiro sob risco imediato em cada categoria",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              v.jsxs("div", {
                                className:
                                  "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-6",
                                children: [
                                  v.jsx("div", {
                                    className:
                                      "bg-slate-900/60 rounded-2xl border border-rose-500/20 p-4 flex flex-col justify-between",
                                    children: v.jsxs("div", {
                                      children: [
                                        v.jsxs("div", {
                                          className:
                                            "flex items-center justify-between border-b border-rose-500/20 pb-2 mb-3",
                                          children: [
                                            v.jsx("span", {
                                              className:
                                                "text-[11px] font-black text-rose-300 uppercase tracking-wider",
                                              children: "Top 10 Perda (≤15d)",
                                            }),
                                            v.jsxs("span", {
                                              className:
                                                "text-[10px] font-black px-2 py-0.5 rounded bg-rose-950/60 border border-rose-500/30 text-rose-300 font-mono",
                                              children: [
                                                "R$ ",
                                                P > 0
                                                  ? z("PERDA")
                                                      .reduce(
                                                        (W, oe) =>
                                                          W + oe.valueBR,
                                                        0,
                                                      )
                                                      .toLocaleString("pt-BR", {
                                                        maximumFractionDigits: 0,
                                                      })
                                                  : "0",
                                              ],
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-1",
                                          children: [
                                            z("PERDA").map((W, oe) =>
                                              v.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "p-2 rounded-lg bg-rose-950/20 border border-rose-500/10 hover:bg-rose-950/40 transition-colors flex justify-between items-center text-[10px] font-medium text-zinc-200",
                                                  children: [
                                                    v.jsxs("div", {
                                                      className:
                                                        "truncate max-w-[110px]",
                                                      title: W.description,
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "font-bold text-white font-mono block text-[11px]",
                                                          children: W.sku,
                                                        }),
                                                        v.jsx("span", {
                                                          className:
                                                            "text-zinc-400 block text-[9px] truncate",
                                                          children:
                                                            W.description,
                                                        }),
                                                      ],
                                                    }),
                                                    v.jsxs("div", {
                                                      className:
                                                        "text-right flex flex-col items-end",
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "font-black text-emerald-300 font-mono text-[11px]",
                                                          children: y(
                                                            W.valueBR,
                                                          ),
                                                        }),
                                                        v.jsxs("span", {
                                                          className:
                                                            "text-[9px] font-black text-rose-300",
                                                          children: [
                                                            W.daysRemaining,
                                                            " dias",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                `${W.sku}-${oe}`,
                                              ),
                                            ),
                                            z("PERDA").length === 0 &&
                                              v.jsx("div", {
                                                className:
                                                  "text-center py-8 text-zinc-500 text-[10px] uppercase font-bold tracking-widest italic",
                                                children: "Sem registros",
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  v.jsx("div", {
                                    className:
                                      "bg-slate-900/60 rounded-2xl border border-orange-500/20 p-4 flex flex-col justify-between",
                                    children: v.jsxs("div", {
                                      children: [
                                        v.jsxs("div", {
                                          className:
                                            "flex items-center justify-between border-b border-orange-500/20 pb-2 mb-3",
                                          children: [
                                            v.jsx("span", {
                                              className:
                                                "text-[11px] font-black text-orange-300 uppercase tracking-wider",
                                              children:
                                                "Top 10 Pré Perda (16-30d)",
                                            }),
                                            v.jsxs("span", {
                                              className:
                                                "text-[10px] font-black px-2 py-0.5 rounded bg-orange-950/60 border border-orange-500/30 text-orange-300 font-mono",
                                              children: [
                                                "R$ ",
                                                D > 0
                                                  ? z("PRÉ PERDA")
                                                      .reduce(
                                                        (W, oe) =>
                                                          W + oe.valueBR,
                                                        0,
                                                      )
                                                      .toLocaleString("pt-BR", {
                                                        maximumFractionDigits: 0,
                                                      })
                                                  : "0",
                                              ],
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-1",
                                          children: [
                                            z("PRÉ PERDA").map((W, oe) =>
                                              v.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "p-2 rounded-lg bg-orange-950/20 border border-orange-500/10 hover:bg-orange-950/40 transition-colors flex justify-between items-center text-[10px] font-medium text-zinc-200",
                                                  children: [
                                                    v.jsxs("div", {
                                                      className:
                                                        "truncate max-w-[110px]",
                                                      title: W.description,
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "font-bold text-white font-mono block text-[11px]",
                                                          children: W.sku,
                                                        }),
                                                        v.jsx("span", {
                                                          className:
                                                            "text-zinc-400 block text-[9px] truncate",
                                                          children:
                                                            W.description,
                                                        }),
                                                      ],
                                                    }),
                                                    v.jsxs("div", {
                                                      className:
                                                        "text-right flex flex-col items-end",
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "font-black text-emerald-300 font-mono text-[11px]",
                                                          children: y(
                                                            W.valueBR,
                                                          ),
                                                        }),
                                                        v.jsxs("span", {
                                                          className:
                                                            "text-[9px] font-black text-orange-300",
                                                          children: [
                                                            W.daysRemaining,
                                                            " dias",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                `${W.sku}-${oe}`,
                                              ),
                                            ),
                                            z("PRÉ PERDA").length === 0 &&
                                              v.jsx("div", {
                                                className:
                                                  "text-center py-8 text-zinc-500 text-[10px] uppercase font-bold tracking-widest italic",
                                                children: "Sem registros",
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  v.jsx("div", {
                                    className:
                                      "bg-slate-900/60 rounded-2xl border border-amber-500/20 p-4 flex flex-col justify-between",
                                    children: v.jsxs("div", {
                                      children: [
                                        v.jsxs("div", {
                                          className:
                                            "flex items-center justify-between border-b border-amber-500/20 pb-2 mb-3",
                                          children: [
                                            v.jsx("span", {
                                              className:
                                                "text-[11px] font-black text-amber-300 uppercase tracking-wider",
                                              children: "Top 10 FEFO (31-60d)",
                                            }),
                                            v.jsxs("span", {
                                              className:
                                                "text-[10px] font-black px-2 py-0.5 rounded bg-amber-950/60 border border-amber-500/30 text-amber-300 font-mono",
                                              children: [
                                                "R$ ",
                                                O > 0
                                                  ? z("FEFO")
                                                      .reduce(
                                                        (W, oe) =>
                                                          W + oe.valueBR,
                                                        0,
                                                      )
                                                      .toLocaleString("pt-BR", {
                                                        maximumFractionDigits: 0,
                                                      })
                                                  : "0",
                                              ],
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-1",
                                          children: [
                                            z("FEFO").map((W, oe) =>
                                              v.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "p-2 rounded-lg bg-amber-950/20 border border-amber-500/10 hover:bg-amber-950/40 transition-colors flex justify-between items-center text-[10px] font-medium text-zinc-200",
                                                  children: [
                                                    v.jsxs("div", {
                                                      className:
                                                        "truncate max-w-[110px]",
                                                      title: W.description,
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "font-bold text-white font-mono block text-[11px]",
                                                          children: W.sku,
                                                        }),
                                                        v.jsx("span", {
                                                          className:
                                                            "text-zinc-400 block text-[9px] truncate",
                                                          children:
                                                            W.description,
                                                        }),
                                                      ],
                                                    }),
                                                    v.jsxs("div", {
                                                      className:
                                                        "text-right flex flex-col items-end",
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "font-black text-emerald-300 font-mono text-[11px]",
                                                          children: y(
                                                            W.valueBR,
                                                          ),
                                                        }),
                                                        v.jsxs("span", {
                                                          className:
                                                            "text-[9px] font-black text-amber-300",
                                                          children: [
                                                            W.daysRemaining,
                                                            " dias",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                `${W.sku}-${oe}`,
                                              ),
                                            ),
                                            z("FEFO").length === 0 &&
                                              v.jsx("div", {
                                                className:
                                                  "text-center py-8 text-zinc-500 text-[10px] uppercase font-bold tracking-widest italic",
                                                children: "Sem registros",
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                  v.jsx("div", {
                                    className:
                                      "bg-slate-900/60 rounded-2xl border border-sky-500/20 p-4 flex flex-col justify-between",
                                    children: v.jsxs("div", {
                                      children: [
                                        v.jsxs("div", {
                                          className:
                                            "flex items-center justify-between border-b border-sky-500/20 pb-2 mb-3",
                                          children: [
                                            v.jsx("span", {
                                              className:
                                                "text-[11px] font-black text-sky-300 uppercase tracking-wider",
                                              children:
                                                "Top 10 Pré FEFO (61-90d)",
                                            }),
                                            v.jsxs("span", {
                                              className:
                                                "text-[10px] font-black px-2 py-0.5 rounded bg-sky-950/60 border border-sky-500/30 text-sky-300 font-mono",
                                              children: [
                                                "R$ ",
                                                B > 0
                                                  ? z("PRÉ FEFO")
                                                      .reduce(
                                                        (W, oe) =>
                                                          W + oe.valueBR,
                                                        0,
                                                      )
                                                      .toLocaleString("pt-BR", {
                                                        maximumFractionDigits: 0,
                                                      })
                                                  : "0",
                                              ],
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "space-y-2 max-h-[300px] overflow-y-auto custom-scrollbar pr-1",
                                          children: [
                                            z("PRÉ FEFO").map((W, oe) =>
                                              v.jsxs(
                                                "div",
                                                {
                                                  className:
                                                    "p-2 rounded-lg bg-sky-950/20 border border-sky-500/10 hover:bg-sky-950/40 transition-colors flex justify-between items-center text-[10px] font-medium text-zinc-200",
                                                  children: [
                                                    v.jsxs("div", {
                                                      className:
                                                        "truncate max-w-[110px]",
                                                      title: W.description,
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "font-bold text-white font-mono block text-[11px]",
                                                          children: W.sku,
                                                        }),
                                                        v.jsx("span", {
                                                          className:
                                                            "text-zinc-400 block text-[9px] truncate",
                                                          children:
                                                            W.description,
                                                        }),
                                                      ],
                                                    }),
                                                    v.jsxs("div", {
                                                      className:
                                                        "text-right flex flex-col items-end",
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "font-black text-emerald-300 font-mono text-[11px]",
                                                          children: y(
                                                            W.valueBR,
                                                          ),
                                                        }),
                                                        v.jsxs("span", {
                                                          className:
                                                            "text-[9px] font-black text-sky-300",
                                                          children: [
                                                            W.daysRemaining,
                                                            " dias",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                },
                                                `${W.sku}-${oe}`,
                                              ),
                                            ),
                                            z("PRÉ FEFO").length === 0 &&
                                              v.jsx("div", {
                                                className:
                                                  "text-center py-8 text-zinc-500 text-[10px] uppercase font-bold tracking-widest italic",
                                                children: "Sem registros",
                                              }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          v.jsxs("div", {
                            className: G(
                              "p-6 rounded-3xl border shadow-xl transition-all",
                              t.contentBg,
                              t.contentBorder,
                            ),
                            children: [
                              v.jsxs("div", {
                                className:
                                  "flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",
                                children: [
                                  v.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      v.jsx("div", {
                                        className:
                                          "w-8 h-8 rounded-lg bg-yellow-500/15 flex items-center justify-center border border-yellow-500/20",
                                        children: v.jsx(oEe, {
                                          className: "w-4 h-4 text-yellow-400",
                                        }),
                                      }),
                                      v.jsxs("div", {
                                        children: [
                                          v.jsx("h3", {
                                            className:
                                              "text-md font-black uppercase tracking-wider text-white",
                                            children:
                                              "Ranking de Riscos de Valores (Maior para Menor)",
                                          }),
                                          v.jsx("p", {
                                            className:
                                              "text-[11px] text-zinc-300 font-bold",
                                            children:
                                              "Lista ordenada decrescentemente por valor financeiro (Valor BR) de todos os itens com vencimento abaixo de 90 dias.",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  v.jsxs("div", {
                                    className: "relative w-full max-w-sm",
                                    children: [
                                      v.jsx("input", {
                                        type: "text",
                                        placeholder:
                                          "Filtrar ranking por SKU, descrição...",
                                        value: d,
                                        onChange: (W) => p(W.target.value),
                                        className: G(
                                          "w-full border rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:ring-2 transition-all",
                                          t.primary === "blue"
                                            ? "bg-white/10 border-white/20 text-white placeholder:text-white/40 ring-white/30"
                                            : "bg-black/20 border border-white/10 text-white ring-blue-500/50",
                                        ),
                                      }),
                                      v.jsx(gm, {
                                        className:
                                          "absolute right-4 top-3 w-4 h-4 text-zinc-400",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              v.jsx("div", {
                                className:
                                  "overflow-x-auto max-h-[500px] custom-scrollbar border border-white/5 rounded-2xl",
                                children: v.jsxs("table", {
                                  className: "w-full text-left border-collapse",
                                  children: [
                                    v.jsx("thead", {
                                      children: v.jsxs("tr", {
                                        className: G(
                                          "border-b border-white/10",
                                          t.primary === "blue"
                                            ? "bg-blue-800"
                                            : "bg-[#090909]",
                                        ),
                                        children: [
                                          v.jsx("th", {
                                            className:
                                              "px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-center w-16",
                                            children: "Rank",
                                          }),
                                          v.jsx("th", {
                                            className:
                                              "px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100",
                                            children: "SKU / Descrição",
                                          }),
                                          v.jsx("th", {
                                            className:
                                              "px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-center",
                                            children: "Posição",
                                          }),
                                          v.jsx("th", {
                                            className:
                                              "px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-center",
                                            children: "Situação",
                                          }),
                                          v.jsx("th", {
                                            className:
                                              "px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-center",
                                            children: "Validade",
                                          }),
                                          v.jsx("th", {
                                            className:
                                              "px-4 py-3 text-[10px] font-black uppercase tracking-widest text-zinc-100 text-right",
                                            children: "Valor BR",
                                          }),
                                        ],
                                      }),
                                    }),
                                    v.jsxs("tbody", {
                                      className: "divide-y divide-white/5",
                                      children: [
                                        pe.slice(0, 250).map((W, oe) => {
                                          const Ae = ge.findIndex(
                                              (H) =>
                                                H.sku === W.sku &&
                                                H.category === W.category,
                                            ),
                                            ie = Ae !== -1 ? Ae + 1 : oe + 1,
                                            he = W.daysRemaining || 0;
                                          let j =
                                            "text-rose-200 bg-rose-950/60 border border-rose-500/40 animate-pulse";
                                          return (
                                            W.category === "PRÉ FEFO"
                                              ? (j =
                                                  "text-sky-200 bg-sky-950/60 border border-sky-500/40")
                                              : W.category === "FEFO"
                                                ? (j =
                                                    "text-amber-200 bg-amber-950/60 border border-amber-500/40")
                                                : W.category === "PRÉ PERDA" &&
                                                  (j =
                                                    "text-orange-200 bg-orange-950/60 border border-orange-500/40"),
                                            v.jsxs(
                                              "tr",
                                              {
                                                className:
                                                  "hover:bg-white/5 transition-colors group",
                                                children: [
                                                  v.jsx("td", {
                                                    className:
                                                      "px-4 py-4 text-center font-black text-zinc-300 font-mono text-xs",
                                                    children:
                                                      ie <= 3
                                                        ? v.jsx("span", {
                                                            className: G(
                                                              "inline-flex items-center justify-center w-6 h-6 rounded-full font-black text-black",
                                                              ie === 1
                                                                ? "bg-yellow-400"
                                                                : ie === 2
                                                                  ? "bg-zinc-300"
                                                                  : "bg-amber-600",
                                                            ),
                                                            children: ie,
                                                          })
                                                        : v.jsxs("span", {
                                                            children: ["#", ie],
                                                          }),
                                                  }),
                                                  v.jsxs("td", {
                                                    className:
                                                      "px-4 py-4 min-w-[200px]",
                                                    children: [
                                                      v.jsx("div", {
                                                        className:
                                                          "text-xs font-black font-mono text-white leading-none",
                                                        children: W.sku,
                                                      }),
                                                      v.jsx("div", {
                                                        className:
                                                          "text-[10px] text-zinc-400 font-semibold mt-1 truncate max-w-sm",
                                                        title: W.description,
                                                        children: W.description,
                                                      }),
                                                    ],
                                                  }),
                                                  v.jsx("td", {
                                                    className:
                                                      "px-4 py-4 text-center whitespace-nowrap",
                                                    children: v.jsxs("span", {
                                                      title: W.address || "N/A",
                                                      className:
                                                        "inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-300 bg-cyan-950/30 border border-cyan-800/30 px-2 py-0.5 rounded-lg max-w-[160px] truncate",
                                                      children: [
                                                        v.jsx("span", {
                                                          className: "truncate",
                                                          children:
                                                            W.address || "N/A",
                                                        }),
                                                        W.occurrences > 1 &&
                                                          v.jsxs("span", {
                                                            className:
                                                              "inline-flex items-center justify-center px-1.5 py-0.5 text-[9px] font-black bg-zinc-800 text-zinc-400 rounded border border-white/5 cursor-help",
                                                            title: `${W.occurrences} registros agrupados nesta categoria`,
                                                            children: [
                                                              W.occurrences,
                                                              "x",
                                                            ],
                                                          }),
                                                      ],
                                                    }),
                                                  }),
                                                  v.jsx("td", {
                                                    className:
                                                      "px-4 py-4 text-center",
                                                    children: v.jsx("span", {
                                                      className: G(
                                                        "px-2.5 py-0.5 rounded text-[8px] font-black uppercase tracking-wider",
                                                        j,
                                                      ),
                                                      children: W.category,
                                                    }),
                                                  }),
                                                  v.jsx("td", {
                                                    className:
                                                      "px-4 py-4 text-center whitespace-nowrap",
                                                    children: v.jsxs("span", {
                                                      className: G(
                                                        "text-xs font-bold font-mono px-2 py-0.5 rounded-lg border",
                                                        he <= 15
                                                          ? "text-rose-200 bg-rose-950/30 border-rose-800/30"
                                                          : he <= 30
                                                            ? "text-orange-200 bg-orange-950/30 border-orange-800/30"
                                                            : he <= 60
                                                              ? "text-amber-200 bg-amber-950/30 border-amber-800/30"
                                                              : "text-sky-200 bg-sky-950/30 border-sky-800/30",
                                                      ),
                                                      children: [he, " d"],
                                                    }),
                                                  }),
                                                  v.jsx("td", {
                                                    className:
                                                      "px-4 py-4 text-right",
                                                    children: v.jsx("span", {
                                                      className:
                                                        "font-mono text-xs font-black text-emerald-400",
                                                      children: y(W.valueBR),
                                                    }),
                                                  }),
                                                ],
                                              },
                                              `${W.sku}-${oe}`,
                                            )
                                          );
                                        }),
                                        pe.length === 0 &&
                                          v.jsx("tr", {
                                            children: v.jsx("td", {
                                              colSpan: 6,
                                              className:
                                                "px-4 py-12 text-center text-xs text-zinc-500 font-extrabold uppercase tracking-widest",
                                              children:
                                                "Nenhum registro encontrado no ranking.",
                                            }),
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      });
                    })(),
                  },
                  "analise_geral",
                ),
      }),
    ],
  });
};
