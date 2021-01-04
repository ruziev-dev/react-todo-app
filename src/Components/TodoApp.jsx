import React from 'react';

import { InputComponent } from './InputComponent'
import { ItemsList } from './ItemsList'
import { Container } from '@material-ui/core'


export const TodoApp = ({ state, dispatch }) => {
    return (
        <Container fixed >
            <InputComponent dispatch={dispatch} />
            <ItemsList state={state} dispatch={dispatch} />
        </Container>
    );
}
