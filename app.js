async function traerdivisas() {
    const resultado = await fetch("https://co.dolarapi.com/v1/cotizaciones");
    if (!resultado.ok) {
    throw new Error("Esto no funciona");
    }
    const divisa = await resultado.json();
    return divisa;
}

// ==== INICIADOR ====
async function iniciador() {
    const lasDivisas = await traerdivisas();
    mostrarDivisas(lasDivisas);
    console.log(lasDivisas);
}

function mostrarDivisas(lasDivisas) {
  //****MOSTRAR PRODUCTOS****

    /*let divisasUnicas = new Set()
    for (const item of lasDivisas) {
        divisasUnicas.add(item.moneda)
    }*/
    let lista = document.getElementById("lista")
    let conversion = document.getElementById("conversion")

    lista.innerHTML = lasDivisas.map(d => `<option value="${d.moneda}">${d.nombre}</option>`).join("")
    conversion.innerHTML = lasDivisas.map(d => `<option value="${d.moneda}">${d.nombre}</option>`).join("")

    /*for (const d of lasDivisas) { 
        let lista = document.getElementById("lista");
        lista.innerHTML += `<option>${d.code}</option>`
    }*/
}
let valor = document.getElementById("valor")

valor.addEventListener("keyup", ()=> {
    // Tomar el valor del select conversion, y lo con 
    valor.value
})
function calcularConversion(conversion){
    


}


iniciador();
