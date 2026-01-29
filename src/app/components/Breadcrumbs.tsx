import { FC } from "react";
import Link from "next/link";
import ScrapTitle from "./ScrapTitle";

type BreadcrumbProps = {
  title: string;
  title1?: string;
};

const Breadcrumbs: FC<BreadcrumbProps> = ({ title, title1 }) => {
  return (
    <div className="w-full px-6 mt-6 mb-10">
      {title1 ? (
        // Avec breadcrumb (projets)
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-0">
          <Link 
            href={"/projets"} 
            className="font-erode text-4xl min-[460px]:text-5xl max-[460px]:-mb-4"
          >
            {title1} /
          </Link>
          <ScrapTitle 
            text={title} 
            padding={16}
            glyphWidth={18}
            height={60}
            className="origin-left md:ml-0 -ml-1 max-[460px]:scale-[90%] max-[420px]:scale-[80%] max-[380px]:scale-[65%]"
            textSize="4xl"
          />
        </div>
      ) : (
        // Sans breadcrumb (page simple)
        <ScrapTitle 
          text={title} 
          padding={30}
        />
      )}
    </div>
  );
};

export default Breadcrumbs;