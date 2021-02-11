
import {Dimensions,Platform} from 'react-native'

export const pagePadding = 20
export const cardPadding = 15
export const cardRadius = 5


export const inputFieldHeight = 50

export const tabFontSize = 10

export const smallFontSize = 12
export const smallerFontSize = 11
export const headingFontSize = 25
export const secHeadingFontSize = 16
export const secondFontSize = 13
export const thirdFontSize = 12


export const btnFontSize = 14
export const btnSmallFontSize = 12

export const modelRadius = 20

export const DEVICE_HEIGHT = Dimensions.get('window').height;
export const DEVICE_WIDTH = Dimensions.get('window').width;
export const DEVICE_HEIGHT_WITHOUTBACK = Dimensions.get('window').height-74;

export const DEVICE_TYPE = Platform.OS == 'ios' ? 2 : 1;