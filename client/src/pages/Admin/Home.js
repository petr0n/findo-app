import React, { Component } from "react";


//CONTENT
//=======================================================

class Home extends Component {
    state = {
        placeholder: "This is only a template"
    }
    componentDidMount(){
      // add logic
      // get new tile suggestion via axios 
      // loop through and add to <TileEdit />
    }

    
    render() {
        return (
          <div>
            <h2>Admin Home</h2>
            {/*
            <Header />
            <AdminNav />
            
            <TileWrapper tiles={tiles} />
            */}
          </div>
        );
    }
}

//EXPORT
//=======================================================
export default Home;