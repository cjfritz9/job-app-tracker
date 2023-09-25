export interface JobAppDocument {
  companyName: string;
  dateSubmitted: string;
  isActive: boolean;
    status: {
    name: 'submitted' | 'stale' | 'interviewing' | 'offer';
    weight: number;
  };
}

export interface JobAppData {
  id: string;
  companyName: string;
  dateSubmitted: string;
  isActive: boolean;
    status: {
    name: 'submitted' | 'stale' | 'interviewing' | 'offer';
    weight: number;
  };
}
