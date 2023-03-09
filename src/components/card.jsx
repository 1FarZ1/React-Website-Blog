


import React from 'react'
import '../card.css'
export default function card(props) {
  return (
    <div className="card">
    <img src={props.info.imgUrl} alt="Person" className="card__image"/>
    <p className="card__name">{props.info.name}</p>
    <div className="grid-container">

      <div className="grid-child-posts">
        {props.info.posts} Post
      </div>

      <div className="grid-child-followers">
      {props.info.likes} Likes
      </div>

    </div>
    <ul className="social-icons">
      <li><a href="https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"><i className="fa fa-instagram"></i></a></li>
      <li><a href="https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"><i className="fa fa-twitter"></i></a></li>
      <li><a href="https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"><i className="fa fa-linkedin"></i></a></li>
      <li><a href="https://www.youtube.com/watch?v=pnhO8UaCgxg&list=PL4cUxeGkcC9gZD-Tvwfod2gaISzfRiP9d&index=4"><i className="fa fa-codepen"></i></a></li>
    </ul>
    {/* <button className="btn draw-border">Follow</button>
    <button className="btn draw-border">Message</button> */}
  </div>
  )
}
