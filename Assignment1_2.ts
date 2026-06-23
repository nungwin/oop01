let bookTitle: string = "TypeScript Programming";
let isbn: string = "978-616-123456-7";
let price: number = 650;

let bookSummary: [string, number] = [bookTitle, price];

let isAvailable: boolean = true;


let discountPrice: number = price - (price * 15 / 100);

let isPremium: boolean = price > 500;

let canDisplay: boolean = isPremium && isAvailable;

console.log(`
========== รายงานข้อมูลหนังสือ ==========

ชื่อหนังสือ      : ${bookTitle}
ISBN            : ${isbn}
ราคาเต็ม        : ${price} บาท
ราคาหลังส่วนลด 15% : ${discountPrice} บาท

ข้อมูลสรุป (Tuple): [${bookSummary[0]}, ${bookSummary[1]}]

หนังสือ Premium : ${isPremium}
สถานะพร้อมใช้งาน : ${isAvailable}
จัดแสดงหน้าตู้โชว์ได้ : ${canDisplay}

=========================================
`);