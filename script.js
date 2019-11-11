        function generate(){
        var passLength = prompt("How long do you require your password? 8-128");
        var userChoice1= confirm("Do you want to choose Special characters?");
        console.log(userChoice1);
        var userChoice2=  confirm("Do you want to choose Numbers?");
        var userChoice3= confirm("Do you want to choose uppercase?");
        var userChoice4= confirm("Do you want to choose lowercase?");
        var passarray1, passarray2, passarray3, passarray4, newarray =[];
        var i;
        var password = " ";
            if( userChoice1 === true)
            {
                 passarray1=["!", "@", "#","$", "%", "&", "*", "^","~","?"];
                 newarray = passarray1;
            }
           if(userChoice2 === true)
             {
                passarray2=["1", "2", "3","4", "5", "6", "7", "8","9","0"];
                newarray =newarray.concat(passarray2);
                }
            if(userChoice3 === true)
             {
                passarray3 =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                newarray = newarray.concat(passarray3);
                }
            if(userChoice4 === true)
             {
                passaaray4 =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
                newarray = newarray.concat(passarray4);
                };
            for(i=0; i<passLength; i++)
            {
            password = password + newarray[Math.floor(Math.random()*newarray.length )];
            document.getElementById("display").value=password;
            }
        }
           
            function copy(){
                document.getElementById("display").select();
                document.execCommand("copy");
                alert("password copied to clipboard");
            }