import React from 'react';
import { updateNoteAPI } from '@/api'
import { history } from 'umi'
import { message } from 'antd'

const useEdit = (noteName: string, remindTime: string, noteId: string) => {
    const editNote = async () => {
        try {
            await updateNoteAPI('http://localhost:8000/api/todoList/Notes', noteName, remindTime, noteId)
            history.push('/')
            message.success('修改便签成功', 2)
        } catch (error) {
            console.log(error);
        }
    }

    return editNote
};

export default useEdit;