import React from "react";
import "./App.css";
import { Layout, Header, Navigation, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterPage from './Components/footer';


function App() {
  return (

    <div className="demo-big-content">
      <Layout>


        <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white' }} to="/">My Portfolio</Link>} scroll>
          <Navigation>
            <Link to="/Portfolio">Portfolio</Link>
            <Link to="/Contact">Contact</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content container"></div>
          <Main />
        </Content>
        <div><FooterPage /></div>

      </Layout>
    </div>
  );
}

export default App;
