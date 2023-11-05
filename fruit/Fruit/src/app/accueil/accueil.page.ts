import { Component, OnInit } from '@angular/core';
import { Fruit } from './fruit';
import { Router } from '@angular/router';
import { Categories } from './cathegory';
// import { Action } from 'rxjs/internal/scheduler/Action';
// import { ifError } from 'assert';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  // fruits[];
  // constructor(id:string,nom:string,description:string,prix_achat:number,prix_vente:number,cathegory:string,stock:number,image:string){


  frui1: Fruit = new Fruit('1', 'pomme', 'La pomme est un fruit à pépins du genre Malus, famille des Rosacées. Il est originaire d Asie centrale et a été cultivé depuis des milliers d années. Il existe aujourd hui plus de 7 500 variétés de pommes différentes, chacune avec sa propre forme, taille, couleur et saveur uniques. ', 100, 125, 'fruit a pepins', 200, 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/220px-Red_Apple.jpg');
frui2: Fruit = new Fruit('2', 'banane', 'La banane est un fruit tropical originaire d Asie du Sud-Est. Elle est de forme oblongue et a une peau jaune, verte ou rouge. La chair de la banane est jaune et a un goût sucré.', 140, 220, 'baie', 400, 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/220px-Banana-Single.jpg');
frui4: Fruit = new Fruit('9', 'fruit-passion', 'Le fruit-passion, également connu sous le nom de grenadille, est un fruit tropical originaire d Amérique centrale et du Sud. Il est de forme ovale ou ronde et a une peau violette, rouge ou jaune. La chair du fruit-passion est orange ou jaune et a un goût sucré et acidulé.', 50, 100, 'baie', 300, 'https://media.istockphoto.com/id/1207288873/fr/photo/ensemble-de-fruits-de-la-passion-entiers-et-demi.jpg?s=1024x1024&w=is&k=20&c=8nQR8vR1RMWV7Zo3S8nQyKbgQHqMm6r2P5yVEhkIIqg=');
frui3: Fruit = new Fruit('3', 'orange', 'L orange est un fruit de la famille des Rutacées, qui comprend également le citron, le pamplemousse et la mandarine. L orange est originaire de Chine, mais elle est aujourd hui cultivée dans de nombreuses régions tropicales et subtropicales du monde.', 50, 100, 'baie', 300, 'https://media.istockphoto.com/id/155302141/fr/photo/nourriture-saine-arri%C3%A8re-plan-orange.jpg?s=1024x1024&w=is&k=20&c=GvSTbXImGkOSHDaHljQMF6YHLwnAdIati-H0eS_lRJM=');
frui5: Fruit = new Fruit('4', 'carotte', 'La carotte est une racine comestible de la famille des Apiacées. Elle est cultivée dans le monde entier et est l un des légumes les plus populaires', 30, 75, 'légume-racine', 300, 'https://tse1.mm.bing.net/th?id=OIP.a1jvHXnx5bG8dxAjPqGj9gHaF7&pid=Api&rs=1&c=1&qlt=95&w=130&h=103');
frui6: Fruit = new Fruit('5', 'brocoli', 'Le brocoli est un légume crucifère, de la même famille que le chou, le chou-fleur et le navet. Il est originaire d Italie et est cultivé dans le monde entier.', 123, 200, 'légume', 300, 'https://media.istockphoto.com/id/147060621/fr/photo/brocoli.jpg?s=1024x1024&w=is&k=20&c=hnxj8DD3Yu_m0TYq-_iUmMq9MZ2y9ki2qwl5BYDPbZM=');
frui7: Fruit = new Fruit('6', 'tomate', 'La tomate est un fruit charnu et juteux, produit par une plante herbacée du genre Solanum. Les tomates sont originaires des Andes, en Amérique du Sud, et elles sont cultivées et consommées dans le monde entier.', 15, 25, 'baie', 300, 'https://img.freepik.com/photos-gratuite/tomates_144627-15413.jpg?w=740&t=st=1696074949~exp=1696075549~hmac=6946a6c999dbd82c7a19f31f4dfeda849ba5c0cab8f0302851f333e1ffe88e5f');
frui8: Fruit = new Fruit('7', 'pitaya', 'La pitaya, également connue sous le nom de fruit du dragon, est un fruit tropical originaire d Amérique centrale et du Sud. Il est de forme ovale ou ronde et a une peau rouge, rose ou jaune écailleuse. La chair du pitaya est blanche, rouge ou jaune et a un goût sucré et légèrement acidulé.', 100, 140, 'baie', 300, 'https://media.istockphoto.com/id/503045095/fr/photo/blanc-fruit-du-dragon.jpg?s=1024x1024&w=is&k=20&c=2bKS9GRaCPt1Z8ICeJq__vNB7corJb26F2Bo3HQZ2tQ=');
frui9: Fruit = new Fruit('8', 'Mangoustan', 'Le mangoustan est un fruit tropical originaire d Asie du Sud-Est. Il est de forme ronde ou ovale et a une peau violette ou rouge foncé. La chair du mangoustan est blanche, translucide et juteuse, et elle a un noyau central.', 300, 400, 'baie', 300, 'https://media.istockphoto.com/id/465572969/fr/photo/mangoustan.jpg?s=1024x1024&w=is&k=20&c=za3qlOj_4IOlqD9ZvtoPlHXhq6V2mRO41yliZUhFq3E=');
frui10: Fruit = new Fruit('10', 'Rambutan', 'Le rambutan est un fruit tropical originaire d Asie du Sud-Est. Il est de forme ronde ou ovale et a une peau rouge et verte recouverte de poils souples. La chair du rambutan est blanche, translucide et juteuse, et elle a un noyau central.', 15, 25, 'baie', 300, 'https://media.istockphoto.com/id/484449084/photo/fresh-rambutan-sweet-delicious-fruit-of-thailand.webp?s=1024x1024&w=is&k=20&c=Rz28nV9txt6Ol8MmjByhXfg0XbWMuZTwDtB0AuVoRCQ=');
frui11: Fruit = new Fruit('11', 'fraise', 'La fraise est un fruit rouge, charnu et juteux, produit par une plante herbacée du genre Fragaria. Les fraises sont originaires d Europe et d Asie, et elles sont cultivées et consommées dans le monde entier.', 15, 50, 'baie', 300, 'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Fraise-700x700.png');
frui12: Fruit = new Fruit('12', 'framboise', 'La framboise est un petit fruit rouge, charnu et juteux, produit par un arbuste du genre Rubus. Les framboises sont originaires d Europe et d Asie, et elles sont cultivées et consommées dans le monde entier.', 140, 200, 'baie', 300, 'https://tse1.mm.bing.net/th?id=OIP.-6Sb5LF7zx-IGWIwyeXUGQHaFj&pid=Api&rs=1&c=1&qlt=95&w=165&h=124')
  frui13: Fruit= new Fruit('13',"myrtille",'La myrtille est une baie comestible de couleur bleue ou noire, produite par plusieurs espèces de petits arbustes du genre Vaccinium. Les myrtilles sont originaires des régions tempérées et froides de l hémisphère nord, et elles sont cultivées et consommées dans le monde entier.',311,500, "baie",300,'https://media.istockphoto.com/id/853493518/fr/photo/myrtille-isol%C3%A9-sur-fond-blanc.jpg?s=1024x1024&w=is&k=20&c=o4StS7Gck9fVkr-j81DH9olUV2knyhXLnMWmi3H0V5g=');
  frui14: Fruit=new Fruit('14',"raisin",'Le raisin est un fruit à baie de la vigne (Vitis vinifera). Il est de forme ovale et a une peau mince et translucide. La chair du raisin est juteuse et sucrée, et sa couleur varie du vert au noir, en passant par le rouge, le jaune et le rose.',49,240, "fruit a pepins",300,'https://i.enfant.com/1400x787/smart/2021/08/28/raisin.jpeg');
  frui15: Fruit=new Fruit('15',"ananas",'L ananas est un fruit tropical originaire d Amérique du Sud. Il est de forme conique et a une peau verte, jaune ou orange. La chair de l ananas est jaune, juteuse et sucrée.',120,300, "fruit a pepins",300,'https://media.istockphoto.com/id/172388455/fr/photo/ananas-papier-peint-2.jpg?s=612x612&w=is&k=20&c=jmeokaKslt3oYWv5Hz7K322R-dU5qD6OrP8D5TCFuvE=');
  frui16: Fruit =new Fruit('16',"goyave",'La goyave est un fruit tropical originaire d Amérique centrale et d Amérique du Sud. Elle est de forme ronde ou ovale et a une peau verte, jaune ou rouge. La chair de la goyave est blanche, rose ou rouge, et a une texture juteuse et sucrée.',100,225,"baie",300,'https://media.istockphoto.com/id/1210635439/fr/photo/goyaves-coup%C3%A9es-isol%C3%A9es.jpg?s=612x612&w=is&k=20&c=rhTVv86udkj72j_H7fypGWxOubJoH6eaN-ChgfKX5gE=');
  frui17: Fruit =new Fruit('17',"kiwi",' Les baies sont des fruits charnus qui se développent à partir de l ovaire d une fleur et qui contiennent plusieurs graines. Le kiwi est un fruit charnu qui se développe à partir de l ovaire d une fleur et qui contient plusieurs graines noires.',400,800, "baie",300,'https://media.istockphoto.com/id/946905378/fr/photo/tranches-de-kiwi-comme-arri%C3%A8re-plan-textur%C3%A9.jpg?s=1024x1024&w=is&k=20&c=tPjZeEq_aUn3B93BcAYEJg2KLSkYfM3HuyP5hicebgA=');
  frui18: Fruit =new Fruit('18',"avocat",'L avocat est classé comme un fruit à noyau au sens botanique. Les fruits à noyau sont des fruits charnus qui se développent à partir de l ovaire d une fleur et qui contiennent un ou plusieurs noyaux. L avocat est un fruit charnu qui se développe à partir de l ovaire d une fleur et qui contient un noyau.',250,500, "fruit a noyau",300,'https://www.aprifel.com/wp-content/uploads/2019/02/fond-avocat.jpg');
  frui19: Fruit =new Fruit('19',"litchi",'Le litchi est un fruit.D un point de vue botanique, un fruit est un organe végétal qui se développe à partir de l ovaire d une fleur et contient des graines. Le litchi est un fruit charnu qui se développe à partir de l ovaire d une fleur et contient une graine.',350,500, "baie",300,'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/10/Fiche-aliment-Images-10-700x700.png');
  frui20: Fruit =new Fruit('20',"Cassis",'Les cassis sont originaires d Europe centrale et orientale, et sont aujourd hui cultivés dans de nombreuses régions du monde, notamment en France, en Pologne, au Royaume-Uni et en Russie. Les cassis sont une bonne source de vitamine C, de potassium et de fibres. Ils sont également riches en antioxydants, qui peuvent aider à protéger les cellules contre les dommages causés par les radicaux libres.',50,100, "baie",300,'https://www.conservation-nature.fr/wp-content/uploads/visuel/fruit/shutterstock_709559497-768x696.jpg');
  frui21: Fruit =new Fruit('21',"Cerise",'Ceris est une baie originaire d Asie centrale et occidentale. Elle est de couleur rouge vif et a un goût sucré et acidulé. Les cerises sont une bonne source de vitamine C, de potassium et ',50,100, "baie",300,'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/10/cerises-scaled-e1647012719735-700x700.jpg');
  frui22: Fruit =new Fruit('22',"Fraise des bois",'La fraise des bois, ou Fragaria vesca, est un fruit à baies originaire d Europe, d Asie et d Amérique du Nord. Elle est de petite taille, de couleur rouge vif et a un goût sucré et acidulé. Les fraises des bois sont une bonne source de vitamine C, de potassium et de fibres. Elles sont également riches en antioxydants, qui peuvent aider à protéger les cellules contre les dommages causés par les radicaux libres.',50,100, "baie",300,'https://jardinage.lemonde.fr/images/dossiers/2017-02/fraise-des-bois-133121.jpg');
  frui23: Fruit =new Fruit('23',"La groseille"," c'est un fruit à baies originaire d'Europe et d'Asie. Elle est de couleur rouge, verte ou jaune et a un goût sucré ou acidulé. Les groseilles sont une bonne source de vitamine C, de potassium et de fibres. Elles sont également riches en antioxydants, qui peuvent aider à protéger les cellules contre les dommages causés par les radicaux libres.",50,100, "baie",300,'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/1023px_Rote_Johannisbeeren_1353.JPG/800px-1023px_Rote_Johannisbeeren_1353.JPG');
  frui24: Fruit =new Fruit('24',"Mûre",'La mûre est un fruit à baies originaire d Europe, d Asie et d Amérique du Nord. Elle est de couleur noire, rouge ou violette et a un goût sucré et acidulé. Les mûres sont une bonne source de vitamine C, de potassium et de fibres. Elles sont également riches en antioxydants, qui peuvent aider à protéger les cellules contre les dommages causés par les radicaux libres.',50,100, "baie",300,'https://media.gerbeaud.net/2020/08/640/mures.jpg');
  frui25: Fruit =new Fruit('25',"Nektarine",'La nectarine est un fruit à noyau originaire de Chine. Elle est de couleur jaune, orange ou rouge et a un goût sucré et juteux. Les nectarines sont une bonne source de vitamine C, de potassium et de fibres. Elles sont également riches en antioxydants.',50,100, "fruit a noyau",300,'https://media.istockphoto.com/id/637891632/fr/photo/nectarine-fruits-isol%C3%A9-sur-fond-blanc-d%C3%A9coupe.jpg?s=612x612&w=is&k=20&c=RGB9XwRJjo5jVxxzgvR8ZoZfxcdqhc-QWlHVsEVgRAg=');
  frui26: Fruit =new Fruit('26',"Pêche",'La pêche est un fruit à noyau originaire de Chine. Elle est de couleur jaune, orange ou rouge et a un goût sucré et juteux. Les pêches sont une bonne source de vitamine C, de potassium et de fibres. Elles sont également riches en antioxydants.',50,100, "fruit a noyau",300,'https://media.istockphoto.com/id/1175893960/fr/photo/ensemble-de-fruits-nectarines-frais-entiers-et-tranch%C3%A9s.jpg?s=612x612&w=is&k=20&c=4fBzxlPWfAuNJpToJ7d037w6ys-JxYb8wTBBnOxqJuQ=');
  frui27: Fruit =new Fruit('27',"Physalis",'Le physalis est un fruit à baies originaire d Amérique du Sud. Il est de couleur jaune, orange ou rouge et a un goût sucré et acidulé. Les physalis sont une bonne source de vitamine C, de potassium et de fibres. Ils sont également riches en antioxydants.',50,100, "baie",300,'https://img.cuisineaz.com/1200x675/2018/06/22/i140620-physalis.webp');
  frui28: Fruit =new Fruit('28',"Abricot",'L abricot est un fruit à noyau originaire d Asie centrale. Il est de couleur orange vif et a un goût sucré et juteux. Les abricots sont une bonne source de vitamine C, de potassium et de fibres. Ils sont également riches en antioxydants',50,100, "fruit a noyau",300,'https://as2.ftcdn.net/v2/jpg/00/00/78/67/1000_F_786759_gT01AcQMIFgznj2pdREBcPrA6PD9Rt.jpg');
  frui29: Fruit =new Fruit('29',"Clementine",'La clémentine est un hybride de mandarine et d orange douce, elle appartient donc à la catégorie des agrumes.',50,100, "agrume",300,'https://www.jaimefruitsetlegumes.ca/wp-content/uploads/2019/09/Clementine-700x700.png');
  frui30: Fruit =new Fruit('30',"Pamplemousse",'Le pamplemousse est un fruit à pépins originaire d Asie du Sud-Est. Il est de couleur jaune pâle ou rose et a un goût sucré et amer. Les pamplemousses sont une bonne source de vitamine C, de potassium et de fibres. Ils sont également riches en antioxydants.',50,100, "agrume",300,'https://images.radio-canada.ca/q_auto,w_991/v1/alimentation/ingredient/16x9/pamplemousse-ingredients-mordu.jpg');
  frui31: Fruit = new Fruit('31', 'Noix de coco', 'La noix de coco est un fruit à coque. Les fruits à coque sont des fruits qui se caractérisent par leur coque dure et ligneuse. Ils comprennent les noix, les amandes, les noisettes, les pistaches, les noix de cajou et les noix du Brésil.', 50, 100, 'fruit a coque', 300, 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Noix_de_coco_3.jpg');
  frui32: Fruit = new Fruit('32', 'La mangue est un fruit. Les fruits sont des organes végétaux qui contiennent des graines et sont comestibles. Ils sont généralement sucrés et juteux, et sont consommés frais, cuits ou transformés.', 'ghjk', 50, 100, 'drupe', 300, 'https://res.cloudinary.com/hv9ssmzrz/image/fetch/c_fill,f_auto,h_244,q_auto,w_325/https://images-ca-1-0-1-eu.s3-eu-west-1.amazonaws.com/photos/original/784/mangue-produit-AdobeStock_305939384.jpg');
  frui33: Fruit = new Fruit('33', 'Papaye', 'La papaye est un fruit tropical originaire d Amérique centrale et d Amérique du Sud. Elle est de forme ovale ou ronde et a une peau jaune, verte ou rouge. La chair de la papaye est jaune orangé et a une texture juteuse et sucrée.', 50, 100, 'baie', 300, 'https://www.aprifel.com/wp-content/uploads/2019/02/fond-papaye.jpg');
  frui34: Fruit = new Fruit('34', 'prune', 'La prune est un fruit à noyau originaire d Asie du Sud-Ouest. Elle est de forme ovale et a une peau jaune, verte, rouge ou violette. La chair de la prune est jaune, verte ou rouge, et a une texture juteuse et sucrée.', 50, 100, 'drupe', 300, 'https://www.consoglobe.com/wp-content/uploads/2020/09/shutterstock_207844702-768x402.jpg.webp');
  frui35: Fruit = new Fruit('35', 'Poire', 'La poire est un fruit à noyau originaire d Asie centrale. Elle est de forme ovale ou ronde et a une peau jaune, verte ou rouge. La chair de la poire est blanche, jaune ou rouge, et a une texture juteuse et sucrée.', 50, 100, 'drupe', 300, 'https://img.passeportsante.net/600x338/2021-05-03/i102138-poire-nu.webp');


fruits:Fruit []=[this.frui1,this.frui2,this.frui3,this.frui4,this.frui5,this.frui6,this.frui7,this.frui8,this.frui9,this.frui10,this.frui11,this.frui12,this.frui13,this.frui14,this.frui15,this.frui16,this.frui17,this.frui18,this.frui19,this.frui20,this.frui21,this.frui22,this.frui23,this.frui24,this.frui25,this.frui26,this.frui27,this.frui28,this.frui29,this.frui30,this.frui31,this.frui32,this.frui33,this.frui34,this.frui35]
  // router: any;
  categories: any[] = [];
  fav :any[] = [];
  route: any;
  router: any;
  totalAchat: any;
  totalVente: any;

  // @Inject
  constructor(router:Router) {


   }
   getFruit(fruit:Fruit){

      localStorage.setItem("frui",JSON.stringify(fruit));
    }

    goToCategory(category: { id: any; }) {
      this.router.navigate(['category', category.id]);
    }

    produitCategorie(){


    }



  ngOnInit() {
    localStorage.setItem("favorie", JSON.stringify(this.fav));
    this.totalAchat = this.fruits.reduce((acc, fruit) => acc + (fruit.prix_achat * fruit.stock), 0);
    this.totalVente = this.fruits.reduce((acc, fruit) => acc + (fruit.prix_vente * fruit.stock), 0);
  //  // Créer un ensemble pour stocker les catégories
  //  const categories = new Set();

  //  // Parcourir le tableau de fruits
  //  for (const fruit of this.fruits) {
  //    // Obtenir la catégorie
  //    const category = fruit.cathegory;

  //    // Ajouter la catégorie à l'ensemble
  //    categories.add(category);
  //  }

  //  // Récupérer les catégories
  //  this.categories = Array.from(categories);
 }


  cat1=new Categories('1', 'fruit a pepins', 'primary');
  cat2 =new Categories('2', 'baie', 'secondary');
 cat3= new Categories('3', 'légume-racine', 'warning');
  cat4=new Categories('4', 'légume', 'danger');
  // cat5=new Categories('5', 'fruits a pepins', 'bizar');
  cat6=new Categories('6', 'fruit a noyau', 'dark');
  cat7=new Categories('7', 'agrume', 'vertsombre');
  cat8=new Categories('8', 'fruit a coque', 'violet');
  cat9=new Categories('9', 'drupe', 'success');

  categories1 :Categories[]=[this.cat1,this.cat2,this.cat3,this.cat4,this.cat6,this.cat7,this.cat8,this.cat9]


  }






