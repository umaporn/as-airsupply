export interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string;
  role: string;
  enabled: number;
  created_at: string;
  updated_at: string;
  sender_lists: ISenderItem[];
  delivery_lists: IDeliveryItem[];
  profile: IProfile;
  receipt_lists: IReceiptItem[];
  donate_certificate_lists: unknown[];
}

export interface ISecret {
  accessToken: string;
  token: IToken;
}
