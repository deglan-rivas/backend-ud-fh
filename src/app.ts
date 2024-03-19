import { argvs } from "./config/plugins/argv.plugin"

console.log(process.argv)
console.log(argvs)

// gracias a este pequeño código y codeium entenidmos que js es síncrono, v8 node y chrome lo hacen asíncrono porque sino sería muy lento al usar http y fs, entonces ahora sería asíncrono con pequeños momentos síncronos, se puede forzar la sincronía con callback hell o con Promises y async await ez
const my_main = () => {
  return new Promise((resolve: Function) => {
    setTimeout(() => {
      console.log('fin del main')
      resolve()
    }, 1000)
  })
}

(async () => {
  my_main()
  console.log('fin de todo')
})()
