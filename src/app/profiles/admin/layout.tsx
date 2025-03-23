export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-red-700 text-white p-4">Admin Panel</nav>
      <main className="p-6">{children}</main>
    </div>
  );
}
