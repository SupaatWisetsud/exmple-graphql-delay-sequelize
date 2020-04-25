import {GraphQLObjectType} from 'graphql';

import createProject from './createProject';
import createSpareParts from './createSparePart';
import createSparePartToProject from './createSparePartToProject';
import updateSparePartToProject from './updateSparePartToProject';

let mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => ({
        createProject: createProject,
        createSpareParts: createSpareParts,
        createSparePartToProject: createSparePartToProject,
        updateSparePartToProject: updateSparePartToProject
    })
});

export default mutationType;