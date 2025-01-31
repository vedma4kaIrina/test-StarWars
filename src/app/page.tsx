import styles from './page.module.css';
import { Spin } from 'antd';
import Main from '@/lib/components/Main';
import { Suspense } from 'react';


export default async function Home() {

  const data = await fetch('https://swapi.dev/api/people');
  const dataJSON = await data.json();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Suspense fallback={<Spin spinning />}>
          <Main data={dataJSON} />
        </Suspense>
      </main>
    </div>
  );
}
