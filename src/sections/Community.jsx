import { Trans } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../components/Carousel";
import { communityComments } from "../lib/data/communityComments";
import CommentCard from "../components/CommentCard";

export default function Community({ t }) {
  return (
    <section
      id="community"
      className="relative text-center mt-16 md:mt-24 lg:mt-32"
      aria-labelledby="community-title"
    >
      <h2
        id="community-title"
        className="gradient-text text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold flex justify-center gap-2"
      >
        {t("Home.Community.title")}
      </h2>

      <div className="mt-10 md:mt-12 lg:mt-16 max-w-4xl mx-auto">
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
        </Carousel>
      </div>

      <p className="text-text-secondary mt-6">
        <Trans
          i18nKey="Home.Community.cta"
          components={[
            <a
              href="/#"
              className="text-primary underline hover:text-primary-dark"
              aria-label="Contact us"
            />,
            <a
              href="/3"
              className="text-primary underline hover:text-primary-dark"
              aria-label="Join our community"
            />,
          ]}
        />
      </p>
    </section>
  );
}
