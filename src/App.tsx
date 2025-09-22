import './App.css';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './apolloClient';
import { LocationProvider } from "./contexts/LocationProvider";
import { Switch } from "./Router/Switch";
import { Header } from "./components/header/header";

function App() {
    return (
        <ApolloProvider client={apolloClient}>
            <Router>
                <LocationProvider>
                    <Header />
                    <Switch />
                </LocationProvider>
            </Router>
        </ApolloProvider>
    );
}

export default App;
