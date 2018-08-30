import React, { Component } from 'react'
import axios from 'axios'
export default class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts : []
        };
    }

  componentWillMount() {
    let self = this;
      axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(function (response) {
          if(response.data){
              self.setState({posts: response.data})
          }
     
      })
      .catch(function (error) {
        console.log(error);
      });
  }      

  render() {
      const postItems = this.state.posts.map(post => (
          <div id={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>  
          </div>
      ));
    return (
      <div>
        <h1>Posts</h1>  
        {postItems}
      </div>
    )
  }
}
