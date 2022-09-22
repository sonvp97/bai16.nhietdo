function Temperature(C){
    this.doC=C;
    this.getdoF=function (){
        return C*1.8+32;
    }
    this.getdoK=function (){
        return C+273.15;
    }
}
let Tem = new Temperature(25);
let F = Tem.getdoF();
let K = Tem.getdoK();
document.write('Nhiệt độ F = '+F+'<br>'+'Nhiệt độ K là: '+K);