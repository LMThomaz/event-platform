import { ApolloProvider } from '@apollo/client';
import { Event } from './pages/Event';
import { client } from './lib/apollo';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

export function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}
