import Image from "next/image";

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
          Combat 2 Camera was founded from the lived experience of a combat
          veteran navigating PTSD and rediscovering purpose through photography.
          What began as a personal part of healing is becoming a pathway for
          other veterans to reconnect with creativity, community, and identity.
        </p>
        <p>
          The goal is not simply to teach camera settings. It is to create a
          space where veterans can slow down, observe, make meaning, and share
          work they are proud to put into the world.
        </p>
      </div>
    </section>
  );
}
