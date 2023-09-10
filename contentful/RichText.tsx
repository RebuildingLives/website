import { Document as RichTextDocument } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

type RichTextProps = {
  document: RichTextDocument | null;
  options?: any;
};

function RichText({ document, options }: RichTextProps) {
  if (!document) {
    return null;
  }

  return <>{documentToReactComponents(document, options)}</>;
}

export default RichText;
