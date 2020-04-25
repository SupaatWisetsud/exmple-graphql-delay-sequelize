import models from '../../models';
import types from '../types';
import { mutationWithClientMutationId} from 'graphql-relay';

import { GraphQLNonNull, GraphQLString } from 'graphql';

const createSparePart = mutationWithClientMutationId({
    name: 'createSparePart',
    inputFields: {
        spare_parts_name: {
            type: new GraphQLNonNull(GraphQLString)
        }
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