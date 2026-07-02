/* @ts-nocheck */
// Main App Component with Firebase sync and dashboard routing
import {
  v,
  A,
  NA,
  G,
  Gr,
  UO,
  Ko,
  N2,
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
} from "./components/Compat";

import { Ex, up, p8, Tx, h8, T3e } from "./components/Helpers";
import { i3e, ZDe } from "./components/OccupancyMap";
import { a3e } from "./components/InventarioGeral";
import { JDe } from "./components/CortesDashboard";
import { e3e } from "./components/AvariaDashboard";

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, onSnapshot, setDoc } from "firebase/firestore";

// Firebase Configuration from the target deployed app
const MK = {
  projectId: "ai-studio-applet-webapp-673a1",
  appId: "1:93518935745:web:a02ed92d777afa749d8640",
  apiKey: "AIzaSyA5dUq4rvzOYI31eoKDjJATIcOl6ihMlGY",
  authDomain: "ai-studio-applet-webapp-673a1.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-eb1afb46-5a52-4c7a-b0c9-0f2b099c23ff",
  storageBucket: "ai-studio-applet-webapp-673a1.firebasestorage.app",
  messagingSenderId: "93518935745",
  measurementId: "",
};

const LK = initializeApp(MK);
const b2 = getAuth(LK);
const d8 = getFirestore(LK, MK.firestoreDatabaseId);

const TPe = signInWithPopup;
const aPe = signOut;
const i8 = doc;
const UDe = onSnapshot;
const Qo = GoogleAuthProvider;
const VDe = setDoc;
const nPe = onAuthStateChanged;

// Theme generator helper function from bundle
const n3e = (e) => {
  switch (e) {
    case "QUALIDADE":
    case "AVARIA":
      return {
        primary: "amber",
        bg: "bg-slate-50",
        realBg: "#f8fafc",
        sidebarBg: "bg-white",
        contentBg: "bg-amber-600/95 backdrop-blur-xl",
        border: "border-amber-700",
        contentBorder:
          "border-amber-900 border-4 shadow-[0_0_20px_rgba(245,158,11,0.4)]",
        active: "bg-amber-800 text-white shadow-amber-500/30",
        hover: "hover:bg-amber-50",
        text: "text-slate-600",
        contentText: "text-amber-50",
        contentTitle: "text-white",
        icon: "text-amber-200",
        wave1: "rgba(255,255,255,0.1)",
        wave2: "rgba(255,255,255,0.05)",
        shadow: "shadow-amber-200/50",
        contentShadow: "shadow-2xl shadow-amber-900/20",
        accent: "text-amber-400",
        logo: "#f59e0b",
        logoTop: "#ffffff",
        headerTitle: "text-amber-900",
        headerText: "text-amber-700/90",
      };
    case "MAPA DE OCUPAÇÃO":
      return {
        primary: "zinc",
        bg: "bg-slate-50",
        realBg: "#f8fafc",
        sidebarBg: "bg-white",
        contentBg: "bg-[#313135]/95 backdrop-blur-xl",
        border: "border-zinc-200",
        contentBorder:
          "border-black border-2 shadow-[0_0_0_1px_rgba(0,0,0,0.1)]",
        active: "bg-zinc-900 text-white shadow-2xl",
        hover: "hover:bg-zinc-100",
        text: "text-zinc-500",
        contentText: "text-zinc-100",
        contentTitle: "text-white",
        icon: "text-zinc-400",
        wave1: "rgba(255,255,255,0.05)",
        wave2: "rgba(0,0,0,0.01)",
        shadow: "shadow-black/10",
        contentShadow: "shadow-[0_0_30px_rgba(0,0,0,0.4)]",
        accent: "text-white",
        logo: "#000000",
        logoTop: "#ffffff",
        headerTitle: "text-white",
        headerText: "text-zinc-400",
      };
    case "INVENTARIO GERAL GIROTRADE":
      return {
        primary: "blue",
        bg: "bg-slate-50",
        realBg: "#f8fafc",
        sidebarBg: "bg-white",
        contentBg: "bg-blue-600/95 backdrop-blur-xl",
        border: "border-blue-700",
        contentBorder:
          "border-blue-900 border-4 shadow-[0_0_20px_rgba(59,130,246,0.4)]",
        active: "bg-blue-800 text-white",
        hover: "hover:bg-blue-50",
        text: "text-slate-600",
        contentText: "text-blue-50",
        contentTitle: "text-white",
        icon: "text-blue-200",
        wave1: "rgba(255,255,255,0.1)",
        wave2: "rgba(255,255,255,0.05)",
        shadow: "shadow-blue-200/50",
        contentShadow: "shadow-2xl shadow-blue-900/20",
        accent: "text-blue-400",
        logo: "#3b82f6",
        logoTop: "#ffffff",
        headerTitle: "text-blue-900",
        headerText: "text-blue-700/90",
      };
    case "ANALISE DE CORTE":
      return {
        primary: "rose",
        bg: "bg-slate-50",
        realBg: "#f8fafc",
        sidebarBg: "bg-white",
        contentBg: "bg-white/95 backdrop-blur-xl",
        border: "border-rose-100",
        contentBorder: "border-2 border-rose-600 shadow-md",
        active: "bg-rose-600 text-white shadow-rose-500/30",
        hover: "hover:bg-rose-50",
        text: "text-slate-600",
        contentText: "text-rose-900",
        contentTitle: "text-rose-950",
        icon: "text-rose-700",
        wave1: "rgba(244,63,94,0.05)",
        wave2: "rgba(244,63,94,0.02)",
        shadow: "shadow-rose-400/30",
        contentShadow: "shadow-md",
        accent: "text-rose-700",
        logo: "#f43f5e",
        headerTitle: "text-rose-950",
        headerText: "text-rose-800",
      };
    default:
      return {
        primary: "emerald",
        bg: "bg-slate-50",
        realBg: "#f8fafc",
        sidebarBg: "bg-white",
        contentBg: "bg-emerald-900/95 backdrop-blur-xl",
        border: "border-emerald-100",
        contentBorder: "border-4 border-emerald-400",
        active: "bg-emerald-600 text-white",
        hover: "hover:bg-emerald-50",
        text: "text-slate-600",
        contentText: "text-emerald-50",
        contentTitle: "text-white",
        icon: "text-emerald-300",
        wave1: "rgba(255,255,255,0.1)",
        wave2: "rgba(255,255,255,0.05)",
        shadow: "shadow-emerald-200/50",
        contentShadow: "shadow-[0_0_20px_rgba(52,211,153,0.4)]",
        accent: "text-emerald-400",
        logo: "#34d399",
        logoTop: "#ffffff",
        headerTitle: "text-black",
        headerText: "text-black font-semibold opacity-90",
      };
  }
};

function S3e() {
  const [e, t] = A.useState(() => {
      try {
        const Q = localStorage.getItem("dashboard_data_local");
        return Q ? JSON.parse(Q) : null;
      } catch {
        return null;
      }
    }),
    [r, n] = A.useState("QUALIDADE"),
    [a, i] = A.useState("overview"),
    [s, l] = A.useState(null),
    [u, f] = A.useState(!0),
    [d, p] = A.useState(!1),
    [g, x] = A.useState(null),
    [b, y] = A.useState(null),
    [_, T] = A.useState("analitico"),
    [N, C] = A.useState(""),
    [P, M] = A.useState("ALL"),
    D = "/api/fetch-sheets",
    k = (s == null ? void 0 : s.email) === "thiagin.rodrigues@gmail.com",
    O = A.useCallback(async (Q) => {
      var xr, cn, Jt;
      console.log(`[Sync] Sheets found: ${Q.SheetNames.join(", ")}`);
      const Z =
          Q.SheetNames.find((Qe) => {
            const We = Qe.toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
            return (
              We.includes("CONTAGEM_CICLICA_1_GIRO") ||
              We.includes("DETALHES POR RUA")
            );
          }) || Q.SheetNames[0],
        ne = Q.Sheets[Z],
        ue = Ko.sheet_to_json(ne, { header: 1 }) as any,
        Ce = Q.SheetNames.find(
          (Qe) =>
            Qe.toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "") === "DIARIO",
        ),
        Pe = Ce ? Q.Sheets[Ce] : null;
      let de = 0,
        ce = 0,
        He = 0,
        Y = [],
        St = [];
      if (Pe) {
        const Qe = Ko.sheet_to_json(Pe, { header: 1 }) as any,
          We = Qe[0] || [],
          rt = (et) =>
            We.findIndex((qe) =>
              et.some(($e) =>
                String(qe || "")
                  .toUpperCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes($e),
              ),
            ),
          _t = {
            date: rt(["DATA"]),
            count: rt(["CONTAGEM", "UNIDADES", "QTDE"]) || 2,
            weeklyGoal: rt(["META SEMANAL", "META SEMANA"]) || 12,
          };
        _t.date === -1 && (_t.date = 0);
        const bt =
          Number((xr = Qe[1]) == null ? void 0 : xr[_t.weeklyGoal]) || 0;
        bt > 0 && (He = bt);
        let Pt = 0;
        for (let et = 1; et < Qe.length; et++) {
          const qe = Qe[et];
          if (!qe || !qe[_t.date]) continue;
          const $e = qe[_t.date],
            Xe = Number(qe[_t.count]) || 0;
          ce += Xe;
          let Ye = null;
          if (typeof $e == "number")
            Ye = new Date(
              Math.round(($e - 25569) * 86400 * 1e3) + 720 * 60 * 1e3,
            );
          else if (typeof $e == "string") {
            const tt = $e.split("/");
            tt.length === 3
              ? (Ye = new Date(
                  Number(tt[2]),
                  Number(tt[1]) - 1,
                  Number(tt[0]),
                  12,
                  0,
                  0,
                ))
              : (Ye = new Date($e));
          }
          if (Ye && !isNaN(Ye.getTime())) {
            const tt = Ye.toLocaleDateString("pt-BR", { weekday: "long" }),
              ot = tt.charAt(0).toUpperCase() + tt.slice(1);
            Ye.getDay() === 0 ||
              ot.toLowerCase().includes("domingo") ||
              (Y.push({
                date: Ye.toLocaleDateString("pt-BR"),
                dayName: ot,
                count: Xe,
              }),
              Xe > 0 && (Pt = Xe));
          }
        }
        de = Pt;
        const It = {
          "Semana 1": { count: 0, start: 1, end: 7 },
          "Semana 2": { count: 0, start: 8, end: 14 },
          "Semana 3": { count: 0, start: 15, end: 21 },
          "Semana 4": { count: 0, start: 22, end: 31 },
        };
        (Y.forEach((et) => {
          const qe = et.date.split("/"),
            $e = Number(qe[0]);
          let Xe = "Semana 4";
          ($e <= 7
            ? (Xe = "Semana 1")
            : $e <= 14
              ? (Xe = "Semana 2")
              : $e <= 21 && (Xe = "Semana 3"),
            (It[Xe].count += et.count));
        }),
          (St = Object.entries(It).map(([et, qe]) => ({
            weekRange: `${et} (Dia ${qe.start} ao ${qe.end})`,
            count: qe.count,
          }))));
      }
      const Fe: any = {
          totalPositions: 0,
          totalCounted: 0,
          totalPending: 0,
          accuracy: 0,
          finalAccuracy: 0,
          totalErrors: 0,
          surplus: 0,
          shortage: 0,
          finalizedDivergences: 0,
          generalStatus: 0,
          dailyCount: de,
          monthlyCount: ce,
          weeklyGoal: He,
          dailyGoal: 0,
          weeklyGoalCalculated: 0,
          dailyHistory: Y,
          weeklyHistory: St,
          collaboratorCounts: [],
          streets: [],
          occupancyData: {
            totalStructure: 0,
            totalAddresses: 0,
            totalOccupied: 0,
            totalDefinitivo: 0,
            totalOperacional: 0,
            totalDisponivel: 0,
            globalPercentage: 0,
            areas: [],
          },
        },
        At =
          Q.SheetNames.find((Qe) =>
            Qe.toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes("TABELA OCUPACAO CD"),
          ) ||
          Q.SheetNames.find((Qe) =>
            Qe.toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .includes("OCUPACAO CD"),
          );
      if (At) {
        const Qe = Q.Sheets[At],
          We = Ko.sheet_to_json(Qe, { header: 1 }) as any,
          rt = [];
        let _t = 0,
          bt = 0,
          Pt = 0,
          It = 0,
          et = 0,
          qe = 0,
          $e = null,
          Xe = null;
        const Ye = [
          "PICKING",
          "PICKING DUPLO",
          "FRACIONADO",
          "PULMAO",
          "TUNEL",
          "SEGURANCA/INFRA",
          "SEGURANCA / INFRA",
          "SUBTOTAL",
          "TOTAL CD",
        ];
        for (let ot = 0; ot < We.length; ot++) {
          const ht = We[ot];
          if (!ht) continue;
          const pt = String(ht[0] || "").trim();
          if (!pt && !ht[1] && !ht[2]) continue;
          let it = pt,
            kt = it
              .toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
          if (kt === "TOTAL CD") continue;
          kt === "SUBTOTAL" && ((it = "TOTAL CD"), (kt = "TOTAL CD"));
          const Lt = Number(ht[1]) || 0,
            Xt = Number(ht[2]) || 0,
            qt = Number(ht[3]) || 0,
            Ht = Number(ht[4]) || 0,
            q = Number(ht[5]) || 0,
            te = Number(ht[6]) || 0;
          let K = Number(ht[7]);
          isNaN(K)
            ? (K = Xt > 0 ? (qt / Xt) * 100 : 0)
            : K <= 1 && K > 0 && (K = K * 100);
          const J =
              Ye.includes(kt) ||
              kt === "FRACIONADO" ||
              (it === it.toUpperCase() &&
                /[A-Z]/.test(it) &&
                kt !== "FRACIONADOS"),
            re = kt.includes("TOTAL") || kt.includes("SUBTOTAL"),
            ae = {
              area: it || "Sem Nome",
              structure: Lt,
              addresses: Xt,
              occupied: qt,
              definitivo: Ht,
              operacional: q,
              disponivel: te,
              percentage: K,
              isCategory: J,
              ...(J ? { subcategories: [] } : {}),
            };
          J
            ? (rt.push(ae),
              ($e = ae),
              kt === "TOTAL CD" && (Xe = ae),
              !re &&
                kt !== "TOTAL CD" &&
                ((_t += Lt),
                (bt += Xt),
                (Pt += qt),
                (It += Ht),
                (et += q),
                (qe += te)))
            : $e && it && ((cn = $e.subcategories) == null || cn.push(ae));
        }
        const tt = rt.find((ot) => ot.area.toUpperCase().includes("TOTAL CD"));
        (tt &&
          Xe &&
          (tt.structure === 0 && (tt.structure = Xe.structure),
          tt.addresses === 0 && (tt.addresses = Xe.addresses),
          tt.occupied === 0 && (tt.occupied = Xe.occupied),
          tt.definitivo === 0 && (tt.definitivo = Xe.definitivo),
          tt.operacional === 0 && (tt.operacional = Xe.operacional),
          tt.disponivel === 0 && (tt.disponivel = Xe.disponivel),
          tt.percentage === 0 && (tt.percentage = Xe.percentage)),
          _t === 0 && tt
            ? ((_t = tt.structure),
              (bt = tt.addresses),
              (Pt = tt.occupied),
              (It = tt.definitivo),
              (et = tt.operacional),
              (qe = tt.disponivel))
            : Xe &&
              (_t === 0 && (_t = Xe.structure),
              bt === 0 && (bt = Xe.addresses),
              Pt === 0 && (Pt = Xe.occupied),
              It === 0 && (It = Xe.definitivo),
              et === 0 && (et = Xe.operacional),
              qe === 0 && (qe = Xe.disponivel)),
          (Fe.occupancyData = {
            totalStructure: _t,
            totalAddresses: bt,
            totalOccupied: Pt,
            totalDefinitivo: It,
            totalOperacional: et,
            totalDisponivel: qe,
            globalPercentage: bt > 0 ? (Pt / bt) * 100 : 0,
            areas: rt,
          }));
      }
      let se = Q.SheetNames.find((Qe) => {
        const We = Qe.toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return We === "SETORES" || We.includes("SETOR");
      });
      if (!se)
        for (const Qe of Q.SheetNames) {
          const We = Q.Sheets[Qe],
            rt = Ko.sheet_to_json(We, { header: 1 }) as any;
          if (rt && rt.length > 0)
            for (let _t = 0; _t < Math.min(8, rt.length); _t++) {
              const bt = JSON.stringify(rt[_t] || "")
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
              if (
                bt.includes("RUA") &&
                (bt.includes("PREDIO") ||
                  bt.includes("MODULO") ||
                  bt.includes("POSICAO")) &&
                (bt.includes("ANDAR") || bt.includes("NIVEL"))
              ) {
                ((se = Qe),
                  console.log(
                    `[Sync] Automatically identified "Setores" sheet inside: "${Qe}" by content analysis.`,
                  ));
                break;
              }
            }
          if (se) break;
        }
      if (se) {
        console.log(`[Sync] Parsing "Setores" sheet using name: "${se}"`);
        const Qe = Q.Sheets[se],
          We = Ko.sheet_to_json(Qe, { header: 1 }) as any,
          rt = [];
        let _t = 1,
          bt = 2,
          Pt = 3,
          It = 9,
          et = 0;
        for (let $e = 0; $e < Math.min(10, We.length); $e++) {
          const Xe = We[$e];
          if (!Xe) continue;
          const Ye = Xe.findIndex((pt) => {
              const it = String(pt || "")
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
              return it === "RUA" || it === "RUAS" || it.startsWith("RUA ");
            }),
            tt = Xe.findIndex((pt) => {
              const it = String(pt || "")
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
              return (
                it.includes("PREDIO") ||
                it.includes("MODULO") ||
                it.includes("POSICAO")
              );
            }),
            ot = Xe.findIndex((pt) => {
              const it = String(pt || "")
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
              return it.includes("ANDAR") || it.includes("NIVEL");
            }),
            ht = Xe.findIndex((pt) => {
              const it = String(pt || "")
                .toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "");
              return (
                it.includes("SETOR") ||
                it.includes("CLASSIFICACAO") ||
                it.includes("CATEGORIA") ||
                it.includes("SETOR QUE REPRESENTA")
              );
            });
          if (Ye !== -1 && tt !== -1 && ot !== -1) {
            ((et = $e),
              (_t = Ye),
              (bt = tt),
              (Pt = ot),
              ht !== -1 && (It = ht),
              console.log(
                `[Sync] Found dynamic columns at row ${$e}: RuaCol=${_t}, PredioCol=${bt}, AndarCol=${Pt}, SetorCol=${It}`,
              ));
            break;
          }
        }
        const qe = et + 1;
        for (let $e = qe; $e < We.length; $e++) {
          const Xe = We[$e];
          if (!Xe) continue;
          const Ye = Xe[_t],
            tt = Xe[bt],
            ot = Xe[Pt],
            ht = Xe[It];
          if (Ye == null || String(Ye).trim() === "") continue;
          const pt = String(Ye).replace(/\D/g, ""),
            it = String(tt || "").replace(/\D/g, ""),
            kt = String(ot || "").replace(/\D/g, ""),
            Lt = parseInt(pt, 10),
            Xt = parseInt(it, 10),
            qt = parseInt(kt, 10),
            Ht = ht ? String(ht).trim() : "";
          !isNaN(Lt) &&
            !isNaN(Xt) &&
            !isNaN(qt) &&
            rt.push({ rua: Lt, predio: Xt, andar: qt, setor: Ht });
        }
        ((Fe.setoresLayout = rt),
          Fe.occupancyData && (Fe.occupancyData.setoresLayout = rt),
          console.log(
            `[Sync] Successfully parsed ${rt.length} positions with mapped sectors!`,
          ),
          rt.length > 0 &&
            console.log("[Sync] Sample mapped sectors:", rt.slice(0, 5)));
      } else
        console.warn(
          `[Sync] WARNING: "Setores" sheet not found inside the excel file! Available sheets: ${Q.SheetNames.join(", ")}`,
        );
      const be = (Qe) => {
          if (!Qe) return null;
          if (Qe instanceof Date) return isNaN(Qe.getTime()) ? null : Qe;
          const We = String(Qe).trim();
          if (!We || We === "N/A") return null;
          if (/^\d+(\.\d+)?$/.test(We)) {
            const Pt = Math.floor(Number(We));
            if (Pt >= 4e4 && Pt <= 6e4) {
              const It = new Date((Pt - 25569) * 86400 * 1e3),
                et = new Date(
                  It.getUTCFullYear(),
                  It.getUTCMonth(),
                  It.getUTCDate(),
                );
              if (!isNaN(et.getTime())) return et;
            }
            return null;
          }
          const _t = We.replace(/[-.]/g, "/").split("/");
          if (_t.length === 3) {
            let Pt = parseInt(_t[0], 10),
              It = parseInt(_t[1], 10) - 1,
              et = parseInt(_t[2], 10);
            if (
              (_t[0].length === 4
                ? ((et = parseInt(_t[0], 10)),
                  (It = parseInt(_t[1], 10) - 1),
                  (Pt = parseInt(_t[2], 10)))
                : et < 100 && (et += et < 50 ? 2e3 : 1900),
              It >= 0 && It <= 11 && Pt >= 1 && Pt <= 31)
            ) {
              const qe = new Date(et, It, Pt);
              if (!isNaN(qe.getTime())) return qe;
            }
          }
          const bt = new Date(We);
          return isNaN(bt.getTime()) ? null : bt;
        },
        Ue = Q.SheetNames.find((Qe) => {
          const We = Qe.toUpperCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          return (
            We.includes("INVENTARIO GT") ||
            We.includes("INVENTARIO_GT") ||
            We.includes("INV GT") ||
            We.includes("GIROTRADE") ||
            We.includes("INVENTARIO GERAL") ||
            We === "GT" ||
            We.startsWith("GT ") ||
            We.endsWith(" GT")
          );
        });
      if (Ue) {
        console.log(`[Sync] Encontrada aba de Inventário Geral GT: ${Ue}`);
        const Qe = Q.Sheets[Ue],
          We = Ko.sheet_to_json(Qe, { header: 1 }) as any;
        let rt = 0,
          _t = 0;
        const bt = [
            "SKU",
            "CODIGO",
            "CÓDIGO",
            "MATERIAL",
            "COD_MAT",
            "PRODUTO_COD",
            "COD_PROD",
            "DESCRICAO",
            "DESCRIÇÃO",
            "NOME",
            "PRODUTO",
            "MATERIAL_DESC",
            "ENDERECO",
            "ENDEREÇO",
            "POSICAO",
            "POSIÇÃO",
            "LOCAL",
            "LOCALIZACAO",
            "LOCALIZAÇÃO",
            "VALIDADE",
            "VENCIMENTO",
            "DT_VENC",
            "DT_VALIDADE",
            "EXPIRATION",
            "VALOR BR",
            "VALOR_BR",
            "VALOR",
            "CUSTO",
          ],
          Pt = Math.min(We.length, 15);
        for (let we = 0; we < Pt; we++) {
          const me = We[we];
          if (!me) continue;
          let xe = 0;
          (me.forEach((De) => {
            if (De == null) return;
            const Ve = String(De)
              .toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .trim();
            if (!Ve) return;
            bt.some((Be) => {
              const Ke = Be.toUpperCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .trim();
              return Ve === Ke || Ve.includes(Ke);
            }) && xe++;
          }),
            xe > _t && ((_t = xe), (rt = we)));
        }
        console.log(
          `[Sync] GT Headers scanning: Row ${rt} chosen as header row with ${_t} matches.`,
        );
        const It = We[rt] || [],
          et = (we) => {
            const me = we.map((De) =>
                String(De)
                  .trim()
                  .toUpperCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, ""),
              ),
              xe = It.map((De) =>
                De == null
                  ? ""
                  : String(De)
                      .trim()
                      .toUpperCase()
                      .normalize("NFD")
                      .replace(/[\u0300-\u036f]/g, ""),
              );
            for (const De of me) {
              const Ve = xe.findIndex((Ge) => Ge === De);
              if (Ve !== -1) return Ve;
            }
            for (const De of me) {
              if (De.length < 3) continue;
              const Ve = xe.findIndex(
                (Ge) => Ge.startsWith(De) || Ge.endsWith(De) || Ge.includes(De),
              );
              if (Ve !== -1) return Ve;
            }
            return -1;
          },
          qe = (we, me) => {
            const xe = et(we);
            return xe !== -1 ? xe : me;
          },
          $e = {
            sku: qe(
              [
                "CODIGO DO PRODUTO",
                "SKU",
                "CODIGO",
                "MATERIAL",
                "COD_MAT",
                "PRODUTO_COD",
                "COD_PROD",
              ],
              10,
            ),
            desc: qe(
              ["DESCRICAO", "DESCRIÇÃO", "NOME", "PRODUTO", "MATERIAL_DESC"],
              12,
            ),
            address: qe(
              [
                "LOCACAO",
                "LOCAÇÃO",
                "ENDERECO",
                "ENDEREÇO",
                "POSICAO",
                "POSIÇÃO",
                "LOCAL",
                "LOCALIZACAO",
                "LOCALIZAÇÃO",
              ],
              1,
            ),
            area: qe(
              [
                "TIPO DO LOCAL",
                "TIPO_LOCAL",
                "AREA",
                "ÁREA",
                "SETOR",
                "TIPO_END",
                "TIPO ENDERECO",
              ],
              2,
            ),
            estado: qe(["ESTADO", "SITUACAO", "SITUAÇÃO", "STATUS"], 4),
            exp: qe(
              [
                "DATA DE VENCIMENTO",
                "DATA DE VENCIMENTO TRUNCADA",
                "VENCIMENTO",
                "VALIDADE",
                "DT_VENC",
                "DT VENC",
                "DT_VALIDADE",
                "DT VALIDADE",
                "DATA VALIDADE",
                "DATA DE VALIDADE",
                "EXPIRATION",
                "EXP_DATE",
              ],
              68,
            ),
            shelf: qe(["PRAZO DE VALIDADE", "SHELF LIFE", "SHELF", "AL"], 37),
            valor: qe(
              [
                "VALOR BR",
                "VALOR_BR",
                "VALOR",
                "CUSTO",
                "PRECO",
                "PREÇO",
                "TOTAL",
                "VALOR TOTAL",
              ],
              69,
            ),
          };
        console.log(
          "[Sync] Mapeamento de Colunas GT (Dinâmico + Fallback):",
          $e,
        );
        const Xe =
            et([
              "TIPO DO LOCAL",
              "TIPO_LOCAL",
              "AREA",
              "ÁREA",
              "SETOR",
              "TIPO_END",
              "TIPO ENDERECO",
            ]) !== -1,
          Ye = [],
          tt = [],
          ot = new Set(),
          ht = new Set();
        let pt = 0,
          it = 0,
          kt = 0,
          Lt = 0,
          Xt = 0,
          qt = 0,
          Ht = 0,
          q = 0;
        const te = new Date();
        te.setHours(0, 0, 0, 0);
        for (let we = rt + 1; we < We.length; we++) {
          const me = We[we];
          if (!me) continue;
          const xe = $e.sku < me.length ? String(me[$e.sku] || "").trim() : "";
          if (
            !xe ||
            xe.toUpperCase() === "SKU" ||
            xe.toUpperCase() === "CODIGO" ||
            xe.toUpperCase() === "CÓDIGO"
          )
            continue;
          const De =
              $e.area < me.length
                ? String(me[$e.area] || "")
                    .trim()
                    .toUpperCase()
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                : "",
            Ve =
              $e.address < me.length ? String(me[$e.address] || "").trim() : "";
          let Ge = !Xe;
          if (Xe) {
            const rn = De === "PICKING",
              qa = De === "PULMAO BLOCADO",
              An = (De.startsWith("PULMAO") || De.includes("PULMAO")) && !qa;
            rn
              ? (Ge = !0)
              : qa
                ? (Ge =
                    Ve.startsWith("18") ||
                    Ve.startsWith("81") ||
                    Ve.startsWith("90"))
                : An && (Ge = !0);
          }
          const Be =
            $e.desc < me.length ? String(me[$e.desc] || "").trim() : "";
          $e.estado < me.length &&
            String(me[$e.estado] || "")
              .trim()
              .toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "");
          const Ke =
            $e.shelf < me.length &&
            me[$e.shelf] !== void 0 &&
            me[$e.shelf] !== null
              ? me[$e.shelf]
              : "N/A";
          let lt = 0;
          if ($e.valor < me.length) {
            const rn = me[$e.valor];
            if (rn != null)
              if (typeof rn == "number") lt = rn;
              else {
                const qa = String(rn)
                  .replace(/[R$\s]/g, "")
                  .replace(/\./g, "")
                  .replace(",", ".");
                lt = parseFloat(qa) || 0;
              }
          }
          let gr = "N/A";
          const ur = $e.exp < me.length ? me[$e.exp] : void 0;
          let fr = null,
            Sr = "NORMAL";
          const ha = be(ur);
          if (ha) {
            const rn = String(ha.getDate()).padStart(2, "0"),
              qa = String(ha.getMonth() + 1).padStart(2, "0"),
              An = String(ha.getFullYear()).slice(-2);
            gr = `${rn}/${qa}/${An}`;
            const Ka = ha.getTime() - te.getTime();
            ((fr = Math.ceil(Ka / (1e3 * 60 * 60 * 24))),
              fr <= 15
                ? (Sr = "PERDA")
                : fr <= 30
                  ? (Sr = "PRÉ PERDA")
                  : fr <= 60
                    ? (Sr = "FEFO")
                    : fr <= 90 && (Sr = "PRÉ FEFO"));
          } else ur != null && (gr = String(ur).trim());
          const li = {
            sku: xe,
            description: Be,
            address: Ve,
            expirationDate: gr,
            shelfLifeAL: Ke,
            daysRemaining: fr,
            category: Sr,
            valueBR: lt,
          };
          (ht.add(xe),
            tt.push(li),
            Sr === "PERDA"
              ? q++
              : Sr === "PRÉ PERDA"
                ? Ht++
                : Sr === "FEFO"
                  ? qt++
                  : Sr === "PRÉ FEFO" && Xt++,
            Ge &&
              (ot.add(xe),
              Ye.push(li),
              Sr === "PERDA"
                ? Lt++
                : Sr === "PRÉ PERDA"
                  ? kt++
                  : Sr === "FEFO"
                    ? it++
                    : Sr === "PRÉ FEFO" && pt++));
        }
        const K = Ye.length > 0 ? Ye : tt,
          J = Ye.length > 0 ? ot : ht,
          re = Ye.length > 0 ? pt : Xt,
          ae = Ye.length > 0 ? it : qt,
          Ee = Ye.length > 0 ? kt : Ht,
          Ie = Ye.length > 0 ? Lt : q;
        (console.log(
          `[Sync] GT processed items: ${K.length} (Strict area match: ${Ye.length > 0})`,
        ),
          (Fe.inventarioGT = {
            items: K,
            uniqueSKUCount: J.size,
            preFefoCount: re,
            fefoCount: ae,
            prePerdaCount: Ee,
            perdaCount: Ie,
          }));
      }
      const Je = Q.SheetNames.find((Qe) => {
        const We = Qe.toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return We.includes("CORTES") && !We.includes("WMS");
      });
      if (Je) {
        console.log(`[Sync] Encontrada aba de Cortes: ${Je}`);
        const Qe = Q.Sheets[Je],
          We: any = Ko.sheet_to_json(Qe, { header: 1 }),
          rt = [],
          _t = (ot) => {
            if (ot == null) return 0;
            if (typeof ot == "number") return ot;
            const ht = String(ot).trim();
            if (!ht) return 0;
            const pt = ht
              .replace(/R\$\s*/gi, "")
              .replace(/[^\d.,-]/g, "")
              .trim();
            if (!pt) return 0;
            if (pt.includes(",") && pt.includes(".")) {
              const kt = pt.lastIndexOf(","),
                Lt = pt.lastIndexOf(".");
              return kt > Lt
                ? parseFloat(pt.replace(/\./g, "").replace(",", "."))
                : parseFloat(pt.replace(/,/g, ""));
            } else if (pt.includes(","))
              return parseFloat(pt.replace(",", "."));
            const it = parseFloat(pt);
            return isNaN(it) ? 0 : it;
          };
        let bt = 1,
          Pt = 2,
          It = 6,
          et = 7,
          qe = 8,
          $e = 10,
          Xe = 3,
          Ye = 0;
        for (let ot = 0; ot < Math.min(We.length, 12); ot++) {
          const ht = We[ot];
          if (!ht) continue;
          let pt = 0,
            it = -1,
            kt = -1,
            Lt = -1,
            Xt = -1,
            qt = -1,
            Ht = -1,
            q = -1;
          for (let te = 0; te < ht.length; te++) {
            const K = String(ht[te] || "")
              .toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .trim();
            K &&
              (K === "SKU" || K === "CODIGO" || K === "COD" || K === "COD."
                ? ((it = te), pt++)
                : K.includes("DESCRIC") || K === "DESC" || K.includes("PRODUTO")
                  ? ((kt = te), pt++)
                  : K.includes("DATA") ||
                      K.includes("DATE") ||
                      K.includes("EMISSAO") ||
                      K.includes("CORTE")
                    ? ((Lt = te), pt++)
                    : K.includes("QTD") ||
                        K.includes("QUANT") ||
                        K.includes("VOLUME") ||
                        K === "QTD." ||
                        K === "QTDE"
                      ? ((Xt = te), pt++)
                      : K.includes("VALOR") ||
                          K.includes("PRECO") ||
                          K.includes("TOTAL") ||
                          K.includes("R$") ||
                          K.includes("IMPACTO") ||
                          K.includes("FINANC")
                        ? ((qt = te), pt++)
                        : K.includes("MOTIVO") ||
                            K.includes("REASON") ||
                            K.includes("JUSTIF") ||
                            K.includes("CAUSA")
                          ? ((Ht = te), pt++)
                          : (K.includes("PEDIDO") ||
                              K.includes("ORDEM") ||
                              K === "PED" ||
                              K.includes("Nº PEDIDO") ||
                              K.includes("N.PEDIDO") ||
                              K.includes("NUM.PEDIDO") ||
                              K.includes("DOCUMENTO")) &&
                            (q = te));
          }
          if (pt >= 2 && it !== -1) {
            ((Ye = ot),
              (bt = it),
              kt !== -1 && (Pt = kt),
              Lt !== -1 && (It = Lt),
              Xt !== -1 && (et = Xt),
              qt !== -1 && (qe = qt),
              Ht !== -1 && ($e = Ht),
              q !== -1 && (Xe = q),
              console.log(
                `[Sync] Mapeamento dinâmico de CORTES na linha ${ot}: SKU=${bt}, DESC=${Pt}, DATA=${It}, QTD=${et}, VALOR=${qe}, MOTIVO=${$e}, PEDIDO=${Xe}`,
              ));
            break;
          }
        }
        const tt = Ye + 1;
        for (let ot = tt; ot < We.length; ot++) {
          const ht = We[ot];
          if (!ht) continue;
          const pt = ht[bt];
          if (pt == null) continue;
          const it = String(pt).trim(),
            kt = it.toUpperCase();
          if (
            !it ||
            kt === "SKU" ||
            kt === "UNDEFINED" ||
            kt === "NULL" ||
            kt === "TOTAL" ||
            kt === "TOTAL GERAL" ||
            kt === "SUBTOTAL" ||
            kt.startsWith("TOTAL:")
          )
            continue;
          const Lt = String(ht[Pt] || "").trim();
          let Xt = "";
          const qt = ht[It],
            Ht = be(qt);
          if (Ht) {
            const re = String(Ht.getDate()).padStart(2, "0"),
              ae = String(Ht.getMonth() + 1).padStart(2, "0"),
              Ee = Ht.getFullYear();
            Xt = `${re}/${ae}/${Ee}`;
          } else qt != null && (Xt = String(qt).trim());
          const q = _t(ht[et]),
            te = _t(ht[qe]),
            K = String(ht[$e] || "NÃO CATALOGADO").trim(),
            J =
              ht[Xe] !== void 0 && ht[Xe] !== null ? String(ht[Xe]).trim() : "";
          rt.push({
            sku: it,
            description: Lt,
            date: Xt,
            dateObj: Ht ? Ht.toISOString() : null,
            quantity: q,
            value: te,
            reason: K,
            pedido: J,
          });
        }
        (console.log(
          `[Sync] Total de registros de cortes mapeados: ${rt.length}`,
        ),
          (Fe.cortes = rt));
      }
      const nt = Q.SheetNames.find((Qe) => {
        const We = Qe.toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return We.includes("CORTES") && We.includes("WMS");
      });
      if (nt) {
        console.log(`[Sync] Encontrada aba de Cortes WMS: ${nt}`);
        const Qe = Q.Sheets[nt],
          We: any = Ko.sheet_to_json(Qe, { header: 1 }),
          rt = [],
          _t = (et) => {
            if (et == null) return 0;
            if (typeof et == "number") return et;
            const qe = String(et).trim();
            if (!qe) return 0;
            const $e = qe
              .replace(/R\$\s*/gi, "")
              .replace(/[^\d.,-]/g, "")
              .trim();
            if (!$e) return 0;
            if ($e.includes(",") && $e.includes(".")) {
              const Ye = $e.lastIndexOf(","),
                tt = $e.lastIndexOf(".");
              return Ye > tt
                ? parseFloat($e.replace(/\./g, "").replace(",", "."))
                : parseFloat($e.replace(/,/g, ""));
            } else if ($e.includes(","))
              return parseFloat($e.replace(",", "."));
            const Xe = parseFloat($e);
            return isNaN(Xe) ? 0 : Xe;
          };
        let bt = 0,
          Pt = -1;
        for (let et = 0; et < Math.min(We.length, 12); et++) {
          const qe = We[et];
          if (!qe) continue;
          let $e = 0;
          for (let Xe = 0; Xe < qe.length; Xe++) {
            const Ye = String(qe[Xe] || "")
              .toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .trim();
            Ye &&
              ((Ye.includes("SKU") ||
                Ye === "CODIGO" ||
                Ye === "COD" ||
                Ye === "COD.") &&
                $e++,
              (Ye.includes("DATA") ||
                Ye.includes("DATE") ||
                Ye.includes("EMISSAO") ||
                Ye === "DIA") &&
                (Pt = Xe));
          }
          if ($e > 0) {
            bt = et;
            break;
          }
        }
        if (Pt === -1)
          for (let et = 0; et < 30; et++) {
            if (et === 0 || et === 6 || et === 8 || et === 10 || et === 25)
              continue;
            let qe = 0;
            for (let $e = bt + 1; $e < Math.min(We.length, bt + 15); $e++) {
              const Xe = (Jt = We[$e]) == null ? void 0 : Jt[et];
              Xe && be(Xe) && qe++;
            }
            if (qe > 3) {
              ((Pt = et),
                console.log(
                  `[Sync] Detectou dinamicamente a coluna de datas em Cortes WMS: índice ${Pt}`,
                ));
              break;
            }
          }
        const It = bt + 1;
        for (let et = It; et < We.length; et++) {
          const qe = We[et];
          if (!qe) continue;
          const $e = qe[6];
          if ($e == null) continue;
          const Xe = String($e).trim(),
            Ye = Xe.toUpperCase();
          if (
            !Xe ||
            Ye === "SKU" ||
            Ye === "UNDEFINED" ||
            Ye === "NULL" ||
            Ye === "TOTAL" ||
            Ye === "TOTAL GERAL" ||
            Ye === "SUBTOTAL" ||
            Ye.startsWith("TOTAL:")
          )
            continue;
          const tt = String(qe[8] || "").trim(),
            ot = String(qe[0] || "NÃO CATALOGADO").trim(),
            ht = _t(qe[10]),
            pt = _t(qe[25]);
          let it = "",
            kt = null;
          if (Pt !== -1) {
            const Lt = qe[Pt];
            kt = be(Lt);
          }
          if (!kt)
            for (let Lt = 0; Lt < Math.min(qe.length, 30); Lt++) {
              if (Lt === 0 || Lt === 6 || Lt === 8 || Lt === 10 || Lt === 25)
                continue;
              const Xt = be(qe[Lt]);
              if (Xt) {
                kt = Xt;
                break;
              }
            }
          if (kt) {
            const Lt = String(kt.getDate()).padStart(2, "0"),
              Xt = String(kt.getMonth() + 1).padStart(2, "0"),
              qt = kt.getFullYear();
            it = `${Lt}/${Xt}/${qt}`;
          }
          rt.push({
            sku: Xe,
            description: tt,
            date: it,
            dateObj: kt ? kt.toISOString() : null,
            quantity: ht,
            value: pt,
            reason: ot,
          });
        }
        (console.log(
          `[Sync] Total de registros de cortes WMS mapeados: ${rt.length}`,
        ),
          (Fe.cortesWMS = rt));
      }
      const yt = Q.SheetNames.find((Qe) => {
        const normalized = Qe.toUpperCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "");
        return (
          normalized.includes("AVARIA") ||
          normalized.includes("AVARIAS") ||
          normalized.includes("AVAR") ||
          normalized.includes("PERDAS") ||
          normalized.includes("QUEBRAS")
        );
      });
      if (yt) {
        console.log(`[Sync] Encontrada aba de Avarias: ${yt}`);
        const Qe = Q.Sheets[yt],
          We: any = Ko.sheet_to_json(Qe, { header: 1 }),
          rt = [],
          _t = (Ye) => {
            if (Ye == null) return 0;
            if (typeof Ye == "number") return Ye;
            const tt = String(Ye).trim();
            if (!tt || tt === "-" || tt.includes("R$ -")) return 0;
            const ot = tt
              .replace(/R\$\s*/gi, "")
              .replace(/[^\d.,-]/g, "")
              .trim();
            if (!ot) return 0;
            if (ot.includes(",") && ot.includes(".")) {
              const pt = ot.lastIndexOf(","),
                it = ot.lastIndexOf(".");
              return pt > it
                ? parseFloat(ot.replace(/\./g, "").replace(",", "."))
                : parseFloat(ot.replace(/,/g, ""));
            } else if (ot.includes(","))
              return parseFloat(ot.replace(",", "."));
            const ht = parseFloat(ot);
            return isNaN(ht) ? 0 : ht;
          };
        let bt = 0,
          Pt = 2,
          It = 3,
          et = 4,
          qe = 5,
          $e = 6,
          Xe = 7,
          headerRowIdx = 0;
        for (let Ye = 0; Ye < Math.min(We.length, 15); Ye++) {
          const tt = We[Ye];
          if (!tt) continue;
          let matchedCount = 0,
            detectedDate = -1,
            detectedSku = -1,
            detectedDesc = -1,
            detectedQty = -1,
            detectedUnit = -1,
            detectedUnitPrice = -1,
            detectedTotalPrice = -1;
          for (let pt = 0; pt < tt.length; pt++) {
            const it = String(tt[pt] || "")
              .toUpperCase()
              .normalize("NFD")
              .replace(/[\u0300-\u036f]/g, "")
              .trim();
            if (!it) continue;
            if (it.includes("DATA") || it === "DIA" || it.includes("DATE") || it.includes("EMISSAO")) {
              detectedDate = pt;
              matchedCount++;
            } else if (it === "SKU" || it.includes("CODIGO RM") || it === "CODIGO" || it === "COD" || it === "COD." || it === "MATERIAL" || it === "RM") {
              detectedSku = pt;
              matchedCount++;
            } else if (it.includes("PRODUTO") || it.includes("DESCRIC") || it === "DESC" || it === "DESC." || it === "NOME" || it === "ITEM") {
              detectedDesc = pt;
              matchedCount++;
            } else if (it.includes("QUANTIDADE") || it.includes("QTDE") || it.includes("QTD") || it === "QUANT" || it === "VOLUME") {
              detectedQty = pt;
              matchedCount++;
            } else if (it.includes("UNIDADE") || it.includes("EMBALAGEM") || it.includes("FATOR") || it === "UND" || it === "UN" || it === "EMB" || it === "EMB.") {
              detectedUnit = pt;
              matchedCount++;
            } else if (it.includes("PRECO UNIT") || it.includes("VALOR UNIT") || it.includes("UNITARIO") || it.includes("UNIT.") || it === "VLR UNIT" || it === "VLR. UNIT." || it === "VLR.UNIT") {
              detectedUnitPrice = pt;
              matchedCount++;
            } else if (it.includes("PRECO TOTAL") || it.includes("VALOR TOTAL") || it === "TOTAL" || it === "VALOR" || it.includes("VLR TOTAL") || it.includes("VALOR_TOTAL") || it.includes("TOTAL AVARIA")) {
              detectedTotalPrice = pt;
              matchedCount++;
            }
          }
          if (matchedCount >= 2 && detectedSku !== -1) {
            headerRowIdx = Ye;
            if (detectedDate !== -1) bt = detectedDate;
            if (detectedSku !== -1) Pt = detectedSku;
            if (detectedDesc !== -1) It = detectedDesc;
            if (detectedQty !== -1) et = detectedQty;
            if (detectedUnit !== -1) qe = detectedUnit;
            if (detectedUnitPrice !== -1) $e = detectedUnitPrice;
            if (detectedTotalPrice !== -1) Xe = detectedTotalPrice;
            console.log(
              `[Sync] Mapeamento dinâmico de AVARIA na linha ${Ye}: DATA=${bt}, SKU=${Pt}, DESC=${It}, QTD=${et}, UN=${qe}, VALOR_UNIT=${$e}, VALOR_TOTAL=${Xe}`,
            );
            break;
          }
        }
        
        // Forçar mapeamento exato solicitado pelo usuário para garantir a máxima precisão
        bt = 0; // Coluna A (Data)
        Pt = 2; // Coluna C (SKU)
        It = 3; // Coluna D (Descrição do produto)
        et = 4; // Coluna E (Quantidade)
        qe = 5; // Coluna F (Unidade/Fator)
        $e = 6; // Coluna G (Preço unitário)
        Xe = 7; // Coluna H (Preço total)
        
        let lastSeenDate = "";
        let lastSeenDateObj: string | null = null;
        
        const startDataRow = headerRowIdx + 1;
        for (let Ye = startDataRow; Ye < We.length; Ye++) {
          const tt = We[Ye];
          if (!tt || tt.length === 0) continue;
          const ot = tt[Pt];
          if (ot == null || String(ot).trim() === "") continue;
          const ht = String(ot).trim();
          if (
            ht.toUpperCase().includes("TOTAL") ||
            ht.toUpperCase().includes("SUBTOTAL") ||
            ht.toUpperCase() === "SKU" ||
            ht.toUpperCase() === "CODIGO" ||
            ht.toUpperCase() === "CÓDIGO"
          ) continue;
          const pt = String(tt[It] || "").trim();
          if (
            pt.toUpperCase().includes("TOTAL") ||
            pt.toUpperCase().includes("SUBTOTAL") ||
            pt.toUpperCase() === "DESCRIÇÃO" ||
            pt.toUpperCase() === "DESCRICAO" ||
            pt.toUpperCase() === "PRODUTO"
          ) continue;
          
          const it = _t(tt[et]) || 0,
            kt = String(tt[qe] || "UN").trim();
          
          let Lt = _t(tt[$e]),
            Xt = _t(tt[Xe]);
            
          // Recalcular ou preencher se necessário para máxima precisão
          if (Xt === 0 && it > 0 && Lt > 0) {
            Xt = it * Lt;
          } else if (Lt === 0 && it > 0 && Xt > 0) {
            Lt = Xt / it;
          }
          
          const qt = tt[bt];
          let Ht = be(qt),
            q = "";
          if (Ht) {
            const te = String(Ht.getDate()).padStart(2, "0"),
              K = String(Ht.getMonth() + 1).padStart(2, "0"),
              J = Ht.getFullYear();
            q = `${te}/${K}/${J}`;
            lastSeenDate = q;
            lastSeenDateObj = Ht.toISOString();
          } else if (lastSeenDate) {
            q = lastSeenDate;
            Ht = lastSeenDateObj ? new Date(lastSeenDateObj) : null;
          }
          
          rt.push({
            date: q,
            dateObj: Ht ? Ht.toISOString() : null,
            sku: ht,
            description: pt,
            quantity: it,
            conversionFactor: kt,
            unitPrice: Lt,
            totalPrice: Xt,
          });
        }
        (console.log(
          `[Sync] Total de registros de Avarias mapeados: ${rt.length}`,
        ),
          (Fe.avaria = rt));
      }
      const st = ue[5] || [],
        Nt = Number(st[8]) || 0;
      ((Fe.totalPositions = Nt),
        (Fe.totalCounted = Number(st[9]) || 0),
        (Fe.totalPending = Number(st[10]) || 0),
        (Fe.accuracy = (Number(st[21]) || 0) * 100),
        (Fe.finalAccuracy = (Number(st[23]) || 0) * 100),
        (Fe.totalErrors = Number(st[17]) || 0),
        (Fe.surplus = Number(st[14]) || 0),
        (Fe.shortage = Number(st[15]) || 0),
        (Fe.finalizedDivergences = Number(st[18]) || 0),
        (Fe.generalStatus = (Number(st[19]) || 0) * 100),
        (Fe.dailyGoal = Math.round(Nt / 26)),
        (Fe.weeklyGoalCalculated = Math.round(Nt / 4)));
      const Yt = ue[3] || [],
        tn = ue[4] || [],
        Vn = [];
      for (let Qe = 26; Qe <= 29; Qe++) {
        const We = Yt[Qe],
          rt = Number(tn[Qe]) || 0;
        We && Vn.push({ name: String(We), count: rt });
      }
      Fe.collaboratorCounts = Vn;
      let da = 0,
        ir = 0,
        Sn = 0,
        Tt = 0;
      for (let Qe = 8; Qe < ue.length; Qe += 6) {
        const We = ue[Qe] || [],
          rt = String(We[2] || "").trim();
        if (!rt || rt.toUpperCase().includes("TOTAL")) continue;
        let _t = 0,
          bt = 0,
          Pt = 0,
          It = 0,
          et = 0,
          qe = 0,
          $e = 0,
          Xe = 0,
          Ye = 0,
          tt = 0;
        for (let Xt = 0; Xt < 6; Xt++) {
          const qt = ue[Qe + Xt] || [];
          ((_t += Math.abs(Number(qt[17]) || 0)),
            (bt += Math.abs(Number(qt[14]) || 0)),
            (Pt += Math.abs(Number(qt[15]) || 0)),
            (It += Number(qt[18]) || 0));
          const Ht = Math.abs(Number(qt[8]) || 0),
            q = Math.abs(Number(qt[9]) || 0);
          ((et += Ht), (qe += q));
          const te = qt[3],
            K =
              typeof te == "number"
                ? te
                : parseInt(String(te || "").trim(), 10);
          K === 1
            ? (($e += Ht), (Xe += q))
            : K >= 2 && K <= 6 && ((Ye += Ht), (tt += q));
        }
        ((da += $e), (ir += Xe), (Sn += Ye), (Tt += tt));
        const ot = qe - et,
          ht = et > 0 ? (qe / et) * 100 : qe > 0 ? 100 : 0,
          pt = Xe - $e,
          it = $e > 0 ? (Xe / $e) * 100 : Xe > 0 ? 100 : 0,
          kt = tt - Ye,
          Lt = Ye > 0 ? (tt / Ye) * 100 : tt > 0 ? 100 : 0;
        Fe.streets.push({
          id: Math.floor(Qe / 6) + 1,
          name: rt || `Rua ${Math.floor(Qe / 6) + 1}`,
          plan: et,
          counted: qe,
          pending: ot,
          status: ht > 100 ? 100 : ht,
          errors: _t,
          surplus: bt,
          shortage: Pt,
          finalized: It,
          pickingPlan: $e,
          pickingCounted: Xe,
          pickingPending: pt,
          pickingStatus: it > 100 ? 100 : it,
          pulmaoPlan: Ye,
          pulmaoCounted: tt,
          pulmaoPending: kt,
          pulmaoStatus: Lt > 100 ? 100 : Lt,
        });
      }
      return (
        (Fe.pickingPositions = da),
        (Fe.pickingCounted = ir),
        (Fe.pickingPending = ir - da),
        (Fe.pulmaoPositions = Sn),
        (Fe.pulmaoCounted = Tt),
        (Fe.pulmaoPending = Tt - Sn),
        Fe
      );
    }, []),
    I = A.useCallback(async () => {
      (p(!0), y(null));
      try {
        const Q = `?t=${Date.now()}&z=${Math.random().toString(36).substring(7)}`;
        console.log(
          `[Sync] Sincronização iniciada: ${new Date().toLocaleTimeString()}`,
        );
        const Z = await fetch(`${D}${Q}`, {
          cache: "no-store",
          headers: { "Cache-Control": "no-cache", Pragma: "no-cache" },
        });
        if (!Z.ok)
          throw (
            console.error(
              `[Sync] Erro na resposta: ${Z.status} ${Z.statusText}`,
            ),
            new Error(
              "Falha ao buscar dados do Google Sheets. Verifique se a planilha está pública.",
            )
          );
        const ne = await Z.arrayBuffer();
        console.log(
          `[Sync] Download concluído: ${ne.byteLength} bytes recebidos.`,
        );
        const ue = N2(ne, { type: "array" });
        console.log(
          `[Sync] Planilha lida com sucesso. Abas encontradas: ${ue.SheetNames.join(", ")}`,
        );
        const Ce = await O(ue);
        (t(Ce), x(new Date()));
        try {
          localStorage.setItem("dashboard_data_local", JSON.stringify(Ce));
        } catch (Pe) {
          console.warn("Failed to write to localStorage:", Pe);
        }
        if (k) {
          console.log("[Sync] Dados processados. Enviando para o Firebase...");
          try {
            const Pe = i8(d8, "dashboard", "latest");
            (await VDe(Pe, {
              ...Ce,
              v: Date.now(),
              updatedAt: new Date().toISOString(),
              updatedBy:
                (s == null ? void 0 : s.email) || "Google Sheets Sync AUTO",
            }),
              console.log(
                `[Sync] Sucesso! Dashboard atualizado no Firebase em ${new Date().toLocaleTimeString()}`,
              ));
          } catch (Pe) {
            (console.error(
              "[Sync] Falha ao enviar para o Firebase (provavelmente limite de cota de escrita atingido):",
              Pe,
            ),
              y(
                "Planilha lida com sucesso! Sincronizado localmente (Firebase sem cota de escrita).",
              ));
          }
        } else console.log("[Sync] Sucesso! Dashboard atualizado localmente.");
      } catch (Q) {
        (console.error("[Sync] Erro crítico:", Q),
          y(
            Q instanceof Error
              ? Q.message
              : "Erro desconhecido na sincronização",
          ));
      } finally {
        p(!1);
      }
    }, [k, s, O]);
  (A.useEffect(() => {
    const Q = nPe(b2, (ne) => {
        (l(ne), f(!1));
      }),
      Z = setTimeout(() => f(!1), 2e3);
    return () => {
      (Q(), clearTimeout(Z));
    };
  }, []),
    A.useEffect(() => {
      const Q = i8(d8, "dashboard", "latest"),
        Z = UDe(
          Q,
          (ne) => {
            if (ne.exists()) {
              const ue = ne.data();
              t(ue);
              try {
                localStorage.setItem(
                  "dashboard_data_local",
                  JSON.stringify(ue),
                );
              } catch (Ce) {
                console.warn("localStorage quota exceeded", Ce);
              }
            }
          },
          (ne) => {
            console.warn(
              "Firestore snapshot loading error (likely quota exceeded). Falling back to localStorage data.",
              ne,
            );
            try {
              const ue = localStorage.getItem("dashboard_data_local");
              ue && t(JSON.parse(ue));
            } catch (ue) {
              console.error("Failed to parse cached local dataset", ue);
            }
          },
        );
      return () => Z();
    }, [s]),
    A.useEffect(() => {
      I();
      const Q = setInterval(I, 6e4);
      return () => clearInterval(Q);
    }, [I]));
  const B = async () => {
      const Q = new Qo();
      try {
        await TPe(b2, Q);
      } catch (Z) {
        console.error("Login failed:", Z);
      }
    },
    V = () => aPe(b2);
  if (u)
    return v.jsx("div", {
      className: "min-h-screen bg-slate-50 flex items-center justify-center",
      children: v.jsx(cx, {
        className: "w-8 h-8 text-emerald-500 animate-spin",
      }),
    });
  if (!e)
    return v.jsx("div", {
      className:
        "min-h-screen bg-slate-50 flex items-center justify-center p-4",
      children: v.jsxs(Gr.div, {
        initial: { opacity: 0, scale: 0.9 },
        animate: { opacity: 1, scale: 1 },
        className:
          "max-w-xl w-full p-12 rounded-3xl border border-slate-200 bg-white flex flex-col items-center text-center shadow-xl",
        children: [
          v.jsx("div", {
            className:
              "w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20",
            children: v.jsx(cx, {
              className: G("w-10 h-10 text-emerald-600", d && "animate-spin"),
            }),
          }),
          v.jsx("h1", {
            className: "text-3xl font-bold text-slate-950 mb-2",
            children: "Contagem Cíclica",
          }),
          v.jsx("p", {
            className: "text-slate-600 mb-8 max-w-sm",
            children: d
              ? "Sincronizando dados com a planilha Google Sheets..."
              : "Aguardando sincronização inicial dos dados.",
          }),
          v.jsxs("button", {
            onClick: V,
            className:
              "mt-8 text-slate-400 hover:text-slate-600 text-sm flex items-center gap-2",
            children: [v.jsx(lx, { className: "w-4 h-4" }), " Sair"],
          }),
        ],
      }),
    });
  const L = (Q) => {
      if (P === "PICKING") {
        const Z = Q.pickingPlan || 0,
          ne = Q.pickingCounted || 0,
          ue = Q.pickingPending || 0,
          Ce = Q.pickingStatus || 0;
        return {
          plan: Z,
          counted: ne,
          pending: ue,
          status: Ce,
          typeLabel: "Picking",
        };
      }
      if (P === "PULMAO") {
        const Z = Q.pulmaoPlan || 0,
          ne = Q.pulmaoCounted || 0,
          ue = Q.pulmaoPending || 0,
          Ce = Q.pulmaoStatus || 0;
        return {
          plan: Z,
          counted: ne,
          pending: ue,
          status: Ce,
          typeLabel: "Pulmão",
        };
      }
      return {
        plan: Q.plan,
        counted: Q.counted,
        pending: Q.pending,
        status: Q.status,
        typeLabel: "Geral",
      };
    },
    z = e.streets.filter(
      (Q) =>
        !(
          !(Q.plan > 0) ||
          (N && !Q.name.toUpperCase().includes(N.toUpperCase())) ||
          (P === "PICKING" && !(Q.pickingPlan && Q.pickingPlan > 0)) ||
          (P === "PULMAO" && !(Q.pulmaoPlan && Q.pulmaoPlan > 0))
        ),
    ),
    ge =
      P === "PICKING"
        ? e.pickingPositions || 0
        : P === "PULMAO"
          ? e.pulmaoPositions || 0
          : e.totalPositions,
    pe =
      P === "PICKING"
        ? e.pickingCounted || 0
        : P === "PULMAO"
          ? e.pulmaoCounted || 0
          : e.totalCounted,
    W = Math.max(0, ge - pe),
    oe =
      P === "PICKING"
        ? ((e.pickingCounted || 0) / (e.pickingPositions || 1)) * 100
        : P === "PULMAO"
          ? ((e.pulmaoCounted || 0) / (e.pulmaoPositions || 1)) * 100
          : e.accuracy,
    Ae = ge > 0 ? (pe / ge) * 100 : 0,
    ie = z.map((Q) => {
      const Z = L(Q);
      return {
        name: Q.name,
        Plano: Z.plan,
        Contado: Z.counted,
        Pendente: Z.pending,
        Erros: Q.errors,
        Sobra: Q.surplus,
        Falta: Q.shortage,
        Finalizadas: Q.finalized,
      };
    }),
    he = [
      { name: "Contado", value: pe, color: "#10b981" },
      { name: "Pendente", value: W, color: "#f43f5e" },
    ],
    j = n3e(r),
    H = [
      { name: "QUALIDADE", icon: DS },
    ];
  return v.jsxs("div", {
    className: G(
      "min-h-screen flex flex-row font-sans relative overflow-hidden transition-colors duration-500",
      j.bg,
    ),
    style: {
      "--bg-color": j.realBg || "#ffffff",
      "--wave-1-url": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'%3E%3Cpath fill='${encodeURIComponent(j.wave1)}' d='M0,150 C150,50 350,250 500,150 C650,50 850,250 1000,150 L1000,300 L0,300 Z'/%3E%3C/svg%3E")`,
      "--wave-2-url": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 300'%3E%3Cpath fill='${encodeURIComponent(j.wave2)}' d='M0,150 C150,250 350,50 500,150 C650,250 850,50 1000,150 L1000,300 L0,300 Z'/%3E%3C/svg%3E")`,
    },
    children: [
      v.jsxs("aside", {
        className: G(
          "w-64 backdrop-blur-3xl border-r flex flex-col z-10 shadow-2xl transition-colors duration-500",
          j.sidebarBg
            ? j.sidebarBg.replace("bg-white", "bg-white/95")
            : "bg-white/95",
          j.border,
        ),
        children: [
          v.jsx("div", {
            className: G("p-6 border-b", j.border),
            children: v.jsxs("div", {
              className: "flex items-center gap-2",
              children: [
                v.jsx("div", {
                  className: G(
                    "w-8 h-8 rounded-lg flex items-center justify-center shadow-lg",
                    j.active,
                  ),
                  children: v.jsx(yp, { className: "w-5 h-5 text-white" }),
                }),
                v.jsx("span", {
                  className: G(
                    "font-bold tracking-wider text-sm uppercase",
                    j.accent,
                  ),
                  children: "Menu Dashboard",
                }),
              ],
            }),
          }),
          v.jsxs("nav", {
            className: "flex-1 p-4 space-y-2",
            children: [
              v.jsx("div", {
                className: G(
                  "text-[10px] font-black uppercase tracking-[0.2em] mb-4 px-2",
                  j.text,
                ),
                children: "Relatórios & Filtros",
              }),
              H.map((Q) =>
                v.jsxs(
                  "button",
                  {
                    onClick: () => n(Q.name),
                    className: G(
                      "w-full text-left px-4 py-3 rounded-xl text-[11px] font-bold transition-all duration-300 flex items-center gap-3 group",
                      r === Q.name
                        ? `${j.active} text-white shadow-lg ${j.shadow}`
                        : G(
                            "text-slate-400 hover:bg-white/40 hover:text-slate-900",
                          ),
                    ),
                    children: [
                      v.jsx(Q.icon, {
                        className: G(
                          "w-4 h-4 transition-all duration-300",
                          r === Q.name
                            ? "text-white"
                            : "text-slate-300 group-hover:text-slate-600",
                        ),
                      }),
                      Q.name,
                    ],
                  },
                  Q.name,
                ),
              ),
            ],
          }),
          v.jsx("div", {
            className: G("p-4 border-t", j.border),
            children: v.jsxs("div", {
              className: G(
                "rounded-xl p-4 border",
                `bg-${j.primary}-50/30`,
                j.border,
              ),
              children: [
                v.jsxs("div", {
                  className: "flex items-center gap-2 mb-2",
                  children: [
                    v.jsx("div", {
                      className: G(
                        "w-2 h-2 rounded-full animate-pulse",
                        `bg-${j.primary}-500`,
                      ),
                    }),
                    v.jsx("span", {
                      className: G(
                        "text-[10px] font-bold uppercase tracking-widest",
                        j.text,
                      ),
                      children: "Status Sistema",
                    }),
                  ],
                }),
                v.jsx("p", {
                  className: G(
                    "text-[9px] leading-relaxed",
                    j.text,
                    "opacity-60",
                  ),
                  children:
                    "Sincronização ativa com Google Sheets. Atualização a cada 1min.",
                }),
              ],
            }),
          }),
        ],
      }),
      v.jsxs("div", {
        className: "flex-1 flex flex-col relative overflow-hidden",
        children: [
          v.jsxs("div", {
            className: "wave-container",
            children: [
              v.jsx("div", { className: "wave wave-1" }),
              v.jsx("div", { className: "wave wave-2" }),
            ],
          }),
          v.jsx("div", {
            className:
              "fixed inset-0 flex items-center justify-center pointer-events-none z-[-1]",
            children: v.jsx("div", {
              className:
                "flex items-center gap-0 scale-[12] md:scale-[25] lg:scale-[35] transition-all duration-700 animate-pulse-slow",
              children: v.jsx("div", {
                className: "w-20 h-16 flex-shrink-0",
                children: v.jsxs("svg", {
                  viewBox: "0 0 100 100",
                  className: "w-full h-full filter blur-[0.2px]",
                  children: [
                    v.jsx("path", {
                      d: "M 15 45 A 16 16 0 0 1 47 45",
                      fill: "none",
                      stroke: j.logoTop || "#334155",
                      strokeWidth: "6",
                      strokeLinecap: "round",
                    }),
                    v.jsx("path", {
                      d: "M 32 55 A 16 16 0 0 0 64 55",
                      fill: "none",
                      stroke: j.logo,
                      strokeWidth: "6",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
              }),
            }),
          }),
          v.jsx("main", {
            className: "flex-1 overflow-y-auto p-4 md:p-8 bg-transparent",
            children: v.jsx("div", {
              className: "max-w-7xl mx-auto",
              children:
                r === "INVENTARIO CÍCLICO"
                  ? v.jsxs(v.Fragment, {
                      children: [
                        v.jsxs("div", {
                          className: G(
                            "flex flex-col md:flex-row justify-between items-center md:items-start mb-10 backdrop-blur-sm p-6 rounded-3xl border gap-6 md:gap-0 transition-colors duration-500",
                            j.contentBg,
                            j.contentBorder,
                            j.contentShadow,
                          ),
                          children: [
                            v.jsxs("div", {
                              className: "flex items-center gap-0",
                              children: [
                                v.jsx("div", {
                                  className: "w-20 h-16 flex-shrink-0",
                                  children: v.jsxs("svg", {
                                    viewBox: "0 0 100 100",
                                    className: "w-full h-full",
                                    children: [
                                      v.jsx("path", {
                                        d: "M 15 45 A 16 16 0 0 1 47 45",
                                        fill: "none",
                                        stroke: j.logoTop || "#334155",
                                        strokeWidth: "12",
                                        strokeLinecap: "round",
                                      }),
                                      v.jsx("path", {
                                        d: "M 32 55 A 16 16 0 0 0 64 55",
                                        fill: "none",
                                        stroke: j.logo,
                                        strokeWidth: "12",
                                        strokeLinecap: "round",
                                      }),
                                    ],
                                  }),
                                }),
                                v.jsxs("div", {
                                  className: "flex flex-col -ml-6",
                                  children: [
                                    v.jsx("span", {
                                      className: G(
                                        "text-[32px] font-bold leading-[0.8] lowercase tracking-tight",
                                        j.contentTitle,
                                      ),
                                      children: "giro",
                                    }),
                                    v.jsx("span", {
                                      className: G(
                                        "text-[32px] font-bold leading-[0.8] lowercase tracking-tight ml-[12px]",
                                        j.contentText,
                                      ),
                                      children: "trade",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            v.jsx(Gr.div, {
                              initial: { opacity: 0, y: -10 },
                              animate: { opacity: 1, y: 0 },
                              transition: { delay: 0.2 },
                              className:
                                "hidden sm:flex flex-col items-center justify-center flex-1 px-4 mt-1",
                              children: v.jsxs("div", {
                                className: "relative",
                                children: [
                                  v.jsxs("h1", {
                                    className: G(
                                      "text-xl md:text-2xl lg:text-3xl font-black tracking-[0.15em] uppercase leading-none",
                                      j.contentTitle,
                                    ),
                                    children: [
                                      "Inventário ",
                                      v.jsx("span", {
                                        className: j.contentText,
                                        children: "Cíclico",
                                      }),
                                    ],
                                  }),
                                  v.jsxs("div", {
                                    className:
                                      "absolute -bottom-3 left-0 right-0 flex items-center justify-center gap-3",
                                    children: [
                                      v.jsx("div", {
                                        className: G(
                                          "hidden md:block h-[2px] w-8 lg:w-12 bg-gradient-to-r from-transparent",
                                          `to-${j.primary}-500/20`,
                                        ),
                                      }),
                                      v.jsx("span", {
                                        className: G(
                                          "text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] whitespace-nowrap opacity-60",
                                          j.contentText,
                                        ),
                                        children: "Performance & Acuracidade",
                                      }),
                                      v.jsx("div", {
                                        className: G(
                                          "hidden md:block h-[2px] w-8 lg:w-12 bg-gradient-to-l from-transparent",
                                          `to-${j.primary}-500/20`,
                                        ),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            v.jsxs("div", {
                              className: "flex flex-col items-end gap-4",
                              children: [
                                v.jsxs("div", {
                                  className: "flex flex-col items-end",
                                  children: [
                                    v.jsx("span", {
                                      className:
                                        "text-sm font-bold text-slate-900 tracking-tight",
                                      children: "Created by Thiago.Henrique",
                                    }),
                                    v.jsx("span", {
                                      className: G(
                                        "text-[10px] font-medium uppercase tracking-widest",
                                        `${j.contentText}/70`,
                                      ),
                                      children: "junior inventory analyst",
                                    }),
                                    e.updatedAt &&
                                      v.jsxs("div", {
                                        className:
                                          "mt-1 flex items-center gap-1.5",
                                        children: [
                                          v.jsx(Ld, {
                                            className: G(
                                              "w-3 h-3",
                                              j
                                                ? j.contentText
                                                : "text-slate-400",
                                            ),
                                          }),
                                          v.jsxs("span", {
                                            className: G(
                                              "text-[9px] font-medium uppercase tracking-wider",
                                              j
                                                ? j.contentText
                                                : "text-slate-400",
                                            ),
                                            children: [
                                              "Atualizado em: ",
                                              new Date(
                                                e.updatedAt,
                                              ).toLocaleString("pt-BR"),
                                            ],
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                                v.jsxs("div", {
                                  className: "flex items-center gap-3",
                                  children: [
                                    v.jsxs("div", {
                                      className: "flex flex-col items-end",
                                      children: [
                                        v.jsxs("div", {
                                          className: G(
                                            "flex items-center gap-2 px-3 py-1.5 border rounded-lg",
                                            `bg-${j.primary}-500/5`,
                                            `border-${j.primary}-500/10`,
                                          ),
                                          children: [
                                            v.jsx("div", {
                                              className: G(
                                                "w-1.5 h-1.5 rounded-full",
                                                b
                                                  ? "bg-rose-500"
                                                  : `bg-${j.primary}-500`,
                                                d || !b ? "animate-pulse" : "",
                                              ),
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-[10px] font-bold uppercase tracking-widest",
                                                j.contentText,
                                              ),
                                              children: d
                                                ? "Sincronizando..."
                                                : b
                                                  ? "Erro Sinc."
                                                  : k
                                                    ? "Sinc. Nuvem"
                                                    : "Sinc. Local",
                                            }),
                                          ],
                                        }),
                                        b &&
                                          v.jsx("span", {
                                            className:
                                              "text-[7px] text-rose-500 font-bold uppercase mt-1 max-w-[120px] text-right truncate",
                                            children: b,
                                          }),
                                      ],
                                    }),
                                    v.jsx("button", {
                                      onClick: () => I(),
                                      disabled: d,
                                      className: G(
                                        "p-2 rounded-lg border transition-all hover:scale-105 active:scale-95",
                                        j.primary === "rose"
                                          ? "bg-rose-500 text-white border-rose-600 shadow-md"
                                          : "bg-blue-500 text-white border-blue-600 shadow-md",
                                        d && "opacity-50 cursor-not-allowed",
                                      ),
                                      title: "Sincronizar Agora",
                                      children: v.jsx(cx, {
                                        className: G(
                                          "w-4 h-4",
                                          d && "animate-spin",
                                        ),
                                      }),
                                    }),
                                    s
                                      ? v.jsxs("button", {
                                          onClick: V,
                                          className:
                                            "flex items-center gap-2 px-3 py-1.5 border border-rose-200 rounded-lg text-xs font-medium text-rose-600 hover:bg-rose-50 transition-all",
                                          children: [
                                            v.jsx(lx, { className: "w-3 h-3" }),
                                            "Sair",
                                          ],
                                        })
                                      : v.jsxs("button", {
                                          onClick: B,
                                          className: G(
                                            "flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all shadow-lg",
                                            j.active,
                                            j.shadow,
                                          ),
                                          children: [
                                            v.jsx(NEe, {
                                              className: "w-3 h-3",
                                            }),
                                            "LogIn",
                                          ],
                                        }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        v.jsxs("header", {
                          className: "mb-8 text-center",
                          children: [
                            v.jsxs("div", {
                              className: "mb-6",
                              children: [
                                v.jsx("h2", {
                                  className: G(
                                    "text-4xl font-bold drop-shadow-sm",
                                    j.headerTitle || j.contentTitle,
                                  ),
                                  children:
                                    r === "INVENTARIO CÍCLICO"
                                      ? "Planejamento Cíclico"
                                      : r,
                                }),
                                v.jsx("p", {
                                  className: G(
                                    "font-medium",
                                    j.headerText || j.contentText,
                                  ),
                                  children:
                                    "Acompanhamento em tempo real da performance operacional.",
                                }),
                              ],
                            }),
                            v.jsx("div", {
                              className:
                                "flex flex-wrap items-end justify-center gap-4",
                              children: v.jsxs("nav", {
                                className: G(
                                  "flex flex-wrap gap-2 p-1 backdrop-blur-md rounded-2xl border w-fit shadow-sm",
                                  j.contentBg,
                                  j.contentBorder,
                                ),
                                children: [
                                  v.jsxs("button", {
                                    onClick: () => i("overview"),
                                    className: G(
                                      "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                                      a === "overview"
                                        ? `${j.active} shadow-lg ${j.shadow}`
                                        : G(
                                            j ? j.contentText : "text-black/60",
                                            "opacity-60 hover:opacity-100 transition-opacity",
                                          ),
                                    ),
                                    children: [
                                      v.jsx(yp, { className: "w-4 h-4" }),
                                      "Visão Geral",
                                    ],
                                  }),
                                  v.jsxs("button", {
                                    onClick: () => i("streets"),
                                    className: G(
                                      "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                                      a === "streets"
                                        ? `${j.active} shadow-lg ${j.shadow}`
                                        : G(
                                            j ? j.contentText : "text-black/60",
                                            "opacity-60 hover:opacity-100 transition-opacity",
                                          ),
                                    ),
                                    children: [
                                      v.jsx(REe, { className: "w-4 h-4" }),
                                      "Detalhes por Rua",
                                    ],
                                  }),
                                  v.jsxs("button", {
                                    onClick: () => i("errors"),
                                    className: G(
                                      "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                                      a === "errors"
                                        ? `${j.active} shadow-lg ${j.shadow}`
                                        : G(
                                            j ? j.contentText : "text-black/60",
                                            "opacity-60 hover:opacity-100 transition-opacity",
                                          ),
                                    ),
                                    children: [
                                      v.jsx(_f, { className: "w-4 h-4" }),
                                      "Análise de Erros",
                                    ],
                                  }),
                                  v.jsxs("button", {
                                    onClick: () => i("daily"),
                                    className: G(
                                      "flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all duration-300",
                                      a === "daily"
                                        ? `${j.active} shadow-lg ${j.shadow}`
                                        : G(
                                            j ? j.contentText : "text-black/60",
                                            "opacity-60 hover:opacity-100 transition-opacity",
                                          ),
                                    ),
                                    children: [
                                      v.jsx(Ld, { className: "w-4 h-4" }),
                                      "Contagem Diária",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        v.jsxs(UO, {
                          mode: "wait",
                          children: [
                            a === "overview" &&
                              v.jsxs(
                                Gr.div,
                                {
                                  initial: { opacity: 0, y: 5 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -5 },
                                  transition: {
                                    duration: 0.15,
                                    ease: "easeOut",
                                  },
                                  className: "space-y-8",
                                  children: [
                                    v.jsxs("div", {
                                      className: G(
                                        "backdrop-blur-md p-4 rounded-2xl border shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center transition-all duration-500",
                                        j.contentBg,
                                        j.contentBorder,
                                      ),
                                      children: [
                                        v.jsxs("div", {
                                          className: "flex items-center gap-2",
                                          children: [
                                            v.jsx(fO, {
                                              className:
                                                "w-5 h-5 text-emerald-400",
                                            }),
                                            v.jsxs("div", {
                                              children: [
                                                v.jsx("h4", {
                                                  className: G(
                                                    "text-xs font-black uppercase tracking-wider",
                                                    j.contentTitle,
                                                  ),
                                                  children:
                                                    "Filtro por Nível Operacional",
                                                }),
                                                v.jsx("p", {
                                                  className:
                                                    "text-[10px] text-slate-400 font-medium",
                                                  children:
                                                    "As métricas de todo o painel serão recalculadas instantaneamente.",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        v.jsx("div", {
                                          className:
                                            "flex gap-2 w-full sm:w-auto",
                                          children: [
                                            {
                                              id: "ALL",
                                              label: "Geral (Todos)",
                                            },
                                            {
                                              id: "PICKING",
                                              label: "Picking (Nível 1)",
                                            },
                                            {
                                              id: "PULMAO",
                                              label: "Pulmão (Níveis 2-6)",
                                            },
                                          ].map((Q) =>
                                            v.jsx(
                                              "button",
                                              {
                                                onClick: () => M(Q.id),
                                                className: G(
                                                  "flex-1 sm:flex-none px-4 py-2 text-xs font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap",
                                                  P === Q.id
                                                    ? "bg-emerald-500 text-white shadow-lg ring-2 ring-emerald-500/20"
                                                    : "bg-white/5 text-slate-300 hover:bg-white/10",
                                                ),
                                                children: Q.label,
                                              },
                                              Q.id,
                                            ),
                                          ),
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                                      children: [
                                        v.jsx(Ex, {
                                          title: "Total de Posições",
                                          value: ge,
                                          icon: yp,
                                          color: "bg-emerald-800",
                                          subtitle:
                                            P === "PICKING"
                                              ? "Plano (Picking)"
                                              : P === "PULMAO"
                                                ? "Plano (Pulmão)"
                                                : "Plano (Geral)",
                                          theme: j,
                                        }),
                                        v.jsx(Ex, {
                                          title: "Posições Contadas",
                                          value: pe,
                                          icon: IS,
                                          color: "bg-emerald-600",
                                          subtitle: `${((pe / ge) * 100).toFixed(2)}%`,
                                          theme: j,
                                        }),
                                        v.jsx(Ex, {
                                          title: "Pendentes",
                                          value: W,
                                          icon: Ld,
                                          color: "bg-emerald-700",
                                          subtitle: `${((W / ge) * 100).toFixed(2)}%`,
                                          theme: j,
                                        }),
                                        v.jsx(Ex, {
                                          title: "Acuracidade",
                                          value: `${oe.toFixed(2)}%`,
                                          icon: ih,
                                          color: "bg-emerald-500",
                                          subtitle: "Meta: 99,5%",
                                          theme: j,
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className: G(
                                        "backdrop-blur-md p-6 rounded-2xl border shadow-sm transition-all duration-500",
                                        j.contentBg,
                                        j.contentBorder,
                                      ),
                                      children: [
                                        v.jsxs("h3", {
                                          className: G(
                                            "text-lg font-bold mb-1 flex items-center gap-2",
                                            j.contentTitle,
                                          ),
                                          children: [
                                            v.jsx(Ox, {
                                              className:
                                                "w-5 h-5 text-emerald-500",
                                            }),
                                            " Detalhamento por Nível (Picking vs Pulmão)",
                                          ],
                                        }),
                                        v.jsx("p", {
                                          className:
                                            "text-xs text-slate-400 mb-4",
                                          children:
                                            "Clique nos blocos abaixo para alternar o filtro de visualização do dashboard.",
                                        }),
                                        v.jsxs("div", {
                                          className:
                                            "grid grid-cols-1 md:grid-cols-2 gap-6",
                                          children: [
                                            v.jsxs("div", {
                                              onClick: () =>
                                                M(
                                                  P === "PICKING"
                                                    ? "ALL"
                                                    : "PICKING",
                                                ),
                                              className: G(
                                                "p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-[1.01] select-none",
                                                P === "PICKING"
                                                  ? "border-emerald-500 bg-emerald-500/10 ring-2 ring-emerald-500/20 shadow-lg"
                                                  : "border-white/5 bg-white/5 hover:border-emerald-500/30 hover:bg-white/10",
                                              ),
                                              children: [
                                                v.jsxs("div", {
                                                  children: [
                                                    v.jsxs("div", {
                                                      className:
                                                        "flex justify-between items-center mb-2",
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "text-sm font-bold text-emerald-400",
                                                          children:
                                                            "Picking (Nível 1)",
                                                        }),
                                                        v.jsx("span", {
                                                          className: G(
                                                            "px-2 py-0.5 rounded text-[10px] font-bold transition-all",
                                                            P === "PICKING"
                                                              ? "bg-emerald-500 text-white"
                                                              : "bg-emerald-500/10 text-emerald-400",
                                                          ),
                                                          children:
                                                            P === "PICKING"
                                                              ? "Filtrado"
                                                              : "Atendimento Direto",
                                                        }),
                                                      ],
                                                    }),
                                                    v.jsxs("div", {
                                                      className:
                                                        "grid grid-cols-3 gap-2 mt-4 text-center",
                                                      children: [
                                                        v.jsxs("div", {
                                                          children: [
                                                            v.jsx("span", {
                                                              className:
                                                                "text-[10px] text-slate-400 font-bold uppercase block",
                                                              children:
                                                                "Posições",
                                                            }),
                                                            v.jsx("span", {
                                                              className: G(
                                                                "text-lg font-black font-mono",
                                                                j.contentTitle,
                                                              ),
                                                              children:
                                                                e.pickingPositions ||
                                                                0,
                                                            }),
                                                          ],
                                                        }),
                                                        v.jsxs("div", {
                                                          children: [
                                                            v.jsx("span", {
                                                              className:
                                                                "text-[10px] text-slate-400 font-bold uppercase block",
                                                              children:
                                                                "Contados",
                                                            }),
                                                            v.jsx("span", {
                                                              className: G(
                                                                "text-lg font-black font-mono",
                                                                j.contentTitle,
                                                              ),
                                                              children:
                                                                e.pickingCounted ||
                                                                0,
                                                            }),
                                                          ],
                                                        }),
                                                        v.jsxs("div", {
                                                          children: [
                                                            v.jsx("span", {
                                                              className:
                                                                "text-[10px] text-slate-400 font-bold uppercase block",
                                                              children:
                                                                "Pendentes",
                                                            }),
                                                            v.jsx("span", {
                                                              className: G(
                                                                "text-lg font-black font-mono text-rose-400",
                                                              ),
                                                              children:
                                                                Math.max(
                                                                  0,
                                                                  (e.pickingPositions ||
                                                                    0) -
                                                                    (e.pickingCounted ||
                                                                      0),
                                                                ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                v.jsxs("div", {
                                                  className: "mt-4",
                                                  children: [
                                                    v.jsxs("div", {
                                                      className:
                                                        "flex justify-between text-xs font-bold mb-1",
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "text-slate-400 font-bold uppercase text-[9px]",
                                                          children:
                                                            "Acurácia de Cobertura",
                                                        }),
                                                        v.jsxs("span", {
                                                          className:
                                                            "text-emerald-400",
                                                          children: [
                                                            (
                                                              ((e.pickingCounted ||
                                                                0) /
                                                                (e.pickingPositions ||
                                                                  1)) *
                                                              100
                                                            ).toFixed(1),
                                                            "%",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    v.jsx("div", {
                                                      className:
                                                        "w-full h-1.5 rounded-full bg-white/10 overflow-hidden",
                                                      children: v.jsx("div", {
                                                        className:
                                                          "h-full bg-emerald-400 transition-all duration-500",
                                                        style: {
                                                          width: `${Math.min(((e.pickingCounted || 0) / (e.pickingPositions || 1)) * 100, 100)}%`,
                                                        },
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            v.jsxs("div", {
                                              onClick: () =>
                                                M(
                                                  P === "PULMAO"
                                                    ? "ALL"
                                                    : "PULMAO",
                                                ),
                                              className: G(
                                                "p-5 rounded-xl border transition-all duration-300 cursor-pointer flex flex-col justify-between hover:scale-[1.01] select-none",
                                                P === "PULMAO"
                                                  ? "border-sky-500 bg-sky-500/10 ring-2 ring-sky-500/20 shadow-lg"
                                                  : "border-white/5 bg-white/5 hover:border-sky-500/30 hover:bg-white/10",
                                              ),
                                              children: [
                                                v.jsxs("div", {
                                                  children: [
                                                    v.jsxs("div", {
                                                      className:
                                                        "flex justify-between items-center mb-2",
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "text-sm font-bold text-sky-400",
                                                          children:
                                                            "Pulmão (Nivel 2 ao 6)",
                                                        }),
                                                        v.jsx("span", {
                                                          className: G(
                                                            "px-2 py-0.5 rounded text-[10px] font-bold transition-all",
                                                            P === "PULMAO"
                                                              ? "bg-sky-500 text-white"
                                                              : "bg-sky-500/10 text-sky-400",
                                                          ),
                                                          children:
                                                            P === "PULMAO"
                                                              ? "Filtrado"
                                                              : "Estoque de Reserva",
                                                        }),
                                                      ],
                                                    }),
                                                    v.jsxs("div", {
                                                      className:
                                                        "grid grid-cols-3 gap-2 mt-4 text-center",
                                                      children: [
                                                        v.jsxs("div", {
                                                          children: [
                                                            v.jsx("span", {
                                                              className:
                                                                "text-[10px] text-slate-400 font-bold uppercase block",
                                                              children:
                                                                "Posições",
                                                            }),
                                                            v.jsx("span", {
                                                              className: G(
                                                                "text-lg font-black font-mono",
                                                                j.contentTitle,
                                                              ),
                                                              children:
                                                                e.pulmaoPositions ||
                                                                0,
                                                            }),
                                                          ],
                                                        }),
                                                        v.jsxs("div", {
                                                          children: [
                                                            v.jsx("span", {
                                                              className:
                                                                "text-[10px] text-slate-400 font-bold uppercase block",
                                                              children:
                                                                "Contados",
                                                            }),
                                                            v.jsx("span", {
                                                              className: G(
                                                                "text-lg font-black font-mono",
                                                                j.contentTitle,
                                                              ),
                                                              children:
                                                                e.pulmaoCounted ||
                                                                0,
                                                            }),
                                                          ],
                                                        }),
                                                        v.jsxs("div", {
                                                          children: [
                                                            v.jsx("span", {
                                                              className:
                                                                "text-[10px] text-slate-400 font-bold uppercase block",
                                                              children:
                                                                "Pendentes",
                                                            }),
                                                            v.jsx("span", {
                                                              className: G(
                                                                "text-lg font-black font-mono text-rose-400",
                                                              ),
                                                              children:
                                                                Math.max(
                                                                  0,
                                                                  (e.pulmaoPositions ||
                                                                    0) -
                                                                    (e.pulmaoCounted ||
                                                                      0),
                                                                ),
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                  ],
                                                }),
                                                v.jsxs("div", {
                                                  className: "mt-4",
                                                  children: [
                                                    v.jsxs("div", {
                                                      className:
                                                        "flex justify-between text-xs font-bold mb-1",
                                                      children: [
                                                        v.jsx("span", {
                                                          className:
                                                            "text-slate-400 font-bold uppercase text-[9px]",
                                                          children:
                                                            "Acurácia de Cobertura",
                                                        }),
                                                        v.jsxs("span", {
                                                          className:
                                                            "text-sky-400",
                                                          children: [
                                                            (
                                                              ((e.pulmaoCounted ||
                                                                0) /
                                                                (e.pulmaoPositions ||
                                                                  1)) *
                                                              100
                                                            ).toFixed(1),
                                                            "%",
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    v.jsx("div", {
                                                      className:
                                                        "w-full h-1.5 rounded-full bg-white/10 overflow-hidden",
                                                      children: v.jsx("div", {
                                                        className:
                                                          "h-full bg-sky-400 transition-all duration-500",
                                                        style: {
                                                          width: `${Math.min(((e.pulmaoCounted || 0) / (e.pulmaoPositions || 1)) * 100, 100)}%`,
                                                        },
                                                      }),
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
                                      className:
                                        "grid grid-cols-1 lg:grid-cols-3 gap-8",
                                      children: [
                                        v.jsxs("div", {
                                          className: G(
                                            "lg:col-span-2 backdrop-blur-md p-6 rounded-2xl border shadow-sm transition-all duration-500",
                                            j.contentBg,
                                            j.contentBorder,
                                          ),
                                          children: [
                                            v.jsx("h3", {
                                              className: G(
                                                "text-lg font-bold mb-1",
                                                j.contentTitle,
                                              ),
                                              children: "Progresso por Rua",
                                            }),
                                            v.jsxs("p", {
                                              className:
                                                "text-xs text-slate-400 mb-6",
                                              children: [
                                                "Exibição baseada no filtro selecionado (",
                                                P === "ALL"
                                                  ? "Geral"
                                                  : P === "PICKING"
                                                    ? "Picking"
                                                    : "Pulmão",
                                                ").",
                                              ],
                                            }),
                                            v.jsx("div", {
                                              className: "h-80",
                                              children: v.jsx(Xu, {
                                                width: "100%",
                                                height: "100%",
                                                children: v.jsxs(n1, {
                                                  data: ie,
                                                  barGap: -16,
                                                  children: [
                                                    v.jsx(Ju, {
                                                      strokeDasharray: "3 3",
                                                      vertical: !1,
                                                      stroke:
                                                        "rgba(255,255,255,0.1)",
                                                    }),
                                                    v.jsx(tf, {
                                                      dataKey: "name",
                                                      axisLine: !1,
                                                      tickLine: !1,
                                                      tick: {
                                                        fill: "rgba(255,255,255,0.4)",
                                                        fontSize: 10,
                                                      },
                                                    }),
                                                    v.jsx(rf, {
                                                      axisLine: !1,
                                                      tickLine: !1,
                                                      tick: {
                                                        fill: "rgba(255,255,255,0.4)",
                                                        fontSize: 10,
                                                      },
                                                    }),
                                                    v.jsx(_c, {
                                                      cursor: {
                                                        fill: "rgba(255,255,255,0.05)",
                                                      },
                                                      contentStyle: {
                                                        backgroundColor: "#111",
                                                        borderRadius: "12px",
                                                        border:
                                                          "1px solid rgba(255,255,255,0.1)",
                                                        boxShadow:
                                                          "0 10px 15px -3px rgb(0 0 0 / 0.4)",
                                                      },
                                                      itemStyle: {
                                                        color: "#fff",
                                                      },
                                                    }),
                                                    v.jsx(nS, {
                                                      iconType: "circle",
                                                    }),
                                                    v.jsx(wh, {
                                                      name: "Plano",
                                                      dataKey: "Plano",
                                                      fill: "#ffffff",
                                                      opacity: 0.1,
                                                      barSize: 16,
                                                      radius: [4, 4, 0, 0],
                                                      isAnimationActive: !1,
                                                    }),
                                                    v.jsx(wh, {
                                                      name: "Contado",
                                                      dataKey: "Contado",
                                                      fill:
                                                        P === "PULMAO"
                                                          ? "#38bdf8"
                                                          : "#4ade80",
                                                      barSize: 16,
                                                      radius: [4, 4, 0, 0],
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className: G(
                                            "backdrop-blur-md p-6 rounded-2xl border shadow-sm flex flex-col transition-all duration-500",
                                            j.contentBg,
                                            j.contentBorder,
                                          ),
                                          children: [
                                            v.jsx("h3", {
                                              className: G(
                                                "text-lg font-bold mb-1",
                                                j.contentTitle,
                                              ),
                                              children: "Status Geral",
                                            }),
                                            v.jsxs("p", {
                                              className:
                                                "text-xs text-slate-400 mb-6",
                                              children: [
                                                "Proporção de cobertura ",
                                                P === "ALL"
                                                  ? "geral"
                                                  : P === "PICKING"
                                                    ? "de picking"
                                                    : "de pulmão",
                                                ".",
                                              ],
                                            }),
                                            v.jsxs("div", {
                                              className:
                                                "flex-1 flex items-center justify-center relative",
                                              children: [
                                                v.jsxs("div", {
                                                  className:
                                                    "absolute inset-0 flex flex-col items-center justify-center pointer-events-none",
                                                  children: [
                                                    v.jsxs("span", {
                                                      className: G(
                                                        "text-3xl font-bold",
                                                        j.contentTitle,
                                                      ),
                                                      children: [
                                                        Ae.toFixed(1),
                                                        "%",
                                                      ],
                                                    }),
                                                    v.jsx("span", {
                                                      className:
                                                        "text-xs text-slate-400 uppercase tracking-wider font-semibold",
                                                      children: "Concluído",
                                                    }),
                                                  ],
                                                }),
                                                v.jsx(Xu, {
                                                  width: "100%",
                                                  height: 240,
                                                  children: v.jsxs(h$, {
                                                    children: [
                                                      v.jsx(tO, {
                                                        data: he,
                                                        innerRadius: 60,
                                                        outerRadius: 80,
                                                        paddingAngle: 5,
                                                        dataKey: "value",
                                                        children: he.map(
                                                          (Q, Z) =>
                                                            v.jsx(
                                                              Ff,
                                                              {
                                                                fill:
                                                                  Z === 0
                                                                    ? P ===
                                                                      "PULMAO"
                                                                      ? "#38bdf8"
                                                                      : "#10b981"
                                                                    : "rgba(255,255,255,0.1)",
                                                              },
                                                              `cell-${Z}`,
                                                            ),
                                                        ),
                                                      }),
                                                      v.jsx(_c, {
                                                        contentStyle: {
                                                          backgroundColor:
                                                            "#fff",
                                                          borderRadius: "12px",
                                                          border:
                                                            "1px solid rgba(0,0,0,0.05)",
                                                          boxShadow:
                                                            "0 10px 15px -3px rgb(0 0 0 / 0.1)",
                                                        },
                                                        itemStyle: {
                                                          color: "#000",
                                                        },
                                                      }),
                                                    ],
                                                  }),
                                                }),
                                              ],
                                            }),
                                            v.jsx("div", {
                                              className: "space-y-3 mt-4",
                                              children: he.map((Q, Z) =>
                                                v.jsxs(
                                                  "div",
                                                  {
                                                    className:
                                                      "flex justify-between items-center",
                                                    children: [
                                                      v.jsxs("div", {
                                                        className:
                                                          "flex items-center gap-2",
                                                        children: [
                                                          v.jsx("div", {
                                                            className:
                                                              "w-3 h-3 rounded-full",
                                                            style: {
                                                              backgroundColor:
                                                                Z === 0
                                                                  ? P ===
                                                                    "PULMAO"
                                                                    ? "#38bdf8"
                                                                    : "#10b981"
                                                                  : "rgba(255,255,255,0.2)",
                                                            },
                                                          }),
                                                          v.jsx("span", {
                                                            className:
                                                              "text-sm text-white/60",
                                                            children: Q.name,
                                                          }),
                                                        ],
                                                      }),
                                                      v.jsx("span", {
                                                        className: G(
                                                          "text-sm font-bold",
                                                          j.contentTitle,
                                                        ),
                                                        children: Q.value,
                                                      }),
                                                    ],
                                                  },
                                                  Q.name,
                                                ),
                                              ),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "overview",
                              ),
                            a === "streets" &&
                              v.jsxs("div", {
                                className: "space-y-4",
                                children: [
                                  v.jsxs("div", {
                                    className: G(
                                      "backdrop-blur-md p-4 rounded-2xl border shadow-sm flex flex-col sm:flex-row gap-4 justify-between items-center transition-all duration-500",
                                      j.contentBg,
                                      j.contentBorder,
                                    ),
                                    children: [
                                      v.jsxs("div", {
                                        className: "relative w-full sm:w-72",
                                        children: [
                                          v.jsx(gm, {
                                            className:
                                              "absolute left-3 top-2.5 w-4 h-4 opacity-50",
                                          }),
                                          v.jsx("input", {
                                            type: "text",
                                            placeholder: "Pesquisar rua...",
                                            value: N,
                                            onChange: (Q) => C(Q.target.value),
                                            className: G(
                                              "w-full pl-9 pr-4 py-2 text-xs border rounded-xl bg-white/5 focus:outline-none transition-colors",
                                              j.primary === "rose"
                                                ? "border-rose-200 focus:border-rose-500 text-slate-800 focus:bg-white"
                                                : "border-white/10 focus:border-emerald-500 text-white",
                                            ),
                                          }),
                                        ],
                                      }),
                                      v.jsxs("div", {
                                        className:
                                          "flex items-center gap-2 w-full sm:w-auto",
                                        children: [
                                          v.jsx("span", {
                                            className: G(
                                              "text-xs font-bold whitespace-nowrap",
                                              j.contentText,
                                            ),
                                            children: "Nível:",
                                          }),
                                          v.jsxs("select", {
                                            value: P,
                                            onChange: (Q) => M(Q.target.value),
                                            className: G(
                                              "px-3 py-2 text-xs border rounded-xl focus:outline-none transition-colors cursor-pointer",
                                              j.primary === "rose"
                                                ? "border-rose-200 text-slate-800 bg-white"
                                                : "border-white/10 text-slate-100 bg-slate-900",
                                            ),
                                            children: [
                                              v.jsx("option", {
                                                value: "ALL",
                                                children:
                                                  "Visualizar Geral (Todas as posições)",
                                              }),
                                              v.jsx("option", {
                                                value: "PICKING",
                                                children:
                                                  "Somente Picking (Nível 1)",
                                              }),
                                              v.jsx("option", {
                                                value: "PULMAO",
                                                children:
                                                  "Somente Pulmão (Nível 2-6)",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  v.jsx(
                                    Gr.div,
                                    {
                                      initial: { opacity: 0, y: 5 },
                                      animate: { opacity: 1, y: 0 },
                                      exit: { opacity: 0, y: -5 },
                                      transition: {
                                        duration: 0.15,
                                        ease: "easeOut",
                                      },
                                      className: G(
                                        "backdrop-blur-md rounded-2xl border shadow-lg overflow-hidden transition-all duration-500",
                                        j.contentBg,
                                        j.contentBorder,
                                      ),
                                      children: v.jsx("div", {
                                        className: "overflow-x-auto",
                                        children: v.jsxs("table", {
                                          className:
                                            "w-full text-left border-collapse",
                                          children: [
                                            v.jsx("thead", {
                                              children: v.jsxs("tr", {
                                                className:
                                                  "border-b transition-all duration-500 bg-white/5 border-white/10",
                                                children: [
                                                  v.jsx("th", {
                                                    className: G(
                                                      "px-6 py-4 text-xs font-semibold uppercase tracking-wider opacity-70",
                                                      j.contentText,
                                                    ),
                                                    children: "Rua",
                                                  }),
                                                  v.jsxs("th", {
                                                    className: G(
                                                      "px-6 py-4 text-xs font-semibold uppercase tracking-wider opacity-70",
                                                      j.contentText,
                                                    ),
                                                    children: [
                                                      "Plano (",
                                                      P === "ALL"
                                                        ? "Fixo"
                                                        : P === "PICKING"
                                                          ? "Picking"
                                                          : "Pulmão",
                                                      ")",
                                                    ],
                                                  }),
                                                  v.jsx("th", {
                                                    className: G(
                                                      "px-6 py-4 text-xs font-semibold uppercase tracking-wider opacity-70",
                                                      j.contentText,
                                                    ),
                                                    children: "Contado",
                                                  }),
                                                  v.jsx("th", {
                                                    className: G(
                                                      "px-6 py-4 text-xs font-semibold uppercase tracking-wider opacity-70",
                                                      j.contentText,
                                                    ),
                                                    children: "Pendente",
                                                  }),
                                                  v.jsx("th", {
                                                    className: G(
                                                      "px-6 py-4 text-xs font-semibold uppercase tracking-wider opacity-70",
                                                      j.contentText,
                                                    ),
                                                    children: "Status (%)",
                                                  }),
                                                  v.jsx("th", {
                                                    className: G(
                                                      "px-6 py-4 text-xs font-semibold uppercase tracking-wider opacity-70",
                                                      j.contentText,
                                                    ),
                                                    children: "Progresso",
                                                  }),
                                                ],
                                              }),
                                            }),
                                            v.jsx("tbody", {
                                              className:
                                                "divide-y transition-all duration-500 divide-white/5",
                                              children: z.map((Q) => {
                                                const Z = L(Q);
                                                return v.jsxs(
                                                  "tr",
                                                  {
                                                    className:
                                                      "transition-colors group hover:bg-white/5",
                                                    children: [
                                                      v.jsx("td", {
                                                        className: G(
                                                          "px-6 py-4 font-medium",
                                                          j.contentTitle,
                                                        ),
                                                        children: v.jsxs(
                                                          "div",
                                                          {
                                                            className:
                                                              "flex flex-col",
                                                            children: [
                                                              v.jsx("span", {
                                                                className:
                                                                  "font-bold",
                                                                children:
                                                                  Q.name,
                                                              }),
                                                              v.jsxs("div", {
                                                                className:
                                                                  "flex flex-wrap items-center gap-2 mt-1.5",
                                                                children: [
                                                                  v.jsxs(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        G(
                                                                          "px-1.5 py-0.5 rounded text-[9px] font-bold uppercase",
                                                                          j.primary ===
                                                                            "rose"
                                                                            ? "bg-slate-100 text-slate-600"
                                                                            : "bg-white/5 text-white/60",
                                                                        ),
                                                                      children:
                                                                        [
                                                                          "Picking: ",
                                                                          v.jsx(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "text-emerald-500 font-extrabold",
                                                                              children:
                                                                                Q.pickingCounted ||
                                                                                0,
                                                                            },
                                                                          ),
                                                                          "/",
                                                                          Q.pickingPlan ||
                                                                            0,
                                                                        ],
                                                                    },
                                                                  ),
                                                                  v.jsxs(
                                                                    "span",
                                                                    {
                                                                      className:
                                                                        G(
                                                                          "px-1.5 py-0.5 rounded text-[9px] font-bold uppercase",
                                                                          j.primary ===
                                                                            "rose"
                                                                            ? "bg-slate-100 text-slate-600"
                                                                            : "bg-white/5 text-white/60",
                                                                        ),
                                                                      children:
                                                                        [
                                                                          "Pulmão: ",
                                                                          v.jsx(
                                                                            "span",
                                                                            {
                                                                              className:
                                                                                "text-sky-500 font-extrabold",
                                                                              children:
                                                                                Q.pulmaoCounted ||
                                                                                0,
                                                                            },
                                                                          ),
                                                                          "/",
                                                                          Q.pulmaoPlan ||
                                                                            0,
                                                                        ],
                                                                    },
                                                                  ),
                                                                ],
                                                              }),
                                                            ],
                                                          },
                                                        ),
                                                      }),
                                                      v.jsx("td", {
                                                        className: G(
                                                          "px-6 py-4 opacity-70",
                                                          j.contentText,
                                                        ),
                                                        children: Z.plan,
                                                      }),
                                                      v.jsx("td", {
                                                        className: G(
                                                          "px-6 py-4 font-semibold",
                                                          j.contentTitle,
                                                        ),
                                                        children: Z.counted,
                                                      }),
                                                      v.jsx("td", {
                                                        className: "px-6 py-4",
                                                        children: v.jsx(
                                                          "span",
                                                          {
                                                            className: G(
                                                              "px-2 py-1 rounded-lg text-xs font-bold",
                                                              Z.pending < 0
                                                                ? "bg-rose-500/20 text-rose-400"
                                                                : "bg-emerald-500/20 text-emerald-400",
                                                            ),
                                                            children: Z.pending,
                                                          },
                                                        ),
                                                      }),
                                                      v.jsxs("td", {
                                                        className:
                                                          "px-6 py-4 font-bold text-emerald-400",
                                                        children: [
                                                          Z.status.toFixed(2),
                                                          "%",
                                                        ],
                                                      }),
                                                      v.jsx("td", {
                                                        className:
                                                          "px-6 py-4 w-48",
                                                        children: v.jsx("div", {
                                                          className:
                                                            "w-full h-2 rounded-full overflow-hidden bg-white/10",
                                                          children: v.jsx(
                                                            Gr.div,
                                                            {
                                                              initial: {
                                                                width: 0,
                                                              },
                                                              animate: {
                                                                width: `${Math.min(Z.status, 100)}%`,
                                                              },
                                                              className: G(
                                                                "h-full transition-all",
                                                                Z.status >= 100
                                                                  ? "bg-emerald-400"
                                                                  : "bg-emerald-500",
                                                              ),
                                                            },
                                                          ),
                                                        }),
                                                      }),
                                                    ],
                                                  },
                                                  Q.id,
                                                );
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    },
                                    "streets",
                                  ),
                                ],
                              }),
                            a === "errors" &&
                              v.jsxs(
                                Gr.div,
                                {
                                  initial: { opacity: 0, y: 5 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -5 },
                                  transition: {
                                    duration: 0.15,
                                    ease: "easeOut",
                                  },
                                  className: "space-y-8",
                                  children: [
                                    v.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-3 gap-8",
                                      children: [
                                        v.jsxs("div", {
                                          className: G(
                                            "backdrop-blur-md p-8 rounded-3xl border shadow-lg flex flex-col items-center text-center transition-all duration-500",
                                            j.contentBg,
                                            j.contentBorder,
                                          ),
                                          children: [
                                            v.jsx("div", {
                                              className:
                                                "w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10",
                                              children: v.jsx(_f, {
                                                className: G(
                                                  "w-8 h-8",
                                                  j.contentTitle,
                                                ),
                                              }),
                                            }),
                                            v.jsx("h3", {
                                              className: G(
                                                "text-xl font-bold mb-2",
                                                j.contentTitle,
                                              ),
                                              children: "Total de Erros",
                                            }),
                                            v.jsx("p", {
                                              className: G(
                                                "mb-6 font-medium opacity-80",
                                                j.contentText,
                                              ),
                                              children:
                                                "Soma total de divergências (Sobra e Falta) identificadas na contagem.",
                                            }),
                                            v.jsx("div", {
                                              className: G(
                                                "text-5xl font-black mb-2",
                                                j.contentTitle,
                                              ),
                                              children: e.totalErrors,
                                            }),
                                            v.jsxs("div", {
                                              className: "flex gap-4 mb-4",
                                              children: [
                                                v.jsxs("div", {
                                                  className: "flex flex-col",
                                                  children: [
                                                    v.jsx("span", {
                                                      className: G(
                                                        "text-xs font-bold uppercase opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Sobra (+)",
                                                    }),
                                                    v.jsx("span", {
                                                      className:
                                                        "text-lg font-bold text-emerald-400",
                                                      children: e.surplus,
                                                    }),
                                                  ],
                                                }),
                                                v.jsx("div", {
                                                  className:
                                                    "w-px h-8 bg-white/10 self-center",
                                                }),
                                                v.jsxs("div", {
                                                  className: "flex flex-col",
                                                  children: [
                                                    v.jsx("span", {
                                                      className: G(
                                                        "text-xs font-bold uppercase opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Falta (-)",
                                                    }),
                                                    v.jsx("span", {
                                                      className:
                                                        "text-lg font-bold text-rose-400",
                                                      children: e.shortage,
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-sm font-medium uppercase tracking-widest opacity-80",
                                                j.contentText,
                                              ),
                                              children: "Unidades Totais",
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className: G(
                                            "backdrop-blur-md p-8 rounded-3xl border shadow-lg flex flex-col items-center text-center transition-all duration-500",
                                            j.contentBg,
                                            j.contentBorder,
                                          ),
                                          children: [
                                            v.jsx("div", {
                                              className:
                                                "w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10",
                                              children: v.jsx(IS, {
                                                className: G(
                                                  "w-8 h-8",
                                                  j.contentTitle,
                                                ),
                                              }),
                                            }),
                                            v.jsx("h3", {
                                              className: G(
                                                "text-xl font-bold mb-2",
                                                j.contentTitle,
                                              ),
                                              children:
                                                "Divergências Finalizadas",
                                            }),
                                            v.jsx("p", {
                                              className: G(
                                                "mb-6 font-medium opacity-80",
                                                j.contentText,
                                              ),
                                              children:
                                                "Quantidade de divergências que já foram tratadas e concluídas.",
                                            }),
                                            v.jsx("div", {
                                              className: G(
                                                "text-5xl font-black mb-2",
                                                j.contentTitle,
                                              ),
                                              children: e.finalizedDivergences,
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className: G(
                                            "backdrop-blur-md p-8 rounded-3xl border shadow-lg flex flex-col items-center text-center transition-all duration-500",
                                            j.contentBg,
                                            j.contentBorder,
                                          ),
                                          children: [
                                            v.jsx("div", {
                                              className:
                                                "w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10",
                                              children: v.jsx(ih, {
                                                className: G(
                                                  "w-8 h-8",
                                                  j.contentTitle,
                                                ),
                                              }),
                                            }),
                                            v.jsx("h3", {
                                              className: G(
                                                "text-xl font-bold mb-2",
                                                j.contentTitle,
                                              ),
                                              children: "Acuracidade Final",
                                            }),
                                            v.jsx("p", {
                                              className: G(
                                                "mb-6 font-medium opacity-80",
                                                j.contentText,
                                              ),
                                              children:
                                                "Percentual após analise das Divergências",
                                            }),
                                            v.jsxs("div", {
                                              className: G(
                                                "text-5xl font-black mb-2",
                                                j.contentTitle,
                                              ),
                                              children: [
                                                e.finalAccuracy.toFixed(2),
                                                "%",
                                              ],
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-sm font-medium uppercase tracking-widest opacity-90",
                                                j.contentText,
                                              ),
                                              children: "Precisão",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className: G(
                                        "backdrop-blur-md p-6 rounded-2xl border shadow-lg transition-all duration-500",
                                        j.contentBg,
                                        j.contentBorder,
                                      ),
                                      children: [
                                        v.jsx("h3", {
                                          className: G(
                                            "text-lg font-bold mb-6",
                                            j.contentTitle,
                                          ),
                                          children:
                                            "Análise de Divergência por Rua",
                                        }),
                                        v.jsx("div", {
                                          className: "h-80",
                                          children: v.jsx(Xu, {
                                            width: "100%",
                                            height: "100%",
                                            children: v.jsxs(D_e, {
                                              data: ie,
                                              children: [
                                                v.jsx(Ju, {
                                                  strokeDasharray: "3 3",
                                                  vertical: !1,
                                                  stroke:
                                                    j.primary === "rose"
                                                      ? "rgba(0,0,0,0.1)"
                                                      : "rgba(255,255,255,0.1)",
                                                }),
                                                v.jsx(tf, {
                                                  dataKey: "name",
                                                  axisLine: !1,
                                                  tickLine: !1,
                                                  tick: {
                                                    fill:
                                                      j.primary === "rose"
                                                        ? "#64748b"
                                                        : "rgba(255,255,255,0.6)",
                                                    fontSize: 10,
                                                  },
                                                }),
                                                v.jsx(rf, {
                                                  axisLine: !1,
                                                  tickLine: !1,
                                                  tick: {
                                                    fill:
                                                      j.primary === "rose"
                                                        ? "#64748b"
                                                        : "rgba(255,255,255,0.6)",
                                                    fontSize: 10,
                                                  },
                                                }),
                                                v.jsx(_c, {
                                                  contentStyle: {
                                                    backgroundColor:
                                                      j.primary === "rose"
                                                        ? "#fff"
                                                        : "#1a1a1a",
                                                    borderRadius: "12px",
                                                    border:
                                                      j.primary === "rose"
                                                        ? "1px solid #e2e8f0"
                                                        : "1px solid rgba(255,255,255,0.1)",
                                                    color:
                                                      j.primary === "rose"
                                                        ? "#000"
                                                        : "#fff",
                                                  },
                                                  itemStyle: {
                                                    color:
                                                      j.primary === "rose"
                                                        ? "#000"
                                                        : "#fff",
                                                  },
                                                }),
                                                v.jsx(nS, {}),
                                                v.jsx(xp, {
                                                  type: "monotone",
                                                  dataKey: "Erros",
                                                  stroke: "#f43f5e",
                                                  strokeWidth: 3,
                                                  dot: {
                                                    r: 6,
                                                    fill: "#f43f5e",
                                                  },
                                                  activeDot: { r: 8 },
                                                }),
                                                v.jsx(xp, {
                                                  type: "monotone",
                                                  dataKey: "Finalizadas",
                                                  stroke: "#10b981",
                                                  strokeWidth: 3,
                                                  dot: {
                                                    r: 6,
                                                    fill: "#10b981",
                                                  },
                                                  activeDot: { r: 8 },
                                                }),
                                                v.jsx(xp, {
                                                  type: "monotone",
                                                  dataKey: "Sobra",
                                                  name: "Quantidade para mais (+)",
                                                  stroke: "#10b981",
                                                  hide: !0,
                                                  legendType: "none",
                                                }),
                                                v.jsx(xp, {
                                                  type: "monotone",
                                                  dataKey: "Falta",
                                                  name: "Quantidade para menos (-)",
                                                  stroke: "#fb7185",
                                                  hide: !0,
                                                  legendType: "none",
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "errors",
                              ),
                            a === "daily" &&
                              v.jsxs(
                                Gr.div,
                                {
                                  initial: { opacity: 0, y: 5 },
                                  animate: { opacity: 1, y: 0 },
                                  exit: { opacity: 0, y: -5 },
                                  transition: {
                                    duration: 0.15,
                                    ease: "easeOut",
                                  },
                                  className: "space-y-8",
                                  children: [
                                    v.jsxs("div", {
                                      className:
                                        "grid grid-cols-1 md:grid-cols-3 gap-8",
                                      children: [
                                        v.jsxs("div", {
                                          className: G(
                                            "backdrop-blur-md p-8 rounded-3xl border shadow-lg flex flex-col items-center text-center opacity-95 transition-all duration-500",
                                            j.contentBg,
                                            j.contentBorder,
                                          ),
                                          children: [
                                            v.jsx("div", {
                                              className:
                                                "w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10",
                                              children: v.jsx(ih, {
                                                className: G(
                                                  "w-8 h-8",
                                                  j.contentTitle,
                                                ),
                                              }),
                                            }),
                                            v.jsx("h3", {
                                              className: G(
                                                "text-xl font-bold mb-2",
                                                j.contentTitle,
                                              ),
                                              children: "Meta Semanal",
                                            }),
                                            v.jsx("p", {
                                              className: G(
                                                "mb-6 font-medium opacity-80",
                                                j.contentText,
                                              ),
                                              children:
                                                "Objetivo de contagem semanal (Meta Mês / 4).",
                                            }),
                                            v.jsx("div", {
                                              className: G(
                                                "text-5xl font-black mb-2",
                                                j.contentTitle,
                                              ),
                                              children:
                                                e.weeklyGoalCalculated || 2852,
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-sm font-medium uppercase tracking-widest opacity-90",
                                                j.contentText,
                                              ),
                                              children: "Unidades",
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className: G(
                                            "backdrop-blur-md p-10 rounded-3xl border-4 shadow-2xl flex flex-col items-center text-center transform scale-105 z-10 transition-all duration-500",
                                            j.contentBg,
                                            "border-white/20",
                                          ),
                                          children: [
                                            v.jsx("div", {
                                              className:
                                                "w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mb-6 border border-white/40",
                                              children: v.jsx(Ld, {
                                                className: G(
                                                  "w-10 h-10",
                                                  j.contentTitle,
                                                ),
                                              }),
                                            }),
                                            v.jsx("h3", {
                                              className: G(
                                                "text-2xl font-bold mb-2",
                                                j.contentTitle,
                                              ),
                                              children: "Meta Diária",
                                            }),
                                            v.jsx("p", {
                                              className: G(
                                                "mb-6 font-medium opacity-80",
                                                j.contentText,
                                              ),
                                              children:
                                                "Meta calculada por dia útil (26 dias).",
                                            }),
                                            v.jsx("div", {
                                              className: G(
                                                "text-6xl font-black mb-2",
                                                j.contentTitle,
                                              ),
                                              children: e.dailyGoal || 439,
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-sm font-medium uppercase tracking-widest opacity-90",
                                                j.contentText,
                                              ),
                                              children: "Posições / Dia",
                                            }),
                                          ],
                                        }),
                                        v.jsxs("div", {
                                          className: G(
                                            "backdrop-blur-md p-8 rounded-3xl border shadow-lg flex flex-col items-center text-center opacity-95 transition-all duration-500",
                                            j.contentBg,
                                            j.contentBorder,
                                          ),
                                          children: [
                                            v.jsx("div", {
                                              className:
                                                "w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-white/10",
                                              children: v.jsx(nf, {
                                                className: G(
                                                  "w-8 h-8",
                                                  j.contentTitle,
                                                ),
                                              }),
                                            }),
                                            v.jsx("h3", {
                                              className: G(
                                                "text-xl font-bold mb-2",
                                                j.contentTitle,
                                              ),
                                              children: "Meta Mês",
                                            }),
                                            v.jsx("p", {
                                              className: G(
                                                "mb-6 font-medium opacity-80",
                                                j.contentText,
                                              ),
                                              children:
                                                "Quantidade total de posições.",
                                            }),
                                            v.jsx("div", {
                                              className: G(
                                                "text-5xl font-black mb-2",
                                                j.contentTitle,
                                              ),
                                              children:
                                                e.totalPositions || 11408,
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-sm font-medium uppercase tracking-wider mb-6 opacity-90",
                                                j.contentText,
                                              ),
                                              children: "Total Posições",
                                            }),
                                            v.jsxs("div", {
                                              className: G(
                                                "w-full pt-6 border-t flex justify-center gap-10",
                                                "border-white/10",
                                              ),
                                              children: [
                                                v.jsxs("div", {
                                                  className: "flex flex-col",
                                                  children: [
                                                    v.jsx("span", {
                                                      className: G(
                                                        "text-[10px] font-bold uppercase tracking-widest opacity-90",
                                                        j.contentText,
                                                      ),
                                                      children: "Contado",
                                                    }),
                                                    v.jsx("span", {
                                                      className:
                                                        "text-2xl font-bold text-emerald-400",
                                                      children: e.totalCounted,
                                                    }),
                                                  ],
                                                }),
                                                v.jsx("div", {
                                                  className: G(
                                                    "w-px h-10 self-center",
                                                    "bg-white/10",
                                                  ),
                                                }),
                                                v.jsxs("div", {
                                                  className: "flex flex-col",
                                                  children: [
                                                    v.jsx("span", {
                                                      className: G(
                                                        "text-[10px] font-bold uppercase tracking-widest opacity-90",
                                                        j.contentText,
                                                      ),
                                                      children: "Falta",
                                                    }),
                                                    v.jsx("span", {
                                                      className:
                                                        "text-2xl font-bold text-rose-400",
                                                      children: e.totalPending,
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
                                      className: G(
                                        "backdrop-blur-md p-6 rounded-2xl border shadow-lg overflow-hidden transition-all duration-500",
                                        j.contentBg,
                                        j.contentBorder,
                                      ),
                                      children: [
                                        v.jsxs("div", {
                                          className:
                                            "flex justify-between items-center mb-6",
                                          children: [
                                            v.jsx("h3", {
                                              className: G(
                                                "text-lg font-bold",
                                                j.contentTitle,
                                              ),
                                              children:
                                                "CONTAGEM POR COLABORADOR",
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-xs uppercase tracking-widest opacity-80",
                                                j.contentText,
                                              ),
                                              children: "Desempenho Individual",
                                            }),
                                          ],
                                        }),
                                        v.jsx("div", {
                                          className:
                                            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
                                          children:
                                            e.collaboratorCounts &&
                                            e.collaboratorCounts.length > 0
                                              ? e.collaboratorCounts.map(
                                                  (Q, Z) =>
                                                    v.jsxs(
                                                      Gr.div,
                                                      {
                                                        whileHover: {
                                                          scale: 1.02,
                                                          backgroundColor:
                                                            "rgba(255, 255, 255, 0.05)",
                                                        },
                                                        className: G(
                                                          "p-4 rounded-xl border flex flex-col items-center text-center relative overflow-hidden group transition-all",
                                                          j.contentBorder,
                                                        ),
                                                        children: [
                                                          v.jsx("div", {
                                                            className:
                                                              "absolute top-0 left-0 w-1 h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity",
                                                          }),
                                                          v.jsx("span", {
                                                            className: G(
                                                              "text-[10px] font-bold uppercase tracking-widest mb-1 opacity-90",
                                                              j.contentText,
                                                            ),
                                                            children: Q.name,
                                                          }),
                                                          v.jsx("span", {
                                                            className: G(
                                                              "text-2xl font-black",
                                                              j.contentTitle,
                                                            ),
                                                            children:
                                                              Q.count.toLocaleString(
                                                                "pt-BR",
                                                              ),
                                                          }),
                                                          v.jsx("span", {
                                                            className: G(
                                                              "text-[10px] uppercase font-medium opacity-50",
                                                              j.contentText,
                                                            ),
                                                            children:
                                                              "Unidades Contadas",
                                                          }),
                                                        ],
                                                      },
                                                      Z,
                                                    ),
                                                )
                                              : v.jsx("div", {
                                                  className: G(
                                                    "col-span-full py-4 text-center italic opacity-60",
                                                    j.contentText,
                                                  ),
                                                  children:
                                                    "Nenhum dado de colaborador disponível.",
                                                }),
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className: G(
                                        "backdrop-blur-md p-6 rounded-2xl border shadow-lg overflow-hidden transition-all duration-500",
                                        j.contentBg,
                                        j.contentBorder,
                                      ),
                                      children: [
                                        v.jsxs("div", {
                                          className:
                                            "flex justify-between items-center mb-6",
                                          children: [
                                            v.jsx("h3", {
                                              className: G(
                                                "text-lg font-bold",
                                                j.contentTitle,
                                              ),
                                              children:
                                                "Histórico de Contagem (Mês atual)",
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-xs uppercase tracking-widest opacity-80",
                                                j.contentText,
                                              ),
                                              children: "Excluindo Domingos",
                                            }),
                                          ],
                                        }),
                                        v.jsx("div", {
                                          className: "overflow-x-auto",
                                          children: v.jsxs("table", {
                                            className:
                                              "w-full text-left border-collapse",
                                            children: [
                                              v.jsx("thead", {
                                                children: v.jsxs("tr", {
                                                  className:
                                                    "border-b transition-all duration-500 bg-white/5 border-white/10",
                                                  children: [
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Data",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Dia",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Contada",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Previsão",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children:
                                                        "Atingimento (%)",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children:
                                                        "Status vs Meta",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              v.jsx("tbody", {
                                                className:
                                                  "divide-y transition-all duration-500 divide-white/10",
                                                children: (() => {
                                                  let Q = 0;
                                                  return e.dailyHistory &&
                                                    e.dailyHistory.length > 0
                                                    ? e.dailyHistory.map(
                                                        (Z, ne) => {
                                                          const ue =
                                                              e.dailyGoal ||
                                                              439,
                                                            Ce = Math.round(
                                                              ue + Q,
                                                            ),
                                                            Pe =
                                                              Ce > 0
                                                                ? (Z.count /
                                                                    Ce) *
                                                                  100
                                                                : 100,
                                                            de = Math.round(
                                                              Ce - Z.count,
                                                            );
                                                          Q = de;
                                                          let ce =
                                                              "text-emerald-400",
                                                            He =
                                                              "bg-emerald-500/10",
                                                            Y = "Meta Atingida";
                                                          return (
                                                            Pe < 50
                                                              ? ((ce =
                                                                  "text-rose-400"),
                                                                (He =
                                                                  "bg-rose-500/20"),
                                                                (Y =
                                                                  "Crítico (<50%)"))
                                                              : Pe < 75
                                                                ? ((ce =
                                                                    "text-amber-400"),
                                                                  (He =
                                                                    "bg-amber-500/20"),
                                                                  (Y =
                                                                    "Abaixo (50-75%)"))
                                                                : Pe < 100 &&
                                                                  ((ce =
                                                                    "text-emerald-400 font-bold"),
                                                                  (He =
                                                                    "bg-emerald-500/10"),
                                                                  (Y =
                                                                    "Próximo (>75%)")),
                                                            v.jsxs(
                                                              "tr",
                                                              {
                                                                className: G(
                                                                  "transition-colors duration-150 border-l-4",
                                                                  Pe >= 100
                                                                    ? "bg-white/10 border-l-emerald-500 hover:bg-white/20"
                                                                    : "hover:bg-white/5 border-l-transparent",
                                                                ),
                                                                children: [
                                                                  v.jsx("td", {
                                                                    className:
                                                                      G(
                                                                        "px-4 py-3 text-sm font-bold",
                                                                        j.contentTitle,
                                                                      ),
                                                                    children:
                                                                      Z.date,
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      G(
                                                                        "px-4 py-3 text-sm opacity-70",
                                                                        j.contentText,
                                                                      ),
                                                                    children:
                                                                      Z.dayName,
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      G(
                                                                        "px-4 py-3 text-sm font-bold",
                                                                        j.contentTitle,
                                                                      ),
                                                                    children:
                                                                      Z.count,
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      "px-4 py-3 text-sm text-emerald-400 font-bold",
                                                                    children:
                                                                      de,
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      "px-4 py-3",
                                                                    children:
                                                                      v.jsxs(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            G(
                                                                              "text-sm font-bold",
                                                                              ce,
                                                                            ),
                                                                          children:
                                                                            [
                                                                              Pe.toFixed(
                                                                                1,
                                                                              ),
                                                                              "%",
                                                                            ],
                                                                        },
                                                                      ),
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      "px-4 py-3",
                                                                    children:
                                                                      v.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            G(
                                                                              "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                                                                              He,
                                                                              ce,
                                                                            ),
                                                                          children:
                                                                            Y,
                                                                        },
                                                                      ),
                                                                  }),
                                                                ],
                                                              },
                                                              ne,
                                                            )
                                                          );
                                                        },
                                                      )
                                                    : v.jsx("tr", {
                                                        children: v.jsx("td", {
                                                          colSpan: 6,
                                                          className:
                                                            "px-6 py-12 text-center text-slate-300 italic",
                                                          children:
                                                            'Nenhum dado de histórico disponível. Faça o upload da planilha com a aba "DIARIO".',
                                                        }),
                                                      });
                                                })(),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className: G(
                                        "backdrop-blur-md p-6 rounded-2xl border shadow-lg overflow-hidden transition-all duration-500",
                                        j.contentBg,
                                        j.contentBorder,
                                      ),
                                      children: [
                                        v.jsxs("div", {
                                          className:
                                            "flex justify-between items-center mb-6",
                                          children: [
                                            v.jsx("h3", {
                                              className: G(
                                                "text-lg font-bold",
                                                j.contentTitle,
                                              ),
                                              children:
                                                "Histórico de Contagem Semanal",
                                            }),
                                            v.jsx("span", {
                                              className: G(
                                                "text-xs uppercase tracking-widest opacity-80",
                                                j.contentText,
                                              ),
                                              children: "Agrupado por Período",
                                            }),
                                          ],
                                        }),
                                        v.jsx("div", {
                                          className: "overflow-x-auto",
                                          children: v.jsxs("table", {
                                            className:
                                              "w-full text-left border-collapse",
                                            children: [
                                              v.jsx("thead", {
                                                children: v.jsxs("tr", {
                                                  className:
                                                    "border-b transition-all duration-500 bg-white/5 border-white/10",
                                                  children: [
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Semana",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Contada",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children: "Previsão",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children:
                                                        "Atingimento (%)",
                                                    }),
                                                    v.jsx("th", {
                                                      className: G(
                                                        "px-4 py-2 text-xs font-bold uppercase tracking-wider opacity-70",
                                                        j.contentText,
                                                      ),
                                                      children:
                                                        "Status vs Meta",
                                                    }),
                                                  ],
                                                }),
                                              }),
                                              v.jsx("tbody", {
                                                className:
                                                  "divide-y transition-all duration-500 divide-white/10",
                                                children: (() => {
                                                  let Q = 0;
                                                  return e.weeklyHistory &&
                                                    e.weeklyHistory.length > 0
                                                    ? e.weeklyHistory.map(
                                                        (Z, ne) => {
                                                          const ue =
                                                              e.weeklyGoalCalculated ||
                                                              2852,
                                                            Ce = Math.round(
                                                              ue + Q,
                                                            ),
                                                            Pe =
                                                              Ce > 0
                                                                ? (Z.count /
                                                                    Ce) *
                                                                  100
                                                                : 100,
                                                            de = Math.round(
                                                              Ce - Z.count,
                                                            );
                                                          Q = de;
                                                          let ce =
                                                              "text-emerald-400",
                                                            He =
                                                              "bg-emerald-500/10",
                                                            Y = "Meta Atingida";
                                                          return (
                                                            Pe < 50
                                                              ? ((ce =
                                                                  "text-rose-400"),
                                                                (He =
                                                                  "bg-rose-500/20"),
                                                                (Y =
                                                                  "Crítico (<50%)"))
                                                              : Pe < 75
                                                                ? ((ce =
                                                                    "text-amber-400"),
                                                                  (He =
                                                                    "bg-amber-500/20"),
                                                                  (Y =
                                                                    "Abaixo (50-75%)"))
                                                                : Pe < 100 &&
                                                                  ((ce =
                                                                    "text-emerald-400 font-bold"),
                                                                  (He =
                                                                    "bg-emerald-500/10"),
                                                                  (Y =
                                                                    "Próximo (>75%)")),
                                                            v.jsxs(
                                                              "tr",
                                                              {
                                                                className: G(
                                                                  "transition-colors duration-150 border-l-4",
                                                                  Pe >= 100
                                                                    ? "bg-white/10 border-l-emerald-500 hover:bg-white/20"
                                                                    : "hover:bg-white/5 border-l-transparent",
                                                                ),
                                                                children: [
                                                                  v.jsx("td", {
                                                                    className:
                                                                      G(
                                                                        "px-4 py-3 text-sm font-bold",
                                                                        j.contentTitle,
                                                                      ),
                                                                    children:
                                                                      Z.weekRange,
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      G(
                                                                        "px-4 py-3 text-sm font-bold",
                                                                        j.contentTitle,
                                                                      ),
                                                                    children:
                                                                      Z.count,
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      "px-4 py-3 text-sm text-emerald-400 font-bold",
                                                                    children:
                                                                      de,
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      "px-4 py-3",
                                                                    children:
                                                                      v.jsxs(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            G(
                                                                              "text-sm font-bold",
                                                                              ce,
                                                                            ),
                                                                          children:
                                                                            [
                                                                              Pe.toFixed(
                                                                                1,
                                                                              ),
                                                                              "%",
                                                                            ],
                                                                        },
                                                                      ),
                                                                  }),
                                                                  v.jsx("td", {
                                                                    className:
                                                                      "px-4 py-3",
                                                                    children:
                                                                      v.jsx(
                                                                        "span",
                                                                        {
                                                                          className:
                                                                            G(
                                                                              "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter",
                                                                              He,
                                                                              ce,
                                                                            ),
                                                                          children:
                                                                            Y,
                                                                        },
                                                                      ),
                                                                  }),
                                                                ],
                                                              },
                                                              ne,
                                                            )
                                                          );
                                                        },
                                                      )
                                                    : v.jsx("tr", {
                                                        children: v.jsx("td", {
                                                          colSpan: 5,
                                                          className:
                                                            "px-6 py-12 text-center text-slate-300 italic",
                                                          children:
                                                            "Nenhum dado de histórico semanal disponível.",
                                                        }),
                                                      });
                                                })(),
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                "daily",
                              ),
                          ],
                        }),
                      ],
                    })
                  : r === "MAPA DE OCUPAÇÃO"
                    ? v.jsxs(v.Fragment, {
                        children: [
                          v.jsxs("div", {
                            className: G(
                              "flex flex-col md:flex-row justify-between items-center md:items-start mb-10 backdrop-blur-sm p-6 rounded-3xl border gap-6 md:gap-0 transition-colors duration-500",
                              j.contentBg,
                              j.contentBorder,
                              j.contentShadow,
                            ),
                            children: [
                              v.jsxs("div", {
                                className: "flex items-center gap-0",
                                children: [
                                  v.jsx("div", {
                                    className: "w-20 h-16 flex-shrink-0",
                                    children: v.jsxs("svg", {
                                      viewBox: "0 0 100 100",
                                      className: "w-full h-full",
                                      children: [
                                        v.jsx("path", {
                                          d: "M 15 45 A 16 16 0 0 1 47 45",
                                          fill: "none",
                                          stroke: j.logoTop || "#334155",
                                          strokeWidth: "12",
                                          strokeLinecap: "round",
                                        }),
                                        v.jsx("path", {
                                          d: "M 32 55 A 16 16 0 0 0 64 55",
                                          fill: "none",
                                          stroke: j.logo,
                                          strokeWidth: "12",
                                          strokeLinecap: "round",
                                        }),
                                      ],
                                    }),
                                  }),
                                  v.jsxs("div", {
                                    className: "flex flex-col -ml-6",
                                    children: [
                                      v.jsx("span", {
                                        className: G(
                                          "text-[32px] font-bold leading-[0.8] lowercase tracking-tight",
                                          j.headerTitle || j.contentTitle,
                                        ),
                                        children: "giro",
                                      }),
                                      v.jsx("span", {
                                        className: G(
                                          "text-[32px] font-bold leading-[0.8] lowercase tracking-tight ml-[12px]",
                                          j.headerText || j.contentText,
                                        ),
                                        children: "trade",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              v.jsx(Gr.div, {
                                initial: { opacity: 0, y: -10 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 0.2 },
                                className:
                                  "hidden sm:flex flex-col items-center justify-center flex-1 px-4 mt-1",
                                children: v.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    v.jsxs("h1", {
                                      className: G(
                                        "text-xl md:text-2xl lg:text-3xl font-black tracking-[0.15em] uppercase leading-none text-center",
                                        j.headerTitle || j.contentTitle,
                                      ),
                                      children: [
                                        "Ocupação ",
                                        v.jsx("span", {
                                          className: G(
                                            "opacity-70",
                                            j.contentTitle,
                                          ),
                                          children: "CD",
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className:
                                        "absolute -bottom-3 left-0 right-0 flex items-center justify-center gap-3",
                                      children: [
                                        v.jsx("div", {
                                          className: G(
                                            "hidden md:block h-[2px] w-8 lg:w-12 bg-gradient-to-r from-transparent",
                                            j ? "to-white/20" : "to-black/10",
                                          ),
                                        }),
                                        v.jsx("span", {
                                          className: G(
                                            "text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] whitespace-nowrap opacity-90",
                                            j.contentText,
                                          ),
                                          children: "Performance & Ocupação",
                                        }),
                                        v.jsx("div", {
                                          className: G(
                                            "hidden md:block h-[2px] w-8 lg:w-12 bg-gradient-to-l from-transparent",
                                            j ? "to-white/20" : "to-black/10",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              v.jsxs("div", {
                                className: "flex items-center gap-6",
                                children: [
                                  v.jsxs("div", {
                                    className: "text-right hidden lg:block",
                                    children: [
                                      v.jsx("div", {
                                        className: G(
                                          "text-[8px] font-bold uppercase tracking-widest opacity-70",
                                          j.contentText,
                                        ),
                                        children: "Created By",
                                      }),
                                      v.jsx("div", {
                                        className: G(
                                          "text-xs font-black uppercase tracking-tighter leading-none",
                                          j.contentTitle,
                                        ),
                                        children: "Thiago Rodrigues",
                                      }),
                                      v.jsx("div", {
                                        className: G(
                                          "text-[8px] font-bold uppercase tracking-[0.2em] mt-1",
                                          j
                                            ? j.headerText || j.contentText
                                            : "text-slate-600",
                                        ),
                                        children: "Inventory Analyst",
                                      }),
                                    ],
                                  }),
                                  v.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      v.jsx("button", {
                                        className:
                                          "p-2 rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white transition-colors",
                                        children: v.jsx(cx, {
                                          className: "w-4 h-4",
                                        }),
                                      }),
                                      k &&
                                        v.jsxs("button", {
                                          onClick: V,
                                          className:
                                            "flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg text-[10px] font-black text-rose-400 uppercase tracking-widest hover:bg-rose-500/20 transition-all font-sans",
                                          children: [
                                            v.jsx(lx, { className: "w-3 h-3" }),
                                            "Sair",
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
                              "flex justify-center mb-10 sticky top-0 z-40 py-2",
                            children: v.jsxs("div", {
                              className: G(
                                "backdrop-blur-md border rounded-2xl p-1 shadow-xl flex items-center gap-1",
                                j.contentBg,
                                j.contentBorder,
                              ),
                              children: [
                                v.jsx("button", {
                                  onClick: () => T("dashboard"),
                                  className: G(
                                    "px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                                    _ === "dashboard"
                                      ? `${j.active} ${j.contentTitle} shadow-lg`
                                      : G(
                                          "opacity-40 hover:opacity-100",
                                          j.contentText,
                                        ),
                                  ),
                                  children: "Visão Analítica",
                                }),
                                v.jsx("button", {
                                  onClick: () => T("analitico"),
                                  className: G(
                                    "px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                                    _ === "analitico"
                                      ? `${j.active} ${j.contentTitle} shadow-lg`
                                      : G(
                                          "opacity-40 hover:opacity-100",
                                          j.contentText,
                                        ),
                                  ),
                                  children: "Visão Geral",
                                }),
                                v.jsx("button", {
                                  onClick: () => T("mapa"),
                                  className: G(
                                    "px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all",
                                    _ === "mapa"
                                      ? `${j.active} ${j.contentTitle} shadow-lg`
                                      : G(
                                          "opacity-40 hover:opacity-100",
                                          j.contentText,
                                        ),
                                  ),
                                  children: "MAPA",
                                }),
                              ],
                            }),
                          }),
                          v.jsx(i3e, {
                            data: e == null ? void 0 : e.occupancyData,
                            theme: j,
                            activeView: _,
                          }),
                        ],
                      })
                    : v.jsxs(v.Fragment, {
                        children: [
                          v.jsxs("div", {
                            className: G(
                              "flex flex-col md:flex-row justify-between items-center md:items-start mb-10 backdrop-blur-sm p-6 rounded-3xl border gap-6 md:gap-0 transition-colors duration-500",
                              j.contentBg,
                              j.contentBorder,
                              j.contentShadow,
                            ),
                            children: [
                              v.jsxs("div", {
                                className: "flex items-center gap-0",
                                children: [
                                  v.jsx("div", {
                                    className: "w-20 h-16 flex-shrink-0",
                                    children: v.jsxs("svg", {
                                      viewBox: "0 0 100 100",
                                      className: "w-full h-full",
                                      children: [
                                        v.jsx("path", {
                                          d: "M 15 45 A 16 16 0 0 1 47 45",
                                          fill: "none",
                                          stroke: j.logoTop || "#334155",
                                          strokeWidth: "12",
                                          strokeLinecap: "round",
                                        }),
                                        v.jsx("path", {
                                          d: "M 32 55 A 16 16 0 0 0 64 55",
                                          fill: "none",
                                          stroke: j.logo,
                                          strokeWidth: "12",
                                          strokeLinecap: "round",
                                        }),
                                      ],
                                    }),
                                  }),
                                  v.jsxs("div", {
                                    className: "flex flex-col -ml-6",
                                    children: [
                                      v.jsx("span", {
                                        className: G(
                                          "text-[32px] font-bold leading-[0.8] lowercase tracking-tight",
                                          j.contentTitle,
                                        ),
                                        children: "giro",
                                      }),
                                      v.jsx("span", {
                                        className: G(
                                          "text-[32px] font-bold leading-[0.8] lowercase tracking-tight ml-[12px]",
                                          j.contentText,
                                        ),
                                        children: "trade",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              v.jsx(Gr.div, {
                                initial: { opacity: 0, y: -10 },
                                animate: { opacity: 1, y: 0 },
                                transition: { delay: 0.2 },
                                className:
                                  "hidden sm:flex flex-col items-center justify-center flex-1 px-4 mt-1",
                                children: v.jsxs("div", {
                                  className: "relative",
                                  children: [
                                    v.jsxs("h1", {
                                      className: G(
                                        "text-xl md:text-2xl lg:text-3xl font-black tracking-[0.15em] uppercase leading-none text-center",
                                        j.contentTitle,
                                      ),
                                      children: [
                                        r === "ANALISE DE CORTE"
                                          ? "Análise de"
                                          : (r === "QUALIDADE" || r === "AVARIA")
                                            ? "Controle de"
                                            : "Inventário",
                                        " ",
                                        v.jsx("span", {
                                          className: j.contentText,
                                          children:
                                            r === "ANALISE DE CORTE"
                                              ? "Corte"
                                              : (r === "QUALIDADE" || r === "AVARIA")
                                                ? "Qualidade"
                                                : "Geral",
                                        }),
                                      ],
                                    }),
                                    v.jsxs("div", {
                                      className:
                                        "absolute -bottom-3 left-0 right-0 flex items-center justify-center gap-3",
                                      children: [
                                        v.jsx("div", {
                                          className: G(
                                            "hidden md:block h-[2px] w-8 lg:w-12 bg-gradient-to-r from-transparent",
                                            "to-white/10",
                                          ),
                                        }),
                                        v.jsx("span", {
                                          className: G(
                                            "text-[7px] md:text-[9px] font-black uppercase tracking-[0.4em] whitespace-nowrap opacity-60",
                                            j.contentText,
                                          ),
                                          children: "Performance & Girotrade",
                                        }),
                                        v.jsx("div", {
                                          className: G(
                                            "hidden md:block h-[2px] w-8 lg:w-12 bg-gradient-to-l from-transparent",
                                            "to-white/10",
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              v.jsx("div", {
                                className: "flex items-center gap-6",
                                children: v.jsx("div", {
                                  className: "flex items-center gap-3",
                                  children:
                                    k &&
                                    v.jsxs("button", {
                                      onClick: V,
                                      className:
                                        "flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg text-[10px] font-black text-rose-400 uppercase tracking-widest hover:bg-rose-500/20 transition-all font-sans",
                                      children: [
                                        v.jsx(lx, { className: "w-3 h-3" }),
                                        "Sair",
                                      ],
                                    }),
                                }),
                              }),
                            ],
                          }),
                          r === "INVENTARIO GERAL GIROTRADE"
                            ? v.jsx(a3e, {
                                data: e == null ? void 0 : e.inventarioGT,
                                theme: j,
                              })
                            : r === "ANALISE DE CORTE"
                              ? v.jsx(JDe, {
                                  data: e == null ? void 0 : e.cortes,
                                  wmsData: e == null ? void 0 : e.cortesWMS,
                                  theme: j,
                                })
                              : (r === "AVARIA" || r === "QUALIDADE")
                                ? v.jsx(e3e, {
                                    data: e == null ? void 0 : e.avaria,
                                    theme: j,
                                  })
                                : v.jsxs(Gr.div, {
                                    initial: { opacity: 0, scale: 0.95 },
                                    animate: { opacity: 1, scale: 1 },
                                    className: G(
                                      "min-h-[600px] flex flex-col items-center justify-center backdrop-blur-sm rounded-3xl border p-12 text-center transition-colors duration-500",
                                      j.contentBg,
                                      j.contentBorder,
                                      j.contentShadow,
                                    ),
                                    children: [
                                      v.jsx("div", {
                                        className: G(
                                          "w-24 h-24 rounded-3xl flex items-center justify-center mb-8 border",
                                          `bg-${j.primary}-500/10`,
                                          `border-${j.primary}-500/20`,
                                        ),
                                        children: v.jsx(Ld, {
                                          className: G(
                                            "w-12 h-12 animate-pulse",
                                            j.contentText,
                                          ),
                                        }),
                                      }),
                                      v.jsx("h2", {
                                        className: G(
                                          "text-3xl font-bold mb-4 uppercase tracking-wider",
                                          j.contentTitle,
                                        ),
                                        children: r,
                                      }),
                                      v.jsxs("p", {
                                        className: G(
                                          "max-w-md mx-auto leading-relaxed opacity-40",
                                          j.contentText,
                                        ),
                                        children: [
                                          "Este módulo está sendo preparado para integração com os dados da sua planilha. Em breve, você poderá visualizar a ",
                                          v.jsx("span", {
                                            className: G(
                                              "font-bold",
                                              j.contentText,
                                            ),
                                            children: r.toLowerCase(),
                                          }),
                                          " em tempo real.",
                                        ],
                                      }),
                                      v.jsx("button", {
                                        onClick: () => n("INVENTARIO CÍCLICO"),
                                        className: G(
                                          "mt-10 px-8 py-3 text-white rounded-xl font-bold transition-all shadow-lg text-xs uppercase tracking-widest",
                                          j.active,
                                          j.shadow,
                                        ),
                                        children:
                                          "Voltar para Inventário Cíclico",
                                      }),
                                    ],
                                  }),
                        ],
                      }),
            }),
          }),
        ],
      }),
    ],
  });
}

export default function App() {
  return (
    <T3e>
      <S3e />
    </T3e>
  );
}
