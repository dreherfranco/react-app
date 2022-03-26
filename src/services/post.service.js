import React from 'react';
import axios from 'axios';
import Global from '../utils/Global';

class PostService extends React.Component{
    
    get(){
        return axios.get(Global + '/posts');
    }
}
export default PostService;