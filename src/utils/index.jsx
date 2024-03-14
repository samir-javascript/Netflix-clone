/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { useMemo, useState, createContext, useEffect } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';

export const ColorModeContext = createContext();

const ToggleColorMode = ({ children }) => {
  // Read the mode from localStorage or default to 'light'
  const storedMode = localStorage.getItem('mycolorMode');
  const initialMode = storedMode || 'light';

  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    // Save the mode to localStorage whenever it changes
    localStorage.setItem('mycolorMode', mode);
  }, [mode]);

  const toggleMode = () => setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={{ mode, setMode, toggleMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ToggleColorMode;