import models, {nodeInterface} from '../../models';
import {attributeFields} from 'graphql-sequelize';
import SparePartsType from './SparePartsType'
import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString
} from 'graphql';

import { resolver } from 'graphql-sequelize'

const SparePartToProjectType = new GraphQLObjectType({
    name: "SparePartToProjectType",
    fields: Object.assign(attributeFields(models.SparePartToProject, {
        globalId: true,
    }), {
        spare_part_to_project_no: {
            type: GraphQLInt,
            resolve: obj => obj.id
        },
        ref_spare_part: {
            type: SparePartsType,
            resolve: resolver(models.SparePartToProject.RefSparePart)
        }
    }),
    interfaces: [nodeInterface]
});

export default SparePartToProjectType