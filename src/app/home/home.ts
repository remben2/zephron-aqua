import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  // A cég büszkeségei (statisztikák)
  companyStats = [
    { number: "100%", text: "Magyar tulajdonosi kör az alapítástól kezdve" },
    { number: "14", text: "Külföldi partnercég képviseletét látjuk el" },
    { number: "47", text: "Berendezéssort építünk évente átlagosan" },
    { number: "125", text: "Berendezést tartunk karban folyamatosan" }
  ];

    // Kiemelt referenciák a dokumentum alapján
  references = [
    { 
      name: "DMRV Zrt.", 
      desc: "Szennyvíziszap-víztelenítő szalagprések komplex gépészeti felújítása (Szob)."
    },
    { 
      name: "BKM / FŐTÁV", 
      desc: "Hulladéklerakó depóniagáz-fáklyák hibajavítása és gázanalizátorok cseréje."
    },
    { 
      name: "Pekatronik", 
      desc: "Stratégiai mérnöki partner ipari automatizálási és vízkezelési projektekben."
    },
    { 
      name: "Micropor", 
      desc: "Kiemelt nemzetközi beszállító ipari szűrőkomponensek és porszűrés terén."
    }
  ];

}
