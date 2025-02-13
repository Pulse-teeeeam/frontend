import { gql } from '@apollo/client';

const AUTH_LOGIN = gql`
  mutation AuthLogin($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

const AUTH_REGISTER = gql`
  mutation AuthRegister($email: String!, $password: String!) {
    registerUser(email: $email, password: $password) {
      token
      user {
        id
        username
        email
      }
    }
  }
`;

export { AUTH_LOGIN, AUTH_REGISTER };
