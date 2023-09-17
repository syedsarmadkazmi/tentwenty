import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ENV } from "~config"

// Initialize Apollo Client
export const apolloClient = new ApolloClient({
	uri: ENV.API_URL,
	cache: new InMemoryCache()
})