// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import simpleGit, {SimpleGit, SimpleGitOptions} from 'simple-git';
import path from 'path';
const git: SimpleGit = simpleGit();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  
const options: Partial<SimpleGitOptions> = {
  baseDir: path.join(process.cwd(), 'data', 'forum'),
  binary: 'git',
  maxConcurrentProcesses: 6,
};
const payload = JSON.parse(req.body?.payload);
debugger;
const git: SimpleGit = simpleGit(options);

  if (payload?.ref === 'refs/heads/master') {
      await git.pull('origin', 'master');
  }
 return res.status(200).json({success: true})
}
