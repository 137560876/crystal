import { IRouteComponentProps, history } from 'umi';
import { Layout, Menu } from 'antd';
import { useEffect } from 'react';
import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default function Home({ children }: IRouteComponentProps) {
  useEffect(() => {
    history.replace('/');
  }, []);
  return (
    <Layout
      style={{
        height: '100%',
      }}
    >
      <Sider
        theme="light"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className={styles.logo} />
        <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">首页</Menu.Item>
          {/* <SubMenu key="sub1" title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu> */}
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout} style={{ marginLeft: 200 }}>
        <Header
          className={styles.siteLayoutBackground}
          style={{ padding: 0, background: '#f5eeff' }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'auto',
            background: '#fff',
          }}
        >
          <div style={{ padding: 24, textAlign: 'center' }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          CRYSTAL ©2021 Created by QingXiaoyuan
        </Footer>
      </Layout>
    </Layout>
  );
}
