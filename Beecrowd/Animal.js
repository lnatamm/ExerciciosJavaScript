var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let vertebras, classe, comida;

vertebras = lines.shift();
classe = lines.shift();
comida = lines.shift();

if(vertebras == "vertebrado"){

    if(classe == "ave"){

        if(comida == "carnivoro"){
            
            console.log("aguia");

        }
    
    
        else if(comida == "onivoro"){
          
            console.log("pomba");
        
        }
    }
    
    else if(classe == "mamifero"){

        if(comida == "onivoro"){

            console.log("homem");

        }

        else if(comida == "herbivoro"){

            console.log("vaca");

        }


    }

   
}

else if(vertebras == "invertebrado"){

    if(classe == "inseto"){

        if(comida == "hematofago"){
            
            console.log("pulga");

        }
        else if(comida == "herbivoro"){

            console.log("lagarta");

        }

    }

    else if(classe == "anelideo"){

        if(comida == "hematofago"){

            console.log("sanguessuga");

        }

        else if(comida == "onivoro"){

            console.log("minhoca");

        }

    }

}