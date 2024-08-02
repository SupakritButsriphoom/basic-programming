/**
 * The code consists of several TypeScript functions that perform various tasks based on conditions and
 * input parameters.
 
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
gogo('male', 180, 49)*/

function BMIBySharky(height: number, weight: number) {
  height = height / 100;
  if (weight <= 0 || weight >= 639 || height <= 0 || height >= 3) {
    console.log("กรอกค่าไม่ถูกต้อง");
    return;
  }
  let BMI: number = weight / (height * height);
  if (BMI > 30) {
    console.log("อ้วนมาก/โรคอ้วนระดับ 3");
  } else if (BMI >= 25 && BMI <= 29.9) {
    console.log("อ้วน/โรคอ้วนระดับ 2");
  } else if (BMI >= 23 && BMI <= 24.9) {
    console.log("ท้วม/โรคอ้วนระดับ 1");
  } else if (BMI >= 18.5 && BMI <= 22.9) {
    console.log("ปกติ(สุขภาพดี)");
  } else {
    console.log("น้ำหนักน้อย/ผอม");
  }
}
BMIBySharky(190, 5000);
