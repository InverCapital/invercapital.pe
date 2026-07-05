import React from 'react'

function App() {
  return (
    <>
      <nav className="navbar">
        <a href="#inicio" className="logo">
          <img src="/isotipo-removebg-preview.png" alt="InverCapital Logo" className="logo-icon" />
          INVER<span>CAPITAL</span>
        </a>
        <div className="nav-links">
          <a href="#inicio">Inicio</a>
          <a href="#remates">Ventajas</a>
          <a href="#casos">Casos de Éxito</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-bg">
          <img src="/hero.jpg" alt="Premium Real Estate" />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <span className="hero-tag">El Nexo Inmobiliario</span>
          <h1 className="hero-title">Inversiones Inteligentes en <span>Remates Judiciales</span></h1>
          <p className="hero-desc">
            Maximizamos el rendimiento de su capital accediendo a oportunidades inmobiliarias exclusivas de alto valor por debajo del precio de mercado.
          </p>
          <div className="hero-actions">
            <button className="btn-primary">Descubrir Oportunidades</button>
            <button className="btn-outline">Agendar Asesoría</button>
          </div>
        </div>
      </section>

      <section className="features" id="remates">
        <div className="section-header">
          <span className="section-subtitle">NUESTRA VENTAJA</span>
          <h2 className="section-title">¿Por qué invertir con nosotros?</h2>
        </div>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v18" />
                <path d="M3 7h18" />
                <path d="M6 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
                <path d="M18 7l-3 7a3 3 0 0 0 6 0l-3-7z" />
              </svg>
            </div>
            <h3 className="feature-title">Remates Judiciales</h3>
            <p className="feature-desc">Acceso directo a propiedades en proceso de remate judicial con descuentos de hasta un 50% sobre el valor comercial de mercado.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h3 className="feature-title">Seguridad Jurídica</h3>
            <p className="feature-desc">Nuestro equipo de abogados especialistas garantiza un proceso transparente y libre de riesgos desde la adquisición hasta la toma de posesión.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <svg viewBox="0 0 24 24" width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h3 className="feature-title">Alta Rentabilidad</h3>
            <p className="feature-desc">Estrategias de inversión diseñadas para generar retornos extraordinarios a corto y mediano plazo en el sector inmobiliario y de remates.</p>
          </div>
        </div>
      </section>

      <section className="concept-section" id="nosotros">
        <div className="concept-image">
          <img src="/concept.jpg" alt="Investment Concept" />
        </div>
        <div className="concept-content">
          <h2>Transformando el Acceso a Activos Inmobiliarios</h2>
          <p>
            InverCapital nace con el objetivo de democratizar el acceso a las oportunidades más rentables del mercado inmobiliario, tradicionalmente reservadas para grandes fondos de inversión y corporaciones.
          </p>
          <p>
            Operamos como un nexo especializado entre inversores estratégicos y propiedades de alto potencial, gestionando todo el ciclo de inversión con absoluta discreción, agilidad y profesionalismo.
          </p>
          <div className="stats">
            <div className="stat-item">
              <h3>$25M+</h3>
              <p>Capital Gestionado</p>
            </div>
            <div className="stat-item">
              <h3>30%+</h3>
              <p>Retorno Promedio</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>Propiedades Adjudicadas</p>
            </div>
          </div>
        </div>
      </section>

      <section className="properties-section" id="casos">
        <div className="section-header">
          <span className="section-subtitle">CASOS DE ÉXITO</span>
          <h2 className="section-title">Propiedades Destacadas</h2>
        </div>
        <div className="properties-grid">
          <div className="property-card">
            <div className="property-image">
              <div className="property-badge">Remate Judicial</div>
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Casa en San Isidro" />
            </div>
            <div className="property-content">
              <h3>Residencia en San Isidro</h3>
              <p className="property-location">Lima, Perú</p>
              <div className="property-financials">
                <div className="fin-item">
                  <span>Valor Comercial</span>
                  <span className="strike">$ 450,000</span>
                </div>
                <div className="fin-item highlight">
                  <span>Precio Adjudicación</span>
                  <span>$ 265,000</span>
                </div>
              </div>
              <p className="property-roi">Rentabilidad Proyectada: <span>41%</span></p>
            </div>
          </div>

          <div className="property-card">
            <div className="property-image">
              <div className="property-badge">Cartera Bancaria</div>
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dúplex en Miraflores" />
            </div>
            <div className="property-content">
              <h3>Dúplex en Miraflores</h3>
              <p className="property-location">Lima, Perú</p>
              <div className="property-financials">
                <div className="fin-item">
                  <span>Valor Comercial</span>
                  <span className="strike">$ 320,000</span>
                </div>
                <div className="fin-item highlight">
                  <span>Precio Adjudicación</span>
                  <span>$ 195,000</span>
                </div>
              </div>
              <p className="property-roi">Rentabilidad Proyectada: <span>39%</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="testimonios">
        <div className="section-header">
          <span className="section-subtitle">CONFIANZA</span>
          <h2 className="section-title">Lo que dicen nuestros inversores</h2>
        </div>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">InverCapital me brindó la seguridad legal que necesitaba para entrar al mercado de remates. El proceso fue transparente y la rentabilidad superó mis expectativas.</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Carlos Mendoza</h4>
                <p>Inversor Privado</p>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="quote-icon">"</div>
            <p className="testimonial-text">Su equipo legal se encargó de todo. Yo solo tuve que aportar el capital y en 8 meses obtuvimos un retorno neto del 35% tras la venta del inmueble.</p>
            <div className="testimonial-author">
              <div className="author-info">
                <h4>Lucía Fernández</h4>
                <p>Empresaria</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="section-header">
          <span className="section-subtitle">CONTÁCTENOS</span>
          <h2 className="section-title">Inicie su Inversión Hoy</h2>
        </div>
        <div className="contact-container">
          <form className="contact-form" action="https://api.web3forms.com/submit" method="POST">
            {/* Sustituir YOUR_ACCESS_KEY_HERE por la real que proporcione Web3Forms para InverCapital */}
            <input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
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
              INVER<span>CAPITAL</span>
            </a>
            <p>El nexo definitivo entre su capital y las mejores oportunidades del mercado inmobiliario y remates judiciales.</p>
          </div>
          <div className="footer-col">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#casos">Casos de Éxito</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li>info@invercapital.com</li>
              <li>Torre Financiera, Piso 18</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          &copy; {new Date().getFullYear()} InverCapital. Todos los derechos reservados.
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="floating-buttons">
        <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer" className="float-btn whatsapp" aria-label="WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </div>
    </>
  )
}

export default App
