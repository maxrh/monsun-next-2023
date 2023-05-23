"use client"

import { motion, useTransform } from "framer-motion"
import ImageComponent from "./components/ImageComponent"

export default function Home() {
    return (
        <main className="main">

            <div className='hero'>
                <h1 className='title'>Monsun</h1>
                <p className="subtitle is-3">Subtitle 3</p>
            </div>

            <section className='section no-padding mb-8'>

                <div className='columns is-multiline is-8 is-vcentered is-variable mb-8'>

                    <div className="column is-half has-text-right">
                        <div className="p-6">
                            <h2 className='title'>Web</h2>
                            <p>Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>

                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/119/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="right"
                        />
                    </div>

                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/20/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="left"
                        />
                    </div>

                    <div className="column is-half">
                        <div className="p-6">
                            <h2 className='title'>Design</h2>
                            <p>Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>

                    <div className="column is-half has-text-right">
                        <div className="p-6">
                            <h2 className='title'>Billede</h2>
                            <p>Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>

                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/435/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="right"
                        />
                    </div>

                    <div className="column is-half">
                        <ImageComponent 
                            src="https://picsum.photos/id/486/1000/1000"
                            alt="Picture of the author"
                            width={1000}
                            height={1000}
                            side="left"
                        />
                    </div>

                    <div className="column is-half">
                        <div className="p-6">
                            <h2 className='title'>Ord</h2>
                            <p>Duis aute irure dolor in reprehenderit.</p>
                        </div>
                    </div>

                </div>

            </section>
        </main>
    )
}
