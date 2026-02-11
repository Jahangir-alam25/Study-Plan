// 'use client';
// import { ThemeProvider as NextThemesProvider } from 'next-themes';

// interface ThemeProviderProps {
//   children: React.ReactNode;
// }

// export function ThemeProvider({ children }: ThemeProviderProps) {
//   return (
//     <NextThemesProvider
//       attribute="class"
//       defaultTheme="dark"
//       enableSystem={false}
//       disableTransitionOnChange
//     >
//       {children}
//     </NextThemesProvider>
//   );
// }

'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
