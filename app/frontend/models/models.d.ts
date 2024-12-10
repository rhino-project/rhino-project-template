export type ModelTypes = {
  active_storage_attachment: ActiveStorage_Attachment;
  user: User;
  account: Account;
  blog: Blog;
};

export type ActiveStorage_Attachment = {
  id: number;
  name: string;
  record_type: string;
  created_at: string;
  url: string;
  url_attachment: string;
  signed_id: string;
};

export type User = {
  id: number;
  name: string;
  nickname: string;
  email: string;
  image: string;
};

export type Account = {
  id: number;
  name: string;
  nickname: string;
  email: string;
  image: string;
};

export type Blog = {
  id: number;
  title: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  user: string;
};
