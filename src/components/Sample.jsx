import React from 'react'

function Sample() {
    var name=["Nirmala","college","arts"]
  return (
    <div>
    <ul>
        {name.map((value,index)=>{return<li key={index}>{value}</li>})}
        </ul>
       </div> 
  )
}

export default Sample
