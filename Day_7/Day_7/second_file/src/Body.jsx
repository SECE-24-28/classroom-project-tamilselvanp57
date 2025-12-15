import React from 'react'

const Body = (props) => {
  return (
    <div>
      <ul>
        {
          props.list.map((ls)=>
            <li key={ls.id}>
              <input type="checkbox" checked={ls.fee} onChange={()=>props.handleCheck(ls.id)}/>
              <label>{ls.name}</label>
              <button onClick={()=>props.handleDelete(ls.id)}>Delete</button>
            </li>
            
          )
        }
      </ul>
    </div>
  )
}

export default Body
