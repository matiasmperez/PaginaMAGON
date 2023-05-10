
  function validate() {
    let name = document.querySelector('[name="name"');
    let email = document.querySelector('[name="email"');
    let msg = document.querySelector('[name="message"');
    let btn = document.querySelector('[name="submit"');

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (name.value == "" || email.value == "" || msg.value == "") {
        emptyerror();
      } else {
        sendmail(name.value, email.value, msg.value);
        success();
        clear();
        
      }
    });
  }
  validate();

  function sendmail(name, email, msg) {
    emailjs.send("service_3ycybi1", "template_6ycrtft", {
      from_name: name,
      to_name: email,
      message: msg,
    });
  }

  function clear(){
    var form = document.getElementById("miForm");
    form.reset();
  }

  function emptyerror() {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Los campos no pueden estar vacios",
    });
  }

  function error() {
    swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Ocurrio un error",
    });
  }

  function success() {
    swal.fire({
      icon: "success",
      title: "Enviado",
      text: "El mensaje se envio correctamente",
    });
  }