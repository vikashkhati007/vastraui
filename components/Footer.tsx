const Footer = () => {
  return (
    <footer className="text-center text-zinc-500 text-sm py-4">
      <div className="container mx-auto">
        <div>© {new Date().getFullYear()} Vastra UI. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
