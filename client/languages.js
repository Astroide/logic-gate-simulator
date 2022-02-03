const preferredLanguage = localStorage.languageOverride || ((navigator.languages
    ? navigator.languages[0]
    : (navigator.language || navigator.userLanguage)).startsWith('fr') ? 'fr' : 'en');

export const strings = preferredLanguage == 'fr' ? {
    title: 'Simulateur de portes logiques',
    gates: {
        OR: 'OU',
        AND: 'ET',
        XOR: 'OU exclusif',
        NOT: 'NON',
        NAND: 'NON ET',
        NOR: 'NON OU',
        XNOR: 'NON OU exclusif',
    }
} : {
    title: 'Logic Gate Simulator',
    gates: {
        OR: 'OR',
        AND: 'AND',
        XOR: 'XOR',
        NOT: 'NOT',
        NAND: 'NAND',
        NOR: 'NOR',
        XNOR: 'XNOR',
    }
};