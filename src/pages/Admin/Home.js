//IMPORT
//=======================================================

import React, { Component } from "react";
//import Board from "../../components/Board";
//import Brand from "../../components/Brand";
//import Buttons from "../../components/Buttons";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
//import Icons from "../../components/Icons";
//import Messages from "../../components/Messages";
//import Tile from "../../components/Tile";
import TileAdd from "../../components/TileAdd";
//import TileBig from "../../components/TileBig";
import TileEdit from "../../components/TileEdit";
import TilesManage from "../../components/TilesManage";
import TilesView from "../../components/TilesView";
import Wrapper from "../../components/Wrapper";

//CONTENT
//=======================================================

class Home extends Component {
    state = {
        placeholder: "This is only a template"
    }
    render() {
        return (
            <Wrapper>
                <Header />
                <TileAdd />
                <TileEdit />
                <TilesManage />
                <TilesView />
                <Footer />
            </Wrapper>
        );
    }
}

//EXPORT
//=======================================================
export default Home;