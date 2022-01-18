import {BrowserRouter} from 'react-router-dom';
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client';

import Routes from 'routes';

import 'styles/_base.scss';

import registerServiceWorker from './serviceWorker';

registerServiceWorker();

const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: process.env.REACT_APP_API_BASE_URL,
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
