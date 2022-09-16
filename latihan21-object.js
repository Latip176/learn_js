let latip = {
  nama:"Latif",
  berat: 50,
  tinggi: 175,
  tambahBerat() {
    this.berat += 1;
  }
}
latip.tambahBerat(); // tambah berat += 1
latip.tambahBerat(); // tambah berat += 1
console.log(latip.berat);

//object assign() mengganti data dengan nama key yang sama.
let siswa1 = {
  nama: 'Latif Harkat',
  kelas: 'XI. RPL 1',
  jancok:"hatyu"
};
let siswa2 = {
  nama: 'Sahril Asyahra',
  kelas: 'XI. RPL 2',
  bapa:"hayuu"
};
let assign = Object.assign({}, siswa1, siswa2);
console.log(assign);