export interface Product {
  productId: number;        // معرّف المنتج
  sku: string;              // رقم المنتج الفريد
  description: string;      // وصف المنتج
  imgprodect: string;       // رابط صورة المنتج
  price: number;            // سعر المنتج
  stock: number;            // كمية المخزون المتاح
  categoryId?: number;      // معرّف الفئة (يكون اختياريًا)
}
