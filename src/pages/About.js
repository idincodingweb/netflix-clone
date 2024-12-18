import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about">
      <h1>Tentang</h1>
      <div className="about__content">
        <img src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg" alt="Idim Iskandar" className="about__profile-pic" />
        <div className="about__text">
          <h2>Idin Iskandar, S.Kom</h2>
          <p>
            Halo! Saya Idin Iskandar, seorang pengembang web dengan gelar Sarjana Komputer. Proyek ini adalah kloning dari Netflix yang dibangun menggunakan React.js. Tujuan dari proyek ini adalah untuk mempelajari dan mengimplementasikan berbagai fitur seperti integrasi API, routing, dan styling yang kompleks.
          </p>
          <p>
            Saya berharap proyek ini dapat menjadi referensi yang berguna bagi siapa saja yang ingin mempelajari pengembangan aplikasi web modern. Terima kasih telah mengunjungi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
