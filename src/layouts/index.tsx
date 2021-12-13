import { IRouteComponentProps } from 'umi';
import styles from './index.less';

export default function Layout({ children }: IRouteComponentProps) {
  console.log(123);

  return (
    <div id="12" className={styles.root}>
      {children}
    </div>
  );
}
