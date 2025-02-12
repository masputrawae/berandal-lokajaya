---
title: Home
subtitle: "Tempat Berbagi Keluh Kesah"
---
## Golang Example
```go
package main

import "fmt"

// Struct: Mendefinisikan tipe data baru
type Person struct {
    Name string
    Age  int
}

// Fungsi sederhana
func greet(name string) string {
    return "Hello, " + name + "!"
}

func main() {
    // Variabel dan konstanta
    var message string = "Belajar Golang"
    age := 25 // Deklarasi dengan inferensi tipe
    const pi = 3.14

    fmt.Println(message)
    fmt.Println("Usia saya:", age)
    fmt.Println("Nilai Pi:", pi)

    // Slice (array dinamis)
    numbers := []int{1, 2, 3, 4, 5}
    numbers = append(numbers, 6)
    fmt.Println("Slice:", numbers)

    // Map (seperti dictionary di Python)
    capitals := map[string]string{
        "Indonesia": "Jakarta",
        "Japan": "Tokyo",
    }
    capitals["USA"] = "Washington D.C."
    fmt.Println("Ibukota Indonesia:", capitals["Indonesia"])

    // Percabangan (if-else)
    if age >= 18 {
        fmt.Println("Anda sudah dewasa.")
    } else {
        fmt.Println("Anda masih anak-anak.")
    }

    // Perulangan for
    for i := 0; i < 5; i++ {
        fmt.Println("Perulangan ke-", i)
    }

    // Menggunakan struct
    person := Person{Name: "Budi", Age: 30}
    fmt.Println("Nama:", person.Name, "| Umur:", person.Age)

    // Memanggil fungsi
    fmt.Println(greet("Andi"))
}
```