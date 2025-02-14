import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  DateTime: { input: any; output: any; }
  GenericScalar: { input: any; output: any; }
};

export type ArmedConflictType = {
  __typename?: 'ArmedConflictType';
  id: Scalars['ID']['output'];
  personSet: Array<PersonType>;
  title: Scalars['String']['output'];
};

export type CreatePerson = {
  __typename?: 'CreatePerson';
  person?: Maybe<PersonType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPerson?: Maybe<CreatePerson>;
  refreshToken?: Maybe<Refresh>;
  registerUser?: Maybe<RegisterUser>;
  tokenAuth?: Maybe<ObtainToken>;
  verifyToken?: Maybe<Verify>;
};


export type MutationCreatePersonArgs = {
  awards: Scalars['String']['input'];
  biographyFacts?: InputMaybe<Scalars['String']['input']>;
  burialPlace: Scalars['String']['input'];
  conflictsParticipated?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  dateOfBirth: Scalars['Date']['input'];
  dateOfDeath: Scalars['Date']['input'];
  firstName: Scalars['String']['input'];
  lastName: Scalars['String']['input'];
  middleName?: InputMaybe<Scalars['String']['input']>;
  militaryCommissariat: Scalars['String']['input'];
  militaryRank: Scalars['String']['input'];
  placeOfBirth: Scalars['String']['input'];
};


export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRegisterUserArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationTokenAuthArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type ObtainToken = {
  __typename?: 'ObtainToken';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
  user?: Maybe<UserType>;
};

export type PersonType = {
  __typename?: 'PersonType';
  awards: Scalars['String']['output'];
  biographyFacts?: Maybe<Scalars['String']['output']>;
  burialPlace: Scalars['String']['output'];
  conflictsParticipated: Array<ArmedConflictType>;
  dateOfBirth: Scalars['Date']['output'];
  dateOfDeath: Scalars['Date']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastName: Scalars['String']['output'];
  middleName?: Maybe<Scalars['String']['output']>;
  militaryCommissariat: Scalars['String']['output'];
  militaryRank: Scalars['String']['output'];
  placeOfBirth: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']['output']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar']['output'];
  refreshExpiresIn: Scalars['Int']['output'];
  token: Scalars['String']['output'];
};

export type RegisterUser = {
  __typename?: 'RegisterUser';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UserType>;
};

export type UserType = {
  __typename?: 'UserType';
  dateJoined: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  /** Отметьте, если пользователь должен считаться активным. Уберите эту отметку вместо удаления учётной записи. */
  isActive: Scalars['Boolean']['output'];
  /** Отметьте, если пользователь может входить в административную часть сайта. */
  isStaff: Scalars['Boolean']['output'];
  /** Указывает, что пользователь имеет все права без явного их назначения. */
  isSuperuser: Scalars['Boolean']['output'];
  lastLogin?: Maybe<Scalars['DateTime']['output']>;
  lastName: Scalars['String']['output'];
  password: Scalars['String']['output'];
  /** Обязательное поле. Не более 150 символов. Только буквы, цифры и символы @/./+/-/_. */
  username: Scalars['String']['output'];
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar']['output'];
};

export type AuthLoginMutationVariables = Exact<{
  username: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AuthLoginMutation = { __typename?: 'Mutation', tokenAuth?: { __typename?: 'ObtainToken', token: string, user?: { __typename?: 'UserType', id: string, username: string, email: string } | null } | null };

export type AuthRegisterMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type AuthRegisterMutation = { __typename?: 'Mutation', registerUser?: { __typename?: 'RegisterUser', token?: string | null, user?: { __typename?: 'UserType', id: string, username: string, email: string } | null } | null };

export type CreatePersonMutationVariables = Exact<{
  last_name: Scalars['String']['input'];
  first_name: Scalars['String']['input'];
  middle_name?: InputMaybe<Scalars['String']['input']>;
  date_of_birth: Scalars['Date']['input'];
  place_of_birth: Scalars['String']['input'];
  military_commissariat: Scalars['String']['input'];
  military_rank: Scalars['String']['input'];
  conflicts_participated: Array<InputMaybe<Scalars['Int']['input']>> | InputMaybe<Scalars['Int']['input']>;
  awards: Scalars['String']['input'];
  date_of_death: Scalars['Date']['input'];
  burial_place: Scalars['String']['input'];
  biography_facts?: InputMaybe<Scalars['String']['input']>;
}>;


export type CreatePersonMutation = { __typename?: 'Mutation', createPerson?: { __typename?: 'CreatePerson', person?: { __typename?: 'PersonType', id: string, lastName: string, firstName: string, middleName?: string | null, dateOfBirth: any, placeOfBirth: string, militaryCommissariat: string, militaryRank: string, awards: string, dateOfDeath: any, burialPlace: string, biographyFacts?: string | null, conflictsParticipated: Array<{ __typename?: 'ArmedConflictType', id: string, title: string }> } | null } | null };


export const AuthLoginDocument = gql`
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
export type AuthLoginMutationFn = Apollo.MutationFunction<AuthLoginMutation, AuthLoginMutationVariables>;

/**
 * __useAuthLoginMutation__
 *
 * To run a mutation, you first call `useAuthLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authLoginMutation, { data, loading, error }] = useAuthLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthLoginMutation(baseOptions?: Apollo.MutationHookOptions<AuthLoginMutation, AuthLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthLoginMutation, AuthLoginMutationVariables>(AuthLoginDocument, options);
      }
export type AuthLoginMutationHookResult = ReturnType<typeof useAuthLoginMutation>;
export type AuthLoginMutationResult = Apollo.MutationResult<AuthLoginMutation>;
export type AuthLoginMutationOptions = Apollo.BaseMutationOptions<AuthLoginMutation, AuthLoginMutationVariables>;
export const AuthRegisterDocument = gql`
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
export type AuthRegisterMutationFn = Apollo.MutationFunction<AuthRegisterMutation, AuthRegisterMutationVariables>;

/**
 * __useAuthRegisterMutation__
 *
 * To run a mutation, you first call `useAuthRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAuthRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [authRegisterMutation, { data, loading, error }] = useAuthRegisterMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useAuthRegisterMutation(baseOptions?: Apollo.MutationHookOptions<AuthRegisterMutation, AuthRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AuthRegisterMutation, AuthRegisterMutationVariables>(AuthRegisterDocument, options);
      }
export type AuthRegisterMutationHookResult = ReturnType<typeof useAuthRegisterMutation>;
export type AuthRegisterMutationResult = Apollo.MutationResult<AuthRegisterMutation>;
export type AuthRegisterMutationOptions = Apollo.BaseMutationOptions<AuthRegisterMutation, AuthRegisterMutationVariables>;
export const CreatePersonDocument = gql`
    mutation CreatePerson($last_name: String!, $first_name: String!, $middle_name: String, $date_of_birth: Date!, $place_of_birth: String!, $military_commissariat: String!, $military_rank: String!, $conflicts_participated: [Int]!, $awards: String!, $date_of_death: Date!, $burial_place: String!, $biography_facts: String) {
  createPerson(
    lastName: $last_name
    firstName: $first_name
    middleName: $middle_name
    dateOfBirth: $date_of_birth
    placeOfBirth: $place_of_birth
    militaryCommissariat: $military_commissariat
    militaryRank: $military_rank
    conflictsParticipated: $conflicts_participated
    awards: $awards
    dateOfDeath: $date_of_death
    burialPlace: $burial_place
    biographyFacts: $biography_facts
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
      conflictsParticipated {
        id
        title
      }
      awards
      dateOfDeath
      burialPlace
      biographyFacts
    }
  }
}
    `;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      last_name: // value for 'last_name'
 *      first_name: // value for 'first_name'
 *      middle_name: // value for 'middle_name'
 *      date_of_birth: // value for 'date_of_birth'
 *      place_of_birth: // value for 'place_of_birth'
 *      military_commissariat: // value for 'military_commissariat'
 *      military_rank: // value for 'military_rank'
 *      conflicts_participated: // value for 'conflicts_participated'
 *      awards: // value for 'awards'
 *      date_of_death: // value for 'date_of_death'
 *      burial_place: // value for 'burial_place'
 *      biography_facts: // value for 'biography_facts'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }
export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;