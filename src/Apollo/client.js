import { ApolloClient, ApolloLink, InMemoryCache } from "@apollo/client";
import { HttpLink } from "apollo-link-rest";

const httpLink = new HttpLink({
  uri: "http://localhost:3301/api",
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: ApolloLink.from([httpLink]),
});
