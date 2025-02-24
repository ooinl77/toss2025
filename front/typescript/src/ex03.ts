//ex03.ts

//객체 타입
let user1: object = {
  id: 1,
  name: '홍길동',
}
//object 형식에 id 속성이 없다
// user1.id

//객체 리터럴 타입
let user2: {
  id: number
  name: string
} = {
  id: 1,
  name: '홍길동',
}
//(property) id: number
user2.id

let user3: {
  id?: number //선택적 property를 통해 속성 생략 가능
  name: string
} = {
  name: '홍길동',
}

let config: {
  readonly apiKey: string
} = {
  apiKey: 'MY API KEY',
}

// config.apiKey = '1223234'
