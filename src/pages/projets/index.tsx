import Layout from "@components/Layout";
import { NextPage } from "next";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { useEffect, useState } from "react";

const IndexProjets: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string | null>(null);
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
          setData(result.data);
          console.log(result);
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

  const breadcrumbs = [
    { text: '/', href: '/' },
    { text: 'Projets', href: '/projets' },
  ];

    return (
      <Layout>
        <Breadcrumbs items={breadcrumbs}/>
        <div className="md:flex md:flex-row p-4 content">
            <div className="w-full hidden md:block">aaaa</div>
            <div className="w-full h-full">

            </div>
        </div>
      </Layout>
    );
  };

export default IndexProjets;

