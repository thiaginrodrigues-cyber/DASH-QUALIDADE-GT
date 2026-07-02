/* @ts-nocheck */
// Cortes Dashboard Component
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
  Nx,
  kc,
} from "./Compat";
import { Ex, up, p8, Tx, h8, T3e } from "./Helpers";

export const JDe = function JDe({ data: e = [], wmsData: t = [], theme: r }) {
  var He, Y, St, Fe, At;
  const [n, a] = A.useState("comercial"),
    i = A.useMemo(() => (n === "comercial" ? e : t), [n, e, t]),
    [s, l] = A.useState(""),
    [u, f] = A.useState("ALL"),
    [d, p] = A.useState([]),
    [g, x] = A.useState(!1),
    [b, y] = A.useState("geral"),
    [_, T] = A.useState(null),
    [N, C] = A.useState(""),
    [P, M] = A.useState("day"),
    [D, k] = A.useState(1),
    O = 12,
    [I, B] = A.useState(1),
    V = 10,
    L = A.useMemo(
      () => [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro",
      ],
      [],
    ),
    z = (se) =>
      `${["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"][se.getMonth()]}/${se.getFullYear()}`,
    ge = (se) => {
      const be = new Date(se),
        Ue = be.getDay(),
        Je = be.getDate() - Ue + (Ue === 0 ? -6 : 1),
        nt = new Date(be.setDate(Je)),
        yt = new Date(nt);
      yt.setDate(nt.getDate() + 6);
      const st = (Nt) =>
        `${String(Nt.getDate()).padStart(2, "0")}/${String(Nt.getMonth() + 1).padStart(2, "0")}`;
      return `Sem: ${st(nt)} a ${st(yt)}`;
    },
    pe = A.useMemo(
      () =>
        i.map((se) => {
          let be = null;
          const Ue = String(se.date || se.dateObj || "").trim();
          if (Ue)
            if (Ue.includes("/")) {
              const Je = Ue.split("/");
              if (Je.length === 3) {
                const nt = parseInt(Je[0], 10),
                  yt = parseInt(Je[1], 10) - 1,
                  st = parseInt(Je[2], 10);
                if (!isNaN(nt) && !isNaN(yt) && !isNaN(st)) {
                  const Nt = st < 100 ? 2e3 + st : st;
                  be = new Date(Nt, yt, nt);
                }
              }
            } else {
              const Je = Ue.match(/^(\d{4})-(\d{2})-(\d{2})/);
              if (Je) {
                const nt = parseInt(Je[1], 10),
                  yt = parseInt(Je[2], 10) - 1,
                  st = parseInt(Je[3], 10);
                be = new Date(nt, yt, st);
              } else {
                const nt = Ue.match(/^(\d{2})-(\d{2})-(\d{4})/);
                if (nt) {
                  const yt = parseInt(nt[1], 10),
                    st = parseInt(nt[2], 10) - 1,
                    Nt = parseInt(nt[3], 10);
                  be = new Date(Nt, st, yt);
                } else {
                  const yt = new Date(Ue);
                  isNaN(yt.getTime()) || (be = yt);
                }
              }
            }
          return { ...se, dateObject: be };
        }),
      [i],
    ),
    W = A.useMemo(() => {
      const se = new Set();
      return (
        pe.forEach((be) => {
          be.reason && be.reason.trim() && se.add(be.reason.trim());
        }),
        Array.from(se).sort()
      );
    }, [pe]),
    oe = A.useMemo(() => {
      const se = new Set();
      return (
        pe.forEach((be) => {
          const Ue = be.dateObject;
          if (Ue) {
            const Je = Ue.getFullYear(),
              nt = String(Ue.getMonth() + 1).padStart(2, "0");
            se.add(`${Je}-${nt}`);
          }
        }),
        Array.from(se).sort()
      );
    }, [pe]),
    Ae = (se) => {
      const [be, Ue] = se.split("-"),
        Je = parseInt(Ue) - 1;
      return `${L[Je]} / ${be}`;
    },
    ie = A.useMemo(
      () =>
        pe.filter((se) => {
          const be =
              se.sku.toLowerCase().includes(s.toLowerCase()) ||
              se.description.toLowerCase().includes(s.toLowerCase()),
            Ue = u === "ALL" || se.reason === u;
          let Je = !0;
          if (d.length > 0)
            if (se.dateObject) {
              const yt = se.dateObject.getFullYear(),
                st = String(se.dateObject.getMonth() + 1).padStart(2, "0"),
                Nt = `${yt}-${st}`;
              Je = d.includes(Nt);
            } else Je = !1;
          let nt = !0;
          if (N)
            if (se.dateObject) {
              const yt = se.dateObject.getFullYear(),
                st = String(se.dateObject.getMonth() + 1).padStart(2, "0"),
                Nt = String(se.dateObject.getDate()).padStart(2, "0");
              nt = `${yt}-${st}-${Nt}` === N;
            } else nt = !1;
          return be && Ue && Je && nt;
        }),
      [pe, s, u, d, N],
    ),
    he = A.useMemo(() => {
      let se = 0,
        be = 0;
      const Ue = new Set(),
        Je: any = {};
      ie.forEach((st) => {
        ((se += st.value),
          (be += st.quantity),
          Ue.add(st.sku),
          st.reason && (Je[st.reason] = (Je[st.reason] || 0) + st.value));
      });
      let nt = "Nenhum",
        yt = 0;
      return (
        (Object.entries(Je) as any[]).forEach(([st, Nt]) => {
          Nt > yt && ((yt = Nt), (nt = st));
        }),
        {
          totalValue: se,
          totalQty: be,
          skuCount: Ue.size,
          topReason: nt,
          topReasonValue: yt,
        }
      );
    }, [ie]),
    j = A.useMemo(() => {
      const se: any = {};
      return (
        ie.forEach((be) => {
          (se[be.sku] ||
            (se[be.sku] = {
              sku: be.sku,
              description: be.description,
              totalQty: 0,
              totalValue: 0,
              count: 0,
              lastReason: be.reason,
            }),
            (se[be.sku].totalQty += be.quantity),
            (se[be.sku].totalValue += be.value),
            (se[be.sku].count += 1),
            (se[be.sku].lastReason = be.reason));
        }),
        (Object.values(se) as any[]).sort((be, Ue) => Ue.totalValue - be.totalValue)
      );
    }, [ie]),
    H = A.useMemo(() => j.reduce((se, be) => se + be.totalValue, 0), [j]),
    Q = A.useMemo(() => {
      if (!_) return [];
      const se = ie.filter((Ue) => Ue.sku === _),
        be: any = {};
      return (
        se.forEach((Ue) => {
          const Je = Ue.pedido ? String(Ue.pedido).trim() : "",
            nt = `${Ue.date}_${Ue.reason}_${Je}`;
          (be[nt] ||
            (be[nt] = {
              date: Ue.date,
              dateObject: Ue.dateObject || null,
              reason: Ue.reason,
              quantity: 0,
              value: 0,
              pedido: Je,
            }),
            (be[nt].quantity += Ue.quantity),
            (be[nt].value += Ue.value));
        }),
        (Object.values(be) as any[]).sort((Ue, Je) =>
          Ue.dateObject && Je.dateObject
            ? Je.dateObject.getTime() - Ue.dateObject.getTime()
            : Je.date.localeCompare(Ue.date),
        )
      );
    }, [_, ie]),
    Z = A.useMemo(() => {
      const se: any = {},
        be: any = {},
        Ue: any = {};
      ie.forEach((st) => {
        const Nt = st.dateObject;
        if (!Nt) return;
        const Yt = st.date,
          tn = Nt.getFullYear(),
          Vn = String(Nt.getMonth() + 1).padStart(2, "0"),
          da = String(Nt.getDate()).padStart(2, "0"),
          ir = `${tn}-${Vn}-${da}`;
        (se[ir] ||
          (se[ir] = {
            dateStr: Yt,
            sortKey: ir,
            totalValue: 0,
            totalQty: 0,
            occurrences: 0,
          }),
          (se[ir].totalValue += st.value),
          (se[ir].totalQty += st.quantity),
          (se[ir].occurrences += 1));
        const Sn = ge(Nt),
          Tt = new Date(Nt),
          xr = Tt.getDay(),
          cn = Tt.getDate() - xr + (xr === 0 ? -6 : 1);
        Tt.setDate(cn);
        const Jt = Tt.getFullYear(),
          Qe = String(Tt.getMonth() + 1).padStart(2, "0"),
          We = String(Tt.getDate()).padStart(2, "0"),
          rt = `${Jt}-${Qe}-${We}`;
        (be[rt] ||
          (be[rt] = {
            weekStr: Sn,
            sortKey: rt,
            totalValue: 0,
            totalQty: 0,
            occurrences: 0,
          }),
          (be[rt].totalValue += st.value),
          (be[rt].totalQty += st.quantity),
          (be[rt].occurrences += 1));
        const _t = z(Nt),
          bt = `${Nt.getFullYear()}-${String(Nt.getMonth() + 1).padStart(2, "0")}`;
        (Ue[bt] ||
          (Ue[bt] = {
            monthStr: _t,
            sortKey: bt,
            totalValue: 0,
            totalQty: 0,
            occurrences: 0,
          }),
          (Ue[bt].totalValue += st.value),
          (Ue[bt].totalQty += st.quantity),
          (Ue[bt].occurrences += 1));
      });
      const Je = (Object.values(se) as any[]).sort((st, Nt) =>
          st.sortKey.localeCompare(Nt.sortKey),
        ),
        nt = (Object.values(be) as any[]).sort((st, Nt) =>
          st.sortKey.localeCompare(Nt.sortKey),
        ),
        yt = (Object.values(Ue) as any[]).sort((st, Nt) =>
          st.sortKey.localeCompare(Nt.sortKey),
        );
      return { daily: Je, weekly: nt, monthly: yt };
    }, [ie]),
    ne = A.useMemo(
      () =>
        P === "day"
          ? Z.daily.map((se) => ({
              name: se.dateStr,
              valor: parseFloat(se.totalValue.toFixed(2)),
              quantidade: se.totalQty,
            }))
          : P === "week"
            ? Z.weekly.map((se) => ({
                name: se.weekStr,
                valor: parseFloat(se.totalValue.toFixed(2)),
                quantidade: se.totalQty,
              }))
            : Z.monthly.map((se) => ({
                name: se.monthStr,
                valor: parseFloat(se.totalValue.toFixed(2)),
                quantidade: se.totalQty,
              })),
      [Z, P],
    ),
    ue = A.useMemo(() => {
      const se: any = {};
      ie.forEach((yt) => {
        yt.reason && (se[yt.reason] = (se[yt.reason] || 0) + yt.value);
      });
      const be = (Object.entries(se) as any[])
          .map(([yt, st]) => ({ name: yt, value: parseFloat(st.toFixed(2)) }))
          .sort((yt, st) => st.value - yt.value),
        Ue = be.slice(0, 5),
        Je = Ue.reduce((yt, st) => yt + st.value, 0),
        nt = he.totalValue - Je;
      return (
        nt > 0 &&
          be.length > 5 &&
          Ue.push({ name: "Outros Motivos", value: parseFloat(nt.toFixed(2)) }),
        Ue
      );
    }, [ie, he.totalValue]),
    Ce = ["#f43f5e", "#ec4899", "#d946ef", "#a855f7", "#8b5cf6", "#a1a1aa"];
  (Math.ceil(ie.length / O),
    A.useMemo(() => {
      const se = (D - 1) * O;
      return ie.slice(se, se + O);
    }, [ie, D]));
  const Pe = Math.ceil(j.length / V),
    de = A.useMemo(() => {
      const se = (I - 1) * V;
      return j.slice(se, se + V);
    }, [j, I]),
    ce = (se) =>
      new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(se);
  return e.length === 0 && t.length === 0
    ? v.jsxs(Gr.div, {
        initial: { opacity: 0, y: 15 },
        animate: { opacity: 1, y: 0 },
        className: G(
          "w-full rounded-3xl border p-12 text-center shadow-lg backdrop-blur-md transition-colors duration-500 flex flex-col items-center justify-center min-h-[500px]",
          r.contentBg,
          r.contentBorder,
          r.contentShadow,
        ),
        children: [
          v.jsx("div", {
            className: G(
              "w-20 h-20 rounded-2xl flex items-center justify-center mb-6 border bg-rose-500/10 border-rose-500/20",
            ),
            children: v.jsx(nf, {
              className: "w-10 h-10 text-rose-500 animate-pulse",
            }),
          }),
          v.jsx("h2", {
            className: G(
              "text-2xl font-black mb-3 tracking-wider uppercase",
              r.contentTitle,
            ),
            children: "Mapeamento de Cortes Não Encontrado",
          }),
          v.jsxs("p", {
            className: G(
              "max-w-xl mx-auto text-sm leading-relaxed mb-8 text-slate-500",
            ),
            children: [
              "Este módulo exibe análises financeiras e de motivos sobre cortes operacionais de mercadoria. Para carregar dados aqui, faça o upload de uma planilha no seletor de dados contendo uma aba exatamente com o nome ",
              v.jsx("span", {
                className: "font-bold text-rose-600 underline",
                children: "CORTES",
              }),
              ".",
            ],
          }),
          v.jsxs("div", {
            className:
              "bg-zinc-950/5 border border-zinc-800/10 p-6 rounded-2xl max-w-lg w-full text-left font-sans shadow-inner",
            children: [
              v.jsx("span", {
                className:
                  "text-xs font-black uppercase text-rose-500 tracking-widest block mb-4",
                children: "Estrutura Esperada do Excel",
              }),
              v.jsxs("div", {
                className: "grid grid-cols-2 gap-x-6 gap-y-2 text-xs",
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("div", {
                        className: "w-2.5 h-2.5 rounded bg-rose-500",
                      }),
                      v.jsx("span", {
                        className: "font-semibold",
                        children: "Coluna B:",
                      }),
                      " SKU do Produto",
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("div", {
                        className: "w-2.5 h-2.5 rounded bg-rose-500",
                      }),
                      v.jsx("span", {
                        className: "font-semibold",
                        children: "Coluna C:",
                      }),
                      " Descrição do Produto",
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("div", {
                        className: "w-2.5 h-2.5 rounded bg-rose-500",
                      }),
                      v.jsx("span", {
                        className: "font-semibold",
                        children: "Coluna G:",
                      }),
                      " Data do Corte",
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("div", {
                        className: "w-2.5 h-2.5 rounded bg-rose-500",
                      }),
                      v.jsx("span", {
                        className: "font-semibold",
                        children: "Coluna H:",
                      }),
                      " Quantidade Cortada",
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("div", {
                        className: "w-2.5 h-2.5 rounded bg-rose-500",
                      }),
                      v.jsx("span", {
                        className: "font-semibold",
                        children: "Coluna I:",
                      }),
                      " Valor (R$ perdido)",
                    ],
                  }),
                  v.jsxs("div", {
                    className: "flex items-center gap-2",
                    children: [
                      v.jsx("div", {
                        className: "w-2.5 h-2.5 rounded bg-rose-500",
                      }),
                      v.jsx("span", {
                        className: "font-semibold",
                        children: "Coluna K:",
                      }),
                      " Motivo do Corte",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      })
    : v.jsxs("div", {
        className: "w-full space-y-6 font-sans",
        children: [
          v.jsx("div", {
            className: "flex justify-center mb-2",
            children: v.jsxs("div", {
              className:
                "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-2xl flex items-center gap-1.5 shadow-md",
              children: [
                v.jsxs("button", {
                  onClick: () => {
                    (a("comercial"), l(""), f("ALL"), p([]), k(1), B(1));
                  },
                  className: G(
                    "px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 tracking-wide uppercase",
                    n === "comercial"
                      ? "bg-rose-500 text-white shadow-lg"
                      : "text-zinc-500 hover:text-rose-500 hover:bg-rose-500/5 dark:hover:bg-rose-500/10",
                  ),
                  children: [
                    v.jsx(RS, { className: "w-4 h-4" }),
                    "Cortes Comerciais",
                  ],
                }),
                v.jsxs("button", {
                  onClick: () => {
                    (a("wms"), l(""), f("ALL"), p([]), k(1), B(1));
                  },
                  className: G(
                    "px-6 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center gap-2 tracking-wide uppercase",
                    n === "wms"
                      ? "bg-rose-600 text-white shadow-lg"
                      : "text-zinc-500 hover:text-rose-600 hover:bg-rose-600/5 dark:hover:bg-rose-600/10",
                  ),
                  children: [
                    v.jsx(nf, { className: "w-4 h-4" }),
                    "Cortes Diários WMS",
                  ],
                }),
              ],
            }),
          }),
          i.length === 0
            ? v.jsxs(Gr.div, {
                initial: { opacity: 0, y: 15 },
                animate: { opacity: 1, y: 0 },
                className: G(
                  "w-full rounded-3xl border p-12 text-center shadow-lg backdrop-blur-md transition-colors duration-500 flex flex-col items-center justify-center min-h-[400px]",
                  r.contentBg,
                  r.contentBorder,
                  r.contentShadow,
                ),
                children: [
                  v.jsx("div", {
                    className:
                      "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border bg-rose-500/15 border-rose-500/30",
                    children: v.jsx(nf, {
                      className: "w-8 h-8 text-rose-500 animate-bounce",
                    }),
                  }),
                  v.jsxs("h3", {
                    className: G(
                      "text-xl font-bold mb-2 uppercase tracking-wide",
                      r.contentTitle,
                    ),
                    children: [
                      "Aba ",
                      n === "comercial" ? '"CORTES"' : '"CORTES WMS"',
                      " Não Localizada",
                    ],
                  }),
                  v.jsxs("p", {
                    className:
                      "max-w-md mx-auto text-xs text-slate-500 leading-relaxed mb-6",
                    children: [
                      "Nenhum dado encontrado para ",
                      n === "comercial"
                        ? "Cortes Comerciais"
                        : "Cortes Diários WMS",
                      " nesta planilha. Por favor, certifique-se de que a sua planilha do Google Sheets contenha uma aba com o nome exato",
                      " ",
                      v.jsx("span", {
                        className: "font-bold underline text-rose-600",
                        children: n === "comercial" ? "CORTES" : "CORTES WMS",
                      }),
                      ".",
                    ],
                  }),
                  v.jsxs("div", {
                    className:
                      "bg-zinc-50/50 border border-zinc-200/50 p-5 rounded-xl max-w-sm w-full text-left text-xs font-sans",
                    children: [
                      v.jsxs("span", {
                        className:
                          "font-bold text-rose-500 block mb-3 uppercase tracking-wide",
                        children: [
                          "Estrutura de Colunas ",
                          n === "comercial" ? "Comercial" : "WMS",
                          ":",
                        ],
                      }),
                      n === "comercial"
                        ? v.jsxs("ul", {
                            className: "space-y-1.5 opacity-80",
                            children: [
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna B:",
                                  }),
                                  " SKU",
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna C:",
                                  }),
                                  " Descrição",
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna G:",
                                  }),
                                  " Data",
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna H:",
                                  }),
                                  " Quantidade",
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna I:",
                                  }),
                                  " Valor",
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna K:",
                                  }),
                                  " Motivo",
                                ],
                              }),
                            ],
                          })
                        : v.jsxs("ul", {
                            className: "space-y-1.5 opacity-80",
                            children: [
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna A:",
                                  }),
                                  ' "Onde" (Ocorrência / Motivo)',
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna G:",
                                  }),
                                  " SKU do Produto",
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna I:",
                                  }),
                                  " Descrição do Produto",
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna K:",
                                  }),
                                  " Quantidade Cortada",
                                ],
                              }),
                              v.jsxs("li", {
                                children: [
                                  "• ",
                                  v.jsx("strong", {
                                    className: "font-bold",
                                    children: "Coluna Z:",
                                  }),
                                  " Valor Perdido",
                                ],
                              }),
                            ],
                          }),
                    ],
                  }),
                ],
              })
            : v.jsxs(v.Fragment, {
                children: [
                  v.jsx("div", {
                    className: "flex justify-center mb-2",
                    children: v.jsxs("div", {
                      className: G(
                        "backdrop-blur-md border rounded-2xl p-1 shadow-md flex items-center gap-1",
                        r.contentBg,
                        r.contentBorder,
                      ),
                      children: [
                        v.jsxs("button", {
                          onClick: () => {
                            y("geral");
                          },
                          className: G(
                            "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5",
                            b === "geral"
                              ? `${r.active} shadow-md`
                              : "opacity-50 hover:opacity-100 text-slate-500",
                          ),
                          children: [
                            v.jsx(v6, { className: "w-3.5 h-3.5" }),
                            "Visão Geral",
                          ],
                        }),
                        v.jsxs("button", {
                          onClick: () => {
                            y("skus");
                          },
                          className: G(
                            "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5",
                            b === "skus"
                              ? `${r.active} shadow-md`
                              : "opacity-50 hover:opacity-100 text-slate-500",
                          ),
                          children: [
                            v.jsx(iEe, { className: "w-3.5 h-3.5" }),
                            "Rank por SKU",
                          ],
                        }),
                        v.jsxs("button", {
                          onClick: () => {
                            y("evolucao");
                          },
                          className: G(
                            "px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all flex items-center gap-1.5",
                            b === "evolucao"
                              ? `${r.active} shadow-md`
                              : "opacity-50 hover:opacity-100 text-slate-500",
                          ),
                          children: [
                            v.jsx(UEe, { className: "w-3.5 h-3.5" }),
                            "Análise Temporal",
                          ],
                        }),
                      ],
                    }),
                  }),
                  v.jsx("div", {
                    className:
                      "p-5 border-2 border-rose-600/90 rounded-2xl transition-all shadow-md bg-white",
                    children: v.jsxs("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center",
                      children: [
                        v.jsxs("div", {
                          className: "relative",
                          children: [
                            v.jsx(gm, {
                              className:
                                "absolute left-3.5 top-3.5 w-4 h-4 text-rose-500/60",
                            }),
                            v.jsx("input", {
                              type: "text",
                              placeholder: "Pesquisar por SKU ou Descrição...",
                              value: s,
                              onChange: (se) => {
                                (l(se.target.value), k(1), B(1));
                              },
                              className:
                                "w-full pl-10 pr-4 py-2.5 border-2 border-rose-200 rounded-xl text-xs bg-rose-50/10 focus:outline-none focus:border-rose-500 transition-colors",
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "relative",
                          children: [
                            v.jsx(fO, {
                              className:
                                "absolute left-3.5 top-3.5 w-4 h-4 text-rose-500/60",
                            }),
                            v.jsxs("select", {
                              value: u,
                              onChange: (se) => {
                                (f(se.target.value), k(1), B(1));
                              },
                              className:
                                "w-full pl-10 pr-4 py-2.5 border-2 border-rose-200 rounded-xl text-xs bg-rose-50/10 appearance-none focus:outline-none focus:border-rose-500 transition-colors cursor-pointer",
                              children: [
                                v.jsx("option", {
                                  value: "ALL",
                                  children: "Visualizar Todos os Motivos",
                                }),
                                W.map((se) =>
                                  v.jsx(
                                    "option",
                                    { value: se, children: se },
                                    se,
                                  ),
                                ),
                              ],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "relative",
                          children: [
                            v.jsx(Nx, {
                              className:
                                "absolute left-3.5 top-3.5 w-4 h-4 text-rose-500/60 z-10 pointer-events-none",
                            }),
                            v.jsxs("button", {
                              type: "button",
                              onClick: () => x(!g),
                              className:
                                "w-full pl-10 pr-4 py-2.5 border-2 border-rose-200 rounded-xl text-xs bg-rose-50/10 focus:outline-none focus:border-rose-500 transition-colors cursor-pointer text-left font-medium text-zinc-700 flex justify-between items-center bg-white",
                              children: [
                                v.jsx("span", {
                                  className: "truncate",
                                  children:
                                    d.length === 0
                                      ? "Visualizar Todos os Meses"
                                      : d.length === 1
                                        ? Ae(d[0])
                                        : `${d.length} Meses Selecionados`,
                                }),
                                v.jsx(pEe, {
                                  className:
                                    "w-4 h-4 text-rose-500 shrink-0 ml-1",
                                }),
                              ],
                            }),
                            g &&
                              v.jsxs(v.Fragment, {
                                children: [
                                  v.jsx("div", {
                                    className: "fixed inset-0 z-20",
                                    onClick: () => x(!1),
                                  }),
                                  v.jsxs("div", {
                                    className:
                                      "absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-white border-2 border-rose-200 rounded-xl shadow-xl z-30 p-2 space-y-1",
                                    children: [
                                      v.jsxs("button", {
                                        type: "button",
                                        onClick: () => {
                                          (p([]), k(1), B(1));
                                        },
                                        className: G(
                                          "w-full text-left px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between hover:bg-rose-50 cursor-pointer",
                                          d.length === 0
                                            ? "text-rose-600 bg-rose-50"
                                            : "text-slate-700",
                                        ),
                                        children: [
                                          v.jsx("span", {
                                            children: "Todos os meses",
                                          }),
                                          d.length === 0 &&
                                            v.jsx(dEe, {
                                              className:
                                                "w-3.5 h-3.5 text-rose-600",
                                            }),
                                        ],
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "border-t border-rose-100 my-1",
                                      }),
                                      oe.map((se) => {
                                        const be = d.includes(se);
                                        return v.jsx(
                                          "button",
                                          {
                                            type: "button",
                                            onClick: () => {
                                              let Ue;
                                              (be
                                                ? (Ue = d.filter(
                                                    (Je) => Je !== se,
                                                  ))
                                                : (Ue = [...d, se]),
                                                p(Ue),
                                                k(1),
                                                B(1));
                                            },
                                            className: G(
                                              "w-full text-left px-3 py-1.5 rounded-lg text-xs font-medium flex items-center justify-between hover:bg-rose-50 transition-colors cursor-pointer",
                                              be
                                                ? "text-rose-600 bg-rose-50/50 font-bold"
                                                : "text-slate-700 hover:text-rose-600",
                                            ),
                                            children: v.jsxs("div", {
                                              className:
                                                "flex items-center gap-2",
                                              children: [
                                                v.jsx("input", {
                                                  type: "checkbox",
                                                  checked: be,
                                                  readOnly: !0,
                                                  className:
                                                    "rounded border-rose-300 text-rose-600 focus:ring-rose-500 w-3.5 h-3.5 cursor-pointer accent-rose-600",
                                                }),
                                                v.jsx("span", {
                                                  children: Ae(se),
                                                }),
                                              ],
                                            }),
                                          },
                                          se,
                                        );
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "relative",
                          children: [
                            v.jsx(Nx, {
                              className:
                                "absolute left-3.5 top-3.5 w-4 h-4 text-rose-500/65 pointer-events-none z-10",
                            }),
                            v.jsxs("div", {
                              className:
                                "flex items-center gap-1.5 w-full pl-10 pr-3 py-2 border-2 border-rose-200 rounded-xl text-xs bg-white focus-within:border-rose-500 transition-colors h-[42px] max-h-[42px]",
                              children: [
                                v.jsx("span", {
                                  className:
                                    "text-zinc-400 font-extrabold uppercase tracking-wider text-[9px] mr-1 shrink-0 select-none",
                                  children: "Filtrar Dia:",
                                }),
                                v.jsx("input", {
                                  type: "date",
                                  value: N,
                                  onChange: (se) => {
                                    (C(se.target.value), k(1), B(1));
                                  },
                                  className:
                                    "w-full bg-transparent font-bold text-zinc-700 dark:text-zinc-200 focus:outline-none border-none outline-none cursor-pointer text-xs",
                                  style: { colorScheme: "light" },
                                }),
                                N &&
                                  v.jsx("button", {
                                    type: "button",
                                    onClick: () => {
                                      (C(""), k(1), B(1));
                                    },
                                    className:
                                      "px-2 py-0.5 text-[9px] font-black text-rose-600 bg-rose-50 hover:bg-rose-100 rounded border border-rose-200 transition-colors uppercase cursor-pointer shrink-0",
                                    title: "Limpar Data",
                                    children: "Limpar",
                                  }),
                              ],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className:
                            "flex flex-row sm:flex-row lg:flex-col justify-between items-center lg:items-end gap-2 text-xs px-2 w-full",
                          children: [
                            v.jsxs("div", {
                              className:
                                "text-slate-500 font-medium text-left lg:text-right leading-tight",
                              children: [
                                "Resultados: ",
                                v.jsx("span", {
                                  className: "font-bold text-zinc-800",
                                  children: ie.length,
                                }),
                                " de ",
                                v.jsx("span", {
                                  className: "font-bold text-zinc-800",
                                  children: i.length,
                                }),
                                " registros",
                              ],
                            }),
                            (s || u !== "ALL" || d.length > 0 || N) &&
                              v.jsx("button", {
                                onClick: () => {
                                  (l(""), f("ALL"), p([]), C(""));
                                },
                                className: G(
                                  "px-4 py-1.5 border text-[10px] font-bold uppercase rounded-lg transition-colors cursor-pointer border-rose-350 text-rose-550 hover:bg-rose-50",
                                  r.primary === "amber"
                                    ? "border-amber-300 text-amber-700 hover:bg-amber-50"
                                    : "border-rose-300 text-rose-500 hover:bg-rose-50",
                                ),
                                children: "Limpar Filtros",
                              }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  b === "geral" &&
                    v.jsxs(Gr.div, {
                      initial: { opacity: 0, y: 5 },
                      animate: { opacity: 1, y: 0 },
                      className: "space-y-8",
                      children: [
                        v.jsxs("div", {
                          className:
                            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
                          children: [
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl flex items-center gap-4 shadow-sm",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-xl bg-amber-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-amber-200",
                                  children: v.jsx(g$, { className: "w-6 h-6" }),
                                }),
                                v.jsxs("div", {
                                  children: [
                                    v.jsx("span", {
                                      className:
                                        "text-[10px] font-black uppercase text-slate-400 block tracking-wider leading-none mb-1",
                                      children: "Impacto Financeiro total",
                                    }),
                                    v.jsx("span", {
                                      className:
                                        "text-xl font-bold text-slate-900 block tracking-tight leading-none mb-0.5",
                                      children: ce(he.totalValue),
                                    }),
                                    v.jsx("span", {
                                      className: "text-[9px] text-zinc-500",
                                      children: "Soma da coluna de valores",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl flex items-center gap-4 shadow-sm",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-orange-200",
                                  children: v.jsx(x$, { className: "w-6 h-6" }),
                                }),
                                v.jsxs("div", {
                                  children: [
                                    v.jsx("span", {
                                      className:
                                        "text-[10px] font-black uppercase text-slate-400 block tracking-wider leading-none mb-1",
                                      children: "Volume total de cortes",
                                    }),
                                    v.jsxs("span", {
                                      className:
                                        "text-xl font-bold text-slate-900 block tracking-tight leading-none mb-0.5",
                                      children: [
                                        he.totalQty.toLocaleString("pt-BR"),
                                        " un",
                                      ],
                                    }),
                                    v.jsx("span", {
                                      className: "text-[9px] text-zinc-500",
                                      children:
                                        "Soma da quantidade física cortada",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl flex items-center gap-4 shadow-sm",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-200",
                                  children: v.jsx(RS, { className: "w-6 h-6" }),
                                }),
                                v.jsxs("div", {
                                  children: [
                                    v.jsx("span", {
                                      className:
                                        "text-[10px] font-black uppercase text-slate-400 block tracking-wider leading-none mb-1",
                                      children: "SKUs impactados",
                                    }),
                                    v.jsxs("span", {
                                      className:
                                        "text-xl font-bold text-slate-900 block tracking-tight leading-none mb-0.5",
                                      children: [he.skuCount, " produtos"],
                                    }),
                                    v.jsxs("span", {
                                      className: "text-[9px] text-zinc-500",
                                      children: [
                                        "De um total de ",
                                        j.length,
                                        " cadastrados",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl flex items-center gap-4 shadow-sm",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsx("div", {
                                  className:
                                    "w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center text-white shrink-0 shadow-md shadow-purple-200",
                                  children: v.jsx(_f, { className: "w-6 h-6" }),
                                }),
                                v.jsxs("div", {
                                  className: "min-w-0 flex-1",
                                  children: [
                                    v.jsx("span", {
                                      className:
                                        "text-[10px] font-black uppercase text-slate-400 block tracking-wider leading-none mb-1",
                                      children: "Maior Motivo de Corte",
                                    }),
                                    v.jsx("span", {
                                      className:
                                        "text-[13px] font-bold text-slate-900 block truncate leading-tight select-none mb-0.5",
                                      title: he.topReason,
                                      children: he.topReason,
                                    }),
                                    v.jsxs("span", {
                                      className:
                                        "text-[9px] text-zinc-500 font-mono font-bold block",
                                      children: [
                                        ce(he.topReasonValue),
                                        " em cortes",
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: "grid grid-cols-1 lg:grid-cols-3 gap-6",
                          children: [
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl shadow-sm lg:col-span-2",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsxs("div", {
                                  className:
                                    "flex justify-between items-center mb-6",
                                  children: [
                                    v.jsxs("div", {
                                      children: [
                                        v.jsx("h3", {
                                          className:
                                            "text-sm font-black text-slate-900 uppercase tracking-wider block",
                                          children:
                                            "Evolução do Impacto por Data",
                                        }),
                                        v.jsx("span", {
                                          className:
                                            "text-[10px] text-slate-400 block",
                                          children:
                                            "Valor monetário totalizado conforme agrupamento temporal",
                                        }),
                                      ],
                                    }),
                                    v.jsx("div", {
                                      className:
                                        "flex gap-1 border border-zinc-200 bg-zinc-50 p-1 rounded-xl",
                                      children: ["day", "week", "month"].map(
                                        (se) =>
                                          v.jsx(
                                            "button",
                                            {
                                              onClick: () => M(se),
                                              className: G(
                                                "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                                                P === se
                                                  ? G(
                                                      "bg-white shadow-sm font-bold border",
                                                      r.accent,
                                                      r.border,
                                                    )
                                                  : "opacity-40 hover:opacity-100 text-zinc-600",
                                              ),
                                              children:
                                                se === "day"
                                                  ? "Dia"
                                                  : se === "week"
                                                    ? "Semana"
                                                    : "Mês",
                                            },
                                            se,
                                          ),
                                      ),
                                    }),
                                  ],
                                }),
                                v.jsx("div", {
                                  className: "h-64",
                                  children: v.jsx(Xu, {
                                    width: "100%",
                                    height: "100%",
                                    children:
                                      ne.length === 1
                                        ? v.jsxs(n1, {
                                            data: ne,
                                            margin: {
                                              top: 35,
                                              right: 30,
                                              left: 30,
                                              bottom: 10,
                                            },
                                            children: [
                                              v.jsx(Ju, {
                                                strokeDasharray: "3 3",
                                                vertical: !1,
                                                stroke: "#e4e4e7",
                                              }),
                                              v.jsx(tf, {
                                                dataKey: "name",
                                                fontSize: 10,
                                                stroke: "#a1a1aa",
                                                tickLine: !1,
                                              }),
                                              v.jsx(rf, {
                                                fontSize: 10,
                                                stroke: "#a1a1aa",
                                                tickLine: !1,
                                                tickFormatter: (se) =>
                                                  `R$ ${se}`,
                                              }),
                                              v.jsx(_c, {
                                                formatter: (se) => [
                                                  ce(Number(se)),
                                                  "Valor Cortado",
                                                ],
                                                contentStyle: {
                                                  backgroundColor: "#ffffff",
                                                  borderRadius: 12,
                                                  border: "1px solid #e4e4e7",
                                                  fontSize: 11,
                                                },
                                              }),
                                              v.jsx(wh, {
                                                dataKey: "valor",
                                                fill: r.logo || "#f43f5e",
                                                radius: [6, 6, 0, 0],
                                                maxBarSize: 60,
                                                children: v.jsx(kc, {
                                                  dataKey: "valor",
                                                  position: "top",
                                                  formatter: (se) =>
                                                    "R$ " +
                                                    Math.round(
                                                      Number(se),
                                                    ).toLocaleString("pt-BR"),
                                                  fontSize: 11,
                                                  fill: "#1e293b",
                                                  fontWeight: "extrabold",
                                                  offset: 10,
                                                }),
                                              }),
                                            ],
                                          })
                                        : v.jsxs(Z_e, {
                                            data: ne,
                                            margin: {
                                              top: 35,
                                              right: 30,
                                              left: 30,
                                              bottom: 10,
                                            },
                                            children: [
                                              v.jsx("defs", {
                                                children: v.jsxs(
                                                  "linearGradient",
                                                  {
                                                    id: "colorValor",
                                                    x1: "0",
                                                    y1: "0",
                                                    x2: "0",
                                                    y2: "1",
                                                    children: [
                                                      v.jsx("stop", {
                                                        offset: "5%",
                                                        stopColor:
                                                          r.logo || "#f43f5e",
                                                        stopOpacity: 0.25,
                                                      }),
                                                      v.jsx("stop", {
                                                        offset: "95%",
                                                        stopColor:
                                                          r.logo || "#f43f5e",
                                                        stopOpacity: 0,
                                                      }),
                                                    ],
                                                  },
                                                ),
                                              }),
                                              v.jsx(Ju, {
                                                strokeDasharray: "3 3",
                                                vertical: !1,
                                                stroke: "#e4e4e7",
                                              }),
                                              v.jsx(tf, {
                                                dataKey: "name",
                                                fontSize: 10,
                                                stroke: "#a1a1aa",
                                                tickLine: !1,
                                              }),
                                              v.jsx(rf, {
                                                fontSize: 10,
                                                stroke: "#a1a1aa",
                                                tickLine: !1,
                                                tickFormatter: (se) =>
                                                  `R$ ${se}`,
                                              }),
                                              v.jsx(_c, {
                                                formatter: (se) => [
                                                  ce(Number(se)),
                                                  "Valor Cortado",
                                                ],
                                                contentStyle: {
                                                  backgroundColor: "#ffffff",
                                                  borderRadius: 12,
                                                  border: "1px solid #e4e4e7",
                                                  fontSize: 11,
                                                },
                                              }),
                                              v.jsx(zz, {
                                                type: "monotone",
                                                dataKey: "valor",
                                                stroke: r.logo || "#f43f5e",
                                                strokeWidth: 2.5,
                                                fillOpacity: 1,
                                                fill: "url(#colorValor)",
                                                dot: {
                                                  r: 4,
                                                  stroke: "#fff",
                                                  strokeWidth: 1.5,
                                                  fill: r.logo || "#f43f5e",
                                                },
                                                activeDot: {
                                                  r: 6,
                                                  stroke: "#fff",
                                                  strokeWidth: 2,
                                                  fill: r.logo || "#f43f5e",
                                                },
                                                children: v.jsx(kc, {
                                                  dataKey: "valor",
                                                  position: "top",
                                                  formatter: (se) =>
                                                    se > 0
                                                      ? "R$ " +
                                                        Math.round(
                                                          Number(se),
                                                        ).toLocaleString(
                                                          "pt-BR",
                                                        )
                                                      : "",
                                                  fontSize: 11,
                                                  fill: "#1e293b",
                                                  fontWeight: "extrabold",
                                                  offset: 10,
                                                }),
                                              }),
                                            ],
                                          }),
                                  }),
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl shadow-sm flex flex-col justify-between",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsxs("div", {
                                  children: [
                                    v.jsx("h3", {
                                      className:
                                        "text-sm font-black text-slate-900 uppercase tracking-wider block mb-1",
                                      children:
                                        n === "wms"
                                          ? "Participação por Onda"
                                          : "Participação por Motivo",
                                    }),
                                    v.jsx("span", {
                                      className:
                                        "text-[10px] text-slate-400 block mb-4",
                                      children:
                                        n === "wms"
                                          ? "Divisão monetária das ondas de cortes"
                                          : "Divisão monetária dos motivos de cortes",
                                    }),
                                  ],
                                }),
                                v.jsx("div", {
                                  className:
                                    "h-44 relative flex items-center justify-center",
                                  children:
                                    ue.length > 0
                                      ? v.jsx(Xu, {
                                          width: "100%",
                                          height: "100%",
                                          children: v.jsxs(h$, {
                                            children: [
                                              v.jsx(tO, {
                                                data: ue,
                                                cx: "50%",
                                                cy: "50%",
                                                innerRadius: 36,
                                                outerRadius: 50,
                                                paddingAngle: 3,
                                                dataKey: "value",
                                                label: ({
                                                  cx: se,
                                                  cy: be,
                                                  midAngle: Ue,
                                                  outerRadius: Je,
                                                  value: nt,
                                                  percent: yt,
                                                }) => {
                                                  if (!nt || yt < 0.04)
                                                    return null;
                                                  const st = Math.PI / 180,
                                                    Nt = Je + 14,
                                                    Yt =
                                                      se +
                                                      Nt * Math.cos(-Ue * st),
                                                    tn =
                                                      be +
                                                      Nt * Math.sin(-Ue * st);
                                                  return v.jsxs("text", {
                                                    x: Yt,
                                                    y: tn,
                                                    fill: "#1e293b",
                                                    textAnchor:
                                                      Yt > se ? "start" : "end",
                                                    dominantBaseline: "central",
                                                    fontSize: 10,
                                                    fontWeight: "bold",
                                                    children: [
                                                      "R$ ",
                                                      Math.round(
                                                        nt,
                                                      ).toLocaleString("pt-BR"),
                                                    ],
                                                  });
                                                },
                                                labelLine: !0,
                                                children: ue.map((se, be) =>
                                                  v.jsx(
                                                    Ff,
                                                    {
                                                      fill: Ce[be % Ce.length],
                                                    },
                                                    `cell-${be}`,
                                                  ),
                                                ),
                                              }),
                                              v.jsx(_c, {
                                                formatter: (se) => [
                                                  ce(Number(se)),
                                                  "Valor",
                                                ],
                                              }),
                                            ],
                                          }),
                                        })
                                      : v.jsx("div", {
                                          className:
                                            "text-xs text-slate-400 italic",
                                          children:
                                            n === "wms"
                                              ? "Nenhuma onda catalogada"
                                              : "Nenhum motivo catalogado",
                                        }),
                                }),
                                v.jsx("div", {
                                  className: "space-y-1.5 mt-2",
                                  children: ue.map((se, be) =>
                                    v.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex justify-between items-center text-[10px]",
                                        children: [
                                          v.jsxs("div", {
                                            className:
                                              "flex items-center gap-2 min-w-0",
                                            children: [
                                              v.jsx("div", {
                                                className:
                                                  "w-2 h-2 rounded-full shrink-0",
                                                style: {
                                                  backgroundColor:
                                                    Ce[be % Ce.length],
                                                },
                                              }),
                                              v.jsx("span", {
                                                className:
                                                  "font-semibold text-zinc-700 truncate select-none uppercase",
                                                children: se.name,
                                              }),
                                            ],
                                          }),
                                          v.jsx("span", {
                                            className:
                                              "font-mono text-zinc-500 font-bold shrink-0",
                                            children: ce(se.value),
                                          }),
                                        ],
                                      },
                                      se.name,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: G(
                            "p-6 rounded-2xl shadow-sm",
                            r.contentBg,
                            r.contentBorder,
                          ),
                          children: [
                            v.jsxs("div", {
                              className:
                                "flex justify-between items-center mb-6",
                              children: [
                                v.jsxs("div", {
                                  children: [
                                    v.jsx("h3", {
                                      className:
                                        "text-sm font-black text-slate-900 uppercase tracking-wider block",
                                      children:
                                        "Principais SKUs Ranqueados por Cortes",
                                    }),
                                    v.jsx("span", {
                                      className:
                                        "text-[10px] text-slate-400 block text-left",
                                      children:
                                        "Ranking dos 5 produtos que geraram o maior impacto financeiro acumulado por cortes",
                                    }),
                                  ],
                                }),
                                v.jsxs("button", {
                                  onClick: () => y("skus"),
                                  className: G(
                                    "text-[10px] font-black uppercase font-bold flex items-center gap-1 cursor-pointer",
                                    r.accent,
                                  ),
                                  children: [
                                    "Ver Rank Completo ",
                                    v.jsx(a1, { className: "w-3.5 h-3.5" }),
                                  ],
                                }),
                              ],
                            }),
                            v.jsx("div", {
                              className: "space-y-4",
                              children: j.slice(0, 5).map((se, be) => {
                                const Ue = (se.totalValue / H) * 100 || 0;
                                return v.jsxs(
                                  "div",
                                  {
                                    className:
                                      "group relative flex flex-col text-xs",
                                    children: [
                                      v.jsxs("div", {
                                        className:
                                          "flex justify-between items-center mb-1",
                                        children: [
                                          v.jsxs("div", {
                                            className:
                                              "flex items-center gap-3.5 min-w-0",
                                            children: [
                                              v.jsxs("span", {
                                                className: G(
                                                  "w-5 h-5 rounded-lg flex items-center justify-center font-bold text-[10px] border",
                                                  r.primary === "amber"
                                                    ? "bg-amber-50 border-amber-250 text-amber-700"
                                                    : "bg-rose-50 border-rose-200 text-rose-500",
                                                ),
                                                children: ["#", be + 1],
                                              }),
                                              v.jsxs("div", {
                                                className: "min-w-0",
                                                children: [
                                                  v.jsx("span", {
                                                    className:
                                                      "font-bold text-slate-950 font-mono uppercase bg-zinc-100 px-1 py-0.5 rounded text-[10px]",
                                                    children: se.sku,
                                                  }),
                                                  v.jsx("span", {
                                                    className: G(
                                                      "font-semibold text-slate-600 block truncate transition-colors uppercase select-none mt-0.5 whitespace-nowrap",
                                                      r.primary === "amber"
                                                        ? "group-hover:text-amber-600"
                                                        : "group-hover:text-rose-600",
                                                    ),
                                                    title: se.description,
                                                    children: se.description,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          v.jsxs("div", {
                                            className: "text-right",
                                            children: [
                                              v.jsx("span", {
                                                className:
                                                  "font-bold text-slate-900 font-mono block",
                                                children: ce(se.totalValue),
                                              }),
                                              v.jsxs("span", {
                                                className:
                                                  "text-[10px] text-zinc-500 font-mono block leading-none mt-0.5",
                                                children: [
                                                  se.totalQty.toLocaleString(
                                                    "pt-BR",
                                                  ),
                                                  " un • ",
                                                  Ue.toFixed(1),
                                                  "%",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      v.jsx("div", {
                                        className:
                                          "w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden mt-1 line-clamp-1",
                                        children: v.jsx("div", {
                                          className: G(
                                            "h-full rounded-full transition-all duration-500",
                                            r.primary === "amber"
                                              ? "bg-amber-600"
                                              : "bg-rose-500",
                                          ),
                                          style: { width: `${Ue}%` },
                                        }),
                                      }),
                                    ],
                                  },
                                  se.sku,
                                );
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  b === "skus" &&
                    v.jsxs(Gr.div, {
                      initial: { opacity: 0, scale: 0.99 },
                      animate: { opacity: 1, scale: 1 },
                      className: G(
                        "p-6 rounded-2xl shadow-sm",
                        r.contentBg,
                        r.contentBorder,
                      ),
                      children: [
                        v.jsx("div", {
                          className:
                            "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6 pb-4 border-b border-zinc-100",
                          children: v.jsxs("div", {
                            children: [
                              v.jsx("h3", {
                                className:
                                  "text-sm font-black text-slate-900 uppercase tracking-wider block",
                                children: "Rank Financeiro Completo por SKU",
                              }),
                              v.jsx("span", {
                                className:
                                  "text-[10px] text-slate-400 block text-left",
                                children:
                                  "Lista ordenada decrescentemente por impacto financeiro gerado pelo corte de cada produto",
                              }),
                            ],
                          }),
                        }),
                        v.jsx("div", {
                          className: "overflow-x-auto",
                          children: v.jsxs("table", {
                            className:
                              "w-full text-left text-xs text-slate-600 border-collapse",
                            children: [
                              v.jsx("thead", {
                                children: v.jsxs("tr", {
                                  className:
                                    "border-b border-zinc-100 text-zinc-400 font-black uppercase text-[10px] tracking-wider",
                                  children: [
                                    v.jsx("th", {
                                      className: "py-4 px-4 w-12 text-center",
                                      children: "Rank",
                                    }),
                                    v.jsx("th", {
                                      className: "py-4 px-4 w-28",
                                      children: "SKU",
                                    }),
                                    v.jsx("th", {
                                      className: "py-4 px-4",
                                      children: "Descrição do Produto",
                                    }),
                                    v.jsx("th", {
                                      className: "py-4 px-4 w-28 text-center",
                                      children: "Quantidade",
                                    }),
                                    v.jsx("th", {
                                      className: "py-4 px-4 w-28 text-center",
                                      children: "Registros",
                                    }),
                                    v.jsx("th", {
                                      className: "py-4 px-4 w-36 text-right",
                                      children: "Prejuízo (R$)",
                                    }),
                                    v.jsx("th", {
                                      className: "py-4 px-4 w-40 text-center",
                                      children: "Distribuição %",
                                    }),
                                    v.jsx("th", {
                                      className: "py-4 px-4 w-32 text-center",
                                      children: "Ações",
                                    }),
                                  ],
                                }),
                              }),
                              v.jsx("tbody", {
                                children:
                                  de.length > 0
                                    ? de.map((se, be) => {
                                        const Ue = (I - 1) * V + be + 1,
                                          Je = (se.totalValue / H) * 100 || 0;
                                        return v.jsxs(
                                          "tr",
                                          {
                                            onClick: () => T(se.sku),
                                            className: G(
                                              "border-b border-zinc-100 transition-colors cursor-pointer",
                                              r.primary === "amber"
                                                ? "hover:bg-amber-500/5"
                                                : "hover:bg-rose-500/5",
                                            ),
                                            title:
                                              "Clique para ver o detalhamento dos cortes deste produto",
                                            children: [
                                              v.jsx("td", {
                                                className:
                                                  "py-3 px-4 text-center",
                                                children: v.jsx("span", {
                                                  className: G(
                                                    "w-6 h-6 rounded-lg font-bold text-[10px] inline-flex items-center justify-center border",
                                                    Ue === 1
                                                      ? r.primary === "amber"
                                                        ? "bg-amber-700 border-amber-800 text-white"
                                                        : "bg-red-500 border-red-600 text-white"
                                                      : Ue === 2
                                                        ? r.primary === "amber"
                                                          ? "bg-amber-500 border-amber-600 text-white"
                                                          : "bg-rose-400 border-rose-500 text-white"
                                                        : Ue === 3
                                                          ? "bg-amber-400 border-amber-500 text-white"
                                                          : "bg-slate-50 border-slate-200 text-slate-600",
                                                  ),
                                                  children: Ue,
                                                }),
                                              }),
                                              v.jsx("td", {
                                                className:
                                                  "py-3 px-4 font-mono font-bold text-slate-900 uppercase",
                                                children: se.sku,
                                              }),
                                              v.jsx("td", {
                                                className:
                                                  "py-3 px-4 uppercase font-semibold text-slate-700 truncate max-w-sm",
                                                title: se.description,
                                                children: se.description,
                                              }),
                                              v.jsxs("td", {
                                                className:
                                                  "py-3 px-4 text-center font-mono font-bold text-zinc-800",
                                                children: [
                                                  se.totalQty.toLocaleString(
                                                    "pt-BR",
                                                  ),
                                                  " un",
                                                ],
                                              }),
                                              v.jsxs("td", {
                                                className:
                                                  "py-3 px-4 text-center font-mono text-zinc-500",
                                                children: [se.count, " cortes"],
                                              }),
                                              v.jsx("td", {
                                                className:
                                                  "py-3 px-4 text-right font-mono font-bold text-slate-950 text-xs",
                                                children: ce(se.totalValue),
                                              }),
                                              v.jsx("td", {
                                                className: "py-3 px-4",
                                                children: v.jsxs("div", {
                                                  className:
                                                    "flex items-center gap-3",
                                                  children: [
                                                    v.jsx("div", {
                                                      className:
                                                        "w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden shrink min-w-[50px]",
                                                      children: v.jsx("div", {
                                                        className: G(
                                                          "h-full rounded-full",
                                                          r.primary === "amber"
                                                            ? "bg-amber-600"
                                                            : "bg-rose-500",
                                                        ),
                                                        style: {
                                                          width: `${Je}%`,
                                                        },
                                                      }),
                                                    }),
                                                    v.jsxs("span", {
                                                      className:
                                                        "font-mono text-zinc-500 w-10 text-right shrink-0",
                                                      children: [
                                                        Je.toFixed(1),
                                                        "%",
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              v.jsx("td", {
                                                className:
                                                  "py-3 px-4 text-center",
                                                onClick: (nt) =>
                                                  nt.stopPropagation(),
                                                children: v.jsxs("button", {
                                                  onClick: () => T(se.sku),
                                                  className: G(
                                                    "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-sm border cursor-pointer",
                                                    r.primary === "amber"
                                                      ? "bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100/80"
                                                      : "bg-rose-50 border-rose-200 text-rose-600 hover:bg-rose-100/80",
                                                  ),
                                                  children: [
                                                    v.jsx(_Ee, {
                                                      className: "w-3.5 h-3.5",
                                                    }),
                                                    "Detalhes",
                                                  ],
                                                }),
                                              }),
                                            ],
                                          },
                                          se.sku,
                                        );
                                      })
                                    : v.jsx("tr", {
                                        children: v.jsx("td", {
                                          colSpan: 8,
                                          className:
                                            "py-8 text-center text-slate-400 italic",
                                          children:
                                            "Nenhum SKU encontrado com os filtros atuais.",
                                        }),
                                      }),
                              }),
                            ],
                          }),
                        }),
                        Pe > 1 &&
                          v.jsxs("div", {
                            className:
                              "flex justify-between items-center mt-6 pt-4 border-t border-zinc-100",
                            children: [
                              v.jsxs("span", {
                                className: "text-xs text-zinc-500 select-none",
                                children: [
                                  "Mostrando página ",
                                  I,
                                  " de ",
                                  Pe,
                                  " (Total de ",
                                  j.length,
                                  " produtos cortados)",
                                ],
                              }),
                              v.jsxs("div", {
                                className: "flex gap-2",
                                children: [
                                  v.jsx("button", {
                                    disabled: I === 1,
                                    onClick: () =>
                                      B((se) => Math.max(1, se - 1)),
                                    className:
                                      "p-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer",
                                    children: v.jsx(m$, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                  v.jsx("button", {
                                    disabled: I === Pe,
                                    onClick: () =>
                                      B((se) => Math.min(Pe, se + 1)),
                                    className:
                                      "p-1.5 border border-zinc-200 rounded-lg hover:bg-zinc-50 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer",
                                    children: v.jsx(a1, {
                                      className: "w-4 h-4",
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                      ],
                    }),
                  b === "evolucao" &&
                    v.jsxs(Gr.div, {
                      initial: { opacity: 0, scale: 0.99 },
                      animate: { opacity: 1, scale: 1 },
                      className: "space-y-8",
                      children: [
                        v.jsxs("div", {
                          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                          children: [
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl shadow-sm",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsxs("div", {
                                  className: "flex items-center gap-3.5 mb-4",
                                  children: [
                                    v.jsx("div", {
                                      className: G(
                                        "p-3 rounded-xl",
                                        r.primary === "amber"
                                          ? "bg-amber-500/10"
                                          : "bg-rose-500/10",
                                      ),
                                      children: v.jsx(Nx, {
                                        className: G(
                                          "w-5 h-5",
                                          r.primary === "amber"
                                            ? "text-amber-600"
                                            : "text-rose-500",
                                        ),
                                      }),
                                    }),
                                    v.jsxs("div", {
                                      children: [
                                        v.jsx("h4", {
                                          className:
                                            "text-xs font-black uppercase text-slate-500 block leading-none mb-1",
                                          children: "Cortes por Dia",
                                        }),
                                        v.jsx("span", {
                                          className:
                                            "text-xs text-zinc-400 tracking-tight leading-none",
                                          children: "Visão por data específica",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v.jsx("div", {
                                  className:
                                    "space-y-3 max-h-56 overflow-y-auto pr-1",
                                  children: Z.daily.map((se) =>
                                    v.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex justify-between items-center text-xs pb-2 border-b border-zinc-50",
                                        children: [
                                          v.jsxs("div", {
                                            children: [
                                              v.jsx("span", {
                                                className:
                                                  "font-bold text-slate-800",
                                                children: se.dateStr,
                                              }),
                                              v.jsxs("span", {
                                                className:
                                                  "text-[9px] text-zinc-400 block",
                                                children: [
                                                  se.occurrences,
                                                  " cortes • ",
                                                  se.totalQty.toLocaleString(
                                                    "pt-BR",
                                                  ),
                                                  " un",
                                                ],
                                              }),
                                            ],
                                          }),
                                          v.jsx("span", {
                                            className: G(
                                              "font-mono font-bold block",
                                              r.primary === "amber"
                                                ? "text-amber-700"
                                                : "text-rose-600",
                                            ),
                                            children: ce(se.totalValue),
                                          }),
                                        ],
                                      },
                                      se.dateStr,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl shadow-sm",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsxs("div", {
                                  className: "flex items-center gap-3.5 mb-4",
                                  children: [
                                    v.jsx("div", {
                                      className:
                                        "p-3 bg-orange-500/10 rounded-xl",
                                      children: v.jsx(ih, {
                                        className: "w-5 h-5 text-orange-500",
                                      }),
                                    }),
                                    v.jsxs("div", {
                                      children: [
                                        v.jsx("h4", {
                                          className:
                                            "text-xs font-black uppercase text-slate-500 block leading-none mb-1",
                                          children: "Cortes por Semana",
                                        }),
                                        v.jsx("span", {
                                          className:
                                            "text-xs text-zinc-400 tracking-tight leading-none",
                                          children:
                                            "Agrupamento consolidado de segunda a domingo",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v.jsx("div", {
                                  className:
                                    "space-y-3 max-h-56 overflow-y-auto pr-1",
                                  children: Z.weekly.map((se) =>
                                    v.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex justify-between items-center text-xs pb-2 border-b border-zinc-50",
                                        children: [
                                          v.jsxs("div", {
                                            children: [
                                              v.jsx("span", {
                                                className:
                                                  "font-bold text-slate-800 select-none uppercase",
                                                children: se.weekStr,
                                              }),
                                              v.jsxs("span", {
                                                className:
                                                  "text-[9px] text-zinc-400 block",
                                                children: [
                                                  se.occurrences,
                                                  " cortes • ",
                                                  se.totalQty.toLocaleString(
                                                    "pt-BR",
                                                  ),
                                                  " un",
                                                ],
                                              }),
                                            ],
                                          }),
                                          v.jsx("span", {
                                            className: G(
                                              "font-mono font-bold block",
                                              r.primary === "amber"
                                                ? "text-amber-700"
                                                : "text-rose-600",
                                            ),
                                            children: ce(se.totalValue),
                                          }),
                                        ],
                                      },
                                      se.weekStr,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            v.jsxs("div", {
                              className: G(
                                "p-6 rounded-2xl shadow-sm",
                                r.contentBg,
                                r.contentBorder,
                              ),
                              children: [
                                v.jsxs("div", {
                                  className: "flex items-center gap-3.5 mb-4",
                                  children: [
                                    v.jsx("div", {
                                      className:
                                        "p-3 bg-purple-500/10 rounded-xl",
                                      children: v.jsx(v6, {
                                        className: "w-5 h-5 text-purple-500",
                                      }),
                                    }),
                                    v.jsxs("div", {
                                      children: [
                                        v.jsx("h4", {
                                          className:
                                            "text-xs font-black uppercase text-slate-500 block leading-none mb-1",
                                          children: "Cortes por Mês",
                                        }),
                                        v.jsx("span", {
                                          className:
                                            "text-xs text-zinc-400 tracking-tight leading-none",
                                          children:
                                            "Consolidado em datas de faturamento",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                v.jsx("div", {
                                  className:
                                    "space-y-3 max-h-56 overflow-y-auto pr-1",
                                  children: Z.monthly.map((se) =>
                                    v.jsxs(
                                      "div",
                                      {
                                        className:
                                          "flex justify-between items-center text-xs pb-2 border-b border-zinc-50",
                                        children: [
                                          v.jsxs("div", {
                                            children: [
                                              v.jsx("span", {
                                                className:
                                                  "font-bold text-slate-800 uppercase",
                                                children: se.monthStr,
                                              }),
                                              v.jsxs("span", {
                                                className:
                                                  "text-[9px] text-zinc-400 block",
                                                children: [
                                                  se.occurrences,
                                                  " cortes • ",
                                                  se.totalQty.toLocaleString(
                                                    "pt-BR",
                                                  ),
                                                  " un",
                                                ],
                                              }),
                                            ],
                                          }),
                                          v.jsx("span", {
                                            className: G(
                                              "font-mono font-bold block",
                                              r.primary === "amber"
                                                ? "text-amber-700"
                                                : "text-rose-600",
                                            ),
                                            children: ce(se.totalValue),
                                          }),
                                        ],
                                      },
                                      se.monthStr,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        v.jsxs("div", {
                          className: G(
                            "p-6 rounded-2xl shadow-sm",
                            r.contentBg,
                            r.contentBorder,
                          ),
                          children: [
                            v.jsxs("div", {
                              className:
                                "mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4",
                              children: [
                                v.jsxs("div", {
                                  children: [
                                    v.jsxs("h3", {
                                      className:
                                        "text-sm font-black text-slate-900 uppercase tracking-wider block",
                                      children: [
                                        "Estudo Consolidado por ",
                                        P === "day"
                                          ? "Dia"
                                          : P === "week"
                                            ? "Semana"
                                            : "Mês",
                                      ],
                                    }),
                                    v.jsx("span", {
                                      className:
                                        "text-[10px] text-slate-400 block text-left",
                                      children:
                                        "Representação volumétrica em barras e financeira por período",
                                    }),
                                  ],
                                }),
                                v.jsx("div", {
                                  className:
                                    "flex gap-1 border border-zinc-200 bg-zinc-50 p-1 rounded-xl shrink-0 self-start",
                                  children: ["day", "week", "month"].map((se) =>
                                    v.jsx(
                                      "button",
                                      {
                                        onClick: () => M(se),
                                        className: G(
                                          "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all",
                                          P === se
                                            ? G(
                                                "bg-white shadow-sm font-bold border",
                                                r.accent,
                                                r.border,
                                              )
                                            : "opacity-40 hover:opacity-100 text-zinc-600",
                                        ),
                                        children:
                                          se === "day"
                                            ? "Dia"
                                            : se === "week"
                                              ? "Semana"
                                              : "Mês",
                                      },
                                      se,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                            v.jsx("div", {
                              className: "h-72",
                              children: v.jsx(Xu, {
                                width: "100%",
                                height: "100%",
                                children: v.jsxs(n1, {
                                  data: ne,
                                  margin: {
                                    top: 35,
                                    right: 30,
                                    left: 30,
                                    bottom: 10,
                                  },
                                  children: [
                                    v.jsx(Ju, {
                                      strokeDasharray: "3 3",
                                      vertical: !1,
                                      stroke: "#f4f4f5",
                                    }),
                                    v.jsx(tf, {
                                      dataKey: "name",
                                      fontSize: 10,
                                      stroke: "#a1a1aa",
                                      tickLine: !1,
                                    }),
                                    v.jsx(rf, {
                                      fontSize: 10,
                                      stroke: "#a1a1aa",
                                      tickLine: !1,
                                      tickFormatter: (se) => `R$ ${se}`,
                                    }),
                                    v.jsx(_c, {
                                      formatter: (se, be) =>
                                        be === "valor"
                                          ? [
                                              ce(Number(se)),
                                              "Impacto Financeiro (R$)",
                                            ]
                                          : [
                                              se.toLocaleString("pt-BR") +
                                                " unidades",
                                              "Volume (un)",
                                            ],
                                      contentStyle: {
                                        backgroundColor: "#ffffff",
                                        borderRadius: 12,
                                        border: "1px solid #e4e4e7",
                                        fontSize: 11,
                                      },
                                    }),
                                    v.jsx(wh, {
                                      dataKey: "valor",
                                      fill: r.logo || "#f43f5e",
                                      radius: [4, 4, 0, 0],
                                      maxBarSize: 45,
                                      children: v.jsx(kc, {
                                        dataKey: "valor",
                                        position: "top",
                                        formatter: (se) =>
                                          se > 0
                                            ? "R$ " +
                                              Math.round(
                                                Number(se),
                                              ).toLocaleString("pt-BR")
                                            : "",
                                        fontSize: 11,
                                        fill: "#1e293b",
                                        fontWeight: "extrabold",
                                        offset: 10,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
          _ &&
            v.jsx("div", {
              className:
                "fixed inset-0 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 z-[9999]",
              children: v.jsxs(Gr.div, {
                initial: { opacity: 0, scale: 0.95, y: 10 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.95, y: 10 },
                className:
                  "w-full max-w-3xl rounded-3xl border border-zinc-200 p-6 shadow-2xl relative flex flex-col max-h-[90vh] bg-white text-slate-900",
                children: [
                  v.jsxs("div", {
                    className:
                      "flex justify-between items-start mb-4 pb-4 border-b border-zinc-200",
                    children: [
                      v.jsxs("div", {
                        className: "min-w-0 pr-6",
                        children: [
                          v.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [
                              v.jsxs("span", {
                                className: G(
                                  "text-[10px] font-black uppercase px-2.5 py-1 rounded-md border tracking-wider font-mono",
                                  r.primary === "amber"
                                    ? "bg-amber-100 border-amber-300 text-amber-950"
                                    : "bg-rose-100 border-rose-300 text-rose-950",
                                ),
                                children: ["SKU ", _],
                              }),
                              v.jsx("span", {
                                className:
                                  "text-[10px] text-zinc-500 font-extrabold uppercase tracking-wider",
                                children: "Detalhamento de Cortes",
                              }),
                            ],
                          }),
                          v.jsx("h3", {
                            className:
                              "text-lg font-black text-slate-900 uppercase mt-2 truncate",
                            title:
                              ((He = j.find((se) => se.sku === _)) == null
                                ? void 0
                                : He.description) || "Produto",
                            children:
                              ((Y = j.find((se) => se.sku === _)) == null
                                ? void 0
                                : Y.description) || "PRODUTO SEM DESCRIÇÃO",
                          }),
                        ],
                      }),
                      v.jsx("button", {
                        onClick: () => T(null),
                        className:
                          "p-1.5 rounded-lg border border-zinc-300 hover:bg-zinc-100 text-zinc-500 hover:text-zinc-800 transition-colors cursor-pointer shrink-0",
                        title: "Fechar",
                        children: v.jsx(GEe, { className: "w-4 h-4" }),
                      }),
                    ],
                  }),
                  v.jsxs("div", {
                    className: "grid grid-cols-3 gap-4 mb-5",
                    children: [
                      v.jsxs("div", {
                        className:
                          "bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm",
                        children: [
                          v.jsx("span", {
                            className:
                              "text-[10px] font-black uppercase text-slate-500 block tracking-wider mb-1",
                            children: "Prejuízo Total",
                          }),
                          v.jsx("span", {
                            className: G(
                              "text-base font-black block leading-none font-mono",
                              r.primary === "amber"
                                ? "text-amber-700"
                                : "text-rose-600",
                            ),
                            children: ce(
                              ((St = j.find((se) => se.sku === _)) == null
                                ? void 0
                                : St.totalValue) || 0,
                            ),
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className:
                          "bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm",
                        children: [
                          v.jsx("span", {
                            className:
                              "text-[10px] font-black uppercase text-slate-500 block tracking-wider mb-1",
                            children: "Qtd. Total Cortada",
                          }),
                          v.jsxs("span", {
                            className:
                              "text-base font-black text-slate-900 block leading-none font-mono",
                            children: [
                              (
                                ((Fe = j.find((se) => se.sku === _)) == null
                                  ? void 0
                                  : Fe.totalQty) || 0
                              ).toLocaleString("pt-BR"),
                              " un",
                            ],
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className:
                          "bg-slate-50 border border-slate-200 p-4 rounded-2xl shadow-sm",
                        children: [
                          v.jsx("span", {
                            className:
                              "text-[10px] font-black uppercase text-slate-500 block tracking-wider mb-1",
                            children: "Ocorrências",
                          }),
                          v.jsxs("span", {
                            className:
                              "text-base font-black text-slate-900 block leading-none font-mono",
                            children: [
                              ((At = j.find((se) => se.sku === _)) == null
                                ? void 0
                                : At.count) || 0,
                              " cortes",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  v.jsx("div", {
                    className:
                      "flex-1 overflow-y-auto border border-zinc-200 rounded-2xl shadow-xs",
                    children: v.jsxs("table", {
                      className:
                        "w-full text-left text-xs text-slate-700 border-collapse",
                      children: [
                        v.jsx("thead", {
                          className:
                            "bg-slate-100 sticky top-0 backdrop-blur-xs z-10 border-b border-zinc-200",
                          children: v.jsxs("tr", {
                            className:
                              "text-slate-700 font-bold uppercase text-[10px] tracking-wider",
                            children: [
                              v.jsx("th", {
                                className: "py-3.5 px-4 font-black",
                                children: "Dia (Data)",
                              }),
                              v.jsx("th", {
                                className: "py-3.5 px-4 font-black",
                                children: "Pedido",
                              }),
                              v.jsx("th", {
                                className: "py-3.5 px-4 font-black",
                                children: "Motivo / Ocorrência",
                              }),
                              v.jsx("th", {
                                className: "py-3.5 px-4 text-center font-black",
                                children: "Quantidade",
                              }),
                              v.jsx("th", {
                                className: "py-3.5 px-4 text-right font-black",
                                children: "Prejuízo (R$)",
                              }),
                            ],
                          }),
                        }),
                        v.jsx("tbody", {
                          className: "divide-y divide-zinc-200 bg-white",
                          children:
                            Q.length > 0
                              ? Q.map((se, be) => {
                                  const Ue = se.reason
                                    .toUpperCase()
                                    .normalize("NFD")
                                    .replace(/[\u0300-\u036f]/g, "")
                                    .includes("CORTE INDEVIDO");
                                  return v.jsxs(
                                    "tr",
                                    {
                                      className: G(
                                        "transition-colors",
                                        Ue
                                          ? "bg-amber-50/70 hover:bg-amber-100/70"
                                          : "hover:bg-slate-50/80",
                                      ),
                                      children: [
                                        v.jsx("td", {
                                          className:
                                            "py-3 px-4 font-bold text-slate-800 font-mono",
                                          children: se.date,
                                        }),
                                        v.jsx("td", {
                                          className:
                                            "py-3 px-4 font-black text-rose-600 font-mono text-[11px]",
                                          children:
                                            se.pedido ||
                                            v.jsx("span", {
                                              className: "text-zinc-300",
                                              children: "-",
                                            }),
                                        }),
                                        v.jsx("td", {
                                          className:
                                            "py-3 px-4 font-bold uppercase text-[10px] text-slate-700 max-w-xs truncate",
                                          title: se.reason,
                                          children: v.jsxs("div", {
                                            className:
                                              "flex items-center gap-2",
                                            children: [
                                              v.jsx("span", {
                                                children: se.reason,
                                              }),
                                              Ue &&
                                                v.jsx("span", {
                                                  className:
                                                    "inline-flex items-center gap-1 bg-amber-200 text-amber-950 font-black px-1.5 py-0.5 rounded text-[8px] border border-amber-300 shadow-sm shrink-0 uppercase tracking-wide",
                                                  children: "Corte Indevido",
                                                }),
                                            ],
                                          }),
                                        }),
                                        v.jsxs("td", {
                                          className:
                                            "py-3 px-4 text-center font-mono font-black text-slate-900",
                                          children: [
                                            se.quantity.toLocaleString("pt-BR"),
                                            " un",
                                          ],
                                        }),
                                        v.jsx("td", {
                                          className: G(
                                            "py-3 px-4 text-right font-mono font-black",
                                            Ue
                                              ? "text-amber-800"
                                              : "text-slate-900",
                                          ),
                                          children: ce(se.value),
                                        }),
                                      ],
                                    },
                                    be,
                                  );
                                })
                              : v.jsx("tr", {
                                  children: v.jsx("td", {
                                    colSpan: 5,
                                    className:
                                      "py-8 text-center text-slate-500 italic",
                                    children:
                                      "Nenhum registro detalhado encontrado.",
                                  }),
                                }),
                        }),
                      ],
                    }),
                  }),
                  v.jsx("div", {
                    className:
                      "flex justify-end mt-4 pt-4 border-t border-zinc-200",
                    children: v.jsx("button", {
                      onClick: () => T(null),
                      className: G(
                        "px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all cursor-pointer shadow-md text-white",
                        r.primary === "amber"
                          ? "bg-amber-600 hover:bg-amber-700 shadow-amber-200/50"
                          : "bg-rose-500 hover:bg-rose-700 shadow-rose-200/50",
                      ),
                      children: "Fechar Detalhes",
                    }),
                  }),
                ],
              }),
            }),
        ],
      });
};
