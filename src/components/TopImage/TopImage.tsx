import type { ReactNode } from 'react';

import styles from './TopImage.module.css';

interface Props {
  children: ReactNode;
}

const TopImage = ({ children }: Props) => <section className={styles.image}>{children}</section>;

export default TopImage;
