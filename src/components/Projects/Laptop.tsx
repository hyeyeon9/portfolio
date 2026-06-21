import type { RefObject } from 'react';
import styles from './Laptop.module.css';

interface Props {
  laptopRef: RefObject<HTMLDivElement | null>;
  screenContentRef: RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
}

export default function Laptop({ laptopRef, screenContentRef, children }: Props) {
  return (
    <div ref={laptopRef} className={styles.laptopWrap}>
      <div className={styles.lid}>
        <div className={styles.screenInner}>
          <div ref={screenContentRef} className={styles.screenContent}>
            {children}
          </div>
        </div>
      </div>
      <div className={styles.hinge} />
      <div className={styles.deck} />
    </div>
  );
}
