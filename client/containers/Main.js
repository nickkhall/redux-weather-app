import React from 'react';
import { connect } from 'react-redux';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>hello world</h1>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Main);
