    //model
    const model = {

        summ: function (firstInput, secondInput) {
            let res = +firstInput + +secondInput;
            model.drawInView(res);

        },

        minus: function (firstInput, secondInput) {
            let res = firstInput - secondInput;
            model.drawInView(res);
        },

        multiply: function (firstInput, secondInput) {
            let res = firstInput * secondInput;
            model.drawInView(res);
        },

        split: function (firstInput, secondInput) {
            let res = firstInput / secondInput;
            model.drawInView(res);
        },

        drawInView: function(res) {
            view.draw(res);
        }
    }


    //contoller
    const controller = {

        firstInput: document.getElementById("input_1").value,
        secondInput: document.getElementById("input_2").value,
        select: document.getElementById("select").value,
        button: document.getElementById("calculate-btn"),
       
        btnOn: function() {
            controller.button.addEventListener("click", controller.addEvent);
        },

        addEvent: function(event) {
            event.preventDefault();
            let val = document.getElementById("select").value;
            controller.firstInput = document.getElementById("input_1").value;
            controller.secondInput = document.getElementById("input_2").value;
                   
                if (val === "+") {
                    model.summ(controller.firstInput, controller.secondInput);
                } else if (val === "-") {
                    model.minus(controller.firstInput, controller.secondInput);
                } else if ( val === "*") {
                    model.multiply(controller.firstInput, controller.secondInput);
                } else if (val === "/") {
                    model.split(controller.firstInput, controller.secondInput);
                }  
           
        },

              
    }

    controller.btnOn();

    //view

    const view = {

        draw: function(res) {
            let result = document.getElementById("show-result");
            result.innerHTML = `Результат вычислений = ${res}`;
        }
        
    }


    //   const button = document.getElementById("calculate-btn");
    //   button.disabled = true;

    //   const firstInput = document.getElementById("input_1");
    //   const secondInput = document.getElementById("input_2");

    //   firstInput.addEventListener("input", readValue);
    //   secondInput.addEventListener("input", readValue);

    //   function readValue() {
    //     if (firstInput.value !== "" && secondInput.value !== "") {
    //       button.disabled = false;
    //     } else {
    //         button.disabled = true;
    //     }
    //   }

    //   let result = document.getElementById("show-result");
    //   button.addEventListener("click", summ);

    //   function summ(event) {
    //     event.preventDefault();
    //     let a = Number(input_1.value);
    //     let b = Number(input_2.value);
    //     let c = a * b;
    //     result.innerHTML = `Результат вычислений = ${c}`;
    //   }