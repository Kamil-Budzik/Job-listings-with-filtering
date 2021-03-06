//templates
import MainTemplate from 'components/templates/MainTemplate';
//Providers
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
//styles
import { theme } from 'assets/styles/theme';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
//store
import store from 'redux/store';

const Root = () => {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <MainTemplate />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default Root;
