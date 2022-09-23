const {getData} = require('./fetch')
const axios = require('axios')

jest.mock("axios")

it("fetch",async()=>{
  axios.get.mockResolvedValueOnce("123")
  axios.get.mockResolvedValue("456")

  const data1 = await getData()
  const data2 = await getData()

  expect(data1).toBe("123")
  expect(data2).toBe("456")
  
})

test('测试jest.fn',()=>{
  let mockFn = jest.fn()
  let res = mockFn(1,2,3)

  expect(res).toBeUndefined()
  expect(mockFn).toBeCalled()
  expect(mockFn).toBeCalledTimes(1)
  expect(mockFn).toHaveBeenCalledWith(1,2,3)
})
