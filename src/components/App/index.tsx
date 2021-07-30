import React from 'react'
import useFind from './useFind'
import useNoteList from './useNoteList'
import Note from '../Note'
import { Link } from 'umi'


export default function App() {
    const { find, handleChange, clearFind } = useFind()
    const { noteList, updateNoteList } = useNoteList()


    return (
        <div>
            <div className="header">
                <Link to={{ pathname: '/editPage/editNotePage', state: { type: 0 } }}>
                    <div className="addNote" >
                        <i className="iconfont icon-add-bold"></i>
                    </div>
                </Link>
                <div className="right-header">
                    <i className="iconfont icon-chazhao"></i>
                    <input type="text" className="find" placeholder="查找便签" value={find} onChange={handleChange} />
                    <a>
                        <div className="reset" >
                            <i className="iconfont icon-cha" onClick={clearFind}></i>
                        </div>
                    </a>
                </div>
            </div>

            <div className="content">
                {
                    noteList.map((note) => {
                        let hidden = true
                        if (find == '')
                            return <Note {...note} key={note.id} />
                        else if (note.name.indexOf(find) == 0)
                            return <Note {...note} key={note.id} />
                        return null
                    })
                }
            </div>

        </div>
    )
}
