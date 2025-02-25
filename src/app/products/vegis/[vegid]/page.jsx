import React from 'react'

function page({params}) {
  return (
    <div>
      Vege item {params.vegid}
    </div>
  )
}

export default page
