import Link from 'next/link';
import Router from 'next/router';
import {Button} from 'antd';
import styles from '../styles/Home.module.css'

export default function Home() {
  const handleClick = () => {
    Router.push({
      pathname: '/a?id=2',
      query: {
        id: 2
      }
    }, '/a/2');
  }
  return (
    <div>
      <Link className={styles.title} as={'/a/1'} href={'/a?id=1'}>
        to A
      </Link>
      <Button onClick={handleClick}>test a</Button>
    </div>
  )
}
