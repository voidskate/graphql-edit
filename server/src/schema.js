// editing requires: yarn add lodash.find
import find from "lodash.find"

const charasArray = [
    {
        id: "1",
        firstName: "Apple",
        lastName: "Cider"
    },

    {
        id: "2",
        firstName: "Banana",
        lastName: "Smoothie"
    },

    {
        id: "3",
        firstName: "Cranberry",
        lastName: "Juice"
    }
]

/*-- 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 --*/

const typeDefs = `
    type Chara {
        id: String!
        firstName: String
        lastName: String
    }

    type Query {
        allCharas: [Chara]
    }

    type Mutation {
        editChara(id: String!, firstName: String!, lastName: String!): Chara
    }
`

/*-- 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 🪿 --*/

const resolvers = {
    Query: {
        allCharas: () => charasArray
    },

    Mutation: {
        editChara: (root, args) => {
            const getChara = find(charasArray, { id: args.id });
            if(getChara){
                getChara.firstName = args.firstName;
                getChara.lastName = args.lastName;
            } else {
                throw new Error(`Character id: ${args.id} not found.`)
            }

            return getChara
        }
    }
}

export { typeDefs, resolvers }