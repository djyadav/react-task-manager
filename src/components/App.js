import React from 'react';
import Lists from './Lists';
const App = React.createClass({
  getInitialState(){
    return {
      editing: -1
    }
  },
  render(){
    return(
      <Lists />
    )
  }
 });
export default App;
