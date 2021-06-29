import Layout from "../components/layout/Layout";
import UploadFileInput from "../components/upload-files/UploadFileInput";

const navigation = [
  { name: "Upload Meter Readings", href: "/", current: true },
];

export default function Index() {
  return (
    <Layout navigation={navigation} title={"Upload Meter Readings"}>
      <UploadFileInput />
    </Layout>
  );
}
