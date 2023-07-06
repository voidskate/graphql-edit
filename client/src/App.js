import "./App.css";
import "antd/dist/reset.css";

import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"

import CharasList from "./components/lists/CharasList";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <CharasList/>
    </div>
  </ApolloProvider>
)

export default App;