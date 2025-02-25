import React from 'react'

function page({params}) {
    console.log (params);
  return (
  <>
    <div>
      Catch All routes 
    </div>
    <ul>
        {params.catchpath.map((item1) => {
            return(
                <li>{item1}</li>
            )
        })}
    </ul>
  </>
  )
}

export default page
