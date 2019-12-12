let params = [ "hello", true, 7 ]
let other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

[ 1, 3, 4, 2 ].find(x => x > 3) // 4
[ 1, 3, 4, 2 ].findIndex(x => x > 3) // 2