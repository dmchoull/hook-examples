import React, { useCallback, useState } from "react";
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

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  const increment = useCallback(() => setCount(count + 1), [count]);
  const decrement = useCallback(() => setCount(count > 0 ? count - 1 : 0), [
    count,
  ]);

  return { count, increment, decrement };
}

function Counter({ classes }) {
  const { count, increment, decrement } = useCounter(0);

  return (
    <Paper className={classes.paper}>
      <FormControl>
        <InputLabel htmlFor="counter">Count</InputLabel>
        <Input id="counter" value={count} type="number" />
      </FormControl>

      <div className={classes.buttons}>
        <Button variant="contained" color="primary" onClick={increment}>
          Increment
        </Button>

        <Button variant="contained" color="primary" onClick={decrement}>
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
