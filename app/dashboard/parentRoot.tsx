export default function ParentRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p>Nam Hải</p>
      <div>{children}</div>
    </div>
  );
}
