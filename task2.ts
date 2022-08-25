//interface
interface poorvika {
    brandname: string;
    modelnumber: string;
    modelname: string;
    cost: string;
}
//class1-phone
class phone implements poorvika{
    brandname: string;
    modelnumber: string;
    modelname: string;
    cost: string; 
    constructor(brandname:string, modelname: string, modelnumber:string, cost:string){
        this.brandname = brandname,
        this.modelname = modelname,
        this.modelnumber = modelnumber,
        this.cost = cost
    }
    brand: string = "Mobile Phones";
}
//class2-earphone
class earphone implements poorvika{
    brandname: string;
    modelnumber: string;
    modelname: string;
    cost: string;
    constructor(brandname:string, modelname: string, modelnumber:string, cost:string){
        this.brandname = brandname,
        this.modelname = modelname,
        this.modelnumber = modelnumber,
        this.cost = cost
    }
    brand: string = "Ear Phones";
}
//variable-phone
var phone1 = new phone("Apple","i phone-14","#0001", "$49000")
var phone2 = new phone("Samsung","note 20 ultra","#0005", "$36000")
var phone3 = new phone("One Plus","10 RT","#0007", "$32000")
//variable-earphone
var earphone1 = new earphone("One plus","Buds Z", "#0002","$3000")
var earphone2 = new earphone("Realme","Sonic Bass", "#0004","$2800")
var earphone3 = new earphone("Boat","Flipzone ","#0006","$1700")
//add
phone1.imei ="1325326hjghgg"
//delete
delete phone1['modelname'];
delete phone2['modelname'];
delete phone3['modelname'];
//console
console.log("--------------------------");
console.log("-----POORVIKA MOBILES-----");
console.log("--------------------------");
console.log("MOBILE PHONES");
console.log("--------------------------");
console.log(phone1,phone2,phone3);
console.log("--------------------------");
console.log("EARPHONES");
console.log("--------------------------");
console.log(earphone1,earphone2,earphone3);
console.log("ADDITION OF ITEMS");
console.log(phone1);
console.log("REMOVAL  OF ITEMS");
console.log(phone1,phone2,phone3);


