import { DARK_COLORS } from 'commons/theme/dark.theme';
import { FONTS } from 'commons/theme/theme';

export type Colors = keyof typeof DARK_COLORS;

export interface Theme {
  theme: {
    colors: typeof DARK_COLORS;
    fonts: typeof FONTS;
  };
}
