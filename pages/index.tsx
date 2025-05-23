import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Echoes of Dawn</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center font-sans">
        <Link href="/card/demo" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
          Draw Demo Card
        </Link>
      </div>
    </>
  );
}
