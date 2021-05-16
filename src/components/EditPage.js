import React,{useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { editPost } from '../store/actions/postActions'
import {useDispatch, useSelector} from 'react-redux'

const EditPost = (props) => {
    const dispatch = useDispatch()
    const { posts } = useSelector( state => state)
    const [selectedPost, setSelectedPost] = useState({
        id:"",
        title:"",
        content:""
    })
    const history = useHistory()
    const currentPostId = props.match.params.id

    useEffect(() => {
        const postId = currentPostId
        const selectedPost = posts.find( post => post.id === postId)
        setSelectedPost(selectedPost)
    },[currentPostId, posts])

    const onChange = (e) => {
        setSelectedPost({
            ...selectedPost, [e.target.name]: e.target.value
        })
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(editPost(selectedPost))
        history.push("/")
    }

    return (
       <div className="container" style={{maxWidth:"70rem", margin:'6rem auto'}}>
        <form onSubmit={onSubmit}>
            <div className="input-field">
                <input onChange={onChange} value={selectedPost.title} type="text" name="title" />
            </div>
            <div className="input-field">
                <textarea onChange={onChange} value={selectedPost.content} name="content" type="text" className="materialize-textarea" />
            </div>
            <div className="card-action " style={{display:"flex"}}>
                <div className="input-field">
                    <button className="btn blue">Submit</button>
                </div>
                <div className="input-field" >
                    <Link to="/" className="btn orange right">Cancel</Link>
                </div>
            </div>
        </form>
        </div> 

    )
}

export default EditPost
