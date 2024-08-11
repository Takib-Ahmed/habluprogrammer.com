

const menubody = document.getElementById("menubody");


document.getElementById("menu").addEventListener("click", function () {
  menubody.classList.toggle("show");
  menu.classList.toggle("menucross")

});



            
const logform = document.getElementById("logform");


            document.getElementById("formpopup").addEventListener("click", function () {
              logform.classList.toggle("popup");
            });
            document.getElementById("loginicn").addEventListener("click", function () {
              logform.classList.toggle("popup");
            });
          
 
            document.getElementById("body").addEventListener("click", function () {
              logform.classList.remove("popup");
              logform.classList.remove("pop");
              logform.classList.remove("poping");
              menubody.classList.remove("show");
              menubody.classList.toggle("none")
            });

            document.getElementById("enroll").addEventListener("click", function () {
                 logform.classList.toggle("pop");
            });
          
            document.getElementById("forming").addEventListener("click", function () {
              logform.classList.toggle("poping");
         });
       

   