import path from 'path';
import { promises as fs } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next'
import data from '@/public/re-static-data.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse<{error: string, contents: Object}>)
{
    try
    {
        // const fileContents = await fs.readFile('./public/re-static-data.json', 'utf8');
        res.status(200).json({error: '', contents: data}); // JSON.parse(fileContents)
    }
    catch(error: any)
    {
        console.log(error)
        res.status(error.statusCode || 500).json({error: error.message, contents: ''});
    }
}