export interface TeamMember {
  id: number;
  name: string;
  email: string;
  role: MemberRole;
  image?: string;
}

export enum MemberRole {
  Admin = 'admin',
  Analyst = 'analyst',
  TechSupport = 'tech_support'
}