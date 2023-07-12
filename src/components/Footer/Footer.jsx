import AssetsSocial from "./AssetsSocial";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <>
      <footer className="footer p-10 bg-slate-50 text-zinc-800">
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover text-lg">Branding</a>
          <a href="/" className="link link-hover text-lg">Design</a>
          <a href="/" className="link link-hover text-lg">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover text-lg">About us</a>
          <a href="/contact" className="link link-hover text-lg">Contact</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover text-lg">Terms of use</a>
          <a href="/" className="link link-hover text-lg">Privacy policy</a>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-zinc-800 text-zinc-50">
        <div className="items-center grid-flow-col">
          <p className="font-normal tracking-wider">
            Design From Envyktl. <br />
            Hak Cipta &copy; {year} All rights reserved.
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <AssetsSocial />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
