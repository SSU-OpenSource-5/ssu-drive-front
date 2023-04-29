//ts에서 svg 인식 안되는 문제 해결을 위한 custom.d.ts
declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
