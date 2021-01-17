import React from 'react';
import ReactDOM from 'react-dom';

import {GlobalStyles, theme} from "./styles"
import {ThemeProvider} from 'styled-components'

import {Content, Title, Card, Grid} from './components'

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyles/>
      <Content>
        <Title>Sudoku</Title>
        <Card>
          <Grid></Grid>
        
        </Card>
      </Content>
    
    </ThemeProvider>
    
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
