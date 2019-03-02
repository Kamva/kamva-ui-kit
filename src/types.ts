export enum colorPallet {
  primary = "#6080FF",
  secondary = "#FF7F7F",
  primaryButtonColor = "#fff",
  secondaryButtonColor = "#fff",
  borderColor = "#bfbfbf",
  boxBackgroundColor = "#f0f0f0",
  black = "#000000",
  subText = "#A4A4A4",
  primaryFilter = "invert(55%) sepia(57%) saturate(4534%) hue-rotate(209deg) brightness(100%) contrast(102%)",
  primaryFilterHover = "invert(13%) sepia(100%) saturate(3645%) hue-rotate(230deg) brightness(111%) contrast(120%)",
  secondaryFilter = "invert(83%) sepia(29%) saturate(7234%) hue-rotate(310deg) brightness(100%) contrast(101%)",
  secondaryFilterHover = "invert(83%) sepia(29%) saturate(7234%) hue-rotate(310deg) brightness(100%) contrast(101%)",
  whiteFilter = "invert(99%) sepia(45%) saturate(0%) hue-rotate(56deg) brightness(108%) contrast(100%)",
}

export interface IHeadingProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
}

export interface IParagraphProps {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  padding?: string;
}
