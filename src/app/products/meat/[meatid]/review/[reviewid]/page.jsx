import React from 'react'

function page({params}) {
  return (
    <div>
      Meat {params.meatid} review {params.reviewid}
    </div>
  )
}

export default page
