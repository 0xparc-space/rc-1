import { CustomQRCodeProps } from './types';
import {
  QRCodeContainer,
  LogoContainer,
  LogoIcon,
  QRPlaceholder,
  QRCodeContent,
} from './styles';

import { AnimatePresence, motion } from 'framer-motion';

import { QRCode } from './QRCode';
import { QRCodeCanvas } from "qrcode.react";

function CustomQRCode({
  value,
  image,
  imageBackground=undefined,
  imagePosition= 'center',
  tooltipMessage,
}: CustomQRCodeProps) {
  const Logo = (image)

  console.log('value->', value)
if(value==undefined|| image==undefined){
  return  <></>
}
const imageS= {src: image, height:20,width:20,excavate: false}
const qrcode = (
  <QRCodeCanvas
    id="qrCode"
    value={value}
    size={288}
    bgColor={"#00ff00"}
    level={"M"}
    imageSettings={imageS}
  />
);
  return (
 
    qrcode)

}

CustomQRCode.displayName = 'CustomQRCode';

export default CustomQRCode;
