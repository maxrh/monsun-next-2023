
import ImageComponent from "./components/ImageComponent"
import { HiArrowSmallLeft, HiArrowSmallRight, HiArrowSmallDown } from "react-icons/hi2";



export default function Home() {
    return (
        <main className="main container">
            <div className='hero'>
                <h1 className='title is-1'>Monsun</h1>
                <p className="subtitle is-3">Subtitle 3</p>
            </div>

            <section className='section no-padding mb-6'>
                <div className='columns is-8 is-variable is-vcentered '>
                    <div className="column is-half has-text-right">
                        <div className="section-text p-6">
                            <span className="section-text-label">
                                <span>Webudvikling</span>
                                <span>UX/UI</span>
                                <span>SEO</span>
                            </span>
                            <h2 className='title is-1 is-spaced'>Sagittis nisl rhoncus mattis urna</h2>
                            <p className='subtitle'>Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>
                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/119/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="right"
                            color="#FF0000"
                        />
                    </div>
                </div>
            </section>

            <section className='section no-padding mb-6'>
                <div className='columns is-8 is-variable is-vcentered is-flex-direction-row-reverse'>
                    <div className="column is-half">
                        <div className="section-text p-6">
                            <span className="section-text-label">
                                <span>Grafisk design</span>
                                <span>Layout</span>
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
                            side="left"
                            color="#0000FF"
                        />
                    </div>
                    
                </div>
            </section>

            <section className='section no-padding mb-6'>
                <div className='columns is-8 is-variable is-vcentered'>
                    <div className="column is-half has-text-right">
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
                            side="right"
                            color="Gold"
                        />
                    </div>
                </div>
            </section>

            <section className='section no-padding mb-6'>
                <div className='columns is-8 is-variable is-vcentered is-flex-direction-row-reverse'>

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
                            side="left"
                            color="SpringGreen"
                        />
                    </div>
                    
                </div>
            </section>
        </main>
    )
}
