export async function GET(request) {
    const services = {
        web: {
            id: '1',
            title: 'Vi skaber digitale oplevelser der virker',
            subtitle: 'Hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.',
            imageUrl: '/assets/images/strapi_crop.png',
            overlayColor: '#FF003E',
            list: [
                'Gennemtænkt UX/UI Design',
                'CMS Implementering',
                'SEO Optimering',
                'Opdatering og vedligeholdelse',
                'API Integration',
            ],
            list2: [
                'Frameworks: React, Next.js, Vue.js, Remix m.m.',
                'CMS: WordPress, Drupal, Strapi m.m.',
            ],
            tags: [
                'Websites',
                'Apps',
            ],
            slides: [
                {
                    id: '1',
                    text: 'Med Strapi CMS får du fuld kontrol igennem dets brugervenlige interface til nemt at tilpasse og udvide dit indhold. Som open-source CMS, er Strapi både fleksibelt og skalerbart, hvilket sikrer, at din hjemmeside kan vokse og udvikle sig sammen med dine behov.',
                    author: 'Max Hargreave',
                    position: 'Monsun Webudvikler',
                },
                {
                    id: '2',
                    text: 'Vi skaber digitale oplevelser der virker',
                }
            ],
        },

        grafik: {
            id: '2',
            title: 'Godt design er enkelt, funktionelt og tidløst',
            subtitle: 'Nisi quis eleifend quam adipiscing vitae. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique.',
            imageUrl: 'https://picsum.photos/id/20/1000/1000',
            overlayColor: '#0000FF',
            tags: [
                'Grafisk design',
                'Layout',
            ],
        },

        foto: {
            id: '2',
            title: 'Cursus in hac habitasse platea dictumst',
            subtitle: 'Auctor eu augue ut lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum nibh tellus. Vitae nunc sed velit dignissim sodales ut eu sem.',
            imageUrl: 'https://picsum.photos/id/36/1000/1000',
            overlayColor: '#00B6FF',
            tags: [
                'Foto',
                'Video',
            ],
        },

        ord: {
            id: '2',
            title: 'Aenean sed adipiscing diam donec',
            subtitle: 'Nisi quis eleifend quam adipiscing vitae proin. Lectus magna fringilla urna porttitor rhoncus dolor purus. Egestas integer eget aliquet nibh praesent tristique.',
            imageUrl: 'https://picsum.photos/id/486/1000/1000',
            overlayColor: 'SpringGreen',
            tags: [
                'Ordforfatning',
                'Journalistik',
            ],
        },


        // ... add more services as needed
    };

    const jsonServices = JSON.stringify(services);

    return new Response(jsonServices, {
        headers: { 'Content-Type': 'application/json' },
    });
}
  