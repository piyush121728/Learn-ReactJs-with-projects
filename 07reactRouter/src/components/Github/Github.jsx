import { useEffect, useState } from "react"
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  //Fetching data from using useEffect react hooks form API
  /*
    const [data, setData] = useState({});
    useEffect(() => {
      fetch('https://api.github.com/users/piyush121728')
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          setData(res)
        })
    }, [])
  */


  return (
    <div className="py-16 bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img className="rounded-full border border-gray-100 shadow-sm" src={data.avatar_url} alt="Git profile image" width="300" />
          </div>

          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl dark:text-white">
              {data.name}
            </h2>
            <p className="mt-4 text-gray-600  dark:text-gray-400">
              {data.bio}
            </p>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              <span>Followers : {data.followers}</span>
              &nbsp;&#8226;&nbsp;
              <span>Following : {data.following}</span>
            </p>
            <p className="mt-2 text-gray-600  dark:text-gray-400">
              {data.location}
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/piyush121728')
  return response.json()
}


