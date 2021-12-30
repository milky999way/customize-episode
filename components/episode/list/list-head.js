import Head from 'next/head';

export default function ListHead({ lang }) {
  return (
    <Head>
      <title>{lang === 'ja' ? 'ポコパンのエピソード' : lang === 'ko' ? 'xxx 에피소드' : 'xxx Episodes'}</title>
    </Head>
  )
}