/*
const fName: string = "นายทดสอบ";
const lName: string = "นามสกุล";

const fullName: string = fName + "" + lName;

console.log("แบบใหม่ :", fullName);

function checkStringLength(massage: string) {
  console.log(massage.length);
}
checkStringLength("Supakrit");

const str: string = "TypeScript";

console.log(str.toUpperCase().indexOf("p"));
console.log(str.lastIndexOf("p"));
console.log(str.includes("p"))

const str: string = 'America Ya'
console.log(str.slice(str.indexOf('Ya'),str.indexOf('Ya')+ "Ya".length))

function getName(fullName:string){
console.log(fullName.slice(0, fullName.indexOf(' ')))
}
getName('Supakrit Butsriphoom')

function getName(fullName:string){
    console.log(fullName.split(' ')[0])
    }
    getName('Supakrit Butsriphoom')

const str: string = "55,555:888,88"
console.log(str.split(":"))
*/
const str: string ='ยายแล่ม เมื่อตอนสาวๆ' // 'อ้นจี้'
console.log(str.replace('ยาย',''))

console.log(str.length)        // ความยาว (length)
console.log(str.charAt(2))     // ดึง index ที่ 2 (Get the character at index 2)
console.log(str.trim())        // เอา space ออกทั้งสองข้าง (Remove spaces from both ends)
console.log(str.trimStart())   // เอา space หน้าออก (Remove spaces from the start)
console.log(str.trimEnd())     // เอา space หลังออก (Remove spaces from the end)
console.log(str.toLowerCase()) // เปลี่ยนเป็นพิมพ์เล็ก (Convert to lowercase)
console.log(str.toUpperCase()) // เปลี่ยนเป็นพิมพ์ใหญ่ (Convert to uppercase)
