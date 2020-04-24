import models from '../../models';
import types from '../types';
import { resolver } from 'graphql-sequelize';

import {
    GraphQLList,
    GraphQLBoolean,
} from 'graphql';

const {
    Project,
    SparePartToProject
} = models;
const {
    ProjectType,
    SparePartToProjectType
} = types;


export default {
    projectlist:{
        type: new GraphQLList(ProjectType),
        args:{
            is_draft:{type:GraphQLBoolean}
        },
        resolve: resolver(Project)
    },
    sparepart_to_project: {
        type: new GraphQLList(SparePartToProjectType),
        resolve: resolver(SparePartToProject)
    }
};