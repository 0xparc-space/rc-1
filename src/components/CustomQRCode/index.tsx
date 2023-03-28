import { CustomQRCodeProps } from "./types";

import { QRCodeCanvas } from "qrcode.react";

function CustomQRCode({
  value,
  image,
  imageBackground = undefined,
  imagePosition = "center",
  tooltipMessage,
}: CustomQRCodeProps) {
  const Logo = image;

  console.log("value->", value);
  if (value == undefined || image == undefined) {
    return <></>;
  }
  const imageS = { src: image, height: 40, width: 40, excavate: true };
  const qrcode = (
    <div className="bg-gray-200 dark:bg-black p-4 flex justify-center items-center w-max bg-opacity-40 dark:bg-opacity-50 rounded-2xl">
      <QRCodeCanvas
        id="qrCode"
        value={value}
        size={180}
        bgColor={"white"}
        level={"M"}
        imageSettings={imageS}
      />
    </div>
  );
  return qrcode;
}

CustomQRCode.displayName = "CustomQRCode";

export default CustomQRCode;
