var jmlAngkot = 10;
var angkotBeroprasi = 8;
var angkot = 1;

while(angkot <=angkotBeroprasi) {
    console.log('Angkot No. ' + angkot + ' beroprasi dengan baik');
angkot++;
}

for(angkot = angkotBeroprasi + 1; angkot <= jmlAngkot; angkot++) {
    console.log('Angkot No. ' + angkot + ' sedang tidak beroprasi');
}