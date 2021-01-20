import { GraphQLSchema } from 'graphql';

import mutation from './mutations.js';
import queries from './queries.js';

export default new GraphQLSchema({
	query: {
		name: 'Query',
		fields: queries
	},
	mutation: {
		name: 'Mutation',
		fields: mutation
	}
});