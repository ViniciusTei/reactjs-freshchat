declare module "*.svg" {
  const content: any;
  export default content;
}

declare type FreshchatStyles = {
  backgroundColor: string;
  color: string;
}

declare type  FreshChatProps = {
  token: string;
  externalId?: string;
  firstName?: string;
  lastName?: string;
  label?: string;
  styles?: FreshchatStyles;
}