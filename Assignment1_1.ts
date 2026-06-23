let productName: string = "Laptop Bag";
let pricePerUnit: number = 650;
let quantity: number = 2;
let isMember: boolean = false;

let totalPrice: number = pricePerUnit * quantity;

let hasDiscount: boolean = totalPrice > 1000 || isMember;

let discountAmount: number = hasDiscount ? totalPrice * 0.10 : 0;

let finalPrice: number = totalPrice - discountAmount;

console.log(`========== รายงานการสั่งซื้อ ==========
ชื่อสินค้า: ${productName}
จำนวนที่ซื้อ: ${quantity} ชิ้น
ราคารวมทั้งหมด: ${totalPrice} บาท
ได้รับส่วนลด: ${hasDiscount}
ราคาที่ต้องจ่ายจริง: ${finalPrice} บาท
========================================`);
