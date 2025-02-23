```javascript
// pages/aboutSolution.js
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "pages/api/auth/[...nextauth]";
import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      session
    }
  };
}

export default async function About({ session }) {
  const clientSession = await getSession(); // Get session on client-side
  return (
    <div>
      <h1>About Page</h1>
      {clientSession ? (
        <p>Logged in as {clientSession.user.email}</p>
      ) : (
        <p>Not logged in</p>
      )}
    </div>
  );
}
```