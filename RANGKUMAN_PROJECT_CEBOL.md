# Rangkuman Project Website ceBol

Dokumen handover untuk membawa website ke project/chat baru. Disusun 5 September 2026 berdasarkan source yang dibaca langsung di `/Users/mangha/Documents/project_blind_box` dan keputusan pengguna dalam percakapan sebelumnya.

## 1. Tujuan dan produk

Website promosi satu halaman untuk **blind box gantungan kunci ceBol × KAPLIK**, terinspirasi kehidupan sekolah di Tukad Citarum. Pemesanan melalui WhatsApp; bukan aplikasi checkout atau pengelolaan toko.

- Tagline Indonesia: “Jangan intip. Biar kotaknya yang memilihmu.”
- Tagline Inggris: “Don't peek. Let the box choose you.”
- Dua bahasa: Indonesia sebagai default dan Inggris.
- Pembeli utama membuka website melalui HP; acuan iPhone 13 pada viewport 390×844. Layar lebar sekitar 1880 px juga perlu rapi.
- Pengguna sudah menyukai arah desain saat ini. Pertahankan cirinya saat membawa project ini ke tempat baru.

## 2. Aturan penjualan yang telah disepakati

- Satuan: 1 blind box berisi 1 karakter acak.
- Paket isi 4: 4 blind box dengan 4 karakter berbeda, tanpa duplikat dalam satu paket.
- Koleksi terdiri dari 4 reguler dan 1 secret.
- Reguler: ceBol Sekolah, ceBol Polosan, ceBol PKL, dan ceBol Seniman.
- Paket tanpa secret berisi keempat reguler. Jika ada secret, isinya 3 reguler berbeda + 1 secret; secret menggantikan satu reguler, bukan menambah isi menjadi lima.
- Karakter secret tidak ditampilkan nama atau desain aslinya di UI, termasuk ketika diperoleh dalam simulator.
- Pembelian beberapa box satuan dapat menghasilkan duplikat. Simulator tetap membuka satu box setiap kali, bukan simulasi paket sekaligus.

## 3. Identitas visual dan preferensi pengguna

- Hijau gelap `#081a10`, hijau sangat gelap `#031008`, pink `#ef2d9c`, pink terang `#ff3f9b`, kuning `#f9b313`, krem `#fff8ef`.
- Kesan playful dan berani: judul besar, aksen tulisan tangan, pola titik/grid, dekorasi lingkaran pink, kartu berbingkai dan bayangan tegas.
- Pakai gambar kemasan/karakter yang sudah tersedia. Hindari mengarang ulang karakter atau identitas secret.
- Jangan gunakan emoji. Untuk ikon baru atau penggantian ikon, gunakan ikon SVG utuh, misalnya dari `lucide-react`; jangan merakit gembok/panah dari beberapa potongan CSS.
- Perubahan ikon harus dibatasi ke elemen yang dimaksud. Pernah terjadi perbaikan panah yang merusak ikon lain karena selector terlalu umum.
- Kartu koleksi di HP harus konsisten ukurannya. Hindari judul bertabrakan dengan kolom lain, teks terjepit vertikal, dan overflow pada layar lebar.
- Beri penjelasan singkat penyebab dan cara perbaikan ketika menangani error; pengguna ingin memahami solusinya.

## 4. Susunan halaman dan perilaku yang dipertahankan

1. Navbar: logo, navigasi antarbagian, pilihan ID/EN, menu mobile.
2. Hero: tagline, kemasan, penjelasan singkat, kartu satuan/paket 4, estimasi harga dan periode peluncuran. Tombol “Lihat koleksi” dan “Buka kotaknya” sudah dihapus sesuai permintaan agar konten ditemukan melalui scroll. Tautan WhatsApp bersifat opsional mengikuti konfigurasi.
3. Marquee: tulisan bergerak ke kiri dalam loop tanpa jeda kosong atau lompatan saat kembali ke awal. Struktur sekarang memakai dua kelompok identik.
4. Tentang: cerita brand dan penjelasan blind box.
5. Isi produk dan kemasan: fakta satuan/paket serta preview kemasan.
6. Penjelasan paket: diagram 4 reguler dibandingkan 3 reguler + 1 secret.
7. Koleksi: 4 kartu reguler dan 1 kartu secret anonim.
8. Simulator satu box dengan progres koleksi dan alur selesai di bawah.
9. Informasi peluncuran/harga.
10. Pemesanan `#pesan`: pilihan satuan/paket, pesan WhatsApp sesuai pilihan, dan langkah pemesanan.
11. FAQ dan footer dengan tombol kembali ke atas.

## 5. Simulator: keputusan final

- Kotak itu sendiri adalah tombol yang diketuk. Petunjuk ada pada teks pengantar, tanpa banner petunjuk tambahan yang pernah diminta dihapus.
- Animasi pembukaan sekitar 950 ms, atau 120 ms untuk preferensi reduced motion.
- Peluang secret dalam simulator adalah 5%. Ini bukan peluang resmi produk fisik. Peluang nyata belum dikonfirmasi.
- Hasil reguler menampilkan gambar, nama, dan deskripsi. Hasil secret menampilkan gembok, teks secret, serta efek khusus tanpa identitas asli.
- Catat karakter berdasarkan ID unik di `collectedIds`. Duplikat tidak menambah progres. Progres mulai 0/5 dan berakhir 5/5.
- Saat 5/5, kotak langsung dinonaktifkan, tetapi hasil kelima tetap terlihat—baik reguler maupun secret.
- Tampilkan tombol “Lihat koleksi lengkap” / “View complete collection” berikon piala pada hasil kelima.
- Kartu perayaan baru muncul setelah tombol itu ditekan, tanpa timer otomatis.
- Kartu perayaan menyatakan semua koleksi ditemukan dan menyediakan “Beli sekarang” / “Buy now” menuju `#pesan`.
- Hentikan efek khusus secret ketika kartu perayaan tampil.
- Tidak ada tombol kembali ke hasil terakhir atau reset koleksi. Refresh halaman mengulang progres dari nol; tidak ada penyimpanan permanen.

### Catatan teknis penting

- Pisahkan `isComplete` (mengunci kotak dan menampilkan tombol lanjutan) dari `showCompletion` (menampilkan kartu perayaan). Jangan langsung mengganti hasil kelima ketika 5/5 tercapai.
- Pertahankan class statis `simulator-stage reveal` pada area simulator. `App.jsx` menambahkan `is-visible` lewat IntersectionObserver lalu menghentikan observasi. Class dinamis pada elemen yang sama pernah menimpa `is-visible`, sehingga simulator menghilang setelah secret lalu buka ulang.
- Class status `has-secret-result` dan `is-complete` berada pada section pembungkus. Efek secret hanya aktif ketika `isSecret && !showCompletion`.
- Kartu hasil menggunakan `aria-live="polite"` dan `aria-atomic="true"`; hasil kelima mendahului perayaan dalam alur DOM.

## 6. Teknologi dan sumber

- React 19.2.6, Vite 8.0.13, JavaScript, CSS biasa, `lucide-react`; versi ini berasal dari manifest yang dibaca saat handover.
- Node.js minimal 20 menurut `package.json`. Gunakan lockfile yang ada untuk menjaga dependensi konsisten.
- Entry point: `src/main.jsx` dan `src/App.jsx`.
- Teks ID/EN: `src/data/content.js`.
- Data 4 reguler: `src/data/characters.js`.
- Konfigurasi penjual, harga, periode peluncuran, dan pesan WhatsApp: `src/config/siteConfig.js`.
- Komponen: `src/components/`; CSS: `src/styles/main.css`.
- Asset publik utama: `public/assets/packaging-front.png` dan gambar empat reguler. Ada juga favicon, gambar Open Graph, `_headers`, dan `_redirects` dalam `public/`.
- Asset karakter lama yang tidak dipakai dan gambar kemasan belakang tidak dibawa ke repository publik karena dapat membuka identitas secret. Bagian preview kemasan memakai gambar depan yang aman untuk publik.
- `Icon.jsx` masih menyediakan beberapa ikon CSS lama. Ini kondisi source, bukan alasan untuk menambahkan ikon baru dengan potongan CSS.
- Tidak perlu database, login, payment gateway, panel admin, atau library animasi berat untuk cakupan promosi ini.

## 7. Data sementara dan status verifikasi

- Estimasi satuan yang masih tertulis: Rp20.000 / IDR 20K. Harga paket belum ditetapkan.
- Periode yang masih tertulis: September 2026; tanggal pasti belum ada. Walaupun tanggal handover sudah September, jangan otomatis menganggap produk sudah tersedia.
- Nomor WhatsApp, Instagram, dan TikTok masih kosong. Tombol kontak tersembunyi sampai dikonfigurasi; bagian pesan menunjukkan kontak belum tersedia.
- Bahan, dimensi final, stok, biaya pengiriman, dan cerita resmi karakter belum dikonfirmasi. Deskripsi reguler saat ini adalah konsep awal.
- Harga/tanggal juga muncul di sebagian teks dan metadata. Jika kelak diperbarui, cek semua lokasi terkait agar konsisten.
- Cloudflare Pages adalah tujuan hosting yang tercatat; build command `npm run build`, output `dist`. Handover ini tidak membuktikan adanya deployment aktif.
- Riwayat 23 Agustus 2026 mencatat lint/build berhasil dan pengujian hasil kelima reguler/secret pada 390×844 serta 1880×1000. Pada handover 5 September ini source dibaca ulang; build dan browser tidak dijalankan ulang.
- `npm test` saat ini hanya menjalankan build, bukan suite pengujian perilaku otomatis.

## 8. Menjalankan dan menguji project baru

```bash
npm ci
npm run dev
npm run lint
npm run build
```

Jalankan dari root project tujuan. Folder `dist` adalah hasil build, bukan source utama.

Untuk memindahkan project, bawa `src/`, `public/`, `index.html`, `package.json`, `package-lock.json`, `vite.config.js`, `eslint.config.mjs`, `.gitignore`, README, dan kedua dokumen handover. Dependensi `node_modules/` serta hasil `dist/` dapat dibuat ulang. Jika project baru berada di layanan cloud/chat yang tidak bisa membaca Mac, lampirkan source dan asset; path lokal saja tidak memindahkan berkas.

Script lama `npm run dev:tailscale` mengikat Vite ke IP `100.107.49.101`, port `4173`, dan memakai `--strictPort`. Nilai tersebut adalah konfigurasi lama yang harus dicocokkan dengan IP Tailscale Mac saat ini, bukan alamat universal untuk project baru. Untuk akses HP, kedua perangkat harus terhubung ke Tailscale, Mac aktif, server berjalan pada alamat yang dapat diakses HP, dan URL memakai IP Mac serta port server. Jika port terpakai, identifikasi prosesnya dahulu; jangan menghentikan proses lain secara membabi buta.

Checklist regresi ketika implementasi di project baru selesai: ID/EN; layout HP dan 1880 px; marquee mulus; ukuran kartu; ikon utuh; secret lalu retry tidak menghilang; duplikat tidak menambah progres; hasil kelima reguler/secret tetap terlihat; kotak terkunci di 5/5; tombol lanjutan baru membuka perayaan; tombol beli mencapai `#pesan`; logika acak produksi tetap 5% secret.
