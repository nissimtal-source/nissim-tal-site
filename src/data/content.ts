// Content extracted from nissimtal.com (Wix) — see CONTENT.md for full source notes.
// Local images live in /public/images/<folder>/<file> — reference them as "/images/..." (no "public" prefix).
// Remote Wix images are kept as fallback for works not yet re-photographed locally.

export interface Work {
  title: string;
  details: string;
  image: string;
  alt?: string;
}

export interface ProjectSection {
  id: string;
  title: string;
  badge?: string;
  meta?: string;
  statement?: string[];
  works: Work[];
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
  tagline:
    "Oil paintings of passersby, dancers and actors — anonymous figures caught in ordinary, transient moments.",
  email: "nissimtal@gmail.com",
  heroImage:
    "https://static.wixstatic.com/media/6ac8cb_10ad041831b6418f948b5b6e8c48d8a9~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_10ad041831b6418f948b5b6e8c48d8a9~mv2.jpg",
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
    meta: "Solo Exhibition, Stadtmuseum Düsseldorf (Düsseldorf City Museum) · Curator: Dr. Susanne Anna, Director of Stadtmuseum Düsseldorf",
    statement: [
      "This exhibition attempts to explore the transient nature of human interaction within the urban landscape, focusing on the city of Düsseldorf. The works capture casual passersby as they converge in public spaces, theater halls, and open-air performances, transforming the \"accidental everyday moment\" into a subject of contemplation.",
      "Whether documenting a fleeting group of commuters at the train station or an audience participating in an outdoor event, the paintings and photographs present these individuals as what Jean-Paul Sartre regarded as duplications of sorts of the individual, allowing each to exist as a separate entity and all of them as a collective group. The individuals are presented randomly and monotonously, lacking distinct uniqueness and appearing similar, a choice that renders the ordinary everyday into something compelling and attractive.",
      "The exhibition also delves into the dialogue between the audience, actors, and dancers, documenting the shared energy and reactions between them. Developed largely during my artist residency with the Düsseldorf Municipality in Germany, this body of work serves as a visual diary of time, place, and the anonymous crowds that define city life.",
    ],
    works: [],
  },
  {
    id: "solo-exhibition-artists-house",
    title: "Passersby",
    meta: "Solo Exhibition, Artists' House Tel Aviv · Curator: Arie Berkowitz",
    statement: [
      "The paintings in the exhibition show anonymous passersby, random instances, and social occurrences. The details are presented in a casual, monotonous way; they seem alike, unexceptional. Indeed, the ordinary, typical, mundane, single moment is sometimes fascinating and compelling. One painting, for example, represents a given moment at a train station – a random group of people that sooner or later will be replaced with another. There is no significant difference between the groups. In other paintings, people wait in a queue to enter a gallery or a Rolling Stones concert.",
      "Maurice Blanchot wrote: \"The everyday is the movement through which the individual exists, apparently unconsciously, in human anonymity. In the everyday we are nameless, possess a particle of personal reality, almost faceless, just as we lack a social definition that would sustain or encompass us... The everyday is not found in our residences, nor in offices, churches, libraries, or museums. If it is found anywhere, it is in the street.\"",
      "Surrounding the random group of people in the paintings are always everyday objects: billboards, video screens, and street signs. They are unrelated to the incidental individual passing by and change according to the situation, enhancing the randomness of everyday regular existence. Despite the anonymity that flattens and unifies the figures when seen from afar, from up close, the paintings reveal details that differentiate each figure; the relationships between figures become palpable: at times, they are couples or teammates. The close gaze exposes their attractive clothes and bodily gestures.",
      "The painting seeks to capture the transient moment of anonymous passersby in the public space. At times, they gather into an accidental group around a shared interest, yet most of them are alienated from their surroundings and act according to an internal hierarchy determined by their place in the queue, their order of arrival, etc.",
      "\"People differ from one another in age and status, and mostly do not speak with one another. They simply exist alongside each other in a multiplicity of solitudes,\" wrote Jean-Paul Sartre.",
      "Unlike photographs, paintings have brushstrokes, and the colorful stains become figures or items to be beheld by the gaze of an attentive viewer. Broad, flowing brushstrokes in parts of the background give the paintings their free spirit.",
    ],
    works: [],
  },
];

export const projects: ProjectSection[] = [
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
      {
        title: "Waiting for the metro 1",
        details: "Heinrich Heine station, Düsseldorf, Germany, 2023 — Oil on canvas, 190×64 cm",
        image:
          "https://static.wixstatic.com/media/6ac8cb_9aef37a615cf4bf68164fd6ce5aefc12~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_9aef37a615cf4bf68164fd6ce5aefc12~mv2.jpg",
      },
      { title: "Backstage 1", details: "2025 — Oil on canvas", image: "/images/passersby-dancers-actors/backstage-1.jpeg" },
      { title: "Backstage 2", details: "2025 — Oil on canvas", image: "/images/passersby-dancers-actors/backstage-2.jpeg" },
      { title: "Backstage 3", details: "2025 — Oil on canvas", image: "/images/passersby-dancers-actors/backstage-3.jpeg" },
      { title: "Backstage 4", details: "2025 — Oil on canvas", image: "/images/passersby-dancers-actors/backstage-4.jpeg" },
      { title: "Backstage 5", details: "2025 — Oil on canvas", image: "/images/passersby-dancers-actors/backstage-5.jpeg" },
      { title: "Night Show", details: "2025 — Oil on canvas", image: "/images/passersby-dancers-actors/night-show-1.jpeg" },
      { title: "Rabbit 1", details: "2025 — Oil on canvas", image: "/images/passersby-dancers-actors/rabbit-1.jpeg" },
      { title: "Rabbit 2", details: "2025 — Oil on canvas", image: "/images/passersby-dancers-actors/rabbit-2.jpeg" },
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
    id: "passersby",
    title: "Passersby",
    meta: "Exhibition: Artist House Tel Aviv, 2023 · Curator: Arie Berkowitz",
    statement: [
      "The works center on the perception of the social essence of the street, anonymous passersby, and random occurrences.",
      "The paintings present passersby, who, according to Jean-Paul Sartre, can be regarded as duplications of sorts of the individual, allowing each to exist as a separate entity and all of them as a group. The individuals are presented randomly and monotonously; they lack uniqueness and seem similar, which renders the ordinary everyday into something compelling and attractive.",
      "The painting captures an ordinary transient moment; its figures are regular. For example, an incidental group of people gathering at a given moment in a train station only to be replaced with another anonymous group without much difference.",
      'Maurice Blanchot defines the everyday "as a movement through which the individual exists, human anonymity, with a touch of personal reality, almost faceless. The everyday is not found in our places of residence, in museums, libraries, but in the street. The everyday is in the sense that you pass by it unknowingly, where nothing happens and can surprise us."',
      'According to Sartre, "people differ in age and status, often do not talk to each other, they simply exist side by side in a multitude of solitudes. Loneliness from the group is by choice."',
    ],
    works: [
      { title: "Street Performance 1", details: "Manifesta Palermo, 2023 — Oil on canvas, 145×140 cm", image: "https://static.wixstatic.com/media/6ac8cb_5f38355fdb934f9cbf277c8b63f65a50~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_5f38355fdb934f9cbf277c8b63f65a50~mv2.jpg" },
      { title: "Street Performance 2", details: "Manifesta Palermo, 2023 — Oil on canvas, 145×140 cm", image: "https://static.wixstatic.com/media/6ac8cb_38a13144c67648cc8ede5d7ca2d5b558~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_38a13144c67648cc8ede5d7ca2d5b558~mv2.jpg" },
      { title: "Waiting for Kusama", details: "New York, 2023 — Oil on canvas, 160×65 cm", image: "https://static.wixstatic.com/media/6ac8cb_1e38e47c6a12428dab5df4c1554bbbfc~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_1e38e47c6a12428dab5df4c1554bbbfc~mv2.jpg" },
      { title: "Waiting for Kusama 2", details: "New York, 2023 — Oil on canvas, 63×242 cm", image: "https://static.wixstatic.com/media/6ac8cb_98cb89361dcd4aeca854cca886f9ebca~mv2.jpg/v1/fit/w_1920,h_941,q_90,enc_avif,quality_auto/6ac8cb_98cb89361dcd4aeca854cca886f9ebca~mv2.jpg" },
      { title: "Highline", details: "New York, 2023 — Oil on canvas, 160×85 cm", image: "https://static.wixstatic.com/media/6ac8cb_f608057618464846b03e6bf3cffc4977~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_f608057618464846b03e6bf3cffc4977~mv2.jpg" },
      { title: "Visiting The MOMA", details: "New York, 2023 — Oil on canvas, 95×148 cm", image: "https://static.wixstatic.com/media/6ac8cb_0c505c14acce48b3af7b26a0168515b3~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_0c505c14acce48b3af7b26a0168515b3~mv2.jpg" },
      { title: "Time Square 1", details: "New York, 2023 — Oil on canvas, 120×156 cm", image: "https://static.wixstatic.com/media/6ac8cb_1aa5615598c345a58f6f46914edb847a~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_1aa5615598c345a58f6f46914edb847a~mv2.jpg" },
      { title: "Time Square 2", details: "New York, 2023 — Oil on canvas, 120×156 cm", image: "https://static.wixstatic.com/media/6ac8cb_e4092df0c2dd49baa1db4319bb566760~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_e4092df0c2dd49baa1db4319bb566760~mv2.jpg" },
      { title: "Immersing in the river", details: "Kassel, Germany, 2023 — Oil on canvas, 183×140 cm", image: "https://static.wixstatic.com/media/6ac8cb_a6072930269e43afa0077a19aabab7fa~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_a6072930269e43afa0077a19aabab7fa~mv2.jpg" },
      { title: "Expo", details: "Dubai, 2023 — Oil on canvas, 230×90 cm", image: "https://static.wixstatic.com/media/6ac8cb_ea16a324706b4f8f854ec402fb950979~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_ea16a324706b4f8f854ec402fb950979~mv2.jpg" },
      { title: "Waiting for the metro 1", details: "Heinrich Heine station, Düsseldorf, Germany, 2023 — Oil on canvas, 190×64 cm", image: "https://static.wixstatic.com/media/6ac8cb_9aef37a615cf4bf68164fd6ce5aefc12~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_9aef37a615cf4bf68164fd6ce5aefc12~mv2.jpg" },
      { title: "Waiting for Metro 2", details: "Heinrich Heine station, Düsseldorf, Germany, 2023 — Oil on canvas, 160×64 cm", image: "https://static.wixstatic.com/media/6ac8cb_829b6c9851bd4dc580dbcb3c5fbcb076~mv2.jpg/v1/fit/w_1868,h_1051,q_90,enc_avif,quality_auto/6ac8cb_829b6c9851bd4dc580dbcb3c5fbcb076~mv2.jpg" },
      { title: "Waiting for Metro 4", details: "Düsseldorf, Germany, 2023 — Oil on canvas", image: "https://static.wixstatic.com/media/6ac8cb_66588e57c04c416e85c0dedeceef83be~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_66588e57c04c416e85c0dedeceef83be~mv2.jpg" },
      { title: "Waiting for the Rolling Stones", details: "Düsseldorf, Germany, 2022 — Oil on canvas, 200×100 cm", image: "https://static.wixstatic.com/media/6ac8cb_abdf01b7d4384b99a10acc335489571e~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_abdf01b7d4384b99a10acc335489571e~mv2.jpg" },
      { title: "Israel Festival", details: "Jerusalem, 2023 — Oil on canvas, 215×100 cm", image: "https://static.wixstatic.com/media/6ac8cb_77fd0956970d4670978ab1af24af5afe~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_77fd0956970d4670978ab1af24af5afe~mv2.jpg" },
      { title: "Waiting for Brancusi exhibition", details: "Timișoara, Romania, 2024 — Oil on canvas, 115×400 cm", image: "https://static.wixstatic.com/media/6ac8cb_1f2201f51fcc426982bdbc8a3a50fa9f~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_1f2201f51fcc426982bdbc8a3a50fa9f~mv2.jpg" },
      { title: "Waiting for Metro 3", details: "Heinrich Heine station, Düsseldorf, Germany, 2023 — Oil on canvas", image: "https://static.wixstatic.com/media/6ac8cb_a0792fd92fdc425e90ff7b565a460229~mv2.jpg/v1/fit/w_1920,h_975,q_90,enc_avif,quality_auto/6ac8cb_a0792fd92fdc425e90ff7b565a460229~mv2.jpg" },
    ],
  },
  {
    id: "dancers",
    title: "Dancers",
    meta: "2024 · Haifa",
    works: [
      { title: "Dancer 1", details: "Oil on canvas, 62×65 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_9cb644a070a84000a1c0786677bd7cae~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_9cb644a070a84000a1c0786677bd7cae~mv2.jpg" },
      { title: "Dancer 2", details: "Oil on canvas, 100×60 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_c9597ee2a1ec4d05b37949cae2ff4c33~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_c9597ee2a1ec4d05b37949cae2ff4c33~mv2.jpg" },
      { title: "Dancer 3", details: "Oil on canvas, 61×65 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_af5918aece2e43738176f6bce9853261~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_af5918aece2e43738176f6bce9853261~mv2.jpg" },
      { title: "Dancer 4", details: "Oil on canvas, 50×66 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_78d9b224815b425cb8bde607c8aed695~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_78d9b224815b425cb8bde607c8aed695~mv2.jpg" },
      { title: "Dancer and man with bottle", details: "Oil on canvas, 106×104 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_e327c81245cb41a9854629eb882484c6~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_e327c81245cb41a9854629eb882484c6~mv2.jpg" },
      { title: "Audience", details: "Oil on canvas, 2024", image: "https://static.wixstatic.com/media/6ac8cb_bf366575516446269857343ee7eb3689~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_bf366575516446269857343ee7eb3689~mv2.jpg" },
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
    id: "the-actors",
    title: "The Actors",
    meta: "2024 · Haifa",
    works: [
      { title: "Actor 1", details: "Oil on canvas, 60×75 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_82c56e3a5f83456f8426cee8c381c251~mv2.jpg/v1/fit/w_1860,h_1047,q_90,enc_avif,quality_auto/6ac8cb_82c56e3a5f83456f8426cee8c381c251~mv2.jpg" },
      { title: "Actor 2", details: "Oil on canvas, 60×75 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_864130f914ea4bc3b4e7b2f174a3011f~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_864130f914ea4bc3b4e7b2f174a3011f~mv2.jpg" },
      { title: "Actor 3", details: "Oil on canvas, 60×75 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_c511014c76dc46e1b40ed2ffb3581b42~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_c511014c76dc46e1b40ed2ffb3581b42~mv2.jpg" },
      { title: "Actor 4", details: "Oil on canvas, 60×75 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_4d5cf97d336e4b41b2812ec5c71333e2~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_4d5cf97d336e4b41b2812ec5c71333e2~mv2.jpg" },
      { title: "Actors 5", details: "Oil on canvas, 60×75 cm, 2024", image: "https://static.wixstatic.com/media/6ac8cb_6e18e36a9d194e55a2dfd738e0cd0a79~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_6e18e36a9d194e55a2dfd738e0cd0a79~mv2.jpg" },
    ],
  },
  {
    id: "belly-dancer",
    title: "Belly Dancer",
    meta: "2025 · Tel Aviv",
    works: [
      { title: "Belly Dancer 1", details: "Oil on canvas, 50×70 cm, 2025", image: "/images/belly-dancer/belly-dancer-1.jpeg" },
      { title: "Belly Dancer 2", details: "Oil on canvas, 35×50 cm, 2025", image: "/images/belly-dancer/belly-dancer-2.jpeg" },
      { title: "Belly Dancer 3", details: "Oil on canvas, 43×53 cm, 2025", image: "/images/belly-dancer/belly-dancer-3.jpeg" },
      { title: "Belly Dancer 4", details: "Oil on canvas, 43×55 cm, 2025", image: "/images/belly-dancer/belly-dancer-4.jpeg" },
      { title: "Belly Dancer 5", details: "Oil on canvas, 43×51 cm, 2025", image: "/images/belly-dancer/belly-dancer-5.jpeg" },
      { title: "Belly Dancer 6", details: "Oil on canvas, 43×55 cm, 2025", image: "/images/belly-dancer/belly-dancer-6.jpeg" },
      { title: "Belly Dancer 7", details: "Oil on canvas, 60×80 cm, 2025", image: "/images/belly-dancer/belly-dancer-7.jpeg" },
      { title: "Belly Dancer 8", details: "Oil on canvas, 33×54 cm, 2025", image: "/images/belly-dancer/belly-dancer-8.jpeg" },
      { title: "Belly Dancer 9", details: "Oil on canvas, 50×70 cm, 2025", image: "/images/belly-dancer/belly-dancer-9.jpeg" },
    ],
  },
  {
    id: "performance",
    title: "Performance",
    meta: "2025 · Tel Aviv",
    works: [
      { title: "Performance 1", details: "Oil on canvas, 75×54 cm, 2025", image: "https://static.wixstatic.com/media/6ac8cb_509048495090498aa6d893c2c123dac5~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_509048495090498aa6d893c2c123dac5~mv2.jpg" },
      { title: "Performance 2", details: "Oil on canvas, 65×80 cm, 2025", image: "https://static.wixstatic.com/media/6ac8cb_4b66da34d876443e9d79002fa61e6480~mv2.jpg/v1/fit/w_1920,h_1081,q_90,enc_avif,quality_auto/6ac8cb_4b66da34d876443e9d79002fa61e6480~mv2.jpg" },
    ],
  },
];
