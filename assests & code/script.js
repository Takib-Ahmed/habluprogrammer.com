

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
            });

            document.getElementById("enroll").addEventListener("click", function () {
                 logform.classList.toggle("pop");
            });
          