import { FC } from "react";
import Link from "next/link";
import ScrapTitle from "./ScrapTitle";

type BreadcrumbProps = {
  title: string;
  title1?: string;
};

const Breadcrumbs: FC<BreadcrumbProps> = ({ title, title1 }) => {
  return (
    <div className="text-5xl w-full flex items-center px-6 mt-6 font-erode mb-10 ">
      {title1 && (
        <Link href={"/projets"} className="mt-6">
          {title1 + " / "}
        </Link>
      )}
      {title1 && <ScrapTitle text={title} padding={30} />}
      {!title1 && <ScrapTitle text={title} padding={30} />}
    </div>
  );
};

export default Breadcrumbs;
