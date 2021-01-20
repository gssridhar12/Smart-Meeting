import React from 'react';
import { ApolloProvider } from 'react-apollo';

import { client } from './client';
import './App.css';

import Listing from '../../listing/components';
import MeetingRooms from '../../meetingRooms/components';
import AddMeeting from '../../addMeeting/components';

export default function App() {
	return (
		<ApolloProvider client={client}>
			<div className='App'>
				<header className='App-header'>
					Smart Meeting Organizer
				</header>
				<Listing />
				<MeetingRooms />
				<AddMeeting />
			</div>
		</ApolloProvider>
	);
}
