// Data Dummy Awal untuk Leaderboard
let players = [
    { nama: "Alif_Master", skor: 490, tier: "Mythic Runner 👑" },
    { nama: "Budi_Speed", skor: 410, tier: "Pro Runner 🔥" },
    { nama: "Citra_Dash", skor: 310, tier: "Advanced Runner ⚡" }
];

// Panggil fungsi saat halaman pertama kali dibuka untuk menampilkan data awal
tampilkanLeaderboard();

function prosesSkor() {
    const namaInput = document.getElementById('nama').value.trim();
    const skorInput = parseInt(document.getElementById('skor').value);
    const hasilBox = document.getElementById('hasilBox');

    // 1. Validasi Input
    if (!namaInput || isNaN(skorInput)) {
        hasilBox.style.display = 'block';
        hasilBox.style.borderLeftColor = '#d90429';
        hasilBox.innerHTML = '<b style="color: #d90429;">Peringatan:</b> Harap isi Nama dan Skor dengan benar!';
        return;
    }

    // Batas Maksimal Skor = 500
    if (skorInput < 0 || skorInput > 500) {
        hasilBox.style.display = 'block';
        hasilBox.style.borderLeftColor = '#d90429';
        hasilBox.innerHTML = '<b style="color: #d90429;">Peringatan:</b> Skor harus di antara range 0 hingga 500!';
        return;
    }

    // 2. PERCABANGAN MINIMAL 5 KONDISI (Berdasarkan Rentang Skor)
    let tier = "";
    let pesanKinerja = "";

    if (skorInput >= 450) {
        tier = "Mythic Runner 👑";
        pesanKinerja = "Luar biasa! Kamu mencapai kasta tertinggi game ini!";
    } else if (skorInput >= 350) {
        tier = "Pro Runner 🔥";
        pesanKinerja = "Kecepatan dan refleks kamu di atas rata-rata!";
    } else if (skorInput >= 250) {
        tier = "Advanced Runner ⚡";
        pesanKinerja = "Permainan yang solid, sedikit lagi menuju Pro!";
    } else if (skorInput >= 100) {
        tier = "Amateur Runner 🏃";
        pesanKinerja = "Cukup baik, terus latihan untuk tingkatkan refleks!";
    } else {
        tier = "Beginner / Rookie 🐣";
        pesanKinerja = "Jangan menyerah, coba lagi untuk skor lebih tinggi!";
    }

    // Tampilkan hasil evaluasi percabangan
    hasilBox.style.display = 'block';
    hasilBox.style.borderLeftColor = '#2b9348';
    hasilBox.innerHTML = `
        <b>Hasil Analisis Player:</b><br>
        Nama: <b>${namaInput}</b><br>
        Skor: <b>${skorInput} / 500</b><br>
        Tier: <b style="color: #d90429;">${tier}</b><br>
        <i>"${pesanKinerja}"</i>
    `;

    // 3. Masukkan player baru ke array & urutkan dari skor tertinggi
    players.push({ nama: namaInput, skor: skorInput, tier: tier });
    players.sort((a, b) => b.skor - a.skor); // Sorting Descending

    // 4. Render Ulang Leaderboard dengan Loop
    tampilkanLeaderboard();

    // Reset Form
    document.getElementById('nama').value = '';
    document.getElementById('skor').value = '';
}

// Fungsi untuk merender tabel menggunakan PERULANGAN (FOR LOOP)
function tampilkanLeaderboard() {
    const tabelBody = document.getElementById('tabelLeaderboard');
    tabelBody.innerHTML = ''; // Bersihkan isi tabel lama

    // PERULANGAN FOR: Menampilkan maksimal Top 5 Player
    const batasBaris = Math.min(players.length, 5);

    for (let i = 0; i < batasBaris; i++) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td><b>#${i + 1}</b></td>
            <td>${players[i].nama}</td>
            <td><b>${players[i].skor}</b></td>
            <td>${players[i].tier}</td>
        `;

        tabelBody.appendChild(row);
    }
}