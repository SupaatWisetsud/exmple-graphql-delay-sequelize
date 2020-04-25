import model from '../../models';
import types from '../types';
import { resolver } from 'graphql-sequelize';

import { GraphQLList } from 'graphql';

const { 
    SpareParts, 
    SparePartToProject 
} = model;
const { 
    SparePartsType,
    SparePartToProjectType 
} = types;

export default {
    spartpartlist: {
        type: new GraphQLList(SparePartsType),
        resolve: resolver(SpareParts)
    },
    
    sparepart_to_project: {
        type: new GraphQLList(SparePartToProjectType),
        resolve: resolver(SparePartToProject)
    }
}