import send from './send'

export const getNote = async (url: string) => {
    try {
        const res: any = await send('GET', url)
        return res.data
    } catch (error) {
        console.log(error);
        return []
    }
}

export const getItem = async (url: string, noteId: string) => {
    try {
        const res: any = await send('GET', url, { noteId })
        return res.data
    } catch (error) {
        console.log(error);
        return []
    }
}

export const addItemAPI = (url: string, noteId: string, itemObj: { done: boolean, name: string, editTime: string, id: string }) => {
    try {
        send('POST', url, { noteId, itemObj })
    } catch (error) {
        console.log(error);
    }
}

export const deleteItemAPI = (url: string, noteId: string, itemId: string) => {
    return send('DELETE', url, { noteId, itemId })
}

export const changeDoneAPI = (url: string, noteId: string, itemId: string) => {
    return send('PUT', url, { noteId, itemId })
}

export const deleteNoteAPI = (url: string, noteId: string) => {
    return send('DELETE', url, { noteId })
}

export const updateNoteAPI = (url: string, noteName: string, remindTime: string, noteId: string) => {
    return send('PUT', url, { noteName, remindTime, noteId })
}

export const addNoteAPI = (url: string, note: { noteName: string, remindTime: string, id: string }) => {
    return send('POST', url, note)
}


