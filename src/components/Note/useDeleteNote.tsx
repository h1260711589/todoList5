import React from 'react';
import { deleteNoteAPI } from '@/api'
import send from '@/api/send';
import PubSub from 'pubsub-js'
import { message } from 'antd'

const useDeleteNote = (noteId: string) => {
    const deleteNote = async () => {
        try {
            await deleteNoteAPI('http://localhost:8000/api/todoList/Notes', noteId)
            PubSub.publish('deleteNote', noteId)
            message.success('删除便签成功',2)
        } catch (error) {
            console.log(error);
        }
    }

    return deleteNote
};

export default useDeleteNote;