import { Request } from 'express';
import concat from 'concat-stream';

export default function getFile(
  req: Request,
  throwIfEmpty?: false,
): Promise<Buffer | null>;
export default function getFile(
  req: Request,
  throwIfEmpty: true,
): Promise<Buffer>;

export default function getFile(req: Request, throwIfEmpty?: boolean) {
  return new Promise((resolve, reject) => {
    req.pipe(
      concat((data) => {
        if (data.length === 0) {
          if (throwIfEmpty) return reject(new Error('Empty file'));
          return resolve(null);
        }
        resolve(data);
      }),
    );
    req.on('error', reject);
  });
}
