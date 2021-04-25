declare module "*.svg" {
    const content: React.FunctionComponent<{ width: number, height: number }>;
    export default content;
  }
