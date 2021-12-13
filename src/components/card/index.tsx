import React from 'react';
import { Card } from 'antd';
import styles from './index.less';

interface Props {
  content?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
const CustomCard: React.FC<Props> = (props) => {
  return (
    <Card
      className={styles.card}
      hoverable
      style={props.style}
      onClick={props.onClick}
    >
      {props.children}
    </Card>
  );
};

export default CustomCard;
