export const Description = {
    image: "./asset/cover.jpg",
    description: `New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square`,
    Météo: `6°C, vent O à 6 km/h, 68 % d'humidité weather.com`,
    Quartier: `Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS`,
    Population: `8,468 millions (2021)`,
    Altitude: `10 m; Min. −8,2 m; Max. 124,9 m`,
    Coordonnées: `40° 42′ 51″ nord, 74° 00′ 21″ ouest `
};

export const Tamplate = {
    el: document.querySelector("section"),
    printF() {
        return this.el.innerHTML += `<ul>
                                        <li><img src="${Description.image}" alt="cover"></li>
                                        <li><strong><span aria-hidden="true">📖</span> Description</strong> : ${Description.description}</li>
                                        <li><strong><span aria-hidden="true">⛅️</span> Météo</strong> : ${Description.Météo}</li>
                                        <li><strong><span aria-hidden="true">🏢</span> Quartier</strong> : ${Description.Quartier}</li>
                                        <li><strong><span aria-hidden="true">👨‍👨‍👦</span> Population</strong> : ${Description.Population}</li>
                                        <li><strong><span aria-hidden="true">📍</span> Coordonnées</strong> : ${Description.Coordonnées}</li>
                                        
                                    <ul>`;
    }
};

/* New York est une ville composée de 5 arrondissements à l'embouchure du fleuve Hudson et de l'océan Atlantique. En son centre se trouve Manhattan, un arrondissement densément peuplé faisant partie des principaux centres commerciaux, financiers et culturels du monde. Ses sites incontournables comprennent des gratte-ciel comme l'Empire State Building et l'immense Central Park. Le théâtre de Broadway est situé sur Times Square. ― Google
Météo : 6°C, vent O à 6 km/h, 68 % d'humidité weather.com
Quartiers : Harlem, Upper East Side, West Village, Flushing, SoHo, PLUS
Population : 8,468 millions (2021)
Altitude : 10 m; Min. −8,2 m; Max. 124,9 m
Code FIPS : 36-51000
Code ZIP : 100xx–104xx, 11004–05, 111xx–114xx, 116xx
Coordonnées : 40° 42′ 51″ nord, 74° 00′ 21″ ouest */