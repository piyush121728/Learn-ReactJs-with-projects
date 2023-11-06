import React, { useState } from 'react'
import UserContext from './UserContext'


//Note : Here children props is a react component.
function UserContextProvider({ children }) {
    const [user, setUser] = useState({});
    return (
        //Step 2 : Provide context to the child component via 'Provider' component.
        //Now, every children component can access the data or object provide via 'Provider'.
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;