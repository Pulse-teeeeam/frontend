"use client"

import { ApolloClient, createHttpLink, InMemoryCache, ApolloProvider as ApolloProviderComponent } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { ReactNode } from "react";

export default function CustomApolloProvider({ children }: { children: ReactNode }) {
    const httpLink = createHttpLink({
      uri: 'http://localhost:8000/graphql/',
    });
    
    const authLink = setContext((_, { headers }) => {
      const token = localStorage.getItem('token');
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
        }
      }
    });
    
    const client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache()
    });

    return <ApolloProviderComponent client={client}>{children}</ApolloProviderComponent>
} 