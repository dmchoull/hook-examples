import React from "react";
import PropTypes from "prop-types";
import { CssBaseline } from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import renderHead from "../src/renderHead";
import MovieSearch from "../src/search/MovieSearch";

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

function EffectsPage({ classes }) {
  return (
    <>
      {renderHead("Effects Example")}
      <CssBaseline />

      <div className={classes.layout}>
        <MovieSearch />
      </div>
    </>
  );
}

EffectsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EffectsPage);
