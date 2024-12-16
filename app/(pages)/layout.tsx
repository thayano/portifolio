    
export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* <NavBar /> */}
            <main className="w-full flex justify-center">
                {children}
            </main>
        </div>
    );
}