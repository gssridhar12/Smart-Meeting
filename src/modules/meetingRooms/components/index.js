import React from 'react';
import { Query } from 'react-apollo';

import { MEETING_ROOMS } from '../../../schema/queries';
import './index.css';

const MeetingRooms = () => (
	<Query query={MEETING_ROOMS}>
		{({ loading, error, data }) => {
			console.log('MeetingRooms', loading, error, data);
			if (loading) return <p>Things take time...</p>;
			if (error) return <p>oops, it went wrong...</p>;

			return (
				<div className='row meetingrooms'>
					<div className='title'>Please Select one of the free rooms</div>
					{data.MeetingRooms.map(
						room => {
							console.log('room----', room);
							return (
								<div className='block' key={room.name}>
									<div className='name'>{room.name}</div>
									<div className='building'>{`${room.building.name}`}</div>
									<div className='floor'>{`floor: ${room.floor}`}</div>
									Meetings :
									{room.meetings.map(meeting => {
										return <div key={meeting.title}>{meeting.title}</div>;
									})}
								</div>
							);
						}
					)}
				</div>
			);
		}}
	</Query>
);

export default MeetingRooms;