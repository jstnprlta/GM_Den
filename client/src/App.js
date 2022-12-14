
import React from 'react';
import { Layout, Image, Typography } from "antd";

import Logo from "./images/mafia-png-transparent-mafia-images-16792.png";
import Home from "./components/Home";
import styles from "./styles";


const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {

  return (
    <Layout style={styles.layout}>
        <Header style={styles.header}>
            <Image style={styles.image} preview={false} src={Logo} width={45} />
            &nbsp;
            <Title styles={styles.title}>TheGMDen</Title>
        </Header>
        <Home />
        <Footer style={styles.footer}>2022 The GentalMens Den</Footer>
    </Layout>
  )
}

export default App;
