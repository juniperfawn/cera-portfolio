export type ProjectGalleryItem =
  | {
      type: "image";
      src: string;
      alt?: string;
    }
  | {
      type: "video";
      src: string;
      poster?: string;
      autoPlay?: boolean;
      loop?: boolean;
    }
  | {
    type: "custom";
    block: string;
    props?: Record<string, unknown>;
    };

export type ProjectProps = {
    slug: string;
    title: string;
    year: string | number;
    techStack: string[];
    caption: string,
    roles: string[];
    liveUrl?: string;
    buttonColor: string;
    buttonTextColor?: string;
    headerImage: string;
    projectGallery: ProjectGalleryItem[];
  };
  