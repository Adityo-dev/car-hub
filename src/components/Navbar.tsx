import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/30 shadow-md">
      <Container>
        <nav className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={118}
              height={18}
              className="object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <ul className="hidden md:flex gap-8 text-gray-800 font-medium">
            <li>
              <Link href="/" className="hover:text-[#2B59FF] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/cars"
                className="hover:text-[#2B59FF] transition-colors"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="hover:text-[#2B59FF] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[#2B59FF] transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Sign In Button */}
          <CustomButton
            title="Sign in"
            btnType="button"
            containerStyles="text-[#2B59FF] rounded-full bg-white min-w-[130px]"
          />
        </nav>
      </Container>
    </header>
  );
};

export default NavBar;
