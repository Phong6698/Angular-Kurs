export interface Book {
  title:  string;
  subtitle:  string;
  isbn:  string;
  abstract:  string;
  numPages:  number;
  author:  string;
  // on the fly interface publisher
  publisher?: {
    name:  string,
    url:  string
  };
}
