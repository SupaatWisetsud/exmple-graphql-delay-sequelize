import {GraphQLObjectType} from 'graphql';

import createProject from './createProject';
import createSpareParts from './createSparePart';
import createSparePartToProject from './createSparePartToProject';

let mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createProject: createProject,
        createSpareParts: createSpareParts,
        createSparePartToProject: createSparePartToProject
    })
});

export default mutationType;