import Image from "next/image";
import Link from "next/link";

export function FounderSection() {
  return (
    <section className="founder-section" id="story">
      <div className="founder-image-wrap">
        <Image
          src="/assets/photos/troy_koltermann Headshot.JPG"
          alt="Troy Koltermann, founder of Combat 2 Camera"
          width={520}
          height={720}
        />
      </div>
      <div className="founder-copy">
        <p className="eyebrow">Founder Story</p>
        <h2>Built from lived experience.</h2>
        <p>
          After multiple deployments to Iraq, Troy R. Koltermann came home
          carrying the weight of combat and navigating PTSD. Traditional care
          helped in some ways, but photography became the practice that helped
          him slow down, step outside, and focus on what was right in front of
          him.
        </p>
        <p>
          What started as quiet moments with a camera became a way forward. It
          led him back into connection, into education, into award-winning
          photography, and ultimately into building Combat 2 Camera so other
          veterans could find healing, community, and purpose one frame at a
          time.
        </p>
        <Link className="text-link" href="/founder-story">
          Read Troy&apos;s full story
        </Link>
      </div>
    </section>
  );
}
