import React from 'react';
import { Layout, Image, Typhography } from "antd";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
    return (
        <Layout>
            <Header>
                <Image width="45" preview="false" src={Logo} />
            </Header>
        </Layout>
    )
}

export default App;
