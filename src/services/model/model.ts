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
  location?: string;
  categories: string[]; // category[]
  isFree?: boolean;
  isSuperEvent?: boolean;
  dateTime?: DateTimeItem[];
}

export interface DateTimeItem extends Basic {
  date?: string;
  dayOfWeek?: string;
  month?: string;
  year?: string;
  startTime?: string;
  endTime?: string;
  isFullDay?: boolean;
}

export interface Article extends Basic {
  title: string;
  image: string;
  author: string;
}
