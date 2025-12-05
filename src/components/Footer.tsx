import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Container from "./Container";

const Footer = () => (
  <footer className="bg-gray-50 text-gray-800 mt-10 border-t border-gray-200">
    {/* Top Section */}
    <Container className="py-12 flex flex-col md:flex-row md:justify-between gap-10">
      {/* Logo & Description */}
      <div className="flex flex-col gap-4 md:w-1/3">
        <Image
          src="/logo.svg"
          alt="CarHub Logo"
          width={140}
          height={24}
          className="object-contain"
        />
        <p className="text-gray-600 text-sm">
          CarHub 2023 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap gap-8 md:gap-20 md:justify-end flex-1">
        {footerLinks.map((section) => (
          <div
            key={section.title}
            className="flex flex-col gap-4 min-w-[150px]"
          >
            <h3 className="font-semibold text-gray-900">{section.title}</h3>
            <ul className="flex flex-col gap-3">
              {section.links.map((link) => (
                <li key={link.title}>
                  <Link
                    href={link.url}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>

    {/* Bottom Section */}
    <div className="border-t border-gray-200 py-6 px-6 sm:px-16 flex flex-col sm:flex-row justify-between items-center gap-4">
      <p className="text-gray-500 text-sm text-center sm:text-left">
        &copy; 2023 CarHub. All rights reserved.
      </p>

      <div className="flex flex-wrap gap-6 justify-center sm:justify-end text-sm">
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          Privacy Policy
        </Link>
        <Link
          href="/"
          className="text-gray-500 hover:text-gray-900 transition-colors"
        >
          Terms & Conditions
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
