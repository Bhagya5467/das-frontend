export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-700 text-white p-4">Doctor Dashboard</nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
