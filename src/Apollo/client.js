import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "http://localhost:3301/api",
  cache: new InMemoryCache(),
});
