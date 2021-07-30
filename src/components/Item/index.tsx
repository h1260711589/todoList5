import React from 'react';
import PubSub from 'pubsub-js'
import { deleteItemAPI, changeDoneAPI } from '@/api'
import useSetItem from './useSetItem'


const Item = (props: any) => {



    const { deleteItem, changeDone } = useSetItem(props.id, props.noteId)

    return (
        <div className="item">
            <a >
                <div className="done" onClick={changeDone}>
                    {props.done ? <i className="iconfont icon-gou"></i> : null}
                </div>
            </a>
            <div className="item-content">
                <div className="item-record" style={{ color: props.done ? 'grey' : 'black' }}>{props.name}</div>
                <div className="item-time">上次编辑：{props.editTime}</div>
            </div>
            <div className="cancel" onClick={deleteItem}>
                <a style={{ color: 'white' }}><i className="iconfont icon-jianhaocu"></i></a>
            </div>
        </div>
    )
};

export default Item;