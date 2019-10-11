import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { HttpLink } from 'apollo-link-http'
import { SchemaLink } from 'apollo-link-schema'
import gql from 'graphql-tag'
import { makeExecutableSchema } from 'graphql-tools'
import Vue from 'vue'
import VueApollo from 'vue-apollo'

Vue.use(VueApollo)

const typeDefs = `
  type Query {
    test: String
  }
`
const resolvers = {
  Query: {
    test: () => 'Yes!'
  }
}
const schema = makeExecutableSchema({ typeDefs, resolvers })

const localTypeDef = `
  type Query {
    isWorking: String
  }
`
const localResolvers = {
  Query: {
    isWorking: () => 'Yes!'
  }
}

// const link = new HttpLink({ uri: 'http://localhost:4040' })
const link = new SchemaLink({ schema })
const cache = new InMemoryCache()
const client = new ApolloClient({
  // link,
  cache,
  typeDefs: localTypeDef,
  resolvers: localResolvers
})
const apollo = new VueApollo({
  defaultClient: client,
})

// cache.writeData({ data: { bla: 'No!' } })
// client.writeData({ data: { Query: { isWorking: 'No!' } } })
// client.writeQuery({
//   query: gql`
//     query {
//       isWorking
//     }
//   `,
//   data: {
//     isWorking: 'Yes!'
//   }
// })

export default apollo
