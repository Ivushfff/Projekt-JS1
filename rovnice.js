function pocitej() {
    let t1 = document.getElementById("t1").value;
    let t2 = document.getElementById("t2").value;
    let t = document.getElementById("t").value;
    let m2 = document.getElementById("m2").value;
    let c = document.getElementById("c").value;

    let sVysledek = (m2*c*(t2-t))/(c*(t-t1))
    console.log(sVysledek)

    let uVysledek = document.getElementById("uVysledek").value;
    if (uVysledek == sVysledek) {
        document.getElementById("hodnoceni").innerText = "SPRÁVNĚ!";
    } else {
        document.getElementById("hodnoceni").innerText = "ŠPATNĚ!";
    }

    document.getElementById("vysledek").innerText = sVysledek
}