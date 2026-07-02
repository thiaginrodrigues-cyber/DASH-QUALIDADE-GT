/* @ts-nocheck */
// Avaria Dashboard Component
import { Check, X, RotateCcw, Trash2, ShieldCheck, CheckCircle2 } from "lucide-react";
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

export const e3e = function e3e({ data: e = [], theme: t }) {
  const [activeSubTab, setActiveSubTab] = A.useState("AVARIA");
  const [classifications, setClassifications] = A.useState(() => {
    try {
      const stored = localStorage.getItem("qualidade_classifications");
      return stored ? JSON.parse(stored) : {};
    } catch (err) {
      return {};
    }
  });

  const handleClassify = (item, status) => {
    const key = `${item.sku}_${item.date}_${item.description}_${item.quantity}`;
    const newClassifications = { ...classifications, [key]: status };
    setClassifications(newClassifications);
    try {
      localStorage.setItem("qualidade_classifications", JSON.stringify(newClassifications));
    } catch (err) {
      console.error("Failed to save classifications to localStorage:", err);
    }
  };

  const [r, n] = A.useState(""),
    a = A.useMemo(
      () =>
        e.map((D) => {
          let k = null;
          const O = String(D.dateObj || D.date || "").trim();
          if (O) {
            if (O.includes("-")) k = new Date(O);
            else if (O.includes("/")) {
              const I = O.split("/");
              if (I.length === 3) {
                const B = parseInt(I[0], 10),
                  V = parseInt(I[1], 10) - 1,
                  L = parseInt(I[2], 10);
                k = new Date(L, V, B);
              }
            }
          }
          return { ...D, parsedDateObj: k };
        }),
      [e],
    ),
    aWithStatus = A.useMemo(() => {
      return a.map((D) => {
        const key = `${D.sku}_${D.date}_${D.description}_${D.quantity}`;
        const status = classifications[key] || "AVARIA";
        return { ...D, status, key };
      });
    }, [a, classifications]),
    i = A.useMemo(() => {
      const D = new Set<any>();
      return (
        a.forEach((k) => {
          k.date && D.add(k.date);
        }),
        Array.from(D).sort((k, O) => {
          const I = k.split("/"),
            B = O.split("/"),
            V =
              I.length === 3
                ? new Date(
                    parseInt(I[2]),
                    parseInt(I[1]) - 1,
                    parseInt(I[0]),
                  ).getTime()
                : 0;
          return (
            (B.length === 3
              ? new Date(
                  parseInt(B[2]),
                  parseInt(B[1]) - 1,
                  parseInt(B[0]),
                ).getTime()
              : 0) - V
          );
        })
      );
    }, [a]),
    [s, l] = A.useState(() => i[0] || ""),
    _dummy = A.useEffect(() => {
      if (!s && i.length > 0) {
        l(i[0]);
      }
    }, [i, s]),
    u = (D) => {
      const k = D.target.value;
      if (!k) return;
      const O = k.split("-");
      if (O.length === 3) {
        const I = `${O[2]}/${O[1]}/${O[0]}`;
        l(I);
      }
    },
    f = A.useMemo(() => {
      if (!s) return "";
      const D = s.split("/");
      return D.length === 3
        ? `${D[2]}-${D[1].padStart(2, "0")}-${D[0].padStart(2, "0")}`
        : "";
    }, [s]),
    tabCounts = A.useMemo(() => {
      let avaria = 0,
        recuperado = 0,
        descarte = 0;
      aWithStatus.forEach((item) => {
        if (item.date === s) {
          if (item.status === "AVARIA") avaria++;
          else if (item.status === "RECUPERADO") recuperado++;
          else if (item.status === "DESCARTE") descarte++;
        }
      });
      return { avaria, recuperado, descarte };
    }, [aWithStatus, s]),
    d = A.useMemo(() => {
      return aWithStatus.filter((D) => {
        const matchesDate = D.date === s;
        const matchesTab =
          (activeSubTab === "AVARIA" && D.status === "AVARIA") ||
          (activeSubTab === "RECUPERADOS" && D.status === "RECUPERADO") ||
          (activeSubTab === "DESCARTES" && D.status === "DESCARTE");
        const searchLower = r.toLowerCase();
        const matchesSearch =
          !r ||
          D.sku.toLowerCase().includes(searchLower) ||
          D.description.toLowerCase().includes(searchLower);
        return matchesDate && matchesTab && matchesSearch;
      });
    }, [aWithStatus, s, r, activeSubTab]),
    p = A.useMemo(() => {
      let D = 0,
        k = 0,
        O = 0;
      aWithStatus.forEach((I) => {
        if (I.date === s) {
          const matchesTab =
            (activeSubTab === "AVARIA" && I.status === "AVARIA") ||
            (activeSubTab === "RECUPERADOS" && I.status === "RECUPERADO") ||
            (activeSubTab === "DESCARTES" && I.status === "DESCARTE");
          if (matchesTab) {
            D += I.totalPrice;
            k += I.quantity;
            O++;
          }
        }
      });
      return {
        totalValue: D,
        totalQty: k,
        totalItems: O,
        avgPrice: k > 0 ? D / k : 0,
      };
    }, [aWithStatus, s, activeSubTab]),
    g = A.useMemo(() => {
      let D = 0,
        k = 0,
        O = 0;
      aWithStatus.forEach((item) => {
        const matchesTab =
          (activeSubTab === "AVARIA" && item.status === "AVARIA") ||
          (activeSubTab === "RECUPERADOS" && item.status === "RECUPERADO") ||
          (activeSubTab === "DESCARTES" && item.status === "DESCARTE");
        if (matchesTab) {
          D += item.totalPrice;
          k += item.quantity;
          O++;
        }
      });
      return { overallValue: D, overallQty: k, overallRows: O };
    }, [aWithStatus, activeSubTab]),
    totalDayValue = A.useMemo(() => {
      let sum = 0;
      a.forEach((I) => {
        if (I.date === s) {
          sum += I.totalPrice;
        }
      });
      return sum;
    }, [a, s]),
    currentSubTheme = A.useMemo(() => {
      if (activeSubTab === "RECUPERADOS") {
        return {
          name: "RECUPERADOS",
          colorClass: "emerald",
          primaryHex: "#10b981",
          iconBg: "bg-emerald-500/10 border-emerald-200 text-emerald-600",
          bannerBg: "from-emerald-600 to-emerald-800 border-emerald-950",
          badgeClass: "bg-emerald-100 text-emerald-800 border border-emerald-200",
          accentText: "text-emerald-600",
          chartColors: ["#10b981", "#059669", "#047857", "#065f46", "#34d399", "#6ee7b7", "#a7f3d0", "#022c22"],
          kpiIconBg: "bg-emerald-500/10 border-emerald-100 text-emerald-600",
          activeTabClass: "bg-emerald-600 text-white shadow-emerald-500/20",
          contextDesc: "Produtos recondicionados, reembalados ou recuperados operacionalmente para retorno seguro ao estoque do CD.",
          contextTitle: "Retorno de Ativos & Aproveitamento",
        };
      } else if (activeSubTab === "DESCARTES") {
        return {
          name: "DESCARTES",
          colorClass: "rose",
          primaryHex: "#f43f5e",
          iconBg: "bg-rose-500/10 border-rose-200 text-rose-600",
          bannerBg: "from-rose-600 to-rose-800 border-rose-950",
          badgeClass: "bg-rose-100 text-rose-800 border border-rose-200",
          accentText: "text-rose-600",
          chartColors: ["#f43f5e", "#e11d48", "#be123c", "#9f1239", "#fb7185", "#fca5a5", "#fecdd3", "#4c0519"],
          kpiIconBg: "bg-rose-500/10 border-rose-100 text-rose-600",
          activeTabClass: "bg-rose-600 text-white shadow-rose-500/20",
          contextDesc: "Baixa definitiva de perdas do estoque devido a avarias críticas, vencimento de validade ou deterioração irreparável.",
          contextTitle: "Baixa Crítica & Perdas Físicas",
        };
      } else {
        return {
          name: "AVARIA",
          colorClass: "amber",
          primaryHex: "#f59e0b",
          iconBg: "bg-amber-500/10 border-amber-200 text-amber-600",
          bannerBg: "from-amber-600 to-amber-800 border-amber-950",
          badgeClass: "bg-amber-100 text-amber-800 border border-amber-200",
          accentText: "text-amber-600",
          chartColors: ["#f59e0b", "#d97706", "#b45309", "#92400e", "#78350f", "#fca5a5", "#fbbf24", "#d97706"],
          kpiIconBg: "bg-amber-500/10 border-amber-100 text-amber-600",
          activeTabClass: "bg-amber-500 text-white shadow-amber-500/20",
          contextDesc: "O controle de avarias reflete produtos descartados, danificados ou vencidos identificados no CD. As análises permitem identificar falhas logísticas, problemas de manuseio ou SKUs recorrentes com alto índice de perdas.",
          contextTitle: "Identificação de Ocorrências",
        };
      }
    }, [activeSubTab]),
    x = A.useMemo(
      () => [...d].sort((D, k) => k.totalPrice - D.totalPrice),
      [d],
    ),
    b = A.useMemo(
      () =>
        x.slice(0, 10).map((D) => {
          const k = p.totalValue > 0 ? (D.totalPrice / p.totalValue) * 100 : 0;
          return {
            name:
              D.description.length > 22
                ? `${D.description.slice(0, 20)}...`
                : D.description,
            fullName: D.description,
            sku: D.sku,
            totalPrice: D.totalPrice,
            quantity: D.quantity,
            percentage: k,
          };
        }),
      [x, p.totalValue],
    ),
    [y, _] = A.useState(1),
    T = 8,
    N = Math.ceil(x.length / T),
    C = A.useMemo(() => {
      const D = (y - 1) * T;
      return x.slice(D, D + T);
    }, [x, y]),
    P = (D) => {
      D >= 1 && D <= N && _(D);
    },
    M = [
      "#f59e0b",
      "#d97706",
      "#b45309",
      "#92400e",
      "#78350f",
      "#f59e0b",
      "#d97706",
      "#b45309",
      "#92400e",
      "#78350f",
    ];
  return v.jsxs("div", {
    id: "avaria-dashboard-container",
    className: "space-y-6",
    children: [
      v.jsxs("div", {
        id: "avaria-header-bar",
        className:
          "flex flex-col xl:flex-row xl:items-center justify-between gap-4 p-6 bg-white/95 rounded-2xl border border-slate-200/60 shadow-sm",
        children: [
          v.jsx("div", {
            children: v.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                v.jsx("div", {
                  className: G(
                    "w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300",
                    currentSubTheme.iconBg
                  ),
                  children: v.jsx(DS, { className: "w-5 h-5" }),
                }),
                v.jsxs("div", {
                  children: [
                    v.jsx("h1", {
                      className: "text-xl font-bold text-slate-800",
                      children: "Controle de Qualidade",
                    }),
                    v.jsx("p", {
                      className: "text-xs text-slate-500",
                      children:
                        "Classificação de avarias, produtos recuperados e descartes da operação",
                    }),
                  ],
                }),
              ],
            }),
          }),
          v.jsxs("div", {
            className: "flex flex-wrap items-center gap-3",
            children: [
              v.jsxs("div", {
                className: "flex flex-col",
                children: [
                  v.jsx("span", {
                    className:
                      "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                    children: "Selecione uma Data",
                  }),
                  v.jsxs("div", {
                    className: "relative flex items-center",
                    children: [
                      v.jsx("input", {
                        type: "date",
                        value: f,
                        onChange: u,
                        className:
                          "pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:border-amber-400 focus:border-amber-500 focus:outline-none shadow-sm transition-all h-[38px] w-[160px]",
                      }),
                      v.jsx(Nx, {
                        className:
                          "w-4 h-4 text-slate-400 absolute left-3 pointer-events-none",
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex flex-col",
                children: [
                  v.jsx("span", {
                    className:
                      "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                    children: "Datas Disponíveis",
                  }),
                  v.jsx("select", {
                    value: s,
                    onChange: (D) => l(D.target.value),
                    className:
                      "px-4 py-2 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 bg-white hover:border-amber-400 focus:border-amber-500 focus:outline-none shadow-sm transition-all h-[38px] min-w-[140px]",
                    children:
                      i.length === 0
                        ? v.jsx("option", {
                            value: "",
                            children: "Nenhuma data",
                          })
                        : i.map((D) =>
                            v.jsx("option", { value: D, children: D }, D),
                          ),
                  }),
                ],
              }),
              v.jsxs("div", {
                className: "flex flex-col w-full sm:w-auto",
                children: [
                  v.jsx("span", {
                    className:
                      "text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1",
                    children: "Buscar SKU ou Produto",
                  }),
                  v.jsxs("div", {
                    className: "relative flex items-center",
                    children: [
                      v.jsx("input", {
                        type: "text",
                        placeholder: "Ex: 2002612 ou Sal Cisne...",
                        value: r,
                        onChange: (D) => n(D.target.value),
                        className:
                          "pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs text-slate-700 placeholder-slate-400 bg-white hover:border-amber-400 focus:border-amber-500 focus:outline-none shadow-sm transition-all h-[38px] w-full sm:w-[220px]",
                      }),
                      v.jsx(gm, {
                        className:
                          "w-4 h-4 text-slate-400 absolute left-3 pointer-events-none",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        id: "qualidade-sub-tabs-container",
        className: "flex flex-wrap items-center justify-between gap-4 bg-white/95 p-3 rounded-2xl border border-slate-100 shadow-sm",
        children: [
          v.jsxs("div", {
            className: "flex flex-wrap items-center gap-2 p-1 bg-slate-100/80 rounded-xl border border-slate-200/40",
            children: [
              v.jsxs("button", {
                onClick: () => {
                  setActiveSubTab("AVARIA");
                  _(1);
                },
                className: G(
                  "flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all",
                  activeSubTab === "AVARIA"
                    ? "bg-amber-500 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-800 hover:bg-white/40",
                ),
                children: [
                  v.jsx(DS, { className: "w-4 h-4" }),
                  v.jsx("span", { children: "Avaria" }),
                  v.jsx("span", {
                    className: G(
                      "px-1.5 py-0.5 text-[10px] font-bold rounded-md",
                      activeSubTab === "AVARIA"
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    ),
                    children: tabCounts.avaria,
                  }),
                ],
              }),
              v.jsxs("button", {
                onClick: () => {
                  setActiveSubTab("RECUPERADOS");
                  _(1);
                },
                className: G(
                  "flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all",
                  activeSubTab === "RECUPERADOS"
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-800 hover:bg-white/40",
                ),
                children: [
                  v.jsx(CheckCircle2, { className: "w-4 h-4" }),
                  v.jsx("span", { children: "Recuperados" }),
                  v.jsx("span", {
                    className: G(
                      "px-1.5 py-0.5 text-[10px] font-bold rounded-md",
                      activeSubTab === "RECUPERADOS"
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    ),
                    children: tabCounts.recuperado,
                  }),
                ],
              }),
              v.jsxs("button", {
                onClick: () => {
                  setActiveSubTab("DESCARTES");
                  _(1);
                },
                className: G(
                  "flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-lg transition-all",
                  activeSubTab === "DESCARTES"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-800 hover:bg-white/40",
                ),
                children: [
                  v.jsx(Trash2, { className: "w-4 h-4" }),
                  v.jsx("span", { children: "Descartes" }),
                  v.jsx("span", {
                    className: G(
                      "px-1.5 py-0.5 text-[10px] font-bold rounded-md",
                      activeSubTab === "DESCARTES"
                        ? "bg-white/20 text-white"
                        : "bg-slate-200 text-slate-600"
                    ),
                    children: tabCounts.descarte,
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            className: "text-right hidden md:block px-2",
            children: [
              v.jsx("span", {
                className: "text-[10px] uppercase font-bold tracking-wider text-slate-400 block",
                children: "Subsetor Ativo",
              }),
              v.jsx("span", {
                className: G("text-xs font-black", currentSubTheme.accentText),
                children:
                  activeSubTab === "AVARIA"
                    ? "Avaria"
                    : activeSubTab === "RECUPERADOS"
                      ? "Aproveitamento de Ativos"
                      : "Descarte & Baixas",
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        id: "avaria-kpis-grid",
        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",
        children: [
          v.jsxs("div", {
            className:
              "bg-white/90 p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4",
            children: [
              v.jsx("div", {
                className: G(
                  "w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-300",
                  currentSubTheme.kpiIconBg
                ),
                children: v.jsx(g$, { className: "w-6 h-6" }),
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("h4", {
                    className:
                      "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
                    children:
                      activeSubTab === "AVARIA"
                        ? "Valor em Análise (Dia)"
                        : activeSubTab === "RECUPERADOS"
                          ? "Valor Recuperado (Dia)"
                          : "Valor Descartado (Dia)",
                  }),
                  v.jsx("p", {
                    className:
                      "text-2xl font-black font-mono tracking-tight text-slate-800",
                    children: new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(p.totalValue),
                  }),
                  v.jsxs("p", {
                    className:
                      "text-[10px] text-slate-500 mt-1 flex items-center gap-1",
                    children: [
                      "Data selecionada: ",
                      v.jsx("strong", {
                        className: currentSubTheme.accentText,
                        children: s || "N/A",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            className:
              "bg-white/90 p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4",
            children: [
              v.jsx("div", {
                className: G(
                  "w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-300",
                  activeSubTab === "AVARIA"
                    ? "bg-amber-500/10 border-amber-100 text-amber-600"
                    : activeSubTab === "RECUPERADOS"
                      ? "bg-emerald-500/10 border-emerald-100 text-emerald-600"
                      : "bg-rose-500/10 border-rose-100 text-rose-600"
                ),
                children: v.jsx(x$, { className: "w-6 h-6" }),
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("h4", {
                    className:
                      "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
                    children:
                      activeSubTab === "AVARIA"
                        ? "Qtde em Análise (Dia)"
                        : activeSubTab === "RECUPERADOS"
                          ? "Qtde Recuperada (Dia)"
                          : "Qtde Descartada (Dia)",
                  }),
                  v.jsxs("p", {
                    className:
                      "text-2xl font-black font-mono tracking-tight text-slate-800",
                    children: [
                      new Intl.NumberFormat("pt-BR").format(p.totalQty),
                      " ",
                      v.jsx("span", {
                        className:
                          "text-xs font-normal text-slate-400 font-sans",
                        children: "unidades",
                      }),
                    ],
                  }),
                  v.jsxs("p", {
                    className: "text-[10px] text-slate-500 mt-1",
                    children: [
                      "Média de ",
                      v.jsx("strong", {
                        className: "text-slate-700",
                        children: (p.totalItems > 0
                          ? p.totalQty / p.totalItems
                          : 0
                        ).toFixed(1),
                      }),
                      " por registro",
                    ],
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            className:
              "bg-white/90 p-5 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4",
            children: [
              v.jsx("div", {
                className: G(
                  "w-12 h-12 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-300",
                  activeSubTab === "AVARIA"
                    ? "bg-yellow-500/10 border-yellow-100 text-yellow-600"
                    : activeSubTab === "RECUPERADOS"
                      ? "bg-emerald-500/10 border-emerald-100 text-emerald-600"
                      : "bg-rose-500/10 border-rose-100 text-rose-600"
                ),
                children: v.jsx(MEe, { className: "w-6 h-6" }),
              }),
              v.jsxs("div", {
                children: [
                  v.jsx("h4", {
                    className:
                      "text-[10px] font-bold text-slate-400 uppercase tracking-wider",
                    children:
                      activeSubTab === "AVARIA"
                        ? "Avaria"
                        : activeSubTab === "RECUPERADOS"
                          ? "Taxa de Recuperação (Dia)"
                          : "Taxa de Descarte (Dia)",
                  }),
                  v.jsxs("p", {
                    className:
                      "text-2xl font-black font-mono tracking-tight text-slate-800",
                    children: [
                      activeSubTab === "AVARIA"
                        ? p.totalItems
                        : `${(totalDayValue > 0 ? (p.totalValue / totalDayValue) * 100 : 0).toFixed(1)}%`,
                      " ",
                      v.jsx("span", {
                        className:
                          "text-xs font-normal text-slate-400 font-sans",
                        children: activeSubTab === "AVARIA" ? "linhas" : "do valor total",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className: "text-[10px] text-slate-500 mt-1",
                    children:
                      activeSubTab === "AVARIA"
                        ? v.jsxs(A.Fragment, {
                            children: [
                              "Representa ",
                              v.jsx("strong", {
                                className: "text-amber-600",
                                children: `${(totalDayValue > 0 ? (p.totalValue / totalDayValue) * 100 : 0).toFixed(1)}%`,
                              }),
                              " do valor total diário",
                            ],
                          })
                        : activeSubTab === "RECUPERADOS"
                          ? v.jsxs(A.Fragment, {
                              children: [
                                "Soma de ",
                                v.jsx("strong", {
                                  className: "text-emerald-600",
                                  children: p.totalItems,
                                }),
                                " itens reaproveitados",
                              ],
                            })
                          : v.jsxs(A.Fragment, {
                              children: [
                                "Soma de ",
                                v.jsx("strong", {
                                  className: "text-rose-600",
                                  children: p.totalItems,
                                }),
                                " itens descartados",
                              ],
                            }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        id: "avaria-main-content",
        className: "grid grid-cols-1 lg:grid-cols-12 gap-6",
        children: [
          v.jsxs("div", {
            className:
              "lg:col-span-7 bg-white/95 p-6 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between min-h-[460px]",
            children: [
              v.jsxs("div", {
                children: [
                  v.jsxs("div", {
                    className: "flex items-center justify-between mb-2",
                    children: [
                      v.jsx("h3", {
                        className: "text-sm font-bold text-slate-800",
                        children: "Distribuição Financeira por Item",
                      }),
                      v.jsx("span", {
                        className:
                          "text-[10px] bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider",
                        children: "Top 10 Itens",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className: "text-xs text-slate-400 mb-6",
                    children:
                      "Gráfico ilustrativo de perdas financeiras (Preço Total) por SKU selecionado no dia",
                  }),
                ],
              }),
              v.jsx("div", {
                className: "h-[320px] w-full",
                children:
                  b.length === 0
                    ? v.jsxs("div", {
                        className:
                          "w-full h-full flex flex-col items-center justify-center border border-dashed border-slate-200 rounded-2xl p-6",
                        children: [
                          v.jsx(DS, {
                            className: "w-10 h-10 text-slate-300 mb-2",
                          }),
                          v.jsxs("p", {
                            className:
                              "text-xs text-slate-400 font-bold uppercase tracking-wider",
                            children: ["Sem dados de gráfico para o dia ", s],
                          }),
                          v.jsx("p", {
                            className: "text-[11px] text-slate-400 mt-1",
                            children:
                              "Selecione outra data ou limpe os filtros de busca",
                          }),
                        ],
                      })
                    : v.jsx(Xu, {
                        width: "100%",
                        height: "100%",
                        children: v.jsxs(n1, {
                          data: b,
                          margin: { top: 25, right: 10, left: -20, bottom: 20 },
                          children: [
                            v.jsx(Ju, {
                              strokeDasharray: "3 3",
                              vertical: !1,
                              stroke: "#f1f5f9",
                            }),
                            v.jsx(tf, {
                              dataKey: "name",
                              tick: { fill: "#64748b", fontSize: 9 },
                              axisLine: !1,
                              tickLine: !1,
                              interval: 0,
                              tickFormatter: (D) =>
                                D.length > 12 ? `${D.slice(0, 10)}..` : D,
                            }),
                            v.jsx(rf, {
                              tick: { fill: "#64748b", fontSize: 10 },
                              axisLine: !1,
                              tickLine: !1,
                              tickFormatter: (D) => `R$${D}`,
                            }),
                            v.jsx(_c, {
                              contentStyle: {
                                backgroundColor: "#1e293b",
                                border: "none",
                                borderRadius: "12px",
                                padding: "12px",
                              },
                              labelStyle: {
                                color: "#fff",
                                fontWeight: "bold",
                                fontSize: "11px",
                                marginBottom: "4px",
                              },
                              itemStyle: { color: "#fbbf24", fontSize: "11px" },
                              formatter: (D, k, O) => {
                                var B;
                                const I = O.payload;
                                return [
                                  v.jsxs(
                                    "div",
                                    {
                                      className: "space-y-1",
                                      children: [
                                        v.jsx("p", {
                                          className:
                                            "text-amber-400 font-bold font-mono",
                                          children: new Intl.NumberFormat(
                                            "pt-BR",
                                            {
                                              style: "currency",
                                              currency: "BRL",
                                            },
                                          ).format(Number(D)),
                                        }),
                                        v.jsxs("p", {
                                          className:
                                            "text-slate-300 text-[10px]",
                                          children: [
                                            "Qtde: ",
                                            v.jsx("span", {
                                              className: "font-bold",
                                              children: I.quantity,
                                            }),
                                          ],
                                        }),
                                        v.jsxs("p", {
                                          className:
                                            "text-slate-300 text-[10px]",
                                          children: [
                                            "Porcentagem: ",
                                            v.jsxs("span", {
                                              className:
                                                "font-bold text-amber-300",
                                              children: [
                                                (B = I.percentage) == null
                                                  ? void 0
                                                  : B.toFixed(1),
                                                "%",
                                              ],
                                            }),
                                          ],
                                        }),
                                        v.jsx("p", {
                                          className:
                                            "text-slate-400 text-[9px] max-w-[200px] whitespace-normal leading-tight",
                                          children: I.fullName,
                                        }),
                                      ],
                                    },
                                    I.sku,
                                  ),
                                  "Preço Total",
                                ];
                              },
                            }),
                            v.jsxs(wh, {
                              dataKey: "totalPrice",
                              radius: [6, 6, 0, 0],
                              maxBarSize: 38,
                              children: [
                                b.map((D, k) =>
                                  v.jsx(
                                    Ff,
                                    { fill: currentSubTheme.chartColors[k % currentSubTheme.chartColors.length] },
                                    `cell-${k}`,
                                  ),
                                ),
                                v.jsx(kc, {
                                  dataKey: "totalPrice",
                                  position: "top",
                                  formatter: (D) =>
                                    new Intl.NumberFormat("pt-BR", {
                                      style: "currency",
                                      currency: "BRL",
                                      maximumFractionDigits: 0,
                                    }).format(Number(D)),
                                  style: {
                                    fill: "#475569",
                                    fontSize: "10px",
                                    fontWeight: "bold",
                                  },
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
              }),
            ],
          }),
          v.jsxs("div", {
            className: G(
              "lg:col-span-5 bg-gradient-to-br p-6 rounded-3xl shadow-md text-white flex flex-col justify-between min-h-[460px] transition-all duration-300",
              currentSubTheme.bannerBg
            ),
            children: [
              v.jsxs("div", {
                children: [
                  v.jsxs("div", {
                    className: "flex items-center gap-2 mb-4",
                    children: [
                      v.jsx(
                        activeSubTab === "AVARIA"
                          ? DS
                          : activeSubTab === "RECUPERADOS"
                            ? CheckCircle2
                            : Trash2,
                        { className: "w-5 h-5 text-white/90" }
                      ),
                      v.jsx("h3", {
                        className: "font-bold text-white tracking-wide",
                        children: currentSubTheme.contextTitle,
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className: "text-xs text-white/90 leading-relaxed mb-6",
                    children: currentSubTheme.contextDesc,
                  }),
                  v.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      v.jsxs("div", {
                        className:
                          "bg-black/15 p-4 rounded-xl border border-white/5",
                        children: [
                          v.jsx("span", {
                            className:
                              "text-[10px] text-white/70 uppercase font-bold tracking-wider block mb-1",
                            children:
                              activeSubTab === "AVARIA"
                                ? "Impacto Acumulado Geral (Histórico)"
                                : activeSubTab === "RECUPERADOS"
                                  ? "Aproveitamento Acumulado (Histórico)"
                                  : "Baixas Acumuladas (Histórico)",
                          }),
                          v.jsx("p", {
                            className: "text-xl font-black font-mono",
                            children: new Intl.NumberFormat("pt-BR", {
                              style: "currency",
                              currency: "BRL",
                            }).format(g.overallValue),
                          }),
                          v.jsx("span", {
                            className: "text-[10px] text-white/60",
                            children:
                              activeSubTab === "AVARIA"
                                ? "Soma de todas as ocorrências de avarias históricas"
                                : activeSubTab === "RECUPERADOS"
                                  ? "Soma do valor de produtos salvos e reutilizados"
                                  : "Soma total do valor de mercadorias dadas como perda",
                          }),
                        ],
                      }),
                      v.jsxs("div", {
                        className:
                          "bg-black/15 p-4 rounded-xl border border-white/5",
                        children: [
                          v.jsx("span", {
                            className:
                              "text-[10px] text-white/70 uppercase font-bold tracking-wider block mb-1",
                            children:
                              activeSubTab === "AVARIA"
                                ? "Volume de Itens Avariados"
                                : activeSubTab === "RECUPERADOS"
                                  ? "Volume Recuperado"
                                  : "Volume Descartado",
                          }),
                          v.jsxs("p", {
                            className: "text-xl font-black font-mono",
                            children: [
                              new Intl.NumberFormat("pt-BR").format(
                                g.overallQty,
                              ),
                              " unidades",
                            ],
                          }),
                          v.jsxs("span", {
                            className: "text-[10px] text-white/60",
                            children: [
                              "Quantidade física total no histórico de ",
                              g.overallRows,
                              " registros",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              v.jsxs("div", {
                className:
                  "pt-6 border-t border-white/10 mt-6 flex items-center justify-between",
                children: [
                  v.jsxs("div", {
                    className:
                      "flex items-center gap-1.5 text-xs text-white/80",
                    children: [
                      v.jsx("div", {
                        className:
                          "w-2 h-2 rounded-full bg-emerald-400 animate-ping",
                      }),
                      v.jsx("span", {
                        children: "Sincronizado com o Planilhas",
                      }),
                    ],
                  }),
                  v.jsx("span", {
                    className:
                      "text-[10px] font-bold font-mono bg-white/15 px-3 py-1 rounded-lg text-white",
                    children: `Subsetor: ${activeSubTab === "AVARIA" ? "Avaria" : activeSubTab === "RECUPERADOS" ? "Recuperados" : "Descartes"}`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      v.jsxs("div", {
        id: "avaria-ranking-table-section",
        className:
          "bg-white/95 rounded-3xl border border-slate-100 shadow-sm p-6",
        children: [
          v.jsxs("div", {
            className:
              "flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4",
            children: [
              v.jsxs("div", {
                children: [
                  v.jsxs("h3", {
                    className:
                      "text-sm font-bold text-slate-800 flex items-center gap-2",
                    children: [
                      v.jsx("span", {
                        children: "Ranking de Perdas Financeiras por Item",
                      }),
                      v.jsx("span", {
                        className:
                          "text-[10px] font-mono bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-md",
                        children: "Maior para Menor",
                      }),
                    ],
                  }),
                  v.jsx("p", {
                    className: "text-xs text-slate-400 mt-1",
                    children:
                      "Lista ordenada contendo SKU, descrição, quantidade, e indicador de percentual referente ao valor total do dia selecionado",
                  }),
                ],
              }),
              v.jsxs("div", {
                className:
                  "text-xs text-slate-500 font-semibold bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-xl",
                children: [
                  "Registros Encontrados: ",
                  v.jsx("span", {
                    className: "font-bold text-amber-600",
                    children: x.length,
                  }),
                ],
              }),
            ],
          }),
          v.jsx("div", {
            className: "overflow-x-auto rounded-2xl border border-slate-100",
            children: v.jsxs("table", {
              className: "w-full text-left border-collapse min-w-[700px]",
              children: [
                v.jsx("thead", {
                  children: v.jsxs("tr", {
                    className:
                      "bg-slate-50/70 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-wider",
                    children: [
                      v.jsx("th", {
                        className: "py-4 px-5 text-center w-16",
                        children: "Pos",
                      }),
                      v.jsx("th", {
                        className: "py-4 px-4 w-32",
                        children: "SKU",
                      }),
                      v.jsx("th", {
                        className: "py-4 px-4",
                        children: "Descrição do Produto",
                      }),
                      v.jsx("th", {
                        className: "py-4 px-4 text-center",
                        children: "Quantidade",
                      }),
                      v.jsx("th", {
                        className: "py-4 px-4 text-center",
                        children: "Emb / Fator",
                      }),
                      v.jsx("th", {
                        className: "py-4 px-4 text-right",
                        children: "Preço Unitário",
                      }),
                      v.jsx("th", {
                        className: "py-4 px-4 text-right",
                        children: "Preço Total",
                      }),
                      v.jsx("th", {
                        className: "py-4 px-5 text-center w-48",
                        children: "Porcentagem do Dia",
                      }),
                      v.jsx("th", {
                        className: "py-4 px-4 text-center w-48",
                        children: "Ações de Qualidade",
                      }),
                    ],
                  }),
                }),
                v.jsx("tbody", {
                  children:
                    C.length === 0
                      ? v.jsx("tr", {
                          children: v.jsxs("td", {
                            colSpan: 9,
                            className:
                              "py-12 text-center text-slate-400 text-xs",
                            children: [
                              "Nenhum registro encontrado para a data ",
                              s,
                              " com os critérios definidos.",
                            ],
                          }),
                        })
                      : C.map((D, k) => {
                          const O = (y - 1) * T + k + 1,
                            I =
                              p.totalValue > 0
                                ? (D.totalPrice / p.totalValue) * 100
                                : 0;
                          return v.jsxs(
                            "tr",
                            {
                              className:
                                "border-b border-slate-50 hover:bg-slate-50/50 transition-colors group",
                              children: [
                                v.jsx("td", {
                                  className: "py-3 px-5 text-center",
                                  children: v.jsx("span", {
                                    className: G(
                                      "w-6 h-6 rounded-lg text-xs font-bold font-mono inline-flex items-center justify-center",
                                      O === 1
                                        ? "bg-amber-500 text-white"
                                        : O === 2
                                          ? "bg-amber-400 text-slate-800"
                                          : O === 3
                                            ? "bg-amber-200 text-slate-800"
                                            : "bg-slate-100 text-slate-500",
                                    ),
                                    children: O,
                                  }),
                                }),
                                v.jsx("td", {
                                  className:
                                    "py-3 px-4 font-mono text-xs text-slate-600 font-medium",
                                  children: D.sku,
                                }),
                                v.jsx("td", {
                                  className:
                                    "py-3 px-4 text-xs font-semibold text-slate-700 max-w-xs truncate group-hover:text-amber-700 transition-colors",
                                  children:
                                    D.description || "Produto sem descrição",
                                }),
                                v.jsx("td", {
                                  className:
                                    "py-3 px-4 text-center font-mono text-xs text-slate-600 font-bold",
                                  children: D.quantity,
                                }),
                                v.jsx("td", {
                                  className:
                                    "py-3 px-4 text-center text-xs text-slate-500",
                                  children: v.jsx("span", {
                                    className:
                                      "px-2 py-1 bg-slate-100 rounded text-[10px] font-bold text-slate-600",
                                    children: D.conversionFactor || "UN",
                                  }),
                                }),
                                v.jsx("td", {
                                  className:
                                    "py-3 px-4 text-right font-mono text-xs text-slate-600",
                                  children: new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                  }).format(D.unitPrice),
                                }),
                                v.jsx("td", {
                                  className:
                                    "py-3 px-4 text-right font-mono text-xs text-slate-800 font-black",
                                  children: new Intl.NumberFormat("pt-BR", {
                                    style: "currency",
                                    currency: "BRL",
                                  }).format(D.totalPrice),
                                }),
                                v.jsx("td", {
                                  className: "py-3 px-5 text-center",
                                  children: v.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                      v.jsx("div", {
                                        className:
                                          "w-full bg-slate-100 h-2.5 rounded-full overflow-hidden",
                                        children: v.jsx("div", {
                                          className: G(
                                            "h-full rounded-full transition-all duration-300",
                                            activeSubTab === "AVARIA"
                                              ? "bg-amber-500"
                                              : activeSubTab === "RECUPERADOS"
                                                ? "bg-emerald-500"
                                                : "bg-rose-500"
                                          ),
                                          style: {
                                            width: `${Math.min(100, I)}%`,
                                          },
                                        }),
                                      }),
                                      v.jsxs("span", {
                                        className:
                                          "text-[10px] font-black font-mono text-slate-500 w-10 text-right",
                                        children: [I.toFixed(1), "%"],
                                      }),
                                    ],
                                  }),
                                }),
                                v.jsx("td", {
                                  className: "py-3 px-4 text-center",
                                  children: v.jsxs("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                      activeSubTab === "AVARIA"
                                        ? v.jsxs(v.Fragment, {
                                            children: [
                                              v.jsxs("button", {
                                                onClick: () => handleClassify(D.key, "RECUPERADO"),
                                                className: "inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white border border-emerald-200 hover:border-emerald-600 rounded-lg text-[10px] font-bold transition-all shadow-sm cursor-pointer",
                                                title: "Classificar como Recuperado",
                                                children: [
                                                  v.jsx(Check, { className: "w-3 h-3" }),
                                                  v.jsx("span", { children: "Recuperar" }),
                                                ],
                                              }),
                                              v.jsxs("button", {
                                                onClick: () => handleClassify(D.key, "DESCARTE"),
                                                className: "inline-flex items-center gap-1 px-2.5 py-1 bg-rose-50 text-rose-700 hover:bg-rose-600 hover:text-white border border-rose-200 hover:border-rose-600 rounded-lg text-[10px] font-bold transition-all shadow-sm cursor-pointer",
                                                title: "Classificar como Descarte",
                                                children: [
                                                  v.jsx(Trash2, { className: "w-3 h-3" }),
                                                  v.jsx("span", { children: "Descartar" }),
                                                ],
                                              }),
                                            ],
                                          })
                                        : v.jsxs("button", {
                                            onClick: () => handleClassify(D.key, "AVARIA"),
                                            className: "inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-700 hover:bg-amber-500 hover:text-white border border-slate-200 hover:border-amber-500 rounded-lg text-[10px] font-bold transition-all shadow-sm cursor-pointer",
                                            title: "Retornar para Avaria",
                                            children: [
                                              v.jsx(RotateCcw, { className: "w-3 h-3" }),
                                              v.jsx("span", { children: "Desfazer" }),
                                            ],
                                          }),
                                    ],
                                  }),
                                }),
                              ],
                            },
                            `${D.sku}-${k}`,
                          );
                        }),
                }),
              ],
            }),
          }),
          N > 1 &&
            v.jsxs("div", {
              className: "flex items-center justify-between mt-6",
              children: [
                v.jsxs("p", {
                  className: "text-xs text-slate-400",
                  children: [
                    "Mostrando página ",
                    v.jsx("span", {
                      className: "font-bold text-slate-600",
                      children: y,
                    }),
                    " de ",
                    v.jsx("span", {
                      className: "font-bold text-slate-600",
                      children: N,
                    }),
                    " (",
                    x.length,
                    " registros no total)",
                  ],
                }),
                v.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    v.jsx("button", {
                      onClick: () => P(y - 1),
                      disabled: y === 1,
                      className:
                        "p-2 border border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent transition-all",
                      children: v.jsx(m$, {
                        className: "w-4 h-4 text-slate-500",
                      }),
                    }),
                    Array.from({ length: N }).map((D, k) => {
                      const O = k + 1;
                      return N > 5 && Math.abs(y - O) > 2 && O !== 1 && O !== N
                        ? O === 2 || O === N - 1
                          ? v.jsx(
                              "span",
                              {
                                className: "text-xs text-slate-400 px-1",
                                children: "...",
                              },
                              O,
                            )
                          : null
                        : v.jsx(
                            "button",
                            {
                              onClick: () => P(O),
                              className: G(
                                "px-3 py-1.5 rounded-xl text-xs font-bold transition-all",
                                y === O
                                  ? activeSubTab === "AVARIA"
                                    ? "bg-amber-500 text-white shadow-md"
                                    : activeSubTab === "RECUPERADOS"
                                      ? "bg-emerald-600 text-white shadow-md"
                                      : "bg-rose-600 text-white shadow-md"
                                  : "border border-slate-200 text-slate-500 hover:bg-slate-50",
                              ),
                              children: O,
                            },
                            O,
                          );
                    }),
                    v.jsx("button", {
                      onClick: () => P(y + 1),
                      disabled: y === N,
                      className:
                        "p-2 border border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-40 disabled:hover:bg-transparent transition-all",
                      children: v.jsx(a1, {
                        className: "w-4 h-4 text-slate-500",
                      }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
    ],
  });
};
