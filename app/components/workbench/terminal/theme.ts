import type { ITheme } from '@xterm/xterm';

const style = getComputedStyle(document.documentElement);
const cssVar = (token: string) => style.getPropertyValue(token) || undefined;

export function getTerminalTheme(overrides?: ITheme): ITheme {
  return {
    cursor: cssVar('--nova-elements-terminal-cursorColor'),
    cursorAccent: cssVar('--nova-elements-terminal-cursorColorAccent'),
    foreground: cssVar('--nova-elements-terminal-textColor'),
    background: cssVar('--nova-elements-terminal-backgroundColor'),
    selectionBackground: cssVar('--nova-elements-terminal-selection-backgroundColor'),
    selectionForeground: cssVar('--nova-elements-terminal-selection-textColor'),
    selectionInactiveBackground: cssVar('--nova-elements-terminal-selection-backgroundColorInactive'),

    // ansi escape code colors
    black: cssVar('--nova-elements-terminal-color-black'),
    red: cssVar('--nova-elements-terminal-color-red'),
    green: cssVar('--nova-elements-terminal-color-green'),
    yellow: cssVar('--nova-elements-terminal-color-yellow'),
    blue: cssVar('--nova-elements-terminal-color-blue'),
    magenta: cssVar('--nova-elements-terminal-color-magenta'),
    cyan: cssVar('--nova-elements-terminal-color-cyan'),
    white: cssVar('--nova-elements-terminal-color-white'),
    brightBlack: cssVar('--nova-elements-terminal-color-brightBlack'),
    brightRed: cssVar('--nova-elements-terminal-color-brightRed'),
    brightGreen: cssVar('--nova-elements-terminal-color-brightGreen'),
    brightYellow: cssVar('--nova-elements-terminal-color-brightYellow'),
    brightBlue: cssVar('--nova-elements-terminal-color-brightBlue'),
    brightMagenta: cssVar('--nova-elements-terminal-color-brightMagenta'),
    brightCyan: cssVar('--nova-elements-terminal-color-brightCyan'),
    brightWhite: cssVar('--nova-elements-terminal-color-brightWhite'),

    ...overrides,
  };
}
