import './App.css';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import {
    ApolloClient, ApolloProvider, InMemoryCache,
} from '@apollo/client';
import {Switch} from "./Router/Switch";
import {Header} from "./components/header/header";

function App() {
    const localGql = 'http://localhost:4000'
    const client = new ApolloClient({
        uri: localGql,
        cache: new InMemoryCache(),
    });
    // const apiGql = 'https://api.uat.proof360.io/graphql'
    // TODO: Connect GQL once we've checked it works with server
    // const client = useMemo(() => new ApolloClient({
    //     link: ApolloLink.from([
    //         onError(({
    //                      operation,
    //                      response,
    //                      networkError,
    //                      graphQLErrors,
    //                  }) => {
    //             apm.captureError(
    //                 `Operation: ${JSON.stringify(operation)}
    //       | Response: ${JSON.stringify(response)}
    //       | NetworkError: ${JSON.stringify(networkError)}
    //       | GraphQLErrors: ${JSON.stringify(graphQLErrors)}`,
    //             );
    //
    //             if (graphQLErrors) {
    //                 graphQLErrors.forEach((err) => {
    //                     if (err?.extensions?.code === 'AZURE_AUTH_ERROR') {
    //                         if (window.location.pathname !== '/unauthorized-401') {
    //                             window.location.pathname = '/unauthorized-401';
    //                         }
    //                     } else if (err?.extensions?.code === 'PROOF_AUTH_ERROR') {
    //                         if (window.location.pathname !== '/forbidden-403') {
    //                             window.location.pathname = '/forbidden-403';
    //                         }
    //                     }
    //                 });
    //             }
    //         }),
    //         link,
    //     ]),
    //     cache: new InMemoryCache(),
    // }), [apm, link]);



    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="App">
                    <Header/>
                    <Switch/>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
