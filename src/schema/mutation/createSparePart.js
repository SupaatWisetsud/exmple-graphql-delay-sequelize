import models from '../../models';
import types from '../types';
import { mutationWithClientMutationId} from 'graphql-relay';

import { GraphQLNonNull, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';

const createSparePart = mutationWithClientMutationId({
    name: 'createSparePart',
    inputFields: {
        spare_parts_name: {type: new GraphQLNonNull(GraphQLString)},
        onhand:{type: GraphQLInt},
        on_pr:{type: GraphQLInt},
        risk_of_stockout:{type: GraphQLFloat},
        demand:{type: GraphQLInt},
        criticality:{type: GraphQLString,},
        eq_a:{type: GraphQLInt},
        eq_b:{type: GraphQLInt,},
        eq_c:{type: GraphQLInt,},
        pc_cost:{type: GraphQLInt,},
        pc_lt:{type: GraphQLInt,},
        pc_cbm:{type: GraphQLInt,},
        lt:{type: GraphQLInt,},
        unit_cost:{type: GraphQLInt,},
        ss:{type: GraphQLInt,},
        max:{type: GraphQLInt,},
        min:{type: GraphQLInt,},
    },
    outputFields: {
        // spare_part: {
        //     type: types.SparePartsType,
        //     resolve: payload => payload
        // }
    },
    mutateAndGetPayload: async (params, content) => {
        const result = await models.SpareParts.create({
            ...params
        });
        return result;
    }
});

export default createSparePart;