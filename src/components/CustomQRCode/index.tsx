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

function CustomQRCode({
  value,
  image,
  imageBackground=undefined,
  imagePosition= 'center',
  tooltipMessage,
}: CustomQRCodeProps) {
  const Logo = (image)

  console.log('value->', value)
if(value==undefined){
  return <></>
}
  return (
    <QRCode uri={value}
                size={288}
                ecl="M"
                clearArea={!!(imagePosition === 'center' && image)}
              />)

}

CustomQRCode.displayName = 'CustomQRCode';

export default CustomQRCode;
