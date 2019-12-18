import React from 'react';
import { connect } from 'react-redux';

const Notification = ({ message }) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };

  return message ? (
    <div id="notification" style={style}>
      {message}
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return {
    message: state.notifications,
  };
};

const mapDispatchToProps = null;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
