function Calculate(post){
    
    var count_impuls = 5
    var impuls = document.getElementById('impuls')
    if (impuls.value.length > 0)
        count_impuls = impuls.value

    var A = document.getElementById('A')
    var B = document.getElementById('B')
    var C = document.getElementById('C')
    var ABC = Number(A.value) + Number(B.value) + Number(C.value)

    var kVa = 0.22 * ABC
    var kVt = kVa * 0.9
    var t = 3600 * count_impuls / post / kVt

    kVa = kVa.toFixed(2)
    kVt = kVt.toFixed(2)
    t = t.toFixed(2)


    document.getElementById('kVa').innerHTML = "кВа = " + kVa
    document.getElementById('kVt').innerHTML = "кВт = " + kVt
    document.getElementById('t').innerHTML = "Время = " + t
}