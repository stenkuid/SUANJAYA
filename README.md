# Proyek SUANJAYA 🚀

Halo adik-adik hebat berumur 10 tahun! Selamat datang di proyek **SUANJAYA**! 🌟

Kakak akan jelaskan apa sih isi dari folder ini dengan bahasa yang sangat mudah dimengerti, tanpa coding yang rumit-rumit!

---

## 🧸 Apa sih Proyek Ini?

Bayangkan kamu sedang membuat sebuah **Toko Mainan** (ini adalah *Website* kamu). Proyek ini membantu kamu membangun toko mainan tersebut, menyimpannya di tempat yang aman, dan membuat tombol rahasia untuk melihat surat dari pengunjung toko kamu!

Di dalam proyek ini, kita menggunakan beberapa alat keren:

1. **Website kita (Halaman Depan)** 🏠: Ini adalah lembaran kertas cantik (`index.html`) yang berisi gambar, warna, dan tulisan tentang toko mainan kita supaya orang tertarik datang.
2. **Kotak Harta Karun (D1 Database)** 🏴‍☠️: Ketika pengunjung menulis surat untuk kita (misal menulis email atau pesan masukan), surat itu otomatis terbang dan masuk ke dalam kotak harta karun ajaib bernama **D1**. (Catatan: untuk saat ini, kotak harta karun ini disimpan sementara di awan sebagai *placeholder* agar tidak melebihi kapasitas gratis).
3. **Ruang Rahasia Bos Toko (Admin Dashboard)** 🔑: Ini adalah ruangan rahasia (`admin.html`) tempat kamu masuk menggunakan kunci rahasia (ID: `SUANJAYA@stenku`, Password: `admin123`). Di dalam ruangan ini, kamu bisa membuka kotak harta karun dan membaca semua surat dari pengunjung!
4. **Tanah Ajaib (Cloudflare Pages)** ☁️: Ini adalah tempat kita memajang toko mainan kita di awan, sehingga teman-teman kamu dari seluruh dunia bisa mengunjungi toko mainan kamu lewat internet di alamat `https://suanjaya.pages.dev`.
5. **Buku Harian Ajaib (GitHub)** 📖: Tempat kita menyimpan salinan kode toko mainan kita di internet (`https://github.com/stenkuid/SUANJAYA`). Kalau komputermu rusak, tokomu tidak akan hilang karena sudah dicatat di buku harian ajaib ini!

---

## 📂 Isi Lemari Proyek Ini (Struktur Folder)

* **`public/`** 📦: Lemari utama berisi barang-barang toko yang dipajang.
  * **`index.html`** 🎨: Halaman depan toko yang cantik untuk pengunjung.
  * **`admin.html`** 🔐: Ruang rahasia bos toko (kamu!) untuk membaca surat masuk.
  * **`_worker.js`** 🤖: Robot kecil tidak terlihat yang bertugas mengantar surat pengunjung ke kotak harta karun dan memeriksa kunci pas kamu saat mau masuk ruang rahasia.
* **`schema.sql`** 📝: Petunjuk cara membuat Kotak Harta Karun (D1) agar rapi dan muat banyak surat.
* **`wrangler.toml`** ⚙️: Kabel penghubung untuk menyambungkan robot kecil (`_worker.js`) dengan Kotak Harta Karun (D1). (Masih berupa *template* karena menggunakan *placeholder* D1 gratisan).
* **`package.json`** ⚡: Tombol ajaib sekali klik untuk langsung menyimpan kode ke GitHub dan mengirimkannya ke internet (Cloudflare).
* **`README.md`** 📖: Buku panduan ini!

---

## 🚀 Cara Menjalankannya!

Kalau kamu ingin mengirimkan pembaruan toko ke internet, kamu tinggal membuka terminal (layar hitam tempat mengetik perintah komputer) lalu ketik mantra ini:

```bash
npm run deploy
```

Komputer akan otomatis:
1. Menulis catatan di buku harian ajaib (**GitHub**).
2. Memperbarui toko mainan kamu di tanah ajaib (**Cloudflare Pages**).

Hebat sekali kan? Selamat bermain dan bereksperimen dengan tokomu! 🎉
