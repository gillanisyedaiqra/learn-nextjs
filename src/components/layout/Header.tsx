import logo from "/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/shared/Wrapper";
const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
      <Wrapper>
        <header className="flex justify-between bg-white py-4 stickt top-0 items-centre">
          <div>
            {/* <h2 className="text-xl font-bold"> Panaverse Dao</h2> */}
            <Image
              src={logo}
              height={100}
              width={100}
              alt="Panaverse Dao Logo"
            />
          </div>
          <ul className="flex space-x-8 font-medium">
            <li>
              <Link href={"/"}> Home </Link>
            </li>
            <li>
              <Link href={"/courses"}> Courses </Link>
            </li>
          </ul>
        </header>
      </Wrapper>
    </header>
  );
};

export default Header;
