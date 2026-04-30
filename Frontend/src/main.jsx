import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async'
import { store } from './store'
import App from './App'
import './index.css'

// Custom MUI Theme matching AdPrecision design
const theme = createTheme({
  palette: {
    primary: {
      main: '#1C3A3A',
    },
    secondary: {
      main: '#5C3300',
    },
    background: {
      default: '#F9FAFB',
    },
  },
  typography: {
    fontFamily: '"Outfit", "Inter", sans-serif',
  },
  shape: {
    borderRadius: 16,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </HelmetProvider>
    </Provider>
  </React.StrictMode>
)
