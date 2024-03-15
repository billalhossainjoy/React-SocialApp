/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AuthLayout({children, authentication = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector(state => state.status)

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        }else if (!authentication && authStatus !== authentication){
            navigate('/')
        }
        setLoader(false)
    }, [authStatus, authentication, navigate])
    

  return (
    <div>AuthLayout</div>
  )
}

export default AuthLayout