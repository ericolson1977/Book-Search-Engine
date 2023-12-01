import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        email
        username
      }
    }
  }
`;

export const SAVE_BOOK = gql`
mutation SaveBook($input: saveBookInput) {
    saveBook(input: $input) {
      _id
      email
      username
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: String!) {
    removeBook(bookId: $bookId) {
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
      _id
      email
      username
    }
  }
`;

