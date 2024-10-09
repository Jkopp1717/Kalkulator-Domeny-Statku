

MathJax.Hub.Config({
    tex2jax: {
        inlineMath: [['$', '$'], ['\\(', '\\)']],
        displayMath: [['$$', '$$']],
        processEscapes: true
    }
});
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

    
    var ulamek1 = (parseFloat(num5) * parseFloat(num6)) /
    ((parseFloat(num7) * parseFloat(num8)) - (parseFloat(num5) * parseFloat(num6)))
    // Variable to store the calculated result
    
    
    var selectedFormula = document.getElementById("formulaSelect").value;

    
    var result;
  
    
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
  
    // Get input values (assuming all input IDs are known)
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

    
    if (selectedDescription === "none") {
        descriptionInfoElement.innerHTML = `<h3>${descriptionInfo.none.title}</h3><p>${descriptionInfo.none.content}</p>`;
    } else {
        descriptionInfoElement.innerHTML = `<h3>${descriptionInfo[selectedDescription].title}</h3><p>${descriptionInfo[selectedDescription].content}</p>`;
    }
}


function calculateAll(){
    // Array to store calculated results
  
  
    // Get input values (assuming all input IDs are known)
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
  

var ulamek1 = (parseFloat(num5) * parseFloat(num6)) /
((parseFloat(num7) * parseFloat(num8)) - (parseFloat(num5) * parseFloat(num6)))
var ulamek2 = (0.113 * num5 * (num8 / num6)) ** -(27 / 100)  
let term1 = num1 * num2;
let term2 = num3 * (0.113 * num5 * Math.pow(num8 / num6, -0.27) * Math.pow(0.514 * num9 / Math.sqrt(9.81 * num8), 1.8));
let term3 = num10 * num11 
let term4 = num3 * num12 * 0.049047542 * Math.pow(num9, 2) * Math.sqrt(num6 / num8) * Math.pow(num13 / num5, -1.11);

  var results = [1,
    ((parseFloat(num1) * parseFloat(num2)) +
    (parseFloat(num3) * parseFloat(num4) / 30) * ulamek1 ** (2.0 / 3.0) * num9 ** (2.08) + num10 * num11), 
    (num1 * num2 + num3 * (0.01 * num4 * num9 ** (2)) + num10 * num11),
    (num1 * num2 + num3 * (0.02 * num4 * num9 ** (2)) + num10 * num11),
    (term1 + term2 + term3),
    (term1 + term4 + term3),
    (num5*num6 / num7)
  ];
      
  
  for (let i = 1; i < 7; i++)
      document.getElementById(`resultContainer-${i}`).innerHTML = `<p>Wynik: ${results[i].toFixed(2)}`
  
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
}


function updateTable(inputId, cellId) {
  const inputValue = document.getElementById(inputId).value;
  
  // Limiting input to maximum 4 characters
  if (inputValue.length > 6) {
      document.getElementById(inputId).value = inputValue.slice(0, 6);
  }
  
 
  document.getElementById(cellId).textContent = document.getElementById(inputId).value;
}

function updateRatios() {
  const L = parseFloat(document.getElementById('num13').value);
  const B = parseFloat(document.getElementById('num5').value);
  const t = parseFloat(document.getElementById('num14').value);
  const b = parseFloat(document.getElementById('num7').value);
  const h = parseFloat(document.getElementById('num8').value);
  const T = parseFloat(document.getElementById('num6').value);
  // Update T/L
  const ratioTL = t / L;
  document.getElementById('cellTL').textContent = ratioTL.toFixed(2);

  // Update h/T
  const ratioHT = h / T;
  document.getElementById('cellHT').textContent = ratioHT.toFixed(2);

  // Update (B * T) / (b * h)
  const ratioBTbh = (B * T) / (b * h);
  document.getElementById('cellBTbh').textContent = ratioBTbh.toFixed(2);
}
