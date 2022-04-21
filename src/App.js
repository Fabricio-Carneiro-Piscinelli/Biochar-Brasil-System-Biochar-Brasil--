import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TemporaryDrawer from './Components/drawer-menu';
import routes from './routes';

// Crie seu próprio tema:
const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#007C4B',
      dark: '#002884',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <TemporaryDrawer />
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={0} path={route.path} element={route.component} exact />
          ))}
        </Routes>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
