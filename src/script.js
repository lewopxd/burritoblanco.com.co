//       #2 Burger Menu...
//codepen.io/victorfreire/pen/BjNveN


//https://github.com/VictorFreire/Material-Design-Burger-Menu

/* Storing user's device details in a variable*/
let details = navigator.userAgent;
  
/* Creating a regular expression 
containing some mobile devices keywords 
to search it in details string*/
let regexp = /android|iphone|kindle|ipad/i;
  
/* Using test() method to search regexp in details
it returns boolean value*/
let isMobileDevice = regexp.test(details);
  
if (isMobileDevice) {
     document.body.style.backgroundImage = "url('https://i.ibb.co/kg6fDnS/web-mobil-01.png')";
} else {
     
}