import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { todoServerAPI } from './apiUtils'

import { TodoApp } from './Components/TodoApp'
import { LinearProgress, AppBar, Toolbar, Typography } from '@material-ui/core'

const App = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const [isAppInitialized, setIsAppInitialized] = useState(false)

  useEffect(() => {
    (async () => {
      let serverState = await todoServerAPI.getData()
      dispatch({ type: 'SET_SERVER_STATE', serverState })
      setIsAppInitialized(true)
    })()
  }, [])


  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5">
            React Todo App
          </Typography>
        </Toolbar>
      </AppBar>

      {
        isAppInitialized
          ? <TodoApp dispatch={dispatch} state={state} />
          : <LinearProgress />
      }
    </>
  );
}

export default App;
