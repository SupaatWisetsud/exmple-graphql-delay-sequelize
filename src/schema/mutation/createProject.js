import models from '../../models';
import types from '../types';
import { mutationWithClientMutationId} from 'graphql-relay';

import {
    GraphQLString,
    GraphQLNonNull,
} from 'graphql';

var createProject = mutationWithClientMutationId({
    name: 'createProject',
    inputFields: {
        project_name:{type:new GraphQLNonNull(GraphQLString)},
    },
    outputFields: {
        project:{
            type:types.ProjectType,
            resolve:(payload)=>payload,
        }
    },
    mutateAndGetPayload: async (params,context) =>{
        const result = await models.Project.create({ 
            ...params
        });

        return result 
    }
});

export default createProject;