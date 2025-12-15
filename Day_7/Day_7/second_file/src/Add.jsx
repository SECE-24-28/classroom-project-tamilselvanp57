import React,{useRef} from 'react'

const Add = ({name, setName, handleAdd}) => {
    const inputRef=useRef();
    return (
        <div className="add">
            
            <form action="" onSubmit={handleAdd}></form>
            <input type="text" value={name}  ref={inputRef} onChange={(e)=> setName(e.target.value)} />
            <button type="submit" onClick={handleAdd}>Add</button>
        </div>
    )
}

export default Add
