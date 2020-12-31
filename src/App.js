import React from 'react';
import { InputComponent } from './Components/InputComponent'
import { ItemsList } from './Components/ItemsList'

import { Container } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { reducer, initialState } from './store';


const App = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            React Todo App
          </Typography>
        </Toolbar>
      </AppBar>

      <Container fixed >
        <InputComponent dispatch={dispatch} />
        <ItemsList state={state} dispatch={dispatch} />
      </Container>
    </>
  );
}

export default App;
