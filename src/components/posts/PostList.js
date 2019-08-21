import React, { useState } from 'react'
import PostItem from './PostItem'
import useFetch from '../hooks/useFetch'
import Loader from '../loader/Loader'

import useDebouce from '../hooks/useDebouce'

const PostList = () => {
  const [filter, setFilter] = useState('')
  const debounceFilter = useDebouce(filter, 350)

  const { data: posts, loading } = useFetch(
    'http://jsonplaceholder.typicode.com/posts'
  )

  if (loading) return <Loader />

  return (
    <div>
      <h1>Post Lists</h1>

      <input
        type="text"
        onChange={e => setFilter(e.target.value)}
        value={filter}
      />

      {posts
        .filter(
          post =>
            post.title.includes(debounceFilter) ||
            post.body.includes(debounceFilter)
        )
        .map(post => (
          <PostItem key={post.id} post={post} />
        ))}
    </div>
  )
}

export default PostList
