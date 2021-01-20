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
				<div className='row'>
					{data.Buildings.map(
						book => {
							console.log(book);
							return (
								<div>
									{book.name}
									{book.meetingRooms.map(meetingRoom => {
										return (
											<div>
												{meetingRoom.name}
												{meetingRoom.meetings.map(meeting => {
													return <div>{meeting.title}</div>;
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