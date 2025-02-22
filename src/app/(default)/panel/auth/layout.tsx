export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return <div className="flex justify-center mt-24">
      {children}
    </div>
  }
  