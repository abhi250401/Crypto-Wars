import { React, useEffect, useState } from "react";
import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import logo from "../img/cryptocurrency.png";
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from "@ant-design/icons";
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(true);

    const [screenSize, setScreenSize] = useState(undefined);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize <= 800) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    return (
        <div className="nav-container" >
            <div className="logo-container" style={{}}>
                <Avatar src={logo} size="small" />
                <Typography.Title level={2} className="logo" >
                    <Link to="/"><p className="navhead" style={{ color: "white", marginTop: "40px", fontSize: "1.5rem", }}>Crypto-Wars</p></Link>
                </Typography.Title>
                {(screenSize < 800) ? (<Button className="menu-control-container" style={{ marginLeft: "1em" }} onClick={() => setActiveMenu(!activeMenu)}>

                    <MenuOutlined />
                </Button>) : null
                }

            </div>
            {activeMenu && (

                <Menu theme="dark" style={{ backgroundColor: "#3D0000" }}>
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>

                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Cryptocurencies</Link>
                    </Menu.Item>

                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/Exchanges" style={{}}>Exchanges</Link>
                    </Menu.Item>

                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">Learn about crypto</Link>
                    </Menu.Item>
                </Menu>
            )}

        </div>
    )
}
export default Navbar;