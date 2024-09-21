
# Harga Emas - JSON API

Proyek ini adalah aplikasi sederhana berbasis Node.js yang menampilkan harga emas terkini dalam format JSON. Aplikasi ini mengambil data dari situs [harga-emas.org](https://harga-emas.org) dan menyajikannya melalui endpoint API serta halaman HTML.

## Fitur

- Mengambil data harga emas dari sumber eksternal.
- Menyediakan data harga emas dalam berbagai satuan (ounce, gram, kilogram).
- Menampilkan data harga dalam bentuk JSON yang dapat diakses melalui endpoint API.
- Menyajikan data pada halaman HTML yang menarik dan mudah dibaca.

## Teknologi yang Digunakan

- **Node.js**: Platform server-side untuk menjalankan JavaScript.
- **Express**: Framework minimalis untuk membuat server HTTP.
- **Linkedom**: Library untuk parsing dan manipulasi DOM di server-side.

## Instalasi

1. Clone repository ini ke mesin lokal Anda:

   ```bash
   git clone https://github.com/username/harga-emas-json-api.git
   cd harga-emas-json-api
   ```

2. Install semua dependencies yang diperlukan:

   ```bash
   npm install
   ```

## Menjalankan Aplikasi

1. Jalankan server dengan perintah berikut:

   ```bash
   node server.js
   ```

2. Akses data harga emas dalam format JSON dengan membuka URL berikut di browser:

   ```
   http://localhost:3000/gold-prices
   ```

3. Untuk melihat data dalam tampilan HTML, buka:

   ```
   http://localhost:3000
   ```

## Struktur Proyek

- `server.js` - File utama untuk menginisialisasi server Express, mengambil data dari sumber, dan mengirimkan respons JSON.
- `index.html` - Halaman HTML sederhana untuk menampilkan data harga emas yang diambil dari server.
- `package.json` - File konfigurasi Node.js yang mencantumkan dependencies dan skrip yang tersedia.

## Cara Kerja

1. **Server Node.js**: Mengambil data harga emas terkini dari sumber eksternal menggunakan `fetch` dan memprosesnya dengan `linkedom` untuk parsing HTML.
2. **Endpoint API**: Menyediakan data yang telah diproses dalam format JSON yang bisa diakses melalui `/gold-prices`.
3. **Tampilan HTML**: Menampilkan data harga emas secara langsung di halaman web menggunakan JavaScript untuk fetch data dari endpoint API.

## Kontribusi

Kami menyambut kontribusi dari siapa pun! Jika Anda ingin berkontribusi, silakan fork repository ini dan buat pull request dengan perubahan yang Anda buat.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Kontak

Jika ada pertanyaan atau masalah, jangan ragu untuk menghubungi kami melalui email: [email@example.com](mailto:email@example.com)
