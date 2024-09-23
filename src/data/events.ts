// data/events.ts
import { Event } from '@/lib/types';
import image1 from "@/images/events/event-1/1.jpeg"

export const events: Event[] = [
  {
    bannerImage: image1,
    images: [image1],
    title: 'Orientation Days',
    slug: "orientation-days",
    description: "The promotional and orientation days are events where we set up stands in the school's café street to meet new students and invite them to join our school life and clubs.",
    text: "Promotional and orientation days are significant events held in our school's café street, where each club has its own stand. During these days, we aim to connect with new students and introduce them to school life and the opportunities our clubs offer. At each club's stand, we engage in one-on-one interactions with new students, answering their questions and providing information about clubs that match their interests. This way, students find an environment where they can express themselves more freely within our school. We also aim to gather new members at our stand and foster connections with others. Promotional and orientation days play a crucial role in strengthening school spirit and helping new students expand their social networks. By providing an enjoyable experience for both new and current students, we help them ease into school life. Through these events, we aim to build a stronger school community and create a dynamic atmosphere that everyone can participate in.",
    date: 'September 16, 2024',
    location: "Haliç University, Café Street"
  }
];
