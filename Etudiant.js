class Etudiant {
    constructor(cne, nom, prenom, niveau) {
      this.cne = cne;
      this.nom = nom;
      this.prenom = prenom;
      this.niveau = niveau;
    }
  
    getCne() {
      return this.cne;
    }
  
    setCne(nvCne) {
      this.cne = nvCne;
    }
  
    getNom() {
      return this.nom;
    }
  
    setNom(nvNom) {
      this.nom = nvNom;
    }
  
    getPrenom() {
      return this.prenom;
    }
  
    setPrenom(nvPrenom) {
      this.prenom = nvPrenom;
    }
  
    getNiveau() {
      return this.niveau;
    }
  
    setNiveau(nvNiveau) {
      this.niveau = nvNiveau;
    }
  
    affichage() {
      console.log(`CNE: ${this.cne}, Nom: ${this.nom}, Prénom: ${this.prenom}, Niveau: ${this.niveau}`);
    }
  
    equal(e) {
      return this.cne === e.getCne() && this.nom === e.getNom() && this.prenom === e.getPrenom() && this.niveau === e.getNiveau();
    }
  }
  
  const etudiant1 = new Etudiant('12345', 'Fassi', 'Samir', 'Master', 'Rabat', 'Université Mohammed V');
  const etudiant2 = new Etudiant('12345', 'Fassi', 'Samir', 'Master', 'Rabat', 'Université Mohammed V');

  console.log(etudiant1.equal(etudiant2)); // ghat3tina : true


  etudiant1.affichage();