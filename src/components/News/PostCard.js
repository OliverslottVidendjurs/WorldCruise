import React from "react";
import "./PostCard.css";

const PostCard = props => {
  let PostsListe = props.allePostsProp.map(p => {
    return (
      <article className="col-12 col-md-6 col-lg-4 px-0" key={p.id}>
        <div className="card mb-4 border-0 shadow">
          <figure className="position-relative m-0">
            <img
              src="/img/blue-half-circle-3.png"
              className="overlay-news position-absolute"
              alt="..."
            />
            <img
              src={"/img/" + p.img}
              className="card-img-top"
              alt="..."
            />
            <h3 className="card-title-news postcard-title text-nowrap text-white mb-sm-5 mb-md-3">
              {p.title}
            </h3>
          </figure>
          <div className="card-body bg-blue rounded-bottom">
            <p className="card-text postcard-text text-white">{p.resume}</p>
            <button type="button" className="btn-news">
              Læs mere
            </button>
          </div>
        </div>
      </article>
    );
  });

  return (
    <section className="PostCard container">
      <div className="card-deck">
        <div className="row">{PostsListe}</div>
      </div>
    </section>
  );
};

export default PostCard;
