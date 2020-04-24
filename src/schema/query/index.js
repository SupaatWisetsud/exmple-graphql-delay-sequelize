import {nodeField} from '../../models';
import {GraphQLObjectType} from 'graphql';

import project from './project';
import spareparts from './spareparts';

export default new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      ...project,
      ...spareparts,
      node: nodeField
    }
})