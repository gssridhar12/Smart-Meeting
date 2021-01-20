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
					<div className='title'>Select one of the free rooms</div>
					{data.MeetingRooms.map(
						rooms => {
							console.log(rooms);
							return (
								<div className='block'>
									<div className='name'>{rooms.name}</div>
									<div className='building'>{`${rooms.building.name}`}</div>
									<div className='floor'>{`floor: ${rooms.floor}`}</div>
									Meetings :
									{rooms.meetings.map(meeting => {
										return <div>{meeting.title}</div>;
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