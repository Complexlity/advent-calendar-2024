import { Analytics } from '@vercel/analytics/react';
import Snowfall from 'react-snowfall';
import Head from 'next/head';
import Header from '../components/Header';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Calendar } from '../components/Calendar';
import { AppConfig } from '../lib/AppConfig';
import { GetTokens } from '../components/GetTokens';
import { Hurricane } from 'next/font/google';

const hurricane = Hurricane({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
export default function Home() {
  const start = 1;
  const days = new Array(24).fill(0).map((d, i) => i + start);
  const searchParams = useSearchParams();

  return (
    <>
      <Head>
        <title>2024 Unlock Advent Calendar</title>
        <meta property='og:title' content={AppConfig.name} key='title' />
        <meta
          property='og:description'
          content={AppConfig.description}
          key='description'
        />
        <meta
          property='og:image'
          content={`${AppConfig.siteUrl}/images/advent-2023.png`}
        />
        <meta property='og:url' content={AppConfig.siteUrl} />
        <meta property='og:type' content='website' />

        <meta property='eth:nft:collection' content={AppConfig.name} />
        {/* Day1 contract address */}
        <meta
          property='eth:nft:contract_address'
          content='0x31291b6bccc00e4c10c769746671448498fea2d7'
        />
        <meta
          property='eth:nft:creator_address'
          content='unlock-protocol.eth'
        />
        <meta property='eth:nft:mint_url' content={AppConfig.siteUrl} />
        <meta property='eth:nft:mint_status' content='live' />
        <meta property='eth:nft:schema' content='erc721' />
        <meta property='eth:nft:chain' content='base' />
        <link rel='shortcut icon' href='/favicon.ico' type='image/png' />
      </Head>
      <body className='bg-[#141b26]'>
        <Snowfall
          style={{
            position: 'fixed',
            width: '100vw',
            height: '100vh',
          }}
        />
        <div className='flex flex-col'>
          <div className=''>
            <Header />
            <main className='container relative flex-1 flex flex-col gap-4'>
              <div className='text-white'>
                <h1 className={`${hurricane.className} text-8xl text-white`}>
                  Your Advent Calendar 2024
                </h1>
                <p className='mt-4 ml-2 text-xl font-semibold'>
                  Brought to you by Unlock DAO, ETH Bolivia & The ALANA Project
                </p>
              </div>
              <GetTokens />
              <Calendar />
            </main>
            <footer className='relative pt-16 text-white font-semibold w-full pb-16 flex justify-center'>
              <Link target='_blank' href='https://unlock-protocol.com'>
                <svg
                  width='147'
                  height='32'
                  viewBox='0 0 147 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M33.0098 11.6774V15.0637H0V11.6774H33.0098ZM23.6532 0H29.3779V20.5945C29.3779 22.852 28.8445 24.8376 27.7775 26.5512C26.7105 28.2649 25.2177 29.604 23.2992 30.5685C21.3807 31.5228 19.139 32 16.5742 32C14.0093 32 11.7676 31.5228 9.84908 30.5685C7.93056 29.604 6.43781 28.2649 5.37083 26.5512C4.3141 24.8376 3.78574 22.852 3.78574 20.5945V0H9.49513V20.1174C9.49513 21.4308 9.78239 22.6006 10.3569 23.6267C10.9417 24.6529 11.7625 25.4584 12.8192 26.0433C13.8862 26.6179 15.1378 26.9052 16.5742 26.9052C18.0207 26.9052 19.2724 26.6179 20.3291 26.0433C21.3961 25.4584 22.2169 24.6529 22.7914 23.6267C23.3659 22.6006 23.6532 21.4308 23.6532 20.1174V0Z'
                    fill='white'
                  />
                  <path
                    d='M42.1371 17.67V31.5228H36.5662V7.88071H41.8908V11.898H42.1678C42.7116 10.5743 43.5785 9.52253 44.7686 8.74267C45.969 7.9628 47.4515 7.57287 49.2161 7.57287C50.8473 7.57287 52.2683 7.92176 53.4789 8.61953C54.6998 9.3173 55.6436 10.328 56.3105 11.6518C56.9876 12.9755 57.3211 14.5814 57.3108 16.4695V31.5228H51.7399V17.3314C51.7399 15.7512 51.3295 14.5147 50.5088 13.6219C49.6983 12.7292 48.5749 12.2828 47.1385 12.2828C46.1639 12.2828 45.297 12.4983 44.5378 12.9293C43.7888 13.35 43.1989 13.9606 42.768 14.7609C42.3474 15.5613 42.1371 16.531 42.1371 17.67Z'
                    fill='white'
                  />
                  <path d='M68.092 0V31.5228H62.5211V0H68.092Z' fill='white' />
                  <path
                    d='M83.6785 31.9846C81.3701 31.9846 79.3695 31.4767 77.6767 30.4608C75.9839 29.4449 74.6707 28.0237 73.7371 26.1972C72.8137 24.3707 72.352 22.2363 72.352 19.7941C72.352 17.3519 72.8137 15.2124 73.7371 13.3757C74.6707 11.5389 75.9839 10.1126 77.6767 9.09668C79.3695 8.08081 81.3701 7.57287 83.6785 7.57287C85.9869 7.57287 87.9875 8.08081 89.6803 9.09668C91.3731 10.1126 92.6812 11.5389 93.6045 13.3757C94.5381 15.2124 95.0049 17.3519 95.0049 19.7941C95.0049 22.2363 94.5381 24.3707 93.6045 26.1972C92.6812 28.0237 91.3731 29.4449 89.6803 30.4608C87.9875 31.4767 85.9869 31.9846 83.6785 31.9846ZM83.7093 27.5209C84.9609 27.5209 86.0074 27.1772 86.8486 26.4897C87.6899 25.7919 88.3158 24.8581 88.7261 23.6883C89.1468 22.5185 89.3571 21.2153 89.3571 19.7787C89.3571 18.3319 89.1468 17.0236 88.7261 15.8538C88.3158 14.6737 87.6899 13.7348 86.8486 13.037C86.0074 12.3393 84.9609 11.9904 83.7093 11.9904C82.4268 11.9904 81.3598 12.3393 80.5083 13.037C79.667 13.7348 79.0361 14.6737 78.6154 15.8538C78.2051 17.0236 77.9999 18.3319 77.9999 19.7787C77.9999 21.2153 78.2051 22.5185 78.6154 23.6883C79.0361 24.8581 79.667 25.7919 80.5083 26.4897C81.3598 27.1772 82.4268 27.5209 83.7093 27.5209Z'
                    fill='white'
                  />
                  <path
                    d='M109.591 31.9846C107.231 31.9846 105.205 31.4664 103.512 30.43C101.83 29.3936 100.532 27.9622 99.6189 26.1356C98.7161 24.2989 98.2647 22.185 98.2647 19.7941C98.2647 17.393 98.7263 15.274 99.6497 13.4372C100.573 11.5902 101.876 10.1536 103.559 9.12746C105.251 8.09107 107.252 7.57287 109.56 7.57287C111.479 7.57287 113.177 7.92689 114.654 8.63492C116.142 9.33269 117.327 10.3229 118.209 11.6056C119.091 12.878 119.594 14.3659 119.717 16.0693H114.393C114.177 14.9303 113.664 13.9811 112.854 13.2217C112.053 12.4521 110.981 12.0673 109.637 12.0673C108.498 12.0673 107.498 12.3752 106.636 12.9909C105.775 13.5963 105.103 14.4685 104.62 15.6075C104.148 16.7465 103.912 18.1113 103.912 19.7018C103.912 21.3128 104.148 22.6981 104.62 23.8576C105.092 25.0069 105.754 25.8945 106.606 26.5204C107.467 27.1361 108.478 27.444 109.637 27.444C110.458 27.444 111.192 27.29 111.838 26.9822C112.495 26.6641 113.043 26.2075 113.485 25.6123C113.926 25.0172 114.228 24.2937 114.393 23.442H119.717C119.584 25.1146 119.091 26.5974 118.24 27.8903C117.388 29.173 116.229 30.1786 114.762 30.9072C113.295 31.6255 111.571 31.9846 109.591 31.9846Z'
                    fill='white'
                  />
                  <path
                    d='M128.48 24.1039L128.464 17.3776H129.357L137.852 7.88071H144.361L133.912 19.5171H132.758L128.48 24.1039ZM123.401 31.5228V0H128.972V31.5228H123.401ZM138.237 31.5228L130.542 20.7638L134.297 16.8389L144.9 31.5228H138.237Z'
                    fill='white'
                  />
                </svg>
              </Link>
            </footer>
          </div>
        </div>
      </body>

      <Analytics />
    </>
  );
}
