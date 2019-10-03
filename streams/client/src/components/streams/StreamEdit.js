import React from "react";
import { connect } from 'react-redux'

const StreamEdit = props => {
  return <div>StreamEdit</div>;
};

// any time we call mapStateToProps we have state available, as well as props available from the component we are in
mapStateToProps = (state, ownProps) => {
  return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps)(StreamEdit);
