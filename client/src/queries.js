import { gql } from "@apollo/client";

export const GET_CHARAS = gql`
    query {
        allCharas {
            id
            firstName
            lastName
        }
    }
`

export const EDIT_CHARA = gql`
    mutation editChara($id: String!, $firstName: String!, $lastName: String!){
        editChara(id: $id, firstName: $firstName, lastName: $lastName){
            id
            firstName
            lastName
        }
    }
`