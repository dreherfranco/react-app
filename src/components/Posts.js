import React from 'react';
import PostService from '../services/post.service';

class Posts extends React.Component{
    service = new PostService();
    posts = [];

    componentDidMount(){
       let posts = this.service.get();
       posts.then(
           res=>{
               this.post = res.data;
               console.log(posts);
           })
    }

    render(){
        return(
            <div>
                posts
            </div>
        );
    }
}

export default Posts