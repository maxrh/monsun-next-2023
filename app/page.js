
import ImageComponent from "./components/ImageComponent"
import { HiArrowSmallLeft, HiArrowSmallRight, HiCheckCircle } from "react-icons/hi2";



export default function Home() {
    return (
        <main className="main container">
            <div className='hero p-6 mb-6'>
                <h1 className='title is-1'>Monsun</h1>
                <p className="subtitle is-3">Subtitle 3</p>
            </div>

            <section className='section no-padding mb-6'>
                <div className='columns is-8 is-variable is-flex-direction-row-reverse'>
                    <div className="column is-half">
                        <div className="section-text p-6">
                            <span className="section-text-label">
                                <span>Websites</span>
                                <span>Apps</span>
                            </span>
                            <h2 className='title is-1 is-spaced'>Skræddersyet webudvikling</h2>
                            <p className='subtitle is-5 mb-6'>Vi tilbyder unikke hjemmesider og applikationer skræddersyet til dine specifikationer, alt sammen til en pris der passer til dit budget.</p>


                                <ul className="list mb-6">
                                    <li className="list-item"><span>Gennemtænkt UX/UI Design <HiCheckCircle className="icon"/></span></li>
                                    <li className="list-item"><span>CMS Implementering (Content Management System) <HiCheckCircle className="icon"/></span></li>
                                    <li className="list-item"><span>SEO Optimering (Search Engine Optimization) <HiCheckCircle className="icon"/></span></li>
                                    <li className="list-item"><span>Opdatering og vedligeholdelse <HiCheckCircle className="icon"/></span></li>
                                    <li className="list-item"><span>API Integration <HiCheckCircle className="icon"/></span></li>
                                    <li className="list-item"><span>o.m.a.</span></li>
                                </ul>

                                <ul className="is-size-7">
                                    <li>Frameworks: React, Next.js, Vue.js, Remix m.m.</li>
                                    <li>CMS: WordPress, Drupal, Strapi m.m.</li>

                                </ul>
                            
                        </div>
                    </div>
                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/119/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="left"
                            color="#FF003E"
                        />
                    </div>
                </div>
            </section>

            <section className='section no-padding mb-6'>
                <div className='columns is-8 is-variable is-vcentered'>
                    <div className="column is-half">
                        <div className="section-text p-6">
                            <span className="section-text-label">
                                <span>Grafisk design</span>
                                <span>Tryksags layout</span>
                            </span>
                            <h2 className='title is-1 is-spaced'>Godt design er enkelt, funktionelt & tidløst</h2>
                            <p className='subtitle'>Sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/20/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="right"
                            color="#0000FF"
                        />
                    </div>
                    
                </div>
            </section>

            <section className='section no-padding mb-6'>
                <div className='columns is-8 is-variable is-vcentered is-flex-direction-row-reverse'>
                    <div className="column is-half">
                        <div className="section-text p-6">
                            <span className="section-text-label">
                                <span>Foto</span>
                                <span>Video</span>
                            </span>
                            <h2 className='title is-1 is-spaced'>Cursus in hac habitasse platea dictumst</h2>
                            <p className='subtitle'>Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>
                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/36/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="left"
                            color="#00B6FF"
                        />
                    </div>
                </div>
            </section>

            <section className='section no-padding mb-6'>
                <div className='columns is-8 is-variable is-vcentered'>

                    <div className="column is-half">
                        <div className="section-text p-6">
                            <span className="section-text-label">
                                <span>Ordforfatning</span>
                                <span>Journalistik</span>                                
                            </span>

                            <h2 className='title is-1 is-spaced'>Aenean sed adipiscing diam donec</h2>
                            <p className='subtitle'>Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>

                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/486/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="right"
                            color="SpringGreen"
                        />
                    </div>
                    
                </div>
            </section>
        </main>
    )
}
