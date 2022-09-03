import React from 'react';
import { Layout, Image, Typhography } from "antd";
import Logo from "./images/mafia-png-transparent-mafia-images-16792.png"
import Home from './components/Home';
import styles from './styles';

const { Title } = Typhography;
const { Header, Footer } = Layout;

const App = () => {
    return (
        <Layout>
            <Header>
                <Image width="45" preview="false" src={Logo} />
                &nbsp;
                <Title>TheGMDen</Title>
            </Header>
            <Home />
            <Footer>2021 The Gentlemens Den</Footer>
        </Layout>
    )
}

export default App;
