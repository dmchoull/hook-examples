import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

function Counter({ classes }) {
  return (
    <Paper className={classes.paper}>
      <FormControl>
        <InputLabel htmlFor="counter">Count</InputLabel>
        <Input id="counter" defaultValue={0} type="number" />
      </FormControl>

      <div className={classes.buttons}>
        <Button variant="contained" color="primary">
          Increment
        </Button>

        <Button variant="contained" color="primary">
          Decrement
        </Button>
      </div>
    </Paper>
  );
}

Counter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Counter);
