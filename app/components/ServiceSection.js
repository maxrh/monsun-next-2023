import { HiCheckCircle } from "react-icons/hi2";
import ImageComponent from "./ImageComponent"

export default function ServiceSection({ service, reverse }) {

    return ( 
        <section className="section pb-6 mb-6 is-flex">
            <div className={`columns is-8 pb-6 is-variable ${reverse ? 'is-flex-direction-row-reverse' : ''}`}>
                <div className={`column is-half pb-6 `}>
                    <div className="p-6">
                        <div className="block mb-6">   
                            <span className="block is-list is-flex has-text-light has-text-weight-medium mb-3" >
                                {service?.tags?.map((item, index) => (
                                    <span className="mr-3 pr-3 border-r" key={index}>{item}</span>
                                ))}
                            </span>
                        </div>

                        <h1 className='title is-spaced'>{service?.title ? service.title : "Title"}</h1>
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
                <div className={`column is-half pb-6 `}>
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