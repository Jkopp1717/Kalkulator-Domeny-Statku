
//TO DO: Sprawdzić pliki css, nie łączą się z oryginalnym plikiem
//nie wyswietlaja wyników




MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$']],
        processEscapes: true
    }
});

function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
function updateFormulaInfo() {
    var selectElement = document.getElementById("formulaSelect");
    var formulaInfoElement = document.getElementById("formulaInfo");
    var selectedFormula = selectElement.value;
    var tekst = "$$\\( E = mc^2 \\)$$"
    // Define information for each formula
    var formulaInfo = {
        none: {
            title: "Informacje o wzorze",
            content: "Wybierz wzór, żeby uzyskać informację."
        },
        formula1: {
            title: "Formula 1",
            content: "Informacje o wzorze"
        },

        formula2: {
            title: "Formula 2",
            content: "Informacje o wzorze."
        },
        formula3: {
            title: "Formula 3",
            content: "Informacje o wzorze."
        },
        formula4: {
            title: "Wzór testowy",
            content: `${tekst}`
        },
        formula5: {
            title: "Wzór testowy",
            content: `${tekst}`
        },
        formula6: {
            title: "Wzór testowy",
            content: `${tekst}`
        }
        
    };

    // Update the formula info element with the selected formula's information
    formulaInfoElement.innerHTML = `<h3>${formulaInfo[selectedFormula].title}</h3><p>${formulaInfo[selectedFormula].content}</p>`;
}
function calculate() {
    // Get input values
    var selectElement = document.getElementById("formulaSelect");
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);
    var num5 = parseFloat(document.getElementById('num5').value);
    var num6 = parseFloat(document.getElementById('num6').value);
    var num7 = parseFloat(document.getElementById('num7').value);
    var num8 = parseFloat(document.getElementById('num8').value);
    var num9 = parseFloat(document.getElementById('num9').value);
    var num10 = parseFloat(document.getElementById('num10').value);
    var num11 = parseFloat(document.getElementById('num11').value);

    // Space for more input values
    var ulamek1 = (parseFloat(num5) * parseFloat(num6)) /
    ((parseFloat(num7) * parseFloat(num8)) - (parseFloat(num5) * parseFloat(num6)))
    // Variable to store the calculated result
    
    // Get the selected formula
    var selectedFormula = document.getElementById("formulaSelect").value;

    // Variable to store the calculated result
    var result;
  
    // Use a switch statement with modifications
    switch (selectedFormula) {
      case "formula1":
        result = ((parseFloat(num1) * parseFloat(num2)) +
        (parseFloat(num3) * parseFloat(num4) / 30) * ulamek1 ** (2.0 / 3.0) * num9 ** (2.08) + num10 * num11);
        document.getElementById("resultContainer-1").innerHTML = `<p>Wynik: ${result.toFixed(2)}</p>`;
        break;
  
      case "formula2":
        result = (num1 * num2 + num3 * (0.01 * num4 * num9 ** (2)) + num10 * num11);
        document.getElementById("resultContainer-2").innerHTML = `<p>Wynik: ${result.toFixed(2)}</p>`;
        break;
  
      case "formula3":
        result = (num1 * num2 + num3 * (0.02 * num4 * num9 ** (2)) + num10 * num11);
        document.getElementById("resultContainer-3").innerHTML = `<p>Wynik: ${result.toFixed(2)}</p>`;
        break;

      case "formula4":
        result = (num5*num6);
        document.getElementById("resultContainer-4").innerHTML = `<p>Wynik: ${result.toFixed(2)}</p>`;
        break;

      case "formula5":
            result = (num5+num6);
            document.getElementById("resultContainer-5").innerHTML = `<p>Wynik: ${result.toFixed(2)}</p>`;
            break;

      case "formula6":
            result = (num5*num6 + num9);
            document.getElementById("resultContainer-6").innerHTML = `<p>Wynik: ${result.toFixed(2)}</p>`;
            break;
  
      // Add more cases for additional formulas
  
      default:
        result = "Wybierz wzór jaki chcesz obliczyć i wprowadź wartości parametrów";
        document.getElementById("resultContainer").innerHTML = `<p>Wynik: ${result}</p>`;
        break;
    }
  }



  function DontBeInfluencedByResults() {
    // Array to store calculated results
    const results = [];
  
    // Get input values 
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    const num5 = parseFloat(document.getElementById('num5').value);
    const num6 = parseFloat(document.getElementById('num6').value);
    const num7 = parseFloat(document.getElementById('num7').value);
    const num8 = parseFloat(document.getElementById('num8').value);
    const num9 = parseFloat(document.getElementById('num9').value);
    const num10 = parseFloat(document.getElementById('num10').value);
    const num11 = parseFloat(document.getElementById('num11').value);
    const num12 = parseFloat(document.getElementById('num12').value);
    const num13 = parseFloat(document.getElementById('num13').value);
  
    // Define formulas object with functions
    const formulas = {
        "formula1": function(inputs) {
          const ulamek1 = (inputs[4] * inputs[5]) / ((inputs[6] * inputs[7]) - (inputs[4] * inputs[5]));
          return (inputs[0] * inputs[1]) + (inputs[2] * inputs[3] / 30) * Math.pow(ulamek1, 2.0 / 3.0) * Math.pow(inputs[8], 2.08) + inputs[9] * inputs[10];
        },
        "formula2": function(inputs) {
          return inputs[0] * inputs[1] + inputs[2] * (0.01 * inputs[3] * Math.pow(inputs[8], 2)) + inputs[9] * inputs[10];
        },
        "formula3": function(inputs) {
          return inputs[0] * inputs[1] + inputs[2] * (0.02 * inputs[3] * Math.pow(inputs[8], 2)) + inputs[9] * inputs[10];
        },
        "formula4": function(inputs) {
          return inputs[4] * inputs[5]; 
        },
        "formula5": function(inputs) {
          return inputs[4] + inputs[5]; 
        },
        "formula6": function(inputs) {
          return inputs[4] * inputs[5] + inputs[8]; 
        },
        
      };
  
 // Loop through all formulas and calculate results
 for (const formulaName in formulas) {
    const result = formulas[formulaName]([num1, num2, num3, num4, num5, num6, num7, num8, num9, num10, num11]);
    results.push({ formulaName, result });
  }

  // Update the corresponding result containers for each formula
  for (const { formulaName, result } of results) {
    const containerId = `resultContainer-${formulaName}`;
    document.getElementById(containerId).innerHTML = `<p>Wynik dla ${formulaName}: ${result.toFixed(2)}</p>`;
  }

  return results; // Optional: return the results object for further use (if needed)
}


function updateDescriptionInfo() {
    var selectDescription = document.getElementById("descriptionSelect");
    var descriptionInfoElement = document.getElementById("descriptionInfo");
    var selectedDescription = selectDescription.value;

    // Define information for each formula
    var descriptionInfo = {
        none: {
            title: "Informacje o parametrze",
            content: "Wybierz parametr, żeby uzyskać informację."
        },
        L: {
          title: "Długość statku (L)",
          content: "Całkowita długość statku wyrażona w metrach odczytywana z danych statku (ang. Ship’s Particulars), karty Pilotowej (ang. Pilot Card) oraz np. systemu AIS: L= Lc=LOA, [m];"
      },
      B: {
        title: "Szerokość statku (T)",
        content: "Szerokość statku wyrażona w metrach odczytywana z danych statku (ang. Ship’s Particulars), karty Pilotowej (ang. Pilot Card) oraz np. systemu AIS, [m];"
    },
        T: {
            title: "Zanurzenie statku (T)",
            content: "Zanurzenie statku, wartość wyrażana w metrach, [m];"
        },
        v: {
            title: "Prędkość statku (v)",
            content: "Prędkość statku. Wielkość pisana małą literą wyrażona jest zwykle w metrach na sekundę (v [m/s]), pisana natomiast wielką literą wyrażana jest w węzłach (V [kn]);  "
        },
        Cb: {
            title: "Współczynnik pełnotliwości kadłuba (Cb)",
            content: "Współczynnik pełnotliwości kadłuba określający stosunek objętości podwodnej części kadłuba do objętości bryły o wymiarach odpowiednio równych: B, L, T, gdzie: L=długość statku, B= szerokość statku, T= zanurzeniu statku"
        },
        Tmax: {
            title: "Maksymalne zanurzenie statku (Tmax)",
            content: "Maksymalne (statyczne) zanurzenie statku (ang. maximum draft of the ship) wyrażone w metrach, [m];"
        },
        b: {
            title: "Szerokość akwenu (b)",
            content: "Szerokość akwenu żeglownego wyrażona w metrach. Symbol b ̄  oznacza wartość średnią, [m];"
        },
        h: {
            title: "Głębokość akwenu (h)",
            content: "Głębokość akwenu wyrażona w metrach, h ̄  oznacza wartość średnią, [m];"
        },
        hf: {
            title: "Wysokość fali (hfl)",
            content: "Wysokość fali wyrażona w metrach [m];"
        },
        lambdafl: {
          title: "Długość fali (λfl)",
          content: "Długość fali wyrażona w metrach [m];"
      },
        k: {
            title: "Współczynnik korygujący (k)",
            content: "Bezwymiarowy współczynnik wprowadzony przez Römisch-a przy ustalaniu prędkości granicznych statku, zależny od wymiarów statku (L, B, T) oraz parametrów kanału żeglownego (b, h). "
        },
        n: {
            title: "Współczynnik korygujący (n)",
            content: "Bezwymiarowy współczynnik wprowadzony przez autora korygujący składową statyczną głębokości domeny statku (SDD) w funkcji zanurzenia statku T zależny od typu akwenu (portowe, tory przybrzeżne, akweny otwarte) oraz rodzaju dna (skaliste, piaszczyste, muliste). "
        },
        m: {
            title: "Współczynnik korygujący (m)",
            content: "Wprowadzony przez autora bezwymiarowy współczynnik (faktor: 1,0 =< m =< 2,0) korygujący składową pionową rezerwy nawigacyjnej statku (SDD) związanej z jego osiadaniem (Rsquat = f (m, V, B, L, T, CB, h, b)) ustalony w zależności od aktualnej sytuacji nawigacyjnej, w której znalazł się ten statek (np. wyprzedzanie, mijanie, przemieszczanie się na płyciźnie ponad nierównościami dennymi, nawigacja w lodzie, mule itp.) oraz rozbieżności w parametrach statku i parametrach basenu od parametrów przyjętych w źródłowej metodzie obliczania osiadania statku w ruchu;"
        },
        l: {
          title: "Współczynnik korygujący (l)",
          content: "bezwymiarowy współczynnik (faktor: 1.1 =< l =< 1.5) zależny od długości statku L oraz jego szerokości B korygujący osiadanie statku w ruchu stosowany przy metodzie G.I. Soukhomela i V.M. Zassa;"
      },
        
    };

    // Update the description info element with the selected parameter's information
    if (selectedDescription === "none") {
        descriptionInfoElement.innerHTML = `<h3>${descriptionInfo.none.title}</h3><p>${descriptionInfo.none.content}</p>`;
    } else {
        descriptionInfoElement.innerHTML = `<h3>${descriptionInfo[selectedDescription].title}</h3><p>${descriptionInfo[selectedDescription].content}</p>`;
    }
}


function calculateAllSD(){

  const num1 = parseFloat(document.getElementById('num1').value); //n
  const num2 = parseFloat(document.getElementById('num2').value); // Tmax
  const num3 = parseFloat(document.getElementById('num3').value); //m
  const num4 = parseFloat(document.getElementById('num4').value); //Cb

  const num5 = parseFloat(document.getElementById('num5').value); //B
  const num6 = parseFloat(document.getElementById('num6').value); //T
  const num7 = parseFloat(document.getElementById('num7').value); //b
  const num8 = parseFloat(document.getElementById('num8').value); //h

  const num9 = parseFloat(document.getElementById('num9').value); //v
  const num10 = parseFloat(document.getElementById('num10').value); //k
  const num11 = parseFloat(document.getElementById('num11').value); //hfl
  const num12 = parseFloat(document.getElementById('num12').value); //l

  const num13 = parseFloat(document.getElementById('num13').value); //L
  const num14 = parseFloat(document.getElementById('num14').value); //t
  const num15 = parseFloat(document.getElementById('num15').value); //lambda fl
  const num16 = parseFloat(document.getElementById('num16').value); //Air draft, H

  const num17 = parseFloat(document.getElementById('num17').value); // OHCs
  const num18 = parseFloat(document.getElementById('num18').value); // CVC
  const num19 = parseFloat(document.getElementById('num19').value); // SDD
  const num20 = parseFloat(document.getElementById('num20').value); // SDH
  

  if (
    !(num1 >= 0 && num2 >= 0 && num3 >= 0 && num4 >= 0 && 
      num5 >= 0 && num6 >= 0 && num7 >= 0 && num8 >= 0 &&
      num9 >= 0 && num10 >= 0 && num11 >= 0 && num12 >= 0 && 
      num13 >= 0 && num14 >= 0 && num15 >= 0 && num16 >= 0 && 
      num17 >= 0 && num19 >= 0 && num20 >= 0)
  ) {
    alert("Parametry muszą być większe lub równe 0. Sprawdź wprowadzone dane.");
    return; // Przerywamy działanie funkcji
  }

  // Walidacja warunku T > Tmax > h
  if (!(num6 <= num2 && num2 < num8)) {
    alert("Warunek T <= Tmax < h nie został spełniony! Sprawdź wprowadzone wartości.");
    return; // Przerywamy działanie funkcji
  }
  if (!(num4 <= 1)) {
    alert("Warunek CB >= 1 nie został spełniony! Sprawdź wprowadzone wartości.");
    return;
  }
  if (!(num1 <= 10)) {
    alert("Wartość n jest zbyt wysoka(n > 10)! Sprawdź wprowadzone wartości.");
    return;
  }
  if (!(num10 <= 1.5)) {
    alert("Warunek k <= 1.5 nie został spełniony! Sprawdź wprowadzone wartości.");
    return;
  }
  if (!(num3 <= 1.25)) {
    alert("Warunek m >= 1.25 nie został spełniony! Sprawdź wprowadzone wartości.");
    return;
  }


var ulamek1 = ((parseFloat(num5) * parseFloat(num6)) /
((parseFloat(num7) * parseFloat(num8)) - (parseFloat(num5) * parseFloat(num6))))
var ulamek2 = (0.113 * num5 * (num8 / num6)) ** -(27 / 100)  
let term1 = num1 * num2;
let term2 = num3 * (0.113 * num5 * Math.pow(num8 / num6, -0.27) * Math.pow(0.514 * num9 / Math.sqrt(9.81 * num8), 1.8));
let term3 = num10 * num11 
let term4 = num3 * num12 * 0.049047542 * Math.pow(num9, 2) * Math.sqrt(num6 / num8) * Math.pow(num13 / num5, -1.11);
let term5 = (num3/2) * (0.113 * num5 * Math.pow(num8 / num6, -0.27) * Math.pow(0.514 * num9 / Math.sqrt(9.81 * num8), 1.8));
let term6 = (num3/2) * num12 * 0.049047542 * Math.pow(num9, 2) * Math.sqrt(num6 / num8) * Math.pow(num13 / num5, -1.11);

var results = [1,
    ((parseFloat(num1) * parseFloat(num2)) +
    (parseFloat(num3) * parseFloat(num4) / 30) * ulamek1 ** (2.0 / 3.0) * num9 ** (2.08) + num10 * num11), 
    (num1 * num2 + num3 * (0.01 * num4 * num9 ** (2)) + num10 * num11),
    (num1 * num2 + num3 * (0.02 * num4 * num9 ** (2)) + num10 * num11),
    (term1 + term2 + term3),
    (term1 + term4 + term3),

    (num16 + num17) - (num3 * num4 / 60) * ulamek1 ** (2.0 / 3.0) * num9 ** (2.08),
    (num16 + num17 - (0.005 * num3 * num4 * num9**(2))),
    (num16 + num17 - 0.01 * num3 * num4 * num9**(2)),
    (num16 + num17 - term5),
    (num16 + num17 - term6)
  ];
      
  
  for (let i = 1; i < 11; i++)
      document.getElementById(`result-${i}`).innerHTML = `${results[i].toFixed(2)}`
  
  const resultSDD1V0 =  (parseFloat(num1) * parseFloat(num2)) +
  (parseFloat(num3) * parseFloat(num4) / 30) * ulamek1 ** (2.0 / 3.0) * 0 ** (2.08) + num10 * num11;

  const resultSDD1V5 =  (parseFloat(num1) * parseFloat(num2)) +
  (parseFloat(num3) * parseFloat(num4) / 30) * ulamek1 ** (2.0 / 3.0) * 5 ** (2.08) + num10 * num11;


  const resultSDD1V20 =  (parseFloat(num1) * parseFloat(num2)) +
  (parseFloat(num3) * parseFloat(num4) / 30) * ulamek1 ** (2.0 / 3.0) * 20 ** (2.08) + num10 * num11;
  
  document.getElementById("result-21").innerText = resultSDD1V0.toFixed(2);
  document.getElementById("result-22").innerText = resultSDD1V5.toFixed(2);
  document.getElementById("result-23").innerText = resultSDD1V20.toFixed(2);
  
  const resultSDH1V0 = (num16 + num17) - (num3 * num4 / 60) * ulamek1 ** (2.0 / 3.0) * 0 ** (2.08)
  const resultSDH1V5 = (num16 + num17) - (num3 * num4 / 60) * ulamek1 ** (2.0 / 3.0) * 5 ** (2.08)
  const resultSDH1V20 = (num16 + num17) - (num3 * num4 / 60) * ulamek1 ** (2.0 / 3.0) * 20 ** (2.08)



  document.getElementById("result-24").innerText = resultSDH1V0.toFixed(2);
  document.getElementById("result-25").innerText = resultSDH1V5.toFixed(2);
  document.getElementById("result-26").innerText = resultSDH1V20.toFixed(2);

}
function calculateTest (){

}
function calculateAllVZ(){
  
  const num1 = parseFloat(document.getElementById('num1').value); //n
  const num2 = parseFloat(document.getElementById('num2').value); //Tmax
  const num3 = parseFloat(document.getElementById('num3').value); //m
  const num4 = parseFloat(document.getElementById('num4').value); //Cb

  const num5 = parseFloat(document.getElementById('num5').value); //B
  const num6 = parseFloat(document.getElementById('num6').value); //T
  const num7 = parseFloat(document.getElementById('num7').value); //b
  const num8 = parseFloat(document.getElementById('num8').value); //h

  const num9 = parseFloat(document.getElementById('num9').value); //v
  const num10 = parseFloat(document.getElementById('num10').value); //k
  const num11 = parseFloat(document.getElementById('num11').value); //hfl
  const num12 = parseFloat(document.getElementById('num12').value); //l

  const num13 = parseFloat(document.getElementById('num13').value); //L
  const num14 = parseFloat(document.getElementById('num14').value); //t
  const num15 = parseFloat(document.getElementById('num15').value); //lambda fl
  const num16 = parseFloat(document.getElementById('num16').value); //Air draft, H
  
  const num17 = parseFloat(document.getElementById('num17').value); // OHCs
  const num18 = parseFloat(document.getElementById('num18').value); // CVC
  const num19 = parseFloat(document.getElementById('num19').value); // SDD
  const num20 = parseFloat(document.getElementById('num20').value); // SDH

    // Walidacja warunków
let war = num1 * num2 + num10 * num11;
    if (
      !(num1 >= 0 && num2 >= 0 && num3 >= 0 && num4 >= 0 && 
        num5 >= 0 && num6 >= 0 && num7 >= 0 && num8 >= 0 &&
        num9 >= 0 && num10 >= 0 && num11 >= 0 && num12 >= 0 && 
        num13 >= 0 && num14 >= 0 && num15 >= 0 && num16 >= 0 && 
        num17 >= 0 && num19 >= 0 && num20 >= 0)
    ) {
      alert("Parametry muszą być większe lub równe 0. Sprawdź wprowadzone dane.");
      return; // Przerywamy działanie funkcji
    }

    if (!(num6 <= num2)) {
      alert("Warunek T <= Tmax nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }
  
    if (!(num2 < num8)) {
      alert("Warunek Tmax < h nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }
  
    if (!(num8 >= num19)) {
      alert("Warunek h >= SDD nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }

    if (!(num16 < num18)) {
      alert("Warunek ADT < CVC nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }

    if (!(num18 >= num20)) {
      alert("Warunek CVC >= SDH nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }

    if (!(num20 >= (num17 + num16))) {
      alert("Warunek SDH >= ADT + OHC nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }
    if (!(num4 <= 1 && num4 >= 0)) {
      alert("Wartość jest zbyt wysoka (CB > 1)! Sprawdź wprowadzone wartości.");
      return;
    }
    if (!(num1 <= 10 && num1 >= 0)) {
      alert("Wartość n jest zbyt wysoka(n > 10)! Sprawdź wprowadzone wartości.");
      return;
    }
    if (!(num10 <= 1.5 && num10 >= 0)) {
      alert("Warunek k <= 1.5 nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }
    if (!(num3 <= 1.25 && num3 >= 0)) {
      alert("Warunek m >= 1.25 nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }

    if (!(num19 >= war)) {
      alert("Warunek CVC >= SDH >= n * Tmax + k * hfl  nie został spełniony! Sprawdź wprowadzone wartości.");
      return;
    }


  var ulamek1 = ((parseFloat(num5) * parseFloat(num6)) /
((parseFloat(num7) * parseFloat(num8)) - (parseFloat(num5) * parseFloat(num6))))
var ulamek2 = (0.113 * num5 * (num8 / num6)) ** -(27 / 100)  
let term1 = num1 * num2;
let term2 = num3 * (0.113 * num5 * Math.pow(num8 / num6, -0.27) * Math.pow(0.514 * num9 / Math.sqrt(9.81 * num8), 1.8));
let term3 = num10 * num11 
let term4 = num3 * num12 * 0.049047542 * Math.pow(num9, 2) * Math.sqrt(num6 / num8) * Math.pow(num13 / num5, -1.11);
let term5 = (num3/2) * (0.113 * num5 * Math.pow(num8 / num6, -0.27) * Math.pow(0.514 * num9 / Math.sqrt(9.81 * num8), 1.8));
let term6 = (num3/2) * num12 * 0.049047542 * Math.pow(num9, 2) * Math.sqrt(num6 / num8) * Math.pow(num13 / num5, -1.11);
  
  const resultSDD1 = document.getElementById("result-1");
  const resultValue = parseFloat(resultSDD1.innerText);
  
  

  const resultSDD2 = document.getElementById("result-2");
  const resultValue2 = parseFloat(resultSDD2.innerText);

  const resultSDD3 = document.getElementById("result-3");
  const resultValue3 = parseFloat(resultSDD3.innerText);

  const resultSDD4 = document.getElementById("result-4");
  const resultValue4 = parseFloat(resultSDD4.innerText);

  const resultSDD5 = document.getElementById("result-5");
  const resultValue5 = parseFloat(resultSDD5.innerText);

  const resultSDD6 = document.getElementById("result-6");
  const resultValue6 = parseFloat(resultSDD6.innerText);

  const resultSDD7 = document.getElementById("result-7");
  const resultValue7 = parseFloat(resultSDD7.innerText);

  const resultSDD8 = document.getElementById("result-8");
  const resultValue8 = parseFloat(resultSDD8.innerText);

  const resultSDD9 = document.getElementById("result-9");
  const resultValue9 = parseFloat(resultSDD9.innerText);

  const resultSDD10 = document.getElementById("result-10");
  const resultValue10 = parseFloat(resultSDD10.innerText);

  if (isNaN(resultValue)) {
      alert("Najpierw oblicz wyniki dla domen!");
      return;
  }
  var ulamek1 = (parseFloat(num5) * parseFloat(num6)) /
((parseFloat(num7) * parseFloat(num8)) - (parseFloat(num5) * parseFloat(num6)))

  const transformedValue = (30 * ((num19) - num1 * num2 - num10 * num11) / ((parseFloat(num3) * parseFloat(num4)) * ulamek1 ** (2/3))) ** (25/52)  ; 
  document.getElementById("result-11").innerText = transformedValue.toFixed(2);

  const transformedValue2 = ((num19 - num1 * num2 - num10 * num11) / (0.01 * num3 * num4)) ** (1 / 2); 
  document.getElementById("result-12").innerText = transformedValue2.toFixed(2);

  const transformedValue3 =((num19 - num1 * num2 - num10 * num11) / (0.02 * num3 * num4)) ** (1 / 2); 
  document.getElementById("result-13").innerText = transformedValue3.toFixed(2);

  const transformedValue4 = 6.533*((9.81 * num8) ** (1 / 2)) * ((num19 - num1 * num2 - num10 * num11) / (num3 * num5)) ** (5 / 9) * (num8 / num6) ** (0.15) 
  document.getElementById("result-14").innerText = transformedValue4.toFixed(2);

  const transformedValue5 = 4.5154 * ((num19 - num1 * num2 - num10 * num11) / (num3 * num12 * (( num6 / num8 ) ** (1 / 2)) * (( num13 / num5 ) ** (-1.11))) ) ** (1 / 2); 
  document.getElementById("result-15").innerText = transformedValue5.toFixed(2);



  const transformedValue6 = ((60 * ((num20) - num16 - num17)) / (num3 * num4 * ulamek1 ** (2/3))) ** (25/52); 
  document.getElementById("result-16").innerText = transformedValue6.toFixed(2);

  const transformedValue7 = ((num20 - num16 - num17) / (0.005 * num3 * num4)) ** (1 / 2); 
  document.getElementById("result-17").innerText = transformedValue7.toFixed(2);

  const transformedValue8 = ((num20 - num16 - num17) / (0.01 * num3 * num4)) ** (1 / 2); 
  document.getElementById("result-18").innerText = transformedValue8.toFixed(2);

  const transformedValue9 = 13.066*((9.81 * num8) ** (1 / 2)) * ((num20 - num16 - num17) / (num3 * num5)) ** (5 / 9) * (num8 / num6) ** (0.15) 
  document.getElementById("result-19").innerText = transformedValue9.toFixed(2);

  const transformedValue10 = 6.3876 * ((num20 - num16 - num17) / (num3 * num12 * (( num6 / num8 ) ** (1 / 2)) * (( num13 / num5 ) ** (-1.11)))) ** (1 / 2); 
  document.getElementById("result-20").innerText = transformedValue10.toFixed(2);


  
  
  
  
  
  const resultSDH1V0 =  (num16 + num17) - (num3 * num4 / 60) * ulamek1 ** (2.0 / 3.0) * 0 ** (2.08);
  
  document.getElementById("result-25").innerText = resultSDH1V0;

}

  

function W(inputId, cellId, limitId) {
  let inputValue = document.getElementById(inputId).value;
  
  // Limitowanie do maksymalnie 4 cyfr
  if (inputValue.length > 4) {
      inputValue = inputValue.slice(0, 4);
      // Aktualizacja wartości inputa
      document.getElementById(inputId).value = inputValue; 
  }
  
  
  document.getElementById(cellId).textContent = inputValue;
  
  // Obliczanie współczynników ograniczenia
  let cb = parseFloat(document.getElementById('num4').value);
  let L = parseFloat(document.getElementById('num13').value);
  let T = parseFloat(document.getElementById('num6').value);
  let B = parseFloat(document.getElementById('num5').value);
  let b = parseFloat(document.getElementById('num7').value);
  let h = parseFloat(document.getElementById('num8').value);
  let hf = parseFloat(document.getElementById('num11').value);
  let Tmax = parseFloat(document.getElementById('num2').value);
  let k = parseFloat(document.getElementById('num10').value);
  let n = parseFloat(document.getElementById('num1').value);
  let m = parseFloat(document.getElementById('num3').value);
  let l = parseFloat(document.getElementById('num12').value);
  let t = parseFloat(document.getElementById('num14').value);

  let tL = (L !== 0) ? (parseFloat(T) / parseFloat(L)).toFixed(2) : '';
  let hT = (T !== 0) ? (parseFloat(h) / parseFloat(T)).toFixed(2) : '';
  let BTbh = (parseFloat(B) !== 0 && parseFloat(b) !== 0 && parseFloat(h) !== 0) ? ((parseFloat(B) * parseFloat(T)) / (parseFloat(b) * parseFloat(h))).toFixed(2) : '';

  // Aktualizacja wartości współczynników ograniczenia
  document.getElementById('limitTL').innerHTML = tL;
  document.getElementById('limitHT').textContent = hT;
  document.getElementById('limitBTbh').textContent = BTbh;

  document.getElementById('cellTmax').textContent = Tmax;
  document.getElementById('cellB').textContent = b;
  document.getElementById('cellHf').textContent = hf;
  document.getElementById('cellK').textContent = k;
  document.getElementById('cellN').textContent = n;
  document.getElementById('cellM').textContent = m;
  document.getElementById('cellL').textContent = l;
  document.getElementById('cellCb2').textContent = cb;

}

function updateTable(inputId, cellId) {
  const inputValue = document.getElementById(inputId).value;
  
  // Limiting input to maximum 4 characters
  if (inputValue.length > 6) {
      document.getElementById(inputId).value = inputValue.slice(0, 6);
  }
  
  // Update the corresponding cell
  document.getElementById(cellId).textContent = document.getElementById(inputId).value;
}



function updateRatios() {
  const L = parseFloat(document.getElementById('num13').value);
  const l = parseFloat(document.getElementById('num12').value);
  
  const B = parseFloat(document.getElementById('num5').value);
  const t = parseFloat(document.getElementById('num14').value);
  
  const b = parseFloat(document.getElementById('num7').value);
  const h = parseFloat(document.getElementById('num8').value);
  const T = parseFloat(document.getElementById('num6').value);
  
  const n = parseFloat(document.getElementById('num1').value);
  const Tmax = parseFloat(document.getElementById('num2').value);

  const Cb = parseFloat(document.getElementById('num4').value);

  const k = parseFloat(document.getElementById('num10').value);
  const hf = parseFloat(document.getElementById('num11').value);
  const m = parseFloat(document.getElementById('num3').value);
  const V = parseFloat(document.getElementById('num9').value);

  const lambdafl = parseFloat(document.getElementById('num15').value);
  const H = parseFloat(document.getElementById('num16').value);
  const OHCr = parseFloat(document.getElementById('num17').value);
  const CVC = parseFloat(document.getElementById('num18').value); // CVC
  const SDD = parseFloat(document.getElementById('num19').value); // SDD
  const SDH = parseFloat(document.getElementById('num20').value); // SDH

  document.getElementById('cellCVC').textContent = parseInt(CVC);
  //UPDATING TABLE VALUE
//metoda 2

document.getElementById('cellL2').textContent = parseInt(L);
document.getElementById('cellB2').textContent = parseInt(B);
document.getElementById('cellH2').textContent = parseInt(H);
document.getElementById('cellT2').textContent = parseInt(T);

document.getElementById('cellv2').textContent = parseInt(V);
document.getElementById('cellt2').textContent = parseInt(t);
document.getElementById('cellTmax2').textContent = parseInt(Tmax);
document.getElementById('cellCb4').textContent = Cb.toFixed(2);
document.getElementById('cellOHCs2').textContent = OHCr.toFixed(2);

document.getElementById('cellb2').textContent = parseInt(b);
document.getElementById('cellh2').textContent = parseInt(h);
document.getElementById('cellHf2').textContent = hf.toFixed(2);
document.getElementById('cellHfl2').textContent = lambdafl.toFixed(1);

document.getElementById('cellK2').textContent = k.toFixed(2);
document.getElementById('cellN2').textContent = n.toFixed(2);
document.getElementById('cellM2').textContent = m.toFixed(3);
document.getElementById('celll2').textContent = parseInt(l);
document.getElementById('cellCVC2').textContent = parseInt(CVC);

//metoda 3

document.getElementById('cellL3').textContent = parseInt(L);
document.getElementById('cellB3').textContent = parseInt(B);
document.getElementById('cellH3').textContent = parseInt(H);
document.getElementById('cellT3').textContent = parseInt(T);

document.getElementById('cellv3').textContent = parseInt(V);
document.getElementById('cellt3').textContent = parseInt(t);
document.getElementById('cellTmax3').textContent = parseInt(Tmax);
document.getElementById('cellCb5').textContent = Cb.toFixed(2);
document.getElementById('cellOHCs3').textContent = OHCr.toFixed(2);

document.getElementById('cellb3').textContent = parseInt(b);
document.getElementById('cellh3').textContent = parseInt(h);
document.getElementById('cellHf3').textContent = hf.toFixed(2);
document.getElementById('cellHfl3').textContent = lambdafl.toFixed(1);

document.getElementById('cellK3').textContent = k.toFixed(2);
document.getElementById('cellN3').textContent = n.toFixed(2);
document.getElementById('cellM3').textContent = m.toFixed(3);
document.getElementById('celll3').textContent = parseInt(l);

document.getElementById('cellCVC3').textContent = parseInt(CVC);

//metoda 4

document.getElementById('cellL4').textContent = parseInt(L);
document.getElementById('cellB4').textContent = parseInt(B);
document.getElementById('cellH4').textContent = parseInt(H);
document.getElementById('cellT4').textContent = parseInt(T);

document.getElementById('cellv4').textContent = parseInt(V);
document.getElementById('cellt4').textContent = parseInt(t);
document.getElementById('cellTmax4').textContent = parseInt(Tmax);
document.getElementById('cellCb6').textContent = Cb.toFixed(2);
document.getElementById('cellOHCs4').textContent = OHCr.toFixed(2);

document.getElementById('cellb4').textContent = parseInt(b);
document.getElementById('cellh4').textContent = parseInt(h);
document.getElementById('cellHf4').textContent = hf.toFixed(2);
document.getElementById('cellHfl4').textContent = lambdafl.toFixed(1);

document.getElementById('cellK4').textContent = k.toFixed(2);
document.getElementById('cellN4').textContent = n.toFixed(2);
document.getElementById('cellM4').textContent = m.toFixed(3);
document.getElementById('celll4').textContent = parseInt(l);

document.getElementById('cellCVC4').textContent = parseInt(CVC);

//metoda 5

document.getElementById('cellL5').textContent = parseInt(L);
document.getElementById('cellB5').textContent = parseInt(B);
document.getElementById('cellH5').textContent = parseInt(H);
document.getElementById('cellT5').textContent = parseInt(T);

document.getElementById('cellv5').textContent = parseInt(V);
document.getElementById('cellt5').textContent = parseInt(t);
document.getElementById('cellTmax5').textContent = parseInt(Tmax);
document.getElementById('cellCb7').textContent = Cb.toFixed(2);
document.getElementById('cellOHCs5').textContent = OHCr.toFixed(2);

document.getElementById('cellb5').textContent = parseInt(b);
document.getElementById('cellh5').textContent = parseInt(h);
document.getElementById('cellHf5').textContent = hf.toFixed(2);
document.getElementById('cellHfl5').textContent = lambdafl.toFixed(1);

document.getElementById('cellK5').textContent = k.toFixed(2);
document.getElementById('cellN5').textContent = n.toFixed(2);
document.getElementById('cellM5').textContent = m.toFixed(3);
document.getElementById('celll5').textContent = parseInt(l);

document.getElementById('cellCVC5').textContent = parseInt(CVC);

//metoda 6
document.getElementById('cellL6').textContent = parseInt(L);
document.getElementById('cellB6').textContent = parseInt(B);
document.getElementById('cellH6').textContent = parseInt(H);
document.getElementById('cellT6').textContent = parseInt(T);

document.getElementById('cellv6').textContent = parseInt(V);
document.getElementById('cellt6').textContent = parseInt(t);
document.getElementById('cellTmax6').textContent = parseInt(Tmax);
document.getElementById('cellCb8').textContent = Cb.toFixed(2);
document.getElementById('cellOHCs6').textContent = OHCr.toFixed(2);

document.getElementById('cellb6').textContent = parseInt(b);
document.getElementById('cellh6').textContent = parseInt(h);
document.getElementById('cellHf6').textContent = hf.toFixed(2);
document.getElementById('cellHfl6').textContent = lambdafl.toFixed(1);

document.getElementById('cellK6').textContent = k.toFixed(2);
document.getElementById('cellN6').textContent = n.toFixed(2);
document.getElementById('cellM6').textContent = m.toFixed(3);
document.getElementById('celll6').textContent = parseInt(l);

document.getElementById('cellCVC6').textContent = parseInt(CVC);



//update SDD & SDH
  document.getElementById("SDD").textContent = SDD;
  document.getElementById("SDD2").textContent = SDD;
  document.getElementById("SDD3").textContent = SDD;
  document.getElementById("SDD4").textContent = SDD;
  document.getElementById("SDD5").textContent = SDD;

  document.getElementById("SDH").textContent = SDH;
  document.getElementById("SDH2").textContent = SDH;
  document.getElementById("SDH3").textContent = SDH;
  document.getElementById("SDH4").textContent = SDH;
  document.getElementById("SDH5").textContent = SDH;
  
  // Update T/L
  const ratioTL = t / L;
  document.getElementById('cellTL').textContent = ratioTL.toFixed(2);
  // Update T/L 2
  document.getElementById('celltL2').textContent = ratioTL.toFixed(2);

  //update Cb
  document.getElementById('cellCb2').textContent = Cb.toFixed(2);
  document.getElementById('cellCb3').textContent = Cb.toFixed(2);

//update ohcr
document.getElementById('OHCR').textContent = OHCr.toFixed(2);
//update ADT
document.getElementById('ADT').textContent = H.toFixed(2);
  // Update h/T
  const ratioHT = h / T;
  document.getElementById('cellHT').textContent = ratioHT.toFixed(2);
  document.getElementById('hT2').textContent = ratioHT.toFixed(2);
  document.getElementById('hT3').textContent = ratioHT.toFixed(2);

//update vk
  const vk = 6.0883 * V ** (1/2);
  document.getElementById('vk').textContent = vk.toFixed(1);
  document.getElementById('vk2').textContent = vk.toFixed(1);
  document.getElementById('vk3').textContent = vk.toFixed(1);
  document.getElementById('vk4').textContent = vk.toFixed(1);
  document.getElementById('vk5').textContent = vk.toFixed(1);


  //update h/t2
  document.getElementById('cellhT2').textContent = ratioHT.toFixed(2);
  // Update (B * T) / (b * h)
  const ratioBTbh = (B * T) / (b * h);
  document.getElementById('cellBTbh').textContent = ratioBTbh.toFixed(2);
  document.getElementById('BTbh2').textContent = ratioBTbh.toFixed(2);

  const nxTmax = n * Tmax;
  document.getElementById('nxTmax').textContent = nxTmax.toFixed(2);
  document.getElementById('nxTmax2').textContent = nxTmax.toFixed(2);
  document.getElementById('nxTmax3').textContent = nxTmax.toFixed(2);
  document.getElementById('nxTmax4').textContent = nxTmax.toFixed(2);
  document.getElementById('nxTmax5').textContent = nxTmax.toFixed(2);
  

  
  //update khf
  const khf = k * hf;
  document.getElementById('khf').textContent = khf.toFixed(2);
  document.getElementById('khf2').textContent = khf.toFixed(2);
  document.getElementById('khf3').textContent = khf.toFixed(2);
  document.getElementById('khf4').textContent = khf.toFixed(2);
  document.getElementById('khf5').textContent = khf.toFixed(2);
  

  const LB = L / B;
  document.getElementById('LB').textContent = LB.toFixed(2);

  //Współczynniki osiadania
  //metoda 1
  const wOsi = ( m * Cb / 30 ) * (((B * T) / (b * h - B * T))**(2 / 3)) * (V)**(2.08)
  document.getElementById('wOsi').textContent = wOsi.toFixed(6);

  const wOsi2 =  m * Cb  * ((B * T) / (b * h - B * T))
  document.getElementById('wOsi2').textContent = wOsi2.toFixed(6);
  document.getElementById('wOsi4').textContent = wOsi2.toFixed(6);

  const wOsi3 = ( m * Cb / 60 ) * (((B * T) / (b * h - B * T))**(2 / 3)) * (V)**(2.08)
  document.getElementById('wOsi3').textContent = wOsi3.toFixed(6);

  const wOsi5 = m * (0.01 * Cb * (V)**(2))
  document.getElementById('wOsi5').textContent = wOsi5.toFixed(6);

  const wOsi6 = m * 0.005 * Cb * (V)**(2);
  document.getElementById('wOsi6').textContent = wOsi6.toFixed(6);

  const wOsi7 = m * 0.005 * Cb;
  document.getElementById('wOsi7').textContent = wOsi7.toFixed(6);
  
  const wOsi8 = m * 0.01 * Cb;
  document.getElementById('wOsi8').textContent = wOsi8.toFixed(6);

  //metoda 3
  const wOsi9 = m * (0.02 * Cb * (V)**(2))
  document.getElementById('wOsi9').textContent = wOsi9.toFixed(6);

  const wOsi10 = 0.02 * Cb * m;
  document.getElementById('wOsi10').textContent = wOsi10.toFixed(6);

  const wOsi11 = 0.01 * Cb * m * (V)**(2) ;
  document.getElementById('wOsi11').textContent = wOsi11.toFixed(6);

  const wOsi12 = 0.01 * Cb * m;
  document.getElementById('wOsi12').textContent = wOsi12.toFixed(6);

  const wOsi13 = m * (0.113 * B * Math.pow(h / T, -0.27) * Math.pow(0.514 * V / Math.sqrt(9.81 * h), 1.8))
  document.getElementById('wOsi13').textContent = wOsi13.toFixed(6);

  const wOsi14 = (m / 2) * (0.113 * B * Math.pow(h / T, -0.27) * Math.pow(0.514 * V / Math.sqrt(9.81 * h), 1.8))
  document.getElementById('wOsi14').textContent = wOsi14.toFixed(6);
  
  const wOsi15 = m * l * 0.049047542 * Math.pow(V, 2) * Math.sqrt(T / h) * Math.pow(L / B, -1.11)
  document.getElementById('wOsi15').textContent = wOsi15.toFixed(6);

  const wOsi16 = (m/2) * l * 0.049047542 * Math.pow(V, 2) * Math.sqrt(T / h) * Math.pow(L / B, -1.11)
  document.getElementById('wOsi16').textContent = wOsi16.toFixed(6);
}




function calculateResults() {
  try {
      // Pobieranie i weryfikacja wartości z pól input
      const getValue = (id) => {
          const element = document.getElementById(id);
          if (!element) {
              console.error(`Element o id "${id}" nie został znaleziony.`);
              return 0; // Wartość domyślna, jeśli element nie istnieje
          }
          const value = parseFloat(element.value);
          if (isNaN(value)) {
              console.warn(`Wartość w polu "${id}" nie jest liczbą. Używam wartości 0.`);
              return 0; // Wartość domyślna, jeśli pole jest puste lub niepoprawne
          }
          return value;
      };

      // Pobieranie danych
      const T1 = getValue('T1');
      const gamma1 = getValue('gamma1');
      const gamma2 = getValue('gamma2');
      const delta = getValue('delta'); // Używane w oryginalnym kodzie, ale nie w tej formule
      const alpha = getValue('alpha'); // Używane w oryginalnym kodzie, ale nie w tej formule
      const D = getValue('D');
      const TPC = getValue('TPC');

      // Sprawdzenie, czy wartości kluczowe są poprawne
      if (gamma2 === 0 || TPC === 0) {
          console.error("Nie można podzielić przez zero! Sprawdź wartości γ₂ i TPC.");
          return;
      }

      // Obliczanie ΔT₃
      const deltaT3 = (1 / 100) * ((gamma1 - gamma2) / gamma2) * (D / TPC);
      const deltaT3Rounded = deltaT3.toFixed(4);
      const deltaT = (T1 * ((gamma1 - gamma2) / gamma2) * (delta / alpha));
      const deltaTRounded = deltaT.toFixed(4);
      

      // Obliczanie głębokości
      const depthGamma1 = T1.toFixed(2); // Głębokość w γ₁
      const depthGamma2 = (T1 + deltaT3).toFixed(4); // Głębokość w γ₂
      const depthGamma5 = (T1 + deltaT).toFixed(4); // Głębokość w γ₂

      // Wyświetlanie wyników
      const updateResult = (id, value) => {
          const element = document.getElementById(id);
          if (!element) {
              console.error(`Element o id "${id}" nie został znaleziony.`);
              return;
          }
          element.innerText = value;
      };

      updateResult('deltaT3', deltaT3Rounded);
      updateResult('deltaT33', deltaTRounded);
      updateResult('depthGamma1', depthGamma1);
      updateResult('depthGamma3', depthGamma1);
      updateResult('depthGamma2', depthGamma2);
      updateResult('depthGamma5', depthGamma5);
      

      console.log("Obliczenia zakończone sukcesem:", {
          deltaT3: deltaT3Rounded,
          depthGamma1,
          depthGamma2,
      });
  } catch (error) {
      console.error("Wystąpił błąd podczas obliczeń:", error);
  }
}
// Inicjalizacja wyników przy starcie
calculateResults();
