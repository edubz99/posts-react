import React from 'react';
import moment from 'moment';
import './post.styles.scss';

const Post = ({ date,link,acf }) => {
  return  (
      <a href={link} target="_blank" rel="noopener noreferrer" className="post-link">
        <p className="name">{acf.name}</p>
        <p className="location">{acf.location}</p>
        <p className="time">{moment(date).fromNow()}</p>
      </a>

  )
}

export default Post;
