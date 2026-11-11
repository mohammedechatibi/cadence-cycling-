const PHOTOS = [
  {
    label: "Tour de France 2021, stage 14",
    credit: "Filip Bossuyt, CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Stage_14,_2021_TDF10058_pogacar_(51322016774).jpg",
  },
  {
    label: "Tour of Slovenia 2022",
    credit: "Petar Milošević, CC BY-SA 4.0",
    href: "https://commons.wikimedia.org/wiki/File:2022_Tour_of_Slovenia_(Stage_3,_Tadej_Poga%C4%8Dar_celebrating_victory_on_Celje_Castle_v2).jpg",
  },
  {
    label: "Tour de France 2024, stage 21",
    credit: "Wompratte, CC0",
    href: "https://commons.wikimedia.org/wiki/File:Tadej_Pogacar_Tour_de_France_2024_stage_21.jpg",
  },
  {
    label: "Tour de France 2025, stage 14",
    credit: "Skyebble, CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Jonas_Vinegaard_and_Tadej_Pogacar_on_stage_14_of_the_2025_Tour_de_France.jpg",
  },
];

export default function ShopPhotoCredits() {
  return (
    <p className="mt-6 text-[10px] leading-relaxed text-muted-foreground/80">
      Plan photography of Tadej Pogačar:{" "}
      {PHOTOS.map((photo, i) => (
        <span key={photo.href}>
          <a
            href={photo.href}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-foreground hover:underline"
          >
            {photo.label} ({photo.credit})
          </a>
          {i < PHOTOS.length - 1 ? " · " : "."}{" "}
        </span>
      ))}
      Weight-training photography via Unsplash.
    </p>
  );
}