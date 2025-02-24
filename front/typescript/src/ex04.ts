//ex04.ts

//타입 별칭(Type Alias)
type User = {
  id: number
  name: string
  nickname: string
  birth: string
  location: string
  phone: string
}

let user: User = {
  id: 1,
  name: '홍길동',
  nickname: 'hong',
  birth: '2000.01.01',
  location: '한양',
  phone: '010-1111-2222',
}

let user2: {
  id: 2
  name: '사임당'
  nickname: 'sa'
  birth: '2001.01.01'
  location: '한성'
  phone: '010-3333-4444'
}
