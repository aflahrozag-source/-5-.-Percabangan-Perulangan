## SpeedRunner - Leaderboard & Tier Classification

Aplikasi web sederhana bertema **Game Runner** untuk mengukur dan menampilkan peringkat player berdasarkan skor permainan (Maksimal 500 poin). Proyek ini dibuat untuk memenuhi Tugas Pemrograman Web Semester 3 (Percabangan & Perulangan).

## Tema Tampilan
Menggunakan desain bertema gradasi merah dan putih yang estetik.

## Logika Algoritma

### 1. Percabangan (5 Kondisi Tier Skor)
Skor dibatasi maksimal **500**. Pengkategorian kasta (*Tier*) player dibagi menjadi 5 tingkat:
1. `Skor >= 450` : **Mythic Runner 👑**
2. `Skor >= 350` : **Pro Runner 🔥**
3. `Skor >= 250` : **Advanced Runner ⚡**
4. `Skor >= 100` : **Amateur Runner 🏃**
5. `Skor < 100`  : **Beginner / Rookie 🐣**

### 2. Perulangan (`for` loop)
Perulangan for digunakan pada fungsi tampilkan Leaderboard untuk membaca array data player yang sudah diurutkan, kemudian merender baris elemen tabel HTML secara dinamis untuk menampilkan Top 5 peringkat tertinggi.

## Struktur File
- index.html
- style.css 
- script.js 
