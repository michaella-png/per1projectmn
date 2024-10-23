import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

export const metadata: Metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
    
    /*<html lang="en">
       <body className={`${GeistSans.variable}`}>
       <div className="w-full text-9xl text-orange-500 text-center">First Layout</div>
       <button className="btn btn-outline bg-pink-200 text-rose-400 cursor-not-allowed animate-bounce">Boop</button>

       <div className="card bg-yellow-100 w-80 shadow-xl ">
          <figure>
            <img
              src="https://utfs.io/f/556971d5-4e5f-43d8-a4bc-454c055591bc-nm33wo.jpg"
              alt="Mango Sticky Rice" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-orange-400">Mango Sticky Rice!</h2>
            <p className="text-yellow-500">Get me this rn. </p>
            <div className="card-actions justify-end">
              <button className="btn btn-default  bg-yellow-200 text-orange-400 border-orange-400">Order Now</button>
            </div>
          </div>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Accept viruses ^~^</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
      {children}
    </body>
    </html>
  );
}*/
