class myClass {
  constructor(a,b) {
    this.a = a;
    this.b = b;
  }
}

const player = new myClass("latif",20);
console.log(player.a);

class myProperty {
  constructor(x,y) {
    this.y = y;
    this.x = x;
  }
  get gett() { //property
    return this.tambah();
  }
  tambah() { //callArea
    return this.x + this.y;
  }
}

const data = new myProperty(2,2);
console.log(data.gett); //call the property

//class distance
class myStatic {
  constructor(x,y){
    this.x = x;
    this.y = y;
  }
  static info(nama,kelas) {
    return 'nama saya: '+nama+', kelas: '+kelas;
  }
}

const ingfo = new myStatic("Latif Harkat","RPL.1");
console.log(myStatic.info("latif","RPL")); //panggil distance harus langsung dari class.

class hewan {
  constructor(nama) {
    this.nama = nama;
  }
  panggil() {
    return "hewan: "+this.nama;
  }
}
class anjing extends hewan {
  panggil () {
    return this.nama;
  }
}
const ajg = new anjing("anjing");
console.log(ajg.panggil()); //output:salah