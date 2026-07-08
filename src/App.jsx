import React from 'react'

function App() {
  const scrollContainer = React.useRef(null);
  const scroll = (direction) => {
    if (scrollContainer.current) {
      const scrollAmount = window.innerWidth > 768 ? 350 : 280;
      scrollContainer.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="navbar">
        <a href="#inicio" className="logo">
          <img src="/isotipo-removebg-preview.png" alt="InverCapital Logo" className="logo-icon" />
          INVERCAPITAL
        </a>
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#inversiones">¿En qué invertimos?</a>
          <a href="#propuesta">Propuesta de Valor</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#casos">Oportunidades</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-bg">
          <img src="/hero.jpg" alt="Premium Real Estate" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <span className="hero-tag">INVERSIÓN INMOBILIARIA ESTRATÉGICA</span>
          <h1 className="hero-title">HACEMOS QUE TU CAPITAL GENERE <span>VALOR REAL</span></h1>
          <p className="hero-desc">
            Transformamos oportunidades judiciales e inmobiliarias en inversiones estratégicas, seguras y rentables.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', background: 'linear-gradient(135deg, #181b21 0%, #0a0c10 100%)', color: 'var(--accent-gold)', border: '1px solid var(--accent-gold)' }}>Agendar Asesoría</a>
          </div>
        </div>
      </section>

      <section className="features" id="inversiones" style={{ background: 'var(--bg-panel)' }}>
        <div className="section-header">
          <span className="section-subtitle">PORTAFOLIO</span>
          <h2 className="section-title">¿EN QUÉ INVERTIMOS?</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8M3 11l9-9 9 9"/></svg>
            </div>
            <h3 className="feature-title">Remates Judiciales</h3>
            <p className="feature-desc">Oportunidades inmobiliarias provenientes de procesos judiciales.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h3 className="feature-title">Carteras Judiciales</h3>
            <p className="feature-desc">Adquisición de activos con potencial de recuperación.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <h3 className="feature-title">Deudas Hipotecarias</h3>
            <p className="feature-desc">Inversiones respaldadas por garantías inmobiliarias.</p>
          </div>
        </div>
      </section>

      <section className="features" id="propuesta">
        <div className="section-header">
          <span className="section-subtitle">NUESTRA PROPUESTA DE VALOR</span>
          <h2 className="section-title">¿POR QUÉ INVERTIR CON INVERCAPITAL?</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
            <h3 className="feature-title">Oportunidades Estratégicas</h3>
            <p className="feature-desc">Identificamos inmuebles y activos judiciales con alto potencial, buscando oportunidades por debajo de su valor de mercado.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>
            <h3 className="feature-title">Gestión Especializada</h3>
            <p className="feature-desc">Más de 10 años de experiencia gestionando procesos judiciales con análisis, acompañamiento y transparencia en cada etapa.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
            </div>
            <h3 className="feature-title">Rentabilidad Inteligente</h3>
            <p className="feature-desc">Diseñamos alternativas de inversión enfocadas en proteger tu capital y maximizar su crecimiento.</p>
          </div>
        </div>
      </section>

      <section className="concept-section" id="nosotros">
        <div className="concept-image">
          <img src="/concept.jpg" alt="Investment Concept" />
        </div>
        <div className="concept-content">
          <h2>TRANSFORMAMOS OPORTUNIDADES EN PATRIMONIO</h2>
          <p>
            InverCapital nace para identificar oportunidades inmobiliarias únicas a través de remates judiciales y adquisición de carteras judiciales con alto potencial de recuperación.
          </p>
          <p>
            Analizamos, gestionamos y acompañamos cada inversión con experiencia y transparencia, buscando proteger tu capital y generar resultados reales.
          </p>
          <div className="stats" style={{ gap: '2rem' }}>
            <div className="stat-item">
              <h3>+10 años</h3>
              <p>EXPERIENCIA EN PROCESOS JUDICIALES</p>
            </div>
            <div className="stat-item">
              <h3>45%</h3>
              <p>MENOS DEL VALOR DE MERCADO</p>
            </div>
            <div className="stat-item">
              <h3>360°</h3>
              <p>ACOMPAÑAMIENTO PERSONALIZADO</p>
            </div>
          </div>
        </div>
      </section>

      <section className="properties-section" id="casos">
        <div className="section-header">
          <span className="section-subtitle">CASOS DE ÉXITO</span>
          <h2 className="section-title">OPORTUNIDADES GESTIONADAS</h2>
        </div>
        <div className="carousel-wrapper">
          <button onClick={() => scroll('left')} className="carousel-btn left" aria-label="Anterior">&#8249;</button>
          <div className="properties-grid" ref={scrollContainer}>
            <div className="property-card">
              <div className="property-image">
                <img src="/departamento_miraflores.jpeg" alt="Departamento Miraflores" />
              </div>
              <div className="property-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', margin: 0, textAlign: 'center' }}>Departamento Miraflores</h3>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image">
                <img src="/mercado_san_juan_miraflores.jpeg" alt="Mercado San Juan de Miraflores" />
              </div>
              <div className="property-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', margin: 0, textAlign: 'center' }}>Mercado San Juan de Miraflores</h3>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image">
                <img src="/terreno_comercial_lurin.jpeg" alt="Local Industrial Lurin" />
              </div>
              <div className="property-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', margin: 0, textAlign: 'center' }}>Local Industrial Lurin</h3>
              </div>
            </div>
            <div className="property-card">
              <div className="property-image">
                <img src="/casa_surco.jpeg" alt="Casa Surco" />
              </div>
              <div className="property-content" style={{ padding: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', margin: 0, textAlign: 'center' }}>Casa Surco</h3>
              </div>
            </div>
          </div>
          <button onClick={() => scroll('right')} className="carousel-btn right" aria-label="Siguiente">&#8250;</button>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="section-header">
          <span className="section-subtitle">CONTÁCTENOS</span>
          <h2 className="section-title">CONSTRUYAMOS TU PRÓXIMA INVERSIÓN</h2>
        </div>
        <div className="contact-container">
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="f4961f0d-7121-41d5-b5c6-8b84579abcf4" />
            <input type="hidden" name="subject" value="Nuevo Lead - InverCapital" />
            <input type="hidden" name="from_name" value="InverCapital Landing Page" />
            
            <div className="form-group">
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" name="name" required placeholder="Ej. Juan Pérez" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Correo Electrónico</label>
              <input type="email" id="email" name="email" required placeholder="juan@ejemplo.com" />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje o Consulta</label>
              <textarea id="message" name="message" rows="4" required placeholder="Me interesa conocer las oportunidades de inversión..."></textarea>
            </div>
            
            <button type="submit" className="btn-primary form-submit">Enviar Mensaje</button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-col">
            <a href="#inicio" className="logo">
              <img src="/isotipo-removebg-preview.png" alt="InverCapital Logo" className="logo-icon" />
              INVERCAPITAL
            </a>
            <p>Especialistas en inversión inmobiliaria estratégica, enfocada en remates judiciales y adquisición de carteras judiciales con alto potencial de rentabilidad.</p>
          </div>
          <div className="footer-col">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#inversiones">Inversiones</a></li>
              <li><a href="#casos">Oportunidades</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>contacto@invercapital.pe</li>
              <li>Av. Mariscal la Mar 1263, Miraflores</li>
              <li>Lima, Perú</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} InverCapital. Todos los derechos reservados.
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <a href="https://wa.me/51994365466" target="_blank" rel="noopener noreferrer" className="float-btn whatsapp" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </div>
    </>
  )
}

export default App
