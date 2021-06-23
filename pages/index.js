import Layout from "../components/layout/Layout";
import UploadFileInput from "../components/upload-files/UploadFileInput";

const navigation = [
  { name: "Upload Meter Readings", href: "/", current: true },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Index() {
  return (
    <Layout navigation={navigation} title={"Upload Meter Readings"}>
      <UploadFileInput />
    </Layout>
  );
}
