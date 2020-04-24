import models, {nodeInterface} from '../../models';
import {attributeFields} from 'graphql-sequelize';

import {
    GraphQLObjectType,
    GraphQLInt
} from 'graphql';


const SparePartsType = new GraphQLObjectType({
    name: "SparePartsType",
    fields: Object.assign(attributeFields(models.SpareParts, {
        globalId: true
    }), {
        spare_parts_no: {
            type: GraphQLInt,
            resolve: obj => obj.id
        }
    }),
    interfaces: [nodeInterface]
});

export default SparePartsType