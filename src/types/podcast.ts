export interface PodcastEpisode {
  id: string;
  episodeNumber: number;
  title: string;
  guest: string;
  category: string;
  duration: string;
  date: string;
  description: string;
  youtubeId: string;
  featured?: boolean;
}

export interface PodcastSeriesData {
  seriesTitle: string;
  tagline: string;
  description: string;
  channelUrl: string;
  totalEpisodes: number;
  episodes: PodcastEpisode[];
}
