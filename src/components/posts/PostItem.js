import React from 'react'
import CommentList from '../comments/CommentList'

const PostItem = ({ post }) => {
  const { title, body, id } = post
  return (
    <div>
      <h3> {title}</h3>
      <h4>{body}</h4>
      <CommentList postId={id} />
    </div>
  )
}

export default PostItem
