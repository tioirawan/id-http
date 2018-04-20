const http = require('http')
const finalhandler = require('finalhandler')
const Router = require('router')

module.exports = class {
  constructor(){
    this.router = Router()
  }

  tangani(path, handler) {
    this.router.get(path, handler)
  }

  get rute() {
    return this.router
  }

  dengarkan(port, log = true) {
    const server = http.createServer((req, res) => {
      this.router(req, res, finalhandler(req, res))
    })
    server.listen(port)
    
    if (log) console.log(`server mendengarkan di port ${port}, buka localhost:${port}`)
  }
}
