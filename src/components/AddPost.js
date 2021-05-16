// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {addPost, addtePost} from '../store/actions/postActions'
// import { v4 as uuid} from 'uuid'

// class AddPost extends Component {
//     state = { post: {
//         id:"",
//         title:'',
//         content:''
//     }}
//     handleChange = (e) => {
//         this.setState({
//             post: {
//                 ...this.state.post,
//                 [e.target.name]:e.target.value
//             }
//         })
//     }
//     handleSubmit = (e) => {
//         e.preventDefault()
//         this.props.createPost(this.state.post)
//         this.setState({
//             post: {
//                 id:uuid(),
//                 title:"",
//                 content:""
//             }
//         })

//     }
//     render() {
//         return (
//             <div className="container" style={{maxWidth:"50rem", margin:'4rem auto'}}>
//                 <h5 className="blue-text center-align">LanBlog</h5>
//                 <form onSubmit={this.handleSubmit}>
//                     <div className="input-field">
//                         <label htmlFor="post_title">Title</label>
//                         <input onChange={this.handleChange} value={this.state.post.title} type="text" name="title" />
//                     </div>
//                     <div className="input-field">
//                         <label htmlFor="post_content">Content</label>
//                         <textarea onChange={this.handleChange} value={this.state.post.content} name="content" className="materialize-textarea"></textarea>
//                     </div>
//                     <div className="input-field">
//                         <button className="btn blue">
//                             Submit
//                             <i className="material-icons right">send</i>
//                         </button>
//                     </div>
//                 </form>
//             </div>

//         )
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         createPost: (post) => {
//             dispatch(addPost(post))
//         }
//     }
// }

// export default connect(null,mapDispatchToProps)(AddPost)

/*******   USING HOOKS ***************/

import React,{useState} from 'react'
import { useDispatch} from 'react-redux'
import { addPost } from '../store/actions/postActions'
import { v4 as uuid } from 'uuid'

const AddPost = () => {
    const dispatch = useDispatch()
    const [post, setPost] = useState({
        id:uuid(),
        title:"",
        content:""
    })

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost(post))
        setPost({
                id:"",
                title:"",
                content:""
            }
        )
    }

    return (
        <div className="container" style={{maxWidth:"50rem", margin:'4rem auto'}}>
            <h4 className="brown-text center-align">LanBlog</h4>
            <form onSubmit={handleSubmit}>
                <div className="input-field">
                    <label htmlFor="post_title">Title</label>
                    <input onChange={handleChange} value={post.title} type="text" name="title" />
                </div>
                <div className="input-field">
                    <label htmlFor="post_content">content</label>
                    <textarea onChange={handleChange} value={post.content} name="content" type="text" className="materialize-textarea" />
                </div>
                <div className="input-field">
                    <button className="btn blue">Submit
                    <i className="material-icons right">send</i>
                    </button>
                </div>
                
            </form>
        </div>

    )
}

export default AddPost




