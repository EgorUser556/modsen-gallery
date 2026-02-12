import type { ReactNode } from 'react';
import React from 'react';

import styles from './ImageGrid.module.css';

interface Props {
  children: ReactNode;
}

const ImageGrid: React.FC<Props> = ({ children }: Props) => (
  <div className={styles.grid}>{children}</div>
);

export default ImageGrid;
