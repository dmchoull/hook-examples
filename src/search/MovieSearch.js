import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  FormControl,
  GridList,
  GridListTile,
  Input,
  InputLabel,
  Paper,
} from "@material-ui/core";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles";

function MovieSearch({ classes }) {
  const [title, setTitle] = useState("");
  const results = [];

  return (
    <>
      <Paper className={classes.paper}>
        <FormControl>
          <InputLabel htmlFor="title">Title</InputLabel>
          <Input id="title" onChange={e => setTitle(e.target.value)} />
        </FormControl>
      </Paper>

      <GridList cellHeight={200} cols={3}>
        {results.map(result => (
          <GridListTile key={result.imdbID}>
            <img src={result.Poster} alt={result.Title} />
          </GridListTile>
        ))}
      </GridList>
    </>
  );
}

MovieSearch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MovieSearch);
