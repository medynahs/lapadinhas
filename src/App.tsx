import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import type {} from '@mui/x-data-grid/themeAugmentation';
import { Content, SidebarMenu } from 'components';
import { RouteSwitch } from 'components/RouteSwitch';
import { BrowserRouter } from 'react-router-dom';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    back: true;
  }
  interface ButtonPropsColorOverrides {
    white: true;
    tertiary: true;
    blue: true;
  }
}

declare module '@mui/material/AppBar' {
  interface AppBarPropsColorOverrides {
    black: true;
  }
}

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    dark: Palette['primary'];
    white: Palette['primary'];
    black: Palette['primary'];
    blue: Palette['primary'];
    blueBlack: Palette['primary'];
    fuschia: Palette['primary'];
    green: Palette['primary'];
    red: Palette['primary'];
    orange: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary: PaletteOptions['primary'];
    dark: PaletteOptions['primary'];
    white: PaletteOptions['primary'];
    black: PaletteOptions['primary'];
    blue: PaletteOptions['primary'];
    blueBlack: PaletteOptions['primary'];
    fuschia: PaletteOptions['primary'];
    green: PaletteOptions['primary'];
    red: PaletteOptions['primary'];
    orange: PaletteOptions['primary'];
  }
}

declare module '@mui/material/Chip' {
  export interface ChipPropsColorOverrides {
    dark: true;
  }

  export interface ChipPropsVariantOverrides {
    dark: true;
  }
}

declare module '@mui/x-data-grid' {
  interface FooterPropsOverrides {
    total: number;
    max: number;
  }
}

const colorTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 850,
      md: 1200,
      lg: 1550,
      xl: 2500,
    },
  },
  typography: {
    allVariants: {
      fontFamily: ['Inter', 'Verdana', 'sans-serif'].join(','),
      fontFeatureSettings: "'liga' 1, 'calt' 1" /* fix for Chrome */,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#A32DC1',
    },
    secondary: {
      main: '#5b19c4',
    },
    tertiary: {
      main: '#E5E5E9',
      contrastText: '#000000',
    },
    blue: {
      main: '#076CDF',
      contrastText: '#ffffff',
    },
    blueBlack: {
      main: '#05051E',
    },
    fuschia: {
      main: '#A32DC1',
    },
    green: {
      main: '#3ed483',
    },
    orange: {
      main: '#ff9b3f',
    },
    red: {
      main: '#dc2f23',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    white: {
      main: '#e5e5e9',
    },
    black: {
      main: '#000000',
    },
    dark: {
      main: '#f90',
      dark: '#f00',
      light: '#eee',
      contrastText: '#1d1d34',
    },
    text: {
      primary: '#292929',
    },
    action: {
      disabled: '#808080',
    },
  },
});

const defaultTheme = createTheme(colorTheme, {
  typography: {
    h1: {
      fontSize: '2rem', // 32
      lineHeight: '2.625rem',
    },
    h2: {
      fontSize: '1.75rem', // 28
      lineHeight: '2.25rem',
    },
    h3: {
      fontSize: '1.5rem', // 24
      lineHeight: '2rem',
    },
    h4: {
      fontSize: '1.375rem', // 22
      lineHeight: '1.75rem',
    },
    h5: {
      fontSize: '1.25rem', // 20
      lineHeight: '1.75rem',
    },
    h6: {
      fontSize: '1.25rem', // 20
      lineHeight: '1.75rem',
      fontWeight: 600,
    },
    body1: {
      fontSize: '0.9rem',
      lineHeight: '1.55rem',
    },
    body2: {
      fontSize: '0.9rem',
      lineHeight: '1.375rem',
    },
    caption: { fontSize: '0.625rem' },
    label: {
      fontSize: '0.75rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        * {
          font-family:"Inter", sans-serif;
          font-feature-settings: 'liga' 1, 'calt' 1; /* fix for Chrome */
        }
        body {
          position: absolute;
          width: 100%;
          height: 100%;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-color: ${colorTheme.palette.blueBlack.main};
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          borderRadius: 4,
        },
      },
      variants: [
        {
          props: { variant: 'back' },
          style: {
            border: '0',
            borderColor: colorTheme.palette.background.default,
            borderRadius: 20,
            fontSize: '1rem',
          },
        },
      ],
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 4px;',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 10,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          '& .MuiButtonBase-root': {
            paddingRight: colorTheme.spacing(6),
            textAlign: 'left !important',
          },
        },
      },
    },
  },
});

const App = () => {
  const theme = defaultTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <RouteSwitch />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
