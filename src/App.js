import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <></>
    </ApolloProvider>
  );
};

export default App;
