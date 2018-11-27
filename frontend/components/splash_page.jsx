import React from 'react';
import GreetingContainer from './greetings/greeting_container';
import {Route} from 'react-router-dom';


export default class Splash extends React.Component {

  componentDidMount() {
    // debugger
    // this.container.style.background = window.background;
  }

  render() {
    return (
      <div className="app-container" ref={container => this.container = container}>
        
        <div className="container navbar-fixed-top">
          <div className="logo-container">
            <div className="logo">
              <img className="picture-logo" src={window.spotifyWhite} />
              <div className="title-logo">That music app</div>
            </div>
          </div>
          <GreetingContainer />
        </div>
        <section className="front-page">
          <h1>Music for everyone.</h1>
          <h4>Hundreds of songs. No credit card needed.</h4>
          <a href="#" className="green-button">GET THAT MUSIC APP FREE</a>
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
