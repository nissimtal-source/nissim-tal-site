// Content extracted from nissimtal.com (Wix) — see CONTENT.md for full source notes.
// Local images live in /public/images/<folder>/<file> — reference them as "/images/..." (no "public" prefix).
// All images are self-hosted; none are hotlinked from Wix.

export interface Work {
  title: string;
  details: string;
  image: string;
  alt?: string;
}

export interface SeriesLink {
  label: string;
  href: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  badge?: string;
  meta?: string;
  statement?: string[];
  works: Work[];
  seriesLinks?: SeriesLink[];
  seriesLinksLabel?: string;
}

export interface Site {
  name: string;
  tagline: string;
  email: string;
  heroImage: string;
}

export interface About {
  photo: string;
  bio: string[];
}

export const site: Site = {
  name: "Nissim Tal",
  tagline: "Waiting for the Rolling Stones, Düsseldorf, Germany, 2022, Oil on canvas, 200×100 cm",
  email: "nissimtal@gmail.com",
  heroImage: "/images/hero/hero.jpeg",
};

export const about: About = {
  photo: "/images/about/portrait.jpeg",
  bio: [
    "Born in Jerusalem, I hold a B.A. in Economics and International Relations from the Hebrew University, and M.A. in Education from Columbia University, New York. I completed my art studies at the Bezalel Academy of Art and Design in Jerusalem (1979–1983). I began my professional career in various roles within the Budgets Department of the Ministry of Finance in Jerusalem.",
    "Throughout the years, I have integrated my artistic practice with management roles in cultural and art institutions in Israel. Among other positions, I served as a department director at the Israel Museum in Jerusalem, Deputy Director of the Museum of the Jewish Diaspora (ANU) in Tel Aviv, CEO of the Artists' Colony in Mitzpe Ramon, and for 25 years, I served as the director of the six Haifa Museums.",
    "Since 2019, I have worked as a strategic consultant for the establishment, renewal, and management of museums. Concurrently, I devote most of my time to an extensive artistic practice spanning painting, photography, and video. My works have been presented in comprehensive solo exhibitions, including at the Artists' House in Tel Aviv and the Düsseldorf City Museum (Stadtmuseum) in Germany, which acquired one of my pieces for its permanent collection.",
  ],
};

export const soloExhibitions: ProjectSection[] = [
  {
    id: "solo-exhibition-dusseldorf",
    title: "Passersby, Dancers, and Actors",
    meta: "Solo Exhibition, Stadtmuseum Düsseldorf: February 3, 2026 (Düsseldorf City Museum) · Curator: Dr. Susanne Anna, Director of Stadtmuseum Düsseldorf",
    statement: [
      "This exhibition attempts to explore the transient nature of human interaction within the urban landscape, focusing on the city of Düsseldorf. The works capture casual passersby as they converge in public spaces, theater halls, and open-air performances, transforming the \"accidental everyday moment\" into a subject of contemplation.",
      "Whether documenting a fleeting group of commuters at the train station or an audience participating in an outdoor event, the paintings and photographs present these individuals as what Jean-Paul Sartre regarded as duplications of sorts of the individual, allowing each to exist as a separate entity and all of them as a collective group. The individuals are presented randomly and monotonously, lacking distinct uniqueness and appearing similar, a choice that renders the ordinary everyday into something compelling and attractive.",
      "The exhibition also delves into the dialogue between the audience, actors, and dancers, documenting the shared energy and reactions between them. Developed largely during my artist residency with the Düsseldorf Municipality in Germany, this body of work serves as a visual diary of time, place, and the anonymous crowds that define city life.",
    ],
    works: [],
    seriesLinksLabel: "The exhibition content",
    seriesLinks: [
      { label: "Passersby", href: "#solo-exhibition-artists-house" },
      { label: "Dancers", href: "#dancers" },
      { label: "Performance in the Park", href: "#park-performance" },
    ],
  },
  {
    id: "solo-exhibition-artists-house",
    title: "Passersby",
    meta: "Solo Exhibition, Artists' House Tel Aviv: November 9, 2023 · Curator: Arie Berkowitz",
    statement: [
      "The paintings in the exhibition show anonymous passersby, random instances, and social occurrences. The details are presented in a casual, monotonous way; they seem alike, unexceptional. Indeed, the ordinary, typical, mundane, single moment is sometimes fascinating and compelling. One painting, for example, represents a given moment at a train station – a random group of people that sooner or later will be replaced with another. There is no significant difference between the groups. In other paintings, people wait in a queue to enter a gallery or a Rolling Stones concert.",
      "Maurice Blanchot wrote: \"The everyday is the movement through which the individual exists, apparently unconsciously, in human anonymity. In the everyday we are nameless, possess a particle of personal reality, almost faceless, just as we lack a social definition that would sustain or encompass us... The everyday is not found in our residences, nor in offices, churches, libraries, or museums. If it is found anywhere, it is in the street.\"",
      "Surrounding the random group of people in the paintings are always everyday objects: billboards, video screens, and street signs. They are unrelated to the incidental individual passing by and change according to the situation, enhancing the randomness of everyday regular existence. Despite the anonymity that flattens and unifies the figures when seen from afar, from up close, the paintings reveal details that differentiate each figure; the relationships between figures become palpable: at times, they are couples or teammates. The close gaze exposes their attractive clothes and bodily gestures.",
      "The painting seeks to capture the transient moment of anonymous passersby in the public space. At times, they gather into an accidental group around a shared interest, yet most of them are alienated from their surroundings and act according to an internal hierarchy determined by their place in the queue, their order of arrival, etc.",
      "\"People differ from one another in age and status, and mostly do not speak with one another. They simply exist alongside each other in a multiplicity of solitudes,\" wrote Jean-Paul Sartre.",
      "Unlike photographs, paintings have brushstrokes, and the colorful stains become figures or items to be beheld by the gaze of an attentive viewer. Broad, flowing brushstrokes in parts of the background give the paintings their free spirit.",
    ],
    works: [
      { title: "Waiting for the Rolling Stones", details: "Düsseldorf, Germany, 2022, Oil on canvas, 200×100 cm", image: "/images/passersby/waiting-for-the-rolling-stones.jpeg" },
      { title: "Waiting for the metro 1", details: "Heinrich Heine station, Düsseldorf, Germany, 2023, Oil on canvas, 190×64 cm", image: "/images/passersby/waiting-for-metro-1.jpeg" },
      { title: "Waiting for Metro 2", details: "Heinrich Heine station, Düsseldorf, Germany, 2023, Oil on canvas, 160×64 cm", image: "/images/passersby/waiting-for-metro-2.jpeg" },
      { title: "Immersing in the river", details: "Kassel, Germany, 2023, Oil on canvas, 183×140 cm", image: "/images/passersby/immersing-in-the-river.jpeg" },
      { title: "Highline", details: "New York, 2023, Oil on canvas, 160×85 cm", image: "/images/passersby/highline.jpeg" },
      { title: "Expo", details: "Dubai, 2023, Oil on canvas, 230×90 cm", image: "/images/passersby/expo.jpeg" },
      { title: "Street Performance 2", details: "Manifesta Palermo, 2023, Oil on canvas, 145×140 cm", image: "/images/passersby/street-performance-2.jpeg" },
      { title: "Israel Festival", details: "Jerusalem, 2023, Oil on canvas, 215×100 cm", image: "/images/passersby/israel-festival.jpeg" },
    ],
  },
];

export const projects: ProjectSection[] = [
  {
    id: "passersby",
    title: "Passersby",
    meta: "From the exhibition: Artist House Tel Aviv, Winter 2023 · Curator: Arie Berkowitz",
    statement: [
      "The works center on the perception of the social essence of the street, anonymous passersby, and random occurrences.",
      "The paintings present passersby, who, according to Jean-Paul Sartre, can be regarded as duplications of sorts of the individual, allowing each to exist as a separate entity and all of them as a group. The individuals are presented randomly and monotonously; they lack uniqueness and seem similar, which renders the ordinary everyday into something compelling and attractive.",
      "The painting captures an ordinary transient moment; its figures are regular. For example, an incidental group of people gathering at a given moment in a train station only to be replaced with another anonymous group without much difference.",
      'Maurice Blanchot defines the everyday "as a movement through which the individual exists, human anonymity, with a touch of personal reality, almost faceless. The everyday is not found in our places of residence, in museums, libraries, but in the street. The everyday is in the sense that you pass by it unknowingly, where nothing happens and can surprise us."',
      'According to Sartre, "people differ in age and status, often do not talk to each other, they simply exist side by side in a multitude of solitudes. Loneliness from the group is by choice."',
    ],
    works: [
      { title: "Street Performance 1", details: "Manifesta Palermo, 2023, Oil on canvas, 145×140 cm", image: "/images/passersby/street-performance-1.jpeg" },
      { title: "Street Performance 2", details: "Manifesta Palermo, 2023, Oil on canvas, 145×140 cm", image: "/images/passersby/street-performance-2.jpeg" },
      { title: "Waiting for Kusama", details: "New York, 2023, Oil on canvas, 160×65 cm", image: "/images/passersby/waiting-for-kusama.jpeg" },
      { title: "Waiting for Kusama 2", details: "New York, 2023, Oil on canvas, 63×242 cm", image: "/images/passersby/waiting-for-kusama-2.jpeg" },
      { title: "Highline", details: "New York, 2023, Oil on canvas, 160×85 cm", image: "/images/passersby/highline.jpeg" },
      { title: "Visiting The MOMA", details: "New York, 2023, Oil on canvas, 95×148 cm", image: "/images/passersby/visiting-the-moma.jpeg" },
      { title: "Time Square 1", details: "New York, 2023, Oil on canvas, 120×156 cm", image: "/images/passersby/time-square-1.jpeg" },
      { title: "Time Square 2", details: "New York, 2023, Oil on canvas, 146×112 cm", image: "/images/passersby/time-square-2.jpeg" },
      { title: "Immersing in the river", details: "Kassel, Germany, 2023, Oil on canvas, 183×140 cm", image: "/images/passersby/immersing-in-the-river.jpeg" },
      { title: "Expo", details: "Dubai, 2023, Oil on canvas, 230×90 cm", image: "/images/passersby/expo.jpeg" },
      { title: "Waiting for the metro 1", details: "Heinrich Heine station, Düsseldorf, Germany, 2023, Oil on canvas, 190×64 cm", image: "/images/passersby/waiting-for-metro-1.jpeg" },
      { title: "Waiting for Metro 2", details: "Heinrich Heine station, Düsseldorf, Germany, 2023, Oil on canvas, 160×64 cm", image: "/images/passersby/waiting-for-metro-2.jpeg" },
      { title: "Waiting for Metro 4", details: "Düsseldorf, Germany, 2023, Oil on canvas", image: "/images/passersby/waiting-for-metro-4.jpeg" },
      { title: "Waiting for the Rolling Stones", details: "Düsseldorf, Germany, 2022, Oil on canvas, 200×100 cm", image: "/images/passersby/waiting-for-the-rolling-stones.jpeg" },
      { title: "Israel Festival", details: "Jerusalem, 2023, Oil on canvas, 215×100 cm", image: "/images/passersby/israel-festival.jpeg" },
      { title: "Waiting for Brancusi exhibition", details: "Timișoara, Romania, 2024, Oil on canvas, 115×400 cm", image: "/images/passersby/waiting-for-brancusi-exhibition.jpeg" },
      { title: "Waiting for Metro 3", details: "Heinrich Heine station, Düsseldorf, Germany, 2023, Oil on canvas", image: "/images/passersby/waiting-for-metro-3.jpeg" },
    ],
  },
  {
    id: "park-performance",
    title: "Performance in the Park",
    meta: "Exhibition: City Museum of Düsseldorf, Germany — 3 February 2026",
    works: [
      { title: "Actress", details: "Photograph, 88×40 cm, 2025", image: "/images/park-performance/actress-1.jpeg" },
      { title: "Actress", details: "Photograph, 45×40 cm, 2025", image: "/images/park-performance/actress-2.jpeg" },
      { title: "Actress with audience", details: "Photograph, 88×40 cm, 2025", image: "/images/park-performance/actress-with-audience-1.jpeg" },
      { title: "Actress with audience", details: "Photograph, 88×40 cm, 2025", image: "/images/park-performance/actress-with-audience-2.jpeg" },
      { title: "Actress with audience", details: "Photograph, 88×40 cm, 2025", image: "/images/park-performance/actress-with-audience-3.jpeg" },
    ],
  },
  {
    id: "dancers",
    title: "Dancers",
    meta: "2024 · Tel Aviv",
    works: [
      { title: "Dancer 1", details: "Oil on canvas, 65×62 cm, 2024", image: "/images/dancers/dancer-1.jpeg" },
      { title: "Dancer 2", details: "Oil on canvas, 100×60 cm, 2024", image: "/images/dancers/dancer-2.jpeg" },
      { title: "Dancer 3", details: "Oil on canvas, 61×65 cm, 2024", image: "/images/dancers/dancer-3.jpeg" },
      { title: "Dancer 4", details: "Oil on canvas, 50×66 cm, 2024", image: "/images/dancers/dancer-4.jpeg" },
      { title: "Dancer and man with bottle", details: "Oil on canvas, 100×106 cm, 2024", image: "/images/dancers/dancer-and-man-with-bottle.jpeg" },
      { title: "Audience 1", details: "Oil on canvas, 2024", image: "/images/dancers/audience-1.jpeg" },
    ],
  },
  {
    id: "passersby-dancers-actors",
    title: "Dancers and Actors",
    meta: "Exhibition: City Museum of Düsseldorf, Germany — 3 February 2026",
    statement: [
      "This section of the exhibition presents a casual audience that has come to watch a dance or theater event, whether in an enclosed hall or an open public space.",
      "The works focus on interaction: both between the individuals in the audience themselves, and the special connection created between them and the actors. Since these are fringe or street performances, the interaction is deep and essential",
      "In the paintings and photographs, the figures are shown in close-up in an attempt to capture the fleeting moment, the movement, and the unique postures and gestures of the dancers and actors. The observing audience participates in an interaction with the artists. In contrast to the constantly changing, dynamic performance.",
    ],
    works: [
      { title: "Backstage 1", details: "2025, Oil on canvas", image: "/images/passersby-dancers-actors/backstage-1.jpeg" },
      { title: "Backstage 2", details: "2025, Oil on canvas", image: "/images/passersby-dancers-actors/backstage-2.jpeg" },
      { title: "Backstage 3", details: "2025, Oil on canvas", image: "/images/passersby-dancers-actors/backstage-3.jpeg" },
      { title: "Backstage 4", details: "2025, Oil on canvas", image: "/images/passersby-dancers-actors/backstage-4.jpeg" },
      { title: "Backstage 5", details: "2025, Oil on canvas", image: "/images/passersby-dancers-actors/backstage-5.jpeg" },
      { title: "Night Show", details: "2025, Oil on canvas", image: "/images/passersby-dancers-actors/night-show-1.jpeg" },
      { title: "Rabbit 1", details: "2025, Oil on canvas", image: "/images/passersby-dancers-actors/rabbit-1.jpeg" },
      { title: "Actor 10", details: "Oil on canvas, 70×63 cm, 2025", image: "/images/passersby-dancers-actors/actor-10.jpeg" },
      { title: "Actor 12", details: "Oil on canvas, 75×70 cm, 2025", image: "/images/passersby-dancers-actors/actor-12.jpeg" },
      { title: "Actor 11", details: "Oil on canvas, 75×60 cm, 2025", image: "/images/passersby-dancers-actors/actor-11-a.jpeg" },
      { title: "Actor 11", details: "Oil on canvas, 75×60 cm, 2025", image: "/images/passersby-dancers-actors/actor-11-b.jpeg" },
      { title: "Actor 11", details: "Oil on canvas, 50×60 cm, 2025", image: "/images/passersby-dancers-actors/actor-11-c.jpeg" },
      { title: "Actor 11", details: "Oil on canvas, 72×69 cm, 2025", image: "/images/passersby-dancers-actors/actor-11-d.jpeg" },
      { title: "Actor 11", details: "Oil on canvas, 75×60 cm, 2025", image: "/images/passersby-dancers-actors/actor-11-e.jpeg" },
      { title: "Actor 11", details: "Oil on canvas, 70×69 cm, 2025", image: "/images/passersby-dancers-actors/actor-11-f.jpeg" },
      { title: "Actor 11", details: "Oil on canvas, 72×65 cm, 2025", image: "/images/passersby-dancers-actors/actor-11-g.jpeg" },
    ],
  },
  {
    id: "the-king",
    title: "The King",
    meta: "2024 · Haifa",
    works: [
      { title: "The King 1", details: "Oil on canvas, 45×48 cm, 2024", image: "/images/king/king-1.jpeg" },
      { title: "The King 2", details: "Oil on canvas, 45×48 cm, 2024", image: "/images/king/king-2.jpeg" },
      { title: "The King 3", details: "Oil on canvas, 45×48 cm, 2024", image: "/images/king/king-3.jpeg" },
      { title: "The King 4", details: "Oil on canvas, 45×48 cm, 2024", image: "/images/king/king-4.jpeg" },
      { title: "The King 5", details: "Oil on canvas, 45×48 cm, 2024", image: "/images/king/king-5.jpeg" },
      { title: "The King 6", details: "Oil on canvas, 45×48 cm, 2024", image: "/images/king/king-6.jpeg" },
    ],
  },
  {
    id: "belly-dancer",
    title: "Belly Dancer",
    meta: "2025 · Tel Aviv",
    works: [
      { title: "Belly Dancer 1", details: "Oil on canvas, 50×70 cm, 2025", image: "/images/belly-dancer/belly-dancer-1.jpeg" },
      { title: "Belly Dancer 2", details: "Oil on canvas, 50×35 cm, 2025", image: "/images/belly-dancer/belly-dancer-2.jpeg" },
      { title: "Belly Dancer 3", details: "Oil on canvas, 42×53 cm, 2025", image: "/images/belly-dancer/belly-dancer-3.jpeg" },
      { title: "Belly Dancer 4", details: "Oil on canvas, 43×55 cm, 2025", image: "/images/belly-dancer/belly-dancer-4.jpeg" },
      { title: "Belly Dancer 5", details: "Oil on canvas, 43×51 cm, 2025", image: "/images/belly-dancer/belly-dancer-5.jpeg" },
      { title: "Belly Dancer 6", details: "Oil on canvas, 43×55 cm, 2025", image: "/images/belly-dancer/belly-dancer-6.jpeg" },
      { title: "Belly Dancer 7", details: "Oil on canvas, 60×80 cm, 2025", image: "/images/belly-dancer/belly-dancer-7.jpeg" },
      { title: "Belly Dancer 8", details: "Oil on canvas, 33×55 cm, 2025", image: "/images/belly-dancer/belly-dancer-8.jpeg" },
      { title: "Belly Dancer 9", details: "Oil on canvas, 50×70 cm, 2025", image: "/images/belly-dancer/belly-dancer-9.jpeg" },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    meta: "2025 · Tel Aviv",
    works: [
      { title: "Performance 1", details: "Oil on canvas, 73×54 cm, 2025", image: "/images/performance/performance-1.jpeg" },
      { title: "Performance 2", details: "Oil on canvas, 65×70 cm, 2025", image: "/images/performance/performance-2.jpeg" },
    ],
  },
];
