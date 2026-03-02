export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="max-w-2xl mx-auto pt-24 pb-16 px-6">
            {children}
        </div>
    );
}
