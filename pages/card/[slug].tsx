import { GetServerSideProps } from 'next';
import Head from 'next/head';

interface Props {
  slug: string;
}

export default function CardPage({ slug }: Props) {
  return (
    <>
      <Head>
        <title>Card {slug}</title>
      </Head>
      <div className="min-h-screen flex items-center justify-center font-serif">
        <div className="text-center p-8 border rounded shadow">
          <h1 className="text-2xl mb-4">Card: {slug}</h1>
          <p>This is a server rendered card page.</p>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as { slug: string };
  return { props: { slug } };
};
