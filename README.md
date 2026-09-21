# ceBol Blind Box

Landing page promosi satu halaman untuk blind box gantungan kunci ceBol. Situs
dibuat dengan React, Vite, JavaScript, dan CSS biasa. Tidak ada database,
checkout, login, atau library animasi tambahan.

## Menjalankan proyek

Prasyarat: Node.js versi 20 atau lebih baru.

```bash
npm install
npm run dev
```

Untuk memeriksa versi produksi:

```bash
npm run build
```

Hasil build berada di folder `dist`.

## Video marketing Remotion

Komposisi video vertikal 1080×1920 berada di folder `remotion/`. Video memakai
aset produk publik di `public/assets/` dan tidak menampilkan identitas karakter
secret.

```bash
npm run video:audio
npm run video:studio
npm run video:render
```

Hasil render utama berada di
`renders/cebol-launch-vertical.mp4`. Audio dibuat secara lokal melalui
`remotion/scripts/generate-audio.mjs`, sehingga tidak bergantung pada aset musik
pihak ketiga.

## Mengganti nomor WhatsApp

Buka `src/config/siteConfig.js`, lalu isi `whatsappNumber` menggunakan kode
negara tanpa tanda tambah atau spasi. Contoh:

```js
whatsappNumber: "6281234567890",
```

Semua tombol WhatsApp membaca nilai tersebut. Jika nilainya kosong, tombol
kontak otomatis disembunyikan.

Harga, periode peluncuran, pesan WhatsApp, serta tautan Instagram dan TikTok
juga dapat diperbarui dari file konfigurasi yang sama.

## Publikasi di Cloudflare Pages

Gunakan pengaturan berikut:

- Build command: `npm run build`
- Build output directory: `dist`
- Root directory: `/`

Situs tidak memerlukan environment variable, database, atau Cloudflare
Functions.

## Informasi yang masih sementara

- Estimasi harga: Rp20.000
- Periode peluncuran: September 2026
- Nomor WhatsApp penjual belum diisi
- Bahan dan ukuran gantungan kunci belum dikonfirmasi
- Deskripsi kepribadian karakter masih berupa konsep awal
