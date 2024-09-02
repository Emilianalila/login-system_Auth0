
I'll apply a simple login system to a React app to get started with Auth0. 

Create an Auth0 account (https://manage.auth0.com/dashboard/us/dev-bf51noirvtly4klp/applications) 
and app (npm create vite@latest app-name -- --template react)

Install the Auth0 npm package: npm i @auth0/auth0-react 
Check the installation in: package.json _ dependencies

We add the environment variables in the following file: (create a file: .env) 
Add the domain and client ID variables from Auth0 account
Add this file to .gitignore as .env

Auth0Provider context

Create login and logout buttons

App component

Profile component 
(JSON.stringify(user) This will let us see the user information, this information will depend on the provider that the user chose)





There are authentication providers available for a reason
Auth0, Okta, Google, Azure
It allows third-party applications to verify the identity of the end- users
Obtain basic user profile information

TOKEN FLOW
User logs in via client
Login data is sent to the authentication server Auth server sends token back to client
Token contains info and a verified signature
Who they are
What they should have access to Verified signature to validate with
Resource is requested from a resource server With the token attached in the header
Resource server asks the authentication server for info on how to validate the signature
If valid, the resource is given

video tutorial:
https://www.youtube.com/watch?v=pAzqscDx580