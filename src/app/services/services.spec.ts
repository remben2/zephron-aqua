import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-services',
  styleUrl: './services.css',
  templateUrl: './services.html',
})
export class Services {
  
  // Változó, ami megjegyzi, hogy melyik szolgáltatást nyitottuk meg (alapból null, azaz semelyiket)
  selectedService: any = null;

  servicesList = [
    { 
      title: "Szennyvíztechnológia", 
      desc: "Kommunális és ipari szennyvíztisztító telepek, iszapvíztelenítő szalagprések teljes körű javítása és gépészeti rekonstrukciója.", 
      detailedDesc: "A szennyvízkezelés során fő szempontunk a környezetvédelmi határértékek szigorú betartása. Évtizedes tapasztalattal végezzük elhasználódott iszapvíztelenítő berendezések, szalagprések (pl. AVM SPA 750) teljes gépészeti felújítását, a csapágyazástól a vezérlésig. Referenciánk a DMRV Zrt. telepein végzett sikeres rekonstrukció, amivel jelentősen megnöveltük a telepek élettartamát és hatékonyságát.",
      imageUrl: "https://picsum.photos/id/111/1200/500" // Nagyobb felbontású kép a részletes nézethez!
    },
    { 
      title: "Gázfáklyák és Energetika", 
      desc: "Hulladéklerakók depóniagáz-kinyerő rendszereinek és gázfáklyáinak felújítása, karbantartása, és ártalmatlanítása.", 
      detailedDesc: "A környezetterhelés és az üvegházhatású gázok kontrollált elégetése kritikus feladat. Kiemelt tapasztalattal rendelkezünk depóniagáz-fáklyák biztonsági és ártalmatlanítási rendszereinek gépészeti felújításában, gázanalizátorok cseréjében és kalibrálásában. Szoros együttműködésben dolgozunk a FŐTÁV / BKM Nonprofit Zrt.-vel a fővárosi hulladékgazdálkodás energetikai infrastruktúrájának fenntartásában.",
      imageUrl: "https://picsum.photos/id/120/1200/500" 
    },
    { 
      title: "Szűréstechnikai Modellezés", 
      desc: "Folyadék- és porszűrési eljárások előzetes számítógépes szimulációja, a megfelelő szűrési hatékonyság érdekében.", 
      detailedDesc: "Mielőtt egy drága rendszert megépítenénk, mérnöki csapatunk fejlett szoftveres szimulációkkal modellezi az áramlási viszonyokat, a kémiai terhelhetőséget és a várható nyomásesést. Legyen szó vegyi kezelésű tűnemezekről vagy hatalmas ipari zsákos porszűrőkről, pontos matematikai adatok alapján garantáljuk, hogy a javasolt szűrőbetét optimálisan fog működni a legagresszívabb ipari környezetben is.",
      imageUrl: "https://picsum.photos/id/130/1200/500" 
    },
    { 
      title: "Autóipari és CNC Megoldások", 
      desc: "Gépipari és CNC megmunkáló csarnokok hűtő-kenő folyadékainak szűrése, keringetése és a rendszerek automatizálása.", 
      detailedDesc: "Az autóiparban és a precíziós fémforgácsolásban a hűtő-kenő emulziók minősége közvetlenül kihat a termelékenységre. Központi és lokális folyadékszűrő állomásokat tervezünk és telepítünk, amelyek automatikusan eltávolítják a fémforgácsot és az idegen olajokat, ezzel drasztikusan csökkentve a szerszámkopást és az emulzió cseréjének költségeit.",
      imageUrl: "https://picsum.photos/id/140/1200/500" 
    },
    { 
      title: "Gyógyszer- és Vegyipar", 
      desc: "Vegyi kezelésű tűnemezek biztosítása, és magas higiéniai elvárású gyógyszeripari szűrőállomások építése.", 
      detailedDesc: "A gyógyszeripari és finomkémiai gyártás során a sterilitás és az anyagbiztonság nem tűr kompromisszumot. Speciális, FDA minősítésű folyadékszűrőket, kerámiamembránokat és saválló (316L) acél gépészeti elemeket szállítunk. Vállaljuk a legmagasabb higiéniai sztenderdeknek megfelelő egyedi szűrőállomások automatizálását és validálását is.",
      imageUrl: "https://picsum.photos/id/152/1200/500" 
    },
    { 
      title: "Nagykereskedelem és Import", 
      desc: "Ipari szűrőkomponensek (pl. Micropor), laboreszközök és zsákos porszűrő berendezések hivatalos forgalmazása.", 
      detailedDesc: "A kivitelezés mellett cégcsoportunk stabil kereskedelmi bázissal rendelkezik. Kiterjedt nemzetközi beszállítói hálózatunk van, köztük a globálisan elismert törökországi Micropor kizárólagos hazai partneri kapcsolata. Raktárról vagy gyors beszerzéssel biztosítjuk a szükséges szűrőbetéteket, épületgépészeti szerelvényeket és laboratóriumi mérőeszközöket partnereink számára.",
      imageUrl: "https://picsum.photos/id/160/1200/500" 
    }
  ];

  // Függvény: Részletes nézet megnyitása
  openDetail(service: any) {
    this.selectedService = service;
    window.scrollTo(0, 0); // Felgörget az oldal tetejére!
  }

  // Függvény: Vissza a kártyákhoz
  closeDetail() {
    this.selectedService = null;
  }
}