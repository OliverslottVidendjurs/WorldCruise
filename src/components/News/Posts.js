import React, { useState } from 'react'
import PostCard from './PostCard'
import NewsMain from './NewsMain'

const Posts = () => {
    // State
    const [posts] = useState([
        {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 1},
        {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 2},
        {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 3},
        {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 4},
        {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 5},
        {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 6},
      ]);


    return ( 
        <div className="pad">
            <NewsMain alleNyhederProp={posts}/>
            <PostCard allePostsProp={posts}/>
        </div>
     );
}
 
export default Posts;