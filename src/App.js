
import './App.css';
import { Switch, Router, Link } from 'react-router-dom';
import { Layout, Space, Typography } from 'antd';
import { Navbar, Exchanges, Homepage, Cryptocurrencies, News } from "./components";
import { Route } from 'react-router';
import CryptoDetails from './components/Cryptodetails';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />

      </div>
      <div className="main" style={{ width: "100%" }}>
        <Layout >
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer" style={{ position: "absolute" }}>
          <div className="transom">  <Typography.Title level={4} style={{ color: "white", textAlign: 'center' }}>
            Crypto-Wars<br />
          </Typography.Title>
            <Space>
              <Link to="/" style={{ color: "#FF9292" }}>Home</Link>
              <Link to="/exchanges" style={{ color: "#FF9292" }}>Exchanges</Link>
              <Link to="/news" style={{ color: "#FF9292" }}>News</Link>
            </Space>
            <a href="https://www.linkedin.com/in/abhishek-rai-889799168/" target="_blank"><p className="cred" style={{ color: "white" }}>Made by Abhishek Rai 💖</p></a>
          </div>
        </div></div>
    </div>
  );
}

export default App;
