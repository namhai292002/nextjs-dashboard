import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   if (request.nextUrl.pathname.startsWith('/dashboard')) {
//     console.log('request============');
//     console.log(request);
//     return NextResponse.rewrite(new URL('/dashboard/customers', request.url));
//   }

//   // if (request.nextUrl.pathname.startsWith('/dashboard')) {
//   //   return NextResponse.rewrite(new URL('/dashboard/user', request.url));
//   // }
// }

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/dashboard/customers', request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [ '/login'],
};
