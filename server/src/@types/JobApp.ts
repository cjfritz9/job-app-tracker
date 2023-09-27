export interface JobAppDocument {
  companyName: string;
  positionTitle: string;
  postLink: string;
  dateSubmitted: string;
  isActive: boolean;
    status: {
    name: 'submitted' | 'stale' | 'interviewing' | 'offer';
    weight: 1 | 2 | 3 | 4;
  };
}

export interface JobAppData extends JobAppDocument {
  id: string;
}
