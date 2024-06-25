async function iniciarSesion() {
    const urlParams = new URLSearchParams(window.location.search);
    const username = urlParams.get('usuario');
    const password = urlParams.get('contrasena');
  
    try {
      const response = await fetch('../user.json'); 
      if (!response.ok) {
        throw new Error('Error al cargar el archivo JSON: ' + response.statusText);
      }
  
      const users = await response.json();
      console.log(users);
  
      // Verificar las credenciales
      let verify = !!users.find(element => element.username === username && element.contrasena === password);
      console.log(verify);
  
      if (verify) {
        window.location.href = '/src/html/blog.html?auth=Ok';
      } else {
        alert('Usuario o contraseña incorrecta');
        window.location.href = 'loging.html';
      }
    } catch (error) {
      console.error('Error al cargar el archivo JSON:', error);
      alert('Hubo un problema al iniciar sesión. Por favor, inténtalo de nuevo más tarde.');
    }
  }
  
  iniciarSesion();