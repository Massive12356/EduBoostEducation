/// <reference types="vite/client" />

// Declaration for lucide-react
declare module 'lucide-react' {
  export * from 'lucide-react/dist/types/index';
  
  // Re-export all as default
  const icons: any;
  export default icons;
}