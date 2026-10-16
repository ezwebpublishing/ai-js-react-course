import { describe, expect, it } from 'vitest'
import { getFavoriteCount, getFilteredProducts } from './productUtils.js'

const products = [
  {
    id: 1,
    name: '무선 헤드폰',
    price: 89000,
    category: '음향',
    isFavorite: true,
  },
  {
    id: 2,
    name: '기계식 키보드',
    price: 129000,
    category: '입력장치',
    isFavorite: false,
  },
  {
    id: 3,
    name: '무선 마우스',
    price: 59000,
    category: '입력장치',
    isFavorite: true,
  },
]

describe('getFilteredProducts', () => {
  it('검색어의 대소문자를 구분하지 않는다', () => {
    expect(getFilteredProducts(products, '헤드폰', '전체', '')).toEqual([
      products[0],
    ])
  })

  it('카테고리와 최대 가격 조건을 함께 적용한다', () => {
    expect(getFilteredProducts(products, '', '입력장치', '60000')).toEqual([
      products[2],
    ])
  })

  it('음수 가격이면 빈 결과를 반환한다', () => {
    expect(getFilteredProducts(products, '', '전체', '-1')).toEqual([])
  })
})

describe('getFavoriteCount', () => {
  it('찜한 상품 개수를 반환한다', () => {
    expect(getFavoriteCount(products)).toBe(2)
  })
})
