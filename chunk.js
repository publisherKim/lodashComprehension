import slice from './slice.js'

/**
 * Creates an array of elements split into groups the length of `size`.
 * If `array` can't be split evenly, the final chunk will be the remaining
 * elements.
 *
 * @since 3.0.0
 * @category Array
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 *
 * ㅊ
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */


function chunk(array, size) {
  // 0보다 작을경우 최소 0
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  // 길이가 없거나 size가 1보다 작을 경우 빈배열을 반환
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}


/*
  chunk 진행 과정
    case: chunk(['a', 'b', 'c', 'd'], 2)
    ['a', 'b', 'c', 'd'] , 2
    size = 2
    length = 4
    idnex = 0
    resIndex = 0
    result = [empty× 2]
    result[0] = ['a', 'b']
    result[1] = ['c'. 'd']
    result = [['a', 'b'], ['c', 'd']]
*/
export default chunk