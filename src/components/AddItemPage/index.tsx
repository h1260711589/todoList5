import React, { useState } from 'react';
import useAddItem from './useAddItem'
import { Link } from 'umi'

const AddItemPage = (props: any) => {
    const { itemName, handleChange, addItem } = useAddItem(props.location.state)

    return (
        <div className="modal">
            <div className="modal-header">
                <Link to='/'><div className="modal-cancel" >取消</div></Link>
                <div className="modal-title">添加条目</div>
                <a ><div className="modal-save" onClick={addItem}>添加</div></a>
            </div>
            <div className="modal-content">
                <div className="modal-input-title">编辑条目</div>
                <input type="text" className="modal-input" value={itemName} onChange={handleChange} />
            </div>
        </div>
    )
};

export default AddItemPage;