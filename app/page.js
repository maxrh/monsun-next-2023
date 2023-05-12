import Image from 'next/image'

export default function Home() {
    return (
        <main className="">
            <div className='hero'>
                <h1 className='title is-1'>Dette er forsiden</h1>
                <p class="subtitle is-3">Subtitle 3</p>
            </div>
            <section className='section columns is-8 is-fullwidth is-variable no-padding'>
                <div class="column ">
                    <h2 className='title'>Web</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="column is-flex is-justify-content-center is-align-items-center">
                    <Image 
                        src="https://picsum.photos/500/500"
                        alt="Picture of the author"
                        width={500}
                        height={500}

                    />
                </div>
            </section>
            <section className='section columns is-8 is-fullwidth is-variable no-padding'>
                <div class="column ">
                    <h2 className='title'>Design</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="column is-flex is-justify-content-center is-align-items-center">
                    <Image 
                        src="https://picsum.photos/500/500"
                        alt="Picture of the author"
                        width={500}
                        height={500}

                    />
                </div>
            </section>
            <section className='section columns is-8 is-fullwidth is-variable no-padding'>
                <div class="column ">
                    <h2 className='title'>Billeder</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="column is-flex is-justify-content-center is-align-items-center">
                    <Image 
                        src="https://picsum.photos/500/500"
                        alt="Picture of the author"
                        width={500}
                        height={500}

                    />
                </div>
            </section>
            <section className='section columns is-8 is-fullwidth is-variable no-padding'>
                <div class="column ">
                    <h2 className='title'>Ord</h2>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="column is-flex is-justify-content-center is-align-items-center">
                    <Image 
                        src="https://picsum.photos/500/500"
                        alt="Picture of the author"
                        width={500}
                        height={500}
                        className='image'
                    />
                </div>
            </section>
        </main>
    )
}
