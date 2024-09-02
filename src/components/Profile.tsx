import { useAuth0 } from "@auth0/auth0-react"

const Profile = () => {
  const{user, isAuthenticated } = useAuth0();
  /* Here, user is the object that contains the authenticated user information.
JSON.stringify() is used to convert this object into a readable JSON string
that can be rendered in the browser. */

  return (
    <>
   { isAuthenticated && (
    <article className="container">
    {/*   {JSON.stringify(user)} */}
    {user?.picture && <img src={user.picture}/>}
      {user && (
      <>
        <p>Nombre: {user?.name}</p>
        <p>Correo electrónico: {user?.email}</p>
        {/* Otras propiedades del usuario */}
      </>
    )}
    </article>
   )}
    </>
  )
}

export default Profile

/* When you work with an authentication system like Auth0 in a React application,
after a user is successfully authenticated, Auth0 provides information
about the user in the form of an object. This object contains details such as the user's name,
their email address, assigned roles, and any other custom attributes you've
set up. */