/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from 'react'
import './createPost.css'



export default function createPost() {
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })
    const handelOnChange = (event) => {
        setFormData({
            ...formData,
            title: event.target.value,
            content: event.target.value
        })
    }
    
    const [img, setImg] = useState(null)
    const [proImage, setProImage] = useState(null);
    const handleImageChange = (event) => {
        setProImage(event.target.files[0]);
        // console.log(event.target.files[0])
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = (e) => {
            setImg(e.target.result);
        };
    };
    const handelSubmit = async(event) => {
        event.preventDefault()
        console.log(formData)
        console.log(proImage)
        const allData = new FormData()
        allData.append('title', formData.title)
        allData.append('content', formData.content)
        allData.append('postImage', proImage)
        await fetch('http://localhost:4500/post',{
            method: 'POST',
            body: allData,
        })
        .then(res=>res.json())
        .then(resdata=>{
            console.log("Success",resdata.data|| resdata.message )
        })
        

        setFormData({
            title: '',
            content: ''
        })
    }
        return (
            <div className="createPost">
                <h1 className="heading">Create Post</h1>
                <div className="form-container">
                    <form className="form" onSubmit={handelSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Post Title*</label>
                            <input type="text" name="title" required onChange={handelOnChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="textarea">Write Post Content</label>
                            <textarea
                                onChange={handelOnChange}
                                name="content"
                                id="textarea"
                                rows={10}
                                cols={50}
                                required
                            />
                        </div>
                        <div className="input-div">
                            <input className="input" name="postImage" required type="file" onChange={handleImageChange} />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                fill="none"
                                stroke="currentColor"
                                className="icon"
                            >
                                <polyline points="16 16 12 12 8 16" />
                                <line y2={21} x2={12} y1={12} x1={12} />
                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3" />
                                <polyline points="16 16 12 12 8 16" />
                            </svg>
                        </div>
                        <img src={img} className='image'/>
                        <button className="form-submit-btn" type="submit">
                            Post
                        </button>
                    </form>
                </div>

            </div>
        )
    }

