import React, {useEffect, useState} from 'react';
import './slider.scss';
// import $ from "jquery";

const Slider = () => {  
  // useEffect(() => {
  //   $('.slick-carousel').slick({
  //     arrows: true,
  //     rows: 2,
  //     slidesPerRow: 3,
  //     centerPadding: "0px",
  //     dots: false,
  //     slidesToShow: 4,
  //     touchThreshold: 500,
  //     infinite: false
  //   });
  // }, []);
  // State
  const [posts] = useState([
    {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 1},
    {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 2},
    {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 3},
    {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 4},
    {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 5},
    {img: 'copenhagen.jpg', title: 'Overskrift', resume: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.', id: 6},
  ]);

  const slideList = posts.map(p => 
      <div>
        <div className="slide-content">
          <img src={`/img/${p.img}`} alt={p.title}/>
        </div>
      </div>
    )
  return (
    <div className="slick-carousel">
      {/* <div><div className="slide-content">1 your content</div></div>
      <div><div className="slide-content">2 your content</div></div>
      <div><div className="slide-content">3 your content</div></div>
      <div><div className="slide-content">4 your content</div></div>
      <div><div className="slide-content">5 your content</div></div>
      <div><div className="slide-content">6 your content</div></div>
      <div><div className="slide-content">7 your content</div></div>
      <div><div className="slide-content">8 your content</div></div>
      <div><div className="slide-content">9 your content</div></div>
      <div><div className="slide-content">10 your content</div></div> */}
      {slideList}
    </div>
  )
}

export default Slider;
