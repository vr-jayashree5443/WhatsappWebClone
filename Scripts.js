function addLabel() {
    const textInput = document.getElementById("textInput");
    const labelText = textInput.value;
  
    const label = document.createElement("label");
    label.className = "label"; 
    label.textContent = labelText;
  
    
    const lineBreak = document.createElement("br");
  
    const labelContainer = document.getElementById("labelContainer1");
    labelContainer.appendChild(label);
    labelContainer.appendChild(lineBreak);
  
    textInput.value = '';
  }
  
