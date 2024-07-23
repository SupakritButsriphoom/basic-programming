function add(a: number,b: number){
    return a+b
}

function remove(a: number, b: number){
    return a-b
}

function mul(a: number, b: number, c: number){
    return a*b*c
}
console.log(remove(5,10))
console.log(mul(35,15,15))


function grade(homework: number, midterm: number, final: number){
    let score: number = homework+midterm+final
    if (score <50){
        return 'เกรด F'
    } else if (score <60){
        return 'เกรด D'
    } else if (score <70){
        return 'เกรด C'
    } else if (score <80){
        return 'เกรด B'
    } else if (score >=80){
        return 'เกรด A'
    } 
}
console.log(grade(45,20,15))


