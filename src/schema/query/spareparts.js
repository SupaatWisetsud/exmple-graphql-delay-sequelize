import model from '../../models';
import types from '../types';
import { resolver } from 'graphql-sequelize';

import { GraphQLList } from 'graphql';

const { SpareParts } = model;
const { SparePartsType } = types;

export default {
    spartpartlist: {
        type: new GraphQLList(SparePartsType),
        resolve: resolver(SpareParts)
    }
}