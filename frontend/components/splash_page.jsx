import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import {Route, Link} from 'react-router-dom';


export default class Splash extends React.Component {

  constructor() {
    super();
    this.state = {
      clicked: false
    };
  }

  componentDidMount() {
    // this.container.style.background = window.background;
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {

    let nav = (
      <div className="close-button">
        <img src={window.closeIcon} onClick={this.handleClick.bind(this)}/>
      </div>
    );

    let backdrop = (
      <div className="sidepanel-backdrop"></div>
    );


    return (
      <div className="wrap">
        <header className="navbar navbar-fixed-top navbar-semi-transparent navbar-default">
          <div className="container">
            {this.state.clicked ? backdrop : ""}
            <div className="navbar-header">
              <Link to="/" className="navbar-brand">
                <img className="picture-logo" src={window.spotifyWhite} />
                <div className="title-logo">That Music App</div>
              </Link>
              <button onClick={this.handleClick.bind(this)} type="button" className="navbar-toggle">
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
                <span className='icon-bar'></span>
              </button>
            </div>
            <nav className={this.state.clicked ? "navbar-sidepanel open" : "navbar-sidepanel close"}>
              {this.state.clicked ? nav : ""}
              <GreetingContainer/>
            </nav>
          </div>
        </header>

        <section>
          <div className="hero hero-home simplified">
            <div className="container container-simplified">
              <div className="row-simplified">
                <h1>Music for everyone.</h1>
                <h4>Hundreds of songs. No credit card needed.</h4>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
// } () => {
//   let background = `background: ${window.background}`;
//   return (
//     <div className="app-container">
//       <div className="container navbar-fixed-top">
//         <div className="logo-container">
//           <div className="logo">
//             <img className="picture-logo" src={window.spotifyWhite} />
//             <div className="title-logo">That music app</div>
//           </div>
//         </div>
//         <GreetingContainer />
//       </div>
//       <section className="front-page">
//         <h1>Music for everyone.</h1>
//         <h4>Hundreds of songs. No credit card needed.</h4>
//         <a href="#" className="green-button">GET THAT MUSIC APP FREE</a>
//       </section>
//     </div>
//   );
// };

// export default Splash;
