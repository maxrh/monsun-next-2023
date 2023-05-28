export async function GET(request) {
    const services = {
        web: {
            id: '1',
            title: 'Vi skaber digitale oplevelser der virker',
            subtitle: 'Vi tilbyder unikke hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.',
            imageUrl: 'https://picsum.photos/id/119/1000/1000',
            overlayColor: '#FF003E',
            list: [
                'Gennemtænkt UX/UI Design',
                'CMS Implementering (Content Management System)',
                'SEO Optimering (Search Engine Optimization)',
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

        },

        grafik: {
            id: '2',
            title: 'Godt design er enkelt, funktionelt og tidloest',
            subtitle: 'Sunt in culpa qui officia deserunt mollit anim id est laborum.',
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
            subtitle: 'Duis aute irure dolor in reprehenderit.',
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
            subtitle: 'Duis aute irure dolor in reprehenderit.',
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
  