export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style type="text/css">
        {`
            body { background: black; padding: 10px; }
        `}
      </style>
      {children}
    </>
  );
}
