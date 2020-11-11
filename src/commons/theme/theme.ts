import { DARK_COLORS } from './dark.theme';
import { LIGHT_COLORS } from './light.theme';

export const FONTS = {
  sansSerif: "'Roboto', sans-serif",
};

const theme = ({ isDark = false }) => ({
  colors: {
    ...LIGHT_COLORS,
    ...(isDark && DARK_COLORS),
  },
  fonts: FONTS,
});

export default theme;
