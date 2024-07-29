import Image from "next/image";

export default function SponsorCards({ deal, logo }) {
  const { title, description, image, instructions } = deal;

  return (
    <div>
      <Image src={logo} alt="Utah Jazz Note Logo" height={50} width={50} />
      <Image src={image} alt="Utah Jazz Note Logo" height={50} width={50} />
    </div>
  );
}
