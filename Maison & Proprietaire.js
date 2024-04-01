class Proprietaire {
  constructor(nom, prenom, age, CIN) {
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.CIN = CIN;
  }

  getNom() {
    return this.nom;
  }

  getPrenom() {
    return this.prenom;
  }

  getAge() {
    return this.age;
  }

  getCIN() {
    return this.CIN;
  }

  setNom(nvNom) {
    this.nom = nvNom;
  }

  setPrenom(nvPrenom) {
    this.prenom = nvPrenom;
  }

  setAge(nvAge) {
    this.age = nvAge;
  }

  setCIN(nvCIN) {
    this.CIN = nvCIN;
  }

  Affichage() {
    console.log(`Nom: ${this.nom}, Prénom: ${this.prenom}, Âge: ${this.age}, CIN: ${this.CIN}`);
  }

  Equal(p) {
    return this.nom === p.nom && this.prenom === p.prenom && this.age === p.age && this.CIN === p.CIN;
  }
}

class Maison {
  constructor(adresse, Etages, Chambres) {
    this.adresse = adresse;
    this.Etages = Etages;
    this.Chambres = Chambres;
  }

  getAdresse() {
    return this.adresse;
  }

  getEtages() {
    return this.Etages;
  }

  getChambres() {
    return this.Chambres;
  }

  setAdresse(nvAdresse) {
    this.adresse = nvAdresse;
  }

  setEtages(nvEtages) {
    this.Etages = nvEtages;
  }

  setChambres(nvChambres) {
    this.Chambres = nvChambres;
  }


  Affichage() {
    console.log(`Adresse: ${this.adresse}, Nombre d'étages: ${this.Etages}, Nombre de chambres: ${this.Chambres}`);
  }
}
  

  let proprietaire1 = new Proprietaire('hamid', 'bourass', 30, 'A0000');
  let proprietaire2 = new Proprietaire('abderrahman', 'salmi', 20, 'A0001');

  proprietaire1.Affichage(); 
  proprietaire2.Affichage(); 

  console.log(proprietaire1.Equal(proprietaire2)); // ghat3tina false hit machi nefs  CIN 
  
//--------------------------------//

  const Maison1 = new Maison('001 Daoudiat Marrakech', 3, 9);
  Maison1.Affichage(); //ghat3tina les infos dial la maison