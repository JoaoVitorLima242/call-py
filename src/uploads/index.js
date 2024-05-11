import { spawn } from 'child_process'
const pyFile = 'index.py'
const pyCommand = "python3"

async function requestPy({ url, headers, filePath }) {
  const py = spawn(pyCommand, [
    pyFile,
    JSON.stringify({
      url,
      headers,
      filePath
    })])

  const dataString = []
  for await (const data of py.stdout) {
    dataString.push(data.toString())
  }

  return dataString.join('')
}

const result = await requestPy({
  url: "http://localhost:3000",
  filePath: "data.csv"
})

console.log(result)
