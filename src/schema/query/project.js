import models from '../../models';
import types from '../types';
import { resolver } from 'graphql-sequelize';

import {
    GraphQLList,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLInt,
} from 'graphql';

const {
    Project,
} = models;
const {
    ProjectType,
} = types;


export default {
    projectlist:{
        type: new GraphQLList(ProjectType),
        args:{
            is_draft:{type:GraphQLBoolean}
        },
        resolve: resolver(Project)
    },
    projectdetail: {
        type: ProjectType,
        args: {
            id: {type: new GraphQLNonNull(GraphQLInt)}
        },
        resolve: resolver(Project)
    }
};