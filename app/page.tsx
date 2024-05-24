// import AcmeLogo from '@/app/ui/acme-logo';
// import { ArrowRightIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';
// import homeStyles from '@/app/ui/home.module.css';
// import clsx from 'clsx';
// import { roboto_mono } from '@/app/ui/fonts';
// import Image from 'next/image';

// export default function Page() {
//   const keyStr =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

//   const triplet = (e1: number, e2: number, e3: number) =>
//     keyStr.charAt(e1 >> 2) +
//     keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
//     keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
//     keyStr.charAt(e3 & 63);

//   const rgbDataURL = (r: number, g: number, b: number) =>
//     `data:image/gif;base64,R0lGODlhAQABAPAA${
//       triplet(0, r, g) + triplet(b, 255, 255)
//     }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

//   return (
//     <main className="flex min-h-screen flex-col p-6">
//       {/* <div className={clsx(homeStyles.shape, 'bg-blue-500')}></div>
//       <h1 className={roboto_mono.className}>
//         <p>Nguyen Nam Hải</p>
//       </h1> */}
//       <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
//         {/* <AcmeLogo /> */}
//       </div>
//       <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
//         <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
//           <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
//             <strong>Welcome to Acme.</strong> This is the example for the{' '}
//             <a href="https://nextjs.org/learn/" className="text-blue-500">
//               Next.js Learn Course
//             </a>
//             , brought to you by Vercel.
//           </p>
//           <Link
//             href="/login"
//             className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
//           >
//             <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
//           </Link>
//         </div>
//         <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
//           <Image
//             placeholder="blur"
//             blurDataURL={rgbDataURL(0, 0, 0)}
//             src="/hero-desktop.png"
//             width={1000}
//             height={760}
//             className="hidden md:block"
//             alt="Screenshots of the dashboard project showing desktop version"
//           />
//           <Image
//             placeholder="blur"
//             blurDataURL={rgbDataURL(2, 129, 210)}
//             src="/hero-mobile.png"
//             width={560}
//             height={620}
//             className="block md:hidden"
//             alt="Screenshot of the dashboard project showing mobile version"
//           />
//           {/* Add Hero Images Here */}
//         </div>
//         {/* <div className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent" /> */}
//       </div>
//     </main>
//   );
// }
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <div></div>;
};

export default Page;
