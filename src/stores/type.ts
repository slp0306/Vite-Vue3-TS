export interface ChinaTotal {
  localConfirmH5: number;
  localConfirmAdd: number;
  dead: number;
  noInfectH5: number;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
  nowConfirm: number;
  mRiskTime: string;
  heal: number;
  deadAdd: number;
  localWzzAdd: number;
  confirmAdd: number;
  nowLocalWzz: number;
  mtime: string;
  localConfirm: number;
  importedCase: number;
  showlocalinfeciton: number;
  nowSevere: number;
  noInfect: number;
  showLocalConfirm: number;
  local_acc_confirm: number;
  confirm: number;
  suspect: number;
}

export interface ChinaAdd {
  heal: number;
  nowSevere: number;
  importedCase: number;
  noInfect: number;
  localConfirm: number;
  localConfirmH5: number;
  confirm: number;
  dead: number;
  nowConfirm: number;
  suspect: number;
  noInfectH5: number;
}

export interface ShowAddSwitch {
  nowConfirm: boolean;
  nowSevere: boolean;
  importedCase: boolean;
  noInfect: boolean;
  localinfeciton: boolean;
  confirm: boolean;
  suspect: boolean;
  dead: boolean;
  all: boolean;
  heal: boolean;
  localConfirm: boolean;
}

export interface Today {
  confirm: number;
  isUpdated: boolean;
}

export interface Total {
  adcode: string;
  nowConfirm: number;
  dead: number;
  heal: number;
  showHeal: boolean;
  highRiskAreaNum: number;
  showRate: boolean;
  wzz: number;
  confirm: number;
  provinceLocalConfirm: number;
  mediumRiskAreaNum: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroLocalConfirm: number;
  mtime: string;
}

export interface Today {
  isUpdated: boolean;
  tip: string;
  wzz_add: number;
  local_confirm_add: number;
  abroad_confirm_add: number;
  dead_add: number;
  confirm: number;
  confirmCuts: number;
}

export interface Total {
  wzz: number;
  provinceLocalConfirm: number;
  mediumRiskAreaNum: number;
  confirm: number;
  dead: number;
  adcode: string;
  nowConfirm: number;
  continueDayZeroLocalConfirmAdd: number;
  continueDayZeroConfirm: number;
  mtime: string;
  showHeal: boolean;
  highRiskAreaNum: number;
  continueDayZeroConfirmAdd: number;
  showRate: boolean;
  heal: number;
}

export interface Total {
  continueDayZeroLocalConfirm: number;
  showRate: boolean;
  wzz: number;
  mediumRiskAreaNum: number;
  highRiskAreaNum: number;
  continueDayZeroLocalConfirmAdd: number;
  confirm: number;
  showHeal: boolean;
  provinceLocalConfirm: number;
  mtime: string;
  nowConfirm: number;
  dead: number;
  heal: number;
  adcode: string;
}

export interface Children {
  name: string;
  adcode: string;
  date: string;
  today: Today;
  total: Total;
}

export interface Children {
  date: string;
  today: Today;
  total: Total;
  children: Children[];
  name: string;
  adcode: string;
}

export interface AreaTree {
  name: string;
  today: Today;
  total: Total;
  children: Children[];
}

export interface Diseaseh5Shelf {
  lastUpdateTime: string;
  chinaTotal: ChinaTotal;
  chinaAdd: ChinaAdd;
  isShowAdd: boolean;
  showAddSwitch: ShowAddSwitch;
  areaTree: AreaTree[];
}

export interface StatisGradeCityDetail {
  nowConfirm: number;
  confirm: number;
  heal: number;
  grade: string;
  date: string;
  sdate: string;
  wzz_add: string;
  province: string;
  confirmAdd: number;
  dead: number;
  mtime: string;
  syear: number;
  city: string;
}

export interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf;
  statisGradeCityDetail: StatisGradeCityDetail[];
}
