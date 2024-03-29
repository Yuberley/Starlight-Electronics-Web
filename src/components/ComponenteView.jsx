import React from 'react';

export const ComponenteView = ({ service, index }) => {
	return (
        <section className="py-20 animate__animated animate__fadeIn border-b-2 sm:border-none">
            <fieldset className="container items-center max-w-screen-xl 4xl:max-w-screen-2xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16 4xl:px-10 sm:border sm:border-dashed sm:rounded-xl sm:pt-8 sm:pb-16">
                <legend className='sm:px-10 text-center mb-5 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading uppercase'><h3>{ service.title }</h3></legend>
                <div className="flex flex-wrap items-center -mx-3 4xl:mx-0">
                    <div className={`w-full px-3 mb-12 lg:w-1/2 order-0 ${ (index % 2) == 0 ? 'lg:order-2' : 'lg:order-1' } lg:mb-0`}>
                        <img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg hover:shadow-2xl hover:scale-110 transition duration-300" src={ service.image } alt={`Servicio de ${service.title}`} title={`Imagen de ${service.title}`} />
                    </div>
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md mx-auto 4xl:text-xl">
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                { service.description1 }
                            </p>
                            { 
                                service.title == 'Amplificación de audio' ?
                                    <img src={ service.description2 } className="h-24" alt="logo DAS" title='das audio' />
                                :
                                    <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                        { service.description2 }
                                    </p>
                            }
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                { service.description3 }
                            </p>
                            
                        </div>
                    </div>
                </div>        
            </fieldset>
        </section>
	);
};
