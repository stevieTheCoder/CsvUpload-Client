import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import uploadCsvService from "../../services/uploadCsvService";

export default function UploadFileInput() {
  const onDrop = useCallback((acceptedFiles) => {
    uploadCsvService(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="py-10 font-medium text-gray-900">
      <div
        className="flex items-center justify-center border-4 border-gray-200 border-dashed rounded-lg h-96"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag Meter Reading CSV file here</p>
        )}
      </div>
    </div>
  );
}
