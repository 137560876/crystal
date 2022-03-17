import styles from '../index.less';
import android from '@/resource/img/product/android.png';
import ios from '@/resource/img/product/ios.png';
import { Descriptions, Tag } from 'antd';
import QRCode from 'qrcode.react';

const I8Release = () => {
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
            <Tag color="purple">5.1.30</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="备注">
            请使用手机扫码下载安卓测试apk包
          </Descriptions.Item>
        </Descriptions>
        <div className={styles.qrcodeContainer}>
          <div className={styles.qrcodeCard}>
            <QRCode
              size={200}
              bgColor="#ffffff"
              value="http://192.168.8.68:8080/ngapp/android/dev/5.1.30.0/I8.apk"
            />
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
            <Tag color="purple">5.1.30</Tag>
          </Descriptions.Item>
          <Descriptions.Item label="备注">
            请使用iphone的safari浏览器扫描二维码或直接用iphone的扫码功能安装app
          </Descriptions.Item>
        </Descriptions>
        <div className={styles.qrcodeContainer}>
          <div className={styles.qrcodeCard}>
            <QRCode
              size={200}
              bgColor="#ffffff"
              value="itms-services://?action=download-manifest&url=https://www.qxy.world:9999/resource/i8.plist"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default I8Release;
