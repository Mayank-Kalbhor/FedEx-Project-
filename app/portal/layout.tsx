import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AntdRegistry>
            <div className="min-h-screen w-full bg-white text-gray-900">
                <main className="container mx-auto py-8 px-4">
                    {children}
                </main>
            </div>
        </AntdRegistry>
    );
}
