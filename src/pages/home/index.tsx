import styles from './index.less';

const Home = () => {
  return (
    <div style={{ padding: '20px 70px', overflow: 'auto' }}>
      <h2 className={styles.title}>v 1.0.0</h2>
      <h1>试运营阶段开放一下功能</h1>
      <li>测试包二维码发布</li>
      <li>选择产品打包</li>
      <li>一些攻略引导</li>
      <a
        href="http://192.168.23.120:8080/job/nova/build?delay=0sec"
        target="_blank"
      >
        点击就送---一个测试包
      </a>
      <div style={{ height: 20 }} />
      <h2 className={styles.title}>v 1.0.1</h2>
      <li>提供测试环境查询表</li>
    </div>
  );
};

export default Home;
