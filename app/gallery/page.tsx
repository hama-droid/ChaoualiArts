import Image from "next/image";

const images = ["/art1.jpg", "/art2.jpg", "/art3.jpg"];

export default function Gallery() {
  return (
    <main className="p-10 grid md:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <Image key={i} src={img} alt="" width={800} height={800} />
      ))}
    </main>
  );
}
