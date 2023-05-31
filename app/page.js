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
            {services.web && <ServiceSection serviceName={"web"} service={services.web} reverse />}
            {services.grafik && <ServiceSection serviceName={"grafik"} service={services.grafik} />}
            {services.foto && <ServiceSection serviceName={"foto"} service={services.foto} reverse />}
            {services.ord && <ServiceSection serviceName={"ord"} service={services.ord} />}

        </main>

    )
}
