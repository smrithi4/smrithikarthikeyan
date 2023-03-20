import React from 'react'

function Number() {
    var num=[1,2,3,4,5,6]
  return (
    <div>
      <ul>
        {num.map((value,index)=>{return<li key={index}>{value}</li>})}
        </ul>
    </div>
  )
}

export default Number
