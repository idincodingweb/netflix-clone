import React from 'react';
import '../styles/Documentation.css';

function Documentation() {
  return (
    <div className="documentation">
      <h1>Dokumentasi</h1>
      <div className="documentation__content">
        <h2>Pendahuluan</h2>
        <p>
          Proyek ini adalah kloning dari Netflix yang dibangun menggunakan React.js. Proyek ini mencakup berbagai fitur seperti integrasi API, routing, dan styling yang kompleks. Berikut adalah penjelasan detail tentang struktur direktori dan fungsi dari setiap file dalam proyek ini.
        </p>

        <h2>Struktur Direktori</h2>
        <pre>
          {`
              src/
              ├── api/
              │   └── tmdb.js
              ├── components/
              │   ├── Banner.js
              │   ├── MovieModal.js
              │   ├── Navbar.js
              │   └── Row.js
              ├── pages/
              │   ├── About.js
              │   ├── Documentation.js
              │   ├── Home.js
              │   └── MovieDetail.js
              ├── styles/
              │   ├── About.css
              │   ├── App.css
              │   ├── Banner.css
              │   ├── Documentation.css
              │   ├── MovieDetail.css
              │   ├── MovieModal.css
              │   ├── Navbar.css
              │   └── Row.css
              ├── App.js
              ├── index.js
              └── index.css

          `}
        </pre>

        <h2>Penjelasan File</h2>
        <h3>src/api/tmdb.js</h3>
        <p>
          File ini berisi konfigurasi untuk mengakses API TMDB (The Movie Database). Ini digunakan untuk mengambil data film yang akan ditampilkan di aplikasi.
        </p>

        <h3>src/components/Banner.js & Banner.css</h3>
        <p>
          Komponen ini menampilkan banner utama di halaman beranda, termasuk judul film, deskripsi, dan tombol aksi. CSS digunakan untuk styling komponen ini.
        </p>

        <h3>src/components/MovieModal.js & MovieModal.css</h3>
        <p>
          Komponen ini menampilkan modal dengan trailer film ketika pengguna mengklik tombol "Watch Trailer". CSS digunakan untuk styling modal ini.
        </p>

        <h3>src/components/Navbar.js & Navbar.css</h3>
        <p>
          Komponen ini menampilkan navbar di bagian atas halaman, termasuk menu navigasi seperti Home, Tentang, dan Dokumentasi. CSS digunakan untuk styling navbar ini.
        </p>

        <h3>src/components/Row.js & Row.css</h3>
        <p>
          Komponen ini menampilkan baris film berdasarkan kategori. Setiap baris berisi beberapa poster film yang dapat diklik untuk melihat detail film. CSS digunakan untuk styling komponen ini.
        </p>

        <h3>src/pages/About.js</h3>
        <p>
          Halaman ini berisi informasi tentang pengembang proyek, Idim Iskandar, dan tujuan dari proyek ini.
        </p>

        <h3>src/pages/Documentation.js</h3>
        <p>
          Halaman ini berisi dokumentasi lengkap tentang proyek ini, termasuk struktur direktori dan penjelasan fungsi dari setiap file.
        </p>

        <h3>src/pages/Home.js</h3>
        <p>
          Halaman ini adalah halaman utama aplikasi yang menampilkan berbagai kategori film dalam bentuk baris.
        </p>

        <h3>src/pages/MovieDetail.js</h3>
        <p>
          Halaman ini menampilkan detail film yang dipilih, termasuk deskripsi dan trailer film.
        </p>

        <h3>src/App.js</h3>
        <p>
          File ini adalah komponen utama aplikasi yang mengatur routing dan menampilkan komponen Navbar dan halaman-halaman lainnya.
        </p>

        <h3>src/App.css</h3>
        <p>
          File ini berisi styling global untuk aplikasi.
        </p>

        <h3>src/index.js</h3>
        <p>
          File ini adalah titik masuk utama aplikasi yang merender komponen App ke dalam DOM.
        </p>
      </div>
    </div>
  );
}

export default Documentation;
