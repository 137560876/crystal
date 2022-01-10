import React, { useState } from 'react';
import GroupTitle from '@/components/group-title';
import Card from '@/components/link-card';
import styles from './index.less';
interface HomeProps {}
const Home: React.FC<HomeProps> = (props) => {
  return (
    <div>
      <div style={{ height: 240 }}>
        <GroupTitle title="开发指引文档" />
        <div>
          <div className={styles.cardContainer}>
            <Card
              title="开发规范指引"
              describe="写明了如何规范的开发一个模块，以及如何快速接受最新的项目"
              link="http://192.168.6.241:8080/doc/#/react"
            />
          </div>
          <div className={styles.cardContainer}>
            <Card
              title="组件文档"
              describe="介绍了组件使用的api，以及一些实现的案例"
              link="http://192.168.6.241:8080/doc/#/component/calender"
            />
          </div>
        </div>
      </div>
      <div style={{ height: 240 }}>
        <GroupTitle title="设计图总览" />
        <div>
          <div className={styles.cardContainer}>
            <Card
              title="ui规范设计"
              describe="ui的使用规范，组件/页面开发所要使用到的规范内容"
              link="http://192.168.6.241:8080/uicase/index.html"
            />
          </div>
          <div className={styles.cardContainer}>
            <Card
              title="采购要货单"
              describe="采购要货单的ui设计图"
              link="http://192.168.6.241:8080/purchase/index.html"
            />
          </div>
        </div>
      </div>
      <div style={{ height: 240 }}>
        <GroupTitle title="使用的技术文档纵览" />
        <div>
          <div className={styles.cardContainer}>
            <Card
              title="React官方文档"
              describe="React 是一个用于构建用户界面的 JavaScript 库。你可以在首页或教程中学习什么是 React."
              link="https://reactjs.org/docs/getting-started.html"
            />
          </div>
          <div className={styles.cardContainer}>
            <Card
              title="Antd组件库"
              describe="antd 是基于 Ant Design 设计体系的 React UI 组件库，主要用于研发企业级中后台产品。"
              link="https://ant.design/docs/react/introduce-cn"
            />
          </div>
          <div className={styles.cardContainer}>
            <Card
              title="DVA"
              describe="dva 首先是一个基于 redux 和 redux-saga 的数据流方案，然后为了简化开发体验，可以理解为一个轻量级的应用框架。"
              link="https://dvajs.com/guide/"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
