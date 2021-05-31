import React from 'react'
import ReactTimeAgo from 'react-time-ago'

export default function LastPosted({ date }) {
  return (
    <div>
      Posted: <ReactTimeAgo date={date} />
    </div>
  )
}