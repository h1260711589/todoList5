import React from 'react';
import { Link } from 'umi'
import useEditNote from './useEditNote'
import useEdit from './useEdit'
import useAddNote from './useAddNote'

const index = (props: any) => {
    const { noteName, remindTime, handleNmaeChange, handleTimeChange } = useEditNote()
    const editNote = useEdit(noteName, remindTime, props.location.state.noteId)
    const addNote = useAddNote(noteName, remindTime)

    return (
        <div className="modal">
            <div className="modal-header">
                <Link to='/'><div className="modal-cancel" >取消</div></Link>
                <div className="modal-title">{props.location.state.type ? '编辑' : '新增'}便签</div>
                <a ><div className="modal-save" onClick={props.location.state.type ? editNote : addNote}>确定</div></a>
            </div>
            <div className="modal-content">
                <div className="modal-input-title">编辑便签</div>
                <input type="text" className="modal-input" value={noteName} onChange={handleNmaeChange} />
                <div>
                    <div className="modal-input-title">设置提醒时间</div>
                    <input type="date" className="modal-input" value={remindTime} onChange={handleTimeChange} />
                </div>
            </div>
        </div>
    )
};

export default index;