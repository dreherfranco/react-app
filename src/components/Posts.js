import React from 'react';
import PostService from '../services/post.service';
import Post from './Post';

class Posts extends React.Component{
    service = new PostService();

    state = {
        posts: []
    }

    componentDidMount(){
       let posts = this.service.get();
       posts.then(
           res=>{
               this.post = res.data;
               this.setState({
                   posts: res.data
               })
           })
    }

    render(){
        return(
            <div className="container-fluid w-50 mt-3">
                 {this.state.posts.map((post,i) =>
                    <Post post={post} key={i}></Post>
                )}
            </div>
        );
    }
}

export default Posts