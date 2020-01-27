import React, {Component}  from 'react';
import { Button } from 'semantic-ui-react';
import EventDashBoard from '../../features/event/EventDashBoard/EventDashBoard';
class  App extends Component {
  render(){
    return (
      <div>
        <h1>Re-vents</h1>
        <EventDashBoard/>
        

      </div>
    );

  }
  
}

export default App;
