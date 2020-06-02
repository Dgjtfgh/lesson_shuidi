export default {
  Query: {
    hellos(_root: any, {}, { connector }) {
      console.log(connector)
      return connector.hello.hellos();
    },
  },
};
