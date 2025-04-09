// pages/index.js

import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>متجر الكتب الفاخر</title>
        <meta name="description" content="موقع فاخر لشراء الكتب الرقمية والورقية." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#hero">الرئيسية</a></li>
          <li><a href="#collections">المجموعات</a></li>
          <li><a href="#about">من نحن</a></li>
          <li><a href="#contact">تواصل معنا</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero">
        <h1 className="hero-title">اكتشف عالم الكتب الفاخرة</h1>
        <p className="hero-subtitle">مجموعات كتب رقمية حصرية للذواقة.</p>
      </section>

      {/* Collections Section */}
      <section id="collections" className="collections">
        <h2 className="section-title">مجموعات الكتب</h2>
        <div className="collections-grid">
          <div className="collection-item">
            <img src="/images/book1.jpg" alt="Book 1" />
            <h3>Ultra Learn Collection</h3>
            <p>مجموعة من الكتب التعليمية الرفيعة المستوى.</p>
          </div>
          <div className="collection-item">
            <img src="/images/book2.jpg" alt="Book 2" />
            <h3>Prime Mastery Collection</h3>
            <p>أفضل الكتب لاحتراف المهارات.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>جميع الحقوق محفوظة © 2025</p>
      </footer>
    </div>
  );
}
