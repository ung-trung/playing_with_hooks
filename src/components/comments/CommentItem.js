import React from 'react'

const CommentItem = ({ comment }) => {
  const { name, email, body } = comment
  return (
    <div>
      <h5>
        {name} {email}
      </h5>
      <p>{body}</p>
    </div>
  )
}

export default CommentItem
