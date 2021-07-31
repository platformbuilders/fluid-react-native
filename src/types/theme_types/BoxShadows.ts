export interface LevelShadow {
  x: number;
  y: number;
  spread: number;
  color: string; //rgba or hex
  blur: number;
}

export interface BoxShadows {
  lv1: LevelShadow;
  lv2: LevelShadow;
  lv3: LevelShadow;
  lv4: LevelShadow;
  lv5: LevelShadow;
}
