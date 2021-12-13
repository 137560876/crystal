import React from 'react';
import styles from './index.less';

interface GroupTitleProps {
  title?: string;
}
const GroupTitle: React.FC<GroupTitleProps> = (props) => {
  const { title } = props;
  return <div className={styles.groupTitle}>{title}</div>;
};

export default GroupTitle;
