import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';

const PalenightTheme = createTheme({
    theme: 'dark',
    settings: {
        background: '#292D3E',
        foreground: '#89DDFF',
        caret: '#5d00ff',
        selection: '#036dd626',
        selectionMatch: '#036dd626',
        lineHighlight: '#8a91991a',
        gutterBackground: '#292D3E',
        gutterForeground: '#8a919966',
    },
    styles: [
        { tag: t.comment, color: '#676E95' },
        { tag: t.content, color: '#FFFFFF' },
        // { tag: t.function, color: '#82AAFF' },
        { tag: t.variableName, color: '#82AAFF' },
        { tag: t.character, color: '#89DDFF' },
        { tag: t.className, color: '#C3E88D' },
        { tag: t.definitionKeyword, color: '#89DDFF' },
        { tag: t.attributeName, color: '#C792EA' },
        { tag: t.attributeValue, color: '#C3E88D' },
        { tag: [t.string, t.special(t.brace)], color: '#C3E88D' },
        { tag: t.number, color: '#F78C6C' },
        { tag: t.bool, color: '#000000' },
        { tag: t.null, color: '#000000' },
        { tag: t.keyword, color: '#C792EA' },
        { tag: t.operator, color: '#89DDFF' },
        { tag: t.className, color: '#FFCB6B' },
        { tag: t.definition(t.typeName), color: '#000000' },
        { tag: t.typeName, color: '#gree' },
        { tag: t.angleBracket, color: '#89DDFF' },
        { tag: t.tagName, color: '#f07178' },
    ],
});

export { PalenightTheme };
