import { HiCheckCircle } from "react-icons/hi2";
import ImageComponent from "./ImageComponent"
import styles from './ServiceSection.module.scss'

export default function ServiceSection({ service, reverse }) {


    return (
        <section className={styles.section}>
            <div className={`columns is-8 is-variable ${reverse ? 'is-flex-direction-row-reverse' : ''}`}>
                <div className="column is-half">
                    <div className={`${styles.sectionText} p-6`}>
                        <span className={styles.sectionTextLabel}>
                            {service?.tags?.map((item, index) => (
                                <span className="list-item" key={index}>{item}</span>
                            ))}
                        </span>

                        <h2 className='title is-1 is-spaced mb-6'>{service?.title ? service.title : "Title"}</h2>
                        <p className='subtitle is-5 mb-6'>{service?.subtitle ? service.subtitle : "Subtitle"}</p>

                            {service?.list?.length > 0 && (
                                <ul className="list mb-6">
                                    {service.list.map((item, index) => (
                                        <li className="list-item" key={index}><span><HiCheckCircle className="icon"/> {item}</span></li>
                                    ))}
                                </ul>
                            )}

                            {service?.list2?.length > 0 && (
                                <ul className="is-size-7">
                                    {service.list2.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}  
                        
                    </div>
                </div>
                <div className="column is-half">
                    <ImageComponent 
                        src={service?.imageUrl}
                        alt="Picture of the author"
                        width={1000}
                        height={1000}
                        side={reverse ? 'left' : 'right'}
                        color={service?.overlayColor}
                    />
                </div>
            </div>
        </section>
    )
}