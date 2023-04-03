convertSayi(6);

function convertSayi(sayi){
    let binary = '';
    while(true){
        binary+=(sayi%2).toString();
        sayi=Math.floor(sayi/2);
        if(sayi==1){
            binary+=1;
            break;
        }
    }
    let sonuc = reverse(binary);
    console.log('Sonuc: '+sonuc);
}

function reverse(binary){
    let reverseBinary='';
    for(let i=binary.length-1; i>=0; i--){
        reverseBinary+=binary.charAt(i);
    }
    return reverseBinary;
}