import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import Link from "next/link";


const NavBar = () => {
  return (
    <div className="flex justify-between items-center shadow-md">
      <div className="flex items-center ml-3 font-bold text-lg">
        <AiFillCar size={23} style={{ margin: "8px" }} />
        <Link href={"/"}>EASY DRIVE</Link>
      </div>
      <div className="mr-3 my-3">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton mode="modal">
            <button className="btn btn-primary">Sign In</button>
          </SignInButton>
        </SignedOut>
      </div>
    </div>
  );
};

export default NavBar;
