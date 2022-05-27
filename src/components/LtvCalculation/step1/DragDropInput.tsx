import { Dispatch, FunctionComponent, useCallback } from "react";
import { useRecoilValue } from "recoil";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";

import { isFileError } from "../../../store/inputAtom";
import { useFirestore } from "../../../context/firestore/FirestoreContext";

const DragDropInput: FunctionComponent<{ setFile: Dispatch<any> }> = ({
  setFile,
}) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFileName(acceptedFiles[0].name);
      setFile(acceptedFiles[0]);
    },
    [setFile]
  );

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "text/csv",
    });

  const errorCheck = useRecoilValue(isFileError);

  const { fileName, setFileName } = useFirestore();

  return (
    <div>
      <FileInput {...getRootProps()}>
        <input {...getInputProps()} />

        {isDragReject ? (
          <DropZone style={{ border: "2px dashed #F3694C" }}>
            <FileUploadDesc
              style={{ color: "#F3694C", fontSize: "16px", fontWeight: "bold" }}
            >
              CSV 형식의 파일만 입력가능합니다.
            </FileUploadDesc>
          </DropZone>
        ) : errorCheck ? (
          <DropZone style={{ border: "2px dashed #F3694C" }}>
            <FileUploadDesc>파일을 여기로 드래그하세요</FileUploadDesc>
          </DropZone>
        ) : isDragAccept ? (
          <DropZone style={{ border: "2px dashed #4a73f3" }} />
        ) : (
          <DropZone style={{ border: "2px dashed #4a73f3" }}>
            <FileUploadDesc>파일을 여기로 드래그하세요</FileUploadDesc>
          </DropZone>
        )}
      </FileInput>
    </div>
  );
};

export default DragDropInput;

const FileInput = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 650px;
  height: 257px;
`;

const DropZone = styled.div`
  position: absolute;
  width: 650px;
  height: 257px;
  border-radius: 10px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const FileUploadDesc = styled.span`
  position: relative;
  top: -10px;
  display: block;
  width: 252px;
  height: 16px;
  margin: 147px 199px;
  font-family: "Noto Sans Thai Looped", sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 29px;
  text-align: center;
  color: #c0c0c0;
`;
