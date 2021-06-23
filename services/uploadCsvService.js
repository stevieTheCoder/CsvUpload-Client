import { toast } from "react-toastify";

export default function uploadCsvService(file) {
  const formData = new FormData();

  formData.append("File", file);

  fetch("http://localhost:5000/meter-reading-uploads", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (response.ok) return response.json();
      return response.json().then((response) => {
        if (response.status === 400) {
          let message = "Invalid file format";
          if (response.errors?.file[0]) {
            message = response.errors.file[0];
          }
          throw new Error(message);
        }
        throw new Error("Please try again");
      });
    })
    .then((response) => {
      toast(`Uploaded ${response} readings successfully`, {
        type: "success",
      });
    })
    .catch((error) => {
      toast(`${error}`, {
        type: "error",
      });
    });
}
