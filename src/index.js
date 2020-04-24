"use strict";
const express = require('express');
const cors = require('cors');
import { createContext, EXPECTED_OPTIONS_KEY } from 'dataloader-sequelize';
import { ApolloServer,AuthenticationError} from 'apollo-server-express';

import schema  from './schema';
import models from './models';

const app = express();
app.use(cors());

const apollo  = new ApolloServer({
  schema:schema,
  tracing:false,
  context: ({req, res}) => {
    const token = req.headers['authorization'] || '';
    // if(!req.headers['authorization']) throw new AuthenticationError('you must be logged in');

    return{
      token: token,
      [EXPECTED_OPTIONS_KEY]:  createContext(models.sequelize),
    }
  },
  introspection: true,
  playground: true,
});

apollo.applyMiddleware({ app,path:'/graphql'});

app.listen(process.env.APP_PORT, () => {
  console.log('Go to http://localhost:'+process.env.APP_PORT+'/graphql to run queries!');
});