const ProductItems = [

    {
      "id": 1,
      "images":[
          "/src/assets/MacLab1.png",
          "/src/assets/MacLab2.png",
          "/src/assets/MacLab3.png",
      ],
      "name": "Apple MacBook Air M2",
      "category": "Laptop",
      "brand": "Apple",
      "price": 1199,
      "currency": "USD",
      "rating": 4.8,
      "specifications": {
        "processor": "Apple M2 Chip",
        "ram": "8GB",
        "storage": "256GB SSD",
        "display": "13.6-inch Liquid Retina",
        "battery": "18 hours",
        "os": "macOS Ventura",
        "weight": "1.24 kg",
        "ports": ["2x Thunderbolt 4", "3.5mm Headphone Jack"]
      },
      "availability": true,
      "warranty": "1 year"
    },
    {
      "id": 2,
      "images":[
          "/src/assets/DellLab1.png",
          "/src/assets/DellLab2.png",
          "/src/assets/DellLab3.png",
      ],
      "name": "Dell XPS 15 9520",
      "category": "Laptop",
      "brand": "Dell",
      "price": 1499,
      "currency": "USD",
      "rating": 4.6,
      "specifications": {
        "processor": "Intel Core i7-12700H",
        "ram": "16GB DDR5",
        "storage": "512GB SSD",
        "display": "15.6-inch 4K OLED",
        "battery": "86 Whr",
        "os": "Windows 11",
        "weight": "1.8 kg",
        "ports": ["2x Thunderbolt 4", "USB-C", "SD card reader"]
      },
      "availability": true,
      "warranty": "2 years"
    },
    {
      "id": 3,
      "images":[
          "/src/assets/S23Ultra1.png",
          "/src/assets/S23Ultra2.png",
          "/src/assets/S23Ultra3.png",
      ],
      "name": "Samsung Galaxy S23 Ultra",
      "category": "Smartphone",
      "brand": "Samsung",
      "price": 1199,
      "currency": "USD",
      "rating": 4.9,
      "specifications": {
        "processor": "Snapdragon 8 Gen 2",
        "ram": "12GB",
        "storage": "512GB",
        "camera": "200MP + 12MP + 10MP + 10MP",
        "battery": "5000mAh",
        "os": "Android 13",
        "display": "6.8-inch AMOLED 120Hz",
        "weight": "234g"
      },
      "availability": true,
      "warranty": "1 year"
    },
    {
      "id": 4,
      "images":[
          "/src/assets/iphone14pro1.png",
          "/src/assets/iphone14pro2.png",
          "/src/assets/iphone14pro3.png",
      ],
      "name": "iPhone 14 Pro Max",
      "category": "Smartphone",
      "brand": "Apple",
      "price": 1099,
      "currency": "USD",
      "rating": 4.7,
      "specifications": {
        "processor": "Apple A16 Bionic",
        "ram": "6GB",
        "storage": "256GB",
        "camera": "48MP + 12MP + 12MP",
        "battery": "4323mAh",
        "os": "iOS 16",
        "display": "6.7-inch Super Retina XDR",
        "weight": "240g"
      },
      "availability": true,
      "warranty": "1 year"
    },
    {
      "id": 5,
      "images":[
          "/src/assets/appleipad1.png",
          "/src/assets/appleipad2.png",
          "/src/assets/appleipad3.png",
      ],
      "name": "Apple iPad Pro 12.9",
      "category": "Tablet",
      "brand": "Apple",
      "price": 1299,
      "currency": "USD",
      "rating": 4.8,
      "specifications": {
        "processor": "Apple M2 Chip",
        "ram": "8GB",
        "storage": "512GB",
        "display": "12.9-inch Liquid Retina XDR",
        "battery": "10 hours",
        "os": "iPadOS 16",
        "weight": "682g",
        "connectivity": ["Wi-Fi 6E", "Bluetooth 5.3"]
      },
      "availability": true,
      "warranty": "1 year"
    },
    {
      "id": 6,
      "images":[
        "/src/assets/GalaxytabS81.png",
        "/src/assets/GalaxytabS82.png",
        "/src/assets/GalaxytabS83.png",
    ],
      "name": "Samsung Galaxy Tab S8 Ultra",
      "category": "Tablet",
      "brand": "Samsung",
      "price": 1099,
      "currency": "USD",
      "rating": 4.5,
      "specifications": {
        "processor": "Snapdragon 8 Gen 1",
        "ram": "12GB",
        "storage": "256GB",
        "display": "14.6-inch Super AMOLED",
        "battery": "11200mAh",
        "os": "Android 12",
        "weight": "726g",
        "connectivity": ["Wi-Fi 6E", "Bluetooth 5.2"]
      },
      "availability": false,
      "warranty": "1 year"
    },
    {
      "id": 7,
      "images":[
        "/src/assets/applewatch1.png",
        "/src/assets/applewatch2.png",
        "/src/assets/applewatch3.png",
    ],
      "name": "Apple Watch Ultra",
      "category": "Smartwatch",
      "brand": "Apple",
      "price": 799,
      "currency": "USD",
      "rating": 4.7,
      "specifications": {
        "display": "49mm Retina Always-On",
        "battery": "36 hours",
        "os": "watchOS 9",
        "features": ["GPS", "Blood Oxygen", "ECG", "Water Resistant"],
        "weight": "61g"
      },
      "availability": true,
      "warranty": "1 year"
    },
    {
      "id": 8,
      "images":[
        "/src/assets/sonyWh1.png",
        "/src/assets/sonyWh2.png",
        "/src/assets/sonyWh3.png",
    ],
      "name": "Sony WH-1000XM5",
      "category": "Headphones",
      "brand": "Sony",
      "price": 399,
      "currency": "USD",
      "rating": 4.8,
      "specifications": {
        "type": "Over-Ear",
        "noiseCancellation": true,
        "battery": "30 hours",
        "connectivity": "Bluetooth 5.2",
        "weight": "250g",
        "charging": "USB-C Fast Charging"
      },
      "availability": true,
      "warranty": "1 year"
    },
    {
      "id": 9,
      "images":[
        "/src/assets/mouse1.png",
        "/src/assets/mouse2.png",
        "/src/assets/mouse3.png",
    ],
      "name": "Logitech MX Master 3S",
      "category": "Accessory",
      "brand": "Logitech",
      "price": 99,
      "currency": "USD",
      "rating": 4.6,
      "specifications": {
        "type": "Wireless Mouse",
        "battery": "70 days",
        "connectivity": ["Bluetooth", "USB Receiver"],
        "features": ["MagSpeed Scroll", "Multi-Device Control"],
        "weight": "141g"
      },
      "availability": true,
      "warranty": "1 year"
    }
  ]

  export default ProductItems