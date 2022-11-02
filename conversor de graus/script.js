document.querySelector('#button').onclick=function(){
    let graus = document.querySelector("#graus").value;
    let medida = document.querySelector("#medida").value;
    let tr=document.createElement('tr');
    let tbody=document.querySelector('tbody');
    graus=parseFloat(graus);
  
    if(document.querySelector("#graus").value!=''){
    if(document.querySelector('#medida').value!='null'){
    
    if(medida === '°C'){
      var celsius = graus;
      var farenheit = ((graus * 1.8) + 32).toFixed(2);
      var kelvin = ((graus + 273)).toFixed(2);; 
      var Rankine = ((graus + 273.15) * 1.8).toFixed(2);
  }
  
  if(medida === '°F'){
      var celsius = ((graus - 32) / 1.8).toFixed(2);
      var farenheit = graus;
      var kelvin = ((graus + 459.67) / 1.8).toFixed(2);
      var Rankine = ((graus + 459.67)).toFixed(2);
  }
  
    if(graus>0){
  if(medida === 'K'){
      var celsius = ((graus - 273.15).toFixed(2));
      var farenheit = ((graus * 1.8) - 459.67).toFixed(2);
      var kelvin = graus;
      var Rankine = ((graus * 1.8)).toFixed(2);
  }
  }
  
  if(medida === 'R'){
      var celsius = ((graus - 491.67) / 1.8).toFixed(2);
      var farenheit = ((graus - 459.67)).toFixed(2);
      var kelvin = ((graus / 1.8)).toFixed(2);
      var Rankine = graus;    
  }
  
  let tdCelsius=document.createElement("td");
      tdCelsius.append(celsius);
      tr.append(tdCelsius);
  
      let tdFarenheit=document.createElement("td");
      tdFarenheit.append(farenheit);
      tr.append(tdFarenheit);
  
      let tdKelvin=document.createElement("td");
      tdKelvin.append(kelvin);
      tr.append(tdKelvin);
  
      let tdRankine=document.createElement("td");
      tdRankine.append(Rankine);
      tr.append(tdRankine);
  
    tbody.append(tr)
    }
  }
    document.querySelector("#graus").value="";
  }