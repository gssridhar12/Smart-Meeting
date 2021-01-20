import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from '../schema/index.js';

const app = express();

const uri = 'http://smart-meeting.herokuapp.com';

app.get('/', (req, res) => {
	res.send('Welcome to GraphQL Server');
});

app.use(
	'/graphql',
	graphqlHTTP(() => ({
		schema,
		graphiql: true,
		pretty: true
	}))
);

app.listen(4000);