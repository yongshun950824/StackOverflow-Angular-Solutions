export interface ICandidate {
  id: number;
  user_type: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  last_login_at: string;
  detail: ICandidateDetail;
  achievement: IAchievement[];
  certificate: ICertificate[];
  education: IEducation[];
  experience: IExperience[];
  skills: ISkill[];
}

export interface ICandidateDetail {
  id: number;
  first_name: string;
  other_name: string;
  last_name: string;
  email: string;
  gender: string;
  user_photo: any;
  marital_status: string;
  dob: Date;
  address: string;
  cv_file: any;
}

export interface IProfile {
  profile: ICandidate;
}

export interface IAchievement {}

export interface ICertificate {}

export interface IEducation {}

export interface IExperience {}

export interface ISkill {}
