import { ApolloProvider } from "@apollo/client";
import { client } from "./Apollo/client";
import Todo from "./components/Todo";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Todo />
    </ApolloProvider>
  );
};

export default App;
