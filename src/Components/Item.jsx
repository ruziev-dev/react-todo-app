import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {
  Grid, TextField, Accordion, AccordionSummary, AccordionDetails,
  Checkbox, FormControlLabel, IconButton } from '@material-ui/core/';


const useStyles = makeStyles({
  root: {
    width: '100%',
  }
});

export const Item = ({ id, isCompleted, title, description, dispatch }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary aria-label="Expand" aria-controls="additional-actions1-content"
            id="additional-actions1-header" expandIcon={<ExpandMoreIcon />}>
            <Grid container justify="space-between">
              <Grid>
                <FormControlLabel label={title} aria-label="Acknowledge"
                  onClick={(event) => event.stopPropagation()}
                  onFocus={(event) => event.stopPropagation()}
                  control={<Checkbox checked={isCompleted}
                    onChange={() => dispatch({ type: 'SET_IS_COMPLETED', id: id })} />}
                />
              </Grid>
              <Grid>
                  <IconButton onClick={() => dispatch({ type: 'DELETE_TASK', id: id })}
                    aria-label="delete">
                    <DeleteIcon fontSize="large" />
                  </IconButton>
              </Grid>
            </Grid>
          </AccordionSummary>
          <AccordionDetails>
            <TextField
              id="outlined-multiline-static"
              label="Подробное описание"
              multiline
              rows={4}
              defaultValue={description}
              fullWidth
              variant="outlined"
              onChange={(e) => { dispatch({ type: 'SET_DESCRIPTION', id: id, description: e.target.value }) }}
            />
          </AccordionDetails>
        </Accordion>

      </div>
    </Grid>
  );
}