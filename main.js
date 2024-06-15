function Calculate(post){
    
    var A = document.getElementById('A')
    var B = document.getElementById('B')
    var C = document.getElementById('C')
    var ABC = Number(A.value) + Number(B.value) + Number(C.value)

    var kVa = 0.22 * ABC
    var kVt = kVa * 0.9
    var t = 3600 * 5 / post / kVt

    kVa = kVa.toFixed(2)
    kVt = kVt.toFixed(2)
    t = t.toFixed(2)


    document.getElementById('kVa').innerHTML = "kVa = " + kVa
    document.getElementById('kVt').innerHTML = "kVt = " + kVt
    document.getElementById('t').innerHTML = "time = " + t
}