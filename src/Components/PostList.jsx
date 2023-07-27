import { useState,useEffect } from 'react'
import PostCard from './postcard'

export default function PostList() {
    const [post, setPost] = useState([])

    useEffect(() => {
        fetch('http://localhost:4500/post',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
      .then(res => res.json())
      .then(data => setPost(data.data))
    })
  return (
    <div>
        {post.map(post => <PostCard key={post._id} {...post} />)}
    </div>
  )
}
