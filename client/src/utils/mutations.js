import { gql } from '@apollo/client'

export const CREATE_USER = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            password
            }
        }
    }

`

export const LOGIN_USER = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            username
            email
            password
        }
        }   
    }
`;