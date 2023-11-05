import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  favoris: Fruit [] = [];
  totalAchat : number = 0;
  totalVente : number = 0;
  categories : Categorie[] = [
    {
      id : 0,
      nom : 'Fruits à pépins',
      couleur : "success" 
    },
    {
      id : 1,
      nom : 'Fruits à noyau',
      couleur : "warning" 
    },
    {
      id : 2,
      nom : "Fruits à coque",
      couleur : "primary" 
    },
    {
      id : 3,
      nom : "Fruits rouge",
      couleur : "danger" 
    },
    {
      id : 4,
      nom : "Fruits exotique",
      couleur : "violet" 
    }
  ];
  fruits: Fruit[] = [
    {
      id: 1,
      nom: 'Rocou',
      description: "un fruit rouge originaire d'Amérique tropicale, qui ne se mange pas mais est utilisé pour sa couleur rouge vif dans la cuisine et les cosmétiques",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits rouge',
      stock: 10,
      image: 'assets/img/Rocou.jpeg'
    },
    {
      id: 2,
      nom: 'Framboise blanche',
      description: 'une variété de framboise qui est blanche et a un goût sucré et doux',
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits rouge',
      stock: 15,
      image: 'assets/img/Framboise blanche.jpeg'
    },
    {
      id: 3,
      nom: 'Fruit de la passion',
      description: 'un fruit tropical rouge qui a une pulpe juteuse et acidulée',
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits rouge',
      stock: 10,
      image: 'assets/img/passion.jpeg'
    },
    {
      id: 4,
      nom: 'Cerise de terre',
      description: 'un fruit rouge-orangé qui a un goût sucré et acidulé',
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits rouge',
      stock: 15,
      image: 'assets/img/Cerise de terre.jpeg'
    },
    {
      id: 5,
      nom: 'Baie de mai',
      description: 'un fruit rouge foncé qui a un goût sucré et acidulé',
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits rouge',
      stock: 10,
      image: 'assets/img/Baie de mai.jpeg'
    },
    {
      id: 6,
      nom: 'Groseille à maquereau',
      description: 'un fruit rouge-vert qui a un goût acidulé et est souvent utilisé pour faire des confitures',
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits rouge',
      stock: 15,
      image: 'assets/img/Groseille à maquereau.jpeg'
    },
    {
      id: 7,
      nom: 'Fraise',
      description: "La fraise est un fruit rouge délicieux et sucré, avec une texture juteuse et une saveur acidulée. Elle est souvent utilisée dans les desserts et les confitures. Les fraises sont riches en vitamine C et en antioxydants.",
      prixAchat: 1500,
      prixVente: 3800,
      categorie: 'Fruits rouge',
      stock: 15,
      image: 'assets/img/Fraise.jpeg'
    },
    {
      id: 8,
      nom: 'Noix de bancoule',
      description: "une noix comestible originaire d'Afrique de l'Ouest, qui est souvent utilisée pour faire du beurre de noix.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits à coque',
      stock: 10,
      image: 'assets/img/Noix de bancoule.jpeg'
    },
    {
      id: 9,
      nom: 'Noix de cajou',
      description: "La noix de cajou est une graine en forme de rein, avec une coque dure et une chair crémeuse. Elle a une saveur douce et légèrement sucrée. La noix de cajou est riche en graisses saines, en protéines et en minéraux tels que le magnésium et le cuivre.",
      prixAchat: 3500,
      prixVente: 5000,
      categorie: 'Fruits à coque',
      stock: 10,
      image: 'assets/img/Noix de cajou.jpeg'
    },
    {
      id: 9,
      nom: 'Noix de sapucaia',
      description: "une noix brésilienne qui est souvent utilisée pour faire des collations et des desserts.",
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits à coque',
      stock: 15,
      image: 'assets/img/Noix de sapucaia.jpeg'
    },
    {
      id: 10,
      nom: 'Noix de macadamia de Queensland',
      description: "une noix australienne qui est souvent utilisée pour faire des biscuits et des gâteaux.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits à coque',
      stock: 10,
      image: 'assets/img/Noix de macadamia de Queensland.jpeg'
    },
    {
      id: 11,
      nom: 'Noix de coco',
      description: "La noix de coco est une grosse graine avec une coque dure et une chair blanche et sucrée. Elle a une saveur tropicale et est souvent utilisée dans les plats sucrés et les boissons. La noix de coco est riche en graisses saines, en fibres et en minéraux tels que le potassium et le manganèse.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits à coque',
      stock: 10,
      image: 'assets/img/Noix de coco.jpeg'
    },
    {
      id: 12,
      nom: 'Noix de kola',
      description: "une noix africaine qui est souvent utilisée pour faire des boissons énergisantes.",
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits à coque',
      stock: 15,
      image: 'assets/img/Noix de kola.jpeg'
    },
    {
      id: 13,
      nom: 'Noix de coco de mer',
      description: "une noix de coco géante qui pousse sur les palmiers de mer et est souvent utilisée pour faire des bols et des tasses.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits à coque',
      stock: 10,
      image: 'assets/img/Noix de coco de mer.jpeg'
    },
    {
      id: 14,
      nom: 'Noix de butternut',
      description: "une noix comestible originaire d'Amérique du Nord, qui est souvent utilisée pour faire des soupes et des plats d'accompagnement .",
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits à coque',
      stock: 15,
      image: 'assets/img/Noix de butternut.jpeg'
    },
    {
      id: 15,
      nom: 'Noix de sapotille',
      description: "une noix comestible originaire d'Amérique centrale et du Sud, qui est souvent utilisée pour faire des desserts et des confitures.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits à coque',
      stock: 10,
      image: 'assets/img/Noix de sapotille.jpeg'
    },
    {
      id: 16,
      nom: "Pomme",
      description: "Fruit croquant et juteux",
      prixAchat: 1200,
      prixVente: 1800,
      categorie: 'Fruits à pépins',
      stock: 20,
      image: "assets/img/pomme.jpeg"
    },
    {
      id: 17,
      nom: "Poire",
      description: "Fruit doux et juteux",
      prixAchat: 1500,
      prixVente: 2300,
      categorie: 'Fruits à pépins',
      stock: 18,
      image: "assets/img/poire.jpeg"
    },
    {
      id: 18,
      nom: "Coing",
      description: "Fruit parfumé et légèrement acide",
      prixAchat: 2300,
      prixVente: 3500,
      categorie: 'Fruits à pépins',
      stock: 12,
      image: "assets/img/Coing.jpeg"
    },
    {
      id: 19,
      nom: "Grenade",
      description: "Fruit sucré et riche en antioxydants",
      prixAchat: 2800,
      prixVente: 4200,
      categorie: 'Fruits à pépins',
      stock: 6,
      image: "assets/img/Grenade.jpeg"
    },
    {
      id: 20,
      nom: "Pêche",
      description: "Fruit juteux et sucré",
      prixAchat: 2500,
      prixVente: 3500,
      categorie: 'Fruits à noyau',
      stock: 10,
      image: "assets/img/Pêche.jpeg"
    },
    {
      id: 21,
      nom: "Abricot",
      description: "Petit fruit orangé",
      prixAchat: 1800,
      prixVente: 2800,
      categorie: 'Fruits à noyau',
      stock: 15,
      image: "assets/img/Abricot.jpeg"
    },
    {
      id: 22,
      nom: "Cerise",
      description: "Petit fruit rouge",
      prixAchat: 300,
      prixVente: 4500,
      categorie: 'Fruits à noyau',
      stock: 5,
      image: "assets/img/Cerise.jpeg"
    },
    {
      id: 23,
      nom: "Nectarine",
      description: "Variété de pêche sans duvet",
      prixAchat: 2700,
      prixVente: 3900,
      categorie: 'Fruits à noyau',
      stock: 8,
      image: "assets/img/Nectarine.jpeg"
    },
    {
      id: 24,
      nom: "Prune",
      description: "La prune est un fruit rond ou ovale, avec une peau lisse et une chair juteuse et sucrée. Elle a un noyau dur au centre. Les prunes sont riches en vitamine C, en fibres et en antioxydants.",
      prixAchat: 300,
      prixVente: 4500,
      categorie: 'Fruits à noyau',
      stock: 5,
      image: "assets/img/Prune.jpeg"
    },
    {
      id: 25,
      nom: "Nèfle",
      description: "La nèfle est un petit fruit rond ou ovale, avec une peau lisse et une chair douce et juteuse. Elle a un noyau dur au centre. Les nèfles sont riches en vitamine C, en fibres et en antioxydants.",
      prixAchat: 2700,
      prixVente: 3900,
      categorie: 'Fruits à noyau',
      stock: 8,
      image: "assets/img/Nèfle.jpeg"
    },
    {
      id: 26,
      nom: 'Pitaya',
      description: "Aussi connu sous le nom de fruit du dragon, le pitaya est un fruit exotique originaire d'Amérique centrale. Il a une peau rose ou jaune et une chair blanche ou rougeâtre parsemée de petites graines noires. Le pitaya est riche en vitamines C et en antioxydants.",
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits exotique',
      stock: 15,
      image: 'assets/img/Pitaya.jpeg'
    },
    {
      id: 27,
      nom: 'Ramboutan',
      description: "Originaire d'Asie du Sud-Est, le ramboutan ressemble à une petite boule hérissée de cheveux. Sa chair translucide est sucrée et juteuse, avec une saveur rappelant le litchi. Le ramboutan est une excellente source de vitamine C.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits exotique',
      stock: 10,
      image: 'assets/img/Ramboutan.jpeg'
    },
    {
      id: 28,
      nom: 'Mangoustan',
      description: "Originaire d'Indonésie, le mangoustan est un fruit tropical à la peau pourpre foncé et à la chair blanche et juteuse. Il a un goût doux et acidulé, souvent comparé à celui de la pêche. Le mangoustan est riche en antioxydants et en fibres.",
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits exotique',
      stock: 15,
      image: 'assets/img/Mangoustan.jpeg'
    },
    {
      id: 29,
      nom: 'Litchi',
      description: "Originaire de Chine, le litchi est un fruit exotique avec une peau rugueuse et rouge vif. Sa chair translucide est juteuse, sucrée et légèrement parfumée. Le litchi est une bonne source de vitamine C et de potassium.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits exotique',
      stock: 10,
      image: 'assets/img/Litchi.jpeg'
    },
    {
      id: 30,
      nom: 'Kiwano',
      description: "Aussi connu sous le nom de melon à cornes ou concombre africain, le kiwano est originaire d'Afrique. Il a une peau orange vif avec des épines et une chair verte gélatineuse remplie de graines comestibles. Le kiwano a un goût légèrement acidulé et est riche en vitamine C et en potassium.",
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits exotique',
      stock: 15,
      image: 'assets/img/Kiwano.jpeg'
    },
    {
      id: 31,
      nom: 'Durian',
      description: "Originaire d'Asie du Sud-Est, le durian est un fruit exotique notoire pour son odeur forte et distinctive. Il a une coque épineuse et une chair crémeuse jaune pâle. Le goût du durian est sucré et crémeux, souvent décrit comme une combinaison de saveurs de banane, d'ananas et de crème brûlée.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits exotique',
      stock: 10,
      image: 'assets/img/Durian.jpeg'
    },
    {
      id: 32,
      nom: 'Anone',
      description: " Originaire d'Amérique centrale, l'anone est un fruit exotique avec une peau verte et écailleuse. Sa chair blanche et crémeuse est douce et parfumée, avec des notes de vanille et de noix de coco. L'anone est riche en vitamine C et en fibres.",
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits exotique',
      stock: 15,
      image: 'assets/img/Anone.jpeg'
    },
    {
      id: 33,
      nom: 'Carambole',
      description: "Originaire d'Indonésie, la carambole est un fruit en forme d'étoile avec une peau jaune lisse et une chair croquante et juteuse. Son goût est acidulé et sucré, avec des notes de pomme et de raisin. La carambole est riche en vitamine C et en antioxydants.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits exotique',
      stock: 10,
      image: 'assets/img/Carambole.jpeg'
    },
    {
      id: 34,
      nom: 'Maracuja',
      description: " Aussi connu sous le nom de fruit de la passion jaune, le maracuja est originaire d'Amérique du Sud. Il a une peau jaune et ridée et une pulpe orange vif remplie de petites graines comestibles. Le maracuja a un goût sucré et acidulé, avec une saveur tropicale intense. Il est riche en vitamine C et en fibres.",
      prixAchat: 1000,
      prixVente: 1800,
      categorie: 'Fruits exotique',
      stock: 15,
      image: 'assets/img/Maracuja.jpeg'
    },
    {
      id: 35,
      nom: 'Reine-Claude',
      description: "La reine-claude est un petit fruit rond ou ovale, avec une peau lisse et une chair douce et juteuse. Elle a un noyau dur au centre. Les reines-claudes sont riches en vitamine C, en fibres et en antioxydants.",
      prixAchat: 1500,
      prixVente: 2500,
      categorie: 'Fruits à noyau',
      stock: 10,
      image: 'assets/img/Reine-Claude.jpeg'
    }
  ];
  constructor(private route: Router) { }

  ngOnInit() {
    this.totalAchat = this.fruits.reduce((acc, fruit) => acc + (fruit.prixAchat * fruit.stock), 0);
    this.totalVente = this.fruits.reduce((acc, fruit) => acc + (fruit.prixVente * fruit.stock), 0);

    localStorage.setItem("fruits", JSON.stringify(this.fruits));
    localStorage.setItem("categories", JSON.stringify(this.categories));
    localStorage.setItem("favoris", JSON.stringify(this.favoris));
  }
}
interface Categorie{
  id : number; 
  nom : string;
  couleur : string;
}

interface Fruit{
  id: number,
  nom: string, 
  description : string, 
  prixAchat: number,
  prixVente: number,
  categorie: string,
  stock: number,
  image: string
}