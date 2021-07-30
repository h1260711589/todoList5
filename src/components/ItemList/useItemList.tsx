import React, { useState, useEffect } from 'react';
import PubSub from 'pubsub-js'
import { getItem } from '@/api'

const useItemList = (noteId: string) => {
    const [itemList, setItemList] = React.useState<{ done: boolean, name: string, editTime: string, id: string }[]>([])

    //初始获取数据
    useEffect(() => {
        async function getItemList(listPromise: any) {
            const list = await listPromise
            setItemList(list)
        }
        const res = getItem('http://localhost:8000/api/todoList/items', noteId)
        getItemList(res)
    }, [])

    //订阅changeDone
    useEffect(() => {
        const token = PubSub.subscribe('changeDone', (_: string, data: string) => {
            for (let i = 0; i < itemList.length; i++) {
                if (itemList[i].id === data) {
                    const newList = [...itemList]
                    newList[i].done = !newList[i].done
                    setItemList(newList)
                    break
                }
            }
        })
        return () => {
            PubSub.unsubscribe(token)
        }
    }, [itemList])

    //订阅deleteItem
    useEffect(() => {
        const token = PubSub.subscribe('deleteItem', (_: string, data: string) => {
            for (let i = 0; i < itemList.length; i++) {
                if (itemList[i].id === data) {
                    const newList = [...itemList]
                    newList.splice(i, 1)
                    setItemList(newList)
                    break
                }
            }

        })
        return () => {
            PubSub.unsubscribe(token)
        }
    }, [itemList])



    return itemList
};

export default useItemList;