interface Basic {
  id: string;
}

export interface Profile extends Basic {
  name: string;
}

export interface Event extends Basic {
  title: string;
  startDate: string;
  endDate: string;
  image: string;
  hybrid?: boolean;
  categories: string[]; // category[]
  isFree?: boolean;
  isSuperEvent?: boolean;
}

export interface Article extends Basic {
  title: string;
  image: string;
  author: string;
}
