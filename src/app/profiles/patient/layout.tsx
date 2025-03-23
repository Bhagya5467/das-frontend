export default function PatientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-green-700 text-white p-4">Patient Dashboard</nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
