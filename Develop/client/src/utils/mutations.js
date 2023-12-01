import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const ADD_USER = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
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
mutation Mutation($description: String!, $title: String!, $authors: [String], $image: String, $link: String) {
    saveBook(description: $description, title: $title, authors: $authors, image: $image, link: $link) {
      username
      _id
      email
    }
  }
`;

export const REMOVE_BOOK = gql`
mutation Mutation($bookId: String!) {
    removeBook(bookId: $bookId) {
      savedBooks {
        bookId
        author
        description
        title
        image
        link
      }
    }
  }
`;

