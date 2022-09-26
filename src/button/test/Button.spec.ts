import Button from './../Button'

import {shallowMount} from '@vue/test-utils'

import {describe,expect,test} from 'vitest'

describe('Button',()=>{
  test('mount',()=>{
    const wrapper = shallowMount(Button,{
      slots:{
        default:'按钮'
      }
    })
    expect(wrapper.text()).toBe('按钮')
  })
})


describe('color',()=>{
  test('default',()=>{
    const wrapper = shallowMount(Button,{
      slots:{
        default:'Button'
      }
    })
    expect(wrapper.classes().map(v=>v.replace('\n','')).includes('bg-blue-500')).toBe(true)
  })
  test('red',()=>{
    const wrapper = shallowMount(Button,{
      slots:{
        default:'Button'
      },
      props:{
        color:'red'
      }
    })
    expect(wrapper.classes().map(v=>v.replace('\n','')).includes('bg-red-500')).toBe(true)
  })

})

