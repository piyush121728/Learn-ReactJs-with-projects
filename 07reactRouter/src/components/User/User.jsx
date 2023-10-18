import { useParams } from "react-router-dom"

function User() {
    // The useParams hook is a powerful tool that allows us to access parameters from the URL in React.
    // This can be used to render different components based on the URL, or to load and display data from the server.
    const {userId} = useParams();
  return (
    <div className='bg-gray-600 text-center text-white text-3xl p-4 '>User: {userId} </div>
  )
}

export default User