import React, { useState, useEffect } from 'react'
import { getNote } from '@/api'
import PubSub from 'pubsub-js'

export default function useNoteList() {
    const [noteList, setNoteList] = useState<{ name: string, remindTime: string, id: string }[]>([])

    //初始发请求
    useEffect(() => {
        async function getNoteList(listPromise: any) {
            const list = await listPromise
            setNoteList(list)
        }
        const res = getNote('http://localhost:8000/api/todoList/Notes')
        getNoteList(res)
    }, [])

    useEffect(()=>{

    },)

    useEffect(() => {
        PubSub.subscribe('deleteNote', (_: string, noteId: string) => {
            for (let i = 0; i < noteList.length; i++) {
                if (noteList[i].id === noteId) {
                    const newList = [...noteList]
                    newList.splice(i, 1)
                    setNoteList(newList)
                    break
                }
            }
        })
    }, [noteList])

    const updateNoteList = (): void => {
        PubSub.subscribe('updateNote', (_: string, note: { noteName: string, remindTime: string, noteId: string }) => {
            for (let i = 0; i < noteList.length; i++) {
                if (noteList[i].id === note.noteId) {
                    const newList = [...noteList]
                    newList[i].name=note.noteName
                    newList[i].remindTime=note.remindTime
                    setNoteList(newList)
                    break
                }
            }
        })
    }

    return {
        noteList,
        updateNoteList
    }
}
