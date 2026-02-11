import type { ReactNode } from 'react';

import styles from './ImageGrid.module.css';

interface Props {
  children: ReactNode;
}

const ImageGrid = ({ children }: Props) => <div className={styles.grid}>{children}</div>;

export default ImageGrid;
