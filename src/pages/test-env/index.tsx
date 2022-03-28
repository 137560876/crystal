/*
 * @Autor: qxy
 * @Date: 2022-03-28 16:16:50
 * @LastEditors: qxy
 * @LastEditTime: 2022-03-28 16:30:29
 * @description: 测试环境表
 */
import { Table } from 'antd';
import styles from './index.less';

const TestEnv = () => {
  const dataSource = [
    {
      key: '1',
      code: '760404',
      url: 'http://192.168.6.16:8000/web',
      accout: '0001',
      remark: '',
    },
    {
      key: '2',
      code: '760032',
      url: 'http://192.168.6.123:8000/web',
      accout: '0002',
      remark: '',
    },
  ];

  const columns = [
    {
      title: '企业号',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'pc端地址',
      dataIndex: 'url',
      key: 'url',
      render: (url: string) => (
        <a href={url} target="_blank">
          {url}
        </a>
      ),
    },
    {
      title: '推荐帐套',
      dataIndex: 'accout',
      key: 'accout',
    },
    {
      title: '备注',
      dataIndex: 'remark',
      key: 'remark',
    },
  ];

  return (
    <div className={styles.testEnv}>
      <h1 className={styles.title}>测试环境参考表</h1>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  );
};

export default TestEnv;
