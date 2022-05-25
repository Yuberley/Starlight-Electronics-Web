import React from 'react';

export const ComponenteView = ({ service, index }) => {
	return (
        <section className="py-20 animate__animated animate__fadeIn">
            <div className="container items-center max-w-screen-xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16 4xl:px-0">
                <div className="flex flex-wrap items-center -mx-3 4xl:-mx-40">
                    <div className={`w-full px-3 mb-12 lg:w-1/2 order-0 lg:${ (index % 2) == 0 ? 'order-2' : 'order-1' } lg:mb-0`}>
                        <img className="mx-auto sm:max-w-sm lg:max-w-full rounded-lg" src={ service.image } alt="feature image" />
                    </div>
                    <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
                        <div className="w-full lg:max-w-md mx-auto">
                            <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading uppercase">{ service.title }</h2>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                { service.description1 }
                            </p>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                { service.description2 }
                            </p>
                            <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6 text-justify">
                                { service.description3 }
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
};