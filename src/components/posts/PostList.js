import React, { useState } from 'react'
import PostItem from './PostItem'
import useFetch from '../hooks/useFetch'

const PostList = () => {
  const [filter, setFilter] = useState('')
  const { data: posts, loading } = useFetch(
    'http://jsonplaceholder.typicode.com/posts'
  )

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h1>Post Lists</h1>
      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
      {posts
        .filter(
          post => post.title.includes(filter) || post.body.includes(filter)
        )
        .map(post => (
          <PostItem key={post.id} post={post} />
        ))}
    </div>
  )
}

export default PostList
