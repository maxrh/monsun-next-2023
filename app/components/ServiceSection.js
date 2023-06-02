"use client"

import { useContext, useEffect, useRef } from 'react';
import { useInView  } from 'framer-motion';
import { HiCheckCircle } from "react-icons/hi2";
import ImageComponent from "./ImageComponent"
import styles from './ServiceSection.module.scss'
import ScrollContext from '../context/ScrollContext';

export default function ServiceSection( props ) {

    const { serviceName, service, reverse } = props;

    const { setSectionInView } = useContext(ScrollContext);

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5 });

    useEffect(() => {
        if (isInView) {
            setSectionInView(serviceName);
        }
    }, [isInView]);   

    return ( 
        <section id={serviceName} ref={ref} className={`${styles.container} section`}>
            <div className={`columns is-gapless is-desktop is-flex-wrap-wrap is-vcentered ${reverse ? 'is-flex-direction-row-reverse' : ''}`}>
                <div className={`column is-two-fifths`}>
                    <div className={`${styles.text}`} >
                        <div className="block is-list is-flex is-size-7" >
                            {service?.tags?.map((item, index) => (
                                <span className="mr-3 pr-3 border-r" key={index}>{item}</span>
                            ))}
                        </div>
                      

                        <h1 className='title is-spaced is-4 has-text-primary'>{service?.title ? service.title : "Title"}</h1>
                        <p className='block'>{service?.subtitle ? service.subtitle : "Subtitle"}</p>

                            {/* {service?.list?.length > 0 && (
                                <ul className="block is-list pl-4 pr-6 ">
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
                            )}   */}
                    </div>
                </div>

                <div className={`column is-three-fifths`}>
                    <div className={styles.image + (reverse ? ' ' + styles.reverse : '')}>
                        <ImageComponent 
                            src={service?.imageUrl}
                            alt="Picture of the author"
                            width={1000}
                            height={612}
                            side={reverse ? 'left' : 'right'}
                            color={service?.overlayColor}
                            slides={service?.slides}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}