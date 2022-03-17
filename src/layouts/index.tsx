import { IRouteComponentProps, history } from 'umi';
import { Layout, Menu } from 'antd';
import { useEffect } from 'react';
import logo from '@/resource/img/layout/logo.png';
import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const productList = ['i8', 'mi8', 'i6s', 'd6c', 'i6', 'i6p'];

export default function Home({ children }: IRouteComponentProps) {
  useEffect(() => {
    history.replace('/home');
  }, []);

  const handleInPage = (item: { key: string; keyPath: Array<string> }) => {
    const { key, keyPath } = item;
    if (keyPath.length === 1) {
      history.push('/' + key);
    } else {
      history.replace('/' + keyPath.reverse().join('/'));
    }
  };

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
        <div className={styles.logoContainer}>
          <img alt="logo" src={logo}></img>
        </div>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" onClick={handleInPage}>
            首页
          </Menu.Item>
          <SubMenu key="product" title="产品下载">
            {productList.map((item) => (
              <Menu.Item key={item} onClick={handleInPage}>
                {item}
              </Menu.Item>
            ))}
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout} style={{ marginLeft: 200 }}>
        <Header
          className={styles.siteLayoutBackground}
          style={{
            padding: 0,
            background: '#fff7db',
            boxShadow: '0px 0px 6px #ddd',
          }}
        />
        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'hidden',
            background: '#fff',
          }}
        >
          <div style={{ height: '100%' }}>{children}</div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          CRYSTAL ©2021 Created by QingXiaoyuan 有问题联系青小渊
        </Footer>
      </Layout>
    </Layout>
  );
}
