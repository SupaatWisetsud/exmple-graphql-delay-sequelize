import models from '../../models';
import types from '../types';
import { mutationWithClientMutationId} from 'graphql-relay';

import { 
    GraphQLNonNull, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLFloat
} from 'graphql';

const createSparePartToProject = mutationWithClientMutationId({
    name: 'createSparePartToProject',
    inputFields: {
        project_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        spare_parts_id: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        onhand: {type: GraphQLInt},
        on_pr: {type: GraphQLInt},
        risk_of_stockout: {type: GraphQLFloat},
        demand: {type: GraphQLInt},
        Criticality: {type: GraphQLString},
        eq_a: {type: GraphQLInt},
        eq_b: {type: GraphQLInt},
        eq_c: {type: GraphQLInt},
        pc_cost: {type: GraphQLInt},
        pc_lt: {type: GraphQLInt},
        pc_cbm: {type: GraphQLInt},
        lt: {type: GraphQLString},          
        unit_cost: {type: GraphQLInt},
        ss: {type: GraphQLInt},
        max: {type: GraphQLInt},
        min: {type: GraphQLInt},
    },
    outputFields: {
        // spare_part_to_project: {
        //     type: types.SparePartToProjectType,
        //     resolve: payload => payload
        // }
    },
    mutateAndGetPayload: async (params, content) => {
        const result = await models.SparePartToProject.create({
            ...params
        });
        return result;
    }
});

export default createSparePartToProject;