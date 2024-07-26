function HelloWorld() {
    console.log('สวัสดีท่านสมาชิก')
}
HelloWorld()

function secondHello(name: string) {
    console.log(name)
}
console.log(secondHello('Godzilla'))

function getPi() {
    return 3.14
}
console.log(getPi())

function st(fname: string, sname: string, tname: string) {
    if ((fname === 'nan' || sname === 'pleum') && tname === 'yo') {
        console.log('เริ่มสอน')
    } else {
        console.log('ยังไม่สอน')
    }
}
st('nan', 'pleum', 'yo')

function gogo(sex: string, heigh: number, weight: number) {
    if (sex === 'male' && (heigh > 170 || (weight > 50 && weight <= 110))) {
        console.log("จับใบดำใบแดง")
    } else {
        console.log("ไม่เข้าเกณฑ์")
    }
}
gogo('male', 180, 49)