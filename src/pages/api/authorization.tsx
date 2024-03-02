import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const filePath = path.join(process.cwd(), 'src', 'app', 'private', 'authorization.json');
      const fileContent = await fs.promises.readFile(filePath, 'utf-8');
      const parsedData = JSON.parse(fileContent);

      // Get user's IP address from the request
      const ipAddress = req.socket.remoteAddress;

      const pageUrlHeader = req.headers['x-page-url'];

      const pageUrl: string = pageUrlHeader as string;

      const pathUrl = new URL(pageUrl).pathname;

      // Check if the IP address is present in the authorization.json file
      const associatedName = Object.entries(parsedData).find(([name, ip]) => ip === ipAddress)?.[0];

      if (associatedName) {
        // If the IP is associated with a name, return the protected data
        if(pathUrl == '/projets') {
          // Define the path to your JSON file
          const filePath = path.join(process.cwd(), 'src', 'app', 'private', 'projects.json');

          // Read the file content
          const fileContent = await fs.promises.readFile(filePath, 'utf-8');

          // Parse the JSON content
          const projectsData = JSON.parse(fileContent).projects;

          res.status(200).json({ success: true, data: `This is protected data for ${associatedName}.`, url: pathUrl, projects: projectsData});
        }
        
      } else {
        if(pathUrl == '/projets') {
          // Define the path to your JSON file
          const filePath = path.join(process.cwd(), 'src', 'app', 'private', 'projects.json');

          // Read the file content
          const fileContent = await fs.promises.readFile(filePath, 'utf-8');

          // Parse the JSON content
          const projectsData = JSON.parse(fileContent).projects;

          const filteredData = projectsData.filter((project: { public: boolean; }) => project.public);

          res.status(200).json({ success: true, data: `This is unprotected data.`, url: pathUrl, projects: filteredData});
        }
      }
    } catch (error) {
      console.error('Error reading authorization.json:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}