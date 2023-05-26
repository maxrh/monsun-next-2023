import ServiceSection from "./components/ServiceSection";
import styles from './page.module.scss'

const getServices = async () => {
    const result = await fetch("http://localhost:3000/api/services")
    if(!result.ok) { throw new Error("Failed to Fetch data");}
    return result.json()
}

export default async function Home() {

    const services = await getServices()


    return (
        <main className="main container">
            <div className='hero p-6 mb-6'>
                <h1 className='title is-1'>Monsun</h1>
                <p className="subtitle is-3">Subtitle 3</p>
            </div>
            
            <ServiceSection service={services.web} reverse />
            <ServiceSection service={services.grafik} />
            <ServiceSection service={services.foto} reverse />
            <ServiceSection service={services.ord} />

        </main>
    )
}
