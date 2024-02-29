// pages/api/handleHash.ts

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const filePathAccess = path.join(process.cwd(), 'src', 'app', 'private', 'access.json');
      const filePathData = path.join(process.cwd(), 'src', 'app', 'private', 'authorization.json');

      const accessData = await fs.promises.readFile(filePathAccess, 'utf-8');
      const parsedAccessData = JSON.parse(accessData);

      const { token } = req.body;

      // Get user's IP address from the request
      const ipAddress = req.socket.remoteAddress;

      if (parsedAccessData && parsedAccessData.tokens && parsedAccessData.tokens[token]) {
        const name = parsedAccessData.tokens[token];

        // Read existing data file
        let parsedDataFile: { [key: string]: string | undefined } = {};
        try {
          const dataFileContent = await fs.promises.readFile(filePathData, 'utf-8');
          parsedDataFile = JSON.parse(dataFileContent);
        } catch (err) {
          console.error('Error reading data file:', err);
        }

        // Check if the IP address is already present
        if (parsedDataFile[name] === ipAddress) {
          res.status(200).json({ success: true, message: 'Token is valid', name, ipAddress });
          return; // Exit early if IP address is already present
        }

        // Store name and corresponding IP in the data file
        parsedDataFile[name] = ipAddress;

        // Write updated data file
        await fs.promises.writeFile(filePathData, JSON.stringify(parsedDataFile, null, 2), 'utf-8');

        res.status(200).json({ success: true, message: 'Token is valid', name, ipAddress });
      } else {
        res.status(401).json({ success: false, message: 'Unauthorized' });
      }
    } catch (error) {
      console.error('Error handling token:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
}
