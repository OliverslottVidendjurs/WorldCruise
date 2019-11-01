import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="About container Aboutsection-main-container">

      <div className="d-flex bg-about-box position-relative rounded mt-4 mb-4">
        <article className="m-md-5 m-sm-1 AboutTekst-padding">
          <h2 className="text-center AboutHeader-decoration"><span>Om os</span></h2>
          <p className="AboutTekst-column">
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam eaque i psa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat vol Ut enim ad minima
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, consequatur? Quis autem vel eum iure reprehenderit qui
            in ea voluptate velit esse quam nihil qui dolorem eum fugiat quo
            voluptas nulla pariatur?
            </p>
        </article>
        <img
          src="/Images/About/blue-circle.png"
          alt=""
          className="blue-circle position-absolute d-none d-sm-block"
        />
      </div>

      <section className="w-100 d-flex AboutSection-flex-container">
        <div className=" AboutSection-width-container1  d-flex flex-column">
          <div className=" w-100 bg-about-box position-relative rounded mb-3">
            <article className="m-md-5 m-sm-1 AboutTekst-section2">
              <img src="/Images/About/ship.jpg" alt="" className="rounded-circle article-img p-2" />
              <h3 className=" text-center AboutHeader-decoration"><span>Overskrift</span></h3>
              <p>
                "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite. "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite.
                "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite
            </p>
            </article>
            <img
              src="/Images/About/blue-circle.png"
              alt=""
              className="blue-circle position-absolute d-none d-sm-block"
            />
          </div>
          <div className=" bg-about-box position-relative rounded AboutTekst-marginbottom">
            <article className="m-md-5 m-sm-1 AboutTekst-section2">
              <img src="/Images/About/ship.jpg" alt="" className="rounded-circle article-img p-2" />
              <h3 className="text-center AboutHeader-decoration"><span>Overskrift</span></h3>
              <p>
                "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite. "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite.
                "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite
            </p>
            </article>
            <img
              src="/Images/About/blue-circle.png"
              alt=""
              className="blue-circle position-absolute d-none d-sm-block" />
          </div>
        </div>
        <div className="AboutSection-width-container2 d-flex">
          <div className="w-100 bg-about-box position-relative rounded">
            <article className="m-md-5 m-sm-1 AboutTekst-section2">
              <img src="/Images/About/ship.jpg" alt="" className="rounded-circle article-img p-2" />
              <h3 className="text-center AboutHeader-decoration"><span>Overskrift</span></h3>
              <p>
                "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite. "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite.
                "Sed ut perspiciatis unde om natus error sit voluptatem ntium
                doloremque laudant rem aperiam, eaque i psa quae ab illo veritatis
                et quasi archite
            </p>
            <h3 className="text-center AboutHeader-decoration"><span>Overskrift</span></h3>
            <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam eaque i psa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo. Nemo ipsam voluptatem quia voluptas sit aspernatur aut
            odit aut fugit, sed quia consequuntur magni dolores voluptatem
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
            dolor sit amet, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat vol Ut enim ad minima
            veniam, quis nostrum exercitationem ullam corporis suscipit
            laboriosam, consequatur? 
            </p>
            </article>
            <img
              src="/Images/About/blue-circle.png"
              alt=""
              className="blue-circle position-absolute d-none d-sm-block" />
          </div>
        </div>
      </section>


    </div>
  );
};

export default About;
