"use client";

import { useParams, useRouter } from "next/navigation";
import { events } from "@/data/events";
import Image from "next/image";
import { Event } from "@/lib/types";
import Title from "@/components/title";
import NotFoundPage from "../not-found";
import JoinOurClub from "@/components/join-our-club";

const EventPage: React.FC = () => {
  const { eventName } = useParams();
  const router = useRouter();

  const getEventByName = (name: string | undefined): Event | null => {
    if (!name) return null;
    return (
      events.find(
        (event) => event.slug.replace(/\s+/g, "-").toLowerCase() === name
      ) || null
    );
  };

  const event: Event | null = getEventByName(eventName as string | undefined);

  if (!event) {
    return (
      <NotFoundPage />
    );
  }

  return (
    <div className="container mx-auto my-8">
      <Title className="text-center mb-2">{event.title}</Title>
      <Image
        src={event.bannerImage}
        alt={event.title}
        className="w-2/3 md:w-1/2 h-auto mx-auto rounded-lg"
      />

      <Title size="small" className="text-center">{event.date} | {event.location}</Title>
      <div className="text-center">
      <p className="text-gray-700 mt-2 text-left mx-auto max-w-2xl">{event.description}</p>
      <p className="text-gray-600 mt-4 text-left mx-auto max-w-2xl">{event.text}</p>

      </div>

      <Title size="medium" className="text-center my-10">Event Gallery</Title>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {event.images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Gallery image ${index + 1}`}
            className="w-full h-auto rounded"
          />
        ))}
      </div>
      <JoinOurClub />
    </div>
  );
};

export default EventPage;
