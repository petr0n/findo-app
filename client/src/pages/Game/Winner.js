import React, { Component } from "react";
import "css-doodle";

const Doodle = ({ rule = "" }) => <css-doodle>{rule}</css-doodle>;


class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user
    }
  };

  render() {
    console.log('Winner this.state.user', this.state.user);
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <div className="background winner-box mx-auto rounded px-3 py-10 w-full flex flex-col items-center justify-center">
          <h1 className="text-5xl phosphate text-brand-orange">WINNER!</h1>
          <p>You got FINDO!</p>
          <div className="btn-double cursor-pointer text-2xl text-brand-red m-8 px-3 py-1 hover_bg-brand-yellow" onClick={() => this.props.handlePageChange("gameselect", this.props.user)}>
            <div></div><div></div>Play again
          </div>
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
    );
  }
}

export default Winner;