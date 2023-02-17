import { ApolloProvider } from "@apollo/client";
import { client } from "./Apollo/client";
import Todo from "./components/Todo";

import "./App.css";

const App = () => {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Todo />
      </div>
    </ApolloProvider>
  );
};

export default App;
