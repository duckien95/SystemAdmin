export class BannerSearch{
   id: string;
   bannerName: string;
   status: number;
}

export class BannerItemSearch {
   // id: string;
   bannerId: string;
   fromStartDate: string;
   toStartDate: string;
   fromEndDate: string;
   toEndDate: string;
   bannerItemName: string;
   isDefault: boolean;
   priority: number;
   status: number;
}

export class PostSearch {
   // id: string;
   title: string;
   status: number;
   fromPublishDate: string;
   toPublishDate: string;
}

export class ServiceSearch {
   name: string;
   status: number;
}

export class RadioSearch {
   title: string;
   status: number;
}

export class RadioScheduleSearch {
   fromPublishDate: string;
   toPublishDate: string;
}

export class ConsultServiceSearch {
   title: string;
   address: string;
   fullName: string;
   phone: string;
   status: number;
}

export class OfferPriceSearch {
   phone: string;
   fullName: string;
   departurePlace: string;
   destinationPlace: string;
   service: string;
   status: number;
}

export class RegisterAgencySearch {
   phone: string;
   fullName: string;
   address: string;
   registerAgencyAddress: string;
   job: string;
   personalOrBusinessRegisterId: string;
   status: number;
}
