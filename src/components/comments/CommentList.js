import React from 'react'
import CommentItem from './CommentItem'
import useFetch from '../hooks/useFetch'

const CommentList = ({ postId }) => {
  const { data: comments, loading } = useFetch(
    `http://jsonplaceholder.typicode.com/comments?postId=${postId}`
  )
  if (loading) return <div>Loading...</div>
  return (
    <div>
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  )
}

export default CommentList
