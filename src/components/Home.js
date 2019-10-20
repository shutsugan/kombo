import React, { Component } from "react";
import "../assets/scss/home.scss";
import { withRouter } from "react-router";
import Logo from "./../assets/images/kombo_blue_full.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.goToSearch = this.goToSearch.bind(this);
  }
  goToSearch() {
    this.props.history.replace("/search");
  }
  render() {
    return (
      <section className="test-container card">
        <header className="test-presentation">
          <img src={Logo} alt="kombo logo" />
          <h1>Test Kombo</h1>
          <p>
            Welcome young padawan ! If you read this line, you've already passed
            to the first step of recruitment ! Congratulations.
          </p>
          <p>
            First of all, you can fork this template to get your own project.
            (top right of codeSandBox interface)
            <br /> In order to get to know you more and to get an approximation
            of your development skills, we will need you to do this test :
          </p>
          <p>
            You will have to create and connect a search bar with our API, that
            will return an array of tickets which will be displayed on a result
            page. You have to create this result page, don't display it under
            the search bar. We count on you to also design these pages, remember
            to always be mobile-first and user-centric focused.
          </p>
        </header>
        <section className="test-requirements">
          <h2>Requirements :</h2>
          <ul className="card">
            <li>Use Redux</li>
            <li>At least 1 css animation</li>
            <li>Browser compatibility (Firefox, Chrome, Safari)</li>
            <li>ES6 JAVASCRIPT</li>
            <li>Comments you code if it's necessary, don't overabuse</li>
          </ul>
          <h3>Bonus</h3>
          <ul className="card">
            <li>SCSS mixins/variables/etc.. well used</li>
            <li>SEO friendly</li>
            <li>
              A README explaining us your issues, how you solve them, why have
              you choose this library, etc.
            </li>
          </ul>
          <p>
            Feel free to use some external libraries as Bootstrap, Simplegrid,
            TweenMax... <br />
            Don't hesitate to create other features as social networks bar,
            HeaderMenu,detail Tickets page, etc.. The more creative you are, the
            more we will appreciate !
          </p>
        </section>
        <section className="test-api">
          <h2>API :</h2>
          <p>
            We are using a dedicated API for our interviews, available at this
            address :
          </p>
          <p>
            <strong>https://interview.sobus.fr:8080/search</strong>
          </p>
          <p>
            On submit of the search, we will POST the data to The API and it
            will return an Array of Tickets. Careful, informations must be sent
            as x-www-form-urlEncoded format.
            <br />
            POST request :
            <br />
            date: YOUR DATE(14-05-09),
            <br />
            departure: DEPARTURE_CITY(Marseille),
            <br />
            arrival: ARRIVAL_CITY(Lyon),
            <br />
            <strong>
              You will get tickets only for a trip "Marseille-Lyon" or
              "Paris-Lille" and for the date "14-05-19".
            </strong>
          </p>
        </section>
        <footer className="test-footer">
          <p>
            If you're feeling ready for this, your journey starts here ! Have
            fun, don't stress and good luck. <br />
            If you need additional information please do not hesitate to contact
            us.
            <br />
            After your work is finished, send it to us at jobs.tech@kombo.co
          </p>
          <button className="test-button" onClick={this.goToSearch}>
            Start
          </button>
        </footer>
      </section>
    );
  }
}

export default withRouter(Home);
