
export default function RawPage({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
