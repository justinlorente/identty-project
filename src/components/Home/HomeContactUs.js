import React from 'react';
import SeeMoreButton from '../SeeMoreButton';

const HomeContactUs = () => {
  return (
    <div className="HomeContactUs">
      <div
        className="HomeContactUs-content"
        data-cursor-exclusion
        style={{ backgroundColor: '#fff' }}
      >
        <p className="contact">CONTACTO</p>
        <h2 className="say-hi">Dinos hola!</h2>
        <p className="future">El futuro es excitante, démosle forma juntos.</p>
        <div className="text">
          <p>
            Si eres responsable de una marca, tienes una idea de negocio que
            quieres sacar adelante o necesitas apoyo en tus campañas de
            marketing y publicidad, escríbenos.
          </p>
          <p>
            Te invitamos a un café y si no resulta, te llevas un café gratis y
            habernos conocido.
          </p>
        </div>
      </div>
      <div className="HomeContactUs-formWrapper">
        <form data-cursor-exclusion style={{ backgroundColor: '#fff' }}>
          <input placeholder="Nombre" />
          <input placeholder="Email" />
          <input placeholder="Empresa" />
          <textarea
            className="tx"
            placeholder="Cuéntanos un poco sobre tu proyecto"
          />
          <SeeMoreButton text="enviar" />
          <span className="terms">
            <input type="checkbox" id="terms" name="terms" value="terms" />
            <label for="terms">
              He leído y acepto la política de privacidad de identty.
            </label>
          </span>
          <span className="terms">
            <input type="checkbox" id="terms" name="terms" value="terms" />
            <label for="terms">
              Acepto recibir los boletines informativos de identty.
            </label>
          </span>
          <span className="captcha">
            Este sitio está protegido por reCAPTCHA y se aplica la{' '}
            <span> Política de Privacidad </span>y las{' '} <br />
            <span> condiciones de servicio</span> de Google.
          </span>
        </form>
      </div>
    </div>
  );
};

export default HomeContactUs;
