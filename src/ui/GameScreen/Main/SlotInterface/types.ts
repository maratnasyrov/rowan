export type BetInterfaceStates = 'bet.settings';

export type AutoplayInterfaceStates = 'autoplay.settings' | 'autoplay.running';

export type MenuInterfaceStates =
  | 'menu.info'
  | 'menu.history'
  | 'menu.settings';

export type InterfaceStates =
  | 'idle'
  | MenuInterfaceStates
  | AutoplayInterfaceStates
  | BetInterfaceStates;

export type SlotInterfaceButtons = {
  bet?: string;
  buyFeature?: string;
  menu?: string;
  spin?: string;
  turboSpin?: string;
  autoplay?: string;
  menuToggle?: string;
  close?: string;
  home?: string;
};

export type SlotInterfacePanels = {
  gameTime?: string;
  gameName?: string;
  balance?: string;
  currentBet?: string;
  win?: string;
};

export type SlotInterfaceTheme = {
  buttons: SlotInterfaceButtons;
  panels: SlotInterfacePanels;
};
