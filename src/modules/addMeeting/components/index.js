import React from 'react';
import { Mutation } from 'react-apollo';

import { ADD_MEETING } from '../../../schema/queries';

const AddMeeting = () => (
	<Mutation
		mutation={ADD_MEETING}
		onCompleted={({ login }) => {
			console.log(login);
		}}
	>
		{(Meeting, { loading, error }) => {
			console.log('AddMeeting', Meeting, loading, error);
			if (loading) return <p>Things take time...</p>;
			if (error) return <p>oops, it went wrong...</p>;
			return (
				<div
					onClick={() => {
						Meeting({
							variables: {
								id: 1,
								title: 'sridhar',
								date: '20/01/2021',
								startTime: '15:00',
								endTime: '16:00',
								meetingRoomId: 1
							}
						});
					}}
				>
					AddMeeting
				</div>
			);
		}}
	</Mutation>
);

export default AddMeeting;
