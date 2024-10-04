// pages/protected.js
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

function ProtectedPage() {
  return <div>This is a protected page</div>;
}

export default withPageAuthRequired(ProtectedPage);