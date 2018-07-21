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
   // fromEndDate: string;
   // toEndDate: string;
   fromEndDate: Date;
   toEndDate: Date;
   bannerItemName: string;
   isDefault: boolean;
   priority: number;
   status: number;
}

export class PostSearch {
   // id: string;
   title: string;
   status: number;
   // fromPublishDate: string;
   // toPublishDate: string;
   fromPublishDate: Date;
   toPublishDate: Date;
}

export class ServiceSearch {
   name: string;
   description: string;
   status: number;
}

export class RadioSearch {
   title: string;
   description: string;
   status: number;
}

export class RadioScheduleSearch {
   radioId: string;
   status: number;
   fromPublishDate: Date;
   toPublishDate: Date;
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
   fromEndDate: Date;
   toEndDate: Date;
}
