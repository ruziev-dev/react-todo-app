import React from 'react'

import { Grid, TextField } from '@material-ui/core/';


export const InputComponent = (props) => {
    const [value, setValue] = React.useState('')
    const [isValidateError, SetIsValidateError] = React.useState(false)
    const [helperText, SetErrorHelperText] = React.useState(null)

    const submitTask = () => {
        if (value === ''){
            SetIsValidateError(true)
            SetErrorHelperText('Поле не может быть пустым')
        } else {
            SetIsValidateError(false)
            SetErrorHelperText(null)
            props.dispatch({ type: 'ADD_TASK', 
                             title: value,
                             id: Math.floor(Date.now() / 1000) })
            setValue('')
        }
        
    }

    return (
        <Grid item xs={12}>
                <TextField onChange={(e)=>{setValue(e.target.value)}}
                    id="outlined-full-width"
                    value={value}
                    label="Введите новую задачу и нажмите Enter"
                    placeholder="Название задачи"
                    helperText={helperText}
                    fullWidth
                    margin="normal"
                    autoFocus
                    onKeyPress={(event)=>{
                        if(event.key === 'Enter'){
                            submitTask()
                        }
                    }}
                    error={isValidateError}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
            </Grid>
    )
}