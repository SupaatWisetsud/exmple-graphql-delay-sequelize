import models from '../../models';
import { mutationWithClientMutationId} from 'graphql-relay';

import { 
    GraphQLNonNull, 
    GraphQLString, 
    GraphQLInt, 
    GraphQLFloat
} from 'graphql';


const updateSparePartToProject = mutationWithClientMutationId({
    name: 'updateSparePartToProject',
    inputFields: {
        spare_part_to_project_no: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        unit_cost:{type:  GraphQLInt},
        oty_per_issue:{type:  GraphQLInt},
        leadtime:{type:  GraphQLInt},
        annual_usage:{type:  GraphQLInt},
        cost_of_stock_out:{type:  GraphQLInt},
        purchase_cost:{type:  GraphQLInt},
        purchase_period:{type:  GraphQLInt},
        shelf_life:{type:  GraphQLInt},
        evaluation_period:{type:  GraphQLInt},
        confidence_level:{type:  GraphQLInt},
        service_factor:{type:  GraphQLInt},
        stock_overhead:{type:  GraphQLInt},
        max:{type:  GraphQLInt},
        min:{type:  GraphQLInt},
        safety_stock:{type:  GraphQLInt},
        eoq:{type:  GraphQLString},
        stock_cost:{type:  GraphQLInt},
        risk_of_not_having_stock:{type:  GraphQLFloat},
        risk_of_not_having_stock_during_lead_time:{type:  GraphQLFloat},
        incremental_increase:{type:  GraphQLFloat},
        cost_vs_risk_ratio:{type:  GraphQLFloat},
    },
    outputFields: {
        // spare_part_to_project: {
        //     type: types.SparePartToProjectType,
        //     resolve: payload => payload
        // }
    },
    mutateAndGetPayload: async (params, content) => {
        const result = await models.SparePartToProject.update({
            ...params
        }, {
            where: {
                id: params.spare_part_to_project_no
            }
        });
        return result;
    }
});

export default updateSparePartToProject;