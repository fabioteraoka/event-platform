import {ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o1po5y052n01xm2e7j9e17/master',
    cache: new InMemoryCache()
  });


