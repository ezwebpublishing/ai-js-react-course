import { describe, expect, it } from 'vitest'
import { getFavoriteCount, getFilteredProducts } from './productUtils.js'

const products = [
  { id: 1, name: '무선 헤드폰', price: 89000, category: '음향', isFavorite: true },
  { id: 2, name: '기계식 키보드', price: 129000, category: '입력장치', isFavorite: false },
]

describe('최종 상품 계산 검증', () => {
  it('검색 조건을 적용한다', () => {
    expect(getFilteredProducts(products, '헤드폰', '전체', '')).toEqual([products[0]])
  })

  it('카테고리와 가격 조건을 적용한다', () => {
    expect(getFilteredProducts(products, '', '입력장치', '130000')).toEqual([products[1]])
  })

  it('음수 가격이면 빈 결과를 반환한다', () => {
    expect(getFilteredProducts(products, '', '전체', '-1')).toEqual([])
  })

  it('찜한 상품 개수를 계산한다', () => {
    expect(getFavoriteCount(products)).toBe(1)
  })
})
