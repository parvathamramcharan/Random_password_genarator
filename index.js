function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols) {
  const lowercaseChars = "qwertyuioplkjhgfdsazxcvbnm";
  const uppercaseChars = "QWERTYUIOPLKJHGFDSAZXCVBNM";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+";
  let allowedChars = "";
  let password = "";

  if (length <= 0) {
      return `(Password length should be at least one)`;
  }

  allowedChars += includeLowerCase ? lowercaseChars : "";
  allowedChars += includeUpperCase ? uppercaseChars : "";
  allowedChars += includeNumbers ? numberChars : "";
  allowedChars += includeSymbols ? symbolChars : "";

  if (allowedChars.length === 0) {
      return `(At least one set of characters needs to be selected)`;
  }

  for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
  }

  return password;
}

function submitted() {
  const length = parseInt(document.getElementById("length").value);
  const includeLowerCase = document.getElementById("lowercase").checked;
  const includeUpperCase = document.getElementById("uppercase").checked;
  const includeNumbers = document.getElementById("numbers").checked;
  const includeSymbols = document.getElementById("symbols").checked;

  const textbox = document.getElementById("textbox");
  textbox.textContent = "Generating...";

  // Change to the second video
  const videoSource = document.getElementById("video-source");
  videoSource.src = "./assets/video2.mp4";
  const backgroundVideo = document.getElementById("background-video");
  backgroundVideo.load();
  backgroundVideo.play();

  // Generate the password after 4 seconds
  setTimeout(() => {
      const password = generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols);
      textbox.textContent = password;

      // Change back to the first video and stop the second video
      videoSource.src = "./assets/video1.mp4";
      backgroundVideo.load();
      backgroundVideo.play();
  }, 4000); // Display password and revert video after 4 seconds
}
