# NextAuth Session Undefined Client-Side in Next.js 13 App

This repository demonstrates a bug where a NextAuth session is correctly populated server-side but is undefined on the client-side in a Next.js 13 application.  The issue occurs despite successfully logging in and verifying the session on the server.

## Bug Description

The `session` object is properly populated in `getServerSideProps` within the `/pages/about.js` file.  However, when attempting to access the `session` object within the client-side component, it's always `undefined`.

## Steps to Reproduce

1. Clone this repository.
2. Install dependencies: `npm install`
3. Set up a NextAuth provider (e.g., using Credentials or other supported provider).
4. Run the development server: `npm run dev`
5. Navigate to the `/about` page after logging in.  The client-side will display 'Not logged in' even when successfully logged in.

## Expected Behavior

The `session` object should contain the user's session data on both the server and the client-side, allowing conditional rendering based on login status.

## Actual Behavior

The `session` object is `undefined` on the client-side, preventing conditional rendering based on login status.

## Solution

The solution involves using `getSession` within the client-side component to retrieve the session. See the `aboutSolution.js` for an example implementation.