import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'

export default class EventDashBoard extends Component {
    render() {
        return (
            <Grid>
                <Grid.Column width={10}>
                    <EventList/>
                </Grid.Column>
                <Grid.Column width={6}>
                    Right Column
                </Grid.Column>
            </Grid>
        )
    }
}
