import React from 'react';

function PageTemplate({ title, subtitle, children}) {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            </div>
            <div>{children}</div>
        </div>
    )
}

export default PageTemplate;