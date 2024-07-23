


function genaratePassword(length,includeLowerCase, incluseUpperCase,includeNumbers,includeSymbols){
  const lowercasechars="qwertyuioplkjhgfdsazxcvbnm";
  const uppercasechars="QWERTYUIOPLKJHGFDSAZXCVBNM";
  const numberchars="0123456789";
  const sybmolchars="!@#$%^&*()_+";
  let allowedchars="";
  let password="";
  allowedchars +=  includeLowerCase ? lowercasechars : "";
  allowedchars += incluseUpperCase ? uppercasechars : "";
  allowedchars +=includeNumbers ? numberchars : "" ;
  allowedchars +=includeSymbols ? sybmolchars: "";
  
  if(length <=0){
    return `(password length shound be atleast one)`;
  }
  if(allowedchars.length === 0){
    return `(At least  1 set of character  needs to be selected)`;
  }
  for(let i= 0 ; i < length;i++){
    const randomIndex= Math.floor(Math.random() * allowedchars.length);
    password +=allowedchars[randomIndex];
  }

    return password;
}

const passwordLength=12;
const includeLowerCase=true;
const incluseUpperCase=true;
const includeNumbers=true;
const includeSymbols=true;
function submitted(){

const password= genaratePassword(passwordLength,
                            includeLowerCase,incluseUpperCase, 
                            includeNumbers,includeSymbols)
                            textbox.textContent=password;
}
// console.log(`genarated password is : ${password}`)

const textbox = document.getElementById("textbox");
