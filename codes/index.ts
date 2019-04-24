// import Apollo from '@/codes/classes/apollo'
import ApolloClient from 'apollo-client'
import Vue, { PluginFunction } from 'vue'
import v from '@/codes/vue'

console.log(v)

const VueApolloGraphQLPlugin = (
  (VueClass: typeof Vue, clients: ApolloClient<object>[]) => {
    VueClass.prototype.$apollo = {} // new Apollo(clients)
  }
) as PluginFunction<ApolloClient<object>[]>

export default VueApolloGraphQLPlugin
