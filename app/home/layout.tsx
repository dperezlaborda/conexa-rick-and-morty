export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  //TO-DO: HACER UNA LLAMADA INICIAL AL BACK PARA MOSTRAR LOS PERSONAJES 1 PAGINA
  return (
    <div className="bg-red-500">
      Layout Home
      {children}
    </div>
  );
}
