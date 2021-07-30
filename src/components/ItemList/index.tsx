import React from 'react';
import useItemList from './useItemList'
import Item from '../Item'

const ItemList = (props:{noteId:string}) => {
    const itemList = useItemList(props.noteId)

    return (
        <div>
            {
                <div>
                    {itemList.map((item, index) => {
                        return (
                            <div key={item.id}>
                                < Item {...item} noteId={props.noteId} />
                                {index == itemList.length - 1 ? null : <div className='line'></div>}
                            </div>)
                    })}
                </div>
            }
        </div>
    )
};

export default ItemList;