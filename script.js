/* RESET */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background: #dddbdb;
}

/* HEADER */
.header {
  width: 100%;
  background: rgb(83, 84, 84);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  position: sticky;
  top: 0;
  z-index: 1000;
  min-height: 72px;
}

.logo-area {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo-area img {
  width: 55px;
  height: 55px;
}

/* DESKTOP NAV */
.nav-menu {
  width: 100%;
  display: flex;
  list-style: none;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.nav-menu li a {
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  background: black;
  border-radius: 6px;
  display: block;
  white-space: nowrap;
  font-size: 15px;
}

.nav-menu li a:hover {
  background: rgb(235, 97, 55);
}

/* BURGER */
.menu-toggle {
  display: none;
  font-size: 32px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 10px;
}

/* TABLET + HANDY */
@media (max-width: 1080px) {

  .menu-toggle {
    display: flex;
    z-index: 2000;
  }

  .nav-menu {
    display: none;
    position: absolute;
    top: 72px;
    left: 0;
    width: 100%;
    flex-direction: column;
    background: rgb(50, 50, 50);
    padding: 10px 0;
    gap: 0;
  }

  .nav-menu.active {
    display: flex;
    position: absolute;
    top: auto;
  }

  .nav-menu li {
    width: 100%;
    text-align: center;
    margin: 0;
  }

  .nav-menu li a {
    width: 100%;
    border-radius: 0;
    padding: 14px;
    font-size: 16px;
  }
}

/* SERVICES */
.services-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.service {
  background: white;
  margin: 10px;
  padding: 15px;
  width: 280px;
  border-radius: 10px;
  text-align: center;
}

.service img {
  width: 100%;
  border-radius: 10px;
}

/* =========================
   MOBILE + TABLET
========================= */
@media (max-width: 1024px) {

  .header {
    display: flex;
    flex-direction: column;   /* Logo oben, Burger darunter */
    align-items: center;
    justify-content: center;
    padding: 10px;
    gap: 10px;
    position: relative;
  }

  .logo-area {
    justify-content: center;
    text-align: center;
    flex-wrap: wrap;
  }

  .menu-toggle {
    display: block;
    position: relative;
    margin-top: 5px;
    z-index: 2000;
  }

  .nav-menu {
    display: none;
    flex-direction: column;
    width: 100%;
    background: rgb(50, 50, 50);
    position: relative;   /* nicht mehr außerhalb */
    top: 0;
    left: 0;
    padding: 10px 0;
    gap: 0;
  }

  .nav-menu.active {
    display: flex;
  }

  .nav-menu li {
    width: 100%;
    text-align: center;
    margin: 4px 0;
  }

  .nav-menu li a {
    width: 100%;
    border-radius: 0;
    padding: 12px;
  }
}






/* =========================
   RESPONSIVE TABLE (MOBILE)
========================= */
@media (max-width: 768px) {

  .price-list thead {
    display: none; /* Kopfzeile ausblenden */
  }

  .price-list, 
  .price-list tbody, 
  .price-list tr, 
  .price-list td {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  .price-list tr {
    margin-bottom: 15px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    overflow: hidden;
  }

  .price-list td {
    text-align: right;
    padding: 12px;
    position: relative;
    border: none;
    border-bottom: 1px solid #eee;
  }

  .price-list td::before {
    content: attr(data-label);
    position: absolute;
    left: 12px;
    font-weight: bold;
    text-align: left;
  }
}
