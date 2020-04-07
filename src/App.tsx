import React from 'react';

import GameController from "./components/GameController";

import { connect } from 'react-redux';

function App(props: any) {
  const { dispatch } = props;
  return (
    <div className="App">
      <GameController /> 
    </div>
  );
}

const mapStateToProps = (state: any)  => ({
  log: state.log,
});

export default connect(mapStateToProps)(App);
