// pengecekan value dalam array
// bisa menggunakan toEqual
// ada alternatif lain seperti
// toContain : memastikan value array memiliki item, dimana pengecekan item menggunakan toBe // cocok mengecek array non object
// toContainEqual : memastikan value array memiliki item, dimana pengecekan item menggunakan toEqual // cocok mengecek array object

test('array NON OBJECT toContain', () => {
  const arr = ['NAS', 'FADI', 'LILIS']
  expect(arr).toContain('LILIS')
  expect(arr).toEqual(['NAS', 'FADI', 'LILIS'])
})

test('array OBJECT toContainEqual', () => {
  const arr = [{ aku: 'NAS' }, { adiku: 'FADI' }, { kakaku: 'LILIS' }]
  expect(arr).toContainEqual({ aku: 'NAS'})
  expect(arr).toEqual([
    { aku: 'NAS' },
    { adiku: 'FADI' },
    { kakaku: 'LILIS' },
  ])
})
