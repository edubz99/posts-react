import React from 'react';
import './posts.styles.scss';
import PostsWrapper from '../../components/post-wrapper/posts-wrapper.component';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

class Posts extends React.Component{
  constructor() {
    super()
    this.state = {
      searchValue: '',
      posts: [],
      isLoaded: false
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      searchValue: e.target.value
    })

  }

  handleSubmit = (e) => {
    let {searchValue } = this.state;
    e.preventDefault();
    // Fetch passed in ACF posts
    try {
      fetch(`https://jr.ballyhoodemo.co.uk/wp-json/wp/v2/${searchValue}`)
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
    return (
      <div className="posts-wrapper">
          <FormInput
            handleChange={this.handleChange}
            type="text"
            label="Search"
            value={this.state.searchValue}
          />
          <CustomButton handleSubmit={this.handleSubmit}>Submit</CustomButton>
          <PostsWrapper />
      </div>
    )
  }
}









export default Posts;
