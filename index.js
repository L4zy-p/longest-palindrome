const longestPalindrome = (s) => {
  let n = s.length
  if (n < 2) // ถ้ามีแค่ตัวเดียวให้ return เป็นตัวที่ส่งมา
    return s

  let maxLength = 1, start = 0 // เอาไว้ substring หรือเฉพาะ text ที่เป็น LPS ตำแหน่งสุดท้าย และ ตำแหน่งแรก
  let low, high // เป็น pointer สำหรับชี้ตัวต่ำสุด และ สูงสุด
  for (let i = 0; i < n; i++) {
    low = i - 1
    high = i + 1
    
    // 1.เอาไว้เช็คว่าตัวถัดไปจาก index เหมือนกับ index หรือป่าว และบวก high จนกว่าจะไม่เหมือนตัว index
    while (high < n && s[high] == s[i]) {   
      high++
    }

    // 2.เอาไว้เช็คว่าตัวก่อนหน้า index เหมือนกับ index หรือป่าว และลบ low จนกว่าจะไม่เหมือนตัว index
    while (low >= 0 && s[low] == s[i]) {
      low--
    }

    // จาก 1 และ 2 จะเห็นได้ว่า จะทำงานทั้งสองพร้อมกันใน loop index เดียวกัน
    // เงื่อนไขนี้ จะเป็น index, ตัวก่อนหน้า ของ index, และถัดไปของ index
    // เหมือนกันทั้ง 3 ตัว เช่น aaa โดยที่ index เป็นตัวที่อยู่ตรงกลาง
    // และจะไม่เข้าเงื่อนไข 1 และ 2 ถ้าเป็นตัวสลับ เช่น bababa จะเงื่อนไข 3 อย่างเดียว

    // 3. เอาไว้หาซ้ายขวาของ index เหมือนกันหรือไม่ เช่น baab โดยที่ index = 1
    // โดยที่เงื่อนไข 1 จะทำงาน จาก high = 2 เป็น high = 3 และ low ยังอยู่ที่เดิมคือ 0
    // จะได้ b = b 
    while (low >= 0 && high < n && s[low] == s[high]) {
      low--
      high++
    }
   
    // 4.ตรงเงื่อนไขนี้ ขอยกตัวอย่าง baab โดยที่ index = 1
    // จะได้ high = 4, low = -1, maxLength = 1
    // length = 4 -(-1) -1 จะได้ 4
    // ซึ่ง จะเข้าเงื่อนไข 4 เพื่อที่จะหา LPS ก็จะได้เป็น baab เมื่อ substring(0,4+0)
    let length = high - low - 1
    if (maxLength < length) {
      maxLength = length
      start = low + 1
    }
  }

  return s.substring(start, maxLength + start)
}

console.log(longestPalindrome('cbabd'))
