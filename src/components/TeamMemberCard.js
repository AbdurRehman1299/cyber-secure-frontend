import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

function TeamMemberCard({ name, title }){
    return(
        <Card className="text-center">
            <CardHeader>
                <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4 flex items-center justify-center text-gray-500 text-sm">
                    [Photo]
                </div>
                <CardTitle className="text-lg font-bold">{name}</CardTitle>
                <CardDescription>{title}</CardDescription>
            </CardHeader>
        </Card>
    )
}

export default TeamMemberCard;