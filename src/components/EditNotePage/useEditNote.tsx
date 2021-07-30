import React, { useState } from 'react';

const useEditNote = () => {
    const [noteName, setNoteName] = useState<string>('')
    const [remindTime, setRemindTime] = useState<string>('')

    const handleNmaeChange = (event: any) => {
        setNoteName(event.target.value)
    }

    const handleTimeChange = (event: any) => {
        setRemindTime(event.target.value)
    }

    return { noteName, remindTime, handleNmaeChange, handleTimeChange }
};

export default useEditNote;