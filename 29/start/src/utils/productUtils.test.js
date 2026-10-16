import { describe, expect, it } from 'vitest'
import { getFilteredProducts } from './productUtils.js'

const products = [
  { id: 1, name: '무선 헤드폰', price: 89000, category: '음향' },
  { id: 2, name: '기계식 키보드', price: 129000, category: '입력장치' },
]

describe('getFilteredProducts', () => {
  it.todo('검색어가 포함된 상품만 반환한다')

  // TODO 1: it.todo를 실제 테스트로 바꾸세요.
  // TODO 2: 먼저 테스트가 실패하는지 확인하세요.
  // TODO 3: productUtils.js를 구현한 뒤 테스트를 다시 실행하세요.
  // expect(getFilteredProducts(products, '헤드폰', '전체', '')).toEqual([
  //   products[0],
  // ])
})
