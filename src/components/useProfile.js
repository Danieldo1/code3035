import { useEffect, useState } from 'react'

export  function useProfile() {
    const [isAdmin, setIsAdmin] = useState(false)
const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        fetch('/api/profile').then(res =>{
            res.json().then(data =>{
                setIsAdmin(data.admin)
                setLoading(false)
            })
        })
    },[])


return {loading,isAdmin}
}