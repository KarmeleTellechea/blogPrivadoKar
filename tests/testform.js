
  function boton() {
    const condiciones = document.getElementById("condiciones");
    const enviar = document.getElementById("enviar");
    
    const cambiarCondiciones = () => {
      enviar.disabled = !condiciones.checked;
    };
  
    condiciones.addEventListener('change', cambiarCondiciones);
  }
  
  boton();
  
  // Función de prueba personalizada
  function check(value, element, expected) {
    element.disabled = value;
    if (typeof expected === 'boolean') {
      expect(element.disabled).toBe(expected);
    } else {
      // Añade aquí la lógica para las comprobaciones específicas
      expect(element.disabled).toBe(expected === "check" ? true : false);
    }
  }
  
  describe('boton function', () => {
    const condiciones = document.getElementById('condiciones');
    const enviar = document.getElementById('enviar');
  
    test('should enable/disable the button based on checkbox state', () => {
      // Verifica que el botón esté desactivado inicialmente
      check(false, enviar, true);
      check(true, enviar, false);
    });
    })