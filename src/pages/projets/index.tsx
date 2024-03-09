import Layout from "@components/Layout";
import { NextPage } from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { useEffect, useState } from "react";
import ProjectList from "@/app/components/ProjectList";

const IndexProjets: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentPageUrl = window.location.href;

        const response = await fetch('/api/authorization', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'X-Page-Url': currentPageUrl, // Pass the page URL as a custom header
          },
        });

        if (response.ok) {
          const result = await response.json();
          
          setData(result.projects);
        } else {
          setError('Unauthorized');
        }
      } catch (error) {
        setError('Internal Server Error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

    return (
      <Layout title="Projets">
        <Breadcrumbs title="Projets"/>
        <div className="md:flex md:flex-row px-6 py-2 content">
            <div className="w-full hidden md:block basis-1/3">aaaa</div>
            <div className="w-full h-full basis-2/3">
              <ProjectList projects={data}/>
            </div>
        </div>
      </Layout>
    );
  };

export default IndexProjets;

