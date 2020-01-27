import React, {Component, Fragment}  from 'react';
import EventDashBoard from '../../features/event/EventDashBoard/EventDashBoard';
import NavBar from '../../features/nav/NavBar/NavBar';
import { Container } from 'semantic-ui-react';
class  App extends Component {
  render(){
    return (
      <Fragment>
        <NavBar/>
        <Container className="main">
          <EventDashBoard/>
        </Container>
        


      </Fragment>
    );

  }
  
}

export default App;
