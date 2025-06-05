
//chronology
//randomColor is created
//make startChangingColor and  stopChangingColor
//now make change bgcolor within startChangingColor
//now documnet.queruy for both start and stop

const randomColor = () => {

    const hex = "0123456789ABCDEF";
    let color = "#"
    for(let i=0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color ;
    
    };
    
    
    let intervalId;

    const startChangingColor = () => {
        
        let changebgColor = () => {
            document.body.style.backgroundColor = randomColor(); 
        }
  
        //why !intervalid
//The first time the start button is clicked, intervalId is undefined (falsy), 
// so setInterval runs, and intervalId stores the interval ID.
//If the button is clicked again, intervalId is already assigned a value (truthy), 
// so setInterval won't run again.

       if(!intervalId){      
         intervalId = setInterval(changebgColor,1000)    
       }

    }


    const stopChangingColor = () => {
       clearInterval(intervalId) 
       intervalId = null;   // Resets intervalId, allowing startChangingColor to 
                            // start a new interval when clicked again.   
    }

    
    document.querySelector('#start').addEventListener('click', startChangingColor);
    document.querySelector('#stop').addEventListener('click', stopChangingColor);

    
    



