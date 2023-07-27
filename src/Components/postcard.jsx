/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import './postCard.css'

export default function postcard({ postImage, title, content, _id, comments }) {
    const [commentSend, setComment] = useState("")

    const handelOnchange = (event) => {
        setComment(event.target.value)
    }
    const handleComment = async (e) => {
        e.preventDefault()

        await fetch('http://localhost:4500/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                comment: commentSend,
                postId: _id
            })
        })
            .then(res => res.json())
        setComment("")

    }
    return (
        <div className="card">
            <div>
                <span className="title">{content}</span>
            </div>
            <div className="image-d">
                <img src={postImage} alt='' className='image-c' />
            </div>
            <div>
                <span className="price">{title}</span>
            </div>
            <div className='comment'>
                <div className="comment-text">{comments[comments.length-2]}</div>
                <div className="comment-text">{comments[comments.length-1]}</div>

            </div>
            <form onSubmit={handleComment}>
                <div className="input-group">
                    <input placeholder="Comment...." type="text" id="input-field" name='comment' onChange={handelOnchange} />
                    <button className="submit-button" type='submit'>
                        <span>Comment</span>
                    </button>
                </div>
            </form>
        </div>
    )
}
