const httpServer = require('./index')

const server = new httpServer()

describe('main test', () => {
  it('should return a function', () => {
    expect(typeof httpServer).toBe('function')
  })

  it('should have correct function', () => {
    expect(server.router).toBeDefined()
    expect(server.rute).toBeDefined()
    expect(server.dengarkan).toBeDefined()
    expect(server.tangani).toBeDefined()
    
    expect(server.rute).toEqual(server.router)
  })
})
