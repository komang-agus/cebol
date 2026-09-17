# Prompt siap salin untuk project baru

Salin seluruh isi blok berikut menjadi pesan awal. Jika lingkungan baru tidak dapat membaca folder Mac, lampirkan juga source dan asset project lama serta `RANGKUMAN_PROJECT_CEBOL.md`.

```text
Saya ingin membawa website promosi blind box gantungan kunci ceBol ke project baru ini. Jadikan versi yang sudah saya sukai sebagai dasar. Saya ingin mempertahankan keputusan desain dan fitur berikut tanpa mengulang bug lama.

SUMBER
Project lama ada di /Users/mangha/Documents/project_blind_box. Baca RANGKUMAN_PROJECT_CEBOL.md beserta source jika dapat diakses. Kalau tidak dapat mengaksesnya, gunakan source, gambar, dan screenshot yang saya lampirkan; beritahu jika asset penting belum tersedia. Gunakan folder project baru ini sebagai lokasi kerja. Pertahankan project asal sebagai referensi.

TUJUAN DAN PRODUK
Website satu halaman, bahasa Indonesia dan Inggris, untuk promosi ceBol × KAPLIK bertema kehidupan sekolah di Tukad Citarum. Pembelian melalui WhatsApp. Pengunjung utama memakai HP; acuan ukuran iPhone 13 adalah 390×844, tetapi layar lebar sekitar 1880 px juga harus rapi.

Produk dijual satuan (1 karakter acak) dan paket isi 4 (4 karakter berbeda tanpa duplikat dalam satu paket). Ada 4 reguler: ceBol Sekolah, Polosan, PKL, dan Seniman; serta 1 secret anonim. Paket dengan secret berisi 3 reguler berbeda + 1 secret, bukan lima isi. Nama/desain asli secret jangan ditampilkan dalam UI maupun simulator.

DESAIN
Pertahankan hijau gelap #081a10 dan #031008, pink #ef2d9c dan #ff3f9b, kuning #f9b313, serta krem #fff8ef. Gaya playful dengan judul besar, aksen tulisan tangan, pola titik/grid, lingkaran dekoratif, kartu berbingkai dan bayangan tegas. Gunakan asset kemasan dan karakter yang tersedia.

Jangan gunakan emoji. Untuk ikon gunakan SVG utuh dari lucide-react atau setara; jangan merakit gembok/panah dari potongan CSS. Ukuran ikon proporsional dan perubahan CSS dibatasi pada komponen yang dituju. Kartu koleksi harus konsisten ukurannya pada HP. Hindari teks bertabrakan, kolom terlalu sempit, dan overflow.

HALAMAN
Pertahankan navbar dengan menu HP dan ID/EN; hero; marquee bergerak mulus ke kiri; tentang produk; isi dan preview kemasan; diagram komposisi paket; koleksi 4 reguler + secret; simulator; informasi harga/peluncuran; bagian pemesanan #pesan dengan pilihan satuan/paket dan pesan WhatsApp sesuai pilihan; FAQ; footer.

Hero tetap memiliki kartu informasi satuan/paket. Jangan kembalikan tombol “Lihat koleksi” dan “Buka kotaknya” pada hero karena saya ingin pengguna menemukan bagian tersebut saat scroll. Marquee harus loop tanpa jeda kosong atau terasa refresh.

ALUR SIMULATOR WAJIB
1. Ketuk langsung gambar kotak untuk membuka satu box. Pertahankan petunjuk singkat pada pengantar tanpa banner duplikat. Jangan membuat simulator pembukaan empat box sekaligus.
2. Hasil acak: secret 5% khusus simulasi; jika reguler, pilih acak dari empat reguler. Peluang produk fisik belum dikonfirmasi.
3. Tampilkan gambar/nama/deskripsi reguler. Untuk secret, tampilkan gembok, pesan secret, dan efek khusus, dengan identitas tetap tersembunyi.
4. Catat ID unik yang didapat, progres 0/5 sampai 5/5. Duplikat tetap mungkin dan tidak menambah progres.
5. Saat kelima hasil unik terkumpul, langsung nonaktifkan kotak tetapi tetap tampilkan hasil kelima—reguler ataupun secret.
6. Pada kartu hasil kelima, tampilkan tombol berikon piala “Lihat koleksi lengkap” / “View complete collection”. Jangan otomatis berpindah setelah timer.
7. Setelah tombol tersebut ditekan, tampilkan kartu perayaan “Kamu sudah mendapatkan semuanya!” / “You found them all!” dan tombol “Beli sekarang” / “Buy now” yang scroll ke #pesan. Hentikan efek khusus secret ketika perayaan tampil.
8. Tidak ada tombol kembali ke hasil kelima atau reset. Progres di-reset saat refresh, tanpa penyimpanan permanen.

TEKNIS DAN PENCEGAHAN REGRESI
Gunakan stack yang sudah ada: React, Vite, JavaScript, CSS biasa, dan lucide-react. Baca package.json/lockfile sebelum mengubah dependensi. Teks bilingual di src/data/content.js, reguler di src/data/characters.js, konfigurasi penjual di src/config/siteConfig.js, komponen di src/components/, gaya di src/styles/main.css, asset di public/.

Pisahkan isComplete dari showCompletion. isComplete mengunci kotak; showCompletion baru menampilkan kartu perayaan. Pertahankan class statis “simulator-stage reveal”; letakkan class status pada section pembungkus. Mengganti class elemen reveal pernah menghapus is-visible yang ditambahkan IntersectionObserver sehingga seluruh simulator hilang setelah secret lalu retry.

Pertahankan akses keyboard, label tombol, pengumuman hasil yang runtut melalui aria-live, dan dukungan reduced motion. Periksa asset lama sebelum digunakan: overlay gembok pada gambar tidak menghapus identitas yang mungkin ada dalam file asli.

DATA BELUM FINAL
Rp20.000 / IDR 20K adalah estimasi harga satuan; harga paket belum ada. September 2026 adalah periode rencana dalam source, bukan bukti produk sudah tersedia. Nomor WhatsApp dan sosial masih kosong. Bahan, ukuran final, stok, tanggal pasti, dan cerita resmi karakter belum dikonfirmasi. Jangan mengarang data tersebut. Jika WhatsApp kosong, sembunyikan tautan kontak dan tampilkan satu keterangan pada bagian pemesanan.

PENGERJAAN DAN PENGUJIAN
Mulai dengan membaca source dan mencocokkannya dengan brief ini, kemudian siapkan website pada project baru menggunakan versi lama sebagai dasar. Pertahankan bagian yang sudah disetujui dan jelaskan singkat alasan perubahan. Jika menemui error, jelaskan penyebab serta cara solvenya agar saya ikut memahami.

Uji alur secret lalu retry, duplikat, hasil kelima reguler, hasil kelima secret, kotak terkunci, tombol lanjutan, tombol beli ke #pesan, ID/EN, marquee, serta layout 390×844 dan sekitar 1880×1000. Jika hasil dipaksa saat pengujian, kembalikan logika acak dengan secret 5% sebelum selesai. Jalankan npm run lint dan npm run build; npm test pada source lama hanya build, bukan tes perilaku.

Saat selesai, jelaskan singkat hasil, berkas utama yang berubah, cara menjalankan project tujuan, dan apa yang benar-benar telah diuji. Hosting yang direncanakan adalah Cloudflare Pages dengan output dist, tetapi pekerjaan ini tahap lokal dahulu. Jika memakai Tailscale, verifikasi IP Mac dan port; jangan menganggap script ber-IP tetap dari project lama berlaku di lingkungan baru.
```
