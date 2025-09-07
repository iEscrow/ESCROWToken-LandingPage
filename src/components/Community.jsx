import { Trans } from "react-i18next";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselDots,
//   CarouselItem,
// } from "./ui/Carousel";
// import { communityComments } from "../lib/data/communityComments";
// import CommentCard from "./ui/CommentCard";
// import Decoration from "../assets/images/community.png";
import SocialButton from "./ui/SocialButton";

export default function Community({ t }) {
  return (
    <section
      id="community"
      className="relative container mx-auto text-center my-16 md:my-24 lg:my-40"
      aria-labelledby="community-title"
    >
      <h2
        id="community-title"
        className="gradient-text text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold flex justify-center gap-2"
      >
        {t("Home.Community.title")}
      </h2>

      {/* <div className="relative mt-10 md:mt-12 lg:mt-16 max-w-4xl mx-auto">
        <Carousel aria-label="Community testimonials">
          <CarouselContent>
            {communityComments.map((commentPair, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center justify-center gap-6 md:gap-10 p-4 min-h-[300px] sm:min-h-[350px] cursor-grab active:cursor-grabbing">
                  {commentPair.map((comment, idx) => (
                    <CommentCard
                      key={idx}
                      commentKey={comment.commentKey}
                      authorKey={comment.authorKey}
                      t={t}
                    />
                  ))}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="h-20 flex justify-center items-center gap-3">
            <CarouselDots />
          </div>
        </Carousel>

        <img
          src={Decoration}
          alt="decoracion gradiente de colores violetas"
          draggable="false"
          loading="lazy"
          className="w-full absolute bottom-0 left-1/2 -translate-x-1/2 -z-10"
        />
      </div> */}

      <p className="text-text-secondary my-6 lg:mt-20 lg:mb-16">
        <Trans
          i18nKey="Home.Community.cta"
          components={[
            <a
              href="https://t.me/+HByTVekbjfJiMzdh"
              target="_blank"
              className="text-primary underline hover:text-primary-hover"
              aria-label="Contact us"
            />,
          ]}
        />
      </p>

      <div className="flex justify-center gap-12 flex-wrap max-w-[300px] mx-auto md:max-w-full">
        <SocialButton
          href="https://www.facebook.com/profile.php?id=61580173739629"
          title="Facebook"
          icon="facebook"
        />
        <SocialButton
          href="https://www.instagram.com/iescrowcrypto"
          title="instagram"
          icon="instagram"
        />
        <SocialButton
          href="https://x.com/iEscrowcrypto"
          title="Twitter"
          icon="twitter"
        />
        <SocialButton
          href="https://www.tiktok.com/@iescrowcrypto"
          title="Tiktok"
          icon="tiktok"
        />
        <SocialButton
          href="https://www.youtube.com/@iEscrowcrypto"
          title="Youtube"
          icon="youtube"
        />
        <SocialButton
          href="https://t.me/+HByTVekbjfJiMzdh"
          title="Telegram"
          icon="telegram"
        />
      </div>
    </section>
  );
}
