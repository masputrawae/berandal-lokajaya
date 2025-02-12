---
title: "Python: Kalkulator Sederhana"
description: membuat program kalkulator sederhana menggunakan python
excerpt: Pada Tanggal; Minggu, 20 Oktober 2024 pukul 15.10, aku sedang belajar python dan membuat sebuah program kalkulator sederhana, ini adalah kodenya, siapa tahu ada yang sedang mencari contekan ☝️
date: 2024-11-11
categories:
  - Python
tags:
  - python
  - belajar_python
  - basic_python
  - kalkulator_sederhana
  - programming
last_modified_at: 2024-11-15
author: Putra Jaya
---
# ✍️ Python: Membuat Kalkulator Sederhana
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

