const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')
const typeDefs = importSchema('./schema/index.graphql')

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000).then(({ url }) => {
    console.log(`Executando em ${url}`)
})