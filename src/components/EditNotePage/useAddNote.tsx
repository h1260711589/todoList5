import React from 'react';
import { nanoid } from 'nanoid'
import { addNoteAPI } from '@/api'
import { history } from 'umi'
import { message } from 'antd'

const useAddNote = (noteName: string, remindTime: string) => {
    const addNote = async () => {
        try {
            const note = { noteName, remindTime, id: nanoid() }
            await addNoteAPI('http://localhost:8000/api/todoList/Notes', note)
            history.push('/')
            message.success('添加便签成功', 2)
        } catch (error) {
            console.log(error);
        }
    }

    return addNote
};

export default useAddNote;