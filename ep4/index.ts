/**
 * The function `sayHi` takes a number representing a day of the week and logs the corresponding day in
 * Thai language.
 * @param {number} dayOfweek - The function `sayHi` takes a parameter `dayOfweek` which is a number
 * representing a day of the week. The function then logs the corresponding day in Thai language based
 * on the input number.
 */
/**function sayHi(dayOfweek: number) {
  if (dayOfweek === 1) {
    console.log("อาทิตย์");
  } else if (dayOfweek === 2) {
    console.log("จันทร์");
  } else if (dayOfweek === 3) {
    console.log("อังคาร");
  } else if (dayOfweek === 4) {
    console.log("พุธ");
  } else if (dayOfweek === 5) {
    console.log("พฤหัสบดี");
  } else if (dayOfweek === 6) {
    console.log("ศุกร์");
  } else if (dayOfweek === 7) {
    console.log("เสาร์");
  }
}
sayHi(1);
*/
function sayHi(dayOfweek: number) {
  switch (dayOfweek) {
    case 1:
      console.log("สวัสดีวันอาทิตย์");
      break;
    case 2:
      console.log("สวัสดีวันจันทร์");
      break;
    case 3:
      console.log("สวัสดีวันอังคาร");
      break;
    case 4:
      console.log("สวัสดีวันพุธ");
      break;
    case 5:
      console.log("สวัสดีวันพฤหัสบดี");
      break;
    case 6:
      console.log("สวัสดีวันศุกร์");
      break;
    case 7:
      console.log("สวัสดีวันเสาร์");
      break;
    default:
      console.log("ระบุวันผิด");
      break;
  }
}
sayHi(12);
