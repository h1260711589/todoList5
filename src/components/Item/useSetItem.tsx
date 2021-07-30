import React from 'react';
import PubSub from 'pubsub-js'
import { deleteItemAPI, changeDoneAPI } from '@/api'
import { message } from 'antd'

const useSetItem = (itemId: string, noteId: string) => {
    const deleteItem = async () => {
        try {
            await deleteItemAPI('http://localhost:8000/api/todoList/items', noteId, itemId)
            PubSub.publish('deleteItem', itemId)
            message.success('删除条目成功')
        } catch (error) {
            console.log(error);
        }
    }

    const changeDone = async () => {
        try {
            await changeDoneAPI('http://localhost:8000/api/todoList/items', noteId, itemId)
            PubSub.publish('changeDone', itemId)
        } catch (error) {
            console.log(error);
        }
    }

    return { deleteItem, changeDone }
};

export default useSetItem;