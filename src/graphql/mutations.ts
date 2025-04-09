import { gql } from "@apollo/client";

export const SIGNUP_MUTATION = gql`
  mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
        email
        username
      }
    }
  }
`;
