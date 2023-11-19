// syntax switch

// switch(ekspresi) {
//     case "nilai 1":
//         aksi 1
//     [break;] ---> (keyword break opsional)
//     case "nilai 2":
//         aksi 2
//     [break;]
//     case "nilai n"
//     [break;]
//     default:
//         aksi default
//     [break]
// }

// contoh
// var angka = prompt('masukan angka :');

// switch( angka ) {
//     case '1' :
//         alert('anda memasukkan angka 1');
//         break;
//     case '2' :
//         alert('anda memasukkan angka 2');
//         break;
//     case '3' :
//         alert('anda memasukkan angka 3');
//         break;
//     default :
//         alert('anda memasukkan angka yang salah');
//         break;
// }


// contoh 2
// var item = prompt('masukkan nama makanan / minuman : \n (contoh : nasi, susu, daging, panter, snack)');

// switch( item ) {
//     case 'nasi' :
//         alert('SEHAT');
//     break;
//     case 'susu' :
//         alert('SEHAT');
//         break;
//     case 'daging' :
//         alert('SEHAT');
//         break;
//     case 'panter' :
//         alert('TIDAK SEHAT');
//         break;
//     case 'snack' :
//         alert('TIDAK SEHAT');
//         break;
//     default :
//         alert('yang anda masukkan salah');
//         break;

// }


// contoh 3
var item = prompt('masukkan nama makanan / minuman : \n (contoh : nasi, susu, daging, panter, snack)');

switch( item ) {
    case 'nasi' :
    case 'susu' :
    case 'daging' :
        alert('SEHAT');
        break;
    case 'panter' :
    case 'snack' :
        alert('TIDAK SEHAT');
        break;
    default :
        alert('yang anda masukkan salah');
        break;

}