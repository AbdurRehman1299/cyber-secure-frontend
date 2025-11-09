import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

function InfoCard({ title, description }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600">{description}</p>
            </CardContent>
        </Card>
    )
}

export default InfoCard;