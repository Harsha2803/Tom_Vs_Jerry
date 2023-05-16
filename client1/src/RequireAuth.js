import React from 'react'
import { Navigate } from 'react-router'

const RequireAuth = ({children}) => {
    const auth = localStorage.getItem("loggedIn")

    if(!auth){
        return <Navigate to='/' />
    }

    return children
}

export default RequireAuth