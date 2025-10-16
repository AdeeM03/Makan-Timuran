# Makan-Timuran
Makan Timuran adalah sebuah website yang dibuat untuk memperkenalkan dan melestarikan kekayaan kuliner tradisional dari Provinsi Jawa Timur. Melalui situs ini, pengunjung dapat mempelajari berbagai informasi mengenai asal-usul, bahan, dan cita rasa khas dari beragam hidangan seperti Rujak Cingur, Lontong Balap, dan Soto Lamongan. Website ini bertujuan untuk menjadi media edukatif sekaligus promosi budaya kuliner daerah agar tetap dikenal dan dicintai oleh generasi muda.

![IMG](https://github.com/AdeeM03/Makan-Timuran/blob/ba7cbcd0e555ef22f819f86d8b0c85ab12b051e6/IMG/ss1.png).
![IMG](https://github.com/AdeeM03/Makan-Timuran/blob/732722d779227fd1165b486b459e82ff80b3b5c3/IMG/ss2.png).

## ⚙️ Fitur JavaScript pada Website “Makan Timuran”

| No | Nama Fitur | Penjelasan Fungsi | Halaman yang Menggunakan |
|:--:|:--|:--|:--|
| 1 | **Highlight Menu Navigasi Otomatis** | Menu navigasi otomatis menyorot tautan sesuai bagian halaman yang sedang terlihat saat pengguna menggulir. | Semua halaman (terutama `index.html`) |
| 2 | **Scroll to Top Button (Tombol Kembali ke Atas)** | Tombol melayang “↑” muncul ketika halaman digulir ke bawah >300px, dan saat diklik halaman akan bergulir halus ke atas. | Semua halaman |
| 3 | **Hero Text Fade-In Animation** | Teks utama pada bagian hero muncul perlahan saat halaman dimuat untuk tampilan yang menarik. | `index.html`, `tentang.html`, `menu.html`, `galeri.html` |
| 4 | **Efek Navbar Saat Scroll** | Navbar berubah warna/transparansi saat pengguna menggulir halaman ke bawah, menambah kesan modern. | Semua halaman |
| 5 | **Animasi Fade-In Saat Scroll** | Elemen seperti teks dan gambar akan muncul dengan efek fade-in ketika muncul di layar. | `tentang.html` (About, Visi Misi, Tim Kami) |
| 6 | **Pesan Sukses Formulir Kontak** | Setelah mengirim form, muncul notifikasi “Pesan Anda telah berhasil dikirim” yang menghilang otomatis. | `contact.html` |
| 7 | **Back to Top Button (Duplikasi)** | JavaScript membuat dua tombol “↑” dengan fungsi yang sama, membawa halaman ke atas (bisa disederhanakan). | Semua halaman |

---

## 💻 Teknologi yang Digunakan

| No | Teknologi | Jenis | Fungsi Utama dalam Website |
|:--:|:--|:--|:--|
| 1 | **HTML5** | *Markup Language* | Digunakan untuk membangun struktur halaman website seperti header, section, artikel, gambar, dan formulir. |
| 2 | **CSS3** | *Styling Language* | Mengatur tampilan visual website — termasuk warna, layout grid, animasi hover, efek transisi, dan tema gelap (*dark mode*). |
| 3 | **JavaScript (Vanilla JS)** | *Programming Language* | Memberikan interaktivitas pada website, seperti animasi scroll, tombol kembali ke atas, efek navigasi, dan notifikasi pesan pada form kontak. |
| 4 | **Responsive Design (Media Queries)** | *CSS Feature* | Membuat tampilan website menyesuaikan ukuran layar (desktop, tablet, dan mobile). |
| 5 | **Flexbox & Grid Layout** | *CSS Layout System* | Mengatur posisi elemen (menu, galeri, kartu tim) agar rapi dan responsif. |
| 6 | **DOM Manipulation (Document Object Model)** | *JavaScript API* | Mengontrol elemen HTML secara dinamis, misalnya menambah class saat scroll atau menampilkan pesan sukses. |
| 7 | **Font: Poppins (Google Fonts)** | *Typography* | Memberikan tampilan teks yang modern dan bersih. |
| 8 | **External Image Hosting** | *Resource CDN* | Gambar kuliner diambil dari sumber eksternal (Bing Images, Timesmedia, IDNTimes) agar halaman cepat dimuat. |
| 9 | **Sticky Navigation Bar** | *CSS + JS* | Navbar tetap di bagian atas layar saat pengguna menggulir halaman. |
| 10 | **Smooth Scrolling & Animation Effects** | *JavaScript + CSS Transitions* | Membuat pengalaman navigasi yang lembut dan nyaman bagi pengguna. |

---

---

### 🧩 Penjelasan Tiap Bagian

| No | File / Folder | Fungsi | Isi Utama |
|:--:|:--|:--|:--|
| 1 | **index.html** | Halaman utama (Beranda) | Menampilkan pengantar website, menu unggulan, galeri, testimoni, dan kontak. |
| 2 | **tentang.html** | Halaman “Tentang Kami” | Menjelaskan visi, misi, dan tim pembuat website. |
| 3 | **menu.html** | Halaman daftar menu | Menampilkan berbagai kuliner khas Jawa Timur dalam layout grid dengan gambar dan deskripsi. |
| 4 | **galeri.html** | Halaman galeri foto | Berisi koleksi foto-foto makanan khas Jawa Timur dengan efek hover zoom. |
| 5 | **cerita.html** | Halaman artikel kuliner | Berisi kisah dan sejarah kuliner Jawa Timur seperti perkembangan cita rasa dan warisan budaya. |
| 6 | **contact.html** | Halaman kontak | Menyediakan form untuk mengirim pesan serta menampilkan kontak media sosial. |
| 7 | **styles.css** | File gaya utama | Mengatur tampilan website: tema gelap, warna oranye hangat, layout grid, dan efek animasi. |
| 8 | **script.js** | File JavaScript utama | Mengatur interaksi seperti tombol “Scroll to Top”, animasi scroll, efek navbar, dan notifikasi form. |
| 9 | **Foto/** *(opsional)* | Folder gambar lokal | Berisi gambar tim atau ilustrasi lokal yang digunakan di halaman Tentang. |

---

### 🧭 Hubungan Antarhalaman
- Semua halaman terhubung melalui **navigasi utama (navbar)** di bagian atas.  
- Setiap halaman memiliki struktur **header → konten utama → kontak → footer**.  
- Desain dan warna antarhalaman konsisten karena seluruhnya menggunakan **styles.css** yang sama.  
- Semua interaksi visual (animasi, scroll, efek klik) dikontrol oleh **script.js**.

---

### 🪄 Alur Navigasi Pengguna
1. Pengguna membuka **index.html** (beranda).  
2. Dari navbar, mereka bisa berpindah ke **Tentang, Menu, Galeri, Cerita,** atau **Kontak.**  
3. Di halaman **Kontak**, pengguna bisa mengirim pesan menggunakan form interaktif.  
4. Tombol “↑” di kanan bawah memudahkan pengguna kembali ke atas halaman kapan pun.

---
 💡 **Kesimpulan:**  
 Struktur website ini menerapkan konsep **multi-page static website**, di mana setiap halaman memiliki fungsinya sendiri, namun tetap konsisten dari segi tema, desain, dan navigasi.


