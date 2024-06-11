import {gql} from 'graphql-tag'

export const typeDefs = gql`
    type Query {
        hello: String,
        projects:[Project],
        project (_id: ID!): Project,
        task(_id: ID!): Task,
        tasks: [Task]
    },

    type Mutation {
        createProject(name: String, description: String): Project
        deleteProject(_id:ID!): Project
        updateProject(_id: ID!, title: String!, projectI:ID!): Project

        createTask(title: String, projectId: ID): Task
        deleteTask(_id:ID!): Task
        updateTask(_id: ID!, title: String, projectId: ID): Task
    }

    type Project {
        _id: ID
        name: String
        description: String
        tasks: [Task]
        createdAt: String
        updatedAt: String
    },

    type Task {
        _id: ID
        title: String
        project: Project
        createdAt: String
        updatedAt: String
    }
`;