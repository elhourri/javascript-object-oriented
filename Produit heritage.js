class Produit {
    constructor(reference, prix, quantite) {
      this._reference = reference; 
      this._prix = prix;
      this._quantite = quantite;
    }
  
    getReference() {
      return this._reference;
    }
  
    getPrix() {
      return this._prix;
    }
  
    getQuantite() {
      return this._quantite;
    }
  
    setReference(reference) {
      this._reference = reference;
    }
  
    setPrix(prix) {
      if (prix >= 0) { 
        this._prix = prix;
      } else {
        console.error("Le prix ne peut pas être négatif");
      }
    }
  
    setQuantite(quantite) {
      if (quantite >= 0) {
        this._quantite = quantite;
      } else {
        console.error("La quantité ne peut pas être négative");
      }
    }
  
    afficher() { 
      console.log(`Référence: ${this._reference}`);
      console.log(`Prix: ${this._prix}`);
      console.log(`Quantité: ${this._quantite}`);
    }
  }
  
  class Medicament extends Produit {
    constructor(reference, prix, quantite, nom, molecule) {
      super(reference, prix, quantite);
      this._nom = nom;
      this._molecule = molecule;
    }
  
    getNom() {
      return this._nom;
    }
  
    getMolecule() {
      return this._molecule;
    }
  
    setNom(nom) {
      this._nom = nom;
    }
  
    setMolecule(molecule) {
      this._molecule = molecule;
    }
  
    afficher() {
      super.afficher();
      console.log(`Nom: ${this._nom}`);
      console.log(`Molécule: ${this._molecule}`);
    }
  }
  
  class Parapharm extends Produit { 
    constructor(reference, prix, quantite, type) {
      super(reference, prix, quantite);
      this._type = type;
    }
  
    getType() {
      return this._type;
    }
  
    setType(type) {
      this._type = type;
    }
  
    afficher() {
      super.afficher(); 
      console.log(`Type: ${this._type}`);
    }
  }
  