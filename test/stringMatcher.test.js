test('string matcher', () => {
  let value = "Aku akan menjadi kaya dan rajin beribadah"

  expect(value).toMatch(/rajin/) // untuk mencari kata yang persis pada kalimat atu kata
})

// toMatch bisa dikatakan mencari regex (kata atau karakter yang sama)
