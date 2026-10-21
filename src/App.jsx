import { useState } from "react";

const copy = {
  es: {
    language: "ES",
    switchLabel: "Switch to English",
    eyebrow: "EmmaHavokOscuro · Media Kit",
    title: "Publicidad deportiva con narrativa que deja huella",
    description: "Conectamos marcas con una audiencia global y mayoritariamente hispanohablante.",
    cta: "Hablemos de tu campaña"
  },
  en: {
    language: "EN",
    switchLabel: "Cambiar a español",
    eyebrow: "EmmaHavokOscuro · Media Kit",
    title: "Sports advertising with stories that leave a mark",
    description: "We connect brands with a global, predominantly Spanish-speaking audience.",
    cta: "Let's discuss your campaign"
  }
};

export default function App() {
  const [language, setLanguage] = useState("es");
  const content = copy[language];

  function switchLanguage() {
    setLanguage((current) => (current === "es" ? "en" : "es"));
  }

  return (
    <main lang={language}>
      <button type="button" onClick={switchLanguage} aria-label={content.switchLabel}>
        {content.language}
      </button>
      <section aria-labelledby="hero-title">
        <p>{content.eyebrow}</p>
        <h1 id="hero-title">{content.title}</h1>
        <p>{content.description}</p>
        <a href="#contacto">{content.cta}</a>
      </section>
    </main>
  );
}
