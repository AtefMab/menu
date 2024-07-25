import "./App.css";
import img from "./logo.png";
function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };
  return (
    <div className="App">
      <header className="header">
        <img
          src={img}
          style={{
            position: "absolute",
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
        />
        <h1 style={{ fontFamily: "sans-serif" }}>No Name Coffee</h1>

        <nav className="nav">
          <button onClick={() => scrollToSection("cafe")}>Café</button>
          <button onClick={() => scrollToSection("jus")}>Jus</button>
          <button onClick={() => scrollToSection("frappucino")}>
            Frappucino
          </button>
          <button onClick={() => scrollToSection("milkshake")}>
            Milkshake
          </button>
          <button onClick={() => scrollToSection("cocktails")}>
            Cocktails
          </button>
          <button onClick={() => scrollToSection("smoothies")}>
            Smoothies
          </button>
          <button onClick={() => scrollToSection("mojito")}>Mojito</button>
          <button onClick={() => scrollToSection("the")}>Thé</button>
          <button onClick={() => scrollToSection("boissons")}>Boissons</button>
          <button onClick={() => scrollToSection("crepes-sucrees")}>
            Crêpes Sucrées
          </button>
          <button onClick={() => scrollToSection("crepes-salees")}>
            Crêpes Salées
          </button>
          <button onClick={() => scrollToSection("omelette")}>Omelette</button>
          <button onClick={() => scrollToSection("gaufres")}>Gaufres</button>
          <button onClick={() => scrollToSection("sweets")}>Sweets</button>
          <button onClick={() => scrollToSection("chicha")}>Chicha</button>
        </nav>
      </header>
      <main className="menu">
        <section id="cafe" className="section">
          <h2>Café</h2>
          <ul>
            <li>Express - 3 TND</li>
            <li>Américain - 3.5 TND</li>
            <li>Cappuccin - 3.5 TND</li>
            <li>Café crème - 4 TND</li>
            <li>Café turc - 4 TND</li>
            <li>Nescafé - 4 TND</li>
            <li>Chocolat au Lait - 4.5 TND</li>
            <li>Cappuccino arôme au choix - 5.5 TND</li>
            <li>Chocolat Chaud - 6 TND</li>
          </ul>
        </section>

        <section id="jus" className="section">
          <h2>Jus</h2>
          <ul>
            <li>Orange - 4 TND</li>
            <li>Citronnade - 4 TND</li>
            <li>Citronnade menthe - 5 TND</li>
            <li>Citronnade amandes - 7 TND</li>
            <li>Fraise - 6 TND</li>
            <li>Fraise Citronnade - 7 TND</li>
            <li>Lait de poule - 8 TND</li>
            <li>Exotique - 8 TND</li>
          </ul>
        </section>

        <section id="frappucino" className="section">
          <h2>Frappucino</h2>
          <ul>
            <li>Frappucino Caramel - 7 TND</li>
            <li>Frappucino Noisette - 7 TND</li>
            <li>Frappucino Vanille - 7 TND</li>
            <li>Frappucino Nutella - 8 TND</li>
          </ul>
        </section>

        <section id="milkshake" className="section">
          <h2>Milkshake</h2>
          <ul>
            <li>Oreo - 8 TND</li>
            <li>Caramel - 8 TND</li>
            <li>Fraise, Kiwi - 8 TND</li>
            <li>Nutella - 9 TND</li>
            <li>Kinder Bueno - 9 TND</li>
            <li>Mars - 9 TND</li>
            <li>Nutella, Banane - 10 TND</li>
            <li>Milkshake "NO NAME" - 13 TND</li>
          </ul>
        </section>

        <section id="cocktails" className="section">
          <h2>Cocktails</h2>
          <ul>
            <li>Kiwi Banane - 8 TND</li>
            <li>Banane Abricot - 8 TND</li>
            <li>Fraise Banane - 8 TND</li>
            <li>Banane Ananas - 8 TND</li>
            <li>Framboise Raisins - 8 TND</li>
            <li>Ananas Manga Banane - 10 TND</li>
            <li>Kiwi Ananas Banane - 10 TND</li>
            <li>Cocktail "NO NAME" - 12 TND</li>
          </ul>
        </section>

        <section id="smoothies" className="section">
          <h2>Smoothies</h2>
          <ul>
            <li>Pina Colada - 8 TND</li>
            <li>Fruit de la passion - 8 TND</li>
            <li>Fruit Rouge - 8 TND</li>
            <li>Fraise / Banane - 8 TND</li>
            <li>Ananas - 10 TND</li>
            <li>Kiwi - 8 TND</li>
            <li>Pomme - 8 TND</li>
          </ul>
        </section>

        <section id="mojito" className="section">
          <h2>Mojito</h2>
          <ul>
            <li>Virgin - 7.5 TND</li>
            <li>Bleu - 7.5 TND</li>
            <li>Fruit de la passion - 7.5 TND</li>
            <li>Fruit rouge - 7.5 TND</li>
            <li>Pomme - 7.5 TND</li>
            <li>Tropical - 7.5 TND</li>
            <li>Énergétique (Red Bull) - 10 TND</li>
          </ul>
        </section>

        <section id="the" className="section">
          <h2>Thé</h2>
          <ul>
            <li>Thé à la menthe - 3 TND</li>
            <li>Thé aux amandes - 4 TND</li>
            <li>Thé aux pignons - 4 TND</li>
            <li>Thé Infusion - 4 TND</li>
          </ul>
        </section>

        <section id="boissons" className="section">
          <h2>Boissons</h2>
          <ul>
            <li>Soda - 3 TND</li>
            <li>Eau Minérale 1/2L - 1.5 TND</li>
            <li>Eau Minérale 1L - 2.5 TND</li>
            <li>Eau Gazéifiée - 3 TND</li>
            <li>Eau Safia - 4 TND</li>
            <li>Énergétique - 8 TND</li>
          </ul>
        </section>

        <section id="crepes-sucrees" className="section">
          <h2>Crêpes Sucrées</h2>
          <ul>
            <li>Chocolat - 6 TND</li>
            <li>Chocolat Banane - 8 TND</li>
            <li>Chocolat Fruits Secs - 8 TND</li>
            <li>Choco, Banane, Fruit Secs - 10 TND</li>
            <li>Nutella - 12 TND</li>
            <li>Nutella Banane - 12 TND</li>
            <li>Nutella Fruits Secs - 12 TND</li>
            <li>Crêpe "NO NAME" - 14 TND</li>
          </ul>
        </section>

        <section id="crepes-salees" className="section">
          <h2>Crêpes Salées</h2>
          <ul>
            <li>Fromage - 7 TND</li>
            <li>Jambon fromage - 7 TND</li>
            <li>Thon fromage - 8 TND</li>
            <li>Crêpe Pizza - 9 TND</li>
            <li>Thon Fromage Oeuf - 10 TND</li>
            <li>4 Fromages - 10 TND</li>
            <li>Crêpe "NO NAME" - 12 TND</li>
          </ul>
        </section>

        <section id="omelette" className="section">
          <h2>Omelette</h2>
          <ul>
            <li>Omelette fromage - 6 TND</li>
            <li>Omelette thon fromage - 7 TND</li>
            <li>Omelette Jambon fromage - 7 TND</li>
            <li>Omelette Spécial - 10 TND</li>
          </ul>
        </section>

        <section id="gaufres" className="section">
          <h2>Gaufres</h2>
          <ul>
            <li>Chocolat - 7 TND</li>
            <li>Chocolat Banane - 8 TND</li>
            <li>Chocolat Fruits Secs - 9 TND</li>
            <li>Choco, Banane, Fruits Secs - 12 TND</li>
            <li>Nutella - 9 TND</li>
            <li>Nutella Banane - 11 TND</li>
            <li>Nutella Fruits Secs - 12 TND</li>
            <li>Spécial "NO NAME" - 14 TND</li>
          </ul>
        </section>

        <section id="sweets" className="section">
          <h2>Sweets</h2>
          <ul>
            <li>Cookies (Pistache, Noisette) - 6 TND</li>
            <li>Cheesecake Chocolat - 8 TND</li>
            <li>Cheesecake Caramel - 8 TND</li>
            <li>Tiramisu Nutella Speculoos - 14 TND</li>
          </ul>
        </section>

        <section id="chicha" className="section">
          <h2>Chicha</h2>
          <ul>
            <li>Chicha aux choix - 9 TND</li>
            <li>Chicha Love - 10 TND</li>
            <li>Chicha Sheikh Money - 11 TND</li>
            <li>Chicha "NO NAME" - 14 TND</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
