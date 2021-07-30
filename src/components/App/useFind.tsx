import React, { useState } from 'react'

export default function useFind() {
    const [find, setFind] = useState<string>('')

    const handleChange = (event: any) => {
        setFind(event.target.value)
    }

    const clearFind = () => {
        setFind('')
    }

    return { find, handleChange, clearFind }
}
