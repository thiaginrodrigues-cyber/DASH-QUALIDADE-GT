/* @ts-nocheck */
import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ResponsiveContainer,
  LineChart,
  BarChart,
  PieChart,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  Bar,
  Pie,
  Area,
  Cell,
  ComposedChart,
  LabelList,
  Label
} from 'recharts';
import {
  LayoutDashboard,
  Package,
  Scissors,
  AlertTriangle,
  RefreshCw,
  LogOut,
  Clock,
  TrendingUp,
  FileSpreadsheet,
  Trash2,
  Edit,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  User,
  Settings,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Info,
  Calendar,
  AlertCircle,
  CheckCircle2,
  Database,
  Flame,
  Percent,
  LogIn,
  Map,
  ArrowUpDown,
  Award,
  ChevronLeft
} from 'lucide-react';
import { cn } from '../lib/utils';
import * as XLSX from 'xlsx';

// React
export const A = React;
export const NA = React;

// JSX / JSXS Runtime compatibility
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
export const v = { jsx, jsxs, Fragment };

// Styling helper
export const G = cn;

// Motion / Animation
export const Gr = motion;
export const UO = AnimatePresence;

// XLSX Utils
export const Ko = XLSX.utils;
export const N2 = XLSX.read;

// Recharts components mapping
export const Xu = ResponsiveContainer;
export const D_e = LineChart;
export const n1 = BarChart;
export const h$ = PieChart;
export const Z_e = AreaChart;
export const Ju = CartesianGrid;
export const tf = XAxis;
export const rf = YAxis;
export const _c = Tooltip;
export const nS = Legend;
export const xp = Line;
export const wh = Bar;
export const tO = Pie;
export const zz = Area;
export const Ff = Cell;
export const J_e = ComposedChart;
export const kc = LabelList;
export const hc = Label;

// Lucide React Icons mapping
export const yp = LayoutDashboard;
export const Ox = Package;
export const RS = Scissors;
export const DS = AlertTriangle;
export const cx = RefreshCw;
export const lx = LogOut;
export const Ld = Clock;
export const ih = TrendingUp;
export const nf = FileSpreadsheet;
export const GEe = X;
export const IS = CheckCircle2;
export const MEe = Percent;
export const NEe = LogIn;
export const REe = Map;
export const SEe = Flame;
export const UEe = TrendingUp; // Or TrendingDown if UEe was trending-down
export const _Ee = Eye;
export const _f = AlertCircle;
export const a1 = ChevronRight;
export const dEe = Check;
export const fO = Filter;
export const g$ = DollarSign;
export const gm = Search;
export const iEe = ArrowUpDown;
export const m$ = ChevronLeft;
export const oEe = Award;
export const pEe = ChevronDown;
export const v$ = Info;
export const v6 = BarChart3;
export const x$ = Package;
export const Nx = Calendar;

// Extra standard icons that are used in subcomponents
import { Eye, Check, DollarSign, BarChart3 } from 'lucide-react';
