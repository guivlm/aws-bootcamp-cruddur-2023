import './App.css';
import HomeFeedPage from './pages/HomeFeedPage';
import NotificationsFeedPage from './pages/NotificationsFeedPage';
import UserFeedPage from './pages/UserFeedPage';
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import RecoverPage from './pages/RecoverPage';
import MessageGroupsPage from './pages/MessageGroupsPage';
import MessageGroupPage from './pages/MessageGroupPage';
import ConfirmationPage from './pages/ConfirmationPage';
import React from 'react';
import process from 'process';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import { Amplify, Auth } from 'aws-amplify';

Amplify.configure({
  "AWS_PROJECT_REGION": 'sa-east-1',
  "aws_cognito_region": 'sa-east-1',
  "aws_user_pools_id": 'sa-east-1_VLXbHlpRd',
  "aws_user_pools_web_client_id": '25h0oufj09evnnh5ivl0lv8jjv',
  "oauth": {},
  Auth: {
    // We are not using an Identity Pool
    // identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID, // REQUIRED - Amazon Cognito Identity Pool ID
    region: 'sa-east-1', //process.env.REACT_APP_AWS_PROJECT_REGION,           // REQUIRED - Amazon Cognito Region
    userPoolId: 'sa-east-1_VLXbHlpRd',//process.env.REACT_APP_AWS_USER_POOLS_ID,         // OPTIONAL - Amazon Cognito User Pool ID
    userPoolWebClientId: '25h0oufj09evnnh5ivl0lv8jjv' //process.env.REACT_APP_AWS_USER_POOLS_WEB_CLIENT_ID,   // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
  }
});

// You can get the current config object
const currentConfig = Auth.configure();

// import { Amplify, Auth } from 'aws-amplify';

// Amplify.configure({
//     Auth: {
//         region: 'sa-east-1',
//         userPoolId: 'sa-east-1_9ABsPhCU6',
//         userPoolWebClientId: '6tgmagmdjando5gqn2laidc1h1',
//         oauth: { }
//     }
// });

// // You can get the current config object
// const currentConfig = Auth.configure();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeFeedPage />
  },
  {
    path: "/notifications",
    element: <NotificationsFeedPage />
  },
  {
    path: "/@:handle",
    element: <UserFeedPage />
  },
  {
    path: "/messages",
    element: <MessageGroupsPage />
  },
  {
    path: "/messages/@:handle",
    element: <MessageGroupPage />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
  {
    path: "/signin",
    element: <SigninPage />
  },
  {
    path: "/confirm",
    element: <ConfirmationPage />
  },
  {
    path: "/forgot",
    element: <RecoverPage />
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;