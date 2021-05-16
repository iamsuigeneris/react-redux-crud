// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import {deletePost} from '../store/actions/postActions'

// export class PostDetail extends Component {
//     render() {
//         const {post} = this.props
//         return (
//             <div className="col s12 m6">
//                 <div className="card">
//                     <div className="card-content">
//                         <span className="card-title">{post.title}</span>
//                         <p>{post.content}</p>
//                     </div>
//                     <div className="card-action">
//                         <button onClick={() => this.props.deletePost(post.id)} className="btn red">Delete</button>
//                     </div>
//                 </div>
//             </div>

//         )
//     }
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deletePost: (id) => {
//             dispatch(deletePost(id))
//         }
//     }
// }
// export default connect(null, mapDispatchToProps)(PostDetail)

/*******   USING HOOKS ***************/

import React from 'react'
import { useDispatch } from 'react-redux'
import {deletePost} from '../store/actions/postActions'
import { Link } from 'react-router-dom'

export const PostDetail = ({post}) => {
    const dispatch = useDispatch()
    return (
        <div className="col s12 m6">
            <div className="card">
                <div className="card-content">
                    <span className="card-title">{post.title}</span>
                    <p>{post.content}</p>
                </div>
                <div className="card-action">
                    <button onClick={() => dispatch(deletePost(post.id))} className="btn red">Delete</button>
                    <Link to={`/edit/${post.id}`} className="btn orange right">Edit</Link>
                </div>
            </div>
        </div>
    )
}



