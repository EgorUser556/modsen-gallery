import React from 'react';

import styles from './ErrorBoundary.module.css';

interface Props {
  children: React.ReactNode;
}
interface State {
  isError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { isError: false };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { children } = this.props;
    const { isError } = this.state;

    if (isError) {
      return (
        <div className={styles.root} role="alert">
          <div className={styles.title}>Что-то пошло не так</div>
          <div className={styles.text}>Попробуйте перезагрузить страницу.</div>
        </div>
      );
    }

    return children;
  }
}

export default ErrorBoundary;
