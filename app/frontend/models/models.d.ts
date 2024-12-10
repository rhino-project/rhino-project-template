export type ActiveStorage_Attachment = {
  id: number;
  name: string;
  record_type: string;
  record_id: number;
  blob_id: number;
  created_at: string;
  url: string;
  url_attachment: string;
};

export type User = {
  id: number;
  provider: string;
  uid: string;
  encrypted_password: string;
  reset_password_token: string;
  reset_password_sent_at: string;
  remember_created_at: string;
  sign_in_count: number;
  current_sign_in_at: string;
  last_sign_in_at: string;
  current_sign_in_ip: string;
  last_sign_in_ip: string;
  confirmation_token: string;
  confirmed_at: string;
  confirmation_sent_at: string;
  unconfirmed_email: string;
  name: string;
  nickname: string;
  image: string;
  email: string;
  tokens: jsonb;
  created_at: string;
  updated_at: string;
  allow_password_change: boolean;
  approved: boolean;
};

export type Account = {
  id: number;
  provider: string;
  uid: string;
  encrypted_password: string;
  reset_password_token: string;
  reset_password_sent_at: string;
  remember_created_at: string;
  sign_in_count: number;
  current_sign_in_at: string;
  last_sign_in_at: string;
  current_sign_in_ip: string;
  last_sign_in_ip: string;
  confirmation_token: string;
  confirmed_at: string;
  confirmation_sent_at: string;
  unconfirmed_email: string;
  name: string;
  nickname: string;
  image: string;
  email: string;
  tokens: jsonb;
  created_at: string;
  updated_at: string;
  allow_password_change: boolean;
  approved: boolean;
};

export type Blog = {
  id: number;
  user_id: number;
  title: string;
  published_at: string;
  created_at: string;
  updated_at: string;
};
