import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

function ServiceCard({ icon, title, description, href}){
    return(
        <Link href={href} className="block h-full">
            <Card className="text-center transition-all hover:shadow-lg hover:-translate-y-1 cursor-pointer h-full flex flex-1">
                <CardHeader>
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        {icon}
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                </CardHeader>
                <CardContent className="grow">
                    <p className="text-gray-600">{description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                    <span className="flex items-center text-blue-700 font-medium">
                        Learn more <ArrowRight className="w-4 h-4 ml-2" />
                    </span>
                </CardFooter>
            </Card>
        </Link>
    )
}

export default ServiceCard;