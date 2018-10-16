var inputBtns = document.getElementsByClassName('inputBtn');
        console.log(inputBtns);
        var lengthOfInputButtons = inputBtns.length;
        var clickOperator = document.getElementsByClassName('operator');
        var BeingUsedOperator;
        var IsOperatorPresent = false;

        
        
            for (i = 0; i < lengthOfInputButtons; i++) {
                inputBtns[i].onclick = function () {

                    document.getElementById('InputBox').value += this.getAttribute("name");
                    var num = document.getElementById('InputBox').value;

                    console.log("number:" + num);

                }
            }
        
        
        for (j = 0; j < clickOperator.length; j++) {
            clickOperator[j].onclick = function () {
                if (IsOperatorPresent==false){
                document.getElementById('InputBox').value += this.getAttribute("name");
                BeingUsedOperator = this.getAttribute("name");
                IsOperatorPresent = true;
                console.log(currentOperator);
                }
                else{
                    array=document.getElementById("InputBox").value.split(BeingUsedOperator);

                    if (BeingUsedOperator=="+")
                    {
                    var output = Number(array[0])+Number(array[1]);
                    
                    //The below line will display the output on existing HTML page
                    document.getElementById("PrintOutputOnPage").innerHTML = output;
                     //variable object
                     var car = {type:"Fiat", model:"500", color:"white"};

                     // Display some data from the object:
                     document.getElementById("PrintOutputOnPage2").innerHTML = car.type;
                    
                    }
                    if (BeingUsedOperator=="-")
                    {
                    var output = Number(array[0])-Number(array[1]);

                    //The below line will display the value in a alert box
                    window.alert(output);
                    

                    }
                    if (BeingUsedOperator=="*")
                    {
                    var output = Number(array[0])*Number(array[1]);
                    }
                    if (BeingUsedOperator=="/")
                    {
                    var output = Number(array[0])/Number(array[1]);
                    }
                    if (this.getAttribute("name")=="=")
                    {
                        document.getElementById('InputBox').value = output;
                        
                        //The below line will close all opened HTML and will display the value on a new HTMLdoc.
                        document.write(output);

                        

                       
                    }
                    else{
                    document.getElementById('InputBox').value = output + this.getAttribute("name");
                    BeingUsedOperator = this.getAttribute("name");
                    console.log(output);
                    }
                }

            }
        }