import React from 'react'

function page({params}) {
  return (
    <div>
      grocery item {params.groceryid}
    </div>
  )
}

export default page
