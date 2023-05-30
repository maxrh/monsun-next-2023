import { HiCheckCircle } from "react-icons/hi2";
import ImageComponent from "./ImageComponent"
import styles from './ServiceSection.module.scss'

export default function ServiceSection({ service, reverse }) {

    return ( 
        <section className={`${styles.container} section is-medium is-flex`}>
            <div className={`columns is-8 is-variable ${reverse ? 'is-flex-direction-row-reverse' : ''}`}>
                <div className={`column `}>
                    <div className="p-6">
                        <div className="block mb-6">   
                            <span className="block is-list is-flex has-text-light has-text-weight-medium mb-3" >
                                {service?.tags?.map((item, index) => (
                                    <span className="mr-3 pr-3 border-r" key={index}>{item}</span>
                                ))}
                            </span>
                        </div>

                        <h4 className='title is-spaced'>{service?.title ? service.title : "Title"}</h4>
                        <p className='block subtitle is-5'>{service?.subtitle ? service.subtitle : "Subtitle"}</p>

                            {service?.list?.length > 0 && (
                                <ul className="block is-list p-4 pr-6 ">
                                    {service.list.map((item, index) => (
                                        <li className="is-flex pb-2 mb-2 border-b" key={index}><HiCheckCircle className="icon mr-2 has-text-light"/><span>{item}</span></li>
                                    ))}
                                </ul>
                            )}

                            {service?.list2?.length > 0 && (
                                <ul className="block is-size-7 has-text-light has-text-weight-medium">
                                    {service.list2.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            )}  
                        
                    </div>
                </div>
                <div className={`column is-three-fifths`}>
                    <ImageComponent 
                        src={service?.imageUrl}
                        alt="Picture of the author"
                        width={1000}
                        height={625}
                        side={reverse ? 'left' : 'right'}
                        color={service?.overlayColor}
                        slides={service?.slides}
                    />
                </div>
            </div>
        </section>
    )
}