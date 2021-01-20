import React from 'react';
import { Query } from 'react-apollo';
import { LISTING } from '../../../schema/queries';

const Listing = () => (
	<Query query={LISTING}>
		{({ loading, error, data }) => {
			console.log(loading, error, data);
			if (loading) return <p>Things take time...</p>;
			if (error) return <p>oops, it went wrong...</p>;

			return (
				<div name="buildings">
					{data.Buildings.map(
						building => {
							console.log(building);
							return (
								<div key={building.name}>
									{building.name}
									{building.meetingRooms.map(meetingRoom => {
										return (
											<div key={meetingRoom.name}>
												{meetingRoom.name}
												{meetingRoom.meetings.map(meeting => {
													return <div key={meeting.title}>{meeting.title}</div>;
												})}
											</div>
										);
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

export default Listing;