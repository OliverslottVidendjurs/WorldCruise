import React from 'react';
import "./Kontakt.css"
const Kontakt = () => {
    return (
        <div className="container-fluid row">
            <br />
            <br />
            <section className="col-12 col-md-6 b ma3 imgfadf ">
                <div className=" col-d">
                    <div className="container-fluid">
                        <h1 className=" col-12 col321 m-3 p-3"><b>Kontaktoplysninger</b></h1>

                        <div className="col-12 col-md-12 col321">
                            <br />
                            <br />
                            <p><i className="fas fa-map-marker-alt p-2 "></i> xxx 7, 8500 Grenaa</p>
                            <br />
                            <p> <i className="fas fa-envelope p-2"></i> worldcruiseinc@gmail.com</p>
                            <br />
                            <p> <i className="fas fa-phone-alt p-2"></i> +45 xx xx xx xx</p>
                            <br />
                            <br />
                            <h2 className="margin">Følge os på:</h2>
                            <a href="/#">
                                <i className="fab fa-facebook p-2 rounded-circle" ></i>
                            </a>
                            <a href="/#">
                                <i className="fab fa-instagram  p-2 rounded-circle"></i></a>
                            <a href="/#">
                                <i className="fab fa-youtube p-2 rounded-circle"></i></a>
                            <a href="/#">
                                <i className="fab fa-twitter-square p-2 rounded-circle  "></i></a>
                        </div>
                    </div>
                </div>
            </section>
            <form className="col-12 col-md-5 text offset-1 offse">
                <br />

                <div>
                    <span><b>Fornavn</b></span>
                    <div className="form col-10">
                        <input className="col-12 col-md-12 col-lg-10" type="text" name="name" placeholder="Skriv her..." autocomplete="off" required />
                        <label for="name" className="label-name">

                        </label>
                    </div>
                </div>
                <br />

                <span><b>Efternavn</b></span>
                <div className="form col-10">
                    <input placeholder="Skriv her..." className="col-12 col-md-12 col-lg-10" type="text" name="text" autocomplete="off" required />
                    <label for="name" className="label-name">

                    </label>
                </div>
                <br />



                <span><b>E-mail</b></span>
                <div className="form col-10">
                    <input placeholder="Skriv her..." className="col-12 col-md-12 col-lg-10" type="text" name="text" autocomplete="off" required />
                    <label for="name" className="label-name">

                    </label>
                </div>


                <br />
                <div >
                    <label><b>Beskriv dit problem</b></label></div>

                <textarea className="col-12 col-md-12 col-lg-10 texta" placeholder="Beskriv dit besked" required></textarea>

                <br />
                <br />
                <div
                    className="g-recaptcha"
                    data-sitekey="6LfbPMAUAAAAAK5DNTAJLhEricHM260vijYuIIC-"
                ></div>

                <br />

                <button className="btn ma textb submit" type="submit">Send</button>

            </form>
        </div>
    );
}


export default Kontakt