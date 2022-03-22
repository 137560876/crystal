import React from 'react';
import android from '@/resource/img/product/android.png';
import ios from '@/resource/img/product/ios.png';
import { Descriptions, Tag } from 'antd';
import QRCode from 'qrcode.react';
import styles from '../../index.less';

interface DefaultPageProps {
  version: string;
  androidAddress: string;
  iosAddress: string;
}

const DefaultPage: React.FC<DefaultPageProps> = (props) => {
  const { version, androidAddress, iosAddress } = props;
  return (
    <div className={styles.release}>
      <div className={styles.androidContainer}>
        <div className={styles.imgContainer}>
          <img alt="android" src={android} />
        </div>
        <Descriptions title="安卓测试包" column={2}>
          <Descriptions.Item label="平台">
            <Tag color="magenta">安卓</Tag>
            <Tag color="red">鸿蒙</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="版本">
            <Tag color="purple">{version}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="说明">
            请使用手机扫码下载安卓测试apk包
          </Descriptions.Item>
        </Descriptions>
        <div className={styles.qrcodeContainer}>
          <div className={styles.qrcodeCard}>
            <QRCode size={200} bgColor="#ffffff" value={androidAddress} />
          </div>
        </div>
      </div>
      <div className={styles.iosContainer}>
        <div className={styles.imgContainer}>
          <img alt="ios" src={ios} />
        </div>
        <Descriptions title="苹果测试包" column={2}>
          <Descriptions.Item label="平台">
            <Tag color="magenta">ios</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="版本">
            <Tag color="purple">{version}</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="说明">
            请使用iphone的safari浏览器扫描二维码或直接用iphone的扫码功能安装app
          </Descriptions.Item>
        </Descriptions>
        <div className={styles.qrcodeContainer}>
          <div className={styles.qrcodeCard}>
            <QRCode size={200} bgColor="#ffffff" value={iosAddress} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefaultPage;
