import Link from 'next/link';

const HeaderApp = () => {
  return (
    <div>
      <Link href={'/'} style={{ color: 'white' }}>
        Test task Irina Lashytskaya {new Date().getFullYear()}
      </Link>
    </div>
  )
}

export default HeaderApp