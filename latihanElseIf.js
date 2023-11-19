
var jmlAngkot = 10;
var angkot = 1

console.log('================== Cara 1 ==================');

for(angkot; angkot <= jmlAngkot; angkot++) {

    if(angkot <= 6) {
        console.log('Angkot No. ' + angkot + ' Beroprasi Dengan Baik');
    } else if(angkot === 8) {
        console.log('Angkot No. ' + angkot + ' Sedang Lembur');
    } else if(angkot === 10) {
        console.log('Angkot No. ' + angkot + ' Sedang Lembur');
    } else {
        console.log('Angkot No. ' + angkot + ' Sedang Tidak Beroprasi');
    }
    
}

console.log('');

var jmlAngkot = 10;
var angkot = 1

console.log('================== Cara 2 ==================');

for(angkot; angkot <= jmlAngkot; angkot++) {

    if(angkot <= 6) {
        console.log('Angkot No. ' + angkot + ' Beroprasi Dengan Baik');
    } else if(angkot === 8 || angkot === 10) { // tanda || simbol or
        console.log('Angkot No. ' + angkot + ' Sedang Lembur');
    }  else {
        console.log('Angkot No. ' + angkot + ' Sedang Tidak Beroprasi');
    }
    
}

console.log('');

var jmlAngkot = 10;
var angkot = 1

console.log('================== Latihan Tambahan ==================');

for(angkot; angkot <= jmlAngkot; angkot++) {

    if(angkot <= 4 || angkot === 6) {
        console.log('Angkot No. ' + angkot + ' Beroprasi Dengan Baik');
    } else if(angkot === 5 || angkot === 8 || angkot === 10) {
        console.log('Angkot No. ' + angkot + ' Sedang Lembur');
    }  else {
        console.log('Angkot No. ' + angkot + ' Sedang Tidak Beroprasi');
    }
    
}

console.log('');

var jmlAngkot = 10;
var angkot = 1

console.log('================== Cara 2 Latihan Tambahan ==================');

for(angkot; angkot <= jmlAngkot; angkot++) {

    if(angkot <= 6 && angkot !== 5) { // tanda && simbol and - tanda !== simbol tidak sama dengan
        console.log('Angkot No. ' + angkot + ' Beroprasi Dengan Baik');
    } else if(angkot === 5 || angkot === 8 || angkot === 10) {
        console.log('Angkot No. ' + angkot + ' Sedang Lembur');
    }  else {
        console.log('Angkot No. ' + angkot + ' Sedang Tidak Beroprasi');
    }
    
}