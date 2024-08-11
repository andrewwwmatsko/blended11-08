import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";

import { useGetCommentsQuery } from "../../redux/commentApi";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filterSlice";

export const Comments = () => {
  const filter = useSelector(selectFilter);
  console.log("Comments ~ filter:", filter);

  const { data: comments } = useGetCommentsQuery();

  const filteredComments = comments?.filter((comment) =>
    comment.content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Grid>
      {comments &&
        filteredComments.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
    </Grid>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
