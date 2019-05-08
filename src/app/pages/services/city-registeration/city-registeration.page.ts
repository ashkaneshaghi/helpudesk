import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular'


@Component({
  selector: 'app-city-registeration',
  templateUrl: './city-registeration.page.html',
  styleUrls: ['./city-registeration.page.scss'],
})
export class CityRegisterationPage implements OnInit {
  public citiesList = [
    {id: "1",  place: 'Altstadt',       addressLine1: 'Marktpl. 10,',                       addressLine2: '69117 Heidelberg',                phone: '+49 06221 5813810',       add: 'Address: ',      tel: 'Tel: '},
    {id: "2",  place: 'Bammental',      addressLine1: ' Hauptstraße 71,',                   addressLine2: '69245 Bammental',                 phone: '+49 06223 95300',         add: 'Address: ',      tel: 'Tel: '},
    {id: "3",  place: 'Bergheim',       addressLine1: 'Bergheimer Str. 147,',               addressLine2: '69115 Heidelberg',                phone: '+49 06221 5847980',       add: 'Address: ',      tel: 'Tel: '},
    {id: "4",  place: 'Boxberg',        addressLine1: 'Emmertsgrundpassage 17,',            addressLine2: '69126 Heidelberg',                phone: '+49 06221 5813850',       add: 'Address: ',      tel: 'Tel: '},
    {id: "5",  place: 'Edingen',        addressLine1: 'Hauptstraße 60,',                    addressLine2: '68535 Edingen-Neckarhausen',      phone: '+49 06203 8080',          add: 'Address: ',      tel: 'Tel: '},
    {id: "6",  place: 'Eppelheim',      addressLine1: 'Schulstraße 2,',                     addressLine2: '69214 Eppelheim',                 phone: '+49 06221 7940',          add: 'Address: ',      tel: 'Tel: '},
    {id: "7",  place: 'Gaiberg',        addressLine1: 'Hauptstraße 44,',                    addressLine2: '69251 Gaiberg',                   phone: '+49 06223 95010',         add: 'Address: ',      tel: 'Tel: '},
    {id: "8",  place: 'Handschuhsheim', addressLine1: 'Dossenheimer Landstraße 13,',        addressLine2: '69121 Heidelberg',                phone: '+49 06221 5813820',       add: 'Address: ',      tel: 'Tel: '},
    {id: "9",  place: 'Heilbronn',      addressLine1: 'Marktpl. 7 Eingang Lohtorstraße,',   addressLine2: '74072 Heilbronn',                 phone: '+49 07131 563800',        add: 'Address: ',      tel: 'Tel: '},
    {id: "10", place: 'Hockenheim',     addressLine1: 'Rathausstraße 1,',                   addressLine2: '68766 Hockenheim',                phone: '+49 06205 210',           add: 'Address: ',      tel: 'Tel: '},
    {id: "11", place: 'Kaiserslautern', addressLine1: 'Willy-Brandt-Platz 1,',              addressLine2: '67657 Kaiserslautern',            phone: '+49 0631 3652538',        add: 'Address: ',      tel: 'Tel: '},
    {id: "12", place: 'Karlsruhe',      addressLine1: 'Beuthener Str. 42,',                 addressLine2: '76139 Karlsruhe',                 phone: '+49 0721 115',            add: 'Address: ',      tel: 'Tel: '},
    {id: "13", place: 'Kirchheim',      addressLine1: 'Schwetzinger Str. 20,',              addressLine2: '69124 Heidelberg',                phone: '+49 06221 5813860',       add: 'Address: ',      tel: 'Tel: '},
    {id: "14", place: 'Leimen',         addressLine1: 'Rathausstraße 1-3,',                 addressLine2: '69181 Leimen',                    phone: '+49 06224 7040',          add: 'Address: ',      tel: 'Tel: '},
    {id: "15", place: 'Ludwigshafen',   addressLine1: 'Rathauspl. 20,',                     addressLine2: '67059 Ludwigshafen am Rhein',     phone: '+49 0621 5040',           add: 'Address: ',      tel: 'Tel: '},
    {id: "16", place: 'Mauer',          addressLine1: 'Heidelberger Str. 34,',              addressLine2: '69256 Mauer',                     phone: '+49 06226 92200',         add: 'Address: ',      tel: 'Tel: '},
    {id: "17", place: 'Meckesheim',     addressLine1: 'Friedrichstraße 10,',                addressLine2: '74909 Meckesheim',                phone: '+49 06226 92000',         add: 'Address: ',      tel: 'Tel: '},
    {id: "18", place: 'Neckargemund',   addressLine1: 'Bahnhofstraße 54,',                  addressLine2: '69151 Neckargemünd',              phone: '+49 06223 8040',          add: 'Address: ',      tel: 'Tel: '},
    {id: "19", place: 'Neckarsteinach', addressLine1: 'Hauptstraße 7,',                     addressLine2: '69239 Neckarsteinach',            phone: '+49 06229 92000',         add: 'Address: ',      tel: 'Tel: '},
    {id: "20", place: 'Neunheim',       addressLine1: 'Rahmengasse 21,',                    addressLine2: '69120 Heidelberg',                phone: '+49 06221 5813830',       add: 'Address: ',      tel: 'Tel: '},
    {id: "21", place: 'Oftersheim',     addressLine1: 'Mannheimer Str. 49,',                addressLine2: '68723 Oftersheim',                phone: '+49 06202 5970',          add: 'Address: ',      tel: 'Tel: '},
    {id: "22", place: 'Pfaffengrund',   addressLine1: 'Am Markt 21,',                       addressLine2: '69123 Heidelberg',                phone: '+49 06221 5813870',       add: 'Address: ',      tel: 'Tel: '},
    {id: "23", place: 'Rheinau',        addressLine1: 'Relaisstraße 124,',                  addressLine2: '68219 Mannheim',                  phone: '+49 0621 2936100',        add: 'Address: ',      tel: 'Tel: '},
    {id: "24", place: 'Rohrbach',       addressLine1: 'Seckenheimer Gäßchen 1,',            addressLine2: '69126 Heidelberg',                phone: '+49 06221 5813880',       add: 'Address: ',      tel: 'Tel: '},
    {id: "25", place: 'Sandhausen',     addressLine1: 'Bahnhofstraße 10,',                  addressLine2: '69207 Sandhausen',                phone: '+49 06224 5920',          add: 'Address: ',      tel: 'Tel: '},
    {id: "26", place: 'Schwetzingen',   addressLine1: 'Zeyherstraße 1,',                    addressLine2: '68723 Schwetzingen',              phone: '+49 06202 87230',         add: 'Address: ',      tel: 'Tel: '},
    {id: "27", place: 'Seckenheim',     addressLine1: 'Seckenheimer Hauptstraße 68,',       addressLine2: '68239 Mannheim',                  phone: '+49 0621 2936566',        add: 'Address: ',      tel: 'Tel: '},
    {id: "28", place: 'Sinsheim',       addressLine1: 'Wilhelmstraße 14-18,',               addressLine2: '74889 Sinsheim',                  phone: '+49 07261 404136',        add: 'Address: ',      tel: 'Tel: '},
    {id: "29", place: 'Speyer',         addressLine1: 'Maximilianstraße 93,',               addressLine2: '67346 Speyer',                    phone: '+49 06232 141333',        add: 'Address: ',      tel: 'Tel: '},
    {id: "30", place: 'Walldorf',       addressLine1: 'Nußlocher Str. 45,',                 addressLine2: '69190 Walldorf',                  phone: '+49 06227 350',           add: 'Address: ',      tel: 'Tel: '},
    {id: "31", place: 'Wieblingen',     addressLine1: 'Mannheimer Str. 259,',               addressLine2: '69123 Heidelberg',                phone: '+49 06221 5813890',       add: 'Address: ',      tel: 'Tel: '},
    {id: "32", place: 'Wiesloch',       addressLine1: 'Marktstraße 13,',                    addressLine2: '69168 Wiesloch',                  phone: '+49 06222 841',           add: 'Address: ',      tel: 'Tel: '},
    {id: "33", place: 'Ziegelhausen',   addressLine1: 'Kleingemünder Str. 18,',             addressLine2: '69118 Heidelberg',                phone: '+49 06221 5813840',       add: 'Address: ',      tel: 'Tel: '},
  ]

  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }

  goToAppointment() {
    this.navCtrl.navigateForward('/services/city-registeration/appointment');
  }


}
