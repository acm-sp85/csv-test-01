import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import DragAndDrop01 from './DragAndDrop01';
import DragAndDrop02 from './DragAndDrop02';

import csvInfo from '/myOutputFile.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <DragAndDrop01 data={csvInfo} />
      <DragAndDrop02 data={csvInfo} />
    </div>
  );
}
