// DATA DEL USUARIO RELATIVA A INFORMACIÓN DE ACCESO

let emailUsuario = "carlosruiz@gmail.com"
let contraseniaUsuario = "abc"


// VALIDAR INGRESO
// PERMITE MEDIANTE LA ENTRADA DE DOS PARÁMETROS, CONFIRMAR SI EL USUARIO TIENE ACCESO A SU CUENTA, PARA ESTO SE DEBE COINCIDIR CON LOS VALORES GUARDADOS EN INFORMACIÓN DE ACCESO DEL USUARIO


function validarIngreso ( email, contrasenia) 
{
    if(email === emailUsuario && contrasenia === contraseniaUsuario)
    {
        alert("Bienvenido")
        return ("Bienvenido")
    }
    else if ( email !== emailUsuario && contrasenia === contraseniaUsuario)
    {
        return "Su email es erróneo"
    }
    else if ( email === emailUsuario && contrasenia !== contraseniaUsuario)
    {
        return "Su contraseña es errónea"
    }
    else 
    {
        return "Su email y contraseña son erróneos"
    }
}

const emailIngresado = prompt("Ingrese su email")
const contraseniaIngresada = prompt("Ingrese su contraseña")

console.log(validarIngreso(emailIngresado, contraseniaIngresada))


// SEGURIDAD CONTRASEÑA
// PERMITE EVALUAR UN PRIMER ASPECTO DE LA SEGURIDAD DE LA CONTRASEÑA BASADO EN LA CANTIDAD DE CARACTERES QUE ESTA TENGA

function seguridadContrasenia (contrasenia) 
{
  if ( contrasenia.length < 8 )
  {
    return "Su contraseña es insegura"
  }
  else 
  {
    return "Su contraseña es segura"
  }
}

console.log (seguridadContrasenia(contraseniaUsuario))


// VALIDAR CORREO
// PERMITE EVALUAR SI EL CORREO ASOCIADO AL USUARIO ES VALIDO PARA SU USO (CONTIENE "@"). DE NO SER ASÍ, SE LE PREGUNTA AL USUARIO SI QUIERE CAMBIARLO

function validarCorreo (email)
  {
    let arrobas = 0
    for ( i = 0; i < email.length; i++)
    {
      if ( email[i] === "@" )
      {
        arrobas = arrobas + 1
      }
    }
    if ( arrobas === 0 )
    {
      alert("Cuenta de correo no valida")
      let cambiarEmail = prompt("Quiere cambiar su cuenta de correo? S/N")
      {
        if (cambiarEmail === "S")
        {
          let emailNuevo = prompt("Ingrese su correo nuevo")
          emailUsuario = emailNuevo
          console.log(`Su correo ha sido confirmado como ${emailUsuario}`)
          return "Correo cambiado"
        }
        else 
        {
          return "Su correo no será cambiado"
        }
      }
    }
    else {
      return "Cuenta de correo válida"
    }
  }

console.log(validarCorreo(emailUsuario))

// VALIDAR CONTRASEÑA
// PERMITE EVALUAR SI LA CONTRASEÑA DEL USUARIO ES DE TIPO ALFANUMÉRICO. DE NO SER ASÍ, SE LE PREGUNTA AL USUARIO SI QUIERE CAMBIARLA

function validarContrasenia (contrasenia)
{
  let numeros = 0
  for ( i = 0; i<contrasenia.length; i++)
  {
    if ( contrasenia[i].match(/[1234567890]/) )
    {
      numeros = numeros + 1
    }
  }
  if ( numeros === 0)
  {
    alert ("Su contraseña debe tener caracteres alfanuméricos")
    let cambiarContrasenia = prompt("Desea cambiar su contrasenia? S/N")
    {
      if (cambiarContrasenia === "S")
      {
        let contraseniaNueva = prompt("Ingrese su contraseña nueva e incluya un número")
        contraseniaUsuario = contraseniaNueva
        console.log("Se ha cambiado exitosamente la contraseña")
        return "Contraseña cambiada"
      }
      else 
      {
        return "Su contraseña no será cambiada"
      }
    }
  }
}

console.log(validarContrasenia(contraseniaUsuario))