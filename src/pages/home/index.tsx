import styles from './index.less';

const Home = () => {
  return (
    <div style={{ padding: '20px 70px', overflow: 'auto' }}>
      <h2 className={styles.title}>好消息好消息,水晶指引站开始运营辣</h2>
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
    </div>
  );
};

export default Home;
