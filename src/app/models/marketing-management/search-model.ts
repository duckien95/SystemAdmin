export class BannerSearch{
   id: string;
   bannerName: string;
   status: number;
}

export class BannerItemSearch {
   // id: string;
   bannerItemName: string;
   status: number;
}

export class PostSearch {
   // id: string;
   title: string;
   status: number;
}

export class ServiceSearch {
   name: string;
   status: number;
}

export class RadioSearch {
   title: string;
   status: number;
}

export class ConsultServiceSearch {
   title: string;
   fullName: string;
   phone: string;
   status: number;
}

export class OfferPriceSearch {
   fullName: string;
   departurePlace: string;
   destinationPlace: string;
   service: string;
   status: number;
}

export class RegisterAgencySearch {
   fullName: string;
   address: string;
   registerAgencyAddress: string;
   job: string;
   status: number;
}
