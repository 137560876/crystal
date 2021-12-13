import React from 'react';
import Card from '../card';
import styles from './index.less';

interface Props {
  link?: string;
  title?: string;
  describe?: string;
}
const LinkCard: React.FC<Props> = (props) => {
  const { link, title, describe } = props;
  const handleOnClickCard = () => {
    if (link) {
      window.open(link);
    }
  };
  return (
    <Card onClick={handleOnClickCard}>
      <div>
        <div className={styles.title}>{title}</div>
        <div className={styles.describe}>{describe}</div>
      </div>
    </Card>
  );
};

export default LinkCard;
