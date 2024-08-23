// for loop
//  let sum: number = 1
//  for (let i=1; i <=365;i++){
//     sum = sum * i
// }
// console.log('total: ', sum)

//wile loop
// let i: number =1
// let sum: number =0

// while(i<=365){
//     sum = sum + i
//     i++
// }
// console.log('total:' , sum)

// do while loop
// let i: number =1
// let sum: number =0

// do {
//     sum = sum + i
//     i++
// }while (i<=31)
// console.log('total:' , sum)

// let i: number = 1
// let sum: number =0

// for(let j=1; j<2; j++){
//     i = i * 5
// }
// while (i<=365){
//     sum = sum + i
//     i++
// }

// console.log(sum)

// let sum:number=0
// let isBeark: boolean=false
// let row: number = 0

// while (true){
//     console.log('โสด')
//     row++
//     if (row ===3){
//         break
//     }
// }


// let car1: string = 'Honda'
// let car2: string = 'Yamaha'
// let car3: string = 'Toyota'
// let car4: string = 'Suzuki'
// const myName: string = 'สุดสวย สวยสุด'
// console.log(myName.charAt(2))
// const cars: string[] = ['Honda','Yamaha','Toyota','Suzuki']
// const num: number[] = [1,2,3,4,5]
// const bool: boolean[] = [true,false,false,true]
// cars[1]='Mazda'
// console.log(cars[0])
// console.log(cars[1])
// console.log(cars[2])
// console.log(cars[3])

// const cars: string[] = ['Honda','Yamaha','Toyota','Suzuki']

// for (let i=0; i<4; i++){
//     console.log(cars[i])
// }

// const cars: string[] = ['Honda','Yamaha','Toyota','Suzuki']

// for (let i=0; i<cars.length;i++){
//     if(cars[i]==='Yamaha'){
//         console.log('รถซื้อแกง จะแรงได้ไง')
//     }
// }

const cars: string[] = ['Honda','Yamaha','Toyota','Suzuki']

for (let i=0; i<cars.length;i++){
    console.log(cars[i])
}

cars.forEach(function(c){
    console.log(c)
})