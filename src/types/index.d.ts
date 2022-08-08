interface Fonts {
  regular: string;
  medium: string;
  semiBold: string;
  bold: string;
}

interface Colors {
  black: string;
  halfBlack: string;
  white: string;
  halfWhite: string;
  red: string;
  grey: string;
  monalisa: string;
  chardonnay: string;
  primrose: string;
  spray: string;
  wisteria: string;
  mauvelous: string;
  montecarlo: string;
}

interface NoteProps {
  id: string;
  creationTime: Date;
  title: string;
  content: string;
  color: string;
}
