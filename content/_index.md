---
title: Home
subtitle: "Tempat Berbagi Keluh Kesah"
---
# Ini Heading Satu
Disini mungkin ngak terlalu fokus pada isi konten, aku cuma ingin menunjukkan tulisan inj yang saya tulis di file markdown dan di generate dengan hugo, dan menggunakan tema yang saya buat, ini sebagai paragraf pertama di artikel ini, selanjutnya kita menuju paragraf kedua.

Ini adalah paragraf kedua yang aku tulis menggunakan text editor markdown, yaitu **Obsidian**, bukan promosi tapi jujur menulis catatan dengan aplikasi ini sangat mudah dan ya fitur nya yang sangat banyak, seperti contoh:
- Linking antara catatan 
- Graph View
- Front matter YAML untuk metadata 
- Tema yang sangat melimpah
- Plugin yang sangat banyak juga
- dan nasih banyak lagi
ups😅 malah curhat. yuk ke Heading selajutnya 

## Ini Heading Dua
🤔 Cerita apa lagi ya, mungkin kalian bertanya, tentang apa itu Heading, it's okay akh akan jelaskan sedikit tentang Heading:
{{< prompt type="info" title="Ini Adalah Info" >}}
Heading secara umum adalah teks yang digunakan untuk memberi penanda atau judul pada bagian tertentu dari sebuah konten. Tujuan utama heading adalah untuk memberikan struktur dan hierarki pada teks, memudahkan pembaca untuk memahami topik atau subtopik yang sedang dibahas. Heading juga membantu dalam navigasi, baik secara visual maupun dalam pencarian informasi di dalam teks. Dalam berbagai konteks, heading bisa ditemukan dalam artikel, buku, atau halaman web untuk membagi dan menandai bagian-bagian penting.
{{< /prompt >}}

😁 Faham?, saya rasa tidak perlu dijelaskan kalian sudah mengerti, tapi ngak papa, daripada ngak ada yang ku tulis, yuk lanjut ke Heading tiga 

### Ini Heading Tiga
🤔 Mungkin ada yang bertanya cara membuat Heading di markdown. oke tenang, header di markdown itu sangat simpel dab dan mudah, cukup gunakan `#` di awal text, otomatis Heading dibuat, contoh:

```markdown
# Ini Heading 1
## Ini Heading 2
### Ini Heading 3
#### Ini Heading 4
##### Ini Heading 5
###### Ini Heading 6
```
Easy kan? 🤣, ya berbeda dengan html, kali harus melakukan seperti ini untuk membuat Heading:
```html
<h1>Ini Heading 1</h1>
<h2>Ini Heading 2</h2>
<h3>Ini Heading 3</h3>
<h4>Ini Heading 4</h4>
<h5>Ini Heading 5</h5>
<h6>Ini Heading 6</h6>
```
Ya walaupun sama-sama output heading juga, cara penulisan beda. dan fakta menariknya, di markdown kalian juga bisa menuliskan atau menyisipkan syntax html, kalian bisa coba sendiri tentunya. 🤔 apa lagi selanjutnya?
### Teks
- **Teks Tebal**: `**teks tebal**` → **teks tebal**  
- *Teks Miring*: `*teks miring*` → *teks miring*  
- ***Tebal dan Miring***: `***teks ini tebal dan miring***` → ***teks ini tebal dan miring***  
- ~~Dicoret~~: `~~teks dicoret~~` → ~~teks dicoret~~  
- **Kode Inline**: `` `kode` `` → `kode`

### Daftar
#### Daftar Tak Berurut
Gunakan tanda `-`, `*`, atau `+`:
```markdown
- Item pertama
- Item kedua
	- Sub-item pertama
	- Sub-item kedua
```

#### Daftar Berurut
Gunakan angka diikuti tanda titik (`1.`, `2.`):
```markdown
1. Item pertama
2. Item kedua
	1. Sub-item pertama
	2. Sub-item kedua
```

### Tautan
- **Tautan Teks**: `[Nama Tautan](https://example.com)`  
  Contoh: [Klik di sini](https://example.com)  
- **Tautan Langsung**: `<https://example.com>`

### Gambar
Gunakan sintaks berikut untuk menampilkan gambar:
```markdown
![Alt Text](https://via.placeholder.com/150 "Tooltip Gambar")
```
Hasilnya:  
![Alt Text](https://via.placeholder.com/150 "Tooltip Gambar")

### Tabel
Yup table di markdown juga mudah, mau tahu? nih aku beritahu example nya:
```markdown
| Header 1    | Header 2    | Header 3    |
|-------------|-------------|-------------|
| Baris 1 Kol 1 | Baris 1 Kol 2 | Baris 1 Kol 3 |
| Baris 2 Kol 1 | Baris 2 Kol 2 | Baris 2 Kol 3 |
```

Hasilnya:

| Header 1    | Header 2    | Header 3    |
|-------------|-------------|-------------|
| Baris 1 Kol 1 | Baris 1 Kol 2 | Baris 1 Kol 3 |
| Baris 2 Kol 1 | Baris 2 Kol 2 | Baris 2 Kol 3 |

### Tabel dengan Alignment

```markdown
| Kiri        | Tengah       | Kanan        |
|:------------|:------------:|-------------:|
| Baris 1     | Baris 1      | Baris 1      |
| Baris 2     | Baris 2      | Baris 2      |
```

Hasilnya:

| Kiri        | Tengah       | Kanan        |
|:------------|:------------:|-------------:|
| Baris 1     | Baris 1      | Baris 1      |
| Baris 2     | Baris 2      | Baris 2      |

---
### Checklist
- [x] Markdown mendukung checklist!
- [ ] Checklist yang belum dicek
### Horizontal Rules
🤔 muncul garis horizontal ya. caranya cukup mudah kok tinggal gunakan 
```markdown
---
```
kakau di html
```html
<hr>
```
### Rumus Matematika
🤔 Aku ngak  begitu mengerti tentang matematika, tapi aku bisa beritahu kamu cara menulis di Markdown, tenang 😅
Gunakan sintaks LaTeX untuk menulis rumus matematika:  
- Inline: ```$E = mc^2$``` → $E = mc^2$
- Blok:  
```markdown
$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

Atau bisa juga 

\[
\int_0^1 x^2 \, dx = \frac{1}{3}
\]

Tapi yang berjalan baik di Obsidian adalah $$ $$
```
$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

Cukup? butuh Sempel lagi?, tenang masih banyak sempel nya:
#### 1. Persamaan Linear
Persamaan linear sederhana dapat ditulis sebagai:
\[
ax + b = c
\]

Misalnya, jika \( a = 2 \), \( b = 3 \), dan \( c = 7 \), maka solusi untuk \( x \) adalah:
\[
x = \frac{c - b}{a} = \frac{7 - 3}{2} = 2
\]

#### 2. Fungsi Kuadrat
Fungsi kuadrat didefinisikan sebagai:
\[
f(x) = ax^2 + bx + c
\]

Dengan rumus diskriminan:
\[
\Delta = b^2 - 4ac
\]

Solusi dari \( ax^2 + bx + c = 0 \) adalah:
\[
x = \frac{-b \pm \sqrt{\Delta}}{2a}
\]

Sebagai contoh, jika \( a = 1 \), \( b = -3 \), dan \( c = 2 \), maka:
\[
\Delta = (-3)^2 - 4(1)(2) = 9 - 8 = 1
\]
\[
x = \frac{-(-3) \pm \sqrt{1}}{2(1)} = \frac{3 \pm 1}{2}
\]
\[
x_1 = 2, \quad x_2 = 1
\]

#### 3. Integral Dasar
Integral tak tentu:
\[
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C, \quad \text{dengan } n \neq -1
\]

Sebagai contoh:
\[
\int x^2 \, dx = \frac{x^{2+1}}{2+1} + C = \frac{x^3}{3} + C
\]

Integral tentu:
\[
\int_a^b x \, dx = \left[ \frac{x^2}{2} \right]_a^b = \frac{b^2}{2} - \frac{a^2}{2}
\]

Jika \( a = 1 \) dan \( b = 3 \), maka:
\[
\int_1^3 x \, dx = \frac{3^2}{2} - \frac{1^2}{2} = \frac{9}{2} - \frac{1}{2} = 4
\]
#### 4. Deret Tak Hingga
Jumlah deret geometris dengan rasio \( |r| < 1 \) diberikan oleh:
\[
S = \frac{a}{1 - r}
\]

Sebagai contoh, untuk deret:
\[
1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \dots
\]
di mana \( a = 1 \) dan \( r = \frac{1}{2} \), maka:
\[
S = \frac{1}{1 - \frac{1}{2}} = 2
\]

#### 5. Matriks
Operasi penjumlahan dua matriks:
\[
A = \begin{bmatrix} 1 & 2 \\ 3 & 4 \end{bmatrix}, \quad
B = \begin{bmatrix} 5 & 6 \\ 7 & 8 \end{bmatrix}
\]

\[
A + B = \begin{bmatrix} 1+5 & 2+6 \\ 3+7 & 4+8 \end{bmatrix} =
\begin{bmatrix} 6 & 8 \\ 10 & 12 \end{bmatrix}
\]

#### 6. Limit
Limit fungsi saat \( x \to 0 \):
\[
\lim_{x \to 0} \frac{\sin x}{x} = 1
\]

Limit saat \( x \to \infty \):
\[
\lim_{x \to \infty} \frac{1}{x} = 0
\]

---
### Kutipan
Gunakan tanda `>`:
```markdown
> "Ini adalah kutipan sederhana."
```
Hasilnya:  
> "Ini adalah kutipan sederhana."

### Blok Kode
Gunakan tiga backtick (```) di atas dan bawah kode:
```javascript
function sayHello() {
	console.log("Hello, World!");
}
```
#### Markdown 
```markdown
# ini contoh untuk markdown 
```
#### Python 
```python
# Python Example
def greet(name):
    print(f"Hello, {name}")

greet("World")
```
#### Javascript
```javascript
// JavaScript Example
function greet(name) {
    console.log(`Hello, ${name}`);
}

greet("World");
```
#### Html
```html
<!-- HTML Example -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example HTML</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>
```
#### Css
```css
/* CSS Example */
body {
    background-color: #f0f0f0;
    font-family: Arial, sans-serif;
}

h1 {
    color: #333;
    text-align: center;
}
```
#### Scss
```scss
$font-size: 14px;
body {
	background-color: #f0f0f0;
    font-family: Arial, sans-serif;
    h1 {
	    color: #333;
	    text-align: center;
	    font-size: $font-size;
    }
}
```
#### Bash
```bash
# Bash Example
echo "Hello, World!"
```
#### Java
```java
// Java Example
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```
#### C
```c
/* C Example */
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```
#### C++
```cpp
/* C++ Example */
#include <iostream>

int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```
#### Ruby
```ruby
# Ruby Example
def greet(name)
  puts "Hello, #{name}!"
end

greet("World")
```
#### PHP
```php
<!-- PHP Example -->
<?php
echo "Hello, World!";
?>
```
#### SQL
```sql
-- SQL Example
SELECT 'Hello, World!';
```
#### Json
```json
// JSON Example
{
  "message": "Hello, World!"
}
```
#### YAML
```yaml
# YAML Example
message: "Hello, World!"
```
#### Typescript
```typescript
// TypeScript Example
function greet(name: string): void {
    console.log(`Hello, ${name}`);
}

greet("World");
```
#### Golang (Go)
```go
// Go Example
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```
#### Swift
```swift
// Swift Example
import Foundation

func greet(name: String) {
    print("Hello, World")
```
#### Kotlin
```kotlin
// Kotlin Example
fun greet(name: String) {
    println("Hello, $name")
}

fun main() {
    greet("World")
}
```
#### Rust
```rust
// Rust Example
fn greet(name: &str) {
    println!("Hello, {}", name);
}

fn main() {
    greet("World");
}
```
#### Perl
```perl
# Perl Example
print "Hello, World!\n";
```
#### Lua
```lua
-- Lua Example
print("Hello, World!")
```
#### Scala
```scala
// Scala Example
object HelloWorld {
    def main(args: Array[String]): Unit = {
        println("Hello, World!")
    }
}
```
#### Haskell
```haskell
-- Haskell Example
main :: IO ()
main = putStrLn "Hello, World!"
```
#### Elixir 
```elixir
# Elixir Example
IO.puts "Hello, World!"
```
#### Xml
```xml
<!-- XML Example -->
<message>Hello, World!</message>
```
#### PowerShell
```powershell
# PowerShell Example
Write-Output "Hello, World!"
```
#### Batch 
```batch
:: Batch Example
echo Hello, World!
```
#### VHDL
```vhdl
-- VHDL Example
library IEEE;
use IEEE.STD_LOGIC_1164.ALL;

entity hello_world is
end hello_world;

architecture Behavioral of hello_world is
begin
    process
    begin
        report "Hello, World!";
        wait;
    end process;
end Behavioral;
```
#### R
```r
# R Example
print("Hello, World!")
```
#### MATLAB 
```matlab
% MATLAB Example
disp('Hello, World!')
```

## Penutup

Markdown adalah alat yang sangat berguna untuk membuat dokumen teks dengan pemformatan yang bersih dan sederhana. Dengan memahami sintaks dasarnya, Anda dapat dengan mudah membuat dokumen yang rapi, terstruktur, dan mudah dibaca di berbagai platform.  
Selamat mencoba!
