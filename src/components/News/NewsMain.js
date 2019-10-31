import React from "react";
import "./NewsMain.css";

const NyhedMain = props => {
  let NyhedMain = props.alleNyhederProp.map(p => {
    return p.id === 1 ? (
      <article className="NyhedMain mb-4 container px-0" key={p.id}>
        <figure className="position-relative">
          <img
            src="/img/copenhagen-slim.jpg"
            alt="Nyhed"
            className="img-fluid w-100 d-none d-sm-block rounded-bottom"
          />
          <img
            src="/img/water.jpg"
            alt="Water"
            className="img-fluid w-100 d-block d-sm-none"
          />
          <img
            src="/img/logo-cruise.png"
            alt="logo-cruise"
            className="overlay-main overlay-logo d-block d-sm-none"
          />
          <div className="overlay-main black-box d-none d-sm-block p-sm-5 p-md-2 p-lg-4">
            <h3>{p.title}</h3>
            <p className="d-sm-none d-md-block">{p.resume}</p>
            <button type="button" className="btn-main-news mt-3">
              Læs mere
            </button>
          </div>
        </figure>
        <h2 className="text-center d-block d-sm-none">Nyheder</h2>
      </article>
    ) : null;
  });

  return <section>{NyhedMain}</section>;
};

export default NyhedMain;
