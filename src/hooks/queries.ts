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

const CREATE_PERSON = gql`
  mutation CreatePerson(
    $lastName: String!,
    $firstName: String!,
    $middleName: String,
    $dateOfBirth: Date!,
    $placeOfBirth: String!,
    $militaryCommissariat: String!,
    $militaryRank: String!,
    $conflictsParticipated: [ArmedConflictType],
    $awards: String!,
    $dateOfDeath: Date!,
    $burialPlace: String!,
    $biographyFacts: String
  ) {
    createPerson(
      lastName: $lastName,
      firstName: $firstName,
      middleName: $middleName,
      dateOfBirth: $dateOfBirth,
      placeOfBirth: $placeOfBirth,
      militaryCommissariat: $militaryCommissariat,
      militaryRank: $militaryRank,
      conflictsParticipated: $conflictsParticipated,
      awards: $awards,
      dateOfDeath: $dateOfDeath,
      burialPlace: $burialPlace,
      biographyFacts: $biographyFacts
    ) {
      person {
        id
        lastName
        firstName
        middleName
        dateOfBirth
        placeOfBirth
        militaryCommissariat
        militaryRank
        conflictsParticipated
        awards
        dateOfDeath
        burialPlace
        biographyFacts
      }
    }
  }
`;

export { AUTH_LOGIN, AUTH_REGISTER, CREATE_PERSON };
