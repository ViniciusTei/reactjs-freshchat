declare module "*.svg" {
  const content: any;
  export default content;
}

declare module 'reactjs-freshchat' {
  interface FreshchatStyles {
    backgroundColor: string;
    color: string;
  }
  
  export interface  FreshChatProps {
    token: string;
    externalId?: string;
    firstName?: string;
    lastName?: string;
    label?: string;
    styles?: FreshchatStyles;
  }
}


