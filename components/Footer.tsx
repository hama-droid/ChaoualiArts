import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <Container>
        <div className="py-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-600">
            © {new Date().getFullYear()} Chaouali Arts. All rights reserved.
          </p>
          <p className="text-sm text-neutral-600">
            For commissions and inquiries:{" "}
            <a className="underline" href="mailto:chaoualiarts@gmail.com">
              chaoualiarts@gmail.com
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
