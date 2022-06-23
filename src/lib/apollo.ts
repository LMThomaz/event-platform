import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4q6w75s37ql01xl2qllazbv/master',
  cache: new InMemoryCache(),
});
