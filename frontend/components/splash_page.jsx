import React from 'react';
import { connect } from 'react-redux';
import GreetingContainer from './greetings/greeting_container';
import { Link } from 'react-router-dom';
import { login } from '../actions/session_actions';



class Splash extends React.Component {

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

  submitDemoForm(e) {
    e.preventDefault();
    this.props.login({username: "pikachu", password: "pikachu"});
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
            <div className="greetings">
              <GreetingContainer/>
            </div>
          </div>
        </header>

        <section>
          <div className="hero hero-home simplified">
            <div className="splash-cover"></div>
            <nav className={this.state.clicked ? "navbar-sidepanel open" : "navbar-sidepanel close"}>
              {this.state.clicked ? nav : ""}
              <ul className="nav navbar-nav navbar-right nav-main larger-greeting larger-greeting">
                <li>
                  <a className="auth-link sidepanel-bold" href="https://angel.co/apollos-kim?al_content=view+your+profile&al_source=transaction_feed%2Fnetwork_sidebar">AngelList</a>
                </li>
                <li>
                  <a className="auth-link sidepanel-bold" href="https://www.linkedin.com/in/apollos-kim-2bb1a4171/">Linkedin</a>
                </li>
                <li>
                  <a className="auth-link sidepanel-bold" href="https://github.com/apolloskim">Github</a>
                </li>
                <li role="separator" className="divider sidepanel-divider"></li>
                <li>
                  <Link className="auth-link sidepanel-normal" to="/signup">Sign up</Link>
                </li>
                <li>
                  <Link className="auth-link sidepanel-normal" to="/login">Log in</Link>
                </li>
              </ul>
            </nav>
            {this.state.clicked ? backdrop : ""}
            <div className="container container-simplified">
              <div className="row-simplified">
                <h1>Music for everyone.</h1>
                <h4>Hundreds of songs. No credit card needed.</h4>
                <a href="#" onClick={this.submitDemoForm.bind(this)} className="demo-button">GET THAT MUSIC APP FREE</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mdp = dispatch => {
  return {
    login: user => dispatch(login(user))
  };
};


export default connect(null, mdp)(Splash);
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
