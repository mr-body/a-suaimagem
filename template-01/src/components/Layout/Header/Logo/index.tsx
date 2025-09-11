import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src= {`${getImagePrefix()}images/logo/favicon.ico`}
        alt="logo"
        width={50}
        height={50}
        style={{ width: "auto", height: "auto" }}
        // quality={100}
      />
      <h1 className="text-2xl font-bold text-[#0598ec]">IPIKK</h1>
    </Link>
  );
};

export default Logo;
