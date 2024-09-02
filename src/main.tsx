import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

const domain = import.meta.env.VITE_AUTH0_DOMAIN as string;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID as string;

if (!domain || !clientId) {
  throw new Error('Auth0 environment variables are missing');
}

/* This(as string) will make the error go away, but if by any 
chance this is not a string you will get a run-time error... 
which is one of the reasons we are using TypeScript to ensure 
that the type matches and avoid such errors at compile time. */

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    >
    <App />
    </Auth0Provider>
  </React.StrictMode>,
)
