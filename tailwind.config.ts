import type { Config } from 'tailwindcss';
const config: Config = { darkMode: 'class', content: ['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}','./lib/**/*.{ts,tsx}'], theme: { extend: { colors: { brand: {50:'#eef7ff',100:'#d9ecff',500:'#0b6bcb',600:'#0958a8',700:'#07467f'}, ink:'#0f172a' }, boxShadow:{soft:'0 8px 30px rgba(2,32,71,.08)'}, borderRadius:{xl2:'1.25rem'} } }, plugins: [] };
export default config;
