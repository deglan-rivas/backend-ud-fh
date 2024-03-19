import { mkdir, writeFile } from "fs"

const showTable = (base: number, length: number) => {
  let content = 
`
===============================
        Tabla del ${base}
===============================
`

let auxiliar = 1
content = new Array(length).fill(0).map( () => auxiliar++ ).reduce( (acc, curr) => (acc + `\n ${base} x ${curr} = ${base * curr}`), content)
console.log(content)
return content
}

const table2x10 = showTable(2, 10)

// i want to save my variable table2x10 in a file
mkdir("outputs/folder1/folder2", { recursive: true }, (err) => {
  if (err) console.log(err);
  console.log("Directory created!");
})

writeFile("outputs/table2x10.txt", table2x10, 'utf-8', (err) => {
  if (err) console.log(err);
  console.log("The file has been saved!");
})