---
title: 'Example Projects'
---
# Create markdown file with detailed documentation of the color scheme and its usage.

color_scheme_doc = """
# Warna Tema Gelap dan Terang

Dokumen ini menjelaskan pemilihan warna untuk tema gelap dan terang serta elemen-elemen apa yang cocok digunakan dengan masing-masing warna tersebut.

## **Warna Aksen Utama**

1. **`--cl-accent: #FF5722` (Oranye Hangat)**
   - **Deskripsi**: Warna aksen yang mencolok, cocok untuk menarik perhatian pengguna.
   - **Cocok untuk**:
     - Tombol utama
     - Ikon penting
     - Elemen yang perlu menonjol (misalnya, pemberitahuan penting)
   - **Mode yang cocok**: Dapat digunakan di kedua mode (terang dan gelap).
  
2. **`--cl-primary: #03A9F4` (Biru Lembut)**
   - **Deskripsi**: Warna biru yang menenangkan, cocok untuk elemen utama.
   - **Cocok untuk**:
     - Link utama
     - Tombol utama
     - Elemen interaktif lainnya
   - **Mode yang cocok**: Cocok di kedua mode, terutama di mode terang.

3. **`--cl-secondary: #8E24AA` (Ungu)**
   - **Deskripsi**: Warna ungu yang lebih terang, memberikan aksen sekunder.
   - **Cocok untuk**:
     - Tombol sekunder
     - Link sekunder
     - Elemen non-utama yang tetap perlu menonjol
   - **Mode yang cocok**: Cocok di kedua mode, terutama di mode terang.

4. **`--cl-tertiary: #FFEB3B` (Kuning)**
   - **Deskripsi**: Warna kuning cerah, cocok untuk penekanan tanpa urgensi.
   - **Cocok untuk**:
     - Badge
     - Ikon status ringan
     - Elemen penekanan yang tidak terlalu mendesak
   - **Mode yang cocok**: Lebih cocok di mode gelap, tetapi dapat digunakan di mode terang dengan hati-hati.

---

## **Warna Status**

5. **`--cl-info: #2196F3` (Biru Informasi)**
   - **Deskripsi**: Warna biru terang yang digunakan untuk status informasi.
   - **Cocok untuk**:
     - Pesan informasi
     - Notifikasi
   - **Mode yang cocok**: Cocok di kedua mode.

6. **`--cl-tip: #9E9E9E` (Abu-Abu Netral)**
   - **Deskripsi**: Warna abu-abu netral yang digunakan untuk elemen dengan kepentingan rendah.
   - **Cocok untuk**:
     - Tips
     - Catatan atau informasi tambahan yang tidak terlalu mencolok
   - **Mode yang cocok**: Cocok di kedua mode.

7. **`--cl-success: #4CAF50` (Hijau Keberhasilan)**
   - **Deskripsi**: Warna hijau cerah yang menunjukkan status sukses.
   - **Cocok untuk**:
     - Pesan sukses (misalnya, "Berhasil disimpan")
     - Elemen yang menandakan status positif
   - **Mode yang cocok**: Cocok di kedua mode.

8. **`--cl-warning: #FF9800` (Oranye Peringatan)**
   - **Deskripsi**: Warna oranye untuk peringatan.
   - **Cocok untuk**:
     - Peringatan ringan
     - Notifikasi yang memerlukan perhatian, tetapi tidak mendesak
   - **Mode yang cocok**: Cocok di mode terang, tetapi juga dapat digunakan di mode gelap dengan sedikit penyesuaian kontras.

9. **`--cl-danger: #F44336` (Merah Bahaya)**
   - **Deskripsi**: Warna merah yang digunakan untuk menunjukkan bahaya atau kesalahan.
   - **Cocok untuk**:
     - Pesan kesalahan
     - Ikon peringatan bahaya
   - **Mode yang cocok**: Cocok di kedua mode.

10. **`--cl-error: #D32F2F` (Merah Gelap)**
    - **Deskripsi**: Warna merah lebih gelap untuk menandakan kesalahan serius.
    - **Cocok untuk**:
      - Status kesalahan yang sangat mendesak
      - Pesan kesalahan kritis
    - **Mode yang cocok**: Cocok di kedua mode.

---

## **Warna Tombol dan Interaksi**

11. **`--cl-btn: #03A9F4` (Biru Lembut)**
    - **Deskripsi**: Warna utama untuk tombol, memberikan kesan profesional dan interaktif.
    - **Cocok untuk**:
      - Tombol utama
      - Elemen interaktif lainnya
    - **Mode yang cocok**: Cocok di kedua mode.

12. **`--cl-btn-active: #0288D1` (Biru Lebih Gelap)**
    - **Deskripsi**: Warna untuk tombol yang aktif atau dipilih.
    - **Cocok untuk**:
      - Status tombol aktif
      - Tombol yang sedang dipilih oleh pengguna
    - **Mode yang cocok**: Cocok di kedua mode.

13. **`--cl-btn-hover: #039BE5` (Biru Hover)**
    - **Deskripsi**: Warna saat tombol di-hover, memberikan feedback visual.
    - **Cocok untuk**:
      - Tombol yang sedang di-hover oleh pengguna
    - **Mode yang cocok**: Cocok di kedua mode.

14. **`--cl-btn-focus: #01579B` (Biru Fokus)**
    - **Deskripsi**: Warna saat tombol difokuskan (misalnya, menggunakan keyboard).
    - **Cocok untuk**:
      - Tombol yang difokuskan
    - **Mode yang cocok**: Cocok di kedua mode.

---

## **Warna Tautan**

15. **`--cl-link: #03A9F4` (Biru Lembut)**
    - **Deskripsi**: Warna utama untuk tautan, memberikan kontras dan mudah terlihat.
    - **Cocok untuk**:
      - Tautan utama di seluruh situs atau aplikasi
    - **Mode yang cocok**: Cocok di kedua mode.

16. **`--cl-link-active: #0288D1` (Biru Aktif)**
    - **Deskripsi**: Warna untuk tautan yang sedang aktif atau dipilih.
    - **Cocok untuk**:
      - Tautan yang aktif
    - **Mode yang cocok**: Cocok di kedua mode.

17. **`--cl-link-hover: #039BE5` (Biru Hover)**
    - **Deskripsi**: Warna saat tautan di-hover, memberikan umpan balik visual.
    - **Cocok untuk**:
      - Tautan yang sedang di-hover
    - **Mode yang cocok**: Cocok di kedua mode.

18. **`--cl-link-focus: #01579B` (Biru Fokus)**
    - **Deskripsi**: Warna saat tautan difokuskan, misalnya dengan keyboard.
    - **Cocok untuk**:
      - Tautan yang difokuskan
    - **Mode yang cocok**: Cocok di kedua mode.

---

## **Mode Gelap**

- **`--bg-body: #1A1A1A`** (Latar Belakang Utama Gelap)
  - **Deskripsi**: Memberikan nuansa gelap yang nyaman untuk mata.
  - **Cocok untuk**: Latar belakang utama di mode gelap.
  - **Mode yang cocok**: Gelap.

- **`--cl-text: #EAEAEA`** (Teks Terang)
  - **Deskripsi**: Warna teks terang yang memberikan kontras dengan latar belakang gelap.
  - **Cocok untuk**: Teks utama di mode gelap.
  - **Mode yang cocok**: Gelap.

---

## **Mode Terang**

- **`--bg-body: #F8F9FA`** (Latar Belakang Utama Terang)
  - **Deskripsi**: Latar belakang terang yang memberikan kesan bersih dan terang.
  - **Cocok untuk**: Latar belakang utama di mode terang.
  - **Mode yang cocok**: Terang.

- **`--cl-text: #212121`** (Teks Gelap)
  - **Deskripsi**: Teks gelap yang memberikan kontras pada latar belakang terang.
  - **Cocok untuk**: Teks utama di mode terang.
  - **Mode yang cocok**: Terang.

"""

# Save to a markdown file
file_path = "/mnt/data/warna_tema_dan_elemen.md"
with open(file_path, "w") as f:
    f.write(color_scheme_doc)

file_path
