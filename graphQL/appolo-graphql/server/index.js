const Koa = require('koa');
const { ApolloServer, gql } = require('apollo-server-koa');
const { readFile, writeFile } = require('./utils');
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');


// 前端的gql查询   不再是 restful
const typeDefs = gql`
    type TodoItem {
        id: ID
        content: String
        checked: Boolean
    }
    type Query {
        TodoList: [TodoItem!]
    }
    type Mutation {
        createTodo(content: String!, checked: Boolean): [TodoItem!]!
        updateTodo(content: String!, checked: Boolean, id:ID): [TodoItem!]!,
        deleteTodo(id: ID): [TodoItem!]!
    }
`

const resolvers = {
    Query: {
        TodoList: async () => {
            const data = await readFile('./mock/index.json');
            const todoList = JSON.parse(data);
            return todoList;
        }
    },
    Mutation: {
        createTodo: async (_, { content, checked }) => {
            const data = await readFile('./mock/index.json');
            let todoList = JSON.parse(data);
            todoList = todoList.concat([{
                content,
                checked,
                id: Math.round(Math.random() * 10000)
            }]);
            const writeErr = await writeFile(
                './mock/index.json',
                JSON.stringify(todoList)
            );
            return !writeErr && todoList
        },
        updateTodo: async (_, { id, content, checked }) => {
            const data = await readFile('./mock/index.json');
            const todoList = JSON.parse(data);
            const currentIndex = todoList.findIndex(item => item.id + '' === id);
            todoList[currentIndex] = { id, content, checked };
            const writeErr = await writeFile(
                './mock/index.json',
                JSON.stringify(todoList)
            );
            return !writeErr && todoList
        },
        deleteTodo: async (_, { id }) => {
            const data = await readFile('./mock/index.json');
            let todoList = JSON.parse(data);
            todoList = todoList.filter(item => item.id + '' !== id);
            const writeErr = await writeFile(
                './mock/index.json',
                JSON.stringify(todoList)
            );
            return !writeErr && todoList
        }
    }
}

// -> model
// apollo graphql 的封装
const server = new ApolloServer({
    // schema
    typeDefs, // query
    resolvers
})
const app = new Koa();
server.applyMiddleware({ app });
app.use(cors());
app.use(koaStatic('build'));
app.use(bodyParser());

app.listen(3001);