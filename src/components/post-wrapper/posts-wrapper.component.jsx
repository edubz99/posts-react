import React from 'react';
import Post from '../post/post.component';
import './posts-wrapper.styles.scss';

class PostsWrapper extends React.Component {
  constructor() {
    super()
    this.state = {
      posts: [],
      isLoaded: false
    }
  }

  componentDidMount() {
    // Fetch passed in ACF posts
    try {
      fetch('https://jr.ballyhoodemo.co.uk/wp-json/wp/v2/testimonials')
        .then(async (response) => await response.json())
        .then(data => this.setState({
          posts: data,
          isLoaded: true
        }))
    } catch (err) {
      console.error(err)
    }

  }


  render() {
    const { posts, isLoaded } = this.state;
    return (
     <div className="inner-wrapper">
        { isLoaded ?
          posts.map(({ id, ...otherSectionProps}) => (
              <Post key={id} {...otherSectionProps}/>
          ))
          :
          "There are currently no posts to display.Try again later."
        }

      </div>
    )}

  }

export default PostsWrapper;
