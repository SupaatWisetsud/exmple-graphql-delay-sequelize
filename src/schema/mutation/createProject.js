import models from '../../models';
import types from '../types';
import { mutationWithClientMutationId} from 'graphql-relay';

import {
    GraphQLString,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql';

var createProject = mutationWithClientMutationId({
    name: 'createProject',
    inputFields: {
        project_no: {type: GraphQLInt},
        project_name:{type:GraphQLString},
    },
    outputFields: {
        project:{
            type:types.ProjectType,
            resolve:(payload)=>payload,
        }
    },
    mutateAndGetPayload: async (params,context) =>{
        const { project_no } = params;

        if(project_no !== null && project_no !== undefined){
            return await models.Project.update({ is_draft: false }, {
                where: {
                    id: project_no
                }
            });
        }else{
            return await models.Project.create({ 
                ...params
            }); 
        }
    }
});

export default createProject;