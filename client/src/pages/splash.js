import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "css-doodle";
import "./splash.css";

const Doodle = ({ rule = "" }) => <css-doodle>{rule}</css-doodle>;


class Splash extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    setTimeout(
      function() {
          this.setState(prevState => ({ redirect: !prevState.redirect }));
      }
      .bind(this),
      5000
    );
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }
  
  render() {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        {this.renderRedirect()}
        <div className="logo-splash">
          <img src="../images/f.png" alt="F" className="mx-auto char letter-f bounce-in-top" />
          <img src="../images/i.png" alt="I" className="mx-auto char letter-i bounce-in-top" />
          <img src="../images/n.png" alt="N" className="mx-auto char letter-n bounce-in-top" />
          <img src="../images/d.png" alt="D" className="mx-auto char letter-d bounce-in-top" />
          <img src="../images/o.png" alt="O" className="mx-auto char letter-o bounce-in-top" />
        </div>
        <div className="confetti-splash">
          <Doodle
            rule={`
            :doodle {
              @grid: 50x1 / 50vmin;
              perspective: 23vmin;
            }

            background: @multi(@r(200, 240), (
              radial-gradient(
                @p(#e56b1f, #fcd02c, #e42c6a) 15%,
                transparent 50%
              ) @r(100%) @r(100%) / @r(1%, 3%, .1) @lr() no-repeat
            ));

            @size: 80%;
            @place-cell: center;
            
            border-radius: 50%;
            transform-style: preserve-3d;
            animation: scale-up 20s linear infinite;
            animation-delay: calc(@i() * -.4s);

            @keyframes scale-up {
              0% {
                opacity: 0;
                transform: translate3d(0, 0, 0) rotate(0);
              }
              10% { 
                opacity: 1; 
              }
              95% {
                transform:
                  translate3d(0, 0, @r(50vmin, 55vmin))
                  rotate(@r(-360deg, 360deg));
              }
              100% {
                opacity: 0;
                transform: translate3d(0, 0, 1vmin);
              }
            } `}
          />
        </div>
      </div>
    )
  }

}

export default Splash;