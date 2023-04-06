
//adding event listener to the button that make an axios call

let dog_container = document.getElementById(`dog_container`)

function gettingdogadata(details){

    //create axios success response and insert the dog_container
function dogSuccess(response){
   dog_container.insertAdjacentHTML(`beforeend`,
           `<div>
               <img src="${response[`data`][`url`]}">
          </div>`
     
   );
}

//create axios failure with an error message
function dogFailure(error){
dog_container.insertAdjacentHTML(`beforeend`, `<P>please try again, something is wrong</P>`)
}

//making axios call
    axios.request({
    url:`https://random.dog/woof.json`
}).then(dogSuccess).catch(dogFailure); }
let dog_button = document.getElementById(`dog_container`);

//Creating an eventListener
dog_button.addEventListener(`click`,gettingdogadata );








