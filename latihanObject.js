// latihan object angkot

function Angkot(sopir, trayek, penumpang, kas) { // nama function menggunakan huruf besar

    // var this = [];
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas =kas;
    // return this = [];

    // mengelola penumpang naik
    this.penumpangNaik = function(namapenumpang) {
        this.penumpang.push(namapenumpang);
        return this.penumpang;
    }
    
    // mengelola penumpang turun
    this.penumpangTurun = function(namaPenumpang, bayar) {

        if( this.penumpang.length === 0 ) {
            alert('Belum ada penumpang');
            return false; // agar keluar dari functionnya
        }

        // cek jumlah penumpang 
        for( var i = 0; i < this.penumpang.length; i++) {
            if( this.penumpang[i] == namaPenumpang ) {

                this.penumpang[i] = undefined;
                this.kas += bayar; 
                return this.penumpang;

            } else if( i == this.penumpang.length - 1 ) {

                // tampilkan pesan kesalahan
                console.log( namaPenumpang + ' tidak ada di dalam angkot.' );
               
            }
            
        }

    }
}

var angkot1 = new Angkot('Pian',['Randangan', 'Taluditi'],[],0); // keyword new untuk object contraktor

var angkot2 = new Angkot('Ibnu',['Manado', 'Palu'],[],0);