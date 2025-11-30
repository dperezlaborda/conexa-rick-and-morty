export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-red-500">
      Layout Home
      {children}
    </div>
  );
}
