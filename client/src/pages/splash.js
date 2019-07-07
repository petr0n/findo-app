import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import "css-doodle";

const Doodle = ({ rule = "" }) => <css-doodle>{rule}</css-doodle>;



class Splash extends Component {
  state = {
    redirect: false
  }
  
  
  // TimeOut = () => {
  //   const page = useState("login");
  //   return page;
  // }
  // // setTimeout(this.TimeOut.bind(this), 3000);


  componentDidMount() {
    setTimeout(
      function() {
          this.setState(prevState => ({ redirect: !prevState.redirect }));
      }
      .bind(this),
      4000
  );
  }


  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/login' />
    }
  }
  
  render() {
    console.log('splash this.state.redirect', this.state.redirect)
    return (
      <div className="flex items-center justify-center w-full h-screen">{this.renderRedirect()}
        <div className="">
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
        {/* <Doodle
        rule={`
          :doodle {
            @grid: 25x1 / 18vmin;
          }
          :container {
            perspective: 30vmin;
          }

          @place-cell: center;
          @size: 100%;

          border: @r(2px) solid @pd(
            #e56b1f, #fcd02c, #e42c6a, #ffffff
          );
          @random(.1) { border-style: dashed; }
          @random(.1) { border-style: dotted; }
          @random(.1) {
            border-width: @p(3px, 4px);
            border-style: double;
          }

          border-radius: 50%;
          transform-style: preserve-3d;
          will-change: transform, opacity;
          animation: scale-up 7s linear infinite;
          animation-delay: calc(-7s / @size() * @i());

          @keyframes scale-up {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            95% {
              transform:
                translate3d(0, 0, 45vmin)
                rotateX(calc(@p(-1, 1) * @r(30deg, 330deg)))
                rotateY(calc(@p(-1, 1) * @r(30deg, 330deg)))
                rotateZ(calc(@p(-1, 1) * @r(30deg, 330deg)))
            }
          }`}
      /> */}
      </div>
    );
  }

}

export default Splash;