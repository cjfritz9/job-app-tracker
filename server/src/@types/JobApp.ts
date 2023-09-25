import { Timestamp } from 'firebase-admin/firestore';

export interface JobAppDocument {
  companyName: string;
  dateSubmitted: Timestamp;
  isActive: boolean;
  status: 'submitted' | 'stale' | 'interviewing' | 'offer';
}

export interface JobAppData {
  id: string;
  companyName: string;
  dateSubmitted: Timestamp;
  isActive: boolean;
  status: 'submitted' | 'stale' | 'interviewing' | 'offer';
}
