export default function Footer() {
  return (
    <footer className="border-t border-dark-800 py-8">
      <div className="container-custom">
        <p className="text-center text-dark-500 text-sm">
          © {new Date().getFullYear()} Kai Gallardo Sánchez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}