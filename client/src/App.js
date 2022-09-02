import React from "react";
import { Layout, Image, Typhography } from "antd";
import Logo from "./images/mafia-png-transparent-mafia-images-16792.png";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <Image width="45" preview="false" src={Logo} />
        &nbsp;
        <Title>GMDen</Title>
      </Header>
    </Layout>
  );
};

export default App;
