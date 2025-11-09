function ServicePageTemplate({ title, subtitle, icon, children }) {
    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="w-24 h-24 bg-blue-100 rounded-full shrink-0 flex items-center justify-center p-4 mx-auto md:mx-0">
                        {icon}
                    </div>
                    <div className="text-lg text-gray-600 grow [&_p]:mb-6 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_ul]:space-y-4">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicePageTemplate;