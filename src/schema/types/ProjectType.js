import models,{nodeInterface} from '../../models'
import {globalIdField} from 'graphql-relay';

import SparePartToProjectType from './SparePartToProjectType';
import { resolver } from 'graphql-sequelize';
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLString,
    GraphQLList
} from 'graphql';

const ProjectType = new GraphQLObjectType({
    name: "ProjectType",
    fields: {
        id: globalIdField(models.Project.tableName),
        project_no: {
            type: GraphQLInt,
            resolve: obj => obj.id
        },
        project_name: { type:GraphQLString },
        is_draft: { type: GraphQLBoolean },
        ref_spare_part: {
            type: new GraphQLList(SparePartToProjectType),
            resolve: resolver(models.Project.RefSparePart)
        }
    },
    interfaces: [nodeInterface]
});

export default ProjectType;