const preferredLanguage = localStorage.languageOverride || ((navigator.languages
    ? navigator.languages[0]
    : (navigator.language || navigator.userLanguage)).startsWith('fr') ? 'fr' : 'en');

export const strings = preferredLanguage == 'fr' ? {
    title: 'Simulateur de portes logiques'
} : {
    title: 'Logic Gate Simulator'
};