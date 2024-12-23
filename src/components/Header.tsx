import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4 px-4 sm:px-8 h-24 border rounded-xl shadow-lg bg-[#F9F9F9]">
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <h2>Welcome back, Ishmimi!</h2>
        <UserButton />
      </SignedIn>
    </header>
  );
};

export default Header;
