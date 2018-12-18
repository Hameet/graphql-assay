import React, { Component } from 'react'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import Constants from './Constants'

const client = new ApolloClient({
  uri: 'https://vm8mjvrnv3.lp.gql.zone/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <Constants />
    </div>
  </ApolloProvider>
)

export default App
