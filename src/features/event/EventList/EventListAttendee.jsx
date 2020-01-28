import React, { Component } from 'react'
import { List, Image } from 'semantic-ui-react'

class EventListAttendee extends Component {
    render() {
        return (
            <List.Item>
                <Image as="a" size="mini"circular src="https://randomuser.me/api/portraits/women/42.jpg" />
                <Image as="a" size="mini" circular src="https://avatars2.githubusercontent.com/u/37169080?s=400&v=4"></Image>
            </List.Item>
        )
    }
}
export default EventListAttendee
