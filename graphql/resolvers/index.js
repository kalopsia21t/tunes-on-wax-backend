const Record = require("../../mongodb");

const resolvers = {
  Query: {
    getRecord: async (id) => {
      const record = await Record.findById(id);

      return record;
    },
    getRecords: async () => {
      const records = await Record.find({});

      return records;
    },
  },
  Mutation: {
    createRecord: async (_, { recordInput }) => {
      const record = new Record(recordInput);

      const res = await record.save();

      console.log(res);

      return {
        id: res._id,
        ...res._doc,
      };
    },
  },
};

module.exports = resolvers;
