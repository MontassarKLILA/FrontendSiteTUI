// import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient ,InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
    uri: "https://localhost:63497/graphql/",
    cache: new InMemoryCache()
  });

export default client
