import React from "react";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import ParcoursCard from "@/app/components/ParcoursCard";
import evenementsData from "@/data/parcours.json";

type Evenement = {
  vinyl: { img: string; text: string };
  title: string;
  options?: string;
  date: string;
  lieu: string;
  description: string;
};

const Parcours: React.FC = () => {
  const evenements = evenementsData as Evenement[];

  return (
    <>
      <Breadcrumbs title="Parcours" />
      <div className="px-6 py-2 w-full h-full overflow-x-hidden md:overflow-x-visible">
        {evenements.map((evenement, index) => (
          <ParcoursCard
            key={`${evenement.date}-${evenement.title}`}
            {...evenement}
            index={index}
          />
        ))}
      </div>
    </>
  );
};

export default Parcours;
