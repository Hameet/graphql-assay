import React, { Component } from 'react'

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  url: 'https://vm8mjvrnv3.lp.gql.zone/graphql'
})

const App = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My Apollo React Application</h2>
    </div>
  </ApolloProvider>
)

export default App
