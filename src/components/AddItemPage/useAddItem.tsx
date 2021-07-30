import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import { addItemAPI } from '@/api'
import { history } from 'umi';
import { message } from 'antd'

const useAddItem = (noteId: string) => {
    const [itemName, setItemName] = useState<string>('')
    const handleChange = (event: any) => {
        setItemName(event.target.value)
    }

    const addItem = () => {
        const editTime = new Date().toLocaleTimeString()
        const itemObj = { name: itemName, editTime, id: nanoid(), done: false }
        addItemAPI('http://localhost:8000/api/todoList/items', noteId, itemObj)
        history.push('/')
        message.success('添加条目成功')
    }

    return { itemName, handleChange, addItem }
};

export default useAddItem;