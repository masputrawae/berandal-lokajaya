---
title: Roadmap Belajar JavaScript untuk Pemula
description: Panduan langkah demi langkah belajar JavaScript untuk pemula, mulai dari dasar hingga penggunaan modul modern dalam pengembangan web.
excerpt: Pelajari JavaScript dari dasar, manipulasi DOM, hingga integrasi dengan HTML & CSS, lengkap dengan tips dan proyek mini untuk pemula.
date: 2024-11-21
categories:
  - Belajar
  - JavaScript
  - Pemrograman
tags:
  - roadmap
  - javascript
  - pemula
  - belajar_programming
  - web_development
last_modified_at: 2024-11-21
author: Putra Jaya
---
### **Roadmap Belajar JavaScript untuk Pemula**  
**Tujuan**: Fokus pada JavaScript yang sering digunakan dalam web development, termasuk integrasi dengan HTML dan CSS.  

---

### **1. Dasar-Dasar JavaScript**
💡 **Durasi**: 1-2 minggu (30 menit - 1 jam/hari).  

1. **Memahami Dasar JavaScript:**
   - Apa itu JavaScript dan bagaimana cara kerjanya di browser.
   - Penempatan script:
     ```html
     <script src="script.js"></script>
     ```
   - Penulisan inline (sebaiknya dihindari):
     ```html
     <button onclick="alert('Hello!')">Click Me</button>
     ```

2. **Variabel dan Tipe Data:**
   - Deklarasi variabel (`let`, `const`):
     ```javascript
     const name = 'Mas Putra';
     let age = 20;
     ```
   - Tipe data: string, number, boolean, array, object.
     ```javascript
     const person = { name: 'Mas Putra', age: 20 };
     ```

3. **Operator:**
   - Aritmatika (`+`, `-`, `*`, `/`).
   - Perbandingan (`===`, `>`, `<`, `!==`).
   - Logika (`&&`, `||`, `!`).

---

### **2. Struktur Dasar Program**
💡 **Durasi**: 1 minggu.

1. **Conditionals:**
   - `if`, `else if`, `else`:
     ```javascript
     if (age > 18) {
       console.log('Dewasa');
     } else {
       console.log('Anak-anak');
     }
     ```

2. **Looping:**
   - `for`, `while`, `do...while`:
     ```javascript
     for (let i = 0; i < 5; i++) {
       console.log(i);
     }
     ```

3. **Fungsi:**
   - Deklarasi fungsi:
     ```javascript
     function greet(name) {
       return `Hello, ${name}!`;
     }
     ```
   - Arrow function:
     ```javascript
     const greet = (name) => `Hello, ${name}!`;
     ```

---

### **3. Manipulasi DOM**
💡 **Durasi**: 1-2 minggu.

1. **Seleksi Elemen:**
   - `document.querySelector` dan `getElementById`:
     ```javascript
     const title = document.querySelector('h1');
     title.textContent = 'Hello, Mas Putra!';
     ```

2. **Event Handling:**
   - Menambahkan event listener:
     ```javascript
     const button = document.querySelector('button');
     button.addEventListener('click', () => alert('Clicked!'));
     ```

3. **Manipulasi Elemen:**
   - Menambah/menghapus elemen:
     ```javascript
     const container = document.querySelector('.container');
     const newElement = document.createElement('p');
     newElement.textContent = 'New paragraph';
     container.appendChild(newElement);
     ```

---

### **4. Integrasi dengan HTML & CSS**
💡 **Durasi**: 1 minggu.

1. **Interaksi HTML:**
   - Mengambil nilai input:
     ```html
     <input id="nameInput" />
     <script>
       const input = document.querySelector('#nameInput').value;
     </script>
     ```

2. **Manipulasi CSS:**
   - Menambahkan atau menghapus class:
     ```javascript
     const box = document.querySelector('.box');
     box.classList.add('highlight');
     ```

---

### **5. Modul dan Library (Level Lanjut)**
💡 **Durasi**: 1 minggu.

1. **ES6 Modules:**
   - Import/export:
     ```javascript
     // file.js
     export const greet = (name) => `Hello, ${name}!`;

     // main.js
     import { greet } from './file.js';
     ```

2. **Penggunaan Library:**
   - Bootstrap JS, jQuery (optional).
   - Lanjutkan dengan modul-modul modern seperti yang tadi kita bahas (e.g., `import { Tooltip } from 'bootstrap';`).

---

### **Tips Belajar**:
1. **Praktik Langsung:** Setiap selesai belajar teori, langsung praktik di browser atau editor.
2. **Proyek Mini:** Buat hal kecil, misalnya kalkulator sederhana, to-do list, atau modal popup.
3. **Latihan di Platform Online:** Coba platform seperti:
   - [FreeCodeCamp](https://www.freecodecamp.org/)
   - [JavaScript.info](https://javascript.info/)
   - [Codewars](https://www.codewars.com/)

---