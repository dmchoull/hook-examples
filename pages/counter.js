import "../src/bootstrap";
import React from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import renderHead from "../src/renderHead";
import Counter from "../src/counter/Counter";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function CounterPage({ classes }) {
  return (
    <>
      {renderHead("Counter Example")}
      <CssBaseline />

      <main className={classes.layout}>
        <Counter />
      </main>
    </>
  );
}

CounterPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterPage);
