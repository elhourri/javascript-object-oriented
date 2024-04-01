class Batiment {
    constructor(adresse, prix, superficie) {
      this._adresse = adresse; 
      this._prix = prix; 
      this._superficie = superficie;
    }
  
    getAdresse() {
      return this._adresse;
    }
  
    getPrix() {
      return this._prix;
    }
  
    getSuperficie() {
      return this._superficie;
    }
  
    setAdresse(adresse) {
      this._adresse = adresse;
    }
  
    setPrix(prix) {
      if (prix >= 0) {
        this._prix = prix;
      } else {
        console.error("Le prix ne peut pas être négatif");
      }
    }
  
    setSuperficie(superficie) {
      if (superficie >= 0) {
        this._superficie = superficie;
      } else {
        console.error("La superficie ne peut pas être négative");
      }
    }
  
    afficher() {
      console.log(`Adresse: ${this._adresse}`);
      console.log(`Prix: ${this._prix}`);
      console.log(`Superficie: ${this._superficie}`);
    }
  }
  
  class Maison extends Batiment {
    constructor(adresse, prix, superficie, nbEtages) {
      super(adresse, prix, superficie);
      this._nbEtages = nbEtages;
    }
  
    getNbEtages() {
      return this._nbEtages;
    }
  
    setNbEtages(nbEtages) {
      if (nbEtages > 0) {
        this._nbEtages = nbEtages;
      } else {
        console.error("Le nombre d'étages doit être > ou 1");
      }
    }
  
    afficher() {
      super.afficher(); 
      console.log(`Nombre d'étages: ${this._nbEtages}`);
    }
  }
  
  class Appartement extends Batiment {
    constructor(adresse, prix, superficie, numeroEtage, nbChambres) {
      super(adresse, prix, superficie);
      this._numeroEtage = numeroEtage;
      this._nbChambres = nbChambres;
    }
  
    getNumeroEtage() {
      return this._numeroEtage;
    }
  
    getNbChambres() {
      return this._nbChambres;
    }
  
    setNumeroEtage(numeroEtage) {
      if (numeroEtage > 0) {
        this._numeroEtage = numeroEtage;
      } else {
        console.error("Le numéro d'étage doit être > ou 1");
      }
    }
  
    setNbChambres(nbChambres) {
      if (nbChambres > 0) {
        this._nbChambres = nbChambres;
      } else {
        console.error("Le nombre de chambres doit être > ou 1");
      }
    }
  
    afficher() {
      super.afficher(); 
      console.log(`Numéro d'étage: ${this._numeroEtage}`);
      console.log(`Nombre de chambres: ${this._nbChambres}`);
    }
  }
