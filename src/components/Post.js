import React from "react";

class Post extends React.Component {
    
    render() {
        return (
            <div className="card mb-3">
                <div className="card-body">
                    <img className='row mx-auto w-75' alt="img-post" src="https://mott.pe/noticias/wp-content/uploads/2018/08/3-ajustes-de-lightroom-para-darle-dramatismo-a-las-fotos-de-paisaje.png"></img>
                    <h2 className='row mx-auto w-75 mt-3'>{this.props.post.title}</h2>
                    <p className='row mx-auto w-75 mt-3'>{this.props.post.body}</p>
                </div>
                <hr />
            </div>
        );
    }
}

export default Post;