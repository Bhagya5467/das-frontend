export default function DoctorProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex justify-center items-center bg-gray-100 py-8">
        {children}
      </main>
    </div>
  );
}
