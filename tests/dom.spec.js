const {generateDiv} =  require('./dom')

require('./../jsdom-config')

describe("Dom测试",()=>{
  test('dom操作',()=>{
    generateDiv();
    expect(document.getElementsByClassName('c1').length).toBe(1)
  })
})
