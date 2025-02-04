---
title: Python - Membuat Kalkulator Sederhana
date: 2024-10-10
last_modified: 2025-01-07
description: Panduan membuat kalkulator sederhana menggunakan Python. Cocok untuk pemula yang ingin belajar pemrograman.
excerpt: Pelajari cara membuat kalkulator sederhana dengan Python, mencakup operasi penjumlahan, pengurangan, perkalian, dan pembagian.
categories:
  - Python
  - Pemrograman
  - Tutorial
group: Python
reference:
  - name: Dokumentasi Python
    url: https://docs.python.org/3/
tags:
  - python
  - tutorial
  - pemrograman
  - kalkulator
image: https://picsum.photos/720/480?6
thumbnail: https://picsum.photos/480?6
---
## ✍️ Python: Membuat Kalkulator Sederhana
Pada Tanggal: Minggu, 20 Oktober 2024 pukul 15.10, aku sedang belajar python dan membuat sebuah program kalkulator sederhana, ini adalah kodenya, siapa tahu ada yang sedang mencari contekan ☝️

---

```python
while True:
    user = int(input(f'''
[;;]===================[;;]
[1] Penjumlahan
[2] Pengurangan
[3] Perkalian
[4] Pembagian
[;;]===================[;;]
---------------------------
Masukkan 1/2/3/4 : '''))
# Penjumlahan
    if user == 1:
        a = float(input("Masukkan Angka Pertama : "))
        b = float(input("Masukkan Angka Kedua   : "))
        print("====================================")
        print("Hasil Dari", a, "+", b, "=", a + b)
# Pengurangan
    elif user == 2:
        a = float(input("Masukkan Angka Pertama : "))
        b = float(input("Masukkan Angka Kedua   : "))
        print("====================================")
        print("Hasil Dari", a, "-", b, "=", a - b)
# Perkalian
    elif user == 3:
        a = float(input("Masukkan Angka Pertama : "))
        b = float(input("Masukkan Angka Kedua   : "))
        print("====================================")
        print("Hasil dari", a, "*", b, "=", a * b)
# Pembagian
    elif user == 4:
        a = float(input("Masukkan Angka Pertama : "))
        b = float(input("Masukkan Angka Kedua   : "))
        if b == 0:
            print("Error: Tidak Bisa Dibagi Dengan Nol!")
        else:
            print("====================================")
            print("Hasil dari", a, "/", b, "=", a / b)
# Melanjutkan Program atau Tidak
    lanjut = input("\nApakah kamu mau mencoba lagi? (y/n): ").lower()
    if lanjut != 'y':
        print("Terima kasih sudah menggunakan program ini! Sampai jumpa!")
        break
```
---

