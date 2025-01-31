import styles from '@/app/page.module.css';
import { IPerson } from '@/lib/types/person';
import Person from '@/lib/components/Person';

export default async function Page({ params}) {

  const {id} = await params;

  const data = await fetch(`https://swapi.dev/api/people/${id}`);
  const dataJSON: IPerson  = await data.json();


  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Person dataPerson={dataJSON}/>
      </main>
    </div>

  )
}