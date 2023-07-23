# App Inventor File Upload

Gives an easy way to receive MIT App Inventor files from Web.PostFile, Web.PutFile, etc.

## Use

```ts
import getFile from 'app-inventor-file-upload';

const maybeEmptyFile: Buffer | null = await getFile(req: Request, throwIfEmpty?: false);
const alwaysFullFile: Buffer = await getFile(req: Request, throwIfEmpty: true);
```
