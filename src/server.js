import http from 'http'
import { randomUUID } from 'crypto'
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';

async function handler(req, res) {
  const fileName = `file-${randomUUID()}.csv`

  await pipeline(
    req,
    createWriteStream(fileName)
  )

  res.end('Upload success!')
}

http.createServer(handler)
  .listen(3000, () => console.log('Server running on port: 3000'));

