// declare module '@ryqndev/footer';
declare module '*.module.scss';
declare module '*.scss';
declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module '*.yaml' {
    const data: any
    export default data
}

declare module "*.svg" {
    const content: any;
    export default content;
}
