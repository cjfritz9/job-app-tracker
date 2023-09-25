export interface JobAppDocument {
  companyName: string;
  dateSubmitted: string;
  isActive: boolean;
  status: 'submitted' | 'stale' | 'interviewing' | 'offer';
}

export interface JobAppData {
  id: string;
  companyName: string;
  dateSubmitted: string;
  isActive: boolean;
  status: 'submitted' | 'stale' | 'interviewing' | 'offer';
}
