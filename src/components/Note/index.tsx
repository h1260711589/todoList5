import React, { useState } from 'react';
import useHideList from './useHideList'
import ItemList from '../ItemList'
import { Link } from 'umi'
import useDeleteNote from './useDeleteNote'


const Note = (props: { name: string, remindTime: string, id: string }) => {
    const { hideList, changeHide } = useHideList()

    const deleteNote = useDeleteNote(props.id)

    return (
        <div className="note" >
            <div className="note-header">
                <div className="note-left">
                    <div className="note-name">{props.name}</div>
                    <div className="note-time">
                        <i className="iconfont icon-shijianzhongbiao"></i>
                        <span>{props.remindTime}</span>
                    </div>
                </div>
                <div className="note-right">
                    <Link to={{ pathname: '/editPage/addItemPage', state: props.id }}><i className="iconfont icon-add-bold" ></i></Link>
                    <a ><i className="iconfont icon-ashbin" onClick={deleteNote}></i></a>
                    <Link to={{ pathname: '/editPage/editNotePage', state: { noteId: props.id, type: 1 } }}><i className="iconfont icon-setting" ></i></Link>
                    <a >
                        <div onClick={changeHide} style={{ display: 'inline-block' }}>
                            {hideList ? <i className="iconfont icon-arrow-left-bold" ></i> :
                                <i className="iconfont icon-arrow-down-bold" ></i>}
                        </div>
                    </a>
                </div>
            </div>
            {hideList ? null : <ItemList noteId={props.id} />}
        </div >
    )
};

export default Note;